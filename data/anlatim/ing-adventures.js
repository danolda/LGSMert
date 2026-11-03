/* Adım Adım Anlatım · İngilizce · 6. Ünite Adventures (biçim: tools/ANLATIM.md)
   Altyazıdaki [[...]] İngilizce bölümdür → <i lang="en">…</i>; tools/anlatim_ses.py İngilizce sesle okur. */
(function () {
  var L = {
  title: 'Adventures: Ekstrem Sporlar',
  desc: 'Ekstrem spor adları ve karıştırılan ikililer, ekipman–spor eşleştirme, -ing / -ed sıfatlar, karşılaştırma, tercih kalıpları, dolaylı görüş ifadeleri, röportajda soru–cevap eşleştirme ve güvenlik uyarıları.',
  ozet: [
    'Hava: skydiving, paragliding, bungee jumping · Su: rafting, canoeing / kayaking, scuba diving · Kara: rock climbing, caving, trekking · Kar: skiing, snowboarding.',
    'skiing (iki kayak + baton) ≠ snowboarding (tek tahta) · rafting (grup, şişme bot) ≠ canoeing (dar tekne) · scuba (tüplü) ≠ free diving (nefes tutarak).',
    'Ekipman: helmet · harness + rope (climbing, bungee) · life jacket + paddle (rafting, canoeing) · parachute (skydiving) · wetsuit, oxygen tank, fins (scuba) · headlamp (caving).',
    '-ing etkinliği anlatır (Skydiving is exciting), -ed kişinin duygusunu (I was excited). breathtaking = nefes kesecek kadar güzel.',
    'more … than · the most … · not as … as (daha az) · as … as (eşit) · one of the most … + çoğul isim.',
    'prefer A <b>to</b> B · would rather A <b>than</b> B (yalın fiil) · I’d rather not …',
    'Dolaylı anlam: Nothing beats… (çok seviyor) · It’s not my cup of tea (sevmiyor) · Never again! (pişman) · once-in-a-lifetime (unutulmaz). Fact (bilgi) ≠ opinion (görüş).',
    'Röportaj: How often → sıklık · How long → süre · Why → Because… · What do you need? → ekipman · When did you start? → … ago. Eşleşmeyen soru cevaptır.'
  ],
  scenes: [
    { t: 'Ekstrem sporlar',
      base: '<div class="an-grid"><div class="rv g1"><b>☁ Air</b>skydiving · paragliding · bungee jumping</div><div class="rv g2"><b>🌊 Water</b>rafting · canoeing · scuba diving</div><div class="rv g3"><b>⛰ Land & snow</b>rock climbing · caving · skiing</div></div>',
      steps: [
        { s: 'Altıncı ünite [[Adventures]], yani maceralar. Konumuz ekstrem sporlar: heyecan ve risk.' },
        { s: 'Havada yapılanlar: [[skydiving]] uçaktan atlamak, [[paragliding]] yamaç paraşütü, [[bungee jumping]].', on: '.g1' },
        { s: 'Suda: [[rafting]], [[canoeing]] yani kano, [[scuba diving]] yani tüplü dalış.', on: '.g2' },
        { s: 'Karada ve karda: [[rock climbing]] kaya tırmanışı, [[caving]] mağaracılık, [[skiing]] kayak, [[snowboarding]].', on: '.g3' }
      ] },

    { t: 'Karıştırılan ikililer',
      base: '<table class="an-tbl">' +
        '<tr class="rv c1"><td><b>skiing</b><br><small>iki kayak + baton</small></td><td><b>snowboarding</b><br><small>iki ayak tek tahtada</small></td></tr>' +
        '<tr class="rv c2"><td><b>rafting</b><br><small>grup, şişme bot, hızlı nehir</small></td><td><b>canoeing</b><br><small>1–2 kişilik dar tekne</small></td></tr>' +
        '<tr class="rv c3"><td><b>skydiving</b><br><small>uçaktan atla, paraşüt aç</small></td><td><b>paragliding</b><br><small>yamaçtan koşarak havalan</small></td></tr>' +
        '<tr class="rv c4"><td><b>scuba diving</b><br><small>oksijen tüpüyle</small></td><td><b>free diving</b><br><small>tüpsüz, nefes tutarak</small></td></tr></table>',
      steps: [
        { s: 'Şimdi şuna bir bakalım. LGS bazen sporu adıyla değil, tarifiyle verir. Bu ikilileri ayırabilmelisin.' },
        { s: '[[Skiing]] sporunda iki ayrı kayak ve baton vardır. [[Snowboarding]] sporunda ise iki ayak tek bir tahtadadır.', on: '.c1' },
        { s: '[[Rafting]], bir grubun şişme botla hızlı akan nehirden inmesidir. [[Canoeing]] ise bir iki kişilik dar bir teknede kürek çekmek.', on: '.c2' },
        { s: '[[Skydiving]] sporunda uçaktan atlanır. [[Paragliding]] sporunda ise yamaçtan koşarak havalanılır ve uzun süre süzülünür.', on: '.c3' },
        { s: '[[Scuba diving]] oksijen tüpüyle, [[free diving]] ise nefes tutarak yapılan dalıştır.', on: '.c4' }
      ] },

    { t: 'Ekipman',
      base: '<table class="an-tbl"><tr><th>Equipment</th><th>Hangi spor?</th></tr>' +
        '<tr class="rv e1"><td><b>helmet</b> kask</td><td>climbing, rafting, caving</td></tr>' +
        '<tr class="rv e2"><td><b>harness · rope</b> emniyet kemeri · halat</td><td>rock climbing, bungee jumping</td></tr>' +
        '<tr class="rv e3"><td><b>life jacket · paddle</b> can yeleği · kürek</td><td>rafting, canoeing</td></tr>' +
        '<tr class="rv e4"><td><b>parachute</b> paraşüt</td><td>skydiving</td></tr>' +
        '<tr class="rv e5"><td><b>wetsuit · oxygen tank · fins</b></td><td>scuba diving</td></tr>' +
        '<tr class="rv e6"><td><b>headlamp</b> kafa lambası</td><td>caving</td></tr></table>',
      steps: [
        { s: '2024 LGS’de ekipman ile sporu eşleştirmek soruldu. [[Helmet]], yani kask, birçok sporda var.', on: '.e1' },
        { s: '[[Harness]] emniyet kemeri, [[rope]] halat: kaya tırmanışı ve [[bungee jumping]].', on: '.e2' },
        { s: '[[Life jacket]] can yeleği, [[paddle]] kürek: [[rafting]] ve kano.', on: '.e3' },
        { s: '[[Parachute]], paraşüt: [[skydiving]].', on: '.e4' },
        { s: '[[Wetsuit]] dalış elbisesi, [[oxygen tank]] oksijen tüpü, [[fins]] palet: tüplü dalış.', on: '.e5' },
        { s: 'Ve [[headlamp]], kafa lambası. Karanlık mağaralar için, yani [[caving]].', on: '.e6' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p><b>Burak:</b> Before we start, everyone needs a <b>helmet</b>, a <b>life jacket</b> and a <b>paddle</b>. We will go down the river together in a big rubber boat.</p><p>Which activity is Burak talking about?</p>',
        c: ['Rafting', 'Skydiving', 'Scuba diving', 'Caving'], a: 'A',
        hint: 'Can yeleği ve kürek hangi sporda kullanılır? Bir de grup ve şişme bot ipucunu düşün.',
        why: 'Kask, can yeleği ve kürek; bir de grupla şişme botla nehirden inmek. Bu [[rafting]].' },
      steps: [{ s: 'Ekipmanlardan sporu bul.' }] },

    { t: 'Sıfatlar: -ing mi, -ed mi?',
      steps: [
        { s: 'Etkinlikleri anlatan sıfatlar: [[thrilling]], [[exciting]] heyecan verici; [[challenging]] zorlayıcı; [[breathtaking]] nefes kesici.',
          h: '<table class="an-tbl"><tr><th>👍</th><th>👎</th></tr><tr><td>thrilling · exciting · breathtaking · challenging · safe · fun</td><td>dangerous · risky · terrifying · boring · tiring · a waste of money</td></tr></table>' },
        { s: 'Burada dikkat: [[breathtaking]], nefes almayı zorlaştıran değil, nefes kesecek kadar güzel demek.' },
        { s: 'Şimdi önemli kural: ing ile biten sıfat etkinliği anlatır. [[Skydiving is exciting.]]',
          h: '<div class="an-rule"><b>-ing</b> → şeyin kendisi: Skydiving is <span class="an-w">exciting</span>.<br><b>-ed</b> → kişinin duygusu: I was <span class="an-w">excited</span> before the jump.</div>' },
        { s: 'ed ile biten sıfat ise kişinin duygusunu anlatır: [[I was excited before the jump.]]' },
        { s: 'Kişi duyguları için şunlar da çok geçer: [[nervous]] gergin, [[scared]] korkmuş, [[brave]] cesur, [[proud]] gururlu.' }
      ] },

    { t: 'Karşılaştırma',
      base: '<svg class="an-svg" viewBox="0 0 340 150" role="img" aria-label="Tehlike puanı: hiking 2, rafting 6, skydiving 9">' +
        '<text x="6" y="16" font-size="12" class="mut">Danger (1–10)</text>' +
        '<rect x="96" y="30" width="48" height="24" rx="4" class="box rv k1"/><text x="6" y="47" font-size="13" font-weight="700" class="rv k1">hiking</text><text x="150" y="47" font-size="13" class="rv k1">2</text>' +
        '<rect x="96" y="66" width="144" height="24" rx="4" class="box rv k1"/><text x="6" y="83" font-size="13" font-weight="700" class="rv k1">rafting</text><text x="246" y="83" font-size="13" class="rv k1">6</text>' +
        '<rect x="96" y="102" width="216" height="24" rx="4" class="boxa rv k1"/><text x="6" y="119" font-size="13" font-weight="700" class="rv k1">skydiving</text><text x="318" y="119" font-size="13" class="rv k1">9</text></svg>',
      steps: [
        { s: 'Üç etkinliğin tehlike puanına bakalım: yürüyüş iki, rafting altı, skydiving dokuz.', on: '.k1' },
        { s: '[[Rafting is more dangerous than hiking.]] Uzun sıfatlarda [[more]] ve [[than]] kullanılır.',
          h: '<div class="an-ex"><span class="an-l">Rafting is <b>more dangerous than</b> hiking.</span><span class="an-l">Skydiving is <b>the most dangerous</b> of the three.</span><span class="an-l">Hiking is <b>the safest</b>.</span><span class="an-l">Hiking is <b>not as dangerous as</b> rafting.</span></div>' },
        { s: 'En tehlikelisi: [[Skydiving is the most dangerous.]] En güvenlisi: [[Hiking is the safest.]]' },
        { s: 'Ve tuzaklı yapı: [[Hiking is not as dangerous as rafting.]] Bu, yürüyüş daha az tehlikeli demek.' },
        { s: 'Eşitlik için [[as tiring as]], iki kat için [[twice as long as]]. Grafik sorularında [[twice]] ve [[the most]] kelimelerini sayıyla kontrol et.' }
      ] },

    { t: 'Tercih kalıpları',
      steps: [
        { s: 'Tercih bildirirken iki kalıp: [[I prefer rafting to caving.]] [[Prefer]] ile [[to]] gelir.',
          h: '<div class="an-ex"><span class="an-l">I prefer caving <b>to</b> ice climbing. <span class="an-ok-t">✓</span></span><span class="an-l">I prefer caving <span class="an-bad-t">than</span> ice climbing. ✗</span><span class="an-l">I’d rather <b>climb than dive</b>. <span class="an-ok-t">✓</span> · I’d rather <span class="an-bad-t">climbing</span> ✗</span></div>' },
        { s: '[[I’d rather climb than dive.]] [[Would rather]] ile [[than]] gelir ve fiil yalın kalır.' },
        { s: 'Yapmak istemediğimizi de şöyle söyleriz: [[I’d rather not try bungee jumping.]]' },
        { s: 'Ve unutma, her iki kalıpta da ilk söylenen tercih edilendir.' }
      ] },

    { t: 'Dolaylı görüş ifadeleri',
      base: '<table class="an-tbl"><tr><th>İfade</th><th>Anlamı</th></tr>' +
        '<tr class="rv d1"><td>Nothing beats rafting!</td><td>👍 hiçbir şey onu geçemez</td></tr>' +
        '<tr class="rv d1"><td>It was a once-in-a-lifetime experience.</td><td>👍 unutulmaz bir deneyim</td></tr>' +
        '<tr class="rv d2"><td>It’s not my cup of tea.</td><td>👎 bana göre değil</td></tr>' +
        '<tr class="rv d2"><td>Never again! / A waste of money.</td><td>👎 pişmanlık</td></tr>' +
        '<tr class="rv d3"><td>I can’t wait to try it.</td><td>👍 sabırsızlanıyor</td></tr></table>',
      steps: [
        { s: 'Bu ünitedeki soruların çoğu bir yorumdan kişinin duygusunu bulmayı ister. Anahtar kelime çoğu zaman doğrudan verilmez.' },
        { s: '[[Nothing beats rafting!]] Yani hiçbir şey bu sporu geçemez. [[It was a once-in-a-lifetime experience.]] Hayatta bir kez yaşanacak bir deneyim.', on: '.d1' },
        { s: 'Olumsuzlar: [[It’s not my cup of tea]], yani bana göre değil. [[Never again!]] Bir daha asla!', on: '.d2' },
        { s: '[[I can’t wait to try it]] ise sabırsızlanıyorum, yani çok istiyor.', on: '.d3' },
        { s: 'Son olarak bilgi ve görüş farkı. [[Scuba divers use oxygen tanks]] bir bilgi. [[It’s the most enjoyable sport]] ise bir görüş.',
          h: '<div class="an-tip"><b>Fact:</b> herkes için doğru bilgi · <b>Opinion:</b> I think, the best, amazing gibi kişisel yargı</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>People wrote comments about their adventure holidays.</p><p><b>Ada:</b> It was a once-in-a-lifetime experience!<br><b>Bora:</b> Nothing beats rafting on the Köprülü River.<br><b>Cem:</b> Never again! It was a waste of money.<br><b>Dila:</b> I can’t wait to try it again next summer.</p><p>Who does <b>NOT</b> recommend the activity?</p>',
        c: ['Ada', 'Bora', 'Cem', 'Dila'], a: 'C',
        hint: 'Bir daha yapmak istemeyen ve parasına yandığını söyleyen kim?',
        why: 'Cem [[Never again!]] ve [[a waste of money]] diyor; yani pişman ve önermiyor. Diğer üçü etkinliği çok sevmiş.' },
      steps: [{ s: 'Dolaylı ifadeleri çöz.' }] },

    { t: 'Röportajda soru–cevap',
      base: '<table class="an-tbl"><tr><th>Soru</th><th>Cevap</th></tr>' +
        '<tr class="rv i1"><td>How often …?</td><td>Twice a week.</td></tr>' +
        '<tr class="rv i2"><td>How long …?</td><td>For two hours.</td></tr>' +
        '<tr class="rv i3"><td>Why …?</td><td>Because it’s thrilling.</td></tr>' +
        '<tr class="rv i4"><td>What do you need?</td><td>A helmet and a rope.</td></tr>' +
        '<tr class="rv i5"><td>When did you start?</td><td>Two years ago.</td></tr></table>',
      steps: [
        { s: 'LGS bir sporcuyla röportaj verip “hangi soru sorulmadı” diye sorabilir. Yol basit: her cevabı bir soruyla eşleştir.' },
        { s: '[[Twice a week]] sıklık, soru [[How often]]. [[For two hours]] süre, soru [[How long]].', on: '.i1,.i2' },
        { s: '[[Because]] ile başlayan cevap [[Why]] sorusunun cevabıdır.', on: '.i3' },
        { s: 'Ekipman sayılıyorsa soru [[What do you need?]] [[Two years ago]] diyorsa soru [[When did you start?]]', on: '.i4,.i5' },
        { s: 'Eşleşmeyen tek soru, cevabın ta kendisi.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p><b>Interview with a caver</b></p><p>— I go caving twice a month.<br>— Because I love exploring places that nobody has seen.<br>— A helmet with a headlamp, gloves and strong boots.</p><p>Which question is <b>NOT</b> answered in the interview?</p>',
        c: ['How often do you go caving?', 'Why do you like caving?', 'What equipment do you need?', 'When did you start caving?'], a: 'D',
        hint: 'Üç cevabı tek tek eşleştir: sıklık, sebep, ekipman. Hangi soruya karşılık gelen bir cevap yok?',
        why: '[[Twice a month]] sıklık, [[Because]] sebep, kask ve eldiven de ekipman. Ama ne zaman başladığına dair bir cevap yok, yani [[ago]] ya da bir tarih geçmiyor.' },
      steps: [{ s: 'Her cevabı bir soruya bağla.' }] },

    { t: 'Güvenlik ve uyarı',
      steps: [
        { s: 'Ekstrem sporlarda kurallar çok önemli. [[You must wear a life jacket]]: zorunlu.',
          h: '<div class="an-ex"><span class="an-l"><b>must / have to:</b> You must wear a life jacket.</span><span class="an-l"><b>mustn’t:</b> You mustn’t dive alone.</span><span class="an-l"><b>should:</b> Beginners should start with an instructor.</span></div>' },
        { s: '[[You mustn’t dive alone]]: yasak. [[Beginners should start with an instructor]]: tavsiye.' },
        { s: 'Uyarılar da dolaylı gelebilir. [[Did you check your harness twice?]] Bu bir soru gibi ama aslında bir uyarı.',
          h: '<div class="an-trap">“Did you check your harness twice?” → <b>uyarı</b> · “I wish I could climb like you!” → <b>hayranlık</b></div>' },
        { s: '[[I wish I could climb like you!]] ise hayranlık bildirir. Konuşmacının duygusunu cümlenin bütününden çıkar.' }
      ] },

    { t: 'Akılda kalsın',
      steps: [
        { s: 'Toparlayalım. Sporu tarifinden ve ekipmanından tanı: kürek ve can yeleği rafting, paraşüt skydiving, kafa lambası caving.' },
        { s: 'ing ile biten sıfat etkinliği, ed ile biten kişinin duygusunu anlatır. [[Breathtaking]] çok güzel demek.' },
        { s: '[[Prefer]] ile [[to]], [[would rather]] ile [[than]]. Röportajda her cevabı bir soruya bağla.' },
        { s: '[[Nothing beats]] çok sevmek, [[Never again]] pişmanlık. Bu macerayı da tamamladın, tebrikler!' }
      ] }
  ]
  };
  var en = function (t) { return typeof t === 'string' ? t.replace(/\[\[(.+?)\]\]/g, '<i lang="en">$1</i>') : t; };
  L.scenes.forEach(function (sc) {
    (sc.steps || []).forEach(function (st) { st.s = en(st.s); });
    if (sc.cp) { sc.cp.why = en(sc.cp.why); sc.cp.hint = en(sc.cp.hint); }
  });
  // son “Akılda kalsın” sahnesi: özet maddeleri adım adım belirir
  var last = L.scenes[L.scenes.length - 1];
  if (last && !last.base && !last.cp) {
    var ns = last.steps.length;
    last.base = '<div class="an-ex">' + L.ozet.map(function (o, i) { return '<span class="an-l rv oz' + Math.floor(i * ns / L.ozet.length) + '">' + o + '</span>'; }).join('') + '</div>';
    last.steps.forEach(function (st, k) { st.on = '.oz' + k; });
  }
  (window.LGS_AN = window.LGS_AN || {})['ing-adventures'] = L;
})();
