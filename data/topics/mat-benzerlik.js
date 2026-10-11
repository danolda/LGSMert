LGS.add({
id: "mat-benzerlik",
summary: `
<h3>1. Eşlik (≅)</h3>
<p>Biçimleri ve boyutları aynı olan şekiller <b>eştir</b>. Eş şekillerin karşılık gelen kenar uzunlukları ve açı ölçüleri eşittir; biri diğerinin üzerine tam olarak çakışır. ABC ≅ DEF yazılışında harflerin sırası karşılık gelen köşeleri gösterir: A ↔ D, B ↔ E, C ↔ F.</p>
<h3>2. Benzerlik (~)</h3>
<p>Biçimleri aynı, boyutları farklı olabilen şekillerdir. Benzer şekillerde:</p>
<ul>
<li>Karşılık gelen <b>açılar eşittir</b>.</li>
<li>Karşılık gelen <b>kenarların oranı sabittir</b>; bu orana <b>benzerlik oranı</b> (k) denir.</li>
<li>Çevrelerin oranı ve karşılık gelen yüksekliklerin oranı da k’dır. (Alanların oranı k²’dir.)</li>
<li>Benzerlik oranı 1 ise şekiller eştir.</li>
</ul>
<div class="fig"><svg viewBox="0 0 500 170" width="500" role="img" aria-label="Benzer iki üçgen">
<polygon points="20,150 110,150 20,90" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
<polygon points="200,150 380,150 200,30" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<g font-size="12"><text x="58" y="166">6</text><text x="6" y="125">4</text><text x="285" y="166">12</text><text x="184" y="95">8</text>
<text x="400" y="70">{{12|6}} = {{8|4}} = 2</text><text x="400" y="95">Benzerlik oranı k = 2</text><text x="400" y="120">Açılar aynı kalır</text></g>
</svg><figcaption>Kenarlar aynı oranda büyür, açılar değişmez.</figcaption></div>
<div class="two">
<div class="note"><b>Her zaman benzer olanlar:</b> İki kare, iki eşkenar üçgen, iki çember. <br><b>Benzer olmayabilir:</b> İki dikdörtgen (4×6 ile 6×8 benzer değildir: {{4|6}} ≠ {{6|8}}), iki eşkenar dörtgen, iki ikizkenar üçgen.</div>
<div class="key"><b>Ölçek:</b> Harita/maket ölçeği bir benzerlik oranıdır. 1 : 50 000 → haritada 1 cm, gerçekte 50 000 cm = 500 m.</div>
</div>
<h3>3. Gölge ve Yükseklik Problemleri</h3>
<div class="fig"><svg viewBox="0 0 520 170" width="520" role="img" aria-label="Gölge problemi benzer üçgenler">
<line x1="10" y1="150" x2="510" y2="150" stroke="#555"/>
<rect x="60" y="70" width="8" height="80" fill="#15803d"/><polygon points="64,70 64,150 160,150" fill="#fde68a" opacity=".7"/><line x1="64" y1="70" x2="160" y2="150" stroke="#f59e0b" stroke-dasharray="4 3"/>
<rect x="260" y="10" width="14" height="140" fill="#7c2d12"/><polygon points="267,10 267,150 435,150" fill="#fde68a" opacity=".7"/><line x1="267" y1="10" x2="435" y2="150" stroke="#f59e0b" stroke-dasharray="4 3"/>
<g font-size="12"><text x="70" y="115">boy</text><text x="95" y="166">gölge</text><text x="278" y="80">yükseklik</text><text x="330" y="166">gölge</text><text x="380" y="40">{{boy|gölge}} = {{yükseklik|gölge}}</text></g>
</svg><figcaption>Güneş ışınları paralel geldiği için aynı anda oluşan gölgeler benzer üçgenler oluşturur.</figcaption></div>
`,
qs: [
{ q: `<p>Kenar uzunlukları 4 cm ve 6 cm olan bir dikdörtgen ile kısa kenarı 6 cm olan ikinci bir dikdörtgen birbirine benzerdir.</p><p>Buna göre ikinci dikdörtgenin uzun kenarı kaç santimetredir?</p>`,
  c: [`9`, `10`, `12`, `15`], a: "A",
  s: `<p>Karşılık gelen kenarların oranı eşittir: {{4|6}} = {{6|x}} → 4x = 36 → x = <b>9 cm</b>. Benzerlik oranı {{6|4}} = 1,5; 6 · 1,5 = 9. Cevap <b>A</b>.</p>` },
{ q: `<p>Kenarları 3 cm, 4 cm, 5 cm olan bir üçgen ile kenarları 9 cm, 12 cm, 15 cm olan bir üçgen benzerdir.</p><p>Büyük üçgenin küçük üçgene benzerlik oranı kaçtır?</p>`,
  c: [`{{1|3}}`, `3`, `6`, `9`], a: "B", noShuffle: true,
  s: `<p>Karşılık gelen kenarlar: {{9|3}} = {{12|4}} = {{15|5}} = <b>3</b>. (Küçüğün büyüğe oranı {{1|3}} olurdu; soruda büyüğün küçüğe oranı soruluyor.) Cevap <b>B</b>.</p>` },
{ q: `<p>Boyu 1,6 m olan bir çocuğun güneşli bir günde gölgesinin uzunluğu 2 m’dir. Aynı anda yakındaki bir ağacın gölgesinin uzunluğu 10 m’dir.</p><p>Buna göre ağacın boyu kaç metredir?</p>`,
  c: [`6`, `6,4`, `7,5`, `8`], a: "D",
  s: `<p>Güneş ışınları paralel olduğundan oluşan üçgenler benzerdir: {{1,6|2}} = {{h|10}} → h = 1,6 · 5 = <b>8 m</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Ölçeği 1 : 50 000 olan bir haritada iki şehir arasındaki uzaklık 4 cm olarak ölçülmüştür.</p><p>Buna göre bu iki şehir arasındaki gerçek uzaklık kaç kilometredir?</p>`,
  c: [`2`, `20`, `200`, `2000`], a: "A",
  s: `<p>Gerçek uzaklık: 4 · 50 000 = 200 000 cm. 1 km = 100 000 cm → 200 000 cm = <b>2 km</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>ABC ve DEF üçgenleri eştir (ABC ≅ DEF).</p><p>Buna göre aşağıdakilerden hangisi <b>kesinlikle doğrudur</b>?</p>`,
  c: [`DEF üçgeni, ABC’nin iki katı büyüklüğündedir.`, `İki üçgen de dik üçgendir.`, `Üçgenlerin tüm kenarları birbirine eşittir.`, `Üçgenlerin çevreleri eşittir.`], a: "D",
  s: `<p>Eş üçgenlerin karşılık gelen kenarları eşit olduğundan <b>çevreleri de eşittir</b>.</p><p>Üçgenlerin dik olması gerekmez; bir üçgenin kendi kenarları birbirine eşit olmak zorunda değildir; eş şekiller aynı büyüklüktedir. Cevap <b>D</b>.</p>` },
{ q: `<p>Benzer iki üçgenden küçüğünün büyüğüne benzerlik oranı {{2|5}}’tir. Küçük üçgenin çevresi 24 cm’dir.</p><p>Buna göre büyük üçgenin çevresi kaç santimetredir?</p>`,
  c: [`36`, `48`, `54`, `60`], a: "D",
  s: `<p>Çevrelerin oranı benzerlik oranına eşittir: {{24|Ç}} = {{2|5}} → Ç = {{24 · 5|2}} = <b>60 cm</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>ABC ~ DEF olmak üzere s(A) = 40° ve s(E) = 75°’dir.</p><p>Buna göre s(F) kaç derecedir?</p>`,
  c: [`65`, `75`, `105`, `115`], a: "A",
  s: `<p>Benzer üçgenlerde karşılık gelen açılar eşittir: s(D) = s(A) = 40°.</p><p>DEF üçgeninde: s(F) = 180° − 40° − 75° = <b>65°</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>10 cm × 15 cm boyutlarındaki bir fotoğraf, bozulmadan (benzer olacak şekilde) büyütülerek kısa kenarı 30 cm olan bir poster hâline getirilecektir.</p><p>Buna göre posterin uzun kenarı kaç santimetre olur?</p>`,
  c: [`30`, `40`, `45`, `60`], a: "C",
  s: `<p>Benzerlik oranı {{30|10}} = 3 → uzun kenar 15 · 3 = <b>45 cm</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>1 : 20 ölçekle yapılmış bir otomobil maketinin uzunluğu 22,5 cm’dir.</p><p>Buna göre gerçek otomobilin uzunluğu kaç metredir?</p>`,
  c: [`1,125`, `2,25`, `4,5`, `45`], a: "C",
  s: `<p>Gerçek uzunluk: 22,5 · 20 = 450 cm = <b>4,5 m</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıda kenar uzunlukları verilen dikdörtgen çiftlerinden hangisi <b>birbirine benzerdir</b>?</p>`,
  c: [`2 cm × 3 cm ile 4 cm × 6 cm`, `2 cm × 3 cm ile 3 cm × 4 cm`, `4 cm × 6 cm ile 6 cm × 8 cm`, `5 cm × 8 cm ile 10 cm × 12 cm`], a: "A",
  s: `<p>Benzer dikdörtgenlerde kısa kenarların oranı uzun kenarların oranına eşittir.</p><p>{{4|2}} = {{6|3}} = 2 ✓. Diğerleri: {{3|2}} ≠ {{4|3}}; {{6|4}} ≠ {{8|6}}; {{10|5}} ≠ {{12|8}}. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki şekil çiftlerinden hangisi <b>her zaman</b> birbirine benzerdir?</p>`,
  c: [`İki dikdörtgen`, `İki eşkenar üçgen`, `İki ikizkenar üçgen`, `İki eşkenar dörtgen`], a: "B",
  s: `<p>İki eşkenar üçgenin bütün açıları 60°’dir ve kenarları kendi içinde eşit olduğundan kenar oranları sabittir → <b>her zaman benzerdir</b>.</p><p>Dikdörtgenlerin kenar oranları, ikizkenar üçgenlerin ve eşkenar dörtgenlerin açıları farklı olabilir. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki şekilde ABC üçgeninin AB kenarı üzerinde D, AC kenarı üzerinde E noktası vardır ve DE doğru parçası BC’ye paraleldir. Bu durumda ADE ve ABC üçgenleri benzerdir.</p>
<svg viewBox="0 0 260 180" width="240"><polygon points="130,15 20,165 240,165" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2"/><line x1="86" y1="75" x2="174" y2="75" stroke="#dc2626" stroke-width="2"/><g font-size="13"><text x="125" y="12">A</text><text x="70" y="78">D</text><text x="180" y="78">E</text><text x="8" y="172">B</text><text x="244" y="172">C</text><text x="96" y="48" font-size="11">4</text><text x="40" y="125" font-size="11">6</text><text x="125" y="70" font-size="11">5</text><text x="125" y="160" font-size="11">?</text></g></svg>
<p>|AD| = 4 cm, |DB| = 6 cm ve |DE| = 5 cm olduğuna göre |BC| kaç santimetredir?</p>`,
  c: [`10`, `12`, `12,5`, `15`], a: "C",
  s: `<p>|AB| = 4 + 6 = 10. ADE ~ ABC → |AD| ÷ |AB| = |DE| ÷ |BC| → {{4|10}} = {{5|BC}} → |BC| = {{50|4}} = <b>12,5 cm</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>6 m yüksekliğindeki bir direğin gölgesi 4,5 m iken aynı anda bir çocuğun gölgesi 1,2 m’dir.</p><p>Buna göre çocuğun boyu kaç metredir?</p>`,
  c: [`1,5`, `1,6`, `1,8`, `2`], a: "B",
  s: `<p>{{6|4,5}} = {{h|1,2}} → h = {{6 · 1,2|4,5}} = {{7,2|4,5}} = <b>1,6 m</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Benzerlik ile ilgili aşağıdaki ifadeler veriliyor:</p><p>I. Benzerlik oranı 1 olan iki şekil eştir.<br>II. Benzer iki şeklin karşılık gelen açıları eşittir.<br>III. Eş iki şekil aynı zamanda benzerdir.</p><p>Bu ifadelerden hangileri <b>doğrudur</b>?</p>`,
  c: [`Yalnız I`, `I ve II`, `II ve III`, `I, II ve III`], a: "D",
  s: `<p>I ✓: Oran 1 ise karşılık gelen kenarlar eşit, açılar eşit → eş. II ✓: Benzerliğin tanımıdır. III ✓: Eş şekiller benzerlik oranı 1 olan benzer şekillerdir. Cevap <b>D</b>.</p>` },
{ q: `<p>Bir karenin kenar uzunluğu 3 katına çıkarılarak yeni bir kare elde ediliyor.</p><p>Buna göre yeni karenin alanı ilk karenin alanının kaç katıdır?</p>`,
  c: [`3`, `6`, `9`, `27`], a: "C",
  s: `<p>Kenar a ise ilk alan a²; yeni kenar 3a → yeni alan (3a)² = 9a². Alan <b>9 katına</b> çıkar.</p><p>Benzer şekillerde alanların oranı, benzerlik oranının karesidir (3² = 9). Cevap <b>C</b>.</p>` },
{ q: `<p>Bir öğrenci, bir ağacın boyunu ölçmek için yere bir ayna koyuyor. Öğrenci aynaya 2 m uzaklıkta durduğunda ağacın tepesini aynada görüyor. Öğrencinin göz hizası yerden 1,5 m yüksekliktedir ve ayna ağaca 8 m uzaklıktadır.</p>
<svg viewBox="0 0 300 160" width="290"><line x1="10" y1="140" x2="290" y2="140" stroke="#555"/><rect x="30" y="100" width="6" height="40" fill="#1d4ed8"/><circle cx="33" cy="95" r="6" fill="#1d4ed8"/><rect x="250" y="20" width="10" height="120" fill="#15803d"/><rect x="85" y="137" width="20" height="4" fill="#94a3b8"/><polyline points="33,98 95,138 255,22" fill="none" stroke="#f59e0b" stroke-dasharray="4 3"/><g font-size="11"><text x="55" y="155">2 m</text><text x="165" y="155">8 m</text><text x="40" y="120">1,5 m</text><text x="262" y="80">?</text></g></svg>
<p>Işığın aynadan yansıması sırasında oluşan iki üçgen benzer olduğuna göre ağacın boyu kaç metredir?</p>`,
  c: [`4`, `4,5`, `5`, `6`], a: "D",
  s: `<p>Gelme ve yansıma açıları eşit olduğundan iki dik üçgen benzerdir: {{1,5|2}} = {{h|8}} → h = 1,5 · 4 = <b>6 m</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Dik kenarları 3 birim ve 4 birim olan bir dik üçgene benzer olan başka bir dik üçgenin kısa dik kenarı 6 birimdir.</p><p>Buna göre bu üçgenin hipotenüsü kaç birimdir?</p>`,
  c: [`8`, `10`, `12`, `15`], a: "B",
  s: `<p>İlk üçgenin hipotenüsü 5. Benzerlik oranı {{6|3}} = 2 → hipotenüs 5 · 2 = <b>10</b> birim. Cevap <b>B</b>.</p>` },
{ q: `<p>ABC ≅ DEF olmak üzere |AB| = 7 cm, |EF| = 9 cm ve |DF| = 5 cm’dir.</p><p>Buna göre ABC üçgeninin çevresi kaç santimetredir?</p>`,
  c: [`16`, `19`, `21`, `23`], a: "C",
  s: `<p>Eşlikte harf sırası karşılık gelen köşeleri gösterir: |BC| = |EF| = 9, |AC| = |DF| = 5.</p><p>Çevre = 7 + 9 + 5 = <b>21 cm</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Ekranları birbirine benzer olan iki televizyondan 40 inç olanının ekran genişliği 88 cm’dir. (İnç değeri ekranın köşegen uzunluğunu gösterir.)</p><p>Buna göre 50 inç olan televizyonun ekran genişliği kaç santimetredir?</p>`,
  c: [`100`, `110`, `120`, `125`], a: "B",
  s: `<p>Köşegenlerin oranı benzerlik oranıdır: {{50|40}} = {{5|4}} → genişlik 88 · {{5|4}} = <b>110 cm</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Benzer iki üçgenden büyüğünün küçüğüne benzerlik oranı {{3|2}}’dir. Küçük üçgenin bir kenarına ait yüksekliği 8 cm’dir.</p><p>Büyük üçgende buna karşılık gelen yükseklik kaç santimetredir?</p>`,
  c: [`12`, `13,5`, `16`, `18`], a: "A",
  s: `<p>Karşılık gelen yüksekliklerin oranı da benzerlik oranına eşittir: 8 · {{3|2}} = <b>12 cm</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>Güneşli bir günde 9 m yüksekliğindeki bir bayrak direğinin gölgesi 6 m iken aynı anda yakındaki bir binanın gölgesi 24 m’dir.</p><p>Buna göre binanın yüksekliği kaç metredir?</p>`,
  c: [`27`, `30`, `32`, `36`], a: "D",
  s: `<p>{{9|6}} = {{h|24}} → h = {{9 · 24|6}} = <b>36 m</b>. (Gölge 4 katı → yükseklik de 4 katı.) Cevap <b>D</b>.</p>` },
{ q: `<p>Kenar uzunlukları 4 cm ve 6 cm olan bir dikdörtgenin her iki kenarı da 2’şer cm uzatılıyor.</p><p>Elde edilen yeni dikdörtgen ile ilgili aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [`İlk dikdörtgene benzer değildir; çünkü kenar oranları eşit değildir.`, `İlk dikdörtgene benzerdir; çünkü kenarlarına eşit miktarda eklenmiştir.`, `İlk dikdörtgene eştir.`, `İlk dikdörtgene benzerdir ve benzerlik oranı 2’dir.`], a: "A",
  s: `<p>Yeni dikdörtgen 6 cm × 8 cm. Oranlar: {{6|4}} = 1,5 ve {{8|6}} ≈ 1,33 → eşit değil → <b>benzer değildir</b>.</p><p>Benzerlik için kenarlara aynı sayı <b>eklenmez</b>, kenarlar aynı sayıyla <b>çarpılır</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>Bir evin 1 : 200 ölçekli planında, dikdörtgen biçimindeki bir odanın kenarları 2,5 cm ve 3 cm olarak çizilmiştir.</p><p>Buna göre bu odanın gerçek alanı kaç metrekaredir?</p>`,
  c: [`15`, `30`, `60`, `120`], a: "B",
  s: `<p>Gerçek kenarlar: 2,5 · 200 = 500 cm = 5 m ve 3 · 200 = 600 cm = 6 m.</p><p>Alan = 5 · 6 = <b>30 m²</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Bir öğrenci “Kenar uzunlukları aynı olan iki dörtgen her zaman eştir.” diyor.</p><p>Aşağıdakilerden hangisi bu düşüncenin <b>yanlış</b> olduğunu gösteren bir örnektir?</p>`,
  c: [`Kenarı 5 cm olan bir kare ile kenarı 5 cm olan, açıları 60° ve 120° olan bir eşkenar dörtgen`, `Kenarı 5 cm olan iki kare`, `Kenarları 3 cm ve 5 cm olan iki dikdörtgen`, `Kenarı 5 cm olan iki eşkenar üçgen`], a: "A",
  s: `<p>Kare ile eşkenar dörtgenin tüm kenarları 5 cm’dir; ancak karenin açıları 90°, eşkenar dörtgenin açıları 60° ve 120°’dir. Açılar farklı olduğundan bu iki dörtgen <b>eş değildir</b>; ifadeyi çürüten örnektir.</p><p>Dörtgenlerde eşlik için kenarlar yetmez, açılar da eşit olmalıdır. Cevap <b>A</b>.</p>` },
{ q: `<p>Benzer iki beşgenin çevreleri 30 cm ve 45 cm’dir. Küçük beşgenin bir kenarı 8 cm’dir.</p><p>Buna göre büyük beşgende bu kenara karşılık gelen kenar kaç santimetredir?</p>`,
  c: [`10`, `11`, `12`, `14`], a: "C",
  s: `<p>Benzerlik oranı = çevrelerin oranı = {{45|30}} = {{3|2}} → 8 · {{3|2}} = <b>12 cm</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Bir projeksiyon cihazı, perdeye 2 m uzaklıktayken perdede 1,2 m genişliğinde bir görüntü oluşturmaktadır. Cihazın ışınları doğrusal yayıldığından oluşan görüntüler birbirine benzerdir.</p><p>Cihaz perdeden 5 m uzağa götürülürse oluşan görüntünün genişliği kaç metre olur?</p>`,
  c: [`2,4`, `3`, `3,6`, `5`], a: "B",
  s: `<p>Cihaz–perde uzaklığı ile görüntü genişliği orantılıdır (benzer üçgenler): {{1,2|2}} = {{g|5}} → g = 0,6 · 5 = <b>3 m</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Benzer iki üçgenden küçüğünün kenar uzunlukları 4 cm, 6 cm ve 7 cm’dir. Büyük üçgenin en kısa kenarı 10 cm’dir.</p><p>Buna göre büyük üçgenin en uzun kenarı kaç santimetredir?</p>`,
  c: [`14`, `15`, `17,5`, `21`], a: "C",
  s: `<p>En kısa kenarlar karşılık gelir: benzerlik oranı {{10|4}} = 2,5. En uzun kenar: 7 · 2,5 = <b>17,5 cm</b>. Cevap <b>C</b>.</p>` }
]
});
