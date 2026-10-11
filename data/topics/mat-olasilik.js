LGS.add({
id: "mat-olasilik",
summary: `
<h3>1. Temel Kavramlar</h3>
<ul>
<li><b>Deney:</b> Sonucu önceden kesin bilinmeyen işlem (zar atmak, torbadan top çekmek).</li>
<li><b>Çıktı (olası durum):</b> Deneyin her bir sonucu. Zar için 1, 2, 3, 4, 5, 6.</li>
<li><b>Olay:</b> Olası durumlardan istenenlerin oluşturduğu küme. “Zarın çift gelmesi” → {2, 4, 6}.</li>
<li><b>Eşit şansa sahip olaylar:</b> Hiçbir çıktının diğerinden daha olası olmadığı durumlar (hileli olmayan zar, eş dilimli çark).</li>
</ul>
<div class="key"><b>Olasılık</b> = {{İstenen olası durumların sayısı|Tüm olası durumların sayısı}}</div>
<div class="two">
<div class="fig"><svg viewBox="0 0 200 170" width="200" role="img" aria-label="Torbadaki toplar">
<path d="M40,50 Q20,160 100,160 Q180,160 160,50 Z" fill="#fef3c7" stroke="#a16207" stroke-width="2"/><path d="M40,50 Q100,30 160,50" fill="none" stroke="#a16207" stroke-width="2"/>
<g stroke="#333"><circle cx="70" cy="90" r="11" fill="#ef4444"/><circle cx="95" cy="80" r="11" fill="#ef4444"/><circle cx="120" cy="92" r="11" fill="#ef4444"/><circle cx="60" cy="118" r="11" fill="#3b82f6"/><circle cx="85" cy="112" r="11" fill="#3b82f6"/><circle cx="110" cy="118" r="11" fill="#3b82f6"/><circle cx="135" cy="115" r="11" fill="#3b82f6"/><circle cx="98" cy="140" r="11" fill="#3b82f6"/></g>
<text x="100" y="20" font-size="12" text-anchor="middle">3 kırmızı, 5 mavi</text>
</svg><figcaption>P(kırmızı) = {{3|8}}, P(mavi) = {{5|8}}</figcaption></div>
<div class="fig"><svg viewBox="0 0 200 170" width="200" role="img" aria-label="Dört eş dilimli çark">
<g stroke="#fff" stroke-width="2"><path d="M100,85 L100,15 A70,70 0 0,1 170,85 Z" fill="#60a5fa"/><path d="M100,85 L170,85 A70,70 0 0,1 100,155 Z" fill="#fbbf24"/><path d="M100,85 L100,155 A70,70 0 0,1 30,85 Z" fill="#34d399"/><path d="M100,85 L30,85 A70,70 0 0,1 100,15 Z" fill="#f87171"/></g>
<polygon points="100,85 106,40 94,40" fill="#111"/><circle cx="100" cy="85" r="5" fill="#111"/>
</svg><figcaption>Eş dilimli çarkta her renk {{1|4}}</figcaption></div>
</div>
<h3>2. Olasılık Değerinin Aralığı</h3>
<div class="fig"><svg viewBox="0 0 520 80" width="520" role="img" aria-label="Olasılık ölçeği 0 ile 1 arası">
<defs><linearGradient id="og" x1="0" x2="1"><stop offset="0" stop-color="#fecaca"/><stop offset=".5" stop-color="#fef08a"/><stop offset="1" stop-color="#bbf7d0"/></linearGradient></defs>
<rect x="20" y="20" width="480" height="18" rx="9" fill="url(#og)" stroke="#999"/>
<g font-size="12" text-anchor="middle"><text x="20" y="58">0</text><text x="20" y="74">İmkânsız</text><text x="260" y="58">{{1|2}}</text><text x="260" y="74">Eşit olası</text><text x="500" y="58">1</text><text x="500" y="74">Kesin</text></g>
</svg></div>
<ul>
<li>0 ≤ P(olay) ≤ 1. <b>Kesin olay</b> → 1, <b>imkânsız olay</b> → 0.</li>
<li>P(olayın olması) + P(olayın olmaması) = 1. Örn. yağmur yağma olasılığı 0,3 ise yağmama olasılığı 0,7.</li>
<li>Bir torbada toplam top sayısı değişirse olasılık da değişir; ekleme–çıkarma sorularında yeni toplamı yaz.</li>
</ul>
<div class="note"><b>Sık hata:</b> Eş olmayan dilimlerde olasılık dilim sayısıyla değil, <b>dilimin büyüklüğüyle</b> (açısıyla) bulunur. 180°’lik dilim = {{1|2}}. Ayrıca her atış birbirinden bağımsızdır: Para 10 kez yazı gelse de 11. atışta yazı gelme olasılığı yine {{1|2}}’dir.</div>
`,
qs: [
{ q: `<p>Bir torbada 3 kırmızı, 5 mavi ve 4 yeşil top vardır. Torbadan rastgele bir top çekiliyor.</p><p>Çekilen topun <b>mavi</b> olma olasılığı kaçtır?</p>`,
  c: [`{{1|4}}`, `{{1|3}}`, `{{5|12}}`, `{{1|2}}`], a: "C",
  s: `<p>Toplam top: 3 + 5 + 4 = 12. Mavi top: 5.</p><p>P(mavi) = <b>{{5|12}}</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Hileli olmayan bir zar atılıyor.</p><p>Zarın üst yüzüne 4’ten büyük bir sayı gelme olasılığı kaçtır?</p>`,
  c: [`{{1|6}}`, `{{1|3}}`, `{{1|2}}`, `{{2|3}}`], a: "B",
  s: `<p>Olası durumlar: 1, 2, 3, 4, 5, 6 (6 tane). 4’ten büyük olanlar: 5 ve 6 (2 tane).</p><p>P = {{2|6}} = <b>{{1|3}}</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>1’den 8’e kadar numaralandırılmış 8 eş dilimden oluşan bir çark çevriliyor.</p>
<svg viewBox="0 0 160 160" width="160"><g stroke="#fff" stroke-width="2"><path d="M80,80 L80,10 A70,70 0 0,1 129.5,30.5 Z" fill="#60a5fa"/><path d="M80,80 L129.5,30.5 A70,70 0 0,1 150,80 Z" fill="#fbbf24"/><path d="M80,80 L150,80 A70,70 0 0,1 129.5,129.5 Z" fill="#34d399"/><path d="M80,80 L129.5,129.5 A70,70 0 0,1 80,150 Z" fill="#f87171"/><path d="M80,80 L80,150 A70,70 0 0,1 30.5,129.5 Z" fill="#a78bfa"/><path d="M80,80 L30.5,129.5 A70,70 0 0,1 10,80 Z" fill="#f472b6"/><path d="M80,80 L10,80 A70,70 0 0,1 30.5,30.5 Z" fill="#facc15"/><path d="M80,80 L30.5,30.5 A70,70 0 0,1 80,10 Z" fill="#2dd4bf"/></g><g font-size="13" text-anchor="middle" font-weight="bold"><text x="99" y="38">1</text><text x="124" y="64">2</text><text x="124" y="102">3</text><text x="99" y="130">4</text><text x="61" y="130">5</text><text x="36" y="102">6</text><text x="36" y="64">7</text><text x="61" y="38">8</text></g></svg>
<p>Okun gösterdiği sayının <b>tek</b> ya da <b>6</b> olma olasılığı kaçtır?</p>`,
  c: [`{{1|4}}`, `{{3|8}}`, `{{1|2}}`, `{{5|8}}`], a: "D",
  s: `<p>Tek sayılar: 1, 3, 5, 7 (4 tane). Bunlara 6 eklenir → 5 durum.</p><p>P = <b>{{5|8}}</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdakilerden hangisi <b>kesin olaydır</b>?</p>`,
  c: [`İçinde yalnızca kırmızı bilyeler bulunan bir torbadan kırmızı bilye çekilmesi`, `Bir zar atıldığında 6’dan küçük bir sayı gelmesi`, `Bir madeni paranın tura gelmesi`, `Bir yılın 13 ay olması`], a: "A",
  s: `<p>Kesin olayın olasılığı 1’dir; her durumda gerçekleşir. Torbada yalnız kırmızı bilye varsa çekilen bilye kesinlikle kırmızıdır.</p><p>Zarın 6’dan küçük gelmesi {{5|6}}, tura {{1|2}}, yılın 13 ay olması ise imkânsızdır (0). Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki olaylardan hangisinin olma olasılığı <b>0</b>’dır?</p>`,
  c: [`1’den 10’a kadar numaralı kartlardan 11 çekilmesi`, `Bir zarın 1 gelmesi`, `Haftanın rastgele seçilen gününün cumartesi olması`, `Bir torbadan beyaz top çekilmesi`], a: "A",
  s: `<p>Olasılığı 0 olan olay <b>imkânsız olaydır</b>. 1–10 arası kartlarda 11 yoktur → hiçbir durumda gerçekleşmez.</p><p>Zarın 1 gelmesi {{1|6}}, cumartesi {{1|7}}; torba sorusunda torbanın içeriği bilinmediği için 0 denemez. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki durumların hangisinde verilen iki olayın olma olasılıkları <b>eşittir</b>?</p>`,
  c: [`Bir zarın tek gelmesi ile çift gelmesi`, `Bir zarın 2 gelmesi ile 2’den büyük gelmesi`, `3 kırmızı ve 2 mavi top bulunan torbadan kırmızı ve mavi top çekilmesi`, `Rastgele seçilen bir günün pazartesi olması ile pazartesi olmaması`], a: "A",
  s: `<p>Zarda tek sayılar {1, 3, 5}, çift sayılar {2, 4, 6} → ikisinin olasılığı da {{3|6}} = {{1|2}} → eşit.</p><p>Diğerleri: {{1|6}} ve {{4|6}}; {{3|5}} ve {{2|5}}; {{1|7}} ve {{6|7}}. Cevap <b>A</b>.</p>` },
{ q: `<p>Bir torbada 4 kırmızı ve 6 beyaz top vardır.</p><p>Bu torbadan rastgele çekilen topun kırmızı olma olasılığının {{1|2}} olması için torbaya kaç kırmızı top eklenmelidir?</p>`,
  c: [`2`, `3`, `4`, `6`], a: "A",
  s: `<p>Olasılığın {{1|2}} olması için kırmızı ve beyaz sayıları eşit olmalı.</p><p>4 + x = 6 → x = <b>2</b>. Kontrol: {{6|12}} = {{1|2}} ✓. Cevap <b>A</b>.</p>` },
{ q: `<p>Bir kutuda 5 sarı ve 11 mor kalem vardır.</p><p>Kutudan rastgele çekilen kalemin sarı olma olasılığının {{1|2}} olması için kutudan kaç mor kalem çıkarılmalıdır?</p>`,
  c: [`3`, `4`, `5`, `6`], a: "D",
  s: `<p>Sarı ve mor sayıları eşit olmalı: 11 − x = 5 → x = <b>6</b>.</p><p>Kontrol: 5 sarı, 5 mor → {{5|10}} = {{1|2}} ✓. Cevap <b>D</b>.</p>` },
{ q: `<p>A torbasında 2 kırmızı ve 3 mavi, B torbasında 3 kırmızı ve 5 mavi bilye vardır. Her torbadan rastgele birer bilye çekilecektir.</p><p>Buna göre aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [`Kırmızı bilye çekme olasılığı A torbasında daha fazladır.`, `Kırmızı bilye çekme olasılığı B torbasında daha fazladır.`, `Kırmızı bilye çekme olasılıkları eşittir.`, `B torbasında daha çok kırmızı bilye olduğundan bu torbadan kırmızı çekmek daha olasıdır.`], a: "A",
  s: `<p>A: {{2|5}} = 0,4; B: {{3|8}} = 0,375.</p><p>0,4 &gt; 0,375 olduğundan kırmızı çekme olasılığı <b>A torbasında</b> daha fazladır. B’de kırmızı sayısı fazla olsa da toplam bilye de fazladır; olasılık orana bağlıdır. Cevap <b>A</b>.</p>` },
{ q: `<p>Üzerinde 1’den 20’ye kadar sayıların yazılı olduğu 20 kart bir torbaya konuyor. Torbadan rastgele bir kart çekiliyor.</p><p>Çekilen karttaki sayının <b>3’ün katı olmama</b> olasılığı kaçtır?</p>`,
  c: [`{{3|10}}`, `{{1|2}}`, `{{3|5}}`, `{{7|10}}`], a: "D",
  s: `<p>1–20 arasında 3’ün katları: 3, 6, 9, 12, 15, 18 → 6 tane. Olmayanlar: 20 − 6 = 14.</p><p>P = {{14|20}} = <b>{{7|10}}</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Tüm iki basamaklı doğal sayılar birer karta yazılıp bir torbaya konuyor. Torbadan rastgele bir kart çekiliyor.</p><p>Çekilen karttaki sayının rakamlarının <b>aynı</b> olma olasılığı kaçtır?</p>`,
  c: [`{{1|90}}`, `{{1|10}}`, `{{1|9}}`, `{{1|5}}`], a: "B",
  s: `<p>İki basamaklı sayılar: 10’dan 99’a → 90 tane. Rakamları aynı olanlar: 11, 22, …, 99 → 9 tane.</p><p>P = {{9|90}} = <b>{{1|10}}</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>“MATEMATİK” kelimesinin harfleri ayrı ayrı özdeş kartlara yazılıp bir torbaya konuyor. Torbadan rastgele bir kart çekiliyor.</p><p>Çekilen kartta <b>M veya T</b> harfi yazma olasılığı kaçtır?</p>`,
  c: [`{{2|9}}`, `{{1|3}}`, `{{4|9}}`, `{{5|9}}`], a: "C",
  s: `<p>Harfler: M, A, T, E, M, A, T, İ, K → 9 kart. M: 2 tane, T: 2 tane → 4 kart.</p><p>P = <b>{{4|9}}</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki çark, eş olmayan üç bölgeye ayrılmıştır: mavi bölge 180°, kırmızı bölge 120°, sarı bölge 60°’dir.</p>
<svg viewBox="0 0 160 160" width="160"><g stroke="#fff" stroke-width="2"><path d="M80,80 L80,10 A70,70 0 0,1 80,150 Z" fill="#60a5fa"/><path d="M80,80 L80,150 A70,70 0 0,1 19.4,45 Z" fill="#f87171"/><path d="M80,80 L19.4,45 A70,70 0 0,1 80,10 Z" fill="#fbbf24"/></g><g font-size="11" text-anchor="middle"><text x="115" y="84">Mavi</text><text x="45" y="105">Kırmızı</text><text x="58" y="40">Sarı</text></g><polygon points="80,80 86,30 74,30" fill="#111"/><circle cx="80" cy="80" r="4" fill="#111"/></svg>
<p>Çark çevrildiğinde okun <b>kırmızı</b> bölgede durma olasılığı kaçtır? (Ok sınır çizgilerinde durmuyor.)</p>`,
  c: [`{{1|6}}`, `{{1|4}}`, `{{1|3}}`, `{{1|2}}`], a: "C",
  s: `<p>Bölgeler eş olmadığından olasılık, bölgenin açısının 360°’ye oranıdır.</p><p>P(kırmızı) = {{120|360}} = <b>{{1|3}}</b>. (Üç bölge var diye {{1|3}} demek tesadüfen doğru; mavi için cevap {{1|2}} olurdu.) Cevap <b>C</b>.</p>` },
{ q: `<p>Bir kalem kutusundaki kalemlerin {{1|3}}’ü kırmızı, {{1|4}}’ü mavi, geri kalan 15 kalem siyahtır.</p><p>Buna göre kutuda kaç mavi kalem vardır?</p>`,
  c: [`6`, `9`, `12`, `15`], a: "B",
  s: `<p>Kırmızı ve mavi: {{1|3}} + {{1|4}} = {{7|12}}. Siyah: {{5|12}} = 15 → toplam {{12|5}} · 15 = 36 kalem.</p><p>Mavi: 36 · {{1|4}} = <b>9</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>30 kişilik bir sınıfta 12 öğrenci gözlük takmaktadır. Sınıftan rastgele bir öğrenci seçiliyor.</p><p>Seçilen öğrencinin gözlük <b>takmayan</b> bir öğrenci olma olasılığı kaçtır?</p>`,
  c: [`{{2|5}}`, `{{1|2}}`, `{{3|5}}`, `{{2|3}}`], a: "C",
  s: `<p>Gözlük takmayan: 30 − 12 = 18. P = {{18|30}} = <b>{{3|5}}</b>.</p><p>Ya da: P(takan) = {{2|5}} → P(takmayan) = 1 − {{2|5}} = {{3|5}}. Cevap <b>C</b>.</p>` },
{ q: `<p>İçinde kırmızı toplar ile 10 mavi top bulunan bir torbadan rastgele çekilen bir topun kırmızı olma olasılığı {{2|7}}’dir.</p><p>Buna göre torbada kaç kırmızı top vardır?</p>`,
  c: [`4`, `6`, `8`, `10`], a: "A",
  s: `<p>Kırmızı sayısı r olsun: {{r|r + 10}} = {{2|7}} → 7r = 2r + 20 → 5r = 20 → r = <b>4</b>.</p><p>Kontrol: {{4|14}} = {{2|7}} ✓. Cevap <b>A</b>.</p>` },
{ q: `<p>Hava durumu raporuna göre bir şehirde yarın yağmur yağma olasılığı 0,35’tir.</p><p>Buna göre bu şehirde yarın yağmur <b>yağmama</b> olasılığı kaçtır?</p>`,
  c: [`0,35`, `0,5`, `0,65`, `1`], a: "C",
  s: `<p>Bir olayın olma ve olmama olasılıkları toplamı 1’dir: 1 − 0,35 = <b>0,65</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Bir mağazadaki hediye çarkı 12 eş dilimden oluşmaktadır. Dilimlerin 5’inde “Boş”, 4’ünde “Kalem”, 2’sinde “Defter”, 1’inde “Kitap” yazmaktadır.</p><p>Çarkı bir kez çeviren müşterinin <b>bir hediye kazanma</b> olasılığı kaçtır?</p>`,
  c: [`{{5|12}}`, `{{1|2}}`, `{{7|12}}`, `{{2|3}}`], a: "C",
  s: `<p>Hediye olan dilimler: 4 + 2 + 1 = 7. P = <b>{{7|12}}</b>.</p><p>Ya da 1 − P(boş) = 1 − {{5|12}} = {{7|12}}. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki olaylardan hangisinin olma olasılığı <b>en yüksektir</b>?</p>`,
  c: [`Bir zarın 5’ten büyük gelmesi`, `Bir madeni paranın tura gelmesi`, `1–10 numaralı kartlardan 3’ün katı olan bir kart çekilmesi`, `3 mavi ve 1 kırmızı top bulunan torbadan mavi top çekilmesi`], a: "D",
  s: `<p>Olasılıklar: {{1|6}} ≈ 0,17; {{1|2}} = 0,5; {{3|10}} = 0,3 (3, 6, 9); {{3|4}} = 0,75.</p><p>En yüksek: <b>torbadan mavi top çekilmesi</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Bir torbada 3 kırmızı ve 5 mavi top vardır. Torbaya 6 kırmızı ve bir miktar mavi top ekleniyor. Bu işlemden sonra torbadan rastgele çekilen topun kırmızı olma olasılığı değişmiyor.</p><p>Buna göre torbaya kaç mavi top eklenmiştir?</p>`,
  c: [`6`, `8`, `10`, `12`], a: "C",
  s: `<p>Başlangıçta P(kırmızı) = {{3|8}}. Ekleme sonrası: {{9|14 + x}} = {{3|8}} → 72 = 3(14 + x) → 24 = 14 + x → x = <b>10</b>.</p><p>Kontrol: 9 kırmızı, 15 mavi → {{9|24}} = {{3|8}} ✓. Cevap <b>C</b>.</p>` },
{ q: `<p>Üzerinde 1’den 30’a kadar sayılar yazılı 30 karttan rastgele biri çekiliyor.</p><p>Çekilen karttaki sayının <b>hem 2’nin hem de 3’ün katı</b> olma olasılığı kaçtır?</p>`,
  c: [`{{1|10}}`, `{{1|6}}`, `{{1|5}}`, `{{1|3}}`], a: "B",
  s: `<p>Hem 2’nin hem 3’ün katı olan sayılar 6’nın katlarıdır: 6, 12, 18, 24, 30 → 5 tane.</p><p>P = {{5|30}} = <b>{{1|6}}</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Bir torbada 2 kırmızı, 5 mavi ve 3 sarı top vardır. Torbadan rastgele bir top çekilecektir.</p><p>Kırmızı (K), mavi (M) ve sarı (S) top çekme olasılıklarının küçükten büyüğe sıralanışı aşağıdakilerden hangisidir?</p>`,
  c: [`P(K) &lt; P(M) &lt; P(S)`, `P(S) &lt; P(K) &lt; P(M)`, `P(K) &lt; P(S) &lt; P(M)`, `P(M) &lt; P(S) &lt; P(K)`], a: "C",
  s: `<p>Toplam 10 top: P(K) = {{2|10}}, P(S) = {{3|10}}, P(M) = {{5|10}}.</p><p>Paydalar aynı olduğundan paylar karşılaştırılır: <b>P(K) &lt; P(S) &lt; P(M)</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Ece hileli olmayan bir madeni parayı 10 kez atmış ve 6 kez yazı gelmiştir.</p><p>Ece parayı 11. kez attığında paranın <b>yazı</b> gelme olasılığı kaçtır?</p>`,
  c: [`{{4|10}}`, `{{1|2}}`, `{{6|10}}`, `{{6|11}}`], a: "B",
  s: `<p>Her atış bir öncekinden bağımsızdır; paranın önceki sonuçları “hatırlaması” söz konusu değildir.</p><p>Hileli olmayan parada yazı ve tura eşit olasılıklıdır: P(yazı) = <b>{{1|2}}</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Bir torbada 1’den 9’a kadar numaralandırılmış 9 kart vardır. Torbadan bir kart çekiliyor, kartın 5 olduğu görülüyor ve kart torbaya <b>geri konmuyor</b>. Ardından torbadan ikinci bir kart çekiliyor.</p><p>İkinci kartın <b>çift sayı</b> olma olasılığı kaçtır?</p>`,
  c: [`{{4|9}}`, `{{1|2}}`, `{{5|9}}`, `{{5|8}}`], a: "B",
  s: `<p>Torbada kalan kartlar: 1, 2, 3, 4, 6, 7, 8, 9 → 8 kart. Çift olanlar: 2, 4, 6, 8 → 4 kart.</p><p>P = {{4|8}} = <b>{{1|2}}</b>. Toplam durum sayısı değiştiği için {{4|9}} değildir. Cevap <b>B</b>.</p>` },
{ q: `<p>İçinde yalnızca kırmızı ve mavi bilyeler bulunan bir torbada 24 bilye vardır. Bu torbadan rastgele çekilen bir bilyenin kırmızı olma olasılığı, mavi olma olasılığının 3 katıdır.</p><p>Buna göre torbada kaç kırmızı bilye vardır?</p>`,
  c: [`6`, `8`, `16`, `18`], a: "D",
  s: `<p>P(K) = 3 · P(M) ve P(K) + P(M) = 1 → P(M) = {{1|4}}, P(K) = {{3|4}}.</p><p>Kırmızı bilye: 24 · {{3|4}} = <b>18</b>. Cevap <b>D</b>.</p>` }
]
});
