LGS.add({
id: "mat-cebir",
summary: `
<h3>1. Cebirsel İfade Kavramları</h3>
<p>3x² − 5x + 7 ifadesinde: <b>terimler</b> 3x², −5x, 7; <b>katsayılar</b> 3 ve −5; <b>sabit terim</b> 7; <b>değişken</b> x. Değişkenleri ve üsleri aynı olan terimler <b>benzer terimlerdir</b> ve toplanıp çıkarılabilir: 5x² + 2x² = 7x².</p>
<h3>2. Cebirsel İfadelerle Çarpma</h3>
<ul>
<li>Tek terim × çok terim: 3x(2x − 5) = 6x² − 15x</li>
<li>İki terimli × iki terimli (her terim diğer parantezdeki her terimle çarpılır): (2x + 3)(x − 4) = 2x² − 8x + 3x − 12 = 2x² − 5x − 12</li>
</ul>
<div class="fig"><svg viewBox="0 0 420 200" width="420" role="img" aria-label="(x+5)(x+2) alan modeli">
<rect x="20" y="20" width="150" height="150" fill="#bfdbfe" stroke="#1d4ed8"/><rect x="170" y="20" width="100" height="150" fill="#fde68a" stroke="#b45309"/>
<rect x="20" y="170" width="150" height="20" fill="#fde68a" stroke="#b45309"/><rect x="170" y="170" width="100" height="20" fill="#fecaca" stroke="#b91c1c"/>
<g font-size="14" text-anchor="middle"><text x="95" y="100">x²</text><text x="220" y="100">5x</text><text x="95" y="185">2x</text><text x="220" y="185">10</text>
<text x="95" y="14">x</text><text x="220" y="14">5</text><text x="10" y="100">x</text><text x="10" y="185">2</text></g>
<text x="290" y="90" font-size="13">(x + 5)(x + 2)</text><text x="290" y="110" font-size="13">= x² + 7x + 10</text>
</svg><figcaption>Alan modeli: Dikdörtgenin alanı parçaların alanları toplamıdır.</figcaption></div>
<h3>3. Özdeşlikler</h3>
<div class="tbl"><table>
<tr><th>Özdeşlik</th><th>Örnek</th></tr>
<tr><td><b>(a + b)² = a² + 2ab + b²</b></td><td>(x + 3)² = x² + 6x + 9</td></tr>
<tr><td><b>(a − b)² = a² − 2ab + b²</b></td><td>(3x − 2)² = 9x² − 12x + 4</td></tr>
<tr><td><b>(a − b)(a + b) = a² − b²</b> (iki kare farkı)</td><td>(x − 7)(x + 7) = x² − 49</td></tr>
</table></div>
<div class="two">
<div class="fig"><svg viewBox="0 0 200 200" width="200" role="img" aria-label="(a+b)^2 alan modeli">
<rect x="10" y="10" width="120" height="120" fill="#bfdbfe" stroke="#1d4ed8"/><rect x="130" y="10" width="60" height="120" fill="#fde68a" stroke="#b45309"/><rect x="10" y="130" width="120" height="60" fill="#fde68a" stroke="#b45309"/><rect x="130" y="130" width="60" height="60" fill="#fecaca" stroke="#b91c1c"/>
<g font-size="14" text-anchor="middle"><text x="70" y="75">a²</text><text x="160" y="75">ab</text><text x="70" y="165">ab</text><text x="160" y="165">b²</text></g>
</svg><figcaption>(a + b)² = a² + 2ab + b²</figcaption></div>
<div class="note"><b>Sık hata:</b> (a + b)² ≠ a² + b²! Ortadaki 2ab terimini unutma. <br><br><b>Hesap kolaylığı:</b> 101² − 99² = (101 − 99)(101 + 99) = 2 · 200 = 400; 98² = (100 − 2)² = 10000 − 400 + 4 = 9604.</div>
</div>
<h3>4. Çarpanlara Ayırma</h3>
<ul>
<li><b>Ortak çarpan parantezine alma:</b> 6x²y − 9xy² = 3xy(2x − 3y)</li>
<li><b>İki kare farkı:</b> 4x² − 25 = (2x − 5)(2x + 5)</li>
<li><b>Tam kare:</b> x² − 10x + 25 = (x − 5)²; 4x² + 12x + 9 = (2x + 3)²</li>
</ul>
<div class="key"><b>LGS ipucu:</b> Alanı verilen kare/dikdörtgenin kenarlarını bulmak için ifadeyi çarpanlarına ayır. Alan 9x² + 24x + 16 ise kare kenarı 3x + 4’tür. Kenarlardan uzatma-kısaltma yapılan sorularda önce yeni kenarları yaz.</div>
`,
qs: [
{ q: `<p>(2x + 3)(x − 4) ifadesinin eşiti aşağıdakilerden hangisidir?</p>`,
  c: [`2x² − 12`, `2x² + 5x − 12`, `2x² − 11x − 12`, `2x² − 5x − 12`], a: "D",
  s: `<p>Her terimi çarpalım: 2x · x = 2x², 2x · (−4) = −8x, 3 · x = 3x, 3 · (−4) = −12.</p><p>2x² − 8x + 3x − 12 = <b>2x² − 5x − 12</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>(3x − 2)² ifadesinin eşiti aşağıdakilerden hangisidir?</p>`,
  c: [`9x² − 4`, `9x² + 4`, `9x² − 6x + 4`, `9x² − 12x + 4`], a: "D",
  s: `<p>(a − b)² = a² − 2ab + b² → (3x)² − 2 · 3x · 2 + 2² = <b>9x² − 12x + 4</b>.</p><p>9x² − 4 cevabı, ortadaki terimi unutmaktan kaynaklanan yaygın bir hatadır. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki dikdörtgen, dört parçaya ayrılmıştır.</p>
<svg viewBox="0 0 300 190" width="280"><rect x="20" y="20" width="150" height="130" fill="#bfdbfe" stroke="#1d4ed8"/><rect x="170" y="20" width="100" height="130" fill="#fde68a" stroke="#b45309"/><rect x="20" y="150" width="150" height="34" fill="#fde68a" stroke="#b45309"/><rect x="170" y="150" width="100" height="34" fill="#fecaca" stroke="#b91c1c"/><g font-size="13" text-anchor="middle"><text x="95" y="14">x</text><text x="220" y="14">5</text><text x="10" y="90">x</text><text x="10" y="172">2</text></g></svg>
<p>Bu dikdörtgenin alanını veren cebirsel ifade aşağıdakilerden hangisidir?</p>`,
  c: [`x² + 7x + 10`, `x² + 10x + 7`, `x² + 7`, `2x + 7`], a: "A",
  s: `<p>Kenarlar x + 5 ve x + 2 → alan (x + 5)(x + 2).</p><p>Parçalar: x · x = x², 5 · x = 5x, x · 2 = 2x, 5 · 2 = 10 → <b>x² + 7x + 10</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>101² − 99² işleminin sonucu kaçtır?</p>`,
  c: [`2`, `200`, `400`, `4000`], a: "C",
  s: `<p>İki kare farkı: a² − b² = (a − b)(a + b).</p><p>(101 − 99)(101 + 99) = 2 · 200 = <b>400</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>x² − 49 ifadesinin çarpanlarına ayrılmış biçimi aşağıdakilerden hangisidir?</p>`,
  c: [`(x − 7)²`, `x(x − 49)`, `(x + 7)²`, `(x − 7)(x + 7)`], a: "D",
  s: `<p>49 = 7² olduğundan ifade iki kare farkıdır: x² − 7² = <b>(x − 7)(x + 7)</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>6x²y − 9xy² ifadesi ortak çarpan parantezine alındığında aşağıdakilerden hangisi elde edilir?</p>`,
  c: [`3x(2xy − 3y²)`, `6xy(x − 9y)`, `3xy(2x − 3y)`, `xy(6x − 3y)`], a: "C",
  s: `<p>Katsayıların EBOB’u 3; ortak değişkenler x ve y → ortak çarpan 3xy.</p><p>6x²y ÷ 3xy = 2x, 9xy² ÷ 3xy = 3y → <b>3xy(2x − 3y)</b>. A da doğru bir eşitlik olsa da en büyük ortak çarpan alınmamıştır. Cevap <b>C</b>.</p>` },
{ q: `<p>Alanı (4x² + 12x + 9) cm² olan kare biçimindeki bir halının çevresinin uzunluğunu santimetre cinsinden veren ifade aşağıdakilerden hangisidir?</p>`,
  c: [`2x + 3`, `4x + 6`, `8x + 12`, `16x + 36`], a: "C",
  s: `<p>4x² + 12x + 9 = (2x)² + 2 · 2x · 3 + 3² = (2x + 3)² → kenar 2x + 3.</p><p>Çevre = 4(2x + 3) = <b>8x + 12</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>(5x² − 3x + 2) − (2x² + x − 6) işleminin sonucu aşağıdakilerden hangisidir?</p>`,
  c: [`3x² − 2x − 4`, `7x² − 2x − 4`, `3x² − 4x − 4`, `3x² − 4x + 8`], a: "D",
  s: `<p>Çıkarmada ikinci parantezin içindeki terimlerin işaretleri değişir: 5x² − 3x + 2 − 2x² − x + 6.</p><p>Benzer terimler: (5 − 2)x² + (−3 − 1)x + (2 + 6) = <b>3x² − 4x + 8</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>a + b = 7 ve a · b = 10 olduğuna göre a² + b² kaçtır?</p>`,
  c: [`29`, `39`, `49`, `69`], a: "A",
  s: `<p>(a + b)² = a² + 2ab + b² → 49 = a² + b² + 20.</p><p>a² + b² = 49 − 20 = <b>29</b>. (Kontrol: a = 5, b = 2 → 25 + 4 = 29.) Cevap <b>A</b>.</p>` },
{ q: `<p>Kare biçimindeki bir bahçenin bir kenarı 3 m uzatılıp diğer kenarı 3 m kısaltılarak dikdörtgen biçiminde yeni bir bahçe elde ediliyor.</p><p>Buna göre yeni bahçenin alanı, eski bahçenin alanına göre nasıl değişir?</p>`,
  c: [`Değişmez.`, `6 m² azalır.`, `9 m² azalır.`, `9 m² artar.`], a: "C",
  s: `<p>Eski bahçe x · x = x². Yeni bahçe (x + 3)(x − 3) = x² − 9.</p><p>Alan <b>9 m² azalır</b> (kenar uzunluğundan bağımsız olarak). Cevap <b>C</b>.</p>` },
{ q: `<p>Kenar uzunlukları (2x + 1) cm ve (x + 3) cm olan dikdörtgen biçimindeki bir kartondan, bir kenarı x cm olan kare biçiminde bir parça kesilip çıkarılıyor.</p><p>Kalan kartonun alanını santimetrekare cinsinden veren ifade aşağıdakilerden hangisidir?</p>`,
  c: [`x² + 7x + 3`, `x² + 6x + 3`, `2x² + 7x + 3`, `x² + 4x + 3`], a: "A",
  s: `<p>Dikdörtgen: (2x + 1)(x + 3) = 2x² + 6x + x + 3 = 2x² + 7x + 3.</p><p>Kare çıkarılınca: 2x² + 7x + 3 − x² = <b>x² + 7x + 3</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>Bir kenarı x cm olan kare biçimindeki bir fotoğrafın her kenarına 2 cm genişliğinde bir çerçeve yapılıyor.</p>
<svg viewBox="0 0 160 160" width="150"><rect x="10" y="10" width="140" height="140" fill="#d6b48c" stroke="#7c4a1e"/><rect x="30" y="30" width="100" height="100" fill="#bfdbfe" stroke="#1d4ed8"/><text x="80" y="85" text-anchor="middle" font-size="13">x</text><text x="20" y="85" text-anchor="middle" font-size="11">2</text></svg>
<p>Buna göre çerçevenin (yalnızca kahverengi bölgenin) alanı kaç santimetrekaredir?</p>`,
  c: [`4x + 4`, `4x + 16`, `8x + 4`, `8x + 16`], a: "D",
  s: `<p>Çerçeveli büyük karenin kenarı x + 2 + 2 = x + 4 → alanı (x + 4)² = x² + 8x + 16.</p><p>Çerçeve = (x² + 8x + 16) − x² = <b>8x + 16</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki eşitliklerden hangisi bir <b>özdeşliktir</b>?</p>`,
  c: [`(x + 2)² = x² + 4`, `(x + 2)² = x² + 4x + 4`, `(x − 2)² = x² − 4`, `(x + 2)(x − 2) = x² − 4x − 4`], a: "B",
  s: `<p>Özdeşlik, değişkenin <b>her değeri için</b> doğru olan eşitliktir. (a + b)² = a² + 2ab + b² → (x + 2)² = x² + 4x + 4 ✓.</p><p>Diğerleri x = 1 için denenirse yanlış çıkar: 9 ≠ 5; 1 ≠ −3; −3 ≠ −7. Cevap <b>B</b>.</p>` },
{ q: `<p>98² sayısı, özdeşlikler kullanılarak hesaplanmak isteniyor.</p><p>Buna göre 98²’nin değeri kaçtır?</p>`,
  c: [`9404`, `9604`, `9616`, `9804`], a: "B",
  s: `<p>98 = 100 − 2 → (100 − 2)² = 100² − 2 · 100 · 2 + 2² = 10 000 − 400 + 4 = <b>9604</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>x² − 10x + 25 ifadesinin çarpanlarına ayrılmış biçimi aşağıdakilerden hangisidir?</p>`,
  c: [`(x − 5)²`, `(x + 5)²`, `(x − 5)(x + 5)`, `(x − 25)(x + 1)`], a: "A",
  s: `<p>x² = x · x, 25 = 5², −10x = −2 · x · 5 → tam kare: <b>(x − 5)²</b>.</p><p>Kontrol: (x − 5)² = x² − 10x + 25 ✓. Cevap <b>A</b>.</p>` },
{ q: `<p>a ve b birer gerçek sayı olmak üzere a − b = 3 ve a² − b² = 39’dur.</p><p>Buna göre a + b kaçtır?</p>`,
  c: [`9`, `12`, `13`, `36`], a: "C",
  s: `<p>a² − b² = (a − b)(a + b) → 39 = 3 · (a + b) → a + b = <b>13</b>. (a = 8, b = 5.) Cevap <b>C</b>.</p>` },
{ q: `<p>Bir otoparkta otomobilin günlük ücreti x TL’dir. Minibüsün günlük ücreti ise otomobilinkinden 15 TL fazladır.</p><p>Bu otoparka bir günde 4 otomobil ve 3 minibüs park ettiğine göre otoparkın o günkü gelirini TL cinsinden veren cebirsel ifade aşağıdakilerden hangisidir?</p>`,
  c: [`7x + 15`, `7x + 45`, `4x + 45`, `12x + 15`], a: "B",
  s: `<p>Otomobil geliri 4x, minibüs ücreti x + 15 → minibüs geliri 3(x + 15) = 3x + 45.</p><p>Toplam: 4x + 3x + 45 = <b>7x + 45</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Bir kenarı 2x cm olan kare biçimindeki bir kartonun dört köşesinden, birer kenarı 3 cm olan dört kare kesilip çıkarılıyor.</p><p>Kalan kartonun alanını veren ifadenin çarpanlarına ayrılmış biçimi aşağıdakilerden hangisidir?</p>`,
  c: [`4(x − 3)(x + 3)`, `(2x − 3)(2x + 3)`, `4(x − 3)²`, `(2x − 6)²`], a: "A",
  s: `<p>Karton 4x², kesilen 4 kare 4 · 9 = 36 cm² → kalan 4x² − 36.</p><p>4x² − 36 = 4(x² − 9) = <b>4(x − 3)(x + 3)</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki büyük kare, dört parçadan oluşmaktadır: kenarı a olan kare, kenarı b olan kare ve kenarları a ile b olan iki dikdörtgen.</p>
<svg viewBox="0 0 200 200" width="170"><rect x="10" y="10" width="120" height="120" fill="#bfdbfe" stroke="#1d4ed8"/><rect x="130" y="10" width="60" height="120" fill="#fde68a" stroke="#b45309"/><rect x="10" y="130" width="120" height="60" fill="#fde68a" stroke="#b45309"/><rect x="130" y="130" width="60" height="60" fill="#fecaca" stroke="#b91c1c"/><g font-size="13" text-anchor="middle"><text x="70" y="75">a</text><text x="160" y="165">b</text></g></svg>
<p>Bu model aşağıdaki özdeşliklerden hangisini göstermektedir?</p>`,
  c: [`(a − b)² = a² − 2ab + b²`, `(a + b)² = a² + 2ab + b²`, `(a − b)(a + b) = a² − b²`, `(a + b)² = a² + b²`], a: "B",
  s: `<p>Büyük karenin kenarı a + b → alanı (a + b)². Parçaların alanları: a², b² ve iki tane ab.</p><p>(a + b)² = <b>a² + 2ab + b²</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>(x + 1)(x − 1) − x² ifadesinin değeri, x’in her gerçek sayı değeri için kaçtır?</p>`,
  c: [`−2`, `−1`, `0`, `1`], a: "B",
  s: `<p>(x + 1)(x − 1) = x² − 1 → x² − 1 − x² = <b>−1</b>.</p><p>Sonuç x’e bağlı değildir; örneğin x = 5 için 24 − 25 = −1. Cevap <b>B</b>.</p>` }
]
});
