// Kullanım: node tools/show.js data/topics/<id>.js [soru-no...] — soruları düz metin olarak gösterir
const path = require('path');
let T; global.LGS = { add: o => { T = o; } };
require(path.resolve(process.argv[2]));
const strip = s => String(s).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const want = process.argv.slice(3).map(Number);
T.qs.forEach((q, i) => {
  if (want.length && !want.includes(i + 1)) return;
  console.log(`#${i + 1} [${q.a}] ${strip(q.q).slice(0, 160)}`);
  q.c.forEach((c, j) => console.log('   ' + 'ABCD'[j] + ') ' + strip(c).slice(0, 110)));
  console.log('   ÇÖZ: ' + strip(q.s).slice(0, 400));
});
