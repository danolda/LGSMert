LGS.add({
id: "fen-basinc",
summary: `
<h3>1. Basınç Nedir?</h3>
<p>Birim yüzeye dik olarak etki eden kuvvete <b>basınç</b> denir. Birimi N/m² = <b>Pascal (Pa)</b>’dır.</p>
<div class="key">Katı basıncı = {{Dik etki eden kuvvet (ağırlık)|Yüzey alanı}}</div>

<h3>2. Katı Basıncı</h3>
<div class="fig"><svg viewBox="0 0 460 150" width="440" role="img" aria-label="Aynı cismin farklı yüzeyleri üzerindeki basıncı">
<line x1="10" y1="120" x2="450" y2="120" stroke="#78716c" stroke-width="3"/>
<g stroke="#7c2d12" stroke-width="1.5"><rect x="40" y="90" width="140" height="30" fill="#f97316"/><polygon points="40,90 60,72 200,72 180,90" fill="#fdba74"/><polygon points="180,90 200,72 200,102 180,120" fill="#c2410c"/>
<rect x="320" y="30" width="30" height="90" fill="#f97316"/><polygon points="320,30 340,12 370,12 350,30" fill="#fdba74"/><polygon points="350,30 370,12 370,102 350,120" fill="#c2410c"/></g>
<line x1="40" y1="128" x2="180" y2="128" stroke="#16a34a" stroke-width="4"/><line x1="320" y1="128" x2="350" y2="128" stroke="#dc2626" stroke-width="4"/>
<g font-size="12" text-anchor="middle"><text x="110" y="145">Geniş yüzey → basınç küçük</text><text x="335" y="145">Dar yüzey → basınç büyük</text></g>
</svg><figcaption>Ağırlık aynı; yüzey alanı küçüldükçe basınç artar.</figcaption></div>
<ul>
<li>Katı basıncı <b>ağırlık</b> ile doğru, <b>yüzey alanı</b> ile ters orantılıdır. Katılar kuvveti (ve basıncı) yalnızca <b>kuvvet doğrultusunda</b> iletir.</li>
<li>Aynı cisim hangi yüzeyi üzerine konursa konsun ağırlığı (kuvvet) değişmez; yalnızca basınç değişir.</li>
<li><b>Basıncı artırma:</b> bıçağın bilenmesi, çivi ve raptiye uçlarının sivri olması, kesici dişler, kramponlar.</li>
<li><b>Basıncı azaltma:</b> kar ayakkabısı, iş makinelerinde palet, kamyonlarda çok sayıda tekerlek, devenin geniş tabanlı ayakları, sırt çantalarının geniş askıları, binaların geniş temeli.</li>
</ul>

<h3>3. Sıvı Basıncı</h3>
<div class="two">
<div class="fig"><svg viewBox="0 0 230 180" width="230" role="img" aria-label="Farklı derinlikteki deliklerden fışkıran su">
<rect x="20" y="20" width="70" height="140" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/><line x1="20" y1="30" x2="90" y2="30" stroke="#1d4ed8"/>
<g fill="none" stroke="#2563eb" stroke-width="3"><path d="M90,60 Q110,60 125,160"/><path d="M90,100 Q130,100 160,160"/><path d="M90,140 Q150,140 205,160"/></g>
<g font-size="11"><text x="28" y="64">sığ</text><text x="28" y="104">orta</text><text x="28" y="144">derin</text></g>
<line x1="5" y1="160" x2="225" y2="160" stroke="#78716c" stroke-width="2"/>
</svg><figcaption>Derinlik arttıkça sıvı basıncı artar.</figcaption></div>
<div class="fig"><svg viewBox="0 0 260 150" width="260" role="img" aria-label="Farklı şekilli kaplar aynı sıvı yüksekliği">
<g stroke="#1e3a8a" stroke-width="2" fill="#bfdbfe"><polygon points="15,120 75,120 60,40 30,40"/><rect x="100" y="40" width="60" height="80"/><polygon points="185,120 245,120 255,40 175,40"/></g>
<line x1="5" y1="40" x2="255" y2="40" stroke="#dc2626" stroke-dasharray="5 4"/>
<text x="130" y="140" font-size="11" text-anchor="middle">Sıvı yüksekliği eşit → taban basınçları eşit</text>
</svg></div>
</div>
<ul>
<li>Sıvı basıncı <b>derinliğe (h)</b> ve <b>sıvının yoğunluğuna (d)</b> bağlıdır: d ve h arttıkça basınç artar.</li>
<li>Kabın şekline, genişliğine ve sıvı miktarına <b>bağlı değildir</b>. Sıvı yüksekliği aynı olan aynı sıvıların taban basınçları eşittir.</li>
<li>Sıvılar, aynı derinlikte <b>her yöne eşit</b> basınç uygular; kapalı kaptaki sıvıya uygulanan basıncı <b>her yöne aynen iletir</b> (Pascal prensibi). Uygulamaları: hidrolik fren, hidrolik kriko, berber koltuğu, iş makineleri.</li>
<li>Örnekler: Barajların tabana doğru kalınlaşması, dalgıçların özel kıyafet giymesi, derin deniz balıklarının yüzeye çıkınca zarar görmesi, su depolarının yüksek yerlere yapılması.</li>
</ul>
<div class="note"><b>Sık hata:</b> Hidrolik sistemde basınç büyümez, <b>aynen iletilir</b>. Büyük pistonda büyüyen şey <b>kuvvettir</b>, çünkü aynı basınç daha büyük yüzeye etki eder.</div>

<h3>4. Gaz Basıncı ve Açık Hava Basıncı</h3>
<div class="two">
<div class="fig"><svg viewBox="0 0 200 190" width="190" role="img" aria-label="Torricelli deneyi">
<rect x="30" y="140" width="140" height="35" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
<rect x="88" y="20" width="24" height="150" fill="#fff" stroke="#334155" stroke-width="2"/><rect x="90" y="60" width="20" height="110" fill="#94a3b8"/>
<g stroke="#2563eb" stroke-width="2"><line x1="45" y1="110" x2="45" y2="135"/><line x1="155" y1="110" x2="155" y2="135"/></g>
<g font-size="11"><text x="118" y="64">cıva</text><text x="118" y="105">76 cm</text><text x="20" y="104">hava</text><text x="40" y="186">Deniz seviyesi, 0 °C</text></g>
<line x1="125" y1="60" x2="125" y2="140" stroke="#dc2626" stroke-dasharray="3 2"/>
</svg></div>
<div class="fig"><svg viewBox="0 0 270 190" width="260" role="img" aria-label="Yükseklik arttıkça hava basıncı azalır">
<polygon points="10,180 120,30 230,180" fill="#a3a3a3" stroke="#525252"/><polygon points="95,64 120,30 145,64 132,58 120,66 108,58" fill="#fff"/>
<g font-size="11"><text x="150" y="50">Basınç az</text><text x="150" y="63">Su &lt; 100 °C’de kaynar</text><text x="5" y="160">Basınç fazla</text></g>
<g fill="#2563eb"><circle cx="30" cy="120" r="2"/><circle cx="40" cy="128" r="2"/><circle cx="25" cy="135" r="2"/><circle cx="45" cy="112" r="2"/><circle cx="35" cy="105" r="2"/><circle cx="20" cy="115" r="2"/><circle cx="180" cy="20" r="2"/><circle cx="205" cy="35" r="2"/></g>
</svg></div>
</div>
<ul>
<li>Gaz tanecikleri bulundukları kabın çeperlerine her yönde çarparak <b>gaz basıncı</b> oluşturur. Kapalı kapta tanecik sayısı veya sıcaklık artarsa basınç artar (sıcakta lastiklerin şişmesi).</li>
<li>Atmosferin yeryüzüne uyguladığı basınca <b>açık hava basıncı</b> denir. <b>Torricelli</b> ilk kez ölçmüştür: Deniz seviyesinde 76 cm-Hg = 1 atm. Ölçen alet <b>barometre</b>dir.</li>
<li>Yükseklik arttıkça açık hava basıncı <b>azalır</b>; suyun kaynama sıcaklığı düşer (dağda yemek geç pişer), kapalı plastik şişeler şişer, kulak tıkanır. Cıva yüksekliği borunun kesitine bağlı değildir.</li>
<li>Açık hava basıncı uygulamaları: pipetle içecek içme, vantuz, enjektörle ilaç çekme, damlalık, kapağı kapalı deliği şişeden suyun akmaması.</li>
</ul>
`,
qs: [
{ q: `<p>Boyutları 5 cm × 10 cm × 20 cm olan 40 N ağırlığındaki bir tuğla, yatay zemine şekildeki K, L ve M durumlarında konuluyor.</p>
<svg viewBox="0 0 420 200" width="400" role="img" aria-label="Tuğlanın üç farklı duruşu">
<line x1="5" y1="160" x2="415" y2="160" stroke="#78716c" stroke-width="3"/>
<g stroke="#7c2d12" stroke-width="1.5">
<rect x="20" y="60" width="50" height="100" fill="#f97316"/><polygon points="20,60 32,48 82,48 70,60" fill="#fdba74"/><polygon points="70,60 82,48 82,148 70,160" fill="#c2410c"/>
<rect x="120" y="135" width="100" height="25" fill="#f97316"/><polygon points="120,135 144,111 244,111 220,135" fill="#fdba74"/><polygon points="220,135 244,111 244,136 220,160" fill="#c2410c"/>
<rect x="280" y="110" width="100" height="50" fill="#f97316"/><polygon points="280,110 292,98 392,98 380,110" fill="#fdba74"/><polygon points="380,110 392,98 392,148 380,160" fill="#c2410c"/></g>
<g font-size="10"><text x="30" y="175">10 cm</text><text x="0" y="115">20</text><text x="80" y="58">5</text>
<text x="155" y="175">20 cm</text><text x="104" y="152">5</text><text x="235" y="128">10</text>
<text x="315" y="175">20 cm</text><text x="262" y="140">10</text><text x="390" y="110">5</text></g>
<g font-size="14" font-weight="bold" text-anchor="middle"><text x="50" y="195">K</text><text x="175" y="195">L</text><text x="335" y="195">M</text></g>
</svg>
<p>Tuğlanın K, L ve M durumlarında zemine uyguladığı basınçlar sırasıyla P<sub>K</sub>, P<sub>L</sub> ve P<sub>M</sub> olduğuna göre bunlar arasındaki ilişki aşağıdakilerden hangisidir?</p>`,
  c: [`P<sub>K</sub> &gt; P<sub>M</sub> &gt; P<sub>L</sub>`, `P<sub>L</sub> &gt; P<sub>M</sub> &gt; P<sub>K</sub>`, `P<sub>K</sub> = P<sub>L</sub> = P<sub>M</sub>`, `P<sub>M</sub> &gt; P<sub>K</sub> &gt; P<sub>L</sub>`], a: "A",
  s: `<p>Ağırlık her durumda 40 N’dur; basıncı yalnızca zemine değen yüzeyin alanı belirler.</p><p>K: 10 × 5 = 50 cm² → 40 / 50 = 0,8 N/cm². L: 20 × 10 = 200 cm² → 0,2 N/cm². M: 20 × 5 = 100 cm² → 0,4 N/cm².</p><p>Yüzey alanı küçüldükçe basınç artar: P<sub>K</sub> &gt; P<sub>M</sub> &gt; P<sub>L</sub>. Cevap <b>A</b>.</p>` },
{ q: `<p>Özdeş tuğlalar yatay zemine I, II ve III’teki gibi yerleştiriliyor.</p>
<svg viewBox="0 0 450 150" width="430" role="img" aria-label="Özdeş tuğlaların üç yerleşimi">
<line x1="5" y1="120" x2="445" y2="120" stroke="#78716c" stroke-width="3"/>
<g fill="#f97316" stroke="#7c2d12" stroke-width="1.5"><rect x="30" y="95" width="80" height="25"/><rect x="180" y="95" width="80" height="25"/><rect x="180" y="70" width="80" height="25"/><rect x="280" y="95" width="80" height="25"/><rect x="360" y="95" width="80" height="25"/></g>
<g font-size="14" font-weight="bold" text-anchor="middle"><text x="70" y="142">I</text><text x="220" y="142">II</text><text x="360" y="142">III</text></g>
</svg>
<p>I’de tek tuğla, II’de üst üste iki tuğla, III’te yan yana iki tuğla bulunmaktadır. Tuğlaların zemine uyguladığı basınçlar P<sub>I</sub>, P<sub>II</sub> ve P<sub>III</sub> olduğuna göre bunlar arasındaki ilişki nedir?</p>`,
  c: [`P<sub>I</sub> = P<sub>II</sub> = P<sub>III</sub>`, `P<sub>III</sub> &gt; P<sub>II</sub> &gt; P<sub>I</sub>`, `P<sub>II</sub> = P<sub>III</sub> &gt; P<sub>I</sub>`, `P<sub>II</sub> &gt; P<sub>I</sub> = P<sub>III</sub>`], a: "D",
  s: `<p>Bir tuğlanın ağırlığı G, zemine değen yüzeyi S olsun. I: P = G / S.</p><p>II: Ağırlık 2G, yüzey yine S → P = 2G / S (iki katı). III: Ağırlık 2G, yüzey 2S → P = G / S (I ile aynı).</p><p>Sonuç: P<sub>II</sub> &gt; P<sub>I</sub> = P<sub>III</sub>. Cevap <b>D</b>.</p>` },
{ q: `<p>Bir öğrenci aşağıdaki örneklerde katı basıncının artırılmasının mı yoksa azaltılmasının mı amaçlandığını tabloya işaretlemiştir.</p>
<table class="rt"><tr><th>Örnek</th><th>Basıncı artırma</th><th>Basıncı azaltma</th></tr>
<tr><td>1. Karda yürümek için kar ayakkabısı giyilmesi</td><td></td><td>✓</td></tr>
<tr><td>2. Bıçağın bilenmesi</td><td>✓</td><td></td></tr>
<tr><td>3. İş makinelerinde tekerlek yerine palet kullanılması</td><td>✓</td><td></td></tr>
<tr><td>4. Çivinin ucunun sivri yapılması</td><td>✓</td><td></td></tr>
<tr><td>5. Ağır yük taşıyan kamyonlarda çok sayıda tekerlek bulunması</td><td>✓</td><td></td></tr></table>
<p>Buna göre öğrenci kaç örneği <b>doğru</b> işaretlemiştir?</p>`,
  c: [`2`, `3`, `4`, `5`], a: "B",
  s: `<p>Yüzey alanını <b>küçültmek</b> basıncı artırır, <b>büyütmek</b> basıncı azaltır.</p><p>1. Kar ayakkabısı yüzeyi büyütür → azaltma ✓. 2. Bilenen bıçağın ağzı incelir → artırma ✓. 3. Palet yüzeyi büyütür → azaltma; öğrenci artırma demiş ✗. 4. Sivri uç → artırma ✓. 5. Çok tekerlek yüzeyi büyütür → azaltma; öğrenci artırma demiş ✗.</p><p>Doğru işaretleme sayısı <b>3</b>’tür. Cevap <b>B</b>.</p>` },
{ q: `<p>Su dolu bir kabın yan yüzeyinde farklı derinliklerde açılmış K, L ve M delikleri bulunmaktadır. Delikler aynı anda açıldığında sular şekildeki gibi fışkırmaktadır.</p>
<svg viewBox="0 0 260 190" width="240" role="img" aria-label="Deliklerden fışkıran su">
<rect x="20" y="20" width="80" height="150" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<g fill="none" stroke="#2563eb" stroke-width="3"><path d="M100,60 Q118,60 135,170"/><path d="M100,105 Q140,105 172,170"/><path d="M100,145 Q160,145 230,170"/></g>
<g font-size="13" font-weight="bold"><text x="4" y="64">K</text><text x="4" y="109">L</text><text x="4" y="149">M</text></g>
<line x1="5" y1="170" x2="255" y2="170" stroke="#78716c" stroke-width="2"/>
</svg>
<p>Buna göre,</p><p>I. Sıvı basıncı derinlik arttıkça artar.<br>II. Kaptaki su yerine aynı yükseklikte zeytinyağı konulursa M deliğinden çıkan sıvının basıncı artar.<br>III. Sıvılar bulundukları kabın yan yüzeylerine de basınç uygular.</p><p>yargılarından hangileri doğrudur? (Zeytinyağının yoğunluğu sudan küçüktür.)</p>`,
  c: [`Yalnız I`, `I ve III`, `II ve III`, `I, II ve III`], a: "B",
  s: `<p>En derindeki M deliğinden su en uzağa fışkırmıştır; derinlik arttıkça sıvı basıncı artar (I ✓). Su yan yüzeydeki deliklerden dışarı itildiğine göre sıvı, kabın yan yüzeylerine de basınç uygular (III ✓).</p><p>Sıvı basıncı yoğunlukla doğru orantılıdır. Yoğunluğu sudan küçük zeytinyağı konulursa aynı derinlikteki basınç <b>azalır</b> (II ✗). Cevap <b>B</b>.</p>` },
{ q: `<p>Taban alanları eşit, şekilleri farklı K, L ve M kaplarına aynı sıvıdan şekildeki gibi eşit yükseklikte konulmuştur.</p>
<svg viewBox="0 0 330 160" width="320" role="img" aria-label="Farklı şekilli üç kap">
<g stroke="#1e3a8a" stroke-width="2"><polygon points="20,130 80,130 65,30 35,30" fill="#fff"/><polygon points="20,130 80,130 68,50 32,50" fill="#bfdbfe"/>
<rect x="135" y="30" width="60" height="100" fill="#fff"/><rect x="135" y="50" width="60" height="80" fill="#bfdbfe"/>
<polygon points="250,130 310,130 325,30 235,30" fill="#fff"/><polygon points="250,130 310,130 322,50 238,50" fill="#bfdbfe"/></g>
<line x1="5" y1="50" x2="330" y2="50" stroke="#dc2626" stroke-dasharray="5 4"/>
<g font-size="14" font-weight="bold" text-anchor="middle"><text x="50" y="152">K</text><text x="165" y="152">L</text><text x="280" y="152">M</text></g>
</svg>
<p>Kapların tabanlarına etki eden sıvı basınçları P<sub>K</sub>, P<sub>L</sub> ve P<sub>M</sub> arasındaki ilişki aşağıdakilerden hangisidir?</p>`,
  c: [`P<sub>M</sub> &gt; P<sub>L</sub> &gt; P<sub>K</sub>`, `P<sub>K</sub> &gt; P<sub>L</sub> &gt; P<sub>M</sub>`, `P<sub>K</sub> = P<sub>L</sub> = P<sub>M</sub>`, `P<sub>L</sub> &gt; P<sub>K</sub> = P<sub>M</sub>`], a: "C",
  s: `<p>Sıvı basıncı yalnızca sıvının <b>yoğunluğuna</b> ve <b>derinliğe</b> bağlıdır; kabın şekline ve sıvının miktarına bağlı değildir.</p><p>Üç kapta da aynı sıvı aynı yükseklikte olduğundan taban basınçları eşittir: P<sub>K</sub> = P<sub>L</sub> = P<sub>M</sub>. (M’de daha fazla sıvı olması basıncı değiştirmez.) Cevap <b>C</b>.</p>` },
{ q: `<p>Özdeş K, L ve M kaplarına aşağıdaki tabloda verilen sıvılar belirtilen yüksekliklerde konuluyor.</p>
<table class="rt"><tr><th>Kap</th><th>Sıvı</th><th>Yoğunluk (g/cm³)</th><th>Sıvı yüksekliği (cm)</th></tr><tr><td>K</td><td>Su</td><td>1</td><td>20</td></tr><tr><td>L</td><td>Tuzlu su</td><td>1,2</td><td>15</td></tr><tr><td>M</td><td>Sıvı yağ</td><td>0,8</td><td>25</td></tr></table>
<p>Kapların tabanlarındaki sıvı basınçları P<sub>K</sub>, P<sub>L</sub> ve P<sub>M</sub> arasındaki ilişki aşağıdakilerden hangisidir?</p>`,
  c: [`P<sub>K</sub> = P<sub>M</sub> &gt; P<sub>L</sub>`, `P<sub>L</sub> &gt; P<sub>K</sub> &gt; P<sub>M</sub>`, `P<sub>M</sub> &gt; P<sub>K</sub> &gt; P<sub>L</sub>`, `P<sub>K</sub> = P<sub>L</sub> = P<sub>M</sub>`], a: "A",
  s: `<p>Sıvı basıncı, yoğunluk ile derinliğin çarpımıyla orantılıdır.</p><p>K: 1 × 20 = 20 · L: 1,2 × 15 = 18 · M: 0,8 × 25 = 20.</p><p>Buna göre P<sub>K</sub> = P<sub>M</sub> &gt; P<sub>L</sub>. Yalnızca yoğunluğa ya da yalnızca yüksekliğe bakmak yanlış sonuç verir. Cevap <b>A</b>.</p>` },
{ q: `<p>Birbirine karışmayan X, Y ve Z sıvılarında derinliğe bağlı sıvı basıncı ölçülerek aşağıdaki grafik çiziliyor.</p>
<svg viewBox="0 0 300 200" width="280" role="img" aria-label="Basınç derinlik grafiği">
<line x1="40" y1="170" x2="290" y2="170" stroke="#333"/><line x1="40" y1="10" x2="40" y2="170" stroke="#333"/>
<g stroke-width="2.5"><line x1="40" y1="170" x2="200" y2="20" stroke="#dc2626"/><line x1="40" y1="170" x2="270" y2="60" stroke="#2563eb"/><line x1="40" y1="170" x2="280" y2="120" stroke="#16a34a"/></g>
<g font-size="13" font-weight="bold"><text x="205" y="22" fill="#dc2626">X</text><text x="272" y="58" fill="#2563eb">Y</text><text x="282" y="118" fill="#16a34a">Z</text></g>
<g font-size="11"><text x="200" y="188">Derinlik</text><text x="12" y="100" transform="rotate(-90 12 100)" text-anchor="middle">Sıvı basıncı</text></g>
</svg>
<p>Bu sıvılar aynı kaba konulursa kabın en altında ve en üstünde hangi sıvılar bulunur?</p>`,
  c: [`En altta X, en üstte Z`, `En altta Z, en üstte X`, `En altta Y, en üstte Z`, `En altta X, en üstte Y`], a: "A",
  s: `<p>Aynı derinlikte basıncı en büyük olan sıvının yoğunluğu en büyüktür. Grafikte aynı derinlik için basınç sıralaması X &gt; Y &gt; Z olduğundan yoğunluklar da X &gt; Y &gt; Z’dir.</p><p>Birbirine karışmayan sıvılarda yoğunluğu büyük olan alta çöker: en altta <b>X</b>, ortada Y, en üstte <b>Z</b> bulunur. Cevap <b>A</b>.</p>` },
{ q: `<p>Baraj duvarları, tabana doğru gittikçe kalınlaşacak şekilde inşa edilir.</p><p>Aşağıdakilerden hangisi bu durumla <b>aynı bilimsel nedene</b> dayanır?</p>`,
  c: [`Yüksek dağlarda suyun 100 °C’nin altında kaynaması`, `Karda batmamak için kar ayakkabısı kullanılması`, `Dalgıçların derin sulara inerken basınca dayanıklı özel kıyafet giymesi`, `Pipet ile meyve suyu içilebilmesi`], a: "C",
  s: `<p>Baraj duvarının tabanı kalın yapılır, çünkü <b>sıvı basıncı derinlik arttıkça artar</b>; en büyük basınç tabandadır.</p><p>Dalgıçların derine indikçe artan sıvı basıncından korunmak için özel kıyafet giymesi de aynı nedene dayanır. A ve D açık hava (gaz) basıncıyla, B katı basıncıyla ilgilidir. Cevap <b>C</b>.</p>` },
{ q: `<p>Üzerinde eşit büyüklükte çok sayıda delik bulunan içi su dolu bir top, bir pistonlu boruya bağlanmıştır. Piston itildiğinde suyun bütün deliklerden aynı hızla ve her yöne fışkırdığı gözlenmiştir.</p>
<svg viewBox="0 0 300 140" width="280" role="img" aria-label="Pascal topu">
<rect x="10" y="55" width="110" height="30" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/><rect x="20" y="55" width="10" height="30" fill="#64748b"/><line x1="0" y1="70" x2="20" y2="70" stroke="#64748b" stroke-width="5"/>
<circle cx="170" cy="70" r="50" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<g stroke="#2563eb" stroke-width="2.5"><line x1="170" y1="20" x2="170" y2="2"/><line x1="220" y1="70" x2="240" y2="70"/><line x1="170" y1="120" x2="170" y2="138"/><line x1="205" y1="35" x2="220" y2="20"/><line x1="205" y1="105" x2="220" y2="120"/><line x1="135" y1="35" x2="120" y2="20"/><line x1="135" y1="105" x2="120" y2="120"/></g>
<text x="40" y="105" font-size="11">piston</text>
</svg>
<p>Bu deneyde gözlenen özellikten aşağıdakilerin hangisinde yararlanılmaktadır?</p>`,
  c: [`Barometre ile açık hava basıncının ölçülmesi`, `Kesici aletlerin ağız kısımlarının ince yapılması`, `Otomobillerde hidrolik fren sisteminin kullanılması`, `Vantuzun düz yüzeylere yapışması`], a: "C",
  s: `<p>Deney, kapalı kaptaki sıvıya uygulanan basıncın sıvı tarafından <b>her yöne aynen iletildiğini</b> göstermektedir (Pascal prensibi).</p><p>Hidrolik frende pedala basılınca fren sıvısına uygulanan basınç borular aracılığıyla tekerleklerdeki pistonlara iletilir. A ve D açık hava basıncıyla, B katı basıncıyla ilgilidir. Cevap <b>C</b>.</p>` },
{ q: `<p>Tabloda deniz seviyesinden farklı yükseklikteki K, L ve M yerlerinde suyun kaynama sıcaklıkları verilmiştir.</p>
<table class="rt"><tr><th>Yer</th><th>Yükseklik (m)</th><th>Suyun kaynama sıcaklığı (°C)</th></tr><tr><td>K</td><td>0</td><td>100</td></tr><tr><td>L</td><td>2000</td><td>93</td></tr><tr><td>M</td><td>4000</td><td>87</td></tr></table>
<p>Buna göre,</p><p>I. Açık hava basıncı en fazla K’dedir.<br>II. Açık hava basıncı azaldıkça suyun kaynama sıcaklığı düşer.<br>III. Aynı yemek M’de K’ye göre daha kısa sürede pişer.</p><p>yargılarından hangileri doğrudur?</p>`,
  c: [`Yalnız I`, `I ve II`, `II ve III`, `I, II ve III`], a: "B",
  s: `<p>Yükseklik arttıkça hava tabakasının kalınlığı azalır, açık hava basıncı düşer; en büyük basınç deniz seviyesindeki K’dedir (I ✓). Tabloda basınç azaldıkça kaynama sıcaklığı da düşmektedir (II ✓).</p><p>M’de su 87 °C’de kaynar; yemek daha düşük sıcaklıkta piştiği için pişme süresi <b>uzar</b> (III ✗). Bu yüzden yüksek yerlerde düdüklü tencere kullanılır. Cevap <b>B</b>.</p>` },
{ q: `<p>Torricelli deneyi aynı sıcaklıkta K, L ve M yerlerinde yapılıyor ve cam borulardaki cıva yükseklikleri şekildeki gibi ölçülüyor.</p>
<svg viewBox="0 0 330 190" width="310" role="img" aria-label="Üç yerde Torricelli deneyi">
<g stroke="#334155" stroke-width="2"><rect x="15" y="150" width="90" height="30" fill="#cbd5e1"/><rect x="120" y="150" width="90" height="30" fill="#cbd5e1"/><rect x="225" y="150" width="90" height="30" fill="#cbd5e1"/>
<rect x="50" y="20" width="20" height="150" fill="#fff"/><rect x="155" y="20" width="20" height="150" fill="#fff"/><rect x="260" y="20" width="20" height="150" fill="#fff"/></g>
<rect x="52" y="34" width="16" height="136" fill="#94a3b8"/><rect x="157" y="66" width="16" height="104" fill="#94a3b8"/><rect x="262" y="48" width="16" height="122" fill="#94a3b8"/>
<g font-size="11"><text x="74" y="40">76 cm</text><text x="179" y="72">60 cm</text><text x="284" y="54">68 cm</text></g>
<g font-size="14" font-weight="bold" text-anchor="middle"><text x="60" y="15">K</text><text x="165" y="15">L</text><text x="270" y="15">M</text></g>
</svg>
<p>Buna göre aşağıdakilerden hangisi doğrudur?</p>`,
  c: [`K yerinde açık hava basıncı en azdır.`, `K’de daha geniş kesitli bir boru kullanılsaydı cıva yüksekliği artardı.`, `M’de su, L’ye göre daha düşük sıcaklıkta kaynar.`, `Deniz seviyesinden en yüksekte bulunan yer L’dir.`], a: "D",
  s: `<p>Cıva yüksekliği açık hava basıncını gösterir: K (76 cm) &gt; M (68 cm) &gt; L (60 cm). Basınç yükseklik arttıkça azaldığından yükseklik sıralaması L &gt; M &gt; K’dir; en yüksekteki yer <b>L</b>’dir (D ✓).</p><p>A ✗: K’de basınç en fazladır. C ✗: M’de basınç L’den büyük olduğundan su M’de daha <b>yüksek</b> sıcaklıkta kaynar. B ✗: Cıva yüksekliği borunun kesitine bağlı değildir. Cevap <b>D</b>.</p>` },
{ q: `<p>Bir sürücü uzun bir yolculuğa çıkmadan önce soğuk lastiklerin hava basıncını ölçmüş, saatlerce yol yaptıktan sonra ısınan lastiklerde aynı ölçümü tekrarlamıştır. İkinci ölçümde basıncın arttığını görmüştür. (Lastiklerin hacmi değişmemiştir.)</p><p>Bu durumun açıklaması aşağıdakilerden hangisidir?</p>`,
  c: [`Sıcaklık arttığı için hava tanecikleri daha hızlı hareket ederek lastiğin çeperlerine daha sık ve şiddetli çarpmıştır.`, `Lastiğin içindeki hava taneciklerinin sayısı artmıştır.`, `Lastiğin yola uyguladığı katı basıncı lastiğin içine iletilmiştir.`, `Isınan hava taneciklerinin boyutları büyümüştür.`], a: "A",
  s: `<p>Kapalı kaptaki gazın basıncı, taneciklerin kabın çeperlerine çarpmasıyla oluşur. Sıcaklık artınca tanecikler daha hızlı hareket eder; çarpmaların sayısı ve şiddeti artar, basınç yükselir.</p><p>B ✗: Lastiğe hava eklenmemiştir. C ✗: Katılar basıncı yalnızca kuvvet doğrultusunda iletir; bu durumla ilgisi yoktur. D ✗: Isınınca taneciklerin boyutu değil, aralarındaki uzaklık ve hızları artar. Cevap <b>A</b>.</p>` },
{ q: `<p>Bir öğrenci, alt kısmına yakın yerde küçük bir delik bulunan plastik şişeyi suyla dolduruyor. Şişenin kapağı açıkken delikten su aktığını, kapağı sıkıca kapattığında ise suyun kısa bir süre aktıktan sonra durduğunu gözlemliyor.</p><p>Suyun akışının durmasının nedeni aşağıdakilerden hangisidir?</p>`,
  c: [`Kapak kapatılınca suyun yoğunluğunun artması`, `Kapak kapatılınca şişedeki suyun derinliğinin artması`, `Kapak kapatılınca suyun üzerindeki hava basıncının azalması ve dışarıdaki açık hava basıncının deliğe uyguladığı etkinin suyun akışını engellemesi`, `Kapak kapatılınca suyun basıncı her yöne iletmesinin durması`], a: "C",
  s: `<p>Kapak açıkken suyun üst yüzeyine de açık hava basıncı etki eder; su kendi basıncıyla delikten akar.</p><p>Kapak kapatılınca bir miktar su akar, şişenin üst kısmındaki hava genişler ve basıncı <b>azalır</b>. Dışarıdaki açık hava basıncı deliğe etki ederek suyun akışını durdurur. Suyun yoğunluğu değişmez (A ✗), su azaldığı için derinlik artmaz (B ✗), sıvılar basıncı iletmeye devam eder (D ✗). Cevap <b>C</b>.</p>` },
{ q: `<p>Bir öğrenci aynı ağırlıktaki, taban alanları farklı üç cismi aynı kum havuzuna aynı şekilde bırakıyor ve cisimlerin kuma batma derinliklerini ölçüyor.</p>
<table class="rt"><tr><th>Cisim</th><th>Ağırlık (N)</th><th>Taban alanı (cm²)</th><th>Batma derinliği (cm)</th></tr><tr><td>1</td><td>30</td><td>10</td><td>3,0</td></tr><tr><td>2</td><td>30</td><td>20</td><td>1,5</td></tr><tr><td>3</td><td>30</td><td>40</td><td>0,8</td></tr></table>
<p>Bu deneyde bağımsız, bağımlı ve kontrol edilen değişkenler aşağıdakilerin hangisinde doğru verilmiştir?</p>`,
  c: [`Bağımsız: ağırlık — Bağımlı: batma derinliği — Kontrol: taban alanı`, `Bağımsız: batma derinliği — Bağımlı: taban alanı — Kontrol: ağırlık`, `Bağımsız: taban alanı — Bağımlı: ağırlık — Kontrol: batma derinliği`, `Bağımsız: taban alanı — Bağımlı: batma derinliği — Kontrol: ağırlık`], a: "D",
  s: `<p><b>Bağımsız değişken</b>, deneyde araştırmacının bilerek değiştirdiği değişkendir: taban alanı (10, 20, 40 cm²).</p><p><b>Bağımlı değişken</b>, bağımsız değişkene bağlı olarak değişen ve ölçülen sonuçtur: batma derinliği. <b>Kontrol edilen değişken</b>, sabit tutulandır: ağırlık (30 N) ve kum havuzu. Cevap <b>D</b>.</p>` },
{ q: `<p>Ucunda lastik zar bulunan bir huni, içinde renkli su bulunan U borusuna bağlanmıştır. Huni su dolu bir kapta <b>aynı derinlikte</b> tutularak zar sırasıyla yukarı, yana ve aşağı çevrilmiş; her durumda U borusundaki sıvı seviyeleri arasındaki farkın (h) değişmediği görülmüştür.</p>
<svg viewBox="0 0 360 170" width="340" role="img" aria-label="Huni ile sıvı basıncının yönü deneyi">
<rect x="10" y="30" width="200" height="130" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<line x1="10" y1="100" x2="210" y2="100" stroke="#dc2626" stroke-dasharray="4 3"/>
<g fill="#fde68a" stroke="#a16207" stroke-width="2"><polygon points="45,100 65,100 55,85"/><polygon points="100,90 100,110 115,100"/><polygon points="145,100 165,100 155,115"/></g>
<g stroke="#334155" stroke-width="2" fill="none"><path d="M55,85 L55,10 L250,10 L250,140 L300,140 L300,40"/></g>
<rect x="244" y="80" width="12" height="60" fill="#f472b6"/><rect x="294" y="60" width="12" height="80" fill="#f472b6"/>
<line x1="265" y1="60" x2="265" y2="80" stroke="#333"/><text x="270" y="74" font-size="12">h</text>
<text x="70" y="128" font-size="10" fill="#dc2626">aynı derinlik</text>
</svg>
<p>Bu deneyin sonucu aşağıdakilerden hangisidir?</p>`,
  c: [`Sıvı basıncı derinlik arttıkça artar.`, `Sıvı basıncı sıvının yoğunluğuna bağlıdır.`, `Sıvılar, aynı derinlikte her yöne eşit büyüklükte basınç uygular.`, `Sıvı basıncı kabın şekline bağlı değildir.`], a: "C",
  s: `<p>Deneyde değiştirilen tek şey zarın yönüdür; derinlik ve sıvı aynı tutulmuştur. Ölçülen basınç (h) değişmediğine göre sıvı, aynı derinlikte <b>her yöne eşit</b> basınç uygular.</p><p>A, B ve D doğru bilgiler olsa da bu deneyde derinlik, sıvı cinsi ve kap şekli değiştirilmediği için bu deneyin sonucu olamaz. Cevap <b>C</b>.</p>` },
{ q: `<p>Şekildeki hidrolik sistemde küçük pistonun yüzey alanı 10 cm², büyük pistonun yüzey alanı 200 cm²’dir. Küçük pistona 50 N’luk kuvvet uygulanıyor.</p>
<svg viewBox="0 0 340 150" width="320" role="img" aria-label="Hidrolik sistem">
<path d="M30,30 L30,130 L310,130 L310,50 L230,50 L230,110 L70,110 L70,30" fill="#fde68a" stroke="#334155" stroke-width="2"/>
<rect x="30" y="50" width="40" height="12" fill="#64748b"/><rect x="230" y="62" width="80" height="12" fill="#64748b"/>
<line x1="50" y1="15" x2="50" y2="48" stroke="#dc2626" stroke-width="3"/><polygon points="44,40 56,40 50,50" fill="#dc2626"/>
<g font-size="11"><text x="58" y="25">50 N</text><text x="20" y="145">10 cm²</text><text x="245" y="145">200 cm²</text><text x="120" y="125">sıvı</text></g>
</svg>
<p>Bu sistemle ilgili aşağıdaki ifadelerden hangisi <b>yanlıştır</b>?</p>`,
  c: [`Küçük pistona uygulanan basınç 5 N/cm²dir.`, `Sıvı, küçük pistona uygulanan basıncı büyük pistona aynen iletir.`, `Büyük pistona etki eden kuvvet 1000 N olur.`, `Büyük pistona etki eden basınç, küçük pistona uygulanan basınçtan büyüktür.`], a: "D",
  s: `<p>Küçük pistondaki basınç: 50 / 10 = 5 N/cm² (A ✓). Sıvılar basıncı her yöne <b>aynen</b> iletir (B ✓), yani büyük pistona da 5 N/cm² basınç etki eder.</p><p>Büyük pistondaki kuvvet: 5 × 200 = 1000 N (C ✓). Kuvvet büyür ama basınç <b>aynıdır</b>; bu nedenle D yanlıştır. Cevap <b>D</b>.</p>` },
{ q: `<p>Kum üzerine bırakılan K, L ve M kutularının ağırlıkları ve kuma değen yüzeylerinin alanları tabloda verilmiştir.</p>
<table class="rt"><tr><th>Kutu</th><th>Ağırlık (N)</th><th>Taban alanı (cm²)</th></tr><tr><td>K</td><td>60</td><td>20</td></tr><tr><td>L</td><td>90</td><td>45</td></tr><tr><td>M</td><td>40</td><td>10</td></tr></table>
<p>Kutuların kuma batma derinlikleri h<sub>K</sub>, h<sub>L</sub> ve h<sub>M</sub> arasındaki ilişki aşağıdakilerden hangisidir?</p>`,
  c: [`h<sub>L</sub> &gt; h<sub>K</sub> &gt; h<sub>M</sub>`, `h<sub>M</sub> &gt; h<sub>K</sub> &gt; h<sub>L</sub>`, `h<sub>K</sub> &gt; h<sub>M</sub> &gt; h<sub>L</sub>`, `h<sub>K</sub> = h<sub>L</sub> = h<sub>M</sub>`], a: "B",
  s: `<p>Batma derinliği, kuma uygulanan basınçla artar. Basınçlar: K → 60 / 20 = 3 N/cm²; L → 90 / 45 = 2 N/cm²; M → 40 / 10 = 4 N/cm².</p><p>Basınç sıralaması M &gt; K &gt; L olduğundan h<sub>M</sub> &gt; h<sub>K</sub> &gt; h<sub>L</sub>. En ağır kutu (L) en az batar; çünkü yüzeyi de en büyüktür. Cevap <b>B</b>.</p>` },
{ q: `<p>Uçakla yolculuk eden Elif, kalkıştan önce ağzını sıkıca kapattığı yarısı boş plastik su şişesinin yüksek irtifada şiştiğini, iniş sonrasında ise tekrar eski hâline döndüğünü fark etmiştir. (Uçak yükseldikçe kabin içindeki hava basıncı bir miktar azalır.)</p><p>Elif’in gözlemiyle ilgili aşağıdakilerden hangisi doğrudur?</p>`,
  c: [`Yükseklerde kabindeki hava basıncı azaldığı için şişedeki havanın basıncı dışarıdan büyük kalmış ve şişe şişmiştir.`, `Yükseklerde şişedeki su miktarı arttığı için şişe şişmiştir.`, `Yükseklerde şişedeki hava taneciklerinin sayısı arttığı için şişe şişmiştir.`, `İnişte şişedeki havanın basıncı arttığı için şişe eski hâline dönmüştür.`], a: "A",
  s: `<p>Şişe yerde kapatıldığından içindeki hava, yerdeki basınçtadır. Uçak yükseldikçe kabin basıncı azalır; şişenin içindeki hava basıncı dışarıdan büyük kalır ve şişe dışa doğru şişer (A ✓).</p><p>B, C ✗: Şişe kapalı olduğundan su ve hava miktarı değişmez. D ✗: İnişte <b>dışarıdaki</b> (kabin) basınç artar ve şişeyi sıkıştırarak eski hâline getirir. Cevap <b>A</b>.</p>` },
{ q: `<p>Fen bilimleri öğretmeni “Doğru (D) – Yanlış (Y)” etkinliğinde her doğru cevaba 10 puan vermiştir. Bir öğrencinin cevapları aşağıdadır.</p>
<table class="rt"><tr><th>İfade</th><th>Cevap</th></tr>
<tr><td>1. Katılar, üzerlerine uygulanan kuvveti yalnızca kuvvet doğrultusunda iletir.</td><td>D</td></tr>
<tr><td>2. Bir kaptaki sıvının miktarı artırılırsa yüksekliği değişmese bile taban basıncı artar.</td><td>D</td></tr>
<tr><td>3. Deniz seviyesinden yükseldikçe açık hava basıncı azalır.</td><td>D</td></tr>
<tr><td>4. Sivri uçlu raptiyeler, basıncı azaltmak amacıyla tasarlanmıştır.</td><td>D</td></tr></table>
<p>Buna göre öğrenci kaç puan almıştır?</p>`,
  c: [`10`, `20`, `30`, `40`], a: "B",
  s: `<p>1 doğrudur → D ✓. 2 yanlıştır; sıvı basıncı miktara değil yüksekliğe ve yoğunluğa bağlıdır → öğrenci D demiş ✗. 3 doğrudur → D ✓. 4 yanlıştır; sivri uç yüzey alanını küçültüp basıncı <b>artırır</b> → öğrenci D demiş ✗.</p><p>2 doğru × 10 = <b>20 puan</b>. Cevap <b>B</b>.</p>` }
]
});
