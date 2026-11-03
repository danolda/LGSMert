/* Adım Adım Anlatım · Matematik · Basit Olayların Olma Olasılığı (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['mat-olasilik'] = {
  title: 'Basit Olayların Olma Olasılığı',
  desc: 'Deney, çıktı ve olay; daha olası-eşit olası karşılaştırmaları, 0 ile 1 arası, olasılığı hesaplamak ve LGS’nin sevdiği “olasılık verildi, sayıyı bul” soruları.',
  ozet: [
    'P(olay) = {{istenen durum sayısı|tüm durum sayısı}}. Paydaya renk sayısı değil, top (kart, kişi) sayısı yazılır.',
    'Tekrar eden harfler ayrı karttır: “OLASILIK” 8 kart, 6 farklı harf.',
    'Aynı deneyde durumu çok olan olay daha olasıdır. Farklı torbalarda sayıya değil orana bakılır.',
    'Eş şanslı n çıktının her biri {{1|n}}. Para önceki atışları hatırlamaz: her atışta yazı {{1|2}}.',
    '0 ≤ P ≤ 1. İmkânsız olay 0, kesin olay 1. P(olmama) = 1 − P(olma).',
    '“Boş yerlerden”, “kalan kartlardan” gibi ifadeler paydayı değiştirir.',
    'Sayma: a’dan b’ye b − a + 1 sayı; 1–n arasında k’nın katı n ÷ k’nın tam kısmı kadar.',
    'Olasılık oran gibidir: P(K) = {{2|7}} ise K : diğerleri = 2 : 5. Torbalar birleşince top sayıları toplanır, olasılıklar toplanmaz.'
  ],
  scenes: [
    { t: 'Deney, çıktı, olay',
      base: '<svg class="an-svg" viewBox="0 0 330 175" role="img" aria-label="3 kırmızı ve 5 mavi top bulunan torba; tüm olası durumlar 8, kırmızı top çekme olayı 3 durum"><path class="box" d="M60 40 Q40 40 34 70 L24 140 Q22 165 50 165 L190 165 Q218 165 216 140 L206 70 Q200 40 180 40 Z" style="stroke-width:2"/><path class="ln" d="M60 40 Q120 28 180 40" style="stroke-width:2"/><circle cx="62" cy="82" r="17" style="fill:var(--bad)"/><text x="62" y="87" font-size="14" text-anchor="middle" font-weight="700" style="fill:#fff" class="rv t1">1</text><circle cx="102" cy="82" r="17" style="fill:var(--bad)"/><text x="102" y="87" font-size="14" text-anchor="middle" font-weight="700" style="fill:#fff" class="rv t1">2</text><circle cx="142" cy="82" r="17" style="fill:var(--bad)"/><text x="142" y="87" font-size="14" text-anchor="middle" font-weight="700" style="fill:#fff" class="rv t1">3</text><circle cx="182" cy="82" r="17" style="fill:var(--c)"/><text x="182" y="87" font-size="14" text-anchor="middle" font-weight="700" style="fill:#fff" class="rv t1">4</text><circle cx="62" cy="128" r="17" style="fill:var(--c)"/><text x="62" y="133" font-size="14" text-anchor="middle" font-weight="700" style="fill:#fff" class="rv t1">5</text><circle cx="102" cy="128" r="17" style="fill:var(--c)"/><text x="102" y="133" font-size="14" text-anchor="middle" font-weight="700" style="fill:#fff" class="rv t1">6</text><circle cx="142" cy="128" r="17" style="fill:var(--c)"/><text x="142" y="133" font-size="14" text-anchor="middle" font-weight="700" style="fill:#fff" class="rv t1">7</text><circle cx="182" cy="128" r="17" style="fill:var(--c)"/><text x="182" y="133" font-size="14" text-anchor="middle" font-weight="700" style="fill:#fff" class="rv t1">8</text><rect x="40" y="60" width="124" height="44" rx="22" class="st2 dr t2" style="fill:none"/><text x="232" y="62" font-size="13" class="rv t1">tüm durumlar:</text><text x="232" y="82" font-size="16" font-weight="700" class="rv t1">8 top</text><text x="232" y="110" font-size="13" class="rv t2">istenen (kırmızı):</text><text x="232" y="130" font-size="16" font-weight="700" class="rv t2" style="fill:var(--bad)">3 top</text><text x="232" y="160" font-size="17" font-weight="700" class="acc rv t3">P = 3/8</text></svg>',
      steps: [
        { s: 'Merhaba! Olasılık, bir şeyin olma şansını 0 ile 1 arasında bir sayıyla ölçmektir. Şu torbaya bir bakalım.', v: 'Merhaba! Olasılık, bir şeyin olma şansını, sıfır ile bir arasında bir sayıyla ölçmektir. Şu torbaya bir bakalım.' },
        { s: 'Torbadan rastgele bir top çekmek bizim deneyimiz. Sonucu önceden bilemiyoruz.' },
        { s: 'Her top ayrı bir çıktıdır. Yani tüm olası durumlar 8 tane, renk sayısı olan 2 değil!', v: 'Her top ayrı bir çıktıdır. Yani tüm olası durumlar sekiz tane; renk sayısı olan iki değil!', on: '.t1' },
        { s: '“Kırmızı top gelmesi” bizim olayımız. Onu sağlayan 3 top var: bunlar istenen durumlar.', v: 'Kırmızı top gelmesi, bizim olayımız. Onu sağlayan üç top var: bunlar istenen durumlar.', on: '.t2' },
        { s: 'Olasılık, istenen durumların tüm durumlara oranı: 3 bölü 8.', v: 'Olasılık, istenen durumların tüm durumlara oranı: sekizde üç.', on: '.t3',
          h: '<div class="an-rule"><b>P(olay)</b> = {{istenen durum sayısı|tüm durum sayısı}} &nbsp;→&nbsp; P(kırmızı) = {{3|8}}</div>' }
      ] },

    { t: 'Tüm durumları doğru saymak',
      base: '<table class="an-tbl"><tr><th>Deney</th><th>Tüm durumlar</th></tr>' +
        '<tr><td>Madeni para atmak</td><td>yazı, tura → <b>2</b></td></tr>' +
        '<tr><td>10 eş dilimli çark</td><td>her dilim → <b>10</b></td></tr>' +
        '<tr class="rv o1"><td>“OLASILIK” harf kartları</td><td>O, L, A, S, I, L, I, K → <b>8</b></td></tr>' +
        '<tr class="rv o2"><td>İki basamaklı sayı kartları</td><td>10, 11, …, 99 → <b>90</b></td></tr></table>',
      steps: [
        { s: 'Olasılıkta işin yarısı paydayı doğru bulmak. Deneyin bütün sonuçlarını eksiksiz ve tekrarsız say.' },
        { s: '“OLASILIK” kelimesinde 6 farklı harf var, ama 8 kart var. Tekrar eden harfler ayrı kartlara yazılır.', v: 'Olasılık kelimesinde altı farklı harf var, ama sekiz kart var. Tekrar eden harfler, ayrı kartlara yazılır.', on: '.o1', mk: '.o1 td' },
        { s: 'İki basamaklı sayılar 10’dan 99’a kadar: 99 − 10 + 1 = 90 tane. O “artı 1”i unutma.', v: 'İki basamaklı sayılar ondan doksan dokuza kadar: doksan dokuz eksi on artı bir, doksan tane. O artı biri unutma.', on: '.o2' },
        { s: 'Kısacası: paydaya hep tek tek nesnelerin sayısı yazılır. Renk ya da çeşit sayısı değil.',
          h: '<div class="an-trap">“3 kırmızı, 5 mavi top: olası durumlar kırmızı ve mavi, yani 2” → <span class="an-bad-t">yanlış</span>. Doğrusu <span class="an-ok-t">8</span>.</div>' }
      ] },

    { t: 'Daha olası, eşit olası, daha az olası',
      steps: [
        { s: 'Aynı deneyde iki olayı karşılaştırırken çoğu zaman hesaba gerek yok: hangi olayın durumu çoksa o daha olası.' },
        { s: '15 kız, 15 erkek olan bir sınıftan seçilen birinin kız olması ile erkek olması eşit olasılıklıdır.', v: 'On beş kız, on beş erkek olan bir sınıftan seçilen birinin kız olması ile erkek olması, eşit olasılıklıdır.' },
        { s: 'Zarda 6 gelmesi ile 1 gelmesi de eşit olasılıklı. “6 büyük sayı, gelmesi zor” diye bir şey yok!', v: 'Zarda altı gelmesi ile bir gelmesi de eşit olasılıklı. Altı büyük sayı, gelmesi zor, diye bir şey yok!',
          h: '<div class="an-trap">P(6) = P(1) = {{1|6}}. Ama P(6’dan küçük) = {{5|6}} > P(6) = {{1|6}}.</div>' },
        { s: 'Bir şey daha: daha olası olması, kesinlikle olacağı anlamına gelmez. Sadece şansı daha yüksektir.' }
      ] },

    { t: 'Farklı torbalar: orana bak',
      steps: [
        { s: 'Şimdi iki farklı torbayı karşılaştıralım. A’da 2 kırmızı, 3 mavi; B’de 3 kırmızı, 5 mavi top var.', v: 'Şimdi iki farklı torbayı karşılaştıralım. A’da iki kırmızı, üç mavi; B’de üç kırmızı, beş mavi top var.',
          h: '<div class="an-ex"><span class="an-l">P<sub>A</sub>(K) = {{2|5}} = 0,4</span><span class="an-l">P<sub>B</sub>(K) = {{3|8}} = 0,375</span></div>' },
        { s: 'B’de kırmızı top daha çok. Ama A’da olasılık 0,4, B’de 0,375. A’dan kırmızı çekmek daha olası!', v: 'B’de kırmızı top daha çok. Ama A’da olasılık sıfır virgül dört, B’de sıfır virgül üç yüz yetmiş beş. A’dan kırmızı çekmek daha olası!' },
        { s: 'Karşılaştırmanın kısa yolları şunlar. Pay ve payda ikisi de farklıysa ondalığa çevir.',
          h: '<table class="an-tbl"><tr><th>Durum</th><th>Daha olası</th></tr><tr><td>Paydalar eşit</td><td>payı büyük olan</td></tr><tr><td>Paylar eşit</td><td>paydası küçük olan</td></tr><tr><td>İkisi de farklı</td><td>ondalık ya da yüzdeye çevir</td></tr></table>' },
        { s: '{{1|2}} ile kıyas da kolay: istenen durum, istenmeyenden fazlaysa olasılık {{1|2}}’den büyüktür.', v: 'Yarım ile kıyas da kolay: istenen durum, istenmeyenden fazlaysa, olasılık yarımdan büyüktür.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Dört torbadaki sarı ve yeşil top sayıları verilmiştir. Hangi torbadan rastgele çekilen topun <b>sarı</b> olma olasılığı <b>en fazladır</b>?</p>',
        c: ['3 sarı, 5 yeşil', '4 sarı, 7 yeşil', '5 sarı, 9 yeşil', '2 sarı, 4 yeşil'], a: 'A',
        hint: 'Sarı topu en çok olan torbaya değil, sarının toplama oranına bak. Her birini ondalığa çevir.',
        why: '{{3|8}} = 0,375; {{4|11}} ≈ 0,364; {{5|14}} ≈ 0,357; {{2|6}} ≈ 0,333. En fazla ilk torbada. Sarısı en çok olan torba en olası değil, çünkü toplam da arttı.',
        whyV: 'Sekizde üç, sıfır virgül üç yüz yetmiş beş. On birde dört yaklaşık sıfır virgül üç yüz altmış dört. On dörtte beş yaklaşık sıfır virgül üç yüz elli yedi. Altıda iki de üçte bir. En fazla ilk torbada. Sarısı en çok olan torba en olası değil, çünkü toplam da arttı.' },
      steps: [{ s: 'Sıra sende! Sayıya değil, orana bak.' }] },

    { t: 'Eşit şanslı çıktılar',
      base: '<svg class="an-svg" viewBox="0 0 330 175" role="img" aria-label="Solda 8 eş dilimli çark: 3 kırmızı, 3 mavi, 2 sarı. Sağda eş olmayan çark: mavi yarım, kırmızı ve sarı çeyrek"><path d="M80 85 L80.0 17.0 A68 68 0 0 1 128.1 36.9 Z" style="fill:var(--bad);fill-opacity:.85;stroke:var(--card2);stroke-width:2"/><path d="M80 85 L128.1 36.9 A68 68 0 0 1 148.0 85.0 Z" style="fill:var(--c);fill-opacity:.85;stroke:var(--card2);stroke-width:2"/><path d="M80 85 L148.0 85.0 A68 68 0 0 1 128.1 133.1 Z" style="fill:var(--bad);fill-opacity:.85;stroke:var(--card2);stroke-width:2"/><path d="M80 85 L128.1 133.1 A68 68 0 0 1 80.0 153.0 Z" style="fill:var(--noteline);fill-opacity:.85;stroke:var(--card2);stroke-width:2"/><path d="M80 85 L80.0 153.0 A68 68 0 0 1 31.9 133.1 Z" style="fill:var(--c);fill-opacity:.85;stroke:var(--card2);stroke-width:2"/><path d="M80 85 L31.9 133.1 A68 68 0 0 1 12.0 85.0 Z" style="fill:var(--bad);fill-opacity:.85;stroke:var(--card2);stroke-width:2"/><path d="M80 85 L12.0 85.0 A68 68 0 0 1 31.9 36.9 Z" style="fill:var(--c);fill-opacity:.85;stroke:var(--card2);stroke-width:2"/><path d="M80 85 L31.9 36.9 A68 68 0 0 1 80.0 17.0 Z" style="fill:var(--noteline);fill-opacity:.85;stroke:var(--card2);stroke-width:2"/><text x="80" y="172" font-size="12.5" text-anchor="middle" class="rv w1">her dilim 1/8</text><path d="M245 85 L245.0 17.0 A68 68 0 0 1 245.0 153.0 Z" style="fill:var(--c);fill-opacity:.8;stroke:var(--card2);stroke-width:2" class="rv w2"/><text x="287.2" y="89.0" font-size="12" text-anchor="middle" font-weight="700" style="fill:#fff" class="rv w2"></text><path d="M245 85 L245.0 153.0 A68 68 0 0 1 177.0 85.0 Z" style="fill:var(--bad);fill-opacity:.8;stroke:var(--card2);stroke-width:2" class="rv w2"/><text x="215.2" y="118.8" font-size="12" text-anchor="middle" font-weight="700" style="fill:#fff" class="rv w2"></text><path d="M245 85 L177.0 85.0 A68 68 0 0 1 245.0 17.0 Z" style="fill:var(--noteline);fill-opacity:.8;stroke:var(--card2);stroke-width:2" class="rv w2"/><text x="215.2" y="59.2" font-size="12" text-anchor="middle" font-weight="700" style="fill:#fff" class="rv w2"></text><path class="st dr w3" d="M245 17 V153 M177 85 H313" style="stroke-dasharray:5 4"/><text x="245" y="172" font-size="12.5" text-anchor="middle" class="rv w3">4 eş çeyrek: M 2, K 1, S 1</text></svg>',
      steps: [
        { s: 'Bir deneyde hiçbir sonuç ötekinden kolay ya da zor değilse bunlara eşit şanslı çıktılar deriz.' },
        { s: 'Soldaki çarkın 8 dilimi eş. Her dilimin olasılığı {{1|8}}. Kırmızı 3 dilim, yani {{3|8}}.', v: 'Soldaki çarkın sekiz dilimi eş. Her dilimin olasılığı sekizde bir. Kırmızı üç dilim, yani sekizde üç.', on: '.w1' },
        { s: 'Sağdaki çarkın bölgeleri eş değil. Burada 3 bölge var diye her birine {{1|3}} diyemeyiz!', v: 'Sağdaki çarkın bölgeleri eş değil. Burada üç bölge var diye, her birine üçte bir diyemeyiz!', on: '.w2' },
        { s: 'Çözüm: çarkı eş parçalara böl. 4 çeyrekten mavi 2 tane, kırmızı ve sarı birer tane.', v: 'Çözüm: çarkı eş parçalara böl. Dört çeyrekten mavi iki tane, kırmızı ve sarı birer tane.', on: '.w3', w: 600 },
        { s: 'Yani P(mavi) = {{1|2}}, P(kırmızı) = P(sarı) = {{1|4}}.', v: 'Yani mavinin olasılığı yarım; kırmızı ve sarınınki dörtte bir.',
          h: '<div class="an-tip">“Hileli olmayan”, “eş dilimli”, “renkleri dışında özdeş” ifadeleri çıktıların eşit şanslı olduğunu söyler.</div>' }
      ] },

    { t: 'Para hafızasızdır',
      steps: [
        { s: 'Hileli olmayan bir para art arda 5 kez yazı geldi. Şimdi tura gelme şansı arttı mı? Hayır!', v: 'Hileli olmayan bir para art arda beş kez yazı geldi. Şimdi tura gelme şansı arttı mı? Hayır!',
          h: '<div class="an-trap">Önceki sonuçlar ne olursa olsun, bir sonraki atışta P(yazı) = P(tura) = {{1|2}}</div>' },
        { s: 'Para önceki atışları hatırlamaz. Her atış yepyeni bir deneydir.' },
        { s: 'Ama kurada bir kişinin adı iki karta yazılırsa eşitlik bozulur. 20 kişiden birinin şansı {{2|21}} olur.', v: 'Ama kurada bir kişinin adı iki karta yazılırsa eşitlik bozulur. Yirmi kişiden birinin şansı, yirmi birde iki olur.' },
        { s: 'Olasılık kesir, ondalık ya da yüzdeyle yazılabilir: {{1|4}} = 0,25 = %25. Hava durumundaki “%70 yağış” da bir olasılık.', v: 'Olasılık kesir, ondalık ya da yüzdeyle yazılabilir: dörtte bir, sıfır virgül yirmi beş, yüzde yirmi beş. Hava durumundaki yüzde yetmiş yağış da bir olasılık.' }
      ] },

    { t: 'Olasılık 0 ile 1 arasındadır',
      base: '<svg class="an-svg" viewBox="0 0 340 118" role="img" aria-label="Olasılık ölçeği: 0 imkânsız, altıda bir zarda 6 gelmesi, yarım paranın tura gelmesi, altıda beş zarda 6 dan küçük gelmesi, 1 kesin"><path class="ln" d="M14 60H326" style="stroke-width:2"/><circle cx="20.0" cy="60" r="6" class="boxa rv z1"/><text x="20.0" y="42" font-size="17" text-anchor="middle" font-weight="700" class="acc rv z1">0</text><text x="14.0" y="86" font-size="12.5" text-anchor="start" class="rv z1">imkânsız</text><circle cx="70.0" cy="60" r="6" class="boxa rv z2"/><text x="70.0" y="42" font-size="17" text-anchor="middle" font-weight="700" class="acc rv z2">⅙</text><text x="70.0" y="108" font-size="12.5" text-anchor="middle" class="rv z2">zarda 6</text><circle cx="170.0" cy="60" r="6" class="boxa rv z3"/><text x="170.0" y="42" font-size="17" text-anchor="middle" font-weight="700" class="acc rv z3">½</text><text x="170.0" y="86" font-size="12.5" text-anchor="middle" class="rv z3">tura</text><circle cx="270.0" cy="60" r="6" class="boxa rv z4"/><text x="270.0" y="42" font-size="17" text-anchor="middle" font-weight="700" class="acc rv z4">⅚</text><text x="270.0" y="108" font-size="12.5" text-anchor="middle" class="rv z4">zarda 6’dan küçük</text><circle cx="320.0" cy="60" r="6" class="boxa rv z5"/><text x="320.0" y="42" font-size="17" text-anchor="middle" font-weight="700" class="acc rv z5">1</text><text x="326.0" y="86" font-size="12.5" text-anchor="end" class="rv z5">kesin</text></svg>',
      steps: [
        { s: 'İstenen durum sayısı ne 0’dan az ne de tüm durumlardan fazla olabilir. Bu yüzden olasılık 0 ile 1 arasında.', v: 'İstenen durum sayısı, ne sıfırdan az, ne de tüm durumlardan fazla olabilir. Bu yüzden olasılık sıfır ile bir arasında.', on: '.z3' },
        { s: 'Hiç gerçekleşmeyen olay imkânsız olaydır, olasılığı 0. Mesela zarda 7 gelmesi.', v: 'Hiç gerçekleşmeyen olay imkânsız olaydır; olasılığı sıfır. Mesela zarda yedi gelmesi.', on: '.z1' },
        { s: 'Her durumda gerçekleşen olay kesin olaydır, olasılığı 1. Zarda 7’den küçük gelmesi gibi.', v: 'Her durumda gerçekleşen olay kesin olaydır; olasılığı bir. Zarda yediden küçük gelmesi gibi.', on: '.z5' },
        { s: 'Arada kalanlar: zarda 6 gelmesi {{1|6}}, 6’dan küçük gelmesi {{5|6}}.', v: 'Arada kalanlar: zarda altı gelmesi altıda bir, altıdan küçük gelmesi altıda beş.', on: '.z2,.z4' },
        { s: 'Ve çok işe yarayan kural: olma ile olmama olasılıklarının toplamı 1.', v: 'Ve çok işe yarayan kural: olma ile olmama olasılıklarının toplamı, bir.',
          h: '<div class="an-rule"><b>P(olmama) = 1 − P(olma)</b><br><small>yağma %35 → yağmama %65 &nbsp;·&nbsp; {{3|10}} → {{7|10}}</small></div>' },
        { s: 'Hesabın {{5|4}} gibi 1’den büyük bir sonuç verdiyse dur; bir yerde fazla saymışsın.', v: 'Hesabın, dörtte beş gibi birden büyük bir sonuç verdiyse dur; bir yerde fazla saymışsın.' }
      ] },

    { t: 'Olasılığı hesaplamak',
      base: '<table class="an-tbl"><tr><th>Zarda olay</th><th>İstenenler</th><th>P</th></tr>' +
        '<tr class="rv h1"><td>tek sayı</td><td>1, 3, 5</td><td>{{3|6}} = {{1|2}}</td></tr>' +
        '<tr class="rv h2"><td>asal sayı</td><td>2, 3, 5</td><td>{{3|6}} = {{1|2}}</td></tr>' +
        '<tr class="rv h3"><td>4’ten büyük</td><td>5, 6</td><td>{{2|6}} = {{1|3}}</td></tr>' +
        '<tr class="rv h4"><td>6’nın böleni</td><td>1, 2, 3, 6</td><td>{{4|6}} = {{2|3}}</td></tr></table>',
      steps: [
        { s: 'Hesaplarken dört adım izle: tüm durumları say, istenenleri say, kesri yaz ve sadeleştir, sonra kontrol et.' },
        { s: 'Zarda tek sayı: 1, 3, 5. Altıda üç, yani yarım.', v: 'Zarda tek sayı: bir, üç, beş. Altıda üç, yani yarım.', on: '.h1' },
        { s: 'Asal sayı: 2, 3 ve 5. Dikkat, 1 asal değil! Yine yarım.', v: 'Asal sayı: iki, üç ve beş. Dikkat, bir asal değil! Yine yarım.', on: '.h2' },
        { s: '4’ten büyük: 5 ve 6, üçte bir. 6’nın bölenleri: 1, 2, 3, 6, üçte iki.', v: 'Dörtten büyük: beş ve altı; üçte bir. Altının bölenleri: bir, iki, üç, altı; üçte iki.', on: '.h3,.h4' },
        { s: 'Şıklarda kesir sadeleşmiş verilebilir, sen de sadeleştirmeyi unutma.' }
      ] },

    { t: 'Çözümlü örnek: payda değişiyor',
      steps: [
        { s: '1’den 24’e numaralı park yerlerinden 9’u dolu: 2, 3, 5, 8, 11, 13, 17, 20, 23. Araç boş bir yere park ediyor.', v: 'Birden yirmi dörde numaralı park yerlerinden dokuzu dolu: iki, üç, beş, sekiz, on bir, on üç, on yedi, yirmi ve yirmi üç. Gelen araç boş bir yere park ediyor.',
          h: '<div class="an-ex"><span class="an-l">Soru: park yeri numarasının çift olma olasılığı?</span><span class="an-l rv y1">Tüm durumlar: boş yerler = 24 − 9 = <b>15</b></span><span class="an-l rv y2">Çiftler 12 tane; dolu çiftler 2, 8, 20 → boş çift = <b>9</b></span><span class="an-l rv y3">P = {{9|15}} = <b>{{3|5}}</b></span></div>' },
        { s: 'Burada çok dikkat et: araç yalnızca boş yerlere park edebilir. Payda 24 değil, 15.', v: 'Burada çok dikkat et: araç yalnızca boş yerlere park edebilir. Payda yirmi dört değil, on beş.', on: '.y1', mk: '.y1' },
        { s: '1–24 arasında 12 çift sayı var. Bunlardan 2, 8 ve 20 dolu. Geriye 9 boş çift numara kalıyor.', v: 'Bir ile yirmi dört arasında on iki çift sayı var. Bunlardan iki, sekiz ve yirmi dolu. Geriye dokuz boş çift numara kalıyor.', on: '.y2' },
        { s: 'Olasılık 15’te 9, sadeleşince 5’te 3.', v: 'Olasılık on beşte dokuz; sadeleşince beşte üç.', on: '.y3' },
        { s: '“Boş koltuklardan”, “kalan kartlardan”, “yanmayan ışıklardan” gibi sözler paydayı hep değiştirir.', v: 'Boş koltuklardan, kalan kartlardan, yanmayan ışıklardan gibi sözler, paydayı hep değiştirir.' }
      ] },

    { t: 'Sayma ipuçları',
      steps: [
        { s: 'Saymayı hızlandıran birkaç kısa yol öğrenelim.',
          h: '<div class="an-rule"><b>a’dan b’ye</b> (ikisi dâhil) sayı adedi: b − a + 1</div>' },
        { s: 'Mesela 15’ten 40’a kadar 40 − 15 + 1 = 26 sayı var.', v: 'Mesela on beşten kırka kadar; kırk eksi on beş artı bir, yirmi altı sayı var.' },
        { s: '1’den 50’ye kadar 3’ün katı kaç tane? 50’yi 3’e böl: 16 tam, yani 16 tane.', v: 'Birden elliye kadar üçün katı kaç tane? Elliyi üçe böl: on altı tam; yani on altı tane.',
          h: '<div class="an-rule"><b>1’den n’ye</b> k’nın katları: n ÷ k bölümünün tam kısmı</div>' },
        { s: 'Kelime kartlarında tekrar eden harfleri ayrı say: “MATEMATİK” 9 kart; M, A ve T ikişer tane.', v: 'Kelime kartlarında tekrar eden harfleri ayrı say: matematik kelimesi dokuz kart; M, A ve T ikişer tane.' },
        { s: 'Rakam kartlarıyla sayı kurulan sorularda hepsini listele; 0 başa gelemez, onu unutma.', v: 'Rakam kartlarıyla sayı kurulan sorularda hepsini listele; sıfır başa gelemez, onu unutma.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>1’den 30’a kadar numaralanmış dolaplardan 3, 7, 12, 18, 21 ve 25 numaralı olanlar doludur. Boş dolaplardan biri rastgele seçiliyor. Seçilen dolabın numarasının <b>5’in katı</b> olma olasılığı kaçtır?</p>',
        c: ['{{1|5}}', '{{5|24}}', '{{1|6}}', '{{6|30}}'], a: 'B',
        hint: 'Seçim yalnızca boş dolaplardan yapılıyor. Payda 30 değil! Dolu olan 5’in katlarını da çıkar.',
        hintV: 'Seçim yalnızca boş dolaplardan yapılıyor. Payda otuz değil! Dolu olan beşin katlarını da çıkar.',
        why: 'Boş dolap 30 − 6 = 24. 5’in katları 5, 10, 15, 20, 25, 30; 25 dolu → 5 boş. P = {{5|24}}.',
        whyV: 'Boş dolap, otuz eksi altı, yirmi dört. Beşin katları altı tane; ama yirmi beş dolu, yani beş tanesi boş. Olasılık yirmi dörtte beş.' },
      steps: [{ s: 'Paydaya dikkat! Seç ve İşaretle.', v: 'Paydaya dikkat! Seç ve işaretle.' }] },

    { t: 'Olasılık verildi, sayıyı bul',
      steps: [
        { s: 'LGS’de olasılık çoğu zaman sonuç değil, ipucu olarak verilir. O zaman olasılığı bir oran gibi düşün.', v: 'Le ge se’de olasılık çoğu zaman sonuç değil, ipucu olarak verilir. O zaman olasılığı bir oran gibi düşün.' },
        { s: 'Torbada yalnız kırmızı ve mavi var. P(K) = {{2|7}} ve 10 mavi top var. Kaç kırmızı var?', v: 'Torbada yalnız kırmızı ve mavi var. Kırmızının olasılığı yedide iki ve on mavi top var. Kaç kırmızı var?',
          h: '<div class="an-ex"><span class="an-l rv n1">K : toplam = 2 : 7 → K : M = 2 : 5</span><span class="an-l rv n2">5 pay = 10 mavi → 1 pay = 2</span><span class="an-l rv n3">K = 2 pay = <b>4</b></span></div>' },
        { s: 'Kırmızı 2 pay ise toplam 7 pay; mavi 5 pay.', v: 'Kırmızı iki pay ise toplam yedi pay; mavi de beş pay.', on: '.n1' },
        { s: '5 pay 10 top, demek ki 1 pay 2 top. Kırmızı 4 tane.', v: 'Beş pay on top; demek ki bir pay iki top. Kırmızı dört tane.', on: '.n2,.n3' },
        { s: '“Olasılık değişmedi” diyorsa renk oranı korunur: 3 K, 5 M’ye 6 K eklenirse 10 M de eklenmeli.', v: 'Olasılık değişmedi diyorsa renk oranı korunur: üç kırmızı, beş mavi topa altı kırmızı eklenirse, on mavi de eklenmeli.' }
      ] },

    { t: 'İki torbayı birleştirmek',
      steps: [
        { s: 'Son bir tuzak. 20 topun %25’i kırmızı olan torba ile 30 topun %60’ı kırmızı olan torba birleşiyor.', v: 'Son bir tuzak. Yirmi topun yüzde yirmi beşi kırmızı olan torba ile, otuz topun yüzde altmışı kırmızı olan torba birleşiyor.',
          h: '<div class="an-ex"><span class="an-l">kırmızı: 5 + 18 = 23 &nbsp;·&nbsp; toplam: 20 + 30 = 50</span><span class="an-l">P = {{23|50}} = <b>%46</b></span></div>' },
        { s: 'Olasılıklar toplanmaz, ortalamaları da alınmaz. Top sayıları toplanır: 50 topta 23 kırmızı, yüzde 46.', v: 'Olasılıklar toplanmaz, ortalamaları da alınmaz. Top sayıları toplanır: elli topta yirmi üç kırmızı; yüzde kırk altı.',
          h: '<div class="an-trap"><span class="an-bad-t">%25 + %60</span> &nbsp; <span class="an-bad-t">(%25 + %60) ÷ 2 = %42,5</span> &nbsp; → &nbsp;<span class="an-ok-t">%46</span></div>' },
        { s: 'Bir de “daha fazla” kelimesine dikkat: eşitlik dâhil değildir. “En az”, “en fazla”, “sadece” sorunun anahtarıdır.', v: 'Bir de daha fazla kelimesine dikkat: eşitlik dâhil değildir. En az, en fazla, sadece gibi kelimeler, sorunun anahtarıdır.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Bir torbada yalnızca kırmızı ve mavi toplar vardır. Rastgele çekilen bir topun kırmızı olma olasılığı {{3|8}}’dir. Torbada 15 mavi top olduğuna göre, torbaya kaç kırmızı top eklenirse kırmızı top çekme olasılığı {{1|2}} olur?</p>',
        c: ['3', '6', '9', '15'], a: 'B',
        hint: 'K : M = 3 : 5. Önce kaç kırmızı top olduğunu bul. Olasılık {{1|2}} olması için kırmızı sayısı neye eşit olmalı?',
        hintV: 'Kırmızının maviye oranı üçe beş. Önce kaç kırmızı top olduğunu bul. Olasılığın yarım olması için kırmızı sayısı neye eşit olmalı?',
        why: 'K : M = 3 : 5 → 5 pay = 15, 1 pay = 3, K = 9. Olasılık {{1|2}} olunca kırmızı = mavi = 15 olmalı: 15 − 9 = 6 top eklenir.',
        whyV: 'Kırmızının maviye oranı üçe beş. Beş pay on beş ise bir pay üç; kırmızı dokuz. Olasılığın yarım olması için kırmızı ile mavi eşit, yani on beş olmalı. On beş eksi dokuz, altı top eklenir.' },
      steps: [{ s: 'Son soru, tam LGS kalıbı! Olasılığı oran gibi düşün.', v: 'Son soru, tam le ge se kalıbı! Olasılığı oran gibi düşün.' }] }
  ]
};
