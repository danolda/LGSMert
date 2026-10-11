LGS.add({
id: "tr-cumleturu",
summary: `
<h3>1. Cümle Türleri Haritası</h3>
<div class="fig"><svg viewBox="0 0 640 240" width="620" role="img" aria-label="Cümle türleri şeması">
<g font-size="12" text-anchor="middle">
<rect x="240" y="5" width="160" height="32" rx="8" fill="#fde68a" stroke="#a16207"/><text x="320" y="26" font-weight="bold">CÜMLE TÜRLERİ</text>
<g stroke="#94a3b8" fill="none"><path d="M320,37 V50 H85 V60"/><path d="M320,50 H245 V60"/><path d="M320,50 H405 V60"/><path d="M320,50 H560 V60"/></g>
<rect x="10" y="60" width="150" height="30" rx="8" fill="#dbeafe" stroke="#2563eb"/><text x="85" y="80" font-weight="bold">Yüklemin türüne göre</text>
<rect x="170" y="60" width="150" height="30" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="245" y="80" font-weight="bold">Yüklemin yerine göre</text>
<rect x="330" y="60" width="150" height="30" rx="8" fill="#fef3c7" stroke="#d97706"/><text x="405" y="80" font-weight="bold">Anlamına göre</text>
<rect x="490" y="60" width="140" height="30" rx="8" fill="#fce7f3" stroke="#db2777"/><text x="560" y="80" font-weight="bold">Yapısına göre</text>
<text x="85" y="112">İsim cümlesi</text><text x="85" y="130" font-size="11" fill="#475569">(Hava soğuk.)</text><text x="85" y="152">Fiil cümlesi</text><text x="85" y="170" font-size="11" fill="#475569">(Kar yağdı.)</text>
<text x="245" y="112">Kurallı (düz)</text><text x="245" y="130" font-size="11" fill="#475569">yüklem sonda</text><text x="245" y="152">Devrik</text><text x="245" y="170" font-size="11" fill="#475569">yüklem sonda değil</text>
<text x="405" y="112">Olumlu / Olumsuz</text><text x="405" y="132">Soru cümlesi</text><text x="405" y="152">Ünlem cümlesi</text>
<text x="560" y="112">Basit</text><text x="560" y="132">Birleşik</text><text x="560" y="152">Sıralı</text><text x="560" y="172">Bağlı</text>
<text x="320" y="215" fill="#475569">Bir cümle aynı anda birden çok türe ait olabilir: “Yarın gelirse sevinirim.” → fiil, kurallı, olumlu, birleşik</text>
</g></svg></div>

<h3>2. Yapısına Göre Cümleler</h3>
<table class="rt"><tr><th>Tür</th><th>Özellik</th><th>Örnek</th></tr>
<tr><td><b>Basit</b></td><td>Tek yüklem; fiilimsi, şart eki, “ki” yok</td><td>Kardeşim sabah erkenden okula gitti.</td></tr>
<tr><td><b>Birleşik</b></td><td>Bir temel cümle + yan cümle. Yan cümle: <b>fiilimsi</b> öbeği, <b>şart</b> eki (-se/-sa), <b>“ki”</b> bağlacı ya da <b>alıntı</b> (iç içe)</td><td>Eve <u>gelince</u> uyudu. · Çalışırsan kazanırsın. · Biliyorum ki başaracaksın. · “Yarın gel.” dedi.</td></tr>
<tr><td><b>Sıralı</b></td><td>Birden çok bağımsız cümle virgül veya noktalı virgülle sıralanır</td><td>Güneş doğdu, kuşlar öttü.</td></tr>
<tr><td><b>Bağlı</b></td><td>Bağımsız cümleler bağlaçla bağlanır (ama, fakat, çünkü, ve, ancak, yoksa…)</td><td>Çok çalıştı ama sınavı kaçırdı.</td></tr></table>

<h3>3. Anlam ve Yüklem Dikkat Noktaları</h3>
<ul>
<li><b>İsim cümlesi:</b> Yüklemi isim soylu sözcük + ek-fiil: “Bu kitap çok <u>güzel</u>.”, “Ali <u>evde</u>.” · <b>Fiil cümlesi:</b> Yüklemi çekimli fiil: “Ali eve <u>geldi</u>.”</li>
<li><b>Yapıca olumsuz, anlamca olumlu:</b> “Gelmez olur mu?” (gelir) · “Sevmemek elde değil.” (seviyor)</li>
<li><b>Yapıca olumlu, anlamca olumsuz:</b> “Ben ne yapacağımı nereden bileyim?” (bilmiyorum) · “Ne gelir ne gider.”</li>
<li>Soru eki (mı) her zaman soru anlamı katmaz: “Güzel mi güzel bir ev!” (pekiştirme)</li>
</ul>
`,
qs: [
{ q: `<p>Aşağıdaki cümlelerin hangisi <b>isim cümlesidir</b>?</p>`,
  c: [`Kardeşim bu sabah erkenden uyandı.`, `Öğretmen konuyu yeniden anlattı.`, `Yarın hep birlikte pikniğe gideceğiz.`, `Annemin yaptığı kek çok lezzetliydi.`], a: "D",
  s: `<p>D’nin yüklemi “lezzetliydi”dir; “lezzetli” isim soylu bir sözcüktür (sıfat) ve ek-fiil (-ydi) almıştır → <b>isim cümlesi</b>.</p><p>A’daki “uyandı”, C’deki “gideceğiz”, B’deki “anlattı” yüklemleri çekimli fiildir → fiil cümlesi. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisi <b>devrik</b> cümledir?</p>`,
  c: [`Bu yıl bahar erken geldi.`, `Akşam yemeğinden sonra çay içtik.`, `Kitabını masanın üzerinde unutmuş.`, `Gözlerimin önünden gitmiyor o güzel manzara.`], a: "D",
  s: `<p>D’de yüklem (“gitmiyor”) cümlenin sonunda değildir; ardından özne (“o güzel manzara”) gelmiştir → <b>devrik cümle</b>.</p><p>A, C ve B’de yüklemler (geldi, unutmuş, içtik) cümlenin sonundadır → kurallı (düz) cümle. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisi yapısına göre <b>basit</b> bir cümledir?</p>`,
  c: [`Eve gelince ödevlerini yaptı.`, `Hava güzel olursa yürüyüşe çıkarız.`, `Kitap okumayı çok severim.`, `Dedem her sabah bahçedeki ağaçları sular.`], a: "D",
  s: `<p>D’de tek bir yüklem (“sular”) vardır; fiilimsi, şart eki ya da “ki” bağlacı yoktur → <b>basit cümle</b>. (“bahçedeki”deki -ki, bağlaç değil sıfat yapan ektir.)</p><p>A’daki “gelince” (zarf-fiil), C’deki “okumayı” (isim-fiil) fiilimsidir; B’de “olursa” şart eki vardır. Bu cümleler <b>birleşiktir</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisi <b>sıralı</b> bir cümledir?</p>`,
  c: [`Sınava iyi hazırlanırsan başarılı olursun.`, `Yağmur yağdığı için maç ertelendi.`, `Çok yorgundu ama çalışmaya devam etti.`, `Kapıyı açtı, içeri girdi, ışığı yaktı.`], a: "D",
  s: `<p>D’de üç bağımsız yargı (açtı, girdi, yaktı) <b>virgülle</b> birbirine bağlanmıştır → <b>sıralı cümle</b>.</p><p>B’de “yağdığı için” fiilimsi öbeği, A’da “hazırlanırsan” şart eki vardır → birleşik. C’de iki cümle “ama” bağlacıyla bağlanmıştır → bağlı cümle. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisi <b>bağlı</b> bir cümledir?</p>`,
  c: [`Kitabı okudum, çok beğendim.`, `Erken kalkmak için alarm kurdu.`, `Seni gördüğüme çok sevindim.`, `Sınavı kazandı çünkü düzenli çalıştı.`], a: "D",
  s: `<p>D’de iki bağımsız cümle (“Sınavı kazandı.” ve “Düzenli çalıştı.”) <b>“çünkü”</b> bağlacıyla bağlanmıştır → <b>bağlı cümle</b>.</p><p>A’da cümleler virgülle sıralanmıştır (sıralı). B’de “kalkmak” ve C’de “gördüğüme” fiilimsileri vardır (birleşik). Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisi <b>yapıca olumsuz, anlamca olumlu</b>dur?</p>`,
  c: [`Onun yardımını unutmam mümkün değil.`, `Bu soruyu çözemedim.`, `Yarın okula gitmeyeceğim.`, `Bu yemeği hiç sevmem.`], a: "A",
  s: `<p>A’da yüklem “değil” sözcüğüyle olumsuz yapılıdır; ancak “unutmam mümkün değil” sözüyle “onun yardımını hep hatırlayacağım” anlamı verilmektedir → yapıca olumsuz, <b>anlamca olumlu</b>.</p><p>B, C ve D’de hem yapı hem anlam olumsuzdur. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisi <b>yapıca olumlu, anlamca olumsuz</b>dur?</p>`,
  c: [`Bu kitabı bitirmeden uyumam.`, `Ben bu kadar zor bir soruyu nasıl çözerim?`, `Yarın sabah erkenden yola çıkacağız.`, `Onun gelmesine çok sevindim.`], a: "B",
  s: `<p>B’de yüklem (“çözerim”) olumludur; ancak soru biçimindeki anlatımla “bu soruyu çözemem” anlamı verilmektedir → yapıca olumlu, <b>anlamca olumsuz</b>.</p><p>A’da “uyumam” olumsuz yapıdadır (anlam: önce kitabı bitiririm). C ve D hem yapıca hem anlamca olumludur. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde soru eki, cümleye <b>soru anlamı katmamıştır</b>?</p>`,
  c: [`Bu akşam bize gelecek misin?`, `Ödevini bitirdin mi?`, `Güzel mi güzel bir bahçeleri vardı.`, `Bu kitabı okudun mu?`], a: "C",
  s: `<p>C’deki “güzel mi güzel” kalıbında “mi” eki soru sormak için değil, anlamı <b>pekiştirmek</b> için kullanılmıştır (çok güzel); cümle bir soru cümlesi değildir.</p><p>A, B ve D’de “mi/mu” ekleri gerçek bir soru sorulmasını sağlamıştır. Cevap <b>C</b>.</p>` },
{ q: `<p>“Kütüphaneden aldığım kitabı iki günde bitirdim.”</p><p>Bu cümle için aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [`İsim cümlesi, kurallı, basit`, `Fiil cümlesi, kurallı, birleşik`, `Fiil cümlesi, devrik, basit`, `İsim cümlesi, devrik, birleşik`], a: "B",
  s: `<p>Yüklem “bitirdim” çekimli fiildir → <b>fiil cümlesi</b>; yüklem sondadır → <b>kurallı</b>; cümlede “aldığım” sıfat-fiili bulunduğundan cümle yapıca <b>birleşiktir</b>.</p><p>Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisi <b>şart (koşul)</b> ekiyle oluşturulmuş birleşik bir cümledir?</p>`,
  c: [`Yağmur yağınca yollar çamur oldu.`, `Erken yatarsan sabah dinç uyanırsın.`, `Bilgisayarı açıp ödevini yazmaya başladı.`, `Hem çalışıyor hem okuyor.`], a: "B",
  s: `<p>B’de “yatarsan” sözcüğündeki <b>-sa/-se</b> şart eki bir yan cümle oluşturmuştur: “Erken yatarsan” (koşul) + “sabah dinç uyanırsın” (temel cümle) → şartlı birleşik cümle.</p><p>A’daki “yağınca” ve C’deki “açıp” zarf-fiillerle kurulmuş birleşik cümlelerdir (şart eki yoktur). D’de “hem…hem” bağlacıyla kurulmuş bağlı cümle vardır. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisi <b>iç içe birleşik</b> cümledir?</p>`,
  c: [`Annem akşam yemeği için alışverişe çıktı.`, `Annem, “Akşam yemeğe misafir gelecek.” dedi.`, `Annem yemeği hazırladı, sofrayı kurdu.`, `Annem çok yorgundu ama yemeği hazırladı.`], a: "B",
  s: `<p>B’de tırnak içindeki cümle (“Akşam yemeğe misafir gelecek.”), “dedi” yükleminin nesnesi olarak temel cümlenin içine yerleştirilmiştir → <b>iç içe birleşik cümle</b>.</p><p>A basit, C sıralı, D bağlı cümledir. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisi <b>“ki” bağlacıyla</b> kurulmuş birleşik bir cümledir?</p>`,
  c: [`Duydum ki yarın tatile çıkıyormuşsunuz.`, `Masadaki kitabı bana uzatır mısın?`, `Seninki benimkinden daha güzel olmuş.`, `Akşamki konserde çok eğlendik.`], a: "A",
  s: `<p>A’da “ki” bağlacı iki yargıyı birbirine bağlamıştır: “Duydum” (temel cümle) – “yarın tatile çıkıyormuşsunuz” (yan cümle) → “ki”li birleşik cümle. Bağlaç olan “ki” ayrı yazılır.</p><p>B’deki “masadaki”, D’deki “akşamki” sözcüklerinde “-ki” sıfat yapan ek; C’deki “seninki, benimkinden” sözcüklerinde ise zamir yapan ektir. Bu cümleler basittir. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisi yapısı bakımından <b>diğerlerinden farklıdır</b>?</p>`,
  c: [`Okula giderken yolda Ayşe’ye rastladım.`, `Gülerek odaya girdi.`, `Bu sabah erkenden kalktım.`, `Düzenli çalışan öğrenciler başarılı olur.`], a: "C",
  s: `<p>A’da “giderken”, B’de “gülerek”, D’de “çalışan” fiilimsileri bulunduğundan bu cümleler <b>birleşiktir</b>.</p><p>C’de fiilimsi, şart eki, “ki” ya da alıntı yoktur; tek yargılı <b>basit</b> bir cümledir. Cevap <b>C</b>.</p>` },
{ q: `<p>(I) Ders zili çaldı. (II) Öğrenciler sınıflarına girdi, sıralarına oturdu. (III) Öğretmen içeri girer girmez sessizlik oldu. (IV) Ders başladı ama arka sıradakiler hâlâ fısıldaşıyordu.</p><p>Numaralanmış cümlelerin yapı bakımından türleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir?</p>`,
  c: [`Basit – Bağlı – Birleşik – Sıralı`, `Basit – Sıralı – Birleşik – Bağlı`, `Birleşik – Sıralı – Basit – Bağlı`, `Basit – Sıralı – Bağlı – Birleşik`], a: "B",
  s: `<p>I: Tek yargı, fiilimsi yok → <b>basit</b>. II: İki yargı virgülle sıralanmış → <b>sıralı</b>. III: “girer girmez” zarf-fiil öbeği var → <b>birleşik</b>. IV: İki yargı “ama” bağlacıyla bağlanmış → <b>bağlı</b>.</p><p>Cevap <b>B</b>.</p>` },
{ q: `<p>“Uzun yıllardır görmediğim arkadaşımla karşılaşınca çok şaşırdım.”</p><p>Bu cümleyle ilgili aşağıdakilerden hangisi <b>yanlıştır</b>?</p>`,
  c: [`Yüklemi çekimli bir fiildir.`, `Yüklemi cümlenin sonundadır.`, `Fiilimsi içerdiği için yapıca birleşiktir.`, `Yapıca olumsuz bir cümledir.`], a: "D",
  s: `<p>Yüklem “şaşırdım” çekimli fiildir (A ✓) ve cümlenin sonundadır (B ✓). “Görmediğim” ve “karşılaşınca” fiilimsileri bulunduğundan cümle birleşiktir (C ✓).</p><p>Yüklem “şaşırdım” olumludur; “görmediğim” sözcüğündeki olumsuzluk eki fiilimsiye aittir, cümleyi olumsuz yapmaz. Bu nedenle D yanlıştır. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinin yüklemi <b>isim soylu</b> bir sözcüktür?</p>`,
  c: [`Benim en büyük hayalim pilot olmak.`, `Bütün gün kitap okudu.`, `Yarın bize misafir gelecek.`, `Kuşlar ağaçlara kondu.`], a: "A",
  s: `<p>A’nın yüklemi “pilot olmak”tır; bu söz öbeği bir isim-fiil öbeğidir ve cümlede ek-fiil (gizli “-dır”) ile yüklem olmuştur → <b>isim cümlesi</b>.</p><p>B’deki “okudu”, C’deki “gelecek”, D’deki “kondu” çekimli fiildir. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisi hem <b>devrik</b> hem de <b>isim</b> cümlesidir?</p>`,
  c: [`Dün akşamki konser çok güzeldi.`, `Çok güzeldi dün akşamki konser.`, `Gidelim artık eve.`, `Eve erken döndük dün akşam.`], a: "B",
  s: `<p>B’de yüklem “güzeldi” (isim soylu sözcük + ek-fiil) cümlenin sonunda değildir → <b>devrik isim cümlesi</b>.</p><p>A kurallı isim cümlesi; C ve D devrik <b>fiil</b> cümleleridir (gidelim, döndük). Cevap <b>B</b>.</p>` },
{ q: `<p>“Hava kararınca çocuklar evlerine döndü, sokaklar sessizliğe büründü.”</p><p>Bu cümle yapısına göre aşağıdakilerden hangisidir?</p>`,
  c: [`Basit`, `Bağlı`, `Sıralı`, `İç içe birleşik`], a: "C",
  s: `<p>Cümlede iki bağımsız yargı (“çocuklar evlerine döndü” ve “sokaklar sessizliğe büründü”) <b>virgülle</b> sıralanmıştır → <b>sıralı cümle</b>. Sıralı cümleyi oluşturan cümlelerden birinin fiilimsi içermesi (“kararınca”) bu durumu değiştirmez.</p><p>Bağlaç kullanılmadığı için bağlı, alıntı olmadığı için iç içe birleşik değildir. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>ünlem</b> anlamı vardır?</p>`,
  c: [`Eyvah, otobüsü kaçırdık!`, `Bu kitabı kaç günde okudun?`, `Yarın hava güneşli olacak.`, `Ödevlerini bitirmeden dışarı çıkma.`], a: "A",
  s: `<p>A’da “eyvah” ünlemiyle <b>şaşkınlık ve üzüntü</b> gibi güçlü bir duygu dile getirilmiş, cümle ünlem işaretiyle bitmiştir → ünlem cümlesi.</p><p>B soru cümlesi, C haber (bildirme) cümlesi, D olumsuz emir cümlesidir. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisi yapısına göre <b>birleşik</b> cümle değildir?</p>`,
  c: [`Bu kitabı okuyunca çok etkilendim.`, `Dedem, “Ağaç yaşken eğilir.” derdi.`, `Hafta sonu arkadaşlarımla parka gittik.`, `Seninle konuşmak istiyorum.`], a: "C",
  s: `<p>A’da “okuyunca” (zarf-fiil), D’de “konuşmak” (isim-fiil) bulunur; B’de alıntı cümle vardır (iç içe birleşik). Bu cümleler birleşiktir.</p><p>C’de fiilimsi, şart eki, “ki” ya da alıntı yoktur; tek yargılı <b>basit</b> bir cümledir. Cevap <b>C</b>.</p>` },
{ q: `<p>“Yarın erken kalkacağım, çünkü sabah yola çıkacağız.”</p><p>Bu cümle yapı bakımından aşağıdakilerden hangisidir?</p>`,
  c: [`Basit`, `Sıralı`, `Bağlı`, `Şartlı birleşik`], a: "C",
  s: `<p>Cümlede iki bağımsız yargı (“Yarın erken kalkacağım.” ve “Sabah yola çıkacağız.”) <b>“çünkü”</b> bağlacıyla birbirine bağlanmıştır → <b>bağlı cümle</b>.</p><p>Bağlaçtan önce virgül bulunması cümleyi sıralı yapmaz; cümleleri bağlayan unsur bağlaçtır. Şart eki de yoktur. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisi <b>soru cümlesi</b> olduğu hâlde bilgi edinmek amacıyla sorulmamıştır?</p>`,
  c: [`Saat kaçta buluşalım?`, `Ankara’dan kaçta yola çıkacaksınız?`, `Bu güzel manzaraya bakıp da hayran kalmamak mümkün mü?`, `Kardeşin kaçıncı sınıfa gidiyor?`], a: "C",
  s: `<p>C’de soru biçimi kullanılmış, ancak bir bilgi istenmemiştir; cümle “Bu manzaraya bakan herkes hayran kalır.” yargısını vurgulamak amacıyla kurulmuştur (sözde soru).</p><p>A, B ve D’de karşıdaki kişiden gerçek bir bilgi istenmektedir. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisi <b>kurallı, fiil, basit ve olumsuz</b> bir cümledir?</p>`,
  c: [`Bu sabah kahvaltı yapmadım.`, `Kahvaltı yapmadan evden çıktı.`, `Hiç yorgun değilim.`, `Yapmadım bu sabah kahvaltı.`], a: "A",
  s: `<p>A: Yüklem “yapmadım” çekimli fiil (fiil cümlesi), sonda (kurallı), olumsuzluk eki almış (olumsuz); fiilimsi yok (basit) ✓.</p><p>B’de “yapmadan” zarf-fiili olduğu için cümle birleşiktir ve yüklem (“çıktı”) olumludur. C isim cümlesidir. D devrik cümledir. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde, birleşik cümleyi oluşturan yan cümle <b>fiilimsi</b> öbeğidir?</p>`,
  c: [`Akşam olunca sokak lambaları yandı.`, `Çalışırsan başarırsın.`, `Öyle yorgunum ki ayakta duramıyorum.`, `Annem, “Geç kalma!” diye seslendi.`], a: "A",
  s: `<p>A’da “akşam olunca” yan cümlesi “-unca” zarf-fiil ekiyle kurulmuş bir <b>fiilimsi öbeğidir</b>.</p><p>B’de yan cümle şart ekiyle (-sa), C’de “ki” bağlacıyla kurulmuştur; D’de ise alıntı cümle vardır (iç içe birleşik). Cevap <b>A</b>.</p>` },
{ q: `<p>“Bahçedeki çiçekleri suladı, kuru yaprakları topladı, sonra dinlenmek için çardağa oturdu.”</p><p>Bu cümleyle ilgili aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [`Virgüllerle birbirine bağlanmış yargılardan oluşan sıralı bir cümledir.`, `Tek yargı bildiren basit bir cümledir.`, `Bağlaçla kurulmuş bağlı bir cümledir.`, `Yüklemi isim soylu olan bir isim cümlesidir.`], a: "A",
  s: `<p>Cümlede üç ayrı yargı (suladı, topladı, oturdu) <b>virgüllerle</b> sıralanmıştır → <b>sıralı cümle</b>. Ortak öge (gizli özne “o”) her yargıda aynıdır.</p><p>Tek yargılı olmadığı için basit değildir; yargıları bağlayan bir bağlaç bulunmadığından bağlı değildir. Yüklemler çekimli fiildir (fiil cümlesi). Cevap <b>A</b>.</p>` },
{ q: `<p>(I) Bu çocuk çok akıllı.<br>(II) Odada kimse yoktu.<br>(III) Kardeşim yüzmeyi öğrendi.<br>(IV) En sevdiğim mevsim sonbahardır.</p><p>Numaralanmış cümlelerden hangisi yüklemin türü bakımından <b>diğerlerinden farklıdır</b>?</p>`,
  c: [`I.`, `II.`, `III.`, `IV.`], a: "C",
  s: `<p>I’in yüklemi “akıllı”, II’nin yüklemi “yoktu” (yok + idi), IV’ün yüklemi “sonbahardır” → isim soylu sözcükler ek-fiil almıştır → <b>isim cümlesi</b>.</p><p>III’ün yüklemi “öğrendi” çekimli fiildir → <b>fiil cümlesi</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>“Arkadaşım, sınavdan önce bana ‘Endişelenme, başaracaksın.’ demişti.”</p><p>Bu cümle yapısına göre aşağıdakilerden hangisidir?</p>`,
  c: [`Basit`, `Sıralı`, `Bağlı`, `İç içe birleşik`], a: "D",
  s: `<p>Cümlede tırnak içindeki “Endişelenme, başaracaksın.” sözleri, “demişti” yükleminin nesnesi olarak temel cümlenin içine alınmıştır → <b>iç içe birleşik cümle</b>.</p><p>Alıntı cümlenin kendi içinde iki yargı bulunması bu durumu değiştirmez. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisi <b>anlamca olumsuz</b>dur?</p>`,
  c: [`Bu filmi izlemeden geçme.`, `Ne arıyor ne soruyor.`, `Gelmemezlik edemedim.`, `Onu tanımayan yoktur.`], a: "B",
  s: `<p>B’de yüklemler (arıyor, soruyor) olumlu yapıdadır; ancak “ne…ne” bağlacı cümleye olumsuzluk anlamı katmıştır: Aramıyor ve sormuyor → <b>anlamca olumsuz</b>.</p><p>A’da “izlemeden geçme” = mutlaka izle (olumlu anlam); C’de “gelmemezlik edemedim” = geldim; D’de “tanımayan yoktur” = herkes tanır. Bu üç cümle anlamca olumludur. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisi yapısına göre <b>basit</b>, yüklemin yerine göre <b>devrik</b> bir cümledir?</p>`,
  c: [`Gelince haber ver bana.`, `Döndü sonunda yıllar sonra köyüne.`, `Sınavı kazandığını duydum.`, `Sonunda köyüne döndü.`], a: "B",
  s: `<p>B’de yüklem (“döndü”) başta yer almıştır → devrik; cümlede fiilimsi, şart eki, “ki” ya da alıntı yoktur → basit.</p><p>A devrik ama “gelince” zarf-fiili nedeniyle birleşiktir. C’de “kazandığını” fiilimsisi vardır (birleşik, kurallı). D basit ama kurallıdır. Cevap <b>B</b>.</p>` }
]
});
