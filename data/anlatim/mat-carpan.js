/* Adım Adım Anlatım · Matematik · Çarpanlar ve Katlar (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['mat-carpan'] = {
  title: 'Çarpanlar ve Katlar',
  desc: 'Çarpan ve kat, asal sayılar, asal çarpanlara ayırma, EBOB, EKOK, aralarında asal sayılar ve LGS’nin sevdiği EBOB-EKOK problemleri, sahne sahne.',
  ozet: [
    'a = b · c ise b ve c, a’nın çarpanı; a da b’nin ve c’nin katıdır. Çarpanlar sınırlı, katlar sonsuzdur.',
    'Yalnızca tam kare sayıların çarpan sayısı tektir (36’nın 9 çarpanı var).',
    'Asal sayı: tam 2 pozitif çarpanı olan sayı. 1 asal değil, 2 tek çift asal. 51 = 3 · 17 ve 91 = 7 · 13 asal değildir.',
    'Asal çarpanlara ayırma tek biçimlidir: 360 = 2<sup>3</sup> · 3<sup>2</sup> · 5. Çarpan sayısı: üslere 1 ekle, çarp → 4 · 3 · 2 = 24.',
    'EBOB: ortak asal çarpanların en küçük üslüleri. EKOK: bütün asal çarpanların en büyük üslüleri.',
    'İki sayı için a · b = EBOB · EKOK. EBOB her zaman EKOK’u böler.',
    'Aralarında asal: EBOB’u 1. Sayıların asal olması gerekmez (8 ve 15). Ardışık iki sayı hep aralarında asaldır.',
    'Eşit parçaya bölme, en büyük parça, en az paket → EBOB. Birlikte, yeniden aynı anda, eşit toplam/kütle → EKOK.',
    'Kalan hep bölenden 1 eksikse n + 1 ortak kattır. Artanlı paylaştırmada önce artanları çıkar.'
  ],
  scenes: [
    { t: 'Çarpan ve kat',
      base: '<svg class="an-svg" viewBox="0 0 330 190" role="img" aria-label="Alanı 24 birimkare olan dikdörtgenler: 1 çarpı 24, 2 çarpı 12, 3 çarpı 8, 4 çarpı 6">' +
        '<rect x="26" y="14" width="288" height="12" class="boxa rv d1"/><path class="ln rv d1" d="M38 14v12M50 14v12M62 14v12M74 14v12M86 14v12M98 14v12M110 14v12M122 14v12M134 14v12M146 14v12M158 14v12M170 14v12M182 14v12M194 14v12M206 14v12M218 14v12M230 14v12M242 14v12M254 14v12M266 14v12M278 14v12M290 14v12M302 14v12"/>' +
        '<text x="170" y="44" font-size="14" text-anchor="middle" font-weight="700" class="rv d1">1 × 24</text>' +
        '<rect x="10" y="58" width="144" height="24" class="boxa rv d2"/><path class="ln rv d2" d="M22 58v24M34 58v24M46 58v24M58 58v24M70 58v24M82 58v24M94 58v24M106 58v24M118 58v24M130 58v24M142 58v24M10 70h144"/>' +
        '<text x="82" y="100" font-size="14" text-anchor="middle" font-weight="700" class="rv d2">2 × 12</text>' +
        '<rect x="196" y="58" width="96" height="36" class="boxa rv d3"/><path class="ln rv d3" d="M208 58v36M220 58v36M232 58v36M244 58v36M256 58v36M268 58v36M280 58v36M196 70h96M196 82h96"/>' +
        '<text x="244" y="112" font-size="14" text-anchor="middle" font-weight="700" class="rv d3">3 × 8</text>' +
        '<rect x="10" y="122" width="72" height="48" class="boxa rv d4"/><path class="ln rv d4" d="M22 122v48M34 122v48M46 122v48M58 122v48M70 122v48M10 134h72M10 146h72M10 158h72"/>' +
        '<text x="96" y="152" font-size="14" font-weight="700" class="rv d4">4 × 6</text>' +
        '<text x="320" y="152" font-size="15" text-anchor="end" class="acc rv d5">1, 2, 3, 4, 6, 8,</text>' +
        '<text x="320" y="174" font-size="15" text-anchor="end" class="acc rv d5">12, 24</text></svg>',
      steps: [
        { s: 'Hoş geldin! İlk sahnede 24 tane birim kareyle dikdörtgen yapmaya çalışalım.', v: 'Hoş geldin! İlk sahnede yirmi dört tane birim kareyle dikdörtgen yapmaya çalışalım.' },
        { s: 'Hepsini yan yana dizersek 1’e 24’lük bir şerit olur.', v: 'Hepsini yan yana dizersek, bire yirmi dörtlük bir şerit olur.', on: '.d1' },
        { s: 'İki sıra yaparsak 2’ye 12, üç sıra yaparsak 3’e 8.', v: 'İki sıra yaparsak ikiye on iki, üç sıra yaparsak üçe sekiz.', on: '.d2,.d3' },
        { s: 'Dört sıra da olur: 4’e 6. Beş sıra denersen artan kare kalır, yani 5 olmaz.', v: 'Dört sıra da olur: dörde altı. Beş sıra denersen artan kare kalır, yani beş olmaz.', on: '.d4' },
        { s: 'İşte bu kenar uzunluklarının hepsi 24’ün çarpanı, yani böleni.', v: 'İşte bu kenar uzunluklarının hepsi, yirmi dördün çarpanı, yani böleni.', on: '.d5' },
        { s: 'a = b · c ise b ile c, a’nın çarpanıdır; a da onların katıdır.', v: 'Kuralı şöyle söyleyelim: a, b çarpı c’ye eşitse; b ile c, a’nın çarpanıdır. a da onların katıdır.',
          h: '<div class="an-rule"><b>24 = 4 · 6</b> → 4 ve 6, 24’ün <b>çarpanı</b>; 24, 4’ün ve 6’nın <b>katı</b>.<br><small>Çarpanlar sınırlıdır (en büyüğü sayının kendisi), katlar sonsuzdur: 6, 12, 18, 24, …</small></div>' }
      ] },

    { t: 'Çarpan çiftleri ve tam kare tuzağı',
      steps: [
        { s: 'Çarpanları kaçırmadan bulmanın yolu çift çift yazmak. 1’den başla, böleni bulunca eşini hemen yanına yaz.', v: 'Çarpanları kaçırmadan bulmanın yolu, çift çift yazmak. Birden başla; bir böleni bulunca, eşini hemen yanına yaz.',
          h: '<table class="an-tbl"><tr><th>36’nın çarpan çiftleri</th></tr><tr><td>1 · 36</td></tr><tr><td>2 · 18</td></tr><tr><td>3 · 12</td></tr><tr><td>4 · 9</td></tr><tr class="rv q6"><td><b>6 · 6</b> ← eşi kendisi!</td></tr></table>' },
        { s: 'Şimdi şuna bir bakalım: 36’da 6’ya gelince eşi yine 6 çıkıyor.', v: 'Şimdi şuna bir bakalım: otuz altıda altıya gelince, eşi yine altı çıkıyor.', on: '.q6', mk: '.q6 td' },
        { s: 'Bu yüzden 36’nın çarpan sayısı tek: 1, 2, 3, 4, 6, 9, 12, 18, 36. Tam dokuz tane.', v: 'Bu yüzden otuz altının çarpan sayısı tek: bir, iki, üç, dört, altı, dokuz, on iki, on sekiz, otuz altı. Tam dokuz tane.' },
        { s: 'Akılda tut: çarpan sayısı tek olan sayılar yalnızca tam kare sayılardır. Diğerlerinde hep çifttir.',
          h: '<div class="an-tip">Çarpan sayısı <b>tek</b> ⇔ sayı <b>tam kare</b> (1, 4, 9, 16, 25, 36, …)</div>' }
      ] },

    { t: 'Asal sayılar',
      steps: [
        { s: 'Asal sayı, 1’den büyük olup yalnızca 1’e ve kendisine bölünen sayıdır. Yani tam iki çarpanı vardır.', v: 'Asal sayı, birden büyük olup yalnızca bire ve kendisine bölünen sayıdır. Yani tam iki çarpanı vardır.',
          h: '<div class="an-rule"><b>Asal:</b> 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, …</div>' },
        { s: '1 asal değildir, çünkü tek bir çarpanı var. 2 ise hem asal hem çift olan tek sayı.', v: 'Bir asal değildir, çünkü tek bir çarpanı var. İki ise, hem asal hem çift olan tek sayı.' },
        { s: 'Burada çok dikkat et: tek sayı demek asal sayı demek değil. 51 ile 91 en çok yanıltan iki sayı.', v: 'Burada çok dikkat et: tek sayı demek, asal sayı demek değil. Elli bir ile doksan bir, en çok yanıltan iki sayı.',
          h: '<div class="an-trap">51 = 3 · 17 &nbsp;·&nbsp; 91 = 7 · 13 &nbsp;·&nbsp; 87 = 3 · 29 → <b>asal değil</b></div>' },
        { s: 'Bir sayının asal olup olmadığını anlamak için karesi o sayıyı geçmeyen asallara bölmeyi dene.', v: 'Bir sayının asal olup olmadığını anlamak için, karesi o sayıyı geçmeyen asallara bölmeyi dene.' },
        { s: 'Mesela 97: 2’ye, 3’e, 5’e, 7’ye bölünmüyor. 11’in karesi 121, 97’yi geçti. O hâlde 97 asaldır.', v: 'Mesela doksan yedi: ikiye, üçe, beşe, yediye bölünmüyor. On birin karesi yüz yirmi bir, doksan yediyi geçti. O hâlde doksan yedi asaldır.',
          h: '<div class="an-ex"><span class="an-l">97 ÷ 2 ✗ &nbsp; 97 ÷ 3 ✗ &nbsp; 97 ÷ 5 ✗ &nbsp; 97 ÷ 7 ✗</span><span class="an-l">11<sup>2</sup> = 121 > 97 → <b>97 asal</b></span></div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdaki sayılardan hangisi <b>asal</b> sayıdır?</p>',
        c: ['51', '87', '89', '91'], a: 'C',
        hint: 'Rakamlar toplamına bak: 3’e bölünen var mı? 7’ye bölüneni de unutma.',
        hintV: 'Rakamlar toplamına bak: üçe bölünen var mı? Yediye bölüneni de unutma.',
        why: '51 = 3 · 17, 87 = 3 · 29, 91 = 7 · 13. 89 ise 2, 3, 5, 7’ye bölünmez; 89 asaldır.',
        whyV: 'Elli bir, üç çarpı on yedi; seksen yedi, üç çarpı yirmi dokuz; doksan bir de yedi çarpı on üç. Seksen dokuz ise iki, üç, beş ve yediye bölünmez; yani asaldır.' },
      steps: [{ s: 'Hadi bakalım, sıra sende! Asal olanı bul ve İşaretle’ye bas.', v: 'Hadi bakalım, sıra sende! Asal olanı bul ve işaretleye bas.' }] },

    { t: 'Asal çarpanlara ayırma',
      base: '<svg class="an-svg" viewBox="0 0 330 205" role="img" aria-label="360 sayısının çarpan ağacı: 360 eşittir 2 üssü 3 çarpı 3 üssü 2 çarpı 5">' +
        '<text x="165" y="24" font-size="20" text-anchor="middle" font-weight="700">360</text>' +
        '<path class="st dr a1" d="M155 30 L108 58 M175 30 L232 58"/>' +
        '<text x="100" y="76" font-size="18" text-anchor="middle" font-weight="700" class="rv a1">36</text><text x="240" y="76" font-size="18" text-anchor="middle" font-weight="700" class="rv a1">10</text>' +
        '<path class="st dr a2" d="M92 82 L66 108 M108 82 L134 108"/>' +
        '<text x="60" y="126" font-size="18" text-anchor="middle" font-weight="700" class="rv a2">6</text><text x="140" y="126" font-size="18" text-anchor="middle" font-weight="700" class="rv a2">6</text>' +
        '<path class="st dr a3" d="M232 82 L214 108 M248 82 L266 108"/>' +
        '<circle cx="210" cy="120" r="13" class="boxa rv a3"/><text x="210" y="126" font-size="17" text-anchor="middle" font-weight="700" class="rv a3">2</text>' +
        '<circle cx="270" cy="120" r="13" class="boxa rv a3"/><text x="270" y="126" font-size="17" text-anchor="middle" font-weight="700" class="rv a3">5</text>' +
        '<path class="st dr a4" d="M54 132 L40 152 M66 132 L80 152 M134 132 L120 152 M146 132 L160 152"/>' +
        '<circle cx="38" cy="164" r="13" class="boxa rv a4"/><text x="38" y="170" font-size="17" text-anchor="middle" font-weight="700" class="rv a4">2</text>' +
        '<circle cx="82" cy="164" r="13" class="boxa rv a4"/><text x="82" y="170" font-size="17" text-anchor="middle" font-weight="700" class="rv a4">3</text>' +
        '<circle cx="118" cy="164" r="13" class="boxa rv a4"/><text x="118" y="170" font-size="17" text-anchor="middle" font-weight="700" class="rv a4">2</text>' +
        '<circle cx="162" cy="164" r="13" class="boxa rv a4"/><text x="162" y="170" font-size="17" text-anchor="middle" font-weight="700" class="rv a4">3</text>' +
        '<text x="165" y="200" font-size="17" text-anchor="middle" font-weight="700" class="acc rv a5">360 = 2³ · 3² · 5</text></svg>',
      steps: [
        { s: 'Her sayı asal sayıların çarpımı olarak yazılabilir. 360’ı bir çarpan ağacıyla parçalayalım.', v: 'Her sayı, asal sayıların çarpımı olarak yazılabilir. Üç yüz altmışı bir çarpan ağacıyla parçalayalım.' },
        { s: 'Önce aklına gelen iki çarpana ayır: 36 çarpı 10.', v: 'Önce aklına gelen iki çarpana ayır: otuz altı çarpı on.', on: '.a1' },
        { s: '36’yı 6’ya 6 diye açalım. 10’un dalları 2 ve 5; ikisi de asal, orada dururuz.', v: 'Otuz altıyı, altıya altı diye açalım. On’un dalları iki ve beş; ikisi de asal, orada dururuz.', on: '.a2,.a3' },
        { s: 'Her 6 da 2’ye 3 diye ayrılır. Artık bütün yapraklar asal.', v: 'Her altı da, ikiye üç diye ayrılır. Artık bütün yapraklar asal.', on: '.a4' },
        { s: 'Yaprakları topla: üç tane 2, iki tane 3, bir tane 5. Yani 360 = 2³ · 3² · 5.', v: 'Yaprakları toplayalım: üç tane iki, iki tane üç, bir tane beş. Yani üç yüz altmış, iki üssü üç, çarpı üç kare, çarpı beş.', on: '.a5' },
        { s: 'Güzel haber: hangi çarpanlarla başlarsan başla, sonuç hep aynı çıkar. Bölme merdiveni de aynı sonucu verir.' }
      ] },

    { t: 'Üslü yazımdan çarpan sayısı',
      steps: [
        { s: 'Asal çarpanlara ayrılmış hâl bize çok şey söyler. Çarpan sayısı için her üsse 1 ekle ve çarp.', v: 'Asal çarpanlara ayrılmış hâl bize çok şey söyler. Çarpan sayısı için, her üsse bir ekle ve çarp.',
          h: '<div class="an-ex"><span class="an-l">360 = 2<sup>3</sup> · 3<sup>2</sup> · 5<sup>1</sup></span><span class="an-l">(3 + 1) · (2 + 1) · (1 + 1) = 4 · 3 · 2 = <b>24</b> çarpan</span></div>' },
        { s: '360 için 4 çarpı 3 çarpı 2, tam 24 pozitif çarpan.', v: 'Üç yüz altmış için, dört çarpı üç çarpı iki; tam yirmi dört pozitif çarpan.' },
        { s: 'Tek çarpanları soruyorsa 2’yi hesaba katma: 3² · 5 için 3 · 2 = 6 tek çarpan. Gerisi, yani 18’i çift.', v: 'Tek çarpanları soruyorsa ikiyi hesaba katma: üç kare çarpı beş için, üç çarpı iki, altı tek çarpan. Geri kalan on sekizi çift.' },
        { s: 'Bir sayı çarpan mı? Asalları, üslerini aşmadan kullanıyorsa evet. 2² · 3 olur ama 2⁴ ya da 7 olamaz.', v: 'Bir sayı çarpan mı? Asalları, üslerini aşmadan kullanıyorsa evet. İki kare çarpı üç olur, ama iki üssü dört ya da yedi olamaz.' },
        { s: 'Bir de şu kısa yol: kendisi hariç en büyük çarpan, sayıyı en küçük asal çarpanına bölünce çıkar.', v: 'Bir de şu kısa yol: kendisi hariç en büyük çarpan, sayıyı en küçük asal çarpanına bölünce çıkar.',
          h: '<div class="an-tip">84’ün kendisi hariç en büyük çarpanı 84 ÷ 2 = <b>42</b>, ikincisi 84 ÷ 3 = <b>28</b></div>' },
        { s: 'Burada dikkat et: 72’nin 2 tane asal çarpanı var, ama 12 tane çarpanı var. İkisini karıştırma.', v: 'Burada dikkat et: yetmiş ikinin iki tane asal çarpanı var, ama on iki tane çarpanı var. İkisini karıştırma.',
          h: '<div class="an-trap">72 = 2<sup>3</sup> · 3<sup>2</sup> → asal çarpanları <b>2 ve 3</b> (2 tane), çarpan sayısı 4 · 3 = <b>12</b></div>' }
      ] },

    { t: 'EBOB: en büyük ortak bölen',
      base: '<svg class="an-svg" viewBox="0 0 330 200" role="img" aria-label="24 ve 36 sayılarının asal çarpanlarının Venn şeması">' +
        '<circle cx="128" cy="92" r="72" class="st"/><circle cx="202" cy="92" r="72" class="st2"/>' +
        '<text x="88" y="16" font-size="16" text-anchor="middle" font-weight="700">24</text><text x="244" y="16" font-size="16" text-anchor="middle" font-weight="700">36</text>' +
        '<text x="88" y="98" font-size="18" text-anchor="middle" font-weight="700" class="rv v1">2</text>' +
        '<text x="165" y="76" font-size="18" text-anchor="middle" font-weight="700" class="acc rv v2">2 · 2</text><text x="165" y="104" font-size="18" text-anchor="middle" font-weight="700" class="acc rv v2">3</text>' +
        '<text x="244" y="98" font-size="18" text-anchor="middle" font-weight="700" class="rv v1">3</text>' +
        '<text x="165" y="188" font-size="15" text-anchor="middle" class="rv v3">ortak kısım: 2 · 2 · 3 = 12</text></svg>',
      steps: [
        { s: 'Şimdi iki sayıyı birlikte düşünelim. EBOB, iki sayıyı da kalansız bölen en büyük sayı.', v: 'Şimdi iki sayıyı birlikte düşünelim. Ebob, iki sayıyı da kalansız bölen en büyük sayı.' },
        { s: '24 = 2 · 2 · 2 · 3 ve 36 = 2 · 2 · 3 · 3. Çarpanları iki çembere yerleştirelim.', v: 'Yirmi dört, iki çarpı iki çarpı iki çarpı üç. Otuz altı da, iki çarpı iki çarpı üç çarpı üç. Çarpanları iki çembere yerleştirelim.', on: '.v1' },
        { s: 'İkisinde de olanlar ortaya gelir: iki tane 2 ve bir tane 3.', v: 'İkisinde de olanlar ortaya gelir: iki tane iki, ve bir tane üç.', on: '.v2', mk: '.v2' },
        { s: 'Ortadakileri çarp: 2 · 2 · 3 = 12. EBOB(24, 36) = 12.', v: 'Ortadakileri çarpalım: iki çarpı iki çarpı üç, on iki. Yani yirmi dört ile otuz altının ebobu on iki.', on: '.v3' },
        { s: 'Üslü yazımla söylersek: ortak asalların en küçük üslülerini çarpıyoruz.', v: 'Üslü yazımla söylersek: ortak asalların, en küçük üslülerini çarpıyoruz.',
          h: '<div class="an-rule"><b>EBOB</b>: ortak asal çarpanların <b>en küçük</b> üslüleri<br><small>24 = 2<sup>3</sup> · 3, 36 = 2<sup>2</sup> · 3<sup>2</sup> → EBOB = 2<sup>2</sup> · 3 = 12</small></div>' }
      ] },

    { t: 'EKOK: en küçük ortak kat',
      base: '<svg class="an-svg" viewBox="0 0 340 165" role="img" aria-label="Sayı doğrusunda 6 ve 8 in katları; ilk ortak kat 24">' +
        '<path class="ln" d="M12 100H330M20 96v8M32.5 96v8M45 96v8M57.5 96v8M70 96v8M82.5 96v8M95 96v8M107.5 96v8M120 96v8M132.5 96v8M145 96v8M157.5 96v8M170 96v8M182.5 96v8M195 96v8M207.5 96v8M220 96v8M232.5 96v8M245 96v8M257.5 96v8M270 96v8M282.5 96v8M295 96v8M307.5 96v8M320 96v8"/>' +
        '<text x="20" y="118" font-size="12" text-anchor="middle" class="mut">0</text>' +
        '<path class="st dr h6" style="transition-delay:0s" d="M20 96 Q38.75 66 57.5 96"/><path class="st dr h6" style="transition-delay:.18s" d="M57.5 96 Q76.25 66 95 96"/><path class="st dr h6" style="transition-delay:.36s" d="M95 96 Q113.75 66 132.5 96"/><path class="st dr h6" style="transition-delay:.54s" d="M132.5 96 Q151.25 66 170 96"/><path class="st dr h6" style="transition-delay:.72s" d="M170 96 Q188.75 66 207.5 96"/><path class="st dr h6" style="transition-delay:.9s" d="M207.5 96 Q226.25 66 245 96"/><path class="st dr h6" style="transition-delay:1.08s" d="M245 96 Q263.75 66 282.5 96"/><path class="st dr h6" style="transition-delay:1.26s" d="M282.5 96 Q301.25 66 320 96"/>' +
        '<text x="57.5" y="62" font-size="13" text-anchor="middle" class="acc rv h6">6</text><text x="95" y="62" font-size="13" text-anchor="middle" class="acc rv h6">12</text><text x="132.5" y="62" font-size="13" text-anchor="middle" class="acc rv h6">18</text><text x="170" y="62" font-size="13" text-anchor="middle" class="acc rv h6">24</text><text x="207.5" y="62" font-size="13" text-anchor="middle" class="acc rv h6">30</text><text x="245" y="62" font-size="13" text-anchor="middle" class="acc rv h6">36</text><text x="282.5" y="62" font-size="13" text-anchor="middle" class="acc rv h6">42</text><text x="320" y="62" font-size="13" text-anchor="middle" class="acc rv h6">48</text>' +
        '<path class="st2 dr h8" style="transition-delay:0s" d="M20 104 Q45 140 70 104"/><path class="st2 dr h8" style="transition-delay:.22s" d="M70 104 Q95 140 120 104"/><path class="st2 dr h8" style="transition-delay:.44s" d="M120 104 Q145 140 170 104"/><path class="st2 dr h8" style="transition-delay:.66s" d="M170 104 Q195 140 220 104"/><path class="st2 dr h8" style="transition-delay:.88s" d="M220 104 Q245 140 270 104"/><path class="st2 dr h8" style="transition-delay:1.1s" d="M270 104 Q295 140 320 104"/>' +
        '<text x="70" y="156" font-size="13" text-anchor="middle" class="rv h8">8</text><text x="120" y="156" font-size="13" text-anchor="middle" class="rv h8">16</text><text x="170" y="156" font-size="13" text-anchor="middle" class="rv h8">24</text><text x="220" y="156" font-size="13" text-anchor="middle" class="rv h8">32</text><text x="270" y="156" font-size="13" text-anchor="middle" class="rv h8">40</text><text x="320" y="156" font-size="13" text-anchor="middle" class="rv h8">48</text>' +
        '<circle cx="170" cy="100" r="9" class="st dr hk"/><circle cx="320" cy="100" r="9" class="st dr hk"/></svg>',
      steps: [
        { s: 'EKOK da iki sayının ortak katlarının en küçüğü. Sayı doğrusunda iki tavşan gibi zıplatalım.', v: 'Ekok da, iki sayının ortak katlarının en küçüğü. Sayı doğrusunda iki tavşan gibi zıplatalım.' },
        { s: 'Birinci tavşan altışar altışar zıplıyor: 6, 12, 18, 24…', v: 'Birinci tavşan altışar altışar zıplıyor: altı, on iki, on sekiz, yirmi dört.', on: '.h6', w: 900 },
        { s: 'İkincisi sekizer sekizer: 8, 16, 24…', v: 'İkincisi sekizer sekizer: sekiz, on altı, yirmi dört.', on: '.h8', w: 900 },
        { s: 'İlk buluştukları yer 24. Yani EKOK(6, 8) = 24. Sonra da 48’de, 72’de buluşurlar.', v: 'İlk buluştukları yer yirmi dört. Yani altı ile sekizin ekoku yirmi dört. Sonra da kırk sekizde, yetmiş ikide buluşurlar.', on: '.hk', mk: '.hk' },
        { s: 'Asal çarpanlarla da bulunur: bütün asalları al, her birinin en büyük üslüsünü çarp.', v: 'Asal çarpanlarla da bulunur: bütün asalları al, her birinin en büyük üslüsünü çarp.',
          h: '<div class="an-rule"><b>EKOK</b>: bütün asal çarpanların <b>en büyük</b> üslüleri<br><small>24 = 2<sup>3</sup> · 3, 36 = 2<sup>2</sup> · 3<sup>2</sup> → EKOK = 2<sup>3</sup> · 3<sup>2</sup> = 72</small></div>' }
      ] },

    { t: 'EBOB ve EKOK’un özellikleri',
      steps: [
        { s: 'Önce bir mantık kontrolü: EBOB sayıların küçüğünü geçemez, EKOK da büyüğünden küçük olamaz.', v: 'Önce bir mantık kontrolü: ebob, sayıların küçüğünü geçemez. Ekok da, büyüğünden küçük olamaz.' },
        { s: 'Biri diğerinin katıysa iş kolay: EBOB(6, 18) = 6, EKOK(6, 18) = 18.', v: 'Biri diğerinin katıysa iş kolay: altı ile on sekizin ebobu altı, ekoku on sekiz.' },
        { s: 'Ve en çok kullanılan özellik: iki sayının çarpımı, EBOB ile EKOK’un çarpımına eşittir.', v: 'Ve en çok kullanılan özellik: iki sayının çarpımı, ebob ile ekokun çarpımına eşittir.',
          h: '<div class="an-big">a · b = EBOB · EKOK</div><div class="an-ex"><span class="an-l">24 · 36 = 864 &nbsp;&nbsp; 12 · 72 = 864 ✓</span></div>' },
        { s: 'Ama bu eşitlik yalnızca iki sayı içindir. Üç sayıda genelde tutmaz.', v: 'Ama bu eşitlik yalnızca iki sayı içindir. Üç sayıda genelde tutmaz.' },
        { s: 'Bir de: EBOB her zaman EKOK’u böler. 72 bölü 12, tam 6.', v: 'Bir de şunu bil: ebob her zaman ekoku böler. Yetmiş iki bölü on iki, tam altı.' }
      ] },

    { t: 'Aralarında asal sayılar',
      base: '<table class="an-tbl"><tr><th>Sayılar</th><th>Ortak asal</th><th>Sonuç</th></tr>' +
        '<tr class="rv p1"><td>8 = 2<sup>3</sup> ve 15 = 3 · 5</td><td>yok</td><td class="an-ok-t">aralarında asal</td></tr>' +
        '<tr class="rv p2"><td>14 = 2 · 7 ve 21 = 3 · 7</td><td>7</td><td><b style="color:var(--bad)">değil</b></td></tr>' +
        '<tr class="rv p3"><td>25 = 5<sup>2</sup> ve 36 = 2<sup>2</sup> · 3<sup>2</sup></td><td>yok</td><td class="an-ok-t">aralarında asal</td></tr></table>',
      steps: [
        { s: 'İki sayının 1’den başka ortak böleni yoksa, yani EBOB’u 1 ise bu sayılar aralarında asaldır.', v: 'İki sayının birden başka ortak böleni yoksa, yani ebobu bir ise, bu sayılar aralarında asaldır.' },
        { s: 'Dikkat, sayıların kendisi asal olmak zorunda değil. 8 de 15 de asal değil, ama ortak asalları yok.', v: 'Dikkat, sayıların kendisi asal olmak zorunda değil. Sekiz de on beş de asal değil, ama ortak asalları yok.', on: '.p1', mk: '.p1 td' },
        { s: '14 ile 21’de ortak 7 var, aralarında asal değiller. 25 ile 36’da ortak yok.', v: 'On dört ile yirmi birde ortak yedi var; aralarında asal değiller. Yirmi beş ile otuz altıda ise ortak yok.', on: '.p2,.p3' },
        { s: 'Ezberlemen gereken üç bilgi: ardışık iki sayı hep aralarında asaldır, iki çift sayı asla olamaz, 1 herkesle aralarında asaldır.', v: 'Bilmen gereken üç şey: ardışık iki sayı hep aralarında asaldır; iki çift sayı asla olamaz; bir sayısı da her sayıyla aralarında asaldır.',
          h: '<div class="an-tip">Aralarında asal iki sayının EBOB’u 1, EKOK’u çarpımlarıdır: EKOK(8, 15) = 120. Kesir {{8|15}} de sadeleşmez.</div>' }
      ] },

    { t: 'EBOB mu, EKOK mu?',
      base: '<table class="an-tbl"><tr><th>Sorudaki durum</th><th>Kullan</th></tr>' +
        '<tr class="rv m1"><td>Eşit parçalara ayır, en büyük parça, en az paket, artmadan paylaştır</td><td><b>EBOB</b></td></tr>' +
        '<tr class="rv m2"><td>Birlikte, aynı anda, yeniden karşılaşma, eşit toplam ya da eşit kütle</td><td><b>EKOK</b></td></tr>' +
        '<tr class="rv m3"><td>Hep aynı kalan r → n = EKOK · k + r<br>Kalan bölenden 1 eksik → n + 1 = EKOK · k</td><td><b>EKOK</b></td></tr></table>',
      steps: [
        { s: 'Gelelim asıl meseleye. LGS’de bu konunun yarısından fazlası EBOB-EKOK problemi. Peki hangisini kullanacağız?', v: 'Gelelim asıl meseleye. Le ge se’de bu konunun yarısından fazlası, ebob ekok problemi. Peki hangisini kullanacağız?' },
        { s: 'Büyük bir şeyi eşit ve en büyük parçalara bölüyorsan EBOB. Çıtalar, kumaşlar, tarlalar, paketler…', v: 'Büyük bir şeyi eşit ve en büyük parçalara bölüyorsan, ebob. Çıtalar, kumaşlar, tarlalar, paketler.', on: '.m1' },
        { s: 'Küçük şeyler birikip bir yerde buluşuyorsa EKOK. Otobüsler, zil sesleri, eşit kütleli torbalar…', v: 'Küçük şeyler birikip bir yerde buluşuyorsa, ekok. Otobüsler, zil sesleri, eşit kütleli torbalar.', on: '.m2' },
        { s: 'Kalanlı sorular da EKOK’a çıkar; birazdan bir örnekte göreceğiz.', v: 'Kalanlı sorular da ekoka çıkar; birazdan bir örnekte göreceğiz.', on: '.m3' },
        { s: 'Ve en önemlisi: “en az” kelimesine aldanma! “En az kaç paket” aslında EBOB sorusudur.', v: 'Ve en önemlisi: en az kelimesine aldanma! En az kaç paket sorusu, aslında ebob sorusudur.',
          h: '<div class="an-trap">Kelimeye değil, durumun yapısına bak. Sonunda da istenen şeyi kontrol et: parça sayısı mı, parça uzunluğu mu?</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Mavi boncukların her biri 12 g, kırmızı boncukların her biri 18 g’dır. Bir torbaya yalnız mavi, diğerine yalnız kırmızı boncuk konarak iki torbanın kütlesi <b>eşit</b> yapılacaktır. Bir torbadaki boncukların kütlesi <b>en az</b> kaç gram olur?</p>',
        c: ['36', '6', '30', '216'], a: 'A',
        hint: 'Kütleler eşit olacak: hem 12’nin hem 18’in katı olan en küçük sayıyı ara.',
        hintV: 'Kütleler eşit olacak: hem on ikinin hem on sekizin katı olan en küçük sayıyı ara.',
        why: 'Eşit toplam → EKOK. 12 = 2<sup>2</sup> · 3, 18 = 2 · 3<sup>2</sup>, EKOK = 2<sup>2</sup> · 3<sup>2</sup> = 36 g (3 mavi, 2 kırmızı).',
        whyV: 'Eşit toplam, ekok demek. On iki ile on sekizin ekoku otuz altı. Yani otuz altı gram: üç mavi, iki kırmızı boncuk.' },
      steps: [{ s: 'LGS’nin sevdiği eşit kütle sorusu. Düşün, seç ve İşaretle.', v: 'Le ge se’nin sevdiği eşit kütle sorusu. Düşün, seç ve işaretle.' }] },

    { t: 'Çözümlü örnek: artanlı paylaştırma',
      steps: [
        { s: 'Bir öğretmen 86 kalem ve 64 silgiyi eşit dağıtıyor. Sonunda 2 kalem, 4 silgi artıyor. En fazla kaç öğrenci var?', v: 'Bir öğretmen seksen altı kalem ve altmış dört silgiyi eşit dağıtıyor. Sonunda iki kalem, dört silgi artıyor. En fazla kaç öğrenci var?',
          h: '<div class="an-ex"><span class="an-l rv e1">Dağıtılan: 86 − 2 = 84 kalem, 64 − 4 = 60 silgi</span><span class="an-l rv e2">84 = 2<sup>2</sup> · 3 · 7 &nbsp; 60 = 2<sup>2</sup> · 3 · 5</span><span class="an-l rv e3">EBOB = 2<sup>2</sup> · 3 = <b>12 öğrenci</b></span><span class="an-l rv e4">Kontrol: artanlar 2 ve 4, ikisi de 12’den küçük ✓</span></div>' },
        { s: 'İlk iş artanları çıkarmak. Gerçekten dağıtılan 84 kalem ve 60 silgi.', v: 'İlk iş artanları çıkarmak. Gerçekten dağıtılan, seksen dört kalem ve altmış silgi.', on: '.e1' },
        { s: 'Öğrenci sayısı ikisini de bölmeli ve en büyük olmalı. Bu tam bir EBOB.', v: 'Öğrenci sayısı ikisini de bölmeli, ve en büyük olmalı. Bu tam bir ebob.', on: '.e2' },
        { s: 'Ortak olanlar 2² ve 3. EBOB 12; yani 12 öğrenci, her biri 7 kalem, 5 silgi alıyor.', v: 'Ortak olanlar iki kare ve üç. Ebob on iki; yani on iki öğrenci var, her biri yedi kalem ve beş silgi alıyor.', on: '.e3' },
        { s: 'Son bir kontrol: artan sayı öğrenci sayısından küçük olmalı. 2 ve 4, 12’den küçük. Tamam!', v: 'Son bir kontrol: artan sayı, öğrenci sayısından küçük olmalı. İki ve dört, on ikiden küçük. Tamam!', on: '.e4' }
      ] },

    { t: 'Çözümlü örnek: kalan bir eksik',
      steps: [
        { s: 'Cevizler 6’şar sayılınca 5, 8’er sayılınca 7 artıyor. 100’den az ceviz varsa en fazla kaç tane var?', v: 'Cevizler altışar sayılınca beş, sekizer sayılınca yedi artıyor. Yüzden az ceviz varsa, en fazla kaç tane var?',
          h: '<div class="an-ex"><span class="an-l rv k1">Kalanlar bölenden 1 eksik → n + 1 ortak kat</span><span class="an-l rv k2">EKOK(6, 8) = 24 → n + 1 = 24, 48, 72, 96</span><span class="an-l rv k3">n = 23, 47, 71, <b>95</b></span></div>' },
        { s: 'Şuna dikkat et: 5, 6’dan bir eksik; 7 de 8’den bir eksik. Bir ceviz daha olsa hiç artmazdı.', v: 'Şuna dikkat et: beş, altıdan bir eksik. Yedi de sekizden bir eksik. Bir ceviz daha olsa hiç artmazdı.', on: '.k1' },
        { s: 'Demek ki n + 1 hem 6’nın hem 8’in katı. EKOK 24, katları 24, 48, 72, 96.', v: 'Demek ki n artı bir, hem altının hem sekizin katı. Ekok yirmi dört; katları yirmi dört, kırk sekiz, yetmiş iki, doksan altı.', on: '.k2' },
        { s: 'Her birinden 1 çıkar. 100’den küçük en büyük değer 95.', v: 'Her birinden bir çıkaralım. Yüzden küçük en büyük değer, doksan beş.', on: '.k3', mk: '.k3' },
        { s: 'Tuzak burada: 96’yı cevap yazmak. 96, n değil n + 1’dir.', v: 'Tuzak burada: doksan altıyı cevap yazmak. Doksan altı, n değil, n artı bir.',
          h: '<div class="an-trap"><span class="an-bad-t">96</span> → bu n + 1. Cevap <span class="an-ok-t">95</span></div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Alanları 48 cm² ve 72 cm² olan iki dikdörtgen, birer kenarları <b>ortak</b> olacak biçimde yan yana konuyor. Kenar uzunlukları santimetre cinsinden doğal sayıdır. Ortak kenar <b>en fazla</b> kaç cm olabilir?</p>',
        c: ['144', '24', '12', '6'], a: 'B',
        hint: 'Ortak kenar iki alanı da tam bölmeli. İkisinin ortak bölenlerinin en büyüğü hangisi?',
        why: 'Ortak kenar hem 48’i hem 72’yi böler: EBOB(48, 72) = 24 cm. Diğer kenarlar 2 cm ve 3 cm olur.',
        whyV: 'Ortak kenar hem kırk sekizi hem yetmiş ikiyi böler. Kırk sekiz ile yetmiş ikinin ebobu yirmi dört. Diğer kenarlar da iki ve üç santimetre olur.' },
      steps: [{ s: 'Son soru! LGS’de bu kalıp, alanı verilen dikdörtgenlerle çok geldi.', v: 'Son soru! Le ge se’de bu kalıp, alanı verilen dikdörtgenlerle çok geldi.' }] }
  ]
};
