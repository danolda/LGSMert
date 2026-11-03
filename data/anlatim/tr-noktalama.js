/* Adım Adım Anlatım · Türkçe · Noktalama İşaretleri (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['tr-noktalama'] = {
  title: 'Noktalama İşaretleri',
  desc: 'Nokta, virgül, noktalı virgül, iki nokta, üç nokta, soru ve ünlem, tırnak, kesme ve çizgiler: görevleri, virgülün konmadığı yerler ve LGS’nin boşluk doldurma kalıbı.',
  ozet: [
    'Nokta, üç nokta, soru, ünlem ve cümle niteliğinde söz getiren iki noktadan sonra <b>büyük</b>; virgül ve noktalı virgülden sonra <b>küçük</b> harfle başlanır.',
    '<b>Nokta</b>: cümle sonu, kısaltma (Prof.), sıra sayısı (3. sınıf), tarih (29.10.1923) ve saat (13.30).',
    '<b>Virgül</b> (en çok sorulan): eş görevli sözcükler, sıralı cümleler, uzak düşen özne, anlam karışıklığı (Yaşlı, adamın…), ara söz, hitap, evet/hayır, tırnaksız alıntının sonu.',
    '<b>Virgül konmaz</b>: tek zarf-fiilden sonra, -sa/-se şart ekinden sonra, “ve, veya, ya da” ile tekrarlı bağlaçların önüne, ikileme ve tamlamaların arasına.',
    '<b>Noktalı virgül</b>: içinde virgül olan kümeleri ve ögeleri arasında virgül bulunan sıralı cümleleri ayırır. Virgül yoksa noktalı virgül de genellikle yoktur.',
    '<b>İki nokta</b>: açıklama ya da örnek verilecek sözden önce. Arkasından cümle gelirse büyük, örnek sıralanırsa küçük harf.',
    '<b>Üç nokta</b>: eksiltili cümle, sayılabilecek örneklerin sürdüğü yer, söylenmek istenmeyen söz. Yay ayraç içinde (?) şüphe, (!) alay bildirir.',
    '<b>Tırnaktan sonra gelen ek kesmesiz yazılır</b>: “Nutuk”u. Kesme özel adlara gelen ekleri ayırır; kurum adlarında kullanılmaz.'
  ],
  scenes: [
    { t: 'Neden noktalama?',
      steps: [
        { s: 'Merhaba! Konuşurken durur, sesimizi yükseltir, alçaltırız. Yazıda bu işi noktalama işaretleri yapar.' },
        { s: 'Ama önce küçük bir kural: bazı işaretlerden sonra büyük harfle, bazılarından sonra küçük harfle başlarız.',
          h: '<table class="an-tbl"><tr><th>Sonra büyük harf</th><th>Sonra küçük harf</th></tr><tr><td>nokta · üç nokta · soru · ünlem · iki nokta (cümle gelirse)</td><td>virgül · noktalı virgül</td></tr></table>' },
        { s: 'Bu ayrım boşluk doldurma sorularında çok işine yarayacak. Boşluktan sonraki harf büyükse, oraya virgül gelemez.', v: 'Bu ayrım boşluk doldurma sorularında çok işine yarayacak. Boşluktan sonraki harf büyükse, oraya virgül gelemez.',
          h: '<div class="an-tip">Boşluktan sonra <b>büyük harf</b> → virgül ya da noktalı virgül gelmez.</div>' }
      ] },

    { t: 'Nokta',
      base: '<div class="an-grid" style="grid-template-columns:repeat(2,1fr)">' +
        '<div class="rv p1"><b>Cümle sonu</b>Kitabımı bitirdim.</div>' +
        '<div class="rv p2"><b>Kısaltma</b>Prof. Dr. Ahmet Bey</div>' +
        '<div class="rv p3"><b>Sıra sayısı</b>3. sınıf · 19. yüzyıl</div>' +
        '<div class="rv p4"><b>Tarih ve saat</b>29.10.1923 · 13.30</div></div>',
      steps: [
        { s: 'İlk işaretimiz nokta. En bilinen görevi, tamamlanmış cümlenin sonuna konmasıdır.', on: '.p1' },
        { s: 'Bazı kısaltmaların sonuna da konur: profesör için “Prof.”, doktor için “Dr.”.', v: 'Bazı kısaltmaların sonuna da konur; profesör ve doktor kısaltmalarında olduğu gibi.', on: '.p2' },
        { s: 'Rakamdan sonra konan nokta “-ıncı, -inci” ekinin yerini tutar. “3. sınıf” yazar, “üçüncü sınıf” okuruz.', v: 'Rakamdan sonra konan nokta ıncı, inci ekinin yerini tutar. Üç rakamının yanına nokta koyup yazar, üçüncü sınıf diye okuruz.', on: '.p3' },
        { s: 'Tarihlerde gün, ay ve yılı; saatlerde de saat ile dakikayı nokta ayırır. Saat “13.30” diye yazılır.', v: 'Tarihlerde gün, ay ve yılı; saatlerde de saat ile dakikayı nokta ayırır. Saat on üç otuz, araya nokta konarak yazılır.', on: '.p4' }
      ] },

    { t: 'Nokta ve büyük harf',
      steps: [{ s: 'Dört ifade var. Her biri için Doğru ya da Yanlış seç.' }],
      ia: { tip: 'dogruyanlis', q: '<p>Her ifade için karar ver.</p>',
        ifadeler: [
          { m: '“19. yüzyıl” yazılışı “on dokuzuncu yüzyıl” diye okunur.', d: true, a: 'Rakamdan sonraki nokta -ıncı ekinin yerini tutar.' },
          { m: 'Virgülden sonra gelen sözcük büyük harfle başlar.', d: false, a: 'Virgül ve noktalı virgülden sonra küçük harf gelir.' },
          { m: 'Tarihte gün, ay ve yıl noktayla ayrılabilir: 23.04.1920', d: true, a: 'Tarih ve saatte nokta ayırıcıdır.' },
          { m: 'Soru işaretinden sonra yeni cümle küçük harfle başlar.', d: false, a: 'Nokta, soru, ünlem ve üç noktadan sonra büyük harf.' }],
        hint: 'Hangi işaretlerden sonra büyük, hangilerinden sonra küçük harfle başladığımızı hatırla.',
        why: 'Rakamdan sonraki nokta sıra bildirir; tarih ve saatte ayırıcıdır. Virgülden sonra küçük, soru işaretinden sonra büyük harfle başlanır.',
        whyV: 'Rakamdan sonraki nokta sıra bildirir; tarih ve saatte ise ayırıcıdır. Virgülden sonra küçük, soru işaretinden sonra büyük harfle başlanır.' } },
    { t: 'Virgül: en çok sorulan işaret',
      base: '<table class="an-tbl"><tr><th>Görev</th><th>Örnek</th></tr>' +
        '<tr class="rv v1"><td>Eş görevli sözcükler</td><td>Pazardan elma<b>,</b> armut<b>,</b> kiraz aldık.</td></tr>' +
        '<tr class="rv v2"><td>Sıralı cümleler</td><td>Güneş battı<b>,</b> lambalar yandı.</td></tr>' +
        '<tr class="rv v3"><td>Yüklemden uzak özne</td><td>Annem<b>,</b> pazardan aldığı taze sebzelerle akşama güzel bir yemek yaptı.</td></tr>' +
        '<tr class="rv v4"><td>Anlam karışıklığı</td><td>Yaşlı<b>,</b> adamın elinden tuttu.</td></tr></table>',
      steps: [
        { s: 'Gelelim virgüle. LGS’de en sık yoklanan işaret bu, o yüzden görevlerini tek tek görelim.', v: 'Gelelim virgüle. LGS’de en sık yoklanan işaret bu, o yüzden görevlerini tek tek görelim.' },
        { s: 'Birincisi eş görevli sözcükleri ayırmak. Elma, armut, kiraz: üçü de aynı görevde, aralarına virgül koyuyoruz.', on: '.v1' },
        { s: 'İkincisi sıralı cümleleri ayırmak. “Güneş battı” bir cümle, “lambalar yandı” başka bir cümle. Virgül ikisini ayırıyor.', v: 'İkincisi sıralı cümleleri ayırmak. Güneş battı bir cümle, lambalar yandı başka bir cümle. Virgül ikisini ayırıyor.', on: '.v2' },
        { s: 'Üçüncüsü, uzun bir cümlede yüklemden uzak düşen özneyi belirtmek.', on: '.v3' },
        { s: 'Dördüncüsü anlam karışıklığını önlemek. Virgül olmasa “yaşlı adam” tamlaması sanırdık. Virgülle tutan kişinin “yaşlı” olduğunu anlıyoruz.',
          v: 'Dördüncüsü anlam karışıklığını önlemek. Virgül olmasa yaşlı adam tamlaması sanırdık. Virgülle, tutan kişinin yaşlı olduğunu anlıyoruz.', on: '.v4' }
      ] },

    { t: 'Virgülün diğer görevleri',
      base: '<table class="an-tbl"><tr><th>Görev</th><th>Örnek</th></tr>' +
        '<tr class="rv y1"><td>Ara söz</td><td>İzmir’i<b>,</b> Ege’nin incisini<b>,</b> çok özledim.</td></tr>' +
        '<tr class="rv y2"><td>Hitap</td><td>Sevgili kardeşim<b>,</b></td></tr>' +
        '<tr class="rv y3"><td>Evet, hayır, peki</td><td>Evet<b>,</b> katılıyorum.</td></tr>' +
        '<tr class="rv y4"><td>Tırnaksız alıntı</td><td>Yarın erken gel<b>,</b> dedi.</td></tr></table>',
      steps: [
        { s: 'Virgülün daha birkaç görevi var. Ara sözlerin başına ve sonuna konur: “Ege’nin incisi” İzmir’i açıklıyor.', v: 'Virgülün daha birkaç görevi var. Ara sözlerin başına ve sonuna konur: Ege’nin incisi, İzmir’i açıklıyor.', on: '.y1' },
        { s: 'Hitaplardan, yani seslenmelerden sonra konur.', on: '.y2' },
        { s: '“Evet, hayır, peki, tamam” gibi onay ve ret sözlerinden sonra konur.', v: 'Evet, hayır, peki, tamam gibi onay ve ret sözlerinden sonra konur.', on: '.y3' },
        { s: 'Ve tırnak içine alınmayan alıntı cümlelerin sonuna konur: “Yarın erken gel, dedi.”', v: 'Ve tırnak içine alınmayan alıntı cümlelerin sonuna konur: Yarın erken gel, dedi.', on: '.y4' }
      ] },

    { t: 'Virgülün görevini eşleştir',
      steps: [{ s: 'Her cümledeki virgülü görevine bağla. Önce virgülü kafanda kaldırıp ne değiştiğine bak.' }],
      ia: { tip: 'eslestir', q: '<p>Her cümlede virgülün <b>görevini</b> bul ve eşleştir.</p>', solBaslik: 'Cümle', sagBaslik: 'Görevi',
        sol: ['Kitap, defter, kalem aldım.', 'Kar yağdı, yollar kapandı.', 'Küçük, kediyi kucağına aldı.', 'Ayşe, sınıf başkanımız, söz aldı.', 'Hayır, gelmeyeceğim.', 'Arkadaşlar, toplanalım.'],
        sag: ['Eş görevli sözcükler', 'Sıralı cümleler', 'Anlam karışıklığı', 'Ara söz', 'Ret sözü', 'Hitap'],
        hint: 'Virgülü kaldır: iki sözcük tamlamaya mı dönüşüyor, iki yargı mı birleşiyor, yoksa bir söz açıklanıyor mu?',
        why: '“Küçük kedi” tamlaması sanılmasın diye virgül konmuş. “sınıf başkanımız” Ayşe’yi açıklayan ara söz; “Arkadaşlar” bir seslenme, yani hitap.',
        whyV: 'Küçük kedi tamlaması sanılmasın diye virgül konmuş. Sınıf başkanımız, Ayşe’yi açıklayan bir ara söz. Arkadaşlar ise bir seslenme, yani hitap.' } },
    { t: 'Virgül konmayan yerler',
      steps: [
        { s: 'Şimdi tuzak kısmına geldik. Bazı yerlere virgül koymak yanlıştır. Çok dikkat et.',
          h: '<div class="an-trap"><b>Virgül konmaz:</b><br>1. Tek zarf-fiilden sonra: Eve gelince<span class="an-bad-t">,</span> ödevini yaptı.<br>2. Şart ekinden sonra: Çalışırsan<span class="an-bad-t">,</span> kazanırsın.<br>3. “ve, veya, ya da” ve tekrarlı bağlaçların önüne, arkasına<br>4. İkilemelerin ve tamlamaların arasına: yavaş<span class="an-bad-t">,</span> yavaş</div>' },
        { s: 'Cümlede tek bir zarf-fiil varsa ondan sonra virgül konmaz. “Eve gelince ödevini yaptı.” Araya virgül girmez.', v: 'Cümlede tek bir zarf fiil varsa ondan sonra virgül konmaz. Eve gelince ödevini yaptı. Araya virgül girmez.' },
        { s: '-sa, -se şart ekinden sonra da virgül yoktur: “Düzenli çalışırsan kazanırsın.”', v: 'Sa, se şart ekinden sonra da virgül yoktur: Düzenli çalışırsan kazanırsın.' },
        { s: '“ve, veya, ya da” bağlaçlarının ve “hem… hem, ne… ne” gibi tekrarlı bağlaçların önüne virgül konmaz.', v: 'Ve, veya, ya da bağlaçlarının; hem hem, ne ne gibi tekrarlı bağlaçların önüne virgül konmaz.' },
        { s: 'İkilemelerin ve tamlamaların arasına da virgül girmez. “Yavaş yavaş” yazarız, araya virgül koymayız.', v: 'İkilemelerin ve tamlamaların arasına da virgül girmez. Yavaş yavaş yazarız, araya virgül koymayız.' }
      ] },

    { t: 'Yanlış virgülleri bul',
      steps: [{ s: 'Bu cümlede bazı virgüller yanlış yere konmuş. Yanlış olan virgüllerin hepsine dokun.' }],
      ia: { tip: 'gorselsec', q: '<p>Cümledeki <b>yanlış konmuş virgüllere</b> dokun.</p>',
        svg: '<svg class="an-svg" viewBox="0 0 340 104" role="group" aria-label="Ders bitince, Ali, Ayşe, ve ben yavaş, yavaş eve döndük.">' +
          '<text x="8" y="34" font-size="16">Ders bitince</text>' +
          '<g data-b="k1" aria-label="virgül"><rect x="116" y="8" width="34" height="40" rx="9" class="box"/><text x="133" y="36" text-anchor="middle" font-size="24" font-weight="700">,</text></g>' +
          '<text x="156" y="34" font-size="16">Ali</text>' +
          '<g data-b="k2" aria-label="virgül"><rect x="186" y="8" width="34" height="40" rx="9" class="box"/><text x="203" y="36" text-anchor="middle" font-size="24" font-weight="700">,</text></g>' +
          '<text x="226" y="34" font-size="16">Ayşe</text>' +
          '<g data-b="k3" aria-label="virgül"><rect x="268" y="8" width="34" height="40" rx="9" class="box"/><text x="285" y="36" text-anchor="middle" font-size="24" font-weight="700">,</text></g>' +
          '<text x="8" y="82" font-size="16">ve ben yavaş</text>' +
          '<g data-b="k4" aria-label="virgül"><rect x="124" y="56" width="34" height="40" rx="9" class="box"/><text x="141" y="84" text-anchor="middle" font-size="24" font-weight="700">,</text></g>' +
          '<text x="166" y="82" font-size="16">yavaş eve döndük.</text>' + '</svg>',
        dogru: ['k1', 'k3', 'k4'],
        hint: 'Tek zarf-fiilden sonra, “ve” bağlacının önünde ve ikilemenin arasında virgül olur mu?',
        hintV: 'Tek zarf fiilden sonra, ve bağlacının önünde ve ikilemenin arasında virgül olur mu?',
        why: '“bitince” tek zarf-fiil, “ve”nin önüne virgül konmaz, “yavaş yavaş” ikilemesi bölünmez. Yalnızca Ali ile Ayşe arasındaki virgül doğru: eş görevli sözcükler.',
        whyV: 'Bitince tek zarf fiil, ondan sonra virgül konmaz. Ve bağlacının önüne de virgül konmaz. Yavaş yavaş ikilemesi de bölünmez. Yalnızca Ali ile Ayşe arasındaki virgül doğru: eş görevli sözcükleri ayırıyor.' } },
    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdaki cümlelerin hangisinde virgül, <b>anlam karışıklığını önlemek</b> için kullanılmıştır?</p>',
        c: ['Evet, bu akşam size geleceğiz.', 'Genç, kadına yardım etmek için koştu.', 'Pazardan elma, armut ve kiraz aldık.', 'Hava karardı, sokak lambaları yandı.'], a: 'B',
        hint: 'Virgülü kaldırınca iki sözcük bir tamlamaya dönüşüp anlam değişiyor mu?',
        why: 'Virgül olmasa “genç kadın” tamlaması sanılırdı. Virgül, koşanın “genç” olduğunu gösteriyor. A’da onay sözünden sonra, C’de eş görevli sözcükler arasında, D’de sıralı cümleler arasında virgül var.',
        whyV: 'Virgül olmasa genç kadın tamlaması sanılırdı. Virgül, koşanın genç olduğunu gösteriyor. A’da onay sözünden sonra, C’de eş görevli sözcükler arasında, D’de ise sıralı cümleler arasında virgül var.' },
      steps: [{ s: 'Bu görev LGS’de soruldu. Virgülü kafanda kaldırıp cümleyi yeniden oku.', v: 'Bu görev LGS’de soruldu. Virgülü kafanda kaldırıp cümleyi yeniden oku.' }] },

    { t: 'Noktalı virgül',
      steps: [
        { s: 'Noktalı virgül, virgülün yetmediği yerde devreye girer. İlk görevi, içinde virgül olan farklı kümeleri ayırmak.',
          h: '<div class="an-ex"><span class="an-l">Pazardan elma, muz<span class="an-ek" style="font-size:1.3em">;</span> ıspanak, pırasa aldık.</span><span class="an-l"><small>meyveler ; sebzeler</small></span></div>' },
        { s: 'Elma ile muz meyve, ıspanak ile pırasa sebze. Kendi içlerinde virgül var, iki grubu birbirinden noktalı virgül ayırıyor.' },
        { s: 'İkinci görevi, ögeleri arasında virgül bulunan sıralı cümleleri ayırmak: “At ölür, meydan kalır; yiğit ölür, şan kalır.”',
          v: 'İkinci görevi, ögeleri arasında virgül bulunan sıralı cümleleri ayırmak: At ölür, meydan kalır; yiğit ölür, şan kalır.',
          h: '<div class="an-ex"><span class="an-l">At ölür, meydan kalır<span class="an-ek" style="font-size:1.3em">;</span> yiğit ölür, şan kalır.</span></div>' },
        { s: 'Buradan bir püf noktası çıkıyor: cümlede hiç virgül yoksa, noktalı virgül de genellikle yoktur.',
          h: '<div class="an-tip">Önce virgül görev yapar; virgülün yetmediği yerde noktalı virgül gelir.</div>' }
      ] },

    { t: 'İki nokta',
      steps: [
        { s: 'İki nokta, kendisinden sonra açıklama ya da örnek verilecek sözün sonuna konur.' },
        { s: 'Arkasından bağımsız bir cümle geliyorsa büyük harfle başlarız: “Dedemin tek öğüdü vardı: Dürüst ol.”',
          v: 'Arkasından bağımsız bir cümle geliyorsa büyük harfle başlarız: Dedemin tek öğüdü vardı, iki nokta, Dürüst ol.',
          h: '<table class="an-tbl"><tr class="rv k1"><td>Dedemin tek öğüdü vardı<b>:</b> <span class="an-w">D</span>ürüst ol.</td><td>cümle → <b>büyük harf</b></td></tr>' +
             '<tr class="rv k2"><td>Çantamda şunlar var<b>:</b> <span class="an-w">k</span>alem, defter, silgi.</td><td>örnekler → <b>küçük harf</b></td></tr></table>', on: '.k1' },
        { s: 'Cümle değil de örnekler sıralanıyorsa küçük harfle devam ederiz: “Çantamda şunlar var: kalem, defter, silgi.”',
          v: 'Cümle değil de örnekler sıralanıyorsa küçük harfle devam ederiz: Çantamda şunlar var, iki nokta, kalem, defter, silgi.', on: '.k2' },
        { s: '“şöyle dedi, şunu söyledi” gibi sözlerden sonra aktarılan konuşmanın önüne de iki nokta konur.', v: 'Şöyle dedi, şunu söyledi gibi sözlerden sonra aktarılan konuşmanın önüne de iki nokta konur.' }
      ] },

    { t: 'Hangi işaret gelmeli?',
      steps: [{ s: 'Her cümledeki kare boşluğa hangi işaret gelmeli? Cümleleri doğru kutuya yerleştir.' }],
      ia: { tip: 'grup', q: '<p>▢ yerine gelmesi gereken işarete göre cümleleri ayır.</p>',
        gruplar: ['Virgül ( , )', 'Noktalı virgül ( ; )', 'İki nokta ( : )'],
        ogeler: [{ m: 'Güneş doğdu▢ kuşlar öttü.', g: 0 }, { m: 'Evet▢ geliyorum.', g: 0 }, { m: 'Elma, armut▢ pırasa, ıspanak aldık.', g: 1 },
          { m: 'Kızlar, erkekler▢ öğretmenler, veliler geldi.', g: 1 }, { m: 'Tek isteği vardı▢ Başarmak.', g: 2 }, { m: 'Şunları al▢ süt, ekmek, peynir.', g: 2 }],
        hint: 'İçinde virgül olan kümeler mi ayrılıyor? Arkasından açıklama ya da örnek mi geliyor? Yoksa basit bir sıralama mı?',
        why: 'Virgül sıralı cümleyi ve onay sözünü ayırır. İçinde virgül olan kümeleri noktalı virgül ayırır. Açıklama (Başarmak) ve örnek listesi (süt, ekmek) öncesinde iki nokta.',
        whyV: 'Virgül sıralı cümleleri ve evet gibi onay sözlerini ayırır. İçinde virgül olan kümeleri noktalı virgül ayırır. Açıklamadan ya da örnek listesinden önce ise iki nokta gelir.' } },
    { t: 'Ara soru', cp: {
        q: '<p>Dedemin bir öğüdü vardı<b>&nbsp;(I)</b> Dürüst ol<b>&nbsp;(II)</b> gerisi kendiliğinden gelir. Ben de bu sözü defterime<b>&nbsp;(III)</b> hem de büyük harflerle<b>&nbsp;(IV)</b> yazdım.</p><p>Numaralı yerlere sırasıyla hangi işaretler getirilmelidir?</p>',
        c: ['( : ) ( , ) ( , ) ( , )', '( ; ) ( , ) ( : ) ( , )', '( , ) ( ; ) ( , ) ( . )', '( : ) ( ; ) ( , ) ( ! )'], a: 'A',
        hint: 'I’den sonra büyük harfle başlayan bir cümle geliyor. II iki yargıyı ayırıyor, ama içinde virgül yok. III ile IV bir ara sözü çevreliyor.',
        hintV: 'Birinci boşluktan sonra büyük harfle başlayan bir cümle geliyor. İkinci boşluk iki yargıyı ayırıyor, ama içinde virgül yok. Üçüncü ve dördüncü boşluklar ise bir ara sözü çevreliyor.',
        why: 'I: öğüt açıklanıyor, iki nokta. II: sıralı iki yargı, virgül yeter. III ve IV: “hem de büyük harflerle” bir ara söz, iki virgül arasına alınır.',
        whyV: 'Birinci boşlukta öğüt açıklanıyor, iki nokta gelir. İkincide sıralı iki yargı var, virgül yeter. Üçüncü ve dördüncü boşluklarda ise hem de büyük harflerle sözü bir ara söz; iki virgül arasına alınır.' },
      steps: [{ s: 'Şimdi LGS’nin sevdiği boşluk doldurma kalıbı. Her boşluğun sağına ve soluna bak.', v: 'Şimdi sınavın çok sevdiği boşluk doldurma kalıbı. Her boşluğun sağına ve soluna bak.' }] },

    { t: 'Üç nokta',
      base: '<table class="an-tbl"><tr><th>Görev</th><th>Örnek</th></tr>' +
        '<tr class="rv u1"><td>Eksiltili cümle</td><td>Tam kapıdan çıkıyordum ki…</td></tr>' +
        '<tr class="rv u2"><td>Örneklerin sürdüğü yer</td><td>Manavdan elma, armut, muz… aldık.</td></tr>' +
        '<tr class="rv u3"><td>Söylenmek istenmeyen söz</td><td>Kılavuzu karga olanın burnu b…tan çıkmaz.</td></tr></table>',
      steps: [
        { s: 'Üç nokta LGS’de iki kez sorunun anahtarı oldu. Üç görevini bilmen yeterli.', v: 'Üç nokta LGS’de iki kez sorunun anahtarı oldu. Üç görevini bilmen yeterli.' },
        { s: 'Birincisi, tamamlanmamış yani eksiltili cümlelerin sonuna konur. Söz yarıda kalır, gerisini okur düşünür.', on: '.u1' },
        { s: 'İkincisi, sayılabilecek örneklerin devam ettiğini gösterir. LGS’de iki soruda da tam olarak bu görev soruldu!', v: 'İkincisi, sayılabilecek örneklerin devam ettiğini gösterir. LGS’de iki soruda da tam olarak bu görev soruldu!', on: '.u2' },
        { s: 'Üçüncüsü, kaba sayılan ya da açıkça yazılmak istenmeyen sözlerin yerine konur.', on: '.u3' },
        { s: 'Unutma: üç nokta yerine iki ya da dört nokta kullanılmaz.' }
      ] },

    { t: 'Soru işareti ve ünlem',
      steps: [
        { s: 'Soru işareti soru bildiren cümlenin sonuna konur. Ama dikkat: soru sözcüğü var diye her cümle soru değildir.',
          h: '<div class="an-trap">Neden gelmediğini bilmiyorum<b>.</b> → soru sormuyor, nokta konur.</div>' },
        { s: '“Neden gelmediğini bilmiyorum.” cümlesinde “neden” var ama kimseye soru sormuyoruz. Sonuna nokta gelir.', v: 'Neden gelmediğini bilmiyorum cümlesinde neden sözcüğü var ama kimseye soru sormuyoruz. Sonuna nokta gelir.' },
        { s: 'Ünlem ise sevinç, korku, şaşkınlık gibi duyguları ve seslenmeleri bildiren cümlelerin sonuna konur: “Eyvah, geç kaldık!”', v: 'Ünlem ise sevinç, korku, şaşkınlık gibi duyguları ve seslenmeleri bildiren cümlelerin sonuna konur: Eyvah, geç kaldık!' },
        { s: 'İkisinin yay ayraç içindeki kullanımı da önemli. Ayraç içindeki soru işareti şüphe, ünlem ise alay bildirir.',
          v: 'İkisinin yay ayraç içindeki kullanımı da önemli. Ayraç içindeki soru işareti şüphe, ünlem ise alay bildirir.',
          h: '<div class="an-ex"><span class="an-l">Yunus Emre 1240 (?) yılında doğdu. → bilgi kesin değil</span><span class="an-l">Çok çalışkanmış (!) hiç test çözmüyor. → alay</span></div>' }
      ] },

    { t: 'Soru işareti mi, nokta mı?',
      steps: [{ s: 'Bu cümlelerin bazısında soru sözcüğü var ama soru sormuyorlar. Sonuna soru işareti gelmeyenleri ele.' }],
      ia: { tip: 'eleme', q: '<p>Sonuna <b>soru işareti konmayacak</b> cümleleri ele.</p>',
        ogeler: ['Neden geldiğini bilmiyorum', 'Yarın bize gelecek misin', 'Kimin aradığını sordu', 'Bu kitabı kim yazdı', 'Ne zaman döneceğini merak ediyorum', 'Saat kaç oldu'],
        ele: [0, 2, 4],
        hint: 'Soru sözcüğü var diye karar verme. Cümle birinden cevap bekliyor mu, yoksa bir durumu mu bildiriyor?',
        why: '“bilmiyorum, sordu, merak ediyorum” yüklemleri bir durum bildiriyor; soru sözcüğü yan cümlede kalıyor. Sonlarına nokta gelir.',
        whyV: 'Bilmiyorum, sordu ve merak ediyorum yüklemleri bir durum bildiriyor; soru sözcüğü yan cümlede kalıyor. Bu cümlelerin sonuna nokta gelir.' } },
    { t: 'Tırnak, kesme ve çizgiler',
      steps: [
        { s: 'Tırnak işareti, başkasından aynen aktarılan sözleri ve eser adlarını gösterir.',
          h: '<div class="an-ex"><span class="an-l">Atatürk, “Bilim en gerçek yol göstericidir.” demiştir.</span></div>' },
        { s: 'Şimdi LGS’de çıkmış bir tuzak: tırnaktan sonra gelen ek kesme işaretiyle ayrılmaz.', v: 'Şimdi LGS’de çıkmış bir tuzak: tırnaktan sonra gelen ek, kesme işaretiyle ayrılmaz.',
          h: '<div class="an-trap">“Nutuk”<span class="an-ok-t">u</span> okudum. ✓ · “Nutuk”<span class="an-bad-t">’u</span> ✗ · “Safahat”<span class="an-ok-t">ta</span> ✓</div>' },
        { s: 'Kesme işareti ise özel adlara gelen ekleri ayırır: Ankara’ya, Ali’nin. Ama kurum adlarında kullanılmaz: Türk Dil Kurumuna.', v: 'Kesme işareti ise özel adlara gelen ekleri ayırır: Ankara’ya, Ali’nin. Ama kurum adlarında kullanılmaz: Türk Dil Kurumuna.' },
        { s: 'Kısa çizgi “arasında” anlamı katar, uzun çizgi ise satır başındaki konuşmayı gösterir.', v: 'Kısa çizgi, arasında anlamı katar; uzun çizgi ise satır başındaki konuşmayı gösterir.',
          h: '<div class="an-tip">Ankara<b>-</b>İstanbul treni · 1914<b>-</b>1918 yılları · <b>—</b> Nereye gidiyorsun?</div>' }
      ] },

    { t: 'Kesmeli mi, kesmesiz mi?',
      steps: [{ s: 'Her boşluğa doğru eki yerleştir. Kesme işaretine ve tırnağa dikkat!' }],
      ia: { tip: 'bosluk', q: '<p>Ekleri <b>kesme işareti kuralına</b> uygun biçimde yerleştir.</p>',
        metin: '“Nutuk”[_] bir solukta okudum.<br>Yarın Ankara[_] gidiyoruz.<br>Türk Dil Kurumu[_] mektup yazdık.',
        secenek: ['u', '’u', '’ya', 'ya', 'na', '’na'], cevap: ['u', '’ya', 'na'],
        hint: 'Tırnaktan sonra gelen ek nasıl yazılır? Kesme hangi özel adlarda kullanılmaz?',
        why: 'Tırnaktan sonra gelen ek kesmesiz yazılır: “Nutuk”u. Yer adına gelen ek kesmeyle ayrılır: Ankara’ya. Kurum adına gelen ek kesmesiz: Türk Dil Kurumuna.',
        whyV: 'Tırnaktan sonra gelen ek kesmesiz yazılır. Yer adına gelen ek kesmeyle ayrılır: Ankara’ya. Kurum adına gelen ek ise kesmesiz yazılır: Türk Dil Kurumuna.' } },
    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdaki cümlelerin hangisinde üç nokta, <b>sayılabilecek örneklerin sürdüğünü</b> göstermek için kullanılmıştır?</p>',
        c: ['Tam kapıdan çıkıyordum ki…', 'Bahçede gül, lale, menekşe… her çiçek vardı.', 'Kılavuzu karga olanın burnu b…tan çıkmaz.', 'Karşıda yemyeşil bir orman…'], a: 'B',
        hint: 'Üç noktadan önce aynı türden sözcükler sıralanmış mı?',
        why: 'Gül, lale, menekşe sayılmış ve liste devam edebilir; üç nokta bunu gösteriyor. A ve D eksiltili cümle, C’de söylenmek istenmeyen söz var.',
        whyV: 'Gül, lale, menekşe sayılmış ve liste devam edebilir; üç nokta bunu gösteriyor. A ve D eksiltili cümle. C’de ise söylenmek istenmeyen bir söz var.' },
      steps: [{ s: 'Son soru, LGS’de iki kez çıkan görevden. Kolay gelsin!', v: 'Son soru, LGS’de iki kez çıkan görevden. Kolay gelsin!' }] }
  ]
};
