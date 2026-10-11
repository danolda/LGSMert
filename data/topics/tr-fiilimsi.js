LGS.add({
id: "tr-fiilimsi",
summary: `
<h3>1. Fiilimsi Nedir?</h3>
<p>Fiil kök ya da gövdelerine getirilen eklerle oluşan; cümlede <b>isim, sıfat veya zarf</b> görevinde kullanılan, kip ve kişi eki almayan sözcüklerdir. Fiilimsiler yargı bildirmez; cümlede yargı çekimli fiildedir.</p>
<div class="fig"><svg viewBox="0 0 620 200" width="600" role="img" aria-label="Fiilimsi türleri">
<g font-size="12" text-anchor="middle">
<rect x="10" y="10" width="190" height="180" rx="10" fill="#dbeafe" stroke="#2563eb"/><text x="105" y="35" font-size="14" font-weight="bold">İsim-fiil (ad-eylem)</text>
<text x="105" y="60" font-weight="bold" fill="#1d4ed8">-ma, -ış, -mak</text><text x="105" y="85">Eylemin adıdır.</text><text x="105" y="115" font-style="italic">Kitap <tspan font-weight="bold">okumayı</tspan> severim.</text><text x="105" y="140" font-style="italic">Onun <tspan font-weight="bold">gülüşü</tspan> çok güzel.</text><text x="105" y="165" font-style="italic"><tspan font-weight="bold">Yüzmek</tspan> sağlıklıdır.</text>
<rect x="215" y="10" width="190" height="180" rx="10" fill="#dcfce7" stroke="#16a34a"/><text x="310" y="35" font-size="14" font-weight="bold">Sıfat-fiil (ortaç)</text>
<text x="310" y="60" font-weight="bold" fill="#15803d">-an, -ası, -mez, -ar, -dık, -ecek, -mış</text><text x="310" y="85">İsmi niteler.</text><text x="310" y="115" font-style="italic"><tspan font-weight="bold">Koşan</tspan> çocuk düştü.</text><text x="310" y="140" font-style="italic"><tspan font-weight="bold">Okuduğum</tspan> kitap bitti.</text><text x="310" y="165" font-style="italic"><tspan font-weight="bold">Gelecek</tspan> hafta</text>
<rect x="420" y="10" width="190" height="180" rx="10" fill="#fef3c7" stroke="#d97706"/><text x="515" y="35" font-size="14" font-weight="bold">Zarf-fiil (ulaç)</text>
<text x="515" y="58" font-weight="bold" fill="#b45309">-ıp, -arak, -madan, -ınca,</text><text x="515" y="74" font-weight="bold" fill="#b45309">-dıkça, -alı, -r…-maz, -ken,</text><text x="515" y="90" font-weight="bold" fill="#b45309">-casına, -e…-e, -dığında</text><text x="515" y="115" font-style="italic">Eve <tspan font-weight="bold">gelince</tspan> uyudu.</text><text x="515" y="140" font-style="italic"><tspan font-weight="bold">Koşarak</tspan> geldi.</text><text x="515" y="165" font-style="italic">Fiili zaman, durum yönünden niteler.</text>
</g></svg></div>

<h3>2. Dikkat Edilmesi Gerekenler</h3>
<ul>
<li><b>Kalıcı isimler fiilimsi değildir:</b> dondurma, dolma, kavurma, çakmak, yemek (aş), ekmek, asma (bitki), dövme… → “Dondurma yedik.” (fiilimsi yok)</li>
<li><b>-ma/-me olumsuzluk eki</b> ile isim-fiil eki karışmamalı: “Bu kitabı <u>okuma</u>!” (olumsuz emir → çekimli fiil) · “Kitap <u>okuma</u> saati” (isim-fiil).</li>
<li><b>Adlaşmış sıfat-fiil:</b> Nitelediği isim düşerse sıfat-fiil yine fiilimsidir: “<u>Gelenler</u> oturdu.” (gelen kişiler)</li>
<li><b>-mış ve -ecek:</b> İsim nitelerse sıfat-fiil (“<u>pişmiş</u> yemek”, “<u>gelecek</u> yıl”), yargı bildirirse çekimli fiil (“Yemek <u>pişmiş</u>.”, “Yarın <u>gelecek</u>.”).</li>
<li><b>-ken:</b> Fiile gelirse zarf-fiil (“<u>okurken</u>”); isme gelirse fiilimsi değildir (“<u>çocukken</u>”).</li>
<li>Fiilimsiler olumsuz olabilir: <u>okumamak</u>, <u>bilmeyen</u>, <u>görmeden</u>.</li>
</ul>
`,
qs: [
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>isim-fiil</b> vardır?</p>`,
  c: [`Koşan çocuklar parka doğru gitti.`, `Kırılan vazoyu sessizce topladı.`, `Okula gelince öğretmenini selamladı.`, `Kardeşim her akşam resim yapmayı sever.`], a: "D",
  s: `<p>D’de “yapmayı” sözcüğü “yap-” fiiline <b>-ma</b> isim-fiil ekinin getirilmesiyle oluşmuştur ve eylemin adıdır → <b>isim-fiil</b>.</p><p>A’daki “koşan” ve B’deki “kırılan” ismi niteleyen sıfat-fiillerdir; C’deki “gelince” zarf-fiildir. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>sıfat-fiil</b> vardır?</p>`,
  c: [`Ödevlerini bitirip dışarı çıktı.`, `Yürümek ona çok iyi geliyor.`, `Sabaha kadar uyumadan çalıştı.`, `Okuduğum kitabı arkadaşıma verdim.`], a: "D",
  s: `<p>D’deki “okuduğum” sözcüğü “oku-” fiiline <b>-duk</b> ekinin getirilmesiyle oluşmuş ve “kitap” ismini nitelemiştir → <b>sıfat-fiil</b>.</p><p>A’daki “bitirip” ve C’deki “uyumadan” zarf-fiil; B’deki “yürümek” isim-fiildir. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>zarf-fiil</b> vardır?</p>`,
  c: [`Yazılan mektuplar zamanında ulaştı.`, `Bu kış yüzme kursuna gideceğim.`, `Kapıyı açınca içeri serin bir rüzgâr doldu.`, `Gülüşü bütün sınıfı neşelendirdi.`], a: "C",
  s: `<p>C’deki “açınca” sözcüğü “aç-” fiiline <b>-ınca</b> ekinin getirilmesiyle oluşmuş ve “doldu” fiilini zaman yönünden nitelemiştir → <b>zarf-fiil</b>.</p><p>A’daki “yazılan” sıfat-fiil; B’deki “yüzme” ve D’deki “gülüşü” isim-fiildir. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde altı çizili sözcük <b>fiilimsi değildir</b>?</p>`,
  c: [`Bu konuda sakın <u>endişelenme</u>.`, `Ders <u>çalışma</u> alışkanlığı kazanmalısın.`, `<u>Yüzme</u> havuzu bugün kapalı.`, `Kitap <u>okuma</u> saatimiz başladı.`], a: "A",
  s: `<p>A’daki “endişelenme” sözcüğünde “-me” <b>olumsuzluk ekidir</b>; sözcük emir kipinde çekimlenmiş bir fiildir (sen endişelenme) → fiilimsi değildir.</p><p>B, C ve D’deki “çalışma, yüzme, okuma” sözcüklerinde “-ma/-me” isim-fiil ekidir; sözcükler eylemin adını bildirir. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>fiilimsi yoktur</b>?</p>`,
  c: [`Akşam yemeğinde annemin yaptığı dolmayı yedik.`, `Bahçede dondurma yiyen çocuklar vardı.`, `Akşam yemeğinde kavurma ve ekmek kadayıfı vardı.`, `Okula giderken yolda arkadaşıma rastladım.`], a: "C",
  s: `<p>C’deki “yemek”, “kavurma” ve “ekmek” sözcükleri fiilden türemiş olsa da artık bir yiyeceğin adı olmuş <b>kalıcı isimlerdir</b>; fiilimsi değildir. “Vardı” ise ek-fiil almış bir isimdir. Cümlede fiilimsi yoktur.</p><p>A’daki “yaptığı” (sıfat-fiil), B’deki “yiyen” (sıfat-fiil), D’deki “giderken” (zarf-fiil) fiilimsidir. (A ve B’deki “dolma”, “dondurma” kalıcı isimdir.) Cevap <b>C</b>.</p>` },
{ q: `<p>“<u>Çalışan</u> kazanır, <u>bekleyen</u> kaybeder.”</p><p>Bu cümledeki altı çizili sözcükler için aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [`Nitelediği isim düşmüş, adlaşmış sıfat-fiillerdir.`, `İsim-fiildir; eylemin adını bildirir.`, `Zarf-fiildir; fiili zaman yönünden niteler.`, `Çekimli fiildir; cümleye yargı katar.`], a: "A",
  s: `<p>“Çalışan” ve “bekleyen” sözcükleri “-an/-en” sıfat-fiil ekini almıştır. Aslında “çalışan <i>kişi</i>”, “bekleyen <i>kişi</i>” anlamındadır; nitelenen isim düştüğü için sıfat-fiiller <b>adlaşmıştır</b> ve cümlede özne görevindedir. Adlaşmış sıfat-fiiller yine fiilimsidir.</p><p>Cümledeki yargıyı “kazanır” ve “kaybeder” çekimli fiilleri bildirir. Cevap <b>A</b>.</p>` },
{ q: `<p>“Sabah erkenden kalkıp kahvaltı yapmadan evden çıkan Ali, otobüse yetişmek için koştu.”</p><p>Bu cümlede kaç tane fiilimsi vardır?</p>`,
  c: [`2`, `3`, `4`, `5`], a: "C",
  s: `<p>Fiilimsiler: “kalkıp” (zarf-fiil, -ıp), “yapmadan” (zarf-fiil, -madan), “çıkan” (sıfat-fiil, -an), “yetişmek” (isim-fiil, -mek). Toplam <b>4</b> fiilimsi vardır.</p><p>“Koştu” çekimli fiildir; “kahvaltı” ve “erkenden” fiilimsi değildir. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde altı çizili sözcük <b>zarf-fiil</b> değildir?</p>`,
  c: [`Kitap <u>okurken</u> zamanın nasıl geçtiğini anlamadım.`, `Yağmur <u>yağdıkça</u> toprak yumuşuyordu.`, `Ödevini <u>bitirince</u> bana haber ver.`, `<u>Çocukken</u> bu sokakta saklambaç oynardık.`], a: "D",
  s: `<p>D’deki “çocukken” sözcüğünde “-ken” eki bir <b>isme</b> (“çocuk”) gelmiştir. Fiilimsi ekleri yalnızca fiillere gelir; bu nedenle “çocukken” zarf-fiil değildir.</p><p>A’daki “okurken” (oku- + -r + -ken), C’deki “bitirince” (-ince), B’deki “yağdıkça” (-dıkça) fiillere gelmiş zarf-fiil ekleri taşır. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde altı çizili sözcük <b>sıfat-fiildir</b>?</p>`,
  c: [`Annemin fırına koyduğu tavuk <u>pişmiş</u>.`, `Babam bu sabah erkenden işe <u>gitmiş</u>.`, `Arkadaşım bu filmi daha önce <u>izlemiş</u>.`, `<u>Pişmiş</u> tavuğun kokusu bütün evi sardı.`], a: "D",
  s: `<p>D’deki “pişmiş” sözcüğü “tavuk” ismini nitelemektedir → <b>sıfat-fiil</b> (-mış).</p><p>A, C ve B’de “-mış/-miş” eki yargı bildiren <b>öğrenilen geçmiş zaman</b> ekidir; altı çizili sözcükler çekimli fiildir. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>-ar/-er</b> ekiyle yapılmış bir sıfat-fiil vardır?</p>`,
  c: [`Sabahları çalar saatin sesiyle uyanırım.`, `Kardeşim her hafta sonu yüzer.`, `Bu çiçekler baharda açar.`, `Babam akşamları gazete okur.`], a: "A",
  s: `<p>A’daki “çalar” sözcüğü “çal-” fiiline “-ar” ekinin getirilmesiyle oluşmuş ve “saat” ismini nitelemiştir → <b>sıfat-fiil</b>.</p><p>B, C ve D’deki “yüzer, açar, okur” sözcüklerinde “-er/-ar/-ur” <b>geniş zaman</b> ekidir; sözcükler çekimli fiildir. Cevap <b>A</b>.</p>` },
{ q: `<p>(I) Köye vardığımızda hava kararmıştı. (II) Dedem bizi kapıda gülümseyerek karşıladı. (III) Ninemin pişirdiği gözlemelerin kokusu her yeri sarmıştı. (IV) O akşam sofrada hep birlikte yemek yedik.</p><p>Numaralanmış cümlelerin hangisinde <b>fiilimsi yoktur</b>?</p>`,
  c: [`I.`, `II.`, `III.`, `IV.`], a: "D",
  s: `<p>I’deki “vardığımızda” (-dığında) zarf-fiil, II’deki “gülümseyerek” (-erek) zarf-fiil, III’teki “pişirdiği” (-dik) sıfat-fiildir.</p><p>IV’teki “yemek” sözcüğü burada “aş, yiyecek” anlamında <b>kalıcı isimdir</b>; “yedik” ise çekimli fiildir. Bu cümlede fiilimsi yoktur. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde altı çizili sözcük, tür bakımından <b>diğerlerinden farklıdır</b>?</p>`,
  c: [`<u>Gelecek</u> hafta sınavımız var.`, `<u>Okunmamış</u> kitapları rafa dizdi.`, `<u>Kırık</u> camı hemen değiştirdiler.`, `<u>Bilinmeyen</u> bir yerde mahsur kaldılar.`], a: "C",
  s: `<p>A’daki “gelecek” (gel- + -ecek), B’deki “okunmamış” (oku- + -n + -ma + -mış) ve D’deki “bilinmeyen” (bil- + -in + -me + -yen) sözcükleri sıfat-fiil ekleriyle oluşmuş <b>sıfat-fiillerdir</b>.</p><p>C’deki “kırık” sözcüğü “kır-” fiilinden “-ık” yapım ekiyle türemiş <b>kalıcı bir sıfattır</b>; fiilimsi değildir. Cevap <b>C</b>.</p>` },
{ q: `<p>“Arkadaşımın <u>söylediklerini</u> dikkatle dinledim.”</p><p>Bu cümlede altı çizili sözcükle ilgili aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [`İsim-fiildir.`, `Çekimli fiildir.`, `Zarf-fiildir.`, `Adlaşmış sıfat-fiildir.`], a: "D",
  s: `<p>“Söylediklerini” sözcüğü “söyle-” fiiline <b>-dik</b> sıfat-fiil ekinin getirilmesiyle oluşmuştur. Aslında “söylediği <i>sözleri</i>” anlamındadır; nitelenen isim düştüğü için sıfat-fiil <b>adlaşmış</b> ve çoğul, iyelik, hâl eklerini almıştır.</p><p>-dik eki isim-fiil ya da zarf-fiil eki değildir; sözcük yargı bildirmediği için çekimli fiil de değildir. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde altı çizili sözcük <b>isim-fiil</b> değildir?</p>`,
  c: [`Onun <u>bakışında</u> bir hüzün vardı.`, `Kardeşim <u>yüzmeyi</u> yazın öğrendi.`, `Dedem her sabah <u>yürümeye</u> çıkar.`, `Bahçedeki <u>asma</u> bu yıl çok üzüm verdi.`], a: "D",
  s: `<p>D’deki “asma” sözcüğü bir bitkinin (üzüm bitkisi) adıdır; fiilden türemiş olsa da <b>kalıcı isim</b> olmuştur ve fiilimsi değildir.</p><p>A’daki “bakışında” (bak- + -ış), B’deki “yüzmeyi” (yüz- + -me), C’deki “yürümeye” (yürü- + -me) eylemin adını bildiren <b>isim-fiillerdir</b>. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde zarf-fiil, eylemin <b>nasıl</b> (hangi durumda) yapıldığını bildirmektedir?</p>`,
  c: [`Eve gelince ödevlerini yaptı.`, `Okula gideli iki saat oldu.`, `Gülerek odaya girdi.`, `Yağmur durunca dışarı çıktık.`], a: "C",
  s: `<p>C’deki “gülerek” zarf-fiili, “girdi” eyleminin <b>nasıl</b> yapıldığını (gülerek) bildirir → durum zarf-fiili.</p><p>A’daki “gelince”, D’deki “durunca” eylemin <b>ne zaman</b> yapıldığını; B’deki “gideli” ise eylemin üzerinden geçen süreyi bildirir → zaman zarf-fiilleri. Cevap <b>C</b>.</p>` },
{ q: `<p>“Kitabı <u>okudukça</u> yazarın anlattığı dünyaya daha çok bağlandım.”</p><p>Bu cümlede altı çizili zarf-fiil, yüklemi hangi yönden nitelemektedir?</p>`,
  c: [`Eylemin yapılış biçimi (durum)`, `Eylemin sürekliliği ve tekrarı (zaman)`, `Eylemin yapıldığı yer`, `Eylemin yapılma amacı`], a: "B",
  s: `<p>“-dıkça” eki, bir eylemin tekrarlandığı ya da sürdüğü her zaman diliminde diğer eylemin de gerçekleştiğini bildirir: Okumak devam ettikçe, bağlanma da artmıştır. Bu, yüklemi <b>zaman</b> yönünden niteleyen bir anlamdır.</p><p>“Okudukça” bağlanmanın nasıl, nerede ya da niçin yapıldığını bildirmez. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde iki eylemi birbirine bağlayan <b>-ıp/-ip</b> zarf-fiili vardır?</p>`,
  c: [`Çantasını alıp hızla dışarı çıktı.`, `Bu ip çok sağlam görünüyor.`, `Kalbi yerinden çıkacakmış gibi çarpıyordu.`, `Şehrin en tepesindeki eve taşındılar.`], a: "A",
  s: `<p>A’daki “alıp” sözcüğü “al-” fiiline <b>-ıp</b> zarf-fiil ekinin getirilmesiyle oluşmuş ve “çıktı” eylemine bağlanmıştır: “aldı ve çıktı” anlamı vardır.</p><p>B’deki “ip” bir isimdir; C ve D’de -ıp eki yoktur. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>olumsuz</b> bir fiilimsi kullanılmıştır?</p>`,
  c: [`Ders çalışmamak seni başarıdan uzaklaştırır.`, `Kitap okumak insanı geliştirir.`, `Erken yatan erken kalkar.`, `Ödevini bitirince bana göster.`], a: "A",
  s: `<p>A’daki “çalışmamak” sözcüğü “çalış-” fiiline önce <b>-ma</b> olumsuzluk eki, sonra <b>-mak</b> isim-fiil eki getirilerek oluşmuştur → olumsuz isim-fiil.</p><p>B’deki “okumak”, C’deki “yatan”, D’deki “bitirince” olumlu fiilimsilerdir. Cevap <b>A</b>.</p>` },
{ q: `<p>“Bahçede <u>oynayan</u> çocukların sesleri, yağmur <u>başlayınca</u> kesildi; hepsi <u>koşarak</u> evlerine döndü.”</p><p>Bu cümledeki altı çizili fiilimsilerin türleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir?</p>`,
  c: [`Sıfat-fiil – Zarf-fiil – Zarf-fiil`, `İsim-fiil – Zarf-fiil – Sıfat-fiil`, `Sıfat-fiil – İsim-fiil – Zarf-fiil`, `Zarf-fiil – Sıfat-fiil – İsim-fiil`], a: "A",
  s: `<p>“Oynayan” (-an) “çocuklar” ismini niteler → <b>sıfat-fiil</b>. “Başlayınca” (-ınca) “kesildi” eylemini zaman yönünden niteler → <b>zarf-fiil</b>. “Koşarak” (-arak) “döndü” eylemini durum yönünden niteler → <b>zarf-fiil</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>“Görülmeye değer bu tarihî kente gelen turistler, dolaştıkları yerlerin fotoğraflarını çekiyordu.”</p><p>Bu cümlede kullanılan fiilimsilerle ilgili aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [`Yalnızca sıfat-fiil vardır.`, `İsim-fiil ve sıfat-fiil vardır; zarf-fiil yoktur.`, `Üç fiilimsi türü de vardır.`, `İsim-fiil ve zarf-fiil vardır; sıfat-fiil yoktur.`], a: "B",
  s: `<p>“Görülmeye” (gör- + -ül + -me) → <b>isim-fiil</b>. “Gelen” (-en) ve “dolaştıkları” (-dık) → <b>sıfat-fiil</b>.</p><p>Cümlede eylemi zaman ya da durum yönünden niteleyen bir zarf-fiil yoktur; “çekiyordu” çekimli fiildir. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>-ası/-esi</b> ekiyle yapılmış bir sıfat-fiil vardır?</p>`,
  c: [`Annesi onu kapıda bekliyordu.`, `Kapadokya, mutlaka görülesi bir yerdir.`, `Bu çiçeğin rengi çok canlı.`, `Komşunun bahçesi çiçeklerle doluydu.`], a: "B",
  s: `<p>B’deki “görülesi” sözcüğü “gör-” fiiline edilgenlik eki (-ül) ve <b>-esi</b> sıfat-fiil ekinin getirilmesiyle oluşmuş, “yer” ismini nitelemiştir.</p><p>A’daki “annesi”, D’deki “bahçesi” sözcüklerinde “-si” iyelik ekidir; bu sözcükler isimden türemiştir. C’de fiilimsi yoktur. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>-r …-maz</b> kalıbıyla oluşturulmuş bir zarf-fiil vardır?</p>`,
  c: [`Bu iş bitmez tükenmez bir hâl aldı.`, `Haberi duyar duymaz yola çıktı.`, `O, hiç yorulmaz bir sporcudur.`, `Kapı kolay kolay açılmaz.`], a: "B",
  s: `<p>B’deki “duyar duymaz” kalıbı “duyduğu anda” anlamında, “çıktı” eylemini zaman yönünden niteler → <b>zarf-fiil</b>.</p><p>A’daki “bitmez tükenmez” ve C’deki “yorulmaz” sözcükleri isim niteleyen <b>sıfat-fiillerdir</b> (-mez). D’deki “açılmaz” ise geniş zamanın olumsuzu olan <b>çekimli fiildir</b>. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde altı çizili sözcük <b>çekimli fiil</b>dir?</p>`,
  c: [`<u>Gelecek</u> yıl liseye başlayacağım.`, `Misafirlerimiz yarın akşam <u>gelecek</u>.`, `<u>Gelecek</u> günler daha güzel olacak.`, `<u>Gelecek</u> otobüsü bekliyoruz.`], a: "B",
  s: `<p>B’de “gelecek” sözcüğü cümlenin yüklemidir ve “misafirlerimiz”in yapacağı eylemi gelecek zaman kipiyle bildirir → <b>çekimli fiil</b>.</p><p>A, C ve D’de “gelecek” sözcüğü “yıl, günler, otobüs” isimlerini niteleyen <b>sıfat-fiil</b>dir. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>-casına/-cesine</b> ekiyle oluşturulmuş bir zarf-fiil vardır?</p>`,
  c: [`Çocukça davranışları herkesi şaşırttı.`, `Delicesine yağan yağmur bütün yolları kapattı.`, `Sanki yıllardır tanışıyormuşçasına sohbet ettiler.`, `Türkçe dersinde şiir okuduk.`], a: "C",
  s: `<p>C’deki “tanışıyormuşçasına” sözcüğü “tanış-” fiiline kip ekleriyle birlikte <b>-casına</b> ekinin getirilmesiyle oluşmuş; “sohbet ettiler” eylemini “-mış gibi” anlamıyla niteleyen bir <b>zarf-fiildir</b>.</p><p>A’daki “çocukça”, B’deki “delicesine” ve D’deki “Türkçe” sözcüklerinde ekler bir <b>isme</b> gelmiştir; bu sözcükler fiilimsi değildir. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>-madan/-meden</b> ekli bir zarf-fiil vardır?</p>`,
  c: [`Bu soruyu düşünmeden cevaplama.`, `Kardeşim bugün okula gelmedi.`, `Annemden habersiz dışarı çıkmam.`, `Bu kitap bana çok şey öğretti.`], a: "A",
  s: `<p>A’daki “düşünmeden” sözcüğü “düşün-” fiiline <b>-meden</b> ekinin getirilmesiyle oluşmuş ve “cevaplama” eylemini durum yönünden nitelemiştir → <b>zarf-fiil</b>.</p><p>B’deki “gelmedi” ve C’deki “çıkmam” çekimli fiillerdir; “-me” olumsuzluk ekidir. D’de fiilimsi yoktur. Cevap <b>A</b>.</p>` },
{ q: `<p>(I) Kardeşim kitap <u>okumayı</u> çok seviyor.<br>(II) <u>Kızartma</u> yapmak için tavayı ısıttı.<br>(III) Okula <u>giderken</u> yanına şemsiye al.<br>(IV) <u>Söz verdiği</u> hâlde gelmedi.</p><p>Numaralanmış cümlelerin hangisinde altı çizili söz <b>fiilimsi değildir</b>?</p>`,
  c: [`I.`, `II.`, `III.`, `IV.`], a: "B",
  s: `<p>II’deki “kızartma” bir yemek türünün adı olmuş <b>kalıcı isimdir</b>; fiilimsi değildir. (Cümledeki “yapmak” ise isim-fiildir.)</p><p>I’deki “okumayı” isim-fiil, III’teki “giderken” zarf-fiil, IV’teki “verdiği” sıfat-fiil ekini almış fiilimsidir. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde altı çizili sıfat-fiil <b>-dık</b> ekiyle oluşturulmuştur?</p>`,
  c: [`<u>Yıkanan</u> çamaşırlar balkona asıldı.`, `<u>Bildiğim</u> her şeyi sana anlattım.`, `<u>Okunası</u> bir kitap arıyorum.`, `<u>Akar</u> suyun sesi huzur veriyordu.`], a: "B",
  s: `<p>B’deki “bildiğim” sözcüğü “bil-” fiiline <b>-dik</b> (ünsüz yumuşamasıyla -diğ) ekinin ve iyelik ekinin getirilmesiyle oluşmuştur.</p><p>A’daki “yıkanan” -an, C’deki “okunası” -ası, D’deki “akar” -ar sıfat-fiil eklerini almıştır. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde altı çizili zarf-fiil, bir eylemin başlangıcından bu yana geçen <b>süreyi</b> bildirmektedir?</p>`,
  c: [`Sınıfa <u>girer girmez</u> pencereyi açtı.`, `Yola <u>çıkmadan</u> yanına su aldı.`, `Bu şehre <u>taşınalı</u> beş yıl oldu.`, `Şarkı <u>söyleyerek</u> yürüyordu.`], a: "C",
  s: `<p>C’deki “taşınalı” sözcüğü “taşın-” fiiline <b>-alı</b> zarf-fiil ekinin getirilmesiyle oluşmuştur ve taşınma eyleminin başlangıcından bu yana geçen süreyi (beş yıl) bildirir.</p><p>A’daki “girer girmez” eylemin hemen ardından, B’deki “çıkmadan” eylemden önce anlamı taşır; D’deki “söyleyerek” ise eylemin nasıl yapıldığını bildirir. Cevap <b>C</b>.</p>` }
]
});
