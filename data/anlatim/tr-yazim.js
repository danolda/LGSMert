/* Adım Adım Anlatım · Türkçe · Yazım Kuralları (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['tr-yazim'] = {
  title: 'Yazım Kuralları',
  desc: 'Büyük harfler (yer, unvan, akrabalık, ay-gün, gök cisimleri), kesme işareti, de/da–ki–mi, sayılar ve kısaltmalar, bitişik ve ayrı yazılan birleşik sözcükler.',
  ozet: [
    'Mahalle, cadde, sokak, dağ, göl, nehir özel adla birlikte <b>büyük</b>; il, ilçe, köy, semt sözcükleri <b>küçük</b>: Atatürk Bulvarı, Ağrı Dağı · Samsun ili, Çatalçam köyü. Yöresel türler küçük: Van kedisi, Amasya elması.',
    'Unvan ve saygı sözleri büyük: Ayşe Hanım, Doktor Ali Bey. Akrabalık sözleri küçük: Ayşe teyze, Kemal dayı (lakap olmuşsa büyük: Baba Gündüz).',
    'Belirli tarih bildiren ay ve gün büyük: 29 Ekim 1923 Pazartesi. Tarih bildirmiyorsa küçük: eylülün ikinci pazartesi. Dünya, Güneş, Ay gök cismi anlamında büyük.',
    'Kurum adlarına ve yapım eki, çoğul ekinden sonraki eklere <b>kesme konmaz</b>: Türk Dil Kurumuna, Türkçenin, Samsunluların.',
    '<b>de/da</b> bağlaçsa ayrı (çıkarınca cümle bozulmaz, te/ta olmaz), ekse bitişik. <b>ki</b> bağlaçsa ayrı, ekse (evdeki, seninki) ve belki, çünkü, sanki gibi kalıplaşmışlarda bitişik. <b>mi</b> her zaman ayrı.',
    'Sayılar ayrı yazılır (iki yüz elli). Üleştirme sayısı yazıyla: ikişer. Sıra sayısı: 2’nci, 6’ncı, 5’inci ya da 5. Saat: 13.00’te.',
    'Kısaltmalara ek son harfin okunuşuna göre: TDK’ye (ke), MEB’de, NATO’dan. Ölçü kısaltmalarında açılıma göre: kg’dan.',
    'Ses olayı varsa bitişik (kaybolmak, hissetmek), yoksa ayrı (fark etmek). Anlam kayması varsa bitişik (aslanağzı), yoksa ayrı (deve kuşu). Birkaç, birçok, biraz, hiçbir bitişik; her şey, bir şey, hiçbir şey, her gün ayrı.'
  ],
  scenes: [
    { t: 'Yazım soruları nasıl gelir?',
      steps: [
        { s: 'Merhaba! Yazım kuralları LGS’de neredeyse her yıl bir soruyla karşına çıkıyor. Kalıp da hep aynı.', v: 'Merhaba! Yazım kuralları LGS’de neredeyse her yıl bir soruyla karşına çıkıyor. Kalıp da hep aynı.',
          h: '<div class="an-rule">Numaralı 3–4 cümle ya da sözcük → “Hangisinde yazım yanlışı <b>yoktur</b>?”</div>' },
        { s: 'Numaralı birkaç cümle verilir ve yazım yanlışı olmayanı sorulur. Yani her cümleyi tek tek, kural kural denetlemen gerekir.' },
        { s: 'En çok sorulan alan büyük harfler, ardından de, da, ki ve mi geliyor. Biz de bu sırayla gidelim.',
          h: '<div class="an-grid"><div><b>Büyük harf</b>8 sorunun 6’sı</div><div><b>de/da, ki, mi</b>5 soruda</div><div><b>Sayı, bitişik</b>daha seyrek</div></div>' }
      ] },

    { t: 'Yer adları',
      base: '<table class="an-tbl"><tr><th>Büyük harf</th><th>Küçük harf</th></tr>' +
        '<tr class="rv b1"><td>Cumhuriyet <b>M</b>ahallesi · Atatürk <b>B</b>ulvarı · İstiklal <b>C</b>addesi</td><td>Samsun <b>i</b>li · Atakum <b>i</b>lçesi · Çatalçam <b>k</b>öyü</td></tr>' +
        '<tr class="rv b2"><td>Ağrı <b>D</b>ağı · Van <b>G</b>ölü · Zigana <b>G</b>eçidi</td><td>Van <b>k</b>edisi · Amasya <b>e</b>lması · Antep <b>f</b>ıstığı</td></tr></table>',
      steps: [
        { s: 'Önce yer adları. Mahalle, meydan, bulvar, cadde ve sokak sözcükleri büyük harfle başlar.', on: '.b1' },
        { s: 'Ama il, ilçe, belde, köy ve semt sözcükleri özel ada dâhil değilse küçük yazılır: Samsun ili, Çatalçam köyü.', v: 'Ama il, ilçe, belde, köy ve semt sözcükleri özel ada dâhil değilse küçük yazılır: Samsun ili, Çatalçam köyü.' },
        { s: 'Dağ, göl, nehir, geçit, ova gibi coğrafi adlar özel addan sonra gelince büyük başlar: Ağrı Dağı, Van Gölü.', on: '.b2' },
        { s: 'Burada çok dikkat et: “Van Gölü” büyük, ama “Van kedisi” küçük! Yöre adıyla kurulan hayvan, yiyecek ve bitki türleri küçük yazılır.',
          v: 'Burada çok dikkat et: Van Gölü büyük, ama Van kedisi küçük! Yöre adıyla kurulan hayvan, yiyecek ve bitki türleri küçük yazılır.',
          h: '<div class="an-trap">Van <b>G</b>ölü ✓ · Van <b>k</b>edisi ✓ · Van <span class="an-bad-t">K</span>edisi ✗</div>' }
      ] },

    { t: 'Unvan, lakap, akrabalık',
      steps: [
        { s: 'Bu başlık LGS’de dört ayrı soruda yoklandı, o yüzden kulağını iyice aç.', v: 'Bu başlık LGS’de dört ayrı soruda yoklandı, o yüzden kulağını iyice aç.' },
        { s: 'Kişi adıyla kullanılan unvanlar, saygı sözleri ve lakaplar büyük harfle başlar: Ayşe Hanım, Doktor Ali Bey, Nene Hatun.',
          h: '<table class="an-tbl"><tr><th>Büyük (unvan, lakap)</th><th>Küçük (akrabalık)</th></tr><tr class="rv a1"><td>Ayşe <b>H</b>anım · <b>D</b>oktor Ali <b>B</b>ey · Nene <b>H</b>atun</td><td>Ayşe <b>t</b>eyze · Kemal <b>d</b>ayı · <b>k</b>ızı Ümit</td></tr></table>', on: '.a1' },
        { s: 'Akrabalık sözleri ise kişi adının önünde de arkasında da küçük yazılır: Ayşe teyze, Kemal dayı.' },
        { s: 'Tek istisna: akrabalık sözü bir lakabın ya da unvanın parçası olmuşsa büyük başlar. Baba Gündüz, Hala Sultan gibi.',
          h: '<div class="an-tip">Lakap olmuş akrabalık sözü → büyük: <b>B</b>aba Gündüz · <b>H</b>ala Sultan · Gül <b>B</b>aba</div>' },
        { s: 'Bir de unvanlara gelen ekler kesmeyle ayrılır: Selim Bey’e, Ayşe Hanım’dan.', v: 'Bir de unvanlara gelen ekler kesmeyle ayrılır: Selim Bey’e, Ayşe Hanım’dan.' }
      ] },

    { t: 'Ay, gün ve gök cisimleri',
      steps: [
        { s: 'Ay ve gün adları belirli bir tarih bildiriyorsa büyük harfle başlar: 29 Ekim 1923 Pazartesi.',
          v: 'Ay ve gün adları belirli bir tarih bildiriyorsa büyük harfle başlar: Yirmi dokuz Ekim bin dokuz yüz yirmi üç, Pazartesi.',
          h: '<table class="an-tbl"><tr class="rv t1"><td>23 <b>N</b>isan 1920 <b>C</b>uma</td><td>belirli tarih → <b>büyük</b></td></tr>' +
             '<tr class="rv t2"><td>Okullar <b>e</b>ylülün ikinci <b>p</b>azartesi günü açılır.</td><td>tarih yok → <b>küçük</b></td></tr></table>', on: '.t1' },
        { s: 'Ama “eylülün ikinci pazartesi” dediğimizde belli bir tarih yok. Bu yüzden küçük yazıyoruz.', v: 'Ama eylülün ikinci pazartesi dediğimizde belli bir tarih yok. Bu yüzden küçük yazıyoruz.', on: '.t2' },
        { s: 'Gün adına da dikkat: tarihe bağlıysa o da büyük yazılır. “15 Aralık Çarşamba” LGS’de tam bu noktadan soruldu.', v: 'Gün adına da dikkat: tarihe bağlıysa o da büyük yazılır. On beş Aralık Çarşamba, LGS’de tam bu noktadan soruldu.' },
        { s: 'Dünya, Güneş ve Ay gök cismi olarak geçiyorsa büyük, başka bir anlamdaysa küçük yazılır.',
          h: '<div class="an-ex"><span class="an-l"><b>A</b>y, <b>D</b>ünya’nın uydusudur. → gök cismi, büyük</span><span class="an-l">Odaya <b>g</b>üneş doldu, <b>d</b>ünyalar benim oldu. → küçük</span></div>' }
      ] },

    { t: 'Kesme işaretinin konmadığı özel adlar',
      steps: [
        { s: 'Özel adlara gelen ekler genellikle kesmeyle ayrılır: Ankara’ya, Ali’nin. Ama iki önemli istisna var.', v: 'Özel adlara gelen ekler genellikle kesmeyle ayrılır: Ankara’ya, Ali’nin. Ama iki önemli istisna var.' },
        { s: 'Birincisi: kurum, kuruluş, bakanlık, okul adlarına gelen ekler kesmeyle ayrılmaz.',
          h: '<div class="an-trap">Türk Dil Kurumu<span class="an-ok-t">na</span> ✓ · Türk Dil Kurumu<span class="an-bad-t">’na</span> ✗<br>Millî Eğitim Bakanlığı<span class="an-ok-t">nın</span> · Atatürk Ortaokulu<span class="an-ok-t">nda</span></div>' },
        { s: 'İkincisi: özel ada yapım eki ya da çoğul eki gelmişse, ondan sonraki ekler de kesmesiz yazılır.',
          h: '<div class="an-rule">Türkçe<b>nin</b> · İngilizce<b>den</b> · Samsunlu<b>ların</b> · Mehmet<b>ler</b></div>' },
        { s: 'Yani “Türkçe” sözcüğünde -ce yapım eki var. O yüzden “Türkçenin” diye bitişik yazıyoruz.', v: 'Yani Türkçe sözcüğünde ce yapım eki var. O yüzden Türkçenin diye kesmesiz yazıyoruz.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdaki cümlelerin hangisinde <b>büyük harflerin kullanımıyla ilgili</b> bir yazım yanlışı yapılmıştır?</p>',
        c: ['Tatilde Ayvalık ilçesine gittik.', 'Ayşe Teyze bize sıcak börek getirdi.', 'Okullar eylülün ikinci pazartesi günü açılır.', 'Ay, Dünya’nın tek doğal uydusudur.'], a: 'B',
        hint: 'Unvan mı, akrabalık sözü mü? Kişi adından sonra gelen sözcüğün türüne bak.',
        why: '“teyze” akrabalık sözüdür, küçük yazılır: Ayşe teyze. A’da ilçe, C’de tarih bildirmeyen ay ve gün küçük; D’de Ay ve Dünya gök cismi olarak büyük yazılmış, hepsi doğru.',
        whyV: 'Teyze bir akrabalık sözüdür, küçük yazılır: Ayşe teyze. A’da ilçe sözcüğü, C’de tarih bildirmeyen ay ve gün küçük; D’de ise Ay ve Dünya gök cismi olarak büyük yazılmış. Bunların hepsi doğru.' },
      steps: [{ s: 'Hadi bakalım! Her cümleyi bir kurala karşı kontrol et.' }] },

    { t: '“de / da” bağlaç mı, ek mi?',
      base: '<table class="an-tbl"><tr><th>Bağlaç → ayrı</th><th>Ek → bitişik</th></tr>' +
        '<tr class="rv d1"><td>Durumu ona <span class="an-w">da</span> anlat.</td><td>Kitap masa<span class="an-ek">da</span> duruyor.</td></tr>' +
        '<tr class="rv d2"><td>Çıkar → cümle bozulmaz</td><td>Nerede? sorusuna cevap verir</td></tr>' +
        '<tr class="rv d3"><td>“te / ta” biçimi <b>yok</b></td><td>-te / -ta olabilir: sokakta, 1923’te</td></tr></table>',
      steps: [
        { s: '“de, da” sözcüğü iki kılıkta karşına çıkar: bağlaç olarak ayrı yazılır, bulunma eki olarak bitişik yazılır.', v: 'De, da iki kılıkta karşına çıkar: bağlaç olarak ayrı yazılır, bulunma eki olarak bitişik yazılır.', on: '.d1' },
        { s: 'Ayırmanın en kolay yolu: çıkarıp oku. Cümle bozulmuyorsa bağlaçtır, ayrı yazılır.', on: '.d2' },
        { s: 'Ek olan “de” ise “nerede, kimde, ne zaman?” sorusuna cevap verir ve sertleşip “-te, -ta” olabilir. Bağlaç asla “te, ta” olmaz.',
          v: 'Ek olan de ise nerede, kimde, ne zaman sorusuna cevap verir ve sertleşip te, ta olabilir. Bağlaç asla te, ta olmaz.', on: '.d3' },
        { s: 'Ve bağlaç olan “de” kesmeyle de ayrılmaz: “Ayşe de geldi.” doğru, “Ayşe’de geldi.” yanlış.', v: 'Ve bağlaç olan de, kesmeyle de ayrılmaz. Ayşe de geldi doğru; Ayşe’de geldi diye yazmak yanlış.',
          h: '<div class="an-trap">Ayşe <span class="an-ok-t">de</span> geldi. ✓ · Ayşe<span class="an-bad-t">’de</span> geldi. ✗</div>' }
      ] },

    { t: '“ki” ve “mi”',
      steps: [
        { s: '“ki” bağlaç olduğunda ayrı yazılır: “Duydum ki unutmuşsun.”', v: 'Ki bağlaç olduğunda ayrı yazılır: Duydum ki unutmuşsun.',
          h: '<table class="an-tbl"><tr class="rv i1"><td>Duydum <span class="an-w">ki</span> unutmuşsun.</td><td>bağlaç → <b>ayrı</b></td></tr>' +
             '<tr class="rv i2"><td>evde<span class="an-ek">ki</span> · senin<span class="an-ek">ki</span> · yarın<span class="an-ek">ki</span></td><td>ek → <b>bitişik</b> (sonuna -ler gelebilir)</td></tr>' +
             '<tr class="rv i3"><td>belki · çünkü · sanki · hâlbuki · mademki</td><td>kalıplaşmış → <b>bitişik</b></td></tr></table>', on: '.i1' },
        { s: 'Ek olan “-ki” bitişik yazılır. Püf noktası: sonuna “-ler” getirebiliyorsan ektir. Masadakiler, evdekiler.', v: 'Ek olan ki bitişik yazılır. Püf noktası: sonuna ler getirebiliyorsan ektir. Masadakiler, evdekiler.', on: '.i2' },
        { s: 'Bir de kalıplaşmış olanlar var: belki, çünkü, sanki, hâlbuki, mademki. Bunlar her zaman bitişik.', on: '.i3' },
        { s: '“mi” soru eki ise her zaman ayrı yazılır, ama arkasından gelen eklere bitişir: “Geliyor musunuz?”',
          v: 'Mi soru eki ise her zaman ayrı yazılır, ama arkasından gelen eklere bitişir: Geliyor musunuz?',
          h: '<div class="an-rule">Geliyor <b>musunuz</b>? · Güzel <b>mi</b> güzel bir gün! · Okuyor <b>muymuş</b>?</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdaki cümlelerin hangisinde <b>yazım yanlışı</b> yapılmıştır?</p>',
        c: ['Bu akşam sinemaya sen de gel.', 'Duydum ki yarın yola çıkıyormuşsunuz.', 'Masadaki kitapları rafa kaldırdım.', 'Annemde bu habere çok sevindi.'], a: 'D',
        hint: '“de, da” sözcüklerini cümleden çıkarıp oku. Cümle bozulmuyorsa ayrı yazılmalı.',
        hintV: 'De, da sözcüklerini cümleden çıkarıp oku. Cümle bozulmuyorsa ayrı yazılmalı.',
        why: '“Annem bu habere çok sevindi.” Çıkarınca cümle bozulmuyor; “de” bağlaçtır, ayrı yazılmalı: Annem de. A’da bağlaç ayrı, B’de bağlaç “ki” ayrı, C’de ek olan “-ki” bitişik; hepsi doğru.',
        whyV: 'Annem bu habere çok sevindi. De sözcüğünü çıkarınca cümle bozulmuyor; demek ki bağlaç, ayrı yazılmalı: Annem de. A’da bağlaç ayrı, B’de bağlaç olan ki ayrı, C’de ek olan ki bitişik yazılmış. Hepsi doğru.' },
      steps: [{ s: 'Şimdi sen dene. Çıkarma testini unutma!' }] },

    { t: 'Sayılar ve saatler',
      steps: [
        { s: 'Sayılar ayrı yazılır: iki yüz elli beş, on altı. Yalnızca çek, senet gibi para işlerinde bitişik yazılabilir.',
          h: '<div class="an-ex"><span class="an-l">iki yüz elli beş ✓ · <span class="an-bad-t">ikiyüzellibeş</span> ✗ (çekte, senette olur)</span></div>' },
        { s: 'Üleştirme sayıları, yani -er, -şer ekli sayılar rakamla değil yazıyla yazılır: ikişer elma, beşer soru.',
          v: 'Üleştirme sayıları, yani er, şer ekli sayılar rakamla değil yazıyla yazılır: ikişer elma, beşer soru.',
          h: '<div class="an-trap">2’şer elma ✗ → <span class="an-ok-t">ikişer</span> elma · 10’ar lira ✗ → <span class="an-ok-t">onar</span> lira</div>' },
        { s: 'Sıra sayısında okunuş önemli. “İki” ünlüyle bitiyor, kesmeden sonra yalnızca “-nci” gelir: 2’nci. “Beş” ünsüzle bitiyor: 5’inci.',
          v: 'Sıra sayısında okunuş önemli. İki, ünlüyle bitiyor; kesmeden sonra yalnızca nci gelir: ikinci. Beş ise ünsüzle bitiyor: beşinci, yani kesmeden sonra inci yazılır.',
          h: '<table class="an-tbl"><tr><td class="an-ok-t">2’nci · 6’ncı · 7’nci</td><td class="an-bad-t">2’inci · 6’ıncı</td></tr><tr><td class="an-ok-t">5’inci ya da 5.</td><td class="an-bad-t">5.’inci</td></tr></table>' },
        { s: 'Hem nokta hem kesme bir arada kullanılmaz. Ya 5’inci yazarsın ya da 5 ve nokta.', v: 'Hem nokta hem kesme bir arada kullanılmaz. Ya kesmeyle beşinci yazarsın ya da beş ve nokta.' },
        { s: 'Saatte saat ile dakika arasına nokta konur. Ek de okunuşa göre gelir: 13.00’te, yani “on üçte”.', v: 'Saatte saat ile dakika arasına nokta konur. Ek de okunuşa göre gelir: on üçte okunduğu için, kesmeden sonra te yazılır.',
          h: '<div class="an-rule">Saat 13.00’<b>te</b> (on üçte) · 15.30’<b>da</b> (on beş otuzda)</div>' }
      ] },

    { t: 'Kısaltmalar',
      steps: [
        { s: 'Büyük harfli kısaltmalara gelen ek, son harfin okunuşuna göre gelir. Türkçede “ka” diye bir harf okunuşu yok, “ke” diye okunur.',
          v: 'Büyük harfli kısaltmalara gelen ek, son harfin okunuşuna göre gelir. Türkçede ka diye bir harf okunuşu yok; ke diye okunur.',
          h: '<div class="an-trap">TDK’<span class="an-ok-t">ye</span> (te de ke-ye) ✓ · TDK’<span class="an-bad-t">ya</span>, TDK’<span class="an-bad-t">na</span> ✗</div>' },
        { s: 'O yüzden “TDK’ye” yazarız. Aynı şekilde MEB’de, TSK’nin.', v: 'O yüzden, te de ke ye yazarız. Aynı şekilde meb de, te se ke nin.' },
        { s: 'Kelime gibi okunan kısaltmalarda ise ek kelimenin okunuşuna göre gelir: NATO’dan, UNESCO’ya, TÜBİTAK’ın.', v: 'Kelime gibi okunan kısaltmalarda ise ek kelimenin okunuşuna göre gelir: natodan, unescoya, tübitakın.' },
        { s: 'Küçük harfli ölçü kısaltmalarında ise açılımına bakarız: kilogramdan dediğimiz için kg’dan, santimetreyi dediğimiz için cm’yi.',
          v: 'Küçük harfli ölçü kısaltmalarında ise açılımına bakarız. Kilogramdan diye okuduğumuz için ka ge, kesme, dan yazarız; santimetreyi diye okuduğumuz için ce me, kesme, yi.',
          h: '<div class="an-rule">kg’<b>dan</b> (kilogramdan) · cm’<b>yi</b> (santimetreyi) · mm’<b>den</b></div>' }
      ] },

    { t: 'Birleşik sözcükler: bitişik mi, ayrı mı?',
      base: '<table class="an-tbl"><tr><th>Bitişik</th><th>Ayrı</th></tr>' +
        '<tr class="rv c1"><td>kaybolmak · hissetmek · affetmek · sabretmek</td><td>fark etmek · terk etmek · hak etmek · var olmak</td></tr>' +
        '<tr class="rv c2"><td>aslanağzı · hanımeli · kuşburnu · imambayıldı</td><td>deve kuşu · ateş böceği · kuru fasulye · kol saati</td></tr></table>',
      steps: [
        { s: 'Birleşik sözcüklerde iki ana ölçüt var. Birincisi ses olayı.' },
        { s: '“etmek, olmak” ile birleşirken ses düşüyor ya da türüyorsa bitişik yazılır: kayıp olmak, kaybolmak oluyor; his etmek, hissetmek.',
          v: 'Etmek ve olmak ile birleşirken ses düşüyor ya da türüyorsa bitişik yazılır: kayıp olmak, kaybolmak oluyor; his etmek, hissetmek.', on: '.c1' },
        { s: 'Ses olayı yoksa ayrı yazılır: fark etmek, terk etmek, hak etmek. LGS’de bunlar sık çeldirici olur.', v: 'Ses olayı yoksa ayrı yazılır: fark etmek, terk etmek, hak etmek. LGS’de bunlar sık çeldirici olur.' },
        { s: 'İkinci ölçüt anlam kayması. Sözcüklerden biri gerçek anlamını yitirmişse bitişik: aslanağzı bir çiçek, aslanın ağzı değil.', on: '.c2' },
        { s: 'Gerçek anlam korunuyorsa ayrı: deve kuşu gerçekten bir kuş, ateş böceği gerçekten bir böcek.' }
      ] },

    { t: '“bir”, “her”, “hiç” ile kurulanlar',
      steps: [
        { s: 'Son olarak 2026 LGS’de tek başına soru olan bir başlık: “bir, her, hiç” ile kurulan sözler.', v: 'Son olarak iki bin yirmi altı LGS’de tek başına soru olan bir başlık: bir, her ve hiç ile kurulan sözler.',
          h: '<table class="an-tbl"><tr><th>Bitişik</th><th>Ayrı</th></tr><tr><td>biraz · birazdan · birçok · birkaç · birdenbire · birbiri · birtakım · hiçbir · herhangi</td><td>bir şey · her şey · hiçbir şey · her gün · her biri · bir arada · bir türlü · pek çok</td></tr></table>' },
        { s: 'Biraz, birçok, birkaç, hiçbir, herhangi bitişik yazılır. Bunları liste gibi ezberlemen en garantisi.' },
        { s: 'Ama “şey” sözcüğü her zaman ayrı yazılır: bir şey, her şey, hiçbir şey. “Her gün” de ayrı yazılır; bu da LGS’de soruldu.',
          v: 'Ama şey sözcüğü her zaman ayrı yazılır: bir şey, her şey, hiçbir şey. Her gün de ayrı yazılır; bu da LGS’de soruldu.',
          h: '<div class="an-trap">Her<b> </b>şey ✓ · <span class="an-bad-t">Herşey</span> ✗ · hiçbir<b> </b>şey ✓ · <span class="an-bad-t">hiç bir</span> ✗</div>' },
        { s: 'Bir püf noktası daha: “-ıver, -ebil, -akal” ile kurulan fiiller bitişik yazılır. Gidiverdi, okuyabilmek, bakakaldı.', v: 'Bir püf noktası daha: ıver, ebil, akal ile kurulan fiiller bitişik yazılır. Gidiverdi, okuyabilmek, bakakaldı.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdaki cümlelerin hangisinde <b>yazım yanlışı yoktur</b>?</p>',
        c: ['Yarışmada okulumuz 2’inci oldu.', 'Bu konuyu Türk Dil Kurumu’na sorduk.', 'Öğretmenimiz herkese ikişer kalem dağıttı.', 'Herşeyi zamanında yapmayı sever.'], a: 'C',
        hint: 'Sıra sayısının okunuşuna, kurum adına gelen eke ve “şey” sözcüğüne bak.',
        hintV: 'Sıra sayısının okunuşuna, kurum adına gelen eke ve şey sözcüğüne bak.',
        why: '“ikişer” üleştirme sayısı, doğru biçimde yazıyla yazılmış. A’da 2’nci olmalı; B’de kurum adına gelen ek kesmesiz yazılır: Kurumuna; D’de “her şey” ayrı yazılır.',
        whyV: 'İkişer bir üleştirme sayısı ve doğru biçimde yazıyla yazılmış. A’da iki rakamından sonra yalnızca nci gelmeli. B’de kurum adına gelen ek kesmesiz yazılır: Kurumuna. D’de ise her şey ayrı yazılır.' },
      steps: [{ s: 'Son soru, tam LGS kalıbında: yanlışı olmayanı bul. Her şıkkı kural kural denetle.', v: 'Son soru, tam LGS kalıbında: yanlışı olmayanı bul. Her şıkkı kural kural denetle.' }] }
  ]
};
