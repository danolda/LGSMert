LGS.add({
id: "ing-natural",
summary: `
<h3>1. Natural Disasters (Doğal afetler)</h3>
<table class="rt"><tr><th>Word</th><th>Anlamı</th><th>What happens?</th></tr>
<tr><td><b>earthquake</b></td><td>deprem</td><td>The ground shakes suddenly.</td></tr>
<tr><td><b>flood</b></td><td>sel</td><td>Too much water covers the land.</td></tr>
<tr><td><b>tsunami</b></td><td>tsunami</td><td>Huge waves are caused by an earthquake under the sea.</td></tr>
<tr><td><b>wildfire / forest fire</b></td><td>orman yangını</td><td>A big fire spreads quickly in a forest.</td></tr>
<tr><td><b>avalanche</b></td><td>çığ</td><td>A large amount of snow falls down a mountain.</td></tr>
<tr><td><b>landslide</b></td><td>heyelan</td><td>Earth and rocks slide down a hill.</td></tr>
<tr><td><b>drought</b></td><td>kuraklık</td><td>There is little or no rain for a long time.</td></tr>
<tr><td><b>hurricane / storm / tornado</b></td><td>kasırga / fırtına / hortum</td><td>Very strong winds destroy things.</td></tr>
<tr><td><b>volcanic eruption</b></td><td>yanardağ patlaması</td><td>Lava, ash and gas come out of a volcano.</td></tr></table>

<h3>2. Earthquake Safety</h3>
<div class="fig"><svg viewBox="0 0 640 220" width="620" role="img" aria-label="Deprem güvenliği">
<rect x="5" y="5" width="205" height="210" rx="12" fill="#fef3c7" stroke="#d97706"/>
<rect x="218" y="5" width="205" height="210" rx="12" fill="#fee2e2" stroke="#dc2626"/>
<rect x="431" y="5" width="205" height="210" rx="12" fill="#dcfce7" stroke="#16a34a"/>
<g font-size="12" fill="#1e293b">
<g font-weight="bold" font-size="14" text-anchor="middle"><text x="107" y="30">BEFORE</text><text x="320" y="30">DURING</text><text x="533" y="30">AFTER</text></g>
<text x="16" y="60">• Prepare an emergency kit.</text><text x="16" y="85">• Fix heavy furniture</text><text x="26" y="101">to the walls.</text><text x="16" y="126">• Learn your assembly</text><text x="26" y="142">area (toplanma alanı).</text><text x="16" y="167">• Practise earthquake</text><text x="26" y="183">drills with your family.</text>
<text x="320" y="56" text-anchor="middle" font-weight="bold" fill="#b91c1c">DROP · COVER · HOLD ON</text>
<rect x="262" y="92" width="116" height="8" fill="#92400e"/><rect x="268" y="100" width="6" height="56" fill="#92400e"/><rect x="366" y="100" width="6" height="56" fill="#92400e"/>
<path d="M306,130 q22,2 30,25 l-38,0 q-4,-16 8,-25 z" fill="#3b82f6" stroke="#1e3a8a"/><circle cx="299" cy="128" r="8" fill="#fde68a" stroke="#1e293b"/><path d="M312,134 Q308,110 290,121" fill="none" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/><line x1="330" y1="142" x2="366" y2="130" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
<line x1="250" y1="156" x2="390" y2="156" stroke="#475569" stroke-width="2"/>
<text x="230" y="180">• Stay away from windows.</text><text x="230" y="200">• Don’t use the elevator.</text>
<text x="442" y="60">• Check yourself and</text><text x="452" y="76">others for injuries.</text><text x="442" y="101">• Leave the building</text><text x="452" y="117">carefully. Use the stairs.</text><text x="442" y="142">• Go to the assembly area.</text><text x="442" y="167">• Listen to the news and</text><text x="452" y="183">follow the instructions.</text>
</g></svg></div>
<p class="note">Emergency kit: water, food that lasts long, a torch and batteries, a first aid kit, a whistle, a radio, copies of important documents. Türkiye’de acil çağrı numarası <b>112</b>’dir.</p>

<h3>3. Making Predictions (Tahminde bulunma)</h3>
<table class="rt"><tr><th>%100</th><th>%80</th><th>%50</th><th>%20</th><th>%0</th></tr>
<tr><td>It <b>will definitely</b> rain.</td><td>It <b>will probably</b> rain.</td><td>It <b>might / may</b> rain.</td><td>It <b>probably won’t</b> rain.</td><td>It <b>definitely won’t</b> rain.</td></tr></table>
<ul>
<li><b>be going to:</b> eldeki kanıta dayalı tahmin → Look at those dark clouds! It<b>’s going to</b> rain.</li>
<li><b>Climate change:</b> global warming (küresel ısınma) → glaciers melt, sea levels rise, more heatwaves, floods and droughts.</li>
<li><b>What can we do?</b> save energy, use public transport or bikes, recycle, plant trees, save water.</li>
</ul>
`,
qs: [
{ q: `<p>“a huge wave in the sea, usually caused by an earthquake under the water”</p><p>Which natural disaster matches this definition?</p>`,
  c: [`tsunami`, `drought`, `avalanche`, `tornado`], a: "A",
  s: `<p>Genellikle deniz altındaki bir depremin oluşturduğu <b>dev dalga</b> <b>tsunami</b>dir.</p><p>Drought kuraklık, avalanche çığ, tornado hortumdur. Cevap <b>A</b>.</p>` },
{ q: `<p>You are in your classroom when a strong earthquake starts.</p><p>What should you do?</p>`,
  c: [`Use the elevator to get out quickly.`, `Stand next to the windows.`, `Get under a strong desk and hold on to it.`, `Run down the stairs immediately.`], a: "C",
  s: `<p>Deprem sırasında “<b>Çök – Kapan – Tutun</b>” (Drop, Cover, Hold on) kuralı uygulanır: Sağlam bir sıranın altına girip ona tutunmalısın.</p><p>Asansör kullanmak, pencere kenarında durmak ve sarsıntı sırasında merdivenlerden koşmak tehlikelidir. Cevap <b>C</b>.</p>` },
{ q: `<p>Which of the following should <b>NOT</b> be in an emergency kit?</p>`,
  c: [`a torch and extra batteries`, `a video game console`, `a first aid kit`, `a whistle`], a: "B",
  s: `<p>Afet çantasında hayatta kalmaya ve yardım çağırmaya yarayan eşyalar bulunur: el feneri ve pil, ilk yardım çantası, düdük, su, dayanıklı yiyecek…</p><p><b>Oyun konsolu</b> acil bir durumda işe yaramaz. Cevap <b>B</b>.</p>` },
{ q: `<p><b>“Which natural disaster are you most afraid of?” (30 students)</b></p><div class="fig"><svg viewBox="0 0 420 220" width="400" role="img" aria-label="Sütun grafiği">
<g font-size="11" fill="#334155"><g stroke="#e2e8f0"><line x1="50" y1="152" x2="400" y2="152"/><line x1="50" y1="124" x2="400" y2="124"/><line x1="50" y1="96" x2="400" y2="96"/><line x1="50" y1="68" x2="400" y2="68"/></g>
<g text-anchor="end"><text x="44" y="184">0</text><text x="44" y="156">4</text><text x="44" y="128">8</text><text x="44" y="100">12</text><text x="44" y="72">16</text></g>
<g fill="#f87171"><rect x="62" y="82" width="50" height="98"/><rect x="146" y="138" width="50" height="42"/><rect x="230" y="131" width="50" height="49"/><rect x="314" y="159" width="50" height="21"/></g>
<g text-anchor="middle"><text x="87" y="198">Earthquake</text><text x="171" y="198">Flood</text><text x="255" y="198">Wildfire</text><text x="339" y="198">Avalanche</text>
<text x="87" y="76" font-weight="bold">14</text><text x="171" y="132" font-weight="bold">6</text><text x="255" y="125" font-weight="bold">7</text><text x="339" y="153" font-weight="bold">3</text>
<text x="18" y="110" transform="rotate(-90 18 110)">students</text></g>
<g stroke="#334155" stroke-width="1.5"><line x1="50" y1="40" x2="50" y2="180"/><line x1="50" y1="180" x2="400" y2="180"/></g></g></svg></div><p>According to the graph, which of the following is <b>TRUE</b>?</p>`,
  c: [`Avalanches are feared as much as floods.`, `More students are afraid of floods than wildfires.`, `Half of the students are afraid of wildfires.`, `The number of students who fear earthquakes is more than twice the number who fear floods.`], a: "D",
  s: `<p>Depremden korkan 14, selden korkan 6 öğrenci var. 6’nın iki katı 12’dir; 14 &gt; 12 olduğundan D <b>doğrudur</b>.</p><p>Çığ (3) ve sel (6) eşit değil (A ✗); selden korkanlar (6) yangından korkanlardan (7) az (B ✗); 30 kişinin yarısı 15’tir, yangından 7 kişi korkuyor (C ✗). Cevap <b>D</b>.</p>` },
{ q: `<p>“Look at those dark clouds over the hills! It ---- rain soon. Let’s go inside.”</p><p>Which of the following best completes the sentence?</p>`,
  c: [`is going to`, `was`, `has`, `did`], a: "A",
  s: `<p>Konuşan kişi kara bulutları <b>görüyor</b>; elindeki bir kanıta dayanarak yakın gelecek için tahminde bulunuyor. Bu durumda “<b>be going to</b>” kullanılır: “It is going to rain soon.”</p><p>Was, has ve did gelecek bildirmez ve “rain” fiiliyle bu şekilde kullanılmaz. Cevap <b>A</b>.</p>` },
{ q: `<p>A drought is a long period with little or no rain. During a drought, rivers and lakes dry up, plants die and farmers can’t grow crops. To save water, we should take shorter showers and turn off the tap while we are brushing our teeth.</p><p>Which of the following is <b>NOT</b> mentioned as a result of a drought?</p>`,
  c: [`Lakes dry up.`, `Plants die.`, `Houses are destroyed by strong winds.`, `Farmers can’t grow crops.`], a: "C",
  s: `<p>Metinde kuraklığın sonuçları olarak göllerin kuruması (A), bitkilerin ölmesi (B) ve çiftçilerin ürün yetiştirememesi (D) sayılıyor.</p><p>Evlerin <b>şiddetli rüzgârla</b> yıkılması kuraklığın değil kasırga/fırtınanın sonucudur ve metinde yoktur. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Reporter:</b> What happened here?<br><b>Villager:</b> ----<br><b>Reporter:</b> Was anyone hurt?<br><b>Villager:</b> Fortunately not. Everyone left the village before the water reached the houses.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`A forest fire started in the hills.`, `A strong earthquake shook the town.`, `It hasn’t rained for months.`, `The river overflowed after three days of heavy rain.`], a: "D",
  s: `<p>Köylü, suyun evlere ulaşmasından önce herkesin köyü terk ettiğini söylüyor; demek ki yaşanan olay bir <b>sel</b>dir: “Üç gün süren şiddetli yağmurdan sonra nehir taştı.”</p><p>Yangın ve deprem “water” ile uyuşmaz; aylarca yağmur yağmaması (kuraklık) ise suyun evlere ulaşmasıyla çelişir. Cevap <b>D</b>.</p>` },
{ q: `<table class="rt"><tr><th>Day</th><th>Weather</th><th>Temperature</th><th>Wind</th></tr><tr><td>Monday</td><td>☀️ sunny</td><td>28 °C</td><td>light</td></tr><tr><td>Tuesday</td><td>⛈️ stormy</td><td>20 °C</td><td>strong</td></tr><tr><td>Wednesday</td><td>🌧️ rainy</td><td>17 °C</td><td>light</td></tr><tr><td>Thursday</td><td>☁️ cloudy</td><td>24 °C</td><td>strong</td></tr></table><p>Deniz’s family wants to have a picnic. They need a <b>sunny</b> day <b>without strong wind</b>.</p><p>Which day should they choose?</p>`,
  c: [`Tuesday`, `Monday`, `Wednesday`, `Thursday`], a: "B",
  s: `<p>Güneşli olan tek gün <b>pazartesi</b>dir ve o gün rüzgâr da hafiftir (light) → piknik için uygundur.</p><p>Salı fırtınalı ve rüzgârlı, çarşamba yağmurlu, perşembe bulutlu ve rüzgârlıdır. Cevap <b>B</b>.</p>` },
{ q: `<p>(I) Check yourself and the people around you for injuries.<br>(II) Drop, cover and hold on.<br>(III) When the shaking stops, leave the building carefully.<br>(IV) Go to the assembly area and wait for instructions.</p><p>What is the correct order of the things to do during and after an earthquake?</p>`,
  c: [`II – I – III – IV`, `I – II – III – IV`, `II – IV – III – I`, `III – II – I – IV`], a: "A",
  s: `<p>Sarsıntı sırasında önce “Çök – Kapan – Tutun” uygulanır (II). Sarsıntı bitince kendini ve çevrendekileri yaralanmalara karşı kontrol edersin (I), binayı dikkatlice terk edersin (III) ve toplanma alanına gidip talimatları beklersin (IV).</p><p>Sıralama: II – I – III – IV. Cevap <b>A</b>.</p>` },
{ q: `<p>“a large amount of snow that suddenly falls down the side of a mountain”</p><p>Which word matches this definition?</p>`,
  c: [`landslide`, `flood`, `avalanche`, `hurricane`], a: "C",
  s: `<p>Dağ yamacından aniden kayan büyük kar kütlesi <b>avalanche</b>dır (çığ).</p><p>Landslide (heyelan) karın değil <b>toprak ve kayaların</b> kaymasıdır; flood sel, hurricane kasırgadır. Cevap <b>C</b>.</p>` },
{ q: `<p>Because of global warming, glaciers are melting and sea levels are rising. Scientists say that in the future there will be more extreme weather events, such as heatwaves, floods and droughts.</p><p>Which of the following is a <b>prediction</b> for the future according to the text?</p>`,
  c: [`Glaciers are getting bigger.`, `Extreme weather events will happen more often.`, `Sea levels are falling.`, `Droughts will disappear.`], a: "B",
  s: `<p>Bilim insanlarının gelecek için tahmini: Sıcak hava dalgaları, sel ve kuraklık gibi aşırı hava olayları <b>daha sık</b> yaşanacak (B ✓).</p><p>Buzullar büyümüyor, eriyor (A ✗); deniz seviyesi düşmüyor, yükseliyor (C ✗); kuraklıkların artacağı söyleniyor (D ✗). Cevap <b>B</b>.</p>` },
{ q: `<p>“Scientists can’t predict exactly when an earthquake will happen, but they say a big one ---- happen in this region in the next 30 years.”</p><p>Which of the following best completes the sentence?</p>`,
  c: [`must`, `doesn’t`, `won’t`, `might`], a: "D",
  s: `<p>Bilim insanları depremin ne zaman olacağını <b>kesin</b> bilemiyor; bu yüzden bir <b>olasılık</b> bildiren “<b>might</b>” (-abilir) kullanılmalıdır.</p><p>Must zorunluluk/kesinlik bildirir; doesn’t ve won’t olumsuzdur ve “they say a big one…” ifadesiyle çelişir. Cevap <b>D</b>.</p>` },
{ q: `<p>Which of the following can <b>cause</b> a forest fire?</p>`,
  c: [`Leaving a campfire burning before you go home`, `Putting out the campfire with water`, `Taking your rubbish with you`, `Calling the emergency number when you see smoke`], a: "A",
  s: `<p>Kamp ateşini <b>söndürmeden</b> bırakmak orman yangınına yol açabilir.</p><p>Ateşi suyla söndürmek, çöpünü yanında götürmek (cam şişeler de yangına sebep olabilir) ve duman görünce acil numarayı aramak yangını <b>önleyen</b> davranışlardır. Cevap <b>A</b>.</p>` },
{ q: `<p><b>Mom:</b> The news says there will be a big storm tonight.<br><b>Kaan:</b> ----<br><b>Mom:</b> Good idea. And let’s charge our phones and get the torch ready.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`Great! Let’s go to the beach tonight.`, `I’ll leave all the windows open.`, `Then we should bring the plant pots inside from the balcony.`, `I don’t think it will ever rain again.`], a: "C",
  s: `<p>Annesi Kaan’ın önerisine “Good idea.” diyor ve fırtınaya karşı başka hazırlıklar ekliyor. Kaan da fırtınaya karşı bir <b>önlem</b> önermiş olmalı: “O zaman balkondaki saksıları içeri almalıyız.”</p><p>Plaja gitmek ve camları açık bırakmak tehlikelidir; D haberle çelişir. Cevap <b>C</b>.</p>` },
{ q: `<p>In 79 AD, Mount Vesuvius erupted and buried the Roman city of Pompeii under a thick layer of ash. The ash covered everything – houses, streets and even bread in the ovens. Today, thanks to this, archaeologists can see how people lived there about 2,000 years ago.</p><p>Why can archaeologists learn so much about life in Pompeii?</p>`,
  c: [`Because Pompeii was rebuilt after the eruption.`, `Because people wrote books about it last year.`, `Because the volcano is still erupting.`, `Because the ash covered and protected the city.`], a: "D",
  s: `<p>Metne göre kül her şeyi (evler, sokaklar, fırındaki ekmekler) örtmüş ve “thanks to this” (bu sayede) arkeologlar 2000 yıl önceki yaşamı görebiliyor. Yani kül şehri <b>örtüp korumuştur</b>.</p><p>Şehrin yeniden inşası, geçen yıl yazılan kitaplar ve yanardağın hâlâ patlaması metinde yoktur. Cevap <b>D</b>.</p>` },
{ q: `<p>Which of the following word – definition pairs is <b>NOT</b> correct?</p>`,
  c: [`flood – too much water covering the land`, `drought – a very strong wind`, `earthquake – sudden shaking of the ground`, `landslide – earth and rocks sliding down a hill`], a: "B",
  s: `<p><b>Drought</b> (kuraklık), uzun süre çok az yağmur yağması ya da hiç yağmamasıdır; çok güçlü rüzgâr “hurricane / storm” ile ifade edilir.</p><p>Diğer eşleştirmeler doğrudur. Cevap <b>B</b>.</p>` },
{ q: `<p>“The ground shook for about thirty seconds. Pictures fell off the walls, and some windows broke. After that, everybody ran out into the street.”</p><p>Which natural disaster is described?</p>`,
  c: [`an earthquake`, `a flood`, `a drought`, `a tsunami`], a: "A",
  s: `<p>Yerin otuz saniye kadar <b>sallanması</b>, tabloların düşmesi ve camların kırılması bir <b>deprem</b>i anlatır.</p><p>Sel ve tsunamide su, kuraklıkta yağmursuzluk ön plandadır; metinde bunlar yok. Cevap <b>A</b>.</p>` },
{ q: `<p>Last week, our school had an earthquake drill. When the alarm rang, we dropped under our desks and covered our heads. After the alarm stopped, we walked out of the building quietly and went to the school garden. There, our teacher counted us one by one.</p><p>Why did the teacher count the students?</p>`,
  c: [`To choose a class president`, `To give them a test`, `To make sure that nobody was missing`, `To start a running race`], a: "C",
  s: `<p>Deprem tatbikatından sonra toplanma alanında öğrencilerin tek tek sayılmasının amacı herkesin orada olduğundan, yani <b>kimsenin eksik olmadığından</b> emin olmaktır.</p><p>Sınıf başkanı seçmek, sınav yapmak veya yarış başlatmak tatbikatla ilgili değildir. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Weather report:</b> “Tomorrow it will definitely be windy all day. It will probably rain in the afternoon, and it might snow in the mountains at night.”</p><p>Which of the following is <b>TRUE</b> according to the report?</p>`,
  c: [`The reporter is sure that it will snow in the mountains.`, `It will definitely rain in the morning.`, `It won’t be windy tomorrow.`, `The reporter is sure that it will be windy tomorrow.`], a: "D",
  s: `<p>“<b>Will definitely</b>” kesinlik bildirir: Sunucu yarın rüzgârlı olacağından <b>emindir</b> (D ✓).</p><p>Kar için “might” (olabilir) kullanılmış, kesin değil (A ✗); yağmur öğleden sonra için “probably” (muhtemelen) denmiş (B ✗); rüzgârlı olacağı kesin (C ✗). Cevap <b>D</b>.</p>` },
{ q: `<p>“a violent storm with very strong winds, which usually starts over warm seas”</p><p>Which word matches this definition?</p>`,
  c: [`hurricane`, `drought`, `earthquake`, `avalanche`], a: "A",
  s: `<p>Genellikle sıcak denizlerin üzerinde oluşan, çok güçlü rüzgârlı şiddetli fırtına <b>hurricane</b>dır (kasırga).</p><p>Drought kuraklık, earthquake deprem, avalanche çığdır. Cevap <b>A</b>.</p>` },
{ q: `<p><b>Elif:</b> Dad, the water in our street is rising fast! What should we do?<br><b>Dad:</b> ----</p><p>Which of the following is the best response?</p>`,
  c: [`Let’s go down to the basement.`, `Let’s go upstairs and call for help.`, `Let’s go swimming in the street.`, `Let’s drive through the water quickly.`], a: "B",
  s: `<p>Sel sırasında yapılması gereken <b>yüksek bir yere</b> çıkmak ve yardım çağırmaktır: “Yukarı kata çıkıp yardım çağıralım.”</p><p>Bodruma inmek, sel suyunda yüzmek veya arabayla suyun içinden geçmek çok tehlikelidir. Cevap <b>B</b>.</p>` },
{ q: `<p>“People cut down too many trees on the hills, so the soil became loose. After a week of heavy rain, ---- destroyed several houses in the village.”</p><p>Which of the following best completes the sentence?</p>`,
  c: [`an avalanche`, `a drought`, `a landslide`, `a tsunami`], a: "C",
  s: `<p>Ağaçlar kesildiği için tepelerdeki toprak gevşemiş ve şiddetli yağmurlardan sonra kaymıştır. Toprak ve kayaların yamaçtan kayması <b>heyelan</b>dır: “a landslide”.</p><p>Çığ kar ile ilgilidir; kuraklık yağmursuzluktur; tsunami denizde oluşur. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Selin’s emergency bag checklist</b></p><table class="rt"><tr><td>water</td><td>✔</td></tr><tr><td>torch</td><td>✔</td></tr><tr><td>batteries</td><td>✘</td></tr><tr><td>first aid kit</td><td>✔</td></tr><tr><td>whistle</td><td>✘</td></tr><tr><td>copies of documents</td><td>✔</td></tr></table><p>Which items does Selin <b>still need</b> to put in her bag?</p>`,
  c: [`water and a torch`, `a first aid kit and copies of documents`, `a torch and a whistle`, `batteries and a whistle`], a: "D",
  s: `<p>Listede ✘ işaretli olanlar henüz çantaya konmamış eşyalardır: <b>piller</b> (batteries) ve <b>düdük</b> (whistle).</p><p>Su, el feneri, ilk yardım çantası ve belge kopyaları ✔ işaretlidir. Cevap <b>D</b>.</p>` },
{ q: `<p><b>Kemal:</b> I go to school by bike to reduce air pollution.<br><b>Pınar:</b> I usually leave the lights on in empty rooms.<br><b>Ozan:</b> I throw plastic bottles into the general rubbish bin.<br><b>Rana:</b> I take a long bath every day.</p><p>Who is helping to fight climate change?</p>`,
  c: [`Kemal`, `Pınar`, `Ozan`, `Rana`], a: "A",
  s: `<p>Okula bisikletle giderek hava kirliliğini azaltan <b>Kemal</b> iklim değişikliğiyle mücadeleye katkı sağlıyor.</p><p>Boş odalarda ışıkları açık bırakmak (enerji israfı), plastikleri geri dönüştürmemek ve her gün uzun banyo yapmak (su israfı) çevreye zarar veren davranışlardır. Cevap <b>A</b>.</p>` },
{ q: `<p>“The authorities told everyone to <u>evacuate</u> the town because the hurricane was getting closer.”</p><p>What does the underlined word mean?</p>`,
  c: [`clean`, `build`, `leave a dangerous place`, `visit`], a: "C",
  s: `<p>Kasırga yaklaştığı için yetkililer herkesin kasabayı “evacuate” etmesini istiyor; <b>evacuate</b> tehlikeli bir yeri <b>boşaltmak / terk etmek</b> demektir.</p><p>Temizlemek, inşa etmek veya ziyaret etmek cümlenin anlamına uymaz. Cevap <b>C</b>.</p>` },
{ q: `<p>Türkiye is on active fault lines, so earthquakes happen quite often. That’s why buildings must be strong, and every family should have an emergency plan and an emergency kit.</p><p>What is the main idea of the text?</p>`,
  c: [`Earthquakes never happen in Türkiye.`, `Because earthquakes are common in Türkiye, we should be prepared for them.`, `Fault lines are only under the sea.`, `Old buildings are safer than new ones.`], a: "B",
  s: `<p>Metin Türkiye’nin aktif fay hatları üzerinde olduğunu ve depremlerin sık yaşandığını, bu yüzden binaların sağlam olması ve ailelerin <b>hazırlıklı</b> olması gerektiğini anlatıyor.</p><p>A metinle çelişir; C ve D metinde yoktur. Cevap <b>B</b>.</p>` },
{ q: `<p><b>Ada:</b> Do you think people will live on Mars one day?<br><b>Efe:</b> ---- It’s too cold there, and there’s no air to breathe.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`Yes, definitely.`, `Of course they will.`, `I’m sure they will.`, `I don’t think so.`], a: "D",
  s: `<p>Efe, Mars’ın çok soğuk olduğunu ve solunacak hava olmadığını söylüyor; yani insanların orada yaşayacağını <b>düşünmüyor</b>: “I don’t think so.”</p><p>A, B ve C olumlu tahminlerdir ve Efe’nin gerekçeleriyle çelişir. Cevap <b>D</b>.</p>` },
{ q: `<p><b>Thunderstorm Safety</b></p><p>If you are outside during a thunderstorm, don’t stand under a tall tree. Stay away from water and metal objects. The safest place is inside a building or a car.</p><p>Which person is following the advice?</p>`,
  c: [`Mert went into a building when the storm started.`, `Seda waited under a tall tree until the storm ended.`, `Ayaz kept swimming in the lake during the storm.`, `Lale held a long metal pole in an open field.`], a: "A",
  s: `<p>Metne göre fırtınada en güvenli yer bir <b>binanın</b> veya arabanın içidir; fırtına başlayınca binaya giren <b>Mert</b> tavsiyeye uyuyor.</p><p>Uzun ağacın altında beklemek (Seda), gölde yüzmek (Ayaz) ve metal direk tutmak (Lale) tehlikelidir. Cevap <b>A</b>.</p>` },
{ q: `<p>Last summer, there was a wildfire near our village.</p><p>(I) Firefighters and helicopters arrived quickly.<br>(II) We smelt smoke and saw flames on the hill.<br>(III) After two days, the fire was finally put out.<br>(IV) We called the emergency number at once.</p><p>What is the correct order of the events?</p>`,
  c: [`IV – II – I – III`, `II – I – IV – III`, `II – IV – I – III`, `I – II – IV – III`], a: "C",
  s: `<p>Önce duman kokusu alınıp tepede alevler görülür (II), hemen acil numara aranır (IV), itfaiye ve helikopterler gelir (I) ve iki gün sonra yangın söndürülür (III).</p><p>Sıralama: II – IV – I – III. Cevap <b>C</b>.</p>` },
{ q: `<p>“The ---- of the Moon pulls the water in the oceans and causes the tides.”</p><p>Which word best completes the sentence?</p>`,
  c: [`earthquake`, `gravity`, `drought`, `volcano`], a: "B",
  s: `<p>Ay’ın okyanuslardaki suyu çekerek gelgitlere yol açan kuvveti <b>kütle çekimidir</b>: “gravity”.</p><p>Deprem, kuraklık ve yanardağ Ay’ın özelliği değildir. Cevap <b>B</b>.</p>` }
]
});
