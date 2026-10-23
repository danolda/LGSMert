LGS.add({
id: "fen-basinc",
summary: `
<h3>1. Katı Basıncı ve Özellikleri</h3>
<p>Birim yüzeye <b>dik olarak</b> etki eden kuvvete <b>basınç (P)</b> denir[cite: 11]. Kuvvetin birimi <b>Newton (N)</b>, yüzey alanının birimi <b>m²</b> alındığında basıncın birimi <b>N/m² = Pascal (Pa)</b> olur[cite: 11]. Yatay düzlemde duran katı cisimlerin basıncı kendi <b>ağırlıklarından (G)</b> kaynaklanır[cite: 11]:</p>
<div class="key">Katı Basıncı (P) = {{Dik Etki Eden Kuvvet (Ağırlık : G)|Temas Yüzey Alanı (S)}}</div>

<div class="fig"><svg viewBox="0 0 600 165" width="580" role="img" aria-label="Katı basıncının ağırlık ve yüzey alanına bağlılığı ve dik kesme kuralı">
<g font-size="10" text-anchor="middle">
<rect x="6" y="8" width="190" height="148" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
<text x="101" y="26" font-size="11" font-weight="bold" fill="#9a3412">1. Yüzey Alanı İlişkisi (Ters Orantı)</text>
<line x1="20" y1="115" x2="182" y2="115" stroke="#78716c" stroke-width="2.5"/>
<rect x="28" y="93" width="66" height="22" fill="#f97316" stroke="#7c2d12"/>
<rect x="132" y="55" width="22" height="60" fill="#f97316" stroke="#7c2d12"/>
<text x="61" y="88" font-size="9" font-weight="bold">G (3S)</text>
<text x="143" y="49" font-size="9" font-weight="bold">G (S)</text>
<text x="101" y="132" fill="#1e293b">Ağırlık aynı; yüzey küçüldükçe</text>
<text x="101" y="146" font-weight="bold" fill="#dc2626">basınç 3 katına çıkar! (P₂ = 3P₁)</text>

<rect x="205" y="8" width="190" height="148" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
<text x="300" y="26" font-size="11" font-weight="bold" fill="#1e40af">2. Dikey Kesme Kuralı (P Değişmez!)</text>
<line x1="218" y1="115" x2="382" y2="115" stroke="#78716c" stroke-width="2.5"/>
<rect x="235" y="65" width="60" height="50" fill="#60a5fa" stroke="#1e3a8a"/>
<line x1="265" y1="58" x2="265" y2="120" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 2"/>
<rect x="320" y="65" width="30" height="50" fill="#60a5fa" stroke="#1e3a8a"/>
<text x="265" y="53" font-size="9" font-weight="bold">3G / 3S = P</text>
<text x="335" y="53" font-size="9" font-weight="bold">G / S = P</text>
<text x="300" y="132" fill="#1e293b">Düzgün cisim yukarıdan aşağı dik</text>
<text x="300" y="146" font-weight="bold" fill="#1e40af">kesilirse G ve S aynı oranda azalır (P sabit!)</text>

<rect x="404" y="8" width="190" height="148" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
<text x="499" y="26" font-size="11" font-weight="bold" fill="#991b1b">3. Çivi ve Raptiye Tuzağı!</text>
<rect x="445" y="52" width="14" height="44" fill="#94a3b8" stroke="#334155"/>
<polygon points="459,66 530,66 555,74 530,82 459,82" fill="#cbd5e1" stroke="#334155"/>
<text x="452" y="45" font-size="9" font-weight="bold" fill="#1e40af">Baş (S₁)</text>
<text x="550" y="60" font-size="9" font-weight="bold" fill="#dc2626">Uç (S₂)</text>
<text x="499" y="112" font-weight="bold" fill="#166534">• Kuvvet aynen iletilir: F₁ = F₂</text>
<text x="499" y="128" font-weight="bold" fill="#dc2626">• Sivri uçta basınç büyür: P₂ &gt; P₁</text>
<text x="499" y="145" font-size="9" fill="#475569">(Katılar kuvveti aynen iletir, basıncı değil!)</text>
</g>
</svg></div>

<ul>
<li><b>Katı Basıncına Etki Eden Faktörler:</b>
  <br>1. <b>Cismin Ağırlığı (Kuvvet - G):</b> Yüzey alanı sabitken ağırlık arttıkça katı basıncı <b>doğru orantılı</b> olarak artar[cite: 11].
  <br>2. <b>Temas Yüzey Alanı (S):</b> Ağırlık sabitken zemine temas eden yüzey alanı küçüldükçe katı basıncı <b>ters orantılı</b> olarak artar[cite: 11]. (<i>Dikkat: Bir tuğla yatay durumdan dikey duruma getirildiğinde zemine uyguladığı <b>toplam dik kuvvet [ağırlık] değişmez</b>, yalnızca yüzey küçüldüğü için <b>basınç artar!</b></i>)[cite: 11]</li>
<li><b>Günlük Hayatta Katı Basıncı:</b>
  <br>• <b>Basıncı Artıran Durumlar (Yüzey Küçülür):</b> Bıçağın bilenmesi, çivi/iğne/raptiye uçlarının sivri olması, kramponların altındaki dişler, kışın araç lastiklerine zincir takılması, tavuk/ördek kıyaslamasında tavuğun ayaklarının ince olması, kesici dişler[cite: 11].
  <br>• <b>Basıncı Azaltan Durumlar (Yüzey Büyür):</b> Kar ayakkabısı (hedik), iş makinelerinin ve tankların paletli olması, ağır tonajlı kamyonların ve trenlerin çok tekerlekli olması, fil/deve/ördek/kaz ayaklarının geniş ve perdeli olması, traktörlerin arka tekerleklerinin geniş yapılması, sırt çantalarının askılarının geniş olması[cite: 11].</li>
</ul>

<div class="note"><b>LGS Tuzağı 1 (Katıların Kuvveti İletmesi vs. Dikey Kesme):</b>
<br>• <b>Çivi / Raptiye kuralı:</b> Katılar kendilerine uygulanan <b>KUVVETİ</b> aynı doğrultuda ve <b>eşit büyüklükte (F₁ = F₂)</b> iletir[cite: 11]. Ancak çivinin sivri ucundaki yüzey alanı (S₂) çok küçük olduğu için uçtaki <b>basınç (P₂) çok daha büyüktür (P₂ &gt; P₁)</b>!
<br>• <b>Düzgün Katıları Dikey Kesme (Pasta/Silindir/Küp):</b> Tabana göre düzgün yükselen homojen bir katı cisim (küp, dikdörtgenler prizması, dik silindir) yukarıdan aşağıya <b>dikey olarak</b> eşit veya farklı parçalara bölündüğünde; her parçanın ağırlığı (G) ile taban alanı (S) <b>aynı oranda</b> küçüldüğü için <b>parçaların zemine uyguladığı basınç başlangıçtaki basınçla EŞİTTİR (P₁ = P₂ = P₃)</b>!</div>

<h3>2. Sıvı Basıncı ve Pascal Prensibi</h3>
<p>Sıvılar ağırlıklarından ve akışkan olmalarından dolayı temas ettikleri kabın hem tabanına hem de yan yüzeylerine basınç uygular[cite: 11]. Bir noktadaki sıvı basıncı; o noktanın sıvının <b>açık yüzeyine olan derinliğine (h)</b>, <b>sıvının yoğunluğuna (d)</b> ve yer çekimi ivmesine bağlıdır[cite: 11]:</p>
<div class="key">Sıvı Basıncı (P) = Derinlik (h) × Sıvının Yoğunluğu (d)</div>

<div class="fig"><svg viewBox="0 0 600 175" width="580" role="img" aria-label="Sıvı basıncının derinlik, yoğunluk ve kap şekline bağlılığı ve zaman grafikleri">
<g font-size="9.5" text-anchor="middle">
<rect x="6" y="8" width="188" height="158" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
<text x="100" y="25" font-size="10.5" font-weight="bold" fill="#1e40af">1. Kabın Şekline Bağlı Değildir!</text>
<g stroke="#1e3a8a" stroke-width="1.5" fill="#93c5fd">
<polygon points="18,110 62,110 52,55 28,55"/>
<rect x="78" y="55" width="44" height="55"/>
<polygon points="138,110 180,110 188,55 130,55"/>
</g>
<line x1="12" y1="55" x2="188" y2="55" stroke="#dc2626" stroke-dasharray="3 2"/>
<text x="100" y="48" fill="#dc2626" font-weight="bold">Aynı sıvı (d), aynı derinlik (h)</text>
<text x="100" y="128" font-weight="bold" fill="#1e40af">Taban sıvı basınçları EŞİTTİR:</text>
<text x="100" y="143" font-weight="bold" fill="#dc2626">P₁ = P₂ = P₃</text>
<text x="100" y="158" font-size="8.5" fill="#475569">(Sıvı miktarına/hacmine bağlı değildir!)</text>

<rect x="204" y="8" width="192" height="158" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="300" y="25" font-size="10.5" font-weight="bold" fill="#166534">2. Sabit Debili Musluk Grafikleri</text>
<line x1="225" y1="115" x2="375" y2="115" stroke="#334155" stroke-width="1.5"/>
<line x1="225" y1="40" x2="225" y2="115" stroke="#334155" stroke-width="1.5"/>
<path d="M225,115 Q255,105 285,42" fill="none" stroke="#dc2626" stroke-width="2.5"/>
<line x1="225" y1="115" x2="330" y2="45" stroke="#2563eb" stroke-width="2.5"/>
<path d="M225,115 Q280,65 365,55" fill="none" stroke="#16a34a" stroke-width="2.5"/>
<text x="275" y="38" fill="#dc2626" font-weight="bold" font-size="8.5">Daralan</text>
<text x="335" y="42" fill="#2563eb" font-weight="bold" font-size="8.5">Düzgün</text>
<text x="362" y="50" fill="#16a34a" font-weight="bold" font-size="8.5">Genişleyen</text>
<text x="300" y="130" font-size="9" fill="#1e293b">• Daralan kapta h giderek hızlı artar.</text>
<text x="300" y="144" font-size="9" fill="#1e293b">• Genişleyen kapta h yavaşlayarak artar.</text>
<text x="300" y="158" font-size="9" font-weight="bold" fill="#166534">• Düzgün kapta h sabit hızla artar.</text>

<rect x="406" y="8" width="188" height="158" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<text x="500" y="25" font-size="10.5" font-weight="bold" fill="#92400e">3. Pascal Prensibi (Hidrolik)</text>
<path d="M425,55 L425,105 L570,105 L570,65 L520,65 L520,90 L455,90 L455,55 Z" fill="#93c5fd" stroke="#1e3a8a" stroke-width="1.5"/>
<rect x="425" y="50" width="30" height="8" fill="#475569"/>
<rect x="520" y="58" width="50" height="8" fill="#475569"/>
<text x="440" y="44" font-size="8.5" font-weight="bold">F₁ / S₁</text>
<text x="545" y="52" font-size="8.5" font-weight="bold">G / S₂</text>
<text x="500" y="122" font-weight="bold" fill="#991b1b">• Sıvılar BASINCI aynen iletir (P₁ = P₂)!</text>
<text x="500" y="138" font-weight="bold" fill="#166534">• Küçük kuvvetle büyük yük kaldırılır.</text>
<text x="500" y="154" font-size="8.5" fill="#1e293b">(Hidrolik fren, kriko, berber koltuğu)</text>
</g>
</svg></div>

<div class="note"><b>LGS Tuzağı 2 (Kap Ters Çevrildiğinde: Katı Basıncı vs. Sıvı Basıncı):</b>
<br>Yarısına kadar su dolu, yukarı doğru <b>genişleyen</b> kapalı bir kap ters çevrilip dar ağzı üstüne konulursa:
<br>1. <b>Kabın Zemine Uyguladığı Katı Basıncı:</b> Kabın toplam ağırlığı (G<sub>kap</sub> + G<sub>su</sub>) <b>değişmez</b>; ancak zemine değen yüzey alanı daraldığı için <b>Katı Basıncı ARTAR!</b>
<br>2. <b>Kap Tabanındaki Sıvı Basıncı:</b> Su dar kısma dolacağı için suyun yüksekliği (<b>h</b>) artar; dolayısıyla <b>Sıvı Basıncı da ARTAR!</b></div>

<ul>
<li><b>Bileşik Kaplar:</b> Şekilleri ve kalınlıkları farklı olan boruların tabanlarından birleştirilmesiyle oluşan bileşik kaplara tek cins sıvı konulduğunda, kolların hepsinde <b>sıvı yüksekliği (h) ve taban sıvı basıncı birbirine eşit</b> olur.</li>
<li><b>Pascal Prensibi Uygulamaları:</b> Kapalı bir kaptaki sıvıya uygulanan basınç, sıvı tarafından kabın iç yüzeyinin her noktasına <b>eşit büyüklükte ve dik olarak</b> iletilir[cite: 11]. <i>Hidrolik fren sistemleri, hidrolik krikolar (su cendereleri), itfaiye merdivenleri, berber koltukları, damperli kamyonlar, iş makinelerinin kepçeleri ve ilaç pompaları</i> Pascal prensibiyle çalışır[cite: 11].</li>
</ul>

<h3>3. Gaz Basıncı, Açık Hava Basıncı ve Torricelli Deneyi</h3>
<table class="rt">
<tr><th>Kavram / Deney</th><th>Bilimsel Açıklaması ve LGS İpuçları</th></tr>
<tr><td><b>1. Torricelli Deneyi (Açık Hava Basıncı)</b></td><td>İtalyan bilim insanı <b>Torricelli</b>, <b>deniz seviyesinde (0 m) ve 0 °C sıcaklıkta</b> 1 metrelik cam boruyu tamamen <b>cıva</b> (d = 13,6 g/cm³) ile doldurup cıva çanağına ters çevirmiş ve borudaki cıva seviyesinin <b>76 cm (760 mm)</b> yüksekliğinde dengede kaldığını bulmuştur[cite: 11]. Açık hava basıncı <b>barometre</b> ile ölçülür[cite: 11].</td></tr>
<tr><td><b>2. Cıva Yüksekliğini (h = 76 cm) Etkileyenler ve Etkilemeyenler</b></td><td>• <b>ETKİLEYENLER:</b><br>1) <b>Deniz seviyesinden yükseklik:</b> Yukarılara çıkıldıkça üzerindeki hava tabakası azaldığı için açık hava basıncı ve cıva yüksekliği (h) <b>AZALIR!</b>[cite: 11]<br>2) <b>Kullanılan sıvının yoğunluğu (d):</b> Cıva yerine yoğunluğu daha küçük bir sıvı (örneğin <b>su</b>, d = 1 g/cm³) kullanılırsa sıvı yüksekliği <b>ARTAR</b> (Su kullanılsaydı yaklaşık <b>10,5 metre</b> uzunluğunda boru gerekirdi!).<br>3) <b>Havanın sıcaklığı ve nemi.</b><br>• <b>ETKİLEMEYENLER (Çok Sorulur!):</b> Cam borunun <b>kalınlığı (kesit alanı)</b>, <b>uzunluğu</b>, <b>şekli</b>, borunun çanağa <b>eğik daldırılması</b> veya çanaktaki cıva miktarı cıva yüksekliğini (h = 76 cm) <b>KESİNLİKLE DEĞİŞTİRMEZ!</b>[cite: 11]</td></tr>
<tr><td><b>3. Esnek Balon vs. Kapalı Çelik Kap</b></td><td>• <b>Esnek çocuk balonu (veya plastik şişe):</b> Dış basınç ile iç basınç her zaman birbirini dengeler (<b>P<sub>iç</sub> = P<sub>dış</sub></b>). Balon yukarı çıktıkça dış açık hava basıncı azalır; balonun iç basıncı da dış basınca eşitlenmek için azalır ve <b>balonun hacmi BÜYÜR (şişer)</b>, bir süre sonra patlar.<br>• <b>Kapalı çelik kap (esnek olmayan):</b> Dış basınçtan etkilenmez; içindeki gaz basıncı yalnızca kaba <b>gaz eklenirse</b> veya <b>sıcaklık artırılırsa</b> artar[cite: 11].</td></tr>
<tr><td><b>4. Açık Hava Basıncını Kanıtlayan Günlük Olaylar</b></td><td>• <b>Magdeburg Küreleri:</b> İçindeki hava boşaltılan iki yarım kürenin dıştan etki eden açık hava basıncı yüzünden atlarla bile ayrılamaması.<br>• <b>Haşlanmış Yumurta / Çöken Teneke Kutu:</b> İçinde kağıt yakılan cam şişenin veya ısıtılıp ağzı kapatılan teneke kutunun soğuduğunda iç basıncının düşmesi ve dış açık hava basıncının yumurtayı şişeye itmesi / tenekeyi büzüştürmesi.<br>• <b>Diğer Örnekler:</b> Pipetle meyve suyu içilmesi, vantuzların cama yapışması, çay tabağının bardağa yapışması, ağzına kağıt kapatılıp ters çevrilen su dolu bardaktan suyun dökülmemesi, elektrik süpürgesi, şırıngaya sıvı çekilmesi[cite: 11].</td></tr>
</table>
`,
qs: [
{
  q: `<p>Boyutları <b>5 cm × 10 cm × 20 cm</b> olan <b>40 N</b> ağırlığındaki homojen bir tuğla, yatay zemine şekildeki <b>K, L ve M</b> konumlarında ayrı ayrı konuluyor[cite: 11].</p>
<div class="fig"><svg viewBox="0 0 440 185" width="420" role="img" aria-label="Tuğlanın K, L ve M duruşlarında katı basıncı karşılaştırması">
<line x1="10" y1="145" x2="430" y2="145" stroke="#78716c" stroke-width="3"/>
<g stroke="#7c2d12" stroke-width="1.5">
<rect x="25" y="45" width="50" height="100" fill="#f97316"/><polygon points="25,45 37,33 87,33 75,45" fill="#fdba74"/><polygon points="75,45 87,33 87,133 75,145" fill="#c2410c"/>
<rect x="130" y="120" width="100" height="25" fill="#f97316"/><polygon points="130,120 154,96 254,96 230,120" fill="#fdba74"/><polygon points="230,120 254,96 254,121 230,145" fill="#c2410c"/>
<rect x="290" y="95" width="100" height="50" fill="#f97316"/><polygon points="290,95 302,83 402,83 390,95" fill="#fdba74"/><polygon points="390,95 402,83 402,133 390,145" fill="#c2410c"/>
</g>
<g font-size="9.5" font-weight="bold" fill="#1e293b">
<text x="35" y="160">10 cm</text><text x="4" y="100">20</text><text x="85" y="45">5</text>
<text x="165" y="160">20 cm</text><text x="114" y="137">5</text><text x="248" y="112">10</text>
<text x="325" y="160">20 cm</text><text x="272" y="125">10</text><text x="402" y="95">5</text>
</g>
<g font-size="13" font-weight="bold" text-anchor="middle" fill="#1e40af"><text x="55" y="178">K</text><text x="185" y="178">L</text><text x="345" y="178">M</text></g>
</svg></div>
<p>Tuğlanın K, L ve M durumlarında yatay zemine uyguladığı <b>dik kuvvetler (F<sub>K</sub>, F<sub>L</sub>, F<sub>M</sub>)</b> ile <b>katı basınçları (P<sub>K</sub>, P<sub>L</sub>, P<sub>M</sub>)</b> arasındaki ilişki aşağıdakilerin hangisinde doğru verilmiştir[cite: 11]?</p>`,
  c: [
    `Kuvvetler: F<sub>K</sub> = F<sub>L</sub> = F<sub>M</sub> — Basınçlar: P<sub>K</sub> &gt; P<sub>M</sub> &gt; P<sub>L</sub>`,
    `Kuvvetler: F<sub>K</sub> &gt; F<sub>M</sub> &gt; F<sub>L</sub> — Basınçlar: P<sub>K</sub> &gt; P<sub>M</sub> &gt; P<sub>L</sub>`,
    `Kuvvetler: F<sub>K</sub> = F<sub>L</sub> = F<sub>M</sub> — Basınçlar: P<sub>L</sub> &gt; P<sub>M</sub> &gt; P<sub>K</sub>`,
    `Kuvvetler: F<sub>L</sub> &gt; F<sub>M</sub> &gt; F<sub>K</sub> — Basınçlar: P<sub>K</sub> = P<sub>L</sub> = P<sub>M</sub>`
  ],
  a: "A",
  s: `<p>Aynı tuğla hangi yüzeyi üzerine konulursa konulsun ağırlığı (zemine uyguladığı dik kuvvet) değişmez: <b>F<sub>K</sub> = F<sub>L</sub> = F<sub>M</sub> = 40 N</b>[cite: 11].</p>
<p>Basınç ise zemine temas eden yüzey alanıyla ters orantılıdır[cite: 11]:</p>
<ul>
<li><b>K:</b> S<sub>K</sub> = 10 × 5 = 50 cm² → P<sub>K</sub> = 40 / 50 = <b>0,8 Pa</b>[cite: 11]</li>
<li><b>L:</b> S<sub>L</sub> = 20 × 10 = 200 cm² → P<sub>L</sub> = 40 / 200 = <b>0,2 Pa</b>[cite: 11]</li>
<li><b>M:</b> S<sub>M</sub> = 20 × 5 = 100 cm² → P<sub>M</sub> = 40 / 100 = <b>0,4 Pa</b>[cite: 11]</li>
</ul>
<p>Buna göre basınç sıralaması: <b>P<sub>K</sub> &gt; P<sub>M</sub> &gt; P<sub>L</sub></b> olur[cite: 11]. Cevap <b>A</b>.</p>`
},
{
  q: `<p>Tabana göre düzgün yükselen homojen bir silindir (veya dikdörtgenler prizması), aşağıdaki şekillerde gösterildiği gibi üç farklı biçimde kesilerek taralı parçalar atılıyor ve kalan <b>I, II ve III</b> numaralı parçaların zemine uyguladığı basınçlar başlangıçtaki basınçla (<b>P<sub>0</sub></b>) karşılaştırılıyor.</p>
<div class="fig"><svg viewBox="0 0 540 155" width="520" role="img" aria-label="Katı cismin dikey, yatay ve çapraz kesilmesi durumunda basınç değişimi">
<line x1="10" y1="125" x2="530" y2="125" stroke="#475569" stroke-width="2.5"/>
<g font-size="9.5" text-anchor="middle">
<rect x="30" y="45" width="55" height="80" fill="#60a5fa" stroke="#1e3a8a" stroke-width="1.5"/>
<rect x="85" y="45" width="35" height="80" fill="#e2e8f0" stroke="#64748b" stroke-dasharray="4 2"/>
<line x1="85" y1="35" x2="85" y2="132" stroke="#dc2626" stroke-width="2"/>
<text x="57" y="88" font-weight="bold" fill="#1e3a8a">I (Kalan)</text>
<text x="102" y="88" fill="#64748b">Atıldı</text>
<text x="75" y="25" font-weight="bold" fill="#1e40af">1. Dikey Kesim</text>
<text x="75" y="144" font-weight="bold" fill="#1e40af">(G ve S aynı oranda azaldı)</text>

<rect x="215" y="85" width="90" height="40" fill="#34d399" stroke="#065f46" stroke-width="1.5"/>
<rect x="215" y="45" width="90" height="40" fill="#e2e8f0" stroke="#64748b" stroke-dasharray="4 2"/>
<line x1="205" y1="85" x2="315" y2="85" stroke="#dc2626" stroke-width="2"/>
<text x="260" y="108" font-weight="bold" fill="#065f46">II (Kalan)</text>
<text x="260" y="68" fill="#64748b">Atıldı</text>
<text x="260" y="25" font-weight="bold" fill="#166534">2. Yatay Kesim</text>
<text x="260" y="144" font-weight="bold" fill="#166534">(S sabit kaldı, G azaldı)</text>

<polygon points="400,125 490,125 400,45" fill="#fbbf24" stroke="#92400e" stroke-width="1.5"/>
<polygon points="400,45 490,45 490,125" fill="#e2e8f0" stroke="#64748b" stroke-dasharray="4 2"/>
<line x1="395" y1="40" x2="495" y2="130" stroke="#dc2626" stroke-width="2"/>
<text x="430" y="108" font-weight="bold" fill="#92400e">III (Kalan)</text>
<text x="465" y="72" fill="#64748b">Atıldı</text>
<text x="445" y="25" font-weight="bold" fill="#b45309">3. Köşegen Kesim</text>
<text x="445" y="144" font-weight="bold" fill="#b45309">(S sabit kaldı, G yarıya indi)</text>
</g>
</svg></div>
<p>Buna göre 1, 2 ve 3. işlemler sonucunda zeminde kalan <b>I, II ve III</b> numaralı parçaların zemine uyguladığı katı basınçlarının ilk duruma (P<sub>0</sub>) göre değişimi aşağıdakilerin hangisinde doğru verilmiştir?</p>`,
  c: [
    `I: Değişmez — II: Azalır — III: Azalır (Yarıya iner)`,
    `I: Azalır — II: Değişmez — III: Artar`,
    `I: Değişmez — II: Artar — III: Değişmez`,
    `I: Azalır — II: Azalır — III: Azalır`
  ],
  a: "A",
  s: `<p>Üç kesim işlemini ayrı ayrı inceleyelim:</p>
<ul>
<li><b>1. Dikey Kesim (I):</b> Cisim yukarıdan aşağıya dikey kesildiğinde kalan parçanın ağırlığı (G) ve taban alanı (S) <b>aynı oranda</b> azaldığı için basınç <b>değişmez (P<sub>I</sub> = P<sub>0</sub>)</b>.</li>
<li><b>2. Yatay Kesim (II):</b> Üst parça atıldığında taban alanı (S) değişmez ancak ağırlık (G) yarıya indiği için basınç <b>azalır</b>.</li>
<li><b>3. Köşegen Kesim (III):</b> Üstteki üçgen parça atıldığında taban alanı (S) yine aynı kalmış ancak ağırlık (G) yarıya inmiştir; dolayısıyla basınç <b>azalır (yarıya iner)</b>. Cevap <b>A</b>.</li>
</ul>`
},
{
  q: `<p>Marangoz Ahmet Usta, tahta bloğa bir çiviyi çekiçle vurarak çakmaktadır. Çivinin geniş olan baş kısmının yüzey alanı <b>2S</b>, sivri olan uç kısmının yüzey alanı ise <b>S / 10</b>’dur.</p>
<div class="fig"><svg viewBox="0 0 480 120" width="460" role="img" aria-label="Çivinin kuvveti ve basıncı iletmesi şeması">
<rect x="20" y="15" width="440" height="90" rx="8" fill="#f8fafc" stroke="#64748b"/>
<rect x="115" y="30" width="16" height="60" fill="#64748b" stroke="#1e293b" stroke-width="1.5"/>
<polygon points="131,48 260,48 300,60 260,72 131,72" fill="#94a3b8" stroke="#1e293b" stroke-width="1.5"/>
<rect x="300" y="22" width="130" height="76" fill="#fde68a" stroke="#b45309" stroke-width="1.5"/>
<line x1="40" y1="60" x2="110" y2="60" stroke="#dc2626" stroke-width="3"/>
<polygon points="103,54 114,60 103,66" fill="#dc2626"/>
<g font-size="10" font-weight="bold">
<text x="72" y="50" fill="#dc2626" text-anchor="middle">F₁ Kuvveti</text>
<text x="123" y="25" fill="#1e40af" text-anchor="middle">Baş (K): 2S</text>
<text x="285" y="42" fill="#991b1b" text-anchor="middle">Uç (L): S/10</text>
<text x="365" y="64" fill="#92400e" text-anchor="middle">Tahta Blok</text>
</g>
</svg></div>
<p>Ahmet Usta çivinin <b>K (baş)</b> kısmına dik olarak <b>F<sub>1</sub> kuvveti</b> ve <b>P<sub>K</sub> basıncı</b> uyguladığına göre, çivinin <b>L (sivri uç)</b> kısmında tahtaya iletilen <b>F<sub>2</sub> kuvveti</b> ve oluşan <b>P<sub>L</sub> basıncı</b> için aşağıdakilerden hangisi <b>doğrudur</b>[cite: 11]?</p>`,
  c: [
    `Kuvvet aynen iletilir (F<sub>1</sub> = F<sub>2</sub>); ancak yüzey alanı küçüldüğü için uçtaki basınç çok daha büyüktür (P<sub>L</sub> &gt; P<sub>K</sub>).`,
    `Basınç aynen iletilir (P<sub>K</sub> = P<sub>L</sub>); ancak uçtaki kuvvet büyür (F<sub>2</sub> &gt; F<sub>1</sub>).`,
    `Hem kuvvet hem de basınç aynen iletilir (F<sub>1</sub> = F<sub>2</sub> ve P<sub>K</sub> = P<sub>L</sub>).`,
    `Uç kısımda yüzey alanı küçüldüğü için hem kuvvet hem basınç azalır.`
  ],
  a: "A",
  s: `<p><b>Katılar</b>, kendilerine uygulanan <b>kuvveti</b> aynı doğrultuda ve <b>hiç değiştirmeden (aynen: F<sub>1</sub> = F<sub>2</sub>)</b> iletir[cite: 11]. Ancak basınç yüzey alanıyla ters orantılı olduğu için, çivinin sivri ucunda (L) yüzey alanı 20 kat küçüldüğünden basınç 20 kat büyür (<b>P<sub>L</sub> &gt; P<sub>K</sub></b>)[cite: 11]. Cevap <b>A</b>.</p>`
},
{
  q: `<p>Yarısına kadar su ile dolu olan, ağzı sıkıca kapalı kesik koni biçimindeki kap, <b>Şekil-1</b>’deki konumdan ters çevrilerek <b>Şekil-2</b>’deki gibi dar yüzeyi üzerine konuluyor.</p>
<div class="fig"><svg viewBox="0 0 460 155" width="440" role="img" aria-label="Kesik koni kabın ters çevrilmesi katı ve sıvı basıncı">
<line x1="15" y1="130" x2="445" y2="130" stroke="#475569" stroke-width="3"/>
<g stroke="#1e3a8a" stroke-width="2">
<polygon points="50,130 150,130 125,35 75,35" fill="#f8fafc"/>
<polygon points="50,130 150,130 138,85 62,85" fill="#60a5fa"/>
<polygon points="295,130 345,130 370,35 270,35" fill="#f8fafc"/>
<polygon points="295,130 345,130 360,65 280,65" fill="#60a5fa"/>
</g>
<path d="M180,80 Q215,50 250,80" fill="none" stroke="#dc2626" stroke-width="2.5"/>
<polygon points="246,72 254,82 242,84" fill="#dc2626"/>
<g font-size="10" font-weight="bold" text-anchor="middle">
<text x="100" y="25" fill="#1e40af">Şekil-1 (Geniş Taban: 2S)</text>
<text x="100" y="112" fill="#1e3a8a">h₁</text>
<text x="100" y="146" fill="#1e293b">Taban Alanı = 2S</text>
<text x="215" y="55" fill="#dc2626">Ters Çevriliyor</text>
<text x="320" y="25" fill="#991b1b">Şekil-2 (Dar Taban: S)</text>
<text x="320" y="102" fill="#1e3a8a">h₂ (h₂ &gt; h₁)</text>
<text x="320" y="146" fill="#1e293b">Taban Alanı = S</text>
</g>
</svg></div>
<p>Kap Şekil-1’den Şekil-2’deki konuma getirildiğinde; <b>kabın zemine uyguladığı katı basıncı (P<sub>katı</sub>)</b> ve <b>kap tabanına etki eden sıvı basıncı (P<sub>sıvı</sub>)</b> nasıl değişir[cite: 11]?</p>`,
  c: [
    `P<sub>katı</sub>: Artar — P<sub>sıvı</sub>: Artar`,
    `P<sub>katı</sub>: Değişmez — P<sub>sıvı</sub>: Artar`,
    `P<sub>katı</sub>: Artar — P<sub>sıvı</sub>: Değişmez`,
    `P<sub>katı</sub>: Azalır — P<sub>sıvı</sub>: Artar`
  ],
  a: "A",
  s: `<p>LGS’de en çok sorulan iki basıncı ayrı ayrı inceleyelim[cite: 11]:</p>
<ul>
<li><b>Katı Basıncı (P<sub>katı</sub>):</b> Kabın ve içindeki suyun toplam ağırlığı değişmemiştir; ancak zemine temas eden yüzey alanı <b>2S’den S’ye küçüldüğü</b> için kabın zemine uyguladığı <b>katı basıncı ARTAR</b>[cite: 11].</li>
<li><b>Sıvı Basıncı (P<sub>sıvı</sub>):</b> Şekil-2’de alt kısım daha dar olduğu için aynı miktar su daha yüksek seviyeye (<b>h<sub>2</sub> &gt; h<sub>1</sub></b>) çıkar; derinlik arttığı için kap tabanındaki <b>sıvı basıncı da ARTAR</b>[cite: 11]. Cevap <b>A</b>.</li>
</ul>`
},
{
  q: `<p>Boş olan <b>K, L ve M</b> kapları, birim zamanda eşit miktarda su akıtan (sabit debili) özdeş musluklarla doldurulmaya başlanıyor.</p>
<div class="fig"><svg viewBox="0 0 540 160" width="520" role="img" aria-label="Düzgün, daralan ve genişleyen kaplarda sıvı basıncı zaman grafikleri">
<g stroke="#1e3a8a" stroke-width="2" fill="#dbeafe">
<rect x="25" y="45" width="60" height="80"/>
<polygon points="120,125 185,125 168,45 137,45"/>
<polygon points="225,125 270,125 290,45 205,45"/>
</g>
<g font-size="10.5" font-weight="bold" text-anchor="middle" fill="#1e293b">
<text x="55" y="35" fill="#2563eb">K Kabı (Silindir)</text>
<text x="152" y="35" fill="#dc2626">L Kabı (Daralan)</text>
<text x="247" y="35" fill="#16a34a">M Kabı (Genişleyen)</text>
</g>
<rect x="315" y="15" width="215" height="130" rx="8" fill="#f8fafc" stroke="#64748b"/>
<line x1="345" y1="125" x2="510" y2="125" stroke="#334155" stroke-width="1.5"/>
<line x1="345" y1="30" x2="345" y2="125" stroke="#334155" stroke-width="1.5"/>
<path d="M345,125 Q380,115 415,35" fill="none" stroke="#dc2626" stroke-width="2.5"/>
<line x1="345" y1="125" x2="465" y2="40" stroke="#2563eb" stroke-width="2.5"/>
<path d="M345,125 Q405,65 505,55" fill="none" stroke="#16a34a" stroke-width="2.5"/>
<g font-size="10" font-weight="bold">
<text x="415" y="30" fill="#dc2626">1</text>
<text x="470" y="38" fill="#2563eb">2</text>
<text x="510" y="53" fill="#16a34a">3</text>
<text x="435" y="140" font-size="9.5">Zaman (t)</text>
<text x="330" y="80" font-size="9.5" transform="rotate(-90 330 80)" text-anchor="middle">Sıvı Basıncı (P)</text>
</g>
</svg></div>
<p>Kapların tabanlarındaki sıvı basıncının zamana bağlı değişimini gösteren grafikteki <b>1, 2 ve 3</b> numaralı eğrilerin <b>K, L ve M</b> kaplarıyla doğru eşleştirilmesi aşağıdakilerin hangisinde verilmiştir?</p>`,
  c: [
    `1: L Kabı — 2: K Kabı — 3: M Kabı`,
    `1: K Kabı — 2: L Kabı — 3: M Kabı`,
    `1: M Kabı — 2: K Kabı — 3: L Kabı`,
    `1: L Kabı — 2: M Kabı — 3: K Kabı`
  ],
  a: "A",
  s: `<p>Kapların şekline göre sıvı yüksekliğinin (h) artış hızını inceleyelim:</p>
<ul>
<li><b>L Kabı (Yukarı doğru daralan):</b> Kap daraldıkça su seviyesi her saniye daha hızlı yükselir → <b>1 numaralı hızlanan eğri</b>.</li>
<li><b>K Kabı (Düzgün silindir):</b> Su seviyesi sabit hızla (doğrusal) yükselir → <b>2 numaralı doğru</b>.</li>
<li><b>M Kabı (Yukarı doğru genişleyen):</b> Kap genişledikçe su seviyesi giderek daha yavaş yükselir → <b>3 numaralı yavaşlayan eğri</b>. Cevap <b>A</b>.</li>
</ul>`
},
{
  q: `<p>Özdeş K, L ve M kaplarına aşağıdaki tabloda yoğunlukları ve yükseklikleri verilen sıvılar konuluyor[cite: 11].</p>
<table class="rt">
<tr><th>Kap</th><th>Konulan Sıvı</th><th>Sıvının Yoğunluğu (g/cm³)</th><th>Sıvı Yüksekliği / Derinlik (cm)</th></tr>
<tr><td><b>K Kabı</b></td><td>Saf Su</td><td>1,0</td><td>20</td></tr>
<tr><td><b>L Kabı</b></td><td>Tuzlu Su</td><td>1,2</td><td>15</td></tr>
<tr><td><b>M Kabı</b></td><td>Zeytinyağı</td><td>0,8</td><td>25</td></tr>
</table>
<p>Buna göre K, L ve M kaplarının tabanlarına etki eden sıvı basınçları (<b>P<sub>K</sub>, P<sub>L</sub>, P<sub>M</sub></b>) arasındaki büyüklük ilişkisi aşağıdakilerden hangisidir[cite: 11]?</p>`,
  c: [
    `P<sub>K</sub> = P<sub>M</sub> &gt; P<sub>L</sub>`,
    `P<sub>L</sub> &gt; P<sub>K</sub> &gt; P<sub>M</sub>`,
    `P<sub>M</sub> &gt; P<sub>K</sub> &gt; P<sub>L</sub>`,
    `P<sub>K</sub> = P<sub>L</sub> = P<sub>M</sub>`
  ],
  a: "A",
  s: `<p>Sıvı basıncı, derinlik (h) ile sıvının yoğunluğunun (d) çarpımıyla doğru orantılıdır (<b>P = h · d</b>)[cite: 11]:</p>
<ul>
<li><b>P<sub>K</sub>:</b> 20 × 1,0 = <b>20 birim</b>[cite: 11]</li>
<li><b>P<sub>L</sub>:</b> 15 × 1,2 = <b>18 birim</b>[cite: 11]</li>
<li><b>P<sub>M</sub>:</b> 25 × 0,8 = <b>20 birim</b>[cite: 11]</li>
</ul>
<p>Sonuç: <b>P<sub>K</sub> = P<sub>M</sub> &gt; P<sub>L</sub></b> olur[cite: 11]. Cevap <b>A</b>.</p>`
},
{
  q: `<p>Birbirine karışmayan <b>X, Y ve Z</b> sıvılarının derinliğe bağlı sıvı basıncı değişimleri ölçülerek aşağıdaki grafik çizilmiştir[cite: 11].</p>
<div class="fig"><svg viewBox="0 0 320 185" width="300" role="img" aria-label="X, Y ve Z sıvılarının sıvı basıncı derinlik grafiği">
<line x1="45" y1="155" x2="295" y2="155" stroke="#334155" stroke-width="2"/>
<line x1="45" y1="15" x2="45" y2="155" stroke="#334155" stroke-width="2"/>
<g stroke-width="2.5">
<line x1="45" y1="155" x2="195" y2="20" stroke="#dc2626"/>
<line x1="45" y1="155" x2="265" y2="55" stroke="#2563eb"/>
<line x1="45" y1="155" x2="280" y2="110" stroke="#16a34a"/>
</g>
<line x1="150" y1="15" x2="150" y2="155" stroke="#64748b" stroke-dasharray="4 3"/>
<g font-size="12" font-weight="bold">
<text x="200" y="24" fill="#dc2626">X Sıvısı</text>
<text x="268" y="54" fill="#2563eb">Y Sıvısı</text>
<text x="282" y="108" fill="#16a34a">Z Sıvısı</text>
</g>
<g font-size="10.5" font-weight="bold" fill="#1e293b">
<text x="150" y="172" text-anchor="middle">Sabit Derinlik (h)</text>
<text x="255" y="172">Derinlik</text>
<text x="18" y="85" transform="rotate(-90 18 85)" text-anchor="middle">Sıvı Basıncı (P)</text>
</g>
</svg></div>
<p>Bu üç sıvı aynı kaba dökülüp yeterince beklendiğinde, sıvıların kap içerisindeki konumları <b>en alttan en üste doğru</b> nasıl sıralanır[cite: 11]?</p>`,
  c: [
    `En altta X — Ortada Y — En üstte Z`,
    `En altta Z — Ortada Y — En üstte X`,
    `En altta Y — Ortada X — En üstte Z`,
    `En altta X — Ortada Z — En üstte Y`
  ],
  a: "A",
  s: `<p>Grafikte sabit bir derinlik (kesikli çizgi) seçtiğimizde sıvı basıncı sıralaması <b>P<sub>X</sub> &gt; P<sub>Y</sub> &gt; P<sub>Z</sub></b> şeklindedir[cite: 11]. Derinlik aynı iken basıncı en büyük olan sıvının <b>yoğunluğu da en büyüktür (d<sub>X</sub> &gt; d<sub>Y</sub> &gt; d<sub>Z</sub>)</b>[cite: 11]. Birbirine karışmayan sıvılardan yoğunluğu en büyük olan en alta çökeceği için <b>en altta X, ortada Y, en üstte Z</b> bulunur[cite: 11]. Cevap <b>A</b>.</p>`
},
{
  q: `<p>İtalyan bilim insanı Torricelli, deniz seviyesinde ve 0 °C sıcaklıkta 1 m uzunluğundaki cam boruyu cıva ile doldurup cıva dolu çanağa ters çevirdiğinde borudaki cıva yüksekliğinin <b>76 cm</b> olduğunu ölçmüştür[cite: 11].</p>
<div class="fig"><svg viewBox="0 0 540 165" width="520" role="img" aria-label="Torricelli deneyinde boru kesiti, şekli ve eğiminin cıva yüksekliğine etkisi">
<rect x="20" y="125" width="500" height="30" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
<line x1="20" y1="55" x2="520" y2="55" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 3"/>
<g stroke="#334155" stroke-width="2" fill="#f8fafc">
<rect x="65" y="18" width="16" height="122"/>
<rect x="175" y="18" width="36" height="122"/>
<polygon points="310,140 326,140 375,18 359,18"/>
<path d="M445,140 L445,95 Q465,75 445,55 L445,18 L463,18 L463,55 Q483,75 463,95 L463,140 Z"/>
</g>
<g fill="#64748b">
<rect x="67" y="55" width="12" height="85"/>
<rect x="177" y="55" width="32" height="85"/>
<polygon points="312,140 324,140 358,55 346,55"/>
<path d="M447,140 L447,95 Q467,75 447,55 L461,55 Q481,75 461,95 L461,140 Z"/>
</g>
<g font-size="10" font-weight="bold" text-anchor="middle" fill="#1e293b">
<text x="73" y="12" fill="#1e40af">1. İnce Boru (S)</text>
<text x="193" y="12" fill="#166534">2. Kalın Boru (3S)</text>
<text x="350" y="12" fill="#b45309">3. Eğik Boru</text>
<text x="455" y="12" fill="#9333ea">4. Kıvrımlı Boru</text>
<text x="500" y="48" fill="#dc2626">h = 76 cm</text>
</g>
</svg></div>
<p>Aynı ortamda (deniz seviyesinde ve 0 °C’de) 1, 2, 3 ve 4 numaralı farklı kesit, eğim ve şekillerdeki cam borularla yapılan Torricelli deneyinde cıva yüksekliğinin (<b>h = 76 cm</b>) dört boruda da <b>birbirine eşit</b> çıkmasının bilimsel nedeni aşağıdakilerden hangisidir[cite: 11]?</p>`,
  c: [
    `Sıvı basıncının ve bunu dengeleyen açık hava basıncının borunun kesit alanına, şekline, eğimine ve borudaki sıvı miktarına bağlı olmaması (yalnızca dik yüksekliğe ve yoğunluğa bağlı olması)`,
    `Kalın boruda bulunan cıvanın yoğunluğunun ince borudakinden daha küçük olması`,
    `Eğik boruya etki eden açık hava basıncının dik borudan daha fazla olması`,
    `Boruların üst kısmındaki boşlukta yüksek basınçlı hava bulunması`
  ],
  a: "A",
  s: `<p>Açık hava basıncı borulardaki cıvanın yaptığı <b>sıvı basıncını (P = h · d)</b> dengeler[cite: 11]. Sıvı basıncı borunun kalınlığına (kesit alanına), şekline veya eğimine <b>bağlı değildir</b>; yalnızca dik yüksekliğe (h) ve sıvının yoğunluğuna (d) bağlıdır[cite: 11]. Bu nedenle dört boruda da dik yükseklik <b>76 cm</b> olur. Cevap <b>A</b>.</p>`
},
{
  q: `<p>Şekildeki hidrolik kaldırma sisteminde (su cenderesinde) küçük pistonun yüzey alanı <b>10 cm²</b>, büyük pistonun yüzey alanı <b>200 cm²</b>’dir. Küçük pistona <b>50 N</b>’luk dik bir kuvvet uygulanarak büyük piston üzerindeki araç dengelenmektedir[cite: 11].</p>
<div class="fig"><svg viewBox="0 0 380 150" width="360" role="img" aria-label="Hidrolik sistem su cenderesi hesaplama şeması">
<path d="M35,30 L35,125 L335,125 L335,50 L245,50 L245,105 L80,105 L80,30" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<rect x="35" y="50" width="45" height="12" fill="#475569"/>
<rect x="245" y="60" width="90" height="12" fill="#475569"/>
<line x1="57" y1="12" x2="57" y2="48" stroke="#dc2626" stroke-width="3"/>
<polygon points="51,40 63,40 57,50" fill="#dc2626"/>
<rect x="260" y="32" width="60" height="28" rx="4" fill="#fde047" stroke="#b45309" stroke-width="1.5"/>
<g font-size="10.5" font-weight="bold">
<text x="68" y="24" fill="#dc2626">F₁ = 50 N</text>
<text x="57" y="140" fill="#1e40af" text-anchor="middle">S₁ = 10 cm²</text>
<text x="290" y="140" fill="#166534" text-anchor="middle">S₂ = 200 cm²</text>
<text x="290" y="50" fill="#92400e" text-anchor="middle">Yük (G)</text>
<text x="160" y="120" fill="#1e3a8a" text-anchor="middle">Sıkıştırılamayan Sıvı</text>
</g>
</svg></div>
<p>Pascal prensibine göre çalışan bu hidrolik sistemle ilgili aşağıdaki ifadelerden hangisi <b>yanlıştır</b>[cite: 11]?</p>`,
  c: [
    `Küçük pistonda oluşan sıvı basıncı 5 N/cm²’dir.`,
    `Sıvı, küçük pistona uygulanan 5 N/cm²’lik basıncı büyük pistonun alt yüzeyine aynen iletir.`,
    `Büyük pistonun kaldırabileceği yükün ağırlığı (kuvvet) 1000 N’dur.`,
    `Büyük pistonun yüzey alanı 20 kat büyük olduğu için büyük pistona iletilen basınç da 20 kat büyüktür.`
  ],
  a: "D",
  s: `<p>Hidrolik sistemlerde (Pascal prensibinde) en çok yapılan hata kuvvet ile basıncı karıştırmaktır[cite: 11]:</p>
<ul>
<li>Küçük pistondaki basınç: P<sub>1</sub> = 50 N / 10 cm² = <b>5 N/cm²</b> (A doğru)[cite: 11].</li>
<li>Sıvılar basıncı her yöne <b>aynen (eşit büyüklükte)</b> iletir: P<sub>1</sub> = P<sub>2</sub> = <b>5 N/cm²</b> (B doğru)[cite: 11].</li>
<li>Büyük pistondaki kuvvet: F<sub>2</sub> = P<sub>2</sub> × S<sub>2</sub> = 5 × 200 = <b>1000 N</b> (C doğru)[cite: 11].</li>
</ul>
<p>Büyük pistonda 20 kat büyüyen şey <b>basınç değil, kuvvettir</b>; basınç her iki pistonda da <b>eşittir</b> (<b>D yanlıştır</b>)[cite: 11]. Cevap <b>D</b>.</p>`
},
{
  q: `<p>Bir öğrenci aşağıdaki günlük yaşam örneklerinde katı basıncının <b>artırılmasının</b> mı yoksa <b>azaltılmasının</b> mı amaçlandığını tabloya işaretlemiştir[cite: 11].</p>
<table class="rt">
<tr><th>Günlük Yaşam Örneği</th><th>Basıncı Artırma</th><th>Basıncı Azaltma</th></tr>
<tr><td><b>1.</b> Karda batmadan yürümek için geniş tabanlı kar ayakkabısı (hedik) giyilmesi</td><td></td><td><b>✓</b></td></tr>
<tr><td><b>2.</b> Meyveleri kolay kesebilmek için bıçağın ağzının bilenerek inceltilmesi</td><td><b>✓</b></td><td></td></tr>
<tr><td><b>3.</b> Yumuşak zeminde çalışan iş makinelerinde tekerlek yerine geniş palet kullanılması</td><td><b>✓</b></td><td></td></tr>
<tr><td><b>4.</b> Duvara kolay çakılması için çivinin ve raptiyenin ucunun sivri yapılması</td><td><b>✓</b></td><td></td></tr>
<tr><td><b>5.</b> Ağır yük taşıyan tır ve trenlerde çok sayıda tekerlek kullanılması</td><td><b>✓</b></td><td></td></tr>
</table>
<p>Buna göre öğrenci tabloda numaralanmış örneklerden hangilerini <b>hatalı</b> işaretlemiştir[cite: 11]?</p>`,
  c: [
    `1 ve 2`,
    `2 ve 4`,
    `3 ve 5`,
    `1, 3 ve 5`
  ],
  a: "C",
  s: `<p>İş makinelerinde geniş palet kullanılması (<b>3</b>) ve ağır kamyonlarda çok sayıda tekerlek bulunması (<b>5</b>) yüzey alanını büyüterek zemine batmayı önlemek, yani <b>basıncı azaltmak</b> içindir[cite: 11]. Öğrenci <b>3 ve 5</b> numaralı örnekleri “Basıncı Artırma” olarak işaretlediği için hatalı yapmıştır[cite: 11]. Cevap <b>C</b>.</p>`
},
{
  q: `<p>Aşağıdaki tabloda deniz seviyesinden farklı yüksekliklerde bulunan <b>K, L ve M</b> şehirlerinde özdeş barometrelerle ölçülen cıva yükseklikleri ve saf suyun kaynama sıcaklıkları verilmiştir[cite: 11].</p>
<table class="rt">
<tr><th>Şehir</th><th>Deniz Seviyesinden Yükseklik (m)</th><th>Barometredeki Cıva Yüksekliği (cm-Hg)</th><th>Saf Suyun Kaynama Sıcaklığı (°C)</th></tr>
<tr><td><b>K Şehri</b></td><td>0 m (Deniz kıyısı)</td><td>76 cm</td><td>100 °C</td></tr>
<tr><td><b>L Şehri</b></td><td>2000 m</td><td>60 cm</td><td>93 °C</td></tr>
<tr><td><b>M Şehri</b></td><td>4000 m</td><td>46 cm</td><td>87 °C</td></tr>
</table>
<p>Tablodaki verilere göre; <b>K şehrinden M şehrine doğru</b> çık하는 bir dağcı ve yanındaki esnek balonla ilgili aşağıdakilerden hangisi <b>söylenemez</b>[cite: 11]?</p>`,
  c: [
    `Deniz seviyesinden yükseklere çıkıldıkça atmosferdeki gaz yoğunluğu ve açık hava basıncı azalır.`,
    `Açık hava basıncı azaldıkça sıvıların kaynama noktası düşer (su daha düşük sıcaklıkta kaynar).`,
    `Dağcının elindeki ağzı bağlı esnek çocuk balonunun hacmi K’den M’ye çıkıldıkça dış basınç azaldığı için büyür (şişer).`,
    `M şehrinde açık hava basıncı daha yüksek olduğu için barometredeki cıva seviyesi 46 cm’ye düşmüştür.`
  ],
  a: "D",
  s: `<p>Deniz seviyesinden yükseklere çıkıldıkça (0 m → 4000 m) açık hava basıncı artmaz, <b>azalır</b> (76 cm-Hg → 46 cm-Hg)[cite: 11]. Dolayısıyla M şehrinde açık hava basıncı en düşüktür (<b>D söylenemez</b>)[cite: 11].</p>`
},
{
  q: `<p>Ucunda esnek lastik zar bulunan bir huni, plastik hortumla içinde renkli sıvı bulunan U borusuna bağlanarak sıvı basıncını ölçen bir <b>manometre</b> düzeneği hazırlanmıştır[cite: 11]. Huni, su dolu kabın içinde <b>aynı derinlikte (h sabit)</b> tutularak zarın yönü sırasıyla yukarı (1), yana (2) ve aşağı (3) çevrilmiş; her üç durumda da U borusundaki sıvı seviyesi farkının (<b>Δx</b>) birbirine eşit olduğu gözlenmiştir[cite: 11].</p>
<div class="fig"><svg viewBox="0 0 380 160" width="360" role="img" aria-label="Aynı derinlikte farklı yönlerde sıvı basıncı ölçümü">
<rect x="15" y="25" width="205" height="125" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<line x1="15" y1="95" x2="220" y2="95" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/>
<g fill="#fde047" stroke="#b45309" stroke-width="2">
<polygon points="45,95 65,95 55,80"/>
<polygon points="105,85 105,105 120,95"/>
<polygon points="160,95 180,95 170,110"/>
</g>
<path d="M55,80 L55,10 L265,10 L265,135 L315,135 L315,35" stroke="#334155" stroke-width="2.5" fill="none"/>
<rect x="259" y="75" width="12" height="60" fill="#ec4899"/>
<rect x="309" y="50" width="12" height="85" fill="#ec4899"/>
<line x1="275" y1="50" x2="275" y2="75" stroke="#1e293b" stroke-width="1.5"/>
<g font-size="10" font-weight="bold">
<text x="55" y="112" text-anchor="middle">1</text>
<text x="112" y="118" text-anchor="middle">2</text>
<text x="170" y="125" text-anchor="middle">3</text>
<text x="115" y="142" fill="#dc2626" text-anchor="middle">Sabit Derinlik (h)</text>
<text x="292" y="66" fill="#be185d">Δx</text>
</g>
</svg></div>
<p>Yalnızca bu deneydeki gözlemlere dayanarak aşağıdaki bilimsel sonuçlardan hangisine ulaşılır[cite: 11]?</p>`,
  c: [
    `Sıvı basıncı sıvının derinliği arttıkça artar.`,
    `Sıvı basıncı sıvının yoğunluğu ile doğru orantılıdır.`,
    `Sıvılar, aynı derinlikteki bütün noktalarda her yöne eşit büyüklükte basınç uygular.`,
    `Sıvı basıncı kabın şekline ve genişliğine bağlı değildir.`
  ],
  a: "C",
  s: `<p>Deneyde derinlik (h) ve sıvı cinsi sabit tutulmuş, yalnızca huninin ağzındaki zarın <b>baktığı yön (yukarı, yana, aşağı)</b> değiştirilmiş ve basıncın (Δx) değişmediği görülmüştür[cite: 11]. Bu durum sıvıların <b>aynı derinlikte her yöne eşit büyüklükte basınç uyguladığını</b> kanıtlar[cite: 11]. Cevap <b>C</b>.</p>`
},
{
  q: `<p>Bir öğrenci özdeş küpleri birbirine yapıştırarak oluşturduğu <b>K, L ve M</b> cisimlerini aynı kum havuzuna yavaşça bırakıyor ve cisimlerin ağırlıkları ile taban alanlarını aşağıdaki tabloya kaydediyor[cite: 11].</p>
<table class="rt">
<tr><th>Cisim</th><th>Toplam Ağırlık (N)</th><th>Kuma Değen Taban Alanı (cm²)</th></tr>
<tr><td><b>K Cismi</b></td><td>60 N</td><td>20 cm²</td></tr>
<tr><td><b>L Cismi</b></td><td>90 N</td><td>45 cm²</td></tr>
<tr><td><b>M Cismi</b></td><td>40 N</td><td>10 cm²</td></tr>
</table>
<p>Buna göre K, L ve M cisimlerinin kumda oluşturdukları <b>batma derinlikleri (h<sub>K</sub>, h<sub>L</sub>, h<sub>M</sub>)</b> arasındaki ilişki aşağıdakilerden hangisidir[cite: 11]?</p>`,
  c: [
    `h<sub>L</sub> &gt; h<sub>K</sub> &gt; h<sub>M</sub>`,
    `h<sub>M</sub> &gt; h<sub>K</sub> &gt; h<sub>L</sub>`,
    `h<sub>K</sub> &gt; h<sub>M</sub> &gt; h<sub>L</sub>`,
    `h<sub>K</sub> = h<sub>L</sub> = h<sub>M</sub>`
  ],
  a: "B",
  s: `<p>Kumda oluşan batma derinliği, cismin kuma uyguladığı <b>katı basıncıyla (P = G / S)</b> doğru orantılıdır[cite: 11]:</p>
<ul>
<li><b>P<sub>K</sub>:</b> 60 / 20 = <b>3 N/cm²</b>[cite: 11]</li>
<li><b>P<sub>L</sub>:</b> 90 / 45 = <b>2 N/cm²</b>[cite: 11]</li>
<li><b>P<sub>M</sub>:</b> 40 / 10 = <b>4 N/cm²</b>[cite: 11]</li>
</ul>
<p>Basınç sıralaması P<sub>M</sub> &gt; P<sub>K</sub> &gt; P<sub>L</sub> olduğu için batma derinlikleri de <b>h<sub>M</sub> &gt; h<sub>K</sub> &gt; h<sub>L</sub></b> olur[cite: 11]. Cevap <b>B</b>.</p>`
},
{
  q: `<p>Bir araştırmacı, katı basıncını etkileyen değişkenleri incelemek için eşit ağırlıktaki (<b>30 N</b>) üç farklı cismi kum havuzuna bırakarak aşağıdaki deney tablosunu oluşturuyor[cite: 11].</p>
<table class="rt">
<tr><th>Deney Düzeneği</th><th>Cismin Ağırlığı (N)</th><th>Temas Yüzey Alanı (cm²)</th><th>Kumda Batma Miktarı (cm)</th></tr>
<tr><td><b>1. Düzenek</b></td><td>30 N</td><td>10 cm²</td><td>3,0 cm</td></tr>
<tr><td><b>2. Düzenek</b></td><td>30 N</td><td>20 cm²</td><td>1,5 cm</td></tr>
<tr><td><b>3. Düzenek</b></td><td>30 N</td><td>40 cm²</td><td>0,75 cm</td></tr>
</table>
<p>Bu deneydeki <b>bağımsız değişken</b>, <b>bağımlı değişken</b> ve <b>kontrol edilen (sabit tutulan) değişken</b> aşağıdakilerin hangisinde doğru verilmiştir[cite: 11]?</p>`,
  c: [
    `Bağımsız: Cismin ağırlığı — Bağımlı: Batma miktarı — Kontrol edilen: Yüzey alanı`,
    `Bağımsız: Batma miktarı — Bağımlı: Yüzey alanı — Kontrol edilen: Cismin ağırlığı`,
    `Bağımsız: Yüzey alanı — Bağımlı: Cismin ağırlığı — Kontrol edilen: Batma miktarı`,
    `Bağımsız: Yüzey alanı — Bağımlı: Batma miktarı (Katı basıncı) — Kontrol edilen: Cismin ağırlığı`
  ],
  a: "D",
  s: `<p>Deney değişkenlerini belirleyelim[cite: 11]:</p>
<ul>
<li><b>Bağımsız değişken (bizim bilerek değiştirdiğimiz):</b> Temas yüzey alanı (10, 20, 40 cm²)[cite: 11].</li>
<li><b>Bağımlı değişken (yüzey alanına bağlı olarak değişen sonuç):</b> Kumda batma miktarı / Katı basıncı (3,0; 1,5; 0,75 cm)[cite: 11].</li>
<li><b>Kontrol edilen değişken (sabit tutulan):</b> Cismin ağırlığı (30 N) ve kum zeminin cinsi[cite: 11]. Cevap <b>D</b>.</li>
</ul>`
},
{
  q: `<p>Alt kısmına yakın bir noktada küçük bir delik açılmış olan plastik su şişesi tamamen suyla dolduruluyor. Şişenin kapağı açıkken delikten suyun hızla fışkırdığı (<b>Şekil-1</b>), kapak sıkıca kapatıldığında ise su akışının kısa süre sonra tamamen durduğu (<b>Şekil-2</b>) gözlemleniyor[cite: 11].</p>
<div class="fig"><svg viewBox="0 0 420 155" width="400" role="img" aria-label="Kapağı açık ve kapalı delikli şişeden su akışı deneyi">
<line x1="10" y1="135" x2="410" y2="135" stroke="#475569" stroke-width="2.5"/>
<rect x="65" y="18" width="24" height="10" fill="#ef4444"/>
<rect x="50" y="32" width="54" height="103" rx="6" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<path d="M104,110 Q145,110 175,135" fill="none" stroke="#2563eb" stroke-width="3"/>
<line x1="77" y1="5" x2="77" y2="28" stroke="#dc2626" stroke-width="2"/>
<polygon points="73,24 81,24 77,31" fill="#dc2626"/>
<rect x="275" y="22" width="24" height="10" fill="#1e293b"/>
<rect x="260" y="32" width="54" height="103" rx="6" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<rect x="262" y="34" width="50" height="16" fill="#f8fafc"/>
<line x1="345" y1="110" x2="316" y2="110" stroke="#dc2626" stroke-width="2.5"/>
<polygon points="322,105 322,115 314,110" fill="#dc2626"/>
<g font-size="9.5" font-weight="bold" text-anchor="middle">
<text x="125" y="16" fill="#dc2626">Kapak Açık (P₀ etki ediyor)</text>
<text x="77" y="148" fill="#1e40af">Şekil-1: Su fışkırır</text>
<text x="287" y="16" fill="#1e293b">Kapak Kapalı</text>
<text x="362" y="98" fill="#dc2626">Dış P₀</text>
<text x="287" y="148" fill="#991b1b">Şekil-2: Su akmaz!</text>
</g>
</svg></div>
<p>Şekil-2’de kapak kapatıldığında delikten su akışının durmasının temel nedeni aşağıdakilerden hangisidir[cite: 11]?</p>`,
  c: [
    `Kapak kapatılınca suyun üst yüzeyine açık hava basıncının etki edememesi ve dışarıdan deliğe etki eden açık hava basıncının (P<sub>0</sub>) suyun akışını engellemesi`,
    `Kapak kapatılınca şişe içindeki suyun yoğunluğunun sıfıra düşmesi`,
    `Kapak kapatılınca yer çekimi kuvvetinin ortadan kalkması`,
    `Kapak kapatılınca suyun katı hâle geçmesi`
  ],
  a: "A",
  s: `<p>Şekil-1’de kapak açıkken suyun üstünden de açık hava basıncı (P<sub>0</sub>) bastırdığı için su kendi ağırlık basıncıyla delikten akar[cite: 11]. Şekil-2’de kapak kapatıldığında ise üstten açık hava basıncı etki edemez; <b>dışarıdan deliğe etki eden açık hava basıncı (P<sub>0</sub>)</b> su basıncını dengeleyerek suyun akmasını engeller[cite: 11]. Cevap <b>A</b>.</p>`
},
{
  q: `<p>Baraj duvarları inşa edilirken, duvarın üst kısmı daha ince, <b>tabana (dip kısma) doğru inildikçe ise gittikçe kalınlaşacak</b> şekilde tasarlanır[cite: 11].</p>
<p>Aşağıdaki olaylardan hangisi baraj duvarlarının tabana doğru kalınlaşmasıyla <b>aynı bilimsel ilkeye (sıvı basıncının derinlikle artmasına)</b> dayanır[cite: 11]?</p>`,
  c: [
    `Yüksek dağların zirvesinde suyun 100 °C’den daha düşük sıcaklıkta kaynaması`,
    `Karda batmadan yürüyebilmek için geniş yüzeyli kar ayakkabısı giyilmesi`,
    `Derin denizlere dalan dalgıçların yüksek basınca dayanıklı özel dalış kıyafetleri giymesi`,
    `Meyve suyunun pipet yardımıyla kutudan kolayca içilebilmesi`
  ],
  a: "C",
  s: `<p>Baraj duvarlarının tabana doğru kalın yapılmasının nedeni, <b>derinlik arttıkça sıvı basıncının artmasıdır</b>[cite: 11]. Dalgıçların derine indikçe artan su basıncından zarar görmemek için özel kıyafet giymesi de tamamen aynı ilkeye (<b>sıvı basıncı – derinlik ilişkisine</b>) dayanır[cite: 11]. (A ve D açık hava basıncı, B ise katı basıncı ile ilgilidir)[cite: 11]. Cevap <b>C</b>.</p>`
},
  {
  q: `<p>Özdeş tuğlalar kullanılarak yatay kum zemin üzerinde <b>I, II ve III</b> numaralı düzenekler kuruluyor. I. düzenekte tek tuğla, II. düzenekte üst üste konulmuş iki tuğla, III. düzenekte ise yan yana konulmuş iki tuğla bulunmaktadır[cite: 11].</p>
<div class="fig"><svg viewBox="0 0 460 145" width="440" role="img" aria-label="Özdeş tuğlaların üç farklı yerleşimi">
<line x1="10" y1="115" x2="450" y2="115" stroke="#78716c" stroke-width="3"/>
<g fill="#f97316" stroke="#7c2d12" stroke-width="1.5">
<rect x="35" y="90" width="80" height="25"/>
<rect x="180" y="90" width="80" height="25"/>
<rect x="180" y="65" width="80" height="25"/>
<rect x="295" y="90" width="70" height="25"/>
<rect x="365" y="90" width="70" height="25"/>
</g>
<g font-size="10" font-weight="bold" text-anchor="middle" fill="#1e293b">
<text x="75" y="82">G / S</text>
<text x="220" y="57">2G / S</text>
<text x="365" y="82">2G / 2S</text>
<text x="75" y="135" font-size="13" fill="#1e40af">I</text>
<text x="220" y="135" font-size="13" fill="#dc2626">II</text>
<text x="365" y="135" font-size="13" fill="#16a34a">III</text>
</g>
</svg></div>
<p>Düzeneklerin kum zemine uyguladığı katı basınçları <b>P<sub>I</sub>, P<sub>II</sub> ve P<sub>III</sub></b> olduğuna göre, bunlar arasındaki büyüklük ilişkisi aşağıdakilerden hangisidir[cite: 11]?</p>`,
  c: [
    `P<sub>I</sub> = P<sub>II</sub> = P<sub>III</sub>`,
    `P<sub>III</sub> &gt; P<sub>II</sub> &gt; P<sub>I</sub>`,
    `P<sub>II</sub> = P<sub>III</sub> &gt; P<sub>I</sub>`,
    `P<sub>II</sub> &gt; P<sub>I</sub> = P<sub>III</sub>`
  ],
  a: "D",
  s: `<p>Bir tuğlanın ağırlığına <b>G</b>, geniş taban alanına <b>S</b> diyelim[cite: 11]:</p>
<ul>
<li><b>I. Düzenek:</b> P<sub>I</sub> = G / S[cite: 11]</li>
<li><b>II. Düzenek:</b> Ağırlık 2 katına çıkmış (2G), yüzey alanı değişmemiştir (S) → P<sub>II</sub> = <b>2G / S</b>[cite: 11]</li>
<li><b>III. Düzenek:</b> Ağırlık 2 katına çıkmış (2G), yüzey alanı da 2 katına çıkmıştır (2S) → P<sub>III</sub> = 2G / 2S = <b>G / S</b>[cite: 11]</li>
</ul>
<p>Buna göre basınç sıralaması: <b>P<sub>II</sub> &gt; P<sub>I</sub> = P<sub>III</sub></b> olur[cite: 11]. Cevap <b>D</b>.</p>`
},
{
  q: `<p>Su dolu bir kabın yan yüzeyinde farklı derinliklerde açılmış <b>K, L ve M</b> delikleri bulunmaktadır. Tıpalar aynı anda açıldığında deliklerden fışkıran suların izlediği yollar şekildeki gibi olmaktadır[cite: 11].</p>
<div class="fig"><svg viewBox="0 0 280 185" width="260" role="img" aria-label="Farklı derinlikteki K, L ve M deliklerinden fışkıran su">
<rect x="30" y="20" width="80" height="145" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<g fill="none" stroke="#2563eb" stroke-width="3">
<path d="M110,55 Q130,55 148,165"/>
<path d="M110,100 Q152,100 190,165"/>
<path d="M110,140 Q175,140 245,165"/>
</g>
<g font-size="12" font-weight="bold" fill="#1e293b">
<text x="12" y="59">K</text><text x="12" y="104">L</text><text x="12" y="144">M</text>
<text x="145" y="180" font-size="10" fill="#1e40af">x₁ &lt; x₂ &lt; x₃ (Menzil)</text>
</g>
<line x1="10" y1="165" x2="265" y2="165" stroke="#78716c" stroke-width="2.5"/>
</svg></div>
<p>Bu deney gözlemine göre;</p>
<p>I. Sıvı basıncı sıvının derinliği arttıkça artar[cite: 11].<br>
II. Kaptaki su boşaltılıp yerine aynı yükseklikte zeytinyağı konulursa M deliğinden çıkan sıvının basıncı ilk duruma göre azalır (d<sub>yağ</sub> &lt; d<sub>su</sub>)[cite: 11].<br>
III. Sıvılar yalnızca bulundukları kabın tabanına değil, temas ettikleri yan yüzeylere de basınç uygular[cite: 11].</p>
<p>yargılarından hangileri <b>doğrudur</b>[cite: 11]?</p>`,
  c: [
    `Yalnız I`,
    `I ve II`,
    `I ve III`,
    `I, II ve III`
  ],
  a: "D",
  s: `<p>En derindeki M deliğinden suyun en uzağa fışkırması derinlik arttıkça sıvı basıncının arttığını (<b>I doğru</b>) ve yan yüzeylerden su fışkırması sıvıların yan yüzeylere de basınç uyguladığını (<b>III doğru</b>) gösterir[cite: 11]. Kaba yoğunluğu sudan daha küçük olan zeytinyağı konulursa aynı derinlikteki sıvı basıncı azalır (<b>II doğru</b>)[cite: 11]. Cevap <b>D</b>.</p>`
},
{
  q: `<p>Taban alanları birbirine eşit (<b>S</b>), şekilleri farklı olan boş ağırlıkları önemsiz <b>K, L ve M</b> kaplarına aynı cins sıvıdan eşit yükseklikte (<b>h</b>) konulmuştur[cite: 11].</p>
<div class="fig"><svg viewBox="0 0 360 155" width="340" role="img" aria-label="Taban alanları eşit farklı şekilli K, L, M kapları">
<line x1="10" y1="125" x2="350" y2="125" stroke="#475569" stroke-width="2.5"/>
<g stroke="#1e3a8a" stroke-width="2">
<polygon points="30,125 90,125 75,30 45,30" fill="#f8fafc"/>
<polygon points="30,125 90,125 78,50 42,50" fill="#93c5fd"/>
<rect x="145" y="30" width="60" height="95" fill="#f8fafc"/>
<rect x="145" y="50" width="60" height="75" fill="#93c5fd"/>
<polygon points="260,125 320,125 340,30 240,30" fill="#f8fafc"/>
<polygon points="260,125 320,125 336,50 244,50" fill="#93c5fd"/>
</g>
<line x1="10" y1="50" x2="350" y2="50" stroke="#dc2626" stroke-dasharray="5 3"/>
<g font-size="10.5" font-weight="bold" text-anchor="middle">
<text x="60" y="118" fill="#1e3a8a">S</text><text x="175" y="118" fill="#1e3a8a">S</text><text x="290" y="118" fill="#1e3a8a">S</text>
<text x="60" y="144" fill="#1e40af">K (Daralan)</text>
<text x="175" y="144" fill="#166534">L (Düzgün)</text>
<text x="290" y="144" fill="#b45309">M (Genişleyen)</text>
</g>
</svg></div>
<p>Buna göre; <b>kapların tabanlarına etki eden sıvı basınçları (P<sub>sıvı</sub>)</b> ile <b>kapların yatay zemine uyguladıkları katı basınçları (P<sub>katı</sub>)</b> arasındaki ilişki aşağıdakilerin hangisinde doğru verilmiştir[cite: 11]?</p>`,
  c: [
    `Sıvı Basınçları: P<sub>K</sub> = P<sub>L</sub> = P<sub>M</sub> — Katı Basınçları: P<sub>M</sub> &gt; P<sub>L</sub> &gt; P<sub>K</sub>`,
    `Sıvı Basınçları: P<sub>M</sub> &gt; P<sub>L</sub> &gt; P<sub>K</sub> — Katı Basınçları: P<sub>K</sub> = P<sub>L</sub> = P<sub>M</sub>`,
    `Sıvı Basınçları: P<sub>K</sub> = P<sub>L</sub> = P<sub>M</sub> — Katı Basınçları: P<sub>K</sub> = P<sub>L</sub> = P<sub>M</sub>`,
    `Sıvı Basınçları: P<sub>K</sub> &gt; P<sub>L</sub> &gt; P<sub>M</sub> — Katı Basınçları: P<sub>M</sub> &gt; P<sub>L</sub> &gt; P<sub>K</sub>`
  ],
  a: "A",
  s: `<p>İki basıncı birbirinden ayırmak çok önemlidir[cite: 11]:</p>
<ul>
<li><b>Kap tabanındaki sıvı basıncı (P = h · d):</b> Üç kapta da aynı sıvı (d) ve aynı derinlik (h) bulunduğu için sıvı basınçları <b>birbirine eşittir: P<sub>K</sub> = P<sub>L</sub> = P<sub>M</sub></b>[cite: 11].</li>
<li><b>Kabın zemine uyguladığı katı basıncı (P = G / S):</b> Üç kabın da taban alanı (S) eşittir; ancak M kabı yukarı doğru genişlediği için içindeki sıvı miktarı (ağırlığı) en fazladır (<b>G<sub>M</sub> &gt; G<sub>L</sub> &gt; G<sub>K</sub></b>). Bu nedenle zemine yapılan katı basınçları <b>P<sub>M</sub> &gt; P<sub>L</sub> &gt; P<sub>K</sub></b> olur. Cevap <b>A</b>.</li>
</ul>`
},
{
  q: `<p>Üzerinde eşit büyüklükte çok sayıda delik bulunan içi su dolu küresel bir balon (Pascal topu), pistonlu bir boruya bağlanmıştır. Piston ok yönünde itildiğinde suyun bütün deliklerden aynı hızla ve dik olarak dışarı fışkırdığı gözlenmiştir[cite: 11].</p>
<div class="fig"><svg viewBox="0 0 320 135" width="300" role="img" aria-label="Pascal topu deneyi">
<rect x="15" y="52" width="110" height="30" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<rect x="25" y="52" width="10" height="30" fill="#475569"/>
<line x1="2" y1="67" x2="25" y2="67" stroke="#dc2626" stroke-width="4"/>
<circle cx="175" cy="67" r="46" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<g stroke="#2563eb" stroke-width="2.5">
<line x1="175" y1="21" x2="175" y2="3"/>
<line x1="221" y1="67" x2="242" y2="67"/>
<line x1="175" y1="113" x2="175" y2="131"/>
<line x1="208" y1="34" x2="223" y2="19"/>
<line x1="208" y1="100" x2="223" y2="115"/>
<line x1="142" y1="34" x2="127" y2="19"/>
<line x1="142" y1="100" x2="127" y2="115"/>
</g>
<text x="50" y="98" font-size="10.5" font-weight="bold" fill="#1e293b">Piston itiliyor</text>
</svg></div>
<p>Bu deneyde gözlenen bilimsel ilkeden (Pascal prensibinden) aşağıdaki araçların hangisinde <b>yararlanılmaktadır</b>[cite: 11]?</p>`,
  c: [
    `Barometre ile açık hava basıncının ölçülmesinde`,
    `Bıçak ve balta gibi kesici aletlerin ağız kısımlarının inceltilmesinde`,
    `Otomobillerdeki hidrolik fren sistemlerinde ve itfaiye merdivenlerinde`,
    `Askı vantuzlarının fayans yüzeylere yapıştırılmasında`
  ],
  a: "C",
  s: `<p>Deney, kapalı bir kaptaki sıvıya uygulanan basıncın sıvı tarafından <b>her yöne ve eşit büyüklükte iletildiğini (Pascal prensibi)</b> göstermektedir[cite: 11]. Otomobillerdeki <b>hidrolik fren sistemleri</b>, itfaiye merdivenleri, hidrolik krikolar ve berber koltukları bu ilkeyle çalışır[cite: 11]. Cevap <b>C</b>.</p>`
},
{
  q: `<p>Bir sürücü uzun bir yaz yolculuğuna çıkmadan önce sabah serinliğinde otomobil lastiklerinin hava basıncını ölçmüş; sıcak asfalt üzerinde saatlerce yol yaptıktan sonra mola yerinde ısınan lastiklerin basıncını tekrar ölçtüğünde <b>gaz basıncının arttığını</b> görmüştür (Lastiklerin hacmi sabit kabul edilmektedir)[cite: 11].</p>
<p>Isınan lastiğin içindeki gaz basıncının artmasının bilimsel nedeni aşağıdakilerden hangisidir[cite: 11]?</p>`,
  c: [
    `Sıcaklık arttığı için lastik içindeki hava taneciklerinin kinetik enerjisinin (hızının) artması ve lastik çeperlerine birim zamanda daha sık ve şiddetli çarpması`,
    `Yolculuk sırasında lastiğin içindeki hava taneciklerinin sayısının kendiliğinden artması`,
    `Isınan hava taneciklerinin hacimlerinin ve kütlelerinin büyümesi`,
    `Yüksek hızda giderken açık hava basıncının sıfıra düşmesi`
  ],
  a: "A",
  s: `<p>Kapalı ve sabit hacimli bir kaptaki gazın sıcaklığı arttığında tanecik sayısı veya tanecik boyutu değişmez; ancak <b>taneciklerin hareket hızı (kinetik enerjisi) artar</b> ve kabın iç yüzeyine daha sık/şiddetli çarparak <b>gaz basıncını artırır</b>[cite: 11]. Cevap <b>A</b>.</p>`
},
{
  q: `<p>Uçakla seyahat eden Elif, uçak havalanmadan önce içindeki suyun yarısını içtiği plastik su şişesinin kapağını sıkıca kapatmıştır. Uçak yüksek irtifaya çıktığında şişenin dışa doğru <b>şiştiğini</b>, uçak tekrar havalimanına indiğinde ise şişenin içe doğru büzülerek eski hâline döndüğünü gözlemlemiştir (Uçak yükseldikçe kabin içindeki hava basıncı bir miktar azalmaktadır)[cite: 11].</p>
<p>Elif’in gözlemlediği bu olayla ilgili aşağıdakilerden hangisi <b>doğrudur</b>[cite: 11]?</p>`,
  c: [
    `Uçak yükseldiğinde kabin içindeki hava basıncı azaldığı için, şişenin içindeki havanın basıncı dış basınçtan büyük kalmış ve şişeyi dışa doğru şişirmiştir.`,
    `Yüksek irtifada şişenin içindeki su miktarı arttığı için şişe genleşmiştir.`,
    `Yükseklerde şişenin içindeki hava taneciklerinin sayısı arttığı için iç basınç artmıştır.`,
    `Uçak inişe geçtiğinde kabin basıncı azaldığı için şişe eski hâline dönmüştür.`
  ],
  a: "A",
  s: `<p>Şişenin ağzı yerde (yüksek açık hava basıncında) kapatılmıştır[cite: 11]. Uçak yükseldiğinde kabin içindeki dış basınç düşünce, <b>şişenin içindeki hava basıncı dış basınçtan büyük kalmış</b> ve iç–dış basınç dengelenene kadar şişe dışa doğru şişmiştir[cite: 11]. Cevap <b>A</b>.</p>`
},
{
  q: `<p>Düşey kesiti verilen eşit bölmeli kabın ortasında, yüksekliği <b>h</b> kadar olan su geçirmez bir engel bulunmaktadır. Boş olan kap, K bölmesinin üzerindeki sabit debili musluk açılarak <b>6t</b> sürede tamamen dolduruluyor.</p>
<div class="fig"><svg viewBox="0 0 480 155" width="460" role="img" aria-label="Bölmeli kapta K ve L noktalarının sıvı basıncı zaman değişimi">
<rect x="35" y="12" width="18" height="10" fill="#475569"/>
<path d="M44,22 L44,32" stroke="#2563eb" stroke-width="3" stroke-dasharray="3 2"/>
<rect x="20" y="35" width="120" height="90" fill="none" stroke="#1e293b" stroke-width="2.5"/>
<line x1="80" y1="80" x2="80" y2="125" stroke="#1e293b" stroke-width="3.5"/>
<g stroke="#94a3b8" stroke-dasharray="3 3">
<line x1="20" y1="80" x2="140" y2="80"/>
<line x1="60" y1="35" x2="60" y2="125"/>
<line x1="100" y1="35" x2="100" y2="125"/>
</g>
<g font-size="11" font-weight="bold" text-anchor="middle">
<text x="50" y="138" fill="#dc2626">K Noktası</text>
<text x="110" y="138" fill="#1e40af">L Noktası</text>
<text x="8" y="105" font-size="9.5">h</text>
<text x="8" y="60" font-size="9.5">h</text>
</g>
<rect x="175" y="15" width="290" height="125" rx="8" fill="#f8fafc" stroke="#64748b"/>
<g font-size="9.5" fill="#1e293b">
<text x="188" y="36"><tspan font-weight="bold" fill="#dc2626">• 0 – t arası:</tspan> K bölmesinin altındaki 1 bölme dolar.</text>
<text x="188" y="58"><tspan font-weight="bold" fill="#1e40af">• t – 3t arası:</tspan> Su engeli aşar ve L’nin altındaki</text>
<text x="188" y="72">  2 bölme dolarken K’deki su yüksekliği sabit kalır!</text>
<text x="188" y="94"><tspan font-weight="bold" fill="#16a34a">• 3t – 6t arası:</tspan> Üstteki 3 bölme birlikte dolar ve</text>
<text x="188" y="108">  hem K hem L’de basınç 2P’ye çıkar.</text>
</g>
</svg></div>
<p>Her bir bölme <b>t</b> sürede dolduğuna göre, kabın tabanındaki <b>K noktasına</b> etki eden sıvı basıncının zamana bağlı değişimi aşağıdakilerden hangisinde doğru açıklanmıştır?</p>`,
  c: [
    `0–t aralığında P’ye kadar artar; t–3t aralığında su yan bölmeye (L’ye) aktığı için P’de sabit kalır; 3t–6t aralığında ise 2P’ye kadar tekrar artar.`,
    `0–6t aralığı boyunca hiç durmadan sabit hızla 2P’ye kadar artar.`,
    `0–2t aralığında sıfır kalır; 2t–6t aralığında 2P’ye çıkar.`,
    `0–3t aralığında artar; 3t–6t aralığında sabit kalır.`
  ],
  a: "A",
  s: `<p>Bölmeli kap sorularında suyun dolma sırasını takip edelim:</p>
<ul>
<li><b>0 – t aralığı:</b> K’nin üzerindeki 1 bölme dolar → K’deki sıvı yüksekliği h, basıncı <b>P</b> olur.</li>
<li><b>t – 3t aralığı (2t süre):</b> Su engelden L tarafına taşar. L’nin altındaki 2 bölme dolana kadar (t’den 3t’ye kadar) K’nin üzerindeki su seviyesi <b>hiç yükselmez (h’de sabit kalır)</b> → K’deki sıvı basıncı <b>P’de sabit kalır!</b></li>
<li><b>3t – 6t aralığı (3t süre):</b> Alt kısımlar tamamen dolduktan sonra üstteki 3 bölme birlikte yükselir ve K’deki sıvı yüksekliği 2h’ye, basıncı <b>2P’ye</b> çıkar. Cevap <b>A</b>.</li>
</ul>`
},
{
  q: `<p>Açık hava basıncının (atmosfer basıncının) varlığını ve gücünü kanıtlamak isteyen iki öğrenci laboratuvarda aşağıdaki iki klasik deneyi gerçekleştiriyor:</p>
<div class="fig"><svg viewBox="0 0 540 145" width="520" role="img" aria-label="Magdeburg küreleri ve haşlanmış yumurta deneyi">
<rect x="10" y="10" width="252" height="125" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
<text x="136" y="28" font-size="10.5" font-weight="bold" fill="#1e40af" text-anchor="middle">1. Deney: Magdeburg Küreleri</text>
<g font-size="9.5" fill="#1e293b">
<text x="20" y="48">İki metal yarım küre birleştirilip</text>
<text x="20" y="62"><tspan font-weight="bold" fill="#dc2626">içindeki hava vakumla boşaltılıyor</tspan>.</text>
<text x="20" y="76">Küreler zıt yönlerde kuvvetle çekilmesine</text>
<text x="20" y="90">rağmen birbirinden ayrılmıyor; hava</text>
<text x="20" y="104">musluğu açılıp içeri hava girdiğinde ise</text>
<text x="20" y="118">kolayca ayrılıyor.</text>
</g>
<rect x="278" y="10" width="252" height="125" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<text x="404" y="28" font-size="10.5" font-weight="bold" fill="#92400e" text-anchor="middle">2. Deney: Şişeye Giren Yumurta</text>
<g font-size="9.5" fill="#1e293b">
<text x="288" y="48">Cam şişenin içinde bir parça kağıt</text>
<text x="288" y="62">yakılıp hemen ağzına soyulmuş</text>
<text x="288" y="76">haşlanmış yumurta konuluyor. Ateş</text>
<text x="288" y="90">sönüp şişe soğuduğunda yumurtanın</text>
<text x="288" y="104"><tspan font-weight="bold" fill="#b45309">kendiliğinden şişenin içine düştüğü</tspan></text>
<text x="288" y="118">gözleniyor.</text>
</g>
</svg></div>
<p>Bu iki deneyin gerçekleşme prensibiyle ilgili aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [
    `Her iki deneyde de kapalı ortamdaki iç gaz basıncı düşürülmüş; dışarıdaki açık hava basıncı (P<sub>0</sub>) iç basınçtan çok daha büyük kaldığı için küreleri birbirine bastırmış ve yumurtayı şişenin içine itmiştir.`,
    `1. deneyde kürelerin ayrılmamasının nedeni metaller arasındaki mıknatıslanma kuvvetidir.`,
    `2. deneyde şişenin içindeki gaz basıncı açık hava basıncından daha büyük olduğu için yumurtayı içeri çekmiştir.`,
    `Her iki deney de yalnızca sıvıların basıncı her yöne iletmesi (Pascal prensibi) ile açıklanır.`
  ],
  a: "A",
  s: `<p>Her iki deney de <b>açık hava basıncının (P<sub>0</sub>)</b> büyüklüğünü kanıtlar: 1. deneyde kürelerin içindeki hava boşaltılınca iç basınç sıfırlanmış ve dıştan etki eden <b>açık hava basıncı</b> küreleri sıkıştırmıştır. 2. deneyde ise şişe içindeki hava ısınıp bir kısmı dışarı çıkmış, ateş sönüp soğuduğunda iç basınç düşmüş ve dışarıdaki <b>açık hava basıncı yumurtayı içeri itmiştir</b> (<b>A doğru</b>).</p>`
},
{
  q: `<p>Düşey kesiti verilen bileşik kapta, kolları birbirinden ayıran <b>M musluğu</b> kapalıyken 1. kolda <b>2h</b> yüksekliğinde su bulunmakta, 2. kol ise tamamen boş bulunmaktadır.</p>
<div class="fig"><svg viewBox="0 0 420 155" width="400" role="img" aria-label="Bileşik kapta musluk açıldığında sıvı basıncı değişimi">
<path d="M50,25 L50,130 L270,130 L270,25 L210,25 L210,105 L110,105 L110,25 Z" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
<path d="M51,45 L109,45 L109,129 L155,129 L155,106 L109,106 Z" fill="#60a5fa"/>
<rect x="51" y="45" width="58" height="84" fill="#60a5fa"/>
<rect x="152" y="102" width="16" height="32" fill="#dc2626"/>
<line x1="15" y1="45" x2="50" y2="45" stroke="#64748b" stroke-dasharray="3 2"/>
<line x1="15" y1="87" x2="275" y2="87" stroke="#16a34a" stroke-dasharray="4 3"/>
<g font-size="10" font-weight="bold">
<text x="80" y="20" fill="#1e40af" text-anchor="middle">1. Kol (Kesit: S)</text>
<text x="240" y="20" fill="#166534" text-anchor="middle">2. Kol (Kesit: S)</text>
<text x="80" y="145" fill="#1e40af" text-anchor="middle">K Noktası</text>
<text x="240" y="145" fill="#166534" text-anchor="middle">L Noktası</text>
<text x="160" y="96" fill="#dc2626" text-anchor="middle">M Musluğu</text>
<text x="25" y="42" fill="#1e40af">2h</text>
<text x="335" y="90" fill="#16a34a">Denge Seviyesi (h)</text>
</g>
</svg></div>
<p>Kesit alanları birbirine eşit (<b>S</b>) olan bu bileşik kapta <b>M musluğu açılıp sıvı akışı durduğunda</b>, K ve L noktalarındaki sıvı basınçları (<b>P<sub>K</sub> ve P<sub>L</sub></b>) için aşağıdakilerden hangisi söylenebilir?</p>`,
  c: [
    `1. koldaki suyun yarısı 2. kola geçer; her iki koldaki sıvı yüksekliği h olur ve K ile L noktalarındaki sıvı basınçları birbirine eşitlenir (P<sub>K</sub> = P<sub>L</sub>).`,
    `K noktasındaki sıvı basıncı değişmez, L noktasındaki sıvı basıncı sıfır kalır.`,
    `Suyun tamamı 2. kola geçer ve K noktasındaki sıvı basıncı sıfır olur.`,
    `1. koldaki sıvı basıncı 2 katına çıkar.`
  ],
  a: "A",
  s: `<p>Bileşik kaplarda aradaki musluk açıldığında sıvı, her iki koldaki <b>sıvı seviyesi (ve taban sıvı basıncı) birbirine eşit olana kadar</b> yüksek koldan alçak kola akar. Kolların kesit alanları eşit (S) olduğu için yeni denge yüksekliği <b>h</b> olur; K’deki basınç yarıya inerken L’deki basınç ona eşitlenir (<b>P<sub>K</sub> = P<sub>L</sub></b>). Cevap <b>A</b>.</p>`
},
{
  q: `<p>Torricelli, açık hava basıncını ölçmek için yaptığı deneyde yoğunluğu oldukça büyük olan <b>cıva (d<sub>cıva</sub> ≈ 13,6 g/cm³)</b> sıvısını kullanmış ve cıva yüksekliğini <b>76 cm</b> olarak ölçmüştür[cite: 11].</p>
<p>Eğer Torricelli aynı deneyi aynı ortamda cıva yerine yoğunluğu çok daha küçük olan <b>saf su (d<sub>su</sub> = 1 g/cm³)</b> kullanarak yapsaydı aşağıdakilerden hangisi gerçekleşirdi?</p>`,
  c: [
    `Suyun yoğunluğu cıvadan 13,6 kat küçük olduğu için, aynı açık hava basıncını dengelemek amacıyla borudaki sıvı yüksekliği 13,6 kat daha fazla (yaklaşık 10,3 metre) olurdu ve daha uzun bir boru gerekirdi.`,
    `Borudaki su yüksekliği yine 76 cm olurdu.`,
    `Suyun yoğunluğu küçük olduğu için borudaki sıvı yüksekliği 76 cm’den çok daha az (yaklaşık 5 cm) olurdu.`,
    `Açık hava basıncı suyun yoğunluğuna bağlı olarak azalırdı.`
  ],
  a: "A",
  s: `<p>Açık hava basıncı sabitken (P<sub>0</sub> = h · d), kullanılan sıvının <b>yoğunluğu (d) küçülürse</b>, aynı basıncı oluşturabilmek için borudaki <b>sıvı yüksekliği (h) ters orantılı olarak artar!</b> Su, cıvadan 13,6 kat daha az yoğun olduğu için su yüksekliği 76 cm × 13,6 ≈ <b>1033 cm (10,3 metre)</b> olurdu. Cevap <b>A</b>.</p>`
},
{
  q: `<p>Özdeş 4 küpün birbirine yapıştırılmasıyla oluştur
