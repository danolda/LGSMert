// Çözümleri “açıklayıcı kalıba” yükseltme aracı: mevcut çözüme Ana fikir kutusu (.sv-i) ve adım açıklamaları ekler,
// gerekirse adımı/tuzağı/püf noktayı değiştirir ya da çözümü bütünüyle yeniler. Yeni nesil soruyu yenisiyle de değiştirir.
//
//   node tools/solek.js list <konu> <yeni|past|meb> [baş] [son] [--all]   yamalanmamış çözümleri kısa biçimde yazdır (--all: hepsi)
//   node tools/solek.js apply <yama.js> [--force]                         yama dosyasını uygula
//   node tools/solek.js status [mat|fen]                                  konu/kategori bazında kalan çözüm sayısı
//
// Yama dosyası:  P('<konu>', '<yeni|past|meb>', { '<kimlik>': { ... }, ... });
//   kimlik: yeni → 'ko:3' / 'or:12' / 'zr:7' (seviye içi sıra) · past → '2023-mat-9' · meb → 'meb-mat-u1-1'
//   alanlar (hepsi isteğe bağlı, i dışında):
//     i  : Ana fikir metni (HTML)                         n : { adımNo: 'başlıktan hemen sonra eklenecek açıklama' }
//     e  : { adımNo: 'adımın sonuna eklenecek cümle' }     r : { adımNo: 'adımın başlık dışındaki yeni içeriği' }
//     k  : ['Başlık', 'içerik'] → sona yeni adım (sağlama) t / w : püf nokta / tuzak metnini değiştir · t2 / w2 : sonuna ekle
//     s  : çözümün tamamı (yeniden yazım)                  Q : { q, c, a, s, alt? } → yeni nesil soruyu değiştir (r sürümü artar)
//   Yardımcılar: m('işlem satırı') → <span class="sv-m">…</span>
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const [, , cmd, ...args] = process.argv;
const LV = { kolay: 'ko', orta: 'or', zor: 'zr' };
const subj = id => id.split('-')[0];

function readObj(file, fn) {
  let O = null; const h = { add: o => { O = o; }, addPast: o => { O = o; }, addMeb: o => { O = o; }, addAlt: o => { O = o; } };
  global.LGS = h; delete require.cache[require.resolve(file)]; require(file);
  const src = fs.readFileSync(file, 'utf8'), i = src.indexOf('LGS.' + fn + '(');
  return { O, head: src.slice(0, i), src };
}
const ser = (head, fn, O, ind) => head + 'LGS.' + fn + '(' + (ind ? JSON.stringify(O, null, 1) : JSON.stringify(O)) + ');\n';
function store(konu, cat) {            // { get(id), set(id, s), ids(), save(), file }
  const sid = subj(konu);
  if (cat === 'yeni') {
    const file = path.join(root, 'data/topics', konu + '.js'), R = readObj(file, 'add'), T = R.O, map = {}, cnt = { kolay: 0, orta: 0, zor: 0 };
    T.qs.forEach((q, i) => { map[LV[q.lv] + ':' + (cnt[q.lv]++)] = i; });
    return { file, ids: () => Object.keys(map), q: id => T.qs[map[id]], get: id => T.qs[map[id]] && T.qs[map[id]].s, set: (id, s) => { T.qs[map[id]].s = s; },
      setQ: (id, Q) => { const o = T.qs[map[id]]; T.qs[map[id]] = { lv: o.lv, r: (o.r || 0) + 1, q: Q.q, c: Q.c, a: Q.a, s: Q.s }; },
      save: () => fs.writeFileSync(file, ser(R.head, 'add', T, 1)) };
  }
  const files = cat === 'past' ? ['data/past/' + sid + '.js'] : ['data/meb/' + sid + '.js', 'data/meb/mebi-' + sid + '.js'];
  const fn = cat === 'past' ? 'addPast' : 'addMeb', parts = files.map(f => path.join(root, f)).filter(f => fs.existsSync(f)).map(f => Object.assign(readObj(f, fn), { f, dirty: false }));
  const find = id => parts.find(p => p.O[id] && p.O[id].t === konu);
  return { ids: () => [].concat(...parts.map(p => Object.keys(p.O).filter(k => p.O[k].t === konu && p.O[k].s))), q: id => find(id) && find(id).O[id],
    get: id => find(id) && find(id).O[id].s, set: (id, s) => { const p = find(id); p.O[id].s = s; p.dirty = true; },
    save: () => parts.forEach(p => { if (p.dirty) fs.writeFileSync(p.f, ser(p.head, fn, p.O, 1)); }) };
}

