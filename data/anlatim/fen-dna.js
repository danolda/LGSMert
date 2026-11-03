/* Adım Adım Anlatım · Fen · DNA ve Genetik Kod (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['fen-dna'] = {
  title: 'DNA ve Genetik Kod',
  desc: 'Kromozomdan nükleotide, DNA’nın yapısı ve eşlenmesi, çaprazlamalar, mutasyon-modifikasyon, adaptasyon ve biyoteknoloji; LGS tuzaklarıyla sahne sahne.',
  ozet: [
    'Büyükten küçüğe: kromozom → DNA → gen → nükleotit. Nükleotit = fosfat + şeker (deoksiriboz) + organik baz; şeker ortadadır.',
    'Bütün canlılarda aynı 4 nükleotit var (A, T, G, C). Genleri ve canlıları farklı yapan nükleotitlerin sayısı ve diziliş sırasıdır. Kromozom sayısı gelişmişliği göstermez.',
    'A yalnız T ile, G yalnız C ile eşleşir. Çift iplikte A = T, G = C; nükleotit = fosfat = şeker = baz sayısı. Tek iplikte A = T olmak zorunda değildir.',
    'Eşlenmede iplikler fermuar gibi açılır, her eski ipliğin karşısına yeni iplik kurulur. Yeni iplik eski ipliğin tamamlayıcısıdır; oluşan iki DNA birbirinin aynısıdır.',
    'Baskın gen büyük harf, çekinik küçük harf. Çekinik fenotip (mm) kesin genotiptir; baskın fenotip MM ya da Mm olabilir.',
    'Mm × Mm → {{1|4}} MM, {{2|4}} Mm, {{1|4}} mm (%75 baskın, %25 çekinik). Mm × mm → %50 – %50. Baskın iki ebeveynden çekinik yavru doğduysa ikisi de melezdir.',
    'Mutasyon DNA dizilimini değiştirir, üreme hücresindeyse kalıtsaldır. Modifikasyon çevre etkisidir, DNA aynı kalır, kalıtsal değildir.',
    'Canlı ortama uymak için özellik geliştiremez; doğal seçilim var olan uygun bireyleri seçer. Klon, çekirdeği veren canlının genetik kopyasıdır.'
  ],
  scenes: [
    { t: 'Kalıtım materyali: büyükten küçüğe',
      base: '<svg class="an-svg" viewBox="0 0 340 150" role="img" aria-label="Kromozom, DNA, gen ve nükleotit büyükten küçüğe">' +
        '<g class="rv k1"><g transform="translate(42 60)"><rect x="-7" y="-36" width="14" height="72" rx="7" transform="rotate(22)" class="boxa"/><rect x="-7" y="-36" width="14" height="72" rx="7" transform="rotate(-22)" class="boxa"/></g>' +
        '<text x="42" y="122" font-size="13" text-anchor="middle" font-weight="700">Kromozom</text><text x="42" y="138" font-size="10" text-anchor="middle" class="mut">paketli DNA</text></g>' +
        '<text x="85" y="64" font-size="18" text-anchor="middle" class="mut rv k2">→</text>' +
        '<g class="rv k2"><path d="M127 22 C143 31 143 50 127 60 C111 70 111 89 127 98" class="st"/><path d="M127 22 C111 31 111 50 127 60 C143 70 143 89 127 98" class="st2"/>' +
        '<line x1="118" y1="35" x2="136" y2="35" class="ln" stroke-width="2"/><line x1="117" y1="47" x2="137" y2="47" class="ln" stroke-width="2"/><line x1="117" y1="73" x2="137" y2="73" class="ln" stroke-width="2"/><line x1="118" y1="85" x2="136" y2="85" class="ln" stroke-width="2"/>' +
        '<text x="127" y="122" font-size="13" text-anchor="middle" font-weight="700">DNA</text><text x="127" y="138" font-size="10" text-anchor="middle" class="mut">çift iplik</text></g>' +
        '<text x="170" y="64" font-size="18" text-anchor="middle" class="mut rv k3">→</text>' +
        '<g class="rv k3"><rect x="198" y="44" width="28" height="32" rx="4" fill="#22c55e" fill-opacity=".3"/><line x1="200" y1="22" x2="200" y2="98" class="ln" stroke-width="2"/><line x1="224" y1="22" x2="224" y2="98" class="ln" stroke-width="2"/>' +
        '<line x1="200" y1="30" x2="224" y2="30" class="ln"/><line x1="200" y1="38" x2="224" y2="38" class="ln"/><line x1="200" y1="50" x2="224" y2="50" class="st"/><line x1="200" y1="60" x2="224" y2="60" class="st"/><line x1="200" y1="70" x2="224" y2="70" class="st"/><line x1="200" y1="82" x2="224" y2="82" class="ln"/><line x1="200" y1="90" x2="224" y2="90" class="ln"/>' +
        '<text x="212" y="122" font-size="13" text-anchor="middle" font-weight="700">Gen</text><text x="212" y="138" font-size="10" text-anchor="middle" class="mut">DNA bölümü</text></g>' +
        '<text x="255" y="64" font-size="18" text-anchor="middle" class="mut rv k4">→</text>' +
        '<g class="rv k4"><circle cx="278" cy="47" r="8" fill="#f5b301"/><line x1="284" y1="52" x2="288" y2="56" class="ln" stroke-width="2"/>' +
        '<polygon points="298,49 308.5,56.6 304.5,68.9 291.5,68.9 287.5,56.6" fill="#3b82f6"/><line x1="308" y1="58" x2="313" y2="58" class="ln" stroke-width="2"/><rect x="313" y="50" width="16" height="18" rx="3" fill="#ef4444"/>' +
        '<text x="300" y="122" font-size="13" text-anchor="middle" font-weight="700">Nükleotit</text><text x="300" y="138" font-size="10" text-anchor="middle" class="mut">en küçük birim</text></g></svg>',
      steps: [
        { s: 'Merhaba! Göz rengin, kan grubun, boyun… Bütün bu özelliklerin bilgisi hücrelerinin çekirdeğinde saklı. Şimdi bu bilginin nasıl paketlendiğine bakalım.' },
        { s: 'En büyük yapıdan başlayalım: kromozom. Kromozom, DNA’nın proteinlerin etrafına sarılıp kısalmış, paketlenmiş hâlidir.', on: '.k1' },
        { s: 'Paketi açınca DNA’yı görürüz: iki iplikli, sarmal bir molekül. Hücrenin bütün yaşamsal faaliyetlerini yönetir.', on: '.k2' },
        { s: 'DNA’nın belirli bir özelliği, mesela çiçek rengini belirleyen bölümüne gen denir. Bir DNA üzerinde çok sayıda gen bulunur.', on: '.k3' },
        { s: 'En küçük birim ise nükleotit. DNA, binlerce nükleotidin art arda dizilmesiyle oluşur.', on: '.k4' },
        { s: 'Sıralamayı kolay hatırlamak için şu ipucu işine yarar: Ke-Di-Ge-Ni. Kromozom, DNA, gen, nükleotit.', v: 'Sıralamayı kolay hatırlamak için şu ipucu işine yarar: ke, di, ge, ni. Kromozom, DNA, gen, nükleotit.',
          h: '<div class="an-tip">Hafıza ipucu: <b>Ke-Di-Ge-Ni</b> → Kromozom › DNA › Gen › Nükleotit</div>' }
      ] },

    { t: 'Sırala: büyükten küçüğe',
      steps: [{ s: 'Hadi paketi kendin aç. Bu yapıları en büyükten en küçüğe doğru sırala. Dikkat, iki yeni misafir var: hücre ve çekirdek.' }],
      ia: { tip: 'sirala', q: '<p>Yapıları <b>büyükten küçüğe</b> sırala.</p>', ust: 'en büyük', alt: 'en küçük',
        ogeler: ['Hücre', 'Çekirdek', 'Kromozom', 'DNA', 'Gen', 'Nükleotit'],
        hint: 'Kalıtım bilgisi hücrenin hangi bölümünde saklanıyordu? Sonra Ke-Di-Ge-Ni ipucunu hatırla.',
        why: 'Hücrenin çekirdeğinde kromozomlar var; kromozom paketlenmiş DNA’dır. DNA’nın bir bölümü gen, en küçük birim de nükleotittir.' } },
    { t: 'Canlıları farklı yapan ne?',
      steps: [
        { s: 'Şimdi iki önemli tuzağa bakalım. Birincisi kromozom sayısı. İnsanın vücut hücresinde 46 kromozom var, peki daha fazlası daha gelişmiş mi demek?',
          h: '<table class="an-tbl"><tr><th>Canlı</th><th>Kromozom sayısı</th></tr><tr><td>Sirke sineği</td><td>8</td></tr><tr><td>İnsan</td><td>46</td></tr><tr><td>Şempanze, patates</td><td>48</td></tr><tr><td>Köpek, tavuk</td><td>78</td></tr></table>' },
        { s: 'Hayır! Patatesin 48, köpeğin 78 kromozomu var. Kromozom sayısı gelişmişliği ya da büyüklüğü göstermez.' },
        { s: 'Köpek ile tavuğun sayısı aynı ama aynı tür değiller. Yani aynı sayıda kromozom, aynı tür olmayı gerektirmez.' },
        { s: 'İkinci tuzak: bütün canlıların DNA’sında aynı dört çeşit nükleotit bulunur. Adenin, timin, guanin ve sitozin.',
          h: '<div class="an-grid"><div><b>A</b>adenin</div><div><b>T</b>timin</div><div><b>G</b>guanin</div></div><div class="an-grid"><div><b>C</b>sitozin</div><div style="grid-column:span 2">Bütün canlılarda <b>aynı 4 çeşit</b></div></div>' },
        { s: 'Peki canlıları ve genleri birbirinden ne ayırıyor? Nükleotit çeşidi değil, nükleotitlerin sayısı ve diziliş sırası.',
          h: '<div class="an-trap"><span class="an-bad-t">Genler nükleotit çeşidine göre farklılaşır.</span><br><span class="an-ok-t">Fark, nükleotitlerin sayısı ve diziliş sırasındadır.</span></div>' }
      ] },

    { t: 'Bir nükleotidin yapısı',
      base: '<svg class="an-svg" viewBox="0 0 340 160" role="img" aria-label="Nükleotit: fosfat, ortada şeker, organik baz">' +
        '<circle cx="62" cy="78" r="26" fill="#f5b301" class="rv n1"/><text x="62" y="83" font-size="13" text-anchor="middle" font-weight="700" fill="#111" class="rv n1">Fosfat</text>' +
        '<line x1="88" y1="78" x2="136" y2="78" class="ln rv n2" stroke-width="3"/>' +
        '<polygon points="170,44 202,67 190,104 150,104 138,67" fill="#3b82f6" class="rv n2"/><text x="170" y="84" font-size="13" text-anchor="middle" font-weight="700" fill="#fff" class="rv n2">Şeker</text>' +
        '<line x1="202" y1="78" x2="232" y2="78" class="ln rv n3" stroke-width="3"/>' +
        '<rect x="228" y="56" width="104" height="44" rx="8" fill="#ef4444" class="rv n3"/><text x="278" y="83" font-size="13" text-anchor="middle" font-weight="700" fill="#fff" class="rv n3">Organik baz</text>' +
        '<text x="170" y="132" font-size="12" text-anchor="middle" class="acc rv n2">deoksiriboz (5 karbonlu)</text>' +
        '<text x="280" y="120" font-size="12" text-anchor="middle" class="mut rv n3">A, T, G ya da C</text>' +
        '<text x="170" y="154" font-size="12" text-anchor="middle" class="rv n4">Ortadaki, iki parçaya da bağlanan parça şekerdir.</text></svg>',
      steps: [
        { s: 'Şimdi bir nükleotidi büyüteç altına alalım. Üç parçadan oluşuyor. İlki fosfat.', on: '.n1' },
        { s: 'İkincisi beş karbonlu bir şeker, adı deoksiriboz. Fosfat bu şekere bağlanır.', on: '.n2' },
        { s: 'Üçüncüsü organik baz. Nükleotitler birbirinden yalnızca bazlarına göre ayrılır ve bazın adıyla anılır.', on: '.n3' },
        { s: 'LGS’de sana çoğu zaman sembollerle bir model verilir. Hangisinin şeker olduğunu bulmanın yolu basit: ortadaki, diğer ikisine bağlanan parça şekerdir.', on: '.n4' }
      ] },

    { t: 'Dokun: modeldeki şekerler',
      steps: [{ s: 'Şimdi bir model okuyalım. Sembollerle çizilmiş bu DNA ipliğinde şekeri gösteren parçaların hepsine dokun, sonra kontrol et.' }],
      ia: { tip: 'gorselsec', q: '<p>Tek iplikli modelde <b>şekeri</b> gösteren parçaların hepsine dokun.</p>',
        svg: '<svg class="an-svg" viewBox="0 0 340 150" role="group" aria-label="Sembollerle çizilmiş tek bir DNA ipliği modeli"><line x1="52" y1="40" x2="290" y2="40" class="st" stroke-width="3"/><line x1="110" y1="66" x2="110" y2="96" class="st" stroke-width="3"/><line x1="230" y1="66" x2="230" y2="96" class="st" stroke-width="3"/><g data-b="a" aria-label="1 numaralı parça"><circle cx="30" cy="40" r="22" class="box"/><text x="30" y="45" text-anchor="middle" font-size="15">1</text></g><g data-b="s1" aria-label="2 numaralı parça"><polygon points="110,14 138,40 110,66 82,40" class="box"/><text x="110" y="45" text-anchor="middle" font-size="15">2</text></g><g data-b="b1" aria-label="3 numaralı parça"><rect x="82" y="96" width="56" height="44" rx="6" class="box"/><text x="110" y="123" text-anchor="middle" font-size="15">3</text></g><g data-b="c" aria-label="4 numaralı parça"><circle cx="170" cy="40" r="22" class="box"/><text x="170" y="45" text-anchor="middle" font-size="15">4</text></g><g data-b="s2" aria-label="5 numaralı parça"><polygon points="230,14 258,40 230,66 202,40" class="box"/><text x="230" y="45" text-anchor="middle" font-size="15">5</text></g><g data-b="b2" aria-label="6 numaralı parça"><rect x="202" y="96" width="56" height="44" rx="6" class="box"/><text x="230" y="123" text-anchor="middle" font-size="15">6</text></g><g data-b="d" aria-label="7 numaralı parça"><circle cx="310" cy="40" r="22" class="box"/><text x="310" y="45" text-anchor="middle" font-size="15">7</text></g></svg>', dogru: ['s1', 's2'],
        hint: 'Her nükleotitte fosfat da baz da aynı parçaya bağlanır. Hem omurgaya hem de dışarıdaki bir parçaya bağlı olan hangisi?',
        why: '2 ve 5 hem fosfatlara hem de bazlara bağlı; bu yüzden şekerdir. Yuvarlaklar fosfat, alttaki kutular bazdır. Bazlar şekere bağlanır, fosfata değil.',
        whyV: 'İki ve beş numaralı parçalar hem fosfatlara hem de bazlara bağlı; bu yüzden şekerdir. Yuvarlaklar fosfat, alttaki kutular bazdır. Bazlar şekere bağlanır, fosfata değil.' } },
    { t: 'İkili sarmal ve eşleşme kuralı',
      base: '<svg class="an-svg" viewBox="0 0 340 180" role="img" aria-label="DNA merdiveni: adenin timinle, guanin sitozinle eşleşir">' +
        '<line x1="20" y1="40" x2="320" y2="40" class="st rv m1" stroke-width="5"/><line x1="20" y1="140" x2="320" y2="140" class="st rv m1" stroke-width="5"/>' +
        '<text x="20" y="28" font-size="11" class="mut rv m1">şeker - fosfat omurgası</text>' +
        '<g class="rv m2" stroke-width="14" stroke-linecap="butt">' +
        '<line x1="50" y1="42" x2="50" y2="90" stroke="#ef4444"/><line x1="50" y1="90" x2="50" y2="138" stroke="#3b82f6"/>' +
        '<line x1="98" y1="42" x2="98" y2="90" stroke="#3b82f6"/><line x1="98" y1="90" x2="98" y2="138" stroke="#ef4444"/>' +
        '<line x1="146" y1="42" x2="146" y2="90" stroke="#22c55e"/><line x1="146" y1="90" x2="146" y2="138" stroke="#f5b301"/>' +
        '<line x1="194" y1="42" x2="194" y2="90" stroke="#f5b301"/><line x1="194" y1="90" x2="194" y2="138" stroke="#22c55e"/>' +
        '<line x1="242" y1="42" x2="242" y2="90" stroke="#ef4444"/><line x1="242" y1="90" x2="242" y2="138" stroke="#3b82f6"/>' +
        '<line x1="290" y1="42" x2="290" y2="90" stroke="#22c55e"/><line x1="290" y1="90" x2="290" y2="138" stroke="#f5b301"/></g>' +
        '<g class="rv m2" font-size="13" font-weight="700" text-anchor="middle">' +
        '<text x="66" y="70">A</text><text x="66" y="120">T</text><text x="114" y="70">T</text><text x="114" y="120">A</text>' +
        '<text x="162" y="70">G</text><text x="162" y="120">C</text><text x="210" y="70">C</text><text x="210" y="120">G</text>' +
        '<text x="258" y="70">A</text><text x="258" y="120">T</text><text x="306" y="70">G</text><text x="306" y="120">C</text></g>' +
        '<text x="170" y="170" font-size="13" text-anchor="middle" class="acc rv m3">A ↔ T &#160;&#160; G ↔ C</text></svg>',
      steps: [
        { s: 'Nükleotitler art arda bağlanınca bir iplik oluşur. DNA’da böyle iki iplik var. Kenarlar şeker ve fosfattan oluşan omurga.', on: '.m1' },
        { s: 'Bazlar ise içe doğru bakar ve karşı iplikteki bazla eşleşir. Tıpkı bir merdivenin basamakları gibi.', on: '.m2' },
        { s: 'Kural çok net: adenin yalnızca timinle, guanin yalnızca sitozinle eşleşir. Bu kural bütün canlılarda aynıdır.', on: '.m3' },
        { s: 'Bu merdiven kendi etrafında burulunca ikili sarmal oluşur. Modeli 1953’te <i lang="en">Watson</i> ve <i lang="en">Crick</i> ortaya koydu.' },
        { s: 'Bir ipucu: karşı ipliği yazmak için her bazın karşısına eşini yazman yeterli. T A C G G A T dizisinin karşısı A T G C C T A olur.',
          v: 'Bir ipucu: karşı ipliği yazmak için her bazın karşısına eşini yazman yeterli. Timinin karşısına adenin, adeninin karşısına timin, sitozinin karşısına guanin gelir.',
          h: '<div class="an-ex"><span class="an-l">İplik: &nbsp;T A C G G A T</span><span class="an-l">Karşısı: <b class="an-ek">A T G C C T A</b></span></div>' }
      ] },

    { t: 'Boşluk: karşı ipliği yaz',
      steps: [{ s: 'Eşleşme kuralını uygulama zamanı. Üstteki ipliğin karşısına gelecek bazları sırayla yerleştir.' }],
      ia: { tip: 'bosluk', q: '<p>Eşleşme kuralına göre karşı ipliği tamamla.</p>',
        metin: '1. iplik:  G  A  T  C<br>2. iplik:  [_]  [_]  [_]  [_]',
        secenek: ['A', 'T', 'G', 'C', 'U'], cevap: ['C', 'T', 'A', 'G'],
        hint: 'Adenin yalnızca timinle, guanin yalnızca sitozinle eşleşir. Her bazın karşısına eşini koy.',
        why: 'G’nin karşısı C, A’nın karşısı T, T’nin karşısı A, C’nin karşısı G. U harfi DNA’da bulunmaz.',
        whyV: 'Guaninin karşısına sitozin, adeninin karşısına timin, timinin karşısına adenin, sitozinin karşısına guanin gelir. U harfiyle gösterilen urasil, DNA’da bulunmaz.' } },
    { t: 'DNA’da sayma kuralları',
      base: '<table class="an-tbl"><tr><th>Her zaman doğru</th><th>Örnek: 100 nükleotit, 30 A</th></tr>' +
        '<tr class="rv c1"><td>A sayısı = T sayısı</td><td>T = 30</td></tr>' +
        '<tr class="rv c2"><td>G sayısı = C sayısı</td><td>G + C = 40 → G = C = 20</td></tr>' +
        '<tr class="rv c3"><td>nükleotit = fosfat = şeker = baz</td><td>100’er tane</td></tr>' +
        '<tr class="rv c4"><td>bir iplik = toplamın yarısı</td><td>50 nükleotit</td></tr></table>',
      steps: [
        { s: 'Eşleşme kuralı bize hesap yaptırır. Diyelim ki bir DNA’da 100 nükleotit var ve 30’u adenin.' },
        { s: 'Her adeninin karşısında bir timin olduğu için timin sayısı da 30’dur.', on: '.c1' },
        { s: 'Geriye 40 nükleotit kalır. Bunlar guanin ve sitozin; eşit olmak zorundalar, yani 20’şer tane.', v: 'Geriye 40 nükleotit kalır. Bunlar guanin ve sitozin; eşit olmak zorundalar, yani yirmişer tane.', on: '.c2' },
        { s: 'Her nükleotitte bir fosfat, bir şeker ve bir baz olduğundan 100 fosfat, 100 şeker, 100 baz vardır.', on: '.c3' },
        { s: 'Her iplikte de toplamın yarısı, yani 50 nükleotit bulunur.', on: '.c4' },
        { s: 'Mini örnek: modelde 18 adenin ve 22 guanin kullanılmış. Kaç fosfat var? Karşı ipliği unutma: 18 timin ve 22 sitozin de var.',
          h: '<div class="an-ex"><span class="an-l">A = T = 18, G = C = 22</span><span class="an-l">Toplam: 18 + 18 + 22 + 22 = <b>80</b> → 80 fosfat</span></div>' },
        { s: 'Burada çok dikkat et: A ile T’nin eşitliği çift iplikli DNA’nın tamamı için geçerli. Tek bir iplikte eşit olmak zorunda değil. Ayrıca A, G’ye eşittir diye bir kural yok.',
          v: 'Burada çok dikkat et: adenin ile timinin eşitliği, çift iplikli DNA’nın tamamı için geçerli. Tek bir iplikte eşit olmak zorunda değil. Ayrıca adenin guanine eşittir diye bir kural da yok.',
          h: '<div class="an-trap"><span class="an-bad-t">18 + 22 = 40 fosfat</span> (karşı iplik unutuldu)<br><span class="an-bad-t">Tek iplikte A = T</span> · <span class="an-bad-t">A = G</span></div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Çift iplikli bir DNA molekülünde toplam <b>1000</b> nükleotit vardır. Bu nükleotitlerin <b>200</b> tanesi adenin nükleotittir. Buna göre bu DNA’daki <b>guanin</b> nükleotit sayısı kaçtır?</p>',
        c: ['200', '300', '600', '800'], a: 'B',
        hint: 'Önce timini bul: A kadar T vardır. Kalanlar G ile C’dir ve bunlar eşit paylaşılır.',
        hintV: 'Önce timini bul: adenin kadar timin vardır. Kalanlar guanin ile sitozindir ve bunlar eşit paylaşılır.',
        why: 'A = T = 200, ikisi birlikte 400. Kalan 600 nükleotit G ve C’dir; G = C olduğundan G = 300.',
        whyV: 'Adenin 200 ise timin de 200; ikisi birlikte 400. Kalan 600 nükleotit guanin ve sitozin; eşit olduklarından guanin 300.' },
      steps: [{ s: 'Sayma kurallarını deneme zamanı. Kâğıt kalem alabilirsin, sonra cevabını işaretle.' }] },

    { t: 'DNA kendini nasıl eşler?',
      base: '<svg class="an-svg" viewBox="0 0 340 190" role="img" aria-label="DNA fermuar gibi açılır, her eski ipliğin karşısına yeni iplik kurulur">' +
        '<line x1="15" y1="85" x2="140" y2="85" class="st" stroke-width="4"/><line x1="15" y1="105" x2="140" y2="105" class="st" stroke-width="4"/>' +
        '<line x1="30" y1="85" x2="30" y2="105" class="ln" stroke-width="3"/><line x1="55" y1="85" x2="55" y2="105" class="ln" stroke-width="3"/><line x1="80" y1="85" x2="80" y2="105" class="ln" stroke-width="3"/><line x1="105" y1="85" x2="105" y2="105" class="ln" stroke-width="3"/><line x1="128" y1="85" x2="128" y2="105" class="ln" stroke-width="3"/>' +
        '<path d="M140 85 L320 30" class="st dr r1" stroke-width="4"/><path d="M140 105 L320 160" class="st dr r1" stroke-width="4"/>' +
        '<path d="M168 93 L320 50" class="st2 dr r2" stroke-width="4" stroke-dasharray="7 4"/><path d="M168 97 L320 140" class="st2 dr r2" stroke-width="4" stroke-dasharray="7 4"/>' +
        '<g class="rv r2"><circle cx="200" cy="95" r="5" fill="#ef4444"/><circle cx="218" cy="89" r="5" fill="#3b82f6"/><circle cx="218" cy="101" r="5" fill="#22c55e"/><circle cx="236" cy="95" r="5" fill="#f5b301"/></g>' +
        '<text x="250" y="22" font-size="12" class="acc rv r1">eski iplik</text><text x="250" y="182" font-size="12" class="acc rv r1">eski iplik</text>' +
        '<text x="256" y="86" font-size="12" class="rv r2">yeni iplik</text><text x="256" y="112" font-size="12" class="rv r2">yeni iplik</text>' +
        '<text x="20" y="72" font-size="12" class="mut">ilk DNA</text></svg>',
      steps: [
        { s: 'Hücre bölünmeden önce DNA kendinin bir kopyasını yapar. Böylece her yeni hücreye aynı bilgi gider. Buna DNA’nın kendini eşlemesi denir.' },
        { s: 'Önce bazlar arasındaki zayıf bağlar kopar ve iki iplik fermuar gibi açılır.', on: '.r1', w: 600 },
        { s: 'Sitoplazmadan gelen serbest nükleotitler, her eski ipliğin karşısına eşleşme kuralına göre dizilir ve yeni iplikleri oluşturur.', on: '.r2', w: 600 },
        { s: 'Sonuçta iki DNA oluşur. Her biri bir eski, bir yeni iplikten yapılmıştır ve ikisi de başlangıçtaki DNA’nın aynısıdır.' },
        { s: 'Burada çok dikkat et, LGS’de en sık düşülen tuzak bu: yeni iplik, kalıp aldığı eski ipliğin aynısı değil, tamamlayıcısıdır.',
          h: '<div class="an-trap"><span class="an-bad-t">Yeni iplik, karşısındaki eski ipliğin aynısıdır.</span><br><span class="an-ok-t">Yeni iplik eski ipliğin tamamlayıcısıdır; oluşan iki DNA ise birbirinin aynısıdır.</span></div>' },
        { s: 'Bir de şuna dikkat: eşlenme sırasında sitoplazmadaki serbest nükleotit sayısı azalır, çekirdekteki DNA miktarı artar. Eski iplikler parçalanmaz.',
          h: '<table class="an-tbl"><tr><th>Eşlenme sayısı</th><th>1</th><th>2</th><th>3</th><th>n</th></tr><tr><td>Oluşan DNA</td><td>2</td><td>4</td><td>8</td><td>2<sup>n</sup></td></tr><tr><td>Eski iplik taşıyan DNA</td><td>2</td><td>2</td><td>2</td><td>hep 2</td></tr></table>' }
      ] },

    { t: 'Doğru mu, yanlış mı: eşlenme',
      steps: [{ s: 'Eşlenmenin tuzaklarını tarayalım. Her ifadeye doğru ya da yanlış de.' }],
      ia: { tip: 'dogruyanlis', q: '<p>DNA’nın kendini eşlemesi için her ifadeye karar ver.</p>',
        ifadeler: [
          { m: 'Yeni iplik, kalıp aldığı eski ipliğin aynısıdır.', d: false, a: 'Tamamlayıcısıdır; aynısı karşıdaki eski ipliktir.' },
          { m: 'Oluşan iki DNA’nın her birinde bir eski, bir yeni iplik vardır.', d: true, a: 'Eski iplikler parçalanmaz, kalıp olur.' },
          { m: 'Eşlenme sırasında sitoplazmadaki serbest nükleotit sayısı azalır.', d: true, a: 'Yeni iplikler bu nükleotitlerle yapılır.' },
          { m: 'Eşlenme bittiğinde çekirdekteki DNA miktarı değişmez.', d: false, a: 'DNA iki katına çıkar, yani artar.' }],
        hint: 'Fermuar açılınca her eski iplik ne oluyor: kalıp mı, atık mı? Yeni iplikler neyle yapılıyor?',
        why: 'Her eski iplik kalıp olur, karşısına tamamlayıcı yeni iplik dizilir. Serbest nükleotitler azalır, DNA miktarı artar; iki DNA da ilkinin aynısıdır.' } },
    { t: 'Kalıtımın dili',
      base: '<table class="an-tbl"><tr><th>Kavram</th><th>Anlamı</th><th>Örnek</th></tr>' +
        '<tr class="rv l1"><td><b>Alel</b></td><td>gen çiftinin her biri; biri anneden, biri babadan</td><td>M ve m</td></tr>' +
        '<tr class="rv l2"><td><b>Baskın</b></td><td>yanında ne olursa olsun etkisini gösterir</td><td>M (büyük harf)</td></tr>' +
        '<tr class="rv l2"><td><b>Çekinik</b></td><td>yalnız iki tanesi bir araya gelince görülür</td><td>m (küçük harf)</td></tr>' +
        '<tr class="rv l3"><td><b>Genotip</b></td><td>harflerle gen yapısı</td><td>MM, Mm, mm</td></tr>' +
        '<tr class="rv l3"><td><b>Fenotip</b></td><td>gözlenen özellik</td><td>mor, beyaz</td></tr>' +
        '<tr class="rv l4"><td><b>Homozigot</b></td><td>saf döl, aleller aynı</td><td>MM, mm</td></tr>' +
        '<tr class="rv l4"><td><b>Heterozigot</b></td><td>melez döl, aleller farklı</td><td>Mm</td></tr></table>',
      steps: [
        { s: 'Canlıların özelliklerinin anne-babadan yavrulara geçmesine kalıtım denir. Kurallarını bezelyelerle ilk ortaya koyan Mendel’dir.' },
        { s: 'Bir özelliği belirleyen gen çiftinin her birine alel denir. Biri anneden, biri babadan gelir. Örneğimiz bezelyede çiçek rengi: M mor, m beyaz.', v: 'Bir özelliği belirleyen gen çiftinin her birine alel denir. Biri anneden, biri babadan gelir. Örneğimiz bezelyede çiçek rengi: büyük M mor, küçük m beyaz.', on: '.l1' },
        { s: 'Baskın gen büyük harfle yazılır ve yanında ne olursa olsun etkisini gösterir. Çekinik gen küçük harfle yazılır, ancak iki tanesi bir araya gelirse görünür.', on: '.l2' },
        { s: 'Harflerle yazılan gen yapısına genotip, gözümüzle gördüğümüz özelliğe fenotip denir. Fenotip, genotip ile çevrenin birlikte etkisidir.', on: '.l3' },
        { s: 'İki aleli aynı olan bireye saf döl, yani homozigot; farklı olana melez, yani heterozigot denir. Melez bireyin fenotipi baskın özelliktir.', on: '.l4' },
        { s: 'Şimdi kritik bir nokta: beyaz çiçekli bir bezelyenin genotipi kesindir, küçük m küçük m. Ama mor çiçekli bir bezelye saf da olabilir, melez de.',
          h: '<div class="an-trap">Çekinik fenotip → genotip <b>kesin</b> (mm). Baskın fenotip → MM <b>ya da</b> Mm, tek başına bilinemez. Baskın “daha sık görülen” ya da “daha iyi” demek değildir.</div>' }
      ] },

    { t: 'Eşleştir: genotip ve görünüş',
      steps: [{ s: 'Yeni kavramları pekiştirelim. Bezelyede büyük M mor, küçük m beyaz. Her terimi ya da genotipi doğru karşılığıyla eşleştir.' }],
      ia: { tip: 'eslestir', q: '<p>Bezelyede M mor, m beyaz. Her soldakini karşılığıyla eşleştir.</p>', solBaslik: 'Terim / genotip', sagBaslik: 'Karşılığı',
        sol: ['MM', 'Mm', 'mm', 'Fenotip', 'Alel'],
        sag: ['Saf döl mor', 'Melez mor', 'Saf döl beyaz', 'Gözle görülen özellik', 'Gen çiftinin her biri'],
        hint: 'Bir büyük harf varsa görünüş baskın olur. İki harf aynıysa saf döl, farklıysa melezdir.',
        why: 'MM ve Mm ikisi de mor görünür; MM saf döl, Mm melezdir. Beyaz görünmek için iki küçük m gerekir. Fenotip görünüş, alel gen çiftinin her biridir.',
        whyV: 'Büyük M büyük M ile büyük M küçük m, ikisi de mor görünür; birincisi saf döl, ikincisi melezdir. Beyaz görünmek için iki küçük m gerekir. Fenotip görünüştür, alel ise gen çiftinin her biridir.' } },
    { t: 'Olasılık tablosu: melez × melez',
      base: '<table class="an-tbl" style="text-align:center;max-width:260px;margin:8px auto"><tr><th></th><th style="text-align:center">M</th><th style="text-align:center">m</th></tr>' +
        '<tr><th style="text-align:center">M</th><td class="rv q1" style="text-align:center"><b>MM</b><br><small>mor</small></td><td class="rv q2" style="text-align:center"><b>Mm</b><br><small>mor</small></td></tr>' +
        '<tr><th style="text-align:center">m</th><td class="rv q2" style="text-align:center"><b>Mm</b><br><small>mor</small></td><td class="rv q3 an-ek" style="text-align:center"><b>mm</b><br><small>beyaz</small></td></tr></table>',
      steps: [
        { s: 'Üreme hücreleri oluşurken her alel çiftinden yalnızca biri gamete geçer. Olası sonuçları görmek için olasılık tablosu kullanırız.' },
        { s: 'İki melez mor bezelyeyi çaprazlayalım. Her ebeveyn ya büyük M ya da küçük m verir. Büyük M ile büyük M birleşirse saf mor yavru olur.', on: '.q1' },
        { s: 'Bir büyük M ile bir küçük m birleşirse melez yavru olur. Bu iki kutuda var ve ikisi de mor görünür.', on: '.q2' },
        { s: 'İki küçük m bir araya gelirse beyaz yavru çıkar. Bakar mısın, ebeveynlerde görünmeyen beyaz, yavruların dörtte birinde ortaya çıkabiliyor.', on: '.q3', mk: '.q3' },
        { s: 'Sonuç: dörtte üç mor, dörtte bir beyaz. Diğer çaprazlamaları da bu tabloyla kolayca bulursun.',
          h: '<table class="an-tbl"><tr><th>Çaprazlama</th><th>Yavru fenotipi</th></tr><tr><td>MM × mm</td><td>%100 mor (hepsi melez)</td></tr><tr><td>Mm × Mm</td><td>%75 mor, %25 beyaz</td></tr><tr><td>Mm × mm</td><td>%50 mor, %50 beyaz</td></tr><tr><td>mm × mm</td><td>%100 beyaz</td></tr></table>' },
        { s: 'Şunu unutma: bu tablo bir tahmin. Dört yavru doğarsa tam üç mor bir beyaz çıkmak zorunda değil. Her doğum da öncekilerden bağımsızdır.' }
      ] },

    { t: 'Kaydır: kaç beyaz beklenir?',
      steps: [{ s: 'Tabloyu yeni bir çaprazlamada kullan. Melez mor bir bezelye, beyaz çiçekli bir bezelyeyle çaprazlanıyor ve 20 yavru oluşuyor. Yaklaşık kaçının beyaz olmasını bekleriz?' }],
      ia: { tip: 'kaydir', q: '<p><b>Mm × mm</b> çaprazlamasında 20 yavru oluşuyor. Yaklaşık kaçı <b>beyaz</b> beklenir?</p>',
        min: 0, max: 20, adim: 1, cevap: 10, tol: 0, birim: ' yavru', etiket: [0, 5, 10, 15, 20],
        hint: 'İki satır, iki sütunlu tabloyu kur: bir ebeveyn M ya da m verir, beyaz olan yalnızca m verir. Kaç kutuda iki küçük m var?',
        hintV: 'İki satır, iki sütunlu tabloyu kur: melez ebeveyn büyük M ya da küçük m verir, beyaz olan yalnızca küçük m verir. Kaç kutuda iki küçük m var?',
        why: 'Tablonun 4 kutusundan 2’si mm, yani yarısı beyaz: 20’nin yarısı 10. Bu bir olasılıktır; gerçek sayı biraz farklı çıkabilir.',
        whyV: 'Tablonun dört kutusundan ikisinde iki küçük m var, yani yavruların yarısı beyaz: yirminin yarısı on. Bu bir olasılıktır; gerçek sayı biraz farklı çıkabilir.' } },
    { t: 'Yavrudan ebeveyne: ters düşünme',
      steps: [
        { s: 'Çıkmış sorularda genelde tersi sorulur: yavrulara bakıp ebeveynlerin genotipini bulursun. Bunun için birkaç altın kural var.' },
        { s: 'Birincisi: baskın görünüşlü iki ebeveynden çekinik bir yavru doğduysa, iki ebeveyn de kesinlikle melezdir.',
          h: '<div class="an-rule"><b>Mor × mor → beyaz yavru</b> ⇒ ebeveynler kesinlikle Mm × Mm</div>' },
        { s: 'İkincisi: baskın ile çekinik çaprazlanınca yavruların yarısı baskın, yarısı çekinikse baskın ebeveyn melezdir.',
          h: '<div class="an-rule"><b>%50 – %50</b> ⇒ Mm × mm</div>' },
        { s: 'Üçüncüsü: bir ebeveyn saf baskınsa yavruların hiçbiri çekinik görünüşte olamaz.',
          h: '<div class="an-rule"><b>Bir ebeveyn MM</b> ⇒ çekinik yavru çıkmaz</div>' },
        { s: 'Bu bilgi akraba evliliğini de açıklar. Çekinik bir hastalık genini taşıyan kişi sağlıklı görünür; ona taşıyıcı denir.' },
        { s: 'İki taşıyıcının her çocuğunun hasta olma olasılığı dörtte birdir. Akrabaların aynı geni taşıma olasılığı yüksek olduğu için risk artar.',
          h: '<div class="an-trap">Akraba evliliği genleri değiştirmez, mutasyon yapmaz. Yalnızca aynı çekinik genlerin çocukta bir araya gelme olasılığını artırır.</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Bezelyede sarı tohum rengi (S) yeşile (s) baskındır. <b>Sarı tohumlu iki bezelye</b> çaprazlanıyor ve yavruların bir kısmı <b>yeşil tohumlu</b> çıkıyor. Buna göre:</p><p>I. Ebeveynlerin ikisi de s aleli taşır.<br>II. Sarı tohumlu yavruların hepsi melezdir.<br>III. Yavruların yaklaşık {{1|4}}’ü yeşil tohumludur.</p><p>yargılarından hangileri <b>doğrudur</b>?</p>',
        c: ['Yalnız I', 'I ve III', 'II ve III', 'I, II ve III'], a: 'B',
        hint: 'Yeşil yavru (ss) için iki ebeveyn de birer s vermiş olmalı. Sonra Ss × Ss tablosunu kur: sarı yavruların hepsi Ss mi?',
        hintV: 'Yeşil yavru için iki ebeveyn de birer küçük s vermiş olmalı. Sonra iki melezin tablosunu kur: sarı yavruların hepsi melez mi?',
        why: 'Ebeveynler Ss × Ss’dir, I doğru. Yavrular SS, Ss, Ss, ss olur; sarıların bir kısmı SS (saf) olduğundan II yanlış. Beklenen yeşil oranı {{1|4}}, III doğru.',
        whyV: 'Ebeveynler iki melezdir, bu yüzden birinci yargı doğru. Yavruların bir kısmı saf sarı olur, yani sarıların hepsi melez değil; ikinci yargı yanlış. Beklenen yeşil oranı dörtte bir; üçüncü yargı doğru.' },
      steps: [{ s: 'LGS tarzı bir yargı sorusu geldi. Her yargıyı tek tek kontrol et.' }] },

    { t: 'Mutasyon mu, modifikasyon mu?',
      base: '<table class="an-tbl"><tr><th></th><th>Mutasyon</th><th>Modifikasyon</th></tr>' +
        '<tr class="rv x1"><td>Ne değişir?</td><td>DNA’daki dizilim</td><td>DNA aynı, genin işleyişi değişir</td></tr>' +
        '<tr class="rv x2"><td>Nedeni</td><td>radyasyon, kimyasallar, eşlenme hatası</td><td>sıcaklık, ışık, besin, nem</td></tr>' +
        '<tr class="rv x3"><td>Kalıtsal mı?</td><td>üreme hücresindeyse evet</td><td>hayır, asla</td></tr>' +
        '<tr class="rv x4"><td>Örnek</td><td>albinizm, orak hücreli anemi, Down sendromu</td><td>Himalaya tavşanı, çuha çiçeği, bronzlaşma</td></tr></table>',
      steps: [
        { s: 'Canlılardaki değişimlerin bir kısmı genlerden, bir kısmı çevreden kaynaklanır. Ayırt etmenin tek sorusu var: DNA dizilimi değişti mi?', on: '.x1' },
        { s: 'Mutasyona radyasyon, bazı kimyasallar ya da eşlenme hataları yol açar. Modifikasyon ise sıcaklık, ışık, besin gibi çevre etkileriyle olur.', on: '.x2' },
        { s: 'Mutasyon üreme hücresinde olursa yavruya geçer. Modifikasyon hiçbir zaman yavruya geçmez.', on: '.x3' },
        { s: 'Himalaya tavşanına bakalım: kürk rengi geni soğukta çalışır. Kulak, burun, ayak gibi soğuk uçlar siyah, sıcak gövde beyazdır. Bu bir modifikasyon.', on: '.x4' },
        { s: 'Burada çok dikkat et: mutasyon da radyasyon gibi çevresel bir etkenle oluşabilir. Belirleyici olan etkenin ne olduğu değil, DNA’nın değişip değişmediğidir.',
          h: '<div class="an-trap">“Çevreden kaynaklandı” ≠ modifikasyon. UV ışını deride DNA’yı değiştirirse bu bir <b>mutasyondur</b>; vücut hücresinde olduğu için kalıtsal değildir.</div>' },
        { s: 'Deney sorularında, farkın çevreden geldiğini göstermek için genetik yapısı aynı bireyler kullanılır: aynı bitkinin çelikleri ya da tek yumurta ikizleri gibi.' }
      ] },

    { t: 'Grupla: mutasyon mu, modifikasyon mu?',
      steps: [{ s: 'Ayırt etme sorusunu sen sor: DNA dizilimi değişti mi? Her örneği doğru kutuya yerleştir.' }],
      ia: { tip: 'grup', q: '<p>Her değişimi doğru kutuya yerleştir.</p>', gruplar: ['Mutasyon', 'Modifikasyon'],
        ogeler: [{ m: 'Radyasyonla oluşan altı parmaklılık', g: 0 }, { m: 'Soğukta kararan tavşan kulağı', g: 1 },
          { m: 'Güneşte bronzlaşan ten', g: 1 }, { m: 'Albinizm (renk maddesi yok)', g: 0 },
          { m: 'Sporla büyüyen kas', g: 1 }, { m: 'Eşlenme hatasıyla baz değişimi', g: 0 },
          { m: 'Toprak pH’sine göre ortanca rengi', g: 1 }],
        hint: 'Etken çevresel olsa bile karar veren soru şu: bu özellik DNA’ya yazıldı mı, yavruya geçer mi?',
        why: 'Radyasyon da çevresel bir etken ama DNA’yı değiştirdiği için mutasyondur. Kas, bronz ten, tavşan kulağı ve ortanca rengi çevreyle oluşur, DNA değişmez: modifikasyon.' } },
    { t: 'Ara soru', cp: {
        q: '<p>Aynı bitkiden alınan çelikler 18 °C’de ve 32 °C’de yetiştiriliyor. 18 °C’dekiler <b>kırmızı</b>, 32 °C’dekiler <b>beyaz</b> çiçek açıyor. Beyaz çiçekli bitkinin tohumları 18 °C’de ekilince kırmızı çiçekli bitkiler oluşuyor. Bu durum için hangisi <b>doğrudur</b>?</p>',
        c: ['Yüksek sıcaklık DNA’nın nükleotit dizilimini değiştirmiştir.', 'Çiçek rengindeki değişim bir modifikasyondur.', 'Beyaz çiçek özelliği yavrulara aktarılmıştır.', 'Bitki ortama uymak için genlerini değiştirmiştir.'], a: 'B',
        hint: 'Bitkilerin genleri aynı mı? Beyaz renk yavrulara geçti mi?',
        why: 'Çelikler aynı bitkiden geldiği için genler aynıdır; fark sıcaklıktan kaynaklanır ve tohumlara geçmez. Bu bir modifikasyondur.' },
      steps: [{ s: 'Şimdi bir deney sorusu. Genler değişti mi, değişmedi mi, ona karar ver.' }] },

    { t: 'Adaptasyon ve doğal seçilim',
      base: '<svg class="an-svg" viewBox="0 0 340 170" role="img" aria-label="İlaç uygulandıkça dirençli böcekler çoğalır">' +
        '<text x="10" y="34" font-size="12" class="mut">1. kuşak</text>' +
        '<g class="rv s1"><circle cx="110" cy="30" r="9" fill="#94a3b8"/><circle cx="140" cy="30" r="9" fill="#94a3b8"/><circle cx="170" cy="30" r="9" fill="#ef4444"/><circle cx="200" cy="30" r="9" fill="#94a3b8"/><circle cx="230" cy="30" r="9" fill="#94a3b8"/><circle cx="260" cy="30" r="9" fill="#94a3b8"/></g>' +
        '<text x="300" y="62" font-size="12" text-anchor="middle" class="acc rv s2">ilaç</text><text x="170" y="64" font-size="16" text-anchor="middle" class="mut rv s2">↓</text>' +
        '<text x="10" y="94" font-size="12" class="mut rv s2">2. kuşak</text>' +
        '<g class="rv s2"><circle cx="110" cy="90" r="9" fill="#ef4444"/><circle cx="140" cy="90" r="9" fill="#ef4444"/><circle cx="170" cy="90" r="9" fill="#94a3b8"/><circle cx="200" cy="90" r="9" fill="#ef4444"/></g>' +
        '<text x="170" y="122" font-size="16" text-anchor="middle" class="mut rv s3">↓</text><text x="10" y="152" font-size="12" class="mut rv s3">sonraki</text>' +
        '<g class="rv s3"><circle cx="110" cy="148" r="9" fill="#ef4444"/><circle cx="140" cy="148" r="9" fill="#ef4444"/><circle cx="170" cy="148" r="9" fill="#ef4444"/><circle cx="200" cy="148" r="9" fill="#ef4444"/><circle cx="230" cy="148" r="9" fill="#ef4444"/><circle cx="260" cy="148" r="9" fill="#ef4444"/></g>' +
        '<text x="290" y="34" font-size="11" fill="#ef4444" class="rv s1">dirençli</text></svg>',
      steps: [
        { s: 'Bir canlının ortamında hayatta kalma ve üreme şansını artıran kalıtsal özelliklere adaptasyon denir. Kaktüsün dikenleri ya da çöl tilkisinin büyük kulakları gibi.' },
        { s: 'Aynı türün bireyleri arasındaki kalıtsal farklara varyasyon denir. Kaynakları mutasyonlar ve eşeyli üremedir. Bak, bu böcek topluluğunda bir tanesi ilaca dirençli.', on: '.s1' },
        { s: 'İlaç uygulanınca dirençsiz böceklerin çoğu ölür, dirençli olan hayatta kalıp ürer. Sonraki kuşakta dirençliler artar.', on: '.s2' },
        { s: 'Kuşaklar geçtikçe neredeyse hepsi dirençli olur. Ortama uygun bireylerin daha çok hayatta kalıp üremesine doğal seçilim denir.', on: '.s3' },
        { s: 'İşte büyük tuzak: ilaç böcekte direnç oluşturmadı! Zaten var olan dirençli bireyleri seçti. Canlılar ortama uymak için istedikleri özelliği geliştiremez.',
          h: '<div class="an-trap">Şıklarda “… için geliştirmiştir”, “ortama uymak için değiştirmiştir” ifadeleri genellikle <b>yanlıştır</b>. Bronzlaşma adaptasyon değil, modifikasyondur.</div>' }
      ] },

    { t: 'Biyoteknoloji ve klonlama',
      steps: [
        { s: 'Son durağımız biyoteknoloji. Canlıları kullanarak insan yararına ürün geliştirmeye biyoteknoloji, genleri istenen yönde değiştirmeye genetik mühendisliği denir.' },
        { s: 'Gen aktarımında bir canlının geni başka bir canlıya eklenir. Mesela insan insülin geni bakteriye aktarılır ve bakteri insülin üretir.',
          h: '<table class="an-tbl"><tr><th>Uygulama</th><th>Ne yapılır?</th></tr><tr><td><b>Gen aktarımı</b></td><td>gen başka canlıya eklenir (insülin üreten bakteri, kurda dayanıklı mısır)</td></tr><tr><td><b>Gen tedavisi</b></td><td>hatalı gen yerine sağlıklı gen verilir</td></tr><tr><td><b>Islah</b></td><td>istenen bireyler seçilip çaprazlanır, gen aktarılmaz</td></tr><tr><td><b>Klonlama</b></td><td>vücut hücresi çekirdeği, çekirdeği çıkarılmış yumurtaya aktarılır</td></tr></table>' },
        { s: 'Dikkat: mısıra bakteri geni aktarılırsa genetiği değişen mısırdır. Gen tedavisinde de yalnızca geni alan hücreler değişir; üreme hücreleri değişmediyse çocuğa geçmez.' },
        { s: 'Klonlamada kalıtsal bilgi çekirdekten gelir. Bu yüzden klon, çekirdeği veren canlının genetik kopyasıdır; yumurtayı veren ya da doğuran canlıya benzemez.',
          h: '<div class="an-grid"><div><b>Çekirdek</b>A koyunu</div><div><b>Yumurta</b>B koyunu</div><div><b>Doğuran</b>C koyunu</div></div><div class="an-rule"><b>Kuzu</b> = A’nın genetik kopyası, aynı cinsiyette</div>' },
        { s: 'Biyoteknolojinin yararları var: verimli ve dayanıklı bitkiler, ilaç ve hormon üretimi. Ama biyolojik çeşitliliğin azalması ve etik sorunlar gibi riskleri de var.' }
      ] },

    { t: 'Ele: biyoteknoloji değil',
      steps: [{ s: 'Son etkinlik: aşağıdakilerden biyoteknoloji uygulaması olmayanları ele.' }],
      ia: { tip: 'eleme', q: '<p><b>Biyoteknoloji uygulaması olmayanları</b> ele.</p>',
        ogeler: ['İnsülin üreten bakteri', 'Klonlanan koyun', 'Kuraklığa dayanıklı gen aktarılmış buğday', 'İlaca dirençli böceklerin çoğalması', 'Soğukta kararan tavşan kürkü', 'Gen tedavisi'],
        ele: [3, 4],
        hint: 'Biyoteknolojide insan bir amaç için canlıyı ya da genlerini kullanır. Hangilerinde insan müdahalesi yok?',
        why: 'Böceklerin dirençli hâle gelmesi doğal seçilim, tavşan kürkü modifikasyondur; ikisinde de insan genlere müdahale etmez. Diğer dördü biyoteknoloji uygulamasıdır.' } },
    { t: 'Ara soru', cp: {
        q: '<p><b>Siyah</b> bir koyunun vücut hücresinden alınan çekirdek, <b>beyaz</b> bir koyunun çekirdeği çıkarılmış yumurta hücresine aktarılıyor. Oluşan hücre <b>kahverengi</b> bir koyunun rahmine yerleştiriliyor. Doğan kuzu ile ilgili hangisi <b>doğrudur</b>?</p>',
        c: ['Kuzu, yumurtayı veren beyaz koyunun genetik kopyasıdır.', 'Kuzu, kahverengi koyunun genlerini taşır.', 'Kuzu, siyah koyunla aynı genetik yapıya sahiptir.', 'Kuzu, döllenme sonucu oluşmuştur.'], a: 'C',
        hint: 'Kalıtsal bilgi hücrenin hangi kısmında bulunur? Çekirdeği kim verdi?',
        why: 'DNA çekirdektedir; çekirdeği siyah koyun verdiği için kuzu siyah koyunun genetik kopyasıdır. Klonlamada döllenme yoktur, doğuran koyunun genleri kuzuya geçmez.' },
      steps: [{ s: 'Son ara soru! Kalıtsal bilginin nerede saklandığını hatırla.' }] }
  ]
};
