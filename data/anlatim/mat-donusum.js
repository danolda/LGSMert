/* Adım Adım Anlatım · Matematik · Dönüşüm Geometrisi (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['mat-donusum'] = {
  title: 'Dönüşüm Geometrisi',
  desc: 'Öteleme ve yansıma; kareli zeminde ve koordinatta görüntü bulma, ayna ve saat soruları, ardışık dönüşümler ve kilim-çini desenleri, sahne sahne.',
  ozet: [
    'Öteleme ve yansımada şekil ile görüntüsü eştir. Ötelemede yön aynı kalır, yansımada ayna görüntüsü oluşur.',
    'Öteleme: her nokta aynı yönde, aynı miktarda kayar. (x, y) → (x + a, y + b). Bir noktanın aldığı yol √(a<sup>2</sup> + b<sup>2</sup>), a + b değil.',
    'Yansıma: [AA′] simetri doğrusuna diktir ve doğru onu ortalar. Uzaklığı eksene değil, simetri doğrusuna göre say.',
    'x eksenine göre (x, −y), y eksenine göre (−x, y). x = k doğrusuna göre y aynı kalır, uzaklık öbür tarafa aktarılır.',
    'Simetri doğrusu, nokta ile görüntüsünün orta noktasından geçer.',
    'Aynaya 3 m uzaktaki kişi görüntüsünü 6 m uzakta görür. Aynadaki analog saat: gerçek saat = 12.00 − görünen.',
    'Ardışık dönüşümde ara görüntüyü yaz. Öteleme ile yansımanın sırası önemlidir. Paralel iki doğruya göre yansıma = 2 × aradaki uzaklık kadar öteleme.',
    'Desenlerde komşu motifler aynı yöne bakıyorsa öteleme, ayna gibi tersse yansıma.'
  ],
  scenes: [
    { t: 'Şekil ve görüntü',
      steps: [
        { s: 'Merhaba! Bir şeklin yerini değiştiren hareketlere dönüşüm diyoruz. Hareketten önceki şekil, sonraki ise görüntü.' },
        { s: 'A noktasının görüntüsünü A′ diye yazar, “A üssü” diye okuruz. İkinci bir dönüşümde A″ olur.', v: 'A noktasının görüntüsünü A’nın sağ üstüne bir çizgi koyarak yazar, A üssü diye okuruz. İkinci bir dönüşümde iki çizgi olur.' },
        { s: 'Bu sınıfta iki dönüşüm var: öteleme ve yansıma. İkisinde de şekil ile görüntüsü eş: kenarlar, açılar, çevre, alan aynı.',
          h: '<table class="an-tbl"><tr><th></th><th>Öteleme</th><th>Yansıma</th></tr><tr><td>büyüklük, biçim</td><td>korunur</td><td>korunur</td></tr><tr><td>yön (sağ-sol)</td><td>aynı</td><td><b>ters döner</b></td></tr><tr><td>yerinde kalan nokta</td><td>yok</td><td>doğru üzerindekiler</td></tr></table>' },
        { s: 'Farkları yönelimde: ötelemede şekil aynı yöne bakar, yansımada ayna görüntüsü oluşur.' }
      ] },

    { t: 'Öteleme',
      base: '<svg class="an-svg" viewBox="0 0 330 160" role="img" aria-label="Kareli zeminde ABC üçgeninin 5 birim sağa ve 2 birim yukarı ötelenmesi"><path class="ln" d="M10 6V146M30 6V146M50 6V146M70 6V146M90 6V146M110 6V146M130 6V146M150 6V146M170 6V146M190 6V146M210 6V146M230 6V146M250 6V146M270 6V146M290 6V146M310 6V146M10 6H310M10 26H310M10 46H310M10 66H310M10 86H310M10 106H310M10 126H310M10 146H310" style="stroke-width:.6;opacity:.6"/><path d="M30 126L90 126L30 86Z" style="fill:var(--c);fill-opacity:.35;stroke:var(--c);stroke-width:2.5"/><text x="18" y="140" font-size="13" font-weight="700">A</text><text x="94" y="120" font-size="13" font-weight="700">B</text><text x="16" y="86" font-size="13" font-weight="700">C</text><path class="st2 dr o1" d="M30 126H130" style="stroke-dasharray:4 3"/><path class="st2 dr o1" d="M130 126V86" style="stroke-dasharray:4 3"/><text x="122" y="141" font-size="12" text-anchor="middle" class="rv o1" style="fill:var(--noteline)">5 sağa</text><text x="135" y="110" font-size="12" class="rv o1" style="fill:var(--noteline)">2 yukarı</text><path class="rv o2" d="M130 86L190 86L130 46Z" style="fill:var(--noteline);fill-opacity:.3;stroke:var(--noteline);stroke-width:2.5"/><text x="114" y="100" font-size="13" font-weight="700" class="rv o2">A′</text><text x="194" y="100" font-size="13" font-weight="700" class="rv o2">B′</text><text x="112" y="46" font-size="13" font-weight="700" class="rv o2">C′</text><path class="st dr o3" d="M30 126L130 86" style="stroke-width:1.8"/><path class="st dr o3" d="M90 126L190 86" style="stroke-width:1.8"/><path class="st dr o3" d="M30 86L130 46" style="stroke-width:1.8"/><text x="320" y="20" font-size="12" text-anchor="end" class="acc rv o3">oklar paralel ve eşit</text></svg>',
      steps: [
        { s: 'Öteleme, şekli hiç döndürmeden kaydırmaktır. ABC üçgenini 5 birim sağa, 2 birim yukarı öteleyelim.', v: 'Öteleme, şekli hiç döndürmeden kaydırmaktır. A B C üçgenini beş birim sağa, iki birim yukarı öteleyelim.' },
        { s: 'Her köşeden kareleri say: 5 kare sağa, 2 kare yukarı.', v: 'Her köşeden kareleri say: beş kare sağa, iki kare yukarı.', on: '.o1' },
        { s: 'Yeni köşeleri birleştirince görüntü çıktı: A′B′C′. Aynı yöne bakıyor, aynı büyüklükte.', v: 'Yeni köşeleri birleştirince görüntü çıktı: A üssü, B üssü, C üssü. Aynı yöne bakıyor, aynı büyüklükte.', on: '.o2' },
        { s: 'Her köşeyi görüntüsüne bağlayan oklar paralel ve eşit uzunlukta. Ötelemenin imzası bu.', on: '.o3', w: 600 },
        { s: 'Çapraz öteleme hep iki parçayla söylenir: “5 sağa, 2 yukarı” gibi. Sadece bir köşenin görüntüsü verilirse ötelemeyi oradan oku.', v: 'Çapraz öteleme hep iki parçayla söylenir: beş sağa, iki yukarı gibi. Sadece bir köşenin görüntüsü verilirse, ötelemeyi oradan oku.' }
      ] },

    { t: 'Dokun: ötelenmiş nokta',
      steps: [{ s: 'Kareleri say: önce yatay kaymayı, sonra düşey kaymayı uygula. A’nın görüntüsünü bul ve ona dokun.' }],
      ia: { tip: 'gorselsec', q: '<p>A noktası <b>3 birim sola</b> ve <b>2 birim aşağı</b> ötelenirse görüntüsü hangi noktadır?</p>', svg: '<svg class="an-svg" viewBox="0 0 340 200" role="img" aria-label="Kareli zeminde A noktası ve P, Q, R, S noktaları"><path class="ln" d="M30 20 V188" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M58 20 V188" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M86 20 V188" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M114 20 V188" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M142 20 V188" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M170 20 V188" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M198 20 V188" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M226 20 V188" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M254 20 V188" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M282 20 V188" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M310 20 V188" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M30 20 H310" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M30 48 H310" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M30 76 H310" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M30 104 H310" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M30 132 H310" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M30 160 H310" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M30 188 H310" style="stroke-width:.7;opacity:.6"/><circle cx="198" cy="76" r="7" style="fill:var(--c)"/><text x="207" y="69" font-size="16" font-weight="700" class="acc">A</text><g data-b="p" aria-label="P noktası"><circle cx="114" cy="132" r="17" class="box"/><text x="114" y="137" text-anchor="middle" font-size="15" font-weight="700">P</text></g><g data-b="q" aria-label="Q noktası"><circle cx="282" cy="132" r="17" class="box"/><text x="282" y="137" text-anchor="middle" font-size="15" font-weight="700">Q</text></g><g data-b="r" aria-label="R noktası"><circle cx="142" cy="160" r="17" class="box"/><text x="142" y="165" text-anchor="middle" font-size="15" font-weight="700">R</text></g><g data-b="s" aria-label="S noktası"><circle cx="114" cy="20" r="17" class="box"/><text x="114" y="25" text-anchor="middle" font-size="15" font-weight="700">S</text></g></svg>', dogru: ['p'], hint: 'A’dan başla: önce 3 kare sola say, sonra oradan 2 kare aşağı in.', why: 'A’dan 3 kare sola, sonra 2 kare aşağı: P. Q’da yön ters, sağa gidilmiş; R’de kaymalar yer değiştirmiş, 2 sola 3 aşağı; S’de ise yukarı çıkılmış.', whyV: 'A’dan 3 kare sola, sonra 2 kare aşağı inince P noktasına varırız. Q’da yön ters, sağa gidilmiş. R’de kaymalar yer değiştirmiş: 2 sola, 3 aşağı. S’de ise aşağı yerine yukarı çıkılmış.' } },

    { t: 'Koordinatta öteleme',
      base: '<table class="an-tbl"><tr><th>Hareket</th><th>Değişim</th><th>(2, −1) noktası</th></tr>' +
        '<tr><td>a birim sağa</td><td>x + a</td><td>3 sağa → (5, −1)</td></tr><tr><td>a birim sola</td><td>x − a</td><td>4 sola → (−2, −1)</td></tr>' +
        '<tr><td>b birim yukarı</td><td>y + b</td><td>3 yukarı → (2, 2)</td></tr><tr><td>b birim aşağı</td><td>y − b</td><td>2 aşağı → (2, −3)</td></tr></table>',
      steps: [
        { s: 'Koordinatta öteleme çok kolay: sağa-sola gidince yalnız x, yukarı-aşağı gidince yalnız y değişir.', v: 'Koordinatta öteleme çok kolay: sağa sola gidince yalnız iks, yukarı aşağı gidince yalnız y değişir.' },
        { s: 'Ötelemeyi bulmak için farkları al: yatay kayma x′ − x, düşey kayma y′ − y. Eksi çıkarsa sola ya da aşağı.', v: 'Ötelemeyi bulmak için farkları al: yatay kayma, yeni iks eksi eski iks; düşey kayma, yeni y eksi eski y. Eksi çıkarsa sola ya da aşağı.' },
        { s: 'Burada çok dikkat et: 3 sağa ve 4 yukarı kayan nokta 7 birim değil, Pisagor’dan 5 birim yol alır.', v: 'Burada çok dikkat et: üç sağa ve dört yukarı kayan nokta, yedi birim değil; Pisagor’dan beş birim yol alır.',
          h: '<div class="an-trap">alınan yol = √(a<sup>2</sup> + b<sup>2</sup>) &nbsp; <span class="an-bad-t">a + b</span></div>' },
        { s: 'İki ardışık öteleme tek bir öteleme gibidir ve sıraları fark etmez.' }
      ] },

    { t: 'Boşluk doldur: koordinatta öteleme',
      steps: [{ s: 'Önce kaymayı farklardan bul. Sonra aynı kaymayı ikinci noktaya uygula.' }],
      ia: { tip: 'bosluk', q: '<p>Bir ötelemede K(−2, 3) noktasının görüntüsü K′(4, 1)’dir.</p>', metin: 'Öteleme: [_] birim sağa, [_] birim aşağı<br>L(1, −1) → L′([_], [_])', secenek: ['6', '2', '7', '−3', '4', '3', '−1', '8'], cevap: ['6', '2', '7', '−3'], hint: 'Yatay kayma x′ − x, düşey kayma y′ − y. Eksi çıkan kayma aşağı ya da sola demektir. Aynı kaymayı L’ye ekle.', hintV: 'Yatay kayma, iks üssünden iksi çıkararak; düşey kayma, ye üssünden yeyi çıkararak bulunur. Eksi çıkan kayma aşağı ya da sola demektir. Aynı kaymayı L’ye ekle.', why: '4 − (−2) = 6: 6 birim sağa. 1 − 3 = −2: 2 birim aşağı. Ötelemede her nokta aynı kayar: L′(1 + 6, −1 − 2) = L′(7, −3).', whyV: '4 eksi eksi 2, 6 eder: 6 birim sağa. 1 eksi 3, eksi 2: 2 birim aşağı. Ötelemede her nokta aynı miktarda kayar: L üssü, 1 artı 6 ve eksi 1 eksi 2; yani 7 ve eksi 3.' } },

    { t: 'Çözümlü örnek: harita simgesi',
      steps: [
        { s: 'Bir harita simgesinin merkezi M(2, −4)’ten M′(−3, 8)’e ötelendi. Köşesi K(1, −3) nereye gitti, kaç birim yol aldı?', v: 'Bir harita simgesinin merkezi, iki virgül eksi dörtten, eksi üç virgül sekize ötelendi. K köşesi, bir virgül eksi üç, nereye gitti, kaç birim yol aldı?',
          h: '<div class="an-ex"><span class="an-l rv m1">yatay: −3 − 2 = −5 (5 sola) · düşey: 8 − (−4) = 12 (12 yukarı)</span><span class="an-l rv m2">K′(1 − 5, −3 + 12) = <b>K′(−4, 9)</b></span><span class="an-l rv m3">yol: √(5<sup>2</sup> + 12<sup>2</sup>) = √169 = <b>13 birim</b></span></div>' },
        { s: 'Önce kaymayı bul: yatayda −5, yani 5 sola. Düşeyde +12, yani 12 yukarı.', v: 'Önce kaymayı bul: yatayda eksi beş, yani beş sola. Düşeyde artı on iki, yani on iki yukarı.', on: '.m1' },
        { s: 'Ötelemede her nokta aynı kayar. K’ye de uygula: K′(−4, 9).', v: 'Ötelemede her nokta aynı kayar. K’ye de uygula: eksi dört virgül dokuz.', on: '.m2' },
        { s: 'Yol: 5-12-13 üçlüsü! 13 birim. 17 cevabı tuzaktır.', v: 'Yol: beş, on iki, on üç üçlüsü! On üç birim. On yedi cevabı tuzaktır.', on: '.m3' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Koordinat düzlemindeki A(−2, 5) noktası 4 birim sağa ve 3 birim aşağı ötelenirse görüntüsü hangi noktadır?</p>',
        c: ['(−6, 8)', '(2, 2)', '(2, 8)', '(−6, 2)'], a: 'B',
        hint: 'Sağa gitmek x’e eklemek, aşağı gitmek y’den çıkarmak demek.',
        hintV: 'Sağa gitmek iksi artırır, aşağı gitmek y’yi azaltır.',
        why: 'x: −2 + 4 = 2, y: 5 − 3 = 2. Görüntü (2, 2).',
        whyV: 'İks: eksi iki artı dört, iki. Y: beş eksi üç, iki. Görüntü, iki virgül iki.' },
      steps: [{ s: 'Sıra sende! Hangi hareket hangi koordinatı değiştirir?' }] },

    { t: 'Yansıma',
      base: '<svg class="an-svg" viewBox="0 0 330 150" role="img" aria-label="Kareli zeminde KLMN dörtgeninin d doğrusuna göre yansıması"><path class="ln" d="M10 6V126M30 6V126M50 6V126M70 6V126M90 6V126M110 6V126M130 6V126M150 6V126M170 6V126M190 6V126M210 6V126M230 6V126M250 6V126M270 6V126M290 6V126M310 6V126M10 6H310M10 26H310M10 46H310M10 66H310M10 86H310M10 106H310M10 126H310" style="stroke-width:.6;opacity:.6"/><path d="M130 6V126" style="stroke:var(--ok);stroke-width:2.5;stroke-dasharray:6 4"/><text x="135" y="20" font-size="13" font-weight="700" style="fill:var(--ok)">d</text><path d="M50 46L90 46L110 106L50 86Z" style="fill:var(--c);fill-opacity:.35;stroke:var(--c);stroke-width:2.5"/><text x="36" y="46" font-size="13" font-weight="700">K</text><text x="92" y="41" font-size="13" font-weight="700">L</text><text x="106" y="122" font-size="13" font-weight="700">M</text><text x="36" y="94" font-size="13" font-weight="700">N</text><path class="dr y1" d="M50 86H210" style="stroke:var(--bad);stroke-width:2;stroke-dasharray:4 3"/><text x="70" y="101" font-size="12" text-anchor="middle" class="rv y1" style="fill:var(--bad)">4</text><text x="190" y="101" font-size="12" text-anchor="middle" class="rv y1" style="fill:var(--bad)">4</text><path class="ln rv y1" d="M130 86h8v-8" style="stroke-width:1.5"/><path class="rv y2" d="M210 46L170 46L150 106L210 86Z" style="fill:var(--noteline);fill-opacity:.3;stroke:var(--noteline);stroke-width:2.5"/><text x="214" y="46" font-size="13" font-weight="700" class="rv y2">K′</text><text x="156" y="41" font-size="13" font-weight="700" class="rv y2">L′</text><text x="146" y="122" font-size="13" font-weight="700" class="rv y2">M′</text><text x="214" y="94" font-size="13" font-weight="700" class="rv y2">N′</text></svg>',
      steps: [
        { s: 'Yansıma, şeklin bir doğruya göre ayna görüntüsünü almaktır. Bu doğruya simetri doğrusu diyoruz: burada d.' },
        { s: 'N noktası d’ye 4 kare uzak. Görüntüsü d’nin öbür yanında, yine 4 kare uzakta. NN′ doğru parçası d’ye dik.', v: 'N noktası d’ye dört kare uzak. Görüntüsü d’nin öbür yanında, yine dört kare uzakta. N ile N üssünü birleştiren doğru parçası, d’ye dik.', on: '.y1' },
        { s: 'Bütün köşeler için aynısını yapınca ayna görüntüsü çıkar. Sağ ile sol yer değiştirdi!', on: '.y2' },
        { s: 'Köşeler saat yönünde K, L, M, N diye okunuyorsa, görüntüde saatin tersine dizilir. Yönelim ters döndü.', v: 'Köşeler saat yönünde K, L, M, N diye okunuyorsa, görüntüde saatin tersine dizilir. Yönelim ters döndü.' },
        { s: 'Burada çok dikkat et: uzaklığı eksene göre değil, simetri doğrusuna göre say. d üzerindeki noktalar yerinde kalır.',
          h: '<div class="an-trap">Uzaklık <b>simetri doğrusuna</b> göre sayılır. |AA′| = 2 × (A’nın d’ye uzaklığı)</div>' }
      ] },

    { t: 'Koordinatta yansıma',
      base: '<table class="an-tbl"><tr><th>Doğru</th><th>Kural</th><th>P(3, −2)</th></tr>' +
        '<tr class="rv c1"><td>x ekseni</td><td>(x, −y)</td><td>(3, 2)</td></tr>' +
        '<tr class="rv c1"><td>y ekseni</td><td>(−x, y)</td><td>(−3, −2)</td></tr>' +
        '<tr class="rv c2"><td>x = 1</td><td>y aynı, uzaklığı aktar</td><td>(−1, −2)</td></tr>' +
        '<tr class="rv c2"><td>y = 1</td><td>x aynı, uzaklığı aktar</td><td>(3, 4)</td></tr></table>',
      steps: [
        { s: 'x eksenine göre yansımada yalnız y’nin işareti değişir. y eksenine göre ise yalnız x’in.', v: 'İks eksenine göre yansımada yalnız y’nin işareti değişir. Y eksenine göre ise yalnız iksin.', on: '.c1' },
        { s: 'x = 1 gibi dikey bir doğruya göre: P(3, −2), doğrunun 2 sağında. Görüntüsü 2 solunda: (−1, −2).', v: 'İks eşittir bir gibi dikey bir doğruya göre: P noktası, üç virgül eksi iki, doğrunun iki sağında. Görüntüsü iki solunda: eksi bir virgül eksi iki.', on: '.c2' },
        { s: 'Yatay y = 1 doğrusuna göre: P doğrunun 3 altında, görüntü 3 üstünde: (3, 4).', v: 'Yatay, y eşittir bir doğrusuna göre: P doğrunun üç altında, görüntü üç üstünde: üç virgül dört.' },
        { s: 'Simetri doğrusu bilinmiyorsa: nokta ile görüntüsünün orta noktası doğrunun üzerindedir.' }
      ] },

    { t: 'Eşleştir: yansımanın görüntüsü',
      steps: [{ s: 'Q(−2, 4) noktasını farklı doğrulara göre yansıt. Her doğruyu görüntüyle eşleştir.', v: 'Q noktasını, yani eksi 2, 4 noktasını, farklı doğrulara göre yansıt. Her doğruyu görüntüyle eşleştir.' }],
      ia: { tip: 'eslestir', q: '<p><b>Q(−2, 4)</b> noktasının yansımalarını eşleştir.</p>', solBaslik: 'Neye göre?', sagBaslik: 'Görüntü', sol: ['x eksenine göre', 'y eksenine göre', 'x = 1 doğrusuna göre', 'y = 2 doğrusuna göre', 'x = −3 doğrusuna göre'], sag: ['(−2, −4)', '(2, 4)', '(4, 4)', '(−2, 0)', '(−4, 4)'], hint: 'Dikey doğruya göre yansımada yalnız x, yatay doğruya göre yansımada yalnız y değişir. Noktanın doğruya uzaklığını öbür yana aynen taşı.', hintV: 'Dikey doğruya göre yansımada yalnız iks, yatay doğruya göre yansımada yalnız ye değişir. Noktanın doğruya uzaklığını öbür yana aynen taşı.', why: 'x = 1’e göre: Q doğrunun 3 solunda, görüntü 3 sağında, (4, 4). y = 2’ye göre: Q 2 üstte, görüntü 2 altta, (−2, 0). x = −3’e göre: Q 1 sağda, görüntü 1 solda, (−4, 4).', whyV: 'İks eşittir 1 doğrusuna göre: Q doğrunun 3 birim solunda, görüntüsü 3 birim sağında: 4, 4. Ye eşittir 2’ye göre: Q 2 birim üstte, görüntü 2 birim altta: eksi 2, sıfır. İks eşittir eksi 3’e göre: Q 1 birim sağda, görüntü 1 birim solda: eksi 4, 4.' } },

    { t: 'Çözümlü örnek: doğruyu bul',
      steps: [
        { s: 'A(−1, 3)’ün d’ye göre görüntüsü A′(7, 3). Aynı doğruya göre B(0, −2)’nin görüntüsü ne?', v: 'A noktası, eksi bir virgül üç; d doğrusuna göre görüntüsü, yedi virgül üç. Aynı doğruya göre B noktasının, sıfır virgül eksi ikinin, görüntüsü ne?',
          h: '<div class="an-ex"><span class="an-l rv f1">y değişmedi → d dikey</span><span class="an-l rv f2">orta nokta: x = {{−1 + 7|2}} = 3 → d: x = 3</span><span class="an-l rv f3">B, d’nin 3 solunda → B′ 3 sağında: <b>B′(6, −2)</b></span></div>' },
        { s: 'Yalnız x değişmiş, y aynı. Demek ki d dikey bir doğru.', v: 'Yalnız iks değişmiş, y aynı. Demek ki d dikey bir doğru.', on: '.f1' },
        { s: 'Orta nokta: −1 ile 7’nin ortası 3. Yani d: x = 3.', v: 'Orta nokta: eksi bir ile yedinin ortası üç. Yani d, iks eşittir üç doğrusu.', on: '.f2' },
        { s: 'B, doğrunun 3 birim solunda. Görüntüsü 3 birim sağında: B′(6, −2).', v: 'B, doğrunun üç birim solunda. Görüntüsü üç birim sağında: altı virgül eksi iki.', on: '.f3' },
        { s: 'Tuzak: y eksenine göre yansıtıp (0, −2) bulmak. Hangi doğruya göre yansıttığına hep bak!', v: 'Tuzak: y eksenine göre yansıtıp, sıfır virgül eksi iki bulmak. Hangi doğruya göre yansıttığına hep bak!' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>P(5, −1) noktasının <b>x = 2</b> doğrusuna göre yansıması hangi noktadır?</p>',
        c: ['(−5, −1)', '(5, 1)', '(1, −1)', '(−1, −1)'], a: 'D',
        hint: 'x = 2 dikey bir doğru; y değişmez. P doğrunun kaç birim sağında?',
        hintV: 'İks eşittir iki dikey bir doğru; y değişmez. P doğrunun kaç birim sağında?',
        why: 'P, x = 2’nin 3 birim sağında. Görüntü 3 birim solunda: x = 2 − 3 = −1. Sonuç (−1, −1).',
        whyV: 'P, doğrunun üç birim sağında. Görüntüsü üç birim solunda: iki eksi üç, eksi bir. Sonuç, eksi bir virgül eksi bir.' },
      steps: [{ s: 'Uzaklığı eksene değil, doğruya göre say!' }] },

    { t: 'Ayna ve saat soruları',
      steps: [
        { s: 'Aynada görüntü, aynanın arkasında, cisimle aynı uzaklıktadır. Aynaya 3 m uzaktaki kişi görüntüsünü 6 m uzakta görür.', v: 'Aynada görüntü, aynanın arkasında, cisimle aynı uzaklıktadır. Aynaya üç metre uzaktaki kişi, görüntüsünü altı metre uzakta görür.',
          h: '<div class="an-trap">aynaya uzaklık 3 m → görüntüye uzaklık <b>6 m</b>. Aynaya 1 m yaklaşan, görüntüsüne <b>2 m</b> yaklaşır.</div>' },
        { s: 'Aynadaki analog saatte sağ ile sol yer değiştirir. Gerçek saati bulmak için 12’den çıkar.', v: 'Aynadaki analog saatte sağ ile sol yer değiştirir. Gerçek saati bulmak için on ikiden çıkar.',
          h: '<div class="an-ex"><span class="an-l">aynada 2.50 → gerçek 12.00 − 2.50 = <b>9.10</b></span></div>' },
        { s: 'Dijital saatte ve yazılarda karakterlerin sırası ters döner, her biri de yansır. Ambulansın önündeki ters yazı bu yüzden.' },
        { s: 'Göldeki görüntü de su yüzeyine göre, yani yatay bir doğruya göre yansımadır.' }
      ] },

    { t: 'Kaydır: aynadaki uzaklık',
      steps: [{ s: 'Aynadaki görüntü aynanın arkasında, cisimle aynı uzaklıktadır. Hesapla ve kaydırıcıyla göster.' }],
      ia: { tip: 'kaydir', q: '<p>Aynadan 2,5 m uzakta duran Ece aynaya doğru 1 m yürüyor. Şimdi Ece ile aynadaki görüntüsü arasındaki uzaklık kaç metredir?</p>', min: 0, max: 6, adim: 0.5, cevap: 3, birim: 'm', etiket: [0, 1, 2, 3, 4, 5, 6], hint: 'Önce Ece’nin aynaya yeni uzaklığını bul. Görüntü de aynanın arkasında aynı uzaklıktadır.', why: 'Ece artık aynadan 1,5 m uzakta; görüntüsü de aynanın 1,5 m arkasında. Aradaki uzaklık 1,5 + 1,5 = 3 m. 5 − 1 = 4 demek, görüntünün de yaklaştığını unutmaktır.', whyV: 'Ece artık aynadan bir buçuk metre uzakta; görüntüsü de aynanın bir buçuk metre arkasında. Aradaki uzaklık 3 metre. 5’ten 1 çıkarıp 4 demek, görüntünün de Ece kadar yaklaştığını unutmaktır.' } },

    { t: 'Ardışık dönüşümler',
      steps: [
        { s: 'İki dönüşüm art arda yapılınca ikincisi ilk görüntüye uygulanır. Ara görüntüyü mutlaka yaz: C → C′ → C″.', v: 'İki dönüşüm art arda yapılınca, ikincisi ilk görüntüye uygulanır. Ara görüntüyü mutlaka yaz.' },
        { s: 'C(−1, 3) önce 5 birim sağa ötelensin, sonra x = 2 doğrusuna göre yansısın.', v: 'C noktası, eksi bir virgül üç, önce beş birim sağa ötelensin; sonra iks eşittir iki doğrusuna göre yansısın.',
          h: '<div class="an-ex"><span class="an-l rv a1">öteleme: C(−1, 3) → C′(4, 3)</span><span class="an-l rv a2">x = 2’ye göre: 4, doğrunun 2 sağında → C″(0, 3)</span><span class="an-l rv a3">sıra ters olsaydı: (5, 3) → <b>(10, 3)</b> ✗ farklı!</span></div>' },
        { s: 'Öteleme sonrası C′(4, 3). Doğrunun 2 sağında, görüntüsü 2 solunda: C″(0, 3).', v: 'Öteleme sonrası dört virgül üç. Doğrunun iki sağında; görüntüsü iki solunda: sıfır virgül üç.', on: '.a1,.a2' },
        { s: 'Önce yansıtsaydık (5, 3), sonra öteleyince (10, 3) bulurduk. Öteleme ile yansımanın sırası önemli!', v: 'Önce yansıtsaydık beş virgül üç, sonra öteleyince on virgül üç bulurduk. Öteleme ile yansımanın sırası önemli!', on: '.a3' }
      ] },

    { t: 'İki yansıma art arda',
      steps: [
        { s: 'Paralel iki doğruya göre art arda yansıma, bir öteleme gibi davranır. Öteleme miktarı doğrular arasındaki uzaklığın 2 katı.', v: 'Paralel iki doğruya göre art arda yansıma, bir öteleme gibi davranır. Öteleme miktarı, doğrular arasındaki uzaklığın iki katı.',
          h: '<div class="an-trap">3 birim arayla iki paralel doğru → <b>6 birim</b> öteleme (3 değil!)</div>' },
        { s: 'Dik kesişen iki doğruya, mesela x ve y eksenlerine göre art arda yansıma: (x, y) → (−x, −y). İki işaret de değişir.', v: 'Dik kesişen iki doğruya, mesela iks ve y eksenlerine göre art arda yansımada, iki koordinatın işareti de değişir.' },
        { s: 'Bu durumda şekil baş aşağı ve sağ-sol ters görünür. Bu tek bir yansımayla elde edilemez; iki dik yansıma gerekir.' }
      ] },

    { t: 'Doğru mu, yanlış mı?',
      steps: [{ s: 'Ardışık dönüşümlerle ilgili ifadeleri sına. Her biri için Doğru ya da Yanlış’a dokun.' }],
      ia: { tip: 'dogruyanlis', q: '<p>Her ifade için karar ver.</p>', ifadeler: [
            { m: 'Paralel iki doğruya göre art arda yansıma, bir öteleme gibidir.', d: true, a: 'Kayma, doğrular arası uzaklığın 2 katıdır.' },
            { m: 'Öteleme ile yansımanın sırası değişse de sonuç hep aynıdır.', d: false, a: 'C(−1, 3) örneğinde sonuçlar (0, 3) ve (10, 3) çıktı.' },
            { m: 'x ve y eksenlerine göre art arda yansımada (x, y) → (−x, −y) olur.', d: true, a: 'Her yansıma bir işareti değiştirir.' },
            { m: 'İki ardışık ötelemenin sırası değişirse sonuç değişir.', d: false, a: 'Kaymalar toplanır; sıra fark etmez.' }], hint: 'Ötelemeler kendi aralarında sıra değiştirebilir. Yansıma ile öteleme karışınca ara görüntüyü yazıp dene.', why: 'İki öteleme tek bir öteleme gibidir, sıraları fark etmez. Öteleme ile yansımada sıra önemlidir. Dik iki doğruya göre yansıma iki işareti de, paralel iki doğruya göre yansıma ise konumu kaydırır.' } },

    { t: 'Desenlerde dönüşümler',
      base: '<svg class="an-svg" viewBox="0 0 330 150" role="img" aria-label="L motifiyle iki bordür: üstte öteleme, altta düşey doğrulara göre yansıma"><text x="8" y="16" font-size="12.5" font-weight="700" class="acc">öteleme</text><path class="rv b1" d="M20 24L20 54L38 54L38 47L27 47L27 24Z" style="fill:var(--c);fill-opacity:.7;stroke:var(--c);stroke-width:1.5"/><path class="rv b1" d="M70 24L70 54L88 54L88 47L77 47L77 24Z" style="fill:var(--c);fill-opacity:.7;stroke:var(--c);stroke-width:1.5"/><path class="rv b1" d="M120 24L120 54L138 54L138 47L127 47L127 24Z" style="fill:var(--c);fill-opacity:.7;stroke:var(--c);stroke-width:1.5"/><path class="rv b1" d="M170 24L170 54L188 54L188 47L177 47L177 24Z" style="fill:var(--c);fill-opacity:.7;stroke:var(--c);stroke-width:1.5"/><path class="rv b1" d="M220 24L220 54L238 54L238 47L227 47L227 24Z" style="fill:var(--c);fill-opacity:.7;stroke:var(--c);stroke-width:1.5"/><path class="rv b1" d="M270 24L270 54L288 54L288 47L277 47L277 24Z" style="fill:var(--c);fill-opacity:.7;stroke:var(--c);stroke-width:1.5"/><text x="8" y="86" font-size="12.5" font-weight="700" style="fill:var(--ok)" class="rv b2">yansıma</text><path class="rv b2" d="M20 94L20 124L38 124L38 117L27 117L27 94Z" style="fill:var(--c);fill-opacity:.7;stroke:var(--c);stroke-width:1.5"/><path class="rv b2" d="M94 94L94 124L76 124L76 117L87 117L87 94Z" style="fill:var(--c);fill-opacity:.7;stroke:var(--c);stroke-width:1.5"/><path class="rv b2" d="M120 94L120 124L138 124L138 117L127 117L127 94Z" style="fill:var(--c);fill-opacity:.7;stroke:var(--c);stroke-width:1.5"/><path class="rv b2" d="M194 94L194 124L176 124L176 117L187 117L187 94Z" style="fill:var(--c);fill-opacity:.7;stroke:var(--c);stroke-width:1.5"/><path class="rv b2" d="M220 94L220 124L238 124L238 117L227 117L227 94Z" style="fill:var(--c);fill-opacity:.7;stroke:var(--c);stroke-width:1.5"/><path class="rv b2" d="M294 94L294 124L276 124L276 117L287 117L287 94Z" style="fill:var(--c);fill-opacity:.7;stroke:var(--c);stroke-width:1.5"/><path class="rv b2" d="M57 90V130" style="stroke:var(--ok);stroke-width:1.5;stroke-dasharray:4 3"/><path class="rv b2" d="M107 90V130" style="stroke:var(--ok);stroke-width:1.5;stroke-dasharray:4 3"/><path class="rv b2" d="M157 90V130" style="stroke:var(--ok);stroke-width:1.5;stroke-dasharray:4 3"/><path class="rv b2" d="M207 90V130" style="stroke:var(--ok);stroke-width:1.5;stroke-dasharray:4 3"/><path class="rv b2" d="M257 90V130" style="stroke:var(--ok);stroke-width:1.5;stroke-dasharray:4 3"/></svg>',
      steps: [
        { s: 'Çini, kilim ve halı desenlerinde bir motif öteleme ve yansımayla tekrar edilir. Nasıl anlarız? Komşu motiflere bak.' },
        { s: 'Hepsi aynı yöne bakıyorsa öteleme.', on: '.b1' },
        { s: 'Komşular aradaki doğruya göre ayna gibi ters duruyorsa yansıma.', on: '.b2' },
        { s: 'Kâğıt katlama da yansımadır: bir kez katlayıp delersen 2 delik, dik iki kez katlarsan 4 delik çıkar.', v: 'Kâğıt katlama da yansımadır: bir kez katlayıp delersen iki delik, dik iki kez katlarsan dört delik çıkar.' },
        { s: 'Şıklarda genelde ötelenmiş, yanlış doğruya göre yansıtılmış ya da döndürülmüş şekiller olur. Ayırt edici bir parçayı seç ve kare kare say.' }
      ] },

    { t: 'Dokun: motifin yansıması',
      steps: [{ s: 'Örnek motifi dikkatle incele: bayrak hangi yana bakıyor, direğin neresinde duruyor? Sonra doğru motife dokun.' }],
      ia: { tip: 'gorselsec', q: '<p>Örnek motifin <b>dikey bir doğruya göre</b> yansımasına dokun.</p>', svg: '<svg class="an-svg" viewBox="0 0 340 112" role="img" aria-label="Solda örnek bayrak motifi, sağda 1, 2, 3, 4 numaralı motifler"><rect x="4" y="4" width="62" height="104" rx="10" class="boxa"/><polygon points="23,18 29,18 29,20 49,28 29,36 29,68 23,68" style="fill:var(--c);fill-opacity:.85;stroke:var(--c);stroke-width:1.5"/><text x="35" y="98" font-size="13" text-anchor="middle" class="mut">örnek</text><g data-b="m1" aria-label="1. motif"><rect x="74" y="4" width="60" height="104" rx="10" class="box"/><polygon points="92,18 98,18 98,20 118,28 98,36 98,68 92,68" style="fill:var(--c);fill-opacity:.85;stroke:var(--c);stroke-width:1.5"/><text x="104" y="100" font-size="15" font-weight="700" text-anchor="middle">1</text></g><g data-b="m2" aria-label="2. motif"><rect x="140" y="4" width="60" height="104" rx="10" class="box"/><polygon points="158,68 164,68 164,66 184,58 164,50 164,18 158,18" style="fill:var(--c);fill-opacity:.85;stroke:var(--c);stroke-width:1.5"/><text x="170" y="100" font-size="15" font-weight="700" text-anchor="middle">2</text></g><g data-b="m3" aria-label="3. motif"><rect x="206" y="4" width="60" height="104" rx="10" class="box"/><polygon points="250,18 244,18 244,20 224,28 244,36 244,68 250,68" style="fill:var(--c);fill-opacity:.85;stroke:var(--c);stroke-width:1.5"/><text x="236" y="100" font-size="15" font-weight="700" text-anchor="middle">3</text></g><g data-b="m4" aria-label="4. motif"><rect x="272" y="4" width="60" height="104" rx="10" class="box"/><polygon points="316,68 310,68 310,66 290,58 310,50 310,18 316,18" style="fill:var(--c);fill-opacity:.85;stroke:var(--c);stroke-width:1.5"/><text x="302" y="100" font-size="15" font-weight="700" text-anchor="middle">4</text></g></svg>', dogru: ['m3'], hint: 'Bayrak hangi yana bakıyor? Dikey aynada sağ-sol ters döner ama bayrak yine direğin üst kısmında kalır.', why: '3 numarada bayrak sola bakıyor, yine üstte: sağ ile sol yer değiştirmiş. 1 numara ötelenmiş, 2 numara yatay doğruya göre yansımış, 4 numara iki dik yansımayla baş aşağı dönmüş.', whyV: '3 numarada bayrak sola bakıyor ve yine üstte; sağ ile sol yer değiştirmiş. 1 numara yalnızca ötelenmiş, 2 numara yatay bir doğruya göre yansımış, 4 numara ise iki dik yansımayla baş aşağı dönmüş.' } },

    { t: 'Ara soru', cp: {
        q: '<p>A(1, 2) noktası önce <b>y eksenine</b> göre yansıtılıyor, sonra elde edilen görüntü <b>3 birim aşağı</b> öteleniyor. Son görüntü hangi noktadır?</p>',
        c: ['(1, −1)', '(−1, 5)', '(−1, −1)', '(−4, 2)'], a: 'C',
        hint: 'Önce y eksenine göre yansıt (x’in işareti değişir), sonra ara görüntüyü ötele.',
        hintV: 'Önce y eksenine göre yansıt, iksin işareti değişir. Sonra ara görüntüyü ötele.',
        why: 'Yansıma: (1, 2) → (−1, 2). Öteleme: 3 aşağı → (−1, −1).',
        whyV: 'Yansıma: bir virgül iki, eksi bir virgül iki olur. Üç aşağı öteleyince: eksi bir virgül eksi bir.' },
      steps: [{ s: 'Son soru! Ara görüntüyü yazmayı unutma.' }] }
  ]
};
