LGS.add({
id: "ing-phone",
summary: `
<h3>1. A Phone Call Step by Step (Bir telefon görüşmesinin akışı)</h3>
<div class="fig"><svg viewBox="0 0 680 240" width="620" role="img" aria-label="Telefon görüşmesi akış şeması">
<defs><marker id="ip1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker></defs>
<g font-size="12" text-anchor="middle">
<g fill="#e0f2fe" stroke="#0284c7"><rect x="5" y="10" width="205" height="70" rx="10"/><rect x="240" y="10" width="205" height="70" rx="10"/><rect x="470" y="10" width="205" height="70" rx="10"/></g>
<text x="107" y="32" font-weight="bold">1. Answering</text><text x="107" y="50">Hello, Star Travel.</text><text x="107" y="67">How can I help you?</text>
<text x="342" y="32" font-weight="bold">2. Asking for someone</text><text x="342" y="50">Can I speak to</text><text x="342" y="67">Mr. Kaya, please?</text>
<text x="572" y="32" font-weight="bold">3. Checking</text><text x="572" y="50">Who’s calling, please?</text><text x="572" y="67">Hold on a moment.</text>
<rect x="240" y="125" width="205" height="70" rx="10" fill="#dcfce7" stroke="#16a34a"/>
<text x="342" y="147" font-weight="bold">He is available</text><text x="342" y="165">I’ll put you through.</text><text x="342" y="182">(bağlıyorum)</text>
<rect x="470" y="125" width="205" height="70" rx="10" fill="#fee2e2" stroke="#dc2626"/>
<text x="572" y="147" font-weight="bold">He isn’t available</text><text x="572" y="165">I’m afraid he’s in a meeting.</text><text x="572" y="182">Can I take a message?</text>
<rect x="5" y="125" width="205" height="70" rx="10" fill="#fef3c7" stroke="#d97706"/>
<text x="107" y="147" font-weight="bold">4. Ending</text><text x="107" y="165">Thanks for calling.</text><text x="107" y="182">Talk to you soon. Bye!</text>
<g stroke="#475569" stroke-width="2" fill="none"><line x1="210" y1="45" x2="238" y2="45" marker-end="url(#ip1)"/><line x1="445" y1="45" x2="468" y2="45" marker-end="url(#ip1)"/><line x1="572" y1="80" x2="572" y2="123" marker-end="url(#ip1)"/><line x1="530" y1="80" x2="400" y2="123" marker-end="url(#ip1)"/><line x1="240" y1="160" x2="212" y2="160" marker-end="url(#ip1)"/><path d="M572,195 L572,222 L107,222 L107,197" marker-end="url(#ip1)"/></g>
<text x="445" y="96" fill="#16a34a" font-weight="bold">yes</text><text x="590" y="108" fill="#dc2626" font-weight="bold">no</text>
</g></svg></div>

<h3>2. Useful Phrases</h3>
<table class="rt"><tr><th>Arayan (caller)</th><th>Cevaplayan (receiver)</th></tr>
<tr><td>Hello, this is Ada. / It’s Ada here.</td><td>Hello? · Good morning, Star Travel.</td></tr>
<tr><td>Can / Could / May I speak to Mr. Kaya?</td><td>Who’s calling, please? · Speaking. (Benim.)</td></tr>
<tr><td>Is Burak there? / Is Burak in?</td><td>Hold on / Hang on, please. · I’ll put you through.</td></tr>
<tr><td>Can I leave a message?</td><td>He’s not in. Can I take a message?</td></tr>
<tr><td>Could you tell him to call me back?</td><td>I’ll give him your message.</td></tr>
<tr><td>Thanks. Talk to you later. Bye!</td><td>Thanks for calling. Have a nice day.</td></tr></table>

<h3>3. Phone Words and Problems</h3>
<ul>
<li><b>dial</b> (numarayı çevirmek) · <b>pick up</b> (telefonu açmak) · <b>hang up</b> (telefonu kapatmak) · <b>call back</b> (geri aramak) · <b>missed call</b> (cevapsız çağrı) · <b>voice message</b> (sesli mesaj) · <b>text</b> (mesaj atmak) · <b>charger</b> (şarj aleti)</li>
<li><b>Problems:</b> The line is busy / engaged. (Hat meşgul.) · The signal is weak. · My battery is low / dead. · You’ve got the wrong number. (Yanlış numara.)</li>
<li><b>Asking for help:</b> Could you <b>speak up</b>, please? (Daha yüksek sesle) · Could you <b>repeat</b> that, please? · Could you <b>spell</b> your name?</li>
</ul>
<p class="note">Resmî görüşmelerde <b>Could / May I…?</b>, arkadaşlar arasında <b>Can I…? / Is … there?</b> tercih edilir. Kendini tanıtırken “I am Ada.” değil, <b>“This is Ada.”</b> denir.</p>
`,
qs: [
{ q: `<p><b>Receptionist:</b> Good morning, Green Valley Hospital. How can I help you?<br><b>Deniz:</b> Hello, can I speak to Dr. Aydın, please?<br><b>Receptionist:</b> ----<br><b>Deniz:</b> This is Deniz Ateş. I’m calling about my test results.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`Who’s calling, please?`, `I’ll call you back later.`, `Sorry, the line is busy.`, `Can you speak up, please?`], a: "A",
  s: `<p>Deniz boşluktan sonra <b>kendini tanıtıyor</b>: “This is Deniz Ateş.” Demek ki resepsiyonist arayanın kim olduğunu sormuştur: “Who’s calling, please?” (Kim arıyor acaba?)</p><p>Geri arama sözü, hattın meşgul olması ya da daha yüksek sesle konuşma ricası Deniz’in cevabıyla uyuşmaz. Cevap <b>A</b>.</p>` },
{ q: `<p>“Please don’t <u>hang up</u>! I need to tell you something important.”</p><p>What does the underlined phrase mean?</p>`,
  c: [`to start a phone call`, `to end a phone call`, `to answer a phone call`, `to make a phone call louder`], a: "B",
  s: `<p><b>Hang up</b>, telefonu kapatmak yani görüşmeyi <b>bitirmek</b> demektir. Konuşan kişi “Kapatma! Sana önemli bir şey söylemem gerek.” diyor.</p><p>Görüşmeyi başlatmak “make a call / dial”, telefonu açmak “pick up / answer” ile ifade edilir. Cevap <b>B</b>.</p>` },
{ q: `<table class="rt"><tr><th colspan="2">WHILE YOU WERE OUT</th></tr><tr><td><b>To:</b></td><td>Mrs. Erdem</td></tr><tr><td><b>From:</b></td><td>Kerem Usta (plumber)</td></tr><tr><td><b>Time:</b></td><td>10:15 a.m.</td></tr><tr><td><b>Message:</b></td><td>He can’t come today. He will come on Thursday at 9 a.m. Please call him back to confirm.</td></tr></table><p>Which of the following is <b>TRUE</b> according to the note?</p>`,
  c: [`The plumber called in the afternoon.`, `Mrs. Erdem talked to the plumber on the phone.`, `The plumber wants Mrs. Erdem to call him back.`, `The plumber will come to fix the problem today.`], a: "C",
  s: `<p>Notta “Please call him back to confirm.” (Onaylamak için lütfen onu geri arayın.) yazıyor; tesisatçı Bayan Erdem’in <b>kendisini geri aramasını</b> istiyor (C ✓).</p><p>Arama sabah 10:15’te yapılmış (A ✗); not “While you were out” başlıklı, yani Bayan Erdem evde değilken alınmış (B ✗); tesisatçı bugün değil perşembe gelecek (D ✗). Cevap <b>C</b>.</p>` },
{ q: `<p>You are talking to your friend on the phone, but there is a lot of noise around you and you can’t hear her well.</p><p>What do you say to your friend?</p>`,
  c: [`Can I take a message?`, `Who’s calling, please?`, `Sorry, you’ve got the wrong number.`, `Could you speak up, please?`], a: "D",
  s: `<p>Karşındakini iyi duyamadığında ondan <b>daha yüksek sesle konuşmasını</b> istersin: “Could you speak up, please?”</p><p>Mesaj almak, arayanın kim olduğunu sormak ve yanlış numara demek bu durumla ilgili değildir. Cevap <b>D</b>.</p>` },
{ q: `<p>(I) Yes, please. Could you tell him to call me back?<br>(II) Hello, can I speak to Burak, please?<br>(III) I’m sorry, he isn’t at home right now. Would you like to leave a message?<br>(IV) Of course. I’ll give him your message.</p><p>Which of the following is the correct order of the conversation?</p>`,
  c: [`II – III – I – IV`, `II – I – III – IV`, `III – II – I – IV`, `II – IV – III – I`], a: "A",
  s: `<p>Görüşme Burak’ı istemekle başlar (II). Karşıdaki kişi Burak’ın evde olmadığını söyleyip mesaj bırakmak isteyip istemediğini sorar (III). Arayan “Yes, please” diyerek geri aranmayı rica eder (I). Son olarak mesajın iletileceği söylenir (IV).</p><p>Sıralama: II – III – I – IV. Cevap <b>A</b>.</p>` },
{ q: `<p><b>Caller:</b> Good afternoon. I’d like to talk to Ms. Polat, please.<br><b>Ms. Polat:</b> Speaking.</p><p>What does Ms. Polat mean?</p>`,
  c: [`She wants the caller to speak louder.`, `She is too busy to talk now.`, `She is the person that the caller wants to talk to.`, `She will put the caller through to another person.`], a: "C",
  s: `<p>Telefonda <b>“Speaking.”</b> cevabı “Benim, buyurun.” anlamına gelir; yani konuşan kişi zaten <b>aranan kişidir</b>.</p><p>Daha yüksek sesle konuşma ricası “Could you speak up?”, başkasına bağlamak “I’ll put you through.” ile ifade edilir. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Ece’s phone – Recent calls</b></p><table class="rt"><tr><th>Name</th><th>Type</th><th>Time</th><th>Duration</th></tr><tr><td>Mom</td><td>incoming</td><td>08:10</td><td>2 min</td></tr><tr><td>Selin</td><td>missed</td><td>12:45</td><td>–</td></tr><tr><td>Grandpa</td><td>outgoing</td><td>15:30</td><td>14 min</td></tr><tr><td>Selin</td><td>outgoing</td><td>16:05</td><td>6 min</td></tr></table><p>According to the call list, which of the following is <b>TRUE</b>?</p>`,
  c: [`Ece didn’t call Selin back.`, `Ece’s longest call was with her grandfather.`, `Ece called her mother in the morning.`, `Ece answered Selin’s first call.`], a: "B",
  s: `<p>Süreler: annesi 2 dk, dedesi 14 dk, Selin 6 dk. En uzun görüşme <b>dedesiyle</b> yapılmıştır (B ✓).</p><p>Ece 16:05’te Selin’i geri aramış (outgoing) (A ✗); sabahki aramada annesi Ece’yi aramış (incoming) (C ✗); Selin’in 12:45’teki ilk araması cevapsız (missed) kalmış (D ✗). Cevap <b>B</b>.</p>` },
{ q: `<p>“Sorry, I can’t hear you. ----. Let me call you back in a minute.”</p><p>Which of the following best completes the sentence?</p>`,
  c: [`I’m available now`, `Speaking`, `Thanks for calling`, `The signal is very weak here`], a: "D",
  s: `<p>Konuşan kişi karşısındakini duyamıyor ve birazdan geri arayacağını söylüyor. Boşluğa duyamamanın <b>sebebi</b> gelmelidir: “The signal is very weak here.” (Burada sinyal çok zayıf.)</p><p>Diğer seçenekler duyamama sorununu açıklamaz. Cevap <b>D</b>.</p>` },
{ q: `<p><b>Phone Manners</b></p><p>When you call someone, introduce yourself first. Don’t call people too early in the morning or late at night. If the person isn’t available, leave a short message with your name and number. Always speak clearly and politely. In public places like libraries or hospitals, put your phone on silent mode and keep your calls short.</p><p>Which of the following is <b>NOT</b> a piece of advice in the text?</p>`,
  c: [`Talk loudly so that everyone around you can hear you.`, `Say your name at the beginning of a call.`, `Avoid calling people late at night.`, `Leave your name and number in your message.`], a: "A",
  s: `<p>Metinde kendini tanıtmak (B), gece geç saatte aramamak (C) ve mesajda ad ile numara bırakmak (D) önerilmektedir.</p><p>Metin, kamusal alanlarda telefonu sessize almayı ve <b>kısa</b> konuşmayı önerir; herkesin duyacağı şekilde yüksek sesle konuşmak tavsiye edilmez. Cevap <b>A</b>.</p>` },
{ q: `<p><b>Secretary:</b> Mr. Demir is in his office now. Hold on, please. <u>I’ll put you through.</u></p><p>What does the secretary mean with the underlined sentence?</p>`,
  c: [`She is going to end the call.`, `She is going to take a message.`, `She is going to connect the caller to Mr. Demir.`, `She is going to call the person back later.`], a: "C",
  s: `<p><b>“I’ll put you through.”</b> = Sizi (aradığınız kişiye) bağlıyorum. Sekreter, Bay Demir’in ofiste olduğunu söyleyip arayanı ona <b>bağlayacaktır</b>.</p><p>Görüşmeyi bitirmek, mesaj almak veya daha sonra geri aramak bu ifadenin anlamı değildir. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Clerk:</b> Bright Smile Dental Clinic. Good afternoon.<br><b>Zeynep:</b> Hi. I have an appointment with Dr. Kılıç tomorrow at 10 a.m., but I have an exam at school then. Is it possible to come on Friday instead?<br><b>Clerk:</b> Let me check… Yes, Friday at 2 p.m. is available.<br><b>Zeynep:</b> Great, thanks a lot!</p><p>Why did Zeynep call the clinic?</p>`,
  c: [`To cancel her exam at school`, `To change the time of her appointment`, `To talk to Dr. Kılıç about her teeth`, `To complain about the clinic`], a: "B",
  s: `<p>Zeynep’in yarın saat 10’da randevusu var ama o saatte sınavı olduğu için “Is it possible to come on Friday instead?” diye soruyor. Yani <b>randevusunun zamanını değiştirmek</b> için aramıştır.</p><p>Sınavı iptal etmek, doktorla konuşmak ya da şikâyet etmek konuşmada yoktur. Cevap <b>B</b>.</p>` },
{ q: `<p>Which of the following is said by the <b>caller</b>, not by the person who answers the phone?</p>`,
  c: [`Could I speak to Mr. Aksoy, please?`, `Who’s calling, please?`, `Can I take a message?`, `Hold the line, please.`], a: "A",
  s: `<p>Birisiyle konuşmak istediğini söyleyen kişi <b>arayandır</b>: “Could I speak to Mr. Aksoy, please?”</p><p>Kimin aradığını sormak, mesaj almayı teklif etmek ve hatta beklemesini istemek telefonu <b>açan</b> kişiye ait ifadelerdir. Cevap <b>A</b>.</p>` },
{ q: `<p><b>Mert (14:20):</b> Hi Can! I’m still at football practice, so I can’t answer my phone. Practice ends at 5. I’ll call you when I get home, around 6.</p><p>Which of the following is <b>TRUE</b> according to the text message?</p>`,
  c: [`Mert will call Can at 5 o’clock.`, `Can is at football practice with Mert.`, `Mert wants Can to call him immediately.`, `Mert is going to contact Can after practice.`], a: "D",
  s: `<p>Antrenman saat 5’te bitiyor ve Mert eve varınca, <b>saat 6 civarında</b> Can’ı arayacağını yazıyor; yani Can’la <b>antrenmandan sonra</b> iletişime geçecek (D ✓).</p><p>Saat 5 antrenmanın bittiği saattir (A ✗); Can’ın antrenmanda olduğu söylenmiyor (B ✗); Mert şu an telefona cevap veremediğini söylüyor, hemen aranmak istemiyor (C ✗). Cevap <b>D</b>.</p>` },
{ q: `<p>“Mrs. Arıkan is in a meeting right now. Can she ---- you back in an hour?”</p><p>Which word best completes the sentence?</p>`,
  c: [`call`, `hang`, `hold`, `pick`], a: "A",
  s: `<p>“<b>Call back</b>” geri aramak demektir: “Can she call you back in an hour?” (Sizi bir saat sonra geri arayabilir mi?)</p><p>“Hang up” kapatmak, “hold on” beklemek, “pick up” telefonu açmak anlamındadır; hiçbiri “back” ile bu anlamı vermez. Cevap <b>A</b>.</p>` },
{ q: `<p>“to answer the phone when it rings”</p><p>Which phrase matches this definition?</p>`,
  c: [`hang up`, `dial`, `pick up`, `charge`], a: "C",
  s: `<p>Telefon çaldığında onu <b>açmak / cevaplamak</b> “pick up” ile ifade edilir: “Nobody picked up the phone.”</p><p>Hang up kapatmak, dial numarayı çevirmek, charge şarj etmek demektir. Cevap <b>C</b>.</p>` },
{ q: `<p><b>Elif:</b> Hello, is that Nazlı?<br><b>Man:</b> No, there’s no one called Nazlı here. ----<br><b>Elif:</b> Oh, I’m sorry about that.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`Please hold the line.`, `I think you’ve got the wrong number.`, `She will call you back.`, `Can I take a message for her?`], a: "B",
  s: `<p>Adam orada Nazlı adında kimse olmadığını söylüyor, Elif de özür diliyor. Demek ki Elif <b>yanlış numarayı</b> aramıştır: “I think you’ve got the wrong number.”</p><p>Nazlı orada olmadığına göre ona mesaj alınması veya onun geri araması mantıksızdır; beklemesini istemek de gereksizdir. Cevap <b>B</b>.</p>` },
{ q: `<p><b>How do students in 8/C contact their friends?</b></p><div class="fig"><svg viewBox="0 0 400 220" width="380" role="img" aria-label="Sütun grafiği">
<g font-size="11" fill="#334155"><g stroke="#e2e8f0"><line x1="50" y1="150" x2="380" y2="150"/><line x1="50" y1="120" x2="380" y2="120"/><line x1="50" y1="90" x2="380" y2="90"/><line x1="50" y1="60" x2="380" y2="60"/></g>
<g text-anchor="end"><text x="44" y="184">0</text><text x="44" y="154">3</text><text x="44" y="124">6</text><text x="44" y="94">9</text><text x="44" y="64">12</text></g>
<g fill="#38bdf8"><rect x="70" y="120" width="50" height="60"/><rect x="150" y="60" width="50" height="120"/><rect x="230" y="90" width="50" height="90"/><rect x="310" y="150" width="50" height="30"/></g>
<g text-anchor="middle"><text x="95" y="198">Voice call</text><text x="175" y="198">Text message</text><text x="255" y="198">Video call</text><text x="335" y="198">E-mail</text>
<text x="95" y="114" font-weight="bold">6</text><text x="175" y="54" font-weight="bold">12</text><text x="255" y="84" font-weight="bold">9</text><text x="335" y="144" font-weight="bold">3</text>
<text x="18" y="110" transform="rotate(-90 18 110)">students</text></g>
<g stroke="#334155" stroke-width="1.5"><line x1="50" y1="40" x2="50" y2="180"/><line x1="50" y1="180" x2="380" y2="180"/></g></g></svg></div><p>According to the graph, which of the following is <b>TRUE</b>?</p>`,
  c: [`Most students prefer voice calls.`, `E-mail is more popular than voice calls.`, `Video calls are the least popular way of communication.`, `Text messaging is twice as popular as voice calls.`], a: "D",
  s: `<p>Grafikte mesajlaşmayı 12, sesli aramayı 6 öğrenci tercih ediyor; 12 = 2 × 6 olduğundan mesajlaşma sesli aramanın <b>iki katı</b> popülerdir (D ✓).</p><p>En çok tercih edilen mesajlaşmadır (A ✗); e-posta (3) sesli aramadan (6) az tercih edilir (B ✗); en az tercih edilen görüntülü arama değil e-postadır (C ✗). Cevap <b>D</b>.</p>` },
{ q: `<p><b>Mr. Uslu:</b> Hello, is Ms. Tan there?<br><b>Assistant:</b> I’m afraid she’s out of the office. Can I take a message?<br><b>Mr. Uslu:</b> Yes, please. ----<br><b>Assistant:</b> OK, I’ll tell her when she comes back.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`Tell her the meeting is at 4 instead of 3.`, `No, thanks. I’ll call again later.`, `Who’s calling, please?`, `Hold on, I’ll put you through.`], a: "A",
  s: `<p>Bay Uslu mesaj bırakmayı kabul ediyor (“Yes, please.”) ve asistan “Döndüğünde ona söyleyeceğim.” diyor. Boşluğa <b>mesajın kendisi</b> gelmelidir: “Tell her the meeting is at 4 instead of 3.”</p><p>B “Yes, please” ile çelişir; C ve D telefonu açan kişinin sözleridir. Cevap <b>A</b>.</p>` },
{ q: `<p>Your grandmother calls you, but you are on a crowded bus and it is very noisy. You want to talk to her when you get home.</p><p>What do you say to her?</p>`,
  c: [`Hold on, I’ll put you through.`, `Sorry, you’ve got the wrong number.`, `I’m on the bus now, Grandma. Can I call you back later?`, `Who’s calling, please?`], a: "C",
  s: `<p>Otobüste olduğun ve daha sonra konuşmak istediğin için büyükanneni <b>geri arayabileceğini</b> söylersin: “Can I call you back later?”</p><p>A bir sekreter cümlesidir; B ve D büyükanneni tanıdığın bir durumda uygun değildir. Cevap <b>C</b>.</p>` },
{ q: `<p>The first telephone call in history was made by Alexander Graham Bell in 1876. He called his assistant, Thomas Watson, who was in the next room. Almost one hundred years later, in 1973, an engineer named Martin Cooper made the first call from a handheld mobile phone in the streets of New York. Today, billions of people carry smartphones in their pockets.</p><p>Which of the following is <b>TRUE</b> according to the text?</p>`,
  c: [`Bell made the first phone call to a friend in another city.`, `There were nearly a hundred years between the first phone call and the first mobile phone call.`, `Martin Cooper invented the first telephone.`, `The first mobile phone call was made in 1876.`], a: "B",
  s: `<p>İlk telefon görüşmesi 1876’da, ilk cep telefonu görüşmesi 1973’te yapılmış; aradaki fark yaklaşık <b>100 yıldır</b> (B ✓).</p><p>Bell başka şehirdeki bir arkadaşını değil yan odadaki asistanını aramış (A ✗); Martin Cooper telefonu icat etmemiş, ilk cep telefonu görüşmesini yapmış (C ✗); 1876 ilk telefon görüşmesinin yılıdır (D ✗). Cevap <b>B</b>.</p>` },
{ q: `<p>“Hi, this is Ayla. I can’t answer the phone right now. Please leave your name and number after the beep, and I’ll call you back as soon as possible.”</p><p>What should the caller do?</p>`,
  c: [`Leave a message after the sound`, `Call again in an hour`, `Send Ayla an e-mail`, `Wait on the line until Ayla answers`], a: "A",
  s: `<p>Bu bir <b>sesli mesaj (voicemail)</b> karşılamasıdır. Ayla arayanlardan “bip sesinden sonra” adlarını ve numaralarını bırakmalarını istiyor; yani arayan kişi <b>mesaj bırakmalıdır</b>.</p><p>Bir saat sonra tekrar aramak, e-posta göndermek ya da hatta beklemek istenmiyor; Ayla kendisi geri arayacak. Cevap <b>A</b>.</p>` },
{ q: `<p><b>Receptionist:</b> Sunrise Hotel, good evening. (1) ----<br><b>Mr. Brown:</b> I’d like to book a room for two nights.<br><b>Receptionist:</b> Of course. (2) ----<br><b>Mr. Brown:</b> From the 12th to the 14th of May.<br><b>Receptionist:</b> (3) ----<br><b>Mr. Brown:</b> It’s Brown. B-R-O-W-N.</p><p>Which of the following <b>CANNOT</b> be used in the blanks?</p>`,
  c: [`How can I help you?`, `Which dates would you like?`, `Could I have your surname, please?`, `Could you call back later?`], a: "D",
  s: `<p>(1) “How can I help you?” → Bay Brown isteğini söylüyor. (2) “Which dates would you like?” → tarihleri veriyor. (3) “Could I have your surname, please?” → soyadını harf harf söylüyor.</p><p>“Could you call back later?” (Daha sonra tekrar arar mısınız?) hiçbir boşluğa uymaz; görüşme sorunsuz devam ediyor. Cevap <b>D</b>.</p>` },
{ q: `<p>Yesterday Ali tried to call his father three times, but each time he heard: “<i>The number you are calling cannot be reached at the moment.</i>” In the evening, his father said, “Sorry, son. My phone’s battery ran out during the meeting and I didn’t have my charger with me.”</p><p>Why couldn’t Ali talk to his father?</p>`,
  c: [`His father was angry with him.`, `Ali dialled the wrong number.`, `His father’s phone was dead.`, `The line was busy because his father was talking to someone.`], a: "C",
  s: `<p>Babası telefonunun şarjının toplantıda <b>bittiğini</b> (battery ran out) ve yanında şarj aleti olmadığını söylüyor; yani telefonu kapanmıştı (dead) (C ✓).</p><p>Babanın kızgın olduğu, Ali’nin yanlış numara çevirdiği ya da hattın meşgul olduğu metinde yoktur. Cevap <b>C</b>.</p>` },
{ q: `<p>“There is no ---- up here in the mountains, so I can’t make any calls.”</p><p>Which word best completes the sentence?</p>`,
  c: [`charger`, `signal`, `message`, `speaker`], a: "B",
  s: `<p>Dağlarda arama yapamamanın sebebi telefonun <b>çekmemesidir</b>: “There is no signal up here.” (Burada sinyal yok.)</p><p>Şarj aleti olmaması aramayı hemen engellemez; message (mesaj) ve speaker (hoparlör) da cümleye anlam olarak uymaz. Cevap <b>B</b>.</p>` },
{ q: `<p>Kerem’s mother took a phone message for him:</p><table class="rt"><tr><td><b>For:</b> Kerem</td></tr><tr><td><b>From:</b> Ufuk</td></tr><tr><td><b>Message:</b> Today’s football match is cancelled because of the heavy rain. Ufuk will call you tomorrow to talk about the new date.</td></tr></table><p>According to the message, which of the following is <b>TRUE</b>?</p>`,
  c: [`The match won’t be played today because of the weather.`, `Ufuk wants Kerem to call him today.`, `Kerem’s mother is going to watch the match.`, `Ufuk will visit Kerem tomorrow.`], a: "A",
  s: `<p>Mesajda maçın şiddetli yağmur nedeniyle <b>iptal edildiği</b> yazıyor; yani maç bugün hava yüzünden oynanmayacak (A ✓).</p><p>Ufuk, Kerem’i yarın kendisi <b>arayacak</b> (B ✗, D ✗); annenin maçı izleyeceği söylenmiyor (C ✗). Cevap <b>A</b>.</p>` }
]
});
