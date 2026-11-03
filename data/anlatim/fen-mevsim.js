/* Adım Adım Anlatım · Fen · Mevsimler ve İklim (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['fen-mevsim'] = {
  title: 'Mevsimler ve İklim',
  desc: 'Dünya’nın iki hareketi, eksen eğikliği, ışınların geliş açısı, dört önemli tarih, gölge boyu, veriden yarım küre bulma ve iklim ile hava olayı farkı, sahne sahne.',
  ozet: [
    'Dönme (24 saat, batıdan doğuya) gece-gündüzü; dolanma (365 gün 6 saat) eksen eğikliğiyle birlikte mevsimleri oluşturur.',
    'Mevsimlerin nedeni Güneş’e uzaklık değildir: Dünya Güneş’e en yakınken (3 Ocak) Kuzey Yarım Küre’de kış yaşanır.',
    'Eksen eğikliği yaklaşık 23,5°. Işınlar yalnızca Yengeç ve Oğlak dönenceleri arasına dik gelebilir; Türkiye’ye hiçbir gün dik gelmez.',
    'Dik ışın → dar alan → birim yüzeye çok enerji → çok ısınma, kısa gölge. Eğik ışın → geniş alan → az enerji. Özdeş fenerlerin toplam enerjisi aynıdır.',
    '21 Haziran: ışınlar Yengeç’e dik, Kuzey’de en uzun gündüz. 21 Aralık: Oğlak’a dik, Kuzey’de en uzun gece. 21 Mart ve 23 Eylül: Ekvator’a dik, her yerde gece = gündüz.',
    'Gündüzün uzaması ile gündüzün geceden uzun olması farklıdır (21 Aralık → 21 Mart arası Kuzey’de gündüz uzar ama gece hâlâ uzundur).',
    'Yarım küreyi sıcaklığın yıl içindeki değişim yönü gösterir: ocak soğuk, temmuz sıcak → Kuzey. Tek bir sıcaklık değeri mevsim ya da yarım küre söylemez.',
    'Hava olayı kısa süreli ve dar alanlı (meteoroloji, meteorolog); iklim geniş alanda uzun yılların ortalaması (klimatoloji, klimatolog).'
  ],
  scenes: [
    { t: 'Dünya’nın iki hareketi',
      base: '<svg class="an-svg" viewBox="0 0 340 200" role="img" aria-label="Güneş merkezde, Dünya yörüngede hem kendi etrafında döner hem Güneş etrafında dolanır">' +
        '<ellipse cx="170" cy="100" rx="140" ry="62" fill="none" style="stroke:var(--muted)" stroke-width="1.5" stroke-dasharray="5 5"/>' +
        '<circle cx="170" cy="100" r="24" fill="#f5b301"/><text x="170" y="142" font-size="13" text-anchor="middle" class="mut">Güneş</text>' +
        '<circle cx="310" cy="100" r="13" fill="#3b82f6" class="rv d1"/><text x="310" y="132" font-size="13" text-anchor="middle" class="rv d1">Dünya</text>' +
        '<path class="st dr d2" d="M292 86 A22 22 0 1 1 296 120"/><path class="st dr d2" d="M296 120 l-9 -1 m9 1 l-1 -9"/>' +
        '<text x="246" y="64" font-size="13" text-anchor="middle" class="acc rv d2">dönme: 24 saat</text>' +
        '<path class="st2 dr d3" d="M262 48 Q170 22 76 50"/><path class="st2 dr d3" d="M76 50 l10 -7 m-10 7 l11 3"/>' +
        '<text x="170" y="22" font-size="13" text-anchor="middle" class="rv d3">dolanma: 365 gün 6 saat</text>' +
        '<text x="170" y="190" font-size="13" text-anchor="middle" class="acc rv d4">dolanma + eksen eğikliği = mevsimler</text></svg>',
      steps: [
        { s: 'Hoş geldin! Mevsimler konusuna Dünya’nın hareketleriyle başlayalım. Dünya aynı anda iki hareket yapıyor.', on: '.d1' },
        { s: 'Birincisi, kendi ekseni etrafında dönmesi. Bir tur yaklaşık 24 saat sürer ve yönü batıdan doğuya doğrudur.', on: '.d2' },
        { s: 'Bu dönme yüzünden gece ile gündüz art arda gelir, Güneş de doğudan doğup batıdan batıyormuş gibi görünür.' },
        { s: 'İkincisi, Güneş’in etrafında dolanması. Bu tur 365 gün 6 saat sürer, yani bir yıl.', on: '.d3' },
        { s: 'Mevsimleri oluşturan da işte bu dolanma, ama tek başına değil; dönme ekseninin eğik olmasıyla birlikte.', on: '.d4' },
        { s: 'LGS’de sık sık bir sonucun hangi hareketten kaynaklandığı sorulur. Gece-gündüz dönmeden, mevsimler dolanma ve eğiklikten gelir.',
          h: '<table class="an-tbl"><tr><th></th><th>Dönme</th><th>Dolanma</th></tr><tr><td>Süre</td><td>24 saat</td><td>365 gün 6 saat</td></tr><tr><td>Sonuç</td><td>gece-gündüz, gün içinde gölge değişimi</td><td>eğiklikle birlikte mevsimler</td></tr></table>' }
      ] },

    { t: 'Grupla: dönme mi, dolanma mı?',
      steps: [{ s: 'Şimdi sen dene. Her sonucu, onu oluşturan harekete yerleştir. Önce karta, sonra kutusuna dokun.' }],
      ia: { tip: 'grup', q: '<p>Her sonucu oluşturan harekete yerleştir.</p>', gruplar: ['Dönme (24 saat)', 'Dolanma + eğiklik'],
        ogeler: [{ m: 'Gece ile gündüzün oluşması', g: 0 }, { m: 'Mevsimlerin oluşması', g: 1 },
          { m: 'Güneş’in doğudan doğar gibi görünmesi', g: 0 }, { m: 'Gündüz süresinin aylara göre değişmesi', g: 1 },
          { m: 'Gün içinde gölgenin yön ve boy değiştirmesi', g: 0 }, { m: 'Kuzey ile Güney’de zıt mevsimler', g: 1 }],
        hint: 'Kendine sor: bu olay bir gün içinde mi tekrarlanıyor, yoksa yıl boyunca mı değişiyor?',
        why: 'Bir gün içinde olanlar dönmeden; yıl içinde değişenler dolanma ve eksen eğikliğinden gelir. Gölgenin gün içindeki değişimi dönmeden, öğle gölgesinin aylara göre değişimi ise dolanmadandır.' } },
    { t: 'Mevsimler uzaklıktan olmaz',
      steps: [
        { s: 'Şimdi çok yaygın bir yanlış inanışı bozalım. Pek çok kişi yaz mevsiminde Güneş’e yaklaştığımızı sanır. Öyle değil!' },
        { s: 'Dünya Güneş’e en yakın konuma 3 Ocak civarında gelir. Tam o sırada bizim yarım kürede kış vardır.',
          h: '<div class="an-trap"><span class="an-l">3 Ocak: Güneş’e <b>en yakın</b> (≈ 147 milyon km) → Kuzey’de <b>kış</b></span><br><span class="an-l">4 Temmuz: Güneş’e <b>en uzak</b> (≈ 152 milyon km) → Kuzey’de <b>yaz</b></span></div>',
          v: 'Dünya Güneş’e en yakın konuma 3 Ocak civarında gelir. Tam o sırada bizim yarım kürede kış vardır.' },
        { s: 'En uzak olduğumuz 4 Temmuz’da ise yaz yaşıyoruz. Yani uzaklık mevsimin sebebi olamaz.' },
        { s: 'Bir ipucu daha: aynı anda iki yarım kürede zıt mevsimler var. Uzaklık sebep olsaydı bütün Dünya’da aynı mevsim yaşanırdı.' },
        { s: 'Peki asıl sebep ne? Eksenin eğik olması ve bunun sonucunda ışınların yere farklı açılarla gelmesi. Hemen buna bakalım.',
          h: '<div class="an-rule"><b>Mevsimlerin nedeni:</b> Dünya’nın Güneş etrafında dolanması + dönme ekseninin eğik olması</div>' }
      ] },

    { t: 'Eksen eğikliği ve dönenceler',
      base: '<svg class="an-svg" viewBox="0 0 340 200" role="img" aria-label="Eksen 23,5 derece eğik; Ekvator, dönenceler ve kutup daireleri">' +
        '<circle cx="170" cy="105" r="70" fill="#3b82f6" fill-opacity=".22" stroke="#3b82f6"/>' +
        '<path d="M170 35 A70 70 0 0 1 170 175 Z" fill="#000" fill-opacity=".28" class="rv e6"/>' +
        '<g transform="rotate(-23.5 170 105)">' +
        '<line x1="170" y1="20" x2="170" y2="190" class="st"/>' +
        '<line x1="100" y1="105" x2="240" y2="105" class="rv e2" style="stroke:var(--text)" stroke-width="2.5"/>' +
        '<line x1="106" y1="77" x2="234" y2="77" class="st rv e3" stroke-dasharray="6 4"/>' +
        '<line x1="106" y1="133" x2="234" y2="133" class="st rv e3" stroke-dasharray="6 4"/>' +
        '<line x1="142" y1="41" x2="198" y2="41" class="rv e4" style="stroke:var(--muted)" stroke-width="2.5" stroke-dasharray="4 3"/>' +
        '<line x1="142" y1="169" x2="198" y2="169" class="rv e4" style="stroke:var(--muted)" stroke-width="2.5" stroke-dasharray="4 3"/></g>' +
        '<line x1="170" y1="18" x2="170" y2="40" class="ln rv e1" stroke-dasharray="4 3"/>' +
        '<path d="M170 45 A60 60 0 0 0 146 50" class="st2 rv e1"/><text x="176" y="30" font-size="13" class="acc rv e1">23,5°</text>' +
        '<text x="236" y="81" font-size="12" class="rv e2">Ekvator</text>' +
        '<text x="222" y="56" font-size="12" class="acc rv e3">Yengeç D.</text><text x="246" y="109" font-size="12" class="acc rv e3">Oğlak D.</text>' +
        '<text x="104" y="30" font-size="11" class="mut rv e4">K. Kutup D.</text><text x="226" y="160" font-size="11" class="mut rv e4">G. Kutup D.</text>' +
        '<g class="rv e5"><line x1="8" y1="105" x2="96" y2="105" class="st2"/><line x1="8" y1="80" x2="100" y2="80" class="st2"/><line x1="8" y1="130" x2="100" y2="130" class="st2"/>' +
        '<line x1="8" y1="55" x2="117" y2="55" class="st2"/><line x1="8" y1="155" x2="117" y2="155" class="st2"/><text x="8" y="47" font-size="12" class="mut">Güneş ışınları</text></g></svg>',
      steps: [
        { s: 'Dünya’nın ekseni dik durmuyor, yaklaşık 23,5 derece eğik. Bu küçük açı bütün konunun kalbidir.', v: 'Dünya’nın ekseni dik durmuyor, yaklaşık 23 buçuk derece eğik. Bu küçük açı bütün konunun kalbidir.', on: '.e1' },
        { s: 'Ortadaki çizgi Ekvator. Dünya’yı Kuzey ve Güney yarım küre olarak ikiye ayırır.', on: '.e2' },
        { s: 'Ekvator’un kuzeyindeki kesikli çizgi Yengeç, güneyindeki Oğlak Dönencesi. Enlemleri eksen eğikliğine eşittir.', on: '.e3' },
        { s: 'Güneş ışınları yıl boyunca yalnızca bu iki dönence arasındaki bir yere dik gelebilir. Bu sınırı aklına iyi yaz.' },
        { s: 'Kutuplara yakın çizgiler de kutup daireleri. Doksandan 23,5’i çıkarınca 66,5 derece bulunur.', v: 'Kutuplara yakın çizgiler de kutup daireleri. Doksandan 23 buçuğu çıkarınca 66 buçuk derece bulunur.', on: '.e4' },
        { s: 'Şimdi Güneş ışınlarını ekleyelim. Kuzey Kutbu Güneş’e dönük; ışınlar tam Yengeç Dönencesi’ne dik geliyor. Bu, 21 Haziran’ın resmi.', on: '.e5' },
        { s: 'Karanlık yarı gece tarafı. Bakar mısın, Kuzey Kutup Dairesi’nin içi tamamen aydınlıkta kalıyor: orada 24 saat gündüz var.', on: '.e6' },
        { s: 'Türkiye ise Yengeç Dönencesi’nin kuzeyinde. Bu yüzden ülkemize ışınlar hiçbir gün dik gelmez, öğle gölgesi hiç sıfır olmaz.',
          h: '<div class="an-trap">Türkiye dönencelerin dışında: ışınlar Türkiye’ye <b>hiçbir zaman</b> 90° ile gelmez, öğle gölgesi hep kuzeye düşer.</div>' }
      ] },

    { t: 'Kaydır: eğiklik değişseydi',
      steps: [{ s: 'Bir düşünce deneyi yapalım. Eksen eğikliği 23,5 derece değil de 30 derece olsaydı, Kuzey Kutup Dairesi hangi enleme kayardı? Sayı doğrusunda işaretle.' }],
      ia: { tip: 'kaydir', q: '<p>Eksen eğikliği <b>30°</b> olsaydı Kuzey Kutup Dairesi kaç derece enlemde olurdu?</p>',
        min: 0, max: 90, adim: 0.5, cevap: 60, tol: 0, birim: '°', bas: 45, etiket: [0, 15, 30, 45, 60, 75, 90],
        hint: 'Gerçek değeri nasıl bulmuştuk? Kutbun enleminden eğikliği çıkarmıştık.',
        why: '90 − 30 = 60. Kutup dairesi her zaman 90’dan eğikliğin çıkarılmasıyla bulunur; dönence ise eğikliğe eşit olur, yani 30 derecede.',
        whyV: 'Doksandan otuzu çıkarırız, altmış derece eder. Kutup dairesi her zaman doksandan eğikliğin çıkarılmasıyla bulunur. Dönence ise eğikliğe eşit olur, yani otuz derecede.' } },
    { t: 'Işının geliş açısı ve enerji',
      base: '<svg class="an-svg" viewBox="0 0 340 190" role="img" aria-label="Dik gelen demet dar alanı, eğik gelen demet geniş alanı aydınlatır">' +
        '<polygon points="40,20 90,20 90,120 40,120" fill="#f5b301" fill-opacity=".35" class="rv a1"/>' +
        '<line x1="40" y1="20" x2="40" y2="120" class="st2 rv a1"/><line x1="90" y1="20" x2="90" y2="120" class="st2 rv a1"/>' +
        '<polygon points="108,30 186,30 293,120 215,120" fill="#f5b301" fill-opacity=".35" class="rv a2"/>' +
        '<line x1="108" y1="30" x2="215" y2="120" class="st2 rv a2"/><line x1="186" y1="30" x2="293" y2="120" class="st2 rv a2"/>' +
        '<line x1="10" y1="122" x2="330" y2="122" class="ln" stroke-width="2"/>' +
        '<line x1="40" y1="122" x2="90" y2="122" class="st rv a1" stroke-width="5"/><line x1="215" y1="122" x2="293" y2="122" class="st rv a2" stroke-width="5"/>' +
        '<text x="65" y="144" font-size="13" text-anchor="middle" font-weight="700" class="rv a1">Dik → dar alan</text>' +
        '<text x="254" y="144" font-size="13" text-anchor="middle" font-weight="700" class="rv a2">Eğik → geniş alan</text>' +
        '<text x="65" y="164" font-size="12" text-anchor="middle" class="acc rv a3">birim yüzeye çok enerji</text>' +
        '<text x="254" y="164" font-size="12" text-anchor="middle" class="mut rv a3">birim yüzeye az enerji</text>' +
        '<text x="170" y="184" font-size="12" text-anchor="middle" class="mut rv a3">iki demetin toplam enerjisi aynı</text></svg>',
      steps: [
        { s: 'Mevsimlerin asıl motoru ışınların yere geliş açısı. Önce dik gelen bir ışık demetine bakalım: dar bir alanı aydınlatıyor.', on: '.a1' },
        { s: 'Şimdi aynı demet eğik gelsin. Bu kez aynı ışık çok daha geniş bir alana yayılıyor.', on: '.a2' },
        { s: 'İki demetin taşıdığı toplam enerji aynı. Değişen şey, bu enerjinin kaç parçaya bölündüğü.', on: '.a3' },
        { s: 'Dik gelende enerji küçük alana toplandığı için birim yüzeye düşen enerji fazla olur; yüzey daha çok ısınır.' },
        { s: 'Işının dik geldiği yarım kürede yaz, eğik geldiği yarım kürede kış yaşanır. Gölge de dik ışıkta kısa, eğik ışıkta uzundur.',
          h: '<div class="an-tip">Hafıza ipucu: <b>Dik → Dar alan → Dolu enerji</b> · <b>Eğik → Engin alan → Eksik enerji</b></div>' }
      ] },

    { t: 'Boşluk: dik ışının sonucu',
      steps: [{ s: 'Kuralı kendi elinle tamamla. Boşluğa, sonra doğru karta dokun.' }],
      ia: { tip: 'bosluk', q: '<p>Dik gelen ışın için kuralı tamamla.</p>',
        metin: 'Işın dik gelir → [_] alan aydınlanır → birim yüzeye [_] enerji düşer → öğle gölgesi [_] olur.',
        secenek: ['dar', 'geniş', 'çok', 'az', 'kısa', 'uzun'], cevap: ['dar', 'çok', 'kısa'],
        hint: 'Aynı miktarda ışığı küçük bir alana mı, büyük bir alana mı topladığını düşün.',
        why: 'Dik ışın enerjiyi dar alana toplar; birim yüzeye çok enerji düşer, gölge kısalır. Toplam enerji değişmez, değişen dağıldığı alandır.' } },
    { t: 'Fener deneyi ve büyük tuzak',
      steps: [
        { s: 'LGS bu kuralı çoğu zaman bir deneyle sorar: özdeş fenerler, aynı uzaklıktan, farklı açılarla levhalara tutulur.' },
        { s: 'Burada değişkenleri ayırmak çok önemli. Bilerek değiştirdiğimiz şey ışığın geliş açısı, ölçtüğümüz şey sıcaklık artışı.',
          h: '<table class="an-tbl"><tr><th>Değişken</th><th>Bu deneyde</th></tr><tr><td>Bağımsız (değiştirilen)</td><td>ışığın geliş açısı</td></tr><tr><td>Bağımlı (ölçülen)</td><td>levhadaki sıcaklık artışı</td></tr><tr><td>Sabit tutulan</td><td>fener türü, uzaklık, süre, levha türü</td></tr></table>' },
        { s: 'Fener, uzaklık, süre ve levha türü ise sabit tutulur. Biri değişirse deney neyi gösterdiğini kaybeder.' },
        { s: 'Ve şimdi en sık düşülen tuzak: “Dik tutulan fener daha çok enerji yaydı.” Bu cümle yanlış!',
          h: '<div class="an-trap"><span class="an-bad-t">Dik tutulan fener daha çok enerji yayar.</span><br><span class="an-ok-t">Fenerler eşit enerji yayar; dik ışık bu enerjiyi daha küçük alana verir.</span></div>' },
        { s: 'Fenerler özdeş olduğu için yaydıkları enerji eşittir. Farkı yaratan, enerjinin dağıldığı alan.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Özdeş iki el feneri, özdeş iki levhaya aynı uzaklıktan aynı süre tutuluyor. Birinci fener levhaya <b>dik</b>, ikincisi <b>eğik</b> tutuluyor. Buna göre hangisi <b>doğrudur</b>?</p>',
        c: ['Dik tutulan fener daha çok enerji yayar.', 'Eğik gelen ışık daha küçük bir alanı aydınlatır.', 'Dik ışığın düştüğü levhada birim yüzeye düşen enerji daha fazladır.', 'İki levhanın sıcaklığı eşit miktarda artar.'], a: 'C',
        hint: 'Fenerler özdeş, yani yaydıkları toplam enerji eşit. Asıl soru: bu enerji ne kadar alana dağılıyor?',
        why: 'Dik ışık aynı enerjiyi daha dar alana verir; birim yüzeye düşen enerji fazla olur, o levha daha çok ısınır. Fenerlerin yaydığı enerji ise eşittir.' },
      steps: [{ s: 'Hadi bakalım, ilk ara soru geldi. Dikkatlice oku, doğru şıkkı seç ve İşaretle’ye bas.' }] },

    { t: 'Dört önemli tarih',
      base: '<svg class="an-svg" viewBox="0 0 340 210" role="img" aria-label="Dünya’nın yörüngedeki dört konumu: 21 Haziran, 21 Mart, 21 Aralık, 23 Eylül">' +
        '<ellipse cx="170" cy="105" rx="132" ry="62" fill="none" style="stroke:var(--muted)" stroke-width="1.5" stroke-dasharray="5 5"/>' +
        '<circle cx="170" cy="105" r="20" fill="#f5b301"/>' +
        '<g class="rv p1"><circle cx="38" cy="105" r="14" fill="#3b82f6"/><line x1="31" y1="122" x2="45" y2="88" class="st"/><text x="38" y="140" font-size="12" text-anchor="middle" font-weight="700">21 Haziran</text></g>' +
        '<g class="rv p2"><circle cx="302" cy="105" r="14" fill="#3b82f6"/><line x1="295" y1="122" x2="309" y2="88" class="st"/><text x="302" y="140" font-size="12" text-anchor="middle" font-weight="700">21 Aralık</text></g>' +
        '<g class="rv p3"><circle cx="170" cy="43" r="14" fill="#3b82f6"/><line x1="163" y1="60" x2="177" y2="26" class="st"/><text x="214" y="30" font-size="12" font-weight="700">21 Mart</text>' +
        '<circle cx="170" cy="167" r="14" fill="#3b82f6"/><line x1="163" y1="184" x2="177" y2="150" class="st"/><text x="214" y="190" font-size="12" font-weight="700">23 Eylül</text></g>' +
        '<text x="38" y="80" font-size="11" text-anchor="middle" class="acc rv p1">K. Kutbu Güneş’e dönük</text>' +
        '<text x="302" y="80" font-size="11" text-anchor="middle" class="mut rv p2">K. Kutbu Güneş’ten uzak</text></svg>',
      steps: [
        { s: 'Şimdi yıl içindeki dört önemli tarihe geçelim. Dikkat et, eksen bütün yıl uzayda aynı yöne eğik kalıyor.' },
        { s: 'Yörüngenin bu ucunda Kuzey Kutbu Güneş’e dönük. Bu 21 Haziran: ışınlar Yengeç Dönencesi’ne dik gelir.', on: '.p1' },
        { s: 'Karşı uçta eksen aynı yöne eğik ama artık Kuzey Kutbu Güneş’ten uzakta. Bu 21 Aralık: ışınlar Oğlak’a dik gelir.', on: '.p2' },
        { s: 'Aradaki iki konum ekinokslar: 21 Mart ve 23 Eylül. Işınlar Ekvator’a dik gelir.', on: '.p3' },
        { s: 'Konum şekli verilen sorularda ilk işin şu olsun: Kuzey Kutbu Güneş’e mi dönük, yoksa uzağa mı? Tarihi buradan bulursun.',
          h: '<div class="an-tip">Hafıza ipucu: <b>Haziran’da ışık yukarıda</b> (Yengeç), <b>Aralık’ta aşağıda</b> (Oğlak). Mart ve Eylül <b>eşit</b>: ışık Ekvator’da, gece = gündüz.</div>' }
      ] },

    { t: 'Gece ve gündüz süreleri',
      base: '<table class="an-tbl"><tr><th>Tarih</th><th>Dik ışın</th><th>Kuzey Yarım Küre</th><th>Güney Yarım Küre</th></tr>' +
        '<tr class="rv t1"><td><b>21 Haziran</b></td><td>Yengeç</td><td>yaz başlar, en uzun gündüz</td><td>kış başlar, en uzun gece</td></tr>' +
        '<tr class="rv t2"><td><b>23 Eylül</b></td><td>Ekvator</td><td>sonbahar, gece = gündüz</td><td>ilkbahar, gece = gündüz</td></tr>' +
        '<tr class="rv t3"><td><b>21 Aralık</b></td><td>Oğlak</td><td>kış başlar, en uzun gece</td><td>yaz başlar, en uzun gündüz</td></tr>' +
        '<tr class="rv t4"><td><b>21 Mart</b></td><td>Ekvator</td><td>ilkbahar, gece = gündüz</td><td>sonbahar, gece = gündüz</td></tr></table>',
      steps: [
        { s: 'Gece ile gündüzü ayıran sınıra aydınlanma çemberi denir. Bu çember her zaman ışınlara diktir.' },
        { s: '21 Haziran’da Kuzey Yarım Küre’de yaz başlar; yılın en uzun gündüzü yaşanır. Güney’de ise tam tersi, kış başlar.', on: '.t1' },
        { s: '23 Eylül’de ışınlar Ekvator’a dik gelir. Aydınlanma çemberi iki kutuptan geçer ve her yerde gece gündüze eşit olur.', on: '.t2' },
        { s: '21 Aralık’ta Kuzey’de kış başlar, en uzun gece yaşanır. 21 Mart yine ekinokstur, gece ve gündüz eşittir.', on: '.t3,.t4' },
        { s: 'Ekvator’da yıl boyunca gece ve gündüz yaklaşık 12’şer saattir. Kutuplara gidildikçe aradaki fark büyür.', v: 'Ekvator’da yıl boyunca gece ve gündüz yaklaşık on ikişer saattir. Kutuplara gidildikçe aradaki fark büyür.' },
        { s: 'Güzel bir ipucu: 21 Haziran’da gündüzü 12 saatten uzun olan şehir Kuzey’de, kısa olan Güney’dedir; tam 12 saatse Ekvator üzerindedir.',
          v: 'Güzel bir ipucu: 21 Haziran’da gündüzü on iki saatten uzun olan şehir Kuzey’de, kısa olan Güney’dedir; tam on iki saatse Ekvator üzerindedir.' }
      ] },

    { t: 'Eşleştir: tarih ve olay',
      steps: [{ s: 'Tarihleri yerine oturtalım. Her tarihi, Kuzey Yarım Küre için doğru olayla eşleştir.' }],
      ia: { tip: 'eslestir', q: '<p>Her tarihi Kuzey Yarım Küre’deki olayla eşleştir.</p>', solBaslik: 'Tarih', sagBaslik: 'Olay',
        sol: ['21 Haziran', '21 Aralık', '21 Mart', '23 Eylül', '3 Ocak'],
        sag: ['En uzun gündüz', 'En uzun gece', 'İlkbahar başlar', 'Sonbahar başlar', 'Güneş’e en yakın'],
        hint: 'Kuzey Kutbu Güneş’e dönükken yaz başlar. Ekinokslardan hangisinden sonra gündüzler uzamaya devam eder?',
        why: '21 Haziran en uzun gündüz, 21 Aralık en uzun gece. 21 Mart’ta ilkbahar, 23 Eylül’de sonbahar başlar. 3 Ocak’ta Güneş’e en yakınız ama Kuzey’de kış var.' } },
    { t: 'Gündüz uzuyor mu, uzun mu?',
      base: '<table class="an-tbl"><tr><th>Aralık</th><th>Kuzey’de gündüz</th></tr>' +
        '<tr class="rv u1"><td>21 Mart → 21 Haziran</td><td>uzar; gündüz &gt; gece</td></tr>' +
        '<tr class="rv u2"><td>21 Haziran → 23 Eylül</td><td>kısalır ama hâlâ gündüz &gt; gece</td></tr>' +
        '<tr class="rv u3"><td>23 Eylül → 21 Aralık</td><td>kısalır; gece &gt; gündüz</td></tr>' +
        '<tr class="rv u4"><td>21 Aralık → 21 Mart</td><td>uzar ama hâlâ gece &gt; gündüz</td></tr></table>',
      steps: [
        { s: 'Tarih aralıkları en çok hata yapılan yerdir. Burada iki şeyi karıştırmamalısın: gündüzün uzaması ve gündüzün geceden uzun olması.' },
        { s: '21 Mart’tan 21 Haziran’a kadar Kuzey’de gündüzler uzar ve gündüz zaten geceden uzundur.', on: '.u1' },
        { s: '21 Haziran’dan sonra gündüzler kısalmaya başlar. Ama 23 Eylül’e kadar gündüz hâlâ geceden uzundur.', on: '.u2', mk: '.u2 td' },
        { s: '23 Eylül’den 21 Aralık’a gündüz kısalmaya devam eder ve artık gece daha uzundur.', on: '.u3' },
        { s: 'En sinsi aralık bu: 21 Aralık’tan 21 Mart’a gündüzler uzar, ama gece hâlâ gündüzden uzundur.', on: '.u4', mk: '.u4 td' },
        { s: 'Burada çok dikkat et, LGS’de en sık düşülen tuzaklardan biri bu. Güney Yarım Küre için her şeyi tersine çevirmen yeterli.',
          h: '<div class="an-trap">“Gündüz uzuyor” ≠ “gündüz geceden uzun”. Ocak ayında Türkiye’de gündüzler uzar ama geceler hâlâ daha uzundur.</div>' }
      ] },

    { t: 'Doğru mu, yanlış mı: tarih aralıkları',
      steps: [{ s: 'Şimdi en sinsi tuzağı tarayalım. Kuzey Yarım Küre için her ifadeye doğru ya da yanlış de.' }],
      ia: { tip: 'dogruyanlis', q: '<p>Kuzey Yarım Küre için her ifadeye karar ver.</p>',
        ifadeler: [
          { m: '21 Aralık – 21 Mart arasında gündüzler uzar.', d: true, a: 'Evet, 21 Aralık’tan sonra gündüz her gün biraz uzar.' },
          { m: '21 Aralık – 21 Mart arasında gündüz geceden uzundur.', d: false, a: 'Uzuyor ama hâlâ kısa; gece 21 Mart’a kadar uzundur.' },
          { m: '21 Haziran – 23 Eylül arasında gündüzler kısalır ama geceden uzundur.', d: true, a: 'Kısalma başlar, eşitlik 23 Eylül’de gelir.' },
          { m: '23 Eylül – 21 Aralık arasında gündüzler uzar.', d: false, a: 'Bu aralıkta gündüz kısalmaya devam eder.' }],
        hint: 'İki soruyu ayrı sor: gündüz uzuyor mu kısalıyor mu? Gündüz 12 saatten uzun mu kısa mı?',
        why: 'Uzama yönü gündönümlerinde, uzunluk ise ekinokslarda değişir. Bu ikisini karıştırmak LGS’nin en sık tuzağıdır.' } },
    { t: 'Gölge boyu ve dik gelme',
      base: '<svg class="an-svg" viewBox="0 0 340 170" role="img" aria-label="Türkiye’de öğle vakti gölge haziranda kısa, aralıkta uzun">' +
        '<line x1="10" y1="130" x2="330" y2="130" class="ln" stroke-width="2"/>' +
        '<line x1="60" y1="130" x2="60" y2="70" class="st" stroke-width="4"/>' +
        '<line x1="20" y1="20" x2="78" y2="130" class="st2 rv g1"/><line x1="60" y1="130" x2="78" y2="130" stroke="#64748b" stroke-width="7" class="rv g1"/>' +
        '<text x="70" y="152" font-size="12" text-anchor="middle" class="rv g1">21 Haziran: kısa gölge</text>' +
        '<line x1="200" y1="130" x2="200" y2="70" class="st" stroke-width="4"/>' +
        '<line x1="165" y1="50" x2="310" y2="130" class="st2 rv g2"/><line x1="200" y1="130" x2="310" y2="130" stroke="#64748b" stroke-width="7" class="rv g2"/>' +
        '<text x="255" y="152" font-size="12" text-anchor="middle" class="rv g2">21 Aralık: uzun gölge</text>' +
        '<text x="170" y="20" font-size="12" text-anchor="middle" class="mut rv g3">Türkiye, öğle vakti · gölge hep kuzeye</text></svg>',
      steps: [
        { s: 'Gölge boyu da ışığın açısını gösterir. Işık ne kadar dik gelirse gölge o kadar kısa olur.' },
        { s: 'Türkiye’de öğle gölgesi 21 Haziran’da yılın en kısa hâlindedir, çünkü ışınlar bize en dik o gün gelir.', on: '.g1' },
        { s: '21 Aralık’ta ışınlar en eğik gelir, gölge en uzun olur. 21 Mart ve 23 Eylül’de ise gölge boyları eşittir.', on: '.g2,.g3' },
        { s: 'Peki gölge hiç sıfır olur mu? Yalnızca ışınların dik geldiği yerlerde, yani iki dönence arasında.',
          h: '<table class="an-tbl"><tr><th>Konum</th><th>Işın yılda kaç kez dik gelir?</th></tr><tr><td>Ekvator</td><td>2 kez (21 Mart, 23 Eylül)</td></tr><tr><td>Ekvator ile dönenceler arası</td><td>2 kez</td></tr><tr><td>Yengeç ya da Oğlak üstü</td><td>1 kez</td></tr><tr><td>Dönencelerin dışı (Türkiye)</td><td>hiç</td></tr></table>' },
        { s: 'Grafikte gölge sıfıra iniyorsa şehir kesinlikle iki dönence arasındadır. Hiç sıfır olmuyorsa dönencelerin dışındadır.' }
      ] },

    { t: 'Dokun: gölgenin kaybolduğu kuşaklar',
      steps: [{ s: 'Haritada düşünelim. Öğle vakti gölgenin yılda en az bir gün tamamen kaybolabildiği kuşakların hepsine dokun, sonra kontrol et.' }],
      ia: { tip: 'gorselsec', q: '<p>Öğle gölgesinin yılda <b>en az bir gün sıfır</b> olabildiği kuşakların hepsine dokun.</p>',
        svg: '<svg class="an-svg" viewBox="0 0 340 272" role="group" aria-label="Dünya’nın kuzeyden güneye altı kuşağı"><g data-b="z0" aria-label="Kuzey Kutup Dairesi’nin içi"><rect x="10" y="8" width="320" height="38" rx="8" class="box"/><text x="170" y="33" text-anchor="middle" font-size="14">Kuzey Kutup Dairesi’nin içi</text></g><g data-b="z1" aria-label="Kutup Dairesi – Yengeç (Türkiye)"><rect x="10" y="52" width="320" height="38" rx="8" class="box"/><text x="170" y="77" text-anchor="middle" font-size="14">Kutup Dairesi – Yengeç (Türkiye)</text></g><g data-b="z2" aria-label="Yengeç Dönencesi – Ekvator"><rect x="10" y="96" width="320" height="38" rx="8" class="box"/><text x="170" y="121" text-anchor="middle" font-size="14">Yengeç Dönencesi – Ekvator</text></g><g data-b="z3" aria-label="Ekvator – Oğlak Dönencesi"><rect x="10" y="140" width="320" height="38" rx="8" class="box"/><text x="170" y="165" text-anchor="middle" font-size="14">Ekvator – Oğlak Dönencesi</text></g><g data-b="z4" aria-label="Oğlak – Güney Kutup Dairesi"><rect x="10" y="184" width="320" height="38" rx="8" class="box"/><text x="170" y="209" text-anchor="middle" font-size="14">Oğlak – Güney Kutup Dairesi</text></g><g data-b="z5" aria-label="Güney Kutup Dairesi’nin içi"><rect x="10" y="228" width="320" height="38" rx="8" class="box"/><text x="170" y="253" text-anchor="middle" font-size="14">Güney Kutup Dairesi’nin içi</text></g></svg>', dogru: ['z2', 'z3'],
        hint: 'Gölgenin sıfır olması için ışın tam tepeden, yani dik gelmeli. Işınlar hangi iki çizgi arasına dik gelebiliyordu?',
        why: 'Işınlar yalnızca Yengeç ile Oğlak dönenceleri arasına dik gelir; gölge de yalnızca orada sıfır olabilir. Türkiye bu kuşağın kuzeyinde, bu yüzden bizde gölge hiç kaybolmaz.' } },
    { t: 'Ara soru', cp: {
        q: '<p>Bir şekilde Güneş solda çizilmiş, Dünya’nın Kuzey Kutbu ise Güneş’ten <b>uzağa</b> eğik görünüyor. Dünya’nın bu konumda olduğu gün için hangisi <b>doğrudur</b>?</p>',
        c: ['Türkiye’de yaz mevsimi başlar.', 'Güneş ışınları Oğlak Dönencesi’ne dik gelir.', 'Ekvator’da gündüz 12 saatten uzundur.', 'Kuzey Kutup Dairesi’nde 24 saat gündüz yaşanır.'], a: 'B',
        hint: 'Kuzey Kutbu Güneş’ten uzağa dönükse hangi tarihtesin? O gün ışınlar hangi dönenceye dik gelir?',
        why: 'Kuzey Kutbu Güneş’ten uzak → 21 Aralık. Işınlar Oğlak Dönencesi’ne dik gelir; Kuzey’de kış başlar, Kuzey Kutup Dairesi’nde 24 saat gece olur. Ekvator’da gündüz her zaman yaklaşık 12 saattir.',
        whyV: 'Kuzey Kutbu Güneş’ten uzaksa tarih 21 Aralık’tır. Işınlar Oğlak Dönencesi’ne dik gelir; Kuzey’de kış başlar, Kuzey Kutup Dairesi’nde 24 saat gece olur. Ekvator’da ise gündüz her zaman yaklaşık on iki saattir.' },
      steps: [{ s: 'Şimdi konum şeklinden tarih bulmayı deneyelim. Önce Kuzey Kutbu’nun nereye baktığını düşün.' }] },

    { t: 'Veriden yarım küre bulma',
      base: '<svg class="an-svg" viewBox="0 0 340 170" role="img" aria-label="Kuzey Yarım Küre’de sıcaklık temmuzda, Güney’de ocakta en yüksek">' +
        '<line x1="30" y1="140" x2="320" y2="140" class="ln"/><line x1="30" y1="20" x2="30" y2="140" class="ln"/>' +
        '<text x="34" y="158" font-size="11" class="mut">Ocak</text><text x="160" y="158" font-size="11" class="mut">Temmuz</text><text x="290" y="158" font-size="11" class="mut">Aralık</text>' +
        '<text x="22" y="16" font-size="11" class="mut">sıcaklık</text>' +
        '<path d="M40 120 C100 120 130 40 175 40 S260 120 305 120" class="st dr y1"/><text x="180" y="34" font-size="12" class="acc rv y1">Kuzey</text>' +
        '<path d="M40 45 C100 45 130 125 175 125 S260 45 305 45" class="st2 dr y2"/><text x="250" y="40" font-size="12" class="rv y2">Güney</text></svg>',
      steps: [
        { s: 'Çıkmış soruların en sevdiği kalıplardan biri bu: sana bir sıcaklık tablosu verilir, şehrin hangi yarım kürede olduğu sorulur.' },
        { s: 'Ocak soğuk, temmuz sıcaksa, yani sıcaklık ocaktan hazirana artıyorsa, şehir Kuzey Yarım Küre’dedir.', on: '.y1' },
        { s: 'Ocak sıcak, temmuz soğuksa şehir Güney Yarım Küre’dedir. Aynı tarihte iki yarım kürede zıt mevsimler yaşanır.', on: '.y2' },
        { s: 'Yani yarım küreyi gösteren, sıcaklığın kendisi değil, yıl içinde hangi yöne değiştiği.' },
        { s: 'Burada çok dikkat et: tek bir sıcaklık değeri mevsimi söylemez. Ekvator’a yakın bir yer kışın bile sıcak olabilir.',
          h: '<div class="an-trap"><span class="an-bad-t">“Şehir 30 °C, demek ki yaz yaşanıyor.”</span><br>Mevsim için <b>tarih + yarım küre</b> gerekir. Sıcaklık Ekvator’a uzaklığa ve yükseltiye de bağlıdır.</div>',
          v: 'Burada çok dikkat et: tek bir sıcaklık değeri mevsimi söylemez. Ekvator’a yakın bir yer kışın bile sıcak olabilir.' },
        { s: 'Sorularda geçen “eş yükseltide” ifadesi de boşuna değil; yükseltinin sıcaklığa etkisini ortadan kaldırmak için yazılır.' }
      ] },

    { t: 'Ele: Kuzey Yarım Küre kesin değil',
      steps: [{ s: 'Dört şehrin eş yükseltideki ortalama sıcaklıkları verildi. Kuzey Yarım Küre’de olduğu kesin söylenemeyenleri ele.' }],
      ia: { tip: 'eleme', q: '<p>Eş yükseltideki şehirler. <b>Kuzey Yarım Küre’de olduğu kesin söylenemeyenleri</b> ele.</p>',
        ogeler: ['Ocak 3 °C · Temmuz 25 °C', 'Ocak 28 °C · Temmuz 15 °C', 'Yalnızca temmuz: 30 °C', 'Ocak −6 °C · Temmuz 19 °C', 'Ocak 21 °C · Temmuz 11 °C'],
        ele: [1, 2, 4],
        hint: 'Tek bir değere değil, ocaktan temmuza sıcaklığın arttığına mı azaldığına mı bak.',
        why: 'Ocaktan temmuza ısınan şehirler Kuzey’dedir. Temmuzu soğuk olanlar Güney’de; tek bir sıcaklık değeri ise yarım küre söylemez.' } },
    { t: 'Ara soru', cp: {
        q: '<p>Eş yükseltideki X şehrinde ocak ayı ortalama sıcaklığı <b>27 °C</b>, temmuz ayı ortalama sıcaklığı <b>14 °C</b>’tur. Buna göre hangisi <b>kesinlikle doğrudur</b>?</p>',
        c: ['X şehri Güney Yarım Küre’dedir.', 'X şehri Ekvator üzerindedir.', 'X şehrinde temmuz ayında yaz yaşanır.', 'X şehrine ışınlar hiç dik gelmez.'], a: 'A',
        hint: 'Ocaktan temmuza sıcaklık artıyor mu, azalıyor mu? Bu değişim yönü yarım küreyi söyler.',
        why: 'Ocak sıcak, temmuz soğuk → X, Güney Yarım Küre’dedir; temmuzda orada kış vardır. Ekvator’da bu kadar büyük mevsim farkı olmaz. Işınların dik gelip gelmediği ise bu bilgiyle kesin söylenemez.',
        whyV: 'Ocak sıcak, temmuz soğuk; demek ki X şehri Güney Yarım Küre’de. Temmuzda orada kış yaşanır. Ekvator’da bu kadar büyük bir mevsim farkı olmaz. Işınların dik gelip gelmediği ise bu bilgiyle kesin söylenemez.' },
      steps: [{ s: 'Tablodan yarım küre bulma sırası sende. Değişimin yönüne odaklan.' }] },

    { t: 'Hava olayı mı, iklim mi?',
      base: '<table class="an-tbl"><tr><th></th><th>Hava olayı</th><th>İklim</th></tr>' +
        '<tr class="rv h1"><td>Süre</td><td>kısa (saat, gün, hafta)</td><td>uzun yılların ortalaması</td></tr>' +
        '<tr class="rv h1"><td>Alan</td><td>dar</td><td>geniş</td></tr>' +
        '<tr class="rv h2"><td>Bilim dalı</td><td>meteoroloji</td><td>klimatoloji (iklim bilimi)</td></tr>' +
        '<tr class="rv h2"><td>Uzman</td><td>meteorolog</td><td>klimatolog</td></tr>' +
        '<tr class="rv h3"><td>İpucu sözcük</td><td>bugün, yarın, bu hafta, bekleniyor</td><td>genellikle, her yıl, yazları, ortalama</td></tr></table>',
      steps: [
        { s: 'Ünitenin son durağı: hava olayı ile iklim farkı. Bu ayrım her yıl bir şekilde karşına çıkabilir.' },
        { s: 'Hava olayı kısa sürelidir ve dar bir alanda görülür. Bugün güneşli olan yerde yarın sağanak olabilir. İklim ise geniş bir bölgede uzun yılların ortalamasıdır.', on: '.h1' },
        { s: 'Hava olaylarını meteoroloji inceler, uzmanı meteorologdur. İklimi ise klimatoloji inceler, uzmanı klimatologdur.', on: '.h2' },
        { s: 'Cümledeki ipucu sözcüklere bak: “yarın, bu hafta, bekleniyor” hava olayı; “her yıl, genellikle, yazları” iklimdir.', on: '.h3' },
        { s: 'İki tuzak var. Tek bir sel ya da tek bir sıcak gün iklimin değiştiğini göstermez. Yarınki hava tahminini de klimatolog değil, meteorolog yapar.',
          h: '<div class="an-trap">Tek günlük olay = hava olayı, iklim değişikliği değil.<br>Kısa süreli tahmin = <b>meteorolog</b>; uzun yıllık ortalama = <b>klimatolog</b>.</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdaki ifadelerden hangisi <b>iklim</b> ile ilgilidir?</p>',
        c: ['Yarın İzmir’de öğleden sonra sağanak bekleniyor.', 'Bu hafta sıcaklıklar mevsim normallerinin üzerinde seyredecek.', 'Karadeniz kıyılarında her mevsim yağış görülür.', 'Dün akşam Erzurum’a kar yağdı.'], a: 'C',
        hint: 'İklim, uzun yıllar boyunca tekrar eden genel durumdur. Hangi cümle tek bir günü ya da haftayı değil, her yılı anlatıyor?',
        why: '“Her mevsim yağış görülür” bölgenin her yıl tekrar eden genel özelliğidir, yani iklimdir. Diğerleri yarın, bu hafta ve dün gibi kısa süreleri anlatır; hava olayıdır.',
        whyV: 'Karadeniz kıyılarında her mevsim yağış görülmesi, bölgenin her yıl tekrar eden genel özelliği; yani iklim. Diğer cümleler yarın, bu hafta ve dün gibi kısa süreleri anlatıyor; onlar hava olayı.' },
      steps: [{ s: 'Son ara soru! İpucu sözcükleri hatırla ve şıkkını işaretle.' }] }
  ]
};
