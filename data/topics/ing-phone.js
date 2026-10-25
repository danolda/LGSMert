LGS.add({
id: "ing-phone",
summary: `
<h3>1. Bir Telefon Görüşmesinin Akışı (Phone Call Step by Step)</h3>
<p>LGS’de “On the Phone” ünitesinden <b>her yıl en az bir soru</b> çıkar. Sorular genellikle şu akışın bir parçasını verir ve boşluğu, sıralamayı ya da “kim müsait / kim değil” bilgisini sorar. Akışı ezbere bilmek, sıralama sorularının yarısını çözer.</p>
<div class="fig"><svg viewBox="0 0 600 300" width="600" role="img" aria-label="Telefon görüşmesi akış şeması">
<defs><marker id="ipA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker></defs>
<g font-size="11.5" text-anchor="middle" fill="#1e293b">
<g fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"><rect x="5" y="10" width="180" height="78" rx="10"/><rect x="210" y="10" width="180" height="78" rx="10"/><rect x="415" y="10" width="180" height="78" rx="10"/></g>
<text x="95" y="30" font-weight="bold" fill="#075985">1. Answering (Açan)</text><text x="95" y="49">Hello, Star Travel.</text><text x="95" y="65">Ada speaking.</text><text x="95" y="81">How can I help you?</text>
<text x="300" y="30" font-weight="bold" fill="#075985">2. Asking (Arayan)</text><text x="300" y="49">Hi, this is Mert.</text><text x="300" y="65">Can I speak to</text><text x="300" y="81">Mr. Kaya, please?</text>
<text x="505" y="30" font-weight="bold" fill="#075985">3. Checking (Açan)</text><text x="505" y="49">Who’s calling, please?</text><text x="505" y="65">Hold on a moment.</text><text x="505" y="81">Let me check.</text>
<rect x="210" y="140" width="180" height="78" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
<text x="300" y="160" font-weight="bold" fill="#166534">Available (müsait)</text><text x="300" y="179">I’ll put you through.</text><text x="300" y="195">I’ll get him for you.</text><text x="300" y="211">He’s waiting for your call.</text>
<rect x="415" y="140" width="180" height="78" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
<text x="505" y="160" font-weight="bold" fill="#991b1b">Not available</text><text x="505" y="179">I’m afraid he’s out /</text><text x="505" y="195">in a meeting.</text><text x="505" y="211">Can I take a message?</text>
<rect x="5" y="140" width="180" height="78" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<text x="95" y="160" font-weight="bold" fill="#92400e">4. Ending (Kapanış)</text><text x="95" y="179">Thanks for calling.</text><text x="95" y="195">Talk to you soon.</text><text x="95" y="211">Take care. Bye!</text>
<g stroke="#475569" stroke-width="2" fill="none"><line x1="185" y1="49" x2="207" y2="49" marker-end="url(#ipA)"/><line x1="390" y1="49" x2="412" y2="49" marker-end="url(#ipA)"/><line x1="535" y1="88" x2="535" y2="137" marker-end="url(#ipA)"/><line x1="470" y1="88" x2="350" y2="137" marker-end="url(#ipA)"/><line x1="210" y1="179" x2="188" y2="179" marker-end="url(#ipA)"/><path d="M505,218 L505,262 L95,262 L95,221" marker-end="url(#ipA)"/></g>
<text x="395" y="112" fill="#16a34a" font-weight="bold">yes</text><text x="553" y="118" fill="#dc2626" font-weight="bold">no</text>
<text x="300" y="282" fill="#475569">Mesaj bırakılır: “Could you tell him to call me back?” → “Sure, I’ll give him the message.”</text>
</g></svg></div>
<div class="note"><b>LGS Tuzağı 1 – Sıralama soruları:</b> Telefonu <b>önce açan kişi</b> konuşur (Hello, … / How can I help you?). Arayan ancak ondan sonra kendini tanıtır ve kimi istediğini söyler. “Would you like to leave a message?” sorusu mutlaka “He isn’t here.” gibi bir cümleden <b>sonra</b>, “Sure, I’ll tell him.” ise mesajdan <b>sonra</b> gelir.</div>

<h3>2. Kalıplar: Arayan mı, Açan mı? (Caller vs. Receiver)</h3>
<table class="rt"><tr><th>Aşama</th><th>Arayan (caller) söyler</th><th>Açan (receiver) söyler</th></tr>
<tr><td>Açılış</td><td>Hello, this is Ada. / It’s Ada here. / Ada calling.</td><td>Hello? · Good morning, Star Travel. Ali speaking. How can I help you?</td></tr>
<tr><td>Birini isteme</td><td>Can / Could / May I speak to Mr. Kaya? · Is Burak there / in? · Could you put me through to …? · I’d like to talk to …</td><td>Who’s calling, please? · Who would you like to speak to? · <b>Speaking.</b> (Benim, buyurun.)</td></tr>
<tr><td>Bekletme / bağlama</td><td>OK, I’ll hold. (Beklerim.)</td><td>Hold on / Hang on / Hold the line, please. · Just a minute. · I’ll put you through. (Bağlıyorum.) · I’ll get him for you.</td></tr>
<tr><td>Müsait değil</td><td>When will he be back?</td><td>I’m afraid he’s out / in a meeting / on another line / not available at the moment.</td></tr>
<tr><td>Mesaj</td><td>Can I leave a message? · Could you tell him (that) I called? · Could you ask her to call me back?</td><td>Can I take a message? · Would you like to leave a message? · Shall I ask him to ring you back? · I’ll give him the message.</td></tr>
<tr><td>Bilgi alma</td><td>My number is … · It’s spelt K-A-Y-A.</td><td>Could I have your name / number, please? · Could you spell that, please?</td></tr>
<tr><td>Kapanış</td><td>Thanks for your help. Bye! · Talk to you later.</td><td>Thanks for calling. · Have a nice day. · Take care.</td></tr></table>
<div class="note"><b>LGS Tuzağı 2 – “Speaking.” ve “This is …”:</b> Telefonda kendini tanıtırken <b>“I am Ada.” denmez, “This is Ada.” / “It’s Ada.”</b> denir. Arayan “Can I speak to Ms. Polat?” deyince açan kişi <b>“Speaking.”</b> diyorsa aranan kişi <b>kendisidir</b>; “Daha yüksek sesle konuş” anlamına gelmez!</div>

<h3>3. Kelime Grupları (Vocabulary)</h3>
<h4>a) Phrasal Verbs – En çok soru çıkan grup</h4>
<table class="rt"><tr><th>İfade</th><th>Anlamı</th><th>Örnek</th></tr>
<tr><td><b>pick up / answer</b></td><td>telefonu açmak</td><td>Nobody picked up the phone.</td></tr>
<tr><td><b>hang up</b></td><td>telefonu kapatmak</td><td>Don’t hang up! I have news.</td></tr>
<tr><td><b>hold on / hang on</b></td><td>(hatta) beklemek</td><td>Hang on a minute, I’ll get her.</td></tr>
<tr><td><b>call back / ring back</b></td><td>geri aramak</td><td>Can she call you back in an hour?</td></tr>
<tr><td><b>put through (to)</b></td><td>(birine) bağlamak</td><td>I’ll put you through to the manager.</td></tr>
<tr><td><b>get through (to)</b></td><td>telefonla ulaşabilmek</td><td>I couldn’t get through to the bank.</td></tr>
<tr><td><b>speak up</b></td><td>daha yüksek sesle konuşmak</td><td>Could you speak up? It’s noisy here.</td></tr>
<tr><td><b>break up</b></td><td>(ses) kesik kesik gelmek</td><td>You’re breaking up. I can’t hear you.</td></tr>
<tr><td><b>cut off</b></td><td>(görüşme) aniden kesilmek</td><td>We got cut off in the tunnel.</td></tr>
<tr><td><b>run out of (battery)</b></td><td>(şarj) bitmek</td><td>My phone ran out of battery.</td></tr>
<tr><td><b>give sb a ring / a call</b></td><td>birini aramak</td><td>I’ll give you a ring tonight.</td></tr></table>
<h4>b) İsimler ve Sıfatlar</h4>
<ul>
<li><b>landline</b> (sabit hat) · <b>mobile / cell phone</b> (cep telefonu) · <b>receiver</b> (ahize; telefonu açan kişi) · <b>caller</b> (arayan) · <b>ringtone</b> (zil sesi) · <b>speakerphone</b> (hoparlör)</li>
<li><b>missed call</b> (cevapsız çağrı) · <b>voicemail / voice message</b> (sesli mesaj) · <b>text (message)</b> (kısa mesaj; fiil olarak “mesaj atmak”) · <b>video call</b> (görüntülü arama)</li>
<li><b>signal / reception</b> (sinyal, çekim) · <b>battery</b> (pil) · <b>charger</b> (şarj aleti) · <b>area code</b> (alan kodu) · <b>extension</b> (dahili numara) · <b>operator</b> (santral görevlisi)</li>
<li><b>busy / engaged</b> (hat meşgul) · <b>available</b> (müsait) · <b>dead</b> (şarjı bitmiş) · <b>out of order</b> (bozuk) · <b>urgent</b> (acil) · <b>on silent</b> (sessizde)</li>
<li><b>Gelen / giden:</b> incoming call (gelen arama) · outgoing call (giden arama) · missed call (cevapsız)</li>
</ul>
<div class="note"><b>LGS Tuzağı 3 – hang up / hang on / hold on:</b> Tek harf fark, zıt anlam! <b>Hang up</b> = telefonu kapat; <b>hang on / hold on</b> = bekle, kapatma. “Don’t hang up, I’ll put you through.” cümlesinde iki ifade de “beklemeyi” anlatır. Ayrıca <b>“The line is busy.”</b> = hat meşgul (kişi başkasıyla konuşuyor); <b>“I’m busy.”</b> = işim var. İkisini karıştırma.</div>

<h3>4. Sorunlar ve Çözümler (Phone Problems)</h3>
<div class="fig"><svg viewBox="0 0 600 250" width="600" role="img" aria-label="Telefon sorunları ve söylenecek cümleler">
<defs><marker id="ipB" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#64748b"/></marker></defs>
<g font-size="11.5" fill="#1e293b">
<text x="125" y="18" font-weight="bold" text-anchor="middle" fill="#991b1b">PROBLEM</text><text x="430" y="18" font-weight="bold" text-anchor="middle" fill="#166534">WHAT YOU SAY</text>
<g fill="#fee2e2" stroke="#dc2626"><rect x="5" y="28" width="240" height="32" rx="6"/><rect x="5" y="70" width="240" height="32" rx="6"/><rect x="5" y="112" width="240" height="32" rx="6"/><rect x="5" y="154" width="240" height="32" rx="6"/><rect x="5" y="196" width="240" height="32" rx="6"/></g>
<g fill="#dcfce7" stroke="#16a34a"><rect x="275" y="28" width="320" height="32" rx="6"/><rect x="275" y="70" width="320" height="32" rx="6"/><rect x="275" y="112" width="320" height="32" rx="6"/><rect x="275" y="154" width="320" height="32" rx="6"/><rect x="275" y="196" width="320" height="32" rx="6"/></g>
<text x="15" y="49">It’s noisy / I can’t hear well.</text><text x="285" y="49">Could you speak up / repeat that, please?</text>
<text x="15" y="91">Weak signal / voice breaking up</text><text x="285" y="91">You’re breaking up. I’ll call you back.</text>
<text x="15" y="133">Low battery / phone is dying</text><text x="285" y="133">My battery is low. Let me call you later.</text>
<text x="15" y="175">The line is busy / engaged.</text><text x="285" y="175">I couldn’t get through. I’ll try again later.</text>
<text x="15" y="217">Someone dials the wrong number.</text><text x="285" y="217">Sorry, I think you’ve got the wrong number.</text>
<g stroke="#64748b" stroke-width="1.6"><line x1="246" y1="44" x2="272" y2="44" marker-end="url(#ipB)"/><line x1="246" y1="86" x2="272" y2="86" marker-end="url(#ipB)"/><line x1="246" y1="128" x2="272" y2="128" marker-end="url(#ipB)"/><line x1="246" y1="170" x2="272" y2="170" marker-end="url(#ipB)"/><line x1="246" y1="212" x2="272" y2="212" marker-end="url(#ipB)"/></g>
<text x="300" y="245" text-anchor="middle" fill="#475569">Ayrıca: There’s no signal here. · We got cut off. · My phone was on silent.</text>
</g></svg></div>

<h3>5. Mesaj Notu Okuma (Taking a Message)</h3>
<p>LGS’de “While You Were Out / Phone Message” kartı verilip <b>karttan çıkarılabilen / çıkarılamayan</b> bilgi sorulur. Kartın bölümlerini tanı:</p>
<div class="fig"><svg viewBox="0 0 600 220" width="600" role="img" aria-label="Telefon mesaj notunun bölümleri">
<g font-size="11.5" fill="#1e293b">
<rect x="5" y="5" width="330" height="208" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="2"/>
<rect x="5" y="5" width="330" height="30" rx="8" fill="#d97706"/>
<text x="170" y="25" font-weight="bold" fill="#ffffff" text-anchor="middle">WHILE YOU WERE OUT</text>
<text x="18" y="56" font-weight="bold">To:</text><text x="78" y="56">Ms. Er</text>
<text x="18" y="78" font-weight="bold">From:</text><text x="78" y="78">Mr. Uslu (Star Travel)</text>
<text x="18" y="100" font-weight="bold">Time:</text><text x="78" y="100">Mon, 10:15 a.m.</text>
<text x="18" y="122" font-weight="bold">Phone:</text><text x="78" y="122">0216 555 30 40</text>
<rect x="18" y="133" width="13" height="13" rx="2" fill="#ffffff" stroke="#334155" stroke-width="1.4"/><path d="M20,139 l3.5,4 l6.5,-9" fill="none" stroke="#16a34a" stroke-width="2.4"/><text x="37" y="144">Please call back</text><rect x="160" y="133" width="13" height="13" rx="2" fill="#ffffff" stroke="#334155" stroke-width="1.4"/><text x="179" y="144">Will call again</text>
<text x="18" y="166" font-weight="bold">Message:</text><text x="88" y="166">Your tickets are ready.</text>
<text x="88" y="183">Bring your passport.</text>
<text x="18" y="204" font-weight="bold">Taken by:</text><text x="88" y="204">Can</text>
<g font-size="11" fill="#1e3a8a">
<text x="350" y="56">← kime (mesajın sahibi)</text>
<text x="350" y="78">← arayan kişi (caller)</text>
<text x="350" y="100">← arama saati</text>
<text x="350" y="122">← geri arama numarası</text>
<text x="350" y="144">← kim kimi arayacak?</text>
<text x="350" y="172">← asıl bilgi (en çok soru buradan)</text>
<text x="350" y="204">← notu alan kişi (receiver)</text>
</g></g></svg></div>
<div class="note"><b>LGS Tuzağı 4 – “While you were out”:</b> Bu başlık, mesajın sahibinin arama sırasında <b>orada olmadığını</b> gösterir; yani mesajın sahibi arayanla <b>konuşmamıştır</b>. “Please call back” işaretliyse <b>mesajın sahibi</b> arayacak; “Will call again” işaretliyse <b>arayan kişi</b> tekrar arayacaktır.</div>

<h3>6. Dil Bilgisi: Rica Kalıpları ve Nezaket Derecesi</h3>
<div class="fig"><svg viewBox="0 0 600 190" width="600" role="img" aria-label="Rica kalıplarının nezaket merdiveni">
<g font-size="11.5" fill="#1e293b">
<rect x="10" y="140" width="140" height="40" fill="#e0f2fe" stroke="#0284c7"/><rect x="155" y="105" width="140" height="75" fill="#bae6fd" stroke="#0284c7"/><rect x="300" y="70" width="140" height="110" fill="#7dd3fc" stroke="#0284c7"/><rect x="445" y="35" width="145" height="145" fill="#38bdf8" stroke="#0284c7"/>
<g text-anchor="middle" font-weight="bold"><text x="80" y="158">Can I / Can you…?</text><text x="225" y="123">Could I / Could you…?</text><text x="370" y="88">May I…?</text><text x="517" y="53">Would you mind</text><text x="517" y="68">+ V-ing…?</text></g>
<g text-anchor="middle" font-size="10.5"><text x="80" y="173">Can I talk to Ece?</text><text x="225" y="141">Could you spell</text><text x="225" y="155">your name?</text><text x="370" y="106">May I speak to</text><text x="370" y="120">Dr. Aydın?</text><text x="517" y="88">Would you mind</text><text x="517" y="102">calling back later?</text></g>
<text x="10" y="22" font-weight="bold" fill="#0c4a6e">informal (arkadaş, aile)</text><text x="590" y="22" font-weight="bold" fill="#0c4a6e" text-anchor="end">formal (resmî, iş yeri)</text>
<line x1="170" y1="18" x2="440" y2="18" stroke="#0c4a6e" stroke-width="2"/><path d="M440,13 L452,18 L440,23 z" fill="#0c4a6e"/>
</g></svg></div>
<ul>
<li><b>Can / May I + V1…?</b> → izin isteme (ben bir şey yapayım mı?): <i>Can I leave a message?</i> · <i>May I speak to Mr. Er?</i></li>
<li><b>Can / Could / Would you + V1…?</b> → karşıdakinden bir şey yapmasını isteme: <i>Could you tell her I called?</i> · <i>Would you ask him to call me back?</i></li>
<li><b>Would you mind + V-ing…?</b> → çok kibar rica: <i>Would you mind holding for a minute?</i> (Cevap “No, not at all.” = sorun değil, beklerim.)</li>
<li><b>I’d like to + V1</b> → istek: <i>I’d like to make an appointment.</i></li>
<li><b>will</b> → o anda verilen söz / teklif: <i>I’ll put you through. · I’ll call you back. · I’ll give him the message.</i></li>
<li><b>Shall I + V1…?</b> → teklif: <i>Shall I take a message?</i> (Mesaj alayım mı?)</li>
</ul>
<h4>Telefon numarası okuma</h4>
<p>İngilizcede numaralar tek tek okunur; <b>0 = “oh”</b> (ya da zero), yan yana iki aynı rakam <b>“double”</b> ile söylenir: 0532 447 10 88 → <i>oh-five-three-two, four-double-seven, one-oh, double-eight</i>.</p>

<h3>7. İş Yeri ve Müşteri Hizmetleri Görüşmeleri (Call Center)</h3>
<table class="rt"><tr><th>Amaç</th><th>Kalıp</th></tr>
<tr><td>Karşılama</td><td>Thank you for calling Green Mobile. How may I help you?</td></tr>
<tr><td>Bilgi isteme</td><td>Could you give me some details about the problem? · Can I have your order / customer number?</td></tr>
<tr><td>Anlayış gösterme</td><td>I’m sorry to hear that. · I understand. · Sorry for the trouble.</td></tr>
<tr><td>Çözüm sunma</td><td>Our team will be there in an hour. · We can send you a new one or give your money back. · I’ll transfer you to our technical team.</td></tr>
<tr><td>Kapanış</td><td>Please contact us again if you have any other problems. · Thank you for your patience.</td></tr></table>
<div class="note"><b>LGS Tuzağı 5 – “Neden aradı?” soruları:</b> Arayanın amacı genellikle ilk cümlelerinde gizlidir (şikâyet, randevu, bilgi alma, rezervasyon). Teşekkür etmek, adres vermek gibi görüşme sırasında yapılan şeyler <b>aramanın amacı değildir</b>. Ayrıca “I’ll get him.” / “Hold on.” → kişi <b>müsait</b>; “Can I take a message?” / “He’ll call you back.” → kişi <b>şu an müsait değil</b>.</div>
`,
qs: [
{ q: `<p>Below, you see parts of four different phone conversations.</p><div class="fig"><svg viewBox="0 0 600 256" width="600" role="img" aria-label="Dört telefon konuşması">
<g font-size="11.5" fill="#1e293b"><rect x="10" y="16" width="285" height="104" rx="8" fill="#ffffff" stroke="#0ea5e9" stroke-width="1.8"/>
<circle cx="28" cy="16" r="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
<text x="28" y="20" font-size="11" text-anchor="middle" font-weight="bold">I</text>
<text x="20" y="42" font-weight="bold" fill="#0c4a6e">Ela:</text>
<text x="80" y="42">Hi, is that Jale? It’s Ela.</text>
<text x="20" y="63" font-weight="bold" fill="#0c4a6e">Man:</text>
<text x="80" y="63">Jale? Sorry, there’s nobody called</text>
<text x="80" y="79">Jale here. Which number did you</text>
<text x="80" y="94">dial?</text>
<rect x="305" y="16" width="285" height="104" rx="8" fill="#ffffff" stroke="#0ea5e9" stroke-width="1.8"/>
<circle cx="323" cy="16" r="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
<text x="323" y="20" font-size="11" text-anchor="middle" font-weight="bold">II</text>
<text x="315" y="42" font-weight="bold" fill="#0c4a6e">Kaan:</text>
<text x="375" y="42">Good morning. Could I talk to Ms.</text>
<text x="375" y="57">Er, please?</text>
<text x="315" y="79" font-weight="bold" fill="#0c4a6e">Secretary:</text>
<text x="375" y="79">She’s on another line at the</text>
<text x="375" y="94">moment. Would you like to hold?</text>
<rect x="10" y="142" width="285" height="104" rx="8" fill="#ffffff" stroke="#0ea5e9" stroke-width="1.8"/>
<circle cx="28" cy="142" r="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
<text x="28" y="146" font-size="11" text-anchor="middle" font-weight="bold">III</text>
<text x="20" y="168" font-weight="bold" fill="#0c4a6e">Ali:</text>
<text x="80" y="168">Hello, can I speak to Ece, please?</text>
<text x="20" y="189" font-weight="bold" fill="#0c4a6e">Ece:</text>
<text x="80" y="189">Speaking. Hi Ali! What’s up?</text>
<rect x="305" y="142" width="285" height="104" rx="8" fill="#ffffff" stroke="#0ea5e9" stroke-width="1.8"/>
<circle cx="323" cy="142" r="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
<text x="323" y="146" font-size="11" text-anchor="middle" font-weight="bold">IV</text>
<text x="315" y="168" font-weight="bold" fill="#0c4a6e">Deniz:</text>
<text x="375" y="168">Is Mr. Ak in? It’s about the</text>
<text x="375" y="183">meeting.</text>
<text x="315" y="205" font-weight="bold" fill="#0c4a6e">Secretary:</text>
<text x="375" y="205">Yes, he is. Hang on, I’ll put you</text>
<text x="375" y="220">through.</text></g>
</svg></div><p>According to the conversations, which of the following is <b>CORRECT</b>?</p>`,
  c: [`Ms. Er can’t answer Kaan right now because she is talking to someone else.`, `Ela is talking to the person she wants to speak to.`, `Ali has to leave a message because Ece isn’t available.`, `The secretary refuses to connect Deniz to Mr. Ak.`], a: "A",
  s: `<p><b>II:</b> “She’s on another line” = başka bir hatta konuşuyor; bu yüzden Kaan’a şu an cevap veremez, sekreter beklemesini teklif ediyor ✓.</p><p>Ela yanlış numarayı aramış (orada Jale yok). Ece “Speaking.” diyor, yani aranan kişi kendisi; mesaj gerekmez. Sekreter Deniz’i reddetmiyor, tam tersine “I’ll put you through.” (bağlıyorum) diyor. Cevap <b>A</b>.</p>` },
{ q: `<div class="fig"><svg viewBox="0 0 540 231" width="540" role="img" aria-label="HAPPY PAWS VET CLINIC">
<rect x="2" y="2" width="536" height="227" rx="12" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
<rect x="10" y="8" width="520" height="30" rx="8" fill="#334155"/>
<text x="270" y="28" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">HAPPY PAWS VET CLINIC</text>
<g font-size="12" fill="#1e293b"><text x="24" y="60" font-weight="bold" fill="#1e3a8a">Receptionist :</text>
<text x="129" y="60">Happy Paws Vet Clinic, Ayşe speaking. (1) ----</text>
<text x="24" y="85" font-weight="bold" fill="#1e3a8a">Mr. Yalın :</text>
<text x="129" y="85">Hi, I’d like to make an appointment for my cat. She hasn’t eaten</text>
<text x="129" y="102">anything since yesterday.</text>
<text x="24" y="127" font-weight="bold" fill="#1e3a8a">Receptionist :</text>
<text x="129" y="127">Oh, poor thing. (2) ----</text>
<text x="24" y="152" font-weight="bold" fill="#1e3a8a">Mr. Yalın :</text>
<text x="129" y="152">Tomorrow morning, if possible.</text>
<text x="24" y="177" font-weight="bold" fill="#1e3a8a">Receptionist :</text>
<text x="129" y="177">We have a free slot at 9:30. (3) ----</text>
<text x="24" y="202" font-weight="bold" fill="#1e3a8a">Mr. Yalın :</text>
<text x="129" y="202">Sure, it’s Yalın. Y-A-L-I-N.</text></g>
</svg></div><p>a) Could you spell your surname for me?<br>b) How can I help you?<br>c) When would you like to bring her in?</p><p>Which of the following shows the correct order of the sentences for the blanks (1), (2) and (3)?</p>`,
  c: [`a – b – c`, `b – a – c`, `c – b – a`, `b – c – a`], a: "D",
  s: `<p>(1) Telefonu açan resepsiyonist önce yardım teklif eder: “How can I help you?” (b) → Bay Yalın isteğini söylüyor.</p><p>(2) Bay Yalın “Tomorrow morning” diye <b>zaman</b> bildiriyor; demek ki soru “When would you like to bring her in?” (c).</p><p>(3) Bay Yalın soyadını harf harf söylüyor; soru “Could you spell your surname for me?” (a). Sıra: b – c – a. Cevap <b>D</b>.</p>` },
{ q: `<p>The school secretary took this note during a phone call.</p><div class="fig"><svg viewBox="0 0 480 270" width="480" role="img" aria-label="PHONE MESSAGE">
<rect x="3" y="3" width="474" height="264" rx="10" fill="#fffbeb" stroke="#d97706" stroke-width="2.5"/>
<rect x="3" y="3" width="474" height="36" rx="10" fill="#d97706"/>
<rect x="3" y="27" width="474" height="12" fill="#d97706"/>
<text x="240" y="27" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">PHONE MESSAGE</text>
<g font-size="12" fill="#1e293b"><text x="26" y="62" font-weight="bold" fill="#d97706">For:</text>
<text x="121" y="62">Mr. Tekin (Maths teacher)</text>
<text x="26" y="86" font-weight="bold" fill="#d97706">From:</text>
<text x="121" y="86">Mrs. Oral (Defne’s mother)</text>
<text x="26" y="110" font-weight="bold" fill="#d97706">Time:</text>
<text x="121" y="110">Tuesday, 11:40 a.m.</text>
<text x="26" y="134" font-weight="bold" fill="#d97706">Phone:</text>
<text x="121" y="134">0532 418 77 06</text>
<rect x="26" y="147" width="13" height="13" rx="2" fill="#ffffff" stroke="#334155" stroke-width="1.4"/>
<text x="45" y="158">Please call back</text>
<rect x="172" y="147" width="13" height="13" rx="2" fill="#ffffff" stroke="#334155" stroke-width="1.4"/>
<path d="M174,153 l3.5,4 l6.5,-9" fill="none" stroke="#16a34a" stroke-width="2.4"/>
<text x="191" y="158">Will call again</text>
<rect x="312" y="147" width="13" height="13" rx="2" fill="#ffffff" stroke="#334155" stroke-width="1.4"/>
<text x="331" y="158">Urgent</text>
<text x="26" y="182" font-weight="bold" fill="#d97706">Message:</text>
<text x="121" y="182">Defne has a high fever, so she can’t take the maths</text>
<text x="121" y="199">quiz on Wednesday. Her mother wants to learn when Defne</text>
<text x="121" y="216">can take a make-up quiz.</text>
<text x="26" y="240" font-weight="bold" fill="#d97706">Taken by:</text>
<text x="121" y="240">Ece (school secretary)</text></g>
</svg></div><p>Which of the following was most probably said during the call?</p>`,
  c: [`“Could you ask him to call me back as soon as possible?”`, `“Defne will miss the quiz on Wednesday, so she’ll take it today.”`, `“I’ll ring again later to ask when she can take the quiz.”`, `“Hello, this is Mr. Tekin. Can I speak to Defne’s mother?”`], a: "C",
  s: `<p>Notta “Will call again” kutusu işaretli, “Please call back” işaretsiz. Yani Bayan Oral’ın öğretmenin kendisini geri aramasını değil, <b>kendisinin tekrar arayacağını</b> söylemiş olması gerekir. Ayrıca mesajda telafi sınavının zamanını öğrenmek istediği yazıyor → “I’ll ring again later to ask when she can take the quiz.” ✓</p><p>Geri aranma ricası kutuyla çelişir; Defne ateşli olduğu için bugün sınava giremez (bunu da istemiyor); arayan Bay Tekin değil, Bayan Oral’dır ve not, Bay Tekin orada yokken alınmıştır. Cevap <b>C</b>.</p>` },
{ q: `<p>Some 8th graders answered a survey about phone calls.</p><div class="fig"><svg viewBox="0 0 600 240" width="600" role="img" aria-label="Telefon görüşmesi sorunları anket grafiği">
<g font-size="11.5" fill="#334155">
<text x="300" y="18" text-anchor="middle" font-weight="bold" font-size="13">What annoys you most during phone calls? (120 students)</text>
<text x="142" y="53" text-anchor="end">weak signal</text>
<rect x="150" y="38" width="382" height="22" rx="3" fill="#6366f1"/>
<text x="538" y="54" font-weight="bold">45</text>
<text x="142" y="87" text-anchor="end">low battery</text>
<rect x="150" y="72" width="255" height="22" rx="3" fill="#6366f1"/>
<text x="411" y="88" font-weight="bold">30</text>
<text x="142" y="121" text-anchor="end">background noise</text>
<rect x="150" y="106" width="178" height="22" rx="3" fill="#6366f1"/>
<text x="334" y="122" font-weight="bold">21</text>
<text x="142" y="155" text-anchor="end">very long calls</text>
<rect x="150" y="140" width="127" height="22" rx="3" fill="#6366f1"/>
<text x="283" y="156" font-weight="bold">15</text>
<text x="142" y="189" text-anchor="end">wrong numbers</text>
<rect x="150" y="174" width="76" height="22" rx="3" fill="#6366f1"/>
<text x="232" y="190" font-weight="bold">9</text>
<line x1="150" y1="34" x2="150" y2="208" stroke="#334155" stroke-width="1.5"/>
<text x="300" y="228" text-anchor="middle" font-size="10.5" fill="#64748b">number of students (each student chose one answer)</text></g>
</svg></div><p>According to the graph, which of the following is <b>CORRECT</b>?</p>`,
  c: [`A quarter of the students are annoyed by background noise.`, `Wrong numbers annoy more students than very long calls.`, `Half of the students have problems with the signal.`, `More students complain about a weak signal than about low battery and wrong numbers together.`], a: "D",
  s: `<p>Zayıf sinyal: 45 öğrenci. Düşük şarj + yanlış numara: 30 + 9 = 39. 45 &gt; 39 olduğundan ifade doğrudur ✓.</p><p>120’nin dörtte biri 30’dur; bu sayı arka plan gürültüsünün (21) değil <b>düşük şarjın</b> değeridir (güçlü çeldirici!). Yanlış numara (9) uzun görüşmelerden (15) azdır. 120’nin yarısı 60’tır; sinyal sorunu 45’tir. Cevap <b>D</b>.</p>` },
{ q: `<p>Ada and Selin are texting.</p><div class="fig"><svg viewBox="0 0 400 392" width="400" role="img" aria-label="Selin mesajlaşma ekranı">
<rect x="2" y="2" width="396" height="388" rx="18" fill="#e2e8f0" stroke="#334155" stroke-width="3"/>
<rect x="2" y="2" width="396" height="54" rx="18" fill="#0f766e"/>
<rect x="2" y="40" width="396" height="16" fill="#0f766e"/>
<circle cx="34" cy="29" r="15" fill="#99f6e4"/>
<text x="58" y="26" font-size="14" font-weight="bold" fill="#ffffff">Selin</text>
<text x="58" y="44" font-size="10.5" fill="#ccfbf1">last seen today at 19:50</text>
<g font-size="11.5" fill="#1e293b"><rect x="108" y="70" width="272" height="49" rx="10" fill="#dcfce7" stroke="#cbd5e1"/>
<text x="120" y="87">Selin, I called you three times! Where are</text>
<text x="120" y="103">you?</text>
<text x="372" y="114" font-size="10" fill="#64748b" text-anchor="end">18:02</text>
<rect x="20" y="129" width="272" height="64" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
<text x="32" y="146">Sorry!! I was at the cinema and my phone</text>
<text x="32" y="162">was on silent. I’ve just seen your missed</text>
<text x="32" y="177">calls.</text>
<text x="284" y="188" font-size="10" fill="#64748b" text-anchor="end">19:47</text>
<rect x="108" y="203" width="272" height="49" rx="10" fill="#dcfce7" stroke="#cbd5e1"/>
<text x="120" y="221">No problem. I wanted to ask about the</text>
<text x="120" y="236">science homework. Is it due tomorrow?</text>
<text x="372" y="247" font-size="10" fill="#64748b" text-anchor="end">19:48</text>
<rect x="20" y="262" width="272" height="64" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
<text x="32" y="280">No, on Friday. But my battery is 3%, so I</text>
<text x="32" y="295">can’t call you now. I’ll ring you after I</text>
<text x="32" y="311">charge it.</text>
<text x="284" y="322" font-size="10" fill="#64748b" text-anchor="end">19:50</text>
<rect x="108" y="337" width="272" height="33" rx="10" fill="#dcfce7" stroke="#cbd5e1"/>
<text x="120" y="354">OK, talk to you later!</text>
<text x="372" y="365" font-size="10" fill="#64748b" text-anchor="end">19:50</text></g>
</svg></div><p>Which of the following is <b>CORRECT</b> according to the messages?</p>`,
  c: [`Selin is going to call Ada after charging her phone.`, `Selin didn’t hear the calls because the cinema was too noisy.`, `Ada called Selin to invite her to the cinema.`, `The science homework must be handed in tomorrow.`], a: "A",
  s: `<p>Selin “I’ll ring you after I charge it.” (Şarj ettikten sonra seni arayacağım.) yazıyor ✓.</p><p>Aramaları duymamasının sebebi gürültü değil, telefonun <b>sessizde (on silent)</b> olmasıdır. Ada sinemaya davet için değil, fen ödevini sormak için aramıştır. Ödev yarın değil, cuma günü teslim edilecektir. Cevap <b>A</b>.</p>` },
{ q: `<p><b>Arda:</b> Mom, I’m on the train and we are going through the mountains. Can you hear me?<br><b>Mom:</b> Your voice is ----, Arda. I can only hear every second word. Call me when you get off the train.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`picking up`, `breaking up`, `putting through`, `holding on`], a: "B",
  s: `<p>Annesi her iki kelimeden ancak birini duyabiliyor; yani ses <b>kesik kesik geliyor</b>: “Your voice is breaking up.” Dağlarda sinyal zayıf olduğu için bu çok doğaldır.</p><p>“Pick up” telefonu açmak, “put through” birine bağlamak, “hold on” beklemek demektir; hiçbiri sesin kesilmesini anlatmaz. Cevap <b>B</b>.</p>` },
{ q: `<p>You work at the customer service of an internet company. A customer calls because her internet connection hasn’t worked since this morning.</p><p>Which of the following would you <b>NOT</b> say to her?</p>`,
  c: [`I’m sorry for the trouble. Could you tell me your customer number, please?`, `Have you tried turning your modem off and on again?`, `Our technician can visit you this afternoon between 2 and 4.`, `Please don’t call us about it again. These problems usually go away on their own.`], a: "D",
  s: `<p>Müşteri hizmetleri çalışanının görevi sorunu <b>çözmek</b>tir. “Bu konuda bizi tekrar aramayın, bu sorunlar genelde kendiliğinden geçer.” cümlesi hem kaba hem de yardım etmeyi reddeden bir cümledir; söylenmemelidir.</p><p>Özür dileyip müşteri numarası istemek (bilgi alma), modemi kapatıp açmayı önermek (çözüm) ve teknisyen ziyareti teklif etmek (çözüm) uygun cümlelerdir. Cevap <b>D</b>.</p>` },
{ q: `<div class="fig"><svg viewBox="0 0 500 310" width="500" role="img" aria-label="Son aramalar listesi">
<rect x="60" y="4" width="380" height="300" rx="22" fill="#0f172a"/>
<rect x="72" y="16" width="356" height="276" rx="12" fill="#ffffff"/>
<g font-size="12" fill="#1e293b">
<text x="250" y="40" text-anchor="middle" font-weight="bold" font-size="14">Kuzey’s phone · Recent calls (Today)</text>
<line x1="80" y1="50" x2="420" y2="50" stroke="#cbd5e1"/>
<text x="88" y="76" font-size="16" fill="#16a34a" font-weight="bold">↙</text>
<text x="112" y="70" font-weight="bold" fill="#1e293b">Dad</text>
<text x="112" y="85" font-size="10.5" fill="#64748b">Incoming</text>
<text x="330" y="76" text-anchor="end">08:05</text>
<text x="415" y="76" text-anchor="end" fill="#475569">1 min</text>
<line x1="80" y1="94" x2="420" y2="94" stroke="#e2e8f0"/>
<text x="88" y="112" font-size="16" fill="#2563eb" font-weight="bold">↗</text>
<text x="112" y="106" font-weight="bold" fill="#1e293b">Pizza Roma</text>
<text x="112" y="121" font-size="10.5" fill="#64748b">Outgoing</text>
<text x="330" y="112" text-anchor="end">12:20</text>
<text x="415" y="112" text-anchor="end" fill="#475569">3 min</text>
<line x1="80" y1="130" x2="420" y2="130" stroke="#e2e8f0"/>
<path d="M86,138 l10,10 m0,-10 l-10,10" stroke="#dc2626" stroke-width="2.2"/>
<text x="112" y="142" font-weight="bold" fill="#dc2626">Aunt Nur</text>
<text x="112" y="157" font-size="10.5" fill="#64748b">Missed</text>
<text x="330" y="148" text-anchor="end">13:10</text>
<text x="415" y="148" text-anchor="end" fill="#475569">–</text>
<line x1="80" y1="166" x2="420" y2="166" stroke="#e2e8f0"/>
<text x="88" y="184" font-size="16" fill="#2563eb" font-weight="bold">↗</text>
<text x="112" y="178" font-weight="bold" fill="#1e293b">Aunt Nur</text>
<text x="112" y="193" font-size="10.5" fill="#64748b">Outgoing</text>
<text x="330" y="184" text-anchor="end">13:25</text>
<text x="415" y="184" text-anchor="end" fill="#475569">no answer</text>
<line x1="80" y1="202" x2="420" y2="202" stroke="#e2e8f0"/>
<path d="M86,210 l10,10 m0,-10 l-10,10" stroke="#dc2626" stroke-width="2.2"/>
<text x="112" y="214" font-weight="bold" fill="#dc2626">Unknown</text>
<text x="112" y="229" font-size="10.5" fill="#64748b">Missed</text>
<text x="330" y="220" text-anchor="end">15:40</text>
<text x="415" y="220" text-anchor="end" fill="#475569">–</text>
<line x1="80" y1="238" x2="420" y2="238" stroke="#e2e8f0"/>
<text x="88" y="256" font-size="16" fill="#16a34a" font-weight="bold">↙</text>
<text x="112" y="250" font-weight="bold" fill="#1e293b">Aunt Nur</text>
<text x="112" y="265" font-size="10.5" fill="#64748b">Incoming</text>
<text x="330" y="256" text-anchor="end">17:02</text>
<text x="415" y="256" text-anchor="end" fill="#475569">25 min</text>
<line x1="80" y1="274" x2="420" y2="274" stroke="#e2e8f0"/>
</g>
</svg></div><p>According to the list, which of the following is <b>NOT</b> correct?</p>`,
  c: [`Kuzey’s father called him early in the morning.`, `Kuzey couldn’t reach his aunt when he called her back.`, `Kuzey talked to his aunt three times on the phone that day.`, `Kuzey made a call to a restaurant around noon.`], a: "C",
  s: `<p>Listede Nur Teyze adı üç kez geçiyor ama bunlar 13:10’da <b>cevapsız</b> arama, 13:25’te <b>cevap verilmeyen</b> giden arama ve 17:02’de 25 dakikalık gelen aramadır. Yani Kuzey teyzesiyle yalnızca <b>bir kez</b> konuşmuştur; ifade yanlıştır.</p><p>Babası 08:05’te aramış (incoming); Kuzey 13:25’te teyzesini geri aramış ama ulaşamamış (no answer); 12:20’de Pizza Roma’yı aramış (outgoing) — hepsi doğru. Cevap <b>C</b>.</p>` },
{ q: `<p>Put the sentences of the phone conversation in the correct order.</p><div class="fig"><svg viewBox="0 0 540 193" width="540" role="img" aria-label="Telefon konuşması">
<rect x="2" y="2" width="536" height="189" rx="12" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
<g font-size="12" fill="#1e293b"><text x="24" y="30" font-weight="bold" fill="#1e3a8a">(I) Receptionist :</text>
<text x="164" y="30">I’m afraid she’s with a patient right now. Shall I ask her</text>
<text x="164" y="47">to call you back?</text>
<text x="24" y="72" font-weight="bold" fill="#1e3a8a">(II) Receptionist :</text>
<text x="164" y="72">Good morning, City Eye Clinic. How may I help you?</text>
<text x="24" y="97" font-weight="bold" fill="#1e3a8a">(III) Mr. Acar :</text>
<text x="164" y="97">Yes, please. My number is 0544 271 30 18.</text>
<text x="24" y="122" font-weight="bold" fill="#1e3a8a">(IV) Mr. Acar :</text>
<text x="164" y="122">Hello. I’d like to speak to Dr. Sezer about my new glasses.</text>
<text x="24" y="147" font-weight="bold" fill="#1e3a8a">(V) Receptionist :</text>
<text x="164" y="147">Thank you, Mr. Acar. I’ll give her the message as soon as</text>
<text x="164" y="164">she’s free.</text></g>
</svg></div><p>Which of the following is the correct order?</p>`,
  c: [`II – IV – I – III – V`, `IV – II – I – III – V`, `II – IV – III – I – V`, `II – I – IV – III – V`], a: "A",
  s: `<p>Telefonu açan resepsiyonist önce kendini tanıtır (II). Bay Acar kiminle konuşmak istediğini söyler (IV). Resepsiyonist doktorun müsait olmadığını söyleyip geri aranmayı teklif eder (I). Bay Acar “Yes, please” diyerek numarasını verir (III). Son olarak mesajın iletileceği söylenir (V).</p><p>“Yes, please” cevabı (III) mutlaka bir teklif cümlesinden (I) <b>sonra</b> gelmelidir; bu, III ile I’in yerini değiştiren çeldiriciyi eler. Cevap <b>A</b>.</p>` },
{ q: `<div class="fig"><svg viewBox="0 0 520 177" width="520" role="img" aria-label="VOICEMAIL · 1 new message · Wed 16:48">
<rect x="3" y="3" width="514" height="171" rx="10" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2.5"/>
<rect x="3" y="3" width="514" height="36" rx="10" fill="#7c3aed"/>
<rect x="3" y="27" width="514" height="12" fill="#7c3aed"/>
<text x="260" y="27" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">VOICEMAIL · 1 new message · Wed 16:48</text>
<g font-size="12" fill="#1e293b"><text x="26" y="62">“Hello, this is Pınar from Smile Dental Clinic. I’m calling for Mr. Kemal</text>
<text x="26" y="79">Aksu. Your check-up appointment is on Friday at 10:30, but unfortunately Dr.</text>
<text x="26" y="96">Er will be at a conference that day. We can see you on Thursday at 4 p.m. or</text>
<text x="26" y="113">on Monday at 10:30. Please call us back before Thursday noon to choose a</text>
<text x="26" y="130">time. If we don’t hear from you, we’ll have to cancel the appointment.</text>
<text x="26" y="147">Thanks, bye!”</text></g>
</svg></div><p>According to the voicemail, what should Mr. Aksu do?</p>`,
  c: [`Go to the clinic on Friday at 10:30 as planned.`, `Wait for the clinic to call him again on Thursday.`, `Call the clinic by Thursday noon and choose a new time.`, `Cancel his appointment because Dr. Er is ill.`], a: "C",
  s: `<p>Mesajda “Please call us back <b>before Thursday noon</b> to choose a time.” deniyor; Bay Aksu perşembe öğlene kadar klinği arayıp yeni bir saat seçmelidir ✓.</p><p>Cuma günkü randevu doktor konferansta olduğu için yapılamaz. Klinik tekrar aramayacak; aranmazsa randevuyu iptal edecek. Doktor hasta değil, konferanstadır. Cevap <b>C</b>.</p>` },
{ q: `<p>Which of the following is most probably said by the person who <b>answers</b> the phone?</p>`,
  c: [`Is this a good time to talk?`, `Could you tell her that Ece called?`, `Shall I ask him to ring you back?`, `Sorry to bother you so late.`], a: "C",
  s: `<p>“Shall I ask him to ring you back?” (Onun sizi geri aramasını söyleyeyim mi?) cümlesinde konuşan kişi, aranan kişi adına <b>mesaj almayı teklif ediyor</b>; bu, telefonu açan kişiye aittir.</p><p>“Konuşmak için uygun bir zaman mı?”, “Ona Ece’nin aradığını söyler misiniz?” ve “Bu kadar geç rahatsız ettiğim için özür dilerim.” cümlelerinin hepsi <b>arayan</b> kişinin sözleridir. Cevap <b>C</b>.</p>` },
{ q: `<div class="fig"><svg viewBox="0 0 600 220" width="600" role="img" aria-label="Telefon görgü kuralları afişi">
<g font-size="11.5" fill="#1e293b">
<rect x="3" y="3" width="594" height="214" rx="12" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
<text x="300" y="30" text-anchor="middle" font-weight="bold" font-size="15" fill="#0f172a">PHONE ETIQUETTE FOR TEENS</text>
<rect x="15" y="44" width="280" height="160" rx="8" fill="#dcfce7" stroke="#16a34a"/>
<rect x="305" y="44" width="280" height="160" rx="8" fill="#fee2e2" stroke="#dc2626"/>
<text x="155" y="64" text-anchor="middle" font-weight="bold" fill="#166534">✓ DO</text>
<text x="445" y="64" text-anchor="middle" font-weight="bold" fill="#991b1b">✗ DON’T</text>
<text x="25" y="88">• Say who you are at the start of a call.</text>
<text x="25" y="118">• Call people between 9 a.m. and 9 p.m.</text>
<text x="25" y="148">• Keep voice messages short.</text>
<text x="25" y="178">• Speak quietly in public places.</text>
<text x="315" y="88">• Eat or chew gum while you are talking.</text>
<text x="315" y="118">• Use speakerphone on the bus.</text>
<text x="315" y="148">• Hang up without saying goodbye.</text>
<text x="315" y="178">• Call again and again if nobody answers.</text>
</g>
</svg></div><p>Which student does <b>NOT</b> follow the advice on the poster?</p>`,
  c: [`Kaan calls his teacher at 8:30 p.m. to ask a question about homework.`, `Eda leaves a voice message: “Hi, it’s Eda. Call me on 0532 111 22 33 about the project.”`, `Lara answers her phone in a whisper when it rings in the library.`, `Mert calls his friend five times in ten minutes because she doesn’t pick up.`], a: "D",
  s: `<p>Afişteki “DON’T” bölümünde “Call again and again if nobody answers.” (Kimse açmazsa tekrar tekrar arama.) yazıyor. Mert on dakikada beş kez arayarak bu kurala <b>uymuyor</b>.</p><p>Kaan saat 20:30’da arıyor; bu, 9 a.m. – 9 p.m. aralığındadır (saat 21:00’den önce, tuzak!). Eda’nın mesajı kısa ve ad–numara–sebep içeriyor. Lara kütüphanede fısıldayarak konuşuyor. Cevap <b>D</b>.</p>` },
{ q: `<p><b>Emre:</b> Did you talk to the bus company about your lost bag?<br><b>Sude:</b> Not yet. I’ve called them five times since lunch, but ----. They must be getting a lot of calls today.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`the line has been engaged every time`, `they put me through to the manager at once`, `I left my bag on the bus again`, `they called me back immediately`], a: "A",
  s: `<p>Sude beş kez aramasına rağmen henüz konuşamadığını söylüyor ve sebebini tahmin ediyor: “Bugün çok fazla arama alıyor olmalılar.” Bu durumda hat her seferinde <b>meşguldür</b>: “the line has been engaged every time.”</p><p>Müdüre bağlanmak veya hemen geri aranmak “Not yet.” (Henüz konuşmadım) ile çelişir; çantayı yine otobüste unutmak konuyla ilgisizdir. Cevap <b>A</b>.</p>` },
{ q: `<div class="fig"><svg viewBox="0 0 520 235" width="520" role="img" aria-label="Telefon kullanım amacı pasta grafiği">
<g font-size="12" fill="#1e293b">
<text x="300" y="18" text-anchor="middle" font-weight="bold" font-size="13">What do you mostly use your phone for? (200 students)</text>
<path d="M150,125 L150.0,30.0 A95,95 0 0,1 205.8,201.9 z" fill="#0ea5e9" stroke="#ffffff" stroke-width="2"/>
<text x="209.6" y="109.6" text-anchor="middle" font-weight="bold" fill="#ffffff">40%</text>
<path d="M150,125 L205.8,201.9 A95,95 0 0,1 73.1,180.8 z" fill="#a855f7" stroke="#ffffff" stroke-width="2"/>
<text x="140.2" y="190.9" text-anchor="middle" font-weight="bold" fill="#ffffff">25%</text>
<path d="M150,125 L73.1,180.8 A95,95 0 0,1 59.6,95.6 z" fill="#22c55e" stroke="#ffffff" stroke-width="2"/>
<text x="88.1" y="138.8" text-anchor="middle" font-weight="bold" fill="#ffffff">15%</text>
<path d="M150,125 L59.6,95.6 A95,95 0 0,1 104.2,41.8 z" fill="#f59e0b" stroke="#ffffff" stroke-width="2"/>
<text x="101.7" y="89.0" text-anchor="middle" font-weight="bold" fill="#ffffff">12%</text>
<path d="M150,125 L104.2,41.8 A95,95 0 0,1 150.0,30.0 z" fill="#ef4444" stroke="#ffffff" stroke-width="2"/>
<text x="134.4" y="68.3" text-anchor="middle" font-weight="bold" fill="#ffffff">8%</text>
<rect x="300" y="60" width="18" height="18" rx="3" fill="#0ea5e9"/>
<text x="326" y="74">Texting – 40%</text>
<rect x="300" y="90" width="18" height="18" rx="3" fill="#a855f7"/>
<text x="326" y="104">Social media – 25%</text>
<rect x="300" y="120" width="18" height="18" rx="3" fill="#22c55e"/>
<text x="326" y="134">Phone calls – 15%</text>
<rect x="300" y="150" width="18" height="18" rx="3" fill="#f59e0b"/>
<text x="326" y="164">Games – 12%</text>
<rect x="300" y="180" width="18" height="18" rx="3" fill="#ef4444"/>
<text x="326" y="194">Taking photos – 8%</text>
</g>
</svg></div><p>Which of the following can <b>NOT</b> be said according to the chart?</p>`,
  c: [`Five times as many students mostly text as mostly take photos.`, `Social media is more popular than phone calls and games together.`, `30 students mostly use their phones for making calls.`, `More than half of the students mostly text or make calls.`], a: "B",
  s: `<p>Sosyal medya %25; telefon görüşmesi + oyun = %15 + %12 = <b>%27</b>. %25 &lt; %27 olduğundan bu ifade <b>söylenemez</b>.</p><p>Mesajlaşma %40, fotoğraf %8 → 40 ÷ 8 = 5 kat ✓. 200 öğrencinin %15’i = 30 öğrenci ✓. Mesajlaşma + arama = %55, yarıdan fazla ✓. Cevap <b>B</b>.</p>` },
{ q: `<div class="fig"><svg viewBox="0 0 600 182" width="600" role="img" aria-label="Öğretmen telefon saatleri tablosu">
<g font-size="11" fill="#1e293b">
<text x="300" y="18" text-anchor="middle" font-weight="bold" font-size="13">PARENT PHONE HOURS – Atakum Middle School</text>
<rect x="8" y="28" width="140" height="28" fill="#1e3a8a" stroke="#ffffff"/>
<text x="78" y="47" text-anchor="middle" font-weight="bold" fill="#ffffff">Teacher</text>
<rect x="148" y="28" width="90" height="28" fill="#1e3a8a" stroke="#ffffff"/>
<text x="193" y="47" text-anchor="middle" font-weight="bold" fill="#ffffff">Mon</text>
<rect x="238" y="28" width="90" height="28" fill="#1e3a8a" stroke="#ffffff"/>
<text x="283" y="47" text-anchor="middle" font-weight="bold" fill="#ffffff">Tue</text>
<rect x="328" y="28" width="90" height="28" fill="#1e3a8a" stroke="#ffffff"/>
<text x="373" y="47" text-anchor="middle" font-weight="bold" fill="#ffffff">Wed</text>
<rect x="418" y="28" width="90" height="28" fill="#1e3a8a" stroke="#ffffff"/>
<text x="463" y="47" text-anchor="middle" font-weight="bold" fill="#ffffff">Thu</text>
<rect x="508" y="28" width="84" height="28" fill="#1e3a8a" stroke="#ffffff"/>
<text x="550" y="47" text-anchor="middle" font-weight="bold" fill="#ffffff">Fri</text>
<rect x="8" y="56" width="140" height="32" fill="#eff6ff" stroke="#cbd5e1"/>
<text x="78" y="76" text-anchor="middle" font-weight="bold">Mr. Arslan (Maths)</text>
<rect x="148" y="56" width="90" height="32" fill="#eff6ff" stroke="#cbd5e1"/>
<text x="193" y="76" text-anchor="middle">13:00–14:00</text>
<rect x="238" y="56" width="90" height="32" fill="#eff6ff" stroke="#cbd5e1"/>
<text x="283" y="76" text-anchor="middle">–</text>
<rect x="328" y="56" width="90" height="32" fill="#eff6ff" stroke="#cbd5e1"/>
<text x="373" y="76" text-anchor="middle">10:00–11:00</text>
<rect x="418" y="56" width="90" height="32" fill="#eff6ff" stroke="#cbd5e1"/>
<text x="463" y="76" text-anchor="middle">–</text>
<rect x="508" y="56" width="84" height="32" fill="#eff6ff" stroke="#cbd5e1"/>
<text x="550" y="76" text-anchor="middle">15:00–16:00</text>
<rect x="8" y="88" width="140" height="32" fill="#ffffff" stroke="#cbd5e1"/>
<text x="78" y="108" text-anchor="middle" font-weight="bold">Ms. Duru (English)</text>
<rect x="148" y="88" width="90" height="32" fill="#ffffff" stroke="#cbd5e1"/>
<text x="193" y="108" text-anchor="middle">–</text>
<rect x="238" y="88" width="90" height="32" fill="#ffffff" stroke="#cbd5e1"/>
<text x="283" y="108" text-anchor="middle">09:00–10:00</text>
<rect x="328" y="88" width="90" height="32" fill="#ffffff" stroke="#cbd5e1"/>
<text x="373" y="108" text-anchor="middle">14:00–15:00</text>
<rect x="418" y="88" width="90" height="32" fill="#ffffff" stroke="#cbd5e1"/>
<text x="463" y="108" text-anchor="middle">–</text>
<rect x="508" y="88" width="84" height="32" fill="#ffffff" stroke="#cbd5e1"/>
<text x="550" y="108" text-anchor="middle">–</text>
<rect x="8" y="120" width="140" height="32" fill="#eff6ff" stroke="#cbd5e1"/>
<text x="78" y="140" text-anchor="middle" font-weight="bold">Mr. Kara (Science)</text>
<rect x="148" y="120" width="90" height="32" fill="#eff6ff" stroke="#cbd5e1"/>
<text x="193" y="140" text-anchor="middle">10:00–11:00</text>
<rect x="238" y="120" width="90" height="32" fill="#eff6ff" stroke="#cbd5e1"/>
<text x="283" y="140" text-anchor="middle">13:00–14:00</text>
<rect x="328" y="120" width="90" height="32" fill="#eff6ff" stroke="#cbd5e1"/>
<text x="373" y="140" text-anchor="middle">–</text>
<rect x="418" y="120" width="90" height="32" fill="#eff6ff" stroke="#cbd5e1"/>
<text x="463" y="140" text-anchor="middle">13:00–14:00</text>
<rect x="508" y="120" width="84" height="32" fill="#eff6ff" stroke="#cbd5e1"/>
<text x="550" y="140" text-anchor="middle">–</text>
<text x="300" y="173" text-anchor="middle" font-size="11" fill="#b91c1c">Outside these hours, teachers are in class. Please leave a message with the secretary.</text></g>
</svg></div><p>Four parents call the school. Who will most probably have to <b>leave a message</b> with the secretary?</p>`,
  c: [`Mrs. Gül, who calls Ms. Duru on Wednesday at 14:30`, `Mr. Öz, who calls Mr. Kara on Thursday at 13:15`, `Mr. Tan, who calls Mr. Arslan on Friday at 15:45`, `Mrs. Ak, who calls Mr. Arslan on Tuesday at 10:30`], a: "D",
  s: `<p>Bay Arslan’ın salı günü telefon saati <b>yoktur</b> (–). Saat 10:00–11:00 aralığı <b>çarşamba</b> gününe aittir (tuzak!). Bu yüzden Bayan Ak sekretere mesaj bırakmak zorunda kalır.</p><p>Bayan Duru çarşamba 14:00–15:00, Bay Kara perşembe 13:00–14:00, Bay Arslan cuma 15:00–16:00 arasında telefona cevap verebilir; diğer veliler öğretmenlere ulaşır. Cevap <b>D</b>.</p>` },
{ q: `<p>Do you feel nervous when your battery is low or when there is no signal? If so, you may have “nomophobia”, which comes from “<b>no mo</b>bile phone <b>phobia</b>”. In a study with 1,000 teenagers, 6 out of 10 checked their phones within five minutes after waking up, and nearly half of them said they would rather lose their wallet than their phone. Experts don’t say that phones are bad, but they suggest some simple rules: keep your phone out of your bedroom at night, turn off notifications while studying and have phone-free meals with your family.</p><p>Which of the following is <b>CORRECT</b> according to the text?</p>`,
  c: [`Experts think teenagers should stop using phones completely.`, `Most of the teenagers in the study look at their phones soon after they wake up.`, `Nearly half of the teenagers in the study lost their wallets.`, `Nomophobia is the fear of making phone calls to strangers.`], a: "B",
  s: `<p>Çalışmada her 10 gençten 6’sı (%60, yani çoğunluk) uyandıktan sonraki beş dakika içinde telefonuna bakıyor ✓.</p><p>Uzmanlar telefonların kötü olduğunu söylemiyor, sadece basit kurallar öneriyor. Gençlerin yarıya yakını cüzdanını <b>kaybetmemiş</b>; telefon yerine cüzdanını kaybetmeyi <b>tercih edeceğini</b> söylemiş. Nomofobi, telefonsuz kalma korkusudur; yabancıları arama korkusu değildir. Cevap <b>B</b>.</p>` },
{ q: `<p>Four teenagers talk about how they communicate.</p><div class="fig"><svg viewBox="0 0 600 227" width="600" role="img" aria-label="Konuşma balonları">
<g font-size="11.5" fill="#1e293b"><rect x="10" y="10" width="285" height="62" rx="12" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
<path d="M40,72 l12,14 l6,-14" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
<rect x="39" y="70" width="22" height="4" fill="#ffffff"/>
<text x="22" y="29">I hate it when my phone rings. My heart beats</text>
<text x="22" y="45">fast and I never know what to say, so I</text>
<text x="22" y="60">always send a text instead.</text>
<circle cx="44" cy="98" r="11" fill="#2563eb"/>
<text x="62" y="103" font-weight="bold" fill="#2563eb">Ayaz</text>
<rect x="305" y="10" width="285" height="62" rx="12" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
<path d="M335,72 l12,14 l6,-14" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
<rect x="334" y="70" width="22" height="4" fill="#ffffff"/>
<text x="317" y="29">Texting takes too long. If something is</text>
<text x="317" y="45">important, I just call and solve it in one</text>
<text x="317" y="60">minute.</text>
<circle cx="339" cy="98" r="11" fill="#16a34a"/>
<text x="357" y="103" font-weight="bold" fill="#16a34a">Nehir</text>
<rect x="10" y="120" width="285" height="62" rx="12" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
<path d="M40,183 l12,14 l6,-14" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
<rect x="39" y="181" width="22" height="4" fill="#ffffff"/>
<text x="22" y="140">My cousins live abroad. I prefer video calls</text>
<text x="22" y="155">with them because I want to see their smiles,</text>
<text x="22" y="171">too.</text>
<circle cx="44" cy="209" r="11" fill="#d97706"/>
<text x="62" y="214" font-weight="bold" fill="#d97706">Bora</text>
<rect x="305" y="120" width="285" height="62" rx="12" fill="#ffffff" stroke="#9333ea" stroke-width="2"/>
<path d="M335,183 l12,14 l6,-14" fill="#ffffff" stroke="#9333ea" stroke-width="2"/>
<rect x="334" y="181" width="22" height="4" fill="#ffffff"/>
<text x="317" y="140">I don’t mind calls, but I never pick up</text>
<text x="317" y="155">numbers I don’t know. I wait for a voice</text>
<text x="317" y="171">message first.</text>
<circle cx="339" cy="209" r="11" fill="#9333ea"/>
<text x="357" y="214" font-weight="bold" fill="#9333ea">Ceren</text></g>
</svg></div><p>Who would most probably agree with the sentence below?</p><p><i>“Just hearing someone’s voice is not enough for me.”</i></p>`,
  c: [`Ayaz`, `Bora`, `Nehir`, `Ceren`], a: "B",
  s: `<p>“Sadece birinin sesini duymak bana yetmez.” cümlesine, kuzenlerinin <b>gülümsemelerini de görmek</b> istediği için görüntülü aramayı tercih eden Bora katılır.</p><p>Ayaz aramalarda heyecanlanıp mesajı seçiyor; Nehir sesli aramayı hızlı buluyor ve yeterli görüyor; Ceren sadece bilmediği numaraları açmıyor. Hiçbiri görüntüye ihtiyaç duyduğunu söylemiyor. Cevap <b>B</b>.</p>` },
{ q: `<p>“Please don’t hang ---- yet. I’ll put you ---- to the sales department in a second.”</p><p>Which of the following best completes the blanks?</p>`,
  c: [`on / up`, `out / back`, `up / through`, `up / off`], a: "C",
  s: `<p>“Don’t <b>hang up</b>” = telefonu kapatma; “I’ll <b>put you through</b> to …” = sizi … bağlıyorum. Görevli, arayanı satış bölümüne bağlayacağı için kapatmamasını istiyor.</p><p>“Hang on” (bekle) olumsuz cümlede “Don’t hang on” → “bekleme” anlamına gelir ve cümleyle çelişir; “put up”, “put back”, “put off” ise “bağlamak” anlamı vermez. Cevap <b>C</b>.</p>` },
{ q: `<div class="fig"><svg viewBox="0 0 540 273" width="540" role="img" aria-label="TECHZONE CUSTOMER SERVICE">
<rect x="2" y="2" width="536" height="269" rx="12" fill="#f0fdfa" stroke="#0f766e" stroke-width="2"/>
<rect x="10" y="8" width="520" height="30" rx="8" fill="#0f766e"/>
<text x="270" y="28" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">TECHZONE CUSTOMER SERVICE</text>
<g font-size="12" fill="#1e293b"><text x="24" y="60" font-weight="bold" fill="#1e3a8a">Agent :</text>
<text x="102" y="60">TechZone customer service, this is Mert. How can I help you?</text>
<text x="24" y="85" font-weight="bold" fill="#1e3a8a">Ms. Kurt :</text>
<text x="102" y="85">Hi. I bought a pair of headphones from your website last week, but the</text>
<text x="102" y="102">left side doesn’t work at all.</text>
<text x="24" y="127" font-weight="bold" fill="#1e3a8a">Agent :</text>
<text x="102" y="127">I’m sorry to hear that. Could you give me your order number, please?</text>
<text x="24" y="152" font-weight="bold" fill="#1e3a8a">Ms. Kurt :</text>
<text x="102" y="152">It’s TZ-4471.</text>
<text x="24" y="177" font-weight="bold" fill="#1e3a8a">Agent :</text>
<text x="102" y="177">Thank you. We can send you a new pair, or you can get your money back.</text>
<text x="102" y="194">Which do you prefer?</text>
<text x="24" y="219" font-weight="bold" fill="#1e3a8a">Ms. Kurt :</text>
<text x="102" y="219">I’d rather have a new pair. I really like this model.</text>
<text x="24" y="244" font-weight="bold" fill="#1e3a8a">Agent :</text>
<text x="102" y="244">No problem. You’ll get them in three days.</text></g>
</svg></div><p>According to the conversation, which of the following is <b>CORRECT</b>?</p>`,
  c: [`Ms. Kurt called to order a different model of headphones.`, `The agent asks for some information before offering a solution.`, `Ms. Kurt wants her money back because she doesn’t like the model.`, `Ms. Kurt will receive the new headphones next week.`], a: "B",
  s: `<p>Görevli önce sipariş numarasını istiyor (bilgi alma), ardından yeni ürün veya para iadesi seçeneklerini sunuyor (çözüm) ✓.</p><p>Bayan Kurt bozuk ürün için arıyor, farklı model sipariş etmiyor. Modeli çok sevdiği için para iadesi değil <b>yeni bir çift</b> istiyor. Ürün gelecek hafta değil, <b>üç gün içinde</b> gelecek. Cevap <b>B</b>.</p>` },
{ q: `<p>Which of the following situations and sentences do <b>NOT</b> match?</p>`,
  c: [`You can’t hear the caller because of the traffic. → “Could you speak up a little, please?”`, `You want to learn who is on the phone. → “Who’s calling, please?”`, `The caller wants to talk to you. → “Hold on, I’ll get her.”`, `You want someone to give your friend a message. → “Could you tell him that Ali called?”`], a: "C",
  s: `<p>Arayan kişi <b>seninle</b> konuşmak istiyorsa “Speaking.” (Benim.) dersin. “Hold on, I’ll get her.” (Bekleyin, onu çağırıyorum.) ise aranan kişi <b>başkası</b> olduğunda söylenir; eşleşme yanlıştır.</p><p>Trafik gürültüsünde karşındakinden daha yüksek sesle konuşmasını istemek, arayanın kim olduğunu sormak ve arkadaşına mesaj bırakmak için verilen cümleler doğru eşleşmiştir. Cevap <b>C</b>.</p>` },
{ q: `<div class="fig"><svg viewBox="0 0 400 346" width="400" role="img" aria-label="Dad mesajlaşma ekranı">
<rect x="2" y="2" width="396" height="342" rx="18" fill="#e2e8f0" stroke="#334155" stroke-width="3"/>
<rect x="2" y="2" width="396" height="54" rx="18" fill="#0f766e"/>
<rect x="2" y="40" width="396" height="16" fill="#0f766e"/>
<circle cx="34" cy="29" r="15" fill="#99f6e4"/>
<text x="58" y="26" font-size="14" font-weight="bold" fill="#ffffff">Dad</text>
<text x="58" y="44" font-size="10.5" fill="#ccfbf1">online</text>
<g font-size="11.5" fill="#1e293b"><rect x="20" y="70" width="272" height="33" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
<text x="32" y="87">Hi Zeynep, are you still at the library?</text>
<text x="284" y="98" font-size="10" fill="#64748b" text-anchor="end">16:10</text>
<rect x="108" y="113" width="272" height="49" rx="10" fill="#dcfce7" stroke="#cbd5e1"/>
<text x="120" y="131">Yes, but I can’t talk here. I’ll call you</text>
<text x="120" y="146">when I leave.</text>
<text x="372" y="157" font-size="10" fill="#64748b" text-anchor="end">16:12</text>
<rect x="20" y="172" width="272" height="33" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
<text x="32" y="190">When will you leave?</text>
<text x="284" y="201" font-size="10" fill="#64748b" text-anchor="end">16:12</text>
<rect x="108" y="216" width="272" height="49" rx="10" fill="#dcfce7" stroke="#cbd5e1"/>
<text x="120" y="233">My study group finishes in 40 minutes. Then</text>
<text x="120" y="249">I need 10 minutes to walk to the bus stop.</text>
<text x="372" y="260" font-size="10" fill="#64748b" text-anchor="end">16:15</text>
<rect x="20" y="275" width="272" height="49" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
<text x="32" y="292">OK. Call me when you get to the bus stop.</text>
<text x="32" y="308">I’ll pick you up there.</text>
<text x="284" y="319" font-size="10" fill="#64748b" text-anchor="end">16:16</text></g>
</svg></div><p>At what time will Zeynep most probably call her father?</p>`,
  c: [`At about 16:55`, `At about 16:25`, `At about 17:05`, `At about 17:15`], a: "C",
  s: `<p>Zeynep 16:15’te “Çalışma grubum 40 dakika sonra bitiyor.” yazıyor → 16:15 + 40 dk = 16:55’te kütüphaneden çıkar. Otobüs durağına yürümek 10 dakika sürer → 17:05.</p><p>Babası “Durağa varınca beni ara.” dediği için arama saati yaklaşık <b>17:05</b>’tir. 16:55 kütüphaneden çıkış saatidir (çeldirici); 16:25 mesaj saatine sadece 10 dk ekler; 17:15 fazladan 10 dk ekler. Cevap <b>C</b>.</p>` },
{ q: `<p>“I wanted to wish my grandpa a happy birthday this morning, but I couldn’t <u>get through</u> to him because there is no signal in his village.”</p><p>What does the underlined phrase mean?</p>`,
  c: [`to reach someone on the phone`, `to finish talking to someone`, `to understand what someone says`, `to visit someone at home`], a: "A",
  s: `<p>Dedesinin köyünde <b>sinyal olmadığı</b> için konuşan kişi onu arayıp <b>ulaşamamıştır</b>. “Get through (to someone)” telefonda birine ulaşabilmek, bağlanabilmek demektir.</p><p>Konuşmayı bitirmek (hang up / finish), birinin söylediğini anlamak (understand) ve ziyaret etmek (visit) cümlenin bağlamına uymaz; sinyal sorunu yalnızca telefonla ulaşmayı engeller. Cevap <b>A</b>.</p>` },
{ q: `<div class="fig"><svg viewBox="0 0 480 229" width="480" role="img" aria-label="TELEPHONE MESSAGE">
<rect x="3" y="3" width="474" height="223" rx="10" fill="#f0f9ff" stroke="#0369a1" stroke-width="2.5"/>
<rect x="3" y="3" width="474" height="36" rx="10" fill="#0369a1"/>
<rect x="3" y="27" width="474" height="12" fill="#0369a1"/>
<text x="240" y="27" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">TELEPHONE MESSAGE</text>
<g font-size="12" fill="#1e293b"><text x="26" y="62" font-weight="bold" fill="#0369a1">To:</text>
<text x="121" y="62">Ms. Yıldız (Manager)</text>
<text x="26" y="86" font-weight="bold" fill="#0369a1">Caller:</text>
<text x="121" y="86">Mr. Lee, Sunway Travel</text>
<text x="26" y="110" font-weight="bold" fill="#0369a1">Date:</text>
<text x="121" y="110">14 May, 15:20</text>
<text x="26" y="134" font-weight="bold" fill="#0369a1">Message:</text>
<text x="121" y="134">The team’s flights to Seoul are booked. He needs the</text>
<text x="121" y="151">passport numbers of all five people by Friday.</text>
<rect x="26" y="164" width="13" height="13" rx="2" fill="#ffffff" stroke="#334155" stroke-width="1.4"/>
<path d="M28,170 l3.5,4 l6.5,-9" fill="none" stroke="#16a34a" stroke-width="2.4"/>
<text x="45" y="175">Please call back on 0212 555 41 90</text>
<text x="26" y="199" font-weight="bold" fill="#0369a1">Taken by:</text>
<text x="121" y="199">Okan</text></g>
</svg></div><p>Which of the following questions can <b>NOT</b> be answered according to the message?</p>`,
  c: [`How many people are travelling to Seoul?`, `When does Mr. Lee need the passport numbers?`, `Who wrote down the message?`, `What time does the team’s flight to Seoul leave?`], a: "D",
  s: `<p>Notta uçuşların ayarlandığı yazıyor ama uçağın <b>kalkış saati</b> hiçbir yerde verilmiyor; bu soru cevaplanamaz.</p><p>Kişi sayısı: five people (beş kişi). Pasaport numaraları: by Friday (cumaya kadar). Mesajı yazan: Taken by: Okan. 15:20 uçuş saati değil, <b>aramanın</b> saatidir (tuzak!). Cevap <b>D</b>.</p>` },
{ q: `<p><b>Caller:</b> Hello, could I speak to Mr. Er, please?<br><b>Secretary:</b> I’m sorry, Mr. Er ----. Would you like to leave a message?</p><p>Which of the following can <b>NOT</b> complete the conversation?</p>`,
  c: [`is out for lunch now`, `will be with you in a second, so please hold on`, `is on another line at the moment`, `hasn’t come to the office yet`], a: "B",
  s: `<p>Sekreter özür dileyip (“I’m sorry”) <b>mesaj bırakmayı</b> teklif ediyor; demek ki Bay Er şu an telefona <b>gelemez</b>. Öğle yemeğinde olması, başka hatta konuşması ve ofise henüz gelmemiş olması buna uygundur.</p><p>“Birazdan sizinle olacak, lütfen bekleyin” ise kişinin <b>müsait</b> olduğunu gösterir ve mesaj bırakma teklifiyle çelişir. Cevap <b>B</b>.</p>` },
{ q: `<div class="fig"><svg viewBox="0 0 480 222" width="480" role="img" aria-label="CALLING 112 – EMERGENCY">
<rect x="3" y="3" width="474" height="216" rx="10" fill="#fef2f2" stroke="#dc2626" stroke-width="2.5"/>
<rect x="3" y="3" width="474" height="36" rx="10" fill="#dc2626"/>
<rect x="3" y="27" width="474" height="12" fill="#dc2626"/>
<text x="240" y="27" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">CALLING 112 – EMERGENCY</text>
<g font-size="12" fill="#1e293b"><text x="26" y="62" font-weight="bold" fill="#dc2626">1.</text>
<text x="54" y="62">Stay calm and speak clearly.</text>
<text x="26" y="86" font-weight="bold" fill="#dc2626">2.</text>
<text x="54" y="86">Say what has happened: a fire, an accident, an illness…</text>
<text x="26" y="110" font-weight="bold" fill="#dc2626">3.</text>
<text x="54" y="110">Give the exact address and a place nearby that is easy to find.</text>
<text x="26" y="134" font-weight="bold" fill="#dc2626">4.</text>
<text x="54" y="134">Answer all the questions of the operator.</text>
<text x="26" y="158" font-weight="bold" fill="#dc2626">5.</text>
<text x="54" y="158">Don’t hang up until the operator tells you to.</text>
<text x="240" y="186" font-size="11" font-style="italic" fill="#475569" text-anchor="middle">Only call for real emergencies! Joke calls can stop help from reaching</text>
<text x="240" y="201" font-size="11" font-style="italic" fill="#475569" text-anchor="middle">people who really need it.</text></g>
</svg></div><p>Deniz sees a car accident and calls 112. Which of the following is <b>NOT</b> suitable according to the card?</p>`,
  c: [`“There has been a car accident. Two people are hurt.”`, `“I have told you everything, so I’m hanging up now. Bye!”`, `“It’s on Atatürk Street, in front of the big post office.”`, `“Yes, one of them is awake and he can talk.”`], a: "B",
  s: `<p>5. kurala göre görevli söyleyene kadar telefon <b>kapatılmamalıdır</b>. “Her şeyi anlattım, şimdi kapatıyorum.” demek kurala aykırıdır.</p><p>Ne olduğunu söylemek (2. kural), adres ve kolay bulunan bir yer vermek (3. kural) ve görevlinin sorusunu cevaplamak (4. kural) karta uygundur. Cevap <b>B</b>.</p>` },
{ q: `<p>Which of the following question–answer pairs is <b>NOT</b> appropriate?</p>`,
  c: [`– Could you spell your surname?<br>– Sure. It’s K-A-Y-A.`, `– Can I take a message?<br>– Yes, please. Tell her I’ll be late.`, `– Who’s calling, please?<br>– Speaking.`, `– Can you speak up, please?<br>– Sure. Is this better?`], a: "C",
  s: `<p>“Who’s calling, please?” (Kim arıyor?) sorusuna arayan kendini tanıtarak cevap vermelidir: “This is Ece.” “Speaking.” ise “Aradığınız kişi benim.” anlamına gelir ve “Can I speak to …?” sorusunun cevabıdır; bu çift uygun değildir.</p><p>Soyadını harf harf söylemek, mesaj bırakmak ve sesini yükseltip “Böyle daha iyi mi?” diye sormak uygun cevaplardır. Cevap <b>C</b>.</p>` },
{ q: `<p>A friend of Kaya’s leaves him a voice message:</p><p><i>“Hi Kaya, it’s me! I’ve got a new number, so save it, please. It’s oh-five-four-two, three-double-oh, seven-one, double-six. Bye!”</i></p><div class="fig"><svg viewBox="0 0 380 190" width="380" role="img" aria-label="Rehber listesi">
<g font-size="12.5" fill="#1e293b">
<rect x="3" y="3" width="374" height="184" rx="14" fill="#ffffff" stroke="#334155" stroke-width="2"/>
<text x="190" y="28" text-anchor="middle" font-weight="bold" font-size="14">Contacts</text>
<circle cx="34" cy="58" r="12" fill="#c7d2fe"/>
<circle cx="34" cy="54" r="4.5" fill="#4338ca"/>
<path d="M26,66 a8,7 0 0,1 16,0 z" fill="#4338ca"/>
<text x="56" y="63" font-weight="bold">Alp</text>
<text x="360" y="63" text-anchor="end" fill="#334155">0542 300 71 66</text>
<line x1="20" y1="75" x2="360" y2="75" stroke="#e2e8f0"/>
<circle cx="34" cy="93" r="12" fill="#c7d2fe"/>
<circle cx="34" cy="89" r="4.5" fill="#4338ca"/>
<path d="M26,101 a8,7 0 0,1 16,0 z" fill="#4338ca"/>
<text x="56" y="98" font-weight="bold">Bade</text>
<text x="360" y="98" text-anchor="end" fill="#334155">0542 330 71 66</text>
<line x1="20" y1="110" x2="360" y2="110" stroke="#e2e8f0"/>
<circle cx="34" cy="128" r="12" fill="#c7d2fe"/>
<circle cx="34" cy="124" r="4.5" fill="#4338ca"/>
<path d="M26,136 a8,7 0 0,1 16,0 z" fill="#4338ca"/>
<text x="56" y="133" font-weight="bold">Cem</text>
<text x="360" y="133" text-anchor="end" fill="#334155">0524 300 71 66</text>
<line x1="20" y1="145" x2="360" y2="145" stroke="#e2e8f0"/>
<circle cx="34" cy="163" r="12" fill="#c7d2fe"/>
<circle cx="34" cy="159" r="4.5" fill="#4338ca"/>
<path d="M26,171 a8,7 0 0,1 16,0 z" fill="#4338ca"/>
<text x="56" y="168" font-weight="bold">Duru</text>
<text x="360" y="168" text-anchor="end" fill="#334155">0542 300 17 66</text>
<line x1="20" y1="180" x2="360" y2="180" stroke="#e2e8f0"/>
</g>
</svg></div><p>Kaya has already saved the new number. Who left the message?</p>`,
  c: [`Alp`, `Bade`, `Cem`, `Duru`], a: "A",
  s: `<p>Söylenen numara: oh-five-four-two (0542), three-double-oh (300), seven-one (71), double-six (66) → <b>0542 300 71 66</b>. Bu numara Alp’e aittir.</p><p>Bade’nin numarasında 330 (three-three-oh), Cem’inkinde 0524, Duru’nunkinde 17 (one-seven) vardır. İngilizcede 0 “oh”, yan yana iki aynı rakam “double” diye okunur. Cevap <b>A</b>.</p>` },
{ q: `<p>Last year, my grandmother, who lives in a small village in Rize, got her first smartphone. At first, she didn’t know how to answer video calls, so she kept hanging up by mistake! My brother wrote the steps on a piece of paper and stuck it on her fridge. Now she calls us every Sunday evening and shows us her tea garden. Sometimes the signal is weak and her face freezes on the screen, but she just laughs and says, “Call me back, my tea is getting cold!”</p><p>Which of the following is <b>CORRECT</b> according to the text?</p>`,
  c: [`The writer’s brother helped his grandmother by writing instructions for her.`, `The grandmother learned how to use video calls on the first day.`, `The family has video calls with the grandmother every day.`, `The grandmother gets angry when the signal is weak.`], a: "A",
  s: `<p>“My brother wrote the steps on a piece of paper and stuck it on her fridge.” → Yazarın kardeşi adımları bir kâğıda yazıp buzdolabına yapıştırarak büyükannesine yardım etmiş ✓.</p><p>Büyükanne başta aramaları yanlışlıkla kapatıyordu, yani hemen öğrenemedi. Görüntülü aramalar her gün değil, <b>her pazar akşamı</b> yapılıyor. Sinyal zayıf olduğunda kızmıyor, <b>gülüyor</b>. Cevap <b>A</b>.</p>` },
{ q: `<div class="fig"><svg viewBox="0 0 400 482" width="400" role="img" aria-label="Class Trip Committee mesajlaşma ekranı">
<rect x="2" y="2" width="396" height="478" rx="18" fill="#e2e8f0" stroke="#334155" stroke-width="3"/>
<rect x="2" y="2" width="396" height="54" rx="18" fill="#0f766e"/>
<rect x="2" y="40" width="396" height="16" fill="#0f766e"/>
<circle cx="34" cy="29" r="15" fill="#99f6e4"/>
<text x="58" y="26" font-size="14" font-weight="bold" fill="#ffffff">Class Trip Committee</text>
<text x="58" y="44" font-size="10.5" fill="#ccfbf1">Kerem, Lale, Onur, Su</text>
<g font-size="11.5" fill="#1e293b"><rect x="20" y="70" width="272" height="64" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
<text x="32" y="87" font-weight="bold" fill="#0f766e">Kerem</text>
<text x="32" y="103">Who’s going to call the restaurant to book</text>
<text x="32" y="118">a table for 12 people?</text>
<text x="284" y="129" font-size="10" fill="#64748b" text-anchor="end">17:05</text>
<rect x="20" y="144" width="272" height="49" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
<text x="32" y="162" font-weight="bold" fill="#0f766e">Lale</text>
<text x="32" y="177">I can’t, I’m at my violin lesson until 7.</text>
<text x="284" y="188" font-size="10" fill="#64748b" text-anchor="end">17:07</text>
<rect x="20" y="203" width="272" height="64" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
<text x="32" y="221" font-weight="bold" fill="#0f766e">Onur</text>
<text x="32" y="236">My phone has been broken since Monday,</text>
<text x="32" y="252">sorry.</text>
<text x="284" y="263" font-size="10" fill="#64748b" text-anchor="end">17:08</text>
<rect x="20" y="278" width="272" height="49" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
<text x="32" y="295" font-weight="bold" fill="#0f766e">Su</text>
<text x="32" y="311">I can do it, but I don’t have their number.</text>
<text x="284" y="322" font-size="10" fill="#64748b" text-anchor="end">17:10</text>
<rect x="20" y="337" width="272" height="64" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
<text x="32" y="354" font-weight="bold" fill="#0f766e">Kerem</text>
<text x="32" y="370">It’s on their website. They close at 6</text>
<text x="32" y="385">today, so hurry!</text>
<text x="284" y="396" font-size="10" fill="#64748b" text-anchor="end">17:11</text>
<rect x="20" y="411" width="272" height="49" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
<text x="32" y="429" font-weight="bold" fill="#0f766e">Su</text>
<text x="32" y="444">OK, I’m calling them right now.</text>
<text x="284" y="455" font-size="10" fill="#64748b" text-anchor="end">17:12</text></g>
</svg></div><p>According to the messages, which of the following is <b>CORRECT</b>?</p>`,
  c: [`Lale is going to call the restaurant after her violin lesson.`, `Onur can’t make the call because his phone isn’t working.`, `Kerem sends Su the restaurant’s phone number.`, `The restaurant is open until 7 p.m. today.`], a: "B",
  s: `<p>Onur “My phone has been broken since Monday.” yazıyor; telefonu bozuk olduğu için arama yapamaz ✓.</p><p>Lale saat 7’ye kadar derste; restoranı Su arıyor. Kerem numarayı göndermiyor, numaranın <b>web sitesinde</b> olduğunu söylüyor. Restoran bugün saat 7’de değil, <b>6’da</b> kapanıyor (7, Lale’nin dersinin bitiş saati – çeldirici). Cevap <b>B</b>.</p>` },
{ q: `<p>You are at your friend Ela’s house. You see this on your phone screen and decide to call your mother back.</p><div class="fig"><svg viewBox="0 0 400 338" width="400" role="img" aria-label="Kilit ekranı bildirimleri">
<rect x="80" y="4" width="240" height="330" rx="28" fill="#0f172a"/>
<rect x="92" y="16" width="216" height="306" rx="18" fill="#1e3a8a"/>
<g fill="#ffffff">
<rect x="262" y="26" width="24" height="12" rx="2" fill="none" stroke="#fca5a5" stroke-width="1.5"/>
<rect x="286" y="29" width="3" height="6" fill="#fca5a5"/>
<rect x="264" y="28" width="2" height="8" fill="#ef4444"/>
<text x="256" y="36" text-anchor="end" font-size="11" fill="#fca5a5" font-weight="bold">4%</text>
<text x="200" y="88" text-anchor="middle" font-size="40" font-weight="bold">21:40</text>
<text x="200" y="110" text-anchor="middle" font-size="12">Friday</text>
<rect x="104" y="128" width="192" height="52" rx="10" fill="#ffffff" fill-opacity="0.92"/>
<text x="114" y="149" font-size="12" font-weight="bold" fill="#dc2626">Mom · 3 missed calls</text>
<text x="114" y="168" font-size="11" fill="#334155">21:10 · 21:22 · 21:35</text>
<rect x="104" y="188" width="192" height="70" rx="10" fill="#ffffff" fill-opacity="0.92"/>
<text x="114" y="208" font-size="12" font-weight="bold" fill="#0f172a">Mom · Message</text>
<text x="114" y="226" font-size="11" fill="#334155">Where are you?? It’s very late.</text>
<text x="114" y="242" font-size="11" fill="#334155">Call me NOW!</text>
<rect x="104" y="266" width="192" height="40" rx="10" fill="#fef3c7"/>
<text x="200" y="291" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#92400e">Low battery – Silent mode on</text>
</g>
</svg></div><p>What would you most probably say?</p>`,
  c: [`“Hello, who’s calling, please? Can I take a message?”`, `“Hi Mom, I’ll call you back tomorrow morning after I charge my phone.”`, `“Hi Mom, the line was busy because I was talking to Ela on the phone.”`, `“Sorry, Mom! My phone was on silent and the battery is nearly dead. I’m at Ela’s. I’ll be home in 20 minutes.”`], a: "D",
  s: `<p>Ekranda annenin üç cevapsız araması, endişeli bir mesajı, <b>%4 şarj</b> ve <b>sessiz mod</b> uyarısı var. Annesini geri arayan kişi özür dilemeli, aramaları neden duymadığını (sessiz mod) ve şarjın bittiğini açıklamalı, nerede olduğunu söyleyip annesini rahatlatmalıdır ✓.</p><p>“Kim arıyor?” demek anneyi geri arayan biri için anlamsızdır. Endişeli anneye yarın sabah dönmek uygun değildir. Telefon sessizdeydi, hat meşgul değildi; üstelik Ela’nın evindeyken onunla telefonda konuşmuş olamaz. Cevap <b>D</b>.</p>` },
{ q: `<p>“I’m in a hurry now, but I’ll <u>give you a ring</u> this evening.”</p><p>Which of the following is closest in meaning to the underlined part?</p>`,
  c: [`call you`, `buy you a ring`, `send you a text`, `pick you up`], a: "A",
  s: `<p>Telefon ünitesinde <b>“give someone a ring / a call”</b> = birini aramak demektir; “ring” burada yüzük değil, telefon <b>zili / araması</b> anlamındadır (tuzak!).</p><p>Mesaj göndermek “text”, birini arabayla almak “pick up” ile ifade edilir; ikisi de “aramak” ile aynı anlamda değildir. Cevap <b>A</b>.</p>` }
]
});
