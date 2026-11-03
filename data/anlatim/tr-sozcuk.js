/* Adım Adım Anlatım · Türkçe · Sözcükte Anlam (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['tr-sozcuk'] = {
  title: 'Sözcükte Anlam',
  desc: 'Gerçek, yan, mecaz ve terim anlam; çok anlamlılık, altı çizili sözün bağlamdaki anlamı, deyim ve atasözlerinde anlam grupları, ikilemeler ve boşluk doldurma tuzakları.',
  ozet: [
    'Sözcüğün anlamını cümle belirler. Gerçek anlam ilk akla gelendir; yan anlam benzerlikle kazanılır ve somut kalır (masanın ayağı); mecaz anlam gerçek anlamdan tamamen uzaklaşır (taş yürekli); terim anlam bir bilim ya da sanat dalına özgüdür (açı, perde, ofsayt).',
    'Çok anlamlı sözcük sorusunda gerçek anlamlı cümle en sık çeldiricidir. “Kullanılmamıştır” sorusunda her cümleyi tek tek eşleştir; eşleşmeyen anlamı bul.',
    'Altı çizili söz sorusunda şıkkı ifadenin yerine koy ve yeniden oku. Metnin başka cümlesindeki doğru bilgi, altı çizili sözün anlamı değildir.',
    '“Olamaz / değildir” sorusunda cevap, aynı alandan sözcük taşıyan ama anlama bir şey ekleyen şıktır (iç içe → karmaşık, berraklaştırmak → düzeltmek).',
    'Deyim bir durumu anlatır, öğüt vermez; atasözü toplumun ortak yargısıdır, çoğunlukla öğüt verir; özdeyişin söyleyeni bellidir.',
    'Tuzaklar: parmak ısırmak = şaşırmak, hayran kalmak (pişmanlık değil); ince eleyip sık dokumak = titizlik (tecrübe değil); ortak sözcük ortak anlam demek değildir (kendini paralamak ≠ kendini yiyip bitirmek).',
    'Deyimi metnin konusuyla değil, anlatılan durumla eşleştir. İkilemenin anlamını yüklemle birlikte oku.',
    'Boşluk doldurmada önce kolay boşlukla şık ele, bağlaçlara (fakat, çünkü) ve metnin tonuna bak; iki boşluğu da doğrulamadan işaretleme.'
  ],
  scenes: [
    { t: 'Anlamı cümle belirler',
      base: '<svg class="an-svg" viewBox="0 0 340 196" role="img" aria-label="Sözcük; gerçek, yan, mecaz ve terim anlama ayrılır">' +
        '<rect x="115" y="6" width="110" height="38" rx="10" class="boxa rv k1"/><text x="170" y="31" font-size="17" text-anchor="middle" font-weight="700" class="rv k1">SÖZCÜK</text>' +
        '<path class="st dr k2" d="M170 44 V58 H44 V74"/><path class="st dr k2" d="M170 58 H128 V74"/><path class="st dr k2" d="M170 58 H212 V74"/><path class="st dr k2" d="M170 58 H296 V74"/>' +
        '<rect x="4" y="74" width="80" height="54" rx="9" class="box rv k3"/><text x="44" y="97" font-size="13" text-anchor="middle" font-weight="700" class="rv k3">Gerçek</text><text x="44" y="116" font-size="10" text-anchor="middle" class="mut rv k3">ilk akla gelen</text>' +
        '<rect x="88" y="74" width="80" height="54" rx="9" class="box rv k4"/><text x="128" y="97" font-size="13" text-anchor="middle" font-weight="700" class="rv k4">Yan</text><text x="128" y="116" font-size="10" text-anchor="middle" class="mut rv k4">benzerlikle</text>' +
        '<rect x="172" y="74" width="80" height="54" rx="9" class="box rv k5"/><text x="212" y="97" font-size="13" text-anchor="middle" font-weight="700" class="rv k5">Mecaz</text><text x="212" y="116" font-size="10" text-anchor="middle" class="mut rv k5">tamamen uzak</text>' +
        '<rect x="256" y="74" width="80" height="54" rx="9" class="box rv k6"/><text x="296" y="97" font-size="13" text-anchor="middle" font-weight="700" class="rv k6">Terim</text><text x="296" y="116" font-size="10" text-anchor="middle" class="mut rv k6">bilim, sanat</text>' +
        '<text x="44" y="152" font-size="12" text-anchor="middle" class="acc rv k3">elini tuttu</text>' +
        '<text x="128" y="152" font-size="12" text-anchor="middle" class="acc rv k4">dağın eteği</text>' +
        '<text x="212" y="152" font-size="12" text-anchor="middle" class="acc rv k5">taş yürekli</text>' +
        '<text x="296" y="152" font-size="12" text-anchor="middle" class="acc rv k6">dik açı</text>' +
        '<text x="170" y="186" font-size="12" text-anchor="middle" class="mut rv k7">Hangisi olduğunu cümle söyler.</text></svg>',
      steps: [
        { s: 'Hoş geldin! Türkçenin ilk sorularının çoğu bu konudan gelir, o yüzden sağlam başlayalım.', on: '.k1' },
        { s: 'Bir sözcüğün anlamı sözlükte tek başına durduğu gibi değil, cümlede nasıl kullanıldığına göre belirlenir.', on: '.k2' },
        { s: 'Gerçek anlam, sözcüğü duyunca aklına gelen ilk anlamdır. “Elini tuttu” dediğimizde olduğu gibi.', on: '.k3' },
        { s: 'Yan anlam, gerçek anlamla bağı kopmadan, genelde bir benzerlikle kazanılır. Dağın eteği, kapının kolu gibi.', on: '.k4' },
        { s: 'Mecaz anlamda ise sözcük gerçek anlamından tamamen uzaklaşır. “Taş yürekli” biri, taştan yapılmış değil, acımasızdır.', on: '.k5' },
        { s: 'Terim anlam da bir bilime, sanata ya da mesleğe özgü anlamdır. Açı, kesir, perde, ofsayt gibi.', on: '.k6' },
        { s: 'Yani aynı sözcük, bir cümlede gerçek, öbüründe mecaz olabilir. Kararı hep cümle verir.', on: '.k7' }
      ] },

    { t: 'Yan anlam mı, mecaz mı?',
      steps: [
        { s: 'Öğrencilerin en çok karıştırdığı ikili bu. Şimdi şuna bir bakalım.',
          h: '<table class="an-tbl"><tr><th>Yan anlam</th><th>Mecaz anlam</th></tr>' +
             '<tr class="rv y1"><td>masanın <span class="an-w">ayağı</span></td><td><span class="an-w">taş</span> yürekli</td></tr>' +
             '<tr class="rv y2"><td>şişenin <span class="an-w">boğazı</span></td><td>çok <span class="an-w">ince</span> davrandı <small>(nazik)</small></td></tr>' +
             '<tr class="rv y3"><td>dağın <span class="an-w">eteği</span></td><td><span class="an-w">sıcak</span> bir karşılama <small>(içten)</small></td></tr></table>' },
        { s: 'Masanın ayağı da tıpkı insan ayağı gibi masayı taşır. Arada somut bir benzerlik var, bu yan anlam.', on: '.y1' },
        { s: 'Şişenin boğazı, dağın eteği de öyle. Hepsi hâlâ somut bir nesnenin bir bölümünü adlandırıyor.', on: '.y2,.y3' },
        { s: 'Sağ sütuna bak: “ince davranmak” nazik olmak, “sıcak karşılama” içten bir karşılama. Sözcükler soyut bir duruma aktarılmış, bu mecaz.', mk: '.y2 td,.y3 td' },
        { s: 'Kısa bir test öğreneyim sana: Sözcük hâlâ somut bir şeyin parçasını anlatıyorsa çoğunlukla yan anlamdır.',
          h: '<div class="an-rule"><b>Kısa test:</b> Somut bir nesnenin bölümünü mü adlandırıyor? → <b>yan anlam</b>. Soyut bir duruma mı aktarılmış? → <b>mecaz</b></div>' }
      ] },

    { t: 'Anlam türlerini ayır',
      steps: [{ s: 'Koyu sözcükleri anlam türüne göre kutulara yerleştir. Önce cümleye, sonra kutusuna dokun.' }],
      ia: {
        tip: 'grup',
        q: '<p>Koyu sözcük bu cümlede hangi anlamda kullanılmış?</p>',
        gruplar: ['Gerçek', 'Yan', 'Mecaz', 'Terim'],
        ogeler: [{ m: 'Kapının <b>kolu</b> kırıldı.', g: 1 }, { m: 'Çocuğun <b>kolu</b> alçıya alındı.', g: 0 }, { m: '<b>Taş</b> yürekli bir adam', g: 2 }, { m: 'Bahçeye <b>taş</b> döşendi.', g: 0 }, { m: 'Şişenin <b>boğazı</b> dar.', g: 1 }, { m: '<b>Sıcak</b> bir karşılama', g: 2 }, { m: 'Üçgenin iç <b>açıları</b>', g: 3 }, { m: 'Oyuncu <b>ofsayta</b> düştü.', g: 3 }, { m: '<b>Ağır</b> bir söz söyledi.', g: 2 }],
        hint: 'Somut bir nesnenin bir bölümünü adlandırıyorsa yan anlam, soyut bir duruma aktarılmışsa mecaz, bir bilim ya da spor dalına özgüyse terim anlamdır.',
        why: 'Kolu alçıya alınan çocuk ve döşenen taş gerçek anlamda. Kapının kolu, şişenin boğazı yan anlamda. Taş yürek, sıcak karşılama, ağır söz mecaz. Açı ve ofsayt terim. Aynı “kol” ve “taş”, cümleye göre tür değiştirdi.'
      } },

    { t: 'Çok anlamlılık: “tutmak”',
      base: '<table class="an-tbl"><tr><th>Cümle</th><th>Anlamı</th></tr>' +
        '<tr class="rv t1"><td>Yaşlı adamın elini sıkıca <span class="an-w">tuttu</span>.</td><td>elle kavramak <small>(gerçek)</small></td></tr>' +
        '<tr class="rv t2"><td>Kışlık eşyalar bütün dolabı <span class="an-w">tuttu</span>.</td><td>bir yeri kaplamak</td></tr>' +
        '<tr class="rv t3"><td>Söyledikleri birbirini <span class="an-w">tutmuyor</span>.</td><td>birbirine uymak</td></tr>' +
        '<tr class="rv t4"><td>Vapura binince onu deniz <span class="an-w">tuttu</span>.</td><td>bulantı vermek</td></tr>' +
        '<tr class="rv t5"><td>Deniz kenarında bir ev <span class="an-w">tuttuk</span>.</td><td>kiralamak</td></tr></table>',
      steps: [
        { s: 'Türkçede tutmak, bırakmak, vurmak, dokunmak gibi temel fiillerin onlarca anlamı vardır.' },
        { s: 'Mesela “tutmak”. İlk cümlede eli kavramak anlamında, yani gerçek anlamıyla kullanılmış.', on: '.t1' },
        { s: 'Eşyalar dolabı tuttu dersek bu kez “bir yeri kaplamak” anlamına geliyor.', on: '.t2' },
        { s: 'Söyledikleri birbirini tutmuyorsa, birbirine uymuyor demektir.', on: '.t3' },
        { s: 'Deniz tutması bulantı vermek, ev tutmak da kiralamak. Gördün mü, sözcük aynı ama anlam her cümlede başka.', on: '.t4,.t5' },
        { s: 'LGS sınavında ya sözlük anlamları numaralı verilir, ya da bir anlam tanımlanıp hangi cümlede karşılandığı sorulur.' }
      ] },

    { t: 'Tuzak: gerçek anlam ve “kullanılmamıştır”',
      steps: [
        { s: 'Burada çok dikkat et, LGS sınavında en sık düşülen tuzaklardan biri bu.',
          h: '<div class="an-trap"><b>Gerçek anlam çeldiricisi:</b> Yan ya da mecaz anlam sorulduğunda şıklardan biri neredeyse hep sözcüğün <b>gerçek anlamıdır</b>.</div>' },
        { s: 'Bir yıl “dokunmak” için sataşmak, duygulandırmak, değinmek anlamları verildi. Cevap, gerçek anlamlı “evraklara dokunmak” cümlesiydi.' },
        { s: 'Bir başka tuzak da “kullanılmamıştır” sorusu. Şıklarda dört anlam olur, cümlelerde karşılığı olmayanı bulursun.',
          h: '<div class="an-ex"><span class="an-l"><b>Yöntem:</b></span><span class="an-l">1. Her cümleyi tek tek oku, anlamını kendi sözünle söyle.</span><span class="an-l">2. O anlamı şıklardan biriyle eşleştir, eşleşeni çiz.</span><span class="an-l">3. Elde kalan şık cevaptır.</span></div>' },
        { s: 'Şunu da bil: Bazen bir cümlenin anlamı şıklarda hiç yoktur. “Tamir etmeyi bıraktı” ara vermek demektir, ertelemek değil. Zorla eşleştirme.' }
      ] },

    { t: '“Bırakmak”: kullanılmayan anlam',
      steps: [{ s: 'Üç anlam verildi. Bu anlamların hiçbirini karşılamayan cümleye dokun.' }],
      ia: {
        tip: 'gorselsec',
        q: '<p>“Bırakmak” için verilen anlamlar: <b>1)</b> terk etmek, ayrılmak <b>2)</b> emanet etmek <b>3)</b> bir alışkanlığa son vermek. Bu anlamların <b>hiçbiriyle</b> kullanılmamış cümleye dokun.</p>',
        svg: '<svg class="an-svg" viewBox="0 0 340 214" role="group" aria-label="Dört cümle"><g data-b="r1" aria-label="Babam yıllar önce sigarayı bıraktı."><rect x="4" y="6" width="332" height="44" rx="9" class="box"/><text x="14" y="32" font-size="14">Babam yıllar önce sigarayı bıraktı.</text></g><g data-b="r2" aria-label="Anahtarı komşumuza bıraktık."><rect x="4" y="58" width="332" height="44" rx="9" class="box"/><text x="14" y="84" font-size="14">Anahtarı komşumuza bıraktık.</text></g><g data-b="r3" aria-label="Kalemi masanın üstüne bıraktı."><rect x="4" y="110" width="332" height="44" rx="9" class="box"/><text x="14" y="136" font-size="14">Kalemi masanın üstüne bıraktı.</text></g><g data-b="r4" aria-label="Köyünü bırakıp şehre göç etti."><rect x="4" y="162" width="332" height="44" rx="9" class="box"/><text x="14" y="188" font-size="14">Köyünü bırakıp şehre göç etti.</text></g></svg>',
        dogru: ['r3'],
        hint: 'Her cümleyi kendi sözünle anlat ve numaralı anlamlardan biriyle eşleştir. Eşleşmeyen cümle cevaptır; gerçek anlamı unutma.',
        why: 'Kalemi masaya bırakmak, onu elden bir yere koymaktır; bu gerçek anlam listede yok. Sigarayı bırakmak alışkanlığa son vermek, anahtarı bırakmak emanet etmek, köyü bırakmak da terk etmektir.'
      } },

    { t: 'Ara soru', cp: {
        q: '<p>“Kırmak” sözcüğü aşağıdakilerin hangisinde <b>“gücendirmek, üzmek”</b> anlamında kullanılmıştır?</p>',
        c: ['Bulaşık yıkarken en sevdiği bardağı kırdı.', 'Sert sözleriyle en yakın arkadaşını kırdı.', 'Pazarlık edince satıcı fiyattan biraz kırdı.', 'Ağaçlar, soğuk rüzgârın hızını kırıyordu.'], a: 'B',
        hint: 'Gerçek anlamlı cümleyi hemen ele. Kalanlarda “kırdı” yerine “üzdü” yazınca hangisi anlamlı kalıyor?',
        why: 'B’de “arkadaşını kırdı”, arkadaşını üzdü, gücendirdi demektir. A’da sözcük gerçek anlamıyla, yani parçalamak anlamında; C’de indirim yapmak, D’de azaltmak anlamında kullanılmış.' },
      steps: [{ s: 'Şimdi sıra sende. Şıkları dikkatle oku, seçtikten sonra İşaretle’ye bas.' }] },

    { t: 'Altı çizili söz: altın kural',
      steps: [
        { s: 'Çıkmış sorularda en çok gelen kalıp şu: Metinde bir ifadenin altı çizilir ve bu ifadeyle anlatılmak istenen sorulur.' },
        { s: 'Bunun çok güzel bir çözüm yolu var. Şıkkı altı çizili sözün yerine koy, cümleyi baştan oku.',
          h: '<div class="an-rule"><b>Altın kural:</b> Şıkkı ifadenin yerine koy, cümleyi yeniden oku. Anlam bozulmuyorsa ve şık metnin başka bir cümlesinden ödünç alınmamışsa doğrudur.</div>' },
        { s: 'Hadi bir örnekle deneyelim.',
          h: '<div class="an-ex"><span class="an-l">“Kitaplar, <span class="an-w">zihnimi tanımadığım diyarlara doğru yola çıkardı</span>.”</span>' +
             '<span class="an-l rv a1">Yerine koy: Kitaplar, <b>farklı düşünmemi sağladı</b>. <span class="an-ok-t">anlam korunuyor ✓</span></span>' +
             '<span class="an-l rv a2">Yerine koy: Kitaplar, <b>beni yolculuğa çıkardı</b>. <span class="an-bad-t">sözcüğü sözcüğüne ✗</span></span></div>' },
        { s: 'Kitap insanı farklı düşüncelere götürür. Yerine koyunca anlam yerinde duruyor, işte doğru şık bu.', on: '.a1' },
        { s: 'Ama ifadeyi sözcüğü sözcüğüne, gerçek bir yolculuk gibi okursan yanılırsın. Altı çizili söz çoğunlukla mecazlıdır.', on: '.a2' }
      ] },

    { t: 'Altı çizili sözün üç tuzağı',
      steps: [
        { s: 'Şimdi bu sorulardaki üç büyük tuzağa bakalım.',
          h: '<div class="an-trap"><b>1. Metnin başka cümlesi:</b> Şıkta metinde geçen doğru bir bilgi vardır ama altı çizili sözün anlamı değildir.</div>' },
        { s: 'Birinci tuzak çok sinsi. Şık metinde gerçekten yazıyor diye doğru sanma. Soru, metnin genelini değil, yalnızca o ifadenin anlamını soruyor.' },
        { s: 'İkincisi, sözcüğü sözcüğüne okumak. “Çocukların arasından çıkamadım” diyen yazar, eserlerini hep çocuklar için yazdığını anlatıyordu.',
          h: '<div class="an-trap"><b>2. Sözcüğü sözcüğüne okuma:</b> “çocukların arasından çıkamadım” → eserlerim hep çocuklara yönelikti <small>(mecaz)</small></div>' },
        { s: 'Üçüncüsü, iki ifade birlikte sorulduğunda olur. Çeldiricide birinin anlamı doğru, diğerininki yanlış verilir.',
          h: '<div class="an-trap"><b>3. Çift altı çizili söz:</b> Şık “anlam 1 · anlam 2” biçimindeyse ikisini <b>ayrı ayrı</b> denetle.</div>' },
        { s: 'Yarısı doğru olan şık, yanlış şıktır. Bunu hiç unutma.' }
      ] },

    { t: 'Altı çizili söz: tuzak taraması',
      steps: [{ s: 'Altı çizili söz sorularıyla ilgili dört ifade var. Her biri için Doğru ya da Yanlış seç.' }],
      ia: {
        tip: 'dogruyanlis',
        q: '<p>Her ifade için karar ver.</p>',
        ifadeler: [{ m: 'Şıktaki bilgi metnin başka bir cümlesinde geçiyorsa, altı çizili sözün anlamı odur.', d: false, a: 'Metinde doğru olan her bilgi, o ifadenin anlamı değildir.' }, { m: 'Şık, ifadenin yerine konunca anlam korunuyorsa güçlü bir adaydır.', d: true, a: 'Altın kural: yerine koy, yeniden oku.' }, { m: 'İki ifade birlikte sorulduğunda birinin anlamını doğrulamak yeterlidir.', d: false, a: 'Yarısı doğru olan şık yanlıştır; ikisini de denetle.' }, { m: '“Çocukların arasından çıkamadım.” sözü, eserlerinin hep çocuklara yönelik olduğunu anlatabilir.', d: true, a: 'Altı çizili söz çoğunlukla mecazlıdır.' }],
        hint: 'Soru metnin genelini değil, yalnızca o ifadenin anlamını sorar. İfade de çoğu zaman mecazlıdır.',
        why: 'Yerine koyma yöntemi güvenlidir. Metinden ödünç alınmış bilgi ve yarısı doğru şık ise en bilinen iki çeldiricidir.'
      } },

    { t: '“Olamaz” ve “değildir” soruları',
      steps: [
        { s: 'Bazen soru tersten gelir: Altı çizili sözün anlamı hangisi olamaz?' },
        { s: 'Bu sorularda üç şık ifadenin eş ya da yakın anlamlısıdır. Bir şık ise çok yakın görünür ama farklı bir şey söyler.',
          h: '<div class="an-ex"><span class="an-l">“Bu romanda gerçekle hayal <span class="an-w">iç içe</span>.”</span>' +
             '<span class="an-l rv o1"><span class="an-ok-t">birbirine karışmak ✓</span> · <span class="an-ok-t">bir bütün olmak ✓</span> · <span class="an-ok-t">aynı noktada buluşmak ✓</span></span>' +
             '<span class="an-l rv o2"><span class="an-bad-t">karmaşık hâle gelmek</span> ← olumsuzluk eklenmiş</span></div>' },
        { s: 'İç içe olmak; birbirine karışmak, bir bütün olmak demek. Bunlar uyuyor.', on: '.o1' },
        { s: 'Ama “karmaşık hâle gelmek” ifadeye olumsuz bir anlam ekliyor. Metin karmaşa demiyor ki! Cevap bu.', on: '.o2' },
        { s: 'Bir örnek daha: “Bulanık düşünceleri berraklaştırmak” kuşkuları gidermektir, yanlışları düzeltmek değil. Belirsiz olan şey yanlış değildir.',
          h: '<div class="an-rule">Her şıkta kendine sor: <b>“Bu ifade bunu söylüyor mu, yoksa ben mi ekliyorum?”</b></div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>“Kitaplar, insanın <span class="an-w">ufkunu genişletir</span>.”</p><p>Bu cümledeki altı çizili sözün açıklaması aşağıdakilerden hangisi <b>olamaz</b>?</p>',
        c: ['Bakış açısını zenginleştirmek', 'Farklı düşüncelerle tanıştırmak', 'Olaylara daha geniş açıdan bakmasını sağlamak', 'Her konuda kesin ve doğru bilgi sahibi yapmak'], a: 'D',
        hint: 'Hangi şık ifadede olmayan bir şeyi, bir kesinliği ekliyor?',
        why: 'Ufku genişletmek; bakış açısını zenginleştirmek, yeni düşüncelere açmaktır. D ise ifadeye “her konuda kesin bilgi” anlamı ekliyor; cümle bunu söylemiyor.' },
      steps: [{ s: 'Soru kökü “olamaz” diyor. Şıkları yerine koyarak dene.' }] },

    { t: 'Deyim, atasözü, özdeyiş',
      base: '<div class="an-grid"><div class="rv d1"><b>Deyim</b>kalıplaşmış söz öbeği; bir durumu anlatır, öğüt vermez<br><small>göze almak, burnunda tütmek</small></div>' +
        '<div class="rv d2"><b>Atasözü</b>kalıplaşmış cümle; toplumun ortak yargısı, çoğunlukla öğüt<br><small>Damlaya damlaya göl olur.</small></div>' +
        '<div class="rv d3"><b>Özdeyiş</b>söyleyeni belli, kısa ve özlü söz<br><small>Hayatta en hakiki mürşit ilimdir.</small></div></div>',
      steps: [
        { s: 'Gelelim deyim ve atasözlerine. Önce ikisini ayıralım.' },
        { s: 'Deyim, en az iki sözcükten oluşan, genellikle mecazlı, kalıplaşmış bir söz öbeğidir. Bir durumu anlatır ama öğüt vermez.', on: '.d1' },
        { s: 'Atasözü ise uzun deneyimlerden süzülmüş, toplumun ortak yargısını bildiren bir cümledir. Çoğu zaman öğüt verir.', on: '.d2' },
        { s: 'Özdeyiş de atasözüne benzer ama söyleyeni bellidir. “Hayatta en hakiki mürşit ilimdir” sözü Atatürk’ündür.', on: '.d3' },
        { s: 'LGS bunları çoğunlukla anlam gruplarıyla sorar: Hangilerinde üzüntü var, hangisinde tecrübe yok gibi.' }
      ] },

    { t: 'Anlam grupları ve tuzakları',
      base: '<table class="an-tbl"><tr><th>Anlam</th><th>Örnekler</th></tr>' +
        '<tr class="rv g1"><td><b>Üzüntü</b></td><td>kendini yiyip bitirmek, içi kan ağlamak</td></tr>' +
        '<tr class="rv g2"><td><b>Pişmanlık</b></td><td>dizini dövmek, bin pişman olmak</td></tr>' +
        '<tr class="rv g3"><td><b>Tecrübe</b></td><td>eski kurt, insan sarrafı</td></tr>' +
        '<tr class="rv g4"><td><b>Sevinç</b></td><td>etekleri zil çalmak, ağzı kulaklarına varmak</td></tr>' +
        '<tr class="rv g5"><td><b>Özlem</b></td><td>burnunda tütmek, gözü yollarda kalmak</td></tr></table>',
      steps: [
        { s: 'Sık sorulan anlam gruplarına bir göz atalım.', on: '.g1,.g2' },
        { s: 'Tecrübe için “eski kurt”, “insan sarrafı”. Sevinç ve özlem için de bu deyimleri aklında tut.', on: '.g3,.g4,.g5' },
        { s: 'Şimdi dikkat! “Parmak ısırmak” pişmanlık değildir. Şaşırmak, hayran kalmak demektir.',
          h: '<div class="an-trap"><span class="an-w">parmak ısırmak</span> = şaşırmak, hayran kalmak <span class="an-bad-t">pişmanlık</span><br><span class="an-w">ince eleyip sık dokumak</span> = titizlik <span class="an-bad-t">tecrübe</span></div>' },
        { s: '“İnce eleyip sık dokumak” da tecrübe değil, titizlik bildirir. İkisi de çıkmış sorularda çeldirici oldu.' },
        { s: 'Bir de ortak sözcük tuzağı var. “Kendini paralamak” çok çabalamak, “kendini yiyip bitirmek” ise üzüntüdür. Aynı sözcükle başlıyor diye aynı anlamda değiller.',
          h: '<div class="an-rule">Ortak sözcük, ortak anlam demek değildir. <small>ağzı sıkı = sır saklayan · eli sıkı = cimri</small></div>' },
        { s: 'Son olarak, deyimi metnin konusuyla değil, anlatılan durumla eşleştir. Gurbet anlatılıyor diye her zaman “burnunda tütmek” cevap olmaz.' }
      ] },

    { t: 'Üzüntü bildirmeyenleri ele',
      steps: [{ s: 'Bu deyimlerin bazıları üzüntü bildirmiyor. Onları bul ve ele.' }],
      ia: {
        tip: 'eleme',
        q: '<p>Aşağıdaki deyimlerden <b>üzüntü bildirmeyenleri</b> ele.</p>',
        ogeler: ['kendini yiyip bitirmek', 'kendini paralamak', 'içi kan ağlamak', 'parmak ısırmak', 'yüreği parçalanmak', 'dizini dövmek', 'kendini harap etmek'],
        ele: [1, 3, 5],
        hint: 'Ortak sözcüğe aldanma. Her deyimi bir cümlede kullanıp ne anlattığını düşün.',
        why: 'Kendini paralamak çok çabalamak, parmak ısırmak şaşırıp hayran kalmak, dizini dövmek de pişmanlıktır. Kalan dört deyim derin bir üzüntü bildirir.'
      } },

    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdaki cümlelerin hangisinde <b>pişmanlık</b> anlamı taşıyan bir deyim kullanılmıştır?</p>',
        c: ['Gösteriyi izleyenler, çocuğun yeteneğine parmak ısırdı.', 'Eline geçen fırsatı kaçırınca dizini dövdü.', 'Bursu kazandığını duyunca etekleri zil çaldı.', 'Yıllardır uzakta olan dedesinin köyü burnunda tütüyordu.'], a: 'B',
        hint: '“Parmak ısırmak” sana neyi hatırlatıyor? Tuzak kutusunu düşün.',
        why: '“Dizini dövmek” pişmanlık bildirir. A’daki parmak ısırmak hayran kalmak, C’deki etekleri zil çalmak sevinç, D’deki burnunda tütmek özlem anlamındadır.' },
      steps: [{ s: 'Bu soruda bir tuzak var, bakalım yakalayabilecek misin?' }] },

    { t: 'İkilemeler',
      steps: [
        { s: 'İkileme, anlamı güçlendirmek için sözcüklerin yan yana kullanılmasıdır. Yavaş yavaş, eğri büğrü, er geç gibi.' },
        { s: 'Bir yıl LGS sınavında dört şıkta da “ora, bura” ikilemesi vardı. Hepsi birbirine benziyordu ama anlamları farklıydı.',
          h: '<table class="an-tbl"><tr class="rv i1"><td>Kitabın <span class="an-w">orasından burasından</span> okudu.</td><td>sıra gözetmeden</td></tr>' +
             '<tr class="rv i2"><td>Bu olayı <span class="an-w">orada burada</span> anlatıyor.</td><td>her yerde, herkese</td></tr>' +
             '<tr class="rv i3"><td>Gün boyu <span class="an-w">oradan oraya</span> koştu.</td><td>durmadan yer değiştirme</td></tr></table>' },
        { s: 'Kitabın orasından burasından okumak, belli bir sıra gözetmeden okumak demek.', on: '.i1' },
        { s: 'Orada burada anlatmak ise her yerde, herkese anlatmak. Oradan oraya koşmak da durmadan bir yerden bir yere gitmek.', on: '.i2,.i3' },
        { s: 'Kural basit: İkilemenin anlamını tek başına değil, yüklemle birlikte okuyarak bul.',
          h: '<div class="an-tip">İkilemeyi <b>yüklemle birlikte</b> oku: “okudu” ile “anlatıyor” aynı ikilemeye başka anlam verir.</div>' }
      ] },

    { t: 'İkilemeyi anlamıyla eşleştir',
      steps: [{ s: 'Her ikilemeyi cümledeki anlamıyla eşleştir. Önce cümleye, sonra anlamına dokun.' }],
      ia: {
        tip: 'eslestir',
        q: '<p>Koyu ikilemeyi bu cümlede kazandığı anlamla eşleştir.</p>',
        solBaslik: 'Cümle',
        sagBaslik: 'Anlamı',
        sol: ['Bizi <b>sık sık</b> arar.', 'Yol <b>aşağı yukarı</b> iki saat sürdü.', '<b>Ufak tefek</b> eşyaları topladı.', '<b>Er geç</b> gerçeği öğrenecek.', 'Kitabın <b>orasından burasından</b> okudu.'],
        sag: ['çoğu zaman', 'yaklaşık', 'küçük, önemsiz', 'eninde sonunda', 'sıra gözetmeden'],
        hint: 'İkilemeyi yüklemle birlikte düşün: ne kadar sürdü, ne zaman öğrenecek, nasıl okudu?',
        why: 'Sık sık çoğu zaman, aşağı yukarı yaklaşık, ufak tefek küçük ve önemsiz, er geç eninde sonunda demektir. Orasından burasından ise sıra gözetmeden anlamı taşır.'
      } },

    { t: 'Boşluk doldurma',
      steps: [
        { s: 'Son yıllarda yeni bir kalıp geldi: Metinde iki boşluk var, şıklar “sözcük, sözcük” biçiminde.' },
        { s: 'Adım adım gidelim.',
          h: '<div class="an-ex"><span class="an-l rv b1">1. Boşluğun hemen ardındaki açıklamayı bul: “Çünkü…”, “…gibi”.</span>' +
             '<span class="an-l rv b2">2. Bağlaçlara bak: fakat, yine de karşıtlık; çünkü, bu yüzden neden-sonuç kurar.</span>' +
             '<span class="an-l rv b3">3. Daha kolay boşlukla şık ele, kalanlarda öbür boşluğu dene.</span>' +
             '<span class="an-l rv b4">4. Metnin tonunu koru: övgü varsa olumsuz sıfat gelmez.</span></div>' },
        { s: 'Önce boşluğun hemen arkasına bak. Çoğu zaman metin, o boşluğun anlamını bir sonraki cümlede açıklar.', on: '.b1' },
        { s: 'Sonra bağlaçlara bak. “Fakat” görüyorsan boşluğa karşıt bir anlam gelir.', on: '.b2' },
        { s: 'Kolay boşlukla başla, şıkları ele. Bir de metnin tonuna dikkat et.', on: '.b3,.b4' },
        { s: 'Ve en önemlisi: Bir boşluğa uyan şık, öbür boşluğu bozuyor olabilir. İki boşluğu da doğrulamadan işaretleme.',
          h: '<div class="an-trap">Yarısı doğru şık: Birinci sözcük uyar, ikincisi metnin akışını bozar. <b>İkisini de</b> denetle.</div>' }
      ] },

    { t: 'İki boşluğu birlikte doldur',
      steps: [{ s: 'İki boşluğu da doldur. Önce boşluğun arkasındaki açıklamaya, sonra bağlaca bak.' }],
      ia: {
        tip: 'bosluk',
        q: '<p>Boşluklara düşüncenin akışına uygun sözcükleri yerleştir.</p>',
        metin: 'Dedem çok [_] biridir; kimse istemeden komşularının yardımına koşar. [_] bu iyiliği yüzünden bazen kendi işlerini aksatır.',
        secenek: ['yardımsever', 'eli açık', 'meraklı', 'Fakat', 'Çünkü', 'Örneğin'],
        cevap: ['yardımsever', 'Fakat'],
        hint: 'Birinci boşluğu hemen arkasındaki açıklama söyler. İkinci boşlukta iyi bir özellikten olumsuz bir sonuca geçiliyor; bu hangi bağlacı ister?',
        why: 'Açıklama, komşularının yardımına koştuğunu söylüyor: yardımsever. “Eli açık” parayla cömertliktir, açıklamaya uymaz. İyi bir özellikten olumsuz sonuca geçiş karşıtlık ister: Fakat.'
      } },

    { t: 'Anlam ilişkileri ve kapanış',
      steps: [
        { s: 'Son olarak sözcükler arasındaki ilişkileri hızlıca hatırlayalım.',
          h: '<table class="an-tbl"><tr><td><b>Eş anlamlı</b></td><td>gayret ve çaba, maksat ve amaç</td></tr>' +
             '<tr><td><b>Yakın anlamlı</b></td><td>bakmak, izlemek, seyretmek</td></tr>' +
             '<tr><td><b>Zıt anlamlı</b></td><td>cömert ve cimri</td></tr>' +
             '<tr><td><b>Eş sesli</b></td><td>yüz <small>(sayı)</small>, yüz <small>(surat)</small>, yüz- <small>(yüzmek)</small></td></tr></table>' },
        { s: 'Sözcük karşılığı sorularında üç karşılık birden sorulabilir. Çeldiricide biri doğru bırakılır, öbürü yakın bir sözcükle değiştirilir. Üçünü de denetle.' },
        { s: 'Toparlarsak: Anlamı cümle belirler, şıkkı yerine koyup okursun, gerçek anlam ve yarısı doğru şık tuzaklarına düşmezsin.',
          h: '<div class="an-rule"><b>Akılda kalsın:</b> Yerine koy, yeniden oku, “ben mi ekliyorum?” diye sor.</div>' },
        { s: 'Harika iş çıkardın. Şimdi konu sorularıyla pekiştirme zamanı!' }
      ] }
  ]
};
