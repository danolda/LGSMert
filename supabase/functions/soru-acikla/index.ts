// LGS Kışlası — "🤖 AI açıklama": bir sorunun adım adım, görsel/etkileşimli çözümünü tek dosyalık HTML olarak üretir.
// Gemini 4 Hydrogen, kota dolunca 3.8 Flash. Anahtar: Supabase secret GEMINI_API_KEY.
// Yalnız izinli profil(ler) kullanabilir: istemci cihaz/hesap token'ını gönderir (profiles.token_hash = sha256(token))
// ya da Google oturum JWT'si (e-posta izin listesinde).
const MODELS = ["gemini-4-hydrogen", "gemini-3.8-flash"];
const ALLOWED_IDS = [20];                                   // Mertbabaking
const ALLOWED_EMAILS = ["merterenkarakose@gmail.com"];
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (o: unknown, s = 200) =>
  new Response(JSON.stringify(o), { status: s, headers: { ...CORS, "Content-Type": "application/json" } });
const LIM = { images: 4, bytes: 6_000_000 };                // base64 uzunluğu (~4,5 MB ikili)

async function sha256hex(s: string) {
  const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return Array.from(new Uint8Array(b)).map((x) => x.toString(16).padStart(2, "0")).join("");
}
async function allowed(b: any): Promise<boolean> {
  const url = Deno.env.get("SUPABASE_URL"), srv = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"), anon = Deno.env.get("SUPABASE_ANON_KEY");
  if (!url) return false;
  const tok = typeof b.token === "string" ? b.token : "";
  if (srv && tok.length >= 20) {
    const h = await sha256hex(tok);
    const r = await fetch(`${url}/rest/v1/profiles?select=id&token_hash=eq.${h}&id=in.(${ALLOWED_IDS.join(",")})`,
      { headers: { apikey: srv, Authorization: `Bearer ${srv}` } }).catch(() => null);
    if (r && r.ok) { const d = await r.json().catch(() => []); if (Array.isArray(d) && d.length) return true; }
  }
  const jwt = typeof b.jwt === "string" ? b.jwt : "";
  if (jwt && (anon || srv)) {
    const r = await fetch(`${url}/auth/v1/user`, { headers: { apikey: (anon || srv) as string, Authorization: `Bearer ${jwt}` } }).catch(() => null);
    if (r && r.ok) { const u = await r.json().catch(() => ({})); if (u && ALLOWED_EMAILS.includes(String(u.email || "").toLowerCase())) return true; }
  }
  return false;
}

const imgPart = (d: string) => {
  const m = /^data:(image\/[a-z+.-]+);base64,(.*)$/s.exec(d || "");
  return m ? { inline_data: { mime_type: m[1], data: m[2] } } : null;
};
const cut = (s: any, n: number) => String(s ?? "").slice(0, n);

const USER_PROMPT = "Sitemde bu sorunun çözümünü anlamadım ayrıntılı etap etap görsellik yada interaktif animasyon kullanarak anlatırmısın.";

