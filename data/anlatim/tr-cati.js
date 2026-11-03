/* Adım Adım Anlatım · Türkçe · Fiilde Çatı (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['tr-cati'] = {
  title: 'Fiilde Çatı',
  desc: 'Öznesine göre etken–edilgen, nesnesine göre geçişli–geçişsiz: “birileri tarafından” ve “onu” testleri, sözde özne, kökteki l/n ve LGS’nin sevdiği edilgen = geçişsiz kuralı.',
  ozet: [
    'Çatı yalnızca <b>yüklemi çekimli fiil</b> olan cümlelerde aranır. Yüklem isim ya da ek-fiil almış fiilimsiyse çatı aranmaz.',
    '<b>Etken</b>: işi yapan bellidir, gerçek özne vardır (açık ya da gizli). <b>Edilgen</b>: fiile -l / -n eki gelir, işi yapan belli değildir; işten etkilenen öge sözde öznedir.',
    'Test: yüklemin önüne “birileri tarafından” getir. Cümle anlamlıysa edilgen, anlamsızsa etken.',
    'Kökteki l, n sesi edilgenlik eki değildir: gül-, anla-, dinle-, sevin- etkendir.',
    '“… tarafından” sözü özne değildir; yüklem yine edilgen, işten etkilenen yine sözde öznedir. Geçişsiz fiilden edilgen yapılınca (yola çıkılacak) cümlede hiç özne olmaz.',
    '<b>Geçişli</b>: nesne alabilir, “onu + fiil” anlamlıdır. <b>Geçişsiz</b>: nesne alamaz. Cümlede nesne yazılmasa da fiil geçişli olabilir (bekledik). Anlama da bak: merdivenleri çıktı (geçişli), dışarı çıktı (geçişsiz).',
    'Geçişsiz fiil -t, -ir, -dür gibi eklerle geçişli olur: uyu-t-, piş-ir-, gül-dür-.',
    '<b>Altın kural:</b> Edilgen fiil nesne alamaz, nesnesine göre her zaman <b>geçişsizdir</b>.'
  ],
  scenes: [
    { t: 'Çatı nedir? İlk bakış yükleme',
      steps: [
        { s: 'Merhaba! Bugün fiilin çatısını konuşacağız. Çatı, yüklemdeki fiilin özneyle ve nesneyle kurduğu ilişkidir.' },
        { s: 'Buradaki ilk ve en önemli kontrol şu: yüklem gerçekten çekimli bir fiil mi? Değilse çatı aramayız bile.',
          h: '<div class="an-rule"><b>Çatı yalnızca fiil cümlesinde aranır.</b> Yüklem isim ya da fiilimsiyse çatı yoktur.</div>' },
        { s: '“Samsun’un sahili akşamları çok kalabalıktı.” Yüklem “kalabalıktı”, yani bir isim. Burada çatı aranmaz.',
          v: 'Samsun’un sahili akşamları çok kalabalıktı. Yüklem kalabalıktı, yani bir isim. Burada çatı aranmaz.',
          h: '<div class="an-trap">Samsun’un sahili akşamları çok <span class="an-w">kalabalıktı</span>. → isim, çatı yok<br>En büyük hayali birinci <span class="an-w">olmaktı</span>. → isim-fiil + ek-fiil, çatı yok</div>' },
        { s: '“En büyük hayali birinci olmaktı.” cümlesi de öyle. “Olmaktı” fiile benziyor ama aslında isim-fiil, çatı aranmaz.',
          v: 'En büyük hayali birinci olmaktı cümlesi de öyle. Olmaktı, fiile benziyor ama aslında isim fiil. Yine çatı aranmaz.' }
      ] },

    { t: 'İki ayrı soru, iki ayrı çatı',
      base: '<svg class="an-svg" viewBox="0 0 340 184" role="img" aria-label="Çatı iki açıdan incelenir: öznesine göre ve nesnesine göre">' +
        '<rect x="100" y="6" width="140" height="36" rx="10" class="boxa rv k1"/><text x="170" y="30" font-size="15" text-anchor="middle" font-weight="700" class="rv k1">Fiilde çatı</text>' +
        '<path class="st dr k2" d="M140 44 L84 72"/><path class="st dr k3" d="M200 44 L256 72"/>' +
        '<rect x="6" y="74" width="156" height="40" rx="10" class="box rv k2"/><text x="84" y="99" font-size="13" text-anchor="middle" font-weight="700" class="rv k2">Öznesine göre</text>' +
        '<rect x="178" y="74" width="156" height="40" rx="10" class="box rv k3"/><text x="256" y="99" font-size="13" text-anchor="middle" font-weight="700" class="rv k3">Nesnesine göre</text>' +
        '<text x="84" y="138" font-size="14" text-anchor="middle" font-weight="700" class="acc rv k2">etken · edilgen</text>' +
        '<text x="84" y="160" font-size="11" text-anchor="middle" class="mut rv k2">İşi yapan belli mi?</text>' +
        '<text x="256" y="138" font-size="14" text-anchor="middle" font-weight="700" class="acc rv k3">geçişli · geçişsiz</text>' +
        '<text x="256" y="160" font-size="11" text-anchor="middle" class="mut rv k3">Nesne alabilir mi?</text></svg>',
      steps: [
        { s: 'Çatıyı iki ayrı açıdan inceliyoruz. Bunları birbirine karıştırmamak işin yarısı.', on: '.k1' },
        { s: 'Birincisi öznesine göre çatı. Sorumuz: işi yapan belli mi? Cevaba göre fiil etken ya da edilgen olur.', on: '.k2' },
        { s: 'İkincisi nesnesine göre çatı. Sorumuz: bu fiil nesne alabilir mi? Cevaba göre geçişli ya da geçişsiz olur.', on: '.k3' },
        { s: 'Yani her fiil cümlesinin yüklemine iki etiket birden yapıştırabiliriz. LGS de genelde ikisini birlikte soruyor.', v: 'Yani her fiil cümlesinin yüklemine iki etiket birden yapıştırabiliriz. LGS de genelde ikisini birlikte soruyor.' }
      ] },

    { t: 'Etken ve edilgen',
      base: '<svg class="an-svg" viewBox="0 0 340 150" role="img" aria-label="Ali camı kırdı cümlesi edilgen yapılınca cam kırıldı olur, nesne sözde özne olur">' +
        '<rect x="6" y="10" width="150" height="44" rx="10" class="box rv e1"/><text x="81" y="38" font-size="15" text-anchor="middle" font-weight="700" class="rv e1"><tspan class="acc">Ali</tspan> camı kırdı.</text>' +
        '<text x="81" y="76" font-size="11" text-anchor="middle" class="mut rv e1">gerçek özne: Ali → etken</text>' +
        '<path class="st dr e2" d="M160 32 L180 32"/><path class="st dr e2" d="M172 25 L180 32 L172 39"/>' +
        '<rect x="184" y="10" width="150" height="44" rx="10" class="boxa rv e2"/><text x="259" y="38" font-size="15" text-anchor="middle" font-weight="700" class="rv e2"><tspan class="acc">Cam</tspan> kır<tspan class="acc">ıl</tspan>dı.</text>' +
        '<text x="259" y="76" font-size="11" text-anchor="middle" class="mut rv e2">kıran yok · cam: sözde özne</text>' +
        '<path class="st2 dr e3" d="M110 58 C140 110, 220 110, 236 58"/>' +
        '<text x="170" y="126" font-size="12" text-anchor="middle" class="acc rv e3">nesne (camı) → sözde özne (cam)</text></svg>',
      steps: [
        { s: '“Ali camı kırdı.” Kıran kim? Ali. İşi yapan belli, cümlede gerçek özne var. Bu fiil <b>etken</b>.',
          v: 'Ali camı kırdı. Kıran kim? Ali. İşi yapan belli, cümlede gerçek özne var. Bu fiil etken.', on: '.e1' },
        { s: 'Şimdi aynı olayı “Cam kırıldı.” diye anlatalım. Fiile -ıl eki geldi ve kıranı artık bilmiyoruz. Bu fiil <b>edilgen</b>.',
          v: 'Şimdi aynı olayı, cam kırıldı, diye anlatalım. Fiile ıl eki geldi ve kıranı artık bilmiyoruz. Bu fiil edilgen.', on: '.e2' },
        { s: 'Peki “cam” ne oldu? Etken cümlede nesneydi, şimdi öznenin yerine geçti. İşte buna <b>sözde özne</b> diyoruz.',
          v: 'Peki cam ne oldu? Etken cümlede nesneydi, şimdi öznenin yerine geçti. İşte buna sözde özne diyoruz.', on: '.e3', w: 600 },
        { s: 'Edilgenlik ekleri -l ve -n’dir: kırıldı, temizlendi, okundu, yıkandı. Gizli özne de etkendir: “Kitapları teslim ettik.”',
          v: 'Edilgenlik ekleri, ıl ve ın ekleridir: kırıldı, temizlendi, okundu, yıkandı. Gizli özne de etkendir: Kitapları teslim ettik.',
          h: '<div class="an-rule"><b>Edilgenlik eki:</b> -l (-ıl, -il, -ul, -ül) · -n (-ın, -in, -un, -ün)</div>' }
      ] },

    { t: 'Her l, n edilgen değildir',
      steps: [
        { s: 'Şimdi LGS’de en sık kurulan tuzaklardan birine geldik. Fiilde l ya da n sesi görünce hemen edilgen deme!',
          v: 'Şimdi LGS’de en sık kurulan tuzaklardan birine geldik. Fiilde le ya da ne sesi görünce hemen edilgen deme!',
          h: '<div class="an-trap">gül-, anla-, dinle-, sevin-, sil- → l, n kökte ya da gövdede; edilgenlik eki değil!</div>' },
        { s: '“Ayşe fıkrayı duyunca kahkahayla güldü.” Gülen kim? Ayşe. Kökteki l edilgenlik eki değil. Fiil etken.',
          v: 'Ayşe fıkrayı duyunca kahkahayla güldü. Gülen kim? Ayşe. Kökteki le sesi edilgenlik eki değil. Fiil etken.' },
        { s: 'Peki emin olmanın yolu ne? Çok pratik bir testimiz var: yüklemin önüne “birileri tarafından” sözünü koy.',
          v: 'Peki emin olmanın yolu ne? Çok pratik bir testimiz var: yüklemin önüne, birileri tarafından, sözünü koy.',
          h: '<table class="an-tbl"><tr class="rv b1"><td>Duvarlar dün <b>birileri tarafından</b> boyandı.</td><td class="an-ok-t">anlamlı → edilgen</td></tr>' +
             '<tr class="rv b2"><td>Kardeşim <b>birileri tarafından</b> sevindi.</td><td class="an-bad-t">anlamsız</td></tr></table>' },
        { s: '“Duvarlar birileri tarafından boyandı.” Gayet anlamlı. Demek ki boyandı edilgen.', v: 'Duvarlar birileri tarafından boyandı. Gayet anlamlı. Demek ki boyandı, edilgen.', on: '.b1' },
        { s: '“Kardeşim birileri tarafından sevindi.” Kulağa çok tuhaf geliyor, değil mi? Sevinen belli, fiil etken.', v: 'Kardeşim birileri tarafından sevindi. Kulağa çok tuhaf geliyor, değil mi? Sevinen belli, fiil etken.', on: '.b2' }
      ] },

    { t: '“Tarafından” ve öznesiz edilgen',
      steps: [
        { s: 'Bazen edilgen cümlede işi yapan da söylenir: “Sınav kâğıtları öğretmenimiz tarafından okundu.”',
          v: 'Bazen edilgen cümlede işi yapan da söylenir: Sınav kâğıtları öğretmenimiz tarafından okundu.',
          h: '<div class="an-ex"><span class="an-l"><span class="an-w">Sınav kâğıtları</span> öğretmenimiz tarafından okundu.</span><span class="an-l">→ yüklem edilgen · sözde özne: sınav kâğıtları</span></div>' },
        { s: 'Kandırılma! “Öğretmenimiz tarafından” özne değil. Yüklem yine edilgen, “sınav kâğıtları” yine sözde özne.',
          v: 'Kandırılma! Öğretmenimiz tarafından, özne değil. Yüklem yine edilgen, sınav kâğıtları yine sözde özne.' },
        { s: 'Bir de hiç öznesi olmayan edilgen cümleler var: “Yarın sabah erkenden yola çıkılacak.”',
          v: 'Bir de hiç öznesi olmayan edilgen cümleler var: Yarın sabah erkenden yola çıkılacak.',
          h: '<div class="an-tip">Yarın sabah erkenden yola <span class="an-w">çıkılacak</span>. → Çıkılacak olan ne? Cevap yok. Edilgen ama özne yok.</div>' },
        { s: '“Çıkmak” zaten nesne almayan bir fiil. Edilgen yapınca özneye dönüşecek bir nesne kalmıyor, cümle öznesiz kalıyor.',
          v: 'Çıkmak zaten nesne almayan bir fiil. Edilgen yapınca özneye dönüşecek bir nesne kalmıyor, cümle öznesiz kalıyor.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdaki cümlelerin hangisinde yüklem <b>edilgen</b> çatılıdır?</p>',
        c: ['Çocuklar bahçede neşeyle güldü.', 'Annem misafirlerin gelmesine çok sevindi.', 'Yeni kütüphane geçen hafta hizmete açıldı.', 'Öğrenciler konuyu kısa sürede anladı.'], a: 'C',
        hint: 'Her yüklemin önüne “birileri tarafından” getir. Kökteki l, n sesi seni yanıltmasın.',
        hintV: 'Her yüklemin önüne, birileri tarafından, getir. Kökteki le, ne sesi seni yanıltmasın.',
        why: 'Kütüphane birileri tarafından hizmete açıldı: aç- köküne -ıl eki gelmiş, açan belli değil. Güldü, sevindi ve anladı fiillerinde l, n kökte; işi yapanlar belli, hepsi etken.',
        whyV: 'Kütüphane birileri tarafından hizmete açıldı. Aç köküne ıl eki gelmiş, açan belli değil. Güldü, sevindi ve anladı fiillerinde ise le ve ne sesleri kökte; işi yapanlar belli, hepsi etken.' },
      steps: [{ s: 'Hadi bakalım, testini yanında taşı ve dene.' }] },

    { t: 'Geçişli ve geçişsiz: “onu” testi',
      base: '<table class="an-tbl"><tr><th>Fiil</th><th>“Onu” testi</th><th>Sonuç</th></tr>' +
        '<tr class="rv g1"><td>Dedem dalları <span class="an-w">budadı</span>.</td><td>onu budadı</td><td class="an-ok-t">geçişli</td></tr>' +
        '<tr class="rv g2"><td>Kardeşim süt <span class="an-w">içer</span>.</td><td>onu içer</td><td class="an-ok-t">geçişli</td></tr>' +
        '<tr class="rv g3"><td>Bebek mışıl mışıl <span class="an-w">uyudu</span>.</td><td>onu uyudu?</td><td class="an-bad-t">geçişsiz</td></tr>' +
        '<tr class="rv g4"><td>Çocuklar parkta <span class="an-w">koştu</span>.</td><td>onu koştu?</td><td class="an-bad-t">geçişsiz</td></tr></table>',
      steps: [
        { s: 'Gelelim ikinci açıya. Nesne alabilen fiile geçişli, nesne alamayan fiile geçişsiz diyoruz.' },
        { s: 'Burada da pratik bir test var. Fiilin önüne “onu” sözcüğünü getir. Anlamlı oluyorsa fiil geçişlidir.', v: 'Burada da pratik bir test var. Fiilin önüne onu sözcüğünü getir. Anlamlı oluyorsa fiil geçişlidir.' },
        { s: '“Onu budadı.” Oldu. “Onu içer.” O da oldu. İkisi de geçişli.', v: 'Onu budadı. Oldu. Onu içer. O da oldu. İkisi de geçişli.', on: '.g1,.g2' },
        { s: '“Onu uyudu”, “onu koştu” diyebilir miyiz? Hayır, kulağa yanlış geliyor. Bu fiiller geçişsiz.', v: 'Onu uyudu, onu koştu diyebilir miyiz? Hayır, kulağa yanlış geliyor. Bu fiiller geçişsiz.', on: '.g3,.g4' },
        { s: 'Cümlede de yükleme “neyi, kimi?” diye sorabilirsin. Cevap çıkıyorsa nesne var demektir.', v: 'Cümlede de yükleme, neyi, kimi, diye sorabilirsin. Cevap çıkıyorsa nesne var demektir.' }
      ] },

    { t: 'Geçişlilikte iki tuzak',
      steps: [
        { s: 'Birinci tuzak: cümlede nesne yazılmamış olabilir ama fiil yine geçişli olabilir.',
          h: '<div class="an-trap">Durakta iki saat boyunca <span class="an-w">bekledik</span>. → nesne yok ama “onu bekledik” olur → <b>geçişli</b></div>' },
        { s: '“Durakta iki saat bekledik.” Nesne yok, ama “onu bekledik” diyebiliyoruz. Önemli olan fiilin nesne alabilmesi.',
          v: 'Durakta iki saat bekledik. Nesne yok, ama onu bekledik diyebiliyoruz. Önemli olan fiilin nesne alabilmesi.' },
        { s: 'İkinci tuzak: aynı fiil anlamına göre değişebilir. O yüzden testi yaparken cümlenin anlamına da bak.',
          h: '<table class="an-tbl"><tr class="rv q1"><td>Merdivenleri hızla <span class="an-w">çıktı</span>.</td><td>neyi? merdivenleri → <b>geçişli</b></td></tr>' +
             '<tr class="rv q2"><td>Akşam yemeğinden sonra dışarı <span class="an-w">çıktı</span>.</td><td>neyi? cevap yok → <b>geçişsiz</b></td></tr></table>' },
        { s: 'Neyi çıktı? Merdivenleri. Bu cümlede “çıkmak” nesne almış, geçişli.', v: 'Neyi çıktı? Merdivenleri. Bu cümlede çıkmak nesne almış, geçişli.', on: '.q1' },
        { s: '“Dışarı çıktı” cümlesinde ise “neyi?” sorusunun cevabı yok. Burada geçişsiz.', v: 'Dışarı çıktı cümlesinde ise neyi sorusunun cevabı yok. Burada geçişsiz.', on: '.q2' }
      ] },

    { t: 'Ekle geçişli yapmak',
      base: '<div class="an-grid"><div class="rv x1"><b>uyu- → uyut-</b>bebeği uyuttu</div><div class="rv x2"><b>piş- → pişir-</b>yemeği pişirdi</div><div class="rv x3"><b>gül- → güldür-</b>bizi güldürdü</div></div>',
      steps: [
        { s: 'Geçişsiz bir fiil bazı eklerle geçişli hâle gelebilir. Bu ekler -t, -ir, -dür gibi eklerdir.', v: 'Geçişsiz bir fiil bazı eklerle geçişli hâle gelebilir. Bu ekler, t, ır, dür gibi eklerdir.' },
        { s: 'Bebek uyudu, geçişsiz. Ama “Annem bebeği uyuttu.” Neyi uyuttu? Bebeği. Artık geçişli.', v: 'Bebek uyudu, geçişsiz. Ama annem bebeği uyuttu. Neyi uyuttu? Bebeği. Artık geçişli.', on: '.x1' },
        { s: 'Yemek pişti, geçişsiz. “Yemeği pişirdi” dediğimizde geçişli oldu.', v: 'Yemek pişti, geçişsiz. Yemeği pişirdi dediğimizde geçişli oldu.', on: '.x2' },
        { s: 'Güldük, geçişsiz. “Palyaço bizi güldürdü”, geçişli. Ek gelince fiil nesne almaya başladı.', v: 'Güldük, geçişsiz. Palyaço bizi güldürdü, geçişli. Ek gelince fiil nesne almaya başladı.', on: '.x3' }
      ] },

    { t: 'Altın kural: edilgen = geçişsiz',
      steps: [
        { s: 'Şimdi iki açıyı birleştiriyoruz. Bu kural LGS sorularında çözümün anahtarı oldu, çok iyi dinle.', v: 'Şimdi iki açıyı birleştiriyoruz. Bu kural LGS sorularında çözümün anahtarı oldu, çok iyi dinle.',
          h: '<div class="an-rule" style="font-size:16px"><b>Edilgen fiil nesne alamaz → her zaman geçişsizdir.</b></div>' },
        { s: 'Neden mi? Hatırla: edilgen yapınca nesne sözde özneye dönüşüyordu. Cümlede artık nesne kalmıyor.',
          h: '<div class="an-ex"><span class="an-l">Öğrenciler <span class="an-w">kitapları</span> okudu. → etken, geçişli</span><span class="an-l"><span class="an-w">Kitaplar</span> okundu. → edilgen, geçişsiz</span></div>' },
        { s: '“Kitaplar okundu.” Neyi okundu? Bu soru anlamsız. Kitaplar artık nesne değil, sözde özne.', v: 'Kitaplar okundu. Neyi okundu? Bu soru anlamsız. Kitaplar artık nesne değil, sözde özne.' },
        { s: 'Kısacası şıklarda “edilgen ve geçişli” diye bir eşleşme görürsen, gözün kapalı ele.', v: 'Kısacası şıklarda edilgen ve geçişli diye bir eşleşme görürsen, gözün kapalı ele.',
          h: '<div class="an-trap">“edilgen + geçişli” olamaz! · edilgen ise geçişsiz</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdaki cümlelerin hangisinde yüklem hem <b>etken</b> hem <b>geçişsizdir</b>?</p>',
        c: ['Bu konu derste ayrıntılı biçimde anlatıldı.', 'Dedem her sabah gazetesini okur.', 'Yorgun yolcular otelde erkenden uyudu.', 'Eski evler tek tek yıkıldı.'], a: 'C',
        hint: 'Önce edilgen olanları ele: edilgen fiil zaten etken olamaz. Kalanlarda “onu” testini yap.',
        hintV: 'Önce edilgen olanları ele: edilgen fiil zaten etken olamaz. Kalanlarda onu testini yap.',
        why: 'Uyuyan kim? Yolcular, yani etken. “Onu uyudu” denmez, geçişsiz. A ve D edilgen (anlat-ıl, yık-ıl); B’de “gazetesini” nesnesi var, etken ama geçişli.',
        whyV: 'Uyuyan kim? Yolcular, yani etken. Onu uyudu denmez, yani geçişsiz. A ve D edilgen: anlatıldı ve yıkıldı. B’de gazetesini nesnesi var; etken ama geçişli.' },
      steps: [{ s: 'Bu sefer iki soruyu birden soracaksın. Önce öznesine, sonra nesnesine bak.' }] },

    { t: 'Adım adım çözüm',
      base: '<table class="an-tbl"><tr><th></th><th>I. kapsar</th><th>II. geliştirilmiştir</th></tr>' +
        '<tr class="rv w1"><td><b>İşi yapan belli mi?</b></td><td>Türk eğitim tarihi → etken</td><td>-il eki, yapan yok → edilgen</td></tr>' +
        '<tr class="rv w2"><td><b>Nesne alıyor mu?</b></td><td>neyi? bir süreci → geçişli</td><td>edilgen → geçişsiz</td></tr></table>',
      steps: [
        { s: 'LGS’de çıkmış bir soru kalıbını birlikte çözelim. İki cümlenin yüklemini inceleyeceğiz.', v: 'LGS’de çıkmış bir soru kalıbını birlikte çözelim. İki cümlenin yüklemini inceleyeceğiz.',
          h: '<div class="an-ex"><span class="an-l">I. Türk eğitim tarihi uzun bir süreci <span class="an-w">kapsar</span>.</span><span class="an-l">II. Eğitim sistemimiz zamanla <span class="an-w">geliştirilmiştir</span>.</span></div>' },
        { s: 'Önce öznesine bakalım. Kapsayan ne? Türk eğitim tarihi, yani etken. “Geliştirilmiştir”de ise -il eki var, geliştiren belli değil, edilgen.',
          v: 'Önce öznesine bakalım. Kapsayan ne? Türk eğitim tarihi, yani etken. Geliştirilmiştir sözcüğünde ise il eki var, geliştiren belli değil. Bu edilgen.', on: '.w1' },
        { s: 'Şimdi nesnesine. Neyi kapsar? Bir süreci, geçişli. İkinci fiil edilgen olduğu için kuralımız gereği geçişsiz.',
          v: 'Şimdi nesnesine. Neyi kapsar? Bir süreci, yani geçişli. İkinci fiil edilgen olduğu için kuralımız gereği geçişsiz.', on: '.w2' },
        { s: 'Gördün mü? Her yükleme iki soruyu sırayla sorunca şıkları tek tek kontrol etmek çok kolaylaşıyor.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>(I) Arkeologlar antik kentte yeni bir mozaik buldu. (II) Kazı ekibi yaz boyunca çadırlarda kaldı. (III) Uzmanlar mozaiğin yaşını hesapladı. (IV) Bilim insanları kentin bir limana sahip olduğunu kanıtladı.</p><p>Bu cümlelerin hangisinde yüklem, <b>nesnesine göre</b> diğerlerinden farklıdır?</p>',
        c: ['I', 'II', 'III', 'IV'], a: 'B',
        hint: 'Her yükleme “neyi?” diye sor. Nesne bazen uzun bir yan cümle olabilir. -de ekli söz nesne değildir.',
        hintV: 'Her yükleme neyi diye sor. Nesne bazen uzun bir yan cümle olabilir. De ekli söz nesne değildir.',
        why: '“Kalmak” nesne almaz: “onu kaldı” denmez, “çadırlarda” yer tamlayıcısıdır. Geçişsiz. Diğerleri geçişli: bir mozaik buldu, yaşını hesapladı, limana sahip olduğunu kanıtladı.',
        whyV: 'Kalmak nesne almaz. Onu kaldı denmez; çadırlarda ise yer tamlayıcısıdır. Yani geçişsiz. Diğerleri geçişli: bir mozaik buldu, yaşını hesapladı, limana sahip olduğunu kanıtladı.' },
      steps: [{ s: 'Son soru. Bu kalıp LGS’de gerçekten çıktı. Sakin ol ve “neyi?” diye sor.', v: 'Son soru. Bu kalıp LGS’de gerçekten çıktı. Sakin ol ve neyi diye sor.' }] }
  ]
};
