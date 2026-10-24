LGS.add({
id: "fen-makine",
summary: `
<h3>1. Basit Makinelerin Temel Özellikleri ve Altın Kuralları</h3>
<p>Çok az parçadan oluşan ve yalnızca tek bir kuvvet çeşidiyle çalışan araçlara <b>basit makineler</b> denir. Basit makineler; uygulanan kuvvetin <b>büyüklüğünü</b> veya <b>yönünü</b> değiştirerek ya da bir işin yapılma <b>hızını (süresini)</b> değiştirerek <b>iş yapma kolaylığı</b> sağlar[cite: 13].</p>

<div class="key">ALTIN KURAL: Hiçbir basit makinede <b>İŞTEN veya ENERJİDEN KAZANÇ YOKTUR!</b> Kuvvetten ne oranda kazanç varsa, <b>yoldan aynı oranda kayıp</b> vardır[cite: 13]:<br>
<b>Kuvvet Kazancı (KK) = {{Yük (P)|Kuvvet (F)}} = {{Kuvvet Kolu (Alınan Yol)|Yük Kolu (Yükün Yükselme Miktarı)}}</b></div>

<table class="rt">
<tr><th>Kuvvet Kazancı (KK) Değeri</th><th>Kuvvet – Yük İlişkisi</th><th>Anlamı ve Basit Makine Örnekleri</th></tr>
<tr><td><b>KK &gt; 1 ise</b><br>(Örn: KK = 2 veya 3)</td><td><b>F &lt; P</b><br>(Kuvvet yükten küçüktür)</td><td><b>Kuvvetten kazanç, yoldan kayıp vardır</b> (Ağır bir yük daha küçük bir kuvvetle dengelenir)[cite: 13].<br>• <i>Yükün ortada olduğu kaldıraçlar, hareketli makara, palangalar, eğik düzlem, çıkrık, vida, kama</i>[cite: 13].</td></tr>
<tr><td><b>KK = 1 ise</b></td><td><b>F = P</b><br>(Kuvvet yüke eşittir)</td><td><b>Ne kuvvetten ne de yoldan kazanç vardır;</b> yalnızca <b>kuvvetin yönünü</b> değiştirerek iş kolaylığı sağlar[cite: 13].<br>• <i>Sabit makara, eşit kollu tahterevalli / eşit kollu terazi</i>[cite: 13].</td></tr>
<tr><td><b>KK &lt; 1 ise</b><br>(Örn: KK = 1/2)</td><td><b>F &gt; P</b><br>(Kuvvet yükten büyüktür)</td><td><b>Kuvvetten kayıp, yoldan (hızdan) kazanç vardır</b> (Küçük bir hareketle yük çok daha geniş mesafe hareket ettirilir)[cite: 13].<br>• <i>Kuvvetin ortada olduğu kaldıraçlar (cımbız, maşa, olta, tenis raketi)</i>[cite: 13].</td></tr>
</table>

<h3>2. Kaldıraçlar ve 3 Kaldıraç Türü</h3>
<p>Sabit bir <b>destek noktası (D)</b> etrafında serbestçe dönebilen sağlam çubuklardan oluşan sistemlere <b>kaldıraç</b> denir[cite: 13]. Kaldıraçlarda denge bağıntısı[cite: 13]:</p>
<div class="key">Kuvvet (F) × Kuvvet Kolu (d<sub>F</sub>) = Yük (P) × Yük Kolu (d<sub>P</sub>)</div>
<p><i>(Dikkat: <b>Kuvvet kolu</b>, kuvvetin uygulandığı noktanın <b>DESTEĞE</b> olan uzaklığıdır; <b>Yük kolu</b> ise yükün <b>DESTEĞE</b> olan uzaklığıdır!)</i>[cite: 13]</p>

<div class="fig"><svg viewBox="0 0 600 165" width="580" role="img" aria-label="Üç tip kaldıraç şeması ve özellikleri">
<g font-size="9.5" text-anchor="middle">
<rect x="6" y="8" width="188" height="148" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
<text x="100" y="25" font-size="10.5" font-weight="bold" fill="#1e40af">1. Tip: Destek Ortada (Çift Taraflı)</text>
<line x1="25" y1="75" x2="175" y2="75" stroke="#713f12" stroke-width="5"/>
<polygon points="100,75 88,98 112,98" fill="#64748b"/>
<rect x="22" y="50" width="26" height="22" fill="#93c5fd" stroke="#1e3a8a"/><text x="35" y="65" font-weight="bold">P</text>
<line x1="165" y1="42" x2="165" y2="70" stroke="#dc2626" stroke-width="2.5"/><polygon points="165,74 160,66 170,66" fill="#dc2626"/><text x="174" y="54" fill="#dc2626" font-weight="bold">F</text>
<text x="100" y="112" font-weight="bold" fill="#1e40af">• Kuvvetin yönünü DEĞİŞTİRİR!</text>
<text x="100" y="126" fill="#1e293b">• d_F &gt; d_P ise kuvvetten kazanç var.</text>
<text x="100" y="142" font-size="8.5" font-weight="bold" fill="#334155">Örnek: Makas, pense, tahterevalli, levye, mandal</text>

<rect x="206" y="8" width="188" height="148" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="300" y="25" font-size="10.5" font-weight="bold" fill="#166534">2. Tip: Yük Ortada (Tek Taraflı)</text>
<line x1="225" y1="75" x2="375" y2="75" stroke="#713f12" stroke-width="5"/>
<polygon points="235,75 223,98 247,98" fill="#64748b"/>
<rect x="285" y="50" width="26" height="22" fill="#93c5fd" stroke="#1e3a8a"/><text x="298" y="65" font-weight="bold">P</text>
<line x1="365" y1="98" x2="365" y2="78" stroke="#dc2626" stroke-width="2.5"/><polygon points="365,74 360,82 370,82" fill="#dc2626"/><text x="374" y="95" fill="#dc2626" font-weight="bold">F</text>
<text x="300" y="112" font-weight="bold" fill="#166534">• DAİMA kuvvetten kazanç sağlar!</text>
<text x="300" y="126" fill="#1e293b">• Kuvvetin yönünü değiştirmez (d_F &gt; d_P).</text>
<text x="300" y="142" font-size="8.5" font-weight="bold" fill="#334155">Örnek: El arabası, ceviz kıracağı, gazoz açacağı</text>

<rect x="406" y="8" width="188" height="148" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
<text x="500" y="25" font-size="10.5" font-weight="bold" fill="#991b1b">3. Tip: Kuvvet Ortada (Tek Taraflı)</text>
<line x1="425" y1="75" x2="575" y2="75" stroke="#713f12" stroke-width="5"/>
<polygon points="435,75 423,98 447,98" fill="#64748b"/>
<line x1="495" y1="98" x2="495" y2="78" stroke="#dc2626" stroke-width="2.5"/><polygon points="495,74 490,82 500,82" fill="#dc2626"/><text x="504" y="95" fill="#dc2626" font-weight="bold">F</text>
<rect x="550" y="50" width="26" height="22" fill="#93c5fd" stroke="#1e3a8a"/><text x="563" y="65" font-weight="bold">P</text>
<text x="500" y="112" font-weight="bold" fill="#dc2626">• DAİMA yoldan kazanç (kuvvetten kayıp)!</text>
<text x="500" y="126" fill="#1e293b">• Kuvvetin yönünü değiştirmez (d_F &lt; d_P).</text>
<text x="500" y="142" font-size="8.5" font-weight="bold" fill="#334155">Örnek: Cımbız, maşa, olta, kürek, tenis raketi</text>
</g>
</svg></div>

<h3>3. Makaralar (Sabit Makara, Hareketli Makara ve Palangalar)</h3>
<table class="rt">
<tr><th>Makara Türü</th><th>Kuvvet – Yük Bağıntısı</th><th>Kuvvetin Yönü ve Yol İlişkisi</th></tr>
<tr><td><b>1. Sabit Makara</b><br>(Merkezi tavana/duvara sabitlenmiştir)[cite: 13]</td><td><b>F = P</b> (Kuvvet kazancı yoktur: KK = 1).<br><i>Not: Makara ağırlığı F kuvvetini etkilemez, sadece tavandaki ip gerilmesini artırır!</i>[cite: 13]</td><td>• Kuvvetin <b>yönünü değiştirir</b> (İp aşağı çekilir, yük yukarı çıkar)[cite: 13].<br>• İp <b>h kadar</b> çekilirse, yük de <b>h kadar</b> yükselir[cite: 13].</td></tr>
<tr><td><b>2. Hareketli Makara</b><br>(Yükle birlikte yükselip alçalır)[cite: 13]</td><td><b>F = P / 2</b> (Kuvvetten <b>2 kat kazanç</b> vardır: KK = 2)[cite: 13].<br><i>Not: Makara ağırlığı (G<sub>m</sub>) varsa yüke eklenir: <b>F = (P + G<sub>m</sub>) / 2</b></i>[cite: 13].</td><td>• Kuvvetin <b>yönünü değiştirmez</b> (İp yukarı çekilir, yük yukarı çıkar)[cite: 13].<br>• Yoldan <b>2 kat kayıp</b> vardır: Yükü <b>h kadar</b> yükseltmek için ip <b>2h kadar</b> çekilmelidir[cite: 13]!</td></tr>
<tr><td><b>3. Palangalar</b><br>(Sabit ve hareketli makaralardan oluşan sistemler)[cite: 13]</td><td>Yükü (ve hareketli makaraları) yukarı doğru çeken <b>ip kolu sayısı (n)</b> sayılır[cite: 13]:<br>• İpin ucu <b>AŞAĞI</b> çekiliyorsa: <b>F = P / Makara Sayısı</b><br>• İpin ucu <b>YUKARI</b> çekiliyorsa: <b>F = P / (Makara Sayısı + 1)</b></td><td>• Kuvvetten kaç kat kazanç varsa (n), yoldan o kadar kat kayıp vardır: Yükü <b>h kadar</b> yükseltmek için ip <b>n · h kadar</b> çekilmelidir[cite: 13].</td></tr>
</table>

<h3>4. Eğik Düzlem, Çıkrık, Vida ve Kama</h3>
<ul>
<li><b>Eğik Düzlem (Rampa):</b> Bir cismi belirli bir yüksekliğe (<b>h</b>) doğrudan kaldırmak yerine daha uzun bir rampa (<b>L</b>) boyunca çekerek çıkarmaya yarayan ve <b>her zaman kuvvetten kazanç (yoldan kayıp) sağlayan</b> basit makinedir (<b>F · L = P · h</b>)[cite: 13]. Yükseklik (h) sabit tutulup eğik düzlemin <b>boyu (L) uzatılırsa</b> (veya L sabit tutulup h azaltılırsa) eğim azalır ve <b>kuvvet kazancı ARTAR!</b>[cite: 13]</li>
<li><b>Çıkrık:</b> Dönme eksenleri çakışık (eş merkezli), yarıçapları farklı iki silindirden oluşur (<b>F · R = P · r</b>; <b>R:</b> kuvvet kolu/büyük yarıçap, <b>r:</b> yük silindirinin küçük yarıçapı)[cite: 13]. <b>Her zaman kuvvetten kazanç sağlar</b>[cite: 13].
  <br>• <b>Örnekler:</b> <i>Kuyu çıkrığı, el mikseri, kahve değirmeni, kıyma makinesi, kalemtıraş, direksiyon simidi, kapı kolu, musluk başlığı, tornavida, anahtar, olta makinesi</i>[cite: 13].
  <br>• <b>LGS Tuzağı (Yükün Yükselme Miktarı):</b> Çıkrık kolu <b>N tur</b> döndürüldüğünde yükün yükselme miktarı (h), çıkrık kolunun uzunluğuna (R) <b>BAĞLI DEĞİLDİR!</b> Sadece ipin sarıldığı iç silindirin çevresine bağlıdır: <b>h = N · (2 · π · r)</b>[cite: 13].</li>
<li><b>Vida ve Kama:</b> <b>Vida</b>, bir silindir etrafına sarılmış eğik düzlemdir; vida adımı (<b>a</b>) küçüldükçe kuvvet kazancı artar (vida <b>N tur</b> dönerse tahtada <b>h = N · a</b> kadar ilerler)[cite: 13]. <b>Kama</b> (bıçak, balta, keski, iğne) ise iki eğik düzlemin sırt sırta birleşimidir ve kuvvetten kazanç sağlar[cite: 13].</li>
</ul>

<h3>5. Dişli Çarklar, Kasnaklar ve Bileşik Makineler</h3>
<div class="fig"><svg viewBox="0 0 600 155" width="580" role="img" aria-label="Farklı merkezli, eş merkezli dişliler ve düz-çapraz kasnaklar şeması">
<g font-size="9.5" text-anchor="middle">
<rect x="6" y="8" width="188" height="140" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
<text x="100" y="25" font-size="10" font-weight="bold" fill="#1e40af">1. Farklı Merkezli Dişliler (Temas Eden)</text>
<circle cx="68" cy="72" r="28" fill="#dbeafe" stroke="#1e40af" stroke-width="4" stroke-dasharray="5 3"/>
<circle cx="122" cy="72" r="16" fill="#fde047" stroke="#b45309" stroke-width="4" stroke-dasharray="4 3"/>
<text x="68" y="76" font-weight="bold">2r</text>
<text x="122" y="76" font-weight="bold">r</text>
<text x="100" y="114" font-weight="bold" fill="#dc2626">• ZIT yönde dönerler!</text>
<text x="100" y="128" fill="#1e293b">• Küçük olan daha çok tur atar:</text>
<text x="100" y="142" font-weight="bold" fill="#1e40af">n₁ · r₁ = n₂ · r₂</text>

<rect x="206" y="8" width="188" height="140" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="300" y="25" font-size="10" font-weight="bold" fill="#166534">2. Eş Merkezli (Çakışık) Dişli/Kasnak</text>
<circle cx="300" cy="72" r="30" fill="#dcfce7" stroke="#166534" stroke-width="2.5"/>
<circle cx="300" cy="72" r="14" fill="#86efac" stroke="#15803d" stroke-width="2.5"/>
<circle cx="300" cy="72" r="3" fill="#1e293b"/>
<text x="300" y="54" font-size="8.5" font-weight="bold">K (3r)</text>
<text x="300" y="76" font-size="8.5" font-weight="bold">L (r)</text>
<text x="300" y="114" font-weight="bold" fill="#166534">• Yarıçapları ne olursa olsun</text>
<text x="300" y="128" font-weight="bold" fill="#dc2626">  AYNI YÖNDE ve EŞİT TUR</text>
<text x="300" y="142" font-weight="bold" fill="#dc2626">  sayısıyla dönerler! (n_K = n_L)</text>

<rect x="406" y="8" width="188" height="140" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<text x="500" y="25" font-size="10" font-weight="bold" fill="#92400e">3. Düz ve Çapraz Bağlı Kasnaklar</text>
<circle cx="445" cy="68" r="20" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<circle cx="545" cy="68" r="12" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<line x1="445" y1="48" x2="545" y2="56" stroke="#7c2d12" stroke-width="2"/>
<line x1="445" y1="88" x2="545" y2="80" stroke="#7c2d12" stroke-width="2"/>
<text x="500" y="112" font-weight="bold" fill="#1e40af">• Düz bağlama: AYNI yönde döner.</text>
<text x="500" y="126" font-weight="bold" fill="#dc2626">• Çapraz bağlama: ZIT yönde döner.</text>
<text x="500" y="142" font-weight="bold" fill="#92400e">• Tur: n₁ · r₁ = n₂ · r₂</text>
</g>
</svg></div>
`,
qs: [
{
  q: `<p>Ağırlığı önemsiz, eşit bölmeli bir çubuk destek üzerinde şekildeki gibi yatay dengededir. Çubuğun sol ucunda <b>60 N</b> ağırlığında bir kutu bulunmaktadır[cite: 13].</p>
<div class="fig"><svg viewBox="0 0 380 140" width="360" role="img" aria-label="Destek ortada kaldıraç denge sorusu">
<rect x="36" y="80" width="308" height="8" fill="#a16207" stroke="#713f12"/>
<g stroke="#713f12" stroke-width="1.5">
<line x1="40" y1="88" x2="40" y2="96"/><line x1="90" y1="88" x2="90" y2="96"/><line x1="140" y1="88" x2="140" y2="96"/>
<line x1="190" y1="88" x2="190" y2="96"/><line x1="240" y1="88" x2="240" y2="96"/><line x1="290" y1="88" x2="290" y2="96"/><line x1="340" y1="88" x2="340" y2="96"/>
</g>
<polygon points="140,88 127,114 153,114" fill="#64748b"/>
<line x1="115" y1="114" x2="165" y2="114" stroke="#334155" stroke-width="3"/>
<rect x="20" y="48" width="40" height="32" fill="#93c5fd" stroke="#1e3a8a" stroke-width="1.5"/>
<text x="40" y="69" font-size="11" font-weight="bold" text-anchor="middle">60 N</text>
<line x1="290" y1="30" x2="290" y2="73" stroke="#dc2626" stroke-width="3"/>
<polygon points="290,79 295,70 285,70" fill="#dc2626"/>
<text x="302" y="45" font-size="12" font-weight="bold" fill="#dc2626">F</text>
<text x="90" y="130" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">Yük kolu = 2 birim</text>
<text x="225" y="130" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">Kuvvet kolu = 3 birim</text>
</svg></div>
<p>Buna göre çubuğun yatay dengede kalmasını sağlayan <b>F kuvvetinin büyüklüğü</b> ve bu kaldıracın sağladığı <b>kuvvet kazancı (KK)</b> aşağıdakilerin hangisinde doğru verilmiştir[cite: 13]?</p>`,
  c: [
    `F = 40 N — Kuvvet Kazancı = 1,5 (3/2)`,
    `F = 30 N — Kuvvet Kazancı = 2`,
    `F = 60 N — Kuvvet Kazancı = 1`,
    `F = 90 N — Kuvvet Kazancı = 2/3`
  ],
  a: "A",
  s: `<p>Kaldıraçta denge bağıntısını uygulayalım[cite: 13]:</p>
<ul>
<li><b>Yük × Yük kolu = Kuvvet × Kuvvet kolu</b> → $60\text{ N} \times 2 = F \times 3 \Rightarrow 120 = 3F \Rightarrow \mathbf{F = 40\text{ N}}$[cite: 13].</li>
<li><b>Kuvvet Kazancı (KK):</b> $\frac{\text{Yük}}{\text{Kuvvet}} = \frac{60}{40} = \mathbf{1,5}$ (veya $\frac{\text{Kuvvet kolu}}{\text{Yük kolu}} = \frac{3}{2} = 1,5$). Cevap <b>A</b>.</li>
</ul>`
},
{
  q: `<p>Ağırlığı önemsiz, eşit bölmeli bir çubuk, <b>80 N</b>’luk yük ve <b>F kuvveti</b> ile şekildeki gibi yatay dengededir[cite: 13].</p>
<div class="fig"><svg viewBox="0 0 460 140" width="440" role="img" aria-label="Destek noktasının kaydırılması kaldıraç sorusu">
<rect x="36" y="80" width="388" height="8" fill="#a16207" stroke="#713f12"/>
<g stroke="#713f12" stroke-width="1.5">
<line x1="40" y1="88" x2="40" y2="96"/><line x1="90" y1="88" x2="90" y2="96"/><line x1="140" y1="88" x2="140" y2="96"/>
<line x1="190" y1="88" x2="190" y2="96"/><line x1="240" y1="88" x2="240" y2="96"/><line x1="290" y1="88" x2="290" y2="96"/>
<line x1="340" y1="88" x2="340" y2="96"/><line x1="390" y1="88" x2="390" y2="96"/>
</g>
<polygon points="190,88 177,114 203,114" fill="#64748b"/>
<line x1="165" y1="114" x2="215" y2="114" stroke="#334155" stroke-width="3"/>
<rect x="70" y="48" width="40" height="32" fill="#93c5fd" stroke="#1e3a8a" stroke-width="1.5"/>
<text x="90" y="69" font-size="11" font-weight="bold" text-anchor="middle">80 N</text>
<line x1="390" y1="30" x2="390" y2="73" stroke="#dc2626" stroke-width="3"/>
<polygon points="390,79 395,70 385,70" fill="#dc2626"/>
<text x="402" y="45" font-size="12" font-weight="bold" fill="#dc2626">F</text>
</svg></div>
<p>Yükün ve F kuvvetinin uygulandığı noktalar değiştirilmeden, yalnızca <b>destek noktası yüke doğru 1 bölme sola kaydırılırsa</b>, çubuğun yeniden yatay dengede kalması için F kuvveti <b>kaç N azaltılmalıdır</b>[cite: 13]?</p>`,
  c: [`8`, `16`, `20`, `24`],
  a: "D",
  s: `<p>İki durumu ayrı ayrı hesaplayalım[cite: 13]:</p>
<ul>
<li><b>1. Durum (Başlangıç):</b> Yük kolu = 2 bölme, Kuvvet kolu = 4 bölme → $80 \times 2 = F_1 \times 4 \Rightarrow \mathbf{F_1 = 40\text{ N}}$[cite: 13].</li>
<li><b>2. Durum (Destek 1 bölme sola kaydırılınca):</b> Yük kolu = 1 bölme olurken, Kuvvet kolu = 5 bölme olur → $80 \times 1 = F_2 \times 5 \Rightarrow \mathbf{F_2 = 16\text{ N}}$[cite: 13].</li>
</ul>
<p>F kuvvetindeki azalma miktarı: $40 - 16 = \mathbf{24\text{ N}}$ azaltılmalıdır[cite: 13]. Cevap <b>D</b>.</p>`
},
{
  q: `<p>Günlük hayatta kullandığımız altı farklı basit makine aşağıdaki görsel kartlarda numaralandırılmıştır[cite: 13].</p>
<div class="fig"><svg viewBox="0 0 540 145" width="520" role="img" aria-label="Altı farklı kaldıraç örneği kartları">
<rect x="8" y="10" width="168" height="58" rx="6" fill="#eff6ff" stroke="#2563eb"/>
<text x="92" y="30" font-size="10.5" font-weight="bold" fill="#1e40af" text-anchor="middle">1. Makas ve Pense</text>
<text x="92" y="48" font-size="9" fill="#1e293b" text-anchor="middle">(Ortasındaki vida etrafında döner)</text>

<rect x="186" y="10" width="168" height="58" rx="6" fill="#f0fdf4" stroke="#16a34a"/>
<text x="270" y="30" font-size="10.5" font-weight="bold" fill="#166534" text-anchor="middle">2. El Arabası</text>
<text x="270" y="48" font-size="9" fill="#1e293b" text-anchor="middle">(Tekerlek uçta, yük haznesi ortada)</text>

<rect x="364" y="10" width="168" height="58" rx="6" fill="#fef2f2" stroke="#dc2626"/>
<text x="448" y="30" font-size="10.5" font-weight="bold" fill="#991b1b" text-anchor="middle">3. Cımbız ve Maşa</text>
<text x="448" y="48" font-size="9" fill="#1e293b" text-anchor="middle">(Uçtan birleşik, ortadan bastırılır)</text>

<rect x="8" y="78" width="168" height="58" rx="6" fill="#f0fdf4" stroke="#16a34a"/>
<text x="92" y="98" font-size="10.5" font-weight="bold" fill="#166534" text-anchor="middle">4. Ceviz Kıracağı</text>
<text x="92" y="116" font-size="9" fill="#1e293b" text-anchor="middle">(Menteşe uçta, ceviz ortada)</text>

<rect x="186" y="78" width="168" height="58" rx="6" fill="#eff6ff" stroke="#2563eb"/>
<text x="270" y="98" font-size="10.5" font-weight="bold" fill="#1e40af" text-anchor="middle">5. Tahterevalli ve Mandal</text>
<text x="270" y="116" font-size="9" fill="#1e293b" text-anchor="middle">(Destek noktası tam ortada)</text>

<rect x="364" y="78" width="168" height="58" rx="6" fill="#fef2f2" stroke="#dc2626"/>
<text x="448" y="98" font-size="10.5" font-weight="bold" fill="#991b1b" text-anchor="middle">6. Tenis Raketi ve Olta</text>
<text x="448" y="116" font-size="9" fill="#1e293b" text-anchor="middle">(Bilek destek, kol kuvvet, uçta yük)</text>
</svg></div>
<p>Numaralanmış bu araçların <b>kaldıraç tiplerine</b> göre doğru gruplandırılması aşağıdakilerin hangisinde verilmiştir[cite: 13]?</p>`,
  c: [
    `Destek Ortada: 1 ve 5 — Yük Ortada (Daima Kuvvet Kazancı): 2 ve 4 — Kuvvet Ortada (Daima Yol Kazancı): 3 ve 6`,
    `Destek Ortada: 1, 2 ve 5 — Yük Ortada: 3 ve 4 — Kuvvet Ortada: Yalnız 6`,
    `Destek Ortada: 3 ve 6 — Yük Ortada: 1 ve 5 — Kuvvet Ortada: 2 ve 4`,
    `Destek Ortada: 1 ve 4 — Yük Ortada: 2 ve 5 — Kuvvet Ortada: 3 ve 6`
  ],
  a: "A",
  s: `<p>Araçları destek (D), yük (P) ve kuvvet (F) konumlarına göre sınıflandıralım[cite: 13]:</p>
<ul>
<li><b>Destek Ortada (P – D – F):</b> 1. Makas, pense ve 5. Tahterevalli, mandal[cite: 13].</li>
<li><b>Yük Ortada (D – P – F → Kesin Kuvvet Kazancı):</b> 2. El arabası ve 4. Ceviz kıracağı[cite: 13].</li>
<li><b>Kuvvet Ortada (D – F – P → Kesin Yol Kazancı / Kuvvet Kaybı):</b> 3. Cımbız, maşa ve 6. Tenis raketi, olta kamışı[cite: 13]. Cevap <b>A</b>.</li>
</ul>`
},
{
  q: `<p>Ağırlıkları ve sürtünmeleri önemsiz makaralarla kurulan <b>K, L ve M</b> sistemlerinde farklı ağırlıktaki yükler <b>F<sub>K</sub>, F<sub>L</sub> ve F<sub>M</sub></b> kuvvetleriyle dengede tutulmaktadır[cite: 13].</p>
<div class="fig"><svg viewBox="0 0 430 220" width="410" role="img" aria-label="K sabit makara, L hareketli makara ve M palanga sistemi">
<rect x="15" y="5" width="90" height="8" fill="#94a3b8"/>
<line x1="60" y1="13" x2="60" y2="20" stroke="#334155" stroke-width="2"/>
<path d="M44,130 L44,36 A16,16 0 0,1 76,36 L76,105" fill="none" stroke="#7c2d12" stroke-width="2"/>
<circle cx="60" cy="36" r="16" fill="#e2e8f0" stroke="#334155" stroke-width="2"/><circle cx="60" cy="36" r="3" fill="#334155"/>
<rect x="24" y="130" width="40" height="28" fill="#93c5fd" stroke="#1e3a8a"/><text x="44" y="148" font-size="10.5" font-weight="bold" text-anchor="middle">40 N</text>
<line x1="76" y1="105" x2="76" y2="142" stroke="#dc2626" stroke-width="3"/><polygon points="76,148 81,139 71,139" fill="#dc2626"/>
<text x="90" y="140" font-size="11" font-weight="bold" fill="#dc2626">F<tspan font-size="8">K</tspan></text>

<rect x="165" y="5" width="70" height="8" fill="#94a3b8"/>
<path d="M180,13 L180,110 A20,20 0 0,0 220,110 L220,45" fill="none" stroke="#7c2d12" stroke-width="2"/>
<circle cx="200" cy="110" r="20" fill="#e2e8f0" stroke="#334155" stroke-width="2"/><circle cx="200" cy="110" r="3" fill="#334155"/>
<line x1="200" y1="110" x2="200" y2="142" stroke="#334155" stroke-width="2"/>
<rect x="180" y="142" width="40" height="28" fill="#93c5fd" stroke="#1e3a8a"/><text x="200" y="160" font-size="10.5" font-weight="bold" text-anchor="middle">100 N</text>
<line x1="220" y1="45" x2="220" y2="18" stroke="#dc2626" stroke-width="3"/><polygon points="220,13 215,22 225,22" fill="#dc2626"/>
<text x="235" y="34" font-size="11" font-weight="bold" fill="#dc2626">F<tspan font-size="8">L</tspan></text>

<rect x="295" y="5" width="110" height="8" fill="#94a3b8"/>
<line x1="368" y1="13" x2="368" y2="22" stroke="#334155" stroke-width="2"/>
<path d="M310,13 L310,120 A20,20 0 0,0 350,120 L350,40 A18,18 0 0,1 386,40 L386,115" fill="none" stroke="#7c2d12" stroke-width="2"/>
<circle cx="330" cy="120" r="20" fill="#e2e8f0" stroke="#334155" stroke-width="2"/><circle cx="330" cy="120" r="3" fill="#334155"/>
<circle cx="368" cy="40" r="18" fill="#e2e8f0" stroke="#334155" stroke-width="2"/><circle cx="368" cy="40" r="3" fill="#334155"/>
<line x1="330" y1="120" x2="330" y2="150" stroke="#334155" stroke-width="2"/>
<rect x="310" y="150" width="40" height="28" fill="#93c5fd" stroke="#1e3a8a"/><text x="330" y="168" font-size="10.5" font-weight="bold" text-anchor="middle">60 N</text>
<line x1="386" y1="115" x2="386" y2="152" stroke="#dc2626" stroke-width="3"/><polygon points="386,158 391,149 381,149" fill="#dc2626"/>
<text x="400" y="148" font-size="11" font-weight="bold" fill="#dc2626">F<tspan font-size="8">M</tspan></text>

<g font-size="12" font-weight="bold" text-anchor="middle" fill="#1e40af">
<text x="55" y="208">K Düzeneği</text><text x="200" y="208">L Düzeneği</text><text x="345" y="208">M Düzeneği</text>
</g>
</svg></div>
<p>Buna göre <b>F<sub>K</sub>, F<sub>L</sub> ve F<sub>M</sub></b> kuvvetlerinin büyüklükleri arasındaki ilişki aşağıdakilerden hangisidir[cite: 13]?</p>`,
  c: [
    `F<sub>K</sub> &gt; F<sub>L</sub> &gt; F<sub>M</sub>`,
    `F<sub>L</sub> &gt; F<sub>K</sub> &gt; F<sub>M</sub>`,
    `F<sub>L</sub> &gt; F<sub>M</sub> &gt; F<sub>K</sub>`,
    `F<sub>K</sub> = F<sub>M</sub> &gt; F<sub>L</sub>`
  ],
  a: "B",
  s: `<p>Her düzenekteki kuvveti ayrı ayrı hesaplayalım[cite: 13]:</p>
<ul>
<li><b>K Düzeneği (Sabit makara):</b> Kuvvet kazancı yoktur → $\mathbf{F_K = 40\text{ N}}$[cite: 13].</li>
<li><b>L Düzeneği (Hareketli makara):</b> Yük 2 ip koluyla taşınır → $F_L = 100 / 2 = \mathbf{50\text{ N}}$[cite: 13].</li>
<li><b>M Düzeneği (1 hareketli + 1 sabit makara):</b> 60 N’luk yük hareketli makaradaki 2 ip koluyla taşınır, sabit makara sadece yön değiştirir → $F_M = 60 / 2 = \mathbf{30\text{ N}}$[cite: 13].</li>
</ul>
<p>Büyüklük sıralaması: <b>F<sub>L</sub> (50 N) &gt; F<sub>K</sub> (40 N) &gt; F<sub>M</sub> (30 N)</b> olur[cite: 13]. Cevap <b>B</b>.</p>`
},
{
  q: `<p>Şekildeki makara sisteminde <b>hareketli makaranın ağırlığı 20 N</b>’dur. <b>180 N</b> ağırlığındaki yük, ipin ucuna uygulanan <b>F kuvvetiyle</b> dengede tutulmaktadır (Sabit makaranın ağırlığı ve sürtünmeler önemsizdir)[cite: 13].</p>
<div class="fig"><svg viewBox="0 0 240 215" width="220" role="img" aria-label="Makara ağırlıklı sistemde F kuvveti hesabı">
<rect x="50" y="5" width="115" height="8" fill="#94a3b8"/>
<line x1="128" y1="13" x2="128" y2="22" stroke="#334155" stroke-width="2"/>
<path d="M65,13 L65,120 A20,20 0 0,0 105,120 L105,40 A18,18 0 0,1 146,40 L146,115" fill="none" stroke="#7c2d12" stroke-width="2"/>
<circle cx="85" cy="120" r="20" fill="#fde047" stroke="#b45309" stroke-width="2"/><circle cx="85" cy="120" r="3" fill="#334155"/>
<circle cx="128" cy="40" r="18" fill="#e2e8f0" stroke="#334155" stroke-width="2"/><circle cx="128" cy="40" r="3" fill="#334155"/>
<line x1="85" y1="120" x2="85" y2="150" stroke="#334155" stroke-width="2"/>
<rect x="62" y="150" width="46" height="30" fill="#93c5fd" stroke="#1e3a8a"/><text x="85" y="170" font-size="11" font-weight="bold" text-anchor="middle">180 N</text>
<line x1="146" y1="115" x2="146" y2="154" stroke="#dc2626" stroke-width="3"/><polygon points="146,160 151,151 141,151" fill="#dc2626"/>
<text x="160" y="148" font-size="12" font-weight="bold" fill="#dc2626">F</text>
<text x="32" y="124" font-size="9.5" font-weight="bold" fill="#b45309">20 N</text>
</svg></div>
<p>Buna göre sistemin dengede kalmasını sağlayan <b>F kuvveti kaç N</b>’dur ve yükü <b>1 metre</b> yükseltmek için F kuvvetinin uygulandığı ip <b>kaç metre</b> çekilmelidir[cite: 13]?</p>`,
  c: [
    `F = 90 N — İp 1 m çekilmelidir.`,
    `F = 100 N — İp 2 m çekilmelidir.`,
    `F = 180 N — İp 2 m çekilmelidir.`,
    `F = 200 N — İp 1 m çekilmelidir.`
  ],
  a: "B",
  s: `<p>Hareketli makara yükle birlikte yükseldiği için ağırlığı (20 N) yüke (180 N) eklenir[cite: 13]:</p>
<ul>
<li>Toplam aşağı çeken ağırlık = $180 + 20 = 200\text{ N}$[cite: 13].</li>
<li>Hareketli makarayı yukarı çeken <b>2 ip kolu</b> vardır: $F = \frac{200}{2} = \mathbf{100\text{ N}}$[cite: 13].</li>
<li>Yük 2 ip koluyla taşındığı için yoldan 2 kat kayıp vardır; yükü 1 m yükseltmek için ip <b>2 m</b> çekilmelidir[cite: 13]. Cevap <b>B</b>.</li>
</ul>`
},
{
  q: `<p>Özdeş ve ağırlığı önemsiz makaralar ile özdeş <b>120 N</b> ağırlığındaki yükler kullanılarak <b>Şekil-1</b> ve <b>Şekil-2</b>’deki iki farklı palanga sistemi kurulmuştur[cite: 13].</p>
<div class="fig"><svg viewBox="0 0 440 215" width="420" role="img" aria-label="İki farklı palanga sisteminde ipin aşağı ve yukarı çekilmesi">
<rect x="40" y="8" width="120" height="8" fill="#94a3b8"/>
<line x1="100" y1="16" x2="100" y2="28" stroke="#334155" stroke-width="2"/>
<circle cx="100" cy="46" r="18" fill="#e2e8f0" stroke="#334155" stroke-width="2"/><circle cx="100" cy="46" r="3" fill="#334155"/>
<circle cx="100" cy="115" r="18" fill="#fde68a" stroke="#b45309" stroke-width="2"/><circle cx="100" cy="115" r="3" fill="#334155"/>
<line x1="100" y1="64" x2="82" y2="115" stroke="#7c2d12" stroke-width="2"/>
<line x1="118" y1="115" x2="118" y2="46" stroke="#7c2d12" stroke-width="2"/>
<line x1="82" y1="46" x2="65" y2="115" stroke="#dc2626" stroke-width="2.5"/>
<polygon points="62,122 69,114 60,112" fill="#dc2626"/>
<line x1="100" y1="133" x2="100" y2="150" stroke="#334155" stroke-width="2"/>
<rect x="75" y="150" width="50" height="28" fill="#93c5fd" stroke="#1e3a8a"/><text x="100" y="168" font-size="10.5" font-weight="bold" text-anchor="middle">120 N</text>
<text x="50" y="110" font-size="11" font-weight="bold" fill="#dc2626">F₁</text>
<text x="100" y="198" font-size="10.5" font-weight="bold" fill="#1e40af" text-anchor="middle">Şekil-1 (İp Aşağı Çekiliyor: 2 ip)</text>

<rect x="270" y="8" width="120" height="8" fill="#94a3b8"/>
<line x1="330" y1="16" x2="330" y2="28" stroke="#334155" stroke-width="2"/>
<circle cx="330" cy="46" r="18" fill="#e2e8f0" stroke="#334155" stroke-width="2"/><circle cx="330" cy="46" r="3" fill="#334155"/>
<circle cx="330" cy="115" r="18" fill="#fde68a" stroke="#b45309" stroke-width="2"/><circle cx="330" cy="115" r="3" fill="#334155"/>
<line x1="330" y1="97" x2="312" y2="46" stroke="#7c2d12" stroke-width="2"/>
<line x1="348" y1="46" x2="348" y2="115" stroke="#7c2d12" stroke-width="2"/>
<line x1="312" y1="115" x2="295" y2="45" stroke="#dc2626" stroke-width="2.5"/>
<polygon points="293,38 291,48 300,46" fill="#dc2626"/>
<line x1="330" y1="133" x2="330" y2="150" stroke="#334155" stroke-width="2"/>
<rect x="305" y="150" width="50" height="28" fill="#93c5fd" stroke="#1e3a8a"/><text x="330" y="168" font-size="10.5" font-weight="bold" text-anchor="middle">120 N</text>
<text x="280" y="55" font-size="11" font-weight="bold" fill="#dc2626">F₂</text>
<text x="330" y="198" font-size="10.5" font-weight="bold" fill="#166534" text-anchor="middle">Şekil-2 (İp Yukarı Çekiliyor: 3 ip)</text>
</svg></div>
<p>Buna göre Şekil-1 ve Şekil-2’deki <b>F<sub>1</sub> ve F<sub>2</sub></b> kuvvetlerinin büyüklükleri kaç N’dur[cite: 13]?</p>`,
  c: [
    `F₁ = 60 N — F₂ = 40 N`,
    `F₁ = 60 N — F₂ = 60 N`,
    `F₁ = 40 N — F₂ = 60 N`,
    `F₁ = 120 N — F₂ = 40 N`
  ],
  a: "A",
  s: `<p>Palangalarda pratik kuralımızı uygulayalım[cite: 13]:</p>
<ul>
<li><b>Şekil-1:</b> 2 makara var ve ipin ucu <b>aşağı</b> doğru çekiliyor (hareketli makarayı yukarı çeken 2 ip kolu var) → $F_1 = \frac{120}{2} = \mathbf{60\text{ N}}$[cite: 13].</li>
<li><b>Şekil-2:</b> 2 makara var ve ipin ucu <b>yukarı</b> doğru çekiliyor (hareketli makarayı yukarı çeken 3 ip kolu var: $n = \text{makara sayısı} + 1 = 3$) → $F_2 = \frac{120}{3} = \mathbf{40\text{ N}}$[cite: 13]. Cevap <b>A</b>.</li>
</ul>`
},
{
  q: `<p><b>200 N</b> ağırlığındaki bir koli, uzunluğu <b>L = 4 m</b> ve yüksekliği <b>h = 1 m</b> olan sürtünmesiz bir eğik düzlem üzerinde <b>F kuvvetiyle</b> sabit hızla tepeye çıkarılıyor[cite: 13].</p>
<div class="fig"><svg viewBox="0 0 360 155" width="340" role="img" aria-label="Eğik düzlemde kuvvet ve iş hesabı">
<polygon points="30,130 320,130 320,55" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<g transform="rotate(-14.5 175 92)">
<rect x="150" y="64" width="46" height="28" fill="#93c5fd" stroke="#1e3a8a" stroke-width="1.5"/>
<text x="173" y="82" font-size="10.5" font-weight="bold" text-anchor="middle">200 N</text>
</g>
<line x1="202" y1="78" x2="255" y2="64" stroke="#dc2626" stroke-width="3"/>
<polygon points="262,62 252,60 255,69" fill="#dc2626"/>
<text x="235" y="56" font-size="12" font-weight="bold" fill="#dc2626">F</text>
<text x="155" y="72" font-size="11" font-weight="bold" fill="#1e40af" transform="rotate(-14.5 155 72)">L = 4 m</text>
<text x="338" y="96" font-size="11" font-weight="bold" fill="#991b1b">h = 1 m</text>
</svg></div>
<p>Bu eğik düzlem sistemiyle ilgili aşağıdakilerden hangisi <b>yanlıştır</b>[cite: 13]?</p>`,
  c: [
    `Koliyi sabit hızla yukarı çıkarmak için uygulanması gereken F kuvveti 50 N’dur.`,
    `Eğik düzlemde kuvvetten 4 kat kazanç, yoldan ise 4 kat kayıp sağlanmıştır.`,
    `Eğik düzlemin yüksekliği (1 m) sabit tutulup uzunluğu (L) 8 m yapılırsa uygulanması gereken F kuvveti 25 N’a düşer.`,
    `Koli eğik düzlemle çıkarıldığında, doğrudan 1 m yukarı kaldırılmasına göre 4 kat daha az iş yapılmıştır (işten kazanç sağlanmıştır).`
  ],
  a: "D",
  s: `<p>Eğik düzlem bağıntısını ($F \cdot L = P \cdot h$) uygulayalım[cite: 13]:</p>
<ul>
<li>$F \times 4 = 200 \times 1 \Rightarrow \mathbf{F = 50\text{ N}}$ (A doğru)[cite: 13].</li>
<li>Kuvvet kazancı = $200 / 50 = 4$ kat; alınan yol 1 m yerine 4 m olduğu için yoldan 4 kat kayıp vardır (B doğru)[cite: 13].</li>
<li>$L = 8\text{ m}$ yapılırsa $F \times 8 = 200 \times 1 \Rightarrow F = 25\text{ N}$ olur (C doğru)[cite: 13].</li>
<li><b>D Yanlıştır:</b> Hiçbir basit makinede <b>işten kazanç sağlanmaz!</b> ($50\text{ N} \times 4\text{ m} = 200\text{ J}$ iş = Doğrudan kaldırma işi $200\text{ N} \times 1\text{ m} = 200\text{ J}$)[cite: 13]. Cevap <b>D</b>.</li>
</ul>`
},
{
  q: `<p>Şekildeki kuyu çıkrığında kuvvet uygulanan çıkrık kolunun dönme yarıçapı <b>R = 40 cm</b>, ipin sarıldığı iç silindirin yarıçapı ise <b>r = 10 cm</b>’dir. Kuyudaki <b>200 N</b> ağırlığındaki su kovası F kuvvetiyle dengede tutulmaktadır ($\pi = 3$ alınız, sürtünmeler önemsizdir)[cite: 13].</p>
<div class="fig"><svg viewBox="0 0 260 195" width="240" role="img" aria-label="Çıkrıkta kuvvet ve yükselme miktarı hesabı">
<circle cx="130" cy="82" r="56" fill="none" stroke="#475569" stroke-width="2.5" stroke-dasharray="5 3"/>
<circle cx="130" cy="82" r="16" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<line x1="130" y1="82" x2="130" y2="26" stroke="#1e40af" stroke-width="2"/>
<text x="162" y="54" font-size="10.5" font-weight="bold" fill="#1e40af">R = 40 cm</text>
<line x1="146" y1="82" x2="146" y2="155" stroke="#7c2d12" stroke-width="2"/>
<rect x="124" y="155" width="44" height="28" fill="#93c5fd" stroke="#1e3a8a"/><text x="146" y="173" font-size="10.5" font-weight="bold" text-anchor="middle">200 N</text>
<text x="104" y="106" font-size="9.5" font-weight="bold" fill="#b45309">r = 10 cm</text>
<line x1="74" y1="82" x2="74" y2="132" stroke="#dc2626" stroke-width="3"/><polygon points="74,138 79,129 69,129" fill="#dc2626"/>
<text x="54" y="120" font-size="12" font-weight="bold" fill="#dc2626">F</text>
</svg></div>
<p>Buna göre; <b>F kuvvetinin büyüklüğü</b> ve çıkrık kolu <b>1 tam tur</b> döndürüldüğünde kovanın <b>yükselme miktarı (h)</b> aşağıdakilerin hangisinde doğru verilmiştir[cite: 13]?</p>`,
  c: [
    `F = 800 N — Kova 60 cm yükselir.`,
    `F = 50 N — Kova 240 cm yükselir.`,
    `F = 50 N — Kova 60 cm yükselir.`,
    `F = 50 N — Çıkrık kolu (R) 80 cm yapılırsa kova 1 turda 120 cm yükselir.`
  ],
  a: "C",
  s: `<p>Çıkrıkta kuvvet ve yükselme miktarı kurallarını uygulayalım[cite: 13]:</p>
<ul>
<li><b>Kuvvet bağıntısı ($F \cdot R = P \cdot r$):</b> $F \times 40 = 200 \times 10 \Rightarrow \mathbf{F = 50\text{ N}}$[cite: 13].</li>
<li><b>Yükselme miktarı:</b> İp içteki küçük silindire ($r = 10\text{ cm}$) sarıldığı için 1 turda küçük silindirin çevresi kadar yükselir: $h = 2 \cdot \pi \cdot r = 2 \times 3 \times 10 = \mathbf{60\text{ cm}}$[cite: 13]. (Çıkrık kolunun R uzunluğu yükselme miktarını etkilemez, sadece F kuvvetini değiştirir). Cevap <b>C</b>.</li>
</ul>`
},
{
  q: `<p>Boyları ve kalınlıkları eşit olan <b>K ve L vidalarının</b> vida adımları (iki diş arasındaki mesafe: $a_K$ ve $a_L$) şekilde gösterilmiştir ($a_K > a_L$)[cite: 13].</p>
<div class="fig"><svg viewBox="0 0 260 205" width="240" role="img" aria-label="Farklı vida adımlarına sahip K ve L vidaları">
<rect x="50" y="28" width="34" height="135" fill="#e5e7eb" stroke="#475569"/>
<rect x="38" y="16" width="58" height="12" fill="#94a3b8" stroke="#475569"/>
<polygon points="50,163 84,163 67,182" fill="#e5e7eb" stroke="#475569"/>
<g stroke="#dc2626" stroke-width="2.5">
<line x1="46" y1="40" x2="88" y2="54"/><line x1="46" y1="68" x2="88" y2="82"/>
<line x1="46" y1="96" x2="88" y2="110"/><line x1="46" y1="124" x2="88" y2="138"/>
</g>
<text x="67" y="198" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">K (Geniş adım: 2a)</text>

<rect x="165" y="28" width="34" height="135" fill="#e5e7eb" stroke="#475569"/>
<rect x="153" y="16" width="58" height="12" fill="#94a3b8" stroke="#475569"/>
<polygon points="165,163 199,163 182,182" fill="#e5e7eb" stroke="#475569"/>
<g stroke="#1e40af" stroke-width="2">
<line x1="161" y1="38" x2="203" y2="44"/><line x1="161" y1="52" x2="203" y2="58"/>
<line x1="161" y1="66" x2="203" y2="72"/><line x1="161" y1="80" x2="203" y2="86"/>
<line x1="161" y1="94" x2="203" y2="100"/><line x1="161" y1="108" x2="203" y2="114"/>
<line x1="161" y1="122" x2="203" y2="128"/><line x1="161" y1="136" x2="203" y2="142"/>
<line x1="161" y1="150" x2="203" y2="156"/>
</g>
<text x="182" y="198" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">L (Dar adım: a)</text>
</svg></div>
<p>K ve L vidaları aynı tahta bloğa tamamen gömülene kadar vidalanacağına göre, aşağıdaki ifadelerden hangisi <b>yanlıştır</b>[cite: 13]?</p>`,
  c: [
    `Vida, bir silindir etrafına sarılmış eğik düzlem prensibiyle çalışır ve kuvvetten kazanç sağlar.`,
    `Vida adımı daha küçük olan L vidasını tahtada döndürmek için gereken kuvvet K vidasına göre daha azdır (L’de kuvvet kazancı daha fazladır).`,
    `Her iki vida da eşit tur (örneğin 5 tur) döndürülürse K vidası tahta içinde L vidasından daha fazla ilerler.`,
    `Tamamen tahtaya gömülmeleri için K vidasının L vidasından daha fazla tur döndürülmesi gerekir.`
  ],
  a: "D",
  s: `<p>Vida her 1 tam tur döndürüldüğünde tahta içinde <b>1 vida adımı ($a$) kadar</b> ilerler ($h = N \cdot a$)[cite: 13]. K vidasının adımı geniş ($2a$), L’nin adımı dar ($a$) olduğu için aynı derinliğe gömülmek üzere <b>L vidası K vidasından 2 kat daha fazla tur</b> döndürülmelidir[cite: 13] (<b>D yanlıştır</b>)[cite: 13]. Cevap <b>D</b>.</p>`
},
{
  q: `<p>Şekildeki <b>K, L ve M</b> dişli çarkları birbirine temas edecek biçimde yerleştirilmiştir. <b>30 dişli K çarkı</b> ok yönünde (saat yönünde) <b>2 tam tur</b> döndürülüyor[cite: 13].</p>
<div class="fig"><svg viewBox="0 0 320 175" width="300" role="img" aria-label="Birbirine temas eden K, L ve M dişli çarkları">
<circle cx="80" cy="85" r="54" fill="#dbeafe" stroke="#1e40af" stroke-width="8" stroke-dasharray="7 5"/>
<circle cx="80" cy="85" r="5" fill="#1e293b"/>
<circle cx="168" cy="85" r="27" fill="#fef3c7" stroke="#b45309" stroke-width="8" stroke-dasharray="6 5"/>
<circle cx="168" cy="85" r="4" fill="#1e293b"/>
<circle cx="240" cy="85" r="36" fill="#dcfce7" stroke="#166534" stroke-width="8" stroke-dasharray="7 5"/>
<circle cx="240" cy="85" r="4" fill="#1e293b"/>
<path d="M50,32 A55,55 0 0,1 110,32" fill="none" stroke="#dc2626" stroke-width="3"/>
<polygon points="113,28 104,25 108,36" fill="#dc2626"/>
<g font-size="11" font-weight="bold" text-anchor="middle">
<text x="80" y="160" fill="#1e40af">K (30 diş)</text>
<text x="168" y="138" fill="#b45309">L (15 diş)</text>
<text x="240" y="148" fill="#166534">M (20 diş)</text>
</g>
</svg></div>
<p>Buna göre <b>L ve M dişlilerinin</b> tur sayıları ve dönme yönleri aşağıdakilerin hangisinde doğru verilmiştir[cite: 13]?</p>`,
  c: [
    `L: 4 tur (Saat yönünün tersine) — M: 3 tur (Saat yönünde)`,
    `L: 4 tur (Saat yönünde) — M: 3 tur (Saat yönünün tersine)`,
    `L: 2 tur (Saat yönünün tersine) — M: 4 tur (Saat yönünde)`,
    `L: 1 tur (Saat yönünün tersine) — M: 6 tur (Saat yönünde)`
  ],
  a: "A",
  s: `<p>Dişli çarklarda <b>Tur sayısı × Diş sayısı ($n_1 \cdot d_1 = n_2 \cdot d_2$)</b> çarpımı her dişlide eşittir ve temas eden komşu dişliler <b>zıt yönde</b> döner[cite: 13]:</p>
<ul>
<li><b>K dişlisi:</b> $2\text{ tur} \times 30\text{ diş} = 60$ diş ilerler (Saat yönünde)[cite: 13].</li>
<li><b>L dişlisi:</b> $n_L \times 15 = 60 \Rightarrow \mathbf{n_L = 4\text{ tur}}$ ve K’ye zıt yönde (<b>Saat yönünün tersine</b>) döner[cite: 13].</li>
<li><b>M dişlisi:</b> $n_M \times 20 = 60 \Rightarrow \mathbf{n_M = 3\text{ tur}}$ ve L’ye zıt yönde (<b>Saat yönünde</b>) döner[cite: 13]. Cevap <b>A</b>.</li>
</ul>`
},
{
  q: `<p>Şekildeki kasnak sisteminde <b>K ve L</b> kasnakları düz kayışla, <b>L ve M</b> kasnakları ise çapraz kayışla birbirine bağlanmıştır[cite: 13].</p>
<div class="fig"><svg viewBox="0 0 370 160" width="350" role="img" aria-label="Düz ve çapraz bağlı K, L, M kasnakları">
<circle cx="70" cy="82" r="42" fill="#dbeafe" stroke="#1e40af" stroke-width="3"/>
<circle cx="195" cy="82" r="14" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
<circle cx="310" cy="82" r="28" fill="#dcfce7" stroke="#166534" stroke-width="3"/>
<g stroke="#7c2d12" stroke-width="2.5">
<line x1="70" y1="40" x2="195" y2="68"/><line x1="70" y1="124" x2="195" y2="96"/>
<line x1="195" y1="68" x2="310" y2="110"/><line x1="195" y1="96" x2="310" y2="54"/>
</g>
<g fill="#1e293b"><circle cx="70" cy="82" r="4"/><circle cx="195" cy="82" r="3"/><circle cx="310" cy="82" r="4"/></g>
<g font-size="11" font-weight="bold" text-anchor="middle">
<text x="70" y="145" fill="#1e40af">K (Yarıçap: 3r)</text>
<text x="195" y="145" fill="#b45309">L (Yarıçap: r)</text>
<text x="310" y="145" fill="#166534">M (Yarıçap: 2r)</text>
</g>
</svg></div>
<p><b>K kasnağı saat yönünde 2 tur</b> döndürüldüğünde, <b>M kasnağının</b> tur sayısı ve dönme yönü ne olur[cite: 13]?</p>`,
  c: [
    `3 tur, saat yönünün tersine`,
    `3 tur, saat yönünde`,
    `6 tur, saat yönünün tersine`,
    `6 tur, saat yönünde`
  ],
  a: "A",
  s: `<p>Kasnaklarda $n_1 \cdot r_1 = n_2 \cdot r_2$ bağıntısı geçerlidir[cite: 13]:</p>
<ul>
<li><b>Tur sayısı:</b> $n_K \cdot r_K = n_M \cdot r_M \Rightarrow 2 \times 3r = n_M \times 2r \Rightarrow \mathbf{n_M = 3\text{ tur}}$ (Aradaki L kasnağı ise $6r / r = 6\text{ tur}$ atar)[cite: 13].</li>
<li><b>Dönme yönü:</b> K ile L düz bağlı olduğu için L de <b>saat yönünde</b> döner; L ile M çapraz bağlı olduğu için M kasnağı <b>saat yönünün tersine</b> döner[cite: 13]. Cevap <b>A</b>.</li>
</ul>`
},
{
  q: `<p>Yükseklikleri birbirine eşit (<b>h</b>), uzunlukları farklı olan sürtünmesiz <b>K, L ve M</b> eğik düzlemlerinde özdeş <b>G</b> ağırlıklı kutular sabit hızla tepeye çıkarılıyor ($L_M > L_L > L_K$)[cite: 13].</p>
<div class="fig"><svg viewBox="0 0 340 215" width="320" role="img" aria-label="Yükseklikleri eşit uzunlukları farklı K, L, M eğik düzlemleri">
<polygon points="45,65 145,65 145,12" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="22" y="45" font-size="13" font-weight="bold" fill="#dc2626">K</text>
<text x="90" y="34" font-size="9.5" font-weight="bold">2 m</text><text x="155" y="42" font-size="10" font-weight="bold">h</text>

<polygon points="45,135 210,135 210,82" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="22" y="115" font-size="13" font-weight="bold" fill="#2563eb">L</text>
<text x="120" y="102" font-size="9.5" font-weight="bold">3 m</text><text x="220" y="112" font-size="10" font-weight="bold">h</text>

<polygon points="45,205 280,205 280,152" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="22" y="185" font-size="13" font-weight="bold" fill="#16a34a">M</text>
<text x="150" y="172" font-size="9.5" font-weight="bold">4 m</text><text x="290" y="182" font-size="10" font-weight="bold">h</text>
</svg></div>
<p>Bu üç eğik düzlemle ilgili;</p>
<p>I. Kutuyu yukarı çıkarmak için uygulanması gereken kuvvetin en küçük olduğu (kuvvet kazancının en fazla olduğu) eğik düzlem M’dir[cite: 13].<br>
II. Özdeş kutular aynı yüksekliğe (h) çıkarıldığı için üç eğik düzlemde de yer çekimine karşı yapılan işler birbirine eşittir[cite: 13].<br>
III. Eğik düzlemin eğimi azaldıkça (K → M) kuvvetten kazanç artar, ancak alınan yol uzadığı için yoldan kayıp da artar[cite: 13].</p>
<p>yargılarından hangileri <b>doğrudur</b>[cite: 13]?</p>`,
  c: [
    `Yalnız I`,
    `I ve II`,
    `II ve III`,
    `I, II ve III`
  ],
  a: "D",
  s: `<p>Yükseklik (h) aynı iken eğik düzlemin boyu (L) uzadıkça eğim azalır ve <b>kuvvet kazancı ($L/h$) artar</b>; en az kuvvet M’de uygulanır (<b>I ve III doğru</b>)[cite: 13]. Üç kutu da aynı ağırlıkta olup aynı h yüksekliğine çıkarıldığı için yapılan işler ($W = G \cdot h$) <b>birbirine eşittir</b> (<b>II doğru</b>)[cite: 13]. Cevap <b>D</b>.</p>`
},
{
  q: `<p>Ağırlığı önemsiz, eşit bölmeli bir çubuk sol ucundan duvara menteşelenerek serbestçe dönebilmektedir. Çubuğun sağ ucuna <b>20 N</b> ağırlığında bir yük asılmış ve çubuk <b>F kuvvetiyle</b> şekildeki gibi yatay dengede tutulmuştur[cite: 13].</p>
<div class="fig"><svg viewBox="0 0 300 140" width="280" role="img" aria-label="Menteşeli tek taraflı kaldıraçta kuvvet ortada">
<rect x="36" y="75" width="218" height="8" fill="#a16207" stroke="#713f12"/>
<g stroke="#713f12" stroke-width="1.5">
<line x1="40" y1="83" x2="40" y2="90"/><line x1="110" y1="83" x2="110" y2="90"/>
<line x1="180" y1="83" x2="180" y2="90"/><line x1="250" y1="83" x2="250" y2="90"/>
</g>
<line x1="110" y1="128" x2="110" y2="88" stroke="#dc2626" stroke-width="3"/>
<polygon points="110,83 105,92 115,92" fill="#dc2626"/>
<text x="122" y="122" font-size="12" font-weight="bold" fill="#dc2626">F</text>
<line x1="250" y1="83" x2="250" y2="100" stroke="#334155" stroke-width="2"/>
<rect x="230" y="100" width="40" height="28" fill="#93c5fd" stroke="#1e3a8a"/><text x="250" y="118" font-size="10.5" font-weight="bold" text-anchor="middle">20 N</text>
<rect x="14" y="45" width="20" height="65" fill="#94a3b8" stroke="#475569"/>
<circle cx="38" cy="79" r="6" fill="#1e293b"/>
<text x="45" y="40" font-size="9.5" font-weight="bold" fill="#1e293b">Menteşe (Destek)</text>
</svg></div>
<p>Bu kaldıraç sistemiyle ilgili aşağıdakilerden hangisi <b>doğrudur</b>[cite: 13]?</p>`,
  c: [
    `Dengeyi sağlayan F kuvveti 60 N’dur; bu kaldıraçta kuvvetten 3 kat kayıp, yoldan ise 3 kat kazanç vardır (cımbız ve maşa ile özdeş tiptedir).`,
    `Dengeyi sağlayan F kuvveti 10 N’dur ve kuvvetten 2 kat kazanç sağlanmıştır.`,
    `F kuvveti yükün ağırlığına (20 N’a) eşittir.`,
    `Bu kaldıraç el arabası ve ceviz kıracağı ile aynı kaldıraç tipindedir.`
  ],
  a: "A",
  s: `<p>Duvara bağlı olan <b>menteşe destek noktasıdır!</b>[cite: 13]</p>
<ul>
<li><b>Kuvvet kolu (F’nin menteşeye uzaklığı):</b> 1 bölme[cite: 13].</li>
<li><b>Yük kolu (20 N’luk yükün menteşeye uzaklığı):</b> 3 bölme (Aradaki bölmeleri değil, desteğe olan toplam uzaklığı alırız!)[cite: 13].</li>
<li><b>Denge bağıntısı:</b> $F \times 1 = 20 \times 3 \Rightarrow \mathbf{F = 60\text{ N}}$[cite: 13].</li>
</ul>
<p>Kuvvet destek ile yük arasında (<b>kuvvet ortada: cımbız/maşa tipi</b>) olduğu için 20 N’luk yükü 60 N kuvvetle dengeledik; yani <b>kuvvetten 3 kat kayıp, yoldan 3 kat kazanç</b> vardır[cite: 13] (<b>A doğru</b>).</p>`
},
{
  q: `<p>Tahtadan çıkmakta zorlanan sıkışmış bir vidayı sökmek isteyen Ayşe, ince saplı tornavida yerine uç kalınlığı aynı ancak <b>sapı (tutma yeri) çok daha kalın ve geniş</b> olan başka bir tornavida kullandığında vidayı kolayca sökebilmiştir[cite: 13].</p>
<p>Kalın saplı tornavidanın vidayı daha kolay sökmesinin bilimsel nedeni aşağıdakilerden hangisidir[cite: 13]?</p>`,
  c: [
    `Çıkrık prensibiyle çalışan tornavidanın sapı (kuvvet kolu yarıçapı R) büyüdükçe kuvvet kazancının artması ve gereken kuvvetin azalması`,
    `Kalın saplı tornavidanın yapılan toplam işi azaltarak işten kazanç sağlaması`,
    `Kalın saplı tornavidanın vidanın diş aralığını (vida adımını) küçültmesi`,
    `Tornavidanın eğik düzlemdeki sürtünmeyi artırması`
  ],
  a: "A",
  s: `<p>Tornavida bir <b>çıkrık</b> örneğidir ($F \cdot R = P \cdot r$)[cite: 13]. Tornavidanın tutulan sapı <b>kuvvet kolu (büyük silindir: R)</b>, metal ucu ise <b>yük kolu (küçük silindir: r)</b> görevi görür[cite: 13]. Sap kalınlaştıkça $R$ büyür, <b>kuvvet kazancı ($R/r$) artar</b> ve daha az kuvvetle vida sökülür[cite: 13]. Cevap <b>A</b>.</p>`
},
{
  q: `<p>Bir öğrenci kaldıraçlarda dengeleyici kuvveti etkileyen değişkenleri araştırmak için destek noktasından <b>20 cm</b> uzağa <b>20 N</b> ağırlığında bir yük asmış; desteğin diğer tarafında farklı uzaklıklardan dinamometreyle kuvvet uygulayarak aşağıdaki tabloyu oluşturmuştur[cite: 13].</p>
<table class="rt">
<tr><th>Deney No</th><th>Yük (N)</th><th>Yük Kolu (cm)</th><th>Kuvvet Kolu (cm)</th><th>Dengeleyici Kuvvet (N)</th></tr>
<tr><td><b>1. Ölçüm</b></td><td>20 N</td><td>20 cm</td><td>10 cm</td><td>40 N</td></tr>
<tr><td><b>2. Ölçüm</b></td><td>20 N</td><td>20 cm</td><td>20 cm</td><td>20 N</td></tr>
<tr><td><b>3. Ölçüm</b></td><td>20 N</td><td>20 cm</td><td>40 cm</td><td>10 N</td></tr>
</table>
<p>Bu deneyle ilgili aşağıdaki değerlendirmelerden hangisi <b>yanlıştır</b>[cite: 13]?</p>`,
  c: [
    `Deneyin bağımsız değişkeni (araştırmacının değiştirdiği) kuvvet kolunun uzunluğudur.`,
    `Deneyin bağımlı değişkeni dinamometre ile ölçülen dengeleyici kuvvetin büyüklüğüdür.`,
    `Yükün ağırlığı (20 N) ve yük kolu (20 cm) kontrol edilen (sabit tutulan) değişkenlerdir.`,
    `Kuvvet kolunun uzunluğu iki katına çıkarıldığında dengeleyici kuvvetin büyüklüğü de iki katına çıkmıştır.`
  ],
  a: "D",
  s: `<p>Tabloda kuvvet kolu $10 \rightarrow 20 \rightarrow 40\text{ cm}$ şeklinde ikişer katına çıkarıldığında, dengeleyici kuvvet $40 \rightarrow 20 \rightarrow 10\text{ N}$ şeklinde <b>yarıya inmiştir (ters orantılıdır)</b>[cite: 13]. Dolayısıyla <b>D</b> seçeneği yanlıştır[cite: 13]. Cevap <b>D</b>.</p>`
},
{
  q: `<p>Eşit bölmeli ve ağırlığı önemsiz bir tahterevallinin destek noktasından <b>2 metre solunda 400 N</b> ağırlığındaki Ali, <b>2 metre sağında ise 300 N</b> ağırlığındaki Ece oturmaktadır[cite: 13].</p>
<div class="fig"><svg viewBox="0 0 420 140" width="400" role="img" aria-label="Tahterevallide üç kişinin yatay denge hesabı">
<rect x="26" y="80" width="368" height="8" fill="#a16207" stroke="#713f12"/>
<g stroke="#713f12" stroke-width="1.5">
<line x1="66" y1="88" x2="66" y2="96"/><line x1="138" y1="88" x2="138" y2="96"/>
<line x1="210" y1="88" x2="210" y2="96"/><line x1="282" y1="88" x2="282" y2="96"/><line x1="354" y1="88" x2="354" y2="96"/>
</g>
<polygon points="210,88 196,114 224,114" fill="#64748b"/>
<line x1="185" y1="114" x2="235" y2="114" stroke="#334155" stroke-width="3"/>
<rect x="44" y="48" width="44" height="32" fill="#93c5fd" stroke="#1e3a8a"/><text x="66" y="68" font-size="10" font-weight="bold" text-anchor="middle">Ali (400 N)</text>
<rect x="332" y="48" width="44" height="32" fill="#fde047" stroke="#b45309"/><text x="354" y="68" font-size="10" font-weight="bold" text-anchor="middle">Ece (300 N)</text>
<text x="138" y="108" font-size="9.5" font-weight="bold" fill="#1e40af" text-anchor="middle">← 2 m →</text>
<text x="282" y="108" font-size="9.5" font-weight="bold" fill="#b45309" text-anchor="middle">← 2 m →</text>
</svg></div>
<p>Tahterevallinin yatay olarak dengede kalabilmesi için, <b>200 N</b> ağırlığındaki Ece’nin kardeşi destek noktasının <b>sağ tarafında kaç metre uzağa</b> oturmalıdır[cite: 13]?</p>`,
  c: [`0,5`, `1`, `1,5`, `2`],
  a: "B",
  s: `<p>Desteğin sol tarafındaki döndürme etkisi ile sağ tarafındaki döndürme etkilerinin toplamı eşit olmalıdır[cite: 13]:</p>
<ul>
<li><b>Sol taraf (Ali):</b> $400\text{ N} \times 2\text{ m} = \mathbf{800\text{ N}\cdot\text{m}}$[cite: 13].</li>
<li><b>Sağ taraf (Ece + Kardeşi):</b> $(300\text{ N} \times 2\text{ m}) + (200\text{ N} \times x) = 600 + 200x$[cite: 13].</li>
<li><b>Denge eşitliği:</b> $800 = 600 + 200x \Rightarrow 200x = 200 \Rightarrow \mathbf{x = 1\text{ metre}}$ sağına oturmalıdır[cite: 13]. Cevap <b>B</b>.</li>
</ul>`
},
  {
  q: `<p>Şekilde bir el arabasının çalışma modeli verilmiştir. Tekerlek <b>destek noktası</b> olarak görev yapmaktadır. <b>600 N</b> ağırlığındaki yük tekerlekten <b>0,5 m</b> uzakta, kuvvet uygulanan kollar ise tekerlekten <b>1,5 m</b> (toplam 3 bölme) uzaktadır.</p>
<div class="fig"><svg viewBox="0 0 340 145" width="320" role="img" aria-label="El arabası kaldıraç modeli">
<rect x="36" y="80" width="248" height="8" fill="#a16207" stroke="#713f12"/>
<g stroke="#713f12" stroke-width="1.5">
<line x1="40" y1="88" x2="40" y2="95"/><line x1="120" y1="88" x2="120" y2="95"/>
<line x1="200" y1="88" x2="200" y2="95"/><line x1="280" y1="88" x2="280" y2="95"/>
</g>
<rect x="98" y="48" width="44" height="32" fill="#93c5fd" stroke="#1e3a8a" stroke-width="1.5"/>
<text x="120" y="68" font-size="10.5" font-weight="bold" text-anchor="middle">600 N</text>
<line x1="280" y1="132" x2="280" y2="94" stroke="#dc2626" stroke-width="3"/>
<polygon points="280,88 275,97 285,97" fill="#dc2626"/>
<text x="292" y="128" font-size="12" font-weight="bold" fill="#dc2626">F</text>
<circle cx="40" cy="98" r="15" fill="#e2e8f0" stroke="#334155" stroke-width="3"/>
<circle cx="40" cy="98" r="3" fill="#334155"/>
<g font-size="10" font-weight="bold" text-anchor="middle" fill="#1e293b">
<text x="80" y="132">0,5 m</text>
<text x="160" y="132">0,5 m</text>
<text x="240" y="132">0,5 m</text>
</g>
</svg></div>
<p>Buna göre el arabası modeliyle ilgili aşağıdakilerden hangisi <b>yanlıştır</b> (El arabasının kendi ağırlığı önemsizdir)[cite: 9]?</p>`,
  c: [
    `Yükü yatay dengede tutmak için kollara yukarı yönde 200 N kuvvet uygulanmalıdır.`,
    `Yük tekerleğe (destek noktasına) yaklaştırılırsa kollara uygulanması gereken kuvvet azalır.`,
    `El arabası, yükün destek ile kuvvet arasında (yük ortada) olduğu bir kaldıraçtır ve kuvvetten 3 kat kazanç sağlamıştır.`,
    `El arabasının tutma kollarının daha kısa yapılması, yükü kaldırmak için gereken kuvveti azaltır.`
  ],
  a: "D",
  s: `<p>El arabasında tekerlek destek noktasıdır; yük kolu $0,5\text{ m}$, kuvvet kolu ise $0,5 + 0,5 + 0,5 = 1,5\text{ m}$’dir[cite: 9]:</p>
<ul>
<li>$F \times 1,5 = 600 \times 0,5 \Rightarrow \mathbf{F = 200\text{ N}}$ (Kuvvetten 3 kat kazanç vardır; A ve C doğru)[cite: 9].</li>
<li>Yük tekerleğe yaklaştırılırsa yük kolu küçülür, gereken kuvvet azalır (B doğru)[cite: 9].</li>
<li>Tutma kolları kısaltılırsa kuvvet kolu küçülür ve yükü kaldırmak için gereken kuvvet azalmaz, <b>artar</b> (<b>D yanlıştır</b>)[cite: 9]. Cevap <b>D</b>.</li>
</ul>`
},
{
  q: `<p>Bir bisikletin pedalına bağlı ön dişlisinde (aynakol) <b>48 diş</b>, arka tekerleğin merkezine bağlı arka dişlide (ruble) ise <b>16 diş</b> bulunmaktadır. Arka dişli ile arka tekerlek eş merkezli olup birlikte dönmektedir[cite: 9].</p>
<div class="fig"><svg viewBox="0 0 380 140" width="360" role="img" aria-label="Bisiklet ön ve arka dişli çark sistemi">
<circle cx="95" cy="70" r="42" fill="#dbeafe" stroke="#1e40af" stroke-width="5" stroke-dasharray="6 4"/>
<circle cx="95" cy="70" r="5" fill="#1e293b"/>
<line x1="95" y1="70" x2="125" y2="105" stroke="#dc2626" stroke-width="3.5"/>
<rect x="118" y="102" width="18" height="8" rx="2" fill="#1e293b"/>
<circle cx="275" cy="70" r="52" fill="none" stroke="#334155" stroke-width="4"/>
<circle cx="275" cy="70" r="18" fill="#fef3c7" stroke="#b45309" stroke-width="4" stroke-dasharray="4 3"/>
<circle cx="275" cy="70" r="4" fill="#1e293b"/>
<line x1="95" y1="28" x2="275" y2="52" stroke="#475569" stroke-width="2" stroke-dasharray="4 2"/>
<line x1="95" y1="112" x2="275" y2="88" stroke="#475569" stroke-width="2" stroke-dasharray="4 2"/>
<g font-size="10" font-weight="bold" text-anchor="middle">
<text x="95" y="130" fill="#1e40af">Ön Dişli (48 diş)</text>
<text x="275" y="134" fill="#b45309">Arka Dişli (16 diş) + Tekerlek</text>
</g>
</svg></div>
<p>Bu bisiklet düzeneği ile ilgili aşağıdakilerden hangisi <b>doğrudur</b>[cite: 9]?</p>`,
  c: [
    `Pedal 1 tam tur döndürüldüğünde arka dişli ve arka tekerlek 1 tur döner.`,
    `Pedal 1 tam tur döndürüldüğünde arka dişli ve arka tekerlek aynı yönde 3 tam tur döner.`,
    `Arka dişli 16 diş yerine 24 dişli bir çarkla değiştirilirse dik yokuşları çıkarken pedal çevirmek zorlaşır.`,
    `Bisiklette yalnızca dişli çark türünde basit makine bulunur; çıkrık veya kaldıraç bulunmaz.`
  ],
  a: "B",
  s: `<p>Zincirle bağlı dişliler düz bağlı kasnaklar gibi <b>aynı yönde</b> döner ve $n_1 \cdot d_1 = n_2 \cdot d_2$ bağıntısı geçerlidir[cite: 9]:</p>
<ul>
<li>$1\text{ tur} \times 48\text{ diş} = n_{\text{arka}} \times 16\text{ diş} \Rightarrow \mathbf{n_{\text{arka}} = 3\text{ tur}}$[cite: 9]. Arka tekerlek de arka dişliyle eş merkezli olduğu için <b>3 tur</b> döner (<b>B doğru</b>)[cite: 9].</li>
<li>Arka dişli büyütülürse (24 diş yapılırsa) kuvvet kazancı artar ve yokuş çıkmak <b>kolaylaşır</b> (C yanlış)[cite: 9].</li>
<li>Bisiklet; dişli çark, çıkrık (pedal ve gidon) ve kaldıraçtan (fren kolu) oluşan bir <b>bileşik makinedir</b> (D yanlış)[cite: 9]. Cevap <b>B</b>.</li>
</ul>`
},
{
  q: `<p>Eş merkezli (çakışık) silindir ve makaralardan oluşan şekildeki sistemde; yarıçapı <b>3r</b> olan <b>K dişlisi</b> ile yarıçapı <b>r</b> olan <b>L kasnağı</b> aynı merkezli olarak birbirine perçinlenmiştir. K dişlisi, yarıçapı <b>2r</b> olan <b>M dişlisi</b> ile temas hâlindedir.</p>
<div class="fig"><svg viewBox="0 0 380 185" width="360" role="img" aria-label="Eş merkezli K-L ve temas eden M dişli sistemi">
<circle cx="110" cy="75" r="45" fill="#dbeafe" stroke="#1e40af" stroke-width="5" stroke-dasharray="6 4"/>
<circle cx="110" cy="75" r="18" fill="#fde047" stroke="#b45309" stroke-width="2"/>
<circle cx="110" cy="75" r="4" fill="#1e293b"/>
<circle cx="218" cy="75" r="30" fill="#dcfce7" stroke="#166534" stroke-width="5" stroke-dasharray="6 4"/>
<circle cx="218" cy="75" r="4" fill="#1e293b"/>
<line x1="92" y1="75" x2="92" y2="145" stroke="#7c2d12" stroke-width="2"/>
<rect x="74" y="145" width="36" height="24" fill="#fca5a5" stroke="#991b1b"/><text x="92" y="161" font-size="10" font-weight="bold" text-anchor="middle">X Yükü</text>
<path d="M85,22 A50,50 0 0,1 135,22" fill="none" stroke="#dc2626" stroke-width="2.5"/>
<polygon points="138,18 129,16 133,26" fill="#dc2626"/>
<g font-size="10" font-weight="bold" text-anchor="middle">
<text x="110" y="14" fill="#dc2626">1. Yön (Saat Yönü)</text>
<text x="110" y="45" fill="#1e40af">K (3r)</text>
<text x="110" y="78" font-size="9" fill="#92400e">L (r)</text>
<text x="218" y="78" fill="#166534">M (2r)</text>
</g>
</svg></div>
<p><b>K dişlisi 1. yönde (saat yönünde) 2 tam tur</b> döndürüldüğünde; içteki L kasnağına bağlı <b>X yükünün hareket yönü</b> ve <b>M dişlisinin tur sayısı</b> aşağıdakilerin hangisinde doğru verilmiştir ($\pi = 3$)?</p>`,
  c: [
    `X yükü: 12r kadar yükselir — M dişlisi: Saat yönünün tersine 3 tur döner.`,
    `X yükü: 36r kadar yükselir — M dişlisi: Saat yönünde 3 tur döner.`,
    `X yükü: 12r kadar alçalır — M dişlisi: Saat yönünün tersine 2 tur döner.`,
    `X yükü: 6r kadar yükselir — M dişlisi: Saat yönünde 4 tur döner.`
  ],
  a: "A",
  s: `<p>Eş merkezli sistemlerdeki altın kuralı uygulayalım:</p>
<ul>
<li><b>L kasnağı ve X yükü:</b> L kasnağı K dişlisi ile <b>eş merkezli</b> olduğu için K saat yönünde 2 tur döndüğünde, L kasnağı da <b>saat yönünde 2 tur</b> döner ve sol tarafındaki ipi yukarı sararak X yükünü kendi çevresinin 2 katı kadar yükseltir: $h = 2 \times (2 \cdot \pi \cdot r) = 2 \times (2 \times 3 \times r) = \mathbf{12r\text{ yükselir}}$.</li>
<li><b>M dişlisi:</b> K dişlisine dıştan temas ettiği için <b>saat yönünün tersine</b> döner ve tur sayısı: $n_K \cdot r_K = n_M \cdot r_M \Rightarrow 2 \times 3r = n_M \times 2r \Rightarrow \mathbf{n_M = 3\text{ tur}}$ olur[cite: 9]. Cevap <b>A</b>.</li>
</ul>`
},
{
  q: `<p>Bir işçi <b>600 N</b> ağırlığındaki bir buzdolabını, yerden yüksekliği <b>1 metre</b> olan kamyon kasasına sürtünmesiz bir rampa (eğik düzlem) kullanarak çıkaracaktır. İşçi buzdolabını itmek için en fazla <b>200 N</b> büyüklüğünde kuvvet uygulayabilmektedir[cite: 9].</p>
<p>Buna göre işçinin buzdolabını kamyon kasasına çıkarabilmesi için kullanacağı rampanın uzunluğu (<b>L</b>) <b>en az kaç metre</b> olmalıdır[cite: 9]?</p>`,
  c: [`1,5`, `2`, `2,5`, `3`],
  a: "D",
  s: `<p>Sürtünmesiz eğik düzlemde bağıntımız: $F \cdot L = P \cdot h$[cite: 9].</p>
<p>$200\text{ N} \times L = 600\text{ N} \times 1\text{ m} \Rightarrow 200 \cdot L = 600 \Rightarrow \mathbf{L = 3\text{ metre}}$ olmalıdır[cite: 9]. (Rampa 3 metreden kısa olursa gereken kuvvet 200 N’u aşar ve işçi kutuyu çıkaramaz)[cite: 9]. Cevap <b>D</b>.</p>`
},
{
  q: `<p>Ağırlığı önemsiz, eşit bölmeli bir çubuk üzerine <b>30 N</b> ve <b>20 N</b> ağırlığındaki iki kutu konulmuş; çubuk sağ uç yakınındaki <b>F kuvvetiyle</b> şekildeki gibi yatay dengelenmiştir[cite: 9].</p>
<div class="fig"><svg viewBox="0 0 460 140" width="440" role="img" aria-label="İki yüklü kaldıraçta dengeleyici F kuvveti hesabı">
<rect x="36" y="80" width="388" height="8" fill="#a16207" stroke="#713f12"/>
<g stroke="#713f12" stroke-width="1.5">
<line x1="40" y1="88" x2="40" y2="96"/><line x1="90" y1="88" x2="90" y2="96"/><line x1="140" y1="88" x2="140" y2="96"/>
<line x1="190" y1="88" x2="190" y2="96"/><line x1="240" y1="88" x2="240" y2="96"/><line x1="290" y1="88" x2="290" y2="96"/>
<line x1="340" y1="88" x2="340" y2="96"/><line x1="390" y1="88" x2="390" y2="96"/>
</g>
<polygon points="190,88 177,114 203,114" fill="#64748b"/>
<line x1="165" y1="114" x2="215" y2="114" stroke="#334155" stroke-width="3"/>
<rect x="70" y="48" width="40" height="32" fill="#93c5fd" stroke="#1e3a8a" stroke-width="1.5"/>
<text x="90" y="69" font-size="10.5" font-weight="bold" text-anchor="middle">30 N</text>
<rect x="120" y="48" width="40" height="32" fill="#fde047" stroke="#b45309" stroke-width="1.5"/>
<text x="140" y="69" font-size="10.5" font-weight="bold" text-anchor="middle">20 N</text>
<line x1="390" y1="30" x2="390" y2="73" stroke="#dc2626" stroke-width="3"/>
<polygon points="390,79 395,70 385,70" fill="#dc2626"/>
<text x="402" y="45" font-size="12" font-weight="bold" fill="#dc2626">F</text>
</svg></div>
<p>Buna göre çubuğun yatay dengesini sağlayan <b>F kuvveti kaç N</b>’dur[cite: 9]?</p>`,
  c: [`10`, `15`, `20`, `25`],
  a: "C",
  s: `<p>Destek noktasının solundaki kutuların döndürme etkilerinin toplamı, sağdaki F kuvvetinin döndürme etkisine eşit olmalıdır[cite: 9]:</p>
<ul>
<li>30 N’luk kutunun desteğe uzaklığı = <b>2 bölme</b> ($30 \times 2 = 60$)[cite: 9].</li>
<li>20 N’luk kutunun desteğe uzaklığı = <b>1 bölme</b> ($20 \times 1 = 20$)[cite: 9].</li>
<li>F kuvvetinin desteğe uzaklığı = <b>4 bölme</b>[cite: 9].</li>
</ul>
<p>Denge denklemi: $(30 \times 2) + (20 \times 1) = F \times 4 \Rightarrow 80 = 4F \Rightarrow \mathbf{F = 20\text{ N}}$ bulunur[cite: 9]. Cevap <b>C</b>.</p>`
},
{
  q: `<p>Sürtünmelerin ve makara ağırlığının önemsiz olduğu şekildeki bileşik sistemde, eğik düzlem üzerindeki <b>120 N</b> ağırlığındaki <b>K cismi</b>, sabit makaradan geçen iple <b>L cismine</b> bağlanarak dengelenmiştir.</p>
<div class="fig"><svg viewBox="0 0 380 170" width="360" role="img" aria-label="Eğik düzlem ve sabit makara birleşik denge sistemi">
<polygon points="30,145 270,145 270,55" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<g transform="rotate(-20.5 150 100)">
<rect x="125" y="72" width="48" height="28" fill="#93c5fd" stroke="#1e3a8a" stroke-width="1.5"/>
<text x="149" y="90" font-size="10" font-weight="bold" text-anchor="middle">K (120 N)</text>
</g>
<line x1="270" y1="55" x2="285" y2="40" stroke="#334155" stroke-width="3"/>
<circle cx="285" cy="40" r="14" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
<circle cx="285" cy="40" r="3" fill="#334155"/>
<line x1="175" y1="78" x2="280" y2="27" stroke="#7c2d12" stroke-width="2"/>
<line x1="299" y1="40" x2="299" y2="105" stroke="#7c2d12" stroke-width="2"/>
<rect x="281" y="105" width="36" height="28" fill="#fca5a5" stroke="#991b1b" stroke-width="1.5"/>
<text x="299" y="123" font-size="10.5" font-weight="bold" text-anchor="middle">L</text>
<g font-size="10.5" font-weight="bold">
<text x="125" y="65" fill="#1e40af" transform="rotate(-20.5 125 65)">L = 6 m</text>
<text x="242" y="108" fill="#92400e">h = 2 m</text>
</g>
</svg></div>
<p>Eğik düzlemin uzunluğu <b>6 m</b>, yüksekliği <b>2 m</b> olduğuna göre, sistemin dengede kalmasını sağlayan <b>L cisminin ağırlığı kaç N</b>’dur?</p>`,
  c: [`20`, `30`, `40`, `60`],
  a: "C",
  s: `<p>Önce 120 N’luk K cismini eğik düzlemde dengeleyen ip gerilmesini ($F$) bulalım:</p>
<ul>
<li>Eğik düzlem denklemi: $F \cdot L = P_K \cdot h \Rightarrow F \times 6 = 120 \times 2 \Rightarrow 6F = 240 \Rightarrow \mathbf{F = 40\text{ N}}$.</li>
<li>Sabit makara kuvvetin büyüklüğünü değiştirmeden aynen L cismine ilettiği için L cisminin ağırlığı da ip gerilmesine eşittir: $\mathbf{P_L = 40\text{ N}}$. Cevap <b>C</b>.</li>
</ul>`
},
{
  q: `<p>Ağırlığı ve sürtünmeleri önemsiz makaralar ile ağırlığı önemsiz eşit bölmeli çubuk kullanılarak şekildeki birleşik sistem kurulmuştur. Sol taraftaki hareketli makaranın altına <b>120 N</b> ağırlığında bir yük asılmıştır.</p>
<div class="fig"><svg viewBox="0 0 380 185" width="360" role="img" aria-label="Hareketli makara ve kaldıraç birleşik sistemi">
<rect x="35" y="8" width="90" height="8" fill="#94a3b8"/>
<path d="M55,16 L55,80 A18,18 0 0,0 91,80 L91,125" fill="none" stroke="#7c2d12" stroke-width="2"/>
<circle cx="73" cy="80" r="18" fill="#e2e8f0" stroke="#334155" stroke-width="2"/><circle cx="73" cy="80" r="3" fill="#334155"/>
<line x1="73" y1="98" x2="73" y2="112" stroke="#334155" stroke-width="2"/>
<rect x="51" y="112" width="44" height="26" fill="#93c5fd" stroke="#1e3a8a"/><text x="73" y="129" font-size="10" font-weight="bold" text-anchor="middle">120 N</text>
<rect x="85" y="125" width="250" height="8" fill="#a16207" stroke="#713f12"/>
<g stroke="#713f12" stroke-width="1.5">
<line x1="91" y1="133" x2="91" y2="140"/><line x1="151" y1="133" x2="151" y2="140"/>
<line x1="211" y1="133" x2="211" y2="140"/><line x1="271" y1="133" x2="271" y2="140"/><line x1="331" y1="133" x2="331" y2="140"/>
</g>
<polygon points="151,133 139,158 163,158" fill="#64748b"/>
<line x1="130" y1="158" x2="172" y2="158" stroke="#334155" stroke-width="3"/>
<rect x="311" y="95" width="40" height="30" fill="#fde047" stroke="#b45309" stroke-width="1.5"/>
<text x="331" y="114" font-size="11" font-weight="bold" text-anchor="middle">X</text>
</svg></div>
<p>Eşit bölmeli kaldıraç çubuğu yatay dengede olduğuna göre, sağ uçtaki <b>X cisminin ağırlığı kaç N</b>’dur?</p>`,
  c: [`15`, `20`, `30`, `60`],
  a: "B",
  s: `<p>Bileşik sistemi iki adımda çözelim:</p>
<ol>
<li><b>Hareketli makara adımı:</b> 120 N’luk yük hareketli makaradaki 2 ip koluyla taşındığı için kaldıraç çubuğunun sol ucunu yukarı/aşağı çeken ip gerilmesi: $T = \frac{120}{2} = \mathbf{60\text{ N}}$’dur.</li>
<li><b>Kaldıraç adımı:</b> Sol uçtaki 60 N’luk kuvvetin desteğe uzaklığı <b>1 bölme</b>, sağ uçtaki X cisminin desteğe uzaklığı ise <b>3 bölmedir</b>: $60 \times 1 = X \times 3 \Rightarrow \mathbf{X = 20\text{ N}}$ bulunur. Cevap <b>B</b>.</li>
</ol>`
},
{
  q: `<p>İki veya daha fazla basit makinenin bir araya gelmesiyle oluşan araçlara <b>bileşik makine</b> denir[cite: 9]. Aşağıdaki tabloda günlük hayatta kullandığımız dört bileşik makine ve yapılarında bulunan basit makine türleri eşleştirilmiştir[cite: 9].</p>
<table class="rt">
<tr><th>No</th><th>Bileşik Makine</th><th>Yapısında Bulunan Basit Makineler</th></tr>
<tr><td><b>I</b></td><td><b>El Arabası</b></td><td>Kaldıraç (kollar ve hazne) + Tekerlek[cite: 9]</td></tr>
<tr><td><b>II</b></td><td><b>Makas / Et Kıyma Makinesi</b></td><td>Makas: Kaldıraç + Kama · Kıyma makinesi: Çıkrık + Vida + Kama[cite: 9]</td></tr>
<tr><td><b>III</b></td><td><b>Bisiklet</b></td><td>Kaldıraç (fren kolu) + Çıkrık (pedal ve gidon) + Dişli çarklar + Tekerlek[cite: 9]</td></tr>
<tr><td><b>IV</b></td><td><b>Olta Takımı</b></td><td>Yalnızca eğik düzlem ve kama</td></tr>
</table>
<p>Tablodaki numaralanmış eşleştirmelerden hangisi <b>yanlış</b> verilmiştir?</p>`,
  c: [`I`, `II`, `III`, `IV`],
  a: "D",
  s: `<p>Bir <b>olta takımında</b>; olta kamışı <b>kuvvetin ortada olduğu bir kaldıraç</b>[cite: 9], misinayı saran makara kolu <b>çıkrık</b>, uçtaki makara sistemi ise <b>sabit makara / dişli çark</b> içerir. Dolayısıyla “yalnızca eğik düzlem ve kama içerir” denilen <b>IV. satır yanlıştır</b>. Cevap <b>D</b>.</p>`
},
{
  q: `<p>Aşağıda bazı kesici ve delici araçlarla ilgili bilgiler verilmiştir[cite: 9]:</p>
<p>I. Odun yarmakta kullanılan baltanın ağzı ve bıçak, iki eğik düzlemin birleşimi olan <b>kama</b> örneğidir[cite: 9].<br>
II. Kağıt kesmekte kullandığımız makas, <b>kaldıraç ve kamanın</b> birleşiminden oluşan bileşik bir makinedir[cite: 9].<br>
III. Bir kamanın (bıçağın veya baltanın) kesici ağzı ne kadar kalın ve küt yapılırsa cismi yarmak için gereken kuvvet o kadar azalır[cite: 9].</p>
<p>Bu bilgilerden hangileri <b>doğrudur</b>[cite: 9]?</p>`,
  c: [
    `Yalnız I`,
    `I ve II`,
    `II ve III`,
    `I, II ve III`
  ],
  a: "B",
  s: `<p>Balta ve bıçak ağzı birer <b>kama</b>dır (<b>I doğru</b>)[cite: 9]; makas ise kollarıyla kaldıraç, kesici ağızlarıyla kama olan bileşik bir makinedir (<b>II doğru</b>)[cite: 9]. Ancak kamanın ağzı kalınlaştıkça değil, <b>inceldikçe (bilenip keskinleştikçe)</b> kuvvet kazancı artar ve gereken kuvvet azalır (<b>III yanlış</b>)[cite: 9]. Cevap <b>B</b>.</p>`
},
{
  q: `<p>Sürtünmesiz <b>X, Y ve Z</b> makara düzeneklerinde özdeş yükleri <b>1 metre</b> yükseltmek için çekilmesi gereken ip uzunlukları aşağıdaki sütun grafiğinde gösterilmiştir.</p>
<div class="fig"><svg viewBox="0 0 420 165" width="400" role="img" aria-label="Makara düzeneklerinde ipin çekilme miktarı ve yükün yükselme grafiği">
<line x1="55" y1="130" x2="380" y2="130" stroke="#334155" stroke-width="2"/>
<line x1="55" y1="15" x2="55" y2="130" stroke="#334155" stroke-width="2"/>
<rect x="85" y="100" width="28" height="30" fill="#2563eb"/>
<rect x="115" y="100" width="28" height="30" fill="#dc2626"/>
<rect x="195" y="100" width="28" height="30" fill="#2563eb"/>
<rect x="225" y="70" width="28" height="60" fill="#dc2626"/>
<rect x="305" y="100" width="28" height="30" fill="#2563eb"/>
<rect x="335" y="10" width="28" height="120" fill="#dc2626"/>
<g font-size="9.5" font-weight="bold" text-anchor="middle">
<text x="99" y="94" fill="#2563eb">1 m</text><text x="129" y="94" fill="#dc2626">1 m</text><text x="114" y="146">X Düzeneği</text>
<text x="209" y="94" fill="#2563eb">1 m</text><text x="239" y="64" fill="#dc2626">2 m</text><text x="224" y="146">Y Düzeneği</text>
<text x="319" y="94" fill="#2563eb">1 m</text><text x="349" y="12" fill="#dc2626">4 m</text><text x="334" y="146">Z Düzeneği</text>
</g>
<rect x="95" y="152" width="10" height="10" fill="#2563eb"/><text x="165" y="161" font-size="9.5" font-weight="bold">Yükün Yükselmesi (m)</text>
<rect x="235" y="152" width="10" height="10" fill="#dc2626"/><text x="310" y="161" font-size="9.5" font-weight="bold">Çekilen İp Uzunluğu (m)</text>
</svg></div>
<p>Grafikteki verilere göre X, Y ve Z düzenekleriyle ilgili aşağıdakilerden hangisi <b>doğrudur</b>[cite: 9]?</p>`,
  c: [
    `X düzeneği sabit makaradır (kuvvet kazancı yoktur); Y düzeneği 1 hareketli makaradır (2 kat kuvvet kazancı vardır); Z düzeneği ise yükü 4 ip kolunun taşıdığı bir palangadır (4 kat kuvvet kazancı vardır).`,
    `En büyük kuvvet Z düzeneğinde uygulanmıştır.`,
    `Z düzeneğinde yapılan iş, X düzeneğinde yapılan işin 4 katıdır.`,
    `Y düzeneğinde yoldan 2 kat kazanç sağlanmıştır.`
  ],
  a: "A",
  s: `<p>Basit makinelerde <b>yoldan kayıp oranı = kuvvetten kazanç oranıdır</b>[cite: 9]:</p>
<ul>
<li><b>X Düzeneği:</b> 1 m yükseltmek için 1 m ip çekilmiş → <b>Sabit makara</b> ($F = P$)[cite: 9].</li>
<li><b>Y Düzeneği:</b> 1 m yükseltmek için 2 m ip çekilmiş (yoldan 2 kat kayıp) → <b>Hareketli makara</b> ($F = P/2$, 2 kat kuvvet kazancı)[cite: 9].</li>
<li><b>Z Düzeneği:</b> 1 m yükseltmek için 4 m ip çekilmiş (yoldan 4 kat kayıp) → <b>4 ip kollu palanga</b> ($F = P/4$, 4 kat kuvvet kazancı)[cite: 9]. Cevap <b>A</b>.</li>
</ul>`
},
{
  q: `<p>Ağırlığı ve sürtünmesi önemsiz bir <b>sabit makara</b> ile <b>50 N</b> ağırlığındaki bir yük, ip F kuvvetiyle çekilerek sabit hızla yukarı çıkarılmaktadır[cite: 9].</p>
<p>Bu sabit makara düzeneği ile ilgili;</p>
<p>I. Makara, uygulanan kuvvetin yönünü değiştirerek iş yapma kolaylığı sağlar[cite: 9].<br>
II. Yükü sabit hızla yükseltmek için uygulanan F kuvvetinin büyüklüğü 50 N’dur[cite: 9].<br>
III. İp aşağı doğru 2 m çekildiğinde yük yukarı doğru 1 m yükselir[cite: 9].</p>
<p>yargılarından hangileri <b>doğrudur</b>[cite: 9]?</p>`,
  c: [
    `Yalnız I`,
    `Yalnız III`,
    `I ve II`,
    `I, II ve III`
  ],
  a: "C",
  s: `<p>Sabit makarada kuvvet kazancı veya yol kaybı yoktur; $F = P = 50\text{ N}$’dur ve sadece kuvvetin yönünü değiştirir (<b>I ve II doğru</b>)[cite: 9]. İp 2 m çekildiğinde yük de <b>2 m</b> yükselir (<b>III yanlış</b>)[cite: 9]. Cevap <b>C</b>.</p>`
},
{
  q: `<p>Ağırlığı ve sürtünmesi önemsiz bir <b>hareketli makara</b> ile <b>80 N</b> ağırlığındaki bir yük F kuvvetiyle sabit hızla yukarı çekilmektedir[cite: 9].</p>
<p>Bu hareketli makara sistemiyle ilgili aşağıdakilerden hangisi <b>yanlıştır</b>[cite: 9]?</p>`,
  c: [
    `Yük iki ip kolu tarafından taşındığı için F kuvvetinin büyüklüğü 40 N’dur.`,
    `İpin ucu yukarı doğru 2 m çekildiğinde yük 1 m yükselir.`,
    `Yük daha küçük bir kuvvetle kaldırıldığı için bu sistemde işten ve enerjiden 2 kat kazanç sağlanmıştır.`,
    `Sistemde kuvvetten 2 kat kazanç sağlanırken yoldan 2 kat kayıp vardır.`
  ],
  a: "C",
  s: `<p>Hareketli makarada $F = 80 / 2 = 40\text{ N}$ olup kuvvetten 2 kat kazanç, yoldan 2 kat kayıp vardır (A, B ve D doğru)[cite: 9]. Ancak <b>hiçbir basit makinede işten veya enerjiden kazanç sağlanmaz</b> ($40\text{ N} \times 2\text{ m} = 80\text{ J}$ iş = $80\text{ N} \times 1\text{ m} = 80\text{ J}$ iş) (<b>C yanlıştır</b>)[cite: 9]. Cevap <b>C</b>.</p>`
},
{
  q: `<p>Aşağıdaki Venn şemasında basit makineler <b>“Kuvvetin Yönünü Değiştirenler”</b> ve <b>“Kesinlikle Kuvvetten Kazanç Sağlayanlar”</b> olarak gruplandırılmıştır[cite: 9].</p>
<div class="fig"><svg viewBox="0 0 520 145" width="500" role="img" aria-label="Basit makinelerin özellikleri Venn şeması">
<ellipse cx="175" cy="75" rx="145" ry="58" fill="#dbeafe" fill-opacity="0.6" stroke="#2563eb" stroke-width="2"/>
<ellipse cx="345" cy="75" rx="145" ry="58" fill="#dcfce7" fill-opacity="0.6" stroke="#16a34a" stroke-width="2"/>
<text x="110" y="30" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">Kuvvetin Yönünü Değiştirenler</text>
<text x="410" y="30" font-size="10" font-weight="bold" fill="#166534" text-anchor="middle">Kesinlikle Kuvvetten Kazanç Sağlayanlar</text>
<g font-size="12" font-weight="bold" text-anchor="middle">
<text x="105" y="80" fill="#1e40af">X</text>
<text x="260" y="80" fill="#dc2626">Y</text>
<text x="415" y="80" fill="#166534">Z</text>
</g>
</svg></div>
<p>Şemadaki <b>X, Y ve Z</b> bölgelerine yazılabilecek basit makine örnekleri aşağıdakilerin hangisinde doğru verilmiştir[cite: 9]?</p>`,
  c: [
    `X: Sabit makara — Y: İpin aşağı çekildiği palanga (veya kuvvet kolu yük kolundan uzun olan destek ortada kaldıraç) — Z: El arabası, hareketli makara ve eğik düzlem`,
    `X: Hareketli makara — Y: Sabit makara — Z: Cımbız ve maşa`,
    `X: Eğik düzlem — Y: El arabası — Z: Sabit makara`,
    `X: Ceviz kıracağı — Y: Cımbız — Z: Tahterevalli`
  ],
  a: "A",
  s: `<p>Bölgeleri inceleyelim[cite: 9]:</p>
<ul>
<li><b>X (Yalnız kuvvetin yönünü değiştiren, kuvvet kazancı olmayan):</b> <b>Sabit makara</b>[cite: 9].</li>
<li><b>Y (Hem kuvvetin yönünü değiştiren hem de kuvvetten kazanç sağlayan):</b> İpin aşağı doğru çekildiği <b>palanga</b> veya kuvvet kolu yük kolundan büyük olan <b>destek ortada kaldıraç (levye/kerpeten)</b>[cite: 9].</li>
<li><b>Z (Kuvvetin yönünü değiştirmeyip kesinlikle kuvvetten kazanç sağlayan):</b> <b>El arabası (yük ortada kaldıraç), hareketli makara, eğik düzlem</b>[cite: 9]. Cevap <b>A</b>.</li>
</ul>`
},
{
  q: `<p>Şekildeki çıkrık düzeneğinde, <b>r</b> yarıçaplı silindire sarılı ipin ucundaki <b>P yükünü</b> daha küçük bir <b>F kuvvetiyle</b> dengelemek (yani <b>kuvvet kazancını artırmak</b>) istenmektedir[cite: 9].</p>
<p>Buna göre çıkrık düzeneğinde;</p>
<p>I. Kuvvet kolunun uzunluğunu (R) artırmak[cite: 9],<br>
II. İpin sarıldığı iç silindirin yarıçapını (r) küçültmek[cite: 9],<br>
III. İpin uzunluğunu veya silindirin yatay boyunu (L) artırmak</p>
<p>değişikliklerinden hangileri tek başına yapılabilir[cite: 9]?</p>`,
  c: [
    `Yalnız I`,
    `I ve II`,
    `II ve III`,
    `I, II ve III`
  ],
  a: "B",
  s: `<p>Çıkrıkta denge bağıntısı $F \cdot R = P \cdot r$ ve kuvvet kazancı $\text{KK} = \frac{R}{r}$’dir[cite: 9]. Kuvvet kazancını artırmak (F kuvvetini küçültmek) için <b>çıkrık kolu ($R$) büyütülmeli (I doğru)</b> veya <b>iç silindirin yarıçapı ($r$) küçültülmelidir (II doğru)</b>[cite: 9]. Silindirin yatay genişliği ($L$) veya ipin uzunluğu kuvveti etkilemez (<b>III yanlış</b>). Cevap <b>B</b>.</p>`
},
{
  q: `<p>Fen bilimleri öğretmeni “Basit Makineler” ünitesi sonunda yaptığı “Doğru (D) – Yanlış (Y)” etkinliğinde her doğru cevaba <b>25 puan</b> vermektedir. Bir öğrencinin verdiği cevaplar tabloda gösterilmiştir[cite: 9].</p>
<table class="rt">
<tr><th>Bilimsel İfade</th><th>Öğrencinin Cevabı</th></tr>
<tr><td><b>1.</b> Basit makineler iş yapma kolaylığı sağlar ancak hiçbir zaman işten veya enerjiden kazanç sağlamaz[cite: 9].</td><td><b>D</b></td></tr>
<tr><td><b>2.</b> Sabit makarada kuvvetten 2 kat kazanç sağlanır[cite: 9].</td><td><b>D</b></td></tr>
<tr><td><b>3.</b> Eğik düzlemin eğimi azaldıkça (boyu uzadıkça) yükü çıkarmak için gereken kuvvet azalır[cite: 9].</td><td><b>D</b></td></tr>
<tr><td><b>4.</b> Birbirine dıştan temas eden iki dişli çark aynı yönde döner[cite: 9].</td><td><b>D</b></td></tr>
</table>
<p>Buna göre öğrenci bu etkinlikten toplam <b>kaç puan</b> almıştır[cite: 9]?</p>`,
  c: [`25`, `50`, `75`, `100`],
  a: "B",
  s: `<p>Öğrencinin cevaplarını kontrol edelim[cite: 9]:</p>
<ul>
<li><b>1. İfade (Doğru):</b> Öğrenci D demiş → <b>+25 puan ✓</b>[cite: 9].</li>
<li><b>2. İfade (Yanlış):</b> Sabit makarada kuvvetten kazanç yoktur ($F = P$); öğrenci D dediği için puan alamaz → <b>0 puan ✗</b>[cite: 9].</li>
<li><b>3. İfade (Doğru):</b> Öğrenci D demiş → <b>+25 puan ✓</b>[cite: 9].</li>
<li><b>4. İfade (Yanlış):</b> Dıştan temas eden dişliler <b>zıt yönde</b> döner; öğrenci D dediği için puan alamaz → <b>0 puan ✗</b>[cite: 9].</li>
</ul>
<p>Toplam puan: $25 + 25 = \mathbf{50\text{ puan}}$[cite: 9]. Cevap <b>B</b>.</p>`
},
{
  q: `<p>Aşağıdaki özet tablosunda basit makinelerle ilgili dört temel kural verilmiştir[cite: 9]:</p>
<table class="rt">
<tr><th>Kural No</th><th>Basit Makine Kuralı</th></tr>
<tr><td><b>1</b></td><td>Yükün ortada olduğu kaldıraçlarda (el arabası, ceviz kıracağı), hareketli makarada, eğik düzlemde, çıkrıkta ve vidada kuvvet kolu yük kolundan büyük olduğu için daima kuvvetten kazanç vardır[cite: 9].</td></tr>
<tr><td><b>2</b></td><td>Kuvvetin ortada olduğu kaldıraçlarda (cımbız, maşa, olta, kürek) kuvvet kolu yük kolundan kısa olduğu için daima kuvvetten kayıp, yoldan kazanç vardır[cite: 9].</td></tr>
<tr><td><b>3</b></td><td>Eş merkezli (çakışık) dişli ve kasnakların yarıçapları farklı olsa bile dönme yönleri ve tur sayıları her zaman birbirine eşittir.</td></tr>
<tr><td><b>4</b></td><td>Bir basit makinede hem kuvvetten kazanç hem de aynı anda yoldan kazanç sağlanarak yapılan iş yarıya indirilebilir[cite: 9].</td></tr>
</table>
<p>Tablodaki numaralanmış kurallardan hangisi <b>yanlıştır</b>[cite: 9]?</p>`,
  c: [`1`, `2`, `3`, `4`],
  a: "D",
  s: `<p>1, 2 ve 3 numaralı kurallar tamamen doğrudur[cite: 9]. Ancak <b>4 numaralı kural yanlıştır</b>; çünkü hiçbir basit makinede aynı anda hem kuvvetten hem yoldan kazanç sağlanamaz ve yapılan iş azaltılamaz (kuvvetten kazanç varsa aynı oranda yoldan kayıp vardır)[cite: 9]. Cevap <b>D</b>.</p>`
}
]
});
