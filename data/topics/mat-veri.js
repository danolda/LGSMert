LGS.add({
id: "mat-veri",
summary: `
<h3>1. Grafik Türleri ve Ne Zaman Kullanılır?</h3>
<div class="tbl"><table>
<tr><th>Grafik</th><th>Ne için uygundur?</th><th>Örnek</th></tr>
<tr><td><b>Sütun grafiği</b></td><td>Farklı grupların miktarlarını karşılaştırmak</td><td>Sınıfların topladığı kitap sayısı</td></tr>
<tr><td><b>Çizgi grafiği</b></td><td>Bir verinin <b>zamana göre değişimini</b> göstermek</td><td>Bir şehrin günlük sıcaklık değişimi</td></tr>
<tr><td><b>Daire grafiği</b></td><td>Parçaların <b>bütün içindeki payını</b> göstermek</td><td>Aile bütçesinin harcama kalemleri</td></tr>
</table></div>
<div class="two">
<div class="fig"><svg viewBox="0 0 220 160" width="220" role="img" aria-label="Örnek sütun grafiği">
<line x1="30" y1="10" x2="30" y2="130" stroke="#333"/><line x1="30" y1="130" x2="210" y2="130" stroke="#333"/>
<g fill="#60a5fa"><rect x="45" y="70" width="25" height="60"/><rect x="90" y="40" width="25" height="90"/><rect x="135" y="90" width="25" height="40"/><rect x="180" y="55" width="25" height="75"/></g>
<g font-size="11" text-anchor="middle"><text x="57" y="145">8A</text><text x="102" y="145">8B</text><text x="147" y="145">8C</text><text x="192" y="145">8D</text></g>
</svg><figcaption>Sütun grafiği: karşılaştırma</figcaption></div>
<div class="fig"><svg viewBox="0 0 220 160" width="220" role="img" aria-label="Örnek çizgi grafiği">
<line x1="30" y1="10" x2="30" y2="130" stroke="#333"/><line x1="30" y1="130" x2="210" y2="130" stroke="#333"/>
<polyline points="45,110 80,95 115,60 150,45 185,75" fill="none" stroke="#dc2626" stroke-width="3"/>
<g fill="#dc2626"><circle cx="45" cy="110" r="4"/><circle cx="80" cy="95" r="4"/><circle cx="115" cy="60" r="4"/><circle cx="150" cy="45" r="4"/><circle cx="185" cy="75" r="4"/></g>
<text x="120" y="150" font-size="11" text-anchor="middle">Zaman →</text>
</svg><figcaption>Çizgi grafiği: zamana göre değişim</figcaption></div>
</div>
<h3>2. Daire Grafiği Hesapları</h3>
<div class="fig"><svg viewBox="0 0 360 170" width="360" role="img" aria-label="Daire grafiği örneği">
<g stroke="#fff" stroke-width="2">
<path d="M80,80 L80,10 A70,70 0 0,1 150,80 Z" fill="#60a5fa"/>
<path d="M80,80 L150,80 A70,70 0 0,1 80,150 Z" fill="#fbbf24"/>
<path d="M80,80 L80,150 A70,70 0 0,1 10,80 Z" fill="#34d399"/>
<path d="M80,80 L10,80 A70,70 0 0,1 80,10 Z" fill="#f87171"/>
</g>
<g font-size="12" text-anchor="middle"><text x="108" y="55">%25</text><text x="108" y="112">%25</text><text x="52" y="112">%25</text><text x="52" y="55">%25</text></g>
<g font-size="13"><text x="170" y="40">Dilimin açısı = {{parça|bütün}} · 360°</text><text x="170" y="70">90° → %25 → {{1|4}}</text><text x="170" y="95">120° → {{1|3}}, 60° → {{1|6}}</text><text x="170" y="120">180° → yarısı, 72° → %20</text><text x="170" y="145">Açıların toplamı = 360°</text></g>
</svg><figcaption>Her dilim, bütünün belli bir kesridir.</figcaption></div>
<ul>
<li><b>Açıdan sayıya:</b> 360 kişilik ankette 120°’lik dilim → {{120|360}} · 360 = 120 kişi.</li>
<li><b>Sayıdan açıya:</b> 40 kişiden 15’i → {{15|40}} · 360° = 135°.</li>
<li><b>Bilinen bir dilimden toplamı bulma:</b> 90° = 4500 TL ise 360° = 4 · 4500 = 18 000 TL.</li>
</ul>
<div class="note"><b>Dikkat:</b> İki farklı daire grafiğinde açılar eşit olsa da toplamlar farklıysa gerçek sayılar farklıdır! Önce her grafiğin toplamını bul. Sütun grafiğinde dikey eksenin 0’dan başlayıp başlamadığına ve kareli zeminde bir karenin kaç birim olduğuna dikkat et.</div>
<div class="key"><b>Grafikler arası dönüşüm:</b> Tablo → sütun (değerleri ölçekle), tablo → daire (her değeri toplama böl, 360 ile çarp), daire → sütun (açıların oranı = sütun boylarının oranı).</div>
`,
qs: [
{ q: `<p>240 öğrencinin katıldığı bir ankette öğrencilerin en sevdiği spor dalları daire grafiğinde gösterilmiştir.</p>
<svg viewBox="0 0 160 160" width="190"><g stroke="#fff" stroke-width="2"><path d="M80,80 L80,10 A70,70 0 0,1 140.6,115 Z" fill="#60a5fa"/><path d="M80,80 L140.6,115 A70,70 0 0,1 45,140.6 Z" fill="#fbbf24"/><path d="M80,80 L45,140.6 A70,70 0 0,1 10,80 Z" fill="#34d399"/><path d="M80,80 L10,80 A70,70 0 0,1 80,10 Z" fill="#f87171"/></g><g font-size="10" text-anchor="middle"><text x="112" y="58">Futbol</text><text x="112" y="70">120°</text><text x="92" y="114">Basketbol</text><text x="46" y="98">Voleybol</text><text x="46" y="110">60°</text><text x="50" y="52">Yüzme</text></g></svg>
<p>Basketbolu seçenlerin sayısı, yüzmeyi seçenlerin sayısına eşit olduğuna göre basketbolu kaç öğrenci seçmiştir?</p>`,
  c: [`40`, `60`, `80`, `90`], a: "B",
  s: `<p>Basketbol ve yüzme dilimlerinin toplamı: 360° − 120° − 60° = 180°. Eşit olduklarından her biri 90°.</p><p>90° = {{1|4}} → 240 · {{1|4}} = <b>60</b> öğrenci. Cevap <b>B</b>.</p>` },
{ q: `<p>Bir kırtasiyede bir günde satılan ürünlerin sayıları tabloda verilmiştir.</p><table><tr><th>Ürün</th><th>Kalem</th><th>Defter</th><th>Silgi</th><th>Kalemtıraş</th></tr><tr><th>Sayı</th><td>15</td><td>30</td><td>45</td><td>30</td></tr></table><p>Bu veriler daire grafiğinde gösterildiğinde <b>silgi</b> dilimine ait merkez açı kaç derece olur?</p>`,
  c: [`45`, `90`, `135`, `150`], a: "C",
  s: `<p>Toplam satış: 15 + 30 + 45 + 30 = 120.</p><p>Silgi dilimi: {{45|120}} · 360° = {{3|8}} · 360° = <b>135°</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Bir öğrenci, kardeşinin 1 yıl boyunca her ayın sonunda ölçtüğü boy uzunluklarını, boyunun <b>zamana göre nasıl değiştiğini</b> gösterecek biçimde grafikle sunmak istiyor.</p><p>Bu amaç için en uygun grafik türü aşağıdakilerden hangisidir?</p>`,
  c: [`Daire grafiği`, `Tablo`, `Resim grafiği`, `Çizgi grafiği`], a: "D",
  s: `<p>Bir verinin <b>zamana bağlı değişimini</b> (artış-azalış eğilimini) göstermek için en uygun grafik <b>çizgi grafiğidir</b>.</p><p>Daire grafiği parçaların bütüne oranını gösterir; aylık boy değerleri bir bütünün parçaları değildir. Cevap <b>D</b>.</p>` },
{ q: `<p>Bir ailenin aylık gelirinin kira, mutfak, ulaşım, eğitim ve birikim kalemlerine nasıl paylaştırıldığı, her kalemin <b>gelirin tamamı içindeki payını</b> gösterecek biçimde sunulacaktır.</p><p>Bunun için en uygun grafik aşağıdakilerden hangisidir?</p>`,
  c: [`Çizgi grafiği`, `Sütun grafiği`, `Histogram`, `Daire grafiği`], a: "D",
  s: `<p>Bir bütünün parçalarının bütün içindeki paylarını göstermek için <b>daire grafiği</b> kullanılır. Her kalem bir dilimdir ve dilimlerin toplamı 360°’dir. Cevap <b>D</b>.</p>` },
{ q: `<p>Bir kitapçının hafta içi günlerde sattığı kitap sayıları sütun grafiğinde verilmiştir.</p>
<svg viewBox="0 0 300 190" width="300"><line x1="40" y1="10" x2="40" y2="160" stroke="#333"/><line x1="40" y1="160" x2="290" y2="160" stroke="#333"/><g stroke="#e5e7eb"><line x1="40" y1="130" x2="290" y2="130"/><line x1="40" y1="100" x2="290" y2="100"/><line x1="40" y1="70" x2="290" y2="70"/><line x1="40" y1="40" x2="290" y2="40"/></g><g font-size="10" text-anchor="end"><text x="35" y="164">0</text><text x="35" y="134">10</text><text x="35" y="104">20</text><text x="35" y="74">30</text><text x="35" y="44">40</text></g><g fill="#60a5fa"><rect x="55" y="100" width="30" height="60"/><rect x="100" y="55" width="30" height="105"/><rect x="145" y="85" width="30" height="75"/><rect x="190" y="40" width="30" height="120"/><rect x="235" y="70" width="30" height="90"/></g><g font-size="11" text-anchor="middle"><text x="70" y="176">Pzt</text><text x="115" y="176">Salı</text><text x="160" y="176">Çar</text><text x="205" y="176">Per</text><text x="250" y="176">Cuma</text></g></svg>
<p>Buna göre satılan kitap sayısının, beş günün ortalamasından <b>fazla</b> olduğu günler hangileridir?</p>`,
  c: [`Salı ve Perşembe`, `Salı, Perşembe ve Cuma`, `Pazartesi ve Çarşamba`, `Yalnız Perşembe`], a: "A",
  s: `<p>Grafikten: Pzt 20, Salı 35, Çar 25, Per 40, Cuma 30. Toplam 150, ortalama 150 ÷ 5 = 30.</p><p>30’dan fazla olanlar: Salı (35) ve Perşembe (40). Cuma 30’a eşittir, fazla değildir. Cevap <b>A</b>.</p>` },
{ q: `<p>Bir şehirde bir gün boyunca ölçülen hava sıcaklıkları çizgi grafiğinde verilmiştir.</p>
<svg viewBox="0 0 300 180" width="300"><line x1="40" y1="10" x2="40" y2="150" stroke="#333"/><line x1="40" y1="150" x2="290" y2="150" stroke="#333"/><g font-size="10" text-anchor="end"><text x="35" y="154">10</text><text x="35" y="124">15</text><text x="35" y="94">20</text><text x="35" y="64">25</text></g><g stroke="#e5e7eb"><line x1="40" y1="120" x2="290" y2="120"/><line x1="40" y1="90" x2="290" y2="90"/><line x1="40" y1="60" x2="290" y2="60"/></g><polyline points="60,138 110,120 160,84 210,66 260,90" fill="none" stroke="#dc2626" stroke-width="3"/><g fill="#dc2626"><circle cx="60" cy="138" r="4"/><circle cx="110" cy="120" r="4"/><circle cx="160" cy="84" r="4"/><circle cx="210" cy="66" r="4"/><circle cx="260" cy="90" r="4"/></g><g font-size="10" text-anchor="middle"><text x="60" y="166">08.00</text><text x="110" y="166">10.00</text><text x="160" y="166">12.00</text><text x="210" y="166">14.00</text><text x="260" y="166">16.00</text><text x="60" y="132">12</text><text x="110" y="114">15</text><text x="160" y="78">21</text><text x="210" y="60">24</text><text x="260" y="84">20</text></g><text x="5" y="10" font-size="10">°C</text></svg>
<p>Buna göre sıcaklığın <b>en fazla arttığı</b> zaman aralığı aşağıdakilerden hangisidir?</p>`,
  c: [`08.00 – 10.00`, `10.00 – 12.00`, `12.00 – 14.00`, `14.00 – 16.00`], a: "B",
  s: `<p>Artışlar: 08–10: 15 − 12 = 3 °C; 10–12: 21 − 15 = 6 °C; 12–14: 24 − 21 = 3 °C; 14–16: sıcaklık 4 °C azalmıştır.</p><p>En fazla artış <b>10.00 – 12.00</b> arasında. Grafikte çizginin en dik yükseldiği yer burasıdır. Cevap <b>B</b>.</p>` },
{ q: `<p>Bir okulun bahçesindeki K, L ve M ağaç türlerinin sayılarını gösteren daire grafiğinde K dilimi 180°, L ve M dilimleri ise 90°’dir.</p><p>Bu verileri gösteren sütun grafiğinde K, L ve M’nin değerleri sırasıyla aşağıdakilerden hangisi olabilir?</p>`,
  c: [`40 – 20 – 20`, `40 – 30 – 10`, `30 – 20 – 20`, `20 – 40 – 20`], a: "A",
  s: `<p>Açılar 180° : 90° : 90° = 2 : 1 : 1 oranındadır. Sütun yükseklikleri de aynı oranda olmalıdır.</p><p>40 : 20 : 20 = 2 : 1 : 1 ✓. Diğerlerinde oran 2:1:1 değildir. Cevap <b>A</b>.</p>` },
{ q: `<p>A okulunda 300, B okulunda 200 öğrenci vardır. Her okulun öğrencilerinin cinsiyete göre dağılımı ayrı birer daire grafiğinde gösterilmiştir. A okulunun grafiğinde kızlara ait dilim 144°, B okulunun grafiğinde ise 216°’dir.</p><p>Buna göre kız öğrenci sayıları için aşağıdakilerden hangisi doğrudur?</p>`,
  c: [`A okulunda daha fazladır.`, `B okulunda daha fazladır.`, `İki okulda eşittir.`, `Verilenlerle karşılaştırılamaz.`], a: "C",
  s: `<p>A okulu: {{144|360}} · 300 = {{2|5}} · 300 = 120 kız. B okulu: {{216|360}} · 200 = {{3|5}} · 200 = 120 kız.</p><p>Kız öğrenci sayıları <b>eşittir</b>. Açılar farklı olsa da toplamlar farklı olduğu için sonuç değişir. Cevap <b>C</b>.</p>` },
{ q: `<p>Bir ailenin aylık harcamalarının dağılımı daire grafiğinde verilmiştir.</p>
<svg viewBox="0 0 160 160" width="190"><g stroke="#fff" stroke-width="2"><path d="M80,80 L80,10 A70,70 0 0,1 146.6,101.6 Z" fill="#60a5fa"/><path d="M80,80 L146.6,101.6 A70,70 0 0,1 58.4,146.6 Z" fill="#fbbf24"/><path d="M80,80 L58.4,146.6 A70,70 0 0,1 13.4,101.6 Z" fill="#34d399"/><path d="M80,80 L13.4,101.6 A70,70 0 0,1 80,10 Z" fill="#f87171"/></g><g font-size="10" text-anchor="middle"><text x="112" y="54">Kira</text><text x="112" y="66">108°</text><text x="98" y="114">Gıda 90°</text><text x="50" y="112">Ulaşım</text><text x="48" y="54">Diğer</text><text x="48" y="66">108°</text></g></svg>
<p>Bu ailenin gıdaya ayırdığı para 4500 TL olduğuna göre kiraya ayırdığı para kaç TL’dir?</p>`,
  c: [`4500`, `5400`, `6000`, `7200`], a: "B",
  s: `<p>Gıda 90° = toplamın {{1|4}}’ü → toplam harcama 4 · 4500 = 18 000 TL.</p><p>Kira: {{108|360}} · 18 000 = {{3|10}} · 18 000 = <b>5400 TL</b>. (Kısa yol: 90° → 4500 ise 18° → 900, 108° → 6 · 900 = 5400.) Cevap <b>B</b>.</p>` },
{ q: `<p>Ali ile Can’ın 4 hafta boyunca okudukları sayfa sayıları aşağıdaki çizgi grafiğinde gösterilmiştir.</p>
<svg viewBox="0 0 300 180" width="300"><line x1="40" y1="10" x2="40" y2="150" stroke="#333"/><line x1="40" y1="150" x2="290" y2="150" stroke="#333"/><g font-size="10" text-anchor="end"><text x="35" y="154">30</text><text x="35" y="114">40</text><text x="35" y="74">50</text><text x="35" y="34">60</text></g><g stroke="#e5e7eb"><line x1="40" y1="130" x2="290" y2="130"/><line x1="40" y1="110" x2="290" y2="110"/><line x1="40" y1="90" x2="290" y2="90"/><line x1="40" y1="70" x2="290" y2="70"/><line x1="40" y1="50" x2="290" y2="50"/><line x1="40" y1="30" x2="290" y2="30"/></g><polyline points="80,110 140,50 200,70 260,10" fill="none" stroke="#2563eb" stroke-width="3"/><polyline points="80,70 140,90 200,10 260,30" fill="none" stroke="#dc2626" stroke-width="3" stroke-dasharray="6 4"/><g font-size="10" text-anchor="middle"><text x="80" y="166">1. hafta</text><text x="140" y="166">2. hafta</text><text x="200" y="166">3. hafta</text><text x="260" y="166">4. hafta</text></g><g font-size="10"><text x="215" y="120" fill="#2563eb">— Ali</text><text x="215" y="134" fill="#dc2626">- - Can</text></g></svg>
<p>Grafikte dikey eksende her aralık 5 sayfadır. Buna göre iki arkadaşın okuduğu sayfa sayıları arasındaki farkın <b>en fazla</b> olduğu hafta hangisidir?</p>`,
  c: [`1. hafta`, `2. hafta`, `3. hafta`, `4. hafta`], a: "C",
  s: `<p>Grafikten: Ali 40, 55, 50, 65; Can 50, 45, 65, 60.</p><p>Farklar: 1. hafta 10, 2. hafta 10, 3. hafta 15, 4. hafta 5. En fazla fark <b>3. hafta</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Bir okulun 8. sınıf şubelerindeki öğrenci sayıları tabloda verilmiştir.</p><table><tr><th>Şube</th><th>8A</th><th>8B</th><th>8C</th><th>8D</th></tr><tr><th>Öğrenci</th><td>30</td><td>25</td><td>35</td><td>30</td></tr></table><p>Bu veriler daire grafiğinde gösterilirse 8C şubesine ait dilimin merkez açısı kaç derece olur?</p>`,
  c: [`90`, `100`, `105`, `120`], a: "C",
  s: `<p>Toplam öğrenci: 30 + 25 + 35 + 30 = 120.</p><p>8C: {{35|120}} · 360° = 35 · 3° = <b>105°</b>. (360 ÷ 120 = 3°, her öğrenci 3°’lik dilim.) Cevap <b>C</b>.</p>` },
{ q: `<p>Bir fırının 5 günde sattığı ekmek sayılarının ortalaması 24’tür. İlk dört günün satışları tabloda verilmiştir.</p><table><tr><th>Gün</th><th>1.</th><th>2.</th><th>3.</th><th>4.</th><th>5.</th></tr><tr><th>Satış</th><td>20</td><td>25</td><td>30</td><td>28</td><td>?</td></tr></table><p>Buna göre 5. günde kaç ekmek satılmıştır?</p>`,
  c: [`17`, `19`, `21`, `24`], a: "A",
  s: `<p>Ortalama 24 ise 5 günün toplamı 5 · 24 = 120.</p><p>İlk dört gün: 20 + 25 + 30 + 28 = 103 → 5. gün 120 − 103 = <b>17</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>Bir daire grafiğinde merkez açısı 72° olan dilim, verilerin yüzde kaçını gösterir?</p>`,
  c: [`%15`, `%72`, `%25`, `%20`], a: "D",
  s: `<p>{{72|360}} = {{1|5}} = <b>%20</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Kareli zemine çizilmiş bir sütun grafiğinde her kare 4 kişiyi göstermektedir. Grafikteki dört sütunun yükseklikleri sırasıyla 3, 5, 2 ve 6 karedir.</p><p>Buna göre grafikte gösterilen toplam kişi sayısı kaçtır?</p>`,
  c: [`16`, `48`, `60`, `64`], a: "D",
  s: `<p>Toplam kare sayısı: 3 + 5 + 2 + 6 = 16. Her kare 4 kişi → 16 · 4 = <b>64</b> kişi. Cevap <b>D</b>.</p>` },
{ q: `<p>Tabloda bir mağazanın dört ayda sattığı bisiklet sayıları verilmiştir.</p><table><tr><th>Ay</th><th>Mart</th><th>Nisan</th><th>Mayıs</th><th>Haziran</th></tr><tr><th>Satış</th><td>120</td><td>80</td><td>160</td><td>40</td></tr></table><p>Bu veriler, her karenin 20 bisikleti gösterdiği kareli zeminde sütun grafiğiyle gösterilecektir.</p><p>Buna göre sütunların kare cinsinden yükseklikleri sırasıyla aşağıdakilerden hangisidir?</p>`,
  c: [`6 – 4 – 8 – 2`, `12 – 8 – 16 – 4`, `3 – 2 – 4 – 1`, `6 – 4 – 9 – 2`], a: "A",
  s: `<p>Her değeri 20’ye bölelim: 120 ÷ 20 = 6, 80 ÷ 20 = 4, 160 ÷ 20 = 8, 40 ÷ 20 = 2.</p><p>Yükseklikler: <b>6 – 4 – 8 – 2</b> kare. Cevap <b>A</b>.</p>` },
{ q: `<p>Bir barajın doluluk oranları aylara göre çizgi grafiğinde verilmiştir: Haziran %80, Temmuz %72, Ağustos %60, Eylül %55, Ekim %58.</p><p>Buna göre doluluk oranının bir önceki aya göre <b>en fazla azaldığı</b> ay hangisidir?</p>`,
  c: [`Temmuz`, `Ağustos`, `Eylül`, `Ekim`], a: "B",
  s: `<p>Değişimler: Temmuz −8, Ağustos −12, Eylül −5, Ekim +3 (artış).</p><p>En fazla azalma <b>Ağustos</b> ayında (Temmuz’dan Ağustos’a 12 puan). Cevap <b>B</b>.</p>` },
{ q: `<p>Üç dilimden oluşan bir daire grafiğinde K diliminin merkez açısı L’ninkinin 2 katı, M diliminin merkez açısı ise L’ninkinin 3 katıdır. Grafikte M dilimi 90 kişiyi göstermektedir.</p><p>Buna göre grafikte toplam kaç kişi gösterilmiştir?</p>`,
  c: [`120`, `150`, `180`, `270`], a: "C",
  s: `<p>L = x ise K = 2x, M = 3x → 6x = 360° → x = 60°. M = 180° yani verilerin yarısı.</p><p>M 90 kişi ise toplam 2 · 90 = <b>180</b> kişi. Cevap <b>C</b>.</p>` },
{ q: `<p>Bir okulda okula yürüyerek gelen 120 öğrencinin sınıf düzeylerine göre dağılımı sütun grafiğinde gösterilmiştir. Grafikte 5. sınıflar 20, 6. sınıflar 30, 8. sınıflar 40 öğrenciyi göstermektedir; 7. sınıfların sütunu ise silinmiştir.</p><p>Buna göre okula yürüyerek gelen 7. sınıf öğrencisi kaç kişidir?</p>`,
  c: [`20`, `25`, `30`, `35`], a: "C",
  s: `<p>Toplam 120 → 7. sınıflar = 120 − (20 + 30 + 40) = 120 − 90 = <b>30</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Bir ülkenin 2015 – 2025 yılları arasındaki nüfusunun yıllara göre değişimi grafikle gösterilecektir.</p><p>Bu verileri gösterecek en uygun grafik ve nedeni aşağıdakilerden hangisidir?</p>`,
  c: [`Çizgi grafiği; çünkü verinin zamana göre değişimi gösterilecektir.`, `Daire grafiği; çünkü her yılın toplam nüfus içindeki payı gösterilecektir.`, `Daire grafiği; çünkü veriler yüzdelerle ifade edilecektir.`, `Sütun grafiği; çünkü yalnızca en kalabalık yıl bulunacaktır.`], a: "A",
  s: `<p>Nüfusun yıllar içindeki <b>artış-azalış eğilimi</b> gösterilecektir; zamana bağlı değişim için en uygun grafik <b>çizgi grafiğidir</b>.</p><p>Yılların nüfusları bir bütünün parçaları olmadığından daire grafiği uygun değildir. Cevap <b>A</b>.</p>` },
{ q: `<p>Dört öğrenci, ellerindeki verilerle birer daire grafiği çizmiş ve dilimlerin merkez açılarını aşağıdaki gibi yazmışlardır.</p><p>Buna göre hangi öğrencinin çizdiği grafik <b>kesinlikle hatalıdır</b>?</p>`,
  c: [`Elif: 90°, 120°, 150°`, `Mert: 100°, 120°, 150°`, `Zeynep: 60°, 60°, 240°`, `Kaan: 45°, 135°, 180°`], a: "B",
  s: `<p>Bir daire grafiğinde dilimlerin açıları toplamı 360° olmalıdır.</p><p>Elif: 360° ✓, Mert: 100 + 120 + 150 = <b>370°</b> ✗, Zeynep: 360° ✓, Kaan: 360° ✓. Cevap <b>B</b>.</p>` },
{ q: `<p>Bir öğrencinin girdiği 5 denemedeki netleri çizgi grafiğinde gösterilmiştir: 60, 65, 70, 68 ve 72.</p><p>Buna göre bu öğrencinin 5 denemedeki net ortalaması kaçtır?</p>`,
  c: [`66`, `67`, `68`, `70`], a: "B",
  s: `<p>Toplam: 60 + 65 + 70 + 68 + 72 = 335. Ortalama: 335 ÷ 5 = <b>67</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Bir manavın bir günde sattığı meyveler sütun grafiğinde gösterilmiştir: elma 30 kg, armut 20 kg, muz 10 kg.</p><p>Bu veriler daire grafiğinde gösterilirse dilimlerin merkez açıları aşağıdakilerden hangisi olur?</p>`,
  c: [`Elma 150°, Armut 120°, Muz 90°`, `Elma 180°, Armut 90°, Muz 90°`, `Elma 160°, Armut 120°, Muz 80°`, `Elma 180°, Armut 120°, Muz 60°`], a: "D",
  s: `<p>Toplam 60 kg → 1 kg = 360° ÷ 60 = 6°.</p><p>Elma 30 · 6 = 180°, armut 20 · 6 = 120°, muz 10 · 6 = 60°. Cevap <b>D</b>.</p>` },
{ q: `<p>Bir fabrikada üç vardiyada üretilen ürünlerin dağılımını gösteren daire grafiğinde 1. vardiyanın dilimi 150°, 2. vardiyanınki 120°, 3. vardiyanınki 90°’dir. 3. vardiyada 2700 ürün üretilmiştir.</p><p>Buna göre 1. vardiyada kaç ürün üretilmiştir?</p>`,
  c: [`3600`, `4050`, `4500`, `5400`], a: "C",
  s: `<p>90° → 2700 ürün ise 30° → 900 ürün.</p><p>1. vardiya 150° = 5 · 30° → 5 · 900 = <b>4500</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Bir haber sitesinde iki markanın satışları sütun grafiğinde verilmiştir. Grafikte dikey eksen 50’den başlamakta; K markasının sütunu 52, L markasının sütunu 56 değerine kadar uzanmaktadır. Bu yüzden L’nin sütunu K’nin sütunundan üç kat uzun görünmektedir.</p><p>Bu grafikle ilgili aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [`Grafik, farkı olduğundan büyük gösterdiği için yanıltıcıdır.`, `K markasının satışı L’nin yarısıdır.`, `L markasının satışı K’nin üç katıdır.`, `İki markanın satışları birbirine eşittir.`], a: "A",
  s: `<p>Gerçek değerler 52 ve 56’dır; L, K’den yalnızca 4 birim fazladır (yaklaşık %8). Eksen 50’den başladığı için sütun boyları 2 ve 6 birim görünür ve fark üç kat gibi algılanır.</p><p>Grafik <b>yanıltıcıdır</b>; grafik okurken eksenin başlangıç değerine dikkat edilmelidir. Cevap <b>A</b>.</p>` },
{ q: `<p>450 kişinin katıldığı bir ankette “Evet” cevabını verenlerin sayısı 150’dir.</p><p>Bu sonuç daire grafiğinde gösterilirse “Evet” dilimine ait merkez açı kaç derece olur?</p>`,
  c: [`100`, `120`, `135`, `150`], a: "B",
  s: `<p>{{150|450}} = {{1|3}} → {{1|3}} · 360° = <b>120°</b>. Cevap <b>B</b>.</p>` }
]
});
