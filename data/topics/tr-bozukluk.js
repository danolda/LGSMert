LGS.add({
id: "tr-bozukluk",
summary: `
<h3>1. Anlatım Bozukluğu Türleri</h3>
<div class="fig"><svg viewBox="0 0 620 170" width="600" role="img" aria-label="Anlatım bozukluğu türleri">
<g font-size="12" text-anchor="middle">
<rect x="5" y="10" width="300" height="150" rx="12" fill="#dbeafe" stroke="#2563eb"/><text x="155" y="35" font-size="14" font-weight="bold">Anlamsal bozukluklar</text>
<text x="155" y="60">Gereksiz sözcük kullanımı</text><text x="155" y="80">Sözcüğün yanlış anlamda kullanılması</text><text x="155" y="100">Çelişen sözcüklerin bir arada kullanılması</text><text x="155" y="120">Mantık (neden–sonuç) hatası</text><text x="155" y="140">Anlam belirsizliği · Sözcük sırası</text>
<rect x="315" y="10" width="300" height="150" rx="12" fill="#fee2e2" stroke="#dc2626"/><text x="465" y="35" font-size="14" font-weight="bold">Yapısal (dil bilgisel) bozukluklar</text>
<text x="465" y="60">Özne–yüklem uyumsuzluğu</text><text x="465" y="80">Öge eksikliği (nesne, tümleç, yüklem)</text><text x="465" y="100">Ek eksikliği / yanlışlığı</text><text x="465" y="120">Çatı uyumsuzluğu</text><text x="465" y="140">Olumsuzluk ve karşılaştırma yanlışları</text>
</g></svg></div>

<h3>2. Örneklerle Bozukluklar</h3>
<table class="rt"><tr><th>Bozukluk</th><th>Yanlış</th><th>Doğru</th></tr>
<tr><td>Gereksiz sözcük</td><td>Kitabı <b>geri</b> iade etti. · <b>Yaklaşık</b> on kişi <b>kadar</b> geldi.</td><td>Kitabı iade etti. · Yaklaşık on kişi geldi.</td></tr>
<tr><td>Yanlış anlamda sözcük</td><td>Bu ürünün <b>fiyatı pahalı</b>.</td><td>Bu ürünün fiyatı yüksek. / Bu ürün pahalı.</td></tr>
<tr><td>Çelişen sözcükler</td><td><b>Kesinlikle</b> gel<b>ebilir</b>.</td><td>Kesinlikle gelir. / Belki gelir.</td></tr>
<tr><td>Mantık hatası</td><td>Yağmur yağdığı için yollar kurudu.</td><td>Güneş açtığı için yollar kurudu.</td></tr>
<tr><td>Özne–yüklem uyumu</td><td>Sen ve kardeşin yarın bize <b>gelecek</b>.</td><td>… gele<b>ceksiniz</b>.</td></tr>
<tr><td>Cansız çoğul özne</td><td>Ağaçlar çiçek <b>açtılar</b>.</td><td>Ağaçlar çiçek <b>açtı</b>.</td></tr>
<tr><td>Nesne eksikliği</td><td>Ona güveniyor ve seviyorum.</td><td>Ona güveniyor ve <b>onu</b> seviyorum.</td></tr>
<tr><td>Yüklem eksikliği</td><td>Ben fen bilimlerini, kardeşim de matematiği seviyor.</td><td>Ben fen bilimlerini <b>seviyorum</b>, kardeşim de matematiği seviyor.</td></tr>
<tr><td>Ek eksikliği</td><td>Bilgisayar ve oyunlara düşkün.</td><td>Bilgisayar<b>a</b> ve oyunlara düşkün.</td></tr>
<tr><td>Çatı uyumsuzluğu</td><td>Bina boyandı ve sahibine teslim etti.</td><td>Bina boyandı ve sahibine teslim <b>edildi</b>.</td></tr>
<tr><td>Karşılaştırma</td><td>Ali’nin boyu kardeşinden uzun.</td><td>Ali’nin boyu kardeşi<b>ninkinden</b> uzun.</td></tr>
<tr><td>Sözcük sırası</td><td><b>Yeni</b> öğretmenler odası açıldı.</td><td>Öğretmenler için yeni bir oda açıldı.</td></tr></table>
<div class="note"><b>Çözüm ipucu:</b> Cümleyi yavaşça oku ve her ögeyi yükleme bağla (“Ona güveniyor… onu seviyor”). Bir sözcüğü çıkardığında anlam değişmiyorsa o sözcük <b>gereksizdir</b>.</div>
`,
qs: [
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>gereksiz sözcük</b> kullanımından kaynaklanan bir anlatım bozukluğu vardır?</p>`,
  c: [`Annem bana yeni bir kazak ördü.`, `Sınavdan önce bütün konuları yeniden gözden geçirdi.`, `Toplantıya katılanlar kararı oy birliğiyle aldı.`, `Kütüphaneden aldığı kitabı okuduktan sonra geri iade etti.`], a: "D",
  s: `<p>“İade etmek” zaten “geri vermek” demektir. D’deki “geri” sözcüğü gereksizdir: “…kitabı okuduktan sonra iade etti.”</p><p>B, C ve A’da gereksiz sözcük yoktur. Cevap <b>D</b>.</p>` },
{ q: `<p>“Konferansa yaklaşık iki yüz kişi civarında dinleyici katıldı.”</p><p>Bu cümledeki anlatım bozukluğu hangi sözcüğün çıkarılmasıyla giderilebilir?</p>`,
  c: [`konferansa`, `katıldı`, `dinleyici`, `civarında`], a: "D",
  s: `<p>“Yaklaşık” ve “civarında” sözcükleri aynı anlamı (kesin olmayan sayı) bildirir; ikisinin birlikte kullanılması gereksizdir. Seçeneklerde yer alan “civarında” sözcüğü çıkarılırsa bozukluk giderilir: “Konferansa yaklaşık iki yüz dinleyici katıldı.”</p><p>Diğer sözcükler cümlenin anlamı için gereklidir. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>anlamca çelişen</b> sözcüklerin bir arada kullanılmasından kaynaklanan bir bozukluk vardır?</p>`,
  c: [`Yarın sabah kesinlikle erken kalkmalıyım.`, `Belki hafta sonu sinemaya gideriz.`, `Toplantıya mutlaka katılabilirim.`, `Kardeşim herhâlde okuldan dönmüştür.`], a: "C",
  s: `<p>C’de “mutlaka” sözcüğü kesinlik, “-ebilir” eki ise olasılık bildirir; aynı cümlede kesinlik ve olasılık bir arada kullanılamaz. Doğrusu: “Toplantıya mutlaka katılırım.” ya da “Toplantıya katılabilirim.”</p><p>A’da kesinlik (kesinlikle … malıyım), B ve D’de olasılık (belki, herhâlde) tutarlı biçimde kullanılmıştır. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde bir sözcüğün <b>yanlış anlamda</b> kullanılmasından kaynaklanan bir anlatım bozukluğu vardır?</p>`,
  c: [`Yaz tatilinde dedemin köyüne gittik.`, `Sonbaharda yapraklar sararıp dökülür.`, `Öğretmenimiz bize ilginç bir deney gösterdi.`, `Bu telefonun fiyatı çok pahalı.`], a: "D",
  s: `<p>“Pahalı” sözcüğü bir ürünü nitelemek için kullanılır; “fiyat” ise yüksek ya da düşük olur. D’de “fiyatı pahalı” denmesi yanlıştır. Doğrusu: “Bu telefonun fiyatı çok yüksek.” ya da “Bu telefon çok pahalı.”</p><p>B, C ve A’da sözcükler doğru anlamda kullanılmıştır. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>özne–yüklem uyumsuzluğu</b> vardır?</p>`,
  c: [`Ben ve arkadaşım bu yıl aynı okula gideceğiz.`, `Annemle babam hafta sonu tatile çıktı.`, `Sen ve kardeşin yarın bize gelecek.`, `Öğrenciler sınavdan sonra bahçeye çıktı.`], a: "C",
  s: `<p>C’de özne “sen ve kardeşin”dir; bu özne ikinci çoğul kişi (siz) yerine geçer. Yüklemin de buna uygun olması gerekir: “Sen ve kardeşin yarın bize geleceksiniz.”</p><p>A’da “ben ve arkadaşım” → biz → “gideceğiz” ✓; B ve D’de üçüncü kişi özneler ile yüklemler uyumludur. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde, cansız varlıkları bildiren çoğul özne ile yüklem arasındaki uyumsuzluktan kaynaklanan bir anlatım bozukluğu vardır?</p>`,
  c: [`Sınıftaki sıralar yeniden boyandı.`, `Öğrenciler törende İstiklal Marşı’nı okudu.`, `Sokaktaki lambalar akşam yandı.`, `Bahçedeki ağaçlar bu yıl erken çiçek açtılar.`], a: "D",
  s: `<p>Cansız varlık ya da bitki bildiren çoğul öznelerle kullanılan yüklem <b>tekil</b> olur: “Bahçedeki ağaçlar bu yıl erken çiçek açtı.” D’deki “açtılar” yanlıştır.</p><p>C ve A’da cansız çoğul özneler tekil yüklemle kullanılmıştır ✓. B’de insan bildiren çoğul özne tekil yüklemle kullanılmıştır; bu kullanım da doğrudur. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>nesne eksikliğinden</b> kaynaklanan bir anlatım bozukluğu vardır?</p>`,
  c: [`Ödevlerini bitirdi, sonra parka gitti.`, `Kitabı aldı ve hemen okumaya başladı.`, `Bu konuya ilgi duyuyor ve araştırıyor.`, `Annesini aradı ve ona sarıldı.`], a: "C",
  s: `<p>C’deki iki yüklem farklı ögeler ister: “ilgi duyuyor” yüklemi dolaylı tümleç (bu konuya), “araştırıyor” yüklemi ise nesne (neyi?) ister. “Bu konuya” ögesi ikinci yükleme uymaz. Doğrusu: “Bu konuya ilgi duyuyor ve bu konuyu araştırıyor.”</p><p>B’de “kitabı” nesnesi iki yükleme de uygun; A ve D’de ögeler eksiksizdir. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>yüklem eksikliği</b> vardır?</p>`,
  c: [`Ayşe kütüphaneye, Mehmet spor salonuna gitti.`, `Annem yemek yaptı, babam da sofrayı kurdu.`, `Ali kitap okudu, Ayşe resim yaptı.`, `Ben matematiği, kardeşim de Türkçeyi seviyor.`], a: "D",
  s: `<p>D’de “ben matematiği” öbeği için “seviyor” yüklemi uygun değildir; “ben” öznesi “seviyorum” yüklemini ister. Doğrusu: “Ben matematiği seviyorum, kardeşim de Türkçeyi seviyor.”</p><p>B, C ve A’da her yargının yüklemi kendi öznesine uygundur; A’da “Ayşe” ve “Mehmet” özneleri ortak “gitti” yüklemine uyar. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>ek eksikliğinden</b> kaynaklanan bir anlatım bozukluğu vardır?</p>`,
  c: [`Kardeşim bilgisayar ve oyunlara çok düşkün.`, `Annem ve babam bize hediye aldı.`, `Okulumuzun öğretmenleri ve öğrencileri törene katıldı.`, `Kitapları ve defterleri çantasına yerleştirdi.`], a: "A",
  s: `<p>A’da “düşkün olmak” yönelme hâli (-e) ister: “oyunlara düşkün”. Aynı ek “bilgisayar” sözcüğüne de getirilmelidir; ortak kullanılamaz. Doğrusu: “Kardeşim bilgisayara ve oyunlara çok düşkün.”</p><p>B, C ve D’de ekler eksiksiz kullanılmıştır. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>sözcüğün yanlış yerde</b> kullanılmasından kaynaklanan bir anlam bozukluğu vardır?</p>`,
  c: [`Okulda sadece beş öğrenci kaldı.`, `Bu yıl okulumuza yeni öğretmenler geldi.`, `Sadece okulda beş öğrenci kaldı.`, `Bahçedeki yaşlı ağaç devrildi.`], a: "C",
  s: `<p>C’de “sadece” sözcüğü “okulda” sözcüğünü sınırlamaktadır; cümle “öğrencilerin kaldığı tek yer okuldu” gibi yanlış bir anlam taşımaktadır. Anlatılmak istenen, kalan öğrenci <b>sayısının</b> az olduğudur; bu yüzden “sadece” sözcüğü “beş”in önüne gelmelidir (A’daki gibi).</p><p>A, B ve D’de sözcükler doğru yerdedir. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>deyim yanlış anlamda</b> kullanılmıştır?</p>`,
  c: [`Sınavı kazandığını öğrenince ağzı kulaklarına vardı.`, `Yağmurda ıslanan kedi yavrusuna gözü gibi baktı.`, `Bu kadar emek verdiği projenin reddedilmesine çok içerledi.`, `Kötü haberi duyunca etekleri zil çaldı.`], a: "D",
  s: `<p>“Etekleri zil çalmak” deyimi “çok sevinmek” anlamındadır. Kötü bir haberi duyan birinin sevinmesi anlam bakımından uygun değildir; D’de deyim yanlış kullanılmıştır.</p><p>A’da “ağzı kulaklarına varmak” (çok sevinmek), C’de “içerlemek” (gücenmek), B’de “gözü gibi bakmak” (özenle korumak) bağlama uygun kullanılmıştır. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>neden–sonuç ilişkisi</b> bakımından mantık hatası vardır?</p>`,
  c: [`Çok çalıştığı için sınavda başarılı oldu.`, `Yağmur yağdığı için yollar kurudu.`, `Hava soğuk olduğu için kalın giyindi.`, `Yorulduğu için erkenden uyudu.`], a: "B",
  s: `<p>B’de yağmurun yağması, yolların kurumasının sebebi olarak gösterilmiştir; bu mantıklı değildir (yağmur yolları ıslatır). Cümle neden–sonuç ilişkisi bakımından bozuktur.</p><p>A, C ve D’de sebep ile sonuç arasında mantıklı bir ilişki vardır. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>karşılaştırma</b> yanlışlığından kaynaklanan bir anlatım bozukluğu vardır?</p>`,
  c: [`Ali’nin boyu kardeşinden daha uzun.`, `Bu yılki yarışmaya geçen yıla göre daha çok kişi katıldı.`, `Benim odam ablamın odasından daha küçük.`, `Kardeşim benden daha hızlı koşar.`], a: "A",
  s: `<p>A’da “Ali’nin boyu” ile “kardeşi” karşılaştırılmaktadır; oysa boy ile boy karşılaştırılmalıdır: “Ali’nin boyu kardeşininkinden daha uzun.” ya da “Ali kardeşinden daha uzun.”</p><p>B’de yarışmalar, C’de odalar, D’de kişiler doğru biçimde karşılaştırılmıştır. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>çatı uyumsuzluğundan</b> kaynaklanan bir anlatım bozukluğu vardır?</p>`,
  c: [`Okulun binası yeniden boyandı ve öğrencilere teslim etti.`, `Yollar temizlendi, kaldırımlar onarıldı.`, `Annem çorbayı pişirdi ve masaya getirdi.`, `Kitaplar raflara dizildi.`], a: "A",
  s: `<p>A’daki ilk yüklem “boyandı” edilgen, ikinci yüklem “teslim etti” etkendir. Ortak özne (okulun binası) “teslim etti” yükleminin öznesi olamaz; bina teslim etmez, teslim edilir. Doğrusu: “…boyandı ve öğrencilere teslim edildi.”</p><p>B ve D’de yüklemler edilgen, C’de yüklemler etkendir; çatılar uyumludur. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>olumsuzluk</b> uyumsuzluğundan kaynaklanan bir anlatım bozukluğu vardır?</p>`,
  c: [`Hiç kimse bu soruyu çözemedi.`, `Hiç kimse bu soruyu çözdü.`, `Herkes bu soruyu çözdü.`, `Bu soruyu kimse çözemedi.`], a: "B",
  s: `<p>“Hiç kimse” sözü olumsuz anlamlıdır ve olumsuz bir yüklemle kullanılır: “Hiç kimse bu soruyu çözemedi.” B’de olumlu yüklem (“çözdü”) kullanıldığı için cümle bozuktur.</p><p>A, C ve D’de özne ile yüklem anlamca uyumludur. Cevap <b>B</b>.</p>` },
{ q: `<p>“Yaşlı adamın elinden tuttu.”</p><p>Bu cümledeki anlatım bozukluğunun nedeni aşağıdakilerden hangisidir?</p>`,
  c: [`Gereksiz sözcük kullanılması`, `Noktalama eksikliğinden kaynaklanan anlam belirsizliği`, `Özne–yüklem uyumsuzluğu`, `Çatı uyumsuzluğu`], a: "B",
  s: `<p>Cümle iki farklı biçimde anlaşılabilir: “(Biri) yaşlı adamın elinden tuttu.” ya da “Yaşlı (kişi), adamın elinden tuttu.” Bu belirsizlik, “yaşlı” sözcüğünden sonra virgül konup konmamasıyla ilgilidir.</p><p>Anlam belirsizliği <b>noktalama eksikliğinden</b> kaynaklanmaktadır. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde anlatım bozukluğu <b>yoktur</b>?</p>`,
  c: [`Kısaca özetlemek gerekirse toplantı verimli geçti.`, `Hastalandığı için dolayı okula gelemedi.`, `Bu kitabı okuyunca yazarın diğer eserlerini de merak ettim.`, `Ona güveniyor ve çok seviyorum.`], a: "C",
  s: `<p>C’de anlatım bozukluğu yoktur.</p><p>A’da “özetlemek” zaten kısaca anlatmaktır; “kısaca” gereksizdir. B’de “için” ve “dolayı” aynı görevi üstlenir; biri gereksizdir. D’de “seviyorum” yüklemi nesne ister (onu); “ona” dolaylı tümleci bu yükleme uymaz. Cevap <b>C</b>.</p>` },
{ q: `<p>“Bu bölgede kışlar ılık, yazlar sıcak ve yağışlı geçer.”</p><p>Bu cümleyle ilgili aşağıdakilerden hangisi <b>söylenebilir</b>?</p>`,
  c: [`Gereksiz sözcük kullanılmıştır.`, `Anlatım bozukluğu yoktur.`, `Özne eksikliği vardır.`, `Çatı uyumsuzluğu vardır.`], a: "B",
  s: `<p>Cümlede “kışlar ılık” ve “yazlar sıcak ve yağışlı” öbekleri ortak yüklem olan “geçer” ile uyumludur; her iki özne de cansız çoğul özne olduğu için tekil yüklem doğrudur. Gereksiz sözcük, eksik öge ya da çatı uyumsuzluğu yoktur.</p><p>Cümlede <b>anlatım bozukluğu yoktur</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>(I) Geçen hafta okulumuzda bir kitap fuarı düzenlendi. (II) Fuara yaklaşık beş yüz kadar öğrenci katıldı. (III) Öğrenciler ilgi duydukları kitapları inceledi. (IV) Fuarın sonunda en çok kitap okuyan öğrencilere ödül verildi.</p><p>Numaralanmış cümlelerin hangisinde anlatım bozukluğu vardır?</p>`,
  c: [`I.`, `II.`, `III.`, `IV.`], a: "B",
  s: `<p>II’de “yaklaşık” ve “kadar” sözcükleri aynı anlamı (kesin olmayan miktar) bildirir; biri gereksizdir: “Fuara yaklaşık beş yüz öğrenci katıldı.”</p><p>I, III ve IV’te anlatım bozukluğu yoktur. Cevap <b>B</b>.</p>` },
{ q: `<p>“Öğretmenimiz bu konuyu daha önce anlatmış ve tekrar etmedi.”</p><p>Bu cümle aşağıdakilerden hangisi gibi düzeltilirse anlatım bozukluğu giderilir?</p>`,
  c: [`Öğretmenimiz bu konuyu daha önce anlatmıştı, bu yüzden tekrar etmedi.`, `Öğretmenimiz bu konuyu daha önce anlatmış ve tekrar edecek.`, `Öğretmenimiz bu konuyu anlatmış ve daha önce tekrar etmedi.`, `Öğretmenimiz bu konuyu daha önce anlatmamış ve tekrar etti.`], a: "A",
  s: `<p>Verilen cümlede “anlatmış” (öğrenilen geçmiş) ile “etmedi” (görülen geçmiş) yüklemleri “ve” bağlacıyla bağlanmış, ancak iki yargı arasındaki ilişki (neden–sonuç) kurulmamıştır; zaman uyumu da bozuktur.</p><p>A’da birinci yargı ikincinin nedeni olarak verilmiş, kipler de uyumlu hâle getirilmiştir. Diğer seçeneklerde anlam değişmiş ya da bozukluk sürmüştür. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>gereksiz sözcük</b> kullanılmamıştır?</p>`,
  c: [`Köylüler karşılıklı yardımlaşarak yeni bir okul yaptı.`, `En son finale kalan takım şampiyon oldu.`, `Depremzedelere maddi para yardımı yapıldı.`, `Yarışmada birinci olan öğrenciye ödül verildi.`], a: "D",
  s: `<p>D’de gereksiz sözcük yoktur.</p><p>A’da “yardımlaşmak” zaten karşılıklıdır; “karşılıklı” gereksizdir. B’de “final” zaten son aşamadır; “en son” gereksizdir. C’de “maddi” ve “para” sözcüklerinden biri gereksizdir (maddi yardım = para yardımı). Cevap <b>D</b>.</p>` },
{ q: `<p>“Öğrenciler hem projelerini sundu hem de jüri üyelerinin sorularını.”</p><p>Bu cümledeki anlatım bozukluğunun nedeni aşağıdakilerden hangisidir?</p>`,
  c: [`Yüklem eksikliği`, `Özne eksikliği`, `Gereksiz sözcük kullanımı`, `Sözcüğün yanlış anlamda kullanılması`], a: "A",
  s: `<p>Cümlenin ikinci bölümünde “jüri üyelerinin sorularını” nesnesi için bir yüklem yoktur; “sundu” yüklemi bu nesneye uymaz (sorular sunulmaz, cevaplanır). Doğrusu: “Öğrenciler hem projelerini sundu hem de jüri üyelerinin sorularını cevapladı.”</p><p>Bozukluk <b>yüklem eksikliğinden</b> kaynaklanmaktadır. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>anlam belirsizliği</b> vardır?</p>`,
  c: [`Annemin hazırladığı kurabiyeleri komşularımıza götürdük.`, `Kardeşimin arkadaşının resmini çizdim.`, `Bahçemizdeki elma ağacı bu yıl çok meyve verdi.`, `Babam akşam işten erken geldi.`], a: "B",
  s: `<p>B’deki “kardeşimin arkadaşının resmi” iki biçimde anlaşılabilir: Kardeşimin arkadaşını çizdiğim bir resim mi, yoksa kardeşimin arkadaşına ait olan bir resmi mi çizdim? Cümle <b>belirsizdir</b>.</p><p>A, C ve D’de anlam açıktır. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde anlatım bozukluğu <b>vardır</b>?</p>`,
  c: [`Kitap okumayı ve müzik dinlemeyi çok severim.`, `Bu filmi daha önce izlemiş ve çok beğenmiştim.`, `Sınava çalışmadığından ve başarısız oldu.`, `Yarın erken kalkıp yola çıkacağız.`], a: "C",
  s: `<p>C’de “-dığından” eki zaten neden–sonuç ilişkisi kurar; ayrıca “ve” bağlacının kullanılması gereksizdir ve cümlenin yapısını bozar. Doğrusu: “Sınava çalışmadığından başarısız oldu.”</p><p>A, B ve D’de anlatım bozukluğu yoktur. Cevap <b>C</b>.</p>` },
{ q: `<p>“Yeni öğretmenler odası, okulun ikinci katında hizmete açıldı.”</p><p>Bu cümledeki anlatım bozukluğu, öğretmenler için yeni bir oda açıldığı anlatılmak istendiğine göre nasıl giderilir?</p>`,
  c: [`“Yeni” sözcüğü çıkarılarak`, `“Yeni” sözcüğü “öğretmenler” ile “odası” arasına alınarak: “Öğretmenlerin yeni odası…”`, `“İkinci” sözcüğü çıkarılarak`, `“Hizmete” sözcüğü çıkarılarak`], a: "B",
  s: `<p>Cümlede “yeni” sözcüğü “öğretmenler” sözcüğünü nitelediği için “yeni gelen öğretmenlerin odası” gibi yanlış bir anlam ortaya çıkmaktadır. “Yeni” sözcüğü “oda”yı nitelemelidir: “Öğretmenlerin yeni odası okulun ikinci katında hizmete açıldı.”</p><p>Sözcüğü çıkarmak anlamı değiştirir; C ve D bozuklukla ilgili değildir. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde, aynı anlama gelen iki sözcüğün birlikte kullanılmasından kaynaklanan bir bozukluk vardır?</p>`,
  c: [`Konunun özünü kısaca anlattı.`, `Bu sorun hakkında görüşlerini açıkladı.`, `Sınav sonuçları maalesef ne yazık ki beklentilerin altında kaldı.`, `Toplantıda önemli kararlar alındı.`], a: "C",
  s: `<p>C’de “maalesef” ve “ne yazık ki” sözleri aynı anlamı (üzüntü, esef) bildirir; ikisinin birlikte kullanılması gereksizdir. Birinin çıkarılması gerekir.</p><p>A, B ve D’de gereksiz sözcük yoktur. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde anlatım bozukluğu <b>yoktur</b>?</p>`,
  c: [`Ben bu kitabı okudum, sen de okumalısın.`, `Bu kitap hem eğlenceli hem de çok sevdim.`, `Kitaba ilgi gösterdi ve okudu.`, `Kardeşim ve ben aynı kitabı okuyor.`], a: "A",
  s: `<p>A’da iki ayrı yargının özneleri (ben, sen) ve yüklemleri (okudum, okumalısın) uyumludur; bozukluk yoktur.</p><p>B’de “hem eğlenceli” öbeği “sevdim” yüklemine bağlanamaz: “Bu kitap hem eğlenceli hem de onu çok sevdim” yerine “Bu kitap çok eğlenceli, onu çok sevdim.” olmalıdır. C’de “okudu” yüklemi nesne ister (onu okudu). D’de “kardeşim ve ben” özne grubu “biz” anlamındadır; yüklem “okuyoruz” olmalıdır. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>ek-fiil eksikliğinden</b> kaynaklanan bir anlatım bozukluğu vardır?</p>`,
  c: [`Ali çok yorgun ve erkenden uyumak istedi.`, `Hava çok güzeldi ve pikniğe gittik.`, `Bu kitap çok ilginç, mutlaka okumalısın.`, `Kardeşim hastaydı, bu yüzden okula gitmedi.`], a: "A",
  s: `<p>A’da “ve” bağlacıyla bağlanan iki yargıdan birincisi (“Ali çok yorgun”) şimdiki zamanı, ikincisi (“uyumak istedi”) geçmiş zamanı bildirmektedir. Birinci yargının yüklemi ek-fiil almalıdır: “Ali çok yorgun<b>du</b> ve erkenden uyumak istedi.”</p><p>B ve D’de ek-fiil (-dı) kullanılmış, C’de ise iki yargı zaman bakımından birbiriyle uyumludur. Cevap <b>A</b>.</p>` }
]
});
