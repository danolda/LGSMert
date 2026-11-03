/* Adım Adım Anlatım · İngilizce · 8. Ünite Chores (biçim: tools/ANLATIM.md)
   Altyazıdaki [[...]] İngilizce bölümdür → <i lang="en">…</i>; tools/anlatim_ses.py İngilizce sesle okur. */
(function () {
  var L = {
  title: 'Chores: Ev İşleri',
  desc: 'Odalara göre ev işleri, do / make kalıpları, araç–gereçler, sevme–sevmeme, have to / don’t have to / mustn’t, sıklık, rica–teklif cevapları ve en sık karıştırılan iş adları.',
  ozet: [
    '<b>do</b> the dishes / the laundry / the ironing / the shopping · <b>make</b> the bed / breakfast / a mess. “do the bed” ✗',
    'set (lay) the table (yemekten önce) ↔ clear the table (sonra) · load ↔ unload the dishwasher · take out the rubbish · hang out the washing (ipe) ↔ hang up the clothes (askıya).',
    'vacuum (elektrik süpürgesi) · sweep (çalı süpürge) · mop (paspas) · dust (toz al) · iron (ütüle) · water the plants · feed / walk the dog.',
    '<b>don’t mind</b> = fark etmez, yaparım (nötr) · <b>can’t stand</b> = nefret ederim. Arkasından V-ing.',
    'have to / must = zorunlu · <b>don’t have to</b> = gerek yok · <b>mustn’t</b> = yasak · be responsible for + V-ing · take turns.',
    'Would you mind + V-ing? → <b>Not at all.</b> = kabul · “Yes, I do.” = sakıncası var (ret).',
    'Tarif sorularında işin adı değil, aleti ya da yeri verilir: “a hot tool on a special board” → ironing.'
  ],
  scenes: [
    { t: 'Odalara göre ev işleri',
      base: '<div class="an-grid"><div class="rv g1"><b>Kitchen</b>do the dishes · set the table · cook</div><div class="rv g2"><b>Living room</b>vacuum the carpet · dust</div><div class="rv g2"><b>Bedroom</b>make the bed · tidy up</div><div class="rv g3"><b>Bathroom</b>clean the bathroom · mop</div><div class="rv g3"><b>Laundry</b>do the laundry · iron</div><div class="rv g3"><b>Garden</b>water the plants · walk the dog</div></div>',
      steps: [
        { s: 'Sekizinci ünite [[Chores]], yani ev işleri. LGS’de genelde resim eşleştirme ve “kim hangi işi yapıyor” soruları gelir.' },
        { s: 'Mutfakta: [[do the dishes]] bulaşık yıkamak, [[set the table]] sofrayı kurmak, [[cook]] yemek yapmak.', on: '.g1' },
        { s: 'Salonda [[vacuum the carpet]] halıyı süpürmek, [[dust]] toz almak. Yatak odasında [[make the bed]] ve [[tidy up]] toplamak.', on: '.g2' },
        { s: 'Banyoda [[mop the floor]] paspaslamak; çamaşırda [[do the laundry]] ve [[iron]]; bahçede [[water the plants]] ve [[walk the dog]].', on: '.g3' }
      ] },

    { t: 'do mu, make mi?',
      steps: [
        { s: 'En çok karıştırılan nokta [[do]] ile [[make]]. Bulaşık, çamaşır, ütü ve alışveriş [[do]] ile kurulur.',
          h: '<div class="an-rule"><b>do</b> the dishes · the laundry · the ironing · the shopping · the cooking · the housework</div>' },
        { s: '[[do the dishes]], [[do the laundry]], [[do the ironing]], [[do the shopping]].' },
        { s: 'Ama yatak [[make]] ile: [[make the bed]]. Kahvaltı hazırlamak da [[make breakfast]], ortalığı dağıtmak [[make a mess]].',
          h: '<div class="an-rule"><b>make</b> the bed · breakfast · a mess</div>' },
        { s: 'Yani [[do the bed]] diye bir şey yok. Bu bir tuzak.',
          h: '<div class="an-trap"><span class="an-bad-t">do the bed</span> ✗ → <b>make the bed</b> ✓</div>' }
      ] },

    { t: 'do ya da make: kutulara ayır',
      steps: [{ s: 'Sekiz ev işini fiiline göre iki kutuya ayır: [[do]] ile mi kurulur, [[make]] ile mi?' }],
      ia: { tip: 'grup', q: '<p>Her ifade hangi fiille kurulur?</p>', gruplar: ['do', 'make'],
        ogeler: [{ m: '… the dishes', g: 0 }, { m: '… the laundry', g: 0 }, { m: '… the ironing', g: 0 }, { m: '… the shopping', g: 0 },
          { m: '… the bed', g: 1 }, { m: '… breakfast', g: 1 }, { m: '… a mess', g: 1 }, { m: '… a cake', g: 1 }],
        hint: 'Bulaşık, çamaşır, ütü ve alışveriş bir fiille kurulur. Yatak, yemek hazırlamak ve ortalığı dağıtmak ise öteki fiille.',
        why: '[[Do the dishes]], [[do the laundry]], [[do the ironing]], [[do the shopping]]. Ama [[make the bed]], [[make breakfast]], [[make a mess]] ve [[make a cake]].' } },

    { t: 'Karşıt ikililer',
      base: '<table class="an-tbl">' +
        '<tr class="rv c1"><td><b>set / lay the table</b><br><small>yemekten önce kurmak</small></td><td><b>clear the table</b><br><small>yemekten sonra toplamak</small></td></tr>' +
        '<tr class="rv c2"><td><b>load the dishwasher</b><br><small>kirli tabakları koymak</small></td><td><b>unload / empty</b><br><small>temizleri çıkarmak</small></td></tr>' +
        '<tr class="rv c3"><td><b>hang out the washing</b><br><small>ıslak çamaşırı ipe asmak</small></td><td><b>hang up the clothes</b><br><small>kıyafeti askıya asmak</small></td></tr></table>',
      steps: [
        { s: 'Şimdi birbirine zıt ama benzer işler. [[Set the table]] yemekten önce sofrayı kurmak, [[clear the table]] yemekten sonra toplamak.', on: '.c1' },
        { s: '[[Load the dishwasher]] kirli tabakları makineye koymak. [[Unload]] ya da [[empty]] ise temizleri çıkarmak.', on: '.c2' },
        { s: '[[Hang out the washing]] ıslak çamaşırı ipe asmak. [[Hang up the clothes]] ise kıyafeti askıya, dolaba asmak.', on: '.c3' },
        { s: 'Bir de çöp: [[take out the rubbish]]. Amerikan İngilizcesinde [[garbage]] ya da [[trash]] de denir.' }
      ] },

    { t: 'Karşıt ikililer tuzağı',
      steps: [{ s: 'Benzer ev işleriyle ilgili her ifadeye karar ver: doğru mu, yanlış mı?' }],
      ia: { tip: 'dogruyanlis', q: '<p>Her ifade için karar ver.</p>', ifadeler: [
          { m: '“Clear the table” = yemekten önce sofrayı kurmak.', d: false, a: 'Kurmak set the table; clear yemekten sonra toplamak.' },
          { m: '“Unload the dishwasher” = temiz tabakları makineden çıkarmak.', d: true, a: 'unload = empty: boşaltmak.' },
          { m: '“Hang out the washing” = kıyafeti dolaba asmak.', d: false, a: 'Islak çamaşırı ipe asmak; dolaba asmak hang up.' },
          { m: '“Take out the rubbish” = çöpü dışarı çıkarmak.', d: true, a: 'rubbish = garbage = trash.' }],
        hint: '[[Set]] ile [[clear]] zıt işlerdir. [[Hang out]] ile [[hang up]] arasında da fark var: biri ipe, öteki askıya.',
        why: '[[Clear the table]] yemekten sonra toplamaktır. [[Unload]] makineyi boşaltmak, [[hang out the washing]] ıslak çamaşırı ipe asmak, [[take out the rubbish]] çöpü çıkarmaktır.' } },

    { t: 'Araç ve gereçler',
      base: '<table class="an-tbl"><tr><th>Alet</th><th>İş</th></tr>' +
        '<tr class="rv a1"><td>vacuum cleaner</td><td>vacuum the carpet</td></tr>' +
        '<tr class="rv a2"><td>broom + dustpan</td><td>sweep the floor</td></tr>' +
        '<tr class="rv a2"><td>mop + bucket</td><td>mop the floor</td></tr>' +
        '<tr class="rv a3"><td>iron + ironing board</td><td>iron the clothes</td></tr>' +
        '<tr class="rv a3"><td>washing machine</td><td>do the laundry</td></tr>' +
        '<tr class="rv a4"><td>duster · watering can</td><td>dust · water the plants</td></tr></table>',
      steps: [
        { s: 'LGS işin adını söylemek yerine aleti ya da yapılan yeri tarif edebilir. O yüzden aletleri bilmek çok önemli.' },
        { s: '[[Vacuum cleaner]] elektrik süpürgesi; halıyı süpürürüz: [[vacuum the carpet]].', on: '.a1' },
        { s: '[[Broom]] çalı süpürgesi ile [[sweep the floor]]. [[Mop]] ve kova ile de ıslak paspas: [[mop the floor]].', on: '.a2' },
        { s: '[[Iron]] ve [[ironing board]], yani ütü ve ütü masası: [[iron the clothes]]. Çamaşır makinesi ise [[do the laundry]].', on: '.a3' },
        { s: 'Toz bezi [[duster]], sulama kabı [[watering can]].', on: '.a4' },
        { s: 'Burada dikkat: ütü yapmak ile çamaşır yıkamak farklı işlerdir. Resimli sorularda en çok bu ikisi karıştırılır.',
          h: '<div class="an-trap"><b>do the laundry</b> = çamaşır yıkamak ≠ <b>do the ironing</b> = ütü yapmak</div>' }
      ] },

    { t: 'Aleti adıyla eşleştir',
      steps: [{ s: 'Ev işi aletlerini Türkçe adlarıyla eşleştir. Önce alete, sonra adına dokun.' }],
      ia: { tip: 'eslestir', q: '<p>Her aleti Türkçe adıyla eşleştir.</p>', solBaslik: 'Alet', sagBaslik: 'Türkçesi',
        sol: ['vacuum cleaner', 'broom', 'mop', 'duster', 'watering can', 'ironing board'],
        sag: ['elektrik süpürgesi', 'çalı süpürgesi', 'paspas', 'toz bezi', 'sulama kabı', 'ütü masası'],
        hint: 'İki süpürgeyi karıştırma: biri elektrikle halıyı çeker, öteki ile yer süpürülür. [[Watering]] sulamak demek.',
        why: '[[Vacuum cleaner]] elektrik süpürgesi, [[broom]] çalı süpürgesi, [[mop]] paspas, [[duster]] toz bezi, [[watering can]] sulama kabı, [[ironing board]] ütü masası.' } },

    { t: 'Ara soru', cp: {
        q: '<p><b>Lily:</b> Every Sunday I use a hot tool on a special board to make my school shirts smooth.</p><p>Which chore is Lily talking about?</p>',
        c: ['Doing the laundry', 'Doing the ironing', 'Hanging out the washing', 'Folding the clothes'], a: 'B',
        hint: 'Sıcak bir alet ve özel bir masa. Gömlekleri düzleştiriyor. Hangi alet?',
        why: 'Sıcak alet ütü, özel masa da ütü masası. Gömlekleri düzleştirmek, yani [[doing the ironing]].' },
      steps: [{ s: 'İşin adı yok, sadece tarif var. Bul bakalım.' }] },

    { t: 'Sevdiğimiz, sevmediğimiz işler',
      steps: [
        { s: 'Ev işlerini sevip sevmediğimizi söylerken arkadan gelen fiil ing alır: [[I can’t stand ironing.]] [[She enjoys cooking.]]',
          h: '<div class="an-ex"><span class="an-l">I <b>don’t mind</b> washing the dishes, but I <b>can’t stand</b> cleaning the bathroom.</span><span class="an-l">I <b>prefer</b> vacuuming <b>to</b> dusting.</span></div>' },
        { s: 'Mesela: [[I don’t mind washing the dishes, but I can’t stand cleaning the bathroom.]]' },
        { s: 'Burada dikkat. [[Don’t mind]] olumsuz görünür ama “sevmiyorum” demek değil; “fark etmez, yaparım” demek.',
          h: '<div class="an-trap"><b>don’t mind</b> = sorun etmem, yaparım (nötr) · <b>can’t stand</b> = hiç dayanamam (ayakta durmak değil!) · <b>hate</b>, <b>dislike</b>’tan daha güçlüdür</div>' },
        { s: '[[Can’t stand]] ise “hiç dayanamam”, yani nefret. “Ayakta duramıyorum” sanma!' }
      ] },

    { t: 'Sevmeyenleri ele',
      steps: [{ s: 'Altı kişinin ev işi yorumu var. İşi sevmediğini söyleyenleri ele. Dikkat: [[don’t mind]] sevmemek değildir!' }],
      ia: { tip: 'eleme', q: '<p>Ev işini <b>sevmediğini</b> söyleyen cümleleri ele.</p>',
        ogeler: ['I don’t mind ironing.', 'I can’t stand dusting.', 'I enjoy cooking.', 'I hate mopping the floor.', 'I’m keen on gardening.', 'I’m not into tidying up.'], ele: [1, 3, 5],
        hint: '[[Don’t mind]] olumsuz görünür ama “fark etmez, yaparım” demek. [[Not into]] ve [[can’t stand]] ne anlama geliyordu?',
        why: '[[Can’t stand]] hiç dayanamam, [[hate]] nefret ederim, [[not into]] ilgimi çekmez. [[Don’t mind]] ise nötr: sevmese de yapıyor.' } },

    { t: 'Sorumluluk ve zorunluluk',
      base: '<table class="an-tbl"><tr><th>Kalıp</th><th>Anlam</th><th>Örnek</th></tr>' +
        '<tr class="rv r1"><td><b>have to / must</b></td><td>zorunlu</td><td>I have to feed the cat.</td></tr>' +
        '<tr class="rv r2"><td><b>don’t have to</b></td><td>gerek yok</td><td>You don’t have to make your bed.</td></tr>' +
        '<tr class="rv r3"><td><b>mustn’t</b></td><td>yasak</td><td>You mustn’t leave dirty dishes.</td></tr>' +
        '<tr class="rv r4"><td><b>be responsible for</b></td><td>sorumlu olmak</td><td>Ece is responsible for setting the table.</td></tr>' +
        '<tr class="rv r4"><td><b>take turns</b></td><td>sırayla yapmak</td><td>We take turns washing the dishes.</td></tr></table>',
      steps: [
        { s: 'Ev işleri sorumluluktur. [[I have to feed the cat every morning.]] Zorundayım.', on: '.r1' },
        { s: '[[You don’t have to make your bed]] ise “yatağını toplamana gerek yok” demek. İstersen toplayabilirsin.', on: '.r2' },
        { s: '[[You mustn’t leave dirty dishes in the sink]]: yasak.', on: '.r3' },
        { s: 'Sorumluluk için [[be responsible for]] ve ing takısı. Sırayla yapmak için [[take turns]].', on: '.r4' }
      ] },

    { t: 'have to, don’t have to, mustn’t',
      steps: [{ s: 'Üç cümleyi bağlamına göre tamamla. Zorunlu mu, yasak mı, yoksa gerek mi yok?' }],
      ia: { tip: 'bosluk', q: '<p>Cümleleri tamamla.</p>',
        metin: 'It’s Sunday. You [_] get up early. Sleep as long as you want!<br>It’s a house rule: you [_] leave dirty dishes in the sink.<br>Nobody else feeds the cat, so I [_] feed it every morning.',
        secenek: ['have to', 'has to', 'don’t have to', 'doesn’t have to', 'mustn’t'], cevap: ['don’t have to', 'mustn’t', 'have to'],
        hint: 'İstediğin kadar uyuyabiliyorsan erken kalkmak zorunlu mu? Kural bir şeyi yasaklıyorsa hangi kalıp? [[I]] ile [[has to]] kullanılır mı?',
        why: 'Pazar günü erken kalkmaya gerek yok: [[don’t have to]]. Kural yasaklıyor: [[mustn’t]]. Kediyi besleyen tek kişi benim: [[I have to]].' } },

    { t: 'Ara soru', cp: {
        q: '<p><b>Mom:</b> It’s Sunday today. You <b>don’t have to</b> make your bed early.</p><p>What does Mom mean?</p>',
        c: ['It is forbidden to make your bed.', 'It isn’t necessary to make your bed early.', 'You must make your bed right now.', 'You never make your bed.'], a: 'B',
        hint: '[[Don’t have to]] yasak mı, yoksa gerek yok mu demek?',
        why: '[[Don’t have to]] “gerek yok” demektir. Yasak anlamı [[mustn’t]] ile verilir. LGS’de [[It is forbidden]] şıkkı tam bu tuzak için konur.' },
      steps: [{ s: 'Bu tuzak kural tablolarında sık çıkar.' }] },

    { t: 'Ne sıklıkla?',
      steps: [
        { s: 'Sıklık zarfları burada da geçer: [[always]], [[usually]], [[often]], [[sometimes]], [[rarely]], [[never]].',
          h: '<div class="an-ex"><span class="an-l">once a week · twice a week · every day</span><span class="an-l"><b>every other day</b> = gün aşırı</span><span class="an-l">on weekdays · at weekends · after every meal</span></div>' },
        { s: 'Ayrıca [[every other day]], yani gün aşırı. [[After every meal]], her yemekten sonra.' },
        { s: 'Soru: [[How often do you do the shopping?]] Cevap: [[Once a week, on Saturdays.]]' }
      ] },

    { t: 'Gün aşırı kaç kez?',
      steps: [{ s: 'Ela bitkileri gün aşırı suluyor. İki haftada kaç kez sular? Hesapla ve kaydırıcıyla işaretle.' }],
      ia: { tip: 'kaydir', q: '<p><b>Ela:</b> I water the plants <b>every other day</b>. I started on Monday.</p><p>How many times does Ela water the plants in <b>two weeks</b> (14 days)?</p>',
        min: 0, max: 14, adim: 1, cevap: 7, tol: 0, etiket: [0, 2, 4, 6, 8, 10, 12, 14],
        hint: '[[Every other day]] her gün değil, gün aşırı demek. On dört günün kaçında sulama yapılır?',
        why: 'Gün aşırı, yani iki günde bir. On dört gün içinde birinci, üçüncü, beşinci günler derken yedi kez sular.' } },

    { t: 'Rica, teklif ve cevaplar',
      steps: [
        { s: 'Rica: [[Could you set the table, please?]] Kabul: [[Sure. No problem.]] Ret: [[Sorry, I can’t. I’m busy with my homework.]]',
          h: '<table class="an-tbl"><tr><th>Rica / Teklif</th><th>Kabul</th><th>Ret</th></tr>' +
             '<tr><td>Can / Could you …?</td><td>Sure. · No problem.</td><td>Sorry, I can’t. I’m busy.</td></tr>' +
             '<tr><td>Would you mind …ing?</td><td><b>Not at all.</b></td><td>Sorry, I have to …</td></tr>' +
             '<tr><td>Shall I help you?</td><td>That’s very kind of you.</td><td>Thanks, but I can do it myself.</td></tr></table>' },
        { s: 'Şimdi tuzak. [[Would you mind taking out the rubbish?]] Cevap [[Not at all.]] Bu “hiç sakıncası yok, yaparım” demek. Yani kabul!',
          h: '<div class="an-trap"><b>Not at all.</b> = kabul ✓ · <b>Yes, I do.</b> = “evet, sakıncası var” → ret</div>' },
        { s: 'Teklif ederken [[Shall I help you with the dishes?]] ya da [[I’ll take it out.]] Teşekkür: [[That’s very kind of you.]]' },
        { s: 'Diyalogda boşluktan sonra [[Then you can do it later]] geliyorsa, boşlukta mutlaka bir ret ve mazeret vardır.' }
      ] },

    { t: 'Rica diyaloğunu sırala',
      steps: [{ s: 'Annesiyle Can arasındaki kısa diyaloğun satırları karıştı. Baştan sona sırala.' }],
      ia: { tip: 'sirala', q: '<p>Diyaloğu baştan sona sırala.</p>', ust: 'ilk satır', alt: 'son satır',
        ogeler: ['Could you set the table, please?', 'Sorry, I’m busy with my homework.', 'OK. Then you can do it later.', 'Thanks, Mom. I’ll do it soon.'],
        hint: 'Diyalog bir ricayla başlar. [[Then you can do it later]] cümlesinden önce mutlaka bir ret ve mazeret gelir.',
        why: 'Önce rica, sonra mazeretli ret. Anne [[Then you can do it later]] der, Can da teşekkür eder. Bu kalıp LGS’de çok çıkar.' } },

    { t: 'Ara soru', cp: {
        q: '<p>Four friends talk about their chores at home.</p><p><b>Lily:</b> I load the dishwasher and set the table.<br><b>Tom:</b> I walk the dog and make my bed.<br><b>Sue:</b> I water the plants and hang out the washing.<br><b>Ben:</b> I cook the meals and clear the table.</p><p>Who does <b>only kitchen chores</b>?</p>',
        c: ['Lily and Ben', 'Tom and Sue', 'Lily and Sue', 'Tom and Ben'], a: 'A',
        hint: 'Her işin nerede yapıldığını düşün: mutfak mı, yatak odası mı, bahçe mi?',
        why: 'Lily bulaşık makinesini dolduruyor ve sofrayı kuruyor; Ben yemek yapıyor ve sofrayı topluyor. Hepsi mutfak işi. Tom köpek gezdirip yatak topluyor, Sue çiçek sulayıp çamaşır asıyor.' },
      steps: [{ s: 'İşin nerede yapıldığına bak.' }] },

    { t: 'Akılda kalsın',
      steps: [
        { s: 'Toparlayalım. Bulaşık, çamaşır, ütü [[do]] ile; yatak [[make]] ile. [[Set]] sofrayı kurmak, [[clear]] toplamak.' },
        { s: 'Ütü yapmak ile çamaşır yıkamak farklı. Tarif sorularında alete ve yere bak.' },
        { s: '[[Don’t mind]] nötr, [[can’t stand]] nefret. [[Don’t have to]] gerek yok, [[mustn’t]] yasak.' },
        { s: 'Ve [[Would you mind]] sorusuna [[Not at all]] kabul demek. Odanı toplamayı da unutma, aferin sana!' }
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
  (window.LGS_AN = window.LGS_AN || {})['ing-chores'] = L;
})();
