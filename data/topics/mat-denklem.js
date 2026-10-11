LGS.add({
id: "mat-denklem",
summary: `
<h3>1. Birinci Dereceden Bir Bilinmeyenli Denklemler</h3>
<p>ax + b = c biçimindeki eşitliklerdir. Eşitliğin her iki tarafına <b>aynı işlem</b> yapılarak x yalnız bırakılır (terazi gibi).</p>
<div class="note"><b>Adımlar:</b> 1) Parantezleri aç. 2) Kesirli ise paydaları eşitle (her terimi payda EKOK’u ile çarp). 3) Bilinmeyenleri bir tarafa, sayıları diğer tarafa topla. 4) Katsayıya böl.<br>Örnek: 3(x − 2) + 5 = 2x + 7 → 3x − 1 = 2x + 7 → x = 8.</div>
<h3>2. Koordinat Sistemi</h3>
<div class="fig"><svg viewBox="0 0 520 260" width="520" role="img" aria-label="Koordinat sistemi ve y=2x+1 doğrusu">
<g stroke="#e5e7eb"><line x1="20" y1="30" x2="260" y2="30"/><line x1="20" y1="60" x2="260" y2="60"/><line x1="20" y1="90" x2="260" y2="90"/><line x1="20" y1="150" x2="260" y2="150"/><line x1="20" y1="180" x2="260" y2="180"/><line x1="20" y1="210" x2="260" y2="210"/><line x1="20" y1="240" x2="260" y2="240"/><line x1="50" y1="10" x2="50" y2="250"/><line x1="80" y1="10" x2="80" y2="250"/><line x1="110" y1="10" x2="110" y2="250"/><line x1="170" y1="10" x2="170" y2="250"/><line x1="200" y1="10" x2="200" y2="250"/><line x1="230" y1="10" x2="230" y2="250"/></g>
<line x1="15" y1="120" x2="265" y2="120" stroke="#333"/><line x1="140" y1="5" x2="140" y2="255" stroke="#333"/>
<line x1="80" y1="210" x2="185" y2="0" stroke="#dc2626" stroke-width="3"/>
<g font-size="11"><text x="250" y="114">x</text><text x="146" y="14">y</text><text x="200" y="40">I. bölge (+,+)</text><text x="30" y="40">II. bölge (−,+)</text><text x="30" y="235">III. bölge (−,−)</text><text x="170" y="235">IV. bölge (+,−)</text></g>
<g fill="#dc2626"><circle cx="140" cy="90" r="4"/><circle cx="170" cy="30" r="4"/></g>
<path d="M140,90 L170,90 L170,30" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="4 3"/>
<g font-size="12"><text x="150" y="104" fill="#2563eb">1</text><text x="175" y="64" fill="#2563eb">2</text><text x="178" y="26" fill="#dc2626">y = 2x + 1</text></g>
<g font-size="13"><text x="290" y="40">Nokta: (x, y) → önce yatay, sonra dikey.</text><text x="290" y="70">Doğrusal ilişki: y = mx + n</text><text x="290" y="100">m = eğim, n = y eksenini kestiği yer</text><text x="290" y="130">Eğim = {{dikey değişim|yatay değişim}}</text><text x="290" y="160">y = 2x + 1 için: x 1 artınca y 2 artar.</text><text x="290" y="190">(0, 1) ve (1, 3) doğru üzerindedir.</text></g>
</svg><figcaption>Bir doğru üzerindeki her nokta denklemi sağlar.</figcaption></div>
<h3>3. Doğrusal İlişkiler, Tablo ve Grafik</h3>
<ul>
<li>Eşit adımlarla artan/azalan tablolar doğrusal ilişkidir: x: 0, 1, 2, 3 → y: 5, 8, 11, 14 ⇒ y = 3x + 5.</li>
<li>Doğrunun eksenleri kestiği noktalar: x = 0 koy → y eksenini kestiği yer; y = 0 koy → x eksenini kestiği yer.</li>
<li>Gerçek hayat: Sabit ücret + birim ücret · miktar (taksi, telefon tarifesi), başlangıç miktarı − saatlik azalma · zaman (depo, mum).</li>
</ul>
<h3>4. Eğim</h3>
<div class="tbl"><table>
<tr><th>Doğru</th><th>Eğim</th><th>Örnek</th></tr>
<tr><td>Sağa doğru yükselen</td><td>Pozitif</td><td>y = 2x + 1</td></tr>
<tr><td>Sağa doğru alçalan</td><td>Negatif</td><td>y = −x + 3</td></tr>
<tr><td>x eksenine paralel (yatay)</td><td>0</td><td>y = 4</td></tr>
<tr><td>y eksenine paralel (dikey)</td><td>Tanımsız</td><td>x = 2</td></tr>
</table></div>
<div class="key"><b>Gerçek hayatta eğim:</b> Rampa, yol, merdiven: eğim = {{yükseklik|yatay uzaklık}}. Yüzde eğim: %8 eğim → 100 m yatayda 8 m yükselme. İki nokta verilirse: m = {{y₂ − y₁|x₂ − x₁}}.</div>
`,
qs: [
{ q: `<p>3(x − 2) + 5 = 2x + 7 denkleminin çözümü kaçtır?</p>`,
  c: [`6`, `7`, `8`, `9`], a: "C",
  s: `<p>Parantezi açalım: 3x − 6 + 5 = 2x + 7 → 3x − 1 = 2x + 7.</p><p>3x − 2x = 7 + 1 → x = <b>8</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>{{x + 1|3}} − {{x − 2|4}} = 1 denkleminin çözümü kaçtır?</p>`,
  c: [`2`, `4`, `6`, `8`], a: "A",
  s: `<p>Her terimi paydaların EKOK’u olan 12 ile çarpalım: 4(x + 1) − 3(x − 2) = 12.</p><p>4x + 4 − 3x + 6 = 12 → x + 10 = 12 → x = <b>2</b>. Dikkat: −3 · (−2) = +6. Cevap <b>A</b>.</p>` },
{ q: `<p>Bir sinemada tam bilet 120 TL, öğrenci bileti 80 TL’dir. Bir grup için alınan 15 biletin toplam fiyatı 1440 TL’dir.</p><p>Buna göre alınan biletlerin kaç tanesi öğrenci biletidir?</p>`,
  c: [`5`, `6`, `8`, `9`], a: "D",
  s: `<p>Öğrenci bileti s olsun; tam bilet 15 − s. 80s + 120(15 − s) = 1440 → 80s + 1800 − 120s = 1440.</p><p>−40s = −360 → s = <b>9</b>. Kontrol: 9 · 80 + 6 · 120 = 720 + 720 = 1440 ✓. Cevap <b>D</b>.</p>` },
{ q: `<p>Ardışık üç çift doğal sayının toplamı 78’dir.</p><p>Bu sayılardan en büyüğü kaçtır?</p>`,
  c: [`28`, `30`, `32`, `34`], a: "A",
  s: `<p>Sayılar x, x + 2, x + 4 → 3x + 6 = 78 → 3x = 72 → x = 24.</p><p>Sayılar 24, 26, 28 → en büyüğü <b>28</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>Koordinat sisteminde (3, −2) noktası hangi bölgede yer alır?</p>`,
  c: [`I. bölge`, `II. bölge`, `III. bölge`, `IV. bölge`], a: "D",
  s: `<p>x = 3 pozitif (sağda), y = −2 negatif (aşağıda) → (+, −) → <b>IV. bölge</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki tabloda x ile y arasında doğrusal bir ilişki vardır.</p><table><tr><th>x</th><td>0</td><td>1</td><td>2</td><td>3</td></tr><tr><th>y</th><td>5</td><td>8</td><td>11</td><td>14</td></tr></table><p>Buna göre bu ilişkiyi gösteren denklem aşağıdakilerden hangisidir?</p>`,
  c: [`y = 5x + 3`, `y = 3x + 5`, `y = x + 5`, `y = 3x + 2`], a: "B",
  s: `<p>x 1 arttıkça y 3 artıyor → eğim 3. x = 0 için y = 5 → sabit terim 5.</p><p><b>y = 3x + 5</b>. Kontrol: x = 3 → 9 + 5 = 14 ✓. Cevap <b>B</b>.</p>` },
{ q: `<p>2x + 3y = 12 doğrusu ile koordinat eksenleri arasında kalan üçgensel bölgenin alanı kaç birimkaredir?</p>`,
  c: [`6`, `12`, `18`, `24`], a: "B",
  s: `<p>x = 0 → 3y = 12 → y = 4: (0, 4). y = 0 → 2x = 12 → x = 6: (6, 0).</p><p>Dik kenarları 6 ve 4 olan dik üçgen: {{6 · 4|2}} = <b>12</b> birimkare. Cevap <b>B</b>.</p>` },
{ q: `<p>Koordinat sisteminde (1, 2) ve (4, 11) noktalarından geçen doğrunun eğimi kaçtır?</p>`,
  c: [`{{1|3}}`, `2`, `3`, `9`], a: "C",
  s: `<p>Eğim = {{y₂ − y₁|x₂ − x₁}} = {{11 − 2|4 − 1}} = {{9|3}} = <b>3</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Bir okulun girişine yapılan engelli rampası, 4 m yatay uzaklıkta 1,2 m yükselmektedir.</p>
<svg viewBox="0 0 260 110" width="250"><polygon points="20,95 230,95 230,35" fill="#e5e7eb" stroke="#555"/><text x="125" y="108" text-anchor="middle" font-size="12">4 m</text><text x="238" y="70" font-size="12">1,2 m</text></svg>
<p>Buna göre bu rampanın eğimi kaçtır?</p>`,
  c: [`0,12`, `0,3`, `0,48`, `3,3`], a: "B",
  s: `<p>Eğim = {{dikey uzunluk|yatay uzunluk}} = {{1,2|4}} = <b>0,3</b> (yani %30). Cevap <b>B</b>.</p>` },
{ q: `<p>2000 litre su bulunan bir depodan her saat 150 litre su, sabit hızla kullanılmaktadır.</p><p>Buna göre kaç saat sonra depoda 800 litre su kalır?</p>`,
  c: [`8`, `9`, `10`, `12`], a: "A",
  s: `<p>x saat sonra kalan su: y = 2000 − 150x. 2000 − 150x = 800 → 150x = 1200 → x = <b>8</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki noktalardan hangisi y = −2x + 4 doğrusu üzerindedir?</p>`,
  c: [`(1, 2)`, `(2, 1)`, `(0, −4)`, `(3, 2)`], a: "A",
  s: `<p>Noktayı denklemde yerine koyarız: (1, 2) → −2 · 1 + 4 = 2 ✓.</p><p>(2, 1) → 0 ≠ 1; (0, −4) → 4 ≠ −4; (3, 2) → −2 ≠ 2. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki doğrulardan hangisinin eğimi <b>negatiftir</b>?</p>`,
  c: [`y = 2x`, `y = 3`, `y = −x + 3`, `x = 4`], a: "C",
  s: `<p>y = mx + n biçiminde m eğimdir. y = −x + 3 → m = −1 (negatif, doğru sağa doğru alçalır).</p><p>y = 2x → 2 (pozitif); y = 3 → 0 (yatay); x = 4 → tanımsız (dikey). Cevap <b>C</b>.</p>` },
{ q: `<p>İki telefon şirketinin aylık tarifeleri şöyledir:</p><p>• K şirketi: Aylık sabit 50 TL + dakikası 2 TL<br>• L şirketi: Aylık sabit 20 TL + dakikası 3 TL</p><p>Buna göre aylık kaç dakikalık konuşmada iki şirkete ödenecek ücret eşit olur?</p>`,
  c: [`15`, `20`, `25`, `30`], a: "D",
  s: `<p>x dakika için: 50 + 2x = 20 + 3x → 50 − 20 = 3x − 2x → x = <b>30</b>.</p><p>30 dakikadan az konuşan için L, fazla konuşan için K şirketi daha ucuzdur. Cevap <b>D</b>.</p>` },
{ q: `<p>2x + a = 11 denkleminin çözümü x = 3’tür.</p><p>Buna göre a kaçtır?</p>`,
  c: [`3`, `5`, `7`, `11`], a: "B",
  s: `<p>Çözüm denklemi sağlar: 2 · 3 + a = 11 → 6 + a = 11 → a = <b>5</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Koordinat sisteminde köşeleri A(−2, 1), B(4, 1) ve C(4, 5) olan bir dikdörtgenin dördüncü köşesi D’dir.</p><p>Buna göre ABCD dikdörtgeninin alanı kaç birimkaredir?</p>`,
  c: [`20`, `24`, `30`, `36`], a: "B",
  s: `<p>D(−2, 5). Yatay kenar: 4 − (−2) = 6 birim; dikey kenar: 5 − 1 = 4 birim.</p><p>Alan = 6 · 4 = <b>24</b> birimkare. Cevap <b>B</b>.</p>` },
{ q: `<p>Bir doğru, y eksenini (0, 2) noktasında, x eksenini (3, 0) noktasında kesmektedir.</p><p>Bu doğrunun denklemi aşağıdakilerden hangisidir?</p>`,
  c: [`2x + 3y = 6`, `3x + 2y = 6`, `2x − 3y = 6`, `x + y = 5`], a: "A",
  s: `<p>Noktaları deneyelim: 2x + 3y = 6 → (0, 2): 0 + 6 = 6 ✓; (3, 0): 6 + 0 = 6 ✓.</p><p>3x + 2y = 6 → (0, 2): 4 ≠ 6. 2x − 3y = 6 → (0, 2): −6 ≠ 6. x + y = 5 → (0, 2): 2 ≠ 5. Cevap <b>A</b>.</p>` },
{ q: `<p>Koordinat sisteminde y = −1 doğrusu ile ilgili aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [`y eksenine paraleldir.`, `Eğimi −1’dir.`, `x eksenine paraleldir ve eğimi 0’dır.`, `Orijinden geçer.`], a: "C",
  s: `<p>y = −1 doğrusunun her noktasında y değeri −1’dir: (0, −1), (5, −1)… Bu doğru <b>yataydır</b>, x eksenine paraleldir.</p><p>Yatay doğrularda dikey değişim 0 olduğundan <b>eğim 0</b>’dır. Orijinden geçmez. Cevap <b>C</b>.</p>` },
{ q: `<p>Bir şehirde taksi ücreti, 40 TL açılış ücreti ile gidilen her kilometre için 25 TL’den oluşmaktadır. Bir yolcu taksiye 315 TL ödemiştir.</p><p>Buna göre bu yolcu kaç kilometre yol gitmiştir?</p>`,
  c: [`8`, `9`, `10`, `11`], a: "D",
  s: `<p>40 + 25x = 315 → 25x = 275 → x = <b>11</b> km. Cevap <b>D</b>.</p>` },
{ q: `<p>Bir trafik levhasında yolun eğiminin %8 olduğu belirtilmektedir.</p><p>Bu yolda yatay olarak 250 m ilerleyen bir araç kaç metre yükselmiş olur?</p>`,
  c: [`8`, `12`, `20`, `25`], a: "C",
  s: `<p>%8 eğim → {{8|100}}: yatayda 100 m’de 8 m yükselme.</p><p>250 m için: 250 · {{8|100}} = <b>20 m</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Dikdörtgen biçimindeki bir tarlanın çevresi 56 m’dir. Tarlanın uzun kenarı, kısa kenarının 3 katından 4 m eksiktir.</p><p>Buna göre tarlanın alanı kaç metrekaredir?</p>`,
  c: [`96`, `128`, `144`, `160`], a: "D",
  s: `<p>Kısa kenar x, uzun kenar 3x − 4. Çevre: 2(x + 3x − 4) = 56 → 4x − 4 = 28 → x = 8.</p><p>Uzun kenar 3 · 8 − 4 = 20. Alan = 8 · 20 = <b>160 m²</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>24 cm boyundaki bir mum yakıldığında her saat 3 cm kısalmaktadır.</p><p>Mumun x saat sonraki boyunu (y) gösteren denklem ve mumun kaç saatte biteceği aşağıdakilerden hangisinde doğru verilmiştir?</p>`,
  c: [`y = 24 − 3x; 8 saat`, `y = 24 + 3x; 8 saat`, `y = 3x − 24; 6 saat`, `y = 24 − 3x; 6 saat`], a: "A",
  s: `<p>Başlangıç boyu 24, her saat 3 cm azalıyor: <b>y = 24 − 3x</b>.</p><p>Mum bittiğinde y = 0: 24 − 3x = 0 → x = <b>8 saat</b>. Cevap <b>A</b>.</p>` }
]
});
