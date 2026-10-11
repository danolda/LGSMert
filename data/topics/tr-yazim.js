LGS.add({
id: "tr-yazim",
summary: `
<h3>1. Büyük Harflerin Kullanımı</h3>
<table class="rt"><tr><th>Kural</th><th>Doğru</th><th>Yanlış</th></tr>
<tr><td>Cümle başı, özel adlar (kişi, yer, kurum, kitap, millet, dil)</td><td>Türk Dil Kurumu, Çalıkuşu, Almanlar</td><td>türk dil kurumu</td></tr>
<tr><td>Gün ve ay adları yalnızca <b>belirli bir tarih</b> bildirirken büyük</td><td>29 Ekim 1923 Pazartesi · Her pazartesi · ekim ayında</td><td>Her Pazartesi</td></tr>
<tr><td>Yön adları özel adın parçasıysa büyük</td><td>Doğu Anadolu, Kuzey Kıbrıs · rüzgâr kuzeyden esiyor</td><td>rüzgâr Kuzeyden esiyor</td></tr>
<tr><td>Unvanlar ada bitişik kullanıldığında büyük; akrabalık adları küçük</td><td>Ayşe Hanım, Prof. Dr. Ali Yılmaz · Ayşe teyze</td><td>Ayşe hanım</td></tr>
<tr><td>Dünya, Güneş, Ay gök cismi olarak kullanıldığında büyük</td><td>Dünya’nın Güneş etrafında dönmesi · dünya malı</td><td>bu dünya’da</td></tr></table>

<h3>2. Sık Karıştırılan Yazımlar</h3>
<div class="fig"><svg viewBox="0 0 620 210" width="600" role="img" aria-label="de, ki, mi yazımı">
<g font-size="12" text-anchor="middle">
<rect x="5" y="5" width="200" height="200" rx="10" fill="#dbeafe" stroke="#2563eb"/><text x="105" y="28" font-size="14" font-weight="bold">de / da</text>
<text x="105" y="52" font-weight="bold" fill="#16a34a">Bağlaç → AYRI</text><text x="105" y="70">Sen de gel. · Kitap da var.</text><text x="105" y="88" font-size="11">(Çıkarınca anlam bozulmaz;</text><text x="105" y="102" font-size="11">“te/ta” olmaz.)</text>
<text x="105" y="132" font-weight="bold" fill="#dc2626">Hâl eki → BİTİŞİK</text><text x="105" y="150">Evde, okulda, sokakta</text><text x="105" y="176" font-size="11">Yanlış: Kitabıda · sokakda</text>
<rect x="215" y="5" width="200" height="200" rx="10" fill="#dcfce7" stroke="#16a34a"/><text x="315" y="28" font-size="14" font-weight="bold">ki</text>
<text x="315" y="52" font-weight="bold" fill="#16a34a">Bağlaç → AYRI</text><text x="315" y="70">Duydum ki gelmişsin.</text>
<text x="315" y="100" font-weight="bold" fill="#dc2626">Ek (-ki) → BİTİŞİK</text><text x="315" y="118">evdeki, yarınki, seninki</text>
<text x="315" y="148" font-weight="bold">Kalıplaşmış → BİTİŞİK</text><text x="315" y="166">belki, çünkü, sanki,</text><text x="315" y="182">oysaki, hâlbuki, mademki</text>
<rect x="425" y="5" width="190" height="200" rx="10" fill="#fef3c7" stroke="#d97706"/><text x="520" y="28" font-size="14" font-weight="bold">mi (soru eki)</text>
<text x="520" y="52" font-weight="bold" fill="#16a34a">Her zaman AYRI</text><text x="520" y="70">Geldin mi? · Güzel mi?</text><text x="520" y="100">Sonraki ekler “mi”ye</text><text x="520" y="116">bitişir:</text><text x="520" y="134">Geliyor musun?</text><text x="520" y="152">Okul mudur?</text><text x="520" y="182" font-size="11">Yanlış: okudunmu</text>
</g></svg></div>

<h3>3. Sayılar, Kısaltmalar, Birleşik Sözcükler</h3>
<ul>
<li><b>Sayılar</b> ayrı yazılır: üç yüz, bin dokuz yüz yirmi üç. Sıra sayıları: 3. / 3’üncü / üçüncü. Yüzde: %25. Para: 1.250 TL. Saat: 13.30’da.</li>
<li><b>Kısaltmalara</b> gelen ekler kısaltmanın <b>okunuşuna</b> uyar ve kesmeyle ayrılır: TDK’ye (te-de-ke), TBMM’ye, NATO’ya, km’den (kilometreden).</li>
<li><b>Özel adlara</b> gelen çekim ekleri kesmeyle ayrılır: Ankara’ya, Atatürk’ün. Ancak <b>kurum adlarına</b> ve <b>-ca/-ce ile kurulan dil adlarına</b> gelen ekler kesmeyle ayrılmaz: Türk Dil Kurumuna, Millî Eğitim Bakanlığında, Türkçeyi.</li>
<li><b>Birleşik yazılanlar:</b> birkaç, birçok, hiçbir, herhangi, birbiri · <b>Ayrı yazılanlar:</b> her şey, bir şey, her biri, pek çok, hiçbir şey.</li>
<li><b>Pekiştirmeler</b> bitişik (kıpkırmızı, sapasağlam, büsbütün), <b>ikilemeler</b> ayrı yazılır (yavaş yavaş, er geç).</li>
<li><b>Düzeltme işareti (^):</b> Anlamı karışan sözcükleri ayırır: hâlâ (henüz) – hala (babanın kız kardeşi), kâr – kar, âdet – adet.</li>
<li>Sık yapılan yanlışlar: yanlız → <b>yalnız</b>, yalnış → <b>yanlış</b>, herkez → <b>herkes</b>, şöför → <b>şoför</b>, sürpriz, kirpik, entelektüel.</li>
</ul>
`,
qs: [
{ q: `<p>Aşağıdaki cümlelerin hangisinde “de” sözcüğünün yazımıyla ilgili bir <b>yanlışlık</b> yapılmıştır?</p>`,
  c: [`Sen de bizimle sinemaya gelir misin?`, `Kitabıda yanına almayı unutma.`, `Akşam yemeğini bizde yiyelim.`, `Okulda yeni bir kütüphane açıldı.`], a: "B",
  s: `<p>B’deki “da” bir <b>bağlaçtır</b> (“kitabı da”); cümleden çıkarıldığında anlam bozulmaz ancak “de” anlamı kaybolur. Bağlaç olan “de/da” ayrı yazılmalıdır: “Kitabı da yanına almayı unutma.”</p><p>A’daki “de” bağlaçtır ve ayrı yazılmıştır ✓. C’deki “bizde” ve D’deki “okulda” sözcüklerinde “-de/-da” bulunma hâl ekidir ve bitişik yazılmıştır ✓. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde “ki”nin yazımı <b>yanlıştır</b>?</p>`,
  c: [`Sanki bu yolu daha önce görmüştüm.`, `Duydum ki yeni bir eve taşınmışsınız.`, `Bahçede ki çiçekler sabah açmış.`, `Yarınki toplantıya herkes katılacak.`], a: "C",
  s: `<p>C’deki “ki”, “bahçedeki” sözcüğünde bulunma eki almış isme getirilen <b>-ki</b> ekidir (sıfat yapar: hangi çiçekler? → bahçedeki çiçekler). Ek olduğu için bitişik yazılmalıdır: “Bahçedeki çiçekler sabah açmış.”</p><p>B’de bağlaç olan “ki” ayrı ✓; A’daki “sanki” kalıplaşmış olduğu için bitişik ✓; D’deki “yarınki” ek olduğu için bitişik ✓. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde soru ekinin yazımı <b>yanlıştır</b>?</p>`,
  c: [`Yarın bize gelecek misin?`, `Güzel mi güzel bir bahçeleri vardı.`, `Geliyor musunuz, yoksa bekleyelim mi?`, `Bu kitabı daha önce okudunmu?`], a: "D",
  s: `<p>Soru eki “mi” kendinden önceki sözcükten <b>her zaman ayrı</b> yazılır: “Bu kitabı daha önce okudun mu?” D’de soru eki bitişik yazıldığı için yanlıştır.</p><p>A, C ve B’de “mi” ayrı yazılmış ve kendisinden sonra gelen ekler (musunuz) ona bitişmiştir ✓. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>büyük harflerin</b> kullanımıyla ilgili bir yanlışlık vardır?</p>`,
  c: [`Her Pazartesi sabahı okulda bayrak töreni yapılır.`, `Türkiye Büyük Millet Meclisi 23 Nisan 1920’de açıldı.`, `Ödevimi Türk Dil Kurumunun sözlüğünden yararlanarak hazırladım.`, `Cumhuriyet, 29 Ekim 1923 Pazartesi günü ilan edildi.`], a: "A",
  s: `<p>Gün ve ay adları yalnızca <b>belirli bir tarih</b> bildirdiğinde büyük harfle başlar. A’da belirli bir tarih yoktur (“her pazartesi”); bu nedenle “pazartesi” küçük harfle yazılmalıdır.</p><p>B ve D’de belirli tarihler verildiği için ay ve gün adları büyük yazılmıştır ✓. C’de kurum adı büyük harfle başlamış ve ekler kesmesiz yazılmıştır ✓. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde yön adının yazımı <b>yanlıştır</b>?</p>`,
  c: [`Doğu Anadolu Bölgesi’nde kışlar çok soğuk geçer.`, `Evimiz şehrin batısındaki tepede.`, `Güney Kore’nin başkenti Seul’dür.`, `Rüzgâr bütün gün Kuzeyden esti.`], a: "D",
  s: `<p>Yön adları ancak bir özel adın parçası olduğunda büyük harfle başlar (Doğu Anadolu, Güney Kore). D’de “kuzey” sözcüğü yalnızca yön bildirdiği için küçük harfle yazılmalıdır: “Rüzgâr bütün gün kuzeyden esti.”</p><p>A ve C’de yön adları özel adın parçasıdır ✓; B’de “batısındaki” küçük yazılmıştır ✓. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde sayının yazımı <b>yanlıştır</b>?</p>`,
  c: [`Kütüphanede üç yüz elli yeni kitap var.`, `Yarışmada 3’üncü olduk.`, `Öğrencilerin %40’ı bu soruyu doğru yanıtladı.`, `Kitabın 5.nci bölümünü okudum.`], a: "D",
  s: `<p>Sıra sayıları rakamla yazılırken rakamdan sonra <b>nokta</b> ya da <b>kesme işaretiyle ek</b> kullanılır: “5. bölüm” ya da “5’inci bölüm”. D’deki “5.nci” yazımı yanlıştır (nokta ile ek birlikte kullanılmaz).</p><p>A’da sayılar ayrı yazılmış ✓; B’de “3’üncü” ✓; C’de yüzde işareti sayıdan önce, ek kesmeyle ✓. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde kısaltmaya getirilen ekin yazımı <b>yanlıştır</b>?</p>`,
  c: [`Milletvekilleri TBMM’ne geldi.`, `Başvurular TDK’ye yapılacak.`, `Türkiye NATO’ya 1952’de katıldı.`, `Okulumuz evimize 2 km’den daha uzaktır.`], a: "A",
  s: `<p>Kısaltmalara gelen ekler kısaltmanın <b>okunuşuna</b> göre yazılır. TBMM “te-be-me-me” diye okunur; son ses “e” olduğundan ek “-ye” olmalıdır: “TBMM’ye”.</p><p>B’de TDK “te-de-ke” → TDK’ye ✓; C’de NATO “nato” → NATO’ya ✓; D’de km “kilometre” → km’den ✓. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde kesme işaretinin kullanımı <b>yanlıştır</b>?</p>`,
  c: [`Millî Eğitim Bakanlığı’na bir dilekçe yazdık.`, `Atatürk’ün hayatını anlatan bir belgesel izledik.`, `Yaz tatilinde Antalya’ya gittik.`, `Mehmet Akif’in şiirlerini çok seviyorum.`], a: "A",
  s: `<p>Kurum, kuruluş ve iş yeri adlarına gelen ekler <b>kesmeyle ayrılmaz</b>: “Millî Eğitim Bakanlığına bir dilekçe yazdık.” A’daki kesme işareti gereksizdir.</p><p>C’de yer adı, B ve D’de kişi adlarına gelen ekler kesmeyle ayrılmıştır ✓. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde birleşik yazılması gereken bir sözcük <b>ayrı</b> yazılmıştır?</p>`,
  c: [`Bu konuda her şeyi biliyorum.`, `Bir şey söylemek istiyorum.`, `Hiç bir soruyu boş bırakmadım.`, `Pek çok kitap okudum.`], a: "C",
  s: `<p>“Hiçbir” sözcüğü <b>bitişik</b> yazılır: “Hiçbir soruyu boş bırakmadım.” C’de ayrı yazılması yanlıştır.</p><p>“Her şey”, “bir şey” ve “pek çok” sözcükleri ise kurala göre <b>ayrı</b> yazılır; A, B ve D doğrudur. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde düzeltme işaretinin (^) kullanılmaması bir <b>anlam karışıklığına</b> yol açmıştır?</p>`,
  c: [`Kitabın kapağı çok güzel.`, `Bu kış çok kar yağdı.`, `Halam bizi hala bekliyor.`, `Sınıfta yirmi öğrenci var.`], a: "C",
  s: `<p>C’deki ikinci “hala” sözcüğü “henüz, şimdiye kadar” anlamındadır ve <b>“hâlâ”</b> şeklinde düzeltme işaretiyle yazılmalıdır. İşaret kullanılmadığında “hala” (babanın kız kardeşi) sözcüğüyle karışır: “Halam bizi hâlâ bekliyor.”</p><p>A, B ve D’deki sözcükler (kapak, kar, yirmi) doğru yazılmıştır; B’deki “kar” yağış anlamındadır ve işaret almaz. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde dil adına getirilen ekin yazımı <b>doğrudur</b>?</p>`,
  c: [`İngilizce’den Türkçe’ye çeviri yaptı.`, `Almancayı üç yılda öğrendi.`, `Türkçe’yi doğru ve güzel konuşmalıyız.`, `Arapça’da bu sözcüğün farklı anlamı var.`], a: "B",
  s: `<p><b>-ca/-ce</b> ekiyle kurulan dil adlarına getirilen ekler kesmeyle ayrılmaz: Türkçeyi, İngilizceden, Türkçeye, Almancayı, Arapçada.</p><p>Bu kurala göre yalnızca B’deki “Almancayı” doğru yazılmıştır. C, A ve D’de kesme işareti gereksiz kullanılmıştır. Cevap <b>B</b>.</p>` },
{ q: `<p>(I) Annem, yaz tatilinde <u>Karadeniz’e</u> gideceğimizi söyledi. (II) <u>Herkes</u> çok sevindi. (III) Yolculuk <u>biraz</u> uzun sürecekti. (IV) Ama bu kez <u>yalnış</u> yola sapmamak için harita alacaktık.</p><p>Bu metinde numaralanmış cümlelerin hangisindeki altı çizili sözcüğün yazımı <b>yanlıştır</b>?</p>`,
  c: [`I.`, `II.`, `III.`, `IV.`], a: "D",
  s: `<p>IV’teki “yalnış” sözcüğünün doğru yazımı <b>“yanlış”</b>tır (yanılmak fiilinden türemiştir).</p><p>I’deki “Karadeniz’e” (özel ada gelen ek kesmeyle), II’deki “herkes”, III’teki “biraz” doğru yazılmıştır. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde unvan ya da akrabalık bildiren sözcüğün yazımı <b>yanlıştır</b>?</p>`,
  c: [`Ayşe Hanım bize çok güzel bir kek getirdi.`, `Konferansı Prof. Dr. Ahmet Yılmaz verdi.`, `Fatma teyzemle her hafta telefonda konuşuyoruz.`, `Okulumuzun müdürü Ali bey bizi tebrik etti.`], a: "D",
  s: `<p>Unvanlar ve saygı sözleri, özel adla birlikte kullanıldığında <b>büyük harfle</b> başlar: Ali Bey, Ayşe Hanım. D’deki “bey” küçük harfle yazıldığı için yanlıştır.</p><p>A’da “Hanım” ✓, B’de unvan kısaltmaları ✓; C’deki “teyze” akrabalık adıdır ve küçük harfle yazılır ✓. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde “Dünya” sözcüğünün yazımı <b>yanlıştır</b>?</p>`,
  c: [`Bu dünya’da her şey geçicidir.`, `Ay, Dünya’nın tek doğal uydusudur.`, `Dünya, Güneş etrafındaki bir turunu yaklaşık 365 günde tamamlar.`, `Dünyanın dört bir yanından turistler gelmişti.`], a: "A",
  s: `<p>“Dünya”, “Güneş” ve “Ay” sözcükleri yalnızca <b>gök cismi</b> olarak kullanıldığında büyük harfle başlar ve ekleri kesmeyle ayrılır (C, B ✓).</p><p>A’da “dünya” gezegen anlamında değil, “hayat, yaşam” anlamında kullanılmıştır; küçük harfle ve kesmesiz yazılmalıdır: “Bu dünyada her şey geçicidir.” D’de de “dünya” gezegen anlamında kullanılmadığı için küçük harf ve kesmesiz yazım doğrudur. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>pekiştirmeli</b> bir sözcüğün yazımı yanlıştır?</p>`,
  c: [`Gökyüzü masmavi görünüyordu.`, `Yaşlı adam yapayalnız yaşıyordu.`, `Domatesler kıp kırmızı olmuştu.`, `Kaza sonrası araba sapasağlam çıktı.`], a: "C",
  s: `<p>Pekiştirmeli sözcükler <b>bitişik</b> yazılır: masmavi, yapayalnız, sapasağlam, <b>kıpkırmızı</b>. C’deki “kıp kırmızı” ayrı yazıldığı için yanlıştır.</p><p>Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>ikilemenin</b> yazımı yanlıştır?</p>`,
  c: [`Yavaş yavaş merdivenleri çıktı.`, `Çocuklar koşa koşa bahçeye çıktı.`, `Ergeç bu sorunu çözeceğiz.`, `Bahçede kuşlar cıvıl cıvıl ötüyordu.`], a: "C",
  s: `<p>İkilemeler <b>ayrı</b> yazılır: yavaş yavaş, koşa koşa, cıvıl cıvıl, <b>er geç</b>. C’deki “ergeç” bitişik yazıldığı için yanlıştır.</p><p>A, B ve D’deki ikilemeler kurala uygun olarak ayrı yazılmıştır. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde ünsüz benzeşmesiyle ilgili bir yazım yanlışı <b>yapılmıştır</b>?</p>`,
  c: [`Ağaçta bir kuş yuvası gördük.`, `Kitapçıdan yeni bir roman aldım.`, `Sokakda oynayan çocuklar eve döndü.`, `Bu yemekte tuz çok az.`], a: "C",
  s: `<p>Sert ünsüzlerle (ç, f, h, k, p, s, ş, t) biten sözcüklere gelen “d” ile başlayan ekler <b>“t”</b>ye dönüşür. “Sokak” sözcüğü “k” ile bittiği için ek “-ta” olmalıdır: “Sokakta oynayan çocuklar eve döndü.”</p><p>A’daki “ağaçta”, B’deki “kitapçıdan” (ek “-çı”, sonraki “-dan” ünlüden sonra gelir), D’deki “yemekte” doğru yazılmıştır. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde millet ya da dil adının yazımı <b>yanlıştır</b>?</p>`,
  c: [`Türkler, Anadolu’ya 1071’den sonra yerleşmeye başladı.`, `Bu kitabı ingilizceden çevirdi.`, `Japonlar çalışkanlıklarıyla tanınır.`, `Fransızca öğrenmeye karar verdi.`], a: "B",
  s: `<p>Millet ve dil adları <b>büyük harfle</b> başlar. B’deki “ingilizceden” sözcüğü büyük harfle yazılmalıdır: “İngilizceden”.</p><p>A’da “Türkler”, C’de “Japonlar”, D’de “Fransızca” doğru yazılmıştır. Cevap <b>B</b>.</p>` },
{ q: `<p>Bir öğrenci, defterine aşağıdaki sözcükleri yazmıştır.</p>
<table class="rt"><tr><td>1. herkez</td><td>2. şoför</td><td>3. yanlız</td><td>4. sürpriz</td><td>5. birçok</td><td>6. herşey</td></tr></table>
<p>Bu sözcüklerden hangilerinin yazımı <b>yanlıştır</b>?</p>`,
  c: [`1, 2 ve 3`, `1, 3 ve 6`, `2, 4 ve 5`, `3, 5 ve 6`], a: "B",
  s: `<p>1. “herkez” → doğrusu <b>herkes</b> ✗. 3. “yanlız” → doğrusu <b>yalnız</b> ✗. 6. “herşey” → doğrusu <b>her şey</b> (ayrı) ✗.</p><p>2. “şoför”, 4. “sürpriz”, 5. “birçok” doğru yazılmıştır. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde para, saat ya da tarih gösteren sayıların yazımı <b>yanlıştır</b>?</p>`,
  c: [`Bu kitabın fiyatı 1.250 TL’dir.`, `Tren saat 13.45’te kalkacak.`, `Cumhuriyet 29.10.1923 tarihinde ilan edildi.`, `Toplantı saat onbeşte başlayacak.`], a: "D",
  s: `<p>Sayılar yazıyla yazıldığında her sayı ayrı yazılır: “on beş”. D’deki “onbeşte” bitişik yazıldığı için yanlıştır; doğrusu “saat on beşte” ya da “saat 15.00’te”dir.</p><p>A’da para tutarı, B’de saat, C’de tarih doğru yazılmıştır. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde birleşik sözcüklerin yazımıyla ilgili bir yanlışlık <b>yoktur</b>?</p>`,
  c: [`Her hangi bir sorun olursa beni ara.`, `Bir kaç gün sonra tatile çıkacağız.`, `Her biri ayrı bir renkteydi.`, `Bir çok öğrenci geziye katıldı.`], a: "C",
  s: `<p>“Her biri” ayrı yazılır; C doğrudur.</p><p>B’deki “bir kaç” → <b>birkaç</b>, A’daki “her hangi” → <b>herhangi</b>, D’deki “bir çok” → <b>birçok</b> şeklinde bitişik yazılmalıdır. Cevap <b>C</b>.</p>` },
{ q: `<p>“Mahallemizdeki ---- bakkal ---- Amca, yıllardır ---- bize ekmek getiriyor.”</p><p>Bu cümlede boş bırakılan yerlere sırasıyla aşağıdakilerden hangisi getirilirse yazım kurallarına <b>uygun</b> bir cümle oluşur?</p>`,
  c: [`yaşlı / Hasan / her sabah`, `Yaşlı / hasan / Her sabah`, `yaşlı / Hasan / Her Sabah`, `Yaşlı / Hasan / hersabah`], a: "A",
  s: `<p>Cümlenin ortasındaki sıradan sözcükler (yaşlı, her sabah) küçük harfle yazılır; “her sabah” ayrı yazılır. Kişi adı olan “Hasan” büyük harfle başlar.</p><p>B’de “hasan” küçük yazılmış; C’de “Her Sabah” gereksiz büyük yazılmış; D’de “hersabah” bitişik yazılmıştır. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde “-ken” ekinin yazımı <b>yanlıştır</b>?</p>`,
  c: [`Ders çalışırken müzik dinlemem.`, `Çocuk ken bu parkta çok oynardım.`, `Okula giderken yağmura yakalandık.`, `Sen yokken burası çok sessizdi.`], a: "B",
  s: `<p>“-ken” eki getirildiği sözcüğe <b>bitişik</b> yazılır: çocukken, çalışırken, giderken, yokken. B’deki “Çocuk ken” ayrı yazıldığı için yanlıştır; doğrusu “Çocukken”dir. (Ek, “iken” biçiminde kullanılırsa ayrı yazılabilir: çocuk iken.)</p><p>A, C ve D’de “-ken” eki doğru yazılmıştır. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde özel ada getirilen ekin yazımı <b>yanlıştır</b>?</p>`,
  c: [`Sınavdan sonra Elifle buluştuk.`, `Bu yaz Kapadokya’yı gezmek istiyoruz.`, `İstanbul’un tarihî yarımadasını gezdik.`, `Van Gölü’nün suyu sodalıdır.`], a: "A",
  s: `<p>Kişi adlarına getirilen ekler <b>kesmeyle</b> ayrılır. “İle” bağlacının eki olan “-le” de kişi adından kesmeyle ayrılmalıdır: “Elif’le buluştuk.”</p><p>B ve C’de yer adlarına, D’de özel ada gelen ekler kesmeyle ayrılmıştır ✓. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde bir yazım yanlışı <b>yoktur</b>?</p>`,
  c: [`Annem, Türk Dil Kurumunun yayımladığı sözlüğü aldı.`, `Ayşe’de bizimle gelmek istedi.`, `Bu filmi seyretdik ve çok beğendik.`, `Her Cuma akşamı sinemaya gideriz.`], a: "A",
  s: `<p>A’da kurum adı büyük harfle başlamış ve kurum adına gelen ek kesmesiz yazılmıştır → doğru.</p><p>B’de “de” bağlaçtır ve ayrı yazılmalıdır: “Ayşe de”. C’de “seyretdik” → “seyrettik” (ünsüz benzeşmesi). D’de belirli bir tarih yoktur: “her cuma”. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde altı çizili sözcüğün yazımı <b>doğrudur</b>?</p>`,
  c: [`Bu işten çok <u>kar</u> elde ettik.`, `Bizim evde misafiri kapıda karşılamak bir <u>âdettir</u>.`, `Babam bu ayki elektrik faturasını <u>hala</u> ödemedi.`, `Pazardan beş <u>âdet</u> limon aldım.`], a: "B",
  s: `<p>B’deki “âdet” sözcüğü “gelenek, alışkanlık” anlamındadır ve düzeltme işaretiyle yazılır ✓.</p><p>A’da kazanç anlamındaki sözcük <b>“kâr”</b> olmalıdır. C’de “henüz” anlamındaki sözcük <b>“hâlâ”</b> olmalıdır. D’de “sayı” anlamındaki sözcük düzeltme işaretsiz <b>“adet”</b> yazılır. Cevap <b>B</b>.</p>` }
]
});
