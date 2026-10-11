// Konu dosyası aracı (yazar/denetçi ajanlar için).
//   node tools/topic.js info <id>                     hedef, çıkmış sorular, gereken özgün soru sayısı
//   node tools/topic.js assemble <id>                 work/<id>/summary.html + work/<id>/part*.js -> data/topics/<id>.js
//   node tools/topic.js check <id> [dosya]            tüm denetimler (dosya verilirse yalnız o parça)
//   node tools/topic.js show <id|dosya> [--blind] [n...]   soruları düz metin yazdır (--blind: cevap/çözüm gizli)
//   node tools/topic.js render <id|parça.js|özet.html> <klasör> [--blind] [--summary] [--from n --to m]  PNG çıktısı (site CSS'iyle)
const fs = require('fs'); const path = require('path');
const root = path.join(__dirname, '..');
const { required, target } = require('./targets');
const [, , cmd, arg, ...rest] = process.argv;

function loadIndex() {
  global.window = {}; global.LGS = null;
  delete require.cache[path.join(root, 'data/index.js')];
  require(path.join(root, 'data/index.js')); global.LGS = window.LGS;
  for (const f of fs.readdirSync(path.join(root, 'data/past'))) require(path.join(root, 'data/past', f));
  return global.LGS;
}
function pastOf(id) {
  const L = loadIndex();
  return Object.keys(L.past).filter(k => L.past[k].t === id).sort().map(k => ({ id: k, a: L.past[k].a, s: L.past[k].s }));
}
function loadPart(file) {
  let out = null; global.PART = a => { out = a; };
  delete require.cache[path.resolve(file)]; require(path.resolve(file));
  if (!Array.isArray(out)) throw new Error(file + ': PART([...]) bulunamadı');
  return out;
}
function loadTopic(id) {
  let T = null; const g = global.LGS; global.LGS = { add: o => { T = o; } };
  const fp = path.join(root, 'data/topics', id + '.js'); delete require.cache[fp]; require(fp); global.LGS = g;
  return T;
}
function parts(id) {
  const dir = path.join(root, 'work', id);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => /^part\d+\.js$/.test(f)).sort((a, b) => parseInt(a.slice(4)) - parseInt(b.slice(4))).map(f => path.join(dir, f));
}
const lit = s => '`' + String(s).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${') + '`';
const strip = s => String(s).replace(/<svg[\s\S]*?<\/svg>/g, ' [ŞEKİL] ').replace(/<[^>]+>/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

function assemble(id) {
  const dir = path.join(root, 'work', id);
  const sumF = path.join(dir, 'summary.html');
  let summary;
  if (fs.existsSync(sumF)) summary = fs.readFileSync(sumF, 'utf8');
  else summary = loadTopic(id).summary;
  const qs = [];
  for (const f of parts(id)) qs.push(...loadPart(f));
  const body = 'LGS.add({\nid: "' + id + '",\nsummary: ' + lit('\n' + summary.trim() + '\n') + ',\nqs: [\n' +
    qs.map(q => '{ q: ' + lit(q.q) + ',\n  c: [' + q.c.map(lit).join(', ') + '], a: "' + q.a + '",\n  s: ' + lit(q.s) + ' }').join(',\n') + '\n]\n});\n';
  fs.writeFileSync(path.join(root, 'data/topics', id + '.js'), body);
  loadTopic(id); // sözdizimi denetimi
  console.log('yazıldı: data/topics/' + id + '.js —', qs.length, 'özgün soru');
}

function words(s) { return strip(s).toLowerCase().replace(/[^a-zçğıöşüâîû0-9 ]/g, ' ').split(/\s+/).filter(w => w.length > 2); }
function sim(a, b) { const A = new Set(words(a)), B = new Set(words(b)); if (!A.size || !B.size) return 0; let i = 0; for (const w of A) if (B.has(w)) i++; return i / Math.min(A.size, B.size); }

function checkQs(qs, label) {
  const msg = [];
  qs.forEach((q, i) => {
    const n = label + '#' + (i + 1);
    if (typeof q.q !== 'string' || q.q.length < 20) msg.push(n + ' soru metni yok/kısa');
    if (!Array.isArray(q.c) || q.c.length !== 4) msg.push(n + ' şık sayısı 4 değil');
    else {
      if (new Set(q.c.map(c => strip(c))).size !== 4) msg.push(n + ' tekrar eden şık');
      q.c.forEach((c, j) => { if (!strip(c) && !/<svg/.test(c)) msg.push(n + ' boş şık ' + 'ABCD'[j]); if (/^\s*[A-D]\)/.test(strip(c))) msg.push(n + ' şık metni harf içeriyor ' + 'ABCD'[j]); });
    }
    if (!/^[ABCD]$/.test(q.a)) msg.push(n + ' cevap harfi geçersiz');
    const m = [...String(q.s).matchAll(/Cevap <b>([A-D])<\/b>/g)].map(x => x[1]);
    if (!m.length) msg.push(n + ' çözüm "Cevap <b>X</b>." ile bitmiyor');
    else if (m[m.length - 1] !== q.a) msg.push(n + ' çözümdeki cevap (' + m[m.length - 1] + ') ≠ a (' + q.a + ')');
    if (String(q.s).length < 120) msg.push(n + ' çözüm çok kısa');
    for (const [k, v] of [['q', q.q], ['s', q.s], ...((q.c || []).map((c, j) => ['c' + j, c]))]) {
      const svgs = String(v).match(/<svg/g) || [], ends = String(v).match(/<\/svg>/g) || [];
      if (svgs.length !== ends.length) msg.push(n + ' ' + k + ' <svg> açılış/kapanış uyumsuz');
      if (/NaN|undefined/.test(v)) msg.push(n + ' ' + k + ' NaN/undefined içeriyor');
      for (const t of ['p', 'b', 'table', 'tr', 'td', 'th', 'ul', 'li', 'div', 'span', 'u', 'i']) {
        const o = (String(v).match(new RegExp('<' + t + '[\\s>]', 'g')) || []).length, c = (String(v).match(new RegExp('</' + t + '>', 'g')) || []).length;
        if (o !== c) msg.push(n + ' ' + k + ' <' + t + '> etiketi dengesiz (' + o + '/' + c + ')');
      }
    }
  });
  for (let i = 0; i < qs.length; i++) for (let j = i + 1; j < qs.length; j++) {
    const s = sim(qs[i].q, qs[j].q); if (s > 0.8) msg.push(label + '#' + (i + 1) + ' ve #' + (j + 1) + ' çok benzer (' + s.toFixed(2) + ')');
  }
  return msg;
}

if (cmd === 'info') {
  const past = pastOf(arg); const req = required(arg, past.length);
  const d = { A: 0, B: 0, C: 0, D: 0 }; past.forEach(p => d[p.a]++);
  console.log('konu:', arg, '| hedef:', target(arg), '| çıkmış:', past.length, '| gereken toplam:', req, '| gereken ÖZGÜN soru:', req - past.length);
  console.log('çıkmış soruların cevap dağılımı:', JSON.stringify(d));
  past.forEach(p => console.log('  ' + p.id + '  cevap ' + p.a + '  görsel: ' + path.join(root, 'img/past', p.id + '.webp')));
  const ps = parts(arg); if (ps.length) console.log('parçalar:', ps.map(f => path.basename(f) + '(' + loadPart(f).length + ')').join(' '));
} else if (cmd === 'assemble') {
  assemble(arg);
} else if (cmd === 'check') {
  let msg = [];
  if (rest[0]) { msg = checkQs(loadPart(rest[0]), path.basename(rest[0])); }
  else {
    const T = loadTopic(arg); const past = pastOf(arg); const req = required(arg, past.length);
    const n = T.qs.length;
    if (n + past.length !== req) msg.push('toplam ' + (n + past.length) + ', gereken ' + req + ' (özgün ' + n + ', gereken özgün ' + (req - past.length) + ')');
    if (!T.summary || T.summary.length < 2500) msg.push('özet kısa (' + (T.summary || '').length + ' karakter)');
    msg.push(...checkQs(T.qs, ''));
    const d = { A: 0, B: 0, C: 0, D: 0 }; T.qs.forEach(q => d[q.a]++); const all = { ...d }; past.forEach(p => all[p.a]++);
    const tot = n + past.length, lo = Math.floor(tot / 4) - 2, hi = Math.ceil(tot / 4) + 2;
    console.log('özgün dağılım', JSON.stringify(d), '| çıkmışlarla toplam', JSON.stringify(all));
    for (const k of 'ABCD') if (all[k] < lo || all[k] > hi) msg.push('cevap dağılımı dengesiz: ' + k + '=' + all[k] + ' (beklenen ' + lo + '-' + hi + ')');
  }
  console.log(msg.length ? 'SORUNLAR (' + msg.length + '):\n  ' + msg.join('\n  ') : 'TAMAM');
  process.exitCode = msg.length ? 1 : 0;
} else if (cmd === 'show') {
  const blind = rest.includes('--blind'); const want = rest.filter(x => /^\d+$/.test(x)).map(Number);
  const qs = /\.js$/.test(arg) ? loadPart(arg) : loadTopic(arg).qs;
  qs.forEach((q, i) => {
    if (want.length && !want.includes(i + 1)) return;
    console.log('#' + (i + 1) + (blind ? '' : ' [' + q.a + ']') + ' ' + strip(q.q));
    q.c.forEach((c, j) => console.log('   ' + 'ABCD'[j] + ') ' + strip(c)));
    if (!blind) console.log('   ÇÖZÜM: ' + strip(q.s));
  });
} else if (cmd === 'render') {
  const out = rest[0]; const blind = rest.includes('--blind'); const withSum = rest.includes('--summary');
  const fi = rest.indexOf('--from'), ti = rest.indexOf('--to');
  const isPart = /\.js$/.test(arg), isHtml = /\.html$/.test(arg);
  const T = isHtml ? { summary: fs.readFileSync(arg, 'utf8'), qs: [] } : isPart ? { summary: '', qs: loadPart(arg) } : loadTopic(arg);
  const from = fi >= 0 ? +rest[fi + 1] : 1, to = ti >= 0 ? +rest[ti + 1] : T.qs.length;
  fs.mkdirSync(out, { recursive: true });
  const fmt = h => String(h).replace(/\{\{([^{}|]+)\|([^{}]+)\}\}/g, '<span class="fr"><span>$1</span><span>$2</span></span>');
  const css = fs.readFileSync(path.join(root, 'assets/css/style.css'), 'utf8');
  const page = (inner, w) => '<!doctype html><html><head><meta charset="utf-8"><style>' + css + '\nbody{background:#fff;color:#1d2433;width:' + w + 'px;padding:10px}.q{margin:10px 0;border:1px solid #ccc;border-radius:12px;padding:12px}.ch{display:grid;gap:6px}.opt{border:1px solid #ccc;border-radius:10px;padding:6px 10px}.ans{background:#dcfce7}.sol{background:#f8fafc;border-left:3px solid #64748b;padding:6px 10px;margin-top:8px;font-size:14px}</style></head><body>' + inner + '</body></html>';
  const jobs = [];
  if ((withSum || isHtml) && T.summary) jobs.push(['ozet.png', '<div class="sum">' + fmt(T.summary) + '</div>', 900]);
  for (let i = from - 1; i < to; i += 4) {
    let h = '';
    for (let j = i; j < Math.min(i + 4, to); j++) {
      const q = T.qs[j];
      h += '<div class="q"><b>Soru ' + (j + 1) + '</b><div class="stem">' + fmt(q.q) + '</div><div class="ch">' +
        q.c.map((c, k) => '<div class="opt' + (!blind && 'ABCD'[k] === q.a ? ' ans' : '') + '"><b>' + 'ABCD'[k] + ')</b> ' + fmt(c) + '</div>').join('') + '</div>' +
        (blind ? '' : '<div class="sol">' + fmt(q.s) + '</div>') + '</div>';
    }
    jobs.push(['s' + String(i + 1).padStart(2, '0') + '-' + String(Math.min(i + 4, to)).padStart(2, '0') + '.png', h, 760]);
  }
  const { chromium } = require('playwright');
  (async () => {
    const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 940, height: 800 } });
    for (const [name, inner, w] of jobs) {
      const tmp = path.join(out, name + '.html'); fs.writeFileSync(tmp, page(inner, w));
      await p.goto('file://' + tmp); await p.screenshot({ path: path.join(out, name), fullPage: true }); fs.unlinkSync(tmp);
      console.log(path.join(out, name));
    }
    await b.close();
  })();
} else {
  console.log(fs.readFileSync(__filename, 'utf8').split('\n').slice(0, 7).join('\n'));
}
