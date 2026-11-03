/* Adım Adım Anlatım · Türkçe · Cümle Türleri (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['tr-cumleturu'] = {
  title: 'Cümle Türleri',
  desc: 'Yüklemin türü, yeri, anlamı ve cümlenin yapısı: fiilimsi yüklem, devrik cümle, biçimce–anlamca olumsuzluk, “mi” eki ve yalancı sıralı cümle tuzakları.',
  ozet: [
    'Her cümle dört açıdan incelenir ve her açıdan bir özelliği vardır: <b>yüklemin türü, yüklemin yeri, anlamı, yapısı</b>.',
    '<b>Fiil cümlesi</b>: yüklem çekimli fiil. <b>İsim cümlesi</b>: yüklem ek-fiil almış isim, sıfat, zamir ya da fiilimsi. Sonuna “-dır” getirebiliyorsan isim cümlesidir.',
    'Yüklemi fiilimsi olan cümle isim cümlesidir: “Hayali pilot olmaktı.” Eş sesliye dikkat: sepette elma vardı (isim), köye vardı (fiil).',
    '<b>Kurallı</b>: yüklem en sonda. <b>Devrik</b>: yüklemden sonra tek bir öge bile gelirse. Eksiltili cümlede yüklem yoktur.',
    '<b>Olumsuzluk</b>: -ma/-me, -maz/-mez, yok, değil yüklemde olmalı. Fiilimsideki -ma ve -sız eki yüklemi olumsuz yapmaz. Üzücü olaylar da olumludur.',
    'Biçim–anlam farkı: iki olumsuz (tanımayan yoktur) anlamca olumlu; “ne… ne…” ve sözde soru (nasıl çözerim?) anlamca olumsuz.',
    '“mi” olumsuzluk eki değildir; soru cümlesi de biçimce olumlu ya da olumsuzdur.',
    '<b>Yapı</b>: basit (tek yüklem, fiilimsi yok) · birleşik (fiilimsi, -sa, ki, alıntı) · sıralı (virgül, noktalı virgül) · bağlı (bağlaç). Virgül ya da bağlaç iki yüklemi bağlamıyorsa cümle sıralı ya da bağlı değildir.'
  ],
  scenes: [
    { t: 'Bir cümle, dört kimlik',
      base: '<div class="an-grid" style="grid-template-columns:repeat(2,1fr)">' +
        '<div class="rv m1"><b>1. Yüklemin türü</b>fiil · isim</div>' +
        '<div class="rv m2"><b>2. Yüklemin yeri</b>kurallı · devrik · eksiltili</div>' +
        '<div class="rv m3"><b>3. Anlamı</b>olumlu · olumsuz · soru</div>' +
        '<div class="rv m4"><b>4. Yapısı</b>basit · birleşik · sıralı · bağlı</div></div>',
      steps: [
        { s: 'Merhaba! Bugün cümlelerin kimlik kartını çıkaracağız. Her cümleye dört farklı açıdan bakıyoruz.' },
        { s: 'Birincisi yüklemin türü: yüklem fiil mi, isim mi?', on: '.m1' },
        { s: 'İkincisi yüklemin yeri: yüklem sonda mı, değil mi?', on: '.m2' },
        { s: 'Üçüncüsü anlamı: olumlu mu, olumsuz mu, soru mu?', on: '.m3' },
        { s: 'Dördüncüsü yapısı: kaç yüklem var, fiilimsi var mı, nasıl bağlanmışlar?', on: '.m4' },
        { s: 'Her cümle bu dört başlığın her birinden mutlaka bir özellik taşır. LGS de çoğu zaman dördünü aynı cümle üzerinde birlikte sorar.', v: 'Her cümle bu dört başlığın her birinden mutlaka bir özellik taşır. LGS de çoğu zaman dördünü aynı cümle üzerinde birlikte sorar.' }
      ] },

    { t: 'Fiil cümlesi mi, isim cümlesi mi?',
      base: '<table class="an-tbl"><tr><th>Fiil cümlesi</th><th>İsim cümlesi</th></tr>' +
        '<tr class="rv f1"><td>Yüklem çekimli fiil</td><td>Yüklem ek-fiil almış isim, sıfat, zamir ya da fiilimsi</td></tr>' +
        '<tr class="rv f2"><td>Kuşlar sonbaharda güneye <span class="an-w">göç eder</span>.</td><td>En sevdiğim mevsim <span class="an-w">ilkbahardır</span>.</td></tr></table>',
      steps: [
        { s: 'İlk açıdan başlayalım. Yüklem çekimli bir fiilse fiil cümlesi, ek-fiil almış bir isimse isim cümlesidir.', v: 'İlk açıdan başlayalım. Yüklem çekimli bir fiilse fiil cümlesi, ek fiil almış bir isimse isim cümlesidir.', on: '.f1' },
        { s: '“Göç eder” bir eylem bildiriyor, fiil cümlesi. “İlkbahardır” ise bir isim, isim cümlesi.', v: 'Göç eder bir eylem bildiriyor, fiil cümlesi. İlkbahardır ise bir isim, isim cümlesi.', on: '.f2' },
        { s: 'Sana küçük bir püf noktası: yüklemin sonuna “-dır” ekleyebiliyorsan, yüklem isim soyludur.', v: 'Sana küçük bir püf noktası: yüklemin sonuna dır ekini ekleyebiliyorsan, yüklem isim soyludur.',
          h: '<div class="an-tip">Teknolojik cihazları her yerde görmek <span class="an-w">mümkün(dür)</span>. → yüklem isim → isim cümlesi</div>' },
        { s: 'Bu cümle LGS’de soruldu. “Görmek” fiile benziyor ama o bir fiilimsi. Asıl yüklem “mümkün”, yani isim cümlesi.', v: 'Bu cümle LGS’de soruldu. Görmek fiile benziyor ama o bir fiilimsi. Asıl yüklem mümkün, yani isim cümlesi.' }
      ] },

    { t: 'Tuzak: fiilimsi yüklem ve eş sesliler',
      steps: [
        { s: 'Şimdi çok dikkat et. Yüklemi fiilimsi olan cümleler de isim cümlesidir. Fiilimsi, fiil gibi görünür ama isim gibi davranır.',
          h: '<div class="an-trap">En büyük hayali pilot <span class="an-w">olmaktı</span>. → ol-mak-tı: isim-fiil + ek-fiil → <b>isim cümlesi</b></div>' },
        { s: '“Bizi kapıda karşılayan, köyün muhtarıydı.” Burada yüklem “muhtarıydı”. “Karşılayan” ise özne görevinde bir sıfat-fiil.',
          v: 'Bizi kapıda karşılayan, köyün muhtarıydı. Burada yüklem muhtarıydı. Karşılayan ise özne görevinde bir sıfat fiil.',
          h: '<div class="an-ex"><span class="an-l">Bizi kapıda karşılayan, köyün <span class="an-w">muhtarıydı</span>. → isim cümlesi</span></div>' },
        { s: 'Bir de eş sesli sözcükler var. Cümlenin anlamına bakmadan karar verme.',
          h: '<table class="an-tbl"><tr class="rv s1"><td>Sepette taze elmalar <span class="an-w">vardı</span>.</td><td>bulunmak (yok’un zıttı) → <b>isim</b></td></tr>' +
             '<tr class="rv s2"><td>Yolcular akşamüstü köye <span class="an-w">vardı</span>.</td><td>ulaşmak → <b>fiil</b></td></tr></table>' },
        { s: 'İlkinde “var”, yokun zıttı olan bir isim. Sonuna ek-fiil gelmiş, isim cümlesi.', v: 'İlkinde var, yokun zıttı olan bir isim. Sonuna ek fiil gelmiş, isim cümlesi.', on: '.s1' },
        { s: 'İkincisinde ise “varmak”, yani ulaşmak eylemi var. Bu bir fiil cümlesi.', v: 'İkincisinde ise varmak, yani ulaşmak eylemi var. Bu bir fiil cümlesi.', on: '.s2' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdakilerden hangisi <b>fiil cümlesidir</b>?</p>',
        c: ['En büyük hayali bir gün pilot olmaktı.', 'Bizi kapıda karşılayan, köyün muhtarıydı.', 'Yolcular akşamüstü köye vardı.', 'Bu sorunu çözmek hiç de kolay değil.'], a: 'C',
        hint: 'Her cümlenin yüklemini bul ve sonuna “-dır” getirmeyi dene. Fiilimsi yükleme de dikkat et.',
        hintV: 'Her cümlenin yüklemini bul ve sonuna dır getirmeyi dene. Fiilimsi yükleme de dikkat et.',
        why: '“Vardı” burada ulaşmak anlamında çekimli bir fiil. A’da yüklem isim-fiil (olmaktı), B’de isim (muhtarıydı), D’de “kolay değil” isim soylu. Hepsi isim cümlesi.',
        whyV: 'Vardı, burada ulaşmak anlamında çekimli bir fiil. A’da yüklem isim fiil, olmaktı. B’de isim, muhtarıydı. D’de kolay değil, isim soylu. Bunların hepsi isim cümlesi.' },
      steps: [{ s: 'Hadi sıra sende. Yüklemi doğru bulursan bu soru çok kolay.' }] },

    { t: 'Kurallı, devrik, eksiltili',
      steps: [
        { s: 'İkinci açı yüklemin yeri. Yüklem en sondaysa cümle kurallıdır, yani düz cümle.',
          h: '<div class="an-ex"><span class="an-l">Bölgeye özgü birçok bitki bu coğrafyada <span class="an-w">yetişmekte</span>. → kurallı</span></div>' },
        { s: 'Yüklemden sonra bir öge gelirse cümle devrik olur. Tek bir öge bile yeter! Bu cümle LGS’de çıktı.',
          v: 'Yüklemden sonra bir öge gelirse cümle devrik olur. Tek bir öge bile yeter! Bu cümle LGS’de çıktı.',
          h: '<div class="an-ex"><span class="an-l">Bölgeye özgü birçok bitki <span class="an-w">yetişmekte</span> bu coğrafyada. → devrik</span></div>' },
        { s: 'Burada çok dikkat et: yüklemi bulmak için cümlenin son sözcüğüne değil, yargıyı bildiren sözcüğe bakıyoruz.',
          h: '<div class="an-trap">Son sözcük ≠ yüklem. Önce yargıyı bul, sonra arkasında öge var mı bak.</div>', v: 'Burada çok dikkat et: yüklemi bulmak için cümlenin son sözcüğüne değil, yargıyı bildiren sözcüğe bakıyoruz.' },
        { s: 'Bir de eksiltili cümle var: yüklemi söylenmemiş, yargı okura bırakılmış cümle. “Tam kapıdan çıkıyordum ki…”',
          v: 'Bir de eksiltili cümle var: yüklemi söylenmemiş, yargı okura bırakılmış cümle. Tam kapıdan çıkıyordum ki...',
          h: '<div class="an-tip">Tam kapıdan çıkıyordum ki… · Az veren candan, çok veren maldan… → yüklem yok, eksiltili</div>' },
        { s: 'Ama üç nokta her zaman eksiltili demek değil. “Bahçede elma, armut, erik vardı…” cümlesinde yüklem yerinde duruyor.', v: 'Ama üç nokta her zaman eksiltili demek değil. Bahçede elma, armut, erik vardı, cümlesinde yüklem yerinde duruyor.' }
      ] },

    { t: 'Olumlu mu, olumsuz mu?',
      steps: [
        { s: 'Üçüncü açı anlam. Yüklemdeki iş gerçekleşiyorsa cümle olumlu, gerçekleşmiyorsa olumsuz.',
          h: '<div class="an-rule"><b>Olumsuzluk unsurları:</b> -ma / -me · -maz / -mez · yok · değil (yüklemde!)</div>' },
        { s: 'İlk tuzak şu: üzücü bir olay da gerçekleşmişse olumludur. “Dedem dün çok hastaydı.” Hastalık var, yani cümle olumlu.',
          v: 'İlk tuzak şu: üzücü bir olay da gerçekleşmişse olumludur. Dedem dün çok hastaydı. Hastalık var, yani cümle olumlu.' },
        { s: 'İkinci tuzak: olumsuzluk yüklemde olmalı. Fiilimsideki -ma ya da -sız eki cümleyi olumsuz yapmaz.',
          v: 'İkinci tuzak: olumsuzluk yüklemde olmalı. Fiilimsideki ma, ya da sız eki cümleyi olumsuz yapmaz.',
          h: '<div class="an-trap"><span class="an-w">Bitmez tükenmez</span> bir enerjisi var. → olumlu<br><span class="an-w">Görmediğim</span> arkadaşımla karşılaştım. → olumlu</div>' },
        { s: '“Görmediğim” sözcüğünde -me var, ama o bir sıfat-fiil. Yüklem “karşılaştım” olumlu, cümle de olumlu.', v: 'Görmediğim sözcüğünde me eki var, ama o bir sıfat fiil. Yüklem karşılaştım olumlu, cümle de olumlu.' }
      ] },

    { t: 'Biçim başka, anlam başka',
      base: '<table class="an-tbl"><tr><th>Cümle</th><th>Biçim</th><th>Anlam</th></tr>' +
        '<tr class="rv a1"><td>Onu tanımayan yoktur.</td><td>olumsuz</td><td class="an-ok-t">olumlu (herkes tanır)</td></tr>' +
        '<tr class="rv a2"><td>Seni anlamıyor değilim.</td><td>olumsuz</td><td class="an-ok-t">olumlu (anlıyorum)</td></tr>' +
        '<tr class="rv a3"><td>Aylardır ne arıyor ne soruyor.</td><td>olumlu</td><td class="an-bad-t" style="text-decoration:none">olumsuz</td></tr>' +
        '<tr class="rv a4"><td>Bu soruyu nasıl çözerim?</td><td>olumlu</td><td class="an-bad-t" style="text-decoration:none">olumsuz (çözemem)</td></tr></table>',
      steps: [
        { s: 'Bazı cümlelerde görünüş ile kastedilen birbirini tutmaz. LGS bu ayrımı çok sever.', v: 'Bazı cümlelerde görünüş ile kastedilen birbirini tutmaz. LGS bu ayrımı çok sever.' },
        { s: '“Onu tanımayan yoktur.” Yüklem “yok”, biçimce olumsuz. Ama ne demek istiyor? Herkes tanıyor. Anlamca olumlu.', v: 'Onu tanımayan yoktur. Yüklem yok, biçimce olumsuz. Ama ne demek istiyor? Herkes tanıyor. Anlamca olumlu.', on: '.a1' },
        { s: 'İki olumsuz birbirini götürüyor. “Anlamıyor değilim” de aslında “anlıyorum” demek.', v: 'İki olumsuz birbirini götürüyor. Anlamıyor değilim de aslında anlıyorum demek.', on: '.a2' },
        { s: 'Tersi de var. “Ne arıyor ne soruyor” cümlesinde olumsuzluk eki yok, biçimce olumlu. Ama anlamı: aramıyor, sormuyor.', v: 'Tersi de var. Ne arıyor ne soruyor cümlesinde olumsuzluk eki yok, biçimce olumlu. Ama anlamı: aramıyor, sormuyor.', on: '.a3' },
        { s: '“Bu soruyu nasıl çözerim?” Cevap beklemiyor, “çözemem” demek istiyor. Buna sözde soru diyoruz, anlamca olumsuz.', v: 'Bu soruyu nasıl çözerim? Cevap beklemiyor, çözemem demek istiyor. Buna sözde soru diyoruz, anlamca olumsuz.', on: '.a4' }
      ] },

    { t: '“mi” ekinin kılıkları',
      steps: [
        { s: '“mi” soru ekidir, olumsuzluk eki değildir. Soru cümlesinin olumlu ya da olumsuz olduğuna yüklemdeki eke bakarak karar veririz.',
          v: 'Mi, soru ekidir, olumsuzluk eki değildir. Soru cümlesinin olumlu ya da olumsuz olduğuna yüklemdeki eke bakarak karar veririz.',
          h: '<table class="an-tbl"><tr><td>Kitabı bitirdin mi?</td><td>biçimce olumlu soru</td></tr><tr><td>Kitabı bitir<span class="an-ek">me</span>din mi?</td><td>biçimce olumsuz soru</td></tr></table>' },
        { s: 'Ayrıca “mi” her zaman soru sormaz. “Bahçeleri güzel mi güzel.” Burada pekiştirme yapıyor, cümle soru değil, olumlu.',
          v: 'Ayrıca mi her zaman soru sormaz. Bahçeleri güzel mi güzel. Burada pekiştirme yapıyor; cümle soru değil, olumlu.',
          h: '<div class="an-tip">Bahçeleri güzel <span class="an-w">mi</span> güzel. → pekiştirme, soru cümlesi değil</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdaki cümlelerin hangisi <b>biçimce olumsuz, anlamca olumludur</b>?</p>',
        c: ['Aylardır ne arıyor ne soruyor.', 'Bu kasabada onu tanımayan yoktur.', 'Bugün hava hiç soğuk değil.', 'Ben bu kadar zor bir soruyu nasıl çözerim?'], a: 'B',
        hint: 'Önce yüklemde olumsuzluk unsuru olanları bul. Sonra cümlenin gerçekte ne demek istediğini düşün.',
        why: '“Tanımayan yoktur”: yüklem “yok”, biçimce olumsuz; iki olumsuz birleşip “herkes tanır” anlamı veriyor. A ve D biçimce olumlu, anlamca olumsuz; C hem biçimce hem anlamca olumsuz.',
        whyV: 'Tanımayan yoktur. Yüklem yok, yani biçimce olumsuz; ama iki olumsuz birleşip herkes tanır anlamı veriyor. A ve D biçimce olumlu, anlamca olumsuz. C ise hem biçimce hem anlamca olumsuz.' },
      steps: [{ s: 'Şimdi bir dene bakalım. Görünüşe değil, anlama odaklan.' }] },

    { t: 'Yapısına göre: basit ve birleşik',
      steps: [
        { s: 'Son açı yapı. Tek yüklemli ve içinde hiç fiilimsi olmayan cümleye basit cümle deriz.',
          h: '<div class="an-ex"><span class="an-l">Kardeşim sabah erkenden okula <span class="an-w">gitti</span>. → tek yüklem, fiilimsi yok → <b>basit</b></span></div>' },
        { s: 'Tek yüklemi olup içinde en az bir fiilimsi bulunan cümle ise birleşik cümledir. LGS bunu çoğu zaman “fiilimsi bulunur” diye sorar.',
          v: 'Tek yüklemi olup içinde en az bir fiilimsi bulunan cümle ise birleşik cümledir. LGS bunu çoğu zaman, fiilimsi bulunur, diye sorar.',
          h: '<div class="an-ex"><span class="an-l">Eve <span class="an-w">gelince</span> hemen uyudu. → zarf-fiil → <b>birleşik</b></span><span class="an-l">Kütüphaneden <span class="an-w">aldığım</span> kitabı bitirdim. → sıfat-fiil → <b>birleşik</b></span></div>' },
        { s: 'Ama dondurma, çakmak, dolma gibi kalıcı isimler fiilimsi sayılmaz. Onlar cümleyi birleşik yapmaz.' },
        { s: 'Bir de şartlı, ki’li ve iç içe birleşik cümleler var. Yine de LGS’de en çok fiilimsili olan karşına çıkar.', v: 'Bir de şartlı, kili ve iç içe birleşik cümleler var. Yine de LGS’de en çok fiilimsili olan karşına çıkar.',
          h: '<div class="an-tip">Diğer birleşik türleri: şartlı (Çalışırsan kazanırsın.) · ki’li (Duydum ki gelmişsin.) · iç içe (“Yarın gel.” dedi.)</div>' }
      ] },

    { t: 'Sıralı, bağlı ve yalancısı',
      steps: [
        { s: 'Birden fazla yüklem virgülle ya da noktalı virgülle bağlanmışsa sıralı cümle olur. “Güneş doğdu, kuşlar öttü.”',
          v: 'Birden fazla yüklem virgülle ya da noktalı virgülle bağlanmışsa sıralı cümle olur. Güneş doğdu, kuşlar öttü.',
          h: '<div class="an-ex"><span class="an-l">Kapıyı <span class="an-w">açtı</span>, içeri <span class="an-w">girdi</span>. → sıralı</span><span class="an-l">Çok <span class="an-w">yorgundu</span> ama çalışmaya devam <span class="an-w">etti</span>. → bağlı</span></div>' },
        { s: 'Yüklemler “ve, ama, fakat, çünkü” gibi bağlaçlarla bağlanmışsa bağlı cümle olur.', v: 'Yüklemler ve, ama, fakat, çünkü gibi bağlaçlarla bağlanmışsa bağlı cümle olur.' },
        { s: 'Şimdi tuzağa bak: “Ali ve Ayşe pazardan elma, armut aldı.” Burada hem virgül hem bağlaç var, ama yüklem tek: “aldı”.',
          v: 'Şimdi tuzağa bak: Ali ve Ayşe pazardan elma, armut aldı. Burada hem virgül hem bağlaç var, ama yüklem tek: aldı.',
          h: '<div class="an-trap">Ali <span class="an-w">ve</span> Ayşe pazardan elma<span class="an-w">,</span> armut aldı. → tek yüklem → <b>basit cümle</b></div>' },
        { s: 'Virgül ve bağlaç burada yüklemleri değil, eş görevli sözcükleri bağlıyor. O yüzden cümle sıralı da bağlı da değil, basit.' },
        { s: 'Kural şu: virgülün ya da bağlacın hem solunda hem sağında ayrı birer yüklem olmalı.',
          h: '<div class="an-rule">Gerçek sıralı/bağlı: <b>yüklem</b> , <b>yüklem</b> · <b>yüklem</b> ve <b>yüklem</b></div>' }
      ] },

    { t: 'Dört açıyı birden uygulayalım',
      base: '<div class="an-big" style="font-size:18px">Bu güzel kasabada yaşamak bir ayrıcalıktı.</div>' +
        '<table class="an-tbl"><tr class="rv d1"><td><b>Türü</b></td><td>yüklem “ayrıcalıktı” isim → <b>isim cümlesi</b></td></tr>' +
        '<tr class="rv d2"><td><b>Yeri</b></td><td>yüklem sonda → <b>kurallı</b></td></tr>' +
        '<tr class="rv d3"><td><b>Anlamı</b></td><td>olumsuzluk yok → <b>olumlu</b></td></tr>' +
        '<tr class="rv d4"><td><b>Yapısı</b></td><td>“yaşamak” isim-fiil → <b>birleşik</b> (fiilimsi var)</td></tr></table>',
      steps: [
        { s: 'Şimdi her şeyi bir cümlede toplayalım: “Bu güzel kasabada yaşamak bir ayrıcalıktı.”', v: 'Şimdi her şeyi bir cümlede toplayalım: Bu güzel kasabada yaşamak bir ayrıcalıktı.' },
        { s: 'Yüklem “ayrıcalıktı”. Ayrıcalık bir isim, ek-fiil almış. İsim cümlesi.', v: 'Yüklem ayrıcalıktı. Ayrıcalık bir isim, ek fiil almış. İsim cümlesi.', on: '.d1' },
        { s: 'Yüklemden sonra hiçbir öge yok, kurallı.', on: '.d2' },
        { s: 'Yüklemde olumsuzluk unsuru yok, olumlu.', on: '.d3' },
        { s: 'Ve “yaşamak” bir isim-fiil. Cümlede fiilimsi var, yapısına göre birleşik. İşte cümlenin tam kimliği!', v: 'Ve yaşamak bir isim fiil. Cümlede fiilimsi var, yapısına göre birleşik. İşte cümlenin tam kimliği!', on: '.d4' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>“Yıllardır görmediğim arkadaşımla karşılaşmak beni çok mutlu etti.”</p><p>Bu cümleyle ilgili aşağıdakilerden hangisi <b>yanlıştır</b>?</p>',
        c: ['Yüklemi çekimli bir fiildir.', 'Yüklemi sonda olduğu için kurallıdır.', '“görmediğim” sözcüğü cümleyi olumsuz yapmıştır.', 'Fiilimsi bulunmaktadır.'], a: 'C',
        hint: 'Olumsuzluk eki yüklemde mi, yoksa bir fiilimsinin içinde mi?',
        why: 'Yüklem “mutlu etti” olumlu. “görmediğim” sözcüğündeki -me bir sıfat-fiilin içinde; yüklemi olumsuz yapmaz. A, B ve D doğru: çekimli fiil, sonda, “görmediğim” ve “karşılaşmak” fiilimsi.',
        whyV: 'Yüklem mutlu etti, olumlu. Görmediğim sözcüğündeki me eki bir sıfat fiilin içinde; yüklemi olumsuz yapmaz. A, B ve D doğru: yüklem çekimli fiil ve sonda; görmediğim ve karşılaşmak da fiilimsi.' },
      steps: [{ s: 'Son soru, LGS’deki kalıbın aynısı. Dört açıyı tek tek kontrol et.', v: 'Son soru, sınavdaki kalıbın aynısı. Dört açıyı tek tek kontrol et.' }] }
  ]
};
