/* Adım Adım Anlatım · İngilizce · 2. Ünite Teen Life (biçim: tools/ANLATIM.md)
   Altyazıdaki [[...]] İngilizce bölümdür → <i lang="en">…</i>; tools/anlatim_ses.py İngilizce sesle okur. */
(function () {
  var L = {
  title: 'Teen Life: Beğeniler, Tercihler ve Rutinler',
  desc: 'Sevme–sevmeme ölçeği, -ing kuralı, prefer…to ve would rather…than, olumlu–olumsuz görüş sıfatları, sıklık zarfları ve LGS’nin koşullu seçim soruları.',
  ozet: [
    'Sevme ölçeği: be crazy about / love › be keen on / be fond of / be interested in / enjoy / like › <b>don’t mind</b> (fark etmez) › not keen on / dislike › <b>can’t stand</b> / hate.',
    'Bu kalıplardan sonra fiil <b>-ing</b> alır: I’m keen on playing chess. I can’t stand waiting.',
    '<b>prefer</b> A <b>to</b> B (V-ing / isim) · <b>would rather</b> A <b>than</b> B (yalın fiil). İlk söylenen tercih edilendir.',
    'Olumlu: terrific, awesome, fantastic, impressive, exciting. Olumsuz: terrible, awful, unbearable, ridiculous, boring, noisy. <b>terrific</b> = harika (terrible değil!).',
    'Sıklık: always › usually › often › sometimes › rarely = seldom = hardly ever › never. once/twice/three times a week; on weekdays (5 gün), at weekends (2 gün).',
    'Koşullu seçim sorularında her koşulu (gün, saat, ücret, ilgi) tek tek ✓/✗ ile işaretle.'
  ],
  scenes: [
    { t: 'Teen Life ünitesinde neler var?',
      base: '<div class="an-grid"><div class="rv g1"><b>Beğeniler</b>love, can’t stand, prefer…</div><div class="rv g2"><b>Görüş sıfatları</b>terrific, unbearable…</div><div class="rv g3"><b>Rutin ve sıklık</b>always, twice a week…</div></div>',
      steps: [
        { s: 'İkinci ünitemiz [[Teen Life]], yani gençlerin hayatı. Müzik, kitap, hobiler ve günlük rutinler.' },
        { s: 'LGS burada en çok şunu sorar: kim neyi seviyor, neye katlanamıyor, neyi neye tercih ediyor?', on: '.g1' },
        { s: 'Sonra bir etkinlik hakkındaki görüşü sıfatlardan anlamayı öğreneceğiz.', on: '.g2' },
        { s: 'En son da sıklık zarfları. Hadi başlayalım.', on: '.g3' }
      ] },

    { t: 'Sevme ölçeği',
      base: '<svg class="an-svg" viewBox="0 0 340 236" role="img" aria-label="Çok sevmekten nefret etmeye beğeni ölçeği">' +
        '<path class="st dr a0" d="M20 14 L20 222"/>' +
        '<text x="34" y="30" font-size="13" font-weight="700" class="acc rv a1">😍 love · be crazy about · adore</text>' +
        '<text x="34" y="72" font-size="13" font-weight="700" class="rv a2">🙂 like · enjoy · be keen on</text>' +
        '<text x="54" y="90" font-size="12" class="mut rv a2">be fond of · be interested in</text>' +
        '<text x="34" y="132" font-size="13" font-weight="700" class="rv a3">😐 don’t mind (fark etmez)</text>' +
        '<text x="34" y="172" font-size="13" font-weight="700" class="rv a4">🙁 dislike · not keen on · not into</text>' +
        '<text x="34" y="214" font-size="13" font-weight="700" class="rv a5">😖 hate · can’t stand · detest</text></svg>',
      steps: [
        { s: 'Beğenileri bir ölçek gibi düşün. En üstte çok sevmek var: [[I love it]], [[I’m crazy about it]].', on: '.a0,.a1' },
        { s: 'Bir alt basamak sevmek ve ilgi duymak: [[like]], [[enjoy]], [[be keen on]], [[be fond of]], [[be interested in]].', on: '.a2' },
        { s: 'Ortada [[I don’t mind]] var. Bu “sevmiyorum” demek değil, “bana fark etmez, olur” demek.', on: '.a3', mk: '.a3' },
        { s: 'Aşağıda sevmemek: [[dislike]], [[I’m not keen on it]], [[I’m not into it]].', on: '.a4' },
        { s: 'En altta nefret: [[hate]] ve [[I can’t stand it]]. Yani “hiç dayanamam”.', on: '.a5' }
      ] },

    { t: 'Sevme ölçeğini kur',
      steps: [{ s: 'Beş cümleyi ölçeğe yerleştir. En çok sevenden hiç dayanamayana doğru sırayla dokun.' }],
      ia: { tip: 'sirala', q: '<p>Cümleleri <b>en çok sevenden</b> <b>hiç sevmeyene</b> doğru sırala.</p>', ust: 'en çok sever', alt: 'hiç dayanamaz',
        ogeler: ['I’m crazy about it.', 'I’m keen on it.', 'I don’t mind it.', 'I’m not into it.', 'I can’t stand it.'],
        hint: '[[I don’t mind]] tam ortadadır: “fark etmez, olur” demek. [[Can’t stand]] ise en alttaki nefret.',
        why: 'En üstte [[crazy about]], sonra [[keen on]]. Ortada nötr [[don’t mind]]. Altta [[not into]], en altta da [[can’t stand]].' } },

    { t: 'Kural: arkasından -ing',
      steps: [
        { s: 'Bu ifadelerden sonra bir eylem geliyorsa fiil ing takısı alır.',
          h: '<div class="an-rule"><b>love · enjoy · don’t mind · can’t stand · be keen on · be fond of · be interested in</b> + <b>fiil-ing</b></div>' },
        { s: 'Mesela [[I’m keen on playing chess.]] Satranç oynamaya çok meraklıyım.',
          h: '<div class="an-ex"><span class="an-l">I’m keen on <span class="an-w">playing</span> chess.</span><span class="an-l">She enjoys <span class="an-w">reading</span> detective stories.</span><span class="an-l">I can’t stand <span class="an-w">waiting</span> in a queue.</span></div>' },
        { s: 'Ya da [[I can’t stand waiting in a queue.]] Kuyrukta beklemeye hiç dayanamam.' },
        { s: 'Bir dikkat noktası daha: biri bir şeyi sevmese de etkinliğe katılabilir. Sevmek ile katılmak aynı şey değil.',
          h: '<div class="an-trap">“I’m not into jazz, <b>but I’ll come</b> with you.” → caz sevmiyor ama <b>geliyor</b>. Soru “kim katılıyor?” ise bu kişi de katılır!</div>' },
        { s: '[[I’m not into jazz, but I’ll come with you.]] Cazı sevmiyor ama yine de geliyor. LGS bu farkı sordu.' }
      ] },

    { t: 'Fiil ing takısı alır',
      steps: [{ s: 'Sevme ve sevmeme ifadelerinden sonra fiil ne olur? Üç boşluğu doğru kartlarla doldur.' }],
      ia: { tip: 'bosluk', q: '<p>Cümleleri tamamla.</p>',
        metin: 'Ali is fond of [_] photos.<br>I don’t mind [_] the dishes.<br>We really enjoy [_] to rap music.',
        secenek: ['taking', 'take', 'to take', 'doing', 'do', 'listening', 'listen', 'to listen'], cevap: ['taking', 'doing', 'listening'],
        hint: '[[Be fond of]], [[don’t mind]] ve [[enjoy]] aynı kurala uyar. Arkalarından gelen fiil hangi takıyı alıyordu?',
        why: 'Üçünde de fiil ing takısı alır: [[fond of taking]], [[don’t mind doing]], [[enjoy listening]]. Yalın fiil ya da [[to]] burada yanlış.' } },

    { t: 'Tercih: prefer ve would rather',
      base: '<table class="an-tbl"><tr><th>Yapı</th><th>Örnek</th></tr>' +
        '<tr class="rv p1"><td><b>prefer</b> A <b>to</b> B<br><small>fiil-ing / isim</small></td><td>I prefer <span class="an-w">reading</span> to <span class="an-w">watching</span> films.</td></tr>' +
        '<tr class="rv p2"><td><b>would rather</b> A <b>than</b> B<br><small>yalın fiil</small></td><td>I’d rather <span class="an-w">stay</span> at home than <span class="an-w">go</span> out.</td></tr></table>',
      steps: [
        { s: 'Şimdi iki şeyden birini seçmeye geldik. İlk kalıp: [[I prefer reading to watching films.]]', on: '.p1' },
        { s: '[[Prefer]] ile birlikte [[to]] kullanılır ve fiiller ing takısı alır. Ya da direkt isim gelir: [[She prefers pop to jazz.]]' },
        { s: 'İkinci kalıp: [[I’d rather stay at home than go out.]] Dışarı çıkmaktansa evde kalmayı tercih ederim.', on: '.p2' },
        { s: '[[Would rather]] ile [[than]] kullanılır ve fiiller yalın kalır. [[Stay]] ve [[go]] yalın.' },
        { s: 'Ve en önemli tuzak: iki kalıpta da ilk söylenen şey sevilen, sonra söylenen ise tercih edilmeyendir.',
          h: '<div class="an-trap"><span class="an-ok-t">İLK söylenen</span> = tercih edilen &nbsp;·&nbsp; <b>to / than’dan sonraki</b> = tercih edilmeyen</div>' }
      ] },

    { t: 'Kim neyi tercih ediyor?',
      steps: [{ s: 'Her yorum doğru mu, yanlış mı? Hatırla: iki kalıpta da önce söylenen, tercih edilendir.' }],
      ia: { tip: 'dogruyanlis', q: '<p>Cümle ile yorumu uyuşuyor mu?</p>', ifadeler: [
          { m: '“I prefer tea to coffee.” → Kahveyi daha çok seviyor.', d: false, a: 'İlk söylenen tea: çayı tercih ediyor.' },
          { m: '“I’d rather walk than take a bus.” → Yürümeyi tercih ediyor.', d: true, a: 'would rather + yalın fiil: önce walk.' },
          { m: '“I prefer read to watch.” doğru kurulmuş bir cümle.', d: false, a: 'prefer + V-ing: reading to watching.' },
          { m: '“We’d rather stay home than go out.” → Dışarı çıkmak istemiyorlar.', d: true, a: 'Evde kalmayı dışarı çıkmaya tercih ediyorlar.' }],
        hint: '[[Prefer]] ile [[to]], [[would rather]] ile [[than]] gelir. Hangi kalıpta fiil ing alıyordu, hangisinde yalın kalıyordu?',
        why: 'İlk söylenen hep tercih edilendir: çay ve yürümek. [[Prefer]] fiile ing ister, [[would rather]] ise yalın fiil ister.' } },

    { t: 'Ara soru', cp: {
        q: '<p>Which student <b>prefers reading to watching TV</b>?</p>',
        c: ['Arda: I’d rather watch a film than read a novel.', 'Bora: I prefer watching TV to reading books.', 'Ceren: I would rather read a book than watch TV.', 'Duru: I can’t stand reading; TV is more fun.'], a: 'C',
        hint: 'Her cümlede ilk söylenen etkinliğe bak. Okumayı ilk sırada söyleyen kim?',
        why: 'Ceren [[I would rather read a book than watch TV]] diyor; ilk söylenen okumak, yani okumayı tercih ediyor. Arda ve Bora televizyonu, Duru da televizyonu seçiyor.' },
      steps: [{ s: 'Şimdi sıra sende. İlk söylenen kuralını hatırla.' }] },

    { t: 'Görüş sıfatları',
      base: '<table class="an-tbl"><tr><th>👍 Olumlu</th><th>👎 Olumsuz</th></tr>' +
        '<tr class="rv o1"><td>terrific · awesome · fantastic</td><td>terrible · awful · horrible</td></tr>' +
        '<tr class="rv o2"><td>impressive · fascinating</td><td>unbearable</td></tr>' +
        '<tr class="rv o3"><td>exciting · thrilling</td><td>ridiculous · absurd</td></tr>' +
        '<tr class="rv o4"><td>relaxing · energetic</td><td>boring · dull · noisy · tiring</td></tr></table>',
      steps: [
        { s: 'LGS çoğu zaman “bu kişi etkinliğe gider mi” diye sorar. Cevabı, kişinin kullandığı sıfat verir.' },
        { s: 'Harika anlamında: [[terrific]], [[awesome]], [[fantastic]]. Berbat anlamında: [[terrible]], [[awful]], [[horrible]].', on: '.o1' },
        { s: 'Etkileyici: [[impressive]], [[fascinating]]. Katlanılmaz: [[unbearable]].', on: '.o2' },
        { s: 'Heyecan verici: [[exciting]], [[thrilling]]. Saçma, gülünç: [[ridiculous]].', on: '.o3' },
        { s: 'Rahatlatıcı: [[relaxing]]. Sıkıcı, gürültülü, yorucu: [[boring]], [[noisy]], [[tiring]].', on: '.o4' }
      ] },

    { t: 'Tuzak: terrific ≠ terrible',
      steps: [
        { s: 'Burada çok dikkat et. [[Terrific]] ile [[terrible]] neredeyse aynı yazılıyor ama anlamları tam zıt.',
          h: '<div class="an-trap"><b>terrific</b> = harika, muhteşem 👍 &nbsp;·&nbsp; <b>terrible</b> = berbat 👎</div>' },
        { s: '[[The concert was terrific!]] Konser muhteşemdi demek. Korkunç değil!' },
        { s: 'Bir de [[unbearable]] kelimesi, [[I can’t stand it]] ile aynı anlama gelir: katlanılmaz.',
          h: '<div class="an-tip"><b>unbearable</b> = I can’t stand it &nbsp;·&nbsp; <b>ridiculous</b> = silly, nonsense</div>' }
      ] },

    { t: 'Beğendi mi, beğenmedi mi?',
      steps: [{ s: 'On sıfatı iki kutuya ayır: etkinliği beğenen biri mi söyler, beğenmeyen biri mi? Benzer yazılışlara dikkat!' }],
      ia: { tip: 'grup', q: '<p>Sıfatları anlamına göre yerleştir.</p>', gruplar: ['Beğendi 👍', 'Beğenmedi 👎'],
        ogeler: [{ m: 'terrific', g: 0 }, { m: 'terrible', g: 1 }, { m: 'awesome', g: 0 }, { m: 'awful', g: 1 }, { m: 'impressive', g: 0 },
          { m: 'unbearable', g: 1 }, { m: 'thrilling', g: 0 }, { m: 'ridiculous', g: 1 }, { m: 'relaxing', g: 0 }, { m: 'dull', g: 1 }],
        hint: '[[Terrific]] ile [[terrible]], [[awesome]] ile [[awful]] birbirine benzer ama zıt anlamlıdır. [[Dull]] ise sıkıcı demek.',
        why: 'Beğenen: [[terrific]], [[awesome]], [[impressive]], [[thrilling]], [[relaxing]]. Beğenmeyen: [[terrible]], [[awful]], [[unbearable]], [[ridiculous]], [[dull]].' } },

    { t: 'Ara soru', cp: {
        q: '<p>Four friends talk about the rock concert last night.</p><p><b>Mert:</b> It was terrific! &nbsp;<b>Ada:</b> The music was so loud, it was unbearable. &nbsp;<b>Can:</b> I found it a bit dull. &nbsp;<b>Ece:</b> What a fantastic show! I want to go again.</p><p>Who <b>enjoyed</b> the concert?</p>',
        c: ['Mert and Ece', 'Ada and Can', 'Mert and Can', 'Ada and Ece'], a: 'A',
        hint: '[[Terrific]] kelimesini [[terrible]] ile karıştırma. Hangi iki kişi olumlu sıfat kullanıyor?',
        why: 'Mert [[terrific]], yani harika diyor; Ece de [[fantastic]] diyor ve tekrar gitmek istiyor. Ada katlanılmaz, Can sıkıcı buldu.' },
      steps: [{ s: 'Sıfatlara bak ve karar ver.' }] },

    { t: 'Sıklık zarfları',
      base: '<svg class="an-svg" viewBox="0 0 340 170" role="img" aria-label="Sıklık zarfları yüzde ölçeği">' +
        '<rect x="96" y="8" width="230" height="18" rx="4" class="boxa rv f1"/><text x="8" y="22" font-size="13" font-weight="700" class="rv f1">always</text><text x="300" y="22" font-size="11" class="rv f1">%100</text>' +
        '<rect x="96" y="34" width="196" height="18" rx="4" class="box rv f2"/><text x="8" y="48" font-size="13" font-weight="700" class="rv f2">usually</text>' +
        '<rect x="96" y="60" width="161" height="18" rx="4" class="box rv f2"/><text x="8" y="74" font-size="13" font-weight="700" class="rv f2">often</text>' +
        '<rect x="96" y="86" width="115" height="18" rx="4" class="box rv f3"/><text x="8" y="100" font-size="13" font-weight="700" class="rv f3">sometimes</text>' +
        '<rect x="96" y="112" width="23" height="18" rx="4" class="box rv f4"/><text x="8" y="126" font-size="13" font-weight="700" class="rv f4">rarely</text><text x="128" y="126" font-size="11" class="mut rv f4">= seldom = hardly ever</text>' +
        '<text x="8" y="152" font-size="13" font-weight="700" class="rv f5">never</text><text x="100" y="152" font-size="11" class="mut rv f5">%0</text></svg>',
      steps: [
        { s: 'Rutinleri anlatırken ne sıklıkla yaptığımızı söyleriz. En üstte [[always]], yani her zaman.', on: '.f1' },
        { s: 'Sonra [[usually]], genellikle; ve [[often]], sık sık.', on: '.f2' },
        { s: 'Ortada [[sometimes]], yani bazen.', on: '.f3' },
        { s: 'Çok nadiren için üç kelime var: [[rarely]], [[seldom]] ve [[hardly ever]]. Üçü de aynı anlamda.', on: '.f4', mk: '.f4' },
        { s: 'En altta [[never]], hiçbir zaman.', on: '.f5' }
      ] },

    { t: '“Çok nadiren” hangileri?',
      steps: [{ s: 'Altı sıklık zarfı var. “Çok nadiren” anlamına gelmeyenleri ele; geriye aynı anlamdaki üç zarf kalsın.' }],
      ia: { tip: 'eleme', q: '<p>“Çok nadiren” anlamına <b>gelmeyenleri</b> ele.</p>',
        ogeler: ['rarely', 'often', 'hardly ever', 'sometimes', 'seldom', 'never'], ele: [1, 3, 5],
        hint: '[[Hardly ever]] içinde [[ever]] var diye “her zaman” sanma. [[Never]] ise hiç yapılmayan iş için kullanılır.',
        why: '[[Rarely]], [[seldom]] ve [[hardly ever]] aynı anlamda: çok nadiren. [[Often]] sık sık, [[sometimes]] bazen, [[never]] hiçbir zaman.' } },

    { t: 'How often? Kaç kez?',
      steps: [
        { s: 'Sıklığı soran soru [[How often]]. Cevapları da şöyle olur:',
          h: '<div class="an-ex"><span class="an-l"><b>once</b> a day · <b>twice</b> a week · <b>three times</b> a month</span><span class="an-l"><b>on weekdays</b> = Pazartesi–Cuma (5 gün)</span><span class="an-l"><b>at weekends</b> = Cumartesi–Pazar (2 gün)</span></div>' },
        { s: '[[once a day]], günde bir kez. [[twice a week]], haftada iki kez. [[three times a month]], ayda üç kez.' },
        { s: 'Hesap sorularında şunu unutma: [[on weekdays]] haftada beş gün, [[at weekends]] ise iki gün demek.' },
        { s: 'Zarfın yeri de basit: ana fiilden önce, ama [[am, is, are]] fiillerinden sonra gelir.',
          h: '<div class="an-rule">She <b>usually</b> listens to pop. · He <b>is</b> <b>never</b> late.</div>' }
      ] },

    { t: 'Haftada kaç kez?',
      steps: [{ s: 'Küçük bir hesap. Can’ın haftada kaç kez spor yaptığını bul ve kaydırıcıyla işaretle.' }],
      ia: { tip: 'kaydir', q: '<p><b>Can:</b> I play football <b>twice a week</b>, and I go swimming <b>on weekdays</b>.</p><p>How many times does Can do sports in a week?</p>',
        min: 0, max: 14, adim: 1, cevap: 7, tol: 0, etiket: [0, 2, 4, 6, 8, 10, 12, 14],
        hint: '[[Twice a week]] haftada iki kez. [[On weekdays]] ise haftanın kaç günü demekti? İkisini topla.',
        why: 'Futbol haftada iki kez, yüzme hafta içi her gün, yani beş kez. İki artı beş, haftada yedi kez.' } },

    { t: 'Teen Life kelimeleri',
      base: '<div class="an-grid"><div class="rv w1"><b>Books</b>detective · biography · sci-fi · fantasy</div><div class="rv w2"><b>Music</b>classical · folk · rap · rock · jazz</div><div class="rv w3"><b>Camping</b>pitch a tent · sleeping bag · torch</div></div>',
      steps: [
        { s: 'Kitap türleri: [[detective]] polisiye, [[biography]] hayat hikâyesi, [[science fiction]] bilim kurgu, [[fantasy]] fantastik.', on: '.w1' },
        { s: 'Müzik türleri: [[classical]], [[folk]] yani halk müziği, [[rap]], [[rock]] ve [[jazz]].', on: '.w2' },
        { s: 'Kamp kelimeleri: [[pitch a tent]] çadır kurmak, [[sleeping bag]] uyku tulumu, [[torch]] el feneri.', on: '.w3' },
        { s: 'Ve iki sıfat: [[snob]] burnu havada, [[nerd]] ise sadece ders çalışan, biraz asosyal kişi.' }
      ] },

    { t: 'Kelimeyi anlamıyla eşleştir',
      steps: [{ s: 'Teen Life kelimelerini Türkçe anlamlarıyla eşleştir. Önce kelimeye, sonra anlamına dokun.' }],
      ia: { tip: 'eslestir', q: '<p>Her kelimeyi anlamıyla eşleştir.</p>', solBaslik: 'Kelime', sagBaslik: 'Anlam',
        sol: ['detective', 'biography', 'folk', 'pitch a tent', 'torch', 'nerd'],
        sag: ['polisiye', 'hayat hikâyesi', 'halk müziği', 'çadır kurmak', 'el feneri', 'hep ders çalışan'],
        hint: '[[Torch]] meşale gibi görünür ama bu ünitede kampta kullanılan bir alet. [[Folk]] ise bir müzik türü.',
        why: '[[Detective]] polisiye, [[biography]] hayat hikâyesi, [[folk]] halk müziği, [[pitch a tent]] çadır kurmak, [[torch]] el feneri, [[nerd]] hep ders çalışan kişi.' } },

    { t: 'Ara soru', cp: {
        q: '<p>Deniz wants to join a club. It must meet <b>at weekends</b>, it must be <b>free</b>, and it must be about <b>books</b>.</p>' +
           '<table class="an-tbl"><tr><th>Club</th><th>Day</th><th>Fee</th></tr><tr><td>A) Chess Club</td><td>Saturday</td><td>free</td></tr><tr><td>B) Book Lovers</td><td>Sunday</td><td>50 TL</td></tr><tr><td>C) Story Time</td><td>Saturday</td><td>free</td></tr><tr><td>D) Readers’ Corner</td><td>Wednesday</td><td>free</td></tr></table>' +
           '<p>Which club should Deniz join? (Story Time, Book Lovers and Readers’ Corner are book clubs.)</p>',
        c: ['Chess Club', 'Book Lovers', 'Story Time', 'Readers’ Corner'], a: 'C',
        hint: 'Üç koşulu tek tek kontrol et: hafta sonu mu, ücretsiz mi, kitapla mı ilgili?',
        why: 'Satranç kulübü kitapla ilgili değil. [[Book Lovers]] ücretli. [[Readers’ Corner]] çarşamba, yani hafta içi. Üç koşulu da sağlayan tek kulüp [[Story Time]].' },
      steps: [{ s: 'Bu, LGS’nin en sevdiği soru tipi: koşullu seçim. Her koşulu tek tek işaretle.' }] },

    { t: 'Akılda kalsın',
      steps: [
        { s: 'Toparlayalım. Sevme ölçeğinde [[don’t mind]] nötrdür, [[can’t stand]] nefrettir. Arkalarından fiil ing alır.' },
        { s: '[[Prefer]] ile [[to]], [[would rather]] ile [[than]] gelir. İlk söylenen hep tercih edilendir.' },
        { s: '[[Terrific]] harikadır, [[terrible]] berbattır. [[Hardly ever]] de “çok nadiren” demek.' },
        { s: 'Koşullu seçim sorularında acele etme, her koşulu tek tek kontrol et. Harika gidiyorsun!' }
      ] }
  ]
  };
  var en = function (t) { return typeof t === 'string' ? t.replace(/\[\[(.+?)\]\]/g, '<i lang="en">$1</i>') : t; };
  L.scenes.forEach(function (sc) {
    (sc.steps || []).forEach(function (st) { st.s = en(st.s); });
    if (sc.cp) { sc.cp.why = en(sc.cp.why); sc.cp.hint = en(sc.cp.hint); }
    if (sc.ia) { sc.ia.q = en(sc.ia.q); sc.ia.why = en(sc.ia.why); sc.ia.hint = en(sc.ia.hint); }
  });
  // son “Akılda kalsın” sahnesi: özet maddeleri adım adım belirir
  var last = L.scenes[L.scenes.length - 1];
  if (last && !last.base && !last.cp) {
    var ns = last.steps.length;
    last.base = '<div class="an-ex">' + L.ozet.map(function (o, i) { return '<span class="an-l rv oz' + Math.floor(i * ns / L.ozet.length) + '">' + o + '</span>'; }).join('') + '</div>';
    last.steps.forEach(function (st, k) { st.on = '.oz' + k; });
  }
  (window.LGS_AN = window.LGS_AN || {})['ing-teen'] = L;
})();
