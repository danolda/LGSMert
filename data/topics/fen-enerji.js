LGS.add({
id: "fen-enerji",
summary: `
<h3>1. Besin Zinciri, Besin Ağı ve Enerji Piramidi</h3>
<p>Canlıların ihtiyaç duydukları enerjiyi karşılamak için birbirleriyle oluşturdukları beslenme sırasına <b>besin zinciri</b>, birden fazla besin zincirinin iç içe geçmesiyle oluşan yapıya ise <b>besin ağı</b> denir[cite: 10]. Besin zincirindeki oklar daima <b>enerjinin aktarım yönünü (yenilenden yiyene / üreticiden tüketiciye doğru)</b> gösterir[cite: 10].</p>

<div class="fig"><svg viewBox="0 0 520 65" width="500" role="img" aria-label="Besin zinciri şeması">
<defs><marker id="ch1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#334155"/></marker></defs>
<line x1="85" y1="32" x2="128" y2="32" stroke="#334155" stroke-width="2" marker-end="url(#ch1)"/>
<line x1="200" y1="32" x2="243" y2="32" stroke="#334155" stroke-width="2" marker-end="url(#ch1)"/>
<line x1="315" y1="32" x2="353" y2="32" stroke="#334155" stroke-width="2" marker-end="url(#ch1)"/>
<line x1="425" y1="32" x2="443" y2="32" stroke="#334155" stroke-width="2" marker-end="url(#ch1)"/>
<rect x="15" y="18" width="70" height="28" rx="6" fill="#bbf7d0" stroke="#166534"/><text x="50" y="36" font-size="11" font-weight="bold" text-anchor="middle">Ot</text>
<rect x="130" y="18" width="70" height="28" rx="6" fill="#fef08a" stroke="#b45309"/><text x="165" y="36" font-size="11" font-weight="bold" text-anchor="middle">Çekirge</text>
<rect x="245" y="18" width="70" height="28" rx="6" fill="#fed7aa" stroke="#c2410c"/><text x="280" y="36" font-size="11" font-weight="bold" text-anchor="middle">Kurbağa</text>
<rect x="355" y="18" width="70" height="28" rx="6" fill="#fecaca" stroke="#991b1b"/><text x="390" y="36" font-size="11" font-weight="bold" text-anchor="middle">Yılan</text>
<rect x="445" y="18" width="70" height="28" rx="6" fill="#fecaca" stroke="#991b1b"/><text x="480" y="36" font-size="11" font-weight="bold" text-anchor="middle">Kartal</text>
</svg></div>

<table class="rt">
<tr><th>Canlı Grubu</th><th>Beslenme Özelliği ve Görevi</th><th>Örnek Canlılar</th></tr>
<tr><td><b>1. Üreticiler</b></td><td>Güneş ışığını kullanarak <b>fotosentezle</b> kendi besinini üreten canlılardır; her besin zincirinin ilk basamağında yer alır[cite: 10].</td><td>Yeşil bitkiler, su yosunları (algler), siyanobakteriler (mavi-yeşil algler), öglena[cite: 10].</td></tr>
<tr><td><b>2. Tüketiciler</b></td><td>Besinlerini dışarıdan hazır alan canlılardır[cite: 10]:<br>• <b>Otçullar (1. Tüketici):</b> Doğrudan üreticiyle beslenir[cite: 10].<br>• <b>Etçiller:</b> Diğer hayvanlarla beslenir[cite: 10].<br>• <b>Hepçiller:</b> Hem et hem otla beslenir[cite: 10].</td><td>• <b>Otçul:</b> Çekirge, tavşan, koyun, inek, geyik[cite: 10].<br>• <b>Etçil:</b> Kurbağa, yılan, kartal, aslan, tilki[cite: 10].<br>• <b>Hepçil:</b> İnsan, ayı, fare, serçe, tavuk[cite: 10].</td></tr>
<tr><td><b>3. Ayrıştırıcılar</b><br>(Çürükçüller)</td><td>Besin piramidinin <b>tüm basamaklarında</b> yer alır; ölü organizmaları ve atıkları parçalayarak mineralleri toprağa geri kazandırır[cite: 10].</td><td>Bazı <b>bakteriler</b> ve <b>mantarlar</b> (küf ve şapkalı mantarlar)[cite: 10].</td></tr>
</table>

<div class="fig"><svg viewBox="0 0 540 190" width="520" role="img" aria-label="Ekoloji enerji piramidi ve değişen özellikler">
<polygon points="195,12 245,56 145,56" fill="#fecaca" stroke="#991b1b"/>
<polygon points="145,56 245,56 285,100 105,100" fill="#fed7aa" stroke="#c2410c"/>
<polygon points="105,100 285,100 325,144 65,144" fill="#fef08a" stroke="#b45309"/>
<polygon points="65,144 325,144 365,185 25,185" fill="#bbf7d0" stroke="#166534"/>
<g font-size="10" font-weight="bold" text-anchor="middle" fill="#1e293b">
<text x="195" y="42">3. Tüketiciler (10 kJ)</text>
<text x="195" y="83">2. Tüketiciler (100 kJ)</text>
<text x="195" y="127">1. Tüketiciler - Otçullar (1 000 kJ)</text>
<text x="195" y="170">Üreticiler - Bitkiler (10 000 kJ)</text>
</g>
<rect x="372" y="12" width="22" height="173" fill="#e9d5ff" stroke="#7c3aed"/>
<text x="383" y="98" font-size="9.5" font-weight="bold" fill="#5b21b6" transform="rotate(-90 383 98)" text-anchor="middle">Ayrıştırıcılar (Her basamakta)</text>
<line x1="410" y1="180" x2="410" y2="20" stroke="#dc2626" stroke-width="2.5"/>
<polygon points="410,13 405,22 415,22" fill="#dc2626"/>
<g font-size="9.5" fill="#1e293b">
<text x="422" y="32" font-weight="bold" fill="#dc2626">Yukarı Çıkıldıkça:</text>
<text x="422" y="52">• Aktarılan enerji <tspan font-weight="bold" fill="#dc2626">AZALIR (%10)</tspan></text>
<text x="422" y="70">• Birey sayısı <tspan font-weight="bold" fill="#dc2626">AZALIR</tspan></text>
<text x="422" y="88">• Toplam biyokütle <tspan font-weight="bold" fill="#dc2626">AZALIR</tspan></text>
<text x="422" y="106">• Vücut büyüklüğü genellikle <tspan font-weight="bold" fill="#16a34a">ARTAR</tspan></text>
<text x="422" y="124">• <tspan font-weight="bold" fill="#991b1b">Biyolojik birikim (zehir) ARTAR!</tspan></text>
</g>
</svg></div>

<div class="note"><b>%10 Enerji Yasası ve Biyolojik Birikim:</b> Her basamaktaki enerjinin yalnızca yaklaşık <b>%10’u</b> bir üst basamağa aktarılır; kalan %90’ı yaşamsal faaliyetler ve ısı olarak kaybedilir[cite: 10]. Tarım ilaçları (DDT) ve ağır metaller (cıva, kurşun) gibi zehirli maddelerin dokulardaki birikimi (<b>biyolojik birikim</b>) ise yukarı çıkıldıkça <b>artar</b>; en çok zararı en üstteki canlı görür[cite: 10].</div>

<h3>2. Fotosentez ve Fotosentez Hızını Etkileyen Faktörler</h3>
<div class="key">Karbondioksit (CO₂) + Su (H₂O) <span style="white-space:nowrap">—(Işık Enerjisi / Klorofil)→</span> Besin (Glikoz) + Oksijen (O₂)</div>
<ul>
<li>Fotosentez; bitkilerin, alglerin ve öglenanın <b>kloroplast</b> organelinde, siyanobakterilerin ise sitoplazmasındaki <b>klorofil</b> pigmentinde gerçekleşir[cite: 10]. Işık enerjisi <b>kimyasal bağ enerjisine</b> dönüştürülür[cite: 10].</li>
<li>Fotosentezle üretilen glikozun fazlası <b>nişasta</b> olarak depolanır; nişasta varlığı <b>iyot (lugol) çözeltisi</b> damlatıldığında oluşan <b>mavi-mor</b> renkle anlaşılır[cite: 10]. (<i>Deneylerde kullanılan <b>KOH</b> veya <b>kireç suyu</b> ise ortamdaki <b>$CO_2$ gazını tutar!</b></i>)</li>
</ul>

<div class="fig"><svg viewBox="0 0 580 130" width="560" role="img" aria-label="Fotosentez hızını etkileyen faktörlerin grafikleri">
<g font-size="9" font-weight="bold" text-anchor="middle">
<rect x="6" y="8" width="182" height="114" rx="6" fill="#f0fdf4" stroke="#16a34a"/>
<text x="97" y="23" fill="#166534">1. Işık Şiddeti ve CO₂ Miktarı</text>
<line x1="25" y1="98" x2="170" y2="98" stroke="#334155"/><line x1="25" y1="30" x2="25" y2="98" stroke="#334155"/>
<path d="M25,98 L95,42 L165,42" fill="none" stroke="#16a34a" stroke-width="2.5"/>
<text x="97" y="112" fill="#1e293b">Belli değere kadar artar, sonra sabitlenir</text>

<rect x="198" y="8" width="182" height="114" rx="6" fill="#fef3c7" stroke="#d97706"/>
<text x="289" y="23" fill="#92400e">2. Sıcaklık (En Uygun: 25–30 °C)</text>
<line x1="218" y1="98" x2="362" y2="98" stroke="#334155"/><line x1="218" y1="30" x2="218" y2="98" stroke="#334155"/>
<path d="M225,98 Q289,10 350,98" fill="none" stroke="#d97706" stroke-width="2.5"/>
<text x="289" y="112" fill="#1e293b">Aşırı sıcakta enzim bozulur, hız sıfırlanır</text>

<rect x="390" y="8" width="184" height="114" rx="6" fill="#eff6ff" stroke="#2563eb"/>
<text x="482" y="23" fill="#1e40af">3. Işığın Rengi (Dalga Boyu)</text>
<line x1="410" y1="98" x2="555" y2="98" stroke="#334155"/><line x1="410" y1="30" x2="410" y2="98" stroke="#334155"/>
<path d="M415,38 Q482,115 548,38" fill="none" stroke="#2563eb" stroke-width="2.5"/>
<text x="425" y="112" fill="#7c3aed">Mor (Çok)</text>
<text x="482" y="112" fill="#16a34a">Yeşil (En Az!)</text>
<text x="540" y="112" fill="#dc2626">Kırmızı (Çok)</text>
</g>
</svg></div>

<h3>3. Solunum (Oksijenli Solunum ve Fermantasyon)</h3>
<table class="rt">
<tr><th>Solunum Çeşidi</th><th>Denklemi</th><th>Gerçekleştiği Yer ve Önemi</th></tr>
<tr><td><b>1. Oksijenli Solunum</b></td><td><b>Besin + Oksijen → Karbondioksit + Su + Enerji (Çok ATP)</b>[cite: 10]</td><td>• Gelişmiş hücrelerde <b>mitokondride</b> gerçekleşir[cite: 10].<br>• Bitkiler, hayvanlar ve insanlar <b>gece–gündüz kesintisiz</b> solunum yapar[cite: 10].</td></tr>
<tr><td><b>2. Etil Alkol Fermantasyonu</b><br><i>(Oksijensiz)</i></td><td><b>Besin → Etil Alkol + Karbondioksit (CO₂) + Az Enerji (ATP)</b>[cite: 10]</td><td>• Sitoplazmada gerçekleşir. Bira mayası mantarlarının <b>hamuru kabartması</b> açığa çıkan <b>$CO_2$ gazı</b> sayesindedir[cite: 10].</td></tr>
<tr><td><b>3. Laktik Asit Fermantasyonu</b><br><i>(Oksijensiz)</i></td><td><b>Besin → Laktik Asit + Az Enerji (ATP)</b><br><i>(Dikkat: Gaz çıkışı / CO₂ oluşumu YOKTUR!)</i>[cite: 10]</td><td>• Sütten <b>yoğurt</b> yapılması ve yoğun egzersizde <b>çizgili kas hücrelerinde</b> yorgunluk asidi birikmesi[cite: 10].</td></tr>
</table>

<h3>4. Madde Döngüleri ve Sürdürülebilir Kalkınma</h3>
<ul>
<li><b>Su Döngüsü:</b> Buharlaşma ve <b>terleme</b> (bitkiler) ile havaya karışan su buharı, atmosferde soğuyup <b>yoğuşarak</b> yağış hâlinde yeryüzüne döner[cite: 10].</li>
<li><b>Karbon ve Oksijen Döngüsü:</b> Solunum, <b>fosil yakıtların yanması</b> ve çürüme havaya $CO_2$ verir; yalnızca <b>fotosentez</b> havadaki $CO_2$’yi alıp $O_2$ üretir[cite: 10]. Atmosferde $CO_2$ artışı <b>sera etkisine</b> ve <b>küresel ısınmaya</b> yol açar[cite: 10].</li>
<li><b>Azot Döngüsü:</b> Havadaki %78 oranındaki azot gazı ($N_2$) canlılar tarafından doğrudan kullanılamaz[cite: 10]. <b>Yıldırım/şimşek</b> olayları ve <b>baklagillerin (yonca, fasulye, bezelye) köklerinde yaşayan azot bağlayıcı bakteriler</b> havadaki azotu toprağa bağlar; ayrıştırıcılar ve azot ayrıştırıcı bakteriler ise azotu tekrar havaya döndürür[cite: 10].</li>
<li><b>Sürdürülebilir Kalkınma ve Ayak İzleri:</b> Doğal kaynakları gelecek nesillerin ihtiyaçlarını tehlikeye atmadan tasarruflu kullanmaya <b>sürdürülebilir kalkınma</b> denir[cite: 10]. Tüketim ve atıklarımızın doğaya yükünü gösteren <b>ekolojik ayak izi</b>, <b>karbon ayak izi</b> ve <b>su ayak izinin</b> küçültülmesi amaçlanır[cite: 10].</li>
</ul>
`,
qs: [
{
  q: `<p>Bir çayır ekosistemine ait besin ağı aşağıda verilmiştir. Oklar enerjinin aktarım yönünü göstermektedir[cite: 10].</p>
<div class="fig"><svg viewBox="0 0 400 265" width="380" role="img" aria-label="Çayır ekosistemi besin ağı">
<defs><marker id="web1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#334155"/></marker></defs>
<line x1="176" y1="228" x2="94" y2="187" stroke="#334155" stroke-width="1.8" marker-end="url(#web1)"/>
<line x1="200" y1="228" x2="200" y2="187" stroke="#334155" stroke-width="1.8" marker-end="url(#web1)"/>
<line x1="224" y1="228" x2="306" y2="187" stroke="#334155" stroke-width="1.8" marker-end="url(#web1)"/>
<line x1="70" y1="163" x2="70" y2="112" stroke="#334155" stroke-width="1.8" marker-end="url(#web1)"/>
<line x1="107" y1="175" x2="163" y2="175" stroke="#334155" stroke-width="1.8" marker-end="url(#web1)"/>
<line x1="88" y1="88" x2="142" y2="52" stroke="#334155" stroke-width="1.8" marker-end="url(#web1)"/>
<line x1="196" y1="163" x2="164" y2="52" stroke="#334155" stroke-width="1.8" marker-end="url(#web1)"/>
<line x1="210" y1="163" x2="300" y2="52" stroke="#334155" stroke-width="1.8" marker-end="url(#web1)"/>
<line x1="197" y1="40" x2="273" y2="40" stroke="#334155" stroke-width="1.8" marker-end="url(#web1)"/>
<line x1="328" y1="163" x2="312" y2="52" stroke="#334155" stroke-width="1.8" marker-end="url(#web1)"/>
<rect x="163" y="228" width="74" height="24" rx="6" fill="#bbf7d0" stroke="#166534"/><text x="200" y="244" font-size="11" font-weight="bold" text-anchor="middle">Ot</text>
<rect x="33" y="163" width="74" height="24" rx="6" fill="#fef08a" stroke="#b45309"/><text x="70" y="179" font-size="11" font-weight="bold" text-anchor="middle">Çekirge</text>
<rect x="163" y="163" width="74" height="24" rx="6" fill="#fef08a" stroke="#b45309"/><text x="200" y="179" font-size="11" font-weight="bold" text-anchor="middle">Fare</text>
<rect x="293" y="163" width="74" height="24" rx="6" fill="#fef08a" stroke="#b45309"/><text x="330" y="179" font-size="11" font-weight="bold" text-anchor="middle">Tavşan</text>
<rect x="33" y="88" width="74" height="24" rx="6" fill="#fed7aa" stroke="#c2410c"/><text x="70" y="104" font-size="11" font-weight="bold" text-anchor="middle">Kurbağa</text>
<rect x="123" y="28" width="74" height="24" rx="6" fill="#fecaca" stroke="#991b1b"/><text x="160" y="44" font-size="11" font-weight="bold" text-anchor="middle">Yılan</text>
<rect x="273" y="28" width="74" height="24" rx="6" fill="#fecaca" stroke="#991b1b"/><text x="310" y="44" font-size="11" font-weight="bold" text-anchor="middle">Şahin</text>
</svg></div>
<p>Bu besin ağına göre aşağıdakilerden hangisi <b>doğrudur</b>[cite: 10]?</p>`,
  c: [
    `Yılan bu besin ağında yalnızca otla beslenen birincil tüketicidir.`,
    `Şahin bu ağda yalnızca tek bir besin zincirinde yer alır.`,
    `Çekirgelerin sayısı azalırsa kurbağaların sayısı hızla artar.`,
    `Fare hem ot (bitkisel) hem de çekirge (hayvansal) ile beslendiği için hepçil bir canlıdır.`
  ],
  a: "D",
  s: `<p>Besin ağında <b>fareye</b> hem ottan (üreticiden) hem de çekirgeden (hayvandan) ok gelmektedir; yani fare hem bitkisel hem hayvansal besin tüketen <b>hepçil</b> bir canlıdır (<b>D doğru</b>)[cite: 10]. Kurbağanın tek besini çekirge olduğu için çekirge azalırsa kurbağa da azalır[cite: 10]. Cevap <b>D</b>.</p>`
},
{
  q: `<p>Bir ekosistemde üreticilerin besin olarak depoladığı enerji <b>20 000 kJ</b>’dür. Her beslenme basamağına, bir önceki basamaktaki enerjinin yaklaşık <b>%10’unun</b> aktarıldığı bilinmektedir[cite: 10].</p>
<div class="fig"><svg viewBox="0 0 380 205" width="350" role="img" aria-label="Enerji piramidinde %10 aktarımı">
<polygon points="190,12 235,58 145,58" fill="#fecaca" stroke="#991b1b"/>
<polygon points="145,58 235,58 275,104 105,104" fill="#fed7aa" stroke="#c2410c"/>
<polygon points="105,104 275,104 315,150 65,150" fill="#fef08a" stroke="#b45309"/>
<polygon points="65,150 315,150 355,196 25,196" fill="#bbf7d0" stroke="#166534"/>
<g font-size="10.5" font-weight="bold" text-anchor="middle" fill="#1e293b">
<text x="190" y="42">3. Tüketiciler: ? kJ</text>
<text x="190" y="86">2. Tüketiciler</text>
<text x="190" y="132">1. Tüketiciler (Otçullar)</text>
<text x="190" y="178">Üreticiler: 20 000 kJ</text>
</g>
</svg></div>
<p>Buna göre piramidin en üst basamağındaki <b>3. tüketicilere</b> aktarılan enerji yaklaşık <b>kaç kJ</b>’dür ve bu basamaktaki canlılarla ilgili hangisi söylenebilir[cite: 10]?</p>`,
  c: [
    `2 kJ — Biyokütlesi en fazla olan basamaktır.`,
    `2 000 kJ — Birey sayısı en fazla olan basamaktır.`,
    `200 kJ — Dokularında biyolojik birikim en azdır.`,
    `20 kJ — Dokularında biyolojik (zehirli madde) birikimi en fazla olan basamaktır.`
  ],
  a: "D",
  s: `<p>Her basamakta enerjinin %10’u bir üste aktarılır: Üreticiler ($20.000\text{ kJ}$) $\rightarrow$ 1. Tüketiciler ($2.000\text{ kJ}$) $\rightarrow$ 2. Tüketiciler ($200\text{ kJ}$) $\rightarrow$ 3. Tüketiciler (<b>$20\text{ kJ}$</b>)[cite: 10]. Ayrıca piramidin en üst basamağında <b>biyolojik birikim en fazladır</b>[cite: 10]. Cevap <b>D</b>.</p>`
},
{
  q: `<p><b>Ot → Tavşan → Tilki</b> besin zincirinin bulunduğu bir bölgede, 1. yıldan itibaren tilkiler avcılar tarafından yoğun şekilde avlanmıştır. Bölgedeki tavşan sayısının yıllara göre değişimi grafikte verilmiştir[cite: 10].</p>
<div class="fig"><svg viewBox="0 0 380 190" width="360" role="img" aria-label="Yıllara göre tavşan sayısı grafiği">
<line x1="45" y1="155" x2="365" y2="155" stroke="#334155" stroke-width="2"/>
<line x1="45" y1="12" x2="45" y2="155" stroke="#334155" stroke-width="2"/>
<polyline points="45,130 90,128 140,80 190,32 240,55 290,110 340,125" fill="none" stroke="#a16207" stroke-width="3"/>
<line x1="90" y1="15" x2="90" y2="155" stroke="#dc2626" stroke-dasharray="4 3"/>
<text x="95" y="26" font-size="9.5" font-weight="bold" fill="#dc2626">Tilkiler avlanmaya başlanıyor</text>
<g font-size="10" font-weight="bold" text-anchor="middle">
<text x="45" y="170">0</text><text x="90" y="170">1</text><text x="140" y="170">2</text>
<text x="190" y="170" fill="#dc2626">3</text><text x="240" y="170">4</text><text x="290" y="170">5</text><text x="340" y="170">6</text>
<text x="345" y="184">Yıl</text>
<text x="16" y="85" transform="rotate(-90 16 85)">Tavşan Sayısı</text>
</g>
</svg></div>
<p>Grafikte tavşan sayısının 1–3. yıllar arasında hızla arttıktan sonra, <b>3. yıldan itibaren tekrar azalmaya başlamasının</b> en önemli nedeni aşağıdakilerden hangisidir[cite: 10]?</p>`,
  c: [
    `Tilkilerin avlanmasının durdurulması`,
    `Aşırı çoğalan tavşanların bölgedeki otları hızla tüketmesi sonucunda besin yetersizliğinin ve açlığın başlaması`,
    `Tavşanların 3. yıldan sonra fotosentez yapmayı bırakması`,
    `Bölgedeki ayrıştırıcı canlıların tamamen yok olması`
  ],
  a: "B",
  s: `<p>Tilkiler avlanınca tavşanların avcısı azalmış ve tavşan sayısı 3. yıla kadar aşırı artmıştır[cite: 10]. Ancak aşırı artan tavşanlar tek besin kaynakları olan <b>otları tüketince</b> bölgede besin kıtlığı başlamış ve tavşan sayısı 3. yıldan sonra hızla düşmüştür[cite: 10]. Cevap <b>B</b>.</p>`
},
{
  q: `<p>Bir orman ekosistemindeki tüm <b>ayrıştırıcı canlıların (çürükçül bakteri ve mantarların)</b> yok olduğu varsayılıyor[cite: 10].</p>
<p>Bu durumda uzun vadede ekosistemde aşağıdakilerden hangisinin gerçekleşmesi <b>beklenir</b>[cite: 10]?</p>`,
  c: [
    `Ölü bitki ve hayvan kalıntıları ayrıştırılamayacağı için toprağa mineral dönüşü durur ve üretici bitkilerin gelişimi olumsuz etkilenir.`,
    `Topraktaki azot ve минераl miktarı hızla artarak bitkilerin daha hızlı büyümesini sağlar.`,
    `Üretici canlılar fotosentez için ihtiyaç duydukları güneş ışığını alamaz.`,
    `Besin piramidinde bir üst basamağa aktarılan enerji oranı %10’dan %50’ye çıkar.`
  ],
  a: "A",
  s: `<p>Ayrıştırıcılar ölü organizmaları ve organik atıkları parçalayarak <b>mineralleri toprağa geri kazandıran</b> canlılardır[cite: 10]. Ayrıştırıcılar yok olursa doğada ölü atıklar birikir, toprağa mineral dönüşü durur ve madde döngüsü bozulur[cite: 10]. Cevap <b>A</b>.</p>`
},
{
  q: `<p>Şekilde yeşil bir bitki yaprağında gerçekleşen <b>fotosentez</b> olayında yaprağa giren ve yapraktan çıkan maddeler numaralandırılmıştır (2 numaralı madde kökler tarafından topraktan alınmaktadır)[cite: 10].</p>
<div class="fig"><svg viewBox="0 0 380 200" width="350" role="img" aria-label="Yaprakta fotosentez giren ve çıkan maddeler">
<circle cx="40" cy="38" r="20" fill="#fbbf24"/>
<line x1="62" y1="52" x2="112" y2="78" stroke="#f59e0b" stroke-width="2.5"/><polygon points="118,81 112,73 107,81" fill="#f59e0b"/>
<text x="70" y="80" font-size="11" font-weight="bold" fill="#d97706">Işık</text>
<path d="M125,112 Q195,35 290,85 Q215,160 125,112 Z" fill="#4ade80" stroke="#15803d" stroke-width="2"/>
<line x1="125" y1="112" x2="280" y2="87" stroke="#15803d"/>
<line x1="325" y1="38" x2="268" y2="76" stroke="#64748b" stroke-width="2.5"/><polygon points="262,80 272,79 267,71" fill="#64748b"/>
<text x="335" y="40" font-size="12" font-weight="bold" fill="#334155">1 (Havadan)</text>
<line x1="145" y1="180" x2="168" y2="125" stroke="#2563eb" stroke-width="2.5"/><polygon points="170,120 162,126 171,130" fill="#2563eb"/>
<text x="115" y="192" font-size="12" font-weight="bold" fill="#1e40af">2 (Kökten)</text>
<line x1="235" y1="115" x2="292" y2="162" stroke="#16a34a" stroke-width="2.5"/><polygon points="297,166 293,157 287,164" fill="#16a34a"/>
<text x="305" y="172" font-size="12" font-weight="bold" fill="#166534">3 (Havaya)</text>
<line x1="210" y1="110" x2="228" y2="175" stroke="#a16207" stroke-width="2.5"/><polygon points="230,181 232,171 223,174" fill="#a16207"/>
<text x="235" y="192" font-size="12" font-weight="bold" fill="#92400e">4 (Depolanır)</text>
</svg></div>
<p>Buna göre <b>1, 2, 3 ve 4</b> numaralı maddeler aşağıdakilerin hangisinde doğru eşleştirilmiştir[cite: 10]?</p>`,
  c: [
    `1: Karbondioksit — 2: Su — 3: Oksijen — 4: Besin (Glikoz)`,
    `1: Oksijen — 2: Su — 3: Karbondioksit — 4: Besin (Glikoz)`,
    `1: Karbondioksit — 2: Besin — 3: Oksijen — 4: Su`,
    `1: Su — 2: Karbondioksit — 3: Besin — 4: Oksijen`
  ],
  a: "A",
  s: `<p>Fotosentezde yaprak havadan <b>1: Karbondioksit ($CO_2$)</b> alır, köklerden <b>2: Su ($H_2O$)</b> gelir; kloroplastta üretilen <b>3: Oksijen ($O_2$)</b> havaya verilirken, <b>4: Besin (Glikoz)</b> bitki tarafından kullanılır veya nişasta olarak depolanır[cite: 10]. Cevap <b>A</b>.</p>`
},
{
  q: `<p>Bir saksı bitkisi iki gün karanlık ortamda bekletildikten sonra bir yaprağının orta kısmı ışık geçirmeyen alüminyum folyoyla kapatılıyor ve bitki bir gün güneş ışığında bırakılıyor. Ardından yaprak koparılıp <b>iyot çözeltisi</b> damlatıldığında; açıkta kalan kısımların <b>mavi-mor</b> renk aldığı, folyoyla kapatılan orta kısmın ise renginin değişmediği gözleniyor[cite: 10].</p>
<div class="fig"><svg viewBox="0 0 500 155" width="460" role="img" aria-label="Yaprakta alüminyum folyo ve iyot testi deneyi">
<path d="M20,80 Q110,5 220,55 Q120,150 20,80 Z" fill="#4ade80" stroke="#15803d" stroke-width="2"/>
<rect x="100" y="34" width="55" height="75" fill="#cbd5e1" stroke="#475569"/>
<text x="127" y="75" font-size="9.5" font-weight="bold" text-anchor="middle">Folyo</text>
<path d="M270,80 Q360,5 470,55 Q370,150 270,80 Z" fill="#a855f7" stroke="#581c87" stroke-width="2"/>
<rect x="350" y="34" width="55" height="75" fill="#fef08a" stroke="#b45309"/>
<g font-size="10.5" font-weight="bold" text-anchor="middle">
<text x="120" y="142" fill="#166534">1. Güneşte Bekletilen Yaprak</text>
<text x="370" y="142" fill="#581c87">2. İyot Testi Sonrası (Açık kısımlar mor)</text>
</g>
</svg></div>
<p>Bu deneyle ilgili;</p>
<p>I. Fotosentezle besin (nişasta) üretilebilmesi için ışık enerjisi gereklidir[cite: 10].<br>
II. Bitkinin deney öncesinde karanlıkta bekletilmesinin amacı, yaprakta önceden var olan nişastanın tüketilmesini sağlamaktır[cite: 10].<br>
III. Bu deney fotosentez sonucunda oksijen gazı açığa çıktığını kanıtlamak için tasarlanmıştır[cite: 10].</p>
<p>yargılarından hangileri <b>doğrudur</b>[cite: 10]?</p>`,
  c: [`Yalnız I`, `I ve II`, `II ve III`, `I, II ve III`],
  a: "B",
  s: `<p>İyot çözeltisi <b>nişasta (besin)</b> ayıracıdır; ışık alan yerlerin mavi-mor olması fotosentez için ışığın şart olduğunu (<b>I doğru</b>) ve karanlıkta bekletmenin eski nişastayı sıfırlamak için yapıldığını (<b>II doğru</b>) gösterir[cite: 10]. Deneyde oksijen gazı ölçülmemiştir (<b>III yanlış</b>)[cite: 10]. Cevap <b>B</b>.</p>`
},
{
  q: `<p>Bir öğrenci, su bitkisi (<i>Elodea</i>) bulunan deney tüpünü farklı uzaklıklara yerleştirdiği özdeş ışık kaynağı ile aydınlatıyor ve bitkinin 1 dakikada çıkardığı gaz kabarcıklarını sayarak tabloya kaydediyor (Su sıcaklığı ve $CO_2$ miktarı sabittir)[cite: 10].</p>
<table class="rt">
<tr><th>Işık Kaynağının Bitkiye Uzaklığı (cm)</th><th>10 cm</th><th>20 cm</th><th>30 cm</th><th>40 cm</th></tr>
<tr><td><b>1 Dakikada Çıkan Kabarcık Sayısı</b></td><td>40</td><td>25</td><td>12</td><td>5</td></tr>
</table>
<p>Bu deneyle ilgili aşağıdakilerden hangisi <b>doğrudur</b>[cite: 10]?</p>`,
  c: [
    `Işık kaynağı bitkiye yaklaştırıldıkça ışık şiddeti artmış ve fotosentez hızı (oksijen kabarcığı sayısı) artmıştır.`,
    `Bitkinin ışık altında çıkardığı kabarcıklardaki gaz karbondioksittir.`,
    `Deneyin bağımlı değişkeni ışık kaynağının bitkiye olan uzaklığıdır.`,
    `Deney sırasında suyun sıcaklığının 60 °C’ye çıkarılması kabarcık sayısını iki katına çıkarır.`
  ],
  a: "A",
  s: `<p>Lamba yaklaştıkça (40 cm $\rightarrow$ 10 cm) bitkiye ulaşan <b>ışık şiddeti artar</b> ve bitkinin fotosentezle ürettiği <b>oksijen ($O_2$) kabarcığı sayısı</b> (bağımlı değişken) artar (<b>A doğru</b>)[cite: 10]. Cevap <b>A</b>.</p>`
},
{
  q: `<p>Bir bitkide sıcaklık ve karbondioksit miktarı sabit tutularak, <b>ışık şiddetine bağlı fotosentez hızı</b> ölçülmüş ve aşağıdaki grafik elde edilmiştir[cite: 10].</p>
<div class="fig"><svg viewBox="0 0 360 170" width="340" role="img" aria-label="Işık şiddeti fotosentez hızı grafiği">
<line x1="45" y1="140" x2="340" y2="140" stroke="#334155" stroke-width="2"/>
<line x1="45" y1="12" x2="45" y2="140" stroke="#334155" stroke-width="2"/>
<path d="M45,140 L175,38 Q195,28 220,28 L330,28" fill="none" stroke="#16a34a" stroke-width="3"/>
<circle cx="205" cy="28" r="4.5" fill="#dc2626"/>
<text x="205" y="20" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">P Noktası</text>
<text x="240" y="158" font-size="10.5" font-weight="bold">Işık Şiddeti</text>
<text x="16" y="78" font-size="10.5" font-weight="bold" transform="rotate(-90 16 78)" text-anchor="middle">Fotosentez Hızı</text>
</svg></div>
<p>Bu grafiğe göre aşağıdakilerden hangisi <b>söylenebilir</b>[cite: 10]?</p>`,
  c: [
    `Işık şiddeti artırıldıkça fotosentez hızı sonsuza kadar sürekli artar.`,
    `P noktasından sonra diğer şartlar sabitken yalnızca ışık şiddetini artırmak fotosentez hızını daha fazla artırmaz (hız sabit kalır).`,
    `Işık şiddeti azaldıkça fotosentez hızı artmaktadır.`,
    `Bitki yalnızca P noktasından sonra fotosentez yapmaya başlamıştır.`
  ],
  a: "B",
  s: `<p>Grafikte ışık şiddeti P noktasına gelene kadar fotosentez hızı artmış, <b>P noktasından sonra ise hız sabitlenmiştir</b> (çünkü ortamdaki $CO_2$ miktarı veya klorofil kapasitesi sınırlayıcı olmuştur) (<b>B doğru</b>)[cite: 10]. Cevap <b>B</b>.</p>`
},
{
  q: `<p>Oksijenli solunumun genel denklemi şöyledir: <b>Besin + Oksijen → Karbondioksit + Su + Enerji (ATP + Isı)</b>[cite: 10].</p>
<p>Buna göre oksijenli solunumla ilgili;</p>
<p>I. Yeşil bitkiler de hayvanlar gibi hem gece hem gündüz kesintisiz solunum yapar[cite: 10].<br>
II. Oksijenli solunumda besindeki enerjinin tamamı (%100’ü) ATP’ye dönüştürülür, dışarıya hiç ısı enerjisi çıkmaz[cite: 10].<br>
III. Gelişmiş (ökaryot) hücrelerde oksijenli solunum <b>mitokondri</b> organelinde gerçekleşir[cite: 10].</p>
<p>yargılarından hangileri <b>doğrudur</b>[cite: 10]?</p>`,
  c: [`Yalnız I`, `I ve II`, `I ve III`, `I, II ve III`],
  a: "C",
  s: `<p>Tüm canlılar gece–gündüz solunum yapar (<b>I doğru</b>) ve oksijenli solunum mitokondride gerçekleşir (<b>III doğru</b>)[cite: 10]. Ancak solunumda enerjinin bir kısmı <b>ısı</b> olarak açığa çıkar (vücut sıcaklığımızı ve çimlenen tohumların bulunduğu termostaki sıcaklık artışını bu ısı sağlar; <b>II yanlış</b>)[cite: 10]. Cevap <b>C</b>.</p>`
},
{
  q: `<p>Bir öğrenci <b>Fotosentez</b> ve <b>Oksijenli Solunum</b> olaylarını karşılaştırmak için aşağıdaki tabloyu hazırlamıştır[cite: 10].</p>
<table class="rt">
<tr><th>Karşılaştırılan Özellik</th><th>Fotosentez</th><th>Oksijenli Solunum</th></tr>
<tr><td><b>1. Gerçekleştiği Organel</b></td><td>Kloroplast</td><td>Mitokondri</td></tr>
<tr><td><b>2. Gerçekleşme Zamanı</b></td><td>Yalnızca ışıklı ortamda</td><td>Gece ve gündüz (Her zaman)</td></tr>
<tr><td><b>3. Gaz Alışverişi</b></td><td>Oksijen alınır, karbondioksit verilir</td><td>Karbondioksit alınır, oksijen verilir</td></tr>
<tr><td><b>4. Enerji Dönüşümü</b></td><td>Işık enerjisi kimyasal bağ enerjisine dönüşür</td><td>Kimyasal bağ enerjisi ATP’ye dönüşür</td></tr>
</table>
<p>Öğrenci tablodaki numaralanmış satırlardan hangisini <b>hatalı (ters)</b> doldurmuştur[cite: 10]?</p>`,
  c: [`1. Gerçekleştiği Organel`, `2. Gerçekleşme Zamanı`, `3. Gaz Alışverişi`, `4. Enerji Dönüşümü`],
  a: "C",
  s: `<p><b>3. satırda</b> gaz alışverişi ters yazılmıştır: Fotosentezde <b>karbondioksit ($CO_2$) alınır ve oksijen ($O_2$) verilir</b>; oksijenli solunumda ise <b>oksijen alınır ve karbondioksit verilir</b>[cite: 10]. Cevap <b>C</b>.</p>`
},
{
  q: `<p>Bir öğrenci üç özdeş cam şişeye eşit miktarda <b>bira mayası mantarı, şeker ve su</b> koyarak şişelerin ağzına özdeş esnek balonlar geçiriyor. Şişeleri <b>5 °C, 35 °C ve 80 °C</b> sıcaklıktaki su banyolarında bir saat beklettiğinde balonların son durumları şekildeki gibi oluyor[cite: 10].</p>
<div class="fig"><svg viewBox="0 -25 400 215" width="360" role="img" aria-label="Farklı sıcaklıklarda maya ve balon şişme deneyi">
<path d="M45,160 L45,90 Q45,75 60,70 L60,50 L80,50 L80,70 Q95,75 95,90 L95,160 Z" fill="#fef3c7" stroke="#a16207" stroke-width="2"/>
<ellipse cx="70" cy="40" rx="14" ry="12" fill="#f472b6" stroke="#be185d"/>
<text x="70" y="180" font-size="11" font-weight="bold" text-anchor="middle">1. Şişe (5 °C)</text>

<path d="M175,160 L175,90 Q175,75 190,70 L190,50 L210,50 L210,70 Q225,75 225,90 L225,160 Z" fill="#fef3c7" stroke="#a16207" stroke-width="2"/>
<ellipse cx="200" cy="18" rx="32" ry="34" fill="#f472b6" stroke="#be185d"/>
<text x="200" y="180" font-size="11" font-weight="bold" text-anchor="middle">2. Şişe (35 °C)</text>

<path d="M305,160 L305,90 Q305,75 320,70 L320,50 L340,50 L340,70 Q355,75 355,90 L355,160 Z" fill="#fef3c7" stroke="#a16207" stroke-width="2"/>
<path d="M322,50 Q330,36 338,50" fill="#f472b6" stroke="#be185d"/>
<text x="330" y="180" font-size="11" font-weight="bold" text-anchor="middle">3. Şişe (80 °C)</text>
</svg></div>
<p>Bu deneyle ilgili aşağıdaki yorumlardan hangisi <b>yanlıştır</b>[cite: 10]?</p>`,
  c: [
    `Balonların şişmesini sağlayan gaz, etil alkol fermantasyonu sonucunda açığa çıkan karbondioksit (CO₂) gazıdır.`,
    `Maya mantarlarının fermantasyon hızı ortam sıcaklığından etkilenmektedir (en uygun sıcaklık 35 °C’dir).`,
    `80 °C’deki şişede aşırı sıcaklık nedeniyle maya mantarlarının yapısı bozulmuş (ölmüş) ve gaz çıkışı olmamıştır.`,
    `Maya mantarları bu deneyde oksijenli solunum ve fotosentez yaparak oksijen gazı üretmiştir.`
  ],
  a: "D",
  s: `<p>Maya mantarları <b>fotosentez yapmaz</b>; kapalı şişede şekeri parçalayarak <b>oksijensiz solunum (etil alkol fermantasyonu)</b> yapar ve <b>$CO_2$ gazı</b> çıkararak balonu şişirir (<b>D yanlıştır</b>)[cite: 10]. Cevap <b>D</b>.</p>`
},
{
  q: `<p>Ekmek yapımında hamura maya eklenir ve hamur ılık bir ortamda bekletilir. Bir süre sonra hamurun kabardığı ve içinde gözenekler oluştuğu görülür[cite: 10].</p>
<p>Hamurun kabarmasını sağlayan <b>gaz</b> ve bu gazı oluşturan <b>biyolojik olay</b> aşağıdakilerin hangisinde doğru verilmiştir[cite: 10]?</p>`,
  c: [
    `Oksijen — Fotosentez`,
    `Karbondioksit — Oksijensiz solunum (Etil alkol fermantasyonu)`,
    `Azot — Azot bağlanması`,
    `Laktik asit — Oksijenli solunum`
  ],
  a: "B",
  s: `<p>Hamurdaki maya mantarları <b>etil alkol fermantasyonu (oksijensiz solunum)</b> yapar; açığa çıkan <b>karbondioksit ($CO_2$)</b> gazı hamuru kabartır[cite: 10]. Cevap <b>B</b>.</p>`
},
{
  q: `<p>Yoğun bir koşu antrenmanından sonra Mert’in bacak kaslarında yorgunluk ve ağrı oluşmuştur. Antrenörü, koşu sırasında bacak kaslarına kan yoluyla yeterli oksijen yetişemediğini söylemiştir[cite: 10].</p>
<p>Bu durumun bilimsel açıklaması aşağıdakilerden hangisidir[cite: 10]?</p>`,
  c: [
    `İnsan kas hücreleri yalnızca oksijensiz solunum yapabilen hücrelerdir.`,
    `Oksijensiz solunumda, oksijenli solunuma göre çok daha fazla ATP enerjisi üretilir.`,
    `Oksijen yetersiz kaldığında çizgili kas hücreleri laktik asit fermantasyonu (oksijensiz solunum) yaparak acil enerji üretir; biriken laktik asit yorgunluk verir.`,
    `Kaslarda laktik asit fermantasyonu sırasında yoğun miktarda karbondioksit gazı çıkışı olur.`
  ],
  a: "C",
  s: `<p>Çizgili kas hücrelerimiz normalde oksijenli solunum yapar; ancak yoğun egzersizde oksijen yetersiz kalınca takviye olarak <b>laktik asit fermantasyonu</b> yapar ve biriken <b>laktik asit</b> yorgunluk hissi verir (Laktik asit fermantasyonunda $CO_2$ gazı çıkmaz!) (<b>C doğru</b>)[cite: 10]. Cevap <b>C</b>.</p>`
},
{
  q: `<p>Şekilde doğadaki <b>su döngüsünün</b> temel aşamaları numaralandırılarak gösterilmiştir[cite: 10].</p>
<div class="fig"><svg viewBox="0 0 420 185" width="400" role="img" aria-label="Su döngüsü aşamaları">
<rect x="0" y="140" width="200" height="45" fill="#60a5fa"/>
<path d="M200,185 L200,140 Q260,130 300,100 L420,100 L420,185 Z" fill="#a3a3a3"/>
<circle cx="40" cy="28" r="15" fill="#fbbf24"/>
<g fill="#e5e7eb" stroke="#64748b"><ellipse cx="180" cy="32" rx="45" ry="15"/><ellipse cx="330" cy="32" rx="50" ry="16"/></g>
<rect x="392" y="72" width="6" height="28" fill="#78350f"/><circle cx="395" cy="64" r="14" fill="#22c55e"/>
<line x1="90" y1="132" x2="136" y2="58" stroke="#2563eb" stroke-width="2.5"/><polygon points="140,52 131,58 139,63" fill="#2563eb"/>
<text x="95" y="95" font-size="12" font-weight="bold" fill="#1e40af">1</text>
<line x1="395" y1="48" x2="395" y2="16" stroke="#16a34a" stroke-width="2.5"/><polygon points="395,10 390,19 400,19" fill="#16a34a"/>
<text x="406" y="34" font-size="12" font-weight="bold" fill="#166534">2</text>
<line x1="225" y1="32" x2="274" y2="32" stroke="#475569" stroke-width="2.5"/><polygon points="280,32 271,27 271,37" fill="#475569"/>
<text x="250" y="24" font-size="12" font-weight="bold" fill="#334155">3</text>
<g stroke="#2563eb" stroke-width="2"><line x1="300" y1="52" x2="295" y2="72"/><line x1="320" y1="52" x2="315" y2="72"/><line x1="340" y1="52" x2="335" y2="72"/></g>
<text x="305" y="90" font-size="12" font-weight="bold" fill="#1e40af">4</text>
<line x1="300" y1="130" x2="225" y2="148" stroke="#0ea5e9" stroke-width="2.5"/><polygon points="220,150 230,152 227,143" fill="#0ea5e9"/>
<text x="260" y="156" font-size="12" font-weight="bold" fill="#0369a1">5</text>
</svg></div>
<p>Buna göre numaralı aşamalarla ilgili aşağıdaki eşleştirmelerden hangisi <b>yanlıştır</b>[cite: 10]?</p>`,
  c: [
    `1 — Buharlaşma (Denizden yükselen su buharı)`,
    `2 — Terleme (Bitkilerin havaya su buharı vermesi)`,
    `3 — Yağış`,
    `5 — Yüzey ve yer altı akışı`
  ],
  a: "C",
  s: `<p>Görselde <b>3 numara</b> su buharının atmosferde soğuyarak bulutları oluşturmasını (<b>yoğuşma</b>) göstermektedir; <b>yağış ise 4 numaralı</b> aşamadır[cite: 10]. Cevap <b>C</b>.</p>`
},
{
  q: `<p>Bir çiftçi, tarlasına bir yıl buğday, ertesi yıl ise <b>yonca veya fasulye (baklagil)</b> ekerek nöbetleşe (dönüşümlü) tarım yapmaktadır. Baklagillerin kök yumrularında, havadaki serbest azotu bağlayarak toprağa kazandıran <b>azot bağlayıcı bakteriler</b> yaşamaktadır[cite: 10].</p>
<p>Çiftçinin uyguladığı bu yöntemle ilgili aşağıdakilerden hangisi <b>doğrudur</b>[cite: 10]?</p>`,
  c: [
    `Bitkiler havadaki serbest azot gazını (N₂) yapraklarındaki gözeneklerden doğrudan alıp kullanabilir.`,
    `Yonca (baklagil) ekimi, toprağın azotlu mineraller bakımından doğal yolla zenginleşmesini sağlayarak yapay gübre ihtiyacını azaltır.`,
    `Baklagil ekiminin temel amacı topraktaki karbondioksit gazını artırmaktır.`,
    `Azot, canlıların protein ve DNA yapısında hiç kullanılmayan bir elementtir.`
  ],
  a: "B",
  s: `<p>Hiçbir bitki havadaki serbest azot gazını doğrudan kullanamaz[cite: 10]. Baklagillerin köklerinde yaşayan <b>azot bağlayıcı bakteriler</b> havadaki azotu toprağa bağlar ve toprağı azot bakımından zenginleştirir (<b>B doğru</b>)[cite: 10]. Cevap <b>B</b>.</p>`
},
{
  q: `<p>Hava geçirmeyen özdeş cam fanuslarla aşağıdaki üç düzenek kuruluyor. <b>I ve II. düzenekler ışıklı ortamda</b>, <b>III. düzenek ise karanlık ortamda</b> bekletiliyor[cite: 10].</p>
<div class="fig"><svg viewBox="0 0 400 165" width="380" role="img" aria-label="Işıklı ve karanlık fanuslarda fare ve bitki deneyi">
<path d="M20,135 L20,50 Q20,18 60,18 Q100,18 100,50 L100,135" fill="#e0f2fe" fill-opacity=".5" stroke="#0369a1" stroke-width="2"/>
<line x1="10" y1="135" x2="110" y2="135" stroke="#475569" stroke-width="3"/>
<ellipse cx="70" cy="125" rx="14" ry="9" fill="#64748b"/><circle cx="82" cy="120" r="5" fill="#64748b"/>
<text x="60" y="154" font-size="10.5" font-weight="bold" text-anchor="middle">I (Işıklı - Sadece Fare)</text>

<path d="M145,135 L145,50 Q145,18 185,18 Q225,18 225,50 L225,135" fill="#e0f2fe" fill-opacity=".5" stroke="#0369a1" stroke-width="2"/>
<line x1="135" y1="135" x2="235" y2="135" stroke="#475569" stroke-width="3"/>
<rect x="155" y="110" width="16" height="25" fill="#a16207"/><circle cx="163" cy="95" r="14" fill="#22c55e"/>
<ellipse cx="200" cy="125" rx="14" ry="9" fill="#64748b"/><circle cx="212" cy="120" r="5" fill="#64748b"/>
<text x="185" y="154" font-size="10.5" font-weight="bold" fill="#166534" text-anchor="middle">II (Işıklı - Bitki + Fare)</text>

<rect x="260" y="12" width="100" height="123" fill="#1e293b" opacity=".2"/>
<path d="M270,135 L270,50 Q270,18 310,18 Q350,18 350,50 L350,135" fill="#e0f2fe" fill-opacity=".5" stroke="#0369a1" stroke-width="2"/>
<line x1="260" y1="135" x2="360" y2="135" stroke="#475569" stroke-width="3"/>
<rect x="280" y="110" width="16" height="25" fill="#a16207"/><circle cx="288" cy="95" r="14" fill="#22c55e"/>
<ellipse cx="325" cy="125" rx="14" ry="9" fill="#64748b"/><circle cx="337" cy="120" r="5" fill="#64748b"/>
<text x="310" y="154" font-size="10.5" font-weight="bold" fill="#991b1b" text-anchor="middle">III (Karanlık - Bitki + Fare)</text>
</svg></div>
<p>Deney sonucunda <b>II. düzenekteki farenin çok uzun süre yaşadığı</b>, I ve III. düzeneklerdeki farelerin ise kısa sürede havasızlıktan öldüğü gözlenmiştir[cite: 10]. Hatta III. düzenekteki farenin I. düzenektekinden bile daha erken bayıldığı fark edilmiştir. Bunun nedeni aşağıdakilerden hangisidir[cite: 10]?</p>`,
  c: [
    `Bitkiler ışıklı ortamda (II) fotosentezle farenin solunumu için oksijen üretirken; karanlık ortamda (III) fotosentez yapamaz ve fareyle birlikte oksijen tüketip solunum yapar.`,
    `Bitkiler yalnızca karanlık ortamda oksijen üretir.`,
    `Işıklı ortamda fareler fotosentez yaparak kendi oksijenini üretir.`,
    `Bitkiler hiçbir zaman oksijenli solunum yapmaz.`
  ],
  a: "A",
  s: `<p>II. düzenekte bitki ışıkta <b>fotosentez</b> yaparak fareye $O_2$ üretir, farenin çıkardığı $CO_2$’yi ise kullanır[cite: 10]. III. düzenekte ise ortam <b>karanlık</b> olduğu için bitki fotosentez yapamaz; üstelik bitki de solunum yaparak fanustaki oksijeni fareyle birlikte tüketir (<b>A doğru</b>)[cite: 10]. Cevap <b>A</b>.</p>`
},
  {
  q: `<p><b>Sürdürülebilir kalkınma</b>, bugünün ihtiyaçlarının gelecek nesillerin ihtiyaçlarını ve doğal kaynaklarını tehlikeye atmadan karşılanmasıdır.</p>
<p>Buna göre aşağıdaki uygulamalardan hangisi sürdürülebilir kalkınma ilkesine <b>uygun değildir</b>[cite: 10]?</p>`,
  c: [
    `Tarım arazilerinde vahşi (salma) sulama yerine su tasarrufu sağlayan damla sulama yönteminin kullanılması`,
    `Binaların çatılarında yağmur suyunun toplanarak bahçe sulamasında değerlendirilmesi`,
    `Daha fazla tarım arazisi elde etmek amacıyla ormanların kesilerek tarlaya dönüştürülmesi`,
    `Kamu binalarının ve sokak lambalarının elektrik ihtiyacının güneş panelleriyle karşılanması`
  ],
  a: "C",
  s: `<p>Damla sulama, yağmur suyu hasadı ve güneş enerjisi kullanımı doğal kaynakları koruyarak gelecek nesillere aktarılmasını sağlar[cite: 10]. Ancak <b>ormanların kesilerek tarlaya dönüştürülmesi</b> biyoçeşitliliği yok eder, karbondioksit tüketimini azaltır ve ekolojik dengeyi bozar; bu nedenle sürdürülebilir kalkınmaya <b>uygun değildir</b>[cite: 10]. Cevap <b>C</b>.</p>`
},
{
  q: `<p>Bir ürünün ham madde aşamasından üretimine ve tüketimine kadar kullanılan toplam tatlı su miktarına o ürünün <b>su ayak izi</b> denir[cite: 10]. Bazı ürünlerin yaklaşık su ayak izleri aşağıdaki tabloda verilmiştir[cite: 10].</p>
<table class="rt">
<tr><th>Ürün</th><th>Yaklaşık Su Ayak İzi (Litre)</th></tr>
<tr><td><b>1 kg sığır eti</b></td><td>15 400 L</td></tr>
<tr><td><b>1 pamuklu tişört</b></td><td>2 500 L</td></tr>
<tr><td><b>1 kg buğday</b></td><td>1 800 L</td></tr>
<tr><td><b>1 fincan kahve</b></td><td>130 L</td></tr>
</table>
<p>Tablodaki verilere göre aşağıdakilerden hangisi <b>söylenebilir</b>[cite: 10]?</p>`,
  c: [
    `Bir pamuklu tişörtün üretiminden tüketimine kadar harcanan su miktarı, bir fincan kahvenin su ayak izinin yaklaşık 19 katıdır.`,
    `1 kg buğday üretmek için 1 kg sığır eti üretmekten daha fazla su harcanır.`,
    `Bir ürünün su ayak izi yalnızca o ürünü yıkarken veya içerken kullandığımız su miktarıdır.`,
    `Gereksiz kıyafet alışverişini artırmak bireyin su ayak izini küçültür.`
  ],
  a: "A",
  s: `<p>Tabloya göre 1 pamuklu tişörtün su ayak izi ($2.500\text{ L}$), 1 fincan kahvenin su ayak izinin ($130\text{ L}$) yaklaşık <b>19 katıdır</b> ($2500 \div 130 \approx 19,2$)[cite: 10]. Su ayak izi yalnızca içilen suyu değil, üretim sürecindeki tüm suyu kapsar[cite: 10]. Cevap <b>A</b>.</p>`
},
{
  q: `<p>Klorofil pigmenti, güneş ışığının farklı renklerini (dalga boylarını) farklı oranlarda soğurur; en çok <b>mor ve kırmızı</b> ışığı soğururken, <b>yeşil ışığın</b> büyük kısmını yansıtır. Özdeş K, L ve M saksı bitkileri; sıcaklık, su ve karbondioksit miktarının eşit olduğu ortamlarda sırasıyla <b>Mor, Yeşil ve Kırmızı</b> ışık altında eşit süre bekletiliyor[cite: 10].</p>
<div class="fig"><svg viewBox="0 0 460 150" width="440" role="img" aria-label="Mor, yeşil ve kırmızı ışık altında fotosentez hızı">
<rect x="20" y="15" width="125" height="120" rx="8" fill="#f3e8ff" stroke="#7c3aed" stroke-width="1.5"/>
<text x="82" y="34" font-size="10.5" font-weight="bold" fill="#6d28d9" text-anchor="middle">K Düzeneği (Mor Işık)</text>
<rect x="72" y="95" width="20" height="25" fill="#a16207"/><circle cx="82" cy="80" r="16" fill="#22c55e"/>
<text x="82" y="130" font-size="9.5" font-weight="bold" fill="#5b21b6" text-anchor="middle">Çok yüksek O₂ üretimi</text>

<rect x="167" y="15" width="125" height="120" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="230" y="34" font-size="10.5" font-weight="bold" fill="#15803d" text-anchor="middle">L Düzeneği (Yeşil Işık)</text>
<rect x="220" y="95" width="20" height="25" fill="#a16207"/><circle cx="230" cy="80" r="16" fill="#22c55e"/>
<text x="230" y="130" font-size="9.5" font-weight="bold" fill="#166534" text-anchor="middle">En düşük O₂ üretimi!</text>

<rect x="315" y="15" width="125" height="120" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
<text x="377" y="34" font-size="10.5" font-weight="bold" fill="#991b1b" text-anchor="middle">M Düzeneği (Kırmızı Işık)</text>
<rect x="367" y="95" width="20" height="25" fill="#a16207"/><circle cx="377" cy="80" r="16" fill="#22c55e"/>
<text x="377" y="130" font-size="9.5" font-weight="bold" fill="#991b1b" text-anchor="middle">Yüksek O₂ üretimi</text>
</svg></div>
<p>Bu deneyle ilgili aşağıdaki ifadelerden hangisi <b>doğrudur</b>[cite: 10]?</p>`,
  c: [
    `Deneyin bağımsız değişkeni ışığın rengi, bağımlı değişkeni ise fotosentez hızıdır; fotosentez hızı L (yeşil ışık) düzeneğinde en düşüktür.`,
    `Yeşil yapraklar yeşil ışığın tamamını soğurduğu için en hızlı fotosentez L düzeneğinde gerçekleşir.`,
    `Mor ve kırmızı ışıkta bitkiler fotosentez yapamaz, yalnızca solunum yapar.`,
    `Deneyin kontrol edilen (sabit tutulan) değişkeni ışığın rengidir.`
  ],
  a: "A",
  s: `<p>Deneyde araştırmacının değiştirdiği değişken <b>ışığın rengidir (bağımsız değişken)</b>; buna bağlı olarak değişen <b>fotosentez hızı ise bağımlı değişkendir</b>[cite: 10]. Yapraklar yeşil ışığı yansıttığı için fotosentez hızı <b>yeşil ışıkta (L) en düşüktür</b> (<b>A doğru</b>).</p>`
},
{
  q: `<p>Potasyum hidroksit (<b>KOH</b>) ve <b>kireç suyu</b> çözeltileri, bulundukları ortamdaki <b>karbondioksit ($CO_2$) gazını tutma (yakalama)</b> özelliğine sahiptir. Bir araştırmacı özdeş iki saksı bitkisini hava geçirmeyen cam fanuslara koyarak aşağıdaki düzeneği hazırlıyor (Diğer tüm koşullar özdeştir).</p>
<div class="fig"><svg viewBox="0 0 420 160" width="400" role="img" aria-label="KOH çözeltisi ile fotosentezde karbondioksitin önemi deneyi">
<path d="M35,135 L35,45 Q35,15 95,15 Q155,15 155,45 L155,135" fill="#e0f2fe" fill-opacity=".5" stroke="#0369a1" stroke-width="2"/>
<line x1="20" y1="135" x2="170" y2="135" stroke="#475569" stroke-width="3"/>
<rect x="85" y="105" width="20" height="30" fill="#a16207"/><circle cx="95" cy="88" r="18" fill="#22c55e"/>
<text x="95" y="152" font-size="10.5" font-weight="bold" fill="#166534" text-anchor="middle">1. Fanus (Normal Hava)</text>

<path d="M255,135 L255,45 Q255,15 315,15 Q375,15 375,45 L375,135" fill="#e0f2fe" fill-opacity=".5" stroke="#0369a1" stroke-width="2"/>
<line x1="240" y1="135" x2="390" y2="135" stroke="#475569" stroke-width="3"/>
<rect x="280" y="105" width="20" height="30" fill="#a16207"/><circle cx="290" cy="88" r="18" fill="#22c55e"/>
<rect x="325" y="110" width="36" height="25" fill="#fca5a5" stroke="#991b1b" stroke-width="1.5"/>
<text x="343" y="126" font-size="8.5" font-weight="bold" fill="#991b1b" text-anchor="middle">KOH</text>
<text x="315" y="152" font-size="10.5" font-weight="bold" fill="#991b1b" text-anchor="middle">2. Fanus (KOH Çözeltisi Var)</text>
</svg></div>
<p>Bir süre sonra 1. fanustaki bitkinin sağlıklı büyümeye devam ettiği, <b>2. fanustaki bitkinin ise fotosentez yapamadığı ve besin üretemediği</b> gözleniyor. Bu deney hangi soruya yanıt bulmak amacıyla tasarlanmıştır[cite: 10]?</p>`,
  c: [
    `Fotosentez olayının gerçekleşmesi için karbondioksit (CO₂) gazı gerekli midir?`,
    `Fotosentez hızı ışık şiddetine bağlı mıdır?`,
    `Fotosentez sonucunda dış ortama su buharı verilir mi?`,
    `Bitkiler karanlık ortamda oksijenli solunum yapar mı?`
  ],
  a: "A",
  s: `<p>İki fanus arasındaki tek fark 2. fanusta bulunan ve ortamdaki <b>karbondioksit ($CO_2$) gazını tutan KOH çözeltisidir</b>. KOH ortamdaki $CO_2$’yi tutunca bitki fotosentez yapamamıştır; dolayısıyla bu deney <b>fotosentez için $CO_2$’nin gerekli olduğunu</b> kanıtlar[cite: 10]. Cevap <b>A</b>.</p>`
},
{
  q: `<p>Bir besin zincirini oluşturan <b>K, L, M ve N</b> canlı türlerinin dokularında biriken <b>zehirli madde (biyolojik birikim)</b> miktarlarını gösteren sütun grafiği aşağıda verilmiştir[cite: 10].</p>
<div class="fig"><svg viewBox="0 0 380 165" width="360" role="img" aria-label="K, L, M ve N canlılarının biyolojik birikim grafiği">
<line x1="50" y1="135" x2="340" y2="135" stroke="#334155" stroke-width="2"/>
<line x1="50" y1="15" x2="50" y2="135" stroke="#334155" stroke-width="2"/>
<rect x="75" y="85" width="36" height="50" fill="#fde047" stroke="#b45309"/>
<rect x="140" y="25" width="36" height="110" fill="#fca5a5" stroke="#991b1b"/>
<rect x="205" y="115" width="36" height="20" fill="#86efac" stroke="#166534"/>
<rect x="270" y="55" width="36" height="80" fill="#fed7aa" stroke="#c2410c"/>
<g font-size="11" font-weight="bold" text-anchor="middle">
<text x="93" y="150">K</text><text x="158" y="150">L</text><text x="223" y="150">M</text><text x="288" y="150">N</text>
<text x="18" y="75" font-size="9.5" transform="rotate(-90 18 75)">Biyolojik Birikim (Zehir)</text>
</g>
</svg></div>
<p>Grafikteki verilere göre bu canlıların oluşturduğu <b>besin zinciri</b> ve özellikleriyle ilgili aşağıdakilerden hangisi <b>doğrudur</b>[cite: 10]?</p>`,
  c: [
    `Besin zinciri “M → K → N → L” şeklindedir; M üretici (bitki), K otçul (1. tüketici), L ise zincirin en üstündeki 3. tüketicidir.`,
    `Besin zinciri “L → N → K → M” şeklindedir ve üretici canlı L’dir.`,
    `Toplam biyokütlesi ve birey sayısı en fazla olan canlı türü L’dir.`,
    `Güneş enerjisini doğrudan kimyasal bağ enerjisine dönüştüren canlı N’dir.`
  ],
  a: "A",
  s: `<p>Biyolojik birikim (zehir miktarı) üreticiden son tüketiciye doğru <b>artar</b>[cite: 10].</p>
<ul>
<li>Zehir birikimi en az olan <b>M üreticidir</b> (1. basamak)[cite: 10].</li>
<li>Sırasıyla <b>K (1. tüketici - otçul)</b>, <b>N (2. tüketici)</b> ve zehir birikimi en çok olan <b>L (3. tüketici)</b> gelir[cite: 10].</li>
</ul>
<p>Besin zinciri: <b>M → K → N → L</b> şeklindedir (<b>A doğru</b>)[cite: 10]. Cevap <b>A</b>.</p>`
},
{
  q: `<p>Doğadaki <b>Karbon ve Oksijen Döngüsü</b> aşağıdaki şemada özetlenmiştir[cite: 10].</p>
<div class="fig"><svg viewBox="0 0 520 155" width="500" role="img" aria-label="Karbon ve oksijen döngüsü şeması">
<rect x="175" y="10" width="170" height="32" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
<text x="260" y="30" font-size="10.5" font-weight="bold" fill="#1e40af" text-anchor="middle">Atmosferdeki CO₂ Gazı</text>
<rect x="20" y="105" width="150" height="36" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
<text x="95" y="127" font-size="10.5" font-weight="bold" fill="#166534" text-anchor="middle">Yeşil Bitkiler (Besin + O₂)</text>
<rect x="350" y="105" width="150" height="36" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
<text x="425" y="122" font-size="9.5" font-weight="bold" fill="#991b1b" text-anchor="middle">Canlılar, Ayrıştırıcılar ve</text>
<text x="425" y="135" font-size="9.5" font-weight="bold" fill="#991b1b" text-anchor="middle">Fosil Yakıtlar (Kömür, Petrol)</text>
<path d="M175,26 Q95,26 95,100" fill="none" stroke="#16a34a" stroke-width="2.5"/>
<polygon points="95,104 90,95 100,95" fill="#16a34a"/>
<text x="72" y="55" font-size="10" font-weight="bold" fill="#166534">I. Olay (Fotosentez)</text>
<path d="M425,105 Q425,26 350,26" fill="none" stroke="#dc2626" stroke-width="2.5"/>
<polygon points="346,26 355,21 355,31" fill="#dc2626"/>
<text x="435" y="55" font-size="10" font-weight="bold" fill="#dc2626">II. Olaylar (Solunum + Yanma)</text>
<line x1="170" y1="123" x2="345" y2="123" stroke="#475569" stroke-width="2"/>
<polygon points="349,123 340,118 340,128" fill="#475569"/>
<text x="260" y="116" font-size="9.5" font-weight="bold" fill="#334155" text-anchor="middle">Besin ve O₂ Aktarımı</text>
</svg></div>
<p>Şemadaki karbon ve oksijen döngüsüyle ilgili aşağıdakilerden hangisi <b>yanlıştır</b>[cite: 10]?</p>`,
  c: [
    `Atmosferdeki karbondioksit (CO₂) miktarını azaltıp oksijen (O₂) miktarını artıran temel olay I numaralı fotosentez olayıdır.`,
    `Solunum, ayrıştırıcıların faaliyeti ve fosil yakıtların yanması (II. olaylar) atmosferdeki CO₂ miktarını artırır.`,
    `Fosil yakıt tüketiminin artması ve ormanların tahrip edilmesi atmosferde CO₂ birikimine (sera etkisine ve küresel ısınmaya) neden olur.`,
    `Bitkiler yalnızca I. olayı (fotosentez) gerçekleştirir, II. olaylardan olan solunumu hiçbir zaman gerçekleştirmez.`
  ],
  a: "D",
  s: `<p>Yeşil bitkiler gündüzleri hem fotosentez (I) hem solunum (II) yaparken, geceleri (karanlıkta) yalnızca <b>solunum (II)</b> yaparak atmosfere $CO_2$ verirler[cite: 10]. Dolayısıyla “bitkiler hiçbir zaman solunum yapmaz” ifadesi <b>yanlıştır</b>[cite: 10]. Cevap <b>D</b>.</p>`
},
{
  q: `<p>Aşağıdaki tabloda doğadaki <b>Azot Döngüsü</b> sırasında görev yapan faktörler ve işlevleri verilmiştir[cite: 10].</p>
<table class="rt">
<tr><th>No</th><th>Görev Yapan Faktör / Canlı</th><th>Azot Döngüsündeki İşlevi</th></tr>
<tr><td><b>1</b></td><td><b>Yıldırım ve Şimşek Olayları</b></td><td>Havadaki serbest azotun yağmurla toprağa bağlanmasını sağlar[cite: 10].</td></tr>
<tr><td><b>2</b></td><td><b>Azot Bağlayıcı Bakteriler</b> (Baklagil köklerinde)</td><td>Havadaki azot gazını bağlayarak bitkilerin kullanabileceği azot tuzlarına dönüştürür[cite: 10].</td></tr>
<tr><td><b>3</b></td><td><b>Ayrıştırıcılar</b> (Çürükçül bakteri ve mantarlar)</td><td>Ölü canlılardaki proteinleri parçalayarak toprağa azotlu bileşikler kazandırır[cite: 10].</td></tr>
<tr><td><b>4</b></td><td><b>Azot Ayrıştırıcı Bakteriler</b></td><td>Topraktaki fazla azot bileşiklerini tekrar havaya serbest azot gazı (N₂) olarak geri verir.</td></tr>
</table>
<p>Tablodaki bilgilere göre azot döngüsüyle ilgili aşağıdakilerden hangisine <b>ulaşılamaz</b>[cite: 10]?</p>`,
  c: [
    `Havadaki azotun toprağa bağlanmasında hem canlı faktörler (bakteriler) hem de cansız doğa olayları (yıldırım, şimşek) etkilidir.`,
    `Bitkiler topraktan aldıkları azotlu bileşikleri protein ve DNA sentezinde kullanır; hayvanlar ise azot ihtiyacını bitkileri veya diğer hayvanları yiyerek karşılar.`,
    `Topraktaki azotun yeniden atmosfere dönmesinde azot ayrıştırıcı bakteriler rol oynar.`,
    `İnsanlar ve hayvanlar soluk alıp verirken akciğerleriyle havadaki azot gazını doğrudan kana geçirip protein üretir.`
  ],
  a: "D",
  s: `<p>İnsanlar ve hayvanlar soluk alırken akciğerlerine giren azot gazını kullanamadan soluk verirken aynen dışarı atarlar; canlılar azot ihtiyacını solunumla değil, <b>besinler yoluyla</b> karşılar[cite: 10] (<b>D ulaşılamaz</b>). Cevap <b>D</b>.</p>`
},
{
  q: `<p>İçinde <b>çimlenmekte olan ıslak fasulye tohumları</b> bulunan kapalı cam şişe, ince bir boruyla <b>kireç suyu</b> bulunan beherglasa bağlanmış ve şişenin içine bir termometre yerleştirilmiştir (Kireç suyu, karbondioksit gazı ile karşılaştığında <b>bulanır</b>).</p>
<div class="fig"><svg viewBox="0 0 420 150" width="400" role="img" aria-label="Çimlenen tohumların solunumu ve kireç suyunun bulanması deneyi">
<rect x="40" y="45" width="95" height="85" rx="8" fill="#fef3c7" stroke="#a16207" stroke-width="2"/>
<g fill="#15803d"><ellipse cx="62" cy="118" rx="8" ry="5"/><ellipse cx="85" cy="118" rx="8" ry="5"/><ellipse cx="110" cy="118" rx="8" ry="5"/></g>
<line x1="65" y1="15" x2="65" y2="95" stroke="#dc2626" stroke-width="3"/>
<circle cx="65" cy="95" r="5" fill="#dc2626"/>
<text x="55" y="14" font-size="9.5" font-weight="bold" fill="#dc2626">Termometre (Sıcaklık artar!)</text>
<path d="M105,45 L105,25 L295,25 L295,110" fill="none" stroke="#334155" stroke-width="2.5"/>
<rect x="250" y="60" width="90" height="70" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
<circle cx="295" cy="95" r="3" fill="#fff"/><circle cx="288" cy="82" r="4" fill="#fff"/>
<text x="87" y="144" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">Çimlenen Tohumlar</text>
<text x="295" y="144" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Kireç Suyu (Bulanır!)</text>
</svg></div>
<p>Bir süre sonra termometredeki sıcaklığın yükseldiği ve kireç suyunun bulandığı gözlenmiştir. Henüz yeşil yaprakları çıkmamış olan çimlenen tohumlarla ilgili bu deney aşağıdakilerden hangisini <b>kanıtlar</b>[cite: 10]?</p>`,
  c: [
    `Çimlenen tohumların oksijenli solunum yaparak dışarıya karbondioksit (CO₂) gazı ve ısı enerjisi verdiğini`,
    `Çimlenen tohumların fotosentez yaparak oksijen ürettiğini`,
    `Tohumların çimlenirken dış ortamdan karbondioksit aldığını`,
    `Kireç suyunun fotosentez hızını artırdığını`
  ],
  a: "A",
  s: `<p>Henüz yeşil yaprağı (klorofili) olmayan çimlenen tohumlar fotosentez yapamaz; yalnızca <b>oksijenli solunum</b> yapar[cite: 10]. Kireç suyunun bulanması solunum sonucu <b>$CO_2$ gazı</b> çıktığını, termometrenin yükselmesi ise solunumda <b>ısı</b> açığa çıktığını kanıtlar[cite: 10]. Cevap <b>A</b>.</p>`
},
{
  q: `<p>Bir araştırmacı, <b>“Suyun (nem miktarının) fotosentez hızına etkisini”</b> incelemek için özdeş saksı bitkileriyle kontrollü bir deney yapmak istiyor[cite: 10].</p>
<table class="rt">
<tr><th>Düzenek</th><th>Toprak Özelliği</th><th>Ortam Sıcaklığı</th><th>Işık Şiddeti ve Rengi</th></tr>
<tr><td><b>K Düzeneği</b></td><td>Nemli Toprak (Sulanan)</td><td>28 °C</td><td>Yüksek – Beyaz Işık</td></tr>
<tr><td><b>L Düzeneği</b></td><td>Kuru Toprak</td><td>28 °C</td><td>Düşük – Yeşil Işık</td></tr>
<tr><td><b>M Düzeneği</b></td><td>Kuru Toprak</td><td>10 °C</td><td>Yüksek – Beyaz Işık</td></tr>
<tr><td><b>N Düzeneği</b></td><td>Nemli Toprak (Sulanan)</td><td>10 °C</td><td>Düşük – Yeşil Işık</td></tr>
</table>
<p>Araştırmacı amacına ulaşabilmek için tablodaki düzeneklerden hangisini seçmeli veya nasıl bir değişiklik yapmalıdır[cite: 10]?</p>`,
  c: [
    `K ve M düzeneklerini seçip, M düzeneğinin sıcaklığını da 28 °C yaparak yalnızca toprak neminin farklı olmasını sağlamalıdır.`,
    `Doğrudan K ve L düzeneklerini olduğu gibi kullanmalıdır.`,
    `Doğrudan K ve N düzeneklerini olduğu gibi kullanmalıdır.`,
    `L ve M düzeneklerini seçmelidir.`
  ],
  a: "A",
  s: `<p>Kontrollü deneyde etkisi araştırılan değişken (<b>su / toprak nemi</b>) farklı, diğer tüm değişkenler (<b>sıcaklık, ışık şiddeti ve rengi</b>) <b>aynı</b> olmalıdır[cite: 10]. K (Nemli, 28 °C, Yüksek-Beyaz) ile M (Kuru, Yüksek-Beyaz) seçilip M’nin sıcaklığı da <b>28 °C</b> yapılırsa deney hatasız olur[cite: 10]. Cevap <b>A</b>.</p>`
},
{
  q: `<p>Yeşil bir bitki yaprağının 24 saat (1 gün) boyunca gerçekleştirdiği <b>Fotosentez Hızı</b> ve <b>Solunum Hızı</b> aşağıdaki grafikte karşılaştırılmıştır[cite: 10].</p>
<div class="fig"><svg viewBox="0 0 420 175" width="400" role="img" aria-label="24 saatlik fotosentez ve solunum hızı grafiği">
<line x1="45" y1="140" x2="390" y2="140" stroke="#334155" stroke-width="2"/>
<line x1="45" y1="15" x2="45" y2="140" stroke="#334155" stroke-width="2"/>
<line x1="45" y1="95" x2="380" y2="95" stroke="#dc2626" stroke-width="2.5"/>
<path d="M110,140 Q215,-10 320,140" fill="none" stroke="#16a34a" stroke-width="3"/>
<circle cx="142" cy="95" r="4" fill="#1e40af"/><circle cx="288" cy="95" r="4" fill="#1e40af"/>
<g font-size="9.5" font-weight="bold" text-anchor="middle">
<text x="75" y="154">00.00 (Gece)</text>
<text x="142" y="154" fill="#1e40af">07.00 (K)</text>
<text x="215" y="154" fill="#16a34a">12.00 (Öğle)</text>
<text x="288" y="154" fill="#1e40af">18.00 (L)</text>
<text x="355" y="154">24.00 (Gece)</text>
<text x="215" y="25" fill="#16a34a">Fotosentez Hızı</text>
<text x="345" y="88" fill="#dc2626">Solunum Hızı</text>
<text x="18" y="78" transform="rotate(-90 18 78)">Tepkime Hızı</text>
</g>
</svg></div>
<p>Grafiğe göre bu bitkiyle ilgili aşağıdakilerden hangisi <b>yanlıştır</b>[cite: 10]?</p>`,
  c: [
    `Gece saatlerinde (00.00–06.00 arası) ışık olmadığı için fotosentez hızı sıfırdır; bitki yalnızca solunum yapar.`,
    `Öğle saat 12.00’de fotosentez hızı solunum hızından çok daha yüksek olduğu için bitki dış ortama bol miktarda oksijen verir.`,
    `Sabah 07.00 (K) ve akşam 18.00 (L) anlarında bitkinin fotosentez hızı ile solunum hızı birbirine eşittir (ürettiği oksijen tükettiği oksijene eşittir).`,
    `Öğle saat 12.00’de fotosentez en üst seviyeye çıktığı için bitkinin solunumu tamamen durmuştur.`
  ],
  a: "D",
  s: `<p>Grafikteki kırmızı çizgiden de görüldüğü üzere, bitkilerde <b>solunum gece ve gündüz (24 saat boyunca) kesintisiz devam eder</b>; öğle vakti fotosentez yaparken de solunum asla durmaz (<b>D yanlıştır</b>)[cite: 10]. Cevap <b>D</b>.</p>`
},
{
  q: `<p>Aşağıdaki tabloda üç farklı enerji üretim yolu olan <b>Oksijenli Solunum</b>, <b>Etil Alkol Fermantasyonu</b> ve <b>Laktik Asit Fermantasyonu</b> karşılaştırılmıştır[cite: 10].</p>
<table class="rt">
<tr><th>Özellik</th><th>Oksijenli Solunum</th><th>Etil Alkol Fermantasyonu</th><th>Laktik Asit Fermantasyonu</th></tr>
<tr><td><b>1. Besin (Glikoz) Kullanımı</b></td><td>Kullanılır</td><td>Kullanılır</td><td>Kullanılır</td></tr>
<tr><td><b>2. Oksijen (O₂) Kullanımı</b></td><td>Kullanılır</td><td>Kullanılmaz</td><td>Kullanılmaz</td></tr>
<tr><td><b>3. Karbondioksit (CO₂) Çıkışı</b></td><td>Oluşur</td><td>Oluşur</td><td><b>Oluşmaz!</b></td></tr>
<tr><td><b>4. Üretilen Enerji (ATP) Miktarı</b></td><td>Çok fazla</td><td>Az</td><td>Az</td></tr>
</table>
<p>Tablodaki verilere göre; <b>“Glikoz (besin) harcanıp ATP enerjisi üretildiği hâlde kapta karbondioksit ($CO_2$) gazı çıkışının görülmediği”</b> bir olay aşağıdakilerden hangisi olabilir[cite: 10]?</p>`,
  c: [
    `Sütten yoğurt yapan bakterilerin veya yorulan çizgili kas hücrelerinin gerçekleştirdiği laktik asit fermantasyonu`,
    `Bira mayası mantarlarının hamuru kabartırken gerçekleştirdiği etil alkol fermantasyonu`,
    `Çimlenen fasulye tohumlarının gerçekleştirdiği oksijenli solunum`,
    `Karanlıkta bekletilen saksı bitkisinin gerçekleştirdiği oksijenli solunum`
  ],
  a: "A",
  s: `<p>Tablonun 3. satırında açıkça belirtildiği gibi, <b>laktik asit fermantasyonunda</b> (yoğurt bakterileri ve çizgili kas hücreleri) karbondioksit ($CO_2$) gazı oluşmaz[cite: 10]. Oksijenli solunumda ve etil alkol fermantasyonunda ise $CO_2$ gazı açığa çıkar[cite: 10]. Cevap <b>A</b>.</p>`
},
{
  q: `<p>Atmosferde karbondioksit ($CO_2$), metan ($CH_4$) ve su buharı gibi gazların normalden fazla birikerek yeryüzünden yansıyan güneş ışınlarını tutmasına ve Dünya’nın ortalama sıcaklığının artmasına <b>sera etkisi ve küresel ısınma</b> denir[cite: 10].</p>
<p>Bireylerin <b>karbon ayak izini</b> ve küresel ısınmayı azaltmak için aşağıdaki önlemlerden hangisini alması <b>beklenmez</b>[cite: 10]?</p>`,
  c: [
    `Binalarda ısı yalıtımı yaptırarak ısınma amaçlı kömür ve doğal gaz tüketimini azaltmak`,
    `Kısa mesafelerde motorlu taşıtlar yerine yürüyüşü veya bisiklet kullanımını tercih etmek`,
    `Kağıt, plastik, cam ve metal atıkları kaynağında ayrıştırarak geri dönüşüme kazandırmak`,
    `Tek kullanımlık plastik ürünlerin tüketimini artırmak ve enerji ihtiyacını kömürlü termik santrallerden karşılamak`
  ],
  a: "D",
  s: `<p>Tek kullanımlık plastikleri artırmak ve kömürlü termik santraller kullanmak atmosfere salınan $CO_2$ miktarını (karbon ayak izini) ve küresel ısınmayı <b>artırır</b>[cite: 10]. Cevap <b>D</b>.</p>`
},
{
  q: `<p><b>Ot → Çekirge → Kurbağa → Yılan → Kartal</b> besin zincirinin bulunduğu bir tarım alanında, çiftçilerin kurbağaları topladığı ve bölgedeki <b>kurbağa sayısının hızla azaldığı</b> biliniyor[cite: 10].</p>
<p>Kurbağa sayısının azalması sonucunda bu besin zincirindeki diğer canlıların sayısında kısa vadede nasıl bir değişim beklenir[cite: 10]?</p>`,
  c: [
    `Çekirge sayısı artar; çekirgeler daha çok ot yiyeceği için ot miktarı azalır; kurbağayla beslenen yılanların sayısı ise besin bulamadığı için azalır.`,
    `Çekirge sayısı azalır, yılan sayısı artar, ot miktarı artar.`,
    `Bütün canlıların sayısı aynı anda artar.`,
    `Yalnızca kartal sayısı artar, diğer canlılar etkilenmez.`
  ],
  a: "A",
  s: `<p>Besin zincirinde <b>kurbağa azalırsa</b>[cite: 10]:</p>
<ul>
<li>Kurbağanın avı olan <b>çekirgeler</b> rahatlar ve sayısı <b>artar</b>[cite: 10].</li>
<li>Sayısı artan çekirgeler <b>otları</b> aşırı tüketir ve ot miktarı <b>azalır</b>[cite: 10].</li>
<li>Kurbağayla beslenen <b>yılanlar</b> ise besinsiz kaldığı için sayısı <b>azalır</b>[cite: 10]. Cevap <b>A</b>.</li>
</ul>`
},
{
  q: `<p>Geri dönüşümün ülke ekonomisine ve doğaya katkısını araştıran bir öğrenci aşağıdaki bilgi kartını hazırlamıştır[cite: 10]:</p>
<div class="fig"><svg viewBox="0 0 520 125" width="500" role="img" aria-label="Geri dönüşümün faydaları bilgi kartı">
<rect x="10" y="10" width="500" height="105" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="260" y="30" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">GERİ DÖNÜŞÜMÜN KAZANIMLARI</text>
<g font-size="9.5" fill="#1e293b">
<text x="24" y="52">• <tspan font-weight="bold" fill="#166534">1 ton atık kâğıdın</tspan> geri dönüştürülmesiyle <tspan font-weight="bold">17 yetişkin çam ağacının</tspan> kesilmesi önlenir.</text>
<text x="24" y="72">• <tspan font-weight="bold" fill="#1e40af">Metal ve alüminyum</tspan> kutuların geri dönüşümüyle cevherden üretime göre <tspan font-weight="bold">%95 enerji tasarrufu</tspan> sağlanır.</text>
<text x="24" y="92">• <tspan font-weight="bold" fill="#b45309">Cam ve plastik</tspan> atıkların geri kazanımıyla çöp depolama alanlarının ömrü uzar ve ham madde korunur.</text>
</g>
</svg></div>
<p>Bilgi kartına göre geri dönüşüm uygulamalarıyla ilgili aşağıdakilerden hangisi <b>söylenemez</b>[cite: 10]?</p>`,
  c: [
    `Doğal kaynakların (ormanların, madenlerin ve suyun) tükenmesini yavaşlatarak sürdürülebilir kalkınmaya hizmet eder.`,
    `Sanayide üretim için harcanan enerji miktarını büyük oranda azaltarak ülke ekonomisine katkı sağlar.`,
    `Çevreye bırakılan katı atık (çöp) miktarını ve karbon ayak izini azaltır.`,
    `Geri dönüştürülen ürünlerin üretim maliyeti, sıfırdan ham madde kullanılarak yapılan üretimden her zaman daha pahalıdır.`
  ],
  a: "D",
  s: `<p>Geri dönüşüm, ham madde ve enerji maliyetini (%95’e varan oranda) düşürdüğü için sıfırdan üretime göre çok daha <b>ekonomik ve tasarrufludur</b>[cite: 10] (<b>D söylenemez</b>). Cevap <b>D</b>.</p>`
},
{
  q: `<p>Özdeş iki saksı bitkisinden <b>K bitkisi</b> sürekli güneş ışığı alan aydınlık bir ortama, <b>L bitkisi</b> ise hiç ışık almayan karanlık bir odaya konulup bir hafta boyunca düzenli sulanıyor[cite: 10].</p>
<p>Bir hafta sonunda bitkilerin yapraklarındaki <b>kuru ağırlık (besin miktarı)</b> değişimi incelendiğinde aşağıdakilerden hangisi gözlenir[cite: 10]?</p>`,
  c: [
    `K bitkisi fotosentezle solunumda harcadığından daha fazla besin ürettiği için ağırlığı artar; L bitkisi ise karanlıkta fotosentez yapamayıp depo besinlerini solunumda harcadığı için ağırlığı azalır.`,
    `Her iki bitkinin de ağırlığı eşit miktarda artar.`,
    `K bitkisinin ağırlığı azalırken L bitkisinin ağırlığı artar.`,
    `L bitkisi karanlıkta sulandığı için yalnızca su kullanarak nişasta üretir ve ağırlığı artar.`
  ],
  a: "A",
  s: `<p>Işıklı ortamdaki <b>K bitkisi</b> fotosentezle besin ürettiği için kuru ağırlığı <b>artar</b>; karanlıktaki <b>L bitkisi</b> ise fotosentez yapamaz ve hayatta kalmak için önceden depoladığı besinleri <b>solunumla parçalayıp tükettiği için ağırlığı azalır</b> (<b>A doğru</b>)[cite: 10]. Cevap <b>A</b>.</p>`
},
{
  q: `<p>Aşağıdaki özet tablosunda “Enerji Dönüşümleri ve Çevre Bilimi” ünitesiyle ilgili dört temel bilimsel kural verilmiştir[cite: 10]:</p>
<table class="rt">
<tr><th>Kural No</th><th>Bilimsel Kural</th></tr>
<tr><td><b>1</b></td><td>Besin piramidinde üreticiden son tüketiciye doğru gidildikçe aktarılan enerji, toplam biyokütle ve birey sayısı azalırken; dokularda biriken zehir miktarı (biyolojik birikim) artar[cite: 10].</td></tr>
<tr><td><b>2</b></td><td>Ayrıştırıcılar (bakteri ve mantarlar) besin piramidinin tüm basamaklarında görev yaparak organik atıkları inorganik maddelere dönüştürür[cite: 10].</td></tr>
<tr><td><b>3</b></td><td>Yeşil bitkiler gündüzleri yalnızca fotosentez, geceleri ise yalnızca oksijenli solunum yapar.</td></tr>
<tr><td><b>4</b></td><td>Fotosentezde ışık enerjisi kimyasal bağ enerjisine dönüştürülerek besinde depolanır; solunumda ise besindeki enerji ATP’ye dönüştürülür[cite: 10].</td></tr>
</table>
<p>Tablodaki numaralanmış kurallardan hangisi <b>yanlıştır</b>[cite: 10]?</p>`,
  c: [`1`, `2`, `3`, `4`],
  a: "C",
  s: `<p>1, 2 ve 4 numaralı kurallar tamamen doğrudur[cite: 10]. Ancak <b>3 numaralı kural yanlıştır</b>; çünkü yeşil bitkiler gündüzleri (ışıkta) <b>YALNIZCA fotosentez yapmaz; hem fotosentez hem de oksijenli solunumu birlikte yapar!</b> (Solunum gece–gündüz kesintisiz devam eder)[cite: 10]. Cevap <b>C</b>.</p>`
}
]
});
