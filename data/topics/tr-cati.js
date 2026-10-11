LGS.add({
id: "tr-cati",
summary: `
<h3>1. Çatı Nedir?</h3>
<p>Fiilin <b>özne</b> ve <b>nesne</b> ile ilişkisine çatı denir. Çatı, cümlenin yüklemi olan fiile bakılarak belirlenir.</p>
<div class="fig"><svg viewBox="0 0 620 220" width="600" role="img" aria-label="Fiilde çatı şeması">
<g font-size="12" text-anchor="middle">
<rect x="230" y="5" width="160" height="34" rx="8" fill="#fde68a" stroke="#a16207"/><text x="310" y="27" font-weight="bold">FİİLDE ÇATI</text>
<g stroke="#94a3b8" fill="none"><path d="M310,39 V52 H160 V62"/><path d="M310,52 H460 V62"/></g>
<rect x="60" y="62" width="200" height="30" rx="8" fill="#dbeafe" stroke="#2563eb"/><text x="160" y="82" font-weight="bold">Öznesine göre</text>
<rect x="360" y="62" width="200" height="30" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="460" y="82" font-weight="bold">Nesnesine göre</text>
<rect x="10" y="105" width="140" height="80" rx="8" fill="#eff6ff" stroke="#2563eb"/><text x="80" y="125" font-weight="bold">Etken</text><text x="80" y="143">Öznesi bellidir</text><text x="80" y="165" font-style="italic">Ali camı kırdı.</text>
<rect x="165" y="105" width="140" height="80" rx="8" fill="#eff6ff" stroke="#2563eb"/><text x="235" y="125" font-weight="bold">Edilgen (-l, -n)</text><text x="235" y="143">İşi yapan belli değil</text><text x="235" y="165" font-style="italic">Cam kırıldı.</text>
<rect x="315" y="105" width="140" height="80" rx="8" fill="#f0fdf4" stroke="#16a34a"/><text x="385" y="125" font-weight="bold">Geçişli</text><text x="385" y="143">Nesne alabilir</text><text x="385" y="165" font-style="italic">Kitap(ı) okudu.</text>
<rect x="470" y="105" width="140" height="80" rx="8" fill="#f0fdf4" stroke="#16a34a"/><text x="540" y="125" font-weight="bold">Geçişsiz</text><text x="540" y="143">Nesne alamaz</text><text x="540" y="165" font-style="italic">Çocuk uyudu.</text>
<text x="310" y="210" fill="#475569">Test: Yükleme “Neyi? Kimi?” sorusu sorulabiliyorsa fiil geçişlidir (nesne cümlede olmasa bile).</text>
</g></svg></div>

<h3>2. Önemli Kurallar</h3>
<ul>
<li><b>Edilgen</b> fiillerde öznenin yerini işten etkilenen öge alır → <b>sözde özne</b>: “<u>Yollar</u> temizlendi.” İşi yapan “tarafından” ile söylenebilir, fiil yine edilgendir: “Yollar <u>belediye tarafından</u> temizlendi.”</li>
<li><b>Edilgen fiiller geçişsizdir</b>; nesne almazlar.</li>
<li><b>-n eki her zaman edilgenlik bildirmez.</b> İşi yapan kişi işi kendine yapıyorsa fiil etkendir: “Ali sabah <u>yıkandı</u>.” (kendini yıkadı → etken) · “Çamaşırlar <u>yıkandı</u>.” (edilgen)</li>
<li><b>Ettirgen ekleri</b> (-dır, -t, -ır, -ar) geçişsiz fiili geçişli yapar: uyu- (geçişsiz) → uyut- (geçişli): “Annem bebeği uyuttu.”</li>
<li>Edilgen anlatım; işi yapanın <b>bilinmediği ya da önemsenmediği</b> durumlarda, tarif, kural ve haber metinlerinde sık kullanılır: “Un elenir, şeker eklenir.”</li>
</ul>
`,
qs: [
{ q: `<p>Aşağıdaki cümlelerin hangisinde yüklem <b>edilgen</b> çatılıdır?</p>`,
  c: [`Kardeşim odasını topladı.`, `Çocuklar bahçede oynuyor.`, `Annem bize çorba yaptı.`, `Okulun önündeki yol genişletildi.`], a: "D",
  s: `<p>D’deki “genişletildi” fiili <b>-il</b> edilgenlik ekini almıştır; yolu genişletenin kim olduğu belli değildir. “Yol” işten etkilenen sözde öznedir → <b>edilgen</b>.</p><p>A, C ve B’de işi yapanlar (kardeşim, annem, çocuklar) bellidir; yüklemler etkendir. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde yüklem <b>geçişsizdir</b>?</p>`,
  c: [`Öğretmen ödevleri kontrol etti.`, `Ali her sabah gazete okur.`, `Bebek bütün gece uyudu.`, `Dedem bahçeye fidan dikti.`], a: "C",
  s: `<p>C’deki “uyudu” fiiline “neyi, kimi?” sorusu sorulamaz; fiil nesne alamaz → <b>geçişsiz</b>.</p><p>A’da “ödevleri” (neyi?), B’de “gazete” (ne?), D’de “fidan” (ne?) nesnelerdir; bu fiiller geçişlidir. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde yüklemin çatısı <b>etken ve geçişli</b>dir?</p>`,
  c: [`Kapı rüzgârın etkisiyle açıldı.`, `Kuşlar güneye göç etti.`, `Annem pencereleri sildi.`, `Sınav sonuçları yarın açıklanacak.`], a: "C",
  s: `<p>C’de işi yapan “annem”dir (etken); “Neyi sildi?” → “pencereleri” (nesne) olduğundan fiil <b>geçişlidir</b>.</p><p>A ve D’deki “açıldı, açıklanacak” fiilleri edilgendir (dolayısıyla geçişsiz). B’deki “göç etti” etken ama nesne almadığı için geçişsizdir. Cevap <b>C</b>.</p>` },
{ q: `<p>“Yeni kütüphanenin açılış töreni dün düzenlendi.”</p><p>Bu cümlenin yüklemi ile ilgili aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [`Etken ve geçişlidir.`, `Edilgen ve geçişlidir.`, `Etken ve geçişsizdir.`, `Edilgen ve geçişsizdir.`], a: "D",
  s: `<p>“Düzenlendi” fiili “düzenle-” köküne <b>-n</b> edilgenlik eki getirilerek oluşmuştur; töreni düzenleyenin kim olduğu belirtilmemiştir → <b>edilgen</b>. “Açılış töreni” sözde öznedir.</p><p>Edilgen fiiller nesne almadığından <b>geçişsizdir</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde altı çizili fiil, -n ekini almasına rağmen <b>edilgen değildir</b>?</p>`,
  c: [`Çamaşırlar bu sabah <u>yıkandı</u>.`, `Ayşe aynanın karşısında saçlarını <u>taradı</u>.`, `Ali soğuk suyla <u>yıkandı</u>, sonra giyindi.`, `Bütün kapılar <u>kapandı</u>.`], a: "C",
  s: `<p>C’de “yıkandı” fiilinde işi yapan “Ali”dir ve işi kendine yapmaktadır (kendini yıkadı). Öznesi belli olduğu için fiil <b>etkendir</b>; -n eki burada dönüşlülük bildirir.</p><p>A’da çamaşırları yıkayan, D’de kapıları kapatan belli değildir → edilgen. B’deki “taradı” -n eki almamıştır. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>sözde özne</b> vardır?</p>`,
  c: [`Postacıya bir mektup verdim.`, `Postacı mektupları dağıttı.`, `Postacı sabah erkenden yola çıktı.`, `Mektuplar postacı tarafından dağıtıldı.`], a: "D",
  s: `<p>D’deki “dağıtıldı” fiili edilgendir. Edilgen cümlelerde işten etkilenen öge öznenin yerini alır: “mektuplar” → <b>sözde özne</b>. İşi yapan “postacı tarafından” ifadesiyle belirtilse de fiil edilgen olarak kalır.</p><p>B ve C’de “postacı” gerçek öznedir; A’da özne gizlidir (ben), “postacıya” dolaylı tümleçtir. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde geçişsiz bir fiil, aldığı ekle <b>geçişli</b> hâle getirilmiştir?</p>`,
  c: [`Çocuklar parkta koştu.`, `Bebek beşikte mışıl mışıl uyudu.`, `Kardeşim akşam erkenden yattı.`, `Annem ağlayan bebeği uyuttu.`], a: "D",
  s: `<p>“Uyumak” geçişsiz bir fiildir. D’de “uyu-” fiiline <b>-t</b> ettirgenlik eki getirilmiş (uyut-) ve fiil nesne alabilir hâle gelmiştir: “Neyi/kimi uyuttu?” → “ağlayan bebeği”.</p><p>B, C ve A’daki “uyudu, yattı, koştu” fiilleri geçişsizdir ve nesne almamıştır. Cevap <b>D</b>.</p>` },
{ q: `<p>Bir öğrenci aşağıdaki cümlelerin yüklemlerini çatı özelliklerine göre sınıflandırmıştır.</p>
<table class="rt"><tr><th>Cümle</th><th>Öznesine göre</th><th>Nesnesine göre</th></tr>
<tr><td>1. Ağaçlar budandı.</td><td>Edilgen</td><td>Geçişsiz</td></tr>
<tr><td>2. Selin şiir yazdı.</td><td>Etken</td><td>Geçişli</td></tr>
<tr><td>3. Güneş doğdu.</td><td>Etken</td><td>Geçişli</td></tr>
<tr><td>4. Toplantı ertelendi.</td><td>Etken</td><td>Geçişsiz</td></tr></table>
<p>Buna göre öğrenci kaç cümlenin yüklemini <b>tamamen doğru</b> sınıflandırmıştır?</p>`,
  c: [`1`, `2`, `3`, `4`], a: "B",
  s: `<p>1. “Budandı” edilgen ve geçişsizdir ✓. 2. “Yazdı” etken ve geçişlidir (ne yazdı? → şiir) ✓.</p><p>3. “Doğdu” etkendir ama nesne alamadığı için <b>geçişsizdir</b> ✗. 4. “Ertelendi” <b>edilgendir</b> (erteleyen belli değil) ✗.</p><p>Tamamen doğru sınıflandırma sayısı <b>2</b>’dir. Cevap <b>B</b>.</p>` },
{ q: `<p>(I) Hamura önce un eklenir. (II) Ardından karışım iyice yoğrulur. (III) Hazırlanan hamur bir saat dinlendirilir. (IV) Son olarak hamur fırına verilir.</p><p>Bu tarif metnindeki numaralanmış cümlelerin yüklemleri ile ilgili aşağıdakilerden hangisi <b>söylenebilir</b>?</p>`,
  c: [`Hepsi etken çatılıdır.`, `Yalnızca I ve II edilgen çatılıdır.`, `Hepsi edilgen çatılıdır.`, `Hepsi geçişli fiillerdir.`], a: "C",
  s: `<p>“Eklenir, yoğrulur, dinlendirilir, verilir” fiillerinin hepsi <b>-n / -l</b> edilgenlik ekini almıştır ve işi yapanın kim olduğu belirtilmemiştir → hepsi <b>edilgen</b>.</p><p>Tarif metinlerinde işi yapanın önemi olmadığından edilgen anlatım sıkça kullanılır. Edilgen fiiller geçişsizdir; bu nedenle D yanlıştır. Cevap <b>C</b>.</p>` },
{ q: `<p>“Bütün kitaplar kütüphane görevlisi tarafından rafa dizildi.”</p><p>Bu cümle <b>etken</b> çatılı hâle getirilirse aşağıdakilerden hangisi elde edilir?</p>`,
  c: [`Kütüphane görevlisi bütün kitapları rafa dizdi.`, `Bütün kitaplar rafa dizilecek.`, `Kitaplar rafa dizilmiş.`, `Rafa dizilen kitaplar kütüphanededir.`], a: "A",
  s: `<p>Edilgen cümleyi etken yapmak için “tarafından” ile belirtilen gerçek işi yapan (kütüphane görevlisi) özne yapılır, sözde özne (kitaplar) nesneye dönüştürülür ve fiil etken hâle getirilir: “Kütüphane görevlisi bütün kitapları rafa dizdi.”</p><p>B ve C’deki “dizilecek, dizilmiş” fiilleri yine edilgendir; D’de yüklem ek-fiil almış bir isimdir. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde edilgen anlatımın kullanılma nedeni, işi yapanın <b>önemsenmemesidir</b>?</p>`,
  c: [`Ali, düşen kalemini yerden aldı.`, `Kardeşim bütün gün resim çizdi.`, `Annem dün akşam bize kek yaptı.`, `Sınav salonlarına telefon ve saat alınmaz.`], a: "D",
  s: `<p>D’de “alınmaz” fiili edilgendir. Burada bir kural bildirilmektedir; telefonu ya da saati kimin almayacağı önemli değildir, kural herkes için geçerlidir. Bu nedenle işi yapan belirtilmemiştir.</p><p>A, C ve B’de işi yapanlar (Ali, annem, kardeşim) bellidir; yüklemler etkendir. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinin yüklemi <b>geçişli</b> olduğu hâlde cümlede <b>nesne kullanılmamıştır</b>?</p>`,
  c: [`Akşam yemeğinden sonra bir süre okudu.`, `Kardeşim bu sabah çok erken uyandı.`, `Rüzgâr bütün gece şiddetle esti.`, `Misafirler saat sekizde geldi.`], a: "A",
  s: `<p>A’daki “okudu” fiiline “Neyi / ne okudu?” sorusu sorulabilir; fiil nesne alabilen <b>geçişli</b> bir fiildir. Ancak cümlede nesne söylenmemiştir.</p><p>B’deki “uyandı”, C’deki “esti” ve D’deki “geldi” fiillerine “neyi, kimi?” sorusu sorulamaz; bunlar geçişsizdir. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde yüklemin çatısı diğerlerinden <b>farklıdır</b>?</p>`,
  c: [`Eski binalar yıkıldı.`, `Yeni yollar yapıldı.`, `Parklar ağaçlandırıldı.`, `İşçiler binayı boyadı.`], a: "D",
  s: `<p>A’daki “yıkıldı”, B’deki “yapıldı”, C’deki “ağaçlandırıldı” fiilleri <b>edilgen</b> ve geçişsizdir; işi yapanlar belli değildir.</p><p>D’deki “boyadı” fiilinin öznesi “işçiler”dir ve “binayı” nesnesini almıştır → etken ve geçişli. Cevap <b>D</b>.</p>` },
{ q: `<p>“Kardeşim kırılan vazoyu topladı.”</p><p>Bu cümlenin yüklemi ile ilgili aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [`Yüklem edilgendir, çünkü cümlede “kırılan” sözcüğü vardır.`, `Yüklem etken ve geçişlidir.`, `Yüklem etken ve geçişsizdir.`, `Yüklem edilgen ve geçişsizdir.`], a: "B",
  s: `<p>Çatı, cümlenin <b>yüklemine</b> bakılarak belirlenir. Yüklem “topladı”dır; toplayan “kardeşim”dir (etken). “Neyi topladı?” → “kırılan vazoyu” (nesne) → <b>geçişli</b>.</p><p>“Kırılan” sözcüğü vazoyu niteleyen edilgen bir sıfat-fiildir; yüklemin çatısını etkilemez (A yanlış). Cevap <b>B</b>.</p>` },
{ q: `<p>“Kayıp kedi, mahalle sakinleri tarafından bulundu.”</p><p>Bu cümleyle ilgili aşağıdakilerden hangisi <b>yanlıştır</b>?</p>`,
  c: [`Yüklemi edilgendir.`, `“Kayıp kedi” sözde öznedir.`, `“Mahalle sakinleri tarafından” sözü işi yapanı bildirir.`, `İşi yapan belirtildiği için yüklem etkendir.`], a: "D",
  s: `<p>“Bulundu” fiili “bul-” köküne <b>-un</b> edilgenlik ekinin getirilmesiyle oluşmuştur → edilgen (A ✓). İşten etkilenen “kayıp kedi” sözde öznedir (B ✓). “Tarafından” ile gerçek işi yapan söylenmiştir (C ✓).</p><p>İşi yapanın “tarafından” ile belirtilmesi fiilin edilgenliğini değiştirmez; yüklem yine edilgendir. Cevap <b>D</b>.</p>` },
{ q: `<p>“Öğretmenimiz sınav kâğıtlarını titizlikle okudu.”</p><p>Bu cümle <b>edilgen</b> çatılı hâle getirilirse aşağıdakilerden hangisi elde edilir?</p>`,
  c: [`Öğretmenimiz sınav kâğıtlarını okuyacak.`, `Sınav kâğıtları öğretmenimiz tarafından titizlikle okundu.`, `Öğretmenimiz titizlikle okuyan biridir.`, `Sınav kâğıtlarını titizlikle okuyan öğretmenimizdir.`], a: "B",
  s: `<p>Edilgen yapmak için nesne (sınav kâğıtlarını) sözde özne yapılır (sınav kâğıtları), fiile edilgenlik eki getirilir (oku- → okun-) ve gerçek işi yapan istenirse “tarafından” ile verilir.</p><p>B bu dönüşümü doğru yapmıştır. A ve D’de yüklemler etken, C’de ise ek-fiil almış bir isim vardır. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde yüklem <b>etken ve geçişsiz</b>dir?</p>`,
  c: [`Kuşlar sabah erkenden öttü.`, `Ödevler zamanında teslim edildi.`, `Babam bize yeni bir masa aldı.`, `Bahçe çitlerle çevrildi.`], a: "A",
  s: `<p>A’da ötme işini yapan “kuşlar”dır (etken); “ötmek” fiiline “neyi, kimi?” sorusu sorulamaz (geçişsiz).</p><p>B ve D’de yüklemler edilgendir; C’de yüklem etken ama “ne aldı?” → “yeni bir masa” nesnesini aldığı için geçişlidir. Cevap <b>A</b>.</p>` },
{ q: `<p>“Deprem bölgesine yardım malzemeleri ulaştırıldı. Çadırlar kısa sürede kuruldu. Gönüllüler yaralılara ilk yardım yaptı.”</p><p>Bu metindeki yüklemlerle ilgili aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [`Üç yüklem de edilgendir.`, `İki yüklem edilgen, bir yüklem etkendir.`, `Bir yüklem edilgen, iki yüklem etkendir.`, `Üç yüklem de etkendir.`], a: "B",
  s: `<p>“Ulaştırıldı” (ulaştır- + -ıl) ve “kuruldu” (kur- + -ul) fiilleri <b>edilgendir</b>; işi yapanlar belirtilmemiştir.</p><p>“Yaptı” fiilinin öznesi “gönüllüler”dir → <b>etken</b>. Yani iki yüklem edilgen, bir yüklem etkendir. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde altı çizili fiil <b>geçişli</b> kullanılmıştır?</p>`,
  c: [`Çocuk korkudan <u>titredi</u>.`, `Su yüz derecede <u>kaynar</u>.`, `Annem sabahları çayı demlikte <u>kaynatır</u>.`, `Hava birden <u>karardı</u>.`], a: "C",
  s: `<p>C’deki “kaynatır” fiili, geçişsiz “kayna-” fiiline <b>-t</b> ettirgenlik ekinin getirilmesiyle oluşmuştur; “Neyi kaynatır?” → “çayı” (nesne) → <b>geçişli</b>.</p><p>A’daki “titredi”, B’deki “kaynar”, D’deki “karardı” fiilleri nesne alamaz; geçişsizdir. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümle çiftlerinin hangisinde yüklemlerin çatıları (öznesine göre) <b>aynıdır</b>?</p>`,
  c: [`Kapı açıldı. / Ali kapıyı açtı.`, `Mektup yazıldı. / Elif mektup yazdı.`, `Çocuk uyudu. / Bebek güldü.`, `Yollar temizlendi. / İşçiler yolları temizledi.`], a: "C",
  s: `<p>C’de “uyudu” ve “güldü” fiillerinin özneleri (çocuk, bebek) bellidir; iki yüklem de <b>etkendir</b>.</p><p>A, B ve D’de çiftlerin ilk cümleleri edilgen (açıldı, yazıldı, temizlendi), ikinci cümleleri etkendir. Cevap <b>C</b>.</p>` },
{ q: `<p>“Haftaya yapılacak gezi için öğrencilerden izin belgesi istendi.”</p><p>Bu cümledeki fiil ve fiilimsilerle ilgili aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [`Yüklem etken, “yapılacak” edilgendir.`, `Yüklem de “yapılacak” sıfat-fiili de edilgendir.`, `Yüklem edilgen, “yapılacak” etkendir.`, `Yüklem de “yapılacak” sıfat-fiili de etkendir.`], a: "B",
  s: `<p>Yüklem “istendi” (iste- + -n) edilgendir; izni isteyen belirtilmemiştir. “Yapılacak” (yap- + -ıl + -acak) sıfat-fiili de edilgenlik eki almıştır; geziyi yapacak olanlar belirtilmemiştir.</p><p>Her ikisi de edilgendir. (Cümlenin çatısı yükleme göre belirlenir; burada fiilimsinin çatısı da sorulmaktadır.) Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdakilerin hangisinde fiilde çatı ile ilgili verilen bilgi <b>yanlıştır</b>?</p>`,
  c: [`Edilgen fiiller nesne almaz, bu yüzden geçişsizdir.`, `Edilgen cümlelerde işten etkilenen öge sözde özne olur.`, `“-n” eki alan her fiil edilgendir.`, `Geçişsiz fiiller ettirgenlik ekleriyle geçişli hâle getirilebilir.`], a: "C",
  s: `<p>A, B ve D çatıyla ilgili doğru bilgilerdir.</p><p>C yanlıştır: “-n” eki her zaman edilgenlik bildirmez. Örneğin “Ali yıkandı.” cümlesinde işi yapan Ali’dir, işi kendine yapmaktadır; fiil etkendir (dönüşlü). Cevap <b>C</b>.</p>` },
{ q: `<p>“<u>Yağan</u> kar yüzünden okullar <u>tatil edildi</u>; çocuklar sevinçle sokaklara <u>koştu</u>.”</p><p>Bu cümledeki altı çizili sözcüklerin çatıları (öznesine göre) sırasıyla aşağıdakilerin hangisinde doğru verilmiştir?</p>`,
  c: [`Etken – Edilgen – Etken`, `Edilgen – Edilgen – Etken`, `Etken – Etken – Edilgen`, `Edilgen – Etken – Etken`], a: "A",
  s: `<p>“Yağan”: yağma işini yapan “kar”dır → <b>etken</b>. “Tatil edildi”: okulları tatil edenin kim olduğu belirtilmemiştir; “edil-” edilgendir → <b>edilgen</b>. “Koştu”: koşan “çocuklar”dır → <b>etken</b>.</p><p>Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde yüklem <b>geçişli</b> ve cümlede <b>belirtisiz nesne</b> vardır?</p>`,
  c: [`Arkadaşım bana kitap hediye etti.`, `Kitabı arkadaşıma hediye ettim.`, `Kitaplar raflara yerleştirildi.`, `Kitapçıya erkenden gittim.`], a: "A",
  s: `<p>A’da “Ne hediye etti?” → “kitap” (hâl eki almamış nesne) → <b>belirtisiz nesne</b>; yüklem geçişlidir.</p><p>B’de yüklem geçişlidir ama nesne “kitabı” belirtilidir. C’de yüklem edilgendir (geçişsiz); D’de “gitmek” geçişsizdir. Cevap <b>A</b>.</p>` },
{ q: `<p>(I) Bu yıl okulumuzda bir bilim şenliği düzenlendi. (II) Öğrenciler projelerini büyük bir heyecanla sergiledi. (III) Ziyaretçiler en çok robotik projelerine ilgi gösterdi. (IV) Şenliğin sonunda başarılı projelere ödül verildi.</p><p>Numaralanmış cümlelerin hangilerinin yüklemi <b>edilgendir</b>?</p>`,
  c: [`I ve II`, `I ve IV`, `II ve III`, `III ve IV`], a: "B",
  s: `<p>I’deki “düzenlendi” ve IV’teki “verildi” fiilleri edilgenlik eki (-n, -il) almıştır; işi yapanlar belirtilmemiştir → <b>edilgen</b>.</p><p>II’de “sergiledi” fiilinin öznesi “öğrenciler”, III’te “ilgi gösterdi” fiilinin öznesi “ziyaretçiler”dir → etken. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde yüklem, <b>ettirgenlik eki</b> almış geçişli bir fiildir?</p>`,
  c: [`Babam arabayı tamirciye yıkattı.`, `Kardeşim aynada saçlarını taradı.`, `Bahçedeki çiçekler soldu.`, `Kediler güneşte uzandı.`], a: "A",
  s: `<p>A’daki “yıkattı” fiili “yıka-” fiiline <b>-t</b> ettirgenlik ekinin getirilmesiyle oluşmuştur; babam işi başkasına (tamirciye) yaptırmıştır. “Neyi yıkattı?” → “arabayı” (nesne).</p><p>B’deki “taradı” ek almamış geçişli bir fiildir; C ve D’deki “soldu, uzandı” geçişsizdir. Cevap <b>A</b>.</p>` },
{ q: `<p>Gazete haberi: “İstanbul’da dün akşam saatlerinde etkili olan sağanak nedeniyle bazı yollar trafiğe kapatıldı. Bölgeye ekipler sevk edildi ve su baskınları kısa sürede tahliye edildi.”</p><p>Bu haberde edilgen anlatımın sık kullanılmasının <b>temel nedeni</b> aşağıdakilerden hangisidir?</p>`,
  c: [`Olayların kimler tarafından yapıldığından çok, olayların kendisinin önemli olması`, `Haberin okura bir öğüt vermek amacıyla yazılması`, `Haberde kişisel duygu ve düşüncelerin aktarılması`, `Olayların geçmiş zamanda değil gelecekte gerçekleşecek olması`], a: "A",
  s: `<p>Haberde yolların kapatılması, ekiplerin gönderilmesi, suların tahliye edilmesi gibi <b>olayların kendisi</b> ön plandadır; bu işleri kimin yaptığı önemsenmemiştir. Bu nedenle “kapatıldı, sevk edildi, tahliye edildi” gibi edilgen fiiller kullanılmıştır.</p><p>Haberde öğüt verme ya da kişisel duygu aktarma yoktur; olaylar geçmiş zamanda anlatılmıştır. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde yüklemin <b>öznesine göre</b> çatısı, “Eski evler restore edildi.” cümlesinin yüklemiyle <b>aynıdır</b>?</p>`,
  c: [`Ustalar eski evleri restore etti.`, `Tarihî çeşme yeniden onarıldı.`, `Turistler eski evleri gezdi.`, `Eski evler çok güzel görünüyordu.`], a: "B",
  s: `<p>Verilen cümledeki “restore edildi” yüklemi <b>edilgendir</b>; evleri restore edenler belirtilmemiştir.</p><p>B’deki “onarıldı” (onar- + -ıl) da edilgendir; çeşmeyi onaranlar belirtilmemiştir. A ve C’de yüklemler etkendir (ustalar, turistler). D’deki “görünüyordu” fiilinin öznesi “eski evler”dir ve edilgenlik bildirmez. Cevap <b>B</b>.</p>` }
]
});
