/* Adım Adım Anlatım · İnkılap Tarihi · Millî Uyanış (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['ink-uyanis'] = {
  title: 'Millî Uyanış: Bağımsızlık Yolunda Atılan Adımlar',
  desc: 'Birinci Dünya Savaşı ve cephelerden Mondros’a, cemiyetlerden genelge ve kongrelere, Misak-ı Millî’den TBMM’nin açılışına ve Sevr’e; kronoloji tuzaklarıyla adım adım.',
  ozet: [
    'I. Dünya Savaşı: ham madde-pazar yarışı, milliyetçilik, bloklaşma; kıvılcım Saraybosna suikastı (28 Haziran 1914). Osmanlı İttifak bloğunda, Almanya’nın yanında savaştı.',
    'Almanya Osmanlı’nın askerî gücünü değil; konumunu (yeni cepheler, sömürge yolları) ve halifeliğin gücünü (cihat) istedi.',
    'Çanakkale kazanılan tek cephe; savaşı uzattı, Rusya’ya yardım gidemedi, Mustafa Kemal’i tanıttı. Kafkas’ta Brest-Litowsk ile toprak geri alındı. Mustafa Kemal’in cephe sırası: Çanakkale → Kafkas → Suriye-Filistin.',
    'Mondros (30 Ekim 1918): ordu terhis, silahlar teslim, haberleşme İtilaf denetiminde. 7. madde: istenen stratejik yer işgal edilebilir; 24. madde: Vilâyât-ı Sitte’de Ermeni devleti hazırlığı.',
    'Havza Genelgesi: mitingler, protesto, azınlıklara kötü davranılmasın. Amasya Genelgesi: gerekçe (vatan tehlikede, İstanbul görevini yapamıyor), amaç (bağımsızlık), yöntem (milletin azim ve kararı), Sivas’ta kongre.',
    'Erzurum: toplanış bölgesel, kararlar ulusal; manda ilk kez reddedildi, millî sınırlar ilk kez. Sivas: toplanış ve kararlar ulusal; cemiyetler Anadolu ve Rumeli Müdafaa-i Hukuk adıyla birleşti.',
    'Misak-ı Millî (28 Ocak 1920) son Osmanlı Mebusan Meclisi’nde kabul edildi. İstanbul resmen işgal edildi (16 Mart 1920), TBMM açıldı (23 Nisan 1920). Hıyanet-i Vataniye = yasama, İstiklal Mahkemeleri = yargı.',
    'Sevr (10 Ağustos 1920) Mebusan Meclisi onaylamadığı için hukuken geçersizdir. Kronoloji tuzağı: 1919’da TBMM yok, Başkomutanlık 1921’de.'
  ],
  scenes: [
    { t: 'Birinci Dünya Savaşı neden çıktı?',
      base: '<div class="an-grid"><div class="rv n1"><b>Genel nedenler</b>ham madde-pazar yarışı, milliyetçilik, silahlanma, bloklaşma</div><div class="rv n2"><b>Özel nedenler</b>Alsas-Loren, Panslavizm, Balkanlar’da rekabet</div><div class="rv n3"><b>Kıvılcım</b>28 Haziran 1914 Saraybosna suikastı</div></div>',
      steps: [
        { s: 'Merhaba! Bu derste bir milletin nasıl ayağa kalktığını göreceğiz. Ama önce o büyük savaşı, Birinci Dünya Savaşı’nı anlamamız gerek.' },
        { s: 'Genel nedenler tanıdık geliyor olmalı: Sanayi İnkılabı’nın doğurduğu ham madde ve pazar yarışı, milliyetçilik, silahlanma ve bloklaşma.', on: '.n1' },
        { s: 'Özel nedenler daha somut: Almanya ile Fransa arasındaki Alsas-Loren sorunu, Rusya’nın Panslavizmi ve Balkanlar’daki rekabet.', on: '.n2' },
        { s: 'Savaşı başlatan kıvılcım ise 28 Haziran 1914’te Avusturya-Macaristan veliahdının Saraybosna’da bir Sırp milliyetçisi tarafından öldürülmesiydi.', v: 'Savaşı başlatan kıvılcım ise yirmi sekiz Haziran bin dokuz yüz on dörtte Avusturya Macaristan veliahdının Saraybosna’da bir Sırp milliyetçisi tarafından öldürülmesiydi.', on: '.n3' },
        { s: 'İki blok karşı karşıya geldi: İttifak’ta Almanya ve Avusturya-Macaristan; İtilaf’ta İngiltere, Fransa ve Rusya.',
          h: '<div class="an-tip"><b>İtalya’ya dikkat:</b> önce İttifak’taydı; 1915’te Anadolu’dan toprak vaat edilince İtilaf’a geçti.</div>' }
      ] },

    { t: 'Hangi blokta savaştı?',
      steps: [{ s: 'Her devleti savaş boyunca hangi blokta savaştıysa o kutuya koy. Bir tanesinde dikkatli ol, saf değiştirdi.' }],
      ia: { tip: 'grup', q: '<p>Her devleti <b>savaştığı bloğa</b> yerleştir.</p>', gruplar: ['İttifak', 'İtilaf'],
        ogeler: [{ m: 'Almanya', g: 0 }, { m: 'İngiltere', g: 1 }, { m: 'Avusturya-Macaristan', g: 0 }, { m: 'Rusya', g: 1 },
          { m: 'Osmanlı Devleti', g: 0 }, { m: 'İtalya', g: 1 }, { m: 'Bulgaristan', g: 0 }, { m: 'Fransa', g: 1 }],
        hint: 'İtalya savaştan önce hangi bloktaydı, 1915’te ne oldu? Bulgaristan ise Çanakkale’den sonra hangi tarafa katıldı?',
        why: 'Almanya, Avusturya-Macaristan, Osmanlı ve Bulgaristan İttifak’ta; İngiltere, Fransa ve Rusya İtilaf’ta savaştı. İtalya önce İttifak’taydı ama 1915’te İtilaf’a geçti.' } },
    { t: 'Osmanlı neden savaşa girdi?',
      steps: [
        { s: 'Osmanlı Almanya’nın yanında savaşa girdi. Peki ne umuyordu? Kaybettiği toprakları geri almak ve yalnızlıktan kurtulmak.',
          h: '<div class="an-ex"><span class="an-l"><b>Osmanlı’nın amacı:</b> kaybedilen toprakları geri almak · yalnızlıktan kurtulmak · kapitülasyonlardan ve borçlardan kurtulmak · Almanya kazanır inancı</span></div>' },
        { s: 'Bir de kapitülasyonlardan ve dış borçlardan kurtulmayı istiyordu. Üstelik savaşı Almanya’nın kazanacağına inanıyordu.' },
        { s: 'Almanya ise Osmanlı’yı neden istedi? Şimdi buraya çok dikkat et.',
          h: '<div class="an-ex"><span class="an-l"><b>Almanya’nın amacı:</b> yeni cepheler açıp yükünü hafifletmek · İngiliz sömürge yollarını kesmek · halifeliği kullanıp Müslümanları ayaklandırmak (cihat) · Ortadoğu petrolleri</span></div>' },
        { s: 'Yeni cepheler açıp yükünü hafifletmek, İngiltere’nin sömürge yollarını kesmek ve halifenin gücüyle sömürgelerdeki Müslümanları ayaklandırmak.' },
        { s: 'LGS’de en sık düşülen tuzak bu: Almanya Osmanlı’nın askerî gücünü değil, konumunu ve halifeliğin dinî gücünü istedi.',
          h: '<div class="an-trap">“Almanya, Osmanlı ordusunun gücünden yararlanmak istedi” → <span class="an-bad-t">yanlış</span>. Doğrusu: <b>jeopolitik konum + halifelik</b>.</div>' }
      ] },

    { t: 'Osmanlı’nın cepheleri',
      base: '<svg class="an-svg" viewBox="0 0 330 222" role="img" aria-label="Birinci Dünya Savaşında Osmanlı cepheleri temsilî harita">' +
      '<polygon points="16,12 39,20 56,30 76,31 96,29 116,15 139,11 157,10 170,18 179,29 199,34 218,36 235,36 248,34 263,24 282,21 296,34 300,51 318,68 311,86 310,111 311,126 293,129 278,134 258,134 238,139 215,141 199,144 184,141 179,156 172,164 169,154 175,144 165,146 149,141 137,154 119,160 106,149 89,140 81,151 66,156 57,146 43,142 29,136 26,114 16,104 21,89 18,76 9,71 9,59 18,51 6,45 9,31" fill="none" class="ln" stroke-width="1.6"/>' +
      '<ellipse cx="43" cy="42" rx="20" ry="6" fill="none" class="ln" stroke-width="1.2"/>' +
      '<circle cx="13" cy="57" r="6" class="boxa rv c2"/>' +
      '<text x="17" y="83" font-size="12" text-anchor="start" font-weight="700" class="acc rv c2">Çanakkale</text>' +
      '<text x="17" y="96" font-size="10" text-anchor="start" class="mut rv c2">kazanıldı</text>' +
      '<circle cx="282" cy="54" r="6" class="boxa rv c1"/>' +
      '<text x="276" y="40" font-size="12" text-anchor="middle" font-weight="700" class="acc rv c1">Kafkas</text>' +
      '<text x="278" y="76" font-size="10" text-anchor="middle" font-weight="700" class="acc rv c1">Sarıkamış</text>' +
      '<path class="st2 dr c3" d="M300 150 L312 196"/>' +
      '<text x="312" y="208" font-size="12" text-anchor="middle" font-weight="700" class="acc rv c3">Irak</text>' +
      '<path class="st2 dr c3" d="M200 160 L200 192"/>' +
      '<text x="200" y="206" font-size="12" text-anchor="middle" font-weight="700" class="acc rv c3">Suriye-Filistin</text>' +
      '<path class="st2 dr c3" d="M150 160 L96 196"/>' +
      '<text x="80" y="206" font-size="12" text-anchor="middle" font-weight="700" class="acc rv c3">Hicaz-Yemen</text>' +
      '<text x="165" y="96" font-size="11" text-anchor="middle" class="mut">ANADOLU</text>' +
      '<text x="165" y="14" font-size="10" text-anchor="middle" class="mut">Karadeniz · temsilî harita</text>' +
      '</svg>',
      steps: [
        { s: 'Haritaya bakalım. Kafkas Cephesi’ni Osmanlı açtı: amaç Rusları atmak, Bakü petrollerine ve Orta Asya Türklerine ulaşmaktı.', on: '.c1' },
        { s: 'Sarıkamış’ta ağır kayıplar verildi. Ama Rusya’da ihtilal çıkınca Brest-Litowsk Antlaşması’yla Kars, Ardahan ve Batum geri alındı.', v: 'Sarıkamış’ta ağır kayıplar verildi. Ama Rusya’da ihtilal çıkınca Brest Litovsk Antlaşması’yla Kars, Ardahan ve Batum geri alındı.' },
        { s: 'Yani Kafkas, toprak kazanılan tek cephedir. Bunu not et.', h: '<div class="an-rule">Kazanılan tek cephe → <b>Çanakkale</b> · Toprak kazanılan tek cephe → <b>Kafkas</b></div>' },
        { s: 'Çanakkale Cephesi’ni ise İtilaf Devletleri açtı: İstanbul’u ve Boğazları alıp müttefikleri Rusya’ya yardım götürmek istiyorlardı.', on: '.c2' },
        { s: 'Güneyde Irak, Suriye-Filistin ve Hicaz-Yemen cepheleri vardı. Bazı Arap kabilelerinin İngilizlerle iş birliği yapması İslamcılığın geçersizliğini gösterdi.', on: '.c3' }
      ] },

    { t: 'Çanakkale ve Mustafa Kemal’in cepheleri',
      steps: [
        { s: 'Çanakkale’de Mustafa Kemal Arıburnu, Conkbayırı ve Anafartalar’da öne çıktı. Peki bu zaferin sonuçları neydi?',
          h: '<div class="an-ex"><span class="an-l">Savaş yaklaşık 2 yıl uzadı</span><span class="an-l">Rusya’ya yardım gidemedi → Bolşevik İhtilali’ne etki</span><span class="an-l">Bulgaristan İttifak bloğunda savaşa girdi</span><span class="an-l">Mustafa Kemal bütün yurtta tanındı</span></div>' },
        { s: 'Savaş yaklaşık iki yıl uzadı, yardım alamayan Rusya’da ihtilal çıktı, Bulgaristan İttifak tarafında savaşa girdi.' },
        { s: 'En önemlisi de Mustafa Kemal bütün yurtta tanındı. Bu, onun Millî Mücadele’nin lideri olmasının yolunu açtı.' },
        { s: 'Mustafa Kemal’in cephe sırasını kısaca “Çi-Ka-S” diye aklında tut: Çanakkale, Kafkas, Suriye-Filistin.', v: 'Mustafa Kemal’in cephe sırasını kısaca Çi Ka Se diye aklında tut: Çanakkale, Kafkas, Suriye Filistin.',
          h: '<div class="an-rule"><b>Çi</b>-<b>Ka</b>-<b>S</b>: Çanakkale (1915) → Kafkas (1916, Muş ve Bitlis geri alındı) → Suriye-Filistin (1917–1918)</div>' }
      ] },

    { t: 'Mustafa Kemal hangi cephelerde?',
      steps: [{ s: 'Haritada Mustafa Kemal’in Birinci Dünya Savaşı’nda görev yaptığı bütün cepheleri bul, hepsine dokun ve Kontrol et’e bas.' }],
      ia: { tip: 'gorselsec', q: '<p>Mustafa Kemal’in Birinci Dünya Savaşı’nda <b>görev yaptığı cephelere</b> dokun.</p>', dogru: ['ca', 'ka', 'sf'],
        svg: '<svg class="an-svg" viewBox="0 0 330 222" role="group" aria-label="Birinci Dünya Savaşında Osmanlı cepheleri, dokunulabilir temsilî harita">' +
          '<polygon points="16,12 39,20 56,30 76,31 96,29 116,15 139,11 157,10 170,18 179,29 199,34 218,36 235,36 248,34 263,24 282,21 296,34 300,51 318,68 311,86 310,111 311,126 293,129 278,134 258,134 238,139 215,141 199,144 184,141 179,156 172,164 169,154 175,144 165,146 149,141 137,154 119,160 106,149 89,140 81,151 66,156 57,146 43,142 29,136 26,114 16,104 21,89 18,76 9,71 9,59 18,51 6,45 9,31" fill="none" class="ln" stroke-width="1.6"/>' +
          '<ellipse cx="43" cy="42" rx="20" ry="6" fill="none" class="ln" stroke-width="1.2"/>' +
          '<text x="165" y="96" font-size="11" text-anchor="middle" class="mut">ANADOLU</text>' +
          '<text x="165" y="14" font-size="10" text-anchor="middle" class="mut">temsilî harita</text>' +
          '<g data-b="ca" aria-label="Çanakkale"><rect x="4" y="62" width="100" height="38" rx="9" class="box"/><text x="54" y="86" text-anchor="middle" font-size="14">Çanakkale</text></g>' +
          '<g data-b="ka" aria-label="Kafkas"><rect x="236" y="62" width="86" height="38" rx="9" class="box"/><text x="279" y="86" text-anchor="middle" font-size="14">Kafkas</text></g>' +
          '<g data-b="ir" aria-label="Irak"><rect x="262" y="176" width="62" height="38" rx="9" class="box"/><text x="293" y="200" text-anchor="middle" font-size="14">Irak</text></g>' +
          '<g data-b="sf" aria-label="Suriye-Filistin"><rect x="132" y="176" width="124" height="38" rx="9" class="box"/><text x="194" y="200" text-anchor="middle" font-size="14">Suriye-Filistin</text></g>' +
          '<g data-b="hy" aria-label="Hicaz-Yemen"><rect x="8" y="176" width="116" height="38" rx="9" class="box"/><text x="66" y="200" text-anchor="middle" font-size="14">Hicaz-Yemen</text></g>' +
          '</svg>',
        hint: 'Kısa şifreyi hatırla: Çi, Ka, S. Üç cephe, üç harf.',
        why: 'Çanakkale 1915, Kafkas 1916, Suriye-Filistin 1917 ile 1918 arası. Irak ve Hicaz-Yemen cephelerinde Mustafa Kemal görev yapmadı.' } },
    { t: 'Ara soru', cp: {
        q: '<p>Birinci Dünya Savaşı’nda Almanya, Osmanlı Devleti’nin kendi yanında savaşa girmesini istemiştir.</p><p>Aşağıdakilerden hangisi Almanya’nın bu isteğinin nedenleri arasında <b>gösterilemez</b>?</p>',
        c: ['Yeni cepheler açtırarak kendi üzerindeki savaş yükünü hafifletmek', 'Halifeliğin etkisiyle İngiliz sömürgelerindeki Müslümanları ayaklandırmak', 'Osmanlı ordusunun üstün silah ve teknolojisinden yararlanmak', 'İngiltere’nin sömürgeleriyle bağlantısını kesmek'], a: 'C',
        hint: 'Almanya Osmanlı’nın neyinden yararlanmak istiyordu: ordusundan mı, konumundan ve halifelikten mi?',
        why: 'Osmanlı ordusu o dönemde yorgun ve teknolojik olarak geriydi. Almanya Osmanlı’nın askerî gücünü değil, jeopolitik konumunu ve halifeliğin dinî gücünü kullanmak istemişti.' },
      steps: [{ s: 'Sıra sende. Soru kökündeki “gösterilemez” sözcüğüne dikkat!', v: 'Sıra sende. Soru kökündeki gösterilemez sözcüğüne dikkat!' }] },

    { t: 'Mondros Ateşkesi (30 Ekim 1918)',
      steps: [
        { s: 'Savaş kaybedildi. 30 Ekim 1918’de Limni Adası’nın Mondros Limanı’nda ateşkes imzalandı. Şimdi maddelere ve amaçlarına bakalım.', v: 'Savaş kaybedildi. Otuz Ekim bin dokuz yüz on sekizde Limni Adası’nın Mondros Limanı’nda ateşkes imzalandı. Şimdi maddelere ve amaçlarına bakalım.',
          h: '<table class="an-tbl"><tr><th>Madde</th><th>Amaç</th></tr><tr class="rv o1"><td>Ordu terhis, silahlar teslim</td><td>Osmanlı’yı savunmasız bırakmak</td></tr><tr class="rv o2"><td>Haberleşme, demir yolları, Toros tünelleri İtilaf denetiminde</td><td>halkın haberleşmesini ve örgütlenmesini engellemek</td></tr><tr class="rv o3"><td><b>7. madde:</b> güvenliği tehdit eden durumda her stratejik yer işgal edilebilir</td><td>işgallere hukuki kılıf</td></tr><tr class="rv o4"><td><b>24. madde:</b> Vilâyât-ı Sitte’de karışıklık çıkarsa işgal</td><td>Doğu’da Ermeni devleti kurmak</td></tr></table>' },
        { s: 'Ordunun terhisi ve silahların teslimiyle Osmanlı savunmasız bırakıldı.', on: '.o1' },
        { s: 'Haberleşme ve demir yollarının denetime verilmesiyle de halkın örgütlenmesi engellenmek istendi.', on: '.o2' },
        { s: 'En tehlikeli madde yedinci maddedir. “Güvenliğimiz tehdit edilirse” bahanesiyle her yer işgal edilebilecekti.', v: 'En tehlikeli madde yedinci maddedir. Güvenliğimiz tehdit edilirse bahanesiyle her yer işgal edilebilecekti.', on: '.o3' },
        { s: 'Yirmi dördüncü madde de Doğu Anadolu’daki altı ili hedef alıyordu: Erzurum, Van, Elazığ, Diyarbakır, Bitlis, Sivas.', on: '.o4' }
      ] },

    { t: 'Madde ve amacı',
      steps: [{ s: 'Mondros’un her maddesinin bir amacı vardı. Maddeleri amaçlarıyla eşleştir.' }],
      ia: { tip: 'eslestir', q: '<p>Mondros Ateşkesi’nin maddelerini <b>amaçlarıyla</b> eşleştir.</p>', solBaslik: 'Madde', sagBaslik: 'Amacı',
        sol: ['Ordu terhis edilecek', 'Haberleşme denetimde', '7. madde', '24. madde'],
        sag: ['Savunmasız bırakmak', 'Örgütlenmeyi önlemek', 'Her yeri işgale bahane', 'Doğuda Ermeni devleti'],
        hint: 'Silahsız kalan savunamaz; haberleşemeyen örgütlenemez. Yedinci madde her yere, yirmi dördüncü madde altı ile bakar.',
        why: 'Terhis ve silah teslimi ülkeyi savunmasız bıraktı; haberleşme denetimi örgütlenmeyi engelledi. Yedinci madde her yeri işgal bahanesi, yirmi dördüncü madde ise altı ilde Ermeni devletine zemin hazırladı.' } },
    { t: 'İşgaller ve tepkiler',
      steps: [
        { s: 'Paris Barış Konferansı’nda İngiltere, Akdeniz’de güçlü bir İtalya istemediği için İzmir’i Yunanistan’a verdirdi.',
          h: '<div class="an-ex"><span class="an-l"><b>Wilson İlkeleri:</b> yenilenden toprak alınmaz; Türk çoğunluğuna egemenlik → İtilaf “manda” adıyla deldi</span><span class="an-l"><b>15 Mayıs 1919:</b> İzmir’in işgali; Hasan Tahsin ilk kurşunu attı</span><span class="an-l"><b>Amiral Bristol Raporu:</b> işgal haksız; Türklerin haklılığını gösteren ilk uluslararası belge</span></div>' },
        { s: '15 Mayıs 1919’da Yunanlılar İzmir’i işgal etti. Gazeteci Hasan Tahsin ilk kurşunu attı ve Kuvâ-yı Milliye ruhu doğdu.', v: 'On beş Mayıs bin dokuz yüz on dokuzda Yunanlılar İzmir’i işgal etti. Gazeteci Hasan Tahsin ilk kurşunu attı ve Kuvâyı Milliye ruhu doğdu.' },
        { s: 'Amiral Bristol Raporu ise işgalin haksız olduğunu ortaya koydu. Türk milletinin haklılığını gösteren ilk uluslararası belgedir.' },
        { s: 'Bu işgaller karşısında herkes aynı tavrı almadı. Üç tutumu karşılaştıralım.',
          h: '<div class="an-grid"><div><b>İstanbul Hükûmeti</b>teslimiyetçi, sessiz; nasihat heyetleri</div><div><b>Mustafa Kemal</b>“Geldikleri gibi giderler!” · kararlı</div><div><b>Türk halkı</b>cemiyetler ve Kuvâ-yı Milliye</div></div>' }
      ] },

    { t: 'Cemiyetler ve Kuvâ-yı Milliye',
      steps: [
        { s: 'Yararlı cemiyetler bölgeseldi; her biri kendi bölgesini korumak için kuruldu ve Sivas’ta tek çatı altında birleşti.',
          h: '<table class="an-tbl"><tr><th>Yararlı cemiyet</th><th>Bölge ve amaç</th></tr><tr><td>Trakya-Paşaeli M.H.</td><td>Trakya Yunan’a verilmesin</td></tr><tr><td>İzmir M.H. / Redd-i İlhak</td><td>Ege Yunan’a verilmesin</td></tr><tr><td>Doğu Anadolu M.H.</td><td>Doğu Ermenilere verilmesin</td></tr><tr><td>Trabzon Muhafaza-i Hukuk</td><td>Pontus Rum devleti kurulmasın</td></tr><tr><td>Kilikyalılar</td><td>Çukurova’yı savunmak</td></tr></table>', v: 'Yararlı cemiyetler bölgeseldi; her biri kendi bölgesini korumak için kuruldu ve Sivas’ta tek çatı altında birleşti.' },
        { s: 'Burada çok dikkat et: Kilikyalılar Cemiyeti’nin adı yabancı gibi durur ama yararlıdır. Çukurova’yı savunmak için kurulmuştur.',
          h: '<div class="an-trap">Kilikyalılar → <span class="an-ok-t">yararlı</span> · Mavri Mira, Pontus, Taşnak → azınlıkların <span class="an-bad-t">zararlı</span> cemiyetleri · İngiliz Muhipleri, Wilson Prensipleri → kurtuluşu mandada gören <span class="an-bad-t">zararlı</span> cemiyetler</div>' },
        { s: 'Kuvâ-yı Milliye ise ordu terhis edilip hükûmet sessiz kalınca halkın kendi kurduğu düzensiz direniş birlikleridir.', v: 'Kuvâyı Milliye ise ordu terhis edilip hükûmet sessiz kalınca halkın kendi kurduğu düzensiz direniş birlikleridir.',
          h: '<div class="an-grid" style="grid-template-columns:1fr 1fr"><div><b>Olumlu</b>düşmanı oyaladı, iç isyanları bastırdı, millî bilinci uyandırdı</div><div><b>Olumsuz</b>disiplinsiz, tek merkezden yönetilemedi, halktan zorla malzeme topladı</div></div>' },
        { s: 'Düzenli ordu kurulana kadar düşmanı oyaladı. Ama disiplinsizdi ve düşmanı yurttan atacak güçte değildi; bu yüzden yerini düzenli orduya bıraktı.' }
      ] },

    { t: 'Zararlı cemiyetleri ayıkla',
      steps: [{ s: 'Bu listede yararlı ve zararlı cemiyetler karışık. Zararlı olanların hepsini ele. Adına aldanma!' }],
      ia: { tip: 'eleme', q: '<p><b>Zararlı cemiyetlerin</b> hepsini ele.</p>',
        ogeler: ['Kilikyalılar Cemiyeti', 'Mavri Mira', 'Redd-i İlhak Cemiyeti', 'Taşnak Cemiyeti', 'Trabzon Muhafaza-i Hukuk', 'İngiliz Muhipleri', 'Trakya-Paşaeli Cemiyeti', 'Wilson Prensipleri'],
        ele: [1, 3, 5, 7],
        hint: 'Kendi bölgesini savunan cemiyet yararlıdır. Azınlıkların cemiyetleri ve kurtuluşu mandada görenler zararlıdır.',
        why: 'Mavri Mira ve Taşnak azınlık cemiyetleri; İngiliz Muhipleri ve Wilson Prensipleri kurtuluşu mandada gördü. Kilikyalılar adı yabancı gibi dursa da Çukurova’yı savunan yararlı bir cemiyettir.' } },
    { t: 'Ara soru', cp: {
        q: '<p>Mondros Ateşkesi’nden sonra Doğu Anadolu’da kurulan bir cemiyet, bölgenin Ermenilere verilmesini engellemek için gazeteler çıkarmış ve bir kongre toplamıştır. Batı Anadolu’da kurulan bir başka cemiyet ise İzmir ve çevresinin Yunanlılara verilmesine karşı çıkmıştır.</p><p>Bu bilgilere göre yararlı cemiyetlerle ilgili hangisi <b>söylenebilir</b>?</p>',
        c: ['Tek merkezden yönetildikleri', 'Bölgesel amaçlarla kuruldukları', 'Kurtuluşu manda yönetiminde gördükleri', 'İstanbul Hükûmeti’nin emriyle kuruldukları'], a: 'B',
        hint: 'İki cemiyetin amacını karşılaştır: her biri hangi bölgeyi korumaya çalışıyor?',
        why: 'Her cemiyet kendi bölgesini korumak için kurulmuştu: yararlı cemiyetler bölgeseldir. Sivas Kongresi’ne kadar tek çatı altında değillerdi; manda fikrini ise zararlı cemiyetler savunuyordu.' },
      steps: [{ s: 'Hadi bakalım. Metinde iki cemiyetin ortak özelliğini ara.' }] },

    { t: 'Samsun’dan Ankara’ya',
      base: '<svg class="an-svg" viewBox="0 0 340 150" role="img" aria-label="Samsun’dan Ankara’ya Millî Mücadele hazırlık yolu temsilî harita">' +
      '<defs><clipPath id="clUyanis"><rect x="0" y="0" width="340" height="150"/></clipPath></defs>' +
      '<polygon points="-127,18 -88,30 -60,46 -26,48 7,44 41,22 80,16 111,14 133,28 147,44 181,52 214,56 242,56 265,52 290,36 321,32 346,52 352,80 382,108 371,136 368,176 371,200 340,204 315,212 282,212 248,220 209,224 181,228 156,224 147,248 136,260 130,244 142,228 125,232 97,224 77,244 46,254 24,236 -4,222 -18,240 -43,248 -57,232 -82,226 -105,216 -110,180 -127,164 -119,140 -124,120 -138,112 -138,92 -124,80 -144,70 -138,48" fill="none" class="ln" stroke-width="1.6" clip-path="url(#clUyanis)"/>' +
      '<text x="60" y="20" font-size="10" class="mut">Karadeniz</text>' +
      '<path class="st dr r2" d="M145 44 L126 56"/>' +
      '<path class="st dr r3" d="M126 56 L131 70"/>' +
      '<path class="st dr r4" d="M131 70 L284 100"/>' +
      '<path class="st dr r5" d="M284 100 L164 106"/>' +
      '<path class="st dr r6" d="M164 106 L48 99"/>' +
      '<circle cx="145" cy="44" r="5" class="boxa rv r1"/>' +
      '<text x="154" y="41" font-size="11.5" text-anchor="start" font-weight="700" class="rv r1">Samsun · 19 May</text>' +
      '<circle cx="126" cy="56" r="5" class="boxa rv r2"/>' +
      '<text x="117" y="55" font-size="11.5" text-anchor="end" font-weight="700" class="rv r2">Havza · 28 May</text>' +
      '<circle cx="131" cy="70" r="5" class="boxa rv r3"/>' +
      '<text x="122" y="79" font-size="11.5" text-anchor="end" font-weight="700" class="rv r3">Amasya · 22 Haz</text>' +
      '<circle cx="284" cy="100" r="5" class="boxa rv r4"/>' +
      '<text x="284" y="119" font-size="11.5" text-anchor="middle" font-weight="700" class="rv r4">Erzurum · 23 Tem</text>' +
      '<circle cx="164" cy="106" r="5" class="boxa rv r5"/>' +
      '<text x="164" y="125" font-size="11.5" text-anchor="middle" font-weight="700" class="rv r5">Sivas · 4 Eyl</text>' +
      '<circle cx="48" cy="99" r="5" class="boxa rv r6"/>' +
      '<text x="48" y="118" font-size="11.5" text-anchor="middle" font-weight="700" class="rv r6">Ankara · 27 Ara</text>' +
      '<text x="335" y="146" font-size="10" text-anchor="end" class="mut">1919 · temsilî harita</text></svg>',
      steps: [
        { s: 'Şimdi Mustafa Kemal’in izini haritada sürelim. 19 Mayıs 1919’da geniş yetkilerle, 9. Ordu Müfettişi olarak Samsun’a çıktı.', v: 'Şimdi Mustafa Kemal’in izini haritada sürelim. On dokuz Mayıs bin dokuz yüz on dokuzda geniş yetkilerle, dokuzuncu Ordu Müfettişi olarak Samsun’a çıktı.', on: '.r1' },
        { s: 'Havza’da ilk genelgesini yayımladı: işgaller mitinglerle protesto edilsin, ama azınlıklara kötü davranılmasın.', on: '.r2' },
        { s: 'Neden azınlıklara kötü davranılmasın dedi? Çünkü Mondros’un yedinci maddesine göre yeni işgallere bahane verilmesin istedi.' },
        { s: 'Amasya’da Kurtuluş Savaşı’nın yol haritasını yayımladı. Sonra Erzurum’a geçip askerlikten istifa etti ve sivil olarak devam etti.', on: '.r3,.r4' },
        { s: 'Erzurum’dan sonra Sivas’ta kongre yapıldı; 27 Aralık 1919’da da Temsil Heyeti Ankara’ya geldi.', v: 'Erzurum’dan sonra Sivas’ta kongre yapıldı; yirmi yedi Aralık bin dokuz yüz on dokuzda da Temsil Heyeti Ankara’ya geldi.', on: '.r5,.r6' }
      ] },

    { t: 'Yolculukta tuzak var',
      steps: [{ s: 'Samsun’dan Ankara’ya uzanan yolculukla ilgili bu ifadelere bak. Hangisi doğru, hangisi yanlış?' }],
      ia: { tip: 'dogruyanlis', q: '<p>Her ifade için karar ver.</p>', ifadeler: [
          { m: 'Mustafa Kemal Samsun’a 9. Ordu Müfettişi olarak çıktı.', d: true, a: 'Geniş yetkili bir görevle, 19 Mayıs 1919’da.' },
          { m: 'Havza Genelgesi’nde azınlıklara karşı silahlı direniş istendi.', d: false, a: 'Tersine: azınlıklara kötü davranılmasın, yeni işgale bahane olmasın.' },
          { m: 'Mustafa Kemal askerlikten Sivas Kongresi’nden sonra istifa etti.', d: false, a: 'Erzurum Kongresi’nden önce, Erzurum’da istifa etti.' },
          { m: 'Kurtuluş Savaşı’nın yol haritası Amasya’da yayımlandı.', d: true, a: 'Amasya Genelgesi: neden, ne için, nasıl.' }],
        hint: 'Havza’da hedef yeni işgallere bahane vermemekti. İstifa, kongrelerin hangisinden önceydi?',
        why: 'Havza Genelgesi azınlıklara kötü davranılmamasını istedi; istifa Erzurum Kongresi’nden önce, Erzurum’da oldu. Samsun’a müfettiş olarak çıkış ve Amasya’daki yol haritası doğrudur.' } },
    { t: 'Amasya Genelgesi: yol haritası',
      base: '<table class="an-tbl"><tr><th>Madde (özetle)</th><th>Ne anlama gelir?</th></tr>' +
        '<tr class="rv g1"><td>Vatanın bütünlüğü, milletin bağımsızlığı tehlikededir.</td><td><b>Gerekçe</b></td></tr>' +
        '<tr class="rv g2"><td>İstanbul Hükûmeti sorumluluğunu yerine getiremiyor.</td><td><b>Gerekçe</b> · İstanbul’a ilk açık karşı çıkış</td></tr>' +
        '<tr class="rv g3"><td>Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır.</td><td><b>Amaç + yöntem</b> · millî egemenlik</td></tr>' +
        '<tr class="rv g4"><td>Her türlü etkiden uzak millî bir kurul oluşturulmalı; Sivas’ta kongre toplanacak.</td><td>Temsil Heyeti fikri · millî irade</td></tr></table>',
      steps: [
        { s: 'Amasya Genelgesi’ne Kurtuluş Savaşı’nın yol haritası denir. Çünkü neden, ne için ve nasıl savaşacağımızı söyler.' },
        { s: 'İlk iki madde gerekçedir: vatan tehlikede ve İstanbul Hükûmeti görevini yapamıyor.', on: '.g1,.g2' },
        { s: 'Üçüncü madde en önemlisi: “Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır.”', v: 'Üçüncü madde en önemlisi: Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır.', on: '.g3', mk: '.g3 td' },
        { s: 'Bu maddede amaç bağımsızlık, yöntem ise milletin kendi gücüdür. Millî egemenliğe ilk işaret de buradadır.' },
        { s: 'Son olarak Temsil Heyeti fikri ortaya atıldı ve her sancaktan seçilecek delegelerle Sivas’ta kongre toplanmasına karar verildi.', on: '.g4' }
      ] },

    { t: 'Erzurum ve Sivas kongreleri',
      base: '<table class="an-tbl"><tr><th></th><th>Erzurum<br><small>23 Tem – 7 Ağu 1919</small></th><th>Sivas<br><small>4 – 11 Eyl 1919</small></th></tr>' +
        '<tr class="rv z1"><td><b>Nitelik</b></td><td>toplanış bölgesel, kararlar ulusal</td><td>toplanış da kararlar da ulusal</td></tr>' +
        '<tr class="rv z2"><td><b>Manda</b></td><td>ilk kez reddedildi</td><td>kesin olarak reddedildi</td></tr>' +
        '<tr class="rv z3"><td><b>Temsil Heyeti</b></td><td>ilk kez kuruldu (9 kişi)</td><td>bütün vatanı temsil eder</td></tr>' +
        '<tr class="rv z4"><td><b>Cemiyetler</b></td><td>Doğu’dakiler birleşti</td><td>hepsi Anadolu ve Rumeli Müdafaa-i Hukuk adıyla birleşti</td></tr></table>',
      steps: [
        { s: 'Bu iki kongre sınavda hep karşılaştırılır. Yan yana koyalım.' },
        { s: 'Erzurum bölgesel olarak toplandı ama kararları ulusaldı. Sivas ise hem toplanışıyla hem kararlarıyla ulusaldı.', on: '.z1', mk: '.z1 td' },
        { s: 'Manda ve himaye ilk kez Erzurum’da reddedildi; millî sınırlardan da ilk kez Erzurum’da söz edildi. Sivas bunu kesinleştirdi.', on: '.z2' },
        { s: 'Temsil Heyeti Erzurum’da kuruldu, Sivas’ta bütün vatanı temsil eder hâle geldi.', on: '.z3' },
        { s: 'Sivas’ta bütün yararlı cemiyetler tek çatıda birleşti. Temsil Heyeti, Ali Fuat Paşa’yı Batı Cephesi komutanı atayarak hükûmet gibi davrandı.', on: '.z4' }
      ] },

    { t: 'Erzurum mu, Sivas mı?',
      steps: [{ s: 'Şimdi iki kongreyi ayıralım. Her bilgiyi ait olduğu kongrenin kutusuna yerleştir.' }],
      ia: { tip: 'grup', q: '<p>Her bilgiyi ait olduğu <b>kongreye</b> yerleştir.</p>', gruplar: ['Erzurum Kongresi', 'Sivas Kongresi'],
        ogeler: [{ m: 'Toplanışı bölgesel', g: 0 }, { m: 'Cemiyetler tek çatıda', g: 1 }, { m: 'Manda ilk kez reddedildi', g: 0 },
          { m: 'Ali Fuat Paşa atandı', g: 1 }, { m: 'Temsil Heyeti kuruldu', g: 0 }, { m: 'Toplanışı da ulusal', g: 1 }],
        hint: '“İlk kez” olanlar genellikle Erzurum’dadır. Bütün yurdu birleştiren adımlar Sivas’tadır.',
        why: 'Erzurum bölgesel toplandı; manda ilk kez orada reddedildi, Temsil Heyeti orada kuruldu. Sivas hem toplanışıyla hem kararlarıyla ulusaldı; cemiyetleri birleştirdi, Ali Fuat Paşa’yı atadı.' } },
    { t: 'Ara soru', cp: {
        q: '<p>“Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır.”</p><p>Amasya Genelgesi’ndeki bu maddeyle ilgili olarak aşağıdakilerden hangisi <b>söylenebilir</b>?</p>',
        c: ['Kurtuluş Savaşı’nın gerekçesi açıklanmıştır.', 'Millî Mücadele’nin amacı ve yöntemi belirlenmiştir.', 'Manda ve himaye ilk kez reddedilmiştir.', 'Bütün cemiyetler tek çatı altında birleştirilmiştir.'], a: 'B',
        hint: 'Maddede iki şey var: neye ulaşılmak isteniyor ve bu nasıl yapılacak?',
        why: 'Bağımsızlık amaçtır; milletin azim ve kararı ise yöntemdir. Gerekçe ilk iki maddededir; manda ilk kez Erzurum’da reddedildi, cemiyetler Sivas’ta birleşti.' },
      steps: [{ s: 'Şimdi bir madde yorumu. Ne söylediğine ve ne söylemediğine dikkat et.' }] },

    { t: 'Ankara’ya doğru: Misak-ı Millî',
      steps: [
        { s: 'Sivas’ı engellemek isteyen Damat Ferit, Mustafa Kemal İstanbul’la haberleşmeyi kesince istifa etti. Bu, Temsil Heyeti’nin ilk siyasi başarısıydı.' },
        { s: 'Ardından Amasya Görüşmeleri’yle İstanbul Hükûmeti, Temsil Heyeti’ni hukuken tanımış oldu.' },
        { s: 'Temsil Heyeti Ankara’yı merkez seçti: güvenliydi, Batı Cephesi’ne yakındı, demir yolu ve telgraf vardı.' },
        { s: 'İstanbul’da toplanan son Osmanlı Mebusan Meclisi, 28 Ocak 1920’de Misak-ı Millî’yi kabul etti. Yani millî yemin, yeni devletin sınırlarını çizdi.', v: 'İstanbul’da toplanan son Osmanlı Mebusan Meclisi, yirmi sekiz Ocak bin dokuz yüz yirmide Misak-ı Millî’yi kabul etti. Yani millî yemin, yeni devletin sınırlarını çizdi.',
          h: '<div class="an-ex"><span class="an-l"><b>Kapitülasyonlar</b> kaldırılacak → tam bağımsızlık</span><span class="an-l"><b>Azınlık hakları</b> komşulardaki Müslümanlarla karşılıklı</span><span class="an-l"><b>Referandum:</b> Batı Trakya, Kars-Ardahan-Batum, Arap toprakları</span><span class="an-l"><b>Ateşkes sınırı:</b> Mondros günü işgal edilmemiş Türk topraklar bölünmez</span><span class="an-l"><b>Boğazlar:</b> güvenlik sağlanırsa ticarete açılabilir</span></div>' },
        { s: 'Aklında kalsın diye kısa bir şifre: kapitülasyonlar, azınlıklar, referandum, ateşkes sınırı ve Boğazlar.' }
      ] },

    { t: 'Misak-ı Millî’yi tamamla',
      steps: [{ s: 'Misak-ı Millî’nin üç kararını tamamla. Çeldiricilere dikkat, biri çok tanıdık gelecek.' }],
      ia: { tip: 'bosluk', q: '<p>Boşlukları uygun kartlarla doldur.</p>',
        metin: 'Mondros günü işgal edilmemiş Türk toprakları [_].<br>Batı Trakya, Kars-Ardahan-Batum ve [_] için halk oylaması yapılır.<br>Kapitülasyonlar kaldırılır, çünkü amaç tam [_].',
        secenek: ['bölünmez', 'Arap toprakları', 'bağımsızlıktır', 'mandaya verilir', 'İzmir', 'özerkliktir'], cevap: ['bölünmez', 'Arap toprakları', 'bağımsızlıktır'],
        hint: 'Misak-ı Millî manda kabul etmez. Halk oylaması Türk çoğunluğu kesin olmayan yerler içindir; İzmir ateşkes sınırının içindedir.',
        why: 'Ateşkes sınırı içindeki Türk toprakları bölünmez; Arap topraklarında halk oylaması istenir; kapitülasyonların kaldırılması tam bağımsızlık demektir.' } },
    { t: '1920: Meclis açılıyor',
      base: '<svg class="an-svg" viewBox="0 0 340 150" role="img" aria-label="1920 yılı İstanbul’un işgalinden Sevr’e zaman şeridi">' +
      '<path class="st dr i1" d="M118 12 L118 142"/>' +
      '<circle cx="118" cy="22" r="6" class="box rv i1"/>' +
      '<text x="106" y="27" font-size="13" text-anchor="end" font-weight="700" class="mut rv i1">16 Mart 1920</text>' +
      '<text x="132" y="21" font-size="13" class="rv i1">İstanbul resmen işgal edildi</text>' +
      '<text x="132" y="36" font-size="11" class="mut rv i1">Mebusan Meclisi dağıldı</text>' +
      '<circle cx="118" cy="56" r="6" class="boxa rv i2"/>' +
      '<text x="106" y="61" font-size="13" text-anchor="end" font-weight="700" class="acc rv i2">23 Nisan 1920</text>' +
      '<text x="132" y="61" font-size="13" class="rv i2">TBMM Ankara’da açıldı</text>' +
      '<circle cx="118" cy="90" r="6" class="box rv i3"/>' +
      '<text x="106" y="95" font-size="13" text-anchor="end" font-weight="700" class="mut rv i3">24 Nisan 1920</text>' +
      '<text x="132" y="89" font-size="13" class="rv i3">Mustafa Kemal’in önergesi</text>' +
      '<text x="132" y="104" font-size="11" class="mut rv i3">meclisin üstünde güç yok</text>' +
      '<circle cx="118" cy="124" r="6" class="box rv i4"/>' +
      '<text x="106" y="129" font-size="13" text-anchor="end" font-weight="700" class="mut rv i4">10 Ağustos 1920</text>' +
      '<text x="132" y="123" font-size="13" class="rv i4">Sevr imzalandı</text>' +
      '<text x="132" y="138" font-size="11" class="mut rv i4">hukuken geçersiz, “ölü doğdu”</text>' +
      '</svg>',
      steps: [
        { s: 'Misak-ı Millî’ye kızan İtilaf Devletleri 16 Mart 1920’de İstanbul’u resmen işgal etti. Mebusan Meclisi çalışamaz hâle geldi.', v: 'Misak-ı Millî’ye kızan İtilaf Devletleri on altı Mart bin dokuz yüz yirmide İstanbul’u resmen işgal etti. Mebusan Meclisi çalışamaz hâle geldi.', on: '.i1' },
        { s: 'Bu olay Mustafa Kemal’i haklı çıkardı. 23 Nisan 1920’de Büyük Millet Meclisi Ankara’da açıldı.', v: 'Bu olay Mustafa Kemal’i haklı çıkardı. Yirmi üç Nisan bin dokuz yüz yirmide Büyük Millet Meclisi Ankara’da açıldı.', on: '.i2' },
        { s: 'Ertesi gün kabul edilen önergeyle “Meclisin üstünde hiçbir güç yoktur” denildi. Meclis yasama ve yürütmeyi kendinde topladı.', v: 'Ertesi gün kabul edilen önergeyle, meclisin üstünde hiçbir güç yoktur denildi. Meclis yasama ve yürütmeyi kendinde topladı.', on: '.i3',
          h: '<div class="an-rule">Ayaklanmalara karşı: <b>Hıyanet-i Vataniye Kanunu</b> → yasama yetkisi · <b>İstiklal Mahkemeleri</b> → yargı yetkisi</div>' },
        { s: 'İçerideki ayaklanmalara karşı Hıyanet-i Vataniye Kanunu çıkarıldı, bu yasama yetkisi. İstiklal Mahkemeleri kuruldu, bu da yargı yetkisi.', v: 'İçerideki ayaklanmalara karşı Hıyaneti Vataniye Kanunu çıkarıldı, bu yasama yetkisi. İstiklal Mahkemeleri kuruldu, bu da yargı yetkisi.' },
        { s: '10 Ağustos 1920’de Sevr imzalandı. Ama Mebusan Meclisi kapalıydı ve onaylamadı; bu yüzden Sevr hukuken geçersiz, ölü doğmuş bir antlaşmadır.', v: 'On Ağustos bin dokuz yüz yirmide Sevr imzalandı. Ama Mebusan Meclisi kapalıydı ve onaylamadı; bu yüzden Sevr hukuken geçersiz, ölü doğmuş bir antlaşmadır.', on: '.i4' }
      ] },

    { t: 'Kronoloji: genelgeden Sevr’e',
      steps: [{ s: 'Son bir kronoloji. Bu yedi gelişmeyi eskiden yeniye sırala.' }],
      ia: { tip: 'sirala', q: '<p>Gelişmeleri <b>eskiden yeniye</b> sırala.</p>', ust: 'en eski', alt: 'en yeni',
        ogeler: ['Amasya Genelgesi', 'Erzurum Kongresi', 'Sivas Kongresi', 'Misak-ı Millî kabul edildi', 'İstanbul resmen işgal edildi', 'TBMM açıldı', 'Sevr imzalandı'],
        hint: 'Genelge kongrelerden önce gelir. İstanbul’un işgali Misak-ı Millî’ye tepkidir ve meclisin Ankara’da açılmasına yol açar.',
        why: 'Haziran 1919 Amasya, Temmuz Erzurum, Eylül Sivas; Ocak 1920 Misak-ı Millî, 16 Mart İstanbul’un işgali, 23 Nisan TBMM, 10 Ağustos Sevr.' } },
    { t: 'Ara soru', cp: {
        q: '<p>Mustafa Kemal, Haziran 1919’da yayımladığı bir genelgede askerî birliklerin hiçbir şekilde dağıtılmamasını, silah ve cephanenin teslim edilmemesini istemiştir.</p><p>Bu bilgiyi değerlendiren bir öğrencinin aşağıdaki yorumlarından hangisi <b>yanlıştır</b>?</p>',
        c: ['Mondros’un silah teslimi hükmüne karşı çıkılmıştır.', 'İşgallere karşı direnme hazırlığı yapılmıştır.', 'Bu istek TBMM’nin yürütme yetkisine dayanılarak yapılmıştır.', 'Mustafa Kemal’in kararlı ve bağımsızlıkçı bir tutum sergilediği görülmektedir.'], a: 'C',
        hint: 'Tarihe bak: Haziran 1919. O tarihte hangi kurumlar vardı, hangileri henüz yoktu?',
        why: 'TBMM 23 Nisan 1920’de açıldı; Haziran 1919’da henüz yoktu. Kronoloji tuzağı: o tarihte olmayan bir kurum ya da yetki seçeneğe konursa yanlıştır.',
        whyV: 'Büyük Millet Meclisi yirmi üç Nisan bin dokuz yüz yirmide açıldı; Haziran bin dokuz yüz on dokuzda henüz yoktu. Kronoloji tuzağı: o tarihte olmayan bir kurum ya da yetki seçeneğe konursa yanlıştır.' },
      steps: [{ s: 'Son soru, en sevilen tuzak! Tarihlere dikkat et.' }] }
  ]
};
