/* Adım Adım Anlatım · İnkılap Tarihi · Bir Kahraman Doğuyor (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['ink-kahraman'] = {
  title: 'Bir Kahraman Doğuyor',
  desc: 'Avrupa’daki gelişmelerden Osmanlı’nın kurtuluş arayışlarına, Mustafa Kemal’in çocukluğundan Trablusgarp ve Balkan Savaşları’na; LGS’nin sevdiği kişilik çıkarımı tuzaklarıyla.',
  ozet: [
    'Fransız İhtilali (1789) milliyetçilik ve özgürlük fikirlerini yaydı; çok uluslu Osmanlı’yı parçaladı, İtalya ve Almanya’yı birleştirdi.',
    'Sanayi İnkılabı ham madde ve pazar ihtiyacı doğurdu; Osmanlı Avrupa’nın ham madde kaynağı ve açık pazarı oldu, yerli üretim geriledi.',
    'Tanzimat (1839) ve Islahat (1856) fermandır, anayasa değildir. İlk anayasa Kanun-i Esasi’dir (1876, I. Meşrutiyet). II. Meşrutiyet 1908’de ilan edildi.',
    'Fikir akımlarının ortak amacı devleti kurtarmaktır. Gayrimüslim Balkan milletlerinin ayrılması Osmanlıcılığı, Müslüman Arnavut ve Arapların ayrılması İslamcılığı geçersiz kıldı.',
    'Mustafa Kemal 1881’de Selanik’te doğdu; “Kemal” adını Askerî Rüştiyedeki matematik öğretmeni verdi. Manastır’da edebiyat, hitabet ve tarihe ilgi duydu.',
    '1906 Şam’da Vatan ve Hürriyet; 1909 Hareket Ordusu kurmay başkanı; 1911–1912 Trablusgarp (Tobruk, Derne); 1912–1913 Balkan Savaşları (Bolayır); 1913 Sofya askerî ataşesi.',
    'Uşi (1912): Trablusgarp ve Bingazi İtalya’ya bırakıldı, Kuzey Afrika’daki son toprak kaybedildi. Balkan Savaşları’nda Edirne geri alındı, Meriç sınır oldu.',
    'Kişilik sorusunda seçenekteki her özelliğin metinde dayanağı olmalı; başka döneme ait bilgi (Anafartalar gibi) çeldiricidir.'
  ],
  scenes: [
    { t: 'Avrupa değişiyor, Osmanlı sarsılıyor',
      base: '<div class="an-grid" style="grid-template-columns:1fr 1fr"><div class="rv a1"><b>Fransız İhtilali (1789)</b>milliyetçilik, eşitlik, özgürlük, millî egemenlik</div><div class="rv a2"><b>Sanayi İnkılabı</b>makineyle bol ve ucuz üretim → ham madde ve pazar ihtiyacı</div></div>',
      steps: [
        { s: 'Hoş geldin! Mustafa Kemal’in hikâyesine geçmeden önce, onun doğduğu dünyaya bir bakalım. Çünkü her şey Avrupa’da başladı.' },
        { s: '1789’da Fransız İhtilali oldu. Milliyetçilik, eşitlik, özgürlük ve millî egemenlik gibi fikirler bütün Avrupa’ya yayıldı.', on: '.a1' },
        { s: 'Aynı dönemde İngiltere’de Sanayi İnkılabı başladı. Fabrikalar makineyle çok ve ucuz üretmeye başladı.', on: '.a2' },
        { s: 'Peki fabrikaların neye ihtiyacı vardı? Ham maddeye ve ürünlerini satacakları pazara. İşte sömürgecilik yarışı buradan doğdu.' },
        { s: 'Bir ipucu vereyim: Fransız İhtilali daha çok siyasi, Sanayi İnkılabı ise daha çok ekonomik sonuçların kaynağıdır.', h: '<div class="an-tip"><b>Kısa yol:</b> Fransız İhtilali → siyasi etkiler · Sanayi İnkılabı → ekonomik etkiler</div>' }
      ] },

    { t: 'Etkiler: Osmanlı’ya ne oldu?',
      steps: [
        { s: 'Önce milliyetçiliğe bakalım. Osmanlı çok uluslu bir devletti; bu fikir Sırpları ve Rumları isyana götürdü.',
          h: '<table class="an-tbl"><tr><th>Gelişme</th><th>Osmanlı’ya yansıması</th></tr><tr class="rv e1"><td><b>Milliyetçilik</b></td><td>Sırp (1804) ve Rum (1821) isyanları; Yunanistan bağımsız (1830)</td></tr><tr class="rv e2"><td><b>Sanayi İnkılabı</b></td><td>Yerli el tezgâhları geriledi; Osmanlı ham madde kaynağı ve açık pazar oldu</td></tr><tr class="rv e3"><td><b>Sömürgecilik</b></td><td>Cezayir 1830, Tunus 1881, Mısır 1882, Trablusgarp 1912 kaybedildi</td></tr></table>', on: '.e1' },
        { s: 'Sanayi İnkılabı ise ekonomiyi vurdu. Ucuz Avrupa malları çarşıları doldurdu, yerli dokumacılık geriledi.', on: '.e2' },
        { s: 'Osmanlı ham pamuğu, yünü satıyor, karşılığında fabrika ürünü alıyordu. Kısacası Avrupa’nın ham madde kaynağı ve açık pazarı oldu.' },
        { s: 'Sömürgecilik yüzünden de Kuzey Afrika’daki topraklar birer birer elden çıktı.', on: '.e3' },
        { s: 'Burada çok dikkat et, LGS’de sevilen bir tuzak bu: milliyetçilik herkesi aynı şekilde etkilemedi.',
          h: '<div class="an-trap"><b>Milliyetçilik:</b> parçalı İtalya (1870) ve Almanya (1871) için <b>birleştirici</b>; Osmanlı ve Avusturya-Macaristan gibi çok uluslu devletler için <b>parçalayıcı</b>.</div>' }
      ] },

    { t: 'Hangi gelişmenin etkisi?',
      steps: [{ s: 'Şimdi sıra sende. Her sonucu doğuran gelişmenin kutusuna yerleştir. Siyasi mi, ekonomik mi, önce bunu düşün.' }],
      ia: { tip: 'grup', q: '<p>Her sonucu, onu doğuran gelişmenin kutusuna yerleştir.</p>', gruplar: ['Fransız İhtilali', 'Sanayi İnkılabı'],
        ogeler: [{ m: 'Sırp isyanı (1804)', g: 0 }, { m: 'Yerli dokumacılık geriledi', g: 1 }, { m: 'Yunanistan bağımsız oldu', g: 0 },
          { m: 'Ham madde ve pazar arayışı', g: 1 }, { m: 'Almanya’nın birliği (1871)', g: 0 }, { m: 'Osmanlı açık pazar oldu', g: 1 }],
        hint: 'Milliyetçilik ve bağımsızlık siyasi bir sonuçtur; üretim, ticaret ve pazar ise ekonomiktir.',
        why: 'İsyanlar, bağımsızlıklar ve birleşmeler milliyetçiliğin, yani Fransız İhtilali’nin sonucudur. Ham madde arayışı, açık pazar ve gerileyen yerli üretim ise Sanayi İnkılabı’nın.' } },
    { t: 'Ara soru', cp: {
        q: '<p>19. yüzyılda Osmanlı limanlarından Avrupa’ya ham ipek, yün ve tütün gönderilirken Avrupa fabrikalarında üretilen ucuz kumaşlar Osmanlı çarşılarında yerli kumaşların yerini almıştır.</p><p>Bu durum aşağıdakilerden hangisinin <b>Osmanlı ekonomisine etkisini</b> gösterir?</p>',
        c: ['Fransız İhtilali’nin yaydığı milliyetçilik fikrinin', 'Sanayi İnkılabı’nın ortaya çıkardığı ham madde ve pazar arayışının', 'Tanzimat Fermanı ile getirilen kanun önünde eşitliğin', 'Balkan Savaşları’ndan sonra yaşanan göçlerin'], a: 'B',
        hint: 'Metin siyasi bir gelişmeden değil, ham madde satıp fabrika ürünü almaktan söz ediyor.',
        why: 'Ham madde dışarı gidiyor, fabrika ürünü içeri giriyor: bu, Sanayi İnkılabı’nın Osmanlı’yı ham madde kaynağı ve açık pazar hâline getirdiğini gösterir.' },
      steps: [{ s: 'Şimdi sıra sende. Metni dikkatle oku, şıkkı seç ve İşaretle’ye bas.', v: 'Şimdi sıra sende. Metni dikkatle oku, şıkkı seç ve işaretle düğmesine bas.' }] },

    { t: 'Yenileşme: Tanzimat’tan Meşrutiyet’e',
      base: '<svg class="an-svg" viewBox="0 0 340 218" role="img" aria-label="Tanzimat Fermanı’ndan 31 Mart Olayı’na zaman şeridi">' +
      '<path class="st dr t1" d="M92 12 L92 210"/>' +
      '<circle cx="92" cy="22" r="6" class="box rv t1"/>' +
      '<text x="80" y="27" font-size="13" text-anchor="end" font-weight="700" class="mut rv t1">1839</text>' +
      '<text x="106" y="21" font-size="13" class="rv t1">Tanzimat Fermanı</text>' +
      '<text x="106" y="36" font-size="11" class="mut rv t1">Abdülmecid · kanun önünde eşitlik</text>' +
      '<circle cx="92" cy="56" r="6" class="box rv t2"/>' +
      '<text x="80" y="61" font-size="13" text-anchor="end" font-weight="700" class="mut rv t2">1856</text>' +
      '<text x="106" y="55" font-size="13" class="rv t2">Islahat Fermanı</text>' +
      '<text x="106" y="70" font-size="11" class="mut rv t2">gayrimüslimlere yeni haklar</text>' +
      '<circle cx="92" cy="90" r="6" class="boxa rv t3"/>' +
      '<text x="80" y="95" font-size="13" text-anchor="end" font-weight="700" class="acc rv t3">1876</text>' +
      '<text x="106" y="89" font-size="13" class="rv t3">I. Meşrutiyet · Kanun-i Esasi</text>' +
      '<text x="106" y="104" font-size="11" class="mut rv t3">ilk anayasa, 1877’de meclis açıldı</text>' +
      '<circle cx="92" cy="124" r="6" class="box rv t4"/>' +
      '<text x="80" y="129" font-size="13" text-anchor="end" font-weight="700" class="mut rv t4">1878</text>' +
      '<text x="106" y="123" font-size="13" class="rv t4">Meclis kapatıldı</text>' +
      '<text x="106" y="138" font-size="11" class="mut rv t4">93 Harbi gerekçesiyle</text>' +
      '<circle cx="92" cy="158" r="6" class="boxa rv t5"/>' +
      '<text x="80" y="163" font-size="13" text-anchor="end" font-weight="700" class="acc rv t5">1908</text>' +
      '<text x="106" y="157" font-size="13" class="rv t5">II. Meşrutiyet</text>' +
      '<text x="106" y="172" font-size="11" class="mut rv t5">anayasa yeniden yürürlükte</text>' +
      '<circle cx="92" cy="192" r="6" class="box rv t6"/>' +
      '<text x="80" y="197" font-size="13" text-anchor="end" font-weight="700" class="mut rv t6">1909</text>' +
      '<text x="106" y="191" font-size="13" class="rv t6">31 Mart Olayı</text>' +
      '<text x="106" y="206" font-size="11" class="mut rv t6">Hareket Ordusu bastırdı</text>' +
      '</svg>',
      steps: [
        { s: 'Osmanlı dağılmayı durdurmak, gayrimüslimleri devlete bağlamak ve Avrupa’nın iç işlere karışmasını önlemek için yenilik yaptı.' },
        { s: '1839’da Tanzimat Fermanı geldi. Padişah ilk kez kendi yetkisini kanunla sınırladı; herkes kanun önünde eşit sayıldı.', v: 'Bin sekiz yüz otuz dokuzda Tanzimat Fermanı geldi. Padişah ilk kez kendi yetkisini kanunla sınırladı; herkes kanun önünde eşit sayıldı.', on: '.t1' },
        { s: '1856’daki Islahat Fermanı ise gayrimüslimlere memur olabilme, okul açabilme gibi yeni haklar verdi.', on: '.t2' },
        { s: '1876’da İkinci Abdülhamid ilk anayasamız Kanun-i Esasi’yi ilan etti. Buna Birinci Meşrutiyet diyoruz.', v: 'Bin sekiz yüz yetmiş altıda İkinci Abdülhamid, ilk anayasamız Kanun-i Esasi’yi ilan etti. Buna Birinci Meşrutiyet diyoruz.', on: '.t3' },
        { s: 'Ama meclis kısa ömürlü oldu: 93 Harbi gerekçe gösterilerek 1878’de kapatıldı.', v: 'Ama meclis kısa ömürlü oldu: doksan üç Harbi gerekçe gösterilerek bin sekiz yüz yetmiş sekizde kapatıldı.', on: '.t4' },
        { s: '1908’de anayasa yeniden yürürlüğe girdi, bu İkinci Meşrutiyet. Bir yıl sonra 31 Mart Olayı çıktı ve Hareket Ordusu bunu bastırdı.', v: 'Bin dokuz yüz sekizde anayasa yeniden yürürlüğe girdi, bu İkinci Meşrutiyet. Bir yıl sonra otuz bir Mart Olayı çıktı ve Hareket Ordusu bunu bastırdı.', on: '.t5,.t6' }
      ] },

    { t: 'Ferman mı, anayasa mı?',
      steps: [
        { s: 'Şimdi şuna bir bakalım, çünkü sınavda sık karıştırılıyor: Tanzimat ve Islahat birer fermandır, anayasa değildir.',
          h: '<div class="an-trap">Tanzimat (1839) ve Islahat (1856) → padişahın iradesiyle ilan edilen <b>ferman</b><br>İlk anayasa → <b>Kanun-i Esasi (1876)</b></div>' },
        { s: 'İki yönetim kavramını da bil: mutlakiyette bütün yetki hükümdardadır. Meşrutiyette ise hükümdarın yanında seçilmiş bir meclis de vardır.',
          h: '<div class="an-grid" style="grid-template-columns:1fr 1fr"><div><b>Mutlakiyet</b>bütün yetki hükümdarda</div><div><b>Meşrutiyet</b>hükümdar + seçilmiş meclis</div></div>' },
        { s: 'Ama dikkat: Meşrutiyette egemenlik tamamen millete geçmedi. Padişah vardı ve son söz yine ondaydı.' }
      ] },

    { t: 'Yenileşme sırası',
      steps: [{ s: 'Tarihleri saklıyorum. Bu gelişmeleri yaşandıkları sıraya koyabilir misin? En eskiden başla.' }],
      ia: { tip: 'sirala', q: '<p>Gelişmeleri <b>eskiden yeniye</b> sırala.</p>', ust: 'en eski', alt: 'en yeni',
        ogeler: ['Tanzimat Fermanı', 'Islahat Fermanı', 'Kanun-i Esasi ilan edildi', 'Meclis kapatıldı', 'II. Meşrutiyet ilan edildi', '31 Mart Olayı'],
        hint: 'İki ferman anayasadan önce gelir. Meclis 93 Harbi yüzünden kapandı; 31 Mart Olayı ise İkinci Meşrutiyet’e karşı çıktı.',
        why: 'Tanzimat 1839, Islahat 1856, Kanun-i Esasi 1876, meclisin kapanması 1878, İkinci Meşrutiyet 1908, 31 Mart Olayı 1909. Fermanlar anayasadan önce gelir; ferman anayasa değildir.' } },
    { t: 'Devleti kurtarma fikirleri',
      base: '<div class="an-grid" style="grid-template-columns:1fr 1fr"><div class="rv f1"><b>Osmanlıcılık</b>din, dil, soy ayırmadan herkesi birleştir</div><div class="rv f2"><b>İslamcılık</b>bütün Müslümanları halife etrafında topla</div><div class="rv f3"><b>Türkçülük</b>Türklerin dil, tarih, kültür birliği</div><div class="rv f4"><b>Batıcılık</b>Batı’nın bilim ve kurumlarını örnek al</div></div>',
      steps: [
        { s: 'Aydınlar “Devleti nasıl kurtarırız?” diye düşündü ve dört fikir akımı doğdu. Hepsinin amacı aynıydı: devleti dağılmaktan kurtarmak.', v: 'Aydınlar, devleti nasıl kurtarırız diye düşündü ve dört fikir akımı doğdu. Hepsinin amacı aynıydı: devleti dağılmaktan kurtarmak.' },
        { s: 'Osmanlıcılık, din ya da soy ayırmadan herkesi Osmanlı milleti çatısında birleştirmek istedi. Namık Kemal bu akımın önemli adıdır.', on: '.f1' },
        { s: 'İslamcılık, bütün Müslümanları halifenin etrafında toplamayı önerdi. İkinci Abdülhamid döneminde devlet politikası oldu.', on: '.f2' },
        { s: 'Türkçülük, dil ve kültür birliğine dayandı. Ziya Gökalp öncüsüdür ve Atatürk’ün milliyetçilik anlayışına kaynaklık etti.', on: '.f3' },
        { s: 'Batıcılık ise Batı’nın bilimini, tekniğini ve kurumlarını örnek almayı savundu.', on: '.f4' },
        { s: 'Hangi akım neden çöktü? Ayrılan grubun dinine bak, cevap kendiliğinden çıkar.',
          h: '<div class="an-rule">Gayrimüslim Balkan milletleri ayrıldı → <b>Osmanlıcılık</b> çöktü<br>Müslüman Arnavutlar (1912) ve bazı Araplar (1916) ayrıldı → <b>İslamcılık</b> çöktü</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>1912’de Müslüman Arnavutlar bağımsızlıklarını ilan etmiş, Birinci Dünya Savaşı sırasında da bazı Arap grupları İngilizlerle birlikte Osmanlı’ya karşı ayaklanmıştır.</p><p>Bu gelişmeler en çok hangi fikir akımının <b>geçerliliğini yitirdiğini</b> gösterir?</p>',
        c: ['Osmanlıcılık', 'İslamcılık', 'Türkçülük', 'Batıcılık'], a: 'B',
        hint: 'Ayrılan grupların dinine bak. Hangi akım bu insanları ortak dinleri etrafında tutmayı umuyordu?',
        why: 'Ayrılanlar Müslümandı. Müslümanları halife etrafında birleştirmeyi amaçlayan İslamcılık bu gelişmelerle etkisini yitirdi.' },
      steps: [{ s: 'Hadi bakalım, bu soruda ayrılan grupların kim olduğuna dikkat et.' }] },

    { t: '1900’lerin başında Avrupa',
      base: '<table class="an-tbl"><tr><th>Devlet</th><th>Hedefi</th></tr>' +
        '<tr class="rv d1"><td><b>İngiltere</b></td><td>Hindistan yolunu korumak (Süveyş, Mısır, Kıbrıs)</td></tr>' +
        '<tr class="rv d2"><td><b>Fransa</b></td><td>Alsas-Loren’i Almanya’dan geri almak</td></tr>' +
        '<tr class="rv d3"><td><b>Rusya</b></td><td>Sıcak denizler, Boğazlar; Panslavizm</td></tr>' +
        '<tr class="rv d4"><td><b>Almanya · İtalya</b></td><td>Birliğini geç kurdu (1871 · 1870); sömürge ve pazar arıyor</td></tr></table>',
      steps: [
        { s: 'Yirminci yüzyılın başında Osmanlı hâlâ geniş topraklara sahipti, ama ekonomik olarak dışa bağımlı, siyasi olarak yalnızdı.' },
        { s: 'İngiltere, sömürgelerinin incisi Hindistan’ın yolunu korumak istiyordu.', on: '.d1' },
        { s: 'Fransa, Almanya’ya kaptırdığı Alsas-Loren bölgesini geri almanın peşindeydi.', on: '.d2' },
        { s: 'Rusya sıcak denizlere inmek ve Boğazları ele geçirmek istiyordu. Balkan Slavlarını da Panslavizmle destekliyordu.', on: '.d3' },
        { s: 'Almanya ve İtalya ise birliklerini geç kurmuştu; sömürge ve pazar arıyorlardı. İtalya’nın gözü Trablusgarp’taydı, bunu birazdan göreceğiz.', on: '.d4' }
      ] },

    { t: 'Kim ne istiyordu?',
      steps: [{ s: 'Büyük devletlerin her birinin başka bir hedefi vardı. Her devleti hedefiyle eşleştir.' }],
      ia: { tip: 'eslestir', q: '<p>Her devleti, 20. yüzyıl başındaki <b>hedefiyle</b> eşleştir.</p>', solBaslik: 'Devlet', sagBaslik: 'Hedefi',
        sol: ['İngiltere', 'Fransa', 'Rusya', 'İtalya'], sag: ['Hindistan yolunu korumak', 'Alsas-Loren’i geri almak', 'Boğazlara inmek', 'Trablusgarp’ı almak'],
        hint: 'Sömürgesi en büyük olan, yolunu korur. Toprak kaybeden, geri almak ister. Sıcak denizleri isteyen kuzeydeki devlettir.',
        why: 'İngiltere Hindistan yolunu, Fransa Almanya’ya kaptırdığı Alsas-Loren’i, Rusya Boğazları ve sıcak denizleri, birliğini geç kuran İtalya ise Trablusgarp’ı istiyordu.' } },
    { t: 'Mustafa Kemal’in çocukluğu ve okulları',
      base: '<svg class="an-svg" viewBox="0 0 340 184" role="img" aria-label="Mustafa Kemal’in 1881-1905 öğrenim yılları zaman şeridi">' +
      '<path class="st dr m1" d="M92 12 L92 176"/>' +
      '<circle cx="92" cy="22" r="6" class="box rv m1"/>' +
      '<text x="80" y="27" font-size="13" text-anchor="end" font-weight="700" class="mut rv m1">1881</text>' +
      '<text x="106" y="21" font-size="13" class="rv m1">Selanik’te doğdu</text>' +
      '<text x="106" y="36" font-size="11" class="mut rv m1">baba Ali Rıza Efendi · anne Zübeyde Hanım</text>' +
      '<circle cx="92" cy="56" r="6" class="boxa rv m2"/>' +
      '<text x="80" y="61" font-size="13" text-anchor="end" font-weight="700" class="acc rv m2">1893</text>' +
      '<text x="106" y="55" font-size="13" class="rv m2">Selanik Askerî Rüştiyesi</text>' +
      '<text x="106" y="70" font-size="11" class="mut rv m2">öğretmeni ona “Kemal” adını verdi</text>' +
      '<circle cx="92" cy="90" r="6" class="box rv m3"/>' +
      '<text x="80" y="95" font-size="13" text-anchor="end" font-weight="700" class="mut rv m3">1896</text>' +
      '<text x="106" y="89" font-size="13" class="rv m3">Manastır Askerî İdadisi</text>' +
      '<text x="106" y="104" font-size="11" class="mut rv m3">edebiyat, hitabet, tarih, Fransızca</text>' +
      '<circle cx="92" cy="124" r="6" class="box rv m4"/>' +
      '<text x="80" y="129" font-size="13" text-anchor="end" font-weight="700" class="mut rv m4">1899</text>' +
      '<text x="106" y="123" font-size="13" class="rv m4">İstanbul · Harbiye</text>' +
      '<text x="106" y="138" font-size="11" class="mut rv m4">1902’de teğmen</text>' +
      '<circle cx="92" cy="158" r="6" class="boxa rv m5"/>' +
      '<text x="80" y="163" font-size="13" text-anchor="end" font-weight="700" class="acc rv m5">1905</text>' +
      '<text x="106" y="157" font-size="13" class="rv m5">Harp Akademisi bitti</text>' +
      '<text x="106" y="172" font-size="11" class="mut rv m5">kurmay yüzbaşı, Şam’a atandı</text>' +
      '</svg>',
      steps: [
        { s: 'Şimdi kahramanımıza geliyoruz. Mustafa Kemal 1881’de, çok kültürlü bir liman şehri olan Selanik’te doğdu.', v: 'Şimdi kahramanımıza geliyoruz. Mustafa Kemal bin sekiz yüz seksen birde, çok kültürlü bir liman şehri olan Selanik’te doğdu.', on: '.m1' },
        { s: 'Annesi onu mahalle mektebine, babası yeni yöntemli Şemsi Efendi Okulu’na göndermek istedi. Önce mahalle mektebine başladı, sonra Şemsi Efendi’ye geçti.' },
        { s: 'Mülkiye Rüştiyesinde Kaymak Hafız’ın haksız dayağı üzerine okulu bıraktı. Haksızlığa boyun eğmeyen bir çocuktu.' },
        { s: 'Sonra annesinden habersiz Askerî Rüştiye sınavına girip kazandı. Matematik öğretmeni Mustafa Sabri Bey ona “Kemal” adını verdi.', on: '.m2' },
        { s: 'Manastır Askerî İdadisinde arkadaşı Ömer Naci ile edebiyata ve hitabete, öğretmeni Mehmet Tevfik Bey ile tarihe ilgi duydu; Fransızca öğrendi.', on: '.m3' },
        { s: 'İstanbul’da Harbiye’yi teğmen, Harp Akademisini 1905’te kurmay yüzbaşı olarak bitirdi.', v: 'İstanbul’da Harbiye’yi teğmen, Harp Akademisini bin dokuz yüz beşte kurmay yüzbaşı olarak bitirdi.', on: '.m4,.m5' }
      ] },

    { t: 'Okul okul Mustafa Kemal',
      steps: [{ s: 'Mustafa Kemal’in okullarını sırayla diz. Önce mahalle mektebi, en sonda kurmay olduğu okul.' }],
      ia: { tip: 'sirala', q: '<p>Mustafa Kemal’in okullarını <b>okuduğu sıraya</b> koy.</p>', ust: 'ilk okul', alt: 'son okul',
        ogeler: ['Şemsi Efendi Okulu', 'Mülkiye Rüştiyesi', 'Selanik Askerî Rüştiyesi', 'Manastır Askerî İdadisi', 'İstanbul Harbiye', 'Harp Akademisi'],
        hint: 'Kaymak Hafız olayı askerî okuldan önce yaşandı. İdadi rüştiyeden sonra gelir; kurmaylık en son okulda kazanılır.',
        why: 'Şemsi Efendi, Mülkiye Rüştiyesi, Askerî Rüştiye, Manastır Askerî İdadisi, Harbiye ve Harp Akademisi. “Kemal” adı Askerî Rüştiyede, kurmay yüzbaşılık 1905’te Harp Akademisinde.' } },
    { t: 'Fikirlerini besleyen kişiler ve olaylar',
      steps: [
        { s: 'Gençliğinde okuduğu yazarlar onun düşünce dünyasını şekillendirdi.',
          h: '<div class="an-grid"><div><b>Namık Kemal</b>vatan, hürriyet</div><div><b>Tevfik Fikret</b>akıl, bilim, özgürlük</div><div><b>Ziya Gökalp</b>millî kültür, Türkçülük</div></div>' },
        { s: 'Fransız düşünürler Montesquieu, Rousseau ve Voltaire’den de kuvvetler ayrılığı ve millî egemenlik fikirlerini tanıdı.', v: 'Fransız düşünürler Monteskiyö, Russo ve Volter’den de kuvvetler ayrılığı ve millî egemenlik fikirlerini tanıdı.' },
        { s: 'Yaşadığı yerler de iz bıraktı. Manastır’da Balkan çetelerini görünce milliyetçiliğin çok uluslu devlet için ne kadar tehlikeli olduğunu anladı.',
          h: '<div class="an-ex"><span class="an-l"><b>Selanik:</b> Avrupa’ya açık şehir, yeni fikirler</span><span class="an-l"><b>Manastır:</b> çete faaliyetleri → milliyetçiliğin tehlikesi</span><span class="an-l"><b>1897 Türk-Yunan Savaşı:</b> savaşta kazanılan, masada kaybedildi</span></div>' },
        { s: '1897 Türk-Yunan Savaşı’nda kazanılan zaferin barış masasında korunamaması, ona dış politikanın iyi yönetilmediğini düşündürdü.', v: 'Bin sekiz yüz doksan yedi Türk-Yunan Savaşı’nda kazanılan zaferin barış masasında korunamaması, ona dış politikanın iyi yönetilmediğini düşündürdü.' }
      ] },

    { t: 'Askerlik yılları: 1905–1914',
      base: '<svg class="an-svg" viewBox="0 0 340 230" role="img" aria-label="Mustafa Kemal’in 1905-1914 arasında bulunduğu yerler, temsilî konum şeması">' +
      '<text x="170" y="14" font-size="11" text-anchor="middle" class="mut">temsilî konumlar · ölçekli değildir</text>' +
      '<path class="ln" d="M20 150 Q90 136 150 150 T250 160 L330 170" stroke-dasharray="4 4"/>' +
      '<text x="300" y="186" font-size="10" text-anchor="middle" class="mut">Akdeniz</text>' +
      '<circle cx="78" cy="58" r="5" class="boxa rv k2"/><text x="66" y="62" font-size="13" text-anchor="end" font-weight="700" class="rv k2">Selanik</text><text x="66" y="76" font-size="10" text-anchor="end" class="mut rv k2">1907–1909</text>' +
      '<circle cx="128" cy="34" r="5" class="boxa rv k5"/><text x="138" y="30" font-size="13" font-weight="700" class="rv k5">Sofya</text><text x="138" y="44" font-size="10" class="mut rv k5">1913–1915 ataşe</text>' +
      '<circle cx="150" cy="82" r="5" class="boxa rv k4"/><text x="160" y="80" font-size="13" font-weight="700" class="rv k4">Gelibolu (Bolayır)</text><text x="160" y="94" font-size="10" class="mut rv k4">1912–1913</text>' +
      '<circle cx="292" cy="128" r="5" class="boxa rv k1"/><text x="292" y="114" font-size="13" text-anchor="middle" font-weight="700" class="rv k1">Şam</text><text x="292" y="146" font-size="10" text-anchor="middle" class="mut rv k1">1905–1907</text>' +
      '<circle cx="286" cy="200" r="4" class="box rv k3"/><text x="286" y="218" font-size="11" text-anchor="middle" class="mut rv k3">Mısır (İngiliz)</text>' +
      '<circle cx="150" cy="192" r="5" class="boxa rv k3"/><text x="150" y="212" font-size="13" text-anchor="middle" font-weight="700" class="rv k3">Tobruk · Derne</text>' +
      '<text x="60" y="200" font-size="13" text-anchor="middle" font-weight="700" class="rv k3">Trablusgarp</text><text x="60" y="214" font-size="10" text-anchor="middle" class="mut rv k3">1911–1912</text>' +
      '<path class="st2 dr k3" d="M280 200 L160 194"/>' +
      '<text x="222" y="190" font-size="10" text-anchor="middle" class="mut rv k3">Mısır üzerinden</text>' +
      '</svg>',
      steps: [
        { s: 'Şimdi haritada onun izini sürelim. İlk görev yeri Şam. Burada 1906’da arkadaşlarıyla gizli Vatan ve Hürriyet Cemiyeti’ni kurdu.', v: 'Şimdi haritada onun izini sürelim. İlk görev yeri Şam. Burada bin dokuz yüz altıda arkadaşlarıyla gizli Vatan ve Hürriyet Cemiyeti’ni kurdu.', on: '.k1' },
        { s: 'Selanik’te İttihat ve Terakki’ye katıldı. Kongrede, ordu siyasete karışmamalı, siyaset yapmak isteyen subay ordudan ayrılmalı, dedi.', on: '.k2' },
        { s: 'Bu, ileri görüşlülüğün güzel bir örneği. 1909’da da 31 Mart Olayı’nı bastıran Hareket Ordusu’nun kurmay başkanıydı; orduya adını o verdi.', v: 'Bu, ileri görüşlülüğün güzel bir örneği. Bin dokuz yüz dokuzda da otuz bir Mart Olayı’nı bastıran Hareket Ordusu’nun kurmay başkanıydı; orduya adını o verdi.' },
        { s: '1911’de gönüllü olarak, gazeteci kimliğiyle Mısır üzerinden Trablusgarp’a geçti. Tobruk ve Derne’de başarı kazandı.', v: 'Bin dokuz yüz on birde gönüllü olarak, gazeteci kimliğiyle Mısır üzerinden Trablusgarp’a geçti. Tobruk ve Derne’de başarı kazandı.', on: '.k3' },
        { s: 'Balkan Savaşları’nda Gelibolu Yarımadası’nda, Bolayır’da kurmay olarak görev yaptı.', on: '.k4' },
        { s: 'Son durak Sofya. Askerî ataşe olarak Bulgar Meclisi’ni ve operayı izledi; Bulgaristan Türklerinin sorunlarıyla ilgilendi.', on: '.k5' }
      ] },

    { t: 'Haritada cephe bul',
      steps: [{ s: 'Haritaya dikkatli bak. Mustafa Kemal’in 1911 ile 1913 arasında savaştığı iki yeri bul, ikisine de dokun ve Kontrol et’e bas.' }],
      ia: { tip: 'gorselsec', q: '<p>Mustafa Kemal’in <b>1911–1913 arasında savaştığı</b> iki yere dokun.</p>', dogru: ['tr', 'bo'],
        svg: '<svg class="an-svg" viewBox="0 0 340 214" role="group" aria-label="Mustafa Kemal’in 1905-1915 arasında bulunduğu yerler, temsilî şema">' +
          '<text x="170" y="12" font-size="11" text-anchor="middle" class="mut">temsilî konumlar · ölçekli değildir</text>' +
          '<path class="ln" d="M20 150 Q90 136 150 150 T250 160 L330 170" stroke-dasharray="4 4"/>' +
          '<g data-b="se" aria-label="Selanik"><rect x="12" y="44" width="92" height="40" rx="9" class="box"/><text x="58" y="69" text-anchor="middle" font-size="15">Selanik</text></g>' +
          '<g data-b="so" aria-label="Sofya"><rect x="118" y="20" width="84" height="40" rx="9" class="box"/><text x="160" y="45" text-anchor="middle" font-size="15">Sofya</text></g>' +
          '<g data-b="bo" aria-label="Gelibolu, Bolayır"><rect x="150" y="76" width="96" height="40" rx="9" class="box"/><text x="198" y="101" text-anchor="middle" font-size="15">Bolayır</text></g>' +
          '<g data-b="sa" aria-label="Şam"><rect x="262" y="96" width="68" height="40" rx="9" class="box"/><text x="296" y="121" text-anchor="middle" font-size="15">Şam</text></g>' +
          '<g data-b="tr" aria-label="Trablusgarp, Tobruk ve Derne"><rect x="60" y="162" width="150" height="40" rx="9" class="box"/><text x="135" y="187" text-anchor="middle" font-size="15">Tobruk · Derne</text></g>' +
          '<g data-b="mi" aria-label="Mısır"><rect x="232" y="162" width="88" height="40" rx="9" class="box"/><text x="276" y="187" text-anchor="middle" font-size="15">Mısır</text></g></svg>',
        hint: 'Biri İtalya’ya karşı Kuzey Afrika’daydı, öbürü Balkan Savaşları sırasında Gelibolu’daydı. Mısır yalnızca geçiş yoluydu.',
        why: 'Trablusgarp Savaşı’nda Tobruk ve Derne’de, Balkan Savaşları’nda Gelibolu’da Bolayır’da görev yaptı. Şam ve Selanik savaş değil görev yeri, Sofya ise ataşelik yeriydi.' } },
    { t: 'Trablusgarp Savaşı (1911–1912)',
      steps: [
        { s: 'Neden çıktı bu savaş? Birliğini geç kuran İtalya sömürge arıyordu ve gözünü Trablusgarp’a dikti.',
          h: '<div class="an-rule"><b>Neden:</b> İtalya’nın sömürge arayışı</div>' },
        { s: 'Osmanlı neden asker gönderemedi? Mısır İngiliz denetimindeydi, yani kara yolu kapalıydı. Donanma da zayıftı, yani deniz yolu da kapalıydı.',
          h: '<div class="an-ex"><span class="an-l">Kara yolu ✗ → Mısır İngiliz denetiminde</span><span class="an-l">Deniz yolu ✗ → donanma zayıf</span><span class="an-l">Çözüm → gönüllü subaylar yerli halkı örgütledi</span></div>' },
        { s: 'Çözüm, gönüllü subaylardı. Mustafa Kemal gibi subaylar dağınık yerli halkı örgütleyip düzenli birliklere dönüştürdü.' },
        { s: 'Balkan Savaşı başlayınca 1912’de Uşi Antlaşması imzalandı. Trablusgarp ve Bingazi İtalya’ya bırakıldı.', v: 'Balkan Savaşı başlayınca bin dokuz yüz on ikide Uşi Antlaşması imzalandı. Trablusgarp ve Bingazi İtalya’ya bırakıldı.',
          h: '<div class="an-trap"><b>Uşi (1912):</b> Kuzey Afrika’daki <b>son</b> toprak kaybedildi. İtalya’nın işgal ettiği Onikiada geri verilmedi.</div>' }
      ] },

    { t: 'Balkan Savaşları (1912–1913)',
      base: '<table class="an-tbl"><tr><th>Savaş</th><th>Ne oldu?</th></tr>' +
        '<tr class="rv b1"><td><b>I. Balkan</b></td><td>Sırbistan, Bulgaristan, Yunanistan, Karadağ saldırdı. Londra Antlaşması: Midye-Enez çizgisinin batısı kaybedildi, Arnavutluk bağımsız</td></tr>' +
        '<tr class="rv b2"><td><b>II. Balkan</b></td><td>Balkan devletleri Bulgaristan’a saldırdı; Osmanlı Edirne ve Kırklareli’ni geri aldı, Meriç sınır oldu</td></tr></table>',
      steps: [
        { s: 'Birinci Balkan Savaşı’nda Rusya’nın desteklediği dört Balkan devleti birlikte saldırdı.', on: '.b1' },
        { s: 'Ordudaki siyasi bölünmeler ve deneyimli askerlerin terhis edilmesi ağır bir yenilgi getirdi. Midye-Enez çizgisinin batısı kaybedildi.', v: 'Ordudaki siyasi bölünmeler ve deneyimli askerlerin terhis edilmesi ağır bir yenilgi getirdi. Midye Enez çizgisinin batısı kaybedildi.' },
        { s: 'İkinci Balkan Savaşı’nda Balkan devletleri bu kez Bulgaristan’a saldırdı. Osmanlı fırsatı değerlendirip Edirne ve Kırklareli’ni geri aldı.', on: '.b2' },
        { s: 'Sonuçlar da önemli: Anadolu’ya büyük göç yaşandı, Osmanlıcılık iflas etti, Türkçülük güçlendi ve Ege adaları sorunu doğdu.',
          h: '<div class="an-tip">Sonuçlar: Makedonya ve Batı Trakya kaybedildi · Anadolu’ya göç · Osmanlıcılık iflas etti · Türkçülük güçlendi · Ege adaları sorunu</div>' },
        { s: 'Bir de kişisel kayıp var: Selanik kaybedildi, Mustafa Kemal’in ailesi İstanbul’a göç etti.' }
      ] },

    { t: 'Balkan tuzakları',
      steps: [{ s: 'Balkan Savaşları’nda sınavın sevdiği tuzaklar var. Her ifade için doğru mu, yanlış mı, karar ver.' }],
      ia: { tip: 'dogruyanlis', q: '<p>Her ifade için karar ver.</p>', ifadeler: [
          { m: 'Edirne, Birinci Balkan Savaşı’nda geri alındı.', d: false, a: 'Edirne, İkinci Balkan Savaşı’nda Bulgaristan’dan geri alındı.' },
          { m: 'Balkan Savaşları Osmanlıcılık fikrinin iflasını gösterdi.', d: true, a: 'Gayrimüslim Balkan milletleri ayrıldı; Osmanlıcılık çöktü.' },
          { m: 'Uşi Antlaşması ile Balkan Savaşları sona erdi.', d: false, a: 'Uşi, Trablusgarp Savaşı’nı bitirdi (1912).' },
          { m: 'Savaşlardan sonra Anadolu’ya büyük bir göç dalgası geldi.', d: true, a: 'Balkanlardaki Türkler Anadolu’ya göç etti.' },
          { m: 'İkinci Balkan Savaşı’nda Balkan devletleri Bulgaristan’a saldırdı.', d: true, a: 'Osmanlı bu fırsatla Edirne ve Kırklareli’ni aldı.' }],
        hint: 'Hangi savaşta kimin kime saldırdığını hatırla. Uşi Antlaşması hangi savaşın sonundaydı?',
        why: 'Edirne ikinci savaşta geri alındı; Uşi ise Trablusgarp Savaşı’nın antlaşmasıdır. Göç, Osmanlıcılığın çöküşü ve Bulgaristan’a saldırı doğru bilgilerdir.' } },
    { t: 'Metinden kişilik özelliği çıkarmak',
      base: '<table class="an-tbl"><tr><th>Özellik</th><th>Metinde nasıl görünür?</th></tr>' +
        '<tr class="rv p1"><td><b>Teşkilatçılık</b></td><td>dağınık insanları bir amaç için örgütlemek: Vatan ve Hürriyet, Trablusgarp</td></tr>' +
        '<tr class="rv p2"><td><b>İleri görüşlülük</b></td><td>geleceği önceden görmek: “ordu siyasete karışmasın”</td></tr>' +
        '<tr class="rv p3"><td><b>Kararlılık</b></td><td>engele rağmen vazgeçmemek: habersiz askerî okul sınavı</td></tr>' +
        '<tr class="rv p4"><td><b>Çok yönlülük</b></td><td>askerlik dışı ilgiler: Fransızca, Sofya’da opera</td></tr></table>',
      steps: [
        { s: 'Bu konunun en çok sorulan kalıbı şu: kısa bir metin verilir ve “Mustafa Kemal’in hangi özelliğini gösterir?” diye sorulur.', v: 'Bu konunun en çok sorulan kalıbı şu: kısa bir metin verilir ve Mustafa Kemal’in hangi özelliğini gösterdiği sorulur.' },
        { s: 'Dağınık insanları bir amaç için örgütlediyse teşkilatçılık.', on: '.p1' },
        { s: 'Bugünden geleceğin sonucunu gördüyse ileri görüşlülük.', on: '.p2' },
        { s: 'Engellere rağmen hedefinden dönmediyse kararlılık. Askerlik dışında sanat, dil, edebiyatla ilgilendiyse çok yönlülük.', on: '.p3,.p4' },
        { s: 'Burada çok dikkat et, LGS’de en sık düşülen tuzak bu: seçenekte iki özellik varsa ikisinin de metinde dayanağı olmalı.',
          h: '<div class="an-trap">Biri doğru, biri dayanaksız olan şık <b>yanlıştır</b>. Başka döneme ait bilgiler (ör. Anafartalar, Cumhuriyet inkılapları) de çeldiricidir.</div>' }
      ] },

    { t: 'Davranıştan özelliğe',
      steps: [{ s: 'Her davranışı gösterdiği kişilik özelliğinin kutusuna koy. Metindeki dayanağa bak, ezbere değil.' }],
      ia: { tip: 'grup', q: '<p>Her davranışı gösterdiği <b>kişilik özelliğine</b> yerleştir.</p>', gruplar: ['Teşkilatçılık', 'İleri görüşlülük', 'Kararlılık', 'Çok yönlülük'],
        ogeler: [{ m: 'Vatan ve Hürriyet’i kurdu', g: 0 }, { m: '“Ordu siyasete karışmasın”', g: 1 }, { m: 'Sofya’da operayı izledi', g: 3 },
          { m: 'Trablusgarp’ta halkı örgütledi', g: 0 }, { m: 'Habersiz askerî okula girdi', g: 2 }, { m: 'Edebiyat ve hitabetle ilgilendi', g: 3 }],
        hint: 'İnsanları bir amaçla bir araya getirmek, bugünden geleceği görmek, engele rağmen vazgeçmemek ve askerlik dışı ilgiler: dördü ayrı özelliktir.',
        why: 'Cemiyet kurmak ve halkı örgütlemek teşkilatçılık; ordunun siyasetten uzak durmasını istemek ileri görüşlülük; ailesine rağmen askerî okula girmek kararlılık; sanat ve edebiyat ilgisi çok yönlülüktür.' } },
    { t: 'Ara soru', cp: {
        q: '<p>Mustafa Kemal, Şam’da görevliyken arkadaşlarıyla gizli bir cemiyet kurmuş, şube açmak için gizlice Selanik’e gitmiştir. Trablusgarp’ta ise dağınık yerli halkı bir araya getirip eğiterek düzenli birlikler oluşturmuştur.</p><p>Bu bilgiler Mustafa Kemal’in hangi özelliğini <b>ortak olarak</b> göstermektedir?</p>',
        c: ['Teşkilatçılık', 'Sanatseverlik', 'İnkılapçılık', 'Alçakgönüllülük'], a: 'A',
        hint: 'İki olayda da ortak olan ne? İnsanları bir araya getirip bir amaç için düzenlemek.',
        why: 'Gizli cemiyet kurmak ve dağınık halkı düzenli birliklere dönüştürmek, insanları bir amaç için örgütlemektir: teşkilatçılık. Metinde sanat, köklü yenilik ya da alçakgönüllülük vurgusu yoktur.' },
      steps: [{ s: 'Son soru! İki olayın ortak noktasını bul.' }] }
  ]
};
