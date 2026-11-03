/* Adım Adım Anlatım · Fen · Basınç (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['fen-basinc'] = {
  title: 'Basınç',
  desc: 'Katı basıncında ağırlık ve yüzey alanı, sıvı basıncında derinlik ve yoğunluk, deney tasarımı, açık hava basıncı ve Pascal prensibi; LGS tuzaklarıyla sahne sahne.',
  ozet: [
    'Basınç, birim yüzeye dik etki eden kuvvettir (birimi pascal). Kuvvet ile basınç ayrı şeylerdir: tuğla çevrilince kuvvet (ağırlık) değişmez, basınç değişir.',
    'Katı basıncı ağırlıkla artar, temas alanı küçülünce artar. Ağırlık ve alan aynı oranda artarsa basınç değişmez. İz derinliği basıncın göstergesidir.',
    'Deney tasarımında yalnızca incelenen değişken değişir; iki değişken birden değişen düzenekler karşılaştırılamaz.',
    'Katılar kuvveti aynen iletir (çivi), basıncı ileten sıvılardır. Sivri uç basıncı artırır, geniş taban basıncı azaltır.',
    'Sıvı basıncı derinliğe ve sıvının yoğunluğuna bağlıdır; kabın şekline, genişliğine, ölçerin yönüne bağlı değildir. Derinlik sıvının açık yüzeyinden aşağı ölçülür.',
    'Sıvı miktarı tek başına basıncı belirlemez; ancak derinlik değişirse basınç değişir.',
    'Açık hava basıncı havanın ağırlığından doğar, yükseldikçe azalır (Torricelli: deniz seviyesinde 76 cm cıva). Pipet, vantuz, şırıngada sıvıyı açık hava basıncı iter, “çeken” bir kuvvet yoktur.',
    'Pascal: kapalı kaptaki sıvıya uygulanan basınç her yöne aynen iletilir. Hidrolik sistemde büyüyen kuvvettir, iki pistondaki basınç eşittir.'
  ],
  scenes: [
    { t: 'Basınç nedir?',
      base: '<svg class="an-svg" viewBox="0 0 340 180" role="img" aria-label="Aynı tuğla yatık konumda sığ, dik konumda derin iz bırakır">' +
        '<rect x="5" y="110" width="330" height="40" fill="#d6b46a" fill-opacity=".45"/>' +
        '<g class="rv b1"><rect x="30" y="80" width="110" height="34" rx="3" fill="#ef4444" fill-opacity=".85"/><text x="85" y="170" font-size="12" text-anchor="middle">yatık: geniş alan → sığ iz</text></g>' +
        '<g class="rv b2"><rect x="230" y="40" width="40" height="86" rx="3" fill="#ef4444" fill-opacity=".85"/><text x="250" y="170" font-size="12" text-anchor="middle">dik: dar alan → derin iz</text></g>' +
        '<g class="rv b3"><line x1="85" y1="20" x2="85" y2="70" class="st"/><path d="M78 62 L85 72 L92 62" class="st"/><line x1="250" y1="2" x2="250" y2="32" class="st"/><path d="M243 24 L250 34 L257 24" class="st"/>' +
        '<text x="170" y="30" font-size="12" text-anchor="middle" class="acc">ağırlık (kuvvet) aynı</text></g></svg>',
      steps: [
        { s: 'Merhaba! Basınç konusuna kumda bir tuğlayla başlayalım. Önce tuğlayı geniş yüzü üzerine koyuyoruz. Kumda sığ bir iz bıraktı.', on: '.b1' },
        { s: 'Şimdi aynı tuğlayı dik koyalım. Bak, bu kez kuma daha çok battı.', on: '.b2' },
        { s: 'Ama tuğlanın ağırlığı değişmedi ki! Kuma uyguladığı kuvvet iki durumda da aynı. Değişen, bu kuvvetin dağıldığı alan.', on: '.b3' },
        { s: 'İşte basınç bu: birim yüzeye dik etki eden kuvvet. Aynı kuvvet küçük alana toplanırsa basınç büyük, geniş alana dağılırsa küçük olur.',
          h: '<div class="an-rule"><b>Basınç</b> = birim yüzeye dik etki eden kuvvet · birimi <b>pascal (Pa)</b> · kuvvetin birimi <b>newton (N)</b></div>' },
        { s: 'LGS basıncı neredeyse her zaman iz derinliğiyle ölçtürür. Kumda, süngerde ya da hamurda iz ne kadar derinse basınç o kadar büyüktür.' },
        { s: 'Güzel bir haber: LGS’de basınç için formülle hesap yaptırılmaz. Sorular hangisi artar, hangisi azalır, hangisi değişmez mantığıyla kurulur.' }
      ] },

    { t: 'Katı basıncını ne değiştirir?',
      base: '<svg class="an-svg" viewBox="0 0 340 175" role="img" aria-label="Dört durumda ağırlık, alan ve iz derinliği">' +
        '<rect x="5" y="120" width="330" height="34" fill="#d6b46a" fill-opacity=".45"/>' +
        '<g class="rv c1"><rect x="25" y="105" width="30" height="20" fill="#3b82f6"/><text x="40" y="96" font-size="14" text-anchor="middle" font-weight="700">I</text><text x="40" y="170" font-size="12" text-anchor="middle">iz: 1</text></g>' +
        '<g class="rv c2"><rect x="103" y="90" width="15" height="40" fill="#3b82f6"/><text x="110" y="81" font-size="14" text-anchor="middle" font-weight="700">II</text><text x="110" y="170" font-size="12" text-anchor="middle" class="acc">iz: 2</text></g>' +
        '<g class="rv c3"><rect x="170" y="75" width="30" height="60" fill="#3b82f6"/><line x1="170" y1="95" x2="200" y2="95" stroke="#fff"/><line x1="170" y1="115" x2="200" y2="115" stroke="#fff"/><text x="185" y="66" font-size="14" text-anchor="middle" font-weight="700">III</text><text x="185" y="170" font-size="12" text-anchor="middle" class="acc">iz: 3</text></g>' +
        '<g class="rv c4"><rect x="250" y="105" width="60" height="20" fill="#3b82f6"/><line x1="280" y1="105" x2="280" y2="125" stroke="#fff"/><text x="280" y="96" font-size="14" text-anchor="middle" font-weight="700">IV</text><text x="280" y="170" font-size="12" text-anchor="middle">iz: 1</text></g></svg>',
      steps: [
        { s: 'Katı basıncı iki şeye bağlıdır: cismin ağırlığı ve zemine değen yüzey alanı. Birinci durumu başlangıç kabul edelim.', on: '.c1' },
        { s: 'İkinci durumda ağırlık aynı ama alan yarıya inmiş. İz iki katına çıktı. Demek ki alan küçülünce basınç artar.', on: '.c2' },
        { s: 'Üçüncüde alan aynı, ağırlık üç katı. İz de üç katı. Ağırlık artınca basınç artar.', on: '.c3' },
        { s: 'Dördüncüde dikkat: hem ağırlık hem alan iki katına çıktı. Etkiler birbirini götürdü, basınç değişmedi.', on: '.c4' },
        { s: 'Maddenin cinsi, rengi ya da boyu tek başına basıncı belirlemez. Bakacağın iki şey var: ağırlık ve temas alanı.',
          h: '<div class="an-tip">Hafıza ipucu: <b>Ağır ve sivri = derin iz; hafif ve geniş = sığ iz.</b></div>' }
      ] },

    { t: 'Kuvvet değişmez, basınç değişir',
      steps: [
        { s: 'Şimdi günlük durumlarda neyin değiştiğine bakalım. Her satırda önce ağırlığa, sonra alana bak.',
          h: '<table class="an-tbl"><tr><th>Ne yapıldı?</th><th>Ağırlık</th><th>Alan</th><th>Basınç</th></tr>' +
            '<tr class="rv d1"><td>Tuğla yatıktan dike çevrildi</td><td>aynı</td><td>azalır</td><td><b>artar</b></td></tr>' +
            '<tr class="rv d2"><td>Üstüne aynı tuğla kondu</td><td>artar</td><td>aynı</td><td><b>artar</b></td></tr>' +
            '<tr class="rv d3"><td>Yanına aynı tuğla kondu</td><td>2 kat</td><td>2 kat</td><td><b>aynı</b></td></tr>' +
            '<tr class="rv d4"><td>Ayağın altına geniş tahta</td><td>aynı</td><td>artar</td><td><b>azalır</b></td></tr></table>' },
        { s: 'Tuğla dik çevrilince ağırlık aynı kalır, alan küçülür, basınç artar.', on: '.d1' },
        { s: 'Üstüne bir tuğla daha koyarsan ağırlık artar, alan aynı kalır; basınç yine artar.', on: '.d2' },
        { s: 'Yanına koyarsan ağırlık da alan da iki katı olur; basınç değişmez. Geniş bir tahtaya basarsan alan büyür, basınç azalır.', on: '.d3,.d4' },
        { s: 'Burada çok dikkat et, LGS’de en sık düşülen tuzak bu: tuğla dik konumda daha ağır basar, kuvveti artar demek yanlış!',
          h: '<div class="an-trap"><span class="an-bad-t">Dik konumda tuğlanın zemine uyguladığı kuvvet artar.</span><br><span class="an-ok-t">Kuvvet (ağırlık) aynı kalır; yalnızca basınç artar.</span></div>' },
        { s: 'Soruda kuvvet ile basınç ayrı ayrı sorulursa cevabın çoğu zaman şudur: kuvvetler eşit, basınçlar farklı.' }
      ] },

    { t: 'Grupla: basınç ne olur?',
      steps: [{ s: 'Sıra sende. Her durumda önce ağırlığa, sonra alana bak ve basıncın ne olacağına göre yerleştir.' }],
      ia: { tip: 'grup', q: '<p>Her durumda zemine yapılan basınca ne olur?</p>', gruplar: ['Artar', 'Azalır', 'Değişmez'],
        ogeler: [{ m: 'Tuğlayı dik çevirmek', g: 0 }, { m: 'Kar ayakkabısı giymek', g: 1 }, { m: 'Yanına özdeş tuğla koymak', g: 2 },
          { m: 'Bıçağı bilemek', g: 0 }, { m: 'Tıra teker eklemek', g: 1 }, { m: 'Üstüne tuğla koymak', g: 0 },
          { m: 'Çanta askısını genişletmek', g: 1 }],
        hint: 'İki soruyu ayrı sor: ağırlık değişti mi, temas alanı değişti mi? İkisi aynı oranda artarsa ne olur?',
        why: 'Alan küçülür ya da ağırlık artarsa basınç artar; alan büyürse azalır. Yanına özdeş tuğla koyunca ağırlık da alan da iki katı olur, basınç değişmez.' } },
    { t: 'Deney tasarımı: tek değişken',
      steps: [
        { s: 'Katı basıncı sorularının çoğu aslında bir deney tasarımı sorusudur. Kural tek: yalnızca incelenen değişken değişir, gerisi aynı tutulur.',
          h: '<table class="an-tbl"><tr><th>Hipotez</th><th>Değiştirilen</th><th>Sabit</th></tr><tr><td>Basınç alana bağlıdır.</td><td>temas alanı</td><td>ağırlık, zemin</td></tr><tr><td>Basınç ağırlığa bağlıdır.</td><td>ağırlık</td><td>temas alanı, zemin</td></tr></table>' },
        { s: 'Ölçülen, yani bağımlı değişken her iki deneyde de iz derinliğidir.' },
        { s: 'Bir kolaylık: “aynı cisim önce küçük, sonra büyük yüzeyi üzerine konuyor” diyorsa ağırlık zaten sabittir, çünkü cisim aynı.' },
        { s: 'Ve bir çeldirici: iki küp yapıştırılıp çevriliyorsa önce kuma kaç yüzün değdiğini say. Her iki konumda da iki yüz değiyorsa alan aslında değişmemiştir.',
          h: '<div class="an-trap">Dizilim değişti diye alan değişti sanma. <b>Kuma değen küp yüzlerini say:</b> sayı aynıysa alan da aynıdır.</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>K ve L küpleri kuma bırakılıyor; <b>L’nin izi K’ninkinden derin</b> oluyor.</p><p>I. Ağırlıkları eşitse K’nin kuma değen yüzey alanı daha büyüktür.<br>II. Yüzey alanları eşitse L daha ağırdır.<br>III. K’nin yüzey alanı daha küçükse K daha ağırdır.</p><p>yargılarından hangileri <b>doğrudur</b>?</p>',
        c: ['Yalnız I', 'I ve II', 'II ve III', 'I, II ve III'], a: 'B',
        hint: 'Derin iz büyük basınç demek, yani L’nin basıncı büyük. III’te K hem dar alanlı hem de daha az basınçlıysa ağırlığı nasıl olmalı?',
        why: 'L’nin basıncı büyük. Ağırlıklar eşitse basıncı küçük olan K’nin alanı büyüktür (I). Alanlar eşitse basıncı büyük olan L daha ağırdır (II). K’nin alanı küçük olduğu hâlde basıncı da küçükse K daha hafiftir; III yanlış.',
        hintV: 'Derin iz büyük basınç demek, yani L’nin basıncı büyük. Üçüncü yargıda K hem dar alanlı hem de daha az basınçlıysa ağırlığı nasıl olmalı?',
        whyV: 'L’nin basıncı büyük. Ağırlıklar eşitse, basıncı küçük olan K’nin alanı büyüktür; birinci yargı doğru. Alanlar eşitse, basıncı büyük olan L daha ağırdır; ikinci yargı da doğru. K’nin alanı küçük olduğu hâlde basıncı da küçükse K daha hafiftir; üçüncü yargı yanlış.' },
      steps: [{ s: 'İlk ara sorumuz LGS tarzı bir yargı sorusu. Her yargıyı tek tek düşün.' }] },

    { t: 'Katılar kuvveti iletir',
      steps: [
        { s: 'Çivinin başına çekiçle vurduğunu düşün. Uyguladığın kuvvet çivinin sivri ucuna aynen ulaşır. Katılar kuvveti aynı doğrultuda ve büyüklükte iletir.' },
        { s: 'Ama uçtaki alan çok küçük olduğu için orada basınç çok büyük olur ve çivi tahtaya girer. Yani katılar kuvveti iletir, basıncı aynen iletmez.',
          h: '<div class="an-trap"><span class="an-bad-t">Katılar basıncı aynen iletir.</span><br><span class="an-ok-t">Katılar kuvveti iletir; basıncı aynen ileten sıvılardır.</span></div>' },
        { s: 'Düzgün bir cismi yukarıdan aşağı dik kesersen ağırlık da alan da aynı oranda azalır; kalan parçanın basıncı değişmez. Yatay kesip üstünü atarsan basınç azalır.' },
        { s: 'Günlük hayatta basıncı artırmak için alanı küçültürüz, azaltmak için alanı büyütürüz.',
          h: '<table class="an-tbl"><tr><th>Basıncı artırmak</th><th>Basıncı azaltmak</th></tr><tr><td>bileylenmiş bıçak, balta</td><td>kar ayakkabısı, kayak</td></tr><tr><td>sivri çivi, raptiye, iğne</td><td>iş makinelerinde palet</td></tr><tr><td>krampon dişleri</td><td>tırda çok sayıda tekerlek</td></tr><tr><td>sivri dişler, pençeler</td><td>devenin geniş tabanı, geniş çanta askısı</td></tr></table>' },
        { s: 'Çok tekerlek basıncı azaltır, çünkü yük daha büyük bir toplam alana dağılır. Halka ya da tekerlek sayısı azalırsa izler derinleşir.' }
      ] },

    { t: 'Doğru mu, yanlış mı: kuvvet ve basınç',
      steps: [{ s: 'Katılarla ilgili tuzakları tarayalım. Her ifadeye doğru ya da yanlış de.' }],
      ia: { tip: 'dogruyanlis', q: '<p>Her ifadeye karar ver.</p>',
        ifadeler: [
          { m: 'Çekiçle vurulan çivinin ucundaki kuvvet, başındaki kuvvetten büyüktür.', d: false, a: 'Katılar kuvveti aynen iletir; kuvvetler eşittir.' },
          { m: 'Çivinin ucundaki basınç, başındaki basınçtan büyüktür.', d: true, a: 'Uçta alan çok küçük, basınç büyük.' },
          { m: 'Düzgün bir cisim yukarıdan aşağı dik kesilirse kalan parçanın basıncı azalır.', d: false, a: 'Ağırlık da alan da aynı oranda azalır; basınç değişmez.' },
          { m: 'Tekerlek sayısı azalan bir arabanın izleri derinleşir.', d: true, a: 'Ağırlık daha küçük alana dağılır.' }],
        hint: 'Kuvvet ile basıncı ayrı düşün: katı kuvveti aynen taşır, basınç ise alana göre değişir.',
        why: 'Katılar kuvveti aynı büyüklükte iletir, basıncı aynen iletmez. Dik kesmede ağırlık ve alan birlikte azaldığı için basınç sabit kalır.' } },
    { t: 'Sıvı basıncı ve derinlik',
      base: '<svg class="an-svg" viewBox="0 0 340 180" role="img" aria-label="Kapta derinlik arttıkça sıvı basıncı artar ve her yöne etki eder">' +
        '<path d="M60 25 L60 165 L200 165 L200 25" class="ln" stroke-width="3"/>' +
        '<rect x="62" y="40" width="136" height="123" fill="#3b82f6" fill-opacity=".3"/><line x1="62" y1="40" x2="198" y2="40" stroke="#3b82f6" stroke-width="2"/>' +
        '<g class="rv w1"><circle cx="130" cy="72" r="4" fill="#fff"/><text x="140" y="70" font-size="12" font-weight="700">A</text>' +
        '<g class="st"><line x1="130" y1="72" x2="130" y2="60"/><line x1="130" y1="72" x2="130" y2="84"/><line x1="130" y1="72" x2="118" y2="72"/><line x1="130" y1="72" x2="142" y2="72"/></g></g>' +
        '<g class="rv w2"><circle cx="130" cy="130" r="4" fill="#fff"/><text x="160" y="125" font-size="12" font-weight="700">B</text>' +
        '<g class="st" stroke-width="3.5"><line x1="130" y1="130" x2="130" y2="106"/><line x1="130" y1="130" x2="130" y2="154"/><line x1="130" y1="130" x2="106" y2="130"/><line x1="130" y1="130" x2="154" y2="130"/></g></g>' +
        '<g class="rv w3"><line x1="220" y1="40" x2="220" y2="130" class="st2"/><line x1="214" y1="40" x2="226" y2="40" class="st2"/><line x1="214" y1="130" x2="226" y2="130" class="st2"/>' +
        '<text x="232" y="80" font-size="12">B’nin derinliği</text><text x="232" y="96" font-size="11" class="mut">açık yüzeyden aşağı</text></g>' +
        '<text x="232" y="44" font-size="11" class="mut">sıvı yüzeyi</text></svg>',
      steps: [
        { s: 'Gelelim sıvılara. Sıvılar ağırlıkları yüzünden kabın tabanına basınç uygular. Akışkan oldukları için yan yüzeylere de bastırırlar.' },
        { s: 'Sıvının içindeki bir noktada basınç her yöne etki eder. A noktasında ölçeri yukarı, yana ya da aşağı çevirsen aynı değeri okursun.', on: '.w1' },
        { s: 'B noktası daha derinde. Bak, oklar daha uzun: derinlik arttıkça sıvı basıncı artar. Aynı sıvıda derinlik iki katı olursa basınç da iki katı olur.', on: '.w2' },
        { s: 'Baraj duvarlarının tabana doğru kalınlaşması da, dalgıçların derinde özel kıyafet giymesi de bu yüzden.' },
        { s: 'Burada çok dikkat et: derinlik, sıvının açık yüzeyinden aşağı doğru ölçülür. Tabandan yukarı ölçülmez!', on: '.w3', mk: '.w3 text' },
        { s: 'İkinci etken sıvının yoğunluğu. Aynı derinlikte tuzlu suyun basıncı saf sudan, saf suyunki zeytinyağından büyüktür.',
          h: '<div class="an-rule"><b>Sıvı basıncı</b> derinlik ↑ → basınç ↑ &nbsp;·&nbsp; yoğunluk ↑ → basınç ↑</div>' }
      ] },

    { t: 'Kaydır: derinliği doğru ölç',
      steps: [{ s: 'Derinliği doğru ölçmeyi deneyelim. Sorudaki kabı düşün ve B noktasındaki basıncın, A noktasındakinin kaç katı olduğunu bul.' }],
      ia: { tip: 'kaydir', q: '<p>Kaptaki su 12 cm yüksekliğinde. A noktası yüzeyden 4 cm derinde, B noktası <b>tabandan</b> 2 cm yukarıda. B’deki basınç A’dakinin kaç katıdır?</p>',
        min: 0, max: 5, adim: 0.5, cevap: 2.5, tol: 0, birim: ' kat', etiket: [0, 1, 2, 3, 4, 5],
        hint: 'Derinlik açık yüzeyden aşağı ölçülür. B noktası yüzeyden kaç santimetre aşağıda?',
        hintV: 'Derinlik açık yüzeyden aşağı doğru ölçülür. B noktası yüzeyden kaç santimetre aşağıda?',
        why: 'B’nin derinliği 12 − 2 = 10 cm. Aynı sıvıda basınç derinlikle orantılı: 10 ÷ 4 = 2,5 kat. Tabandan ölçülen 2 cm’yi derinlik sanmak tuzaktır.',
        whyV: 'B noktasının derinliği on iki eksi iki, yani on santimetre. Aynı sıvıda basınç derinlikle orantılı: on bölü dört, iki buçuk kat. Tabandan ölçülen iki santimetreyi derinlik sanmak tuzaktır.' } },
    { t: 'Sıvı basıncı neye bağlı değil?',
      base: '<table class="an-tbl"><tr><th>Değişken</th><th>Etkiler mi?</th></tr>' +
        '<tr class="rv e1"><td>Derinlik</td><td class="an-ok-t">evet</td></tr>' +
        '<tr class="rv e1"><td>Sıvının yoğunluğu</td><td class="an-ok-t">evet</td></tr>' +
        '<tr class="rv e2"><td>Kabın şekli, genişliği</td><td>hayır</td></tr>' +
        '<tr class="rv e2"><td>Ölçerin baktığı yön</td><td>hayır</td></tr>' +
        '<tr class="rv e3"><td>Sıvının miktarı</td><td>tek başına hayır</td></tr></table>',
      steps: [
        { s: 'Sıvı basıncını değiştiren yalnızca iki şey var: derinlik ve yoğunluk.', on: '.e1' },
        { s: 'Kabın şekli ve genişliği basıncı etkilemez. Eğri bir kapta ve düz bir kapta aynı derinlikte aynı değer ölçülür. Ölçerin yönü de fark etmez.', on: '.e2' },
        { s: 'Peki sıvı miktarı? Tek başına etkilemez. Kaba daha çok sıvı koyunca basınç ancak derinlik arttıysa artar.', on: '.e3', mk: '.e3 td' },
        { s: 'LGS bunu şöyle sordu: aynı miktar sıvı daha geniş tabanlı bir kaba konunca derinlik azaldı, dolayısıyla basınç azaldı.',
          h: '<div class="an-trap">Sıvı miktarı sabitken kap <b>genişlerse</b> derinlik azalır → basınç azalır. Kap <b>daralırsa</b> derinlik artar → basınç artar.</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Su dolu bir kapta, su yüzeyinden <b>10 cm</b> derindeki basınç ölçer <b>1 Pa</b> gösteriyor. Aynı kapta <b>30 cm</b> derinliğe konan ölçer kaç Pa gösterir? Zeytinyağı dolu bir kapta 30 cm derinlikte ölçülen değer bundan büyük mü olur, küçük mü?</p>',
        c: ['3 Pa · zeytinyağında daha büyük', '3 Pa · zeytinyağında daha küçük', '1 Pa · zeytinyağında da 1 Pa', '{{1|3}} Pa · zeytinyağında daha küçük'], a: 'B',
        hint: 'Aynı sıvıda derinlik kaç katına çıktı? Zeytinyağının yoğunluğu sudan büyük mü, küçük mü?',
        why: 'Aynı sıvıda derinlik 3 katına çıkınca basınç da 3 katına çıkar: 3 Pa. Zeytinyağının yoğunluğu sudan küçük olduğu için aynı derinlikte basıncı daha küçüktür.',
        whyV: 'Aynı sıvıda derinlik üç katına çıkınca basınç da üç katına çıkar: üç paskal. Zeytinyağının yoğunluğu sudan küçük olduğu için aynı derinlikte basıncı daha küçüktür.' },
      steps: [{ s: 'Oran düşünerek çözebileceğin bir soru. Hadi bakalım!' }] },

    { t: 'Sıvı basıncı deneyleri',
      base: '<table class="an-tbl"><tr><th>Düzenek</th><th>Sıvı</th><th>Derinlik</th></tr>' +
        '<tr class="rv f1"><td><b>1</b></td><td>su</td><td>10 cm</td></tr>' +
        '<tr class="rv f1"><td><b>2</b></td><td>su</td><td>20 cm</td></tr>' +
        '<tr class="rv f2"><td><b>3</b></td><td>tuzlu su</td><td>10 cm</td></tr></table>',
      steps: [
        { s: 'Sıvı basıncı LGS’de genellikle bir ölçme düzeneğiyle sorulur: lastik zarlı huni ve U borusu, basınç ölçer, yaylı piston ya da balon.' },
        { s: 'U borulu düzenekte zara etki eden basınç borudaki havayı iter. İki koldaki su seviyesi farkı ne kadar büyükse basınç o kadar büyüktür.' },
        { s: 'Şu üç düzeneğe bakalım. 1 ile 2’de sıvı aynı, derinlik farklı. Bu ikisi derinliğin etkisini gösterir.', on: '.f1' },
        { s: '1 ile 3’te derinlik aynı, sıvı farklı. Bu ikisi yoğunluğun etkisini gösterir.', on: '.f2' },
        { s: 'Peki 2 ile 3? Karşılaştırılamaz! İki değişken birden değişmiş; farkın hangisinden geldiğini bilemeyiz.',
          h: '<div class="an-trap">İki değişkenin birden değiştiği düzenek çifti <b>hiçbir şeyi kanıtlamaz</b>. Şıklarda en sık çeldirici budur.</div>' },
        { s: 'Grafik sorularına da dikkat: zaman-basınç grafiği ile derinlik-basınç grafiğini karıştırma. Önce eksenlerde ne yazdığını oku.' }
      ] },

    { t: 'Dokun: derinliğin etkisi',
      steps: [{ s: 'Dört kabın tabanında birer basınç ölçer var. Sıvı basıncının derinliğe bağlı olduğunu göstermek için karşılaştırılması gereken iki kaba dokun.' }],
      ia: { tip: 'gorselsec', q: '<p>“Sıvı basıncı <b>derinliğe</b> bağlıdır.” hipotezini test etmek için hangi iki kap karşılaştırılmalı? İkisine dokun.</p>',
        svg: '<svg class="an-svg" viewBox="0 0 340 176" role="group" aria-label="Dört kap: sıvı cinsi ve derinliği altında yazılı; ölçerler tabanda"><g data-b="k1" aria-label="1. kap: su, 10 cm"><rect x="10" y="18" width="68" height="112" rx="6" class="box"/><rect x="12" y="78" width="64" height="50" fill="#60a5fa" opacity="0.55"/><text x="44" y="14" text-anchor="middle" font-size="14" font-weight="700">1</text><text x="44" y="150" text-anchor="middle" font-size="14">su</text><text x="44" y="168" text-anchor="middle" font-size="14">10 cm</text></g><g data-b="k2" aria-label="2. kap: tuzlu su, 20 cm"><rect x="94" y="18" width="68" height="112" rx="6" class="box"/><rect x="96" y="28" width="64" height="100" fill="#2563eb" opacity="0.55"/><text x="128" y="14" text-anchor="middle" font-size="14" font-weight="700">2</text><text x="128" y="150" text-anchor="middle" font-size="14">tuzlu su</text><text x="128" y="168" text-anchor="middle" font-size="14">20 cm</text></g><g data-b="k3" aria-label="3. kap: su, 20 cm"><rect x="178" y="18" width="68" height="112" rx="6" class="box"/><rect x="180" y="28" width="64" height="100" fill="#60a5fa" opacity="0.55"/><text x="212" y="14" text-anchor="middle" font-size="14" font-weight="700">3</text><text x="212" y="150" text-anchor="middle" font-size="14">su</text><text x="212" y="168" text-anchor="middle" font-size="14">20 cm</text></g><g data-b="k4" aria-label="4. kap: zeytinyağı, 10 cm"><rect x="262" y="18" width="68" height="112" rx="6" class="box"/><rect x="264" y="78" width="64" height="50" fill="#eab308" opacity="0.55"/><text x="296" y="14" text-anchor="middle" font-size="14" font-weight="700">4</text><text x="296" y="150" text-anchor="middle" font-size="14">zeytinyağı</text><text x="296" y="168" text-anchor="middle" font-size="14">10 cm</text></g></svg>', dogru: ['k1', 'k3'],
        hint: 'Yalnızca incelenen değişken farklı olmalı. Sıvının cinsi iki kapta da aynı mı?',
        why: '1 ve 3’te sıvı aynı, yalnız derinlik farklı. 2 ile 3 aynı derinlikte farklı sıvı, onlar yoğunluğu gösterir; 2 ile 4’te ise iki değişken birden değişmiş.',
        whyV: 'Birinci ve üçüncü kapta sıvı aynı, yalnız derinlik farklı. İkinci ile üçüncü aynı derinlikte farklı sıvı; onlar yoğunluğun etkisini gösterir. İkinci ile dördüncüde ise iki değişken birden değişmiş.' } },
    { t: 'Ara soru', cp: {
        q: '<p>Bir öğrenci “<b>Sıvı basıncı sıvının cinsine bağlıdır.</b>” hipotezini test ediyor. İlk düzenekte bir kaba 200 mL su koyup basınç ölçeri tabandan 3 cm yükseğe takmıştır. Özdeş kapla kurduğu ikinci düzenekte ne yapmalıdır?</p>',
        c: ['200 mL su koyup ölçeri tabandan 6 cm yükseğe takmalı', '400 mL tuzlu su koyup ölçeri tabandan 3 cm yükseğe takmalı', '200 mL tuzlu su koyup ölçeri tabandan 3 cm yükseğe takmalı', '200 mL tuzlu su koyup ölçeri tabandan 6 cm yükseğe takmalı'], a: 'C',
        hint: 'Yalnızca sıvının cinsi değişmeli. Sıvı miktarı ya da ölçerin yeri değişirse derinlik de değişir.',
        why: 'Özdeş kaba aynı miktarda farklı sıvı konur ve ölçer aynı yere takılır. Böylece derinlik aynı kalır, değişen tek şey sıvının cinsi olur.' },
      steps: [{ s: 'Şimdi LGS’de en sık çıkan türden bir deney tasarımı sorusu. Neyin değişmesi, neyin sabit kalması gerektiğini düşün.' }] },

    { t: 'Kap soruları: iki ayrı basınç',
      steps: [
        { s: 'Kap sorularında aslında iki ayrı basınç var. Biri kabın tabanına etki eden sıvı basıncı; bu derinliğe ve yoğunluğa bağlı.' },
        { s: 'Diğeri kabın zemine yaptığı katı basıncı; bu da kap ile sıvının toplam ağırlığına ve kabın zemine değen alanına bağlı.' },
        { s: 'Örneğin ağzı kapalı, yukarı doğru daralan, yarısı dolu bir kap ters çevrilip dar yüzü üzerine konuyor. Ne olur?',
          h: '<table class="an-tbl"><tr><th>Ters çevrilince</th><th>Neden?</th></tr><tr class="rv g1"><td>Tabandaki sıvı basıncı <b>artar</b></td><td>su dar kısımda daha yükseğe çıkar, derinlik artar</td></tr><tr class="rv g2"><td>Zemine katı basıncı <b>artar</b></td><td>ağırlık aynı, temas alanı küçülür</td></tr></table>' },
        { s: 'Su dar kısımda daha yükseğe çıkar, derinlik artar; sıvı basıncı artar.', on: '.g1' },
        { s: 'Ağırlık değişmedi ama zemine değen alan küçüldü; katı basıncı da artar.', on: '.g2' },
        { s: 'Bir ipucu: taban alanları eşit, şekilleri farklı kaplarda su aynı yükseklikteyse sıvı basınçları eşittir; ama suyu fazla olanın katı basıncı büyüktür.' }
      ] },

    { t: 'Boşluk: iki ayrı basınç',
      steps: [{ s: 'İki ayrı basıncı birbirinden ayırabiliyor musun? Cümleleri doğru kartlarla tamamla.' }],
      ia: { tip: 'bosluk', q: '<p>Şekilleri farklı, <b>taban alanları eşit</b> iki kapta su aynı yükseklikte. Birinde daha çok su var.</p>',
        metin: 'Kapların tabanına etki eden sıvı basınçları [_].<br>Suyu çok olan kabın zemine yaptığı basınç [_].',
        secenek: ['eşittir', 'farklıdır', 'daha büyüktür', 'daha küçüktür'], cevap: ['eşittir', 'daha büyüktür'],
        hint: 'Sıvı basıncı derinliğe ve yoğunluğa, katı basıncı ise toplam ağırlığa ve temas alanına bağlıydı.',
        why: 'Derinlik ve sıvı aynı olduğu için sıvı basınçları eşittir. Suyu çok olan kap daha ağırdır; alanlar eşit olduğundan zemine yaptığı basınç daha büyüktür.' } },
    { t: 'Açık hava basıncı',
      base: '<svg class="an-svg" viewBox="0 0 340 190" role="img" aria-label="Torricelli deneyi: cıva sütunu 76 santimetre">' +
        '<rect x="70" y="150" width="200" height="26" rx="4" fill="#94a3b8" fill-opacity=".8"/><path d="M66 140 L66 180 L274 180 L274 140" class="ln" stroke-width="2.5"/>' +
        '<rect x="160" y="62" width="20" height="104" fill="#94a3b8"/><path d="M158 168 L158 26 Q170 18 182 26 L182 168" class="ln" stroke-width="2.5"/>' +
        '<text x="170" y="48" font-size="10" text-anchor="middle" class="mut">boşluk</text>' +
        '<g class="rv t1"><line x1="200" y1="62" x2="200" y2="150" class="st2"/><line x1="194" y1="62" x2="206" y2="62" class="st2"/><line x1="194" y1="150" x2="206" y2="150" class="st2"/><text x="210" y="110" font-size="13" font-weight="700">76 cm</text></g>' +
        '<g class="rv t2"><line x1="100" y1="110" x2="100" y2="144" class="st"/><path d="M93 136 L100 146 L107 136" class="st"/><line x1="245" y1="110" x2="245" y2="144" class="st"/><path d="M238 136 L245 146 L252 136" class="st"/>' +
        '<text x="6" y="100" font-size="11" class="acc">açık hava basıncı</text></g>' +
        '<text x="170" y="188" font-size="11" text-anchor="middle" class="mut">deniz seviyesi, cıva</text></svg>',
      steps: [
        { s: 'Gazlar da akışkandır ve bulundukları kabın her yüzeyine basınç uygular. Dünya’yı saran havanın ağırlığından doğan basınca açık hava basıncı denir.' },
        { s: 'Torricelli, cıva dolu bir boruyu cıva dolu kaba ters çevirdi. Deniz seviyesinde cıva yaklaşık 76 santimetrede dengede kaldı.', v: 'Torricelli, cıva dolu bir boruyu cıva dolu kaba ters çevirdi. Deniz seviyesinde cıva yaklaşık yetmiş altı santimetrede dengede kaldı.', on: '.t1' },
        { s: 'Kaptaki cıva yüzeyine bastıran açık hava basıncı, borudaki cıvanın basıncını dengeliyor. Borunun kalınlığı ya da eğik durması bu dik yüksekliği değiştirmez.', on: '.t2' },
        { s: 'Yükseklere çıktıkça üstümüzdeki hava azalır, açık hava basıncı düşer. Dağın tepesinde cıva daha az yükselir.' },
        { s: 'Pipetle içmek, vantuz, şırınga; hepsinde iş yapan açık hava basıncı. Pipetteki havayı çekince içerideki basınç düşer, dışarıdaki hava sıvıyı pipete iter.',
          h: '<div class="an-trap"><span class="an-bad-t">Pipet sıvıyı çeker. · İçerideki hava yumurtayı çekti.</span><br><span class="an-ok-t">Çeken bir kuvvet yok: dışarıdaki açık hava basıncı iter.</span></div>' }
      ] },

    { t: 'Pascal prensibi',
      base: '<svg class="an-svg" viewBox="0 0 340 185" role="img" aria-label="Hidrolik sistem: küçük pistona uygulanan basınç büyük pistona aynen iletilir">' +
        '<rect x="40" y="70" width="30" height="80" fill="#3b82f6" fill-opacity=".3"/><rect x="210" y="92" width="90" height="58" fill="#3b82f6" fill-opacity=".3"/><rect x="40" y="150" width="260" height="20" fill="#3b82f6" fill-opacity=".3"/>' +
        '<path d="M38 40 L38 172 L302 172 L302 60 M208 60 L208 148 L72 148 L72 40" class="ln" stroke-width="2.5"/>' +
        '<rect x="40" y="62" width="30" height="8" fill="#94a3b8"/><rect x="210" y="84" width="90" height="8" fill="#94a3b8"/>' +
        '<g class="rv h1"><line x1="55" y1="20" x2="55" y2="56" class="st"/><path d="M48 48 L55 58 L62 48" class="st"/><text x="80" y="30" font-size="12">küçük kuvvet</text></g>' +
        '<g class="rv h2"><line x1="255" y1="78" x2="255" y2="38" class="st" stroke-width="4"/><path d="M246 48 L255 36 L264 48" class="st" stroke-width="4"/><text x="255" y="28" font-size="12" text-anchor="middle" font-weight="700">büyük kuvvet</text>' +
        '<text x="170" y="164" font-size="12" text-anchor="middle" class="acc">basınç her yerde eşit</text></g></svg>',
      steps: [
        { s: 'Son durak Pascal prensibi: kapalı bir kaptaki sıvıya uygulanan basınç, sıvı tarafından her noktaya ve her yöne aynı büyüklükte iletilir.' },
        { s: 'Hidrolik bir sisteme bakalım. Küçük pistona küçük bir kuvvet uyguluyoruz.', on: '.h1' },
        { s: 'Basınç büyük pistona aynen iletilir. Büyük pistonun alanı geniş olduğu için orada çok daha büyük bir kuvvet oluşur. Kriko, hidrolik fren ve berber koltuğu böyle çalışır.', on: '.h2' },
        { s: 'Burada çok dikkat et: hidrolik sistemde büyüyen şey kuvvettir, basınç değil. İki pistondaki sıvı basıncı eşittir.',
          h: '<div class="an-trap"><span class="an-bad-t">Büyük pistonun alanı 20 kat olduğu için basıncı da 20 kat büyüktür.</span><br><span class="an-ok-t">Basınçlar eşit; büyük pistondaki kuvvet büyüktür.</span></div>' },
        { s: 'Toparlayalım: katı kuvveti, sıvı basıncı taşır. Bu cümle aklında kalsın.',
          h: '<table class="an-tbl"><tr><th>Hâl</th><th>Neyi iletir?</th><th>Basınç neye bağlı?</th></tr><tr><td>Katı</td><td>kuvveti</td><td>ağırlık, temas alanı</td></tr><tr><td>Sıvı</td><td>basıncı her yöne</td><td>derinlik, yoğunluk</td></tr><tr><td>Gaz</td><td>her yüzeye basınç</td><td>açık hava basıncı örnekleri</td></tr></table>' }
      ] },

    { t: 'Eşleştir: hangi ilke çalışıyor?',
      steps: [{ s: 'Toparlama zamanı. Her örneği, arkasındaki basınç ilkesiyle eşleştir.' }],
      ia: { tip: 'eslestir', q: '<p>Her örneği arkasındaki ilkeyle eşleştir.</p>', solBaslik: 'Örnek', sagBaslik: 'İlke',
        sol: ['Hidrolik fren', 'Pipetle içmek', 'Tabanı kalın baraj', 'Sivri çivi ucu', 'Dağda cıva az yükselir'],
        sag: ['Pascal prensibi', 'Açık hava basıncı', 'Derinlikle artan basınç', 'Küçük alan, büyük basınç', 'Yükseldikçe hava azalır'],
        hint: 'Kapalı kaptaki sıvı mı, dışarıdaki hava mı, yoksa bir katının alanı mı işin içinde? Önce bunu ayır.',
        why: 'Hidrolik fren basıncı sıvıyla iletir; pipette sıvıyı dışarıdaki hava iter. Baraj derinde büyüyen sıvı basıncına, çivi küçük alana dayanır; dağda üstümüzdeki hava azalır.' } },
    { t: 'Ara soru', cp: {
        q: '<p>Bir hidrolik krikoda küçük pistona kuvvet uygulanıyor. Büyük pistonun yüzey alanı küçük pistonunkinin <b>20 katıdır</b>. Buna göre hangisi <b>doğrudur</b>?</p>',
        c: ['Büyük pistondaki sıvı basıncı küçük pistondakinin 20 katıdır.', 'İki pistona etki eden sıvı basıncı eşittir.', 'Büyük pistona etki eden kuvvet, uygulanan kuvvetten küçüktür.', 'Sıvı, basıncı yalnızca aşağı doğru iletir.'], a: 'B',
        hint: 'Pascal prensibi neyin aynen iletildiğini söyler: kuvvetin mi, basıncın mı?',
        why: 'Kapalı kaptaki sıvı basıncı her yöne aynen iletir; iki pistondaki basınç eşittir. Büyük pistonun alanı büyük olduğu için oradaki kuvvet büyüktür.' },
      steps: [{ s: 'Son ara soru! Neyin büyüdüğünü, neyin aynı kaldığını hatırla.' }] }
  ]
};
