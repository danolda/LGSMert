/* Adım Adım Anlatım · Türkçe · Paragrafta Anlam (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['tr-paragraf'] = {
  title: 'Paragrafta Anlam',
  desc: 'Konu, ana düşünce, yardımcı düşünce; dört adımlı çözüm yöntemi, olumsuz köklü sorular, öncüller, örnekle eşleştirme, duygu ve yazarın amacı soruları ile LGS’nin en sık çeldiricileri.',
  ozet: [
    'Konu, metinde üzerinde durulan şeydir; ana düşünce, metnin bütününü kapsayan yargıdır; yardımcı düşünceler metinde yazan ya da yazandan doğrudan çıkan yargılardır.',
    'Dört adım: kökü oku (olumlu mu, olumsuz mu), metni ne arayacağını bilerek oku, her şıkkı metindeki bir cümleyle eşleştir, kalan iki şıktan bütünü kapsayanı seç.',
    'Ana düşünce çoğunlukla “ama, fakat, oysa, -medikçe” sözlerinden sonra ya da son cümlededir. Metinde geçen her doğru bilgi ana düşünce değildir; öyküde olayın değil dersin peşine düş.',
    'Olumsuz köklü sorularda karşılığı olmayan ya da metne ters düşen şık cevaptır. Sözcük benzerliği anlam benzerliği değildir; “daha, en, tamamen, her zaman” derece kaymasıdır.',
    'Öncüllü sorularda her öncülü ayrı denetle; metinde olmayan sıra ya da neden-sonuç kuran öncüle ulaşılamaz.',
    'Örnekle eşleştirmede şartları madde madde çıkar; çeldiriciler şartların biri eksik olanlardır. İşi yapan ile yaptıranı ayır.',
    'Duygu çoğunlukla davranışla verilir. Duyguyu bulunca “Bunu kim yaşıyor?” diye sor; umut ile kaygıyı karıştırma.',
    'Altın kural: Cevap metindedir. Kendi bilgin ve gerçek hayattaki doğrular cevap olamaz.'
  ],
  scenes: [
    { t: 'Paragrafın yapı taşları',
      base: '<svg class="an-svg" viewBox="0 0 340 200" role="img" aria-label="Paragraf; konu, ana düşünce ve yardımcı düşüncelerden oluşur">' +
        '<rect x="100" y="6" width="140" height="38" rx="10" class="boxa rv p1"/><text x="170" y="31" font-size="16" text-anchor="middle" font-weight="700" class="rv p1">PARAGRAF</text>' +
        '<path class="st dr p2" d="M170 44 V60 H58 V76"/><path class="st dr p2" d="M170 60 V76"/><path class="st dr p2" d="M170 60 H282 V76"/>' +
        '<rect x="4" y="76" width="108" height="56" rx="9" class="box rv p3"/><text x="58" y="100" font-size="14" text-anchor="middle" font-weight="700" class="rv p3">Konu</text><text x="58" y="119" font-size="10" text-anchor="middle" class="mut rv p3">neyden söz?</text>' +
        '<rect x="116" y="76" width="108" height="56" rx="9" class="box rv p4"/><text x="170" y="100" font-size="14" text-anchor="middle" font-weight="700" class="rv p4">Ana düşünce</text><text x="170" y="119" font-size="10" text-anchor="middle" class="mut rv p4">bütünü kapsar</text>' +
        '<rect x="228" y="76" width="108" height="56" rx="9" class="box rv p5"/><text x="282" y="100" font-size="14" text-anchor="middle" font-weight="700" class="rv p5">Yardımcı</text><text x="282" y="119" font-size="10" text-anchor="middle" class="mut rv p5">her bir yargı</text>' +
        '<text x="170" y="162" font-size="13" text-anchor="middle" class="acc rv p6">Başlık = konu + ana düşünce</text>' +
        '<text x="170" y="186" font-size="12" text-anchor="middle" class="mut rv p6">ne çok geniş, ne çok dar</text></svg>',
      steps: [
        { s: 'Merhaba! Türkçede en çok soru bu konudan gelir. O yüzden temelden, sağlam bir şekilde başlayalım.', on: '.p1' },
        { s: 'Paragraf, tek bir konu etrafında birleşen ve tek bir ana düşünceyi anlatan cümlelerdir. Soruların neredeyse hepsi üç kavrama dayanır.', on: '.p2' },
        { s: 'Konu, metinde üzerinde durulan şeydir. Genelde bir isim tamlamasıyla söylenir.', on: '.p3' },
        { s: 'Ana düşünce, metnin bütününü kapsayan yargıdır. Çoğu zaman ilk ya da son cümlede saklanır.', on: '.p4' },
        { s: 'Yardımcı düşünceler ise metinde yazan ya da yazandan doğrudan çıkan her yargıdır.', on: '.p5' },
        { s: 'Başlık da konuyu ve ana düşünceyi birlikte yansıtan ifadedir. Ne çok geniş olmalı, ne çok dar.', on: '.p6' }
      ] },

    { t: 'Konu mu, ana düşünce mi?',
      steps: [
        { s: 'Bu ikisini karıştırmak çok yaygın. Şimdi şuna bir bakalım.',
          h: '<table class="an-tbl"><tr class="rv q1"><td><b>Konu</b></td><td>Sosyal medyadaki bilgi kirliliği</td></tr>' +
             '<tr class="rv q2"><td><b>Ana düşünce</b></td><td>Sosyal medyadaki bilgilerin güvenilirliği, bilinçli toplumla sorumlu şirketlerin iş birliğiyle sağlanır.</td></tr></table>' },
        { s: '“Sosyal medyadaki bilgi kirliliği” neyden söz edildiğini söylüyor. Ama bir yargı bildirmiyor. Bu bir konu.', on: '.q1' },
        { s: 'İkincisi ise bir yargı kuruyor: Güvenilirlik iş birliğiyle sağlanır. İşte bu ana düşünce.', on: '.q2' },
        { s: 'Yani kısaca şöyle ayırt et: Ana düşünce her zaman bir yargı bildirir, konu bildirmez.',
          h: '<div class="an-rule"><b>Konu</b> = neyden söz ediliyor? &nbsp;·&nbsp; <b>Ana düşünce</b> = bu konuda ne söyleniyor?</div>' }
      ] },

    { t: 'Konu ve ana düşünceyi ayır',
      steps: [{ s: 'Sekiz ifadeyi konu ve ana düşünce olarak ayır. Önce ifadeye, sonra kutusuna dokun.' }],
      ia: {
        tip: 'grup',
        q: '<p>Her ifade bir <b>konu</b> mu, yoksa bir <b>ana düşünce</b> mi?</p>',
        gruplar: ['Konu', 'Ana düşünce'],
        ogeler: [{ m: 'Kitap sevgisi', g: 0 }, { m: 'Kitap sevgisi küçük yaşta kazanılır.', g: 1 }, { m: 'Şehirlerdeki hava kirliliği', g: 0 }, { m: 'Toplu taşıma hava kirliliğini azaltır.', g: 1 }, { m: 'Çocuklukta oyunun önemi', g: 0 }, { m: 'Oyun, çocuğun dünyayı tanıma yoludur.', g: 1 }, { m: 'Teknolojinin aile ilişkilerine etkisi', g: 0 }, { m: 'Ekranlar aile sohbetlerini azaltıyor.', g: 1 }],
        hint: 'Kendine sor: Bu ifade bir yargı bildiriyor mu? Bir yüklemle bir şey söylüyorsa ana düşüncedir; yalnızca neyden söz edildiğini gösteriyorsa konudur.',
        why: 'İsim tamlaması hâlindeki ifadeler yalnızca neyden söz edildiğini gösterir: konu. Yüklemi olan, bir yargı kuran cümleler ana düşüncedir. “Teknolojinin etkisi” bile, etkinin ne olduğunu söylemedikçe konudur.'
      } },

    { t: 'Dört adımda çözüm',
      base: '<div class="an-ex"><span class="an-l rv a1"><b>1. Kökü oku:</b> Olumlu mu, olumsuz mu? “değildir, çıkarılamaz” sözünü işaretle.</span>' +
        '<span class="an-l rv a2"><b>2. Metni oku:</b> Ne arayacağını bilerek. Son cümleye ve “ama, fakat, -medikçe” sözlerine dikkat.</span>' +
        '<span class="an-l rv a3"><b>3. Eşleştir:</b> Her şıkkı metindeki bir cümleyle eşle. Bulursan ✓, bulamazsan ✗.</span>' +
        '<span class="an-l rv a4"><b>4. Süz:</b> İki şık kaldıysa hangisi bütünü kapsıyor? “her zaman, tamamen” metinde var mı?</span></div>',
      steps: [
        { s: 'Bütün paragraf sorularında işine yarayacak dört adımlık bir yöntem öğreteyim sana.' },
        { s: 'Birinci adım: Önce soru kökünü oku. Soruların yaklaşık yarısı olumsuz köklüdür. “Değildir”, “çıkarılamaz” sözünü işaretle.', on: '.a1' },
        { s: 'İkinci adım: Metni ne arayacağını bilerek oku. Özellikle son cümleye ve “ama, fakat” gibi sözlere dikkat et.', on: '.a2' },
        { s: 'Üçüncü adım: Her şıkkı metindeki bir cümleyle eşleştir. Burada kendi bilgini asla işin içine katma.', on: '.a3' },
        { s: 'Dördüncü adım: İki şık kaldıysa hangisinin metnin bütününü kapsadığına bak. Derece sözcüklerini de denetle.', on: '.a4' }
      ] },

    { t: 'Ana düşünceyi bulmak',
      steps: [
        { s: 'Soru “asıl anlatılmak istenen” ya da “en kapsamlı yargı” diyorsa ana düşünceyi arıyorsun demektir.' },
        { s: 'Doğru şık metnin bütününü kapsar. Bir ayrıntıyı ya da sadece bir örneği anlatan şık dar kalır.',
          h: '<div class="an-rule"><b>Ana düşünce nerede saklanır?</b><br>· “ama, fakat, ne var ki, oysa” sözünden sonra<br>· “-madıkça, -medikçe” gibi koşul kuran son cümlede<br>· öyküde olayın kendisinde değil, olaydan çıkan derste</div>' },
        { s: 'Metin “ama” ya da “fakat” ile yön değiştiriyorsa ana düşünce genellikle bu sözden sonra gelir.' },
        { s: 'Son cümle “olmadıkça” gibi bir koşul kuruyorsa, ana düşünce o koşulu da içermelidir.' },
        { s: 'Kısa bir öykü ya da anekdot varsa olayın kendisini değil, olaydan çıkan dersi ara.' }
      ] },

    { t: 'Ana düşünce cümlesine dokun',
      steps: [{ s: 'Paragrafın dört cümlesi var. Ana düşünceyi taşıyan cümleye dokun.' }],
      ia: {
        tip: 'gorselsec',
        q: '<p>Bu paragrafta <b>ana düşünceyi</b> taşıyan cümleye dokun.</p>',
        svg: '<svg class="an-svg" viewBox="0 0 340 244" role="group" aria-label="Dört cümlelik paragraf"><g data-b="r1" aria-label="Bazı insanlar yeteneği doğuştan gelen bir şey sanır."><rect x="4" y="6" width="332" height="44" rx="9" class="box"/><text x="14" y="32" font-size="14">Bazı insanlar yeteneği doğuştan gelen bir şey sanır.</text></g><g data-b="r2" aria-label="Gerçekten de bazı çocuklar müziğe yatkın doğar."><rect x="4" y="58" width="332" height="54" rx="9" class="box"/><text x="14" y="80" font-size="14">Gerçekten de bazı çocuklar müziğe</text><text x="14" y="100" font-size="14">yatkın doğar.</text></g><g data-b="r3" aria-label="Fakat düzenli çalışmayan hiç kimse yeteneğini geliştiremez."><rect x="4" y="120" width="332" height="54" rx="9" class="box"/><text x="14" y="142" font-size="14">Fakat düzenli çalışmayan hiç kimse</text><text x="14" y="162" font-size="14">yeteneğini geliştiremez.</text></g><g data-b="r4" aria-label="Ünlü piyanistler bile her gün saatlerce çalışır."><rect x="4" y="182" width="332" height="54" rx="9" class="box"/><text x="14" y="204" font-size="14">Ünlü piyanistler bile her gün saatlerce</text><text x="14" y="224" font-size="14">çalışır.</text></g></svg>',
        dogru: ['r3'],
        hint: 'Metin bir yerde yön değiştiriyor. Yön değiştiren sözü bul; ondan sonraki yargı bütün metni kapsar mı?',
        why: 'Metin “Fakat” ile yön değiştiriyor: Yeteneği geliştiren düzenli çalışmadır. İlk iki cümle karşı görüşü verir, piyanist örneği de bu yargıyı destekleyen bir yardımcı düşüncedir.'
      } },

    { t: 'Ana düşünce tuzakları',
      steps: [
        { s: 'Burada çok dikkat et, LGS sınavında en sık düşülen tuzaklar bunlar.',
          h: '<div class="an-trap"><b>1. İki yönü birleştir:</b> Metin “Çözüm eleştirel düşünmektir. Fakat şirketler de adım atmadıkça güven sağlanamaz.” diyorsa doğru şık <b>iki tarafı birden</b> kapsar.</div>' },
        { s: 'Bir metin hem toplumdan hem şirketlerden söz ediyorsa, yalnızca birini anlatan şık eksiktir. Doğru cevap ikisini birleştiren iş birliği şıkkıydı.' },
        { s: 'İkinci tuzak: Şıktaki bilgi metinde gerçekten geçiyor, ama sadece bir yardımcı düşünce.',
          h: '<div class="an-trap"><b>2. Metinde geçen her doğru bilgi ana düşünce değildir.</b> Yardımcı düşünce şıkları en güçlü çeldiricidir.</div>' },
        { s: 'Üçüncüsü öykülerde olur. Öyküde olmayan bir sonucu ekleme. Bir yıl “Ön yargı haksızlığa yol açar” şıkkı çekiciydi, ama öyküde kimseye haksızlık yapılmıyordu.',
          h: '<div class="an-trap"><b>3. Öyküye sonuç ekleme:</b> Ders, öyküde gerçekten yaşanandan çıkarılır.</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Birçok kişi, yeni bir dil öğrenmek için yurt dışına gitmek gerektiğini düşünür. Elbette bu, dili günlük hayatta duymayı kolaylaştırır. Fakat her gün düzenli olarak okumayan, dinlemeyen ve konuşmaya çalışmayan biri yıllarca yurt dışında yaşasa bile o dili öğrenemez.</p><p>Bu metinde asıl anlatılmak istenen aşağıdakilerden hangisidir?</p>',
        c: ['Bir dili öğrenmenin tek yolu, o dilin konuşulduğu ülkede yaşamaktır.', 'Dil öğrenmede asıl belirleyici olan, düzenli ve istekli bir çalışmadır.', 'Yurt dışında yaşamak, dili günlük hayatta duymayı kolaylaştırır.', 'Dil öğrenmek isteyen kişi önce okumalı, sonra konuşmaya başlamalıdır.'], a: 'B',
        hint: '“Fakat” sözünden sonra ne söyleniyor? Metinde geçen ama yalnızca bir ayrıntı olan şıkkı ele.',
        why: 'Metin “Fakat” ile yön değiştirip düzenli çalışmanın şart olduğunu söylüyor; ana düşünce bu. C metinde geçer ama yardımcı düşüncedir. A metne ters düşüyor, D ise metinde olmayan bir sıra kuruyor.' },
      steps: [{ s: 'Şimdi sıra sende. Dört adımı uygula, sonra İşaretle’ye bas.' }] },

    { t: 'Olumsuz köklü sorular',
      steps: [
        { s: 'Gelelim “değinilmemiştir, çıkarılamaz, söylenemez” sorularına. Burada üç şık metinde vardır, biri yoktur.' },
        { s: 'Her şıkkı metindeki bir cümleyle eşleştir. Karşılığı olmayan ya da metne ters düşen şık cevaptır.',
          h: '<div class="an-trap"><b>Sözcük benzerliği ≠ anlam benzerliği.</b> Metinde “sanatta kendi dilini kullanmak” var diye “sanatta millî kültür işlenmeli” şıkkı metinde var sayılmaz.</div>' },
        { s: 'Şıktaki bir sözcük metinde geçiyor diye o şıkkı doğru sayma. Anlamın da aynı olup olmadığına bak.' },
        { s: 'Derece sözcüklerine çok dikkat et. Metin “farklı” diyorsa, şık “daha geniş” diyemez.',
          h: '<div class="an-trap"><b>Derece kayması:</b> “daha, en, tamamen, hiç, her zaman” metindeki ifadeyi büyütür ya da küçültür.</div>' },
        { s: 'Bir de eleştiren yazarlar var. Yazar bir şeyi eleştirse bile olumlu yönlerini kabul edebilir. Bu olumlu noktaları atlama.' }
      ] },

    { t: 'Çıkarılabilir mi?',
      steps: [{ s: 'Metne göre dört yargıyı değerlendir. Metinden çıkarılabiliyorsa Doğru, çıkarılamıyorsa Yanlış seç.' }],
      ia: {
        tip: 'dogruyanlis',
        q: '<p>“Sesli kitaplar, son yıllarda özellikle yolda vakit geçiren gençler arasında yaygınlaştı. Ancak bazı öğretmenler, dinlemenin bir metni üzerine düşünerek incelemenin yerini tutamayacağını söylüyor.”</p>',
        ifadeler: [{ m: 'Sesli kitapların gençler arasında yaygınlaştığı söylenmiştir.', d: true, a: 'İlk cümle bunu açıkça söylüyor.' }, { m: 'Sesli kitaplar artık basılı kitaplardan daha çok tercih edilmektedir.', d: false, a: 'Metinde böyle bir karşılaştırma yok: derece kayması.' }, { m: 'Bazı öğretmenler sesli kitaplara çekinceyle yaklaşmaktadır.', d: true, a: 'İkinci cümlenin başka sözcüklerle söylenişi.' }, { m: 'Öğretmenlerin hepsi sesli kitapları faydasız bulmaktadır.', d: false, a: 'Metin “bazı öğretmenler” diyor; “hepsi” ve “faydasız” metni büyütür.' }],
        hint: 'Her yargıyı metindeki bir cümleye dayandır. “Daha çok”, “hepsi” gibi derece sözcükleri metinde var mı?',
        why: 'Birinci ve üçüncü yargının dayanağı metinde var. “Basılı kitaplardan daha çok” ve “öğretmenlerin hepsi” ise metnin söylediğini büyütüyor; bu bir derece kaymasıdır.'
      } },

    { t: 'Öncüllü sorular',
      steps: [
        { s: 'Bazen soru I, II, III, IV diye öncüllerle gelir ve “hangilerine ulaşılabilir?” diye sorar.', v: 'Bazen soru bir, iki, üç, dört diye öncüllerle gelir ve hangilerine ulaşılabilir diye sorar.' },
        { s: 'Her öncülü ayrı ayrı metinle karşılaştır. Ulaşılabilir diyebilmek için metinde açık bir dayanak bulmalısın.',
          h: '<div class="an-ex"><span class="an-l"><b>I.</b> ✓ metinde dayanağı var</span><span class="an-l"><b>II.</b> ✗ metinde yok → II içeren şıkları hemen ele</span><span class="an-l"><b>III.</b> ✓</span><span class="an-l"><b>IV.</b> ?</span></div>' },
        { s: 'Kesin yanlış bulduğun bir öncül varsa, onu içeren bütün şıkları hemen ele. İş çok hızlanır.' },
        { s: 'Ve şu tuzağı unutma: Metin bir şeyleri sadece sıralıyorsa, şık bunlara bir başlama sırası ya da neden ekleyemez.',
          h: '<div class="an-trap">Metin “otomobil, telefon, beyaz eşya” diye sayıyor → “Otomobille <b>başlayıp</b> diğerlerine yayıldı.” öncülüne <b>ulaşılamaz</b>.</div>' }
      ] },

    { t: 'Ulaşılamayan yargıları ele',
      steps: [{ s: 'Metinde dayanağı olmayan yargıları bul ve ele. Sıra ya da neden uyduran şıklara dikkat!' }],
      ia: {
        tip: 'eleme',
        q: '<p>“Festivalde halk dansları, yöresel yemekler ve el sanatları sergilendi. En kalabalık alan, el sanatlarının bulunduğu çadırdı.”<br>Bu metinden <b>ulaşılamayan</b> yargıları ele.</p>',
        ogeler: ['Festivalde birden fazla etkinlik vardı.', 'Festival halk danslarıyla başladı.', 'El sanatları çadırı ilgi gördü.', 'Yemekler pahalı olduğu için yemek alanı tenhaydı.', 'Festivalin en kalabalık alanında el sanatları vardı.', 'Festival bu yıl ilk kez düzenlendi.'],
        ele: [1, 3, 5],
        hint: 'Metin etkinlikleri yalnızca sayıyor. Bir başlama sırası, bir neden ya da metinde hiç olmayan bir bilgi ekleyen yargıları bul.',
        why: 'Sayılan şeylere sıra eklenemez; “pahalı olduğu için” uydurma bir neden; “ilk kez” bilgisi de metinde yok. Kalan üç yargının dayanağı metinde açıkça var.'
      } },

    { t: 'Ara soru', cp: {
        q: '<p>Kütüphanemizin sesli kitap bölümü geçen yıl açıldı. Başta yalnızca görme engelli okurlar için düşünülen bu bölüm, kısa sürede yolda kitap dinlemek isteyen öğrencilerin de ilgisini çekti. Bugün bölümdeki kitap sayısı, açıldığı günün üç katına ulaştı.</p><p>Bu metinden aşağıdakilerin hangisi <b>çıkarılamaz</b>?</p>',
        c: ['Bölüm, ilk başta belirli bir okur kitlesi düşünülerek açılmıştır.', 'Bölüme ilgi gösterenler zamanla çeşitlenmiştir.', 'Bölümdeki kitap sayısı artmıştır.', 'Sesli kitap bölümü, kütüphanenin en çok ziyaret edilen bölümüdür.'], a: 'D',
        hint: 'Her şıkkı metindeki bir cümleyle eşleştir. Hangi şık metinde olmayan bir karşılaştırma yapıyor?',
        why: 'Metinde bölümün diğer bölümlerle karşılaştırılması yok; “en çok ziyaret edilen” bir derece kaymasıdır. A, B ve C metindeki cümlelerle doğrudan eşleşiyor.' },
      steps: [{ s: 'Soru kökü “çıkarılamaz” diyor. Eşleştirme yöntemiyle dene.' }] },

    { t: 'Örnekle eşleştirme',
      steps: [
        { s: 'Son yıllarda çok gelen bir tür daha var: Metinde bir tanım verilir, sonra hangi durumun ona örnek olduğu sorulur.' },
        { s: 'Önce metindeki şartları madde madde çıkar. Sonra her şıkta bu şartların hepsi var mı, tek tek bak.',
          h: '<table class="an-tbl"><tr><th>Şık</th><th>1. şart</th><th>2. şart</th><th>3. şart</th></tr>' +
             '<tr class="rv x1"><td>A</td><td>✓</td><td>✓</td><td class="an-bad-t">✗</td></tr>' +
             '<tr class="rv x1"><td>B</td><td>✓</td><td class="an-bad-t">✗</td><td>✓</td></tr>' +
             '<tr class="rv x2"><td>C</td><td>✓</td><td>✓</td><td>✓</td></tr></table>' },
        { s: 'Çeldiricilerde genelde şartların ikisi vardır, biri eksiktir. Gördün mü, A ile B tam olarak böyle.', on: '.x1' },
        { s: 'Üç şartın üçünü de taşıyan şık doğrudur. Tek tek işaretlemeden bu sorular çözülmez.', on: '.x2', mk: '.x2 td' },
        { s: 'Bir püf nokta daha: İşi yapan kişi ile yaptıran kişi farklı olabilir. Tekeri patlayınca ustayı çağıran kişi, sorunu kendisi çözmemiştir.',
          h: '<div class="an-trap">“Kendi çözümünü üretmek” isteniyorsa, ustayı çağıran kişi <b>örnek olamaz</b>: sorunu çözen usta.</div>' }
      ] },

    { t: 'Duygu soruları',
      base: '<table class="an-tbl"><tr><th>Metindeki davranış</th><th>Duygu</th></tr>' +
        '<tr class="rv f1"><td>burnundan solumak, yumruk sıkmak</td><td><b>Öfke</b></td></tr>' +
        '<tr class="rv f2"><td>sürekli saate bakmak, bir o yana bir bu yana yürümek</td><td><b>Sabırsızlık</b></td></tr>' +
        '<tr class="rv f3"><td>gözlerime inanamadım</td><td><b>Şaşkınlık</b></td></tr>' +
        '<tr class="rv f4"><td>anlayışla karşılayıp gülümsemek</td><td><b>Hoşgörü</b></td></tr>' +
        '<tr class="rv f5"><td>keşke, hiç yapmamalıydım</td><td><b>Pişmanlık</b></td></tr>' +
        '<tr class="rv f6"><td>bizden sonrakiler sorarsa ne diyeceğiz?</td><td><b>Kaygı</b></td></tr></table>',
      steps: [
        { s: 'Duygu sorularında duygu çoğu zaman adıyla verilmez. Davranışla, beden diliyle sezdirilir.' },
        { s: 'Burnundan solumak öfkeyi, sürekli saate bakmak sabırsızlığı gösterir.', on: '.f1,.f2' },
        { s: '“Gözlerime inanamadım” şaşkınlık, anlayışla gülümsemek ise hoşgörüdür.', on: '.f3,.f4' },
        { s: '“Keşke” pişmanlık bildirir. Gelecek için “ne diyeceğiz” diye sormak da kaygıdır.', on: '.f5,.f6' },
        { s: 'Şimdi iki önemli tuzak. Birincisi: Duyguyu bulduktan sonra mutlaka “Bunu kim yaşıyor?” diye sor.', v: 'Şimdi iki önemli tuzak. Birincisi: Duyguyu bulduktan sonra mutlaka, bunu kim yaşıyor, diye sor.',
          h: '<div class="an-trap">Metinde şaşırma var ama şaşıran <b>anlatıcı değil</b>, başka bir kişi olabilir. Soru kimin duygusunu soruyor?</div>' },
        { s: 'İkincisi: Geleceğe yönelik iki zıt duyguyu, umutla kaygıyı karıştırma. Metin geleceğe kaygıyla bakıyorsa şıktaki umut yanlıştır.' }
      ] },

    { t: 'Duyguyu davranıştan tanı',
      steps: [{ s: 'Duygular adıyla verilmedi. Her davranışı sezdirdiği duyguyla eşleştir.' }],
      ia: {
        tip: 'eslestir',
        q: '<p>Her cümleyi sezdirdiği duyguyla eşleştir.</p>',
        solBaslik: 'Davranış',
        sagBaslik: 'Duygu',
        sol: ['Yumruklarını sıkıp kapıyı çarptı.', 'Sırası gelsin diye yerinde duramıyordu.', '“Neden onu dinlemedim?” diye hayıflandı.', 'Ağzı açık kalakaldı.', 'Kırılan vazoya bakıp “Önemli değil.” dedi.', 'Sınav sonucunu düşündükçe uykusu kaçıyordu.'],
        sag: ['Öfke', 'Sabırsızlık', 'Pişmanlık', 'Şaşkınlık', 'Hoşgörü', 'Kaygı'],
        hint: 'Davranışı gözünün önüne getir: Kişi geçmişe mi yanıyor, gelecekten mi korkuyor, yoksa o an bir şeye mi kızıyor?',
        why: 'Kapıyı çarpmak öfke, yerinde duramamak sabırsızlık, hayıflanmak pişmanlık, ağzı açık kalmak şaşkınlıktır. Kırılan vazoyu önemsememek hoşgörü, sonucu düşünüp uyuyamamak da geleceğe dair kaygıdır.'
      } },

    { t: 'Ara soru', cp: {
        q: '<p>Otobüs yine gecikmişti. Ayşe durakta bir o yana bir bu yana yürüyor, durmadan saatine bakıyordu. Yanındaki yaşlı adam bu telaşı görünce anlayışla gülümsedi ve ona oturması için yer açtı.</p><p>Bu metne göre <b>Ayşe’nin</b> duygu durumu aşağıdakilerden hangisidir?</p>',
        c: ['Sabırsızlık', 'Hoşgörü', 'Özlem', 'Pişmanlık'], a: 'A',
        hint: 'Duyguyu bulduktan sonra sor: Bunu kim yaşıyor? Ayşe mi, yaşlı adam mı?',
        why: 'Bir o yana bir bu yana yürümek ve durmadan saate bakmak sabırsızlık gösterir. Hoşgörü metinde vardır ama onu yaşayan yaşlı adamdır, Ayşe değil.' },
      steps: [{ s: 'Bu soruda kimin duygusu sorulduğuna iyi bak.' }] },

    { t: 'Boşluk doldurma ve “hangi soruya cevap”',
      steps: [
        { s: 'Boşluk doldurma sorularında boşluktan hemen sonraki cümle çok önemlidir. Boşluğa gelecek düşünceyi en çok o belirler.' },
        { s: 'Birden çok boşluk varsa her şıkkı bir boşluğa yerleştirmeye çalış. Hiçbir yere oturmayan şık cevaptır.' },
        { s: '“Bu metin hangi soruya cevaptır?” sorularında ise metnin hem başını hem sonunu karşılayan soruyu seç.', v: 'Bu metin hangi soruya cevaptır, diye soran sorularda ise metnin hem başını hem sonunu karşılayan soruyu seç.',
          h: '<div class="an-ex"><span class="an-l">Metin: Çocukluğumun geçtiği mahalle… Burası eserlerimdeki karakterlere yön verdi.</span>' +
             '<span class="an-l"><span class="an-bad-t">Çocukluğunuz nasıl geçti?</span> ← yalnızca girişi karşılıyor</span>' +
             '<span class="an-l"><span class="an-ok-t">Çocukluğunuzun geçtiği yer eserlerinizi nasıl etkiledi?</span> ✓</span></div>' },
        { s: 'Gördüğün gibi ilk soru sadece metnin girişine uyuyor. Son cümledeki eserlere etkiyi karşılamıyor, yani eksik kalıyor.' }
      ] },

    { t: 'Boşluğu sonraki cümle belirler',
      steps: [{ s: 'İki boşluğu doldur. Her boşluk için hemen arkasındaki cümleye bak.' }],
      ia: {
        tip: 'bosluk',
        q: '<p>Boşluklara metnin akışına uygun ifadeleri yerleştir.</p>',
        metin: 'Bir ağacın gücü, gözle görülmeyen [_] gizlidir. Fırtınada dimdik durabilmesini, toprağın derinlerine uzanan bu yapıya borçludur. İnsan da böyledir: Onu ayakta tutan, [_].',
        secenek: ['köklerinde', 'dallarında', 'yapraklarında', 'içindeki değerlerdir', 'giydiği kıyafetlerdir', 'çevresindeki övgülerdir'],
        cevap: ['köklerinde', 'içindeki değerlerdir'],
        hint: 'Birinci boşluğu arkasındaki cümle açıklıyor: Toprağın derinlerine uzanan yapı nedir? İkinci boşlukta bu görünmeyen gücün insandaki karşılığını bul.',
        why: 'Toprağın derinlerine uzanan yapı köklerdir. İnsanı da dışarıdan görünmeyen bir güç ayakta tutar: içindeki değerler. Kıyafet ve övgü ise görünen, dıştan gelen şeylerdir.'
      } },

    { t: 'Yazarın amacı, görüşü, iki metin',
      steps: [
        { s: 'Yazarın amacı sorulduğunda metnin ne yaptığına bak.',
          h: '<table class="an-tbl"><tr><td><b>Bilgi aktarma</b></td><td>okurun bilmediği bir gerçeği aktarır</td></tr>' +
             '<tr><td><b>Yorumlama</b></td><td>olaydan bir sonuç çıkarır: “Bu durum … gösteriyor.”</td></tr>' +
             '<tr><td><b>İkna etme</b></td><td>kanıt sıralar, karşı görüşü çürütür</td></tr>' +
             '<tr><td><b>Öğüt verme</b></td><td>“-malı, -meli”, okura ne yapacağını söyler</td></tr></table>' },
        { s: 'Okuru bir davranışa yönlendiren cümle yoksa, orada ikna etme amacı da yoktur.' },
        { s: 'Kişinin özelliği sorulduğunda karar bağlamındır. “Kendini bir adım geriye atarak anlatmak” bir metinde alçak gönüllülük, başkasında tarafsızlık olabilir.' },
        { s: 'Metinde anlatılan her durum, yazarın eleştirdiği durum değildir. Yazar bir şeyi doğal karşılıyor da olabilir.' },
        { s: 'İki metin verilirse önce her birinin ana düşüncesini ayrı ayrı söyle. Ortak özellik sorusunda yalnızca bir metne uyan şık en güçlü çeldiricidir.' }
      ] },

    { t: 'Çeldirici kalıpları ve altın kural',
      steps: [
        { s: 'Son olarak bütün çeldiricileri bir arada görelim.',
          h: '<div class="an-grid"><div class="rv k1"><b>Sözcüğü aynı</b>yargı metinde yok</div><div class="rv k1"><b>Dar şık</b>yalnızca bir örnek</div><div class="rv k1"><b>Derece kayması</b>her zaman, tamamen</div>' +
             '<div class="rv k2"><b>Kişi kayması</b>duyguyu başkası yaşıyor</div><div class="rv k2"><b>Ters çevirme</b>eleştirdiğini savunuyor</div><div class="rv k2"><b>Eksik şart</b>üç şartın ikisi</div></div>' },
        { s: 'Sözcüğü aynı ama yargısı farklı şık, dar şık ve derece kayması. Bunları artık tanıyorsun.', on: '.k1' },
        { s: 'Kişi kayması, ters çevirme ve eksik şart da var. Bir de metinde olmayan sıra ya da neden kuran şıklar.', on: '.k2' },
        { s: 'Ve altın kural: Paragraf sorularında cevap metindedir. Kendi bilgin ya da “bence” yorumun cevap olamaz.',
          h: '<div class="an-rule"><b>Altın kural:</b> Her şıkkı metinde bir cümleye dayandır. Dayandıramıyorsan o şık metinden çıkarılamaz.</div>' },
        { s: 'Harika gidiyorsun! Şimdi bu yöntemi konu sorularında dene, göreceksin ne kadar işe yarıyor.' }
      ] }
  ]
};
