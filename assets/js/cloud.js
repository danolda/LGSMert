/* LGSMert · kullanıcı sunucusu (Supabase REST) */
(function () {
  'use strict';
  var CFG = window.LGS_CLOUD || {};
  if (!CFG.url || !CFG.key || !window.LGSApp) return;
  var A = window.LGSApp, TKEY = A.KEY + 'cloudToken';
  function token() {
    var t = A.jget(TKEY, '');
    if (!t) {
      var b = new Uint8Array(24); (window.crypto || {}).getRandomValues ? crypto.getRandomValues(b) : b.forEach(function (_, i) { b[i] = Math.random() * 256; });
      t = Array.prototype.map.call(b, function (x) { return ('0' + x.toString(16)).slice(-2); }).join('');
      A.jset(TKEY, t);
    }
    return t;
  }
  function req(method, path, body, cb) {
    var x = new XMLHttpRequest();
    x.open(method, CFG.url + '/rest/v1/' + path);
    x.setRequestHeader('apikey', CFG.key);
    x.setRequestHeader('Content-Type', 'application/json');
    x.timeout = 15000;
    x.onload = function () { var d = null; try { d = JSON.parse(x.responseText); } catch (e) {} cb(x.status >= 200 && x.status < 300 ? null : (x.status || 'ağ'), d); };
    x.onerror = x.ontimeout = function () { cb('ağ', null); };
    x.send(body ? JSON.stringify(body) : null);
  }
  function save(name, cb) {
    var p = A.getProfile();
    req('POST', 'rpc/save_profile', {
      p_token: token(), p_username: name, p_photo: p.photo || null, p_thumb: p.thumb || null,
      p_stats: A.summaryFor(A.getStats()),
      p_xp: (function () { var x = A.xpGet(), t = A.istDay(), y = A.istDay(new Date(Date.now() - 864e5)), d = {}; d[t] = x.days[t] || 0; if (x.days[y] != null) d[y] = x.days[y]; return { total: x.total, days: d }; })()
    }, function (err, d) {
      if (err) return cb('Sunucuya ulaşılamadı, sonra tekrar denenecek.');
      if (d === 'taken') {
        if (A.jget(A.KEY + 'cloudName', '') === name) A.jset(A.KEY + 'cloudLost', 1);
        return cb('Bu kullanıcı adı alınmış. Bu profil seninse yukarıdan “Google ile giriş yap”a dokun; profilin geri gelir.');
      }
      if (d === 'bad_name') return cb('Kullanıcı adı 2-24 karakter olmalı.');
      if (d !== 'ok') return cb('Kaydedilemedi.');
      var first = A.jget(A.KEY + 'cloudName', '') !== name;
      A.jset(A.KEY + 'cloudName', name); localStorage.removeItem(A.KEY + 'cloudLost');
      cb(null);
      if (G.signedIn()) { if (first && !G.linked()) G.sync(); else G.backupSoon(); }
    });
  }

  /* ---------- Google ile giriş (Supabase Auth, implicit akış) ----------
     index.html başındaki küçük betik dönüşteki #access_token=… parçasını lgs2027:authNew'e yazar ve
     adresi girişten önceki sayfaya (#/profil) geri çevirir; burada oturum kurulup profil eşitlenir. */
  var AKEY = A.KEY + 'auth', LKEY = A.KEY + 'acctLinked';
  function esc(t) { return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function sess() { return A.jget(AKEY, null); }
  function authReq(method, path, body, cb) {
    getAccess(function (at) {
      if (!at) return cb('no_auth', null);
      var x = new XMLHttpRequest();
      x.open(method, CFG.url + path);
      x.setRequestHeader('apikey', CFG.key);
      x.setRequestHeader('Authorization', 'Bearer ' + at);
      x.setRequestHeader('Content-Type', 'application/json');
      x.timeout = 20000;
      x.onload = function () { var d = null; try { d = JSON.parse(x.responseText); } catch (e) {} cb(x.status >= 200 && x.status < 300 ? null : (x.status || 'ağ'), d); };
      x.onerror = x.ontimeout = function () { cb('ağ', null); };
      x.send(body ? JSON.stringify(body) : null);
    });
  }
  function getAccess(cb) {
    var s = sess();
    if (!s || !s.access_token) return cb(null);
    if (s.expires_at && Date.now() / 1000 < s.expires_at - 90) return cb(s.access_token);
    if (!s.refresh_token) return cb(null);
    var x = new XMLHttpRequest();
    x.open('POST', CFG.url + '/auth/v1/token?grant_type=refresh_token');
    x.setRequestHeader('apikey', CFG.key);
    x.setRequestHeader('Content-Type', 'application/json');
    x.timeout = 20000;
    x.onload = function () {
      var d = null; try { d = JSON.parse(x.responseText); } catch (e) {}
      if (x.status === 200 && d && d.access_token) {
        s.access_token = d.access_token; s.refresh_token = d.refresh_token || s.refresh_token;
        s.expires_at = Math.floor(Date.now() / 1000) + (+d.expires_in || 3600);
        A.jset(AKEY, s); cb(s.access_token);
      } else if (x.status >= 400 && x.status < 500) { localStorage.removeItem(AKEY); localStorage.removeItem(LKEY); cb(null); repaint(); }
      else cb(null);                                   // ağ hatası: oturum kalsın, sonra yeniden denenir
    };
    x.onerror = x.ontimeout = function () { cb(null); };
    x.send(JSON.stringify({ refresh_token: s.refresh_token }));
  }
  function repaint() { if (/^#\/profil/.test(location.hash) && A.route) A.route(); }
  var busy = '', lastMsg = '';
  function setMsg(m) { lastMsg = m; var e = document.getElementById('acctMsg'); if (e) e.textContent = m; }

  // ---- yerel ilerleme ile buluttakini birleştir (EXP asla azalmaz) ----
  function mergeQ(a, b) { var o = {}, k; for (k in a) o[k] = a[k]; for (k in b) { var x = o[k], y = b[k]; o[k] = !x ? y : [Math.max(x[0] || 0, y[0] || 0), Math.max(x[1] || 0, y[1] || 0)]; } return o; }
  function mergeObj(a, b) { var o = {}, k; for (k in a || {}) o[k] = a[k]; for (k in b || {}) if (o[k] == null) o[k] = b[k]; return o; }
  function mergeDays(a, b, add) { var o = {}, k; for (k in a || {}) o[k] = +a[k] || 0; for (k in b || {}) o[k] = add ? (o[k] || 0) + (+b[k] || 0) : Math.max(o[k] || 0, +b[k] || 0); return o; }
  function applyServer(d, mode) {
    // mode: 'same' (bu cihaz zaten bu profil), 'anon' (bu cihazda bulut profili yoktu → yerel ilerleme eklenir), 'switch' (başka profil → buluttaki alınır)
    var b = d.backup || {}, XK = A.KEY + 'xp', SK = A.KEY + 'stats';
    var lx = mode === 'switch' ? { v: 1, total: 0, q: {}, days: {} } : A.xpGet();
    var bx = b.xp || {}, base = Math.max(+d.xp_total || 0, +bx.total || 0);
    var sd = mergeDays(d.xp_days, bx.days, false);
    var x = { v: 1, q: mergeQ(bx.q || {}, lx.q || {}), f: mergeObj(bx.f, lx.f), cl: mergeObj(bx.cl, lx.cl) };
    for (var k in lx) if (!(k in x) && k !== 'total' && k !== 'days') x[k] = lx[k];
    for (k in bx) if (!(k in x) && k !== 'total' && k !== 'days') x[k] = bx[k];
    if (mode === 'anon') { x.total = base + (+lx.total || 0); x.days = mergeDays(sd, lx.days, true); }
    else { x.total = Math.max(base, +lx.total || 0); x.days = mergeDays(sd, lx.days, false); }
    A.jset(XK, x);
    // istatistik: tam yedek varsa onu, yoksa sunucu özetini kullan
    var ls = mode === 'switch' ? { v: 1, t: {}, days: {} } : A.getStats(), st = { v: 1, t: {}, days: {} }, srv = {};
    if (b.stats && b.stats.t) { srv = b.stats.t; st.days = b.stats.days || {}; }
    else for (var sj in d.stats || {}) for (var tid in (d.stats[sj].t || {})) { var a = d.stats[sj].t[tid]; srv[tid] = { ok: +a[0] || 0, bad: +a[1] || 0 }; }
    var ids = {}; for (k in srv) ids[k] = 1; for (k in ls.t) ids[k] = 1;
    for (k in ids) {
      var p = srv[k] || { ok: 0, bad: 0 }, q = ls.t[k] || { ok: 0, bad: 0 };
      st.t[k] = mode === 'anon' ? { ok: p.ok + q.ok, bad: p.bad + q.bad } : { ok: Math.max(p.ok, q.ok), bad: Math.max(p.bad, q.bad) };
    }
    for (k in ls.days || {}) { var g = ls.days[k], h = st.days[k] || { ok: 0, bad: 0 }; st.days[k] = mode === 'anon' ? { ok: h.ok + g.ok, bad: h.bad + g.bad } : { ok: Math.max(h.ok, g.ok), bad: Math.max(h.bad, g.bad) }; }
    A.jset(SK, st);
    var pr = A.getProfile();
    pr.name = d.username; if (d.photo) { pr.photo = d.photo; pr.thumb = d.thumb || pr.thumb; } else if (mode === 'switch') { pr.photo = ''; pr.thumb = ''; }
    A.jset(TKEY, d.token); A.jset(A.KEY + 'cloudName', d.username); localStorage.removeItem(A.KEY + 'cloudLost');
    A.setProfile(pr);                                  // menüdeki adı yeniler ve bulut push'u tetikler
    if (A.xpBarSet) A.xpBarSet(x.total);
  }
  var G = {
    signedIn: function () { var s = sess(); return !!(s && s.access_token); },
    linked: function () { return !!A.jget(LKEY, ''); },
    email: function () { var s = sess(); return (s && s.email) || ''; },
    signIn: function () {
      A.jset(A.KEY + 'authRet', location.hash && !/access_token|error/.test(location.hash) ? location.hash : '#/profil');
      var back = location.origin + location.pathname;
      location.href = CFG.url + '/auth/v1/authorize?provider=google&redirect_to=' + encodeURIComponent(back);
    },
    signOut: function () {
      if (!confirm('Google hesabından çıkış yapılsın mı?\n\nProfilin bu cihazda kalır; ilerlemen Google hesabında da saklı. Başka bir cihazda Google ile girersen geri gelir.')) return;
      G.backupNow(function () {
        authReq('POST', '/auth/v1/logout', {}, function () {});
        setTimeout(function () { localStorage.removeItem(AKEY); localStorage.removeItem(LKEY); repaint(); }, 300);
      });
    },
    sync: function (cb) {
      busy = 'Profil eşitleniyor…'; setMsg(busy);
      authReq('POST', '/rest/v1/rpc/account_sync', { p_token: token() }, function (err, d) {
        busy = '';
        if (err || !d) { setMsg('Sunucuya ulaşılamadı, biraz sonra tekrar dene.'); return cb && cb(err || 'ağ'); }
        if (d.status === 'no_auth') { localStorage.removeItem(AKEY); setMsg('Oturum süresi dolmuş, tekrar giriş yap.'); repaint(); return cb && cb('no_auth'); }
        var s = sess(); if (s && d.email && !s.email) { s.email = d.email; A.jset(AKEY, s); }
        if (d.status === 'none') {
          localStorage.removeItem(LKEY);
          var pn = A.getProfile().name, pc = A.jget(A.KEY + 'cloudName', '');
          setMsg(!pn ? 'Şimdi bir kullanıcı adı seçip Kaydet’e bas; profilin bu Google hesabına bağlanacak.' :
            pc ? 'Bu cihazdaki “' + pc + '” profili başka bir Google hesabına bağlı.' : 'Profilin bağlanıyor…');
          if (pn && !A.jget(A.KEY + 'cloudName', '')) save(pn, function () {});   // kaydı bitince save() yeniden sync eder
          repaint(); return cb && cb(null);
        }
        var cn = A.jget(A.KEY + 'cloudName', ''), mode;
        if (cn && cn.toLocaleLowerCase('tr') === String(d.username).toLocaleLowerCase('tr')) mode = 'same';
        else if (cn && A.jget(TKEY, '') !== d.token) {
          if (!confirm('Bu cihazda “' + cn + '” profili açık. Google hesabına bağlı profil “' + d.username + '”.\n\n“' + d.username + '” profiline geçilsin mi? (“' + cn + '” sunucuda kalır.)')) {
            authReq('POST', '/auth/v1/logout', {}, function () {}); localStorage.removeItem(AKEY); repaint(); return cb && cb('cancel');
          }
          var olds = A.jget(A.KEY + 'oldTokens', []); olds.push({ name: cn, token: A.jget(TKEY, ''), at: Date.now() }); A.jset(A.KEY + 'oldTokens', olds.slice(-5));
          mode = 'switch';
        } else mode = cn ? 'same' : 'anon';
        lastMsg = '';
        applyServer(d, mode);
        A.jset(LKEY, d.username);
        A.toast && A.toast('✓ ' + d.username + ' profili Google hesabına bağlı. ' + (A.nf ? A.nf(A.xpGet().total) : A.xpGet().total) + ' EXP');
        save(d.username, function () {});
        G.backupSoon(1500);
        repaint(); cb && cb(null);
      });
    },
    backupNow: function (cb) {
      cb = cb || function () {};
      if (!G.signedIn() || !G.linked()) return cb();
      var body = { v: 1, at: Date.now(), xp: A.xpGet(), stats: A.getStats(), name: A.getProfile().name };
      authReq('POST', '/rest/v1/rpc/account_backup', { p_backup: body }, function () { cb(); });
    },
    backupSoon: function (ms) {
      var due = Date.now() + (ms || 20000);
      if (G._bt && G._due <= due) return;              // daha erken planlanmış yedek varsa onu bekle
      clearTimeout(G._bt); G._due = due;
      G._bt = setTimeout(function () { G._bt = null; G.backupNow(); }, due - Date.now());
    },
    boot: function () {
      var nw = A.jget(A.KEY + 'authNew', null);
      if (nw) {
        localStorage.removeItem(A.KEY + 'authNew');
        if (nw.error) { setTimeout(function () { A.toast && A.toast('Google girişi tamamlanamadı: ' + (nw.error_description || nw.error)); }, 600); }
        else if (nw.access_token) {
          var em = '';
          try { em = JSON.parse(decodeURIComponent(escape(atob(nw.access_token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'))))).email || ''; } catch (e) {}
          A.jset(AKEY, { access_token: nw.access_token, refresh_token: nw.refresh_token, expires_at: +nw.expires_at || Math.floor(Date.now() / 1000) + (+nw.expires_in || 3600), email: em });
          G.sync();
          return;
        }
      }
      if (G.signedIn()) G.sync();
      document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') G.backupNow(); });
    },
    render: function (el) {
      if (!el) return;
      var lost = A.jget(A.KEY + 'cloudLost', 0), gi = '<svg class="g-ic" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>';
      var h;
      if (G.signedIn()) {
        h = '<div class="acct-row"><span class="acct-ok">✓</span><div class="acct-t"><b>Google hesabına bağlı</b><small>' + esc(G.email() || 'Google hesabı') + '</small>' +
          (G.linked() ? '<small>Profil: ' + esc(A.jget(LKEY, '')) + '</small>' : '') + '</div><button class="btn ghost" id="gOut">Çıkış</button></div>' +
          '<p class="small" id="acctMsg">' + esc(busy || lastMsg || (G.linked() ? 'EXP’in ve istatistiklerin hesabında saklı; telefon değişse ya da tarayıcı verisi silinse bile Google ile girince geri gelir.' : '')) + '</p>';
      } else {
        var named = !!A.getProfile().name && !lost;
        h = '<div class="acct-t"><b>🔐 ' + (named ? 'Hesabını koru' : 'Profiline Google ile gir') + '</b></div>' +
          (lost ? '<p class="small acct-warn">Bu cihazdaki profil bağlantısı kopmuş. Google ile giriş yaparsan profilin ve EXP’in geri gelir.</p>' :
            '<p class="small">' + (named ? 'Google hesabını bağla; EXP’in ve istatistiklerin hesabına kaydedilsin. Telefon değişse ya da tarayıcı verisi silinse bile geri gelir.' :
              'Daha önce profil oluşturduysan Google ile giriş yap; EXP’in geri gelsin.') + '</p>') +
          '<button class="btn gbtn" id="gIn">' + gi + '<span>' + (named ? 'Google ile hesabını bağla' : 'Google ile giriş yap') + '</span></button>' +
          '<p class="small" id="acctMsg">' + esc(lastMsg) + '</p>';
      }
      el.innerHTML = '<div class="card acct">' + h + '</div>';
      var bi = document.getElementById('gIn'), bo = document.getElementById('gOut');
      if (bi) bi.addEventListener('click', function () { bi.disabled = true; bi.lastChild.textContent = 'Google’a yönlendiriliyor…'; G.signIn(); });
      if (bo) bo.addEventListener('click', G.signOut);
    }
  };

  var tmr = null;
  window.LGSCloud = {
    google: G,
    renderAcct: function (el) { G.render(el); },
    claim: save,
    push: function () {
      clearTimeout(tmr);
      tmr = setTimeout(function () {
        var p = A.getProfile(), n = A.jget(A.KEY + 'cloudName', '');
        if (p.name && (!n || p.name === n)) save(p.name, function () {});
      }, 2500);
    },
    rpc: function (name, body, cb) { req('POST', 'rpc/' + name, body, cb); },
    token: function () { return token(); },
    name: function () { return A.jget(A.KEY + 'cloudName', ''); },
    leaderboard: function (period, cb) {
      var n = A.jget(A.KEY + 'cloudName', '');
      req('POST', 'rpc/leaderboard', { p_period: period, p_token: n ? token() : null }, function (err, d) { cb(err ? null : d); });
    },
    champions: function (period, cb) {
      req('POST', 'rpc/champions', { p_period: period }, function (err, d) { cb(err ? null : d); });
    },
    search: function (q, cb) {
      var f = 'public_profiles?select=username,thumb,xp_total,updated_at&order=updated_at.desc&limit=25';
      if (q) f += '&username=ilike.' + encodeURIComponent('*' + q.replace(/[*,()]/g, '') + '*');
      req('GET', f, null, function (err, d) { cb(err ? [] : d || []); });
    },
    get: function (name, cb) {
      req('GET', 'public_profiles?select=username,photo,stats,xp_total,updated_at&username=ilike.' + encodeURIComponent(name.replace(/[*,()%_]/g, '')) + '&limit=1', null,
        function (err, d) { cb(!err && d && d[0] ? d[0] : null); });
    }
  };
  // sayfa açıldığında güncel istatistikleri gönder
  window.LGSCloud.push();
  G.boot();
  // profil sayfası bu dosya yüklenmeden çizildiyse kartı şimdi ekle
  var ab = document.getElementById('acctBox'); if (ab && !ab.firstChild) G.render(ab);
})();
