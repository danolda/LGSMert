// LGS Kışlası — Yazılı cevap puanlama (Gemini 3.8 Flash)
// Anahtar: Supabase secret GEMINI_API_KEY (sitede yok).
const MODELS = ["gemini-3.8-flash"];
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (o: unknown, s = 200) =>
  new Response(JSON.stringify(o), { status: s, headers: { ...CORS, "Content-Type": "application/json" } });

const PART_SCHEMA = {
  type: "object",
  properties: {
    label: { type: "string" },
    student_answer: { type: "string" },
    result_correct: { type: "boolean" },
    score: { type: "integer" },
    feedback: { type: "string" },
  },
  required: ["label", "student_answer", "result_correct", "score", "feedback"],
};
const SCHEMA_ONE = {
  type: "object",
  properties: { parts: { type: "array", items: PART_SCHEMA }, total: { type: "integer" }, summary: { type: "string" } },
  required: ["parts", "total", "summary"],
};
const SCHEMA_EXAM = {
  type: "object",
  properties: {
    questions: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          parts: { type: "array", items: PART_SCHEMA },
          total: { type: "integer" },
          summary: { type: "string" },
        },
        required: ["id", "parts", "total", "summary"],
      },
    },
    total: { type: "integer" },
    summary: { type: "string" },
  },
  required: ["questions", "total", "summary"],
};

const LIM = { questions: 40, parts: 80, images: 40, bytes: 18_000_000 };

const RULES =
`Kurallar:
- Her alt madde için öğrencinin cevabını oku (yazılı metin yoksa fotoğraftaki el yazısından çıkar; student_answer alanına ne okuduğunu yaz).
- result_correct: öğrencinin vardığı SONUÇ/nihai cevap cevap anahtarıyla anlamca aynıysa true (yazım farkı, eş anlamlı ifade, eşdeğer sayı/birim kabul). İşlem yolu hatalı olsa bile sonuç doğruysa true.
- score 0-100: sonuç doğruluğu, çözüm yolu/gerekçe ve açıklamanın tamlığı. Sonuç doğru ama yol eksik/hatalıysa 50-80 arası ver.
- feedback: Türkçe, öğrenciye "sen" diye hitap eden 1-3 cümle; neyi doğru yaptı, neyi nasıl daha iyi yapabilir. Cevap yanlışsa doğru düşünce yolunu kısaca göster.
- total: alt maddelerin ortalaması (0-100). summary: tek cümle genel değerlendirme.
Uydurma yapma; okunamayan cevabı boş say ve feedback'te belirt.`;

const partLines = (parts: any[]) => parts.map((p: any, i: number) => {
  const l = String(p.label || "cevap").slice(0, 20);
  return `[madde ${i + 1}: ${l}] Cevap anahtarı: ${String(p.key || "").slice(0, 1500)}\n[madde ${i + 1}: ${l}] Öğrencinin yazdığı: ${String(p.answer || "").slice(0, 2000) || "(boş — fotoğrafa bak)"}`;
}).join("\n\n");

