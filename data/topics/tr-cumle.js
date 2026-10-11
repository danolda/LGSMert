LGS.add({
id: "tr-cumle",
summary: `
<h3>1. Cümleler Arası Anlam İlişkileri</h3>
<div class="fig"><svg viewBox="0 0 620 200" width="600" role="img" aria-label="Neden-sonuç, amaç-sonuç ve koşul-sonuç ilişkileri">
<defs><marker id="tc1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker></defs>
<g font-size="13" text-anchor="middle">
<rect x="10" y="15" width="180" height="50" rx="10" fill="#fee2e2" stroke="#dc2626"/><text x="100" y="37" font-weight="bold">Neden → Sonuç</text><text x="100" y="55" font-size="11">Gerçekleşmiş sebep</text>
<rect x="220" y="15" width="180" height="50" rx="10" fill="#dcfce7" stroke="#16a34a"/><text x="310" y="37" font-weight="bold">Amaç → Sonuç</text><text x="310" y="55" font-size="11">Henüz gerçekleşmemiş hedef</text>
<rect x="430" y="15" width="180" height="50" rx="10" fill="#dbeafe" stroke="#2563eb"/><text x="520" y="37" font-weight="bold">Koşul → Sonuç</text><text x="520" y="55" font-size="11">Şarta bağlı gerçekleşme</text>
<text x="100" y="95" font-size="12">Yağmur yağdığı <tspan font-weight="bold">için</tspan></text><text x="100" y="112" font-size="12">maç ertelendi.</text>
<text x="310" y="95" font-size="12">Sınavı kazanmak <tspan font-weight="bold">için</tspan></text><text x="310" y="112" font-size="12">çok çalışıyor.</text>
<text x="520" y="95" font-size="12">Erken çıkar<tspan font-weight="bold">sak</tspan></text><text x="520" y="112" font-size="12">trene yetişiriz.</text>
<text x="310" y="150" font-size="12" fill="#475569">Test: “Niçin?” sorusuna “…dığı için” cevabı → neden; “…mek için / …mek amacıyla” cevabı → amaç.</text>
<text x="310" y="175" font-size="12" fill="#475569">Neden-sonuç ekleri: -dığından, -dığı için, -den dolayı, bu yüzden, -ince · Koşul: -se/-sa, -dıkça, -madıkça</text>
</g></svg></div>
<table class="rt"><tr><th>İlişki / Anlam</th><th>Açıklama</th><th>Örnek</th></tr>
<tr><td>Karşılaştırma</td><td>İki varlık/durum arasındaki benzerlik veya farklılık</td><td>Bu kitap, ilkinden daha akıcı.</td></tr>
<tr><td>Örtülü anlam</td><td>Söylenmeyen ama sezdirilen ikinci bir yargı</td><td>Ali <b>de</b> geldi. (Başkaları da gelmiş.)</td></tr>
<tr><td>Ön yargı</td><td>Bir şeyi tanımadan, denemeden olumlu/olumsuz yargıya varma</td><td>O filmi izlemedim ama sıkıcı olduğundan eminim.</td></tr>
<tr><td>Tahmin</td><td>Geleceğe yönelik, gerekçeye dayanan öngörü</td><td>Bulutlara bakılırsa akşama yağmur yağacak.</td></tr>
<tr><td>Varsayım</td><td>Bir şeyi gerçekleşmiş gibi kabul ederek düşünme</td><td>Diyelim ki sınavı kazandın, hangi okulu seçersin?</td></tr>
<tr><td>Öneri / Eleştiri</td><td>Çözüm önerme / olumlu-olumsuz yönleri değerlendirme</td><td>Okumayı alışkanlık hâline getirmelisin.</td></tr>
<tr><td>Abartma</td><td>Bir durumu olduğundan çok büyük/küçük gösterme</td><td>Bu çantanın ağırlığından belim koptu.</td></tr>
<tr><td>Kesinlik / Olasılık</td><td>Yargıdan emin olma / ihtimal bildirme</td><td>Mutlaka gelecek. / Belki gelir.</td></tr>
<tr><td>Tanım</td><td>Bir kavramın ne olduğunu açıklama</td><td>Roman, olay ağırlıklı uzun yazılardır.</td></tr></table>

<h3>2. Öznel ve Nesnel Yargı</h3>
<div class="two">
<div class="note"><b>Nesnel yargı:</b> Kanıtlanabilir, kişiden kişiye değişmeyen bilgi.<br><i>“Kitap 240 sayfadan oluşuyor.” “Ankara Türkiye’nin başkentidir.”</i></div>
<div class="note"><b>Öznel yargı:</b> Kişisel görüş, duygu, beğeni; kanıtlanamaz, tartışmaya açıktır.<br><i>“Kitabın kapağı çok zevksiz.” “En güzel mevsim sonbahardır.”</i></div>
</div>
<ul>
<li>İpucu sözcükler: <b>güzel, sıkıcı, etkileyici, bence, en iyi, gereksiz, başarılı</b> gibi değerlendirme bildiren sözcükler öznelliğe işaret eder.</li>
<li><b>Aynı anlamdaki cümleler:</b> Farklı sözcüklerle aynı yargıyı bildiren cümlelerdir. Olumsuz yapılı olup olumlu anlam taşıyan cümlelere dikkat: “Gitmemezlik edemedim.” = Gittim.</li>
<li><b>Duygu bildiren cümleler:</b> pişmanlık (keşke…), özlem, şaşkınlık, sitem, umut, hayal kırıklığı gibi.</li>
</ul>
`,
qs: [
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>neden-sonuç</b> ilişkisi vardır?</p>`,
  c: [`Sınav sonuçlarını öğrenmek için sabahtan beri bilgisayarın başında.`, `Yeni bir dil öğrenmek amacıyla bir kursa yazıldı.`, `Düzenli kitap okursan kelime hazinen genişler.`, `Gece boyunca kar yağdığından okullar bir gün tatil edildi.`], a: "D",
  s: `<p>D’de okulların tatil edilmesinin sebebi, gerçekleşmiş bir olay olan kar yağışıdır (“-dığından”) → <b>neden-sonuç</b>.</p><p>A ve B’de henüz gerçekleşmemiş bir hedef (sonuçları öğrenmek, dil öğrenmek) vardır → amaç-sonuç. C’de sonuç bir şarta bağlanmıştır (“okursan”) → koşul-sonuç. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>amaç-sonuç</b> ilişkisi vardır?</p>`,
  c: [`Yolda trafik olduğu için toplantıya geç kaldı.`, `Hava çok sıcak olduğundan pencereleri açtık.`, `Kardeşini uyandırmamak için odaya parmak uçlarında girdi.`, `Çok yorulduğundan erkenden uyudu.`], a: "C",
  s: `<p>C’de odaya parmak uçlarında girmenin hedefi, henüz gerçekleşmemiş bir durumdur: kardeşini <b>uyandırmamak</b>. “Niçin?” sorusuna “uyandırmamak için” cevabı alınır → <b>amaç-sonuç</b>.</p><p>A, B ve D’de sebepler (trafik, sıcak, yorgunluk) zaten gerçekleşmiştir → neden-sonuç. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde gerçekleşmesi bir <b>koşula</b> bağlanmış bir yargı vardır?</p>`,
  c: [`Projeyi zamanında teslim etmek için hafta sonu da çalıştı.`, `Kapı açık kaldığı için kedi dışarı kaçmış.`, `Yağmur başladığından piknik yarıda kaldı.`, `Bu kitabı okudukça yazarın diğer eserlerini de merak edeceksin.`], a: "D",
  s: `<p>D’de “merak etme” sonucu, kitabın okunması şartına bağlanmıştır (“okudukça”) → <b>koşul-sonuç</b>.</p><p>A’da amaç-sonuç, C ve B’de neden-sonuç ilişkisi vardır. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisi <b>nesnel</b> bir yargı içerir?</p>`,
  c: [`Yazarın son romanı, önceki kitaplarına göre çok daha sürükleyici olmuş.`, `Ödüllü film, izleyiciyi derinden etkileyen sahnelerle dolu.`, `Selimiye Camisi, Mimar Sinan tarafından Edirne’de inşa edilmiştir.`, `Bu müzeyi gezmeden şehri gördüm demek bence büyük bir eksiklik.`], a: "C",
  s: `<p>C’deki bilgi tarihî kaynaklarla kanıtlanabilir, kişiden kişiye değişmez → <b>nesnel</b>.</p><p>A’daki “sürükleyici”, B’deki “derinden etkileyen”, D’deki “bence büyük bir eksiklik” ifadeleri kişisel değerlendirmedir → öznel. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>örtülü anlam</b> yoktur?</p>`,
  c: [`Bu yıl da kitap fuarına gidemedik.`, `Kardeşim bile bu soruyu çözebildi.`, `Toplantıya Ahmet de katıldı.`, `Kütüphane hafta içi saat dokuzda açılıyor.`], a: "D",
  s: `<p>A: “Bu yıl da” → önceki yıllarda da gidemedikleri sezdiriliyor. B: “bile” → sorunun kolay olduğu ya da kardeşin bu tür soruları genelde çözemediği anlaşılıyor. C: “de” → başkalarının da katıldığı anlaşılıyor.</p><p>D’de yalnızca açık bir bilgi verilmiş, söylenmeyen ikinci bir yargı yoktur. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>ön yargı</b> vardır?</p>`,
  c: [`Bu yemeği daha önce denediğim için tadını beğenmeyeceğimi biliyorum.`, `Yarın havanın yağmurlu olacağı tahmin ediliyor.`, `Hiç tanımadığım bu komşumuzun kesinlikle huysuz biri olduğunu düşünüyorum.`, `Kitabı okuduktan sonra yazarın üslubunu ağır buldum.`], a: "C",
  s: `<p><b>Ön yargı</b>, bir kişi ya da durum hakkında tanımadan, denemeden yargıya varmaktır. C’da konuşan kişi komşusunu hiç tanımadığı hâlde onun huysuz olduğuna karar vermiştir.</p><p>A ve D’de yargı deneyime dayanır; B’de tahmin vardır. Cevap <b>C</b>.</p>` },
{ q: `<p>“Bu çocuk, matematiğe olan merakı ve çalışkanlığıyla ileride iyi bir mühendis olacak.”</p><p>Bu cümlede aşağıdakilerden hangisi vardır?</p>`,
  c: [`Gerekçeye dayalı bir tahmin`, `Kesin bir bilgi`, `Varsayım`, `Ön yargı`], a: "A",
  s: `<p>Konuşan kişi, çocuğun geleceğine dair bir öngörüde bulunuyor ve bunu “merakı ve çalışkanlığı” gerekçesine dayandırıyor → <b>gerekçeli tahmin</b>.</p><p>Gelecek kesin bilinemeyeceği için kesin bilgi değildir. “Diyelim ki…” gibi kabul etme yoktur (varsayım değil). Yargı gözleme dayandığından ön yargı da değildir. Cevap <b>A</b>.</p>` },
{ q: `<p>“Kitaplar, insana başka hayatların kapılarını aralar.”</p><p>Bu cümleyle anlatılmak istenen aşağıdakilerden hangisidir?</p>`,
  c: [`Kitap okumak, kişinin kendi hayatını unutmasına yol açar.`, `Okuyan kişi, farklı insanların yaşantılarını ve dünyalarını tanıma fırsatı bulur.`, `Kitaplar, insanların gerçek hayattan kaçmak için başvurduğu bir araçtır.`, `İnsanlar yalnızca kitaplar aracılığıyla yeni yerler görebilir.`], a: "B",
  s: `<p>“Başka hayatların kapılarını aralamak” mecazlı bir anlatımdır: Kitaplar sayesinde okur, farklı insanların yaşantılarını, düşüncelerini ve dünyalarını <b>tanıma</b> imkânı bulur.</p><p>A ve C’de olumsuz bir yargı vardır; cümlede böyle bir anlam yoktur. D’deki “yalnızca” ifadesi cümlenin anlamını aşar. Cevap <b>B</b>.</p>` },
{ q: `<p>“Onun bu kadar özverili çalıştığını görünce yardım etmeden duramadım.”</p><p>Aşağıdakilerden hangisi bu cümleyle <b>anlamca en yakındır</b>?</p>`,
  c: [`Onun özverili çalıştığını görünce yardım etmekten vazgeçtim.`, `Onun bu kadar özverili çalıştığını görünce ona yardım ettim.`, `Onun çalışmasını görmeseydim yardım ederdim.`, `Onun özverili çalıştığını düşünmediğim için yardım etmedim.`], a: "B",
  s: `<p>“Yardım etmeden duramadım” olumsuz yapılı ama olumlu anlamlıdır: Kişi, karşısındakinin özverisini görünce <b>yardım etmiştir</b>.</p><p>A ve D’de yardım edilmemiştir. C’de ise anlam tamamen değiştirilmiştir (görmeseydi yardım edecekti). Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>pişmanlık</b> duygusu vardır?</p>`,
  c: [`Keşke o gün arkadaşımın sözünü dinleseydim de bu hataya düşmeseydim.`, `Yaz tatilinde köyümüze gideceğimiz günü iple çekiyorum.`, `Bu kadar kısa sürede şehrin bu kadar değişmesine şaşırdım.`, `Çocukluğumun geçtiği o sokakları çok özledim.`], a: "A",
  s: `<p>A’da kişi geçmişte yapmadığı bir şey için üzüntü duymaktadır (“Keşke … dinleseydim”) → <b>pişmanlık</b>.</p><p>B’de sabırsızlık ve heyecan, C’de şaşkınlık, D’de özlem duygusu vardır. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>karşılaştırma</b> yapılmamıştır?</p>`,
  c: [`Bu yılki yarışmaya geçen yılkinden daha çok öğrenci katıldı.`, `Kardeşi de en az onun kadar meraklı ve araştırmacıydı.`, `Yeni evimiz, eskisine göre okula çok daha yakın.`, `Sabah erkenden kalkıp bahçedeki çiçekleri suladı.`], a: "D",
  s: `<p>A’da bu yıl ile geçen yıl, B’de kardeş ile “o”, C’de yeni ev ile eski ev arasında karşılaştırma yapılmıştır (“-den daha”, “kadar”, “-e göre”).</p><p>D’de iki varlık ya da durum kıyaslanmamış, yalnızca bir eylem anlatılmıştır. Cevap <b>D</b>.</p>` },
{ q: `<p>“Eski mahalleme yıllar sonra gittiğimde, çocukken koca bir dünya sandığım sokağın aslında ne kadar dar olduğunu fark ettim.”</p><p>Bu cümlede aşağıdakilerden hangisi vurgulanmaktadır?</p>`,
  c: [`İnsanın bakış açısının zamanla ve yaşla değişebileceği`, `Mahallelerin zamanla genişleyip büyüdüğü`, `Çocukların sokakta oynamayı sevdiği`, `Eski mahallelerin yeniden düzenlenmesi gerektiği`], a: "A",
  s: `<p>Sokak değişmemiştir; değişen, kişinin ona bakışıdır. Çocukken “koca bir dünya” gibi görünen sokak, büyüyünce “dar” görünmüştür. Cümlede algının ve bakış açısının <b>yaşla birlikte değiştiği</b> vurgulanır.</p><p>B cümledeki duruma ters düşer; C ve D cümlede yer almaz. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>abartma</b> vardır?</p>`,
  c: [`Sınavdan önce yaklaşık iki saat tekrar yaptı.`, `Bu kadar çok ödevi bitirene kadar saçlarım ağaracak.`, `Yeni kütüphanede binlerce kitap bulunuyor.`, `Akşam yemeğinde annemin yaptığı mantıyı yedik.`], a: "B",
  s: `<p>B’de ödevleri bitirmenin çok uzun süreceği, “saçların ağarması” sözüyle olduğundan çok büyük gösterilmiştir → <b>abartma</b>.</p><p>A ve C’de gerçekçi bilgiler, D’de sıradan bir olay anlatılmıştır. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde yargı <b>kesinlik</b> anlamı taşır?</p>`,
  c: [`Akşam yemeğine teyzemler de gelebilir.`, `Galiba bu sabah otobüsü kaçırdı.`, `Su, deniz seviyesinde 100 °C’de kaynar.`, `Belki yarın sinemaya gideriz.`], a: "C",
  s: `<p>C’deki yargı bilimsel bir gerçektir ve hiçbir şüphe içermez → <b>kesinlik</b>.</p><p>A’daki “-ebilir”, B’deki “galiba”, D’deki “belki” ifadeleri yargıya <b>olasılık</b> anlamı katar. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>öneri</b> bildirilmektedir?</p>`,
  c: [`Kitabın ilk bölümleri biraz yavaş ilerliyor ama sonu çok etkileyici.`, `Ders çalışırken telefonunu başka bir odada bırakırsan daha verimli olursun.`, `Dün akşam yağan yağmur bütün sokakları göle çevirmiş.`, `Bu filmi üçüncü kez izliyorum ve hâlâ sıkılmadım.`], a: "B",
  s: `<p>B’de dikkat dağınıklığı sorununa bir çözüm yolu gösterilmektedir: Telefonu başka odada bırakmak → <b>öneri</b>.</p><p>A’da kitapla ilgili değerlendirme (eleştiri), C’de abartılı bir durum anlatımı, D’de kişisel bir beğeni vardır. Cevap <b>B</b>.</p>` },
{ q: `<p>(I) Türkiye’nin en uzun nehri olan Kızılırmak, 1355 km uzunluğundadır. (II) Nehir, Sivas’taki Kızıldağ’dan doğar ve Karadeniz’e dökülür. (III) Kıyısında yürüyüş yapmak, insana tarifsiz bir huzur verir. (IV) Nehrin taşıdığı alüvyonlar, Bafra Ovası’nın oluşmasını sağlamıştır. (V) Gün batımında nehrin kızıl rengi görülmeye değer bir manzara oluşturur.</p><p>Bu metinde numaralanmış cümlelerden hangileri <b>öznel</b> yargı içerir?</p>`,
  c: [`I ve II`, `II ve IV`, `III ve V`, `IV ve V`], a: "C",
  s: `<p>III’teki “tarifsiz bir huzur verir” ve V’teki “görülmeye değer bir manzara” ifadeleri kişisel duygu ve değerlendirme bildirir → <b>öznel</b>.</p><p>I (uzunluk), II (doğduğu ve döküldüğü yer) ve IV (Bafra Ovası’nın oluşumu) kanıtlanabilir bilgilerdir → nesnel. Cevap <b>C</b>.</p>` },
{ q: `<p>“Atasözleri, bir milletin yüzyıllar boyunca biriktirdiği deneyimlerin kısa ve öz bir biçimde dile getirildiği sözlerdir.”</p><p>Bu cümle için aşağıdakilerden hangisi söylenebilir?</p>`,
  c: [`Bir kavramın tanımı yapılmıştır.`, `Bir olayın nedeni açıklanmıştır.`, `Bir durum abartılarak anlatılmıştır.`, `Geleceğe yönelik bir tahminde bulunulmuştur.`], a: "A",
  s: `<p>Cümlede “atasözü” kavramının ne olduğu, temel özellikleriyle (deneyim birikimi, kısa ve öz olma) açıklanmıştır → <b>tanım</b>.</p><p>Cümlede neden-sonuç, abartma ya da tahmin yoktur. Cevap <b>A</b>.</p>` },
{ q: `<p>“Arkadaşının başarısını duyunca <u>gözleri parladı</u>, hemen onu tebrik etmek için telefona sarıldı.”</p><p>Bu cümlede altı çizili sözle anlatılmak istenen aşağıdakilerden hangisidir?</p>`,
  c: [`Çok üzülmek`, `Sevinç ve heyecan duymak`, `Kıskançlık hissetmek`, `Şaşkınlıktan ne yapacağını bilememek`], a: "B",
  s: `<p>“Gözleri parlamak” deyimi, bir şeye çok sevinmek, heyecanlanmak anlamındadır. Cümlenin devamında kişinin hemen arkadaşını tebrik etmek istemesi de bu <b>sevinci</b> destekler.</p><p>Cümlede üzüntü, kıskançlık ya da çaresizlik bildiren bir ifade yoktur. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>varsayım</b> vardır?</p>`,
  c: [`Diyelim ki bir gün uzaya gittin, Dünya’ya baktığında ne hissederdin?`, `Gökyüzündeki kara bulutlara bakılırsa birazdan yağmur başlayacak.`, `Bu kitabı bitirdikten sonra yeni bir seriye başlayacağım.`, `Geçen yaz ailecek Kapadokya’yı gezdik.`], a: "A",
  s: `<p><b>Varsayım</b>, gerçekleşmemiş bir durumu gerçekleşmiş gibi kabul ederek düşünmektir. A’da “Diyelim ki” ifadesiyle uzaya gitme durumu kabul edilmiş ve bunun sonucu sorgulanmıştır.</p><p>B’de gerekçeli tahmin, C’de gelecek planı, D’de geçmişte yaşanmış bir olay vardır. Cevap <b>A</b>.</p>` }
]
});
