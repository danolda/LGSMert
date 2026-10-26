// Konu özetlerinden: Kazanımlar kutusu, "LGS'de bu konu nasıl soruluyor?" bölümü ve
// "Çıkmışlarda Bu Konudan Nereden Soruldu?" bölümündeki soru listesi tablosu çıkarılır. Grafik ve analiz notu kalır.
const fs = require('fs'), path = require('path'); const root = path.join(__dirname, '..');
const VOID = /^(br|img|hr|input|meta|link|wbr|col|source)$/i;
function split(h) { // üst düzey parçalar
  const out = []; let depth = 0, start = 0; const re = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)\b[^>]*?(\/?)>/g; let m;
  while ((m = re.exec(h))) {
    const close = m[1] === '/', self = m[3] === '/' || VOID.test(m[2]);
    if (!close && !self) { if (depth === 0) { if (h.slice(start, m.index).trim()) out.push(h.slice(start, m.index)); start = m.index; } depth++; }
    else if (close) { depth--; if (depth === 0) { out.push(h.slice(start, re.lastIndex)); start = re.lastIndex; } }
    else if (depth === 0) { out.push(h.slice(start, re.lastIndex)); start = re.lastIndex; }
  }
  if (h.slice(start).trim()) out.push(h.slice(start));
  return out;
}
const txt = s => s.replace(/<[^>]+>/g, '').trim();
function clean(h) {
  let mode = ''; const keep = [];
  for (const p of split(h)) {
    const t = p.trimStart(), tag = (t.match(/^<([a-zA-Z0-9]+)/) || [])[1] || '';
    if (/^h[23]$/i.test(tag)) {
      const x = txt(p);
      mode = /^LGS.de bu konu nasıl soruluyor/i.test(x) ? 'drop' : /^Çıkmışlarda Bu Konudan/i.test(x) ? 'past' : '';
      if (mode !== 'drop') keep.push(p); continue;
    }
    if (mode === 'drop') continue;
    if (mode === 'past' && (/^table$/i.test(tag) || /^<div class="tbl"/.test(t))) continue;
    if (/^<div class="key"/.test(t) && /^Kazanım/.test(txt(p))) continue;
    keep.push(p);
  }
  return keep.join('');
}
global.window = {}; require(path.join(root, 'data/index.js')); global.LGS = window.LGS;
for (const f of fs.readdirSync(path.join(root, 'data/topics'))) {
  const fp = path.join(root, 'data/topics', f); require(fp); const T = LGS.topics[f.slice(0, -3)];
  const a = T.summary, b = clean(a); if (a === b) continue;
  const opens = (b.match(/<div\b/g) || []).length, closes = (b.match(/<\/div>/g) || []).length;
  if (opens !== closes) { console.log('DENGE HATASI', f); continue; }
  T.summary = b; fs.writeFileSync(fp, 'LGS.add(' + JSON.stringify(T, null, 1) + ');\n');
  console.log(f, a.length, '->', b.length, /Kazanım/.test(b) ? 'KAZ?' : '', /bu konu nasıl soruluyor/i.test(b) ? 'NASIL?' : '', /Çıkmış analizi|class="note"/.test(b.slice(b.search(/Çıkmışlarda Bu Konudan/))) ? 'analiz✓' : 'ANALİZ YOK', /<svg/.test(b.slice(b.search(/Çıkmışlarda Bu Konudan/))) ? 'grafik✓' : 'GRAFİK YOK');
}
