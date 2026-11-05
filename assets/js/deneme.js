/* LGS Kışlası · Deneme Sınavı: kendi denemeni oluştur, çöz, raporunu gör */
(function () {
  'use strict';
  var A = window.LGSApp; if (!A) return;
  var app = document.getElementById('app');
  var esc = A.esc, KEY = A.KEY;
  var CUR = KEY + 'deneme:cur', HIST = KEY + 'deneme:hist';
  var ORDER = ['tr', 'ink', 'din', 'ing', 'mat', 'fen'];
  var HEX = { tr: '#f43f5e', mat: '#38bdf8', fen: '#22c55e', ink: '#f59e0b', din: '#14b8a6', ing: '#a78bfa' };
  var MPQ = { tr: 1.5, ink: 1.5, din: 1.5, ing: 1.5, mat: 2, fen: 2 };
  var LVN = { kolay: 'Kolay', orta: 'Orta', zor: 'Zor' };
  var LETTERS = ['A', 'B', 'C', 'D'];
  var AY = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
  var tick = null, cfg = null;

  function subj(id) { for (var i = 0; i < LGS.subjects.length; i++) if (LGS.subjects[i].id === id) return LGS.subjects[i]; return null; }
  function topicTitle(tid) { var m = A.subjOf(tid); return m ? m.t.title : tid; }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function split(n, k) { // n'yi k parçaya böl, artanı rastgele parçalara dağıt
    var b = Math.floor(n / k), out = [], i; for (i = 0; i < k; i++) out.push(b);
    shuffle(Array.apply(null, Array(k)).map(function (_, j) { return j; })).slice(0, n - b * k).forEach(function (j) { out[j]++; });
    return out;
  }
  function net(ok, bad) { return Math.round((ok - bad / 4) * 100) / 100; }
  function fnet(x) { return String(x).replace('.', ','); }
  function mmss(ms) { ms = Math.max(0, Math.round(ms / 1000)); var h = Math.floor(ms / 3600), m = Math.floor(ms % 3600 / 60), s = ms % 60; return (h ? h + ':' + ('0' + m).slice(-2) : m) + ':' + ('0' + s).slice(-2); }
  function dkSn(ms) { var s = Math.round(ms / 1000); return s < 60 ? s + ' sn' : Math.floor(s / 60) + ' dk ' + (s % 60 ? s % 60 + ' sn' : ''); }
  function fdate(t) { var d = new Date(t); return d.getDate() + ' ' + AY[d.getMonth()] + ' ' + d.getFullYear() + ' · ' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2); }
  function stop() { if (tick) { clearInterval(tick); tick = null; } document.body.classList.remove('dn-solving'); }
  function loadTopics(tids, cb) {
    var left = tids.length; if (!left) return cb();
    tids.forEach(function (tid) { var m = A.subjOf(tid); if (!m) { if (!--left) cb(); return; } A.loadTopic(m.s.id, tid, function () { if (!--left) cb(); }); });
  }
  function qOf(it) { var t = LGS.topics[it.tid]; if (!t) return null; return A.buildList(t).filter(function (q) { return q.key === it.key; })[0] || null; }
  function hist() { return A.jget(HIST, []); }
  /* MEBİ LGS Denemeleri 2025-26: gerçek LGS düzeni, iki oturum */
  var MS = { soz: { n: 'Sözel', min: 75, subs: ['tr', 'ink', 'din', 'ing'], q: 50 }, say: { n: 'Sayısal', min: 80, subs: ['mat', 'fen'], q: 40 } };
  function mebiIdx(cb) { if (LGS.mebid) return cb(LGS.mebid); A.loadScript('data/meb/mebid.js', function () { cb(LGS.mebid || null); }); }
  function mebiTitle(m) { return 'MEBİ Deneme ' + m.n + ' · ' + m.parts.map(function (k) { return MS[k].n; }).join(' + '); }
  function partNet(S, k) { var ok = 0, bad = 0, has = 0; MS[k].subs.forEach(function (sid) { var b = S.by && S.by[sid]; if (b) { ok += b.ok; bad += b.bad; has = 1; } }); return has ? net(ok, bad) : null; }
  function mebiBest(rows) { // deneme no → {soz: en iyi net, say: …, c: çözülme sayısı}
    var o = {}; rows.forEach(function (r) {
      var S = r.summary || {}, m = S.mebi; if (!m) return;
      var b = o[m.n] || (o[m.n] = { c: 0 }); b.c++;
      m.parts.forEach(function (k) { var v = partNet(S, k); if (v != null && (b[k] == null || v > b[k])) b[k] = v; });
    }); return o;
  }
  function cloud(name, body, cb) { if (!window.LGSCloud) return cb('yok'); window.LGSCloud.rpc(name, body, cb); }

  /* ================= LİSTE ================= */
  function listPage() {
    A.setCrumbs([{ text: 'Deneme' }]); document.title = 'Deneme · LGS Kışlası';
    var cur = A.jget(CUR, null);
    app.innerHTML = '<div class="page-dn"><div class="dn-hero"><div class="dn-hero-ic">📝</div><h1>Deneme Sınavı</h1>' +
      '<p>Dersleri, konuları, soru sayısını ve süreyi sen seç. Sorular kolay, orta ve zor olarak dengeli dağıtılır. Sonuçlar sınav bitince açıklanır.</p>' +
      '<a class="btn dn-new" href="#/deneme/yeni">＋ Yeni Deneme Oluştur</a></div>' +
      (cur ? '<a class="card dn-resume" href="#/deneme/coz"><b>⏱ Yarım kalan denemen var</b><span>' + cur.items.length + ' soru · kalan süre ' + mmss(cur.end - Date.now()) + '</span><em>Devam et →</em></a>' : '') +
      '<h2 class="dn-h2">🏛️ MEBİ Denemeleri 2025-26</h2><p class="small dn-mb-note">MEB\'in 12 LGS denemesi, gerçek sınav düzeninde: Sözel oturum 50 soru / 75 dk, Sayısal oturum 40 soru / 80 dk. Bir oturumu ya da ikisini birden seç.</p>' +
      '<div class="dn-mb-g" id="dnMebi">' + mebiCards({}) + '</div>' +
      '<h2 class="dn-h2">Geçmiş Denemelerim</h2><div id="dnList"><p class="loading">Yükleniyor…</p></div></div>';
    var loc = hist();
    draw(loc.map(function (h) { return { lid: h.lid, id: h.id, at: h.at, summary: h.summary }; }));
    cloud('deneme_list', { p_token: window.LGSCloud ? window.LGSCloud.token() : '' }, function (err, rows) {
      if (err || !Array.isArray(rows)) return;
      var seen = {}, all = [];
      loc.forEach(function (h) { if (h.id) seen[h.id] = 1; all.push({ lid: h.lid, id: h.id, at: h.at, summary: h.summary }); });
      rows.forEach(function (r) { if (r.summary && r.summary.kind === 'yazili') return; if (!seen[r.id]) all.push({ id: r.id, at: new Date(r.at).getTime(), summary: r.summary }); });
      all.sort(function (a, b) { return b.at - a.at; });
      if (location.hash.indexOf('#/deneme') === 0 && document.getElementById('dnList')) draw(all);
    });
    function draw(rows) {
      var mb = document.getElementById('dnMebi'); if (mb) mb.innerHTML = mebiCards(mebiBest(rows));
      var box = document.getElementById('dnList'); if (!box) return;
      if (!rows.length) { box.innerHTML = '<p class="empty">Henüz deneme çözmedin. İlk denemeni oluştur!</p>'; return; }
      var trend = rows.length >= 2 ? trendSvg(rows.slice(0, 12).reverse()) : '';
      box.innerHTML = (trend ? '<div class="card dn-trend"><div class="dn-ch-h">📈 Net gelişimin <small>(son ' + Math.min(12, rows.length) + ' deneme, yüzde olarak)</small></div>' + trend + '</div>' : '') +
        '<div class="dn-hlist">' + rows.map(function (r) {
          var s = r.summary || {}, p = s.n ? Math.max(0, Math.round(s.net * 100 / s.n)) : 0;
          return '<a class="dn-hi" href="#/deneme/r/' + encodeURIComponent(r.lid || r.id) + '">' + ringSvg(p, p >= 70 ? '#22c55e' : p >= 40 ? '#f59e0b' : '#f43f5e', 46) +
            '<span class="dn-hi-m">' + (s.mebi ? '<em class="dn-hi-tt">' + esc(mebiTitle(s.mebi)) + '</em>' : '') + '<b>' + fnet(s.net) + ' net</b><small>' + (s.subs || []).map(function (x) { return '<i style="background:' + HEX[x] + '"></i>'; }).join('') +
            ' ' + s.n + ' soru · ' + s.ok + 'D ' + s.bad + 'Y ' + s.empty + 'B</small><small>' + fdate(r.at) + '</small></span>' +
            (s.xp ? '<span class="dn-hi-xp">+' + A.nf(s.xp) + '<small>EXP</small></span>' : '') + '</a>';
        }).join('') + '</div>';
    }
  }

  function mebiCards(best) {
    var h = ''; for (var n = 1; n <= 12; n++) {
      var b = best[n] || {}, done = b.soz != null || b.say != null;
      h += '<a class="card dn-mb' + (done ? ' done' : '') + '" href="#/deneme/mebi/' + n + '"><span class="dn-mb-n"><small>Deneme</small><b>' + n + '</b></span><span class="dn-mb-s">' +
        ['soz', 'say'].map(function (k) { return '<span class="' + (b[k] != null ? 'on' : '') + '">' + MS[k].n + ' <b>' + (b[k] != null ? fnet(b[k]) + '<small>/' + MS[k].q + '</small>' : '—') + '</b></span>'; }).join('') +
        '</span>' + (done ? '<i class="dn-mb-ok">✓</i>' : '') + '</a>';
    }
    return h;
  }
  function mebiPage(n) {
    n = +n; A.setCrumbs([{ text: 'Deneme', href: '#/deneme' }, { text: 'MEBİ Deneme ' + n }]); document.title = 'MEBİ Deneme ' + n + ' · LGS Kışlası';
    if (!(n >= 1 && n <= 12)) { location.hash = '#/deneme'; return; }
    var pick = { soz: 1, say: 0 };
    app.innerHTML = '<div class="page-dn"><div class="dn-hero"><div class="dn-hero-ic">🏛️</div><h1>MEBİ Deneme ' + n + '</h1><p>2025-26 MEBİ LGS denemesi, resmî cevap anahtarıyla. Çözerken doğru/yanlış gösterilmez; net = doğru − yanlış ÷ 4.</p></div>' +
      '<div class="dn-mb-pick" id="dnPick">' + ['soz', 'say'].map(function (k) {
        var m = MS[k]; return '<button class="card dn-mb-o" data-k="' + k + '"><span class="dn-sw"><i></i></span><b>' + m.n + ' Oturum</b><small>' +
          m.subs.map(function (sid) { var s = subj(sid); return s ? s.icon + ' ' + esc(s.name) + ' ' + (sid === 'tr' || sid === 'mat' || sid === 'fen' ? 20 : 10) : ''; }).join(' · ') + '</small><em>' + m.q + ' soru · ' + m.min + ' dk</em></button>';
      }).join('') + '</div><div class="card dn-foot"><p class="small" id="dnPs"></p><button class="btn dn-go" id="dnGo">Denemeyi Başlat</button></div>' +
      '<p class="small dn-mb-note" id="dnPh"></p></div>';
    var root = app.querySelector('.page-dn');
    mebiBestFor(n, function (b) { var el = document.getElementById('dnPh'); if (el && b && b.c) el.innerHTML = 'Bu denemeyi ' + b.c + ' kez çözdün. En iyi netlerin: ' + ['soz', 'say'].map(function (k) { return MS[k].n + ' ' + (b[k] != null ? '<b>' + fnet(b[k]) + '</b>' : '—'); }).join(' · ') + '.'; });
    function refresh() {
      [].forEach.call(root.querySelectorAll('.dn-mb-o'), function (b) { b.classList.toggle('on', !!pick[b.getAttribute('data-k')]); });
      var ks = ['soz', 'say'].filter(function (k) { return pick[k]; }), q = 0, m = 0; ks.forEach(function (k) { q += MS[k].q; m += MS[k].min; });
      document.getElementById('dnPs').innerHTML = ks.length ? '<b>' + q + ' soru</b> · ' + m + ' dakika' + (ks.length === 2 ? '<br>Oturumlar arka arkaya: önce Sözel (75 dk), sonra Sayısal (80 dk). Bitirilen oturuma geri dönülmez.' : '') : 'En az bir oturum seç.';
      document.getElementById('dnGo').disabled = !ks.length;
    }
    root.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      if (b.hasAttribute('data-k')) { var k = b.getAttribute('data-k'); pick[k] = pick[k] ? 0 : 1; return refresh(); }
      if (b.id === 'dnGo') {
        var ks = ['soz', 'say'].filter(function (k) { return pick[k]; });
        var start = function () { b.disabled = true; b.textContent = 'Sorular hazırlanıyor…'; mebiStart(n, ks, function (err) { if (err) { A.toast(err); b.disabled = false; b.textContent = 'Denemeyi Başlat'; } }); };
        if (A.jget(CUR, null)) {
          var o = document.createElement('div'); o.className = 'dn-modal';
          o.innerHTML = '<div class="dn-modal-in"><div class="dn-modal-ic">⚠️</div><h2>Yarım kalan denemen var</h2><p>Yeni deneme başlarsa yarım kalan deneme silinir.</p><div class="dn-modal-b"><button class="btn ghost" data-no>Vazgeç</button><button class="btn" data-yes>Yine de başlat</button></div></div>';
          document.body.appendChild(o);
          o.onclick = function (ev) { if (ev.target === o || ev.target.closest('[data-no]')) o.remove(); else if (ev.target.closest('[data-yes]')) { o.remove(); start(); } };
        } else start();
      }
    });
    refresh();
  }
  function mebiBestFor(n, cb) {
    var loc = hist().map(function (h) { return { id: h.id, summary: h.summary }; });
    cb(mebiBest(loc)[n]);
    cloud('deneme_list', { p_token: window.LGSCloud ? window.LGSCloud.token() : '' }, function (err, rows) {
      if (err || !Array.isArray(rows)) return;
      var seen = {}, all = loc.slice(); loc.forEach(function (h) { if (h.id) seen[h.id] = 1; });
      rows.forEach(function (r) { if (!seen[r.id]) all.push({ id: r.id, summary: r.summary }); });
      if (location.hash === '#/deneme/mebi/' + n) cb(mebiBest(all)[n]);
    });
  }
  function mebiStart(n, ks, cb) {
    mebiIdx(function (ix) {
      var d = ix && ix[n]; if (!d) return cb('Deneme verisi yüklenemedi.');
      var items = [], parts = [], tids = [];
      ks.forEach(function (k) {
        var from = items.length;
        d[k].forEach(function (p) { var m = A.subjOf(p[1]); items.push({ tid: p[1], key: 'm:' + p[0], sid: m ? m.s.id : p[0].split('-')[1], lv: 'zor' }); if (tids.indexOf(p[1]) < 0) tids.push(p[1]); });
        parts.push({ k: k, from: from, to: items.length, min: MS[k].min });
      });
      loadTopics(tids, function () {
        var miss = items.filter(function (it) { return !qOf(it); }).length;
        if (miss) return cb(miss + ' soru yüklenemedi. İnternet bağlantını kontrol edip tekrar dene.');
        var now = Date.now(), tot = 0; parts.forEach(function (p) { tot += p.min; });
        A.jset(CUR, { v: 1, start: now, end: now + parts[0].min * 60000, min: tot, items: items, ans: {}, tm: {}, i: 0, mebi: { n: n, parts: ks }, parts: parts, p: 0, pStart: now, used: 0 });
        location.hash = '#/deneme/coz';
      });
    });
  }

  /* ================= OLUŞTURUCU ================= */
  function builderPage() {
    A.setCrumbs([{ text: 'Deneme', href: '#/deneme' }, { text: 'Yeni' }]); document.title = 'Yeni Deneme · LGS Kışlası';
    if (!cfg) { cfg = { s: {}, min: 0, minTouched: false }; }
    var html = '<div class="page-dn"><h1>Yeni Deneme</h1><p class="small">Ders seç, konularını işaretle, soru sayısını belirle. Konular ve zorluklar eşit dağıtılır; artan sorular rastgele yerleştirilir.</p>';
    ORDER.forEach(function (sid) {
      var s = subj(sid); if (!s) return;
      var c = cfg.s[sid];
      html += '<div class="card dn-sb' + (c ? ' on' : '') + '" data-s="' + sid + '" style="--sc:' + HEX[sid] + '">' +
        '<button class="dn-sb-h" data-tog="' + sid + '"><span class="dn-ic">' + s.icon + '</span><b>' + esc(s.name) + '</b><span class="dn-sw"><i></i></span></button>' +
        '<div class="dn-sb-b"' + (c ? '' : ' hidden') + '>' +
        '<div class="dn-row"><span>Soru sayısı</span><span class="dn-step"><button data-d="-1" data-n="' + sid + '">−</button><input type="number" inputmode="numeric" min="1" max="60" data-ni="' + sid + '" value="' + (c ? c.n : 10) + '"><button data-d="1" data-n="' + sid + '">＋</button></span></div>' +
        '<div class="dn-row"><span>Konular</span><span><button class="dn-mini" data-all="' + sid + '">Tümü</button><button class="dn-mini" data-none="' + sid + '">Hiçbiri</button></span></div>' +
        '<div class="dn-tps">' + s.topics.map(function (t) {
          return '<button class="dn-tp' + (c && c.t.indexOf(t.id) >= 0 ? ' on' : '') + '" data-tp="' + t.id + '" data-ts="' + sid + '">' + esc(t.title) + '</button>';
        }).join('') + '</div></div></div>';
    });
    html += '<div class="dn-foot card"><div class="dn-row"><span>Süre (dakika)</span><span class="dn-step"><button data-md="-5">−</button><input type="number" inputmode="numeric" min="1" max="300" id="dnMin"><button data-md="5">＋</button></span></div>' +
      '<p class="small" id="dnSum"></p><button class="btn dn-go" id="dnGo">Denemeyi Başlat</button></div></div>';
    app.innerHTML = html;
    var root = app.querySelector('.page-dn'), minIn = document.getElementById('dnMin');
    function total() { var n = 0; for (var k in cfg.s) if (cfg.s.hasOwnProperty(k)) n += cfg.s[k].n; return n; }
    function sugg() { var m = 0; for (var k in cfg.s) if (cfg.s.hasOwnProperty(k)) m += cfg.s[k].n * MPQ[k]; return Math.max(1, Math.round(m)); }
    function refresh() {
      if (!cfg.minTouched) cfg.min = sugg();
      minIn.value = cfg.min || '';
      var n = total(), bad = [];
      for (var k in cfg.s) if (cfg.s.hasOwnProperty(k) && !cfg.s[k].t.length) bad.push(subj(k).name);
      var sum = document.getElementById('dnSum'), go = document.getElementById('dnGo');
      sum.innerHTML = n ? '<b>' + n + ' soru</b> · ' + cfg.min + ' dakika' + (bad.length ? '<br><span class="warn">' + esc(bad.join(', ')) + ' için en az bir konu seç.</span>' : '') : 'En az bir ders seç.';
      go.disabled = !n || !!bad.length || !(cfg.min > 0);
    }
    root.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      var sid = b.getAttribute('data-tog'), card;
      if (sid) {
        card = b.closest('.dn-sb');
        if (cfg.s[sid]) { delete cfg.s[sid]; card.classList.remove('on'); card.querySelector('.dn-sb-b').hidden = true; }
        else {
          cfg.s[sid] = { n: +card.querySelector('[data-ni]').value || 10, t: [] };
          card.classList.add('on'); card.querySelector('.dn-sb-b').hidden = false;
        }
        return refresh();
      }
      if (b.hasAttribute('data-tp')) {
        var c = cfg.s[b.getAttribute('data-ts')], tid = b.getAttribute('data-tp'), i = c.t.indexOf(tid);
        if (i >= 0) c.t.splice(i, 1); else c.t.push(tid);
        b.classList.toggle('on', i < 0); return refresh();
      }
      if (b.hasAttribute('data-all') || b.hasAttribute('data-none')) {
        var s2 = b.getAttribute('data-all') || b.getAttribute('data-none'), on = b.hasAttribute('data-all');
        cfg.s[s2].t = on ? subj(s2).topics.map(function (t) { return t.id; }) : [];
        [].forEach.call(root.querySelectorAll('[data-ts="' + s2 + '"]'), function (x) { x.classList.toggle('on', on); });
        return refresh();
      }
      if (b.hasAttribute('data-n')) {
        var s3 = b.getAttribute('data-n'), inp = root.querySelector('[data-ni="' + s3 + '"]');
        inp.value = Math.max(1, Math.min(60, (+inp.value || 0) + +b.getAttribute('data-d'))); cfg.s[s3].n = +inp.value; return refresh();
      }
      if (b.hasAttribute('data-md')) { cfg.minTouched = true; cfg.min = Math.max(1, Math.min(300, (+minIn.value || 0) + +b.getAttribute('data-md'))); return refresh(); }
      if (b.id === 'dnGo') { b.disabled = true; b.textContent = 'Sorular hazırlanıyor…'; generate(function (err) { if (err) { A.toast(err); b.disabled = false; b.textContent = 'Denemeyi Başlat'; } }); }
    });
    root.addEventListener('change', function (e) {
      var t = e.target;
      if (t.hasAttribute('data-ni')) { var sid = t.getAttribute('data-ni'); t.value = Math.max(1, Math.min(60, Math.round(+t.value || 1))); if (cfg.s[sid]) cfg.s[sid].n = +t.value; refresh(); }
      if (t.id === 'dnMin') { cfg.minTouched = true; cfg.min = Math.max(1, Math.min(300, Math.round(+t.value || 1))); refresh(); }
    });
    refresh();
  }

  function generate(cb) {
    var sids = ORDER.filter(function (s) { return cfg.s[s]; }), tids = [];
    sids.forEach(function (s) { tids = tids.concat(cfg.s[s].t); });
    loadTopics(tids, function () {
      var items = [], short = 0;
      sids.forEach(function (sid) {
        var c = cfg.s[sid], tp = c.t.slice(), pools = {}, used = {};
        tp.forEach(function (tid) {
          var t = LGS.topics[tid], p = { kolay: [], orta: [], zor: [] };
          if (t) A.buildList(t).forEach(function (q) {
            var lv = q.grp === 'past' || q.grp === 'meb' ? 'zor' : q.grp === 'new' ? 'orta' : q.grp; p[lv].push(q.key);
          });
          shuffle(p.kolay); shuffle(p.orta); shuffle(p.zor); pools[tid] = p;
        });
        var tc = split(c.n, tp.length), dc = split(c.n, 3), labels = [];
        ['kolay', 'orta', 'zor'].forEach(function (lv, i) { for (var k = 0; k < dc[i]; k++) labels.push(lv); });
        shuffle(labels);
        var got = [], li = 0;
        var FB = { kolay: ['kolay', 'orta', 'zor'], orta: ['orta', 'kolay', 'zor'], zor: ['zor', 'orta', 'kolay'] };
        function take(tid, want) {
          var p = pools[tid]; if (!p) return null;
          for (var f = 0; f < 3; f++) { var lv = FB[want][f]; while (p[lv].length) { var k = p[lv].pop(); if (!used[tid + k]) { used[tid + k] = 1; return { tid: tid, key: k, sid: sid, lv: lv }; } } }
          return null;
        }
        tp.forEach(function (tid, ti) {
          for (var k = 0; k < tc[ti]; k++) {
            var lv = labels[li++], it = take(tid, lv);
            if (!it) { var others = shuffle(tp.slice()); for (var o = 0; o < others.length && !it; o++) it = take(others[o], lv); }
            if (it) got.push(it); else short++;
          }
        });
        items = items.concat(shuffle(got));
      });
      if (!items.length) return cb('Seçtiğin konularda soru bulunamadı.');
      var now = Date.now();
      A.jset(CUR, { v: 1, start: now, end: now + cfg.min * 60000, min: cfg.min, items: items, ans: {}, tm: {}, i: 0 });
      if (short) A.toast(short + ' soru için yeterli soru yoktu; deneme ' + items.length + ' soruyla hazırlandı.');
      location.hash = '#/deneme/coz';
    });
  }

  /* ================= ÇÖZME ================= */
  function solvePage() {
    var cur = A.jget(CUR, null);
    if (!cur) { location.hash = '#/deneme'; return; }
    A.setCrumbs([{ text: 'Deneme', href: '#/deneme' }, { text: 'Sınav' }]); document.title = 'Deneme · LGS Kışlası';
    app.innerHTML = '<p class="loading">Sorular yükleniyor…</p>';
    var tids = []; cur.items.forEach(function (it) { if (tids.indexOf(it.tid) < 0) tids.push(it.tid); });
    loadTopics(tids, function () {
      if (location.hash !== '#/deneme/coz') return;
      var qs = cur.items.map(qOf), N = cur.items.length, shownAt = Date.now(), dir = 0;
      var P = cur.parts || null, lo = 0, hi = N - 1;
      function rng() { if (P) { lo = P[cur.p].from; hi = P[cur.p].to - 1; } if (cur.i < lo || cur.i > hi) cur.i = lo; }
      rng();
      function lastPart() { return !P || cur.p >= P.length - 1; }
      document.body.classList.add('dn-solving');
      app.innerHTML = '<div class="dn-exam"><div class="dn-bar"><div class="dn-bar-t"><span class="dn-pos" id="dnPos"></span><span class="dn-left" id="dnLeft"></span>' +
        '<span class="dn-clock" id="dnClock"></span></div>' + (P ? '<div class="dn-part" id="dnPart"></div>' : '') + '<div class="dn-dots" id="dnDots"></div></div>' +
        '<div class="dn-stage" id="dnStage"></div>' +
        '<div class="dn-nav"><button class="btn ghost" id="dnPrev">‹ Önceki</button><button class="btn ghost dn-map-b" id="dnMapB">▦</button><button class="btn" id="dnNext">Sonraki ›</button></div>' +
        '<button class="dn-finish" id="dnFin">Sınavı Bitir</button><div class="dn-map" id="dnMap" hidden></div></div>';
      var stage = document.getElementById('dnStage');
      function dots() {
        var h = ''; for (var j = lo; j <= hi; j++) h += '<i data-j="' + j + '" style="--sc:' + HEX[cur.items[j].sid] + '"></i>';
        document.getElementById('dnDots').innerHTML = h;
        if (P) document.getElementById('dnPart').innerHTML = '🏛️ MEBİ Deneme ' + cur.mebi.n + ' · <b>' + MS[P[cur.p].k].n + ' Oturum</b>' + (P.length > 1 ? ' <small>(' + (cur.p + 1) + '/' + P.length + ')</small>' : '');
        document.getElementById('dnFin').textContent = lastPart() ? 'Sınavı Bitir' : MS[P[cur.p].k].n + ' Oturumunu Bitir';
      }
      function spend() { var n = Date.now(), k = cur.i; cur.tm[k] = (cur.tm[k] || 0) + (n - shownAt); shownAt = n; A.jset(CUR, cur); }
      function show() {
        var i = cur.i, it = cur.items[i], q = qs[i], s = subj(it.sid), a = cur.ans[i];
        var answered = cntAns();
        document.getElementById('dnPos').innerHTML = '<b>' + (i - lo + 1) + '</b>/' + (hi - lo + 1);
        document.getElementById('dnLeft').textContent = (hi - lo + 1 - answered) + ' boş · ' + answered + ' işaretli';
        [].forEach.call(document.querySelectorAll('#dnDots i'), function (d) { var j = +d.getAttribute('data-j'); d.className = (cur.ans[j] ? 'a' : '') + (j === i ? ' c' : ''); });
        var body;
        if (!q) body = '<p class="empty">Bu soru yüklenemedi.</p>';
        else if (q.past) body = '<img class="past" src="' + q.img + '" alt="LGS ' + q.year + ' sorusu">' +
          '<ul class="ch compact">' + LETTERS.map(function (L) { return '<li><button data-ch="' + L + '"' + (a === L ? ' class="sel"' : '') + '><b>' + L + ')</b></button></li>'; }).join('') + '</ul>';
        else body = '<div class="stem">' + A.fmt(q.q) + '</div><ul class="ch">' + q.c.map(function (c, k) {
          var L = LETTERS[k]; return '<li><button data-ch="' + L + '"' + (a === L ? ' class="sel"' : '') + '><b>' + L + ')</b><span>' + A.fmt(c) + '</span></button></li>';
        }).join('') + '</ul>';
        stage.innerHTML = '<article class="q dn-q ' + (dir > 0 ? 'in-r' : dir < 0 ? 'in-l' : '') + '" style="--sc:' + HEX[it.sid] + '"><div class="meta"><span class="num">' + (i - lo + 1) + '.</span>' +
          '<span class="tag dn-stag">' + s.icon + ' ' + esc(s.name) + '</span></div>' + body + '</article>';
        A.fitSvgs(stage);
        document.getElementById('dnPrev').disabled = i === lo;
        var nx = document.getElementById('dnNext'); nx.textContent = i === hi ? (lastPart() ? 'Bitir ✓' : 'Oturumu Bitir ✓') : 'Sonraki ›'; nx.classList.toggle('fin', i === hi);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
      function cntAns() { var c = 0; for (var j = lo; j <= hi; j++) if (cur.ans[j]) c++; return c; }
      function go(j) { if (j < lo || j > hi || j === cur.i) return; spend(); dir = j > cur.i ? 1 : -1; cur.i = j; A.jset(CUR, cur); show(); }
      stage.addEventListener('click', function (e) {
        var b = e.target.closest('button[data-ch]'); if (!b) return;
        var L = b.getAttribute('data-ch');
        if (cur.ans[cur.i] === L) delete cur.ans[cur.i]; else cur.ans[cur.i] = L;
        A.jset(CUR, cur);
        [].forEach.call(stage.querySelectorAll('button[data-ch]'), function (x) { x.classList.toggle('sel', cur.ans[cur.i] === x.getAttribute('data-ch')); });
        var answered = cntAns();
        document.getElementById('dnLeft').textContent = (hi - lo + 1 - answered) + ' boş · ' + answered + ' işaretli';
        var d = document.querySelector('#dnDots i[data-j="' + cur.i + '"]'); if (d) d.classList.toggle('a', !!cur.ans[cur.i]);
        if (navigator.vibrate) try { navigator.vibrate(8); } catch (e2) {}
      });
      document.getElementById('dnPrev').onclick = function () { go(cur.i - 1); };
      document.getElementById('dnNext').onclick = function () { if (cur.i === hi) confirmFin(); else go(cur.i + 1); };
      document.getElementById('dnFin').onclick = confirmFin;
      document.getElementById('dnDots').onclick = function (e) { var d = e.target.closest('i[data-j]'); if (d) go(+d.getAttribute('data-j')); };
      var map = document.getElementById('dnMap');
      document.getElementById('dnMapB').onclick = function () {
        map.innerHTML = '<div class="dn-map-in"><div class="dn-map-h"><b>Soru Haritası</b><button data-x>✕</button></div><div class="dn-map-g">' + cur.items.map(function (it, j) {
          if (j < lo || j > hi) return '';
          return '<button data-j="' + j + '" class="' + (cur.ans[j] ? 'a' : '') + (j === cur.i ? ' c' : '') + '" style="--sc:' + HEX[it.sid] + '">' + (j - lo + 1) + (cur.ans[j] ? '<small>' + cur.ans[j] + '</small>' : '') + '</button>';
        }).join('') + '</div></div>';
        map.hidden = false;
      };
      map.onclick = function (e) { var b = e.target.closest('button'); if (e.target === map || (b && b.hasAttribute('data-x'))) { map.hidden = true; return; } if (b && b.hasAttribute('data-j')) { map.hidden = true; go(+b.getAttribute('data-j')); } };
      function confirmFin() {
        var emp = hi - lo + 1 - cntAns(), o = document.createElement('div'), lp = lastPart();
        o.className = 'dn-modal';
        o.innerHTML = '<div class="dn-modal-in"><div class="dn-modal-ic">🏁</div><h2>' + (lp ? 'Sınavı bitir?' : MS[P[cur.p].k].n + ' oturumunu bitir?') + '</h2><p>' + (emp ? '<b>' + emp + ' boş soru</b> var. ' : 'Tüm soruları işaretledin. ') +
          (lp ? 'Bitirdikten sonra cevapların değiştirilemez.' : 'Bu oturuma geri dönülmez; ' + MS[P[cur.p + 1].k].n + ' oturumu ' + P[cur.p + 1].min + ' dakikayla başlar.') + '</p><div class="dn-modal-b"><button class="btn ghost" data-no>Devam et</button><button class="btn" data-yes>' + (lp ? 'Bitir ve Sonucu Gör' : 'Sonraki Oturuma Geç') + '</button></div></div>';
        document.body.appendChild(o);
        o.onclick = function (e) { if (e.target === o || e.target.closest('[data-no]')) o.remove(); else if (e.target.closest('[data-yes]')) { o.remove(); if (lp) finish(false); else nextPart(); } };
      }
      function nextPart() {
        spend(); var n = Date.now(); cur.used = (cur.used || 0) + Math.min(cur.end, n) - cur.pStart;
        cur.p++; cur.pStart = n; cur.end = n + P[cur.p].min * 60000; rng(); cur.i = lo; A.jset(CUR, cur);
        dir = 1; shownAt = n; dots(); show(); clk();
        A.toast(MS[P[cur.p].k].n + ' oturumu başladı: ' + P[cur.p].min + ' dakika.');
      }
      function finish(timeUp) {
        stop(); spend();
        if (P) cur.used = (cur.used || 0) + Math.min(cur.end, Date.now()) - cur.pStart;
        finalize(cur, qs, timeUp);
      }
      function clk() {
        var left = cur.end - Date.now(), el = document.getElementById('dnClock');
        if (!el) return stop();
        el.textContent = '⏱ ' + mmss(left); el.classList.toggle('warn', left < 5 * 60000); el.classList.toggle('crit', left < 60000);
        if (left <= 0) {
          var m = document.querySelector('.dn-modal'); if (m) m.remove();
          if (!lastPart()) { A.toast('Süre doldu! ' + MS[P[cur.p].k].n + ' oturumu kapandı.'); nextPart(); return; }
          A.toast('Süre doldu! Denemen değerlendiriliyor.'); finish(true);
        }
      }
      dots(); show(); clk(); tick = setInterval(clk, 500);
    });
  }

  /* ================= DEĞERLENDİRME ================= */
  function finalize(cur, qs, timeUp) {
    var items = cur.items.map(function (it, i) {
      var q = qs[i], c = cur.ans[i] || null;
      return { tid: it.tid, key: it.key, sid: it.sid, lv: it.lv, c: c, a: q ? q.a : null, r: !c ? 'e' : q && c === q.a ? 'ok' : 'bad', t: Math.round(cur.tm[i] || 0) };
    });
    // EXP (7 gün kuralı) ve istatistik — hatırlatıcıya eklenmez
    var xp = 0, cool = 0, before = null, after = null;
    items.forEach(function (it) {
      if (it.r === 'e') return;
      A.logAnswer(it.tid, it.r === 'ok');
      if (it.r === 'ok') {
        var res = A.awardXP(it.tid, it.key);
        if (res.xp) { xp += res.xp; if (before == null) before = res.before; after = res.after; it.x = res.xp; } else cool++;
      }
    });
    var S = { n: items.length, ok: 0, bad: 0, empty: 0, min: cur.min, used: cur.parts ? cur.used : Math.min(cur.end, Date.now()) - cur.start, xp: xp, cool: cool, timeUp: !!timeUp, by: {}, subs: [] };
    items.forEach(function (it) {
      var b = S.by[it.sid] || (S.by[it.sid] = { n: 0, ok: 0, bad: 0, e: 0 });
      b.n++; if (it.r === 'ok') { b.ok++; S.ok++; } else if (it.r === 'bad') { b.bad++; S.bad++; } else { b.e++; S.empty++; }
      if (S.subs.indexOf(it.sid) < 0) S.subs.push(it.sid);
    });
    for (var k in S.by) if (S.by.hasOwnProperty(k)) S.by[k].net = net(S.by[k].ok, S.by[k].bad);
    S.net = net(S.ok, S.bad);
    if (cur.mebi) S.mebi = { n: cur.mebi.n, parts: cur.mebi.parts.slice(), v: '2025-26' };
    var rec = { lid: 'L' + Date.now(), id: null, at: Date.now(), summary: S, data: { items: items } };
    var h = hist(); h.unshift(rec); while (h.length > 40) h.pop(); A.jset(HIST, h);
    localStorage.removeItem(CUR);
    cloud('deneme_save', { p_token: window.LGSCloud ? window.LGSCloud.token() : '', p_summary: S, p_data: rec.data }, function (err, id) {
      if (err || !id) return;
      var h2 = hist(); h2.forEach(function (x) { if (x.lid === rec.lid) x.id = id; }); A.jset(HIST, h2);
    });
    location.hash = '#/deneme/r/' + rec.lid;
    if (xp) setTimeout(function () { A.gainFx({ xp: xp, before: before, after: after }, null); }, 1400);
  }

  /* ================= RAPOR ================= */
  function reportPage(id) {
    A.setCrumbs([{ text: 'Deneme', href: '#/deneme' }, { text: 'Rapor' }]); document.title = 'Deneme Raporu · LGS Kışlası';
    var rec = hist().filter(function (x) { return x.lid === id || x.id === id; })[0];
    if (rec) return render(rec);
    app.innerHTML = '<p class="loading">Rapor yükleniyor…</p>';
    cloud('deneme_get', { p_token: window.LGSCloud ? window.LGSCloud.token() : '', p_id: id }, function (err, d) {
      if (err || !d || !d.data) { app.innerHTML = '<p class="empty">Bu deneme bulunamadı. <a href="#/deneme">Denemelere dön</a></p>'; return; }
      render({ id: d.id, at: new Date(d.at).getTime(), summary: d.summary, data: d.data });
    });
  }
  function render(rec) {
    var S = rec.summary, items = rec.data.items, tids = [];
    items.forEach(function (it) { if (tids.indexOf(it.tid) < 0) tids.push(it.tid); });
    app.innerHTML = '<p class="loading">Rapor hazırlanıyor…</p>';
    loadTopics(tids, function () {
      var p = S.n ? Math.max(0, Math.round(S.net * 100 / S.n)) : 0, rc = p >= 70 ? '#22c55e' : p >= 40 ? '#f59e0b' : '#f43f5e';
      var verdict = p >= 85 ? 'Muhteşem! Kışlanın yıldızısın.' : p >= 70 ? 'Çok iyi! Böyle devam.' : p >= 50 ? 'İyi gidiyorsun, yanlışlarına odaklan.' : p >= 30 ? 'Temelini güçlendir, konu özetlerine dön.' : 'Zorlu bir deneme oldu. Pes etmek yok!';
      var html = '<div class="page-dn dn-rep">' + (S.mebi ? '<div class="dn-rep-tt">🏛️ ' + esc(mebiTitle(S.mebi)) + '</div>' : '') +
        '<div class="dn-score" style="--rc:' + rc + '"><div class="dn-score-ring">' + ringSvg(p, rc, 150, true) + '<div class="dn-score-c"><b>' + fnet(S.net) + '</b><small>NET</small></div></div>' +
        '<div class="dn-score-m"><div class="dn-verdict">' + verdict + '</div><div class="dn-kpis">' +
        kpi('✓', S.ok, 'Doğru', 'ok') + kpi('✗', S.bad, 'Yanlış', 'bad') + kpi('○', S.empty, 'Boş', 'e') + '</div>' +
        '<div class="small">' + fdate(rec.at) + ' · ' + S.n + ' soru · ' + dkSn(S.used) + ' / ' + S.min + ' dk' + (S.timeUp ? ' · süre doldu' : '') + '</div></div></div>' +
        '<div class="dn-xp card"><span class="dn-xp-n">+' + A.nf(S.xp || 0) + ' <small>EXP</small></span><span class="small">' +
        (S.xp ? 'Daha önce çözmediğin ya da 7 günden uzun süredir çözmediğin doğrular için kazandın.' : 'Bu denemeden EXP kazanılmadı.') +
        (S.cool ? ' ' + S.cool + ' doğru soruyu son 7 gün içinde çözdüğün için EXP vermedi.' : '') + '</span></div>' +
        (S.mebi ? '<div class="dn-subs dn-mb-pn">' + S.mebi.parts.map(function (k) { var v = partNet(S, k); return '<div class="card dn-sr"><div class="dn-sr-h"><span>🏛️ ' + MS[k].n + ' oturum</span><b>' + fnet(v) + ' <small>/ ' + MS[k].q + ' net</small></b></div></div>'; }).join('') + '</div>' : '') +
        '<div class="small dn-netnote">Net = doğru − yanlış ÷ 4 (4 yanlış 1 doğruyu götürür).</div>';
      // ders kartları
      html += '<h2 class="dn-h2">Ders Ders Sonuç</h2><div class="dn-subs">' + ORDER.filter(function (s) { return S.by[s]; }).map(function (sid) {
        var b = S.by[sid], s = subj(sid);
        return '<div class="card dn-sr" style="--sc:' + HEX[sid] + '"><div class="dn-sr-h"><span>' + s.icon + ' ' + esc(s.name) + '</span><b>' + fnet(b.net) + ' <small>net</small></b></div>' +
          stack(b.ok, b.bad, b.e) + '<div class="dn-sr-l"><span class="ok">' + b.ok + ' D</span><span class="bad">' + b.bad + ' Y</span><span class="e">' + b.e + ' B</span><span>' + b.n + ' soru</span></div></div>';
      }).join('') + '</div>';
      // grafikler
      html += '<div class="dn-charts"><div class="card"><div class="dn-ch-h">🎯 Genel dağılım</div>' + donut(S.ok, S.bad, S.empty) + '</div>' +
        '<div class="card"><div class="dn-ch-h">📊 Derslere göre başarı (%)</div>' + subBars(S) + '</div>' +
        '<div class="card"><div class="dn-ch-h">🧗 Zorluğa göre</div>' + lvBars(items) + '</div>' +
        '<div class="card dn-wide"><div class="dn-ch-h">⏱ Soru başına süre <small>ort. ' + dkSn(avgT(items)) + '</small></div>' + timeBars(items) + '</div></div>';
      // konu analizi
      html += '<h2 class="dn-h2">Konu Analizi</h2><div class="card dn-tpa">' + topicRows(items) + '</div>';
      // yanlış / boş
      var wr = items.filter(function (x) { return x.r === 'bad'; }), em = items.filter(function (x) { return x.r === 'e'; });
      html += '<h2 class="dn-h2">Sorularım</h2><div class="dn-qtabs" id="dnQt"><button data-f="bad" class="on">Yanlış (' + wr.length + ')</button><button data-f="e">Boş (' + em.length + ')</button><button data-f="ok">Doğru (' + S.ok + ')</button></div>' +
        '<div id="dnQl"></div><div class="dn-end">' + (S.mebi ? '<a class="btn" href="#/deneme/mebi/' + S.mebi.n + '">↻ MEBİ Deneme ' + S.mebi.n + '</a>' : '<a class="btn" href="#/deneme/yeni">＋ Yeni Deneme</a>') + '<a class="btn ghost" href="#/deneme">Tüm Denemelerim</a></div></div>';
      app.innerHTML = html;
      var ql = document.getElementById('dnQl');
      function drawQ(f) {
        var list = items.map(function (it, i) { return { it: it, i: i }; }).filter(function (x) { return x.it.r === f; });
        if (!list.length) { ql.innerHTML = '<p class="empty">' + (f === 'bad' ? 'Hiç yanlışın yok. Harika! 🎉' : f === 'e' ? 'Boş sorun yok.' : 'Doğru sorun yok.') + '</p>'; return; }
        ql.innerHTML = list.map(function (x) {
          var it = x.it, s = subj(it.sid);
          return '<div class="card dn-wq ' + it.r + '" data-i="' + x.i + '" style="--sc:' + HEX[it.sid] + '"><button class="dn-wq-h" data-open="' + x.i + '"><span class="num">' + (x.i + 1) + '.</span><span class="dn-wq-t"><b>' + s.icon + ' ' + esc(topicTitle(it.tid)) + '</b><small>' + LVN[it.lv] +
            (it.c ? ' · Senin cevabın: <em>' + it.c + '</em>' : ' · Boş bıraktın') + '</small></span><span class="dn-wq-go">Doğrusunu gör ›</span></button><div class="dn-wq-b" hidden></div></div>';
        }).join('');
      }
      ql.addEventListener('click', function (e) {
        var b = e.target.closest('[data-open]'); if (!b) return;
        var i = +b.getAttribute('data-open'), it = items[i], box = b.parentNode.querySelector('.dn-wq-b');
        if (!box.hidden) { box.hidden = true; b.querySelector('.dn-wq-go').textContent = 'Doğrusunu gör ›'; return; }
        var q = qOf(it);
        if (!q) box.innerHTML = '<p class="empty">Soru bulunamadı (soru bankası güncellenmiş olabilir).</p>';
        else {
          var mark = function (L) { return L === q.a ? ' ok' : L === it.c ? ' bad' : ''; };
          box.innerHTML = '<div class="q">' + (q.past ? '<div class="meta"><span class="tag past">' + (q.meb ? A.esc(q.lb || 'MEB Örnek') : 'LGS ' + q.year + ' · ' + q.no + '. soru') + '</span></div><img class="past" src="' + q.img + '" alt="">' +
            '<ul class="ch compact">' + LETTERS.map(function (L) { return '<li><button disabled class="' + mark(L) + '"><b>' + L + ')</b></button></li>'; }).join('') + '</ul>'
            : '<div class="stem">' + A.fmt(q.q) + '</div><ul class="ch">' + q.c.map(function (c, k) { var L = LETTERS[k]; return '<li><button disabled class="' + mark(L) + '"><b>' + L + ')</b><span>' + A.fmt(c) + '</span></button></li>'; }).join('') + '</ul>') +
            '<div class="res ' + (it.r === 'ok' ? 'ok' : 'bad') + '">' + (it.r === 'ok' ? '✓ Doğru cevap: ' + q.a : (it.c ? '✗ Senin cevabın: ' + it.c + ' · ' : 'Boş · ') + 'Doğru cevap: ' + q.a) + '</div>' +
            '<div class="sol"><span class="st">Çözüm</span>' + A.fmt(q.s || '') + '</div></div>';
          A.fitSvgs(box);
        }
        box.hidden = false; b.querySelector('.dn-wq-go').textContent = 'Gizle ˄';
      });
      document.getElementById('dnQt').addEventListener('click', function (e) {
        var b = e.target.closest('button[data-f]'); if (!b) return;
        [].forEach.call(this.children, function (x) { x.classList.toggle('on', x === b); }); drawQ(b.getAttribute('data-f'));
      });
      drawQ(wr.length ? 'bad' : em.length ? 'e' : 'ok');
      if (!wr.length) { var t0 = document.querySelector('#dnQt button[data-f="' + (em.length ? 'e' : 'ok') + '"]'); [].forEach.call(document.querySelectorAll('#dnQt button'), function (x) { x.classList.toggle('on', x === t0); }); }
      requestAnimationFrame(function () { app.querySelector('.dn-rep').classList.add('go'); });
    });
  }
  function kpi(i, n, l, c) { return '<span class="dn-kpi ' + c + '"><b>' + n + '</b><small>' + i + ' ' + l + '</small></span>'; }
  function stack(ok, bad, e) { var n = ok + bad + e || 1; return '<div class="dn-stack"><i class="ok" style="--w:' + ok * 100 / n + '%"></i><i class="bad" style="--w:' + bad * 100 / n + '%"></i><i class="e" style="--w:' + e * 100 / n + '%"></i></div>'; }
  function avgT(items) { var s = 0; items.forEach(function (x) { s += x.t || 0; }); return items.length ? s / items.length : 0; }
  function ringSvg(p, c, size, anim) {
    var r = 42, C = 2 * Math.PI * r;
    return '<svg class="dn-ring' + (anim ? ' anim' : '') + '" viewBox="0 0 100 100" width="' + size + '" height="' + size + '"><circle cx="50" cy="50" r="' + r + '" class="dn-ring-bg"/>' +
      '<circle cx="50" cy="50" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="9" stroke-linecap="round" stroke-dasharray="' + (C * p / 100).toFixed(1) + ' ' + C.toFixed(1) + '" transform="rotate(-90 50 50)" style="--len:' + C.toFixed(1) + '"/>' +
      (size < 100 ? '<text x="50" y="57" text-anchor="middle" class="dn-ring-t">%' + p + '</text>' : '') + '</svg>';
  }
  function donut(ok, bad, e) {
    var n = ok + bad + e || 1, r = 38, C = 2 * Math.PI * r, off = 0, segs = [[ok, '#22c55e'], [bad, '#f43f5e'], [e, '#64748b']], out = '';
    segs.forEach(function (s) { if (!s[0]) return; var L = C * s[0] / n; out += '<circle cx="50" cy="50" r="' + r + '" fill="none" stroke="' + s[1] + '" stroke-width="16" stroke-dasharray="' + L.toFixed(2) + ' ' + (C - L).toFixed(2) + '" stroke-dashoffset="' + (-off).toFixed(2) + '" transform="rotate(-90 50 50)"/>'; off += L; });
    return '<div class="dn-donut"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="' + r + '" class="dn-ring-bg" stroke-width="16"/>' + out + '<text x="50" y="49" text-anchor="middle" class="dn-dn-n">' + Math.round(ok * 100 / n) + '%</text><text x="50" y="62" text-anchor="middle" class="dn-dn-l">doğru</text></svg>' +
      '<ul><li><i style="background:#22c55e"></i>Doğru <b>' + ok + '</b></li><li><i style="background:#f43f5e"></i>Yanlış <b>' + bad + '</b></li><li><i style="background:#64748b"></i>Boş <b>' + e + '</b></li></ul></div>';
  }
  function subBars(S) {
    return '<div class="dn-vbars">' + ORDER.filter(function (s) { return S.by[s]; }).map(function (sid) {
      var b = S.by[sid], p = Math.round(b.ok * 100 / b.n);
      return '<div class="dn-vb"><span class="dn-vb-v">%' + p + '</span><span class="dn-vb-c"><i style="--h:' + Math.max(3, p) + '%;background:' + HEX[sid] + '"></i></span><span class="dn-vb-l">' + ({ tr: 'TÜR', mat: 'MAT', fen: 'FEN', ink: 'İNK', din: 'DİN', ing: 'İNG' })[sid] + '</span></div>';
    }).join('') + '</div>';
  }
  function lvBars(items) {
    return '<div class="dn-lv">' + ['kolay', 'orta', 'zor'].map(function (lv) {
      var l = items.filter(function (x) { return x.lv === lv; }), ok = 0, bad = 0, e = 0;
      l.forEach(function (x) { if (x.r === 'ok') ok++; else if (x.r === 'bad') bad++; else e++; });
      return '<div class="dn-lv-r lv-' + lv + '"><span class="dn-lv-n">' + LVN[lv] + '<small>' + l.length + ' soru</small></span>' + (l.length ? stack(ok, bad, e) : '<div class="dn-stack"></div>') + '<b>' + (l.length ? Math.round(ok * 100 / l.length) : 0) + '%</b></div>';
    }).join('') + '</div>';
  }
  function timeBars(items) {
    var mx = 1; items.forEach(function (x) { mx = Math.max(mx, x.t || 0); });
    var W = Math.max(300, items.length * 14), H = 110, bw = W / items.length;
    var out = '<div class="dn-tb-w"><svg viewBox="0 0 ' + W + ' ' + (H + 18) + '" width="' + W + '" height="' + (H + 18) + '" class="dn-tb">';
    items.forEach(function (x, i) {
      var h = Math.max(2, (x.t || 0) / mx * H), c = x.r === 'ok' ? '#22c55e' : x.r === 'bad' ? '#f43f5e' : '#64748b';
      out += '<rect x="' + (i * bw + bw * 0.15).toFixed(1) + '" y="' + (H - h).toFixed(1) + '" width="' + (bw * 0.7).toFixed(1) + '" height="' + h.toFixed(1) + '" rx="2" fill="' + c + '" style="--d:' + (i * 18) + 'ms"><title>' + (i + 1) + '. soru · ' + dkSn(x.t || 0) + '</title></rect>';
      if (items.length <= 40 || (i + 1) % 5 === 0) out += '<text x="' + (i * bw + bw / 2).toFixed(1) + '" y="' + (H + 13) + '" text-anchor="middle">' + (i + 1) + '</text>';
    });
    return out + '</svg></div><div class="dn-leg"><span><i style="background:#22c55e"></i>Doğru</span><span><i style="background:#f43f5e"></i>Yanlış</span><span><i style="background:#64748b"></i>Boş</span></div>';
  }
  function topicRows(items) {
    var by = {}, order = [];
    items.forEach(function (x) { var b = by[x.tid]; if (!b) { b = by[x.tid] = { sid: x.sid, ok: 0, bad: 0, e: 0 }; order.push(x.tid); } if (x.r === 'ok') b.ok++; else if (x.r === 'bad') b.bad++; else b.e++; });
    order.sort(function (a, b) { var A1 = by[a], B1 = by[b]; return ORDER.indexOf(A1.sid) - ORDER.indexOf(B1.sid) || (A1.ok / (A1.ok + A1.bad + A1.e)) - (B1.ok / (B1.ok + B1.bad + B1.e)); });
    return order.map(function (tid) {
      var b = by[tid], n = b.ok + b.bad + b.e, p = Math.round(b.ok * 100 / n);
      return '<div class="dn-tr"><span class="dn-tr-n"><i style="background:' + HEX[b.sid] + '"></i>' + esc(topicTitle(tid)) + '</span>' + stack(b.ok, b.bad, b.e) +
        '<span class="dn-tr-v"><b class="' + (p >= 70 ? 'ok' : p >= 40 ? 'mid' : 'bad') + '">%' + p + '</b><small>' + b.ok + '/' + n + '</small></span></div>';
    }).join('') + '<p class="small">En zayıf konuların her dersin üstünde listelenir. Bunlara konu özetinden tekrar bak.</p>';
  }
  function trendSvg(rows) {
    var W = 320, H = 120, n = rows.length, pts = rows.map(function (r, i) {
      var s = r.summary || {}, p = s.n ? Math.max(0, s.net * 100 / s.n) : 0;
      return [20 + i * (W - 40) / Math.max(1, n - 1), 12 + (H - 30) * (1 - p / 100), Math.round(p)];
    });
    var line = pts.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ');
    var area = '20,' + (H - 18) + ' ' + line + ' ' + pts[n - 1][0].toFixed(1) + ',' + (H - 18);
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" class="dn-trend-s"><defs><linearGradient id="dnTg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#22d3ee" stop-opacity=".45"/><stop offset="1" stop-color="#22d3ee" stop-opacity="0"/></linearGradient></defs>' +
      [0, 50, 100].map(function (v) { var y = 12 + (H - 30) * (1 - v / 100); return '<line x1="20" x2="' + (W - 20) + '" y1="' + y + '" y2="' + y + '" class="dn-grid"/><text x="2" y="' + (y + 3) + '" class="dn-ax">' + v + '</text>'; }).join('') +
      '<polygon points="' + area + '" fill="url(#dnTg)"/><polyline points="' + line + '" fill="none" stroke="#22d3ee" stroke-width="2.5" stroke-linejoin="round"/>' +
      pts.map(function (p) { return '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="3.5" fill="#0b1220" stroke="#22d3ee" stroke-width="2"/><text x="' + p[0].toFixed(1) + '" y="' + (p[1] - 8).toFixed(1) + '" text-anchor="middle" class="dn-pv">' + p[2] + '</text>'; }).join('') + '</svg>';
  }

  window.LGSDeneme = {
    stop: stop,
    page: function (a, b) {
      stop();
      if (a === 'yeni') builderPage();
      else if (a === 'coz') solvePage();
      else if (a === 'mebi' && b) mebiPage(b);
      else if (a === 'r' && b) reportPage(decodeURIComponent(b));
      else listPage();
    }
  };
  // app.js ilk yönlendirmeyi bu dosya yüklenmeden yapmış olabilir (doğrudan #/deneme açılışı)
  setTimeout(function () { if (/^#\/deneme/.test(location.hash) && A.route && !app.querySelector('.page-dn, .dn-exam')) A.route(); }, 0);
})();
