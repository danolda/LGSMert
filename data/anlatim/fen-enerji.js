/* Adım Adım Anlatım · Fen · Canlılar ve Enerji İlişkileri (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['fen-enerji'] = {
  title: 'Canlılar ve Enerji İlişkileri',
  desc: 'Besin zinciri ve ağı, ekoloji piramidi ve biyolojik birikim, fotosentez ve hızı, solunum, madde döngüleri, küresel iklim değişikliği ve sürdürülebilirlik; deney düzenekleri ve tuzaklarla sahne sahne.',
  ozet: [
    'Besin zincirinde ok, yenen canlıdan yiyen canlıya çizilir (enerjinin aktarıldığı yön). Zincir her zaman üreticiyle başlar; ayrıştırıcılar bütün halkalarla ilişkilidir.',
    'Piramitte yukarı çıktıkça enerji, birey sayısı ve biyokütle azalır; biyolojik birikim (zehirli madde) artar. Ders kitabı örneklerinde bir üst basamağa yaklaşık %10 enerji geçer.',
    'Fotosentez: karbondioksit + su → (ışık, klorofil) → besin + oksijen. Işık enerjisi kimyasal enerjiye dönüşür; yapay ışıkta da olur.',
    'Fotosentez hızı: ışık şiddeti, ışık rengi, karbondioksit, su ve sıcaklık. Işık, CO₂ ve su artınca hız bir yere kadar artar sonra sabitlenir; en hızlı mor ve kırmızı, en yavaş yeşil ışıkta.',
    'Solunum bütün canlılarda, gece ve gündüz sürer. Oksijenli solunum çok enerji verir; etil alkol fermantasyonunda CO₂ çıkar (hamur kabarır), laktik asit fermantasyonunda gaz çıkmaz.',
    'Bitkiler gündüz de solunum yapar. Solunum, ayrışma ve yanma havaya CO₂ verir; fotosentez CO₂’yi azaltır.',
    'Azot bağlayıcı bakteriler ve yıldırım havadaki azotu toprağa bağlar; azot ayrıştırıcı bakteriler havaya geri verir. Bitkiler azotu kökleriyle topraktan alır.',
    'Sera gazlarının artması küresel ısınmaya yol açar. Yeniden kullanım işlemden geçirmeden tekrar kullanmaktır; geri dönüşüm atığı işleyip ham madde yapmaktır.'
  ],
  scenes: [
    { t: 'Besin zinciri',
      base: '<svg class="an-svg" viewBox="0 0 340 230" role="img" aria-label="Besin zinciri: ot, çekirge, kurbağa, yılan, şahin">' +
        '<g class="rv z1"><circle cx="34" cy="206" r="16" fill="#f5b301"/><text x="34" y="180" font-size="11" text-anchor="middle">Güneş</text><path d="M52 206 L84 206" class="st2"/><path d="M78 201 L86 206 L78 211" class="st2"/>' +
        '<rect x="90" y="192" width="100" height="28" rx="8" class="boxa"/><text x="140" y="211" font-size="13" text-anchor="middle" font-weight="700">ot</text><text x="200" y="211" font-size="12" class="acc">üretici</text></g>' +
        '<g class="rv z2"><path d="M140 190 L140 172" class="st"/><path d="M135 178 L140 170 L145 178" class="st"/>' +
        '<rect x="90" y="142" width="100" height="28" rx="8" class="box"/><text x="140" y="161" font-size="13" text-anchor="middle" font-weight="700">çekirge</text><text x="200" y="161" font-size="12">1. tüketici (otçul)</text></g>' +
        '<g class="rv z3"><path d="M140 140 L140 122" class="st"/><path d="M135 128 L140 120 L145 128" class="st"/>' +
        '<rect x="90" y="92" width="100" height="28" rx="8" class="box"/><text x="140" y="111" font-size="13" text-anchor="middle" font-weight="700">kurbağa</text><text x="200" y="111" font-size="12">2. tüketici (etçil)</text>' +
        '<path d="M140 90 L140 72" class="st"/><path d="M135 78 L140 70 L145 78" class="st"/>' +
        '<rect x="90" y="42" width="100" height="28" rx="8" class="box"/><text x="140" y="61" font-size="13" text-anchor="middle" font-weight="700">yılan</text><text x="200" y="61" font-size="12">3. tüketici</text>' +
        '<path d="M140 40 L140 26" class="st"/><path d="M135 32 L140 24 L145 32" class="st"/>' +
        '<rect x="90" y="0" width="100" height="24" rx="8" class="box"/><text x="140" y="17" font-size="13" text-anchor="middle" font-weight="700">şahin</text><text x="200" y="17" font-size="12">4. tüketici</text></g></svg>',
      steps: [
        { s: 'Merhaba! Bu ünitede enerjinin canlılar arasında nasıl aktığını göreceğiz. Her şey Güneş’le başlar. Ot, Güneş’in ışık enerjisini besindeki kimyasal enerjiye çevirir.', on: '.z1' },
        { s: 'Çekirge otu yer. Bak, ok ottan çekirgeye doğru. Okun anlamı şu: enerji buraya aktarılıyor.', on: '.z2' },
        { s: 'Kurbağa çekirgeyi, yılan kurbağayı, şahin de yılanı yer. Kim kimi yiyor sırasıyla oluşan bu yapıya besin zinciri denir.', on: '.z3' },
        { s: 'Burada çok dikkat et, LGS’de en sık yapılan hata oku ters okumak. Ottan tavşana çizilen ok, tavşan otu yer demektir.',
          h: '<div class="an-trap">Ok <b>yenenden yiyene</b> çizilir: ot → tavşan = “tavşan otu yer”. Okun yönü enerjinin aktarıldığı yöndür.</div>' }
      ] },

    { t: 'Üretici, tüketici, ayrıştırıcı',
      base: '<table class="an-tbl"><tr><th>Grup</th><th>Besinini nasıl sağlar?</th><th>Örnek</th></tr>' +
        '<tr class="rv u1"><td><b>Üretici</b></td><td>fotosentezle kendisi üretir; zincirin hep ilk halkası</td><td>ot, ağaç, su yosunu, fitoplankton</td></tr>' +
        '<tr class="rv u2"><td><b>Otçul</b></td><td>yalnız bitkiyle beslenir</td><td>tavşan, çekirge, koyun</td></tr>' +
        '<tr class="rv u2"><td><b>Etçil</b></td><td>yalnız hayvanla beslenir</td><td>kurbağa, yılan, kartal</td></tr>' +
        '<tr class="rv u2"><td><b>Hepçil</b></td><td>bitki ve hayvanla beslenir</td><td>insan, ayı, fare, karga</td></tr>' +
        '<tr class="rv u3"><td><b>Ayrıştırıcı</b></td><td>ölü kalıntıları ve atıkları ayrıştırır</td><td>bazı bakteriler ve mantarlar</td></tr></table>',
      steps: [
        { s: 'Zincirdeki canlıları üç gruba ayırırız. Üreticiler fotosentezle kendi besinini üretir ve her zincirin ilk halkasıdır.', on: '.u1' },
        { s: 'Tüketiciler besinini dışarıdan hazır alır. Yalnız bitki yiyen otçul, yalnız hayvan yiyen etçil, ikisini de yiyen hepçildir.', on: '.u2' },
        { s: 'Bazı bakteriler ve mantarlar ise ayrıştırıcıdır. Ölü canlıları parçalayıp içlerindeki mineralleri toprağa geri kazandırır.', on: '.u3' },
        { s: 'Ayrıştırıcılar sayesinde madde döngüsü tamamlanır, üreticiler o maddeleri yeniden kullanır. Ayrıştırıcılar zincirin bütün halkalarıyla ilişkilidir.' }
      ] },

    { t: 'Grupla: üretici, tüketici, ayrıştırıcı',
      steps: [{ s: 'Şimdi sen ayır. Her canlıyı besin zincirindeki görevine göre doğru kutuya yerleştir.' }],
      ia: { tip: 'grup', q: '<p>Her canlıyı görevine göre yerleştir.</p>', gruplar: ['Üretici', 'Tüketici', 'Ayrıştırıcı'],
        ogeler: [{ m: 'Buğday', g: 0 }, { m: 'Su yosunu (alg)', g: 0 }, { m: 'Tavşan', g: 1 }, { m: 'Kartal', g: 1 },
          { m: 'Ölü kütükteki mantar', g: 2 }, { m: 'Çürükçül bakteri', g: 2 }, { m: 'Ayı', g: 1 }],
        hint: 'Kendi besinini fotosentezle üreten mi, hazır alan mı, yoksa ölüleri parçalayıp toprağa mineral kazandıran mı?',
        why: 'Buğday ve su yosunu fotosentez yapar: üretici. Tavşan, kartal ve ayı hazır besin alır: tüketici. Ölü canlıları parçalayan mantar ve bakteri ayrıştırıcıdır.' } },
    { t: 'Besin ağı nasıl okunur?',
      steps: [
        { s: 'Bir ekosistemde pek çok besin zinciri birbirine bağlanır; buna besin ağı denir.' },
        { s: 'Bir canlının ne yediğini bulmak için ona gelen oklara, onu kimin yediğini bulmak için ondan çıkan oklara bak.',
          h: '<div class="an-rule"><b>Gelen oklar</b> → ne yer? &nbsp;·&nbsp; <b>Çıkan oklar</b> → kim onu yer?<br>Yalnızca ok çıkan, hiç ok gelmeyen canlı <b>üreticidir</b>.</div>' },
        { s: 'Harflerle verilmiş bir ağda bile canlıların türünü oklardan çıkarabilirsin. Hepçil demek için hem bir üreticiden hem bir tüketiciden ok gelmesi gerekir.' },
        { s: 'Bir canlının sayısı azalırsa onu yiyenler besin bulamayıp azalır, onun yediği canlılar ise daha az avlanıp çoğalır. Etki zincir boyunca yayılır.',
          h: '<div class="an-ex"><span class="an-l">Kurbağalar azalırsa → yılanlar azalır, çekirgeler çoğalır</span><span class="an-l">Çekirgeler çoğalınca → otlar daha çok tüketilir</span></div>' },
        { s: 'Bir canlının birden çok besini varsa, biri azalınca diğerine yönelebilir. Bu yüzden besin ağları tek zincirlerden daha dengelidir.' }
      ] },

    { t: 'Dokun: besin ağında hepçil',
      steps: [{ s: 'Harflerle verilmiş bir besin ağı. K üretici, oklar enerjinin aktarıldığı yönü gösteriyor. Hepçil olan canlıya dokun.' }],
      ia: { tip: 'gorselsec', q: '<p>Oklar enerjinin aktarıldığı yönü gösterir; K üreticidir. <b>Hepçil</b> olan canlıya dokun.</p>',
        svg: '<svg class="an-svg" viewBox="0 0 340 214" role="group" aria-label="Harflerle verilmiş bir besin ağı; oklar enerjinin aktarıldığı yönü gösterir"><defs><marker id="okE" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="currentColor" class="acc"/></marker></defs><line x1="151.0" y1="175.0" x2="91.6" y2="140.5" class="st" stroke-width="2.5" marker-end="url(#okE)"/><line x1="189.0" y1="175.0" x2="248.4" y2="140.5" class="st" stroke-width="2.5" marker-end="url(#okE)"/><line x1="170.0" y1="164.0" x2="170.0" y2="133.0" class="st" stroke-width="2.5" marker-end="url(#okE)"/><line x1="91.6" y1="123.7" x2="145.5" y2="112.9" class="st" stroke-width="2.5" marker-end="url(#okE)"/><line x1="70.0" y1="106.0" x2="70.0" y2="61.0" class="st" stroke-width="2.5" marker-end="url(#okE)"/><line x1="270.0" y1="106.0" x2="270.0" y2="61.0" class="st" stroke-width="2.5" marker-end="url(#okE)"/><line x1="92.0" y1="36.0" x2="245.0" y2="36.0" class="st" stroke-width="2.5" marker-end="url(#okE)"/><g data-b="nK" aria-label="K canlısı"><circle cx="170" cy="186" r="22" class="box"/><text x="170" y="192" text-anchor="middle" font-size="18" font-weight="700">K</text></g><g data-b="nL" aria-label="L canlısı"><circle cx="70" cy="128" r="22" class="box"/><text x="70" y="134" text-anchor="middle" font-size="18" font-weight="700">L</text></g><g data-b="nM" aria-label="M canlısı"><circle cx="270" cy="128" r="22" class="box"/><text x="270" y="134" text-anchor="middle" font-size="18" font-weight="700">M</text></g><g data-b="nP" aria-label="P canlısı"><circle cx="170" cy="108" r="22" class="box"/><text x="170" y="114" text-anchor="middle" font-size="18" font-weight="700">P</text></g><g data-b="nN" aria-label="N canlısı"><circle cx="70" cy="36" r="22" class="box"/><text x="70" y="42" text-anchor="middle" font-size="18" font-weight="700">N</text></g><g data-b="nR" aria-label="R canlısı"><circle cx="270" cy="36" r="22" class="box"/><text x="270" y="42" text-anchor="middle" font-size="18" font-weight="700">R</text></g><text x="12" y="206" font-size="14" class="mut">K: üretici</text></svg>', dogru: ['nP'],
        hint: 'Bir canlının ne yediğini ona gelen oklar söyler. Hem üreticiden hem bir tüketiciden ok gelen canlıyı ara.',
        hintV: 'Bir canlının ne yediğini ona gelen oklar söyler. Hem üreticiden hem de bir tüketiciden ok gelen canlıyı ara.',
        why: 'P’ye hem üretici K’den hem otçul L’den ok geliyor: hepçil. R’ye gelen iki ok da tüketicilerden geliyor, o etçildir. L ve M yalnızca K’yi yer, otçuldur.',
        whyV: 'Pe canlısına hem üreticiden hem de otçul bir canlıdan ok geliyor; bu yüzden hepçildir. Re canlısına gelen iki ok da tüketicilerden geliyor, o etçildir. Yalnızca üreticiyi yiyenler ise otçuldur.' } },
    { t: 'Ekoloji piramidi ve biyolojik birikim',
      base: '<svg class="an-svg" viewBox="0 0 340 215" role="img" aria-label="Ekoloji piramidi: yukarı çıktıkça enerji azalır, biyolojik birikim artar">' +
        '<polygon points="30,170 310,170 277.3,135 62.7,135" fill="#22c55e" fill-opacity=".55" class="rv y1"/><text x="170" y="158" font-size="12" text-anchor="middle" font-weight="700" class="rv y1">üreticiler</text>' +
        '<polygon points="62.7,135 277.3,135 244.7,100 95.3,100" fill="#22c55e" fill-opacity=".4" class="rv y1"/><text x="170" y="123" font-size="12" text-anchor="middle" class="rv y1">1. tüketiciler</text>' +
        '<polygon points="95.3,100 244.7,100 212,65 128,65" fill="#22c55e" fill-opacity=".28" class="rv y1"/><text x="170" y="88" font-size="12" text-anchor="middle" class="rv y1">2. tüketiciler</text>' +
        '<polygon points="128,65 212,65 179.3,30 160.7,30" fill="#22c55e" fill-opacity=".16" class="rv y1"/><text x="170" y="54" font-size="10" text-anchor="middle" class="rv y1">3. tük.</text>' +
        '<g class="rv y2"><path d="M20 165 L20 40" class="st2" stroke-width="3"/><path d="M14 50 L20 38 L26 50" class="st2" stroke-width="3"/><text x="10" y="192" font-size="12">enerji, birey sayısı ↓</text></g>' +
        '<g class="rv y3"><path d="M320 165 L320 40" stroke="#ef4444" stroke-width="3" fill="none"/><path d="M314 50 L320 38 L326 50" stroke="#ef4444" stroke-width="3" fill="none"/><text x="330" y="208" font-size="12" text-anchor="end" fill="#ef4444">biyolojik birikim ↑</text></g></svg>',
      steps: [
        { s: 'Besin zincirinin basamaklarını üst üste dizince bir piramit oluşur. En altta üreticiler var.', on: '.y1' },
        { s: 'Her basamak aldığı enerjinin büyük kısmını kendi yaşamı için kullanır ve ısı olarak kaybeder. Üste yalnızca küçük bir kısmı, ders kitabı örneklerinde yaklaşık yüzde onu geçer.', on: '.y2' },
        { s: 'Bu yüzden yukarı çıktıkça enerji, birey sayısı ve toplam biyokütle azalır. Vücut büyüklüğü ise genellikle artar.' },
        { s: 'Ama bir şey ters yönde artar: biyolojik birikim. Tarım ilaçları ve cıva gibi ağır metaller vücuttan atılamaz, yağ dokusunda birikir.', on: '.y3' },
        { s: 'Bir tüketici yediği çok sayıda canlının zehrini kendinde toplar. Zehir en az üreticilerde, en çok zincirin son halkasında bulunur.' },
        { s: 'Burada çok dikkat et: enerji yukarı doğru azalır, birikim yukarı doğru artar. İkisini aynı yönde düşünmek klasik bir tuzaktır.',
          h: '<div class="an-tip">Hafıza ipucu: <b>Yukarı çık, enerji kaçar, zehir birikir.</b> Soruda farklı bir oran verilirse yüzde on yerine onu kullan.</div>' }
      ] },

    { t: 'Doğru mu, yanlış mı: piramit',
      steps: [{ s: 'Piramidin iki zıt yönünü karıştırmayalım. Her ifadeye doğru ya da yanlış de.' }],
      ia: { tip: 'dogruyanlis', q: '<p>Ekoloji piramidi için her ifadeye karar ver.</p>',
        ifadeler: [
          { m: 'Piramitte yukarı çıktıkça aktarılan enerji azalır.', d: true, a: 'Her basamak enerjinin çoğunu kullanır, ısı olarak kaybeder.' },
          { m: 'Piramitte yukarı çıktıkça birey sayısı artar.', d: false, a: 'Birey sayısı ve biyokütle azalır; vücut büyüklüğü genellikle artar.' },
          { m: 'Tarım ilacı en çok üreticilerin vücudunda birikir.', d: false, a: 'En az üreticide, en çok son halkada birikir.' },
          { m: 'Zincirin son halkası en çok ağır metal biriktiren canlıdır.', d: true, a: 'Yediği çok sayıda canlının zehrini toplar.' }],
        hint: 'Enerji ve birikim zıt yönlerde değişir. Hangisi yukarı doğru azalıyordu?',
        why: 'Enerji, birey sayısı ve biyokütle yukarı doğru azalır; biyolojik birikim ise yukarı doğru artar. İkisini aynı yönde düşünmek klasik tuzaktır.' } },
    { t: 'Ara soru', cp: {
        q: '<p>Bir besin zincirinde üreticilerdeki enerji <b>50 000 kJ</b>’dür ve her basamağa bir öncekinin <b>%10</b>’u aktarılmaktadır. Buna göre <b>2. tüketicilere</b> kaç kJ enerji aktarılır?</p>',
        c: ['50 kJ', '500 kJ', '5 000 kJ', '45 000 kJ'], a: 'B',
        hint: 'Önce 1. tüketicilere geçeni bul, sonra onun da onda birini al.',
        why: '1. tüketiciler: 50 000 × {{1|10}} = 5 000 kJ. 2. tüketiciler: 5 000 × {{1|10}} = 500 kJ. Bu basamakta biyolojik birikim 1. tüketicilerden fazladır.',
        whyV: 'Birinci tüketicilere elli binin onda biri, beş bin kilojul geçer. İkinci tüketicilere de beş binin onda biri, beş yüz kilojul. Bu basamakta biyolojik birikim birinci tüketicilerden daha fazladır.' },
      steps: [{ s: 'Kısa bir hesap sorusu. Her basamakta onda birini almayı unutma.' }] },

    { t: 'Fotosentez',
      base: '<svg class="an-svg" viewBox="0 0 340 190" role="img" aria-label="Fotosentez: karbondioksit ve su, ışık ve klorofil ile besin ve oksijene dönüşür">' +
        '<ellipse cx="170" cy="100" rx="78" ry="40" fill="#22c55e" fill-opacity=".45" stroke="#22c55e" stroke-width="2"/><line x1="96" y1="100" x2="244" y2="100" stroke="#22c55e" stroke-width="2"/>' +
        '<text x="170" y="92" font-size="11" text-anchor="middle" font-weight="700">kloroplast</text><text x="170" y="116" font-size="10" text-anchor="middle">klorofil</text>' +
        '<g class="rv f1"><circle cx="170" cy="22" r="13" fill="#f5b301"/><path d="M170 38 L170 56" class="st2" stroke-width="3"/><path d="M164 50 L170 58 L176 50" class="st2" stroke-width="3"/><text x="190" y="27" font-size="12">ışık</text></g>' +
        '<g class="rv f2"><path d="M20 62 L92 86" class="st" stroke-width="2.5"/><path d="M84 79 L94 87 L82 89" class="st" stroke-width="2.5"/><text x="6" y="52" font-size="12">karbondioksit</text><text x="6" y="66" font-size="10" class="mut">havadan, gözenekten</text>' +
        '<path d="M20 150 L92 116" class="st" stroke-width="2.5"/><path d="M82 114 L94 115 L86 124" class="st" stroke-width="2.5"/><text x="6" y="168" font-size="12">su</text><text x="6" y="182" font-size="10" class="mut">topraktan, kökle</text></g>' +
        '<g class="rv f3"><path d="M248 86 L318 62" stroke="#3b82f6" stroke-width="2.5" fill="none"/><path d="M308 60 L320 62 L312 70" stroke="#3b82f6" stroke-width="2.5" fill="none"/><text x="334" y="52" font-size="12" text-anchor="end">oksijen</text>' +
        '<path d="M248 116 L318 150" stroke="#3b82f6" stroke-width="2.5" fill="none"/><path d="M308 152 L320 151 L313 142" stroke="#3b82f6" stroke-width="2.5" fill="none"/><text x="334" y="170" font-size="12" text-anchor="end">besin (glikoz)</text></g></svg>',
      steps: [
        { s: 'Şimdi zincirin başladığı yere, fotosenteze bakalım. Yapraktaki kloroplastlarda bulunan yeşil klorofil ışığı soğurur.', on: '.f1' },
        { s: 'Bitki havadan, yapraktaki gözeneklerden karbondioksit alır; topraktan da kökleriyle su alır.', on: '.f2' },
        { s: 'Işık enerjisiyle bunlardan besin, yani glikoz ve oksijen üretir. Böylece ışık enerjisi besindeki kimyasal enerjiye dönüşür.', on: '.f3',
          h: '<div class="an-rule"><b>karbondioksit + su</b> —(ışık, klorofil)→ <b>besin + oksijen</b></div>' },
        { s: 'Glikoz büyümede ve solunumda kullanılır, fazlası nişasta olarak depolanır. Oksijen havaya ya da suya verilir.' },
        { s: 'Fotosentez yalnızca Güneş ışığında olmaz; lamba gibi yapay ışıkta da gerçekleşir. Fotosentez olmasaydı besin zincirleri hiç başlayamazdı.' }
      ] },

    { t: 'Boşluk: fotosentezin denklemi',
      steps: [{ s: 'Fotosentezi bir denklem olarak yazalım. Boşluklara doğru kartları yerleştir.' }],
      ia: { tip: 'bosluk', q: '<p>Fotosentezin denklemini tamamla.</p>',
        metin: 'karbondioksit + [_]  —ışık, klorofil→  [_] + oksijen',
        secenek: ['su', 'glikoz', 'azot', 'mineral', 'ATP'], cevap: ['su', 'glikoz'],
        hint: 'Bitki bir maddeyi havadan yapraklarıyla, diğerini topraktan kökleriyle alıyordu. Ürettiği besinin adı ne?',
        why: 'Bitki karbondioksit ve suyu ışık enerjisiyle glikoz ve oksijene çevirir. Glikozun fazlası nişasta olarak depolanır; ATP ise solunumda oluşur.' } },
    { t: 'Fotosentez deneylerinin araçları',
      steps: [
        { s: 'LGS fotosentezi neredeyse hep bir deney düzeneğiyle sorar. Önce kullanılan araçların ne anlama geldiğini bilmelisin.',
          h: '<table class="an-tbl"><tr><th>Araç / gözlem</th><th>Ne anlama gelir?</th></tr>' +
            '<tr class="rv d1"><td>İyot çözeltisi mavi-mor oldu</td><td>yaprakta nişasta üretilmiş</td></tr>' +
            '<tr class="rv d2"><td>KOH çözeltisi</td><td>ortamdaki CO₂’yi tutar → bitki fotosentez yapamaz</td></tr>' +
            '<tr class="rv d3"><td>Kireç suyu bulandı</td><td>ortama CO₂ verilmiş (çoğu zaman solunum)</td></tr>' +
            '<tr class="rv d4"><td>Su bitkisinden kabarcık</td><td>oksijen çıkıyor; sayı arttıkça hız artmış</td></tr>' +
            '<tr class="rv d4"><td>Önceden karanlıkta bekletme</td><td>eski nişastayı harcatır</td></tr></table>' },
        { s: 'İyot nişasta ayıracıdır. Yaprak mavi-mor renk alırsa orada nişasta, yani besin üretilmiş demektir.', on: '.d1' },
        { s: 'KOH ortamdaki karbondioksiti tutar. Fanusa konursa bitki karbondioksit bulamaz ve fotosentez yapamaz.', v: 'Potasyum hidroksit ortamdaki karbondioksiti tutar. Fanusa konursa bitki karbondioksit bulamaz ve fotosentez yapamaz.', on: '.d2' },
        { s: 'Kireç suyu karbondioksitle karşılaşınca bulanır. Su bitkisinden çıkan kabarcıklar ise oksijendir ve fotosentez hızını ölçmenin kolay yoludur.', on: '.d3,.d4' },
        { s: 'Burada çok dikkat et: yapay ışıkta fotosentez olup olmadığını araştıran bir deneye KOH konmaz! Bitki ışık olsa bile karbondioksitsiz kalır.', v: 'Burada çok dikkat et: yapay ışıkta fotosentez olup olmadığını araştıran bir deneye potasyum hidroksit konmaz! Bitki ışık olsa bile karbondioksitsiz kalır.',
          h: '<div class="an-trap">Yapay ışık deneyine <b>KOH konmaz</b>. Ayrıca tek düzenek yetmez: test edilen değişkenin olmadığı bir <b>kontrol düzeneği</b> de gerekir.</div>' }
      ] },

    { t: 'Eşleştir: deney araçları',
      steps: [{ s: 'Deney araçlarını tanıyalım. Her aracı ya da gözlemi, deneydeki anlamıyla eşleştir.' }],
      ia: { tip: 'eslestir', q: '<p>Her aracı deneydeki anlamıyla eşleştir.</p>', solBaslik: 'Araç / gözlem', sagBaslik: 'Anlamı',
        sol: ['İyot çözeltisi', 'KOH', 'Kireç suyu', 'Su bitkisinde kabarcık', 'Lambayı yaklaştırmak'],
        sag: ['Nişasta var mı?', 'Karbondioksiti tutar', 'Karbondioksitle bulanır', 'Çıkan oksijen', 'Işık şiddeti artar'],
        hint: 'İki araç karbondioksitle ilgili: biri onu ortamdan çeker, öbürü varlığını gösterir.',
        why: 'İyot nişastada mavi-mor olur; KOH karbondioksiti tutar, kireç suyu onunla bulanır. Kabarcıklar oksijendir, lambayı yaklaştırmak ışık şiddetini artırır.',
        whyV: 'İyot nişastada mavi mor renk alır. Ka o ha karbondioksiti tutar, kireç suyu ise onunla bulanır. Kabarcıklar oksijendir; lambayı yaklaştırmak ışık şiddetini artırır.' } },
    { t: 'Fotosentez hızını ne etkiler?',
      base: '<svg class="an-svg" viewBox="0 0 340 175" role="img" aria-label="Işık şiddeti arttıkça fotosentez hızı bir noktaya kadar artar sonra sabit kalır">' +
        '<line x1="40" y1="150" x2="325" y2="150" class="ln" stroke-width="2"/><line x1="40" y1="20" x2="40" y2="150" class="ln" stroke-width="2"/>' +
        '<text x="320" y="168" font-size="11" text-anchor="end" class="mut">ışık şiddeti (CO₂, su)</text><text x="46" y="18" font-size="11" class="mut">fotosentez hızı</text>' +
        '<path d="M40 150 Q115 52 190 52 L320 52" class="st dr r1" stroke-width="3"/>' +
        '<text x="255" y="44" font-size="11" text-anchor="middle" class="acc rv r2">sabit: başka faktör sınırlıyor</text>' +
        '<text x="110" y="122" font-size="11" class="rv r1">artıyor</text></svg>',
      steps: [
        { s: 'Fotosentez hızını beş faktör etkiler: ışık şiddeti, ışık rengi, karbondioksit miktarı, su miktarı ve sıcaklık.' },
        { s: 'Işık şiddetini artıralım. Lambayı bitkiye yaklaştırmak ışık şiddetini artırır. Hız önce artar…', on: '.r1', w: 500 },
        { s: '…sonra bir noktada sabit kalır. Çünkü artık hızı başka bir faktör sınırlıyordur. Karbondioksit ve su için de grafik böyledir.', on: '.r2' },
        { s: 'Sıcaklıkta durum farklı: hız uygun sıcaklığa kadar artar, çok yüksek sıcaklıkta azalır.' },
        { s: 'Işık renginde klorofil en çok mor ve kırmızı ışığı soğurur; fotosentez bu ışıklarda en hızlıdır. Yeşil ışığı ise çoğunlukla yansıtır, yeşilde fotosentez en yavaştır.' },
        { s: 'İki tuzak: oksijen fotosentezin ürünüdür, hızı etkileyen faktörler arasında yoktur. Grafik yataylaşınca da hız azaldı değil, sabit kaldı denir.',
          h: '<div class="an-trap"><span class="an-bad-t">Ortama oksijen eklemek fotosentez hızını artırır.</span><br>Eğri yataylaştıysa hız <b>sabit</b> kalmıştır, azalmamıştır.</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Özdeş su bitkileriyle dört düzenek kuruluyor:</p><table class="an-tbl"><tr><th>Düzenek</th><th>Lamba sayısı</th><th>Sıcaklık</th><th>Işık rengi</th></tr><tr><td>I</td><td>2</td><td>20 °C</td><td>beyaz</td></tr><tr><td>II</td><td>1</td><td>30 °C</td><td>beyaz</td></tr><tr><td>III</td><td>1</td><td>20 °C</td><td>beyaz</td></tr><tr><td>IV</td><td>1</td><td>20 °C</td><td>yeşil</td></tr></table><p><b>Işık şiddetinin</b> fotosentez hızına etkisini incelemek için hangi iki düzenek karşılaştırılmalıdır?</p>',
        c: ['I ve II', 'I ve III', 'II ve III', 'III ve IV'], a: 'B',
        hint: 'Yalnızca lamba sayısı farklı, diğer her şeyi aynı olan iki düzeneği bul.',
        why: 'I ile III’te yalnızca lamba sayısı (ışık şiddeti) farklıdır. II ile III sıcaklığın, III ile IV ışık renginin etkisini gösterir. I ile II’de iki değişken birden farklı olduğu için karşılaştırılamaz.',
        whyV: 'Birinci ile üçüncü düzenekte yalnızca lamba sayısı, yani ışık şiddeti farklı. İkinci ile üçüncü sıcaklığın, üçüncü ile dördüncü ışık renginin etkisini gösterir. Birinci ile ikinci ise iki değişken birden farklı olduğu için karşılaştırılamaz.' },
      steps: [{ s: 'Değişken kontrolü sorusu. Tabloda yalnızca bir sütunu farklı olan çifti ara.' }] },

    { t: 'Solunum',
      base: '<table class="an-tbl"><tr><th></th><th>Oksijenli</th><th>Etil alkol fer.</th><th>Laktik asit fer.</th></tr>' +
        '<tr class="rv s1"><td>Oksijen</td><td>kullanılır</td><td>kullanılmaz</td><td>kullanılmaz</td></tr>' +
        '<tr class="rv s1"><td>Ürün</td><td>CO₂ + su + enerji</td><td>etil alkol + CO₂ + enerji</td><td>laktik asit + enerji</td></tr>' +
        '<tr class="rv s2"><td>Enerji</td><td>fazla</td><td>az</td><td>az</td></tr>' +
        '<tr class="rv s3"><td>Örnek</td><td>nefesimizdeki CO₂</td><td>hamurun kabarması (maya)</td><td>yoğurt yapımı, kas yorgunluğu</td></tr></table>',
      steps: [
        { s: 'Peki üretilen besin nasıl kullanılır? Solunumla. Solunum, hücrelerde besinlerin parçalanıp içlerindeki enerjinin kullanılabilir hâle getirilmesidir.' },
        { s: 'Oksijenli solunumda besin oksijenle parçalanır, karbondioksit, su ve enerji çıkar. Oksijensiz solunuma fermantasyon denir.', on: '.s1' },
        { s: 'Oksijenli solunumda çok enerji elde edilir; fermantasyonda daha az. Açığa çıkan enerjinin bir kısmı ATP’de depolanır, bir kısmı ısı olarak çıkar.', v: 'Oksijenli solunumda çok enerji elde edilir; fermantasyonda daha az. Açığa çıkan enerjinin bir kısmı a te pe molekülünde depolanır, bir kısmı ısı olarak çıkar.', on: '.s2' },
        { s: 'Maya hamuru kabartır; kabartan gaz karbondioksittir. Yoğurt bakterileri ve oksijen yetmeyen kas hücrelerimiz ise laktik asit fermantasyonu yapar.', on: '.s3' },
        { s: 'Tuzaklar: hamuru kabartan gaz oksijen değil, karbondioksittir. Maya bir mantardır, fotosentez yapmaz. Laktik asit fermantasyonunda gaz çıkmaz.',
          h: '<div class="an-trap">Hamuru kabartan: <b>CO₂</b> (oksijen değil). Laktik asit fermantasyonu: <b>gaz yok</b>. Solunum bütün canlılarda, <b>gece ve gündüz</b> sürer.</div>' }
      ] },

    { t: 'Ele: fermantasyon tuzakları',
      steps: [{ s: 'Fermantasyonla ilgili yanlış bilgileri ayıklayalım. Yanlış olanları ele.' }],
      ia: { tip: 'eleme', q: '<p>Fermantasyon için <b>yanlış</b> olanları ele.</p>',
        ogeler: ['Oksijensiz gerçekleşir', 'Hamuru kabartan gaz karbondioksittir', 'Maya fotosentez yapar', 'Laktik asit fermantasyonunda gaz çıkar', 'Oksijenli solunumdan az enerji verir', 'Yoğurt bakterileri yapar'],
        ele: [2, 3],
        hint: 'Maya bir mantar mıdır, bitki mi? Laktik asit fermantasyonunun ürünlerini düşün.',
        why: 'Maya bir mantardır, fotosentez yapmaz. Laktik asit fermantasyonunda gaz çıkmaz; hamuru kabartan karbondioksit maya fermantasyonundan gelir.' } },
    { t: 'Fotosentez ve solunum birlikte',
      steps: [
        { s: 'Şimdi iki olayı yan yana koyalım.',
          h: '<table class="an-tbl"><tr><th></th><th>Fotosentez</th><th>Oksijenli solunum</th></tr><tr><td>Kimde?</td><td>yalnız üreticiler</td><td>bütün canlılar</td></tr><tr><td>Ne zaman?</td><td>yalnız ışık varken</td><td>her zaman</td></tr><tr><td>Bitkide nerede?</td><td>kloroplast</td><td>mitokondri</td></tr><tr><td>Kullanılan</td><td>CO₂, su</td><td>besin, oksijen</td></tr><tr><td>Oluşan</td><td>besin, oksijen</td><td>CO₂, su, enerji</td></tr></table>' },
        { s: 'Gündüz bitki hem fotosentez hem solunum yapar. Işık yeterliyse fotosentez daha hızlı olduğu için dışarıya oksijen verir, karbondioksit alır.' },
        { s: 'Gece yalnızca solunum yapar: oksijen alır, karbondioksit verir.' },
        { s: 'Burada çok dikkat et: bitkiler gündüz yalnızca fotosentez yapar cümlesi yanlış. Bitkiler gündüz de solunum yapar!',
          h: '<div class="an-trap"><span class="an-bad-t">Bitkiler gündüz yalnızca fotosentez, gece yalnızca solunum yapar.</span><br><span class="an-ok-t">Gündüz ikisi birlikte; gece yalnız solunum.</span> Solunum havaya oksijen değil, CO₂ verir.</div>' },
        { s: 'Kapalı fanus sorularında: ışıkta bitki ve fare birlikteyse fare en uzun yaşar. Karanlıkta ise bitki de oksijen tükettiği için oksijen daha çabuk biter.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Özdeş kapalı fanuslardan birine yalnızca bir fare, diğerine bir fare ve bir saksı bitkisi konuyor. İki fanus da <b>karanlık</b> bir ortamda bekletiliyor. Buna göre hangisi <b>doğrudur</b>?</p>',
        c: ['Bitkili fanusta fare daha uzun yaşar, çünkü bitki oksijen üretir.', 'Bitkili fanusta oksijen daha çabuk tükenir.', 'Karanlıkta bitki solunum yapmaz.', 'İki fanusta oksijen aynı hızla azalır.'], a: 'B',
        hint: 'Karanlıkta bitki fotosentez yapabilir mi? Peki solunuma devam eder mi?',
        why: 'Karanlıkta bitki fotosentez yapamaz ama solunuma devam eder ve oksijen tüketir. Bu yüzden bitkili fanusta oksijen, yalnız farenin olduğu fanustan daha çabuk biter.' },
      steps: [{ s: 'Fanus sorusu geldi. Işık olmadığında bitkinin ne yaptığını düşün.' }] },

    { t: 'Madde döngüleri: su, karbon, oksijen',
      steps: [
        { s: 'Enerji ekosistemde tek yönlü akar ve sonunda ısı olarak kaybolur. Madde ise döner. Su, karbon, oksijen ve azot canlılarla çevre arasında sürekli dolaşır.' },
        { s: 'Su döngüsünde su buharlaşır, bitkiler yapraklarından terleme ile su buharı verir. Buhar yoğuşup bulut olur, yağışla yeryüzüne döner.' },
        { s: 'Karbon ve oksijen döngüsünde hangi olayın havaya ne verdiğine bakalım.',
          h: '<table class="an-tbl"><tr><th>Olay</th><th>Havadaki CO₂</th><th>Havadaki O₂</th></tr><tr><td>Fotosentez</td><td>azaltır</td><td>artırır</td></tr><tr><td>Solunum (bütün canlılar)</td><td>artırır</td><td>azaltır</td></tr><tr><td>Ayrıştırıcıların ayrıştırması</td><td>artırır</td><td>azaltır</td></tr><tr><td>Fosil yakıt, odun yanması</td><td>artırır</td><td>azaltır</td></tr><tr><td>Ormansızlaşma</td><td>artırır</td><td>azaltır</td></tr></table>' },
        { s: 'Karbon bitkiye fotosentezle girer, besinle hayvanlara geçer, solunum, ayrışma ve yanmayla yeniden havaya döner. Kömür ve petrol de birer karbon deposudur.' },
        { s: 'Tuzak: ayrıştırıcılar havadaki karbondioksiti azaltmaz, tersine havaya karbondioksit verir. Karbondioksit veren tek grup hayvanlar da değil; bitkiler de solunum yapar.',
          h: '<div class="an-trap"><span class="an-bad-t">Ayrıştırıcılar havadaki CO₂’yi azaltır.</span> → <span class="an-ok-t">Ayrıştırma havaya CO₂ verir.</span></div>' }
      ] },

    { t: 'Azot döngüsü',
      base: '<svg class="an-svg" viewBox="0 0 340 190" role="img" aria-label="Azot döngüsü: bağlama, bitki ve hayvanlar, ayrıştırma, havaya geri verme">' +
        '<rect x="95" y="6" width="150" height="30" rx="8" class="box"/><text x="170" y="26" font-size="12" text-anchor="middle" font-weight="700">havadaki azot gazı</text>' +
        '<rect x="10" y="140" width="140" height="40" rx="8" class="box"/><text x="80" y="157" font-size="11" text-anchor="middle" font-weight="700">topraktaki</text><text x="80" y="172" font-size="11" text-anchor="middle" font-weight="700">azotlu bileşikler</text>' +
        '<rect x="200" y="140" width="130" height="40" rx="8" class="boxa"/><text x="265" y="157" font-size="11" text-anchor="middle" font-weight="700">bitki → hayvan</text><text x="265" y="172" font-size="10" text-anchor="middle">protein, DNA</text>' +
        '<g class="rv n1"><path d="M110 38 L60 136" class="st" stroke-width="2.5"/><path d="M58 126 L59 138 L68 130" class="st" stroke-width="2.5"/><text x="4" y="76" font-size="11" class="acc">yıldırım,</text><text x="4" y="90" font-size="11" class="acc">azot bağlayıcı</text><text x="4" y="104" font-size="11" class="acc">bakteri</text></g>' +
        '<g class="rv n2"><path d="M152 158 L196 158" class="st" stroke-width="2.5"/><path d="M188 153 L198 158 L188 163" class="st" stroke-width="2.5"/><text x="174" y="150" font-size="10" text-anchor="middle">kökle</text></g>' +
        '<g class="rv n3"><path d="M240 182 Q170 200 110 182" fill="none" stroke="#94a3b8" stroke-width="2.5"/><path d="M118 178 L108 182 L117 188" fill="none" stroke="#94a3b8" stroke-width="2.5"/><text x="265" y="132" font-size="10" text-anchor="middle" class="mut">ölü, atık → ayrıştırıcılar</text></g>' +
        '<g class="rv n4"><path d="M120 136 L170 40" stroke="#f5b301" stroke-width="2.5" fill="none"/><path d="M162 46 L171 38 L172 50" stroke="#f5b301" stroke-width="2.5" fill="none"/><text x="180" y="80" font-size="11">azot ayrıştırıcı</text><text x="180" y="94" font-size="11">bakteri</text></g></svg>',
      steps: [
        { s: 'Azot, protein ve DNA gibi temel moleküllerin yapısında bulunur. Havanın yaklaşık yüzde yetmiş sekizi azot gazıdır; ama bitkiler ve hayvanlar bu gazı doğrudan kullanamaz.' },
        { s: 'Havadaki azotu yıldırımlar ve azot bağlayıcı bakteriler, bitkilerin kullanabileceği bileşiklere çevirir. Bu bakterilerin bir kısmı baklagillerin köklerinde yaşar.', on: '.n1' },
        { s: 'Bitkiler azotlu bileşikleri topraktan kökleriyle alır, yapraklarıyla havadan almaz. Hayvanlar da azotu bitkileri yiyerek alır.', on: '.n2' },
        { s: 'Canlılar ölünce ayrıştırıcılar onları parçalar ve azot yeniden toprağa katılır.', on: '.n3' },
        { s: 'Azot ayrıştırıcı bakteriler ise topraktaki azotlu bileşikleri azot gazına çevirip havaya geri verir. Döngü tamamlandı.', on: '.n4' },
        { s: 'Tuzaklar: bağlayıcı ve ayrıştırıcı bakterilerin görevi birbirinin tersidir. Yıldırım azotu bağlar ama mikroorganizma değildir. Baklagil ekmek toprağı azotça zenginleştirir.' }
      ] },

    { t: 'Sırala: azot döngüsü',
      steps: [{ s: 'Azotun yolculuğunu baştan sona kur. Adımları havadaki azot gazından başlayarak sırala.' }],
      ia: { tip: 'sirala', q: '<p>Azot döngüsünün adımlarını sırala.</p>', ust: 'başlangıç', alt: 'havaya dönüş',
        ogeler: ['Havadaki azot gazı', 'Bağlayıcı bakteri bileşiğe çevirir', 'Bitki kökleriyle alır', 'Hayvan bitkiyi yer', 'Ayrıştırıcılar ölüleri parçalar', 'Azot ayrıştırıcı bakteri gaza çevirir'],
        hint: 'Bitkiler azotu havadan doğrudan alamıyordu. Önce onu kullanılabilir yapan kim? Döngü nerede kapanıyor?',
        why: 'Bağlayıcı bakteriler havadaki azotu bileşiğe çevirir, bitki kökleriyle alır, hayvana geçer. Ölüler ayrışınca azot toprağa döner; azot ayrıştırıcı bakteriler de onu gaz olarak havaya verir.' } },
    { t: 'Küresel iklim değişikliği ve sürdürülebilirlik',
      steps: [
        { s: 'Atmosferdeki karbondioksit, metan ve su buharı yeryüzünün yaydığı ısının bir kısmını tutar. Buna sera etkisi denir; olmasaydı Dünya çok soğuk olurdu.' },
        { s: 'Sorun, insan etkinlikleriyle bu gazların artması. Daha çok ısı tutulur, ortalama sıcaklık yükselir. Buna küresel ısınma denir.',
          h: '<table class="an-tbl"><tr><th>Neden</th><th>Sonuç</th><th>Önlem</th></tr><tr><td>fosil yakıt, ormansızlaşma, sanayi, trafik</td><td>buzulların erimesi, deniz seviyesinin yükselmesi, kuraklık, sel</td><td>yenilenebilir enerji, ağaçlandırma, toplu taşıma, yalıtım, tasarruf</td></tr></table>' },
        { s: 'Ayak izlerini de bilmelisin. Karbon ayak izi etkinliklerimizin verdiği sera gazı, su ayak izi bir ürün için harcanan toplam tatlı su miktarıdır.' },
        { s: 'Sürdürülebilir kalkınma, bugünün ihtiyaçlarını gelecek nesillerin ihtiyaçlarını tehlikeye atmadan karşılamaktır. Bunun yolu tasarruf, yeniden kullanım ve geri dönüşüm.',
          h: '<table class="an-tbl"><tr><th>Kavram</th><th>Örnek</th></tr><tr><td><b>Tasarruf</b></td><td>damla sulama, damlatan musluğu tamir ettirmek</td></tr><tr><td><b>Yeniden kullanım</b></td><td>boş kavanozu kalemlik yapmak, bez çanta</td></tr><tr><td><b>Geri dönüşüm</b></td><td>atık kâğıttan yeni kâğıt, cam şişeden yeni şişe</td></tr><tr><td><b>Geri kazanım</b></td><td>organik atıktan kompost</td></tr></table>' },
        { s: 'Burada çok dikkat et: kavanozu kalemlik yapmak geri dönüşüm değil, yeniden kullanımdır. Çünkü madde hiçbir işlemden geçmedi.',
          h: '<div class="an-trap"><span class="an-bad-t">Kavanozu kalemlik yapmak geri dönüşümdür.</span> → <span class="an-ok-t">Yeniden kullanım.</span> Geri dönüşüm = atığı <b>işleyip</b> ham madde yapmak.</div>' },
        { s: 'Atıkları kaynağında ayırmak önemlidir: kâğıt, plastik, cam, metal ve piller ayrı toplanır. Geri dönüşüm ham madde ve enerji tasarrufu sağlar, ekonomiye katkı yapar.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdakilerden hangisi bir <b>geri dönüşüm</b> örneğidir?</p>',
        c: ['Boş reçel kavanozunu kalemlik olarak kullanmak', 'Alışverişte bez çanta kullanmak', 'Atık kâğıtları işleyerek yeni kâğıt üretmek', 'Damlatan musluğu tamir ettirmek'], a: 'C',
        hint: 'Geri dönüşümde atık bir işlemden geçirilip ham madde olarak yeniden üretime katılır.',
        why: 'Atık kâğıdın işlenip yeni kâğıda dönüşmesi geri dönüşümdür. Kavanozu kalemlik yapmak ve bez çanta kullanmak yeniden kullanım, musluğu tamir ettirmek tasarruftur.' },
      steps: [{ s: 'Son ara soru! Yeniden kullanım ile geri dönüşüm farkını hatırla.' }] }
  ]
};
