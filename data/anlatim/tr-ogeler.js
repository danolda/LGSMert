/* Adım Adım Anlatım · Türkçe · Cümlenin Ögeleri (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['tr-ogeler'] = {
  title: 'Cümlenin Ögeleri',
  desc: 'Yüklem, özne, nesne, yer ve zarf tamlayıcısı: doğru bulma sırası, bölünmeyen söz öbekleri ve LGS’de çeldirici olan -e/-de/-den ekli zarf tamlayıcısı tuzakları.',
  ozet: [
    'Sıra hep aynı: önce <b>yüklem</b>, sonra özne, sonra nesne, en son tümleçler. Bütün soruları <b>yükleme</b> sor.',
    '<b>Özne</b>: “…an kim / …an ne?” Gizli özne yüklemdeki kişi ekinden anlaşılır, öge sayısına katılmaz. Edilgen yüklemde işten etkilenen öge <b>sözde öznedir</b>.',
    '<b>Nesne</b>: belirtili (-ı, -i ekli; neyi, kimi?) ve belirtisiz (yalın; ne?). Önce özne bulunur, sonra belirtisiz nesne.',
    '<b>Yer tamlayıcısı</b> mutlaka -e, -de, -den ekini alır ve yer, yön bildirir: nereye, nerede, nereden, kime, neye?',
    '<b>Zarf tamlayıcısı</b>: nasıl, ne zaman, ne kadar, niçin, ne ile, kiminle? -e/-de/-den ekli olsa da zaman, durum, sebep bildiriyorsa zarf tamlayıcısıdır: ilkbaharda, yürekten, susuzluktan, saatte.',
    '<b>Bölünmez</b>: tamlamalar, deyimler, birleşik fiiller, ikilemeler, unvan grupları ve fiilimsi grupları tek ögedir. Fiilimsi grubunun içindeki -de ekli sözcük ayrı yer tamlayıcısı olmaz.',
    'Ek almamış yön sözcükleri (içeri, dışarı, ileri) zarf tamlayıcısıdır; -e, -de, -den alınca (içeriye, dışarıda) yer tamlayıcısı olur.',
    'Ara söz açıkladığı ögenin içindedir. Ünlem, hitap, bağlaç ve ara cümle hiçbir soruya cevap vermez: cümle dışı unsur.'
  ],
  scenes: [
    { t: 'Önce yüklem!',
      base: '<svg class="an-svg" viewBox="0 0 340 128" role="img" aria-label="Öge bulma sırası: yüklem, özne, nesne, tümleçler">' +
        '<rect x="4" y="18" width="70" height="56" rx="10" class="boxa rv o1"/><text x="39" y="42" font-size="20" text-anchor="middle" font-weight="700" class="acc rv o1">1</text><text x="39" y="63" font-size="13" text-anchor="middle" font-weight="700" class="rv o1">Yüklem</text>' +
        '<path class="st dr o2" d="M76 46 L90 46"/>' +
        '<rect x="92" y="18" width="70" height="56" rx="10" class="box rv o2"/><text x="127" y="42" font-size="20" text-anchor="middle" font-weight="700" class="acc rv o2">2</text><text x="127" y="63" font-size="13" text-anchor="middle" font-weight="700" class="rv o2">Özne</text>' +
        '<path class="st dr o3" d="M164 46 L178 46"/>' +
        '<rect x="180" y="18" width="70" height="56" rx="10" class="box rv o3"/><text x="215" y="42" font-size="20" text-anchor="middle" font-weight="700" class="acc rv o3">3</text><text x="215" y="63" font-size="13" text-anchor="middle" font-weight="700" class="rv o3">Nesne</text>' +
        '<path class="st dr o4" d="M252 46 L266 46"/>' +
        '<rect x="268" y="18" width="70" height="56" rx="10" class="box rv o4"/><text x="303" y="42" font-size="20" text-anchor="middle" font-weight="700" class="acc rv o4">4</text><text x="303" y="63" font-size="13" text-anchor="middle" font-weight="700" class="rv o4">Tümleçler</text>' +
        '<text x="39" y="96" font-size="11" text-anchor="middle" class="mut rv o1">temel yargı</text>' +
        '<text x="127" y="96" font-size="11" text-anchor="middle" class="mut rv o2">kim? ne?</text>' +
        '<text x="215" y="96" font-size="11" text-anchor="middle" class="mut rv o3">neyi? ne?</text>' +
        '<text x="303" y="96" font-size="11" text-anchor="middle" class="mut rv o4">nereye? nasıl?</text>' +
        '<text x="170" y="122" font-size="12" text-anchor="middle" class="acc rv o5">Bütün sorular yükleme sorulur.</text></svg>',
      steps: [
        { s: 'Merhaba! Bu derste bir cümleyi parçalarına ayırmayı öğreneceğiz. Bu parçalara <b>öge</b> diyoruz.', v: 'Merhaba! Bu derste bir cümleyi parçalarına ayırmayı öğreneceğiz. Bu parçalara öge diyoruz.' },
        { s: 'İşin sırrı sırayı bozmamak. İlk iş her zaman <b>yüklemi</b> bulmak, çünkü cümlenin asıl yargısı orada.', v: 'İşin sırrı sırayı bozmamak. İlk iş her zaman yüklemi bulmak, çünkü cümlenin asıl yargısı orada.', on: '.o1' },
        { s: 'Yüklemi bulduktan sonra özneyi ararız.', on: '.o2' },
        { s: 'Ardından nesneye bakarız.', on: '.o3' },
        { s: 'En sona da yer ve zarf tamlayıcılarını, yani tümleçleri bırakırız.', on: '.o4' },
        { s: 'Ve şunu hiç unutma: soruları rastgele bir sözcüğe değil, hep <b>yükleme</b> soruyoruz.', v: 'Ve şunu hiç unutma: soruları rastgele bir sözcüğe değil, hep yükleme soruyoruz.', on: '.o5' }
      ] },

    { t: 'Yüklem: cümlenin kalbi',
      steps: [
        { s: 'Yüklem, cümlede yargıyı bildiren ögedir. Onu çıkarırsan cümle diye bir şey kalmaz.',
          h: '<div class="an-rule"><b>Yüklem</b> = yargı bildiren öge. Soru sorulmaz, ilk o bulunur.</div>' },
        { s: 'Yüklem çekimli bir fiil olabilir. Mesela “Çocuklar bahçede oynuyor.” cümlesinde yüklem “oynuyor”.',
          v: 'Yüklem çekimli bir fiil olabilir. Mesela, çocuklar bahçede oynuyor cümlesinde yüklem, oynuyor.',
          h: '<div class="an-ex"><span class="an-l">Çocuklar bahçede <span class="an-w">oynuyor</span>. → çekimli fiil</span></div>' },
        { s: 'Ya da ek-fiil almış bir isim olabilir: “En sevdiğim mevsim ilkbahardır.” Burada yüklem “ilkbahardır”.',
          v: 'Ya da ek fiil almış bir isim olabilir: En sevdiğim mevsim ilkbahardır. Burada yüklem, ilkbahardır.',
          h: '<div class="an-ex"><span class="an-l">En sevdiğim mevsim <span class="an-w">ilkbahardır</span>. → isim + ek-fiil</span></div>' },
        { s: 'Bir de şuna dikkat: deyimler ve “yardım etmek, karar vermek” gibi birleşik fiiller bölünmez, bütünüyle yüklem olur.',
          v: 'Bir de şuna dikkat: deyimler ve yardım etmek, karar vermek gibi birleşik fiiller bölünmez, bütünüyle yüklem olur.',
          h: '<div class="an-tip">Söylediklerime <span class="an-w">kulak asmadı</span>. · Bize <span class="an-w">yardım etti</span>. → tek yüklem</div>' }
      ] },

    { t: 'Devrik cümlede yüklem',
      steps: [{ s: 'Bu cümle devrik: yüklem sonda değil. Yüklemi oluşturan bütün sözcüklere dokun, sonra Kontrol et’e bas.' }],
      ia: { tip: 'gorselsec', q: '<p>“Bize yardım etti dün akşam komşumuz.” Cümlenin <b>yüklemini</b> oluşturan sözcüklerin hepsine dokun.</p>',
        svg: '<svg class="an-svg" viewBox="0 0 340 112" role="group" aria-label="Bize yardım etti dün akşam komşumuz.">' +
          '<g data-b="w1"><rect x="10" y="8" width="56" height="40" rx="9" class="box"/><text x="38" y="33" text-anchor="middle" font-size="15">Bize</text></g>' +
          '<g data-b="w2"><rect x="74" y="8" width="78" height="40" rx="9" class="box"/><text x="113" y="33" text-anchor="middle" font-size="15">yardım</text></g>' +
          '<g data-b="w3"><rect x="160" y="8" width="56" height="40" rx="9" class="box"/><text x="188" y="33" text-anchor="middle" font-size="15">etti</text></g>' +
          '<g data-b="w4"><rect x="224" y="8" width="46" height="40" rx="9" class="box"/><text x="247" y="33" text-anchor="middle" font-size="15">dün</text></g>' +
          '<g data-b="w5"><rect x="278" y="8" width="56" height="40" rx="9" class="box"/><text x="306" y="33" text-anchor="middle" font-size="15">akşam</text></g>' +
          '<g data-b="w6"><rect x="118" y="62" width="104" height="40" rx="9" class="box"/><text x="170" y="87" text-anchor="middle" font-size="15">komşumuz.</text></g>' + '</svg>',
        dogru: ['w2', 'w3'],
        hint: 'Yargı hangi sözcüklerde? “yardım” ve “et-” gibi yardımcı eylemle kurulan birleşik fiiller bölünmez.',
        hintV: 'Yargı hangi sözcüklerde? Yardım etmek gibi yardımcı eylemle kurulan birleşik fiiller bölünmez.',
        why: 'Yüklem “yardım etti”: birleşik fiil tek yüklemdir. Devrik cümlede yüklem ortada olabilir; yerine değil, yargıya bak.',
        whyV: 'Yüklem, yardım etti. Birleşik fiil tek yüklemdir. Devrik cümlede yüklem ortada olabilir; yerine değil, yargıya bak.' } },
    { t: 'Özne: işi kim yapıyor?',
      base: '<table class="an-tbl"><tr><th>Özne türü</th><th>Örnek</th></tr>' +
        '<tr class="rv z1"><td><b>Gerçek özne</b></td><td><span class="an-w">Küçük kedi</span> sütü içti.</td></tr>' +
        '<tr class="rv z2"><td><b>Gizli özne</b></td><td>Yarın sinemaya gideceğiz. <small>(biz)</small></td></tr>' +
        '<tr class="rv z3"><td><b>Sözde özne</b></td><td><span class="an-w">Sınıflar</span> güzelce temizlendi.</td></tr></table>',
      steps: [
        { s: 'Şimdi özneye geçelim. Özne, yüklemdeki işi yapan ya da durumu üstüne alan ögedir.' },
        { s: 'Bulmak çok kolay: yükleme “…an kim?” ya da “…an ne?” diye sorarsın. İçen ne? Küçük kedi. İşte özne bu.',
          v: 'Bulmak çok kolay: yükleme, an kim, ya da an ne, diye sorarsın. İçen ne? Küçük kedi. İşte özne bu.', on: '.z1' },
        { s: 'Bazen özne cümlede yazılmaz, yüklemin kişi ekinden anlaşılır. “Gideceğiz” diyorsa gizli özne “biz”dir.',
          v: 'Bazen özne cümlede yazılmaz, yüklemin kişi ekinden anlaşılır. Gideceğiz diyorsa, gizli özne biz’dir.', on: '.z2' },
        { s: 'Gizli özne cümlede yazılı olmadığı için öge sayısına ve sıralamaya katılmaz. Bunu aklının bir köşesine yaz.', v: 'Gizli özne cümlede yazılı olmadığı için öge sayısına ve sıralamaya katılmaz. Bunu aklının bir köşesine yaz.' },
        { s: 'Son olarak sözde özne. “Temizlendi” dediğimizde temizleyen belli değil. İşten etkilenen “sınıflar”, öznenin yerine geçmiş.',
          v: 'Son olarak sözde özne. Temizlendi dediğimizde temizleyen belli değil. İşten etkilenen sınıflar, öznenin yerine geçmiş.', on: '.z3' }
      ] },

    { t: 'Özne tuzakları',
      steps: [{ s: 'Özneyle ilgili dört ifade var. Her biri için Doğru ya da Yanlış seç.' }],
      ia: { tip: 'dogruyanlis', q: '<p>Her ifade için karar ver.</p>',
        ifadeler: [
          { m: '“Yarın sinemaya gideceğiz.” cümlesinde özne yoktur.', d: false, a: 'Gizli özne var: biz. Yüklemdeki kişi ekinden anlaşılır.' },
          { m: '“Sınıflar güzelce temizlendi.” cümlesinde “sınıflar” sözde öznedir.', d: true, a: 'Temizleyen belli değil; işten etkilenen öge özne yerine geçmiş.' },
          { m: 'Gizli özne, cümlenin öge sayısına katılır.', d: false, a: 'Cümlede yazılı olmadığı için sayılmaz, sıraya da girmez.' },
          { m: '“Ağaçlar sonbaharda yapraklarını döker.” cümlesinde özne “yapraklarını” sözcüğüdür.', d: false, a: 'Döken ne? Ağaçlar. “Yapraklarını” neyi? sorusunun cevabı: nesne.' }],
        hint: 'Yükleme “…an kim, …an ne?” diye sor. Yazılı olmayan özne yüklemin kişi ekinden çıkar.',
        hintV: 'Yükleme an kim, an ne, diye sor. Yazılı olmayan özne yüklemin kişi ekinden çıkar.',
        why: 'Gizli özne vardır ama sayılmaz; edilgen yüklemde işten etkilenen öge sözde öznedir; -ı ekli öbek özne değil, nesnedir.',
        whyV: 'Gizli özne vardır ama öge sayısına katılmaz. Edilgen yüklemde işten etkilenen öge sözde öznedir. Sonu ı ekiyle biten öbek ise özne değil, nesnedir.' } },
    { t: 'Nesne: işten etkilenen',
      steps: [
        { s: 'Nesne, öznenin yaptığı işten etkilenen ögedir. İki türlüdür, ikisine de bakalım.',
          h: '<div class="an-grid" style="grid-template-columns:repeat(2,1fr)"><div><b>Belirtili nesne</b>-ı, -i ekli · neyi? kimi?</div><div><b>Belirtisiz nesne</b>ek yok · ne?</div></div>' },
        { s: '“Kırılan vazoyu çöpe attı.” Neyi attı? Kırılan vazoyu. Sonunda -yu eki var, yani belirtili nesne.',
          v: 'Kırılan vazoyu çöpe attı. Neyi attı? Kırılan vazoyu. Sonunda yu eki var, yani belirtili nesne.',
          h: '<div class="an-ex"><span class="an-l"><span class="an-w">Kırılan vazoyu</span> çöpe attı. → neyi? belirtili nesne</span><span class="an-l">Babam bana <span class="an-w">saat</span> aldı. → ne? belirtisiz nesne</span></div>' },
        { s: '“Babam bana saat aldı.” Ne aldı? Saat. Hiç ek almamış, yalın duruyor. Bu da belirtisiz nesne.',
          v: 'Babam bana saat aldı. Ne aldı? Saat. Hiç ek almamış, yalın duruyor. Bu da belirtisiz nesne.' },
        { s: 'Burada çok dikkat et: hem özneye hem belirtisiz nesneye “ne?” diye sorulur. O yüzden önce özneyi bul, sonra nesneye geç.',
          v: 'Burada çok dikkat et: hem özneye hem belirtisiz nesneye ne diye sorulur. O yüzden önce özneyi bul, sonra nesneye geç.',
          h: '<div class="an-trap"><b>Altın kural:</b> Önce özne, sonra belirtisiz nesne. Sırayı bozarsan ikisini karıştırırsın.</div>' },
        { s: 'Bir de şu: isim cümlesinde nesne olmaz. Nesne yalnızca nesne alabilen fiillerle kurulan cümlelerde bulunur.' }
      ] },

    { t: 'Özne mi, nesne mi?',
      steps: [{ s: 'Koyu yazılan her öbeği doğru kutuya yerleştir. Önce özneyi bulmayı unutma!' }],
      ia: { tip: 'grup', q: '<p>Koyu öbekleri görevlerine göre kutulara yerleştir.</p>',
        gruplar: ['Özne', 'Belirtili nesne', 'Belirtisiz nesne'],
        ogeler: [{ m: 'Babam <b>saat</b> aldı.', g: 2 }, { m: '<b>Kırılan vazoyu</b> attı.', g: 1 }, { m: '<b>Kedi</b> süt içti.', g: 0 }, { m: 'Kedi <b>süt</b> içti.', g: 2 },
          { m: '<b>Kapıyı</b> kapattı.', g: 1 }, { m: '<b>Rüzgâr</b> camı kırdı.', g: 0 }, { m: 'Annem <b>çay</b> demledi.', g: 2 }, { m: '<b>Öğretmenimizi</b> sevdik.', g: 1 }, { m: '<b>Çocuklar</b> top oynadı.', g: 0 }],
        hint: 'Önce “…an kim, …an ne?” ile özneyi bul. Kalan öbek -ı, -i ekliyse belirtili, eksizse belirtisiz nesnedir.',
        hintV: 'Önce an kim, an ne sorusuyla özneyi bul. Kalan öbek ı, i ekliyse belirtili, eksizse belirtisiz nesnedir.',
        why: 'Özne: kedi, rüzgâr, çocuklar. Belirtili nesne: kırılan vazoyu, kapıyı, öğretmenimizi. Belirtisiz nesne: saat, süt, çay. Özne ve belirtisiz nesnenin ikisi de eksizdir; sıra kurtarır.',
        whyV: 'Özne: kedi, rüzgâr, çocuklar. Belirtili nesne: kırılan vazoyu, kapıyı, öğretmenimizi. Belirtisiz nesne: saat, süt, çay. Özne de belirtisiz nesne de eksizdir; onları ayıran, bulma sırasıdır.' } },
    { t: 'Bir cümleyi birlikte ayıralım',
      base: '<div class="an-big rv c0" style="font-size:19px">Dün akşam annem bize güzel bir masal anlattı.</div>' +
        '<table class="an-tbl"><tr><th>Öge</th><th>Soru</th><th>Cevap</th></tr>' +
        '<tr class="rv c1"><td><b>Yüklem</b></td><td>—</td><td>anlattı</td></tr>' +
        '<tr class="rv c2"><td><b>Özne</b></td><td>Anlatan kim?</td><td>annem</td></tr>' +
        '<tr class="rv c3"><td><b>Belirtisiz nesne</b></td><td>Ne anlattı?</td><td>güzel bir masal</td></tr>' +
        '<tr class="rv c4"><td><b>Yer tamlayıcısı</b></td><td>Kime anlattı?</td><td>bize</td></tr>' +
        '<tr class="rv c5"><td><b>Zarf tamlayıcısı</b></td><td>Ne zaman?</td><td>dün akşam</td></tr></table>',
      steps: [
        { s: 'Şimdi şu cümleye birlikte bakalım: “Dün akşam annem bize güzel bir masal anlattı.”',
          v: 'Şimdi şu cümleye birlikte bakalım: Dün akşam annem bize güzel bir masal anlattı.', on: '.c0' },
        { s: 'İlk iş yüklem. Yargı nerede? “Anlattı.”', v: 'İlk iş yüklem. Yargı nerede? Anlattı.', on: '.c1' },
        { s: 'Anlatan kim? Annem. Özneyi bulduk.', on: '.c2' },
        { s: 'Şimdi nesne. Ne anlattı? Güzel bir masal. Ek almamış, belirtisiz nesne. “Güzel bir” sözcükleri masaldan ayrılmaz.',
          v: 'Şimdi nesne. Ne anlattı? Güzel bir masal. Ek almamış, belirtisiz nesne. Güzel bir sözcükleri masaldan ayrılmaz.', on: '.c3' },
        { s: 'Kime anlattı? Bize. -e eki almış, yer tamlayıcısı.', v: 'Kime anlattı? Bize. E eki almış, yer tamlayıcısı.', on: '.c4' },
        { s: 'Ne zaman anlattı? Dün akşam. Zarf tamlayıcısı. Gördün mü, sırayı bozmadan gidince her şey yerine oturuyor.', on: '.c5' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdaki cümlelerin hangisinde altı çizili söz öbeği <b>özne</b> görevindedir?</p>',
        c: ['Sabahları <span class="an-w">bahçedeki yaşlı çınarın gölgesini</span> kuşlar paylaşırdı.', '<span class="an-w">Köyün girişindeki eski çeşmenin sesi</span> bütün sokağı doldururdu.', 'Annem <span class="an-w">pazardan aldığı taze sebzeleri</span> özenle yıkadı.', 'Dedem <span class="an-w">yıllardır sakladığı mektupları</span> bize okudu.'], a: 'B',
        hint: 'Önce yüklemi bul, sonra “…an ne?” diye sor. Sonu -ı, -i ekiyle biten öbek “neyi?” sorusuna cevap veriyorsa nesnedir.',
        hintV: 'Önce yüklemi bul, sonra an ne diye sor. Sonu ı, i ekiyle biten öbek neyi sorusuna cevap veriyorsa nesnedir.',
        why: 'Dolduran ne? “Köyün girişindeki eski çeşmenin sesi.” Bu özne. A, C ve D’deki öbekler “neyi?” sorusunun cevabı, yani belirtili nesne. A’da özne “kuşlar”.',
        whyV: 'Dolduran ne? Köyün girişindeki eski çeşmenin sesi. Bu özne. A, C ve D’deki öbekler neyi sorusunun cevabı, yani belirtili nesne. A’da özne kuşlar.' },
      steps: [{ s: 'Hadi bakalım, sıra sende. Uzun öbekler seni korkutmasın, soruyu yükleme sor.' }] },

    { t: 'Yer tamlayıcısı: -e, -de, -den',
      base: '<div class="an-grid"><div class="rv y1"><b>-e</b>nereye? kime?</div><div class="rv y2"><b>-de</b>nerede? kimde?</div><div class="rv y3"><b>-den</b>nereden? kimden?</div></div>',
      steps: [
        { s: 'Gelelim tümleçlere. Yer tamlayıcısı, yüklemin yöneldiği, bulunduğu ya da çıktığı yeri söyler.' },
        { s: 'Mutlaka bu üç ekten birini alır. Birincisi -e: “Kitaplarını çantasına koydu.” Nereye? Çantasına.',
          v: 'Mutlaka bu üç ekten birini alır. Birincisi e eki: Kitaplarını çantasına koydu. Nereye? Çantasına.', on: '.y1' },
        { s: 'İkincisi -de: “Evde kimse kalmamıştı.” Nerede? Evde.', v: 'İkincisi de eki: Evde kimse kalmamıştı. Nerede? Evde.', on: '.y2' },
        { s: 'Üçüncüsü -den: “Samsun’dan dün döndük.” Nereden? Samsun’dan.', v: 'Üçüncüsü den eki: Samsun’dan dün döndük. Nereden? Samsun’dan.', on: '.y3' },
        { s: 'Ama dikkat, bu ekleri gördün diye hemen yer tamlayıcısı deme. Önce sorunun cevabına bak. Bir sonraki sahnede neden böyle dediğimi göreceksin.' }
      ] },

    { t: 'Zarf tamlayıcısı ve büyük tuzak',
      steps: [
        { s: 'Zarf tamlayıcısı yüklemi durum, zaman, miktar, sebep ya da araç yönünden tamamlar.',
          h: '<div class="an-rule"><b>Zarf tamlayıcısı:</b> nasıl? ne zaman? ne kadar? niçin? ne ile? kiminle?</div>' },
        { s: '“Koşarak içeri girdi.” Nasıl? Koşarak. “Okula otobüsle gitti.” Ne ile? Otobüsle. İkisi de zarf tamlayıcısı.',
          v: 'Koşarak içeri girdi. Nasıl? Koşarak. Okula otobüsle gitti. Ne ile? Otobüsle. İkisi de zarf tamlayıcısı.' },
        { s: '“ile, için, gibi, kadar, sonra” ile kurulan öbekler de zarf tamlayıcısıdır: “Yağmurdan sonra gökkuşağı çıktı.”',
          v: 'İle, için, gibi, kadar, sonra ile kurulan öbekler de zarf tamlayıcısıdır: Yağmurdan sonra gökkuşağı çıktı.' },
        { s: 'Ve işte büyük tuzak. Sözcük -e, -de, -den eki alsa bile “ne zaman, nasıl, niçin” sorusuna cevap veriyorsa zarf tamlayıcısıdır!',
          v: 'Ve işte büyük tuzak. Sözcük e, de, den eki alsa bile ne zaman, nasıl, niçin sorusuna cevap veriyorsa zarf tamlayıcısıdır!',
          h: '<table class="an-tbl"><tr class="rv t1"><td><span class="an-w">İlkbaharda</span> ağaçlar çiçek açar.</td><td>Ne zaman?</td></tr>' +
             '<tr class="rv t2"><td>Misafirleri <span class="an-w">yürekten</span> karşıladı.</td><td>Nasıl?</td></tr>' +
             '<tr class="rv t3"><td><span class="an-w">Susuzluktan</span> dudakları çatlamıştı.</td><td>Niçin?</td></tr>' +
             '<tr class="rv t4"><td>Kasırga <span class="an-w">saatte</span> yüz kilometreyi aşar.</td><td>Ne kadar?</td></tr></table>' },
        { s: '“İlkbaharda” bir yer değil, bir zaman. Ne zaman açar? İlkbaharda. Demek ki zarf tamlayıcısı.', v: 'İlkbaharda bir yer değil, bir zaman. Ne zaman açar? İlkbaharda. Demek ki zarf tamlayıcısı.', on: '.t1' },
        { s: '“Yürekten” nasıl karşıladığını, “susuzluktan” da neden çatladığını anlatıyor.', v: 'Yürekten, nasıl karşıladığını; susuzluktan da neden çatladığını anlatıyor.', on: '.t2,.t3' },
        { s: 'Bu sonuncusu LGS’de soruldu: “saatte” bir yer bildirmiyor, hız ve ölçü bildiriyor. Yine zarf tamlayıcısı.', v: 'Bu sonuncusu LGS’de soruldu: saatte, bir yer bildirmiyor; hız ve ölçü bildiriyor. Yine zarf tamlayıcısı.', on: '.t4' }
      ] },

    { t: 'Ekli ama yer değil',
      steps: [{ s: 'Koyu sözcüklerin hepsi -e, -de, -den eki almış. Yer tamlayıcısı olmayanları ele.', v: 'Koyu sözcüklerin hepsi e, de, den eki almış. Yer tamlayıcısı olmayanları ele.' }],
      ia: { tip: 'eleme', q: '<p>Koyu sözcüklerden <b>yer tamlayıcısı olmayanları</b> ele.</p>',
        ogeler: ['<b>Korkudan</b> titriyordu.', '<b>Mutfaktan</b> ses geldi.', '<b>Sonbaharda</b> yapraklar döküldü.', 'Mektubu <b>dedeme</b> verdim.', '<b>Dakikada</b> elli sözcük yazar.', 'Bütün gün <b>evde</b> kaldık.'],
        ele: [0, 2, 4],
        hint: 'Her birini ana yükleme sor: cevap “nereye, nerede, nereden, kime” mi, yoksa “niçin, ne zaman, ne kadar” mı?',
        hintV: 'Her birini ana yükleme sor: cevap nereye, nerede, nereden, kime mi; yoksa niçin, ne zaman, ne kadar mı?',
        why: 'Korkudan (niçin?), sonbaharda (ne zaman?), dakikada (ne kadar?) zarf tamlayıcısıdır. Mutfaktan, dedeme, evde yer ve yön bildirir: yer tamlayıcısı.',
        whyV: 'Korkudan niçin sorusuna, sonbaharda ne zaman sorusuna, dakikada ne kadar sorusuna cevap verir: üçü de zarf tamlayıcısı. Mutfaktan, dedeme ve evde ise yer ve yön bildirir: yer tamlayıcısı.' } },
    { t: 'İçeri mi, içeriye mi?',
      base: '<table class="an-tbl"><tr><th>Ek yok → zarf tamlayıcısı</th><th>Ek var → yer tamlayıcısı</th></tr>' +
        '<tr class="rv i1"><td>Çocuk hızla <span class="an-w">içeri</span> girdi.</td><td>Çocuk hızla <span class="an-w">içeriye</span> girdi.</td></tr>' +
        '<tr class="rv i2"><td>Biraz <span class="an-w">ileri</span> yürüdük.</td><td>Sesler <span class="an-w">aşağıdan</span> geliyordu.</td></tr></table>',
      steps: [
        { s: 'Bir de yön sözcükleri var: içeri, dışarı, aşağı, yukarı, ileri, geri. Bunlar küçük bir ayrıntıyla tür değiştirir.' },
        { s: 'Hiç ek almamışlarsa zarf tamlayıcısıdır. “İçeri girdi” dediğimizde “içeri” yalın duruyor.', v: 'Hiç ek almamışlarsa zarf tamlayıcısıdır. İçeri girdi dediğimizde, içeri yalın duruyor.', on: '.i1' },
        { s: 'Ama “içeriye” dersen -e eki geldi. Artık yer tamlayıcısı. “Aşağıdan” da aynı şekilde.', v: 'Ama içeriye dersen, e eki geldi. Artık yer tamlayıcısı. Aşağıdan da aynı şekilde.', on: '.i2' },
        { s: 'Kısacası yön sözcüğünde karar veren şey ek: ek yoksa zarf, ek varsa yer.' }
      ] },

    { t: 'Bölünmeyen söz öbekleri',
      steps: [
        { s: 'Ögeleri ayırırken bazı söz gruplarını asla bölmeyiz. Bunlar tek parça hâlinde tek öge olur.',
          h: '<div class="an-rule"><b>Tek öge sayılır:</b> isim ve sıfat tamlamaları · deyimler · birleşik fiiller · ikilemeler · unvan grupları · fiilimsi grupları</div>' },
        { s: '“Eski evin ahşap kapısı gıcırdıyordu.” Gıcırdayan ne? Eski evin ahşap kapısı. Tamlama bölünmez, hepsi özne.',
          v: 'Eski evin ahşap kapısı gıcırdıyordu. Gıcırdayan ne? Eski evin ahşap kapısı. Tamlama bölünmez, hepsi özne.',
          h: '<div class="an-ex"><span class="an-l"><span class="an-w">Eski evin ahşap kapısı</span> gıcırdıyordu. → özne</span></div>' },
        { s: 'Asıl tuzak fiilimsi grupları. “Masada duran kırmızı kalemi bana uzattı.” Neyi uzattı? Masada duran kırmızı kalemi.',
          v: 'Asıl tuzak fiilimsi grupları. Masada duran kırmızı kalemi bana uzattı. Neyi uzattı? Masada duran kırmızı kalemi.',
          h: '<div class="an-ex"><span class="an-l"><span class="an-w">Masada duran kırmızı kalemi</span> bana uzattı. → belirtili nesne</span></div>' },
        { s: 'Burada “masada” -de eki taşıyor ama ayrı bir yer tamlayıcısı değil. Çünkü “duran” sözcüğüne bağlı, grubun içinde kalıyor.',
          v: 'Burada masada, de eki taşıyor ama ayrı bir yer tamlayıcısı değil. Çünkü duran sözcüğüne bağlı, grubun içinde kalıyor.',
          h: '<div class="an-trap">Fiilimsi grubunun içindeki -e, -de, -den ekli sözcük <b>ayrı öge değildir</b>. Soruyu ana yükleme sor!</div>' },
        { s: 'LGS’de yer tamlayıcısı soruları tam olarak bu noktadan geldi. Soruyu hep ana yükleme sor, fiilimsiye değil.', v: 'LGS’de yer tamlayıcısı soruları tam olarak bu noktadan geldi. Soruyu hep ana yükleme sor, fiilimsiye değil.' }
      ] },

    { t: 'Öbekleri görevleriyle eşleştir',
      steps: [{ s: 'Bu cümlenin her öbeğini görevine bağla. Fiilimsi grubunu bölmemeye dikkat!', v: 'Bu cümlenin her öbeğini görevine bağla. Fiilimsi grubunu bölmemeye dikkat!' }],
      ia: { tip: 'eslestir', q: '<p>“Geçen yaz köyde yaşayan dedem bize eski fotoğrafları gösterdi.” Her öbeği görevine bağla.</p>', solBaslik: 'Öbek', sagBaslik: 'Görevi',
        sol: ['geçen yaz', 'köyde yaşayan dedem', 'bize', 'eski fotoğrafları', 'gösterdi'],
        sag: ['Zarf tamlayıcısı', 'Özne', 'Yer tamlayıcısı', 'Belirtili nesne', 'Yüklem'],
        hint: 'Soruları ana yükleme sor: gösteren kim, neyi gösterdi, kime gösterdi, ne zaman gösterdi? “köyde” kime bağlı?',
        hintV: 'Soruları ana yükleme sor: gösteren kim, neyi gösterdi, kime gösterdi, ne zaman gösterdi? Köyde sözcüğü hangi sözcüğe bağlı?',
        why: '“köyde” -de eki alsa da “yaşayan”a bağlı; grubun içinde kalır. Gösteren kim? Köyde yaşayan dedem: özne. Kime? Bize: yer tamlayıcısı.',
        whyV: 'Köyde, de eki alsa da yaşayan sözcüğüne bağlı; grubun içinde kalır. Gösteren kim? Köyde yaşayan dedem: özne. Kime? Bize: yer tamlayıcısı.' } },
    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdaki cümlelerin hangisinde <b>yer tamlayıcısı vardır</b>?</p>',
        c: ['Kütüphanede çalışan öğrenciler sessizce kitap okuyordu.', 'Tren saatte yüz kilometre hızla ilerliyordu.', 'Denizden esen serin rüzgâr yüzümüzü okşuyordu.', 'Kardeşim yeni aldığı kitabı çantasına koydu.'], a: 'D',
        hint: '-e, -de, -den ekli sözcük bir fiilimsi grubunun içinde mi kalıyor, yoksa zaman ya da ölçü mü bildiriyor? Soruyu ana yükleme sor.',
        hintV: 'E, de, den ekli sözcük bir fiilimsi grubunun içinde mi kalıyor, yoksa zaman ya da ölçü mü bildiriyor? Soruyu ana yükleme sor.',
        why: 'Nereye koydu? Çantasına: yer tamlayıcısı. A’da “Kütüphanede çalışan öğrenciler”, C’de “Denizden esen serin rüzgâr” öznenin içinde kalıyor; B’deki “saatte” ölçü bildiriyor.',
        whyV: 'Nereye koydu? Çantasına. İşte yer tamlayıcısı. A’da kütüphanede çalışan öğrenciler, C’de denizden esen serin rüzgâr öznenin içinde kalıyor. B’deki saatte ise ölçü bildiriyor.' },
      steps: [{ s: 'Şimdi bir LGS tuzağıyla karşı karşıyasın. Ekleri değil, soruların cevabını takip et.' }] },

    { t: 'Vurgu nerede?',
      steps: [
        { s: 'Vurgu, cümlede en çok önem verilen ögedir. Kurallı bir fiil cümlesinde genellikle yüklemin hemen önündedir.',
          h: '<table class="an-tbl"><tr class="rv v1"><td>Annem dün <span class="an-w">kütüphaneye</span> gitti.</td><td>vurgu: yer tamlayıcısı</td></tr>' +
             '<tr class="rv v2"><td>Kütüphaneye dün <span class="an-w">annem</span> gitti.</td><td>vurgu: özne</td></tr></table>', on: '.v1' },
        { s: 'Ögelerin yerini değiştirince vurgu da değişir. Şimdi yüklemin önünde “annem” var, vurgu özneye geçti.', v: 'Ögelerin yerini değiştirince vurgu da değişir. Şimdi yüklemin önünde annem var, vurgu özneye geçti.', on: '.v2' },
        { s: 'Soru cümlesinde ise soru sözcüğüne bak. “Bu kitabı kim okudu?” Vurgu öznede.',
          v: 'Soru cümlesinde ise soru sözcüğüne bak. Bu kitabı kim okudu? Vurgu öznede.',
          h: '<div class="an-tip">Bu kitabı <b>kim</b> okudu? → özne · Dün <b>sinemaya mı</b> gittiniz? → yer tamlayıcısı</div>' },
        { s: '“mi” eki de hangi ögenin hemen arkasındaysa vurguyu oraya taşır.', v: 'Mi eki de hangi ögenin hemen arkasındaysa vurguyu oraya taşır.' }
      ] },

    { t: 'Ara söz ve cümle dışı unsur',
      steps: [
        { s: 'Son bir konu kaldı. Ara söz, bir ögeyi açıklamak için iki virgül ya da iki kısa çizgi arasına yazılan sözdür.',
          h: '<div class="an-ex"><span class="an-l">Memleketime, <span class="an-w">Samsun’a</span>, yarın gidiyorum.</span></div>' },
        { s: '“Samsun’a” sözü “memleketime”yi açıklıyor. O yüzden ayrı öge sayılmaz, açıkladığı yer tamlayıcısının içinde kalır.',
          v: 'Samsun’a sözü, memleketime sözcüğünü açıklıyor. O yüzden ayrı öge sayılmaz, açıkladığı yer tamlayıcısının içinde kalır.' },
        { s: 'Bir de hiçbir soruya cevap vermeyen parçalar var: hitaplar, ünlemler, “ama, çünkü” gibi bağlaçlar ve ara cümleler.',
          v: 'Bir de hiçbir soruya cevap vermeyen parçalar var: hitaplar, ünlemler, ama, çünkü gibi bağlaçlar ve ara cümleler.',
          h: '<div class="an-rule"><b>Cümle dışı unsur:</b> <span class="an-w">Arkadaşlar</span>, yarın erken toplanıyoruz. · Ali, <span class="an-w">eminim</span>, yarın gelir.</div>' },
        { s: 'Bunlara cümle dışı unsur deriz. Öge sayarken bunları hesaba katmazsın.' }
      ] },

    { t: 'Kaç öge var?',
      steps: [{ s: 'Bu cümlede kaç öge var? Hitabı ve ara cümleyi hesaba katmadan say, sonra kaydırıcıyla sayıyı seç.' }],
      ia: { tip: 'kaydir', q: '<p>“Arkadaşlar, eminim, yarın sabah hepiniz okulun bahçesinde toplanacaksınız.” Bu cümle <b>kaç ögeden</b> oluşur?</p>',
        min: 1, max: 8, adim: 1, cevap: 4, tol: 0, birim: 'öge', etiket: [1, 2, 3, 4, 5, 6, 7, 8],
        hint: 'Önce yüklemi bul, sonra yükleme soru sor. “Arkadaşlar” ve “eminim” bir soruya cevap veriyor mu? Tamlamayı bölme.',
        hintV: 'Önce yüklemi bul, sonra yükleme soru sor. Arkadaşlar ve eminim sözleri bir soruya cevap veriyor mu? Tamlamayı da bölme.',
        why: 'Dört öge: yarın sabah (zarf tamlayıcısı), hepiniz (özne), okulun bahçesinde (yer tamlayıcısı), toplanacaksınız (yüklem). Hitap ve ara cümle cümle dışıdır.',
        whyV: 'Dört öge var: yarın sabah zarf tamlayıcısı, hepiniz özne, okulun bahçesinde yer tamlayıcısı, toplanacaksınız yüklem. Arkadaşlar hitap, eminim ara cümle; ikisi de cümle dışı unsurdur.' } },
    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdaki cümlelerin hangisinin ögeleri <b>zarf tamlayıcısı – özne – yer tamlayıcısı – yüklem</b> sırasıyla dizilmiştir?</p>',
        c: ['Akşamüstü bütün mahalleli meydanda toplandı.', 'Bütün mahalleli akşamüstü meydanda toplandı.', 'Meydanda toplanan mahalleliler akşamüstü dağıldı.', 'Akşamüstü köyden gelen misafirleri karşıladık.'], a: 'A',
        hint: 'Her cümlede önce yüklemi bul, sonra ögeleri soldan sağa tek tek sor. Fiilimsi gruplarını bölme, gizli özne sıraya girmez.',
        why: 'Ne zaman? Akşamüstü. Toplanan kim? Bütün mahalleli. Nerede? Meydanda. Yüklem: toplandı. B’de özne başta; C’de “Meydanda toplanan mahalleliler” tek özne; D’de nesne var ve özne gizli.',
        whyV: 'Ne zaman? Akşamüstü. Toplanan kim? Bütün mahalleli. Nerede? Meydanda. Yüklem: toplandı. B’de özne başta. C’de meydanda toplanan mahalleliler tek özne. D’de ise nesne var ve özne gizli.' },
      steps: [{ s: 'Son soru, öğrendiğin her şeyi bir arada kullanacaksın. Acele etme, sırayı bozma.' }] }
  ]
};
