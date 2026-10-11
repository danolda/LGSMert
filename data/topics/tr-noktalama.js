LGS.add({
id: "tr-noktalama",
summary: `
<h3>1. Noktalama İşaretleri ve Görevleri</h3>
<table class="rt"><tr><th>İşaret</th><th>Başlıca görevleri</th><th>Örnek</th></tr>
<tr><td><b>Nokta (.)</b></td><td>Cümle sonu; kısaltmalar; sıra sayıları; tarih ve saatlerde</td><td>Dr. · 3. sınıf · 29.10.1923 · 13.30</td></tr>
<tr><td><b>Virgül (,)</b></td><td>Eş görevli sözcükleri ayırma; sıralı cümleler; özneden sonra; hitaptan sonra; ara sözleri ayırma; “evet, hayır, peki” sonrası; tırnaksız aktarmalarda</td><td>Elma, armut, kiraz aldık. · Sevgili kardeşim, … · “Yarın gel, dedi.”</td></tr>
<tr><td><b>Noktalı virgül (;)</b></td><td>İçinde virgül bulunan sıralı cümleleri ya da eş görevli grupları ayırma</td><td>Kızlar, erkekler; büyükler, küçükler hep birlikte geldi.</td></tr>
<tr><td><b>İki nokta (:)</b></td><td>Açıklama ya da örnek verilecek sözden önce; konuşmalarda ad sonrası</td><td>Üç renk seviyorum: mavi, yeşil, beyaz.</td></tr>
<tr><td><b>Üç nokta (…)</b></td><td>Tamamlanmamış cümle; sayılması gereksiz örnekler; söylenmek istenmeyen söz; heyecan, duraksama</td><td>Kalem, defter, silgi… aldık.</td></tr>
<tr><td><b>Soru işareti (?)</b></td><td>Soru bildiren cümle; ayraç içinde bilinmezlik, kuşku</td><td>Yunus Emre 1240 (?) yılında doğmuştur.</td></tr>
<tr><td><b>Ünlem (!)</b></td><td>Duygu, seslenme, emir; ayraç içinde alay, küçümseme</td><td>Eyvah! · Çok çalışkanmış (!) her derse geç kalıyor.</td></tr>
<tr><td><b>Tırnak (“ ”)</b></td><td>Başkasından aynen aktarılan söz; özellikle vurgulanan ifade; eser adları</td><td>Atatürk “Hayatta en hakiki mürşit ilimdir.” demiştir.</td></tr>
<tr><td><b>Kesme (’)</b></td><td>Özel adlara, kısaltmalara, sayılara gelen ekleri ayırma</td><td>Ankara’ya · TDK’ye · 1923’te</td></tr>
<tr><td><b>Kısa çizgi (-)</b></td><td>Satır sonunda bölünen sözcük; “arası, ile” anlamı; ekleri gösterme</td><td>Ankara-İstanbul seferi · 1914-1918 · -lık eki</td></tr>
<tr><td><b>Uzun çizgi (—)</b></td><td>Karşılıklı konuşmalarda konuşmayı başlatma</td><td>— Nereye gidiyorsun?</td></tr>
<tr><td><b>Yay ayraç ( )</b></td><td>Açıklama, ek bilgi; tiyatroda hareket bildirme</td><td>Ankara (başkent) · (Kapıyı açar.)</td></tr></table>
<div class="note"><b>Dikkat:</b> İçinde soru anlamı olan ama soru sormayan cümlelere soru işareti konmaz: “Neden gelmediğini merak ediyorum.” Kurum adlarına gelen ekler kesmeyle ayrılmaz: “Türk Dil Kurumuna”.</div>
`,
qs: [
{ q: `<p>Aşağıdaki cümlelerin hangisinde virgül, <b>eş görevli sözcükleri</b> ayırmak için kullanılmıştır?</p>`,
  c: [`Ali, kardeşini okula bıraktı.`, `Sevgili arkadaşım, mektubunu aldım.`, `Evet, bu kitabı okudum.`, `Pazardan elma, armut, portakal aldık.`], a: "D",
  s: `<p>D’de virgüller, “aldık” yükleminin nesneleri olan ve aynı görevi üstlenen “elma, armut, portakal” sözcüklerini ayırmaktadır → <b>eş görevli sözcükler</b>.</p><p>A’da virgül özneden sonra (karışıklığı önlemek için), C’de “evet” sözcüğünden sonra, B’de hitaptan sonra kullanılmıştır. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde virgül, <b>özneyi belirtmek</b> ve anlam karışıklığını önlemek için kullanılmıştır?</p>`,
  c: [`Kapıyı açtı, içeri girdi.`, `Kitapları, defterleri, kalemleri çantasına koydu.`, `Hayır, bu akşam dışarı çıkmayacağım.`, `Yaşlı, adamın elinden tuttu.`], a: "D",
  s: `<p>D’de virgül olmasaydı “yaşlı adamın” bir tamlama gibi okunurdu. Virgül, “yaşlı” sözcüğünün özne (tutan kişi) olduğunu belirtir: “Yaşlı (biri), adamın elinden tuttu.”</p><p>B’de eş görevli sözcükler, C’de “hayır” sözünden sonra, A’da sıralı cümleler arasında virgül kullanılmıştır. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde virgül, <b>sıralı cümleleri</b> ayırmak için kullanılmıştır?</p>`,
  c: [`Sevgili öğrencilerim, yarın sınav var.`, `Kırmızı, beyaz bayrağımız dalgalanıyor.`, `Peki, sen ne düşünüyorsun?`, `Güneş battı, sokak lambaları yandı.`], a: "D",
  s: `<p>D’de iki ayrı yargı bildiren cümle (“Güneş battı.” ve “Sokak lambaları yandı.”) virgülle ayrılarak sıralanmıştır.</p><p>A’da hitaptan sonra, B’de eş görevli sıfatlar arasında, C’de “peki” sözünden sonra virgül kullanılmıştır. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>noktalı virgül (;)</b> kullanılması gerekir?</p>`,
  c: [`Bahçede güller, laleler, menekşeler açmıştı.`, `Sınıfta kızlar, erkekler (  ) öğretmenler, veliler hep birlikte toplandı.`, `Yarın sabah erkenden yola çıkacağız (  )`, `Annem (  ) “Akşama misafir gelecek.” dedi.`], a: "B",
  s: `<p>B’de virgülle ayrılmış iki grup vardır: “kızlar, erkekler” ve “öğretmenler, veliler”. İçinde virgül bulunan eş görevli grupları birbirinden ayırmak için <b>noktalı virgül</b> kullanılır: “Sınıfta kızlar, erkekler; öğretmenler, veliler hep birlikte toplandı.”</p><p>C’ye nokta, D’ye virgül getirilir; A’da ek bir işarete gerek yoktur. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>iki nokta (:)</b> kullanımı <b>yanlıştır</b>?</p>`,
  c: [`Çantama şunları koydum: kalem, defter, silgi.`, `Babamın tek bir öğüdü vardı: Dürüst ol.`, `Ali: dün akşam bize geldi.`, `Bu bitkinin üç özelliği var: kokusu, rengi ve şifası.`], a: "C",
  s: `<p>İki nokta, kendisinden sonra <b>açıklama</b> ya da <b>örnek</b> verilecek sözlerden sonra konur. C’de “Ali” sözcüğünden sonra bir açıklama gelmemiştir; “Ali” cümlenin öznesidir ve iki nokta gereksizdir: “Ali dün akşam bize geldi.”</p><p>A, B ve D’de iki noktadan sonra açıklama ya da örnek gelmiştir ✓. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde üç nokta (…), <b>sayılması gereksiz görülen örneklerin</b> yerine kullanılmıştır?</p>`,
  c: [`Keşke o gün sana söyleseydim…`, `Manavdan elma, armut, kiraz… aldık.`, `Kapı açıldı ve içeri… evet, içeri o girdi.`, `Bu konuda sana söyleyeceğim çok şey var ama…`], a: "B",
  s: `<p>B’de “elma, armut, kiraz” örneklerinden sonra başka meyveler de alındığı, ancak bunların sayılmasına gerek görülmediği üç noktayla belirtilmiştir.</p><p>A ve D’de üç nokta tamamlanmamış cümlenin sonunda, C’de ise heyecan ya da duraksamayı göstermek için kullanılmıştır. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>soru işareti</b> yanlış kullanılmıştır?</p>`,
  c: [`Yarın bize gelecek misin?`, `Onun neden gelmediğini çok merak ediyorum?`, `Bu kitabı kim yazmış?`, `Ödevlerini bitirdin mi?`], a: "B",
  s: `<p>B’deki cümle soru sözcüğü (“neden”) içerse de bir soru sormamaktadır; konuşan kişi merakını bildirmektedir. Bu tür cümlelerin sonuna <b>nokta</b> konur: “Onun neden gelmediğini çok merak ediyorum.”</p><p>A, C ve D’de gerçek bir soru sorulmuştur ✓. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde ayraç içindeki ünlem işareti <b>alay</b> anlamı katmaktadır?</p>`,
  c: [`Eyvah! Otobüsü kaçırdık.`, `Ne kadar güzel bir manzara!`, `Çok dakik biriymiş (!) her toplantıya yarım saat geç geliyor.`, `Dikkat! Yerler ıslak.`], a: "C",
  s: `<p>C’de “dakik” sözü gerçek anlamıyla değil, tam tersini anlatmak için kullanılmıştır; ayraç içindeki ünlem işareti bu <b>alay</b> anlamını belirtir.</p><p>A’da üzüntü/şaşkınlık, B’de hayranlık, D’de uyarı bildiren ünlem işaretleri vardır. Cevap <b>C</b>.</p>` },
{ q: `<p>“Mevlânâ 1207 (?) yılında Belh şehrinde doğmuştur.”</p><p>Bu cümlede ayraç içindeki soru işaretinin işlevi aşağıdakilerden hangisidir?</p>`,
  c: [`Cümleye soru anlamı katmak`, `Bilginin kesin olmadığını, kuşku bulunduğunu göstermek`, `Alay ve küçümseme anlamı katmak`, `Okura bir soru yöneltmek`], a: "B",
  s: `<p>Ayraç içinde kullanılan soru işareti, kendisinden önce gelen bilginin (doğum yılı) <b>kesin olmadığını</b>, kuşkulu ya da bilinmez olduğunu göstermek için kullanılır.</p><p>Cümle bir soru değildir; ayraç içindeki ünlem işareti (!) alay bildirir, soru işareti değil. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde tırnak işareti, <b>başkasına ait bir sözü aynen aktarmak</b> için kullanılmıştır?</p>`,
  c: [`Sınıfımız “sessiz okuma” etkinliğine katıldı.`, `Reşat Nuri Güntekin’in “Çalıkuşu” romanını okudum.`, `Atatürk, “Egemenlik kayıtsız şartsız milletindir.” demiştir.`, `Bu kelimenin “doğru” yazımı nedir?`], a: "C",
  s: `<p>C’de Atatürk’e ait bir söz, hiç değiştirilmeden <b>aynen aktarılmıştır</b>; bu nedenle tırnak içine alınmıştır.</p><p>A ve D’de tırnak, özellikle vurgulanmak istenen ifadeler için; B’de ise eser adını belirtmek için kullanılmıştır. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>kesme işareti</b> yanlış kullanılmıştır?</p>`,
  c: [`Yaz tatilinde Trabzon’a gittik.`, `Cumhuriyet 1923’te ilan edildi.`, `Annem Türk Dil Kurumu’nun yayınlarını takip eder.`, `Başvuruları TDK’ye gönderdik.`], a: "C",
  s: `<p>Kurum ve kuruluş adlarına getirilen ekler <b>kesmeyle ayrılmaz</b>: “Türk Dil Kurumunun”. C’deki kesme işareti yanlıştır.</p><p>A’da yer adına, B’de sayıya, D’de kısaltmaya gelen ekler kesmeyle ayrılmıştır ✓. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde kısa çizgi (-) <b>“arası”</b> anlamı katmak için kullanılmıştır?</p>`,
  c: [`Türkçede “-lık” eki isimden isim yapar.`, `1914-1918 yılları arasında Birinci Dünya Savaşı yaşandı.`, `Satır sonunda sözcüğü “kitap-lık” şeklinde böldü.`, `— Yarın sabah görüşelim mi?`], a: "B",
  s: `<p>B’deki kısa çizgi, iki tarih arasındaki süreyi göstermek için <b>“arası, ile”</b> anlamında kullanılmıştır.</p><p>A’da kısa çizgi bir eki göstermek, C’de satır sonunda sözcüğü bölmek için kullanılmıştır. D’deki ise konuşmayı başlatan <b>uzun çizgidir</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>noktanın</b> kullanımı yanlıştır?</p>`,
  c: [`Toplantı saat 14.30’da başlayacak.`, `Okulumuzun 5. sınıf öğrencileri geziye katıldı.`, `Prof. Dr. Ahmet Bey konferans verdi.`, `Kitabın başlığı “Bilim ve Teknoloji.” idi.`], a: "D",
  s: `<p>Başlıklar, kitap ve eser adları cümle olsa bile sonlarına nokta konmaz: “Bilim ve Teknoloji”. D’deki nokta gereksizdir.</p><p>A’da saat, B’de sıra sayısı, C’de kısaltma gösteren noktalar doğru kullanılmıştır. Cevap <b>D</b>.</p>` },
{ q: `<p>“Sevgili okurlar (1) bugün size bir hikâye anlatacağım (2) Hikâyenin kahramanları şunlar (3) yaşlı bir balıkçı, onun torunu ve bir yunus (4)”</p><p>Bu metinde numaralanmış yerlere sırasıyla hangi noktalama işaretleri getirilmelidir?</p>`,
  c: [`(,) (.) (:) (.)`, `(;) (.) (:) (…)`, `(,) (:) (.) (.)`, `(!) (,) (;) (.)`], a: "A",
  s: `<p>(1) “Sevgili okurlar” bir hitaptır; hitaptan sonra <b>virgül</b> konur. (2) Cümle tamamlanmıştır → <b>nokta</b>. (3) Ardından açıklama (sayma) gelecektir → <b>iki nokta</b>. (4) Cümle sonu → <b>nokta</b>.</p><p>Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde noktalama işaretleri <b>doğru</b> kullanılmıştır?</p>`,
  c: [`Babam: bu akşam erken gelecekmiş.`, `Ne zaman geleceğini bilmiyorum?`, `Ankara, İstanbul ve İzmir Türkiye’nin en kalabalık şehirleridir.`, `Ali; Ayşe ve Can toplantıya katılmadı.`], a: "C",
  s: `<p>C’de eş görevli özel adlar virgül ve “ve” bağlacıyla ayrılmış, özel ada gelen ek kesmeyle ayrılmıştır; cümle noktayla bitmiştir ✓.</p><p>A’da iki nokta gereksizdir; B soru cümlesi olmadığı için nokta ile bitmelidir; D’de noktalı virgül yerine virgül kullanılmalıdır. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki karşılıklı konuşmada numaralanmış yerlerin hangisine <b>uzun çizgi (—)</b> getirilmelidir?</p><p>(I) Nereye gidiyorsun böyle telaşla?<br>(II) Kütüphaneye, kitabımı iade edeceğim.<br>Mehmet bunu söyledikten sonra (III) hızla uzaklaştı (IV)</p>`,
  c: [`I ve II`, `I ve III`, `II ve IV`, `III ve IV`], a: "A",
  s: `<p>Karşılıklı konuşmalarda her konuşmanın başına <b>uzun çizgi</b> konur. I ve II, iki kişinin konuşmalarıdır; başlarına uzun çizgi gelmelidir.</p><p>III ve IV anlatıcının sözleridir; III’e işaret gerekmez, IV’e ise cümle sonu olduğu için nokta konur. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde virgül, bir <b>ara sözü</b> ayırmak için kullanılmıştır?</p>`,
  c: [`Türkçe öğretmenimiz, Elif Hanım, bize yeni kitaplar önerdi.`, `Bugün hava çok güzel, dışarı çıkalım.`, `Kalemler, defterler masanın üzerindeydi.`, `Evet, yarın sınav var.`], a: "A",
  s: `<p>A’da “Elif Hanım” sözü, “Türkçe öğretmenimiz” sözünü açıklayan bir <b>ara sözdür</b> ve iki virgül arasına alınmıştır.</p><p>B’de sıralı cümleler, C’de eş görevli sözcükler, D’de “evet” sözünden sonra virgül kullanılmıştır. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>ünlem işareti</b> kullanılması gerekir?</p>`,
  c: [`Bu kitap 300 sayfadan oluşuyor (  )`, `Hey (  ) Oradaki çocuk, buraya gel.`, `Yarın erkenden kalkacağım (  )`, `Akşam yemeğinde balık yedik (  )`], a: "B",
  s: `<p>B’deki “Hey” sözcüğü bir <b>seslenme</b> ünlemidir; ardından ünlem işareti konur: “Hey! Oradaki çocuk, buraya gel.”</p><p>A, C ve D duygu ya da seslenme bildirmeyen düz bildirme cümleleridir; sonlarına nokta konur. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>yay ayraç</b>, açıklama yapmak amacıyla kullanılmıştır?</p>`,
  c: [`Yazar 1305 (?) yılında doğmuş olabilir.`, `Çok cesurmuş (!) karanlıkta yalnız kalamıyor.`, `Kadıköy (İstanbul) en sevdiğim semttir.`, `Beni hiç dinlemiyorsun!`], a: "C",
  s: `<p>C’de ayraç içindeki “İstanbul” sözü, Kadıköy’ün hangi şehirde olduğunu <b>açıklamak</b> için kullanılmıştır.</p><p>A’daki ayraç kuşku, B’deki ayraç alay bildirir. D’de ayraç yoktur. Cevap <b>C</b>.</p>` },
{ q: `<p>“Annem bana (1) Yarın erken kalk (2) dedi.”</p><p>Bu cümlede doğrudan aktarılan söz <b>tırnak işareti kullanılmadan</b> yazılmak istenirse numaralanmış yerlere hangi işaretler getirilmelidir?</p>`,
  c: [`(1) hiçbir işaret — (2) virgül`, `(1) iki nokta — (2) nokta`, `(1) virgül — (2) ünlem`, `(1) noktalı virgül — (2) virgül`], a: "A",
  s: `<p>Tırnak işareti kullanılmadan aktarılan sözlerden sonra <b>virgül</b> konur: “Annem bana yarın erken kalk, dedi.” Aktarılan sözün başında herhangi bir işarete gerek yoktur.</p><p>Tırnak kullanılsaydı yazım “Annem bana “Yarın erken kalk.” dedi.” biçiminde olurdu. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde iki nokta (:), kendisinden sonra <b>örnekler</b> sıralanacağını göstermektedir?</p>`,
  c: [`Öğretmenimiz bize şunu söyledi: Çok okuyun.`, `Türkiye’nin üç tarafı denizlerle çevrilidir: Karadeniz, Ege ve Akdeniz.`, `Ayşe: Ben de geliyorum.`, `Maçın sonucu belli oldu: Takımımız birinci.`], a: "B",
  s: `<p>B’de iki noktadan sonra, Türkiye’yi çevreleyen denizler <b>tek tek sıralanmıştır</b> (örnekleme).</p><p>A’da iki noktadan sonra bir <b>açıklama</b> (öğütün kendisi) gelmiştir; C’de karşılıklı konuşmada konuşanın adından sonra kullanılmıştır. D’de ise iki noktadan sonra bir açıklama (sonuç) gelmiştir. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>noktalama yanlışı</b> yoktur?</p>`,
  c: [`Sabah erkenden kalktım; kahvaltımı yaptım.`, `Bu sorunun cevabını kim bilir.`, `Ayşe, Mehmet, ve Can sinemaya gitti.`, `Kardeşim bana, “Kitabımı gördün mü?” diye sordu.`], a: "D",
  s: `<p>D’de doğrudan aktarılan soru cümlesi tırnak içine alınmış, sonuna soru işareti konmuştur ✓. (Aktarmadan önce virgül kullanılabilir.)</p><p>A’da içinde virgül bulunmayan iki sıralı cümle arasında noktalı virgül değil <b>virgül</b> kullanılmalıdır. B bir soru cümlesidir; sonuna soru işareti gelmelidir. C’de “ve” bağlacından önce virgül kullanılmaz. Cevap <b>D</b>.</p>` },
{ q: `<p>“Hey (1) Buraya bak (2) Bu kitabı sen mi aldın (3) Çok güzel bir kitap (4)”</p><p>Bu metinde numaralanmış yerlere sırasıyla hangi noktalama işaretleri getirilmelidir?</p>`,
  c: [`(!) (.) (?) (.)`, `(,) (!) (.) (!)`, `(!) (,) (?) (.)`, `(?) (.) (!) (,)`], a: "A",
  s: `<p>(1) “Hey” seslenme ünlemidir → <b>ünlem</b>. (2) “Buraya bak” emir cümlesidir, bitmiştir → <b>nokta</b> (ünlem de kullanılabilir; ancak seçeneklerde nokta verilmiştir). (3) Soru cümlesi → <b>soru işareti</b>. (4) Bildirme cümlesi → <b>nokta</b>.</p><p>Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde virgül, <b>hitap</b> sözünden sonra kullanılmıştır?</p>`,
  c: [`Sayın yolcularımız, uçağımız birazdan iniş yapacaktır.`, `Rüzgâr esti, yapraklar savruldu.`, `Annem, babam ve ben pikniğe gittik.`, `Hayır, bu akşam çıkmıyoruz.`], a: "A",
  s: `<p>A’da “Sayın yolcularımız” sözü dinleyicilere <b>seslenme (hitap)</b> bildirir; hitaptan sonra virgül konur.</p><p>B’de sıralı cümleler, C’de eş görevli sözcükler, D’de “hayır” sözünden sonra virgül kullanılmıştır. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>kesme işareti</b> kullanılmamalıdır?</p>`,
  c: [`İstanbul’un fethi 1453’te gerçekleşti.`, `Yarın Ayşe’lere misafirliğe gideceğiz.`, `NATO’nun merkezi Brüksel’dedir.`, `Bu sınavda Türkçe’den yüksek not aldım.`], a: "D",
  s: `<p><b>-ca/-ce</b> ekiyle kurulmuş dil adlarına gelen ekler kesmeyle ayrılmaz: “Türkçeden”. D’de kesme işareti yanlış kullanılmıştır.</p><p>A’da yer adı ve sayıya, B’de kişi adına, C’de kısaltma ve yer adına gelen ekler kesmeyle ayrılmıştır ✓. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde üç nokta, <b>söylenmek istenmeyen bir sözün</b> yerine kullanılmıştır?</p>`,
  c: [`O gün olanları anlatsam… Neyse, hiç anlatmayayım.`, `Pazardan domates, biber, patlıcan… aldık.`, `Yolda yürürken birden… bir ses duydum.`, `Kitaplar, defterler, kalemler… her şey yerli yerindeydi.`], a: "A",
  s: `<p>A’da konuşan kişi, olanları anlatmaya başlamış ama sözünü yarıda keserek anlatmaktan <b>vazgeçmiştir</b> (“Neyse, hiç anlatmayayım.”); üç nokta söylenmek istenmeyen sözlerin yerini tutmaktadır.</p><p>B ve D’de üç nokta sayılması gereksiz örnekler, C’de ise heyecan ve duraksama bildirmektedir. Cevap <b>A</b>.</p>` }
]
});
