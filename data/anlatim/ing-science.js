/* Adım Adım Anlatım · İngilizce · 9. Ünite Science (biçim: tools/ANLATIM.md)
   Altyazıdaki [[...]] İngilizce bölümdür → <i lang="en">…</i>; tools/anlatim_ses.py İngilizce sesle okur. */
(function () {
  var L = {
  title: 'Science: İcatlar, Keşifler ve Deneyler',
  desc: 'Bilim dalları ve bilim insanları, invent ↔ discover, kelime aileleri, laboratuvar ve bilimsel yöntem, edilgen yapı (is / was + V3), icat–tarih mantığı, biyografi okuma ve diyalogda soru bulma.',
  ozet: [
    'physics → <b>physicist</b> (fizikçi); <b>physician</b> = doktor. astronomy (gökbilim) ≠ astrology.',
    '<b>invent</b> = daha önce olmayanı yapmak (telephone, light bulb) · <b>discover</b> = var olanı ilk kez bulmak (gravity, penicillin, X-rays).',
    'invent → invention (şey) → inventor (kişi) · discover → discovery · achieve → achievement · research → researcher.',
    'Bilimsel yöntem: question → hypothesis (deneyden önce tahmin) → experiment → observe &amp; record → conclusion.',
    'Edilgen: is / are + V3 (süreç, tarif) · was / were + V3 (geçmiş tarih) · by + yapan. Penicillin <b>was discovered</b> by Fleming in 1928.',
    'Tarih mantığı: ölüm yılı &lt; icat yılı ise o icadı kullanamazdı.',
    'Biyografi: Personal life · Education · Career · Achievements. “NOT mentioned” sorusunda açıkça yazmayan bilgi aranır.',
    'Diyalogda soruyu cevaptan bul: isim → Who · yıl → When · Because → Why · Now, we have to… → şu anki adım.'
  ],
  scenes: [
    { t: 'Science ünitesine giriş',
      steps: [
        { s: 'Dokuzuncu ünite [[Science]]. İcatlar, keşifler, bilim insanlarının hayatları ve deneyler.',
          h: '<div class="an-grid"><div><b>Bilim insanları</b>biyografi okuma</div><div><b>İcat & keşif</b>invent / discover</div><div><b>Deney</b>süreç, edilgen yapı</div></div>' },
        { s: 'LGS bu üniteden genelde biyografi metni, icat tarih tablosu ve deney diyaloğu soruyor. Hepsini adım adım göreceğiz.' }
      ] },

    { t: 'Bilim dalları ve bilim insanları',
      base: '<table class="an-tbl"><tr><th>Bilim dalı</th><th>Kişi</th><th>Ne inceler?</th></tr>' +
        '<tr class="rv b1"><td>biology</td><td>biologist</td><td>canlılar, hücreler</td></tr>' +
        '<tr class="rv b1"><td>chemistry</td><td>chemist</td><td>maddeler, tepkimeler</td></tr>' +
        '<tr class="rv b2"><td>physics</td><td><b>physicist</b></td><td>kuvvet, enerji, ışık</td></tr>' +
        '<tr class="rv b3"><td>astronomy</td><td>astronomer</td><td>yıldızlar, gezegenler</td></tr>' +
        '<tr class="rv b3"><td>geology</td><td>geologist</td><td>kayaçlar, depremler</td></tr></table>',
      steps: [
        { s: 'Biyoloji [[biology]], biyolog [[biologist]]. Kimya [[chemistry]], kimyager [[chemist]].', on: '.b1' },
        { s: 'Fizik [[physics]], fizikçi [[physicist]]. Burada çok dikkat: [[physician]] fizikçi değil, doktor demek!', on: '.b2',
          h: '<div class="an-trap"><b>physicist</b> = fizikçi · <b>physician</b> = doktor · <b>astronomy</b> (gökbilim) ≠ astrology (burç falı)</div>' },
        { s: 'Gökbilim [[astronomy]], gökbilimci [[astronomer]]. Jeoloji [[geology]], depremleri ve kayaçları inceler.', on: '.b3' },
        { s: 'Yıldızları izlemeyi seven biri [[astronomer]] olmak ister. Kişiyi gösteren ekler: [[ist]], [[er]], [[ian]].' }
      ] },

    { t: 'Kim, ne iş yapar?',
      steps: [{ s: 'Bilim insanlarını Türkçe karşılıklarıyla eşleştir. Benzer yazılan iki kelimeye çok dikkat!' }],
      ia: { tip: 'eslestir', q: '<p>Her kelimeyi Türkçe karşılığıyla eşleştir.</p>', solBaslik: 'Kelime', sagBaslik: 'Türkçesi',
        sol: ['physicist', 'physician', 'chemist', 'astronomer', 'biologist'],
        sag: ['fizikçi', 'doktor', 'kimyager', 'gökbilimci', 'biyolog'],
        hint: '[[Physicist]] ile [[physician]] benzer yazılır ama biri fizikle uğraşır, öteki hasta tedavi eder.',
        why: '[[Physicist]] fizikçi, [[physician]] doktor, [[chemist]] kimyager, [[astronomer]] gökbilimci, [[biologist]] biyolog.' } },

    { t: 'invent mi, discover mı?',
      base: '<svg class="an-svg" viewBox="0 0 340 196" role="img" aria-label="Invent: olmayanı yapmak; discover: var olanı bulmak">' +
        '<rect x="4" y="6" width="160" height="184" rx="12" class="boxa rv i1"/>' +
        '<text x="84" y="32" font-size="15" font-weight="700" text-anchor="middle" class="acc rv i1">INVENT</text>' +
        '<text x="84" y="52" font-size="12" text-anchor="middle" class="rv i1">daha önce OLMAYANI</text>' +
        '<text x="84" y="68" font-size="12" text-anchor="middle" class="rv i1">yapmak</text>' +
        '<text x="84" y="98" font-size="12.5" text-anchor="middle" class="rv i1">the telephone</text><text x="84" y="116" font-size="12.5" text-anchor="middle" class="rv i1">the light bulb</text><text x="84" y="134" font-size="12.5" text-anchor="middle" class="rv i1">the airplane</text>' +
        '<text x="84" y="170" font-size="11.5" text-anchor="middle" class="mut rv i1">Bell invented the telephone.</text>' +
        '<rect x="176" y="6" width="160" height="184" rx="12" class="box rv i2"/>' +
        '<text x="256" y="32" font-size="15" font-weight="700" text-anchor="middle" class="rv i2">DISCOVER</text>' +
        '<text x="256" y="52" font-size="12" text-anchor="middle" class="rv i2">ZATEN VAR OLANI</text>' +
        '<text x="256" y="68" font-size="12" text-anchor="middle" class="rv i2">ilk kez bulmak</text>' +
        '<text x="256" y="98" font-size="12.5" text-anchor="middle" class="rv i2">gravity</text><text x="256" y="116" font-size="12.5" text-anchor="middle" class="rv i2">penicillin</text><text x="256" y="134" font-size="12.5" text-anchor="middle" class="rv i2">X-rays</text>' +
        '<text x="256" y="170" font-size="11.5" text-anchor="middle" class="mut rv i2">Newton discovered gravity.</text></svg>',
      steps: [
        { s: 'Bu ünitenin en önemli ayrımı. [[Invent]], daha önce hiç olmayan bir şeyi yapmak: telefon, ampul, uçak. [[Bell invented the telephone.]]', on: '.i1' },
        { s: '[[Discover]] ise doğada zaten var olan bir şeyi ilk kez bulmak: yer çekimi, penisilin, röntgen ışınları. [[Newton discovered gravity.]]', on: '.i2' },
        { s: 'Yani [[Newton invented gravity]] yanlıştır. Yer çekimi zaten vardı. Ateş de icat edilmedi, keşfedildi.' }
      ] },

    { t: 'İcat mı, keşif mi?',
      steps: [{ s: 'Dokuz şeyi iki kutuya ayır: insanlar onu icat mi etti, yoksa doğada zaten vardı da keşif mi edildi?' }],
      ia: { tip: 'grup', q: '<p>Her birini doğru kutuya yerleştir.</p>', gruplar: ['invented', 'discovered'],
        ogeler: [{ m: 'the telephone', g: 0 }, { m: 'the light bulb', g: 0 }, { m: 'the airplane', g: 0 }, { m: 'the printing press', g: 0 },
          { m: 'gravity', g: 1 }, { m: 'penicillin', g: 1 }, { m: 'X-rays', g: 1 }, { m: 'radium', g: 1 }, { m: 'fire', g: 1 }],
        hint: 'Kendine sor: bu şey insanlardan önce de doğada var mıydı? Varsa bulunmuştur; yoksa yapılmıştır.',
        why: 'Telefon, ampul, uçak ve matbaa daha önce yoktu: [[invented]]. Yer çekimi, penisilin, röntgen ışınları, radyum ve ateş zaten vardı: [[discovered]].' } },

    { t: 'Kelime aileleri',
      steps: [
        { s: 'Boşluk doldurmada kelimenin türüne de bakılır. Fiil, şey ve kişi hâllerini öğrenelim.',
          h: '<table class="an-tbl"><tr><th>Fiil</th><th>Şey</th><th>Kişi</th></tr>' +
             '<tr class="rv w1"><td>invent</td><td>invention</td><td>inventor</td></tr>' +
             '<tr class="rv w2"><td>discover</td><td>discovery</td><td>discoverer</td></tr>' +
             '<tr class="rv w3"><td>achieve</td><td>achievement</td><td>—</td></tr>' +
             '<tr class="rv w3"><td>research</td><td>research</td><td>researcher</td></tr>' +
             '<tr class="rv w3"><td>—</td><td>science</td><td>scientist</td></tr></table>' },
        { s: '[[invent]], [[invention]], [[inventor]]: icat etmek, icat, mucit.', on: '.w1' },
        { s: '[[discover]], [[discovery]]: keşfetmek, keşif.', on: '.w2' },
        { s: '[[achieve]], [[achievement]]: başarmak, başarı. [[research]], [[researcher]]: araştırma, araştırmacı. [[science]], [[scientist]].', on: '.w3' },
        { s: 'Örnek: [[a great inventor]] bir kişi, [[his most famous invention]] bir şey, [[a big achievement]] bir başarı.' }
      ] },

    { t: 'Kelime ailesini tamamla',
      steps: [{ s: 'Üç boşluğu doldur. Boşluğa bir kişi mi, bir şey mi, yoksa bir fiil mi gelmeli? Ona bak.' }],
      ia: { tip: 'bosluk', q: '<p>Cümleleri doğru kelimeyle tamamla.</p>',
        metin: 'Edison was a great [_].<br>The light bulb was his most famous [_].<br>Winning the Nobel Prize is a big [_].',
        secenek: ['inventor', 'invention', 'invent', 'achievement', 'achieve', 'discover'], cevap: ['inventor', 'invention', 'achievement'],
        hint: '[[A great]] ve [[his most famous]] ifadelerinden sonra fiil gelmez. Kişi bildiren ek hangisi, şey bildiren ek hangisi?',
        why: 'Edison bir kişi: [[inventor]], yani mucit. Ampul bir şey: [[invention]], yani icat. Nobel kazanmak bir başarı: [[achievement]].' } },

    { t: 'Ara soru', cp: {
        q: '<p>Alexander Graham Bell ______ the telephone in 1876, and Marie Curie ______ radium in 1898.</p><p>Which words complete the sentence?</p>',
        c: ['discovered / invented', 'invented / discovered', 'invented / invented', 'discovered / discovered'], a: 'B',
        hint: 'Telefon doğada var mıydı? Radyum bir element; doğada zaten var mıydı?',
        why: 'Telefon daha önce yoktu, Bell onu icat etti: [[invented]]. Radyum doğada zaten vardı, Curie onu keşfetti: [[discovered]].' },
      steps: [{ s: 'Olmayan mı yapıldı, var olan mı bulundu? Karar ver.' }] },

    { t: 'Laboratuvar ve bilimsel yöntem',
      base: '<svg class="an-svg" viewBox="0 0 340 214" role="img" aria-label="Bilimsel yöntemin beş adımı">' +
        '<rect x="6" y="4" width="328" height="34" rx="9" class="box rv y1"/><text x="16" y="26" font-size="13.5" font-weight="700" class="rv y1">1. Ask a question</text>' +
        '<rect x="6" y="46" width="328" height="34" rx="9" class="boxa rv y2"/><text x="16" y="68" font-size="13.5" font-weight="700" class="rv y2">2. Make a hypothesis <tspan class="mut" font-weight="400">(tahmin)</tspan></text>' +
        '<rect x="6" y="88" width="328" height="34" rx="9" class="box rv y3"/><text x="16" y="110" font-size="13.5" font-weight="700" class="rv y3">3. Do an experiment</text>' +
        '<rect x="6" y="130" width="328" height="34" rx="9" class="box rv y4"/><text x="16" y="152" font-size="13.5" font-weight="700" class="rv y4">4. Observe and record results</text>' +
        '<rect x="6" y="172" width="328" height="34" rx="9" class="box rv y5"/><text x="16" y="194" font-size="13.5" font-weight="700" class="rv y5">5. Draw a conclusion</text></svg>',
      steps: [
        { s: 'Laboratuvar kelimeleri: [[microscope]] çok küçük şeyler için, [[telescope]] uzaktaki yıldızlar için, [[test tube]] deney tüpü, [[goggles]] koruyucu gözlük.' },
        { s: 'Bilimsel yöntem beş adımdır. Önce bir soru sorulur: [[Ask a question.]]', on: '.y1' },
        { s: 'Sonra bir tahminde bulunulur: [[Make a hypothesis.]] Hipotez deneyden önce yapılır.', on: '.y2', mk: '.y2' },
        { s: 'Deney yapılır, yani [[do]] ya da [[carry out an experiment]]. Sonuçlar gözlemlenir ve kaydedilir.', on: '.y3,.y4' },
        { s: 'En son bir sonuca varılır: [[Draw a conclusion.]] Sonuç tahmine uymazsa [[The hypothesis was wrong.]]', on: '.y5' },
        { s: 'Deney sorularında tek bir şeyin değiştiğine dikkat et; ışık mı, su mu? Sonuç o değişkenle ilgilidir.' }
      ] },

    { t: 'Bilimsel yöntemi sırala',
      steps: [{ s: 'Bilimsel yöntemin beş adımını doğru sıraya koy. Hipotez deneyden önce mi, sonra mı?' }],
      ia: { tip: 'sirala', q: '<p>Bilimsel yöntemin adımlarını baştan sona sırala.</p>', ust: 'ilk adım', alt: 'son adım',
        ogeler: ['Ask a question.', 'Make a hypothesis.', 'Carry out an experiment.', 'Record the results.', 'Draw a conclusion.'],
        hint: 'Hipotez bir tahmindir; tahmin deneyden önce yapılır. Sonuca varmak için de önce sonuçları kaydetmek gerekir.',
        why: 'Önce soru sorulur, sonra tahmin yapılır, deney yapılır, sonuçlar kaydedilir ve en sonda bir sonuca varılır.' } },

    { t: 'Edilgen yapı: is / was + V3',
      steps: [
        { s: 'Bir deneyi ya da icadı anlatırken işi yapan değil, yapılan iş önemlidir. Bu yüzden edilgen yapı kullanılır.',
          h: '<div class="an-ex"><span class="an-l"><b>Active:</b> Fleming discovered penicillin in 1928.</span><span class="an-l"><b>Passive:</b> Penicillin <b>was discovered</b> by Fleming in 1928.</span></div>' },
        { s: 'Etken: [[Fleming discovered penicillin in 1928.]] Edilgen: [[Penicillin was discovered by Fleming in 1928.]]' },
        { s: 'Süreç ya da talimat anlatıyorsak [[is]] ya da [[are]]: [[First, the water is heated. Then, salt is added.]]',
          h: '<table class="an-tbl"><tr><td><b>am / is / are + V3</b></td><td>süreç, talimat</td><td>The water is heated.</td></tr><tr><td><b>was / were + V3</b></td><td>geçmiş tarih</td><td>X-rays were discovered by Röntgen.</td></tr></table>' },
        { s: 'Geçmişte olduysa [[was]] ya da [[were]]: [[The light bulb was invented in 1879.]]' },
        { s: 'Tuzaklara dikkat. [[Penicillin discovered by Fleming]] eksik, [[was]] gerekir. [[Scientists were discovered]] ise yanlış; bilim insanları keşfeden kişilerdir.',
          h: '<div class="an-trap">“Penicillin <span class="an-bad-t">discovered</span> by Fleming” ✗ → <b>was discovered</b> ✓<br>“Scientists <span class="an-bad-t">were discovered</span> water” ✗ → Scientists <b>discovered</b> water ✓</div>' }
      ] },

    { t: 'Edilgen cümle doğru mu?',
      steps: [{ s: 'Her edilgen cümleye karar ver: doğru kurulmuş mu, yanlış mı?' }],
      ia: { tip: 'dogruyanlis', q: '<p>Cümleler doğru kurulmuş mu?</p>', ifadeler: [
          { m: 'Penicillin was discovered by Fleming in 1928.', d: true, a: 'was + V3 + by: doğru.' },
          { m: 'The telephone invented by Bell in 1876.', d: false, a: 'was eksik: The telephone was invented…' },
          { m: 'First, the water is heated. Then, salt is added.', d: true, a: 'Süreç anlatımı: is + V3.' },
          { m: 'Scientists were discovered the vaccine.', d: false, a: 'Bilim insanları keşfeden kişiler: Scientists discovered…' }],
        hint: 'Edilgende [[is]], [[are]], [[was]] ya da [[were]] ile fiilin üçüncü hâli birlikte gelir. Bir de şunu sor: işi yapan mı özne, yapılan mı?',
        why: 'Penisilin cümlesi ve süreç cümlesi doğru. Telefon cümlesinde [[was]] eksik. Aşı cümlesinde ise işi yapanlar bilim insanları, yani etken olmalı: [[Scientists discovered the vaccine]].' } },

    { t: 'İcat tarihleri ve “mümkün mü?” mantığı',
      base: '<table class="an-tbl"><tr><th>Yıl</th><th>İcat / keşif</th></tr>' +
        '<tr class="rv t1"><td>c. 1440</td><td>printing press (Gutenberg)</td></tr>' +
        '<tr class="rv t1"><td>1876</td><td>telephone (Bell)</td></tr>' +
        '<tr class="rv t1"><td>1879</td><td>light bulb (Edison)</td></tr>' +
        '<tr class="rv t2"><td>1903</td><td>airplane (Wright brothers)</td></tr>' +
        '<tr class="rv t2"><td>1928</td><td>penicillin (Fleming)</td></tr>' +
        '<tr class="rv t2"><td>1969</td><td>Moon landing (Apollo 11)</td></tr></table>',
      steps: [
        { s: 'Birkaç önemli tarih: matbaa on beşinci yüzyıl, telefon bin sekiz yüz yetmiş altı, ampul bin sekiz yüz yetmiş dokuz.', on: '.t1' },
        { s: 'Uçak bin dokuz yüz üç, penisilin bin dokuz yüz yirmi sekiz, Ay’a iniş bin dokuz yüz altmış dokuz.', on: '.t2' },
        { s: 'Şimdi 2022 LGS’de çıkan mantık. Bir kişi ancak yaşadığı yıllar içinde icat edilen bir şeyi kullanabilir.',
          h: '<div class="an-rule">Ölüm yılı <b>&lt;</b> icat yılı → o icadı <b>kullanamazdı</b>.<br><small>Örnek: 1937’de ölen biri 1938’de icat edilen bir şeyi kullanamaz.</small></div>' },
        { s: 'Yani kişinin ölüm yılı icat yılından önceyse, o icadı kullanmış olamaz. Tarihleri tek tek karşılaştır.' }
      ] },

    { t: 'Ali Bey hangilerini duyamazdı?',
      steps: [{ s: 'Ali Bey bin sekiz yüz seksen ile bin dokuz yüz yirmi beş arasında yaşadı. Duymuş olamayacağı icat ve keşifleri ele.' }],
      ia: { tip: 'eleme', q: '<p><b>Ali Bey (1880–1925)</b> hangilerini <b>duymuş olamaz</b>? Onları ele.</p>',
        ogeler: ['the telephone (1876)', 'the light bulb (1879)', 'the airplane (1903)', 'television (1927)', 'penicillin (1928)', 'the Moon landing (1969)'], ele: [3, 4, 5],
        hint: 'Ölüm yılından sonraki tarihlere bak. Doğumundan önce yapılan bir icadı ise sonradan duyabilir.',
        why: 'Ali Bey 1925’te öldü. Televizyon, penisilin ve Ay’a iniş ondan sonra. Telefon ve ampul doğumundan önce icat edildi ama onları elbette duymuş ve kullanmış olabilir.',
        whyV: 'Ali Bey bin dokuz yüz yirmi beşte öldü. Televizyon, penisilin ve Ay’a iniş ondan sonra. Telefon ve ampul doğumundan önce icat edildi ama onları elbette duymuş ve kullanmış olabilir.' } },

    { t: 'Ara soru', cp: {
        q: '<table class="an-tbl"><tr><th>Scientist</th><th>Lived</th></tr><tr><td>Alexander Graham Bell</td><td>1847–1922</td></tr><tr><td>Thomas Edison</td><td>1847–1931</td></tr><tr><td>Nikola Tesla</td><td>1856–1943</td></tr></table>' +
           '<table class="an-tbl"><tr><th>Invention / discovery</th><th>Year</th></tr><tr><td>the airplane</td><td>1903</td></tr><tr><td>television</td><td>1927</td></tr><tr><td>penicillin</td><td>1928</td></tr></table>' +
           '<p>According to the tables, which one was <b>NOT possible</b>?</p>',
        c: ['Bell could see an airplane.', 'Edison could watch television.', 'Bell could hear about penicillin.', 'Tesla could hear about penicillin.'], a: 'C',
        hint: 'Her kişinin ölüm yılını icat yılıyla karşılaştır. Kim, icattan önce öldü?',
        why: 'Bell bin dokuz yüz yirmi iki yılında öldü; penisilin ise bin dokuz yüz yirmi sekizde keşfedildi. Yani Bell penisilini duyamazdı. Diğerleri tarihlere göre mümkün.' },
      steps: [{ s: 'Tarihleri karşılaştır.' }] },

    { t: 'Ünlü bilim insanları',
      base: '<table class="an-tbl">' +
        '<tr class="rv s1"><td><b>Al-Jazari</b> (El-Cezerî)</td><td>12.–13. yy mühendis; makineler kitabı; “robotiğin babası”</td></tr>' +
        '<tr class="rv s2"><td><b>Marie Curie</b></td><td>polonyum ve radyumu keşfetti; Nobel alan ilk kadın</td></tr>' +
        '<tr class="rv s3"><td><b>Cahit Arf</b></td><td>matematikçi; Arf değişmezi; 10 TL banknotunda</td></tr>' +
        '<tr class="rv s4"><td><b>Aziz Sancar</b></td><td>DNA onarımı araştırması; 2015 Nobel Kimya</td></tr>' +
        '<tr class="rv s5"><td><b>Gazi Yaşargil</b></td><td>mikroskopla beyin cerrahisinin öncüsü; “Yüzyılın Beyin Cerrahı”</td></tr></table>',
      steps: [
        { s: 'Metinlerde sık geçen bilim insanları. El-Cezerî, makineleri çizimleriyle anlatan bir kitap yazdı. Ona robotiğin babası denir.', on: '.s1' },
        { s: 'Marie Curie polonyum ve radyumu keşfetti. Nobel ödülü kazanan ilk kadın.', on: '.s2' },
        { s: 'Cahit Arf ünlü bir matematikçi; portresi on liralık banknotta.', on: '.s3' },
        { s: 'Aziz Sancar, hücrelerin hasarlı DNA’yı nasıl onardığını araştırdı ve iki bin on beşte Nobel Kimya Ödülü aldı.', on: '.s4' },
        { s: 'Gazi Yaşargil, mikroskopla beyin cerrahisinin öncüsü. 2025 LGS’de onun biyografisi soruldu.', on: '.s5' }
      ] },

    { t: 'Biyografi metni okuma',
      steps: [
        { s: 'Biyografide paragraflar başlıklara ayrılır. Kişisel hayat: doğum yeri, anne baba, evlilik. İpucu kelimeler [[was born in]], [[married]].',
          h: '<table class="an-tbl"><tr class="rv m1"><td><b>Personal Life</b></td><td>was born in, parents, married, children</td></tr>' +
             '<tr class="rv m2"><td><b>Education</b></td><td>went to school, studied, graduated from</td></tr>' +
             '<tr class="rv m3"><td><b>Career</b></td><td>worked as, became, moved to, taught at</td></tr>' +
             '<tr class="rv m4"><td><b>Achievements</b></td><td>invented, discovered, won a prize</td></tr></table>', on: '.m1' },
        { s: 'Eğitim: [[studied]], [[graduated from]], üniversite.', on: '.m2' },
        { s: 'Kariyer: [[worked as]], [[became]], [[moved to]].', on: '.m3' },
        { s: 'Başarılar: [[invented]], [[discovered]], [[won a prize]].', on: '.m4' },
        { s: 'Ve en önemli tuzak: “Hangi bilgi verilmemiştir” sorusunda açıkça yazanı say. Hobiler, akrabalar metinde yoksa o soru cevaplanamaz.',
          h: '<div class="an-trap">Doğum ve ölüm yılı varsa “kaç yıl yaşadı?” <b>hesaplanabilir</b>. Ama metinde yazmayan hobiler, öğretmeni, kardeşleri <b>cevaplanamaz</b>.</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p><b>Aziz Sancar</b> was born in Savur, Mardin, in 1946. He studied medicine at İstanbul University. Later, he moved to the USA and did research on how cells repair damaged DNA. In 2015, he won the Nobel Prize in Chemistry.</p><p>Which question can <b>NOT</b> be answered according to the text?</p>',
        c: ['Where was he born?', 'What did he study at university?', 'What are his hobbies?', 'When did he win the Nobel Prize?'], a: 'C',
        hint: 'Her sorunun cevabını metinde ara. Doğum yeri, bölümü ve ödül yılı yazıyor mu? Hangisi yok?',
        why: 'Doğum yeri Savur, bölümü tıp, ödül yılı iki bin on beş; hepsi metinde var. Ama hobilerinden hiç söz edilmiyor.' },
      steps: [{ s: 'Metinde açıkça yazanı bul.' }] },

    { t: 'Diyalogda soruyu bul',
      steps: [
        { s: 'Son olarak diyaloglar. Boşluktan sonraki cevaba bak. Cevap bir isimse soru [[Who]], bir yılsa [[When]]; cevap [[Because]] ile başlıyorsa soru [[Why]].',
          h: '<table class="an-tbl"><tr><td>Johannes Gutenberg.</td><td>→ <b>Who</b> invented it?</td></tr><tr><td>Around 1440.</td><td>→ <b>When</b> was it invented?</td></tr><tr><td>Because it helped people share knowledge.</td><td>→ <b>Why</b> do you think so?</td></tr><tr><td>It uses a sensor.</td><td>→ <b>How</b> does it work?</td></tr></table>' },
        { s: 'Mesela [[Around 1440]] cevabının sorusu [[When was it invented?]]' },
        { s: '2026 LGS’de zaman ifadesi soruldu. [[What is our next step? Now, we have to put salty water in the test tubes.]] Bu, şu an birlikte deney yapanların konuşması.',
          h: '<div class="an-trap">“<b>Now</b>, we have to…” → şu anda yapılan iş · “I <b>have been</b> busy doing my experiment.” → geçmişten bugüne olan</div>' },
        { s: '[[I have been busy doing my experiment]] ise geçmişten bugüne süren bir işi anlatır. Şu anki adım değildir.' }
      ] },

    { t: 'Akılda kalsın',
      steps: [
        { s: 'Toparlayalım. [[Invent]] olmayanı yapmak, [[discover]] var olanı bulmak. [[Physicist]] fizikçi, [[physician]] doktor.' },
        { s: 'Hipotez deneyden önce yapılan tahmindir. Süreçte [[is]] ya da [[are]], geçmiş tarihte [[was]] ya da [[were]] ve fiilin üçüncü hâli.' },
        { s: 'Ölüm yılı icattan önceyse o icat kullanılamaz. Biyografide yazmayan bilgi sorulamaz.' },
        { s: 'Sen de bir gün büyük bir keşif yapabilirsin. Bu üniteyi de bitirdin, harika!' }
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
  (window.LGS_AN = window.LGS_AN || {})['ing-science'] = L;
})();