const imgPart = (d: string) => {
  const m = /^data:(image\/[a-z]+);base64,(.*)$/s.exec(d || "");
  return m ? { inline_data: { mime_type: m[1], data: m[2] } } : null;
};
const clamp = (n: any) => Math.max(0, Math.min(100, Math.round(Number(n) || 0)));
const normPart = (p: any, inp: any) => ({
  label: String(inp?.label || p?.label || "cevap"),
  student_answer: String(p?.student_answer || ""),
  result_correct: !!p?.result_correct,
  score: clamp(p?.score),
  feedback: String(p?.feedback || ""),
});

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "POST" }, 405);
  const key = Deno.env.get("GEMINI_API_KEY");
  if (!key) return json({ error: "no_key" }, 500);
  let b: any;
  try { b = await req.json(); } catch { return json({ error: "bad_json" }, 400); }

  // Eski tek soru biçimi {question, parts, images} → tek elemanlı sınav
  const single = !Array.isArray(b.questions);
  const qsIn: any[] = single
    ? [{ id: "1", question: b.question, parts: b.parts, images: b.images }]
    : b.questions;
  if (!qsIn.length) return json({ error: "missing" }, 400);
  if (qsIn.length > LIM.questions) return json({ error: "too_many", max: LIM.questions }, 413);
  const qs = qsIn.map((q: any, i: number) => ({
    id: String(q?.id ?? i + 1).slice(0, 20),
    question: String(q?.question || "").slice(0, 6000),
    parts: Array.isArray(q?.parts) ? q.parts.slice(0, 12) : [],
    images: Array.isArray(q?.images) ? q.images.filter((s: any) => typeof s === "string") : [],
  }));
  if (qs.some((q) => !q.parts.length) || (single && !qs[0].question)) return json({ error: "missing" }, 400);
  const nParts = qs.reduce((n, q) => n + q.parts.length, 0);
  const nImgs = qs.reduce((n, q) => n + q.images.length, 0);
  if (nParts > LIM.parts) return json({ error: "too_many_parts", max: LIM.parts }, 413);
  if (nImgs > LIM.images) return json({ error: "too_many_images", max: LIM.images }, 413);
  const size = qs.reduce((n, q) => n + q.images.reduce((m: number, s: string) => m + s.length, 0), 0);
  if (size > LIM.bytes) return json({ error: "too_big", max: LIM.bytes }, 413);

  // İstem: her soru kendi metni + maddeleri + fotoğrafları (fotoğraflar sorunun hemen ardından)
  const parts: any[] = [];
  parts.push({ text:
`Sen 8. sınıf (LGS) öğretmenisin. MEB "Yazılıya Hazırlanıyorum" açık uçlu ${single ? "sorusunu" : "sınavındaki soruları"} cevap anahtarına göre puanla.
Ders: ${String(b.subject || "").slice(0, 80)}
${single ? "" : `Toplam ${qs.length} soru var. Her soru "=== SORU id=… ===" başlığıyla verilir; o sorunun öğrenci fotoğrafları (varsa) başlığından sonra, bir sonraki soru başlığından önce gelir. Bir sorunun fotoğrafını yalnızca o soru için kullan.
Çıktıda "questions" dizisine girişteki her soru için, girişteki sırayla bir öğe yaz (id aynen). Her sorunun "parts" dizisi o sorunun maddeleriyle aynı sayıda ve aynı sırada olmalı (madde 1, madde 2, …); label alanına maddenin etiketini yaz. Sınavın genel "total"ı tüm maddelerin ortalaması, "summary"si tek cümle genel değerlendirme.
`}
${RULES}` });
  for (const q of qs) {
    parts.push({ text:
`\n=== SORU id=${q.id} (${q.parts.length} madde${q.images.length ? `, ${q.images.length} fotoğraf` : ", fotoğraf yok"}) ===
SORU:
${q.question}

ALT MADDELER:
${partLines(q.parts)}` });
    for (const d of q.images) { const ip = imgPart(d); if (ip) parts.push(ip); }
  }
  const contents = [{ role: "user", parts }];
  const SCHEMA = single ? SCHEMA_ONE : SCHEMA_EXAM;

  let r: Response | null = null, t = "";
  const T0 = Date.now(), BUDGET = 135_000;   // edge function duvar saati ~150 sn
  for (const MODEL of MODELS) {
    for (let att = 0; att < 4; att++) {
      const left = BUDGET - (Date.now() - T0);
      if (att > 0 && left < 30_000) break;   // yeniden denemeye vakit yok → istemci "busy" ile bekleyip tekrar dener
      const gc: any = { responseMimeType: "application/json", responseSchema: SCHEMA, temperature: 0.2 };
      if (MODEL.startsWith("gemini-3")) gc.thinkingConfig = { thinkingLevel: "low" };
      r = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
        { method: "POST", headers: { "Content-Type": "application/json", "x-goog-api-key": key },
          body: JSON.stringify({ contents, generationConfig: gc }), signal: AbortSignal.timeout(Math.max(10_000, left)) },
      ).catch((e) => new Response(String(e), { status: 503 }));
      t = await r.text();
      if (r.ok) break;
      if ((r.status === 503 || r.status === 500) && BUDGET - (Date.now() - T0) > 35_000) { await new Promise((z) => setTimeout(z, 1500 * (att + 1))); continue; }
      break;
    }
    if (r && r.ok) break;
    if (r && ![404, 429, 500, 503, 400].includes(r.status)) break;
  }
  r = r as Response;
  if (!r.ok && r.status === 429) return json({ error: "quota", status: 429, retry_after: 60, detail: t.slice(0, 400) }, 503);
  if (!r.ok && (r.status === 503 || r.status === 500)) return json({ error: "busy", status: r.status, retry_after: 15 }, 503);
  if (!r.ok) return json({ error: "gemini", status: r.status, detail: t.slice(0, 500) }, 502);
  try {
    const d = JSON.parse(t);
    const txt = d.candidates?.[0]?.content?.parts?.map((p: any) => p.text || "").join("") || "";
    const out = JSON.parse(txt);
    if (single) {
      const op = Array.isArray(out.parts) ? out.parts : [];
      return json({ parts: qs[0].parts.map((p: any, k: number) => normPart(op[k], p)), total: clamp(out.total), summary: String(out.summary || "") });
    }
    const oq: any[] = Array.isArray(out.questions) ? out.questions : [];
    const byId: Record<string, any> = {};
    oq.forEach((x) => { if (x && x.id != null && !byId[String(x.id)]) byId[String(x.id)] = x; });
    const res = qs.map((q, i) => {
      const g = byId[q.id] || (oq.length === qs.length ? oq[i] : null);
      if (!g || !Array.isArray(g.parts)) return { id: q.id, missing: true, parts: [], total: 0, summary: "" };
      return { id: q.id, parts: q.parts.map((p: any, k: number) => normPart(g.parts[k], p)), total: clamp(g.total), summary: String(g.summary || "") };
    });
    return json({ questions: res, total: clamp(out.total), summary: String(out.summary || ""), model: MODELS[0] });
  } catch (e) {
    return json({ error: "parse", detail: t.slice(0, 500) }, 502);
  }
});
