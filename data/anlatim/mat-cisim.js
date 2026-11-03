/* Adım Adım Anlatım · Matematik · Geometrik Cisimler (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['mat-cisim'] = {
  title: 'Geometrik Cisimler',
  desc: 'Dik prizma, küp açınımı, silindirin açınımı, yüzey alanı ve hacmi, dik piramit ve dik koni; LGS’nin her yıl sorduğu silindir soruları π = 3 ile, sahne sahne.',
  ozet: [
    'n-gen dik prizma: n + 2 yüz, 2n köşe, 3n ayrıt. n-gen piramit: n + 1 yüz, n + 1 köşe, 2n ayrıt. Yüz + köşe − ayrıt = 2.',
    'Prizmada yanal alan = taban çevresi × h, hacim = taban alanı × h, ayrıtlar toplamı = 2 · taban çevresi + n · h.',
    'Küp açınımında arada bir kare olacak biçimde aynı sırada duran iki kare karşılıklı yüzlerdir.',
    'Silindir açınımı: 2 daire + kenarları 2πr ve h olan dikdörtgen. Rulo 1 turda 2πr yol alır.',
    'Kapalı silindir 2πr<sup>2</sup> + 2πrh, üstü açık kap πr<sup>2</sup> + 2πrh, boru yalnız 2πrh.',
    'Silindirin hacmi πr<sup>2</sup>h. Yarıçap 2 katına çıkarsa hacim 4 katına çıkar. Su aktarmada hacim korunur.',
    'Piramitte yükseklik < yan yüz yüksekliği < yan ayrıt. Konide ℓ<sup>2</sup> = r<sup>2</sup> + h<sup>2</sup>, açınım bir daire + bir daire dilimi.',
    'Çap verildiyse önce ikiye böl; 1 dm³ = 1 L = 1000 cm³.'
  ],
  scenes: [
    { t: 'Cisimlerin elemanları',
      base: '<svg class="an-svg" viewBox="0 0 330 170" role="img" aria-label="Üçgen dik prizmanın elemanları: taban, yan yüz, ayrıt, köşe ve yükseklik"><path class="boxa" d="M60 50L150 24L200 50Z" style="stroke-width:0"/><path class="box" d="M60 50H200V150H60Z" style="stroke-width:0;opacity:.9"/><path class="ln" d="M60 50L150 24L200 50L60 50 M60 50V150H200V50" style="stroke-width:2.2"/><path class="ln" d="M60 150L150 124L200 150 M150 124V24" style="stroke-width:1.6;stroke-dasharray:5 4"/><text x="226" y="30" font-size="12.5" font-weight="700" class="acc rv c1">taban (üçgen)</text><path class="st dr c1" d="M222 28 L170 38"/><text x="226" y="100" font-size="12.5" font-weight="700" class="rv c2" style="fill:var(--noteline)">yan yüz (dikdörtgen)</text><path class="st2 dr c2" d="M222 98 L170 100"/><circle cx="200" cy="150" r="5" class="rv c3" style="fill:var(--bad)"/><text x="226" y="154" font-size="12.5" font-weight="700" class="rv c3" style="fill:var(--bad)">köşe</text><path class="dr c4" d="M200 50V150" style="stroke:var(--ok);stroke-width:4"/><text x="226" y="126" font-size="12.5" font-weight="700" class="rv c4" style="fill:var(--ok)">yan ayrıt = h</text><text x="20" y="104" font-size="11" class="mut">kesikli:</text><text x="20" y="118" font-size="11" class="mut">görünmez</text></svg>',
      steps: [
        { s: 'Merhaba! Bu konuda üç boyutlu cisimlerle tanışacağız. Şu üçgen dik prizmaya bakalım.' },
        { s: 'Cisme adını veren yüz tabandır. Bu prizmanın tabanları birbirine eş iki üçgen.', on: '.c1' },
        { s: 'Yan yüzler dikdörtgen. Dik prizmada yan ayrıtlar tabana diktir.', on: '.c2' },
        { s: 'İki yüzün kesiştiği doğru parçası ayrıt, ayrıtların buluştuğu nokta köşe. Yan ayrıt aynı zamanda yükseklik.', on: '.c3,.c4' },
        { s: 'Kesikli çizgiler arkada kalan, görünmeyen ayrıtlar. Silindir ve koninin yan yüzeyi ise eğridir.' }
      ] },

    { t: 'Yüz, köşe, ayrıt sayıları',
      base: '<table class="an-tbl"><tr><th>Cisim (taban n-gen)</th><th>Yüz</th><th>Köşe</th><th>Ayrıt</th></tr>' +
        '<tr class="rv t1"><td><b>dik prizma</b></td><td>n + 2</td><td>2n</td><td>3n</td></tr>' +
        '<tr class="rv t2"><td><b>dik piramit</b></td><td>n + 1</td><td>n + 1</td><td>2n</td></tr>' +
        '<tr class="rv t3"><td>beşgen prizma</td><td>7</td><td>10</td><td>15</td></tr>' +
        '<tr class="rv t3"><td>kare piramit</td><td>5</td><td>5</td><td>8</td></tr></table>',
      steps: [
        { s: 'Tabanı n kenarlı prizmada n tane yan yüz ve iki taban var: n + 2 yüz. Köşeler 2n, ayrıtlar 3n.', v: 'Tabanı n kenarlı prizmada, n tane yan yüz ve iki taban var: n artı iki yüz. Köşeler iki n, ayrıtlar üç n.', on: '.t1' },
        { s: 'Piramitte tek taban ve n tane üçgen: n + 1 yüz, n + 1 köşe, 2n ayrıt.', v: 'Piramitte tek taban ve n tane üçgen: n artı bir yüz, n artı bir köşe, iki n ayrıt.', on: '.t2' },
        { s: 'Kontrol için güzel bir kural: yüz artı köşe eksi ayrıt hep 2. Beşgen prizma: 7 + 10 − 15 = 2.', v: 'Kontrol için güzel bir kural: yüz artı köşe eksi ayrıt, hep iki. Beşgen prizma: yedi artı on eksi on beş, iki.', on: '.t3' },
        { s: '“Yan ayrıt” ile “taban ayrıtı”nı karıştırma: n-gen prizmada 2n taban ayrıtı, n yan ayrıt var.', v: 'Yan ayrıt ile taban ayrıtını karıştırma: n kenarlı prizmada iki n taban ayrıtı, n tane yan ayrıt var.' }
      ] },

    { t: 'Eşleştir: yüz ve ayrıt sayıları',
      steps: [{ s: 'Prizmada ve piramitte yüz, köşe, ayrıt sayılarının kurallarını kullan. Her cismi doğru sayılarla eşleştir.' }],
      ia: { tip: 'eslestir', q: '<p>Her cismi yüz ve ayrıt sayısıyla eşleştir.</p>', solBaslik: 'Cisim', sagBaslik: 'Yüz · ayrıt', sol: ['Beşgen prizma', 'Kare piramit', 'Altıgen piramit', 'Üçgen prizma', 'Sekizgen prizma'], sag: ['7 yüz, 15 ayrıt', '5 yüz, 8 ayrıt', '7 yüz, 12 ayrıt', '5 yüz, 9 ayrıt', '10 yüz, 24 ayrıt'], hint: 'n-gen prizma: n + 2 yüz, 3n ayrıt. n-gen piramit: n + 1 yüz, 2n ayrıt. Yüz sayısı aynı çıkanları ayrıtla ayır.', hintV: 'Tabanı n kenarlı prizmada n artı 2 yüz, 3 n ayrıt var. Piramitte n artı 1 yüz, 2 n ayrıt. Yüz sayısı aynı çıkanları ayrıt sayısıyla ayır.', why: 'Beşgen prizma 5 + 2 = 7 yüz, 15 ayrıt; altıgen piramit de 7 yüzlü ama 12 ayrıtlı. Üçgen prizma ile kare piramit 5 yüzlü: ayrıtları 9 ve 8. Sekizgen prizma 10 yüz, 24 ayrıt.', whyV: 'Beşgen prizmanın 7 yüzü, 15 ayrıtı var; altıgen piramit de 7 yüzlü ama 12 ayrıtlı. Üçgen prizma ile kare piramidin ikisi de 5 yüzlü: ayrıtları 9 ve 8. Sekizgen prizmanın 10 yüzü, 24 ayrıtı var.' } },

    { t: 'Prizmanın açınımı ve ölçüleri',
      base: '<svg class="an-svg" viewBox="0 0 330 182" role="img" aria-label="Tabanı 3-4-5 cm dik üçgen, yüksekliği 6 cm olan prizmanın açınımı: iki üçgen ve üç dikdörtgen"><rect x="20" y="48" width="42" height="84" class="rv a1" style="fill:var(--c);fill-opacity:.35;stroke:var(--c);stroke-width:2"/><text x="41" y="95" font-size="14" text-anchor="middle" font-weight="700" class="rv a1">3</text><rect x="62" y="48" width="56" height="84" class="rv a1" style="fill:var(--noteline);fill-opacity:.35;stroke:var(--noteline);stroke-width:2"/><text x="90" y="95" font-size="14" text-anchor="middle" font-weight="700" class="rv a1">4</text><rect x="118" y="48" width="70" height="84" class="rv a1" style="fill:var(--ok);fill-opacity:.35;stroke:var(--ok);stroke-width:2"/><text x="153" y="95" font-size="14" text-anchor="middle" font-weight="700" class="rv a1">5</text><path class="boxa rv a2" d="M62 48L118 48L62 6Z" style="stroke-width:2"/><path class="boxa rv a2" d="M62 132L118 132L62 174Z" style="stroke-width:2"/><text x="8" y="94" font-size="12" class="mut">6</text><path class="st dr a3" d="M20 48H188" style="stroke-width:3.5"/><text x="200" y="48" font-size="12.5" class="acc rv a3">çevre = 3 + 4 + 5 = 12</text><text x="200" y="72" font-size="12.5" class="rv a4">yanal = 12 · 6 = 72</text><text x="200" y="94" font-size="12.5" class="rv a4">taban = 3 · 4 ÷ 2 = 6</text><text x="200" y="116" font-size="12.5" font-weight="700" class="acc rv a4">yüzey = 2 · 6 + 72 = 84</text><text x="200" y="138" font-size="12.5" font-weight="700" class="rv a4" style="fill:var(--noteline)">hacim = 6 · 6 = 36</text></svg>',
      steps: [
        { s: 'Tabanı 3-4-5 dik üçgen, yüksekliği 6 cm olan prizmayı açalım. Üç dikdörtgen yan yana dizildi.', v: 'Tabanı üç, dört, beş dik üçgen, yüksekliği altı santimetre olan prizmayı açalım. Üç dikdörtgen yan yana dizildi.', on: '.a1' },
        { s: 'Bir de iki eş üçgen taban. Açınım: 2 taban + 3 dikdörtgen.', v: 'Bir de iki eş üçgen taban. Açınım: iki taban, artı üç dikdörtgen.', on: '.a2' },
        { s: 'Yan yüzler birlikte tek bir dikdörtgen gibi: bir kenarı taban çevresi 12, diğeri yükseklik 6.', v: 'Yan yüzler birlikte tek bir dikdörtgen gibi: bir kenarı taban çevresi, on iki; diğeri yükseklik, altı.', on: '.a3' },
        { s: 'Yanal alan 72, yüzey alanı 2 · 6 + 72 = 84 cm², hacim taban alanı çarpı yükseklik: 36 cm³.', v: 'Yanal alan yetmiş iki. Yüzey alanı, iki çarpı altı artı yetmiş iki, seksen dört santimetrekare. Hacim, taban alanı çarpı yükseklik: otuz altı santimetreküp.', on: '.a4' },
        { s: 'Burada dikkat et: prizmayı kesip başka türlü yapıştırırsan hacim değişmez ama yüzey alanı değişebilir.',
          h: '<div class="an-tip">Küp: ayrıtlar 12a, yüzey 6a<sup>2</sup>, hacim a<sup>3</sup> &nbsp;·&nbsp; Dikdörtgenler prizması: 4(a + b + c), 2(ab + ac + bc), abc</div>' }
      ] },

    { t: 'Boşluk doldur: kare prizma',
      steps: [{ s: 'Açınımı aklında canlandır: iki kare taban ve yan yana dört dikdörtgen. Yanal alanı, yüzey alanını ve hacmi bul.' }],
      ia: { tip: 'bosluk', q: '<p>Taban ayrıtı 3 cm, yüksekliği 5 cm olan kare dik prizma.</p>', metin: 'Yanal alan = [_] cm²<br>Yüzey alanı = [_] cm²<br>Hacim = [_] cm³', secenek: ['60', '78', '45', '69', '75', '15'], cevap: ['60', '78', '45'], hint: 'Yanal yüzler birlikte tek bir dikdörtgen: bir kenarı taban çevresi, diğeri yükseklik. Yüzey alanına iki tabanı ekle.', why: 'Yanal alan 12 · 5 = 60 cm². İki taban 2 · 9 = 18, yüzey alanı 78 cm². Hacim 9 · 5 = 45 cm³. Tek taban ekleyip 69 demek tipik hata.', whyV: 'Taban çevresi 12, yanal alan 12 çarpı 5, yani 60 santimetrekare. İki taban 18 santimetrekare eder; yüzey alanı 78. Hacim, taban alanı 9 çarpı 5, yani 45 santimetreküp. Tek taban ekleyip 69 demek tipik hatadır.' } },

    { t: 'Küp açınımı',
      base: '<svg class="an-svg" viewBox="0 0 330 156" role="img" aria-label="Küp açınımı: 1 ile 3, 2 ile 4, 5 ile 6 karşılıklı yüzler"><rect x="106" y="6" width="36" height="36" class="box" style="stroke-width:2"/><rect x="108" y="8" width="32" height="32" class="rv k1" style="fill:var(--c);fill-opacity:.45"/><text x="124" y="30" font-size="17" text-anchor="middle" font-weight="700">1</text><rect x="70" y="42" width="36" height="36" class="box" style="stroke-width:2"/><rect x="72" y="44" width="32" height="32" class="rv k2" style="fill:var(--noteline);fill-opacity:.45"/><text x="88" y="66" font-size="17" text-anchor="middle" font-weight="700">2</text><rect x="106" y="42" width="36" height="36" class="box" style="stroke-width:2"/><rect x="108" y="44" width="32" height="32" class="rv k3" style="fill:var(--ok);fill-opacity:.45"/><text x="124" y="66" font-size="17" text-anchor="middle" font-weight="700">5</text><rect x="142" y="42" width="36" height="36" class="box" style="stroke-width:2"/><rect x="144" y="44" width="32" height="32" class="rv k2" style="fill:var(--noteline);fill-opacity:.45"/><text x="160" y="66" font-size="17" text-anchor="middle" font-weight="700">4</text><rect x="106" y="78" width="36" height="36" class="box" style="stroke-width:2"/><rect x="108" y="80" width="32" height="32" class="rv k1" style="fill:var(--c);fill-opacity:.45"/><text x="124" y="102" font-size="17" text-anchor="middle" font-weight="700">3</text><rect x="106" y="114" width="36" height="36" class="box" style="stroke-width:2"/><rect x="108" y="116" width="32" height="32" class="rv k3" style="fill:var(--ok);fill-opacity:.45"/><text x="124" y="138" font-size="17" text-anchor="middle" font-weight="700">6</text><text x="200" y="40" font-size="13" class="acc rv k1">1 ↔ 3</text><text x="200" y="62" font-size="13" class="rv k2" style="fill:var(--noteline)">2 ↔ 4</text><text x="200" y="84" font-size="13" class="rv k3" style="fill:var(--ok)">5 ↔ 6</text><text x="200" y="110" font-size="11.5" class="mut">arada bir kare olan</text><text x="200" y="125" font-size="11.5" class="mut">iki kare karşılıklıdır</text></svg>',
      steps: [
        { s: 'Küpün 11 farklı açınımı var. Bu açınımı katlarsak hangi yüzler karşı karşıya gelir?', v: 'Küpün on bir farklı açınımı var. Bu açınımı katlarsak hangi yüzler karşı karşıya gelir?' },
        { s: 'Kural şu: aynı sırada, arada bir kare olacak şekilde duran iki kare karşılıklı yüzdür. 1 ile 3.', v: 'Kural şu: aynı sırada, arada bir kare olacak şekilde duran iki kare, karşılıklı yüzdür. Bir ile üç.', on: '.k1' },
        { s: '2 ile 4 de aynı sırada, araları bir kare. Karşılıklı!', v: 'İki ile dört de aynı sırada, araları bir kare. Karşılıklı!', on: '.k2' },
        { s: 'Geriye 5 ile 6 kalıyor. Kenarı ortak iki kare ise asla karşılıklı olamaz, onlar komşudur.', v: 'Geriye beş ile altı kalıyor. Kenarı ortak iki kare ise asla karşılıklı olamaz; onlar komşudur.', on: '.k3' }
      ] },

    { t: 'Dokun: karşılıklı yüz',
      steps: [{ s: 'Bu açınımı katladığını düşün. 4 numaralı yüzün karşısına hangi yüz gelir? Önce komşu yüzleri ele.' }],
      ia: { tip: 'gorselsec', q: '<p>Açınım katlanıp küp yapılınca <b>4 numaralı</b> yüzün karşısına gelen yüze dokun.</p>', svg: '<svg class="an-svg" viewBox="0 0 340 160" role="img" aria-label="Küp açınımı: üst sırada 1 ve 2, orta sırada 3, 4, 5, alt sırada 6 numaralı kareler, merdiven biçiminde"><g data-b="f1" aria-label="1 numaralı yüz"><rect x="70" y="5" width="50" height="50" class="box"/><text x="95" y="37" text-anchor="middle" font-size="20" font-weight="700">1</text></g><g data-b="f2" aria-label="2 numaralı yüz"><rect x="120" y="5" width="50" height="50" class="box"/><text x="145" y="37" text-anchor="middle" font-size="20" font-weight="700">2</text></g><g data-b="f3" aria-label="3 numaralı yüz"><rect x="120" y="55" width="50" height="50" class="box"/><text x="145" y="87" text-anchor="middle" font-size="20" font-weight="700">3</text></g><g data-b="f4" aria-label="4 numaralı yüz"><rect x="170" y="55" width="50" height="50" class="box"/><text x="195" y="87" text-anchor="middle" font-size="20" font-weight="700">4</text></g><g data-b="f5" aria-label="5 numaralı yüz"><rect x="220" y="55" width="50" height="50" class="box"/><text x="245" y="87" text-anchor="middle" font-size="20" font-weight="700">5</text></g><g data-b="f6" aria-label="6 numaralı yüz"><rect x="220" y="105" width="50" height="50" class="box"/><text x="245" y="137" text-anchor="middle" font-size="20" font-weight="700">6</text></g></svg>', dogru: ['f1'], hint: 'Kenarı ortak kareler komşudur. Köşeleri değen kareler de katlanınca komşu olur. 3 ile 5 ise aynı sırada, arada bir kare: karşılıklı.', why: '3 ve 5, 4 ile kenar paylaşıyor; 2 ve 6 da 4 ile köşe paylaşıyor ve katlanınca komşu oluyor. Geriye 1 kalıyor: 1 ile 4 karşılıklı. Z biçiminin iki ucu karşılıklıdır.', whyV: '3 ve 5, 4 ile kenar paylaşıyor; 2 ve 6 da 4 ile köşe paylaşıyor, katlanınca komşu oluyor. Geriye 1 kalıyor: 1 ile 4 karşılıklı yüzlerdir. Z biçimindeki dört karenin iki ucu karşılıklıdır.' } },

    { t: 'Çözümlü örnek: şerit',
      steps: [
        { s: 'Tabanı eşkenar üçgen olan prizmanın yan yüzleri açılınca 36 cm × 10 cm’lik dikdörtgen oluyor; 36 taban çevresi. Bütün ayrıtlara kaç cm şerit gerekir?', v: 'Tabanı eşkenar üçgen olan prizmanın yan yüzleri açılınca, otuz altıya on santimetrelik dikdörtgen oluyor; otuz altı taban çevresi. Bütün ayrıtlara kaç santimetre şerit gerekir?',
          h: '<div class="an-ex"><span class="an-l rv e1">taban çevresi 36 → bir kenar 12, yükseklik 10</span><span class="an-l rv e2">iki taban: 2 · 36 = 72 · üç yan ayrıt: 3 · 10 = 30</span><span class="an-l rv e3">toplam = <b>102 cm</b></span></div>' },
        { s: 'Taban çevresi 36, yani bir kenar 12. Yükseklik 10.', v: 'Taban çevresi otuz altı, yani bir kenar on iki. Yükseklik on.', on: '.e1' },
        { s: 'İki tabanın ayrıtları 72 cm, üç yan ayrıt 30 cm.', v: 'İki tabanın ayrıtları yetmiş iki santimetre, üç yan ayrıt otuz santimetre.', on: '.e2' },
        { s: 'Toplam 102 cm. Tek tabanı sayıp 66 demek ya da 36 + 10 almak tipik tuzaklar.', v: 'Toplam yüz iki santimetre. Tek tabanı sayıp altmış altı demek, ya da otuz altı artı on almak, tipik tuzaklar.', on: '.e3' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Altıgen dik prizmanın yüz, köşe ve ayrıt sayıları sırasıyla aşağıdakilerden hangisidir?</p>',
        c: ['7 · 12 · 18', '8 · 12 · 18', '8 · 12 · 12', '6 · 6 · 12'], a: 'B',
        hint: 'n = 6 için prizma: n + 2 yüz, 2n köşe, 3n ayrıt.',
        hintV: 'N altı için prizma: n artı iki yüz, iki n köşe, üç n ayrıt.',
        why: '6 + 2 = 8 yüz, 2 · 6 = 12 köşe, 3 · 6 = 18 ayrıt. Kontrol: 8 + 12 − 18 = 2 ✓.',
        whyV: 'Altı artı iki, sekiz yüz. İki çarpı altı, on iki köşe. Üç çarpı altı, on sekiz ayrıt. Kontrol: sekiz artı on iki eksi on sekiz, iki.' },
      steps: [{ s: 'Sıra sende! Formülleri hatırla.' }] },

    { t: 'Dik dairesel silindir',
      base: '<svg class="an-svg" viewBox="0 0 330 165" role="img" aria-label="Dik dairesel silindir ve açınımı: iki daire ve kenarları 2πr ile h olan dikdörtgen"><path class="box" d="M20 34V134A44 13 0 0 0 108 134V34Z" style="stroke-width:0"/><ellipse cx="64" cy="34" rx="44" ry="13" class="boxa" style="stroke-width:2"/><path class="ln" d="M20 34V134A44 13 0 0 0 108 134V34" style="stroke-width:2"/><path class="ln" d="M20 134A44 13 0 0 1 108 134" style="stroke-width:1.5;stroke-dasharray:4 3"/><path class="dr s1" d="M64 34H108" style="stroke:var(--bad);stroke-width:2.5"/><text x="84" y="28" font-size="12" text-anchor="middle" class="rv s1" style="fill:var(--bad)">r</text><path class="dr s1" d="M118 34V134" style="stroke:var(--ok);stroke-width:2.5"/><text x="124" y="88" font-size="12" class="rv s1" style="fill:var(--ok)">h</text><circle cx="230" cy="22" r="20" class="boxa rv s2" style="stroke-width:2"/><rect x="160" y="42" width="140" height="70" class="box rv s2" style="stroke-width:2"/><circle cx="230" cy="132" r="20" class="boxa rv s2" style="stroke-width:2"/><path class="dr s3" d="M160 42H300 M160 112H300" style="stroke:var(--bad);stroke-width:3.5"/><text x="270" y="36" font-size="12.5" font-weight="700" class="rv s3" style="fill:var(--bad)">2πr</text><path class="dr s3" d="M300 42V112" style="stroke:var(--ok);stroke-width:3.5"/><text x="306" y="81" font-size="12.5" font-weight="700" class="rv s3" style="fill:var(--ok)">h</text></svg>',
      steps: [
        { s: 'Şimdi LGS’nin her yıl sorduğu cisim: silindir. İki tabanı eş daire, yarıçapı r, yüksekliği h.', v: 'Şimdi le ge se’nin her yıl sorduğu cisim: silindir. İki tabanı eş daire, yarıçapı r, yüksekliği h.', on: '.s1' },
        { s: 'Açınca iki daire ve bir dikdörtgen çıkıyor.', on: '.s2' },
        { s: 'Dikdörtgenin uzun kenarları katlanınca dairelerin çevresine sarılır. Yani o kenar 2πr, öbürü h.', v: 'Dikdörtgenin kenarları katlanınca dairelerin çevresine sarılır. Yani o kenar iki pi r, öbür kenar h.', on: '.s3' },
        { s: 'Aynı kâğıt iki türlü kıvrılabilir: 24 × 18’lik kâğıt, 24 çembere gelirse r = 4, 18 çembere gelirse r = 3. Yanal alan aynı, hacimler farklı!', v: 'Aynı kâğıt iki türlü kıvrılabilir: yirmi dörde on sekizlik kâğıtta, yirmi dört çembere gelirse r dört; on sekiz çembere gelirse r üç. Yanal alan aynı, hacimler farklı!' },
        { s: 'Bir dikdörtgeni bir kenarı etrafında döndürürsen de silindir oluşur. 2025’te yanal yüzeyi kare olan silindir soruldu: 2πr = h.', v: 'Bir dikdörtgeni bir kenarı etrafında döndürürsen de silindir oluşur. İki bin yirmi beşte, yanal yüzeyi kare olan silindir soruldu: iki pi r, h’ye eşit.' }
      ] },

    { t: 'Silindirin yüzey alanı',
      base: '<table class="an-tbl"><tr><th>Durum</th><th>Parçalar</th><th>Alan</th></tr>' +
        '<tr class="rv y1"><td>kapalı kutu</td><td>2 taban + yanal</td><td>2πr<sup>2</sup> + 2πrh</td></tr>' +
        '<tr class="rv y2"><td>üstü açık bardak</td><td>1 taban + yanal</td><td>πr<sup>2</sup> + 2πrh</td></tr>' +
        '<tr class="rv y3"><td>boru, etiket</td><td>yalnız yanal</td><td>2πrh</td></tr></table>',
      steps: [
        { s: 'Yüzey alanı açınımdaki parçaların toplamı. Ama hangi parçaların olduğuna dikkat!' },
        { s: 'Kapalı kutuda iki taban ve yanal yüzey var.', on: '.y1' },
        { s: 'Üstü açık bardakta tek taban, boruda ya da etikette hiç taban yok.', on: '.y2,.y3' },
        { s: 'Boya rulosu örneği: r = 4 cm, uzunluk 25 cm, 5 tam tur. Bir turda 2 · 3 · 4 = 24 cm yol, 5 turda 120 cm. İz 120 × 25 = 3000 cm².', v: 'Boya rulosu örneği: yarıçap dört, uzunluk yirmi beş santimetre, beş tam tur. Bir turda, iki çarpı üç çarpı dört, yirmi dört santimetre yol; beş turda yüz yirmi. İz, yüz yirmi çarpı yirmi beş, üç bin santimetrekare.' },
        { s: 'Çap verildiyse önce ikiye böl. Kesim yaparsan her kesik iki yeni taban ekler: yüzey 2πr² artar.', v: 'Çap verildiyse önce ikiye böl. Kesim yaparsan her kesik iki yeni taban ekler: yüzey, iki pi r kare artar.',
          h: '<div class="an-trap">2πr<sup>2</sup> iki tabanın alanıdır; tek taban πr<sup>2</sup>. Yanal alanda r’nin karesi alınmaz: 2πr · h</div>' }
      ] },

    { t: 'Grupla: kaç taban var?',
      steps: [{ s: 'Gerçek hayattaki silindir biçimli nesnelere bak. Yüzey alanına kaç taban girer, ona göre yerleştir.' }],
      ia: { tip: 'grup', q: '<p>Her nesneyi, yüzey alanına giren taban sayısına göre yerleştir.</p>', gruplar: ['Taban yok', 'Tek taban', 'İki taban'], ogeler: [
            { m: 'Su borusu', g: 0 },
            { m: 'Konserve kutusunun etiketi', g: 0 },
            { m: 'Rulo kâğıdın kartonu', g: 0 },
            { m: 'Bardak', g: 1 },
            { m: 'Kova', g: 1 },
            { m: 'Üstü açık kalemlik', g: 1 },
            { m: 'Kapaklı konserve kutusu', g: 2 },
            { m: 'Kapalı su deposu', g: 2 }], hint: 'Nesnenin hangi yüzleri gerçekten var? Açık uçlar daire olarak sayılmaz.', why: 'Boru, etiket ve karton yalnızca yanal yüzeydir. Bardak, kova ve kalemlikte alt taban var, üst açık. Kapaklı kutu ve kapalı depoda iki taban da yüzey alanına girer.' } },

    { t: 'Silindirin hacmi',
      steps: [
        { s: 'Silindiri üst üste konmuş ince madeni paralar gibi düşün. Prizmadaki gibi: taban alanı çarpı yükseklik.',
          h: '<div class="an-big">V = πr<sup>2</sup> · h</div>', v: 'Silindiri üst üste konmuş ince madeni paralar gibi düşün. Prizmadaki gibi: taban alanı çarpı yükseklik. Hacim, pi r kare çarpı h.' },
        { s: 'Burada çok dikkat et: hacimde r’nin karesi var. Yarıçap 2 katına çıkarsa hacim 4 katına çıkar!', v: 'Burada çok dikkat et: hacimde r’nin karesi var. Yarıçap iki katına çıkarsa, hacim dört katına çıkar!',
          h: '<table class="an-tbl"><tr><th>Değişiklik</th><th>Hacim</th></tr><tr><td>h → k katı</td><td>k katı</td></tr><tr><td>r → k katı</td><td><b>k · k katı</b></td></tr><tr><td>r yarıya, h 4 katına</td><td>değişmez</td></tr></table>' },
        { s: 'Birimler: 1 cm³ = 1 mL, 1 dm³ = 1 L = 1000 cm³.', v: 'Birimler: bir santimetreküp, bir mililitre. Bir desimetreküp, bir litre, yani bin santimetreküp.' },
        { s: 'Suya batan cismin hacmi, yükselen suyun hacmine eşittir: πr² çarpı yükselme miktarı.', v: 'Suya batan cismin hacmi, yükselen suyun hacmine eşittir: pi r kare, çarpı yükselme miktarı.' }
      ] },

    { t: 'Doğru mu, yanlış mı?',
      steps: [{ s: 'Silindirin hacmiyle ilgili tuzakları yakala. Her ifade için Doğru ya da Yanlış’a dokun.' }],
      ia: { tip: 'dogruyanlis', q: '<p>Her ifade için karar ver.</p>', ifadeler: [
            { m: 'Silindirin yarıçapı 2 katına çıkarsa hacmi de 2 katına çıkar.', d: false, a: 'Hacimde r’nin karesi var: 4 katına çıkar.' },
            { m: 'Yükseklik 3 katına çıkarsa hacim 3 katına çıkar.', d: true, a: 'Taban alanı aynı, yükseklik 3 katı.' },
            { m: 'Çapı 10 cm olan silindirin taban alanı 100π cm²’dir.', d: false, a: 'Önce çapı ikiye böl: r = 5, taban alanı 25π.' },
            { m: '1 L su 1000 cm³ yer kaplar.', d: true, a: '1 L = 1 dm³ = 1000 cm³.' }], hint: 'Hacim = taban alanı · yükseklik ve taban alanı πr<sup>2</sup>. Hangi ölçünün karesi alınıyor?', hintV: 'Hacim, taban alanı çarpı yüksekliktir; taban alanı da pi r kare. Hangi ölçünün karesi alınıyor?', why: 'Hacim πr<sup>2</sup>h olduğu için yarıçaptaki değişim karesiyle, yükseklikteki değişim aynen yansır. Çap verilirse önce yarıçapı bul.', whyV: 'Hacim pi r kare h olduğu için yarıçaptaki değişim karesiyle, yükseklikteki değişim ise aynen hacme yansır. Çap verilirse önce yarıçapı bul.' } },

    { t: 'Çözümlü örnek: su aktarma',
      steps: [
        { s: 'Yarıçapı 10 cm olan kapta 12 cm su var. Hepsi yarıçapı 5 cm olan boş kaba boşaltılıyor. Su kaç cm yükselir? (π = 3)', v: 'Yarıçapı on santimetre olan kapta, on iki santimetre su var. Hepsi, yarıçapı beş santimetre olan boş kaba boşaltılıyor. Su kaç santimetre yükselir? Pi üç alınacak.',
          h: '<div class="an-ex"><span class="an-l rv w1">V = 3 · 10<sup>2</sup> · 12 = 3600 cm³</span><span class="an-l rv w2">3 · 5<sup>2</sup> · h = 75h = 3600 → <b>h = 48 cm</b></span><span class="an-l rv w3">kısa yol: r yarıya → taban {{1|4}}’üne → h 4 katı: 12 · 4 = 48</span></div>' },
        { s: 'Aktarmada hacim korunur. Suyun hacmi 3 · 100 · 12 = 3600 cm³.', v: 'Aktarmada hacim korunur. Suyun hacmi, üç çarpı yüz çarpı on iki, üç bin altı yüz santimetreküp.', on: '.w1' },
        { s: 'Yeni kapta taban alanı 75. 3600 ÷ 75 = 48 cm.', v: 'Yeni kapta taban alanı yetmiş beş. Üç bin altı yüz bölü yetmiş beş, kırk sekiz santimetre.', on: '.w2' },
        { s: 'Kısa yol: yarıçap yarıya inince taban alanı dörtte birine iner, yükseklik 4 katına çıkar. 24 cevabı, karesini almayı unutmaktır!', v: 'Kısa yol: yarıçap yarıya inince taban alanı dörtte birine iner, yükseklik dört katına çıkar. Yirmi dört cevabı, karesini almayı unutmaktır!', on: '.w3' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Bir silindirin taban yarıçapı <b>2 katına</b> çıkarılıp yüksekliği <b>yarıya</b> indirilirse hacmi için ne söylenebilir?</p>',
        c: ['Değişmez.', '2 katına çıkar.', '4 katına çıkar.', 'Yarıya iner.'], a: 'B',
        hint: 'Hacim πr<sup>2</sup>h. r 2 katı olunca r<sup>2</sup> kaç katı olur?',
        hintV: 'Hacim, pi r kare h. R iki katı olunca, r kare kaç katı olur?',
        why: 'r → 2r ise r<sup>2</sup> 4 katı; h yarıya inince 4 · {{1|2}} = 2. Hacim 2 katına çıkar.',
        whyV: 'R iki katı olunca r kare dört katı olur. H yarıya inince, dört çarpı yarım, iki. Hacim iki katına çıkar.' },
      steps: [{ s: 'Sıra sende! Karesini almayı unutma.' }] },

    { t: 'Dik piramit',
      base: '<svg class="an-svg" viewBox="0 0 330 165" role="img" aria-label="Kare dik piramit: tepe noktası, yükseklik, yan yüz yüksekliği ve yan ayrıt"><path class="box" d="M40 150L180 150L230 118L135 24Z" style="stroke-width:0;opacity:.9"/><path class="ln" d="M40 150H180L230 118 M40 150L135 24L180 150 M135 24L230 118" style="stroke-width:2.2"/><path class="ln" d="M40 150L90 118H230 M135 24L90 118" style="stroke-width:1.5;stroke-dasharray:5 4"/><circle cx="135" cy="24" r="4.5" style="fill:var(--bad)"/><text x="145" y="20" font-size="12.5" font-weight="700" style="fill:var(--bad)">tepe noktası</text><path class="dr p1" d="M135 24V134" style="stroke:var(--ok);stroke-width:2.5;stroke-dasharray:5 3"/><text x="138" y="100" font-size="12" font-weight="700" class="rv p1" style="fill:var(--ok)">h</text><path class="dr p2" d="M135 24L110 150" style="stroke:var(--noteline);stroke-width:3"/><text x="58" y="96" font-size="12" font-weight="700" class="rv p2" style="fill:var(--noteline)">yan yüz</text><text x="58" y="110" font-size="12" font-weight="700" class="rv p2" style="fill:var(--noteline)">yüksekliği</text><path class="dr p3" d="M135 24L180 150" style="stroke:var(--c);stroke-width:3.5"/><text x="196" y="80" font-size="12" font-weight="700" class="acc rv p3">yan ayrıt</text><text x="250" y="140" font-size="12" class="mut">taban: kare</text></svg>',
      steps: [
        { s: 'Piramitte bir taban ve tepe noktasında birleşen üçgen yan yüzler var. Bu bir kare dik piramit.' },
        { s: 'Yükseklik, tepe noktasından tabanın merkezine dik inen uzunluk.', on: '.p1' },
        { s: 'Yan yüz yüksekliği, tepe noktasından bir taban ayrıtının ortasına inen dikme.', on: '.p2' },
        { s: 'Yan ayrıt ise tepeyi bir köşeye bağlar. Sıralama hep aynı: yükseklik < yan yüz yüksekliği < yan ayrıt.', v: 'Yan ayrıt ise tepeyi bir köşeye bağlar. Sıralama hep aynı: yükseklik en kısa, sonra yan yüz yüksekliği, en uzun yan ayrıt.', on: '.p3' },
        { s: 'Açınım: bir kare ve dört eş ikizkenar üçgen. Piramitte bu sınıfta alan ve hacim hesabı yapılmaz; sorular eleman, açınım ve görünüm üzerine.' }
      ] },

    { t: 'Sırala: piramitteki uzunluklar',
      steps: [{ s: 'Kare dik piramitte dik üçgenleri bul ve Pisagor’u kullan. Uzunlukları kısadan uzuna sırala.' }],
      ia: { tip: 'sirala', q: '<p>Taban ayrıtı 6 cm, yüksekliği 4 cm olan kare dik piramitte uzunlukları <b>kısadan uzuna</b> sırala.</p>', ust: 'en kısa', alt: 'en uzun', ogeler: ['Yükseklik', 'Yan yüz yüksekliği', 'Yan ayrıt', 'Taban ayrıtı', 'Taban köşegeni'], hint: 'Yükseklik, taban ayrıtının yarısı ve yan yüz yüksekliği bir dik üçgen oluşturur. Yan ayrıt için yan yüz yüksekliğini ve ayrıtın yarısını kullan.', why: 'Yükseklik 4. Yan yüz yüksekliği: 3-4-5 üçgeni, 5. Yan ayrıt √(25 + 9) = √34 ≈ 5,8. Taban ayrıtı 6, taban köşegeni 6√2 ≈ 8,5.', whyV: 'Yükseklik 4. Yan yüz yüksekliği 3, 4, 5 üçgeninden 5. Yan ayrıt kök 34, yaklaşık beş virgül sekiz. Taban ayrıtı 6, taban köşegeni de 6 kök 2, yaklaşık sekiz buçuk.' } },

    { t: 'Dik koni',
      base: '<svg class="an-svg" viewBox="0 0 330 165" role="img" aria-label="Dik koni: yükseklik h, yarıçap r ve ana doğru l bir dik üçgen oluşturur; açınım bir daire ve bir daire dilimi"><path class="box" d="M30 136L90 18L150 136A60 15 0 0 1 30 136Z" style="stroke-width:0"/><path class="ln" d="M30 136L90 18L150 136 M30 136A60 15 0 0 0 150 136" style="stroke-width:2.2"/><path class="ln" d="M30 136A60 15 0 0 1 150 136" style="stroke-width:1.5;stroke-dasharray:4 3"/><path class="dr n1" d="M90 18V136" style="stroke:var(--ok);stroke-width:2.5;stroke-dasharray:5 3"/><text x="78" y="92" font-size="13" font-weight="700" class="rv n1" style="fill:var(--ok)">h</text><path class="dr n1" d="M90 136H150" style="stroke:var(--bad);stroke-width:2.5"/><text x="118" y="152" font-size="13" font-weight="700" class="rv n1" style="fill:var(--bad)">r</text><path class="dr n2" d="M90 18L150 136" style="stroke:var(--c);stroke-width:3.5"/><text x="128" y="70" font-size="13" font-weight="700" class="acc rv n2">ℓ</text><path class="ln rv n1" d="M90 126h10v10" style="stroke-width:1.5"/><path class="boxa rv n3" d="M252 26L314.4 62.0A72 72 0 0 1 189.6 62.0Z" style="stroke-width:2"/><circle cx="252" cy="122" r="24" class="boxa rv n3" style="stroke-width:2"/><text x="274" y="56" font-size="12" class="acc rv n3">ℓ</text><text x="252" y="48" font-size="11.5" text-anchor="middle" class="rv n3">120°</text></svg>',
      steps: [
        { s: 'Koninin tabanı daire, yan yüzeyi tepe noktasında toplanır. Dondurma külahı, trafik konisi gibi.' },
        { s: 'Yükseklik h, yarıçap r. Tepeden taban çemberine giden doğru parçası ana doğru, ℓ.', v: 'Yükseklik h, yarıçap r. Tepeden taban çemberine giden doğru parçası ise ana doğru; el harfiyle gösterilir.', on: '.n1,.n2' },
        { s: 'h, r ve ℓ bir dik üçgen oluşturur: ℓ² = r² + h². Ana doğru hem yükseklikten hem yarıçaptan uzun.', v: 'H, r ve el bir dik üçgen oluşturur: el kare, r kare artı h kare. Ana doğru, hem yükseklikten hem yarıçaptan uzun.' },
        { s: 'Açınım: bir daire ve bir daire dilimi. Dilimin yarıçapı ana doğrudur, yarıçap değil! r = 3, ℓ = 9 ise dilim 120°.', v: 'Açınım: bir daire ve bir daire dilimi. Dilimin yarıçapı ana doğrudur, koninin yarıçapı değil! R üç, el dokuz ise dilim yüz yirmi derece.', on: '.n3',
          h: '<div class="an-rule">{{α|360°}} = {{r|ℓ}} &nbsp;·&nbsp; dik üçgen bir dik kenarı etrafında dönerse dik koni oluşur</div>' }
      ] },

    { t: 'Kaydır: koninin açınımı',
      steps: [{ s: 'Önce Pisagor’la ana doğruyu bul. Sonra açınımdaki daire diliminin açısını hesapla.' }],
      ia: { tip: 'kaydir', q: '<p>Taban yarıçapı 6 cm, yüksekliği 8 cm olan dik koninin açınımında yan yüzey bir daire dilimidir. Bu dilimin merkez açısı kaç derecedir?</p>', min: 0, max: 360, adim: 6, cevap: 216, birim: '°', etiket: [0, 90, 180, 270, 360], hint: 'Ana doğru ℓ<sup>2</sup> = r<sup>2</sup> + h<sup>2</sup>. Dilimin yarıçapı ℓ’dir; açı = 360° · {{r|ℓ}}.', hintV: 'Ana doğrunun karesi, yarıçapın karesi ile yüksekliğin karesinin toplamıdır. Dilimin yarıçapı ana doğrudur; açı, 360 derece çarpı yarıçap bölü ana doğru.', why: 'ℓ = √(36 + 64) = 10 cm. Açı 360° · {{6|10}} = 216°. Dilimin yarıçapına 8 ya da 6 almak tuzaktır; dilimin yarıçapı ana doğrudur.', whyV: 'Ana doğru, kök 36 artı 64, yani 10 santimetre. Açı, 360 çarpı onda altı, 216 derece. Dilimin yarıçapını 8 ya da 6 almak tuzaktır; dilimin yarıçapı ana doğrudur.' } },

    { t: 'Görünümler ve iki aile',
      base: '<table class="an-tbl"><tr><th>Cisim</th><th>Önden</th><th>Üstten</th></tr>' +
        '<tr><td>silindir</td><td>dikdörtgen</td><td>daire</td></tr><tr><td>kare piramit</td><td>üçgen</td><td>köşegenli kare</td></tr>' +
        '<tr><td>dik koni</td><td>ikizkenar üçgen</td><td>merkezli daire</td></tr><tr><td>üçgen prizma (tabanında)</td><td>dikdörtgen</td><td>üçgen</td></tr></table>',
      steps: [
        { s: 'Cisimlere önden ve üstten bakınca ne görürüz? Bu tablo görünüm sorularının anahtarı.' },
        { s: 'Prizma ile silindir aynı ailedendir: iki eş taban, hacim taban alanı çarpı yükseklik.' },
        { s: 'Piramit ile koni de tepe noktalı ailedendir: tek taban, yukarı çıktıkça kesitler küçülür.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Taban yarıçapı 5 cm, yüksekliği 8 cm olan silindir biçimli bir bardak suyla tamamen doludur. Bu su, taban yarıçapı 10 cm olan boş bir silindir kaba boşaltılıyor. Kaptaki suyun yüksekliği kaç cm olur? (π = 3)</p>',
        c: ['4', '16', '2', '8'], a: 'C',
        hint: 'Hacim korunur. Yarıçap 2 katına çıkınca taban alanı kaç katına çıkar?',
        hintV: 'Hacim korunur. Yarıçap iki katına çıkınca, taban alanı kaç katına çıkar?',
        why: 'V = 3 · 25 · 8 = 600 cm³. Yeni kap: 3 · 100 · h = 300h = 600 → h = 2 cm. (Taban alanı 4 katı → yükseklik {{1|4}}’ü: 8 ÷ 4 = 2.)',
        whyV: 'Hacim, üç çarpı yirmi beş çarpı sekiz, altı yüz santimetreküp. Yeni kapta, üç yüz h altı yüze eşit; h iki santimetre. Taban alanı dört katı olunca, yükseklik dörtte birine iner.' },
      steps: [{ s: 'Son soru, tam LGS tarzı! Hacmin korunduğunu unutma.', v: 'Son soru, tam le ge se tarzı! Hacmin korunduğunu unutma.' }] }
  ]
};
