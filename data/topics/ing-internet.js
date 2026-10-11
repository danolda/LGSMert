LGS.add({
id: "ing-internet",
summary: `
<h3>1. Internet Words (İnternet sözcükleri)</h3>
<table class="rt"><tr><td><b>download</b></td><td>indirmek</td><td><b>upload</b></td><td>yüklemek</td><td><b>log in / log out</b></td><td>giriş / çıkış yapmak</td></tr>
<tr><td><b>sign up</b></td><td>kaydolmak</td><td><b>account</b></td><td>hesap</td><td><b>username / password</b></td><td>kullanıcı adı / şifre</td></tr>
<tr><td><b>browser</b></td><td>internet tarayıcısı</td><td><b>search engine</b></td><td>arama motoru</td><td><b>attachment</b></td><td>e-posta eki</td></tr>
<tr><td><b>post / share</b></td><td>paylaşmak</td><td><b>follower</b></td><td>takipçi</td><td><b>virus / hacker</b></td><td>virüs / bilgisayar korsanı</td></tr>
<tr><td><b>addicted</b></td><td>bağımlı</td><td><b>cyberbullying</b></td><td>siber zorbalık</td><td><b>digital footprint</b></td><td>dijital ayak izi</td></tr></table>

<h3>2. How often do you go online?</h3>
<div class="fig"><svg viewBox="0 0 640 100" width="620" role="img" aria-label="Sıklık zarfları ölçeği">
<defs><linearGradient id="ii1" x1="0" x2="1"><stop offset="0" stop-color="#e2e8f0"/><stop offset="1" stop-color="#2563eb"/></linearGradient></defs>
<rect x="30" y="40" width="580" height="16" rx="8" fill="url(#ii1)"/>
<g font-size="12" text-anchor="middle" fill="#1e293b">
<g stroke="#1e293b" stroke-width="2"><line x1="38" y1="34" x2="38" y2="62"/><line x1="96" y1="34" x2="96" y2="62"/><line x1="320" y1="34" x2="320" y2="62"/><line x1="436" y1="34" x2="436" y2="62"/><line x1="552" y1="34" x2="552" y2="62"/><line x1="602" y1="34" x2="602" y2="62"/></g>
<g font-weight="bold"><text x="38" y="26">never</text><text x="96" y="26">rarely</text><text x="320" y="26">sometimes</text><text x="436" y="26">often</text><text x="552" y="26">usually</text><text x="602" y="26">always</text></g>
<text x="38" y="78">0%</text><text x="96" y="78">10%</text><text x="320" y="78">50%</text><text x="436" y="78">70%</text><text x="552" y="78">90%</text><text x="602" y="78">100%</text>
<text x="320" y="96" fill="#475569">once a week · twice a day · three times a month · every day · all the time</text>
</g></svg></div>

<h3>3. Online Safety: Do’s and Don’ts</h3>
<div class="fig"><svg viewBox="0 0 640 190" width="620" role="img" aria-label="İnternet güvenliği">
<rect x="5" y="5" width="310" height="180" rx="12" fill="#dcfce7" stroke="#16a34a"/>
<rect x="325" y="5" width="310" height="180" rx="12" fill="#fee2e2" stroke="#dc2626"/>
<g font-size="13" fill="#1e293b">
<text x="160" y="32" text-anchor="middle" font-weight="bold" fill="#15803d" font-size="15">DO ✓</text>
<text x="480" y="32" text-anchor="middle" font-weight="bold" fill="#b91c1c" font-size="15">DON’T ✗</text>
<text x="20" y="65">• Use strong passwords.</text><text x="20" y="95">• Log out on shared computers.</text><text x="20" y="125">• Check the source of the news.</text><text x="20" y="155">• Tell an adult about cyberbullying.</text>
<text x="340" y="65">• Share your address or password.</text><text x="340" y="95">• Click links from strangers.</text><text x="340" y="125">• Accept requests from strangers.</text><text x="340" y="155">• Post things you may regret later.</text>
</g></svg></div>

<h3>4. Giving Opinions, Agreeing and Disagreeing</h3>
<ul>
<li><b>Opinion:</b> I think / I believe / In my opinion / As far as I’m concerned, the Internet is useful.</li>
<li><b>Agree:</b> I agree with you. · You’re right. · Absolutely! · I feel the same way.</li>
<li><b>Disagree:</b> I don’t agree with you. · I’m not sure about that. · I see your point, but…</li>
<li><b>Advantages / Disadvantages:</b> The Internet is a huge library, it’s fast and practical… <b>but</b> it can be addictive, it can cause health problems (eye strain, lack of sleep) and our personal information can be stolen.</li>
</ul>
`,
qs: [
{ q: `<p>“to copy files, music or programs from the Internet to your computer or phone”</p><p>Which word matches this definition?</p>`,
  c: [`download`, `upload`, `log out`, `delete`], a: "A",
  s: `<p>İnternetten bilgisayara ya da telefona dosya, müzik veya program kopyalamak <b>download</b> (indirmek) demektir.</p><p>Upload bilgisayardan internete yüklemek, log out oturumu kapatmak, delete silmektir. Cevap <b>A</b>.</p>` },
{ q: `<table class="rt"><tr><th>A STRONG PASSWORD</th></tr><tr><td>✓ has at least 8 characters</td></tr><tr><td>✓ has capital letters, small letters, numbers and symbols (!, #, ?)</td></tr><tr><td>✗ doesn’t include your name or birthday</td></tr></table><table class="rt"><tr><th>Student</th><th>Password</th></tr><tr><td>Aslı</td><td>asli2010</td></tr><tr><td>Bora</td><td>12345678</td></tr><tr><td>Cem</td><td>Sunny!day</td></tr><tr><td>Duru</td><td>Gr8#mOon5</td></tr></table><p>Whose password follows <b>all</b> the rules?</p>`,
  c: [`Aslı’s`, `Bora’s`, `Cem’s`, `Duru’s`], a: "D",
  s: `<p>Aslı’nın şifresi adını ve doğum yılını içeriyor ✗; Bora’nınki yalnızca rakamlardan oluşuyor ✗; Cem’inkinde rakam yok ✗.</p><p>Duru’nun şifresi (Gr8#mOon5) 9 karakterli; büyük harf (G, O), küçük harf, rakam (8, 5) ve sembol (#) içeriyor, ad veya doğum günü içermiyor ✓. Cevap <b>D</b>.</p>` },
{ q: `<p><b>Kaan:</b> I think social media is a complete waste of time.<br><b>Defne:</b> ---- It helps me keep in touch with my cousins abroad.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`You’re absolutely right.`, `I don’t agree with you.`, `I feel the same way.`, `That’s exactly what I think.`], a: "B",
  s: `<p>Defne, sosyal medyanın yurt dışındaki kuzenleriyle iletişim kurmasına <b>yardım ettiğini</b> söylüyor; yani Kaan’ın “zaman kaybı” görüşüne <b>katılmıyor</b>: “I don’t agree with you.”</p><p>A, C ve D katılma ifadeleridir ve Defne’nin devam eden cümlesiyle çelişir. Cevap <b>B</b>.</p>` },
{ q: `<p><b>What to do about cyberbullying</b></p><p>Cyberbullying is bullying that happens online, through messages, comments or posts. If someone bullies you online, don’t reply to them. Take screenshots of the messages and keep them as evidence. Block the person and report them to the website. Most importantly, talk to an adult you trust, like a parent or a teacher.</p><p>Which of the following is <b>NOT</b> recommended in the text?</p>`,
  c: [`Saving the messages as evidence`, `Blocking the bully`, `Replying to the bully with angry messages`, `Talking to a parent or a teacher`], a: "C",
  s: `<p>Metinde ekran görüntüsü alıp saklamak (A), zorbayı engellemek (B) ve güvenilen bir yetişkinle konuşmak (D) önerilmektedir.</p><p>Metin açıkça “don’t reply to them” (onlara cevap verme) diyor; kızgın mesajlarla cevap vermek önerilmez. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Ela’s Internet Habits</b></p><table class="rt"><tr><th>Activity</th><th>How often?</th></tr><tr><td>social media</td><td>every day</td></tr><tr><td>online games</td><td>twice a week</td></tr><tr><td>online shopping</td><td>once a month</td></tr><tr><td>video lessons</td><td>three times a week</td></tr><tr><td>reading the news</td><td>never</td></tr></table><p>According to the table, which of the following is <b>TRUE</b>?</p>`,
  c: [`She never shops online.`, `She reads the news online every day.`, `She plays online games every day.`, `She watches video lessons more often than she plays online games.`], a: "D",
  s: `<p>Ela haftada <b>üç kez</b> video ders izliyor, haftada <b>iki kez</b> online oyun oynuyor; yani video dersleri daha sık izliyor (D ✓).</p><p>Ayda bir online alışveriş yapıyor (A ✗); haberleri hiç okumuyor (B ✗); online oyunu her gün değil haftada iki kez oynuyor (C ✗). Cevap <b>D</b>.</p>` },
{ q: `<p>I. We can find information very quickly.<br>II. Some people become addicted to online games.<br>III. Our personal information can be stolen.<br>IV. We can take online courses from home.</p><p>Which of the statements above are <b>disadvantages</b> of the Internet?</p>`,
  c: [`II and III`, `I and IV`, `I and II`, `III and IV`], a: "A",
  s: `<p>II (oyun bağımlılığı) ve III (kişisel bilgilerin çalınması) internetin <b>olumsuz</b> yönleridir.</p><p>I (bilgiye hızlı ulaşmak) ve IV (evden online kurs almak) ise internetin <b>avantajlarıdır</b>. Cevap <b>A</b>.</p>` },
{ q: `<p>“Don’t forget to ---- after you use a computer at the library. Otherwise, other people can use your account.”</p><p>Which of the following best completes the sentence?</p>`,
  c: [`sign up`, `download`, `log in`, `log out`], a: "D",
  s: `<p>Ortak kullanılan bir bilgisayarda işin bitince hesabından <b>çıkış yapmalısın</b> (log out); yoksa başkaları hesabını kullanabilir.</p><p>Sign up kaydolmak, log in giriş yapmak, download indirmektir; hesabı korumazlar. Cevap <b>D</b>.</p>` },
{ q: `<p>Your friend wants to buy a pair of shoes from a website she has never heard of. The prices are unbelievably low, and the website asks for her bank card password.</p><p>What do you say to your friend?</p>`,
  c: [`Buy them quickly before they sell out!`, `Don’t share your card information. It may be a fake website.`, `Send them your password by e-mail, too.`, `Tell all your friends to shop there.`], a: "B",
  s: `<p>İnanılmaz ucuz fiyatlar ve banka kartı <b>şifresi</b> istenmesi sahte (dolandırıcı) bir sitenin işaretleridir. Arkadaşını uyarmalısın: “Kart bilgilerini paylaşma, sahte bir site olabilir.”</p><p>Diğer seçenekler arkadaşını tehlikeye atar. Cevap <b>B</b>.</p>` },
{ q: `<p><b>Ahmet:</b> I use the Internet to do my homework. It’s like a huge library.<br><b>Oya:</b> Online games help me relax, and I make friends from different countries.<br><b>Tolga:</b> I’m worried about my privacy. Some companies collect our personal data.<br><b>Sena:</b> I spend hours on social media at night, so I can’t sleep well.</p><p>Who mentions a <b>health problem</b> caused by the Internet?</p>`,
  c: [`Ahmet`, `Oya`, `Tolga`, `Sena`], a: "D",
  s: `<p>Sena geceleri saatlerce sosyal medyada vakit geçirdiği için <b>iyi uyuyamadığını</b> söylüyor; uykusuzluk bir sağlık sorunudur.</p><p>Ahmet ve Oya internetin faydalarından, Tolga ise gizlilik (privacy) endişesinden bahsediyor. Cevap <b>D</b>.</p>` },
{ q: `<p>“a harmful program that can damage your computer and spread from one computer to another”</p><p>Which word matches this definition?</p>`,
  c: [`virus`, `browser`, `password`, `attachment`], a: "A",
  s: `<p>Bilgisayara zarar veren ve bilgisayardan bilgisayara <b>yayılan</b> zararlı program <b>virus</b>tür.</p><p>Browser internet tarayıcısı, password şifre, attachment e-posta ekidir. Cevap <b>A</b>.</p>` },
{ q: `<p><b>Burcu:</b> How often do you go online?<br><b>Emir:</b> ----. I check my e-mails every morning and every evening.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`Never`, `Once a month`, `Twice a day`, `Rarely`], a: "C",
  s: `<p>Emir e-postalarını her sabah ve her akşam kontrol ediyor; yani günde <b>iki kez</b> internete giriyor: “Twice a day.”</p><p>Never (hiç), once a month (ayda bir) ve rarely (nadiren) bu açıklamayla çelişir. Cevap <b>C</b>.</p>` },
{ q: `<p>(I) Choose a username and a strong password.<br>(II) Go to the website and click “Sign up”.<br>(III) Log in with your new account and start using it.<br>(IV) Confirm your e-mail address with the link they send you.</p><p>What is the correct order of the steps to create a new account?</p>`,
  c: [`II – I – IV – III`, `I – II – III – IV`, `II – IV – I – III`, `IV – II – I – III`], a: "A",
  s: `<p>Önce siteye girilip “Sign up” (kaydol) tıklanır (II), ardından kullanıcı adı ve şifre belirlenir (I). Sonra gönderilen bağlantıyla e-posta onaylanır (IV) ve en son yeni hesapla giriş yapılır (III).</p><p>Sıralama: II – I – IV – III. Cevap <b>A</b>.</p>` },
{ q: `<p><b>Students in 8/B who do these activities every day</b></p><div class="fig"><svg viewBox="0 0 420 220" width="400" role="img" aria-label="Sütun grafiği">
<g font-size="11" fill="#334155"><g stroke="#e2e8f0"><line x1="50" y1="150" x2="400" y2="150"/><line x1="50" y1="120" x2="400" y2="120"/><line x1="50" y1="90" x2="400" y2="90"/><line x1="50" y1="60" x2="400" y2="60"/></g>
<g text-anchor="end"><text x="44" y="184">0</text><text x="44" y="154">4</text><text x="44" y="124">8</text><text x="44" y="94">12</text><text x="44" y="64">16</text></g>
<g fill="#a78bfa"><rect x="62" y="75" width="50" height="105"/><rect x="146" y="105" width="50" height="75"/><rect x="230" y="120" width="50" height="60"/><rect x="314" y="90" width="50" height="90"/></g>
<g text-anchor="middle"><text x="87" y="198">Social media</text><text x="171" y="198">Online games</text><text x="255" y="198">Homework</text><text x="339" y="198">Videos</text>
<text x="87" y="69" font-weight="bold">14</text><text x="171" y="99" font-weight="bold">10</text><text x="255" y="114" font-weight="bold">8</text><text x="339" y="84" font-weight="bold">12</text>
<text x="18" y="110" transform="rotate(-90 18 110)">students</text></g>
<g stroke="#334155" stroke-width="1.5"><line x1="50" y1="40" x2="50" y2="180"/><line x1="50" y1="180" x2="400" y2="180"/></g></g></svg></div><p>According to the graph, which of the following is <b>TRUE</b>?</p>`,
  c: [`Doing homework online is the most common activity.`, `More students watch videos than play online games.`, `Online games are as popular as social media.`, `Fewer students use social media than do homework online.`], a: "B",
  s: `<p>Grafiğe göre her gün video izleyen 12, online oyun oynayan 10 öğrenci var; video izleyenler <b>daha fazla</b> (B ✓).</p><p>En yaygın etkinlik sosyal medyadır (14) (A ✗); online oyun (10) sosyal medya (14) kadar popüler değil (C ✗); sosyal medya kullananlar (14) ödev yapanlardan (8) fazla (D ✗). Cevap <b>B</b>.</p>` },
{ q: `<p><b>From:</b> prize-winner@free-gifts.xyz<br><b>Subject:</b> CONGRATULATIONS!!! You won a new phone!</p><p>Dear user, you are our lucky winner! To get your free phone, click the link below and enter your username and password in 24 hours.</p><p>Ada received this e-mail from someone she doesn’t know. What should she do?</p>`,
  c: [`Delete the e-mail without clicking the link.`, `Click the link quickly to get the phone.`, `Send her password to the sender.`, `Forward the e-mail to all her friends.`], a: "A",
  s: `<p>Tanımadığı birinden gelen, “ödül kazandınız” diyen ve <b>şifre</b> isteyen e-posta tipik bir dolandırıcılık (phishing) örneğidir. Ada bağlantıya tıklamadan e-postayı <b>silmelidir</b>.</p><p>Bağlantıya tıklamak, şifre göndermek veya e-postayı arkadaşlarına iletmek hesabını ve arkadaşlarını tehlikeye atar. Cevap <b>A</b>.</p>` },
{ q: `<p>“Lara’s travel blog has 5,000 ----. This means 5,000 people see her new posts on their screens.”</p><p>Which word best completes the sentence?</p>`,
  c: [`passwords`, `viruses`, `browsers`, `followers`], a: "D",
  s: `<p>Bir blogdaki yeni paylaşımları gören kişiler o blogun <b>takipçileridir</b>: “Lara’s blog has 5,000 followers.”</p><p>Şifre, virüs ve tarayıcı bu anlamı karşılamaz. Cevap <b>D</b>.</p>` },
{ q: `<p><b>Mom:</b> Arda, you’ve been in front of the computer for three hours!<br><b>Arda:</b> ----<br><b>Mom:</b> OK, but after that, turn it off and go out for some fresh air.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`I’m going to play for three more hours.`, `I hate computers, Mom.`, `I’m almost done with my project, Mom. Just ten more minutes.`, `Where is the computer?`], a: "C",
  s: `<p>Annesi “Tamam, <b>ama ondan sonra</b> kapat ve temiz hava al.” diyor; yani Arda kısa bir süre daha istemiş olmalı: “Projemi bitirmek üzereyim, sadece on dakika daha.”</p><p>Üç saat daha oynamak isteyen birine “OK” denmez (A ✗); B ve D konuşmanın akışıyla uyuşmaz. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Hilal:</b> I took online English lessons last summer. It was practical because I didn’t have to travel, and I could watch the recordings again. However, I sometimes had connection problems and I missed chatting with my classmates. So, I still prefer real classrooms.</p><p>Which of the following is <b>TRUE</b> about Hilal?</p>`,
  c: [`She didn’t have any problems during online lessons.`, `She prefers face-to-face lessons although online lessons have some advantages.`, `She couldn’t watch the lessons again.`, `She thinks online lessons are better than real classrooms.`], a: "B",
  s: `<p>Hilal online derslerin pratik olduğunu ve kayıtları tekrar izleyebildiğini (avantajlar) söylüyor; ancak bağlantı sorunları ve arkadaşlarını özlemesi yüzünden “I still prefer real classrooms.” diyor. Yani avantajlarına rağmen <b>yüz yüze dersleri</b> tercih ediyor (B ✓).</p><p>Bağlantı sorunları yaşamış (A ✗); kayıtları tekrar izleyebilmiş (C ✗); gerçek sınıfları daha iyi buluyor (D ✗). Cevap <b>B</b>.</p>` },
{ q: `<p>Everything you post online – photos, comments, likes – stays on the Internet for a long time, even after you delete it. This is called your “digital footprint”. Before you post something, ask yourself: “Would I be happy if my teacher or my future boss saw this?”</p><p>What is the main idea of the text?</p>`,
  c: [`We should be careful about what we share online because it can stay there for a long time.`, `We should post more photos to have a bigger digital footprint.`, `Teachers check their students’ social media accounts every day.`, `Deleting a post removes it from the Internet completely.`], a: "A",
  s: `<p>Metin, internette paylaşılan her şeyin silinse bile <b>uzun süre kaldığını</b> (dijital ayak izi) anlatıyor ve paylaşmadan önce düşünmemizi öğütlüyor. Ana fikir: Paylaştıklarımıza <b>dikkat etmeliyiz</b>.</p><p>B metnin amacına terstir; C metinde yoktur; D metinle çelişir (“even after you delete it”). Cevap <b>A</b>.</p>` },
{ q: `<p>“I can’t send you the homework now. The Wi-Fi is ---- again, so I can’t connect to the Internet.”</p><p>Which word best completes the sentence?</p>`,
  c: [`up`, `on`, `online`, `down`], a: "D",
  s: `<p>İnternete bağlanamamasının sebebi Wi-Fi’ın <b>çalışmamasıdır</b>. İngilizcede bir sistemin çökmesi / çalışmaması “<b>be down</b>” ile ifade edilir: “The Wi-Fi is down.”</p><p>“Up”, “on” ve “online” sistemin çalıştığını anlatır; bağlanamama durumuyla çelişir. Cevap <b>D</b>.</p>` },
{ q: `<p>Your friend posted a photo of you on social media without asking you, and you don’t like the photo.</p><p>What do you say to your friend?</p>`,
  c: [`Thanks! Please post more photos like this.`, `Can you send me your password?`, `Could you remove the photo, please? I don’t want it online.`, `Let’s download a new browser.`], a: "C",
  s: `<p>İzni olmadan paylaşılan ve beğenmediğin fotoğraf için arkadaşından kibarca fotoğrafı <b>kaldırmasını</b> istersin: “Could you remove the photo, please?”</p><p>A durumla çelişir; B ve D konuyla ilgisizdir. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Internet Rules in the Yılmaz Family</b></p><table class="rt"><tr><td>🕐</td><td>Weekdays: 1 hour, only after homework</td></tr><tr><td>🕒</td><td>Weekends: 3 hours</td></tr><tr><td>🍽️</td><td>No phones at dinner</td></tr><tr><td>💻</td><td>The computer stays in the living room</td></tr></table><p>According to the rules, which of the following is <b>TRUE</b>?</p>`,
  c: [`The children can use the Internet longer at weekends.`, `The children can use their phones during dinner.`, `The children can go online before doing their homework on weekdays.`, `The computer is in the children’s bedroom.`], a: "A",
  s: `<p>Hafta içi 1 saat, hafta sonu 3 saat internet kullanılabiliyor; yani çocuklar hafta sonu <b>daha uzun</b> süre internete girebilir (A ✓).</p><p>Akşam yemeğinde telefon yasak (B ✗); hafta içi internet yalnızca ödevden <b>sonra</b> (C ✗); bilgisayar oturma odasında (D ✗). Cevap <b>A</b>.</p>` },
{ q: `<p><b>Can:</b> ----?<br><b>Mia:</b> About two hours a day, but a bit more at weekends.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`What do you usually do online`, `Which website do you like best`, `Why do you use social media`, `How much time do you spend online every day`], a: "D",
  s: `<p>Mia bir <b>süre</b> söylüyor: “Günde yaklaşık iki saat.” Bu nedenle soru internette ne kadar zaman geçirdiğini sormalıdır: “How much time do you spend online every day?”</p><p>A etkinlik, B site adı, C sebep sorar; cevapla uyuşmaz. Cevap <b>D</b>.</p>` },
{ q: `<p><b>Is it real or fake?</b></p><p>Not everything on the Internet is true. Before you share a piece of news, look at who wrote it and when it was written. Then search for the same news on other reliable websites. If you can’t find it anywhere else, it might be fake.</p><p>According to the text, what should you do before sharing news?</p>`,
  c: [`Share it quickly before others do.`, `Check whether other reliable websites give the same information.`, `Only read the title of the news.`, `Ask your followers to like it.`], a: "B",
  s: `<p>Metne göre haberi paylaşmadan önce yazarına ve tarihine bakmalı, ardından aynı haberi <b>başka güvenilir sitelerde</b> aramalıyız (B ✓).</p><p>Hızlıca paylaşmak, sadece başlığı okumak veya beğeni istemek metinde önerilmez. Cevap <b>B</b>.</p>` },
{ q: `<p>“I’ve finished our science project. I’ll send it to you as an ---- with my e-mail, so you can download it.”</p><p>Which word best completes the sentence?</p>`,
  c: [`account`, `username`, `attachment`, `browser`], a: "C",
  s: `<p>E-postayla birlikte gönderilen ve indirilebilen dosyaya <b>attachment</b> (ek) denir.</p><p>Account hesap, username kullanıcı adı, browser tarayıcıdır. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Okan:</b> I share my home address on social media, so my friends can visit me.<br><b>Gizem:</b> I use the same password for all my accounts because it’s easy to remember.<br><b>Ferhat:</b> I accept friend requests from everyone, even from strangers.<br><b>Melis:</b> I never open links from people I don’t know.</p><p>Who is a <b>responsible</b> Internet user?</p>`,
  c: [`Okan`, `Gizem`, `Ferhat`, `Melis`], a: "D",
  s: `<p>Melis tanımadığı kişilerden gelen bağlantıları açmıyor; bu <b>güvenli</b> bir davranıştır.</p><p>Ev adresini paylaşmak (Okan), tüm hesaplarda aynı şifreyi kullanmak (Gizem) ve yabancıların arkadaşlık isteklerini kabul etmek (Ferhat) tehlikeli davranışlardır. Cevap <b>D</b>.</p>` },
{ q: `<p>“My brother is <u>addicted</u> to online games. He can’t stop playing, even late at night.”</p><p>What does the underlined word mean?</p>`,
  c: [`unable to stop doing something`, `not interested in something`, `afraid of something`, `good at something`], a: "A",
  s: `<p>Cümlede kardeşin gece geç saatlerde bile oyunu <b>bırakamadığı</b> söyleniyor. <b>Addicted</b> (bağımlı) bir şeyi yapmayı bırakamayan demektir.</p><p>İlgisiz olmak, korkmak veya bir şeyde iyi olmak bu anlamı vermez. Cevap <b>A</b>.</p>` }
]
});
