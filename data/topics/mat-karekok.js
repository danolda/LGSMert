LGS.add({
id: "mat-karekok",
summary: `
<h3>1. Tam Kare Sayılar ve Karekök</h3>
<p>Bir doğal sayının kendisiyle çarpımı <b>tam kare sayıdır</b>: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225… Alanı a olan karenin kenar uzunluğu <b>√a</b>’dır.</p>
<div class="two">
<div class="fig"><svg viewBox="0 0 220 170" width="220" role="img" aria-label="Alanı 25 olan kare">
<rect x="20" y="15" width="125" height="125" fill="#dbeafe" stroke="#2563eb"/>
<g stroke="#93c5fd"><line x1="45" y1="15" x2="45" y2="140"/><line x1="70" y1="15" x2="70" y2="140"/><line x1="95" y1="15" x2="95" y2="140"/><line x1="120" y1="15" x2="120" y2="140"/><line x1="20" y1="40" x2="145" y2="40"/><line x1="20" y1="65" x2="145" y2="65"/><line x1="20" y1="90" x2="145" y2="90"/><line x1="20" y1="115" x2="145" y2="115"/></g>
<text x="82" y="160" text-anchor="middle" font-size="13">kenar = √25 = 5</text><text x="155" y="80" font-size="13">Alan = 25</text>
</svg><figcaption>√25 = 5 çünkü 5² = 25.</figcaption></div>
<div class="fig"><svg viewBox="0 0 300 110" width="300" role="img" aria-label="Karekök değerlerinin sayı doğrusunda gösterimi">
<line x1="10" y1="50" x2="290" y2="50" stroke="#333"/>
<g font-size="12" text-anchor="middle"><line x1="40" y1="45" x2="40" y2="55" stroke="#333"/><text x="40" y="72">5</text>
<line x1="150" y1="45" x2="150" y2="55" stroke="#333"/><text x="150" y="72">6</text>
<line x1="260" y1="45" x2="260" y2="55" stroke="#333"/><text x="260" y="72">7</text>
<circle cx="99" cy="50" r="5" fill="#dc2626"/><text x="99" y="35" fill="#dc2626">√30 ≈ 5,48</text>
<text x="150" y="98" font-size="12">25 &lt; 30 &lt; 36 → 5 &lt; √30 &lt; 6</text></g>
</svg><figcaption>Tam kare olmayan sayının karekökü iki ardışık doğal sayı arasındadır.</figcaption></div>
</div>
<h3>2. Kareköklü İfadelerle İşlemler</h3>
<div class="tbl"><table>
<tr><th>Kural</th><th>Örnek</th></tr>
<tr><td>√(a²·b) = a√b (kök dışına çıkarma)</td><td>√72 = √(36·2) = 6√2</td></tr>
<tr><td>a√b = √(a²·b) (kök içine alma)</td><td>3√5 = √45</td></tr>
<tr><td>√a · √b = √(a·b)</td><td>√8 · √2 = √16 = 4</td></tr>
<tr><td>√a ÷ √b = √(a÷b)</td><td>√96 ÷ √6 = √16 = 4</td></tr>
<tr><td>Toplama-çıkarma: kök içleri aynı olmalı</td><td>2√3 + 5√3 = 7√3; √12 + √27 = 2√3 + 3√3 = 5√3</td></tr>
<tr><td>Dikkat: √a + √b ≠ √(a+b)</td><td>√9 + √16 = 7, √25 = 5</td></tr>
</table></div>
<h3>3. Ondalık ve Kesirli Sayıların Karekökü</h3>
<p>√0,64 = 0,8; √0,09 = 0,3; √0,0049 = 0,07 (virgülden sonraki basamak sayısı yarıya iner). √({{9|16}}) = {{3|4}}.</p>
<h3>4. Gerçek Sayılar</h3>
<div class="fig"><svg viewBox="0 0 420 150" width="420" role="img" aria-label="Sayı kümeleri">
<rect x="5" y="5" width="410" height="140" rx="12" fill="#f5f3ff" stroke="#7c3aed"/><text x="18" y="25" font-size="13" font-weight="bold">Gerçek sayılar (ℝ)</text>
<rect x="20" y="35" width="250" height="100" rx="10" fill="#e0f2fe" stroke="#0284c7"/><text x="30" y="53" font-size="12" font-weight="bold">Rasyonel (ℚ)</text>
<rect x="35" y="62" width="150" height="65" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="45" y="80" font-size="12">Tam sayılar: −2, 0, 5</text><text x="45" y="100" font-size="12">Doğal: 0, 1, 2…</text>
<text x="192" y="85" font-size="12">{{1|2}}, 0,25</text><text x="192" y="105" font-size="12">0,3̅ , √0,16</text>
<rect x="280" y="35" width="125" height="100" rx="10" fill="#fee2e2" stroke="#dc2626"/><text x="290" y="53" font-size="12" font-weight="bold">İrrasyonel</text><text x="290" y="78" font-size="12">√2, √12, π</text><text x="290" y="98" font-size="12">devirsiz sonsuz</text><text x="290" y="114" font-size="12">ondalık</text>
</svg><figcaption>Tam kare olmayan sayıların karekökü irrasyoneldir.</figcaption></div>
<div class="note"><b>Tahmin:</b> √70 için 8² = 64 &lt; 70 &lt; 81 = 9² → 8 ile 9 arası; 70, 64’e daha yakın olduğundan √70 ≈ 8,4. Kontrol: 8,4² = 70,56.</div>
<div class="key"><b>Sıralama ipucu:</b> Kareköklü sayıları karşılaştırmak için hepsini kök içine al: 2√7 = √28, 3√3 = √27, 4√2 = √32, 5 = √25.</div>
`,
qs: [
{ q: `<p>√50 sayısı hangi iki ardışık doğal sayı arasındadır?</p>`,
  c: [`7 ile 8`, `8 ile 9`, `24 ile 25`, `25 ile 26`], a: "A",
  s: `<p>7² = 49 &lt; 50 &lt; 64 = 8² olduğundan 7 &lt; √50 &lt; 8. Cevap <b>A</b>.</p>` },
{ q: `<p>Alanı 196 m² olan kare biçimindeki bir bahçenin çevresi, 3 sıra tel ile çevrilecektir.</p><p>Buna göre kaç metre tel gerekir?</p>`,
  c: [`112`, `140`, `168`, `196`], a: "C",
  s: `<p>Bahçenin kenarı √196 = 14 m, çevresi 4 · 14 = 56 m.</p><p>3 sıra tel: 3 · 56 = <b>168 m</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>√0,64 + √0,09 işleminin sonucu kaçtır?</p>`,
  c: [`0,11`, `0,73`, `1`, `1,1`], a: "D",
  s: `<p>√0,64 = 0,8 (0,8² = 0,64), √0,09 = 0,3 (0,3² = 0,09).</p><p>0,8 + 0,3 = <b>1,1</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>3√5 · √x çarpımının sonucu bir doğal sayıdır.</p><p>Buna göre x’in alabileceği <b>en küçük</b> doğal sayı değeri kaçtır? (x ≠ 0)</p>`,
  c: [`3`, `5`, `15`, `45`], a: "B",
  s: `<p>3√5 · √x = 3√(5x). Sonucun doğal sayı olması için 5x tam kare olmalıdır.</p><p>En küçük x = 5 → 3√25 = 3 · 5 = 15 ✓. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki sayılardan hangisi <b>irrasyonel</b> sayıdır?</p>`,
  c: [`√0,16`, `√({{9|4}})`, `0,3̅`, `√12`], a: "D",
  s: `<p>√0,16 = 0,4; √({{9|4}}) = {{3|2}}; 0,3̅ = {{1|3}} → hepsi rasyonel.</p><p>12 tam kare olmadığından √12 = 2√3 <b>irrasyoneldir</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>√12 + √27 − √48 işleminin sonucu kaçtır?</p>`,
  c: [`√3`, `2√3`, `3√3`, `9√3`], a: "A",
  s: `<p>√12 = 2√3, √27 = 3√3, √48 = 4√3.</p><p>2√3 + 3√3 − 4√3 = <b>√3</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>Kenar uzunluğu √45 cm olan bir karenin çevresi ile kenar uzunluğu √20 cm olan bir karenin çevresi arasındaki fark kaç santimetredir?</p>`,
  c: [`2√5`, `3√5`, `4√5`, `5√5`], a: "C",
  s: `<p>√45 = 3√5, √20 = 2√5. Çevreler: 4 · 3√5 = 12√5 ve 4 · 2√5 = 8√5.</p><p>Fark: 12√5 − 8√5 = <b>4√5</b> cm. Cevap <b>C</b>.</p>` },
{ q: `<p>Kenar uzunlukları √18 cm ve √8 cm olan dikdörtgen biçimindeki bir kartın alanı kaç santimetrekaredir?</p>`,
  c: [`10`, `12`, `13√2`, `24`], a: "B",
  s: `<p>Alan = √18 · √8 = √144 = <b>12 cm²</b>. (Ya da 3√2 · 2√2 = 6 · 2 = 12.) Cevap <b>B</b>.</p>` },
{ q: `<p>a bir doğal sayı olmak üzere √a sayısı 6 ile 7 arasındadır.</p><p>Buna göre a’nın alabileceği kaç farklı değer vardır?</p>`,
  c: [`12`, `13`, `14`, `15`], a: "A",
  s: `<p>6 &lt; √a &lt; 7 → 36 &lt; a &lt; 49.</p><p>a ∈ {37, 38, …, 48} → 48 − 37 + 1 = <b>12</b> değer. Cevap <b>A</b>.</p>` },
{ q: `<p>Alanları 8 cm², 18 cm² ve 32 cm² olan üç kare, alt kenarları aynı doğru üzerinde olacak ve aralarında boşluk kalmayacak biçimde yan yana diziliyor.</p>
<svg viewBox="0 0 320 130" width="300"><g stroke="#2563eb"><rect x="10" y="80" width="40" height="40" fill="#dbeafe"/><rect x="50" y="60" width="60" height="60" fill="#bfdbfe"/><rect x="110" y="40" width="80" height="80" fill="#93c5fd"/></g><line x1="5" y1="120" x2="200" y2="120" stroke="#333"/><g font-size="11"><text x="16" y="104">8</text><text x="70" y="94">18</text><text x="140" y="84">32</text></g></svg>
<p>Buna göre oluşan şeklin alt kenarının toplam uzunluğu kaç santimetredir?</p>`,
  c: [`3√2`, `6√2`, `8√2`, `9√2`], a: "D",
  s: `<p>Kenarlar: √8 = 2√2, √18 = 3√2, √32 = 4√2.</p><p>Toplam: 2√2 + 3√2 + 4√2 = <b>9√2 cm</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>√0,0049 sayısının değeri kaçtır?</p>`,
  c: [`0,007`, `0,07`, `0,7`, `7`], a: "B",
  s: `<p>0,07 · 0,07 = 0,0049 olduğundan √0,0049 = <b>0,07</b>.</p><p>İpucu: Kök içinde virgülden sonra 4 basamak var; sonuçta 2 basamak olur. Cevap <b>B</b>.</p>` },
{ q: `<p>√70 sayısının değeri, aşağıdakilerden hangisine <b>en yakındır</b>?</p>`,
  c: [`8,1`, `8,2`, `8,4`, `8,8`], a: "C",
  s: `<p>8² = 64, 9² = 81 → √70 sayısı 8 ile 9 arasında ve 70, 64’e daha yakındır.</p><p>8,3² = 68,89 ve 8,4² = 70,56. 70’e uzaklıklar: 1,11 ve 0,56 → √70 ≈ <b>8,4</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>5√3 sayısı aşağıdakilerden hangisine eşittir?</p>`,
  c: [`√15`, `√45`, `√75`, `√225`], a: "C",
  s: `<p>Kök dışındaki sayı karesi alınarak içeri girer: 5√3 = √(5² · 3) = <b>√75</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>√96 ÷ √6 işleminin sonucu kaçtır?</p>`,
  c: [`4`, `2√6`, `4√6`, `16`], a: "A",
  s: `<p>√96 ÷ √6 = √(96 ÷ 6) = √16 = <b>4</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>Kare biçimindeki bir odanın tabanının alanı 75 m²’dir. Odanın bir duvarının tabanı boyunca, her biri 1 m uzunluğunda olan süpürgelik parçaları uç uca eklenerek döşenecektir.</p><p>Duvarın tamamının döşenmesi için <b>en az</b> kaç parça süpürgelik gerekir?</p>`,
  c: [`6`, `7`, `8`, `9`], a: "D",
  s: `<p>Duvar uzunluğu √75 = 5√3 m. √75 sayısı 8 ile 9 arasındadır (64 &lt; 75 &lt; 81); yaklaşık 8,66 m.</p><p>8 parça yetmez, en az <b>9</b> parça gerekir. Cevap <b>D</b>.</p>` },
{ q: `<p>2√7, 3√3, 4√2 ve 5 sayılarının küçükten büyüğe doğru sıralanışı aşağıdakilerden hangisidir?</p>`,
  c: [`3√3 &lt; 5 &lt; 2√7 &lt; 4√2`, `5 &lt; 3√3 &lt; 2√7 &lt; 4√2`, `5 &lt; 2√7 &lt; 3√3 &lt; 4√2`, `2√7 &lt; 3√3 &lt; 4√2 &lt; 5`], a: "B",
  s: `<p>Hepsini kök içine alalım: 2√7 = √28, 3√3 = √27, 4√2 = √32, 5 = √25.</p><p>√25 &lt; √27 &lt; √28 &lt; √32 → <b>5 &lt; 3√3 &lt; 2√7 &lt; 4√2</b>. Cevap <b>B</b>.</p>` }
]
});
