LGS.add({
id: "mat-ucgen",
summary: `
<h3>1. Üçgenin Yardımcı Elemanları</h3>
<div class="fig"><svg viewBox="0 0 600 190" width="600" role="img" aria-label="Kenarortay, açıortay ve yükseklik">
<g fill="#eff6ff" stroke="#1d4ed8" stroke-width="2"><polygon points="20,170 180,170 70,30"/><polygon points="220,170 380,170 270,30"/><polygon points="420,170 580,170 470,30"/></g>
<line x1="70" y1="30" x2="100" y2="170" stroke="#dc2626" stroke-width="2"/><g stroke="#dc2626"><line x1="57" y1="165" x2="63" y2="175"/><line x1="137" y1="165" x2="143" y2="175"/></g>
<line x1="270" y1="30" x2="293" y2="170" stroke="#16a34a" stroke-width="2"/><path d="M262,52 Q270,60 276,52" fill="none" stroke="#16a34a"/>
<line x1="470" y1="30" x2="470" y2="170" stroke="#7c3aed" stroke-width="2"/><rect x="470" y="160" width="10" height="10" fill="none" stroke="#7c3aed"/>
<g font-size="13" text-anchor="middle"><text x="100" y="188">Kenarortay</text><text x="300" y="188">Açıortay</text><text x="500" y="188">Yükseklik</text></g>
</svg><figcaption>Kenarortay karşı kenarı iki eşit parçaya böler; açıortay açıyı iki eşit açıya böler; yükseklik karşı kenara diktir.</figcaption></div>
<h3>2. Üçgen Eşitsizliği</h3>
<div class="key">Bir üçgende bir kenarın uzunluğu, diğer iki kenarın <b>farkından büyük, toplamından küçüktür</b>: |b − c| &lt; a &lt; b + c. <br>Örnek: Kenarları 5 ve 9 olan üçgende üçüncü kenar 4 &lt; x &lt; 14. Kenarları 3, 4, 8 olan üçgen çizilemez (3 + 4 &lt; 8).</div>
<h3>3. Kenar–Açı İlişkisi</h3>
<p>Bir üçgende <b>büyük açının karşısında büyük kenar</b>, küçük açının karşısında küçük kenar bulunur. Eşit açıların karşısındaki kenarlar eşittir (ikizkenar üçgen). İç açıların toplamı 180°’dir.</p>
<h3>4. Pisagor Bağıntısı</h3>
<div class="two">
<div class="fig"><svg viewBox="0 0 240 240" width="230" role="img" aria-label="Pisagor bağıntısı kareler modeli">
<polygon points="80,160 160,160 80,100" fill="#fef3c7" stroke="#333" stroke-width="2"/>
<rect x="80" y="160" width="80" height="80" fill="#bfdbfe" stroke="#1d4ed8" transform="translate(0,-0)"/>
<rect x="20" y="100" width="60" height="60" fill="#bbf7d0" stroke="#15803d"/>
<polygon points="80,100 160,160 220,80 140,20" fill="#fecaca" stroke="#b91c1c"/>
<g font-size="13" text-anchor="middle"><text x="120" y="205">a² = 16</text><text x="50" y="135">b² = 9</text><text x="150" y="95">c² = 25</text><text x="120" y="175" font-size="11">4</text><text x="72" y="133" font-size="11">3</text></g>
</svg><figcaption>3² + 4² = 5² (9 + 16 = 25)</figcaption></div>
<div>
<p>Dik üçgende dik kenarların kareleri toplamı, <b>hipotenüsün</b> (90°’nin karşısındaki en uzun kenar) karesine eşittir: <b>a² + b² = c²</b>.</p>
<ul>
<li>Pisagor üçlüleri: (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25) ve katları (6, 8, 10), (9, 12, 15)…</li>
<li>Kareli zeminde iki nokta arası uzaklık: yatay ve dikey farklar dik kenar olur.</li>
<li>Kenarı a olan karenin köşegeni a√2’dir.</li>
<li>Bir üçgenin dik olup olmadığını anlamak için en uzun kenarın karesini diğer ikisinin karelerinin toplamıyla karşılaştır.</li>
</ul>
</div>
</div>
<div class="note"><b>Gerçek hayat:</b> Duvara dayalı merdiven, uçurtma ipi, ekran köşegeni (inç), bir parkı köşeden köşeye geçmek… Hepsinde bir dik üçgen ara!</div>
`,
qs: [
{ q: `<p>Kenar uzunlukları 5 cm ve 9 cm olan bir üçgenin üçüncü kenarının uzunluğu santimetre cinsinden bir tam sayıdır.</p><p>Buna göre üçüncü kenar kaç farklı değer alabilir?</p>`,
  c: [`9`, `10`, `11`, `13`], a: "A",
  s: `<p>Üçgen eşitsizliği: 9 − 5 &lt; x &lt; 9 + 5 → 4 &lt; x &lt; 14.</p><p>x ∈ {5, 6, …, 13} → <b>9</b> değer. Cevap <b>A</b>.</p>` },
{ q: `<p>ABC üçgeninde s(A) = 50° ve s(B) = 70°’dir.</p><p>Buna göre üçgenin kenar uzunlukları arasındaki sıralama aşağıdakilerden hangisidir?</p>`,
  c: [`|AB| &gt; |AC| &gt; |BC|`, `|BC| &gt; |AC| &gt; |AB|`, `|AB| &gt; |BC| &gt; |AC|`, `|AC| &gt; |AB| &gt; |BC|`], a: "D",
  s: `<p>s(C) = 180° − 50° − 70° = 60°. Açılar: B (70°) &gt; C (60°) &gt; A (50°).</p><p>Büyük açının karşısında büyük kenar: B’nin karşısı AC, C’nin karşısı AB, A’nın karşısı BC → <b>|AC| &gt; |AB| &gt; |BC|</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Dik kenarlarının uzunlukları 6 cm ve 8 cm olan bir dik üçgenin hipotenüsü kaç santimetredir?</p>`,
  c: [`9`, `10`, `12`, `14`], a: "B",
  s: `<p>c² = 6² + 8² = 36 + 64 = 100 → c = <b>10 cm</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>13 m uzunluğundaki bir merdiven, yere dik bir duvara dayanmıştır. Merdivenin alt ucu duvardan 5 m uzaktadır.</p>
<svg viewBox="0 0 200 170" width="180"><line x1="30" y1="10" x2="30" y2="155" stroke="#555" stroke-width="6"/><line x1="10" y1="155" x2="190" y2="155" stroke="#555"/><line x1="30" y1="25" x2="110" y2="155" stroke="#b45309" stroke-width="4"/><text x="75" y="80" font-size="12">13 m</text><text x="62" y="168" font-size="12">5 m</text><text x="8" y="95" font-size="12">?</text></svg>
<p>Buna göre merdivenin üst ucu yerden kaç metre yüksekliktedir?</p>`,
  c: [`8`, `9`, `10`, `12`], a: "D",
  s: `<p>Merdiven hipotenüs: h² + 5² = 13² → h² = 169 − 25 = 144 → h = <b>12 m</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıda kenar uzunlukları verilen üçgenlerden hangisi bir <b>dik üçgendir</b>?</p>`,
  c: [`5, 12, 13`, `6, 8, 9`, `4, 5, 6`, `7, 24, 26`], a: "A",
  s: `<p>En uzun kenarın karesi diğer ikisinin kareleri toplamına eşit olmalı.</p><p>5² + 12² = 25 + 144 = 169 = 13² ✓. Diğerleri: 16 + 25 = 41 ≠ 36; 36 + 64 = 100 ≠ 81; 49 + 576 = 625 ≠ 676. Cevap <b>A</b>.</p>` },
{ q: `<p>Birim karelerden oluşan kareli zeminde K ve L noktaları arasında yatayda 3 birim, düşeyde 4 birim fark vardır.</p>
<svg viewBox="0 0 200 170" width="180"><g stroke="#e5e7eb"><line x1="20" y1="10" x2="20" y2="160"/><line x1="50" y1="10" x2="50" y2="160"/><line x1="80" y1="10" x2="80" y2="160"/><line x1="110" y1="10" x2="110" y2="160"/><line x1="140" y1="10" x2="140" y2="160"/><line x1="170" y1="10" x2="170" y2="160"/><line x1="20" y1="10" x2="170" y2="10"/><line x1="20" y1="40" x2="170" y2="40"/><line x1="20" y1="70" x2="170" y2="70"/><line x1="20" y1="100" x2="170" y2="100"/><line x1="20" y1="130" x2="170" y2="130"/><line x1="20" y1="160" x2="170" y2="160"/></g><line x1="50" y1="130" x2="140" y2="10" stroke="#dc2626" stroke-width="2"/><g fill="#dc2626"><circle cx="50" cy="130" r="4"/><circle cx="140" cy="10" r="4"/></g><text x="36" y="148" font-size="12">K</text><text x="146" y="20" font-size="12">L</text></svg>
<p>Buna göre K ile L arasındaki uzaklık kaç birimdir?</p>`,
  c: [`5`, `√35`, `6`, `7`], a: "A", noShuffle: true,
  s: `<p>Yatay ve dikey farklar bir dik üçgenin dik kenarlarıdır: |KL|² = 3² + 4² = 25 → |KL| = <b>5</b> birim. Cevap <b>A</b>.</p>` },
{ q: `<p>Bir üçgende bir köşeyi, karşısındaki kenarın <b>orta noktasına</b> birleştiren doğru parçasına ne ad verilir?</p>`,
  c: [`Kenarortay`, `Açıortay`, `Yükseklik`, `Hipotenüs`], a: "A",
  s: `<p>Köşeyi karşı kenarın orta noktasına birleştiren doğru parçası <b>kenarortaydır</b>; karşı kenarı iki eş parçaya ayırır.</p><p>Açıortay açıyı ikiye böler, yükseklik karşı kenara diktir, hipotenüs dik üçgende 90°’nin karşısındaki kenardır. Cevap <b>A</b>.</p>` },
{ q: `<p>Bir üçgende bir köşeden karşı kenara (veya uzantısına) <b>dik olarak</b> çizilen doğru parçası aşağıdakilerden hangisidir?</p>`,
  c: [`Kenarortay`, `Açıortay`, `Yükseklik`, `Köşegen`], a: "C",
  s: `<p>Köşeden karşı kenara dik inen doğru parçası <b>yüksekliktir</b>. Üçgenin alanı hesaplanırken (taban · yükseklik) ÷ 2 formülünde kullanılır. Cevap <b>C</b>.</p>` },
{ q: `<p>Dikdörtgen biçimindeki bir telefon ekranının kenar uzunlukları 9 cm ve 12 cm’dir.</p><p>Bu ekranın köşegen uzunluğu kaç santimetredir?</p>`,
  c: [`15`, `16`, `18`, `21`], a: "A",
  s: `<p>Köşegen, kenarlarla dik üçgen oluşturur: d² = 9² + 12² = 81 + 144 = 225 → d = <b>15 cm</b> (3-4-5 üçlüsünün 3 katı). Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıda verilen uzunluklardaki çubuklardan hangisiyle bir <b>üçgen oluşturulamaz</b>?</p>`,
  c: [`3 cm, 4 cm, 5 cm`, `3 cm, 4 cm, 8 cm`, `5 cm, 5 cm, 8 cm`, `6 cm, 7 cm, 12 cm`], a: "B",
  s: `<p>Üçgen oluşması için en uzun kenar, diğer ikisinin toplamından küçük olmalı.</p><p>3 + 4 = 7 &lt; 8 → üçgen <b>oluşmaz</b>. Diğerlerinde: 7 &gt; 5, 10 &gt; 8, 13 &gt; 12 ✓. Cevap <b>B</b>.</p>` },
{ q: `<p>Bir kenarı 5 cm olan karenin köşegen uzunluğu kaç santimetredir?</p>`,
  c: [`5`, `5√2`, `10`, `25`], a: "B", noShuffle: true,
  s: `<p>Köşegen iki kenarla ikizkenar dik üçgen oluşturur: d² = 5² + 5² = 50 → d = √50 = <b>5√2 cm</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Taban uzunluğu 10 cm, eşit kenarlarının her biri 13 cm olan ikizkenar üçgen biçimindeki bir levhanın alanı kaç santimetrekaredir?</p>`,
  c: [`60`, `65`, `120`, `130`], a: "A",
  s: `<p>İkizkenar üçgende tepeden inen yükseklik tabanı ortalar: 5 cm. h² + 5² = 13² → h² = 144 → h = 12.</p><p>Alan = {{10 · 12|2}} = <b>60 cm²</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>Hipotenüsü 17 cm, dik kenarlarından biri 8 cm olan bir dik üçgenin diğer dik kenarı kaç santimetredir?</p>`,
  c: [`12`, `13`, `14`, `15`], a: "D",
  s: `<p>x² + 8² = 17² → x² = 289 − 64 = 225 → x = <b>15 cm</b>. (8-15-17 Pisagor üçlüsü.) Cevap <b>D</b>.</p>` },
{ q: `<p>Ali evinden çıkıp önce 8 km doğuya, sonra 6 km kuzeye bisikletle gitmiştir.</p><p>Ali’nin son konumunun evine olan kuş uçuşu uzaklığı kaç kilometredir?</p>`,
  c: [`7`, `10`, `12`, `14`], a: "B",
  s: `<p>Doğu ve kuzey yönleri birbirine diktir; yol dik kenarlar, kuş uçuşu uzaklık hipotenüstür: d² = 8² + 6² = 100 → d = <b>10 km</b>. (Gidilen yol 14 km’dir; soruda istenen bu değildir.) Cevap <b>B</b>.</p>` },
{ q: `<p>Kenar uzunlukları x cm, 2x cm ve 12 cm olan bir üçgende x bir tam sayıdır.</p><p>Buna göre bu üçgenin çevresi <b>en fazla</b> kaç santimetre olabilir?</p>`,
  c: [`39`, `42`, `45`, `48`], a: "C",
  s: `<p>Üçgen eşitsizliği: 2x − x &lt; 12 &lt; 2x + x → x &lt; 12 ve 3x &gt; 12 → 4 &lt; x &lt; 12.</p><p>En büyük x = 11 → çevre 11 + 22 + 12 = <b>45 cm</b>. (x = 12 olsaydı 12 + 12 = 24 kenarına eşit olur, üçgen oluşmazdı.) Cevap <b>C</b>.</p>` },
{ q: `<p>ABC üçgeninde |AB| = 7 cm, |BC| = 9 cm ve |AC| = 5 cm’dir.</p><p>Buna göre üçgenin iç açılarının ölçüleri arasındaki sıralama aşağıdakilerden hangisidir?</p>`,
  c: [`s(A) &gt; s(B) &gt; s(C)`, `s(B) &gt; s(C) &gt; s(A)`, `s(A) &gt; s(C) &gt; s(B)`, `s(C) &gt; s(A) &gt; s(B)`], a: "C",
  s: `<p>En uzun kenar BC (9) → karşısındaki açı A en büyük. AB (7) → karşısındaki C. En kısa AC (5) → karşısındaki B en küçük.</p><p><b>s(A) &gt; s(C) &gt; s(B)</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Bir çocuk, ipinin uzunluğu 25 m olan uçurtmasını uçurmaktadır. İp gergin ve doğrusal olup uçurtma, çocuğun elinden yatayda 20 m uzaklıktaki bir noktanın tam üzerindedir.</p><p>Buna göre uçurtma, çocuğun elinin bulunduğu seviyeden kaç metre yüksektedir?</p>`,
  c: [`5`, `10`, `15`, `20`], a: "C",
  s: `<p>İp hipotenüs: h² + 20² = 25² → h² = 625 − 400 = 225 → h = <b>15 m</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Kenar uzunlukları 12 m ve 16 m olan dikdörtgen biçimindeki bir parkın bir köşesinden karşı köşesine, parkın kenarlarından yürümek yerine köşegen boyunca yürüyen bir kişi kaç metre daha az yol yürümüş olur?</p>`,
  c: [`2`, `4`, `6`, `8`], a: "D",
  s: `<p>Kenarlardan: 12 + 16 = 28 m. Köşegen: √(12² + 16²) = √400 = 20 m.</p><p>Fark: 28 − 20 = <b>8 m</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Kareli zemine köşeleri kare köşelerine gelecek şekilde çizilen bir dik üçgenin dik kenarları 3 birim ve 4 birimdir.</p><p>Bu üçgenin çevresi kaç birimdir?</p>`,
  c: [`9`, `10`, `11`, `12`], a: "D",
  s: `<p>Hipotenüs √(3² + 4²) = 5. Çevre = 3 + 4 + 5 = <b>12</b> birim. Cevap <b>D</b>.</p>` },
{ q: `<p>Bir dik üçgenin kenarları üzerine kareler çizilmiştir. Dik kenarlar üzerine çizilen karelerin alanları 36 cm² ve 64 cm²’dir.</p><p>Buna göre hipotenüs üzerine çizilen karenin alanı kaç santimetrekaredir?</p>`,
  c: [`28`, `64`, `100`, `136`], a: "C",
  s: `<p>Pisagor: Dik kenarlar üzerindeki karelerin alanları toplamı, hipotenüs üzerindeki karenin alanına eşittir: 36 + 64 = <b>100 cm²</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdakilerin hangisinde kenar uzunlukları verilen üçgen bir <b>dik üçgen değildir</b>?</p>`,
  c: [`9, 12, 15`, `8, 15, 17`, `6, 8, 10`, `5, 7, 9`], a: "D",
  s: `<p>5² + 7² = 25 + 49 = 74 ≠ 81 = 9² → dik üçgen <b>değildir</b>.</p><p>81 + 144 = 225 ✓; 64 + 225 = 289 ✓; 36 + 64 = 100 ✓. Cevap <b>D</b>.</p>` },
{ q: `<p>Dik kenarlarının uzunlukları 2 cm ve 3 cm olan bir dik üçgenin hipotenüs uzunluğu kaç santimetredir?</p>`,
  c: [`√5`, `√6`, `√13`, `5`], a: "C", noShuffle: true,
  s: `<p>c² = 2² + 3² = 4 + 9 = 13 → c = <b>√13</b> cm (yaklaşık 3,6 cm). Dik kenarları toplayıp 5 bulmak yanlıştır. Cevap <b>C</b>.</p>` },
{ q: `<p>10 m uzunluğundaki bir merdiven, alt ucu duvardan 6 m uzakta olacak biçimde bir duvara dayanmıştır. Merdivenin alt ucu, duvardan 2 m daha uzaklaşacak şekilde kayıyor.</p><p>Buna göre merdivenin üst ucu kaç metre aşağı kaymıştır?</p>`,
  c: [`1`, `2`, `3`, `4`], a: "B",
  s: `<p>İlk durum: h² + 6² = 10² → h = 8 m. Son durum: alt uç 8 m uzakta → h² + 8² = 10² → h = 6 m.</p><p>Üst uç 8 − 6 = <b>2 m</b> aşağı kayar. Cevap <b>B</b>.</p>` },
{ q: `<p>Bir dik üçgenin dik kenarlarının uzunlukları x cm ve (x + 7) cm, hipotenüsü 13 cm’dir.</p><p>Buna göre bu üçgenin çevresi kaç santimetredir?</p>`,
  c: [`25`, `30`, `32`, `35`], a: "B",
  s: `<p>Pisagor üçlülerinden 5-12-13’te dik kenarlar arasındaki fark 7’dir: x = 5, x + 7 = 12. Kontrol: 25 + 144 = 169 ✓.</p><p>Çevre = 5 + 12 + 13 = <b>30 cm</b>. Cevap <b>B</b>.</p>` }
]
});
