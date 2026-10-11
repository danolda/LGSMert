LGS.add({
id: "mat-uslu",
summary: `
<h3>1. Üslü İfade Nedir?</h3>
<p>aⁿ ifadesinde a <b>taban</b>, n <b>üs</b>tür: aⁿ = a · a · … · a (n tane). Örn. 2⁵ = 2·2·2·2·2 = 32.</p>
<div class="tbl"><table>
<tr><th>Kural</th><th>Örnek</th></tr>
<tr><td>a⁰ = 1 (a ≠ 0), a¹ = a</td><td>2026⁰ = 1</td></tr>
<tr><td>a⁻ⁿ = {{1|aⁿ}} (negatif üs → ters çevir)</td><td>3⁻² = {{1|9}}; ({{2|5}})⁻² = ({{5|2}})² = {{25|4}}</td></tr>
<tr><td>Negatif tabanda çift üs → pozitif, tek üs → negatif</td><td>(−2)⁴ = 16, (−2)³ = −8</td></tr>
<tr><td>Parantez yoksa üs yalnız sayıya aittir</td><td>−2⁴ = −16, ama (−2)⁴ = 16</td></tr>
<tr><td>aᵐ · aⁿ = aᵐ⁺ⁿ</td><td>2³ · 2⁴ = 2⁷</td></tr>
<tr><td>aᵐ ÷ aⁿ = aᵐ⁻ⁿ</td><td>5⁷ ÷ 5⁵ = 5²</td></tr>
<tr><td>(aᵐ)ⁿ = aᵐ·ⁿ</td><td>(3²)³ = 3⁶</td></tr>
<tr><td>aⁿ · bⁿ = (a·b)ⁿ</td><td>2³ · 5³ = 10³</td></tr>
<tr><td>Toplama: aynı terimler toplanır, üsler toplanmaz!</td><td>2⁵ + 2⁵ = 2 · 2⁵ = 2⁶</td></tr>
</table></div>
<div class="note"><b>Dikkat:</b> Önce tabanları eşitle! 4 = 2², 8 = 2³, 9 = 3², 27 = 3³, 25 = 5², 125 = 5³, 0,01 = 10⁻², {{1|8}} = 2⁻³.</div>
<h3>2. 10’un Kuvvetleri ve Çözümleme</h3>
<div class="fig"><svg viewBox="0 0 620 90" width="620" role="img" aria-label="10'un kuvvetleri basamak tablosu">
<g font-size="13" text-anchor="middle">
<g fill="#e0f2fe" stroke="#0284c7"><rect x="10" y="10" width="80" height="34"/><rect x="95" y="10" width="80" height="34"/><rect x="180" y="10" width="80" height="34"/><rect x="265" y="10" width="80" height="34"/></g>
<g fill="#fef3c7" stroke="#d97706"><rect x="355" y="10" width="80" height="34"/><rect x="440" y="10" width="80" height="34"/><rect x="525" y="10" width="80" height="34"/></g>
<text x="50" y="32">10³ = 1000</text><text x="135" y="32">10² = 100</text><text x="220" y="32">10¹ = 10</text><text x="305" y="32">10⁰ = 1</text>
<text x="395" y="32">10⁻¹ = 0,1</text><text x="480" y="32">10⁻² = 0,01</text><text x="565" y="32">10⁻³ = 0,001</text>
<text x="310" y="72" font-size="13">Örnek: 2045,07 = 2·10³ + 4·10¹ + 5·10⁰ + 7·10⁻²</text>
</g></svg><figcaption>Ondalık gösterimler 10’un kuvvetleriyle çözümlenir.</figcaption></div>
<h3>3. Bilimsel Gösterim</h3>
<p><b>a · 10ⁿ</b> biçimi; burada <b>1 ≤ |a| &lt; 10</b> ve n tam sayıdır.</p>
<ul>
<li>Büyük sayılar: 150 000 000 km = 1,5 · 10⁸ km (virgül 8 basamak sola kaydı → +8).</li>
<li>Küçük sayılar: 0,000 0045 m = 4,5 · 10⁻⁶ m (virgül 6 basamak sağa kaydı → −6).</li>
<li>Virgülü sola kaydırınca üs artar, sağa kaydırınca azalır: 32 · 10⁴ = 3,2 · 10⁵; 0,47 · 10⁻³ = 4,7 · 10⁻⁴.</li>
<li>Toplama yaparken üsleri eşitle: 3,2 · 10⁴ + 4,8 · 10³ = 32 · 10³ + 4,8 · 10³ = 36,8 · 10³ = 3,68 · 10⁴.</li>
</ul>
<div class="key"><b>LGS ipucu:</b> Birim dönüşümlerinde 10’un kuvvetlerini kullan: 1 km = 10³ m, 1 m = 10² cm, 1 ton = 10³ kg, 1 kg = 10³ g, 1 L = 10³ mL.</div>
`,
qs: [
{ q: `<p>Aşağıdaki ifadelerden hangisinin değeri <b>en büyüktür</b>?</p>`,
  c: [`(−3)²`, `−3²`, `3⁻²`, `({{1|3}})⁻³`], a: "D",
  s: `<p>(−3)² = 9; −3² = −9 (üs yalnız 3’e ait); 3⁻² = {{1|9}}; ({{1|3}})⁻³ = 3³ = 27.</p><p>En büyük değer <b>27</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>{{2⁵ · 4³|8²}} işleminin sonucu aşağıdakilerden hangisidir?</p>`,
  c: [`2³`, `2⁵`, `2⁷`, `2⁹`], a: "B",
  s: `<p>Tabanları 2 yapalım: 4³ = (2²)³ = 2⁶, 8² = (2³)² = 2⁶.</p><p>{{2⁵ · 2⁶|2⁶}} = 2⁵⁺⁶⁻⁶ = <b>2⁵</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Bir virüsün çapı yaklaşık 0,000 000 45 metredir.</p><p>Bu uzunluğun metre cinsinden bilimsel gösterimi aşağıdakilerden hangisidir?</p>`,
  c: [`4,5 · 10⁻⁷`, `45 · 10⁻⁸`, `4,5 · 10⁻⁸`, `0,45 · 10⁻⁶`], a: "A",
  s: `<p>Bilimsel gösterimde katsayı 1 ile 10 arasında olmalıdır. Virgülü 4’ün sağına almak için 7 basamak sağa kaydırırız → <b>4,5 · 10⁻⁷</b>.</p><p>45 · 10⁻⁸ ve 0,45 · 10⁻⁶ değerce eşit ama bilimsel gösterim değildir. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdakilerden hangisi <b>3,0402</b> sayısının 10’un kuvvetleri kullanılarak doğru çözümlenmiş hâlidir?</p>`,
  c: [`3 · 10⁰ + 4 · 10⁻¹ + 2 · 10⁻³`, `3 · 10⁰ + 4 · 10⁻² + 2 · 10⁻⁴`, `3 · 10¹ + 4 · 10⁻² + 2 · 10⁻⁴`, `3 · 10⁰ + 4 · 10⁻² + 2 · 10⁻³`], a: "B",
  s: `<p>3,0402: birler basamağı 3 (10⁰), onda birler 0, yüzde birler 4 (10⁻²), binde birler 0, on binde birler 2 (10⁻⁴).</p><p>3,0402 = 3 · 10⁰ + 4 · 10⁻² + 2 · 10⁻⁴. Cevap <b>B</b>.</p>` },
{ q: `<p>Bir laboratuvarda incelenen bakteri türü her 20 dakikada bir ikiye bölünerek çoğalmaktadır. Başlangıçta kapta 2⁵ bakteri bulunmaktadır.</p><p>Hiçbir bakteri ölmediğine göre 2 saat sonra kapta kaç bakteri olur?</p>`,
  c: [`2⁷`, `2¹¹`, `2¹²`, `2³⁰`], a: "B",
  s: `<p>2 saat = 120 dakika → 120 ÷ 20 = 6 bölünme. Her bölünmede sayı 2 katına çıkar → 2⁶ katına çıkar.</p><p>2⁵ · 2⁶ = <b>2¹¹</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Güneş ile Dünya arasındaki uzaklık yaklaşık 1,5 · 10⁸ km, ışığın hızı ise yaklaşık 3 · 10⁵ km/s’dir.</p><p>Buna göre Güneş’ten çıkan ışık Dünya’ya yaklaşık kaç saniyede ulaşır?</p>`,
  c: [`50`, `5 · 10⁴`, `5000`, `500`], a: "D",
  s: `<p>Süre = yol ÷ hız = {{1,5 · 10⁸|3 · 10⁵}} = 0,5 · 10³ = <b>500</b> saniye (yaklaşık 8 dakika 20 saniye). Cevap <b>D</b>.</p>` },
{ q: `<p>4⁻¹ + 2⁻² + 8⁰ işleminin sonucu kaçtır?</p>`,
  c: [`{{1|2}}`, `1`, `{{3|2}}`, `2`], a: "C",
  s: `<p>4⁻¹ = {{1|4}}, 2⁻² = {{1|4}}, 8⁰ = 1.</p><p>{{1|4}} + {{1|4}} + 1 = {{1|2}} + 1 = <b>{{3|2}}</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>A = 3<sup>(2³)</sup> ve B = (3²)³ veriliyor.</p><p>Buna göre {{A|B}} kaçtır?</p>`,
  c: [`3`, `9`, `27`, `81`], a: "B",
  s: `<p>A = 3<sup>(2³)</sup> = 3⁸ (önce üsteki 2³ = 8 hesaplanır). B = (3²)³ = 3⁶.</p><p>{{3⁸|3⁶}} = 3² = <b>9</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Kalınlığı 0,1 mm olan bir kâğıt her seferinde ikiye katlanıyor. Her katlamada kâğıdın kalınlığı iki katına çıkıyor.</p>
<svg viewBox="0 0 300 80" width="300"><g fill="#fef9c3" stroke="#a16207"><rect x="10" y="50" width="120" height="6"/><rect x="160" y="44" width="60" height="12"/><rect x="250" y="32" width="30" height="24"/></g><g font-size="12"><text x="40" y="74">0 kat</text><text x="170" y="74">1 kat</text><text x="245" y="74">2 kat</text></g></svg>
<p>Bu kâğıt 10 kez katlanabilseydi kalınlığı yaklaşık ne kadar olurdu? (2¹⁰ = 1024)</p>`,
  c: [`10 cm`, `1 cm`, `1 m`, `10 m`], a: "A",
  s: `<p>10 katlamada kalınlık 2¹⁰ katına çıkar: 0,1 mm · 1024 = 102,4 mm.</p><p>102,4 mm = 10,24 cm ≈ <b>10 cm</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>a = 2³⁰, b = 3²⁰ ve c = 5¹⁰ sayıları veriliyor.</p><p>Buna göre bu sayıların küçükten büyüğe doğru sıralanışı aşağıdakilerden hangisidir?</p>`,
  c: [`a &lt; b &lt; c`, `b &lt; c &lt; a`, `c &lt; b &lt; a`, `c &lt; a &lt; b`], a: "D",
  s: `<p>Üsleri eşitleyelim (10): a = (2³)¹⁰ = 8¹⁰, b = (3²)¹⁰ = 9¹⁰, c = 5¹⁰.</p><p>Üsler eşitken tabanı büyük olan büyüktür: 5 &lt; 8 &lt; 9 → <b>c &lt; a &lt; b</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Bilgisayar biliminde 1 KB = 2¹⁰ bayt, 1 MB = 2¹⁰ KB ve 1 GB = 2¹⁰ MB’tır. Bir telefonun boş hafızası 2⁶ GB’tır.</p><p>Her biri 2² MB yer kaplayan fotoğraflardan bu hafızaya en fazla kaç tane kaydedilebilir?</p>`,
  c: [`2¹²`, `2¹⁴`, `2¹⁶`, `2¹⁸`], a: "B",
  s: `<p>2⁶ GB = 2⁶ · 2¹⁰ MB = 2¹⁶ MB.</p><p>Fotoğraf sayısı = 2¹⁶ ÷ 2² = <b>2¹⁴</b> (= 16 384). Cevap <b>B</b>.</p>` },
{ q: `<p>Bir kütüphanede 3,2 · 10⁴ kitap vardır. Kütüphaneye 4,8 · 10³ yeni kitap bağışlanıyor.</p><p>Buna göre kütüphanedeki toplam kitap sayısının bilimsel gösterimi aşağıdakilerden hangisidir?</p>`,
  c: [`8 · 10⁷`, `8 · 10⁴`, `3,68 · 10⁴`, `36,8 · 10³`], a: "C",
  s: `<p>Üsleri eşitleyelim: 3,2 · 10⁴ = 32 · 10³. Toplam = 32 · 10³ + 4,8 · 10³ = 36,8 · 10³.</p><p>Bilimsel gösterim: 36,8 · 10³ = <b>3,68 · 10⁴</b> (36,8 bilimsel gösterim değildir). Cevap <b>C</b>.</p>` },
{ q: `<p>9ˣ · 27 = 3¹¹ olduğuna göre x kaçtır?</p>`,
  c: [`3`, `4`, `5`, `8`], a: "B",
  s: `<p>9ˣ = (3²)ˣ = 3²ˣ ve 27 = 3³. Eşitlik: 3²ˣ⁺³ = 3¹¹.</p><p>2x + 3 = 11 → x = <b>4</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdakilerden hangisi <b>0,0072</b> sayısına <b>eşit değildir</b>?</p>`,
  c: [`72 · 10⁻⁴`, `0,72 · 10⁻²`, `7,2 · 10⁻³`, `720 · 10⁻⁶`], a: "D",
  s: `<p>72 · 10⁻⁴ = 0,0072 ✓; 0,72 · 10⁻² = 0,0072 ✓; 7,2 · 10⁻³ = 0,0072 ✓.</p><p>720 · 10⁻⁶ = 0,00072 ≠ 0,0072. Cevap <b>D</b>.</p>` },
{ q: `<p>(−1)²⁰²⁷ + (−1)²⁰²⁶ + (−1)⁰ işleminin sonucu kaçtır?</p>`,
  c: [`−1`, `0`, `1`, `3`], a: "C",
  s: `<p>−1’in tek kuvveti −1, çift kuvveti 1’dir; sıfırıncı kuvveti 1’dir.</p><p>(−1) + 1 + 1 = <b>1</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>2¹⁰ + 2¹⁰ + 2¹⁰ + 2¹⁰ toplamı aşağıdakilerden hangisine eşittir?</p>`,
  c: [`2⁴⁰`, `8¹⁰`, `2¹²`, `4⁴⁰`], a: "C",
  s: `<p>Dört tane eşit terim toplanıyor: 4 · 2¹⁰ = 2² · 2¹⁰ = <b>2¹²</b>.</p><p>Toplamada üsler toplanmaz; 2⁴⁰ yanlış bir sonuçtur. Cevap <b>C</b>.</p>` },
{ q: `<p>5ˣ = 125 ve 2ʸ = {{1|16}} olduğuna göre x + y toplamı kaçtır?</p>`,
  c: [`−1`, `1`, `7`, `−7`], a: "A",
  s: `<p>125 = 5³ → x = 3. {{1|16}} = {{1|2⁴}} = 2⁻⁴ → y = −4.</p><p>x + y = 3 + (−4) = <b>−1</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>Kare biçimindeki bir arazinin bir kenarı 2⁵ metredir. Bu arazi, bir kenarı 2² metre olan kare parsellere ayrılacaktır.</p>
<svg viewBox="0 0 160 160" width="150"><rect x="5" y="5" width="150" height="150" fill="#dcfce7" stroke="#16a34a"/><g stroke="#86efac"><line x1="23.75" y1="5" x2="23.75" y2="155"/><line x1="42.5" y1="5" x2="42.5" y2="155"/><line x1="61.25" y1="5" x2="61.25" y2="155"/><line x1="80" y1="5" x2="80" y2="155"/><line x1="98.75" y1="5" x2="98.75" y2="155"/><line x1="117.5" y1="5" x2="117.5" y2="155"/><line x1="136.25" y1="5" x2="136.25" y2="155"/><line y1="23.75" x1="5" y2="23.75" x2="155"/><line y1="42.5" x1="5" y2="42.5" x2="155"/><line y1="61.25" x1="5" y2="61.25" x2="155"/><line y1="80" x1="5" y2="80" x2="155"/><line y1="98.75" x1="5" y2="98.75" x2="155"/><line y1="117.5" x1="5" y2="117.5" x2="155"/><line y1="136.25" x1="5" y2="136.25" x2="155"/></g></svg>
<p>Buna göre kaç parsel elde edilir?</p>`,
  c: [`2³`, `2⁶`, `2⁷`, `2¹⁰`], a: "B",
  s: `<p>Bir kenara düşen parsel sayısı: 2⁵ ÷ 2² = 2³ = 8.</p><p>Toplam parsel = 8 · 8 = 2³ · 2³ = <b>2⁶</b> = 64. (Alanlarla: 2¹⁰ ÷ 2⁴ = 2⁶.) Cevap <b>B</b>.</p>` },
{ q: `<p>Tabloda bazı gezegenlerin Güneş’e ortalama uzaklıkları verilmiştir.</p><table><tr><th>Gezegen</th><th>Uzaklık (km)</th></tr><tr><td>Merkür</td><td>5,8 · 10⁷</td></tr><tr><td>Venüs</td><td>1,08 · 10⁸</td></tr><tr><td>Mars</td><td>2,28 · 10⁸</td></tr><tr><td>Jüpiter</td><td>7,78 · 10⁸</td></tr></table><p>Buna göre Jüpiter’in Güneş’e uzaklığı, Merkür’ün Güneş’e uzaklığının yaklaşık kaç katıdır?</p>`,
  c: [`1,3`, `13`, `130`, `1300`], a: "B",
  s: `<p>{{7,78 · 10⁸|5,8 · 10⁷}} = {{77,8 · 10⁷|5,8 · 10⁷}} = {{77,8|5,8}} ≈ 13,4.</p><p>Yaklaşık <b>13</b> katı. Cevap <b>B</b>.</p>` },
{ q: `<p>(−{{1|2}})⁻³ ifadesinin değeri kaçtır?</p>`,
  c: [`−8`, `−{{1|8}}`, `{{1|8}}`, `8`], a: "A",
  s: `<p>Negatif üs, tabanı ters çevirir: (−{{1|2}})⁻³ = (−2)³.</p><p>Negatif taban tek üs → negatif: (−2)³ = <b>−8</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>Bir fabrikada üretilen vidaların her biri 2,5 · 10⁻³ kg’dır. Vidalar 4 · 10² adetlik paketlere konuluyor ve bu paketlerden 5 · 10³ tanesi bir kamyona yükleniyor.</p><p>Kamyondaki vidaların toplam kütlesi kaç kilogramdır?</p>`,
  c: [`5 · 10²`, `2 · 10⁴`, `5 · 10³`, `5 · 10⁴`], a: "C",
  s: `<p>Vida sayısı: 4 · 10² · 5 · 10³ = 20 · 10⁵ = 2 · 10⁶.</p><p>Kütle: 2 · 10⁶ · 2,5 · 10⁻³ = 5 · 10³ kg. Cevap <b>C</b>.</p>` }
]
});
