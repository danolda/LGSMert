// Konu dosyalarını doğrular: soru sayısı, şık sayısı, cevap harfi, çözümdeki "Cevap X" ile uyum
const fs = require('fs'); const path = require('path');
const root = path.join(__dirname, '..');
global.window = {}; global.LGS = null;
require(path.join(root, 'data/index.js')); global.LGS = window.LGS;
for (const f of fs.readdirSync(path.join(root, 'data/past'))) require(path.join(root, 'data/past', f));
const { required, LEVELS } = require('./targets');
let problems = 0, total = 0, done = 0;
for (const s of LGS.subjects) for (const t of s.topics) {
  const fp = path.join(root, 'data/topics', t.id + '.js');
  const past = Object.values(LGS.past).filter(p => p.t === t.id).length;
  if (!fs.existsSync(fp)) { console.log('EKSİK  ', t.id, 'çıkmış:', past, 'gereken özgün:', required(t.id, past) - past); continue; }
  try { require(fp); } catch (e) { console.log('HATA   ', t.id, e.message); problems++; continue; }
  const T = LGS.topics[t.id]; if (!T) { console.log('KAYIT YOK', t.id); problems++; continue; }
  const n = (T.qs || []).length; total += n + past; done++;
  const msg = [];
  const hasLv = (T.qs || []).some(q => q.lv);
  if (n + past !== required(t.id, past, hasLv)) msg.push('toplam ' + (n + past) + ' (gereken ' + required(t.id, past, hasLv) + ')');
  if ((T.qs || []).some(q => q.lv)) { for (const lv in LEVELS) { const c = T.qs.filter(q => q.lv === lv).length; if (c !== LEVELS[lv]) msg.push(lv + ' ' + c + ' (gereken ' + LEVELS[lv] + ')'); } }
  if (!T.summary || T.summary.length < 500) msg.push('özet kısa');
  (T.qs || []).forEach((q, i) => {
    if (!Array.isArray(q.c) || q.c.length !== 4) msg.push('#' + (i + 1) + ' şık sayısı');
    if (!/^[ABCD]$/.test(q.a)) msg.push('#' + (i + 1) + ' cevap');
    const m = [...String(q.s).matchAll(/Cevap <b>([A-D])/g)].map(x => x[1]);
    if (m.length && m[m.length - 1] !== q.a) msg.push('#' + (i + 1) + ' çözüm-cevap uyumsuz');
    if (!m.length) msg.push('#' + (i + 1) + ' çözümde cevap yok');
    if (new Set(q.c).size !== 4) msg.push('#' + (i + 1) + ' tekrar eden şık');
  });
  const dist = {A:0,B:0,C:0,D:0}; (T.qs||[]).forEach(q => dist[q.a]++);
  console.log(msg.length ? 'UYARI  ' : 'TAMAM  ', t.id, 'özgün:', n, 'çıkmış:', past, JSON.stringify(dist), msg.join('; '));
  if (msg.length) problems++;
}
console.log('konu:', done, 'toplam soru:', total, 'sorunlu:', problems);

