/* Adım Adım Anlatım · Matematik · Eşitsizlikler (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['mat-esitsizlik'] = {
  title: 'Eşitsizlikler',
  desc: '“En az” ile “en fazla”yı sembole çevirmek, sayı doğrusunda dolu-boş daire, yön değiştiren işlem, eşitsizlik çözme ve “en az kaç sefer?” problemleri, sahne sahne.',
  ozet: [
    'Denklemin tek çözümü vardır; eşitsizliğin sonsuz çok. Bir sayının çözüm olup olmadığını yerine koyarak anla.',
    'en az 5 → x ≥ 5 · 5’ten az → x < 5 · en fazla 5 → x ≤ 5 · 5’ten fazla → x > 5.',
    'Sayı doğrusunda ≤ ve ≥ dolu daire, < ve > boş daire. Değişken tam sayıysa yalnız noktalar işaretlenir.',
    'Toplama, çıkarma ve pozitif sayıyla çarpma-bölme yönü değiştirmez; negatif sayıyla çarpma-bölme yönü ters çevirir.',
    'Bileşik eşitsizlikte her işlem üç tarafa birden yapılır.',
    'x > 2 ise en küçük tam sayı 3; x > −3,5 ise en küçük tam sayı −3.',
    '“En fazla kaç” → aşağı yuvarla; “en az kaç” → yukarı yuvarla. Eşit oldukları durum “daha ucuz” değildir.',
    'Gizli koşulları unutma: kütle, uzunluk pozitif; kişi ve ürün sayısı doğal sayı.'
  ],
  scenes: [
    { t: 'Eşitlik ile eşitsizlik',
      steps: [
        { s: 'Merhaba! Önce bir farkı görelim. 2x = 8 denkleminin tek bir çözümü var: x = 4.', v: 'Merhaba! Önce bir farkı görelim. İki iks eşittir sekiz denkleminin tek bir çözümü var: iks dört.',
          h: '<div class="an-ex"><span class="an-l">2x = 8 → <b>x = 4</b> (tek çözüm)</span><span class="an-l rv e1">2x < 8 → <b>x < 4</b>: 3; 2,5; 0; −1; −7,3 … (sonsuz çözüm)</span></div>' },
        { s: 'Peki 2x < 8 olsaydı? Bu kez 4’ten küçük bütün sayılar çözüm. Sonsuz tane!', v: 'Peki iki iks, sekizden küçük olsaydı? Bu kez dörtten küçük bütün sayılar çözüm. Sonsuz tane!', on: '.e1' },
        { s: 'Eşitsizliği sağlayan sayıların hepsine çözüm kümesi diyoruz.' },
        { s: 'Bir sayı çözüm mü? Yerine koy. x = 4 için 8 < 8 yanlış; yani 4 çözüm değil.', v: 'Bir sayı çözüm mü? Yerine koy. İks dört için, sekiz sekizden küçük yanlış; yani dört çözüm değil.' }
      ] },

    { t: 'Semboller ve günlük dil',
      base: '<table class="an-tbl"><tr><th>Sembol</th><th>Günlük dilde</th><th>Sınır</th></tr>' +
        '<tr class="rv s1"><td><b>x ≥ 5</b></td><td>en az 5, 5 ve üzeri, 5’in altına düşmeyen</td><td>dâhil</td></tr>' +
        '<tr class="rv s2"><td><b>x > 5</b></td><td>5’ten fazla, 5’i aşan, 5’in üstünde</td><td>değil</td></tr>' +
        '<tr class="rv s3"><td><b>x ≤ 5</b></td><td>en fazla 5, en çok 5, 5’i geçmeyen</td><td>dâhil</td></tr>' +
        '<tr class="rv s4"><td><b>x < 5</b></td><td>5’ten az, 5’in altında, 5’e ulaşmayan</td><td>değil</td></tr></table>',
      steps: [
        { s: 'Eşitsizlik sorularında işin yarısı Türkçe. Hangi kelime hangi sembol, ona bakalım.' },
        { s: '“En az 5” demek 5 de olur, daha fazlası da: x ≥ 5. “5’ten fazla” ise 5 olmaz: x > 5.', v: 'En az beş demek: beş de olur, daha fazlası da; büyük ya da eşit. Beşten fazla ise beş olmaz; kesin büyük.', on: '.s1,.s2' },
        { s: '“En fazla 5” 5’i de kapsar: x ≤ 5. “5’ten az” ise kapsamaz: x < 5.', v: 'En fazla beş, beşi de kapsar; küçük ya da eşit. Beşten az ise kapsamaz; kesin küçük.', on: '.s3,.s4' },
        { s: 'Burada çok dikkat et: “en az 5” ile “5’ten az” birbirinin tam tersi! LGS’de doğru cevabı çoğu zaman bu ayrıntı belirler.', v: 'Burada çok dikkat et: en az beş ile beşten az, birbirinin tam tersi! Le ge se’de doğru cevabı çoğu zaman bu ayrıntı belirler.',
          h: '<div class="an-trap">en az 5 → <b>x ≥ 5</b> &nbsp;·&nbsp; 5’ten az → <b>x < 5</b></div>' },
        { s: 'Eşitsizlik iki yönden de okunur: 7 > x ile x < 7 aynı şey. Sivri uç hep küçük tarafı gösterir.', v: 'Eşitsizlik iki yönden de okunur: yedi iksten büyük ile iks yediden küçük, aynı şey. Sivri uç hep küçük tarafı gösterir.' }
      ] },

    { t: 'Günlük hayattan matematik cümlesine',
      steps: [
        { s: 'Şu levhalara bakalım. Kuralı, kurala uyan kişi ya da araç için yazıyoruz.',
          h: '<div class="an-grid"><div><b>v ≤ 50</b>azami hız 50</div><div><b>k ≤ 8</b>en fazla 8 kişi</div><div><b>h ≥ 120</b>120 cm altı binemez</div></div>' },
        { s: '“120 cm altı binemez” levhası, binebilenler için h ≥ 120 demektir. 120 cm olan biner!', v: 'Yüz yirmi santimetre altı binemez levhası, binebilenler için; boy yüz yirmiye eşit ya da büyük demektir. Yüz yirmi santimetre olan biner!' },
        { s: 'Cümle kurarken: bilinmeyeni seç, anahtar kelimeyi sembole çevir, iki tarafı yaz, gizli koşulları ekle.',
          h: '<div class="an-rule"><b>1.</b> bilinmeyeni seç · <b>2.</b> kelime → sembol · <b>3.</b> iki tarafı yaz · <b>4.</b> gizli koşullar (pozitif, doğal sayı)</div>' }
      ] },

    { t: 'Durumdan eşitsizliğe',
      base: '<table class="an-tbl"><tr><th>Durum</th><th>Cümle</th></tr>' +
        '<tr class="rv c1"><td>En fazla 630 kg taşıyan asansöre 80 kg’lık görevli ve 25 kg’lık n koli</td><td>80 + 25n ≤ 630</td></tr>' +
        '<tr class="rv c2"><td>Üç sınavın ortalaması en az 70; notlar 62, 75, x</td><td>{{62 + 75 + x|3}} ≥ 70</td></tr>' +
        '<tr class="rv c3"><td>Sol kefede x g’lık 3 kutu, sağda 240 g; sol kefe aşağıda</td><td>3x > 240</td></tr>' +
        '<tr class="rv c4"><td>Aşı 2 °C ile 8 °C arasında (dâhil) saklanır</td><td>2 ≤ T ≤ 8</td></tr></table>',
      steps: [
        { s: 'Asansör örneği: görevli ve koliler birlikte 630’u geçmemeli. 80 + 25n ≤ 630.', v: 'Asansör örneği: görevli ve koliler birlikte altı yüz otuzu geçmemeli. Seksen artı yirmi beş n, altı yüz otuza eşit ya da küçük.', on: '.c1' },
        { s: 'Ortalama soruları: toplamı sınav sayısına böl, “en az 70” için büyük eşittir kullan.', v: 'Ortalama soruları: toplamı sınav sayısına böl; en az yetmiş için, büyük ya da eşit kullan.', on: '.c2' },
        { s: 'Terazide aşağıda kalan kefe daha ağırdır. Sol aşağıdaysa 3x > 240.', v: 'Terazide aşağıda kalan kefe daha ağırdır. Sol aşağıdaysa, üç iks iki yüz kırktan büyük.', on: '.c3' },
        { s: 'İki sınırlı durumlar bileşik eşitsizlik olur: 2 ≤ T ≤ 8. “Arasında” kelimesinde uçların dâhil olup olmadığını metinden oku.', v: 'İki sınırlı durumlar bileşik eşitsizlik olur: T, iki ile sekiz arasında, uçlar dâhil. Arasında kelimesinde, uçların dâhil olup olmadığını metinden oku.', on: '.c4' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>En fazla 600 kg taşıyabilen bir yük asansörüne 75 kg’lık bir görevli ve her biri 30 kg olan n tane koli binecektir. Bu durumu gösteren eşitsizlik hangisidir?</p>',
        c: ['75 + 30n < 600', '75 + 30n ≤ 600', '75 + 30n ≥ 600', '30(75 + n) ≤ 600'], a: 'B',
        hint: '“En fazla 600” sınırı dâhil eder. Görevli bir kez, koliler n kez sayılır.',
        hintV: 'En fazla altı yüz, sınırı dâhil eder. Görevli bir kez, koliler n kez sayılır.',
        why: 'Toplam kütle 75 + 30n, en fazla 600 olabilir: 75 + 30n ≤ 600. Tam 600 kg da taşınabilir, bu yüzden < değil ≤.',
        whyV: 'Toplam kütle yetmiş beş artı otuz n; en fazla altı yüz olabilir. Tam altı yüz kilogram da taşınabilir; bu yüzden kesin küçük değil, küçük ya da eşit.' },
      steps: [{ s: 'Sıra sende! “En fazla” hangi sembol, hatırla.', v: 'Sıra sende! En fazla hangi sembol, hatırla.' }] },

    { t: 'Sayı doğrusunda gösterim',
      base: '<svg class="an-svg" viewBox="0 0 340 196" role="img" aria-label="Sayı doğrusunda x büyük eşit eksi 1, a küçük 1, eksi 3 küçük eşit t küçük 7 ve tam sayı x için eksi 2 küçük x küçük eşit 3"><g class="rv n1"><path class="ln" d="M18 32H320" style="stroke-width:1.6"/><path class="ln" d="M28 28v8M51.5 28v8M75 28v8M98.5 28v8M122 28v8M145.5 28v8M169 28v8M192.5 28v8M216 28v8M239.5 28v8M263 28v8M286.5 28v8M310 28v8" style="stroke-width:1.2"/><text x="28" y="48" font-size="10" text-anchor="middle" class="mut">-4</text><text x="51.5" y="48" font-size="10" text-anchor="middle" class="mut">-3</text><text x="75" y="48" font-size="10" text-anchor="middle" class="mut">-2</text><text x="98.5" y="48" font-size="10" text-anchor="middle" class="mut">-1</text><text x="122" y="48" font-size="10" text-anchor="middle" class="mut">0</text><text x="145.5" y="48" font-size="10" text-anchor="middle" class="mut">1</text><text x="169" y="48" font-size="10" text-anchor="middle" class="mut">2</text><text x="192.5" y="48" font-size="10" text-anchor="middle" class="mut">3</text><text x="216" y="48" font-size="10" text-anchor="middle" class="mut">4</text><text x="239.5" y="48" font-size="10" text-anchor="middle" class="mut">5</text><text x="263" y="48" font-size="10" text-anchor="middle" class="mut">6</text><text x="286.5" y="48" font-size="10" text-anchor="middle" class="mut">7</text><text x="310" y="48" font-size="10" text-anchor="middle" class="mut">8</text><text x="20" y="20" font-size="12.5" font-weight="700" class="acc">x ≥ −1</text></g><g class="rv n2"><path class="ln" d="M18 78H320" style="stroke-width:1.6"/><path class="ln" d="M28 74v8M51.5 74v8M75 74v8M98.5 74v8M122 74v8M145.5 74v8M169 74v8M192.5 74v8M216 74v8M239.5 74v8M263 74v8M286.5 74v8M310 74v8" style="stroke-width:1.2"/><text x="28" y="94" font-size="10" text-anchor="middle" class="mut">-4</text><text x="51.5" y="94" font-size="10" text-anchor="middle" class="mut">-3</text><text x="75" y="94" font-size="10" text-anchor="middle" class="mut">-2</text><text x="98.5" y="94" font-size="10" text-anchor="middle" class="mut">-1</text><text x="122" y="94" font-size="10" text-anchor="middle" class="mut">0</text><text x="145.5" y="94" font-size="10" text-anchor="middle" class="mut">1</text><text x="169" y="94" font-size="10" text-anchor="middle" class="mut">2</text><text x="192.5" y="94" font-size="10" text-anchor="middle" class="mut">3</text><text x="216" y="94" font-size="10" text-anchor="middle" class="mut">4</text><text x="239.5" y="94" font-size="10" text-anchor="middle" class="mut">5</text><text x="263" y="94" font-size="10" text-anchor="middle" class="mut">6</text><text x="286.5" y="94" font-size="10" text-anchor="middle" class="mut">7</text><text x="310" y="94" font-size="10" text-anchor="middle" class="mut">8</text><text x="20" y="66" font-size="12.5" font-weight="700" class="acc">a < 1</text></g><g class="rv n3"><path class="ln" d="M18 124H320" style="stroke-width:1.6"/><path class="ln" d="M28 120v8M51.5 120v8M75 120v8M98.5 120v8M122 120v8M145.5 120v8M169 120v8M192.5 120v8M216 120v8M239.5 120v8M263 120v8M286.5 120v8M310 120v8" style="stroke-width:1.2"/><text x="28" y="140" font-size="10" text-anchor="middle" class="mut">-4</text><text x="51.5" y="140" font-size="10" text-anchor="middle" class="mut">-3</text><text x="75" y="140" font-size="10" text-anchor="middle" class="mut">-2</text><text x="98.5" y="140" font-size="10" text-anchor="middle" class="mut">-1</text><text x="122" y="140" font-size="10" text-anchor="middle" class="mut">0</text><text x="145.5" y="140" font-size="10" text-anchor="middle" class="mut">1</text><text x="169" y="140" font-size="10" text-anchor="middle" class="mut">2</text><text x="192.5" y="140" font-size="10" text-anchor="middle" class="mut">3</text><text x="216" y="140" font-size="10" text-anchor="middle" class="mut">4</text><text x="239.5" y="140" font-size="10" text-anchor="middle" class="mut">5</text><text x="263" y="140" font-size="10" text-anchor="middle" class="mut">6</text><text x="286.5" y="140" font-size="10" text-anchor="middle" class="mut">7</text><text x="310" y="140" font-size="10" text-anchor="middle" class="mut">8</text><text x="20" y="112" font-size="12.5" font-weight="700" class="acc">−3 ≤ t < 7</text></g><g class="rv n4"><path class="ln" d="M18 170H320" style="stroke-width:1.6"/><path class="ln" d="M28 166v8M51.5 166v8M75 166v8M98.5 166v8M122 166v8M145.5 166v8M169 166v8M192.5 166v8M216 166v8M239.5 166v8M263 166v8M286.5 166v8M310 166v8" style="stroke-width:1.2"/><text x="28" y="186" font-size="10" text-anchor="middle" class="mut">-4</text><text x="51.5" y="186" font-size="10" text-anchor="middle" class="mut">-3</text><text x="75" y="186" font-size="10" text-anchor="middle" class="mut">-2</text><text x="98.5" y="186" font-size="10" text-anchor="middle" class="mut">-1</text><text x="122" y="186" font-size="10" text-anchor="middle" class="mut">0</text><text x="145.5" y="186" font-size="10" text-anchor="middle" class="mut">1</text><text x="169" y="186" font-size="10" text-anchor="middle" class="mut">2</text><text x="192.5" y="186" font-size="10" text-anchor="middle" class="mut">3</text><text x="216" y="186" font-size="10" text-anchor="middle" class="mut">4</text><text x="239.5" y="186" font-size="10" text-anchor="middle" class="mut">5</text><text x="263" y="186" font-size="10" text-anchor="middle" class="mut">6</text><text x="286.5" y="186" font-size="10" text-anchor="middle" class="mut">7</text><text x="310" y="186" font-size="10" text-anchor="middle" class="mut">8</text><text x="20" y="158" font-size="12.5" font-weight="700" class="acc">−2 < x ≤ 3 (x tam sayı)</text></g><path class="st dr n1" d="M98.5 32H316" style="stroke-width:5"/><path class="st dr n1" d="M314 26l9 6-9 6"/><circle cx="98.5" cy="32" r="6" class="rv n1" style="fill:var(--c);stroke:var(--c);stroke-width:2"/><path class="st dr n2" d="M139.5 78H22" style="stroke-width:5"/><path class="st dr n2" d="M24 72l-9 6 9 6"/><circle cx="145.5" cy="78" r="6" class="rv n2" style="fill:var(--card);stroke:var(--c);stroke-width:2.5"/><path class="st dr n3" d="M51.5 124H280.5" style="stroke-width:5"/><circle cx="51.5" cy="124" r="6" class="rv n3" style="fill:var(--c);stroke:var(--c);stroke-width:2"/><circle cx="286.5" cy="124" r="6" class="rv n3" style="fill:var(--card);stroke:var(--c);stroke-width:2.5"/><circle cx="98.5" cy="170" r="5.5" class="rv n4" style="fill:var(--c)"/><circle cx="122" cy="170" r="5.5" class="rv n4" style="fill:var(--c)"/><circle cx="145.5" cy="170" r="5.5" class="rv n4" style="fill:var(--c)"/><circle cx="169" cy="170" r="5.5" class="rv n4" style="fill:var(--c)"/><circle cx="192.5" cy="170" r="5.5" class="rv n4" style="fill:var(--c)"/></svg>',
      steps: [
        { s: 'Sınır dâhilse dolu daire, değilse boş daire. Büyükse sağa, küçükse sola boyarız.', h: '<div class="an-rule">● dolu: ≤, ≥ (dâhil) &nbsp;·&nbsp; ○ boş: <, > (dâhil değil)</div>' },
        { s: 'x ≥ −1: −1’de dolu daire, sağa doğru ok.', v: 'İks, eksi bire eşit ya da büyük: eksi birde dolu daire, sağa doğru ok.', on: '.n1' },
        { s: 'a < 1: 1’de boş daire, sola doğru ok.', v: 'A, birden küçük: birde boş daire, sola doğru ok.', on: '.n2' },
        { s: '−3 ≤ t < 7: iki sınır var. −3’te dolu, 7’de boş daire, arası boyalı.', v: 'Eksi üç, t’ye eşit ya da küçük; t de yediden küçük. İki sınır var: eksi üçte dolu, yedide boş daire; arası boyalı.', on: '.n3' },
        { s: 'Değişken tam sayıysa çizgi boyanmaz, sadece o sayılara nokta konur: −1, 0, 1, 2, 3.', v: 'Değişken tam sayıysa çizgi boyanmaz; sadece o sayılara nokta konur: eksi bir, sıfır, bir, iki, üç.', on: '.n4' }
      ] },

    { t: 'Kaç tam sayı var?',
      base: '<table class="an-tbl"><tr><th>Çözüm</th><th>Tam sayılar</th><th>Kaç?</th></tr>' +
        '<tr class="rv i1"><td>2 ≤ x ≤ 9</td><td>2, 3, …, 9</td><td>8</td></tr>' +
        '<tr class="rv i2"><td>2 < x ≤ 9</td><td>3, 4, …, 9</td><td>7</td></tr>' +
        '<tr class="rv i3"><td>2 < x < 9</td><td>3, 4, …, 8</td><td>6</td></tr></table>',
      steps: [
        { s: 'Sayı doğrusundan eşitsizlik yazarken önce sınırları, sonra dairelerin dolu-boş olduğunu, en son yönü oku.' },
        { s: 'İki uç da dâhilse 9 − 2 + 1 = 8 tam sayı.', v: 'İki uç da dâhilse; dokuz eksi iki artı bir, sekiz tam sayı.', on: '.i1' },
        { s: 'Bir uç dâhil değilse 7, iki uç da dâhil değilse 6 tam sayı kalır.', v: 'Bir uç dâhil değilse yedi, iki uç da dâhil değilse altı tam sayı kalır.', on: '.i2,.i3' },
        { s: 'Negatiflerde yönü karıştırma: x > −3,5 ise en küçük tam sayı −3’tür, −4 değil!', v: 'Negatiflerde yönü karıştırma: iks eksi üç buçuktan büyükse, en küçük tam sayı eksi üçtür; eksi dört değil!',
          h: '<div class="an-trap">x > 2 → en küçük tam sayı <b>3</b> &nbsp;·&nbsp; x < 4,6 → en büyük <b>4</b> &nbsp;·&nbsp; x > −3,5 → en küçük <b>−3</b></div>' }
      ] },

    { t: 'Hangi işlem yönü değiştirir?',
      base: '<svg class="an-svg" viewBox="0 0 340 104" role="img" aria-label="2 küçüktür 5; eksi 1 ile çarpınca eksi 2 büyüktür eksi 5"><path class="ln" d="M20 70H319.6" style="stroke-width:1.6"/><path class="ln" d="M30 66v8M53.3 66v8M76.6 66v8M99.9 66v8M123.2 66v8M146.5 66v8M169.8 66v8M193.1 66v8M216.4 66v8M239.7 66v8M263 66v8M286.3 66v8M309.6 66v8" style="stroke-width:1.2"/><text x="30" y="86" font-size="10" text-anchor="middle" class="mut">-6</text><text x="53.3" y="86" font-size="10" text-anchor="middle" class="mut">-5</text><text x="76.6" y="86" font-size="10" text-anchor="middle" class="mut">-4</text><text x="99.9" y="86" font-size="10" text-anchor="middle" class="mut">-3</text><text x="123.2" y="86" font-size="10" text-anchor="middle" class="mut">-2</text><text x="146.5" y="86" font-size="10" text-anchor="middle" class="mut">-1</text><text x="169.8" y="86" font-size="10" text-anchor="middle" class="mut">0</text><text x="193.1" y="86" font-size="10" text-anchor="middle" class="mut">1</text><text x="216.4" y="86" font-size="10" text-anchor="middle" class="mut">2</text><text x="239.7" y="86" font-size="10" text-anchor="middle" class="mut">3</text><text x="263" y="86" font-size="10" text-anchor="middle" class="mut">4</text><text x="286.3" y="86" font-size="10" text-anchor="middle" class="mut">5</text><text x="309.6" y="86" font-size="10" text-anchor="middle" class="mut">6</text><circle cx="216.4" cy="70" r="6" style="fill:var(--c)"/><circle cx="286.3" cy="70" r="6" style="fill:var(--c)"/><text x="251.35" y="96" font-size="13" text-anchor="middle" font-weight="700" class="acc">2 < 5</text><circle cx="123.2" cy="70" r="6" class="rv m1" style="fill:var(--noteline)"/><circle cx="53.3" cy="70" r="6" class="rv m1" style="fill:var(--noteline)"/><path class="st2 dr m1" d="M216.4 62 Q169.8 18 123.2 62"/><path class="st2 dr m1" d="M286.3 62 Q169.8 6 53.3 62" style="transition-delay:.3s"/><text x="88.25" y="96" font-size="13" text-anchor="middle" font-weight="700" class="rv m2" style="fill:var(--noteline)">−2 > −5</text><text x="170" y="14" font-size="12" text-anchor="middle" class="mut rv m2">× (−1): ayna gibi döner</text></svg>',
      steps: [
        { s: 'Eşitsizlik dengesi bozuk bir terazi gibi. İki kefeye aynı şeyi ekleyip çıkarırsan ağır kefe yine aşağıda kalır.' },
        { s: 'Pozitif bir sayıyla çarpıp bölmek de yönü değiştirmez: 3x ≤ 12 ise x ≤ 4.', v: 'Pozitif bir sayıyla çarpıp bölmek de yönü değiştirmez: üç iks on ikiye eşit ya da küçükse, iks de dörde eşit ya da küçük.' },
        { s: 'Ama negatif sayıyla çarpınca iş değişir. 2 < 5. İkisini −1’le çarpalım.', v: 'Ama negatif sayıyla çarpınca iş değişir. İki, beşten küçük. İkisini eksi birle çarpalım.' },
        { s: '−2 ile −5 çıktı. Şimdi −2, −5’ten büyük! Sayı doğrusu sıfır etrafında ayna gibi döndü.', v: 'Eksi iki ile eksi beş çıktı. Şimdi eksi iki, eksi beşten büyük! Sayı doğrusu sıfır etrafında, ayna gibi döndü.', on: '.m1,.m2', w: 700 },
        { s: 'Kural: negatif sayıyla çarparken ya da bölerken sembol ters döner.',
          h: '<div class="an-rule"><b>× (−) ya da ÷ (−) → sembol ters döner</b><br><small>−2x ≥ −6 → x ≤ 3 &nbsp;·&nbsp; −x < 4 → x > −4</small></div>' }
      ] },

    { t: 'Eşitsizlik çözmek',
      steps: [
        { s: 'Eşitsizlik, denklem gibi çözülür. Tek fark, negatife bölünce sembolü çevirmek.',
          h: '<div class="an-ex"><span class="an-l">5 − 2x < −7</span><span class="an-l rv z1">−2x < −12 &nbsp; <small>(5’i karşıya at)</small></span><span class="an-l rv z2">x <b>></b> 6 &nbsp; <small>(÷ (−2), yön döndü)</small></span><span class="an-l rv z3">en küçük tam sayı: <b>7</b></span></div>' },
        { s: '5’i karşıya atalım: −2x < −12.', v: 'Beşi karşıya atalım: eksi iki iks, eksi on ikiden küçük.', on: '.z1' },
        { s: 'Şimdi −2’ye bölüyoruz. Negatife böldüğümüz için sembol döner: x > 6.', v: 'Şimdi eksi ikiye bölüyoruz. Negatife böldüğümüz için sembol döner: iks altıdan büyük.', on: '.z2', mk: '.z2' },
        { s: 'En küçük tam sayı 7. Kontrol: 6 için 5 − 12 = −7, −7 < −7 yanlış. 7 için −9 < −7 doğru.', v: 'En küçük tam sayı yedi. Kontrol edelim: altı için, beş eksi on iki, eksi yedi; eksi yedi eksi yediden küçük, yanlış. Yedi için eksi dokuz, doğru.', on: '.z3' }
      ] },

    { t: 'Bileşik eşitsizlik çözmek',
      steps: [
        { s: 'İki sınırlı eşitsizlikte her işlemi üç tarafa birden yaparız. −3 ≤ 2x − 5 < 7’yi sağlayan tam sayıların toplamı?', v: 'İki sınırlı eşitsizlikte, her işlemi üç tarafa birden yaparız. Eksi üç, iki iks eksi beşe eşit ya da küçük; o da yediden küçük. Bunu sağlayan tam sayıların toplamı kaç?',
          h: '<div class="an-ex"><span class="an-l">−3 ≤ 2x − 5 < 7</span><span class="an-l rv b1">2 ≤ 2x < 12 &nbsp; <small>(+5)</small></span><span class="an-l rv b2">1 ≤ x < 6 &nbsp; <small>(÷2)</small></span><span class="an-l rv b3">1 + 2 + 3 + 4 + 5 = <b>15</b></span></div>' },
        { s: 'Üç tarafa 5 ekle: 2 ≤ 2x < 12.', v: 'Üç tarafa beş ekle: iki, iki ikse eşit ya da küçük; o da on ikiden küçük.', on: '.b1' },
        { s: 'Üç tarafı 2’ye böl: 1 ≤ x < 6.', v: 'Üç tarafı ikiye böl: iks, bire eşit ya da büyük, altıdan küçük.', on: '.b2' },
        { s: 'Tam sayılar 1’den 5’e. 6 dâhil değil! Toplam 15.', v: 'Tam sayılar birden beşe. Altı dâhil değil! Toplam on beş.', on: '.b3' },
        { s: 'Negatif sayıya bölersen iki sembol birden döner. Sonucu küçük sayı solda olacak şekilde yeniden yaz.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p><b>−1 < 2x + 3 ≤ 9</b> eşitsizliğini sağlayan kaç farklı <b>tam sayı</b> vardır?</p>',
        c: ['4', '5', '6', '7'], a: 'B',
        hint: 'Üç taraftan 3 çıkar, sonra üç tarafı 2’ye böl. Hangi uç dâhil, dikkat et.',
        hintV: 'Üç taraftan üç çıkar, sonra üç tarafı ikiye böl. Hangi uç dâhil, dikkat et.',
        why: '−4 < 2x ≤ 6 → −2 < x ≤ 3. Tam sayılar −1, 0, 1, 2, 3 → 5 tane (−2 dâhil değil).',
        whyV: 'Eksi dört, iki iksten küçük; iki iks altıya eşit ya da küçük. Bölünce: iks eksi ikiden büyük, üçe eşit ya da küçük. Tam sayılar eksi bir, sıfır, bir, iki, üç; beş tane. Eksi iki dâhil değil.' },
      steps: [{ s: 'Sıra sende! Üç tarafa birden işlem.' }] },

    { t: 'Problemlerde yuvarlama',
      base: '<svg class="an-svg" viewBox="0 0 340 120" role="img" aria-label="n büyük eşit 4,1 ise en az 5 alınır; k küçük eşit 14,6 ise en fazla 14 alınır"><path class="ln" d="M14 40H190" style="stroke-width:1.6"/><path class="ln" d="M24 36v8M76 36v8M128 36v8M180 36v8" style="stroke-width:1.2"/><text x="24" y="56" font-size="10" text-anchor="middle" class="mut">3</text><text x="76" y="56" font-size="10" text-anchor="middle" class="mut">4</text><text x="128" y="56" font-size="10" text-anchor="middle" class="mut">5</text><text x="180" y="56" font-size="10" text-anchor="middle" class="mut">6</text><path class="st" d="M81.2 40H184" style="stroke-width:5"/><circle cx="81.2" cy="40" r="5" style="fill:var(--c)"/><text x="81.2" y="24" font-size="12" text-anchor="middle" class="acc">4,1</text><circle cx="128" cy="40" r="10" class="st2 dr u1"/><text x="205" y="36" font-size="13" font-weight="700" class="rv u1">n ≥ 4,1</text><text x="205" y="54" font-size="13" font-weight="700" class="acc rv u1">en az 5 ↑</text><path class="ln" d="M14 94H190" style="stroke-width:1.6"/><path class="ln" d="M24 90v8M76 90v8M128 90v8M180 90v8" style="stroke-width:1.2"/><text x="24" y="110" font-size="10" text-anchor="middle" class="mut">12</text><text x="76" y="110" font-size="10" text-anchor="middle" class="mut">13</text><text x="128" y="110" font-size="10" text-anchor="middle" class="mut">14</text><text x="180" y="110" font-size="10" text-anchor="middle" class="mut">15</text><path class="st" d="M16 94H159.2" style="stroke-width:5"/><circle cx="159.2" cy="94" r="5" style="fill:var(--c)"/><text x="159.2" y="78" font-size="12" text-anchor="middle" class="acc">14,6</text><circle cx="128" cy="94" r="10" class="st2 dr u2"/><text x="205" y="90" font-size="13" font-weight="700" class="rv u2">k ≤ 14,6</text><text x="205" y="108" font-size="13" font-weight="700" class="acc rv u2">en fazla 14 ↓</text></svg>',
      steps: [
        { s: 'Kişi, koli, sefer, ay… Bunlar doğal sayı olmak zorunda. O yüzden sonucu yuvarlarız.', v: 'Kişi, koli, sefer, ay. Bunlar doğal sayı olmak zorunda. O yüzden sonucu yuvarlarız.' },
        { s: '“En az kaç?” sorusunda yukarı yuvarla: n ≥ 4,1 ise en az 5.', v: 'En az kaç sorusunda yukarı yuvarla: n dört virgül birden büyük ya da eşitse, en az beş.', on: '.u1' },
        { s: '“En fazla kaç?” sorusunda aşağı yuvarla: k ≤ 14,6 ise en fazla 14.', v: 'En fazla kaç sorusunda aşağı yuvarla: k on dört virgül altıdan küçük ya da eşitse, en fazla on dört.', on: '.u2' },
        { s: 'Örnek: en fazla 630 kg taşıyan asansörde 160 kg’lık iki görevli var. 45 kg’lık 46 koli en az kaç seferde taşınır?', v: 'Örnek: en fazla altı yüz otuz kilogram taşıyan asansörde, toplam yüz altmış kilogramlık iki görevli var. Kırk beş kilogramlık kırk altı koli, en az kaç seferde taşınır?',
          h: '<div class="an-ex"><span class="an-l">160 + 45n ≤ 630 → n ≤ 10,4 → seferde <b>en fazla 10</b> koli ↓</span><span class="an-l">10s ≥ 46 → s ≥ 4,6 → <b>en az 5</b> sefer ↑</span></div>' },
        { s: 'Bir seferde en fazla 10 koli: aşağı yuvarladık. 46 koli için en az 5 sefer: yukarı yuvarladık. Aynı soruda iki farklı yuvarlama!', v: 'Bir seferde en fazla on koli: aşağı yuvarladık. Kırk altı koli için en az beş sefer: yukarı yuvarladık. Aynı soruda iki farklı yuvarlama!' }
      ] },

    { t: 'Çözümlü örnek: otopark',
      steps: [
        { s: 'Otoparkta ilk saat 40 TL, sonraki her saat 15 TL. Ece’nin ödediği 100 TL’den fazla, 160 TL’den az. Kaç saat kalmış olabilir?', v: 'Otoparkta ilk saat kırk lira, sonraki her saat on beş lira. Ece’nin ödediği, yüz liradan fazla, yüz altmış liradan az. Kaç saat kalmış olabilir?',
          h: '<div class="an-ex"><span class="an-l rv o1">ücret = 40 + 15(t − 1) = 15t + 25</span><span class="an-l rv o2">100 < 15t + 25 < 160 → 75 < 15t < 135</span><span class="an-l rv o3">5 < t < 9 → t = <b>6, 7, 8</b></span></div>' },
        { s: 'İlk saat ayrı, kalan t − 1 saat 15’er TL. Ücret 15t + 25.', v: 'İlk saat ayrı, kalan t eksi bir saat on beşer lira. Ücret, on beş t artı yirmi beş.', on: '.o1' },
        { s: 'Bileşik eşitsizlik kur ve üç taraftan 25 çıkar: 75 < 15t < 135.', v: 'Bileşik eşitsizlik kur, ve üç taraftan yirmi beş çıkar: yetmiş beş, on beş t’den küçük; on beş t de yüz otuz beşten küçük.', on: '.o2' },
        { s: '15’e böl: 5 < t < 9. Saat doğal sayı olduğundan t = 6, 7 ya da 8.', v: 'On beşe böl: t, beş ile dokuz arasında. Saat doğal sayı olduğundan t altı, yedi ya da sekiz.', on: '.o3' },
        { s: 'Gizli koşulları unutma: kütle ve uzunluk pozitif, kişi sayısı doğal sayı. Bazen cevabı bu koşullar belirler.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>1. kursta 310 TL kayıt ücreti ve aylık 40 TL, 2. kursta 130 TL kayıt ücreti ve aylık 55 TL ödenmektedir. <b>En az kaç ay</b> sonunda 1. kurs daha ekonomik olur?</p>',
        c: ['11', '12', '13', '14'], a: 'C',
        hint: '310 + 40x < 130 + 55x eşitsizliğini çöz. Eşit oldukları ay “daha ekonomik” sayılmaz.',
        hintV: 'Üç yüz on artı kırk iks, yüz otuz artı elli beş iksten küçük olmalı. Bunu çöz. Eşit oldukları ay, daha ekonomik sayılmaz.',
        why: '310 + 40x < 130 + 55x → 180 < 15x → x > 12. 12. ayda ikisi eşit (790 TL); en az 13 ay.',
        whyV: 'Üç yüz on artı kırk iks, yüz otuz artı elli beş iksten küçük. Buradan yüz seksen, on beş iksten küçük; iks on ikiden büyük. On ikinci ayda ikisi eşit, yedi yüz doksan lira. Bu yüzden en az on üç ay.' },
      steps: [{ s: 'Son soru! Eşitlik anı daha ucuz demek değil.' }] }
  ]
};
