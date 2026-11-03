/* LGS Kışlası · servis çalışanı: önce ağ, çevrimdışıysa önbellek.
   Anlatım sesleri (audio/…mp3?h=…) içerik özetli adreslerdir: istendikçe ayrı önbelleğe alınır, sonra önbellekten çalar
   (Safari'nin Range isteklerine 206 parça yanıtı verilir). Toplu ön yükleme yok. */
var C = 'kisla-v89';
var AU = 'kisla-ses-v1';
var SHELL = ['./', './index.html', './manifest.webmanifest', './img/icons/icon-192.png'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(C).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== C && k !== AU; }).map(function (k) { return caches.delete(k); }));
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
function audio(e) {
  var r = e.request, key = r.url;
  e.respondWith(caches.open(AU).then(function (c) {
    return c.match(key).then(function (hit) {
      if (hit) return ranged(r, hit);
      // önbellekte yok: tam dosyayı (Range'siz) indir, sakla, isteğe göre yanıtla
      return fetch(key).then(function (res) {
        if (!res || !res.ok) return res;
        var cp = res.clone();
        e.waitUntil(c.put(key, cp).then(function () { return c.keys(); }).then(function (ks) {
          return Promise.all(ks.slice(0, Math.max(0, ks.length - 600)).map(function (k) { return c.delete(k); }));   // eski sesleri buda
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
