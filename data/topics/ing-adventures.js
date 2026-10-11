LGS.add({
id: "ing-adventures",
summary: `
<h3>1. Extreme Sports: Air, Water, Land</h3>
<div class="fig"><svg viewBox="0 0 640 200" width="620" role="img" aria-label="Ekstrem sporlar">
<g font-size="13" text-anchor="middle" fill="#1e293b">
<rect x="10" y="10" width="200" height="180" rx="12" fill="#e0f2fe" stroke="#0284c7"/>
<rect x="220" y="10" width="200" height="180" rx="12" fill="#ccfbf1" stroke="#0d9488"/>
<rect x="430" y="10" width="200" height="180" rx="12" fill="#fef3c7" stroke="#b45309"/>
<path d="M78,48 a12,12 0 0 1 20,-10 a15,15 0 0 1 27,4 a10,10 0 0 1 2,20 h-47 a8,8 0 0 1 -2,-14 z" fill="#fff" stroke="#0284c7" stroke-width="1.5"/>
<path d="M280,52 q10,-10 20,0 t20,0 t20,0 t20,0" fill="none" stroke="#0d9488" stroke-width="3"/><path d="M280,62 q10,-10 20,0 t20,0 t20,0 t20,0" fill="none" stroke="#0d9488" stroke-width="3"/>
<path d="M495,64 l22,-34 l14,20 l9,-12 l20,26 z" fill="#d97706" stroke="#92400e" stroke-width="1.5"/>
<g font-weight="bold" font-size="15"><text x="110" y="88">AIR</text><text x="320" y="88">WATER</text><text x="530" y="88">LAND</text></g>
<text x="110" y="115">skydiving</text><text x="110" y="137">paragliding</text><text x="110" y="159">bungee jumping</text><text x="110" y="181">hot-air ballooning</text>
<text x="320" y="115">rafting · canoeing</text><text x="320" y="137">scuba diving</text><text x="320" y="159">surfing · kite surfing</text><text x="320" y="181">free diving</text>
<text x="530" y="115">rock climbing</text><text x="530" y="137">caving</text><text x="530" y="159">hiking · camping</text><text x="530" y="181">mountain biking</text>
</g></svg></div>

<h3>2. Equipment (Ekipman)</h3>
<table class="rt"><tr><th>Equipment</th><th>Anlamı</th><th>Sport</th></tr>
<tr><td>helmet</td><td>kask</td><td>climbing, rafting, caving, biking</td></tr>
<tr><td>harness · rope</td><td>emniyet kemeri · halat</td><td>rock climbing, bungee jumping</td></tr>
<tr><td>life jacket · paddle</td><td>can yeleği · kürek</td><td>rafting, canoeing</td></tr>
<tr><td>parachute</td><td>paraşüt</td><td>skydiving</td></tr>
<tr><td>wetsuit · oxygen tank · fins</td><td>dalış elbisesi · oksijen tüpü · palet</td><td>scuba diving</td></tr>
<tr><td>headlamp / lamp</td><td>kafa lambası</td><td>caving</td></tr></table>

<h3>3. Describing and Comparing Activities</h3>
<ul>
<li><b>Adjectives:</b> thrilling / exciting (heyecan verici) · scary / terrifying (korkutucu) · dangerous / risky (tehlikeli) · safe · boring · tiring · adventurous (maceraperest).</li>
<li><b>Comparatives:</b> Rafting is <b>safer than</b> skydiving. · Paragliding is <b>more exciting than</b> hiking. · Caving is <b>not as dangerous as</b> bungee jumping.</li>
<li><b>Superlatives:</b> Skydiving is <b>the most dangerous</b> sport in the list. · This is <b>the highest</b> bridge.</li>
<li><b>Preferences:</b> I <b>prefer</b> surfing <b>to</b> climbing. · I<b>’d rather</b> go hiking <b>than</b> go skydiving. · I’m (not) into extreme sports.</li>
</ul>
`,
qs: [
{ q: `<p>“You need a helmet, a harness and ropes for this sport. You go up high rocks or cliffs using your hands and feet.”</p><p>Which sport is described?</p>`,
  c: [`scuba diving`, `rafting`, `rock climbing`, `surfing`], a: "C",
  s: `<p>Kask, emniyet kemeri ve halat kullanılarak elle ve ayakla yüksek kayalara <b>tırmanılan</b> spor <b>rock climbing</b>’dir (kaya tırmanışı).</p><p>Scuba diving su altında, rafting nehirde bot ile, surfing dalgalarda sörf tahtasıyla yapılır. Cevap <b>C</b>.</p>` },
{ q: `<table class="rt"><tr><th>Sport</th><th>Danger level (1–5)</th><th>Price</th></tr><tr><td>Skydiving</td><td>5</td><td>€250</td></tr><tr><td>Rafting</td><td>3</td><td>€60</td></tr><tr><td>Paragliding</td><td>4</td><td>€120</td></tr><tr><td>Hiking</td><td>1</td><td>free</td></tr></table><p>According to the table, which of the following is <b>TRUE</b>?</p>`,
  c: [`Paragliding is more dangerous than rafting, but it is cheaper than skydiving.`, `Rafting is the most dangerous sport in the table.`, `Hiking is more expensive than rafting.`, `Skydiving is the cheapest sport in the table.`], a: "A",
  s: `<p>Paragliding’in tehlike düzeyi 4, rafting’inki 3’tür → daha tehlikeli ✓. Fiyatı (€120) skydiving’den (€250) düşüktür → daha ucuz ✓.</p><p>En tehlikelisi skydiving’dir (B ✗); hiking ücretsizdir (C ✗); skydiving en pahalısıdır (D ✗). Cevap <b>A</b>.</p>` },
{ q: `<p><b>Mert:</b> Would you like to try bungee jumping with me this weekend?<br><b>Ayça:</b> ---- I’m scared of heights.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`Sure! I love jumping from high places.`, `Great idea! I can’t wait.`, `Of course, it’s my favourite activity.`, `No way! I’d rather stay on the ground.`], a: "D",
  s: `<p>Ayça yükseklikten korktuğunu söylüyor; bu yüzden teklifi <b>reddetmelidir</b>: “No way! I’d rather stay on the ground.” (Asla! Yerde kalmayı tercih ederim.)</p><p>A, B ve C teklifi kabul eden ifadelerdir ve “I’m scared of heights” ile çelişir. Cevap <b>D</b>.</p>` },
{ q: `<p>“Rafting down the river was really <u>thrilling</u>! My heart was beating so fast.”</p><p>What does the underlined word mean?</p>`,
  c: [`boring`, `very exciting`, `relaxing`, `easy`], a: "B",
  s: `<p>Kalbinin hızlı attığını söyleyen kişi heyecanlanmıştır. <b>Thrilling</b> “çok heyecan verici” demektir.</p><p>Boring sıkıcı, relaxing rahatlatıcı, easy kolaydır; cümleyle uyuşmaz. Cevap <b>B</b>.</p>` },
{ q: `<p>Naz started scuba diving two years ago in Kaş. She loves exploring the underwater world and seeing colourful fish and old shipwrecks. Before every dive, she checks her oxygen tank carefully, and she never dives alone. She says scuba diving isn’t cheap, but it is worth every penny.</p><p>Which of the following is <b>NOT</b> mentioned in the text?</p>`,
  c: [`where Naz started diving`, `what she sees under the water`, `how deep she can dive`, `a safety rule that she follows`], a: "C",
  s: `<p>Metinde dalışa nerede başladığı (Kaş) (A), su altında ne gördüğü (renkli balıklar, batıklar) (B) ve uyduğu güvenlik kuralları (tüpü kontrol etmek, asla yalnız dalmamak) (D) yer alıyor.</p><p>Naz’ın <b>ne kadar derine</b> dalabildiği ise metinde yoktur. Cevap <b>C</b>.</p>` },
{ q: `<p>“I have tried many extreme sports, but paragliding is ---- of all. I flew over Ölüdeniz like a bird!”</p><p>Which of the following best completes the sentence?</p>`,
  c: [`the most exciting`, `more exciting than`, `as exciting as`, `the least exciting`], a: "A",
  s: `<p>“of all” (hepsinin arasında) ifadesi <b>en üstünlük</b> (superlative) gerektirir. Kuş gibi uçtuğunu sevinçle anlatan kişi için uygun olan “<b>the most exciting</b>” (en heyecan verici) ifadesidir.</p><p>B ve C karşılaştırma yapıları “of all” ile kullanılmaz; D (en az heyecan verici) cümlenin olumlu anlamıyla çelişir. Cevap <b>A</b>.</p>` },
{ q: `<p>Your friend wants to go rafting with you, but he can’t swim very well and he is a bit nervous.</p><p>What do you advise him?</p>`,
  c: [`Don’t wear a helmet. It’s uncomfortable.`, `Go rafting alone early in the morning.`, `Jump into the river before the guide arrives.`, `Wear a life jacket and follow the guide’s instructions.`], a: "D",
  s: `<p>Yüzmeyi iyi bilmeyen birine rafting için verilecek en uygun tavsiye <b>can yeleği giymesi</b> ve <b>rehberin talimatlarına uymasıdır</b>.</p><p>Kask takmamak, yalnız gitmek veya rehber gelmeden suya atlamak tehlikeli davranışlardır. Cevap <b>D</b>.</p>` },
{ q: `<p><b>Favourite extreme sports of 30 students in 8/A</b></p><div class="fig"><svg viewBox="0 0 440 220" width="420" role="img" aria-label="Sütun grafiği">
<g font-size="11" fill="#334155"><g stroke="#e2e8f0"><line x1="50" y1="150" x2="420" y2="150"/><line x1="50" y1="120" x2="420" y2="120"/><line x1="50" y1="90" x2="420" y2="90"/><line x1="50" y1="60" x2="420" y2="60"/></g>
<g text-anchor="end"><text x="44" y="184">0</text><text x="44" y="154">3</text><text x="44" y="124">6</text><text x="44" y="94">9</text><text x="44" y="64">12</text></g>
<g fill="#34d399"><rect x="62" y="70" width="48" height="110"/><rect x="134" y="100" width="48" height="80"/><rect x="206" y="120" width="48" height="60"/><rect x="278" y="140" width="48" height="40"/><rect x="350" y="170" width="48" height="10"/></g>
<g text-anchor="middle"><text x="86" y="198">Rafting</text><text x="158" y="198">Paragliding</text><text x="230" y="198">Skydiving</text><text x="302" y="198">Bungee</text><text x="374" y="198">Caving</text>
<text x="86" y="64" font-weight="bold">11</text><text x="158" y="94" font-weight="bold">8</text><text x="230" y="114" font-weight="bold">6</text><text x="302" y="134" font-weight="bold">4</text><text x="374" y="164" font-weight="bold">1</text>
<text x="18" y="110" transform="rotate(-90 18 110)">students</text></g>
<g stroke="#334155" stroke-width="1.5"><line x1="50" y1="40" x2="50" y2="180"/><line x1="50" y1="180" x2="420" y2="180"/></g></g></svg></div><p>According to the graph, which of the following is <b>TRUE</b>?</p>`,
  c: [`Skydiving is more popular than paragliding.`, `Caving is the second least popular sport.`, `More students chose rafting than skydiving and bungee jumping together.`, `Half of the students chose paragliding.`], a: "C",
  s: `<p>Rafting’i 11 öğrenci seçmiş; skydiving (6) ve bungee jumping (4) birlikte 6 + 4 = 10 öğrenci eder. 11 &gt; 10 olduğundan C <b>doğrudur</b>.</p><p>Skydiving (6) paragliding’den (8) az seçilmiş (A ✗); caving en az seçilen spordur (B ✗); paragliding’i 30 öğrenciden 8’i seçmiş, yarısı 15 olurdu (D ✗). Cevap <b>C</b>.</p>` },
{ q: `<p><b>Ece’s post:</b> I’m going to try skydiving next week for the first time!</p><p>Which of the following comments gives Ece a <b>warning</b>?</p>`,
  c: [`Wow, you’re so brave!`, `Be careful and make sure your instructor is experienced!`, `Lucky you! Have a lot of fun!`, `Send us lots of photos from the sky!`], a: "B",
  s: `<p>Uyarı (warning), birini olası bir tehlikeye karşı dikkatli olmaya çağırır: “Be careful and make sure your instructor is experienced!” (Dikkatli ol ve eğitmeninin deneyimli olduğundan emin ol!)</p><p>A övgü, C iyi dilek, D bir ricadır. Cevap <b>B</b>.</p>` },
{ q: `<p>“a sport in which a group of people go down a fast river in a rubber boat”</p><p>Which sport is described?</p>`,
  c: [`rafting`, `caving`, `surfing`, `hiking`], a: "A",
  s: `<p>Bir grup insanın lastik botla hızlı akan bir nehirden aşağı indiği spor <b>rafting</b>’dir.</p><p>Caving mağara keşfi, surfing dalga sörfü, hiking doğa yürüyüşüdür. Cevap <b>A</b>.</p>` },
{ q: `<p>Last summer I went bungee jumping in Antalya. While I was waiting on the platform, my legs were shaking and I wanted to give up. But my friends cheered for me and I finally jumped. When I landed safely, I couldn’t stop smiling. I did something I was afraid of!</p><p>How did the writer feel <b>after</b> the jump?</p>`,
  c: [`scared`, `bored`, `disappointed`, `proud`], a: "D",
  s: `<p>Yazar atlayıştan <b>önce</b> korkmuş (bacakları titriyordu), ancak atladıktan sonra gülümsemesini durduramamış ve korktuğu bir şeyi başardığını söylemiş. Bu, <b>gurur</b> duyduğunu (proud) gösterir.</p><p>“Scared” atlayıştan önceki duygudur; sıkılmak ya da hayal kırıklığı metinde yoktur. Cevap <b>D</b>.</p>` },
{ q: `<p>“I prefer ---- to ---- because I love being in the water, and I don’t like heights.”</p><p>Which of the following best completes the sentence?</p>`,
  c: [`skydiving / rafting`, `rock climbing / scuba diving`, `surfing / rock climbing`, `caving / canoeing`], a: "C",
  s: `<p>“I prefer X to Y” = X’i Y’ye tercih ederim. Kişi suda olmayı seviyor, yüksekliği sevmiyor; bu nedenle tercih ettiği spor suda yapılmalı, tercih etmediği ise yüksekte yapılmalıdır: <b>surfing</b> (su) / <b>rock climbing</b> (yükseklik) ✓.</p><p>A ve B’de tercih edilen spor yüksekte yapılır; D’de su sporu (canoeing) tercih edilmeyen taraftadır. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Instructor:</b> Have you ever tried paragliding before?<br><b>Burak:</b> ----. This is my first time.<br><b>Instructor:</b> Don’t worry. I’ll be with you during the whole flight.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`No, I haven’t`, `Yes, many times`, `Yes, I have`, `I usually do it every weekend`], a: "A",
  s: `<p>Burak “Bu benim ilk seferim.” diyor; yani daha önce paragliding <b>yapmamıştır</b>: “No, I haven’t.”</p><p>B, C ve D daha önce denediğini anlatır ve “first time” ile çelişir. Cevap <b>A</b>.</p>` },
{ q: `<p><b>Selim:</b> Extreme sports are a waste of money. The equipment is too expensive.<br><b>Asya:</b> They help people overcome their fears and feel more confident.<br><b>Kerim:</b> They are too risky. People can get seriously injured.<br><b>Lale:</b> I don’t like them because I find them boring.</p><p>Who mentions a <b>benefit</b> of extreme sports?</p>`,
  c: [`Selim`, `Asya`, `Kerim`, `Lale`], a: "B",
  s: `<p>Asya ekstrem sporların insanların korkularını yenmesine ve kendine daha çok <b>güvenmesine</b> yardım ettiğini söylüyor; bu bir faydadır.</p><p>Selim pahalılığından, Kerim tehlikesinden, Lale sıkıcılığından bahsediyor; hepsi olumsuz görüştür. Cevap <b>B</b>.</p>` },
{ q: `<p>“You can’t go caving without a ---- on your helmet because it is completely dark inside the cave.”</p><p>Which word best completes the sentence?</p>`,
  c: [`paddle`, `parachute`, `life jacket`, `lamp`], a: "D",
  s: `<p>Mağaranın içi tamamen karanlık olduğu için kaskın üzerinde bir <b>lamba</b> (lamp / headlamp) olmalıdır.</p><p>Paddle kürek (rafting, kano), parachute paraşüt (skydiving), life jacket can yeleğidir (su sporları). Cevap <b>D</b>.</p>` },
{ q: `<p>“Canoeing is ---- than rafting because you are usually alone in the boat and you have to paddle all the time.”</p><p>Which of the following best completes the sentence?</p>`,
  c: [`easier`, `cheaper`, `more tiring`, `more crowded`], a: "C",
  s: `<p>Cümlede kanoda genellikle <b>yalnız</b> olduğun ve <b>sürekli kürek çekmen</b> gerektiği söyleniyor; bu, kanoyu rafting’den <b>daha yorucu</b> yapar: “more tiring”.</p><p>Easier (daha kolay) gerekçeyle çelişir; cheaper (daha ucuz) gerekçeyle ilgisizdir; more crowded (daha kalabalık) “alone” ile çelişir. Cevap <b>C</b>.</p>` },
{ q: `<table class="rt"><tr><th colspan="2">ADVENTURE CAMP – Kaçkar Mountains</th></tr><tr><td><b>Activities</b></td><td>hiking, rock climbing, camping under the stars</td></tr><tr><td><b>Age</b></td><td>12–17</td></tr><tr><td><b>Dates</b></td><td>5–12 July</td></tr><tr><td><b>Bring</b></td><td>a sleeping bag, comfortable boots, a raincoat</td></tr><tr><td colspan="2"><i>Helmets and ropes are provided by the camp.</i></td></tr></table><p>According to the advertisement, which of the following is <b>TRUE</b>?</p>`,
  c: [`Participants don’t need to bring their own helmets.`, `A ten-year-old child can join the camp.`, `The camp lasts for two weeks.`, `Participants will stay in a hotel.`], a: "A",
  s: `<p>İlanda “Helmets and ropes are provided by the camp.” (Kask ve halatlar kamp tarafından sağlanır.) deniyor; yani katılımcıların kask getirmesine <b>gerek yoktur</b> (A ✓).</p><p>Yaş sınırı 12–17’dir (B ✗); kamp 5–12 Temmuz arası, yaklaşık bir haftadır (C ✗); yıldızların altında kamp yapılacak, otel yok (D ✗). Cevap <b>A</b>.</p>` },
{ q: `<p>(I) Really? Wasn’t it dangerous?<br>(II) I went paragliding in Fethiye last weekend.<br>(III) Not really. The pilot was very experienced, and we wore all the safety equipment.<br>(IV) That sounds amazing! I’d love to try it, too.</p><p>Which of the following is the correct order of the conversation?</p>`,
  c: [`II – IV – III – I`, `II – I – III – IV`, `I – II – III – IV`, `II – III – I – IV`], a: "B",
  s: `<p>Konuşma bir deneyimin anlatılmasıyla başlar (II). Karşıdaki kişi şaşırıp tehlikeli olup olmadığını sorar (I). Anlatıcı pilotun deneyimli olduğunu ve güvenlik ekipmanı giydiklerini söyler (III). Dinleyen de denemek istediğini belirtir (IV).</p><p>Sıralama: II – I – III – IV. Cevap <b>B</b>.</p>` },
{ q: `<p>Which of the following sport – equipment pairs is <b>NOT</b> correct?</p>`,
  c: [`scuba diving – oxygen tank`, `skydiving – parachute`, `rafting – life jacket`, `caving – surfboard`], a: "D",
  s: `<p>Scuba diving’de oksijen tüpü, skydiving’de paraşüt, rafting’de can yeleği kullanılır ✓.</p><p>Sörf tahtası (surfboard) mağarada değil <b>dalgalarda</b> (surfing) kullanılır; caving için kask, lamba ve halat gerekir. Cevap <b>D</b>.</p>` },
{ q: `<p>Many teenagers today love extreme sports. They say these sports give them a feeling of freedom and help them forget their stress. However, experts warn that young people should always get proper training first and use the right equipment. Otherwise, a fun day can easily turn into a serious accident.</p><p>What do the experts suggest?</p>`,
  c: [`Teenagers should never do extreme sports.`, `Teenagers should do extreme sports alone.`, `Teenagers should get training and use the right equipment.`, `Teenagers should do extreme sports to forget their stress.`], a: "C",
  s: `<p>Metne göre uzmanlar gençlerin önce <b>uygun eğitim almasını</b> ve <b>doğru ekipmanı kullanmasını</b> öneriyor (C ✓).</p><p>Uzmanlar ekstrem sporları yasaklamıyor (A ✗); yalnız yapmayı önermiyor (B ✗); stres atma, gençlerin kendi görüşüdür, uzman önerisi değildir (D ✗). Cevap <b>C</b>.</p>` },
{ q: `<p>“Kaya loves trying new and exciting things. Last year he went skydiving, and this summer he is planning to climb Mount Ağrı with his uncle.”</p><p>Which adjective best describes Kaya?</p>`,
  c: [`adventurous`, `lazy`, `shy`, `bored`], a: "A",
  s: `<p>Yeni ve heyecanlı şeyler denemeyi seven, paraşütle atlayan ve Ağrı Dağı’na tırmanmayı planlayan biri <b>maceraperesttir</b> (adventurous).</p><p>Lazy tembel, shy utangaç, bored sıkılmış demektir; metinle uyuşmaz. Cevap <b>A</b>.</p>` },
{ q: `<table class="rt"><tr><th>Bungee jumping place</th><th>Height</th></tr><tr><td>Sky Bridge</td><td>50 m</td></tr><tr><td>Canyon Jump</td><td>110 m</td></tr><tr><td>Tower Jump</td><td>70 m</td></tr><tr><td>Lake Platform</td><td>40 m</td></tr></table><p>“Canyon Jump is ---- place in the table, so it is perfect for people who love big thrills.”</p><p>Which of the following best completes the sentence?</p>`,
  c: [`higher`, `the highest`, `the lowest`, `as high as`], a: "B",
  s: `<p>Tablodaki en yüksek atlama noktası 110 m ile <b>Canyon Jump</b>’tır; dört yer arasında karşılaştırma yapıldığı için en üstünlük kullanılır: “the highest”.</p><p>“Higher” ve “as high as” iki şeyi karşılaştırır ve “than / as” gerektirir; “the lowest” (en alçak) yanlıştır, en alçak yer Lake Platform’dur. Cevap <b>B</b>.</p>` },
{ q: `<p>Zehra’s friends love extreme sports like skydiving and bungee jumping, but she prefers hiking. She says, “I don’t need expensive equipment for hiking, and I can enjoy nature quietly with my family.”</p><p>Why does Zehra prefer hiking?</p>`,
  c: [`Because it is more thrilling than other sports.`, `Because all her friends love hiking.`, `Because she wants to win a hiking competition.`, `Because it is cheaper and she can enjoy nature with her family.`], a: "D",
  s: `<p>Zehra doğa yürüyüşü için <b>pahalı ekipmana ihtiyaç olmadığını</b> ve doğanın tadını <b>ailesiyle</b> sakin bir şekilde çıkarabildiğini söylüyor (D ✓).</p><p>Daha heyecanlı olduğunu söylemiyor (A ✗); arkadaşları ekstrem sporları seviyor (B ✗); yarışmadan bahsedilmiyor (C ✗). Cevap <b>D</b>.</p>` },
{ q: `<div class="fig"><svg viewBox="0 0 360 200" width="340" role="img" aria-label="Bir sporcu">
<rect width="360" height="200" fill="#e0f2fe"/><path d="M0,150 L70,95 L120,130 L190,70 L260,140 L360,110 L360,200 L0,200 z" fill="#86efac" stroke="#16a34a"/><rect x="0" y="170" width="360" height="30" fill="#38bdf8"/>
<path d="M120,40 Q200,0 280,40 L270,50 Q200,18 130,50 z" fill="#f97316" stroke="#c2410c" stroke-width="1.5"/>
<g stroke="#475569" stroke-width="1"><line x1="130" y1="50" x2="196" y2="112"/><line x1="165" y1="34" x2="198" y2="112"/><line x1="235" y1="34" x2="202" y2="112"/><line x1="270" y1="50" x2="204" y2="112"/></g>
<circle cx="200" cy="106" r="7" fill="#fde68a" stroke="#1e293b"/><path d="M193,104 a7,7 0 0 1 14,0 z" fill="#dc2626"/><rect x="194" y="113" width="12" height="18" rx="3" fill="#1d4ed8"/><line x1="197" y1="131" x2="193" y2="146" stroke="#1e293b" stroke-width="3"/><line x1="203" y1="131" x2="207" y2="146" stroke="#1e293b" stroke-width="3"/>
</svg></div><p>“He is wearing a helmet and a harness. He is flying over the mountains with the help of a large wing and the wind.”</p><p>Which sport is the man in the picture doing?</p>`,
  c: [`scuba diving`, `rafting`, `paragliding`, `caving`], a: "C",
  s: `<p>Resimde büyük bir kanada (yamaç paraşütü) iplerle bağlı, dağların üzerinde rüzgârla <b>süzülen</b> bir kişi var. Bu spor <b>paragliding</b>’dir (yamaç paraşütü).</p><p>Scuba diving su altında, rafting nehirde, caving mağarada yapılır. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Arda:</b> What do you think about caving?<br><b>Ela:</b> ---- It’s dark, wet and full of bats!</p><p>Which of the following best completes the conversation?</p>`,
  c: [`I think it’s terrifying.`, `It’s the most relaxing activity ever.`, `I’m really into it.`, `I can’t wait to try it again.`], a: "A",
  s: `<p>Ela mağaranın karanlık, ıslak ve yarasalarla dolu olduğunu söylüyor; bu olumsuz bir görüştür. Boşluğa da olumsuz bir ifade gelmelidir: “I think it’s terrifying.” (Bence çok korkutucu.)</p><p>B, C ve D olumlu ifadelerdir ve Ela’nın gerekçesiyle çelişir. Cevap <b>A</b>.</p>` },
{ q: `<p>Last weekend, Onur’s family went rafting in Köprülü Canyon. Before they started, the guide gave them helmets and life jackets and explained the safety rules. Onur’s little sister was only six, so she couldn’t join them. She waited with her grandmother at a café by the river.</p><p>Which of the following is <b>TRUE</b> according to the text?</p>`,
  c: [`Everyone in the family went rafting.`, `They went rafting without a guide.`, `The guide didn’t explain any rules.`, `Onur’s sister was too young to go rafting.`], a: "D",
  s: `<p>Onur’un kız kardeşi sadece altı yaşında olduğu için rafting’e <b>katılamamış</b>; yani rafting için <b>çok küçüktü</b> (D ✓).</p><p>Kız kardeşi ve büyükannesi katılmamış (A ✗); bir rehber vardı (B ✗); rehber güvenlik kurallarını anlattı (C ✗). Cevap <b>D</b>.</p>` },
{ q: `<p>“You stand on a board and ride on the waves of the sea. You need good balance for this sport.”</p><p>Which sport is described?</p>`,
  c: [`canoeing`, `surfing`, `skydiving`, `rock climbing`], a: "B",
  s: `<p>Bir tahtanın üzerinde durup deniz dalgalarında kayılan ve iyi denge gerektiren spor <b>surfing</b>’dir (sörf).</p><p>Canoeing kano ile kürek çekmek, skydiving paraşütle atlamak, rock climbing kaya tırmanışıdır. Cevap <b>B</b>.</p>` }
]
});
