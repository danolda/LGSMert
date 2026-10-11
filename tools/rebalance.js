// Kullanım: node tools/rebalance.js data/topics/<konu>.js
// Doğru cevapların A-B-C-D'ye dengeli dağılması için şıkların yerini değiştirir ve
// çözümlerdeki şık harflerini (A’da, B), Cevap <b>C</b> ...) buna göre günceller.
const fs = require('fs'); const path = require('path');
const file = path.resolve(process.argv[2]);
let captured = null;
global.LGS = { add: o => { captured = o; } };
require(file);
const T = captured;
const L = ['A', 'B', 'C', 'D'];
const NB = 'A-Za-zÇĞİÖŞÜçğıöşüâîû0-9';
const tokenRe = new RegExp('(?<![' + NB + '])([ABCD])(?![' + NB + '])', 'g');
const hasStandalone = s => new RegExp('(?<![' + NB + '])[ABCD](?![' + NB + '])').test(s);
function swapLetters(str, x, y) {
  return str.replace(tokenRe, m => (m === x ? y : m === y ? x : m));
}
// harf değişince ekin ünlü uyumunu düzelt: A’da / B’de
const toA = { de: 'da', deki: 'daki', den: 'dan', ye: 'ya', nin: 'nın', yi: 'yı' };
const toE = Object.fromEntries(Object.entries(toA).map(([k, v]) => [v, k]));
const sufRe = new RegExp('(?<![' + NB + '])([ABCD])([’\'])(daki|deki|dan|den|nın|nin|da|de|ya|ye|yı|yi)(?![' + NB + '])', 'g');
const fixSuffix = str => str.replace(sufRe, (m, L, ap, suf) => L + ap + (L === 'A' ? (toA[suf] || suf) : (toE[suf] || suf)));
// hedef: her harf için eşit sayı
const qs = T.qs || [];
const count = { A: 0, B: 0, C: 0, D: 0 };
qs.forEach(q => count[q.a]++);
const target = Math.ceil(qs.length / 4), floorT = Math.floor(qs.length / 4);
let changed = 0;
// deterministik sıra: çok fazla olan harften az olan harfe taşı
for (let i = 0; i < qs.length; i++) {
  const q = qs[i];
  if (q.noShuffle) continue;
  if (count[q.a] <= floorT) continue;
  // stem standalone harf içeriyorsa (ör. "A noktası") atla
  if (hasStandalone(q.q.replace(/<[^>]+>/g, ' '))) continue;
  // şıklarda da tek başına harf varsa (ör. DNA bazı “A”, nokta adı) atla
  if (q.c.some(c => hasStandalone(String(c).replace(/<[^>]+>/g, ' ')))) continue;
  if (q.c.some(c => /^(Yalnız|I |I,|II|III|IV)/.test(c) && false)) continue;
  // en az olan hedef harf
  const low = L.filter(l => l !== q.a).sort((a, b) => count[a] - count[b])[0];
  if (count[low] >= target || count[q.a] - count[low] < 2) continue;
  const xi = L.indexOf(q.a), yi = L.indexOf(low);
  // seçenekler sıralı bir yapıdaysa (ör. sayılar artan) bozmamak için sayısal sırayı kontrol et
  const val = c => { const t = String(c).replace(/<[^>]+>/g, '').trim(); const f = t.match(/^(−|-)?\{\{(\d+)\|(\d+)\}\}$/); if (f) return (f[1] ? -1 : 1) * f[2] / f[3]; return /^[−-]?[\d.,]+$/.test(t) ? parseFloat(t.replace('−', '-').replace(/\.(?=\d{3})/g, '').replace(',', '.')) : NaN; };
  const nums = q.c.map(val);
  const sortedNumeric = nums.every(n => !isNaN(n)) && nums.every((n, k) => k === 0 || nums[k - 1] <= n);
  const romanList = q.c.every(c => /^(Yalnız [IV]|I|II|III|IV|V)(\b|\.|,| |$)/.test(String(c)));
  if (sortedNumeric || romanList) continue;
  const tmp = q.c[xi]; q.c[xi] = q.c[yi]; q.c[yi] = tmp;
  q.s = fixSuffix(swapLetters(q.s, q.a, low));
  count[q.a]--; count[low]++; q.a = low; changed++;
}
// yeniden yaz
const esc = s => String(s).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
let out = 'LGS.add({\nid: ' + JSON.stringify(T.id) + ',\nsummary: `' + esc(T.summary) + '`,\nqs: [\n';
out += qs.map(q => {
  const extra = q.noShuffle ? ', noShuffle: true' : '';
  return '{ q: `' + esc(q.q) + '`,\n  c: [' + q.c.map(c => '`' + esc(c) + '`').join(', ') + '], a: ' + JSON.stringify(q.a) + extra + ',\n  s: `' + esc(q.s) + '` }';
}).join(',\n');
out += '\n]\n});\n';
fs.writeFileSync(file, out);
const after = { A: 0, B: 0, C: 0, D: 0 }; qs.forEach(q => after[q.a]++);
console.log(path.basename(file), 'değişen:', changed, JSON.stringify(after));
