/* LGS Kışlası · VS Arena — iki kişilik canlı düello.
   Zamanlama tamamen sunucu saatine bağlıdır: her istemci sunucu ile saat farkını ölçer,
   geri sayım / süre / animasyon başlangıcı aynı sunucu anına göre çizilir. */
(function () {
  'use strict';
  var A = window.LGSApp, C = window.LGSCloud;
  if (!A || !C || !C.rpc) return;
  var app = document.getElementById('app');
  var LET = ['A', 'B', 'C', 'D'];
  var CH = {
    fatih:     { n: 'Fatih', t: 'İstanbul’un Fatihi', skin: '#c58a62', beard: 'short', bc: '#24170f', hat: 'turban', hc: '#efe9dc', hc2: '#d4a84b', plume: '#e8c060', top: 'vest', tc: '#8f1a1a', tc2: '#d4a84b', fur: '#3b2a1c', pants: '#2a1a12', sash: '#b8892b', wrap: '#e8e0d0' },
    yavuz:     { n: 'Yavuz', t: 'Kudretli Sultan', skin: '#c38760', beard: 'must', bc: '#1a120c', hat: 'selimi', hc: '#f2ede2', hc2: '#7d1420', plume: '#c9a14a', top: 'none', pants: '#16191e', sash: '#1f5e3a', wrap: '#e8e0d0', guard: '#1b1b1b' },
    alparslan: { n: 'Alp Arslan', t: 'Malazgirt’in Kahramanı', skin: '#b97f58', beard: 'longmust', bc: '#1d140e', hat: 'bork', hc: '#4a3423', hc2: '#c9a14a', top: 'lamellar', tc: '#5a3d26', tc2: '#2b6f6a', pants: '#2e2418', sash: '#4a3423', wrap: '#d8ccb6', braid: 1 },
    metehan:   { n: 'Mete Han', t: 'Hunların Kağanı', skin: '#b67b55', beard: 'short', bc: '#1b130d', hat: 'helmet', hc: '#8e949c', hc2: '#5a5f66', plume: '#111', top: 'pelt', tc: '#8a8178', fur: '#6e655c', pants: '#2b2420', sash: '#7a1717', wrap: '#cfc2ab', hair: 1 },
    barbaros:  { n: 'Barbaros', t: 'Denizlerin Hakimi', skin: '#c48b66', beard: 'full', bc: '#a8431c', hat: 'turban', hc: '#f0ebe0', hc2: '#9b1c1c', top: 'coat', tc: '#18264a', tc2: '#d4a84b', pants: '#151d33', sash: '#9b1c1c', wrap: '#e2d8c4', chain: 1 },
    osman:     { n: 'Osman Gazi', t: 'Devletin Kurucusu', skin: '#bf8660', beard: 'full', bc: '#3a332d', hat: 'cap', hc: '#efe8da', hc2: '#8f1d1d', top: 'vest', tc: '#5a3b22', tc2: '#8f1d1d', pants: '#43301f', sash: '#8f1d1d', wrap: '#e2d8c4' }
  };
  var CH_IDS = ['fatih', 'yavuz', 'alparslan', 'metehan', 'barbaros', 'osman'];
  function chImg(id, face) { return 'img/vs/' + id + (face ? '-f' : '') + '.jpg'; }
  var esc = A.esc;

  /* ---------- sunucu saati ---------- */
  var off = 0, bestRtt = 1e9;
  function now() { return Date.now() + off; }
  function rpc(name, body, cb) {
    var t0 = Date.now();
    C.rpc(name, body, function (err, d) {
      var t1 = Date.now(), rtt = t1 - t0;
      if (!err && d && typeof d === 'object' && d.now) {
        var o = d.now - (t0 + t1) / 2;
        if (rtt <= bestRtt * 1.5 || bestRtt > 5000) { off = bestRtt > 5000 ? o : off * 0.6 + o * 0.4; if (rtt < bestRtt) { bestRtt = rtt; off = o; } }
      }
      cb && cb(err, d);
    });
  }

  /* ---------- oyuncu ---------- */
  function me() {
    var p = A.getProfile();
    return { name: C.name(), thumb: p.thumb || null, xp: A.xpGet().total };
  }
  function lvl(p) { return A.levelOf((p && p.xp) || 0); }
  function plate(p, side, isMe) {
    if (!p) return '<div class="vs-pl ' + side + ' empty"><div class="vs-wait-av"></div><b>Rakip bekleniyor</b><small>Oda listede görünüyor…</small></div>';
    var L = lvl(p);
    var face = p.ch && CH[p.ch] ? '<div class="vs-pl-ch"><img src="' + chImg(p.ch) + '" alt=""><span>' + CH[p.ch].n + '</span></div>' : '<div class="vs-pl-ch none">Karakter seçiliyor…</div>';
    return '<div class="vs-pl ' + side + '">' + face +
      A.rankTag(L) + '<b>' + esc(p.name) + '</b><small>Seviye ' + L + (isMe ? ' · SEN' : '') + '</small></div>';
  }

  /* ---------- yaşam döngüsü ---------- */
  var timer = null, raf = null, cur = null, roomId = null, alive = false;
  function stop() {
    alive = false;
    if (timer) clearTimeout(timer); timer = null;
    if (raf) cancelAnimationFrame(raf); raf = null;
    document.body.classList.remove('vs-on');
    if (cur && roomId && (cur.status === 'wait' || cur.status === 'play') && cur.role) rpc('vs_leave', { p_room: roomId, p_token: C.token() });
    cur = null; roomId = null; G = null;
  }
  function page(id) {
    stop(); alive = true;
    if (!C.name()) {
      A.setCrumbs([{ text: 'VS Arena' }]);
      app.innerHTML = '<div class="vs-page"><h1>⚔️ VS Arena</h1><div class="card"><p>Düelloya girmek için önce bir kullanıcı adı belirlemelisin. Rakibin adını, rütbeni ve seviyeni görecek.</p><a class="btn primary" href="#/profil">Profiline git</a></div></div>';
      return;
    }
    if (id) roomPage(id); else lobby();
  }

  /* =========================================================
     LOBİ
     ========================================================= */
  function lobby() {
    A.setCrumbs([{ text: 'VS Arena' }]);
    document.title = 'VS Arena · LGS Kışlası';
    app.innerHTML = '<div class="vs-page"><div class="vs-hero"><div class="vs-hero-t">VS</div><h1>Arena</h1><p>Oda kur ya da açık bir odaya katıl. Doğru ve hızlı cevap rakibine hasar verir.</p></div>' +
      '<button class="btn primary vs-create" id="vsCreate">⚔️ Oda Kur</button>' +
      '<h2 class="vs-h2">Açık Odalar</h2><div id="vsRooms"><p class="loading">Odalar yükleniyor…</p></div>' +
      '<div class="card vs-rules"><h3>Kurallar</h3><ul>' +
      '<li>Biri bilip diğeri bilemezse <b>kritik hasar</b>: soruların yarısı böyle giderse oyun biter.</li>' +
      '<li>İkisi de bilirse <b>önce bilen</b> normal hasar verir.</li>' +
      '<li>Rakibin canı <b>%70</b> ve <b>%30</b>’un altına indiğinde hareketini seçersin, kazanınca da <b>fatality</b>.</li>' +
      '<li>Oyundan çıkan ya da 25 saniye bağlantısı kopan kaybeder.</li></ul></div></div>';
    document.getElementById('vsCreate').addEventListener('click', function () {
      this.disabled = true;
      rpc('vs_create', { p_token: C.token(), p_me: me() }, function (err, d) {
        if (err || !d) { A.toast('Oda kurulamadı, bağlantını kontrol et.'); document.getElementById('vsCreate').disabled = false; return; }
        location.hash = '#/vs/' + d;
      });
    });
    var poll = function () {
      if (!alive || location.hash.indexOf('#/vs') !== 0 || location.hash.split('/')[2]) return;
      rpc('vs_list', {}, function (err, d) {
        var box = document.getElementById('vsRooms'); if (!box) return;
        var rows = (d || []).filter(function (r) { return r.host && r.host.name !== C.name(); });
        box.innerHTML = rows.length ? rows.map(function (r) {
          var L = lvl(r.host), n = cfgCount(r.cfg);
          return '<div class="vs-room">' + A.avatarHtml({ name: r.host.name, photo: r.host.thumb }, 'av-sm') +
            '<div class="vs-room-b">' + A.rankTag(L) + '<b>' + esc(r.host.name) + '</b><small>Seviye ' + L + (n ? ' · ' + n + ' soru' : '') + '</small></div>' +
            '<button class="btn primary" data-join="' + r.id + '">Katıl</button></div>';
        }).join('') : '<p class="empty">Şu an açık oda yok. İlk odayı sen kur!</p>';
        timer = setTimeout(poll, 2500);
      });
    };
    document.getElementById('vsRooms').addEventListener('click', function (e) {
      var b = e.target.closest('[data-join]'); if (!b) return;
      b.disabled = true;
      var id = b.getAttribute('data-join');
      rpc('vs_join', { p_room: id, p_token: C.token(), p_me: me() }, function (err, d) {
        if (d === 'ok' || d === 'host') location.hash = '#/vs/' + id;
        else { A.toast(d === 'full' ? 'Bu odaya başkası katıldı.' : 'Oda kapanmış.'); b.disabled = false; }
      });
    });
    poll();
  }
  function cfgCount(cfg) {
    var n = 0, sb = (cfg && cfg.sb) || {};
    for (var k in sb) if (sb.hasOwnProperty(k)) n += +sb[k].n || 0;
    return n;
  }

  /* =========================================================
     ODA
     ========================================================= */
  var TIMES = [10, 15, 20, 30, 45, 60, 90, 120, 180, 240, 300];
  var DEF_T = { tr: 60, mat: 90, fen: 60, ink: 45, din: 45, ing: 30 };
  function tLabel(t) { return t < 60 ? t + ' sn' : (t % 60 ? Math.floor(t / 60) + ' dk ' + (t % 60) + ' sn' : t / 60 + ' dk'); }
  var cfg = null, cfgDirty = null, openSb = null;

  function roomPage(id) {
    roomId = id; cfg = null; G = null;
    A.setCrumbs([{ href: '#/vs', text: 'VS Arena' }, { text: 'Oda' }]);
    document.title = 'VS Odası · LGS Kışlası';
    app.innerHTML = '<div class="vs-page"><p class="loading">Odaya bağlanılıyor…</p></div>';
    var tick = function () {
      if (!alive || roomId !== id) return;
      rpc('vs_state', { p_room: id, p_token: C.token() }, function (err, d) {
        if (!alive || roomId !== id) return;
        if (!err && d) onState(d);
        var fast = cur && cur.status === 'play';
        timer = setTimeout(tick, err ? 1500 : fast ? 300 : 1000);
      });
    };
    tick();
  }

  function onState(d) {
    if (d.gone || d.status === 'closed') {
      cur = null;
      app.innerHTML = '<div class="vs-page"><div class="card"><p>Bu oda kapandı.</p><a class="btn primary" href="#/vs">Arenaya dön</a></div></div>';
      return;
    }
    var prev = cur; cur = d;
    if (!d.role) {
      if (d.status === 'wait' && !d.guest) {
        rpc('vs_join', { p_room: roomId, p_token: C.token(), p_me: me() }, function () {});
        return;
      }
      app.innerHTML = '<div class="vs-page"><div class="card"><p>Bu oda dolu.</p><a class="btn primary" href="#/vs">Arenaya dön</a></div></div>';
      return;
    }
    if (d.status === 'wait') drawWait(d, prev);
    else gameState(d);
  }

  /* ---------- bekleme / ayar ---------- */
  function defaultCfg() {
    var sb = {};
    LGS.subjects.forEach(function (s) { sb[s.id] = { n: s.id === 'mat' || s.id === 'tr' || s.id === 'fen' ? 3 : 0, t: DEF_T[s.id] || 60, tp: null }; });
    return { sb: sb };
  }
  function drawWait(d, prev) {
    var host = d.role === 'h';
    if (host && !cfg) { cfg = d.cfg && d.cfg.sb ? d.cfg : defaultCfg(); pushCfg(); }
    var c = host ? cfg : (d.cfg && d.cfg.sb ? d.cfg : null);
    var total = c ? cfgCount(c) : 0;
    var head = '<div class="vs-versus">' + plate(d.host, 'L', host) + '<div class="vs-x">VS</div>' + plate(d.guest, 'R', !host) + '</div>';
    var key = JSON.stringify([d.guest && d.guest.name, host ? null : d.cfg, host, d.host && d.host.ch, d.guest && d.guest.ch]);
    if (prev && prev.status === 'wait' && document.getElementById('vsWait') && document.getElementById('vsWait').getAttribute('data-k') === key) {
      if (host) updateStart(d);
      return;
    }
    var body;
    if (host) {
      body = '<div class="card vs-setup"><h2>Düello Ayarları</h2><p class="small">Her ders için soru sayısını, soru başına süreyi ve konuları seç.</p>' +
        LGS.subjects.map(function (s) {
          var o = c.sb[s.id];
          return '<div class="vs-sb" data-sb="' + s.id + '" style="--c:' + s.color + '"><div class="vs-sb-h"><span class="vs-sb-n">' + s.icon + ' ' + esc(s.name) + '</span>' +
            '<span class="vs-step"><button data-d="-1">−</button><b>' + o.n + '</b><button data-d="1">+</button></span></div>' +
            '<div class="vs-sb-r"><label>Süre <select data-t>' + TIMES.map(function (t) { return '<option value="' + t + '"' + (t === o.t ? ' selected' : '') + '>' + tLabel(t) + '</option>'; }).join('') + '</select></label>' +
            '<button class="vs-tp-btn" data-tp>' + (o.tp ? o.tp.length + ' konu' : 'Tüm konular') + ' ▾</button></div>' +
            '<div class="vs-tps"' + (openSb === s.id ? '' : ' hidden') + '>' + s.topics.map(function (t) {
              var on = !o.tp || o.tp.indexOf(t.id) >= 0;
              return '<button class="vs-tp' + (on ? ' on' : '') + '" data-tid="' + t.id + '">' + esc(t.title) + '</button>';
            }).join('') + '</div></div>';
        }).join('') +
        '<div class="vs-total">Toplam <b id="vsTotal">' + total + '</b> soru</div>' +
        '<button class="btn primary vs-start" id="vsStart">BAŞLA</button><p class="small vs-start-msg" id="vsStartMsg"></p></div>';
    } else {
      body = '<div class="card vs-setup"><h2>Düello Ayarları</h2>' + (c ? '<ul class="vs-sum">' + LGS.subjects.filter(function (s) { return c.sb[s.id] && c.sb[s.id].n > 0; }).map(function (s) {
        var o = c.sb[s.id];
        return '<li style="--c:' + s.color + '"><span>' + s.icon + ' ' + esc(s.name) + '</span><b>' + o.n + ' soru</b><small>' + tLabel(o.t) + ' / soru' + (o.tp ? ' · ' + o.tp.length + ' konu' : '') + '</small></li>';
      }).join('') + '</ul><div class="vs-total">Toplam <b>' + total + '</b> soru</div>' : '') +
        '<p class="vs-waitmsg">Oda kurucusu ayarları yapıyor. Başladığında 3-2-1 ile düello açılacak.</p></div>';
    }
    var mine = (host ? d.host : d.guest) || {}, theirs = (host ? d.guest : d.host) || {};
    var sel = '<div class="card vs-chs"><h2>Dövüşçünü Seç</h2><div class="vs-chgrid">' + CH_IDS.map(function (id) {
      var c = CH[id], me_ = mine.ch === id, op = theirs.ch === id;
      return '<button class="vs-chc' + (me_ ? ' me ' + (host ? 'b' : 'r') : '') + (op ? ' op ' + (host ? 'r' : 'b') : '') + '" data-ch="' + id + '"><img src="' + chImg(id) + '" alt="' + c.n + '" loading="lazy"><b>' + c.n + '</b><small>' + c.t + '</small>' +
        (me_ ? '<i class="tg ' + (host ? 'b' : 'r') + '">SEN</i>' : '') + (op ? '<i class="tg o ' + (host ? 'r' : 'b') + '">RAKİP</i>' : '') + '</button>';
    }).join('') + '</div></div>';
    app.innerHTML = '<div class="vs-page" id="vsWait" data-k="' + esc(key) + '">' + head + sel + body +
      '<a class="btn ghost vs-leave" href="#/vs">Odadan çık</a></div>';
    if (host) bindSetup(d);
    document.querySelector('.vs-chgrid').addEventListener('click', function (e) {
      var b = e.target.closest('[data-ch]'); if (!b) return;
      var id = b.getAttribute('data-ch');
      [].forEach.call(this.children, function (x) { x.classList.toggle('me', x === b); x.classList.toggle(host ? 'b' : 'r', x === b && true); });
      rpc('vs_char', { p_room: roomId, p_token: C.token(), p_ch: id }, function () {});
      if (navigator.vibrate) try { navigator.vibrate(15); } catch (er) {}
    });
  }
  function updateStart(d) {
    var b = document.getElementById('vsStart'), m = document.getElementById('vsStartMsg'); if (!b) return;
    var total = cfgCount(cfg);
    var chOk = d.host && d.host.ch && d.guest && d.guest.ch;
    var ok = !!d.guest && total >= 2 && chOk;
    b.disabled = !ok;
    m.textContent = !d.guest ? 'Başlamak için bir rakibin katılmasını bekle.' : !chOk ? 'İki taraf da dövüşçüsünü seçmeli.' : total < 2 ? 'En az 2 soru seç.' : total > 100 ? 'En fazla 100 soru.' : '';
    document.getElementById('vsTotal').textContent = total;
  }
  function pushCfg() {
    if (cfgDirty) clearTimeout(cfgDirty);
    cfgDirty = setTimeout(function () { rpc('vs_setup', { p_room: roomId, p_token: C.token(), p_cfg: cfg }); }, 500);
  }
  function bindSetup(d) {
    var box = document.querySelector('.vs-setup');
    updateStart(d);
    box.addEventListener('click', function (e) {
      var row = e.target.closest('[data-sb]'); if (!row) return;
      var sid = row.getAttribute('data-sb'), o = cfg.sb[sid], s = LGS.subjects.filter(function (x) { return x.id === sid; })[0];
      var st = e.target.closest('[data-d]');
      if (st) {
        o.n = Math.max(0, Math.min(30, o.n + +st.getAttribute('data-d')));
        row.querySelector('.vs-step b').textContent = o.n;
        pushCfg(); updateStart(cur); return;
      }
      if (e.target.closest('[data-tp]')) {
        var tps = row.querySelector('.vs-tps'); tps.hidden = !tps.hidden; openSb = tps.hidden ? null : sid; return;
      }
      var tb = e.target.closest('[data-tid]');
      if (tb) {
        var all = s.topics.map(function (t) { return t.id; });
        var sel = o.tp ? o.tp.slice() : all.slice(), tid = tb.getAttribute('data-tid'), k = sel.indexOf(tid);
        if (k >= 0) { if (sel.length === 1) { A.toast('En az bir konu seçili olmalı.'); return; } sel.splice(k, 1); } else sel.push(tid);
        o.tp = sel.length === all.length ? null : sel;
        tb.classList.toggle('on', k < 0);
        row.querySelector('[data-tp]').textContent = (o.tp ? o.tp.length + ' konu' : 'Tüm konular') + ' ▾';
        pushCfg();
      }
    });
    box.addEventListener('change', function (e) {
      var sel = e.target.closest('[data-t]'); if (!sel) return;
      var sid = e.target.closest('[data-sb]').getAttribute('data-sb');
      cfg.sb[sid].t = +sel.value; pushCfg();
    });
    document.getElementById('vsStart').addEventListener('click', function () {
      var b = this; b.disabled = true; b.textContent = 'Sorular hazırlanıyor…';
      buildQuestions(cfg, function (qs) {
        if (!qs || qs.length < 2) { b.textContent = 'BAŞLA'; b.disabled = false; A.toast('Soru yüklenemedi.'); return; }
        if (cfgDirty) clearTimeout(cfgDirty);
        rpc('vs_setup', { p_room: roomId, p_token: C.token(), p_cfg: cfg }, function () {
          rpc('vs_start', { p_room: roomId, p_token: C.token(), p_qs: qs }, function (err, r) {
            if (r !== 'ok') { b.textContent = 'BAŞLA'; b.disabled = false; A.toast(r === 'noguest' ? 'Rakip odadan çıktı.' : r === 'nochar' ? 'İki taraf da dövüşçü seçmeli.' : 'Başlatılamadı.'); }
          });
        });
      });
    });
  }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function ensureTopics(tids, cb) {
    var left = tids.length; if (!left) return cb();
    tids.forEach(function (tid) {
      var m = A.subjOf(tid);
      if (!m) { if (!--left) cb(); return; }
      A.loadTopic(m.s.id, tid, function () { if (!--left) cb(); });
    });
  }
  function buildQuestions(c, cb) {
    var need = [];
    LGS.subjects.forEach(function (s) {
      var o = c.sb[s.id]; if (!o || !o.n) return;
      (o.tp || s.topics.map(function (t) { return t.id; })).forEach(function (tid) { need.push(tid); });
    });
    ensureTopics(need, function () {
      var out = [];
      LGS.subjects.forEach(function (s) {
        var o = c.sb[s.id]; if (!o || !o.n) return;
        var pool = [];
        (o.tp || s.topics.map(function (t) { return t.id; })).forEach(function (tid) {
          var t = LGS.topics[tid]; if (!t) return;
          A.buildList(t).forEach(function (q) { if (q.past) return; pool.push({ tid: tid, key: q.key, a: q.a, t: o.t, sb: s.id }); });
        });
        out = out.concat(shuffle(pool).slice(0, o.n));
      });
      cb(shuffle(out));
    });
  }

  /* =========================================================
     OYUN
     ========================================================= */
  var G = null;  // istemci oyun durumu
  function sideOf(r) { return r === 'h' ? 'L' : 'R'; }
  function pl(r) { var x = r === 'h' ? cur.host : cur.guest; if (G && G.dbgCh && x) { x = JSON.parse(JSON.stringify(x)); x.ch = G.dbgCh[r]; } return x; }

  function gameState(d) {
    var st = d.st || {};
    if (!G) {
      G = { key: '', loaded: false, qi: -1, hpShown: { h: 100, g: 100 }, prevPh: null, revealed: -1, anim: null, mini: null, fx: [], efx: [], parts: [], shake: 0, text: null, avatars: {} };
      document.body.classList.add('vs-on');
      buildGameDom(d);
      var tids = []; (d.qs || []).forEach(function (q) { if (tids.indexOf(q.tid) < 0) tids.push(q.tid); });
      ensureTopics(tids, function () { G && (G.loaded = true, G.key = ''); });
      loop();
    }
    var key = st.ph + ':' + st.i + ':' + (st.ph === 'q' ? Object.keys(st.ans || {}).join('') : '') + (st.ph === 'pk' && st.mv != null ? ':m' : '');
    if (key === G.key) return;
    var oldPh = G.ph; G.key = key; G.ph = st.ph;
    if (oldPh !== st.ph) G.prevPh = oldPh;
    phase(d, st, oldPh);
  }

  function hpBar(r) {
    var p = pl(r) || {}, L = lvl(p), isMe = cur.role === r;
    return '<div class="hp ' + sideOf(r) + '"><div class="hp-who"><img class="hp-face" src="' + chImg(p.ch || 'fatih', 1) + '" alt="">' +
      '<div class="hp-nm">' + A.rankTag(L) + '<b>' + esc(p.name || '') + '</b><small>' + (CH[p.ch] ? CH[p.ch].n + ' · ' : '') + 'Sv ' + L + (isMe ? ' · SEN' : '') + '</small></div></div>' +
      '<div class="hp-bar"><i class="hp-d" id="hpd' + r + '"></i><i class="hp-f" id="hpf' + r + '"></i><span class="hp-v" id="hpv' + r + '">100</span></div></div>';
  }
  function buildGameDom(d) {
    cv = null;
    A.setCrumbs([{ href: '#/vs', text: 'VS Arena' }, { text: 'Düello' }]);
    app.innerHTML = '<div class="vs-game">' +
      '<div class="vs-hud">' + hpBar('h') + '<div class="vs-clock" id="vsClock">–</div>' + hpBar('g') + '</div>' +
      '<div class="vs-stage" id="vsStage"><canvas id="vsCv"></canvas><div class="vs-cap" id="vsCap"></div></div>' +
      '<div class="vs-q" id="vsQ"><p class="loading">Sorular yükleniyor…</p></div>' +
      '<div class="vs-ov" id="vsOv" hidden></div></div>';

  }
  function setHp(r, v, instant) {
    var f = document.getElementById('hpf' + r), dd = document.getElementById('hpd' + r), t = document.getElementById('hpv' + r);
    if (!f) return;
    v = Math.max(0, Math.min(100, v));
    f.style.width = v + '%'; f.classList.toggle('low', v < 30); f.classList.toggle('mid', v >= 30 && v < 70);
    t.textContent = Math.ceil(v);
    if (instant) dd.style.transition = 'none', dd.style.width = v + '%', dd.offsetWidth, dd.style.transition = '';
    else setTimeout(function () { dd.style.width = v + '%'; }, 450);
    G.hpShown[r] = v;
  }
  function ov(html, cls) {
    var o = document.getElementById('vsOv'); if (!o) return null;
    if (html == null) { o.hidden = true; o.innerHTML = ''; o.className = 'vs-ov'; return o; }
    o.hidden = false; o.className = 'vs-ov ' + (cls || ''); o.innerHTML = html; return o;
  }

  function qObj(i) {
    var q = cur.qs[i]; if (!q) return null;
    var t = LGS.topics[q.tid]; if (!t) return null;
    var it = A.buildList(t).filter(function (x) { return x.key === q.key; })[0];
    return it ? { it: it, meta: q } : null;
  }
  function renderQ(i) {
    var box = document.getElementById('vsQ'); if (!box) return;
    var o = qObj(i);
    if (!o) { box.innerHTML = '<p class="loading">Soru yükleniyor…</p>'; G.qi = -1; return; }
    var s = LGS.subjects.filter(function (x) { return x.id === o.meta.sb; })[0] || {};
    var tp = A.subjOf(o.meta.tid), q = o.it, body, ch;
    if (q.past) {
      body = '<img class="past" src="' + q.img + '" alt="Çıkmış soru">';
      ch = '<ul class="ch compact vs-ch">' + LET.map(function (L) { return '<li><button data-c="' + L + '"><b>' + L + ')</b><span class="vs-mk"></span></button></li>'; }).join('') + '</ul>';
    } else {
      body = '<div class="stem">' + A.fmt(q.q) + '</div>';
      ch = '<ul class="ch vs-ch">' + q.c.map(function (c, k) { return '<li><button data-c="' + LET[k] + '"><b>' + LET[k] + ')</b><span>' + A.fmt(c) + '</span><span class="vs-mk"></span></button></li>'; }).join('') + '</ul>';
    }
    box.innerHTML = '<div class="vs-qh"><span class="vs-qn">Soru ' + (i + 1) + '/' + cur.qs.length + '</span><span class="vs-qs" style="--c:' + (s.color || '#888') + '">' + (s.icon || '') + ' ' + esc(tp ? tp.t.title : '') + '</span></div>' +
      '<div class="vs-tbar"><i id="vsTbar"></i></div><article class="q vs-qa">' + body + ch + '<div class="vs-status" id="vsStatus"></div></article>';
    A.fitSvgs(box);
    G.qi = i; G.myPick = null;
    box.querySelector('.vs-ch').addEventListener('click', function (e) {
      var b = e.target.closest('button[data-c]'); if (!b || b.disabled) return;
      var st = cur.st;
      if (st.ph !== 'q' || st.i !== i || now() < st.s || G.myPick || (st.ans || {})[cur.role]) return;
      G.myPick = b.getAttribute('data-c');
      b.classList.add('mine', cur.role === 'h' ? 'pb' : 'pr');
      [].forEach.call(box.querySelectorAll('.vs-ch button'), function (x) { x.disabled = true; });
      status();
      if (navigator.vibrate) try { navigator.vibrate(12); } catch (er) {}
      rpc('vs_answer', { p_room: roomId, p_token: C.token(), p_i: i, p_c: G.myPick }, function (err, d) { if (d && d.st) { cur = d; gameState(d); } });
    });
  }
  function status() {
    var el = document.getElementById('vsStatus'); if (!el || !cur) return;
    var st = cur.st, ans = st.ans || {}, opp = cur.role === 'h' ? 'g' : 'h', mine = G.myPick || (ans[cur.role] && ans[cur.role].c);
    el.innerHTML = (mine ? '<span class="ok">✓ Cevabın kilitlendi</span>' : '<span>Cevabını seç</span>') +
      (ans[opp] ? '<span class="opp">⚡ Rakip cevapladı!</span>' : '<span class="muted">Rakip düşünüyor…</span>');
  }

  var MOVES = {
    l: [['punch', '🥊', 'Yumruk Kombosu'], ['kick', '🦵', 'Ön Tekme'], ['sweep', '🤼', 'Yere Serme']],
    h: [['spin', '🌪️', 'Döner Tekme'], ['knee', '💥', 'Uçan Diz'], ['slam', '🏋️', 'Kaldır Çarp']],
    f: [['dragon', '🐉', 'Ejder Aparkatı'], ['combo', '💀', 'Ölüm Kombosu'], ['quake', '🌋', 'Deprem Darbesi']]
  };

  function phase(d, st, oldPh) {
    if (G.dbg) return;
    var role = cur.role, opp = role === 'h' ? 'g' : 'h';
    if (st.ph === 'q') {
      if (G.anim && G.anim.done) G.anim = null;
      G.hold = null;
      document.getElementById('vsStage').classList.remove('big');
      if (oldPh !== 'q') { ov(null); setHp('h', st.hp.h, oldPh == null); setHp('g', st.hp.g, oldPh == null); }
      if (G.qi !== st.i && G.loaded) renderQ(st.i);
      if (G.qi === st.i) {
        var ans = st.ans || {};
        if (ans[role] && !G.myPick) { G.myPick = ans[role].c; var mb = document.querySelector('.vs-ch button[data-c="' + G.myPick + '"]'); if (mb) mb.classList.add('mine', role === 'h' ? 'pb' : 'pr'); [].forEach.call(document.querySelectorAll('.vs-ch button'), function (x) { x.disabled = true; }); }
        status();
      } else G.key = ''; // sorular yüklenince tekrar dene
      G.cdMode = (st.i === 0 || oldPh === 'an' || oldPh === 'pk' || oldPh == null) ? 'cd' : 'next';
    } else if (st.ph === 'rv') {
      if (G.qi !== st.i && G.loaded) renderQ(st.i);
      reveal(st);
    } else if (st.ph === 'pk') {
      setHp('h', st.hp.h); setHp('g', st.hp.g);
      var pk = st.pk, list = movesFor(pk.att, pk.tier), att = pk.att === role;
      var title = pk.tier === 'f' ? 'FATALITY' : pk.tier === 'h' ? 'AĞIR DARBE' : 'SALDIRI';
      var sub = pk.left ? (att ? 'Rakip kaçtı, hükmen kazandın! Bitirici hareketini seç.' : 'Düellodan ayrıldın.')
        : pk.tier === 'f' ? (att ? 'Kazandın! Bitirici hareketini seç.' : esc(pl(pk.att).name) + ' bitirici hareketini seçiyor…')
        : (att ? (pk.tier === 'h' ? 'Rakibin canı %30’un altında! Ağır hareketini seç.' : 'Vurdun! Hareketini seç.') : esc(pl(pk.att).name) + ' hareketini seçiyor…');
      if (att && st.mv == null) {
        var o = ov('<div class="pk-box ' + pk.tier + '"><div class="pk-t">' + title + '</div><p>' + sub + '</p><div class="pk-list">' +
          list.map(function (m, k) { return '<button data-m="' + k + '"><span>' + m[1] + '</span><b>' + m[2] + '</b></button>'; }).join('') +
          '</div><div class="pk-tm"><i id="pkT"></i></div></div>', 'pk');
        o.querySelector('.pk-list').addEventListener('click', function (e) {
          var b = e.target.closest('[data-m]'); if (!b) return;
          [].forEach.call(this.children, function (x) { x.disabled = true; x.classList.toggle('sel', x === b); });
          rpc('vs_move', { p_room: roomId, p_token: C.token(), p_m: +b.getAttribute('data-m') }, function (err, dd) { if (dd && dd.st) { cur = dd; gameState(dd); } });
        });
      } else {
        ov('<div class="pk-box wait ' + pk.tier + '"><div class="pk-t">' + title + '</div><p>' + (att ? 'Hareketin seçildi!' : sub) + '</p><div class="pk-tm"><i id="pkT"></i></div></div>', 'pk');
      }
    } else if (st.ph === 'an') {
      ov(null);
      var tl_ = buildTL(st.pk.att, st.pk.tier, st.mv);
      G.anim = { name: tl_.name, label: tl_.label, att: st.pk.att, t0: st.as, as: st.as, tl: tl_, fired: {}, tier: st.pk.tier, started: false };
      G.efx = [];
      G.hold = null;
      G.parts = []; G.text = null; G.quake = null;
      document.getElementById('vsStage').classList.add('big');
    } else if (st.ph === 'end') {
      document.getElementById('vsStage').classList.remove('big');
      setHp('h', st.hp.h); setHp('g', st.hp.g);
      var won = st.win === role, draw = !st.win;
      var why = st.why === 'left' ? (won ? 'Rakip düellodan ayrıldı.' : 'Düellodan ayrıldın.') : st.why === 'draw' ? 'Canlar eşit kaldı.' : won ? 'Rakibini yere serdin!' : 'Bu sefer yenildin. Rövanş al!';
      ov('<div class="end-box ' + (draw ? 'draw' : won ? 'win' : 'lose') + '"><div class="end-t">' + (draw ? 'BERABERE' : won ? 'ZAFER' : 'YENİLGİ') + '</div>' +
        '<p>' + why + '</p><div class="end-hp"><span class="b">' + esc(cur.host.name) + ' ' + Math.ceil(st.hp.h) + '</span><span class="r">' + esc(cur.guest.name) + ' ' + Math.ceil(st.hp.g) + '</span></div>' +
        '<div class="end-btns"><a class="btn primary" href="#/vs">Arenaya dön</a></div></div>', 'end');
      if (navigator.vibrate) try { navigator.vibrate(won ? [80, 50, 160] : 200); } catch (e) {}
    }
  }

  function reveal(st) {
    var res = st.res || {}, box = document.getElementById('vsQ');
    if (G.revealed === res.i) return;
    G.revealed = res.i;
    if (box) {
      [].forEach.call(box.querySelectorAll('.vs-ch button'), function (b) {
        var c = b.getAttribute('data-c'), hb = res.hc === c, gb = res.gc === c;
        b.disabled = true; b.classList.remove('mine', 'pb', 'pr');
        if (hb && gb) b.classList.add('pbr'); else if (hb) b.classList.add('pb'); else if (gb) b.classList.add('pr');
        if (c === res.a) b.classList.add('cor');
        var mk = b.querySelector('.vs-mk');
        if (mk) mk.innerHTML = (hb ? '<i class="b">' + esc(cur.host.name) + '</i>' : '') + (gb ? '<i class="r">' + esc(cur.guest.name) + '</i>' : '');
      });
      var el = document.getElementById('vsStatus');
      var tm = function (t) { return t == null ? 'cevap yok' : (t / 1000).toFixed(1) + ' sn'; };
      var msg = res.kind === 'crit' ? '<b class="crit">KRİTİK VURUŞ!</b> ' + esc(pl(res.hit === 'h' ? 'g' : 'h').name) + ' bildi, ' + esc(pl(res.hit).name) + ' bilemedi.'
        : res.kind === 'fast' ? '<b class="fast">DAHA HIZLI!</b> İkiniz de bildiniz, ' + esc(pl(res.hit === 'h' ? 'g' : 'h').name) + ' önce cevapladı.'
        : (res.hok && res.gok) ? '<b>Aynı anda!</b> Hasar yok.' : '<b>İkiniz de bilemediniz.</b> Hasar yok.';
      if (el) el.innerHTML = '<div class="rv-msg">' + msg + '</div><div class="rv-t"><span class="b">' + esc(cur.host.name) + ': ' + tm(res.ht) + '</span><span class="r">' + esc(cur.guest.name) + ': ' + tm(res.gt) + '</span></div>';
    }
    if (res.hit) {
      var att = res.hit === 'h' ? 'g' : 'h';
      setTimeout(function () { if (G) { setHp(res.hit, st.hp[res.hit]); var hb = document.querySelector('.hp.' + sideOf(res.hit)); if (hb) { hb.classList.remove('hit'); void hb.offsetWidth; hb.classList.add('hit'); } } }, 800);
      if (navigator.vibrate) setTimeout(function () { try { navigator.vibrate(res.kind === 'crit' ? [30, 20, 60] : 25); } catch (e) {} }, 800);
    }
  }

  /* ---------- her kare: saat, geri sayım, sahne ---------- */
  function loop() {
    raf = requestAnimationFrame(loop);
    if (!G || !cur) return;
    var st = cur.st || {}, n = now();
    var clock = document.getElementById('vsClock');
    if (st.ph === 'q') {
      var left = st.e - Math.max(n, st.s), tot = st.e - st.s;
      if (clock) clock.textContent = Math.max(0, Math.ceil(left / 1000));
      if (clock) clock.classList.toggle('warn', left < 5000 && n >= st.s);
      var tb = document.getElementById('vsTbar'); if (tb) tb.style.width = Math.max(0, Math.min(100, left * 100 / tot)) + '%';
      if (n < st.s) {
        var r = st.s - n;
        if (G.cdMode === 'cd' && r <= 3400) {
          var k = Math.ceil(r / 1000), txt = k >= 1 ? String(Math.min(3, k)) : 'SAVAŞ!';
          if (r < 400) txt = 'SAVAŞ!';
          if (G.cdTxt !== txt) { G.cdTxt = txt; ov('<div class="cd-n' + (txt.length > 1 ? ' go' : '') + '">' + txt + '</div>', 'cd'); if (navigator.vibrate) try { navigator.vibrate(txt.length > 1 ? 60 : 15); } catch (e) {} }
        } else if (G.cdMode === 'cd') {
          if (G.cdTxt !== 'ready') { G.cdTxt = 'ready'; ov('<div class="cd-r">HAZIR OL</div>', 'cd'); }
        } else if (G.cdTxt !== 'next' + st.i) { G.cdTxt = 'next' + st.i; ov('<div class="cd-r">SORU ' + (st.i + 1) + '</div>', 'cd'); }
        if (G.qi === st.i) [].forEach.call(document.querySelectorAll('.vs-ch button'), function (x) { x.disabled = true; });
      } else if (G.cdTxt) {
        G.cdTxt = null; ov(null);
        if (G.qi === st.i && !G.myPick) [].forEach.call(document.querySelectorAll('.vs-ch button'), function (x) { x.disabled = false; });
      }
    } else if (clock) { clock.textContent = st.ph === 'end' ? 'K.O.' : '–'; clock.classList.remove('warn'); }
    if (st.ph === 'pk') { var pt = document.getElementById('pkT'); if (pt) pt.style.width = Math.max(0, Math.min(100, (st.u - n) / 90)) + '%'; }
    draw(n);
  }

  /* =========================================================
     ÇÖP ADAM DÖVÜŞÇÜLER (kafada avatar)
     ========================================================= */
  var IDLE = { x: 0, y: 0, rot: 0, sx: 1, tor: 6, nk: 0, ua1: 40, la1: 95, ua2: 22, la2: 110, th1: 18, sh1: -14, th2: -16, sh2: -6 };
  var LIE = { y: 44, rot: 90, tor: 0, nk: 0, ua1: 150, la1: 0, ua2: 170, la2: 0, th1: 4, sh1: 0, th2: -4, sh2: 0 };
  var UP = { y: 16, rot: 30, th1: 80, sh1: -120, th2: 30, sh2: -60, ua1: 60, la1: 40 };
  var WIN = { ua1: 168, la1: 8, ua2: 165, la2: 10, tor: -4, nk: -10 };
  function P(o) { var r = {}; for (var k in IDLE) r[k] = IDLE[k]; for (var j in o) r[j] = o[j]; return r; }
  function M(a, b) { var r = {}; for (var k in a) r[k] = a[k]; for (var j in b) r[j] = b[j]; return r; }
  var TL = {
    qjab: function () { return { d: 1000, A: [[0, {}], [200, { x: 88, tor: 14 }], [280, { x: 94, tor: 20, ua1: 92, la1: 0 }], [420, { x: 88 }], [900, { x: 0 }]], D: [[0, {}], [280, {}], [330, { tor: -22, nk: -18, x: -10 }], [900, { x: 0 }]], fx: [[280, 'hit', 'head']] }; },
    qcrit: function () { return { d: 1300, A: [[0, {}], [240, { x: 80, th1: 40, sh1: -80 }], [360, { x: 84, tor: -18, th1: 98, sh1: 0, ua2: 70 }], [560, { x: 82, th1: 50, sh1: -70 }], [1200, { x: 0 }]], D: [[0, {}], [360, {}], [420, { x: -34, tor: 28, nk: 20, ua1: -10, ua2: -20, th2: -30 }], [700, { x: -40, tor: 12 }], [1250, { x: 0 }]], fx: [[360, 'hit', 'body', { big: 1 }], [360, 'shake', 5]] }; },
    punch: function () {
      return { d: 2500, A: [[0, {}], [280, { x: 92, tor: 12 }], [360, { x: 95, tor: 18, ua1: 92, la1: 0 }], [480, { x: 92, tor: 10 }], [600, { x: 96, tor: 22, ua2: 95, la2: 0, ua1: 40 }], [760, { x: 92 }], [900, { x: 98, tor: 18, ua1: 120, la1: -10, y: -4 }], [1150, { x: 92 }], [2000, { x: 0 }]],
        D: [[0, {}], [360, {}], [420, { tor: -18, nk: -15, x: -6 }], [600, { tor: -5, x: -6 }], [660, { tor: -25, nk: -20, x: -16 }], [900, { x: -16, tor: -8 }], [960, { tor: -36, nk: -28, x: -36, ua1: 10, ua2: -10 }], [1400, { x: -30, tor: -10 }], [2300, { x: 0 }]],
        fx: [[360, 'hit', 'head'], [600, 'hit', 'head'], [900, 'hit', 'head', { big: 1 }], [900, 'shake', 5], [900, 'blood', { n: 5 }]] };
    },
    kick: function () {
      return { d: 2500, A: [[0, {}], [300, { x: 82, tor: -5, th1: 40, sh1: -80 }], [420, { x: 86, tor: -18, th1: 98, sh1: 0, ua1: 20, ua2: 60 }], [620, { x: 84, th1: 50, sh1: -70, tor: -5 }], [800, { x: 80 }], [1700, { x: 0 }]],
        D: [[0, {}], [420, {}], [480, { x: -30, tor: 30, nk: 22, ua1: -20, ua2: -30, th1: 5, th2: -30 }], [700, { x: -58, tor: 22 }], [1200, { x: -52, tor: 5 }], [2300, { x: 0 }]],
        fx: [[420, 'hit', 'body', { big: 1 }], [420, 'shake', 6], [420, 'blood', { n: 4 }]] };
    },
    sweep: function () {
      var crouch = { y: 28, tor: 22, th1: 80, sh1: -150, th2: -60, sh2: -30, ua1: 60, la1: 80 };
      return { d: 2500, A: [[0, {}], [300, M(crouch, { x: 80 })], [480, M(crouch, { x: 86, tor: 32, th2: 88, sh2: 0, th1: 90, sh1: -160 })], [720, M(crouch, { x: 84 })], [950, { x: 80 }], [1800, { x: 0 }]],
        D: [[0, {}], [480, {}], [560, { y: -10, rot: 40, th1: 70, th2: 60, sh1: 0, sh2: 0 }], [780, M(LIE, { x: -10 })], [1500, M(LIE, { x: -10 })], [1900, M(UP, { x: -8 })], [2350, { x: 0 }]],
        fx: [[480, 'hit', 'foot'], [780, 'shake', 7], [780, 'dust']] };
    },
    spin: function () {
      return { d: 3200, A: [[0, {}], [300, { x: 72 }], [420, { x: 76, sx: -1, th2: 30, tor: -10, y: -4 }], [560, { x: 80, sx: 1, th1: 108, sh1: 0, tor: -26, ua1: -30, ua2: 120, la2: 30, y: -8 }], [780, { x: 80, th1: 60, sh1: -60 }], [1050, { x: 74 }], [2100, { x: 0 }]],
        D: [[0, {}], [560, {}], [620, { x: -40, y: -32, rot: 50, nk: -30, ua1: 160, ua2: 140, la1: 0, la2: 0 }], [900, { x: -90, y: 10, rot: 85 }], [1020, M(LIE, { x: -96 })], [2300, M(LIE, { x: -96 })], [2750, M(UP, { x: -45 })], [3150, { x: 0 }]],
        fx: [[560, 'hit', 'head', { big: 1 }], [560, 'shake', 9], [560, 'flash'], [560, 'blood', { n: 10 }], [1020, 'dust'], [1020, 'shake', 5]] };
    },
    knee: function () {
      return { d: 3200, A: [[0, {}], [250, { x: 50, y: 8, th1: 30, sh1: -60, tor: 14 }], [460, { x: 86, y: -36, tor: -10, th1: 125, sh1: -150, th2: -30, sh2: -60, ua1: 150, la1: 30, ua2: 150, la2: 30 }], [660, { x: 80, y: -12 }], [820, { x: 78, y: 0 }], [1900, { x: 0 }]],
        D: [[0, {}], [460, {}], [510, { x: -22, tor: -48, nk: -40, y: -6, ua1: 120, ua2: 100 }], [820, { x: -62, y: 20, rot: 62 }], [1000, M(LIE, { x: -66 })], [2300, M(LIE, { x: -66 })], [2750, M(UP, { x: -24 })], [3150, { x: 0 }]],
        fx: [[460, 'hit', 'head', { big: 1 }], [460, 'shake', 9], [460, 'blood', { n: 12 }], [1000, 'dust'], [1000, 'shake', 4]] };
    },
    slam: function () {
      return { d: 3250, A: [[0, {}], [320, { x: 100, tor: 16, ua1: 86, la1: 0, ua2: 86, la2: 0 }], [750, { x: 100, y: 6, tor: -12, ua1: 172, la1: 0, ua2: 172, la2: 0, th1: 30, sh1: -30 }], [1100, { x: 100, y: 12, tor: 45, ua1: 100, la1: 0, ua2: 100, la2: 0, th1: 50, sh1: -60 }], [1550, { x: 96 }], [2300, { x: 0 }]],
        D: [[0, {}], [320, {}], [420, { tor: 10, x: 4 }], [750, { x: 42, y: -78, rot: 185, ua1: 120, ua2: 140, th1: 30, th2: -10 }], [1100, M(LIE, { x: -4 })], [2350, M(LIE, { x: -4 })], [2800, M(UP, { x: -2 })], [3200, { x: 0 }]],
        fx: [[1100, 'shake', 12], [1100, 'hit', 'body', { big: 1 }], [1100, 'dust'], [1100, 'blood', { n: 10 }], [1100, 'flash']] };
    },
    dragon: function () {
      var crouch = { x: 85, y: 22, tor: 26, th1: 72, sh1: -125, th2: -50, sh2: -50, ua1: 20, la1: 120 };
      return { d: 5200, A: [[0, {}], [420, crouch], [720, { x: 92, y: -42, tor: -10, ua1: 178, la1: 0, ua2: 30, th1: 20, sh1: -40, th2: -20 }], [1000, { x: 92, y: -20, ua1: 170 }], [1350, { x: 92, y: 0, tor: 5, ua1: 50 }], [2600, M(WIN, { x: 92 })], [5200, M(WIN, { x: 92 })]],
        D: [[0, {}], [720, {}], [780, { y: -60, rot: 150, x: -10, nk: -40, ua1: 170, ua2: 160 }], [1150, { y: -150, rot: 360, x: -32, ua1: 170, ua2: 160 }], [1650, { y: -60, rot: 540, x: -58 }], [1950, M(LIE, { rot: 630, x: -72 })], [5200, M(LIE, { rot: 630, x: -72 })]],
        fx: [[720, 'hit', 'head', { big: 1 }], [720, 'blood', { n: 34, up: 1 }], [720, 'shake', 11], [720, 'flash'], [1150, 'blood', { n: 12 }], [1950, 'shake', 13], [1950, 'blood', { n: 22, pool: 1 }], [1950, 'dust'], [2300, 'text', 'FATALITY']] };
    },
    combo: function () {
      var A_ = [[0, {}], [300, { x: 92, tor: 12 }]], D_ = [[0, {}], [380, {}]], fx = [];
      for (var k = 0; k < 6; k++) {
        var t = 400 + k * 150, f = k % 2 === 0;
        A_.push([t, f ? { x: 95 + k, tor: 20, ua1: 92 + (k % 3) * 8, la1: 0 } : { x: 95 + k, tor: 22, ua2: 95, la2: 0, ua1: 40 }]);
        A_.push([t + 75, { x: 92 + k, tor: 12 }]);
        D_.push([t + 30, { tor: -20 - k * 2, nk: -16, x: -4 - k * 3 }]); D_.push([t + 110, { tor: -8, x: -4 - k * 3 }]);
        fx.push([t, 'hit', 'head', { big: k === 5 ? 1 : 0 }]); fx.push([t, 'blood', { n: 5 }]);
      }
      A_.push([1400, { x: 90, sx: -1, tor: -10 }], [1560, { x: 92, sx: 1, th1: 110, sh1: 0, tor: -26, y: -8, ua2: 120 }], [1800, { x: 90, th1: 50, sh1: -60 }], [2700, M(WIN, { x: 90 })], [5200, M(WIN, { x: 90 })]);
      D_.push([1560, { x: -20, tor: -10 }], [1620, { x: -62, y: -40, rot: 72, nk: -30 }], [2000, M(LIE, { x: -116 })], [5200, M(LIE, { x: -116 })]);
      fx.push([1560, 'hit', 'head', { big: 1 }], [1560, 'blood', { n: 30 }], [1560, 'shake', 12], [1560, 'flash'], [2000, 'shake', 8], [2000, 'blood', { n: 16, pool: 1 }], [2000, 'dust'], [2400, 'text', 'FATALITY']);
      return { d: 5200, A: A_, D: D_, fx: fx };
    },
    quake: function () {
      return { d: 5200, A: [[0, {}], [320, { y: 22, tor: 20, th1: 72, sh1: -125, th2: -50, sh2: -60 }], [800, { x: 60, y: -150, tor: 0, th1: 60, sh1: -120, th2: -20, sh2: -90, ua1: 165, la1: 0, ua2: 165, la2: 0 }], [1150, { x: 138, y: -16, tor: 45, ua1: 120, la1: 0, ua2: 120, la2: 0, th1: 40, sh1: -80, th2: -10, sh2: -60 }], [1320, { x: 138, y: 22, tor: 50, th1: 75, sh1: -130, th2: -55, sh2: -60, ua1: 100, ua2: 100 }], [1900, { x: 138, y: 0 }], [2600, M(WIN, { x: 138 })], [5200, M(WIN, { x: 138 })]],
        D: [[0, {}], [700, { nk: -35, tor: -12, ua1: 150, la1: 40, ua2: 140, la2: 40 }], [1150, { nk: -35, tor: -12, ua1: 150, ua2: 140 }], [1200, { y: 14, tor: 34, nk: 10 }], [1300, M(LIE, { x: -14 })], [5200, M(LIE, { x: -14 })]],
        fx: [[1150, 'hit', 'head', { big: 1 }], [1150, 'shake', 18], [1150, 'flash'], [1150, 'blood', { n: 46 }], [1150, 'quake'], [1300, 'dust'], [1300, 'blood', { n: 18, pool: 1 }], [2100, 'text', 'FATALITY']] };
    }
  };
  /* ---------- karaktere özel hareketler: 6 karakter × 3 kademe × 3 hareket = 54 ---------- */
  var AUR = { fatih: '#f5c542', yavuz: '#ff3b3b', alparslan: '#2dd4bf', metehan: '#60a5fa', barbaros: '#38bdf8', osman: '#4ade80' };
  var CMV = {
    fatih: {
      l: [['punch', '👑', 'Sultan Kombosu', {}], ['shot', '💣', 'Şahi Topu', { p: 'ball', boom: '#ff8a1f' }], ['palm', '🔥', 'Kuşatma İtişi', { boom: '#ff6a00' }]],
      h: [['shotH', '🧨', 'Büyük Top Atışı', { p: 'ball', boom: '#ff7a00' }], ['charge', '🏰', 'Surları Yıkış', {}], ['spin', '🌀', 'Fetih Döneri', { slash: '#f5c542' }]],
      f: [['meteor', '☄️', 'Topkapı Bombardımanı', { p: 'ball', boom: '#ff7a00' }], ['pillar', '🔥', 'Rum Ateşi', { c: '#ff5a00' }], ['dragon', '🌙', 'Fetih Aparkatı', {}]]
    },
    yavuz: {
      l: [['elbow', '💪', 'Yavuz Dirseği', {}], ['headbutt', '🗿', 'Kudret Kafası', {}], ['kick', '🦵', 'Mercidabık Tekmesi', { slash: '#ff3b3b' }]],
      h: [['throwH', '🌪️', 'Ridaniye Fırlatışı', {}], ['barrage', '⚡', 'Kudret Saldırısı', {}], ['knee', '💥', 'Yavuz Dizi', {}]],
      f: [['combo', '💀', 'Hükümdar Kombosu', {}], ['slash', '⚔️', 'Kılıç Hükmü', { c: '#ff3b3b' }], ['tornado', '🏜️', 'Çöl Kasırgası', { c: '#d9b26b' }]]
    },
    alparslan: {
      l: [['shot', '🏹', 'Ok Atışı', { p: 'arrow', boom: '#2dd4bf' }], ['sweep', '🐎', 'Bozkır Çelmesi', {}], ['upper', '🦁', 'Arslan Pençesi', { claw: '#2dd4bf' }]],
      h: [['shotH', '🎯', 'Ok Yağdırışı', { p: 'arrow', n: 5, boom: '#2dd4bf' }], ['dropkick', '🦅', 'Arslan Atılışı', {}], ['spin', '🐺', 'Bozkurt Döneri', { slash: '#2dd4bf' }]],
      f: [['wolf', '🐺', 'Bozkurt Pençesi', { c: '#7de8dc' }], ['meteor', '🏹', 'Malazgirt Ok Yağmuru', { p: 'arrow', boom: '#2dd4bf' }], ['ghosts', '🐎', 'Selçuklu Akını', { c: '#2dd4bf' }]]
    },
    metehan: {
      l: [['shot', '⚡', 'Gök Şimşeği', { p: 'bolt', boom: '#93c5fd' }], ['stomp', '🦶', 'Hun Ezmesi', {}], ['punch', '👊', 'Kağan Yumrukları', {}]],
      h: [['quakeH', '🌩️', 'Tengri Gürlemesi', { sky: 1 }], ['slam', '🏋️', 'Kağan Kaldırışı', {}], ['charge', '🐎', 'Atlı Hücum', {}]],
      f: [['meteor', '🌩️', 'Tengri’nin Gazabı', { p: 'bolt', boom: '#93c5fd' }], ['ghosts', '🏇', 'Hun Süvarileri', { c: '#93c5fd' }], ['quake', '🌋', 'Bozkır Depremi', {}]]
    },
    barbaros: {
      l: [['shot', '🌊', 'Dalga Yumruğu', { p: 'water', boom: '#38bdf8' }], ['palm', '⚓', 'Çapa Savuruşu', { boom: '#38bdf8', chain: 1 }], ['kick', '🦵', 'Güverte Tekmesi', {}]],
      h: [['shotH', '🌊', 'Fırtına Dalgası', { p: 'water', boom: '#38bdf8' }], ['throwH', '⛓️', 'Kancalı Fırlatma', { chain: 1 }], ['quakeH', '⚓', 'Gemi Çapası', { anchor: 1 }]],
      f: [['tidal', '🌊', 'Preveze Dalgası', { c: '#38bdf8' }], ['meteor', '⚓', 'Dev Çapa Düşüşü', { p: 'anchor', n: 1, boom: '#38bdf8' }], ['tornado', '🌀', 'Akdeniz Girdabı', { c: '#38bdf8' }]]
    },
    osman: {
      l: [['upper', '🌿', 'Söğüt Aparkatı', { claw: '#4ade80' }], ['elbow', '🛡️', 'Kayı Dirseği', {}], ['palm', '🍃', 'Ertuğrul İtişi', { boom: '#4ade80' }]],
      h: [['barrage', '⚔️', 'Kayı Hücumu', {}], ['dropkick', '🦅', 'Uçan Gazi', {}], ['knee', '💥', 'Söğüt Dizi', {}]],
      f: [['tree', '🌳', 'Rüyadaki Çınar', { c: '#4ade80' }], ['dragon', '☀️', 'Kuruluş Aparkatı', {}], ['combo', '💀', 'Gazi Kombosu', {}]]
    }
  };
  function movesFor(att, tier) { var c = (pl(att) || {}).ch; return (CMV[c] || CMV.fatih)[tier]; }
  function buildTL(att, tier, mv) {
    var c = (pl(att) || {}).ch || 'fatih', m = (CMV[c] || CMV.fatih)[tier][mv] || CMV.fatih[tier][0], o = m[3] || {};
    var col = o.c || AUR[c] || '#f5c542';
    var tl = TPL[m[0]] ? TPL[m[0]](o, col) : TL[m[0]]();
    tl.fx = tl.fx.slice();
    tl.fx.unshift([0, 'efx', 'aura', { c: AUR[c], d: Math.min(tl.d - 400, tier === 'f' ? 2600 : 1500) }]);
    if (o.slash) tl.fx.push([tl.fx.filter(function (e) { return e[1] === 'hit'; }).map(function (e) { return e[0]; })[0] || 500, 'efx', 'slash', { c: o.slash, d: 320 }]);
    tl.name = m[0]; tl.label = m[1] + ' ' + m[2];
    return tl;
  }
  var REC = function (D, t, x) { D.push([t, M(LIE, { x: x })], [t + 450, M(UP, { x: x * 0.5 })], [t + 850, { x: 0 }]); };
  var TPL = {
    shot: function (o) {
      return { d: 2600, A: [[0, {}], [320, { tor: -10, ua1: 150, la1: 40, ua2: 40 }], [520, { x: 10, tor: 18, ua1: 92, la1: 0 }], [900, { x: 10, tor: 8 }], [1800, { x: 0 }]],
        D: [[0, {}], [880, {}], [940, { x: -34, tor: -30, nk: -22, ua1: -10, ua2: -20 }], [1300, { x: -52, tor: -10 }], [2450, { x: 0 }]],
        fx: [[520, 'efx', 'proj', { p: o.p, d: 380, n: o.n || 1 }], [900, 'efx', 'boom', { c: o.boom, d: 450 }], [900, 'hit', 'body', { big: 1 }], [900, 'shake', 6], [900, 'blood', { n: 5 }]] };
    },
    elbow: function () {
      return { d: 2500, A: [[0, {}], [260, { x: 90, tor: 22, ua1: 96, la1: 165 }], [340, { x: 96, tor: 26, ua1: 100, la1: 165 }], [520, { x: 92, tor: 5 }], [640, { x: 94, tor: -14, ua2: 95, la2: 10, ua1: 30 }], [760, { x: 96, tor: -20, ua2: 100, la2: 0 }], [1000, { x: 92 }], [1800, { x: 0 }]],
        D: [[0, {}], [340, {}], [390, { tor: -26, nk: -24, x: -10 }], [600, { tor: -6, x: -10 }], [760, {}], [810, { tor: -34, nk: -30, x: -40, ua1: 10 }], [1300, { x: -36, tor: -8 }], [2350, { x: 0 }]],
        fx: [[340, 'hit', 'head'], [340, 'blood', { n: 3 }], [760, 'hit', 'head', { big: 1 }], [760, 'blood', { n: 6 }], [760, 'shake', 6]] };
    },
    headbutt: function () {
      return { d: 2600, A: [[0, {}], [300, { x: 98, ua1: 75, la1: 20, ua2: 80, la2: 20 }], [520, { x: 98, tor: -16, nk: -28, ua1: 75, la1: 20, ua2: 80, la2: 20 }], [640, { x: 100, tor: 26, nk: 30, ua1: 75, la1: 20, ua2: 80, la2: 20 }], [820, { x: 98, tor: -16, nk: -28, ua1: 75, la1: 20, ua2: 80, la2: 20 }], [940, { x: 100, tor: 28, nk: 32, ua1: 75, la1: 20, ua2: 80, la2: 20 }], [1150, { x: 96 }], [1900, { x: 0 }]],
        D: [[0, {}], [640, {}], [680, { tor: -30, nk: -34 }], [880, { tor: -5 }], [940, {}], [990, { tor: -38, nk: -36, x: -46, ua1: 20, ua2: -10 }], [1400, { x: -40, tor: -10 }], [2450, { x: 0 }]],
        fx: [[640, 'hit', 'head'], [640, 'blood', { n: 5 }], [940, 'hit', 'head', { big: 1 }], [940, 'blood', { n: 8 }], [940, 'shake', 7]] };
    },
    palm: function (o) {
      var fx = [[480, 'hit', 'body', { big: 1 }], [480, 'efx', 'boom', { c: o.boom, d: 420 }], [480, 'shake', 7], [480, 'blood', { n: 3 }], [700, 'dust']];
      if (o.chain) fx.unshift([200, 'efx', 'chain', { d: 900 }]);
      return { d: 2600, A: [[0, {}], [300, { x: 70, tor: -6, ua1: 60, la1: 120, ua2: 60, la2: 120 }], [480, { x: 90, tor: 20, ua1: 90, la1: 0, ua2: 92, la2: 0 }], [900, { x: 88, tor: 12 }], [1800, { x: 0 }]],
        D: [[0, {}], [480, {}], [540, { x: -60, tor: -22, y: -8, ua1: -20, ua2: -30 }], [950, { x: -110, tor: -6 }], [1500, { x: -100 }], [2450, { x: 0 }]], fx: fx };
    },
    upper: function (o) {
      return { d: 2600, A: [[0, {}], [280, { x: 88, y: 12, tor: 22, ua1: 30, la1: 120 }], [440, { x: 92, y: -10, tor: -8, ua1: 170, la1: 10 }], [800, { x: 90, tor: 4 }], [1800, { x: 0 }]],
        D: [[0, {}], [440, {}], [480, { y: -34, rot: 24, x: -22, nk: -30, ua1: 150, ua2: 130 }], [780, { x: -40, y: 0, rot: 8 }], [1200, { x: -40 }], [2450, { x: 0 }]],
        fx: [[440, 'hit', 'head', { big: 1 }], [440, 'efx', 'claw', { c: o.claw, d: 420 }], [440, 'blood', { n: 7, up: 1 }], [440, 'shake', 6]] };
    },
    stomp: function () {
      return { d: 2600, A: [[0, {}], [300, { x: 60, y: -54, th1: 90, sh1: -90, th2: 20, sh2: -80 }], [520, { x: 86, y: -8, th1: 30, sh1: -10, th2: -30, sh2: -20, ua1: 120, ua2: 120 }], [800, { x: 84, y: 0 }], [1800, { x: 0 }]],
        D: [[0, {}], [520, {}], [560, { y: 18, tor: 40, nk: 34, th1: 60, sh1: -100, th2: -50, sh2: -70 }], [1300, { y: 10, tor: 20, x: -6 }], [2450, { x: 0 }]],
        fx: [[520, 'hit', 'head', { big: 1 }], [520, 'shake', 9], [520, 'dust'], [520, 'efx', 'shock', { c: '#cbd5e1', d: 500 }], [520, 'blood', { n: 6 }]] };
    },
    charge: function () {
      var D = [[0, {}], [650, {}], [700, { x: -30, tor: -30, y: -10, ua1: 150, ua2: 140 }], [1000, { x: -110, y: -16, rot: 40 }]];
      REC(D, 1150, -120); D.push([3300, { x: 0 }]);
      return { d: 3300, A: [[0, {}], [300, { x: 20, tor: 32, ua1: -20, la1: 60 }], [650, { x: 92, tor: 40, y: 4, ua1: -20 }], [1000, { x: 170, tor: 40, y: 4 }], [1150, { x: 175, tor: 8 }], [2100, { x: 0 }]],
        D: D, fx: [[650, 'hit', 'body', { big: 1 }], [650, 'shake', 9], [650, 'blood', { n: 6 }], [1150, 'shake', 8], [1150, 'dust'], [1150, 'blood', { n: 6, pool: 1 }]] };
    },
    barrage: function () {
      var A_ = [[0, {}], [260, { x: 92, tor: 12 }]], D_ = [[0, {}], [330, {}]], fx = [];
      for (var k = 0; k < 8; k++) {
        var t = 340 + k * 110, f = k % 2 === 0;
        A_.push([t, f ? { x: 95, tor: 22, ua1: 92 + (k % 3) * 10, la1: 0 } : { x: 95, tor: 24, ua2: 92 + (k % 3) * 8, la2: 0, ua1: 30 }], [t + 55, { x: 93, tor: 12 }]);
        D_.push([t + 20, { tor: -16 - k * 2, nk: -14, x: -2 - k * 2 }], [t + 80, { tor: -6, x: -2 - k * 2 }]);
        fx.push([t, 'hit', k % 2 ? 'body' : 'head'], [t, 'blood', { n: 2 }]);
      }
      A_.push([1300, { x: 90, th1: 40, sh1: -80 }], [1420, { x: 94, tor: -20, th1: 100, sh1: 0 }], [1650, { x: 90 }], [2300, { x: 0 }]);
      D_.push([1420, { x: -18 }], [1470, { x: -50, y: -24, rot: 40 }]); REC(D_, 1750, -90); D_.push([3300, { x: 0 }]);
      fx.push([1420, 'hit', 'body', { big: 1 }], [1420, 'shake', 10], [1420, 'flash'], [1420, 'blood', { n: 10 }], [1750, 'dust']);
      return { d: 3300, A: A_, D: D_, fx: fx };
    },
    throwH: function (o) {
      var D = [[0, {}], [320, {}], [400, { x: 6, tor: 10, ua1: 120 }], [700, { x: 60, y: -60, rot: -120, ua1: 160, ua2: 150 }], [900, { x: 30, y: -90, rot: -220 }], [1150, { x: -90, y: -30, rot: -300 }]];
      REC(D, 1300, -110); D.push([3300, { x: 0 }]);
      var fx = [[700, 'shake', 4], [1300, 'shake', 12], [1300, 'hit', 'body', { big: 1 }], [1300, 'dust'], [1300, 'blood', { n: 12, pool: 1 }], [1300, 'efx', 'shock', { c: '#e5e7eb', d: 500 }]];
      if (o.chain) fx.unshift([80, 'efx', 'chain', { d: 1100 }]);
      return { d: 3300, A: [[0, {}], [320, { x: 98, ua1: 85, la1: 10, ua2: 85, la2: 10 }], [700, { x: 98, sx: -1, tor: -20, ua1: 150, la1: 0, ua2: 150, la2: 0 }], [1000, { x: 98, sx: 1, tor: 30, ua1: 100, ua2: 110 }], [1300, { x: 96, tor: 10 }], [2300, { x: 0 }]],
        D: D, fx: fx };
    },
    dropkick: function () {
      var D = [[0, {}], [560, {}], [600, { x: -40, tor: -40, nk: -30, y: -20, rot: 30 }], [900, { x: -90, y: -6, rot: 70 }]];
      REC(D, 1000, -100); D.push([3300, { x: 0 }]);
      return { d: 3300, A: [[0, {}], [300, { x: 30, y: -24, th1: 60, sh1: -90 }], [560, { x: 80, y: -42, rot: 72, th1: 100, sh1: 0, th2: 92, sh2: 0, ua1: 150, ua2: 160 }], [820, { x: 70, y: 32, rot: 90 }], [1300, { x: 70, y: 14, rot: 30 }], [1700, { x: 60 }], [2400, { x: 0 }]],
        D: D, fx: [[560, 'hit', 'head', { big: 1 }], [560, 'shake', 10], [560, 'blood', { n: 12 }], [560, 'flash'], [820, 'dust'], [1000, 'dust'], [1000, 'shake', 5]] };
    },
    shotH: function (o) {
      var D = [[0, {}], [1050, {}], [1100, { x: -40, y: -40, rot: 50, nk: -30, ua1: 160, ua2: 150 }], [1400, { x: -100, y: -10, rot: 80 }]];
      REC(D, 1500, -110); D.push([3300, { x: 0 }]);
      return { d: 3300, A: [[0, {}], [300, { tor: -14, ua1: 160, la1: 30, ua2: 150, la2: 30, y: 6 }], [650, { tor: -18, ua1: 165, la1: 20, ua2: 160, la2: 20, y: 8 }], [750, { x: 12, tor: 22, ua1: 92, la1: 0, ua2: 92, la2: 0 }], [1100, { x: 12, tor: 14 }], [2200, { x: 0 }]],
        D: D, fx: [[300, 'efx', 'charge', { c: o.boom, d: 450 }], [750, 'efx', 'proj', { p: o.p, d: 330, big: 1, n: o.n || 1 }], [1080, 'efx', 'boom', { c: o.boom, d: 650, big: 1 }], [1080, 'hit', 'body', { big: 1 }], [1080, 'shake', 13], [1080, 'flash'], [1080, 'blood', { n: 12 }], [1500, 'dust']] };
    },
    quakeH: function (o) {
      var D = [[0, {}], [1000, {}], [1050, { x: -20, y: -50, rot: 40, ua1: 160, ua2: 150 }], [1300, { x: -40, y: -10, rot: 75 }]];
      REC(D, 1380, -50); D.push([3300, { x: 0 }]);
      var fx = [[900, 'shake', 14], [900, 'dust'], [900, 'quake'], [900, 'efx', 'shock', { c: o.sky ? '#93c5fd' : '#e5e7eb', d: 600, big: 1 }], [1050, 'hit', 'body', { big: 1 }], [1050, 'blood', { n: 10 }], [1380, 'dust']];
      if (o.sky) fx.push([850, 'efx', 'sky', { d: 400, at: 'a' }], [1050, 'efx', 'sky', { d: 350 }], [1050, 'flash']);
      if (o.anchor) fx.push([500, 'efx', 'rain', { p: 'anchor', n: 1, d: 450, at: 'mid' }]);
      return { d: 3300, A: [[0, {}], [300, { y: 22, tor: 22, th1: 72, sh1: -125, th2: -50, sh2: -60 }], [650, { x: 40, y: -90, ua1: 165, la1: 0, ua2: 165, la2: 0, th1: 60, sh1: -120 }], [900, { x: 50, y: 22, tor: 50, ua1: 100, la1: 0, ua2: 100, la2: 0, th1: 72, sh1: -125, th2: -50, sh2: -60 }], [1400, { x: 50, y: 0 }], [2300, { x: 0 }]],
        D: D, fx: fx };
    },
    meteor: function (o) {
      var D = [[0, {}], [900, { tor: -20, nk: -22 }], [1150, { tor: 6 }], [1400, { tor: -26, x: -10, nk: -24 }], [1650, { tor: 4, x: -10 }], [1900, { y: 12, tor: 32, x: -14 }], [2150, M(LIE, { x: -24 })], [5200, M(LIE, { x: -24 })]];
      var n = o.n || 6, fx = [[500, 'efx', 'rain', { p: o.p, n: n, d: 1600 }]];
      for (var k = 0; k < n; k++) { var t = 500 + Math.round((k + 1) * 1600 / (n + 0.6)); fx.push([t, 'efx', 'boom', { c: o.boom, d: 420, big: n === 1 }], [t, 'shake', n === 1 ? 16 : 7], [t, 'blood', { n: n === 1 ? 30 : 6 }]); }
      if (n === 1) D = [[0, {}], [1300, { nk: -40, ua1: 160, ua2: 160 }], [1500, { y: 30, tor: 50, th1: 80, sh1: -150, th2: -60, sh2: -80 }], [1700, M(LIE, { x: -8 })], [5200, M(LIE, { x: -8 })]];
      fx.push([2150, 'blood', { n: 20, pool: 1 }], [2150, 'dust'], [2500, 'text', 'FATALITY']);
      return { d: 5200, A: [[0, {}], [300, { tor: -8, nk: -16, ua1: 168, la1: 0, ua2: 170, la2: 0 }], [2200, { tor: -8, nk: -16, ua1: 168, la1: 0, ua2: 170, la2: 0 }], [2700, M(WIN, {})], [5200, M(WIN, {})]], D: D, fx: fx };
    },
    ghosts: function (o) {
      return { d: 5200, A: [[0, {}], [300, { tor: -6, nk: -22, ua1: 172, la1: 0 }], [1800, { tor: -6, nk: -22, ua1: 172, la1: 0 }], [2400, M(WIN, {})], [5200, M(WIN, {})]],
        D: [[0, {}], [1050, { tor: -10, nk: -20 }], [1120, { x: -30, y: -40, rot: 60 }], [1500, { x: -120, y: -70, rot: 210 }], [1900, M(LIE, { x: -150, rot: 450 })], [5200, M(LIE, { x: -150, rot: 450 })]],
        fx: [[400, 'efx', 'ghosts', { c: o.c, d: 1800 }], [1120, 'hit', 'body', { big: 1 }], [1120, 'shake', 12], [1120, 'blood', { n: 22 }], [1300, 'blood', { n: 10 }], [1900, 'shake', 10], [1900, 'dust'], [1900, 'blood', { n: 18, pool: 1 }], [2400, 'text', 'FATALITY']] };
    },
    wolf: function (o) {
      return { d: 5200, A: [[0, {}], [300, { nk: -34, tor: -12, ua1: 120, la1: 40, ua2: 100, la2: 40 }], [1100, { nk: -34, tor: -12, ua1: 120, ua2: 100 }], [1500, { x: 20, tor: 10 }], [2400, M(WIN, { x: 20 })], [5200, M(WIN, { x: 20 })]],
        D: [[0, {}], [1250, {}], [1300, { x: -20, tor: -34, nk: -30, ua1: 150, ua2: 140 }], [1480, M(LIE, { x: -44 })], [1700, M(LIE, { x: -44, tor: 10 })], [1800, M(LIE, { x: -44 })], [5200, M(LIE, { x: -44 })]],
        fx: [[400, 'efx', 'wolf', { c: o.c, d: 950 }], [1300, 'hit', 'head', { big: 1 }], [1300, 'efx', 'claw', { c: o.c, d: 450 }], [1300, 'blood', { n: 24 }], [1300, 'shake', 12], [1700, 'efx', 'claw', { c: o.c, d: 450, low: 1 }], [1700, 'blood', { n: 20, pool: 1 }], [1700, 'shake', 8], [2300, 'text', 'FATALITY']] };
    },
    tidal: function (o) {
      return { d: 5200, A: [[0, {}], [400, { x: 10, ua1: 95, la1: 0, ua2: 95, la2: 0, tor: 18 }], [1700, { x: 10, ua1: 95, la1: 0, ua2: 95, la2: 0, tor: 18 }], [2300, M(WIN, {})], [5200, M(WIN, {})]],
        D: [[0, {}], [880, {}], [920, { x: -10, y: -30, rot: 40, ua1: 160, ua2: 150 }], [1500, { x: -130, y: -60, rot: 160 }], [2000, M(LIE, { x: -150, rot: 450 })], [5200, M(LIE, { x: -150, rot: 450 })]],
        fx: [[450, 'efx', 'wave', { c: o.c, d: 1700 }], [900, 'shake', 10], [900, 'hit', 'body', { big: 1 }], [900, 'blood', { n: 12 }], [2000, 'shake', 10], [2000, 'dust'], [2000, 'blood', { n: 16, pool: 1 }], [2400, 'text', 'FATALITY']] };
    },
    slash: function (o) {
      return { d: 5200, A: [[0, {}], [300, { tor: -10, ua1: -40, la1: 70, ua2: -30, la2: 70 }], [650, { x: 60, tor: 26, ua1: 130, la1: 0 }], [850, { x: 175, tor: -10, ua1: 30, la1: 0 }], [1700, { x: 175, tor: -4, ua1: 20 }], [2400, M(WIN, { x: 175 })], [5200, M(WIN, { x: 175 })]],
        D: [[0, {}], [1600, { nk: -6 }], [1700, { y: 10, tor: 34, nk: 34, ua1: 10, ua2: -10 }], [2100, M(LIE, { x: -6 })], [5200, M(LIE, { x: -6 })]],
        fx: [[780, 'efx', 'slash', { c: o.c, d: 700, big: 1 }], [780, 'flash'], [780, 'shake', 6], [1600, 'blood', { n: 40, up: 1 }], [1600, 'shake', 12], [1700, 'blood', { n: 16 }], [2100, 'blood', { n: 24, pool: 1 }], [2100, 'dust'], [2500, 'text', 'FATALITY']] };
    },
    tornado: function (o) {
      var A_ = [[0, {}]];
      for (var k = 0; k < 8; k++) A_.push([250 + k * 150, { sx: k % 2 ? 1 : -1, ua1: 100, la1: 0, ua2: 100, la2: 0, tor: -6 }]);
      A_.push([1500, { sx: 1 }], [2300, M(WIN, {})], [5200, M(WIN, {})]);
      return { d: 5200, A: A_,
        D: [[0, {}], [700, { y: -30, rot: 60, ua1: 160, ua2: 150 }], [1100, { y: -120, rot: 300, x: -10 }], [1600, { y: -170, rot: 640, x: -20 }], [2000, M(LIE, { rot: 810, x: -40 })], [5200, M(LIE, { rot: 810, x: -40 })]],
        fx: [[550, 'efx', 'tornado', { c: o.c, d: 1500 }], [1100, 'blood', { n: 10 }], [1600, 'blood', { n: 12 }], [2000, 'shake', 15], [2000, 'flash'], [2000, 'dust'], [2000, 'blood', { n: 26, pool: 1 }], [2400, 'text', 'FATALITY']] };
    },
    pillar: function (o) {
      return { d: 5200, A: [[0, {}], [300, { y: 20, tor: 22, th1: 72, sh1: -125, th2: -50, sh2: -60 }], [700, { y: 26, tor: 50, ua1: 100, la1: 0, ua2: 100, la2: 0, th1: 72, sh1: -125, th2: -50, sh2: -60 }], [1700, { y: 26, tor: 50, ua1: 100, ua2: 100, th1: 72, sh1: -125, th2: -50, sh2: -60 }], [2300, M(WIN, {})], [5200, M(WIN, {})]],
        D: [[0, {}], [750, { y: -20, ua1: 170, ua2: 170, la1: 0, la2: 0, nk: -32 }], [1100, { y: -24, ua1: 165, ua2: 172, nk: -36, tor: -6 }], [1500, { y: -20, ua1: 172, ua2: 165, nk: -30, tor: 6 }], [1900, { y: 14, tor: 34 }], [2250, M(LIE, { x: -10 })], [5200, M(LIE, { x: -10 })]],
        fx: [[700, 'efx', 'pillar', { c: o.c, d: 1600 }], [700, 'shake', 10], [700, 'flash'], [900, 'blood', { n: 8, up: 1 }], [1400, 'blood', { n: 10, up: 1 }], [2250, 'shake', 9], [2250, 'dust'], [2250, 'blood', { n: 18, pool: 1 }], [2600, 'text', 'FATALITY']] };
    },
    tree: function (o) {
      return { d: 5200, A: [[0, {}], [300, { y: 20, tor: 10, th1: 80, sh1: -150, th2: -60, sh2: -30, ua1: 160, la1: 10, ua2: 150, la2: 10, nk: -20 }], [2100, { y: 20, tor: 10, th1: 80, sh1: -150, th2: -60, sh2: -30, ua1: 160, la1: 10, ua2: 150, la2: 10, nk: -20 }], [2600, M(WIN, {})], [5200, M(WIN, {})]],
        D: [[0, {}], [900, { y: -10 }], [1500, { y: -80, rot: 20, ua1: 150, ua2: 165, nk: -30 }], [2000, { y: -90, rot: 32, ua1: 160, ua2: 150 }], [2150, { y: -60, rot: 70, x: -20 }], [2400, M(LIE, { x: -40 })], [5200, M(LIE, { x: -40 })]],
        fx: [[500, 'efx', 'tree', { c: o.c, d: 1900 }], [800, 'shake', 6], [1500, 'blood', { n: 10 }], [2400, 'shake', 12], [2400, 'dust'], [2400, 'blood', { n: 22, pool: 1 }], [2700, 'text', 'FATALITY']] };
    }
  };

  /* ---------- karakter efektleri ---------- */
  function efxStart(e, an) {
    var o = e[3] || {}, pts = G.lastPts; if (!pts) return;
    var def = an.att === 'h' ? 'g' : 'h', dp = pts[def], ap = pts[an.att];
    G.efx.push({ k: e[2], t0: now(), d: o.d || 600, o: o, att: an.att, def: def, dir: an.att === 'h' ? 1 : -1,
      ax: ap.a1h.x, ay: ap.a1h.y, bx: (dp.H.x + dp.N.x) / 2, by: (dp.H.y + dp.N.y) / 2, gx: dp.H.x, cx: (ap.H.x + dp.H.x) / 2, ahx: ap.H.x });
  }
  function glow(x, y, r, c, a) {
    var g = ctx.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, hexA(c, a)); g.addColorStop(1, hexA(c, 0));
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
  }
  function hexA(c, a) { var n = parseInt((c || '#ffffff').slice(1), 16); return 'rgba(' + (n >> 16) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')'; }
  function projShape(p, x, y, dir, big) {
    var s = big ? 1.6 : 1;
    if (p === 'arrow') {
      ctx.strokeStyle = '#d6c7a1'; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(x - 16 * dir, y); ctx.lineTo(x, y); ctx.stroke();
      ctx.fillStyle = '#cfd6de'; ctx.beginPath(); ctx.moveTo(x + 4 * dir, y); ctx.lineTo(x - 2 * dir, y - 2.4); ctx.lineTo(x - 2 * dir, y + 2.4); ctx.fill();
      ctx.fillStyle = '#9b1c1c'; ctx.fillRect(x - 17 * dir - (dir < 0 ? 4 : 0), y - 2, 4, 4);
    } else if (p === 'bolt') {
      ctx.globalCompositeOperation = 'lighter'; glow(x, y, 16 * s, '#93c5fd', 0.9);
      ctx.strokeStyle = '#e0f2fe'; ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(x - 18 * dir, y - 3);
      for (var i = 1; i <= 4; i++) ctx.lineTo(x - 18 * dir + i * 4.5 * dir, y + (i % 2 ? 4 : -4)); ctx.stroke(); ctx.globalCompositeOperation = 'source-over';
    } else if (p === 'water') {
      ctx.globalCompositeOperation = 'lighter'; glow(x, y, 15 * s, '#38bdf8', 0.8); ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(186,230,253,.9)'; ctx.beginPath(); ctx.ellipse(x, y, 7 * s, 5 * s, 0, 0, 7); ctx.fill();
      for (var j = 0; j < 4; j++) { ctx.beginPath(); ctx.arc(x - (8 + j * 5) * dir, y + Math.sin(now() / 60 + j) * 3, 2 - j * 0.3, 0, 7); ctx.fill(); }
    } else if (p === 'anchor') {
      ctx.save(); ctx.translate(x, y); ctx.scale(2.2, 2.2);
      ctx.strokeStyle = '#4b5563'; ctx.fillStyle = '#4b5563'; ctx.lineWidth = 2.4;
      ctx.beginPath(); ctx.moveTo(0, -14); ctx.lineTo(0, 10); ctx.stroke();
      ctx.beginPath(); ctx.arc(0, -16, 3, 0, 7); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-7, -8); ctx.lineTo(7, -8); ctx.stroke();
      ctx.beginPath(); ctx.arc(0, 2, 10, 0.25, Math.PI - 0.25); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-10, 4); ctx.lineTo(-12, 0); ctx.lineTo(-7, 2); ctx.fill(); ctx.beginPath(); ctx.moveTo(10, 4); ctx.lineTo(12, 0); ctx.lineTo(7, 2); ctx.fill();
      ctx.restore();
    } else {
      // gülle
      ctx.globalCompositeOperation = 'lighter'; glow(x - 8 * dir, y, 14 * s, '#ff7a00', 0.7); ctx.globalCompositeOperation = 'source-over';
      var g = ctx.createRadialGradient(x - 1.5, y - 1.5, 0.5, x, y, 5 * s); g.addColorStop(0, '#6b7280'); g.addColorStop(1, '#111');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 5 * s, 0, 7); ctx.fill();
    }
  }
  function drawEfx(n, pts) {
    G.efx = G.efx.filter(function (e) {
      var k = (n - e.t0) / e.d; if (k > 1) return false; if (k < 0) return true;
      var o = e.o, c = o.c || '#fff', dir = e.dir, dp = pts[e.def], ap = pts[e.att];
      ctx.save();
      if (e.k === 'aura') {
        ctx.globalCompositeOperation = 'lighter';
        var a = Math.sin(k * Math.PI) * 0.55;
        glow((ap.H.x + ap.N.x) / 2, (ap.H.y + ap.N.y) / 2 - 6, 46, c, a);
        for (var i = 0; i < 3; i++) { var fy = ap.H.y + 20 - ((n / 6 + i * 40) % 80); glow(ap.H.x + Math.sin(n / 90 + i * 2) * 10, fy, 6, c, a); }
      } else if (e.k === 'charge') {
        ctx.globalCompositeOperation = 'lighter'; glow(ap.a1h.x, ap.a1h.y, 8 + k * 22, c, 0.9 * (1 - k * 0.3));
      } else if (e.k === 'proj') {
        var cnt = o.n || 1;
        for (var q = 0; q < cnt; q++) {
          var kk = Math.max(0, Math.min(1, k * (1 + cnt * 0.12) - q * 0.12)); if (kk <= 0 || kk >= 1) continue;
          var x = e.ax + (e.bx - e.ax) * kk, y = e.ay + (e.by - e.ay) * kk - Math.sin(kk * Math.PI) * (o.p === 'ball' ? 14 : 3) + (q - (cnt - 1) / 2) * 6;
          projShape(o.p, x, y, dir, o.big);
        }
      } else if (e.k === 'boom') {
        ctx.globalCompositeOperation = 'lighter';
        var R = (o.big ? 48 : 28) * (0.4 + k);
        glow(e.bx, e.by, R, c, 0.95 * (1 - k)); glow(e.bx, e.by, R * 0.5, '#fff7d6', 0.9 * (1 - k));
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = hexA(c, 1 - k); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(e.bx, e.by, R * 1.1, 0, 7); ctx.stroke();
        if (k < 0.05 && !e.sp) { e.sp = 1; for (var s = 0; s < 18; s++) G.parts.push({ x: e.bx, y: e.by, vx: (Math.random() - 0.5) * 320, vy: -Math.random() * 260, r: 0.8 + Math.random() * 1.4, c: c, life: 0.5, spark: true }); }
      } else if (e.k === 'claw') {
        ctx.globalCompositeOperation = 'lighter'; ctx.strokeStyle = hexA(c, 1 - k); ctx.lineWidth = 2.2;
        var hx = o.low ? dp.N.x : dp.Hd.x, hy = o.low ? dp.N.y : dp.Hd.y;
        for (var j = -1; j <= 1; j++) { ctx.beginPath(); ctx.moveTo(hx - 12 * dir + j * 5, hy - 16 + j * 2); ctx.lineTo(hx + (-12 + 26 * Math.min(1, k * 3)) * dir + j * 5, hy - 16 + 30 * Math.min(1, k * 3) + j * 2); ctx.stroke(); }
      } else if (e.k === 'slash') {
        ctx.globalCompositeOperation = 'lighter';
        var r0 = o.big ? 60 : 30, sw = Math.min(1, k * 2.5);
        ctx.strokeStyle = hexA(c, 1 - k); ctx.lineWidth = o.big ? 7 : 4; ctx.shadowColor = c; ctx.shadowBlur = 14;
        ctx.beginPath(); ctx.arc(e.gx - 20 * dir, e.by + (o.big ? 10 : 0), r0, -2.4 + (dir < 0 ? 0 : 0), -2.4 + sw * 2.6); ctx.stroke();
        ctx.lineWidth = 1.5; ctx.strokeStyle = 'rgba(255,255,255,' + (1 - k) + ')'; ctx.stroke();
      } else if (e.k === 'chain') {
        var hx2 = ap.a1h.x, hy2 = ap.a1h.y, tx = dp.N.x, ty = dp.N.y, L = Math.min(1, k * 4);
        ctx.strokeStyle = '#9ca3af'; ctx.lineWidth = 1.4; ctx.setLineDash([3, 2]);
        ctx.beginPath(); ctx.moveTo(hx2, hy2); ctx.lineTo(hx2 + (tx - hx2) * L, hy2 + (ty - hy2) * L); ctx.stroke(); ctx.setLineDash([]);
        if (L >= 1) { ctx.fillStyle = '#6b7280'; ctx.beginPath(); ctx.arc(tx, ty, 3, 0, 7); ctx.fill(); }
      } else if (e.k === 'shock') {
        ctx.globalCompositeOperation = 'lighter';
        var sx = e.ahx + (o.big ? 50 : 86) * dir, rr = k * (o.big ? 170 : 70);
        ctx.strokeStyle = hexA(c, 0.9 * (1 - k)); ctx.lineWidth = 3;
        ctx.beginPath(); ctx.ellipse(sx, GROUND, rr, rr * 0.16, 0, Math.PI, 0); ctx.stroke();
        glow(sx + rr * 0.7 * dir, GROUND - 4, 18, c, 0.6 * (1 - k));
      } else if (e.k === 'sky') {
        if (Math.floor(n / 50) % 2 || k < 0.2) {
          var bx = o.at === 'a' ? ap.H.x + 50 * dir : dp.Hd.x, by = o.at === 'a' ? GROUND : dp.Hd.y;
          ctx.globalCompositeOperation = 'lighter'; ctx.strokeStyle = '#e0f2fe'; ctx.lineWidth = 3; ctx.shadowColor = '#60a5fa'; ctx.shadowBlur = 20;
          ctx.beginPath(); var yy = by - 320; ctx.moveTo(bx + 10, yy);
          while (yy < by) { yy += 22; ctx.lineTo(bx + (Math.random() - 0.5) * 22, Math.min(by, yy)); }
          ctx.stroke(); glow(bx, by, 30, '#93c5fd', 0.7);
        }
      } else if (e.k === 'rain') {
        var nn = o.n || 6;
        for (var r = 0; r < nn; r++) {
          var t0 = r / (nn + 0.6), kk2 = (k - t0) * (nn + 0.6) / 1.0; if (kk2 < 0 || kk2 > 1) continue;
          var tx2 = (o.at === 'mid' ? dp.H.x : dp.H.x + ((r * 37) % 30 - 15)), ty2 = o.p === 'anchor' && nn === 1 ? dp.Hd.y - 20 : dp.N.y - 5;
          var sx2 = tx2 - 90 * dir * (o.p === 'arrow' ? 1 : 0.3), sy2 = ty2 - 320;
          var px = sx2 + (tx2 - sx2) * kk2, py = sy2 + (ty2 - sy2) * kk2;
          if (o.p === 'bolt') { if (kk2 > 0.6) { ctx.globalCompositeOperation = 'lighter'; ctx.strokeStyle = '#e0f2fe'; ctx.lineWidth = 2.6; ctx.shadowColor = '#60a5fa'; ctx.shadowBlur = 16; ctx.beginPath(); ctx.moveTo(tx2, ty2 - 320); var y3 = ty2 - 320; while (y3 < ty2) { y3 += 24; ctx.lineTo(tx2 + (Math.random() - 0.5) * 20, Math.min(ty2, y3)); } ctx.stroke(); ctx.shadowBlur = 0; ctx.globalCompositeOperation = 'source-over'; } }
          else { ctx.save(); ctx.translate(px, py); if (o.p === 'arrow') if (o.p === 'arrow') ctx.rotate(Math.atan2(ty2 - sy2, tx2 - sx2)); projShape(o.p, 0, 0, 1, nn === 1); ctx.restore(); }
        }
      } else if (e.k === 'ghosts') {
        ctx.globalAlpha = Math.min(1, Math.sin(k * Math.PI) * 1.6) * 0.75;
        for (var g2 = 0; g2 < 4; g2++) {
          var gx = e.ahx - 140 * dir + (k * 520 - g2 * 34) * dir, gy = GROUND - (g2 % 2) * 6;
          rider(gx, gy, dir, c, n + g2 * 90);
        }
      } else if (e.k === 'wolf') {
        var kx = Math.min(1, k * 1.15), wx = ap.H.x + (dp.H.x - ap.H.x) * kx, wy = GROUND - 30 - Math.sin(kx * Math.PI) * 70;
        ctx.globalAlpha = 0.85 * Math.min(1, (1 - k) * 4); wolfShape(wx, wy, dir, c, kx);
      } else if (e.k === 'wave') {
        var wx2 = e.ahx + (k * 300 - 40) * dir, hgt = 70 + Math.sin(k * Math.PI) * 50;
        ctx.globalAlpha = Math.min(1, (1 - k) * 3);
        var wg = ctx.createLinearGradient(wx2, GROUND - hgt, wx2, GROUND); wg.addColorStop(0, 'rgba(186,230,253,.95)'); wg.addColorStop(0.3, hexA(c, 0.85)); wg.addColorStop(1, 'rgba(8,47,73,.9)');
        ctx.fillStyle = wg; ctx.beginPath(); ctx.moveTo(wx2 - 140 * dir, GROUND);
        ctx.quadraticCurveTo(wx2 - 60 * dir, GROUND - hgt * 0.5, wx2 - 10 * dir, GROUND - hgt);
        ctx.quadraticCurveTo(wx2 + 22 * dir, GROUND - hgt - 6, wx2 + 26 * dir, GROUND - hgt + 22);
        ctx.quadraticCurveTo(wx2 + 10 * dir, GROUND - hgt * 0.4, wx2 + 30 * dir, GROUND); ctx.closePath(); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,.8)'; for (var f2 = 0; f2 < 8; f2++) { ctx.beginPath(); ctx.arc(wx2 + (Math.random() * 30 - 10) * dir, GROUND - hgt + Math.random() * 14, 1 + Math.random() * 2, 0, 7); ctx.fill(); }
      } else if (e.k === 'tornado') {
        ctx.globalAlpha = Math.min(1, Math.sin(k * Math.PI) * 2) * 0.8; ctx.strokeStyle = c; ctx.lineWidth = 1.6;
        for (var z = 0; z < 14; z++) { var zy = GROUND - z * 14, zr = 8 + z * 3.2, ph = n / 70 + z; ctx.beginPath(); ctx.ellipse(e.gx + Math.sin(ph * 0.5) * 4, zy, zr, zr * 0.25, 0, ph % 6.28, ph % 6.28 + 4.4); ctx.stroke(); }
        for (var zz = 0; zz < 3; zz++) G.parts.push({ x: e.gx + (Math.random() - 0.5) * 40, y: GROUND - Math.random() * 150, vx: (Math.random() - 0.5) * 160, vy: -100, r: 0.8 + Math.random(), c: c, life: 0.3 });
      } else if (e.k === 'pillar') {
        ctx.globalCompositeOperation = 'lighter';
        var hh = Math.min(1, k * 4) * 300, wdt = 26 + Math.sin(n / 40) * 3, fade = Math.min(1, (1 - k) * 3);
        var pg = ctx.createLinearGradient(e.gx - wdt, 0, e.gx + wdt, 0); pg.addColorStop(0, hexA(c, 0)); pg.addColorStop(0.5, hexA(c, 0.9 * fade)); pg.addColorStop(1, hexA(c, 0));
        ctx.fillStyle = pg; ctx.fillRect(e.gx - wdt, GROUND - hh, wdt * 2, hh);
        var pg2 = ctx.createLinearGradient(e.gx - 8, 0, e.gx + 8, 0); pg2.addColorStop(0, 'rgba(255,240,200,0)'); pg2.addColorStop(0.5, 'rgba(255,250,220,' + 0.9 * fade + ')'); pg2.addColorStop(1, 'rgba(255,240,200,0)');
        ctx.fillStyle = pg2; ctx.fillRect(e.gx - 8, GROUND - hh, 16, hh);
        for (var pp = 0; pp < 3; pp++) G.parts.push({ x: e.gx + (Math.random() - 0.5) * 30, y: GROUND - Math.random() * 40, vx: (Math.random() - 0.5) * 40, vy: -260 - Math.random() * 200, r: 1 + Math.random() * 1.5, c: c, life: 0.45, spark: true });
      } else if (e.k === 'tree') {
        var gr = Math.min(1, k * 1.6), tx3 = e.gx, th = 150 * gr;
        ctx.strokeStyle = '#4a2f1b'; ctx.lineCap = 'round';
        ctx.lineWidth = 12 * gr + 2; ctx.beginPath(); ctx.moveTo(tx3, GROUND); ctx.quadraticCurveTo(tx3 - 8, GROUND - th * 0.5, tx3, GROUND - th); ctx.stroke();
        function br(x, y, a, l, d) { if (d === 0 || l < 4) return; var x2 = x + Math.sin(a) * l, y2 = y - Math.cos(a) * l; ctx.lineWidth = d * 1.6; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x2, y2); ctx.stroke(); br(x2, y2, a - 0.5, l * 0.72, d - 1); br(x2, y2, a + 0.45, l * 0.72, d - 1); }
        if (gr > 0.4) br(tx3, GROUND - th, 0, 40 * (gr - 0.4) / 0.6, 4);
        if (gr > 0.7) { ctx.globalCompositeOperation = 'lighter'; glow(tx3, GROUND - th - 40, 80 * gr, c, 0.35 * Math.min(1, (1 - k) * 3)); ctx.globalCompositeOperation = 'source-over';
          for (var lf = 0; lf < 2; lf++) G.parts.push({ x: tx3 + (Math.random() - 0.5) * 120, y: GROUND - th - 40 + (Math.random() - 0.5) * 60, vx: (Math.random() - 0.5) * 40, vy: -20, r: 1.4 + Math.random() * 1.4, c: Math.random() < 0.5 ? '#4ade80' : '#16a34a', life: 0.8 }); }
      }
      ctx.restore();
      return true;
    });
  }
  function rider(x, y, dir, c, n) {
    ctx.save(); ctx.translate(x, y); ctx.scale(dir, 1);
    ctx.globalCompositeOperation = 'lighter'; glow(0, -30, 40, c, 0.35); ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = hexA(c, 0.55); ctx.strokeStyle = hexA(c, 0.9); ctx.lineWidth = 2.4;
    var g = n / 70;
    // at
    ctx.beginPath(); ctx.ellipse(0, -26, 22, 9, 0, 0, 7); ctx.fill();
    ctx.beginPath(); ctx.moveTo(16, -30); ctx.lineTo(28, -48); ctx.lineTo(34, -46); ctx.lineTo(24, -26); ctx.closePath(); ctx.fill();
    [[-14, 0], [-8, 1.6], [10, 0.8], [16, 2.4]].forEach(function (l) { ctx.beginPath(); ctx.moveTo(l[0], -20); ctx.lineTo(l[0] + Math.sin(g + l[1]) * 8, 0); ctx.stroke(); });
    ctx.beginPath(); ctx.moveTo(-22, -28); ctx.quadraticCurveTo(-34, -24, -36, -12); ctx.stroke();
    // süvari
    ctx.beginPath(); ctx.moveTo(-4, -34); ctx.lineTo(4, -60); ctx.lineTo(10, -34); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.arc(5, -64, 5, 0, 7); ctx.fill();
    ctx.beginPath(); ctx.moveTo(6, -52); ctx.lineTo(30, -66); ctx.stroke();
    ctx.restore();
  }
  function wolfShape(x, y, dir, c, k) {
    ctx.save(); ctx.translate(x, y); ctx.scale(dir * 1.5, 1.5); ctx.rotate(-0.4 + k * 0.8);
    ctx.globalCompositeOperation = 'lighter'; glow(0, 0, 40, c, 0.5); ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = hexA(c, 0.75);
    ctx.beginPath();
    ctx.moveTo(-30, -2); ctx.quadraticCurveTo(-40, -12, -46, -6); ctx.quadraticCurveTo(-38, 0, -30, 4); // kuyruk
    ctx.quadraticCurveTo(-24, 12, -30, 20); ctx.lineTo(-26, 21); ctx.quadraticCurveTo(-16, 12, -10, 8); // arka bacak
    ctx.lineTo(10, 8); ctx.quadraticCurveTo(18, 14, 26, 18); ctx.lineTo(28, 15); ctx.quadraticCurveTo(22, 8, 18, 2); // ön bacak
    ctx.lineTo(24, -2); ctx.lineTo(34, 0); ctx.lineTo(36, -3); ctx.lineTo(26, -8); ctx.lineTo(24, -16); ctx.lineTo(20, -10); // kafa, kulak
    ctx.quadraticCurveTo(0, -14, -30, -2); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(26, -6, 1.2, 0, 7); ctx.fill();
    ctx.restore();
  }
  function ease(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
  function sample(keys, t) {
    if (!keys || !keys.length) return P({});
    if (t <= keys[0][0]) return P(keys[0][1]);
    for (var i = 1; i < keys.length; i++) {
      if (t <= keys[i][0]) {
        var a = P(keys[i - 1][1]), b = P(keys[i][1]), k = ease((t - keys[i - 1][0]) / Math.max(1, keys[i][0] - keys[i - 1][0])), r = {};
        for (var f in a) r[f] = a[f] + (b[f] - a[f]) * k;
        return r;
      }
    }
    return P(keys[keys.length - 1][1]);
  }

  var L_T = 34, L_U = 19, L_L = 19, L_TH = 25, L_SH = 24, HR = 13, GROUND = 172;
  function rad(d) { return d * Math.PI / 180; }
  function rig(p, bx, f) {
    var H = { x: bx + p.x * f, y: GROUND - L_TH - L_SH + p.y };
    var pts = {};
    var tor = rad(p.tor);
    pts.N = { x: H.x + Math.sin(tor) * f * L_T, y: H.y - Math.cos(tor) * L_T };
    var hn = rad(p.tor + p.nk);
    pts.Hd = { x: pts.N.x + Math.sin(hn) * f * (HR + 1), y: pts.N.y - Math.cos(hn) * (HR + 1) };
    function limb(o, a, b, l1, l2, key) {
      var a1 = rad(a), a2 = rad(a + b);
      pts[key + 'e'] = { x: o.x + Math.sin(a1) * f * l1, y: o.y + Math.cos(a1) * l1 };
      pts[key + 'h'] = { x: pts[key + 'e'].x + Math.sin(a2) * f * l2, y: pts[key + 'e'].y + Math.cos(a2) * l2 };
    }
    limb(pts.N, p.ua1, p.la1, L_U, L_L, 'a1'); limb(pts.N, p.ua2, p.la2, L_U, L_L, 'a2');
    limb(H, p.th1, p.sh1, L_TH, L_SH, 'l1'); limb(H, p.th2, p.sh2, L_TH, L_SH, 'l2');
    var th = rad(-p.rot * f), c = Math.cos(th), s = Math.sin(th);
    for (var k in pts) {
      var dx = (pts[k].x - H.x) * p.sx, dy = pts[k].y - H.y;
      pts[k] = { x: H.x + c * dx - s * dy, y: H.y + s * dx + c * dy };
    }
    pts.H = H;
    return pts;
  }

  var cv = null, ctx = null, lastT = 0, BG = new Image(); BG.src = 'img/vs/arena.jpg';
  function poseFor(r, n) {
    var t = n / 1000, breathe = { y: Math.sin(t * 3 + (r === 'h' ? 0 : 1.3)) * 1.3, la1: 95 + Math.sin(t * 3) * 4 };
    var an = G.anim && !G.anim.done ? G.anim : (G.mini && !G.mini.done ? G.mini : null);
    if (an && n >= an.t0 - 50) {
      var tt = n - an.t0;
      if (tt > an.tl.d && an === G.mini) { G.mini.done = true; return P(breathe); }
      var keys = r === an.att ? an.tl.A : an.tl.D;
      return sample(keys, tt);
    }
    var st = cur.st || {};
    if (G.hold && (st.ph === 'an' || st.ph === 'end')) return G.hold[r];
    if (st.ph === 'end' && st.win === r) return P(M(WIN, breathe));
    return P(breathe);
  }
  function draw(n) {
    var stage = document.getElementById('vsStage'); if (!stage) return;
    if (!cv) { cv = document.getElementById('vsCv'); ctx = cv && cv.getContext('2d'); }
    if (!cv || !cv.isConnected) { cv = document.getElementById('vsCv'); ctx = cv && cv.getContext('2d'); if (!cv) return; }
    var dpr = Math.min(2.5, window.devicePixelRatio || 1), w = stage.clientWidth, h = stage.clientHeight;
    if (cv.width !== Math.round(w * dpr) || cv.height !== Math.round(h * dpr)) { cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); }
    var big = stage.classList.contains('big');
    var ph_ = poseFor('h', n), pg_ = poseFor('g', n);
    var pts = { h: rig(ph_, 110, 1), g: rig(pg_, 250, -1) };
    var sc, ox, oy;
    if (big) {
      // sinematik kamera: iki dövüşçüyü kadrajda tutar, yaklaşır
      var x1 = 1e9, x2 = -1e9;
      ['h', 'g'].forEach(function (r) { var q = pts[r]; for (var k in q) { if (q[k].x < x1) x1 = q[k].x; if (q[k].x > x2) x2 = q[k].x; } });
      var tc = { cx: (x1 + x2) / 2, span: Math.max(190, x2 - x1 + 70) };
      var cam = G.cam || (G.cam = tc);
      cam.cx += (tc.cx - cam.cx) * 0.12; cam.span += (tc.span - cam.span) * 0.08;
      sc = Math.min(w / cam.span, h * 0.62 / 150);
      ox = w / 2 - cam.cx * sc; oy = h * 0.8 - GROUND * sc;
    } else {
      G.cam = null;
      sc = Math.min(w / 360, h / 200); ox = w / 2 - 180 * sc; oy = h - 200 * sc;
    }
    var dt = lastT ? Math.min(0.05, (n - lastT) / 1000) : 0.016; lastT = n;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    // arka plan
    ctx.fillStyle = '#05060a'; ctx.fillRect(0, 0, w, h);
    if (BG.complete && BG.naturalWidth) {
      var gy = oy + GROUND * sc, ar = BG.naturalWidth / BG.naturalHeight;
      var ih = Math.max(w / ar, gy / 0.8, (h - gy) / 0.2), iw = ih * ar;
      ctx.drawImage(BG, (w - iw) / 2, gy - 0.8 * ih, iw, ih);
      var vg = ctx.createRadialGradient(w / 2, gy - 40 * sc, 20, w / 2, gy - 40 * sc, Math.max(w, h) * 0.8);
      vg.addColorStop(0, 'rgba(0,0,0,.05)'); vg.addColorStop(1, 'rgba(0,0,0,.6)');
      ctx.fillStyle = vg; ctx.fillRect(0, 0, w, h);
    }
    // animasyon olayları
    if (G.anim && !G.anim.done && !G.anim.started) {
      // geç gelen ya da arka planda kalan oyuncu hareketi baştan izler
      G.anim.started = true; if (n - G.anim.t0 > 250) G.anim.t0 = n;
    }
    var an = G.anim && !G.anim.done ? G.anim : (G.mini && !G.mini.done ? G.mini : null);
    var shx = 0, shy = 0;
    if (an) {
      var tt = n - an.t0;
      an.tl.fx.forEach(function (e, k) {
        if (tt >= e[0] && !an.fired[k]) { an.fired[k] = true; if (tt - e[0] < 600) fire(e, an); }
      });
      if (an === G.anim && tt > an.tl.d + 200) {
        an.done = true;
        G.hold = {}; G.hold[an.att] = sample(an.tl.A, an.tl.d); G.hold[an.att === 'h' ? 'g' : 'h'] = sample(an.tl.D, an.tl.d);
        if (!G.dbg) rpc('vs_seen', { p_room: roomId, p_token: C.token(), p_as: an.as });
      }
    }
    if (G.shake > 0) { shx = (Math.random() - 0.5) * G.shake; shy = (Math.random() - 0.5) * G.shake; G.shake *= 0.88; if (G.shake < 0.3) G.shake = 0; }
    ctx.save();
    ctx.translate(ox + shx * sc, oy + shy * sc); ctx.scale(sc, sc);
    // zemin

    if (G.quake) { ctx.strokeStyle = 'rgba(0,0,0,.9)'; ctx.lineWidth = 1.6; G.quake.forEach(function (c) { ctx.beginPath(); ctx.moveTo(c[0][0], c[0][1]); for (var i = 1; i < c.length; i++) ctx.lineTo(c[i][0], c[i][1]); ctx.stroke(); }); }
    // kan gölü / parçacıklar (zeminde)
    G.parts.forEach(function (p) { if (p.pool) { ctx.fillStyle = 'rgba(105,0,10,.9)'; ctx.beginPath(); ctx.ellipse(p.x, GROUND + 1, p.r * 2.6, p.r * 0.6, 0, 0, 7); ctx.fill(); ctx.fillStyle = 'rgba(255,120,120,.15)'; ctx.beginPath(); ctx.ellipse(p.x - p.r * 0.6, GROUND + 0.6, p.r * 0.9, p.r * 0.2, 0, 0, 7); ctx.fill(); } });
    // dövüşçüler
    var att_ = an ? an.att : null;
    if (att_ === 'h') { fighter(pts.g, 'g', pg_); fighter(pts.h, 'h', ph_); } else { fighter(pts.h, 'h', ph_); fighter(pts.g, 'g', pg_); }
    G.lastPts = pts;
    if (G.efx && G.efx.length) drawEfx(n, pts);
    // parçacıklar
    G.parts = G.parts.filter(function (p) {
      if (p.pool) return true;
      p.vy += 520 * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.life -= dt;
      if (p.blood && p.y >= GROUND) { p.y = GROUND; p.pool = true; p.r = Math.max(1, p.r * 0.9); return true; }
      if (p.life <= 0) return false;
      ctx.globalAlpha = Math.max(0, Math.min(1, p.life * 2));
      if (p.blood) {
        ctx.strokeStyle = p.c; ctx.lineWidth = p.r * 1.3; ctx.beginPath(); ctx.moveTo(p.x - p.vx * 0.025, p.y - p.vy * 0.025); ctx.lineTo(p.x, p.y); ctx.stroke();
      } else if (p.spark) {
        ctx.globalCompositeOperation = 'lighter'; ctx.strokeStyle = p.c; ctx.lineWidth = p.r; ctx.beginPath(); ctx.moveTo(p.x - p.vx * 0.03, p.y - p.vy * 0.03); ctx.lineTo(p.x, p.y); ctx.stroke(); ctx.globalCompositeOperation = 'source-over';
      } else { ctx.fillStyle = p.c; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fill(); }
      ctx.globalAlpha = 1; return true;
    });
    if (G.parts.length > 400) G.parts.splice(0, G.parts.length - 400);
    // vuruş halkaları
    G.fx = G.fx.filter(function (f) {
      var k = (n - f.t) / 260; if (k > 1) return false;
      ctx.globalCompositeOperation = 'lighter';
      var gl = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.big ? 30 : 16); gl.addColorStop(0, 'rgba(255,230,160,' + (0.9 * (1 - k)) + ')'); gl.addColorStop(1, 'rgba(255,120,40,0)');
      ctx.fillStyle = gl; ctx.beginPath(); ctx.arc(f.x, f.y, f.big ? 30 : 16, 0, 7); ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = 'rgba(255,240,200,' + (1 - k) + ')'; ctx.lineWidth = f.big ? 3 : 2;
      ctx.beginPath(); ctx.arc(f.x, f.y, 4 + k * (f.big ? 26 : 14), 0, 7); ctx.stroke();
      for (var i = 0; i < 8; i++) { var a = i * Math.PI / 4 + f.t; ctx.beginPath(); ctx.moveTo(f.x + Math.cos(a) * (6 + k * 10), f.y + Math.sin(a) * (6 + k * 10)); ctx.lineTo(f.x + Math.cos(a) * (12 + k * (f.big ? 30 : 18)), f.y + Math.sin(a) * (12 + k * (f.big ? 30 : 18))); ctx.stroke(); }
      return true;
    });
    ctx.restore();
    // flaş
    if (G.flash && n - G.flash < 160) { ctx.fillStyle = 'rgba(255,255,255,' + (0.55 * (1 - (n - G.flash) / 160)) + ')'; ctx.fillRect(0, 0, w, h); }
    // yazılar
    var cap = document.getElementById('vsCap');
    if (G.anim && !G.anim.done && cap) {
      var t2 = n - G.anim.t0;
      var label = t2 < 1100 ? '<div class="cap-mv ' + G.anim.tier + '">' + esc(G.anim.label) + '</div>' : '';
      var fat = G.text && n - G.text.t >= 0 ? '<div class="cap-fat">' + G.text.s + '</div><div class="cap-win">' + esc(pl(G.anim.att).name) + ' KAZANDI</div>' : '';
      var html = label + fat;
      if (cap._h !== html) { cap._h = html; cap.innerHTML = html; }
    } else if (cap && cap._h) { cap._h = ''; cap.innerHTML = ''; }
  }
  function shadeC(hex, k) {
    var n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    var f = function (v) { return Math.max(0, Math.min(255, Math.round(k < 0 ? v * (1 + k) : v + (255 - v) * k))); };
    return 'rgb(' + f(r) + ',' + f(g) + ',' + f(b) + ')';
  }
  // konik uzuv: kalınlığı a'dan b'ye değişen, yanından ışık alan kas
  function limbShape(a, b, r1, r2, col, bulge) {
    var dx = b.x - a.x, dy = b.y - a.y, L = Math.sqrt(dx * dx + dy * dy) || 1, nx = -dy / L, ny = dx / L;
    var mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2, rm = (r1 + r2) / 2 + (bulge || 0);
    ctx.beginPath();
    ctx.moveTo(a.x + nx * r1, a.y + ny * r1);
    ctx.quadraticCurveTo(mx + nx * rm * 1.25, my + ny * rm * 1.25, b.x + nx * r2, b.y + ny * r2);
    ctx.arc(b.x, b.y, r2, Math.atan2(ny, nx), Math.atan2(-ny, -nx), false);
    ctx.quadraticCurveTo(mx - nx * rm * 1.25, my - ny * rm * 1.25, a.x - nx * r1, a.y - ny * r1);
    ctx.arc(a.x, a.y, r1, Math.atan2(-ny, -nx), Math.atan2(ny, nx), false);
    ctx.closePath();
    var g = ctx.createLinearGradient(mx + nx * rm, my + ny * rm, mx - nx * rm, my - ny * rm);
    g.addColorStop(0, shadeC(col, 0.22)); g.addColorStop(0.45, col); g.addColorStop(1, shadeC(col, -0.45));
    ctx.fillStyle = g; ctx.fill();
    ctx.strokeStyle = 'rgba(10,5,2,.28)'; ctx.lineWidth = 0.6; ctx.stroke();
  }
  function fighter(p, r, pose) {
    var pp = pl(r) || {}, c = CH[pp.ch] || CH.fatih, f = (r === 'h' ? 1 : -1) * (pose.sx < 0 ? -1 : 1);
    var tc = r === 'h' ? '#3b82f6' : '#ef4444';
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    // gölge
    var gs = ctx.createRadialGradient(p.H.x, GROUND + 2, 2, p.H.x, GROUND + 2, 26);
    gs.addColorStop(0, 'rgba(0,0,0,.6)'); gs.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gs; ctx.beginPath(); ctx.ellipse(p.H.x, GROUND + 2, 26, 5, 0, 0, 7); ctx.fill();
    var skin = c.skin, skinB = shadeC(skin, -0.2);
    function leg(k, back) {
      var pc = back ? shadeC(c.pants, -0.3) : c.pants;
      limbShape(p.H, p[k + 'e'], 6.6, 5.2, pc, 1.2);
      limbShape(p[k + 'e'], p[k + 'h'], 5.2, 3.8, pc, 0.6);
      // çizme
      var e = p[k + 'e'], h = p[k + 'h'], bx = e.x + (h.x - e.x) * 0.55, by = e.y + (h.y - e.y) * 0.55;
      limbShape({ x: bx, y: by }, h, 4.4, 4, back ? '#1a120c' : '#2a1d14', 0);
      var ang = Math.atan2(h.y - e.y, h.x - e.x) - Math.PI / 2 * f;
      ctx.fillStyle = back ? '#140d08' : '#24180f';
      ctx.beginPath(); ctx.ellipse(h.x + Math.cos(ang) * 3.5, h.y + Math.sin(ang) * 3.5, 6.5, 3, ang, 0, 7); ctx.fill();
    }
    function arm(k, back) {
      var sk = back ? skinB : skin;
      limbShape(p.N, p[k + 'e'], 5.4, 4.2, sk, 1.8);
      if (c.guard) limbShape(p[k + 'e'], p[k + 'h'], 4.4, 3.8, back ? '#0e0e0e' : c.guard, 0.4);
      else limbShape(p[k + 'e'], p[k + 'h'], 4.4, 3.6, sk, 0.9);
      // sargılı yumruk
      var h = p[k + 'h'];
      var g = ctx.createRadialGradient(h.x - 1.2, h.y - 1.2, 0.5, h.x, h.y, 5);
      g.addColorStop(0, '#fff'); g.addColorStop(0.5, c.wrap); g.addColorStop(1, shadeC(c.wrap, -0.5));
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(h.x, h.y, 4.6, 0, 7); ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,.4)'; ctx.lineWidth = 0.6; ctx.stroke();
      if (c.top === 'coat' || c.top === 'vest' && c.n === 'Fatih') {
        // kaftan kolu omuz kısmı
        if (c.top === 'coat') limbShape(p.N, { x: (p.N.x + p[k + 'e'].x) / 2, y: (p.N.y + p[k + 'e'].y) / 2 }, 6.2, 5.6, back ? shadeC(c.tc, -0.35) : c.tc, 0.5);
      }
    }
    // vücut yerel çerçevesi
    var ux = p.N.x - p.H.x, uy = p.N.y - p.H.y, tang = Math.atan2(ux, -uy);
    function torsoFrame(fn) { ctx.save(); ctx.translate(p.H.x, p.H.y); ctx.rotate(tang); ctx.scale(f, 1); fn(); ctx.restore(); }
    // arkadaki pelerin / kaftan
    if (c.top === 'vest' || c.top === 'coat' || c.top === 'pelt') torsoFrame(function () {
      ctx.fillStyle = shadeC(c.tc, -0.35);
      ctx.beginPath(); ctx.moveTo(-6, -L_T + 2); ctx.quadraticCurveTo(-17, -10, -15, 12); ctx.lineTo(-4, 10); ctx.closePath(); ctx.fill();
    });
    arm('a2', true); leg('l2', true);
    // gövde
    torsoFrame(function () {
      var T = L_T;
      ctx.beginPath();
      ctx.moveTo(-6.5, 2); ctx.quadraticCurveTo(-9, -T * 0.5, -9.5, -T + 3);   // sırt
      ctx.quadraticCurveTo(-4, -T - 3, 3, -T - 1.5);                           // omuz
      ctx.quadraticCurveTo(12, -T + 2, 11.5, -T * 0.66);                       // göğüs
      ctx.quadraticCurveTo(8, -T * 0.5, 7.5, -T * 0.32);
      ctx.quadraticCurveTo(7.5, -4, 6, 2);                                      // karın
      ctx.closePath();
      var g = ctx.createLinearGradient(12, -T, -10, 0);
      g.addColorStop(0, shadeC(skin, 0.25)); g.addColorStop(0.5, skin); g.addColorStop(1, shadeC(skin, -0.45));
      ctx.fillStyle = g; ctx.fill(); ctx.strokeStyle = 'rgba(10,5,2,.6)'; ctx.lineWidth = 0.7; ctx.stroke();
      // kas çizgileri
      ctx.strokeStyle = 'rgba(60,25,10,.45)'; ctx.lineWidth = 0.7;
      ctx.beginPath(); ctx.moveTo(1, -T + 2); ctx.quadraticCurveTo(7, -T * 0.62, 11, -T * 0.66); ctx.stroke();
      for (var a = 0; a < 3; a++) { ctx.beginPath(); ctx.moveTo(3, -T * 0.42 + a * 6); ctx.lineTo(7.4, -T * 0.42 + a * 6 + 0.6); ctx.stroke(); }
      ctx.beginPath(); ctx.moveTo(5.2, -T * 0.5); ctx.lineTo(5.2, -3); ctx.stroke();
      ctx.fillStyle = 'rgba(255,230,200,.18)'; ctx.beginPath(); ctx.ellipse(6, -T * 0.72, 4, 2.4, -0.3, 0, 7); ctx.fill();
      // üst giysi
      if (c.top === 'vest' || c.top === 'coat') {
        ctx.fillStyle = c.tc;
        ctx.beginPath(); ctx.moveTo(-9.6, -T + 3); ctx.quadraticCurveTo(-4, -T - 3, 1, -T - 1.5); ctx.quadraticCurveTo(-1, -T * 0.5, 0, 4); ctx.lineTo(-7, 4); ctx.quadraticCurveTo(-9.5, -T * 0.5, -9.6, -T + 3); ctx.fill();
        ctx.strokeStyle = c.tc2; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(1, -T - 1.5); ctx.quadraticCurveTo(-1, -T * 0.5, 0, 4); ctx.stroke();
        if (c.fur) { ctx.strokeStyle = c.fur; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-8, -T + 1); ctx.quadraticCurveTo(-3, -T - 2.5, 1.5, -T - 1); ctx.stroke(); }
      } else if (c.top === 'lamellar') {
        ctx.fillStyle = c.tc; ctx.beginPath(); ctx.ellipse(-1, -T + 1, 9, 4.5, 0.15, 0, 7); ctx.fill();
        ctx.strokeStyle = 'rgba(0,0,0,.45)'; ctx.lineWidth = 0.5; for (var q = -7; q < 7; q += 2.4) { ctx.beginPath(); ctx.moveTo(q, -T - 2); ctx.lineTo(q + 0.6, -T + 4); ctx.stroke(); }
        ctx.fillStyle = c.tc2; ctx.fillRect(-9, -T + 4.5, 2, 2);
      } else if (c.top === 'pelt') {
        var pg = ctx.createLinearGradient(0, -T - 4, 0, -T + 9); pg.addColorStop(0, shadeC(c.fur, 0.25)); pg.addColorStop(1, shadeC(c.fur, -0.4));
        ctx.fillStyle = pg; ctx.beginPath(); ctx.moveTo(-11, -T + 7); ctx.quadraticCurveTo(-6, -T - 6, 6, -T - 2); ctx.quadraticCurveTo(4, -T + 4, -2, -T + 9); ctx.closePath(); ctx.fill();
      }
      if (c.chain) { ctx.strokeStyle = '#e3b84f'; ctx.lineWidth = 1.1; ctx.beginPath(); ctx.moveTo(-1, -T - 1); ctx.quadraticCurveTo(7, -T * 0.6, 9.5, -T + 3); ctx.stroke(); }
      // kuşak
      var sg = ctx.createLinearGradient(0, -4, 0, 4); sg.addColorStop(0, shadeC(c.sash, 0.25)); sg.addColorStop(1, shadeC(c.sash, -0.4));
      ctx.fillStyle = sg; ctx.beginPath(); ctx.moveTo(-7.5, -3.5); ctx.lineTo(7.8, -4.2); ctx.lineTo(7.4, 3); ctx.lineTo(-7.2, 3.5); ctx.closePath(); ctx.fill();
      ctx.fillStyle = shadeC(c.sash, -0.2); ctx.beginPath(); ctx.moveTo(-6, 2); ctx.lineTo(-9, 11); ctx.lineTo(-5, 10); ctx.closePath(); ctx.fill();
    });
    leg('l1', false);
    // kafa
    var hd = p.Hd, hang = Math.atan2(hd.x - p.N.x, -(hd.y - p.N.y));
    ctx.save(); ctx.translate(hd.x, hd.y); ctx.rotate(hang); ctx.scale(f, 1);
    var R = 10.5;
    // boyun
    limbShape({ x: -1, y: R + 4 }, { x: 0, y: 4 }, 4.6, 4.2, skinB, 0);
    if (c.hair) { ctx.fillStyle = '#0d0907'; ctx.beginPath(); ctx.moveTo(-8, -4); ctx.quadraticCurveTo(-14, 6, -12, 18); ctx.lineTo(-7, 14); ctx.quadraticCurveTo(-7, 4, -4, -2); ctx.fill(); }
    if (c.braid) { ctx.strokeStyle = '#0f0a07'; ctx.lineWidth = 2.4; ctx.beginPath(); ctx.moveTo(-6, 2); ctx.quadraticCurveTo(-10, 10, -8, 18); ctx.stroke(); }
    // yüz
    ctx.beginPath(); ctx.moveTo(-8.5, -3); ctx.quadraticCurveTo(-9.5, 7, -2, 10); ctx.quadraticCurveTo(5, 11, 7.5, 6); ctx.lineTo(8.8, 2.5);
    ctx.lineTo(10.6, 0.6); ctx.lineTo(8.7, -1.4); ctx.quadraticCurveTo(9.2, -7, 3, -9.5); ctx.quadraticCurveTo(-7, -10, -8.5, -3); ctx.closePath();
    var fg = ctx.createLinearGradient(9, -8, -8, 8); fg.addColorStop(0, shadeC(skin, 0.25)); fg.addColorStop(0.55, skin); fg.addColorStop(1, shadeC(skin, -0.4));
    ctx.fillStyle = fg; ctx.fill(); ctx.strokeStyle = 'rgba(10,5,2,.6)'; ctx.lineWidth = 0.7; ctx.stroke();
    // kulak, kaş, göz
    ctx.fillStyle = skinB; ctx.beginPath(); ctx.ellipse(-3, 0, 1.8, 2.8, 0, 0, 7); ctx.fill();
    ctx.strokeStyle = '#140c08'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(2.5, -4.2); ctx.lineTo(7.8, -3.2); ctx.stroke();
    ctx.fillStyle = '#f2ece4'; ctx.beginPath(); ctx.ellipse(5.6, -1.6, 1.6, 0.95, 0, 0, 7); ctx.fill();
    ctx.fillStyle = '#1a0f08'; ctx.beginPath(); ctx.arc(6.2, -1.6, 0.75, 0, 7); ctx.fill();
    // sakal / bıyık
    ctx.fillStyle = c.bc;
    if (c.beard === 'full') { ctx.beginPath(); ctx.moveTo(-6.5, 2); ctx.quadraticCurveTo(-6, 14, 1, 15.5); ctx.quadraticCurveTo(8, 13, 9, 5); ctx.lineTo(5, 4.6); ctx.quadraticCurveTo(1, 8, -3, 2.5); ctx.closePath(); ctx.fill(); }
    if (c.beard === 'short') { ctx.beginPath(); ctx.moveTo(-6, 3); ctx.quadraticCurveTo(-4, 11, 2, 11.5); ctx.quadraticCurveTo(7.5, 10, 8, 5); ctx.lineTo(5, 5); ctx.quadraticCurveTo(1, 7.5, -3, 3); ctx.closePath(); ctx.fill(); }
    if (c.beard === 'must' || c.beard === 'longmust' || c.beard === 'short' || c.beard === 'full') {
      ctx.beginPath(); ctx.moveTo(9.4, 3.2); ctx.quadraticCurveTo(6, 2.6, 3.5, 4);
      if (c.beard === 'longmust') ctx.quadraticCurveTo(1.8, 9, 3, 13); else if (c.beard === 'must') ctx.quadraticCurveTo(1.5, 7.5, 0.8, 8.4); else ctx.quadraticCurveTo(3, 6, 4, 6.4);
      ctx.quadraticCurveTo(6, 5, 9.4, 4.4); ctx.closePath(); ctx.fill();
    }
    // başlık
    if (c.hat === 'turban' || c.hat === 'selimi' || c.hat === 'cap') {
      var tall = c.hat === 'selimi' ? 13 : c.hat === 'cap' ? 6 : 9;
      if (c.hat !== 'cap') { ctx.fillStyle = c.hc2; ctx.beginPath(); ctx.ellipse(0, -9 - tall * 0.9, 5.5, tall * 0.7, 0, 0, 7); ctx.fill(); }
      else { ctx.fillStyle = c.hc; ctx.beginPath(); ctx.ellipse(-0.5, -11, 7.5, 5.5, 0, 0, 7); ctx.fill(); }
      var tg = ctx.createLinearGradient(0, -9 - tall, 0, -4); tg.addColorStop(0, '#ffffff'); tg.addColorStop(1, shadeC(c.hc, -0.3));
      ctx.fillStyle = tg;
      ctx.beginPath(); ctx.ellipse(-0.5, -8.4 - tall * 0.35, 11.5, 4.5 + tall * 0.4, -0.05, 0, 7); ctx.fill();
      ctx.strokeStyle = 'rgba(80,60,40,.35)'; ctx.lineWidth = 0.6;
      for (var w = 0; w < 3; w++) { ctx.beginPath(); ctx.ellipse(-0.5, -8.4 - tall * 0.35 + w * 2 - 2, 10.5, 2.4, -0.05 + w * 0.1, 0.2, Math.PI - 0.2); ctx.stroke(); }
      if (c.hat === 'cap') { ctx.fillStyle = c.hc2; ctx.fillRect(-11, -7.4, 22, 1.6); }
      if (c.plume) { ctx.fillStyle = '#b3121c'; ctx.beginPath(); ctx.arc(5, -9 - tall * 0.5, 1.6, 0, 7); ctx.fill();
        ctx.strokeStyle = c.plume; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(5, -10 - tall * 0.5); ctx.quadraticCurveTo(4, -20 - tall, -2, -22 - tall); ctx.stroke(); }
    } else if (c.hat === 'bork') {
      ctx.fillStyle = c.hc2; ctx.beginPath(); ctx.moveTo(-6, -11); ctx.lineTo(0, -26); ctx.lineTo(6, -11); ctx.closePath(); ctx.fill();
      var bg = ctx.createLinearGradient(0, -16, 0, -5); bg.addColorStop(0, shadeC(c.hc, 0.3)); bg.addColorStop(1, shadeC(c.hc, -0.35));
      ctx.fillStyle = bg; ctx.beginPath(); ctx.ellipse(0, -9.5, 12, 5.5, 0, 0, 7); ctx.fill();
    } else if (c.hat === 'helmet') {
      ctx.strokeStyle = c.plume; ctx.lineWidth = 3.4; ctx.beginPath(); ctx.moveTo(0, -20); ctx.quadraticCurveTo(-12, -24, -16, -6); ctx.stroke();
      var hg = ctx.createLinearGradient(8, -20, -8, -2); hg.addColorStop(0, '#e6eaef'); hg.addColorStop(0.5, c.hc); hg.addColorStop(1, '#3a3e44');
      ctx.fillStyle = hg; ctx.beginPath(); ctx.moveTo(-10, -2); ctx.quadraticCurveTo(-10, -18, 0, -21); ctx.quadraticCurveTo(10, -18, 10.5, -2); ctx.closePath(); ctx.fill();
      ctx.fillStyle = c.hc2; ctx.fillRect(7.6, -3, 2, 7);
    }
    ctx.restore();
    arm('a1', false);
    // takım rengi zemin halkası
    ctx.strokeStyle = tc; ctx.globalAlpha = 0.7; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.ellipse(p.H.x, GROUND + 2, 18, 3.2, 0, 0, 7); ctx.stroke(); ctx.globalAlpha = 1;
    // isim / rütbe / seviye
    var L = lvl(pp), rk = A.rankOf(L);
    var ty = Math.min(hd.y - 30, p.H.y - 72);
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.shadowColor = 'rgba(0,0,0,.95)'; ctx.shadowBlur = 3;
    ctx.font = '800 9.5px Inter,system-ui,sans-serif'; ctx.fillStyle = '#fff';
    ctx.fillText(pp.name || '', hd.x, ty - 9);
    ctx.font = '700 7.2px Inter,system-ui,sans-serif'; ctx.fillStyle = rk.c;
    ctx.fillText(rk.i + ' ' + rk.n.toLocaleUpperCase('tr') + ' · SV ' + L, hd.x, ty);
    ctx.fillStyle = tc; ctx.fillRect(hd.x - 12, ty + 3, 24, 1.6);
    ctx.shadowBlur = 0;
  }
  function fire(e, an) {
    var type = e[1], opt = e[3] || {}, pts = G.lastPts; if (!pts) return;
    var def = an.att === 'h' ? 'g' : 'h', dp = pts[def], ap = pts[an.att];
    var at = e[2] === 'head' ? dp.Hd : e[2] === 'foot' ? dp.l1h : e[2] === 'body' ? { x: (dp.H.x + dp.N.x) / 2, y: (dp.H.y + dp.N.y) / 2 } : dp.Hd;
    var dir = def === 'h' ? -1 : 1;  // savunanın geri yönü
    if (type === 'efx') { efxStart(e, an); return; }
    if (type === 'hit') { G.fx.push({ x: at.x, y: at.y, t: now(), big: opt.big }); for (var i = 0; i < (opt.big ? 14 : 7); i++) G.parts.push({ x: at.x, y: at.y, vx: (Math.random() - 0.3) * 220 * dir, vy: -Math.random() * 180, r: 0.8 + Math.random() * 1.2, c: '#ffd27a', life: 0.35, spark: true }); }
    else if (type === 'blood') {
      var b = e[3] && e[3].n ? e[3].n : 8, src = opt.pool ? { x: dp.H.x, y: GROUND - 6 } : dp.Hd;
      for (var j = 0; j < b; j++) G.parts.push({ x: src.x, y: src.y, vx: (Math.random() * 1.2 - 0.2) * (opt.pool ? 70 : 190) * dir, vy: -(opt.up ? 260 : 120) * Math.random() - 40, r: 1 + Math.random() * 2.2, c: Math.random() < 0.5 ? '#b3001b' : '#7a0010', life: 1.6, blood: true });
    }
    else if (type === 'shake') G.shake = Math.max(G.shake, e[2]);
    else if (type === 'flash') G.flash = now();
    else if (type === 'dust') { for (var k = 0; k < 16; k++) G.parts.push({ x: dp.H.x + (Math.random() - 0.5) * 40, y: GROUND - 2, vx: (Math.random() - 0.5) * 120, vy: -Math.random() * 60, r: 1.5 + Math.random() * 2.5, c: 'rgba(180,170,150,.55)', life: 0.6 }); }
    else if (type === 'quake') {
      G.quake = [];
      for (var q = 0; q < 6; q++) { var x0 = dp.H.x, y0 = GROUND + 1, c = [[x0, y0]], ang = (q / 6) * Math.PI + 0.2; for (var s = 1; s < 5; s++) { x0 += Math.cos(ang) * (8 + Math.random() * 8) * (q % 2 ? 1 : -1); y0 += Math.random() * 4; c.push([x0, y0]); } G.quake.push(c); }
    }
    else if (type === 'text') { G.text = { s: e[2], t: now() }; if (navigator.vibrate) try { navigator.vibrate([100, 60, 200]); } catch (er) {} }
    if (type === 'hit' && navigator.vibrate && an === G.anim) try { navigator.vibrate(opt.big ? 40 : 15); } catch (er) {}
  }

  window.LGSVS = { page: page, stop: stop, _play: function (ch, oc, tier, mv) { G.dbg = 1; G.dbgCh = { h: ch, g: oc }; var tl = buildTL('h', tier, mv); G.anim = { name: tl.name, label: tl.label, att: 'h', t0: now() + 100, as: 0, tl: tl, fired: {}, tier: tier, started: true }; G.efx = []; G.parts = []; G.text = null; G.quake = null; G.hold = null; G.cam = null; document.getElementById('vsStage').classList.add('big'); return tl.d; }, _dbg: function () { return { off: off, rtt: bestRtt, now: now(), an: G && G.anim ? now() - G.anim.t0 : null, ph: cur && cur.st && cur.st.ph }; } };
})();
