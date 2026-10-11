LGS.add({
id: "fen-mevsim",
summary: `
<h3>1. Mevsimler Nasıl Oluşur?</h3>
<p>Mevsimlerin oluşmasının iki nedeni vardır: <b>Dünya’nın dönme ekseninin eğik olması</b> (yörünge düzlemine göre yaklaşık 23° 27′) ve Dünya’nın <b>Güneş etrafında dolanması</b>. Eksen uzayda hep aynı yöne baktığı için yıl boyunca Güneş ışınlarının bir yere geliş açısı değişir.</p>
<div class="fig"><svg viewBox="0 0 520 270" width="520" role="img" aria-label="Dünya'nın Güneş etrafındaki dört konumu ve mevsimler">
<defs><marker id="mvA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#64748b"/></marker></defs>
<ellipse cx="260" cy="130" rx="200" ry="78" fill="none" stroke="#94a3b8" stroke-dasharray="5 4"/>
<path d="M330,203 Q360,199 385,190" fill="none" stroke="#64748b" stroke-width="2" marker-end="url(#mvA)"/>
<circle cx="260" cy="130" r="28" fill="#fbbf24" stroke="#f59e0b" stroke-width="3"/><text x="260" y="134" font-size="11" text-anchor="middle">Güneş</text>
<g stroke="#1e3a8a" stroke-width="1.5">
<circle cx="60" cy="130" r="18" fill="#93c5fd"/><line x1="52" y1="150" x2="68" y2="110"/><line x1="43.3" y1="123.3" x2="76.7" y2="136.7" stroke-dasharray="3 2"/>
<circle cx="460" cy="130" r="18" fill="#93c5fd"/><line x1="452" y1="150" x2="468" y2="110"/><line x1="443.3" y1="123.3" x2="476.7" y2="136.7" stroke-dasharray="3 2"/>
<circle cx="260" cy="208" r="18" fill="#93c5fd"/><line x1="252" y1="228" x2="268" y2="188"/><line x1="243.3" y1="201.3" x2="276.7" y2="214.7" stroke-dasharray="3 2"/>
<circle cx="260" cy="52" r="18" fill="#93c5fd"/><line x1="252" y1="72" x2="268" y2="32"/><line x1="243.3" y1="45.3" x2="276.7" y2="58.7" stroke-dasharray="3 2"/>
</g>
<g fill="#dc2626"><circle cx="68" cy="110" r="3.5"/><circle cx="468" cy="110" r="3.5"/><circle cx="268" cy="188" r="3.5"/><circle cx="268" cy="32" r="3.5"/></g>
<g font-size="11" text-anchor="middle">
<text x="60" y="172" font-weight="bold">21 Haziran</text><text x="60" y="186">KYK: yaz başlar</text><text x="60" y="200">GYK: kış başlar</text>
<text x="460" y="172" font-weight="bold">21 Aralık</text><text x="460" y="186">KYK: kış başlar</text><text x="460" y="200">GYK: yaz başlar</text>
</g>
<g font-size="11">
<text x="285" y="236" font-weight="bold">23 Eylül</text><text x="285" y="250">KYK: sonbahar · GYK: ilkbahar</text>
<text x="285" y="22" font-weight="bold">21 Mart</text><text x="350" y="22">KYK: ilkbahar · GYK: sonbahar</text>
</g>
<circle cx="20" cy="256" r="3.5" fill="#dc2626"/><text x="28" y="260" font-size="10">Kuzey Kutbu (eksen hep aynı yöne eğik)</text>
</svg><figcaption>KYK: Kuzey Yarım Küre · GYK: Güney Yarım Küre. Kesikli çizgi Ekvator’dur.</figcaption></div>
<div class="note"><b>Dikkat:</b> Mevsimlerin nedeni Dünya’nın Güneş’e yaklaşıp uzaklaşması <b>değildir</b>. Dünya Güneş’e en çok ocak başında yaklaşır; o sırada Türkiye’de kış yaşanır.</div>

<h3>2. Işınların Geliş Açısı ve Enerji</h3>
<div class="two">
<div class="fig"><svg viewBox="0 0 500 160" width="500" role="img" aria-label="Dik ve eğik gelen ışınlar">
<g stroke="#f59e0b" stroke-width="2.5"><line x1="100" y1="20" x2="100" y2="120"/><line x1="115" y1="20" x2="115" y2="120"/><line x1="130" y1="20" x2="130" y2="120"/>
<line x1="300" y1="30" x2="420" y2="120"/><line x1="325" y1="30" x2="445" y2="120"/><line x1="350" y1="30" x2="470" y2="120"/></g>
<line x1="20" y1="120" x2="230" y2="120" stroke="#78716c" stroke-width="3"/><line x1="270" y1="120" x2="490" y2="120" stroke="#78716c" stroke-width="3"/>
<line x1="100" y1="120" x2="130" y2="120" stroke="#dc2626" stroke-width="7"/><line x1="420" y1="120" x2="470" y2="120" stroke="#fb923c" stroke-width="7"/>
<g font-size="12" text-anchor="middle"><text x="115" y="142">Dik ışın: dar alan</text><text x="115" y="156">birim alana düşen enerji FAZLA</text><text x="400" y="142">Eğik ışın: geniş alan</text><text x="400" y="156">birim alana düşen enerji AZ</text></g>
</svg></div>
</div>
<ul>
<li>Işınlar ne kadar <b>dik</b> gelirse birim yüzeye düşen enerji o kadar <b>fazla</b>, sıcaklık o kadar yüksek, cisimlerin öğle vakti <b>gölge boyu</b> o kadar <b>kısa</b> olur.</li>
<li>Güneş ışınları yalnızca <b>Yengeç Dönencesi (23° 27′ K)</b> ile <b>Oğlak Dönencesi (23° 27′ G)</b> arasındaki yerlere dik gelebilir. Türkiye (36°–42° K) bu kuşağın dışında olduğu için Türkiye’ye ışınlar <b>hiçbir zaman dik gelmez</b>.</li>
<li>Ekvator’dan kutuplara doğru ışınlar genel olarak eğikleşir; bu yüzden kutuplar soğuktur.</li>
</ul>
<div class="fig"><svg viewBox="0 0 420 250" width="400" role="img" aria-label="Dünya üzerindeki önemli paraleller">
<circle cx="130" cy="130" r="100" fill="none" stroke="#1e3a8a" stroke-width="2"/>
<rect x="38.3" y="90.1" width="183.4" height="79.8" fill="#fde68a"/>
<g stroke="#1e3a8a"><line x1="30" y1="130" x2="230" y2="130" stroke-width="2"/><line x1="38.3" y1="90.1" x2="221.7" y2="90.1" stroke-dasharray="5 3"/><line x1="38.3" y1="169.9" x2="221.7" y2="169.9" stroke-dasharray="5 3"/><line x1="90.1" y1="38.3" x2="169.9" y2="38.3" stroke-dasharray="2 3"/><line x1="90.1" y1="221.7" x2="169.9" y2="221.7" stroke-dasharray="2 3"/></g>
<rect x="160" y="63" width="34" height="8" fill="#dc2626"/>
<g font-size="12"><text x="240" y="42">Kuzey Kutup Dairesi (66° 33′ K)</text><text x="240" y="70" fill="#dc2626">Türkiye (36°–42° K)</text><text x="240" y="94">Yengeç Dönencesi (23° 27′ K)</text><text x="240" y="134" font-weight="bold">Ekvator (0°)</text><text x="240" y="174">Oğlak Dönencesi (23° 27′ G)</text><text x="240" y="226">Güney Kutup Dairesi (66° 33′ G)</text></g>
<text x="130" y="248" font-size="11" text-anchor="middle">Sarı kuşak: ışınların dik gelebildiği alan</text>
</svg></div>

<h3>3. Önemli Tarihler</h3>
<table class="rt"><tr><th>Tarih</th><th>Işınların dik geldiği yer</th><th>Kuzey Yarım Küre</th><th>Güney Yarım Küre</th></tr>
<tr><td>21 Mart</td><td>Ekvator</td><td>İlkbahar başlar</td><td>Sonbahar başlar</td></tr>
<tr><td>21 Haziran</td><td>Yengeç Dönencesi</td><td>Yaz başlar; <b>en uzun gündüz</b></td><td>Kış başlar; en uzun gece</td></tr>
<tr><td>23 Eylül</td><td>Ekvator</td><td>Sonbahar başlar</td><td>İlkbahar başlar</td></tr>
<tr><td>21 Aralık</td><td>Oğlak Dönencesi</td><td>Kış başlar; <b>en uzun gece</b></td><td>Yaz başlar; en uzun gündüz</td></tr></table>
<ul>
<li><b>21 Mart ve 23 Eylül</b>’de (ekinoks) Dünya’nın her yerinde gece ve gündüz eşittir (12’şer saat).</li>
<li>21 Mart → 21 Haziran: KYK’de gündüzler uzar. 21 Haziran → 21 Aralık: KYK’de gündüzler kısalır. GYK’de her şey tersidir.</li>
<li>Bir yarım kürede yaz yaşanırken diğerinde kış yaşanır; aynı tarihte <b>aynı mevsimi</b> yaşayan iki şehir aynı yarım kürededir.</li>
<li><b>Ekvator</b>’da yıl boyu gece = gündüz. 21 Haziran’da Kuzey Kutup bölgesinde 24 saat gündüz, Güney Kutup bölgesinde 24 saat gece yaşanır.</li>
<li>Eksen eğik olmasaydı: mevsimler oluşmaz, her yerde yıl boyunca gece = gündüz olur, ışınlar hep Ekvator’a dik gelirdi. (Gece–gündüz yine oluşurdu, çünkü bunun nedeni Dünya’nın kendi ekseni etrafında dönmesidir.)</li>
</ul>

<h3>4. Hava Olayları ve İklim</h3>
<table class="rt"><tr><th></th><th>Hava olayları</th><th>İklim</th></tr>
<tr><td>Süre</td><td>Kısa (saat, gün, hafta)</td><td>Uzun (en az 30–35 yıllık ortalama)</td></tr>
<tr><td>Alan</td><td>Dar bölge</td><td>Geniş bölge</td></tr>
<tr><td>Değişkenlik</td><td>Kısa sürede değişebilir</td><td>Kolay değişmez</td></tr>
<tr><td>İnceleyen bilim / uzman</td><td>Meteoroloji / meteorolog</td><td>Klimatoloji (iklim bilimi) / klimatolog</td></tr>
<tr><td>Örnek</td><td>“Yarın Ankara’da kar bekleniyor.”</td><td>“Akdeniz’de yazlar sıcak ve kurak geçer.”</td></tr></table>

<h3>5. Rüzgârın Oluşumu</h3>
<div class="two">
<div class="fig"><svg viewBox="0 0 250 160" width="250" role="img" aria-label="Gündüz deniz meltemi">
<defs><marker id="mvB" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d4ed8"/></marker></defs>
<rect x="0" y="120" width="125" height="40" fill="#a16207"/><rect x="125" y="125" width="125" height="35" fill="#60a5fa"/>
<circle cx="35" cy="25" r="14" fill="#fbbf24"/>
<g stroke="#1d4ed8" stroke-width="2.5" fill="none" marker-end="url(#mvB)"><path d="M190,110 L80,110"/><path d="M60,105 L60,55"/><path d="M80,45 L180,45"/><path d="M200,55 L200,100"/></g>
<g font-size="11" font-weight="bold"><text x="40" y="140" fill="#fff">KARA (sıcak)</text><text x="150" y="146" fill="#fff">DENİZ (serin)</text><text x="70" y="95">AB</text><text x="208" y="95">YB</text></g>
</svg><figcaption>Gündüz: kara hızlı ısınır → rüzgâr denizden karaya</figcaption></div>
<div class="fig"><svg viewBox="0 0 250 160" width="250" role="img" aria-label="Gece kara meltemi">
<defs><marker id="mvC" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d4ed8"/></marker></defs>
<rect x="0" y="120" width="125" height="40" fill="#a16207"/><rect x="125" y="125" width="125" height="35" fill="#60a5fa"/>
<circle cx="35" cy="25" r="12" fill="#e5e7eb" stroke="#6b7280"/>
<g stroke="#1d4ed8" stroke-width="2.5" fill="none" marker-end="url(#mvC)"><path d="M70,110 L180,110"/><path d="M200,105 L200,55"/><path d="M180,45 L80,45"/><path d="M60,55 L60,100"/></g>
<g font-size="11" font-weight="bold"><text x="30" y="140" fill="#fff">KARA (soğuk)</text><text x="150" y="146" fill="#fff">DENİZ (ılık)</text><text x="70" y="95">YB</text><text x="208" y="95">AB</text></g>
</svg><figcaption>Gece: kara hızlı soğur → rüzgâr karadan denize</figcaption></div>
</div>
<ul>
<li>Isınan hava genleşir, hafifler ve <b>yükselir</b> → yerde <b>alçak basınç (AB)</b>. Soğuyan hava ağırlaşır ve <b>alçalır</b> → yerde <b>yüksek basınç (YB)</b>.</li>
<li><b>Rüzgâr</b>, yüksek basınç alanından alçak basınç alanına doğru yatay hava hareketidir. Basınç farkı arttıkça rüzgârın hızı artar.</li>
<li><b>Küresel iklim değişikliği:</b> Fosil yakıtlar, ormansızlaşma ve sanayi nedeniyle sera gazları (CO₂, metan) artar → küresel ısınma → buzulların erimesi, deniz seviyesinin yükselmesi, kuraklık, aşırı hava olayları, canlı türlerinin azalması.</li>
</ul>
`,
qs: [
{ q: `<p>Aşağıdaki tabloda Dünya’nın Güneş’e olan yaklaşık uzaklığı ile Ankara’nın aylık ortalama sıcaklığı iki farklı tarih için verilmiştir.</p>
<table class="rt"><tr><th>Tarih</th><th>Dünya–Güneş uzaklığı</th><th>Ankara’da ortalama sıcaklık</th></tr><tr><td>Ocak başı</td><td>≈ 147 milyon km</td><td>≈ 0 °C</td></tr><tr><td>Temmuz başı</td><td>≈ 152 milyon km</td><td>≈ 23 °C</td></tr></table>
<p>Tablodaki verilere göre aşağıdaki çıkarımlardan hangisi yapılabilir?</p>`,
  c: [`Dünya Güneş’e yaklaştıkça Kuzey Yarım Küre’de sıcaklıklar artar.`, `Mevsimlerin oluşmasında Dünya’nın Güneş’e olan uzaklığı belirleyici etken değildir.`, `Ocak ayında Güney Yarım Küre’de kış mevsimi yaşanır.`, `Dünya’nın Güneş’e olan uzaklığı yıl boyunca değişmez.`], a: "B",
  s: `<p>Tabloya göre Dünya ocak başında Güneş’e daha <b>yakın</b> olduğu hâlde Ankara’da (Kuzey Yarım Küre) sıcaklık düşüktür; temmuzda daha <b>uzak</b> olduğu hâlde sıcaklık yüksektir. Demek ki mevsimleri belirleyen uzaklık değildir; asıl neden eksen eğikliği ve dolanmadır.</p><p>A: Tablo bunun tersini gösterir. C: Tabloda Güney Yarım Küre ile ilgili veri yoktur (ayrıca ocakta orada yaz yaşanır). D: Uzaklıklar 147 ve 152 milyon km olarak farklıdır. Cevap <b>B</b>.</p>` },
{ q: `<p>Şekilde Dünya’nın Güneş etrafında dolanırken bulunduğu dört farklı konum (K, L, M, N) ve dolanma yönü gösterilmiştir. Kırmızı nokta Kuzey Kutbu’nu, kesikli çizgi Ekvator’u temsil etmektedir.</p>
<svg viewBox="0 0 480 230" width="460" role="img" aria-label="Dünyanın dört konumu K L M N">
<defs><marker id="mq2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#64748b"/></marker></defs>
<ellipse cx="240" cy="115" rx="190" ry="72" fill="none" stroke="#94a3b8" stroke-dasharray="5 4"/>
<path d="M300,186 Q335,183 365,172" fill="none" stroke="#64748b" stroke-width="2" marker-end="url(#mq2)"/>
<circle cx="240" cy="115" r="26" fill="#fbbf24" stroke="#f59e0b" stroke-width="3"/>
<g stroke="#1e3a8a" stroke-width="1.5"><circle cx="50" cy="115" r="17" fill="#93c5fd"/><line x1="43" y1="134" x2="57" y2="96"/><line x1="34" y1="109" x2="66" y2="121" stroke-dasharray="3 2"/>
<circle cx="240" cy="187" r="17" fill="#93c5fd"/><line x1="233" y1="206" x2="247" y2="168"/><line x1="224" y1="181" x2="256" y2="193" stroke-dasharray="3 2"/>
<circle cx="430" cy="115" r="17" fill="#93c5fd"/><line x1="423" y1="134" x2="437" y2="96"/><line x1="414" y1="109" x2="446" y2="121" stroke-dasharray="3 2"/>
<circle cx="240" cy="43" r="17" fill="#93c5fd"/><line x1="233" y1="62" x2="247" y2="24"/><line x1="224" y1="37" x2="256" y2="49" stroke-dasharray="3 2"/></g>
<g fill="#dc2626"><circle cx="57" cy="96" r="3.5"/><circle cx="247" cy="168" r="3.5"/><circle cx="437" cy="96" r="3.5"/><circle cx="247" cy="24" r="3.5"/></g>
<g font-size="15" font-weight="bold"><text x="18" y="150">K</text><text x="268" y="215">L</text><text x="452" y="150">M</text><text x="268" y="30">N</text></g>
</svg>
<p>Buna göre aşağıdakilerden hangisi doğrudur?</p>`,
  c: [`Dünya K konumundayken Güney Yarım Küre’de yaz mevsimi yaşanır.`, `Dünya N konumundan K konumuna giderken Kuzey Yarım Küre’de gündüzler kısalır.`, `Dünya M konumundayken Kuzey Yarım Küre’de yılın en uzun gündüzü yaşanır.`, `Dünya L konumundayken Güneş ışınları Ekvator’a dik gelir.`], a: "D",
  s: `<p>K konumunda Kuzey Kutbu Güneş’e doğru eğiktir → <b>21 Haziran</b> (KYK’de yaz, GYK’de kış). M konumunda Kuzey Kutbu Güneş’ten uzağa eğiktir → <b>21 Aralık</b>. Dolanma yönüne göre K → L → M → N sırası izlendiği için L = 23 Eylül, N = 21 Mart olur.</p><p>A ✗: K’de GYK’de kış başlar. D ✓: L (23 Eylül) konumunda ışınlar Ekvator’a dik gelir. C ✗: M’de (21 Aralık) KYK’de en uzun gece yaşanır. B ✗: N’den K’ye (21 Mart → 21 Haziran) KYK’de gündüzler uzar. Cevap <b>D</b>.</p>` },
{ q: `<p>Kuzey Yarım Küre’de ve Yengeç Dönencesi’nin kuzeyinde bulunan K, L ve M şehirlerine özdeş çubuklar dik olarak yerleştiriliyor. 21 Haziran günü öğle vakti çubukların gölge boyları ölçülerek aşağıdaki şekil çiziliyor.</p>
<svg viewBox="0 0 420 130" width="400" role="img" aria-label="K L M şehirlerindeki gölge boyları">
<g stroke="#78716c" stroke-width="2"><line x1="10" y1="100" x2="130" y2="100"/><line x1="150" y1="100" x2="270" y2="100"/><line x1="290" y1="100" x2="410" y2="100"/></g>
<g stroke="#1f2937" stroke-width="5"><line x1="25" y1="100" x2="25" y2="40"/><line x1="165" y1="100" x2="165" y2="40"/><line x1="305" y1="100" x2="305" y2="40"/></g>
<g stroke="#475569" stroke-width="7" opacity=".6"><line x1="28" y1="100" x2="124" y2="100"/><line x1="168" y1="100" x2="196" y2="100"/><line x1="308" y1="100" x2="368" y2="100"/></g>
<g font-size="14" font-weight="bold" text-anchor="middle"><text x="70" y="124">K</text><text x="210" y="124">L</text><text x="350" y="124">M</text></g>
</svg>
<p>Buna göre aşağıdakilerden hangisi doğrudur?</p>`,
  c: [`L şehrine Güneş ışınları K şehrine göre daha eğik gelir.`, `Bu tarihte K şehrinde gece süresi gündüz süresinden uzundur.`, `M şehri Ekvator’a K şehrinden daha uzaktır.`, `Bu tarihte birim yüzeye düşen Güneş enerjisi en fazla olan şehir L’dir.`], a: "D",
  s: `<p>Gölge boyu, ışınların geliş açısıyla ilgilidir: Işın ne kadar dik gelirse gölge o kadar kısa olur. Gölge boyları: K &gt; M &gt; L. Buna göre ışınlar en dik L’ye, en eğik K’ye gelir.</p><p>D ✓: Dik gelen ışın birim yüzeye daha fazla enerji bırakır → L. A ✗: L’ye ışınlar daha dik gelir. C ✗: 21 Haziran’da ışınlar Yengeç Dönencesi’ne dik gelir; dönencenin kuzeyindeki şehirlerden gölgesi kısa olan dönenceye, dolayısıyla Ekvator’a daha yakındır → M, K’den Ekvator’a daha yakındır. B ✗: 21 Haziran’da KYK’de gündüzler gecelerden uzundur. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki grafikte X şehrinde ayın 21’inde ölçülen gündüz sürelerinin yıl içindeki değişimi gösterilmiştir.</p>
<svg viewBox="0 0 440 210" width="420" role="img" aria-label="X şehrinin gündüz süresi grafiği">
<line x1="50" y1="170" x2="430" y2="170" stroke="#333"/><line x1="50" y1="10" x2="50" y2="170" stroke="#333"/>
<g font-size="10" text-anchor="end"><text x="45" y="174">8</text><text x="45" y="134">10</text><text x="45" y="94">12</text><text x="45" y="54">14</text><text x="45" y="14">16</text></g>
<g stroke="#e5e7eb"><line x1="50" y1="130" x2="430" y2="130"/><line x1="50" y1="90" x2="430" y2="90"/><line x1="50" y1="50" x2="430" y2="50"/></g>
<polyline fill="none" stroke="#2563eb" stroke-width="2.5" points="70,138 100,118 130,90 160,62 190,44 220,36 250,44 280,62 310,90 340,118 370,138 400,146"/>
<g font-size="10" text-anchor="middle"><text x="70" y="185">Oca</text><text x="100" y="185">Şub</text><text x="130" y="185">Mar</text><text x="160" y="185">Nis</text><text x="190" y="185">May</text><text x="220" y="185">Haz</text><text x="250" y="185">Tem</text><text x="280" y="185">Ağu</text><text x="310" y="185">Eyl</text><text x="340" y="185">Eki</text><text x="370" y="185">Kas</text><text x="400" y="185">Ara</text></g>
<text x="12" y="95" font-size="10" transform="rotate(-90 12 95)" text-anchor="middle">Gündüz süresi (saat)</text>
<text x="240" y="204" font-size="10" text-anchor="middle">Aylar</text>
</svg>
<p>Bu grafiğe göre,</p><p>I. X şehri Kuzey Yarım Küre’dedir.<br>II. X şehrine haziran ayında Güneş ışınları aralık ayına göre daha dik açıyla gelir.<br>III. X şehri Ekvator üzerindedir.</p><p>yargılarından hangileri doğrudur?</p>`,
  c: [`Yalnız I`, `I ve II`, `II ve III`, `I, II ve III`], a: "B",
  s: `<p>Grafikte gündüz süresi haziranda en uzun (≈ 15 saat), aralıkta en kısadır (≈ 9 saat). Haziranda en uzun gündüzün yaşandığı yer <b>Kuzey Yarım Küre</b>’dedir (I ✓).</p><p>Kuzey Yarım Küre’de haziranda yaz yaşanır; ışınlar aralığa göre daha dik gelir (II ✓). Ekvator’da gündüz süresi yıl boyunca 12 saattir; grafikte süre değiştiği için X Ekvator’da değildir (III ✗). Cevap <b>B</b>.</p>` },
{ q: `<p>Bir öğretmen, Dünya üzerindeki üç farklı yeri tarif eden kartlar hazırlamıştır.</p>
<table class="rt"><tr><th>Kart</th><th>Tarif</th></tr><tr><td>1</td><td>Güneş ışınlarının yıl içinde yalnızca 21 Haziran’da dik geldiği yer</td></tr><tr><td>2</td><td>Yıl boyunca gece ve gündüz sürelerinin hep birbirine eşit olduğu yer</td></tr><tr><td>3</td><td>21 Aralık’ta 24 saat boyunca gündüz yaşanan yer</td></tr></table>
<p>Buna göre kartlarda tarif edilen yerler aşağıdakilerin hangisinde doğru verilmiştir?</p>`,
  c: [`1: Yengeç Dönencesi — 2: Ekvator — 3: Güney Kutup bölgesi`, `1: Oğlak Dönencesi — 2: Ekvator — 3: Kuzey Kutup bölgesi`, `1: Yengeç Dönencesi — 2: Oğlak Dönencesi — 3: Güney Kutup bölgesi`, `1: Ekvator — 2: Yengeç Dönencesi — 3: Kuzey Kutup bölgesi`], a: "A",
  s: `<p>1: 21 Haziran’da ışınlar <b>Yengeç Dönencesi</b>’ne dik gelir; dönence üzerine yılda yalnızca bir kez dik gelir.</p><p>2: Gece–gündüz eşitliği yıl boyunca yalnızca <b>Ekvator</b>’da görülür.</p><p>3: 21 Aralık’ta Güney Yarım Küre Güneş’e doğru eğiktir; <b>Güney Kutup bölgesi</b> 24 saat aydınlanır (Kuzey Kutup bölgesinde ise 24 saat gece yaşanır). Cevap <b>A</b>.</p>` },
{ q: `<p>Dünya’nın dönme ekseni eğik olmasaydı, yani eksen yörünge düzlemine dik olsaydı aşağıdakilerden hangisi <b>gerçekleşmezdi</b>?</p>`,
  c: [`Dünya’nın herhangi bir yerinde gece ve gündüzün oluşması`, `Ekvator’un kutup bölgelerinden daha sıcak olması`, `Ankara’da gündüz süresinin yıl içinde değişmesi`, `Dünya’nın Güneş etrafında bir yılda dolanması`], a: "C",
  s: `<p>Eksen eğikliği olmasaydı Güneş ışınları yıl boyunca hep Ekvator’a dik gelir, Dünya’nın her yerinde gece ve gündüz yıl boyunca 12’şer saat olurdu. Bu nedenle Ankara’da gündüz süresi yıl içinde <b>değişmezdi</b> (C).</p><p>A: Gece–gündüz, Dünya’nın kendi ekseni etrafında dönmesiyle oluşur; yine gerçekleşir. B: Işınlar Ekvator’a dik, kutuplara eğik geleceği için Ekvator yine daha sıcak olur. D: Dolanma hareketi eksen eğikliğinden bağımsızdır. Cevap <b>C</b>.</p>` },
{ q: `<p>Bir öğrenci, aynı el fenerini kareli bir kâğıda önce dik, sonra eğik tutarak aynı uzaklıktan ışık düşürüyor. Fenerin aydınlattığı alanları aşağıdaki gibi çiziyor.</p>
<svg viewBox="0 0 420 150" width="400" role="img" aria-label="Dik ve eğik fener deneyi">
<defs><pattern id="grid7" width="12" height="12" patternUnits="userSpaceOnUse"><path d="M12,0 L0,0 0,12" fill="none" stroke="#cbd5e1"/></pattern></defs>
<rect x="10" y="40" width="180" height="96" fill="url(#grid7)" stroke="#94a3b8"/><rect x="230" y="40" width="180" height="96" fill="url(#grid7)" stroke="#94a3b8"/>
<circle cx="100" cy="88" r="24" fill="#fde047" opacity=".85"/><ellipse cx="320" cy="88" rx="52" ry="24" fill="#fef08a" opacity=".85"/>
<g font-size="12" text-anchor="middle"><text x="100" y="28">I. Fener dik</text><text x="320" y="28">II. Fener eğik</text></g>
</svg>
<p>Bu deney aşağıdakilerden hangisini açıklamak için bir model olarak kullanılabilir?</p>`,
  c: [`Dünya’da gece ile gündüzün birbirini izlemesi`, `Ay’ın Dünya’dan farklı şekillerde görülmesi`, `Dünya’nın Güneş’e olan uzaklığının yıl içinde değişmesi`, `Ekvator çevresinin kutup bölgelerinden daha sıcak olması`], a: "D",
  s: `<p>Fener her iki durumda da aynı miktarda ışık enerjisi yaymaktadır. Eğik tutulduğunda bu enerji daha <b>geniş</b> bir alana yayılır; birim alana düşen enerji azalır, aydınlanma zayıflar.</p><p>Dünya’da da Ekvator çevresine ışınlar dik, kutuplara eğik gelir. Bu yüzden Ekvator daha sıcak, kutuplar daha soğuktur. Deney bu durumu modeller. Diğer seçeneklerde ışığın geliş açısı ile ilgili bir durum yoktur. Cevap <b>D</b>.</p>` },
{ q: `<p>Avustralya’nın Sidney şehrinde yaşayan Liam, 25 Aralık’ta ailesiyle plajda yüzerken İngiltere’nin Londra şehrinde yaşayan kuzeni Emma kar topu oynamaktadır.</p><p>Bu durumun temel nedeni aşağıdakilerden hangisidir?</p>`,
  c: [`Aralık ayında Güneş ışınlarının Güney Yarım Küre’ye Kuzey Yarım Küre’ye göre daha dik açıyla gelmesi`, `Aralık ayında Dünya’nın Güneş’e en uzak konumda bulunması`, `Sidney’in Ekvator’a Londra’dan daha uzak olması`, `Aralık ayında Güney Yarım Küre’de gecelerin gündüzlerden uzun olması`], a: "A",
  s: `<p>Sidney Güney Yarım Küre’de, Londra Kuzey Yarım Küre’dedir. 21 Aralık’ta Güneş ışınları Oğlak Dönencesi’ne dik gelir; Güney Yarım Küre’ye ışınlar daha dik açıyla ulaşır, orada <b>yaz</b> yaşanır. Kuzey Yarım Küre’de ise kış yaşanır.</p><p>B ✗: Dünya ocak başında Güneş’e en yakın konumdadır. C ✗: Sidney (≈ 34° G) Ekvator’a Londra’dan (≈ 51° K) daha yakındır. D ✗: Aralıkta Güney Yarım Küre’de gündüzler daha uzundur. Cevap <b>A</b>.</p>` },
{ q: `<p>Bir öğrenci aşağıdaki ifadeleri “hava olayı” ve “iklim” olarak sınıflandırmıştır.</p>
<table class="rt"><tr><th>İfade</th><th>Hava olayı</th><th>İklim</th></tr>
<tr><td>1. Bugün Erzurum’da sıcaklık −15 °C’ye kadar düştü.</td><td></td><td>✓</td></tr>
<tr><td>2. Akdeniz kıyılarında yazlar sıcak ve kurak, kışlar ılık ve yağışlı geçer.</td><td></td><td>✓</td></tr>
<tr><td>3. Hafta sonu Marmara’da kuvvetli lodos bekleniyor.</td><td>✓</td><td></td></tr>
<tr><td>4. Karadeniz Bölgesi’nde her mevsim yağış görülür.</td><td>✓</td><td></td></tr></table>
<p>Buna göre öğrenci kaç ifadeyi <b>doğru</b> sınıflandırmıştır?</p>`,
  c: [`1`, `2`, `3`, `4`], a: "B",
  s: `<p>Kısa süreli ve dar alandaki durumlar <b>hava olayı</b>, uzun yılların ortalamasını yansıtan genel durumlar <b>iklim</b>dir.</p><p>1: “Bugün” → hava olayı; öğrenci iklim demiş ✗. 2: Uzun süreli genel özellik → iklim ✓. 3: “Hafta sonu” → hava olayı ✓. 4: “Her mevsim” genel özellik → iklim; öğrenci hava olayı demiş ✗.</p><p>Doğru sınıflandırma sayısı: <b>2</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Şekilde birbirine komşu K ve L bölgelerinin yer yüzeyine yakın havasının sıcaklıkları verilmiştir.</p>
<svg viewBox="0 0 360 130" width="340" role="img" aria-label="K ve L bölgeleri">
<rect x="10" y="90" width="160" height="30" fill="#fca5a5"/><rect x="190" y="90" width="160" height="30" fill="#93c5fd"/>
<g font-size="14" font-weight="bold" text-anchor="middle"><text x="90" y="110">K</text><text x="270" y="110">L</text></g>
<g font-size="12" text-anchor="middle"><text x="90" y="70">Hava sıcaklığı: 32 °C</text><text x="270" y="70">Hava sıcaklığı: 18 °C</text></g>
</svg>
<p>Bu bölgelerde yer yüzeyine yakın oluşan basınç alanı ve rüzgârın esme yönü ile ilgili hangisi doğrudur?</p>`,
  c: [`K’de alçak basınç alanı oluşur; rüzgâr L’den K’ye eser.`, `K’de alçak basınç alanı oluşur; rüzgâr K’den L’ye eser.`, `K’de yüksek basınç alanı oluşur; rüzgâr L’den K’ye eser.`, `K’de yüksek basınç alanı oluşur; rüzgâr K’den L’ye eser.`], a: "A",
  s: `<p>K bölgesindeki hava daha sıcaktır: Isınan hava genleşip hafifler ve yükselir; yer yüzeyinde <b>alçak basınç</b> alanı oluşur. L’deki soğuk hava ağırlaşıp alçalır; yer yüzeyinde <b>yüksek basınç</b> alanı oluşur.</p><p>Rüzgâr yüksek basınçtan alçak basınca doğru eser: <b>L’den K’ye</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>Şekilde bir kıyı bölgesinde gece saatlerinde oluşan hava hareketleri oklarla gösterilmiştir.</p>
<svg viewBox="0 0 300 160" width="300" role="img" aria-label="Gece kıyıda hava hareketleri">
<defs><marker id="mq13" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d4ed8"/></marker></defs>
<rect x="0" y="120" width="150" height="40" fill="#a16207"/><rect x="150" y="125" width="150" height="35" fill="#60a5fa"/>
<circle cx="260" cy="25" r="12" fill="#e5e7eb" stroke="#6b7280"/>
<g stroke="#1d4ed8" stroke-width="2.5" fill="none" marker-end="url(#mq13)"><path d="M80,110 L210,110"/><path d="M235,105 L235,55"/><path d="M215,45 L95,45"/><path d="M70,55 L70,100"/></g>
<g font-size="12" font-weight="bold" fill="#fff"><text x="50" y="145">Kara</text><text x="200" y="148">Deniz</text></g>
</svg>
<p>Buna göre,</p><p>I. Gece kara üzerindeki hava, deniz üzerindeki havadan daha soğuktur.<br>II. Gece kara üzerinde yüksek basınç alanı oluşur.<br>III. Gündüz saatlerinde de rüzgâr aynı yönde eser.</p><p>yargılarından hangileri doğrudur?</p>`,
  c: [`Yalnız I`, `I ve II`, `II ve III`, `I, II ve III`], a: "B",
  s: `<p>Kara, denize göre daha çabuk ısınır ve daha çabuk soğur. Gece kara hızla soğuduğu için üzerindeki hava daha soğuktur (I ✓); soğuk hava alçalır ve kara üzerinde <b>yüksek basınç</b> oluşur (II ✓). Şekilde de yer yüzeyinde rüzgâr karadan denize esmektedir.</p><p>Gündüz kara denizden daha çabuk ısınır; kara üzerinde alçak basınç oluşur ve rüzgâr denizden karaya eser. Yani yön tersine döner (III ✗). Cevap <b>B</b>.</p>` },
{ q: `<p>Bir haber sitesinde şu bilgilere yer verilmiştir: “Son yüzyılda Dünya’nın ortalama sıcaklığı yaklaşık 1,1 °C artmıştır. Bu artış buzulların erimesine, deniz seviyesinin yükselmesine ve kuraklıkların sıklaşmasına yol açmaktadır.”</p><p>Aşağıdakilerden hangisi haberde sözü edilen durumun <b>nedenlerinden biri olamaz</b>?</p>`,
  c: [`Kömür, petrol gibi fosil yakıtların yoğun olarak kullanılması`, `Orman alanlarının hızla yok edilmesi`, `Atmosferdeki karbondioksit ve metan gibi sera gazlarının artması`, `Elektrik üretiminde rüzgâr ve güneş enerjisinin payının artırılması`], a: "D",
  s: `<p>Haberde küresel ısınma ve iklim değişikliği anlatılmaktadır. Fosil yakıtların yakılması ve ormansızlaşma atmosferdeki <b>sera gazlarını</b> artırır; sera gazları ısının uzaya kaçmasını zorlaştırır ve sıcaklığı yükseltir (A, B, C nedendir).</p><p>Rüzgâr ve güneş gibi yenilenebilir enerji kaynakları sera gazı salımını azaltır; bu bir neden değil, <b>çözüm</b> önerisidir. Cevap <b>D</b>.</p>` },
{ q: `<p>Antarktika’daki (Güney Kutup bölgesi) bir araştırma istasyonunda çalışan bir bilim insanı günlüğüne şu notu düşmüştür: “Buraya geleli aylar oldu; Güneş bir kez bile batmadı, 24 saat boyunca gökyüzünde.”</p><p>Bilim insanının bu notu yazdığı ay aşağıdakilerden hangisi olabilir?</p>`,
  c: [`Haziran`, `Eylül`, `Ocak`, `Nisan`], a: "C",
  s: `<p>Güney Kutup bölgesinde sürekli gündüz, Güney Yarım Küre’nin Güneş’e doğru eğik olduğu dönemde yaşanır. 23 Eylül’de başlar, 21 Aralık’ta en geniş alana ulaşır ve 21 Mart’ta sona erer.</p><p>“Aylardır Güneş batmadı” ifadesine uyan ay <b>ocak</b>tır. Haziran’da Güney Kutbu’nda sürekli gece vardır; nisan ayında da 21 Mart’tan sonra gece başlamıştır. Eylül’ün büyük kısmında ise kutupta henüz gece hâkimdir. Cevap <b>C</b>.</p>` },
{ q: `<p>K şehrinde 21 Aralık günü yılın en uzun gündüzü, L şehrinde ise aynı gün yılın en uzun gecesi yaşanmaktadır.</p><p>Buna göre aşağıdakilerden hangisi <b>kesinlikle doğrudur</b>?</p>`,
  c: [`K şehri Ekvator’a L şehrinden daha yakındır.`, `23 Eylül’de K şehrinde gündüz süresi gece süresinden uzundur.`, `21 Aralık’ta L şehrine Güneş ışınları dik açıyla gelir.`, `21 Haziran’da K şehrinde kış mevsimi başlar.`], a: "D",
  s: `<p>21 Aralık’ta en uzun gündüzün yaşandığı K şehri <b>Güney</b>, en uzun gecenin yaşandığı L şehri <b>Kuzey</b> Yarım Küre’dedir.</p><p>D ✓: Güney Yarım Küre’de 21 Haziran’da kış başlar. A ✗: Şehirlerin Ekvator’a uzaklıkları hakkında bilgi yoktur. C ✗: 21 Aralık’ta ışınlar Oğlak Dönencesi’ne dik gelir; L kışı yaşamaktadır, ışınlar eğik gelir. B ✗: 23 Eylül’de her yerde gece ve gündüz eşittir. Cevap <b>D</b>.</p>` },
{ q: `<p>Bir şehirde 1 m uzunluğundaki bir çubuk yere dik olarak yerleştiriliyor ve dört farklı tarihte öğle vakti çubuğun gölge boyu ölçülüyor.</p>
<table class="rt"><tr><th>Tarih</th><th>21 Mart</th><th>21 Haziran</th><th>23 Eylül</th><th>21 Aralık</th></tr><tr><td>Gölge boyu (cm)</td><td>60</td><td>85</td><td>60</td><td>35</td></tr></table>
<p>Bu şehirle ilgili aşağıdakilerden hangisi söylenebilir?</p>`,
  c: [`Güney Yarım Küre’de bulunmaktadır.`, `21 Haziran’da bu şehirde yaz mevsimi başlar.`, `21 Mart’ta bu şehre Güneş ışınları dik açıyla gelir.`, `21 Aralık’ta bu şehirde gece süresi gündüz süresinden uzundur.`], a: "A",
  s: `<p>Gölge boyu en kısa 21 Aralık’ta, en uzun 21 Haziran’dadır. Yani ışınlar bu şehre en dik 21 Aralık’ta, en eğik 21 Haziran’da gelir. Bu durum şehrin <b>Güney Yarım Küre</b>’de olduğunu gösterir (A ✓).</p><p>B ✗: Güney Yarım Küre’de 21 Haziran’da kış başlar. C ✗: 21 Mart’ta gölge oluşmuştur (60 cm); ışın dik gelseydi öğle vakti gölge oluşmazdı. D ✗: 21 Aralık’ta Güney Yarım Küre’de gündüzler gecelerden uzundur. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıda bir tarihle ilgili ipuçları verilmiştir.</p><ul><li>Bu tarihten sonra Güney Yarım Küre’de gündüzler uzamaya başlar.</li><li>Bu tarihte Kuzey Kutup bölgesinde 24 saat gündüz yaşanır.</li><li>Bu tarihte ışınlar Ekvator’a dik gelmez.</li></ul><p>İpuçlarında sözü edilen tarih aşağıdakilerden hangisidir?</p>`,
  c: [`21 Mart`, `21 Aralık`, `23 Eylül`, `21 Haziran`], a: "D",
  s: `<p>21 Haziran’da ışınlar Yengeç Dönencesi’ne dik gelir (Ekvator’a dik gelmez). Kuzey Yarım Küre Güneş’e doğru eğik olduğundan Kuzey Kutup bölgesi 24 saat aydınlanır.</p><p>Güney Yarım Küre’de 21 Haziran yılın en uzun gecesidir; bu tarihten sonra orada gündüzler uzamaya başlar. Üç ipucunun hepsine uyan tarih <b>21 Haziran</b>’dır. Cevap <b>D</b>.</p>` },
{ q: `<p>Mevsimlerin oluşumunu modellemek isteyen bir öğrenci, masanın ortasına Güneş’i temsil eden bir lamba koyuyor. Dünya’yı temsil eden küreyi lambanın etrafında dolandırıyor.</p><p>Öğrenci aşağıdakilerden hangisini yaparsa hazırladığı model mevsimlerin oluşumunu <b>açıklayamaz</b>?</p>`,
  c: [`Lambanın yerine daha güçlü ışık veren bir lamba kullanırsa`, `Küreyi dolandırırken ekseninin hep aynı yöne bakmasını sağlarsa`, `Kürenin eksenini masa düzlemine tam dik olacak şekilde yerleştirirse`, `Küre üzerinde Türkiye’nin yerini işaretlerse`], a: "C",
  s: `<p>Mevsimlerin oluşması için eksenin yörünge düzlemine göre <b>eğik</b> olması gerekir. Eksen masa düzlemine tam dik konulursa ışınlar yıl boyunca hep Ekvator’a dik gelir, ışınların geliş açısı değişmez ve mevsimler oluşmaz (C).</p><p>A ve D modelin işleyişini bozmaz. B, gerçek Dünya’daki durumu (eksenin uzayda hep aynı yöne bakması) doğru modeller. Cevap <b>C</b>.</p>` },
{ q: `<p>Kuzey Yarım Küre’deki bir şehirde üç farklı tarihte (X, Y, Z) Güneş’in doğuş ve batış saatleri kaydedilmiştir.</p>
<table class="rt"><tr><th>Tarih</th><th>Gün doğumu</th><th>Gün batımı</th></tr><tr><td>X</td><td>05.20</td><td>20.25</td></tr><tr><td>Y</td><td>07.05</td><td>19.10</td></tr><tr><td>Z</td><td>08.20</td><td>17.45</td></tr></table>
<p>X, Y ve Z tarihleri sırasıyla aşağıdakilerden hangisi olabilir?</p>`,
  c: [`21 Haziran – 21 Mart – 21 Aralık`, `21 Aralık – 21 Mart – 21 Haziran`, `21 Haziran – 21 Aralık – 21 Mart`, `21 Mart – 21 Haziran – 23 Eylül`], a: "A",
  s: `<p>Gündüz süreleri: X → 05.20–20.25 = <b>15 sa 5 dk</b>; Y → 07.05–19.10 = <b>12 sa 5 dk</b>; Z → 08.20–17.45 = <b>9 sa 25 dk</b>.</p><p>Kuzey Yarım Küre’de en uzun gündüz 21 Haziran’da (X), en kısa gündüz 21 Aralık’ta (Z) yaşanır; gece–gündüzün yaklaşık eşit olduğu tarih 21 Mart’tır (Y). Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki tabloda aynı uzaklıktaki üç meteoroloji istasyonu çiftinde aynı anda ölçülen hava basınçları verilmiştir.</p>
<table class="rt"><tr><th>İstasyon çifti</th><th colspan="2">Hava basınçları (hPa)</th></tr><tr><td>K – L</td><td>K: 1016</td><td>L: 1012</td></tr><tr><td>M – N</td><td>M: 1005</td><td>N: 1015</td></tr><tr><td>P – R</td><td>P: 1020</td><td>R: 1013</td></tr></table>
<p>Buna göre en hızlı rüzgârın estiği istasyon çifti ve bu rüzgârın yönü aşağıdakilerden hangisidir?</p>`,
  c: [`K – L arası; K’den L’ye`, `M – N arası; M’den N’ye`, `M – N arası; N’den M’ye`, `P – R arası; P’den R’ye`], a: "C",
  s: `<p>Basınç farkları: K–L → 4 hPa, M–N → 10 hPa, P–R → 7 hPa. Basınç farkı arttıkça rüzgârın hızı artar; en hızlı rüzgâr <b>M–N</b> arasında eser.</p><p>Rüzgâr yüksek basınçtan alçak basınca doğru eser: N (1015) → M (1005), yani <b>N’den M’ye</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Aynı tarihte K şehrinde kış mevsiminin ortası, L şehrinde ise yaz mevsiminin ortası yaşanmaktadır. Bu tarihte M şehrinde gece ve gündüz süreleri birbirine eşittir.</p><p>Buna göre aşağıdakilerden hangisi doğrudur?</p>`,
  c: [`K ve L şehirleri aynı yarım kürededir.`, `M şehri Ekvator üzerindedir.`, `Bu tarih 21 Mart olabilir.`, `Bu tarihte K şehrine Güneş ışınları L şehrine göre daha dik gelir.`], a: "B",
  s: `<p>Mevsim ortası (ocak–şubat veya temmuz–ağustos) olan bir tarihte gece–gündüz eşitliği yalnızca <b>Ekvator</b>’da görülür; ekinoks günleri (21 Mart, 23 Eylül) mevsim başlangıcıdır, mevsim ortası değildir. Bu nedenle M Ekvator üzerindedir (B ✓), C ✗.</p><p>A ✗: Aynı anda biri kış, diğeri yaz yaşadığına göre K ve L farklı yarım kürelerdedir. D ✗: Kış yaşanan K’ye ışınlar yaz yaşanan L’ye göre daha eğik gelir. Cevap <b>B</b>.</p>` },
{ q: `<p>Türkiye yaklaşık 36° ve 42° Kuzey paralelleri arasında yer almaktadır.</p><p>Buna göre aşağıdakilerden hangisi doğrudur?</p>`,
  c: [`Türkiye’ye yıl içinde Güneş ışınları hiçbir zaman dik açıyla gelmez.`, `Türkiye’de 21 Haziran’da gece ve gündüz süreleri eşittir.`, `Türkiye’de yılın en uzun gecesi 21 Haziran’da yaşanır.`, `Türkiye’de öğle vakti cisimlerin gölge boyu 21 Aralık’ta yılın en kısa değerindedir.`], a: "A",
  s: `<p>Güneş ışınları yalnızca Yengeç Dönencesi (23° 27′ K) ile Oğlak Dönencesi (23° 27′ G) arasına dik gelebilir. Türkiye 36°–42° K arasında, yani dönencenin kuzeyinde olduğundan ışınlar Türkiye’ye <b>hiçbir zaman dik gelmez</b> (A ✓).</p><p>B ✗: 21 Haziran’da Türkiye’de gündüz geceden uzundur. C ✗: En uzun gece 21 Aralık’tadır. D ✗: 21 Aralık’ta ışınlar en eğik geldiği için gölge boyu yılın en <b>uzun</b> değerindedir. Cevap <b>A</b>.</p>` },
{ q: `<p>Fen bilimleri öğretmeni “Doğru (D) – Yanlış (Y)” etkinliği yapmış, her doğru cevaba 5 puan vermiştir. Bir öğrencinin cevapları tabloda gösterilmiştir.</p>
<table class="rt"><tr><th>İfade</th><th>Öğrencinin cevabı</th></tr>
<tr><td>1. Mevsimlerin oluşmasının temel nedeni, Dünya’nın eksen eğikliği ve Güneş etrafındaki dolanma hareketidir.</td><td>D</td></tr>
<tr><td>2. Klimatoloji, kısa süreli hava olaylarını inceleyip tahmin yapan bilim dalıdır.</td><td>D</td></tr>
<tr><td>3. Rüzgâr, alçak basınç alanından yüksek basınç alanına doğru eser.</td><td>Y</td></tr>
<tr><td>4. 21 Aralık’ta Güney Yarım Küre’de yılın en uzun gündüzü yaşanır.</td><td>D</td></tr></table>
<p>Buna göre bu öğrenci kaç puan almıştır?</p>`,
  c: [`5`, `10`, `15`, `20`], a: "C",
  s: `<p>1 doğrudur; öğrenci D demiş ✓. 2 yanlıştır (tanım meteorolojiye aittir; klimatoloji uzun süreli iklimi inceler); öğrenci D demiş ✗. 3 yanlıştır (rüzgâr yüksek basınçtan alçak basınca eser); öğrenci Y demiş ✓. 4 doğrudur; öğrenci D demiş ✓.</p><p>3 doğru × 5 = <b>15 puan</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki şekilde Güneş ışınlarının 21 Haziran’da Dünya’ya gelişi ve Dünya üzerindeki K, L, M noktaları gösterilmiştir.</p>
<svg viewBox="0 0 360 230" width="340" role="img" aria-label="21 Haziran'da Güneş ışınları ve K L M noktaları">
<g stroke="#f59e0b" stroke-width="2"><line x1="10" y1="45" x2="90" y2="45"/><line x1="10" y1="80" x2="90" y2="80"/><line x1="10" y1="115" x2="90" y2="115"/><line x1="10" y1="150" x2="90" y2="150"/><line x1="10" y1="185" x2="90" y2="185"/></g>
<text x="12" y="30" font-size="11">Güneş ışınları</text>
<circle cx="220" cy="115" r="95" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<path d="M220,20 A95,95 0 0,1 220,210 Z" fill="#1e293b" opacity=".35"/>
<g transform="rotate(-23.5 220 115)">
<line x1="220" y1="5" x2="220" y2="225" stroke="#1e3a8a" stroke-width="1.5"/>
<line x1="125" y1="115" x2="315" y2="115" stroke="#1e3a8a" stroke-width="2"/>
</g>
<g fill="#dc2626"><circle cx="143.5" cy="58.6" r="5"/><circle cx="125" cy="115" r="5"/><circle cx="163.6" cy="191.5" r="5"/></g>
<g font-size="13" font-weight="bold"><text x="126" y="52">K</text><text x="108" y="108">L</text><text x="146" y="210">M</text></g>
<text x="312" y="72" font-size="11">Ekvator</text>
</svg>
<p>Buna göre aşağıdakilerden hangisi doğrudur?</p>`,
  c: [`K noktasına Güneş ışınları L noktasına göre daha dik gelir.`, `L noktası Yengeç Dönencesi üzerinde olabilir.`, `M noktasında bu tarihte yaz mevsimi başlar.`, `Bu tarihte K noktasında gece süresi gündüz süresinden uzundur.`], a: "B",
  s: `<p>21 Haziran’da Kuzey Yarım Küre Güneş’e doğru eğiktir ve ışınlar <b>Yengeç Dönencesi</b>’ne dik gelir. Şekilde ışınların yüzeye en dik ulaştığı nokta, Ekvator’un biraz kuzeyindeki L noktasıdır; L Yengeç Dönencesi üzerinde olabilir (B ✓).</p><p>A ✗: K, L’den daha kuzeyde olduğundan ışınlar K’ye daha eğik gelir. C ✗: M Ekvator’un güneyindedir; Güney Yarım Küre’de 21 Haziran’da kış başlar. D ✗: Kuzey Yarım Küre’deki K’de bu tarihte gündüz geceden uzundur. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıda iki öğrencinin bulunduğu şehirle ilgili açıklamaları verilmiştir.</p><p><b>Mert:</b> Şehrimde şu an ilkbahar mevsimi yaşanıyor ve gündüzler her geçen gün uzuyor.<br><b>Zeynep:</b> Şehrimde şu an sonbahar mevsimi yaşanıyor ve gündüzler her geçen gün kısalıyor.</p><p>İki öğrenci bu açıklamaları <b>aynı gün</b> yaptığına göre aşağıdakilerden hangisi doğrudur?</p>`,
  c: [`İki öğrencinin şehri de Kuzey Yarım Küre’dedir.`, `Açıklamaların yapıldığı tarih temmuz ayı olabilir.`, `Mert’in şehrinde bu dönemde gündüz süresi gece süresinden uzundur.`, `Zeynep’in şehri Ekvator üzerindedir.`], a: "C",
  s: `<p>Aynı gün biri ilkbahar, diğeri sonbahar yaşadığına göre şehirler <b>farklı yarım kürelerdedir</b> (A ✗). Bu dönem ya 21 Mart–21 Haziran (Mert KYK’de) ya da 23 Eylül–21 Aralık (Mert GYK’de) aralığıdır; temmuz bu aralıkların dışındadır (B ✗). Ekvator’da gündüz süresi değişmez (D ✗).</p><p>İlkbahar, gece–gündüz eşitliğinin yaşandığı günden sonra başlar ve gündüzler uzamaya devam eder. Bu nedenle ilkbahar boyunca gündüzler gecelerden <b>uzundur</b> (C ✓). Sonbaharı yaşayan Zeynep’in şehrinde ise geceler gündüzlerden uzundur. Cevap <b>C</b>.</p>` }
]
});
