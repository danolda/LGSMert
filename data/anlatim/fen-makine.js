/* Adım Adım Anlatım · Fen · Basit Makineler (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['fen-makine'] = {
  title: 'Basit Makineler',
  desc: 'Altın kural, kaldıraçlar, makaralar ve palangalar, eğik düzlem, çıkrık ve bileşik makineler; “ne değişirse kuvvet nasıl değişir?” mantığı ve LGS tuzaklarıyla sahne sahne.',
  ozet: [
    'Basit makineler işi kolaylaştırır ama işten (enerjiden) kazanç sağlamaz: kuvvetten kaç kat kazanç varsa yoldan o kadar kayıp vardır.',
    'Kaldıraçta kuvvet kolu yük kolundan uzunsa kuvvetten kazanç vardır. Dengede: kuvvet × kuvvet kolu = yük × yük kolu. Kollar destek noktasından ölçülür.',
    'Yük desteğe yaklaşırsa kuvvet azalır; kuvvetin uygulandığı nokta desteğe yaklaşırsa kuvvet artar.',
    'Sabit makara kuvvet kazancı sağlamaz, yalnız yönü değiştirir. Hareketli makara kuvveti yarıya indirir, ip 2 kat çekilir.',
    'Palangada makara değil, hareketli kısmı taşıyan ip kolu sayılır. Kuvvet = yük ÷ ip kolu sayısı; ip, yükün yükselmesinin ip kolu sayısı katı kadar çekilir.',
    'Eğik düzlemde kuvvet yükten küçüktür. Eğim azalırsa kuvvet azalır; eğimleri aynı iki eğik düzlemde kuvvet aynıdır.',
    'Çıkrıkta kolu uzatmak ya da silindiri inceltmek kuvveti azaltır; ipin uzunluğu ya da silindirin boyu kuvveti değiştirmez.',
    'Bileşik makine birden fazla basit makineden oluşur: makas, bisiklet, kıyma makinesi.'
  ],
  scenes: [
    { t: 'Basit makine ve altın kural',
      base: '<svg class="an-svg" viewBox="0 0 340 185" role="img" aria-label="Kutu dik kaldırılırsa 1 m yol, rampayla 4 m yol; kuvvet dörtte birine iner">' +
        '<line x1="5" y1="150" x2="335" y2="150" class="ln" stroke-width="2"/>' +
        '<g class="rv g1"><rect x="40" y="76" width="28" height="24" rx="3" fill="#3b82f6"/><line x1="54" y1="74" x2="54" y2="30" class="st" stroke-width="3"/><path d="M47 38 L54 28 L61 38" class="st" stroke-width="3"/>' +
        '<line x1="80" y1="100" x2="80" y2="150" class="st2"/><text x="86" y="130" font-size="12">1 m</text><text x="54" y="20" font-size="12" text-anchor="middle" font-weight="700">400 N</text></g>' +
        '<g class="rv g2"><polygon points="116,150 310,150 310,100" fill="#94a3b8" fill-opacity=".35" stroke="#94a3b8"/>' +
        '<g transform="rotate(-14.5 250 116)"><rect x="236" y="92" width="28" height="24" rx="3" fill="#3b82f6"/></g>' +
        '<text x="200" y="118" font-size="12" text-anchor="middle" transform="rotate(-14.5 200 118)">4 m</text>' +
        '<text x="230" y="80" font-size="12" text-anchor="middle" font-weight="700" class="acc">100 N</text><text x="318" y="130" font-size="12">1 m</text></g>' +
        '<text x="170" y="176" font-size="12" text-anchor="middle" class="rv g3">kuvvet 4’te 1 · yol 4 katı · iş aynı</text></svg>',
      steps: [
        { s: 'Merhaba! Basit makineler, az parçadan oluşan ve tek bir kuvvetle çalışan araçlardır. Bizim uyguladığımız kuvvete kuvvet, makinenin kaldırdığına yük denir.' },
        { s: 'Basit makine işimizi üç şekilde kolaylaştırır: kuvveti küçültür, kuvvetin yönünü değiştirir ya da yoldan, yani hızdan kazanç sağlar.' },
        { s: 'Şimdi bir deneme yapalım. 400 newtonluk bir kutuyu 1 metre yükseğe dik kaldırmak için 400 newton kuvvet gerekir.', v: 'Şimdi bir deneme yapalım. Dört yüz nevtonluk bir kutuyu bir metre yükseğe dik kaldırmak için dört yüz nevton kuvvet gerekir.', on: '.g1' },
        { s: 'Aynı kutuyu 4 metrelik bir rampayla çıkarırsak yalnızca 100 newton yeter. Kuvvet dörtte birine indi. Ama kutu 1 metre yerine 4 metre yol aldı.', v: 'Aynı kutuyu dört metrelik bir rampayla çıkarırsak yalnızca yüz nevton yeter. Kuvvet dörtte birine indi. Ama kutu bir metre yerine dört metre yol aldı.', on: '.g2,.g3' },
        { s: 'İşte bütün konunun altın kuralı: hiçbir basit makine işten kazanç sağlamaz. Kuvvetten kaç kat kazanırsan yoldan o kadar kaybedersin.',
          h: '<div class="an-rule"><b>Altın kural:</b> Kuvvette kâr = yolda zarar. Basit makine <b>işten kazanç sağlamaz</b>; sürtünme varsa iş biraz artar, asla azalmaz.</div>' },
        { s: 'Burada çok dikkat et: daha az kuvvet uyguladık, demek ki daha az iş yaptık düşüncesi yanlış. LGS’de işten kazanç sağlanmıştır diyen yargı her zaman yanlıştır.',
          h: '<table class="an-tbl"><tr><th>Durum</th><th>Ne olur?</th><th>Örnek</th></tr><tr><td>Kuvvet &lt; yük</td><td>kuvvetten kazanç, yoldan kayıp</td><td>hareketli makara, eğik düzlem, çıkrık</td></tr><tr><td>Kuvvet = yük</td><td>yalnız yön değişir</td><td>sabit makara</td></tr><tr><td>Kuvvet &gt; yük</td><td>yoldan kazanç, kuvvetten kayıp</td><td>cımbız, maşa, olta kamışı</td></tr></table>' }
      ] },

    { t: 'Kaldıraç: destek, yük, kuvvet',
      base: '<svg class="an-svg" viewBox="0 0 340 190" role="img" aria-label="Eşit bölmeli kaldıraç: yük kolu 3, kuvvet kolu 8 bölme">' +
        '<line x1="20" y1="100" x2="317" y2="100" stroke="#94a3b8" stroke-width="7" stroke-linecap="round"/>' +
        '<g class="mut" font-size="9" text-anchor="middle"><text x="20" y="116">|</text><text x="47" y="116">|</text><text x="74" y="116">|</text><text x="128" y="116">|</text><text x="155" y="116">|</text><text x="182" y="116">|</text><text x="209" y="116">|</text><text x="236" y="116">|</text><text x="263" y="116">|</text><text x="290" y="116">|</text><text x="317" y="116">|</text></g>' +
        '<polygon points="101,104 89,130 113,130" class="rv l1" fill="#22c55e"/><text x="101" y="146" font-size="12" text-anchor="middle" class="rv l1">destek</text>' +
        '<g class="rv l2"><line x1="20" y1="100" x2="20" y2="140" class="ln" stroke-width="2"/><rect x="4" y="140" width="32" height="26" rx="3" fill="#3b82f6"/><text x="20" y="158" font-size="11" text-anchor="middle" fill="#fff" font-weight="700">80 N</text><text x="20" y="182" font-size="12" text-anchor="middle">yük</text></g>' +
        '<g class="rv l3"><line x1="317" y1="40" x2="317" y2="92" class="st" stroke-width="3"/><path d="M310 84 L317 94 L324 84" class="st" stroke-width="3"/><text x="317" y="32" font-size="12" text-anchor="middle" font-weight="700">F</text></g>' +
        '<g class="rv l4"><path d="M20 80 L20 74 L101 74 L101 80" class="st2"/><text x="60" y="68" font-size="12" text-anchor="middle">yük kolu: 3</text>' +
        '<path d="M101 60 L101 54 L317 54 L317 60" class="st"/><text x="209" y="48" font-size="12" text-anchor="middle" class="acc">kuvvet kolu: 8</text></g></svg>',
      steps: [
        { s: 'İlk makinemiz kaldıraç: sabit bir nokta etrafında dönebilen sağlam bir çubuk. Çubuğun döndüğü noktaya destek noktası denir.', on: '.l1' },
        { s: 'Çubuğun bir ucuna 80 newtonluk bir yük asalım.', v: 'Çubuğun bir ucuna seksen nevtonluk bir yük asalım.', on: '.l2' },
        { s: 'Öbür uçtan da kuvvet uygulayarak dengede tutalım.', on: '.l3' },
        { s: 'Yükün desteğe uzaklığı yük kolu, kuvvetin desteğe uzaklığı kuvvet kolu. Burada yük kolu 3, kuvvet kolu 8 bölme.', v: 'Yükün desteğe uzaklığı yük kolu, kuvvetin desteğe uzaklığı kuvvet kolu. Burada yük kolu üç, kuvvet kolu sekiz bölme.', on: '.l4' },
        { s: 'Dengede iki yöndeki döndürme etkileri eşittir: kuvvet çarpı kuvvet kolu, yük çarpı yük koluna eşit. 80 çarpı 3, F çarpı 8. F, 30 newton çıkar.', v: 'Dengede iki yöndeki döndürme etkileri eşittir: kuvvet çarpı kuvvet kolu, yük çarpı yük koluna eşit. Seksen çarpı üç, ef çarpı sekiz. Ef, otuz nevton çıkar.',
          h: '<div class="an-ex"><span class="an-l">kuvvet × kuvvet kolu = yük × yük kolu</span><span class="an-l">F × 8 = 80 × 3 → <b>F = 30 N</b></span></div>' },
        { s: 'Kural kısaca şu: kuvvet kolu yük kolundan uzunsa kuvvetten kazanç, kısaysa kayıp, eşitse kuvvet yüke eşittir.' },
        { s: 'Dikkat: bölmeleri çubuğun ucundan değil, destek noktasından say. Yük ve kuvvet desteğin aynı tarafındaysa yönleri zıt olmalıdır.',
          h: '<div class="an-trap">Kollar <b>destek noktasından</b> ölçülür, çubuğun ucundan değil.</div>' }
      ] },

    { t: 'Kaldıraç çeşitleri',
      base: '<table class="an-tbl"><tr><th>Ortada ne var?</th><th>Kuvvet kazancı</th><th>Örnek</th></tr>' +
        '<tr class="rv t1"><td><b>Destek</b><br><small>yük · destek · kuvvet</small></td><td>kollara bağlı: var, yok ya da kayıp</td><td>tahterevalli, makas, pense</td></tr>' +
        '<tr class="rv t2"><td><b>Yük</b><br><small>destek · yük · kuvvet</small></td><td>her zaman var</td><td>el arabası, ceviz kıracağı, gazoz açacağı</td></tr>' +
        '<tr class="rv t3"><td><b>Kuvvet</b><br><small>destek · kuvvet · yük</small></td><td>hiç yok, yoldan kazanç</td><td>cımbız, maşa, olta kamışı</td></tr></table>',
      steps: [
        { s: 'Destek, yük ve kuvvetten hangisinin ortada olduğuna göre üç tür kaldıraç vardır.' },
        { s: 'Destek ortadaysa kuvvet kazancı kolların uzunluğuna bağlıdır. Tahterevalli, makas ve pense bu türdendir. Aşağı bastırırsın, yük yukarı kalkar.', on: '.t1' },
        { s: 'Yük ortadaysa kuvvet kolu her zaman daha uzundur, yani her zaman kuvvetten kazanç vardır. El arabası en bilinen örnek.', on: '.t2' },
        { s: 'Kuvvet ortadaysa kuvvet kolu hep kısadır; kuvvetten kayıp, yoldan kazanç vardır. Cımbız ve maşa böyle çalışır.', on: '.t3' }
      ] },

    { t: 'Bir şey kayınca kuvvet nasıl değişir?',
      steps: [
        { s: 'Çıkmışlarda kaldıraç çoğu zaman bir şey kayarken sorulur. Hepsini aynı mantıkla çözersin: hangi kol uzadı, hangisi kısaldı?' },
        { s: 'Yük desteğe yaklaşırsa yük kolu kısalır ve gereken kuvvet azalır. Yük destekten uzaklaşırsa kuvvet artar.',
          h: '<div class="an-rule"><b>Yük → desteğe yaklaşır</b> ⇒ yük kolu ↓ ⇒ kuvvet ↓</div>' },
        { s: 'Elini desteğe doğru kaydırırsan kuvvet kolu kısalır, bu sefer kuvvet artar.',
          h: '<div class="an-rule"><b>Kuvvet → desteğe yaklaşır</b> ⇒ kuvvet kolu ↓ ⇒ kuvvet ↑</div>' },
        { s: 'Destek tahta boyunca yüke doğru değil de kuvvete doğru kaydırılırsa yük kolu uzar, kuvvet kolu kısalır. Kuvvet sürekli artar.' },
        { s: 'Yük desteğin öbür tarafına geçerse döndürme yönü tersine döner. Dengeyi korumak için kuvvetin yönü de değişmelidir.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Eşit bölmeli, ağırlığı önemsiz bir çubukta destekten <b>2 bölme solda 60 N</b>’luk bir kutu asılıdır. Çubuk ayrı ayrı şu kişilerce yatay dengede tutuluyor:</p><p>Ayşe: destekten 1 bölme sağdan aşağı çekiyor.<br>Efe: destekten 4 bölme sağdan aşağı çekiyor.<br>Can: destekten 3 bölme soldan yukarı itiyor.</p><p>Hangileri kutunun ağırlığından <b>daha az</b> kuvvet uygular?</p>',
        c: ['Yalnız Ayşe', 'Yalnız Efe', 'Efe ve Can', 'Ayşe, Efe ve Can'], a: 'C',
        hint: 'Kutunun döndürme etkisi 60 × 2 = 120. Her kişinin kolu kaç bölme? Kolu yük kolundan uzun olan daha az kuvvet uygular.',
        hintV: 'Kutunun döndürme etkisi altmış çarpı iki, yüz yirmi. Her kişinin kolu kaç bölme? Kolu yük kolundan uzun olan daha az kuvvet uygular.',
        why: 'Ayşe: 120 ÷ 1 = 120 N (fazla). Efe: 120 ÷ 4 = 30 N. Can kutuyla aynı tarafta ama yukarı itiyor: 120 ÷ 3 = 40 N. Efe ve Can daha az kuvvet uygular.',
        whyV: 'Ayşe’nin kolu bir bölme: yüz yirmi nevton, yani fazla. Efe’nin kolu dört bölme: otuz nevton. Can kutuyla aynı tarafta ama yukarı itiyor; kolu üç bölme: kırk nevton. Efe ve Can daha az kuvvet uygular.' },
      steps: [{ s: 'Çubuk sorusu geldi. Kolları destekten saymayı unutma.' }] },

    { t: 'Sabit ve hareketli makara',
      base: '<svg class="an-svg" viewBox="0 0 340 190" role="img" aria-label="Sabit makara kuvveti değiştirmez, hareketli makara yarıya indirir">' +
        '<line x1="10" y1="12" x2="140" y2="12" class="ln" stroke-width="4"/><line x1="190" y1="12" x2="330" y2="12" class="ln" stroke-width="4"/>' +
        '<g class="rv m1"><line x1="75" y1="12" x2="75" y2="48" class="ln" stroke-width="2"/><circle cx="75" cy="60" r="18" fill="none" stroke="#94a3b8" stroke-width="4"/>' +
        '<line x1="57" y1="60" x2="57" y2="130" stroke="#f5b301" stroke-width="2.5"/><line x1="93" y1="60" x2="93" y2="140" stroke="#f5b301" stroke-width="2.5"/>' +
        '<rect x="42" y="130" width="30" height="26" rx="3" fill="#3b82f6"/><path d="M86 132 L93 144 L100 132" class="st" stroke-width="3"/>' +
        '<text x="75" y="176" font-size="12" text-anchor="middle" font-weight="700">Sabit: F = yük</text><text x="112" y="140" font-size="11" class="acc">F</text></g>' +
        '<g class="rv m2"><line x1="230" y1="12" x2="230" y2="110" stroke="#f5b301" stroke-width="2.5"/><circle cx="248" cy="110" r="18" fill="none" stroke="#94a3b8" stroke-width="4"/>' +
        '<line x1="266" y1="110" x2="266" y2="36" stroke="#f5b301" stroke-width="2.5"/><path d="M259 46 L266 34 L273 46" class="st" stroke-width="3"/>' +
        '<line x1="248" y1="128" x2="248" y2="140" class="ln" stroke-width="2"/><rect x="233" y="140" width="30" height="24" rx="3" fill="#3b82f6"/>' +
        '<text x="258" y="184" font-size="12" text-anchor="middle" font-weight="700">Hareketli: F = yük ÷ 2</text><text x="276" y="40" font-size="11" class="acc">F</text></g></svg>',
      steps: [
        { s: 'Sıra makaralarda. Makara, çevresinden ip geçen ve ekseni etrafında dönen bir tekerdir.' },
        { s: 'Ekseni tavana bağlı olana sabit makara denir. İpi aşağı çekersin, yük yukarı çıkar. Ama kuvvet yüke eşittir; yalnızca yön değişir.', on: '.m1' },
        { s: 'Yükle birlikte hareket edene hareketli makara denir. Yük iki ip koluyla taşındığı için kuvvet yükün yarısına iner.', on: '.m2' },
        { s: 'Ama altın kuralı hatırla: yükü 1 metre kaldırmak için ipi 2 metre çekmen gerekir. Kuvvetten kazanç, yoldan kayıp.', v: 'Ama altın kuralı hatırla: yükü bir metre kaldırmak için ipi iki metre çekmen gerekir. Kuvvetten kazanç, yoldan kayıp.' },
        { s: 'Hareketli makaranın kendi ağırlığı önemsenirse yüke eklenir. Sabit makaranın ağırlığı ise uyguladığın kuvveti değiştirmez.' }
      ] },

    { t: 'Palanga: ip kolunu say',
      base: '<svg class="an-svg" viewBox="0 0 340 200" role="img" aria-label="Palangada hareketli kısmı taşıyan ip kolları sayılır">' +
        '<line x1="60" y1="12" x2="280" y2="12" class="ln" stroke-width="4"/>' +
        '<rect x="110" y="22" width="120" height="26" rx="6" class="box"/><text x="170" y="40" font-size="11" text-anchor="middle">sabit makaralar</text><line x1="170" y1="12" x2="170" y2="22" class="ln" stroke-width="3"/>' +
        '<rect x="110" y="128" width="120" height="26" rx="6" class="boxa"/><text x="170" y="146" font-size="11" text-anchor="middle">hareketli makaralar</text>' +
        '<rect x="150" y="160" width="40" height="28" rx="3" fill="#3b82f6"/><line x1="170" y1="154" x2="170" y2="160" class="ln" stroke-width="2"/><text x="170" y="179" font-size="11" text-anchor="middle" fill="#fff" font-weight="700">yük</text>' +
        '<g stroke="#f5b301" stroke-width="2.5"><line x1="128" y1="48" x2="128" y2="128"/><line x1="170" y1="48" x2="170" y2="128"/><line x1="212" y1="48" x2="212" y2="128"/><line x1="226" y1="44" x2="290" y2="44"/><line x1="290" y1="44" x2="290" y2="150"/></g>' +
        '<path d="M283 140 L290 152 L297 140" class="st" stroke-width="3"/><text x="300" y="150" font-size="12" class="acc">F</text>' +
        '<line x1="100" y1="88" x2="240" y2="88" class="st2 dr p1" stroke-dasharray="6 4"/><text x="40" y="92" font-size="11" class="rv p1">hayali çizgi</text>' +
        '<g class="rv p2" font-size="11" font-weight="700" text-anchor="middle"><circle cx="128" cy="88" r="9" fill="#22c55e"/><text x="128" y="92" fill="#fff">1</text><circle cx="170" cy="88" r="9" fill="#22c55e"/><text x="170" y="92" fill="#fff">2</text><circle cx="212" cy="88" r="9" fill="#22c55e"/><text x="212" y="92" fill="#fff">3</text></g></svg>',
      steps: [
        { s: 'Sabit ve hareketli makaraların birlikte kullanıldığı düzeneklere palanga denir. Kuvveti bulmanın tek yolu var: ip kolunu saymak.' },
        { s: 'Sabit makaralarla hareketli makaraların arasından hayali yatay bir çizgi çek.', on: '.p1', w: 600 },
        { s: 'Bu çizginin kestiği ve hareketli kısma bağlı ip parçalarını say. Burada üç ip kolu var.', on: '.p2' },
        { s: 'İp tek parça olduğu için her koldaki gerilme senin kuvvetine eşittir. Yük bu üç kol arasında paylaşılır: kuvvet, yükün üçte biri.',
          h: '<div class="an-rule"><b>Kuvvet = yük ÷ ip kolu sayısı</b> · ip, yükün yükselmesinin <b>ip kolu sayısı katı</b> kadar çekilir</div>' },
        { s: 'Yükü 2 metre kaldırmak için ipi 2 çarpı 3, yani 6 metre çekmen gerekir.', v: 'Yükü iki metre kaldırmak için ipi iki çarpı üç, yani altı metre çekmen gerekir.' },
        { s: 'Burada çok dikkat et, LGS’de en sık düşülen tuzak bu: sayılan şey makara sayısı değil, ip kolu sayısıdır. İpin ucu tavana mı, hareketli makaraya mı bağlı, mutlaka bak.',
          h: '<div class="an-trap"><span class="an-bad-t">Makara sayısını say.</span> → <span class="an-ok-t">Hareketli kısmı taşıyan ip kollarını say.</span><br>Sabit makaranın tavana askısı ip kolu sayılmaz. Sabit makara eklemek kuvveti azaltmaz.</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Bir palangada yük, hareketli kısma bağlı <b>3 ip koluyla</b> taşınmaktadır. <b>300 N</b>’luk yükü <b>2 m</b> yükseltmek için (sürtünme ve makara ağırlıkları önemsiz) ip ne kadar çekilmeli ve en az kaç N kuvvet uygulanmalıdır?</p>',
        c: ['2 m · 300 N', '6 m · 100 N', '6 m · 300 N', '2 m · 100 N'], a: 'B',
        hint: 'Kuvvet yükün ip kolu sayısına bölümüdür; çekilen ip ise yükselmenin ip kolu sayısı katıdır.',
        why: 'Kuvvet = 300 ÷ 3 = 100 N. Kuvvetten 3 kat kazanç olduğu için yoldan 3 kat kayıp var: ip 2 × 3 = 6 m çekilir. İş değişmedi.',
        whyV: 'Kuvvet, üç yüz bölü üç, yüz nevton. Kuvvetten üç kat kazanç olduğu için yoldan üç kat kayıp var: ip iki çarpı üç, altı metre çekilir. İş değişmedi.' },
      steps: [{ s: 'Palanga sorusu. İp kolu sayısını kullan, altın kuralı unutma.' }] },

    { t: 'Eğik düzlem',
      base: '<svg class="an-svg" viewBox="0 0 340 175" role="img" aria-label="Eğimleri aynı iki eğik düzlemde kuvvet aynıdır">' +
        '<line x1="5" y1="150" x2="335" y2="150" class="ln" stroke-width="2"/>' +
        '<g class="rv e1"><polygon points="20,150 180,150 180,93" fill="#94a3b8" fill-opacity=".35" stroke="#94a3b8"/><text x="100" y="112" font-size="12" text-anchor="middle" transform="rotate(-19.5 100 112)">P: boy 6 m</text><text x="186" y="125" font-size="11">2 m</text></g>' +
        '<g class="rv e2"><polygon points="215,150 295,150 295,121.7" fill="#94a3b8" fill-opacity=".35" stroke="#94a3b8"/><text x="250" y="130" font-size="11" text-anchor="middle" transform="rotate(-19.5 250 130)">S: boy 3 m</text><text x="300" y="142" font-size="11">1 m</text></g>' +
        '<text x="170" y="170" font-size="12" text-anchor="middle" class="acc rv e3">eğim aynı → gereken kuvvet aynı</text></svg>',
      steps: [
        { s: 'Eğik düzlem, yükü dik kaldırmak yerine eğimli bir yüzeyden iterek çıkarmaya yarar. Rampalar ve dağlardaki virajlı yollar eğik düzlemdir.' },
        { s: 'Sürtünmesiz eğik düzlemde kuvvet her zaman yükten küçüktür, çünkü boy her zaman yükseklikten uzundur.' },
        { s: 'Yükseklik aynı kalıp boy uzarsa eğim azalır ve kuvvet azalır. Boy aynı kalıp yükseklik artarsa eğim artar ve kuvvet artar.' },
        { s: 'Şimdi şu iki rampaya bakalım. P’nin boyu 6, yüksekliği 2 metre.', v: 'Şimdi şu iki rampaya bakalım. P’nin boyu altı, yüksekliği iki metre.', on: '.e1' },
        { s: 'S’nin boyu 3, yüksekliği 1 metre. P daha uzun, ama daha yüksek de.', v: 'S’nin boyu üç, yüksekliği bir metre. P daha uzun, ama daha yüksek de.', on: '.e2' },
        { s: 'İkisinin eğimi aynı. Bu yüzden aynı yük için gereken kuvvet de aynı. Daha uzun, daha az kuvvet diye düşünüp tuzağa düşme!', on: '.e3',
          h: '<div class="an-trap"><span class="an-bad-t">Daha uzun eğik düzlem = daha az kuvvet</span><br>Önce <b>eğime</b> bak: eğimler aynıysa kuvvet aynıdır.</div>' },
        { s: 'Deney tasarlarken yine tek değişken: yüksekliğin etkisi için boyu aynı, uzunluğun etkisi için yüksekliği aynı düzenekler seçilir. Vida ve kama da eğik düzlemin akrabalarıdır.' }
      ] },

    { t: 'Çıkrık',
      base: '<svg class="an-svg" viewBox="0 0 340 180" role="img" aria-label="Çıkrık: büyük kol ile küçük silindir aynı eksende döner">' +
        '<circle cx="110" cy="80" r="62" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>' +
        '<circle cx="110" cy="80" r="16" fill="#94a3b8"/><circle cx="110" cy="80" r="3" fill="#111"/>' +
        '<line x1="126" y1="80" x2="126" y2="140" stroke="#f5b301" stroke-width="2.5"/><rect x="112" y="140" width="28" height="26" rx="3" fill="#3b82f6"/>' +
        '<g class="rv w1"><line x1="110" y1="80" x2="48" y2="80" class="st" stroke-width="3"/><circle cx="48" cy="80" r="5" fill="#22c55e"/><line x1="48" y1="86" x2="48" y2="130" class="st" stroke-width="3"/><path d="M41 122 L48 132 L55 122" class="st" stroke-width="3"/>' +
        '<text x="54" y="108" font-size="11" class="acc">kuvvet kolu</text><text x="58" y="146" font-size="12" class="acc">F</text></g>' +
        '<g class="rv w2"><text x="132" y="112" font-size="11">yük kolu</text><path d="M110 80 L126 80" class="st2" stroke-width="3"/></g>' +
        '<g class="rv w3" font-size="12"><text x="200" y="50">• kuvvet kolu uzun</text><text x="200" y="70">• yük kolu kısa</text><text x="200" y="96" class="acc" font-weight="700">kuvvetten kazanç</text><text x="200" y="116" class="mut">yoldan kayıp</text></g></svg>',
      steps: [
        { s: 'Çıkrık, aynı eksende birlikte dönen iki parçadır: kuvvetin uygulandığı büyük kol ve ipin sarıldığı küçük silindir. Kuyu çıkrığı, kapı kolu, tornavida birer çıkrıktır.' },
        { s: 'Kuvveti büyük kolun ucundan uyguluyoruz. Kolun uzunluğu kuvvet kolu.', on: '.w1' },
        { s: 'İp küçük silindire sarılı. Silindirin yarıçapı da yük kolu.', on: '.w2' },
        { s: 'Çıkrık aslında dönen bir kaldıraç gibi. Kuvvet kolu uzun, yük kolu kısa olduğu için kuvvetten kazanç, yoldan kayıp sağlar.', on: '.w3' },
        { s: 'Peki neyi değiştirirsek kuvvet azalır? Tabloya bakalım.',
          h: '<table class="an-tbl"><tr><th>Değişiklik</th><th>Kuvvet</th></tr><tr><td>Kolu uzatmak</td><td class="an-ok-t">azalır</td></tr><tr><td>Silindiri inceltmek</td><td class="an-ok-t">azalır</td></tr><tr><td>Silindiri kalınlaştırmak</td><td>artar</td></tr><tr><td>İpi uzatmak, silindirin boyunu değiştirmek</td><td>değişmez</td></tr></table>' },
        { s: 'Bir ayrıntı: kolu uzatmak kuvveti azaltır ama bir turda yükün ne kadar yükseldiğini değiştirmez. Bir turda yük, silindirin çevresi kadar yükselir.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Kuyudan kovayı daha az kuvvetle çekmek için şu öneriler yapılıyor:</p><p>I. Çıkrığın kolunu 30 cm yerine 45 cm yapmak<br>II. İpin sarıldığı silindiri kalınlaştırmak<br>III. Daha uzun bir ip kullanmak</p><p>Bu önerilerden hangileri <b>işe yarar</b>?</p>',
        c: ['Yalnız I', 'Yalnız II', 'I ve III', 'I, II ve III'], a: 'A',
        hint: 'Hangi öneri kuvvet kolunu uzatıyor, hangisi yük kolunu uzatıyor, hangisi kollara hiç dokunmuyor?',
        why: 'I kuvvet kolunu uzatır, kuvvet azalır. II yük kolunu uzatır, kuvvet artar. III kolları değiştirmez. Yalnız I işe yarar.',
        whyV: 'Birinci öneri kuvvet kolunu uzatır, kuvvet azalır. İkincisi yük kolunu uzatır, kuvvet artar. Üçüncüsü kolları değiştirmez. Yalnızca birinci öneri işe yarar.' },
      steps: [{ s: 'Çıkrık sorusu. Her öneride hangi kolun değiştiğini düşün.' }] },

    { t: 'Dişliler, bileşik makineler ve tasarım',
      steps: [
        { s: 'Dişli çarklar ve kasnaklar da basit makinedir. Programda yalnızca tanımaları beklenir. Özdeş iki dişli kuvveti değiştirmez, yalnızca dönme yönünü değiştirir.' },
        { s: 'İki ya da daha fazla basit makinenin birleşmesiyle bileşik makine oluşur.',
          h: '<table class="an-tbl"><tr><th>Bileşik makine</th><th>İçindeki basit makineler</th></tr><tr><td>Makas</td><td>kaldıraç + kama</td></tr><tr><td>Bisiklet</td><td>dişli ve zincir + çıkrık (pedal, gidon) + kaldıraç (fren kolu)</td></tr><tr><td>Kıyma makinesi</td><td>çıkrık + vida + kama</td></tr></table>' },
        { s: 'Tasarım sorularında önce amacı belirle: daha az kuvvet mi, yönü değiştirmek mi, hız mı? Sonra her parçanın görevini ayır.' },
        { s: 'Makaranın türünü neye bağlı olduğundan anla: tavana, duvara ya da ağaca bağlıysa sabit; yükle ya da araçla birlikte hareket ediyorsa hareketlidir.' },
        { s: 'Ve son tuzak: kolları eşit bir kaldıraçla yalnızca sabit makara kullanan bir düzenek kuvveti hiç azaltmaz. Amaca uygun olmayan şık genellikle budur.',
          h: '<div class="an-trap">Sabit makara (ya da sabit noktaya bağlı halka, ağaç) <b>kuvvet kazancı sağlamaz</b>, yalnızca yönü değiştirir.</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Aynı yük, sürtünmesiz iki eğik düzlemden çıkarılıyor. <b>P</b> düzeneğinin boyu <b>6 m</b>, yüksekliği <b>2 m</b>; <b>S</b> düzeneğinin boyu <b>3 m</b>, yüksekliği <b>1 m</b>’dir. Buna göre hangisi <b>doğrudur</b>?</p>',
        c: ['P daha uzun olduğu için P’de daha az kuvvet gerekir.', 'S daha kısa olduğu için S’de daha az kuvvet gerekir.', 'İki düzenekte gereken kuvvet eşittir.', 'P’de işten kazanç sağlanır.'], a: 'C',
        hint: 'Boy ile yüksekliğin oranına, yani eğime bak. İki düzenekte eğim farklı mı?',
        why: 'P’de 6 ÷ 2 = 3, S’de 3 ÷ 1 = 3; eğimler aynı. Bu yüzden gereken kuvvet eşittir. Hiçbir basit makine işten kazanç sağlamaz.',
        whyV: 'P’de boy, yüksekliğin üç katı; S’de de üç katı. Eğimler aynı olduğu için gereken kuvvet eşittir. Hiçbir basit makine işten kazanç sağlamaz.' },
      steps: [{ s: 'Son ara soru! Uzunluğa değil, eğime odaklan.' }] }
  ]
};
