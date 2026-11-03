/* Adım Adım Anlatım · Matematik · Cebirsel İfadeler ve Özdeşlikler (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['mat-cebir'] = {
  title: 'Cebirsel İfadeler ve Özdeşlikler',
  desc: 'Terim ve katsayı, sözel ifadeleri cebire çevirme, çarpma ve alan modeli, üç özdeşlik ve çarpanlara ayırma; LGS’deki alan-çevre soruları üzerinden, sahne sahne.',
  ozet: [
    'Terimler + ve − ile ayrılır; katsayı işaretiyle alınır (3x<sup>2</sup> − 5x’te −5). Yalnız benzer terimler toplanır: 4x<sup>2</sup> − x<sup>2</sup> = 3x<sup>2</sup>.',
    'Katsayılar toplamı: bütün değişkenlere 1 yaz. Değer hesaplarken sayıyı parantezle yaz: −(−3)<sup>2</sup> = −9.',
    '“3 katının 5 eksiği” 3x − 5, “5 eksiğinin 3 katı” 3(x − 5). Parantez önündeki − bütün terimlerin işaretini değiştirir.',
    'Çarpmada her terim her terimle çarpılır; çapraz çarpımları unutma: (2x + 3)(x + 2) = 2x<sup>2</sup> + 7x + 6. x = 1 ile kontrol et.',
    'Özdeşlik her değer için doğrudur; tek bir karşı örnek özdeşliği bozar.',
    '(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup>, (a − b)<sup>2</sup> = a<sup>2</sup> − 2ab + b<sup>2</sup>, a<sup>2</sup> − b<sup>2</sup> = (a − b)(a + b). 2ab’yi unutma.',
    'Kare kenarı 4 uzatılıp 4 kısaltılırsa alan 16 azalır: (x + 4)(x − 4) = x<sup>2</sup> − 16.',
    'Çarpanlara ayırırken önce ortak çarpan, sonra iki terimliyse iki kare farkı, üç terimliyse tam kare.',
    'Alandan kenara: karenin alanını tam kare yaz, dikdörtgenin alanını verilen kenara göre ayır.'
  ],
  scenes: [
    { t: 'Cebirsel ifadenin parçaları',
      base: '<div class="an-big">3x<sup>2</sup> <span class="rv p1">−</span> 5x + 7</div>' +
        '<table class="an-tbl"><tr class="rv p2"><th>Terimler</th><td>3x<sup>2</sup>, −5x, 7</td></tr>' +
        '<tr class="rv p3"><th>Katsayılar</th><td>3, −5, 7</td></tr><tr class="rv p4"><th>Sabit terim</th><td>7</td></tr></table>',
      steps: [
        { s: 'Merhaba! İçinde harf, yani değişken olan ifadelere cebirsel ifade diyoruz. Şu ifadeyi parçalarına ayıralım.', v: 'Merhaba! İçinde harf, yani değişken olan ifadelere cebirsel ifade diyoruz. Şu ifadeyi parçalarına ayıralım: üç iks kare, eksi beş iks, artı yedi.' },
        { s: 'Artı ve eksi işaretleriyle ayrılan her parça bir terim. Burada üç terim var.', on: '.p1,.p2' },
        { s: 'Terimdeki sayı çarpanı katsayıdır. Dikkat, katsayı işaretiyle alınır: x’in katsayısı 5 değil, −5.', v: 'Terimdeki sayı çarpanı katsayıdır. Dikkat, katsayı işaretiyle alınır: iksin katsayısı beş değil, eksi beş.', on: '.p3', mk: '.p3 td' },
        { s: 'Değişken içermeyen 7 de sabit terim. Önünde sayı görünmeyen x’in katsayısı ise 1’dir.', v: 'Değişken içermeyen yedi de sabit terim. Önünde sayı görünmeyen bir iksin katsayısı ise birdir.', on: '.p4' }
      ] },

    { t: 'Benzer terimler ve değer hesaplama',
      steps: [
        { s: 'Değişkenleri ve üsleri aynı olan terimlere benzer terim denir. Yalnız onlar toplanır, tıpkı elmalarla elmalar gibi.',
          h: '<div class="an-ex"><span class="an-l">4x<sup>2</sup> − x<sup>2</sup> = <b>3x<sup>2</sup></b> &nbsp;·&nbsp; 3ab + 7ab = <b>10ab</b></span><span class="an-l">x<sup>2</sup> ile x benzer <b>değil</b> &nbsp;·&nbsp; ab ile a<sup>2</sup>b benzer <b>değil</b></span></div>' },
        { s: 'Katsayılar toplamını mı istiyorlar? Bütün değişkenlerin yerine 1 yaz: 3 − 5 + 7 = 5.', v: 'Katsayılar toplamını mı istiyorlar? Bütün değişkenlerin yerine bir yaz: üç eksi beş artı yedi, beş.' },
        { s: 'Değer hesaplarken sayıyı hep parantezle yaz. x = −2 için 3 · (−2)² − 5 · (−2) + 7 = 12 + 10 + 7 = 29.', v: 'Değer hesaplarken sayıyı hep parantezle yaz. İks eksi iki için: üç çarpı eksi ikinin karesi, on iki. Eksi beş çarpı eksi iki, artı on. Artı yedi. Toplam yirmi dokuz.',
          h: '<div class="an-ex"><span class="an-l">x = −2: 3 · (−2)<sup>2</sup> − 5 · (−2) + 7</span><span class="an-l">= 12 + 10 + 7 = <b>29</b></span></div>' },
        { s: 'Burada çok dikkat et: −x² ifadesinde x = −3 ise sonuç −9’dur. Üs önce, eksi sonra!', v: 'Burada çok dikkat et: eksi iks kare ifadesinde iks eksi üç ise, sonuç eksi dokuzdur. Üs önce, eksi sonra!',
          h: '<div class="an-trap">−x<sup>2</sup>, x = −3 → −(−3)<sup>2</sup> = <span class="an-ok-t">−9</span> &nbsp; <span class="an-bad-t">+9</span> &nbsp;·&nbsp; 3x<sup>2</sup> ≠ (3x)<sup>2</sup></div>' }
      ] },

    { t: 'Dokun: benzer terimler',
      steps: [{ s: 'Benzer terimde katsayı önemli değil; harfler ve üsleri aynı olmalı. 4x²y ile benzer olan terimlerin hepsine dokun.', v: 'Benzer terimde katsayı önemli değil; harfler ve üsleri aynı olmalı. 4 iks kare ye ile benzer olan terimlerin hepsine dokun.' }],
      ia: { tip: 'gorselsec', q: '<p><b>4x<sup>2</sup>y</b> ile benzer olan terimlerin hepsine dokun, sonra Kontrol et’e bas.</p>', svg: '<svg class="an-svg" viewBox="0 0 340 102" role="img" aria-label="Terimler: eksi x kare y, 4 x y kare, 7 y x kare, x kare y kare, 0,5 x kare y, 4 x kare, 3 x y, eksi 4 x kare y"><g data-b="a" aria-label="−x²y"><rect x="8" y="6" width="75" height="40" rx="9" class="box"/><text x="46" y="32" text-anchor="middle" font-size="17">−x²y</text></g><g data-b="b" aria-label="4xy²"><rect x="91" y="6" width="75" height="40" rx="9" class="box"/><text x="128" y="32" text-anchor="middle" font-size="17">4xy²</text></g><g data-b="c" aria-label="7yx²"><rect x="174" y="6" width="75" height="40" rx="9" class="box"/><text x="212" y="32" text-anchor="middle" font-size="17">7yx²</text></g><g data-b="d" aria-label="x²y²"><rect x="257" y="6" width="75" height="40" rx="9" class="box"/><text x="294" y="32" text-anchor="middle" font-size="17">x²y²</text></g><g data-b="e" aria-label="0,5x²y"><rect x="8" y="54" width="75" height="40" rx="9" class="box"/><text x="46" y="80" text-anchor="middle" font-size="17">0,5x²y</text></g><g data-b="f" aria-label="4x²"><rect x="91" y="54" width="75" height="40" rx="9" class="box"/><text x="128" y="80" text-anchor="middle" font-size="17">4x²</text></g><g data-b="g" aria-label="3xy"><rect x="174" y="54" width="75" height="40" rx="9" class="box"/><text x="212" y="80" text-anchor="middle" font-size="17">3xy</text></g><g data-b="h" aria-label="−4x²y"><rect x="257" y="54" width="75" height="40" rx="9" class="box"/><text x="294" y="80" text-anchor="middle" font-size="17">−4x²y</text></g></svg>', dogru: ['a', 'c', 'e', 'h'], hint: 'Katsayıya bakma. Her terimde x’in üssü 2, y’nin üssü 1 mi? Harflerin yazılış sırası önemli değil.', hintV: 'Katsayıya bakma. Her terimde iksin üssü 2, yenin üssü 1 mi? Harflerin yazılış sırası önemli değil.', why: '−x<sup>2</sup>y, 7yx<sup>2</sup>, 0,5x<sup>2</sup>y ve −4x<sup>2</sup>y’de x’in üssü 2, y’nin üssü 1. 4xy<sup>2</sup>’de üsler yer değiştirmiş; 4x<sup>2</sup>’de y yok; katsayının aynı olması benzerlik sağlamaz.', whyV: 'Eksi iks kare ye, yedi ye iks kare, sıfır virgül beş iks kare ye ve eksi dört iks kare ye: hepsinde iksin üssü 2, yenin üssü 1. Dört iks ye karede üsler yer değiştirmiş, dört iks karede ye yok. Katsayının aynı olması benzerlik sağlamaz.' } },

    { t: 'Sözel ifadeden cebire',
      base: '<table class="an-tbl"><tr><th>Sözel</th><th>Cebirsel</th></tr>' +
        '<tr class="rv w1"><td>bir sayının 3 katının 5 eksiği</td><td>3x − 5</td></tr>' +
        '<tr class="rv w2"><td>bir sayının 5 eksiğinin 3 katı</td><td>3(x − 5)</td></tr>' +
        '<tr class="rv w3"><td>ardışık iki çift sayının toplamı</td><td>2n + (2n + 2) = 4n + 2</td></tr>' +
        '<tr class="rv w4"><td>tanesi x TL kalemden (y + 3) tane</td><td>x(y + 3) = xy + 3x</td></tr></table>',
      steps: [
        { s: 'Problem çözmenin ilk adımı, cümleyi doğru cebire çevirmek. Kelimelerin sırası çok önemli.' },
        { s: '“Bir sayının 3 katının 5 eksiği”: önce 3 katını al, sonra 5 çıkar. 3x − 5.', v: 'Bir sayının üç katının beş eksiği: önce üç katını al, sonra beş çıkar. Üç iks eksi beş.', on: '.w1' },
        { s: '“5 eksiğinin 3 katı” ise tam tersi: önce 5 çıkar, sonra 3’le çarp. Parantez şart!', v: 'Beş eksiğinin üç katı ise tam tersi: önce beş çıkar, sonra üçle çarp. Parantez şart!', on: '.w2', mk: '.w2 td' },
        { s: 'Ardışık çift sayılar 2n ve 2n + 2. Toplamları 4n + 2.', v: 'Ardışık çift sayılar, iki n ve iki n artı iki. Toplamları, dört n artı iki.', on: '.w3' },
        { s: 'Para hesabı da böyle kurulur: tanesi x TL olan kalemden y + 3 tane, x çarpı y + 3.', v: 'Para hesabı da böyle kurulur: tanesi iks lira olan kalemden, y artı üç tane; iks çarpı, y artı üç.', on: '.w4' },
        { s: 'Aynı şey farklı görünebilir: 2a + 2b ile 2(a + b) aynı ifadedir. Sadeleştirince aynı sonuca varmalı.', v: 'Aynı şey farklı görünebilir: iki a artı iki b ile, iki çarpı a artı b, aynı ifadedir. Sadeleştirince aynı sonuca varmalı.' }
      ] },

    { t: 'Eşleştir: sözelden cebire',
      steps: [{ s: 'x bir sayı olsun. Her söylenişi cebirsel ifadesiyle eşleştir. Hangi işlemin önce yapıldığına dikkat et.', v: 'İks bir sayı olsun. Her söylenişi cebirsel ifadesiyle eşleştir. Hangi işlemin önce yapıldığına dikkat et.' }],
      ia: { tip: 'eslestir', q: '<p>x bir sayıdır. Her söylenişi ifadesiyle eşleştir.</p>', solBaslik: 'Söyleniş', sagBaslik: 'İfade', sol: ['2 katının 3 fazlası', '3 fazlasının 2 katı', 'yarısının 3 eksiği', '3 eksiğinin yarısı', 'karesinin 2 katı'], sag: ['2x + 3', '2(x + 3)', '{{x|2}} − 3', '{{x − 3|2}}', '2x<sup>2</sup>'], hint: 'Cümlede ilk söylenen işlem önce yapılır. “3 fazlasının 2 katı” derken önce 3 eklenir, sonra bütün toplam 2 ile çarpılır.', why: '“Fazlasının katı” ve “eksiğinin yarısı” dendiğinde önce toplama ya da çıkarma yapılır, bu yüzden parantez ya da kesir çizgisi gerekir. 2x + 3 ile 2(x + 3) aynı değildir.', whyV: 'Fazlasının katı ya da eksiğinin yarısı dendiğinde önce toplama ya da çıkarma yapılır; bu yüzden parantez ya da kesir çizgisi gerekir. 2 iks artı 3 ile, iks artı 3’ün 2 katı aynı şey değildir.' } },

    { t: 'Toplama ve çıkarma',
      steps: [
        { s: 'İki ifadeyi toplarken benzer terimleri bir araya getiriyoruz. Çıkarmada ise bir püf noktası var.',
          h: '<div class="an-ex"><span class="an-l">(5x<sup>2</sup> − 3x + 2) − (2x<sup>2</sup> + x − 6)</span><span class="an-l rv m1">= 5x<sup>2</sup> − 3x + 2 <span class="an-ek">− 2x<sup>2</sup> − x + 6</span></span><span class="an-l rv m2">= <b>3x<sup>2</sup> − 4x + 8</b></span></div>' },
        { s: 'Parantezin önündeki eksi, içerideki bütün terimlerin işaretini değiştirir. Hepsinin!', on: '.m1' },
        { s: 'Sonra benzerleri topla: 5x² − 2x² = 3x², −3x − x = −4x, 2 + 6 = 8.', v: 'Sonra benzerleri topla: beş iks kare eksi iki iks kare, üç iks kare. Eksi üç iks eksi iks, eksi dört iks. İki artı altı, sekiz.', on: '.m2' },
        { s: 'En sık hata, yalnız ilk terimin işaretini değiştirip gerisini unutmak.',
          h: '<div class="an-trap">−(2x − 7) = <span class="an-ok-t">−2x + 7</span> &nbsp; <span class="an-bad-t">−2x − 7</span></div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p><b>(4x<sup>2</sup> − x + 3) − (x<sup>2</sup> − 5x − 2)</b> işleminin sonucu aşağıdakilerden hangisidir?</p>',
        c: ['3x<sup>2</sup> − 6x + 1', '3x<sup>2</sup> + 4x + 5', '3x<sup>2</sup> + 4x + 1', '5x<sup>2</sup> − 6x + 1'], a: 'B',
        hint: 'İkinci parantezin önündeki eksi, içerideki üç terimin de işaretini değiştirir.',
        why: '4x<sup>2</sup> − x + 3 − x<sup>2</sup> + 5x + 2 = 3x<sup>2</sup> + 4x + 5.',
        whyV: 'Parantezi açınca: dört iks kare eksi iks artı üç, eksi iks kare, artı beş iks, artı iki. Toplayınca üç iks kare, artı dört iks, artı beş.' },
      steps: [{ s: 'Sıra sende! İşaretlere dikkat.' }] },

    { t: 'Çarpma: dağılma özelliği',
      steps: [
        { s: 'Çarpmada katsayılar çarpılır, aynı harflerin üsleri toplanır: 3x çarpı −2x, −6x².', v: 'Çarpmada katsayılar çarpılır, aynı harflerin üsleri toplanır: üç iks çarpı eksi iki iks, eksi altı iks kare.',
          h: '<div class="an-ex"><span class="an-l">(3x) · (−2x) = −6x<sup>2</sup></span><span class="an-l">(2a<sup>2</sup>b) · (5ab) = 10a<sup>3</sup>b<sup>2</sup></span></div>' },
        { s: 'Bir terim parantezle çarpılırsa içerideki her terime dağılır: −2x(x − 5) = −2x² + 10x.', v: 'Bir terim parantezle çarpılırsa, içerideki her terime dağılır: eksi iki iks çarpı, iks eksi beş; eksi iki iks kare, artı on iks.' },
        { s: 'İki parantez çarpılırken her terim, öbür parantezdeki her terimle çarpılır. Sonra benzerler toplanır.',
          h: '<div class="an-ex"><span class="an-l">(2x + 3)(5x − 1)</span><span class="an-l">= 10x<sup>2</sup> − 2x + 15x − 3</span><span class="an-l">= <b>10x<sup>2</sup> + 13x − 3</b></span></div>' },
        { s: 'Örnekte 2x çarpı 5x, 2x çarpı −1, 3 çarpı 5x ve 3 çarpı −1. Dört çarpım, sonra toplama.', v: 'Örnekte: iki iks çarpı beş iks, iki iks çarpı eksi bir, üç çarpı beş iks ve üç çarpı eksi bir. Dört çarpım, sonra toplama: on iks kare, artı on üç iks, eksi üç.' }
      ] },

    { t: 'Boşluk doldur: iki parantezin çarpımı',
      steps: [{ s: 'Her terimi öbür parantezdeki her terimle çarp, sonra benzerleri topla. Boşluklara doğru kartları yerleştir.' }],
      ia: { tip: 'bosluk', q: '<p>(x + 4)(2x − 3) çarpımını yap.</p>', metin: '(x + 4)(2x − 3) = 2x<sup>2</sup> + [_]x − [_]', secenek: ['5', '11', '12', '1', '7', '3'], cevap: ['5', '12'], hint: 'Dört çarpım var: x · 2x, x · (−3), 4 · 2x, 4 · (−3). Sonra x’li terimleri topla.', hintV: 'Dört çarpım var: iks çarpı iki iks, iks çarpı eksi üç, dört çarpı iki iks, dört çarpı eksi üç. Sonra iksli terimleri topla.', why: '2x<sup>2</sup> − 3x + 8x − 12 = 2x<sup>2</sup> + 5x − 12. Yalnız baştakileri ve sondakileri çarpıp ortadaki 5x’i unutmak en sık hata.', whyV: 'İki iks kare, eksi üç iks, artı sekiz iks, eksi on iki. Toplayınca iki iks kare artı beş iks eksi on iki. Yalnız baştakileri ve sondakileri çarpıp ortadaki beş iksi unutmak en sık hatadır.' } },

    { t: 'Alan modeli: cebir karoları',
      base: '<svg class="an-svg" viewBox="0 0 330 160" role="img" aria-label="Cebir karolarıyla 2x artı 3 çarpı x artı 2 alan modeli: 2 tane x kare, 7 tane x, 6 tane birim kare"><text x="100" y="26" font-size="13" text-anchor="middle" class="acc">x</text><text x="160" y="26" font-size="13" text-anchor="middle" class="acc">x</text><text x="198" y="26" font-size="13" text-anchor="middle" class="acc">1</text><text x="214" y="26" font-size="13" text-anchor="middle" class="acc">1</text><text x="230" y="26" font-size="13" text-anchor="middle" class="acc">1</text><text x="60" y="68" font-size="13" text-anchor="middle" class="acc">x</text><text x="60" y="106" font-size="13" text-anchor="middle" class="acc">1</text><text x="60" y="122" font-size="13" text-anchor="middle" class="acc">1</text><rect x="70" y="34" width="60" height="60" class="rv t1" style="fill:var(--c);fill-opacity:.55;stroke:var(--card2);stroke-width:1.5"/><text x="100" y="69" font-size="14" text-anchor="middle" font-weight="700" class="rv t1">x²</text><rect x="130" y="34" width="60" height="60" class="rv t1" style="fill:var(--c);fill-opacity:.55;stroke:var(--card2);stroke-width:1.5"/><text x="160" y="69" font-size="14" text-anchor="middle" font-weight="700" class="rv t1">x²</text><rect x="190" y="34" width="16" height="60" class="rv t2" style="fill:var(--noteline);fill-opacity:.7;stroke:var(--card2);stroke-width:1.5"/><rect x="206" y="34" width="16" height="60" class="rv t2" style="fill:var(--noteline);fill-opacity:.7;stroke:var(--card2);stroke-width:1.5"/><rect x="222" y="34" width="16" height="60" class="rv t2" style="fill:var(--noteline);fill-opacity:.7;stroke:var(--card2);stroke-width:1.5"/><rect x="70" y="94" width="60" height="16" class="rv t2" style="fill:var(--noteline);fill-opacity:.7;stroke:var(--card2);stroke-width:1.5"/><rect x="130" y="94" width="60" height="16" class="rv t2" style="fill:var(--noteline);fill-opacity:.7;stroke:var(--card2);stroke-width:1.5"/><rect x="190" y="94" width="16" height="16" class="rv t3" style="fill:var(--ok);fill-opacity:.8;stroke:var(--card2);stroke-width:1.5"/><rect x="206" y="94" width="16" height="16" class="rv t3" style="fill:var(--ok);fill-opacity:.8;stroke:var(--card2);stroke-width:1.5"/><rect x="222" y="94" width="16" height="16" class="rv t3" style="fill:var(--ok);fill-opacity:.8;stroke:var(--card2);stroke-width:1.5"/><rect x="70" y="110" width="60" height="16" class="rv t2" style="fill:var(--noteline);fill-opacity:.7;stroke:var(--card2);stroke-width:1.5"/><rect x="130" y="110" width="60" height="16" class="rv t2" style="fill:var(--noteline);fill-opacity:.7;stroke:var(--card2);stroke-width:1.5"/><rect x="190" y="110" width="16" height="16" class="rv t3" style="fill:var(--ok);fill-opacity:.8;stroke:var(--card2);stroke-width:1.5"/><rect x="206" y="110" width="16" height="16" class="rv t3" style="fill:var(--ok);fill-opacity:.8;stroke:var(--card2);stroke-width:1.5"/><rect x="222" y="110" width="16" height="16" class="rv t3" style="fill:var(--ok);fill-opacity:.8;stroke:var(--card2);stroke-width:1.5"/><rect x="70" y="34" width="168" height="92" class="st" style="fill:none"/><text x="250" y="70" font-size="13" class="rv t1">2 tane x²</text><text x="250" y="92" font-size="13" class="rv t2">7 tane x</text><text x="250" y="114" font-size="13" class="rv t3">6 tane 1</text></svg>',
      steps: [
        { s: 'Şimdi şuna bir bakalım: kenarları 2x + 3 ve x + 2 olan bir dikdörtgen. Alanı, kenarların çarpımı.', v: 'Şimdi şuna bir bakalım: kenarları iki iks artı üç, ve iks artı iki olan bir dikdörtgen. Alanı, kenarların çarpımı.' },
        { s: 'Dikdörtgeni karolara ayıralım. İki tane x kare var.', v: 'Dikdörtgeni karolara ayıralım. İki tane iks kare var.', on: '.t1' },
        { s: 'Uzun ince şeritlerin her biri x. Saydığında 7 tane.', v: 'Uzun ince şeritlerin her biri iks. Saydığında yedi tane.', on: '.t2' },
        { s: 'Köşedeki küçük kareler 1’er birim: 6 tane. Toplam alan 2x² + 7x + 6.', v: 'Köşedeki küçük kareler birer birim: altı tane. Toplam alan: iki iks kare, artı yedi iks, artı altı.', on: '.t3',
          h: '<div class="an-rule"><b>(2x + 3)(x + 2) = 2x<sup>2</sup> + 7x + 6</b></div>' },
        { s: 'Tuzak: yalnız baştakileri ve sondakileri çarpıp 2x² + 6 demek. Çapraz çarpımlar, yani o 7 şerit unutulmuş olur.', v: 'Tuzak: yalnız baştakileri ve sondakileri çarpıp, iki iks kare artı altı demek. Böylece çapraz çarpımlar, yani o yedi şerit unutulmuş olur.',
          h: '<div class="an-trap"><span class="an-bad-t">2x<sup>2</sup> + 6</span> → kontrol için x = 1 koy: 5 · 3 = 15 ve 2 + 7 + 6 = 15 ✓</div>' }
      ] },

    { t: 'Çözümlü örnek: havuzlu bahçe',
      steps: [
        { s: 'Kenarları 2x + 1 ve x + 4 metre olan bahçenin köşesine kenarı x metre olan kare bir havuz yapılıyor. Kalan alan ne?', v: 'Kenarları iki iks artı bir, ve iks artı dört metre olan bahçenin köşesine, kenarı iks metre olan kare bir havuz yapılıyor. Kalan alan ne?',
          h: '<div class="an-ex"><span class="an-l rv b1">Bahçe: (2x + 1)(x + 4) = 2x<sup>2</sup> + 9x + 4</span><span class="an-l rv b2">Havuz: x · x = x<sup>2</sup></span><span class="an-l rv b3">Kalan: 2x<sup>2</sup> + 9x + 4 − x<sup>2</sup> = <b>x<sup>2</sup> + 9x + 4</b></span></div>' },
        { s: 'Önce büyük alan: 2x çarpı x, 2x çarpı 4, 1 çarpı x, 1 çarpı 4. Toplam 2x² + 9x + 4.', v: 'Önce büyük alan: iki iks çarpı iks, iki iks çarpı dört, bir çarpı iks, bir çarpı dört. Toplam: iki iks kare, artı dokuz iks, artı dört.', on: '.b1' },
        { s: 'Havuzun alanı x kare. Kalan alan, büyük alandan kesilen alanı çıkarınca bulunur.', v: 'Havuzun alanı iks kare. Kalan alan, büyük alandan kesilen alanı çıkarınca bulunur.', on: '.b2' },
        { s: 'Sonuç x² + 9x + 4. Kontrol: x = 2 için 5 · 6 − 4 = 26, formülden 4 + 18 + 4 = 26. Tamam!', v: 'Sonuç: iks kare, artı dokuz iks, artı dört. Kontrol edelim: iks iki için, beş çarpı altı eksi dört, yirmi altı. Formülden de, dört artı on sekiz artı dört, yirmi altı. Tamam!', on: '.b3' },
        { s: 'Çerçeve sorularında dikkat: her yanına k genişliğinde çerçeve eklenirse her kenar 2k uzar.', v: 'Çerçeve sorularında dikkat: her yanına k genişliğinde çerçeve eklenirse, her kenar iki k uzar.' }
      ] },

    { t: 'Özdeşlik mi, denklem mi?',
      base: '<table class="an-tbl"><tr><th>Eşitlik</th><th>x = 1</th><th>x = 3</th></tr>' +
        '<tr class="rv z1"><td>(x + 1)<sup>2</sup> = x<sup>2</sup> + 2x + 1</td><td>4 = 4 ✓</td><td>16 = 16 ✓</td></tr>' +
        '<tr class="rv z2"><td>3x + 1 = 7</td><td>4 ≠ 7</td><td>10 ≠ 7</td></tr>' +
        '<tr class="rv z3"><td>(x + 1)<sup>2</sup> = x<sup>2</sup> + 1</td><td>4 ≠ 2</td><td>16 ≠ 10</td></tr></table>',
      steps: [
        { s: 'Değişkene hangi değeri verirsen ver doğru kalan eşitliklere özdeşlik denir.' },
        { s: '(x + 1)² = x² + 2x + 1 her değerde doğru. Bu bir özdeşlik.', v: 'İks artı birin karesi, iks kare artı iki iks artı bir. Bu her değerde doğru, yani bir özdeşlik.', on: '.z1' },
        { s: '3x + 1 = 7 ise yalnız x = 2’de doğru. Bu bir denklem.', v: 'Üç iks artı bir eşittir yedi ise, yalnız iks iki olunca doğru. Bu bir denklem.', on: '.z2' },
        { s: 'Bir eşitliği bozmak için tek bir karşı örnek yeter. Ama birkaç değerde tutması özdeşlik olduğunu kanıtlamaz!', on: '.z3',
          h: '<div class="an-tip">(x + 1)<sup>2</sup> = 5x − 1: x = 1 ve x = 2’de doğru ama x = 3’te 16 ≠ 14. Özdeşlik değil.</div>' }
      ] },

    { t: 'Grupla: özdeşlik mi, denklem mi?',
      steps: [{ s: 'Her eşitliği düşün: her değerde mi doğru, yoksa yalnız bazı değerlerde mi? Kutusuna yerleştir.' }],
      ia: { tip: 'grup', q: '<p>Her eşitliği türüne göre yerleştir.</p>', gruplar: ['Özdeşlik', 'Denklem'], ogeler: [
            { m: '2(x + 3) = 2x + 6', g: 0 },
            { m: '(x − 1)<sup>2</sup> = x<sup>2</sup> − 2x + 1', g: 0 },
            { m: 'x<sup>2</sup> − 4 = (x − 2)(x + 2)', g: 0 },
            { m: '5x − x = 4x', g: 0 },
            { m: '3x − 2 = 10', g: 1 },
            { m: 'x + x = x<sup>2</sup>', g: 1 },
            { m: '(x + 2)<sup>2</sup> = x<sup>2</sup> + 4', g: 1 }], hint: 'İki tarafı sadeleştir. Her iki taraf aynı ifade oluyorsa özdeşlik; bir karşı örnek bulabiliyorsan denklem.', why: 'Sadeleşince iki tarafı aynı olanlar özdeşliktir. x + x = x<sup>2</sup> yalnız 0 ve 2’de, (x + 2)<sup>2</sup> = x<sup>2</sup> + 4 yalnız 0’da doğru: birkaç değerde tutması özdeşlik yapmaz.', whyV: 'Sadeleşince iki tarafı aynı olanlar özdeşliktir. İks artı iks eşittir iks kare yalnızca sıfırda ve ikide doğru; iks artı ikinin karesi eşittir iks kare artı dört de yalnızca sıfırda. Birkaç değerde tutması özdeşlik yapmaz.' } },

    { t: 'Üç özdeşlik ve alan modeli',
      base: '<svg class="an-svg" viewBox="0 0 330 170" role="img" aria-label="Kenarı a artı b olan kare: a kare, iki tane a b ve b kare parçalarından oluşur"><text x="86" y="16" font-size="14" text-anchor="middle" class="acc">a</text><text x="152" y="16" font-size="14" text-anchor="middle" class="acc">b</text><text x="28" y="73" font-size="14" text-anchor="middle" class="acc">a</text><text x="28" y="139" font-size="14" text-anchor="middle" class="acc">b</text><rect x="40" y="22" width="92" height="92" class="rv q1" style="fill:var(--c);fill-opacity:.55;stroke:var(--card2);stroke-width:2"/><text x="86" y="74" font-size="16" text-anchor="middle" font-weight="700" class="rv q1">a²</text><rect x="132" y="22" width="40" height="92" class="rv q2" style="fill:var(--noteline);fill-opacity:.7;stroke:var(--card2);stroke-width:2"/><text x="152" y="74" font-size="16" text-anchor="middle" font-weight="700" class="rv q2">ab</text><rect x="40" y="114" width="92" height="40" class="rv q2" style="fill:var(--noteline);fill-opacity:.7;stroke:var(--card2);stroke-width:2"/><text x="86" y="140" font-size="16" text-anchor="middle" font-weight="700" class="rv q2">ab</text><rect x="132" y="114" width="40" height="40" class="rv q3" style="fill:var(--ok);fill-opacity:.8;stroke:var(--card2);stroke-width:2"/><text x="152" y="140" font-size="16" text-anchor="middle" font-weight="700" class="rv q3">b²</text><rect x="40" y="22" width="132" height="132" class="st" style="fill:none"/><text x="196" y="70" font-size="15" class="rv q4">(a + b)²</text><text x="196" y="94" font-size="15" class="rv q4">= a² + 2ab + b²</text></svg>',
      steps: [
        { s: 'LGS’de üç özdeşlik kullanılır. İlki toplamın karesi. Kenarı a + b olan bir kare düşün.', v: 'Le ge se’de üç özdeşlik kullanılır. İlki toplamın karesi. Kenarı a artı b olan bir kare düşün.' },
        { s: 'Kareyi dörde bölelim: a kare bir köşede, b kare öbür köşede.', v: 'Kareyi dörde bölelim: a kare bir köşede, b kare öbür köşede.', on: '.q1,.q3' },
        { s: 've iki tane a çarpı b’lik dikdörtgen. Ortadaki 2ab işte buradan geliyor.', v: 'Ve iki tane a çarpı b’lik dikdörtgen. Ortadaki iki a b terimi, işte buradan geliyor.', on: '.q2,.q4' },
        { s: 'Farkın karesinde ortadaki terim eksi, son terim yine artı. Üçüncüsü de iki kare farkı.', v: 'Farkın karesinde ortadaki terim eksi, son terim yine artı. Üçüncüsü de iki kare farkı.',
          h: '<div class="an-rule">(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup><br>(a − b)<sup>2</sup> = a<sup>2</sup> − 2ab + b<sup>2</sup><br>a<sup>2</sup> − b<sup>2</sup> = (a − b)(a + b)</div>' },
        { s: 'En büyük tuzak: (x + 5)²’yi x² + 25 sanmak. 10x’i unutma!', v: 'En büyük tuzak: iks artı beşin karesini, iks kare artı yirmi beş sanmak. On iksi unutma!',
          h: '<div class="an-trap">(x + 5)<sup>2</sup> = x<sup>2</sup> <b>+ 10x</b> + 25 &nbsp;·&nbsp; (x − 4)<sup>2</sup> = x<sup>2</sup> − 8x <b>+ 16</b> &nbsp;·&nbsp; (2x)<sup>2</sup> = 4x<sup>2</sup></div>' }
      ] },

    { t: 'Doğru mu, yanlış mı?',
      steps: [{ s: 'Özdeşliklerde en çok yapılan hataları yakala. Her ifade için Doğru ya da Yanlış’a dokun.' }],
      ia: { tip: 'dogruyanlis', q: '<p>Her ifade için karar ver.</p>', ifadeler: [
            { m: '(x + 5)<sup>2</sup> = x<sup>2</sup> + 25', d: false, a: 'Ortadaki 2 · x · 5 = 10x unutulmuş: x<sup>2</sup> + 10x + 25.' },
            { m: '(a − b)<sup>2</sup> = a<sup>2</sup> − 2ab + b<sup>2</sup>', d: true, a: 'Farkın karesinde orta terim eksi, son terim artı.' },
            { m: '(x − 3)<sup>2</sup> = x<sup>2</sup> − 6x − 9', d: false, a: 'Son terim (−3)<sup>2</sup> = +9 olmalı.' },
            { m: '(2x + 1)(2x − 1) = 4x<sup>2</sup> − 1', d: true, a: 'İki kare farkı: (2x)<sup>2</sup> − 1<sup>2</sup>.' }], hint: 'Kenarı a + b olan karenin dört parçasını hatırla. Bir kare hiçbir zaman eksi olmaz.', why: 'Toplamın ve farkın karesinde ortada 2ab terimi vardır ve son terim her zaman artıdır. (2x + 1)(2x − 1) ise iki kare farkıdır.', whyV: 'Toplamın ve farkın karesinde ortada iki a b terimi vardır ve son terim her zaman artıdır. İki iks artı bir ile iki iks eksi birin çarpımı ise iki kare farkıdır.' } },

    { t: 'Özdeşliklerle akıllı hesap',
      steps: [
        { s: 'Özdeşlikler hesabı da hızlandırır. 51 çarpı 49’u zihinden yapalım: (50 + 1)(50 − 1) = 2500 − 1 = 2499.', v: 'Özdeşlikler hesabı da hızlandırır. Elli bir çarpı kırk dokuzu zihinden yapalım: elli artı bir, çarpı elli eksi bir; iki bin beş yüz eksi bir, iki bin dört yüz doksan dokuz.',
          h: '<div class="an-ex"><span class="an-l">51 · 49 = 50<sup>2</sup> − 1<sup>2</sup> = 2499</span><span class="an-l">98<sup>2</sup> = (100 − 2)<sup>2</sup> = 10 000 − 400 + 4 = 9604</span><span class="an-l">101<sup>2</sup> − 99<sup>2</sup> = 2 · 200 = 400</span></div>' },
        { s: '98’in karesi: 100 eksi 2’nin karesi. 10 000 − 400 + 4 = 9604.', v: 'Doksan sekizin karesi: yüz eksi ikinin karesi. On bin eksi dört yüz artı dört, dokuz bin altı yüz dört.' },
        { s: 'Toplam ve çarpım biliniyorsa kareler toplamı bulunur: a² + b² = (a + b)² − 2ab.', v: 'Toplam ve çarpım biliniyorsa, kareler toplamı bulunur: a kare artı b kare, a artı b’nin karesi eksi iki a b.',
          h: '<div class="an-tip">a − b = 3 ve a<sup>2</sup> − b<sup>2</sup> = 39 ise a + b = 39 ÷ 3 = 13</div>' },
        { s: 'Bir LGS klasiği: kare bir bahçenin bir kenarı 4 m uzatılıp diğeri 4 m kısaltılıyor. Ne olur? Şimdi sen söyle.', v: 'Bir le ge se klasiği: kare bir bahçenin bir kenarı dört metre uzatılıp, diğeri dört metre kısaltılıyor. Ne olur? Şimdi sen söyle.' }
      ] },

    { t: 'Kaydır: kareler toplamı',
      steps: [{ s: 'Toplam ve çarpım verildi. Kareler toplamını özdeşlikle bul ve kaydırıcıyla göster.' }],
      ia: { tip: 'kaydir', q: '<p>a + b = 7 ve a · b = 10 ise <b>a<sup>2</sup> + b<sup>2</sup></b> kaçtır?</p>', min: 0, max: 60, adim: 1, cevap: 29, etiket: [0, 10, 20, 30, 40, 50, 60], hint: '(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup>. Toplamın karesinden neyi çıkarman gerekir?', hintV: 'a artı b’nin karesi, a kare artı iki a b artı b kare. Toplamın karesinden neyi çıkarman gerekir?', why: 'a<sup>2</sup> + b<sup>2</sup> = (a + b)<sup>2</sup> − 2ab = 49 − 20 = 29. 49 demek 2ab’yi unutmak, 39 demek ise 2’yi unutmaktır.', whyV: 'a kare artı b kare, toplamın karesinden iki a b çıkarılarak bulunur: 49 eksi 20, yani 29. 49 demek iki a b’yi unutmak, 39 demek ise ikiyi unutmaktır.' } },

    { t: 'Ara soru', cp: {
        q: '<p>Kare biçimindeki bir bahçenin bir kenarı 4 m uzatılıp diğer kenarı 4 m kısaltılarak dikdörtgen biçiminde yeni bir bahçe yapılıyor. Yeni bahçenin alanı için ne söylenebilir?</p>',
        c: ['Değişmez.', '8 m² azalır.', '16 m² azalır.', '16 m² artar.'], a: 'C',
        hint: 'Kenar x olsun. Yeni alan (x + 4)(x − 4). Bu hangi özdeşlik?',
        hintV: 'Kenar iks olsun. Yeni alan, iks artı dört çarpı iks eksi dört. Bu hangi özdeşlik?',
        why: '(x + 4)(x − 4) = x<sup>2</sup> − 16. Kenar ne olursa olsun alan 16 m² azalır; çevre ise değişmez.',
        whyV: 'İks artı dört çarpı iks eksi dört, iks kare eksi on altı. Kenar ne olursa olsun alan on altı metrekare azalır. Çevre ise değişmez.' },
      steps: [{ s: 'İki kare farkını hatırla ve seç.' }] },

    { t: 'Çarpanlara ayırma',
      steps: [
        { s: 'Çarpanlara ayırma, çarpmanın tersi. İfadeyi çarpımlar hâlinde yazıyoruz. Sırayla üç yol deneriz.',
          h: '<div class="an-rule"><b>1.</b> Ortak çarpan → <b>2.</b> iki terimliyse iki kare farkı → <b>3.</b> üç terimliyse tam kare</div>' },
        { s: 'Ortak çarpan: katsayıların EBOB’u ve ortak harf dışarı. 8x² − 12x = 4x(2x − 3).', v: 'Ortak çarpan: katsayıların ebobu ve ortak harf dışarı. Sekiz iks kare eksi on iki iks; dört iks çarpı, iki iks eksi üç.',
          h: '<div class="an-ex"><span class="an-l">8x<sup>2</sup> − 12x = 4x(2x − 3)</span><span class="an-l">2x<sup>2</sup> − 18 = 2(x<sup>2</sup> − 9) = 2(x − 3)(x + 3)</span><span class="an-l">x<sup>2</sup> + 10x + 25 = (x + 5)<sup>2</sup></span></div>' },
        { s: 'İki kare farkı: x² − 9 = (x − 3)(x + 3). Önce ortak çarpanı almayı unutma: 2x² − 18 = 2(x − 3)(x + 3).', v: 'İki kare farkı: iks kare eksi dokuz; iks eksi üç, çarpı iks artı üç. Önce ortak çarpanı almayı unutma: iki iks kare eksi on sekiz, iki çarpı iks eksi üç, çarpı iks artı üç.' },
        { s: 'Tam kare: baştaki ve sondaki kare, ortadaki 2ab mi? x² + 10x + 25’te 2 · x · 5 = 10x. Evet, (x + 5)².', v: 'Tam kare: baştaki ve sondaki terim kare mi, ortadaki iki a b mi? İks kare artı on iks artı yirmi beşte, iki çarpı iks çarpı beş, on iks. Evet; iks artı beşin karesi.' },
        { s: 'Dikkat: 4x² + 10x + 25 tam kare değil, çünkü (2x + 5)² için orta terim 20x olmalıydı.', v: 'Dikkat: dört iks kare artı on iks artı yirmi beş, tam kare değil. Çünkü iki iks artı beşin karesi için orta terim, yirmi iks olmalıydı.',
          h: '<div class="an-trap">Ortak çarpanın tamamını al: 6x<sup>2</sup> − 9x = 3(2x<sup>2</sup> − 3x) eksik, doğrusu <b>3x(2x − 3)</b></div>' }
      ] },

    { t: 'Ele: tam kare olmayanlar',
      steps: [{ s: 'Baştaki ve sondaki terim kare mi, ortadaki terim 2ab mi? Tam kare olmayan ifadelerin üstünü çiz.', v: 'Baştaki ve sondaki terim kare mi, ortadaki terim iki a b mi? Tam kare olmayan ifadelerin üstünü çiz.' }],
      ia: { tip: 'eleme', q: '<p>Bir ifadenin karesi olarak yazılamayanları, yani <b>tam kare olmayanları</b> ele.</p>', ogeler: ['x<sup>2</sup> + 6x + 9', '4x<sup>2</sup> + 12x + 9', 'x<sup>2</sup> + 4x + 16', '9x<sup>2</sup> − 6x + 1', '4x<sup>2</sup> + 10x + 25', 'x<sup>2</sup> − 10x − 25', 'x<sup>2</sup> + 2x + 1'], ele: [2, 4, 5], hint: 'Baştakinin ve sondakinin kökünü al, çarpımlarının 2 katı ortadaki terimi veriyor mu? Son terim eksi olabilir mi?', why: '(x + 3)<sup>2</sup>, (2x + 3)<sup>2</sup>, (3x − 1)<sup>2</sup> ve (x + 1)<sup>2</sup> tam kare. x<sup>2</sup> + 4x + 16’da orta terim 8x, 4x<sup>2</sup> + 10x + 25’te 20x olmalıydı; x<sup>2</sup> − 10x − 25’te son terim eksi.', whyV: 'İks artı üçün, iki iks artı üçün, üç iks eksi birin ve iks artı birin kareleri tam karedir. İks kare artı dört iks artı on altıda orta terim sekiz iks; dört iks kare artı on iks artı yirmi beşte yirmi iks olmalıydı. İks kare eksi on iks eksi yirmi beşte ise son terim eksi; bir kare eksi olamaz.' } },

    { t: 'Alandan kenara',
      steps: [
        { s: 'LGS’de çarpanlara ayırma çoğunlukla alandan kenar bulmak için kullanılır.', v: 'Le ge se’de çarpanlara ayırma, çoğunlukla alandan kenar bulmak için kullanılır.' },
        { s: 'Karenin alanı 9x² + 24x + 16 ise bunu tam kare yaz: (3x + 4)². Kenar 3x + 4, çevre 12x + 16.', v: 'Karenin alanı dokuz iks kare artı yirmi dört iks artı on altı ise, bunu tam kare yaz: üç iks artı dördün karesi. Kenar üç iks artı dört, çevre on iki iks artı on altı.',
          h: '<div class="an-ex"><span class="an-l">9x<sup>2</sup> + 24x + 16 = (3x + 4)<sup>2</sup> → kenar 3x + 4</span><span class="an-l">6x<sup>2</sup> + 15x = 3x(2x + 5) → kenar 3x ise öbürü 2x + 5</span></div>' },
        { s: 'Dikdörtgende bir kenar verilir; alanı o kenara göre ayırınca diğer kenar çıkar.' },
        { s: 'Ve unutma: kenar uzunluğu pozitif olmalı. Kenarı 2x − 3 olan şekilde x, 1,5’ten büyük olmalı.', v: 'Ve unutma: kenar uzunluğu pozitif olmalı. Kenarı iki iks eksi üç olan şekilde, iks bir buçuktan büyük olmalı.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Alanı (4x<sup>2</sup> − 25) cm² olan dikdörtgen biçimindeki bir kartın kısa kenarı (2x − 5) cm’dir. Bu kartın <b>çevresi</b> kaç santimetredir?</p>',
        c: ['4x', '8x', '8x + 10', '4x + 10'], a: 'B',
        hint: '4x<sup>2</sup> − 25 iki kare farkıdır. Uzun kenarı bul, sonra çevreyi hesapla.',
        hintV: 'Dört iks kare eksi yirmi beş, iki kare farkıdır. Uzun kenarı bul, sonra çevreyi hesapla.',
        why: '4x<sup>2</sup> − 25 = (2x − 5)(2x + 5) → uzun kenar 2x + 5. Çevre = 2(2x − 5 + 2x + 5) = 2 · 4x = 8x.',
        whyV: 'Dört iks kare eksi yirmi beş; iki iks eksi beş, çarpı iki iks artı beş. Uzun kenar iki iks artı beş. Çevre, iki çarpı dört iks, yani sekiz iks.' },
      steps: [{ s: 'Son soru! Alandan kenara git, sonra çevreyi bul.' }] }
  ]
};
