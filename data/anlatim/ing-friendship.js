/* Adım Adım Anlatım · İngilizce · 1. Ünite Friendship (biçim: tools/ANLATIM.md)
   Anlatım Türkçe; altyazıdaki [[...]] İngilizce bölümdür → <i lang="en">…</i> olur ve
   tools/anlatim_ses.py onu İngilizce sesle (en-US-AndrewNeural) okur. */
(function () {
  var L = {
  title: 'Friendship: Davet, Kabul, Ret ve Kişilik',
  desc: 'Davet etme, kabul ve ret kalıpları, mazeret bildirme, iyi ve kötü arkadaş sıfatları, davetiye kartı okuma ve LGS’nin “Why not?” tuzağı.',
  ozet: [
    'Davet: <b>Would you like to / Do you want to / Let’s / Why don’t we / Shall we</b> + yalın fiil; <b>How about / What about</b> + V-ing (ya da isim).',
    'Kabul: Sure! · Count me in! · That sounds great! · I’d love to. · <b>Yeah, why not?</b> · <b>I can’t refuse this offer!</b> (olumsuz görünür ama kabuldür).',
    'Ret: Sorry, I can’t. · I’m afraid I can’t. · <b>I’d love to, but…</b> (ret + mazeret). Mazeret: I have to… / I’m going to… / My parents won’t let me.',
    'Olumlu: trustworthy, reliable, supportive, honest, generous, laid-back, tactful, determined, understanding. Olumsuz: selfish, stubborn, arrogant, two-faced, bad-tempered, jealous, mean, unreliable.',
    '“never tells my secrets”, “doesn’t forget my birthday”, “never gives up” olumsuz yapılı ama <b>olumlu</b> anlamlıdır.',
    'back up = support · count on = rely on = trust · get on well with = get along with · have a lot in common = share interests.',
    'Davetiye: When (tarih/saat), Where (yer), How much (ücret), Who (gönderen/davetli), reply by (son cevap günü). Kartta yazmayan bilgi sorulamaz.'
  ],
  scenes: [
    { t: 'Friendship ünitesinde neler var?',
      base: '<div class="an-grid"><div class="rv g1"><b>Davet · Kabul · Ret</b>Would you like to…? / Sure! / Sorry, I can’t.</div><div class="rv g2"><b>Kişilik</b>reliable, selfish, generous…</div><div class="rv g3"><b>Davetiye kartı</b>When? Where? How much?</div></div>',
      steps: [
        { s: 'Merhaba! İngilizcenin ilk ünitesi [[Friendship]], yani arkadaşlık. LGS’de en çok soru gelen ünite de bu.' },
        { s: 'Üç ana konumuz var. Birincisi, birini davet etmek ve gelen daveti kabul ya da reddetmek.', on: '.g1' },
        { s: 'İkincisi, arkadaşlarımızı anlatan kişilik sıfatları: iyi arkadaş mı, kötü arkadaş mı?', on: '.g2' },
        { s: 'Üçüncüsü de davetiye kartı okumak. Hadi en çok sorulandan, davet kalıplarından başlayalım.', on: '.g3' }
      ] },

    { t: 'Davet etme kalıpları',
      base: '<table class="an-tbl"><tr><th>Kalıp</th><th>Örnek</th></tr>' +
        '<tr class="rv d1"><td><b>Would you like to</b> …?</td><td>Would you like to come to my party?</td></tr>' +
        '<tr class="rv d2"><td><b>Do you want to</b> …?</td><td>Do you want to play chess?</td></tr>' +
        '<tr class="rv d3"><td><b>Let’s</b> … / <b>Shall we</b> …?</td><td>Let’s go to the cinema.</td></tr>' +
        '<tr class="rv d4"><td><b>Why don’t we</b> …?</td><td>Why don’t we have a picnic?</td></tr>' +
        '<tr class="rv d5"><td><b>How about / What about</b> …?</td><td>How about going bowling?</td></tr>' +
        '<tr class="rv d6"><td><b>Are you free</b> …?</td><td>Are you free on Saturday?</td></tr></table>',
      steps: [
        { s: 'Birini bir etkinliğe çağırırken en kibar kalıp şu: [[Would you like to come to my party?]]', on: '.d1' },
        { s: 'Daha samimi hâli [[Do you want to play chess?]] Yani “satranç oynamak ister misin?”', on: '.d2' },
        { s: '[[Let’s]] “hadi yapalım” demek. [[Shall we]] ise “yapalım mı” diye sorar.', on: '.d3' },
        { s: '[[Why don’t we have a picnic?]] Bu soru gibi görünür ama aslında bir öneridir: “Hadi piknik yapalım.”', on: '.d4' },
        { s: '[[How about going bowling?]] Yani “[[bowling]] oynamaya gitsek mi, ne dersin?” Bunun fiil biçimine birazdan çok dikkat edeceğiz.', on: '.d5' },
        { s: 'Bir de önce müsait mi diye sorarız: [[Are you free on Saturday?]]', on: '.d6' }
      ] },

    { t: 'Fiil yalın mı, -ing mi?',
      steps: [
        { s: 'Şimdi küçük ama önemli bir kural. Bazı kalıplardan sonra fiil yalın gelir.',
          h: '<div class="an-rule"><b>Would you like to · Do you want to · Let’s · Why don’t we · Shall we</b> + <b>yalın fiil</b><br><small>Would you like to <span class="an-w">watch</span> a film? · Let’s <span class="an-w">go</span> swimming.</small></div>' },
        { s: 'Mesela [[Would you like to watch a film?]] Burada [[watch]] yalın hâlde.' },
        { s: '[[How about]] ve [[What about]] ise fiile ing takısı ister. Ya da arkasından direkt bir isim gelir.',
          h: '<div class="an-rule"><b>How about · What about</b> + <b>fiil-ing</b> ya da <b>isim</b><br><small>How about <span class="an-w">going</span> to the cinema? · What about <span class="an-w">a pizza</span>?</small></div>' },
        { s: 'Yani [[How about going to the cinema?]] doğru; ama [[how about go]] yanlış olur.',
          h: '<div class="an-ex"><span class="an-l"><span class="an-ok-t">How about going to the cinema?</span> ✓</span><span class="an-l"><span class="an-bad-t">How about go to the cinema?</span> ✗</span></div>' }
      ] },

    { t: 'Kalıbı tamamla: yalın mı, -ing mi?',
      steps: [{ s: 'Üç davet cümlesini tamamla. Önce boşluğa, sonra karta dokun. Kalıba bak: fiil yalın mı kalıyor, ing takısı mı alıyor?' }],
      ia: { tip: 'bosluk', q: '<p>Davet cümlelerini doğru fiil biçimiyle tamamla.</p>',
        metin: 'How about [_] to the cinema?<br>Would you like to [_] a film?<br>Why don’t we [_] a picnic?',
        secenek: ['going', 'go', 'watch', 'watching', 'have', 'having'], cevap: ['going', 'watch', 'have'],
        hint: 'Üç kalıptan yalnızca biri ing takısı istiyordu. Hangisiydi? Diğer ikisinde fiil yalın kalır.',
        why: '[[How about going]] doğru, çünkü [[How about]] ing ister. [[Would you like to watch]] ve [[Why don’t we have]] ise yalın fiille kurulur.' } },

    { t: 'Daveti kabul etmek',
      base: '<div class="an-grid"><div class="rv k1"><b>Sure!</b>Tabii!</div><div class="rv k1"><b>Of course!</b>Elbette!</div><div class="rv k1"><b>I’d love to.</b>Çok isterim.</div>' +
        '<div class="rv k2"><b>Count me in!</b>Beni de say!</div><div class="rv k2"><b>That sounds great!</b>Harika olur!</div><div class="rv k2"><b>I’ll be there.</b>Orada olacağım.</div>' +
        '<div class="rv k3"><b>Yeah, why not?</b>Neden olmasın?</div><div class="rv k3"><b>I can’t refuse!</b>Reddedemem!</div><div class="rv k3"><b>Nothing better to do</b>Daha iyi işim yok</div></div>',
      steps: [
        { s: 'Davet geldi, gitmek istiyoruz. En basit cevaplar: [[Sure!]] [[Of course!]] ve [[I’d love to.]]', on: '.k1' },
        { s: 'Biraz daha coşkulu olanlar: [[Count me in!]] yani “beni de say”, [[That sounds great!]] ve [[I’ll be there.]]', on: '.k2' },
        { s: 'Şimdi şu üçüne çok dikkat et. [[Yeah, why not?]] [[I can’t refuse this offer!]] ve [[I have nothing better to do.]]', on: '.k3', mk: '.k3' },
        { s: 'İçlerinde [[not]] ya da [[can’t]] geçiyor diye ret sanma. Üçü de kabul cümlesi.' }
      ] },

    { t: 'Reddetmek ve mazeret bildirmek',
      steps: [
        { s: 'Gelemeyeceksek kibarca reddederiz: [[Sorry, I can’t.]] ya da [[I’m afraid I can’t.]]',
          h: '<div class="an-rule"><b>Ret:</b> Sorry, I can’t. · I’m afraid I can’t. · Maybe another time. · <b>I’d love to, but…</b></div>' },
        { s: 'Genelde arkasından bir mazeret gelir. Mazeretin fiillerine bak: zorunluluk, plan ya da aile izni.',
          h: '<div class="an-ex"><span class="an-l">I <span class="an-w">have to</span> study for my exam. <small>(zorunluluk)</small></span><span class="an-l">I’m <span class="an-w">going to</span> visit my grandparents. <small>(plan)</small></span><span class="an-l">My parents <span class="an-w">won’t let me</span>. <small>(aile izin vermiyor)</small></span></div>' },
        { s: 'Mesela [[I have to study for my exam.]] Ya da [[My parents won’t let me.]]' },
        { s: 'Ve en meşhuru: [[I’d love to, but I have a dentist appointment.]] “Çok isterdim ama” diye başlıyor.' },
        { s: 'Burada [[I’d love to]] ile başlıyor diye kabul sanma. Arkasından [[but]] geliyorsa bu bir ret.',
          h: '<div class="an-trap"><b>I’d love to, but…</b> = RET + mazeret<br><b>Yeah, why not?</b> · <b>I can’t refuse!</b> = KABUL</div>' }
      ] },

    { t: 'Kabul mü, ret mi?',
      steps: [{ s: 'Sekiz cevabı iki kutuya ayır: daveti kabul edenler ve reddedenler. Önce cevaba, sonra kutusuna dokun.' }],
      ia: { tip: 'grup', q: '<p>“Would you like to come to my party?” sorusuna verilen cevapları ayır.</p>',
        gruplar: ['Kabul ✓', 'Ret ✗'],
        ogeler: [{ m: 'Count me in!', g: 0 }, { m: 'Yeah, why not?', g: 0 }, { m: 'I can’t refuse!', g: 0 }, { m: 'Nothing better to do!', g: 0 },
          { m: 'I’d love to, but…', g: 1 }, { m: 'I’m afraid I can’t.', g: 1 }, { m: 'Maybe another time.', g: 1 }, { m: 'My parents won’t let me.', g: 1 }],
        hint: 'İçinde [[not]] ya da [[can’t]] geçiyor diye hemen ret deme. Arkasından [[but]] gelen cevaba da dikkat et.',
        why: '[[Why not?]], [[I can’t refuse]] ve [[nothing better to do]] olumsuz görünür ama kabuldür. [[I’d love to, but]] ise mazeretli bir ret.' } },

    { t: 'Ara soru', cp: {
        q: '<p><b>Ece:</b> Would you like to come to my birthday party on Saturday?</p>' +
           '<p><b>Ali:</b> Yeah, why not? &nbsp;<b>Zeynep:</b> I’d love to, but I have to visit my aunt. &nbsp;<b>Can:</b> I’m afraid I can’t come. &nbsp;<b>Deniz:</b> I can’t refuse your invitation!</p>' +
           '<p>Which friend <b>refuses</b> the invitation <b>without giving an excuse</b>?</p>',
        c: ['Can', 'Ali', 'Zeynep', 'Deniz'], a: 'A',
        hint: 'Önce kabul edenleri ele: [[Why not?]] ve [[I can’t refuse]] kabuldür. Kalan iki kişiden hangisi sebep söylemiyor?',
        why: 'Ali ve Deniz kabul ediyor. Zeynep reddediyor ama halasını ziyaret edeceğini söylüyor. Can ise [[I’m afraid I can’t come]] deyip hiçbir sebep vermiyor.' },
      steps: [{ s: 'Sıra sende. Dört arkadaşın cevabını oku, şıkkı seç ve İşaretle’ye bas.' }] },

    { t: 'İyi arkadaşın sıfatları',
      base: '<table class="an-tbl"><tr><th>Sıfat</th><th>LGS’de verilen tanım</th></tr>' +
        '<tr class="rv p1"><td><b>trustworthy / reliable</b><br><small>güvenilir</small></td><td>keeps secrets, you can count on him</td></tr>' +
        '<tr class="rv p2"><td><b>supportive</b><br><small>destekleyici</small></td><td>always backs me up, helps me when I’m in trouble</td></tr>' +
        '<tr class="rv p3"><td><b>honest</b><br><small>dürüst</small></td><td>always tells the truth, never lies</td></tr>' +
        '<tr class="rv p4"><td><b>generous</b><br><small>cömert</small></td><td>likes sharing things with friends</td></tr>' +
        '<tr class="rv p5"><td><b>laid-back · tactful · determined</b></td><td>calm · careful not to hurt others · never gives up</td></tr></table>',
      steps: [
        { s: 'LGS sıfatın kendisini nadiren verir. Metinde tanımını verir, şıklarda sıfatı sorar. O yüzden tanımlarla öğrenelim.' },
        { s: '[[Trustworthy]] ya da [[reliable]]: güvenilir. Sır tutar, ona güvenebilirsin.', on: '.p1' },
        { s: '[[Supportive]]: destekleyici. Başın dertteyken sana arka çıkar.', on: '.p2' },
        { s: '[[Honest]]: dürüst. Hep doğruyu söyler, asla yalan söylemez.', on: '.p3' },
        { s: '[[Generous]]: cömert. Eşyasını, yiyeceğini arkadaşlarıyla paylaşmayı sever.', on: '.p4' },
        { s: 'Bir de [[laid-back]] yani rahat ve sakin; [[tactful]] yani kimseyi kırmamaya özen gösteren; [[determined]] yani asla pes etmeyen.', on: '.p5' }
      ] },

    { t: 'Sıfatı tanımıyla eşleştir',
      steps: [{ s: 'LGS gibi düşün: tanımı oku, sıfatı bul. Her sıfatı onu anlatan tanımla eşleştir.' }],
      ia: { tip: 'eslestir', q: '<p>Her sıfatı LGS’deki tanımıyla eşleştir.</p>', solBaslik: 'Sıfat', sagBaslik: 'Tanım',
        sol: ['trustworthy', 'supportive', 'generous', 'tactful', 'determined'],
        sag: ['keeps my secrets', 'always backs me up', 'loves sharing', 'never hurts feelings', 'never gives up'],
        hint: '[[Back up]] arka çıkmak, [[share]] paylaşmak demek. Kimseyi kırmamaya özen gösteren kişiyi anlatan sıfat hangisiydi?',
        why: '[[Trustworthy]] sır tutar, [[supportive]] arka çıkar, [[generous]] paylaşır, [[tactful]] kimseyi kırmaz, [[determined]] asla pes etmez.' } },

    { t: 'Kötü arkadaşın sıfatları',
      base: '<div class="an-grid"><div class="rv n1"><b>selfish</b>only thinks about himself</div><div class="rv n1"><b>stubborn</b>never changes his mind</div><div class="rv n1"><b>arrogant</b>thinks he is better than others</div>' +
        '<div class="rv n2"><b>two-faced</b>does things behind your back</div><div class="rv n2"><b>bad-tempered</b>gets angry easily</div><div class="rv n2"><b>jealous</b>unhappy when friends succeed</div>' +
        '<div class="rv n3"><b>mean</b>hates sharing</div><div class="rv n3"><b>unreliable</b>shares your secrets</div><div class="rv n3"><b>rude</b>not polite</div></div>',
      steps: [
        { s: 'Şimdi de kaçınacağımız arkadaşlar. [[Selfish]]: bencil, sadece kendini düşünür. [[Stubborn]]: inatçı. [[Arrogant]]: kibirli.', on: '.n1' },
        { s: '[[Two-faced]]: ikiyüzlü, arkandan iş çevirir. [[Bad-tempered]]: çabuk sinirlenir. [[Jealous]]: kıskanç.', on: '.n2' },
        { s: '[[Mean]]: cimri ya da kaba. [[Unreliable]]: güvenilmez, sırlarını başkasına anlatır.', on: '.n3' }
      ] },

    { t: 'Kötü arkadaşı ele',
      steps: [{ s: 'Sekiz sıfattan kötü arkadaşı anlatanları ele. Geriye yalnızca iyi bir arkadaşın sıfatları kalsın.' }],
      ia: { tip: 'eleme', q: '<p>Kötü arkadaşı anlatan sıfatları <b>ele</b>.</p>',
        ogeler: ['reliable', 'selfish', 'laid-back', 'two-faced', 'honest', 'stubborn', 'generous', 'mean'], ele: [1, 3, 5, 7],
        hint: 'Emin olamadığın sıfatın tanımını hatırla: [[laid-back]] sakin ve rahat biri, [[mean]] ise paylaşmayı sevmeyen biri.',
        why: '[[Selfish]] bencil, [[two-faced]] ikiyüzlü, [[stubborn]] inatçı, [[mean]] cimri. Kalanlar güvenilir, rahat, dürüst ve cömert arkadaşlar.' } },

    { t: 'Tuzak: olumsuz cümle, olumlu anlam',
      steps: [
        { s: 'Şimdi burada çok dikkat et. LGS’de en sık düşülen tuzaklardan biri bu.' },
        { s: '[[She never tells my secrets to anyone.]] Cümlede [[never]] var ama anlam çok olumlu. Bu kişi güvenilir.',
          h: '<table class="an-tbl"><tr class="rv t1"><td>She <span class="an-w">never</span> tells my secrets.</td><td>→ <b>trustworthy</b> 👍</td></tr>' +
             '<tr class="rv t2"><td>He <span class="an-w">doesn’t</span> forget my birthday.</td><td>→ <b>caring</b> 👍</td></tr>' +
             '<tr class="rv t3"><td>She <span class="an-w">never</span> gives up.</td><td>→ <b>determined</b> 👍</td></tr>' +
             '<tr class="rv t4"><td>He <span class="an-w">never</span> keeps his promises.</td><td>→ <b>unreliable</b> 👎</td></tr></table>', on: '.t1' },
        { s: '[[He doesn’t forget my birthday.]] Doğum günümü unutmuyor. Yine olumlu.', on: '.t2' },
        { s: '[[She never gives up.]] Asla pes etmiyor. Bu da kararlı, yani [[determined]].', on: '.t3' },
        { s: 'Ama [[He never keeps his promises.]] Sözünü hiç tutmuyor. İşte bu olumsuz. Kelimeye değil, anlamın tamamına bak.', on: '.t4', mk: '.t4 td' }
      ] },

    { t: 'Olumsuz cümle tuzağı',
      steps: [{ s: 'Her cümle için yorumun doğru olup olmadığına karar ver. Kelimeye değil, anlamın tamamına bak.' }],
      ia: { tip: 'dogruyanlis', q: '<p>Cümle ile yorumu uyuşuyor mu?</p>', ifadeler: [
          { m: '“He never lies to me.” → Arkadaşı dürüst.', d: true, a: 'Asla yalan söylemiyor: honest 👍' },
          { m: '“She doesn’t forget my birthday.” → Olumsuz bir özellik.', d: false, a: 'Doğum gününü unutmuyor: ilgili, yani olumlu.' },
          { m: '“She never shares her snacks.” → Arkadaşı cömert.', d: false, a: 'Paylaşmıyor: mean ya da selfish 👎' },
          { m: '“He always talks behind my back.” → Arkadaşı ikiyüzlü.', d: true, a: 'Arkandan konuşuyor: two-faced 👎' }],
        hint: '[[Never]] ya da [[doesn’t]] görünce hemen olumsuz deme. Yapılmayan şey iyi bir şey mi, kötü bir şey mi?',
        why: 'Yalan söylememek ve doğum gününü unutmamak olumlu. Atıştırmalığını paylaşmamak ve arkadan konuşmak ise olumsuz. Anlamın tamamına baktın, aferin!' } },

    { t: 'Eş anlamlı ifadeler',
      steps: [
        { s: 'Şıklar genelde aynı şeyi farklı kelimelerle söyler. Bu eşleşmeleri bilirsen soru çok kolaylaşır.',
          h: '<table class="an-tbl"><tr class="rv e1"><td><b>back up</b></td><td>= support = help</td></tr>' +
             '<tr class="rv e2"><td><b>count on</b></td><td>= rely on = depend on = trust</td></tr>' +
             '<tr class="rv e3"><td><b>get on well with</b></td><td>= get along with</td></tr>' +
             '<tr class="rv e4"><td><b>have a lot in common</b></td><td>= share similar interests</td></tr>' +
             '<tr class="rv e5"><td><b>buddy · mate · pal</b></td><td>= close friend</td></tr></table>' },
        { s: '[[Back up]], arka çıkmak demek. Yani [[support]] ile aynı.', on: '.e1' },
        { s: '[[Count on]], [[rely on]] ve [[depend on]]: üçü de “güvenmek”.', on: '.e2' },
        { s: '[[Get on well with]] ve [[get along with]]: biriyle iyi geçinmek.', on: '.e3' },
        { s: '[[Have a lot in common]]: çok ortak noktası olmak, yani benzer şeyleri sevmek.', on: '.e4' },
        { s: 'Ve yakın arkadaş için [[buddy]], [[mate]], [[pal]] da kullanılır.', on: '.e5' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Students are talking about their best friends.</p><p><b>Ayşe:</b> She never shares my secrets with others.<br><b>Mert:</b> He doesn’t forget my birthday.<br><b>Elif:</b> She never thinks about other people’s feelings.<br><b>Kaan:</b> He never gives up until he gets what he wants.</p><p>Who is talking about a <b>negative</b> trait of a friend?</p>',
        c: ['Ayşe', 'Mert', 'Elif', 'Kaan'], a: 'C',
        hint: 'Hepsinde olumsuz kelime var. Cümlenin bütün anlamına bak: hangisi arkadaşı kötü gösteriyor?',
        why: 'Elif’in arkadaşı başkalarının duygularını hiç düşünmüyor; bu bencillik, yani [[selfish]]. Ayşe’nin arkadaşı güvenilir, Mert’inki ilgili, Kaan’ınki kararlı.' },
      steps: [{ s: 'Şimdi bu tuzağı sen yakala.' }] },

    { t: 'Davetiye kartını okumak',
      base: '<svg class="an-svg" viewBox="0 0 340 214" role="img" aria-label="Davetiye kartı ve bölümleri">' +
        '<rect x="4" y="4" width="212" height="206" rx="12" class="boxa"/>' +
        '<text x="110" y="28" font-size="14" font-weight="700" text-anchor="middle" class="acc">BOWLING PARTY!</text>' +
        '<text x="14" y="52" font-size="12.5" class="rv c1">Dear Selin,</text>' +
        '<text x="14" y="74" font-size="12" class="rv c2">Date: Sunday, May 24</text>' +
        '<text x="14" y="92" font-size="12" class="rv c2">Time: 6 p.m. – 10 p.m.</text>' +
        '<text x="14" y="114" font-size="12" class="rv c3">Place: Star Bowling, Atakum</text>' +
        '<text x="14" y="136" font-size="12" class="rv c4">Fee: 200 TL per person</text>' +
        '<text x="14" y="160" font-size="12" class="rv c5">Please reply by May 20.</text>' +
        '<text x="14" y="188" font-size="12.5" class="rv c1">Love, Mert</text>' +
        '<text x="226" y="52" font-size="12" class="mut rv c1">Who? (davetli)</text>' +
        '<text x="226" y="84" font-size="12" class="mut rv c2">When?</text>' +
        '<text x="226" y="114" font-size="12" class="mut rv c3">Where?</text>' +
        '<text x="226" y="136" font-size="12" class="mut rv c4">How much?</text>' +
        '<text x="226" y="160" font-size="12" class="mut rv c5">Son cevap günü</text>' +
        '<text x="226" y="188" font-size="12" class="mut rv c1">Who? (davet eden)</text></svg>',
      steps: [
        { s: 'Son konumuz davetiye kartı. Bir kartın her satırı bir soru kelimesine cevap verir. Bakalım.' },
        { s: 'Kart Selin’e yazılmış; onu davet eden de Mert. Yani kime ve kimden sorusu [[Who]] ile sorulur.', on: '.c1' },
        { s: 'Tarih ve saat [[When]] sorusunun cevabı: 24 Mayıs Pazar, akşam altıdan ona kadar.', on: '.c2' },
        { s: 'Yer [[Where]] sorusunun cevabı: Atakum’daki [[Star Bowling]] salonu.', on: '.c3' },
        { s: 'Ücret [[How much]] ile sorulur: kişi başı iki yüz lira.', on: '.c4' },
        { s: 'Ve [[Please reply by May 20]]: en geç 20 Mayıs’a kadar cevap ver demek. Bu, partinin tarihi değil!', on: '.c5', mk: '.c5' }
      ] },

    { t: 'Kartta “When?” sorusunun cevabı',
      steps: [{ s: 'Kerem kartı okuyor ve soruyor: parti ne zaman? Cevabı veren satırlara dokun, sonra Kontrol et’e bas.' }],
      ia: { tip: 'gorselsec', q: '<p>Kerem soruyor: <b>“When is the movie night?”</b> Cevabı veren satırlara dokun.</p>', dogru: ['m1', 'm2'],
        svg: '<svg class="an-svg" viewBox="0 0 340 252" role="img" aria-label="Film gecesi davetiyesi">' +
          '<text x="170" y="22" text-anchor="middle" font-size="16" font-weight="700" class="acc">MOVIE NIGHT!</text>' +
          '<g data-b="m0" aria-label="Dear Kerem"><rect x="10" y="34" width="320" height="36" rx="9" class="box"/><text x="22" y="57" font-size="14">Dear Kerem, join my movie night!</text></g>' +
          '<g data-b="m1" aria-label="Date"><rect x="10" y="76" width="320" height="36" rx="9" class="box"/><text x="22" y="99" font-size="14">Date: Friday, March 7</text></g>' +
          '<g data-b="m2" aria-label="Time"><rect x="10" y="118" width="320" height="36" rx="9" class="box"/><text x="22" y="141" font-size="14">Time: 7 p.m. – 10 p.m.</text></g>' +
          '<g data-b="m3" aria-label="Place"><rect x="10" y="160" width="320" height="36" rx="9" class="box"/><text x="22" y="183" font-size="14">Place: Ada’s house, Bornova</text></g>' +
          '<g data-b="m4" aria-label="Reply"><rect x="10" y="202" width="320" height="36" rx="9" class="box"/><text x="22" y="225" font-size="14">Please reply by March 3. — Ada</text></g></svg>',
        hint: 'Kartta iki ayrı tarih var. Biri partinin günü, diğeri en son cevap verme günü. [[When]] sorusu hangisini sorar? Saati de unutma.',
        why: 'Film gecesi 7 Mart Cuma, akşam yedide. [[Please reply by March 3]] ise son cevap günü; partinin tarihi değil.' } },

    { t: 'Ara soru', cp: {
        q: '<p><b>BEACH PICNIC!</b><br>Dear friends, join us for a picnic at Kordon Beach on Saturday, June 14, from 11 a.m. to 4 p.m. We will play volleyball and have a barbecue. It is free! Please reply by June 10. — Selin</p>' +
           '<p>Which question can <b>NOT</b> be answered according to the invitation?</p>',
        c: ['Where is the picnic?', 'What should the guests bring?', 'What will they do there?', 'How much does it cost?'], a: 'B',
        hint: 'Her şıkkın cevabını kartta ara. Yer, etkinlik ve ücret yazıyor mu? Hangisi yazmıyor?',
        why: 'Yer Kordon Beach, etkinlik voleybol ve mangal, ücret yok, yani [[It is free]]. Ama misafirlerin ne getireceği kartta hiç yazmıyor.' },
      steps: [{ s: 'Kartta yazmayan bilgi sorulamaz. Hadi bul bakalım.' }] },

    { t: 'Akılda kalsın',
      steps: [
        { s: 'Toparlayalım. Davette [[Would you like to]], [[Let’s]] ve [[Why don’t we]] yalın fiil ister; [[How about]] ing takısı ister.' },
        { s: '[[Why not?]] ve [[I can’t refuse]] kabuldür. [[I’d love to, but]] ise ret.' },
        { s: 'Kişilik sorularında olumsuz kelimeye değil, anlamın tamamına bak.' },
        { s: 'Davetiyede de yazmayan bilgiyi işaretle. Bu üniteden her yıl soru geliyor, sen hazırsın. Aferin!' }
      ] }
  ]
  };
  var en = function (t) { return typeof t === 'string' ? t.replace(/\[\[(.+?)\]\]/g, '<i lang="en">$1</i>') : t; };
  L.scenes.forEach(function (sc) {
    (sc.steps || []).forEach(function (st) { st.s = en(st.s); });
    if (sc.cp) { sc.cp.why = en(sc.cp.why); sc.cp.hint = en(sc.cp.hint); }
    if (sc.ia) { sc.ia.q = en(sc.ia.q); sc.ia.why = en(sc.ia.why); sc.ia.hint = en(sc.ia.hint); }
  });
  // son “Akılda kalsın” sahnesi: özet maddeleri adım adım belirir
  var last = L.scenes[L.scenes.length - 1];
  if (last && !last.base && !last.cp) {
    var ns = last.steps.length;
    last.base = '<div class="an-ex">' + L.ozet.map(function (o, i) { return '<span class="an-l rv oz' + Math.floor(i * ns / L.ozet.length) + '">' + o + '</span>'; }).join('') + '</div>';
    last.steps.forEach(function (st, k) { st.on = '.oz' + k; });
  }
  (window.LGS_AN = window.LGS_AN || {})['ing-friendship'] = L;
})();
