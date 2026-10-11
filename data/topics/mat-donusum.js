LGS.add({
id: "mat-donusum",
summary: `
<h3>1. Öteleme</h3>
<p>Bir şeklin, biçimi, büyüklüğü ve yönü değişmeden belirli bir doğrultuda kaydırılmasıdır. Öteleme sonunda şekil ile görüntüsü <b>eştir</b> ve <b>yönleri aynıdır</b>.</p>
<ul>
<li>a birim sağa → x + a; sola → x − a</li>
<li>b birim yukarı → y + b; aşağı → y − b</li>
<li>Örnek: K(2, 3) noktası 4 birim sola, 2 birim aşağı ötelenirse K′(−2, 1).</li>
</ul>
<h3>2. Yansıma</h3>
<p>Bir şeklin bir doğruya (yansıma doğrusu, ayna) göre simetriğinin alınmasıdır. Şekil ile görüntüsü <b>eştir</b> ama yönleri <b>terstir</b> (ayna görüntüsü). Karşılıklı noktaları birleştiren doğru parçası yansıma doğrusuna <b>diktir</b> ve doğru bu parçayı <b>ortalar</b>.</p>
<div class="fig"><svg viewBox="0 0 560 260" width="560" role="img" aria-label="Koordinat düzleminde öteleme ve yansıma">
<g stroke="#e5e7eb"><line x1="20" y1="20" x2="20" y2="240"/><line x1="50" y1="20" x2="50" y2="240"/><line x1="80" y1="20" x2="80" y2="240"/><line x1="110" y1="20" x2="110" y2="240"/><line x1="170" y1="20" x2="170" y2="240"/><line x1="200" y1="20" x2="200" y2="240"/><line x1="230" y1="20" x2="230" y2="240"/><line x1="260" y1="20" x2="260" y2="240"/><line x1="20" y1="20" x2="260" y2="20"/><line x1="20" y1="50" x2="260" y2="50"/><line x1="20" y1="80" x2="260" y2="80"/><line x1="20" y1="110" x2="260" y2="110"/><line x1="20" y1="170" x2="260" y2="170"/><line x1="20" y1="200" x2="260" y2="200"/><line x1="20" y1="230" x2="260" y2="230"/></g>
<line x1="15" y1="140" x2="265" y2="140" stroke="#333"/><line x1="140" y1="15" x2="140" y2="245" stroke="#333"/>
<polygon points="170,110 230,110 170,50" fill="#93c5fd" stroke="#1d4ed8"/>
<polygon points="170,170 230,170 170,230" fill="#fca5a5" stroke="#b91c1c"/>
<polygon points="110,110 50,110 110,50" fill="#86efac" stroke="#15803d"/>
<g font-size="11"><text x="234" y="80">şekil</text><text x="234" y="205">x eksenine göre</text><text x="234" y="219">yansıma</text><text x="22" y="40">y eksenine göre yansıma</text></g>
<g font-size="13"><text x="290" y="50">x eksenine göre yansıma: (x, y) → (x, −y)</text><text x="290" y="80">y eksenine göre yansıma: (x, y) → (−x, y)</text><text x="290" y="110">x = k doğrusuna göre: (x, y) → (2k − x, y)</text><text x="290" y="140">y = k doğrusuna göre: (x, y) → (x, 2k − y)</text><text x="290" y="175">Öteleme: (x, y) → (x + a, y + b)</text><text x="290" y="205">Hepsinde şekil ile görüntüsü EŞTİR:</text><text x="290" y="225">kenarlar, açılar, çevre, alan değişmez.</text></g>
</svg><figcaption>Mavi şeklin x eksenine (kırmızı) ve y eksenine (yeşil) göre yansımaları.</figcaption></div>
<h3>3. Ardışık Dönüşümler</h3>
<p>Bir şekle sırayla birden fazla dönüşüm uygulanabilir. Her adımda bir önceki görüntü kullanılır. <b>Sıra önemlidir:</b> (1, 2) önce 3 sağa ötelenip sonra y eksenine göre yansıtılırsa (−4, 2); önce yansıtılıp sonra ötelenirse (2, 2) olur.</p>
<div class="note"><b>İpucu:</b> Kareli zeminde yansıma yaparken her köşenin yansıma doğrusuna kaç kare uzaklıkta olduğunu say; görüntüyü doğrunun öbür tarafına aynı uzaklıkta yerleştir. İki yansıma (x ve y eksenlerine göre) art arda yapılırsa (x, y) → (−x, −y) olur.</div>
`,
qs: [
{ q: `<p>Koordinat düzleminde K(2, 3) noktası önce 4 birim sola, sonra 2 birim aşağı ötelenmiştir.</p><p>Buna göre K noktasının görüntüsünün koordinatları aşağıdakilerden hangisidir?</p>`,
  c: [`(6, 5)`, `(6, 1)`, `(−2, 5)`, `(−2, 1)`], a: "D",
  s: `<p>Sola öteleme x’i azaltır: 2 − 4 = −2. Aşağı öteleme y’yi azaltır: 3 − 2 = 1 → <b>(−2, 1)</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>P(−3, 5) noktasının x eksenine göre yansıması aşağıdakilerden hangisidir?</p>`,
  c: [`(3, 5)`, `(−3, −5)`, `(3, −5)`, `(5, −3)`], a: "B",
  s: `<p>x eksenine göre yansımada x aynı kalır, y’nin işareti değişir: (−3, 5) → <b>(−3, −5)</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>R(4, −1) noktasının y eksenine göre yansıması aşağıdakilerden hangisidir?</p>`,
  c: [`(−1, 4)`, `(4, 1)`, `(−4, 1)`, `(−4, −1)`], a: "D",
  s: `<p>y eksenine göre yansımada y aynı kalır, x’in işareti değişir: (4, −1) → <b>(−4, −1)</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Bir öteleme sonucunda (1, 2) noktası (5, −1) noktasına taşınmıştır.</p><p>Aynı öteleme (−2, 0) noktasına uygulanırsa görüntü aşağıdakilerden hangisi olur?</p>`,
  c: [`(2, 3)`, `(−6, 3)`, `(3, −2)`, `(2, −3)`], a: "D",
  s: `<p>(1, 2) → (5, −1): x 4 artmış (4 birim sağa), y 3 azalmış (3 birim aşağı).</p><p>(−2, 0) → (−2 + 4, 0 − 3) = <b>(2, −3)</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Bir şeklin bir doğruya göre yansıması ile ilgili aşağıdakilerden hangisi <b>yanlıştır</b>?</p>`,
  c: [`Şekil ile görüntüsü eştir.`, `Şeklin alanı ile görüntüsünün alanı eşittir.`, `Karşılıklı noktalar yansıma doğrusuna eşit uzaklıktadır.`, `Şekil ile görüntüsünün yönleri aynıdır.`], a: "D",
  s: `<p>Yansımada görüntü, şeklin <b>ayna görüntüsüdür</b>; yönü ters döner (sağ-sol ya da yukarı-aşağı yer değiştirir). Bu yüzden “yönleri aynıdır” ifadesi yanlıştır.</p><p>Öteleme yönü korur, yansıma yönü ters çevirir. Cevap <b>D</b>.</p>` },
{ q: `<p>M(3, 2) noktası önce x eksenine göre yansıtılıyor, sonra elde edilen görüntü 5 birim sola ötelenmiştir.</p><p>Buna göre son görüntünün koordinatları aşağıdakilerden hangisidir?</p>`,
  c: [`(−3, −2)`, `(−2, 2)`, `(8, −2)`, `(−2, −2)`], a: "D",
  s: `<p>x eksenine göre yansıma: (3, 2) → (3, −2). 5 birim sola öteleme: (3 − 5, −2) = <b>(−2, −2)</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki kareli zeminde K noktası ve d doğrusu verilmiştir. Ayrıca 1, 2, 3 ve 4 numaralı noktalar işaretlenmiştir.</p>
<svg viewBox="0 0 280 160" width="270"><g stroke="#e5e7eb"><line x1="10" y1="10" x2="10" y2="150"/><line x1="40" y1="10" x2="40" y2="150"/><line x1="70" y1="10" x2="70" y2="150"/><line x1="100" y1="10" x2="100" y2="150"/><line x1="160" y1="10" x2="160" y2="150"/><line x1="190" y1="10" x2="190" y2="150"/><line x1="220" y1="10" x2="220" y2="150"/><line x1="250" y1="10" x2="250" y2="150"/><line x1="10" y1="10" x2="270" y2="10"/><line x1="10" y1="40" x2="270" y2="40"/><line x1="10" y1="70" x2="270" y2="70"/><line x1="10" y1="100" x2="270" y2="100"/><line x1="10" y1="130" x2="270" y2="130"/></g><line x1="130" y1="5" x2="130" y2="155" stroke="#dc2626" stroke-width="2"/><text x="134" y="18" font-size="12" fill="#dc2626">d</text><circle cx="40" cy="70" r="5" fill="#1d4ed8"/><text x="28" y="62" font-size="12">K</text><g font-size="11"><circle cx="190" cy="70" r="4" fill="#555"/><text x="186" y="62">1</text><circle cx="220" cy="70" r="4" fill="#555"/><text x="216" y="62">2</text><circle cx="220" cy="40" r="4" fill="#555"/><text x="226" y="36">3</text><circle cx="250" cy="70" r="4" fill="#555"/><text x="246" y="62">4</text></g></svg>
<p>K noktasının d doğrusuna göre yansıması hangi numaralı noktadır?</p>`,
  c: [`1`, `2`, `3`, `4`], a: "B",
  s: `<p>K noktası d doğrusunun 3 birim solundadır. Görüntüsü aynı satırda, d’nin 3 birim sağında olmalıdır.</p><p>d’nin sağında 3. birimdeki nokta <b>2</b> numaralı noktadır (1 numara 2 birim, 4 numara 4 birim uzakta; 3 numara farklı satırda). Cevap <b>B</b>.</p>` },
{ q: `<p>Köşeleri K(1, 1), L(4, 1) ve M(1, 3) olan üçgen x eksenine göre yansıtılıyor.</p><p>Buna göre M noktasının görüntüsü aşağıdakilerden hangisidir?</p>`,
  c: [`(−1, 3)`, `(1, −3)`, `(−1, −3)`, `(3, 1)`], a: "B",
  s: `<p>x eksenine göre yansımada (x, y) → (x, −y): M(1, 3) → <b>(1, −3)</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki büyük harflerden hangisinin, harfi ortadan ikiye bölen <b>dikey</b> bir doğruya göre yansıması kendisiyle aynıdır?</p>`,
  c: [`F`, `L`, `M`, `N`], a: "C",
  s: `<p>M harfinin sol ve sağ yarıları birbirinin ayna görüntüsüdür; dikey simetri doğrusuna göre yansıması kendisidir.</p><p>F ve L’nin sağa bakan çizgileri yansımada sola bakar; N ise dikey doğruya göre simetrik değildir. Cevap <b>C</b>.</p>` },
{ q: `<p>Çevresi 20 cm, alanı 24 cm² olan bir dikdörtgen önce 3 birim sağa ötelenip sonra x eksenine göre yansıtılıyor.</p><p>Elde edilen son görüntünün çevresi ve alanı için aşağıdakilerden hangisi doğrudur?</p>`,
  c: [`Çevre 26 cm, alan 24 cm²`, `Çevre 20 cm, alan 24 cm²`, `Çevre 20 cm, alan 48 cm²`, `Çevre 40 cm, alan 48 cm²`], a: "B",
  s: `<p>Öteleme ve yansıma şeklin büyüklüğünü değiştirmez; görüntü şekle <b>eştir</b>.</p><p>Çevre 20 cm, alan 24 cm² olarak kalır. Cevap <b>B</b>.</p>` },
{ q: `<p>N(2, 3) noktası önce x eksenine, sonra y eksenine göre yansıtılıyor.</p><p>Buna göre son görüntü aşağıdakilerden hangisidir?</p>`,
  c: [`(2, −3)`, `(−2, 3)`, `(−2, −3)`, `(3, 2)`], a: "C",
  s: `<p>x eksenine göre: (2, 3) → (2, −3). y eksenine göre: (2, −3) → <b>(−2, −3)</b>. İki eksene göre art arda yansıma her iki koordinatın işaretini değiştirir. Cevap <b>C</b>.</p>` },
{ q: `<p>R(5, 1) noktasının x = 2 doğrusuna göre yansıması aşağıdakilerden hangisidir?</p>`,
  c: [`(−5, 1)`, `(−1, 1)`, `(1, 1)`, `(5, 3)`], a: "B",
  s: `<p>x = 2 dikey bir doğrudur; y değişmez. R, doğrunun 5 − 2 = 3 birim sağında → görüntü 3 birim solunda: x = 2 − 3 = −1.</p><p>Görüntü <b>(−1, 1)</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>S(3, 4) noktasının y = −1 doğrusuna göre yansıması aşağıdakilerden hangisidir?</p>`,
  c: [`(3, −4)`, `(3, −5)`, `(3, −6)`, `(−3, 4)`], a: "C",
  s: `<p>y = −1 yatay doğrudur; x değişmez. S, doğrunun 4 − (−1) = 5 birim üstünde → görüntü 5 birim altında: y = −1 − 5 = −6.</p><p>Görüntü <b>(3, −6)</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>T(−1, 4) noktası bir öteleme sonucunda T′(3, 1) noktasına taşınmıştır.</p><p>Bu öteleme aşağıdakilerden hangisidir?</p>`,
  c: [`4 birim sağa, 3 birim aşağı`, `4 birim sola, 3 birim yukarı`, `2 birim sağa, 5 birim aşağı`, `3 birim sağa, 4 birim aşağı`], a: "A",
  s: `<p>x: −1 → 3 (4 artmış → 4 birim sağa). y: 4 → 1 (3 azalmış → 3 birim aşağı). Cevap <b>A</b>.</p>` },
{ q: `<p>Kareli zeminde mavi üçgen ötelenerek kırmızı üçgen elde edilmiştir.</p>
<svg viewBox="0 0 290 190" width="280"><g stroke="#e5e7eb"><line x1="10" y1="10" x2="10" y2="180"/><line x1="40" y1="10" x2="40" y2="180"/><line x1="70" y1="10" x2="70" y2="180"/><line x1="100" y1="10" x2="100" y2="180"/><line x1="130" y1="10" x2="130" y2="180"/><line x1="160" y1="10" x2="160" y2="180"/><line x1="190" y1="10" x2="190" y2="180"/><line x1="220" y1="10" x2="220" y2="180"/><line x1="250" y1="10" x2="250" y2="180"/><line x1="280" y1="10" x2="280" y2="180"/><line x1="10" y1="10" x2="280" y2="10"/><line x1="10" y1="40" x2="280" y2="40"/><line x1="10" y1="70" x2="280" y2="70"/><line x1="10" y1="100" x2="280" y2="100"/><line x1="10" y1="130" x2="280" y2="130"/><line x1="10" y1="160" x2="280" y2="160"/></g><polygon points="40,160 100,160 40,100" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/><polygon points="190,100 250,100 190,40" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/></svg>
<p>Bu öteleme aşağıdakilerden hangisidir?</p>`,
  c: [`5 birim sağa, 2 birim yukarı`, `5 birim sağa, 3 birim yukarı`, `6 birim sağa, 2 birim yukarı`, `2 birim sağa, 5 birim yukarı`], a: "A",
  s: `<p>Mavi üçgenin dik açılı köşesi (sol alt) ile kırmızı üçgenin karşılık gelen köşesini karşılaştıralım: yatayda 5 kare sağa, dikeyde 2 kare yukarı kaymıştır.</p><p>Öteleme: <b>5 birim sağa, 2 birim yukarı</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>K(2, 5) noktasının bir doğruya göre yansıması K′(2, −1) noktasıdır.</p><p>Buna göre yansıma doğrusu aşağıdakilerden hangisidir?</p>`,
  c: [`x = 2`, `y = 2`, `y = 3`, `x ekseni`], a: "B",
  s: `<p>x değişmemiş, sadece y değişmiş → yansıma doğrusu yataydır. Yansıma doğrusu K ile K′ arasındaki doğru parçasını ortalar: y = {{5 + (−1)|2}} = 2.</p><p>Doğru: <b>y = 2</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>L(−3, 4) noktası önce 2 birim yukarı ötelenip sonra y eksenine göre yansıtılıyor.</p><p>Buna göre son görüntü aşağıdakilerden hangisidir?</p>`,
  c: [`(3, 6)`, `(−3, 6)`, `(3, 2)`, `(−3, −6)`], a: "A",
  s: `<p>2 birim yukarı: (−3, 4) → (−3, 6). y eksenine göre yansıma: (−3, 6) → <b>(3, 6)</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>Bir oyunda koordinat düzleminde (0, 0) noktasından başlayan bir robot önce 3 birim sağa, sonra 2 birim yukarı hareket ediyor. Ardından bulunduğu nokta x eksenine göre yansıtılıyor.</p><p>Robotun son konumu aşağıdakilerden hangisidir?</p>`,
  c: [`(3, 2)`, `(−3, 2)`, `(3, −2)`, `(−3, −2)`], a: "C",
  s: `<p>Hareketlerden sonra robot (3, 2) noktasındadır. x eksenine göre yansıma: (3, 2) → <b>(3, −2)</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>(−2, −3) noktası 5 birim sağa ve 4 birim yukarı ötelenmiştir.</p><p>Buna göre görüntü koordinat düzleminin hangi bölgesindedir?</p>`,
  c: [`I. bölge`, `II. bölge`, `III. bölge`, `IV. bölge`], a: "A",
  s: `<p>Görüntü: (−2 + 5, −3 + 4) = (3, 1) → x ve y pozitif → <b>I. bölge</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>Bir P noktası d doğrusuna 3 birim uzaklıktadır. P noktasının d doğrusuna göre yansıması P′ noktasıdır.</p><p>Buna göre |PP′| uzunluğu kaç birimdir?</p>`,
  c: [`3`, `4,5`, `6`, `9`], a: "C",
  s: `<p>Görüntü, doğrunun öbür tarafında yine 3 birim uzaklıktadır ve PP′ doğruya diktir. |PP′| = 3 + 3 = <b>6</b> birim. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki dönüşümlerden hangisinde şekil ile görüntüsünün <b>yönleri</b> birbirinin tersi olur (sağ-sol ya da yukarı-aşağı yer değiştirir)?</p>`,
  c: [`Sağa öteleme`, `Yukarı öteleme`, `Bir doğruya göre yansıma`, `Önce sağa, sonra aşağı öteleme`], a: "C",
  s: `<p>Öteleme yalnızca kaydırır, yön korunur. <b>Yansımada</b> görüntü ayna görüntüsüdür; yön ters döner. Cevap <b>C</b>.</p>` },
{ q: `<p>Uç noktaları K(1, 1) ve L(4, 5) olan doğru parçası 2 birim sola ve 3 birim aşağı ötelenerek K′L′ doğru parçası elde ediliyor.</p><p>Buna göre |K′L′| kaç birimdir?</p>`,
  c: [`3`, `4`, `5`, `7`], a: "C",
  s: `<p>Öteleme uzunluğu değiştirmez: |K′L′| = |KL|. |KL| = √((4 − 1)² + (5 − 1)²) = √(9 + 16) = <b>5</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>(1, 2) noktası önce 3 birim sağa ötelenip ardından y eksenine göre yansıtılıyor.</p><p>Buna göre elde edilen görüntü aşağıdakilerden hangisidir?</p>`,
  c: [`(−4, 2)`, `(2, 2)`, `(4, −2)`, `(−2, 2)`], a: "A",
  s: `<p>3 birim sağa: (1, 2) → (4, 2). y eksenine göre yansıma: (4, 2) → <b>(−4, 2)</b>.</p><p>Not: Sıra değişseydi (önce yansıma, sonra öteleme) sonuç (2, 2) olurdu; ardışık dönüşümlerde sıra önemlidir. Cevap <b>A</b>.</p>` },
{ q: `<p>Bir şekil ile bir doğruya göre yansımasının karşılıklı noktaları ile ilgili,</p><p>I. Karşılıklı noktaları birleştiren doğru parçaları yansıma doğrusuna diktir.<br>II. Yansıma doğrusu, karşılıklı noktaları birleştiren doğru parçalarını iki eşit parçaya ayırır.<br>III. Yansıma doğrusu üzerindeki bir noktanın görüntüsü kendisidir.</p><p>ifadelerinden hangileri <b>doğrudur</b>?</p>`,
  c: [`Yalnız I`, `I ve II`, `II ve III`, `I, II ve III`], a: "D",
  s: `<p>I ✓, II ✓: Görüntü doğrunun öbür tarafında, doğruya dik doğrultuda ve eşit uzaklıktadır. III ✓: Doğrunun üzerindeki noktanın doğruya uzaklığı 0’dır; görüntüsü kendisidir. Cevap <b>D</b>.</p>` },
{ q: `<p>Köşeleri (1, 1), (3, 1), (3, 3) ve (1, 3) olan bir kare 2 birim sola ve 4 birim aşağı ötelenmiştir.</p><p>Aşağıdakilerden hangisi ötelenmiş karenin bir köşesidir?</p>`,
  c: [`(1, −1)`, `(3, −1)`, `(−1, 1)`, `(−1, −1,5)`], a: "A",
  s: `<p>Her köşeye (x − 2, y − 4) uygulanır: (1, 1) → (−1, −3); (3, 1) → (1, −3); (3, 3) → (1, −1); (1, 3) → (−1, −1).</p><p>Seçeneklerden yalnız <b>(1, −1)</b> görüntü karenin köşesidir. Cevap <b>A</b>.</p>` },
{ q: `<p>Koordinat düzleminde köşeleri (0, 0), (4, 0) ve (0, 3) olan bir üçgen y eksenine göre yansıtılıyor.</p><p>Elde edilen görüntü üçgenin alanı kaç birimkaredir?</p>`,
  c: [`3`, `6`, `7`, `12`], a: "B",
  s: `<p>Yansımada alan değişmez. Üçgen dik kenarları 4 ve 3 olan dik üçgendir: alan = {{4 · 3|2}} = <b>6</b> birimkare. Cevap <b>B</b>.</p>` },
{ q: `<p>Bir öteleme kuralı (x, y) → (x + 3, y − 2) biçiminde veriliyor.</p><p>Bu kurala göre (−4, 7) noktasının görüntüsü aşağıdakilerden hangisidir?</p>`,
  c: [`(−1, 5)`, `(−7, 9)`, `(−1, 9)`, `(7, 5)`], a: "A",
  s: `<p>x + 3 = −4 + 3 = −1; y − 2 = 7 − 2 = 5 → <b>(−1, 5)</b>. Kural 3 birim sağa ve 2 birim aşağı ötelemeyi gösterir. Cevap <b>A</b>.</p>` }
]
});
