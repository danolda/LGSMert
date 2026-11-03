# Adım Adım Anlatım · ders veri biçimi

Konu videolarının yerine geçen animasyonlu, sesli, sahne sahne anlatım.
Oynatıcı: `assets/js/anlatim.js` + `assets/css/anlatim.css`. Yol: `#/anlatim/<konuId>`.
Konu sayfasında başlığın altına **▶ Adım Adım Anlatım** düğmesi, `data/anlatim/index.js`'te kaydı olan konularda kendiliğinden çıkar.

## Yeni ders eklemek (3 adım)
1. `data/anlatim/<konuId>.js` dosyasını yaz (aşağıdaki biçim). `konuId`, `data/index.js`'teki konu kimliğidir (ör. `fen-dna`).
2. `data/anlatim/index.js` içine `'<konuId>': { n: <sahne sayısı>, dk: <yaklaşık dakika> }` ekle.
   Mevcut bir dersi değiştirdiysen aynı dosyadaki `LGS_AN_V` değerini 1 artır (tarayıcı önbelleği).
3. **Seslendirme:** `env -u HTTPS_PROXY -u HTTP_PROXY -u https_proxy -u http_proxy PYTHONPATH=/workspace/work/anl/pylib python3 tools/anlatim_ses.py <konuId>`
   (konuId vermezsen tüm dersler). Önce `python3 tools/anlatim_ses.py --check <konuId>` ile okunuş metinlerine göz at.
   Değişmeyen metinler atlanır; ders metnini her değiştirdiğinde yeniden çalıştır (yarıda kalırsa aynı komut kaldığı yerden sürer).
4. `node tools/validate.js` → 0 sorun; ders kontrolü için
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

### Ara soru sahnesi (en fazla 4 / ders; etkinlik yoksa en az 2)
```js
{ t: 'Ara soru', cp: {
    q: '<p>Soru kökü</p>',
    c: ['A şıkkı', 'B şıkkı', 'C şıkkı', 'D şıkkı'], a: 'C',
    hint: 'Yanlışta gösterilen kısa ipucu', hintV: 'ipucunun okunuşu (isteğe bağlı)',
    why: 'Doğruda gösterilen açıklama', whyV: 'açıklamanın okunuşu (isteğe bağlı)' },
  steps: [{ s: 'Yalnızca yönerge cümlesi; ara soru sahnesinde h/on kullanma.' }] }
```
Öğrenci şık seçer, **İşaretle** ile kilitler. Doğru olmadan sonraki sahneye geçilmez; yanlış şık devre dışı kalır, ipucu çıkar, yeniden dener.

