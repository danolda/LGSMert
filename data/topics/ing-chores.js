LGS.add({
id: "ing-chores",
summary: `
<h3>1. Chores Around the House (Evdeki işler)</h3>
<div class="fig"><svg viewBox="0 0 640 270" width="620" role="img" aria-label="Odalara göre ev işleri">
<path d="M10,85 L320,12 L630,85 z" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/>
<g stroke="#475569" stroke-width="2"><rect x="20" y="85" width="200" height="88" fill="#fef9c3"/><rect x="220" y="85" width="200" height="88" fill="#e0f2fe"/><rect x="420" y="85" width="200" height="88" fill="#ede9fe"/><rect x="20" y="173" width="200" height="88" fill="#ccfbf1"/><rect x="220" y="173" width="200" height="88" fill="#fce7f3"/><rect x="420" y="173" width="200" height="88" fill="#dcfce7"/></g>
<g font-size="12" text-anchor="middle" fill="#1e293b">
<g font-weight="bold" font-size="13"><text x="120" y="108">Kitchen</text><text x="320" y="108">Living room</text><text x="520" y="108">Bedroom</text><text x="120" y="196">Bathroom</text><text x="320" y="196">Laundry room</text><text x="520" y="196">Garden / Balcony</text></g>
<text x="120" y="130">do / wash the dishes</text><text x="120" y="148">set · clear the table</text><text x="120" y="166">cook the meals</text>
<text x="320" y="130">vacuum the carpet</text><text x="320" y="148">dust the furniture</text><text x="320" y="166">tidy up the room</text>
<text x="520" y="130">make the bed</text><text x="520" y="148">change the sheets</text><text x="520" y="166">hang up the clothes</text>
<text x="120" y="218">clean the bathroom</text><text x="120" y="236">mop the floor</text><text x="120" y="254">clean the mirror</text>
<text x="320" y="218">do the laundry</text><text x="320" y="236">iron the clothes</text><text x="320" y="254">fold the clothes</text>
<text x="520" y="218">water the plants</text><text x="520" y="236">feed the pet · walk the dog</text><text x="520" y="254">take out the rubbish</text>
</g></svg></div>

<h3>2. Likes and Dislikes</h3>
<table class="rt"><tr><th>😍</th><th>🙂</th><th>😐</th><th>🙁</th><th>😡</th></tr>
<tr><td>love / adore</td><td>like / enjoy</td><td>don’t mind</td><td>don’t like / dislike</td><td>hate / can’t stand</td></tr></table>
<p>Bu fiillerden sonra fiil <b>-ing</b> alır: I <b>don’t mind</b> wash<b>ing</b> the dishes, but I <b>can’t stand</b> iron<b>ing</b>.</p>

<h3>3. Responsibilities and Requests</h3>
<ul>
<li><b>have to / must:</b> zorunluluk → I <b>have to</b> feed the cat every morning.</li>
<li><b>don’t have to:</b> gerek yok → It’s Sunday. I <b>don’t have to</b> get up early.</li>
<li><b>mustn’t:</b> yasak → You <b>mustn’t</b> eat in the bedroom.</li>
<li><b>Requests:</b> Could you set the table, please? — Sure! / Of course. · <b>Would you mind</b> tak<b>ing</b> out the rubbish? — <b>Not at all.</b> (Hayır, sakıncası yok; yaparım.)</li>
<li><b>Useful words:</b> messy (dağınık) ↔ tidy (toplu) · spotless (tertemiz) · dishwasher (bulaşık makinesi) · washing machine (çamaşır makinesi) · vacuum cleaner (elektrik süpürgesi) · broom (süpürge) · iron (ütü)</li>
</ul>
`,
qs: [
{ q: `<p><b>The Yalçın Family’s Chore Chart</b></p><table class="rt"><tr><th>Chore</th><th>Monday</th><th>Wednesday</th><th>Saturday</th></tr><tr><td>wash the dishes</td><td>Ali</td><td>Elif</td><td>Mom</td></tr><tr><td>vacuum the carpet</td><td>Elif</td><td>Dad</td><td>Ali</td></tr><tr><td>take out the rubbish</td><td>Dad</td><td>Ali</td><td>Elif</td></tr></table><p>According to the chart, which of the following is <b>TRUE</b>?</p>`,
  c: [`Elif washes the dishes on Monday.`, `Dad vacuums the carpet on Saturday.`, `Ali takes out the rubbish on Wednesday.`, `Mom takes out the rubbish on Saturday.`], a: "C",
  s: `<p>Tabloda çarşamba günü çöpü çıkaran kişi <b>Ali</b>’dir (C ✓).</p><p>Pazartesi bulaşığı Ali yıkar (A ✗); cumartesi halıyı Ali süpürür (B ✗); cumartesi çöpü Elif çıkarır (D ✗). Cevap <b>C</b>.</p>` },
{ q: `<p>“to clean the floor with a wet cloth or sponge on a long stick”</p><p>Which chore matches this definition?</p>`,
  c: [`mop the floor`, `dust the shelves`, `iron the shirts`, `feed the cat`], a: "A",
  s: `<p>Uzun saplı ıslak bezle yeri silmek <b>mop the floor</b> (paspas yapmak) demektir.</p><p>Dust the shelves rafların tozunu almak, iron the shirts gömlekleri ütülemek, feed the cat kediyi beslemektir. Cevap <b>A</b>.</p>` },
{ q: `<table class="rt"><tr><th></th><th>do the laundry</th><th>make the bed</th><th>water the plants</th></tr><tr><td><b>Ece</b></td><td>loves</td><td>doesn’t mind</td><td>can’t stand</td></tr><tr><td><b>Lara</b></td><td>can’t stand</td><td>loves</td><td>doesn’t mind</td></tr><tr><td><b>Mert</b></td><td>doesn’t mind</td><td>loves</td><td>can’t stand</td></tr><tr><td><b>Can</b></td><td>doesn’t mind</td><td>can’t stand</td><td>loves</td></tr></table><p>Who <b>doesn’t mind</b> doing the laundry but <b>can’t stand</b> making the bed?</p>`,
  c: [`Ece`, `Lara`, `Mert`, `Can`], a: "D",
  s: `<p>Çamaşır yıkamaya “doesn’t mind” diyenler Mert ve Can’dır. Bunlardan yatak toplamaya “can’t stand” diyen yalnızca <b>Can</b>’dır.</p><p>Mert yatak toplamayı çok seviyor (loves); Ece çamaşır yıkamayı seviyor, Lara ise hiç sevmiyor. Cevap <b>D</b>.</p>` },
{ q: `<p><b>Mom:</b> Could you set the table, please? The guests will be here soon.<br><b>Deniz:</b> ---- Where are the forks?</p><p>Which of the following best completes the conversation?</p>`,
  c: [`No, I can’t stand guests.`, `Of course, Mom.`, `I’ve already eaten.`, `Sorry, I’m not hungry.`], a: "B",
  s: `<p>Deniz hemen ardından “Çatallar nerede?” diye soruyor; demek ki annesinin ricasını <b>kabul etmiştir</b>: “Of course, Mom.”</p><p>A ricayı reddeder ve devamıyla çelişir; C ve D ricaya uygun cevaplar değildir. Cevap <b>B</b>.</p>` },
{ q: `<p>“You ---- feed the fish twice a day. If you forget, they will get hungry.”</p><p>Which of the following best completes the sentence?</p>`,
  c: [`don’t have to`, `mustn’t`, `have to`, `can’t`], a: "C",
  s: `<p>Balıkları beslemeyi unutursan aç kalacaklarını söyleyen cümle bir <b>zorunluluk</b> bildirir: “You <b>have to</b> feed the fish.”</p><p>Don’t have to “gerek yok”, mustn’t “yasak”, can’t “yapamazsın” anlamındadır; cümlenin anlamıyla çelişir. Cevap <b>C</b>.</p>` },
{ q: `<p>Every Saturday, Leyla helps her family with the chores. In the morning, she tidies her room and makes her bed. After lunch, she vacuums the living room while her brother dusts the furniture. She hates ironing, so her dad usually does it. In the evening, she waters the plants on the balcony.</p><p>Which of the following is <b>TRUE</b> according to the text?</p>`,
  c: [`Leyla’s father usually irons the clothes.`, `Leyla dusts the furniture after lunch.`, `Leyla waters the plants in the morning.`, `Leyla’s brother vacuums the living room.`], a: "A",
  s: `<p>Metinde “She hates ironing, so her dad usually does it.” deniyor; yani ütüyü genellikle <b>babası</b> yapıyor (A ✓).</p><p>Mobilyaların tozunu erkek kardeşi alıyor (B ✗); bitkileri akşam suluyor (C ✗); oturma odasını Leyla süpürüyor (D ✗). Cevap <b>A</b>.</p>` },
{ q: `<p><b>Kitchen Rules</b></p><p>✔ You must wash your own cup after you use it.<br>✔ You don’t have to dry the dishes – just leave them on the rack.<br>✘ You mustn’t leave food on the table.</p><p>Which of the following is <b>TRUE</b> according to the rules?</p>`,
  c: [`It is forbidden to dry the dishes.`, `It isn’t necessary to dry the dishes.`, `You mustn’t wash your cup.`, `You can leave food on the table.`], a: "B",
  s: `<p>“<b>Don’t have to</b>” bir şeyin <b>gerekli olmadığını</b> anlatır; yasak değildir. Bulaşıkları kurulamak gerekli değil (B ✓).</p><p>Kurulamak yasak değildir (A ✗); bardağını yıkamak zorunludur (C ✗); masada yiyecek bırakmak yasaktır (D ✗). Cevap <b>B</b>.</p>` },
{ q: `<div class="fig"><svg viewBox="0 0 200 220" width="180" role="img" aria-label="Bir ev aleti">
<rect x="20" y="10" width="160" height="200" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="3"/><line x1="20" y1="48" x2="180" y2="48" stroke="#475569" stroke-width="2"/>
<rect x="32" y="20" width="50" height="18" rx="3" fill="#cbd5e1"/><circle cx="130" cy="29" r="9" fill="#94a3b8"/><circle cx="160" cy="29" r="6" fill="#22c55e"/>
<circle cx="100" cy="128" r="58" fill="#e2e8f0" stroke="#475569" stroke-width="5"/><circle cx="100" cy="128" r="44" fill="#bae6fd" stroke="#64748b" stroke-width="2"/>
<path d="M72,135 l10,-12 l8,6 l8,-6 l10,12 l-6,4 v18 h-24 v-18 z" fill="#f87171" stroke="#b91c1c"/><path d="M106,112 q14,-6 22,8 q-12,10 -22,2 z" fill="#facc15" stroke="#a16207"/><path d="M112,140 h16 v14 h-16 z" fill="#4ade80" stroke="#15803d"/>
</svg></div><p>Which chore does this machine help us with?</p>`,
  c: [`doing the dishes`, `vacuuming the carpet`, `ironing the clothes`, `doing the laundry`], a: "D",
  s: `<p>Resimde yuvarlak camlı kapağının içinde <b>giysiler</b> (tişört, çorap) görülen bir <b>çamaşır makinesi</b> (washing machine) var. Bu makine çamaşır yıkamaya yarar: “do the laundry”.</p><p>Bulaşık için bulaşık makinesi, halı için elektrik süpürgesi, ütü için ütü kullanılır. Cevap <b>D</b>.</p>` },
{ q: `<p><b>Dad:</b> The rubbish bin in the kitchen is full.<br><b>Burak:</b> ----<br><b>Dad:</b> Thanks, son. Leave the bag next to the door outside.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`I’ll make the bed.`, `I’ll water the flowers.`, `I’ll take it out.`, `I’ll do the ironing.`], a: "C",
  s: `<p>Babası çöp kutusunun dolu olduğunu söylüyor, sonra da torbayı dışarıda kapının yanına bırakmasını istiyor. Burak çöpü <b>dışarı çıkaracağını</b> söylemiş olmalıdır: “I’ll take it out.”</p><p>Diğer seçenekler çöple ilgili değildir. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Which chore do the students in 8/E hate most?</b></p><div class="fig"><svg viewBox="0 0 420 220" width="400" role="img" aria-label="Sütun grafiği">
<g font-size="11" fill="#334155"><g stroke="#e2e8f0"><line x1="50" y1="150" x2="400" y2="150"/><line x1="50" y1="120" x2="400" y2="120"/><line x1="50" y1="90" x2="400" y2="90"/><line x1="50" y1="60" x2="400" y2="60"/></g>
<g text-anchor="end"><text x="44" y="184">0</text><text x="44" y="154">3</text><text x="44" y="124">6</text><text x="44" y="94">9</text><text x="44" y="64">12</text></g>
<g fill="#f472b6"><rect x="62" y="80" width="50" height="100"/><rect x="146" y="110" width="50" height="70"/><rect x="230" y="90" width="50" height="90"/><rect x="314" y="140" width="50" height="40"/></g>
<g text-anchor="middle"><text x="87" y="196">Ironing</text><text x="171" y="196">Washing</text><text x="171" y="209">dishes</text><text x="255" y="196">Cleaning</text><text x="255" y="209">bathroom</text><text x="339" y="196">Making</text><text x="339" y="209">bed</text>
<text x="87" y="74" font-weight="bold">10</text><text x="171" y="104" font-weight="bold">7</text><text x="255" y="84" font-weight="bold">9</text><text x="339" y="134" font-weight="bold">4</text>
<text x="18" y="110" transform="rotate(-90 18 110)">students</text></g>
<g stroke="#334155" stroke-width="1.5"><line x1="50" y1="40" x2="50" y2="180"/><line x1="50" y1="180" x2="400" y2="180"/></g></g></svg></div><p>According to the graph, which of the following is <b>TRUE</b>?</p>`,
  c: [`Fewer students hate cleaning the bathroom than ironing, but more students hate it than washing the dishes.`, `Making the bed is the most hated chore.`, `Washing the dishes is more hated than cleaning the bathroom.`, `One third of the class hates making the bed.`], a: "A",
  s: `<p>Banyo temizliğinden nefret eden 9 öğrenci var: ütüden (10) <b>az</b>, bulaşıktan (7) <b>fazla</b> → A doğrudur.</p><p>En çok nefret edilen iş ütüdür (B ✗); bulaşık (7) banyodan (9) az (C ✗); sınıf 30 kişi, üçte biri 10 olurdu ama yatak toplamayı 4 kişi seçmiş (D ✗). Cevap <b>A</b>.</p>` },
{ q: `<p>In the Aksoy family, everyone has a responsibility. Mom works late on weekdays, so the children cook dinner twice a week. Dad does the shopping on Saturdays. Grandma can’t do heavy chores because of her back, but she loves folding the clean clothes.</p><p>Which of the following is <b>TRUE</b> according to the text?</p>`,
  c: [`Mom cooks dinner every day.`, `Grandma vacuums the whole house.`, `Grandma helps with light chores like folding clothes.`, `The children do the shopping on Saturdays.`], a: "C",
  s: `<p>Büyükanne sırtı yüzünden ağır işleri yapamıyor ama temiz çamaşırları katlamayı seviyor; yani <b>hafif işlere</b> yardım ediyor (C ✓).</p><p>Anne hafta içi geç çalıştığı için çocuklar haftada iki kez yemek yapıyor (A ✗); büyükanne ağır iş yapamıyor (B ✗); cumartesi alışverişi baba yapıyor (D ✗). Cevap <b>C</b>.</p>` },
{ q: `<p>“Before dinner, I ---- the table, and after dinner, my brother ---- it.”</p><p>Which of the following best completes the sentence?</p>`,
  c: [`clear / sets`, `set / clears`, `make / does`, `do / makes`], a: "B",
  s: `<p>Yemekten <b>önce</b> sofra kurulur (<b>set</b> the table), yemekten <b>sonra</b> toplanır (<b>clear</b> the table). Özne “my brother” tekil olduğu için fiil “clears” olur.</p><p>A’da sıralama tersine çevrilmiştir; “make/do the table” ifadeleri kullanılmaz. Cevap <b>B</b>.</p>` },
{ q: `<p><b>Ayşe:</b> Mom! Kerem never helps with the chores. It isn’t fair!<br><b>Mom:</b> ----</p><p>Which of the following is the best response?</p>`,
  c: [`Kerem is too tired to sleep.`, `The dishes are already clean.`, `I don’t like doing chores either.`, `You’re right. From now on, he will do some chores, too.`], a: "D",
  s: `<p>Ayşe, Kerem’in hiç yardım etmediğinden <b>şikâyet ediyor</b>. En uygun cevap annesinin haklı olduğunu kabul edip bir çözüm sunmasıdır: “Haklısın. Bundan sonra o da bazı işleri yapacak.”</p><p>Diğer seçenekler şikâyete anlamlı bir cevap vermez. Cevap <b>D</b>.</p>` },
{ q: `<p>(I) Hang the clothes on the line to dry.<br>(II) Separate the white clothes from the coloured ones.<br>(III) Put them in the washing machine with some detergent.<br>(IV) Fold the dry clothes and put them in the wardrobe.</p><p>What is the correct order of the steps for doing the laundry?</p>`,
  c: [`II – III – I – IV`, `III – II – I – IV`, `II – I – III – IV`, `I – II – III – IV`], a: "A",
  s: `<p>Önce beyazlar ve renkliler ayrılır (II), sonra deterjanla çamaşır makinesine konur (III), yıkanan çamaşırlar kurumaya asılır (I) ve kuruyanlar katlanıp dolaba yerleştirilir (IV).</p><p>Sıralama: II – III – I – IV. Cevap <b>A</b>.</p>` },
{ q: `<p><b>Su:</b> I use a soft cloth to remove the dust from the furniture.<br><b>Efe:</b> I give food to our cat every morning.<br><b>Ada:</b> I use a hot tool to remove the wrinkles from the shirts.<br><b>Kuzey:</b> I put the dirty plates into a machine after meals.</p><p>Who does the <b>ironing</b>?</p>`,
  c: [`Su`, `Efe`, `Ada`, `Kuzey`], a: "C",
  s: `<p>Gömleklerdeki kırışıklıkları sıcak bir aletle gideren kişi <b>ütü yapıyordur</b>: Ada.</p><p>Su toz alıyor (dust), Efe kediyi besliyor (feed the cat), Kuzey bulaşık makinesini dolduruyor (load the dishwasher). Cevap <b>C</b>.</p>` },
{ q: `<p><b>A note on the fridge</b></p><p>Kids, I’ll be home late tonight.<br>Selim: Please walk the dog and do your homework.<br>Nehir: Please put the clothes in the dryer and feed the fish.<br>No TV before your chores are done!<br>Love, Mom</p><p>Which of the following is <b>TRUE</b> according to the note?</p>`,
  c: [`Selim has to put the clothes in the dryer.`, `Nehir has to feed the fish.`, `The kids can watch TV before they do their chores.`, `Mom will come home early tonight.`], a: "B",
  s: `<p>Notta Nehir’den çamaşırları kurutma makinesine koyması ve <b>balıkları beslemesi</b> isteniyor (B ✓).</p><p>Çamaşır işi Nehir’in (A ✗); işler bitmeden televizyon yok (C ✗); anne eve geç gelecek (D ✗). Cevap <b>B</b>.</p>` },
{ q: `<p>“My little brother’s room is always ----. There are clothes on the floor and toys everywhere!”</p><p>Which word best completes the sentence?</p>`,
  c: [`messy`, `tidy`, `spotless`, `organised`], a: "A",
  s: `<p>Yerde kıyafetler, her yerde oyuncaklar olan oda <b>dağınıktır</b>: “messy”.</p><p>Tidy (toplu), spotless (tertemiz) ve organised (düzenli) cümlenin devamıyla çelişir. Cevap <b>A</b>.</p>` },
{ q: `<p><b>Grandpa:</b> Would you mind hanging out the washing, Arda? My back hurts a bit.<br><b>Arda:</b> ----</p><p>Which of the following is the best response?</p>`,
  c: [`Yes, I hate washing.`, `It was yesterday.`, `I’m watering the plants tomorrow.`, `Not at all, Grandpa. I’ll do it right now.`], a: "D",
  s: `<p>“<b>Would you mind …ing?</b>” (…r mısın, sakıncası var mı?) sorusuna olumlu cevap “<b>Not at all.</b>” (Hiç sakıncası yok.) ile verilir. Arda dedesine yardım etmeyi kabul ediyor: “Not at all, Grandpa. I’ll do it right now.”</p><p>Diğer seçenekler ricaya uygun cevap değildir. Cevap <b>D</b>.</p>` },
{ q: `<p>Research shows that children who regularly help with household chores become more responsible and independent. They learn how to plan their time and work as part of a team. Doing chores also makes them feel that they are important members of the family.</p><p>What is the main idea of the text?</p>`,
  c: [`Children shouldn’t do any chores.`, `Parents should do all the chores at home.`, `Doing chores helps children develop important skills.`, `Chores are a waste of children’s time.`], a: "C",
  s: `<p>Metin ev işlerine yardım eden çocukların daha <b>sorumlu</b> ve <b>bağımsız</b> olduğunu, zaman planlamayı ve takım çalışmasını öğrendiğini anlatıyor. Ana fikir: Ev işleri çocukların önemli <b>beceriler kazanmasına</b> yardım eder.</p><p>A, B ve D metnin görüşüne terstir. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Can:</b> How often do you do the shopping?<br><b>Melis:</b> ---- Every Saturday morning with my dad.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`Twice a day.`, `Once a week.`, `Never.`, `Every evening.`], a: "B",
  s: `<p>Melis alışverişi her cumartesi sabahı yaptığını söylüyor; bu <b>haftada bir</b> demektir: “Once a week.”</p><p>Günde iki kez, hiçbir zaman ve her akşam ifadeleri açıklamayla çelişir. Cevap <b>B</b>.</p>` },
{ q: `<p>Your mother is ill in bed today, and the house is a mess.</p><p>What do you say to her?</p>`,
  c: [`Don’t worry, Mom. I’ll clean the house and cook dinner.`, `Can you make me a sandwich, Mom?`, `Why is the house so messy today?`, `I’m going out with my friends now.`], a: "A",
  s: `<p>Hasta olan annene destek olmak için ev işlerini <b>üstleneceğini</b> söylemek en uygun davranıştır: “Merak etme anne, evi ben temizleyip akşam yemeğini ben yapacağım.”</p><p>Diğer seçenekler duyarsız davranışlardır. Cevap <b>A</b>.</p>` },
{ q: `<p><b>Summer Camp Rules</b></p><p>• You must make your bed every morning.<br>• You mustn’t eat in the bedrooms.<br>• You don’t have to wash your own clothes – the camp laundry does it for you.</p><p>Which of the following is <b>TRUE</b> according to the rules?</p>`,
  c: [`Campers can eat snacks in their bedrooms.`, `Campers make their beds only on Sundays.`, `Campers don’t need to wash their own clothes.`, `Campers must wash their clothes every day.`], a: "C",
  s: `<p>“You <b>don’t have to</b> wash your own clothes” → kampçıların kendi çamaşırlarını yıkamalarına <b>gerek yoktur</b>; kampın çamaşırhanesi yıkar (C ✓).</p><p>Yatak odalarında yemek yasak (A ✗); yataklar her sabah toplanmalı (B ✗); çamaşır yıkamak zorunlu değil (D ✗). Cevap <b>C</b>.</p>` },
{ q: `<p><b>Burak:</b> I think cooking and cleaning are only women’s jobs.<br><b>Selin:</b> ----</p><p>Which of the following is the best response for Selin to <b>disagree</b> with Burak?</p>`,
  c: [`You’re absolutely right.`, `I agree. Men shouldn’t cook.`, `Yes, that’s true.`, `I don’t agree. Everyone in the family should share the chores.`], a: "D",
  s: `<p>Selin’in Burak’a <b>katılmadığını</b> gösteren cevap: “I don’t agree. Everyone in the family should share the chores.” (Katılmıyorum. Ailedeki herkes ev işlerini paylaşmalı.)</p><p>A, B ve C Burak’a katılan ifadelerdir. Cevap <b>D</b>.</p>` },
{ q: `<p>“a machine that cleans floors and carpets by sucking up dust and dirt”</p><p>What is it?</p>`,
  c: [`a dishwasher`, `a vacuum cleaner`, `a washing machine`, `an iron`], a: "B",
  s: `<p>Tozu ve kiri <b>emerek</b> yerleri ve halıları temizleyen makine <b>vacuum cleaner</b>dır (elektrik süpürgesi).</p><p>Dishwasher bulaşık makinesi, washing machine çamaşır makinesi, iron ütüdür. Cevap <b>B</b>.</p>` },
{ q: `<p>Ozan spent three hours cleaning and tidying his room. When his mother came in, she looked around and said, “Wow! I can’t believe my eyes! It’s spotless!”</p><p>How did Ozan’s mother feel?</p>`,
  c: [`surprised and pleased`, `angry`, `bored`, `disappointed`], a: "A",
  s: `<p>Annesi “Gözlerime inanamıyorum! Tertemiz!” diyor; bu sözler <b>şaşkınlık</b> ve <b>memnuniyet</b> bildirir.</p><p>Kızgınlık, sıkılma ya da hayal kırıklığı bu tepkiyle uyuşmaz. Cevap <b>A</b>.</p>` },
{ q: `<p>Which of the following chore – tool pairs is <b>NOT</b> correct?</p>`,
  c: [`mop the floor – mop`, `iron the clothes – iron`, `dust the furniture – washing machine`, `sweep the floor – broom`], a: "C",
  s: `<p>Mobilyaların tozu <b>toz bezi</b> (duster / cloth) ile alınır; çamaşır makinesi (washing machine) çamaşır yıkamak içindir.</p><p>Paspas – paspas yapmak, ütü – ütülemek, süpürge (broom) – yeri süpürmek eşleştirmeleri doğrudur. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Chore Points</b></p><table class="rt"><tr><th>Chore</th><th>Points</th></tr><tr><td>wash the dishes</td><td>3</td></tr><tr><td>vacuum the house</td><td>4</td></tr><tr><td>take out the rubbish</td><td>2</td></tr><tr><td>make your bed</td><td>1</td></tr></table><p>Last week, Mehmet made his bed every day and vacuumed the house twice. He didn’t do any other chores.</p><p>How many points did Mehmet get last week?</p>`,
  c: [`9`, `11`, `13`, `15`], a: "D",
  s: `<p>Mehmet yatağını haftanın 7 günü topladı: 7 × 1 = 7 puan. Evi iki kez süpürdü: 2 × 4 = 8 puan.</p><p>Toplam: 7 + 8 = <b>15</b> puan. Cevap <b>D</b>.</p>` }
]
});
