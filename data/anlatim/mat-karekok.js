/* Adım Adım Anlatım · Matematik · Kareköklü İfadeler (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['mat-karekok'] = {
  title: 'Kareköklü İfadeler',
  desc: 'Tam kareler, “hangi iki doğal sayı arasında?”, a√b biçimi, dört işlem, ondalıkların karekökü ve rasyonel-irrasyonel ayrımı; LGS’nin en çok soru sorduğu konu.',
  ozet: [
    'Alanı x olan karenin kenarı √x. √25 = 5 (−5 değil); (√7)<sup>2</sup> = 7.',
    'Tam kare testi: asal çarpanların bütün üsleri çift. Birler basamağı 2, 3, 7, 8 olan sayı tam kare olamaz.',
    'n<sup>2</sup> < x < (n + 1)<sup>2</sup> ise n < √x < n + 1. Yakınlık için orta noktanın karesine bak: 5,5<sup>2</sup> = 30,25.',
    'n ile n + 1 arasında karekökü olan 2n tane doğal sayı vardır (6 < √x < 7 → 12 sayı).',
    'Kök dışına çıkarma: √72 = √(36 · 2) = 6√2. Kök içine alma karesiyle: 3√5 = √45. Sıralamada hepsini kök içine al.',
    'Çarpma/bölme kök içinde yapılır: √3 · √12 = 6. (2√3)<sup>2</sup> = 12.',
    'Toplama/çıkarma yalnız kök içleri aynıysa: √12 + √75 = 7√3. √a + √b ≠ √(a + b).',
    'Doğal sayı yapan çarpan: √12 = 2√3 → k√3 biçiminde bir sayıyla çarp.',
    '√0,49 = 0,7 ama √0,4 ≠ 0,2. Kök içi (kesir olarak) tam kareyse rasyonel, değilse irrasyonel; π da irrasyonel.'
  ],
  scenes: [
    { t: 'Tam kare ve karekök',
      base: '<svg class="an-svg" viewBox="0 0 330 150" role="img" aria-label="Alanı 9 olan karenin kenarı 3, alanı 16 olan karenin kenarı 4, alanı 20 olan karenin kenarı karekök 20">' +
        '<rect x="20" y="40" width="48" height="48" class="boxa rv s1"/><path class="ln rv s1" d="M36 40v48M52 40v48M20 56h48M20 72h48"/>' +
        '<text x="44" y="108" font-size="14" text-anchor="middle" class="rv s1">kenar 3</text><text x="44" y="128" font-size="13" text-anchor="middle" class="mut rv s1">alan 9</text>' +
        '<rect x="112" y="24" width="64" height="64" class="boxa rv s2"/><path class="ln rv s2" d="M128 24v64M144 24v64M160 24v64M112 40h64M112 56h64M112 72h64"/>' +
        '<text x="144" y="108" font-size="14" text-anchor="middle" class="rv s2">kenar 4</text><text x="144" y="128" font-size="13" text-anchor="middle" class="mut rv s2">alan 16</text>' +
        '<rect x="222" y="17" width="72" height="72" class="boxa rv s3"/><text x="258" y="58" font-size="15" text-anchor="middle" font-weight="700" class="rv s3">20</text>' +
        '<text x="258" y="108" font-size="14" text-anchor="middle" font-weight="700" class="acc rv s3">kenar √20</text><text x="258" y="128" font-size="13" text-anchor="middle" class="mut rv s3">4 ile 5 arasında</text></svg>',
      steps: [
        { s: 'Merhaba! Karekök aslında bir kare sorusu. Alanı 9 olan bir karenin kenarı kaçtır? Tabii ki 3.', on: '.s1' },
        { s: 'Alanı 16 olan karenin kenarı da 4. 1, 4, 9, 16 gibi sayılara tam kare sayılar diyoruz.', on: '.s2' },
        { s: 'Peki alanı 20 olsa? Kenar artık doğal sayı değil. Ona “karekök 20” diyoruz ve √20 yazıyoruz.', v: 'Peki alanı yirmi olsa? Kenar artık doğal sayı değil. Ona karekök yirmi diyoruz, ve kök işaretiyle yazıyoruz.', on: '.s3' },
        { s: '√x, karesi x olan negatif olmayan sayıdır. Kare almak ile karekök almak birbirinin tersidir.', v: 'Karekök x, karesi x olan negatif olmayan sayıdır. Kare almak ile karekök almak, birbirinin tersidir.',
          h: '<div class="an-rule"><b>√x</b>: karesi x olan negatif olmayan sayı<br><small>√(7<sup>2</sup>) = 7 &nbsp;·&nbsp; (√7)<sup>2</sup> = 7</small></div>' }
      ] },

    { t: 'Tam kareyi tanımak',
      steps: [
        { s: 'Şu karelerin 20’ye kadarını ezbere bilmek sana çok zaman kazandırır.', v: 'Şu karelerin yirmiye kadarını ezbere bilmek, sana çok zaman kazandırır.',
          h: '<table class="an-tbl" style="text-align:center"><tr><td>1</td><td>4</td><td>9</td><td>16</td><td>25</td></tr><tr><td>36</td><td>49</td><td>64</td><td>81</td><td>100</td></tr><tr><td>121</td><td>144</td><td>169</td><td>196</td><td>225</td></tr><tr><td>256</td><td>289</td><td>324</td><td>361</td><td>400</td></tr></table>' },
        { s: 'Büyük bir sayı tam kare mi? Asal çarpanlarına ayır. Bütün üsler çiftse tam karedir.',
          h: '<div class="an-ex"><span class="an-l">144 = 2<sup>4</sup> · 3<sup>2</sup> → √144 = 2<sup>2</sup> · 3 = <b>12</b> ✓</span><span class="an-l">180 = 2<sup>2</sup> · 3<sup>2</sup> · 5 → 5’in üssü tek ✗</span></div>' },
        { s: 'Mesela 144’te üsler 4 ve 2, ikisi de çift. Kökte üsler yarıya iner, 12 çıkar.', v: 'Mesela yüz kırk dörtte üsler dört ve iki; ikisi de çift. Kökte üsler yarıya iner, on iki çıkar.' },
        { s: 'Bir de hızlı eleme: birler basamağı 2, 3, 7 ya da 8 olan sayı asla tam kare olamaz.', v: 'Bir de hızlı eleme: birler basamağı iki, üç, yedi ya da sekiz olan sayı, asla tam kare olamaz.' },
        { s: 'Ve şuna dikkat: √25 = 5’tir. −5 yazmıyoruz, çünkü kök işareti negatif olmayan sonucu verir.', v: 'Ve şuna dikkat: karekök yirmi beş, beştir. Eksi beş yazmıyoruz, çünkü kök işareti negatif olmayan sonucu verir.',
          h: '<div class="an-trap">√25 = <span class="an-ok-t">5</span> &nbsp; <span class="an-bad-t">±5</span> &nbsp;·&nbsp; √(−4) bu sınıfta yok</div>' }
      ] },

    { t: 'Hangi iki doğal sayı arasında?',
      base: '<svg class="an-svg" viewBox="0 0 340 130" role="img" aria-label="5 ile 7 arasındaki sayı doğrusu; karekök 31, 5 ile 6 arasında ve 6 ya daha yakın">' +
        '<path class="ln" d="M16 70H326M30 62v16M170 62v16M310 62v16"/><path class="ln" d="M100 66v8M240 66v8" stroke-dasharray="3 3"/>' +
        '<text x="30" y="98" font-size="16" text-anchor="middle" font-weight="700">5</text><text x="170" y="98" font-size="16" text-anchor="middle" font-weight="700">6</text><text x="310" y="98" font-size="16" text-anchor="middle" font-weight="700">7</text>' +
        '<text x="30" y="118" font-size="12" text-anchor="middle" class="mut">√25</text><text x="170" y="118" font-size="12" text-anchor="middle" class="mut">√36</text><text x="310" y="118" font-size="12" text-anchor="middle" class="mut">√49</text>' +
        '<text x="100" y="92" font-size="11" text-anchor="middle" class="mut rv m1">5,5</text>' +
        '<circle cx="109.5" cy="70" r="6" class="boxa rv p1"/><text x="109.5" y="46" font-size="15" text-anchor="middle" font-weight="700" class="acc rv p1">√31</text>' +
        '<path class="st2 dr m2" d="M115 58 Q140 30 165 58"/><text x="140" y="28" font-size="12" text-anchor="middle" class="rv m2">6’ya yakın</text></svg>',
      steps: [
        { s: 'LGS’de en sık gelen soru tipi bu: √31 hangi iki doğal sayı arasında?', v: 'Le ge se’de en sık gelen soru tipi bu: karekök otuz bir, hangi iki doğal sayı arasında?' },
        { s: '31’in hemen altındaki tam kare 25, hemen üstündeki 36. O hâlde √31, 5 ile 6 arasında.', v: 'Otuz birin hemen altındaki tam kare yirmi beş, hemen üstündeki otuz altı. O hâlde karekök otuz bir, beş ile altı arasında.', on: '.p1',
          h: '<div class="an-rule">25 < 31 < 36 &nbsp;⇒&nbsp; <b>5 < √31 < 6</b></div>' },
        { s: 'Peki hangisine daha yakın? Orta nokta 5,5’in karesine bakalım: 30,25.', v: 'Peki hangisine daha yakın? Orta nokta beş buçuğun karesine bakalım: otuz virgül yirmi beş.', on: '.m1' },
        { s: '31, 30,25’ten büyük. Yani √31 orta noktayı geçmiş, 6’ya daha yakın.', v: 'Otuz bir, otuz virgül yirmi beşten büyük. Yani karekök otuz bir, orta noktayı geçmiş; altıya daha yakın.', on: '.m2' },
        { s: 'Doğal sayılar için kısa yol da var: 25’ten 30’a kadarının kökü 5’e, 31’den 36’ya kadarının kökü 6’ya yakın.', v: 'Doğal sayılar için kısa yol da var: yirmi beşten otuza kadarının kökü beşe, otuz birden otuz altıya kadarının kökü altıya yakın.',
          h: '<div class="an-tip">n<sup>2</sup> … n<sup>2</sup> + n → n’ye yakın &nbsp;·&nbsp; n<sup>2</sup> + n + 1 … (n + 1)<sup>2</sup> → n + 1’e yakın</div>' }
      ] },

    { t: 'Kaç sayı var, kaç parça lazım?',
      steps: [
        { s: 'Bazen de şöyle sorarlar: karekökü 6 ile 7 arasında olan kaç doğal sayı var?', v: 'Bazen de şöyle sorarlar: karekökü altı ile yedi arasında olan kaç doğal sayı var?',
          h: '<div class="an-ex"><span class="an-l">6 < √x < 7 &nbsp;⇒&nbsp; 36 < x < 49</span><span class="an-l">x = 37, 38, …, 48 → <b>12 sayı</b> = 2 · 6</span></div>' },
        { s: 'Kareleri al: 36 ile 49 arası. 37’den 48’e kadar 12 sayı. Kısa yol: 2 çarpı 6.', v: 'Kareleri al: otuz altı ile kırk dokuz arası. Otuz yediden kırk sekize kadar, on iki sayı. Kısa yol: iki çarpı altı.' },
        { s: 'Bir de pratik tuzak var. √75 cm’lik kenara 1 cm’lik fayans dizeceğiz. Kaç tane lazım?', v: 'Bir de pratik bir tuzak var. Karekök yetmiş beş santimetrelik kenara, bir santimetrelik fayans dizeceğiz. Kaç tane lazım?' },
        { s: '√75 yaklaşık 8,66. 8 fayans koyarsan kenar dolmaz, en az 9 tane gerekir.', v: 'Karekök yetmiş beş, yaklaşık sekiz virgül altmış altı. Sekiz fayans koyarsan kenar dolmaz; en az dokuz tane gerekir.',
          h: '<div class="an-trap">Tam kısmı almak her zaman cevap değildir. Soru “yetmesi” istiyorsa bir üst sayıya çık.</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p><b>√75</b> sayısı için aşağıdakilerden hangisi doğrudur?</p>',
        c: ['7 ile 8 arasında, 8’e daha yakın', '8 ile 9 arasında, 8’e daha yakın', '8 ile 9 arasında, 9’a daha yakın', '9 ile 10 arasında, 9’a daha yakın'], a: 'C',
        hint: '75’in altındaki ve üstündeki tam kareleri bul. Sonra 8,5’in karesiyle karşılaştır.',
        hintV: 'Yetmiş beşin altındaki ve üstündeki tam kareleri bul. Sonra sekiz buçuğun karesiyle karşılaştır.',
        why: '64 < 75 < 81 → 8 < √75 < 9. 8,5<sup>2</sup> = 72,25 ve 75 > 72,25, yani √75 9’a daha yakın.',
        whyV: 'Altmış dört, yetmiş beşten küçük; seksen bir de büyük. Yani kök sekiz ile dokuz arasında. Sekiz buçuğun karesi yetmiş iki virgül yirmi beş; yetmiş beş bundan büyük, o yüzden dokuza daha yakın.' },
      steps: [{ s: 'İlk soru geldi! Önce aralığı, sonra yakınlığı düşün.' }] },

    { t: 'a√b biçimi',
      steps: [
        { s: 'Şimdi kökün içini sadeleştirmeyi öğrenelim. Fikir şu: içerideki tam kare çarpan dışarı çıkabilir.',
          h: '<div class="an-big">√(a<sup>2</sup> · b) = a√b</div>', v: 'Şimdi kökün içini sadeleştirmeyi öğrenelim. Fikir şu: içerideki tam kare çarpan, dışarı çıkabilir.' },
        { s: '√72’ye bakalım. 72’nin içindeki en büyük tam kare 36. 72 = 36 · 2.', v: 'Karekök yetmiş ikiye bakalım. Yetmiş ikinin içindeki en büyük tam kare otuz altı. Yetmiş iki, otuz altı çarpı iki.',
          h: '<div class="an-ex"><span class="an-l">√72 = √(36 · 2)</span><span class="an-l rv x1">= √36 · √2 = <b>6√2</b></span></div>' },
        { s: '36’nın kökü 6, dışarı çıkar. 2 içeride kalır: 6√2.', v: 'Otuz altının kökü altı; dışarı çıkar. İki içeride kalır: altı kök iki.', on: '.x1' },
        { s: 'Tersine, kök içine alırken katsayının karesi girer: 3√5 = √45. √15 değil!', v: 'Tersine, kök içine alırken katsayının karesi girer: üç kök beş, karekök kırk beştir. Karekök on beş değil!',
          h: '<div class="an-trap">3√5 = √(9 · 5) = <span class="an-ok-t">√45</span> &nbsp; <span class="an-bad-t">√15</span></div>' },
        { s: 'Bir püf noktası: √72’yi 2√18 yazmak yanlış değil ama en sade hâl değil. 18’in içinde hâlâ 9 var.', v: 'Bir püf noktası: karekök yetmiş ikiyi iki kök on sekiz yazmak yanlış değil, ama en sade hâl değil. On sekizin içinde hâlâ dokuz var.' }
      ] },

    { t: 'Karşılaştırma ve sıralama',
      base: '<table class="an-tbl"><tr><th>Sayı</th><th>Kök içine al</th></tr>' +
        '<tr class="rv o1"><td>2√7</td><td>√28</td></tr><tr class="rv o1"><td>3√3</td><td>√27</td></tr>' +
        '<tr class="rv o1"><td>4√2</td><td>√32</td></tr><tr class="rv o1"><td>5</td><td>√25</td></tr></table>',
      steps: [
        { s: 'Katsayılı kökleri karşılaştırmak zor görünür. Ama bir hilesi var: hepsini kök içine al.' },
        { s: '2√7 = √28, 3√3 = √27, 4√2 = √32. Doğal sayı 5’i bile √25 yaparız.', v: 'İki kök yedi, karekök yirmi sekiz. Üç kök üç, karekök yirmi yedi. Dört kök iki, karekök otuz iki. Doğal sayı beşi bile, karekök yirmi beş yaparız.', on: '.o1' },
        { s: 'Artık içlere bakmak yeter: 25 < 27 < 28 < 32.', v: 'Artık içlere bakmak yeter: yirmi beş, yirmi yedi, yirmi sekiz, otuz iki.',
          h: '<div class="an-rule"><b>5 < 3√3 < 2√7 < 4√2</b></div>' },
        { s: 'LGS’de “4√5 mi büyük, 9 mu?” gibi sorular da gelir. √80 ile √81: 9 biraz daha büyük.', v: 'Le ge se’de, dört kök beş mi büyük, dokuz mu, gibi sorular da gelir. Karekök seksen ile karekök seksen bir: dokuz biraz daha büyük.' }
      ] },

    { t: 'Çarpma ve bölme',
      steps: [
        { s: 'Çarpma ve bölmede işler çok rahat: kökleri birleştir, içeride işlem yap.',
          h: '<div class="an-rule"><b>√a · √b = √(a · b)</b> &nbsp; <b>√a ÷ √b = √(a ÷ b)</b></div>' },
        { s: 'Örneğin √3 · √12 = √36 = 6. √50 ÷ √2 = √25 = 5.', v: 'Örneğin karekök üç çarpı karekök on iki, karekök otuz altı, yani altı. Karekök elli bölü karekök iki, karekök yirmi beş, yani beş.',
          h: '<div class="an-ex"><span class="an-l">√3 · √12 = √36 = 6</span><span class="an-l">√50 ÷ √2 = √25 = 5</span><span class="an-l">2√5 · 3√2 = 6√10</span></div>' },
        { s: 'Katsayı varsa katsayılar kendi arasında, kökler kendi arasında çarpılır: 2√5 · 3√2 = 6√10.', v: 'Katsayı varsa, katsayılar kendi arasında, kökler kendi arasında çarpılır: iki kök beş çarpı üç kök iki, altı kök on.' },
        { s: 'Kenarları √18 ve √8 olan dikdörtgenin alanı √144, yani 12 cm². Alan soruları hep böyle gelir.', v: 'Kenarları karekök on sekiz ve karekök sekiz olan dikdörtgenin alanı karekök yüz kırk dört, yani on iki santimetrekare. Alan soruları hep böyle gelir.' },
        { s: 'Burada çok dikkat et: (2√3)² = 4 · 3 = 12. Katsayının da karesi alınır.', v: 'Burada çok dikkat et: iki kök üçün karesi, dört çarpı üç, yani on iki. Katsayının da karesi alınır.',
          h: '<div class="an-trap">(2√3)<sup>2</sup> = 4 · 3 = <span class="an-ok-t">12</span> &nbsp; <span class="an-bad-t">6</span> &nbsp; <span class="an-bad-t">36</span></div>' }
      ] },

    { t: 'Toplama ve çıkarma',
      steps: [
        { s: 'Toplamada kural farklı. Yalnızca kök içleri aynı olan terimler toplanır, tıpkı 2 elma + 5 elma gibi.', v: 'Toplamada kural farklı. Yalnızca kök içleri aynı olan terimler toplanır; tıpkı iki elma artı beş elma gibi.',
          h: '<div class="an-rule"><b>a√b + c√b = (a + c)√b</b></div>' },
        { s: 'Önce sadeleştir, sonra topla: √12 + √75 = 2√3 + 5√3 = 7√3.', v: 'Önce sadeleştir, sonra topla: karekök on iki artı karekök yetmiş beş; iki kök üç artı beş kök üç, yedi kök üç.',
          h: '<div class="an-ex"><span class="an-l">√12 + √75 = 2√3 + 5√3 = 7√3</span><span class="an-l">√50 − √8 = 5√2 − 2√2 = 3√2</span></div>' },
        { s: 'Sadeleştikten sonra içler yine farklıysa toplam tek terim olmaz: √8 + √27 = 2√2 + 3√3.', v: 'Sadeleştikten sonra içler yine farklıysa, toplam tek terim olmaz: karekök sekiz artı karekök yirmi yedi, iki kök iki artı üç kök üç olarak kalır.' },
        { s: 'Ve en büyük tuzak: kökleri toplayıp içleri birleştirmek. √9 + √16, √25 değildir!', v: 'Ve en büyük tuzak: kökleri toplarken içleri birleştirmek. Karekök dokuz artı karekök on altı, karekök yirmi beş değildir!',
          h: '<div class="an-trap">√9 + √16 = 3 + 4 = <span class="an-ok-t">7</span> &nbsp; <span class="an-bad-t">√25 = 5</span><br>√80 + √80 = 2√80 = 8√5, √160 değil</div>' }
      ] },

    { t: 'Çözümlü örnek: yan yana kareler',
      base: '<svg class="an-svg" viewBox="0 0 300 165" role="img" aria-label="Alanı 50 ve 18 santimetrekare olan iki kare yan yana yapıştırılmış">' +
        '<rect x="40" y="20" width="113" height="113" class="box"/><rect x="153" y="65" width="68" height="68" class="box"/>' +
        '<text x="96" y="82" font-size="16" text-anchor="middle" font-weight="700">50 cm²</text><text x="187" y="104" font-size="14" text-anchor="middle" font-weight="700">18 cm²</text>' +
        '<text x="96" y="152" font-size="14" text-anchor="middle" class="acc rv c1">5√2</text><text x="187" y="152" font-size="14" text-anchor="middle" class="acc rv c1">3√2</text>' +
        '<text x="34" y="82" font-size="14" text-anchor="end" class="acc rv c1">5√2</text><text x="228" y="104" font-size="14" class="acc rv c1">3√2</text><text x="160" y="48" font-size="14" class="acc rv c1">2√2</text>' +
        '<path class="st dr c2" d="M40 133H221V65H153V20H40Z"/></svg>',
      steps: [
        { s: 'Alanları 50 cm² ve 18 cm² olan iki kare yan yana yapıştırılıyor. Şeklin çevresi kaç cm?', v: 'Alanları elli ve on sekiz santimetrekare olan iki kare, yan yana yapıştırılıyor. Şeklin çevresi kaç santimetre?' },
        { s: 'Önce kenarlar: √50 = 5√2 ve √18 = 3√2. Sağdaki küçük basamak da 5√2 − 3√2 = 2√2.', v: 'Önce kenarlar: karekök elli, beş kök iki; karekök on sekiz, üç kök iki. Aradaki küçük basamak da, beş kök iki eksi üç kök iki, yani iki kök iki.', on: '.c1' },
        { s: 'Şimdi şeklin dışını dolaşalım. Yapışan kenar artık dışarıda değil, onu saymıyoruz.', on: '.c2', w: 900 },
        { s: 'Yatay kenarlar 8√2 + 8√2, dikey kenarlar 5√2 + 5√2. Toplam 26√2 cm.', v: 'Yatay kenarlar sekiz kök iki artı sekiz kök iki; dikey kenarlar beş kök iki artı beş kök iki. Toplam, yirmi altı kök iki santimetre.',
          h: '<div class="an-ex"><span class="an-l">Çevre = 8√2 + 8√2 + 5√2 + 5√2 = <b>26√2 cm</b></span></div>' },
        { s: 'Tuzak: iki karenin çevrelerini toplayıp 32√2 demek. Yapışan 3√2’lik kenar iki kez sayılmış olur.', v: 'Tuzak: iki karenin çevrelerini toplayıp otuz iki kök iki demek. Böylece yapışan üç kök ikilik kenar iki kez sayılmış olur.',
          h: '<div class="an-trap">32√2 − 2 · 3√2 = 26√2</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Alanları 12 cm², 27 cm² ve 48 cm² olan üç kare, alt kenarları aynı doğru üzerinde olacak biçimde boşluksuz yan yana diziliyor. Alt kenarların toplam uzunluğu kaç cm’dir?</p>',
        c: ['√87', '9√3', '9√9', '29√3'], a: 'B',
        hint: 'Her karenin kenarını a√3 biçimine getir. Kök içlerini toplamak yasak!',
        hintV: 'Her karenin kenarını, a kök üç biçimine getir. Kök içlerini toplamak yasak!',
        why: '√12 = 2√3, √27 = 3√3, √48 = 4√3. Toplam 2√3 + 3√3 + 4√3 = 9√3 cm.',
        whyV: 'Karekök on iki, iki kök üç. Karekök yirmi yedi, üç kök üç. Karekök kırk sekiz, dört kök üç. Toplam dokuz kök üç santimetre.' },
      steps: [{ s: 'Sıra sende. Önce sadeleştir, sonra topla.' }] },

    { t: 'Sonucu doğal sayı yapan çarpan',
      steps: [
        { s: 'Şimdi şu soruya bakalım: √12’yi hangi sayıyla çarparsak sonuç doğal sayı olur?', v: 'Şimdi şu soruya bakalım: karekök on ikiyi hangi sayıyla çarparsak, sonuç doğal sayı olur?' },
        { s: 'Önce sadeleştir: √12 = 2√3. Kökten kurtulmak için yine bir √3’e ihtiyacımız var.', v: 'Önce sadeleştir: karekök on iki, iki kök üç. Kökten kurtulmak için, yine bir kök üçe ihtiyacımız var.',
          h: '<div class="an-ex"><span class="an-l">√12 = 2√3</span><span class="an-l">uygun: √3, 2√3, √27, √48, √75 … (hepsi k√3)</span><span class="an-l">uygun değil: √6, √24, 3√2</span></div>' },
        { s: 'Yani çarpan k√3 biçiminde olmalı: √3, √27, √48 hepsi olur. √24 olmaz, çünkü √24 = 2√6.', v: 'Yani çarpan k kök üç biçiminde olmalı: kök üç, kök yirmi yedi, kök kırk sekiz, hepsi olur. Kök yirmi dört olmaz, çünkü o iki kök altı.' },
        { s: 'LGS tipi bir örnek: √72 · √x doğal sayı, x iki basamaklı. x kaç farklı değer alır?', v: 'Le ge se tipi bir örnek: karekök yetmiş iki çarpı karekök x, doğal sayı; x de iki basamaklı. x kaç farklı değer alır?',
          h: '<div class="an-ex"><span class="an-l">√72 = 6√2 → x = 2 · k<sup>2</sup></span><span class="an-l">18, 32, 50, 72, 98 → <b>5 değer</b></span></div>' },
        { s: '√72 = 6√2, yani x = 2 çarpı bir tam kare olmalı: 18, 32, 50, 72, 98. Tam 5 değer.', v: 'Karekök yetmiş iki, altı kök iki. Yani x, iki çarpı bir tam kare olmalı: on sekiz, otuz iki, elli, yetmiş iki, doksan sekiz. Tam beş değer.' }
      ] },

    { t: 'Ondalık sayıların karekökü',
      steps: [
        { s: 'Ondalık sayının kökünü almak için önce kesre çevir. √0,49 = √({{49|100}}) = {{7|10}} = 0,7.', v: 'Ondalık sayının kökünü almak için önce kesre çevir. Karekök sıfır virgül kırk dokuz; yüzde kırk dokuzun kökü, onda yedi, yani sıfır virgül yedi.',
          h: '<div class="an-ex"><span class="an-l">√0,49 = √{{49|100}} = {{7|10}} = 0,7</span><span class="an-l">√1,44 = 1,2 &nbsp;·&nbsp; √0,0009 = 0,03</span></div>' },
        { s: 'Kısa yol: virgülden sonraki basamak sayısı çift olmalı, kökte bu sayı yarıya iner.', v: 'Kısa yol: virgülden sonraki basamak sayısı çift olmalı; kökte bu sayı yarıya iner.' },
        { s: 'Kontrol etmek istersen sonucun karesini al: 1,2 · 1,2 = 1,44. Tamam.', v: 'Kontrol etmek istersen sonucun karesini al: bir virgül iki çarpı bir virgül iki, bir virgül kırk dört. Tamam.' },
        { s: 'Ve şu tuzağa düşme: √0,4, 0,2 değildir! Çünkü 0,2’nin karesi 0,04.', v: 'Ve şu tuzağa düşme: karekök sıfır virgül dört, sıfır virgül iki değildir! Çünkü sıfır virgül ikinin karesi, sıfır virgül sıfır dört.',
          h: '<div class="an-trap"><span class="an-bad-t">√0,4 = 0,2</span> &nbsp; <span class="an-bad-t">√0,9 = 0,3</span><br>0,4 = {{4|10}}: payda 10 tam kare değil, √0,4 irrasyoneldir.</div>' }
      ] },

    { t: 'Rasyonel mi, irrasyonel mi?',
      base: '<svg class="an-svg" viewBox="0 0 330 170" role="img" aria-label="Gerçek sayılar: rasyonel sayılar içinde tam sayılar ve doğal sayılar; yanında irrasyonel sayılar">' +
        '<rect x="6" y="6" width="318" height="158" rx="14" class="box"/><text x="18" y="28" font-size="16" font-weight="700">ℝ gerçek sayılar</text>' +
        '<rect x="16" y="38" width="190" height="118" rx="12" class="boxa rv r1"/><text x="26" y="58" font-size="14" font-weight="700" class="rv r1">ℚ rasyonel</text><text x="26" y="146" font-size="12" class="mut rv r1">½, 0,25, 1,5, √1,44</text>' +
        '<rect x="80" y="66" width="116" height="62" rx="10" class="box rv r1"/><text x="90" y="84" font-size="13" font-weight="700" class="rv r1">ℤ tam: −5</text>' +
        '<rect x="96" y="92" width="92" height="30" rx="8" class="boxa rv r1"/><text x="142" y="112" font-size="12.5" text-anchor="middle" class="rv r1">ℕ: 0, 1, √49</text>' +
        '<rect x="214" y="38" width="100" height="118" rx="12" class="boxa rv r2"/><text x="224" y="58" font-size="14" font-weight="700" class="rv r2">irrasyonel</text>' +
        '<text x="224" y="86" font-size="14" class="acc rv r2">√2, √3</text><text x="224" y="110" font-size="14" class="acc rv r2">2√7, √1,6</text><text x="224" y="134" font-size="14" class="acc rv r2">π</text></svg>',
      steps: [
        { s: 'Son durak: sayı türleri. Rasyonel sayı, iki tam sayının oranı olarak yazılabilen sayıdır. Ondalığı ya biter ya devreder.', on: '.r1' },
        { s: 'İrrasyonel sayının ondalığı devirsiz ve sonsuzdur. Tam kare olmayan sayıların kökleri ve π böyledir.', v: 'İrrasyonel sayının ondalığı devirsiz ve sonsuzdur. Tam kare olmayan sayıların kökleri ve pi böyledir.', on: '.r2' },
        { s: 'İkisi birlikte gerçek sayıları oluşturur. Sayı doğrusundaki her nokta bir gerçek sayıdır.' },
        { s: 'Burada dikkat et: kök işareti görmek sayıyı irrasyonel yapmaz! √49, √1,44, √({{9|4}}) hepsi rasyonel.', v: 'Burada dikkat et: kök işareti görmek, sayıyı irrasyonel yapmaz! Karekök kırk dokuz, karekök bir virgül kırk dört, karekök dörtte dokuz; hepsi rasyonel.',
          h: '<div class="an-trap">Kök içini kesir yap: payı ve paydası tam kareyse <b>rasyonel</b>. √3 · √27 = √81 = 9 da rasyoneldir.</div>' },
        { s: 'İşlemlerde π yerine yaklaşık 3, 3,14 ya da {{22|7}} alınabilir. Ama bunlar yaklaşık değerlerdir.', v: 'İşlemlerde pi yerine yaklaşık üç, üç virgül on dört, ya da yedide yirmi iki alınabilir. Ama bunlar yaklaşık değerlerdir.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdakilerden hangisi <b>irrasyonel</b> sayıdır?</p>',
        c: ['√1,44', '√0,16', '√{{9|4}}', '√1,6'], a: 'D',
        hint: 'Her birini kesir yap: payı ve paydası tam kare olmayan hangisi?',
        why: '√1,44 = 1,2, √0,16 = 0,4, √{{9|4}} = {{3|2}} rasyoneldir. 1,6 = {{16|10}} = {{8|5}}; 8 ve 5 tam kare değil, √1,6 irrasyoneldir.',
        whyV: 'Karekök bir virgül kırk dört, bir virgül iki. Karekök sıfır virgül on altı, sıfır virgül dört. Karekök dörtte dokuz da, ikide üç. Bunlar rasyonel. Bir virgül altı ise beşte sekiz; sekiz de beş de tam kare değil, bu yüzden karekök bir virgül altı irrasyoneldir.' },
      steps: [{ s: 'Son soru! Kök işaretine aldanma, kesre çevirip bak.' }] }
  ]
};
