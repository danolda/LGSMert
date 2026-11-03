/* Adım Adım Anlatım · Matematik · Eşlik ve Benzerlik (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['mat-benzerlik'] = {
  title: 'Eşlik ve Benzerlik',
  desc: 'Eş ve benzer şekiller, harf sırası, benzerlik oranı, kareli kâğıtta benzer çizim ve LGS’de bir şeklin içine gizlenen benzer üçgenler, sahne sahne.',
  ozet: [
    'Eş şekiller (≅): karşılık gelen kenarlar ve açılar eşit. Öteleme, yansıma, dönme ve katlama eşliği bozmaz.',
    'Harf sırası karşılıkları verir: ABC ≅ DEF ise A ↔ D, B ↔ E, C ↔ F ve [AB] ↔ [DE].',
    'Benzer şekiller (~): açılar eşit VE kenarlar orantılı. İki koşul birden gerekir.',
    'Her zaman benzer: iki kare, iki eşkenar üçgen, aynı kenar sayılı iki düzgün çokgen. İki dikdörtgen benzer olmayabilir.',
    'Benzerlikte kenarlar aynı sayıyla çarpılır; aynı sayı eklemek benzerliği bozar.',
    'Benzerlik oranı k: bütün uzunluklar ve çevre k katı, açılar aynı, alan k · k katı.',
    'Hangi kenarın karşılık geldiği söylenmemişse iki durumu da dene.',
    'Gizli benzer üçgenler: paralel iki kenar arasında “kelebek”, kenara paralel doğru, gölge ve ışık. Oranı aynı sırayla kur.'
  ],
  scenes: [
    { t: 'Eş şekiller',
      base: '<svg class="an-svg" viewBox="0 0 330 165" role="img" aria-label="Eş iki üçgen ABC ve DEF; eş kenarlar çentiklerle işaretli"><path class="boxa" d="M60.0 28.0L20.0 140.0L150.0 140.0Z" style="stroke-width:2"/><path class="boxa rv e0" d="M270.0 28.0L310.0 140.0L180.0 140.0Z" style="stroke-width:2"/><path class="st rv e1" d="M44.2 85.5L35.8 82.5" style="stroke-width:2"/><path class="st rv e1" d="M83.0 135.5L83.0 144.5M87.0 135.5L87.0 144.5" style="stroke-width:2"/><path class="st rv e1" d="M106.0 78.1L99.0 83.7M108.5 81.2L101.5 86.8M111.0 84.3L104.0 89.9" style="stroke-width:2"/><path class="st rv e1" d="M294.2 82.5L285.8 85.5" style="stroke-width:2"/><path class="st rv e1" d="M247.0 144.5L247.0 135.5M243.0 144.5L243.0 135.5" style="stroke-width:2"/><path class="st rv e1" d="M231.0 83.7L224.0 78.1M228.5 86.8L221.5 81.2M226.0 89.9L219.0 84.3" style="stroke-width:2"/><text x="60" y="20" font-size="14" text-anchor="middle" font-weight="700">A</text><text x="10" y="156" font-size="14" font-weight="700">B</text><text x="150" y="157" font-size="14" text-anchor="middle" font-weight="700">C</text><text x="270" y="20" font-size="14" text-anchor="middle" font-weight="700" class="rv e0">D</text><text x="312" y="157" font-size="14" font-weight="700" class="rv e0">E</text><text x="180" y="157" font-size="14" text-anchor="middle" font-weight="700" class="rv e0">F</text><path class="st2 dr e2" d="M165 18V150" style="stroke-dasharray:5 4"/><text x="165" y="12" font-size="11" text-anchor="middle" class="mut rv e2">ayna</text></svg>',
      steps: [
        { s: 'Merhaba! Biri öbürünün üzerine konduğunda tam çakışan şekillere eş şekiller diyoruz. Şu ABC üçgenine bakalım.', v: 'Merhaba! Biri öbürünün üzerine konduğunda tam çakışan şekillere eş şekiller diyoruz. Şu A B C üçgenine bakalım.' },
        { s: 'Onun aynadaki görüntüsü DEF. Yönü değişti ama boyu, biçimi aynı.', v: 'Onun aynadaki görüntüsü D E F. Yönü değişti, ama boyu ve biçimi aynı.', on: '.e0,.e2' },
        { s: 'Çentikler eş kenarları gösteriyor: bir çentikli AB ile DE, iki çentikli BC ile EF, üç çentikli AC ile DF.', v: 'Çentikler eş kenarları gösteriyor: bir çentikli A B ile D E, iki çentikli B C ile E F, üç çentikli A C ile D F.', on: '.e1' },
        { s: 'Eş şekillerde karşılık gelen kenarlar da açılar da eşittir. Bu yüzden çevreleri ve alanları da eşit.',
          h: '<div class="an-rule"><b>ABC ≅ DEF</b> → A ↔ D, B ↔ E, C ↔ F &nbsp;·&nbsp; [AB] ↔ [DE], [BC] ↔ [EF]</div>' }
      ] },

    { t: 'Harf sırası ve tuzaklar',
      steps: [
        { s: 'Şekil döndürülmüş ya da ters çizilmiş olabilir. O yüzden karşılıkları görüntüye göre değil, yazılıştaki harf sırasına göre kur.' },
        { s: 'Örnek: ABCD ≅ KLMN, |AB| = 2x − 1, |KL| = 9, |BC| = 7, |LM| = y + 2. Harf sırasına göre AB ↔ KL ve BC ↔ LM.', v: 'Örnek: A B C D, K L M N’ye eş. A B, iki iks eksi bir; K L dokuz; B C yedi; L M, y artı iki. Harf sırasına göre A B ile K L, B C ile L M karşılık gelir.',
          h: '<div class="an-ex"><span class="an-l">2x − 1 = 9 → x = 5 &nbsp;·&nbsp; y + 2 = 7 → y = 5</span><span class="an-l">x + y = <b>10</b>; s(A) = 75° ise s(K) = <b>75°</b></span></div>' },
        { s: 'Kâğıt katlama da eşlik demektir: katlanan parça ile üzerine geldiği yer eştir.' },
        { s: 'Burada dikkat et: bütün kenarları eşit olmak yetmez. Kare ile eşkenar dörtgenin kenarları eşit olabilir ama açıları farklı.', v: 'Burada dikkat et: bütün kenarları eşit olmak yetmez. Kare ile eşkenar dörtgenin kenarları eşit olabilir, ama açıları farklı.',
          h: '<div class="an-trap">Kenarı 3 cm kare ile kenarı 3 cm, açıları 60°-120° eşkenar dörtgen <b>eş değildir</b>. Alanları eşit iki şekil de eş olmayabilir.</div>' }
      ] },

    { t: 'Benzer şekiller',
      base: '<svg class="an-svg" viewBox="0 0 330 120" role="img" aria-label="4 e 6 ile 6 ya 9 dikdörtgenleri benzer; 6 ya 8 dikdörtgeni benzer değil"><rect x="10" y="24" width="72" height="48" class="boxa "/><path class="ln " d="M22 24v48M34 24v48M46 24v48M58 24v48M70 24v48M10 36h72M10 48h72M10 60h72"/><rect x="102" y="0" width="108" height="72" class="boxa rv r1"/><path class="ln rv r1" d="M114 0v72M126 0v72M138 0v72M150 0v72M162 0v72M174 0v72M186 0v72M198 0v72M102 12h108M102 24h108M102 36h108M102 48h108M102 60h108"/><rect x="226" y="0" width="96" height="72" class="boxa rv r2"/><path class="ln rv r2" d="M238 0v72M250 0v72M262 0v72M274 0v72M286 0v72M298 0v72M310 0v72M226 12h96M226 24h96M226 36h96M226 48h96M226 60h96"/><text x="46" y="94" font-size="13" text-anchor="middle" font-weight="700">4 × 6</text><text x="156" y="94" font-size="13" text-anchor="middle" font-weight="700" class="rv r1">6 × 9</text><text x="156" y="112" font-size="12" text-anchor="middle" class="rv r1" style="fill:var(--ok)">4/6 = 6/9 ✓</text><text x="274" y="94" font-size="13" text-anchor="middle" font-weight="700" class="rv r2">6 × 8</text><text x="274" y="112" font-size="12" text-anchor="middle" class="rv r2" style="fill:var(--bad)">4/6 ≠ 6/8 ✗</text></svg>',
      steps: [
        { s: 'Biçimi aynı, büyüklüğü farklı olabilen şekillere benzer şekiller deriz. İki koşul var: açılar eşit, kenarlar orantılı.',
          h: '<div class="an-rule"><b>Benzerlik (~)</b> = açılar eşit <b>+</b> kenarlar orantılı</div>' },
        { s: 'Dikdörtgenlerin açıları zaten hep 90°. O zaman yalnızca kenar oranına bakarız. 4’e 6’lık dikdörtgen ile 6’ya 9’luk:', v: 'Dikdörtgenlerin açıları zaten hep doksan derece. O zaman yalnızca kenar oranına bakarız. Dörde altılık dikdörtgen ile altıya dokuzluk:', on: '.r1' },
        { s: '4 bölü 6 da, 6 bölü 9 da üçte iki. Oranlar eşit, yani benzerler.', v: 'Dört bölü altı da, altı bölü dokuz da, üçte iki. Oranlar eşit; yani benzerler.' },
        { s: '6’ya 8’lik dikdörtgende ise oran dörtte üç. Benzer değil!', v: 'Altıya sekizlik dikdörtgende ise oran dörtte üç. Benzer değil!', on: '.r2' }
      ] },

    { t: 'Her zaman benzer mi?',
      base: '<table class="an-tbl"><tr><th>Her zaman benzer</th><th>Benzer olmayabilir</th></tr>' +
        '<tr><td>iki kare</td><td>iki dikdörtgen</td></tr><tr><td>iki eşkenar üçgen</td><td>iki eşkenar dörtgen</td></tr>' +
        '<tr><td>iki düzgün altıgen</td><td>iki ikizkenar üçgen</td></tr><tr><td>iki çember</td><td>iki dik üçgen</td></tr></table>',
      steps: [
        { s: 'Bazı şekiller büyüklükleri ne olursa olsun hep benzerdir: iki kare, iki eşkenar üçgen, iki çember gibi.' },
        { s: 'Ama iki dikdörtgen, iki eşkenar dörtgen ya da iki dik üçgen benzer olmayabilir. Kontrol etmek gerekir.' },
        { s: 'En sık hata şu: kenarlara aynı sayıyı eklemek. 4 × 6’ya 2’şer eklersen 6 × 8 olur ve benzerlik bozulur.', v: 'En sık hata şu: kenarlara aynı sayıyı eklemek. Dörde altılığa ikişer eklersen altıya sekiz olur, ve benzerlik bozulur.',
          h: '<div class="an-trap">4 × 6 → (+2) → <span class="an-bad-t">6 × 8</span> &nbsp;·&nbsp; 4 × 6 → (× 1,5) → <span class="an-ok-t">6 × 9</span></div>' },
        { s: 'Benzerlik için kenarlar eklenmez, aynı sayıyla çarpılır. Unutma: eş olan her şekil benzerdir, oranları 1’dir.', v: 'Benzerlik için kenarlar eklenmez, aynı sayıyla çarpılır. Unutma: eş olan her şekil benzerdir; oranları birdir.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Kenar uzunlukları 4 cm ve 10 cm olan bir dikdörtgene <b>benzer</b> olan dikdörtgen aşağıdakilerden hangisidir?</p>',
        c: ['6 cm × 12 cm', '8 cm × 14 cm', '5 cm × 11 cm', '6 cm × 15 cm'], a: 'D',
        hint: 'Kısa kenarın uzun kenara oranını sadeleştir: {{4|10}} = {{2|5}}. Hangisinde aynı oran var?',
        hintV: 'Kısa kenarın uzun kenara oranını sadeleştir: onda dört, beşte iki. Hangisinde aynı oran var?',
        why: '{{4|10}} = {{2|5}} ve {{6|15}} = {{2|5}}. Diğerleri: {{1|2}}, {{4|7}}, {{5|11}}. 5 × 11 ise kenarlara 1 eklenmiş, benzer değil.',
        whyV: 'Onda dört, beşte iki. On beşte altı da beşte iki. Diğerlerinin oranı farklı. Beşe on bir ise kenarlara bir eklenmiş hâli; benzer değil.' },
      steps: [{ s: 'Sıra sende! Oranları sadeleştirip karşılaştır.' }] },

    { t: 'Benzerlik oranı',
      steps: [
        { s: 'Benzer iki çokgende karşılık gelen kenarların oranı sabittir. Bu sayıya benzerlik oranı, kısaca k deriz.',
          h: '<div class="an-big">{{&#124;AB&#124;|&#124;KL&#124;}} = {{&#124;BC&#124;|&#124;LM&#124;}} = … = k</div>' },
        { s: 'Kenarlar k katıysa çevre de k katı. Yükseklik, köşegen, bütün uzunluklar k katı. Açılar ise hiç değişmez!' },
        { s: 'Ama alan k ile değil, k · k ile çarpılır. Kenarlar 3 katına çıkarsa alan 9 katına çıkar.', v: 'Ama alan k ile değil, k çarpı k ile çarpılır. Kenarlar üç katına çıkarsa, alan dokuz katına çıkar.',
          h: '<div class="an-grid"><div><b>uzunluk</b>× k</div><div><b>açı</b>aynı</div><div><b>alan</b>× k · k</div></div>' },
        { s: 'Yön de önemli: büyüğün küçüğe oranı k ise küçüğün büyüğe oranı {{1|k}}.', v: 'Yön de önemli: büyüğün küçüğe oranı k ise, küçüğün büyüğe oranı bir bölü k.' },
        { s: 'Fotokopide %150 büyütme k = 1,5, %80 küçültme k = 0,8 demek. Art arda iki kopyada oranlar çarpılır.', v: 'Fotokopide yüzde yüz elli büyütme, k bir buçuk; yüzde seksen küçültme, k sıfır virgül sekiz demek. Art arda iki kopyada oranlar çarpılır.' }
      ] },

    { t: 'Oranla eksik kenarı bulmak',
      base: '<table class="an-tbl"><tr><th>Bilinen</th><th>k</th><th>Sonuç</th></tr>' +
        '<tr class="rv o1"><td>küçük: 4, 6, 7 · büyüğün en kısası 10</td><td>{{10|4}} = 2,5</td><td>en uzun: 7 · 2,5 = <b>17,5</b></td></tr>' +
        '<tr class="rv o2"><td>çevreler 30 ve 45 · küçükte 8 cm</td><td>{{45|30}} = {{3|2}}</td><td>8 · {{3|2}} = <b>12</b></td></tr></table>',
      steps: [
        { s: 'Benzerlik oranını bir kere bulduysan gerisi çarpma. Önce iki karşılık gelen uzunluğu eşleştir.' },
        { s: 'En kısa kenar en kısayla eşleşir: 10 bölü 4, 2,5. En uzun kenar 7 çarpı 2,5 = 17,5 cm.', v: 'En kısa kenar en kısayla eşleşir: on bölü dört, iki buçuk. En uzun kenar, yedi çarpı iki buçuk; on yedi buçuk santimetre.', on: '.o1' },
        { s: 'Çevreler de aynı oranda: 45 bölü 30, {{3|2}}. 8 cm’lik kenarın karşılığı 12 cm.', v: 'Çevreler de aynı oranda: kırk beş bölü otuz, ikide üç. Sekiz santimetrelik kenarın karşılığı on iki santimetre.', on: '.o2' }
      ] },

    { t: 'Çözümlü örnek: hangi kenar?',
      steps: [
        { s: '5 cm × 8 cm dikdörtgene benzer bir dikdörtgenin bir kenarı 20 cm. Çevresi en az kaç cm?', v: 'Beşe sekiz santimetrelik dikdörtgene benzer bir dikdörtgenin bir kenarı yirmi santimetre. Çevresi en az kaç santimetre?',
          h: '<div class="an-ex"><span class="an-l rv h1">20 ↔ 5 ise k = 4 → 20 × 32 → çevre 104</span><span class="an-l rv h2">20 ↔ 8 ise k = 2,5 → 12,5 × 20 → çevre <b>65</b></span></div>' },
        { s: 'Burada çok dikkat et: 20 cm’lik kenarın kısa mı uzun mu olduğu söylenmemiş. İki durumu da deneyeceğiz.', v: 'Burada çok dikkat et: yirmi santimetrelik kenarın kısa mı, uzun mu olduğu söylenmemiş. İki durumu da deneyeceğiz.' },
        { s: '20, 5’e karşılık gelirse k = 4: kenarlar 20 ve 32, çevre 104.', v: 'Yirmi, beşe karşılık gelirse k dört: kenarlar yirmi ve otuz iki, çevre yüz dört.', on: '.h1' },
        { s: '20, 8’e karşılık gelirse k = 2,5: kenarlar 12,5 ve 20, çevre 65. En az çevre 65 cm.', v: 'Yirmi, sekize karşılık gelirse k iki buçuk: kenarlar on iki buçuk ve yirmi, çevre altmış beş. En az çevre, altmış beş santimetre.', on: '.h2' }
      ] },

    { t: 'Kareli kâğıtta benzer çizim',
      base: '<svg class="an-svg" viewBox="0 0 330 140" role="img" aria-label="Kareli kâğıtta bir beşgen ve benzerlik oranı 2 olan büyütülmüş benzeri"><path class="ln" d="M8 8V120M24 8V120M40 8V120M56 8V120M72 8V120M88 8V120M104 8V120M120 8V120M136 8V120M152 8V120M168 8V120M184 8V120M200 8V120M216 8V120M232 8V120M248 8V120M264 8V120M280 8V120M296 8V120M312 8V120M8 8H312M8 24H312M8 40H312M8 56H312M8 72H312M8 88H312M8 104H312M8 120H312" style="stroke-width:.6;opacity:.6"/><path d="M24.0 40.0L56.0 40.0L72.0 72.0L40.0 88.0L24.0 72.0Z" style="fill:var(--c);fill-opacity:.35;stroke:var(--c);stroke-width:2.5"/><path class="rv b1" d="M120.0 24.0L184.0 24.0L216.0 88.0L152.0 120.0L120.0 88.0Z" style="fill:var(--noteline);fill-opacity:.3;stroke:var(--noteline);stroke-width:2.5"/><text x="8" y="30" font-size="12" class="acc">1 sağ, 2 aşağı</text><text x="235" y="65" font-size="12" class="rv b1" style="fill:var(--noteline)">2 sağ, 4 aşağı</text><path class="st rv b2" d="M56.0 40.0L72.0 72.0" style="stroke-width:4"/><path class="st2 rv b2" d="M184.0 24.0L216.0 88.0" style="stroke-width:4"/></svg>',
      steps: [
        { s: 'Kareli kâğıtta benzer çokgen çizmek için her kenarın yatay ve dikey adımlarını k ile çarparız.' },
        { s: 'Şu mavi beşgeni benzerlik oranı 2 ile büyütelim. Her adım iki katına çıkıyor.', on: '.b1' },
        { s: 'Mesela “1 sağ, 2 aşağı” giden eğik kenar, büyüğünde “2 sağ, 4 aşağı” gidiyor. İki adım da 2 ile çarpıldı, açı korundu.', v: 'Mesela bir sağ, iki aşağı giden eğik kenar, büyüğünde iki sağ, dört aşağı gidiyor. İki adım da ikiyle çarpıldı; açı korundu.', on: '.b2' },
        { s: 'Kâğıt kesmede de aynı fikir: 12 × 18’lik kâğıttan kısa kenarı 8 olan benzer parça, 8 × 12 olur.', v: 'Kâğıt kesmede de aynı fikir: on ikiye on sekizlik kâğıttan, kısa kenarı sekiz olan benzer parça, sekize on iki olur.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Benzer iki üçgenin çevreleri 24 cm ve 36 cm’dir. Küçük üçgenin 6 cm’lik kenarına karşılık gelen, büyük üçgenin kenarı kaç cm’dir?</p>',
        c: ['18', '12', '9', '8'], a: 'C',
        hint: 'Çevrelerin oranı benzerlik oranına eşittir: {{36|24}}.',
        hintV: 'Çevrelerin oranı, benzerlik oranına eşittir: yirmi dörtte otuz altı.',
        why: 'k = {{36|24}} = {{3|2}}. 6 · {{3|2}} = 9 cm. (12 cevabı farkı eklemektir: 6 + 6; benzerlikte çarpılır.)',
        whyV: 'K, yirmi dörtte otuz altı, yani ikide üç. Altı çarpı ikide üç, dokuz santimetre.' },
      steps: [{ s: 'Kısa bir soru. Çevrelerden oranı bul.' }] },

    { t: 'Gizli benzer üçgenler: kelebek',
      base: '<svg class="an-svg" viewBox="0 0 330 140" role="img" aria-label="Kareli zeminde paralel KL ve MN doğru parçaları; KM ile LN P noktasında kesişiyor"><path class="ln" d="M34 20V124M60 20V124M86 20V124M112 20V124M138 20V124M164 20V124M190 20V124M216 20V124M242 20V124M34 20H242M34 46H242M34 72H242M34 98H242M34 124H242" style="stroke-width:.6;opacity:.6"/><path d="M112.0 72.0L60.0 46.0L60.0 98.0Z" class="rv k1" style="fill:var(--c);fill-opacity:.3"/><path d="M112.0 72.0L216.0 124.0L216.0 20.0Z" class="rv k1" style="fill:var(--noteline);fill-opacity:.3"/><path class="st" d="M60 46V98" style="stroke-width:3.5"/><path class="st2" d="M216 20V124" style="stroke-width:3.5"/><path class="ln" d="M60 46L216 124 M60 98L216 20" style="stroke-width:2"/><circle cx="112" cy="72" r="4" style="fill:var(--bad)"/><text x="112" y="64" font-size="13" font-weight="700" text-anchor="middle">P</text><text x="46" y="51" font-size="13" font-weight="700">K</text><text x="46" y="103" font-size="13" font-weight="700">L</text><text x="224" y="129" font-size="13" font-weight="700">M</text><text x="224" y="25" font-size="13" font-weight="700">N</text><path class="dr k2" d="M60 80H112" style="stroke:var(--bad);stroke-width:2.5"/><text x="86" y="94" font-size="12" text-anchor="middle" class="rv k2" style="fill:var(--bad)">2 birim</text><path class="dr k2" d="M112 80H216" style="stroke:var(--ok);stroke-width:2.5"/><text x="164" y="94" font-size="12" text-anchor="middle" class="rv k2" style="fill:var(--ok)">4 birim</text></svg>',
      steps: [
        { s: 'LGS’de benzer üçgenler genelde bir şeklin içine gizlenir. En sık kalıp, paralel iki doğru parçası ve çapraz çizgiler: “kelebek”.', v: 'Le ge se’de benzer üçgenler genelde bir şeklin içine gizlenir. En sık kalıp: paralel iki doğru parçası ve çapraz çizgiler; kelebek.' },
        { s: 'KL ile MN dikey, yani paralel. KM ile LN, P’de kesişiyor. PKL ile PMN benzer üçgenler.', v: 'K L ile M N dikey, yani paralel. K M ile L N, P noktasında kesişiyor. P K L ile P M N, benzer üçgenler.', on: '.k1' },
        { s: 'KL 2 birim, MN 4 birim. Benzerlik oranı {{1|2}}. Demek ki P, aradaki 6 birimi 1’e 2 oranında böler.', v: 'K L iki birim, M N dört birim. Benzerlik oranı yarım. Demek ki P, aradaki altı birimi, bire iki oranında böler.' },
        { s: 'P, KL’ye 2 birim, MN’ye 4 birim uzak. Her birim 2 cm ise P’nin KL’ye uzaklığı 4 cm.', v: 'P, K L’ye iki birim, M N’ye dört birim uzak. Her birim iki santimetre ise, P’nin K L’ye uzaklığı dört santimetre.', on: '.k2' },
        { s: 'Kural: kısa kenar kısa kenara, uzun kenar uzun kenara karşılık gelir. Oranları hep aynı sırayla yaz.',
          h: '<div class="an-trap">Oranı yazarken iki kesri de aynı sırayla kur: {{küçük|büyük}} = {{küçük|büyük}}</div>' }
      ] },

    { t: 'Gölge ve ışık',
      base: '<svg class="an-svg" viewBox="0 0 330 150" role="img" aria-label="Güneş ışınları paralel: Ali ile gölgesi ve ağaç ile gölgesi benzer dik üçgenler oluşturur"><path class="ln" d="M8 130H322" style="stroke-width:2"/><path d="M40 130V98" style="stroke:var(--c);stroke-width:5;stroke-linecap:round"/><circle cx="40" cy="94" r="5" style="fill:var(--c)"/><path class="st2 dr s1" d="M40 92L80 130" style="stroke-dasharray:5 4"/><path class="rv s1" d="M40 130H80" style="stroke:var(--muted);stroke-width:5;opacity:.6"/><text x="34" y="116" font-size="12" text-anchor="end" class="acc">1,6</text><text x="60" y="145" font-size="12" text-anchor="middle" class="rv s1">2</text><path d="M170 130V40" style="stroke:var(--ok);stroke-width:6;stroke-linecap:round"/><circle cx="170" cy="40" r="20" style="fill:var(--ok);fill-opacity:.6"/><path class="st2 dr s2" d="M170 34L290 130" style="stroke-dasharray:5 4"/><path class="rv s2" d="M170 130H290" style="stroke:var(--muted);stroke-width:5;opacity:.6"/><text x="160" y="96" font-size="13" text-anchor="end" font-weight="700" style="fill:var(--ok)">h = ?</text><text x="230" y="145" font-size="12" text-anchor="middle" class="rv s2">15</text><text x="320" y="24" font-size="12" text-anchor="end" class="rv s3" style="fill:var(--noteline)">paralel ışınlar</text></svg>',
      steps: [
        { s: 'Güneş ışınları paraleldir. Bu yüzden aynı anda insan ve ağaç, gölgeleriyle benzer dik üçgenler oluşturur.', on: '.s1,.s2,.s3', w: 700 },
        { s: 'Boyu 1,6 m olan Ali’nin gölgesi 2 m. Aynı anda ağacın gölgesi 15 m. Ağaç kaç metre?', v: 'Boyu bir virgül altı metre olan Ali’nin gölgesi iki metre. Aynı anda ağacın gölgesi on beş metre. Ağaç kaç metre?' },
        { s: 'Benzer dik üçgenlerde yükseklik bölü taban oranı aynıdır. Bunu sen bulacaksın, hadi bakalım!', h: '<div class="an-rule">{{boy|gölge}} = {{1,6|2}} = {{h|15}}</div>', v: 'Benzer dik üçgenlerde, yükseklik bölü taban oranı aynıdır. Bunu sen bulacaksın; hadi bakalım!' },
        { s: 'Son yıllarda benzer üçgenler Pisagor’la birleşiyor: 3-4-5 ve 12-16-20 üçgenleri çok çıktı. Gözün alışsın.', v: 'Son yıllarda benzer üçgenler Pisagor’la birleşiyor: üç dört beş, ve on iki on altı yirmi üçgenleri çok çıktı. Gözün alışsın.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Boyu 1,6 m olan Ali’nin gölgesinin uzunluğu 2 m iken aynı anda bir ağacın gölgesinin uzunluğu 15 m’dir. Ağacın boyu kaç metredir?</p>',
        c: ['10', '12', '13,6', '18,75'], a: 'B',
        hint: '{{1,6|2}} = {{h|15}} orantısını kur.',
        hintV: 'İkide bir virgül altı, on beşte h’ye eşit. Bu orantıyı kur.',
        why: '{{1,6|2}} = 0,8 → h = 0,8 · 15 = 12 m. 13,6 farkı eklemek (2’den 15’e 13 eklenmiş gibi), 18,75 ise oranı ters kurmaktır.',
        whyV: 'İkide bir virgül altı, sıfır virgül sekiz. Ağaç sıfır virgül sekiz çarpı on beş, on iki metre. On üç virgül altı farkı eklemek; on sekiz virgül yetmiş beş ise oranı ters kurmak.' },
      steps: [{ s: 'Son soru! Orantıyı aynı sırayla kur.' }] }
  ]
};
