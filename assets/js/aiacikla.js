/* LGS Kışlası · 🤖 AI açıklama (yalnız Mertbabaking profili)
   Soru kartındaki çözüm kutusuna küçük bir düğme ekler. Düğme → modal (soru özeti + "Nereye takıldın?" notu) →
   Supabase edge function soru-acikla (Gemini) → dönen tek dosyalık etkileşimli HTML, tam ekran
   <iframe sandbox="allow-scripts"> içinde gösterilir. Not boşken sonuç IndexedDB'de saklanır (kota yemez).
   app.js'ten ÖNCE yüklenir; LGSApp'e yalnız tıklanınca erişir. */
(function () {
  'use strict';
  var KEY = 'lgs2027:';
  var CFG = window.LGS_CLOUD || {};
  var FN = (CFG.url || 'https://veufvthlejqoobexzrjo.supabase.co') + '/functions/v1/soru-acikla';
  var NAMES = ['mertbabaking'], EMAILS = ['merterenkarakose@gmail.com'];
  var MAX_IMG = 4 * 1024 * 1024;
  var REG = {};

  function jget(k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
  function low(s) { return String(s || '').toLocaleLowerCase('tr').trim(); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function on() {
    var p = jget(KEY + 'profile', {}) || {}, au = jget(KEY + 'auth', null) || {};
    var ns = [p.name, jget(KEY + 'cloudName', ''), jget(KEY + 'acctLinked', '')].map(low);
    return ns.some(function (n) { return NAMES.indexOf(n) >= 0; }) || EMAILS.indexOf(low(au.email)) >= 0;
  }
  // Soru kartına düğme (yalnız izinli profilde; diğerlerinde boş dize)
  function btn(q, ctx) {
    if (!q || !on()) return '';
    ctx = ctx || {};
    var id = (ctx.tid || '?') + '|' + q.key;
    REG[id] = { q: q, ctx: ctx };
    return '<button type="button" class="btn ai-btn" data-ai="' + esc(id) + '">🤖 AI açıklama</button>';
  }

  /* ---------- önbellek (IndexedDB) ---------- */
  var dbp = null;
  function db() {
    if (dbp) return dbp;
    dbp = new Promise(function (res) {
      try {
        var r = indexedDB.open('lgs-ai', 1);
        r.onupgradeneeded = function () { r.result.createObjectStore('ex'); };
        r.onsuccess = function () { res(r.result); };
        r.onerror = function () { res(null); };
      } catch (e) { res(null); }
    });
    return dbp;
  }
  function cGet(k) {
    return db().then(function (d) {
      if (!d) return null;
      return new Promise(function (res) {
        try { var r = d.transaction('ex').objectStore('ex').get(k); r.onsuccess = function () { res(r.result || null); }; r.onerror = function () { res(null); }; }
        catch (e) { res(null); }
      });
    });
  }
  function cPut(k, v) {
    return db().then(function (d) {
      if (!d) return;
      try { d.transaction('ex', 'readwrite').objectStore('ex').put(v, k); } catch (e) {}
    });
  }

  /* ---------- görseller ---------- */
  function toData(src) {
    return fetch(src).then(function (r) { if (!r.ok) throw 0; return r.blob(); }).then(function (b) {
      if (b.size > MAX_IMG) return null;
      return new Promise(function (res) { var fr = new FileReader(); fr.onload = function () { res({ d: fr.result, n: b.size }); }; fr.onerror = function () { res(null); }; fr.readAsDataURL(b); });
    }).catch(function () { return null; });
  }
  function imgSrcs(q) {
    var out = [];
    if (q.past && q.img) out.push(q.img);
    var re = /<img[^>]+src="([^"]+)"/g, m, txt = (q.q || '') + ' ' + (q.c || []).join(' ');
    while ((m = re.exec(txt)) && out.length < 4) if (!/^https?:/.test(m[1]) || m[1].indexOf(location.origin) === 0) out.push(m[1]);
    return out.slice(0, 4);
  }
  function images(q) {
    return Promise.all(imgSrcs(q).map(toData)).then(function (arr) {
      var tot = 0, out = [];
      arr.forEach(function (x) { if (x && tot + x.n <= MAX_IMG) { tot += x.n; out.push(x.d); } });
      return out;
    });
  }

  /* ---------- istek ---------- */
  var xhr = null;
  function call(body, cb) {
    var x = xhr = new XMLHttpRequest();
    x.open('POST', FN);
    x.setRequestHeader('Content-Type', 'application/json');
    if (CFG.key) x.setRequestHeader('apikey', CFG.key);
    x.timeout = 170000;
    x.onload = function () { var d = null; try { d = JSON.parse(x.responseText); } catch (e) {} if (x === xhr) xhr = null; cb(x.status, d || {}); };
    x.onerror = function () { if (x === xhr) xhr = null; cb(0, { error: 'net' }); };
    x.ontimeout = function () { if (x === xhr) xhr = null; cb(504, { error: 'timeout' }); };
    x.onabort = function () { if (x === xhr) xhr = null; };
    x.send(JSON.stringify(body));
  }
  function errText(st, d) {
    var e = d && d.error;
    if (e === 'quota') return 'Bugünkü AI hakkı doldu, 11:00’de yenilenir.';
    if (e === 'busy') return 'AI şu an çok yoğun. Biraz sonra yeniden dene.';
    if (e === 'timeout' || st === 504 || st === 546) return 'AI zamanında yanıt veremedi. Yeniden dene (bazen ikinci denemede hızlı gelir).';
    if (e === 'forbidden') return 'Bu özellik yalnız Mertbabaking profiline açık. Profil’den Google ile giriş yapıp yeniden dene.';
    if (e === 'too_big') return 'Sorunun görseli çok büyük, gönderilemedi.';
    if (e === 'net' || st === 0) return 'İnternet bağlantısı yok gibi görünüyor. Bağlantını kontrol edip yeniden dene.';
    return 'Açıklama oluşturulamadı (' + (e || st) + '). Biraz sonra yeniden dene.';
  }

  /* ---------- modal ---------- */
  var STEPS = ['Soru okunuyor…', 'Verilenler ve istenen çıkarılıyor…', 'Çözüm adım adım planlanıyor…', 'Şekiller ve görseller çiziliyor…', 'Animasyonlar hazırlanıyor…', 'Etkileşimler ekleniyor…', 'Son kontroller yapılıyor…'];
  function meta(rec) {
    var A = window.LGSApp || {}, m = A.subjOf && rec.ctx.tid ? A.subjOf(rec.ctx.tid) : null;
    return { subject: m ? m.s.name : '', topic: m ? m.t.title : '', icon: m ? m.s.icon : '📘' };
  }
  function label(q) { return q.meb ? (q.lb || 'MEB Örnek · ' + q.no + '. soru') : q.past ? 'LGS ' + q.year + ' · ' + q.no + '. soru' : 'Yeni nesil' + (q.lvName ? ' · ' + q.lvName : ''); }
  function pickOf(ctx) { var p = typeof ctx.pick === 'function' ? ctx.pick() : ctx.pick; return p ? String(p) : ''; }
  function plain(h) { var d = document.createElement('div'); d.innerHTML = String(h || '').replace(/<svg[\s\S]*?<\/svg>/gi, ' [şekil] '); return (d.textContent || '').replace(/\s+/g, ' ').trim(); }

  function open(id) {
    var rec = REG[id]; if (!rec) return;
    var q = rec.q, mt = meta(rec), pk = pickOf(rec.ctx), ck = 'v1|' + id;
    close();
    var o = document.createElement('div');
    o.className = 'ai-ov'; o.id = 'aiOv';
    var sum = q.past ? '<img class="ai-thumb" src="' + esc(q.img) + '" alt="">' : '<p class="ai-stem">' + esc(plain(q.q).slice(0, 220)) + (plain(q.q).length > 220 ? '…' : '') + '</p>';
    o.innerHTML = '<div class="ai-box" role="dialog" aria-modal="true" aria-label="AI açıklama">' +
      '<div class="ai-h"><b>🤖 AI açıklama</b><button type="button" class="ai-x" data-aix aria-label="Kapat">✕</button></div>' +
      '<div class="ai-sum"><small>' + mt.icon + ' ' + esc([mt.subject, mt.topic].filter(Boolean).join(' · ')) + '</small><small>' + esc(label(q)) + '</small>' + sum +
      '<p class="ai-ans">Doğru cevap <b>' + esc(q.a) + '</b>' + (pk ? ' · Senin cevabın <b class="' + (pk === q.a ? 'ok' : 'bad') + '">' + esc(pk) + '</b>' : '') + '</p></div>' +
      '<label class="ai-lb" for="aiNote">Nereye takıldın? <small>(isteğe bağlı)</small></label>' +
      '<textarea id="aiNote" rows="3" maxlength="1200" placeholder="Örn. 3. adımda neden çarptığımızı anlamadım…"></textarea>' +
      '<p class="ai-cache" id="aiCache" hidden></p>' +
      '<div class="ai-load" id="aiLoad" hidden><div class="ai-spin"></div><div><b id="aiStep">Hazırlanıyor…</b><small id="aiTime"></small></div><div class="ai-bar"><i id="aiBar"></i></div></div>' +
      '<p class="ai-err" id="aiErr" hidden></p>' +
      '<div class="ai-b"><button type="button" class="btn ghost" data-aix>Kapat</button><button type="button" class="btn" id="aiGo">Açıkla</button></div>' +
      '<button type="button" class="ai-regen" id="aiRegen" hidden>↻ Yeniden oluştur</button>' +
      '</div>';
    document.body.appendChild(o);
    document.body.classList.add('ai-lock');
    var note = o.querySelector('#aiNote'), go = o.querySelector('#aiGo'), rg = o.querySelector('#aiRegen'), cinfo = o.querySelector('#aiCache');
    var cached = null;
    function syncBtns() {
      var hasNote = !!note.value.trim();
      go.textContent = cached && !hasNote ? 'Kayıtlı açıklamayı aç' : 'Açıkla';
      rg.hidden = !cached || hasNote;
      cinfo.hidden = !cached;
      if (cached) cinfo.textContent = hasNote ? 'Notunla yeni bir açıklama oluşturulacak.' : '✓ Bu soru için kayıtlı açıklama var; açmak AI hakkı harcamaz.';
    }
    cGet(ck).then(function (c) { cached = c; if (document.getElementById('aiOv') === o) syncBtns(); });
    note.addEventListener('input', syncBtns);
    o.addEventListener('click', function (e) {
      if (e.target === o || e.target.closest('[data-aix]')) { close(); return; }
      if (e.target === go) { if (cached && !note.value.trim()) view(cached); else run(false); }
      if (e.target === rg) run(true);
    });
    var tick = null;
    function busy(b) {
      o.querySelector('#aiLoad').hidden = !b; go.disabled = b; rg.disabled = b; note.disabled = b;
      if (tick) { clearInterval(tick); tick = null; }
      if (b) {
        var t0 = Date.now(), st = o.querySelector('#aiStep'), tm = o.querySelector('#aiTime'), bar = o.querySelector('#aiBar');
        var f = function () {
          var s = (Date.now() - t0) / 1000;
          st.textContent = STEPS[Math.min(STEPS.length - 1, Math.floor(s / 12))];
          tm.textContent = Math.round(s) + ' sn · genelde 30–90 sn sürer';
          bar.style.width = Math.min(96, Math.round(100 * (1 - Math.exp(-s / 45)))) + '%';
        };
        f(); tick = setInterval(f, 500);
      }
    }
    o._stop = function () { if (tick) clearInterval(tick); };
    function err(m) { var e = o.querySelector('#aiErr'); e.hidden = !m; e.textContent = m || ''; }
    function run(force) {
      var n = note.value.trim();
      err(''); busy(true);
      images(q).then(function (imgs) {
        if (document.getElementById('aiOv') !== o) return;
        var C = window.LGSCloud, au = jget(KEY + 'auth', null);
        var sol = q.s && q.s.indexOf('yalnızca cevap anahtarını') < 0 ? q.s : '';
        var body = {
          token: C && C.token ? C.token() : jget(KEY + 'cloudToken', ''),
          jwt: au && au.access_token && (+au.expires_at || 0) * 1000 > Date.now() + 30000 ? au.access_token : '',
          subject: mt.subject, topic: mt.topic, label: label(q),
          question: q.past ? '' : (q.q || ''), choices: q.past ? [] : (q.c || []),
          answer: q.a, solution: sol, images: imgs, pick: pk, note: n,
        };
        var tries = 0;
        (function send() {
          call(body, function (st, d) {
            if (document.getElementById('aiOv') !== o) return;
            if (st === 200 && d.html) {
              var res = { html: d.html, title: d.title || '', model: d.model || '', at: Date.now() };
              if (!n) { cached = res; cPut(ck, res); }
              busy(false); syncBtns(); view(res);
              return;
            }
            if (d.error === 'busy' && tries++ < 1) { setTimeout(send, 8000); return; }
            busy(false); err(errText(st, d));
          });
        })();
      });
    }
    setTimeout(function () { try { go.focus(); } catch (e) {} }, 50);
  }
  function close() {
    var o = document.getElementById('aiOv');
    if (xhr) { try { xhr.abort(); } catch (e) {} xhr = null; }
    if (o) { if (o._stop) o._stop(); o.remove(); }
    if (!document.getElementById('aiView')) document.body.classList.remove('ai-lock');
  }

  /* ---------- tam ekran görüntüleyici ---------- */
  // Sandbox'ta (allow-same-origin yok) localStorage/sessionStorage erişimi hata fırlatır: bellek içi yedekle değiştir.
  var PRE = '<script>(function(){function S(){var d={};return{getItem:function(k){return k in d?d[k]:null},setItem:function(k,v){d[k]=String(v)},removeItem:function(k){delete d[k]},clear:function(){d={}},key:function(i){return Object.keys(d)[i]||null},get length(){return Object.keys(d).length}}}' +
    '["localStorage","sessionStorage"].forEach(function(n){try{window[n].length}catch(e){try{Object.defineProperty(window,n,{value:S(),configurable:true})}catch(_){}}})})();<\/script>';
  function prelude(h) {
    h = String(h || '');
    var m = /<head[^>]*>/i.exec(h);
    return m ? h.slice(0, m.index + m[0].length) + PRE + h.slice(m.index + m[0].length) : PRE + h;
  }
  function view(res) {
    var v = document.getElementById('aiView'); if (v) v.remove();
    v = document.createElement('div');
    v.className = 'ai-view'; v.id = 'aiView';
    v.innerHTML = '<div class="ai-vh"><span>🤖 ' + esc(res.title || 'AI açıklama') + '</span><button type="button" class="ai-close" data-aiclose>✕ Kapat</button></div>';
    var f = document.createElement('iframe');
    f.setAttribute('sandbox', 'allow-scripts');
    f.setAttribute('title', 'AI açıklama');
    f.setAttribute('referrerpolicy', 'no-referrer');
    f.srcdoc = prelude(res.html);
    v.appendChild(f);
    document.body.appendChild(v);
    document.body.classList.add('ai-lock');
    v.querySelector('[data-aiclose]').onclick = function () { v.remove(); if (!document.getElementById('aiOv')) document.body.classList.remove('ai-lock'); };
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-ai]');
    if (b) { e.preventDefault(); open(b.getAttribute('data-ai')); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var v = document.getElementById('aiView');
    if (v) { v.remove(); if (!document.getElementById('aiOv')) document.body.classList.remove('ai-lock'); return; }
    if (document.getElementById('aiOv') && !xhr) close();
  });

  window.LGSAi = { btn: btn, on: on, open: open, view: view };
})();
