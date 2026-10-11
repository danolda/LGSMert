LGS.add({
id: "mat-cisim",
summary: `
<h3>1. Dik Prizmalar</h3>
<p>Alt ve üst tabanları birbirine eş ve paralel çokgen, yan yüzleri dikdörtgen olan cisimlerdir. Prizma, tabanının adıyla anılır: üçgen dik prizma, kare dik prizma, beşgen dik prizma…</p>
<div class="tbl"><table>
<tr><th>Cisim (taban n kenarlı)</th><th>Yüz</th><th>Köşe</th><th>Ayrıt</th></tr>
<tr><td>n-gen dik prizma</td><td>n + 2</td><td>2n</td><td>3n</td></tr>
<tr><td>n-gen dik piramit</td><td>n + 1</td><td>n + 1</td><td>2n</td></tr>
<tr><td>Örnek: üçgen prizma</td><td>5</td><td>6</td><td>9</td></tr>
<tr><td>Örnek: kare piramit</td><td>5</td><td>5</td><td>8</td></tr>
</table></div>
<h3>2. Dik Dairesel Silindir</h3>
<div class="fig"><svg viewBox="0 0 560 210" width="560" role="img" aria-label="Silindir ve açınımı">
<ellipse cx="80" cy="40" rx="55" ry="15" fill="#bfdbfe" stroke="#1d4ed8"/><path d="M25,40 L25,170 A55,15 0 0,0 135,170 L135,40" fill="#dbeafe" stroke="#1d4ed8"/><ellipse cx="80" cy="170" rx="55" ry="15" fill="none" stroke="#1d4ed8" stroke-dasharray="4 3"/>
<line x1="80" y1="170" x2="135" y2="170" stroke="#dc2626"/><text x="100" y="164" font-size="12" fill="#dc2626">r</text><line x1="145" y1="40" x2="145" y2="170" stroke="#16a34a"/><text x="150" y="110" font-size="12" fill="#16a34a">h</text>
<circle cx="330" cy="35" r="28" fill="#bfdbfe" stroke="#1d4ed8"/><rect x="230" y="63" width="200" height="90" fill="#dbeafe" stroke="#1d4ed8"/><circle cx="330" cy="181" r="28" fill="#bfdbfe" stroke="#1d4ed8"/>
<g font-size="12"><text x="290" y="112">2πr (taban çevresi)</text><text x="436" y="112">h</text><text x="322" y="40">r</text></g>
<g font-size="12"><text x="445" y="30">Taban alanı = πr²</text><text x="445" y="50">Yanal alan = 2πrh</text><text x="445" y="70">Yüzey alanı =</text><text x="445" y="88">2πr² + 2πrh</text><text x="445" y="112">Hacim = πr² · h</text></g>
</svg><figcaption>Silindirin açınımı: iki eş daire + bir dikdörtgen. Dikdörtgenin bir kenarı taban çevresine (2πr), diğeri yüksekliğe (h) eşittir.</figcaption></div>
<div class="key"><b>Örnek:</b> r = 4 cm, h = 10 cm, π = 3 → yanal alan 2·3·4·10 = 240 cm²; yüzey alanı 2·3·16 + 240 = 336 cm²; hacim 3·16·10 = 480 cm³. <br>1 dm³ = 1 L = 1000 cm³; 1 m³ = 1000 L.</div>
<h3>3. Dik Piramit ve Dik Koni</h3>
<div class="two">
<div class="fig"><svg viewBox="0 0 240 190" width="240" role="img" aria-label="Kare piramit">
<polygon points="40,150 160,150 200,120 80,120" fill="#fef3c7" stroke="#b45309"/>
<polygon points="40,150 160,150 120,20" fill="#fde68a" stroke="#b45309" opacity=".9"/>
<polygon points="160,150 200,120 120,20" fill="#fcd34d" stroke="#b45309" opacity=".9"/>
<line x1="120" y1="20" x2="120" y2="135" stroke="#dc2626" stroke-dasharray="4 3"/><text x="124" y="95" font-size="11" fill="#dc2626">yükseklik</text><text x="110" y="15" font-size="11">tepe noktası</text>
<text x="70" y="175" font-size="12">Kare dik piramit</text>
</svg><figcaption>Taban çokgen, yan yüzler ortak tepe noktalı üçgenler. Açınım: çokgen + üçgenler.</figcaption></div>
<div class="fig"><svg viewBox="0 0 240 190" width="240" role="img" aria-label="Dik koni">
<ellipse cx="120" cy="150" rx="70" ry="18" fill="#dcfce7" stroke="#15803d"/><polygon points="50,150 190,150 120,20" fill="#bbf7d0" stroke="#15803d" opacity=".9"/>
<line x1="120" y1="20" x2="120" y2="150" stroke="#dc2626" stroke-dasharray="4 3"/><line x1="120" y1="150" x2="190" y2="150" stroke="#1d4ed8"/><text x="150" y="145" font-size="11" fill="#1d4ed8">r</text><text x="160" y="85" font-size="11">ana doğru</text>
<text x="80" y="185" font-size="12">Dik dairesel koni</text>
</svg><figcaption>Taban daire, yan yüzey eğri. Açınım: bir daire + bir daire dilimi.</figcaption></div>
</div>
<div class="note"><b>Görünümler:</b> Silindirin önden görünümü dikdörtgen, üstten görünümü daire; koninin önden görünümü üçgen, üstten görünümü (tepe noktasıyla) daire; kare piramidin üstten görünümü köşegenleri çizili kare.</div>
`,
qs: [
{ q: `<p>Taban yarıçapı 5 cm, yüksekliği 8 cm olan dik dairesel silindirin hacmi kaç santimetreküptür? (π = 3)</p>`,
  c: [`400`, `480`, `600`, `1200`], a: "C",
  s: `<p>V = πr²h = 3 · 5² · 8 = 3 · 25 · 8 = <b>600 cm³</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Taban yarıçapı 4 cm, yüksekliği 10 cm olan dik dairesel silindirin yanal alanı kaç santimetrekaredir? (π = 3)</p>`,
  c: [`120`, `180`, `200`, `240`], a: "D",
  s: `<p>Yanal alan = 2πrh = 2 · 3 · 4 · 10 = <b>240 cm²</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Taban yarıçapı 3 cm, yüksekliği 7 cm olan kapalı bir silindirin yüzey alanı kaç santimetrekaredir? (π = 3)</p>`,
  c: [`162`, `180`, `198`, `216`], a: "B",
  s: `<p>İki taban: 2πr² = 2 · 3 · 9 = 54. Yanal alan: 2πrh = 2 · 3 · 3 · 7 = 126.</p><p>Yüzey alanı = 54 + 126 = <b>180 cm²</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Bir silindirin açınımındaki yanal yüzey, kenarları 24 cm ve 10 cm olan bir dikdörtgendir. 24 cm’lik kenar taban çemberinin çevresine karşılık gelmektedir.</p><p>Buna göre bu silindirin hacmi kaç santimetreküptür? (π = 3)</p>`,
  c: [`360`, `480`, `640`, `960`], a: "B",
  s: `<p>2πr = 24 → 6r = 24 → r = 4 cm. Yükseklik h = 10 cm.</p><p>V = 3 · 4² · 10 = <b>480 cm³</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Silindir biçimindeki bir su deposunun taban yarıçapı 1 m, yüksekliği 2 m’dir.</p><p>Bu depo tamamen dolduğunda içinde kaç litre su bulunur? (π = 3; 1 m³ = 1000 L)</p>`,
  c: [`18 000`, `9000`, `12 000`, `6000`], a: "D",
  s: `<p>V = 3 · 1² · 2 = 6 m³ = 6 · 1000 = <b>6000 L</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Kare dik piramidin yüz, köşe ve ayrıt sayıları sırasıyla aşağıdakilerden hangisidir?</p>`,
  c: [`5, 5, 8`, `6, 8, 12`, `5, 6, 9`, `4, 5, 8`], a: "A",
  s: `<p>Kare piramit: 1 kare taban + 4 üçgen yan yüz = 5 yüz; 4 taban köşesi + 1 tepe = 5 köşe; 4 taban ayrıtı + 4 yan ayrıt = 8 ayrıt. Cevap <b>A</b>.</p>` },
{ q: `<p>Tabanı düzgün altıgen olan bir dik piramidin ayrıt sayısı kaçtır?</p>`,
  c: [`6`, `7`, `12`, `18`], a: "C",
  s: `<p>Tabanda 6 ayrıt, tepe noktasını taban köşelerine birleştiren 6 yan ayrıt → 6 + 6 = <b>12</b>. (n-gen piramitte 2n ayrıt.) Cevap <b>C</b>.</p>` },
{ q: `<p>Dik dairesel koninin açınımı ile ilgili aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [`Bir daire ve bir daire diliminden oluşur.`, `İki daire ve bir dikdörtgenden oluşur.`, `Bir daire ve üçgenlerden oluşur.`, `Bir kare ve dört üçgenden oluşur.`], a: "A",
  s: `<p>Koninin tabanı daire, yanal yüzeyi açıldığında bir <b>daire dilimi</b> oluşur.</p><p>İki daire + dikdörtgen silindire, çokgen + üçgenler piramide aittir. Cevap <b>A</b>.</p>` },
{ q: `<p>Bir cismin açınımı iki eş üçgen ve üç dikdörtgenden oluşmaktadır.</p><p>Bu cisim aşağıdakilerden hangisidir?</p>`,
  c: [`Üçgen dik piramit`, `Dik dairesel koni`, `Kare dik piramit`, `Üçgen dik prizma`], a: "D",
  s: `<p>İki eş ve paralel üçgen taban, yan yüzleri dikdörtgen → <b>üçgen dik prizma</b>.</p><p>Üçgen piramidin açınımı 4 üçgenden oluşur. Cevap <b>D</b>.</p>` },
{ q: `<p>Beşgen dik prizmanın ayrıt sayısı ile beşgen dik piramidin ayrıt sayısı arasındaki fark kaçtır?</p>`,
  c: [`3`, `5`, `10`, `15`], a: "B",
  s: `<p>Beşgen prizma: 3 · 5 = 15 ayrıt. Beşgen piramit: 2 · 5 = 10 ayrıt. Fark: 15 − 10 = <b>5</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Taban yarıçapı 10 cm olan silindir biçimindeki bir kapta bir miktar su vardır. Kaba atılan bir taş tamamen suya battığında suyun yüksekliği 3 cm artmaktadır.</p><p>Buna göre taşın hacmi kaç santimetreküptür? (π = 3)</p>`,
  c: [`900`, `1200`, `1800`, `2700`], a: "A",
  s: `<p>Taşın hacmi, yükselen suyun hacmine eşittir: 3 · 10² · 3 = <b>900 cm³</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>K silindirinin taban yarıçapı 2 cm ve yüksekliği 9 cm; L silindirinin taban yarıçapı 3 cm ve yüksekliği 4 cm’dir.</p><p>Bu silindirlerin hacimleri için aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [`Hacimleri eşittir.`, `K’nin hacmi L’nin hacminden büyüktür.`, `L’nin hacmi K’nin hacminden büyüktür.`, `K’nin hacmi L’nin hacminin iki katıdır.`], a: "A",
  s: `<p>V(K) = π · 4 · 9 = 36π; V(L) = π · 9 · 4 = 36π → hacimleri <b>eşittir</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>Silindir biçimindeki bir konserve kutusunun taban yarıçapı 4 cm, yüksekliği 12 cm’dir. Kutunun yalnızca yan yüzeyine bir etiket yapıştırılacaktır.</p><p>Etiketin alanı kaç santimetrekaredir? (π = 3)</p>`,
  c: [`192`, `288`, `384`, `576`], a: "B",
  s: `<p>Etiket yanal yüzeyi kaplar: 2πrh = 2 · 3 · 4 · 12 = <b>288 cm²</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Hacmi 1080 cm³ olan bir silindirin taban yarıçapı 6 cm’dir.</p><p>Buna göre bu silindirin yüksekliği kaç santimetredir? (π = 3)</p>`,
  c: [`6`, `8`, `9`, `10`], a: "D",
  s: `<p>1080 = 3 · 6² · h = 108h → h = <b>10 cm</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Bir silindirin yüksekliği değiştirilmeden taban yarıçapı 2 katına çıkarılıyor.</p><p>Buna göre silindirin hacmi kaç katına çıkar?</p>`,
  c: [`2`, `4`, `6`, `8`], a: "B",
  s: `<p>V = πr²h. r yerine 2r yazılırsa π(2r)²h = 4πr²h → hacim <b>4 katına</b> çıkar. Cevap <b>B</b>.</p>` },
{ q: `<p>Üçgen dik prizmanın yüz, köşe ve ayrıt sayılarının toplamı kaçtır?</p>`,
  c: [`15`, `18`, `20`, `24`], a: "C",
  s: `<p>Yüz: 2 taban + 3 yan = 5. Köşe: 2 · 3 = 6. Ayrıt: 3 · 3 = 9. Toplam: 5 + 6 + 9 = <b>20</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Bir dik koninin tepe noktası ile taban çemberi üzerindeki herhangi bir noktayı birleştiren doğru parçasına ne ad verilir?</p>`,
  c: [`Yükseklik`, `Taban ayrıtı`, `Yarıçap`, `Ana doğru`], a: "D",
  s: `<p>Tepe noktasını taban çemberindeki bir noktaya birleştiren doğru parçası <b>ana doğrudur</b>. Yükseklik ise tepe noktasından tabana dik inen doğru parçasıdır. Cevap <b>D</b>.</p>` },
{ q: `<p>Önden ve yandan bakıldığında ikizkenar üçgen, üstten bakıldığında merkezi işaretli bir daire olarak görülen cisim aşağıdakilerden hangisidir?</p>`,
  c: [`Silindir`, `Kare dik piramit`, `Dik dairesel koni`, `Üçgen dik prizma`], a: "C",
  s: `<p>Tabanı daire ve tepesi tek nokta olan cisim konidir: önden/yandan üçgen, üstten daire (merkezde tepe noktası) görünür.</p><p>Silindir önden dikdörtgen; kare piramit üstten kare görünür. Cevap <b>C</b>.</p>` },
{ q: `<p>Silindir biçimindeki bir silonun taban yarıçapı 3 m, yüksekliği 10 m’dir. Silonun yalnızca yan yüzeyi ve üst tabanı boyanacaktır. 1 kg boya ile 9 m² alan boyanabilmektedir.</p><p>Buna göre bu iş için kaç kilogram boya gerekir? (π = 3)</p>`,
  c: [`18`, `20`, `21`, `23`], a: "D",
  s: `<p>Yanal alan: 2 · 3 · 3 · 10 = 180 m². Üst taban: 3 · 3² = 27 m². Toplam 207 m².</p><p>Boya: 207 ÷ 9 = <b>23 kg</b>. Alt taban boyanmayacağı için dâhil edilmez. Cevap <b>D</b>.</p>` },
{ q: `<p>Silindir biçimindeki bir sürahinin taban yarıçapı 6 cm, yüksekliği 20 cm’dir. Sürahi tamamen su doluyken bu su, taban yarıçapı 3 cm ve yüksekliği 10 cm olan silindir biçimindeki bardaklara boşaltılıyor.</p><p>Buna göre kaç bardak tamamen dolar?</p>`,
  c: [`4`, `6`, `8`, `12`], a: "C",
  s: `<p>Sürahi: π · 36 · 20 = 720π. Bardak: π · 9 · 10 = 90π.</p><p>720π ÷ 90π = <b>8</b> bardak. (Yarıçap yarıya, yükseklik yarıya inince hacim 1/8’e düşer.) Cevap <b>C</b>.</p>` },
{ q: `<p>Bir silindirin açınımında yanal yüzey, kenarları 30 cm ve 12 cm olan bir dikdörtgendir. 30 cm’lik kenar taban çevresine karşılık gelmektedir.</p><p>Buna göre bu silindirin bir tabanının alanı kaç santimetrekaredir? (π = 3)</p>`,
  c: [`75`, `90`, `100`, `150`], a: "A",
  s: `<p>2πr = 30 → 6r = 30 → r = 5 cm. Taban alanı = πr² = 3 · 25 = <b>75 cm²</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>Dik prizma ile dik piramit arasındaki farklarla ilgili aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [`Prizmanın yan yüzleri dikdörtgen, piramidin yan yüzleri üçgendir.`, `Prizmanın bir tabanı, piramidin iki tabanı vardır.`, `Prizmanın yan yüzleri üçgen, piramidin yan yüzleri dikdörtgendir.`, `Prizmanın tepe noktası vardır, piramidin yoktur.`], a: "A",
  s: `<p>Dik prizmanın iki eş tabanı ve <b>dikdörtgen</b> yan yüzleri vardır. Dik piramidin bir tabanı ve ortak tepe noktasında birleşen <b>üçgen</b> yan yüzleri vardır. Cevap <b>A</b>.</p>` },
{ q: `<p>Beşgen dik prizmanın yüz sayısı kaçtır?</p>`,
  c: [`7`, `8`, `10`, `15`], a: "A",
  s: `<p>2 beşgen taban + 5 dikdörtgen yan yüz = <b>7</b> yüz. (10 köşe, 15 ayrıt.) Cevap <b>A</b>.</p>` },
{ q: `<p>Dik dairesel bir silindir, tabanına paralel bir düzlemle kesiliyor.</p><p>Oluşan kesit yüzeyinin biçimi aşağıdakilerden hangisidir?</p>`,
  c: [`Dikdörtgen`, `Üçgen`, `Daire`, `Elips dilimi`], a: "C",
  s: `<p>Tabana paralel kesitler tabanla aynı biçimdedir: <b>daire</b>. (Silindiri tabana dik ve eksenden geçen bir düzlemle kesersek dikdörtgen oluşur.) Cevap <b>C</b>.</p>` },
{ q: `<p>Bir silindirin taban yarıçapı 2 katına çıkarılıp yüksekliği yarıya indiriliyor.</p><p>Buna göre yeni silindirin hacmi, ilk silindirin hacminin kaç katıdır?</p>`,
  c: [`{{1|2}}`, `1`, `2`, `4`], a: "C", noShuffle: true,
  s: `<p>Yeni hacim: π(2r)² · {{h|2}} = π · 4r² · {{h|2}} = 2πr²h → ilk hacmin <b>2 katı</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>İç ölçüleri 10 cm × 10 cm × 10 cm olan küp biçimindeki bir kutunun içine sığabilecek en büyük silindir yerleştiriliyor (silindirin tabanı kutunun tabanına oturuyor).</p><p>Buna göre kutuda silindir dışında kalan boşluğun hacmi kaç santimetreküptür? (π = 3)</p>`,
  c: [`150`, `250`, `300`, `750`], a: "B",
  s: `<p>En büyük silindir: r = 5 cm, h = 10 cm → V = 3 · 25 · 10 = 750 cm³. Küp: 10³ = 1000 cm³.</p><p>Boşluk: 1000 − 750 = <b>250 cm³</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Kapalı bir silindirin yüzey alanı “2πr² + 2πrh” bağıntısıyla hesaplanır.</p><p>Bu bağıntıdaki “2πrh” ifadesi silindirin hangi bölümünün alanını gösterir?</p>`,
  c: [`İki tabanın alanları toplamını`, `Yanal yüzeyin (açınımdaki dikdörtgenin) alanını`, `Bir tabanın alanını`, `Silindirin hacmini`], a: "B",
  s: `<p>Yanal yüzey açıldığında bir dikdörtgen olur: bir kenarı taban çevresi (2πr), diğer kenarı yükseklik (h). Alanı <b>2πrh</b>’dir. 2πr² iki tabanın alanıdır. Cevap <b>B</b>.</p>` }
]
});
