/* Adım Adım Anlatım · Matematik · Üçgenler (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['mat-ucgen'] = {
  title: 'Üçgenler',
  desc: 'Kenarortay, açıortay ve yükseklik; üçgen eşitsizliği, kenar-açı ilişkisi, üçgen çizimi ve LGS’nin en sevdiği Pisagor bağıntısı, şekillerle sahne sahne.',
  ozet: [
    'Kenarortay karşı kenarı ortalar, açıortay açıyı ikiye böler, yükseklik karşı kenara dik iner. Alan = {{taban · yükseklik|2}}, bu yüzden a · h<sub>a</sub> = b · h<sub>b</sub>.',
    'İkizkenar üçgende tepeden çizilen kenarortay, açıortay ve yükseklik aynı doğru parçasıdır. Genel üçgende üçü farklıdır.',
    'Üçgen eşitsizliği: |b − c| < a < b + c. Eşitlik olursa üçgen oluşmaz. İki kenar tam sayıysa üçüncü kenar 2 · (küçük kenar) − 1 farklı tam değer alır.',
    'Büyük açının karşısında büyük kenar. Ortak kenarlı iki üçgende sıralamayı ortak kenar üzerinden zincirle.',
    'Tek türlü çizim için K.K.K., K.A.K. ya da A.K.A. yeter. Üç açı yetmez.',
    'Pisagor: a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>, c hipotenüs (dik açının karşısı, en uzun kenar). Üçlüler: 3-4-5, 5-12-13, 8-15-17 ve katları.',
    'Kare köşegeni a√2, eşkenar üçgen yüksekliği {{a√3|2}}. Koordinatta uzaklık: yatay ve dikey farklarla Pisagor.',
    'Hipotenüs söylenmemişse iki durumu düşün: 5 ve 12 → 13 ya da √119.'
  ],
  scenes: [
    { t: 'Üçgenin yardımcı elemanları',
      base: '<svg class="an-svg" viewBox="0 0 330 180" role="img" aria-label="ABC üçgeninde A köşesinden çizilen yükseklik, açıortay ve kenarortay"><path class="ln" d="M120 22L30 160L300 160Z" style="stroke-width:2.2"/><text x="120" y="15" font-size="15" text-anchor="middle" font-weight="700">A</text><text x="20" y="170" font-size="15" font-weight="700">B</text><text x="304" y="170" font-size="15" font-weight="700">C</text><path class="st2 dr y1" d="M120 22V160" style="stroke-dasharray:5 4"/><path class="ln rv y1" d="M120 150h10v10" style="stroke-width:1.5"/><text x="112" y="176" font-size="12" text-anchor="middle" class="rv y1" style="fill:var(--noteline)">H</text><path class="dr y2" d="M120 22L143.9 160" style="stroke:var(--ok);stroke-width:2.5"/><text x="144" y="176" font-size="12" text-anchor="middle" class="rv y2" style="fill:var(--ok)">E</text><path class="rv y2" d="M105.9 43.9A26 26 0 0 0 124.4 47.6" style="fill:none;stroke:var(--ok);stroke-width:1.5"/><path class="rv y2" d="M125.5 53.5A32 32 0 0 0 145.3 41.6" style="fill:none;stroke:var(--ok);stroke-width:1.5"/><path class="st dr y3" d="M120 22L165 160"/><text x="168" y="176" font-size="12" text-anchor="middle" class="acc rv y3">D</text><path class="st rv y3" d="M95.5 156.5L95.5 163.5M99.5 156.5L99.5 163.5M230.5 156.5L230.5 163.5M234.5 156.5L234.5 163.5" style="stroke-width:2"/><text x="198" y="22" font-size="12.5" class="rv y1" style="fill:var(--noteline)">yükseklik: dik iner</text><text x="198" y="40" font-size="12.5" class="rv y2" style="fill:var(--ok)">açıortay: açıyı böler</text><text x="198" y="58" font-size="12.5" class="acc rv y3">kenarortay: ortalar</text></svg>',
      steps: [
        { s: 'Merhaba! Bir üçgenin bir köşesinden karşı kenara üç özel doğru parçası çizebiliriz. A köşesinden başlayalım.' },
        { s: 'Yükseklik: A’dan karşı kenara dik inen doğru parçası. A’nın BC’ye en kısa uzaklığıdır.', v: 'Yükseklik: A’dan karşı kenara dik inen doğru parçası. A’nın B C kenarına en kısa uzaklığıdır.', on: '.y1' },
        { s: 'Açıortay: A açısını iki eş parçaya bölen doğru parçası.', on: '.y2' },
        { s: 'Kenarortay: A’yı karşı kenarın tam orta noktasına bağlar. BD ile DC eşit.', v: 'Kenarortay: A’yı karşı kenarın tam orta noktasına bağlar. B D ile D C eşit.', on: '.y3' },
        { s: 'Gördüğün gibi genel bir üçgende bu üçü farklı doğru parçaları. “Ortaya gidiyor, o hâlde diktir” demek yanlış!',
          h: '<div class="an-trap">Kenarortay her zaman dik değildir; yükseklik her zaman ortalamaz.</div>' }
      ] },

    { t: 'Yükseklik ve alan',
      steps: [
        { s: 'Yükseklik dar açılı üçgende içeride, dik üçgende dik kenarların üzerinde, geniş açılı üçgende ise bazen dışarıdadır.' },
        { s: 'Asıl önemli bilgi şu: üçgenin alanı, taban çarpı o tabana ait yükseklik bölü 2.',
          h: '<div class="an-big">Alan = {{a · h<sub>a</sub>|2}}</div>' },
        { s: 'Hangi kenarı taban seçersen seç alan aynı. O yüzden a · h<sub>a</sub> = b · h<sub>b</sub>. Bilinmeyen yüksekliği bulmanın en kısa yolu bu.', v: 'Hangi kenarı taban seçersen seç, alan aynı. O yüzden her kenar, kendi yüksekliğiyle çarpılınca aynı sonuç çıkar. Bilinmeyen yüksekliği bulmanın en kısa yolu bu.',
          h: '<div class="an-rule"><b>a · h<sub>a</sub> = b · h<sub>b</sub> = c · h<sub>c</sub></b></div>' },
        { s: 'Kareli kâğıtta dik çizmenin hilesi: 3 sağa 1 yukarı giden doğruya dik olan, 1 sola 3 yukarı gider.', v: 'Kareli kâğıtta dik çizmenin hilesi: üç sağa, bir yukarı giden doğruya dik olan; bir sola, üç yukarı gider.' }
      ] },

    { t: 'İkizkenar ve eşkenar üçgen',
      base: '<svg class="an-svg" viewBox="0 0 330 175" role="img" aria-label="İkizkenar üçgende tepe açısından çizilen kenarortay, açıortay ve yükseklik aynı doğru parçasıdır"><path class="ln" d="M165 18L70 155L260 155Z" style="stroke-width:2.2"/><path class="st" d="M121.2 89.1L113.8 83.9M216.2 83.9L208.8 89.1" style="stroke-width:2"/><text x="165" y="12" font-size="14" text-anchor="middle" font-weight="700">A</text><text x="58" y="166" font-size="14" font-weight="700">B</text><text x="264" y="166" font-size="14" font-weight="700">C</text><path class="st dr i1" d="M165 18V155"/><path class="ln rv i1" d="M165 145h10v10" style="stroke-width:1.5"/><path class="st rv i1" d="M115.5 151.5L115.5 158.5M119.5 151.5L119.5 158.5M210.5 151.5L210.5 158.5M214.5 151.5L214.5 158.5" style="stroke-width:2"/><text x="165" y="170" font-size="12" text-anchor="middle" class="acc rv i1">D</text><text x="232" y="50" font-size="12.5" class="acc rv i2">ortalar ✓</text><text x="232" y="70" font-size="12.5" class="acc rv i2">diktir ✓</text><text x="232" y="90" font-size="12.5" class="acc rv i2">açıyı böler ✓</text></svg>',
      steps: [
        { s: 'İkizkenar üçgende iki kenar eş. Bu üçgende tepe köşesinden bir doğru parçası çizelim.' },
        { s: 'Bu tek doğru parçası tabanı ortalıyor, tabana dik ve tepe açısını ikiye bölüyor. Üçü bir arada!', on: '.i1,.i2' },
        { s: 'Eşkenar üçgende bu her köşe için geçerli. Kenarı a olan eşkenar üçgenin yüksekliği {{a√3|2}}.', v: 'Eşkenar üçgende bu her köşe için geçerli. Kenarı a olan eşkenar üçgenin yüksekliği, a kök üç bölü iki.' },
        { s: 'Ters yönde de çalışır: bir doğru parçası bu özelliklerden ikisini taşıyorsa üçüncüsünü de taşır ve üçgen ikizkenardır.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>ABC üçgeninde |BC| = 12 cm ve A köşesinden [BC]’ye çizilen yükseklik 6 cm’dir. |AC| = 9 cm olduğuna göre B köşesinden [AC]’ye çizilen yükseklik kaç cm’dir?</p>',
        c: ['8', '6', '9', '12'], a: 'A',
        hint: 'Alan iki şekilde yazılabilir: |BC| · h<sub>A</sub> = |AC| · h<sub>B</sub>.',
        hintV: 'Alan iki şekilde yazılabilir: B C çarpı A’nın yüksekliği, A C çarpı B’nin yüksekliğine eşittir.',
        why: '12 · 6 = 9 · h → 72 = 9h → h = 8 cm.',
        whyV: 'On iki çarpı altı, dokuz çarpı h’ye eşit. Yetmiş iki eşittir dokuz h; h sekiz santimetre.' },
      steps: [{ s: 'Alanı iki yoldan yaz. Hadi bakalım!' }] },

    { t: 'Üçgen eşitsizliği',
      base: '<svg class="an-svg" viewBox="0 0 330 140" role="img" aria-label="3, 4 ve 8 cm çubuklarla üçgen oluşmaz; 5, 6 ve 8 cm çubuklarla oluşur"><path d="M10 110H154" style="stroke:var(--c);stroke-width:6;stroke-linecap:round"/><path class="rv w1" d="M10 110H64" style="stroke:var(--noteline);stroke-width:6;stroke-linecap:round;transform:translateY(-10px)"/><path class="rv w1" d="M82 110H154" style="stroke:var(--ok);stroke-width:6;stroke-linecap:round;transform:translateY(-10px)"/><text x="73" y="88" font-size="12" text-anchor="middle" class="rv w1">boşluk!</text><text x="82" y="132" font-size="13" text-anchor="middle" font-weight="700" class="rv w1" style="fill:var(--bad)">3 + 4 < 8 ✗</text><text x="82" y="30" font-size="12" text-anchor="middle" class="mut">3, 4, 8</text><path class="rv w2" d="M176 110H320" style="stroke:var(--c);stroke-width:6;stroke-linecap:round"/><path class="rv w2" d="M176 110L235.6 42.6" style="stroke:var(--noteline);stroke-width:6;stroke-linecap:round"/><path class="rv w2" d="M235.6 42.6L320 110" style="stroke:var(--ok);stroke-width:6;stroke-linecap:round"/><text x="248" y="132" font-size="13" text-anchor="middle" font-weight="700" class="rv w2" style="fill:var(--ok)">5 + 6 > 8 ✓</text><text x="248" y="30" font-size="12" text-anchor="middle" class="mut rv w2">5, 6, 8</text></svg>',
      steps: [
        { s: 'Her üç çubukla üçgen yapılabilir mi? 3, 4 ve 8 cm’lik çubukları deneyelim.', v: 'Her üç çubukla üçgen yapılabilir mi? Üç, dört ve sekiz santimetrelik çubukları deneyelim.' },
        { s: 'Kısa çubukları uzunun iki ucundan yatırsak bile birbirine ulaşmıyorlar. 3 + 4 = 7, 8’den kısa.', v: 'Kısa çubukları uzunun iki ucundan yatırsak bile birbirine ulaşmıyorlar. Üç artı dört yedi; sekizden kısa.', on: '.w1' },
        { s: '5, 6 ve 8’de ise 5 + 6 = 11 > 8. Çubuklar bir tepede buluşuyor ve üçgen oluşuyor.', v: 'Beş, altı ve sekizde ise beş artı altı on bir; sekizden büyük. Çubuklar bir tepede buluşuyor ve üçgen oluşuyor.', on: '.w2' },
        { s: 'Kural: her kenar, diğer ikisinin farkından büyük, toplamından küçük. Kontrol için en uzun kenara bakmak yeter.',
          h: '<div class="an-big">|b − c| < a < b + c</div>' },
        { s: 'Burada çok dikkat et: toplam tam eşit olursa da üçgen olmaz. 4, 6, 10’da çubuklar üst üste yatar.', v: 'Burada çok dikkat et: toplam tam eşit olursa da üçgen olmaz. Dört, altı, onda çubuklar üst üste yatar.',
          h: '<div class="an-trap">4 + 6 = 10 → üçgen <b>oluşmaz</b>. Eşitsizlikler kesindir: <, ≤ değil.</div>' }
      ] },

    { t: 'Üçüncü kenar kaç olabilir?',
      steps: [
        { s: 'İki kenarı 5 ve 9 olan üçgenin üçüncü kenarı x olsun. Fark ile toplam arasında: 4 < x < 14.', v: 'İki kenarı beş ve dokuz olan üçgenin üçüncü kenarı iks olsun. Fark ile toplam arasında: iks, dört ile on dört arasında.',
          h: '<div class="an-ex"><span class="an-l">9 − 5 < x < 9 + 5 → <b>4 < x < 14</b></span><span class="an-l">tam sayılar: 5, 6, …, 13 → <b>9 değer</b></span></div>' },
        { s: 'Tam sayı ise 5’ten 13’e, 9 değer. Kısa yol: küçük kenarın iki katının bir eksiği, 2 · 5 − 1 = 9.', v: 'Tam sayı ise beşten on üçe, dokuz değer. Kısa yol: küçük kenarın iki katının bir eksiği; iki çarpı beş eksi bir, dokuz.' },
        { s: 'Ek koşul gelirse önce aralığı bul, sonra koşulu uygula. “Üçüncü kenar en uzun” derse 9 < x < 14.', v: 'Ek koşul gelirse önce aralığı bul, sonra koşulu uygula. Üçüncü kenar en uzun derse, iks dokuz ile on dört arasında.' },
        { s: 'Ortak kenarlı iki üçgende ortak kenar için iki aralık bulunur; ikisini birden sağlayan değerler alınır.',
          h: '<div class="an-tip">4 < x < 14 ve 3 < x < 11 → ikisi birden: <b>4 < x < 11</b></div>' }
      ] },

    { t: 'Çözümlü örnek: ikizkenar üçgen',
      steps: [
        { s: 'İki kenarı 4 cm ve 10 cm olan bir ikizkenar üçgenin çevresi kaç cm?', v: 'İki kenarı dört ve on santimetre olan bir ikizkenar üçgenin çevresi kaç santimetre?',
          h: '<div class="an-ex"><span class="an-l rv k1">4, 4, 10 → 4 + 4 = 8 < 10 <span class="an-bad-t">üçgen yok</span></span><span class="an-l rv k2">10, 10, 4 → 10 + 4 = 14 > 10 ✓</span><span class="an-l rv k3">Çevre = 10 + 10 + 4 = <b>24 cm</b></span></div>' },
        { s: 'Üçüncü kenar ya 4 ya 10. Önce 4, 4, 10’u deneyelim: 4 + 4 = 8, 10’dan küçük. Üçgen olmaz!', v: 'Üçüncü kenar ya dört, ya on. Önce dört, dört, onu deneyelim: dört artı dört sekiz; ondan küçük. Üçgen olmaz!', on: '.k1' },
        { s: '10, 10, 4 ise sorunsuz. Çevre 24 cm.', v: 'On, on, dört ise sorunsuz. Çevre yirmi dört santimetre.', on: '.k2,.k3' },
        { s: '18 cm cevabı şıklarda seni bekler. İkizkenar sorularında iki durumu da mutlaka kontrol et.', v: 'On sekiz santimetre cevabı şıklarda seni bekler. İkizkenar sorularında iki durumu da mutlaka kontrol et.' }
      ] },

    { t: 'Kenar–açı ilişkisi',
      base: '<svg class="an-svg" viewBox="0 0 330 175" role="img" aria-label="Açıları A 80, B 60, C 40 derece olan üçgen; en büyük açının karşısında en uzun kenar BC"><path class="ln" d="M121.8 25.6L50 150L270 150Z" style="stroke-width:2.2"/><text x="122" y="18" font-size="14" text-anchor="middle" font-weight="700">A</text><text x="36" y="160" font-size="14" font-weight="700">B</text><text x="276" y="160" font-size="14" font-weight="700">C</text><text x="122" y="52" font-size="13" text-anchor="middle" class="acc rv a1">80°</text><text x="76" y="142" font-size="13" class="rv a1">60°</text><text x="232" y="144" font-size="13" class="rv a1">40°</text><path class="dr a2" d="M50 150H270" style="stroke:var(--c);stroke-width:5"/><text x="160" y="168" font-size="12.5" text-anchor="middle" font-weight="700" class="acc rv a2">en uzun: BC</text><path class="dr a3" d="M121.8 25.6L270 150" style="stroke:var(--noteline);stroke-width:4"/><text x="214" y="80" font-size="12.5" class="rv a3" style="fill:var(--noteline)">orta: AC</text><path class="dr a4" d="M121.8 25.6L50 150" style="stroke:var(--ok);stroke-width:3"/><text x="70" y="80" font-size="12.5" text-anchor="end" class="rv a4" style="fill:var(--ok)">en kısa: AB</text></svg>',
      steps: [
        { s: 'Bir üçgende büyük açının karşısında büyük kenar bulunur. Şu üçgende açılar 80°, 60° ve 40°.', v: 'Bir üçgende büyük açının karşısında büyük kenar bulunur. Şu üçgende açılar seksen, altmış ve kırk derece.', on: '.a1' },
        { s: 'En büyük açı A’da. Karşısındaki kenar BC, en uzun kenar.', v: 'En büyük açı A’da. Karşısındaki kenar B C; en uzun kenar.', on: '.a2' },
        { s: '60° B’de, karşısı AC. 40° C’de, karşısı AB, en kısa kenar.', v: 'Altmış derece B’de; karşısı A C. Kırk derece C’de; karşısı A B, en kısa kenar.', on: '.a3,.a4' },
        { s: 'Eşleştirme hilesi: köşe harfi, karşı kenarın adında bulunmaz. A’nın karşısı BC.', v: 'Eşleştirme hilesi: köşe harfi, karşı kenarın adında bulunmaz. A’nın karşısı B C.',
          h: '<div class="an-trap">Komşu açıyı değil, <b>karşı</b> açıyı kullan. Dik üçgende hipotenüs, geniş açılıda geniş açının karşısı en uzundur.</div>' }
      ] },

    { t: 'Ortak kenarlı iki üçgen',
      steps: [
        { s: 'ABCD dörtgeninde BD köşegeni çizilmiş. İki üçgeni ayrı ayrı sıralayıp ortak kenar BD üzerinden zincir kuracağız.', v: 'A B C D dörtgeninde B D köşegeni çizilmiş. İki üçgeni ayrı ayrı sıralayıp, ortak kenar B D üzerinden zincir kuracağız.',
          h: '<table class="an-tbl"><tr><th>Üçgen</th><th>Açılar</th><th>Kenar sırası</th></tr><tr class="rv z1"><td>ABD</td><td>A 50°, ABD 60°, ADB 70°</td><td>AB > AD > <b>BD</b></td></tr><tr class="rv z2"><td>BCD</td><td>C 80°, CBD 55°, BDC 45°</td><td><b>BD</b> > CD > BC</td></tr></table>' },
        { s: 'ABD’de 70° karşısı AB, 60° karşısı AD, 50° karşısı BD. Yani AB > AD > BD.', v: 'A B D üçgeninde yetmiş derecenin karşısı A B, altmışın karşısı A D, ellinin karşısı B D. Yani A B en uzun, sonra A D, sonra B D.', on: '.z1' },
        { s: 'BCD’de 80° karşısı BD, 55° karşısı CD, 45° karşısı BC. Yani BD > CD > BC.', v: 'B C D üçgeninde sekseninin karşısı B D, elli beşin karşısı C D, kırk beşin karşısı B C. Yani B D, sonra C D, sonra B C.', on: '.z2' },
        { s: 'BD ikisinde de var; zincir kuruldu: AB > AD > BD > CD > BC. En uzun AB, en kısa BC.', v: 'B D ikisinde de var; zincir kuruldu. En uzun A B, en kısa B C.',
          h: '<div class="an-rule"><b>AB > AD > BD > CD > BC</b></div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>İki kenarının uzunluğu 3 cm ve 8 cm olan bir üçgenin üçüncü kenarının uzunluğu santimetre cinsinden bir tam sayıdır. Üçüncü kenar <b>kaç farklı</b> değer alabilir?</p>',
        c: ['4', '5', '6', '11'], a: 'B',
        hint: 'Üçüncü kenar farktan büyük, toplamdan küçük olmalı. Sınırlar dâhil değil.',
        why: '8 − 3 < x < 8 + 3 → 5 < x < 11. Tam sayılar 6, 7, 8, 9, 10 → 5 değer (2 · 3 − 1 = 5).',
        whyV: 'Sekiz eksi üç, beş; sekiz artı üç, on bir. İks beş ile on bir arasında. Tam sayılar altı, yedi, sekiz, dokuz, on; beş değer.' },
      steps: [{ s: 'Sıra sende! Fark ve toplamı bul.' }] },

    { t: 'Üçgen çizmek',
      base: '<svg class="an-svg" viewBox="0 0 330 175" role="img" aria-label="Pergel ile kenarları 7, 5 ve 6 santimetre olan üçgenin çizimi"><path class="st dr p1" d="M60 150H270"/><text x="48" y="162" font-size="14" font-weight="700">B</text><text x="274" y="162" font-size="14" font-weight="700">C</text><text x="165" y="168" font-size="12.5" text-anchor="middle" class="acc rv p1">7 cm</text><path class="dr p2" d="M169.5 47.4A150 150 0 0 0 108.5 8.1" style="fill:none;stroke:var(--bad);stroke-width:2"/><text x="16" y="40" font-size="12" class="rv p2" style="fill:var(--bad)">B’den 5 cm</text><path class="dr p3" d="M170.4 0.0A180 180 0 0 0 118.0 53.5" style="fill:none;stroke:var(--c);stroke-width:2"/><text x="196" y="40" font-size="12" class="acc rv p3">C’den 6 cm</text><path class="ln dr p4" d="M60 150L141.4 24L270 150" style="stroke-width:2.2"/><circle cx="141.4" cy="24" r="4.5" class="rv p4" style="fill:var(--noteline)"/><text x="141" y="14" font-size="14" text-anchor="middle" font-weight="700" class="rv p4">A</text></svg>',
      steps: [
        { s: 'Üç kenarı 7, 5 ve 6 cm olan üçgeni çizelim. Önce 7 cm’lik BC’yi cetvelle çiz.', v: 'Üç kenarı yedi, beş ve altı santimetre olan üçgeni çizelim. Önce yedi santimetrelik B C’yi cetvelle çiz.', on: '.p1' },
        { s: 'Pergeli 5 cm aç, B merkezli bir yay çiz.', v: 'Pergeli beş santimetre aç, B merkezli bir yay çiz.', on: '.p2' },
        { s: 'Pergeli 6 cm aç, C merkezli bir yay çiz. Yayların kesiştiği yer A köşesi.', v: 'Pergeli altı santimetre aç, C merkezli bir yay çiz. Yayların kesiştiği yer, A köşesi.', on: '.p3,.p4' },
        { s: 'Tek türlü çizim için üç kenar, iki kenar ve aradaki açı ya da bir kenar ve iki açı yeter.',
          h: '<div class="an-grid"><div><b>K.K.K.</b>üç kenar</div><div><b>K.A.K.</b>iki kenar + aradaki açı</div><div><b>A.K.A.</b>bir kenar + iki açı</div></div>' },
        { s: 'Ama üç açı tek başına yetmez: aynı biçimde, farklı büyüklükte sonsuz üçgen çizilebilir.',
          h: '<div class="an-trap">Üç açı → biçim belli, <b>büyüklük belli değil</b>. Eşitsizliği sağlamayan kenarlarla yaylar hiç kesişmez.</div>' }
      ] },

    { t: 'Pisagor bağıntısı',
      base: '<svg class="an-svg" viewBox="0 0 330 192" role="img" aria-label="Kenarları 3, 4, 5 olan dik üçgenin kenarlarına çizilen kareler: 9 artı 16 eşittir 25"><rect x="62" y="74" width="48" height="48" class="rv q1" style="fill:var(--noteline);fill-opacity:.6;stroke:var(--card2)"/><text x="86" y="104" font-size="15" text-anchor="middle" font-weight="700" class="rv q1">9</text><rect x="110" y="122" width="64" height="64" class="rv q1" style="fill:var(--ok);fill-opacity:.6;stroke:var(--card2)"/><text x="142" y="160" font-size="15" text-anchor="middle" font-weight="700" class="rv q1">16</text><path class="rv q2" d="M110 74L174 122L222 58L158 10Z" style="fill:var(--c);fill-opacity:.55;stroke:var(--card2)"/><text x="166" y="72" font-size="17" text-anchor="middle" font-weight="700" class="rv q2">25</text><path class="ln" d="M110 74V122H174Z" style="stroke-width:2.5;fill:var(--card2)"/><path class="ln" d="M110 112h10v10" style="stroke-width:1.5"/><text x="116" y="104" font-size="12" class="mut">3</text><text x="142" y="118" font-size="12" text-anchor="middle" class="mut">4</text><text x="148" y="104" font-size="12" class="mut">5</text><text x="236" y="120" font-size="14" font-weight="700" class="rv q3">9 + 16 = 25</text><text x="236" y="142" font-size="14" font-weight="700" class="acc rv q3">a² + b² = c²</text></svg>',
      steps: [
        { s: 'Gelelim LGS’de bu konudan en çok sorulan bilgiye: Pisagor. Dik kenarları 3 ve 4 olan bir dik üçgen düşün.', v: 'Gelelim le ge se’de bu konudan en çok sorulan bilgiye: Pisagor. Dik kenarları üç ve dört olan bir dik üçgen düşün.' },
        { s: 'Dik kenarlara kare çizelim: alanları 9 ve 16.', v: 'Dik kenarlara kare çizelim: alanları dokuz ve on altı.', on: '.q1' },
        { s: 'Hipotenüse çizilen karenin alanı tam 25. Yani 9 + 16 = 25!', v: 'Hipotenüse çizilen karenin alanı tam yirmi beş. Yani dokuz artı on altı, yirmi beş!', on: '.q2,.q3' },
        { s: 'Kural: dik kenarların kareleri toplamı, hipotenüsün karesine eşittir. Hipotenüs dik açının karşısındaki en uzun kenar.', v: 'Kural: dik kenarların kareleri toplamı, hipotenüsün karesine eşittir. Hipotenüs, dik açının karşısındaki en uzun kenar.',
          h: '<div class="an-rule"><b>a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></b> &nbsp; c = √(a<sup>2</sup> + b<sup>2</sup>) &nbsp;·&nbsp; a = √(c<sup>2</sup> − b<sup>2</sup>)</div>' },
        { s: 'Karıştırma: a² + b² ile (a + b)² aynı şey değil. 9 + 16 = 25, ama 7’nin karesi 49.', v: 'Karıştırma: a kare artı b kare ile, a artı b’nin karesi aynı şey değil. Dokuz artı on altı yirmi beş, ama yedinin karesi kırk dokuz.' }
      ] },

    { t: 'Pisagor üçlüleri ve hazır sonuçlar',
      steps: [
        { s: 'Şu üçlüleri tanırsan hesaba hiç girmeden cevaba ulaşırsın. Katları da geçerli: 6-8-10, 9-12-15…', v: 'Şu üçlüleri tanırsan, hesaba hiç girmeden cevaba ulaşırsın. Katları da geçerli: altı, sekiz, on; dokuz, on iki, on beş.',
          h: '<table class="an-tbl"><tr><th>Üçlü</th><th>Katları</th></tr><tr><td><b>3 – 4 – 5</b></td><td>6-8-10, 9-12-15, 12-16-20, 15-20-25</td></tr><tr><td><b>5 – 12 – 13</b></td><td>10-24-26</td></tr><tr><td><b>8 – 15 – 17</b></td><td>16-30-34</td></tr><tr><td><b>7 – 24 – 25</b></td><td>0,6-0,8-1 · 1,5-2-2,5</td></tr></table>' },
        { s: 'Hazır sonuçlar da işini kolaylaştırır: kenarı a olan karenin köşegeni a√2, eşkenar üçgenin yüksekliği {{a√3|2}}.', v: 'Hazır sonuçlar da işini kolaylaştırır: kenarı a olan karenin köşegeni, a kök iki. Eşkenar üçgenin yüksekliği, a kök üç bölü iki.' },
        { s: 'Bir üçgen dik mi? En uzun kenarın karesini diğer iki karenin toplamıyla karşılaştır. 9, 40, 41: 81 + 1600 = 1681. Dik!', v: 'Bir üçgen dik mi? En uzun kenarın karesini, diğer iki karenin toplamıyla karşılaştır. Dokuz, kırk, kırk bir: seksen bir artı bin altı yüz, bin altı yüz seksen bir. Dik!' },
        { s: 'Ustalar da bunu kullanır: duvarda 60 ve 80 cm işaretler, arası tam 100 cm ise köşe diktir.', v: 'Ustalar da bunu kullanır: duvarda altmış ve seksen santimetre işaretler; arası tam yüz santimetre ise köşe diktir.' }
      ] },

    { t: 'Koordinatta uzaklık',
      base: '<svg class="an-svg" viewBox="0 0 330 170" role="img" aria-label="A(1,1) ve B(5,4) noktaları arasındaki uzaklık 5 birim"><path class="ln" d="M40 150V18M64 150V18M88 150V18M112 150V18M136 150V18M160 150V18M184 150V18M40 150H196M40 126H196M40 102H196M40 78H196M40 54H196M40 30H196" style="stroke-width:.5;opacity:.5"/><path class="ln" d="M40 150H198 M40 150V15" style="stroke-width:1.8"/><text x="64" y="163" font-size="10" text-anchor="middle" class="mut">1</text><text x="88" y="163" font-size="10" text-anchor="middle" class="mut">2</text><text x="112" y="163" font-size="10" text-anchor="middle" class="mut">3</text><text x="136" y="163" font-size="10" text-anchor="middle" class="mut">4</text><text x="160" y="163" font-size="10" text-anchor="middle" class="mut">5</text><text x="184" y="163" font-size="10" text-anchor="middle" class="mut">6</text><text x="36" y="129" font-size="10" text-anchor="end" class="mut">1</text><text x="36" y="105" font-size="10" text-anchor="end" class="mut">2</text><text x="36" y="81" font-size="10" text-anchor="end" class="mut">3</text><text x="36" y="57" font-size="10" text-anchor="end" class="mut">4</text><text x="36" y="33" font-size="10" text-anchor="end" class="mut">5</text><circle cx="64" cy="126" r="5" style="fill:var(--c)"/><text x="60" y="142" font-size="13" font-weight="700" text-anchor="end">A(1, 1)</text><circle cx="160" cy="54" r="5" style="fill:var(--c)"/><text x="167" y="48" font-size="13" font-weight="700">B(5, 4)</text><path class="dr d1" d="M64 126H160" style="stroke:var(--noteline);stroke-width:3.5"/><text x="112" y="142" font-size="13" text-anchor="middle" class="rv d1" style="fill:var(--noteline)">4</text><path class="dr d2" d="M160 126V54" style="stroke:var(--ok);stroke-width:3.5"/><text x="167" y="94" font-size="13" class="rv d2" style="fill:var(--ok)">3</text><path class="st dr d3" d="M64 126L160 54" style="stroke-width:3.5"/><text x="99" y="78" font-size="14" font-weight="700" class="acc rv d3">5</text><text x="250" y="60" font-size="13" class="rv d3">4² + 3² = 25</text><text x="250" y="80" font-size="13" font-weight="700" class="acc rv d3">|AB| = 5</text></svg>',
      steps: [
        { s: 'İki nokta arasındaki uzaklık için formül ezberlemene gerek yok. A(1, 1) ile B(5, 4)’e bakalım.', v: 'İki nokta arasındaki uzaklık için formül ezberlemene gerek yok. A bir virgül bir, ile B beş virgül dörde bakalım.' },
        { s: 'Yatay fark 5 − 1 = 4 birim.', v: 'Yatay fark, beş eksi bir, dört birim.', on: '.d1' },
        { s: 'Dikey fark 4 − 1 = 3 birim.', v: 'Dikey fark, dört eksi bir, üç birim.', on: '.d2' },
        { s: 'Bu farklar bir dik üçgenin dik kenarları. 3-4-5 üçlüsü: |AB| = 5.', v: 'Bu farklar bir dik üçgenin dik kenarları. Üç, dört, beş üçlüsü: A B, beş birim.', on: '.d3' },
        { s: 'Negatif koordinatlarda farka dikkat: −2 ile 4 arası 6 birim.', v: 'Negatif koordinatlarda farka dikkat: eksi iki ile dört arası, altı birim.' }
      ] },

    { t: 'Gerçek hayatta Pisagor',
      steps: [
        { s: 'Duvara dayalı merdiven, televizyonun inç ölçüsü, rampa, kırılan ağaç, kutuya sığan en uzun çubuk… Hepsinde dik üçgen var.', v: 'Duvara dayalı merdiven, televizyonun inç ölçüsü, rampa, kırılan ağaç, kutuya sığan en uzun çubuk. Hepsinde bir dik üçgen var.' },
        { s: 'Önce dik açıyı bul, sonra hipotenüsü. Merdiven hep hipotenüstür.' },
        { s: 'Burada çok dikkat et: hipotenüs söylenmemişse iki durumu da düşün. Kenarlar 5 ve 12 ise üçüncü 13 de olabilir, √119 da.', v: 'Burada çok dikkat et: hipotenüs söylenmemişse iki durumu da düşün. Kenarlar beş ve on iki ise, üçüncü kenar on üç de olabilir, karekök yüz on dokuz da.',
          h: '<div class="an-trap">12 dik kenarsa → √(25 + 144) = <b>13</b> &nbsp;·&nbsp; 12 hipotenüsse → √(144 − 25) = <b>√119</b></div>' },
        { s: 'Sonuç kareköklü çıkabilir; sadeleştirmeyi unutma: √50 = 5√2.', v: 'Sonuç kareköklü çıkabilir; sadeleştirmeyi unutma: karekök elli, beş kök iki.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Kenarları 12 m ve 5 m olan dikdörtgen biçimindeki bir bahçenin bir köşesinden karşı köşesine Ali köşegen boyunca, Ayşe ise bahçenin kenarları boyunca yürüyor. Ali, Ayşe’den kaç metre <b>az</b> yürür?</p>',
        c: ['7', '5', '4', '3'], a: 'C',
        hint: 'Köşegen bir dik üçgenin hipotenüsü. 5-12-? üçlüsünü hatırla. Ayşe iki kenarı yürür.',
        hintV: 'Köşegen bir dik üçgenin hipotenüsü. Beş, on iki üçlüsünü hatırla. Ayşe iki kenarı yürür.',
        why: 'Köşegen √(12<sup>2</sup> + 5<sup>2</sup>) = √169 = 13 m. Ayşe 12 + 5 = 17 m yürür. Fark 17 − 13 = 4 m.',
        whyV: 'Köşegen, on iki kare artı beş karenin karekökü; karekök yüz altmış dokuz, on üç metre. Ayşe on iki artı beş, on yedi metre yürür. Fark dört metre.' },
      steps: [{ s: 'Son soru! Pisagor üçlüsünü hatırla.' }] }
  ]
};
