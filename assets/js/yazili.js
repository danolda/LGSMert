/* LGS Kışlası · Yazılı: MEB "Yazılıya Hazırlanıyorum" açık uçlu sınavları, 40 dk, otomatik puanlama (Gemini) ya da öz değerlendirme */
(function () {
  'use strict';
  var A = window.LGSApp; if (!A) return;
  var app = document.getElementById('app');
  var esc = A.esc, KEY = A.KEY;
  var CUR = KEY + 'yazili:cur', PEND = KEY + 'yazili:pend', HIST = KEY + 'yazili:hist';
  var FN = ((window.LGS_CLOUD || {}).url || 'https://veufvthlejqoobexzrjo.supabase.co') + '/functions/v1/yazili-grade';
  var ORDER = ['tr', 'ink', 'din', 'ing', 'mat', 'fen'];
  var HEX = { tr: '#f43f5e', mat: '#38bdf8', fen: '#22c55e', ink: '#f59e0b', din: '#14b8a6', ing: '#a78bfa' };
  var SNAME = { tr: 'Türkçe', mat: 'Matematik', fen: 'Fen Bilimleri', ink: 'T.C. İnkılap Tarihi ve Atatürkçülük', din: 'Din Kültürü ve Ahlak Bilgisi', ing: 'İngilizce' };
  var SHORT = { tr: 'Türkçe', mat: 'Matematik', fen: 'Fen', ink: 'İnkılap', din: 'Din', ing: 'İngilizce' };
  var ICON = { tr: '📖', mat: '📐', fen: '🔬', ink: '🏛️', din: '🕌', ing: '🇬🇧' };
  var AY = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
  var MAXPH = 4;
  var VER = (function () { var s = document.querySelector('script[src*="yazili.js"]'); var m = s && /[?&]v=(\d+)/.exec(s.getAttribute('src')); return m ? m[1] : '1'; })();
  var tick = null, photos = {}, gradingRun = 0, routed = false;

  function idx() { return window.LGS_YZ_INDEX || []; }
  function meta(id) { return idx().filter(function (e) { return e.id === id; })[0] || null; }
  function hist() { return A.jget(HIST, []); }
  function cloud(name, body, cb) { if (!window.LGSCloud) return cb('yok'); window.LGSCloud.rpc(name, body, cb); }
  function mmss(ms) { ms = Math.max(0, Math.round(ms / 1000)); var m = Math.floor(ms / 60), s = ms % 60; return m + ':' + ('0' + s).slice(-2); }
  function dk(ms) { var s = Math.round(ms / 1000); return s < 60 ? s + ' sn' : Math.floor(s / 60) + ' dk'; }
  function fdate(t) { var d = new Date(t); return d.getDate() + ' ' + AY[d.getMonth()] + ' ' + d.getFullYear() + ' · ' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2); }
  function plab(l) { return l ? (/^[a-zçğ]$/.test(l) ? l + ')' : l) : 'Cevap'; }
  function br(s) { return esc(s || '').replace(/\n/g, '<br>'); }
  function stop() { if (tick) { clearInterval(tick); tick = null; } document.body.classList.remove('dn-solving'); gradingRun++; }
  function scol(p) { return p >= 70 ? '#22c55e' : p >= 40 ? '#f59e0b' : '#f43f5e'; }

  function loadExam(id, cb) {
    window.LGS_YZ = window.LGS_YZ || {};
    if (window.LGS_YZ[id]) return cb(window.LGS_YZ[id]);
    var s = document.createElement('script');
    s.src = 'data/yazili/' + id + '.js?v=' + VER;
    s.onload = function () { cb(window.LGS_YZ[id] || null); };
    s.onerror = function () { cb(null); };
    document.head.appendChild(s);
  }

  /* ---------- fotoğraflar: IndexedDB (localStorage'a sığmaz) ---------- */
  var dbp = null;
  function db() {
    if (!dbp) dbp = new Promise(function (res) {
      try {
        var r = indexedDB.open('lgs-yazili', 1);
        r.onupgradeneeded = function () { r.result.createObjectStore('ph'); };
        r.onsuccess = function () { res(r.result); };
        r.onerror = function () { res(null); };
      } catch (e) { res(null); }
    });
    return dbp;
  }
  function phSave(no) {
    var v = photos[no] || [];
    db().then(function (d) { if (!d) return; try { var t = d.transaction('ph', 'readwrite'); if (v.length) t.objectStore('ph').put(v, String(no)); else t.objectStore('ph').delete(String(no)); } catch (e) {} });
  }
  function phLoadAll(cb) {
    db().then(function (d) {
      if (!d) return cb();
      try {
        var t = d.transaction('ph', 'readonly'), st = t.objectStore('ph'), rq = st.openCursor();
        rq.onsuccess = function () { var c = rq.result; if (c) { photos[c.key] = c.value; c.continue(); } else cb(); };
        rq.onerror = function () { cb(); };
      } catch (e) { cb(); }
    });
  }
  function phClear() { photos = {}; db().then(function (d) { if (!d) return; try { d.transaction('ph', 'readwrite').objectStore('ph').clear(); } catch (e) {} }); }
  function downscale(file, cb) {
    var url = URL.createObjectURL(file), img = new Image();
    img.onload = function () {
      var w = img.naturalWidth, h = img.naturalHeight, k = Math.min(1, 1600 / Math.max(w, h));
      var c = document.createElement('canvas'); c.width = Math.round(w * k); c.height = Math.round(h * k);
      var g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height); g.drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      cb(c.toDataURL('image/jpeg', 0.8));
    };
    img.onerror = function () { URL.revokeObjectURL(url); cb(null); };
    img.src = url;
  }

  /* ---------- görsel büyütme ---------- */
  document.addEventListener('click', function (e) {
    var im = e.target.closest && e.target.closest('img.yz-zoom'); if (!im) return;
    var o = document.createElement('div'); o.className = 'yz-zm';
    o.innerHTML = '<button class="yz-zm-x" aria-label="Kapat">✕</button><div class="yz-zm-in"><img src="' + im.getAttribute('src') + '" alt=""></div>';
    document.body.appendChild(o);
    o.onclick = function (ev) { if (ev.target === o || ev.target.closest('.yz-zm-x')) o.remove(); };
  });

  /* ================= LİSTE ================= */
  function listPage() {
    A.setCrumbs([{ text: 'Yazılı' }]); document.title = 'Yazılı · LGS Kışlası';
    var cur = A.jget(CUR, null), pend = A.jget(PEND, null), H = hist();
    var html = '<div class="page-dn page-yz"><div class="dn-hero"><div class="dn-hero-ic">✍️</div><h1>Yazılıya Hazırlan</h1>' +
      '<p>MEB’in “Yazılıya Hazırlanıyorum” açık uçlu soruları. 40 dakikan var; cevaplarını yaz, istersen çözüm kâğıdının fotoğrafını ekle. Sonuçlar sınav bitince açıklanır.</p></div>';
    if (cur) { var cm = meta(cur.id); html += '<a class="card dn-resume" href="#/yazili/coz"><b>⏱ Yarım kalan yazılın var</b><span>' + esc(cm ? cm.title : cur.id) + ' · kalan süre ' + mmss(cur.end - Date.now()) + '</span><em>Devam et →</em></a>'; }
    if (pend) { var pm = meta(pend.id); html += '<a class="card dn-resume yz-pend" href="#/yazili/puan"><b>📝 Değerlendirmesi bitmemiş yazılın var</b><span>' + esc(pm ? pm.title : pend.id) + '</span><em>Tamamla →</em></a>'; }
    var by = {};
    idx().forEach(function (e) { (by[e.sid] = by[e.sid] || []).push(e); });
    ORDER.forEach(function (sid) {
      var L = by[sid]; if (!L) return;
      html += '<div class="card yz-sub" style="--sc:' + HEX[sid] + '"><div class="yz-sub-h"><span class="dn-ic">' + ICON[sid] + '</span><b>' + esc(SNAME[sid]) + '</b></div>' +
        L.map(function (e) {
          var at = H.filter(function (h) { return h.summary && h.summary.exam === e.id; });
          var best = at.reduce(function (m, h) { return Math.max(m, h.summary.score || 0); }, 0);
          return '<div class="yz-ex"><span class="yz-ex-m"><b>' + e.donem + '. Dönem ' + e.yazili + '. Yazılı</b><small>' + e.n + ' soru · ' + e.parts + ' madde · ' + e.min + ' dk' +
            (at.length ? ' · ' + at.length + ' deneme, en iyi ' + best + '/100' : '') + '</small></span><button class="btn yz-go" data-start="' + e.id + '">Başla</button></div>';
        }).join('') + '</div>';
    });
    if (!idx().length) html += '<p class="empty">Henüz yazılı eklenmedi.</p>';
    html += '<h2 class="dn-h2">📈 Gidişatım</h2><div id="yzHist"><p class="loading">Yükleniyor…</p></div></div>';
    app.innerHTML = html;
    app.querySelector('.page-yz').addEventListener('click', function (e) {
      var b = e.target.closest('[data-start]'); if (b) startConfirm(b.getAttribute('data-start'));
    });
    var loc = H.map(function (h) { return { lid: h.lid, id: h.id, at: h.at, summary: h.summary }; });
    drawHist(loc);
    cloud('deneme_list', { p_token: window.LGSCloud ? window.LGSCloud.token() : '' }, function (err, rows) {
      if (err || !Array.isArray(rows)) return;
      var seen = {}, all = loc.slice();
      loc.forEach(function (h) { if (h.id) seen[h.id] = 1; });
      rows.forEach(function (r) { if (r.summary && r.summary.kind === 'yazili' && !seen[r.id]) all.push({ id: r.id, at: new Date(r.at).getTime(), summary: r.summary }); });
      all.sort(function (a, b) { return b.at - a.at; });
      if (location.hash.replace(/\/$/, '') === '#/yazili' && document.getElementById('yzHist')) drawHist(all);
    });
  }
  function drawHist(rows) {
    var box = document.getElementById('yzHist'); if (!box) return;
    if (!rows.length) { box.innerHTML = '<p class="empty">Henüz yazılı çözmedin. Bir dersten başla; puanların burada grafikle takip edilir.</p>'; return; }
    var by = {}, out = '';
    rows.forEach(function (r) { var s = r.summary || {}; (by[s.sid] = by[s.sid] || []).push(r); });
    ORDER.forEach(function (sid) {
      var L = by[sid]; if (!L) return;
      var last = L[0].summary.score, avg = Math.round(L.reduce(function (m, r) { return m + (r.summary.score || 0); }, 0) / L.length);
      out += '<div class="card dn-trend yz-tr" style="--sc:' + HEX[sid] + '"><div class="dn-ch-h">' + ICON[sid] + ' ' + esc(SHORT[sid]) + ' <small>son ' + last + '/100 · ortalama ' + avg + ' · ' + L.length + ' deneme</small></div>' +
        (L.length >= 2 ? trendSvg(L.slice(0, 12).reverse().map(function (r) { return r.summary.score || 0; }), HEX[sid], sid) : '<p class="small">Grafik için bu dersten en az iki yazılı çöz.</p>') + '</div>';
    });
    out += '<div class="dn-hlist">' + rows.map(function (r) {
      var s = r.summary || {}, p = s.score || 0;
      return '<a class="dn-hi" href="#/yazili/r/' + encodeURIComponent(r.lid || r.id) + '">' + ringSvg(p, scol(p), 46) +
        '<span class="dn-hi-m"><b>' + p + '/100</b><small><i style="background:' + HEX[s.sid] + '"></i> ' + esc(s.title || '') + '</small><small>' + s.ok + '/' + s.n + ' madde doğru · ' + fdate(r.at) + '</small></span>' +
        (s.xp ? '<span class="dn-hi-xp">+' + A.nf(s.xp) + '<small>EXP</small></span>' : '') + '</a>';
    }).join('') + '</div>';
    box.innerHTML = out;
  }

  function startConfirm(id) {
    var m = meta(id); if (!m) return;
    if (A.jget(CUR, null) || A.jget(PEND, null)) { A.toast('Önce yarım kalan yazılını bitir.'); return; }
    var o = document.createElement('div'); o.className = 'dn-modal';
    o.innerHTML = '<div class="dn-modal-in"><div class="dn-modal-ic">✍️</div><h2>' + esc(m.title) + '</h2><p><b>' + m.n + ' soru · ' + m.min + ' dakika.</b> Süre başlayınca durmaz. Her maddeye cevabını yaz; istersen işlem kâğıdının fotoğrafını ekle. Sonuçlar bitince açıklanır.</p>' +
      '<div class="dn-modal-b"><button class="btn ghost" data-no>Vazgeç</button><button class="btn" data-yes>Başla</button></div></div>';
    document.body.appendChild(o);
    o.onclick = function (e) {
      if (e.target === o || e.target.closest('[data-no]')) return o.remove();
      if (!e.target.closest('[data-yes]')) return;
      o.remove();
      loadExam(id, function (ex) {
        if (!ex) return A.toast('Yazılı yüklenemedi. İnternet bağlantını kontrol et.');
        phClear();
        var now = Date.now();
        A.jset(CUR, { v: 1, id: id, start: now, end: now + (ex.min || 40) * 60000, i: 0, ans: {} });
        location.hash = '#/yazili/coz';
      });
    };
  }

  /* ================= SINAV ================= */
  function solvePage() {
    var cur = A.jget(CUR, null);
    if (!cur) { location.hash = '#/yazili'; return; }
    A.setCrumbs([{ text: 'Yazılı', href: '#/yazili' }, { text: 'Sınav' }]); document.title = 'Yazılı · LGS Kışlası';
    app.innerHTML = '<p class="loading">Yazılı yükleniyor…</p>';
    loadExam(cur.id, function (ex) {
      if (!ex) { app.innerHTML = '<p class="empty">Yazılı yüklenemedi. <a href="#/yazili">Geri dön</a></p>'; return; }
      phLoadAll(function () {
        if (location.hash !== '#/yazili/coz') return;
        run(cur, ex);
      });
    });
  }
  function run(cur, ex) {
    var Q = ex.q, N = Q.length, dir = 0, sc = HEX[ex.sid];
    document.body.classList.add('dn-solving');
    app.innerHTML = '<div class="dn-exam yz-exam"><div class="dn-bar"><div class="dn-bar-t"><span class="dn-pos" id="yzPos"></span><span class="dn-left" id="yzLeft"></span><span class="dn-clock" id="yzClock"></span></div>' +
      '<div class="dn-dots" id="yzDots">' + Q.map(function (q, i) { return '<i data-j="' + i + '" style="--sc:' + sc + '"></i>'; }).join('') + '</div></div>' +
      '<div id="yzStage"></div>' +
      '<div class="dn-nav"><button class="btn ghost" id="yzPrev">‹ Önceki</button><button class="btn ghost dn-map-b" id="yzMapB">▦</button><button class="btn" id="yzNext">Sonraki ›</button></div>' +
      '<button class="dn-finish" id="yzFin">Sınavı Bitir</button><div class="dn-map" id="yzMap" hidden></div></div>';
    var stage = document.getElementById('yzStage'), saveT = null;
    function answered(i) {
      var q = Q[i], a = cur.ans[q.no] || {};
      return (photos[q.no] && photos[q.no].length) || q.parts.some(function (p, k) { return (a[k] || '').trim(); });
    }
    function counts() { var n = 0; for (var i = 0; i < N; i++) if (answered(i)) n++; return n; }
    function head() {
      var n = counts();
      document.getElementById('yzPos').innerHTML = '<b>' + (cur.i + 1) + '</b>/' + N;
      document.getElementById('yzLeft').textContent = n + ' cevaplı · ' + (N - n) + ' boş';
      [].forEach.call(document.querySelectorAll('#yzDots i'), function (d, j) { d.className = (answered(j) ? 'a' : '') + (j === cur.i ? ' c' : ''); });
    }
    function show() {
      var i = cur.i, q = Q[i], a = cur.ans[q.no] || {}, ph = photos[q.no] || [];
      stage.innerHTML = '<article class="q dn-q yz-q ' + (dir > 0 ? 'in-r' : dir < 0 ? 'in-l' : '') + '" style="--sc:' + sc + '"><div class="meta"><span class="num">' + q.no + '.</span><span class="tag dn-stag">' + ICON[ex.sid] + ' ' + esc(SHORT[ex.sid]) + '</span><span class="yz-hint">Görsele dokun: büyüt</span></div>' +
        '<img class="yz-qimg yz-zoom" src="' + q.img + '" alt="' + q.no + '. soru">' +
        '<div class="yz-parts">' + q.parts.map(function (p, k) {
          return '<label class="yz-part"><span class="yz-pl">' + esc(plab(p.l)) + '</span><textarea rows="2" data-k="' + k + '" placeholder="Cevabını yaz…" spellcheck="false">' + esc(a[k] || '') + '</textarea></label>';
        }).join('') + '</div>' +
        '<div class="yz-ph"><div class="yz-ph-h">📷 İşlem / çözüm fotoğrafı <small>isteğe bağlı · en fazla ' + MAXPH + '</small></div><div class="yz-ph-l">' +
        ph.map(function (d, k) { return '<span class="yz-th"><img class="yz-zoom" src="' + d + '" alt=""><button data-rm="' + k + '" aria-label="Sil">✕</button></span>'; }).join('') +
        (ph.length < MAXPH ? '<label class="yz-add"><input type="file" accept="image/*" multiple hidden><span>＋</span><small>Ekle</small></label>' : '') + '</div></div></article>';
      [].forEach.call(stage.querySelectorAll('textarea'), grow);
      document.getElementById('yzPrev').disabled = i === 0;
      var nx = document.getElementById('yzNext'); nx.textContent = i === N - 1 ? 'Bitir ✓' : 'Sonraki ›'; nx.classList.toggle('fin', i === N - 1);
      head();
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    function grow(t) { t.style.height = 'auto'; t.style.height = Math.min(320, t.scrollHeight + 2) + 'px'; }
    function go(j) { if (j < 0 || j >= N || j === cur.i) return; dir = j > cur.i ? 1 : -1; cur.i = j; A.jset(CUR, cur); show(); }
    stage.addEventListener('input', function (e) {
      var t = e.target; if (!t.hasAttribute('data-k')) return;
      var no = Q[cur.i].no, a = cur.ans[no] || (cur.ans[no] = {});
      a[t.getAttribute('data-k')] = t.value; grow(t);
      clearTimeout(saveT); saveT = setTimeout(function () { A.jset(CUR, cur); head(); }, 300);
    });
    stage.addEventListener('change', function (e) {
      var t = e.target; if (t.type !== 'file' || !t.files || !t.files.length) return;
      var no = Q[cur.i].no, list = photos[no] || (photos[no] = []), fs = [].slice.call(t.files, 0, MAXPH - list.length), left = fs.length;
      var lab = t.closest('.yz-add'); if (lab) lab.classList.add('busy');
      fs.forEach(function (f) {
        downscale(f, function (d) {
          if (d && list.length < MAXPH) list.push(d);
          if (!--left) { phSave(no); if (Q[cur.i].no === no) show(); }
        });
      });
    });
    stage.addEventListener('click', function (e) {
      var b = e.target.closest('[data-rm]'); if (!b) return;
      e.stopPropagation();
      var no = Q[cur.i].no; (photos[no] || []).splice(+b.getAttribute('data-rm'), 1); phSave(no); show();
    }, true);
    document.getElementById('yzPrev').onclick = function () { go(cur.i - 1); };
    document.getElementById('yzNext').onclick = function () { if (cur.i === N - 1) confirmFin(); else go(cur.i + 1); };
    document.getElementById('yzFin').onclick = confirmFin;
    document.getElementById('yzDots').onclick = function (e) { var d = e.target.closest('i[data-j]'); if (d) go(+d.getAttribute('data-j')); };
    var map = document.getElementById('yzMap');
    document.getElementById('yzMapB').onclick = function () {
      map.innerHTML = '<div class="dn-map-in"><div class="dn-map-h"><b>Soru Haritası</b><button data-x>✕</button></div><div class="dn-map-g">' + Q.map(function (q, j) {
        return '<button data-j="' + j + '" class="' + (answered(j) ? 'a' : '') + (j === cur.i ? ' c' : '') + '" style="--sc:' + sc + '">' + q.no + '</button>';
      }).join('') + '</div></div>';
      map.hidden = false;
    };
    map.onclick = function (e) { var b = e.target.closest('button'); if (e.target === map || (b && b.hasAttribute('data-x'))) { map.hidden = true; return; } if (b && b.hasAttribute('data-j')) { map.hidden = true; go(+b.getAttribute('data-j')); } };
    function confirmFin() {
      A.jset(CUR, cur);
      var emp = N - counts(), o = document.createElement('div'); o.className = 'dn-modal';
      o.innerHTML = '<div class="dn-modal-in"><div class="dn-modal-ic">🏁</div><h2>Yazılıyı bitir?</h2><p>' + (emp ? '<b>' + emp + ' soru boş.</b> ' : 'Tüm sorulara cevap verdin. ') +
        'Bitirince cevapların değerlendirilir ve değiştirilemez.</p><div class="dn-modal-b"><button class="btn ghost" data-no>Devam et</button><button class="btn" data-yes>Bitir</button></div></div>';
      document.body.appendChild(o);
      o.onclick = function (e) { if (e.target === o || e.target.closest('[data-no]')) o.remove(); else if (e.target.closest('[data-yes]')) { o.remove(); finish(false); } };
    }
    function finish(timeUp) {
      stop(); clearTimeout(saveT);
      var pend = {
        v: 1, lid: 'Y' + Date.now(), id: ex.id, start: cur.start, used: Math.min(cur.end, Date.now()) - cur.start, min: ex.min || 40, timeUp: !!timeUp,
        q: Q.map(function (q) {
          var a = cur.ans[q.no] || {}, nimg = (photos[q.no] || []).length;
          var parts = q.parts.map(function (p, k) { return { l: p.l, a: (a[k] || '').trim() }; });
          var empty = !nimg && !parts.some(function (p) { return p.a; });
          return { no: q.no, nimg: nimg, parts: parts, st: empty ? 'empty' : 'wait' };
        })
      };
      A.jset(PEND, pend); localStorage.removeItem(CUR);
      location.hash = '#/yazili/puan';
    }
    function clk() {
      var left = cur.end - Date.now(), el = document.getElementById('yzClock');
      if (!el) return stop();
      el.textContent = '⏱ ' + mmss(left); el.classList.toggle('warn', left < 5 * 60000); el.classList.toggle('crit', left < 60000);
      if (left <= 0) { A.toast('Süre doldu! Yazılın değerlendiriliyor.'); var m = document.querySelector('.dn-modal'); if (m) m.remove(); finish(true); }
    }
    show(); clk(); tick = setInterval(clk, 500);
  }

  /* ================= PUANLAMA ================= */
  function gradePage() {
    var pend = A.jget(PEND, null);
    if (!pend) { location.hash = '#/yazili'; return; }
    A.setCrumbs([{ text: 'Yazılı', href: '#/yazili' }, { text: 'Değerlendirme' }]); document.title = 'Değerlendirme · LGS Kışlası';
    app.innerHTML = '<p class="loading">Hazırlanıyor…</p>';
    loadExam(pend.id, function (ex) {
      if (!ex) { app.innerHTML = '<p class="empty">Yazılı yüklenemedi. İnternet bağlantını kontrol edip sayfayı yenile.</p>'; return; }
      phLoadAll(function () { if (location.hash === '#/yazili/puan') grade(pend, ex); });
    });
  }
  function qById(ex, no) { for (var i = 0; i < ex.q.length; i++) if (ex.q[i].no === no) return ex.q[i]; return null; }
  function post(body, cb) {
    var x = new XMLHttpRequest();
    x.open('POST', FN);
    x.setRequestHeader('Content-Type', 'application/json');
    if ((window.LGS_CLOUD || {}).key) x.setRequestHeader('apikey', window.LGS_CLOUD.key);
    x.timeout = 170000;   // tüm sınav tek istekte; sunucu yoğunlukta kendi içinde ~2 dk deneyip "busy" dönebilir
    x.onload = function () {
      var d = null; try { d = JSON.parse(x.responseText); } catch (e) {}
      if (x.status >= 200 && x.status < 300 && d && Array.isArray(d.questions)) cb(null, d);
      else cb({ status: x.status, code: d && d.error, up: d && d.status, after: d && d.retry_after }, null);
    };
    x.onerror = x.ontimeout = function () { cb({ status: 0, code: 'ağ' }, null); };
    x.send(JSON.stringify(body));
  }
  /* gönderim için fotoğrafı küçült (kayıtlı kopya 1600 px kalır, ekranda büyütme için) */
  function shrinkData(d, max, qual, cb) {
    var img = new Image();
    img.onload = function () {
      var w = img.naturalWidth, h = img.naturalHeight, k = Math.min(1, max / Math.max(w, h));
      var c = document.createElement('canvas'); c.width = Math.max(1, Math.round(w * k)); c.height = Math.max(1, Math.round(h * k));
      var g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height); g.drawImage(img, 0, 0, c.width, c.height);
      var o = c.toDataURL('image/jpeg', qual);
      cb(o.length < d.length || max < 1280 ? o : d);
    };
    img.onerror = function () { cb(d); };
    img.src = d;
  }
  var SEND_MAX = 16000000, SHRINK = [[1280, 0.7], [1024, 0.6], [800, 0.5]];
  function packImages(todo, lvl, cb) {   // → { no: [dataURL…] }, toplam boyut
    var out = {}, jobs = [], size = 0;
    todo.forEach(function (q) { (photos[q.no] || []).forEach(function (d, k) { jobs.push([q.no, k, d]); }); out[q.no] = []; });
    var n = jobs.length; if (!n) return cb(out, 0);
    jobs.forEach(function (j) {
      shrinkData(j[2], SHRINK[lvl][0], SHRINK[lvl][1], function (o) {
        out[j[0]][j[1]] = o; size += o.length;
        if (--n === 0) cb(out, size);
      });
    });
  }
  function grade(pend, ex) {
    var my = ++gradingRun;
    var todo = pend.q.filter(function (q) { return q.st === 'wait'; }), total = todo.length, okN = 0;
    app.innerHTML = '<div class="page-dn yz-grade"><div class="dn-hero"><div class="dn-hero-ic yz-spin">🧠</div><h1>Yazılın değerlendiriliyor</h1><p id="yzGmsg">Cevapların MEB cevap anahtarına göre puanlanıyor. Bu 1-2 dakika sürebilir; sayfadan ayrılma.</p>' +
      '<p class="yz-busy" id="yzBusy" hidden><span class="yz-spinner"></span>Yoğunluk var, cevabın kaliteli değerlendirilmesi için biraz bekliyoruz…</p>' +
      '<div class="yz-prog"><i id="yzGbar"></i></div><p class="small" id="yzGn"></p></div></div>';
    var t0 = Date.now(), pt = null, doneQ = 0;
    function prog(fin) {   // tek istek: süreye göre yavaşça dolan çubuk, bitince tam
      var b = document.getElementById('yzGbar'), n = document.getElementById('yzGn');
      if (!b) { if (pt) clearInterval(pt); return; }
      var f = fin || !total ? 1 : Math.min(0.92, 1 - Math.exp(-(Date.now() - t0) / 40000));
      b.style.width = Math.round(f * 100) + '%';
      if (n) n.textContent = fin || !total ? doneQ + ' / ' + total + ' soru' : total + ' soru tek seferde değerlendiriliyor…';
    }
    prog();
    if (!total) return after();
    pt = setInterval(function () { if (my !== gradingRun) return clearInterval(pt); prog(); }, 700);
    function body(qs, imgs) {
      return { subject: SNAME[ex.sid], questions: qs.map(function (q) {
        var eq = qById(ex, q.no);
        return { id: String(q.no), question: eq ? eq.text : '', parts: q.parts.map(function (p, k) { return { label: p.l || 'cevap', key: eq && eq.parts[k] ? eq.parts[k].k : '', answer: p.a }; }), images: imgs[q.no] || [] };
      }) };
    }
    function send(b, cb) {   // yoğunlukta (busy) 3 kez bekleyip dener; kota dolduysa hemen bırakır
      var busyLeft = 3, otherLeft = 1;
      (function attempt() {
        post(b, function (err, d) {
          if (my !== gradingRun) return;
          if (!err) { busy(false); return cb(null, d); }
          if (err.code === 'busy' && busyLeft > 0) {
            busyLeft--; busy(true);
            return setTimeout(function () { if (my !== gradingRun) return; attempt(); }, Math.max(5, Math.min(60, +err.after || 15)) * 1000);
          }
          if (err.code !== 'busy' && err.code !== 'quota' && err.status !== 413 && otherLeft > 0) { otherLeft--; return setTimeout(function () { if (my !== gradingRun) return; attempt(); }, 1500); }
          busy(false); cb(err, null);
        });
      })();
    }
    function apply(qs, err, d) {
      var by = {};
      if (d) d.questions.forEach(function (r) { if (r && !r.missing && Array.isArray(r.parts) && r.parts.length) by[String(r.id)] = r; });
      qs.forEach(function (q) {
        var r = by[String(q.no)];
        if (!r) { q.st = 'self'; q.err = err ? (err.code || err.up || err.status || 'hata') : 'eksik'; if (err && err.code === 'quota') pend.quota = 1; return; }
        okN++; q.st = 'ai'; q.sum = r.summary || ''; delete q.err;
        q.parts.forEach(function (p, k) {   // sıraya göre eşle (etiket değil)
          var x = r.parts[k] || {};
          p.ok = !!x.result_correct; p.sc = Math.max(0, Math.min(100, x.score | 0)); p.fb = x.feedback || ''; p.sa = x.student_answer || ''; p.src = 'ai';
        });
      });
      doneQ += qs.length; A.jset(PEND, pend);
    }
    function bySize(qs, imgs) { return qs.reduce(function (m, q) { return m + (imgs[q.no] || []).reduce(function (n, d) { return n + d.length; }, 0); }, 0); }
    function split(qs, imgs) {   // son çare: fotoğraf boyutu dengeli iki parça
      var half = bySize(qs, imgs) / 2, acc = 0, i = 0;
      for (; i < qs.length - 1; i++) { acc += bySize([qs[i]], imgs); if (acc >= half) { i++; break; } }
      i = Math.max(1, Math.min(qs.length - 1, i));
      return [qs.slice(0, i), qs.slice(i)];
    }
    function chunk(qs, imgs) {   // genelde tek parça; yalnızca sunucu sınırı aşılırsa (40 soru / 80 madde / 40 foto / 16 MB) bölünür
      var out = [[]], c = { n: 0, p: 0, i: 0, b: 0 };
      qs.forEach(function (q) {
        var im = imgs[q.no] || [], b = im.reduce(function (m, d) { return m + d.length; }, 0);
        if (out[out.length - 1].length && (c.n + 1 > 40 || c.p + q.parts.length > 80 || c.i + im.length > 40 || c.b + b > SEND_MAX)) { out.push([]); c = { n: 0, p: 0, i: 0, b: 0 }; }
        out[out.length - 1].push(q); c.n++; c.p += q.parts.length; c.i += im.length; c.b += b;
      });
      return out;
    }
    (function pack(lvl) {
      packImages(todo, lvl, function (imgs, size) {
        if (my !== gradingRun) return;
        if (size > SEND_MAX && lvl < SHRINK.length - 1) return pack(lvl + 1);
        var groups = chunk(todo, imgs);
        (function run(gi) {
          if (gi >= groups.length) { if (pt) clearInterval(pt); prog(true); return after(); }
          var g = groups[gi];
          send(body(g, imgs), function (err, d) {
            if (my !== gradingRun) return;
            if (err && err.status === 413 && groups.length === 1 && g.length > 1) { groups = split(g, imgs); return run(0); }
            apply(g, err, d);
            if (err && err.code === 'quota') groups.slice(gi + 1).forEach(function (r) { apply(r, err, null); });
            if (err && err.code === 'quota') { A.toast('Bugünkü otomatik puanlama hakkı doldu, yarın 11:00\'de yenilenir.'); if (pt) clearInterval(pt); prog(true); return after(); }
            run(gi + 1);
          });
        })(0);
      });
    })(0);
    function busy(on) {
      var m = document.getElementById('yzGmsg'), w = document.getElementById('yzBusy');
      if (w) w.hidden = !on;
      if (m) m.hidden = !!on;
    }
    function after() {
      if (my !== gradingRun) return;
      pend.q.forEach(function (q) { if (q.st === 'empty') q.parts.forEach(function (p) { p.ok = false; p.sc = 0; p.fb = 'Boş bıraktın.'; p.src = 'empty'; }); });
      pend.auto = okN; A.jset(PEND, pend);
      if (pend.q.some(function (q) { return q.st === 'self' && q.parts.some(function (p) { return p.ok == null; }); })) selfPage(pend, ex);
      else finalize(pend, ex);
    }
  }

  /* ---------- öz değerlendirme (otomatik puanlama yoksa) ---------- */
  function selfPage(pend, ex) {
    var sq = pend.q.filter(function (q) { return q.st === 'self'; }), allFail = !pend.q.some(function (q) { return q.st === 'ai'; });
    var html = '<div class="page-dn yz-self"><div class="card yz-warn"><b>⚠️ ' + (pend.quota ? 'Bugünkü otomatik puanlama hakkı doldu, yarın 11:00\'de yenilenir.' : allFail ? 'Otomatik puanlama şu an kullanılamıyor.' : sq.length + ' soru otomatik puanlanamadı.') + '</b>' +
      '<span>Cevabını MEB cevabı ve çözümüyle karşılaştır, her madde için <b>Doğru</b> ya da <b>Yanlış</b> seç. Sonuç doğruysa yol farklı olsa da doğru say. EXP buna göre verilir; dürüst ol, kendini kandırma! 💪</span></div>';
    sq.forEach(function (q) {
      var eq = qById(ex, q.no) || { parts: [] };
      html += '<div class="card yz-sq" data-no="' + q.no + '"><div class="yz-sq-h"><span class="num">' + q.no + '.</span><button class="dn-mini" data-show="' + q.no + '">Soruyu göster</button></div>' +
        '<img class="yz-qimg yz-zoom" src="' + eq.img + '" alt="" hidden data-qimg="' + q.no + '">' +
        ((photos[q.no] || []).length ? '<div class="yz-ph-l">' + photos[q.no].map(function (d) { return '<span class="yz-th"><img class="yz-zoom" src="' + d + '" alt=""></span>'; }).join('') + '</div>' : '') +
        q.parts.map(function (p, k) {
          return '<div class="yz-sp" data-k="' + k + '"><div class="yz-sp-l">' + esc(plab(p.l)) + '</div>' +
            '<div class="yz-ans"><small>Senin cevabın</small><div>' + (p.a ? br(p.a) : (q.nimg ? '<em>Fotoğrafta</em>' : '<em>Boş</em>')) + '</div></div>' +
            '<div class="yz-key"><small>MEB cevabı</small><div>' + br(eq.parts[k] ? eq.parts[k].k : '') + '</div></div>' +
            '<div class="yz-mk"><button data-mk="1" class="' + (p.ok === true ? 'on' : '') + '">✓ Doğru</button><button data-mk="0" class="' + (p.ok === false ? 'on' : '') + '">✗ Yanlış</button></div></div>';
        }).join('') +
        '<details class="yz-sol"><summary>MEB çözümünü göster</summary><img class="yz-simg yz-zoom" src="' + eq.sol + '" alt="" loading="lazy"></details></div>';
    });
    html += '<button class="btn yz-save" id="yzSave" disabled>Sonuçları Kaydet</button><p class="small yz-save-n" id="yzSaveN"></p></div>';
    app.innerHTML = html;
    function upd() {
      var left = 0; sq.forEach(function (q) { q.parts.forEach(function (p) { if (p.ok == null) left++; }); });
      document.getElementById('yzSave').disabled = !!left;
      document.getElementById('yzSaveN').textContent = left ? left + ' madde işaretlenmeyi bekliyor.' : 'Hepsi işaretlendi.';
    }
    app.querySelector('.yz-self').addEventListener('click', function (e) {
      var s = e.target.closest('[data-show]');
      if (s) { var im = app.querySelector('[data-qimg="' + s.getAttribute('data-show') + '"]'); im.hidden = !im.hidden; s.textContent = im.hidden ? 'Soruyu göster' : 'Soruyu gizle'; return; }
      var b = e.target.closest('[data-mk]'); if (b) {
        var no = +b.closest('.yz-sq').getAttribute('data-no'), k = +b.closest('.yz-sp').getAttribute('data-k');
        var q = sq.filter(function (x) { return x.no === no; })[0], p = q.parts[k];
        p.ok = b.getAttribute('data-mk') === '1'; p.sc = p.ok ? 100 : 0; p.src = 'self'; p.fb = '';
        [].forEach.call(b.parentNode.children, function (x) { x.classList.toggle('on', x === b); });
        A.jset(PEND, pend); upd(); return;
      }
      if (e.target.id === 'yzSave' && !e.target.disabled) finalize(pend, ex);
    });
    upd();
  }

  /* ---------- kayıt, EXP, istatistik ---------- */
  function finalize(pend, ex) {
    var xp = 0, cool = 0, before = null, after = null, ok = 0, n = 0, qs = [];
    pend.q.forEach(function (q) {
      var s = 0;
      q.parts.forEach(function (p) {
        n++; s += p.sc || 0;
        if (q.st !== 'empty' && (p.a || q.nimg)) A.logAnswer('yz-' + ex.sid, !!p.ok);
        if (p.ok) {
          ok++;
          var r = A.awardXP('yz-' + ex.id, 'zr:' + q.no + '-' + (p.l || 'x'));
          if (r.xp) { xp += r.xp; if (before == null) before = r.before; after = r.after; p.x = r.xp; } else cool++;
        }
      });
      qs.push({ no: q.no, st: q.st, s: Math.round(s / q.parts.length), sum: q.sum || '', parts: q.parts.map(function (p) { return { l: p.l, a: p.a, ok: !!p.ok, sc: p.sc || 0, fb: p.fb || '', sa: p.sa || '', src: p.src || '', x: p.x || 0 }; }), nimg: q.nimg });
    });
    var score = qs.length ? Math.round(qs.reduce(function (m, q) { return m + q.s; }, 0) / qs.length) : 0;
    var S = { kind: 'yazili', exam: ex.id, sid: ex.sid, title: ex.title, score: score, ok: ok, n: n, nq: qs.length, xp: xp, cool: cool,
      auto: qs.filter(function (q) { return q.st === 'ai'; }).length, self: qs.filter(function (q) { return q.st === 'self'; }).length, used: pend.used, min: pend.min, timeUp: pend.timeUp };
    var rec = { lid: pend.lid, id: null, at: Date.now(), summary: S, data: { q: qs } };
    var h = hist(); h.unshift(rec); while (h.length > 60) h.pop(); A.jset(HIST, h);
    localStorage.removeItem(PEND); phClear();
    cloud('deneme_save', { p_token: window.LGSCloud ? window.LGSCloud.token() : '', p_summary: S, p_data: rec.data }, function (err, id) {
      if (err || !id) return;
      var h2 = hist(); h2.forEach(function (x) { if (x.lid === rec.lid) x.id = id; }); A.jset(HIST, h2);
    });
    location.hash = '#/yazili/r/' + rec.lid;
    if (xp) setTimeout(function () { A.gainFx({ xp: xp, before: before, after: after }, null); }, 1400);
  }

  /* ================= SONUÇ ================= */
  function reportPage(id) {
    A.setCrumbs([{ text: 'Yazılı', href: '#/yazili' }, { text: 'Sonuç' }]); document.title = 'Yazılı Sonucu · LGS Kışlası';
    var rec = hist().filter(function (x) { return x.lid === id || x.id === id; })[0];
    if (rec) return render(rec);
    app.innerHTML = '<p class="loading">Sonuç yükleniyor…</p>';
    cloud('deneme_get', { p_token: window.LGSCloud ? window.LGSCloud.token() : '', p_id: id }, function (err, d) {
      if (err || !d || !d.data || !d.summary || d.summary.kind !== 'yazili') { app.innerHTML = '<p class="empty">Bu sonuç bulunamadı. <a href="#/yazili">Yazılılara dön</a></p>'; return; }
      render({ id: d.id, at: new Date(d.at).getTime(), summary: d.summary, data: d.data });
    });
  }
  function render(rec) {
    var S = rec.summary;
    app.innerHTML = '<p class="loading">Sonuç hazırlanıyor…</p>';
    loadExam(S.exam, function (ex) {
      ex = ex || { q: [], sid: S.sid };
      var p = S.score, rc = scol(p), bad = 0, emp = 0;
      rec.data.q.forEach(function (q) { q.parts.forEach(function (x) { if (!x.ok) { if (x.src === 'empty') emp++; else bad++; } }); });
      var verdict = p >= 85 ? 'Muhteşem! Yazılıya hazırsın.' : p >= 70 ? 'Çok iyi! Küçük eksikleri kapat.' : p >= 50 ? 'İyi gidiyorsun, yanlışlarına odaklan.' : p >= 30 ? 'Konuları tekrar et, çözümleri incele.' : 'Zorlu geçti. Çözümleri dikkatle oku, tekrar dene!';
      var html = '<div class="page-dn dn-rep yz-rep">' +
        '<div class="dn-score" style="--rc:' + rc + '"><div class="dn-score-ring">' + ringSvg(p, rc, 150, true) + '<div class="dn-score-c"><b>' + p + '</b><small>/ 100</small></div></div>' +
        '<div class="dn-score-m"><div class="dn-verdict">' + verdict + '</div><div class="dn-kpis">' +
        kpi('✓', S.ok, 'Doğru madde', 'ok') + kpi('✗', bad, 'Yanlış', 'bad') + kpi('○', emp, 'Boş', 'e') + '</div>' +
        '<div class="small">' + esc(S.title) + '<br>' + fdate(rec.at) + ' · ' + dk(S.used || 0) + ' / ' + S.min + ' dk' + (S.timeUp ? ' · süre doldu' : '') + '</div></div></div>' +
        '<div class="dn-xp card"><span class="dn-xp-n">+' + A.nf(S.xp || 0) + ' <small>EXP</small></span><span class="small">' +
        (S.xp ? 'Sonucu doğru her madde bir zor soru kadar EXP kazandırdı.' : 'Bu yazılıdan EXP kazanılmadı.') +
        (S.cool ? ' ' + S.cool + ' doğru madde son 7 gün içinde EXP verdiği için tekrar vermedi.' : '') + '</span></div>' +
        (S.self ? '<div class="small yz-note">' + (S.auto ? S.self + ' soru otomatik puanlanamadı, kendi işaretlemenle değerlendirildi.' : 'Otomatik puanlama kullanılamadığı için sonuçlar kendi işaretlemenle hesaplandı.') + '</div>' : '') +
        '<h2 class="dn-h2">Soru Soru Sonuç</h2>';
      html += rec.data.q.map(function (q) {
        var eq = qById(ex, q.no) || { parts: [] }, c = scol(q.s);
        return '<div class="card yz-rq" style="--rc:' + c + '"><div class="yz-rq-h"><span class="num">' + q.no + '.</span><span class="yz-rq-chips">' + q.parts.map(function (x) { return '<i class="' + (x.ok ? 'ok' : x.src === 'empty' ? 'e' : 'bad') + '">' + esc(x.l || '●') + '</i>'; }).join('') + '</span><b class="yz-rq-s">' + q.s + '<small>/100</small></b></div>' +
          (eq.img ? '<details class="yz-sol"><summary>Soruyu göster</summary><img class="yz-qimg yz-zoom" src="' + eq.img + '" alt="" loading="lazy"></details>' : '') +
          q.parts.map(function (x, k) {
            return '<div class="yz-rp ' + (x.ok ? 'ok' : x.src === 'empty' ? 'e' : 'bad') + '"><div class="yz-rp-h"><span class="yz-sp-l">' + esc(plab(x.l)) + '</span><span class="yz-rp-r">' + (x.ok ? '✓ Doğru' : x.src === 'empty' ? '○ Boş' : '✗ Yanlış') + '</span><span class="yz-rp-sc">' + x.sc + '/100</span>' + (x.x ? '<span class="yz-rp-x">+' + x.x + ' EXP</span>' : '') + '</div>' +
              '<div class="yz-ans"><small>Senin cevabın</small><div>' + (x.a ? br(x.a) : x.sa ? '<em>Fotoğraftan okunan:</em> ' + br(x.sa) : '<em>' + (q.nimg ? 'Fotoğrafta' : 'Boş') + '</em>') + '</div></div>' +
              '<div class="yz-key"><small>MEB cevabı</small><div>' + br(eq.parts[k] ? eq.parts[k].k : '') + '</div></div>' +
              (x.fb && x.src === 'ai' ? '<div class="yz-fb"><small>🤖 Öğretmen yorumu</small><div>' + br(x.fb) + '</div></div>' : x.src === 'self' ? '<div class="small yz-selfm">Kendin işaretledin.</div>' : '') + '</div>';
          }).join('') +
          (eq.sol ? '<details class="yz-sol"' + (q.s < 100 ? ' open' : '') + '><summary>MEB çözümü</summary><img class="yz-simg yz-zoom" src="' + eq.sol + '" alt="" loading="lazy"></details>' : '') + '</div>';
      }).join('');
      html += '<div class="dn-end"><button class="btn" data-start="' + esc(S.exam) + '">↻ Tekrar Çöz</button><a class="btn ghost" href="#/yazili">Tüm Yazılılar</a></div></div>';
      app.innerHTML = html;
      app.querySelector('.yz-rep').addEventListener('click', function (e) { var b = e.target.closest('[data-start]'); if (b) startConfirm(b.getAttribute('data-start')); });
      requestAnimationFrame(function () { var r = app.querySelector('.dn-rep'); if (r) r.classList.add('go'); });
    });
  }
  function kpi(i, n, l, c) { return '<span class="dn-kpi ' + c + '"><b>' + n + '</b><small>' + i + ' ' + l + '</small></span>'; }
  function ringSvg(p, c, size, anim) {
    var r = 42, C = 2 * Math.PI * r;
    return '<svg class="dn-ring' + (anim ? ' anim' : '') + '" viewBox="0 0 100 100" width="' + size + '" height="' + size + '"><circle cx="50" cy="50" r="' + r + '" class="dn-ring-bg"/>' +
      '<circle cx="50" cy="50" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="9" stroke-linecap="round" stroke-dasharray="' + (C * p / 100).toFixed(1) + ' ' + C.toFixed(1) + '" transform="rotate(-90 50 50)" style="--len:' + C.toFixed(1) + '"/>' +
      (size < 100 ? '<text x="50" y="57" text-anchor="middle" class="dn-ring-t">' + p + '</text>' : '') + '</svg>';
  }
  function trendSvg(vals, col, gid) {
    var W = 320, H = 120, n = vals.length, pts = vals.map(function (v, i) { return [20 + i * (W - 40) / Math.max(1, n - 1), 12 + (H - 30) * (1 - v / 100), v]; });
    var line = pts.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ');
    var area = '20,' + (H - 18) + ' ' + line + ' ' + pts[n - 1][0].toFixed(1) + ',' + (H - 18);
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" class="dn-trend-s"><defs><linearGradient id="yzTg' + gid + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + col + '" stop-opacity=".45"/><stop offset="1" stop-color="' + col + '" stop-opacity="0"/></linearGradient></defs>' +
      [0, 50, 100].map(function (v) { var y = 12 + (H - 30) * (1 - v / 100); return '<line x1="20" x2="' + (W - 20) + '" y1="' + y + '" y2="' + y + '" class="dn-grid"/><text x="2" y="' + (y + 3) + '" class="dn-ax">' + v + '</text>'; }).join('') +
      '<polygon points="' + area + '" fill="url(#yzTg' + gid + ')"/><polyline points="' + line + '" fill="none" stroke="' + col + '" stroke-width="2.5" stroke-linejoin="round"/>' +
      pts.map(function (p) { return '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="3.5" fill="#0b1220" stroke="' + col + '" stroke-width="2"/><text x="' + p[0].toFixed(1) + '" y="' + (p[1] - 8).toFixed(1) + '" text-anchor="middle" class="dn-pv">' + p[2] + '</text>'; }).join('') + '</svg>';
  }

  window.LGSYazili = {
    stop: stop,
    page: function (a, b) {
      routed = true; stop();
      if (a === 'coz') solvePage();
      else if (a === 'puan') gradePage();
      else if (a === 'r' && b) reportPage(decodeURIComponent(b));
      else listPage();
    }
  };
  // app.js ilk yönlendirmeyi bu dosya yüklenmeden yapmış olabilir
  setTimeout(function () { if (!routed && /^#\/yazili/.test(location.hash) && A.route) A.route(); }, 0);
})();