// ---- Adım Adım Anlatım dersleri (data/anlatim) + seslendirme (audio/anlatim/<konu>/meta.json)
(() => {
  const AD = path.join(root, 'data/anlatim'), AU = path.join(root, 'audio/anlatim');
  window.LGS_AN = {}; require(path.join(AD, 'index.js'));
  const IDX = window.LGS_AN_INDEX || {}, topicIds = new Set(LGS.subjects.flatMap(s => s.topics.map(t => t.id)));
  const fnv = s => { let h = 0x811c9dc5; for (const ch of s) { h ^= ch.codePointAt(0); h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, '0'); };
  let an = 0, anBad = 0, clips = 0;
  // ---- TDK yazım denetimi: görünen metinler (sesli okunuş alanları v/whyV/hintV/…V hariç)
  const TLF = JSON.parse(fs.readFileSync(path.join(__dirname, 'telaffuz.json'), 'utf8'));
  const LETS = 'a-zçğıöşüâîûA-ZÇĞİÖŞÜÂÎÛ';
  const up = c => c === 'i' ? 'İ' : c === 'ı' ? 'I' : c.toUpperCase();
  const esc = x => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const YH = (TLF.yazim.hata || []).map(e => ({ rx: new RegExp('(?<![' + LETS + '])[' + esc(e.y[0]) + esc(up(e.y[0])) + ']' + esc(e.y.slice(1)) + (e.tam ? '(?![' + LETS + '])' : ''), 'g'), e }));
  const TB = '(?:(?<![' + LETS + '])(?=[' + LETS + '])|(?<=[' + LETS + '])(?![' + LETS + ']))';   // Türkçe harf sınırı (JS \\b yalnız ASCII)
  const YB = (TLF.yazim.bak || []).map(e => ({ rx: new RegExp(e.re.split('\\b').join(TB), 'g'), e }));
  // ---- etkileşimli sahne (sahne.ia) biçim denetimi · tools/ANLATIM.md › Etkileşimli sahneler
  const IA_TIPS = ['eslestir', 'sirala', 'eleme', 'dogruyanlis', 'bosluk', 'grup', 'gorselsec', 'kaydir'];
  const strs = (a, lo, hi, name, e) => { if (!Array.isArray(a) || a.length < lo || a.length > hi) e.push(name + ' ' + lo + '–' + hi + ' öğe olmalı'); else { if (a.some(x => typeof x !== 'string' || !x.trim())) e.push(name + ' boş/metin değil'); if (new Set(a).size !== a.length) e.push(name + ' tekrar eden öğe'); } };
  function iaCheck(ia) {
    const e = [];
    if (!IA_TIPS.includes(ia.tip)) return ['bilinmeyen tip (' + IA_TIPS.join(', ') + ')'];
    if (!ia.q) e.push('q (yönerge/soru) yok');
    if (!ia.hint || !ia.why) e.push('hint/why eksik');
    const num = x => typeof x === 'number' && isFinite(x);
    switch (ia.tip) {
      case 'eslestir':
        strs(ia.sol, 3, 6, 'sol', e); strs(ia.sag, 3, 6, 'sag', e);
        if ((ia.sol || []).length !== (ia.sag || []).length) e.push('sol/sag uzunluğu farklı'); break;
      case 'sirala': strs(ia.ogeler, 3, 7, 'ogeler', e); break;
      case 'eleme':
        strs(ia.ogeler, 4, 9, 'ogeler', e);
        if (!Array.isArray(ia.ele) || !ia.ele.length || ia.ele.some(k => !Number.isInteger(k) || k < 0 || k >= (ia.ogeler || []).length) || new Set(ia.ele).size !== ia.ele.length) e.push('ele: geçerli indis listesi olmalı');
        else if (ia.ele.length >= ia.ogeler.length - 1) e.push('en az 2 öğe kalmalı'); break;
      case 'dogruyanlis':
        if (!Array.isArray(ia.ifadeler) || ia.ifadeler.length < 3 || ia.ifadeler.length > 5) { e.push('ifadeler 3–5 olmalı'); break; }
        if (ia.ifadeler.some(r => !r || !r.m || typeof r.d !== 'boolean')) e.push('her ifade { m, d:true|false } olmalı');
        if (ia.ifadeler.every(r => r.d) || ia.ifadeler.every(r => !r.d)) e.push('hem doğru hem yanlış ifade olmalı');
        if (ia.ifadeler.some(r => !r.a)) e.push('her ifadeye kısa açıklama (a) yaz'); break;
      case 'bosluk': {
        const B = String(ia.metin || '').split(/\[\^?_\]/).length - 1;
        if (!B || B > 4) e.push('metin 1–4 tane [_] / [^_] içermeli');
        if (!Array.isArray(ia.cevap) || ia.cevap.length !== B) e.push('cevap sayısı boşluk sayısına eşit olmalı');
        if (!Array.isArray(ia.secenek) || ia.secenek.length <= B || ia.secenek.length > 8) e.push('secenek: boşluktan fazla (çeldirici), en çok 8');
        else { const pool = ia.secenek.slice(); for (const c of ia.cevap || []) { const k = pool.indexOf(c); if (k < 0) e.push('cevap “' + c + '” seçeneklerde yok'); else pool.splice(k, 1); } }
        break; }
      case 'grup':
        strs(ia.gruplar, 2, 4, 'gruplar', e);
        if (!Array.isArray(ia.ogeler) || ia.ogeler.length < 4 || ia.ogeler.length > 10) e.push('ogeler 4–10 olmalı');
        else {
          if (ia.ogeler.some(o => !o || !o.m || !Number.isInteger(o.g) || o.g < 0 || o.g >= (ia.gruplar || []).length)) e.push('her öğe { m, g:grup indisi }');
          if ((ia.gruplar || []).some((_, k) => !ia.ogeler.some(o => o.g === k))) e.push('boş kalan grup var');
          if (new Set(ia.ogeler.map(o => o.m)).size !== ia.ogeler.length) e.push('tekrar eden öğe');
        } break;
      case 'gorselsec': {
        const ids = [...String(ia.svg || '').matchAll(/data-b="([^"]+)"/g)].map(m => m[1]);
        if (!/^\s*<svg[\s\S]*<\/svg>\s*$/.test(ia.svg || '')) e.push('svg tek bir <svg> olmalı');
        if (ids.length < 2) e.push('en az 2 bölge (data-b) olmalı');
        if (new Set(ids).size !== ids.length) e.push('data-b kimlikleri tekrar ediyor');
        if (!Array.isArray(ia.dogru) || !ia.dogru.length || ia.dogru.some(d => !ids.includes(d))) e.push('dogru: svg’deki data-b kimlikleri olmalı');
        else if (ia.dogru.length >= ids.length) e.push('yanlış bölge de olmalı');
        break; }
      case 'kaydir':
        if (![ia.min, ia.max, ia.adim, ia.cevap].every(num) || !(ia.max > ia.min) || !(ia.adim > 0)) { e.push('min < max, adim > 0, cevap sayı olmalı'); break; }
        if (ia.cevap < ia.min || ia.cevap > ia.max) e.push('cevap aralık dışında');
        if (Math.abs((ia.cevap - ia.min) / ia.adim - Math.round((ia.cevap - ia.min) / ia.adim)) > 1e-6) e.push('cevap adım ızgarasında değil');
        if (ia.tol != null && (!num(ia.tol) || ia.tol < 0 || ia.tol > (ia.max - ia.min) / 8)) e.push('tol 0 ile aralığın 1/8’i arasında olmalı');
        if (Math.abs((ia.bas != null ? ia.bas : ia.min) - ia.cevap) <= (ia.tol || 0)) e.push('başlangıç değeri cevaba eşit (bas ver)');
        if ((ia.max - ia.min) / ia.adim > 400) e.push('çok fazla adım (≤ 400)');
        if (ia.etiket && (!Array.isArray(ia.etiket) || ia.etiket.some(x => !num(x) || x < ia.min || x > ia.max))) e.push('etiket aralık içi sayılar olmalı');
        break;
    }
    return e;
  }
  function visibleTexts(o, key, out) {
    if (typeof o === 'string') { if (key !== 'v' && !/V$/.test(key || '')) out.push(o); return out; }
    if (Array.isArray(o)) { o.forEach(x => visibleTexts(x, key, out)); return out; }
    if (o && typeof o === 'object') for (const k in o) visibleTexts(o[k], k, out);
    return out;
  }
  function yazimCheck(L) {
    const ok = new Set(L.yazimOk || []), res = [], seen = new Set();
    for (const raw of visibleTexts(L, '', [])) {
      const t = raw.normalize('NFC').replace(/<\/?(?:span|b|i|u|em|strong|sup|sub|mark)\b[^>]*>/gi, '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ');
      for (const { rx, e } of YH) for (const m of t.matchAll(rx)) {
        const k = 'h' + m[0] + e.d; if (ok.has(m[0]) || seen.has(k)) continue; seen.add(k);
        res.push({ hata: true, t: '“' + m[0] + '” (…' + t.slice(Math.max(0, m.index - 25), m.index + m[0].length + 15).replace(/\s+/g, ' ') + '…) → ' + e.d + (e.not ? ' (' + e.not + ')' : '') });
      }
      for (const { rx, e } of YB) for (const m of t.matchAll(rx)) {
        const k = 'b' + m[0]; if (ok.has(m[0]) || seen.has(k)) continue; seen.add(k);
        res.push({ hata: false, t: '“' + m[0] + '” (…' + t.slice(Math.max(0, m.index - 25), m.index + m[0].length + 15).replace(/\s+/g, ' ') + '…): ' + e.not });
      }
    }
    return res;
  }
  for (const f of fs.readdirSync(AD)) if (f !== 'index.js' && !IDX[f.replace(/\.js$/, '')]) { console.log('ANLATIM UYARI', f, 'index.js’te kaydı yok'); anBad++; }
  for (const id of Object.keys(IDX)) {
    const msg = [], fp = path.join(AD, id + '.js');
    if (!topicIds.has(id)) msg.push('konu kimliği data/index.js’te yok');
    if (!fs.existsSync(fp)) { console.log('ANLATIM EKSİK', id); anBad++; continue; }
    try { require(fp); } catch (e) { console.log('ANLATIM HATA', id, e.message); anBad++; continue; }
    const L = window.LGS_AN[id]; if (!L || !Array.isArray(L.scenes)) { console.log('ANLATIM KAYIT YOK', id); anBad++; continue; }
    an++;
    if (IDX[id].n !== L.scenes.length) msg.push('index n ' + IDX[id].n + ' ≠ sahne ' + L.scenes.length);
    if (!L.title || !L.desc || !Array.isArray(L.ozet) || !L.ozet.length) msg.push('title/desc/ozet eksik');
    const segs = [];
    L.scenes.forEach((sc, i) => {
      if (!sc.t) msg.push('sahne ' + i + ' başlıksız');
      if (!Array.isArray(sc.steps) || !sc.steps.length) msg.push('sahne ' + i + ' adımsız');
      (sc.steps || []).forEach((st, k) => { if (!st.s) msg.push(i + '-' + k + ' altyazı yok'); segs.push({ key: i + '-' + k, s: st.s || '', v: st.v || '' }); });
      if (sc.cp) {
        const c = sc.cp;
        if (!Array.isArray(c.c) || c.c.length !== 4 || new Set(c.c).size !== 4) msg.push('ara soru ' + i + ' şıklar');
        if (!/^[ABCD]$/.test(c.a)) msg.push('ara soru ' + i + ' cevap');
        if (!c.q || !c.hint || !c.why) msg.push('ara soru ' + i + ' q/hint/why eksik');
        if ((sc.steps || []).some(st => st.h || st.on)) msg.push('ara soru ' + i + ' adımında h/on');
        if (c.why) segs.push({ key: i + '-why', s: c.why, v: c.whyV || '' });
        if (c.hint) segs.push({ key: i + '-hint', s: 'İpucu: ' + c.hint, v: c.hintV ? 'İpucu: ' + c.hintV : '' });
      }
      if (sc.ia) {
        if (sc.cp) msg.push('sahne ' + i + ' hem cp hem ia');
        for (const e of iaCheck(sc.ia)) msg.push('etkinlik ' + i + ' (' + sc.ia.tip + '): ' + e);
        if ((sc.steps || []).some(st => st.h || st.on)) msg.push('etkinlik ' + i + ' adımında h/on');
        if (sc.ia.why) segs.push({ key: i + '-why', s: sc.ia.why, v: sc.ia.whyV || '' });
        if (sc.ia.hint) segs.push({ key: i + '-hint', s: 'İpucu: ' + sc.ia.hint, v: sc.ia.hintV ? 'İpucu: ' + sc.ia.hintV : '' });
      }
    });
    // altyazı yazımı (TDK): tools/telaffuz.json › yazim
    for (const w of yazimCheck(L)) { if (w.hata) msg.push('yazım: ' + w.t); else console.log('ANLATIM YAZIM?', id, w.t); }
    const cps = L.scenes.filter(s => s.cp), ias = L.scenes.filter(s => s.ia);
    if (cps.length > 4 || cps.length + ias.length < 2 || (!ias.length && cps.length < 2)) msg.push('ara soru sayısı ' + cps.length + ', etkinlik ' + ias.length);
    if (ias.length) {           // sıklık yönergesi: en fazla 3 düz anlatım sahnesi art arda (uyarı, sorun sayılmaz)
      let run = 0, worst = 0; L.scenes.forEach(sc => { run = (sc.cp || sc.ia) ? 0 : run + 1; worst = Math.max(worst, run); });
      if (worst > 3) console.log('ANLATIM SIKLIK?', id, 'art arda ' + worst + ' sahne etkileşimsiz (yönerge: her 2–3 sahnede bir etkinlik/ara soru)');
      const tips = new Set(ias.map(s => s.ia.tip)); if (ias.length >= 3 && tips.size < Math.min(3, ias.length)) console.log('ANLATIM ÇEŞİT?', id, 'etkinlik türleri az: ' + [...tips].join(', '));
    }
    if (cps.length > 1 && new Set(cps.map(s => s.cp.a)).size === 1) msg.push('tüm ara soruların cevabı ' + cps[0].cp.a);
    const txt = JSON.stringify(L);
    if (/\\\\(text|frac|cdot|times)|\$[^$]*\\\\/.test(txt)) msg.push('LaTeX');
    for (const svg of txt.match(/<svg[\s\S]*?<\/svg>/g) || []) {
      if (/<b>/.test(svg)) msg.push('SVG içinde <b>');
      const vb = /viewBox=\\?"[\d.\-]+ [\d.\-]+ ([\d.]+)/.exec(svg); if (vb && +vb[1] > 360) msg.push('SVG genişliği ' + vb[1]);
    }
    // ses: her parça meta.json’da, özet eşleşiyor, mp3 var
    let meta = null; try { meta = JSON.parse(fs.readFileSync(path.join(AU, id, 'meta.json'), 'utf8')).seg; } catch (e) { msg.push('ses meta.json yok'); }
    if (meta) {
      const miss = segs.filter(g => !meta[g.key] || meta[g.key].src !== fnv(g.s + '\u0001' + g.v) || !fs.existsSync(path.join(AU, id, g.key + '.mp3')));
      if (miss.length) msg.push('ses eksik/eski ' + miss.length + ' (' + miss.slice(0, 4).map(g => g.key).join(', ') + ')');
      clips += segs.length - miss.length;
    }
    if (msg.length) { console.log('ANLATIM UYARI', id, msg.join('; ')); anBad++; }
  }
  console.log('anlatım dersi:', an, 'ses parçası:', clips, 'sorunlu:', anBad);
  problems += anBad;
})();
console.log('toplam sorunlu:', problems);
process.exitCode = problems ? 1 : 0;
