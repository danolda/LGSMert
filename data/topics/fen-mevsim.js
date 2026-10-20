LGS.add({
id: "fen-mevsim",
summary: `
<h3>1. Dünya’nın Hareketleri ve Mevsimlerin Oluşumu</h3>
<p>Dünya uzayda iki temel hareket yapar ve bu hareketlerin sonuçları LGS’de sıkça karşılaştırılır:</p>
<ul>
<li><b>Kendi ekseni etrafında dönme (Günlük hareket):</b> Batıdan doğuya (saat yönünün tersine) <b>24 saatte</b> tamamlanır. Sonucunda <b>gece ve gündüz</b> birbirini takip eder, Güneş ışınlarının gün içindeki geliş açısı değişir (sabah ve akşam eğik, öğlen dik veya dike yakın), <b>günlük sıcaklık farkları</b> ve cisimlerin <b>gün içindeki gölge boyu değişimleri</b> oluşur.</li>
<li><b>Güneş etrafında dolanma (Yıllık hareket):</b> Eliptik bir yörüngede <b>365 gün 6 saatte</b> tamamlanır. Dönme ekseninin <b>23° 27′ (yaklaşık 23,5°) eğik</b> olmasıyla birlikte <b>mevsimlerin oluşmasını</b>, yıl içinde birim yüzeye düşen enerji miktarının, öğle vakti gölge boylarının ve <b>gece–gündüz sürelerinin değişmesini</b> sağlar.</li>
</ul>

<div class="fig"><svg viewBox="0 0 560 290" width="540" role="img" aria-label="Dünya'nın Güneş etrafındaki dört konumu ve mevsim geçişleri">
<defs><marker id="mvA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker></defs>
<ellipse cx="280" cy="140" rx="210" ry="82" fill="none" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="6 4"/>
<path d="M160,210 Q210,222 245,222" fill="none" stroke="#475569" stroke-width="2" marker-end="url(#mvA)"/>
<path d="M395,205 Q435,190 460,170" fill="none" stroke="#475569" stroke-width="2" marker-end="url(#mvA)"/>
<path d="M395,75 Q350,60 315,58" fill="none" stroke="#475569" stroke-width="2" marker-end="url(#mvA)"/>
<path d="M165,75 Q125,90 100,110" fill="none" stroke="#475569" stroke-width="2" marker-end="url(#mvA)"/>
<circle cx="280" cy="140" r="30" fill="#fbbf24" stroke="#f59e0b" stroke-width="3"/>
<text x="280" y="144" font-size="11" font-weight="bold" fill="#78350f" text-anchor="middle">GÜNEŞ</text>
<g stroke="#1e3a8a" stroke-width="1.5">
<circle cx="70" cy="140" r="20" fill="#93c5fd"/><line x1="61" y1="162" x2="79" y2="118" stroke-width="2"/><line x1="51" y1="132" x2="89" y2="148" stroke-dasharray="3 2"/>
<circle cx="490" cy="140" r="20" fill="#93c5fd"/><line x1="481" y1="162" x2="499" y2="118" stroke-width="2"/><line x1="471" y1="132" x2="509" y2="148" stroke-dasharray="3 2"/>
<circle cx="280" cy="222" r="20" fill="#93c5fd"/><line x1="271" y1="244" x2="289" y2="200" stroke-width="2"/><line x1="261" y1="214" x2="299" y2="230" stroke-dasharray="3 2"/>
<circle cx="280" cy="58" r="20" fill="#93c5fd"/><line x1="271" y1="80" x2="289" y2="36" stroke-width="2"/><line x1="261" y1="50" x2="299" y2="66" stroke-dasharray="3 2"/>
</g>
<g fill="#dc2626"><circle cx="79" cy="118" r="3.5"/><circle cx="499" cy="118" r="3.5"/><circle cx="289" cy="200" r="3.5"/><circle cx="289" cy="36" r="3.5"/></g>
<g font-size="10.5" text-anchor="middle">
<text x="70" y="182" font-weight="bold">21 Haziran (Gün Dönümü)</text><text x="70" y="195">KYK: Yaz başlar (En uzun gündüz)</text><text x="70" y="208">GYK: Kış başlar (En uzun gece)</text>
<text x="490" y="182" font-weight="bold">21 Aralık (Gün Dönümü)</text><text x="490" y="195">KYK: Kış başlar (En uzun gece)</text><text x="490" y="208">GYK: Yaz başlar (En uzun gündüz)</text>
<text x="280" y="262" font-weight="bold">23 Eylül (Ekinoks)</text><text x="280" y="275">KYK: Sonbahar · GYK: İlkbahar (Gece = Gündüz)</text>
<text x="280" y="16" font-weight="bold">21 Mart (Ekinoks)</text><text x="280" y="29">KYK: İlkbahar · GYK: Sonbahar (Gece = Gündüz)</text>
</g>
</svg><figcaption>Dünya’nın Güneş etrafındaki dolanma hareketi. Kırmızı nokta Kuzey Kutbu’nu, kesikli çizgi Ekvator’u gösterir.</figcaption></div>

<div class="note"><b>LGS Tuzağı 1 (Günberi – Günöte):</b> Dünya’nın Güneş’e olan uzaklığının değişmesi <b>mevsimleri etkilemez!</b> Dünya Güneş’e en yakın konumdayken (<b>3 Ocak – Günberi: yaklaşık 147 milyon km</b>) Kuzey Yarım Küre’de kış yaşanır; en uzak konumdayken (<b>4 Temmuz – Günöte: yaklaşık 152 milyon km</b>) Kuzey Yarım Küre’de yaz yaşanır.</div>
<div class="note"><b>LGS Tuzağı 2 (Aydınlanma Çemberi):</b> Gece ile gündüzü birbirinden ayıran sınır çizgisine <b>aydınlanma çemberi</b> denir. Ekinoks tarihlerinde (21 Mart, 23 Eylül) tam <b>kutup noktalarından</b> geçer ve tüm paralelleri iki eşit parçaya böler. Gün dönümlerinde (21 Haziran, 21 Aralık) ise <b>kutup dairelerinden (66° 33′)</b> teğet geçer.</div>

<h3>2. Işınların Geliş Açısı, Birim Yüzey Enerjisi ve Gölge Boyu</h3>
<div class="fig"><svg viewBox="0 0 540 165" width="520" role="img" aria-label="Dik ve eğik gelen ışınların aydınlattığı alan ve enerji">
<g stroke="#f59e0b" stroke-width="2.5">
<line x1="90" y1="15" x2="90" y2="115"/><line x1="110" y1="15" x2="110" y2="115"/><line x1="130" y1="15" x2="130" y2="115"/>
<line x1="290" y1="20" x2="400" y2="115"/><line x1="320" y1="20" x2="430" y2="115"/><line x1="350" y1="20" x2="460" y2="115"/>
</g>
<line x1="20" y1="115" x2="220" y2="115" stroke="#64748b" stroke-width="3"/>
<line x1="270" y1="115" x2="520" y2="115" stroke="#64748b" stroke-width="3"/>
<line x1="90" y1="115" x2="130" y2="115" stroke="#dc2626" stroke-width="7"/>
<line x1="400" y1="115" x2="460" y2="115" stroke="#fb923c" stroke-width="7"/>
<g font-size="11.5" text-anchor="middle">
<text x="110" y="136" font-weight="bold">Büyük Açı (90° - Dik / Dike Yakın)</text>
<text x="110" y="152">Dar alan (S) · Birim yüzeye düşen enerji FAZLA</text>
<text x="415" y="136" font-weight="bold">Küçük Açı (Eğik Işınlar)</text>
<text x="415" y="152">Geniş alan (2S) · Birim yüzeye düşen enerji AZ</text>
</g>
</svg></div>

<ul>
<li><b>Büyük Açı (Dik / Dike yakın):</b> Işık demeti <b>dar</b> bir alanı aydınlatır → Birim yüzeye düşen ışık enerjisi (J/cm²) <b>fazladır</b> → Yüzeydeki ısınma fazladır → Cisimlerin öğle vakti <b>gölge boyu kısa</b> (90° ise <b>sıfır</b>) olur.</li>
<li><b>Küçük Açı (Eğik):</b> Aynı ışık demeti <b>geniş</b> bir alana dağılır → Birim yüzeye düşen enerji <b>azdır</b> → Isınma azdır → Öğle vakti <b>gölge boyu uzundur</b>.</li>
<li><b>Önemli Kural:</b> Özdeş iki ışık demetinin taşıdığı <b>toplam enerji eşittir</b>; değişen şey bu enerjinin yayıldığı alan ve <b>birim yüzeye düşen enerji miktarıdır</b>.</li>
</ul>

<h4>Güneş Işınları Nereye Kaç Kez Dik (90°) Düşer?</h4>
<div class="fig"><svg viewBox="0 0 540 230" width="520" role="img" aria-label="Dönenceler ve Güneş ışınlarının dik geldiği kuşaklar">
<circle cx="115" cy="115" r="95" fill="#e0f2fe" stroke="#1e3a8a" stroke-width="2"/>
<rect x="27.5" y="77" width="175" height="76" fill="#fef08a" opacity="0.85"/>
<rect x="132" y="48" width="42" height="10" rx="2" fill="#dc2626"/>
<g stroke="#1e3a8a" stroke-width="1.5">
<line x1="20" y1="115" x2="210" y2="115" stroke-width="2.2"/>
<line x1="28" y1="77" x2="202" y2="77" stroke-dasharray="5 3"/>
<line x1="28" y1="153" x2="202" y2="153" stroke-dasharray="5 3"/>
<line x1="77" y1="28" x2="153" y2="28" stroke-dasharray="2 3"/>
<line x1="77" y1="202" x2="153" y2="202" stroke-dasharray="2 3"/>
</g>
<g font-size="10.5">
<text x="222" y="32" font-weight="bold">Kuzey Kutup Dairesi (66°33′ K): Işınlar dik gelmez (0 kez)</text>
<text x="222" y="56" fill="#dc2626" font-weight="bold">Türkiye (36°–42° K): Dönence dışı → Asla dik gelmez! (0 kez)</text>
<text x="222" y="81" fill="#b45309" font-weight="bold">Yengeç Dönencesi (23°27′ K): Yılda 1 kez dik gelir (21 Haz)</text>
<text x="222" y="118" fill="#1e3a8a" font-weight="bold">Dönenceler Arası (Ekvator dahil): Yılda 2 kez dik gelir</text>
<text x="222" y="157" fill="#b45309" font-weight="bold">Oğlak Dönencesi (23°27′ G): Yılda 1 kez dik gelir (21 Ara)</text>
<text x="222" y="205" font-weight="bold">Güney Kutup Dairesi (66°33′ G): Işınlar dik gelmez (0 kez)</text>
</g>
</svg></div>

<h4>Bölgelere Göre Yıllık Gölge Boyu Grafikleri (Öğle Vakti)</h4>
<div class="fig"><svg viewBox="0 0 560 155" width="540" role="img" aria-label="Üç farklı bölgede yıllık gölge boyu değişim grafikleri">
<g stroke="#475569" stroke-width="1.5" fill="none">
<polyline points="25,20 25,115 165,115"/>
<polyline points="205,20 205,115 345,115"/>
<polyline points="385,20 385,115 525,115"/>
</g>
<polyline fill="none" stroke="#dc2626" stroke-width="2.5" points="35,55 75,95 115,55 155,25"/>
<polyline fill="none" stroke="#2563eb" stroke-width="2.5" points="215,115 255,65 295,115 335,65"/>
<polyline fill="none" stroke="#16a34a" stroke-width="2.5" points="395,70 435,30 475,70 515,115"/>
<g font-size="9.5" text-anchor="middle">
<text x="35" y="128">21M</text><text x="75" y="128">21H</text><text x="115" y="128">23E</text><text x="155" y="128">21A</text>
<text x="95" y="146" font-weight="bold" font-size="10.5">Türkiye (Yengeç Kuzeyi - Sıfır olmaz)</text>
<text x="215" y="128">21M</text><text x="255" y="128">21H</text><text x="295" y="128">23E</text><text x="335" y="128">21A</text>
<text x="275" y="146" font-weight="bold" font-size="10.5">Ekvator (21M ve 23E'de 0 olur)</text>
<text x="395" y="128">21M</text><text x="435" y="128">21H</text><text x="475" y="128">23E</text><text x="515" y="128">21A</text>
<text x="455" y="146" font-weight="bold" font-size="10.5">Oğlak Dönencesi (21A'da 0 olur)</text>
</g>
<g font-size="9" fill="#475569"><text x="8" y="28">Gölge</text><text x="18" y="118">0</text><text x="198" y="118">0</text><text x="378" y="118">0</text></g>
</svg></div>

<h3>3. Önemli Tarihler ve Tarih Aralıkları Analizi</h3>
<table class="rt">
<tr><th>Tarih / Dönem</th><th>Dik Geldiği Yer</th><th>Kuzey Yarım Küre (KYK)</th><th>Güney Yarım Küre (GYK)</th></tr>
<tr><td><b>21 Haziran</b></td><td>Yengeç Dönencesi</td><td>Yaz başlar. <b>En uzun gündüz</b>, en kısa gece. Kuzey Kutup Dairesi’nde 24 saat gündüz.</td><td>Kış başlar. <b>En uzun gece</b>, en kısa gündüz. Güney Kutup Dairesi’nde 24 saat gece.</td></tr>
<tr><td><b>21 Haz → 23 Eyl</b></td><td>Yengeç’ten Ekvator’a kayar</td><td>Gündüzler <b>kısalmaya</b> başlar ancak <b>hâlâ gündüz &gt; gece</b>dir!</td><td>Gündüzler <b>uzamaya</b> başlar ancak <b>hâlâ gece &gt; gündüz</b>dür!</td></tr>
<tr><td><b>23 Eylül</b></td><td>Ekvator</td><td>Sonbahar başlar. Tüm Dünya’da <b>12 saat gece = 12 saat gündüz</b>.</td><td>İlkbahar başlar. Tüm Dünya’da <b>12 saat gece = 12 saat gündüz</b>.</td></tr>
<tr><td><b>23 Eyl → 21 Ara</b></td><td>Ekvator’dan Oğlak’a kayar</td><td>Gündüzler kısalmaya devam eder ve artık <b>gece &gt; gündüz</b>dür.</td><td>Gündüzler uzamaya devam eder ve artık <b>gündüz &gt; gece</b>dir.</td></tr>
<tr><td><b>21 Aralık</b></td><td>Oğlak Dönencesi</td><td>Kış başlar. <b>En uzun gece</b>, en kısa gündüz.</td><td>Yaz başlar. <b>En uzun gündüz</b>, en kısa gece.</td></tr>
<tr><td><b>21 Ara → 21 Mar</b></td><td>Oğlak’tan Ekvator’a kayar</td><td>Gündüzler <b>uzamaya</b> başlar ancak <b>hâlâ gece &gt; gündüz</b>dür!</td><td>Gündüzler <b>kısalmaya</b> başlar ancak <b>hâlâ gündüz &gt; gece</b>dir!</td></tr>
<tr><td><b>21 Mart</b></td><td>Ekvator</td><td>İlkbahar başlar. Tüm Dünya’da <b>gece = gündüz (12 saat)</b>.</td><td>Sonbahar başlar. Tüm Dünya’da <b>gece = gündüz (12 saat)</b>.</td></tr>
<tr><td><b>21 Mar → 21 Haz</b></td><td>Ekvator’dan Yengeç’e kayar</td><td>Gündüzler uzamaya devam eder ve <b>gündüz &gt; gece</b>dir.</td><td>Gündüzler kısalmaya devam eder ve <b>gece &gt; gündüz</b>dür.</td></tr>
</table>

<div class="note"><b>LGS Tuzağı 3 (Kuzeye ve Güneye Gidildikçe Gündüz Süresi):</b> <b>21 Haziran</b>’da Güney Kutbu’ndan Kuzey Kutbu’na (kuzeye doğru) gidildikçe <b>gündüz süresi kesintisiz artar</b>. <b>21 Aralık</b>’ta ise Kuzey Kutbu’ndan Güney Kutbu’na (güneye doğru) gidildikçe <b>gündüz süresi kesintisiz artar</b>. Ekvator’dan kutuplara doğru gidildikçe ise yıl içindeki <b>gece–gündüz süresi farkı</b> artar (Ekvator’da fark hep 0 saattir).</div>

<h3>4. Hava Olayları, İklim ve Yağış Türleri</h3>
<table class="rt">
<tr><th>Özellik</th><th>Hava Olayları</th><th>İklim</th></tr>
<tr><td><b>Tanım ve Süre</b></td><td>Dar bir alanda, <b>kısa süre</b> (saat, gün, hafta) içinde etkili olan atmosfer koşullarıdır.</td><td>Geniş bir bölgede, <b>en az 30–40 yıllık</b> hava olaylarının ortalamasıdır.</td></tr>
<tr><td><b>Kesinlik</b></td><td><b>Tahminidir</b>, değişkenliği fazladır (gün içinde bile değişebilir).</td><td><b>Kesinlik</b> bildirir, değişkenliği azdır.</td></tr>
<tr><td><b>Bilim Dalı / Uzman</b></td><td><b>Meteoroloji</b> / <b>Meteorolog</b></td><td><b>Klimatoloji (İklim Bilimi)</b> / <b>Klimatolog</b></td></tr>
<tr><td><b>Anahtar Kelimeler</b></td><td>“Bugün, yarın, bu hafta, öğleden sonra, sağanak bekleniyor, fırtına uyarısı…”</td><td>“Genellikle, her mevsim, yazları kurak, kışları ılık, yıllık yağış ortalaması…”</td></tr>
</table>

<h4>Yağış ve Yoğuşma Türleri (Oluşum Yerine Göre)</h4>
<table class="rt">
<tr><th>Oluşum Yeri</th><th>Tür</th><th>Oluşum Şekli ve Sıcaklık Koşulu</th></tr>
<tr><td rowspan="3"><b>Gökyüzünde</b><br>(Atmosferin üst tabakalarında / bulutlarda)</td><td><b>Yağmur</b></td><td>Su buharının soğuk hava tabakasıyla karşılaşıp <b>yoğuşarak</b> (gaz → sıvı) su damlacıkları hâlinde yağmasıdır (0 °C üstü).</td></tr>
<tr><td><b>Kar</b></td><td>Bulutlardaki su damlacıklarının 0 °C’un altındaki soğuk havayla karşılaşıp <b>buz kristallerine</b> dönüşerek yağmasıdır.</td></tr>
<tr><td><b>Dolu</b></td><td>Isınarak <b>aniden yükselen</b> su damlacıklarının çok soğuk tabakada <b>aniden donarak</b> buz topları hâlinde düşmesidir.</td></tr>
<tr><td rowspan="3"><b>Yeryüzüne Yakın</b><br>(Toprak, bitki, araç yüzeyinde veya havada)</td><td><b>Çiy</b></td><td>Gece serinleyen havadaki su buharının (0 °C üstünde) toprak ve yapraklar üzerinde <b>sıvı su damlacıkları</b> şeklinde yoğuşmasıdır.</td></tr>
<tr><td><b>Kırağı</b></td><td>Çok soğuk gecelerde (0 °C altında) su buharının sıvı hâle geçmeden doğrudan <b>ince buz kristallerine</b> dönüşmesidir (kırağılaşma).</td></tr>
<tr><td><b>Sis</b></td><td>Yeryüzüne yakın su buharının yoğuşarak veya donarak havada asılı kalan <b>yüzey bulutları</b> oluşturmasıdır (görüş mesafesini düşürür).</td></tr>
</table>

<h3>5. Basınç Alanları ve Rüzgârın Oluşumu</h3>
<div class="fig"><svg viewBox="0 0 540 190" width="520" role="img" aria-label="Alçak basınç ve yüksek basınç alanlarında hava hareketleri">
<defs>
<marker id="arR" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#dc2626"/></marker>
<marker id="arB" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#2563eb"/></marker>
<marker id="arW" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#0f766e"/></marker>
</defs>
<rect x="20" y="145" width="210" height="28" rx="4" fill="#fca5a5"/>
<rect x="310" y="145" width="210" height="28" rx="4" fill="#93c5fd"/>
<text x="125" y="163" font-size="11.5" font-weight="bold" fill="#7f1d1d" text-anchor="middle">ALÇAK BASINÇ (Sıcak Bölge)</text>
<text x="415" y="163" font-size="11.5" font-weight="bold" fill="#1e3a8a" text-anchor="middle">YÜKSEK BASINÇ (Soğuk Bölge)</text>
<g stroke="#dc2626" stroke-width="2.5" fill="none" marker-end="url(#arR)">
<path d="M105,135 L105,60"/><path d="M145,135 L145,60"/>
<path d="M40,138 L92,138"/><path d="M210,138 L158,138"/>
</g>
<g stroke="#2563eb" stroke-width="2.5" fill="none" marker-end="url(#arB)">
<path d="M395,60 L395,135"/><path d="M435,60 L435,135"/>
<path d="M382,138 L330,138"/><path d="M448,138 L500,138"/>
</g>
<path d="M315,112 L225,112" stroke="#0f766e" stroke-width="4" fill="none" marker-end="url(#arW)"/>
<text x="270" y="102" font-size="12" font-weight="bold" fill="#0f766e" text-anchor="middle">RÜZGÂR (YB → AB)</text>
<ellipse cx="125" cy="34" rx="52" ry="16" fill="#cbd5e1" stroke="#64748b"/>
<text x="125" y="38" font-size="10" font-weight="bold" fill="#1e293b" text-anchor="middle">Bulutlu / Yağışlı</text>
<circle cx="415" cy="34" r="15" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
<text x="470" y="38" font-size="10" font-weight="bold" fill="#b45309">Açık / Güneşli</text>
<g font-size="10" text-anchor="middle">
<text x="125" y="185">Yükselici hava · Çevreden merkeze</text>
<text x="415" y="185">Alçalıcı hava · Merkezden çevreye</text>
</g>
</svg></div>

<table class="rt">
<tr><th>Özellik</th><th>Alçak Basınç Alanı (AB)</th><th>Yüksek Basınç Alanı (YB)</th></tr>
<tr><td><b>Sıcaklık ve Yoğunluk</b></td><td>Hava <b>sıcaktır</b>; genleşir, yoğunluğu (özkütlesi) <b>azalır</b>.</td><td>Hava <b>soğuktur</b>; sıkışır, yoğunluğu (özkütlesi) <b>artar</b>.</td></tr>
<tr><td><b>Dikey Hava Hareketi</b></td><td><b>Yükselici</b> hava hareketi görülür (yukarı doğru).</td><td><b>Alçalıcı</b> hava hareketi görülür (aşağı doğru).</td></tr>
<tr><td><b>Yatay Hava Hareketi</b></td><td><b>Çevreden merkeze</b> doğrudur.</td><td><b>Merkezden çevreye</b> doğrudur.</td></tr>
<tr><td><b>Bulut ve Yağış</b></td><td>Buharlaşma ve nem fazladır; <b>bulutlanma ve yağış ihtimali yüksektir</b>.</td><td>Hava açıktır ve güneşlidir; <b>bulutlanma ve yağış görülmez</b>.</td></tr>
</table>

<div class="note"><b>LGS Tuzağı 4 (Kelime Benzerliği):</b> “<b>Yüksek</b> basınçta <b>yükselici</b> hava hareketi vardır” ifadesi <b>KESİNLİKLE YANLIŞTIR!</b> Tam tersine: <b>Yüksek</b> basınçta <b>alçalıcı</b>, <b>alçak</b> basınçta <b>yükselici</b> hava hareketi vardır.</div>
`,
qs: [
{
  q: `<p>Aşağıdaki Şekil 1’de Dünya üzerinde farklı enlemlerde bulunan K, L, M ve N şehirlerinin konumları, Şekil 2’de ise bu şehirlerden birinde yatay zemine dik yerleştirilen özdeş bir çubuğun yıl boyunca öğle vakti ölçülen gölge boyu değişim grafiği verilmiştir.</p>
<div class="fig"><svg viewBox="0 0 540 185" width="520" role="img" aria-label="Dünya üzerinde K L M N şehirleri ve gölge boyu grafiği">
<circle cx="110" cy="95" r="78" fill="#dbeafe" stroke="#1e3a8a" stroke-width="2"/>
<line x1="32" y1="95" x2="188" y2="95" stroke="#1e3a8a" stroke-width="2"/>
<line x1="39" y1="62" x2="181" y2="62" stroke="#1e3a8a" stroke-dasharray="4 3"/>
<line x1="39" y1="128" x2="181" y2="128" stroke="#1e3a8a" stroke-dasharray="4 3"/>
<g fill="#dc2626"><circle cx="95" cy="40" r="4.5"/><circle cx="130" cy="62" r="4.5"/><circle cx="105" cy="78" r="4.5"/><circle cx="120" cy="128" r="4.5"/></g>
<g font-size="11" font-weight="bold"><text x="80" y="43">K</text><text x="138" y="59">L</text><text x="88" y="82">M</text><text x="130" y="125">N</text></g>
<g font-size="9.5" fill="#1e3a8a"><text x="192" y="65">23°27′ K (Yengeç)</text><text x="192" y="98">0° (Ekvator)</text><text x="192" y="131">23°27′ G (Oğlak)</text></g>
<text x="110" y="182" font-size="11" font-weight="bold" text-anchor="middle">Şekil 1</text>
<line x1="320" y1="150" x2="525" y2="150" stroke="#334155" stroke-width="1.5"/>
<line x1="320" y1="20" x2="320" y2="150" stroke="#334155" stroke-width="1.5"/>
<polyline fill="none" stroke="#dc2626" stroke-width="2.5" points="335,105 368,150 392,125 416,150 450,105 495,45"/>
<g stroke="#94a3b8" stroke-dasharray="3 2"><line x1="335" y1="105" x2="335" y2="150"/><line x1="392" y1="125" x2="392" y2="150"/><line x1="450" y1="105" x2="450" y2="150"/><line x1="495" y1="45" x2="495" y2="150"/></g>
<g font-size="9.5" text-anchor="middle">
<text x="335" y="163">21 Mar</text><text x="392" y="163">21 Haz</text><text x="450" y="163">23 Eyl</text><text x="495" y="163">21 Ara</text>
</g>
<text x="313" y="153" font-size="10" text-anchor="end">0</text>
<text x="298" y="85" font-size="10" transform="rotate(-90 298 85)" text-anchor="middle">Gölge boyu (cm)</text>
<text x="425" y="182" font-size="11" font-weight="bold" text-anchor="middle">Şekil 2</text>
</svg></div>
<p>Buna göre Şekil 2’deki grafik hangi şehre aittir ve bu şehirlerle ilgili aşağıdaki ifadelerden hangisi <b>doğrudur</b>?</p>`,
  c: [
    `Grafik L şehrine aittir; L şehrinde 21 Haziran’da birim yüzeye düşen enerji yılın en büyük değerindedir.`,
    `Grafik M şehrine aittir; K şehrinde öğle vakti gölge boyu yıl boyunca hiçbir zaman sıfır olmaz.`,
    `Grafik M şehrine aittir; 21 Aralık tarihinde N şehrindeki gündüz süresi K şehrindekinden daha kısadır.`,
    `Grafik N şehrine aittir; L ve N şehirlerine Güneş ışınları yılda ikişer kez dik açıyla düşer.`
  ],
  a: "B",
  s: `<p>Şekil 2’deki grafikte gölge boyu <b>21 Mart ile 21 Haziran arasında bir kez</b> ve <b>21 Haziran ile 23 Eylül arasında bir kez</b> olmak üzere yılda toplam <b>2 kez sıfır</b> olmuştur. Ayrıca gölge boyu 21 Aralık’ta en uzundur. Bu durum şehrin <b>Ekvator ile Yengeç Dönencesi arasında</b> (Kuzey Yarım Küre’de) yer aldığını gösterir → <b>M şehri</b>.</p>
<p>K şehri Yengeç Dönencesi’nin kuzeyindedir (dönenceler dışındadır); bu nedenle K’ye Güneş ışınları hiçbir zaman 90° açıyla düşmez ve gölge boyu asla sıfır olmaz (<b>B doğru</b>). C yanlıştır: 21 Aralık’ta Güney Yarım Küre’deki N’de yaz yaşanır, gündüz süresi K’den uzundur. D yanlıştır: Dönenceler üzerindeki L ve N’ye ışınlar yılda yalnızca 1 kez dik düşer.</p>`
},
{
  q: `<p>Özdeş cam borular, özdeş mumlar ve buz kalıpları kullanılarak rüzgâr oluşumunu gözlemlemek amacıyla aşağıdaki I, II ve III numaralı deney düzenekleri kuruluyor. Cam boruların tam ortasına serbestçe hareket edebilen özdeş tüy parçaları konuluyor.</p>
<div class="fig"><svg viewBox="0 0 540 195" width="520" role="img" aria-label="Üç farklı cam boru ve mum deneyi düzeneği">
<g font-size="11" font-weight="bold">
<text x="20" y="38">I. Düzenek</text><text x="20" y="103">II. Düzenek</text><text x="20" y="168">III. Düzenek</text>
</g>
<g fill="#f1f5f9" stroke="#64748b" stroke-width="1.5">
<rect x="145" y="22" width="240" height="24" rx="4"/>
<rect x="145" y="87" width="240" height="24" rx="4"/>
<rect x="145" y="152" width="240" height="24" rx="4"/>
</g>
<g fill="#0f766e"><circle cx="265" cy="34" r="5"/><circle cx="265" cy="99" r="5"/><circle cx="265" cy="164" r="5"/></g>
<g fill="#dc2626">
<rect x="110" y="26" width="8" height="22"/><rect x="122" y="26" width="8" height="22"/><rect x="134" y="26" width="8" height="22"/>
<rect x="392" y="26" width="8" height="22"/>
<rect x="392" y="91" width="8" height="22"/><rect x="404" y="91" width="8" height="22"/><rect x="416" y="91" width="8" height="22"/>
<rect x="122" y="156" width="8" height="22"/><rect x="134" y="156" width="8" height="22"/>
<rect x="392" y="156" width="8" height="22"/><rect x="404" y="156" width="8" height="22"/>
</g>
<g fill="#fbbf24">
<ellipse cx="114" cy="21" rx="3" ry="5"/><ellipse cx="126" cy="21" rx="3" ry="5"/><ellipse cx="138" cy="21" rx="3" ry="5"/>
<ellipse cx="396" cy="21" rx="3" ry="5"/>
<ellipse cx="396" cy="86" rx="3" ry="5"/><ellipse cx="408" cy="86" rx="3" ry="5"/><ellipse cx="420" cy="86" rx="3" ry="5"/>
<ellipse cx="126" cy="151" rx="3" ry="5"/><ellipse cx="138" cy="151" rx="3" ry="5"/>
<ellipse cx="396" cy="151" rx="3" ry="5"/><ellipse cx="408" cy="151" rx="3" ry="5"/>
</g>
<rect x="110" y="93" width="28" height="18" rx="3" fill="#38bdf8" stroke="#0284c7"/>
<text x="124" y="105" font-size="9" font-weight="bold" fill="#fff" text-anchor="middle">BUZ</text>
<g font-size="10" fill="#334155">
<text x="125" y="60" text-anchor="middle">K ucu (3 mum)</text><text x="410" y="60" text-anchor="middle">L ucu (1 mum)</text>
<text x="125" y="125" text-anchor="middle">M ucu (Buz)</text><text x="410" y="125" text-anchor="middle">N ucu (3 mum)</text>
<text x="125" y="190" text-anchor="middle">P ucu (2 mum)</text><text x="410" y="190" text-anchor="middle">R ucu (2 mum)</text>
</g>
<text x="475" y="38" font-size="10.5" font-weight="bold">← 1 (Sol) | 2 (Sağ) →</text>
</svg></div>
<p>Buna göre düzeneklerdeki tüy parçalarının hareket yönleri ve hızları ile ilgili aşağıdakilerden hangisi doğrudur?</p>`,
  c: [
    `I. düzenekte tüy 2 yönünde hareket eder; K ucunda alçalıcı hava hareketi görülür.`,
    `II. düzenekte tüy 1 yönünde hareket eder; N ucundaki hava yoğunluğu M ucundakinden fazladır.`,
    `Tüyün en hızlı hareket ettiği düzenek II’dir ve bu düzenekte tüy 2 yönünde hareket eder.`,
    `III. düzenekte P ve R uçlarında basınç farkı en fazla olduğundan tüy 1 yönünde hızla hareket eder.`
  ],
  a: "C",
  s: `<p>Mum sayısı fazlaysa sıcaklık yüksek → <b>Alçak Basınç (AB)</b>; mum az veya buz varsa sıcaklık düşük → <b>Yüksek Basınç (YB)</b> oluşur. Rüzgâr (ve tüy) her zaman <b>soğuk uçtan (YB) sıcak uca (AB)</b> doğru hareket eder ve sıcaklık/basınç farkı arttıkça rüzgârın hızı artar:</p>
<ul>
<li><b>I. Düzenek:</b> L ucu (1 mum - YB) → K ucu (3 mum - AB), yani <b>1 (sol) yönünde</b> hareket eder.</li>
<li><b>II. Düzenek:</b> M ucu (Buz - çok soğuk YB) → N ucu (3 mum - çok sıcak AB), yani <b>2 (sağ) yönünde</b> ve sıcaklık farkı en büyük olduğu için <b>en hızlı</b> hareket eder (<b>C doğru</b>).</li>
<li><b>III. Düzenek:</b> İki uçta da 2 mum olduğundan sıcaklık ve basınç eşittir; rüzgâr oluşmaz, tüy hareket etmez.</li>
</ul>`
},
{
  q: `<p>Aşağıdaki Şekil 1’de Dünya’nın Güneş etrafındaki yörüngesinde bulunduğu dört konum (I, II, III, IV), Şekil 2’de ise Dünya bu konumlardan birindeyken K, L ve M şehirlerinde ölçülen gündüz ve gece süreleri sütun grafiğiyle verilmiştir.</p>
<div class="fig"><svg viewBox="0 0 540 190" width="520" role="img" aria-label="Yörünge konumları ve gece gündüz sütun grafiği">
<ellipse cx="145" cy="95" rx="115" ry="52" fill="none" stroke="#94a3b8" stroke-dasharray="4 3"/>
<circle cx="145" cy="95" r="18" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
<g stroke="#1e3a8a" stroke-width="1.4">
<circle cx="30" cy="95" r="13" fill="#93c5fd"/><line x1="24" y1="109" x2="36" y2="81"/>
<circle cx="260" cy="95" r="13" fill="#93c5fd"/><line x1="254" y1="109" x2="266" y2="81"/>
<circle cx="145" cy="147" r="13" fill="#93c5fd"/><line x1="139" y1="161" x2="151" y2="133"/>
<circle cx="145" cy="43" r="13" fill="#93c5fd"/><line x1="139" y1="57" x2="151" y2="29"/>
</g>
<g font-size="11" font-weight="bold" text-anchor="middle">
<text x="30" y="125">I</text><text x="145" y="176">II</text><text x="260" y="125">III</text><text x="145" y="21">IV</text>
<text x="145" y="188">Şekil 1</text>
</g>
<line x1="335" y1="150" x2="520" y2="150" stroke="#334155" stroke-width="1.5"/>
<line x1="335" y1="25" x2="335" y2="150" stroke="#334155" stroke-width="1.5"/>
<line x1="335" y1="88" x2="520" y2="88" stroke="#94a3b8" stroke-dasharray="4 3"/>
<text x="330" y="91" font-size="9.5" text-anchor="end">12 sa</text>
<text x="330" y="42" font-size="9.5" text-anchor="end">18 sa</text>
<text x="330" y="135" font-size="9.5" text-anchor="end">6 sa</text>
<rect x="355" y="40" width="16" height="110" fill="#fbbf24"/><rect x="373" y="130" width="16" height="20" fill="#1e3a8a"/>
<rect x="415" y="88" width="16" height="62" fill="#fbbf24"/><rect x="433" y="88" width="16" height="62" fill="#1e3a8a"/>
<rect x="475" y="120" width="16" height="30" fill="#fbbf24"/><rect x="493" y="55" width="16" height="95" fill="#1e3a8a"/>
<g font-size="10.5" font-weight="bold" text-anchor="middle">
<text x="372" y="164">K</text><text x="432" y="164">L</text><text x="492" y="164">M</text>
<text x="428" y="188">Şekil 2</text>
</g>
<rect x="355" y="12" width="10" height="10" fill="#fbbf24"/><text x="369" y="21" font-size="9.5">Gündüz</text>
<rect x="420" y="12" width="10" height="10" fill="#1e3a8a"/><text x="434" y="21" font-size="9.5">Gece</text>
</svg></div>
<p>K şehrinin <b>Güney Yarım Küre’de</b> olduğu bilindiğine göre aşağıdakilerden hangisi <b>kesinlikle doğrudur</b>?</p>`,
  c: [
    `Şekil 2’deki ölçümler Dünya I numaralı konumdayken yapılmıştır.`,
    `Dünya III konumundan IV konumuna giderken M şehrinde gündüzler uzamaya başlar ancak gece süresi hâlâ gündüz süresinden uzundur.`,
    `L şehrine Güneş ışınları yıl boyunca hep dik açıyla düşer.`,
    `Dünya I konumundayken M şehrinde kış, K şehrinde yaz mevsimi başlar.`
  ],
  a: "B",
  s: `<p>Şekil 2’de K şehrinde gündüz süresi 18 saat, gece 6 saattir (Gündüz &gt; Gece). K şehri <b>Güney Yarım Küre’de</b> olduğuna göre Güney Yarım Küre’de yaz yaşanmaktadır; yani bu konum Kuzey Kutbu’nun Güneş’ten uzağa eğik olduğu <b>III numaralı konumdur (21 Aralık)</b> (A yanlıştır).</p>
<p>21 Aralık’ta (III) L şehrinde gece = gündüz (12 saat) olduğundan <b>L Ekvator</b> üzerindedir (Ekvator’a ışınlar yılda yalnızca 2 kez dik düşer, C yanlıştır). M şehrinde ise 21 Aralık’ta gece &gt; gündüz olduğundan <b>M Kuzey Yarım Küre’dedir</b> (D yanlıştır: I konumunda yani 21 Haziran’da M’de yaz başlar).</p>
<p>Dünya III (21 Aralık) konumundan IV (21 Mart) konumuna giderken Kuzey Yarım Küre’deki M şehrinde en uzun gece geride kalmıştır; <b>gündüzler uzamaya başlar fakat 21 Mart’ta eşitlenene kadar gece süresi hâlâ gündüz süresinden uzundur</b> (<b>B kesinlikle doğru</b>).</p>`
},
{
  q: `<p>Bir güneş enerjisi mühendisi, güneş panellerinden maksimum verim alabilmek için panel yüzeyine Güneş ışınlarının öğle vakti tam <b>dik (90°)</b> gelmesini sağlayan hareketli bir mekanizma tasarlamıştır. Aşağıdaki görselde sistemin çalışma prensibi, tabloda ise X şehrindeki panelin dört önemli tarihte öğle vakti yatay zeminle yaptığı <b>eğim açısı (α)</b> verilmiştir.</p>
<div class="fig"><svg viewBox="0 0 540 165" width="520" role="img" aria-label="Güneş paneli eğim açısı düzeneği ve tablo">
<line x1="20" y1="140" x2="230" y2="140" stroke="#475569" stroke-width="3"/>
<line x1="70" y1="140" x2="175" y2="65" stroke="#1e3a8a" stroke-width="6"/>
<line x1="145" y1="86" x2="145" y2="140" stroke="#64748b" stroke-width="2.5"/>
<path d="M110,140 A40,40 0 0,0 102,117" fill="none" stroke="#dc2626" stroke-width="2"/>
<text x="118" y="132" font-size="12" font-weight="bold" fill="#dc2626">α</text>
<g stroke="#f59e0b" stroke-width="2.2">
<line x1="65" y1="20" x2="105" y2="76"/><line x1="95" y1="15" x2="135" y2="71"/><line x1="125" y1="10" x2="165" y2="66"/>
</g>
<rect x="108" y="75" width="9" height="9" fill="none" stroke="#dc2626" stroke-width="1.5" transform="rotate(-35.5 112 79)"/>
<text x="125" y="158" font-size="10.5" text-anchor="middle">Panel ışığa dik olduğunda: Işın açısı + α = 90°</text>
<g font-size="10.5">
<rect x="255" y="20" width="270" height="26" fill="#e2e8f0" stroke="#94a3b8"/>
<rect x="255" y="46" width="270" height="24" fill="#fff" stroke="#94a3b8"/>
<rect x="255" y="70" width="270" height="24" fill="#f8fafc" stroke="#94a3b8"/>
<rect x="255" y="94" width="270" height="24" fill="#fff" stroke="#94a3b8"/>
<rect x="255" y="118" width="270" height="24" fill="#f8fafc" stroke="#94a3b8"/>
<line x1="385" y1="20" x2="385" y2="142" stroke="#94a3b8"/>
<text x="320" y="37" font-weight="bold" text-anchor="middle">Tarih</text>
<text x="455" y="37" font-weight="bold" text-anchor="middle">Panel Eğim Açısı (α)</text>
<text x="320" y="62" text-anchor="middle">21 Mart</text><text x="455" y="62" text-anchor="middle">40°</text>
<text x="320" y="86" text-anchor="middle">21 Haziran</text><text x="455" y="86" text-anchor="middle">16,5°</text>
<text x="320" y="110" text-anchor="middle">23 Eylül</text><text x="455" y="110" text-anchor="middle">40°</text>
<text x="320" y="134" text-anchor="middle">21 Aralık</text><text x="455" y="134" text-anchor="middle">63,5°</text>
</g>
</svg></div>
<p>Yalnızca bu verilere göre X şehri ile ilgili aşağıdakilerden hangisi <b>yanlıştır</b>?</p>`,
  c: [
    `Güneş ışınlarının yatay zemine en büyük açıyla (73,5°) düştüğü tarih 21 Haziran’dır.`,
    `X şehri Kuzey Yarım Küre’de, Yengeç Dönencesi’nin kuzeyinde (Türkiye gibi orta kuşakta) yer almaktadır.`,
    `21 Aralık’ta Güneş ışınları yatay zemine daha eğik geldiği için panel zemine göre daha dik (63,5°) konumlandırılmıştır.`,
    `Panel eğim açısının (α) en küçük olduğu 21 Haziran’da X şehrindeki cisimlerin öğle vakti gölge boyu sıfır olur.`
  ],
  a: "D",
  s: `<p>Panel yüzeyine ışınların dik düşmesi için <b>(Güneş ışınlarının yatay zemine geliş açısı) + (Panel eğim açısı α) = 90°</b> olmalıdır:</p>
<ul>
<li><b>21 Haziran:</b> α = 16,5° olduğundan ışınların yere geliş açısı = 90° − 16,5° = <b>73,5°</b> (En dik açı → Yaz başlangıcı → Kuzey Yarım Küre).</li>
<li><b>21 Aralık:</b> α = 63,5° olduğundan ışınların yere geliş açısı = 90° − 63,5° = <b>26,5°</b> (En eğik açı → Kış başlangıcı).</li>
</ul>
<p>Gölge boyunun sıfır olması için ışınların yere <b>90°</b> açıyla gelmesi (yani panelin yere tamamen paralel olup α = 0° olması) gerekirdi. α = 16,5° olduğu için ışınlar 90° ile gelmemiştir; gölge boyu en kısa değerindedir ancak <b>sıfır olmaz</b>. Cevap <b>D</b>.</p>`
},
{
  q: `<p>Bir araştırmacı özdeş el fenerleri, özdeş termometreler ve özdeş siyah metal levhalar kullanarak aşağıdaki kontrollü deney düzeneğini kuruyor. Başlangıç sıcaklıkları 20 °C olan levhalara fenerler eşit uzaklıktan (15 cm) farklı açılarla 10 dakika boyunca tutuluyor ve son sıcaklıklar grafikteki gibi kaydediliyor.</p>
<div class="fig"><svg viewBox="0 0 540 175" width="520" role="img" aria-label="Fener açısı ve sıcaklık artışı deney düzeneği">
<g stroke="#475569" stroke-width="3">
<line x1="20" y1="130" x2="100" y2="130"/>
<line x1="120" y1="130" x2="205" y2="130"/>
<line x1="225" y1="130" x2="320" y2="130"/>
</g>
<g stroke="#f59e0b" stroke-width="2">
<line x1="52" y1="35" x2="52" y2="130"/><line x1="68" y1="35" x2="68" y2="130"/>
<line x1="130" y1="45" x2="160" y2="130"/><line x1="148" y1="45" x2="178" y2="130"/>
<line x1="225" y1="65" x2="285" y2="130"/><line x1="245" y1="65" x2="305" y2="130"/>
</g>
<line x1="52" y1="130" x2="68" y2="130" stroke="#dc2626" stroke-width="6"/>
<line x1="160" y1="130" x2="178" y2="130" stroke="#f97316" stroke-width="6"/>
<line x1="285" y1="130" x2="305" y2="130" stroke="#eab308" stroke-width="6"/>
<g font-size="10.5" text-anchor="middle">
<text x="60" y="148" font-weight="bold">I. Levha (90°)</text><text x="60" y="162">Alan: S₁</text>
<text x="162" y="148" font-weight="bold">II. Levha (60°)</text><text x="162" y="162">Alan: S₂</text>
<text x="272" y="148" font-weight="bold">III. Levha (30°)</text><text x="272" y="162">Alan: S₃</text>
</g>
<line x1="365" y1="140" x2="520" y2="140" stroke="#334155" stroke-width="1.5"/>
<line x1="365" y1="20" x2="365" y2="140" stroke="#334155" stroke-width="1.5"/>
<rect x="385" y="35" width="26" height="105" fill="#dc2626"/>
<rect x="432" y="62" width="26" height="78" fill="#f97316"/>
<rect x="479" y="95" width="26" height="45" fill="#eab308"/>
<g font-size="10" text-anchor="middle">
<text x="398" y="30" font-weight="bold">34 °C</text><text x="398" y="154">I</text>
<text x="445" y="57" font-weight="bold">29 °C</text><text x="445" y="154">II</text>
<text x="492" y="90" font-weight="bold">24 °C</text><text x="492" y="154">III</text>
<text x="445" y="170" font-weight="bold">Son Sıcaklık (°C)</text>
</g>
</svg></div>
<p>Bu deneyle ilgili aşağıdaki çıkarımlardan hangisi <b>yapılamaz</b>?</p>`,
  c: [
    `Deneyin bağımsız değişkeni ışınların yüzeye düşme açısı, bağımlı değişkeni ise levhalardaki sıcaklık artışıdır.`,
    `Levhalar üzerinde aydınlanan bölgelerin alanları arasındaki ilişki S₃ > S₂ > S₁ şeklindedir.`,
    `I. fenerin yaydığı toplam ışık enerjisi, III. fenerin yaydığı toplam ışık enerjisinden daha fazladır.`,
    `21 Aralık öğle vakti Oğlak Dönencesi I. levhayı, Yengeç Dönencesi ise III. levhayı temsil edebilir.`
  ],
  a: "C",
  s: `<p>Deneyde kullanılan el fenerleri <b>özdeştir</b> ve eşit süre (10 dk) açık tutulmuştur; dolayısıyla üç fenerin de <b>yaydığı toplam ışık enerjisi birbirine eşittir</b> (<b>C yanlıştır</b>).</p>
<p>Sıcaklık artışlarının farklı olmasının nedeni fenerlerin yaydığı toplam enerji değil, ışığın düştüğü yüzey alanının (S₃ &gt; S₂ &gt; S₁) değişmesi ve buna bağlı olarak <b>birim yüzeye düşen enerji miktarının</b> (E₁ &gt; E₂ &gt; E₃) farklı olmasıdır. Cevap <b>C</b>.</p>`
},
{
  q: `<p>Bir kıyı kasabasında yer alan Kara (X) ve Deniz (Y) bölgelerinin aynı gün içindeki 24 saatlik sıcaklık değişim grafiği aşağıda verilmiştir.</p>
<div class="fig"><svg viewBox="0 0 500 200" width="480" role="img" aria-label="Kara ve deniz 24 saatlik sıcaklık değişim grafiği">
<line x1="55" y1="160" x2="475" y2="160" stroke="#334155" stroke-width="1.5"/>
<line x1="55" y1="20" x2="55" y2="160" stroke="#334155" stroke-width="1.5"/>
<path d="M70,135 Q130,145 170,105 Q250,20 330,105 Q380,145 450,138" fill="none" stroke="#dc2626" stroke-width="2.5"/>
<path d="M70,100 Q130,110 170,105 Q250,80 330,105 Q380,112 450,102" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="6 3"/>
<g stroke="#94a3b8" stroke-dasharray="3 3">
<line x1="170" y1="105" x2="170" y2="160"/>
<line x1="250" y1="52" x2="250" y2="160"/>
<line x1="330" y1="105" x2="330" y2="160"/>
</g>
<circle cx="170" cy="105" r="4" fill="#1e293b"/><circle cx="330" cy="105" r="4" fill="#1e293b"/>
<g font-size="10" text-anchor="middle">
<text x="70" y="175">00.00</text><text x="170" y="175" font-weight="bold">08.00 (t₁)</text><text x="250" y="175" font-weight="bold">14.00</text><text x="330" y="175" font-weight="bold">20.00 (t₂)</text><text x="450" y="175">24.00</text>
<text x="265" y="193" font-weight="bold">Saatler</text>
</g>
<text x="20" y="90" font-size="10.5" font-weight="bold" transform="rotate(-90 20 90)" text-anchor="middle">Sıcaklık (°C)</text>
<line x1="330" y1="25" x2="355" y2="25" stroke="#dc2626" stroke-width="2.5"/><text x="360" y="29" font-size="10.5">Kara (X)</text>
<line x1="330" y1="42" x2="355" y2="42" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="5 2"/><text x="360" y="46" font-size="10.5">Deniz (Y)</text>
</svg></div>
<p>Grafiğe göre bu kıyı kasabasında gerçekleşen hava olayları ile ilgili aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [
    `08.00 ile 20.00 saatleri arasında rüzgârın yönü X bölgesinden (Kara) Y bölgesine (Deniz) doğrudur.`,
    `Saat 14.00’te Y bölgesinde (Deniz) yükselici hava hareketi görülürken X bölgesinde alçalıcı hava hareketi görülür.`,
    `Saat 00.00 – 08.00 aralığında X bölgesi yüksek basınç alanıdır ve rüzgâr X’ten Y’ye doğru eser.`,
    `t₁ (08.00) ve t₂ (20.00) anlarında X ve Y bölgeleri arasındaki rüzgâr hızı en yüksek değerine ulaşır.`
  ],
  a: "C",
  s: `<p>Grafik incelendiğinde:</p>
<ul>
<li><b>00.00 – 08.00 arası (Gece):</b> Kara (X) sıcaklığı Deniz (Y) sıcaklığından düşüktür. Soğuk olan <b>X (Kara) Yüksek Basınç (YB)</b>, ılık olan <b>Y (Deniz) Alçak Basınç (AB)</b> alanıdır. Rüzgâr YB’den AB’ye yani <b>X’ten Y’ye (karadan denize)</b> doğru eser (<b>C doğru</b>).</li>
<li><b>08.00 – 20.00 arası (Gündüz):</b> Kara (X) daha sıcaktır (AB), Deniz (Y) daha serindir (YB). Rüzgâr <b>Y’den X’e (denizden karaya)</b> eser (A ve B yanlıştır).</li>
<li><b>t₁ ve t₂ anları:</b> İki bölgenin sıcaklığı eşitlendiği için basınç farkı sıfırlanır ve <b>rüzgâr durur</b> (D yanlıştır).</li>
</ul>`
},
{
  q: `<p>Aşağıdaki şekilde birbirine komşu K ve L bölgelerinde gerçekleşen dikey ve yatay yönlü hava hareketleri oklarla modellenmiştir.</p>
<div class="fig"><svg viewBox="0 0 480 175" width="460" role="img" aria-label="K ve L bölgelerinde dikey ve yatay hava hareketleri">
<defs><marker id="q6A" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker></defs>
<rect x="30" y="135" width="170" height="26" rx="4" fill="#cbd5e1" stroke="#475569"/>
<rect x="280" y="135" width="170" height="26" rx="4" fill="#cbd5e1" stroke="#475569"/>
<text x="115" y="153" font-size="13" font-weight="bold" text-anchor="middle">K Bölgesi</text>
<text x="365" y="153" font-size="13" font-weight="bold" text-anchor="middle">L Bölgesi</text>
<g stroke="#1e293b" stroke-width="2.2" fill="none" marker-end="url(#q6A)">
<line x1="100" y1="35" x2="100" y2="120"/><line x1="130" y1="35" x2="130" y2="120"/>
<line x1="350" y1="120" x2="350" y2="35"/><line x1="380" y1="120" x2="380" y2="35"/>
<line x1="205" y1="125" x2="275" y2="125"/>
<line x1="85" y1="125" x2="35" y2="125"/>
<line x1="445" y1="125" x2="395" y2="125"/>
<line x1="335" y1="30" x2="145" y2="30"/>
</g>
</svg></div>
<p>Bu modele göre K ve L bölgeleri ile ilgili,</p>
<p>I. K bölgesinde yüksek basınç alanı oluşmuştur ve hava hareketi merkezden çevreye doğrudur.<br>
II. L bölgesinde bulutlanma ve yağış görülme ihtimali K bölgesine göre daha fazladır.<br>
III. K bölgesindeki havanın sıcaklığı L bölgesinden yüksek, yoğunluğu ise L bölgesinden düşüktür.</p>
<p>yargılarından hangileri doğrudur?</p>`,
  c: [`Yalnız I`, `I ve II`, `II ve III`, `I, II ve III`],
  a: "B",
  s: `<p>Şekilde K bölgesinde oklar <b>aşağı doğru (alçalıcı hava hareketi)</b> ve yerde <b>merkezden çevreye</b> doğrudur; bu durum K’nin soğuk ve <b>Yüksek Basınç (YB)</b> alanı olduğunu gösterir (<b>I doğru</b>).</p>
<p>L bölgesinde ise oklar <b>yukarı doğru (yükselici hava hareketi)</b> ve yerde <b>çevreden merkeze</b> doğrudur; L sıcak ve <b>Alçak Basınç (AB)</b> alanıdır. Yükselen nemli hava soğuyarak bulut ve yağış oluşturur (<b>II doğru</b>).</p>
<p>III yanlıştır: K bölgesi soğuk olduğu için sıcaklığı L’den <b>düşük</b>, tanecikler birbirine yakın olduğu için hava yoğunluğu L’den <b>fazladır</b>. Cevap <b>B</b>.</p>`
},
{
  q: `<p>Aşağıdaki grafikte Dünya üzerindeki X, Y ve Z şehirlerinde yıl boyunca birim yüzeye düşen ortalama Güneş enerjisi miktarının (J/cm²) aylara göre değişimi gösterilmiştir.</p>
<div class="fig"><svg viewBox="0 0 500 205" width="480" role="img" aria-label="X Y Z şehirlerinde birim yüzeye düşen enerji grafiği">
<line x1="55" y1="165" x2="475" y2="165" stroke="#334155" stroke-width="1.5"/>
<line x1="55" y1="20" x2="55" y2="165" stroke="#334155" stroke-width="1.5"/>
<path d="M75,140 Q140,95 215,35 Q285,35 355,95 Q410,140 455,148" fill="none" stroke="#dc2626" stroke-width="2.5"/>
<path d="M75,40 Q140,95 215,145 Q285,145 355,95 Q410,45 455,35" fill="none" stroke="#2563eb" stroke-width="2.5"/>
<path d="M75,65 Q140,30 215,65 Q285,65 355,30 Q410,65 455,68" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="5 3"/>
<g stroke="#cbd5e1" stroke-dasharray="3 3">
<line x1="140" y1="20" x2="140" y2="165"/>
<line x1="250" y1="20" x2="250" y2="165"/>
<line x1="355" y1="20" x2="355" y2="165"/>
<line x1="455" y1="20" x2="455" y2="165"/>
</g>
<g font-size="10" text-anchor="middle">
<text x="75" y="180">Ocak</text><text x="140" y="180" font-weight="bold">21 Mart</text><text x="250" y="180" font-weight="bold">21 Haz</text><text x="355" y="180" font-weight="bold">23 Eyl</text><text x="455" y="180" font-weight="bold">21 Ara</text>
</g>
<text x="20" y="92" font-size="10" font-weight="bold" transform="rotate(-90 20 92)" text-anchor="middle">Birim Yüzey Enerjisi</text>
<line x1="100" y1="15" x2="125" y2="15" stroke="#dc2626" stroke-width="2.5"/><text x="130" y="19" font-size="10.5" font-weight="bold">X şehri</text>
<line x1="210" y1="15" x2="235" y2="15" stroke="#2563eb" stroke-width="2.5"/><text x="240" y="19" font-size="10.5" font-weight="bold">Y şehri</text>
<line x1="320" y1="15" x2="345" y2="15" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="5 2"/><text x="350" y="19" font-size="10.5" font-weight="bold">Z şehri</text>
</svg></div>
<p>Grafikteki verilere göre X, Y ve Z şehirleriyle ilgili aşağıdakilerden hangisi <b>kesinlikle doğrudur</b>?</p>`,
  c: [
    `X ve Y şehirleri aynı yarım kürede, farklı enlemlerde yer almaktadır.`,
    `Z şehri Ekvator üzerinde olup yıl boyunca gece ve gündüz süreleri birbirine eşittir.`,
    `21 Haziran’da Y şehrindeki öğle vakti gölge boyu, X şehrindekinden daha kısadır.`,
    `21 Mart’tan 21 Haziran’a kadar geçen sürede Y şehrinde gündüzler uzarken X şehrinde kısalır.`
  ],
  a: "B",
  s: `<p>Grafikte:</p>
<ul>
<li><b>X şehri (Kırmızı):</b> Birim yüzeye düşen enerji <b>21 Haziran</b>’da maksimum, 21 Aralık’ta minimumdur → <b>Kuzey Yarım Küre</b>.</li>
<li><b>Y şehri (Mavi):</b> Birim yüzeye düşen enerji <b>21 Aralık</b>’ta maksimum, 21 Haziran’da minimumdur → <b>Güney Yarım Küre</b> (A yanlıştır).</li>
<li><b>Z şehri (Yeşil):</b> Birim yüzeye düşen enerji tam <b>21 Mart ve 23 Eylül</b>’de (ekinokslarda) en üst değere ulaşmakta ve yıl boyu yüksek seyretmektedir → <b>Ekvator</b> üzerindedir ve Ekvator’da yıl boyunca gece–gündüz eşittir (<b>B doğru</b>).</li>
</ul>
<p>C yanlıştır: 21 Haziran’da X’e ışınlar daha dik geldiği için X’te gölge daha kısadır. D yanlıştır: 21 Mart – 21 Haziran arasında KYK’deki X’te gündüzler uzar, GYK’deki Y’de kısalır.</p>`
},
{
  q: `<p>K şehrinde yaşayan Kerem, 21 Aralık günü uçakla önce L şehrine, birkaç gün sonra da M şehrine seyahat ediyor. Kerem’in seyahat rotası Şekil 1’de, gittiği şehirlerde aynı saatte (öğle vakti) kendi boyunun gölge uzunluğunu ölçerek çizdiği grafik ise Şekil 2’de verilmiştir.</p>
<div class="fig"><svg viewBox="0 0 540 175" width="520" role="img" aria-label="Kerem'in K L M seyahat rotası ve gölge boyu grafiği">
<circle cx="115" cy="90" r="75" fill="#e0f2fe" stroke="#1e3a8a" stroke-width="2"/>
<line x1="40" y1="90" x2="190" y2="90" stroke="#1e3a8a" stroke-width="2"/>
<line x1="47" y1="58" x2="183" y2="58" stroke="#1e3a8a" stroke-dasharray="4 3"/>
<line x1="47" y1="122" x2="183" y2="122" stroke="#1e3a8a" stroke-dasharray="4 3"/>
<g fill="#dc2626"><circle cx="100" cy="42" r="4.5"/><circle cx="130" cy="90" r="4.5"/><circle cx="110" cy="122" r="4.5"/></g>
<path d="M100,42 Q125,65 130,90 Q125,110 110,122" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="3 2"/>
<g font-size="11" font-weight="bold"><text x="83" y="45">K</text><text x="140" y="86">L</text><text x="92" y="126">M</text></g>
<g font-size="9.5" fill="#1e3a8a"><text x="195" y="61">Yengeç Dön.</text><text x="195" y="93">Ekvator</text><text x="195" y="125">Oğlak Dön.</text></g>
<text x="115" y="172" font-size="11" font-weight="bold" text-anchor="middle">Şekil 1 (21 Aralık)</text>
<line x1="325" y1="145" x2="510" y2="145" stroke="#334155" stroke-width="1.5"/>
<line x1="325" y1="25" x2="325" y2="145" stroke="#334155" stroke-width="1.5"/>
<rect x="350" y="40" width="28" height="105" fill="#64748b"/>
<rect x="410" y="95" width="28" height="50" fill="#64748b"/>
<circle cx="484" cy="145" r="4" fill="#dc2626"/>
<g font-size="10.5" font-weight="bold" text-anchor="middle">
<text x="364" y="160">K</text><text x="424" y="160">L</text><text x="484" y="160">M</text>
<text x="484" y="135" fill="#dc2626">0 cm</text>
<text x="420" y="172">Şekil 2 (Öğle Vakti Gölge Boyu)</text>
</g>
<text x="308" y="85" font-size="10" transform="rotate(-90 308 85)" text-anchor="middle">Gölge boyu</text>
</svg></div>
<p>Buna göre Kerem’in K → L → M yolculuğu boyunca yaşadığı değişimlerle ilgili aşağıdakilerden hangisi <b>yanlıştır</b>?</p>`,
  c: [
    `Yolculuk boyunca gittiği şehirlerde ölçülen gündüz süresi sürekli artmıştır (M > L > K).`,
    `M şehri Oğlak Dönencesi üzerindedir ve 21 Aralık’ta Güneş ışınlarını 90° açıyla almıştır.`,
    `Kerem aynı yolculuğu 21 Haziran’da yapsaydı gölge boyu yine M şehrinde en kısa olurdu.`,
    `K şehrinden L şehrine gittiğinde kış mevsiminden gece–gündüz eşitliğinin yaşandığı kuşağa geçmiştir.`
  ],
  a: "C",
  s: `<p>21 Aralık’ta Güneş ışınları <b>Oğlak Dönencesi’ne (M)</b> dik (90°) gelir; bu yüzden M’de öğle vakti gölge oluşmaz (0 cm) ve kuzeyden güneye (K → L → M) gidildikçe gündüz süresi kesintisiz artar (A, B ve D doğrudur).</p>
<p>Ancak <b>21 Haziran</b>’da Güneş ışınları Yengeç Dönencesi’ne dik gelir; bu tarihte Güney Yarım Küre’deki M şehrinde kış başlar ve ışınlar M’ye oldukça eğik düşer. Dolayısıyla 21 Haziran’da gölge boyu M’de en kısa değil, K’ye göre çok daha uzun olurdu (<b>C yanlıştır</b>).</p>`
},
{
  q: `<p>Mevcut durumda Dünya’nın dönme ekseni yörünge düzlemine göre <b>23° 27′</b> eğiktir ve bu nedenle Yengeç ile Oğlak Dönenceleri 23° 27′ enlemlerinden, Kutup Daireleri ise 66° 33′ enlemlerinden geçmektedir. Bir bilim insanı, Dünya’nın eksen eğikliğinin 23° 27′ yerine <b>40°</b> olduğu varsayımsal bir model hazırlıyor.</p>
<div class="fig"><svg viewBox="0 0 500 165" width="480" role="img" aria-label="23.5 derece ve 40 derece eksen eğikliği karşılaştırması">
<circle cx="130" cy="82" r="62" fill="#dbeafe" stroke="#1e3a8a" stroke-width="2"/>
<line x1="105" y1="18" x2="155" y2="146" stroke="#dc2626" stroke-width="2"/>
<line x1="68" y1="82" x2="192" y2="82" stroke="#1e3a8a" stroke-dasharray="4 2"/>
<text x="130" y="158" font-size="11" font-weight="bold" text-anchor="middle">Mevcut Durum (Eğiklik: 23° 27′)</text>
<circle cx="370" cy="82" r="62" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<line x1="325" y1="28" x2="415" y2="136" stroke="#dc2626" stroke-width="2"/>
<line x1="308" y1="82" x2="432" y2="82" stroke="#b45309" stroke-dasharray="4 2"/>
<text x="370" y="158" font-size="11" font-weight="bold" text-anchor="middle">Varsayımsal Model (Eğiklik: 40°)</text>
</svg></div>
<p>Dünya’nın eksen eğikliği 40° olsaydı Türkiye (36°–42° Kuzey paralelleri) ve Dünya genelinde aşağıdakilerden hangisi <b>gerçekleşirdi</b>?</p>`,
  c: [
    `Güneş ışınlarının dik gelebildiği alan daralır ve Türkiye’ye ışınlar yine hiçbir zaman dik gelmezdi.`,
    `Dönenceler 40° Kuzey ve 40° Güney enlemlerinden geçer; Türkiye’nin bir kısmına Güneş ışınları dik açıyla düşebilirdi.`,
    `Türkiye’de yaz ve kış mevsimleri arasındaki yıllık sıcaklık farkı azalırdı.`,
    `Ekvator’dan kutuplara gidildikçe gece ve gündüz süreleri arasındaki fark azalırdı.`
  ],
  a: "B",
  s: `<p>Dönencelerin derecesi doğrudan <b>eksen eğikliği açısına</b> eşittir:</p>
<ul>
<li>Eksen eğikliği <b>40°</b> olsaydı Yengeç Dönencesi <b>40° K</b>, Oğlak Dönencesi <b>40° G</b> paralelinden geçerdi (Kutup daireleri ise 90° − 40° = 50° enlemlerine inerdi).</li>
<li>Böylece Güneş ışınlarının dik gelebildiği kuşak <b>genişler</b> ve 36°–42° K arasında yer alan Türkiye’nin 36°–40° K arasındaki şehirlerine Güneş ışınları yılda 2 kez (40° K’ye 1 kez) <b>dik açıyla düşebilirdi</b> (<b>B doğru</b>, A yanlıştır).</li>
<li>Eğiklik arttığında yazlar çok daha sıcak, kışlar çok daha soğuk olur (yıllık sıcaklık farkı ve gece–gündüz süresi farkı <b>artar</b>, C ve D yanlıştır).</li>
</ul>`
},
{
  q: `<p>Birbirine komşu K, L ve M şehirlerinin arasına özdeş iki rüzgâr gülü (anemometre) yerleştirilmiştir. Bir süre sonra 1. rüzgâr gülünün K’den L’ye doğru <b>dakikada 40 tur</b>, 2. rüzgâr gülünün ise M’den L’ye doğru <b>dakikada 90 tur</b> döndüğü gözlemleniyor.</p>
<div class="fig"><svg viewBox="0 0 520 140" width="500" role="img" aria-label="K L M bölgeleri arasında rüzgar gülleri">
<defs><marker id="rgA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#0f766e"/></marker></defs>
<rect x="20" y="95" width="120" height="30" rx="4" fill="#93c5fd"/>
<rect x="200" y="95" width="120" height="30" rx="4" fill="#fca5a5"/>
<rect x="380" y="95" width="120" height="30" rx="4" fill="#60a5fa"/>
<g font-size="13" font-weight="bold" text-anchor="middle">
<text x="80" y="115">K Bölgesi</text><text x="260" y="115">L Bölgesi</text><text x="440" y="115">M Bölgesi</text>
</g>
<line x1="170" y1="55" x2="170" y2="95" stroke="#475569" stroke-width="3"/><circle cx="170" cy="55" r="14" fill="none" stroke="#dc2626" stroke-width="2.5"/>
<line x1="350" y1="55" x2="350" y2="95" stroke="#475569" stroke-width="3"/><circle cx="350" cy="55" r="14" fill="none" stroke="#dc2626" stroke-width="2.5"/>
<path d="M135,32 L205,32" stroke="#0f766e" stroke-width="2.5" marker-end="url(#rgA)"/>
<path d="M385,32 L315,32" stroke="#0f766e" stroke-width="3.5" marker-end="url(#rgA)"/>
<g font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0f766e">
<text x="170" y="22">1. Rüzgâr Gülü (40 tur/dk)</text>
<text x="350" y="22">2. Rüzgâr Gülü (90 tur/dk)</text>
</g>
</svg></div>
<p>Buna göre K, L ve M bölgelerinin hava sıcaklıkları (T) ve açık hava basınçları (P) arasındaki ilişki aşağıdakilerin hangisinde doğru verilmiştir?</p>`,
  c: [
    `Sıcaklık: T(L) > T(K) > T(M)  —  Basınç: P(M) > P(K) > P(L)`,
    `Sıcaklık: T(M) > T(K) > T(L)  —  Basınç: P(L) > P(K) > P(M)`,
    `Sıcaklık: T(L) > T(M) > T(K)  —  Basınç: P(K) > P(M) > P(L)`,
    `Sıcaklık: T(K) > T(L) > T(M)  —  Basınç: P(M) > P(L) > P(K)`
  ],
  a: "A",
  s: `<p>Her iki rüzgâr da <b>L bölgesine doğru</b> (K → L ve M → L) esmektedir. Rüzgâr yüksek basınçtan alçak basınca doğru estiği için <b>en düşük basınç P(L)</b> ve <b>en yüksek sıcaklık T(L)</b> L bölgesindedir.</p>
<p>2. rüzgâr gülü (90 tur/dk), 1. rüzgâr gülünden (40 tur/dk) daha hızlı döndüğüne göre <b>M ile L arasındaki basınç ve sıcaklık farkı, K ile L arasındakinden daha büyüktür</b>. Dolayısıyla M’nin basıncı K’den daha yüksek (<b>P(M) &gt; P(K) &gt; P(L)</b>), sıcaklığı ise K’den daha düşüktür (<b>T(L) &gt; T(K) &gt; T(M)</b>). Cevap <b>A</b>.</p>`
},
{
  q: `<p>Atmosferdeki su buharının yoğunlaşma (yoğuşma veya donma) yüksekliğine ve ortam sıcaklığına bağlı olarak oluşan hava olaylarını sınıflandırmak için aşağıdaki tanılayıcı dallanmış ağaç hazırlanmıştır.</p>
<div class="fig"><svg viewBox="0 0 540 175" width="520" role="img" aria-label="Yağış türleri karar şeması">
<rect x="175" y="10" width="190" height="28" rx="5" fill="#e2e8f0" stroke="#475569"/>
<text x="270" y="28" font-size="11" font-weight="bold" text-anchor="middle">Atmosferdeki Nem (Su Buharı)</text>
<line x1="220" y1="38" x2="130" y2="62" stroke="#475569" stroke-width="1.5"/>
<line x1="320" y1="38" x2="410" y2="62" stroke="#475569" stroke-width="1.5"/>
<rect x="40" y="62" width="180" height="28" rx="4" fill="#dbeafe" stroke="#1e3a8a"/>
<rect x="320" y="62" width="180" height="28" rx="4" fill="#fef3c7" stroke="#b45309"/>
<text x="130" y="80" font-size="10.5" font-weight="bold" text-anchor="middle">Gökyüzünde (Üst Tabakada)</text>
<text x="410" y="80" font-size="10.5" font-weight="bold" text-anchor="middle">Yeryüzüne Yakın (Zeminde)</text>
<line x1="90" y1="90" x2="65" y2="120" stroke="#475569" stroke-width="1.5"/>
<line x1="170" y1="90" x2="195" y2="120" stroke="#475569" stroke-width="1.5"/>
<line x1="370" y1="90" x2="345" y2="120" stroke="#475569" stroke-width="1.5"/>
<line x1="450" y1="90" x2="475" y2="120" stroke="#475569" stroke-width="1.5"/>
<rect x="15" y="120" width="105" height="44" rx="4" fill="#f8fafc" stroke="#64748b"/>
<rect x="140" y="120" width="115" height="44" rx="4" fill="#f8fafc" stroke="#64748b"/>
<rect x="290" y="120" width="110" height="44" rx="4" fill="#f8fafc" stroke="#64748b"/>
<rect x="420" y="120" width="110" height="44" rx="4" fill="#f8fafc" stroke="#64748b"/>
<g font-size="9.5" text-anchor="middle">
<text x="67" y="136">0 °C üstü sıvı</text><text x="67" y="154" font-weight="bold" font-size="11" fill="#dc2626">( K )</text>
<text x="197" y="136">Ani yükselimle buz</text><text x="197" y="154" font-weight="bold" font-size="11" fill="#dc2626">( L )</text>
<text x="345" y="136">0 °C üstü damlacık</text><text x="345" y="154" font-weight="bold" font-size="11" fill="#dc2626">( M )</text>
<text x="475" y="136">0 °C altı kristalleşme</text><text x="475" y="154" font-weight="bold" font-size="11" fill="#dc2626">( N )</text>
</g>
</svg></div>
<p>Şemada K, L, M ve N harfleriyle gösterilen kutulara aşağıdakilerden hangisi yazılmalıdır?</p>`,
  c: [
    `K: Yağmur — L: Dolu — M: Çiy — N: Kırağı`,
    `K: Çiy — L: Kar — M: Yağmur — N: Kırağı`,
    `K: Yağmur — L: Kar — M: Kırağı — N: Çiy`,
    `K: Sis — L: Dolu — M: Çiy — N: Kar`
  ],
  a: "A",
  s: `<p>Oluşum yeri ve sıcaklık koşullarına göre:</p>
<ul>
<li><b>K (Gökyüzünde, 0 °C üstü sıvı damlacık):</b> <b>Yağmur</b></li>
<li><b>L (Gökyüzünde, ani yükselen hava hareketiyle donan buz topları):</b> <b>Dolu</b></li>
<li><b>M (Yeryüzüne yakın, 0 °C üstü yaprak/cisim üzerinde su damlacıkları):</b> <b>Çiy</b></li>
<li><b>N (Yeryüzüne yakın, 0 °C altında doğrudan buz kristallerine dönüşüm):</b> <b>Kırağı</b></li>
</ul>
<p>Doğru eşleştirme <b>A</b> seçeneğindedir.</p>`
},
{
  q: `<p>Aşağıdaki şekilde Dünya’nın üç farklı tarihteki konumunda Güneş ışınlarının geliş yönü ve <b>aydınlanma çemberinin</b> (gece ile gündüzü ayıran sınırın) uzanışı gösterilmiştir.</p>
<div class="fig"><svg viewBox="0 0 540 165" width="520" role="img" aria-label="Üç farklı tarihte aydınlanma çemberi">
<g font-size="10.5" font-weight="bold" text-anchor="middle">
<text x="90" y="18">I. Görünüm</text><text x="270" y="18">II. Görünüm</text><text x="450" y="18">III. Görünüm</text>
</g>
<circle cx="90" cy="88" r="55" fill="#fde047" stroke="#1e3a8a" stroke-width="1.8"/>
<path d="M90,33 A55,55 0 0,1 90,143 Z" fill="#1e293b" opacity="0.75"/>
<line x1="68" y1="38" x2="112" y2="138" stroke="#dc2626" stroke-width="2"/>
<line x1="40" y1="110" x2="140" y2="66" stroke="#1e3a8a" stroke-dasharray="3 2"/>
<circle cx="270" cy="88" r="55" fill="#fde047" stroke="#1e3a8a" stroke-width="1.8"/>
<path d="M270,33 A55,55 0 0,1 270,143 Z" fill="#1e293b" opacity="0.75"/>
<line x1="270" y1="33" x2="270" y2="143" stroke="#dc2626" stroke-width="2"/>
<line x1="215" y1="88" x2="325" y2="88" stroke="#1e3a8a" stroke-dasharray="3 2"/>
<circle cx="450" cy="88" r="55" fill="#fde047" stroke="#1e3a8a" stroke-width="1.8"/>
<path d="M450,33 A55,55 0 0,1 450,143 Z" fill="#1e293b" opacity="0.75"/>
<line x1="472" y1="38" x2="428" y2="138" stroke="#dc2626" stroke-width="2"/>
<line x1="400" y1="66" x2="500" y2="110" stroke="#1e3a8a" stroke-dasharray="3 2"/>
<g font-size="9.5" text-anchor="middle" fill="#334155">
<text x="90" y="158">Kuzey Kutbu tamamen aydınlık</text>
<text x="270" y="158">Kutup noktalarından teğet</text>
<text x="450" y="158">Güney Kutbu tamamen aydınlık</text>
</g>
</svg></div>
<p>Güneş ışınlarının üç görünümde de <b>soldan</b> geldiği bilindiğine göre aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [
    `I. görünüm 21 Aralık tarihine aittir ve Türkiye’de en uzun gündüz yaşanır.`,
    `II. görünümde Güneş ışınları yalnızca Yengeç ve Oğlak Dönencelerine dik düşer.`,
    `I. görünümden II. görünüme geçilirken Kuzey Yarım Küre’de gündüz süreleri kısalır ancak gündüz süresi hâlâ gece süresinden uzundur.`,
    `III. görünümde Kuzey Yarım Küre’den Güney Yarım Küre’ye doğru gidildikçe gece süresi uzar.`
  ],
  a: "C",
  s: `<p>Güneş ışınları soldan gelirken:</p>
<ul>
<li><b>I. Görünüm:</b> Kuzey Kutbu Güneş’e dönük ve tamamen aydınlıktır → <b>21 Haziran</b> (A yanlıştır).</li>
<li><b>II. Görünüm:</b> Aydınlanma çemberi tam kutup noktalarından geçerek Ekvator ve tüm paralelleri eşit bölmüştür → <b>21 Mart veya 23 Eylül (Ekinoks)</b>. Bu tarihte ışınlar <b>Ekvator’a</b> dik düşer (B yanlıştır).</li>
<li><b>III. Görünüm:</b> Güney Kutbu tamamen aydınlıktır → <b>21 Aralık</b>. Bu tarihte güneye gidildikçe gündüz süresi uzar, gece süresi kısalır (D yanlıştır).</li>
</ul>
<p>I. görünümden (21 Haziran) II. görünüme (23 Eylül) geçilirken Kuzey Yarım Küre’de gündüzler 15 saatten 12 saate doğru <b>kısalır</b> fakat 23 Eylül’e kadar <b>gündüz süresi hâlâ gece süresinden uzundur</b> (<b>C doğru</b>).</p>`
},
{
  q: `<p>Bir araştırma raporu için Karadeniz Bölgesi’ndeki bir ilimize ait iki farklı veri tablosu hazırlanmıştır.</p>
<table class="rt">
<tr><th>Tablo 1: 1985 – 2025 Yılları Ortalaması</th><th>Tablo 2: 19 – 21 Ekim Günlük Tahmin</th></tr>
<tr><td>• En fazla yağış sonbahar mevsiminde düşer.<br>• Kış ayları ılık, yaz ayları serin geçer.<br>• Yıllık ortalama yağış miktarı 1200 mm’dir.</td><td>• Pazartesi: Öğleden sonra kuvvetli sağanak yağışlı.<br>• Salı: Sabah saatlerinde yoğun sis ve pus bekleniyor.<br>• Çarşamba: Rüzgâr kuzeybatıdan 40 km/sa hızla esecek.</td></tr>
</table>
<p>Tablo 1 ve Tablo 2’deki verilerle ilgili aşağıdaki değerlendirmelerden hangisi <b>yanlıştır</b>?</p>`,
  c: [
    `Tablo 1’deki veriler klimatologlar tarafından, Tablo 2’deki veriler ise meteorologlar tarafından hazırlanmıştır.`,
    `Tablo 2’deki tahminlerin birkaç saat içinde değişme olasılığı yüksekken Tablo 1’deki özellikler kolay değişmez.`,
    `Tablo 1’deki veriler oluşturulurken uzun yıllar boyunca kaydedilen Tablo 2 benzeri günlük gözlem sonuçlarının ortalaması alınmıştır.`,
    `Bir bölgede Salı günü yoğun sis görülmesi o bölgenin ikliminin değiştiğini kanıtlar.`
  ],
  a: "D",
  s: `<p>Tablo 1 <b>iklim</b> (klimatoloji – en az 30-40 yıllık ortalama), Tablo 2 ise <b>hava olayları</b> (meteoroloji – kısa süreli ve değişken tahminler) verilerini içerir (A, B ve C doğrudur).</p>
<p>Kısa süreli bir hava olayı (bir gün sis görülmesi veya yağmur yağması) o bölgenin <b>ikliminin değiştiğini kanıtlamaz</b>; iklim değişikliğinden söz edebilmek için uzun yıllar süren kalıcı ortalama değişimleri gerekir (<b>D yanlıştır</b>).</p>`
},
{
  q: `<p>Güney Yarım Küre’de ve Oğlak Dönencesi’nin güneyinde yer alan bir şehirde yaşayan öğrenci, bahçesindeki ağacın öğle vakti gölge boyunu dört önemli tarihte ölçerek aşağıdaki sütun grafiğini çizmiştir. Öğretmeni grafiği incelediğinde <b>iki tarihteki</b> sütunların birbiriyle yanlışlıkla yer değiştirildiğini fark etmiştir.</p>
<div class="fig"><svg viewBox="0 0 460 180" width="440" role="img" aria-label="Hatalı çizilmiş gölge boyu sütun grafiği">
<line x1="60" y1="145" x2="430" y2="145" stroke="#334155" stroke-width="1.5"/>
<line x1="60" y1="20" x2="60" y2="145" stroke="#334155" stroke-width="1.5"/>
<rect x="95" y="75" width="38" height="70" fill="#3b82f6"/>
<rect x="180" y="110" width="38" height="35" fill="#ef4444"/>
<rect x="265" y="75" width="38" height="70" fill="#3b82f6"/>
<rect x="350" y="30" width="38" height="115" fill="#ef4444"/>
<g font-size="10.5" font-weight="bold" text-anchor="middle">
<text x="114" y="70">80 cm</text><text x="114" y="162">21 Mart</text>
<text x="199" y="105">40 cm</text><text x="199" y="162">21 Haziran</text>
<text x="284" y="70">80 cm</text><text x="284" y="162">23 Eylül</text>
<text x="369" y="25">130 cm</text><text x="369" y="162">21 Aralık</text>
</g>
<text x="25" y="85" font-size="10.5" font-weight="bold" transform="rotate(-90 25 85)" text-anchor="middle">Gölge Boyu (cm)</text>
</svg></div>
<p>Grafikteki hatanın düzeltilmesi için hangi iki tarihe ait sütunlar yer değiştirmelidir?</p>`,
  c: [
    `21 Mart ile 23 Eylül`,
    `21 Haziran ile 21 Aralık`,
    `21 Mart ile 21 Haziran`,
    `23 Eylül ile 21 Aralık`
  ],
  a: "B",
  s: `<p>Şehir <b>Güney Yarım Küre’de (Oğlak Dönencesi’nin güneyinde)</b> yer almaktadır. Güney Yarım Küre’de:</p>
<ul>
<li><b>21 Aralık:</b> Yaz başlangıcıdır, Güneş ışınları en dik açıyla gelir → Gölge boyu <b>en kısa (40 cm)</b> olmalıdır.</li>
<li><b>21 Haziran:</b> Kış başlangıcıdır, Güneş ışınları en eğik açıyla gelir → Gölge boyu <b>en uzun (130 cm)</b> olmalıdır.</li>
</ul>
<p>Grafikte 21 Haziran (40 cm) ve 21 Aralık (130 cm) ters çizilmiştir; bu iki sütun yer değiştirmelidir. Cevap <b>B</b>.</p>`
},
{
  q: `<p>Aşağıdaki grafikte 1960–2025 yılları arasında atmosferdeki karbondioksit (CO₂) derişimi (ppm) ile küresel yüzey sıcaklığı ortalamasındaki değişim bir arada verilmiştir.</p>
<div class="fig"><svg viewBox="0 0 500 185" width="480" role="img" aria-label="Karbondioksit ve küresel sıcaklık artışı grafiği">
<line x1="55" y1="150" x2="455" y2="150" stroke="#334155" stroke-width="1.5"/>
<line x1="55" y1="20" x2="55" y2="150" stroke="#334155" stroke-width="1.5"/>
<line x1="455" y1="20" x2="455" y2="150" stroke="#334155" stroke-width="1.5"/>
<polyline fill="none" stroke="#1e3a8a" stroke-width="2.5" points="70,135 130,122 190,108 250,90 310,70 370,50 435,28"/>
<polyline fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 2" points="70,130 130,134 190,115 250,102 310,82 370,62 435,35"/>
<g font-size="10" text-anchor="middle">
<text x="70" y="165">1960</text><text x="160" y="165">1975</text><text x="250" y="165">1990</text><text x="340" y="165">2005</text><text x="435" y="165">2025</text>
</g>
<g font-size="9.5" fill="#1e3a8a" text-anchor="end"><text x="50" y="138">315</text><text x="50" y="85">365</text><text x="50" y="32">425</text></g>
<g font-size="9.5" fill="#dc2626"><text x="460" y="138">0,0 °C</text><text x="460" y="85">+0,6 °C</text><text x="460" y="32">+1,2 °C</text></g>
<text x="15" y="85" font-size="10" font-weight="bold" fill="#1e3a8a" transform="rotate(-90 15 85)" text-anchor="middle">CO₂ Miktarı (ppm)</text>
<text x="492" y="85" font-size="10" font-weight="bold" fill="#dc2626" transform="rotate(-90 492 85)" text-anchor="middle">Sıcaklık Farkı</text>
</svg></div>
<p>Grafikteki veriler ve küresel iklim değişikliği dikkate alındığında aşağıdakilerden hangisi <b>söylenemez</b>?</p>`,
  c: [
    `Atmosferdeki CO₂ miktarının artması, yeryüzünden yansıyan ısı enerjisinin uzaya kaçmasını engelleyerek sera etkisini güçlendirmiştir.`,
    `Fosil yakıt tüketiminin azaltılıp ormanlık alanların artırılması grafikteki her iki eğrinin artış hızını yavaşlatabilir.`,
    `Küresel sıcaklık artışı sonucunda kutup buzullarının erimesi, kıyı ekosistemlerinin sular altında kalması ve ekstrem hava olaylarının artması beklenir.`,
    `Grafikteki sıcaklık artışının temel nedeni, son 65 yılda Dünya’nın dönme ekseni eğikliğinin artmasıdır.`
  ],
  a: "D",
  s: `<p>Grafikte atmosferdeki CO₂ miktarı 315 ppm’den 425 ppm’e çıkarken küresel ortalama sıcaklığın da +1,2 °C arttığı görülmektedir. Bu durum insan kaynaklı (fosil yakıtlar, sanayileşme, ormansızlaşma) <b>sera etkisi ve küresel ısınmanın</b> sonucudur (A, B ve C doğrudur).</p>
<p>Son 65 yıldaki bu hızlı ısınmanın nedeni Dünya’nın eksen eğikliğinin değişmesi <b>değildir</b> (<b>D söylenemez</b>).</p>`
},
{
  q: `<p>Aynı boylam (meridyen) üzerinde yer alan K, L ve M şehirlerinde <b>21 Haziran</b> günü öğle vakti Güneş’in ufuk düzlemi üzerindeki konumu (geliş açısı) aşağıda modellenmiştir.</p>
<div class="fig"><svg viewBox="0 0 540 145" width="520" role="img" aria-label="K L M şehirlerinde Güneş'in ufuk düzlemi üzerindeki açısı">
<g stroke="#334155" stroke-width="2" fill="none">
<line x1="20" y1="115" x2="160" y2="115"/><path d="M40,115 A50,50 0 0,1 140,115" stroke-dasharray="3 2"/>
<line x1="200" y1="115" x2="340" y2="115"/><path d="M220,115 A50,50 0 0,1 320,115" stroke-dasharray="3 2"/>
<line x1="380" y1="115" x2="520" y2="115"/><path d="M400,115 A50,50 0 0,1 500,115" stroke-dasharray="3 2"/>
</g>
<line x1="90" y1="115" x2="90" y2="40" stroke="#f59e0b" stroke-width="2.5"/>
<line x1="270" y1="115" x2="318" y2="62" stroke="#f59e0b" stroke-width="2.5"/>
<line x1="450" y1="115" x2="515" y2="90" stroke="#f59e0b" stroke-width="2.5"/>
<circle cx="90" cy="40" r="10" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
<circle cx="318" cy="62" r="10" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
<circle cx="515" cy="90" r="10" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
<g font-size="10.5" font-weight="bold" text-anchor="middle">
<text x="104" y="105" fill="#dc2626">90°</text><text x="90" y="135">K Şehri</text>
<text x="298" y="108" fill="#dc2626">50°</text><text x="270" y="135">L Şehri</text>
<text x="488" y="110" fill="#dc2626">22°</text><text x="450" y="135">M Şehri</text>
</g>
</svg></div>
<p>M şehrinin <b>Güney Yarım Küre’de</b> olduğu bilindiğine göre,</p>
<p>I. K şehri Yengeç Dönencesi üzerindedir.<br>
II. 21 Haziran’da özdeş bir cismin öğle vakti gölge boyu en uzun M şehrindedir.<br>
III. L şehri kesinlikle Kuzey Yarım Küre’dedir.</p>
<p>ifadelerinden hangileri <b>kesinlikle doğrudur</b>?</p>`,
  c: [`Yalnız I`, `I ve II`, `II ve III`, `I, II ve III`],
  a: "B",
  s: `<p>Tarih <b>21 Haziran</b>’dır:</p>
<ul>
<li>K şehrinde Güneş ışınları ufuk düzlemine <b>90°</b> açıyla gelmiştir. 21 Haziran’da ışınların 90° ile düştüğü tek yer <b>Yengeç Dönencesi</b>’dir (<b>I kesinlikle doğru</b>).</li>
<li>Geliş açıları 90° (K) &gt; 50° (L) &gt; 22° (M) olduğundan ışınların en eğik geldiği M şehrinde gölge boyu en uzundur (<b>II kesinlikle doğru</b>).</li>
<li><b>III (Dikkat - MEB Tuzağı!):</b> 21 Haziran’da Yengeç Dönencesi’ne (23,5° K) 90° ile gelen ışınlar, hem Yengeç Dönencesi’nin 40° kuzeyindeki (63,5° K) bir yere hem de 40° güneyindeki (16,5° G – Güney Yarım Küre!) bir yere <b>50°</b> açıyla gelir. Dolayısıyla L şehri Kuzey Yarım Küre’de olabileceği gibi Güney Yarım Küre’de (Ekvator ile Oğlak Dönencesi arasında) de olabilir; <b>kesin değildir</b>. Cevap <b>B</b>.</li>
</ul>`
},
{
  q: `<p>Aşağıdaki şekilde özdeş üç ışık demetinin (I, II ve III) aynı anda Dünya üzerindeki K, L ve M bölgelerinde aydınlattığı yüzey alanları (S, 2S ve 3S) gösterilmiştir.</p>
<div class="fig"><svg viewBox="0 0 480 185" width="460" role="img" aria-label="Dünya üzerinde S, 2S ve 3S aydınlanma alanları">
<g fill="#fef08a" opacity="0.6" stroke="#f59e0b" stroke-width="1.5">
<polygon points="30,30 198,30 228,55 30,55"/>
<polygon points="30,85 165,85 170,105 30,105"/>
<polygon points="30,135 190,135 208,155 30,155"/>
</g>
<circle cx="245" cy="95" r="80" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<line x1="220" y1="18" x2="270" y2="172" stroke="#1e3a8a" stroke-width="1.5"/>
<line x1="168" y1="118" x2="322" y2="72" stroke="#1e3a8a" stroke-width="2" stroke-dasharray="4 3"/>
<path d="M198,30 A80,80 0 0,1 228,55" fill="none" stroke="#dc2626" stroke-width="5"/>
<path d="M165,85 A80,80 0 0,1 170,105" fill="none" stroke="#dc2626" stroke-width="5"/>
<path d="M190,135 A80,80 0 0,1 208,155" fill="none" stroke="#dc2626" stroke-width="5"/>
<g font-size="10.5" font-weight="bold">
<text x="85" y="47">I. Demet</text><text x="235" y="45" fill="#dc2626">K (3S)</text>
<text x="85" y="99">II. Demet</text><text x="180" y="99" fill="#dc2626">L (S)</text>
<text x="85" y="149">III. Demet</text><text x="215" y="152" fill="#dc2626">M (2S)</text>
<text x="328" y="75" fill="#1e3a8a" font-size="10">Ekvator</text>
</g>
</svg></div>
<p>Buna göre bu konumda K, L ve M bölgeleri ile ilgili aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [
    `Birim yüzeye düşen ışık enerjisi miktarı arasındaki ilişki K > M > L şeklindedir.`,
    `Görseldeki konum 21 Aralık tarihine aittir ve L bölgesi Oğlak Dönencesi üzerindedir.`,
    `Görseldeki konum 21 Haziran tarihine aittir ve L bölgesinde öğle vakti gölge boyu en kısadır.`,
    `I. ışık demetinin taşıdığı enerji, II. ışık demetinin taşıdığı enerjinin 3 katıdır.`
  ],
  a: "C",
  s: `<p>Görselde Dünya’nın Kuzey Kutbu Güneş’e (sola) doğru eğiktir ve Ekvator’un kuzeyinde yer alan <b>L bölgesinde</b> aydınlanan alan en dardır (S). Bu durum tarihin <b>21 Haziran</b> olduğunu ve ışınların <b>L’ye (Yengeç Dönencesi)</b> en dik açıyla düştüğünü gösterir.</p>
<p>Alan daraldıkça (S &lt; 2S &lt; 3S) birim yüzeye düşen enerji artar (E(L) &gt; E(M) &gt; E(K), A yanlıştır) ve öğle vakti gölge boyu en kısa <b>L bölgesinde</b> olur (<b>C doğru</b>). Özdeş demetlerin taşıdığı toplam enerjiler birbirine eşittir (D yanlıştır).</p>`
},
{
  q: `<p>Dünya’nın Güneş etrafındaki yörüngesinde 1, 2, 3 ve 4 numaralı zaman aralıkları ile Dünya üzerindeki X (Yengeç Dönencesi) ve Y (Ekvator) noktaları aşağıda verilmiştir.</p>
<div class="fig"><svg viewBox="0 0 500 185" width="480" role="img" aria-label="Yörünge aralıkları 1 2 3 4 ve Dünya üzerindeki X Y noktaları">
<ellipse cx="155" cy="92" rx="120" ry="58" fill="none" stroke="#64748b" stroke-width="1.8"/>
<circle cx="155" cy="92" r="20" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
<g stroke="#1e3a8a" stroke-width="1.4">
<circle cx="35" cy="92" r="13" fill="#93c5fd"/><line x1="29" y1="106" x2="41" y2="78"/>
<circle cx="275" cy="92" r="13" fill="#93c5fd"/><line x1="269" y1="106" x2="281" y2="78"/>
<circle cx="155" cy="150" r="13" fill="#93c5fd"/><line x1="149" y1="164" x2="161" y2="136"/>
<circle cx="155" cy="34" r="13" fill="#93c5fd"/><line x1="149" y1="48" x2="161" y2="20"/>
</g>
<g font-size="10.5" font-weight="bold" fill="#dc2626">
<text x="75" y="142">1. Aralık</text><text x="215" y="142">2. Aralık</text>
<text x="215" y="52">3. Aralık</text><text x="75" y="52">4. Aralık</text>
</g>
<g font-size="9.5" text-anchor="middle">
<text x="35" y="120">21 Haz</text><text x="155" y="177">23 Eyl</text><text x="275" y="120">21 Ara</text><text x="155" y="15">21 Mar</text>
</g>
<circle cx="405" cy="92" r="55" fill="#dbeafe" stroke="#1e3a8a" stroke-width="2"/>
<line x1="350" y1="92" x2="460" y2="92" stroke="#1e3a8a" stroke-width="2"/>
<line x1="355" y1="68" x2="455" y2="68" stroke="#1e3a8a" stroke-dasharray="4 2"/>
<circle cx="405" cy="68" r="4" fill="#dc2626"/><text x="413" y="65" font-size="11" font-weight="bold">X (23°27′ K)</text>
<circle cx="405" cy="92" r="4" fill="#dc2626"/><text x="413" y="106" font-size="11" font-weight="bold">Y (0°)</text>
</svg></div>
<p>Dünya’nın numaralandırılmış yörünge aralıklarındaki hareketi sırasında X ve Y noktalarında gerçekleşen değişimlerle ilgili aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [
    `1. aralıkta X noktasında öğle vakti gölge boyu sürekli azalırken Y noktasında sürekli artar.`,
    `4. aralıkta (21 Mart → 21 Haziran) Y noktasında öğle vakti gölge boyu büyürken X noktasında sıfıra doğru küçülür.`,
    `2. ve 3. aralıklarda Y noktasında gündüz süresi önce kısalır, sonra uzar.`,
    `X noktasında 3. aralık boyunca gündüz süresi gece süresinden uzundur.`
  ],
  a: "B",
  s: `<p><b>4. aralık (21 Mart → 21 Haziran):</b></p>
<ul>
<li>21 Mart’ta Güneş ışınları <b>Y (Ekvator)</b> noktasına dik (90°) düşmektedir (Y’de gölge = 0, X’te gölge &gt; 0).</li>
<li>Dünya 21 Mart’tan 21 Haziran’a ilerlerken dik gelen ışınlar Ekvator’dan (Y) <b>Yengeç Dönencesi’ne (X)</b> doğru kayar.</li>
<li>Bu süreçte <b>Y noktasında</b> ışınlar eğikleştiği için gölge boyu sıfırdan başlayarak <b>büyür</b>; <b>X noktasında</b> ise ışınlar dikleştiği için gölge boyu küçülerek 21 Haziran’da <b>sıfır</b> olur (<b>B doğru</b>).</li>
</ul>
<p>A yanlıştır: 1. aralıkta (21 Haz → 23 Eyl) diklik X’ten Y’ye kayar; X’te gölge artar, Y’de azalır. C yanlıştır: Ekvator’da (Y) gündüz süresi yıl boyu değişmez (hep 12 saat). D yanlıştır: 3. aralıkta (21 Ara → 21 Mar) KYK’deki X’te kış yaşanır, gece &gt; gündüzdür.</p>`
},
{
  q: `<p>Bir öğrenci özdeş iki balonun ağzını esnek bir boru ve vana ile birbirine bağlıyor. I. balonu 10 °C’luk soğuk su bulunan kaba, II. balonu ise 60 °C’luk sıcak su bulunan kaba daldırıyor. Yeterince bekledikten sonra borudaki vanayı açıyor.</p>
<div class="fig"><svg viewBox="0 0 460 155" width="440" role="img" aria-label="Sıcak ve soğuk su kaplarındaki balon deneyi">
<rect x="45" y="75" width="120" height="65" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<rect x="295" y="75" width="120" height="65" fill="#fca5a5" stroke="#991b1b" stroke-width="2"/>
<circle cx="105" cy="58" r="24" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
<circle cx="355" cy="52" r="30" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
<line x1="129" y1="55" x2="325" y2="55" stroke="#475569" stroke-width="5"/>
<rect x="218" y="46" width="24" height="18" rx="2" fill="#dc2626"/>
<text x="230" y="41" font-size="10.5" font-weight="bold" text-anchor="middle">Vana</text>
<g font-size="10.5" font-weight="bold" text-anchor="middle">
<text x="105" y="62">I</text><text x="355" y="56">II</text>
<text x="105" y="120" fill="#1e3a8a">Soğuk Su (10 °C)</text>
<text x="355" y="120" fill="#7f1d1d">Sıcak Su (60 °C)</text>
</g>
</svg></div>
<p>Bu deneyin doğadaki rüzgâr oluşumuyla ilişkilendirilmesiyle ilgili aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [
    `I. kap alçak basınç alanını, II. kap ise yüksek basınç alanını temsil etmektedir.`,
    `II. kaptaki suyun bulunduğu bölgede tanecikler birbirine yaklaşarak alçalıcı hava hareketini modeller.`,
    `Vana açıldığında hava akışı, soğuk bölgedeki (yüksek basınç) I. kaptan sıcak bölgedeki (alçak basınç) II. kaba doğru gerçekleşir.`,
    `Kaplardaki su sıcaklıkları birbirine yaklaştırılırsa vana açıldığında oluşan hava akımının hızı artar.`
  ],
  a: "C",
  s: `<p>Doğadaki rüzgâr oluşumunda <b>soğuk bölge (10 °C – I. kap)</b> taneciklerin yoğunlaştığı ve alçaldığı <b>Yüksek Basınç (YB)</b> alanını; <b>sıcak bölge (60 °C – II. kap)</b> ise havanın genleşip yükseldiği <b>Alçak Basınç (AB)</b> alanını temsil eder.</p>
<p>Rüzgâr yüksek basınç alanından (soğuk - I) alçak basınç alanına (sıcak - II) doğru gerçekleşir (<b>C doğru</b>). Sıcaklık farkı azalırsa basınç farkı ve hava akımının hızı azalır (D yanlıştır).</p>`
},
{
  q: `<p>Aşağıdaki tabloda P, R ve S şehirlerinde <b>21 Mart, 21 Haziran ve 21 Aralık</b> tarihlerinde ölçülen gündüz süreleri (saat) verilmiştir.</p>
<table class="rt">
<tr><th>Şehir</th><th>21 Mart</th><th>21 Haziran</th><th>21 Aralık</th></tr>
<tr><td><b>P</b></td><td>12 saat</td><td>19 saat</td><td>5 saat</td></tr>
<tr><td><b>R</b></td><td>12 saat</td><td>14 saat</td><td>10 saat</td></tr>
<tr><td><b>S</b></td><td>12 saat</td><td>9 saat</td><td>15 saat</td></tr>
</table>
<p>Tablodaki verilere göre P, R ve S şehirlerinin Dünya üzerindeki konumları aşağıdakilerin hangisinde doğru gösterilmiştir?</p>`,
  c: [
    `P ve R Kuzey Yarım Küre’de (P kutba daha yakın); S Güney Yarım Küre’de`,
    `P ve R Güney Yarım Küre’de (P Ekvator’a daha yakın); S Kuzey Yarım Küre’de`,
    `P Kuzey Yarım Küre’de; R Ekvator üzerinde; S Güney Yarım Küre’de`,
    `P ve S Kuzey Yarım Küre’de; R Güney Yarım Küre’de`
  ],
  a: "A",
  s: `<p>Tablodaki verileri analiz edelim:</p>
<ul>
<li><b>21 Haziran</b>’da gündüz süresi 12 saatten uzun olan <b>P (19 sa)</b> ve <b>R (14 sa)</b> şehirleri <b>Kuzey Yarım Küre’dedir</b>.</li>
<li>Ekvator’dan kutuplara doğru gidildikçe gece–gündüz süresi farkı artar (21 Haziran’da kuzeye gidildikçe gündüz uzar). P’de gündüz 19 saat, R’de 14 saat olduğundan <b>P şehri Kuzey Kutbu’na R’den daha yakındır</b> (Ekvator’a daha uzaktır).</li>
<li><b>S şehrinde</b> ise 21 Aralık’ta gündüz 15 saat, 21 Haziran’da 9 saat olduğundan S şehri <b>Güney Yarım Küre’dedir</b>.</li>
</ul>
<p>Buna göre doğru konumlandırma <b>A</b> seçeneğindedir.</p>`
}
]
});
