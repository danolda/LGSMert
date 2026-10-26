// .sv çözümlerinde CSS yüklenmese bile okunurluk için boşluk/ayraç ekler. Kullanım: node tools/svfix.js
const fs = require('fs'), path = require('path'); const root = path.join(__dirname, '..');
function fix(s) {
  if (!/class="sv"/.test(s) || /&nbsp;\|&nbsp;/.test(s) && !/ {3,}/.test(s)) return s;
  return s
    .replace(/<li><b>([^<]*)<\/b>(?! )/g, '<li><b>$1</b> ')               // adım başlığından sonra boşluk
    .replace(/([^\s>])<span class="sv-m">/g, '$1 <span class="sv-m">')       // metin + hesap satırı
    .replace(/<\/span><span class="sv-m">/g, '</span> <span class="sv-m">') // ardışık hesap satırları
    .replace(/<\/span>([^\s<.,;:!?)])/g, '</span> $1')                        // span sonrası yapışık metin
    .replace(/(<div class="sv-[gtw]"><b>[^<]*<\/b>)(?! )/g, '$1 ')
    .replace(/<\/li><li>/g, '</li> <li>')
    .replace(/(<span class="sv-m">[^]*?<\/span>)/g, m => m.replace(/(\S) {3,}(\S)/g, '$1 &nbsp;|&nbsp; $2'));
}
let n = 0;
global.window = {}; require(path.join(root, 'data/index.js')); global.LGS = window.LGS;
for (const f of fs.readdirSync(path.join(root, 'data/topics'))) {
  const fp = path.join(root, 'data/topics', f); const src = fs.readFileSync(fp, 'utf8'); if (!src.includes('class=\\"sv\\"')) continue;
  require(fp); const T = LGS.topics[f.slice(0, -3)]; let ch = 0;
  T.qs.forEach(q => { const t = fix(q.s); if (t !== q.s) { q.s = t; ch++; } });
  if (ch) { fs.writeFileSync(fp, 'LGS.add(' + JSON.stringify(T, null, 1) + ');\n'); n += ch; console.log(f, ch); }
}
for (const f of fs.readdirSync(path.join(root, 'data/past'))) {
  const fp = path.join(root, 'data/past', f); const src = fs.readFileSync(fp, 'utf8'); if (!src.includes('class=\\"sv\\"')) continue;
  LGS.past = {}; require(fp); let ch = 0; const o = {};
  Object.keys(LGS.past).sort().forEach(k => { const t = fix(LGS.past[k].s); if (t !== LGS.past[k].s) { LGS.past[k].s = t; ch++; } o[k] = LGS.past[k]; });
  if (ch) { fs.writeFileSync(fp, 'LGS.addPast(' + JSON.stringify(o, null, 1) + ');\n'); n += ch; console.log(f, ch); }
}
console.log('düzeltilen çözüm:', n);
module.exports = fix;
