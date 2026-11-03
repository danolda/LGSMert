/* Adım Adım Anlatım · Türkçe · Cümlede Anlam (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['tr-cumle'] = {
  title: 'Cümlede Anlam',
  desc: 'Kesin yargı, cümle birleştirme, anlatılmak istenen, anlam özellikleri (neden, amaç, koşul, öneri…), bağlaçlar ve LGS’nin derece sözcüğü, nitelik kayması, anahtar sözcük tuzakları.',
  ozet: [
    'Şıktaki sözcük metinde geçiyor mu diye değil, şık metindeki yargının aynısını mı söylüyor diye bak.',
    'Kesin yargıda yalnızca açıkça söylenen ya da zorunlu olarak çıkan bilgi kabul edilir. Doğru şık çoğunlukla yargının daha dar, temkinli hâlidir.',
    '“En” sıralama yapar, diğerlerini kötülemez; “kadar … değil” küçümser ama yok saymaz; “bir kez daha” daha önce yapıldığını gösterir, kaç kez olduğunu değil; “biri” başkalarının da olduğunu gösterir.',
    'Cümle birleştirmede bilgi eksilmez, değişmez, eklenmez. Sıfat-fiil kimi niteliyor, zaman ve yer sözü hangi yükleme bağlı diye denetle; uydurma neden-sonuca dikkat.',
    'Benzetmede önce ortak özelliği bul, sonra onu asıl konuya uygula. Doğru şık metni çoğunlukla eş anlamlı sözcüklerle yeniden kurar.',
    'Neden-sonuçta neden olmuştur (-dığı için, -dığından); amaç-sonuçta hedef henüz gerçekleşmemiştir (-mak için, -mak üzere, -sın diye).',
    '“Eğer” varsayım demek değildir: okura yol gösteriyorsa öneridir. Koşul “-sa” olmadan “ne kadar … o kadar” ile de kurulabilir.',
    'Karşıtlık bağlaçları düşüncenin yönünü çevirir; “yani” aynı düşünceyi tekrar eder; “hatta, üstelik” aynı yönde ilerletir. Yakın anlamlı cümle konusu değil yargısı aynı olandır.'
  ],
  scenes: [
    { t: 'Cümlede anlam nasıl sorulur?',
      base: '<svg class="an-svg" viewBox="0 0 340 170" role="img" aria-label="Metindeki yargı ile şıktaki yargı karşılaştırılır">' +
        '<rect x="8" y="20" width="140" height="70" rx="10" class="boxa rv c1"/><text x="78" y="50" font-size="14" text-anchor="middle" font-weight="700" class="rv c1">Metnin</text><text x="78" y="70" font-size="14" text-anchor="middle" font-weight="700" class="rv c1">yargısı</text>' +
        '<rect x="192" y="20" width="140" height="70" rx="10" class="box rv c2"/><text x="262" y="50" font-size="14" text-anchor="middle" font-weight="700" class="rv c2">Şıkkın</text><text x="262" y="70" font-size="14" text-anchor="middle" font-weight="700" class="rv c2">yargısı</text>' +
        '<path class="st dr c3" d="M150 55 H190"/><text x="170" y="48" font-size="18" text-anchor="middle" class="acc rv c3">=?</text>' +
        '<text x="170" y="122" font-size="13" text-anchor="middle" class="mut rv c4">Sözcükler aynı olabilir…</text>' +
        '<text x="170" y="146" font-size="13" text-anchor="middle" font-weight="700" class="acc rv c5">…önemli olan yargının aynı olması.</text></svg>',
      steps: [
        { s: 'Merhaba! Bu konuda metinler kısa olur ama şıklar birbirine çok benzer. Zorluk metinde değil, şıklarda.', on: '.c1' },
        { s: 'Şıklar hep tam cümledir ve metindeki anahtar sözcükleri tekrar eder.', on: '.c2' },
        { s: 'O yüzden şıkkı metinle karşılaştırırken tek bir soru sor.', on: '.c3' },
        { s: 'Şıktaki sözcüğün metinde geçmesi tek başına bir şey kanıtlamaz. Aynı sözcükler başka bir yargı kurabilir.', on: '.c4' },
        { s: 'Asıl soru şu: Şık, metindeki yargının aynısını mı söylüyor? Bütün konunun altın kuralı bu.', on: '.c5' }
      ] },

    { t: 'Kesin yargıya ulaşma',
      base: '<table class="an-tbl"><tr><th>Cümle</th><th>Kesin çıkan</th></tr>' +
        '<tr class="rv e1"><td>Kekova, gezdiğim koylar içinde <span class="an-w">en</span> güzeliydi.</td><td>Hiçbir koy Kekova kadar güzel değildi.</td></tr>' +
        '<tr class="rv e2"><td>Bu şiirini, diğerleri <span class="an-w">kadar</span> başarılı bulamadım.</td><td>Diğer şiirleri başarılıdır.</td></tr>' +
        '<tr class="rv e3"><td>Erzurum’u <span class="an-w">bir kez daha</span> gezmek istiyorum.</td><td>Erzurum’u daha önce gezmiştir.</td></tr>' +
        '<tr class="rv e4"><td>Çok sevdiğim şehirlerden <span class="an-w">biri</span> Erzurum’dur.</td><td>Sevdiği başka şehirler de vardır.</td></tr></table>',
      steps: [
        { s: 'Soru kökünde “kesin” ya da “kesinlikle” görürsen, yalnızca cümlede açıkça söyleneni kabul edeceksin. Yorum, tahmin yok.' },
        { s: 'İlk cümleye bak. “En güzeli” diyorsa hiçbir koy onun kadar güzel değildir. Ama tek güzel koy demek değildir bu. “En” sıralama yapar, diğerlerini kötülemez.', on: '.e1' },
        { s: '“Diğerleri kadar başarılı bulamadım” sözü bu şiiri küçümsüyor. Ama şiir başarısız demiyor! Kesin olan, diğer şiirlerin başarılı olduğu.', on: '.e2' },
        { s: '“Bir kez daha gezmek istiyorum” diyorsa daha önce gezmiştir. Ama kaç kez gezdiğini bilemeyiz.', on: '.e3' },
        { s: '“Şehirlerden biri” diyorsa sevdiği başka şehirler de vardır. O şehirleri gezmiş mi? Bunu bilemeyiz.', on: '.e4' }
      ] },

    { t: 'Kesin mi, tahmin mi?',
      steps: [{ s: 'Cümleye göre dört yargıyı değerlendir. Kesin olarak çıkıyorsa Doğru, yalnızca bir tahminse Yanlış seç.' }],
      ia: {
        tip: 'dogruyanlis',
        q: '<p>“Kütüphanemdeki kitaplardan biri olan bu romanı bir kez daha okumak istiyorum.”<br>Bu cümleye göre yargı <b>kesin olarak</b> doğru mu?</p>',
        ifadeler: [{ m: 'Bu romanı daha önce en az bir kez okumuştur.', d: true, a: '“Bir kez daha” sözü, romanın daha önce okunduğunu kesinleştirir.' }, { m: 'Bu romanı daha önce yalnızca bir kez okumuştur.', d: false, a: 'Kaç kez okunduğu cümlede yok.' }, { m: 'Kütüphanesinde başka kitaplar da vardır.', d: true, a: '“Kitaplardan biri” başka kitapların da olduğunu gösterir.' }, { m: 'Bu roman, kütüphanesindeki en sevdiği kitaptır.', d: false, a: 'Cümlede karşılaştırma yok; bu bir tahmin.' }],
        hint: 'Yalnızca cümlenin açıkça söylediğini ya da zorunlu olarak çıkanı kabul et. Kaç kez, en sevdiği gibi ayrıntılar cümlede var mı?',
        why: '“Bir kez daha” romanın önceden okunduğunu, “kitaplardan biri” başka kitapların varlığını kesinleştirir. Kaç kez okunduğu ve en sevilen kitap olup olmadığı ise tahmindir.'
      } },

    { t: 'Tuzak: daha geniş söyleyen şık',
      steps: [
        { s: 'Burada çok dikkat et, LGS sınavında en sık düşülen tuzak bu.',
          h: '<div class="an-trap">Doğru şık neredeyse hep metindeki yargının <b>daha dar, daha temkinli</b> hâlidir. Daha geniş, daha kesin, daha abartılı söyleyen şık yorumdur.</div>' },
        { s: 'Mesela “Kendimi en iyi şiirle ifade ettim” diyen biri için “başka türlerde kendini ifade edemez” şıkkı yanlıştır. Metin bunu söylemiyor.' },
        { s: 'Bir de metinde olmayan bir neden ya da karşılaştırma ekleyen şıklar var.',
          h: '<div class="an-ex"><span class="an-l">Metin: “Bu şiiri ezberledim.”</span><span class="an-l"><span class="an-bad-t">Şiiri kısa olduğu için seçmiştir.</span> ← neden eklenmiş</span><span class="an-l"><span class="an-bad-t">En sevdiği şiirdir.</span> ← karşılaştırma eklenmiş</span></div>' },
        { s: 'Metin neden söylemiyorsa sen de ekleme. Kendine şunu sor: Bunu metin mi söylüyor, ben mi tahmin ediyorum?',
          h: '<div class="an-rule">Kesin yargı = <b>açıkça söylenen</b> ya da <b>zorunlu olarak çıkan</b>. “Herhâlde öyledir” kabul edilmez.</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>“Bu yaz gezdiğim şehirler arasında en çok Mardin’i beğendim.”</p><p>Bu cümleden aşağıdaki yargılardan hangisine <b>kesin olarak</b> ulaşılabilir?</p>',
        c: ['Mardin, gezdiği tek güzel şehirdir.', 'Gezdiği diğer şehirleri hiç beğenmemiştir.', 'Bu yaz birden fazla şehir gezmiştir.', 'Mardin’i daha önce de gezmiştir.'], a: 'C',
        hint: '“En” sözcüğü diğerlerini kötülemez. Cümlede “şehirler arasında” denmesi sana ne söylüyor?',
        why: '“Gezdiğim şehirler arasında” sözü, bu yaz birden fazla şehir gezdiğini kesin olarak gösterir. A ve B metnin söylediğinden fazlasını söylüyor; D için cümlede hiçbir bilgi yok.' },
      steps: [{ s: 'Şimdi sen dene. Hangisi gerçekten kesin? Seç ve İşaretle’ye bas.' }] },

    { t: 'Cümle birleştirme',
      steps: [
        { s: 'Şimdi cümle birleştirme sorularına geçelim. Burada dört şık da aynı sözcükleri içerir.' },
        { s: 'Fark şurada: Hangi bilgi hangi varlığa, hangi yükleme bağlanmış? Doğru birleştirme bilgiyi eksiltmez, değiştirmez, yeni bilgi eklemez.',
          h: '<div class="an-grid"><div class="rv n1"><b>Nitelik kayması</b>özellik başka varlığa geçer</div><div class="rv n2"><b>Zaman/yer kayması</b>söz yanlış yükleme bağlanır</div><div class="rv n3"><b>Uydurma neden</b>“-dığı için” eklenir</div><div class="rv n4"><b>Bilgi ekleme</b>metinde olmayan ayrıntı</div><div class="rv n5"><b>Bilgi düşürme</b>bir bilgi kaybolur</div><div class="rv n6"><b>Keşif kayması</b>bilinen şey “keşfedilmiş” olur</div></div>' },
        { s: 'Birincisi nitelik kayması. Bir varlığa ait özellik, sessizce ötekine geçirilir.', on: '.n1' },
        { s: 'İkincisi zaman ya da yer kayması. “Kış aylarında” gibi bir söz başka bir yükleme bağlanır.', on: '.n2' },
        { s: 'Üçüncüsü uydurma neden. İki bağımsız bilgi arasına “bu yüzden”, “olduğu için” eklenir.', on: '.n3' },
        { s: 'Bir de metinde olmayan bir ayrıntı eklenir ya da bir bilgi düşürülür. Zaten bilinen bir şey de sonradan keşfedilmiş gibi gösterilebilir.', on: '.n4,.n5,.n6' }
      ] },

    { t: 'Birleştirmeyi adım adım çöz',
      steps: [
        { s: 'Bir örnekle deneyelim. Elimizde iki cümle var.',
          h: '<div class="an-ex"><span class="an-l">1. Lale, Anadolu’da yetişen bir çiçektir.</span><span class="an-l">2. Lale, Osmanlı döneminde Avrupa’ya götürüldü.</span></div>' },
        { s: 'Bu şık doğru. Anadolu’da yetişmek laleye, Osmanlı dönemi de götürülmeye bağlı.',
          h: '<div class="an-ex"><span class="an-l rv w1"><span class="an-ok-t">Anadolu’da yetişen lale, Osmanlı döneminde Avrupa’ya götürüldü.</span> ✓</span>' +
             '<span class="an-l rv w2"><span class="an-bad-t">Osmanlı döneminde Anadolu’da yetişen lale, Avrupa’ya götürüldü.</span> ← zaman kayması</span>' +
             '<span class="an-l rv w3"><span class="an-bad-t">Anadolu’da yetiştiği için lale, Avrupa’ya götürüldü.</span> ← uydurma neden</span></div>', on: '.w1' },
        { s: 'Bu şıkta “Osmanlı döneminde” sözü yer değiştirdi. Artık lalenin sadece o dönemde yetiştiğini söylüyor gibi. Zaman kayması.', on: '.w2' },
        { s: 'Bu şıkta ise metinde olmayan bir neden var. Lale Anadolu’da yetiştiği için mi götürüldü? Metin bunu söylemiyor.', on: '.w3' },
        { s: 'Pratik yöntem şu: Sıfat-fiili bul, kimi nitelediğine bak. Sonra zaman ve yer sözünün hangi yükleme bağlandığını denetle.',
          h: '<div class="an-rule"><b>İki kontrol:</b> 1. “-an, -en, -dığı” kimi niteliyor? 2. Zaman ve yer sözü hangi yükleme bağlı?</div>' }
      ] },

    { t: 'Birleştirme hatasını adlandır',
      steps: [{ s: 'İki cümle beş biçimde birleştirildi. Her birleştirmeyi, taşıdığı hatayla ya da doğru oluşuyla eşleştir.' }],
      ia: {
        tip: 'eslestir',
        q: '<p><b>1.</b> Ahmet, köyde büyüyen bir çocuktu. <b>2.</b> Ahmet, lise yıllarında şehre taşındı.<br>Her birleştirmeyi doğru etiketle eşleştir.</p>',
        solBaslik: 'Birleştirme',
        sagBaslik: 'Değerlendirme',
        sol: ['Köyde büyüdüğü için Ahmet, şehre taşındı.', 'Lise yıllarında köyde büyüyen Ahmet, şehre taşındı.', 'Köyde büyüyen Ahmet, lise yıllarında ailesiyle şehre taşındı.', 'Ahmet, lise yıllarında şehre taşındı.', 'Köyde büyüyen Ahmet, lise yıllarında şehre taşındı.'],
        sag: ['Uydurma neden', 'Zaman kayması', 'Bilgi ekleme', 'Bilgi düşürme', 'Doğru birleştirme'],
        hint: 'Her cümlede üç şeyi denetle: yeni bir “için” eklenmiş mi, “lise yıllarında” hangi yükleme bağlı, eksik ya da fazla bilgi var mı?',
        why: '“-dığı için” metinde olmayan bir neden kurar. “Lise yıllarında” büyümeye bağlanınca zaman kayar. “Ailesiyle” metinde yok. Köy bilgisinin düşmesi eksiltmedir. Yalnızca bilgiyi aynen taşıyan cümle doğrudur.',
        whyV: 'Dığı için eki metinde olmayan bir neden kurar. Lise yıllarında sözü büyümeye bağlanınca zaman kayar. Ailesiyle sözü metinde yok. Köy bilgisinin düşmesi eksiltmedir. Yalnızca bilgiyi aynen taşıyan cümle doğrudur.'
      } },

    { t: 'Anlatılmak istenen: benzetmeyi çöz',
      steps: [
        { s: 'Çıkmışlarda en kalabalık grup bu: Bir cümleyle ya da altı çizili bir sözle anlatılmak istenen ne?' },
        { s: 'Cümlede “gibi, tıpkı, sanki” ile bir benzetme varsa önce benzetilen iki şeyin ortak özelliğini bulacaksın.',
          h: '<div class="an-ex"><span class="an-l">“Kelimeler <span class="an-w">tıpkı gözlükler gibi</span>, netleştiremedikleri her şeyi daha da bulanıklaştırır.”</span>' +
             '<span class="an-l rv b1">Ortak özellik: Netleştiremeyen gözlük görüntüyü bozar.</span>' +
             '<span class="an-l rv b2"><b>Anlatılmak istenen:</b> Düşünceyi açıkça ifade edemeyen kelimeler anlamayı zorlaştırır.</span></div>' },
        { s: 'Şöyle düşün: Numarası tutmayan bir gözlük ne yapar? Görüntüyü daha da bozar.', on: '.b1' },
        { s: 'Şimdi bu özelliği kelimelere uygula. Doğru seçilmemiş kelimeler de anlatılmak isteneni bulanıklaştırır.', on: '.b2' },
        { s: 'Şunu da bil: Doğru şık çoğu zaman metindeki sözcükleri değil, onların eş anlamlılarını kullanır.',
          h: '<div class="an-tip">“yabancı kültür unsurları” → “farklı kültürlere ait ögeler” · Doğru şık metni <b>başka sözcüklerle</b> yeniden kurar.</div>' }
      ] },

    { t: 'Anahtar sözcük tuzakları',
      steps: [
        { s: 'Bu sorularda üç tuzak var. Birincisi anahtar sözcük.',
          h: '<div class="an-trap"><b>1. Anahtar sözcük:</b> Dört şıkta da metindeki sözcük geçer. Aynı sözcüğü içeren şık farklı bir yargı bildiriyorsa yanlıştır.</div>' },
        { s: 'Bir yıl dört şıkta da “fırsat” sözcüğü vardı. Sözcüğe değil, yargının yönüne bakan öğrenci doğruyu buldu.' },
        { s: 'İkincisi, tek unsuru değiştirmek. Şık cümlenin bir parçasını sessizce değiştirir.',
          h: '<div class="an-trap"><b>2. Tek unsuru değiştirme:</b> “millî değerler” yerine “günümüz değerleri” · “kendi üslubuyla harmanlamak” yerine “aslına sadık kalmak”</div>' },
        { s: 'Şıkkı cümleyle parça parça karşılaştır. Bir parça bile uymuyorsa o şık elenir.' },
        { s: 'Üçüncüsü de metinde hiç olmayan bir alan. Metin üslubu övüyorsa, şık birden temalardan bahsedebilir.',
          h: '<div class="an-trap"><b>3. Metinde olmayan alan:</b> “gerçek hayat”, “üzücü anılar” gibi metinde hiç geçmeyen konular eklenir.</div>' }
      ] },

    { t: 'Yargıyı bozan şıkları ele',
      steps: [{ s: 'Cümleyle aynı yargıyı taşımayan şıkları bul ve ele. Şıkları cümleyle parça parça karşılaştır.' }],
      ia: {
        tip: 'eleme',
        q: '<p>“Usta yazar, halk hikâyelerini kendi üslubuyla yeniden yorumlayarak çocuklara sevdirdi.”<br>Bu cümlenin yargısını <b>bozan</b> şıkları ele.</p>',
        ogeler: ['Halk hikâyelerini kendine özgü anlatımıyla çocuklara sevdirmiştir.', 'Halk hikâyelerini aslına sadık kalarak aktarmıştır.', 'Halk hikâyelerini kendi üslubuyla yetişkinlere sevdirmiştir.', 'Halk hikâyelerini yeniden yorumlayıp çocukların ilgisini çekmiştir.', 'Halk hikâyelerindeki üzücü anıları çocuklara anlatmıştır.', 'Çocukların halk hikâyelerini sevmesinde onun yorumu etkili olmuştur.'],
        ele: [1, 2, 4],
        hint: 'Şıkkı parça parça karşılaştır: kim, kime, nasıl? Tek bir parça bile değişmişse o şık elenir.',
        why: '“Aslına sadık kalarak” üslubun tersini söylüyor, “yetişkinlere” kişiyi değiştiriyor, “üzücü anılar” ise cümlede hiç yok. Kalan üç şık aynı yargıyı başka sözcüklerle kuruyor.'
      } },

    { t: 'Ara soru', cp: {
        q: '<p>“Okunmayan bir kitap, hiç açılmamış bir pencere gibidir.”</p><p>Bu cümleyle anlatılmak istenen aşağıdakilerden hangisidir?</p>',
        c: ['Kitaplar, ancak okunduğunda insana yeni dünyaların kapısını açar.', 'Kitaplar, evlerin vazgeçilmez eşyaları arasında yer alır.', 'Pencereler gibi kitaplar da özenle korunmalıdır.', 'Okunan kitap sayısı arttıkça insan daha çok yorulur.'], a: 'A',
        hint: 'Önce ortak özelliği bul: Açılmamış bir pencere sana ne göstermez?',
        why: 'Açılmamış pencere dışarıyı göstermez. Kitap da okunmadıkça insana yeni bir dünya sunmaz. A bu ortak özelliği kitaba uyguluyor; B, C ve D benzetmeyi sözcüğü sözcüğüne ya da metinde olmayan bir alana taşıyor.' },
      steps: [{ s: 'Benzetmeyi çözme sırası sende. Önce ortak özelliği düşün.' }] },

    { t: 'Anlam özellikleri',
      base: '<table class="an-tbl"><tr><th>Anlam</th><th>Örnek</th></tr>' +
        '<tr class="rv m1"><td><b>Koşul</b></td><td>Denemeler başarılı olursa robotlar üretilecek.</td></tr>' +
        '<tr class="rv m2"><td><b>Öneri</b></td><td>Ekran süreni azaltırsan sevdiklerine vakit ayırabilirsin.</td></tr>' +
        '<tr class="rv m3"><td><b>Varsayım</b></td><td>Diyelim ki yarın elektrik kesildi, ne yapardık?</td></tr>' +
        '<tr class="rv m4"><td><b>Tahmin</b></td><td>Bulutlara bakılırsa akşama yağmur yağacak.</td></tr>' +
        '<tr class="rv m5"><td><b>Ön yargı</b></td><td>O filmi izlemedim ama sıkıcı olduğu belli.</td></tr>' +
        '<tr class="rv m6"><td><b>Örtülü anlam</b></td><td>Bu kez de geç kaldı. <small>(daha önce de kalmış)</small></td></tr>' +
        '<tr class="rv m7"><td><b>Kanıksama</b></td><td>Trenin sesini artık duymuyorum bile.</td></tr></table>',
      steps: [
        { s: 'Gelelim cümlelerin taşıdığı anlam özelliklerine. Sık sorulanları tek tek görelim.' },
        { s: 'Koşulda yargı başka bir şeyin gerçekleşmesine bağlanır. Öneride ise bir soruna çözüm yolu gösterilir.', on: '.m1,.m2' },
        { s: 'Varsayımda bir durum olmuş gibi kabul edilir. Tahminde bir gerekçeye dayanarak geleceğe dair öngörüde bulunulur.', on: '.m3,.m4' },
        { s: 'Ön yargı, bir şeyi tanımadan, denemeden hükme varmaktır. Filmi izlemeden sıkıcı demek gibi.', on: '.m5' },
        { s: 'Örtülü anlamda söylenmeyen ama sezdirilen bir yargı vardır. “Bu kez de” diyorsa daha önce de geç kalmıştır.', on: '.m6' },
        { s: 'Kanıksama da önceden rahatsız eden bir şeye zamanla alışmaktır.', on: '.m7' }
      ] },

    { t: 'Anlam özelliğini bul',
      steps: [{ s: 'Sekiz cümleyi anlam özelliklerine göre kutulara yerleştir. Önce cümleye, sonra kutusuna dokun.' }],
      ia: {
        tip: 'grup',
        q: '<p>Her cümle hangi anlam özelliğini taşıyor?</p>',
        gruplar: ['Koşul', 'Öneri', 'Tahmin', 'Ön yargı'],
        ogeler: [{ m: 'Hava açarsa pikniğe gideriz.', g: 0 }, { m: 'Unutmamak için not almayı deneyebilirsin.', g: 1 }, { m: 'Bulutlar karardı, birazdan yağmur yağar.', g: 2 }, { m: 'Bu yazarın kitabını hiç açmadım ama kesin sıkıcıdır.', g: 3 }, { m: 'Biletler tükenmezse konsere gideceğiz.', g: 0 }, { m: 'Bu gidişle takım şampiyon olacak.', g: 2 }, { m: 'Yeni komşusunu tanımadan kaba biri sandı.', g: 3 }, { m: 'Dersi kaçırdıysan arkadaşının notlarına bakabilirsin.', g: 1 }],
        hint: '“-sa” görünce hemen koşul deme: Okura yol gösteriyorsa öneridir. Tahmin bir gerekçeye dayanır; ön yargı ise tanımadan hüküm verir.',
        hintV: 'Sa ekini görünce hemen koşul deme: Okura yol gösteriyorsa öneridir. Tahmin bir gerekçeye dayanır; ön yargı ise tanımadan hüküm verir.',
        why: 'Koşul: hava açarsa, biletler tükenmezse. Öneri: not almayı dene, notlara bak; “kaçırdıysan” sözü koşul gibi görünse de yol gösteriyor. Tahmin: kararan bulutlar, takımın gidişi. Ön yargı: açılmamış kitap, tanınmayan komşu.'
      } },

    { t: 'Neden mi, amaç mı?',
      steps: [
        { s: 'Şimdi en çok karıştırılan ikiliye geldik. İkisinde de “için” geçebilir, o yüzden ekine bakacağız.',
          h: '<table class="an-tbl"><tr><th>Neden-sonuç</th><th>Amaç-sonuç</th></tr>' +
             '<tr><td>Yağmur yağ<span class="an-ek">dığı için</span> maç ertelendi.</td><td>Takıma gir<span class="an-ek">mek için</span> antrenman yapıyor.</td></tr>' +
             '<tr><td>Hasta ol<span class="an-ek">duğundan</span> gelemedi.</td><td>Erken var<span class="an-ek">mak üzere</span> yola çıktı.</td></tr></table>' },
        { s: 'Neden-sonuçta neden önce olmuştur. Yağmur zaten yağdı, maç da bu yüzden ertelendi.' },
        { s: 'Amaç-sonuçta ise hedefe henüz ulaşılmamıştır. Takıma girmek bir hedef, daha gerçekleşmedi.',
          h: '<div class="an-rule"><b>Kısa test:</b> “Neden?” sorusunun cevabı <b>olmuş</b> bir durumsa neden-sonuç; “Ne amaçla?” sorusunun cevabı <b>henüz ulaşılmamış</b> bir hedefse amaç-sonuç.</div>' },
        { s: 'Bir tuzak daha. Cümlede “eğer” var diye hemen varsayım deme. Okura yol gösteriyorsa bu bir öneridir.',
          h: '<div class="an-trap">“<span class="an-w">Eğer</span> siz de teknolojiyi fazla kullanıyorsanız, ekranı biraz bırakın.” → <b>öneri</b>, varsayım değil</div>' },
        { s: 'Koşul da her zaman “sa” ekiyle kurulmaz. “Bir dil ne kadar çok konuşulur, o kadar çok gelişir” cümlesi de koşul bildirir.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdaki cümlelerin hangisinde <b>amaç-sonuç</b> ilişkisi vardır?</p>',
        c: ['Yağmur yağdığı için piknik ertelendi.', 'Hastalandığından okula gelemedi.', 'Sınavı kazanmak için her gün düzenli çalışıyor.', 'Yolu bilmediğimiz için toplantıya geç kaldık.'], a: 'C',
        hint: 'Hangi cümlede henüz gerçekleşmemiş bir hedef var? Eklere bak: “-dığı için” mi, “-mak için” mi?',
        why: '“Kazanmak için” sınavı kazanma hedefini bildirir; bu hedefe henüz ulaşılmamıştır. Diğer cümlelerde “-dığı için, -dığından” ile olmuş bir neden veriliyor; bunlar neden-sonuçtur.' },
      steps: [{ s: 'Eklere dikkat ederek seç bakalım.' }] },

    { t: 'Bağlaçlar düşüncenin yönünü belirler',
      steps: [
        { s: 'Bağlaçlar cümleler arasındaki ilişkiyi kurar. Hangisinin ne yaptığını bilmek çok iş görür.',
          h: '<table class="an-tbl"><tr><td><b>Karşıtlık</b></td><td>ama, fakat, oysa, hâlbuki, yine de</td></tr>' +
             '<tr><td><b>Neden</b></td><td>çünkü, zira</td></tr>' +
             '<tr><td><b>Sonuç</b></td><td>bu yüzden, bu nedenle, dolayısıyla</td></tr>' +
             '<tr><td><b>Ekleme</b></td><td>ayrıca, üstelik, hatta</td></tr>' +
             '<tr><td><b>Açıklama</b></td><td>yani, başka bir deyişle</td></tr></table>' },
        { s: 'Karşıtlık bağlaçları düşüncenin yönünü çevirir. “Çok çalıştı ama istediği puanı alamadı” cümlesinde olumludan olumsuza döndük.' },
        { s: '“Yani” yeni bir bilgi eklemez, aynı düşünceyi başka sözlerle tekrar eder. “Hatta, üstelik” ise düşünceyi aynı yönde bir adım ileri götürür.' },
        { s: 'Boşluğa bağlaç getirme sorularında üç şık aynı ilişkiyi kurar. Farklı ilişki kuran tek şık cevaptır.',
          h: '<div class="an-trap">“Hâlbuki, Ancak, Oysa” → karşıtlık · “<b>Çünkü</b>” → neden. Üçü aynı, biri farklı: cevap <b>Çünkü</b>.</div>' },
        { s: 'Kolay bir deneme yöntemi: Boşluğun önündeki ve arkasındaki cümleyi “ama” ile mi, “bu yüzden” ile mi bağlayabiliyorsun, bir dene.' }
      ] },

    { t: 'Bağlacı yerleştir',
      steps: [{ s: 'Her boşluğa, iki düşünce arasındaki ilişkiyi kuran bağlacı yerleştir.' }],
      ia: {
        tip: 'bosluk',
        q: '<p>Boşluklara uygun bağlaçları yerleştir.</p>',
        metin: 'Çok çalıştı, [_] istediği puanı alamadı.<br>Bu kitabı herkese öneririm; [_] hem sürükleyici hem öğretici.<br>Yağmur bütün gece yağdı; [_] maç ertelendi.',
        secenek: ['ama', 'çünkü', 'bu yüzden', 'yani', 'örneğin'],
        cevap: ['ama', 'çünkü', 'bu yüzden'],
        hint: 'Önce iki parça arasındaki ilişkiyi adlandır: Düşünce yön mü değiştiriyor, bir neden mi veriliyor, yoksa bir sonuç mu söyleniyor?',
        why: 'Çalışmaya rağmen puan gelmedi: karşıtlık, ama. Öneriyi gerekçelendiriyor: neden, çünkü. Yağmurun sonucu ertelenen maç: bu yüzden.'
      } },

    { t: 'Yakın anlam, çelişki, örnek olamaz',
      steps: [
        { s: 'Anlamca en yakın cümleler, konusu aynı olanlar değil, yargısı aynı olanlardır.',
          h: '<div class="an-ex"><span class="an-l">“Çok mutluluk beklemek mutluluğu engeller.”</span><span class="an-l">“İnsan en azla yetindiğinde mutludur.”</span><span class="an-l"><b>Ortak yargı:</b> Beklentiyi azaltmak mutlu eder.</span></div>' },
        { s: 'Bu iki cümle de mutluluktan söz ediyor, evet. Ama asıl önemli olan ikisinin de beklentiyi azaltmayı önermesi.' },
        { s: 'Çelişen cümleler ise aynı konuda zıt yol gösterir. Farklı konulardan söz eden iki cümle birbirini yalanlamıyorsa çelişmez.',
          h: '<div class="an-ex"><span class="an-l">“Bilmediğini saklamak iyidir.” ⟷ “Bilmiyorum demek erdemdir.” → <b>çelişir</b></span></div>' },
        { s: '“Örnek olamaz” sorularında üç şık metindeki kavrama uyar, biri uymaz. “Seviyormuş gibi yapmak” anlatılıyorsa, gerçekten keyif alan kişi örnek olamaz.',
          h: '<div class="an-tip">Örnek olamaz sorularında cevap çoğunlukla <b>içtenlik</b> ya da <b>gerçek bir ihtiyaç</b> taşıyan şıktır.</div>' }
      ] },

    { t: 'Anlamca en yakın cümleler',
      steps: [{ s: 'Verilen cümleye anlamca en yakın iki cümleyi bul. İkisine de dokun, sonra Kontrol et’e bas.' }],
      ia: {
        tip: 'gorselsec',
        q: '<p>“Çok mutluluk beklemek, mutluluğu engeller.” cümlesine anlamca <b>en yakın</b> iki cümleye dokun.</p>',
        svg: '<svg class="an-svg" viewBox="0 0 340 234" role="group" aria-label="Dört cümle"><g data-b="r1" aria-label="Mutlu olmak için çok çalışmak gerekir."><rect x="4" y="6" width="332" height="44" rx="9" class="box"/><text x="14" y="32" font-size="14">Mutlu olmak için çok çalışmak gerekir.</text></g><g data-b="r2" aria-label="İnsan, az şey beklediğinde daha kolay mutlu olur."><rect x="4" y="58" width="332" height="54" rx="9" class="box"/><text x="14" y="80" font-size="14">İnsan, az şey beklediğinde</text><text x="14" y="100" font-size="14">daha kolay mutlu olur.</text></g><g data-b="r3" aria-label="Mutluluk, paylaşıldıkça çoğalır."><rect x="4" y="120" width="332" height="44" rx="9" class="box"/><text x="14" y="146" font-size="14">Mutluluk, paylaşıldıkça çoğalır.</text></g><g data-b="r4" aria-label="Beklentisi büyük olan, küçük sevinçleri göremez."><rect x="4" y="172" width="332" height="54" rx="9" class="box"/><text x="14" y="194" font-size="14">Beklentisi büyük olan,</text><text x="14" y="214" font-size="14">küçük sevinçleri göremez.</text></g></svg>',
        dogru: ['r2', 'r4'],
        hint: 'Konusu mutluluk olan her cümle yakın anlamlı değildir. Yargıya bak: Beklenti mutluluğu nasıl etkiliyor?',
        why: 'Asıl yargı şu: Beklentiyi azaltmak insanı mutlu eder. İkinci ve dördüncü cümle bunu söylüyor; öbür ikisi aynı konuda başka yargılar kuruyor.'
      } },

    { t: 'Çözüm stratejisi',
      steps: [
        { s: 'Hepsini bir çözüm sırasına bağlayalım.',
          h: '<div class="an-ex"><span class="an-l rv s1">1. Soru kökündeki kilit sözü yakala: kesin, en yakın, örnek olamaz.</span>' +
             '<span class="an-l rv s2">2. Cümlenin yargısını kendi sözünle tek cümlede söyle.</span>' +
             '<span class="an-l rv s3">3. Şıkkı parça parça karşılaştır: kişi, zaman, derece, neden.</span>' +
             '<span class="an-l rv s4">4. Metinden fazlasını söyleyen şıkları ele.</span>' +
             '<span class="an-l rv s5">5. Kalan şıklardan yargıyı eksiksiz karşılayanı seç.</span></div>' },
        { s: 'Önce soru kökündeki kilit sözü yakala. “Kesin” mi soruyor, “en yakın” mı?', on: '.s1' },
        { s: 'Sonra cümlenin yargısını kendi sözlerinle söyle. Benzetme varsa ortak özelliği bul.', on: '.s2' },
        { s: 'Şıkları parça parça karşılaştır. Özellikle “en, biri, kadar” gibi derece sözcüklerine dikkat et.', on: '.s3' },
        { s: 'Metnin söylediğinden fazlasını söyleyen şıkları ele. Kalanlardan yargıyı eksiksiz karşılayanı seç.', on: '.s4,.s5' },
        { s: 'İşte bu kadar. Artık şıkların oyununu görebiliyorsun. Hadi şimdi sorularla pekiştir!' }
      ] }
  ]
};
