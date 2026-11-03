/* LGS Kışlası · Adım Adım Anlatım
   Sahne sahne kurulan animasyonlu konu anlatımı: sesli anlatım (tr-TR), altyazı, ara sorular, EXP.
   Ders verisi: data/anlatim/<konuId>.js (biçim: tools/ANLATIM.md), liste: data/anlatim/index.js */
(function () {
  'use strict';
  var A = window.LGSApp;
  if (!A) return;
  var app = document.getElementById('app');
  var PKEY = A.KEY + 'anlatim';        // ilerleme: { konuId: { far, i, cp:{}, ia:{}, done, pass, at } }
  var OKEY = A.KEY + 'anlatimPref';    // tercih: { rate, mute }
  var IDX = function () { return window.LGS_AN_INDEX || {}; };
  var CP_KEY = 'ko:cp';                // ara soru: kolay soru EXP'si (10)
  var END_N = 10;                      // bitirme: 10 zor soru EXP'si (200)
  var esc = A.esc, fmt = A.fmt;

  function progAll() { return A.jget(PKEY, {}); }
  function progOf(id) { var p = progAll()[id] || {}; p.far = p.far || 0; p.i = p.i || 0; p.cp = p.cp || {}; p.ia = p.ia || {}; p.done = p.done || 0; p.pass = p.pass || 1; return p; }
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

  function cpCount(L) { return L.scenes.filter(function (s) { return s.cp || s.ia; }).length; }
  function intro(id, L, info) {
    var p = progOf(id), N = L.scenes.length, mid = p.far > 0 && p.far < N && p.fin !== p.pass;
    var cpn = cpCount(L);
    app.innerHTML = '<div class="an-intro" style="--c:' + info.s.color + '">' +
      '<a class="back" href="#/k/' + id + '">← ' + esc(info.t.title) + '</a>' +
      '<div class="an-hero"><div class="an-hero-i">' + info.s.icon + '</div><div><small>' + esc(info.s.name) + ' · Adım Adım Anlatım</small><h1>' + esc(L.title || info.t.title) + '</h1></div></div>' +
      '<p class="lead">' + esc(L.desc || '') + '</p>' +
      '<ul class="an-facts"><li><b>' + N + '</b><span>sahne</span></li><li><b>' + cpn + '</b><span>soru · etkinlik</span></li><li><b>~' + (IDX()[id].dk || Math.round(N * 0.8)) + '</b><span>dakika</span></li></ul>' +
      '<div class="card an-rules"><p>🎧 Sesli anlatım ve altyazı birlikte ilerler. Geri dönebilirsin; ama <b>izlemediğin sahneye atlayamazsın</b>.</p>' +
      '<p>❓ Ara soruları ve etkinlikleri (eşleştir, sırala, ele…) doğru çözmeden devam edilmez. İlk denemede doğruysa <b>+10 EXP</b>.</p>' +
      '<p>🏁 Anlatımı bitirince <b>+200 EXP</b> (10 zor soru kadar). Aynı ödül 7 gün sonra yeniden alınabilir.</p></div>' +
      (p.done ? '<p class="small">✓ Bu anlatımı ' + p.done + ' kez bitirdin.</p>' : '') +
      '<div class="an-go">' +
      (mid ? '<button class="btn" id="anGo">▶ Kaldığın yerden devam (' + (p.i + 1) + '/' + N + ')</button><button class="btn ghost" id="anNew">Baştan başla</button>'
           : '<button class="btn" id="anGo">▶ ' + (p.done ? 'Yeniden izle' : 'Anlatımı başlat') + '</button>') +
      '</div></div>';
    document.getElementById('anGo').addEventListener('click', function () {
      if (!mid) { p = { far: 0, i: 0, cp: {}, ia: {}, done: p.done || 0, pass: (p.pass || 0) + 1 }; progSet(id, p); }
      start(id, L, info, mid ? Math.min(p.i, p.far) : 0);
    });
    var nb = document.getElementById('anNew');
    if (nb) nb.addEventListener('click', function () {
      p = { far: 0, i: 0, cp: {}, ia: {}, done: p.done || 0, pass: (p.pass || 0) + 1 }; progSet(id, p);
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
      '<div class="an-dots" id="anDots">' + L.scenes.map(function (s, k) { return '<i data-k="' + k + '" class="' + (s.cp || s.ia ? 'cpd' : '') + '"></i>'; }).join('') + '</div>' +
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
    stage.className = 'an-stage' + (isQ(sc) ? ' is-cp' : '');
    stage.innerHTML = '<h2 class="an-h"><span>' + (sc.cp ? '❓' : sc.ia ? (IA_ICON[sc.ia.tip] || '🧩') : (S.i + 1)) + '</span>' + esc(sc.t || '') + '</h2>' +
      '<div class="an-body" id="anBody">' + (sc.base ? fmt(sc.base) : '') + '</div>' + (sc.cp ? cpHtml(sc.cp) : sc.ia ? iaHtml(sc.ia) : '');
    prepDraw(stage);
    if (sc.cp) bindCp(sc.cp); else if (sc.ia) bindIa(sc.ia);
    if (A.fitSvgs) A.fitSvgs(stage);
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
    var canNext = S.i < S.p.far || (S.sceneDone && (!isQ(sc) || S.solved));
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
    var q = qOf(sc);
    if (q && q.why) return segOf(S.i + '-why', q.why, q.whyV);
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
      else if (S.sceneDone) { if (!isQ(S.L.scenes[S.i]) || S.solved) autoNext(); }
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
    if (isQ(sc)) { S.solved = S.solved || isSolved(); paintCtl(); return; }
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
    var canNext = S.i < S.p.far || (S.sceneDone && (!isQ(sc) || S.solved));
    if (!canNext) { A.toast(isQ(sc) && !S.solved ? (sc.ia ? 'Devam etmek için etkinliği doğru tamamla.' : 'Devam etmek için soruyu doğru cevapla.') : 'Anlatım bitmeden geçemezsin.'); return; }
    if (S.i === N - 1) return finish();
    S.solved = false;
    go(S.i + 1);
  }

  /* ---------- ara soru ---------- */
  var LET = ['A', 'B', 'C', 'D', 'E'];
  function cpIdx() { var n = 0; for (var k = 0; k < S.i; k++) if (S.L.scenes[k].cp) n++; return n + 1; }
  function isSolved() { var st = qState(); return st === 'ok1' || st === 'ok'; }
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

  /* ---------- etkileşimli sahneler (sahne.ia) ----------
     Türler: eslestir · sirala · eleme · dogruyanlis · bosluk · grup · gorselsec · kaydir (biçim: tools/ANLATIM.md).
     Ara soru (cp) gibi kilitler: doğru tamamlanmadan sonraki sahneye geçilmez; ilk denemede (hiç yanlış dokunuş olmadan)
     doğru = kolay soru EXP'si (10), anahtar `an-<konuId>|ko:ia<n>` (n: dersteki kaçıncı etkinlik), 7 gün kuralı.
     Durum localStorage'da S.p.ia[n] = 'tried' | 'ok1' | 'ok'. Ses: sahnenin adımları yönergeyi okur; ia.why / ia.hint
     ara sorudaki gibi <sahne>-why / <sahne>-hint parçalarıdır (anlatim_ses.py üretir). Sürükle-bırak yok: hep dokun-dokun. */
  var IA_KEY = 'ko:ia';
  var IA_NAME = { eslestir: 'Eşleştir', sirala: 'Sırala', eleme: 'Ele', dogruyanlis: 'Doğru mu, yanlış mı?', bosluk: 'Boşluğu doldur',
                  grup: 'Sınıflandır', gorselsec: 'Görselde bul', kaydir: 'Tahmin et' };
  var IA_ICON = { eslestir: '🔗', sirala: '↕️', eleme: '✂️', dogruyanlis: '⚖️', bosluk: '🧩', grup: '🗂️', gorselsec: '🎯', kaydir: '🎚️' };
  function isQ(sc) { return !!(sc && (sc.cp || sc.ia)); }
  function qOf(sc) { return sc ? (sc.cp || sc.ia || null) : null; }
  function iaIdx() { var n = 0; for (var k = 0; k < S.i; k++) if (S.L.scenes[k].ia) n++; return n + 1; }
  function qState() { var sc = S.L.scenes[S.i]; return sc.cp ? S.p.cp[cpIdx()] : sc.ia ? S.p.ia[iaIdx()] : null; }

  // sabit karıştırma: aynı ders/sahne hep aynı sırayı verir, asla doğru sırayla başlamaz
  function rng(seed) { return function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; var t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function shuffled(n, key) {
    var a = [], r = rng(parseInt(srcHash(key, ''), 16)), i;
    for (i = 0; i < n; i++) a.push(i);
    for (i = n - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; }
    var same = true; for (i = 0; i < n; i++) if (a[i] !== i) { same = false; break; }
    if (same && n > 1) a.push(a.shift());
    return a;
  }
  // kısa geri bildirim sesi (WebAudio, dosya yok); 🔇'de çalmaz
  var AC = null;
  function beep(ok) {
    if (!S || S.mute) return;
    try {
      AC = AC || new (window.AudioContext || window.webkitAudioContext)();
      var t = AC.currentTime, notes = ok ? [[660, 0], [990, 0.09]] : [[200, 0], [150, 0.1]];
      notes.forEach(function (nt) {
        var o = AC.createOscillator(), g = AC.createGain();
        o.type = ok ? 'sine' : 'triangle'; o.frequency.value = nt[0];
        g.gain.setValueAtTime(0.0001, t + nt[1]); g.gain.exponentialRampToValueAtTime(0.07, t + nt[1] + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, t + nt[1] + 0.16);
        o.connect(g); g.connect(AC.destination); o.start(t + nt[1]); o.stop(t + nt[1] + 0.18);
      });
    } catch (e) {}
  }
  function numTr(v, step) {
    var d = String(step || 1).split('.')[1]; d = d ? d.length : 0;
    return (Math.round(v * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d).replace('.', ',').replace(/^-/, '−');
  }
  function iaHtml(ia) {
    var R = IA[ia.tip];
    return '<div class="an-ia ia-' + esc(ia.tip) + '" id="anIa"><div class="ia-tag">' + (IA_ICON[ia.tip] || '🧩') + ' ' + esc(IA_NAME[ia.tip] || 'Etkinlik') + '</div>' +
      (ia.q ? '<div class="an-cpq">' + fmt(ia.q) + '</div>' : '') +
      '<div class="ia-body" id="iaBody">' + (R ? '' : '<p class="small">Bu etkinlik türü tanınmadı.</p>') + '</div>' +
      (R && R.check ? '<button class="btn mark" id="iaChk" disabled>Kontrol et</button>' : '') +
      '<div class="an-fb" id="anFb" aria-live="polite"></div></div>';
  }
  function bindIa(ia) {
    var n = iaIdx(), st = S.p.ia[n], box = document.getElementById('anIa'), body = document.getElementById('iaBody');
    var fb = document.getElementById('anFb'), chk = document.getElementById('iaChk'), R = IA[ia.tip], hinted = false;
    var seedBase = S.id + '|' + S.i + '|' + ia.tip;
    if (!R) { S.solved = true; return; }
    S.solved = st === 'ok1' || st === 'ok';
    var whyHtml = function () { return ia.why ? '<div class="an-why">' + fmt(ia.why) + '</div>' : ''; };
    var scroll = function () { try { fb.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) {} };
    var ctx = {
      ia: ia, box: box, body: body, chk: chk, onCheck: null,
      sh: function (k, salt) { return shuffled(k, seedBase + '|' + (salt || '')); },
      can: function (on) { if (chk) chk.disabled = !on || S.solved; },
      done: function () { return S.solved; },
      info: function (msg) { fb.innerHTML = msg ? '<div class="an-why ia-info">' + fmt(msg) + '</div>' : ''; },
      wrong: function (msg) {
        if (S.solved) return;
        if (!S.p.ia[n]) { S.p.ia[n] = 'tried'; progSet(S.id, S.p); }
        fb.innerHTML = '<div class="an-bad">✗ ' + (msg ? fmt(msg) + ' ' : 'Olmadı. ') + (ia.hint ? 'İpucu: ' + fmt(ia.hint) : 'Anlatımı hatırla ve tekrar dene.') + '</div>';
        beep(false);
        if (navigator.vibrate) try { navigator.vibrate([30, 40, 30]); } catch (e) {}
        if (S.playing && ia.hint && !hinted) {          // ipucu yalnız ilk yanlışta seslendirilir
          hinted = true; S.tok++; clearTimeout(S.tm); clearTimeout(S.safe); hush(); cap('İpucu: ' + ia.hint);
          narrate({ s: 'İpucu: ' + ia.hint, v: ia.hintV ? 'İpucu: ' + ia.hintV : null, key: S.i + '-hint' }, function () {});
        }
        scroll();
      },
      right: function (anchor) {
        if (S.solved) return;
        S.solved = true;
        var first = !S.p.ia[n];
        S.p.ia[n] = first ? 'ok1' : 'ok'; progSet(S.id, S.p);
        if (chk) chk.hidden = true;
        box.classList.add('done');
        var xpTxt = '';
        if (first) {
          var r = A.awardXP('an-' + S.id, IA_KEY + n);
          if (r.xp) { A.gainFx(r, anchor || box); xpTxt = ' <b class="an-xp">+' + r.xp + ' EXP</b>'; }
          else if (r.why === 'cool') xpTxt = ' <small>(Bu etkinlik ' + r.wait + ' gün sonra tekrar EXP verir.)</small>';
        } else xpTxt = ' <small>(EXP yalnızca ilk denemede hatasız çözüme verilir.)</small>';
        fb.innerHTML = '<div class="an-ok">✓ Harika, doğru!' + xpTxt + '</div>' + whyHtml();
        beep(true);
        unlock(S.i + 1);
        if (ia.why) {
          var stp = { s: ia.why, v: ia.whyV, key: S.i + '-why' };
          S.tok++; clearTimeout(S.tm); clearTimeout(S.safe); hush(); var tok = S.tok;
          if (S.playing) { cap(stp.s); narrate(stp, function () { if (S && S.tok === tok) paintCtl(); }); }
        }
        S.sceneDone = true; paintCtl(); scroll();
      }
    };
    if (chk) chk.addEventListener('click', function () { if (!S.solved && ctx.onCheck) ctx.onCheck(); });
    R.bind(ctx);
    if (S.solved) {                                 // daha önce çözüldü: çözümü kilitli göster
      R.show(ctx); if (chk) chk.hidden = true; box.classList.add('done');
      fb.innerHTML = '<div class="an-ok">✓ Bu etkinliği çözdün.</div>' + whyHtml();
    }
    if (A.fitSvgs) A.fitSvgs(box);
  }
  function lockAll(root) { [].forEach.call(root.querySelectorAll('button'), function (b) { b.disabled = true; }); }
  function flash(els, cls, ms, then) {
    els.forEach(function (e) { if (e) { e.classList.remove(cls); void e.getBoundingClientRect(); e.classList.add(cls); } });
    setTimeout(function () { els.forEach(function (e) { if (e) e.classList.remove(cls); }); if (then) then(); }, ms || 650);
  }
  var IA = {};

  /* eslestir: { sol:[…], sag:[…] } sol[i] ↔ sag[i]; sağ sütun karışık. Soldan ya da sağdan başla, karşıdakine dokun. */
  IA.eslestir = {
    bind: function (c) {
      var ia = c.ia, ord = c.sh(ia.sag.length, 'r'), sel = null, made = 0;
      c.body.innerHTML = (ia.solBaslik || ia.sagBaslik ? '<div class="ia-cols ia-ch"><b>' + fmt(ia.solBaslik || '') + '</b><b>' + fmt(ia.sagBaslik || '') + '</b></div>' : '') +
        '<div class="ia-cols"><div class="ia-col">' + ia.sol.map(function (x, i) { return '<button class="ia-it" data-s="l" data-i="' + i + '" aria-pressed="false">' + fmt(x) + '</button>'; }).join('') + '</div>' +
        '<div class="ia-col">' + ord.map(function (j) { return '<button class="ia-it" data-s="r" data-i="' + j + '" aria-pressed="false">' + fmt(ia.sag[j]) + '</button>'; }).join('') + '</div></div>';
      var pair = function (l, r, k) {
        [l, r].forEach(function (b) { b.classList.remove('sel'); b.classList.add('ok', 'pc' + (k % 6)); b.disabled = true; b.setAttribute('aria-pressed', 'false');
          b.insertAdjacentHTML('afterbegin', '<i class="ia-pn">' + (k + 1) + '</i>'); });
      };
      c.pair = pair;
      c.body.addEventListener('click', function (e) {
        var b = e.target.closest('button.ia-it'); if (!b || b.disabled || c.done()) return;
        if (!sel || sel.getAttribute('data-s') === b.getAttribute('data-s')) {
          if (sel) { sel.classList.remove('sel'); sel.setAttribute('aria-pressed', 'false'); }
          if (sel === b) { sel = null; return; }
          sel = b; b.classList.add('sel'); b.setAttribute('aria-pressed', 'true'); return;
        }
        var a = sel; sel = null; a.classList.remove('sel'); a.setAttribute('aria-pressed', 'false');
        if (a.getAttribute('data-i') === b.getAttribute('data-i')) {
          var l = a.getAttribute('data-s') === 'l' ? a : b, r = l === a ? b : a;
          pair(l, r, made++); beep(true);
          if (made === ia.sol.length) c.right(r);
        } else { flash([a, b], 'bad'); c.wrong('Bu ikisi eşleşmiyor.'); }
      });
    },
    show: function (c) {
      c.ia.sol.forEach(function (_, i) {
        c.pair(c.body.querySelector('[data-s="l"][data-i="' + i + '"]'), c.body.querySelector('[data-s="r"][data-i="' + i + '"]'), i);
      });
    }
  };

  /* sirala: { ogeler:[doğru sırayla], ust?:'en küçük', alt?:'en büyük' } Havuzdan sırayla dokun; yerleşene dokununca geri döner. */
  IA.sirala = {
    check: true,
    bind: function (c) {
      var it = c.ia.ogeler, N = it.length, ord = c.sh(N), placed = [], lock = {}, bad = {};
      var draw = function () {
        c.body.innerHTML = (c.ia.ust ? '<div class="ia-end">▲ ' + fmt(c.ia.ust) + '</div>' : '') + '<ol class="ia-slots">' + it.map(function (_, k) {
          var i = placed[k];
          return '<li>' + (i != null ? '<button class="ia-it in' + (lock[k] ? ' ok' : '') + (bad[k] ? ' bad' : '') + '" data-k="' + k + '"' + (lock[k] || c.done() ? ' disabled' : '') + '>' + fmt(it[i]) + '</button>'
            : '<span class="ia-empty">' + (k + 1) + '. sıra</span>') + '</li>';
        }).join('') + '</ol>' + (c.ia.alt ? '<div class="ia-end">▼ ' + fmt(c.ia.alt) + '</div>' : '') +
          '<div class="ia-pool" aria-label="Yerleştirilecekler">' + ord.filter(function (i) { return placed.indexOf(i) < 0; }).map(function (i) {
            return '<button class="ia-it" data-i="' + i + '">' + fmt(it[i]) + '</button>'; }).join('') + '</div>';
        var full = placed.filter(function (x) { return x != null; }).length === N;
        c.can(full);
      };
      c.draw = draw; c.placed = placed; c.lock = lock;
      draw();
      c.body.addEventListener('click', function (e) {
        var b = e.target.closest('button.ia-it'); if (!b || b.disabled || c.done()) return;
        if (b.hasAttribute('data-k')) { placed[+b.getAttribute('data-k')] = null; }
        else { for (var k = 0; k < N; k++) if (placed[k] == null) { placed[k] = +b.getAttribute('data-i'); break; } }
        draw();
      });
      c.onCheck = function () {
        var wrong = 0;
        for (var k = 0; k < N; k++) { if (placed[k] === k) lock[k] = 1; else { bad[k] = 1; wrong++; } }
        draw();
        if (!wrong) return c.right(c.body);
        c.can(false);
        c.wrong(wrong + ' öğe yanlış yerde; doğru olanlar kilitlendi.');
        setTimeout(function () { for (var k = 0; k < N; k++) if (bad[k]) { placed[k] = null; delete bad[k]; } draw(); }, 900);
      };
    },
    show: function (c) { for (var k = 0; k < c.ia.ogeler.length; k++) { c.placed[k] = k; c.lock[k] = 1; } c.draw(); }
  };

  /* eleme: { ogeler:[…], ele:[elenecek indisler] } Elenecek kadar seçince Kontrol et açılır. */
  IA.eleme = {
    check: true,
    bind: function (c) {
      var it = c.ia.ogeler, ord = c.sh(it.length), want = c.ia.ele.length, sel = {};
      c.body.innerHTML = '<p class="ia-cnt" id="iaCnt"></p><div class="ia-grid">' + ord.map(function (i) {
        return '<button class="ia-it ia-el" data-i="' + i + '" aria-pressed="false">' + fmt(it[i]) + '</button>'; }).join('') + '</div>';
      var cnt = function () {
        var k = Object.keys(sel).length;
        c.body.querySelector('#iaCnt').innerHTML = 'Elenecek: <b>' + want + '</b> · seçtiğin: <b>' + k + '</b>';
        c.can(k === want);
      };
      cnt();
      c.body.addEventListener('click', function (e) {
        var b = e.target.closest('button.ia-el'); if (!b || b.disabled || c.done()) return;
        var i = b.getAttribute('data-i');
        if (sel[i]) delete sel[i]; else sel[i] = 1;
        b.classList.toggle('out', !!sel[i]); b.setAttribute('aria-pressed', sel[i] ? 'true' : 'false');
        cnt();
      });
      c.onCheck = function () {
        var bad = Object.keys(sel).filter(function (i) { return c.ia.ele.indexOf(+i) < 0; });
        if (!bad.length) { c.show(); return c.right(c.body); }
        var els = bad.map(function (i) { return c.body.querySelector('[data-i="' + i + '"]'); });
        bad.forEach(function (i) { delete sel[i]; });
        flash(els, 'bad', 700, function () { els.forEach(function (b) { b.classList.remove('out'); b.setAttribute('aria-pressed', 'false'); }); cnt(); });
        c.can(false);
        c.wrong(bad.length === 1 ? 'Seçtiklerinden biri aslında gruba uyuyor.' : 'Seçtiklerinden ' + bad.length + ' tanesi aslında gruba uyuyor.');
      };
      c.show = function () {
        [].forEach.call(c.body.querySelectorAll('button.ia-el'), function (b) {
          var gone = c.ia.ele.indexOf(+b.getAttribute('data-i')) >= 0;
          b.classList.toggle('out', gone); b.classList.toggle('ok', !gone); b.disabled = true;
        });
        c.body.querySelector('#iaCnt').innerHTML = '✓ Uymayanlar elendi.';
      };
    },
    show: function (c) { c.show(); }
  };

  /* dogruyanlis: { ifadeler:[{ m:'ifade', d:true|false, a:'kısa açıklama' }] } her satır anında değerlendirilir. */
  IA.dogruyanlis = {
    bind: function (c) {
      var rows = c.ia.ifadeler, left = rows.length;
      c.body.innerHTML = rows.map(function (r, k) {
        return '<div class="ia-row" data-k="' + k + '"><div class="ia-m">' + fmt(r.m) + '</div><div class="ia-dy" role="group" aria-label="Doğru mu, yanlış mı?">' +
          '<button class="ia-d" data-v="1">✓ Doğru</button><button class="ia-y" data-v="0">✗ Yanlış</button></div><div class="ia-ex" hidden></div></div>';
      }).join('');
      var settle = function (row, k) {
        var r = rows[k], good = row.querySelector('[data-v="' + (r.d ? 1 : 0) + '"]');
        row.classList.add('ok'); good.classList.add('ok');
        [].forEach.call(row.querySelectorAll('button'), function (b) { b.disabled = true; });
        if (r.a) { var ex = row.querySelector('.ia-ex'); ex.hidden = false; ex.innerHTML = fmt(r.a); }
      };
      c.settle = settle;
      c.body.addEventListener('click', function (e) {
        var b = e.target.closest('.ia-dy button'); if (!b || b.disabled || c.done()) return;
        var row = b.closest('.ia-row'), k = +row.getAttribute('data-k');
        if ((b.getAttribute('data-v') === '1') === !!rows[k].d) {
          settle(row, k); left--; beep(true);
          if (!left) c.right(row);
        } else {
          b.classList.add('bad'); b.disabled = true; flash([row], 'shk', 450);
          c.wrong('Bu ifadeyi bir daha düşün.');
        }
      });
    },
    show: function (c) { [].forEach.call(c.body.querySelectorAll('.ia-row'), function (row) { c.settle(row, +row.getAttribute('data-k')); }); }
  };

  /* bosluk: { metin:'… [_] … [^_] …', secenek:[kartlar], cevap:[her boşluğun doğru kartı] }  [^_] = üs konumunda boşluk */
  IA.bosluk = {
    check: true,
    bind: function (c) {
      var ia = c.ia, parts = String(ia.metin).split(/\[\^?_\]/), ups = (String(ia.metin).match(/\[\^?_\]/g) || []).map(function (x) { return x === '[^_]'; }), B = parts.length - 1, chips = ia.secenek, ord = c.sh(chips.length, 'c');
      var fill = [], lock = {}, act = 0;
      var draw = function (bad) {
        var h = '<div class="ia-txt">';
        parts.forEach(function (p, b) {
          h += fmt(p);
          if (b < B) {
            var f = fill[b];
            h += '<button class="ia-blank' + (ups[b] ? ' up' : '') + (f != null ? ' full' : '') + (lock[b] ? ' ok' : '') + (bad && bad[b] ? ' bad' : '') + (act === b && !lock[b] ? ' act' : '') + '" data-b="' + b + '"' +
              (lock[b] || c.done() ? ' disabled' : '') + ' aria-label="' + (b + 1) + '. boşluk">' + (f != null ? fmt(chips[f]) : '&nbsp;?&nbsp;') + '</button>';
          }
        });
        h += '</div><div class="ia-pool">' + ord.map(function (i) {
          var used = fill.indexOf(i) >= 0;
          return '<button class="ia-chip" data-c="' + i + '"' + (used || c.done() ? ' disabled' : '') + '>' + fmt(chips[i]) + '</button>'; }).join('') + '</div>';
        c.body.innerHTML = h;
        var full = true; for (var b = 0; b < B; b++) if (fill[b] == null) full = false;
        c.can(full);
      };
      var nextEmpty = function (from) { for (var k = 0; k < B; k++) { var b = (from + k) % B; if (fill[b] == null) return b; } return from; };
      c.draw = draw; c.fill = fill; c.lock = lock;
      draw();
      c.body.addEventListener('click', function (e) {
        if (c.done()) return;
        var bl = e.target.closest('button.ia-blank'), ch = e.target.closest('button.ia-chip');
        if (bl && !bl.disabled) { var b = +bl.getAttribute('data-b'); if (fill[b] != null) fill[b] = null; act = b; draw(); }
        else if (ch && !ch.disabled) { if (lock[act] || fill[act] != null) act = nextEmpty(act); if (lock[act]) return; fill[act] = +ch.getAttribute('data-c'); act = nextEmpty(act); draw(); }
      });
      c.onCheck = function () {
        var bad = {}, nb = 0;
        for (var b = 0; b < B; b++) { if (chips[fill[b]] === ia.cevap[b]) lock[b] = 1; else { bad[b] = 1; nb++; } }
        draw(bad);
        if (!nb) return c.right(c.body);
        c.can(false);
        c.wrong(nb + ' boşluk yanlış; doğrular kilitlendi.');
        setTimeout(function () { for (var b = 0; b < B; b++) if (bad[b]) fill[b] = null; act = nextEmpty(0); draw(); }, 900);
      };
    },
    show: function (c) {
      var chips = c.ia.secenek, used = {};
      c.ia.cevap.forEach(function (ans, b) { for (var i = 0; i < chips.length; i++) if (chips[i] === ans && !used[i]) { used[i] = 1; c.fill[b] = i; break; } c.lock[b] = 1; });
      c.draw();
    }
  };

  /* grup: { gruplar:['A','B'], ogeler:[{ m:'…', g:0 }] } öğeye dokun, sonra kutuya dokun. Kutudakine dokununca geri döner. */
  IA.grup = {
    check: true,
    bind: function (c) {
      var G = c.ia.gruplar, it = c.ia.ogeler, ord = c.sh(it.length), where = {}, lock = {}, sel = null;
      var chip = function (i, extra) { return '<button class="ia-it ia-gi' + (extra || '') + '" data-i="' + i + '"' + (lock[i] || c.done() ? ' disabled' : '') + ' aria-pressed="' + (sel === i) + '">' + fmt(it[i].m) + '</button>'; };
      var draw = function (bad) {
        var pool = ord.filter(function (i) { return where[i] == null; });
        c.body.innerHTML = '<div class="ia-pool ia-gpool">' + (pool.length ? pool.map(function (i) { return chip(i, sel === i ? ' sel' : ''); }).join('') : '<span class="ia-empty">Hepsi yerleşti. Kontrol et!</span>') + '</div>' +
          '<div class="ia-bks">' + G.map(function (g, k) {
            var inn = ord.filter(function (i) { return where[i] === k; });
            return '<div class="ia-bk" data-g="' + k + '"><button class="ia-bkh" data-g="' + k + '"' + (c.done() ? ' disabled' : '') + '>' + fmt(g) + ' <small>(' + inn.length + ')</small></button><div class="ia-bki">' +
              inn.map(function (i) { return chip(i, (lock[i] ? ' ok' : '') + (bad && bad[i] ? ' bad' : '')); }).join('') + '</div></div>';
          }).join('') + '</div>';
        c.can(!pool.length);
      };
      c.draw = draw; c.where = where; c.lock = lock;
      draw();
      c.body.addEventListener('click', function (e) {
        if (c.done()) return;
        var b = e.target.closest('button.ia-gi'), bk = e.target.closest('.ia-bk');
        if (b && !b.disabled) {
          var i = +b.getAttribute('data-i');
          if (where[i] != null) { delete where[i]; sel = i; } else sel = sel === i ? null : i;
          draw();
          if (sel != null) {                 // telefonda kutular görünmüyorsa kaydır
            var bx = c.body.querySelector('.ia-bks'), rr = bx && bx.getBoundingClientRect();
            if (rr && rr.top > window.innerHeight - 230) try { bx.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e2) {}
          }
          return;
        }
        if (bk) {
          if (sel == null) { c.info('Önce yukarıdan bir öğeye dokun, sonra kutusuna.'); return; }
          where[sel] = +bk.getAttribute('data-g'); sel = null; c.info(''); draw();
        }
      });
      c.onCheck = function () {
        var bad = {}, nb = 0;
        it.forEach(function (x, i) { if (where[i] === x.g) lock[i] = 1; else { bad[i] = 1; nb++; } });
        draw(bad);
        if (!nb) return c.right(c.body);
        c.can(false);
        c.wrong(nb + ' öğe yanlış kutuda; doğrular kilitlendi, yanlışlar geri döndü.');
        setTimeout(function () { for (var i in bad) delete where[i]; draw(); }, 900);
      };
    },
    show: function (c) { c.ia.ogeler.forEach(function (x, i) { c.where[i] = x.g; c.lock[i] = 1; }); c.draw(); }
  };

  /* gorselsec: { svg:'<svg …><g data-b="id" aria-label="…">…</g>…</svg>', dogru:['id', …] } bölgeye dokun. Birden çok doğru varsa seç + Kontrol et. */
  IA.gorselsec = {
    check: true,
    bind: function (c) {
      var ia = c.ia, multi = ia.dogru.length > 1, sel = {};
      c.body.innerHTML = (multi ? '<p class="ia-cnt" id="iaCnt"></p>' : '') + '<div class="ia-svg">' + fmt(ia.svg) + '</div>';
      var hots = [].slice.call(c.body.querySelectorAll('[data-b]'));
      hots.forEach(function (h) {
        h.classList.add('ia-hot'); h.setAttribute('tabindex', '0'); h.setAttribute('role', 'button');
        if (!h.getAttribute('aria-label')) h.setAttribute('aria-label', (h.textContent || '').trim() || h.getAttribute('data-b'));
      });
      if (c.chk) c.chk.hidden = !multi;
      var cnt = function () {
        if (!multi) return;
        var k = Object.keys(sel).length;
        c.body.querySelector('#iaCnt').innerHTML = 'Seçilecek: <b>' + ia.dogru.length + '</b> · seçtiğin: <b>' + k + '</b>';
        c.can(k === ia.dogru.length);
      };
      cnt();
      var tap = function (h) {
        if (c.done() || h.classList.contains('no')) return;
        var id = h.getAttribute('data-b');
        if (multi) { if (sel[id]) delete sel[id]; else sel[id] = 1; h.classList.toggle('sel', !!sel[id]); h.setAttribute('aria-pressed', sel[id] ? 'true' : 'false'); cnt(); return; }
        if (ia.dogru.indexOf(id) >= 0) { h.classList.add('ok'); c.right(h); }
        else { h.classList.add('bad', 'no'); h.setAttribute('aria-disabled', 'true'); c.wrong('Burası değil.'); }
      };
      c.body.addEventListener('click', function (e) { var h = e.target.closest('[data-b]'); if (h) tap(h); });
      c.body.addEventListener('keydown', function (e) { var h = e.target.closest('[data-b]'); if (h && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); tap(h); } });
      c.onCheck = function () {
        var bad = Object.keys(sel).filter(function (id) { return ia.dogru.indexOf(id) < 0; });
        if (!bad.length) { hots.forEach(function (h) { if (sel[h.getAttribute('data-b')]) { h.classList.remove('sel'); h.classList.add('ok'); } }); return c.right(c.body); }
        var els = bad.map(function (id) { return c.body.querySelector('[data-b="' + id + '"]'); });
        bad.forEach(function (id) { delete sel[id]; });
        flash(els, 'bad', 700, function () { els.forEach(function (h) { h.classList.remove('sel'); h.setAttribute('aria-pressed', 'false'); }); cnt(); });
        c.can(false);
        c.wrong(bad.length === 1 ? 'Seçtiğin yerlerden biri yanlış.' : 'Seçtiğin yerlerden ' + bad.length + ' tanesi yanlış.');
      };
      c.hots = hots;
    },
    show: function (c) { c.hots.forEach(function (h) { if (c.ia.dogru.indexOf(h.getAttribute('data-b')) >= 0) h.classList.add('ok'); h.classList.add('no'); }); if (c.chk) c.chk.hidden = true; }
  };

  /* kaydir: { min, max, adim, cevap, tol?, birim?, etiket?:[sayı doğrusunda yazılacak değerler], bas?: başlangıç } */
  IA.kaydir = {
    check: true,
    bind: function (c) {
      var ia = c.ia, mn = +ia.min, mx = +ia.max, st = +(ia.adim || 1), tol = +(ia.tol || 0), v = ia.bas != null ? +ia.bas : mn;
      var lab = ia.etiket || [mn, mn + (mx - mn) / 4, mn + (mx - mn) / 2, mn + 3 * (mx - mn) / 4, mx];
      var X = function (x) { return 14 + (x - mn) / (mx - mn) * 312; };
      c.body.innerHTML = '<div class="ia-sl"><div class="ia-val" aria-live="polite"><b id="iaV"></b>' + (ia.birim ? ' <span>' + esc(ia.birim) + '</span>' : '') + '</div>' +
        '<svg class="an-svg ia-nl" viewBox="0 0 340 50" aria-hidden="true"><line x1="14" y1="22" x2="326" y2="22" class="ln" stroke-width="2"/>' +
        lab.map(function (x) { return '<line x1="' + X(x) + '" y1="15" x2="' + X(x) + '" y2="29" class="ln" stroke-width="2"/><text x="' + X(x) + '" y="46" text-anchor="middle" font-size="12">' + numTr(x, st < 1 ? st : 1).replace(/,(\d*?)0+$/, ',$1').replace(/,$/, '') + '</text>'; }).join('') +
        '<g id="iaAns" style="display:none"><circle cy="22" r="6" class="ia-ansd"/></g><path id="iaMk" d="M0 10 L-7 0 L7 0 Z" class="ia-mk"/></svg>' +
        '<div class="ia-slr"><button class="ia-stp" data-d="-1" aria-label="Azalt">−</button>' +
        '<input type="range" id="iaR" min="' + mn + '" max="' + mx + '" step="' + st + '" value="' + v + '" aria-label="' + esc(ia.etiketAd || 'Değer') + '">' +
        '<button class="ia-stp" data-d="1" aria-label="Artır">+</button></div></div>';
      var r = c.body.querySelector('#iaR'), mk = c.body.querySelector('#iaMk'), out = c.body.querySelector('#iaV');
      var set = function (x) {
        x = Math.max(mn, Math.min(mx, Math.round((x - mn) / st) * st + mn));
        v = x; r.value = x; out.textContent = numTr(x, st);
        mk.setAttribute('transform', 'translate(' + X(x) + ' 2)');
        r.setAttribute('aria-valuetext', numTr(x, st) + (ia.birim ? ' ' + ia.birim : ''));
      };
      set(v);
      r.addEventListener('input', function () { if (c.done()) return; set(+r.value); c.can(true); });
      c.body.addEventListener('click', function (e) {
        var b = e.target.closest('.ia-stp'); if (!b || b.disabled || c.done()) return;
        set(v + st * +b.getAttribute('data-d')); c.can(true);
      });
      c.onCheck = function () {
        if (Math.abs(v - +ia.cevap) <= tol + 1e-9) { c.show(); return c.right(r); }
        c.wrong(v < +ia.cevap ? 'Biraz daha büyük olmalı.' : 'Biraz daha küçük olmalı.');
      };
      c.show = function () {
        set(+ia.cevap); r.disabled = true; [].forEach.call(c.body.querySelectorAll('.ia-stp'), function (b) { b.disabled = true; });
        var a = c.body.querySelector('#iaAns'); a.style.display = ''; a.querySelector('circle').setAttribute('cx', X(+ia.cevap));
        c.body.querySelector('.ia-sl').classList.add('ok');
      };
    },
    show: function (c) { c.show(); }
  };

  /* ---------- bitiş ---------- */
  function finish() {
    var id = S.id, L = S.L, info = S.info, p = S.p, N = L.scenes.length, cpn = cpCount(L);
    S.tok++; clearTimeout(S.tm); clearTimeout(S.safe); hush();
    try { S.au.removeAttribute('src'); S.au.load(); } catch (e) {}
    var first = 0; for (var k in p.cp) if (p.cp[k] === 'ok1') first++;
    for (var k2 in (p.ia || {})) if (p.ia[k2] === 'ok1') first++;
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
      '<div class="an-score"><div><b>' + first + '/' + cpn + '</b><span>soru · etkinlik ilk denemede</span></div>' +
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
