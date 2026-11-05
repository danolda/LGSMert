/* LGS Kışlası · servis çalışanı: önce ağ, çevrimdışıysa önbellek.
   Anlatım sesleri (audio/…mp3?h=…) içerik özetli adreslerdir: istendikçe ayrı önbelleğe alınır, sonra önbellekten çalar
   (Safari'nin Range isteklerine 206 parça yanıtı verilir). Toplu ön yükleme yok.
   Ses önbelleği ders bazında LRU: en fazla ~1500 dosya / ~80 MB; aşılınca en uzun süredir açılmayan dersin tüm sesleri silinir. */
var C = 'kisla-v94';
var AU = 'kisla-ses-v1';
var AUL = 'kisla-ses-lru';            // ders → { t: son kullanım, b: bayt } (JSON)
var LIM_N = 1500, LIM_B = 80 * 1024 * 1024, AVG_B = 46000;
var SHELL = ['./', './index.html', './manifest.webmanifest', './img/icons/icon-192.png'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(C).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== C && k !== AU && k !== AUL; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
function ranged(req, res) {
  var m = /bytes=(\d*)-(\d*)/.exec(req.headers.get('range') || '');
  if (!m) return res;
  return res.arrayBuffer().then(function (buf) {
    var n = buf.byteLength, a = m[1] ? +m[1] : Math.max(0, n - +m[2]), b = m[1] && m[2] ? Math.min(+m[2], n - 1) : n - 1;
    if (a >= n) return new Response(null, { status: 416, headers: { 'Content-Range': 'bytes */' + n } });
    return new Response(buf.slice(a, b + 1), { status: 206, headers: {
      'Content-Type': 'audio/mpeg', 'Content-Length': String(b - a + 1), 'Content-Range': 'bytes ' + a + '-' + b + '/' + n, 'Accept-Ranges': 'bytes' } });
  });
}
var lru = null, lruQ = Promise.resolve(), lruSaved = 0;
function lesson(url) { var m = /\/audio\/anlatim\/([^/]+)\//.exec(url); return m ? m[1] : '?'; }
function lruLoad() {
  if (lru) return Promise.resolve(lru);
  return caches.open(AUL).then(function (c) { return c.match('lru'); })
    .then(function (r) { return r ? r.json() : {}; }).catch(function () { return {}; })
    .then(function (j) { lru = lru || j || {}; return lru; });
}
function lruSave() {
  lruSaved = Date.now();
  return caches.open(AUL).then(function (c) {
    return c.put('lru', new Response(JSON.stringify(lru), { headers: { 'Content-Type': 'application/json' } }));
  });
}
function lruTouch(id, add) {   // dersin son kullanımını güncelle (yalnız yeni dosyada ya da 30 sn'de bir kaydet)
  lruQ = lruQ.then(lruLoad).then(function () {
    var o = lru[id] || (lru[id] = { t: 0, b: 0 });
    o.t = Date.now(); if (add) o.b += add;
    if (add || Date.now() - lruSaved > 30000) return lruSave();
  }).catch(function () {});
  return lruQ;
}
function lruPrune(c, cur) {    // sınır aşıldıysa en eski dersleri bütün olarak sil (çalan ders korunur)
  lruQ = lruQ.then(lruLoad).then(function () { return c.keys(); }).then(function (ks) {
    var by = {}, n = 0, b = 0;
    ks.forEach(function (k) { var id = lesson(k.url); (by[id] = by[id] || []).push(k); });
    Object.keys(by).forEach(function (id) {
      var o = lru[id], est = by[id].length * AVG_B;
      by[id].b = o && o.b ? o.b : est; n += by[id].length; b += by[id].b;
    });
    if (n <= LIM_N && b <= LIM_B) return;
    var old = Object.keys(by).filter(function (id) { return id !== cur; })
      .sort(function (x, y) { return ((lru[x] || {}).t || 0) - ((lru[y] || {}).t || 0); });
    var del = [];
    while ((n > LIM_N || b > LIM_B) && old.length) {
      var id = old.shift(); n -= by[id].length; b -= by[id].b; del = del.concat(by[id]); delete lru[id];
    }
    return Promise.all(del.map(function (k) { return c.delete(k); })).then(lruSave);
  }).catch(function () {});
  return lruQ;
}
function audio(e) {
  var r = e.request, key = r.url, id = lesson(key);
  e.respondWith(caches.open(AU).then(function (c) {
    return c.match(key).then(function (hit) {
      if (hit) { e.waitUntil(lruTouch(id, 0)); return ranged(r, hit); }
      // önbellekte yok: tam dosyayı (Range'siz) indir, sakla, isteğe göre yanıtla
      return fetch(key).then(function (res) {
        if (!res || !res.ok) return res;
        var cp = res.clone();
        e.waitUntil(cp.blob().then(function (bl) {
          return c.put(key, new Response(bl, { headers: { 'Content-Type': 'audio/mpeg' } })).then(function () {
            return lruTouch(id, bl.size);
          }).then(function () { return lruPrune(c, id); });
        }));
        return ranged(r, res);
      }).catch(function () { return fetch(r); });
    });
  }));
}
self.addEventListener('fetch', function (e) {
  var r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== location.origin) return;
  if (/\/audio\/anlatim\/.+\.mp3$/.test(u.pathname) && u.searchParams.get('h')) return audio(e);
  e.respondWith(fetch(r, { cache: 'no-cache' }).then(function (res) {
    if (res && res.ok) { var cp = res.clone(); caches.open(C).then(function (c) { c.put(r, cp); }); }
    return res;
  }).catch(function () {
    return caches.match(r, { ignoreSearch: false }).then(function (m) { return m || caches.match(r, { ignoreSearch: true }) || caches.match('./index.html'); });
  }));
});
