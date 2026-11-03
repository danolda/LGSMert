# Adım Adım Anlatım · ders veri biçimi

Konu videolarının yerine geçen animasyonlu, sesli, sahne sahne anlatım.
Oynatıcı: `assets/js/anlatim.js` + `assets/css/anlatim.css`. Yol: `#/anlatim/<konuId>`.
Konu sayfasında başlığın altına **▶ Adım Adım Anlatım** düğmesi, `data/anlatim/index.js`'te kaydı olan konularda kendiliğinden çıkar.

## Yeni ders eklemek (3 adım)
1. `data/anlatim/<konuId>.js` dosyasını yaz (aşağıdaki biçim). `konuId`, `data/index.js`'teki konu kimliğidir (ör. `fen-dna`).
2. `data/anlatim/index.js` içine `'<konuId>': { n: <sahne sayısı>, dk: <yaklaşık dakika> }` ekle.
   Mevcut bir dersi değiştirdiysen aynı dosyadaki `LGS_AN_V` değerini 1 artır (tarayıcı önbelleği).
3. `node tools/validate.js` → 0 sorun; ders kontrolü için
   `node -e "global.window={};require('./data/anlatim/<konuId>.js');const L=window.LGS_AN['<konuId>'];console.log(L.scenes.length, L.scenes.filter(s=>s.cp).length)"`.
   Sonra `sw.js` önbellek adını ve `index.html` `?v=` değerini bir artır.

## Dosya biçimi
```js
(window.LGS_AN = window.LGS_AN || {})['mat-uslu'] = {
  title: 'Üslü İfadeler',
  desc: 'Giriş ekranındaki kısa açıklama.',
  ozet: ['Bitiş ekranındaki “Akılda kalsın” maddeleri (HTML olabilir)', '...'],
  scenes: [ /* 8–15 sahne */ ]
};
```

### Anlatım sahnesi
```js
{ t: 'Sahne başlığı',
  base: '<svg …>…</svg>',          // isteğe bağlı: sahne açılınca konan iskelet (gizli parçalar .rv / .dr)
  steps: [                          // adımlar sırayla oynar, her adım bir altyazı + ses
    { s: 'Altyazı (HTML, <sup>, {{pay|payda}} olur)',
      v: 'Okunacak metin (isteğe bağlı)',   // yoksa s'den üretilir: <sup>4</sup> → "üssü 4", · → "çarpı", {{1|8}} → "8'de 1"
      h: '<div class="an-rule">…</div>',     // isteğe bağlı: sahneye eklenen yeni blok (kayarak belirir)
      on: '.b1,.b2',                         // isteğe bağlı: base/önceki bloklardaki .rv/.dr öğelerini görünür yap
      mk: '.r4 td',                          // isteğe bağlı: sarı vurgu (yanıp sönerek)
      hide: '.k0',                           // isteğe bağlı: daha önce gösterileni gizle
      w: 900 }                               // isteğe bağlı: adım sonrası ek bekleme (ms), çizim animasyonu için
  ] }
```

### Ara soru sahnesi (2–4 tane / ders)
```js
{ t: 'Ara soru', cp: {
    q: '<p>Soru kökü</p>',
    c: ['A şıkkı', 'B şıkkı', 'C şıkkı', 'D şıkkı'], a: 'C',
    hint: 'Yanlışta gösterilen kısa ipucu', hintV: 'ipucunun okunuşu (isteğe bağlı)',
    why: 'Doğruda gösterilen açıklama', whyV: 'açıklamanın okunuşu (isteğe bağlı)' },
  steps: [{ s: 'Yalnızca yönerge cümlesi; ara soru sahnesinde h/on kullanma.' }] }
```
Öğrenci şık seçer, **İşaretle** ile kilitler. Doğru olmadan sonraki sahneye geçilmez; yanlış şık devre dışı kalır, ipucu çıkar, yeniden dener.

## Hazır CSS sınıfları
| Sınıf | Görünüm |
|---|---|
| `an-rule` | Konu rengi kenarlı kural kutusu |
| `an-trap` | ⚠️ kırmızı tuzak kutusu |
| `an-tip` | sarı not kutusu |
| `an-ex` + `an-l` | çözümlü örnek, her `an-l` bir satır |
| `an-big` | büyük formül |
| `an-grid` | 3 sütunlu kart ızgarası (`<div><b>başlık</b>metin</div>`) |
| `an-tbl` | tablo; satırlara `rv x1` verip `on:'.x1'` ile tek tek aç |
| `an-ok-t` / `an-bad-t` | yeşil doğru / üstü çizili yanlış |
| `an-ek` | ek vurgusu (konu rengi) · `an-w` altı çizili sözcük |
| `rv` | `on` gelene kadar gizli, sonra kayarak belirir |
| `dr` | SVG çizgisi `on` gelince çizilerek belirir (pathLength otomatik) |
| SVG: `an-svg`, `acc`, `mut`, `st`, `st2`, `box`, `boxa` | tema uyumlu metin/çizgi/kutu renkleri (koyu/açık tema) |

## Kurallar
- LaTeX yok; Unicode ve `{{pay|payda}}`. SVG içinde `<b>` yok (font-weight kullan).
- 390 px'te taşmasın: SVG `viewBox` en fazla ~340 genişlik, `class="an-svg"`.
- Altyazı kısa olsun (≤ ~160 karakter); uzun cümle sesli okumada kesilebilir.
- Matematikte okunuşu belirsiz her adıma `v` yaz ("2 üssü eksi 3", "8'de 1").
- İçerik sitenin konu özetine ve çıkmış soru tuzaklarına dayansın; ara sorular LGS kalıbında olsun.

## EXP ve ilerleme
- Ara soru ilk denemede doğru: kolay soru EXP'si (10), anahtar `an-<konuId>|ko:cp<n>`.
- Anlatımı bitirme: 10 zor soru EXP'si (200), anahtarlar `an-<konuId>|zr:bitir1..10`.
- Her anahtar sitenin 7 gün kuralına tabidir (`LGSApp.awardXP`); EXP bulut profiline `LGSCloud.push` ile gider.
- İlerleme `localStorage['lgs2027:anlatim'][konuId] = { far, i, cp, done, pass, fin }`. `far`: izlenen en ileri sahne (ileri atlama sınırı). Yeniden izlemede `far` sıfırlanır.
- Ses: Web Speech API, tr-TR sesi; ses yoksa ya da 🔇 ise altyazı okuma süresiyle ilerler. Tercih `lgs2027:anlatimPref`.
