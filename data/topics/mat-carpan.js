LGS.add({
id: "mat-carpan",
summary: `
<h3>1. Çarpan ve Kat</h3>
<p>a ve b doğal sayılar olmak üzere a = b · k ise <b>b, a’nın çarpanı (böleni)</b>; <b>a, b’nin katıdır</b>. Örneğin 24 = 4 · 6 → 4 ve 6, 24’ün çarpanlarıdır.</p>
<div class="two">
<div class="fig"><svg viewBox="0 0 300 190" width="300" role="img" aria-label="12'nin çarpanlarını gösteren dikdörtgen modelleri">
<g fill="#dbeafe" stroke="#2563eb">
<rect x="10" y="20" width="240" height="20"/>
<rect x="10" y="60" width="120" height="40"/>
<rect x="160" y="60" width="80" height="60"/>
</g>
<g font-size="13"><text x="256" y="35">1 × 12</text><text x="136" y="85">2 × 6</text><text x="246" y="95">3 × 4</text></g>
<text x="10" y="160" font-size="12">12’nin çarpanları: 1, 2, 3, 4, 6, 12 (6 tane)</text>
<text x="10" y="178" font-size="12">Alanı 12 olan her dikdörtgen bir çarpan çifti verir.</text>
</svg><figcaption>Çarpanlar dikdörtgen modelleriyle bulunabilir.</figcaption></div>
<div class="fig"><svg viewBox="0 0 260 200" width="260" role="img" aria-label="60 sayısının çarpan ağacı">
<g font-size="15" text-anchor="middle">
<circle cx="130" cy="22" r="18" fill="#fde68a" stroke="#d97706"/><text x="130" y="27">60</text>
<line x1="120" y1="38" x2="80" y2="70" stroke="#999"/><line x1="140" y1="38" x2="180" y2="70" stroke="#999"/>
<circle cx="75" cy="85" r="16" fill="#fecaca" stroke="#dc2626"/><text x="75" y="90">2</text>
<circle cx="185" cy="85" r="18" fill="#fde68a" stroke="#d97706"/><text x="185" y="90">30</text>
<line x1="175" y1="101" x2="140" y2="130" stroke="#999"/><line x1="195" y1="101" x2="225" y2="130" stroke="#999"/>
<circle cx="135" cy="145" r="16" fill="#fecaca" stroke="#dc2626"/><text x="135" y="150">2</text>
<circle cx="228" cy="145" r="18" fill="#fde68a" stroke="#d97706"/><text x="228" y="150">15</text>
<text x="130" y="192" font-size="13">60 = 2 · 2 · 3 · 5 = 2² · 3 · 5</text>
</g></svg><figcaption>Çarpan ağacı (15 de 3 ve 5’e ayrılır).</figcaption></div>
</div>
<h3>2. Asal Sayılar ve Asal Çarpanlara Ayırma</h3>
<ul>
<li><b>Asal sayı:</b> 1’den büyük, yalnızca 1’e ve kendisine bölünen doğal sayı: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29… (2 tek çift asal sayıdır, 1 asal değildir.)</li>
<li>Her doğal sayı asal çarpanlarının çarpımı biçiminde <b>tek türlü</b> yazılır: 360 = 2³ · 3² · 5.</li>
<li><b>Bölme yöntemi:</b> Sayıyı en küçük asal sayıdan başlayarak 1 kalana kadar böl.</li>
</ul>
<div class="key"><b>Çarpan (bölen) sayısı:</b> n = a<sup>x</sup> · b<sup>y</sup> · c<sup>z</sup> ise pozitif bölen sayısı (x+1)(y+1)(z+1)’dir. <br>Örnek: 72 = 2³ · 3² → (3+1)(2+1) = 12 bölen. <br>Tek bölenler, 2’nin kuvveti alınmadan bulunur: 3² → 3 tek bölen; çift bölen = 12 − 3 = 9.</div>
<h3>3. EBOB ve EKOK</h3>
<div class="tbl"><table>
<tr><th></th><th>EBOB (En Büyük Ortak Bölen)</th><th>EKOK (En Küçük Ortak Kat)</th></tr>
<tr><td>Tanım</td><td>Sayıların hepsini bölen en büyük sayı</td><td>Sayıların hepsinin katı olan en küçük sayı</td></tr>
<tr><td>Asal çarpanlarla</td><td>Ortak asal çarpanların <b>en küçük</b> üslüleri çarpılır</td><td>Tüm asal çarpanların <b>en büyük</b> üslüleri çarpılır</td></tr>
<tr><td>Örnek: 24 = 2³·3, 36 = 2²·3²</td><td>2² · 3 = 12</td><td>2³ · 3² = 72</td></tr>
<tr><td>Problem ipucu</td><td>“Parçalara ayırma, en büyük, eşit paylaştırma, kesip bölme”</td><td>“Birlikte olma, yeniden aynı anda, en küçük, yan yana dizme”</td></tr>
</table></div>
<div class="note"><b>Önemli bağıntı:</b> İki sayı için a · b = EBOB(a, b) · EKOK(a, b). <br><b>Aralarında asal:</b> 1’den başka ortak böleni olmayan sayılar (EBOB = 1). Örn. 8 ve 15. Ardışık doğal sayılar her zaman aralarında asaldır; aralarında asal iki sayının EKOK’u çarpımlarıdır.</div>
<h3>4. Sık Karşılaşılan Problem Kalıpları</h3>
<ul>
<li><b>Kare fayans / parça:</b> Dikdörtgeni en büyük karelere ayır → kenar = EBOB; kare sayısı = (a/EBOB)·(b/EBOB).</li>
<li><b>En küçük kare oluşturma:</b> a×b’lik dikdörtgenleri yan yana dizerek kare → kenar = EKOK.</li>
<li><b>Birlikte yanan ışıklar, kalkan otobüsler, dişliler:</b> EKOK.</li>
<li><b>Hep aynı sayı artıyor:</b> n = EKOK·k + artan. <b>Her bölmede 1 eksik:</b> n + 1 = EKOK·k.</li>
</ul>
`,
qs: [
{ q: `<p>Bir bahçıvan 72 fidanı, her sırada eşit sayıda fidan olacak ve hiç fidan artmayacak biçimde sıralar hâlinde dikecektir. Bahçıvan her sırada <b>çift sayıda</b> fidan olmasını istemektedir (tüm fidanlar tek sıraya da dikilebilir).</p><p>Buna göre bahçıvan fidanları kaç farklı biçimde dikebilir?</p>`,
  c: [`6`, `8`, `9`, `12`], a: "C",
  s: `<p>Bir sıradaki fidan sayısı 72’nin bir çarpanı olmalı ve çift olmalıdır.</p><p>72 = 2³ · 3² → pozitif çarpan sayısı (3+1)(2+1) = 12. Tek çarpanlar 2’nin kuvveti alınmadan bulunur: 1, 3, 9 → 3 tane.</p><p>Çift çarpanlar: 12 − 3 = <b>9</b> (2, 4, 6, 8, 12, 18, 24, 36, 72). Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıda 540 sayısının çarpan ağacı verilmiştir.</p>
<svg viewBox="0 0 320 230" width="300"><g font-size="14" text-anchor="middle">
<circle cx="160" cy="20" r="17" fill="#fde68a" stroke="#d97706"/><text x="160" y="25">540</text>
<line x1="150" y1="35" x2="110" y2="62" stroke="#999"/><line x1="170" y1="35" x2="205" y2="62" stroke="#999"/>
<circle cx="105" cy="75" r="14" fill="#fecaca" stroke="#dc2626"/><text x="105" y="80">2</text>
<circle cx="210" cy="75" r="17" fill="#fde68a" stroke="#d97706"/><text x="210" y="80">K</text>
<line x1="200" y1="90" x2="165" y2="117" stroke="#999"/><line x1="220" y1="90" x2="250" y2="117" stroke="#999"/>
<circle cx="160" cy="130" r="14" fill="#fecaca" stroke="#dc2626"/><text x="160" y="135">2</text>
<circle cx="255" cy="130" r="17" fill="#fde68a" stroke="#d97706"/><text x="255" y="135">L</text>
<line x1="245" y1="145" x2="215" y2="172" stroke="#999"/><line x1="265" y1="145" x2="290" y2="172" stroke="#999"/>
<circle cx="210" cy="185" r="14" fill="#fecaca" stroke="#dc2626"/><text x="210" y="190">3</text>
<circle cx="292" cy="185" r="17" fill="#fde68a" stroke="#d97706"/><text x="292" y="190">M</text>
<text x="292" y="222" font-size="12">⋮</text>
</g></svg>
<p>540 sayısı asal çarpanlarına ayrıldığında 2<sup>a</sup> · 3<sup>b</sup> · 5<sup>c</sup> biçiminde yazılıyor.</p><p>Buna göre <b>a + b + c</b> toplamı ile <b>M</b> sayısının toplamı kaçtır?</p>`,
  c: [`45`, `48`, `49`, `51`], a: "D",
  s: `<p>540 ÷ 2 = 270 (K), 270 ÷ 2 = 135 (L), 135 ÷ 3 = 45 (M).</p><p>540 = 2² · 3³ · 5 → a = 2, b = 3, c = 1 → a + b + c = 6.</p><p>6 + M = 6 + 45 = <b>51</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Kenar uzunlukları 84 cm ve 120 cm olan dikdörtgen biçimindeki bir karton, hiç artmayacak biçimde, kenar uzunlukları santimetre cinsinden doğal sayı olan <b>en büyük</b> eş karelere kesilecektir.</p><p>Buna göre kaç kare elde edilir?</p>`,
  c: [`70`, `72`, `84`, `96`], a: "A",
  s: `<p>Karenin kenarı hem 84’ü hem 120’yi tam bölmeli ve en büyük olmalı → EBOB(84, 120).</p><p>84 = 2² · 3 · 7, 120 = 2³ · 3 · 5 → EBOB = 2² · 3 = 12 cm.</p><p>Kare sayısı = (84 ÷ 12) · (120 ÷ 12) = 7 · 10 = <b>70</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>Bir meydandaki üç dekoratif ışık sırasıyla 12 saniyede, 18 saniyede ve 30 saniyede bir yanmaktadır. Üç ışık saat 20.00’de aynı anda yanmıştır.</p><p>Buna göre ışıklar, saat 20.00’den sonra 20.30’a kadar (20.30 dâhil) <b>kaç kez daha</b> aynı anda yanar?</p>`,
  c: [`10`, `11`, `12`, `30`], a: "A",
  s: `<p>Işıklar EKOK(12, 18, 30) saniyede bir birlikte yanar. 12 = 2²·3, 18 = 2·3², 30 = 2·3·5 → EKOK = 2² · 3² · 5 = 180 s = 3 dakika.</p><p>Birlikte yanma anları: 20.03, 20.06, …, 20.30. 30 ÷ 3 = <b>10</b> kez. Cevap <b>A</b>.</p>` },
{ q: `<p>Bir oyunda her oyuncu iki kart çekiyor. Çektiği kartlardaki sayılar <b>aralarında asal</b> ise oyuncu puan kazanıyor.</p><p>Aşağıdaki oyunculardan hangisi puan kazanmıştır?</p>`,
  c: [`Ali: 14 ve 21`, `Deniz: 26 ve 39`, `Cem: 12 ve 33`, `Bora: 15 ve 28`], a: "D",
  s: `<p>Aralarında asal sayıların 1’den başka ortak böleni yoktur.</p><p>14 ve 21 → ortak bölen 7. 15 = 3·5 ve 28 = 2²·7 → ortak asal çarpan yok ✓. 12 ve 33 → 3. 26 ve 39 → 13. Cevap <b>D</b>.</p>` },
{ q: `<p>İki doğal sayının en büyük ortak böleni 6, en küçük ortak katı 90’dır. Bu sayılardan biri 18’dir.</p><p>Buna göre diğer sayı kaçtır?</p>`,
  c: [`9`, `12`, `27`, `30`], a: "D",
  s: `<p>İki sayı için a · b = EBOB · EKOK.</p><p>18 · b = 6 · 90 = 540 → b = <b>30</b>.</p><p>Kontrol: EBOB(18, 30) = 6, EKOK(18, 30) = 90 ✓. Cevap <b>D</b>.</p>` },
{ q: `<p>Bir sınıftaki öğrenciler 4’erli, 6’şarlı veya 9’arlı gruplara ayrıldığında her seferinde 1 öğrenci gruba girememektedir. Okulun kayıtlarına göre bu sınıftaki öğrenci sayısı 30 ile 50 arasındadır.</p><p>Buna göre sınıfta kaç öğrenci vardır?</p>`,
  c: [`25`, `31`, `33`, `37`], a: "D",
  s: `<p>Öğrenci sayısının 1 eksiği 4, 6 ve 9’un ortak katıdır.</p><p>EKOK(4, 6, 9) = 2² · 3² = 36. Öğrenci sayısı 36k + 1 → 37, 73, … 30 ile 50 arasında olan <b>37</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Alanı 36 birimkare olan ve kenar uzunlukları birer doğal sayı olan dikdörtgenler birim karelerle oluşturuluyor. (2 × 18 ile 18 × 2 aynı dikdörtgen sayılıyor.)</p><p>Buna göre birbirinden farklı kaç dikdörtgen oluşturulabilir?</p>`,
  c: [`4`, `5`, `9`, `10`], a: "B",
  s: `<p>36’nın çarpan çiftleri: 1×36, 2×18, 3×12, 4×9, 6×6.</p><p>Toplam <b>5</b> farklı dikdörtgen (bunlardan biri kare). Cevap <b>B</b>.</p>` },
{ q: `<p>Bir otobüs durağından A hattı otobüsleri 15 dakikada bir, B hattı otobüsleri 25 dakikada bir kalkmaktadır. İki hattın otobüsleri saat 07.00’de birlikte kalkmıştır.</p><p>Buna göre iki hattın otobüsleri bir sonraki seferde saat kaçta birlikte kalkar?</p>`,
  c: [`07.40`, `08.00`, `08.15`, `08.30`], a: "C",
  s: `<p>Birlikte kalkış aralığı EKOK(15, 25) = 3 · 5² = 75 dakika = 1 saat 15 dakika.</p><p>07.00 + 1 sa 15 dk = <b>08.15</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Bir öğretmen elindeki 100 kalem ile 76 silgiyi, her öğrenciye eşit sayıda kalem ve eşit sayıda silgi verecek biçimde öğrencilerine dağıtıyor. Dağıtım sonunda 4 kalem ve 4 silgi artıyor.</p><p>Buna göre öğretmen bu malzemeleri <b>en fazla</b> kaç öğrenciye dağıtmıştır?</p>`,
  c: [`12`, `18`, `24`, `36`], a: "C",
  s: `<p>Dağıtılan kalem 100 − 4 = 96, silgi 76 − 4 = 72. Öğrenci sayısı ikisini de tam bölmeli ve en büyük olmalı → EBOB(96, 72).</p><p>96 = 2⁵ · 3, 72 = 2³ · 3² → EBOB = 2³ · 3 = <b>24</b>.</p><p>Not: Artan sayı (4) öğrenci sayısından küçük olmalı; 4 &lt; 24 ✓. Cevap <b>C</b>.</p>` },
{ q: `<p>Bir doğal sayının asal çarpanları yalnızca 2, 3 ve 7’dir. Bu sayı 100 ile 200 arasındadır.</p><p>Buna göre bu sayı <b>en fazla</b> kaçtır?</p>`,
  c: [`126`, `147`, `168`, `189`], a: "C",
  s: `<p>Sayı 2 · 3 · 7 = 42’nin katı olmalı ve başka asal çarpanı olmamalı: 42 · k (k yalnızca 2, 3, 7’nin çarpımı).</p><p>84 (=42·2), 126 (=42·3), 168 (=42·4) → 100–200 arasında 126 ve 168. En büyüğü <b>168</b> = 2³ · 3 · 7.</p><p>147 = 3 · 7² (2 yok), 189 = 3³ · 7 (2 yok). Cevap <b>C</b>.</p>` },
{ q: `<p>Kısa kenarı 6 cm, uzun kenarı 10 cm olan dikdörtgen biçimindeki özdeş kartlar, hepsi aynı yönde olacak ve aralarında boşluk kalmayacak biçimde yan yana ve alt alta dizilerek <b>en küçük</b> kare oluşturulacaktır.</p><p>Bunun için kaç kart gerekir?</p>`,
  c: [`15`, `20`, `30`, `60`], a: "A",
  s: `<p>Karenin kenarı hem 6’nın hem 10’un katı olmalı ve en küçük olmalı → EKOK(6, 10) = 30 cm.</p><p>Bir kenarda 30 ÷ 6 = 5, diğer kenarda 30 ÷ 10 = 3 kart → 5 · 3 = <b>15</b> kart. Cevap <b>A</b>.</p>` },
{ q: `<p>a ve b birer doğal sayı olmak üzere a · b = 48 ve a &gt; b’dir.</p><p>Buna göre a − b farkı <b>en az</b> kaçtır?</p>`,
  c: [`2`, `4`, `8`, `13`], a: "A",
  s: `<p>48’in çarpan çiftleri: (48,1), (24,2), (16,3), (12,4), (8,6).</p><p>Farklar: 47, 22, 13, 8, 2. En küçük fark <b>2</b> (8 − 6). Sayılar birbirine yaklaştıkça fark küçülür. Cevap <b>A</b>.</p>` },
{ q: `<p>Birbirine geçmiş iki dişliden küçük olanında 24, büyük olanında 36 diş vardır. Dişliler döndürülmeye başlandığında küçük dişlinin işaretli dişi, büyük dişlinin işaretli dişine temas etmektedir.</p>
<svg viewBox="0 0 300 150" width="280"><g stroke="#555" stroke-width="2" fill="#e0f2fe"><circle cx="95" cy="75" r="50"/><circle cx="210" cy="75" r="65" fill="#fef3c7"/></g><circle cx="145" cy="75" r="5" fill="#dc2626"/><text x="95" y="80" text-anchor="middle" font-size="13">24 diş</text><text x="210" y="80" text-anchor="middle" font-size="13">36 diş</text></svg>
<p>Buna göre işaretli dişlerin yeniden ilk kez temas etmesi için küçük dişli kaç tur dönmelidir?</p>`,
  c: [`1`, `{{3|2}}`, `2`, `3`], a: "D",
  s: `<p>İki dişliden de geçen diş sayısı eşittir. İşaretli dişler yeniden karşılaştığında geçen diş sayısı hem 24’ün hem 36’nın katıdır → EKOK(24, 36) = 72.</p><p>Küçük dişli 72 ÷ 24 = <b>3</b> tur, büyük dişli 72 ÷ 36 = 2 tur döner. Cevap <b>D</b>.</p>` },
{ q: `<p>30’dan küçük a doğal sayıları için EBOB(a, 18) = 6 eşitliği sağlanmaktadır.</p><p>Buna göre a’nın alabileceği kaç farklı değer vardır?</p>`,
  c: [`2`, `3`, `4`, `5`], a: "B",
  s: `<p>EBOB(a, 18) = 6 ise a, 6’nın katıdır ama 18’in katı değildir (aksi hâlde EBOB 18 olurdu).</p><p>30’dan küçük 6’nın katları: 6, 12, 18, 24. 18 çıkarılır → 6, 12, 24 → <b>3</b> değer.</p><p>Kontrol: EBOB(12, 18) = 6 ✓, EBOB(24, 18) = 6 ✓. Cevap <b>B</b>.</p>` },
{ q: `<p>Bir kitapçı 48 roman, 60 hikâye ve 84 şiir kitabını kolilere yerleştirecektir. Her kolide yalnızca bir türden kitap bulunacak ve bütün kolilerde eşit sayıda kitap olacaktır.</p><p>Buna göre bu iş için <b>en az</b> kaç koli gerekir?</p>`,
  c: [`12`, `16`, `18`, `24`], a: "B",
  s: `<p>Koli sayısının en az olması için her kolideki kitap sayısı en büyük olmalı → EBOB(48, 60, 84).</p><p>48 = 2⁴·3, 60 = 2²·3·5, 84 = 2²·3·7 → EBOB = 2²·3 = 12.</p><p>Koli sayısı: 48/12 + 60/12 + 84/12 = 4 + 5 + 7 = <b>16</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Bir okulda 1’den 50’ye kadar numaralandırılmış 50 kapalı dolap vardır. 1. öğrenci bütün dolapları açıyor. 2. öğrenci numarası 2’nin katı olan dolapların, 3. öğrenci 3’ün katı olan dolapların durumunu değiştiriyor (açıksa kapatıyor, kapalıysa açıyor). Bu işlem 50. öğrenciye kadar böyle devam ediyor.</p><p>Buna göre işlem sonunda kaç dolap açık kalır?</p>`,
  c: [`5`, `7`, `10`, `25`], a: "B",
  s: `<p>Bir dolabın durumu, numarasının her çarpanı için bir kez değişir. Başta kapalı olan dolap, durumu <b>tek sayıda</b> değişirse açık kalır.</p><p>Çarpan sayısı tek olan sayılar <b>tam kare</b> sayılardır (çarpanlar çift çift eşleşir, yalnız √n tek kalır).</p><p>1–50 arası tam kareler: 1, 4, 9, 16, 25, 36, 49 → <b>7</b> dolap. Cevap <b>B</b>.</p>` },
{ q: `<p>K = 2³ · 3² · 5 ve L = 2² · 3³ · 7 sayıları veriliyor.</p><p>Buna göre K ve L sayılarının en büyük ortak böleni kaçtır?</p>`,
  c: [`6`, `12`, `36`, `72`], a: "C",
  s: `<p>EBOB için <b>ortak</b> asal çarpanların <b>en küçük</b> üslüleri alınır. Ortak asal çarpanlar 2 ve 3.</p><p>2’nin en küçük üssü 2, 3’ün en küçük üssü 2 → EBOB = 2² · 3² = <b>36</b>. (5 ve 7 ortak değildir.) Cevap <b>C</b>.</p>` },
{ q: `<p>a = 2³ · 3² ve b = 2² · 3 · 5 sayıları veriliyor.</p><p>Buna göre {{EKOK(a, b)|EBOB(a, b)}} oranı kaçtır?</p>`,
  c: [`15`, `30`, `60`, `90`], a: "B",
  s: `<p>EKOK: tüm asal çarpanların en büyük üslüleri → 2³ · 3² · 5 = 360. EBOB: ortakların en küçük üslüleri → 2² · 3 = 12.</p><p>360 ÷ 12 = <b>30</b> (= 2 · 3 · 5). Cevap <b>B</b>.</p>` },
{ q: `<p>Bir beden eğitimi öğretmeni 60 öğrenciyi, her grupta eşit sayıda öğrenci olacak ve hiç öğrenci açıkta kalmayacak biçimde gruplara ayıracaktır. Her grupta <b>en az 3, en fazla 15</b> öğrenci olacaktır.</p><p>Buna göre bir gruptaki öğrenci sayısı kaç farklı değer alabilir?</p>`,
  c: [`5`, `6`, `7`, `8`], a: "C",
  s: `<p>Gruptaki öğrenci sayısı 60’ın çarpanı olmalı: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60.</p><p>3 ile 15 arasındakiler: 3, 4, 5, 6, 10, 12, 15 → <b>7</b> farklı değer. Cevap <b>C</b>.</p>` },
{ q: `<p>Bir doğal sayı 6’ya bölündüğünde 5, 8’e bölündüğünde 7, 10’a bölündüğünde 9 kalanını vermektedir.</p><p>Buna göre bu koşulu sağlayan <b>en küçük</b> doğal sayı kaçtır?</p>`,
  c: [`119`, `121`, `239`, `241`], a: "A",
  s: `<p>Her bölmede kalan, bölenden 1 eksik. O hâlde sayının 1 fazlası 6, 8 ve 10’a tam bölünür.</p><p>EKOK(6, 8, 10) = 2³ · 3 · 5 = 120 → sayı + 1 = 120 → sayı = <b>119</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>Bir öğrenci, bir sayının çarpanlarını bulmak için birim karelerle bu sayıya eşit alanlı bütün dikdörtgenleri oluşturuyor. Öğrenci <b>5 farklı</b> dikdörtgen oluşturuyor (a × b ile b × a aynı sayılıyor) ve bunlardan <b>biri kare</b> oluyor.</p><p>Buna göre öğrencinin çarpanlarını bulduğu sayı aşağıdakilerden hangisi olabilir?</p>`,
  c: [`36`, `48`, `64`, `81`], a: "A",
  s: `<p>Dikdörtgenlerden biri kare ise sayı tam karedir; 5 dikdörtgen varsa çarpan sayısı 2 · 5 − 1 = 9 olmalıdır.</p><p>36 = 2²·3² → 3·3 = 9 çarpan ✓ (1×36, 2×18, 3×12, 4×9, 6×6). 64 = 2⁶ → 7 çarpan (4 dikdörtgen). 81 = 3⁴ → 5 çarpan (3 dikdörtgen). 48 tam kare değil. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıda aralarında asal sayılarla ilgili bazı ifadeler verilmiştir.</p><p>I. Ardışık iki doğal sayı her zaman aralarında asaldır.<br>II. Birbirinden farklı iki asal sayı aralarında asaldır.<br>III. İki çift sayı aralarında asal olabilir.</p><p>Bu ifadelerden hangileri <b>doğrudur</b>?</p>`,
  c: [`Yalnız I`, `I ve II`, `II ve III`, `I, II ve III`], a: "B",
  s: `<p>I ✓: Ardışık iki sayının ortak böleni ikisinin farkını (1’i) da böler; bu yüzden EBOB = 1.</p><p>II ✓: Farklı iki asalın tek ortak böleni 1’dir.</p><p>III ✗: İki çift sayının ikisi de 2’ye bölünür; EBOB en az 2 olur. Cevap <b>B</b>.</p>` }
]
});
