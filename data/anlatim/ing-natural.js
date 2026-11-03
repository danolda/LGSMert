/* Adım Adım Anlatım · İngilizce · 10. Ünite Natural Forces (biçim: tools/ANLATIM.md)
   Altyazıdaki [[...]] İngilizce bölümdür → <i lang="en">…</i>; tools/anlatim_ses.py İngilizce sesle okur. */
(function () {
  var L = {
  title: 'Natural Forces: Doğal Afetler ve Tahminler',
  desc: 'Doğal afet adları ve tanımları, karıştırılan ikililer, afet fiilleri, depremden önce–sırasında–sonra, afet çantası, will / might / be going to ile tahmin, because / because of / so ile neden–sonuç ve küresel ısınma.',
  ozet: [
    'earthquake · tsunami (çoğunlukla deniz altı depreminden) · flood ↔ <b>drought</b> (uzun süre yağmursuzluk) · landslide (toprak, çamur, kaya) ↔ <b>avalanche</b> (kar) · hurricane (okyanus, büyük, günlerce) ↔ tornado (kara, küçük, dakikalar) · wildfire.',
    'Afet fiilleri: shake–shook, collapse, destroy, erupt, spread, hit–hit, strike–struck, survive (survivor), rescue, evacuate.',
    'Deprem sırasında: <b>Drop, Cover, Hold on</b>. Pencerelerden uzak dur, asansör kullanma, sarsıntı sürerken dışarı koşma. Sonra merdivenle çık, toplanma alanına git.',
    'Afet çantası: bottled water, canned food, torch + batteries, whistle (enkazda sesini duyurmak), first aid kit, battery radio.',
    'Tahmin: will definitely (100%) › will probably (≈80%) › might / may / could (≈50%) › probably won’t › definitely won’t. be going to = şu anki kanıta dayalı (Look at those clouds! It’s going to rain).',
    '<b>because</b> + cümle · <b>because of / due to</b> + isim · <b>so</b> / as a result + sonuç · cause / lead to + sonuç.',
    'Bu üniteden 2018–2026 LGS’lerinde soru gelmedi; becerileri (afiş, grafik, diyalog, tahmin, neden–sonuç) diğer ünite sorularında da işe yarar.'
  ],
  scenes: [
    { t: 'Natural Forces ünitesine giriş',
      steps: [
        { s: 'Onuncu ve son ünite [[Natural Forces]], yani doğal güçler. Doğal afetler, afete hazırlık, tahminler ve neden sonuç ilişkisi.',
          h: '<div class="an-grid"><div><b>Afetler</b>earthquake, flood, drought</div><div><b>Hazırlık</b>Drop, Cover, Hold on</div><div><b>Tahmin</b>will, might, going to</div></div>' },
        { s: 'Dürüst olalım: 2018 ile 2026 arasındaki LGS’lerde bu üniteden hiç soru gelmedi. Ama buradaki beceriler diğer sorularda da işine yarar.',
          h: '<div class="an-tip">Bu üniteden çıkmış soru yok; LGS 2027 kapsamı için MEB’in o yılki duyurusuna bakmak gerekir.</div>' }
      ] },

    { t: 'Doğal afetler',
      base: '<div class="an-grid"><div class="rv g1"><b>Under the ground</b>earthquake · volcanic eruption · tsunami · landslide</div><div class="rv g2"><b>Wind & storms</b>hurricane · tornado · thunderstorm · blizzard</div><div class="rv g3"><b>Water & fire</b>flood · drought · heatwave · avalanche · wildfire</div></div>',
      steps: [
        { s: 'Yerin altından gelenler: [[earthquake]] deprem, [[volcanic eruption]] yanardağ patlaması, [[tsunami]] ve [[landslide]] heyelan.', on: '.g1' },
        { s: 'Rüzgâr ve fırtınalar: [[hurricane]] kasırga, [[tornado]] hortum, [[thunderstorm]] gök gürültülü fırtına, [[blizzard]] tipi.', on: '.g2' },
        { s: 'Su ve ateş: [[flood]] sel, [[drought]] kuraklık, [[heatwave]] sıcak hava dalgası, [[avalanche]] çığ, [[wildfire]] orman yangını.', on: '.g3' }
      ] },

    { t: 'Tanımlardan afeti bul',
      base: '<table class="an-tbl"><tr><th>Word</th><th>İngilizce tanım</th></tr>' +
        '<tr class="rv d1"><td><b>earthquake</b></td><td>a sudden shaking of the ground</td></tr>' +
        '<tr class="rv d2"><td><b>tsunami</b></td><td>huge sea waves, usually caused by an earthquake under the sea</td></tr>' +
        '<tr class="rv d3"><td><b>flood</b></td><td>a lot of water covers land that is usually dry</td></tr>' +
        '<tr class="rv d4"><td><b>drought</b></td><td>a long period with little or no rain</td></tr>' +
        '<tr class="rv d5"><td><b>avalanche</b></td><td>a large mass of snow falls down a mountain</td></tr></table>',
      steps: [
        { s: 'Sorular kelimeyi değil, tanımını verebilir. [[An earthquake is a sudden shaking of the ground.]]', on: '.d1' },
        { s: '[[A tsunami is huge sea waves, usually caused by an earthquake under the sea.]]', on: '.d2' },
        { s: '[[A flood]]: normalde kuru olan karayı çok fazla su kaplar.', on: '.d3' },
        { s: '[[A drought]]: çok az ya da hiç yağmur yağmayan uzun bir dönem.', on: '.d4' },
        { s: '[[An avalanche]]: büyük bir kar kütlesinin dağdan aşağı kayması.', on: '.d5' }
      ] },

    { t: 'Karıştırılan ikililer',
      steps: [
        { s: 'Şimdi dikkat. Çığ ve heyelan karışır. [[Avalanche]] karın kaymasıdır, [[landslide]] ise toprak, çamur ve kayanın.',
          h: '<table class="an-tbl"><tr class="rv k1"><td><b>avalanche</b> = kar kayar</td><td><b>landslide</b> = toprak, çamur, kaya kayar</td></tr>' +
             '<tr class="rv k2"><td><b>hurricane</b> = okyanusta, çok büyük, günlerce</td><td><b>tornado</b> = karada, küçük, dakikalar</td></tr>' +
             '<tr class="rv k3"><td><b>flood</b> = çok fazla su</td><td><b>drought</b> = susuzluk</td></tr></table>', on: '.k1' },
        { s: '[[Hurricane]] sıcak okyanus üzerinde oluşur, çok büyüktür ve günlerce sürer. [[Tornado]] genelde karada, küçük ve kısa süreli.', on: '.k2' },
        { s: '[[Flood]] çok fazla su, [[drought]] ise susuzluk. [[The river dried up]] ya da [[crops died]] görürsen bu kuraklık.', on: '.k3' },
        { s: 'Ve [[tsunami]] bir sonuçtur. Sebebi genellikle deniz altındaki depremdir.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p><b>News:</b> There has been no rain in the region for eight months. The rivers dried up and most of the crops died. Farmers are worried about the coming year.</p><p>Which natural disaster is the news about?</p>',
        c: ['Flood', 'Drought', 'Avalanche', 'Landslide'], a: 'B',
        hint: 'Aylardır yağmur yok, nehirler kurumuş. Bu çok su mu, yoksa susuzluk mu?',
        why: 'Sekiz aydır yağmur yok, nehirler kurumuş ve ürünler ölmüş. Bu uzun süreli yağmursuzluk, yani [[drought]].' },
      steps: [{ s: 'Haberin anahtar ifadelerini bul.' }] },

    { t: 'Afet fiilleri ve geçmiş zaman',
      steps: [
        { s: 'Haberler ve tanık anlatımları geçmiş zamandadır. [[The earthquake happened at 4 a.m. The ground shook for forty seconds.]]',
          h: '<div class="an-ex"><span class="an-l">The ground <b>shook</b> for 40 seconds.</span><span class="an-l">Some old buildings <b>collapsed</b>.</span><span class="an-l">Rescue teams <b>found</b> survivors under the ruins.</span></div>' },
        { s: '[[Some old buildings collapsed.]] [[Rescue teams found survivors under the ruins.]]' },
        { s: 'Önemli fiiller: [[collapse]] çökmek, [[destroy]] yok etmek, [[rescue]] kurtarmak, [[evacuate]] tahliye etmek, [[survive]] hayatta kalmak.',
          h: '<table class="an-tbl"><tr><td>shake → <b>shook</b></td><td>strike → <b>struck</b></td><td>hit → <b>hit</b></td></tr><tr><td>spread → <b>spread</b></td><td>fall → <b>fell</b></td><td>blow → <b>blew</b></td></tr></table>' },
        { s: 'Düzensiz geçmiş hâller: [[shake, shook]], [[strike, struck]], [[fall, fell]], [[blow, blew]].' }
      ] },

    { t: 'Depremden önce, sırasında, sonra',
      base: '<table class="an-tbl"><tr><th>BEFORE</th><th>DURING</th><th>AFTER</th></tr>' +
        '<tr><td class="rv e1">Prepare an emergency kit.<br>Fix heavy furniture to the walls.<br>Learn your assembly area.</td>' +
        '<td class="rv e2"><b>Drop · Cover · Hold on</b><br>Stay away from windows.<br>Don’t use the elevator.</td>' +
        '<td class="rv e3">Check for injuries.<br>Use the stairs.<br>Go to the assembly area.</td></tr></table>',
      steps: [
        { s: 'Depremden önce: [[Prepare an emergency kit.]] [[Fix heavy furniture to the walls.]] Toplanma alanını öğren.', on: '.e1' },
        { s: 'Deprem sırasında üç kelime: [[Drop, Cover, Hold on.]] Yere çök, başını koru, tutun.', on: '.e2', mk: '.e2' },
        { s: 'Pencerelerden uzak dur: [[Stay away from windows.]] Ve asla [[Don’t use the elevator.]]' },
        { s: 'Sonra: yaralı var mı kontrol et, merdivenle dikkatlice çık ve toplanma alanına git.', on: '.e3' },
        { s: 'Burada tuzak: “hemen merdivenden aşağı koş” gibi aceleci şıklar yanlıştır. Sarsıntı bitene kadar [[Drop, Cover, Hold on.]]',
          h: '<div class="an-trap">Sarsıntı sürerken <span class="an-bad-t">Run outside!</span> ✗ · <span class="an-bad-t">Use the lift!</span> ✗ → <b>Drop, Cover, Hold on</b> ✓</div>' }
      ] },

    { t: 'Afet çantası',
      steps: [
        { s: 'Afet çantasında neler olmalı? Su ve konserve: [[bottled water]], [[canned food]].',
          h: '<table class="an-tbl"><tr class="rv c1"><td>bottled water · canned food</td><td>yeme-içme</td></tr>' +
             '<tr class="rv c2"><td>torch + extra batteries · power bank</td><td>karanlıkta görmek, şarj</td></tr>' +
             '<tr class="rv c3"><td><b>whistle</b></td><td>enkaz altında sesini duyurmak</td></tr>' +
             '<tr class="rv c4"><td>first aid kit · battery radio · blanket</td><td>ilk yardım, haberler, ısınma</td></tr></table>', on: '.c1' },
        { s: 'El feneri ve yedek pil: [[a torch and extra batteries]].', on: '.c2' },
        { s: 'Düdük, yani [[whistle]]. Neden? Enkaz altında kalırsan kurtarma ekiplerine sesini duyurmak için.', on: '.c3', mk: '.c3 td' },
        { s: 'Bir de [[first aid kit]] ilk yardım çantası, pilli radyo ve battaniye. Türkiye’de acil çağrı numarası yüz on iki.', on: '.c4' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p><b>EARTHQUAKE SAFETY</b> — What should you do <b>during</b> an earthquake?</p><p>Which of the following is <b>NOT</b> correct advice?</p>',
        c: ['Drop, cover and hold on.', 'Stay away from windows and glass.', 'Use the elevator to leave the building quickly.', 'Protect your head and neck.'], a: 'C',
        hint: 'Deprem sırasında asla kullanılmaması gereken şey ne?',
        why: 'Deprem sırasında asansör kesinlikle kullanılmaz; elektrik kesilebilir ve asansörde mahsur kalabilirsin. Diğer üç öneri doğru.' },
      steps: [{ s: 'Güvenlik kurallarını hatırla.' }] },

    { t: 'Tahminde bulunmak',
      base: '<svg class="an-svg" viewBox="0 0 340 196" role="img" aria-label="Kesinlik ölçeği">' +
        '<rect x="96" y="6" width="234" height="26" rx="6" class="boxa rv p1"/><text x="6" y="24" font-size="13" font-weight="700" class="rv p1">100%</text><text x="104" y="24" font-size="13" font-weight="700" class="rv p1">will definitely</text>' +
        '<rect x="96" y="42" width="188" height="26" rx="6" class="box rv p2"/><text x="6" y="60" font-size="13" font-weight="700" class="rv p2">≈80%</text><text x="104" y="60" font-size="13" font-weight="700" class="rv p2">will probably · I think … will</text>' +
        '<rect x="96" y="78" width="118" height="26" rx="6" class="box rv p3"/><text x="6" y="96" font-size="13" font-weight="700" class="rv p3">≈50%</text><text x="104" y="96" font-size="13" font-weight="700" class="rv p3">might · may · could</text>' +
        '<rect x="96" y="114" width="60" height="26" rx="6" class="box rv p4"/><text x="6" y="132" font-size="13" font-weight="700" class="rv p4">≈20%</text><text x="162" y="132" font-size="13" font-weight="700" class="rv p4">probably won’t</text>' +
        '<text x="6" y="168" font-size="13" font-weight="700" class="rv p5">0%</text><text x="104" y="168" font-size="13" font-weight="700" class="rv p5">definitely won’t · No way!</text></svg>',
      steps: [
        { s: 'Gelecekle ilgili tahminlerde ne kadar emin olduğumuzu da söyleriz. Yüzde yüz emin: [[It will definitely rain.]]', on: '.p1' },
        { s: 'Yaklaşık yüzde seksen: [[It will probably rain.]] ya da [[I think it will rain.]]', on: '.p2' },
        { s: 'Yarı yarıya, yani belki: [[It might snow tonight.]] [[may]] ve [[could]] de aynı.', on: '.p3' },
        { s: 'Pek sanmıyorum: [[It probably won’t rain.]] ya da [[I doubt it.]]', on: '.p4' },
        { s: 'Ve kesinlikle hayır: [[It definitely won’t happen.]]', on: '.p5' },
        { s: 'Bir de şu anki kanıta dayalı tahmin: [[Look at those black clouds! It’s going to rain.]] Burada [[be going to]] kullanılır.',
          h: '<div class="an-trap"><b>probably</b> olumluda will’den sonra (will probably), olumsuzda won’t’tan önce gelir (probably won’t).</div>' }
      ] },

    { t: 'Neden ve sonuç',
      steps: [
        { s: 'Neden bildirirken [[because]] ve arkasından bir cümle: [[The roads were closed because it snowed heavily.]]',
          h: '<table class="an-tbl"><tr class="rv n1"><td><b>because</b> + cümle</td><td>…because it snowed heavily.</td></tr>' +
             '<tr class="rv n2"><td><b>because of / due to</b> + isim</td><td>…because of the heavy snow.</td></tr>' +
             '<tr class="rv n3"><td><b>so / as a result</b> + sonuç</td><td>It snowed heavily, so the roads were closed.</td></tr>' +
             '<tr class="rv n4"><td><b>cause / lead to</b> + sonuç</td><td>Heavy rain can cause floods.</td></tr></table>', on: '.n1' },
        { s: 'Arkasından sadece bir isim geliyorsa [[because of]] ya da [[due to]]: [[because of the heavy snow]].', on: '.n2' },
        { s: '[[So]] ise sonucun önüne gelir: [[It snowed heavily, so the roads were closed.]]', on: '.n3' },
        { s: 'Ve [[cause]], [[lead to]]: [[Heavy rain can cause floods.]] [[Global warming leads to droughts.]]', on: '.n4' },
        { s: 'Kısacası boşluktan sonra cümle mi var, isim mi? Buna bak.',
          h: '<div class="an-trap">Boşluktan sonra <b>isim</b> (the storm, the flood) → <b>because of / due to</b>, “because” değil!</div>' }
      ] },

    { t: 'Küresel ısınma zinciri',
      base: '<svg class="an-svg" viewBox="0 0 340 222" role="img" aria-label="İklim değişikliği neden sonuç zinciri">' +
        '<rect x="30" y="4" width="280" height="30" rx="8" class="box rv z1"/><text x="170" y="24" font-size="13" font-weight="700" text-anchor="middle" class="rv z1">Burning fossil fuels</text>' +
        '<path class="st dr z2" d="M170 36 L170 50"/>' +
        '<rect x="30" y="52" width="280" height="30" rx="8" class="box rv z2"/><text x="170" y="72" font-size="13" font-weight="700" text-anchor="middle" class="rv z2">More greenhouse gases</text>' +
        '<path class="st dr z3" d="M170 84 L170 98"/>' +
        '<rect x="30" y="100" width="280" height="30" rx="8" class="boxa rv z3"/><text x="170" y="120" font-size="13" font-weight="700" text-anchor="middle" class="rv z3">Global warming</text>' +
        '<path class="st dr z4" d="M170 132 L170 146"/>' +
        '<rect x="30" y="148" width="280" height="30" rx="8" class="box rv z4"/><text x="170" y="168" font-size="13" font-weight="700" text-anchor="middle" class="rv z4">Ice melts → sea levels rise</text>' +
        '<text x="170" y="204" font-size="12" text-anchor="middle" class="mut rv z5">+ heatwaves, droughts, wildfires, stronger storms</text></svg>',
      steps: [
        { s: 'İklim değişikliği bir neden sonuç zinciridir. Fosil yakıtlar yakılır: [[burning fossil fuels]].', on: '.z1' },
        { s: 'Sera gazları artar: [[more greenhouse gases]].', on: '.z2' },
        { s: 'Dünya ısınır: [[global warming]].', on: '.z3' },
        { s: 'Buzullar erir ve deniz seviyesi yükselir: [[Sea levels rise.]]', on: '.z4' },
        { s: 'Sonuçlar: sıcak hava dalgaları, kuraklık, orman yangınları ve daha güçlü fırtınalar. Çözüm: enerji tasarrufu, toplu taşıma, geri dönüşüm, ağaç dikmek.', on: '.z5' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>The school trip was cancelled ______ the heavy storm.</p><p>Which one completes the sentence?</p>',
        c: ['because', 'because of', 'so', 'as a result'], a: 'B',
        hint: 'Boşluktan sonra bir cümle mi var, yoksa sadece bir isim mi?',
        why: 'Boşluktan sonra [[the heavy storm]], yani sadece bir isim var. İsimden önce [[because of]] gelir. [[Because]] cümle ister, [[so]] ise sonucun önüne gelir.' },
      steps: [{ s: 'Son soru. Boşluktan sonrasına bak.' }] },

    { t: 'Akılda kalsın',
      steps: [
        { s: 'Toparlayalım. [[Drought]] kuraklık, [[flood]] sel. [[Avalanche]] kar, [[landslide]] toprak kayar.' },
        { s: 'Deprem sırasında [[Drop, Cover, Hold on]], asansör yok. Düdük enkaz altında sesini duyurmak için.' },
        { s: '[[Will definitely]] kesin, [[might]] belki, [[be going to]] kanıta dayalı tahmin.' },
        { s: 'İsimden önce [[because of]], cümleden önce [[because]]. Ve tebrikler, İngilizcenin on ünitesini de bitirdin!' }
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
  (window.LGS_AN = window.LGS_AN || {})['ing-natural'] = L;
})();
