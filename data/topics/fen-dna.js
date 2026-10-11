LGS.add({
id: "fen-dna",
summary: `
<h3>1. Nükleotit ve DNA’nın Yapısı</h3>
<div class="two">
<div class="fig"><svg viewBox="0 0 230 140" width="230" role="img" aria-label="Nükleotitin yapısı">
<circle cx="40" cy="70" r="22" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/><text x="40" y="74" font-size="11" text-anchor="middle">Fosfat</text>
<line x1="62" y1="70" x2="85" y2="70" stroke="#333" stroke-width="3"/>
<polygon points="115,40 145,60 135,98 95,98 85,60" fill="#fde68a" stroke="#a16207" stroke-width="2"/><text x="115" y="78" font-size="11" text-anchor="middle">Şeker</text>
<line x1="145" y1="70" x2="165" y2="70" stroke="#333" stroke-width="3"/>
<rect x="165" y="50" width="56" height="40" rx="4" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/><text x="193" y="68" font-size="10" text-anchor="middle">Organik</text><text x="193" y="81" font-size="10" text-anchor="middle">baz</text>
<text x="115" y="128" font-size="11" text-anchor="middle">Bir nükleotit = fosfat + şeker (deoksiriboz) + baz</text>
</svg></div>
<div class="fig"><svg viewBox="0 0 220 200" width="220" role="img" aria-label="DNA merdiveni ve baz eşleşmeleri">
<g stroke="#334155" stroke-width="4"><line x1="40" y1="10" x2="40" y2="190"/><line x1="180" y1="10" x2="180" y2="190"/></g>
<g stroke="#fff" stroke-width="1">
<rect x="42" y="22" width="68" height="20" fill="#ef4444"/><rect x="110" y="22" width="68" height="20" fill="#3b82f6"/>
<rect x="42" y="64" width="68" height="20" fill="#22c55e"/><rect x="110" y="64" width="68" height="20" fill="#eab308"/>
<rect x="42" y="106" width="68" height="20" fill="#3b82f6"/><rect x="110" y="106" width="68" height="20" fill="#ef4444"/>
<rect x="42" y="148" width="68" height="20" fill="#eab308"/><rect x="110" y="148" width="68" height="20" fill="#22c55e"/></g>
<g font-size="11" fill="#fff" font-weight="bold" text-anchor="middle"><text x="76" y="36">Adenin</text><text x="144" y="36">Timin</text><text x="76" y="78">Guanin</text><text x="144" y="78">Sitozin</text><text x="76" y="120">Timin</text><text x="144" y="120">Adenin</text><text x="76" y="162">Sitozin</text><text x="144" y="162">Guanin</text></g>
</svg><figcaption>Adenin–Timin, Guanin–Sitozin karşılıklı eşleşir.</figcaption></div>
</div>
<ul>
<li>DNA, <b>nükleotit</b> adı verilen birimlerden oluşur. Nükleotitte <b>fosfat</b>, <b>şeker (deoksiriboz)</b> ve <b>organik baz</b> bulunur. Dört çeşit baz vardır: Adenin (A), Timin (T), Guanin (G), Sitozin (C).</li>
<li>Nükleotitler bazlarına göre adlandırılır (adenin nükleotit, timin nükleotit…). DNA’daki nükleotit sayısı = fosfat sayısı = şeker sayısı = baz sayısı.</li>
<li>DNA, sarmal merdivene benzeyen <b>çift iplikli</b> bir moleküldür (Watson ve Crick). Karşılıklı iplikte adenin daima timinle, guanin daima sitozinle eşleşir. Bu nedenle bir DNA’da <b>adenin sayısı = timin sayısı</b>, <b>guanin sayısı = sitozin sayısı</b>dır.</li>
</ul>
<div class="key"><b>Hiyerarşi (büyükten küçüğe):</b> Hücre → Çekirdek → Kromozom → DNA → Gen → Nükleotit<br>Kromozom: DNA’nın proteinlerle paketlenmiş hâli. Gen: Bir özelliğin bilgisini taşıyan DNA bölümü. Bir DNA’da çok sayıda gen bulunur.</div>

<h3>2. DNA’nın Kendini Eşlemesi</h3>
<div class="fig"><svg viewBox="0 -4 470 154" width="470" role="img" aria-label="DNA eşlenmesi">
<g stroke-width="5"><line x1="20" y1="20" x2="20" y2="130" stroke="#1d4ed8"/><line x1="60" y1="20" x2="60" y2="130" stroke="#1d4ed8"/>
<line x1="170" y1="20" x2="190" y2="130" stroke="#1d4ed8"/><line x1="240" y1="20" x2="220" y2="130" stroke="#1d4ed8"/>
<line x1="330" y1="20" x2="330" y2="130" stroke="#1d4ed8"/><line x1="365" y1="20" x2="365" y2="130" stroke="#f97316"/>
<line x1="410" y1="20" x2="410" y2="130" stroke="#f97316"/><line x1="445" y1="20" x2="445" y2="130" stroke="#1d4ed8"/></g>
<g stroke="#94a3b8" stroke-width="2"><line x1="20" y1="45" x2="60" y2="45"/><line x1="20" y1="75" x2="60" y2="75"/><line x1="20" y1="105" x2="60" y2="105"/><line x1="330" y1="45" x2="365" y2="45"/><line x1="330" y1="75" x2="365" y2="75"/><line x1="330" y1="105" x2="365" y2="105"/><line x1="410" y1="45" x2="445" y2="45"/><line x1="410" y1="75" x2="445" y2="75"/><line x1="410" y1="105" x2="445" y2="105"/></g>
<g font-size="22" fill="#64748b"><text x="85" y="82">→</text><text x="268" y="82">→</text></g>
<g font-size="11" text-anchor="middle"><text x="40" y="146">Ana DNA</text><text x="205" y="146">İplikler ayrılır</text><text x="388" y="146">İki yeni DNA</text></g><g font-size="10" text-anchor="middle"><text x="388" y="12">mavi: eski iplik · turuncu: yeni iplik</text></g>
</svg></div>
<ul>
<li>Hücre bölünmeden önce DNA kendini eşler. Zayıf bağlar çözülür, iplikler ayrılır; her eski ipliğin karşısına uygun nükleotitler (adenin karşısına timin, guanin karşısına sitozin) yerleşir.</li>
<li>Oluşan iki DNA birbirinin ve ana DNA’nın <b>aynısıdır</b>; her birinde bir eski, bir yeni iplik bulunur. Eşlenme için nükleotit ve enerji gerekir.</li>
<li>Bir DNA art arda n kez eşlenirse 2ⁿ DNA oluşur (3 kez → 8 DNA).</li>
</ul>

<h3>3. Kalıtım</h3>
<ul>
<li><b>Kalıtım:</b> Özelliklerin anne–babadan yavrulara aktarılması. Kalıtım biliminin kurucusu <b>Mendel</b>’dir (bezelye deneyleri).</li>
<li><b>Baskın gen</b> büyük harfle (M), <b>çekinik gen</b> küçük harfle (m) gösterilir. Çekinik özellik yalnızca <b>mm</b> genotipinde görülür.</li>
<li><b>Homozigot (saf döl):</b> MM veya mm. <b>Heterozigot (melez):</b> Mm. <b>Genotip:</b> gen yapısı; <b>fenotip:</b> dış görünüş.</li>
</ul>
<div class="two">
<table class="rt"><tr><th>Mm × Mm</th><th>M</th><th>m</th></tr><tr><th>M</th><td>MM</td><td>Mm</td></tr><tr><th>m</th><td>Mm</td><td>mm</td></tr></table>
<div class="note">Mm × Mm → fenotip: {{3|4}} baskın, {{1|4}} çekinik · genotip: 1 MM : 2 Mm : 1 mm<br>Mm × mm → {{1|2}} baskın (Mm), {{1|2}} çekinik (mm)<br>İki baskın fenotipli bireyden çekinik yavru doğduysa ikisi de <b>heterozigottur</b>.</div>
</div>
<p><b>Soyağacı:</b> Kare erkek, daire dişi; içi dolu şekil özelliği gösteren bireydir. <b>Akraba evliliği</b>nde aynı çekinik zararlı geni taşıma olasılığı yüksek olduğundan kalıtsal hastalıkların görülme olasılığı artar.</p>

<h3>4. Mutasyon, Modifikasyon, Adaptasyon</h3>
<table class="rt"><tr><th>Mutasyon</th><th>Modifikasyon</th></tr>
<tr><td>DNA’nın yapısında meydana gelen <b>kalıcı</b> değişiklik. Radyasyon, bazı kimyasallar, X ışınları, aşırı sıcaklık neden olabilir.</td><td>Çevre etkisiyle genlerin işleyişinde oluşan, kalıtsal <b>olmayan</b> değişiklik. DNA değişmez.</td></tr>
<tr><td>Üreme hücrelerinde olursa yavrulara aktarılır; vücut hücresinde olursa aktarılmaz. Çoğu zararlıdır.</td><td>Yavrulara aktarılmaz.</td></tr>
<tr><td>Örnek: Albinizm, Down sendromu, orak hücre anemisi, beş parmaklı yerine altı parmaklı doğma</td><td>Örnek: Ortanca çiçeğinin toprağa göre renk değiştirmesi, Himalaya tavşanının soğukta siyah kıl çıkarması, sporcunun kaslarının gelişmesi, güneşte bronzlaşma</td></tr></table>
<ul>
<li><b>Adaptasyon:</b> Canlının yaşadığı ortamda hayatta kalma ve üreme şansını artıran <b>kalıtsal</b> özellikler (çöl tilkisinin büyük kulakları, kutup ayısının kalın yağ tabakası, kaktüsün diken şeklindeki yaprakları).</li>
<li><b>Doğal seçilim:</b> Ortama uygun özelliklere sahip bireyler daha çok hayatta kalır ve ürer; bu özellikler sonraki nesillerde yaygınlaşır. Canlı, ortama uymak için kendi isteğiyle değişmez; ortamda zaten var olan kalıtsal çeşitlilik seçilir.</li>
</ul>

<h3>5. Biyoteknoloji</h3>
<ul>
<li><b>Genetik mühendisliği:</b> Bir canlıdan alınan genin başka bir canlıya aktarılması. Örnek: İnsan insülin geninin bakteriye aktarılıp insülin üretilmesi; zararlılara dayanıklı (GDO’lu) bitkiler.</li>
<li><b>Klonlama:</b> Bir canlının genetik kopyasını oluşturma (Dolly koyunu). Klon, çekirdeği alınan canlının kalıtsal özelliklerini taşır.</li>
<li><b>Gen tedavisi:</b> Hatalı genin yerine sağlıklı genin aktarılması. Diğer uygulamalar: aşı ve ilaç üretimi, DNA parmak izi ile suçlu ve akrabalık tespiti, ıslah çalışmaları.</li>
<li>Tartışılan yönleri: GDO’ların insan sağlığı ve doğal dengeye etkileri, biyolojik çeşitliliğin azalması, etik sorunlar.</li>
</ul>
`,
qs: [
{ q: `<p>Bir DNA molekülünün yapısında toplam 1200 nükleotit bulunmaktadır. Bu DNA’daki timin bazı taşıyan nükleotitlerin sayısı 250’dir.</p><p>Buna göre bu DNA molekülü ile ilgili aşağıdakilerden hangisi <b>yanlıştır</b>?</p>`,
  c: [`Yapısında 250 tane adenin bazı bulunur.`, `Guanin bazı taşıyan nükleotit sayısı 350’dir.`, `Yapısında toplam 1200 tane fosfat bulunur.`, `Sitozin bazı sayısı timin bazı sayısına eşittir.`], a: "D",
  s: `<p>DNA’da adenin her zaman timinle eşleşir → adenin sayısı = timin sayısı = 250. Bu iki baz toplam 500 nükleotit eder.</p><p>Kalan 1200 − 500 = 700 nükleotit guanin ve sitozindir; bunlar da eşit sayıda olduğundan guanin = sitozin = 350. Her nükleotitte bir fosfat bulunduğundan fosfat sayısı 1200’dür.</p><p>Sitozin (350) timine (250) eşit değildir; yanlış ifade D’dir. Cevap <b>D</b>.</p>` },
{ q: `<p>Şekilde bir hücrenin çekirdeğinden başlayarak kalıtım materyalinin yapısı büyükten küçüğe doğru K, L, M ve N ile gösterilmiştir.</p>
<svg viewBox="0 0 500 140" width="480" role="img" aria-label="Kromozom DNA gen nükleotit">
<circle cx="45" cy="65" r="38" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/><g stroke="#7c3aed" stroke-width="3" fill="none"><path d="M30,50 Q45,65 60,80"/><path d="M60,50 Q45,65 30,80"/><path d="M38,40 L48,52"/></g>
<text x="45" y="125" font-size="11" text-anchor="middle">Çekirdek</text>
<g stroke="#7c3aed" stroke-width="9" stroke-linecap="round"><line x1="120" y1="35" x2="150" y2="95"/><line x1="150" y1="35" x2="120" y2="95"/></g>
<text x="135" y="125" font-size="14" font-weight="bold" text-anchor="middle">K</text>
<path d="M200,30 C215,50 235,50 250,30 S285,10 300,30 S335,50 350,30" fill="none" stroke="#2563eb" stroke-width="3" transform="translate(0,35)"/>
<path d="M200,30 C215,10 235,10 250,30 S285,50 300,30 S335,10 350,30" fill="none" stroke="#2563eb" stroke-width="3" transform="translate(0,35)"/>
<rect x="246" y="38" width="58" height="54" fill="none" stroke="#16a34a" stroke-width="2" stroke-dasharray="4 3"/>
<text x="275" y="125" font-size="14" font-weight="bold" text-anchor="middle">L</text><text x="275" y="33" font-size="13" font-weight="bold" fill="#16a34a" text-anchor="middle">M</text>
<circle cx="405" cy="65" r="12" fill="#fca5a5" stroke="#b91c1c"/><polygon points="438,48 456,60 450,82 426,82 420,60" fill="#fde68a" stroke="#a16207"/><rect x="462" y="52" width="28" height="26" fill="#93c5fd" stroke="#1d4ed8"/>
<line x1="417" y1="65" x2="421" y2="65" stroke="#333" stroke-width="2"/><line x1="456" y1="65" x2="462" y2="65" stroke="#333" stroke-width="2"/>
<text x="450" y="125" font-size="14" font-weight="bold" text-anchor="middle">N</text>
</svg>
<p>Buna göre aşağıdakilerden hangisi <b>yanlıştır</b>?</p>`,
  c: [`K, L’nin proteinlerle birlikte paketlenmesiyle oluşan kromozomdur.`, `M, belirli bir özelliğin ortaya çıkmasını sağlayan bilgiyi taşıyan gendir.`, `N, yapısında fosfat, şeker ve organik baz bulunduran nükleotittir.`, `Bir L molekülünde yalnızca bir tane M bulunur.`], a: "D",
  s: `<p>K: kromozom (DNA + protein, paketlenmiş yapı) ✓. L: çift iplikli DNA. M: DNA’nın belirli bir bölümü olan <b>gen</b> ✓. N: DNA’nın yapı birimi olan <b>nükleotit</b> ✓.</p><p>Bir DNA molekülünde <b>çok sayıda gen</b> bulunur; bu nedenle “bir L’de yalnızca bir M bulunur” ifadesi yanlıştır. Cevap <b>D</b>.</p>` },
{ q: `<p>Bezelyelerde tohum şekli bakımından yuvarlak tohum geni (Y), buruşuk tohum genine (y) baskındır. Genotipi Yy olan iki bezelye çaprazlanıyor ve 800 tohum elde ediliyor.</p><p>Elde edilen tohumlarla ilgili aşağıdakilerden hangisi <b>beklenir</b>?</p>`,
  c: [`Yaklaşık 200 tohumun buruşuk olması`, `Yuvarlak tohumların hepsinin heterozigot olması`, `Yaklaşık 400 tohumun homozigot yuvarlak olması`, `Buruşuk tohumların genotipinin Yy olması`], a: "A",
  s: `<p>Yy × Yy çaprazlamasında olasılıklar: {{1|4}} YY, {{2|4}} Yy, {{1|4}} yy.</p><p>800 tohumda: YY ≈ 200 (homozigot yuvarlak), Yy ≈ 400 (heterozigot yuvarlak), yy ≈ 200 (buruşuk).</p><p>B ✗: Yuvarlakların bir kısmı YY’dir. C ✗: Homozigot yuvarlak ≈ 200’dür. D ✗: Çekinik özellik yalnızca yy genotipinde görülür. Doğru beklenti yaklaşık 200 buruşuk tohumdur. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki soyağacında çekinik bir genle aktarılan bir özelliğin bir ailedeki dağılımı gösterilmiştir. Kare erkek bireyleri, daire dişi bireyleri; içi dolu şekiller bu özelliği gösteren bireyleri temsil etmektedir.</p>
<svg viewBox="0 0 360 230" width="340" role="img" aria-label="Soyağacı">
<g stroke="#333" stroke-width="2" fill="none"><line x1="95" y1="35" x2="175" y2="35"/><line x1="135" y1="35" x2="135" y2="70"/><line x1="85" y1="70" x2="185" y2="70"/><line x1="85" y1="70" x2="85" y2="95"/><line x1="185" y1="70" x2="185" y2="95"/>
<line x1="200" y1="110" x2="265" y2="110"/><line x1="232" y1="110" x2="232" y2="150"/><line x1="190" y1="150" x2="275" y2="150"/><line x1="190" y1="150" x2="190" y2="170"/><line x1="275" y1="150" x2="275" y2="170"/></g>
<rect x="65" y="20" width="30" height="30" fill="#fff" stroke="#333" stroke-width="2"/><circle cx="190" cy="35" r="15" fill="#fff" stroke="#333" stroke-width="2"/>
<circle cx="85" cy="110" r="15" fill="#334155" stroke="#333" stroke-width="2"/><rect x="170" y="95" width="30" height="30" fill="#fff" stroke="#333" stroke-width="2"/><circle cx="280" cy="110" r="15" fill="#334155" stroke="#333" stroke-width="2"/>
<rect x="175" y="170" width="30" height="30" fill="#fff" stroke="#333" stroke-width="2"/><circle cx="275" cy="185" r="15" fill="#334155" stroke="#333" stroke-width="2"/>
<g font-size="13" font-weight="bold" text-anchor="middle"><text x="80" y="64">1</text><text x="190" y="64">2</text><text x="85" y="142">3</text><text x="185" y="142">4</text><text x="280" y="142">5</text><text x="190" y="218">6</text><text x="275" y="218">7</text></g>
</svg>
<p>Buna göre numaralandırılmış bireylerden hangilerinin bu özellik bakımından <b>kesinlikle heterozigot</b> olduğu söylenebilir?</p>`,
  c: [`1 ve 2`, `1, 2 ve 4`, `4 ve 6`, `1, 2, 4 ve 6`], a: "D",
  s: `<p>Özellik çekinik olduğundan içi dolu bireyler (3, 5, 7) <b>çekinik homozigottur</b> (mm).</p><p>1 ve 2 özelliği göstermediği hâlde kızları 3 özelliği gösteriyor → ikisi de birer m vermiştir → <b>Mm</b>. 4 özelliği göstermiyor, kızı 7 ise gösteriyor → 4 de m taşır → <b>Mm</b>. 6 özelliği göstermiyor ama annesi 5 (mm) ona mutlaka m vermiştir → <b>Mm</b>.</p><p>Kesin heterozigot olanlar: 1, 2, 4 ve 6. Cevap <b>D</b>.</p>` },
{ q: `<p>Bir genetik danışmanlık merkezinde, kuzen evliliği yapmayı düşünen bir çifte “Akraba evliliklerinde kalıtsal hastalıkların çocuklarda görülme olasılığı artar.” bilgisi veriliyor.</p><p>Bu bilginin bilimsel açıklaması aşağıdakilerden hangisidir?</p>`,
  c: [`Akraba bireylerin aynı çekinik ve zararlı geni taşıma olasılığı yüksek olduğundan bu genlerin çocukta bir araya gelme olasılığı artar.`, `Akraba evliliklerinde anne ve babanın kromozom sayıları birbirinden farklı olur.`, `Akraba evliliklerinde baskın genler etkisini kaybeder.`, `Akraba evliliği yapan bireylerin üreme hücrelerinde mutlaka mutasyon oluşur.`], a: "A",
  s: `<p>Akrabalar ortak atalardan gelen genleri taşıdığından, aynı <b>çekinik zararlı</b> geni taşıma olasılıkları akraba olmayanlara göre yüksektir. Her ikisi de bu geni (Mm) taşıyorsa çocuklarının mm olma olasılığı {{1|4}}’tür ve hastalık ortaya çıkar.</p><p>B ✗: Kromozom sayısı türe özgüdür, değişmez. C ✗: Baskınlık ilişkisi değişmez. D ✗: Akraba evliliği mutasyona neden olmaz. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıda canlılarda görülen bazı değişiklikler verilmiştir.</p><p>I. Ortanca bitkisinin çiçeklerinin toprağın asitliğine göre pembe ya da mavi açması<br>II. Radyasyona maruz kalan bir canlının üreme hücrelerinde oluşan değişiklik nedeniyle yavrusunun albino doğması<br>III. Düzenli spor yapan bir kişinin kaslarının gelişmesi<br>IV. Bir bireyin hücrelerinde 46 yerine 47 kromozom bulunması (Down sendromu)<br>V. Himalaya tavşanının soğuk ortamda kulak ve burun uçlarındaki kıllarının siyah çıkması</p><p>Bu değişikliklerden hangileri <b>mutasyona</b> örnektir?</p>`,
  c: [`I ve III`, `II ve IV`, `II, III ve V`, `I, IV ve V`], a: "B",
  s: `<p><b>Mutasyon</b>, DNA’nın yapısında veya kromozom sayısında oluşan kalıcı değişikliktir. II (radyasyonun üreme hücresinde oluşturduğu değişiklik) ve IV (kromozom sayısının değişmesi) mutasyondur.</p><p>I, III ve V’te DNA değişmemiş, çevre koşulları (toprak asitliği, egzersiz, sıcaklık) genlerin işleyişini etkilemiştir; bunlar <b>modifikasyon</b>dur ve yavrulara aktarılmaz. Cevap <b>B</b>.</p>` },
{ q: `<p>Tabloda iki tilki türünün yaşadığı ortamlar ve kulak büyüklükleri verilmiştir.</p>
<table class="rt"><tr><th>Tür</th><th>Yaşadığı ortam</th><th>Kulak büyüklüğü</th></tr><tr><td>Çöl tilkisi</td><td>Sıcak çöller</td><td>Çok büyük</td></tr><tr><td>Kutup tilkisi</td><td>Soğuk kutup bölgeleri</td><td>Küçük</td></tr></table>
<p><b>Bilgi:</b> Kulaklar ince ve damarlıdır; kulak yüzeyi büyüdükçe vücuttan dışarıya verilen ısı miktarı artar.</p><p>Bu bilgilere göre aşağıdakilerden hangisi <b>söylenemez</b>?</p>`,
  c: [`Kulak büyüklüğü, canlıların yaşadıkları ortamın sıcaklığına uygun bir adaptasyondur.`, `Kutup tilkisinin küçük kulakları vücut ısısının korunmasına yardımcı olur.`, `Bir çöl tilkisi kutup bölgesine götürülürse kulakları zamanla küçülür ve ortama uyum sağlar.`, `Kulak büyüklüğündeki bu farklılık kalıtsaldır ve yavrulara aktarılır.`], a: "C",
  s: `<p>Büyük kulaklar ısı atmayı kolaylaştırarak sıcak çölde, küçük kulaklar ısı kaybını azaltarak soğuk kutupta hayatta kalmayı kolaylaştırır. Bu özellikler <b>adaptasyon</b>dur ve <b>kalıtsaldır</b> (A, B, D söylenebilir).</p><p>Adaptasyonlar bir bireyin yaşamı süresince ortam değişince oluşmaz; uzun süreçte doğal seçilimle şekillenir. Bu nedenle kutba götürülen çöl tilkisinin kulaklarının küçüleceği söylenemez. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıda bakterilere insülin ürettirmek için yapılan çalışmanın basamakları verilmiştir.</p>
<svg viewBox="0 0 500 120" width="480" role="img" aria-label="İnsülin üretimi basamakları">
<rect x="5" y="20" width="140" height="70" rx="8" fill="#fef3c7" stroke="#a16207"/><rect x="180" y="20" width="140" height="70" rx="8" fill="#dcfce7" stroke="#15803d"/><rect x="355" y="20" width="140" height="70" rx="8" fill="#dbeafe" stroke="#1d4ed8"/>
<g font-size="22" fill="#64748b"><text x="152" y="62">→</text><text x="327" y="62">→</text></g>
<g font-size="11" text-anchor="middle"><text x="75" y="42" font-weight="bold">1. basamak</text><text x="75" y="60">İnsan hücresinden</text><text x="75" y="75">insülin geni kesilir.</text>
<text x="250" y="42" font-weight="bold">2. basamak</text><text x="250" y="60">Gen, bakterinin</text><text x="250" y="75">DNA’sına eklenir.</text>
<text x="425" y="42" font-weight="bold">3. basamak</text><text x="425" y="60">Bakteriler çoğalır</text><text x="425" y="75">ve insülin üretir.</text></g>
</svg>
<p>Bu çalışmayla ilgili,</p><p>I. Bir genetik mühendisliği uygulamasıdır.<br>II. Bakterilerin ürettiği insülin, insan vücudunda üretilen insülinle aynı yapıdadır.<br>III. Bu bakterilerin çoğalmasıyla oluşan yeni bakteriler insülin genini taşımaz.</p><p>yargılarından hangileri doğrudur?</p>`,
  c: [`Yalnız I`, `I ve II`, `I ve III`, `II ve III`], a: "B",
  s: `<p>Bir canlıdan alınan genin başka bir canlıya aktarılması <b>genetik mühendisliği</b> uygulamasıdır (I ✓).</p><p>Bakteri, insan insülin genindeki bilgiyi kullanarak üretim yaptığı için ürün insan insülini ile aynı yapıdadır (II ✓). Gen bakterinin DNA’sına eklendiği için bakteri bölünürken DNA’sını eşler; yeni bakteriler de geni taşır ve insülin üretmeye devam eder (III ✗). Cevap <b>B</b>.</p>` },
{ q: `<p>İngiltere’de sanayi devriminden önce ağaç gövdeleri açık renkli likenlerle kaplıydı. Fabrikalardan çıkan is, ağaç gövdelerini kararttı. Bir bölgedeki kelebek türünde açık ve koyu renkli bireylerin oranları aşağıdaki grafikte verilmiştir.</p>
<svg viewBox="0 0 380 190" width="360" role="img" aria-label="Kelebek oranları grafiği">
<line x1="50" y1="150" x2="370" y2="150" stroke="#333"/><line x1="50" y1="15" x2="50" y2="150" stroke="#333"/>
<g font-size="10" text-anchor="end"><text x="45" y="153">0</text><text x="45" y="98">40</text><text x="45" y="43">80</text></g>
<g stroke="#e5e7eb"><line x1="50" y1="95" x2="370" y2="95"/><line x1="50" y1="40" x2="370" y2="40"/></g>
<rect x="80" y="26" width="40" height="124" fill="#e5e7eb" stroke="#64748b"/><rect x="125" y="137" width="40" height="13" fill="#334155"/>
<rect x="240" y="123" width="40" height="27" fill="#e5e7eb" stroke="#64748b"/><rect x="285" y="40" width="40" height="110" fill="#334155"/>
<g font-size="10" text-anchor="middle"><text x="100" y="20">%90</text><text x="145" y="131">%10</text><text x="260" y="117">%20</text><text x="305" y="34">%80</text>
<text x="122" y="166">Sanayi devriminden önce</text><text x="282" y="166">Sanayi devriminden sonra</text></g>
<rect x="60" y="174" width="12" height="10" fill="#e5e7eb" stroke="#64748b"/><text x="76" y="183" font-size="10">Açık renkli</text><rect x="150" y="174" width="12" height="10" fill="#334155"/><text x="166" y="183" font-size="10">Koyu renkli</text>
<text x="14" y="85" font-size="10" transform="rotate(-90 14 85)" text-anchor="middle">Oran (%)</text>
</svg>
<p>Bu durumla ilgili aşağıdaki ifadelerden hangisi <b>yanlıştır</b>?</p>`,
  c: [`Kararmış ağaçlar üzerinde koyu renkli kelebekler kuşlar tarafından daha zor fark edilmiştir.`, `Ortama uygun özellik taşıyan bireylerin hayatta kalma ve üreme şansı artmıştır.`, `Açık renkli kelebekler isli ortama uyum sağlamak için kanatlarının rengini koyulaştırmıştır.`, `Kanat rengi kalıtsal bir özellik olduğu için koyu renk yavrulara aktarılarak yaygınlaşmıştır.`], a: "C",
  s: `<p>Ağaçlar karardıktan sonra açık renkli kelebekler kolayca görülüp avlanmış, koyu renkliler ise kamufle olup daha çok hayatta kalmış ve üremiştir. Böylece koyu renk geni sonraki nesillerde yaygınlaşmıştır. Bu olay <b>doğal seçilim</b>dir (A, B, D doğru).</p><p>Canlılar ortama uymak için kendi özelliklerini isteyerek değiştiremez; ortamda <b>zaten var olan</b> koyu renkli bireyler seçilmiştir. Cevap <b>C</b>.</p>` },
{ q: `<p>Bir hücredeki tek bir DNA molekülü art arda <b>3 kez</b> kendini eşlemiştir.</p><p>Eşlenme sonunda oluşan DNA moleküllerinden kaç tanesi, ilk DNA molekülüne ait ipliklerden birini taşır?</p>`,
  c: [`1`, `2`, `4`, `8`], a: "B",
  s: `<p>Her eşlenmede DNA sayısı iki katına çıkar: 1 → 2 → 4 → 8 DNA oluşur.</p><p>Eşlenmede her yeni DNA, bir eski ve bir yeni iplikten oluşur. İlk DNA’nın yalnızca <b>iki ipliği</b> vardır; bu iki iplik hiçbir zaman parçalanmaz, her biri ayrı bir DNA’ya geçer. Bu yüzden kaç kez eşlenirse eşlensin ilk ipliklerden birini taşıyan DNA sayısı <b>2</b>’dir. Cevap <b>B</b>.</p>` },
{ q: `<p>Bir öğrenci DNA modeli yapmak için renkli boncuklar kullanmış ve her rengi bir baza karşılık getirmiştir: <b style="color:#dc2626">kırmızı</b> = adenin, <b style="color:#2563eb">mavi</b> = timin, <b style="color:#16a34a">yeşil</b> = guanin, <b style="color:#ca8a04">sarı</b> = sitozin.</p>
<svg viewBox="0 0 260 250" width="240" role="img" aria-label="Boncuklu DNA modeli">
<g stroke="#334155" stroke-width="4"><line x1="50" y1="10" x2="50" y2="240"/><line x1="210" y1="10" x2="210" y2="240"/></g>
<g stroke="#333">
<circle cx="95" cy="30" r="14" fill="#ef4444"/><circle cx="165" cy="30" r="14" fill="#3b82f6"/>
<circle cx="95" cy="68" r="14" fill="#22c55e"/><circle cx="165" cy="68" r="14" fill="#eab308"/>
<circle cx="95" cy="106" r="14" fill="#3b82f6"/><circle cx="165" cy="106" r="14" fill="#ef4444"/>
<circle cx="95" cy="144" r="14" fill="#ef4444"/><circle cx="165" cy="144" r="14" fill="#22c55e"/>
<circle cx="95" cy="182" r="14" fill="#eab308"/><circle cx="165" cy="182" r="14" fill="#22c55e"/>
<circle cx="95" cy="220" r="14" fill="#3b82f6"/><circle cx="165" cy="220" r="14" fill="#ef4444"/></g>
<g stroke="#94a3b8" stroke-width="2"><line x1="50" y1="30" x2="81" y2="30"/><line x1="179" y1="30" x2="210" y2="30"/><line x1="50" y1="68" x2="81" y2="68"/><line x1="179" y1="68" x2="210" y2="68"/><line x1="50" y1="106" x2="81" y2="106"/><line x1="179" y1="106" x2="210" y2="106"/><line x1="50" y1="144" x2="81" y2="144"/><line x1="179" y1="144" x2="210" y2="144"/><line x1="50" y1="182" x2="81" y2="182"/><line x1="179" y1="182" x2="210" y2="182"/><line x1="50" y1="220" x2="81" y2="220"/><line x1="179" y1="220" x2="210" y2="220"/></g>
<g font-size="11" text-anchor="end"><text x="40" y="34">1</text><text x="40" y="72">2</text><text x="40" y="110">3</text><text x="40" y="148">4</text><text x="40" y="186">5</text><text x="40" y="224">6</text></g>
</svg>
<p>Öğretmen, modeldeki sol ipliğin doğru olduğunu ancak sağ iplikte bir boncuğun yanlış yerleştirildiğini söylemiştir.</p><p>Öğrenci hatayı düzelttiğinde modeldeki toplam <b>guanin</b> ve <b>timin</b> bazı sayıları kaç olur?</p>`,
  c: [`Guanin: 2, Timin: 4`, `Guanin: 3, Timin: 3`, `Guanin: 2, Timin: 3`, `Guanin: 1, Timin: 4`], a: "A",
  s: `<p>Eşleşmeler: adenin (kırmızı) – timin (mavi), guanin (yeşil) – sitozin (sarı). 4. sırada kırmızının (adenin) karşısına yeşil (guanin) konmuştur; doğrusu <b>mavi (timin)</b> olmalıdır.</p><p>Düzeltilmiş model: 1. kırmızı–mavi, 2. yeşil–sarı, 3. mavi–kırmızı, 4. kırmızı–mavi, 5. sarı–yeşil, 6. mavi–kırmızı.</p><p>Guanin (yeşil): 2. sıra sol + 5. sıra sağ = <b>2</b>. Timin (mavi): 1. sağ + 3. sol + 4. sağ + 6. sol = <b>4</b>. (Düzeltmeden önce 3 guanin, 3 timin vardı.) Cevap <b>A</b>.</p>` }
]
});
