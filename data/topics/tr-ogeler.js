LGS.add({
id: "tr-ogeler",
summary: `
<h3>1. Ögeleri Bulma Sırası</h3>
<div class="fig"><svg viewBox="0 0 620 210" width="600" role="img" aria-label="Ögeleri bulma sırası">
<defs><marker id="og1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker></defs>
<g font-size="12" text-anchor="middle">
<rect x="5" y="15" width="110" height="60" rx="10" fill="#fee2e2" stroke="#dc2626"/><text x="60" y="40" font-weight="bold">1. Yüklem</text><text x="60" y="58">İş, oluş, yargı</text>
<rect x="128" y="15" width="110" height="60" rx="10" fill="#dbeafe" stroke="#2563eb"/><text x="183" y="40" font-weight="bold">2. Özne</text><text x="183" y="58">“Kim? / Ne?”</text>
<rect x="251" y="15" width="110" height="60" rx="10" fill="#dcfce7" stroke="#16a34a"/><text x="306" y="40" font-weight="bold">3. Nesne</text><text x="306" y="58">“Neyi? Kimi? / Ne?”</text>
<rect x="374" y="15" width="115" height="60" rx="10" fill="#fef3c7" stroke="#d97706"/><text x="431" y="35" font-weight="bold">4. Dolaylı tümleç</text><text x="431" y="52">Nereye? Nerede?</text><text x="431" y="67">Nereden? Kime?…</text>
<rect x="502" y="15" width="113" height="60" rx="10" fill="#ede9fe" stroke="#7c3aed"/><text x="558" y="35" font-weight="bold">5. Zarf tümleci</text><text x="558" y="52">Nasıl? Ne zaman?</text><text x="558" y="67">Ne kadar? Niçin?</text>
<g stroke="#475569" stroke-width="2"><line x1="115" y1="45" x2="126" y2="45" marker-end="url(#og1)"/><line x1="238" y1="45" x2="249" y2="45" marker-end="url(#og1)"/><line x1="361" y1="45" x2="372" y2="45" marker-end="url(#og1)"/><line x1="489" y1="45" x2="500" y2="45" marker-end="url(#og1)"/></g>
<text x="310" y="110" font-size="14">“<tspan fill="#7c3aed" font-weight="bold">Dün akşam</tspan> <tspan fill="#2563eb" font-weight="bold">annem</tspan> <tspan fill="#d97706" font-weight="bold">bize</tspan> <tspan fill="#16a34a" font-weight="bold">güzel bir masal</tspan> <tspan fill="#dc2626" font-weight="bold">anlattı</tspan>.”</text>
<text x="310" y="135" fill="#475569">Zarf tümleci – Özne – Dolaylı tümleç – Belirtisiz nesne – Yüklem</text>
<text x="310" y="170" fill="#475569">Sorular yükleme sorulur: “Anlatan kim? → annem” · “Ne anlattı? → güzel bir masal” · “Kime? → bize”</text>
<text x="310" y="195" fill="#475569">Öbekler bölünmez: “güzel bir masal” tek bir ögedir.</text>
</g></svg></div>

<h3>2. Ögeler ve Dikkat Noktaları</h3>
<table class="rt"><tr><th>Öge</th><th>Açıklama</th><th>Örnek</th></tr>
<tr><td><b>Yüklem</b></td><td>Cümlenin temel ögesi; çekimli fiil ya da ek-fiil almış isim. Devrik cümlede sonda olmaz.</td><td>Geldi <b>misafirler</b> akşamüstü. (Yüklem: geldi)</td></tr>
<tr><td><b>Özne</b></td><td>Yüklemin bildirdiği işi yapan ya da oluşa konu olan. Cümlede yoksa <b>gizli özne</b> (yüklemin kişi ekinden anlaşılır).</td><td>Kitabı okudum. (gizli özne: ben)</td></tr>
<tr><td><b>Sözde özne</b></td><td>Edilgen fiilli cümlelerde işten etkilenen öge</td><td><b>Kapı</b> açıldı. · <b>Yollar</b> temizlendi.</td></tr>
<tr><td><b>Belirtili nesne</b></td><td>-ı hâl ekini alır (“neyi, kimi?”)</td><td><b>Kitabı</b> okudum.</td></tr>
<tr><td><b>Belirtisiz nesne</b></td><td>Ek almaz (“ne?”); özne ile karışmasın: işi yapan değil, işten etkilenendir.</td><td><b>Kitap</b> okudum.</td></tr>
<tr><td><b>Dolaylı tümleç</b></td><td>-e, -de, -den hâl eki almış yer–yön bildiren öge</td><td><b>Okula</b> gitti. <b>Annemden</b> izin aldım.</td></tr>
<tr><td><b>Zarf tümleci</b></td><td>Zaman, durum, miktar, neden, araç bildirir</td><td><b>Hızla</b> koştu. <b>Yarın</b> gelecek. <b>Arkadaşıyla</b> geldi.</td></tr></table>
<div class="note"><b>Ara söz:</b> Cümlede bir ögeyi açıklamak için virgül ya da kısa çizgi arasına alınan sözdür; ayrı bir öge sayılmaz, açıkladığı ögenin içinde değerlendirilir. “Türkçe öğretmenimiz<b>, Ayşe Hanım,</b> bize kitap önerdi.”</div>
`,
qs: [
{ q: `<p>“Geçen yaz ailemle birlikte Kapadokya’yı gezdik.”</p><p>Bu cümlenin ögeleri aşağıdakilerin hangisinde sırasıyla doğru verilmiştir?</p>`,
  c: [`Zarf tümleci – Zarf tümleci – Belirtili nesne – Yüklem`, `Özne – Dolaylı tümleç – Belirtili nesne – Yüklem`, `Zarf tümleci – Dolaylı tümleç – Belirtisiz nesne – Yüklem`, `Zarf tümleci – Özne – Dolaylı tümleç – Yüklem`], a: "A",
  s: `<p>Yüklem: “gezdik”. Gezen kim? → “biz” (gizli özne). Neyi gezdik? → “Kapadokya’yı” (belirtili nesne). Ne zaman? → “geçen yaz” (zarf tümleci). Kiminle? → “ailemle birlikte” (zarf tümleci).</p><p>Sıralama: Zarf tümleci – Zarf tümleci – Belirtili nesne – Yüklem. Cevap <b>A</b>.</p>` },
{ q: `<p>“Sınavdan önce öğretmenimiz bize konuyu tekrar anlattı.”</p><p>Bu cümlenin ögeleri sırasıyla aşağıdakilerin hangisidir?</p>`,
  c: [`Dolaylı tümleç – Özne – Dolaylı tümleç – Belirtili nesne – Zarf tümleci – Yüklem`, `Zarf tümleci – Belirtili nesne – Dolaylı tümleç – Özne – Zarf tümleci – Yüklem`, `Zarf tümleci – Özne – Belirtili nesne – Dolaylı tümleç – Zarf tümleci – Yüklem`, `Zarf tümleci – Özne – Dolaylı tümleç – Belirtili nesne – Zarf tümleci – Yüklem`], a: "D",
  s: `<p>Yüklem: “anlattı”. Anlatan kim? → “öğretmenimiz” (özne). Neyi? → “konuyu” (belirtili nesne). Kime? → “bize” (dolaylı tümleç). Ne zaman? → “sınavdan önce” (zarf tümleci; “önce” edatıyla kurulmuş öbek zaman bildirir). Nasıl? → “tekrar” (zarf tümleci).</p><p>Sıralama: Zarf tümleci – Özne – Dolaylı tümleç – Belirtili nesne – Zarf tümleci – Yüklem. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>nesne yoktur</b>?</p>`,
  c: [`Kardeşim her gün süt içer.`, `Annem pazardan taze sebze aldı.`, `Bu kitabı daha önce okumuştum.`, `Çocuklar bahçede neşeyle koşuyordu.`], a: "D",
  s: `<p>A’da “süt” (ne içer? → belirtisiz nesne), B’de “taze sebze” (ne aldı? → belirtisiz nesne), C’de “bu kitabı” (neyi? → belirtili nesne) vardır.</p><p>D’de “koşmak” geçişsiz bir fiildir, nesne almaz: “çocuklar” özne, “bahçede” dolaylı tümleç, “neşeyle” zarf tümlecidir. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde altı çizili söz <b>belirtisiz nesne</b>dir?</p>`,
  c: [`Annem bize <u>kurabiye</u> yaptı.`, `<u>Kuşlar</u> sabah erkenden ötmeye başladı.`, `<u>Kapıyı</u> sessizce kapattı.`, `<u>Okula</u> her gün yürüyerek gider.`], a: "A",
  s: `<p>A’da “Annem ne yaptı?” sorusunun cevabı “kurabiye”dir; işten etkilenen ve hâl eki almamış öge → <b>belirtisiz nesne</b>.</p><p>B’deki “kuşlar” işi yapan → özne; C’deki “kapıyı” -ı ekini almış → belirtili nesne; D’deki “okula” yönelme eki almış → dolaylı tümleç. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>dolaylı tümleç</b> vardır?</p>`,
  c: [`Akşamları kitap okumayı severim.`, `Dedem bahçeyi özenle sulardı.`, `Bu haberi arkadaşımdan öğrendim.`, `Yarın erkenden yola çıkacağız.`], a: "C",
  s: `<p>C’de “Nereden / kimden öğrendim?” sorusunun cevabı “arkadaşımdan”dır; ayrılma hâl eki (-dan) almış bu öge <b>dolaylı tümleçtir</b>.</p><p>A’da “akşamları” zarf tümleci, “kitap okumayı” belirtili nesne; B’de “bahçeyi” belirtili nesne, “özenle” zarf tümleci; D’de “yarın, erkenden” zarf tümleci, “yola” ise deyimin parçasıdır (“yola çıkmak” birleşik yüklem). Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde altı çizili söz <b>zarf tümleci</b>dir?</p>`,
  c: [`<u>Okulun bahçesinde</u> top oynadık.`, `<u>Arkadaşına</u> bir mektup yazdı.`, `<u>Sabahleyin</u> hava çok soğuktu.`, `<u>Ödevini</u> zamanında teslim etti.`], a: "C",
  s: `<p>C’de “Hava ne zaman soğuktu?” sorusunun cevabı “sabahleyin”dir → zaman bildiren <b>zarf tümleci</b>.</p><p>A’daki “okulun bahçesinde” (nerede?) ve B’deki “arkadaşına” (kime?) dolaylı tümleç; D’deki “ödevini” (neyi?) belirtili nesnedir. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde özne cümlede <b>açıkça yer almamıştır</b> (gizli öznedir)?</p>`,
  c: [`Kardeşim bu sabah erkenden uyandı.`, `Öğrenciler bahçede toplandı.`, `Rüzgâr, ağaçların dallarını sallıyordu.`, `Yeni aldığım kitabı iki günde bitirdim.`], a: "D",
  s: `<p>D’de yüklemi yapan kişi cümlede söylenmemiştir; “bitirdim” yüklemindeki <b>-m</b> kişi ekinden öznenin “ben” olduğu anlaşılır → gizli özne.</p><p>A’da “kardeşim”, C’de “rüzgâr”, B’de “öğrenciler” özne olarak cümlede açıkça yer alır. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>sözde özne</b> vardır?</p>`,
  c: [`Çiftçiler tarlaları sürdü.`, `Okulun duvarları yeniden boyandı.`, `Annem bize yemek hazırladı.`, `Kardeşim oyuncaklarını topladı.`], a: "B",
  s: `<p>B’deki “boyandı” edilgen bir fiildir; boyama işini yapan belli değildir. İşten etkilenen “okulun duvarları” öznenin yerini almıştır → <b>sözde özne</b>.</p><p>A, C ve D’de fiiller etkendir; işi yapanlar (çiftçiler, annem, kardeşim) bellidir ve gerçek öznedir. Cevap <b>B</b>.</p>` },
{ q: `<p>“Ağır ağır yükseliyordu güneş, dağların ardından.”</p><p>Bu cümlenin <b>yüklemi</b> aşağıdakilerden hangisidir?</p>`,
  c: [`Ağır ağır`, `yükseliyordu`, `güneş`, `dağların ardından`], a: "B",
  s: `<p>Cümle devrik bir cümledir; yüklem sonda değildir. Cümlede iş bildiren çekimli fiil “yükseliyordu”dur → <b>yüklem</b>.</p><p>“Yükselen ne?” → “güneş” (özne); “Nasıl?” → “ağır ağır” (zarf tümleci); “Nereden?” → “dağların ardından” (dolaylı tümleç). Cevap <b>B</b>.</p>` },
{ q: `<p>“<u>Komşumuzun küçük kızı</u>, <u>dün akşam</u> <u>bize</u> <u>kendi yaptığı resimleri</u> gösterdi.”</p><p>Bu cümledeki altı çizili sözlerin öge görevleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir?</p>`,
  c: [`Özne – Zarf tümleci – Dolaylı tümleç – Belirtili nesne`, `Belirtili nesne – Zarf tümleci – Özne – Dolaylı tümleç`, `Özne – Dolaylı tümleç – Zarf tümleci – Belirtisiz nesne`, `Özne – Zarf tümleci – Belirtili nesne – Dolaylı tümleç`], a: "A",
  s: `<p>Yüklem “gösterdi”. Gösteren kim? → “komşumuzun küçük kızı” (özne). Ne zaman? → “dün akşam” (zarf tümleci). Kime? → “bize” (dolaylı tümleç). Neyi? → “kendi yaptığı resimleri” (belirtili nesne).</p><p>Cevap <b>A</b>.</p>` },
{ q: `<p>“Kütüphanede sessizce kitap okuyorduk.”</p><p>Bu cümlede aşağıdaki ögelerden hangisi <b>yoktur</b>?</p>`,
  c: [`Dolaylı tümleç`, `Zarf tümleci`, `Belirtisiz nesne`, `Belirtili nesne`], a: "D",
  s: `<p>Yüklem: “okuyorduk” (özne gizli: biz). Nerede? → “kütüphanede” (dolaylı tümleç). Nasıl? → “sessizce” (zarf tümleci). Ne okuyorduk? → “kitap” (belirtisiz nesne).</p><p>Cümlede -ı hâl eki almış bir nesne yoktur; yani <b>belirtili nesne</b> bulunmaz. Cevap <b>D</b>.</p>` },
{ q: `<p>“Yaz tatilinde dedemin köyüne gittik.”</p><p>Aşağıdaki cümlelerin hangisi öge dizilişi bakımından bu cümleyle <b>aynıdır</b>?</p>`,
  c: [`Akşam yemeğinden sonra parka yürüdük.`, `Annem bu sabah bize börek yaptı.`, `Kardeşim ödevlerini dikkatle yaptı.`, `Öğretmenimiz yarın sınav yapacak.`], a: "A",
  s: `<p>Verilen cümle: “Yaz tatilinde” (ne zaman? → zarf tümleci) – “dedemin köyüne” (nereye? → dolaylı tümleç) – “gittik” (yüklem); özne gizli.</p><p>A: “Akşam yemeğinden sonra” (ne zaman? → zarf tümleci) – “parka” (nereye? → dolaylı tümleç) – “yürüdük” (yüklem); özne gizli → aynı diziliş.</p><p>B’de özne, dolaylı tümleç ve nesne; C’de özne ve nesne; D’de özne ve nesne vardır. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>özne</b> birden fazla sözcükten oluşan bir söz öbeğidir?</p>`,
  c: [`Ayşe sabah erkenden kalktı.`, `Bahçedeki yaşlı ceviz ağacı fırtınada devrildi.`, `Onu yıllardır tanıyorum.`, `Kuşlar güneye göç etti.`], a: "B",
  s: `<p>B’de “Devrilen ne?” sorusunun cevabı “bahçedeki yaşlı ceviz ağacı”dır; özne dört sözcükten oluşan bir isim öbeğidir ve bölünmeden tek öge sayılır.</p><p>A’da “Ayşe”, D’de “kuşlar” tek sözcüklü öznedir; C’de özne gizlidir (ben), “onu” ise belirtili nesnedir. Cevap <b>B</b>.</p>` },
{ q: `<p>“Edebiyat öğretmenimiz, Leyla Hanım, bize Yunus Emre’nin şiirlerini okudu.”</p><p>Bu cümledeki ara söz hangi ögeyi açıklamaktadır?</p>`,
  c: [`Yüklemi`, `Özneyi`, `Belirtili nesneyi`, `Dolaylı tümleci`], a: "B",
  s: `<p>Virgüller arasındaki “Leyla Hanım” sözü, kendinden önce gelen “edebiyat öğretmenimiz” sözünü açıklamaktadır. “Okuyan kim?” → “edebiyat öğretmenimiz” (özne).</p><p>Ara söz ayrı bir öge sayılmaz; açıkladığı ögenin içinde değerlendirilir. Bu nedenle özneyi açıklamaktadır. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde hem <b>belirtili nesne</b> hem de <b>dolaylı tümleç</b> vardır?</p>`,
  c: [`Ödünç aldığım kitabı arkadaşıma geri verdim.`, `Akşam yemeğinde balık yedik.`, `Kardeşim bütün gün uyudu.`, `Sabah erkenden yola çıktık.`], a: "A",
  s: `<p>A’da “Neyi verdim?” → “ödünç aldığım kitabı” (belirtili nesne); “Kime verdim?” → “arkadaşıma” (dolaylı tümleç); “Nasıl?” → “geri” (zarf tümleci).</p><p>B’de belirtisiz nesne (balık) var ama dolaylı tümleç yoktur (“akşam yemeğinde” zaman bildiren zarf tümlecidir); C ve D’de nesne yoktur. Cevap <b>A</b>.</p>` },
{ q: `<p>(I) Annem her sabah bize kahvaltı hazırlar.<br>(II) Babam işten yorgun geldi.<br>(III) Kardeşim yeni bisikletini çok sevdi.<br>(IV) Biz hafta sonu dedemlere gittik.</p><p>Numaralanmış cümlelerin hangisinde <b>dolaylı tümleç yoktur</b>?</p>`,
  c: [`I.`, `II.`, `III.`, `IV.`], a: "C",
  s: `<p>I’de “bize” (kime?), II’de “işten” (nereden?), IV’te “dedemlere” (nereye / kime?) dolaylı tümleçtir.</p><p>III’te “kardeşim” özne, “yeni bisikletini” belirtili nesne, “çok” zarf tümleci, “sevdi” yüklemdir; -e, -de, -den hâl eki almış yer–yön bildiren bir öge yoktur. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde altı çizili söz <b>özne</b>dir?</p>`,
  c: [`Bu yıl <u>okulumuza</u> yeni bir kütüphane yapıldı.`, `<u>Yağmur</u> bütün gece durmadan yağdı.`, `<u>Mektubu</u> postaneye götürdü.`, `Toplantıya <u>herkesten önce</u> geldi.`], a: "B",
  s: `<p>B’de “Yağan ne?” sorusunun cevabı “yağmur”dur → <b>özne</b>.</p><p>A’daki “okulumuza” dolaylı tümleçtir (bu cümlenin sözde öznesi “yeni bir kütüphane”dir). C’deki “mektubu” belirtili nesne; D’deki “herkesten önce” zaman bildiren zarf tümlecidir. Cevap <b>B</b>.</p>` },
{ q: `<p>“Ali, sınava çok iyi hazırlandığı için sorulardan hiç zorlanmadı.”</p><p>Bu cümlede “sınava çok iyi hazırlandığı için” sözü hangi ögedir?</p>`,
  c: [`Özne`, `Belirtili nesne`, `Dolaylı tümleç`, `Zarf tümleci`], a: "D",
  s: `<p>“Ali niçin zorlanmadı?” sorusunun cevabı “sınava çok iyi hazırlandığı için”dir. Yüklemin <b>nedenini</b> bildiren bu söz öbeği <b>zarf tümlecidir</b>.</p><p>Cümlede özne “Ali”, dolaylı tümleç “sorulardan” (neyden zorlanmadı?), zarf tümleci ayrıca “hiç”tir. Cevap <b>D</b>.</p>` },
{ q: `<p>“Kuşlar” sözcüğü aşağıdaki cümlelerin hangisinde <b>özne</b> görevinde değildir?</p>`,
  c: [`Kuşlar ağaçta cıvıldaşıyordu.`, `Kuşlar sonbaharda güneye göç eder.`, `Kuşları beslemek için balkona yem koyduk.`, `Kuşlar sabahın ilk ışıklarıyla uyandı.`], a: "C",
  s: `<p>C’de “kuşları” sözcüğü -ı hâl ekini almış ve “beslemek” fiilimsisinin nesnesi olmuştur; “kuşları beslemek için” söz öbeği cümlede amaç bildiren <b>zarf tümlecidir</b>. Cümlenin öznesi değildir; özne gizlidir (biz).</p><p>A, B ve D’de “kuşlar” yüklemdeki işi yapandır → özne. Cevap <b>C</b>.</p>` },
{ q: `<p>“Dün akşam babam bize parkta uçurtma yaptı.”</p><p>Bu cümle kaç ögeden oluşmaktadır?</p>`,
  c: [`3`, `4`, `5`, `6`], a: "D",
  s: `<p>Yüklem: “yaptı”. Yapan kim? → “babam” (özne). Ne yaptı? → “uçurtma” (belirtisiz nesne). Kime? → “bize” (dolaylı tümleç). Nerede? → “parkta” (dolaylı tümleç). Ne zaman? → “dün akşam” (zarf tümleci).</p><p>Ögeler: Zarf tümleci – Özne – Dolaylı tümleç – Dolaylı tümleç – Belirtisiz nesne – Yüklem → <b>6</b> öge. Aynı türden iki öge (iki dolaylı tümleç) ayrı ayrı sayılır. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde zarf tümleci <b>miktar</b> bildirmektedir?</p>`,
  c: [`Bu konuyu çok az biliyorum.`, `Yarın sabah yola çıkacağız.`, `Kapıyı hızla kapattı.`, `Dün akşam sinemaya gittik.`], a: "A",
  s: `<p>A’da “Ne kadar biliyorum?” sorusunun cevabı “çok az”dır → <b>miktar</b> bildiren zarf tümleci.</p><p>B’deki “yarın sabah” ve D’deki “dün akşam” zaman; C’deki “hızla” durum (nasıl?) bildiren zarf tümleçleridir. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde “ne?” sorusuyla bulunan öge <b>nesne</b>dir?</p>`,
  c: [`Gökyüzünde bir uçak belirdi.`, `Bahçede çiçekler açmış.`, `Annem çarşıdan elma aldı.`, `Sokakta bir köpek havlıyordu.`], a: "C",
  s: `<p>C’de “Annem ne aldı?” sorusunun cevabı “elma”dır; elma işi yapan değil, işten etkilenendir → <b>belirtisiz nesne</b>.</p><p>A’da “Beliren ne?” → “bir uçak”, B’de “Açan ne?” → “çiçekler”, D’de “Havlayan ne?” → “bir köpek” sorularının cevapları işi yapan ya da oluşa konu olan ögelerdir → özne. Cevap <b>C</b>.</p>` },
{ q: `<p>“Çocuklar, okul bahçesindeki çınarın gölgesinde saatlerce oyun oynadı.”</p><p>Bu cümledeki “okul bahçesindeki çınarın gölgesinde” söz öbeği hangi ögedir?</p>`,
  c: [`Özne`, `Belirtisiz nesne`, `Dolaylı tümleç`, `Zarf tümleci`], a: "C",
  s: `<p>“Çocuklar nerede oyun oynadı?” sorusunun cevabı “okul bahçesindeki çınarın gölgesinde”dir. Bulunma hâl eki (-de) almış ve yer bildiren bu söz öbeği <b>dolaylı tümleçtir</b>.</p><p>Öbeğin içinde birden fazla sözcük olması, onu tek bir öge olmaktan çıkarmaz. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisi yalnızca <b>özne ve yüklemden</b> oluşmaktadır?</p>`,
  c: [`Misafirler geldi.`, `Kitabı okudum.`, `Yarın gideceğiz.`, `Okula yürüdüm.`], a: "A",
  s: `<p>A’da “Gelen kim?” → “misafirler” (özne), “geldi” (yüklem). Cümlede başka öge yoktur.</p><p>B’de belirtili nesne (kitabı), C’de zarf tümleci (yarın), D’de dolaylı tümleç (okula) vardır; ayrıca bu cümlelerde özne gizlidir. Cevap <b>A</b>.</p>` },
{ q: `<p>“Kardeşime doğum günü için güzel bir hediye aldım.”</p><p>Bu cümledeki ögelerle ilgili aşağıdakilerden hangisi <b>yanlıştır</b>?</p>`,
  c: [`“aldım” yüklemdir.`, `“güzel bir hediye” belirtisiz nesnedir.`, `“kardeşime” dolaylı tümleçtir.`, `Cümlenin öznesi “kardeşime”dir.`], a: "D",
  s: `<p>Yüklem “aldım”dır (A ✓). “Ne aldım?” → “güzel bir hediye” (belirtisiz nesne, B ✓). “Kime?” → “kardeşime” (dolaylı tümleç, C ✓). “Ne için?” → “doğum günü için” (zarf tümleci).</p><p>Hediyeyi alan kişi “ben”dir; özne gizlidir. “Kardeşime” özne olamaz. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde altı çizili söz, öge bakımından diğerlerinden <b>farklıdır</b>?</p>`,
  c: [`<u>Yaz aylarında</u> deniz kenarına gideriz.`, `<u>Akşama doğru</u> hava serinledi.`, `<u>Dağın zirvesine</u> güçlükle tırmandık.`, `<u>Her sabah</u> erkenden uyanır.`], a: "C",
  s: `<p>A’daki “yaz aylarında”, B’deki “akşama doğru” ve D’deki “her sabah” sözleri “ne zaman?” sorusunun cevabıdır → zaman bildiren <b>zarf tümleci</b>. (A’daki -de eki zaman anlamı katar.)</p><p>C’deki “dağın zirvesine” sözü “nereye?” sorusunun cevabıdır → <b>dolaylı tümleç</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>“Uzun süredir görmediğim teyzemi bayramda ziyaret ettim.”</p><p>Bu cümledeki “uzun süredir görmediğim teyzemi” sözüyle ilgili aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [`Özne görevindedir.`, `Belirtili nesne görevindedir.`, `Dolaylı tümleç görevindedir.`, `Zarf tümleci görevindedir.`], a: "B",
  s: `<p>“Kimi ziyaret ettim?” sorusunun cevabı “uzun süredir görmediğim teyzemi”dir. -i hâl ekini almış bu söz öbeği <b>belirtili nesnedir</b>.</p><p>Öbeğin içindeki “görmediğim” sıfat-fiili, öbeği ayrı ögelere bölmez. Özne gizlidir (ben), “bayramda” ise zaman bildiren zarf tümlecidir. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde özne, yüklemden <b>sonra</b> gelmiştir?</p>`,
  c: [`Gidelim artık bu şehirden.`, `Sevindi bu habere bütün aile.`, `Bütün aile bu habere çok sevindi.`, `Bu habere hepimiz sevindik.`], a: "B",
  s: `<p>B devrik bir cümledir: Yüklem “sevindi” başta yer almış, “Sevinen kim?” sorusunun cevabı olan “bütün aile” (özne) yüklemden sonra gelmiştir.</p><p>A’da özne gizlidir (biz); C ve D’de özne (“bütün aile”, “hepimiz”) yüklemden önce gelmiştir. Cevap <b>B</b>.</p>` }
]
});
