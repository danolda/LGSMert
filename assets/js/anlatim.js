/* LGS Kışlası · Adım Adım Anlatım
   Sahne sahne kurulan animasyonlu konu anlatımı: sesli anlatım (tr-TR), altyazı, ara sorular, EXP.
   Ders verisi: data/anlatim/<konuId>.js (biçim: tools/ANLATIM.md), liste: data/anlatim/index.js */
(function () {
  'use strict';
  var A = window.LGSApp;
  if (!A) return;
  var app = document.getElementById('app');
  var PKEY = A.KEY + 'anlatim';        // ilerleme: { konuId: { far, i, cp:{}, done, pass, at } }
  var OKEY = A.KEY + 'anlatimPref';    // tercih: { rate, mute }
  var IDX = function () { return window.LGS_AN_INDEX || {}; };
  var CP_KEY = 'ko:cp';                // ara soru: kolay soru EXP'si (10)
  var END_N = 10;                      // bitirme: 10 zor soru EXP'si (200)
  var esc = A.esc, fmt = A.fmt;

  function progAll() { return A.jget(PKEY, {}); }
  function progOf(id) { var p = progAll()[id] || {}; p.far = p.far || 0; p.i = p.i || 0; p.cp = p.cp || {}; p.done = p.done || 0; p.pass = p.pass || 1; return p; }
  function progSet(id, p) { var all = progAll(); p.at = Date.now(); all[id] = p; A.jset(PKEY, all); }
  function pref() { var o = A.jget(OKEY, {}); return { rate: o.rate === 1.25 ? 1.25 : 1, mute: !!o.mute }; }
  function prefSet(o) { A.jset(OKEY, o); }

  function loadScript(src, cb) {
    var sc = document.createElement('script');
    sc.src = src + '?v=' + (window.LGS_AN_V || 1);
    sc.onload = function () { cb(true); }; sc.onerror = function () { cb(false); };
    document.head.appendChild(sc);
  }
  /* ---------- hazır seslendirme (tools/anlatim_ses.py · tr-TR-AhmetNeural mp3) ---------- */
  var MKEY = {};                       // konuId → meta.json (yoksa null)
  function metaLoad(id, cb) {
    if (id in MKEY) return cb(MKEY[id]);
    var done = false, fin = function (m) { if (done) return; done = true; MKEY[id] = m; cb(m); };
    try {
      fetch('audio/anlatim/' + id + '/meta.json?v=' + (window.LGS_AN_V || 1), { cache: 'no-cache' })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (m) { fin(m && m.seg ? m : null); }, function () { fin(null); });
    } catch (e) { fin(null); }
    setTimeout(function () { fin(null); }, 6000);
  }
  function srcHash(s, v) {             // FNV-1a 32 bit (kod noktası), anlatim_ses.py ile aynı
    var h = 0x811c9dc5, t = String(s || '') + '\u0001' + String(v || '');
    for (var i = 0; i < t.length; i++) {
      var c = t.codePointAt(i); if (c > 0xffff) i++;
      h ^= c; h = Math.imul(h, 0x01000193) >>> 0;
    }
    return ('0000000' + h.toString(16)).slice(-8);
  }
  // seslendirme parçası: { url, d, w } ya da null (metin değişmiş/ses yok)
  function segOf(key, s, v) {
    var m = S && S.meta, g = m && m.seg[key];
    if (!g || g.src !== srcHash(s, v)) return null;
    return { key: key, url: 'audio/anlatim/' + S.id + '/' + key + '.mp3?h=' + g.a, d: g.d || 0, w: g.w || [] };
  }
  var SILENT = 'data:audio/wav;base64,UklGRiwAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQgAAACAgICAgICAgA==';
  var warmed = {};
  function warm(seg) {                 // sonraki parçayı önceden indir (servis çalışanı önbelleğe alır)
    if (!seg || warmed[seg.url]) return;
    warmed[seg.url] = 1;
    try { fetch(seg.url).catch(function () { delete warmed[seg.url]; }); } catch (e) {}
  }

  function lesson(id, cb) {
    var L = (window.LGS_AN || {})[id];
    if (L) return cb(L);
    if (!IDX()[id]) return cb(null);
    loadScript('data/anlatim/' + id + '.js', function () { cb((window.LGS_AN || {})[id] || null); });
  }

  /* ---------- konuşma metni: altyazıdaki matematik gösterimini okunur hâle getir ---------- */
  var DE = { 0: 'da', 1: 'de', 2: 'de', 3: 'te', 4: 'te', 5: 'te', 6: 'da', 7: 'de', 8: 'de', 9: 'da' };
  function bulunma(n) {          // "8'de", "10'da", "27'de", "1000'de"
    n = String(n).replace(/\D/g, '');
    if (!n) return "'de";
    var m = n.match(/0+$/), z = m ? m[0].length : 0;
    if (z === 0) return "'" + DE[n.slice(-1)];
    if (z === 1) return "'" + ({ 1: 'da', 2: 'de', 3: 'da', 4: 'ta', 5: 'de', 6: 'ta', 7: 'te', 8: 'de', 9: 'da' }[n.slice(-2, -1)] || 'da');
    return "'de";               // yüz, bin, milyon: yüzde, binde, milyonda (milyon için yakın)
  }
  function speakText(st) {
    if (st.v) return st.v;
    var t = String(st.s || '');
    t = t.replace(/\{\{([^{}|]+)\|([^{}]+)\}\}/g, function (_, a, b) {
      a = a.replace(/<[^>]+>/g, ''); b = b.replace(/<[^>]+>/g, '');
      return /^\d+$/.test(b.trim()) ? ' ' + b.trim() + bulunma(b) + ' ' + a + ' ' : ' ' + a + ' bölü ' + b + ' ';
    });
    t = t.replace(/<sup>([^<]*)<\/sup>/g, function (_, e) { return ' üssü ' + e.replace(/[−-]/g, 'eksi ') + ' '; });
    t = t.replace(/<br\s*\/?>|<\/(p|div|li|td|tr)>/gi, ' ').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, ' ve ');
    t = t.replace(/·|×/g, ' çarpı ').replace(/÷/g, ' bölü ').replace(/≠/g, ' eşit değildir ').replace(/≤/g, ' küçük eşit ')
      .replace(/⇒/g, ', o hâlde ').replace(/→/g, ', ').replace(/=/g, ' eşittir ').replace(/</g, ' küçüktür ').replace(/>/g, ' büyüktür ')
      .replace(/\+/g, ' artı ').replace(/−/g, ' eksi ').replace(/…|\.\.\./g, ', ').replace(/[“”"«»]/g, '')
      .replace(/(^|[\s(\/])-(?=[a-zçğıöşü])/gi, '$1').replace(/\//g, ', ').replace(/[()]/g, ' ').replace(/\s+/g, ' ');
    return t.trim();
  }

  /* ---------- ses ---------- */
  var SS = window.speechSynthesis, voice = null, voicesTried = false;
  function pickVoice() {
    if (!SS || !SS.getVoices) return null;
    var vs = SS.getVoices() || [], tr = vs.filter(function (v) { return /^tr([-_]|$)/i.test(v.lang); });
    if (!tr.length) return null;
    tr.sort(function (a, b) { return score(b) - score(a); });
    return tr[0];
    function score(v) { return (/google|yelda|natural|neural|premium|enhanced/i.test(v.name) ? 2 : 0) + (v.localService ? 1 : 0); }
  }
  function initVoice(cb) {
    voice = pickVoice();
    if (voice || voicesTried || !SS) { voicesTried = true; return cb(); }
    voicesTried = true;
    var done = false, fin = function () { if (done) return; done = true; voice = pickVoice(); cb(); };
    try { SS.addEventListener('voiceschanged', fin); } catch (e) {}
    setTimeout(fin, 1200);
  }

  /* ---------- oynatıcı durumu ---------- */
  var S = null;          // { id, L, p, i, pos, applied, playing, tok, sceneDone, solved }
  function hush() {                    // konuşmayı/sesi kes
    try { if (SS) SS.cancel(); } catch (e) {}
    if (S && S.au) { try { S.au.pause(); } catch (e) {} S.auOn = false; S.held = false; cancelAnimationFrame(S.raf); }
  }
  function stop() {
    if (S) { S.tok++; S.playing = false; clearTimeout(S.tm); clearTimeout(S.safe); }
    hush();
    if (S && S.au) { try { S.au.removeAttribute('src'); S.au.load(); } catch (e) {} }
    document.body.classList.remove('an-on');
    S = null;
  }

  function hook(tid) {
    var info = IDX()[tid];
    if (!info) return;
    var h1 = app.querySelector('h1'); if (!h1 || app.querySelector('.an-open')) return;
    var p = progAll()[tid], n = info.n || 0, st = '';
    if (p && p.done) st = '✓ Tamamlandı';
    else if (p && p.far) st = '%' + Math.round(Math.min(1, p.far / Math.max(1, n)) * 100) + ' · devam et';
    else st = (info.dk ? info.dk + ' dk · ' : '') + (n ? n + ' sahne' : '');
    var a = document.createElement('a');
    a.className = 'an-open'; a.href = '#/anlatim/' + tid;
    a.innerHTML = '<span class="an-open-i">▶</span><span><b>Adım Adım Anlatım</b><small>' + esc(st) + '</small></span>';
    h1.parentNode.insertBefore(a, h1.nextSibling);
  }

  var routed = false;
  function page(id) {
    routed = true; stop();
    var info = A.subjOf ? A.subjOf(id) : null;
    if (!info || !IDX()[id]) { app.innerHTML = '<p class="empty">Bu konu için adım adım anlatım henüz yok. <a href="#/">Ana sayfaya dön</a></p>'; return; }
    A.setCrumbs([{ text: info.s.name, href: '#/d/' + info.s.id }, { text: info.t.title, href: '#/k/' + id }, { text: 'Anlatım' }]);
    document.title = 'Adım Adım Anlatım · ' + info.t.title + ' · LGS Kışlası';
    app.innerHTML = '<p class="loading">Anlatım yükleniyor…</p>';
    metaLoad(id, function () {});      // ses listesi giriş ekranında hazır olsun
    lesson(id, function (L) {
      if (!L) { app.innerHTML = '<p class="empty">Anlatım yüklenemedi. İnternet bağlantını kontrol et.</p>'; return; }
      intro(id, L, info);
    });
  }

  function cpCount(L) { return L.scenes.filter(function (s) { return s.cp; }).length; }
  function intro(id, L, info) {
    var p = progOf(id), N = L.scenes.length, mid = p.far > 0 && p.far < N && p.fin !== p.pass;
    var cpn = cpCount(L);
    app.innerHTML = '<div class="an-intro" style="--c:' + info.s.color + '">' +
      '<a class="back" href="#/k/' + id + '">← ' + esc(info.t.title) + '</a>' +
      '<div class="an-hero"><div class="an-hero-i">' + info.s.icon + '</div><div><small>' + esc(info.s.name) + ' · Adım Adım Anlatım</small><h1>' + esc(L.title || info.t.title) + '</h1></div></div>' +
      '<p class="lead">' + esc(L.desc || '') + '</p>' +
      '<ul class="an-facts"><li><b>' + N + '</b><span>sahne</span></li><li><b>' + cpn + '</b><span>ara soru</span></li><li><b>~' + (IDX()[id].dk || Math.round(N * 0.8)) + '</b><span>dakika</span></li></ul>' +
      '<div class="card an-rules"><p>🎧 Sesli anlatım ve altyazı birlikte ilerler. Geri dönebilirsin; ama <b>izlemediğin sahneye atlayamazsın</b>.</p>' +
      '<p>❓ Ara soruları doğru cevaplamadan devam edilmez. İlk denemede doğruysa <b>+10 EXP</b>.</p>' +
      '<p>🏁 Anlatımı bitirince <b>+200 EXP</b> (10 zor soru kadar). Aynı ödül 7 gün sonra yeniden alınabilir.</p></div>' +
      (p.done ? '<p class="small">✓ Bu anlatımı ' + p.done + ' kez bitirdin.</p>' : '') +
      '<div class="an-go">' +
      (mid ? '<button class="btn" id="anGo">▶ Kaldığın yerden devam (' + (p.i + 1) + '/' + N + ')</button><button class="btn ghost" id="anNew">Baştan başla</button>'
           : '<button class="btn" id="anGo">▶ ' + (p.done ? 'Yeniden izle' : 'Anlatımı başlat') + '</button>') +
      '</div></div>';
    document.getElementById('anGo').addEventListener('click', function () {
      if (!mid) { p = { far: 0, i: 0, cp: {}, done: p.done || 0, pass: (p.pass || 0) + 1 }; progSet(id, p); }
      start(id, L, info, mid ? Math.min(p.i, p.far) : 0);
    });
    var nb = document.getElementById('anNew');
    if (nb) nb.addEventListener('click', function () {
      p = { far: 0, i: 0, cp: {}, done: p.done || 0, pass: (p.pass || 0) + 1 }; progSet(id, p);
      start(id, L, info, 0);
    });
  }

  function start(id, L, info, at) {
    var pr = pref();
    S = { id: id, L: L, info: info, p: progOf(id), i: at, pos: 0, applied: -1, playing: true, tok: 0, rate: pr.rate, mute: pr.mute, fast: window.LGS_AN_FAST || 0,
          meta: MKEY[id] || null };
    // iOS: ilk ses kullanıcı dokunuşu içinde başlamalı. Ses öğesi bu dokunuşta sessiz bir parçayla açılır,
    // sonraki tüm parçalar aynı öğede çalar.
    var au = S.au = document.createElement('audio');
    au.preload = 'auto'; au.setAttribute('playsinline', ''); au.setAttribute('webkit-playsinline', '');
    au.className = 'an-au'; au.hidden = true;
    try { au.src = SILENT; var pp = au.play(); if (pp && pp.catch) pp.catch(function () {}); } catch (e) {}
    if (SS && !S.mute) { try { SS.cancel(); var u = new SpeechSynthesisUtterance(' '); u.volume = 0; SS.speak(u); } catch (e) {} }
    document.body.classList.add('an-on');
    var N = L.scenes.length;
    app.innerHTML = '<div class="an" style="--c:' + info.s.color + '">' +
      '<div class="an-top"><a class="an-x" href="#/k/' + id + '" aria-label="Anlatımdan çık">✕</a>' +
      '<div class="an-tt"><small>' + esc(info.t.title) + '</small><b id="anSt"></b></div><span class="an-cnt" id="anCnt"></span></div>' +
      '<div class="an-dots" id="anDots">' + L.scenes.map(function (s, k) { return '<i data-k="' + k + '" class="' + (s.cp ? 'cpd' : '') + '"></i>'; }).join('') + '</div>' +
      '<section class="an-stage" id="anStage"></section>' +
      '<div class="an-dock"><div class="an-cap" id="anCap" aria-live="polite"></div>' +
      '<div class="an-ctl">' +
      '<button id="anPrev" aria-label="Önceki sahne">◀</button>' +
      '<button id="anRep" aria-label="Sahneyi tekrar oynat">⟲</button>' +
      '<button id="anPlay" class="pp" aria-label="Duraklat">❚❚</button>' +
      '<button id="anRate" aria-label="Hız">' + (S.rate === 1 ? '1x' : '1.25x') + '</button>' +
      '<button id="anMute" aria-label="Ses">' + (S.mute ? '🔇' : '🔊') + '</button>' +
      '<button id="anNext" class="nx" aria-label="Sonraki sahne" disabled>▶</button>' +
      '</div></div></div>';
    app.querySelector('.an').appendChild(au);
    if (!S.meta) metaLoad(id, function (m) { if (S && S.id === id) S.meta = m; });
    var ctl = app.querySelector('.an-ctl');
    ctl.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b || !S || !S.ready) return;
      if (b.id === 'anPrev') go(S.i - 1);
      else if (b.id === 'anNext') next();
      else if (b.id === 'anRep') go(S.i, true);
      else if (b.id === 'anPlay') toggle();
      else if (b.id === 'anRate') {
        S.rate = S.rate === 1 ? 1.25 : 1; b.textContent = S.rate === 1 ? '1x' : '1.25x'; savePref();
        if (S.auOn || S.held) { try { S.au.playbackRate = S.rate; } catch (e) {} } else restartStep();
      }
      else if (b.id === 'anMute') {
        S.mute = !S.mute; b.textContent = S.mute ? '🔇' : '🔊'; savePref();
        if (S.sceneDone) { if (S.mute) hush(); } else restartStep();
      }
    });
    document.getElementById('anDots').addEventListener('click', function (e) {
      var d = e.target.closest('i[data-k]'); if (!d || !S || !S.ready) return;
      var k = +d.getAttribute('data-k');
      if (k > S.p.far) { A.toast('Önce bu sahneye kadar izlemelisin.'); return; }
      go(k);
    });
    initVoice(function () {
      if (!S) return;
      if (!voice && !S.mute && !S.meta) S.novoice = true;
      go(at);
    });
  }
  function savePref() { prefSet({ rate: S.rate, mute: S.mute }); }

  function go(k, replay) {
    if (!S) return;
    var N = S.L.scenes.length;
    if (k < 0 || k >= N) return;
    if (k > S.p.far) { A.toast('Önce bu sahneyi bitirmelisin.'); return; }
    S.tok++; clearTimeout(S.tm); clearTimeout(S.safe); hush();
    S.ready = true; S.i = k; S.pos = 0; S.applied = -1; S.sceneDone = false; S.solved = false; S.playing = true;
    S.p.i = k; progSet(S.id, S.p);
    renderScene();
    window.scrollTo({ top: 0, behavior: 'instant' });
    var tok = S.tok; setTimeout(function () { if (S && S.tok === tok) playStep(); }, (replay ? 250 : 450) / (S.fast || 1));
  }

  function renderScene() {
    var sc = S.L.scenes[S.i], N = S.L.scenes.length;
    document.getElementById('anSt').textContent = sc.t || '';
    document.getElementById('anCnt').textContent = (S.i + 1) + '/' + N;
    var stage = document.getElementById('anStage');
    stage.className = 'an-stage' + (sc.cp ? ' is-cp' : '');
    stage.innerHTML = '<h2 class="an-h"><span>' + (sc.cp ? '❓' : (S.i + 1)) + '</span>' + esc(sc.t || '') + '</h2>' +
      '<div class="an-body" id="anBody">' + (sc.base ? fmt(sc.base) : '') + '</div>' + (sc.cp ? cpHtml(sc.cp) : '');
    prepDraw(stage);
    if (A.fitSvgs) A.fitSvgs(stage);
    if (sc.cp) bindCp(sc.cp);
    cap('');
    paintCtl();
  }
  function prepDraw(root) {
    [].forEach.call(root.querySelectorAll('.dr'), function (el) { try { el.setAttribute('pathLength', '100'); } catch (e) {} });
  }
  function paintCtl() {
    if (!S) return;
    var N = S.L.scenes.length, sc = S.L.scenes[S.i];
    [].forEach.call(document.querySelectorAll('#anDots i'), function (d, k) {
      d.classList.toggle('on', k === S.i); d.classList.toggle('seen', k <= S.p.far); d.classList.toggle('lock', k > S.p.far);
    });
    var canNext = S.i < S.p.far || (S.sceneDone && (!sc.cp || S.solved));
    var nb = document.getElementById('anNext');
    nb.disabled = !canNext;
    nb.classList.toggle('ready', !!canNext);
    nb.textContent = S.i === N - 1 && canNext ? '🏁' : '▶';
    nb.setAttribute('aria-label', S.i === N - 1 ? 'Bitir' : 'Sonraki sahne');
    document.getElementById('anPrev').disabled = S.i === 0;
    var pb = document.getElementById('anPlay');
    pb.textContent = S.playing ? '❚❚' : '▶'; pb.setAttribute('aria-label', S.playing ? 'Duraklat' : 'Oynat');
  }
  function cap(html) {
    var c = document.getElementById('anCap'); if (!c) return;
    c.classList.remove('kar');
    c.innerHTML = (S && S.novoice && !S.mute ? '<i class="an-nv">🔈 Bu cihazda Türkçe ses yok, altyazıyla ilerliyor</i>' : '') + (html ? '<span class="an-ct">' + fmt(html) + '</span>' : '');
  }
  // altyazıyı sözcüklere böl (sesle eş zamanlı vurgu için)
  function capWords() {
    var c = document.getElementById('anCap'), t = c && c.querySelector('.an-ct');
    if (!t) return [];
    var tw = document.createTreeWalker(t, NodeFilter.SHOW_TEXT, null, false), nodes = [], n;
    while ((n = tw.nextNode())) nodes.push(n);
    nodes.forEach(function (tn) {
      var parts = tn.nodeValue.split(/(\s+)/), f = document.createDocumentFragment();
      parts.forEach(function (p) {
        if (!p) return;
        if (/^\s+$/.test(p)) { f.appendChild(document.createTextNode(p)); return; }
        var sp = document.createElement('span'); sp.className = 'wd'; sp.textContent = p; f.appendChild(sp);
      });
      tn.parentNode.replaceChild(f, tn);
    });
    return [].slice.call(t.querySelectorAll('span.wd'));
  }

  function applyStep(st) {
    var stage = document.getElementById('anStage'), body = document.getElementById('anBody');
    var focus = null;
    if (st.h) {
      var d = document.createElement('div'); d.className = 'an-blk' + (st.cls ? ' ' + st.cls : '');
      d.innerHTML = fmt(st.h); body.appendChild(d); prepDraw(d);
      if (A.fitSvgs) A.fitSvgs(d);
      focus = d;
    }
    if (st.on) [].forEach.call(stage.querySelectorAll(st.on), function (el) { el.classList.add('in'); focus = focus || el; });
    if (st.off) [].forEach.call(stage.querySelectorAll(st.off), function (el) { el.classList.remove('hl'); });
    if (st.hide) [].forEach.call(stage.querySelectorAll(st.hide), function (el) { el.classList.remove('in'); });
    if (st.mk) [].forEach.call(stage.querySelectorAll(st.mk), function (el) { el.classList.remove('hl'); void el.getBoundingClientRect(); el.classList.add('hl'); focus = focus || el; });
    if (focus && focus.scrollIntoView) {
      var el = focus.closest ? (focus.closest('svg') || focus) : focus;
      try { el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) {}
    }
  }

  function playStep() {
    if (!S || !S.playing) return;
    var sc = S.L.scenes[S.i], steps = sc.steps || [];
    if (S.pos >= steps.length) return sceneEnd();
    var k = S.pos, st = steps[k];
    if (S.applied < k) { applyStep(st); S.applied = k; }
    cap(st.s);
    var tok = ++S.tok;
    narrate(st, function () {
      if (!S || S.tok !== tok) return;
      S.pos = k + 1;
      S.tm = setTimeout(function () { if (S && S.tok === tok) playStep(); }, gap(st));
    });
  }
  function gap(st) { return ((st.w || 0) + 450) / S.rate / (S.fast || 1); }
  function readMs(text) { return Math.max(1800, Math.min(11000, text.length * 62)); }
  // adım anahtarı: "<sahne>-<adım>", ara soruda "<sahne>-why" / "<sahne>-hint"
  function stepSeg(i, k) {
    var sc = S.L.scenes[i], st = sc && sc.steps && sc.steps[k];
    return st ? segOf(i + '-' + k, st.s, st.v) : null;
  }
  function nextSeg(st) {
    var sc = S.L.scenes[S.i];
    if (st.key) return null;
    if (S.pos + 1 < (sc.steps || []).length) return stepSeg(S.i, S.pos + 1);
    if (sc.cp && sc.cp.why) return segOf(S.i + '-why', sc.cp.why, sc.cp.whyV);
    return stepSeg(S.i + 1, 0);
  }
  function narrate(st, done) {
    var text = speakText(st), fired = false, ms = readMs(text) / S.rate / (S.fast || 1);
    var fin = function () { if (fired) return; fired = true; clearTimeout(S && S.safe); if (S) { S.auOn = false; S.held = false; cancelAnimationFrame(S.raf); } done(); };
    if (!text) return setTimeout(fin, 300 / (S.fast || 1));
    var seg = !S.mute && S.au ? (st.key ? segOf(st.key, st.s, st.v) : stepSeg(S.i, S.pos)) : null;
    if (seg) return playSeg(seg, st, fin, function () { speak(st, text, ms, fin); });
    speak(st, text, ms, fin);
  }
  // hazır mp3 ile oynat; yüklenemezse fallback (Web Speech)
  function playSeg(seg, st, fin, fallback) {
    var au = S.au, tok = S.tok, words = capWords(), c = document.getElementById('anCap'), lastN = -1, failed = false;
    if (words.length && seg.w.length) c.classList.add('kar');
    var mark = function () {
      if (!S || S.tok !== tok || !S.auOn) return;
      var t = au.currentTime * 1000, n = 0;
      while (n < seg.w.length && seg.w[n] <= t + 60) n++;
      var k = seg.w.length ? Math.round(n / seg.w.length * words.length) : words.length;
      if (k !== lastN) {
        for (var j = 0; j < words.length; j++) { words[j].classList.toggle('sd', j < k); words[j].classList.toggle('nw', j === k - 1); }
        lastN = k;
      }
      S.raf = requestAnimationFrame(mark);
    };
    var fail = function () {
      if (failed || !S || S.tok !== tok) return; failed = true;
      clearTimeout(S.safe); S.auOn = false; cancelAnimationFrame(S.raf); c.classList.remove('kar');
      fallback();
    };
    var arm = function () {
      clearTimeout(S.safe);
      var left = Math.max(0, seg.d - au.currentTime * 1000);
      S.safe = setTimeout(function () { if (S && S.tok === tok && S.auOn && !au.paused) fin(); }, left / S.rate * 1.6 + 5000);
    };
    au.onended = function () { if (!S || S.tok !== tok) return; words.forEach(function (w) { w.classList.add('sd'); w.classList.remove('nw'); }); fin(); };
    au.onerror = function () { if (au.src.indexOf(seg.url) >= 0 || au.currentSrc.indexOf(seg.url) >= 0) fail(); };
    au.onplaying = function () { if (S && S.tok === tok) { cancelAnimationFrame(S.raf); S.raf = requestAnimationFrame(mark); } };
    S.auOn = true; S.held = false; S.auSeg = seg; S.auArm = arm;
    try {
      au.src = seg.url; au.playbackRate = S.rate; au.defaultPlaybackRate = S.rate;
      var pr = au.play();
      if (pr && pr.catch) pr.catch(function (e) {
        if (!S || S.tok !== tok) return;
        if (e && e.name === 'NotAllowedError') {       // dokunuş gerekiyor: duraklat, ▶ ile sürer
          S.auOn = false; S.held = true; S.playing = false; clearTimeout(S.safe); paintCtl();
          A.toast('Sesi başlatmak için ▶ düğmesine dokun.');
        } else if (e && e.name !== 'AbortError') fail();
      });
    } catch (e) { return fail(); }
    arm();
    warm(nextSeg(st));
  }
  function speak(st, text, ms, fin) {
    if (S.mute || !voice || !SS || S.fast) { S.tm = setTimeout(fin, ms); return; }
    try {
      SS.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'tr-TR'; u.voice = voice; u.rate = S.rate; u.pitch = 1;
      u.onend = fin; u.onerror = function (e) { if (e && (e.error === 'interrupted' || e.error === 'canceled')) return; fin(); };
      S.safe = setTimeout(fin, ms * 2.2 + 4000);   // onend gelmezse takılma
      SS.speak(u);
    } catch (e) { S.tm = setTimeout(fin, ms); }
  }
  function toggle() {
    if (!S) return;
    if (S.playing) {
      S.playing = false; clearTimeout(S.tm); clearTimeout(S.safe);
      if (S.auOn && S.au && !S.au.ended) {          // mp3: kaldığı yerden sürsün
        try { S.au.pause(); } catch (e) {} S.auOn = false; S.held = true; cancelAnimationFrame(S.raf);
      } else { S.tok++; hush(); }
    } else {
      S.playing = true;
      if (S.held && S.au) {
        S.held = false; S.auOn = true;
        try { S.au.playbackRate = S.rate; var pr = S.au.play(); if (pr && pr.catch) pr.catch(function () {}); } catch (e) {}
        if (S.auArm) S.auArm();
      }
      else if (S.sceneDone) { if (!S.L.scenes[S.i].cp || S.solved) autoNext(); }
      else playStep();
    }
    paintCtl();
  }
  function restartStep() {
    if (!S || !S.playing || S.sceneDone) return;
    S.tok++; clearTimeout(S.tm); clearTimeout(S.safe); hush();
    playStep();
  }
  function sceneEnd() {
    S.sceneDone = true;
    var sc = S.L.scenes[S.i];
    if (sc.cp) { S.solved = S.solved || isSolved(); paintCtl(); return; }
    unlock(S.i + 1);
    autoNext();
  }
  function autoNext() {
    paintCtl();
    if (!S.playing) return;
    var tok = ++S.tok;
    S.tm = setTimeout(function () { if (S && S.tok === tok && S.playing) next(); }, 1600 / (S.fast || 1));
  }
  function unlock(k) {
    if (k > S.p.far) { S.p.far = Math.min(k, S.L.scenes.length); progSet(S.id, S.p); }
    paintCtl();
  }
  function next() {
    if (!S) return;
    var N = S.L.scenes.length, sc = S.L.scenes[S.i];
    var canNext = S.i < S.p.far || (S.sceneDone && (!sc.cp || S.solved));
    if (!canNext) { A.toast(sc.cp && !S.solved ? 'Devam etmek için soruyu doğru cevapla.' : 'Anlatım bitmeden geçemezsin.'); return; }
    if (S.i === N - 1) return finish();
    S.solved = false;
    go(S.i + 1);
  }

  /* ---------- ara soru ---------- */
  var LET = ['A', 'B', 'C', 'D', 'E'];
  function cpIdx() { var n = 0; for (var k = 0; k < S.i; k++) if (S.L.scenes[k].cp) n++; return n + 1; }
  function isSolved() { var st = S.p.cp[cpIdx()]; return st === 'ok1' || st === 'ok'; }
  function cpHtml(cp) {
    return '<div class="an-cp" id="anCp"><div class="an-cpq">' + fmt(cp.q) + '</div>' +
      '<ul class="ch">' + cp.c.map(function (c, k) {
        return '<li><button data-ch="' + LET[k] + '"><span class="L">' + LET[k] + '</span><span>' + fmt(c) + '</span></button></li>';
      }).join('') + '</ul>' +
      '<button class="btn mark" id="anMark" disabled>İşaretle</button><div class="an-fb" id="anFb"></div></div>';
  }
  function bindCp(cp) {
    var box = document.getElementById('anCp'), pick = null, n = cpIdx(), stt = S.p.cp[n];
    var btns = box.querySelectorAll('button[data-ch]'), mk = document.getElementById('anMark'), fb = document.getElementById('anFb');
    S.solved = stt === 'ok1' || stt === 'ok';
    if (S.solved) {      // daha önce çözüldü: kilitli göster
      [].forEach.call(btns, function (b) { b.disabled = true; if (b.getAttribute('data-ch') === cp.a) b.classList.add('ok'); });
      mk.hidden = true; fb.innerHTML = '<div class="an-ok">✓ Doğru: ' + cp.a + '</div>' + (cp.why ? '<div class="an-why">' + fmt(cp.why) + '</div>' : '');
      return;
    }
    box.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-ch]');
      if (b && !b.disabled && !S.solved) {
        pick = b.getAttribute('data-ch');
        [].forEach.call(btns, function (x) { x.classList.toggle('sel', x === b); });
        mk.disabled = false; mk.textContent = 'İşaretle (' + pick + ')';
        return;
      }
      if (e.target.closest('#anMark') && pick && !S.solved) {
        var my = box.querySelector('button[data-ch="' + pick + '"]');
        mk.disabled = true;
        var cur = S.p.cp[n];
        if (pick === cp.a) {
          S.solved = true;
          var first = !cur;
          S.p.cp[n] = first ? 'ok1' : 'ok'; progSet(S.id, S.p);
          [].forEach.call(btns, function (x) { x.disabled = true; x.classList.remove('sel'); });
          my.classList.add('ok'); mk.hidden = true;
          var xpTxt = '';
          if (first) {
            var r = A.awardXP('an-' + S.id, CP_KEY + n);
            if (r.xp) { A.gainFx(r, my); xpTxt = ' <b class="an-xp">+' + r.xp + ' EXP</b>'; }
            else if (r.why === 'cool') xpTxt = ' <small>(Bu soru ' + r.wait + ' gün sonra tekrar EXP verir.)</small>';
          } else xpTxt = ' <small>(EXP yalnızca ilk denemede doğruya verilir.)</small>';
          fb.innerHTML = '<div class="an-ok">✓ Doğru!' + xpTxt + '</div>' + (cp.why ? '<div class="an-why">' + fmt(cp.why) + '</div>' : '');
          unlock(S.i + 1);
          if (cp.why) {
            var st = { s: cp.why, v: cp.whyV, key: S.i + '-why' };
            S.tok++; clearTimeout(S.tm); clearTimeout(S.safe); hush(); var tok = S.tok;
            if (S.playing) { cap(st.s); narrate(st, function () { if (S && S.tok === tok) paintCtl(); }); }
          }
          S.sceneDone = true; paintCtl();
          try { fb.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e2) {}
        } else {
          if (!cur) { S.p.cp[n] = 'tried'; progSet(S.id, S.p); }
          my.classList.remove('sel'); my.classList.add('bad'); my.disabled = true; pick = null;
          mk.textContent = 'İşaretle';
          fb.innerHTML = '<div class="an-bad">✗ Olmadı. İpucu: ' + fmt(cp.hint || 'Anlatımı hatırla ve tekrar dene.') + '</div>';
          if (navigator.vibrate) try { navigator.vibrate([30, 40, 30]); } catch (e3) {}
          if (S.playing && cp.hint) { S.tok++; clearTimeout(S.tm); clearTimeout(S.safe); hush(); cap('İpucu: ' + cp.hint); narrate({ s: 'İpucu: ' + cp.hint, v: cp.hintV ? 'İpucu: ' + cp.hintV : null, key: S.i + '-hint' }, function () {}); }
          try { fb.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e4) {}
        }
      }
    });
  }

  /* ---------- bitiş ---------- */
  function finish() {
    var id = S.id, L = S.L, info = S.info, p = S.p, N = L.scenes.length, cpn = cpCount(L);
    S.tok++; clearTimeout(S.tm); clearTimeout(S.safe); hush();
    try { S.au.removeAttribute('src'); S.au.load(); } catch (e) {}
    var first = 0; for (var k in p.cp) if (p.cp[k] === 'ok1') first++;
    var xp = 0, before = null, after = null, wait = 0, already = p.fin === p.pass;
    if (!already) {
      for (var n = 1; n <= END_N; n++) {
        var r = A.awardXP('an-' + id, 'zr:bitir' + n);
        if (r.xp) { if (before == null) before = r.before; after = r.after; xp += r.xp; } else if (r.why === 'cool') wait = Math.max(wait, r.wait);
      }
      p.fin = p.pass; p.done = (p.done || 0) + 1;
    }
    p.far = N; p.i = 0; progSet(id, p);
    document.body.classList.remove('an-on');
    S = null;
    app.innerHTML = '<div class="an-end" style="--c:' + info.s.color + '">' +
      '<div class="an-trophy">🏁</div><h1>Anlatım tamamlandı!</h1><p class="lead">' + esc(L.title || info.t.title) + '</p>' +
      '<div class="an-score"><div><b>' + first + '/' + cpn + '</b><span>ara soru ilk denemede</span></div>' +
      '<div><b>' + (xp ? '+' + xp : already ? '✓' : '0') + '</b><span>' + (xp ? 'bitirme EXP' : already ? 'ödül alındı' : 'bitirme EXP') + '</span></div></div>' +
      (!xp && wait ? '<p class="small an-cool">Bitirme ödülü bu anlatımda ' + wait + ' gün sonra tekrar verilir (7 gün kuralı).</p>' : '') +
      (L.ozet && L.ozet.length ? '<div class="card an-sum"><h2>Akılda kalsın</h2><ol>' + L.ozet.map(function (x) { return '<li>' + fmt(x) + '</li>'; }).join('') + '</ol></div>' : '') +
      '<div class="an-go"><a class="btn" href="#/k/' + id + '">Şimdi soruları çöz →</a><button class="btn ghost" id="anAgain">⟲ Tekrar izle</button></div></div>';
    document.getElementById('anAgain').addEventListener('click', function () { page(id); });
    if (xp) setTimeout(function () { A.gainFx({ xp: xp, before: before, after: after }, document.querySelector('.an-score')); }, 600);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  window.LGSAnlatim = {
    page: page, hook: hook, stop: stop,
    _state: function () { return S; }, _speak: speakText, _hash: srcHash,
    _fast: function (f) { if (S) S.fast = f; window.LGS_AN_FAST = f; }
  };
  // app.js ilk yönlendirmeyi bu dosya yüklenmeden yapmış olabilir
  setTimeout(function () {
    var m = location.hash.match(/^#\/(anlatim|k)\/([^/]+)/);
    if (!m) return;
    if (m[1] === 'anlatim' && !routed && A.route) A.route();
    else if (m[1] === 'k') hook(m[2]);
  }, 0);
})();
