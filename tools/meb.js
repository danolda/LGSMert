// MEB örnek soruları aracı (LGS Çalışma Kitapları)
//  node tools/meb.js export <sid>   -> /workspace/work/sol/meb-<sid>/in.json  (kaynak: /workspace/work/meb/<sid>.json)
//  node tools/meb.js check  <sid>   -> eksik/hatalı çözüm raporu
//  node tools/meb.js apply  <sid>   -> data/meb/<sid>.js yazar, görselleri img/meb/ altına kopyalar
//  MEBİ yaprak test + ÖDSGM örnek soruları: sid = mebi-<ders> (kaynak /workspace/work/meb/mebi-<ders>.json; q.lb etiket, q.o sıra, q.img görsel)
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const [, , cmd, sid] = process.argv;
const subj = sid.replace(/^mebi-/, '');
const src = JSON.parse(fs.readFileSync('/workspace/work/meb/' + sid + '.json', 'utf8'));
const dir = '/workspace/work/sol/meb-' + sid; fs.mkdirSync(dir, { recursive: true });
const tmap = {};
for (const f of fs.readdirSync(dir).filter(f => /^tmap-.*\.json$/.test(f))) { try { Object.assign(tmap, JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'))); } catch (e) { console.log('JSON HATASI', f); } }
const TOPICS = {}; { global.window = {}; require(path.join(root, 'data/index.js')); window.LGS.subjects.forEach(su => su.topics.forEach(t => TOPICS[t.id] = su.id)); }
const topicOf = q => tmap[q.id] || q.t || (q.unit.indexOf('-') > 0 ? q.unit : subj + '-' + q.unit);
function items() {
  return src.filter(q => !q.skip).map((q, i) => ({ id: q.id, t: topicOf(q), a: q.a, o: q.o != null ? q.o : i, lb: q.lb, img: q.img || '/workspace/work/meb/img/' + q.id + '.webp' }));
}
function outs() {
  const m = {};
  for (const f of fs.readdirSync(dir).filter(f => /^out-.*\.json$/.test(f)).sort()) {
    try { Object.assign(m, JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'))); } catch (e) { console.log('JSON HATASI', f, e.message); process.exitCode = 1; }
  }
  return m;
}
function problems(s, a) {
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
} else {
  const it = items(), m = outs(); let bad = 0, miss = 0;
  it.forEach(x => {
    if (TOPICS[x.t] !== subj) { bad++; console.log('#' + x.id, 'konu yok/yanlış: ' + x.t); return; }
    if (m[x.id] == null) { miss++; return; }
    const p = problems(m[x.id], x.a); if (p.length) { bad++; console.log('#' + x.id, p.join('; ')); }
  });
  console.log('toplam', it.length, 'yazılan', Object.keys(m).filter(k => it.some(x => x.id === k)).length, 'eksik', miss, 'sorunlu', bad);
  if (cmd === 'apply') {
    if (bad) { console.log('Sorunlu çözümler var; önce düzelt.'); process.exit(1); }
    const o = {}; fs.mkdirSync(path.join(root, 'img/meb'), { recursive: true });
    it.filter(x => m[x.id] != null).forEach(x => {
      o[x.id] = { t: x.t, a: x.a, o: x.o, s: m[x.id] }; if (x.lb) o[x.id].lb = x.lb;
      fs.copyFileSync(x.img, path.join(root, 'img/meb', x.id + '.webp'));
    });
    const out = 'LGS.addMeb(' + JSON.stringify(o, null, 1) + ');\n';
    fs.mkdirSync(path.join(root, 'data/meb'), { recursive: true });
    const outF = path.join(root, 'data/meb', sid + '.js');
    let prev = 0; if (fs.existsSync(outF)) { const w = {}; new Function('LGS', fs.readFileSync(outF, 'utf8'))({ addMeb: x => Object.assign(w, x) }); prev = Object.keys(w).length; }
    fs.writeFileSync(outF, out);
    console.log('yazıldı:', Object.keys(o).length, 'soru');
    if (/^mebi-/.test(sid)) {
      // data/index.js: dersi mebiSubj'e ekle, xpMax'ı eklenen soru başı 80 (20 EXP × 4 tekrar) artır
      const ip = path.join(root, 'data/index.js'); let ix = fs.readFileSync(ip, 'utf8');
      ix = ix.replace(/mebiSubj: \{([^}]*)\}/, (all, inner) => {
        const set = new Set(inner.split(',').map(x => x.trim().split(':')[0].trim()).filter(Boolean)); set.add(subj);
        return 'mebiSubj: { ' + [...set].map(k => k + ': 1').join(', ') + ' }';
      });
      const d = (Object.keys(o).length - prev) * 80;
      ix = ix.replace(/xpMax: (\d+),/, (all, n) => 'xpMax: ' + (+n + d) + ',');
      fs.writeFileSync(ip, ix);
      console.log('data/index.js: mebiSubj +' + subj + ', xpMax ' + (d >= 0 ? '+' : '') + d + ' (önceki ' + prev + ' soru)');
    }
  }
}
