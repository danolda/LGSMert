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
      p_stats: A.summaryFor(A.getStats())
    }, function (err, d) {
      if (err) return cb('Sunucuya ulaşılamadı, sonra tekrar denenecek.');
      if (d === 'taken') return cb('Bu kullanıcı adı başkası tarafından alınmış.');
      if (d === 'bad_name') return cb('Kullanıcı adı 2-24 karakter olmalı.');
      if (d !== 'ok') return cb('Kaydedilemedi.');
      A.jset(A.KEY + 'cloudName', name);
      cb(null);
    });
  }
  var tmr = null;
  window.LGSCloud = {
    claim: save,
    push: function () {
      clearTimeout(tmr);
      tmr = setTimeout(function () {
        var p = A.getProfile(), n = A.jget(A.KEY + 'cloudName', '');
        if (p.name && (!n || p.name === n)) save(p.name, function () {});
      }, 2500);
    },
    search: function (q, cb) {
      var f = 'public_profiles?select=username,thumb,updated_at&order=updated_at.desc&limit=25';
      if (q) f += '&username=ilike.' + encodeURIComponent('*' + q.replace(/[*,()]/g, '') + '*');
      req('GET', f, null, function (err, d) { cb(err ? [] : d || []); });
    },
    get: function (name, cb) {
      req('GET', 'public_profiles?select=username,photo,stats,updated_at&username=ilike.' + encodeURIComponent(name.replace(/[*,()%_]/g, '')) + '&limit=1', null,
        function (err, d) { cb(!err && d && d[0] ? d[0] : null); });
    }
  };
  // sayfa açıldığında güncel istatistikleri gönder
  window.LGSCloud.push();
})();
