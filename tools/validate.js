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
