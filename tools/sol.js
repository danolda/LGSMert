// Çözüm güncelleme aracı
//  node tools/sol.js export <topicId|past:<sid>>        -> /workspace/work/sol/<ad>/in.json
//  node tools/sol.js apply  <topicId|past:<sid>>        -> /workspace/work/sol/<ad>/out-*.json dosyalarındaki çözümleri dosyaya yazar
//  node tools/sol.js check  <topicId|past:<sid>>        -> eksik/hatalı çözüm raporu
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const [, , cmd, target] = process.argv;
global.window = {}; require(path.join(root, 'data/index.js')); global.LGS = window.LGS;
const isPast = target.startsWith('past:'), sid = isPast ? target.slice(5) : null;
const name = isPast ? 'past-' + sid : target;
const dir = '/workspace/work/sol/' + name; fs.mkdirSync(dir, { recursive: true });
const file = isPast ? path.join(root, 'data/past', sid + '.js') : path.join(root, 'data/topics', target + '.js');
require(file);
function items() {
  if (isPast) return Object.keys(LGS.past).sort().map(k => ({ id: k, t: LGS.past[k].t, a: LGS.past[k].a, img: 'img/past/' + k + '.webp', s: LGS.past[k].s }));
  return LGS.topics[target].qs.map((q, i) => ({ id: String(i), lv: q.lv || 'new', q: q.q, c: q.c, a: q.a, s: q.s }));
}
function outs() {
  const m = {};
  for (const f of fs.readdirSync(dir).filter(f => /^out-.*\.json$/.test(f)).sort()) {
    let o; try { o = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')); } catch (e) { console.log('JSON HATASI', f, e.message); process.exitCode = 1; continue; }
    Object.assign(m, o);
  }
  return m;
}
function problems(id, s, a) {
  const p = [];
  const m = [...String(s).matchAll(/Cevap <b>([A-D])/g)].map(x => x[1]);
  if (!m.length) p.push('Cevap <b>X</b> yok'); else if (m[m.length - 1] !== a) p.push('cevap uyumsuz (' + m[m.length - 1] + '≠' + a + ')');
  if (!/class="sv"/.test(s)) p.push('sv kapsayıcısı yok');
  if (/\$|\\text|\\frac/.test(s.replace(/<svg[\s\S]*?<\/svg>/g, ''))) p.push('LaTeX');
  if (/<svg[\s\S]*?<b>[\s\S]*?<\/svg>/.test(s)) p.push('SVG içinde <b>');
  const open = (s.match(/<(div|ol|ul|li|p|table|svg)\b/g) || []).length, close = (s.match(/<\/(div|ol|ul|li|p|table|svg)>/g) || []).length;
  if (open !== close) p.push('etiket dengesiz ' + open + '/' + close);
  return p;
}
if (cmd === 'export') {
  fs.writeFileSync(path.join(dir, 'in.json'), JSON.stringify(items(), null, 1));
  console.log(dir + '/in.json', items().length, 'soru');
} else if (cmd === 'check' || cmd === 'apply') {
  const it = items(), m = outs(); let bad = 0, miss = 0;
  it.forEach(x => {
    if (m[x.id] == null) { miss++; return; }
    const p = problems(x.id, m[x.id], x.a); if (p.length) { bad++; console.log('#' + x.id, p.join('; ')); }
  });
  console.log('toplam', it.length, 'yazılan', Object.keys(m).length, 'eksik', miss, 'sorunlu', bad);
  if (cmd === 'apply') {
    if (bad) { console.log('Sorunlu çözümler var; önce düzelt.'); process.exit(1); }
    let src = fs.readFileSync(file, 'utf8');
    if (isPast) { for (const k in m) if (LGS.past[k]) LGS.past[k].s = m[k]; const o = {}; Object.keys(LGS.past).sort().filter(k => it.some(x => x.id === k)).forEach(k => o[k] = LGS.past[k]); src = 'LGS.addPast(' + JSON.stringify(o, null, 1) + ');\n'; }
    else { const T = LGS.topics[target]; for (const k in m) if (T.qs[+k]) T.qs[+k].s = m[k]; src = 'LGS.add(' + JSON.stringify(T, null, 1) + ');\n'; }
    fs.writeFileSync(file, src);
    try { new Function('LGS', src); } catch (e) { console.log('SÖZDİZİMİ HATASI', e.message); process.exit(1); }
    console.log('yazıldı:', file);
  }
}
