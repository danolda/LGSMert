// Kullanım: node tools/setopts.js <dosya> '<json: {"2":{"c":[..],"a":"D"}, ...}>'  (soru numaraları 1'den başlar)
const fs = require('fs'); const path = require('path');
const file = path.resolve(process.argv[2]); const changes = JSON.parse(process.argv[3]);
let T; global.LGS = { add: o => { T = o; } }; require(file);
for (const [k, v] of Object.entries(changes)) {
  const q = T.qs[+k - 1];
  if (v.c) q.c = v.c;
  if (v.a) { q.s = q.s.replace(/Cevap <b>[A-D]<\/b>/g, 'Cevap <b>' + v.a + '</b>'); q.a = v.a; }
  if (v.q) q.q = v.q; if (v.s) q.s = v.s;
}
const esc = s => String(s).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
let out = 'LGS.add({\nid: ' + JSON.stringify(T.id) + ',\nsummary: `' + esc(T.summary) + '`,\nqs: [\n';
out += T.qs.map(q => '{ q: `' + esc(q.q) + '`,\n  c: [' + q.c.map(c => '`' + esc(c) + '`').join(', ') + '], a: ' + JSON.stringify(q.a) + ',\n  s: `' + esc(q.s) + '` }').join(',\n');
out += '\n]\n});\n';
fs.writeFileSync(file, out); console.log('ok');