/* ---- çözüm HTML'i üzerinde işlemler ---- */
const strip = s => String(s).replace(/<svg[\s\S]*?<\/svg>/g, ' [ŞEKİL] ').replace(/<(figure|table)[\s\S]*?<\/\1>/g, m => /<table/.test(m) ? ' [TABLO] ' : m).replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
function steps(html) {                 // ilk ol.sv-s içindeki üst düzey <li> adımları: { a: içerik başı, b: içerik sonu, t: başlık sonu }
  const o = html.indexOf('<ol class="sv-s">'); if (o < 0) return null;
  const re = /<(\/?)(ol|ul|li)\b[^>]*>/g; re.lastIndex = o + 17; let d = 0, m, cur = null; const out = [];
  while ((m = re.exec(html))) {
    if (!m[1]) { if (m[2] === 'li' && d === 0) cur = { a: m.index + m[0].length }; d++; }
    else { if (d === 0) break; d--; if (m[2] === 'li' && d === 0 && cur) { cur.b = m.index; const inner = html.slice(cur.a, cur.b), t = /^\s*<b>[\s\S]*?<\/b>/.exec(inner); cur.t = cur.a + (t ? t[0].length : 0); out.push(cur); cur = null; } }
  }
  return { list: out, end: m ? m.index : -1 };
}
function box(html, cls) { const i = html.indexOf('<div class="' + cls + '">'); if (i < 0) return null; const j = html.indexOf('</div>', i); return { i, j, a: i + cls.length + 14 }; }
function patch(html, p, id) {
  if (p.s) return p.s;
  let h = html; const err = t => { throw new Error(id + ': ' + t); };
  if (!p.i) err('Ana fikir (i) yok');
  // adım işlemleri: sondan başa (konumlar kaymasın)
  const S = steps(h);
  const idx = new Set([...Object.keys(p.n || {}), ...Object.keys(p.e || {}), ...Object.keys(p.r || {})].map(Number));
  if (idx.size && !S) err('adım listesi yok');
  if (S && p.k) h = h.slice(0, S.end) + ' <li><b>' + p.k[0] + '</b> ' + p.k[1] + '</li>' + h.slice(S.end);
  [...idx].sort((x, y) => y - x).forEach(k => {
    const st = S.list[k - 1]; if (!st) err('adım ' + k + ' yok (' + S.list.length + ' adım var)');
    let inner = h.slice(st.t, st.b);
    if (p.r && p.r[k] != null) inner = ' ' + p.r[k];
    if (p.n && p.n[k]) inner = ' ' + p.n[k] + (/^\s/.test(inner) ? '' : ' ') + inner;
    if (p.e && p.e[k]) inner = inner.replace(/\s*$/, '') + ' ' + p.e[k];
    h = h.slice(0, st.t) + inner + h.slice(st.b);
  });
  for (const [cls, lab, rep, add] of [['sv-t', 'Püf nokta:', p.t, p.t2], ['sv-w', 'Tuzak:', p.w, p.w2]]) {
    if (rep == null && add == null) continue;
    const B = box(h, cls);
    if (B) { const cur = h.slice(B.a, B.j), body = rep != null ? '<b>' + lab + '</b> ' + rep : cur.replace(/\s*$/, '') + ' ' + add; h = h.slice(0, B.a) + body + h.slice(B.j); }
    else { const A = h.indexOf('<div class="sv-a">'); if (A < 0) err('sv-a yok'); h = h.slice(0, A) + '<div class="' + cls + '"><b>' + lab + '</b> ' + (rep != null ? rep : add) + '</div>' + h.slice(A); }
  }
  // Ana fikir kutusu: adımların önüne
  const old = box(h, 'sv-i'); if (old) h = h.slice(0, old.i) + h.slice(old.j + 6);
  const ins = '<div class="sv-i"><b>Ana fikir:</b> ' + p.i + '</div>';
  let at = h.indexOf('<ol class="sv-s">');
  if (at < 0) { const g = box(h, 'sv-g'); at = g ? h.indexOf('</div>', g.j + 6) + 6 : h.indexOf('<div class="sv">') + 16; if (g) at = g.j + 6; }
  return h.slice(0, at) + ins + h.slice(at);
}
function check(id, before, after, ans) {
  const p = [];
  const m = [...after.matchAll(/Cevap <b>([A-D])/g)].map(x => x[1]);
  if (!m.length || m[m.length - 1] !== ans) p.push('cevap harfi (' + m[m.length - 1] + ' ≠ ' + ans + ')');
  if ((after.match(/class="sv-i"/g) || []).length !== 1) p.push('sv-i sayısı');
  for (const t of ['div', 'ol', 'ul', 'li', 'p', 'b', 'u', 'span', 'table', 'tr', 'td', 'svg', 'figure']) {
    const o = (after.match(new RegExp('<' + t + '[\\s>]', 'g')) || []).length, c = (after.match(new RegExp('</' + t + '>', 'g')) || []).length;
    if (o !== c) p.push('<' + t + '> dengesiz ' + o + '/' + c);
  }
  if (/NaN|undefined|\$\{/.test(after.replace(/<svg[\s\S]*?<\/svg>/g, ''))) p.push('NaN/undefined/${');
  return p;
}

if (cmd === 'list') {
  const [konu, cat] = args, nums = args.filter(a => /^\d+$/.test(a)).map(Number), all = args.includes('--all'), kisa = args.includes('--kisa');   // --kisa: yalnız adım başlıkları; açıklamasız (∅) adımların işlemi de gösterilir
  const st = store(konu, cat); let ids = st.ids(); if (!all) ids = ids.filter(id => !/class="sv-i"/.test(st.get(id)));
  const pick = (args.find(a => a.startsWith('--id=')) || '').slice(5); if (pick) ids = st.ids().filter(id => pick.split(',').some(p => id === p || id.endsWith('-' + p)));   // --id=u1-20,u1-84: yalnız bu kimlikler
  const from = nums[0] || 1, to = nums[1] || ids.length;
  console.log('# ' + konu + ' / ' + cat + ' · kalan ' + ids.length + ' · gösterilen ' + from + '–' + Math.min(to, ids.length));
  const cut = (s, n) => s.length > n ? s.slice(0, n) + '…' : s;
  ids.slice(from - 1, to).forEach(id => {
    const o = st.q(id), h = o.s;
    console.log('\n### ' + id + ' [' + o.a + ']' + (o.lv ? ' ' + o.lv : ''));
    if (cat === 'yeni') { console.log('S: ' + strip(o.q)); console.log('   ' + o.c.map((c, j) => 'ABCD'[j] + ') ' + cut(strip(c), 60)).join(' | ')); }
    const g = box(h, 'sv-g'); if (g) console.log('V: ' + cut(strip(h.slice(g.a, g.j)).replace(/^Verilen\s*/, '').replace(/\s*İstenen\s*/, ' ‖ İ: '), 330));
    const S = steps(h);
    if (S && kisa) {
      console.log(S.list.map((s, k) => {
        const body = h.slice(s.t, s.b), txt = strip(body.replace(/<span class="sv-m">[\s\S]*?<\/span>/g, ' ')), ms = [...body.matchAll(/<span class="sv-m">([\s\S]*?)<\/span>/g)].map(x => cut(strip(x[1]), 60));
        return (k + 1) + ' ' + strip(h.slice(s.a, s.t)) + (txt.length < 12 ? ' ∅{' + ms.slice(0, 2).join(' ; ') + '}' : '');
      }).join(' → '));
      if (!box(h, 'sv-w')) console.log('T: (yok)');
      return;
    }
    if (S) S.list.forEach((s, k) => {
      const title = strip(h.slice(s.a, s.t)), body = h.slice(s.t, s.b), ms = [...body.matchAll(/<span class="sv-m">([\s\S]*?)<\/span>/g)].map(x => cut(strip(x[1]), 70));
      const txt = strip(body.replace(/<span class="sv-m">[\s\S]*?<\/span>/g, ' '));
      console.log((k + 1) + ' ' + title + ': ' + cut(txt, 170) + (ms.length ? ' {' + ms.slice(0, 3).join(' ; ') + (ms.length > 3 ? ' ; +' + (ms.length - 3) : '') + '}' : ''));
    }); else console.log('(adım yok) ' + cut(strip(h), 300));
    if (/class="sv-c"/.test(h)) console.log('C: (şık tablosu var)');
    const t = box(h, 'sv-t'), w = box(h, 'sv-w');
    if (t) console.log('P: ' + cut(strip(h.slice(t.a, t.j)).replace(/^Püf nokta:\s*/, ''), 110));
    if (w) console.log('T: ' + cut(strip(h.slice(w.a, w.j)).replace(/^Tuzak:\s*/, ''), 150)); else console.log('T: (yok)');
  });
} else if (cmd === 'apply') {
  const force = args.includes('--force'); let nOk = 0, bad = 0;
  global.m = t => '<span class="sv-m">' + t + '</span>';
  global.ms = (...a) => a.map(global.m).join('');
  // Yeni çözüm kalıbı: SV({ given: [..], asked, idea, steps: [[başlık, içerik], ..], figs: [[svg, alt yazı], ..], tip, trap, ans })
  global.SV = o => '<div class="sv"><div class="sv-g"><b>Verilen</b> <ul>' + o.given.map(g => '<li>' + g + '</li>').join(' ') + '</ul><b>İstenen</b><p>' + o.asked + '</p></div>' +
    '<div class="sv-i"><b>Ana fikir:</b> ' + o.idea + '</div><ol class="sv-s">' + o.steps.map(s => '<li><b>' + s[0] + '</b> ' + s[1] + '</li>').join(' ') + '</ol>' +
    (o.figs || []).map(f => '<figure class="sv-f">' + f[0] + '<figcaption>' + f[1] + '</figcaption></figure>').join('') +
    (o.tip ? '<div class="sv-t"><b>Püf nokta:</b> ' + o.tip + '</div>' : '') + '<div class="sv-w"><b>Tuzak:</b> ' + o.trap + '</div><div class="sv-a">Cevap <b>' + o.ans + '</b></div></div>';
  global.P = (konu, cat, obj) => {
    const st = store(konu, cat), alt = {};
    for (const id in obj) {
      const p = obj[id], before = st.get(id);
      if (before == null) { console.log('YOK   ' + konu + '/' + cat + ' ' + id); bad++; continue; }
      if (/class="sv-i"/.test(before) && !force && !p.Q) { console.log('ATLA  ' + id + ' (zaten yamalı)'); continue; }
      try {
        if (p.Q) { if (cat !== 'yeni') throw new Error(id + ': Q yalnız yeni nesilde'); const pr = check(id, '', p.Q.s, p.Q.a); if (pr.length) throw new Error(id + ': ' + pr.join('; ')); st.setQ(id, p.Q); if (p.Q.alt != null) alt[id] = p.Q.alt; nOk++; continue; }
        const after = patch(before, p, id), pr = check(id, before, after, st.q(id).a);
        if (/[a-zçğıöşü0-9)]\x27[a-zçğıöşü]/i.test(JSON.stringify(p).replace(/<[^>]*>/g, ""))) pr.push("yamada düz kesme işareti (’ kullan)");
        if (pr.length) throw new Error(id + ': ' + pr.join('; '));
        st.set(id, after); nOk++;
      } catch (e) { console.log('HATA  ' + e.message); bad++; }
    }
    st.save();
    if (Object.keys(alt).length) { const f = path.join(root, 'data/altkonu', subj(konu) + '.js'), R = readObj(f, 'addAlt'); for (const id in alt) R.O[konu].q[id] = alt[id]; fs.writeFileSync(f, ser(R.head, 'addAlt', R.O, 0)); }
  };
  require(path.resolve(args[0]));
  console.log('uygulanan: ' + nOk + ' · sorunlu: ' + bad); process.exitCode = bad ? 1 : 0;
} else if (cmd === 'status') {
  global.window = {}; require(path.join(root, 'data/index.js')); const L = window.LGS; let T = 0, D = 0;
  for (const s of L.subjects) { if (args[0] ? s.id !== args[0] : !['mat', 'fen'].includes(s.id)) continue;
    for (const t of s.topics) { const row = ['yeni', 'past', 'meb'].map(c => { const st = store(t.id, c), ids = st.ids(), d = ids.filter(id => /class="sv-i"/.test(st.get(id))).length; T += ids.length; D += d; return c + ' ' + d + '/' + ids.length; });
      console.log(t.id.padEnd(15) + row.join('   ')); } }
  console.log('toplam ' + D + '/' + T + ' çözüm yeni kalıpta');
} else console.log('kullanım: list | apply | status (ayrıntı dosya başında)');
