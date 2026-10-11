LGS.add({
id: "ing-teen",
summary: `
<h3>1. Likes and Dislikes (Beğeni ifadeleri)</h3>
<div class="fig"><svg viewBox="0 0 620 120" width="600" role="img" aria-label="Beğeni ölçeği">
<defs><linearGradient id="tl1" x1="0" x2="1"><stop offset="0" stop-color="#22c55e"/><stop offset=".5" stop-color="#facc15"/><stop offset="1" stop-color="#ef4444"/></linearGradient></defs>
<rect x="20" y="40" width="580" height="18" rx="9" fill="url(#tl1)"/>
<g font-size="12" text-anchor="middle"><text x="40" y="30">😍</text><text x="300" y="30">😐</text><text x="580" y="30">😖</text>
<text x="70" y="80">love / adore</text><text x="70" y="96">be crazy about</text>
<text x="200" y="80">enjoy / like</text><text x="200" y="96">be keen on / be fond of / be into</text>
<text x="330" y="80">don’t mind</text><text x="330" y="96">(sakıncası yok)</text>
<text x="450" y="80">don’t like</text><text x="450" y="96">dislike</text>
<text x="560" y="80">hate / can’t stand</text><text x="560" y="96">detest</text></g>
</svg><figcaption>Bu fiillerden sonra genellikle <b>V-ing</b> gelir: I enjoy <b>reading</b>. I can’t stand <b>waiting</b>.</figcaption></div>
<ul>
<li><b>Preferences:</b> I <b>prefer</b> reading <b>to</b> watching TV. · I<b>’d rather</b> stay home <b>than</b> go out. · Which do you prefer, … or …?</li>
<li><b>Opinions:</b> I think / In my opinion… It’s fun / relaxing / boring / exciting / a waste of time.</li>
</ul>

<h3>2. Frequency (Sıklık)</h3>
<table class="rt"><tr><th>always</th><th>usually</th><th>often</th><th>sometimes</th><th>rarely / seldom</th><th>never</th></tr>
<tr><td>%100</td><td>%90</td><td>%70</td><td>%50</td><td>%10</td><td>%0</td></tr></table>
<ul><li><b>How often…?</b> → every day, once a week, twice a month, three times a year · Sıklık zarfı genellikle ana fiilden önce, “be” fiilinden sonra gelir: She <b>always</b> gets up early. / He is <b>never</b> late.</li></ul>

<h3>3. Teen Activities Vocabulary</h3>
<table class="rt"><tr><td>hang out with friends</td><td>arkadaşlarla takılmak</td><td>surf the net</td><td>internette gezinmek</td></tr>
<tr><td>chat online</td><td>çevrim içi sohbet</td><td>go window shopping</td><td>vitrinlere bakmak</td></tr>
<tr><td>do extreme sports</td><td>ekstrem spor yapmak</td><td>play an instrument</td><td>enstrüman çalmak</td></tr>
<tr><td>go to the concert</td><td>konsere gitmek</td><td>read comics</td><td>çizgi roman okumak</td></tr></table>
`,
qs: [
{ q: `<p><b>Interviewer:</b> What do you do in your free time, Defne?<br><b>Defne:</b> I’m really keen on music. ----. I also play the guitar in the school band.</p><p>Which of the following best completes Defne’s answer?</p>`,
  c: [`I can’t stand listening to music`, `I hate going to concerts`, `I listen to music almost every day`, `I never play any instruments`], a: "C",
  s: `<p>Defne müziğe çok ilgi duyduğunu (“keen on music”) ve okul grubunda gitar çaldığını söylüyor. Boşluğa bu ilgiyi destekleyen bir cümle gelmelidir: “I listen to music almost every day.”</p><p>A ve B müziği sevmediğini, D hiç enstrüman çalmadığını bildirir; Defne’nin diğer ifadeleriyle çelişir. Cevap <b>C</b>.</p>` },
{ q: `<p>“I <u>can’t stand</u> waiting in long queues. It makes me really nervous.”</p><p>Which of the following is closest in meaning to the underlined phrase?</p>`,
  c: [`love`, `enjoy`, `don’t mind`, `hate`], a: "D",
  s: `<p>“Can’t stand” bir şeye <b>katlanamamak</b>, ondan nefret etmek anlamına gelir; anlamca en yakın sözcük <b>hate</b>’tir. Cümlenin devamı (“It makes me really nervous.”) da bunu destekler.</p><p>Love ve enjoy beğenme, don’t mind ise sakıncası olmama anlamındadır. Cevap <b>D</b>.</p>` },
{ q: `<p><b>Survey: How often do you go to the cinema?</b></p>
<table class="rt"><tr><th>Name</th><th>How often?</th></tr><tr><td>Mert</td><td>once a month</td></tr><tr><td>Lara</td><td>twice a week</td></tr><tr><td>Efe</td><td>never</td></tr><tr><td>Selin</td><td>three times a year</td></tr></table>
<p>According to the table, who goes to the cinema <b>most often</b>?</p>`,
  c: [`Mert`, `Selin`, `Efe`, `Lara`], a: "D",
  s: `<p>Haftada iki kez (twice a week) giden Lara, ayda bir (Mert) ve yılda üç kez (Selin) gidenlerden çok daha sık sinemaya gider. Efe hiç gitmez.</p><p>En sık giden <b>Lara</b>’dır. Cevap <b>D</b>.</p>` },
{ q: `<p><b>Tom:</b> Which do you prefer, playing video games or doing sports?<br><b>Aylin:</b> ----. Being outdoors makes me feel great.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`I prefer doing sports to playing video games`, `I prefer playing video games to doing sports`, `I can’t stand doing sports`, `I don’t like being outdoors`], a: "A",
  s: `<p>Aylin, açık havada olmanın kendisini harika hissettirdiğini söylüyor; bu nedenle <b>spor yapmayı</b> tercih ettiği anlaşılır: “I prefer doing sports to playing video games.” (“prefer A to B” = A’yı B’ye tercih etmek)</p><p>B, C ve D Aylin’in ikinci cümlesiyle çelişir. Cevap <b>A</b>.</p>` },
{ q: `<p>Read the text.</p><p><i>Hi, I’m Kerem. I’m fourteen years old. I’m crazy about basketball, so I practise with my team three times a week. I don’t mind doing homework, but I really hate getting up early on Saturdays. At the weekends, I usually hang out with my friends at the shopping mall.</i></p><p>According to the text, which of the following is <b>NOT</b> true about Kerem?</p>`,
  c: [`He enjoys getting up early on Saturdays.`, `Doing homework is not a problem for him.`, `He plays basketball regularly.`, `He often spends time with his friends at weekends.`], a: "A",
  s: `<p>Kerem haftada üç kez basketbol antrenmanı yapıyor (C ✓), ödev yapmakta sakınca görmüyor (“I don’t mind doing homework” – B ✓), hafta sonları genellikle arkadaşlarıyla AVM’de vakit geçiriyor (D ✓).</p><p>Kerem cumartesi günleri erken kalkmaktan <b>nefret ettiğini</b> (“I really hate getting up early”) söylüyor; A metne göre doğru değildir. Cevap <b>A</b>.</p>` },
{ q: `<p>“Nehir <b>always</b> does her homework before dinner.”</p><p>Which of the following means the <b>opposite</b> of this sentence?</p>`,
  c: [`Nehir usually does her homework before dinner.`, `Nehir often does her homework before dinner.`, `Nehir sometimes does her homework before dinner.`, `Nehir never does her homework before dinner.`], a: "D",
  s: `<p>“Always” her zaman (%100) anlamına gelir; anlamca tam tersi <b>“never”</b> (asla, %0) olur.</p><p>Usually, often ve sometimes ara sıklık bildiren zarflardır; “always”un tam karşıtı değildir. Cevap <b>D</b>.</p>` },
{ q: `<p><b>Mia:</b> Do you want to go window shopping this afternoon?<br><b>Arda:</b> Honestly, I find window shopping ----. I’d rather go to the park and play football.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`boring`, `exciting`, `amazing`, `relaxing`], a: "A",
  s: `<p>Arda, vitrin alışverişi yerine parka gidip futbol oynamayı tercih ettiğini (“I’d rather…”) söylüyor. Bu durumda vitrin alışverişini <b>sıkıcı</b> bulduğu anlaşılır: “boring”.</p><p>Exciting, amazing ve relaxing olumlu sıfatlardır; Arda’nın tercihiyle çelişir. Cevap <b>A</b>.</p>` },
{ q: `<p>Look at the information about Sena’s weekly activities.</p>
<table class="rt"><tr><th>Activity</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr>
<tr><td>Reading books</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Swimming</td><td></td><td>✓</td><td></td><td>✓</td><td></td><td></td><td></td></tr>
<tr><td>Playing the piano</td><td></td><td></td><td></td><td></td><td></td><td>✓</td><td></td></tr></table>
<p>Which of the following is <b>correct</b> according to the table?</p>`,
  c: [`Sena never reads books.`, `Sena goes swimming on Saturdays.`, `Sena plays the piano every day.`, `Sena goes swimming twice a week.`], a: "D",
  s: `<p>Tabloda yüzme salı ve perşembe günleri işaretlenmiştir; yani Sena <b>haftada iki kez</b> (twice a week) yüzmeye gider (D ✓).</p><p>Sena her gün kitap okur (A ✗); piyanoyu yalnızca cumartesi çalar (C ✗); cumartesi yüzmez (B ✗). Cevap <b>D</b>.</p>` },
{ q: `<p>“I’d rather stay at home and read a book ---- go to a crowded party.”</p><p>Which word best completes the sentence?</p>`,
  c: [`to`, `than`, `from`, `with`], a: "B",
  s: `<p>“Would rather” kalıbı iki seçenek karşılaştırılırken <b>“than”</b> ile kullanılır: “I’d rather do X than do Y.” (Y’yi yapmaktansa X’i yapmayı tercih ederim.)</p><p>“To” ise “prefer A to B” kalıbında kullanılır. Cevap <b>B</b>.</p>` },
{ q: `<p><b>Leyla:</b> What do you think about reality shows on TV?<br><b>Bora:</b> ----. They are a waste of time.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`I’m a big fan of them`, `I watch them every evening`, `I can’t stand them`, `They are my favourite programmes`], a: "C",
  s: `<p>Bora, reality şovların <b>zaman kaybı</b> (“a waste of time”) olduğunu söylüyor; bu yüzden onlardan hoşlanmadığını belirten bir ifade gelmelidir: “I can’t stand them.” (Onlara katlanamıyorum.)</p><p>A, B ve D bu programları sevdiğini bildirir; ikinci cümleyle çelişir. Cevap <b>C</b>.</p>` },
{ q: `<p>Read the online post.</p><p><i>“I’m Ayşe. I’m really into photography. I take photos of nature every weekend. I prefer black and white photos to colourful ones because I think they look more artistic. My dream is to have my own exhibition one day!”</i></p><p>Which question is <b>NOT</b> answered in the post?</p>`,
  c: [`What is Ayşe interested in?`, `How often does Ayşe take photos?`, `Which type of photos does Ayşe prefer?`, `What kind of camera does Ayşe use?`], a: "D",
  s: `<p>Gönderide Ayşe’nin fotoğrafçılığa ilgi duyduğu (A), her hafta sonu fotoğraf çektiği (B) ve siyah-beyaz fotoğrafları tercih ettiği (C) belirtilmiştir.</p><p>Ayşe’nin <b>hangi tür fotoğraf makinesi</b> kullandığından söz edilmemiştir. Cevap <b>D</b>.</p>` },
{ q: `<p>Which sentence has the frequency adverb in the <b>correct</b> position?</p>`,
  c: [`He is always late for school.`, `He always is late for school.`, `Always he late is for school.`, `He is late always for school.`], a: "A",
  s: `<p>Sıklık zarfları “be” fiilinden <b>sonra</b>, diğer fiillerden önce gelir: “He <b>is always</b> late for school.”</p><p>B’de zarf “is”ten önce gelmiştir; C ve D’de sözcük sırası bozuktur. Cevap <b>A</b>.</p>` },
{ q: `<p><b>Hasan:</b> How often do you play chess with your grandfather?<br><b>Ece:</b> ----. We play every Sunday after lunch.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`Twice a day`, `Once a week`, `Once a year`, `Never`], a: "B",
  s: `<p>Ece, her pazar öğle yemeğinden sonra satranç oynadıklarını söylüyor. Her pazar = <b>haftada bir kez</b> (once a week).</p><p>Diğer seçenekler “every Sunday” ifadesiyle uyuşmaz. Cevap <b>B</b>.</p>` },
{ q: `<p>“Teenagers who spend too much time on their phones often feel tired and can’t focus on their lessons. Experts suggest that teens should put their phones away at least one hour before bedtime.”</p><p>What is the main idea of the text?</p>`,
  c: [`Teens should use their phones more often.`, `Spending too much time on phones can affect teens negatively.`, `Phones help teenagers sleep better.`, `Teens should always take their phones to bed.`], a: "B",
  s: `<p>Metinde telefonda çok vakit geçiren gençlerin yorgun hissettiği ve derslerine odaklanamadığı, uzmanların yatmadan önce telefonun bırakılmasını önerdiği anlatılmaktadır. Ana fikir: Telefonda çok vakit geçirmek gençleri <b>olumsuz etkileyebilir</b>.</p><p>A, C ve D metinle çelişir. Cevap <b>B</b>.</p>` },
{ q: `<p>Complete the sentence: “Cem is fond of ----. He has a big collection of comics.”</p>`,
  c: [`reading comics`, `playing tennis`, `cooking dinner`, `doing gymnastics`], a: "A",
  s: `<p>Cem’in büyük bir çizgi roman koleksiyonu olduğu söylendiğine göre <b>çizgi roman okumaya</b> düşkündür: “Cem is fond of reading comics.” Ayrıca “be fond of” kalıbından sonra V-ing kullanılır.</p><p>Diğer etkinlikler koleksiyonla ilişkili değildir. Cevap <b>A</b>.</p>` },
{ q: `<p>Look at the survey results about the free-time activities of 8th graders.</p>
<svg viewBox="0 0 420 200" width="400" role="img" aria-label="Survey results">
<line x1="40" y1="160" x2="400" y2="160" stroke="#333"/><line x1="40" y1="10" x2="40" y2="160" stroke="#333"/>
<g fill="#3b82f6"><rect x="60" y="40" width="50" height="120"/><rect x="145" y="70" width="50" height="90"/><rect x="230" y="100" width="50" height="60"/><rect x="315" y="130" width="50" height="30"/></g>
<g font-size="11" text-anchor="middle"><text x="85" y="34">40%</text><text x="170" y="64">30%</text><text x="255" y="94">20%</text><text x="340" y="124">10%</text>
<text x="85" y="176">social media</text><text x="170" y="176">sports</text><text x="255" y="176">reading</text><text x="340" y="176">painting</text></g>
</svg>
<p>According to the chart, which of the following is <b>TRUE</b>?</p>`,
  c: [`Painting is the most popular activity.`, `More students prefer reading to doing sports.`, `Social media is less popular than painting.`, `Sports is more popular than reading.`], a: "D",
  s: `<p>Grafikte sports %30, reading %20’dir; spor okumadan <b>daha popülerdir</b> (D ✓).</p><p>En popüler etkinlik social media’dır (A ✗). Okumayı (%20) tercih eden, sporu (%30) tercih edenden azdır (B ✗). Social media (%40) painting’den (%10) daha popülerdir (C ✗). Cevap <b>D</b>.</p>` },
{ q: `<p><b>Grandma:</b> Do you help your parents with the housework?<br><b>Deniz:</b> Yes, I ----. I usually clean my room and sometimes help with the dishes.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`can’t stand it`, `never help`, `don’t mind helping`, `hate doing it`], a: "C",
  s: `<p>Deniz “Yes” diyerek ev işlerine yardım ettiğini, odasını temizlediğini ve bulaşıklara yardım ettiğini söylüyor. Uygun ifade “I don’t mind helping” (yardım etmekte sakınca görmüyorum) olur.</p><p>A ve D yardım etmekten nefret ettiğini, B hiç yardım etmediğini bildirir; “Yes” cevabı ve devamıyla çelişir. Cevap <b>C</b>.</p>` },
{ q: `<p>“My little brother is <u>crazy about</u> dinosaurs. He has dinosaur toys, books and even dinosaur pyjamas!”</p><p>What does the underlined phrase mean?</p>`,
  c: [`is afraid of`, `is very interested in`, `doesn’t care about`, `is bored with`], a: "B",
  s: `<p>“Be crazy about” bir şeye <b>çok düşkün olmak, çok ilgi duymak</b> anlamındadır. Kardeşin dinozor oyuncakları, kitapları ve pijamaları olması da bu anlamı destekler.</p><p>Diğer seçenekler bağlamla çelişir. Cevap <b>B</b>.</p>` },
{ q: `<p>Read the conversation.</p><p><b>Kaan:</b> Do you want to come to the rock concert with me?<br><b>Merve:</b> Thanks, but I’m not into rock music. I prefer classical music.<br><b>Kaan:</b> OK, no problem. Maybe we can go to the classical music festival next month.<br><b>Merve:</b> That sounds perfect!</p><p>Which of the following is <b>TRUE</b>?</p>`,
  c: [`Merve likes rock music more than classical music.`, `Merve accepts the invitation to the rock concert.`, `Kaan suggests another event that Merve may enjoy.`, `Kaan doesn’t want to go to the festival.`], a: "C",
  s: `<p>Merve rock müziği sevmediğini, klasik müziği tercih ettiğini söyleyince Kaan, gelecek ay klasik müzik festivaline gidebileceklerini önerir. Yani Kaan, <b>Merve’nin hoşlanabileceği başka bir etkinlik</b> önermiştir (C ✓).</p><p>Merve klasik müziği tercih eder (A ✗), rock konserini reddeder (B ✗); festivali öneren Kaan’dır (D ✗). Cevap <b>C</b>.</p>` },
{ q: `<p>“I enjoy ---- with my friends at weekends.”</p><p>Which of the following best completes the sentence?</p>`,
  c: [`hang out`, `to hang out`, `hanging out`, `hangs out`], a: "C",
  s: `<p>“Enjoy” fiilinden sonra fiil <b>-ing</b> takısı alır: “I enjoy <b>hanging out</b> with my friends.”</p><p>Diğer seçenekler dil bilgisi bakımından yanlıştır. Cevap <b>C</b>.</p>` },
{ q: `<p>Read the text.</p><p><i>Most teenagers love spending time with their friends. However, according to a new study, 60% of teens also like spending some time alone. They say it helps them relax and think about their feelings. Reading, drawing and listening to music are popular activities when they are alone.</i></p><p>According to the text, why do some teens like spending time alone?</p>`,
  c: [`Because they don’t have any friends.`, `Because it helps them relax and think.`, `Because they hate reading and drawing.`, `Because their parents want them to stay alone.`], a: "B",
  s: `<p>Metinde gençlerin yalnız vakit geçirmenin <b>rahatlamalarına ve duyguları hakkında düşünmelerine</b> yardımcı olduğunu söyledikleri belirtilmektedir.</p><p>A, C ve D metinde yer almaz ya da metinle çelişir. Cevap <b>B</b>.</p>` },
{ q: `<p>Which of the following sentences expresses a <b>dislike</b>?</p>`,
  c: [`I’m keen on playing the violin.`, `I adore watching documentaries.`, `I detest getting up early.`, `I’m into science fiction films.`], a: "C",
  s: `<p>“Detest” bir şeyden <b>çok nefret etmek</b> anlamındadır; C hoşlanmama bildirir.</p><p>Keen on, adore ve be into beğeni ve ilgi bildiren ifadelerdir. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Teacher:</b> Do you think teenagers should have a part-time job?<br><b>Student:</b> ----, they can learn responsibility and how to manage money.</p><p>Which of the following best completes the student’s answer?</p>`,
  c: [`In my opinion, yes`, `I’m afraid I can’t`, `Never mind`, `What are friends for`], a: "A",
  s: `<p>Öğretmen öğrencinin <b>fikrini</b> soruyor; öğrenci de gençlerin sorumluluk ve para yönetimi öğrenebileceğini söyleyerek olumlu bir görüş bildiriyor. Uygun başlangıç: “In my opinion, yes” (Bence evet).</p><p>B reddetme, C özrü kabul, D teşekküre cevap ifadesidir. Cevap <b>A</b>.</p>` },
{ q: `<p>“Zeynep rarely eats fast food.”</p><p>Which of the following has the <b>same</b> meaning?</p>`,
  c: [`Zeynep eats fast food every day.`, `Zeynep doesn’t eat fast food very often.`, `Zeynep always eats fast food.`, `Zeynep eats fast food twice a day.`], a: "B",
  s: `<p>“Rarely” nadiren demektir; yani Zeynep fast food’u <b>çok sık yemez</b>: “Zeynep doesn’t eat fast food very often.”</p><p>A, C ve D sık yediğini bildirir. Cevap <b>B</b>.</p>` },
{ q: `<p>Look at the profiles.</p>
<table class="rt"><tr><th>Name</th><th>Loves</th><th>Hates</th></tr><tr><td>Ali</td><td>skateboarding</td><td>shopping</td></tr><tr><td>Nil</td><td>shopping</td><td>horror films</td></tr><tr><td>Can</td><td>horror films</td><td>skateboarding</td></tr></table>
<p>Which of the following is <b>correct</b> according to the table?</p>`,
  c: [`Ali and Nil can enjoy going shopping together.`, `Nil and Can both love horror films.`, `Can doesn’t like skateboarding, but Ali loves it.`, `Ali hates skateboarding.`], a: "C",
  s: `<p>Tabloya göre Can kaykaydan nefret ediyor, Ali ise kaykayı çok seviyor (C ✓).</p><p>Ali alışverişten nefret eder (A ✗); Nil korku filmlerinden nefret eder (B ✗); Ali kaykayı sever (D ✗). Cevap <b>C</b>.</p>` },
{ q: `<p><b>Emir:</b> Let’s watch a horror film tonight.<br><b>Yağmur:</b> Hmm, I’m not keen on horror films. ---- a comedy?<br><b>Emir:</b> OK, that’s fine with me.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`Why did you watch`, `How about watching`, `Where can I buy`, `How often do you watch`], a: "B",
  s: `<p>Yağmur korku filmlerini sevmediğini söylüyor ve <b>başka bir öneri</b> sunuyor; Emir de “OK” diyerek öneriyi kabul ediyor. Öneri kalıbı “How about watching a comedy?” uygun düşer.</p><p>Diğer seçenekler öneri bildirmez. Cevap <b>B</b>.</p>` }
]
});
