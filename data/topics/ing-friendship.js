LGS.add({
id: "ing-friendship",
summary: `
<h3>1. Inviting · Accepting · Refusing (Davet etme, kabul, ret)</h3>
<div class="fig"><svg viewBox="0 0 620 200" width="600" role="img" aria-label="Davet, kabul ve ret kalıpları">
<g font-size="12" text-anchor="middle">
<rect x="10" y="10" width="190" height="180" rx="12" fill="#dbeafe" stroke="#2563eb"/><text x="105" y="34" font-size="14" font-weight="bold">Inviting (Davet)</text>
<text x="105" y="60">Would you like to come…?</text><text x="105" y="82">Do you want to join us?</text><text x="105" y="104">Can you come to my party?</text><text x="105" y="126">How about going to…?</text><text x="105" y="148">Let’s go to the cinema.</text><text x="105" y="170">Why don’t we…?</text>
<rect x="215" y="10" width="190" height="180" rx="12" fill="#dcfce7" stroke="#16a34a"/><text x="310" y="34" font-size="14" font-weight="bold">Accepting (Kabul)</text>
<text x="310" y="60">Sure! / Of course!</text><text x="310" y="82">I’d love to.</text><text x="310" y="104">That sounds great/fun.</text><text x="310" y="126">Why not?</text><text x="310" y="148">Count me in!</text><text x="310" y="170">I’ll be there.</text>
<rect x="420" y="10" width="190" height="180" rx="12" fill="#fee2e2" stroke="#dc2626"/><text x="515" y="34" font-size="14" font-weight="bold">Refusing (Ret)</text>
<text x="515" y="60">Sorry, I can’t. I have to…</text><text x="515" y="82">I’d love to, but…</text><text x="515" y="104">I’m afraid I can’t.</text><text x="515" y="126">Maybe another time.</text><text x="515" y="148">Unfortunately, I’m busy.</text><text x="515" y="170">I wish I could, but…</text>
</g></svg></div>
<ul>
<li><b>Apologizing (Özür dileme):</b> I’m (so) sorry. / I apologize. → <b>Responding:</b> That’s OK. / Never mind. / No problem. / Don’t worry.</li>
<li><b>Giving explanations (Açıklama/bahane):</b> I have to study for my exam. / I’m going to visit my grandparents. / I have a dentist appointment.</li>
</ul>

<h3>2. Friendship Vocabulary</h3>
<table class="rt"><tr><th>Positive (olumlu)</th><th>Anlamı</th><th>Negative (olumsuz)</th><th>Anlamı</th></tr>
<tr><td>trustworthy / reliable</td><td>güvenilir</td><td>selfish</td><td>bencil</td></tr>
<tr><td>supportive</td><td>destekleyici</td><td>mean</td><td>kaba, kötü kalpli</td></tr>
<tr><td>generous</td><td>cömert</td><td>jealous</td><td>kıskanç</td></tr>
<tr><td>honest</td><td>dürüst</td><td>rude</td><td>kaba</td></tr>
<tr><td>caring / understanding</td><td>ilgili / anlayışlı</td><td>gossipy</td><td>dedikoducu</td></tr>
<tr><td>helpful / funny</td><td>yardımsever / komik</td><td>bossy</td><td>otoriter, emir veren</td></tr></table>
<div class="note"><b>Expressions:</b> “A friend in need is a friend indeed.” (Dost kara günde belli olur.) · “What are friends for?” (Dostlar ne içindir? — yardım ettikten sonra) · <b>fair-weather friend:</b> yalnızca iyi günlerde yanında olan arkadaş · <b>keep a secret:</b> sır saklamak · <b>rely on / count on:</b> güvenmek · <b>get on well with:</b> iyi anlaşmak</div>
`,
qs: [
{ q: `<p><b>Kerem:</b> Hi Emma! I’m having a birthday party at my house on Saturday afternoon. ----?<br><b>Emma:</b> Of course! I’d love to. What time does it start?<br><b>Kerem:</b> At 3 p.m.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`What did you do last Saturday`, `Would you like to join us`, `Where do you usually have parties`, `How old are you now`], a: "B",
  s: `<p>Kerem, Emma’yı doğum günü partisine <b>davet</b> etmektedir; Emma da “Of course! I’d love to.” diyerek daveti kabul eder. Boşluğa davet cümlesi gelmelidir: “Would you like to join us?” (Bize katılmak ister misin?)</p><p>Diğer seçenekler geçmiş, yer ya da yaş sorar; Emma’nın cevabıyla uyuşmaz. Cevap <b>B</b>.</p>` },
{ q: `<p><b>Ali:</b> Would you like to go to the cinema with me tonight?<br><b>Tom:</b> ----. I have to study for my maths exam tomorrow.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`Sure, why not`, `That sounds great`, `Sorry, I’m afraid I can’t`, `Yes, I’d love to`], a: "C",
  s: `<p>Tom’un ikinci cümlesi bir <b>bahane</b> bildirir: “Yarınki matematik sınavım için çalışmam gerekiyor.” Bu nedenle davet <b>reddedilmelidir</b>: “Sorry, I’m afraid I can’t.” (Üzgünüm, korkarım gelemem.)</p><p>A, B ve D daveti kabul eden ifadelerdir; ardından gelen bahane ile çelişir. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Mert:</b> I’m really sorry I’m late, Zeynep. ----.<br><b>Zeynep:</b> Never mind. The film hasn’t started yet.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`The bus broke down on the way`, `I’d love to come to the cinema`, `Let’s go to the park next week`, `I don’t like watching films`], a: "A",
  s: `<p>Mert geç kaldığı için özür diliyor ve ardından bir <b>açıklama</b> yapması gerekiyor: “The bus broke down on the way.” (Otobüs yolda bozuldu.)</p><p>B bir daveti kabul ifadesi, C bir öneri, D bir beğenmeme ifadesidir; özrün nedenini açıklamaz. Cevap <b>A</b>.</p>` },
{ q: `<p>Selin is my best friend. She always keeps my secrets and never tells them to anyone. I can always rely on her.</p><p>Which word best describes Selin?</p>`,
  c: [`selfish`, `jealous`, `rude`, `trustworthy`], a: "D",
  s: `<p>Metne göre Selin sırlarını saklar, kimseye anlatmaz ve ona her zaman güvenilebilir (“I can always rely on her”). Bu özellik <b>trustworthy</b> (güvenilir) sözcüğüyle anlatılır.</p><p>Selfish bencil, jealous kıskanç, rude kaba demektir. Cevap <b>D</b>.</p>` },
{ q: `<p><b>Group chat: Weekend Plans</b><br><b>Deniz:</b> Let’s go to the science museum on Sunday!<br><b>Ece:</b> Great idea! Count me in.<br><b>Can:</b> I’d love to, but I’m going to visit my grandparents in Bursa.<br><b>Ayşe:</b> I can come, but only in the afternoon. I have a piano lesson in the morning.</p><p>According to the messages, which of the following is <b>TRUE</b>?</p>`,
  c: [`Can accepts the invitation.`, `Ece refuses the invitation.`, `Ayşe can join them after her piano lesson.`, `Deniz is going to visit his grandparents.`], a: "C",
  s: `<p>Ayşe sabah piyano dersi olduğu için yalnızca öğleden sonra gelebileceğini söylüyor; yani <b>piyano dersinden sonra</b> onlara katılabilir (C ✓).</p><p>Can daveti reddeder (A ✗). Ece “Count me in!” diyerek kabul eder (B ✗). Büyükanne ve büyükbabasını ziyaret edecek olan Can’dır (D ✗). Cevap <b>C</b>.</p>` },
{ q: `<p>“A friend in need is a friend indeed.”</p><p>What does this saying mean?</p>`,
  c: [`A real friend helps you when you have problems.`, `Friends never need any help.`, `You should have a lot of friends.`, `Friends always want money from you.`], a: "A",
  s: `<p>Bu atasözü “Dost kara günde belli olur.” anlamına gelir: Gerçek arkadaş, <b>zor durumda olduğunda sana yardım eden</b> kişidir.</p><p>Diğer seçenekler atasözünün anlamıyla ilgisizdir. Cevap <b>A</b>.</p>` },
{ q: `<p><b>Lisa:</b> Thank you so much for helping me with my project, Mehmet.<br><b>Mehmet:</b> ----</p><p>Which of the following is the best response?</p>`,
  c: [`I’m afraid I can’t.`, `What are friends for?`, `Sorry, I’m busy.`, `Let’s meet at 5 p.m.`], a: "B",
  s: `<p>Lisa teşekkür ediyor. “What are friends for?” (Arkadaşlar ne içindir ki?) ifadesi, teşekküre karşılık olarak “Bu benim görevim, ne demek!” anlamında kullanılır.</p><p>A ve C reddetme, D bir buluşma önerisidir; teşekküre uygun cevap değildir. Cevap <b>B</b>.</p>` },
{ q: `<p>Put the sentences in the correct order to make a meaningful conversation.</p><p>(I) Sure! What time?<br>(II) Hey Ben, do you want to play basketball after school?<br>(III) At 4 o’clock in the school gym.<br>(IV) Great! See you there.</p>`,
  c: [`II – I – III – IV`, `I – II – III – IV`, `II – III – I – IV`, `III – I – II – IV`], a: "A",
  s: `<p>Konuşma bir davetle başlar (II), davet kabul edilip saat sorulur (I), saat ve yer bildirilir (III), konuşma vedayla biter (IV).</p><p>Doğru sıra: II – I – III – IV. Cevap <b>A</b>.</p>` },
{ q: `<p><b>Cem:</b> I’m so sorry, I broke your pencil.<br><b>Elif:</b> ---- I have another one.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`I’d love to.`, `How about going out?`, `Don’t worry.`, `Count me in.`], a: "C",
  s: `<p>Cem özür diliyor; Elif’in yanıtı özrü kabul eden bir ifade olmalıdır: “Don’t worry.” (Merak etme / Sorun değil.) Ardından “Başka bir tane var.” diyerek durumu açıklıyor.</p><p>A ve D daveti kabul, B öneri ifadesidir. Cevap <b>C</b>.</p>` },
{ q: `<p><i>Dear Melis,<br>I’m having a pyjama party at my house on Friday, 15th March. It starts at 7 p.m. We are going to watch films and eat pizza. Please bring your sleeping bag. Let me know if you can come.<br>Love, Asya</i></p><p>Which question is <b>NOT</b> answered in the invitation?</p>`,
  c: [`When is the party?`, `What are they going to do at the party?`, `What should Melis bring?`, `How many friends are coming to the party?`], a: "D",
  s: `<p>Davetiyede partinin zamanı (15 Mart Cuma, 19.00), partide yapılacaklar (film izlemek, pizza yemek) ve getirilmesi gereken şey (uyku tulumu) belirtilmiştir.</p><p>Partiye <b>kaç arkadaşın geleceği</b> yazılmamıştır. Cevap <b>D</b>.</p>` },
{ q: `<p>Ahmet always shares his snacks and toys with his friends. He likes giving things to others.</p><p>Which word describes Ahmet best?</p>`,
  c: [`generous`, `bossy`, `gossipy`, `mean`], a: "A",
  s: `<p>Ahmet’in atıştırmalıklarını ve oyuncaklarını arkadaşlarıyla paylaşması, başkalarına bir şeyler vermeyi sevmesi onun <b>generous</b> (cömert) olduğunu gösterir.</p><p>Bossy otoriter, gossipy dedikoducu, mean kaba/cimri demektir. Cevap <b>A</b>.</p>` },
{ q: `<p>“Tom is a <u>fair-weather friend</u>. He is always with me when I’m happy, but when I have a problem, he isn’t there.”</p><p>What does the underlined phrase mean?</p>`,
  c: [`A friend who loves sunny weather`, `A friend who supports you in difficult times`, `A friend who helps you with your homework`, `A friend who is only there in good times`], a: "D",
  s: `<p>Metne göre Tom, konuşan kişi mutluyken yanındadır ancak sorunu olduğunda ortada yoktur. “Fair-weather friend” <b>yalnızca iyi günlerde yanında olan</b> arkadaş anlamına gelir.</p><p>A hava durumuyla ilgili yanlış bir yorum, B tam tersidir; C metinde yoktur. Cevap <b>D</b>.</p>` },
{ q: `<p>Read the text.</p><p><i>A good friend listens to you when you have a problem. He or she tells you the truth even when it is difficult. A good friend doesn’t talk about you behind your back and is happy when you are successful.</i></p><p>According to the text, a good friend <b>doesn’t</b> ----.</p>`,
  c: [`listen to your problems`, `tell you the truth`, `gossip about you`, `feel happy for your success`], a: "C",
  s: `<p>Metne göre iyi bir arkadaş seni dinler (A), sana doğruyu söyler (B) ve başarına sevinir (D). Ayrıca “doesn’t talk about you behind your back” (arkandan konuşmaz) denmiştir.</p><p>Arkandan konuşmak <b>gossip</b> (dedikodu yapmak) demektir; iyi bir arkadaş bunu yapmaz. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Kaan:</b> I’m bored. ----?<br><b>Duru:</b> Good idea! The weather is perfect for cycling.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`Why don’t we ride our bikes in the park`, `Did you ride your bike yesterday`, `How much is a new bike`, `Where did you buy your bike`], a: "A",
  s: `<p>Kaan sıkıldığını söylüyor ve bir <b>öneride</b> bulunuyor; Duru “Good idea!” diyerek öneriyi kabul ediyor ve havanın bisiklet sürmek için mükemmel olduğunu belirtiyor. Boşluğa öneri cümlesi gelmelidir: “Why don’t we ride our bikes in the park?”</p><p>Diğer seçenekler soru cümleleridir ve “Good idea!” cevabıyla uyuşmaz. Cevap <b>A</b>.</p>` },
{ q: `<p><b>Melis:</b> Can you come to my house to study for the exam this evening?<br><b>Bora:</b> ----, but I have a football match at 6 p.m. Maybe tomorrow?</p><p>Which of the following best completes the conversation?</p>`,
  c: [`Sure, I’ll be there`, `I’d love to`, `That’s OK`, `Count me in`], a: "B",
  s: `<p>Bora’nın cümlesi “but” ile devam ediyor ve bir maçı olduğunu söylüyor; bu, daveti <b>nazikçe reddetmektir</b>. “I’d love to, but…” (Çok isterdim ama…) kalıbı burada uygundur.</p><p>A ve D daveti doğrudan kabul eder; “but” ile gelen bahaneyle çelişir. C bir özrü kabul ifadesidir. Cevap <b>B</b>.</p>` },
{ q: `<p>Match the expressions with their functions.</p><p>1. I’m sorry I forgot your birthday.<br>2. Would you like to come to my concert?<br>3. Sorry, I can’t. I’m busy.<br>4. Sure, I’d love to!</p><p>a. Refusing &nbsp; b. Apologizing &nbsp; c. Accepting &nbsp; d. Inviting</p>`,
  c: [`1-b, 2-d, 3-a, 4-c`, `1-a, 2-d, 3-b, 4-c`, `1-b, 2-c, 3-a, 4-d`, `1-d, 2-b, 3-c, 4-a`], a: "A",
  s: `<p>1. Doğum gününü unuttuğu için özür diliyor → <b>Apologizing</b> (b). 2. Konsere davet ediyor → <b>Inviting</b> (d). 3. Meşgul olduğu için reddediyor → <b>Refusing</b> (a). 4. Kabul ediyor → <b>Accepting</b> (c).</p><p>Doğru eşleştirme: 1-b, 2-d, 3-a, 4-c. Cevap <b>A</b>.</p>` },
{ q: `<p>A survey asked 100 teenagers: “What is the most important quality of a friend?”</p>
<svg viewBox="0 0 420 200" width="400" role="img" aria-label="Survey chart">
<line x1="110" y1="10" x2="110" y2="170" stroke="#333"/>
<g font-size="12" text-anchor="end"><text x="104" y="35">honesty</text><text x="104" y="75">loyalty</text><text x="104" y="115">sense of humour</text><text x="104" y="155">generosity</text></g>
<rect x="110" y="20" width="240" height="24" fill="#3b82f6"/><rect x="110" y="60" width="180" height="24" fill="#22c55e"/><rect x="110" y="100" width="90" height="24" fill="#f59e0b"/><rect x="110" y="140" width="90" height="24" fill="#a855f7"/>
<g font-size="12"><text x="356" y="37">40</text><text x="296" y="77">30</text><text x="206" y="117">15</text><text x="206" y="157">15</text></g>
<text x="250" y="192" font-size="11" text-anchor="middle">Number of students</text>
</svg>
<p>According to the chart, which of the following is <b>TRUE</b>?</p>`,
  c: [`Most teenagers think generosity is the most important quality.`, `Sense of humour and generosity got the same number of votes.`, `Loyalty is more important than honesty for most teenagers.`, `Fifty teenagers chose honesty.`], a: "B",
  s: `<p>Grafikte sense of humour (mizah anlayışı) ve generosity (cömertlik) <b>15’er oy</b> almıştır; yani eşit oy almışlardır (B ✓).</p><p>En çok oyu honesty (40) almıştır (A ✗). Loyalty (30) honesty’den (40) azdır (C ✗). Honesty’yi seçenler 40 kişidir, 50 değil (D ✗). Cevap <b>B</b>.</p>` },
{ q: `<p><b>Text message from Zeynep:</b> “Hi Arda! We are going to have a picnic by the lake on Sunday. Can you come?”<br><b>Arda’s reply:</b> “I wish I could, but I sprained my ankle yesterday. The doctor said I must rest for a week. Have fun!”</p><p>Why can’t Arda go to the picnic?</p>`,
  c: [`Because he has to visit his relatives.`, `Because he doesn’t like picnics.`, `Because he has an exam on Monday.`, `Because he hurt his ankle.`], a: "D",
  s: `<p>Arda, dün bileğini burktuğunu (“I sprained my ankle”) ve doktorun bir hafta dinlenmesi gerektiğini söylediğini belirtiyor. Pikniğe gidememesinin nedeni <b>bileğini incitmesidir</b>.</p><p>A, B ve C mesajda yer almaz. Cevap <b>D</b>.</p>` },
{ q: `<p>Which of the following is <b>NOT</b> a positive quality of a friend?</p>`,
  c: [`supportive`, `caring`, `selfish`, `understanding`], a: "C",
  s: `<p>Supportive (destekleyici), caring (ilgili, şefkatli) ve understanding (anlayışlı) olumlu özelliklerdir.</p><p><b>Selfish</b> (bencil) ise yalnızca kendini düşünen kişiyi tanımlar; olumsuz bir özelliktir. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Jack:</b> Hey Nil, how about going to the concert on Friday night?<br><b>Nil:</b> That sounds fun, but I’m not sure. I have to ask my parents first.<br><b>Jack:</b> OK. Let me know as soon as possible. The tickets are selling fast!</p><p>Which of the following is <b>TRUE</b> about the conversation?</p>`,
  c: [`Nil refuses the invitation immediately.`, `Nil needs to get permission from her parents.`, `Jack can’t go to the concert.`, `The tickets for the concert are sold out.`], a: "B",
  s: `<p>Nil, önce ailesine sorması gerektiğini söylüyor (“I have to ask my parents first”); yani <b>ailesinden izin alması</b> gerekiyor (B ✓).</p><p>Nil daveti hemen reddetmemiş, kararsız kalmıştır (A ✗). Jack konsere gidecek ve Nil’i davet ediyor (C ✗). Biletler hızla satılıyor ama tükenmemiş (D ✗). Cevap <b>B</b>.</p>` },
{ q: `<p>“Emre and I have been friends since primary school. We <u>get on well with</u> each other because we have a lot in common. We both love football and computer games.”</p><p>What does the underlined phrase mean?</p>`,
  c: [`argue all the time`, `have a good relationship`, `never meet each other`, `compete with each other`], a: "B",
  s: `<p>“Get on well with” birisiyle <b>iyi anlaşmak</b> anlamına gelir. Metinde Emre ile konuşan kişinin pek çok ortak noktası olduğu ve ikisinin de futbolu ve bilgisayar oyunlarını sevdiği belirtilerek bu ilişki desteklenmiştir.</p><p>Diğer seçenekler metnin anlamıyla çelişir. Cevap <b>B</b>.</p>` }
]
});
