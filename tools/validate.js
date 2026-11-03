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
    });
    const cps = L.scenes.filter(s => s.cp);
    if (cps.length < 2 || cps.length > 4) msg.push('ara soru sayısı ' + cps.length);
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
