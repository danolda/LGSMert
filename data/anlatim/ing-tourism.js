/* Adım Adım Anlatım · İngilizce · 7. Ünite Tourism (biçim: tools/ANLATIM.md)
   Altyazıdaki [[...]] İngilizce bölümdür → <i lang="en">…</i>; tools/anlatim_ses.py İngilizce sesle okur. */
(function () {
  var L = {
  title: 'Tourism: Tatil, Konaklama ve Deneyimler',
  desc: 'Tatil türleri, konaklama ve pansiyon tipleri, havalimanı sözcükleri, gezilecek yerler, dolaylı yorumlar, Have you ever…? ve been / gone, tercih kalıpları, soru kelimeleri ve gün–gece hesabı.',
  ozet: [
    'Konaklama: hotel, resort, hostel (ucuz, oda paylaşılır), guesthouse / B&amp;B, campsite. book (rezervasyon) · fully booked (dolu) · check in / check out.',
    'B&amp;B = sadece kahvaltı · <b>half board</b> = kahvaltı + akşam yemeği · <b>full board</b> = üç öğün · all-inclusive = her şey dâhil.',
    'Havalimanı: boarding pass, gate, departure ↔ arrival, delayed (rötarlı), cancelled (iptal), aisle / window seat.',
    'Gezi: sightseeing, landmark, must-see, souvenir (hatıra eşyası), itinerary (gezi programı), entrance fee, guided tour.',
    'Dolaylı yorum: It didn’t live up to my expectations (hayal kırıklığı) · I’d move there tomorrow (çok sevdi) · but’tan sonrası şikâyettir.',
    'Have you ever been to …? — Yes, I have. I <b>went</b> there two years ago. Zaman belliyse Past Simple. has <b>been</b> to (gidip döndü) ≠ has <b>gone</b> to (hâlâ orada).',
    'I’d rather <b>stay</b> (rather to / staying ✗) · prefer … <b>to</b> … (prefer … than ✗).',
    'How long → For three days · How many times → Twice · How far → About 5 km · How often → Every summer. 4 günlük tur = 3 gece.'
  ],
  scenes: [
    { t: 'Tatil türleri',
      base: '<div class="an-grid"><div class="rv g1"><b>Seaside</b>swimming, sailing · Bodrum</div><div class="rv g2"><b>Cultural</b>museums, ruins · Ephesus</div><div class="rv g3"><b>Nature</b>camping, trekking · Uzungöl</div><div class="rv g4"><b>Winter</b>skiing · Uludağ</div><div class="rv g4"><b>City break</b>kısa şehir tatili</div><div class="rv g4"><b>Package tour</b>paket tur</div></div>',
      steps: [
        { s: 'Yedinci ünite [[Tourism]]. LGS’de en çok soru gelen ünitelerden biri. Sorular genelde gezi yazısı, ilan, tablo ve yorum üzerinden geliyor.' },
        { s: 'Tatil türleriyle başlayalım. Deniz tatili, yani [[seaside holiday]]: yüzme, yelken.', on: '.g1' },
        { s: 'Kültür tatili, [[cultural holiday]]: müzeler, antik kalıntılar.', on: '.g2' },
        { s: 'Doğa tatili, [[nature holiday]]: kamp ve doğa yürüyüşü.', on: '.g3' },
        { s: 'Bir de kış tatili, [[city break]] yani kısa şehir tatili ve [[package tour]] yani paket tur var.', on: '.g4' }
      ] },

    { t: 'Konaklama ve pansiyon tipleri',
      base: '<table class="an-tbl"><tr><th></th><th>breakfast</th><th>lunch</th><th>dinner</th></tr>' +
        '<tr class="rv b1"><td><b>B&amp;B</b></td><td>✓</td><td>✗</td><td>✗</td></tr>' +
        '<tr class="rv b2"><td><b>Half board</b></td><td>✓</td><td>✗</td><td>✓</td></tr>' +
        '<tr class="rv b3"><td><b>Full board</b></td><td>✓</td><td>✓</td><td>✓</td></tr>' +
        '<tr class="rv b4"><td><b>All-inclusive</b></td><td colspan="3">3 meals + snacks + drinks</td></tr></table>',
      steps: [
        { s: 'Konaklama yerleri: [[hotel]], [[resort]] yani tatil köyü, [[hostel]] yani gençlerin odayı paylaştığı ucuz yer, ve [[campsite]] kamp alanı.' },
        { s: 'Fiyata hangi yemekler dâhil? [[Bed and breakfast]]: sadece kahvaltı.', on: '.b1' },
        { s: '[[Half board]]: kahvaltı ve akşam yemeği. Öğle yemeği yok.', on: '.b2', mk: '.b2 td' },
        { s: '[[Full board]]: üç öğün de dâhil.', on: '.b3' },
        { s: '[[All-inclusive]]: üç öğün, atıştırmalıklar ve içecekler; her şey dâhil.', on: '.b4' },
        { s: 'Ve rezervasyon kelimeleri: [[book a room]], [[fully booked]] yani tamamen dolu, [[check in]] ve [[check out]].' }
      ] },

    { t: 'Konaklama kelimelerini eşleştir',
      steps: [{ s: 'Konaklama ve pansiyon kelimelerini anlamlarıyla eşleştir. Hangi öğünün dâhil olduğuna çok dikkat et.' }],
      ia: { tip: 'eslestir', q: '<p>Her kelimeyi anlamıyla eşleştir.</p>', solBaslik: 'Kelime', sagBaslik: 'Anlam',
        sol: ['bed and breakfast', 'half board', 'full board', 'all-inclusive', 'hostel', 'fully booked'],
        sag: ['yalnız kahvaltı', 'kahvaltı + akşam', 'üç öğün', 'her şey dâhil', 'ucuz, oda paylaşılır', 'boş oda yok'],
        hint: '[[Half board]] ile [[full board]] karışmasın: biri iki öğün, öteki üç öğün. [[Fully booked]] bir otel durumu.',
        why: '[[Bed and breakfast]] yalnız kahvaltı, [[half board]] kahvaltı ve akşam yemeği, [[full board]] üç öğün, [[all-inclusive]] her şey dâhil. [[Hostel]] ucuz ve paylaşımlı, [[fully booked]] tamamen dolu.' } },

    { t: 'Havalimanı ve ulaşım',
      steps: [
        { s: 'Ulaşım: [[by plane]], [[by bus]], [[by train]]. Ama yürüyerek derken [[on foot]] denir.',
          h: '<table class="an-tbl"><tr class="rv t1"><td><b>boarding pass · gate</b></td><td>biniş kartı · kapı</td></tr>' +
             '<tr class="rv t1"><td><b>departure ↔ arrival</b></td><td>kalkış ↔ varış</td></tr>' +
             '<tr class="rv t2"><td><b>on time · delayed · cancelled</b></td><td>zamanında · rötarlı · iptal</td></tr>' +
             '<tr class="rv t3"><td><b>window seat · aisle seat</b></td><td>cam kenarı · koridor</td></tr>' +
             '<tr class="rv t3"><td><b>luggage · one-way · return</b></td><td>bagaj · tek yön · gidiş-dönüş</td></tr></table>' },
        { s: 'Havalimanında: [[boarding pass]] biniş kartı, [[gate]] kapı. [[Departure]] kalkış, [[arrival]] varış.', on: '.t1' },
        { s: 'Kalkış tablosunda [[delayed]] rötarlı, [[cancelled]] iptal demek. Saat hesaplarken bunları kaçırma.', on: '.t2' },
        { s: 'Koltuk: [[window seat]] cam kenarı, [[aisle seat]] koridor. Bilet: [[one-way]] tek yön, [[return]] gidiş dönüş.', on: '.t3' }
      ] },

    { t: 'Kalkış tablosunu oku',
      steps: [{ s: 'Havalimanındaki kalkış tablosuna bak. Yazan saatte kalkmayacak uçuşları bul ve dokun, sonra Kontrol et’e bas.' }],
      ia: { tip: 'gorselsec', q: '<p><b>DEPARTURES</b> · Yazan saatte <b>kalkmayacak</b> uçuşlara dokun.</p>', dogru: ['f2', 'f3'],
        svg: '<svg class="an-svg" viewBox="0 0 340 196" role="img" aria-label="Kalkış tablosu">' +
          '<g data-b="f1" aria-label="Rome"><rect x="10" y="8" width="320" height="40" rx="9" class="box"/><text x="22" y="33" font-size="14">10:15  Rome</text><text x="318" y="33" font-size="14" text-anchor="end">Boarding</text></g>' +
          '<g data-b="f2" aria-label="Paris"><rect x="10" y="54" width="320" height="40" rx="9" class="box"/><text x="22" y="79" font-size="14">10:40  Paris</text><text x="318" y="79" font-size="14" text-anchor="end">Delayed 11:30</text></g>' +
          '<g data-b="f3" aria-label="London"><rect x="10" y="100" width="320" height="40" rx="9" class="box"/><text x="22" y="125" font-size="14">11:00  London</text><text x="318" y="125" font-size="14" text-anchor="end">Cancelled</text></g>' +
          '<g data-b="f4" aria-label="Berlin"><rect x="10" y="146" width="320" height="40" rx="9" class="box"/><text x="22" y="171" font-size="14">11:20  Berlin</text><text x="318" y="171" font-size="14" text-anchor="end">On time</text></g></svg>',
        hint: '[[Boarding]] yolcular uçağa biniyor, [[on time]] zamanında demek. Rötarlı ya da iptal olan uçuşlar hangileri?',
        why: 'Paris uçuşu rötarlı, on bir buçukta kalkacak. Londra uçuşu iptal. Roma ve Berlin uçuşları zamanında.' } },

    { t: 'Gezilecek yerler',
      base: '<div class="an-grid"><div class="rv s1"><b>sightseeing</b>gezip görmek</div><div class="rv s1"><b>landmark</b>simge yapı</div><div class="rv s1"><b>must-see</b>mutlaka görülmeli</div>' +
        '<div class="rv s2"><b>souvenir</b>hatıra eşyası</div><div class="rv s2"><b>itinerary</b>gezi programı</div><div class="rv s2"><b>guided tour</b>rehberli tur</div>' +
        '<div class="rv s3"><b>ruins</b>kalıntılar</div><div class="rv s3"><b>local cuisine</b>yöresel mutfak</div><div class="rv s3"><b>entrance fee</b>giriş ücreti</div></div>',
      steps: [
        { s: 'Gezmek [[go sightseeing]]. Bir şehrin simgesi [[landmark]]. Mutlaka görülmesi gereken yer [[a must-see]].', on: '.s1' },
        { s: 'Bu üçünü çok iyi bil: [[souvenir]] hatıra eşyası, [[itinerary]] gezi programı, [[guided tour]] rehberli tur.', on: '.s2' },
        { s: 'Ve [[ruins]] kalıntılar, [[local cuisine]] yöresel mutfak, [[entrance fee]] giriş ücreti.', on: '.s3' }
      ] },

    { t: 'Kelimeleri gruplara ayır',
      steps: [{ s: 'Dokuz turizm kelimesini üç kutuya ayır: konaklama, ulaşım ve gezi. Önce kelimeye, sonra kutusuna dokun.' }],
      ia: { tip: 'grup', q: '<p>Her kelimeyi doğru kutuya yerleştir.</p>', gruplar: ['Konaklama', 'Ulaşım', 'Gezi'],
        ogeler: [{ m: 'hostel', g: 0 }, { m: 'campsite', g: 0 }, { m: 'resort', g: 0 },
          { m: 'boarding pass', g: 1 }, { m: 'aisle seat', g: 1 }, { m: 'one-way ticket', g: 1 },
          { m: 'souvenir', g: 2 }, { m: 'guided tour', g: 2 }, { m: 'landmark', g: 2 }],
        hint: '[[Resort]] tatil köyü, [[aisle seat]] koridor koltuğu, [[souvenir]] hatıra eşyası, [[landmark]] bir şehrin simgesi demek.',
        why: 'Kalınan yerler: [[hostel]], [[campsite]], [[resort]]. Yolculuk: [[boarding pass]], [[aisle seat]], [[one-way ticket]]. Gezi: [[souvenir]], [[guided tour]], [[landmark]].' } },

    { t: 'Ara soru', cp: {
        q: '<p>Ada is looking for a hotel. She wants <b>breakfast and dinner</b> in the price, but she will have <b>lunch outside</b> every day.</p><p>Which option is the best for her?</p>',
        c: ['All-inclusive', 'Full board', 'Half board', 'Bed and breakfast'], a: 'C',
        hint: 'Kahvaltı ve akşam yemeği dâhil, öğle yemeği dâhil değil. Tablodaki hangi satır?',
        why: '[[Half board]] kahvaltı ve akşam yemeğini kapsar, öğle yemeğini kapsamaz. Tam Ada’nın istediği.' },
      steps: [{ s: 'Pansiyon tiplerini hatırla.' }] },

    { t: 'Yerleri betimlemek ve dolaylı yorum',
      steps: [
        { s: 'Olumlu sıfatlar: [[breathtaking]] nefes kesici, [[magnificent]] görkemli, [[peaceful]] huzurlu, [[well worth visiting]] görmeye değer.',
          h: '<table class="an-tbl"><tr><th>👍</th><th>👎</th></tr><tr><td>breathtaking · stunning · magnificent · peaceful · mouth-watering · well worth visiting</td><td>crowded · noisy · overpriced · disappointing · dirty</td></tr></table>' },
        { s: 'Olumsuzlar: [[crowded]] kalabalık, [[noisy]] gürültülü, [[overpriced]] fiyatına göre pahalı, [[disappointing]] hayal kırıklığı.' },
        { s: 'Şimdi dikkat. Yorumlar çoğu zaman duyguyu doğrudan söylemez. [[It didn’t live up to my expectations.]] Beklentimi karşılamadı, yani hayal kırıklığı.',
          h: '<div class="an-trap">“It didn’t live up to my expectations.” → <b>disappointed</b> 👎<br>“I’d move there tomorrow if I could.” → <b>loved it</b> 👍</div>' },
        { s: '[[I’d move there tomorrow if I could.]] Elimde olsa yarın oraya taşınırdım. Yani çok sevmiş.' },
        { s: 'Ve [[but]] kelimesine dikkat: [[The view was breathtaking, but the walls were thin.]] [[But]] sonrası şikâyettir.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Tourists wrote reviews about a hotel in Kapadokya.</p><p><b>Ali:</b> The view from my room was breathtaking.<br><b>Ece:</b> To be honest, it didn’t live up to my expectations.<br><b>Can:</b> I’d come back tomorrow if I could.<br><b>Su:</b> It’s well worth visiting, especially at sunrise.</p><p>Who is <b>disappointed</b> with the hotel?</p>',
        c: ['Ali', 'Can', 'Su', 'Ece'], a: 'D',
        hint: 'Beklentisinin karşılanmadığını söyleyen kim?',
        why: 'Ece [[it didn’t live up to my expectations]] diyor; yani otel beklentisini karşılamamış, hayal kırıklığına uğramış. Diğerleri çok memnun.' },
      steps: [{ s: 'Dolaylı yorumu yakala.' }] },

    { t: 'Deneyim anlatmak: Have you ever…?',
      steps: [
        { s: 'Hayatımızın herhangi bir anındaki seyahat deneyimini anlatırken [[have]] ya da [[has]] ve fiilin üçüncü hâli kullanılır.',
          h: '<div class="an-rule"><b>have / has + V3</b> · soruda <b>ever</b> (hiç), olumsuzda <b>never</b></div>' },
        { s: 'Soru: [[Have you ever been to Mardin?]] Hiç Mardin’e gittin mi?',
          h: '<table class="an-tbl"><tr class="rv p1"><td>Have you ever been to Mardin?</td><td>Yes, I have. I’ve been there twice.</td></tr>' +
             '<tr class="rv p2"><td>Has she ever tried kibbeh?</td><td>No, she hasn’t. She’s never tried it.</td></tr>' +
             '<tr class="rv p3"><td>How many times have you visited İzmir?</td><td>Once. / Twice. / Many times.</td></tr></table>', on: '.p1' },
        { s: 'Cevap: [[Yes, I have. I’ve been there twice.]] Ya da olumsuz: [[No, she hasn’t. She’s never tried it.]]', on: '.p2' },
        { s: 'Kaç kez gittiğini sormak için: [[How many times have you visited İzmir?]] Cevap [[Twice]].', on: '.p3' },
        { s: 'Sık kullanılan üçüncü hâller: [[be, been]], [[go, gone]], [[see, seen]], [[eat, eaten]], [[fly, flown]].' }
      ] },

    { t: 'Deneyim diyaloğunu tamamla',
      steps: [{ s: 'Kısa bir deneyim diyaloğu. Üç boşluğu doğru kartlarla doldur.' }],
      ia: { tip: 'bosluk', q: '<p>Diyaloğu tamamla.</p>',
        metin: '<b>Ece:</b> Have you ever [_] to Mardin?<br><b>Arda:</b> Yes, I [_]. I’ve been there [_].',
        secenek: ['been', 'go', 'have', 'did', 'twice', 'ago'], cevap: ['been', 'have', 'twice'],
        hint: '[[Have you ever]] sorusunda fiilin üçüncü hâli gelir. Kısa cevap soruyla aynı yardımcı fiili kullanır. Kaç kez gittiğini hangi kelime söyler?',
        why: '[[Have you ever been]], cevabı [[Yes, I have]]. [[I’ve been there twice]]: iki kez gittim. [[Ago]] ise geçmiş zamanla kullanılır, burada olmaz.' } },

    { t: 'been mi, gone mu?',
      base: '<svg class="an-svg" viewBox="0 0 340 168" role="img" aria-label="has been: gidip döndü; has gone: hâlâ orada">' +
        '<text x="84" y="18" font-size="13" font-weight="700" text-anchor="middle" class="acc rv n1">He has BEEN to Antalya.</text>' +
        '<rect x="14" y="30" width="54" height="30" rx="7" class="boxa rv n1"/><text x="41" y="50" font-size="12" text-anchor="middle" class="rv n1">HOME</text>' +
        '<rect x="104" y="30" width="60" height="30" rx="7" class="box rv n1"/><text x="134" y="50" font-size="12" text-anchor="middle" class="rv n1">Antalya</text>' +
        '<path class="st dr n1" d="M70 40 L102 40"/><path class="st dr n1" d="M102 52 L70 52"/>' +
        '<text x="84" y="80" font-size="11.5" text-anchor="middle" class="mut rv n1">gitti ve döndü (deneyim)</text>' +
        '<text x="256" y="104" font-size="13" font-weight="700" text-anchor="middle" class="rv n2">He has GONE to Antalya.</text>' +
        '<rect x="186" y="116" width="54" height="30" rx="7" class="box rv n2"/><text x="213" y="136" font-size="12" text-anchor="middle" class="rv n2">HOME</text>' +
        '<rect x="276" y="116" width="60" height="30" rx="7" class="boxa rv n2"/><text x="306" y="136" font-size="12" text-anchor="middle" class="rv n2">Antalya</text>' +
        '<path class="st2 dr n2" d="M242 131 L274 131"/>' +
        '<text x="256" y="162" font-size="11.5" text-anchor="middle" class="mut rv n2">gitti, hâlâ orada</text></svg>',
      steps: [
        { s: 'İki cümle çok benzer ama anlamları farklı. [[He has been to Antalya.]] Antalya’ya gitti ve geri döndü. Bu bir deneyim.', on: '.n1' },
        { s: '[[He has gone to Antalya.]] Gitti ve henüz dönmedi. Şu an Antalya’da ya da yolda.', on: '.n2' }
      ] },

    { t: 'Tuzak: zaman belliyse geçmiş zaman',
      steps: [
        { s: 'Şimdi çok dikkat. Zaman belliyse, yani [[last summer]], [[two years ago]], [[in 2023]] gibi bir ifade varsa, geçmiş zaman kullanılır.',
          h: '<div class="an-ex"><span class="an-l"><span class="an-ok-t">I went there last spring.</span> ✓</span><span class="an-l"><span class="an-bad-t">I have been there last spring.</span> ✗</span></div>' },
        { s: '[[I went there last spring]] doğru. Ama [[I have been there last spring]] yanlış.' },
        { s: 'Tipik diyalog şöyledir: [[Have you ever been to Kars? Yes, I have. I went there two years ago.]]',
          h: '<div class="an-rule">Soru → <b>Have you ever…?</b> · Cevap → <b>Yes, I have.</b> · Ayrıntı → <b>Past Simple</b> (went, stayed, saw)</div>' },
        { s: 'Ve tercih kalıplarında fiil biçimine dikkat: [[I’d rather stay]] doğru; [[prefer]] ile de [[to]] gelir, [[than]] gelmez.',
          h: '<div class="an-trap">I’d rather <span class="an-bad-t">to stay</span> ✗ · I’d rather <span class="an-bad-t">staying</span> ✗ · I’d rather <b>stay</b> ✓<br>I prefer camping <b>to</b> staying at a hotel ✓</div>' }
      ] },

    { t: 'been, gone ve zaman tuzağı',
      steps: [{ s: 'Her ifadeye karar ver: doğru mu, yanlış mı? Gidip döndü mü, hâlâ orada mı? Zaman belli mi?' }],
      ia: { tip: 'dogruyanlis', q: '<p>Her ifade için karar ver.</p>', ifadeler: [
          { m: '“He has gone to Antalya.” → Şu an evinde.', d: false, a: 'gone: gitti, henüz dönmedi.' },
          { m: '“She has been to Rome twice.” → Roma’ya iki kez gidip döndü.', d: true, a: 'been: gidip dönmek, deneyim.' },
          { m: '“I have been there last spring.” doğru bir cümle.', d: false, a: 'Zaman belli: I went there last spring.' },
          { m: '“I went to Kars two years ago.” doğru bir cümle.', d: true, a: 'two years ago → geçmiş zaman.' }],
        hint: '[[Been]] ile [[gone]] arasındaki fark dönüp dönmemek. [[Last spring]] gibi belli bir zaman varsa hangi zaman kullanılır?',
        why: '[[Gone]] hâlâ orada ya da yolda demek; [[been]] gidip dönmek. Zaman belliyse [[have been]] değil, geçmiş zaman kullanılır: [[I went there]].' } },

    { t: 'Soru kelimeleri',
      base: '<table class="an-tbl"><tr><th>Soru</th><th>Cevap</th></tr>' +
        '<tr class="rv w1"><td>How long did you stay?</td><td>For three days.</td></tr>' +
        '<tr class="rv w2"><td>How many times …?</td><td>Twice.</td></tr>' +
        '<tr class="rv w3"><td>How far is it?</td><td>About 5 km.</td></tr>' +
        '<tr class="rv w4"><td>How often …?</td><td>Every summer.</td></tr>' +
        '<tr class="rv w5"><td>How did you get there?</td><td>By bus.</td></tr></table>',
      steps: [
        { s: 'Gezi diyaloglarında cevaba bakıp soruyu bulma sorusu çok çıkar. [[How long]] süre: [[For three days]].', on: '.w1' },
        { s: '[[How many times]] sayı: [[Twice]]. [[How far]] mesafe: [[About five kilometres]].', on: '.w2,.w3' },
        { s: '[[How often]] sıklık: [[Every summer]]. [[How did you get there?]] ulaşım: [[By bus]].', on: '.w4,.w5' }
      ] },

    { t: 'Gezi diyaloğunu sırala',
      steps: [{ s: 'Bir gezi diyaloğunun satırları karışmış. Her satır bir öncekine cevap veriyor. Baştan sona sırala.' }],
      ia: { tip: 'sirala', q: '<p>Diyaloğu baştan sona sırala.</p>', ust: 'ilk satır', alt: 'son satır',
        ogeler: ['Have you ever been to Kars?', 'Yes, I went there last winter.', 'How did you get there?', 'By train. It took a whole day!', 'A whole day? That’s long!'],
        hint: 'Diyalog [[Have you ever]] sorusuyla başlar. [[By train]] hangi sorunun cevabı? [[A whole day]] diye şaşıran kişi neye şaşırıyor?',
        why: 'Önce deneyim sorulur, cevapta zaman belli olduğu için geçmiş zaman gelir. Sonra ulaşım sorulur: [[By train]]. En sonda da yolculuğun süresine şaşırılır.' } },

    { t: 'Gün–gece hesabı ve tablo soruları',
      steps: [
        { s: 'Şimdi hesap tuzağı. Çarşamba sabah başlayıp cumartesi biten bir tur dört gün sürer, ama konaklama üç gecedir.',
          h: '<div class="an-trap"><b>Çar → Cmt:</b> 4 gün · konaklama <b>3 gece</b> (Çar, Per, Cum geceleri). “3 nights” ≠ “3 days”</div>' },
        { s: 'Tablo sorularında da şartları sırayla uygula. Önce bütçeyle ele, sonra süreye bak.',
          h: '<div class="an-tip">“70 TL’si var, en kısa sürede varmak istiyor” → önce fiyatı 70 TL’yi aşanları ele, kalanlardan en kısa süreyi seç.</div>' },
        { s: 'İlan ve afiş sorularında da “hangi soru cevaplanamaz” diye sorulur. Metinde olmayan bilgi doğru cevaptır.' }
      ] },

    { t: 'Kaç gece?',
      steps: [{ s: 'Gün ile gece sayısını karıştırma. Turun kaç gece konaklama içerdiğini bul ve kaydırıcıyla işaretle.' }],
      ia: { tip: 'kaydir', q: '<p>The tour starts on <b>Thursday morning</b> and ends on <b>Monday evening</b>. You stay at a hotel every night of the tour.</p><p>How many nights do you stay at the hotel?</p>',
        min: 0, max: 10, adim: 1, cevap: 4, tol: 0, birim: 'nights', etiket: [0, 2, 4, 6, 8, 10],
        hint: 'Önce günleri say: perşembeden pazartesiye. Gece sayısı gün sayısından bir eksik olur.',
        why: 'Perşembe, cuma, cumartesi, pazar ve pazartesi beş gündür. Perşembe, cuma, cumartesi ve pazar geceleri otelde kalınır: dört gece.' } },

    { t: 'Ara soru', cp: {
        q: '<p><b>Black Sea Tour</b><br>The tour starts on <b>Wednesday morning</b> and ends on <b>Saturday evening</b>. You stay at a hotel every night of the tour. The hotel costs <b>1,000 TL per night</b>.</p><p>How much does the hotel cost in total?</p>',
        c: ['2,000 TL', '3,000 TL', '4,000 TL', '5,000 TL'], a: 'B',
        hint: 'Gün sayısını değil, gece sayısını say. Cumartesi akşamı tur bitiyor.',
        why: 'Tur dört gün sürüyor ama geceler çarşamba, perşembe ve cuma; yani üç gece. Üç çarpı bin, üç bin lira.' },
      steps: [{ s: 'Günleri değil, geceleri say.' }] },

    { t: 'Akılda kalsın',
      steps: [
        { s: 'Toparlayalım. [[Half board]] kahvaltı ve akşam yemeği. [[Souvenir]] hatıra eşyası, [[itinerary]] gezi programı.' },
        { s: '[[It didn’t live up to my expectations]] hayal kırıklığı. [[But]] sonrası şikâyettir.' },
        { s: '[[Have you ever been]] deneyim sorar. Zaman belliyse geçmiş zaman. [[Been]] gidip döndü, [[gone]] hâlâ orada.' },
        { s: 'Ve dört günlük tur üç gece demek. İyi yolculuklar, bir sonraki ünitede görüşürüz!' }
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
  (window.LGS_AN = window.LGS_AN || {})['ing-tourism'] = L;
})();
