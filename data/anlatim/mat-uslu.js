/* Adım Adım Anlatım · Matematik · Üslü İfadeler (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['mat-uslu'] = {
  title: 'Üslü İfadeler',
  desc: 'Tabandan bilimsel gösterime: kurallar, negatif üs, tabanları eşitleme ve LGS’nin en sevdiği tuzaklar, sahne sahne.',
  ozet: [
    'a<sup>n</sup> = a · a · … · a (n tane). a<sup>n</sup> ile a · n karıştırılmaz: 2<sup>5</sup> = 32, 2 · 5 = 10.',
    'a ≠ 0 için a<sup>0</sup> = 1 ve a<sup>−n</sup> = {{1|a<sup>n</sup>}}. Negatif üs sayıyı negatif yapmaz: 2<sup>−3</sup> = {{1|8}}.',
    '(−2)<sup>4</sup> = 16 ama −2<sup>4</sup> = −16. Negatif taban: çift üs → +, tek üs → −.',
    'Çarparken üsler toplanır, bölerken çıkarılır, kuvvetin kuvvetinde çarpılır. Üsler aynıysa tabanlar çarpılır: a<sup>k</sup> · b<sup>k</sup> = (a · b)<sup>k</sup>.',
    'Toplamada üsler toplanmaz, kaç tane olduğu sayılır: 4<sup>7</sup> + 4<sup>7</sup> + 4<sup>7</sup> + 4<sup>7</sup> = 4 · 4<sup>7</sup> = 4<sup>8</sup>.',
    'Farklı tabanlar önce asal tabana çevrilir: 8 = 2<sup>3</sup>, 9 = 3<sup>2</sup>, 0,25 = 2<sup>−2</sup>.',
    'Çözümleme: birler basamağı 10<sup>0</sup>, onda birler 10<sup>−1</sup>.',
    'Bilimsel gösterim a · 10<sup>n</sup>, 1 ≤ a < 10. Virgül sola kayarsa üs artar, sağa kayarsa üs azalır. İşlem sonunda katsayıyı düzeltmeyi unutma.'
  ],
  scenes: [
    { t: 'Üslü ifade nedir?',
      base: '<svg class="an-svg" viewBox="0 0 320 170" role="img" aria-label="3 üssü 4 eşittir 81">' +
        '<text x="92" y="98" font-size="64" font-weight="700" class="rv b1">3</text>' +
        '<text x="130" y="58" font-size="34" font-weight="700" class="acc rv b2">4</text>' +
        '<text x="168" y="98" font-size="44" font-weight="700" class="rv b4">= 81</text>' +
        '<path class="st dr b3" d="M108 108 Q100 138 60 146"/><text x="6" y="158" font-size="16" class="rv b3">taban</text>' +
        '<path class="st dr b3" d="M150 40 Q170 18 210 18"/><text x="214" y="23" font-size="16" class="acc rv b3">üs (kuvvet)</text>' +
        '<path class="st2 dr b5" d="M226 108 Q240 138 262 146"/><text x="230" y="164" font-size="16" class="rv b5">değer</text>' +
        '</svg>',
      steps: [
        { s: 'Aynı sayıyı tekrar tekrar çarpmak yerine kısaca <b>üslü ifade</b> yazarız.', on: '.b1' },
        { s: 'Burada 3 sayısı kendisiyle <b>4 kez</b> çarpılıyor.', on: '.b2' },
        { s: 'Alttaki büyük sayı <b>taban</b>, sağ üstteki küçük sayı <b>üs</b> ya da kuvvettir.', on: '.b3' },
        { s: '3<sup>4</sup> = 3 · 3 · 3 · 3 = 81. Hesaplanan 81 sonucu ifadenin <b>değeri</b>dir.', v: '3 üssü 4, 3 çarpı 3 çarpı 3 çarpı 3, yani 81. Hesaplanan 81, ifadenin değeridir.', on: '.b4,.b5' },
        { s: 'Okunuşu: “3’ün 4. kuvveti” ya da “3 üssü 4”.', v: 'Okunuşu: 3’ün dördüncü kuvveti, ya da 3 üssü 4.',
          h: '<div class="an-rule"><b>a<sup>n</sup></b> = a · a · … · a <small>(n tane a çarpılır)</small></div>' }
      ] },

    { t: 'Kare, küp ve büyük tuzak',
      steps: [
        { s: 'a<sup>2</sup> “a’nın karesi”dir: kenarı a olan karenin alanı a<sup>2</sup>.', v: 'a kare, a’nın karesidir. Kenarı a olan karenin alanı a karedir.',
          h: '<div class="an-grid"><div><b>a<sup>2</sup></b>karenin alanı</div><div><b>a<sup>3</sup></b>küpün hacmi</div><div><b>2<sup>n</sup></b>her adımda 2 katı</div></div>' },
        { s: 'a<sup>3</sup> “a’nın küpü”dür: ayrıtı a olan küpün hacmi a<sup>3</sup>.', v: 'a küp, a’nın küpüdür. Ayrıtı a olan küpün hacmi a küptür.' },
        { s: 'Her adımda ikiye bölünen bakteriler ya da her katlamada iki katı kalınlaşan kâğıt da üslü ifadeyle anlatılır.' },
        { s: 'Şimdi en sık yapılan hata: 2<sup>5</sup> ile 2 · 5 aynı şey değil!', v: 'Şimdi en sık yapılan hata: 2 üssü 5 ile 2 çarpı 5 aynı şey değil!',
          h: '<div class="an-trap"><span class="an-l">2<sup>5</sup> = 2 · 2 · 2 · 2 · 2 = <span class="an-ok-t">32</span></span><br><span class="an-l">2 · 5 = <span class="an-bad-t">10</span> ← bu üslü ifade değil</span></div>' },
        { s: 'Üs, tabanın kaç kez çarpıldığını söyler; üsle taban çarpılmaz.' }
      ] },

    { t: 'Eşleştir: kuvvetin değeri',
      steps: [{ s: 'Şimdi sen dene: her üslü ifadeyi değeriyle eşleştir. Önce birine, sonra eşine dokun.' }],
      ia: { tip: 'eslestir', q: '<p>Her üslü ifadeyi değeriyle eşleştir.</p>', solBaslik: 'İfade', sagBaslik: 'Değer',
        sol: ['2<sup>5</sup>', '5<sup>2</sup>', '3<sup>3</sup>', '4<sup>3</sup>', '10<sup>1</sup>'],
        sag: ['32', '25', '27', '64', '10'],
        hint: 'Üs, tabanın kaç kez kendisiyle çarpılacağını söyler. Taban ile üssü çarpma!',
        why: '2<sup>5</sup> = 2 · 2 · 2 · 2 · 2 = 32; 10 değil! 4<sup>3</sup> = 4 · 4 · 4 = 64; 12 değil.',
        whyV: '2 üssü 5, beş tane ikinin çarpımıdır: otuz iki eder, on değil! 4 üssü 3 de 4 çarpı 4 çarpı 4, altmış dört eder; on iki değil.' } },
    { t: 'Sıfırıncı ve negatif kuvvet',
      base: '<table class="an-tbl"><tr><th>İfade</th><th>Değer</th><th></th></tr>' +
        '<tr class="rv r1"><td>2<sup>3</sup></td><td><b>8</b></td><td></td></tr>' +
        '<tr class="rv r2"><td>2<sup>2</sup></td><td><b>4</b></td><td class="an-ek">÷ 2</td></tr>' +
        '<tr class="rv r3"><td>2<sup>1</sup></td><td><b>2</b></td><td class="an-ek">÷ 2</td></tr>' +
        '<tr class="rv r4"><td>2<sup>0</sup></td><td><b>1</b></td><td class="an-ek">÷ 2</td></tr>' +
        '<tr class="rv r5"><td>2<sup>−1</sup></td><td><b>{{1|2}}</b></td><td class="an-ek">÷ 2</td></tr>' +
        '<tr class="rv r6"><td>2<sup>−2</sup></td><td><b>{{1|4}}</b></td><td class="an-ek">÷ 2</td></tr></table>',
      steps: [
        { s: 'Bir merdiven kuralım: 2<sup>3</sup> = 8.', on: '.r1' },
        { s: 'Üs 1 azalınca değer 2’ye bölünür: 2<sup>2</sup> = 4, 2<sup>1</sup> = 2.', on: '.r2,.r3' },
        { s: 'Bu düzen sürerse 2<sup>0</sup> = 1 olmak zorundadır.', on: '.r4', mk: '.r4 td' },
        { s: 'Bir adım daha: 2<sup>−1</sup> = {{1|2}}, 2<sup>−2</sup> = {{1|4}}.', v: 'Bir adım daha: 2 üssü eksi 1, yarım; 2 üssü eksi 2, 4’te 1.', on: '.r5,.r6' },
        { s: 'Kural: a ≠ 0 için a<sup>0</sup> = 1 ve a<sup>−n</sup> = {{1|a<sup>n</sup>}}.', v: 'Kural: a sıfırdan farklıysa, a üssü sıfır 1’dir; a üssü eksi n de, 1 bölü a üssü n’dir.',
          h: '<div class="an-rule"><b>a<sup>0</sup> = 1</b> (a ≠ 0) &nbsp;·&nbsp; <b>a<sup>−n</sup> = {{1|a<sup>n</sup>}}</b><br><small>7<sup>0</sup> = 1, (−5)<sup>0</sup> = 1, 2027<sup>0</sup> = 1 · 0<sup>0</sup> tanımsızdır</small></div>' },
        { s: 'Ayrıca a<sup>1</sup> = a, 1’in her kuvveti 1’dir.', v: 'Ayrıca a üssü 1, a’dır. 1’in her kuvveti de 1’dir.' }
      ] },

    { t: 'Negatif üs, negatif sayı değildir',
      steps: [
        { s: 'Negatif üs, tabanın <b>çarpmaya göre tersini</b> alır.',
          h: '<div class="an-ex"><span class="an-l">5<sup>−2</sup> = {{1|5<sup>2</sup>}} = {{1|25}}</span><span class="an-l">10<sup>−3</sup> = {{1|1000}} = 0,001</span></div>', v: 'Negatif üs, tabanın çarpmaya göre tersini alır. 5 üssü eksi 2, 25’te 1. 10 üssü eksi 3, binde 1, yani sıfır virgül sıfır sıfır bir.' },
        { s: 'Kesirde ters çevirmek yeter: ({{2|3}})<sup>−3</sup> = ({{3|2}})<sup>3</sup> = {{27|8}}.', v: 'Kesirde ters çevirmek yeter: 3’te 2’nin eksi 3’üncü kuvveti, 2’de 3’ün küpüne eşittir; bu da 8’de 27’dir.',
          h: '<div class="an-ex"><span class="an-l">({{2|3}})<sup>−3</sup> = ({{3|2}})<sup>3</sup> = {{27|8}}</span></div>' },
        { s: 'Dikkat: 2<sup>−3</sup> = {{1|8}}, yani <b>pozitif</b> bir sayı. −8 de değil, −6 da değil!', v: 'Dikkat: 2 üssü eksi 3, 8’de 1’dir, yani pozitif bir sayı. Eksi 8 de değil, eksi 6 da değil!',
          h: '<div class="an-trap">2<sup>−3</sup> = <span class="an-ok-t">{{1|8}}</span> &nbsp; <span class="an-bad-t">−8</span> &nbsp; <span class="an-bad-t">−6</span></div>' }
      ] },

    { t: 'Sayı doğrusunda göster',
      steps: [{ s: 'Kaydırıcıyı sürükle ya da − ve + düğmelerine dokun. Sayıyı yerine koyunca Kontrol et’e bas.',
                v: 'Kaydırıcıyı sürükle ya da eksi ve artı düğmelerine dokun. Sayıyı yerine koyunca Kontrol et\'e bas.' }],
      ia: { tip: 'kaydir', q: '<p>2<sup>−1</sup> + 2<sup>−2</sup> sayısını sayı doğrusunda işaretle.</p>',
        min: -1, max: 2, adim: 0.05, cevap: 0.75, tol: 0, etiket: [-1, -0.5, 0, 0.5, 1, 1.5, 2],
        hint: 'Negatif üs ters çevirir: 2<sup>−1</sup> = {{1|2}}, 2<sup>−2</sup> = {{1|4}}. Sonuç pozitif!',
        hintV: 'Negatif üs ters çevirir. 2 üssü eksi 1, ikide bir; 2 üssü eksi 2, dörtte bir. Sonuç pozitif!',
        why: '{{1|2}} + {{1|4}} = {{3|4}} = 0,75. Negatif üs sayıyı negatif yapmaz; sonuç 0 ile 1 arasına düşer.',
        whyV: 'İkide bir artı dörtte bir, dörtte üç eder; yani sıfır virgül yetmiş beş. Negatif üs sayıyı negatif yapmaz, sonuç sıfır ile bir arasına düşer.' } },
    { t: 'Ara soru', cp: {
        q: '<p><b>3<sup>−2</sup></b> ifadesinin değeri aşağıdakilerden hangisidir?</p>',
        c: ['−9', '−6', '{{1|9}}', '{{1|6}}'], a: 'C',
        hint: 'Negatif üs sayıyı negatif yapmaz; tabanı ters çevir, sonra kuvvetini al.',
        why: '3<sup>−2</sup> = {{1|3<sup>2</sup>}} = {{1|9}}. Negatif üs “ters çevir” demektir, sonuç pozitiftir.',
        whyV: '3 üssü eksi 2, 1 bölü 3 kare, yani 9’da 1. Negatif üs ters çevir demektir; sonuç pozitiftir.' },
      steps: [{ s: 'Sıra sende! Doğru şıkkı seç, sonra <b>İşaretle</b>’ye bas.' }] },

    { t: 'Negatif tabanlar ve parantez',
      base: '<table class="an-tbl"><tr><th>İfade</th><th>Değer</th><th>Neden?</th></tr>' +
        '<tr class="rv n1"><td>(−2)<sup>4</sup></td><td><b>16</b></td><td>çift üs → +</td></tr>' +
        '<tr class="rv n2"><td>(−2)<sup>3</sup></td><td><b>−8</b></td><td>tek üs → −</td></tr>' +
        '<tr class="rv n3"><td>−2<sup>4</sup></td><td><b>−16</b></td><td>parantez yok: −(2<sup>4</sup>)</td></tr>' +
        '<tr class="rv n4"><td>(−1)<sup>2027</sup></td><td><b>−1</b></td><td>tek üs</td></tr></table>',
      steps: [
        { s: 'Negatif tabanda sonucun işaretini <b>üssün tek ya da çift</b> olması belirler.' },
        { s: '(−2)<sup>4</sup>: dört tane eksi çarpılır, sonuç artı 16.', v: 'Parantez içinde eksi 2’nin 4’üncü kuvveti: dört tane eksi çarpılır, sonuç artı 16.', on: '.n1' },
        { s: '(−2)<sup>3</sup>: üç eksi, sonuç −8.', v: 'Parantez içinde eksi 2’nin küpü: üç eksi, sonuç eksi 8.', on: '.n2' },
        { s: 'Parantez yoksa üs yalnızca 2’ye aittir: −2<sup>4</sup> = −16.', v: 'Parantez yoksa üs yalnızca 2’ye aittir: eksi 2 üssü 4, eksi 16’dır.', on: '.n3', mk: '.n3 td' },
        { s: '−1’in tek kuvveti −1, çift kuvveti 1’dir.', v: 'Eksi 1’in tek kuvveti eksi 1, çift kuvveti 1’dir.', on: '.n4' },
        { s: 'LGS’de −3<sup>2</sup> ve (−3)<sup>2</sup> aynı soruda verilip sayı doğrusuna yerleştirtildi.', v: 'LGS’de eksi 3 kare ile parantez içinde eksi 3’ün karesi aynı soruda verildi ve sayı doğrusuna yerleştirtildi.',
          h: '<div class="an-trap">−3<sup>2</sup> = <b>−9</b> &nbsp;&nbsp;ama&nbsp;&nbsp; (−3)<sup>2</sup> = <b>9</b></div>' }
      ] },

    { t: 'Doğru mu, yanlış mı?',
      steps: [{ s: 'Her ifadeyi oku. Doğruysa Doğru’ya, yanlışsa Yanlış’a dokun.' }],
      ia: { tip: 'dogruyanlis', q: '<p>Her ifade için karar ver.</p>',
        ifadeler: [
          { m: '(−2)<sup>4</sup> = 16', d: true, a: 'Çift üs: dört eksi çarpılır, sonuç artı.' },
          { m: '−2<sup>4</sup> = 16', d: false, a: 'Parantez yok: üs yalnız 2’ye ait. −(2<sup>4</sup>) = −16.' },
          { m: '(−1)<sup>101</sup> = 1', d: false, a: 'Tek üs işareti korur: sonuç −1.' },
          { m: '(−3)<sup>3</sup> negatif bir sayıdır.', d: true, a: 'Negatif taban, tek üs: (−3)<sup>3</sup> = −27.' },
          { m: '2<sup>−3</sup> negatif bir sayıdır.', d: false, a: 'Negatif üs ters çevirir: 2<sup>−3</sup> = {{1|8}}, pozitif.' }],
        hint: 'Önce parantez var mı bak. Varsa eksi de üsse girer; sonra üssün tek mi çift mi olduğuna bak.',
        why: 'Parantez, eksinin üsse girip girmediğini belirler: (−2)<sup>4</sup> = 16 ama −2<sup>4</sup> = −16. Negatif üs ise işaret değil, ters çevirme demektir.',
        whyV: 'Parantez, eksinin de üsse girip girmediğini belirler. Parantezli eksi 2\'nin dördüncü kuvveti artı on altı; parantezsiz eksi 2 üssü 4 ise eksi on altıdır. Negatif üs ise işaret değil, ters çevirme demektir.' } },
    { t: 'Çarpma, bölme, kuvvetin kuvveti',
      steps: [
        { s: 'Tabanlar aynıysa çarparken <b>üsler toplanır</b>.', h: '<div class="an-rule"><b>a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup></b></div>', v: 'Tabanlar aynıysa çarparken üsler toplanır: a üssü m çarpı a üssü n, a üssü m artı n.' },
        { s: '2<sup>3</sup> · 2<sup>4</sup>: üç tane 2 ile dört tane 2, toplam yedi tane 2.', v: '2 küp çarpı 2 üssü 4: üç tane 2 ile dört tane 2, toplam yedi tane 2.',
          h: '<div class="an-ex"><span class="an-l">2<sup>3</sup> · 2<sup>4</sup> = 2<sup>7</sup></span><span class="an-l">5<sup>6</sup> · 5<sup>−2</sup> = 5<sup>4</sup></span></div>' },
        { s: 'Bölerken <b>üsler çıkarılır</b>: 7<sup>9</sup> ÷ 7<sup>5</sup> = 7<sup>4</sup>.', v: 'Bölerken üsler çıkarılır: 7 üssü 9 bölü 7 üssü 5, 7 üssü 4.',
          h: '<div class="an-rule"><b>{{a<sup>m</sup>|a<sup>n</sup>}} = a<sup>m−n</sup></b> &nbsp; <small>{{7<sup>9</sup>|7<sup>5</sup>}} = 7<sup>4</sup>, {{3<sup>2</sup>|3<sup>5</sup>}} = 3<sup>−3</sup></small></div>' },
        { s: 'Kuvvetin kuvvetinde <b>üsler çarpılır</b>: (3<sup>2</sup>)<sup>3</sup> = 3<sup>6</sup>.', v: 'Kuvvetin kuvvetinde üsler çarpılır: 3 karenin küpü, 3 üssü 6.',
          h: '<div class="an-rule"><b>(a<sup>m</sup>)<sup>n</sup> = a<sup>m·n</sup></b> &nbsp; <small>(3<sup>2</sup>)<sup>3</sup> = 3<sup>2</sup> · 3<sup>2</sup> · 3<sup>2</sup> = 3<sup>6</sup></small></div>' },
        { s: 'Karıştırma: (2<sup>3</sup>)<sup>2</sup> = 2<sup>6</sup> ama 2<sup>3</sup> · 2<sup>2</sup> = 2<sup>5</sup>.', v: 'Karıştırma: 2 küpün karesi 2 üssü 6, ama 2 küp çarpı 2 kare, 2 üssü 5.',
          h: '<div class="an-trap">(2<sup>3</sup>)<sup>2</sup> = 2<sup>6</sup> &nbsp;·&nbsp; 2<sup>3</sup> · 2<sup>2</sup> = 2<sup>5</sup></div>' }
      ] },

    { t: 'Üsler aynıysa tabanları birleştir',
      steps: [
        { s: 'Üsler aynıysa tabanlar çarpılır ya da bölünür.', h: '<div class="an-rule"><b>a<sup>k</sup> · b<sup>k</sup> = (a · b)<sup>k</sup></b> &nbsp; <b>a<sup>k</sup> ÷ b<sup>k</sup> = ({{a|b}})<sup>k</sup></b></div>', v: 'Üsler aynıysa tabanlar çarpılır ya da bölünür.' },
        { s: 'Örnek: 4<sup>5</sup> · 25<sup>5</sup> = 100<sup>5</sup> = 10<sup>10</sup>.', v: '4 üssü 5 çarpı 25 üssü 5: tabanları çarparız, 100 üssü 5. 100, 10’un karesi olduğu için sonuç 10 üssü 10.',
          h: '<div class="an-ex"><span class="an-l">4<sup>5</sup> · 25<sup>5</sup> = (4 · 25)<sup>5</sup></span><span class="an-l">= 100<sup>5</sup> = (10<sup>2</sup>)<sup>5</sup> = 10<sup>10</sup></span></div>' },
        { s: '12<sup>6</sup> ÷ 4<sup>6</sup> = 3<sup>6</sup>.', v: '12 üssü 6 bölü 4 üssü 6, 3 üssü 6.' },
        { s: 'Tuzak: üsler farklıysa tabanlar çarpılamaz! 2<sup>3</sup> · 5<sup>2</sup>, 10<sup>5</sup> değildir.', v: 'Tuzak: üsler farklıysa tabanlar çarpılamaz! 2 küp çarpı 5 kare, 10 üssü 5 değildir.',
          h: '<div class="an-trap"><span class="an-bad-t">2<sup>3</sup> · 5<sup>2</sup> = 10<sup>5</sup></span><br>Doğrusu: 2<sup>3</sup> · 5<sup>2</sup> = 2 · (2 · 5)<sup>2</sup> = 2 · 100 = <span class="an-ok-t">200</span></div>' },
        { s: 'Doğrusu: bir tane 2’yi dışarı ayır, kalan iki 2 ile iki 5’i eşleştir: 200.' }
      ] },

    { t: 'Tabanları eşitleme',
      steps: [
        { s: 'Kurallar aynı taban ister. Bu yüzden sayıları önce <b>asal tabanla</b> yazarız.',
          h: '<table class="an-tbl"><tr><th>Taban</th><th>Kuvvetler</th></tr><tr><td><b>2</b></td><td>2, 4, 8, 16, 32, 64, 128, 256, 512, 1024</td></tr><tr><td><b>3</b></td><td>3, 9, 27, 81, 243, 729</td></tr><tr><td><b>5</b></td><td>5, 25, 125, 625</td></tr><tr><td>kesir</td><td>0,5 = 2<sup>−1</sup>, 0,25 = 2<sup>−2</sup>, {{1|27}} = 3<sup>−3</sup></td></tr></table>' },
        { s: 'Örnek: {{8<sup>4</sup> · 4<sup>−3</sup>|16}} ifadesini hesaplayalım.', v: 'Örnek: 8 üssü 4 çarpı 4 üssü eksi 3, bölü 16 ifadesini hesaplayalım.',
          h: '<div class="an-ex" id="tx"><span class="an-l">{{8<sup>4</sup> · 4<sup>−3</sup>|16}}</span><span class="an-l rv e1">= {{(2<sup>3</sup>)<sup>4</sup> · (2<sup>2</sup>)<sup>−3</sup>|2<sup>4</sup>}}</span><span class="an-l rv e2">= {{2<sup>12</sup> · 2<sup>−6</sup>|2<sup>4</sup>}}</span><span class="an-l rv e3">= 2<sup>12 − 6 − 4</sup> = 2<sup>2</sup> = <b>4</b></span></div>' },
        { s: '8 = 2<sup>3</sup>, 4 = 2<sup>2</sup>, 16 = 2<sup>4</sup> yazalım.', v: '8’i 2 küp, 4’ü 2 kare, 16’yı 2 üssü 4 olarak yazalım.', on: '.e1' },
        { s: 'Kuvvetin kuvveti: üsleri çarp. 2<sup>12</sup> ve 2<sup>−6</sup> oldu.', v: 'Kuvvetin kuvveti: üsleri çarp. 2 üssü 12 ve 2 üssü eksi 6 oldu.', on: '.e2' },
        { s: 'Çarpmada topla, bölmede çıkar: 12 − 6 − 4 = 2. Sonuç 2<sup>2</sup> = 4.', v: 'Çarpmada topla, bölmede çıkar: 12 eksi 6 eksi 4, 2. Sonuç 2 kare, yani 4.', on: '.e3' },
        { s: 'Bilinmeyen üs de böyle bulunur: 9<sup>x</sup> · 27 = 3<sup>11</sup> ise 3<sup>2x+3</sup> = 3<sup>11</sup>, 2x + 3 = 11, x = 4.', v: 'Bilinmeyen üs de böyle bulunur: 9 üssü x çarpı 27, 3 üssü 11 ise; 3 üssü 2x artı 3, 3 üssü 11 olur. Üsler eşit: 2x artı 3 eşittir 11, x eşittir 4.',
          h: '<div class="an-ex"><span class="an-l">9<sup>x</sup> · 27 = 3<sup>11</sup></span><span class="an-l">3<sup>2x</sup> · 3<sup>3</sup> = 3<sup>11</sup> ⇒ 2x + 3 = 11 ⇒ <b>x = 4</b></span></div>' }
      ] },

    { t: 'Boşlukları doldur',
      steps: [{ s: 'Her sayıyı 2’nin kuvveti olarak yaz. Önce bir boşluğa, sonra doğru karta dokun.' }],
      ia: { tip: 'bosluk', q: '<p>4<sup>3</sup> · 8<sup>−1</sup> ÷ 2<sup>5</sup> işlemini tabanı 2 yaparak çöz.</p>',
        metin: '4<sup>3</sup> = 2[^_]<br>8<sup>−1</sup> = 2[^_]<br>4<sup>3</sup> · 8<sup>−1</sup> ÷ 2<sup>5</sup> = 2[^_]',
        secenek: ['6', '−3', '−2', '5', '3', '−8', '2'], cevap: ['6', '−3', '−2'],
        hint: '4 = 2<sup>2</sup>, 8 = 2<sup>3</sup>. Kuvvetin kuvvetinde üsler çarpılır; çarpmada toplanır, bölmede çıkarılır.',
        hintV: '4, 2 üssü 2; 8, 2 üssü 3. Kuvvetin kuvvetinde üsler çarpılır; çarpmada toplanır, bölmede çıkarılır.',
        why: '4<sup>3</sup> = 2<sup>6</sup>, 8<sup>−1</sup> = 2<sup>−3</sup>. Üsler: 6 + (−3) − 5 = −2. Sonuç 2<sup>−2</sup> = {{1|4}}.',
        whyV: '4 üssü 3, 2 üssü 6 eder; 8 üssü eksi 1, 2 üssü eksi 3. Üsler: altı, eksi üç, eksi beş; toplam eksi iki. Sonuç 2 üssü eksi 2, yani dörtte bir.' } },
    { t: 'Toplamada üsler toplanmaz!',
      steps: [
        { s: 'Aynı ifadeler toplanırken <b>kaç tane olduğu</b> sayılır.', h: '<div class="an-ex"><span class="an-l">2<sup>5</sup> + 2<sup>5</sup> = 2 · 2<sup>5</sup> = 2<sup>6</sup></span></div>', v: 'Aynı ifadeler toplanırken kaç tane olduğu sayılır. 2 üssü 5 artı 2 üssü 5: iki tane 2 üssü 5, yani 2 üssü 6.' },
        { s: 'Üç tane 3<sup>4</sup>: 3 · 3<sup>4</sup> = 3<sup>5</sup>.', v: 'Üç tane 3 üssü 4: 3 çarpı 3 üssü 4, yani 3 üssü 5.', h: '<div class="an-ex"><span class="an-l">3<sup>4</sup> + 3<sup>4</sup> + 3<sup>4</sup> = 3 · 3<sup>4</sup> = 3<sup>5</sup></span></div>' },
        { s: '5<sup>3</sup> + 5<sup>3</sup> = 2 · 5<sup>3</sup> = 250. 5<sup>6</sup> de değil, 10<sup>3</sup> hiç değil!', v: '5 küp artı 5 küp: 2 çarpı 5 küp, yani 250. 5 üssü 6 de değil, 10 küp hiç değil!',
          h: '<div class="an-trap">5<sup>3</sup> + 5<sup>3</sup> = 2 · 5<sup>3</sup> = <span class="an-ok-t">250</span> &nbsp; <span class="an-bad-t">5<sup>6</sup></span> &nbsp; <span class="an-bad-t">10<sup>3</sup></span></div>' },
        { s: 'Üsler farklıysa küçük olanı ortak çarpan yap: 2<sup>7</sup> − 2<sup>6</sup> = 2<sup>6</sup> · (2 − 1) = 2<sup>6</sup>.', v: 'Üsler farklıysa küçük olanı ortak çarpan yap: 2 üssü 7 eksi 2 üssü 6, 2 üssü 6 çarpı, 2 eksi 1; yani 2 üssü 6.',
          h: '<div class="an-ex"><span class="an-l">2<sup>7</sup> − 2<sup>6</sup> = 2<sup>6</sup> · (2 − 1) = 2<sup>6</sup></span><span class="an-l">3<sup>5</sup> + 3<sup>4</sup> = 3<sup>4</sup> · (3 + 1) = 4 · 3<sup>4</sup></span></div>' }
      ] },

    { t: 'Hangileri 2⁶ değil?',
      steps: [{ s: '2 üssü 6’ya eşit olmayanlara dokunarak ele, sonra Kontrol et’e bas.' }],
      ia: { tip: 'eleme', q: '<p>Aşağıdakilerden <b>2<sup>6</sup>’ya eşit olmayanları</b> ele.</p>',
        ogeler: ['2<sup>5</sup> + 2<sup>5</sup>', '2<sup>3</sup> · 2<sup>3</sup>', '(2<sup>3</sup>)<sup>2</sup>', '2<sup>3</sup> + 2<sup>3</sup>', '4<sup>3</sup>', '8<sup>2</sup>', '2<sup>2</sup> · 2<sup>3</sup>', '6<sup>2</sup>'],
        ele: [3, 6, 7],
        hint: 'Toplamada üsler toplanmaz, kaç tane olduğu sayılır: 2<sup>3</sup> + 2<sup>3</sup> = 2 · 2<sup>3</sup>.',
        hintV: 'Toplamada üsler toplanmaz, kaç tane olduğu sayılır: 2 üssü 3 artı 2 üssü 3, iki tane 2 üssü 3 demektir.',
        why: '2<sup>3</sup> + 2<sup>3</sup> = 2<sup>4</sup>, 2<sup>2</sup> · 2<sup>3</sup> = 2<sup>5</sup>, 6<sup>2</sup> = 36. Kalanların hepsi 64, yani 2<sup>6</sup>.',
        whyV: '2 üssü 3 artı 2 üssü 3, 2 üssü 4 eder. 2 üssü 2 çarpı 2 üssü 3, 2 üssü 5. 6\'nın karesi otuz altı. Kalanların hepsi altmış dört, yani 2 üssü 6.' } },
    { t: 'Ara soru', cp: {
        q: '<p><b>4<sup>7</sup> + 4<sup>7</sup> + 4<sup>7</sup> + 4<sup>7</sup></b> toplamı aşağıdakilerden hangisine eşittir?</p>',
        c: ['4<sup>8</sup>', '16<sup>7</sup>', '4<sup>28</sup>', '16<sup>28</sup>'], a: 'A',
        hint: 'Kaç tane 4<sup>7</sup> var? Toplamda üsler toplanmaz, tane sayısıyla çarpılır.',
        hintV: 'Kaç tane 4 üssü 7 var? Toplamda üsler toplanmaz, tane sayısıyla çarpılır.',
        why: 'Dört tane 4<sup>7</sup> var: 4 · 4<sup>7</sup> = 4<sup>1</sup> · 4<sup>7</sup> = 4<sup>8</sup>.',
        whyV: 'Dört tane 4 üssü 7 var: 4 çarpı 4 üssü 7, yani 4 üssü 8.' },
      steps: [{ s: 'Toplama kuralını hatırla. Şıkkını seç ve <b>İşaretle</b>.' }] },

    { t: 'Ondalık sayıyı çözümleme',
      base: '<table class="an-tbl" style="text-align:center"><tr><th>onlar</th><th>birler</th><th></th><th>onda bir</th><th>yüzde bir</th></tr>' +
        '<tr style="font-size:24px;font-weight:700"><td>8</td><td>2</td><td>,</td><td>5</td><td>3</td></tr>' +
        '<tr><td class="rv c1 an-ek">10<sup>1</sup></td><td class="rv c2 an-ek">10<sup>0</sup></td><td></td><td class="rv c3 an-ek">10<sup>−1</sup></td><td class="rv c4 an-ek">10<sup>−2</sup></td></tr></table>',
      steps: [
        { s: 'Her basamağın değeri 10’un bir kuvvetidir. 82,53 sayısına bakalım.', v: 'Her basamağın değeri 10’un bir kuvvetidir. 82 virgül 53 sayısına bakalım.' },
        { s: 'Onlar basamağı 10<sup>1</sup>.', v: 'Onlar basamağı 10 üssü 1.', on: '.c1' },
        { s: 'Birler basamağı 10<sup>0</sup>; 10<sup>1</sup> değil!', v: 'Birler basamağı 10 üssü sıfır; 10 üssü 1 değil!', on: '.c2', mk: '.c2' },
        { s: 'Virgülün sağı negatif kuvvetler: onda birler 10<sup>−1</sup>, yüzde birler 10<sup>−2</sup>.', v: 'Virgülün sağı negatif kuvvetler: onda birler 10 üssü eksi 1, yüzde birler 10 üssü eksi 2.', on: '.c3,.c4' },
        { s: 'Çözümleme: 82,53 = 8 · 10<sup>1</sup> + 2 · 10<sup>0</sup> + 5 · 10<sup>−1</sup> + 3 · 10<sup>−2</sup>.', v: 'Çözümleme: 82 virgül 53, 8 çarpı 10 üssü 1, artı 2 çarpı 10 üssü sıfır, artı 5 çarpı 10 üssü eksi 1, artı 3 çarpı 10 üssü eksi 2.',
          h: '<div class="an-rule">82,53 = 8 · 10<sup>1</sup> + 2 · 10<sup>0</sup> + 5 · 10<sup>−1</sup> + 3 · 10<sup>−2</sup></div>' },
        { s: 'Terimler karışık verilirse boş basamaklara 0 yaz: 5 · 10<sup>−3</sup> + 2 · 10<sup>1</sup> + 7 · 10<sup>−1</sup> = 20,705.', v: 'Terimler karışık verilirse boş basamaklara sıfır yaz: 5 çarpı 10 üssü eksi 3, artı 2 çarpı 10 üssü 1, artı 7 çarpı 10 üssü eksi 1; sonuç 20 virgül 705.',
          h: '<div class="an-tip">5 · 10<sup>−3</sup> + 2 · 10<sup>1</sup> + 7 · 10<sup>−1</sup> = <b>20,705</b></div>' }
      ] },

    { t: 'Bilimsel gösterim',
      base: '<svg class="an-svg" viewBox="0 0 330 120" role="img" aria-label="5 120 000 sayısında virgül 6 basamak sola kayar">' +
        '<text x="30" y="80" font-size="34" font-weight="700">5</text><text x="62" y="80" font-size="34" font-weight="700">1</text><text x="94" y="80" font-size="34" font-weight="700">2</text>' +
        '<text x="126" y="80" font-size="34" font-weight="700">0</text><text x="158" y="80" font-size="34" font-weight="700">0</text><text x="190" y="80" font-size="34" font-weight="700">0</text><text x="222" y="80" font-size="34" font-weight="700">0</text>' +
        '<text x="250" y="84" font-size="34" font-weight="700" class="acc rv k0">,</text>' +
        '<path class="st dr hp" style="transition-delay:.1s" d="M254 46 Q238 26 222 46"/><path class="st dr hp" style="transition-delay:.35s" d="M222 46 Q206 26 190 46"/>' +
        '<path class="st dr hp" style="transition-delay:.6s" d="M190 46 Q174 26 158 46"/><path class="st dr hp" style="transition-delay:.85s" d="M158 46 Q142 26 126 46"/>' +
        '<path class="st dr hp" style="transition-delay:1.1s" d="M126 46 Q110 26 94 46"/><path class="st dr hp" style="transition-delay:1.35s" d="M94 46 Q78 26 62 46"/>' +
        '<text x="56" y="84" font-size="34" font-weight="700" class="acc rv k1">,</text>' +
        '<text x="165" y="112" font-size="17" text-anchor="middle" class="rv k2">5 120 000 = 5,12 · 10⁶</text></svg>',
      steps: [
        { s: 'Çok büyük ve çok küçük sayıları kısa yazmanın yolu: <b>a · 10<sup>n</sup></b>, burada 1 ≤ a < 10.', v: 'Çok büyük ve çok küçük sayıları kısa yazmanın yolu bilimsel gösterimdir: a çarpı 10 üssü n; burada a, 1’e eşit ya da 1’den büyük, 10’dan küçük olmalı.',
          h: '<div class="an-rule"><b>a · 10<sup>n</sup></b> &nbsp; 1 ≤ a < 10, n tam sayı</div>' },
        { s: '5 120 000 sayısında virgül en sağdadır.', v: '5 milyon 120 bin sayısında virgül en sağdadır.', on: '.k0' },
        { s: 'Virgülü, solunda tek bir sıfırdan farklı rakam kalana kadar kaydırırız: 6 basamak sola.', on: '.hp' , w: 900 },
        { s: 'Sonuç 5,12 · 10<sup>6</sup>. Virgül sola kayınca üs artar.', v: 'Sonuç 5 virgül 12 çarpı 10 üssü 6. Virgül sola kayınca üs artar.', on: '.k1,.k2', hide: '.k0' },
        { s: 'Küçük sayıda virgül sağa kayar, üs negatif olur: 0,00072 = 7,2 · 10<sup>−4</sup>.', v: 'Küçük sayıda virgül sağa kayar, üs negatif olur: sıfır virgül sıfır sıfır sıfır 72, 7 virgül 2 çarpı 10 üssü eksi 4.',
          h: '<div class="an-ex"><span class="an-l">0,00072 = 7,2 · 10<sup>−4</sup></span><small>virgül 4 basamak sağa → üs −4</small></div>' },
        { s: '37 · 10<sup>4</sup> bilimsel gösterim değildir, çünkü 37 ≥ 10. Doğrusu 3,7 · 10<sup>5</sup>.', v: '37 çarpı 10 üssü 4 bilimsel gösterim değildir, çünkü 37, 10’dan büyük. Doğrusu 3 virgül 7 çarpı 10 üssü 5.',
          h: '<div class="an-trap"><span class="an-bad-t">37 · 10<sup>4</sup></span> &nbsp; <span class="an-bad-t">0,37 · 10<sup>6</sup></span> &nbsp; → &nbsp;<span class="an-ok-t">3,7 · 10<sup>5</sup></span></div>' }
      ] },

    { t: 'Küçükten büyüğe sırala',
      steps: [{ s: 'Kartlara en küçükten başlayarak sırayla dokun. Yanlış yere koyduğuna dokunursan geri gelir.' }],
      ia: { tip: 'sirala', q: '<p>Sayıları <b>küçükten büyüğe</b> sırala.</p>', ust: 'en küçük', alt: 'en büyük',
        ogeler: ['4 · 10<sup>−5</sup>', '9 · 10<sup>−5</sup>', '3,2 · 10<sup>−4</sup>', '2,1 · 10<sup>−3</sup>', '1,5 · 10<sup>−2</sup>'],
        hint: 'Önce 10’un kuvvetine bak: üs ne kadar küçükse (daha negatif) sayı o kadar küçüktür. Üsler eşitse katsayıya bak.',
        why: '10<sup>−5</sup> < 10<sup>−4</sup> < 10<sup>−3</sup> < 10<sup>−2</sup>. Üsleri aynı olan 4 · 10<sup>−5</sup> ile 9 · 10<sup>−5</sup> arasında katsayı karar verir.',
        whyV: '10 üssü eksi 5, 10 üssü eksi 4\'ten küçüktür; o da 10 üssü eksi 3\'ten, o da 10 üssü eksi 2\'den küçüktür. Üsleri aynı olan iki sayıda ise katsayı karar verir: dört, dokuzdan küçük.' } },
    { t: 'Bilimsel gösterimle işlem',
      steps: [
        { s: 'Çarparken katsayılar çarpılır, üsler toplanır; sonra katsayı düzeltilir.', h: '<div class="an-ex"><span class="an-l">(4 · 10<sup>5</sup>) · (5 · 10<sup>3</sup>) = 20 · 10<sup>8</sup> = 2 · 10<sup>9</sup></span></div>', v: 'Çarparken katsayılar çarpılır, üsler toplanır; sonra katsayı düzeltilir. 4 çarpı 5, 20; üsler 5 artı 3, 8. 20 çarpı 10 üssü 8, düzeltilince 2 çarpı 10 üssü 9.' },
        { s: 'LGS tipi örnek: Bir kum tanesi yaklaşık 6,5 · 10<sup>−4</sup> gram. 2,6 kg kumda kaç tane var?', v: 'LGS tipi örnek: Bir kum tanesi yaklaşık 6 virgül 5 çarpı 10 üssü eksi 4 gram. 2 virgül 6 kilogram kumda kaç tane var?',
          h: '<div class="an-ex"><span class="an-l">2,6 kg = 2,6 · 10<sup>3</sup> g</span><span class="an-l rv q1">{{2,6 · 10<sup>3</sup>|6,5 · 10<sup>−4</sup>}} = {{2,6|6,5}} · 10<sup>3 − (−4)</sup></span><span class="an-l rv q2">= 0,4 · 10<sup>7</sup> = <b>4 · 10<sup>6</sup></b> tane</span></div>' },
        { s: 'Önce birimleri eşitle: 2,6 kg = 2,6 · 10<sup>3</sup> g.', v: 'Önce birimleri eşitle: 2 virgül 6 kilogram, 2 virgül 6 çarpı 10 küp gram.' },
        { s: 'Böl: katsayılar bölünür, üsler çıkarılır: 3 − (−4) = 7.', v: 'Böl: katsayılar bölünür, üsler çıkarılır. 3 eksi, eksi 4; yani 7.', on: '.q1' },
        { s: '0,4 · 10<sup>7</sup> henüz bilimsel değil; düzelt: 4 · 10<sup>6</sup>.', v: '0 virgül 4 çarpı 10 üssü 7 henüz bilimsel gösterim değil; düzeltince 4 çarpı 10 üssü 6.', on: '.q2' },
        { s: 'Tuzaklar: kg’ı grama çevirmemek, eksiyi çıkarırken işareti karıştırmak, katsayıyı düzeltmemek.', v: 'Tuzaklar: kilogramı grama çevirmemek, eksiyi çıkarırken işareti karıştırmak ve katsayıyı düzeltmeyi unutmak.',
          h: '<div class="an-trap">kg → g çevir · 3 − (−4) = 7 · katsayı 1 ile 10 arasında olmalı</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p><b>(4 · 10<sup>5</sup>) · (5 · 10<sup>3</sup>)</b> işleminin sonucunun <b>bilimsel gösterimi</b> aşağıdakilerden hangisidir?</p>',
        c: ['20 · 10<sup>8</sup>', '2 · 10<sup>9</sup>', '2 · 10<sup>15</sup>', '0,2 · 10<sup>10</sup>'], a: 'B',
        hint: 'Değeri doğru olan birden fazla şık olabilir; katsayının 1 ile 10 arasında olması gerekir.',
        why: '4 · 5 = 20, 10<sup>5</sup> · 10<sup>3</sup> = 10<sup>8</sup>. 20 · 10<sup>8</sup> değerce doğru ama 20 ≥ 10; düzeltince 2 · 10<sup>9</sup>.',
        whyV: '4 çarpı 5, 20; 10 üssü 5 çarpı 10 küp, 10 üssü 8. 20 çarpı 10 üssü 8 değerce doğru, ama 20, 10’dan büyük. Düzeltince 2 çarpı 10 üssü 9.' },
      steps: [{ s: 'Son soru! Dikkat: “bilimsel gösterimi” isteniyor.', v: 'Son soru! Dikkat: bilimsel gösterimi isteniyor.' }] }
  ]
};
