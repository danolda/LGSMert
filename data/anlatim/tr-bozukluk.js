/* Adım Adım Anlatım · Türkçe · Anlatım Bozuklukları (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['tr-bozukluk'] = {
  title: 'Anlatım Bozuklukları',
  desc: 'Anlama ve yapıya dayalı bozukluklar: gereksiz sözcük, çelişen sözler, uyum hataları ve LGS’nin en sık sorduğu ortak öge (özne, nesne, tümleç, yüklem) eksikliği.',
  ozet: [
    'İki aile var: <b>anlama dayalı</b> (gereksiz sözcük, yanlış anlam, çelişki, yanlış yer, deyim, belirsizlik, mantık) ve <b>yapıya dayalı</b> (uyum, öge ve yüklem eksikliği, tamlama, çatı, ek, karşılaştırma, bağlaç).',
    '<b>Gereksiz sözcük</b>: geri iade, yaklaşık… kadar, karşılıklı yardımlaştı, alçak sesle fısıldadı.',
    '<b>Yanlış anlam</b>: fiyat pahalı olmaz (yüksek olur); fidan ekilmez (dikilir); olumlu sonuç için “neden oldu” değil “sağladı”; azımsamak ≠ küçümsemek.',
    '<b>Çelişki</b>: kesinlik (mutlaka, kesinlikle, tam) ile olasılık (belki, -ebilir, yakın) bir arada kullanılmaz.',
    '<b>Özne–yüklem uyumu</b>: sen ve o → siz; ben ve o → biz. Cansız, bitki, hayvan çoğulu tekil yüklem alır. Kimse, hiçbiri olumsuz yüklem ister.',
    '<b>Ortak öge eksikliği</b> (LGS’nin gözdesi): sıralı ve bağlı cümlede ortak ögeyi her yükleme ayrı ayrı sor. Ona güveniyorum ve (onu) seviyorum.',
    '<b>Yüklem eksikliği</b>: peynir ve çay içtik → peynir yedik, çay içtik. <b>Ek-fiil eksikliği</b>: boyu kısa(ydı), bedeni güçlü değildi.',
    '<b>Diğerleri</b>: özel ve devlet okulları (tamlama), hazırlıklar tamamlanıp yola çıktık (çatı), birçok kitaplar (ek), onun resimleri senden (karşılaştırma), ne aradı ne sormadı (bağlaç).'
  ],
  scenes: [
    { t: 'Anlatım bozukluğu nedir?',
      base: '<div class="an-grid" style="grid-template-columns:repeat(2,1fr)">' +
        '<div class="rv n1"><b>Anlama dayalı</b>gereksiz sözcük · yanlış anlam · çelişki · yanlış yer · deyim · belirsizlik · mantık</div>' +
        '<div class="rv n2"><b>Yapıya dayalı</b>uyum · öge eksikliği · yüklem eksikliği · tamlama · çatı · ek · karşılaştırma</div></div>',
      steps: [
        { s: 'Merhaba! Bir cümle duru, açık ve dil bilgisine uygun değilse ona anlatım bozukluğu diyoruz.' },
        { s: 'Bozuklukları iki aileye ayırıyoruz. Birincisi anlama dayalı olanlar: sözcüklerin anlamı yüzünden cümle aksıyor.', on: '.n1' },
        { s: 'İkincisi yapıya dayalı olanlar: dil bilgisi kuralı çiğnenmiş, ögeler birbirine uymuyor.', on: '.n2' },
        { s: 'Sana önemli bir ipucu vereyim: LGS’deki soruların çoğu yapıya dayalı, özellikle de ortak öge eksikliğinden geldi.', v: 'Sana önemli bir ipucu vereyim: sınavda çıkan soruların çoğu yapıya dayalı, özellikle de ortak öge eksikliğinden geldi.' }
      ] },

    { t: 'Gereksiz sözcük',
      base: '<table class="an-tbl"><tr><th>Bozuk</th><th>Neden?</th></tr>' +
        '<tr class="rv r1"><td>Kitabı kütüphaneye <span class="an-bad-t">geri</span> iade etti.</td><td>iade = geri vermek</td></tr>' +
        '<tr class="rv r2"><td>Yaklaşık on yıl <span class="an-bad-t">kadar</span> orada yaşadı.</td><td>yaklaşık = kadar</td></tr>' +
        '<tr class="rv r3"><td>Arkadaşıyla <span class="an-bad-t">karşılıklı</span> mektuplaştı.</td><td>-laş eki zaten karşılıklı</td></tr>' +
        '<tr class="rv r4"><td>Kulağıma <span class="an-bad-t">alçak sesle</span> fısıldadı.</td><td>fısıldamak zaten alçak sesle</td></tr></table>',
      steps: [
        { s: 'İlk bozukluk gereksiz sözcük. Anlamı zaten cümlede olan bir sözcüğü tekrar kullanırsak cümle duruluğunu kaybeder.' },
        { s: '“Geri iade etti.” İade etmek zaten geri vermek demek. “Geri” fazlalık.', v: 'Geri iade etti. İade etmek zaten geri vermek demek. Geri sözcüğü fazlalık.', on: '.r1' },
        { s: '“Yaklaşık on yıl kadar.” Yaklaşık ile kadar aynı anlamı veriyor, biri gitmeli.', v: 'Yaklaşık on yıl kadar. Yaklaşık ile kadar aynı anlamı veriyor, biri gitmeli.', on: '.r2' },
        { s: 'Bunlar biraz daha sinsi: mektuplaşmak zaten karşılıklıdır, fısıldamak zaten alçak sesle konuşmaktır.', on: '.r3,.r4' },
        { s: 'Test basit: sözcüğü çıkar. Anlam hiç eksilmiyorsa o sözcük gereksizdir.' }
      ] },

    { t: 'Fazlalığı bul',
      steps: [{ s: 'Bu cümlede bir sözcük fazlalık. Onu bul ve dokun.' }],
      ia: { tip: 'gorselsec', q: '<p>Cümlede <b>gereksiz kullanılan</b> sözcüğe dokun.</p>',
        svg: '<svg class="an-svg" viewBox="0 0 340 112" role="group" aria-label="Bu konudaki görüşlerimi size kısaca özetlemek istiyorum.">' +
          '<g data-b="w1"><rect x="10" y="8" width="40" height="40" rx="9" class="box"/><text x="30" y="33" text-anchor="middle" font-size="15">Bu</text></g>' +
          '<g data-b="w2"><rect x="58" y="8" width="92" height="40" rx="9" class="box"/><text x="104" y="33" text-anchor="middle" font-size="15">konudaki</text></g>' +
          '<g data-b="w3"><rect x="158" y="8" width="112" height="40" rx="9" class="box"/><text x="214" y="33" text-anchor="middle" font-size="15">görüşlerimi</text></g>' +
          '<g data-b="w4"><rect x="278" y="8" width="52" height="40" rx="9" class="box"/><text x="304" y="33" text-anchor="middle" font-size="15">size</text></g>' +
          '<g data-b="w5"><rect x="20" y="62" width="78" height="40" rx="9" class="box"/><text x="59" y="87" text-anchor="middle" font-size="15">kısaca</text></g>' +
          '<g data-b="w6"><rect x="106" y="62" width="104" height="40" rx="9" class="box"/><text x="158" y="87" text-anchor="middle" font-size="15">özetlemek</text></g>' +
          '<g data-b="w7"><rect x="218" y="62" width="104" height="40" rx="9" class="box"/><text x="270" y="87" text-anchor="middle" font-size="15">istiyorum.</text></g>' + '</svg>',
        dogru: ['w5'],
        hint: 'Hangi sözcüğün anlamı başka bir sözcüğün içinde zaten var? Çıkar ve anlam eksiliyor mu, bak.',
        why: 'Özetlemek zaten kısaca anlatmaktır. “kısaca” çıkarılınca anlam hiç eksilmiyor: gereksiz sözcük.',
        whyV: 'Özetlemek zaten kısaca anlatmak demektir. Kısaca sözcüğü çıkarılınca anlam hiç eksilmiyor: gereksiz sözcük.' } },
    { t: 'Yanlış anlamda sözcük',
      steps: [
        { s: 'İkinci bozukluk: anlamı birbirine yakın sözcükleri birbirinin yerine kullanmak. Gel, birkaç ünlü örneğe bakalım.',
          v: 'İkinci bozukluk: anlamı birbirine yakın sözcükleri birbirinin yerine kullanmak. Gel, birkaç ünlü örneğe bakalım.',
          h: '<table class="an-tbl"><tr class="rv w1"><td>Telefonun fiyatı çok <span class="an-bad-t">pahalı</span>.</td><td>fiyat <b>yüksek</b> olur; telefon pahalı olur</td></tr>' +
             '<tr class="rv w2"><td>Bahçeye elma fidanı <span class="an-bad-t">ektik</span>.</td><td>tohum ekilir, fidan <b>dikilir</b></td></tr>' +
             '<tr class="rv w3"><td>Düzenli çalışması başarıya <span class="an-bad-t">neden oldu</span>.</td><td>olumlu sonuç → <b>sağladı</b></td></tr>' +
             '<tr class="rv w4"><td>Aldığı harçlığı <span class="an-bad-t">küçümsüyor</span>.</td><td>miktarı az bulmak → <b>azımsıyor</b></td></tr></table>' },
        { s: 'Fiyat pahalı olmaz, yüksek olur. Pahalı olan telefonun kendisidir.', on: '.w1' },
        { s: 'Tohum ekilir ama fidan dikilir.', on: '.w2' },
        { s: '“Neden olmak” ve “yol açmak” kötü sonuçlar için kullanılır. Başarı gibi iyi bir sonuç için “sağladı” demeliyiz.', v: 'Neden olmak ve yol açmak kötü sonuçlar için kullanılır. Başarı gibi iyi bir sonuç için sağladı demeliyiz.', on: '.w3' },
        { s: 'Küçümsemek değer vermemektir, azımsamak ise miktarı az bulmaktır. Harçlık için azımsamak doğru olan.', on: '.w4' }
      ] },

    { t: 'Doğru sözcüğü yerleştir',
      steps: [{ s: 'Her boşluğa anlamca doğru sözcüğü yerleştir. Yakın anlamlı çeldiricilere dikkat!' }],
      ia: { tip: 'bosluk', q: '<p>Cümleleri <b>anlatım bozukluğu olmayacak</b> biçimde tamamla.</p>',
        metin: 'Bu ürünlerin fiyatı çok [_].<br>Okulun bahçesine üç fidan [_].<br>Bu buluş bilimin gelişmesine [_].<br>Garson aldığı bahşişi [_].',
        secenek: ['yüksek', 'pahalı', 'diktik', 'ektik', 'katkı sağladı', 'neden oldu', 'azımsadı', 'küçümsedi'], cevap: ['yüksek', 'diktik', 'katkı sağladı', 'azımsadı'],
        hint: 'Fiyat ve ürün aynı sözcükle nitelenmez; tohum ile fidan için farklı fiiller kullanılır; olumlu bir sonuç “neden olmak” ile anlatılmaz.',
        hintV: 'Fiyat ile ürün aynı sözcükle nitelenmez. Tohum ile fidan için farklı fiiller kullanılır. Olumlu bir sonuç da neden olmak ile anlatılmaz.',
        why: 'Fiyat yüksek olur, ürün pahalı olur. Fidan dikilir. İyi sonuç için “katkı sağladı”. Miktarı az bulmak “azımsamak”tır; küçümsemek değer vermemektir.',
        whyV: 'Fiyat yüksek olur, ürün pahalı olur. Fidan dikilir, tohum ekilir. İyi bir sonuç için katkı sağladı denir. Miktarı az bulmak azımsamaktır; küçümsemek ise değer vermemektir.' } },
    { t: 'Çelişen sözler, yanlış yer, belirsizlik',
      steps: [
        { s: 'Kesinlik bildiren bir sözle olasılık bildiren bir söz aynı cümlede olmaz. Bu kalıp LGS’de soruldu.', v: 'Kesinlik bildiren bir sözle olasılık bildiren bir söz aynı cümlede olmaz. Bu kalıp LGS’de soruldu.',
          h: '<div class="an-trap">Yarın toplantıya <span class="an-w">mutlaka</span> katıl<span class="an-w">abilirim</span>. → mutlaka katılırım / belki katılabilirim<br><span class="an-w">Tam</span> üç yıla <span class="an-w">yakın</span> görüşmedik.</div>' },
        { s: '“Mutlaka” kesinlik, “katılabilirim” ise olasılık bildiriyor. İkisi birbirini yalanlıyor, birini seçmek zorundasın.', v: 'Mutlaka kesinlik, katılabilirim ise olasılık bildiriyor. İkisi birbirini yalanlıyor, birini seçmek zorundasın.' },
        { s: 'Sözcük yanlış yere konursa anlam kayar. “Yeni durağa gelmiştik ki otobüs kalktı.” Durak mı yeni, biz mi yeni geldik?',
          v: 'Sözcük yanlış yere konursa anlam kayar. Yeni durağa gelmiştik ki otobüs kalktı. Durak mı yeni, biz mi yeni geldik?',
          h: '<div class="an-ex"><span class="an-l"><span class="an-bad-t">Yeni durağa</span> gelmiştik ki… → Durağa <span class="an-ok-t">yeni</span> gelmiştik ki…</span><span class="an-l"><span class="an-bad-t">Çok karnım</span> acıktı. → Karnım <span class="an-ok-t">çok</span> acıktı.</span></div>' },
        { s: 'Bir de belirsizlik var. “Yarışmada birinci olduğunu duydum.” Senin mi, onun mu? Zamir eksik olunca anlam belirsizleşir.',
          v: 'Bir de belirsizlik var. Yarışmada birinci olduğunu duydum. Senin mi, onun mu? Zamir eksik olunca anlam belirsizleşir.',
          h: '<div class="an-tip">Yarışmada <b>senin / onun</b> birinci olduğunu duydum. · Yaşlı<b>,</b> adamın elinden tuttu.</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdaki cümlelerin hangisinde <b>anlamca çelişen sözcüklerin bir arada kullanılmasından</b> kaynaklanan bir anlatım bozukluğu vardır?</p>',
        c: ['Toplantıya kesinlikle yarım saat gecikebilir.', 'Kitabı kütüphaneye geri iade etti.', 'Bu ayakkabının fiyatı çok pahalı.', 'Çok karnım acıktı, hemen yemek yiyelim.'], a: 'A',
        hint: 'Hangi cümlede hem kesinlik hem olasılık bildiren bir söz var?',
        why: '“Kesinlikle” kesinlik, “gecikebilir” olasılık bildiriyor; ikisi çelişiyor. B’de gereksiz sözcük (geri), C’de yanlış anlamda sözcük (fiyat pahalı), D’de yanlış yerde sözcük (çok karnım) var.',
        whyV: 'Kesinlikle kesinlik, gecikebilir ise olasılık bildiriyor; ikisi çelişiyor. B’de gereksiz sözcük var: geri. C’de sözcük yanlış anlamda: fiyat pahalı. D’de ise sözcük yanlış yerde: çok karnım.' },
      steps: [{ s: 'Dört şıkta dört farklı bozukluk var. Sen yalnızca istenen türü bul.' }] },

    { t: 'Özne–yüklem uyumu',
      base: '<table class="an-tbl"><tr><th>Uyum</th><th>Bozuk</th><th>Doğru</th></tr>' +
        '<tr class="rv u1"><td><b>Kişi</b></td><td>Sen ve kardeşin gelecek.</td><td>…<span class="an-ok-t">geleceksiniz</span>.</td></tr>' +
        '<tr class="rv u2"><td><b>Tekil–çoğul</b></td><td>Ağaçlar çiçek açtılar.</td><td>Ağaçlar çiçek <span class="an-ok-t">açtı</span>.</td></tr>' +
        '<tr class="rv u3"><td><b>Olumluluk</b></td><td>Herkes çıktı, içeride kalmadı.</td><td>…<span class="an-ok-t">kimse</span> içeride kalmadı.</td></tr></table>',
      steps: [
        { s: 'Şimdi yapıya dayalı bozukluklara geçelim. İlk kural: özne ile yüklem birbirine uymalı.' },
        { s: 'Kişi uyumu: “sen ve o” birleşince “siz” olur, “ben ve o” birleşince “biz”. O yüzden “Sen ve kardeşin geleceksiniz.”',
          v: 'Kişi uyumu: sen ve o birleşince siz olur, ben ve o birleşince biz. O yüzden: Sen ve kardeşin geleceksiniz.', on: '.u1' },
        { s: 'Özne cansız varlık, bitki ya da hayvan çoğuluysa yüklem tekil olur. “Ağaçlar çiçek açtı.” Kişileştirme varsa çoğul olabilir.',
          v: 'Özne cansız varlık, bitki ya da hayvan çoğuluysa yüklem tekil olur. Ağaçlar çiçek açtı. Kişileştirme varsa çoğul olabilir.', on: '.u2' },
        { s: '“Herkes, hepsi” olumlu yükleme; “kimse, hiçbiri” olumsuz yükleme uyar. “İçeride kalmadı” cümlesinin öznesi yok, “kimse” gelmeli.',
          v: 'Herkes, hepsi olumlu yükleme; kimse, hiçbiri olumsuz yükleme uyar. İçeride kalmadı cümlesinin öznesi yok, kimse sözcüğü gelmeli.', on: '.u3' }
      ] },

    { t: 'Uyum doğru mu?',
      steps: [{ s: 'Beş ifade var. Her birinde özne ile yüklemin uyumuna bak ve karar ver.' }],
      ia: { tip: 'dogruyanlis', q: '<p>Her ifade için karar ver.</p>',
        ifadeler: [
          { m: '“O ve ben bu işi başaracağız.” cümlesinde uyum doğrudur.', d: true, a: 'O ve ben → biz: başaracağız.' },
          { m: '“Kitaplar raftan düştüler.” cümlesinde uyum bozukluğu vardır.', d: true, a: 'Cansız çoğul özne tekil yüklem ister: düştü.' },
          { m: '“Hiçbiri toplantıya katıldı.” cümlesi doğrudur.', d: false, a: '“Hiçbiri” olumsuz yüklem ister: katılmadı.' },
          { m: '“Çocuklar bahçede oynadılar.” cümlesi bozuktur.', d: false, a: 'İnsan bildiren çoğul özne çoğul yüklem alabilir.' },
          { m: '“Sen ve o yarın sinemaya gideceksin.” cümlesi doğrudur.', d: false, a: 'Sen ve o → siz: gideceksiniz.' }],
        hint: 'Kişi zamirlerini birleştir (sen ve o → siz). Özne cansız mı, insan mı? “Kimse, hiçbiri” hangi yüklemi ister?',
        hintV: 'Kişi zamirlerini birleştir: sen ve o, siz eder. Özne cansız mı, insan mı? Kimse ve hiçbiri hangi yüklemi ister?',
        why: 'Kişi uyumu: o + ben = biz, sen + o = siz. Cansız çoğul özne tekil yüklem alır; insan çoğulu çoğul yüklem alabilir. “Hiçbiri” olumsuz yüklem ister.',
        whyV: 'Kişi uyumu: o ve ben biz eder, sen ve o siz eder. Cansız çoğul özne tekil yüklem alır; insan bildiren çoğul özne ise çoğul yüklem alabilir. Hiçbiri sözcüğü olumsuz yüklem ister.' } },
    { t: 'LGS’nin gözdesi: ortak öge eksikliği',
      steps: [
        { s: 'Ve geldik en önemli başlığa. İki yüklem bir ögeyi ortak kullanıyorsa, o öge her iki yükleme de uymak zorunda.', v: 'Ve geldik en önemli başlığa. İki yüklem bir ögeyi ortak kullanıyorsa, o öge her iki yükleme de uymak zorunda.',
          h: '<div class="an-rule"><b>Yöntem:</b> Her yükleme ayrı ayrı “kim? neyi? neye?” diye sor. Ortak öge ikincisine uymuyorsa eksiklik var.</div>' },
        { s: '“Ona güveniyorum ve seviyorum.” Kime güveniyorum? Ona. Peki kimi seviyorum? “Ona seviyorum” olmaz! Nesne eksik.',
          v: 'Ona güveniyorum ve seviyorum. Kime güveniyorum? Ona. Peki kimi seviyorum? Ona seviyorum olmaz! Nesne eksik.',
          h: '<div class="an-ex"><span class="an-l">Ona güveniyorum ve <span class="an-ok-t">onu</span> seviyorum. → nesne eklendi</span></div>' },
        { s: 'Tersi de olur: “Çocukları çok severdi, her zaman iyi davranırdı.” Kime iyi davranırdı? “Çocukları” uymuyor. Yer tamlayıcısı eksik.',
          v: 'Tersi de olur: Çocukları çok severdi, her zaman iyi davranırdı. Kime iyi davranırdı? Çocukları uymuyor. Yer tamlayıcısı eksik.',
          h: '<div class="an-ex"><span class="an-l">Çocukları çok severdi, <span class="an-ok-t">onlara</span> her zaman iyi davranırdı.</span></div>' },
        { s: 'Özne de eksik kalabilir: “Bu hastalığın tedavisi bulunmalı, insanlığa tehdit olmaktan çıkarılmalı.” Tehdit olan tedavi mi? Hayır, hastalık!',
          v: 'Özne de eksik kalabilir: Bu hastalığın tedavisi bulunmalı, insanlığa tehdit olmaktan çıkarılmalı. Tehdit olan tedavi mi? Hayır, hastalık!',
          h: '<div class="an-trap">…tedavisi bulunmalı, <span class="an-ok-t">hastalık</span> insanlığa tehdit olmaktan çıkarılmalı. → özne eklendi</div>' }
      ] },

    { t: 'Hangi öge eksik?',
      steps: [{ s: 'Her cümlede ortak kullanılan bir öge ikinci yükleme uymuyor. Eksik ögeyi bul ve doğru kutuya koy.' }],
      ia: { tip: 'grup', q: '<p>Her cümlede <b>eksik olan ögeyi</b> bul ve kutusuna yerleştir.</p>',
        gruplar: ['Özne eksik', 'Nesne eksik', 'Yer tamlayıcısı eksik'],
        ogeler: [{ m: 'Ona güveniyorum ve seviyorum.', g: 1 }, { m: 'Çocukları sever, iyi davranır.', g: 2 }, { m: 'Bu şehre hayranım ve ziyaret ederim.', g: 1 },
          { m: 'Bitkileri sular, özen gösterir.', g: 2 }, { m: 'Evin çatısı onarıldı, artık satılacak.', g: 0 }, { m: 'Müziğe ilgi duyar ve çok sever.', g: 1 }, { m: 'Fidanın bakımı yapıldı, hızla büyüdü.', g: 0 }],
        hint: 'İkinci yükleme ortak ögeyle soru sor: “onu seviyorum”, “onlara davranır”, “satılacak olan ne?”',
        hintV: 'İkinci yükleme ortak ögeyle soru sor: onu seviyorum mu, onlara mı davranır, satılacak olan ne?',
        why: 'Seviyorum, ziyaret ederim, sever: “onu” (nesne) eksik. Davranır, özen gösterir: “onlara” (yer tamlayıcısı) eksik. Satılacak olan çatı değil ev, büyüyen bakım değil fidan: özne eksik.',
        whyV: 'Seviyorum, ziyaret ederim ve sever yüklemlerinde onu, yani nesne eksik. Davranır ve özen gösterir yüklemlerinde onlara, yani yer tamlayıcısı eksik. Satılacak olan çatı değil ev; büyüyen bakım değil fidan. Bu ikisinde özne eksik.' } },
    { t: 'Adım adım bir örnek',
      base: '<div class="an-big" style="font-size:18px">Kardeşim müziği çok seviyor ve her gün ilgileniyor.</div>' +
        '<table class="an-tbl"><tr class="rv h1"><td><b>1. yüklem</b> seviyor</td><td>Neyi? → müziği ✓</td></tr>' +
        '<tr class="rv h2"><td><b>2. yüklem</b> ilgileniyor</td><td>Neyle? → “müziği” ✗</td></tr>' +
        '<tr class="rv h3"><td><b>Sonuç</b></td><td>tümleç eksik → …ve her gün <span class="an-ok-t">onunla</span> ilgileniyor.</td></tr></table>',
      steps: [
        { s: 'Hadi bu yöntemi bir cümlede adım adım uygulayalım.' },
        { s: 'İlk yüklem “seviyor”. Neyi seviyor? Müziği. Buraya kadar her şey yolunda.', v: 'İlk yüklem seviyor. Neyi seviyor? Müziği. Buraya kadar her şey yolunda.', on: '.h1' },
        { s: 'İkinci yüklem “ilgileniyor”. Neyle ilgileniyor? “Müziği ilgileniyor” diyemeyiz, değil mi?', v: 'İkinci yüklem ilgileniyor. Neyle ilgileniyor? Müziği ilgileniyor diyemeyiz, değil mi?', on: '.h2' },
        { s: 'Demek ki ikinci yüklemin tümleci eksik. “Onunla” sözcüğünü ekleyince cümle düzeliyor.', v: 'Demek ki ikinci yüklemin tümleci eksik. Onunla sözcüğünü ekleyince cümle düzeliyor.', on: '.h3' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdaki cümlelerin hangisinde <b>nesne eksikliğinden</b> kaynaklanan bir anlatım bozukluğu vardır?</p>',
        c: ['Bu şehre hayranım ve her yıl ziyaret ediyorum.', 'Çocukları çok severdi, onlara her zaman iyi davranırdı.', 'Kahvaltıda peynir ve çay içtik.', 'Bu filmi izledim ve herkese tavsiye ettim.'], a: 'A',
        hint: 'Ortak ögeyi ikinci yükleme sor. Nesne “neyi, kimi?” sorusunun cevabıdır; “neye?” değil.',
        hintV: 'Ortak ögeyi ikinci yükleme sor. Nesne neyi, kimi sorusunun cevabıdır; neye değil.',
        why: 'Neye hayranım? Bu şehre. Neyi ziyaret ediyorum? “Bu şehre” uymuyor; “onu ziyaret ediyorum” olmalı. B ve D doğru. C’de de bozukluk var ama nesneden değil, yüklem eksikliğinden.',
        whyV: 'Neye hayranım? Bu şehre. Neyi ziyaret ediyorum? Bu şehre uymuyor; onu ziyaret ediyorum olmalı. B ve D doğru. C’de de bozukluk var ama nesneden değil, yüklem eksikliğinden.' },
      steps: [{ s: 'Bu soru tipi LGS’de çıktı. Her yükleme tek tek sor bakalım.', v: 'Bu soru tipi LGS’de çıktı. Her yükleme tek tek sor bakalım.' }] },

    { t: 'Yüklem ve ek-fiil eksikliği',
      steps: [
        { s: 'Bazen iki ayrı iş tek bir yükleme bağlanır ama yüklem birine uymaz. “Kahvaltıda peynir ve çay içtik.” Peynir içilir mi?',
          v: 'Bazen iki ayrı iş tek bir yükleme bağlanır ama yüklem birine uymaz. Kahvaltıda peynir ve çay içtik. Peynir içilir mi?',
          h: '<div class="an-ex"><span class="an-l">Kahvaltıda peynir <span class="an-ok-t">yedik</span> ve çay içtik. → yüklem eklendi</span></div>' },
        { s: 'Peynir yenir, çay içilir. Her birine kendi yüklemini vermek gerekiyor. Bu yüklem eksikliği.' },
        { s: 'Ek-fiil eksikliği de böyle: “Boyu kısa, bedeni de pek güçlü değildi.” Sondaki “değildi” iki yargıyı birden olumsuz yapıyor.',
          v: 'Ek fiil eksikliği de böyle: Boyu kısa, bedeni de pek güçlü değildi. Sondaki değildi, iki yargıyı birden olumsuz yapıyor.',
          h: '<div class="an-trap">Boyu kısa<span class="an-ok-t">ydı</span>, bedeni de pek güçlü değildi. → “boyu kısa değildi” anlamı çıkmasın diye ek-fiil</div>' },
        { s: 'Yani “boyu kısa değildi” anlamı çıkıyor. Bunu önlemek için ilk yargıya ek-fiil getiriyoruz: “Boyu kısaydı.”', v: 'Yani, boyu kısa değildi anlamı çıkıyor. Bunu önlemek için ilk yargıya ek fiil getiriyoruz: Boyu kısaydı.' }
      ] },

    { t: 'Tamlama ve çatı uyumsuzluğu',
      steps: [
        { s: 'Bir sıfat ile bir isim aynı tamlanana bağlanırsa bozukluk olur. “Özel ve devlet okulları tatil edildi.”',
          v: 'Bir sıfat ile bir isim aynı tamlanana bağlanırsa bozukluk olur. Özel ve devlet okulları tatil edildi.',
          h: '<div class="an-ex"><span class="an-l">Özel ve devlet okulları → “özel okulları” olmaz!</span><span class="an-l"><span class="an-ok-t">Özel okullar ve devlet okulları</span> tatil edildi.</span></div>' },
        { s: '“Devlet okulları” olur ama “özel okulları” olmaz. Çünkü sıfat tamlamasında tamlanan ek almaz.', v: 'Devlet okulları olur ama özel okulları olmaz. Çünkü sıfat tamlamasında tamlanan ek almaz.' },
        { s: 'Çatı uyumsuzluğunda ise bir yargı edilgen, diğeri etken kurulur: “Bina boyandı ve sahibine teslim etti.”',
          v: 'Çatı uyumsuzluğunda ise bir yargı edilgen, diğeri etken kurulur: Bina boyandı ve sahibine teslim etti.',
          h: '<div class="an-trap">Bina boyandı (edilgen) ve sahibine teslim <span class="an-bad-t">etti</span> (etken). → teslim <span class="an-ok-t">edildi</span></div>' },
        { s: 'Kim teslim etti? Belli değil. İkinci yüklem de edilgen olmalı: “teslim edildi.”', v: 'Kim teslim etti? Belli değil. İkinci yüklem de edilgen olmalı: teslim edildi.' }
      ] },

    { t: 'Bozuk cümleleri ele',
      steps: [{ s: 'Anlatım bozukluğu olan cümleleri ele. Yalnızca kusursuz olanlar kalsın.' }],
      ia: { tip: 'eleme', q: '<p><b>Anlatım bozukluğu olan</b> cümleleri ele.</p>',
        ogeler: ['Özel ve devlet okulları açıldı.', 'Bina boyandı ve sahibine teslim etti.', 'Kahvaltıda peynir ve çay içtik.', 'Boyu uzundu, saçları kıvırcıktı.', 'Kitaplar okundu ve rafa kondu.', 'Özel okullar ve devlet okulları açıldı.'],
        ele: [0, 1, 2],
        hint: 'Tamlamada sıfat ile isim aynı tamlanana bağlanmış mı? İki yargının çatısı aynı mı? Yüklem her ögeye uyuyor mu?',
        why: '“özel okulları” olmaz (tamlama); boyandı edilgen, teslim etti etken (çatı); peynir içilmez (yüklem eksik). Kalanlar düzgün: ek-fiil ve çatı uyumlu.',
        whyV: 'Özel okulları denmez, bu tamlama yanlışı. Boyandı edilgen, teslim etti etken: çatı uyumsuzluğu. Peynir içilmez: yüklem eksik. Kalan cümlelerde ek fiil ve çatı uyumlu.' } },
    { t: 'Ek, karşılaştırma, bağlaç',
      base: '<table class="an-tbl"><tr><th>Bozuk</th><th>Doğru</th></tr>' +
        '<tr class="rv k1"><td>Birçok kitap<span class="an-bad-t">lar</span> okudu.</td><td>Birçok kitap okudu.</td></tr>' +
        '<tr class="rv k1"><td>Çocuklar oyun oynaması için…</td><td>Çocuk<span class="an-ok-t">ların</span> oyun oynaması için…</td></tr>' +
        '<tr class="rv k2"><td>Onun resimleri <span class="an-bad-t">senden</span> canlı.</td><td>…<span class="an-ok-t">seninkilerden</span> canlı.</td></tr>' +
        '<tr class="rv k3"><td>Ne aradı ne <span class="an-bad-t">sormadı</span>.</td><td>Ne aradı ne <span class="an-ok-t">sordu</span>.</td></tr>' +
        '<tr class="rv k3"><td>Çok çalışıyor <span class="an-bad-t">fakat</span> etütlere de katılıyor.</td><td>…<span class="an-ok-t">ve</span> etütlere de katılıyor.</td></tr></table>',
      steps: [
        { s: 'Son birkaç kısa başlık kaldı. Ek yanlışları: “birçok, birkaç” ve sayılardan sonra çoğul eki gelmez. Tamlayan eki de unutulmamalı.',
          v: 'Son birkaç kısa başlık kaldı. Ek yanlışları: birçok, birkaç ve sayılardan sonra çoğul eki gelmez. Tamlayan eki de unutulmamalı.', on: '.k1' },
        { s: 'Karşılaştırma yanlışı: resim ile insan karşılaştırılmaz. Onun resimleriyle senin resimlerini karşılaştırmalıyız.', on: '.k2' },
        { s: '“Ne… ne…” bağlacı zaten olumsuzluk katar, yüklem olumlu kalmalı. Ve “fakat” karşıtlık ister; aynı yöndeki iki yargıyı bağlayamaz.',
          v: 'Ne, ne bağlacı zaten olumsuzluk katar, yüklem olumlu kalmalı. Fakat ise karşıtlık ister; aynı yöndeki iki yargıyı bağlayamaz.', on: '.k3' }
      ] },

    { t: 'Kaç cümle bozuk?',
      steps: [{ s: 'Beş numaralı cümleyi tek tek oku. Kaç tanesinde anlatım bozukluğu var? Sayıyı kaydırıcıyla seç.' }],
      ia: { tip: 'kaydir', q: '<p>(I) Birkaç arkadaşlarım bize geldi. (II) Onun sesi seninkinden daha güzel. (III) Ne telefon açtı ne mesaj atmadı. (IV) Yaklaşık iki saat yürüdük. (V) Çok çalışıyor fakat her gün kitap okuyor.</p><p>Kaç cümlede <b>anlatım bozukluğu</b> vardır?</p>',
        min: 0, max: 5, adim: 1, cevap: 3, tol: 0, birim: 'cümle', etiket: [0, 1, 2, 3, 4, 5],
        hint: '“birkaç” sonrası çoğul eki, “ne… ne…” ile olumsuz yüklem ve “fakat” bağlacının karşıtlık isteyip istemediğine bak.',
        hintV: 'Birkaç sözcüğünden sonra çoğul eki, ne ne bağlacıyla olumsuz yüklem ve fakat bağlacının karşıtlık isteyip istemediğine bak.',
        why: 'Üç bozuk cümle: I (birkaç arkadaşım), III (ne mesaj attı), V (fakat yerine “ve”). II doğru karşılaştırma (seninkinden), IV’te gereksiz sözcük yok.',
        whyV: 'Üç cümle bozuk. Birincide birkaç arkadaşım olmalı. Üçüncüde ne mesaj attı olmalı. Beşincide fakat yerine ve gelmeli. İkinci cümlede karşılaştırma doğru, dördüncüde de gereksiz sözcük yok.' } },
    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdaki cümlelerin hangisinde <b>anlatım bozukluğu yoktur</b>?</p>',
        c: ['Sen ve kardeşin yarın bize gelecek.', 'Ağaçlar ilkbaharda çiçek açtılar.', 'Hem çok çalışıyor hem de derslerini düzenli tekrar ediyor.', 'Boyu kısa, bedeni de pek güçlü değildi.'], a: 'C',
        hint: 'Her şıkta özne–yüklem uyumuna ve ek-fiile bak. Bozuk olanları tek tek ele.',
        hintV: 'Her şıkta özne ile yüklem uyumuna ve ek fiile bak. Bozuk olanları tek tek ele.',
        why: 'C’de iki yargı “hem… hem…” ile doğru bağlanmış, bozukluk yok. A’da kişi uyumu (geleceksiniz), B’de tekil–çoğul uyumu (açtı), D’de ek-fiil eksikliği (kısaydı) var.',
        whyV: 'C’de iki yargı hem, hem bağlacıyla doğru bağlanmış; bozukluk yok. A’da kişi uyumu bozuk, geleceksiniz olmalı. B’de tekil çoğul uyumu bozuk, açtı olmalı. D’de ek fiil eksik, kısaydı olmalı.' },
      steps: [{ s: 'Son soru. LGS bu kalıpta her şıkka farklı bir tuzak koyuyor, sabırla tek tek ele.', v: 'Son soru. LGS bu kalıpta her şıkka farklı bir tuzak koyuyor, sabırla tek tek ele.' }] }
  ]
};
