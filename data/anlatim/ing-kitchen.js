/* Adım Adım Anlatım · İngilizce · 3. Ünite In the Kitchen (biçim: tools/ANLATIM.md)
   Altyazıdaki [[...]] İngilizce bölümdür → <i lang="en">…</i>; tools/anlatim_ses.py İngilizce sesle okur. */
(function () {
  var L = {
  title: 'In the Kitchen: Tarif ve Süreç Anlatma',
  desc: 'Sıralama sözcükleri ve adım mantığı, pişirme fiilleri, mutfak aletleri, miktarlar, How much / How many / How long, tat sıfatları, edilgen yapı ve tarif kartı hesapları.',
  ozet: [
    'Sıra: First / To begin with → Then / Next → After that → Finally. Sözcük yoksa mantığa bak: önce doğra, sonra kızart; servis en sonda.',
    'Fiil ≠ alet: <b>grate</b> (rendelemek) – <b>grater</b> (rende); <b>boil</b> (kaynatmak) – <b>bowl</b> (kâse). <b>pot</b> = tencere, <b>pan</b> = tava, <b>oven</b> = fırın.',
    'Miktar: a pinch of salt · a clove of garlic · a slice of bread · a bunch of parsley · a cup of flour · a tablespoon of oil.',
    'How many + sayılabilen (eggs) · How much + sayılamayan (sugar, milk) · How long → süre · What does it taste like? → tat. Soruyu cevabın türünden bul.',
    'Tat: sweet, sour, salty, <b>spicy / hot</b> (biber acısı), <b>bitter</b> (kahve acısı), delicious, disgusting.',
    'Edilgen: nesne + is / are + V3. Sayılamayan → is (Salt is added), çoğul → are (The eggs are beaten).',
    'Tarif kartı: serves 4 → 8 kişi için her şey 2 katı. Toplam süre = hazırlık + pişirme (+ soğuma); aynı anda yapılan işler toplanmaz.'
  ],
  scenes: [
    { t: 'Bir süreci anlatmak',
      steps: [
        { s: 'Üçüncü ünite [[In the Kitchen]]. Burada asıl beceri şu: bir yemeğin nasıl yapıldığını adım adım anlatmak ve anlamak.' },
        { s: 'LGS’de tarif kartı, adımları sıralama, eksik adımı bulma ve tarif hakkında soru cevap eşleştirme çıkıyor.',
          h: '<div class="an-grid"><div><b>Sıralama</b>First… Then… Finally…</div><div><b>Kelimeler</b>chop, fry, pot, pan</div><div><b>Sorular</b>How much? How long?</div></div>' },
        { s: 'Tariflerde iki anlatım vardır. Emir kipi: [[Peel the potatoes.]] Edilgen yapı: [[The potatoes are peeled.]]',
          h: '<div class="an-rule"><b>Emir:</b> Peel the potatoes. Add some salt.<br><b>Edilgen:</b> The potatoes are peeled. Some salt is added.</div>' }
      ] },

    { t: 'Sıralama sözcükleri',
      base: '<svg class="an-svg" viewBox="0 0 340 214" role="img" aria-label="Tarif adımlarının sırası">' +
        '<rect x="6" y="6" width="328" height="38" rx="9" class="boxa rv q1"/><text x="16" y="30" font-size="14" font-weight="700" class="rv q1"><tspan class="acc">First,</tspan> wash the rice.</text>' +
        '<rect x="6" y="54" width="328" height="38" rx="9" class="box rv q2"/><text x="16" y="78" font-size="14" font-weight="700" class="rv q2"><tspan class="acc">Then / Next,</tspan> chop the onion.</text>' +
        '<rect x="6" y="102" width="328" height="38" rx="9" class="box rv q3"/><text x="16" y="126" font-size="14" font-weight="700" class="rv q3"><tspan class="acc">After that,</tspan> fry them.</text>' +
        '<rect x="6" y="150" width="328" height="38" rx="9" class="box rv q4"/><text x="16" y="174" font-size="14" font-weight="700" class="rv q4"><tspan class="acc">Finally,</tspan> serve it hot.</text>' +
        '<text x="170" y="208" font-size="12" text-anchor="middle" class="mut rv q4">“Enjoy your meal!” her zaman en sonda</text></svg>',
      steps: [
        { s: 'Adımları bağlayan sözcüklerle başlayalım. İlk adım: [[First, wash the rice.]]', on: '.q1' },
        { s: 'Sonraki adımlar [[Then]] ya da [[Next]] ile gelir: [[Then, chop the onion.]]', on: '.q2' },
        { s: '[[After that, fry them.]] Yani “bundan sonra kızart”.', on: '.q3' },
        { s: 'Son adım [[Finally]] ile gelir: [[Finally, serve it hot.]] Afiyet olsun cümlesi de hep en sondadır.', on: '.q4' }
      ] },

    { t: 'Tuzak: sözcüğe değil mantığa bak',
      steps: [
        { s: 'Şimdi burada dikkat et. Sıralama sorularında her adımda bu sözcükler olmayabilir. O zaman mutfak mantığını kullan.' },
        { s: 'Bir şey kızartılmadan önce doğranır. Kek fırına girmeden önce fırın ısıtılır: [[Preheat the oven.]]',
          h: '<div class="an-trap"><b>Mantık sırası:</b> yıka → soy → doğra → pişir (kızart / haşla / fırınla) → soğut → servis et</div>' },
        { s: '[[When the water boils]] diyen adım, suyun ocağa konduğu adımdan sonra gelir.' },
        { s: '[[Your meal is ready]] ya da [[Enjoy your meal!]] gördüğün an, o adım en sondadır.' }
      ] },

    { t: 'Pişirme fiilleri',
      base: '<div class="an-grid"><div class="rv v1"><b>chop</b>doğramak</div><div class="rv v1"><b>slice</b>dilimlemek</div><div class="rv v1"><b>grate</b>rendelemek</div>' +
        '<div class="rv v2"><b>boil</b>kaynatmak</div><div class="rv v2"><b>fry</b>kızartmak</div><div class="rv v2"><b>bake</b>fırında pişirmek</div>' +
        '<div class="rv v3"><b>stir</b>karıştırmak</div><div class="rv v3"><b>pour</b>dökmek</div><div class="rv v3"><b>beat / whisk</b>çırpmak</div>' +
        '<div class="rv v4"><b>peel</b>soymak</div><div class="rv v4"><b>squeeze</b>sıkmak</div><div class="rv v4"><b>sprinkle</b>serpmek</div></div>',
      steps: [
        { s: 'Hazırlık fiilleri: [[chop]] doğramak, [[slice]] dilimlemek, [[grate]] rendelemek.', on: '.v1' },
        { s: 'Pişirme yöntemleri: [[boil]] kaynatmak ya da haşlamak, [[fry]] yağda kızartmak, [[bake]] fırında pişirmek.', on: '.v2' },
        { s: '[[stir]] kaşıkla karıştırmak, [[pour]] dökmek, [[beat]] ya da [[whisk]] yumurtayı çırpmak.', on: '.v3' },
        { s: '[[peel]] kabuğunu soymak, [[squeeze]] limonu sıkmak, [[sprinkle]] de üstüne serpmek.', on: '.v4' }
      ] },

    { t: 'Mutfak aletleri ve iki tuzak',
      steps: [
        { s: 'Aletler: [[pot]] tencere, [[pan]] tava, [[oven]] fırın, [[bowl]] kâse, [[grater]] rende, [[kettle]] su ısıtıcısı.',
          h: '<table class="an-tbl"><tr class="rv u1"><td><b>pot</b> tencere</td><td>boil pasta, cook soup</td></tr>' +
             '<tr class="rv u1"><td><b>pan</b> tava</td><td>fry eggs</td></tr>' +
             '<tr class="rv u1"><td><b>oven</b> fırın</td><td>bake a cake</td></tr>' +
             '<tr class="rv u2"><td><b>grater</b> rende</td><td>grate cheese</td></tr>' +
             '<tr class="rv u2"><td><b>bowl</b> kâse</td><td>mix the flour and eggs in a bowl</td></tr></table>', on: '.u1' },
        { s: 'Derin olan [[pot]], içinde su kaynatırız. Sığ olan [[pan]], içinde yumurta kızartırız.' },
        { s: 'Fiil ile aleti karıştırma. [[grate]] rendelemek bir eylem, [[grater]] ise rendenin kendisi.', on: '.u2' },
        { s: '2025 LGS’de [[bowl]] ile [[boil]] yer değiştirmiş olarak soruldu. Yazılışları benzer, ama biri kâse, biri kaynatmak.',
          h: '<div class="an-trap"><b>bowl</b> = kâse (alet) &nbsp;·&nbsp; <b>boil</b> = kaynatmak (yöntem)</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p><b>How to make menemen</b></p><p>I. Chop the onions and peppers.<br>II. Add the tomatoes and eggs and stir.<br>III. Fry the onions and peppers in a pan with some oil.<br>IV. Serve it hot with fresh bread.</p><p>Which <b>two steps should change places</b> to make the recipe correct?</p>',
        c: ['I and II', 'II and III', 'III and IV', 'I and IV'], a: 'B',
        hint: 'Soğan ve biber domatesten önce mi kızartılır, sonra mı? Mantık sırasını düşün.',
        why: 'Önce doğrarız, sonra soğan ve biberi kızartırız, ardından domates ve yumurtayı ekleriz, en son servis ederiz. Yani ikinci ve üçüncü adımlar yer değiştirmeli.' },
      steps: [{ s: 'Mutfak mantığını kullanma zamanı.' }] },

    { t: 'Miktarlar',
      base: '<table class="an-tbl"><tr><th>Kalıp</th><th>Örnek</th></tr>' +
        '<tr class="rv m1"><td>a pinch of</td><td>a pinch of salt <small>(bir tutam)</small></td></tr>' +
        '<tr class="rv m1"><td>a clove of</td><td>two cloves of garlic <small>(diş)</small></td></tr>' +
        '<tr class="rv m2"><td>a slice of</td><td>a slice of bread <small>(dilim)</small></td></tr>' +
        '<tr class="rv m2"><td>a bunch of</td><td>a bunch of parsley <small>(demet)</small></td></tr>' +
        '<tr class="rv m3"><td>a cup / a glass of</td><td>a cup of flour <small>(su bardağı)</small></td></tr>' +
        '<tr class="rv m3"><td>a tablespoon / a teaspoon of</td><td>two tablespoons of oil</td></tr></table>',
      steps: [
        { s: 'Tariflerde miktarlar çok sık geçer. [[a pinch of salt]], bir tutam tuz. [[two cloves of garlic]], iki diş sarımsak.', on: '.m1' },
        { s: '[[a slice of bread]], bir dilim ekmek. [[a bunch of parsley]], bir demet maydanoz.', on: '.m2' },
        { s: '[[a cup of flour]], bir su bardağı un. [[two tablespoons of oil]], iki yemek kaşığı yağ.', on: '.m3' }
      ] },

    { t: 'Soruyu cevaptan bul',
      steps: [
        { s: 'Şimdi LGS’nin bir başka sevdiği soru. Diyalogda soru boştur, cevaba bakıp soruyu bulursun.' },
        { s: '[[How many]] sayılabilen şeyler için: [[How many eggs?]] Cevap [[Three]].',
          h: '<table class="an-tbl"><tr class="rv h1"><td><b>How many</b> eggs?</td><td>Three. / Not many.</td></tr>' +
             '<tr class="rv h2"><td><b>How much</b> sugar?</td><td>Two cups. / Not much.</td></tr>' +
             '<tr class="rv h3"><td><b>How long</b> does it take?</td><td>About 30 minutes.</td></tr>' +
             '<tr class="rv h4"><td><b>What does it taste like?</b></td><td>It’s sweet and a bit sour.</td></tr>' +
             '<tr class="rv h5"><td><b>How do you make it?</b></td><td>First, … Then, …</td></tr></table>', on: '.h1' },
        { s: '[[How much]] sayılamayanlar için: şeker, süt, un. [[How much sugar?]] Cevap [[Two cups]].', on: '.h2' },
        { s: '[[How long]] süreyi sorar. Cevapta [[About 30 minutes]] varsa soru budur.', on: '.h3' },
        { s: 'Tadı sormak için [[What does it taste like?]] Adımlar anlatılıyorsa da [[How do you make it?]]', on: '.h4,.h5' },
        { s: 'Bir de cevapta zaten verilmiş bilgiyi yeniden soran şık yanlıştır. Bunu da unutma.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p><b>Ayşe:</b> I’m making a carrot cake for the party. ______?<br><b>Emre:</b> About forty minutes. Don’t open the oven before that!</p><p>Which question completes the dialogue?</p>',
        c: ['How much flour do you need', 'How long does it take to bake', 'What does it taste like', 'How many carrots do you use'], a: 'B',
        hint: 'Cevap bir miktar mı, bir sayı mı, bir tat mı, yoksa bir süre mi?',
        why: '[[About forty minutes]] bir süredir. Süreyi soran kalıp [[How long]]. Doğru soru: [[How long does it take to bake?]]' },
      steps: [{ s: 'Cevabın türüne bak ve soruyu bul.' }] },

    { t: 'Tat sıfatları ve iki “acı”',
      base: '<div class="an-grid"><div class="rv z1"><b>sweet</b>tatlı · honey</div><div class="rv z1"><b>sour</b>ekşi · lemon</div><div class="rv z1"><b>salty</b>tuzlu</div><div class="rv z2"><b>spicy / hot</b>biber acısı</div><div class="rv z2"><b>bitter</b>kahve, ilaç acısı</div><div class="rv z3"><b>delicious</b>lezzetli</div></div>',
      steps: [
        { s: 'Tatlar: [[sweet]] tatlı, [[sour]] ekşi, [[salty]] tuzlu.', on: '.z1' },
        { s: 'Burada dikkat. Türkçedeki “acı” İngilizcede ikiye ayrılır. Biberin acısı [[spicy]] ya da [[hot]].', on: '.z2' },
        { s: 'Şekersiz kahvenin, ilacın acısı ise [[bitter]]. Limonata çok ekşiyse kelime [[sour]] olur.' },
        { s: 'Ve genel yorumlar: [[delicious]] ya da [[tasty]] lezzetli, [[disgusting]] iğrenç.', on: '.z3' }
      ] },

    { t: 'Edilgen yapı ile süreç',
      steps: [
        { s: 'Tarif anlatırken işi kimin yaptığı önemli değildir. Bu yüzden edilgen yapı kullanılır.',
          h: '<div class="an-rule"><b>Nesne + is / are + V3</b></div>' },
        { s: '[[We wash the tomatoes]] cümlesi [[The tomatoes are washed]] olur. Domatesler çoğul, o yüzden [[are]].',
          h: '<table class="an-tbl"><tr class="rv e1"><td>We wash the tomatoes.</td><td>The tomatoes <b>are washed</b>.</td></tr>' +
             '<tr class="rv e2"><td>We add some salt.</td><td>Some salt <b>is added</b>.</td></tr>' +
             '<tr class="rv e3"><td>We bake the cake.</td><td>The cake <b>is baked</b>.</td></tr></table>', on: '.e1' },
        { s: 'Tuz sayılamaz, o yüzden [[Some salt is added]]. Un, süt, şeker, yağ da hep [[is]] alır.', on: '.e2' },
        { s: 'Tekil isimler de [[is]] alır: [[The cake is baked for forty minutes.]]', on: '.e3' },
        { s: 'Düzensiz fiillere dikkat: [[put]], [[cut]] aynı kalır; [[eat]] ise [[eaten]], [[make]] ise [[made]] olur.',
          h: '<div class="an-trap">“Some cheese <span class="an-bad-t">are</span> put…” ✗ → cheese sayılamaz → <b>is</b> ✓</div>' }
      ] },

    { t: 'Tarif kartı hesapları',
      steps: [
        { s: 'Son olarak tarif kartı hesapları. [[Serves 4]] dört kişilik demek. Sekiz kişi için her şey iki katına çıkar.',
          h: '<div class="an-ex"><span class="an-l"><b>Serves 4:</b> 3 eggs, 2 cups of flour</span><span class="an-l">8 kişi → 6 eggs, 4 cups of flour</span><span class="an-l">2 kişi → yarısı (half a cup)</span></div>' },
        { s: 'Toplam süre, hazırlık süresi artı pişirme süresidir. Servisten önce soğuma süresi varsa onu da ekle.',
          h: '<div class="an-rule"><b>prep time + cooking time (+ let it cool)</b> = toplam</div>' },
        { s: 'Ama metin [[While the oven is preheating]] diyorsa iki iş aynı anda yapılıyordur. O süreler toplanmaz.',
          h: '<div class="an-trap"><b>While…</b> = aynı anda → süreleri toplama!</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p><b>Apple Pie</b> — Serves 6<br>Prep time: 15 minutes · Baking time: 30 minutes<br>Let it cool for 10 minutes before serving.</p><p>Selin starts preparing the pie at <b>4:00 p.m.</b> When can she serve it?</p>',
        c: ['At 4:30 p.m.', 'At 4:45 p.m.', 'At 4:55 p.m.', 'At 5:05 p.m.'], a: 'C',
        hint: 'Üç süreyi topla: hazırlık, pişirme ve soğuma. Hiçbiri aynı anda yapılmıyor.',
        why: 'On beş artı otuz artı on, toplam elli beş dakika. Saat dörtten elli beş dakika sonra, yani dördü elli beş geçe servis eder.' },
      steps: [{ s: 'Biraz hesap yapalım. Soğuma süresini unutma.' }] },

    { t: 'Akılda kalsın',
      steps: [
        { s: 'Toparlayalım. Sıralamada sözcüklere ve mutfak mantığına bak; servis her zaman en sonda.' },
        { s: '[[pot]] tencere, [[pan]] tava. [[grate]] fiil, [[grater]] alet. [[bowl]] kâse, [[boil]] kaynatmak.' },
        { s: 'Soruyu cevaptan bul: süre [[How long]], sayılamayan [[How much]], sayılabilen [[How many]].' },
        { s: 'Biber acısı [[spicy]], kahve acısı [[bitter]]. Edilgende sayılamayan isim [[is]] alır. Ellerine sağlık, bu ünite de tamam!' }
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
  (window.LGS_AN = window.LGS_AN || {})['ing-kitchen'] = L;
})();
