/* Adım Adım Anlatım · Fen · Elektrik Yükleri ve Elektrik Enerjisi (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['fen-elektrik'] = {
  title: 'Elektrik Yükleri ve Elektrik Enerjisi',
  desc: 'Nötr ve yüklü cisim, itme-çekme ve gözlemden yük bulma, sürtünme-dokunma-etki ile elektriklenme, elektroskop, topraklama, enerji dönüşümü, fatura hesabı ve santraller; LGS tuzaklarıyla sahne sahne.',
  ozet: [
    'Nötr cisimde (+) ve (−) yük sayısı eşittir; nötr cisim yüksüz değildir. Fazla elektron → negatif, eksik elektron → pozitif.',
    'Elektriklenmede yalnızca elektronlar hareket eder; protonlar yer değiştirmez. “Pozitif cisim proton almıştır” her zaman yanlıştır.',
    'Aynı cins yükler iter, zıt cins yükler çeker; yüklü cisim nötr cismi de çeker. İtme varsa ikisi de aynı cins yüklüdür; çekme varsa en az biri yüklüdür (zıt yük ya da biri nötr).',
    'Sürtünme: genellikle iki yalıtkan, zıt ve eşit yük (ebonit-yün: ebonit −; cam-ipek: cam +). Dokunma: iletkenler, aynı cins yük, özdeşlerde toplam yük eşit paylaşılır. Etki: dokunmadan, yakın uç zıt, uzak uç aynı cins.',
    'Elektroskobun yaprakları açılırsa cisim yüklüdür; yaprakların açılması yükün cinsini tek başına göstermez.',
    'Topraklamada (−) cisimden toprağa elektron akar, (+) cisme topraktan elektron gelir. Yolda yalıtkan varsa topraklama olmaz. Paratoner, tanker zinciri, topraklı priz.',
    'Elektrik enerjisi ısıya (ütü), ışığa (lamba), harekete (motor) dönüşür. Jeneratör hareketi elektriğe çevirir. Sigorta aşırı akımda devreyi keser.',
    'Harcanan enerji (kWh) = güç (kW) × süre (h); fatura = kWh × birim fiyat. Gücü W’tan kW’a çevirmeyi unutma.'
  ],
  scenes: [
    { t: 'Yük nedir? Nötr, pozitif, negatif',
      base: '<svg class="an-svg" viewBox="0 0 340 170" role="img" aria-label="Nötr, negatif ve pozitif yüklü cisimler">' +
        '<g class="rv q1"><circle cx="58" cy="72" r="42" class="box" stroke-width="2"/><g font-size="17" font-weight="700" text-anchor="middle"><text x="40" y="58" fill="#ef4444">+</text><text x="58" y="58" fill="#ef4444">+</text><text x="76" y="58" fill="#ef4444">+</text><text x="40" y="94" fill="#3b82f6">−</text><text x="58" y="94" fill="#3b82f6">−</text><text x="76" y="94" fill="#3b82f6">−</text></g>' +
        '<text x="58" y="134" font-size="13" text-anchor="middle" font-weight="700">nötr</text><text x="58" y="150" font-size="11" text-anchor="middle" class="mut">3 (+) · 3 (−)</text></g>' +
        '<g class="rv q2"><circle cx="170" cy="72" r="42" class="box" stroke-width="2"/><g font-size="17" font-weight="700" text-anchor="middle"><text x="152" y="58" fill="#ef4444">+</text><text x="170" y="58" fill="#ef4444">+</text><text x="188" y="58" fill="#ef4444">+</text><text x="143" y="94" fill="#3b82f6">−</text><text x="157" y="94" fill="#3b82f6">−</text><text x="171" y="94" fill="#3b82f6">−</text><text x="185" y="94" fill="#3b82f6">−</text><text x="199" y="94" fill="#3b82f6">−</text></g>' +
        '<text x="170" y="134" font-size="13" text-anchor="middle" font-weight="700">negatif</text><text x="170" y="150" font-size="11" text-anchor="middle" class="mut">elektron almış</text></g>' +
        '<g class="rv q3"><circle cx="282" cy="72" r="42" class="box" stroke-width="2"/><g font-size="17" font-weight="700" text-anchor="middle"><text x="264" y="58" fill="#ef4444">+</text><text x="282" y="58" fill="#ef4444">+</text><text x="300" y="58" fill="#ef4444">+</text><text x="273" y="94" fill="#3b82f6">−</text><text x="291" y="94" fill="#3b82f6">−</text></g>' +
        '<text x="282" y="134" font-size="13" text-anchor="middle" font-weight="700">pozitif</text><text x="282" y="150" font-size="11" text-anchor="middle" class="mut">elektron vermiş</text></g></svg>',
      steps: [
        { s: 'Merhaba! Bütün maddeler atomlardan oluşur. Atomun çekirdeğinde pozitif yüklü protonlar, çevresinde negatif yüklü elektronlar var.' },
        { s: 'Bir cisimde artı ve eksi yük sayıları eşitse cisim nötrdür. Bu, cismin doğal hâli.', on: '.q1' },
        { s: 'Cisim dışarıdan elektron alırsa eksi yükleri fazlalaşır ve negatif yüklü olur.', on: '.q2' },
        { s: 'Elektron verirse artı yükleri fazla kalır, pozitif yüklü olur. Dikkat et, protonların sayısı hiç değişmedi.', on: '.q3' },
        { s: 'Yük miktarı fazla ya da eksik elektron sayısıyla anlatılır. Mesela 10 artı ve 13 eksi yükü olan cismin 3 fazla elektronu vardır; cisim negatiftir.' }
      ] },

    { t: 'Kaydır: net yük',
      steps: [{ s: 'Yük saymayı deneyelim. Bir cisimde 9 artı ve 14 eksi yük var. Bu cismin net yükü kaç birim? Sayı doğrusunda işaretle.' }],
      ia: { tip: 'kaydir', q: '<p>Bir cisimde <b>9 artı (+)</b> ve <b>14 eksi (−)</b> yük var. Cismin net yükü kaç birimdir?</p>',
        min: -10, max: 10, adim: 1, cevap: -5, tol: 0, birim: ' birim', etiket: [-10, -5, 0, 5, 10],
        hint: 'Hangi yük fazla? Fazla olan yükün cinsi, cismin yük cinsidir; fark da yük miktarıdır.',
        why: '14 − 9 = 5 fazla elektron var; net yük −5 birim, cisim negatiftir. 5 elektron verirse nötr olur.',
        whyV: 'On dörtten dokuzu çıkarınca beş fazla elektron kalır; net yük eksi beş birim, cisim negatiftir. Beş elektron verirse nötr olur.' } },
    { t: 'Hareket eden hep elektron',
      steps: [
        { s: 'Şimdi bu konunun altın kuralı: elektriklenme olaylarında yalnızca elektronlar yer değiştirir. Protonlar çekirdekte sıkıca tutulur, bir cisimden diğerine geçmez.',
          h: '<div class="an-rule"><b>Altın kural:</b> yalnızca <b>elektronlar</b> hareket eder. Hafıza ipucu: “Elektron Eder, Proton Park eder.”</div>' },
        { s: 'Bu yüzden “pozitif yüklü cisim proton almıştır” ifadesi her zaman yanlıştır. Doğrusu: elektron vermiştir.',
          h: '<div class="an-trap"><span class="an-bad-t">Pozitif cisim proton almıştır.</span> → <span class="an-ok-t">Elektron vermiştir.</span></div>' },
        { s: 'İkinci tuzak: nötr cisim yüksüz cisim değildir! Nötr bir cisimde de milyarlarca artı ve eksi yük var; yalnızca sayıları eşit.',
          h: '<div class="an-trap"><span class="an-bad-t">Nötr cisimde hiç yük yoktur.</span> → <span class="an-ok-t">(+) ve (−) yük sayısı eşittir.</span></div>' },
        { s: 'Yüklerin kolayca hareket ettiği maddelere iletken, edemediği maddelere yalıtkan denir.',
          h: '<table class="an-tbl"><tr><th>İletken</th><th>Yalıtkan</th></tr><tr><td>metaller, insan vücudu, toprak, musluk suyu, grafit</td><td>plastik, cam, lastik, kuru tahta, yün, ipek, kâğıt, hava</td></tr></table>' },
        { s: 'Yalıtkan bir cisim sürtülünce yük yalnızca sürtülen bölgede kalır. İletkende ise yük bütün yüzeye yayılır.' }
      ] },

    { t: 'Doğru mu, yanlış mı: yük tuzakları',
      steps: [{ s: 'Altın kuralı sınayalım. Her ifadeye doğru ya da yanlış de.' }],
      ia: { tip: 'dogruyanlis', q: '<p>Her ifadeye karar ver.</p>',
        ifadeler: [
          { m: 'Pozitif yüklenen cisim proton almıştır.', d: false, a: 'Proton hareket etmez; cisim elektron vermiştir.' },
          { m: 'Nötr cisimde hiç yük yoktur.', d: false, a: 'Artı ve eksi yük vardır, sayıları eşittir.' },
          { m: 'Negatif yüklenen cisim elektron almıştır.', d: true, a: 'Eksi yükleri fazlalaşmıştır.' },
          { m: 'Sürtülen yalıtkanda yük yalnızca sürtülen bölgede kalır.', d: true, a: 'İletkende ise bütün yüzeye yayılır.' }],
        hint: 'Elektriklenmede hangi tanecik yer değiştiriyordu? Nötr ile yüksüzün farkını düşün.',
        why: 'Yalnızca elektronlar yer değiştirir: elektron alan negatif, veren pozitif olur. Nötr cisim yüksüz değil, artı ve eksi yükleri eşittir.' } },
    { t: 'İtme ve çekme',
      base: '<svg class="an-svg" viewBox="0 0 340 190" role="img" aria-label="Aynı yükler iter, zıt yükler çeker, yüklü cisim nötr cismi çeker">' +
        '<g class="rv i1"><circle cx="120" cy="30" r="16" fill="#ef4444" fill-opacity=".8"/><text x="120" y="36" font-size="16" text-anchor="middle" font-weight="700" fill="#fff">+</text>' +
        '<circle cx="220" cy="30" r="16" fill="#ef4444" fill-opacity=".8"/><text x="220" y="36" font-size="16" text-anchor="middle" font-weight="700" fill="#fff">+</text>' +
        '<path d="M100 30 L74 30 M80 24 L72 30 L80 36" class="st"/><path d="M240 30 L266 30 M260 24 L268 30 L260 36" class="st"/><text x="290" y="35" font-size="12" class="acc">iter</text></g>' +
        '<g class="rv i2"><circle cx="120" cy="95" r="16" fill="#3b82f6" fill-opacity=".85"/><text x="120" y="101" font-size="16" text-anchor="middle" font-weight="700" fill="#fff">−</text>' +
        '<circle cx="220" cy="95" r="16" fill="#ef4444" fill-opacity=".8"/><text x="220" y="101" font-size="16" text-anchor="middle" font-weight="700" fill="#fff">+</text>' +
        '<path d="M140 95 L162 95 M156 89 L164 95 L156 101" class="st2"/><path d="M200 95 L178 95 M184 89 L176 95 L184 101" class="st2"/><text x="290" y="100" font-size="12">çeker</text></g>' +
        '<g class="rv i3"><circle cx="120" cy="160" r="16" fill="#ef4444" fill-opacity=".8"/><text x="120" y="166" font-size="16" text-anchor="middle" font-weight="700" fill="#fff">+</text>' +
        '<circle cx="220" cy="160" r="16" class="box" stroke-width="2"/><text x="211" y="165" font-size="12" font-weight="700" fill="#3b82f6">−</text><text x="229" y="165" font-size="12" text-anchor="middle" font-weight="700" fill="#ef4444">+</text>' +
        '<path d="M200 160 L178 160 M184 154 L176 160 L184 166" class="st2"/><path d="M140 160 L162 160 M156 154 L164 160 L156 166" class="st2"/><text x="290" y="158" font-size="12">çeker</text><text x="220" y="188" font-size="10" text-anchor="middle" class="mut">nötr</text></g></svg>',
      steps: [
        { s: 'Yüklü cisimler birbirine dokunmadan, uzaktan kuvvet uygular. Bu kuvvet cisimler yaklaştıkça artar, uzaklaştıkça azalır.' },
        { s: 'Aynı cins yükler birbirini iter: artıyla artı, eksiyle eksi.', on: '.i1' },
        { s: 'Zıt cins yükler birbirini çeker: artıyla eksi.', on: '.i2' },
        { s: 'Şimdi önemli bir durum: yüklü bir cisim nötr bir cismi de çeker! Yüklü cisim, nötr cismin yakın yüzünde zıt yükleri toplar ve yakındaki çekim baskın gelir.', on: '.i3' },
        { s: 'Saça sürtülen balonun duvara yapışması ya da tarağın kâğıt parçalarını çekmesi bu yüzdendir. İki nötr cisim arasında ise hiçbir etkileşim olmaz.' }
      ] },

    { t: 'Gözlemden yük bulma',
      base: '<table class="an-tbl"><tr><th>Gözlem</th><th>Kesin olan</th><th>Kesin olmayan</th></tr>' +
        '<tr class="rv o1"><td><b>İtiyorlar</b></td><td>ikisi de yüklü ve aynı cins</td><td>artı mı, eksi mi</td></tr>' +
        '<tr class="rv o2"><td><b>Çekiyorlar</b></td><td>en az biri yüklü</td><td>zıt yüklü mü, biri nötr mü</td></tr>' +
        '<tr class="rv o3"><td><b>Etkileşim yok</b></td><td>ikisi de nötr</td><td>—</td></tr>' +
        '<tr class="rv o4"><td>Zıt yüklü iki cismin <b>ikisine de</b> çekiliyor</td><td>bu cisim nötr</td><td>—</td></tr></table>',
      steps: [
        { s: 'LGS sorularında en çok kullanılan araç bu tablo. Bir gözlem verilir, sen kesin olanı bulursun.' },
        { s: 'İki cisim birbirini itiyorsa ikisi de yüklüdür ve aynı cins yüklüdür. Ama başka bilgi yoksa artı mı eksi mi, bilinmez.', on: '.o1' },
        { s: 'Çekiyorlarsa en az biri yüklüdür. İki ihtimal var: zıt yüklüler ya da biri nötr.', on: '.o2', mk: '.o2 td' },
        { s: 'Hiç etkileşim yoksa ikisi de nötrdür. Zıt yüklü iki cismin ikisine de çekilen bir cisim de nötrdür; yüklü olsaydı birini iterdi.', on: '.o3,.o4' },
        { s: 'Burada çok dikkat et, LGS’de en sık düşülen tuzak bu: birbirini çeken cisimler kesinlikle zıt yüklüdür demek yanlış! Yük durumunu kesinleştiren gözlem itmedir.',
          h: '<div class="an-trap"><span class="an-bad-t">Çeken cisimler kesinlikle zıt yüklüdür.</span><br>Çekme gördüğünde iki ihtimal yaz: <b>(+, −)</b> ya da <b>(yüklü, nötr)</b>.</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Yalıtkan iplerle asılı K, L, M ve N kürelerinden <b>K ile L birbirini itiyor</b>, <b>L ile M birbirini çekiyor</b>, <b>M ile N arasında hiçbir etkileşim olmuyor</b>. Buna göre hangisi <b>kesinlikle doğrudur</b>?</p>',
        c: ['L ile M zıt cins yüklüdür.', 'K pozitif yüklüdür.', 'M ve N nötrdür; K ile L aynı cins yüklüdür.', 'N negatif yüklüdür.'], a: 'C',
        hint: 'Önce etkileşimin hiç olmadığı ikiliye bak. Sonra itmenin ne kesinleştirdiğini hatırla.',
        why: 'M ile N etkileşmediğine göre ikisi de nötrdür. K ile L iterek aynı cins yüklü olduklarını gösterir ama cinsi bilinmez. L’nin nötr M’yi çekmesi buna uygundur; L ile M zıt yüklü değildir.' },
      steps: [{ s: 'İlk ara soru! Önce kesin bilgiden başla: etkileşim yok ne demek?' }] },

    { t: 'Sürtünme ile elektriklenme',
      base: '<svg class="an-svg" viewBox="0 0 340 170" role="img" aria-label="Ebonit çubuk yünle sürtülünce yünden ebonite elektron geçer">' +
        '<g class="rv s1"><rect x="20" y="50" width="160" height="22" rx="11" fill="#475569"/><text x="100" y="40" font-size="12" text-anchor="middle">ebonit (plastik) çubuk</text>' +
        '<rect x="200" y="36" width="110" height="52" rx="10" fill="#d6b46a" fill-opacity=".7"/><text x="255" y="104" font-size="12" text-anchor="middle">yün kumaş</text></g>' +
        '<g class="rv s2"><path d="M220 125 Q160 150 100 125" class="st" stroke-width="2.5"/><path d="M108 120 L98 125 L107 132" class="st" stroke-width="2.5"/><text x="160" y="160" font-size="12" text-anchor="middle" class="acc">elektronlar: yün → ebonit</text></g>' +
        '<g class="rv s3" font-size="15" font-weight="700" text-anchor="middle"><text x="45" y="66" fill="#93c5fd">−</text><text x="75" y="66" fill="#93c5fd">−</text><text x="105" y="66" fill="#93c5fd">−</text><text x="135" y="66" fill="#93c5fd">−</text><text x="160" y="66" fill="#93c5fd">−</text>' +
        '<text x="225" y="68" fill="#ef4444">+</text><text x="255" y="68" fill="#ef4444">+</text><text x="285" y="68" fill="#ef4444">+</text></g></svg>',
      steps: [
        { s: 'Nötr bir cismin elektron alarak ya da vererek yüklenmesine elektriklenme denir. Üç yolu var: sürtünme, dokunma ve etki. Önce sürtünme.' },
        { s: 'Genellikle iki farklı yalıtkan birbirine sürtülür. Sınıftaki klasik örnek: ebonit, yani plastik çubuk ve yün kumaş.', on: '.s1' },
        { s: 'Sürtünme sırasında elektronlar yünden ebonite geçer.', on: '.s2' },
        { s: 'Elektron alan ebonit negatif, elektron veren yün pozitif yüklenir. Biri ne kadar kaybettiyse diğeri o kadar kazanır: zıt cins ve eşit miktarda yük.', on: '.s3' },
        { s: 'Cam çubuk ipekle sürtülürse tersi olur: elektronlar camdan ipeğe geçer, cam pozitif, ipek negatif yüklenir.',
          h: '<div class="an-tip">Hafıza ipucu: <b>Ebonit Eksi, Cam Coşkulu artı.</b> Kumaşlar her zaman çubuğun tersidir.</div>' },
        { s: 'Bir tuzak: metal çubuk elde tutularak sürtülürse yükler vücudumuz üzerinden toprağa akar ve çubuk yüklü görünmez. Yalıtkan bir sapla tutulursa yüklenir.',
          h: '<div class="an-trap"><span class="an-bad-t">Metaller sürtünmeyle yüklenemez.</span> → Yalıtkan sapla tutulan metal çubuk yüklenir.</div>' }
      ] },

    { t: 'Boşluk: cam ve ipek',
      steps: [{ s: 'Sürtünme kuralını yeni bir çiftte uygula. Cam çubuk ipek kumaşla sürtülüyor. Boşlukları doldur.' }],
      ia: { tip: 'bosluk', q: '<p>Cam çubuk ipek kumaşla sürtülüyor.</p>',
        metin: 'Elektronlar [_] [_] geçer.<br>Cam [_] yüklenir; iki cismin yük miktarı [_] olur.',
        secenek: ['camdan', 'ipekten', 'ipeğe', 'cama', 'pozitif', 'negatif', 'eşit', 'farklı'], cevap: ['camdan', 'ipeğe', 'pozitif', 'eşit'],
        hint: 'Cam ile ipekte ebonit ile yünün tersi oluyordu. Elektron veren cisim hangi yükle kalır?',
        why: 'Elektronlar camdan ipeğe geçer; elektron veren cam pozitif, alan ipek negatif yüklenir. Biri ne kadar verdiyse öbürü o kadar alır: yükler zıt ve eşittir.' } },
    { t: 'Doğada ve teknolojide elektriklenme',
      steps: [
        { s: 'Bir cisim üzerinde biriken ve akmayan yüklere durgun elektrik denir. Doğada en büyük örneği şimşek ve yıldırım.' },
        { s: 'Bulutlardaki su damlacıkları ve buz kristalleri sürtünerek yüklenir. Bulutlar arasındaki boşalma şimşek, bulut ile yer arasındaki boşalma yıldırımdır.' },
        { s: 'Günlük hayatta da sık görürüz: yün kazağı çıkarırken çıtırtılar, halıda yürüdükten sonra kapı koluna dokununca çarpılmak.' },
        { s: 'Teknolojide bu kurallar çok işe yarar. Hepsi itme-çekme kurallarından birine dayanır.',
          h: '<table class="an-tbl"><tr><th>Uygulama</th><th>Kullanılan kural</th></tr><tr><td>Elektrostatik boyama</td><td>damlacıklar aynı yükle birbirini iter, zıt yüklü yüzeye çekilir</td></tr><tr><td>Baca ve hava filtreleri</td><td>yüklenen tozlar zıt yüklü plakaya çekilir</td></tr><tr><td>Fotokopi, lazer yazıcı</td><td>yüklü toner zıt yüklü bölgelere tutunur</td></tr><tr><td>Toz bezleri, parmak izi tozu</td><td>yüklü cisim nötr cismi çeker</td></tr></table>' },
        { s: 'LGS bir ayrıntıyı sordu: tozlar yüklenmeden geçse bile yüklü plaka bir miktar tozu yine tutar. Çünkü yüklü cisim nötr cismi de çeker.' }
      ] },

    { t: 'Dokunma ile elektriklenme',
      base: '<svg class="an-svg" viewBox="0 0 340 180" role="img" aria-label="Özdeş iletken küreler: +8 ve −2 dokununca ikisi de +3 olur">' +
        '<g class="rv k1"><circle cx="70" cy="55" r="30" class="box" stroke-width="2"/><text x="70" y="62" font-size="18" text-anchor="middle" font-weight="700" fill="#ef4444">+8</text><text x="70" y="102" font-size="12" text-anchor="middle">K</text>' +
        '<circle cx="190" cy="55" r="30" class="box" stroke-width="2"/><text x="190" y="62" font-size="18" text-anchor="middle" font-weight="700" fill="#3b82f6">−2</text><text x="190" y="102" font-size="12" text-anchor="middle">L</text></g>' +
        '<g class="rv k2"><text x="258" y="50" font-size="12">toplam</text><text x="258" y="68" font-size="15" font-weight="700" class="acc">+6</text></g>' +
        '<g class="rv k3"><circle cx="100" cy="140" r="30" class="box" stroke-width="2"/><text x="100" y="147" font-size="18" text-anchor="middle" font-weight="700" fill="#ef4444">+3</text>' +
        '<circle cx="160" cy="140" r="30" class="box" stroke-width="2"/><text x="160" y="147" font-size="18" text-anchor="middle" font-weight="700" fill="#ef4444">+3</text></g>' +
        '<g class="rv k4"><path d="M215 140 Q240 115 270 140" fill="none" class="st2" stroke-width="2.5"/><text x="300" y="132" font-size="11" text-anchor="middle">5 elektron</text><text x="300" y="148" font-size="11" text-anchor="middle" class="acc">L → K</text></g></svg>',
      steps: [
        { s: 'İkinci yol dokunma. Yüklü bir iletken başka bir iletkene dokundurulur; elektronlar geçer ve toplam yük iki cisme paylaştırılır.' },
        { s: 'Örnek: özdeş iletken K küresinin yükü artı 8, L küresinin yükü eksi 2 birim.', v: 'Örnek: özdeş iletken K küresinin yükü artı sekiz, L küresinin yükü eksi iki birim.', on: '.k1' },
        { s: 'Önce toplam yükü bul: artı 8 ile eksi 2, artı 6. Toplam yük korunur.', v: 'Önce toplam yükü bul: artı sekiz ile eksi iki, artı altı. Toplam yük korunur.', on: '.k2' },
        { s: 'Küreler özdeş olduğu için yükü eşit paylaşırlar: her biri artı 3 olur. Bak, ikisi de aynı cins yüklendi.', v: 'Küreler özdeş olduğu için yükü eşit paylaşırlar: her biri artı üç olur. Bak, ikisi de aynı cins yüklendi.', on: '.k3' },
        { s: 'Elektronlar hangi yönde geçti? L, eksi 2’den artı 3’e çıktı; yani 5 birim elektron kaybetti. Elektronlar L’den K’ye geçti.', v: 'Elektronlar hangi yönde geçti? L, eksi ikiden artı üçe çıktı; yani beş birim elektron kaybetti. Elektronlar L’den K’ye geçti.', on: '.k4' },
        { s: 'Büyüklükleri farklıysa büyük küre daha çok yük alır ama ikisi yine aynı cins yüklüdür. Tuzak: K’den L’ye proton geçti demek; protonlar hareket etmez!',
          h: '<div class="an-trap">Dokunmada geçen her zaman <b>elektrondur</b>. Sonunda iki cisim <b>aynı cins</b> yüklü olur (ya da toplam sıfırsa ikisi de nötr).</div>' }
      ] },

    { t: 'Eşleştir: dokunmadan sonra',
      steps: [{ s: 'Dokunma kuralını hızlıca uygula. Özdeş iletken küreler dokundurulup ayrılıyor. Her başlangıç durumunu son yük durumuyla eşleştir.' }],
      ia: { tip: 'eslestir', q: '<p>Özdeş iletken küreler dokundurulup ayrılıyor. Başlangıç yüklerini son durumla eşleştir.</p>', solBaslik: 'Önce', sagBaslik: 'Sonra',
        sol: ['+8 ve −2', '+6 ve +2', '−6 ve +2', '+5 ve −5', '−10 ve 0'],
        sag: ['ikisi de +3', 'ikisi de +4', 'ikisi de −2', 'ikisi de nötr', 'ikisi de −5'],
        hint: 'Önce toplam yükü bul, sonra özdeş küreler arasında eşit paylaştır. Toplamın işaretine dikkat!',
        why: 'Toplam korunur ve eşit paylaşılır: 6 ÷ 2 = +3, 8 ÷ 2 = +4, −4 ÷ 2 = −2, 0 ÷ 2 = nötr, −10 ÷ 2 = −5. Son durumda iki küre hep aynı cins yüklüdür.',
        whyV: 'Toplam yük korunur ve eşit paylaşılır: artı altıdan artı üçer, artı sekizden artı dörder, eksi dörtten eksi ikişer, sıfırdan nötr, eksi ondan eksi beşer. Son durumda iki küre hep aynı cins yüklüdür.' } },
    { t: 'Etki ile elektriklenme',
      base: '<svg class="an-svg" viewBox="0 0 340 175" role="img" aria-label="Negatif çubuk yaklaşınca yakın küre pozitif, uzak küre negatif olur">' +
        '<g class="rv e1"><rect x="8" y="50" width="70" height="20" rx="10" fill="#475569"/><g font-size="14" font-weight="700" fill="#93c5fd" text-anchor="middle"><text x="25" y="65">−</text><text x="43" y="65">−</text><text x="61" y="65">−</text></g><text x="43" y="40" font-size="11" text-anchor="middle">(−) çubuk</text></g>' +
        '<circle cx="150" cy="60" r="34" class="box" stroke-width="2"/><circle cx="218" cy="60" r="34" class="box" stroke-width="2"/>' +
        '<text x="150" y="112" font-size="12" text-anchor="middle">K (yakın)</text><text x="218" y="112" font-size="12" text-anchor="middle">L (uzak)</text>' +
        '<line x1="150" y1="94" x2="150" y2="150" class="ln" stroke-width="3"/><line x1="218" y1="94" x2="218" y2="150" class="ln" stroke-width="3"/><text x="184" y="166" font-size="10" text-anchor="middle" class="mut">yalıtkan ayaklar</text>' +
        '<g class="rv e2" font-size="15" font-weight="700" text-anchor="middle"><text x="128" y="55" fill="#ef4444">+</text><text x="128" y="75" fill="#ef4444">+</text><text x="242" y="55" fill="#3b82f6">−</text><text x="242" y="75" fill="#3b82f6">−</text></g>' +
        '<g class="rv e3"><path d="M162 22 Q184 6 206 22" class="st2" stroke-width="2.5"/><path d="M199 22 L207 23 L205 15" class="st2" stroke-width="2.5"/><text x="275" y="20" font-size="11" text-anchor="middle" class="acc">elektronlar</text><text x="275" y="34" font-size="11" text-anchor="middle" class="acc">uzağa itilir</text></g></svg>',
      steps: [
        { s: 'Üçüncü yol etki. Yüklü bir cisim, nötr bir iletkene dokundurulmadan sadece yaklaştırılır. Burada birbirine değen iki nötr küre var.' },
        { s: 'Negatif yüklü bir çubuğu K küresine yaklaştıralım.', on: '.e1' },
        { s: 'Çubuktaki eksi yükler kürelerdeki elektronları iter. Elektronlar uzaktaki L küresine kaçar.', on: '.e3' },
        { s: 'Sonuç: yakın küre K, çubuğa zıt yani pozitif; uzak küre L, çubukla aynı cins yani negatif yüklenir. Çubuk ile küreler arasında hiç yük geçişi olmadı.', on: '.e2' },
        { s: 'Kalıcı yük için çubuk yakındayken küreler ayrılır, sonra çubuk uzaklaştırılır. Sıra ters olursa elektronlar geri döner ve küreler nötr kalır.',
          h: '<table class="an-tbl"><tr><th></th><th>Sürtünme</th><th>Dokunma</th><th>Etki</th></tr><tr><td>Temas</td><td>var</td><td>var</td><td>yok</td></tr><tr><td>Cisimler arası elektron geçişi</td><td>var</td><td>var</td><td>yok</td></tr><tr><td>Son yük</td><td>zıt, eşit</td><td>aynı cins</td><td>yakın uç zıt, uzak uç aynı</td></tr></table>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Özdeş iletken K küresinin yükü <b>+6</b>, L küresinin yükü <b>−2</b> birimdir. Küreler birbirine dokundurulup ayrılıyor. Buna göre hangisi <b>doğrudur</b>?</p>',
        c: ['Her küre +4 birim yüklü olur; protonlar K’den L’ye geçer.', 'Her küre +2 birim yüklü olur; elektronlar L’den K’ye geçer.', 'K +2, L −2 birim yüklü olur.', 'Her küre +2 birim yüklü olur; elektronlar K’den L’ye geçer.'], a: 'B',
        hint: 'Toplam yükü bul ve ikiye böl. Sonra L’nin yükü artıyor mu azalıyor mu, ona bak: yükü artan cisim elektron kaybetmiştir.',
        why: 'Toplam +6 + (−2) = +4; özdeş oldukları için her biri +2 olur. L −2’den +2’ye çıktığı için 4 birim elektron kaybetmiştir; elektronlar L’den K’ye geçer. Protonlar hareket etmez.',
        whyV: 'Toplam yük artı altı ile eksi ikinin toplamı, artı dört. Özdeş oldukları için her biri artı iki olur. L, eksi ikiden artı ikiye çıktığı için dört birim elektron kaybetmiştir; elektronlar L’den K’ye geçer. Protonlar hareket etmez.' },
      steps: [{ s: 'Dokunma sorusu. Önce toplam yük, sonra paylaşım, en son elektronun yönü.' }] },

    { t: 'Elektroskop',
      base: '<svg class="an-svg" viewBox="0 0 340 185" role="img" aria-label="Elektroskop: nötrken yapraklar kapalı, yüklüyken açık">' +
        '<g><circle cx="85" cy="30" r="14" fill="#94a3b8"/><line x1="85" y1="44" x2="85" y2="120" stroke="#94a3b8" stroke-width="4"/><rect x="73" y="62" width="24" height="12" rx="3" fill="#475569"/>' +
        '<path d="M40 80 L40 160 L130 160 L130 80 Z" fill="none" class="ln" stroke-width="2"/><line x1="85" y1="120" x2="81" y2="150" stroke="#f5b301" stroke-width="3"/><line x1="85" y1="120" x2="89" y2="150" stroke="#f5b301" stroke-width="3"/>' +
        '<text x="85" y="178" font-size="12" text-anchor="middle">nötr: kapalı</text></g>' +
        '<g class="rv x1"><circle cx="250" cy="30" r="14" fill="#94a3b8"/><line x1="250" y1="44" x2="250" y2="120" stroke="#94a3b8" stroke-width="4"/><rect x="238" y="62" width="24" height="12" rx="3" fill="#475569"/>' +
        '<path d="M205 80 L205 160 L295 160 L295 80 Z" fill="none" class="ln" stroke-width="2"/><line x1="250" y1="120" x2="228" y2="148" stroke="#f5b301" stroke-width="3"/><line x1="250" y1="120" x2="272" y2="148" stroke="#f5b301" stroke-width="3"/>' +
        '<g font-size="12" font-weight="700" fill="#3b82f6"><text x="226" y="132">−</text><text x="268" y="132">−</text><text x="244" y="26">−</text></g>' +
        '<text x="250" y="178" font-size="12" text-anchor="middle" class="acc">yüklü: açık</text></g>' +
        '<text x="85" y="14" font-size="10" text-anchor="middle" class="mut">topuz</text><text x="150" y="128" font-size="10" class="mut">yapraklar</text></svg>',
      steps: [
        { s: 'Bir cismin yüklü olup olmadığını anlamak için elektroskop kullanırız. Metal bir topuz, metal çubuk ve ucunda iki ince metal yapraktan oluşur.' },
        { s: 'Elektroskop nötrken yapraklar kapalıdır.' },
        { s: 'Topuza yüklü bir cisim dokundurulunca elektroskop o cisimle aynı cins yüklenir. Yapraklar aynı cins yüklü olduğu için birbirini iter ve açılır.', on: '.x1' },
        { s: 'Yapraklar ne kadar çok açılırsa yük o kadar fazladır. Topuza parmakla dokunursan elektroskop topraklanır, yapraklar kapanır.' },
        { s: 'Burada çok dikkat et: yapraklar cisim pozitif de olsa negatif de olsa açılır. Yani yaprakların açılması yalnızca cismin yüklü olduğunu gösterir, cinsini değil.',
          h: '<div class="an-trap"><span class="an-bad-t">Yapraklar açıldığına göre cisim pozitiftir.</span><br>Açılma yalnızca <b>yüklü</b> olduğunu gösterir. Bu iddiayı çürütmek için negatif olduğu bilinen bir cisimle de yaprakların açıldığı gösterilir.</div>' }
      ] },

    { t: 'Dokun: etkiyle yüklenen elektroskop',
      steps: [{ s: 'Etki ile elektriklenmeyi elektroskopta düşünelim. Negatif yüklü çubuk topuza dokundurulmadan yaklaştırılıyor. Pozitif yüklenen bölgeye dokun.' }],
      ia: { tip: 'gorselsec', q: '<p>Negatif yüklü çubuk nötr elektroskobun topuzuna <b>dokundurulmadan</b> yaklaştırılıyor. <b>Pozitif</b> yüklenen bölgeye dokun.</p>',
        svg: '<svg class="an-svg" viewBox="0 0 340 250" role="group" aria-label="Nötr bir elektroskop; negatif yüklü bir çubuk topuzuna dokundurulmadan yaklaştırılmış"><rect x="20" y="14" width="96" height="30" rx="8" fill="#64748b" opacity="0.85"/><text x="68" y="35" text-anchor="middle" font-size="16" fill="#fff" font-weight="700">− − − −</text><text x="68" y="62" text-anchor="middle" font-size="14" class="mut">çubuk</text><path d="M110 124 L110 236 L230 236 L230 124" fill="none" class="st2" stroke-width="2"/><line x1="170" y1="62" x2="170" y2="168" class="st" stroke-width="5"/><g data-b="topuz" aria-label="topuz"><circle cx="170" cy="40" r="24" class="box"/><text x="170" y="45" text-anchor="middle" font-size="14">topuz</text></g><g data-b="cubuk" aria-label="metal çubuk"><rect x="150" y="66" width="40" height="40" rx="8" class="box"/></g><g data-b="tipa" aria-label="yalıtkan tıpa"><rect x="120" y="110" width="100" height="26" rx="6" class="box"/></g><g data-b="y1" aria-label="sol yaprak"><polygon points="166,168 150,168 122,224 140,230" class="box"/></g><g data-b="y2" aria-label="sağ yaprak"><polygon points="174,168 190,168 218,224 200,230" class="box"/></g><text x="290" y="208" text-anchor="middle" font-size="14" class="mut">yapraklar</text><text x="250" y="92" text-anchor="middle" font-size="14">metal çubuk</text><text x="280" y="129" text-anchor="middle" font-size="14">yalıtkan tıpa</text></svg>', dogru: ['topuz'],
        hint: 'Çubuktaki eksi yükler elektroskobun elektronlarını iter. Elektronlar en uzağa kaçar; geride hangi bölge elektron eksiği ile kalır?',
        why: 'Elektronlar çubuktan uzağa, yapraklara itilir: yapraklar negatif olup açılır, topuz pozitif kalır. Tıpa yalıtkandır, yük geçişine katılmaz.' } },
    { t: 'Topraklama',
      base: '<svg class="an-svg" viewBox="0 0 340 185" role="img" aria-label="Negatif cisimden toprağa, topraktan pozitif cisme elektron akar">' +
        '<g class="rv g1"><circle cx="80" cy="45" r="28" class="box" stroke-width="2"/><g font-size="14" font-weight="700" fill="#3b82f6" text-anchor="middle"><text x="68" y="44">−</text><text x="86" y="44">−</text><text x="77" y="60">−</text></g><text x="80" y="10" font-size="11" text-anchor="middle">(−) cisim</text>' +
        '<line x1="80" y1="73" x2="80" y2="148" class="ln" stroke-width="3"/><path d="M70 120 L80 136 L90 120" class="st" stroke-width="3"/><text x="96" y="112" font-size="11" class="acc">elektron →</text><text x="96" y="126" font-size="11" class="acc">toprağa</text></g>' +
        '<g class="rv g2"><circle cx="250" cy="45" r="28" class="box" stroke-width="2"/><g font-size="14" font-weight="700" fill="#ef4444" text-anchor="middle"><text x="238" y="46">+</text><text x="256" y="46">+</text><text x="247" y="62">+</text></g><text x="250" y="10" font-size="11" text-anchor="middle">(+) cisim</text>' +
        '<line x1="250" y1="73" x2="250" y2="148" class="ln" stroke-width="3"/><path d="M240 100 L250 84 L260 100" class="st2" stroke-width="3"/><text x="264" y="112" font-size="11">elektron</text><text x="264" y="126" font-size="11">topraktan</text></g>' +
        '<g class="ln" stroke-width="3"><line x1="55" y1="150" x2="105" y2="150"/><line x1="64" y1="158" x2="96" y2="158"/><line x1="73" y1="166" x2="87" y2="166"/><line x1="225" y1="150" x2="275" y2="150"/><line x1="234" y1="158" x2="266" y2="158"/><line x1="243" y1="166" x2="257" y2="166"/></g>' +
        '<text x="165" y="182" font-size="11" text-anchor="middle" class="mut">toprak</text></svg>',
      steps: [
        { s: 'Yüklü bir cismin fazla yükünü iletken bir yolla toprağa aktarıp onu nötr yapmaya topraklama denir.' },
        { s: 'Negatif yüklü bir cisim topraklanırsa fazla elektronları cisimden toprağa akar.', on: '.g1' },
        { s: 'Pozitif yüklü bir cisim topraklanırsa topraktan cisme elektron gelir. Dikkat, artı yükler toprağa akmaz!', on: '.g2' },
        { s: 'Topraklama için kesintisiz bir iletken yol gerekir. Yolun herhangi bir yerinde lastik tekerlek, plastik eldiven ya da yalıtkan masa varsa topraklama olmaz.' },
        { s: 'Günlük hayattaki örnekler: binaların tepesindeki paratoner, topraklı prizler, akaryakıt tankerlerinde yere değen metal zincir.',
          h: '<table class="an-tbl"><tr><th>Uygulama</th><th>Neyi önler?</th></tr><tr><td>Paratoner (yıldırımsavar)</td><td>yıldırımın yükü binaya zarar vermeden toprağa gider</td></tr><tr><td>Topraklı priz ve fiş</td><td>cihazın gövdesine kaçan elektrik toprağa gider, çarpılma olmaz</td></tr><tr><td>Tanker zinciri</td><td>biriken yük kıvılcım çıkarıp yakıtı tutuşturmaz</td></tr></table>' },
        { s: 'Bir tuzak daha: birbirine iletken telle bağlanan metal kaplar yükü paylaşır, ama toprağa bağlı değilse topraklanmış sayılmaz.' }
      ] },

    { t: 'Grupla: topraklama olur mu?',
      steps: [{ s: 'Kesintisiz iletken yol var mı? Her durumu topraklama olup olmamasına göre yerleştir.' }],
      ia: { tip: 'grup', q: '<p>Hangi durumlarda yüklü cisim topraklanır?</p>', gruplar: ['Topraklanır', 'Topraklanmaz'],
        ogeler: [{ m: 'Bakır telle toprağa bağlı küre', g: 0 }, { m: 'Binadaki paratoner', g: 0 }, { m: 'Tankerin yere değen zinciri', g: 0 },
          { m: 'Topuza parmakla dokunmak', g: 0 }, { m: 'Plastik eldivenle tutulan küre', g: 1 }, { m: 'Lastik tekerlek üstündeki metal', g: 1 },
          { m: 'Telle birbirine bağlı iki metal kap', g: 1 }],
        hint: 'Cisimden toprağa kadar giden yolun her parçası iletken mi? Yol toprağa ulaşıyor mu?',
        why: 'Tel, paratoner, zincir ve insan vücudu yükü toprağa iletir. Eldiven ve lastik yalıtkandır; iki kabı birbirine bağlamak ise yükü paylaştırır, toprağa ulaştırmaz.' } },
    { t: 'Ara soru', cp: {
        q: '<p><b>Pozitif (+) yüklü</b> metal bir küre, iletken bir telle toprağa bağlanıyor. Bu sırada ne olur?</p>',
        c: ['Küredeki protonlar toprağa akar.', 'Topraktan küreye elektron gelir ve küre nötr olur.', 'Küredeki elektronlar toprağa akar.', 'Küre negatif yüklü hâle gelir.'], a: 'B',
        hint: 'Hareket edebilen tek tanecik hangisi? Pozitif kürenin eksiği ne?',
        why: 'Protonlar hareket etmez. Pozitif kürenin elektronu eksiktir; topraktan küreye elektron gelir ve küre nötr olur.' },
      steps: [{ s: 'Topraklama sorusu geldi. Altın kuralı hatırla: hareket eden hep elektron.' }] },

    { t: 'Elektrik enerjisinin dönüşümü',
      steps: [
        { s: 'Şimdi elektrik enerjisine geçelim. Elektrik enerjisi kolayca taşınır ve başka enerjilere dönüştürülür. Evlerimizde en çok ısıya, ışığa ve harekete dönüşür.',
          h: '<table class="an-tbl"><tr><th>Dönüşüm</th><th>Örnek</th></tr><tr class="rv v1"><td>elektrik → ısı</td><td>ütü, su ısıtıcısı, fırın, elektrikli soba</td></tr><tr class="rv v2"><td>elektrik → ışık</td><td>LED lamba, el feneri, ekranlar</td></tr><tr class="rv v3"><td>elektrik → hareket</td><td>vantilatör, mikser, çamaşır makinesi, asansör</td></tr><tr class="rv v4"><td>birden fazla</td><td>saç kurutma makinesi (ısı + hareket)</td></tr></table>' },
        { s: 'Ütü, su ısıtıcısı ve fırın elektriği ısıya çevirir; içlerinde ısınan bir rezistans teli vardır.', on: '.v1' },
        { s: 'Lambalar elektriği ışığa çevirir. LED aynı ışık için akkor ampulden çok daha az enerji harcar.', on: '.v2' },
        { s: 'Vantilatör, mikser ve asansör elektriği harekete çevirir; içlerinde elektrik motoru vardır. Saç kurutma makinesi ise hem ısı hem hareket üretir.', on: '.v3,.v4' },
        { s: 'Jeneratör ya da dinamo tam tersini yapar: hareket enerjisini elektrik enerjisine çevirir. Motor ile jeneratör birbirinin tersidir.',
          h: '<div class="an-rule"><b>Motor:</b> elektrik → hareket &nbsp;·&nbsp; <b>Jeneratör:</b> hareket → elektrik</div>' },
        { s: 'Sigorta, devreden aşırı akım geçince devreyi keserek kabloları ve cihazları korur. Güçlü cihazları aynı çoklu prize takmak sigortanın atmasının en sık nedenidir.' }
      ] },

    { t: 'Ele: harekete çevirmeyenler',
      steps: [{ s: 'Enerji dönüşümlerini ayıralım. Elektrik enerjisini harekete çevirmeyenleri ele.' }],
      ia: { tip: 'eleme', q: '<p>Elektrik enerjisini <b>harekete çevirmeyenleri</b> ele.</p>',
        ogeler: ['Vantilatör', 'Ütü', 'Mikser', 'LED lamba', 'Asansör', 'Jeneratör', 'Saç kurutma makinesi'],
        ele: [1, 3, 5],
        hint: 'İçinde elektrik motoru olanlar harekete çevirir. Biri ise tam tersini yapar.',
        why: 'Ütü ısıya, LED lamba ışığa çevirir. Jeneratör tam tersini yapar: hareketi elektriğe çevirir. Saç kurutma makinesi hem ısı hem hareket üretir, motoru vardır.' } },
    { t: 'Tasarruf, fatura ve santraller',
      steps: [
        { s: 'Bir cihazın harcadığı enerji, gücüne ve çalışma süresine bağlıdır. Güç kilovat, süre saat alınırsa enerji kilovatsaat çıkar.',
          h: '<div class="an-rule"><b>Enerji (kWh) = Güç (kW) × Süre (h)</b> · <b>Fatura = kWh × 1 kWh’in fiyatı</b> · 1 kW = 1000 W</div>' },
        { s: 'Örnek: 2000 vatlık bir ütü her gün 1,5 saat çalışıyor. 1 kilovatsaat 3 lira ise 30 günlük bedel ne olur?', v: 'Örnek: iki bin vatlık bir ütü her gün bir buçuk saat çalışıyor. Bir kilovatsaat üç lira ise otuz günlük bedel ne olur?',
          h: '<div class="an-ex"><span class="an-l">2000 W = 2 kW</span><span class="an-l rv b1">Günde: 2 × 1,5 = 3 kWh</span><span class="an-l rv b2">30 günde: 3 × 30 = 90 kWh</span><span class="an-l rv b3">Bedel: 90 × 3 = <b>270 TL</b></span></div>' },
        { s: 'Önce gücü kilovata çevir: 2000 vat, 2 kilovat. Günde 2 çarpı 1,5, yani 3 kilovatsaat.', v: 'Önce gücü kilovata çevir: iki bin vat, iki kilovat. Günde iki çarpı bir buçuk, yani üç kilovatsaat.', on: '.b1' },
        { s: 'Otuz günde 90 kilovatsaat. Bedel 90 çarpı 3, yani 270 lira. En sık hata, gücü kilovata çevirmeden hesaplamak.', v: 'Otuz günde doksan kilovatsaat. Bedel doksan çarpı üç, yani iki yüz yetmiş lira. En sık hata, gücü kilovata çevirmeden hesaplamak.', on: '.b2,.b3' },
        { s: 'Tasarruf için LED lamba kullan, boş odada ışığı kapat, makineleri tam dolu çalıştır, cihazları bekleme modunda bırakma, enerji sınıfı yüksek ürün seç.' },
        { s: 'Son olarak santraller. Çoğunda bir enerji kaynağı türbini döndürür, türbine bağlı jeneratör de elektrik üretir.',
          h: '<table class="an-tbl"><tr><th>Santral</th><th>Avantaj</th><th>Dezavantaj</th></tr><tr><td>Hidroelektrik</td><td>yenilenebilir, hava kirliliği yok</td><td>baraj gölü tarım alanlarını, yerleşimleri basar</td></tr><tr><td>Termik</td><td>sürekli, yüksek üretim</td><td>CO₂, asit yağmuru, kül</td></tr><tr><td>Rüzgâr, güneş</td><td>yenilenebilir, temiz</td><td>kesintili üretim, geniş alan</td></tr><tr><td>Jeotermal</td><td>yenilenebilir, sürekli</td><td>yalnız kaynak olan bölgede</td></tr><tr><td>Nükleer</td><td>az yakıtla çok enerji, sera gazı yok</td><td>radyoaktif atık, kaza riski; yenilenemez</td></tr></table>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Gücü <b>1500 W</b> olan bir ısıtıcı her gün <b>2 saat</b> çalıştırılıyor. <b>1 kWh</b> elektriğin fiyatı <b>2 TL</b> ise ısıtıcının <b>30 günlük</b> elektrik bedeli kaç TL’dir?</p>',
        c: ['90 TL', '180 TL', '6 000 TL', '180 000 TL'], a: 'B',
        hint: 'Önce 1500 W’ı kW’a çevir. Sonra günlük kWh’i bul, 30 ile çarp, en son fiyatla çarp.',
        hintV: 'Önce bin beş yüz vatı kilovata çevir. Sonra günlük kilovatsaati bul, otuzla çarp, en son fiyatla çarp.',
        why: '1500 W = 1,5 kW. Günde 1,5 × 2 = 3 kWh, 30 günde 90 kWh. Bedel 90 × 2 = 180 TL. Gücü kW’a çevirmeden hesaplayan 180 000 TL bulur.',
        whyV: 'Bin beş yüz vat, bir buçuk kilovat. Günde bir buçuk çarpı iki, üç kilovatsaat; otuz günde doksan kilovatsaat. Bedel doksan çarpı iki, yüz seksen lira. Gücü kilovata çevirmeden hesaplayan yüz seksen bin lira bulur.' },
      steps: [{ s: 'Son ara soru! Birim çevirmeyi unutma, gerisi çarpma.' }] }
  ]
};