const RULES =
`Sen LGS'ye hazırlanan 14 yaşında bir 8. sınıf öğrencisine ders anlatan, sabırlı ve çok iyi bir öğretmensin.
Görevin: aşağıdaki soruyu ADIM ADIM, görsel ve etkileşimli bir mini ders olarak anlatan TEK DOSYALIK bir HTML sayfası yazmak.

İÇERİK KURALLARI
- Dil: sade, samimi Türkçe; öğrenciye "sen" diye hitap et. Kısa cümleler. Terimleri ilk geçtiği yerde bir cümleyle açıkla.
- Verilen resmî doğru cevap KESİNLİKLE doğrudur; çözümün o şıkka varmalı. Başka bir şıkkı doğru gösterme.
- Sorunun görseli verildiyse önce görseli dikkatle oku (metin, tablo, grafik, şekil, şıklar); soruda ne verildiğini ve ne istendiğini kendi cümlelerinle özetle.
- Adımlar: 1) Soruyu anlayalım (verilen / istenen), 2..n) çözüm adımları (her adımda tek fikir), sonra şıkların tek tek değerlendirilmesi (doğru şık neden doğru, yanlışlar neden yanlış — kısa), en son "Akılda kalsın" özeti (1-3 madde: püf nokta / tuzak). Toplam 5-9 adım.
- Öğrencinin işaretlediği şık verildiyse ve yanlışsa, o şıkkı neden seçmiş olabileceğini ve hatanın nerede olduğunu nazikçe açıkla.
- ÖĞRENCİNİN NOTU verildiyse ve içinde bir soru, takılma ya da hatalı bir düşünce varsa: ayrı bir "🧩 Takıldığın yer" adımı ekle; notunu kısaca alıntıla, yanlış düşünceyi düzelt, doğru yolu göster. Not boşsa ya da anlamsızsa bu adımı ekleme.
- Matematik/fen ifadeleri için LaTeX, $…$, \\frac, MathJax KULLANMA. Düz metin ve HTML kullan: × ÷ − ± √ ² ³ ≤ ≥ ≠ π °, <sup>, <sub>, kesir için küçük bir CSS kesir kutusu (pay üstte, çizgi, payda altta).
- Uydurma bilgi verme; soruda olmayan sayı uydurma.

TEKNİK KURALLAR (çok önemli)
- Çıktı yalnızca TEK bir tam HTML belgesi: <!doctype html><html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>…</title><style>…</style></head><body>…<script>…</script></body></html>
- Dış kaynak YOK: CDN, Google Fonts, <img src="http…">, fetch/XMLHttpRequest, import, localStorage/sessionStorage/cookie YOK. Yazı tipi: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif. Sorunun görselini yeniden yerleştirme; gereken şekli/grafiği/tabloyu kendin SVG ya da HTML olarak çiz.
- Sayfa iframe içinde, telefonda 390 px genişlikte açılacak: tek sütun, yatay taşma yok (svg { max-width:100%; height:auto }, tablolar dar), yazı en az 15 px, dokunma hedefleri en az 44 px.
- Koyu tema: arka plan #0b0f19, kartlar #141b2d, yazı #e8edf7, vurgu camgöbeği #22d3ee ve mavi #3b82f6, doğru yeşil #22c55e, yanlış kırmızı #ef4444, uyarı sarı #facc15.
- Üstte başlık ve "Adım 2 / 7" gibi ilerleme çubuğu; ekranda aynı anda TEK adım; altta sabit "◀ Önceki adım" ve "Sonraki adım ▶" düğmeleri (ilk adımda Önceki pasif, son adımda Sonraki yerine "Baştan izle"). Adım değişince yumuşak geçiş animasyonu. Klavye ok tuşları da çalışsın.
- Her adımda mümkünse görsel kullan: SVG çizim (şekil, sayı doğrusu, grafik, tablo, deney düzeneği, harita, akış oku), CSS/SVG animasyonu (adım açılınca çizilen çizgiler, beliren etiketler, hareket eden nesneler, vurgulanan sayılar). En az 2 adımda bir etkileşim olsun: kaydırıcı (input range) ile değer değiştirip sonucu canlı görmek, "İpucunu göster" ile açılan kutu, şıklara dokununca neden doğru/yanlış olduğunu gösteren kart, sürükle-bırak yerine dokun-seç vb.
- JavaScript sade ve hatasız olsun (ES2017, tüm öğeler DOMContentLoaded'dan sonra seçilsin, null kontrolü). Konsola hata düşmemeli. alert/confirm/prompt kullanma.
- Toplam boyut 60 KB'ı geçmesin.
- Yanıtına açıklama yazma; yalnızca \`\`\`html ile başlayan tek bir kod bloğu ver.`;

