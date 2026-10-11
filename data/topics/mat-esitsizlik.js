LGS.add({
id: "mat-esitsizlik",
summary: `
<h3>1. Eşitsizlik Sembolleri</h3>
<div class="tbl"><table>
<tr><th>Sembol</th><th>Okunuşu</th><th>Günlük dilde</th></tr>
<tr><td>x &gt; 3</td><td>x, 3’ten büyük</td><td>“3’ten fazla”, “3’ü aşan”</td></tr>
<tr><td>x ≥ 3</td><td>x, 3’ten büyük veya eşit</td><td>“en az 3”</td></tr>
<tr><td>x &lt; 3</td><td>x, 3’ten küçük</td><td>“3’ten az”, “3’e ulaşmayan”</td></tr>
<tr><td>x ≤ 3</td><td>x, 3’ten küçük veya eşit</td><td>“en fazla 3”, “3’ü geçmeyen”</td></tr>
</table></div>
<h3>2. Sayı Doğrusunda Gösterim</h3>
<div class="fig"><svg viewBox="0 0 520 150" width="520" role="img" aria-label="Eşitsizliklerin sayı doğrusunda gösterimi">
<g font-size="12">
<line x1="20" y1="30" x2="250" y2="30" stroke="#333" marker-end="url(#ar)"/><line x1="20" y1="30" x2="130" y2="30" stroke="#2563eb" stroke-width="5"/><circle cx="130" cy="30" r="6" fill="#fff" stroke="#2563eb" stroke-width="2"/><text x="125" y="52">3</text><text x="20" y="70">x &lt; 3 (boş daire: 3 dâhil değil)</text>
<line x1="280" y1="30" x2="510" y2="30" stroke="#333"/><line x1="390" y1="30" x2="510" y2="30" stroke="#2563eb" stroke-width="5"/><circle cx="390" cy="30" r="6" fill="#2563eb"/><text x="385" y="52">3</text><text x="280" y="70">x ≥ 3 (dolu daire: 3 dâhil)</text>
<line x1="20" y1="105" x2="510" y2="105" stroke="#333"/><line x1="150" y1="105" x2="380" y2="105" stroke="#16a34a" stroke-width="5"/><circle cx="150" cy="105" r="6" fill="#fff" stroke="#16a34a" stroke-width="2"/><circle cx="380" cy="105" r="6" fill="#16a34a"/><text x="140" y="127">−2</text><text x="375" y="127">4</text><text x="190" y="145">−2 &lt; x ≤ 4</text>
</g></svg><figcaption>Boş daire sınır dâhil değil, dolu daire sınır dâhil.</figcaption></div>
<h3>3. Eşitsizlik Çözme</h3>
<ul>
<li>Her iki tarafa aynı sayı eklenir/çıkarılır → yön değişmez: x − 4 &lt; 2 → x &lt; 6.</li>
<li>Pozitif sayıyla çarpma/bölme → yön değişmez: 3x ≤ 12 → x ≤ 4.</li>
<li><b>Negatif sayıyla çarpma/bölme → yön değişir!</b> −2x ≥ −6 → x ≤ 3.</li>
<li>İki yönlü eşitsizlikte işlemler üç tarafa birden yapılır: −1 &lt; 2x + 3 ≤ 9 → −4 &lt; 2x ≤ 6 → −2 &lt; x ≤ 3.</li>
</ul>
<div class="note"><b>Tam sayı sayma:</b> −3 ≤ x &lt; 5 aralığındaki tam sayılar −3, −2, …, 4 → 8 tane. Sınırların dâhil olup olmadığına dikkat et!</div>
<div class="key"><b>Problem kurma:</b> “en az” → ≥, “en fazla” → ≤, “aşmamalı” → ≤, “daha ucuz” → &lt;. Örnek: 600 kg taşıyan asansöre 75 kg’lık görevli ile 25 kg’lık koliler → 75 + 25x ≤ 600 → x ≤ 21. Sonuç tam sayı olmalıysa yuvarlamaya dikkat: 4,4 gün → en az 5 gün; 14,6 kalem → en fazla 14 kalem.</div>
`,
qs: [
{ q: `<p>3x − 5 &lt; 13 eşitsizliğini sağlayan <b>en büyük tam sayı</b> kaçtır?</p>`,
  c: [`5`, `6`, `7`, `8`], a: "A",
  s: `<p>3x &lt; 18 → x &lt; 6. 6 dâhil olmadığından en büyük tam sayı <b>5</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>−2x + 7 ≥ 1 eşitsizliğinin çözüm kümesi aşağıdakilerden hangisidir?</p>`,
  c: [`x ≤ −3`, `x ≥ 3`, `x ≤ 3`, `x ≥ −3`], a: "C",
  s: `<p>−2x ≥ 1 − 7 → −2x ≥ −6. Her iki tarafı −2’ye bölerken <b>yön değişir</b>: x ≤ 3. Cevap <b>C</b>.</p>` },
{ q: `<p>Bir sayı doğrusunda −2’nin üzerinde boş daire, 4’ün üzerinde dolu daire vardır ve bu iki nokta arası boyanmıştır.</p><p>Bu gösterime karşılık gelen eşitsizlik aşağıdakilerden hangisidir?</p>`,
  c: [`−2 ≤ x ≤ 4`, `−2 &lt; x ≤ 4`, `−2 ≤ x &lt; 4`, `−2 &lt; x &lt; 4`], a: "B",
  s: `<p>Boş daire sınırın dâhil olmadığını (&lt;), dolu daire dâhil olduğunu (≤) gösterir.</p><p>−2 dâhil değil, 4 dâhil → <b>−2 &lt; x ≤ 4</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>−3 ≤ x &lt; 5 eşitsizliğini sağlayan kaç tane tam sayı vardır?</p>`,
  c: [`6`, `7`, `8`, `9`], a: "C",
  s: `<p>Tam sayılar: −3, −2, −1, 0, 1, 2, 3, 4 → <b>8</b> tane (−3 dâhil, 5 dâhil değil). Cevap <b>C</b>.</p>` },
{ q: `<p>En fazla 600 kg yük taşıyabilen bir yük asansörüne 75 kg ağırlığındaki bir görevli binmiştir. Görevli, asansöre her biri 25 kg olan özdeş kolilerden yükleyecektir.</p><p>Buna göre asansöre en fazla kaç koli yüklenebilir?</p>`,
  c: [`18`, `19`, `20`, `21`], a: "D",
  s: `<p>75 + 25x ≤ 600 → 25x ≤ 525 → x ≤ 21. En fazla <b>21</b> koli. Cevap <b>D</b>.</p>` },
{ q: `<p>Bir öğrencinin bir dersten geçebilmesi için üç sınavın ortalamasının <b>en az</b> 70 olması gerekmektedir. Öğrenci ilk iki sınavdan 62 ve 75 almıştır.</p><p>Buna göre öğrenci üçüncü sınavdan <b>en az</b> kaç almalıdır?</p>`,
  c: [`72`, `73`, `74`, `75`], a: "B",
  s: `<p>{{62 + 75 + x|3}} ≥ 70 → 137 + x ≥ 210 → x ≥ 73. En az <b>73</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Bir lunaparktaki oyuncağa “boyu 120 cm’den uzun ve 190 cm’den kısa olanlar” binebilmektedir.</p><p>Bu oyuncağa binebilecek kişinin boyunu (x) gösteren eşitsizlik aşağıdakilerden hangisidir?</p>`,
  c: [`120 ≤ x &lt; 190`, `120 ≤ x ≤ 190`, `120 &lt; x &lt; 190`, `120 &lt; x ≤ 190`], a: "C",
  s: `<p>“120’den uzun” → x &gt; 120 (120 dâhil değil), “190’dan kısa” → x &lt; 190 (190 dâhil değil).</p><p><b>120 &lt; x &lt; 190</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>a ve b gerçek sayıları için a &lt; b’dir.</p><p>Buna göre aşağıdakilerden hangisi <b>kesinlikle doğrudur</b>?</p>`,
  c: [`{{a|2}} &gt; {{b|2}}`, `−2a &lt; −2b`, `a − 3 &gt; b − 3`, `−2a &gt; −2b`], a: "D",
  s: `<p>Negatif bir sayıyla çarpınca eşitsizliğin yönü değişir: a &lt; b → −2a &gt; −2b ✓.</p><p>Aynı sayıyı çıkarmak ya da pozitif sayıya bölmek yönü değiştirmez: a − 3 &lt; b − 3 ve {{a|2}} &lt; {{b|2}}. Cevap <b>D</b>.</p>` },
{ q: `<p>−1 &lt; 2x + 3 ≤ 9 eşitsizliğinin çözüm kümesi aşağıdakilerden hangisidir?</p>`,
  c: [`−1 &lt; x ≤ 6`, `−2 ≤ x &lt; 3`, `−2 &lt; x ≤ 3`, `−4 &lt; x ≤ 6`], a: "C",
  s: `<p>Üç taraftan 3 çıkaralım: −4 &lt; 2x ≤ 6. Üç tarafı 2’ye bölelim: <b>−2 &lt; x ≤ 3</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Bir otoyolda araçların hızı <b>en az</b> 40 km/sa, <b>en fazla</b> 120 km/sa olmalıdır.</p><p>Bu kurala uygun hız (v) aşağıdaki eşitsizliklerden hangisiyle gösterilir?</p>`,
  c: [`40 &lt; v &lt; 120`, `40 ≤ v ≤ 120`, `40 ≤ v &lt; 120`, `v ≤ 40 veya v ≥ 120`], a: "B",
  s: `<p>“En az 40” → v ≥ 40, “en fazla 120” → v ≤ 120 → <b>40 ≤ v ≤ 120</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Bir kargo şirketi 5 kg’a kadar olan paketler için 80 TL, 5 kg’ı aşan her kilogram için ayrıca 12 TL almaktadır.</p><p>Kargo için en fazla 200 TL ödemek isteyen bir kişi en fazla kaç kilogramlık paket gönderebilir?</p>`,
  c: [`10`, `12`, `15`, `20`], a: "C",
  s: `<p>x kg’lık paket (x &gt; 5): 80 + 12(x − 5) ≤ 200 → 12(x − 5) ≤ 120 → x − 5 ≤ 10 → x ≤ 15.</p><p>En fazla <b>15 kg</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Kısa kenarı 5 cm olan dikdörtgen biçimindeki bir kartın çevresi 30 cm’den azdır. Kartın uzun kenarının uzunluğu santimetre cinsinden bir tam sayıdır.</p><p>Buna göre uzun kenar kaç farklı değer alabilir?</p>`,
  c: [`4`, `5`, `6`, `7`], a: "A",
  s: `<p>Uzun kenar u: 2(5 + u) &lt; 30 → 5 + u &lt; 15 → u &lt; 10. Ayrıca uzun kenar kısa kenardan büyük: u &gt; 5.</p><p>5 &lt; u &lt; 10 → 6, 7, 8, 9 → <b>4</b> değer. Cevap <b>A</b>.</p>` },
{ q: `<p>Bir internet şirketinin iki paketi vardır:</p><p>• Esnek paket: Aylık 100 TL + kullanılan her MB için 0,5 TL<br>• Sınırsız paket: Aylık 150 TL</p><p>Esnek paketin, sınırsız paketten daha ucuz olması için aylık kullanım (x MB) nasıl olmalıdır?</p>`,
  c: [`x &gt; 300`, `x &gt; 100`, `x &lt; 50`, `x &lt; 100`], a: "D",
  s: `<p>100 + 0,5x &lt; 150 → 0,5x &lt; 50 → <b>x &lt; 100</b>. 100 MB’tan az kullanan için esnek paket daha ucuzdur. Cevap <b>D</b>.</p>` },
{ q: `<p>Bir aşının 2 °C ile 8 °C arasında (2 ve 8 dâhil) saklanması gerekmektedir.</p><p>Bu durumun sayı doğrusundaki gösterimi için aşağıdakilerden hangisi doğrudur?</p>`,
  c: [`2 ve 8 üzerinde dolu daire, aradaki bölge boyalı`, `2 ve 8 üzerinde boş daire, aradaki bölge boyalı`, `2 üzerinde dolu, 8 üzerinde boş daire, aradaki bölge boyalı`, `2’nin solu ve 8’in sağı boyalı`], a: "A",
  s: `<p>2 ≤ x ≤ 8: sınırlar dâhil olduğu için iki uçta da <b>dolu daire</b>, arası boyalı. Cevap <b>A</b>.</p>` },
{ q: `<p>Bir sürücü günde en az 300 km, en fazla 450 km yol gitmektedir.</p><p>Bu sürücü 2000 km’lik bir yolu <b>en az</b> kaç günde tamamlayabilir?</p>`,
  c: [`2`, `3`, `4`, `5`], a: "D",
  s: `<p>En az gün için her gün en fazla yol (450 km) gidilmeli: 450 · g ≥ 2000 → g ≥ 4,44…</p><p>Gün sayısı tam sayı olduğundan en az <b>5</b> gün. Cevap <b>D</b>.</p>` },
{ q: `<p>5 − 2x &lt; −7 eşitsizliğini sağlayan <b>en küçük tam sayı</b> kaçtır?</p>`,
  c: [`7`, `8`, `9`, `10`], a: "A",
  s: `<p>−2x &lt; −12 → (−2’ye bölünce yön değişir) x &gt; 6. 6 dâhil değil → en küçük tam sayı <b>7</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>{{x − 1|3}} ≥ 2 eşitsizliğinin çözüm kümesi aşağıdakilerden hangisidir?</p>`,
  c: [`x ≥ 5`, `x ≥ 7`, `x ≤ 7`, `x ≥ 3`], a: "B",
  s: `<p>Her iki tarafı 3 ile çarpalım: x − 1 ≥ 6 → <b>x ≥ 7</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Eşit kollu bir terazinin sol kefesine 50 g’lık bir ağırlık ile x gramlık iki özdeş kutu, sağ kefesine 230 g’lık bir ağırlık konuluyor. Terazinin sol kefesinin aşağıda kaldığı gözleniyor.</p><p>Buna göre x’in alabileceği değerler aşağıdakilerden hangisidir?</p>`,
  c: [`x &gt; 140`, `x &lt; 90`, `x &gt; 90`, `0 &lt; x &lt; 90`], a: "C",
  s: `<p>Sol kefe aşağıda → sol taraf daha ağır: 2x + 50 &gt; 230 → 2x &gt; 180 → <b>x &gt; 90</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Bir okul gezisine 177 öğrenci ve 8 öğretmen katılacaktır. Gezi için her biri 45 kişilik otobüsler kiralanacaktır.</p><p>Buna göre <b>en az</b> kaç otobüs kiralanmalıdır?</p>`,
  c: [`4`, `5`, `6`, `7`], a: "B",
  s: `<p>Toplam kişi: 177 + 8 = 185. 45 · n ≥ 185 → n ≥ 4,11…</p><p>4 otobüs 180 kişi alır, yetmez → en az <b>5</b> otobüs. Cevap <b>B</b>.</p>` },
{ q: `<p>4x − 3 &gt; 2x + 5 eşitsizliği veriliyor.</p><p>Aşağıdaki sayılardan hangisi bu eşitsizliğin çözüm kümesinde <b>değildir</b>?</p>`,
  c: [`4`, `4,5`, `5`, `10`], a: "A",
  s: `<p>4x − 2x &gt; 5 + 3 → 2x &gt; 8 → x &gt; 4. 4 sayısı “4’ten büyük” değildir; çözüm kümesinde yoktur. Cevap <b>A</b>.</p>` },
{ q: `<p>Ece’nin 500 TL’si vardır. Tanesi 35 TL olan defterlerden 8 tane aldıktan sonra kalan parasıyla tanesi 15 TL olan kalemlerden alacaktır.</p><p>Ece en fazla kaç kalem alabilir?</p>`,
  c: [`11`, `12`, `13`, `14`], a: "D",
  s: `<p>8 · 35 + 15k ≤ 500 → 280 + 15k ≤ 500 → 15k ≤ 220 → k ≤ 14,66…</p><p>En fazla <b>14</b> kalem. Cevap <b>D</b>.</p>` },
{ q: `<p>20 soruluk bir sınavda her doğru cevap 5 puan kazandırmakta, her yanlış cevap 2 puan kaybettirmektedir. Sınavdaki bütün soruları cevaplayan bir öğrencinin başarılı sayılması için en az 50 puan alması gerekmektedir.</p><p>Bu öğrencinin başarılı olması için <b>en az</b> kaç soruyu doğru cevaplaması gerekir?</p>`,
  c: [`12`, `13`, `14`, `15`], a: "B",
  s: `<p>d doğru, 20 − d yanlış: 5d − 2(20 − d) ≥ 50 → 7d − 40 ≥ 50 → 7d ≥ 90 → d ≥ 12,86…</p><p>En az <b>13</b> doğru. Kontrol: 13 doğru 7 yanlış → 65 − 14 = 51 ✓; 12 doğru → 60 − 16 = 44 ✗. Cevap <b>B</b>.</p>` },
{ q: `<p>a ve b gerçek sayılar olmak üzere −3 &lt; a &lt; 2 ve 1 &lt; b &lt; 4’tür.</p><p>Buna göre a + b toplamının bulunduğu aralık aşağıdakilerden hangisidir?</p>`,
  c: [`1 &lt; a + b &lt; 6`, `−3 &lt; a + b &lt; 4`, `−2 &lt; a + b &lt; 2`, `−2 &lt; a + b &lt; 6`], a: "D",
  s: `<p>Aynı yönlü eşitsizlikler taraf tarafa toplanabilir: (−3 + 1) &lt; a + b &lt; (2 + 4) → <b>−2 &lt; a + b &lt; 6</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Bir fırında bir günde en az 240, en fazla 360 ekmek üretilmektedir. Fırın bir haftada (7 gün) ürettiği ekmeklerin tamamını satmaktadır.</p><p>Bir ekmeğin satış fiyatı 15 TL olduğuna göre fırının bir haftalık ekmek satış gelirinin alabileceği değerler aşağıdakilerden hangisidir?</p>`,
  c: [`25 200 ≤ gelir ≤ 37 800`, `3 600 ≤ gelir ≤ 5 400`, `1 680 ≤ gelir ≤ 2 520`, `25 200 &lt; gelir &lt; 37 800`], a: "A",
  s: `<p>Haftalık üretim: 7 · 240 = 1680 ile 7 · 360 = 2520 arası (sınırlar dâhil).</p><p>Gelir: 15 · 1680 = 25 200 ile 15 · 2520 = 37 800 arası → <b>25 200 ≤ gelir ≤ 37 800</b>. “En az” ve “en fazla” sınırları dâhil ettiği için eşitlikli semboller kullanılır. Cevap <b>A</b>.</p>` }
]
});