### Etkileşimli sahne (`ia`) · 8 tür
Ara soru gibi **kilitler**: doğru tamamlanmadan ▶ açılmaz, ileri noktaya atlanamaz. İlk denemede (hiç yanlış dokunuş olmadan) doğru =
**kolay soru EXP'si (10)**, anahtar `an-<konuId>|ko:ia<n>` (n: dersteki kaçıncı `ia` sahnesi, 1'den), 7 gün kuralı (`LGSApp.awardXP`).
Durum `localStorage['lgs2027:anlatim'][konuId].ia[n] = 'tried' | 'ok1' | 'ok'`; çözülmüş etkinliğe dönülünce çözümü kilitli gösterilir.
Hepsi **dokun-dokun** (sürükle-bırak yok, iOS Safari'de çalışır), 390 px öncelikli, klavye ile de kullanılır (düğmeler, `aria-pressed`, `aria-live` geri bildirim).
Yanlışta: kırmızı sarsılma + titreşim + kısa ses (🔇'de yok) + `hint` yazılır; `hint` **ilk yanlışta seslendirilir**. Doğruda: `why` yazılır ve seslendirilir.

Ortak alanlar (hepsinde zorunlu: `tip`, `q`, `hint`, `why`; isteğe bağlı `hintV`, `whyV` okunuş):
```js
{ t: 'Sahne başlığı',
  steps: [{ s: 'Yönerge cümlesi (seslendirilir). h/on KULLANMA.' }],      // sahne açılınca okunur
  ia: { tip: '<tür>', q: '<p>Görünen soru/yönerge (HTML)</p>', hint: '…', hintV: '…', why: '…', whyV: '…', /* türe özgü alanlar */ } }
```
Ses parçaları ara soruyla aynı: `<sahne>-<adım>.mp3` (yönerge), `<sahne>-why.mp3`, `<sahne>-hint.mp3` (`anlatim_ses.py` üretir).
Satır içi metinler (`m`, `a`, kart metinleri) seslendirilmez; ekranda okunur. `{{pay|payda}}`, `<sup>`, `<b>` hepsinde çalışır.

| tip | türe özgü alanlar | öğrenci ne yapar | doğrulama (validate.js) |
|---|---|---|---|
| `eslestir` | `sol:[…]`, `sag:[…]` (`sol[i]` ↔ `sag[i]`), `solBaslik?`, `sagBaslik?` | birine, sonra eşine dokunur; her doğru çift renkli ve numaralı kilitlenir; yanlış çift = deneme hatası | 3–6 çift, tekrar yok |
| `sirala` | `ogeler:[doğru sırayla]`, `ust?:'en küçük'`, `alt?:'en büyük'` | havuzdan sırayla dokunur (yerleşene dokununca geri döner) → Kontrol et; doğru yerdekiler kilitlenir, yanlışlar havuza döner | 3–7 öğe, tekrar yok |
| `eleme` | `ogeler:[…]`, `ele:[elenecek indisler]` | uymayanlara dokunup üstünü çizer (sayaç: elenecek/seçtiğin) → Kontrol et; yanlış elenen geri gelir | 4–9 öğe, en az 2 öğe kalmalı |
| `dogruyanlis` | `ifadeler:[{ m:'ifade', d:true\|false, a:'kısa açıklama' }]` | her satırda ✓ Doğru / ✗ Yanlış; anında değerlendirilir, doğru satır açıklamasıyla kilitlenir | 3–5 ifade, hem D hem Y, her birinde `a` |
| `bosluk` | `metin:'… [_] … 2[^_] …'`, `secenek:[kartlar]`, `cevap:[her boşluğun kartı]` | boşluğa (ya da sıradaki boşa) sonra karta dokunur; dolu boşluğa dokununca boşalır → Kontrol et. `[^_]` = üs konumunda boşluk | 1–4 boşluk, kart sayısı > boşluk (çeldirici), ≤ 8, her cevap kartlarda var |
| `grup` | `gruplar:['A','B','C']`, `ogeler:[{ m:'…', g:0 }]` | öğeye, sonra kutusuna dokunur (kutudakine dokununca geri döner) → Kontrol et; yanlışlar havuza döner | 2–4 grup, 4–10 öğe, boş grup yok |
| `gorselsec` | `svg:'<svg …>…<g data-b="id" aria-label="…"><rect …/><text …>…</text></g>…</svg>'`, `dogru:['id', …]` | bölgeye dokunur. Tek doğru: dokununca değerlendirilir (yanlış bölge kapanır). Birden çok doğru: seçer (sayaç) → Kontrol et | ≥ 2 bölge, kimlikler tekil, `dogru` kimlikleri svg'de, yanlış bölge de olmalı |
| `kaydir` | `min`, `max`, `adim`, `cevap`, `tol?` (0), `birim?`, `etiket?:[sayı doğrusu etiketleri]`, `bas?` (başlangıç, yoksa `min`) | kaydırıcı ya da − / + düğmeleri (adım adım); değer büyük yazılır ve sayı doğrusunda ok ile gösterilir → Kontrol et; yanlışta "daha büyük/küçük olmalı" | min < max, cevap aralıkta ve adım ızgarasında, tol ≤ aralık/8, başlangıç ≠ cevap, ≤ 400 adım |

`gorselsec` bölgesi: `<g data-b="…">` içindeki **ilk şekil** (rect/circle/path/polygon/ellipse) durum rengini alır (seçili mavi, doğru yeşil,
yanlış kırmızı); şekle `class="box"` ver. Dokunma alanı en az ~40×36 (viewBox 340 genişlikte), metin `font-size` ≥ 14.

Örnekler (tam hâlleri `data/anlatim/mat-uslu.js` ve `tr-fiilimsi.js`'te):
```js
ia: { tip: 'eslestir', q: '<p>Her üslü ifadeyi değeriyle eşleştir.</p>', solBaslik: 'İfade', sagBaslik: 'Değer',
      sol: ['2<sup>5</sup>', '5<sup>2</sup>', '3<sup>3</sup>', '4<sup>3</sup>', '10<sup>1</sup>'], sag: ['32', '25', '27', '64', '10'], hint: '…', why: '…' }
ia: { tip: 'sirala', q: '<p>Küçükten büyüğe sırala.</p>', ust: 'en küçük', alt: 'en büyük',
      ogeler: ['4 · 10<sup>−5</sup>', '9 · 10<sup>−5</sup>', '3,2 · 10<sup>−4</sup>', '2,1 · 10<sup>−3</sup>'], hint: '…', why: '…' }
ia: { tip: 'eleme', q: '<p><b>2<sup>6</sup>’ya eşit olmayanları</b> ele.</p>',
      ogeler: ['2<sup>5</sup> + 2<sup>5</sup>', '2<sup>3</sup> + 2<sup>3</sup>', '4<sup>3</sup>', '6<sup>2</sup>', '8<sup>2</sup>'], ele: [1, 3], hint: '…', why: '…' }
ia: { tip: 'dogruyanlis', q: '<p>Her ifade için karar ver.</p>', ifadeler: [
      { m: '(−2)<sup>4</sup> = 16', d: true, a: 'Çift üs: sonuç artı.' }, { m: '−2<sup>4</sup> = 16', d: false, a: 'Üs yalnız 2’ye ait: −16.' },
      { m: '2<sup>−3</sup> negatiftir.', d: false, a: '2<sup>−3</sup> = {{1|8}}' }], hint: '…', why: '…' }
ia: { tip: 'bosluk', q: '<p>Tabanı 2 yap.</p>', metin: '4<sup>3</sup> = 2[^_]<br>8<sup>−1</sup> = 2[^_]',
      secenek: ['6', '−3', '3', '−8'], cevap: ['6', '−3'], hint: '…', why: '…' }
ia: { tip: 'grup', q: '<p>Türüne göre yerleştir.</p>', gruplar: ['İsim-fiil', 'Sıfat-fiil', 'Zarf-fiil'],
      ogeler: [{ m: 'kitap <b>okumak</b>', g: 0 }, { m: '<b>koşan</b> çocuk', g: 1 }, { m: 'eve <b>gelince</b>', g: 2 }, { m: 'onun <b>bakışı</b>', g: 0 }], hint: '…', why: '…' }
ia: { tip: 'gorselsec', q: '<p>Sıfat-fiillere dokun.</p>', dogru: ['w2'],
      svg: '<svg class="an-svg" viewBox="0 0 340 56"><g data-b="w1"><rect x="10" y="8" width="60" height="40" rx="9" class="box"/><text x="40" y="33" text-anchor="middle" font-size="15">Dün</text></g>' +
           '<g data-b="w2"><rect x="78" y="8" width="70" height="40" rx="9" class="box"/><text x="113" y="33" text-anchor="middle" font-size="15">gelen</text></g>…</svg>', hint: '…', why: '…' }
ia: { tip: 'kaydir', q: '<p>2<sup>−1</sup> + 2<sup>−2</sup> sayısını sayı doğrusunda işaretle.</p>',
      min: -1, max: 2, adim: 0.05, cevap: 0.75, tol: 0, etiket: [-1, -0.5, 0, 0.5, 1, 1.5, 2], hint: '…', why: '…' }
```

### Etkileşim yönergesi (içerik yazanlar için)
- **Sıklık:** her 2–3 sahnede bir etkinlik ya da ara soru; art arda en fazla 3 düz anlatım sahnesi (`validate.js` "ANLATIM SIKLIK?" uyarır).
  Bir derste 4–7 `ia` + 2–4 `cp` iyi denge; ara soru (`cp`) en fazla 4.
- **Çeşit:** aynı türü art arda koyma; 3+ etkinlikli derste en az 3 farklı tür (`validate.js` "ANLATIM ÇEŞİT?" uyarır).
- **Türe göre:** kavram ↔ örnek/değer → `eslestir`; süreç, kronoloji, büyüklük → `sirala`; "hangisi farklı / yanlışları ayıkla" → `eleme`;
  tuzak taraması → `dogruyanlis` (her ifade bir LGS çeldiricisi); işlem adımı ya da ek/kural tamamlama → `bosluk`; kategoriler → `grup`;
  harita, şekil, grafik, cümle içinde yer bulma → `gorselsec`; sayı doğrusu, kestirim, karekök hangi iki tam sayı arasında → `kaydir`.
- **Asla basit olmasın:** cevabı bir önceki altyazıda aynen yazan, tek tıkla tahmin edilen etkinlik yazma. Çeldiriciler LGS'nin gerçek tuzakları olsun
  (2<sup>5</sup> ↔ 10, parantezsiz negatif taban, çekimli fiil/sıfat-fiil karışması, kalıcı isim…). Konu özetine ve çıkmış sorulara dayan.
- `hint` yol göstersin ama cevabı söylemesin; `why` neden doğru olduğunu ve tuzağı bir iki cümlede söylesin. Belirsiz okunuşta `hintV`/`whyV` yaz.
- Kart metinleri kısa olsun (telefonda 2 sütun: ≤ ~22 karakter; `dogruyanlis` ifadesi ≤ ~110 karakter). SVG'de `<b>` yok, `viewBox` genişliği ≤ 340.
- Yeni etkinlik ekledikten sonra: `python3 tools/anlatim_ses.py <konuId>` (sahne kayınca aynı sesler yeniden üretilmez, kopyalanır),
  `node tools/validate.js`, 390 px testi: `/workspace/work/anl/ia_test.py <konuId> wrong|right [persist] [light]`.

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

## Okunuş sözlüğü (vurgu, uzun ünlü, ince okunuş) · `tools/telaffuz.json`
Yalnızca **sesli metni** değiştirir (`anlatim_ses.py` › `telaffuz()`); altyazı her zaman **TDK yazımıyla** kalır. Deney (Kasım 2026, AhmetNeural,
ünlü süresi ve F1/F2 ölçümüyle; edge-tts SSML kabul etmiyor — `phoneme`, `sub`, `emphasis`, `break`, iç içe `prosody` hepsi "No audio"):
- Ses şapkayı sözcüğe göre farklı işliyor: kendi sözlüğündekilerde yok sayıyor (hikâye = hikaye, rüzgâr, dâhil, âşık, millî, resmî, hâl);
  **k/g sonrası â'yı ince okuyor** (kâr, kâğıt, zekât, Kâzım, Kâbe: doğru); hâlâ, dâhi, dinî'de uzatıyor; **ama başka yerlerde â/û'yu öne kaydırıp
  bozuyor** (âlem, âdet, âmâ, yâr, Mâide, Sâbit, Nâs, İmrân, Şifâ, Tûr, Nûr, hükûmet).
- Kural: `sapka.koru` (hâl…, dâhi…, kuvâ…, isrâ) aynen; k/g/K/G'den sonraki â korunur; kalan **â → a, û → u**; î korunur.
- `yeniden_yaz`: uzun ünlü gereken ve sesin kısa okuduğu sözcükler, sözcük başında eşleşir, ekler korunur:
  mazeret → maazeret (TDK [ma:zeret]), âdet → a'adet, âmâ → aamaa, Nâs → Naas, İmrân → İmraan, şûra → şuura.
  Çift ünlü işe yaramayan sözcükler var (aadet = adet, kaatil = katil: ses kendi sözlüğüne döndürüyor); yeni girdi eklerken `/workspace/work/anl/tlf/exp3.py`
  ile dene (çıktıdaki `A` kareleri açık ünlü süresi, 10 ms).
- Tek başına **K** → "ke" (ses "ka" diyor: K'nin → ke'nin). Romen rakamı + nokta → sıra sayısı (III. Selim → üçüncü Selim, I. ve II. öncül →
  birinci ve ikinci öncül); noktasız dizi "I, II ve III" → bir, iki ve üç.
- **Vurgu** (yazın: YAzın / yaZIN, okuma: isim-fiil / olumsuz emir) zorlanamaz; ses bağlamdan seçiyor. Yer adları (Ankara, İzmir, Samsun,
  Sivas, Erzurum) ilk hecede doğru vurgulanıyor. Belirsizse cümleyi değiştir (`vurgu_uyari` listesi, rapor işaretler).
- Kısaltmalar: DNA ≈ "de en a", ABD / TBMM açılımıyla okunuyor (süre ölçümü). Bilinmeyen büyük harf kısaltmalarını rapor listeler.
- Rapor: `python3 tools/telaffuz_rapor.py [konuId…] --out=rapor.md` → ders ders sözlüğün değiştirdiği parçalar + olası yanlış okunuşlar
  (kısaltma, kalan rakam, Romen rakamı, işaretsiz İngilizce, vurgu belirsizliği).
- **Altyazı yazımı:** `validate.js` görünen her metni `telaffuz.json › yazim` ile denetler. `hata` (sorun sayılır): TDK'ya aykırı yazım
  (hikaye → hikâye, kağıt → kâğıt, milli → millî, dahil → dâhil, halde → hâlde, kâtil → katil, ilân → ilan, mâzeret → mazeret, siyasî → siyasi …;
  hepsi sozluk.gov.tr ile doğrulandı). `bak` (uyarı, "ANLATIM YAZIM?"): anlama göre değişenler (hala/hâlâ, aşık/âşık, alem/âlem, adet/âdet,
  kar/kâr, dahi/dâhi, hal/hâl; küllî/cüzî/fıtrî: sözlükte şapkasız, MEB din kitabı şapkalı). Bilerek kalacaksa derse `yazimOk: ['hala']` ekle.
  TDK'da şapka yalnızca TDK'nın yazdığı yerde: mazeret, katil, ilan, lazım, siyasi şapkasız; düzeltme sesli tarafta yapılır.

## EXP ve ilerleme
- Ara soru ilk denemede doğru: kolay soru EXP'si (10), anahtar `an-<konuId>|ko:cp<n>`. Etkileşimli sahne: aynı kural, anahtar `an-<konuId>|ko:ia<n>`.
- Anlatımı bitirme: 10 zor soru EXP'si (200), anahtarlar `an-<konuId>|zr:bitir1..10`.
- Her anahtar sitenin 7 gün kuralına tabidir (`LGSApp.awardXP`); EXP bulut profiline `LGSCloud.push` ile gider.
- İlerleme `localStorage['lgs2027:anlatim'][konuId] = { far, i, cp, ia, done, pass, fin }`. `far`: izlenen en ileri sahne (ileri atlama sınırı). Yeniden izlemede `far` sıfırlanır.
- Ses: hazır mp3 (Microsoft nöral ses **tr-TR-AhmetNeural**, edge-tts, hız +5%, 24 kHz mono 48 kbps), `tools/anlatim_ses.py` üretir:
  `audio/anlatim/<konuId>/<sahne>-<adım>.mp3` (0'dan sayılır; ara soruda `<sahne>-why.mp3`, `<sahne>-hint.mp3`) ve `meta.json`
  (`src`: adımın `s`+`v` FNV özeti, `a`: ses özeti → mp3 adresine `?h=` olarak eklenir, `d`: süre ms, `w`: sözcük başlangıçları ms, `wt`: okunan sözcükler).
  Oynatıcı adımın özeti `meta.json`'dakiyle eşleşirse mp3'ü çalar (sonraki parçayı önceden indirir, 1x/1.25x `playbackRate`,
  altyazı sözcük sözcük vurgulanır, duraklatınca kaldığı yerden sürer). Metin değişmiş ama ses üretilmemişse ya da mp3 yüklenemezse
  o adım Web Speech (tr-TR) ile okunur; o da yoksa ya da 🔇 ise altyazı okuma süresiyle ilerler. Tercih `lgs2027:anlatimPref`.
  iOS: ▶ Başlat dokunuşu ses öğesini sessiz bir parçayla açar; sonraki tüm parçalar aynı öğede çalar.
  `sw.js` sesleri istendikçe `kisla-ses-v1` önbelleğine alır (toplu ön yükleme yok, Range isteğine 206 döner; ders bazında LRU: en fazla ~1500 dosya / ~80 MB, aşılınca en uzun süredir açılmayan dersin tüm sesleri silinir, çalan ders korunur; kullanım kaydı `kisla-ses-lru`).
- **İngilizce bölümler (İngilizce dersleri):** altyazıda (`s`, ara soruda `why` / `hint`) İngilizce sözcük ve cümleleri
  `<i lang="en">…</i>` içine al (ya da `lang="en"` taşıyan `<em>/<b>/<u>/<strong>`). `anlatim_ses.py` adımı parçalara böler:
  işaretli bölümler **en-US-AndrewNeural** (hız +0%), geri kalanı **tr-TR-AhmetNeural** ile okunur; parçalar aynı biçimde
  (24 kHz mono 48 kbps CBR, kare = 144 bayt / 24 ms) olduğundan tek mp3'e art arda eklenir, ara parçaların sondaki uzun sessizliği
  kare sınırında kesilir (nokta/soru işaretinden sonra ~380 ms, virgülden sonra ~260 ms, yoksa ~160 ms duraklama kalır);
  `w` sözcük zamanları parça başlangıçlarına göre kaydırılır. İşareti olmayan adımlar eskisiyle bire bir aynı üretilir
  (aynı okunuş, aynı ses özeti; mat-uslu ve tr-fiilimsi ile doğrulandı). `--check` İngilizce parçaları `[EN: …]` diye gösterir.
  Yazım kuralları: İngilizce sözcüğe Türkçe ek yapıştırma (`<i lang="en">skiing</i>de` ✗ → “skiing sporunda” ✓); İngilizce
  bölümleri `v` alanına koyma (Web Speech yedeği `v`'yi olduğu gibi okur), altyazı = okunuş olsun. Dersler kısa yazım için
  `[[…]]` kullanıp dosya sonunda `<i lang="en">…</i>`'ye çevirebilir (bkz. `data/anlatim/ing-*.js`). Web Speech yedeğinde
  İngilizce bölümler de tr-TR sesle okunur (yalnız mp3 yüklenemezse).
- Okunuş: `anlatim_ses.py` metni Türkçe okunuşa çevirir: sayılar yazıyla ve ekiyle (`4’te 1` → dörtte bir, `4’e` → dörde, `4.` → dördüncü,
  `0,25` → sıfır virgül yirmi beş), `<sup>`/² ³ ⁻ → "üssü (eksi) …", `{{1|8}}` → sekizde 1, `· × ÷ = < > ≤ ≠ √ % ±` sözle,
  `-ken` gibi ek örnekleri tiresiz, `isim-fiil` → isim fiil, `2x` → iki iks, LGS → le ge se (ek ayrı kalır: `LGS’de` → le ge se'de,
  `LGS’nin` → le ge se'nin; "senin" gibi okunmasın), TDK → te de ke, EBOB/EKOK → ebob/ekok (ekleriyle), `Hz.` → Hazreti,
  (a.s.)/(s.a.v.)/(c.c.)/(r.a.) okunmaz; tırnak içindeki `?`/`!`'ten sonra gelen sözcük (“…?” diye, dedi, sorusu) büyütülmez. Yine de belirsiz her matematik adımına `v` yaz.
