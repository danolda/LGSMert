/* Adım Adım Anlatım · Matematik · Doğrusal Denklemler (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['mat-denklem'] = {
  title: 'Doğrusal Denklemler',
  desc: 'Denklem çözme ve kurma, koordinat sistemi, doğrusal ilişkiler, doğru grafikleri, gerçek hayat grafikleri ve eğim; LGS’nin denklem kurma ve rampa sorularıyla, sahne sahne.',
  ozet: [
    'Terazi gibi düşün: iki tarafa aynı işlem yapılırsa eşitlik bozulmaz. Kesirleri paydaların EKOK’uyla, ondalıkları 10, 100 ile çarparak temizle.',
    'Kesrin önündeki eksi payın tamamını etkiler: −{{x + 2|4}} · 12 = −3x − 6.',
    'Problemde x’i bulup durma; istenen büyüklüğü ayrıca hesapla.',
    'Bölgeler saat yönünün tersine I, II, III, IV. x eksenine uzaklık |ordinat|, y eksenine uzaklık |apsis|. x ekseni üzerindeki noktada y = 0.',
    'Doğrusal ilişki y = mx + n: m birim başına değişim, n başlangıç (x = 0) değeri.',
    'Eksenleri kestiği noktalar: x = 0 koy → y eksenini, y = 0 koy → x eksenini keser. y = b yatay, x = a dikeydir.',
    'Grafikte y eksenini kestiği yer başlangıç, x eksenini kestiği yer “bitti” anı, iki doğrunun kesişimi “eşit oldukları” an.',
    'Eğim = {{dikey|yatay}}; yükselen +, alçalan −, yatay 0, dikey tanımsız. Eğik uzunluğa bölme! 3-4-5 ve 5-12-13 üçgenlerini hatırla.'
  ],
  scenes: [
    { t: 'Denklem bir terazidir',
      base: '<svg class="an-svg" viewBox="0 0 330 170" role="img" aria-label="Dengedeki terazi: sol kefede 3x artı 2, sağ kefede x artı 8"><path class="ln" d="M165 60 L140 150 H190 Z" style="stroke-width:2;fill:var(--card2)"/><path class="st" d="M45 60 H285"/><circle cx="165" cy="60" r="5" style="fill:var(--c)"/><path class="ln" d="M85 60 L35 98 M85 60 L135 98" style="stroke-width:1.5"/><path class="box" d="M29 98 H141 Q135 120 85 120 Q35 120 29 98 Z" style="stroke-width:1.5"/><path class="ln" d="M245 60 L195 98 M245 60 L295 98" style="stroke-width:1.5"/><path class="box" d="M189 98 H301 Q295 120 245 120 Q195 120 189 98 Z" style="stroke-width:1.5"/><text x="85" y="90" font-size="19" text-anchor="middle" font-weight="700" class="rv k0">3x + 2</text><text x="245" y="90" font-size="19" text-anchor="middle" font-weight="700" class="rv k0">x + 8</text><text x="85" y="90" font-size="19" text-anchor="middle" font-weight="700" class="rv k1">2x + 2</text><text x="245" y="90" font-size="19" text-anchor="middle" font-weight="700" class="rv k1">8</text><text x="85" y="90" font-size="19" text-anchor="middle" font-weight="700" class="rv k2">2x</text><text x="245" y="90" font-size="19" text-anchor="middle" font-weight="700" class="rv k2">6</text><text x="85" y="90" font-size="19" text-anchor="middle" font-weight="700" class="rv k3">x</text><text x="245" y="90" font-size="19" text-anchor="middle" font-weight="700" class="rv k3">3</text><text x="165" y="166" font-size="13" text-anchor="middle" class="acc rv k4">her iki kefeye aynı işlem → denge bozulmaz</text></svg>',
      steps: [
        { s: 'Merhaba! Denklem, iki tarafı dengede olan bir terazi gibidir. Sol kefede 3x + 2, sağ kefede x + 8 var.', v: 'Merhaba! Denklem, iki tarafı dengede olan bir terazi gibidir. Sol kefede üç iks artı iki, sağ kefede iks artı sekiz var.', on: '.k0' },
        { s: 'İki kefeden de birer x alalım. Denge bozulmaz: 2x + 2 = 8.', v: 'İki kefeden de birer iks alalım. Denge bozulmaz: iki iks artı iki, eşittir sekiz.', hide: '.k0', on: '.k1' },
        { s: 'Şimdi iki taraftan da 2 çıkaralım: 2x = 6.', v: 'Şimdi iki taraftan da iki çıkaralım: iki iks eşittir altı.', hide: '.k1', on: '.k2' },
        { s: 'İki tarafı da 2’ye bölersek x = 3. İşte denklemin çözümü!', v: 'İki tarafı da ikiye bölersek, iks eşittir üç. İşte denklemin çözümü!', hide: '.k2', on: '.k3,.k4' },
        { s: 'Karşıya “ters işaretle geçmek” dediğimiz şey de aslında iki tarafa aynı işlemi yapmaktır.', h: '<div class="an-rule">x − 7 = 12 → <b>x = 19</b> &nbsp;·&nbsp; {{x|4}} = −3 → <b>x = −12</b> &nbsp;·&nbsp; 5x = −35 → <b>x = −7</b></div>', v: 'Karşıya ters işaretle geçmek dediğimiz şey de, aslında iki tarafa aynı işlemi yapmaktır.' }
      ] },

    { t: 'Kesirli denklemler',
      steps: [
        { s: 'Kesirli denklemde ilk iş paydalardan kurtulmak. Her terimi paydaların EKOK’uyla çarpıyoruz.', v: 'Kesirli denklemde ilk iş paydalardan kurtulmak. Her terimi paydaların ekokuyla çarpıyoruz.',
          h: '<div class="an-ex"><span class="an-l">{{x − 1|3}} − {{x + 2|4}} = {{1|2}} &nbsp; <small>(× 12)</small></span><span class="an-l rv d1">4(x − 1) − 3(x + 2) = 6</span><span class="an-l rv d2">4x − 4 − 3x − 6 = 6</span><span class="an-l rv d3">x − 10 = 6 → <b>x = 16</b></span></div>' },
        { s: 'Paydalar 3, 4 ve 2. EKOK 12. Sağdaki yarımı da 12’yle çarpmayı unutma: 6 olur.', v: 'Paydalar üç, dört ve iki. Ekok on iki. Sağdaki yarımı da on ikiyle çarpmayı unutma: altı olur.', on: '.d1' },
        { s: 'Parantezleri aç. Burada çok dikkat et: eksi, parantezin tamamına dağılır. −3 çarpı +2, −6.', v: 'Parantezleri aç. Burada çok dikkat et: eksi, parantezin tamamına dağılır. Eksi üç çarpı artı iki, eksi altı.', on: '.d2', mk: '.d2' },
        { s: 'Toplayınca x − 10 = 6, yani x = 16. Yerine koyup kontrol edebilirsin: 5 − 4,5 = 0,5. Tamam!', v: 'Toplayınca, iks eksi on eşittir altı; yani iks on altı. Yerine koyup kontrol edebilirsin: beş eksi dört buçuk, sıfır virgül beş. Tamam!', on: '.d3' },
        { s: 'Ondalık varsa 10 ya da 100 ile çarp: 0,4x − 1,2 = 0,1x + 0,3 → 4x − 12 = x + 3 → x = 5.', v: 'Ondalık varsa on ya da yüz ile çarp. Sıfır virgül dört iks eksi bir virgül iki, eşittir sıfır virgül bir iks artı sıfır virgül üç. On ile çarpınca: dört iks eksi on iki, eşittir iks artı üç. Buradan iks beş.',
          h: '<div class="an-trap">Paydası olmayan terimi de çarp! −{{x + 2|4}} · 12 = <span class="an-ok-t">−3x − 6</span> &nbsp; <span class="an-bad-t">−3x + 6</span></div>' }
      ] },

    { t: 'Boşluk doldur: kesirli denklem',
      steps: [{ s: 'Paydalardan kurtul, parantezi dikkatle aç ve denklemi çöz. Boşluklara doğru kartları yerleştir.' }],
      ia: { tip: 'bosluk', q: '<p>{{x|2}} − {{x − 1|3}} = 2 denklemini çöz.</p>', metin: 'Her terimi 6 ile çarp: [_]x − [_](x − 1) = 12<br>x = [_]', secenek: ['3', '2', '10', '6', '14', '4'], cevap: ['3', '2', '10'], hint: 'Paydaların EKOK’u 6. Her terimi, sağdaki 2’yi de, 6 ile çarp. Eksi, parantezin içindeki iki terime de dağılır.', hintV: 'Paydaların ekoku 6. Her terimi, sağdaki 2’yi de, 6 ile çarp. Eksi, parantezin içindeki iki terime de dağılır.', why: '3x − 2(x − 1) = 12 → 3x − 2x + 2 = 12 → x = 10. Kontrol: 5 − 3 = 2. Eksiyi yalnız x’e dağıtıp −2 yazarsan 14 bulursun; tuzak bu.', whyV: 'Üç iks eksi iki çarpı iks eksi bir, on iki eder. Parantez açılınca üç iks eksi iki iks artı iki, on iki; yani iks eşittir on. Kontrol: beş eksi üç, iki. Eksiyi yalnız ikse dağıtırsan on dört bulursun; tuzak bu.' } },

    { t: 'Problemi denkleme çevirmek',
      base: '<table class="an-tbl"><tr><th>Sözel</th><th>Cebirsel</th></tr>' +
        '<tr><td>bir sayının 3 katının 5 fazlası</td><td>3x + 5</td></tr>' +
        '<tr><td>bir sayının 5 fazlasının 3 katı</td><td>3(x + 5)</td></tr>' +
        '<tr><td>%20 indirimli fiyat</td><td>x − 0,2x = 0,8x</td></tr>' +
        '<tr><td>ardışık üç çift sayı</td><td>x, x + 2, x + 4</td></tr>' +
        '<tr><td>a yıl sonra iki kişinin yaşları</td><td>x + a ve y + a</td></tr></table>',
      steps: [
        { s: 'LGS’de bu konudan en çok denklem kurma soruluyor. Alışveriş, uzunluk, yaş… Hepsinde yöntem aynı.', v: 'Le ge se’de bu konudan en çok denklem kurma soruluyor. Alışveriş, uzunluk, yaş. Hepsinde yöntem aynı.' },
        { s: 'Bir bilinmeyeni x seç. Diğer bütün büyüklükleri x cinsinden yaz. Sonra metnin söylediği eşitliği kur.', v: 'Bir bilinmeyeni iks seç. Diğer bütün büyüklükleri iks cinsinden yaz. Sonra metnin söylediği eşitliği kur.' },
        { s: 'Yaş sorularında herkesin yaşı aynı miktarda artar. İndirimde de yüzde 20 indirim, fiyatın 0,8 katı demek.', v: 'Yaş sorularında herkesin yaşı aynı miktarda artar. İndirimde de, yüzde yirmi indirim, fiyatın sıfır virgül sekiz katı demek.' }
      ] },

    { t: 'Eşleştir: problemden ifadeye',
      steps: [{ s: 'Fiyat ya da yaş x olsun. Her durumu x cinsinden ifadesiyle eşleştir.', v: 'Fiyat ya da yaş iks olsun. Her durumu iks cinsinden ifadesiyle eşleştir.' }],
      ia: { tip: 'eslestir', q: '<p>Fiyat ya da yaş <b>x</b> olsun. Her durumu ifadesiyle eşleştir.</p>', solBaslik: 'Durum', sagBaslik: 'İfade', sol: ['%20 indirimli fiyat', '%25 zamlı fiyat', '5 yıl önceki yaş', 'yarısının 3 fazlası', 'önce %20, sonra %10 indirim'], sag: ['0,8x', '1,25x', 'x − 5', '{{x|2}} + 3', '0,72x'], hint: '%20 indirimde fiyatın %80’i kalır. Art arda iki indirimde indirimler toplanmaz, katsayılar çarpılır.', hintV: 'Yüzde yirmi indirimde fiyatın yüzde sekseni kalır. Art arda iki indirimde indirimler toplanmaz, katsayılar çarpılır.', why: '%20 indirim 0,8x, %25 zam 1,25x. Art arda indirimde 0,8 · 0,9 = 0,72: toplam indirim %30 değil, %28. 5 yıl önce herkes 5 yaş küçüktür.', whyV: 'Yüzde yirmi indirim, sıfır virgül sekiz iks; yüzde yirmi beş zam, bir virgül yirmi beş iks. Art arda indirimde sıfır virgül sekiz çarpı sıfır virgül dokuz, sıfır virgül yetmiş iki eder: toplam indirim yüzde otuz değil, yüzde yirmi sekiz. Beş yıl önce de herkes beş yaş küçüktür.' } },

    { t: 'Çözümlü örnek: kiraz ve çilek',
      steps: [
        { s: '1 kg kiraz, 1 kg çilekten 30 TL pahalı. 2 kg kiraz ve 1,5 kg çilek için 410 TL ödendi. 1 kg kiraz kaç TL?', v: 'Bir kilo kiraz, bir kilo çilekten otuz lira pahalı. İki kilo kiraz ve bir buçuk kilo çilek için dört yüz on lira ödendi. Bir kilo kiraz kaç lira?',
          h: '<div class="an-ex"><span class="an-l rv c1">çilek x, kiraz x + 30</span><span class="an-l rv c2">2(x + 30) + 1,5x = 410</span><span class="an-l rv c3">3,5x + 60 = 410 → 3,5x = 350 → x = 100</span><span class="an-l rv c4">kiraz = 100 + 30 = <b>130 TL</b></span></div>' },
        { s: 'Ucuz olanı x seçmek işi kolaylaştırır: çilek x, kiraz x + 30.', v: 'Ucuz olanı iks seçmek işi kolaylaştırır: çilek iks, kiraz iks artı otuz.', on: '.c1' },
        { s: 'Ödenen para: 2 kere kiraz, 1,5 kere çilek. Toplamı 410’a eşitle.', v: 'Ödenen para: iki kere kiraz, bir buçuk kere çilek. Toplamı dört yüz ona eşitle.', on: '.c2' },
        { s: '3,5x = 350, yani x = 100. Ama dur! Bu çileğin fiyatı.', v: 'Üç buçuk iks eşittir üç yüz elli, yani iks yüz. Ama dur! Bu çileğin fiyatı.', on: '.c3' },
        { s: 'Soru kirazı soruyor: 100 + 30 = 130 TL. x’i bulup durmak, şıklarda hazır bekleyen tuzaktır.', v: 'Soru kirazı soruyor: yüz artı otuz, yüz otuz lira. İksi bulup durmak, şıklarda hazır bekleyen tuzaktır.', on: '.c4',
          h: '<div class="an-trap">Bulduğun x her zaman cevap değildir. Sorunun istediğini yeniden oku.</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Bir kırtasiyede bir defter, bir kalemden 12 TL pahalıdır. 3 defter ve 2 kalem için toplam 186 TL ödenmiştir. Buna göre <b>bir defter</b> kaç TL’dir?</p>',
        c: ['30', '36', '42', '48'], a: 'C',
        hint: 'Kalem x olsun; defter x + 12. Denklemi kur, x’i bul, sonra defterin fiyatını hesapla.',
        hintV: 'Kalem iks olsun; defter iks artı on iki. Denklemi kur, iksi bul, sonra defterin fiyatını hesapla.',
        why: '3(x + 12) + 2x = 186 → 5x + 36 = 186 → x = 30 (kalem). Defter 30 + 12 = 42 TL.',
        whyV: 'Üç çarpı, iks artı on iki, artı iki iks, eşittir yüz seksen altı. Beş iks artı otuz altı, yüz seksen altı; iks otuz. Bu kalemin fiyatı. Defter, otuz artı on iki, kırk iki lira.' },
      steps: [{ s: 'Hadi bakalım! Kur, çöz ve istenene dikkat et.' }] },

    { t: 'Koordinat sistemi',
      base: '<svg class="an-svg" viewBox="0 0 330 180" role="img" aria-label="Koordinat düzlemi: dört bölge ve A(3,2), B(−4,1), C(−2,−3), D(4,−2), E(0,3), F(−3,0) noktaları"><path class="ln" d="M90 13V163M105 13V163M120 13V163M135 13V163M150 13V163M165 13V163M180 13V163M195 13V163M210 13V163M225 13V163M240 13V163M90 13H240M90 28H240M90 43H240M90 58H240M90 73H240M90 88H240M90 103H240M90 118H240M90 133H240M90 148H240M90 163H240" style="stroke-width:.5;opacity:.5"/><path class="ln" d="M84 88H248 M165 169V5" style="stroke-width:1.8"/><text x="246" y="84" font-size="12" class="mut">x</text><text x="170" y="9" font-size="12" class="mut">y</text><text x="105" y="99" font-size="9.5" text-anchor="middle" class="mut">-4</text><text x="162" y="151" font-size="9.5" text-anchor="end" class="mut">-4</text><text x="135" y="99" font-size="9.5" text-anchor="middle" class="mut">-2</text><text x="162" y="121" font-size="9.5" text-anchor="end" class="mut">-2</text><text x="195" y="99" font-size="9.5" text-anchor="middle" class="mut">2</text><text x="162" y="61" font-size="9.5" text-anchor="end" class="mut">2</text><text x="225" y="99" font-size="9.5" text-anchor="middle" class="mut">4</text><text x="162" y="31" font-size="9.5" text-anchor="end" class="mut">4</text><text x="162" y="99" font-size="10" text-anchor="end" class="mut">O</text><text x="231" y="28.5" font-size="15" text-anchor="middle" font-weight="700" class="acc rv r1">I</text><text x="99" y="28.5" font-size="15" text-anchor="middle" font-weight="700" class="acc rv r1">II</text><text x="99" y="160.5" font-size="15" text-anchor="middle" font-weight="700" class="acc rv r1">III</text><text x="231" y="160.5" font-size="15" text-anchor="middle" font-weight="700" class="acc rv r1">IV</text><circle cx="210" cy="58" r="4.5" class="rv r2" style="fill:var(--bad)"/><text x="216" y="52" font-size="12.5" font-weight="700" text-anchor="start" class="rv r2">A(3, 2)</text><circle cx="105" cy="73" r="4.5" class="rv r3" style="fill:var(--bad)"/><text x="99" y="67" font-size="12.5" font-weight="700" text-anchor="end" class="rv r3">B(-4, 1)</text><circle cx="135" cy="133" r="4.5" class="rv r3" style="fill:var(--bad)"/><text x="129" y="127" font-size="12.5" font-weight="700" text-anchor="end" class="rv r3">C(-2, -3)</text><circle cx="225" cy="118" r="4.5" class="rv r3" style="fill:var(--bad)"/><text x="231" y="112" font-size="12.5" font-weight="700" text-anchor="start" class="rv r3">D(4, -2)</text><circle cx="165" cy="43" r="4.5" class="rv r4" style="fill:var(--ok)"/><text x="171" y="37" font-size="12.5" font-weight="700" text-anchor="start" class="rv r4">E(0, 3)</text><circle cx="120" cy="88" r="4.5" class="rv r4" style="fill:var(--ok)"/><text x="114" y="82" font-size="12.5" font-weight="700" text-anchor="end" class="rv r4">F(-3, 0)</text><path class="st2 dr r5" d="M210 88V58H165" style="stroke-dasharray:4 3"/></svg>',
      steps: [
        { s: 'Şimdi denklemleri resmetmeye hazırlanalım. Dik kesişen iki sayı doğrusu koordinat sistemini oluşturur.' },
        { s: 'Eksenler düzlemi dört bölgeye ayırır. Sağ üstten başlayıp saat yönünün tersine: I, II, III, IV.', v: 'Eksenler düzlemi dört bölgeye ayırır. Sağ üstten başlayıp saat yönünün tersine: birinci, ikinci, üçüncü, dördüncü bölge.', on: '.r1' },
        { s: 'A(3, 2) noktasında önce x: 3 birim sağa. Sonra y: 2 birim yukarı. Sıra önemli!', v: 'A noktası üç virgül iki. Önce iks: üç birim sağa. Sonra y: iki birim yukarı. Sıra önemli!', on: '.r2,.r5' },
        { s: 'II. bölgede x eksi y artı, III’te ikisi de eksi, IV’te x artı y eksi.', v: 'İkinci bölgede iks eksi, y artı. Üçüncüde ikisi de eksi. Dördüncüde iks artı, y eksi.', on: '.r3' },
        { s: 'E ile F hiçbir bölgede değil, eksenlerin üzerinde. x ekseni üzerindeki noktanın y’si 0’dır.', v: 'E ile F hiçbir bölgede değil, eksenlerin üzerinde. İks ekseni üzerindeki noktanın y’si sıfırdır.', on: '.r4' }
      ] },

    { t: 'Dokun: doğru nokta',
      steps: [{ s: 'Sıralı ikilide önce x, sonra y okunur. Eksi işaretlerine de dikkat ederek doğru noktayı bul.', v: 'Sıralı ikilide önce iks, sonra ye okunur. Eksi işaretlerine de dikkat ederek doğru noktayı bul.' }],
      ia: { tip: 'gorselsec', q: '<p><b>(−3, 2)</b> noktasına dokun.</p>', svg: '<svg class="an-svg" viewBox="0 0 340 220" role="img" aria-label="Koordinat düzleminde A, B, C, D, E noktaları"><path class="ln" d="M20 16 V204" style="stroke-width:.6;opacity:.5"/><path class="ln" d="M50 16 V204" style="stroke-width:.6;opacity:.5"/><path class="ln" d="M80 16 V204" style="stroke-width:.6;opacity:.5"/><path class="ln" d="M110 16 V204" style="stroke-width:.6;opacity:.5"/><path class="ln" d="M140 16 V204" style="stroke-width:.6;opacity:.5"/><path class="ln" d="M170 16 V204" style="stroke-width:.6;opacity:.5"/><path class="ln" d="M200 16 V204" style="stroke-width:.6;opacity:.5"/><path class="ln" d="M230 16 V204" style="stroke-width:.6;opacity:.5"/><path class="ln" d="M260 16 V204" style="stroke-width:.6;opacity:.5"/><path class="ln" d="M290 16 V204" style="stroke-width:.6;opacity:.5"/><path class="ln" d="M320 16 V204" style="stroke-width:.6;opacity:.5"/><path class="ln" d="M14 20 H326" style="stroke-width:.6;opacity:.5"/><path class="ln" d="M14 50 H326" style="stroke-width:.6;opacity:.5"/><path class="ln" d="M14 80 H326" style="stroke-width:.6;opacity:.5"/><path class="ln" d="M14 110 H326" style="stroke-width:.6;opacity:.5"/><path class="ln" d="M14 140 H326" style="stroke-width:.6;opacity:.5"/><path class="ln" d="M14 170 H326" style="stroke-width:.6;opacity:.5"/><path class="ln" d="M14 200 H326" style="stroke-width:.6;opacity:.5"/><path class="ln" d="M10 110 H330 M170 212 V6" style="stroke-width:1.6"/><text x="326" y="104" font-size="14" text-anchor="end" class="mut">x</text><text x="176" y="18" font-size="14" class="mut">y</text><text x="50" y="125" font-size="12" text-anchor="middle" class="mut">-4</text><text x="110" y="125" font-size="12" text-anchor="middle" class="mut">-2</text><text x="230" y="125" font-size="12" text-anchor="middle" class="mut">2</text><text x="290" y="125" font-size="12" text-anchor="middle" class="mut">4</text><text x="165" y="174" font-size="12" text-anchor="end" class="mut">-2</text><text x="165" y="54" font-size="12" text-anchor="end" class="mut">2</text><text x="158" y="125" font-size="12" class="mut">0</text><g data-b="a" aria-label="A noktası"><circle cx="230" cy="200" r="16" class="box"/><text x="230" y="205" text-anchor="middle" font-size="15" font-weight="700">A</text></g><g data-b="b" aria-label="B noktası"><circle cx="80" cy="50" r="16" class="box"/><text x="80" y="55" text-anchor="middle" font-size="15" font-weight="700">B</text></g><g data-b="c" aria-label="C noktası"><circle cx="260" cy="50" r="16" class="box"/><text x="260" y="55" text-anchor="middle" font-size="15" font-weight="700">C</text></g><g data-b="d" aria-label="D noktası"><circle cx="110" cy="20" r="16" class="box"/><text x="110" y="25" text-anchor="middle" font-size="15" font-weight="700">D</text></g><g data-b="e" aria-label="E noktası"><circle cx="80" cy="170" r="16" class="box"/><text x="80" y="175" text-anchor="middle" font-size="15" font-weight="700">E</text></g></svg>', dogru: ['b'], hint: 'Önce x: başlangıç noktasından 3 birim sola git. Sonra y: 2 birim yukarı çık.', hintV: 'Önce iks: başlangıç noktasından 3 birim sola git. Sonra ye: 2 birim yukarı çık.', why: '(−3, 2): 3 birim sola, 2 birim yukarı, yani II. bölgedeki B. A(2, −3)’te sayıların yeri değişmiş, D(−2, 3) de öyle; C(3, 2)’de eksi unutulmuş.', whyV: 'Eksi üç, iki noktası için 3 birim sola, 2 birim yukarı gideriz: ikinci bölgedeki B noktası. A ile D’de sayıların yeri değişmiş; C’de ise eksi unutulmuş.' } },

    { t: 'Eksenlere uzaklık',
      steps: [
        { s: 'B(−4, 1) noktası x eksenine kaç birim uzak? Burada çok dikkat et: x eksenine uzaklık y’ye bakılarak bulunur. 1 birim.', v: 'B noktası, eksi dört virgül bir. İks eksenine kaç birim uzak? Burada çok dikkat et: iks eksenine uzaklık, y’ye bakılarak bulunur. Bir birim.',
          h: '<div class="an-trap">x eksenine uzaklık = |y| &nbsp;·&nbsp; y eksenine uzaklık = |x|<br>B(−4, 1): x eksenine 1, y eksenine 4 birim</div>' },
        { s: 'Aynı yatay doğrudaki noktaların y’leri eşittir. (−2, 1) ile (4, 1) arası 4 − (−2) = 6 birim.', v: 'Aynı yatay doğrudaki noktaların y’leri eşittir. Eksi iki virgül bir ile, dört virgül bir arası, dört eksi eksi iki, altı birim.' },
        { s: 'K(2m − 6, m + 1) x ekseni üzerindeyse y’si 0: m + 1 = 0, m = −1, K(−8, 0).', v: 'K noktası, iki m eksi altı virgül m artı bir, iks ekseni üzerindeyse y’si sıfır: m artı bir sıfır, m eksi bir. K noktası eksi sekiz virgül sıfır.',
          h: '<div class="an-tip">Sağa-sola kaydırma yalnız x’i, yukarı-aşağı kaydırma yalnız y’yi değiştirir.</div>' }
      ] },

    { t: 'Doğru mu, yanlış mı?',
      steps: [{ s: 'Eksenlere uzaklık ve bölgeler en çok karıştırılan konulardır. Her ifade için Doğru ya da Yanlış’a dokun.' }],
      ia: { tip: 'dogruyanlis', q: '<p>Her ifade için karar ver.</p>', ifadeler: [
            { m: 'A(−4, 3) noktasının x eksenine uzaklığı 4 birimdir.', d: false, a: 'x eksenine uzaklık y’ye bakılarak bulunur: 3 birim.' },
            { m: '(0, −5) noktası y ekseni üzerindedir.', d: true, a: 'x’i 0 olan her nokta y ekseni üzerindedir.' },
            { m: '(2, −1) noktası IV. bölgededir.', d: true, a: 'x artı, y eksi: IV. bölge.' },
            { m: '(−2, 5) ile (−2, −1) noktaları arası 4 birimdir.', d: false, a: 'Aynı dikey doğru üzerinde: 5 − (−1) = 6 birim.' }], hint: 'x eksenine uzaklık için y’ye, y eksenine uzaklık için x’e bak. Aynı x’e sahip noktalar dikey bir doğru üzerindedir.', hintV: 'İks eksenine uzaklık için yeye, ye eksenine uzaklık için ikse bak. Aynı ikse sahip noktalar dikey bir doğru üzerindedir.', why: 'Bir noktanın x eksenine uzaklığı y’nin, y eksenine uzaklığı x’in mutlak değeridir. Eksi ile artı arasındaki fark bulunurken eksi çıkarılır: 5 − (−1) = 6.', whyV: 'Bir noktanın iks eksenine uzaklığı yenin, ye eksenine uzaklığı iksin mutlak değeridir. Eksiyle artı arasındaki farkta eksi çıkarılır: beş eksi eksi bir, altı eder.' } },

    { t: 'Doğrusal ilişki',
      base: '<table class="an-tbl" style="text-align:center"><tr><th>x (km)</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr>' +
        '<tr><th>y (TL)</th><td>50</td><td>75</td><td>100</td><td>125</td><td>150</td></tr>' +
        '<tr class="rv y1"><th></th><td></td><td class="an-ek">+25</td><td class="an-ek">+25</td><td class="an-ek">+25</td><td class="an-ek">+25</td></tr></table>',
      steps: [
        { s: 'Bir taksi tablosu. Gidilen yol bağımsız değişken, ücret ise yola bağlı olan bağımlı değişken.' },
        { s: 'Her kilometrede ücret hep 25 TL artıyor. Eşit artış, ilişkinin doğrusal olduğunu gösterir.', v: 'Her kilometrede ücret hep yirmi beş lira artıyor. Eşit artış, ilişkinin doğrusal olduğunu gösterir.', on: '.y1' },
        { s: 'x = 0 iken ücret 50 TL: bu açılış ücreti. Denklem: y = 25x + 50.', v: 'İks sıfırken ücret elli lira: bu açılış ücreti. Denklem: y eşittir yirmi beş iks artı elli.',
          h: '<div class="an-rule"><b>y = mx + n</b> &nbsp; m: birim başına değişim, n: başlangıç değeri<br>taksi: <b>y = 25x + 50</b></div>' },
        { s: 'Tablo 0’dan başlamazsa m’yi farklardan bul, n’yi bir ikiliyi yerine koyarak bul.', v: 'Tablo sıfırdan başlamazsa, m’yi farklardan bul; n’yi de bir ikiliyi yerine koyarak bul.',
          h: '<div class="an-ex"><span class="an-l">x: 2, 5, 8 → y: 11, 20, 29</span><span class="an-l">m = 9 ÷ 3 = 3 &nbsp;·&nbsp; 11 = 3 · 2 + n → n = 5 → <b>y = 3x + 5</b></span></div>' },
        { s: 'Azalan ilişkilerde m eksi olur: 60 litrelik depoda km başına 0,08 L harcanıyorsa y = 60 − 0,08x.', v: 'Azalan ilişkilerde m eksi olur: altmış litrelik depoda kilometre başına sıfır virgül sıfır sekiz litre harcanıyorsa, y eşittir altmış eksi sıfır virgül sıfır sekiz iks.' }
      ] },

    { t: 'Doğruların grafiği',
      base: '<svg class="an-svg" viewBox="0 0 330 182" role="img" aria-label="Aynı düzlemde y = 2x, y = −x + 4, y = −2 ve x = 3 doğruları"><path class="ln" d="M90 15V165M105 15V165M120 15V165M135 15V165M150 15V165M165 15V165M180 15V165M195 15V165M210 15V165M225 15V165M240 15V165M90 15H240M90 30H240M90 45H240M90 60H240M90 75H240M90 90H240M90 105H240M90 120H240M90 135H240M90 150H240M90 165H240" style="stroke-width:.5;opacity:.5"/><path class="ln" d="M84 90H248 M165 171V7" style="stroke-width:1.8"/><text x="246" y="86" font-size="12" class="mut">x</text><text x="170" y="11" font-size="12" class="mut">y</text><text x="105" y="101" font-size="9.5" text-anchor="middle" class="mut">-4</text><text x="162" y="153" font-size="9.5" text-anchor="end" class="mut">-4</text><text x="135" y="101" font-size="9.5" text-anchor="middle" class="mut">-2</text><text x="162" y="123" font-size="9.5" text-anchor="end" class="mut">-2</text><text x="195" y="101" font-size="9.5" text-anchor="middle" class="mut">2</text><text x="162" y="63" font-size="9.5" text-anchor="end" class="mut">2</text><text x="225" y="101" font-size="9.5" text-anchor="middle" class="mut">4</text><text x="162" y="33" font-size="9.5" text-anchor="end" class="mut">4</text><text x="162" y="101" font-size="10" text-anchor="end" class="mut">O</text><path class="st dr g1" d="M127.5 165 L202.5 15"/><text x="145.5" y="159" font-size="12" font-weight="700" class="acc rv g1">y = 2x</text><path class="st2 dr g2" d="M150 15 L240 105"/><text x="91.5" y="24" font-size="12" font-weight="700" class="rv g2" style="fill:var(--noteline)">y = −x + 4</text><path class="dr g3" d="M90 120 H240" style="stroke:var(--ok);stroke-width:2.5"/><text x="91.5" y="134" font-size="12" font-weight="700" class="rv g3" style="fill:var(--ok)">y = −2</text><path class="dr g4" d="M210 15 V165" style="stroke:var(--bad);stroke-width:2.5"/><text x="214" y="153" font-size="12" font-weight="700" class="rv g4" style="fill:var(--bad)">x = 3</text></svg>',
      steps: [
        { s: 'Bir doğruyu çizmek için iki nokta yeter. En kullanışlıları eksenleri kestiği noktalar.' },
        { s: 'y = 2x’in sabit terimi yok. Böyle doğrular orijinden geçer.', v: 'Y eşittir iki iksin sabit terimi yok. Böyle doğrular orijinden geçer.', on: '.g1', w: 500 },
        { s: 'y = −x + 4, y eksenini 4’te keser. x = 0 koyunca y’yi, y = 0 koyunca x’i buluruz: (0, 4) ve (4, 0).', v: 'Y eşittir eksi iks artı dört, y eksenini dörtte keser. İks sıfır koyunca y’yi, y sıfır koyunca iksi buluruz: sıfır virgül dört, ve dört virgül sıfır.', on: '.g2', w: 500 },
        { s: 'y = −2 yatay bir doğru: üzerindeki bütün noktaların y’si −2.', v: 'Y eşittir eksi iki, yatay bir doğru: üzerindeki bütün noktaların y’si eksi iki.', on: '.g3', w: 500 },
        { s: 'x = 3 ise dikey bir doğru. Bunu karıştırma: x = sayı dikey, y = sayı yatay!', v: 'İks eşittir üç ise, dikey bir doğru. Bunu karıştırma: iks eşittir sayı dikey, y eşittir sayı yatay!', on: '.g4',
          h: '<div class="an-tip">ax + by = c doğrusu eksenlerle dik üçgen yapar: 3x + 4y = 24 → (8, 0), (0, 6), alan {{8 · 6|2}} = 24</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p><b>y = 3x − 6</b> doğrusunun x eksenini ve y eksenini kestiği noktalar sırasıyla hangileridir?</p>',
        c: ['(−2, 0) ve (0, 6)', '(2, 0) ve (0, −6)', '(0, 2) ve (−6, 0)', '(6, 0) ve (0, −2)'], a: 'B',
        hint: 'x eksenini kestiği yerde y = 0, y eksenini kestiği yerde x = 0’dır.',
        hintV: 'İks eksenini kestiği yerde y sıfır, y eksenini kestiği yerde iks sıfırdır.',
        why: 'y = 0 → 3x = 6 → x = 2: (2, 0). x = 0 → y = −6: (0, −6).',
        whyV: 'Y sıfır koyunca üç iks altı, iks iki: iki virgül sıfır. İks sıfır koyunca y eksi altı: sıfır virgül eksi altı.' },
      steps: [{ s: 'Sıra sende. Hangi eksende hangisi sıfır, ona dikkat.' }] },

    { t: 'Gerçek hayat grafikleri',
      base: '<svg class="an-svg" viewBox="0 0 330 185" role="img" aria-label="İki bisiklet kiralama firmasının ücret grafikleri 4. saatte 120 liradan kesişiyor"><path class="ln" d="M40 126H300M40 102H300M40 78H300M40 54H300M40 30H300M80 150V30M120 150V30M160 150V30M200 150V30M240 150V30M280 150V30" style="stroke-width:.5;opacity:.5"/><path class="ln" d="M40 21V150H304" style="stroke-width:1.8"/><text x="36" y="153" font-size="10" text-anchor="end" class="mut">0</text><text x="36" y="129" font-size="10" text-anchor="end" class="mut">40</text><text x="36" y="105" font-size="10" text-anchor="end" class="mut">80</text><text x="36" y="81" font-size="10" text-anchor="end" class="mut">120</text><text x="36" y="57" font-size="10" text-anchor="end" class="mut">160</text><text x="36" y="33" font-size="10" text-anchor="end" class="mut">200</text><text x="40" y="163" font-size="10" text-anchor="middle" class="mut">0</text><text x="80" y="163" font-size="10" text-anchor="middle" class="mut">1</text><text x="120" y="163" font-size="10" text-anchor="middle" class="mut">2</text><text x="160" y="163" font-size="10" text-anchor="middle" class="mut">3</text><text x="200" y="163" font-size="10" text-anchor="middle" class="mut">4</text><text x="240" y="163" font-size="10" text-anchor="middle" class="mut">5</text><text x="280" y="163" font-size="10" text-anchor="middle" class="mut">6</text><text x="296" y="176" font-size="10.5" class="mut">saat</text><text x="6" y="12" font-size="10.5" class="mut">ücret (TL)</text><path class="st dr f1" d="M40 126 L300 48"/><text x="244" y="84" font-size="12" font-weight="700" class="acc rv f1">K: 40 + 20x</text><path class="st2 dr f2" d="M40 150 L300 33"/><text x="144" y="119.2" font-size="12" font-weight="700" class="rv f2" style="fill:var(--noteline)">L: 30x</text><circle cx="200" cy="78" r="7" class="st dr f3"/><path class="ln dr f3" d="M200 85V150" style="stroke-dasharray:3 3"/><text x="208" y="94" font-size="12" font-weight="700" class="rv f3">(4, 120)</text><circle cx="40" cy="126" r="5" class="rv f4" style="fill:var(--c)"/><text x="48" y="116" font-size="11.5" class="acc rv f4">40 TL</text></svg>',
      steps: [
        { s: 'İki bisiklet kiralama firması var. K’de 40 TL sabit ücret artı saati 20 TL. L’de sabit ücret yok, saati 30 TL.', v: 'İki bisiklet kiralama firması var. K’de kırk lira sabit ücret, artı saati yirmi lira. L’de sabit ücret yok, saati otuz lira.', on: '.f1,.f2', w: 600 },
        { s: 'y eksenini kestiği nokta başlangıç değeridir: K’nin 40 TL’lik sabit ücreti.', v: 'Y eksenini kestiği nokta, başlangıç değeridir: K’nin kırk liralık sabit ücreti.', on: '.f4' },
        { s: 'Doğrunun dikliği saatlik ücreti gösterir. L daha dik, çünkü saati daha pahalı.' },
        { s: 'İki doğru 4. saatte kesişiyor: ikisi de 120 TL. Kesişim, iki durumun eşit olduğu andır.', v: 'İki doğru dördüncü saatte kesişiyor: ikisi de yüz yirmi lira. Kesişim, iki durumun eşit olduğu andır.', on: '.f3' },
        { s: '4 saatten az kiralayana L, fazla kiralayana K daha ucuz. Kesişimden önce ve sonra hangi doğru üstte, ona bak.', v: 'Dört saatten az kiralayana L, fazla kiralayana K daha ucuz. Kesişimden önce ve sonra hangi doğru üstte, ona bak.' }
      ] },

    { t: 'Çözümlü örnek: boşalan depo',
      steps: [
        { s: 'Bir depo sabit hızla boşalıyor. Grafikte 2. saatte 840 L, 5. saatte 600 L su var. Başta kaç litre vardı, ne zaman biter?', v: 'Bir depo sabit hızla boşalıyor. Grafikte ikinci saatte sekiz yüz kırk, beşinci saatte altı yüz litre su var. Başta kaç litre vardı, ne zaman biter?',
          h: '<div class="an-ex"><span class="an-l rv s1">3 saatte 840 − 600 = 240 L → saatte 80 L</span><span class="an-l rv s2">başlangıç: 840 + 2 · 80 = 1000 L</span><span class="an-l rv s3">y = 1000 − 80x, y = 0 → x = <b>12,5 saat</b></span></div>' },
        { s: 'İki noktadan birim değişimi bul: 3 saatte 240 litre azalmış, saatte 80 litre.', v: 'İki noktadan birim değişimi bul: üç saatte iki yüz kırk litre azalmış; saatte seksen litre.', on: '.s1' },
        { s: 'Başlangıç, 2. saatten 2 saat önce: 840’a 160 ekle, 1000 litre.', v: 'Başlangıç, ikinci saatten iki saat önce: sekiz yüz kırka yüz altmış ekle; bin litre.', on: '.s2' },
        { s: 'Bitiş anı x eksenini kestiği yer: 1000 ÷ 80 = 12,5 saat.', v: 'Bitiş anı, iks eksenini kestiği yer: bin bölü seksen, on iki buçuk saat.', on: '.s3' },
        { s: 'Tuzak: 600 ÷ 80 = 7,5 saati cevap sanmak. O, 5. saatten sonra geçen süre.', v: 'Tuzak: altı yüz bölü seksen, yedi buçuk saati cevap sanmak. O, beşinci saatten sonra geçen süre.',
          h: '<div class="an-trap"><span class="an-bad-t">7,5 saat</span> → 5 + 7,5 = <span class="an-ok-t">12,5 saat</span></div>' }
      ] },

    { t: 'Kaydır: depo ne zaman biter?',
      steps: [{ s: 'Benzer bir depo sorusu. İki noktadan saatlik değişimi bul, başlangıcı hesapla ve bitiş anını göster.' }],
      ia: { tip: 'kaydir', q: '<p>Sabit hızla boşalan bir depoda 1. saatte 450 L, 4. saatte 270 L su var. Depo başladıktan kaç saat sonra tamamen boşalır?</p>', min: 0, max: 12, adim: 0.5, cevap: 8.5, birim: 'saat', etiket: [0, 2, 4, 6, 8, 10, 12], hint: '3 saatte kaç litre azalmış? Saatlik azalmayı bul, sonra başlangıçtaki suyu hesapla.', why: '3 saatte 180 L azalmış: saatte 60 L. Başta 450 + 60 = 510 L. 510 ÷ 60 = 8,5 saat. 270 ÷ 60 = 4,5 cevabı, 4. saatten sonra geçen süredir.', whyV: '3 saatte 180 litre azalmış, yani saatte 60 litre. Başta 450 artı 60, 510 litre vardı. 510 bölü 60, sekiz buçuk saat. Dört buçuk saat ise 4. saatten sonra geçen süredir.' } },

    { t: 'Eğim',
      steps: [
        { s: 'Eğim, bir doğrunun ne kadar dik olduğunun ölçüsü. Dikey değişimi yatay değişime böleriz.',
          h: '<div class="an-big">m = {{dikey|yatay}} = {{y₂ − y₁|x₂ − x₁}}</div>', v: 'Eğim, bir doğrunun ne kadar dik olduğunun ölçüsü. Dikey değişimi, yatay değişime böleriz.' },
        { s: 'A(−1, 2) ve B(3, 8): dikey 6, yatay 4. Eğim {{6|4}} = {{3|2}}.', v: 'A eksi bir virgül iki, B üç virgül sekiz. Dikey değişim altı, yatay değişim dört. Eğim dörtte altı, yani ikide üç.' },
        { s: 'Denklemde y yalnızsa x’in katsayısı eğimdir. 2x + 3y = 6 → y = −{{2|3}}x + 2, eğim −{{2|3}}.', v: 'Denklemde y yalnızsa, iksin katsayısı eğimdir. İki iks artı üç y eşittir altı; y yalnız kalınca, eğim eksi üçte iki.' },
        { s: 'Soldan sağa yükselen doğrunun eğimi artı, alçalanınki eksi. Yatay doğrunun eğimi 0, dikeyinki tanımsız.', v: 'Soldan sağa yükselen doğrunun eğimi artı, alçalanınki eksi. Yatay doğrunun eğimi sıfır, dikeyinki tanımsız.',
          h: '<div class="an-grid"><div><b>↗ +</b>yükselen</div><div><b>↘ −</b>alçalan</div><div><b>→ 0</b>yatay</div></div>' },
        { s: 'Eğimleri eşit doğrular paraleldir. Sayısal büyüklük arttıkça doğru dikleşir: −4, −1’den daha diktir.', v: 'Eğimleri eşit doğrular paraleldir. Sayısal büyüklük arttıkça doğru dikleşir: eksi dört, eksi birden daha diktir.' }
      ] },

    { t: 'Grupla: eğimin işareti',
      steps: [{ s: 'Her doğrunun eğimini düşün: artı mı, eksi mi, sıfır mı, yoksa tanımsız mı? Gerekirse önce y’yi yalnız bırak.', v: 'Her doğrunun eğimini düşün: artı mı, eksi mi, sıfır mı, yoksa tanımsız mı? Gerekirse önce yeyi yalnız bırak.' }],
      ia: { tip: 'grup', q: '<p>Her doğruyu eğimine göre yerleştir.</p>', gruplar: ['Pozitif', 'Negatif', 'Sıfır', 'Tanımsız'], ogeler: [
            { m: 'y = 3x − 1', g: 0 },
            { m: 'x − y = 3', g: 0 },
            { m: 'y = −{{1|2}}x + 4', g: 1 },
            { m: '2x + y = 6', g: 1 },
            { m: 'y = −2', g: 2 },
            { m: 'y − 4 = 0', g: 2 },
            { m: 'x = 5', g: 3 },
            { m: 'x + 1 = 0', g: 3 }], hint: 'y’yi yalnız bırak: x’in katsayısı eğimdir. Yalnız y = sayı ise yatay, yalnız x = sayı ise dikey doğrudur.', hintV: 'Yeyi yalnız bırak: iksin katsayısı eğimdir. Yalnız ye eşittir sayı ise yatay, yalnız iks eşittir sayı ise dikey doğrudur.', why: 'x − y = 3 → y = x − 3, eğim 1. 2x + y = 6 → y = −2x + 6, eğim −2. y = sayı yatay doğrudur, eğimi 0; x = sayı dikey doğrudur, eğimi tanımsız. x + 1 = 0 da x = −1 demektir.', whyV: 'İks eksi ye eşittir üç ise ye, iks eksi üç olur: eğim bir. İki iks artı ye eşittir altı ise ye, eksi iki iks artı altı: eğim eksi iki. Ye eşittir sayı yatay doğrudur, eğimi sıfır; iks eşittir sayı dikey doğrudur, eğimi tanımsız. İks artı bir eşittir sıfır da iks eşittir eksi bir demektir.' } },

    { t: 'Günlük hayatta eğim: rampa',
      base: '<svg class="an-svg" viewBox="0 0 330 150" role="img" aria-label="Rampa: dikey 5k, yatay 12k, eğik uzunluk 13k"><path class="boxa" d="M30 120 H300 V8 Z" style="stroke-width:2"/><path class="st dr e1" d="M300 120 V8" style="stroke-width:4"/><path class="st2 dr e2" d="M30 120 H300" style="stroke-width:4"/><path class="ln" d="M288 120 V108 H300" style="stroke-width:1.5"/><text x="292" y="72" font-size="14" text-anchor="end" font-weight="700" class="acc rv e1">dikey</text><text x="292" y="90" font-size="13" text-anchor="end" class="acc rv e1">5k</text><text x="165" y="140" font-size="14" text-anchor="middle" font-weight="700" class="rv e2" style="fill:var(--noteline)">yatay 12k</text><text x="150" y="52" font-size="14" text-anchor="middle" font-weight="700" class="rv e3" transform="rotate(-22.5 150 52)">eğik uzunluk 13k</text></svg>',
      steps: [
        { s: 'Rampa, merdiven, yol, çatı… Günlük hayatta eğim yine dikeyin yataya oranıdır.', v: 'Rampa, merdiven, yol, çatı. Günlük hayatta eğim, yine dikeyin yataya oranıdır.', on: '.e1,.e2' },
        { s: 'Uzunluğu 260 cm, eğimi {{5|12}} olan rampa kaç cm yükselir? Dikey 5k, yatay 12k ise eğik uzunluk 13k.', v: 'Uzunluğu iki yüz altmış santimetre, eğimi on ikide beş olan rampa kaç santimetre yükselir? Dikey beş k, yatay on iki k ise, eğik uzunluk on üç k.', on: '.e3' },
        { s: '13k = 260, k = 20. Yükseklik 5 · 20 = 100 cm.', v: 'On üç k, iki yüz altmış; k yirmi. Yükseklik beş çarpı yirmi, yüz santimetre.',
          h: '<div class="an-ex"><span class="an-l">13k = 260 → k = 20 → dikey <b>100 cm</b>, yatay 240 cm</span></div>' },
        { s: 'Yüzde eğim de olur: %8 eğim, yatayda 100 m giderken 8 m yükselmek demek.', v: 'Yüzde eğim de olur: yüzde sekiz eğim, yatayda yüz metre giderken sekiz metre yükselmek demek.' },
        { s: 'En sık hata: eğimi eğik uzunluğa bölmek. 5 m’lik rampa 3 m yükseliyorsa yatay 4 m, eğim {{3|4}}.', v: 'En sık hata: eğimi eğik uzunluğa bölmek. Beş metrelik rampa üç metre yükseliyorsa, yatay dört metre; eğim dörtte üç.',
          h: '<div class="an-trap">eğim = {{dikey|yatay}} → <span class="an-ok-t">{{3|4}}</span> &nbsp; <span class="an-bad-t">{{3|5}}</span> &nbsp; <span class="an-bad-t">{{4|3}}</span></div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Bir rampanın eğimi {{3|4}}’tür. Rampanın kendi uzunluğu (eğik uzunluk) 250 cm olduğuna göre rampa kaç cm <b>yükseklik</b>e çıkar?</p>',
        c: ['150', '187,5', '200', '250'], a: 'A',
        hint: 'Eğim {{3|4}} ise dikey 3k, yatay 4k, eğik uzunluk 5k’dır.',
        hintV: 'Eğim dörtte üç ise dikey üç k, yatay dört k, eğik uzunluk beş k’dır.',
        why: 'Eğik uzunluk 5k = 250 → k = 50. Yükseklik 3k = 150 cm (yatay 200 cm). 250 · {{3|4}} = 187,5 eğik uzunluğu yatay sanmaktır.',
        whyV: 'Eğik uzunluk beş k, iki yüz elli; k elli. Yükseklik üç k, yüz elli santimetre. Yüz seksen yedi buçuk ise eğik uzunluğu yatay sanmanın sonucu.' },
      steps: [{ s: 'Son soru! Eğik uzunluğu yatayla karıştırma.' }] }
  ]
};
