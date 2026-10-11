LGS.add({
id: "ing-tourism",
summary: `
<h3>1. Types of Holidays (Tatil türleri)</h3>
<div class="fig"><svg viewBox="0 0 640 170" width="620" role="img" aria-label="Tatil türleri">
<g font-size="13" text-anchor="middle" fill="#1e293b">
<rect x="8" y="5" width="150" height="160" rx="12" fill="#e0f2fe" stroke="#0284c7"/>
<rect x="166" y="5" width="150" height="160" rx="12" fill="#fef3c7" stroke="#b45309"/>
<rect x="324" y="5" width="150" height="160" rx="12" fill="#dcfce7" stroke="#16a34a"/>
<rect x="482" y="5" width="150" height="160" rx="12" fill="#f1f5f9" stroke="#64748b"/>
<circle cx="66" cy="38" r="13" fill="#facc15"/><path d="M50,64 q8,-8 16,0 t16,0 t16,0" fill="none" stroke="#0284c7" stroke-width="3"/>
<path d="M216,40 l25,-16 l25,16 z" fill="#d97706"/><g fill="#d97706"><rect x="220" y="43" width="6" height="25"/><rect x="238" y="43" width="6" height="25"/><rect x="256" y="43" width="6" height="25"/></g><rect x="214" y="68" width="54" height="5" fill="#92400e"/>
<path d="M370,70 l20,-38 l20,38 z" fill="#f97316" stroke="#9a3412"/><circle cx="428" cy="40" r="13" fill="#22c55e"/><rect x="425" y="50" width="6" height="20" fill="#78350f"/>
<g stroke="#2563eb" stroke-width="3" stroke-linecap="round"><line x1="557" y1="22" x2="557" y2="70"/><line x1="536" y1="34" x2="578" y2="58"/><line x1="536" y1="58" x2="578" y2="34"/></g>
<g font-weight="bold" font-size="14"><text x="83" y="100">Seaside</text><text x="241" y="100">Cultural</text><text x="399" y="100">Nature</text><text x="557" y="100">Winter</text></g>
<text x="83" y="125">swimming, sunbathing</text><text x="83" y="148">Bodrum, Antalya</text>
<text x="241" y="125">museums, ruins</text><text x="241" y="148">İstanbul, Ephesus</text>
<text x="399" y="125">camping, hiking</text><text x="399" y="148">Uzungöl, Kaçkar</text>
<text x="557" y="125">skiing, snowboarding</text><text x="557" y="148">Uludağ, Palandöken</text>
</g></svg></div>

<h3>2. Travel Words</h3>
<table class="rt"><tr><td><b>book / reservation</b></td><td>rezervasyon yapmak</td><td><b>check in / check out</b></td><td>otele giriş / çıkış</td></tr>
<tr><td><b>hotel · hostel · guesthouse · campsite</b></td><td>otel · hostel · pansiyon · kamp alanı</td><td><b>passport · visa · luggage</b></td><td>pasaport · vize · bagaj</td></tr>
<tr><td><b>sightseeing</b></td><td>gezip görmek</td><td><b>souvenir</b></td><td>hatıra eşya</td></tr>
<tr><td><b>guided tour · tour guide</b></td><td>rehberli tur · rehber</td><td><b>historical · ancient · ruins</b></td><td>tarihî · antik · kalıntılar</td></tr>
<tr><td><b>crowded · peaceful</b></td><td>kalabalık · huzurlu</td><td><b>breathtaking · stunning</b></td><td>nefes kesici · çok güzel</td></tr></table>

<h3>3. Talking about Travel Experiences</h3>
<ul>
<li><b>Have you ever been to</b> Cappadocia? — Yes, I have. <b>I went</b> there last summer. / No, I haven’t, but I’d like to.</li>
<li><b>Recommending:</b> You should visit… · Don’t miss… · It’s worth seeing. · I highly recommend…</li>
<li><b>At the hotel:</b> I have a reservation. · I’d like to check out, please. · The air conditioner isn’t working.</li>
<li><b>Comparing places:</b> İstanbul is <b>more crowded than</b> Bolu. · Uzungöl is <b>one of the most beautiful</b> places in Turkey.</li>
</ul>
`,
qs: [
{ q: `<p><b>Elif:</b> Have you ever been to Cappadocia?<br><b>Tarık:</b> ----. I went there two years ago and took a hot-air balloon ride.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`No, I haven’t`, `Yes, I have`, `No, never`, `I’m going there tomorrow`], a: "B",
  s: `<p>Tarık iki yıl önce oraya gittiğini ve balon turuna katıldığını anlatıyor; yani Kapadokya’ya <b>daha önce gitmiştir</b>: “Yes, I have.”</p><p>A ve C gitmediğini, D ise yarın gideceğini söyler; açıklamayla çelişir. Cevap <b>B</b>.</p>` },
{ q: `<table class="rt"><tr><th>Hotel</th><th>Rating</th><th>Guest comment</th></tr><tr><td>Blue Bay</td><td>4.5</td><td>Excellent breakfast, but far from the city centre.</td></tr><tr><td>City Inn</td><td>3.0</td><td>Cheap and close to the museums, but noisy at night.</td></tr><tr><td>Sea Breeze</td><td>2.5</td><td>Rude staff and dirty rooms.</td></tr><tr><td>Olive Garden</td><td>4.0</td><td>Quiet and family-friendly. It has a big swimming pool.</td></tr></table><p>Emre is looking for a <b>quiet</b> hotel with a <b>swimming pool</b> for his family. Which hotel should he choose?</p>`,
  c: [`Blue Bay`, `City Inn`, `Sea Breeze`, `Olive Garden`], a: "D",
  s: `<p>Emre’nin iki şartı var: sessiz olması ve yüzme havuzu bulunması. Yorumlarda “Quiet and family-friendly. It has a big swimming pool.” ifadesi yalnızca <b>Olive Garden</b> için yazılmıştır.</p><p>Blue Bay’in havuzu belirtilmemiş, City Inn geceleri gürültülü, Sea Breeze kirli ve personeli kaba. Cevap <b>D</b>.</p>` },
{ q: `<p>“a cheap place to stay, usually for young travellers, where you may share a room with other people”</p><p>Which word matches this definition?</p>`,
  c: [`hostel`, `palace`, `museum`, `resort`], a: "A",
  s: `<p>Genellikle genç gezginlerin kaldığı, odanın başkalarıyla paylaşılabildiği <b>ucuz</b> konaklama yeri <b>hostel</b>dir.</p><p>Palace saray, museum müze, resort ise genellikle pahalı tatil köyüdür. Cevap <b>A</b>.</p>` },
{ q: `<p>“You need this document to travel to another country. It has your photo, your name and your date of birth in it.”</p><p>What is it?</p>`,
  c: [`a postcard`, `a brochure`, `a passport`, `a souvenir`], a: "C",
  s: `<p>Başka bir ülkeye seyahat etmek için gerekli olan, fotoğrafını, adını ve doğum tarihini içeren belge <b>pasaport</b>tur.</p><p>Postcard kartpostal, brochure broşür, souvenir hatıra eşyadır. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Tourist:</b> I’m visiting İstanbul for only one day. What do you recommend?<br><b>Local:</b> ---- It’s one of the most famous buildings in the city.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`You should definitely visit Hagia Sophia.`, `You shouldn’t go out today.`, `I’ve never been to İstanbul.`, `The weather is very cold in Ankara.`], a: "A",
  s: `<p>Turist bir <b>öneri</b> istiyor; yerel kişi de ardından “Şehrin en ünlü yapılarından biri.” diyor. Boşluğa bir yapı öneren cümle gelmelidir: “You should definitely visit Hagia Sophia.” (Ayasofya’yı mutlaka ziyaret etmelisin.)</p><p>Diğer seçenekler öneri bildirmez veya konuyla ilgisizdir. Cevap <b>A</b>.</p>` },
{ q: `<p><b>Dear Grandma,</b></p><p>We arrived in Mardin on Monday. The old stone houses are amazing – the whole city looks like a museum! On Wednesday, we visited Dara Ancient City. The food here is delicious, but a bit too spicy for me. Unfortunately, it is extremely hot during the day, so we can only go out in the evenings.</p><p>Love, Defne</p><p>Which of the following is <b>TRUE</b> according to the postcard?</p>`,
  c: [`Defne didn’t like the old houses.`, `The weather is too hot for Defne.`, `They visited Dara Ancient City on Monday.`, `The food in Mardin isn’t spicy at all.`], a: "B",
  s: `<p>Defne “Unfortunately, it is extremely hot during the day” diyor ve bu yüzden ancak akşamları dışarı çıkabildiklerini söylüyor; yani hava ona göre <b>çok sıcak</b> (B ✓).</p><p>Taş evleri harika buluyor (A ✗); Dara’yı çarşamba ziyaret ettiler (C ✗); yemekler ona göre biraz fazla acı (D ✗). Cevap <b>B</b>.</p>` },
{ q: `<table class="rt"><tr><th>Tour</th><th>Duration</th><th>Price</th><th>Includes</th></tr><tr><td>Aegean Tour</td><td>5 days</td><td>€400</td><td>hotel, breakfast, boat trip</td></tr><tr><td>Black Sea Tour</td><td>7 days</td><td>€550</td><td>hotel, all meals, plateau visits</td></tr><tr><td>Cappadocia Tour</td><td>3 days</td><td>€300</td><td>cave hotel, balloon ride</td></tr><tr><td>Eastern Tour</td><td>6 days</td><td>€450</td><td>hotel, breakfast, museum tickets</td></tr></table><p>According to the table, which of the following is <b>TRUE</b>?</p>`,
  c: [`The Cappadocia Tour is the longest tour.`, `The Eastern Tour includes all meals.`, `The Aegean Tour is cheaper than the Cappadocia Tour.`, `The Black Sea Tour is the longest and the most expensive tour.`], a: "D",
  s: `<p>Karadeniz Turu 7 gün ile <b>en uzun</b>, €550 ile <b>en pahalı</b> turdur (D ✓).</p><p>Kapadokya Turu 3 gün ile en kısasıdır (A ✗); Doğu Turu’nda yalnızca kahvaltı var (B ✗); Ege Turu (€400) Kapadokya Turu’ndan (€300) pahalıdır (C ✗). Cevap <b>D</b>.</p>` },
{ q: `<p>(I) I’d like to book a trip to Bodrum for two people.<br>(II) Good morning. How can I help you?<br>(III) From the 3rd to the 10th of August.<br>(IV) Sure. When would you like to go?</p><p>Which of the following is the correct order of the conversation at a travel agency?</p>`,
  c: [`II – IV – I – III`, `I – II – IV – III`, `II – I – IV – III`, `II – III – IV – I`], a: "C",
  s: `<p>Seyahat acentesindeki görevli selam verip nasıl yardımcı olabileceğini sorar (II). Müşteri Bodrum’a iki kişilik tur ayırtmak istediğini söyler (I). Görevli ne zaman gitmek istediğini sorar (IV). Müşteri tarihleri verir (III).</p><p>Sıralama: II – I – IV – III. Cevap <b>C</b>.</p>` },
{ q: `<p>“The beach was so ---- that we couldn’t even find a place to put our towels.”</p><p>Which word best completes the sentence?</p>`,
  c: [`crowded`, `peaceful`, `empty`, `quiet`], a: "A",
  s: `<p>Havlularını koyacak yer bile bulamadıklarına göre plaj çok <b>kalabalıktı</b>: “crowded”.</p><p>Peaceful (huzurlu), empty (boş) ve quiet (sakin) bu sonuçla çelişir. Cevap <b>A</b>.</p>` },
{ q: `<p><b>Jack:</b> The museum was closed on Monday, so we couldn’t see it.<br><b>Mia:</b> It rained all week, so we stayed in the hotel most of the time.<br><b>Hana:</b> Our flight was five hours late, so we missed the first day of the tour.<br><b>Lucas:</b> The hotel food was too oily for me.</p><p>Who had a problem with <b>transportation</b>?</p>`,
  c: [`Jack`, `Mia`, `Hana`, `Lucas`], a: "C",
  s: `<p>Hana’nın uçuşu beş saat <b>rötar</b> yapmış; bu bir ulaşım sorunudur.</p><p>Jack müzenin kapalı olmasından, Mia hava durumundan, Lucas yemekten şikâyet ediyor. Cevap <b>C</b>.</p>` },
{ q: `<p>“I bought a small hand-painted plate in Kütahya as a ----. It will always remind me of my trip.”</p><p>Which word best completes the sentence?</p>`,
  c: [`passport`, `souvenir`, `luggage`, `ticket`], a: "B",
  s: `<p>Gezilen bir yerden alınan ve o geziyi <b>hatırlatan</b> eşyaya <b>souvenir</b> (hatıra / hediyelik eşya) denir.</p><p>Passport pasaport, luggage bagaj, ticket bilettir. Cevap <b>B</b>.</p>` },
{ q: `<table class="rt"><tr><th colspan="2">ANCIENT CITY – VISITOR INFORMATION</th></tr><tr><td>Opening hours</td><td>April–October: 08:00–19:00<br>November–March: 08:30–17:00</td></tr><tr><td>Guided tours</td><td>every hour, in Turkish and English</td></tr><tr><td colspan="2">✗ Don’t touch or climb the ancient columns.<br>✗ Flying drones is not allowed.</td></tr></table><p>According to the information, which of the following is <b>TRUE</b>?</p>`,
  c: [`The site closes earlier in summer than in winter.`, `Visitors can fly drones over the ruins.`, `Visitors can climb the ancient columns.`, `Visitors can join a guided tour every hour.`], a: "D",
  s: `<p>Bilgi tablosunda rehberli turların <b>her saat</b> yapıldığı yazıyor (D ✓).</p><p>Yaz aylarında 19:00’da, kışın 17:00’de kapanıyor; yani yazın <b>daha geç</b> kapanır (A ✗); drone uçurmak ve sütunlara tırmanmak yasaktır (B ✗, C ✗). Cevap <b>D</b>.</p>` },
{ q: `<p><b>Receptionist:</b> Welcome to Hotel Lale. Do you have a reservation?<br><b>Guest:</b> ---- My name is Sarah Lee.<br><b>Receptionist:</b> Let me check… Yes, a double room for three nights.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`Yes, I booked a room online.`, `No, I’m just looking around.`, `Where is the nearest bank?`, `I’d like to check out, please.`], a: "A",
  s: `<p>Resepsiyonist rezervasyonu kontrol edip üç gecelik bir oda <b>bulduğuna</b> göre konuk rezervasyonu olduğunu söylemiştir: “Yes, I booked a room online.”</p><p>B rezervasyon olmadığını söyler; C konuyla ilgisizdir; D otelden ayrılırken söylenir. Cevap <b>A</b>.</p>` },
{ q: `<p>Pamukkale, which means “cotton castle” in Turkish, is famous for its white terraces with warm water. Visitors must take off their shoes to walk on the terraces. Right next to Pamukkale are the ruins of Hierapolis, an ancient city with a large theatre.</p><p>Which of the following is <b>NOT</b> mentioned in the text?</p>`,
  c: [`the meaning of the name “Pamukkale”`, `a rule for visitors`, `the best time of the year to visit`, `an ancient city near Pamukkale`], a: "C",
  s: `<p>Metinde adın anlamı (“cotton castle”) (A), ziyaretçi kuralı (ayakkabıları çıkarmak) (B) ve yakındaki antik kent (Hierapolis) (D) yer alıyor.</p><p>Pamukkale’yi ziyaret etmek için yılın <b>en uygun zamanı</b> ise belirtilmemiştir. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Ali:</b> ----?<br><b>Ece:</b> In a lovely guesthouse near the beach. It was cheap and very clean.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`How did you get there`, `Where did you stay`, `What did you eat`, `Who did you go with`], a: "B",
  s: `<p>Ece bir <b>konaklama yeri</b> söylüyor: “Sahile yakın şirin bir pansiyonda.” Bu nedenle soru nerede kaldığını sormalıdır: “Where did you stay?”</p><p>A ulaşım, C yemek, D kiminle gittiğini sorar. Cevap <b>B</b>.</p>` },
{ q: `<p><b>What kind of holiday do the students in 8/D prefer?</b></p><div class="fig"><svg viewBox="0 0 400 220" width="380" role="img" aria-label="Sütun grafiği">
<g font-size="11" fill="#334155"><g stroke="#e2e8f0"><line x1="50" y1="150" x2="380" y2="150"/><line x1="50" y1="120" x2="380" y2="120"/><line x1="50" y1="90" x2="380" y2="90"/><line x1="50" y1="60" x2="380" y2="60"/></g>
<g text-anchor="end"><text x="44" y="184">0</text><text x="44" y="154">3</text><text x="44" y="124">6</text><text x="44" y="94">9</text><text x="44" y="64">12</text></g>
<g fill="#fb923c"><rect x="70" y="50" width="50" height="130"/><rect x="150" y="100" width="50" height="80"/><rect x="230" y="120" width="50" height="60"/><rect x="310" y="150" width="50" height="30"/></g>
<g text-anchor="middle"><text x="95" y="198">Seaside</text><text x="175" y="198">City / Culture</text><text x="255" y="198">Nature</text><text x="335" y="198">Winter</text>
<text x="95" y="44" font-weight="bold">13</text><text x="175" y="94" font-weight="bold">8</text><text x="255" y="114" font-weight="bold">6</text><text x="335" y="144" font-weight="bold">3</text>
<text x="18" y="110" transform="rotate(-90 18 110)">students</text></g>
<g stroke="#334155" stroke-width="1.5"><line x1="50" y1="40" x2="50" y2="180"/><line x1="50" y1="180" x2="380" y2="180"/></g></g></svg></div><p>According to the graph, which of the following is <b>TRUE</b>?</p>`,
  c: [`Twice as many students prefer nature holidays as winter holidays.`, `City holidays are more popular than seaside holidays.`, `Winter holidays are as popular as nature holidays.`, `Half of the students prefer city holidays.`], a: "A",
  s: `<p>Doğa tatilini 6, kış tatilini 3 öğrenci tercih ediyor; 6 = 2 × 3 olduğundan doğa tatilini tercih edenler kış tatilini tercih edenlerin <b>iki katıdır</b> (A ✓).</p><p>Şehir tatili (8) deniz tatilinden (13) az tercih ediliyor (B ✗); kış (3) ve doğa (6) eşit değil (C ✗); sınıf 30 kişi, şehir tatilini 8 kişi seçmiş, yarısı 15 olurdu (D ✗). Cevap <b>A</b>.</p>` },
{ q: `<p>Your cousin is going abroad for the first time next month and he is very excited.</p><p>Which of the following is the best advice for him?</p>`,
  c: [`Don’t take any money with you.`, `Leave your passport at home.`, `Pack your bags at the airport.`, `Keep your passport in a safe place and make a copy of it.`], a: "D",
  s: `<p>Yurt dışına ilk kez giden birine verilecek en mantıklı tavsiye pasaportunu <b>güvenli bir yerde tutması</b> ve <b>bir kopyasını almasıdır</b>.</p><p>Para almamak ve pasaportu evde bırakmak sorun yaratır; bavulu havalimanında hazırlamak da mantıksızdır. Cevap <b>D</b>.</p>` },
{ q: `<p>“The view from the top of Mount Nemrut at sunrise was <u>breathtaking</u>. I will never forget it.”</p><p>What does the underlined word mean?</p>`,
  c: [`boring`, `frightening`, `extremely beautiful`, `very dark`], a: "C",
  s: `<p>Hiç unutamayacağı bir gün doğumu manzarasını anlatan kişi “breathtaking” (nefes kesici) diyor; bu kelime <b>son derece güzel / etkileyici</b> anlamına gelir.</p><p>Sıkıcı, korkutucu ya da çok karanlık anlamları cümlenin olumlu havasıyla uyuşmaz. Cevap <b>C</b>.</p>` },
{ q: `<p>Hi Lisa,</p><p>I’m so happy you’re coming to Trabzon! Don’t miss Sümela Monastery – it’s built on a steep cliff and the view is amazing. You should also try “hamsi”, our famous fish. Oh, and bring an umbrella, because it rains a lot here, even in summer!</p><p>See you soon, Zeynep</p><p>Which of the following is <b>NOT</b> suggested in the e-mail?</p>`,
  c: [`going to the beach to sunbathe`, `visiting Sümela Monastery`, `eating hamsi`, `taking an umbrella`], a: "A",
  s: `<p>Zeynep, Lisa’ya Sümela Manastırı’nı görmesini (B), hamsi yemesini (C) ve şemsiye getirmesini (D) öneriyor.</p><p>Plaja gidip <b>güneşlenmek</b> e-postada önerilmiyor; aksine sık yağmur yağdığı belirtiliyor. Cevap <b>A</b>.</p>` },
{ q: `<p>“We have to ---- before 12 o’clock on our last day, so let’s pack our bags after breakfast.”</p><p>Which of the following best completes the sentence?</p>`,
  c: [`check in`, `check out`, `book a room`, `arrive at the hotel`], a: "B",
  s: `<p>Son gün öğlen 12’den önce bavulları toplayıp otelden <b>ayrılmak</b> gerekir; bu işlem “<b>check out</b>” ile ifade edilir.</p><p>Check in otele giriş yapmak, book a room oda ayırtmak, arrive at the hotel otele varmaktır; son günle uyuşmaz. Cevap <b>B</b>.</p>` },
{ q: `<p><b>Travel Tips</b></p><p>Planning a trip with little ones? Choose a hotel with a kids’ club and a children’s pool. Don’t forget to pack snacks, games and their favourite toys for long journeys. Try to plan short daily trips because small children get tired easily.</p><p>Who is this text written for?</p>`,
  c: [`business travellers`, `students on a school trip`, `elderly couples`, `parents with young children`], a: "D",
  s: `<p>Metin çocuk kulübü ve çocuk havuzu olan otel seçmeyi, uzun yolculuklar için atıştırmalık ve oyuncak almayı, küçük çocuklar çabuk yorulduğu için kısa geziler planlamayı öneriyor. Bu tavsiyeler <b>küçük çocuklu ebeveynlere</b> yöneliktir.</p><p>Cevap <b>D</b>.</p>` },
{ q: `<p><b>Tourist:</b> Excuse me, how can I get to the Archaeology Museum?<br><b>Police officer:</b> ----</p><p>Which of the following is the best response?</p>`,
  c: [`It opens at nine in the morning.`, `The tickets cost ten euros.`, `Take bus number 5 and get off at the third stop.`, `It is one of the oldest museums in the world.`], a: "C",
  s: `<p>Turist müzeye <b>nasıl gideceğini</b> soruyor; cevap bir yol tarifi olmalıdır: “5 numaralı otobüse binin ve üçüncü durakta inin.”</p><p>Açılış saati, bilet fiyatı ve müzenin yaşı yol tarifi değildir. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Eco-tourism</b></p><p>Eco-tourists travel to natural areas, but they try not to harm the environment. They respect local people and their culture. For example, they stay in small local guesthouses, buy local products and never leave their rubbish behind.</p><p>Which of the following travellers is an <b>eco-tourist</b>?</p>`,
  c: [`Selin stays with a family in a village and takes her rubbish with her.`, `Tom stays in a huge resort and uses a lot of plastic bottles every day.`, `Yusuf drives his car everywhere in a national park and feeds wild animals.`, `Ana spends all her holiday shopping in big malls.`], a: "A",
  s: `<p>Eko-turistler yerel pansiyonlarda kalır, yerel halka saygı duyar ve çöplerini <b>geride bırakmaz</b>. Köyde bir ailenin yanında kalan ve çöplerini yanında götüren <b>Selin</b> bu tanıma uyar.</p><p>Plastik tüketimi (Tom), milli parkta her yere arabayla gidip yaban hayvanlarını beslemek (Yusuf) ve AVM gezmek (Ana) eko-turizmle uyuşmaz. Cevap <b>A</b>.</p>` },
{ q: `<p><b>Kerem:</b> I want to ski.<br><b>Ayşe:</b> I want to see ancient ruins.<br><b>Ozan:</b> I want to swim and sunbathe.<br><b>Nil:</b> I want to see fairy chimneys.</p><p>Places: <i>Uludağ · Ephesus · Bodrum · Cappadocia</i></p><p>Which of the following matches is <b>correct</b>?</p>`,
  c: [`Kerem – Ephesus`, `Nil – Cappadocia`, `Ozan – Uludağ`, `Ayşe – Bodrum`], a: "B",
  s: `<p>Peri bacaları (fairy chimneys) <b>Kapadokya</b>’dadır; Nil – Cappadocia eşleştirmesi doğrudur.</p><p>Doğru eşleştirmeler: Kerem (kayak) – Uludağ, Ayşe (antik kalıntılar) – Efes, Ozan (yüzme, güneşlenme) – Bodrum. Seçeneklerdeki diğer eşleştirmeler yanlıştır. Cevap <b>B</b>.</p>` },
{ q: `<p>“İstanbul is ---- than Bolu, so it is harder to find a quiet place to relax there.”</p><p>Which of the following best completes the sentence?</p>`,
  c: [`quieter`, `smaller`, `more crowded`, `more peaceful`], a: "C",
  s: `<p>İstanbul’da sakin bir yer bulmanın <b>daha zor</b> olmasının sebebi şehrin <b>daha kalabalık</b> olmasıdır: “more crowded”.</p><p>Quieter (daha sessiz), smaller (daha küçük) ve more peaceful (daha huzurlu) cümlenin sonucuyla çelişir. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Guest:</b> Excuse me. The air conditioner in my room isn’t working, and it’s really hot.<br><b>Receptionist:</b> ----</p><p>Which of the following is the best response?</p>`,
  c: [`Enjoy your stay!`, `Check-out time is 12 o’clock.`, `Breakfast is served from 7 to 10.`, `I’m very sorry. I’ll send someone to fix it right away.`], a: "D",
  s: `<p>Konuk bir <b>şikâyette</b> bulunuyor; resepsiyonist özür dileyip sorunu çözmeyi teklif etmelidir: “Çok üzgünüm, hemen tamiri için birini göndereceğim.”</p><p>Diğer seçenekler şikâyete cevap vermez. Cevap <b>D</b>.</p>` }
]
});
