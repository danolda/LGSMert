/* Adım Adım Anlatım · Din Kültürü · Kur’an-ı Kerim ve Özellikleri (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['din-kuran'] = {
  title: 'Kur’an-ı Kerim ve Özellikleri',
  desc: 'İslam’ın temel kaynakları, Kur’an’ın indirilişi ve kitaplaşması, temel kavramlar, Kur’an’ın isimleri (Furkan, Hüdâ, Nûr, Şifâ, Zikir), ana konuları ve Hz. Nuh kıssası.',
  ozet: [
    'İslam’ın iki temel kaynağı: Kur’an-ı Kerim ve onu açıklayan, uygulayan sünnet. Akıl tek başına ahiret gibi konulara ulaşamaz; bu yüzden vahiy gerekir.',
    'İlk vahiy 610’da Ramazan ayında, Kadir Gecesi, Hira Mağarası’nda “Oku!” emriyle geldi. Kur’an 23 yılda parça parça indi; Hz. Ebubekir döneminde Mushaf hâline getirildi, Hz. Osman döneminde çoğaltıldı.',
    '114 sure, 6236 ayet, 30 cüz. İlk sure Fâtiha, son sure Nâs; en uzun Bakara (286 ayet), en kısa Kevser (3 ayet).',
    'Mekki sureler hicretten önce iner, daha çok inanç (tevhid, ahiret) konularını işler; Medeni sureler hicretten sonra iner, ibadet ve toplumsal düzeni işler.',
    'Meal: yaklaşık anlamıyla çeviri. Tefsir: ayetlerin geniş açıklaması. Hatim: baştan sona okumak. Mukabele: biri okurken diğerlerinin takip etmesi. Hafız: tamamını ezberleyen.',
    'Kur’an’ın isimleri: Furkan (hak ile batılı ayıran), Hüdâ (doğru yolu gösteren), Nûr (aydınlatan), Şifâ (gönüllere şifa), Zikir (hatırlatan, öğüt veren; Hicr 9).',
    'Ana konular: inanç, ibadet, ahlak, muamelat (toplumsal ve hukuki ilişkiler) ve kıssalar.',
    'Hz. Nuh kavmini yaklaşık 950 yıl tevhide çağırdı. İnanmayan oğlu gemiye binmedi, boğuldu; Allah onun Nuh’un ailesinden sayılmadığını bildirdi → soy değil, iman ve salih amel önemlidir.'
  ],
  scenes: [
    { t: 'İslam’ın iki temel kaynağı',
      steps: [
        { s: 'Merhaba! Bu derste Kur’an-ı Kerim’i yakından tanıyacağız. Önce temelden başlayalım: İslam’ı doğru öğrenmek için iki temel kaynak var.',
          h: '<div class="an-grid" style="grid-template-columns:1fr 1fr"><div><b>1. Kur’an-ı Kerim</b>Allah’ın son ilahi kitabı</div><div><b>2. Sünnet</b>Kur’an’ı açıklayan ve uygulayan Hz. Muhammed’in örnekliği</div></div>' },
        { s: 'Birincisi Kur’an-ı Kerim, ikincisi onu açıklayan ve yaşayarak gösteren Peygamberimizin sünneti.' },
        { s: 'Örneğin Kur’an namaz kılmayı emreder, ama namazın nasıl kılınacağını Peygamberimizin uygulamasından öğreniriz.' },
        { s: 'Çıkmış sorularda bir nokta daha soruldu: akıl çok değerlidir ama ahiret gibi konulara tek başına ulaşamaz. İşte bu yüzden vahye ihtiyaç vardır.',
          h: '<div class="an-tip">Akıl + vahiy birlikte: akıl düşünür ve anlar; ahiret, melekler gibi konuları ise vahiy bildirir.</div>' }
      ] },

    { t: 'Kur’an nasıl indi, nasıl kitap oldu?',
      base: '<svg class="an-svg" viewBox="0 0 340 150" role="img" aria-label="Kur’an’ın indirilişi ve kitaplaştırılması zaman şeridi">' +
      '<path class="st dr q1" d="M110 12 L110 142"/>' +
      '<circle cx="110" cy="22" r="6" class="boxa rv q1"/>' +
      '<text x="98" y="27" font-size="13" text-anchor="end" font-weight="700" class="acc rv q1">610</text>' +
      '<text x="124" y="21" font-size="13" class="rv q1">İlk vahiy: Hira Mağarası</text>' +
      '<text x="124" y="36" font-size="11" class="mut rv q1">Ramazan, Kadir Gecesi · “Oku!”</text>' +
      '<circle cx="110" cy="56" r="6" class="box rv q2"/>' +
      '<text x="98" y="61" font-size="13" text-anchor="end" font-weight="700" class="mut rv q2">610–632</text>' +
      '<text x="124" y="55" font-size="13" class="rv q2">23 yıl boyunca parça parça</text>' +
      '<text x="124" y="70" font-size="11" class="mut rv q2">vahiy meleği Cebrail aracılığıyla</text>' +
      '<circle cx="110" cy="90" r="6" class="box rv q3"/>' +
      '<text x="98" y="95" font-size="13" text-anchor="end" font-weight="700" class="mut rv q3">Hz. Ebubekir</text>' +
      '<text x="124" y="89" font-size="13" class="rv q3">Mushaf: iki kapak arasında kitap</text>' +
      '<text x="124" y="104" font-size="11" class="mut rv q3">Zeyd bin Sâbit başkanlığında</text>' +
      '<circle cx="110" cy="124" r="6" class="box rv q4"/>' +
      '<text x="98" y="129" font-size="13" text-anchor="end" font-weight="700" class="mut rv q4">Hz. Osman</text>' +
      '<text x="124" y="123" font-size="13" class="rv q4">Mushaf çoğaltıldı</text>' +
      '<text x="124" y="138" font-size="11" class="mut rv q4">İslam merkezlerine gönderildi</text>' +
      '</svg>',
      steps: [
        { s: 'İlk vahiy 610 yılında, Ramazan ayında, Kadir Gecesi’nde Hira Mağarası’nda geldi. İlk emir “Oku!” idi.', v: 'İlk vahiy altı yüz on yılında, Ramazan ayında, Kadir Gecesi’nde Hira Mağarası’nda geldi. İlk emir oku idi.', on: '.q1' },
        { s: 'Kur’an tek seferde değil, yaklaşık 23 yılda, olaylara göre parça parça indirildi. Vahiy meleği Cebrail’di.', v: 'Kur’an tek seferde değil, yaklaşık yirmi üç yılda, olaylara göre parça parça indirildi. Vahiy meleği Cebrail’di.', on: '.q2' },
        { s: 'İnen ayetler hem vahiy kâtiplerince yazıldı hem de hafız sahabilerce ezberlendi. Yani çifte koruma vardı.' },
        { s: 'Hazreti Ebubekir döneminde Zeyd bin Sâbit başkanlığındaki bir heyet Kur’an’ı iki kapak arasında topladı; buna Mushaf denir.', on: '.q3' },
        { s: 'Hazreti Osman döneminde de Mushaf çoğaltılıp önemli İslam merkezlerine gönderildi.', on: '.q4',
          h: '<div class="an-rule">“Şüphesiz o Zikr’i (Kur’an’ı) biz indirdik, onun koruyucusu da elbette biziz.” <small>Hicr, 9</small></div>' }
      ] },

    { t: 'Temel kavramlar',
      base: '<div class="an-grid"><div class="rv t1"><b>Ayet</b>surelerin her bir cümlesi · 6236</div><div class="rv t1"><b>Sure</b>ayetlerden oluşan bölüm · 114</div><div class="rv t1"><b>Cüz</b>yaklaşık 20 sayfalık bölüm · 30</div></div>',
      steps: [
        { s: 'Kur’an’ı oluşturan her bir cümleye ayet, ayetlerden oluşan bölümlere sure denir. Kur’an’da 114 sure vardır.', v: 'Kur’an’ı oluşturan her bir cümleye ayet, ayetlerden oluşan bölümlere sure denir. Kur’an’da yüz on dört sure vardır.', on: '.t1' },
        { s: 'Kur’an yaklaşık yirmişer sayfalık otuz cüze ayrılır.' },
        { s: 'Birkaç “en”i de bil: ilk sure Fâtiha, son sure Nâs; en uzun sure Bakara, en kısa sure Kevser.', v: 'Birkaç en sözcüğünü de bil: ilk sure Fâtiha, son sure Nâs; en uzun sure Bakara, en kısa sure Kevser.',
          h: '<table class="an-tbl"><tr><td>İlk sure</td><td><b>Fâtiha</b></td></tr><tr><td>Son sure</td><td><b>Nâs</b></td></tr><tr><td>En uzun sure</td><td><b>Bakara</b> (286 ayet)</td></tr><tr><td>En kısa sure</td><td><b>Kevser</b> (3 ayet)</td></tr></table>' }
      ] },

    { t: 'Mekki ve Medeni sureler',
      steps: [
        { s: 'Sureler indikleri döneme göre ikiye ayrılır. Ayrım çizgisi hicrettir.',
          h: '<div class="an-grid" style="grid-template-columns:1fr 1fr"><div><b>Mekki</b>hicretten önce · inanç: tevhid, ahiret, peygamberlik</div><div><b>Medeni</b>hicretten sonra · ibadet, toplumsal düzen, hukuk (muamelat)</div></div>' },
        { s: 'Hicretten önce, Mekke’de inen surelere Mekki denir. Bunlar daha çok inançla ilgilidir: Allah’ın birliği ve ahiret.' },
        { s: 'Hicretten sonra, Medine’de inenlere Medeni denir. Toplum kurulmaya başladığı için ibadetleri, toplumsal düzeni ve hukuku anlatır.' },
        { s: 'Mantığı şöyle düşün: önce inanç sağlamlaştırıldı, sonra toplum düzenlendi.' }
      ] },

    { t: 'Meal, tefsir, hatim, mukabele',
      base: '<table class="an-tbl"><tr><th>Kavram</th><th>Anlamı</th></tr>' +
        '<tr class="rv w1"><td><b>Meal</b></td><td>Kur’an’ın başka bir dile yaklaşık anlamıyla çevirisi</td></tr>' +
        '<tr class="rv w2"><td><b>Tefsir</b></td><td>ayetlerin iniş sebepleriyle geniş açıklaması</td></tr>' +
        '<tr class="rv w3"><td><b>Hatim</b></td><td>Kur’an’ı baştan sona okumak</td></tr>' +
        '<tr class="rv w3"><td><b>Hafız</b></td><td>Kur’an’ın tamamını ezberleyen</td></tr>' +
        '<tr class="rv w4"><td><b>Mukabele</b></td><td>Ramazan’da biri okurken diğerlerinin takip etmesi</td></tr></table>',
      steps: [
        { s: 'Meal, Kur’an’ın başka bir dile yaklaşık anlamıyla çevrilmesidir. “Yaklaşık” diyoruz, çünkü hiçbir çeviri aslının yerini tutamaz.', v: 'Meal, Kur’an’ın başka bir dile yaklaşık anlamıyla çevrilmesidir. Yaklaşık diyoruz, çünkü hiçbir çeviri aslının yerini tutamaz.', on: '.w1' },
        { s: 'Tefsir ise ayetlerin, iniş sebepleriyle birlikte geniş biçimde açıklanmasıdır.', on: '.w2' },
        { s: 'Kur’an’ı baştan sona okumaya hatim, tamamını ezberleyene hafız denir.', on: '.w3' },
        { s: 'Ramazan’da camilerde biri okurken diğerlerinin takip etmesine de mukabele denir.', on: '.w4' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Hicretten önce inen sureler daha çok Allah’ın birliği, ahiret ve peygamberlik konularını işler. Hicretten sonra inen sureler ise ibadetler, aile, ticaret ve toplumsal düzenle ilgili hükümleri içerir.</p><p>Bu bilgilere göre aşağıdakilerden hangisine <b>ulaşılabilir</b>?</p>',
        c: ['Kur’an’ın konuları, inişindeki dönemin ihtiyaçlarıyla ilişkilidir.', 'Kur’an tek seferde indirilmiştir.', 'Medeni surelerde inanç konusu hiç geçmez.', 'Mekki sureler daha uzundur.'], a: 'A',
        hint: 'Metin iki dönemin konularını karşılaştırıyor. Bu karşılaştırma neyi gösteriyor?',
        why: 'Mekke’de inancın, Medine’de toplumsal düzenin işlenmesi, ayetlerin dönemin ihtiyaçlarına göre indiğini gösterir. “Hiç geçmez” gibi kesin genellemeler ve uzunluk bilgisi metinde yoktur.',
        whyV: 'Mekke’de inancın, Medine’de toplumsal düzenin işlenmesi, ayetlerin dönemin ihtiyaçlarına göre indiğini gösterir. Hiç geçmez gibi kesin genellemeler ve uzunluk bilgisi metinde yoktur.' },
      steps: [{ s: 'Sıra sende. Kesin genellemelere dikkat et.' }] },

    { t: 'Kur’an’ın güzel isimleri',
      base: '<table class="an-tbl"><tr><th>İsim</th><th>Anlamı</th><th>Ayet</th></tr>' +
        '<tr class="rv s1"><td><b>Furkan</b></td><td>hak ile batılı, doğru ile yanlışı ayıran</td><td>Furkan, 1</td></tr>' +
        '<tr class="rv s2"><td><b>Hüdâ</b></td><td>doğru yolu gösteren, rehber</td><td>İsrâ, 9</td></tr>' +
        '<tr class="rv s3"><td><b>Nûr</b></td><td>yolu, aklı ve gönlü aydınlatan ışık</td><td>Mâide, 15</td></tr>' +
        '<tr class="rv s4"><td><b>Şifâ</b></td><td>gönüllerin manevi hastalıklarına şifa</td><td>İsrâ, 82</td></tr>' +
        '<tr class="rv s5"><td><b>Zikir</b></td><td>hatırlatan, öğüt veren</td><td>Hicr, 9</td></tr></table>',
      steps: [
        { s: 'Kur’an’ın görevini anlatan güzel isimleri vardır. Sorularda bir ayet verilip hangi ismiyle ilgili olduğu sorulabilir.' },
        { s: 'Furkan: hak ile batılı, doğruyu yanlıştan ayıran.', on: '.s1' },
        { s: 'Hüdâ: doğru yolu gösteren rehber. İsrâ suresinde “Bu Kur’an en doğru yola iletir” denir.', v: 'Hüdâ: doğru yolu gösteren rehber. İsrâ suresinde, bu Kur’an en doğru yola iletir, denir.', on: '.s2' },
        { s: 'Nûr: yolumuzu, aklımızı ve gönlümüzü aydınlatan ışık.', on: '.s3' },
        { s: 'Şifâ: kalpleri şüphe, kibir ve ümitsizlik gibi manevi hastalıklardan arındıran. Zikir ise hatırlatan, öğüt veren demek.', on: '.s4,.s5' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>“Biz Kur’an’dan, müminler için şifa ve rahmet olacak şeyler indiriyoruz…” (İsrâ suresi, 82. ayet)</p><p>Bu ayette Kur’an’ın hangi özelliği <b>vurgulanmaktadır</b>?</p>',
        c: ['Hak ile batılı birbirinden ayırması', 'Gönüllerdeki manevi hastalıklara iyi gelmesi', 'Geçmiş kavimlerin kıssalarını anlatması', 'Parça parça indirilmesi'], a: 'B',
        hint: 'Ayetteki anahtar kelime hangisi: şifa mı, furkan mı?',
        why: 'Ayet Kur’an’ın müminler için şifa ve rahmet olduğunu söyler: Kur’an’ın Şifâ ismi, yani gönüllerdeki manevi hastalıklara iyi gelmesi vurgulanır.' },
      steps: [{ s: 'Bir ayet, bir isim. Anahtar kelimeyi bul.' }] },

    { t: 'Kur’an’ın ana konuları',
      base: '<div class="an-grid"><div class="rv c1"><b>İnanç</b>Allah’ın birliği, melekler, kitaplar, peygamberler, ahiret</div><div class="rv c2"><b>İbadet</b>namaz, oruç, zekât, hac, dua</div><div class="rv c3"><b>Ahlak</b>doğruluk, adalet, sabır; yalan, gıybet, israf yasağı</div><div class="rv c4"><b>Muamelat</b>ticaret, borç, aile, miras, suç ve ceza</div><div class="rv c5"><b>Kıssalar</b>peygamberlerin ve geçmiş kavimlerin ibretlik hayatları</div></div>',
      steps: [
        { s: 'Kur’an’ın beş ana konusu var. Birincisi inanç: Allah’ın birliği, melekler, kitaplar, peygamberler ve ahiret.', on: '.c1' },
        { s: 'İkincisi ibadet: namaz, oruç, zekât, hac ve dua.', on: '.c2' },
        { s: 'Üçüncüsü ahlak: doğruluk, adalet, sabır; yalan, gıybet ve israf gibi kötü huylardan uzak durmak.', on: '.c3' },
        { s: 'Dördüncüsü muamelat: insanlar arası toplumsal ve hukuki ilişkiler. Ticaret, borç yazmak, aile, miras gibi.', on: '.c4' },
        { s: 'Beşincisi kıssalar: peygamberlerin ve geçmiş kavimlerin ibretlik hikâyeleri.', on: '.c5',
          h: '<div class="an-trap">“Borç verdiğinizde onu yazın”, mirasın paylaşımı, evlilik hükümleri → insanlar arası hukuki düzen: <b>muamelat</b> · doğruluk, sabır, merhamet → kişisel erdem: <b>ahlak</b></div>' }
      ] },

    { t: 'Bir peygamber tanıyorum: Hz. Nuh',
      steps: [
        { s: 'Bu ünitenin peygamberi Hazreti Nuh. Putlara tapan kavmini yaklaşık dokuz yüz elli yıl boyunca bıkmadan tek Allah inancına çağırdı.' },
        { s: 'Sabır ve kararlılık sahibi büyük peygamberlerden, yani ulü’l-azm peygamberlerden biridir.', v: 'Sabır ve kararlılık sahibi büyük peygamberlerden, yani ülül azm peygamberlerden biridir.' },
        { s: 'Kavminin ileri gelenleri ona inanan yoksulları küçümsedi, onunla alay etti. Allah’ın emriyle Hazreti Nuh büyük bir gemi yaptı.' },
        { s: 'Tufan başlayınca inananlar ve her canlı türünden birer çift gemiye binip kurtuldu.' },
        { s: 'Ama oğlu inanmadı. “Beni sudan koruyacak bir dağa sığınacağım” dedi ve boğulanlardan oldu.', v: 'Ama oğlu inanmadı. Beni sudan koruyacak bir dağa sığınacağım, dedi ve boğulanlardan oldu.' },
        { s: 'Allah, inanmayan oğlunun Nuh’un ailesinden sayılmadığını bildirdi. Ders çok açık: önemli olan soy bağı değil, iman ve salih ameldir.',
          h: '<div class="an-rule">Hûd, 46 → soy bağı değil, <b>iman ve salih amel</b> belirleyicidir.</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Tufan sırasında Hz. Nuh, oğlunu gemiye çağırmış; oğlu ise “Beni sudan koruyacak bir dağa sığınacağım.” diyerek gemiye binmemiş ve boğulmuştur. Allah, Hz. Nuh’a inanmayan oğlunun onun ailesinden sayılmadığını bildirmiştir.</p><p>Bu kıssadan aşağıdakilerden hangisi <b>çıkarılabilir</b>?</p>',
        c: ['Kurtuluşta soy bağı değil, iman ve salih amel belirleyicidir.', 'Peygamberlerin çocukları da mutlaka peygamber olur.', 'Tufandan yalnızca Hz. Nuh kurtulmuştur.', 'Hz. Nuh kavmini yalnızca kısa bir süre tebliğ etmiştir.'], a: 'A',
        hint: 'Allah oğlunu neden Hz. Nuh’un ailesinden saymadı?',
        hintV: 'Allah oğlunu neden Hazreti Nuh’un ailesinden saymadı?',
        why: 'Oğlu peygamber çocuğu olmasına rağmen inanmadığı için kurtulamadı. Bu, soy bağının değil iman ve salih amelin önemli olduğunu gösterir. İnananlar da gemide kurtulmuştur; tebliğ yaklaşık 950 yıl sürmüştür.',
        whyV: 'Oğlu peygamber çocuğu olmasına rağmen inanmadığı için kurtulamadı. Bu, soy bağının değil iman ve salih amelin önemli olduğunu gösterir. İnananlar da gemide kurtulmuştur; tebliğ yaklaşık dokuz yüz elli yıl sürmüştür.' },
      steps: [{ s: 'Son soru! Kıssanın asıl mesajını bul.' }] }
  ]
};