function extractHtml(t: string): string {
  let h = t;
  const m = /```html\s*([\s\S]*?)(```|$)/i.exec(t);
  if (m) h = m[1];
  else { const i = t.search(/<!doctype html|<html/i); if (i >= 0) h = t.slice(i); }
  h = h.trim();
  const e = h.toLowerCase().lastIndexOf("</html>");
  if (e >= 0) h = h.slice(0, e + 7);
  if (!/<html|<body|<div/i.test(h)) return "";
  // güvenlik/çevrimdışı: dış betik, stil, yazı tipi bağlantılarını ayıkla
  h = h.replace(/<script[^>]*\bsrc\s*=\s*["']?https?:[^>]*>\s*<\/script>/gi, "")
       .replace(/<link[^>]*href\s*=\s*["']?https?:[^>]*>/gi, "")
       .replace(/@import\s+url\([^)]*\)\s*;?/gi, "");
  if (!/<html/i.test(h)) h = `<!doctype html><html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body>${h}</body></html>`;
  return h;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "POST" }, 405);
  const key = Deno.env.get("GEMINI_API_KEY");
  if (!key) return json({ error: "no_key" }, 500);
  let b: any;
  try { b = await req.json(); } catch { return json({ error: "bad_json" }, 400); }
  if (!(await allowed(b))) return json({ error: "forbidden" }, 403);

  const images: string[] = Array.isArray(b.images) ? b.images.filter((s: any) => typeof s === "string").slice(0, LIM.images) : [];
  const size = images.reduce((n, s) => n + s.length, 0);
  if (size > LIM.bytes) return json({ error: "too_big", max: LIM.bytes }, 413);
  const q = cut(b.question, 12000), ans = cut(b.answer, 4).toUpperCase();
  const choices: string[] = Array.isArray(b.choices) ? b.choices.slice(0, 5).map((c: any) => cut(c, 3000)) : [];
  if (!q && !images.length) return json({ error: "missing" }, 400);
  if (!ans) return json({ error: "missing_answer" }, 400);
  const note = cut(b.note, 1500).trim(), pick = cut(b.pick, 4).toUpperCase();
  const L = ["A", "B", "C", "D", "E"];

  const parts: any[] = [];
  parts.push({ text: `${RULES}\n\nÖĞRENCİNİN İSTEĞİ: "${USER_PROMPT}"` });
  parts.push({ text:
`\n=== SORU ===
Ders: ${cut(b.subject, 60)}${b.topic ? `\nKonu: ${cut(b.topic, 120)}` : ""}${b.label ? `\nKaynak: ${cut(b.label, 120)}` : ""}
${q ? `Soru metni (HTML/SVG olabilir):\n${q}` : "Soru metni ve şıklar aşağıdaki görselde."}
${choices.length ? "\nŞıklar:\n" + choices.map((c, i) => `${L[i]}) ${c}`).join("\n") : ""}
${images.length ? `\n(Sorunun ${images.length > 1 ? images.length + " görseli" : "görseli"} aşağıda.)` : ""}` });
  for (const d of images) { const ip = imgPart(d); if (ip) parts.push(ip); }
  parts.push({ text:
`\nRESMÎ DOĞRU CEVAP: ${ans}
${b.solution ? `\nSitedeki mevcut çözüm (öğrenci bunu okudu ama anlamadı; doğru kabul et, daha iyi anlat):\n${cut(b.solution, 9000)}` : ""}
${pick ? `\nÖğrencinin işaretlediği şık: ${pick}${pick === ans ? " (doğru)" : " (yanlış)"}` : ""}
${note ? `\nÖĞRENCİNİN NOTU (nereye takıldığı): "${note}"\nBu notta bir takılma/sorun/hatalı düşünce varsa çözümde ayrı bir "🧩 Takıldığın yer" adımıyla ele al ve açıkla.` : ""}
\nŞimdi HTML'yi yaz.` });
  const contents = [{ role: "user", parts }];

  let r: Response | null = null, t = "", used = MODELS[0];
  const T0 = Date.now(), BUDGET = 135_000;     // edge function duvar saati ~150 sn
  for (const MODEL of MODELS) {
    used = MODEL;
    for (let att = 0; att < 3; att++) {
      const left = BUDGET - (Date.now() - T0);
      if (left < 25_000) break;
      const gc: any = { maxOutputTokens: 32768 };   // Gemini 4: temperature gönderilmez
      if (/^gemini-[34]/.test(MODEL)) gc.thinkingConfig = { thinkingLevel: "medium" };
      r = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
        { method: "POST", headers: { "Content-Type": "application/json", "x-goog-api-key": key },
          body: JSON.stringify({ contents, generationConfig: gc }), signal: AbortSignal.timeout(left) },
      ).catch((e) => new Response(String(e), { status: String(e).includes("imeout") ? 504 : 503 }));
      t = await r.text();
      if (r.ok) break;
      if ((r.status === 503 || r.status === 500) && BUDGET - (Date.now() - T0) > 60_000) { await new Promise((z) => setTimeout(z, 1500 * (att + 1))); continue; }
      break;
    }
    if (r && r.ok) break;
    if (r && ![404, 429, 500, 503].includes(r.status)) break;
  }
  const ms = Date.now() - T0;
  if (!r) return json({ error: "busy", retry_after: 15 }, 503);
  if (!r.ok && r.status === 429) return json({ error: "quota", status: 429, detail: t.slice(0, 300) }, 503);
  if (!r.ok && r.status === 504) return json({ error: "timeout", status: 504, ms }, 504);
  if (!r.ok && (r.status === 503 || r.status === 500)) return json({ error: "busy", status: r.status, retry_after: 15 }, 503);
  if (!r.ok) return json({ error: "gemini", status: r.status, detail: t.slice(0, 500) }, 502);
  try {
    const d = JSON.parse(t);
    const c = d.candidates?.[0];
    const txt = c?.content?.parts?.map((p: any) => (p.thought ? "" : p.text || "")).join("") || "";
    const html = extractHtml(txt);
    if (!html) return json({ error: "empty", finish: c?.finishReason, detail: txt.slice(0, 300) }, 502);
    const title = (/<title>([\s\S]*?)<\/title>/i.exec(html)?.[1] || "").trim().slice(0, 120);
    return json({ html, title, model: used, ms, finish: c?.finishReason || "", usage: d.usageMetadata || null });
  } catch {
    return json({ error: "parse", detail: t.slice(0, 500) }, 502);
  }
});
