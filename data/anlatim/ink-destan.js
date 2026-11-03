/* Adım Adım Anlatım · İnkılap Tarihi · Millî Bir Destan: Ya İstiklal Ya Ölüm! (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['ink-destan'] = {
  title: 'Millî Bir Destan: Ya İstiklal Ya Ölüm!',
  desc: 'Doğu, Güney ve Batı cepheleri; İnönü’den Sakarya’ya ve Büyük Taarruz’a, Mudanya’dan Lozan’a. Hangi gelişme hangi zaferden sonra geldi? Kronoloji tuzaklarıyla adım adım.',
  ozet: [
    'Doğu Cephesi’nde Kâzım Karabekir Ermenileri yendi: Gümrü (3 Aralık 1920) TBMM’nin ilk uluslararası antlaşması ve ilk siyasi başarısıdır. Doğu sınırı sırası: Gümrü → Moskova → Kars.',
    'Güney Cephesi’nde düzenli ordu savaşmadı; Maraş, Antep, Urfa’yı halk (Kuvâ-yı Milliye) kurtardı: Kahraman, Gazi, Şanlı unvanları. Ankara Antlaşması (20 Ekim 1921) ile Güney Cephesi kapandı.',
    'I. İnönü’den sonra: Teşkilat-ı Esasiye, Londra Konferansı, Afganistan antlaşması, İstiklal Marşı, Moskova Antlaşması. Moskova’da Batum verildi (Misak-ı Millî’den ilk taviz).',
    'Kütahya-Eskişehir tek yenilgidir; ordu Sakarya’nın doğusuna çekildi. Ardından Maarif Kongresi, Başkomutanlık Kanunu (5 Ağustos 1921) ve Tekâlif-i Millîye emirleri geldi.',
    'Sakarya’da “Hattı müdafaa yoktur, sathı müdafaa vardır.” denildi. Sonrasında Gazi unvanı ve mareşallik, Kars ve Ankara antlaşmaları, İtalyanların çekilmesi geldi.',
    'Büyük Taarruz (26–30 Ağustos 1922) silahlı mücadeleyi bitirdi; “Ordular! İlk hedefiniz Akdeniz’dir.” 9 Eylül 1922’de İzmir kurtuldu.',
    'Mudanya (11 Ekim 1922): Doğu Trakya, İstanbul ve Boğazlar savaşmadan alındı. Saltanatın kaldırılması Mudanya’nın değil, Lozan’a iki davetin sonucudur.',
    'Lozan (24 Temmuz 1923): kapitülasyonlar kaldırıldı; Boğazlar uluslararası komisyona bırakıldı (1936 Montrö ile çözüldü); Musul sonraya kaldı, Hatay dışarıda kaldı.'
  ],
  scenes: [
    { t: 'Üç cephe, üç ayrı düşman',
      base: '<svg class="an-svg" viewBox="0 0 330 200" role="img" aria-label="Kurtuluş Savaşı cepheleri temsilî harita">' +
      '<polygon points="16,12 39,20 56,30 76,31 96,29 116,15 139,11 157,10 170,18 179,29 199,34 218,36 235,36 248,34 263,24 282,21 296,34 300,51 318,68 311,86 310,111 311,126 293,129 278,134 258,134 238,139 215,141 199,144 184,141 179,156 172,164 169,154 175,144 165,146 149,141 137,154 119,160 106,149 89,140 81,151 66,156 57,146 43,142 29,136 26,114 16,104 21,89 18,76 9,71 9,59 18,51 6,45 9,31" fill="none" class="ln" stroke-width="1.6"/>' +
      '<ellipse cx="43" cy="42" rx="20" ry="6" fill="none" class="ln" stroke-width="1.2"/>' +
      '<ellipse cx="59" cy="81" rx="44" ry="34" class="boxa rv w1" fill-opacity=".5"/>' +
      '<ellipse cx="282" cy="56" rx="30" ry="18" class="boxa rv e1" fill-opacity=".5"/>' +
      '<ellipse cx="194" cy="131" rx="40" ry="15" class="boxa rv s1" fill-opacity=".5"/>' +
      '<circle cx="25" cy="101" r="3" class="boxa rv w1"/>' +
      '<text x="29" y="113" font-size="10" text-anchor="start" font-weight="700" class="rv w1">İzmir</text>' +
      '<circle cx="104" cy="72" r="3" class="boxa rv w1"/>' +
      '<text x="108" y="67" font-size="10" text-anchor="start" font-weight="700" class="rv w1">Sakarya</text>' +
      '<circle cx="290" cy="46" r="3" class="boxa rv e1"/>' +
      '<text x="286" y="40" font-size="10" text-anchor="end" font-weight="700" class="rv e1">Kars</text>' +
      '<circle cx="187" cy="122" r="3" class="boxa rv s1"/>' +
      '<text x="187" y="116" font-size="10" text-anchor="middle" font-weight="700" class="rv s1">Maraş</text>' +
      '<circle cx="195" cy="134" r="3" class="boxa rv s1"/>' +
      '<text x="192" y="146" font-size="10" text-anchor="end" font-weight="700" class="rv s1">Antep</text>' +
      '<circle cx="218" cy="132" r="3" class="boxa rv s1"/>' +
      '<text x="221" y="144" font-size="10" text-anchor="start" font-weight="700" class="rv s1">Urfa</text>' +
      '<text x="59" y="41" font-size="13" text-anchor="middle" font-weight="700" class="acc rv w1">BATI</text>' +
      '<text x="59" y="129" font-size="10" text-anchor="middle" class="mut rv w1">Yunanistan · düzenli ordu</text>' +
      '<text x="282" y="32" font-size="13" text-anchor="middle" font-weight="700" class="acc rv e1">DOĞU</text>' +
      '<text x="276" y="86" font-size="10" text-anchor="middle" class="mut rv e1">Ermeniler · düzenli ordu</text>' +
      '<text x="194" y="167" font-size="13" text-anchor="middle" font-weight="700" class="acc rv s1">GÜNEY</text>' +
      '<text x="194" y="180" font-size="10" text-anchor="middle" class="mut rv s1">Fransa · Kuvâ-yı Milliye</text>' +
      '<text x="165" y="14" font-size="10" text-anchor="middle" class="mut">temsilî harita</text></svg>',
      steps: [
        { s: 'Merhaba! Bu derste destanın kendisini anlatacağız. Önce haritaya bakalım: Kurtuluş Savaşı üç cephede verildi.' },
        { s: 'Doğu’da Ermenilere karşı savaştık. Burada Kâzım Karabekir komutasında düzenli birlikler vardı.', on: '.e1' },
        { s: 'Güney’de önce İngilizler, sonra Fransızlar ve onlarla iş birliği yapan Ermeni birlikleri vardı. Burayı halk, yani Kuvâ-yı Milliye kurtardı.', v: 'Güney’de önce İngilizler, sonra Fransızlar ve onlarla iş birliği yapan Ermeni birlikleri vardı. Burayı halk, yani Kuvâyı Milliye kurtardı.', on: '.s1' },
        { s: 'Batı’da ise Yunanlılara karşı savaştık. Asıl büyük savaşlar burada, düzenli orduyla verildi.', on: '.w1' },
        { s: 'Sınavda birlik türü sık karşılaştırılır. Şunu aklında tut: Güney Cephesi’nde düzenli ordu savaşmadı.',
          h: '<div class="an-trap">Güney Cephesi → <b>Kuvâ-yı Milliye</b> (bölge halkı) · Doğu ve Batı → <b>düzenli ordu</b></div>' }
      ] },

    { t: 'Doğu Cephesi ve Gümrü',
      steps: [
        { s: 'Kâzım Karabekir, Mondros’tan sonra kolordusunu dağıtmamıştı. TBMM’nin emriyle harekete geçti ve Ermenileri yendi.', v: 'Kâzım Karabekir, Mondros’tan sonra kolordusunu dağıtmamıştı. Meclisin emriyle harekete geçti ve Ermenileri yendi.' },
        { s: '3 Aralık 1920’de Gümrü Antlaşması imzalandı. Bu, TBMM’nin imzaladığı ilk uluslararası antlaşma ve ilk siyasi başarısıdır.', v: 'Üç Aralık bin dokuz yüz yirmide Gümrü Antlaşması imzalandı. Bu, Büyük Millet Meclisinin imzaladığı ilk uluslararası antlaşma ve ilk siyasi başarısıdır.',
          h: '<div class="an-ex"><span class="an-l">TBMM’nin ilk uluslararası antlaşması ve ilk siyasi başarısı</span><span class="an-l">Ermenistan, Sevr’den doğan haklarından vazgeçti</span><span class="an-l">Doğu Cephesi kapandı → birlikler Batı’ya kaydırılabildi</span></div>' },
        { s: 'Ermenistan, Sevr’den doğan haklarından vazgeçti. Doğu Cephesi kapanınca birliklerin bir kısmı Batı’ya kaydırılabildi.' },
        { s: 'Doğu sınırımız üç adımda çizildi. Sırasını bil: Gümrü, Moskova, Kars.', v: 'Doğu sınırımız üç adımda çizildi. Sırasını bil: Gümrü, Moskova, Kars.',
          h: '<div class="an-rule"><b>G – M – K:</b> Gümrü (1920, Ermenistan) → Moskova (1921, Sovyet Rusya) → Kars (1921, Kafkas cumhuriyetleri: doğu sınırı kesinleşti)</div>' }
      ] },

    { t: 'Güney Cephesi: halkın direnişi',
      base: '<table class="an-tbl"><tr><th>Şehir</th><th>Sembol kahraman</th><th>Unvan</th></tr>' +
        '<tr class="rv u1"><td><b>Maraş</b></td><td>Sütçü İmam, Rıdvan Hoca</td><td>Kahraman</td></tr>' +
        '<tr class="rv u2"><td><b>Antep</b></td><td>Şahin Bey, Şehit Kâmil, Karayılan</td><td>Gazi</td></tr>' +
        '<tr class="rv u3"><td><b>Urfa</b></td><td>Ali Saip Bey</td><td>Şanlı</td></tr></table>',
      steps: [
        { s: 'Güney’de düzenli ordu yoktu. Şehirleri halk kendi gücüyle savundu ve şehirler sonradan bu kahramanlığı anlatan unvanlar aldı.' },
        { s: 'Maraş’ta Sütçü İmam’ın direnişi başladı; Maraş Şubat 1920’de kurtuldu ve Kahraman unvanını aldı.', v: 'Maraş’ta Sütçü İmam’ın direnişi başladı; Maraş Şubat bin dokuz yüz yirmide kurtuldu ve Kahraman unvanını aldı.', on: '.u1' },
        { s: 'Antep’te Şahin Bey, “Düşman arabaları cesedimi çiğnemeden Antep’e giremez.” dedi. Antep Gazi unvanını aldı.', v: 'Antep’te Şahin Bey, düşman arabaları cesedimi çiğnemeden Antep’e giremez, dedi. Antep, Gazi unvanını aldı.', on: '.u2' },
        { s: 'Urfa, Nisan 1920’de kurtuldu ve Şanlı unvanını aldı.', v: 'Urfa, Nisan bin dokuz yüz yirmide kurtuldu ve Şanlı unvanını aldı.', on: '.u3' },
        { s: 'Güney Cephesi, Sakarya’dan sonra Fransa ile imzalanan Ankara Antlaşması’yla kapandı. Bunu birazdan ayrıntılı göreceğiz.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Maraş, Antep ve Urfa’da Fransız işgaline karşı çarşı esnafı, din adamları ve köylüler bir araya gelerek direniş örgütlemiş, bu şehirler düzenli ordu bölgeye gelmeden önce kendi imkânlarıyla mücadele etmiştir.</p><p>Bu bilgilere göre aşağıdakilerden hangisi <b>söylenebilir</b>?</p>',
        c: ['Güney Cephesi’nde Kuvâ-yı Milliye etkili olmuştur.', 'Güney Cephesi Gümrü Antlaşması ile kapanmıştır.', 'Fransa, TBMM’yi tanıyan ilk Müslüman devlettir.', 'Bu bölgede Yunan ordusuyla savaşılmıştır.'], a: 'A',
        hint: 'Metin kimin savaştığını anlatıyor: düzenli ordu mu, halk mı?',
        why: 'Düzenli ordu gelmeden halk kendi imkânlarıyla savaşmıştır: bu Kuvâ-yı Milliye’dir. Güney Cephesi Ankara Antlaşması’yla kapandı; ilk tanıyan Müslüman devlet Afganistan’dır; burada düşman Fransızlardı.',
        whyV: 'Düzenli ordu gelmeden halk kendi imkânlarıyla savaşmıştır: bu Kuvâyı Milliye’dir. Güney Cephesi Ankara Antlaşması’yla kapandı; ilk tanıyan Müslüman devlet Afganistan’dır; burada düşman Fransızlardı.' },
      steps: [{ s: 'Sıra sende. Metnin dayanağı olmayan şıkları ele.' }] },

    { t: 'Batı Cephesi: büyük savaşlar',
      base: '<svg class="an-svg" viewBox="0 0 340 218" role="img" aria-label="Batı Cephesi savaşları zaman şeridi">' +
      '<path class="st dr b1" d="M104 12 L104 210"/>' +
      '<circle cx="104" cy="22" r="6" class="boxa rv b1"/>' +
      '<text x="92" y="27" font-size="13" text-anchor="end" font-weight="700" class="acc rv b1">Ocak 1921</text>' +
      '<text x="118" y="21" font-size="13" class="rv b1">I. İnönü</text>' +
      '<text x="118" y="36" font-size="11" class="mut rv b1">düzenli ordunun ilk zaferi</text>' +
      '<circle cx="104" cy="56" r="6" class="box rv b2"/>' +
      '<text x="92" y="61" font-size="13" text-anchor="end" font-weight="700" class="mut rv b2">Mart 1921</text>' +
      '<text x="118" y="55" font-size="13" class="rv b2">II. İnönü</text>' +
      '<text x="118" y="70" font-size="11" class="mut rv b2">“milletin makûs talihini de yendiniz”</text>' +
      '<circle cx="104" cy="90" r="6" class="box rv b3"/>' +
      '<text x="92" y="95" font-size="13" text-anchor="end" font-weight="700" class="mut rv b3">Temmuz 1921</text>' +
      '<text x="118" y="89" font-size="13" class="rv b3">Kütahya-Eskişehir</text>' +
      '<text x="118" y="104" font-size="11" class="mut rv b3">tek yenilgi, Sakarya’nın doğusuna çekilme</text>' +
      '<circle cx="104" cy="124" r="6" class="boxa rv b4"/>' +
      '<text x="92" y="129" font-size="13" text-anchor="end" font-weight="700" class="acc rv b4">Ağustos 1921</text>' +
      '<text x="118" y="123" font-size="13" class="rv b4">Sakarya Meydan Muharebesi</text>' +
      '<text x="118" y="138" font-size="11" class="mut rv b4">23 Ağustos – 13 Eylül</text>' +
      '<circle cx="104" cy="158" r="6" class="boxa rv b5"/>' +
      '<text x="92" y="163" font-size="13" text-anchor="end" font-weight="700" class="acc rv b5">Ağustos 1922</text>' +
      '<text x="118" y="157" font-size="13" class="rv b5">Büyük Taarruz</text>' +
      '<text x="118" y="172" font-size="11" class="mut rv b5">26–30 Ağustos</text>' +
      '<circle cx="104" cy="192" r="6" class="box rv b6"/>' +
      '<text x="92" y="197" font-size="13" text-anchor="end" font-weight="700" class="mut rv b6">9 Eylül 1922</text>' +
      '<text x="118" y="197" font-size="13" class="rv b6">İzmir kurtuldu</text>' +
      '</svg>',
      steps: [
        { s: 'Şimdi destanın ana sahnesine, Batı Cephesi’ne geçiyoruz. Bu savaşların sırasını bilmek bu konunun anahtarıdır.' },
        { s: 'Ocak 1921’de Birinci İnönü: TBMM’nin kurduğu düzenli ordunun ilk zaferi.', v: 'Ocak bin dokuz yüz yirmi birde Birinci İnönü: Büyük Millet Meclisinin kurduğu düzenli ordunun ilk zaferi.', on: '.b1' },
        { s: 'Mart 1921’de İkinci İnönü geldi. Ardından Temmuz’da Kütahya-Eskişehir’de yenildik.', v: 'Mart bin dokuz yüz yirmi birde İkinci İnönü geldi. Ardından Temmuz’da Kütahya Eskişehir’de yenildik.', on: '.b2,.b3' },
        { s: 'Ağustos 1921’de Sakarya, bir yıl sonra da Büyük Taarruz. 9 Eylül 1922’de İzmir kurtuldu.', v: 'Ağustos bin dokuz yüz yirmi birde Sakarya, bir yıl sonra da Büyük Taarruz. Dokuz Eylül bin dokuz yüz yirmi ikide İzmir kurtuldu.', on: '.b4,.b5,.b6' },
        { s: 'Sorular çoğu zaman şöyle gelir: “Bu gelişme hangi zaferden sonra oldu?” Şimdi her savaşın ardından neler olduğuna bakalım.', v: 'Sorular çoğu zaman şöyle gelir: bu gelişme hangi zaferden sonra oldu? Şimdi her savaşın ardından neler olduğuna bakalım.' }
      ] },

    { t: 'Birinci İnönü’den sonra',
      base: '<svg class="an-svg" viewBox="0 0 340 184" role="img" aria-label="Birinci İnönü sonrası gelişmeler zaman şeridi">' +
      '<path class="st dr m1" d="M118 12 L118 176"/>' +
      '<circle cx="118" cy="22" r="6" class="box rv m1"/>' +
      '<text x="106" y="27" font-size="13" text-anchor="end" font-weight="700" class="mut rv m1">20 Ocak 1921</text>' +
      '<text x="132" y="21" font-size="13" class="rv m1">Teşkilat-ı Esasiye</text>' +
      '<text x="132" y="36" font-size="11" class="mut rv m1">ilk anayasa</text>' +
      '<circle cx="118" cy="56" r="6" class="box rv m2"/>' +
      '<text x="106" y="61" font-size="13" text-anchor="end" font-weight="700" class="mut rv m2">21 Şubat 1921</text>' +
      '<text x="132" y="61" font-size="13" class="rv m2">Londra Konferansı başladı</text>' +
      '<circle cx="118" cy="90" r="6" class="box rv m3"/>' +
      '<text x="106" y="95" font-size="13" text-anchor="end" font-weight="700" class="mut rv m3">1 Mart 1921</text>' +
      '<text x="132" y="95" font-size="13" class="rv m3">Afganistan ile Dostluk Antlaşması</text>' +
      '<circle cx="118" cy="124" r="6" class="box rv m4"/>' +
      '<text x="106" y="129" font-size="13" text-anchor="end" font-weight="700" class="mut rv m4">12 Mart 1921</text>' +
      '<text x="132" y="129" font-size="13" class="rv m4">İstiklal Marşı kabul edildi</text>' +
      '<circle cx="118" cy="158" r="6" class="boxa rv m5"/>' +
      '<text x="106" y="163" font-size="13" text-anchor="end" font-weight="700" class="acc rv m5">16 Mart 1921</text>' +
      '<text x="132" y="157" font-size="13" class="rv m5">Moskova Antlaşması</text>' +
      '<text x="132" y="172" font-size="11" class="mut rv m5">Batum verildi</text>' +
      '</svg>',
      steps: [
        { s: 'Birinci İnönü’den sonra halkın meclise ve düzenli orduya güveni arttı. Çerkez Ethem isyanı da bastırıldı.' },
        { s: 'Ocak 1921’de ilk anayasamız Teşkilat-ı Esasiye kabul edildi. “Egemenlik kayıtsız şartsız milletindir.” dedi.', v: 'Ocak bin dokuz yüz yirmi birde ilk anayasamız Teşkilatı Esasiye kabul edildi. Egemenlik kayıtsız şartsız milletindir, dedi.', on: '.m1' },
        { s: 'Londra Konferansı’nda İtilaf Devletleri hem İstanbul’u hem TBMM’yi çağırdı. Böylece TBMM’yi hukuken tanımış oldular.', v: 'Londra Konferansı’nda İtilaf Devletleri hem İstanbul’u hem Büyük Millet Meclisini çağırdı. Böylece meclisi hukuken tanımış oldular.', on: '.m2' },
        { s: 'Afganistan, TBMM’yi tanıyan ilk Müslüman devlet oldu. 12 Mart’ta da Mehmet Akif’in şiiri İstiklal Marşı olarak kabul edildi.', v: 'Afganistan, Büyük Millet Meclisini tanıyan ilk Müslüman devlet oldu. On iki Mart’ta da Mehmet Akif’in şiiri İstiklal Marşı olarak kabul edildi.', on: '.m3,.m4' },
        { s: 'Moskova Antlaşması’yla Sovyet Rusya Sevr’i reddetti. Ama dikkat: Batum Gürcistan’a bırakıldı.', on: '.m5',
          h: '<div class="an-trap"><b>Misak-ı Millî’den tavizler:</b> 1. Batum (Moskova, 1921) · 2. Hatay (Ankara Antlaşması, 1921) · 3. Musul (1926)</div>' }
      ] },

    { t: 'Yenilgiden sonra: Sakarya’ya hazırlık',
      steps: [
        { s: 'Kütahya-Eskişehir’de ordu daha fazla kayıp vermesin diye Mustafa Kemal geri çekilme emri verdi. Ordu Sakarya’nın doğusuna çekildi.', v: 'Kütahya Eskişehir’de ordu daha fazla kayıp vermesin diye Mustafa Kemal geri çekilme emri verdi. Ordu Sakarya’nın doğusuna çekildi.' },
        { s: 'Ve tam o en zor günlerde Ankara’da Maarif Kongresi toplandı. Bu, savaşta bile eğitime ne kadar önem verildiğini gösterir.',
          h: '<div class="an-ex"><span class="an-l"><b>Maarif Kongresi (Temmuz 1921)</b> → savaşta bile eğitime önem</span><span class="an-l"><b>Başkomutanlık Kanunu (5 Ağustos 1921)</b> → meclis, ordu yetkisini 3 ay için Mustafa Kemal’e verdi</span><span class="an-l"><b>Tekâlif-i Millîye (7–8 Ağustos 1921)</b> → ordunun ihtiyacı halktan karşılandı</span></div>' },
        { s: 'Meclis hızlı karar alınabilsin diye Başkomutanlık Kanunu’yla ordu yetkisini üç aylığına Mustafa Kemal’e verdi.' },
        { s: 'Mustafa Kemal de bu yetkiyle Tekâlif-i Millîye emirlerini yayımladı. Halkın elindeki silah, cephane, giyecek, yiyecek orduya verildi.', v: 'Mustafa Kemal de bu yetkiyle Tekâlifi Millîye emirlerini yayımladı. Halkın elindeki silah, cephane, giyecek, yiyecek orduya verildi.' },
        { s: 'Bu, topyekûn seferberlik demektir: bütün millet savaşın içindeydi.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Kütahya-Eskişehir Savaşları’ndan sonra yayımlanan emirlerle her aile orduya bir kat çamaşır ve bir çift çarık vermiş, halkın elindeki silah ve cephane toplanmış, taşıtların bir kısmı ordunun hizmetine verilmiştir.</p><p>Bu uygulamayla ilgili aşağıdakilerden hangisi <b>söylenemez</b>?</p>',
        c: ['Ordunun ihtiyaçları halkın desteğiyle karşılanmaya çalışılmıştır.', 'Mustafa Kemal, Başkomutan olarak meclisten aldığı yetkiyi kullanmıştır.', 'Millî Mücadele’de topyekûn bir seferberlik yaşanmıştır.', 'Bu emirler Büyük Taarruz kazanıldıktan sonra yayımlanmıştır.'], a: 'D',
        hint: 'Metindeki zaman ifadesine bak: emirler hangi savaştan sonra, hangi savaştan önce?',
        why: 'Tekâlif-i Millîye, Kütahya-Eskişehir’den sonra ve Sakarya’dan önce (Ağustos 1921) yayımlandı; Büyük Taarruz 1922’dedir. Diğer üç yorum metinle uyumludur.',
        whyV: 'Tekâlifi Millîye, Kütahya Eskişehir’den sonra ve Sakarya’dan önce, Ağustos bin dokuz yüz yirmi birde yayımlandı; Büyük Taarruz bin dokuz yüz yirmi ikidedir. Diğer üç yorum metinle uyumludur.' },
      steps: [{ s: 'Hadi bakalım. Soru kökü “söylenemez” diyor, unutma.', v: 'Hadi bakalım. Soru kökü söylenemez diyor, unutma.' }] },

    { t: 'Sakarya: hat değil, yüzey',
      steps: [
        { s: 'Sakarya Meydan Muharebesi tam yirmi iki gün sürdü. Mustafa Kemal burada dünya savaş tarihine geçen bir emir verdi.',
          h: '<div class="an-big" style="font-size:18px">“Hattı müdafaa yoktur, sathı müdafaa vardır. O satıh bütün vatandır.”</div>', v: 'Sakarya Meydan Muharebesi tam yirmi iki gün sürdü. Mustafa Kemal burada dünya savaş tarihine geçen bir emir verdi: Hattı müdafaa yoktur, sathı müdafaa vardır. O satıh bütün vatandır.' },
        { s: 'Yani bir çizgiyi değil, bütün vatan toprağını savunuyoruz. Bir yer kaybedilse de en yakın noktada yeniden direnilecekti.' },
        { s: 'Sonuçlar çok önemli. Önce askerî sonuç: 1683 Viyana Kuşatması’ndan beri süren geri çekilme bitti, Türk ordusu taarruza geçti.', v: 'Sonuçlar çok önemli. Önce askerî sonuç: bin altı yüz seksen üç Viyana Kuşatması’ndan beri süren geri çekilme bitti, Türk ordusu taarruza geçti.',
          h: '<div class="an-ex"><span class="an-l">Geri çekiliş bitti, savunmadan taarruza geçildi</span><span class="an-l">Mustafa Kemal’e <b>Gazi</b> unvanı ve <b>mareşal</b> rütbesi</span><span class="an-l">İtalyanlar Anadolu’yu tamamen terk etti</span><span class="an-l"><b>Kars Antlaşması</b> (doğu sınırı) · <b>Ankara Antlaşması</b> (Güney Cephesi kapandı)</span></div>' },
        { s: 'Meclis, Mustafa Kemal’e Gazi unvanı ve mareşal rütbesi verdi. İtalyanlar da Anadolu’dan tamamen çekildi.' },
        { s: 'Diplomasi de hareketlendi: Kars Antlaşması’yla doğu sınırı kesinleşti, Ankara Antlaşması’yla Güney Cephesi kapandı.' },
        { s: 'Ankara Antlaşması’yla Fransa, TBMM’yi tanıyan ilk İtilaf devleti oldu. Ama Hatay, Fransa mandasındaki Suriye’ye bırakıldı.', v: 'Ankara Antlaşması’yla Fransa, Büyük Millet Meclisini tanıyan ilk İtilaf devleti oldu. Ama Hatay, Fransa mandasındaki Suriye’ye bırakıldı.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Sakarya Meydan Muharebesi’nin kazanılması, TBMM’nin diplomatik alandaki elini güçlendirmiş ve kısa süre içinde önemli antlaşmalar imzalanmıştır.</p><p>Aşağıdakilerden hangisi bu zaferden <b>sonra</b> imzalanan antlaşmalardan biridir?</p>',
        c: ['Gümrü Antlaşması', 'Afganistan ile Dostluk Antlaşması', 'Ankara Antlaşması', 'Moskova Antlaşması'], a: 'C',
        hint: 'Gümrü 1920 sonu, Afganistan ve Moskova 1921 baharı. Sakarya ise Eylül 1921’de bitti.',
        why: 'Ankara Antlaşması 20 Ekim 1921’de, Sakarya’dan sonra Fransa ile imzalandı. Gümrü (1920), Afganistan ve Moskova (Mart 1921) Sakarya’dan öncedir.',
        whyV: 'Ankara Antlaşması yirmi Ekim bin dokuz yüz yirmi birde, Sakarya’dan sonra Fransa ile imzalandı. Gümrü, Afganistan ve Moskova antlaşmaları ise Sakarya’dan öncedir.' },
      steps: [{ s: 'Kronoloji sorusu! Her antlaşmayı zaman şeridinde yerine koy.' }] },

    { t: 'Büyük Taarruz',
      steps: [
        { s: 'Sakarya’dan sonra ordu bir yıl boyunca hazırlandı. 26 Ağustos 1922’de Büyük Taarruz başladı.', v: 'Sakarya’dan sonra ordu bir yıl boyunca hazırlandı. Yirmi altı Ağustos bin dokuz yüz yirmi ikide Büyük Taarruz başladı.' },
        { s: '30 Ağustos’ta Başkomutanlık Meydan Muharebesi’nde Yunan ordusu Dumlupınar’da büyük ölçüde yok edildi.', v: 'Otuz Ağustos’ta Başkomutanlık Meydan Muharebesi’nde Yunan ordusu Dumlupınar’da büyük ölçüde yok edildi.' },
        { s: '1 Eylül’de Mustafa Kemal o ünlü emri verdi.', v: 'Bir Eylül’de Mustafa Kemal o ünlü emri verdi.', h: '<div class="an-big" style="font-size:20px">“Ordular! İlk hedefiniz Akdeniz’dir. İleri!”</div>' },
        { s: '9 Eylül’de İzmir kurtuldu, 18 Eylül’de Batı Anadolu tamamen temizlendi. Silahlı mücadele dönemi bitti.', v: 'Dokuz Eylül’de İzmir kurtuldu, on sekiz Eylül’de Batı Anadolu tamamen temizlendi. Silahlı mücadele dönemi bitti.' }
      ] },

    { t: 'Mudanya Ateşkesi (11 Ekim 1922)',
      steps: [
        { s: 'Şimdi silahlar sustu, diplomasi konuşuyor. Mudanya’da TBMM adına İsmet Paşa vardı.', v: 'Şimdi silahlar sustu, diplomasi konuşuyor. Mudanya’da meclis adına İsmet Paşa vardı.' },
        { s: 'Mudanya’nın en büyük kazancı şu: Doğu Trakya, İstanbul ve Boğazlar tek kurşun atılmadan kurtarıldı.',
          h: '<div class="an-rule">Doğu Trakya (Edirne, Kırklareli, Tekirdağ) + İstanbul + Boğazlar → <b>savaşmadan</b>, diplomasiyle</div>' },
        { s: 'Burada çok dikkat et, LGS’de bu konuda düşülen tuzak bu: saltanatın kaldırılması Mudanya’nın sonucu değildir.',
          h: '<div class="an-trap">Saltanat 1 Kasım 1922’de kaldırıldı. Nedeni: İtilaf Devletleri Lozan’a hem TBMM’yi hem İstanbul Hükûmeti’ni çağırıp <b>ikilik</b> çıkarmak istedi.</div>' },
        { s: 'Saltanat, İtilaf Devletleri Lozan’a iki hükûmeti birden çağırınca kaldırıldı. Amaçları ikilik çıkarmaktı, ama oyun bozuldu.' }
      ] },

    { t: 'Lozan Barış Antlaşması (24 Temmuz 1923)',
      base: '<table class="an-tbl"><tr><th>Konu</th><th>Karar</th></tr>' +
        '<tr class="rv l1"><td><b>Kapitülasyonlar</b></td><td>tamamen kaldırıldı → ekonomik ve hukuki bağımsızlık</td></tr>' +
        '<tr class="rv l2"><td><b>Azınlıklar</b></td><td>Türk vatandaşı sayıldı; yabancı okullar Türk yasalarına bağlı</td></tr>' +
        '<tr class="rv l3"><td><b>Nüfus mübadelesi</b></td><td>Anadolu Rumları ↔ Yunanistan Türkleri (İstanbul Rumları ve Batı Trakya Türkleri hariç)</td></tr>' +
        '<tr class="rv l4"><td><b>Boğazlar</b></td><td>başkanı Türk uluslararası komisyon; iki yaka askersiz → egemenliğe aykırı</td></tr>' +
        '<tr class="rv l5"><td><b>Sınırlar</b></td><td>Musul sonraya kaldı; Hatay 1921 Ankara Antlaşması’na göre dışarıda</td></tr></table>',
      steps: [
        { s: 'Mustafa Kemal, İsmet Paşa’ya iki konuda asla taviz vermemesini söylemişti: Ermeni yurdu ve kapitülasyonlar.' },
        { s: 'Kapitülasyonlar tamamen kaldırıldı. Ekonomik ve hukuki bağımsızlık kazanıldı, Lozan’ın en büyük başarısı budur.', on: '.l1' },
        { s: 'Azınlıklar Türk vatandaşı sayıldı, yabancı okullar Türk yasalarına bağlandı. Böylece iç işlerimize karışılmasının önü kapandı.', on: '.l2' },
        { s: 'Anadolu’daki Rumlarla Yunanistan’daki Türkler karşılıklı değiştirildi. İstanbul Rumları ve Batı Trakya Türkleri bunun dışında kaldı.', on: '.l3' },
        { s: 'Boğazlar ise uluslararası bir komisyona bırakıldı. Bu, tam egemenliğimizi zedeledi ve ancak 1936’da Montrö ile çözüldü.', v: 'Boğazlar ise uluslararası bir komisyona bırakıldı. Bu, tam egemenliğimizi zedeledi ve ancak bin dokuz yüz otuz altıda Montrö ile çözüldü.', on: '.l4', mk: '.l4 td' },
        { s: 'Musul meselesi İngiltere ile çözülemedi, sonraya bırakıldı. Hatay da sınırın dışında kaldı ve 1939’da anavatana katıldı.', v: 'Musul meselesi İngiltere ile çözülemedi, sonraya bırakıldı. Hatay da sınırın dışında kaldı ve bin dokuz yüz otuz dokuzda anavatana katıldı.', on: '.l5' }
      ] },

    { t: 'Destanın izleri: İstiklal Yolu ve sanat',
      steps: [
        { s: 'Cephede savaşanlar kadar cephaneyi taşıyanlar da kahramandı. İstanbul’dan kaçırılan silahlar önce deniz yoluyla İnebolu’ya geldi.',
          h: '<div class="an-rule"><b>İstiklal Yolu:</b> İstanbul → (deniz) → İnebolu → Kastamonu → Ilgaz → Çankırı → Ankara</div>' },
        { s: 'Oradan kağnılarla Kastamonu, Ilgaz ve Çankırı üzerinden Ankara’ya taşındı. Şerife Bacı ve Halime Çavuş bu yolun simgeleridir.' },
        { s: 'Millî Mücadele edebiyata ve resme de yansıdı. Halide Edip’in Ateşten Gömlek’i, Yakup Kadri’nin Yaban’ı bunlardan sadece ikisi.',
          h: '<div class="an-grid"><div><b>Halide Edip</b>Ateşten Gömlek</div><div><b>Yakup Kadri</b>Yaban</div><div><b>Tarık Buğra</b>Küçük Ağa</div></div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Lozan Barış Antlaşması’nın aşağıdaki kararlarından hangisi, Türkiye’nin <b>tam bağımsızlık</b> anlayışıyla en az bağdaşır?</p>',
        c: ['Kapitülasyonların tamamen kaldırılması', 'Azınlıkların Türk vatandaşı sayılması', 'Boğazların uluslararası bir komisyona bırakılması', 'Yabancı okulların Türk yasalarına bağlı olması'], a: 'C',
        hint: 'Hangi kararda Türkiye kendi toprağındaki bir yerin yönetimini başkalarıyla paylaşmak zorunda kaldı?',
        why: 'Boğazların uluslararası komisyona bırakılması ve iki yakasının askerden arındırılması Türk egemenliğini sınırladı; bu sorun ancak 1936 Montrö Boğazlar Sözleşmesi ile çözüldü.',
        whyV: 'Boğazların uluslararası komisyona bırakılması ve iki yakasının askerden arındırılması Türk egemenliğini sınırladı; bu sorun ancak bin dokuz yüz otuz altı Montrö Boğazlar Sözleşmesi ile çözüldü.' },
      steps: [{ s: 'Son soru! Hangi karar egemenliğimizi kısıtladı, onu bul.' }] }
  ]
};
