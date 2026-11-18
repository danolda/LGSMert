// LGS Kışlası — "🤖 AI açıklama": bir sorunun adım adım, görsel/etkileşimli çözümünü tek dosyalık HTML olarak üretir.
// Gemini 4 Hydrogen, kota dolunca 3.8 Flash. Anahtar: Supabase secret GEMINI_API_KEY.
// Yalnız izinli profil(ler) kullanabilir: istemci cihaz/hesap token'ını gönderir (profiles.token_hash = sha256(token))
// ya da Google oturum JWT'si (e-posta izin listesinde).
// Google "yoğun" (503) dediğinde sıradaki modele geçilir; zincir bitince kısa bekleyip baştan denenir.
const MODELS = ["gemini-4-hydrogen", "gemini-3.8-flash", "gemini-3-flash-preview", "gemini-3.5-flash-lite", "gemini-3.7-flash", "gemini-3.5-flash", "gemini-3.6-flash"];
const ALLOWED_IDS = [20];                                   // Mertbabaking
const ALLOWED_EMAILS = ["merterenkarakose@gmail.com"];
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
let DIAG: any[] = [];
const json = (o: any, s = 200) =>
  new Response(JSON.stringify(s === 200 ? o : { ...o, diag: DIAG }), { status: s, headers: { ...CORS, "Content-Type": "application/json" } });
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
- Adımlar: 1) Soruyu anlayalım (verilen / istenen), 2..n) çözüm adımları (her adımda tek fikir), sonra şıkların tek tek değerlendirilmesi (doğru şık neden doğru, yanlışlar neden yanlış — kısa), en son "Akılda kalsın" özeti (1-3 madde: püf nokta / tuzak). Toplam 5-7 adım.
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
- KISA TUT: toplam boyut 25 KB'ı geçmesin; 5-7 adım; CSS ve JS'yi tekrarsız, kompakt yaz (yorum satırı yok). Hızlı yanıt önemli.
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
  const dbg = Deno.env.get("DEBUG_KEY") || "";
  const isDbg = !!dbg && req.headers.get("x-debug-key") === dbg;
  if (!isDbg && !(await allowed(b))) return json({ error: "forbidden" }, 403);
  if (isDbg && b.probe) {
    const out = await Promise.all((b.probe as string[]).map(async (m) => {
      const t = Date.now();
      const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent`, { method: "POST", headers: { "Content-Type": "application/json", "x-goog-api-key": key },
        body: JSON.stringify({ contents: [{ role: "user", parts: [{ text: "Bir cümleyle fotosentezi anlat." }] }] }), signal: AbortSignal.timeout(60000) }).catch((e) => new Response(String(e), { status: 599 }));
      const x = await r.text();
      return { m, st: r.status, ms: Date.now() - t, d: r.ok ? "" : x.slice(0, 120) };
    }));
    return json({ out });
  }
  if (isDbg && b.listModels) {
    const r = await fetch("https://generativelanguage.googleapis.com/v1beta/models?pageSize=200", { headers: { "x-goog-api-key": key } });
    const d = await r.json().catch(() => ({}));
    return json({ models: (d.models || []).filter((m: any) => (m.supportedGenerationMethods || []).includes("generateContent")).map((m: any) => m.name) });
  }

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
  const contents: any[] = [{ role: "user", parts }];

  // Akışlı üretim + devam: Gemini çıktısı akış (SSE) ile okunur. Duvar saati (~150 sn) dolmadan
  // biten kısım istemciye "partial" olarak döner; istemci aynı isteği cont ile yeniden gönderir ve
  // model kaldığı yerden sürdürür. Böylece yanıt ne kadar uzun sürerse sürsün zaman aşımı olmaz.
  const T0 = Date.now(), BUDGET = 120_000, FIRST = 25_000;
  const diag: any[] = []; DIAG = diag;
  const cont = b.cont && typeof b.cont.text === "string" ? { model: String(b.cont.model || ""), text: cut(b.cont.text, 200_000) } : null;
  if (cont && cont.text) {
    contents.push({ role: "model", parts: [{ text: cont.text }] } as any);
    contents.push({ role: "user", parts: [{ text: "Yanıtın yarıda kaldı. Tam olarak kaldığın karakterden devam et; önceki kısmı tekrar etme, açıklama ekleme, yalnız devamını yaz." }] });
  }
  type Out = { st: number; text: string; finish: string; partial: boolean; usage?: any; err?: string };
  const stream = async (MODEL: string, untilMs: number): Promise<Out> => {
    const ctl = new AbortController();
    let got = false, text = "", finish = "", usage: any = null;
    const firstT = setTimeout(() => { if (!got) ctl.abort(); }, Math.min(FIRST, untilMs));
    const endT = setTimeout(() => ctl.abort(), untilMs);
    const gc: any = { maxOutputTokens: 24000, thinkingConfig: /^gemini-2\./.test(MODEL) ? { thinkingBudget: 1024 } : { thinkingLevel: "low" } };
    try {
      const r = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:streamGenerateContent?alt=sse`,
        { method: "POST", headers: { "Content-Type": "application/json", "x-goog-api-key": key },
          body: JSON.stringify({ contents, generationConfig: gc }), signal: ctl.signal },
      );
      if (!r.ok || !r.body) { const e = await r.text().catch(() => ""); return { st: r.status, text: "", finish: "", partial: false, err: e.slice(0, 300) }; }
      const rd = r.body.getReader(), dec = new TextDecoder(); let buf = "";
      try {
        for (;;) {
          const { value, done } = await rd.read();
          if (done) break;
          buf += dec.decode(value, { stream: true });
          let i;
          while ((i = buf.indexOf("\n")) >= 0) {
            const line = buf.slice(0, i).trim(); buf = buf.slice(i + 1);
            if (!line.startsWith("data:")) continue;
            try {
              const d = JSON.parse(line.slice(5));
              const c = d.candidates?.[0];
              for (const p of c?.content?.parts || []) if (!p.thought && p.text) { text += p.text; got = true; }
              if (c?.content?.parts?.length) got = true;
              if (c?.finishReason) finish = c.finishReason;
              if (d.usageMetadata) usage = d.usageMetadata;
            } catch { /* yarım satır */ }
          }
        }
      } catch { /* süre doldu: elde olanla dön */ }
      return { st: 200, text, finish, partial: !finish, usage };
    } catch (e) {
      return { st: got ? 200 : (ctl.signal.aborted ? 504 : 503), text, finish, partial: true, err: String(e).slice(0, 200) };
    } finally { clearTimeout(firstT); clearTimeout(endT); }
  };

  const order = cont && MODELS.includes(cont.model) ? [cont.model, ...MODELS.filter((m) => m !== cont.model)] : MODELS;
  let out: Out | null = null, used = order[0];
  const quota = new Set<string>();
  chain: for (let pass = 0; pass < 4; pass++) {
    for (const MODEL of order) {
      if (quota.has(MODEL)) continue;
      const left = BUDGET - (Date.now() - T0);
      if (left < 20_000) break chain;
      used = MODEL;
      out = await stream(MODEL, left);
      diag.push({ m: MODEL, st: out.st, ms: Date.now() - T0, n: out.text.length, f: out.finish, e: (out.err || "").slice(0, 80) });
      if (out.st === 200 && (out.text || out.finish)) break chain;
      if (out.st === 429) quota.add(MODEL);
    }
    if (quota.size === order.length) break;
    await new Promise((z) => setTimeout(z, 3000 + pass * 2000));
  }
  if (out && out.st !== 200 && quota.size && quota.size < order.length) out = { ...out, st: 503 };
  const ms = Date.now() - T0;
  if (!out) return json({ error: "busy", retry_after: 15 }, 503);
  if (out.st === 429) return json({ error: "quota", status: 429 }, 503);
  if (out.st === 504) return json({ error: "timeout", status: 504, ms }, 504);
  if (out.st !== 200) return json({ error: out.st >= 500 ? "busy" : "gemini", status: out.st, detail: out.err }, out.st >= 500 ? 503 : 502);
  const full = (cont ? cont.text : "") + out.text;
  if (out.partial || out.finish === "MAX_TOKENS") {
    if (out.finish === "MAX_TOKENS" && !/<\/html>/i.test(full)) { /* devam ettir */ }
    if (!/<\/html>\s*(```)?\s*$/i.test(full.trim())) return json({ partial: true, model: used, text: full, n: full.length, ms, diag });
  }
  const html = extractHtml(full);
  if (!html) return json({ error: "empty", finish: out.finish, detail: full.slice(0, 300) }, 502);
  const title = (/<title>([\s\S]*?)<\/title>/i.exec(html)?.[1] || "").trim().slice(0, 120);
  return json({ html, title, model: used, ms, finish: out.finish, usage: out.usage || null, diag });
});
