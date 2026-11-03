/* Adım Adım Anlatım · İngilizce · 4. Ünite On the Phone (biçim: tools/ANLATIM.md)
   Altyazıdaki [[...]] İngilizce bölümdür → <i lang="en">…</i>; tools/anlatim_ses.py İngilizce sesle okur. */
(function () {
  var L = {
  title: 'On the Phone: Telefon Görüşmesi',
  desc: 'Görüşmenin akışı, arayan ve açanın kalıpları, müsait / müsait değil ayrımı, mesaj bırakma, phrasal verb’ler, telefon sorunları, mesaj notu, rica kalıpları ve müşteri hizmetleri.',
  ozet: [
    'Akış: önce <b>açan</b> konuşur (Hello, Star Travel. How can I help you?) → arayan kendini tanıtır (<b>This is</b> Mert, “I am” değil) ve kimi istediğini söyler → kontrol → bağlama ya da mesaj → kapanış.',
    '<b>Speaking.</b> = Benim, buyurun (aranan kişi telefondaki kişidir).',
    'Müsait: Hold on. · I’ll put you through. · I’ll get him for you. Müsait değil: I’m afraid he’s out / in a meeting. · Can I take a message? · Would you like to leave a message?',
    '<b>hang up</b> = kapatmak · <b>hang on / hold on</b> = beklemek · pick up · call back · put through · get through · speak up · break up · cut off · run out of battery.',
    'The line is busy = hat meşgul; I’m busy = işim var.',
    'While You Were Out: <b>Please call back</b> → mesajın sahibi arar; <b>Will call again</b> → arayan yine arar.',
    'Would you mind + V-ing? → “No, not at all.” = sorun değil (kabul). Numara: 0 = oh, 44 = double four.',
    'Arama amacı çoğu zaman ilk cümlelerdedir (şikâyet, randevu, bilgi, rezervasyon).'
  ],
  scenes: [
    { t: 'Bir telefon görüşmesinin akışı',
      base: '<svg class="an-svg" viewBox="0 0 340 232" role="img" aria-label="Telefon görüşmesinin dört aşaması">' +
        '<rect x="6" y="4" width="328" height="46" rx="10" class="boxa rv a1"/><text x="16" y="22" font-size="12" class="mut rv a1">1. Açan (receiver)</text><text x="16" y="41" font-size="13" font-weight="700" class="rv a1">Hello, Star Travel. How can I help you?</text>' +
        '<rect x="6" y="60" width="328" height="46" rx="10" class="box rv a2"/><text x="16" y="78" font-size="12" class="mut rv a2">2. Arayan (caller)</text><text x="16" y="97" font-size="13" font-weight="700" class="rv a2">Hi, this is Mert. Can I speak to Mr. Kaya?</text>' +
        '<rect x="6" y="116" width="328" height="46" rx="10" class="box rv a3"/><text x="16" y="134" font-size="12" class="mut rv a3">3. Kontrol</text><text x="16" y="153" font-size="13" font-weight="700" class="rv a3">Who’s calling, please? Hold on.</text>' +
        '<rect x="6" y="172" width="328" height="56" rx="10" class="box rv a4"/><text x="16" y="190" font-size="12" class="mut rv a4">4. Bağlama ya da mesaj → kapanış</text><text x="16" y="208" font-size="12.5" font-weight="700" class="rv a4">I’ll put you through. / Can I take a message?</text><text x="16" y="223" font-size="12" class="rv a4">Thanks for calling. Bye!</text></svg>',
      steps: [
        { s: 'Dördüncü ünite [[On the Phone]], yani telefonda. Önce bir görüşmenin akışını ezberleyelim; sıralama sorularının yarısı buradan çözülür.' },
        { s: 'Telefonu ilk açan konuşur: [[Hello, Star Travel. How can I help you?]]', on: '.a1' },
        { s: 'Sonra arayan kendini tanıtır ve kimi istediğini söyler: [[Hi, this is Mert. Can I speak to Mr. Kaya?]]', on: '.a2' },
        { s: 'Açan kişi kontrol eder: [[Who’s calling, please? Hold on.]]', on: '.a3' },
        { s: 'Sonra ya bağlar ya da mesaj alır. En sonda da vedalaşılır: [[Thanks for calling. Bye!]]', on: '.a4' }
      ] },

    { t: 'Kendini tanıtmak: This is…',
      steps: [
        { s: 'Telefonda kendini tanıtırken [[I am Ada]] denmez. [[This is Ada]] ya da [[It’s Ada here]] denir.',
          h: '<div class="an-ex"><span class="an-l"><span class="an-bad-t">Hello, I am Ada.</span> ✗</span><span class="an-l"><span class="an-ok-t">Hello, this is Ada. / It’s Ada here.</span> ✓</span></div>' },
        { s: 'Birini istemek için: [[Can I speak to Burak, please?]] ya da [[Is Burak there?]]',
          h: '<div class="an-rule"><b>Can / Could / May I speak to</b> …? · <b>Is</b> Burak <b>there / in</b>? · <b>I’d like to talk to</b> …</div>' },
        { s: 'Şimdi bir tuzak. Arayan [[Can I speak to Ms. Polat?]] dedi. Açan kişi [[Speaking.]] diyor.',
          h: '<div class="an-trap"><b>Speaking.</b> = “Benim, buyurun.” Aranan kişi zaten telefonda! (“Yüksek sesle konuş” değil.)</div>' },
        { s: 'Bu, “benim, buyurun” demek. Yani aranan kişi telefonu açan kişinin ta kendisi.' }
      ] },

    { t: 'Müsait mi, değil mi?',
      base: '<table class="an-tbl"><tr><th>✅ Müsait</th><th>❌ Müsait değil</th></tr>' +
        '<tr class="rv y1"><td>Hold on, please.</td><td>I’m afraid he’s out.</td></tr>' +
        '<tr class="rv y2"><td>I’ll put you through.</td><td>She’s in a meeting.</td></tr>' +
        '<tr class="rv y3"><td>I’ll get him for you.</td><td>Can I take a message?</td></tr>' +
        '<tr class="rv y4"><td>He’s waiting for your call.</td><td>Would you like to leave a message?</td></tr></table>',
      steps: [
        { s: 'LGS’de en çok sorulan şey şu: aranan kişi müsait mi? Bunu açan kişinin cümlesinden anlarız.' },
        { s: '[[Hold on, please]] bekleyin demek. [[I’m afraid he’s out]] ise maalesef dışarıda.', on: '.y1' },
        { s: '[[I’ll put you through]], sizi bağlıyorum. Karşısında [[She’s in a meeting]], toplantıda.', on: '.y2' },
        { s: '[[I’ll get him for you]], onu çağırıyorum. Ama [[Can I take a message?]] diyorsa kişi orada değildir.', on: '.y3' },
        { s: 'Kısacası mesaj teklifi geliyorsa kişi müsait değil. Mesaj teklifi hep “orada değil” cümlesinden sonra gelir.', on: '.y4', mk: '.y4 td' }
      ] },

    { t: 'Mesaj bırakmak',
      steps: [
        { s: 'Kişi yoksa arayan mesaj bırakır: [[Can I leave a message?]]',
          h: '<div class="an-ex"><span class="an-l"><b>Arayan:</b> Can I leave a message? · Could you tell him that I called? · Could you ask her to call me back?</span><span class="an-l"><b>Açan:</b> Can I take a message? · Shall I ask him to ring you back? · I’ll give him the message.</span></div>' },
        { s: '[[Could you tell him that I called?]] Aradığımı söyler misiniz? [[Could you ask her to call me back?]] Beni geri aramasını söyler misiniz?' },
        { s: 'Açan kişi de der ki: [[Shall I ask him to ring you back?]] Ve en sonda söz verir: [[I’ll give him the message.]]' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p><b>Ece:</b> Hello, can I speak to Mr. Demir, please?<br><b>Receptionist:</b> ______<br><b>Ece:</b> Oh, OK. Could you tell him that Ece called?</p><p>Which one can <b>NOT</b> complete the dialogue?</p>',
        c: ['I’m afraid he’s in a meeting.', 'Sorry, he’s out at the moment.', 'Hold on, I’ll put you through.', 'He isn’t available right now.'], a: 'C',
        hint: 'Ece boşluktan sonra mesaj bırakıyor. Demek ki Bay Demir orada mı, değil mi?',
        why: 'Ece mesaj bıraktığına göre Bay Demir müsait değil. [[Hold on, I’ll put you through]] ise “sizi bağlıyorum” demek; kişi müsait olduğu için boşluğa uymaz.' },
      steps: [{ s: 'Boşluktan sonraki cümleye bak. Bu, LGS’nin tam kalıbı.' }] },

    { t: 'Telefon phrasal verb’leri',
      base: '<div class="an-grid"><div class="rv f1"><b>pick up</b>telefonu açmak</div><div class="rv f1"><b>hang up</b>kapatmak</div><div class="rv f1"><b>hold on / hang on</b>beklemek</div>' +
        '<div class="rv f2"><b>call back</b>geri aramak</div><div class="rv f2"><b>put through</b>bağlamak</div><div class="rv f2"><b>get through</b>ulaşabilmek</div>' +
        '<div class="rv f3"><b>speak up</b>yüksek sesle konuşmak</div><div class="rv f3"><b>break up</b>ses kesik gelmek</div><div class="rv f3"><b>cut off</b>görüşme kesilmek</div></div>',
      steps: [
        { s: 'Bu ünitenin en çok soru çıkan kelimeleri kalıp fiiller, yani [[phrasal verbs]]. [[pick up]] açmak, [[hang up]] kapatmak, [[hold on]] beklemek.', on: '.f1' },
        { s: '[[call back]] geri aramak, [[put through]] bağlamak, [[get through]] de telefonla ulaşabilmek.', on: '.f2' },
        { s: '[[speak up]] daha yüksek sesle konuşmak, [[break up]] sesin kesik kesik gelmesi, [[cut off]] görüşmenin aniden kesilmesi.', on: '.f3' },
        { s: 'Ve şarj biterse: [[My phone ran out of battery.]]' }
      ] },

    { t: 'Tuzak: hang up mı, hang on mu?',
      steps: [
        { s: 'Şimdi çok dikkat. Tek kelime fark, anlam tam ters.',
          h: '<div class="an-trap"><b>hang up</b> = telefonu KAPAT &nbsp;·&nbsp; <b>hang on / hold on</b> = BEKLE, kapatma</div>' },
        { s: '[[Don’t hang up, I’ll put you through.]] Kapatmayın, sizi bağlıyorum. Yani cümle beklemesini istiyor.' },
        { s: 'Bir de [[busy]] kelimesine dikkat. [[The line is busy]] hat meşgul demek. [[I’m busy]] ise işim var demek.',
          h: '<div class="an-tip"><b>The line is busy / engaged.</b> = Hat meşgul. &nbsp;·&nbsp; <b>I’m busy.</b> = İşim var.</div>' }
      ] },

    { t: 'Telefon sorunları',
      base: '<table class="an-tbl"><tr><th>Sorun</th><th>Ne deriz?</th></tr>' +
        '<tr class="rv s1"><td>Ortam gürültülü</td><td>Could you speak up, please?</td></tr>' +
        '<tr class="rv s2"><td>Sinyal zayıf</td><td>You’re breaking up. I’ll call you back.</td></tr>' +
        '<tr class="rv s3"><td>Şarj bitiyor</td><td>My battery is low. Let me call you later.</td></tr>' +
        '<tr class="rv s4"><td>Yanlış numara</td><td>Sorry, I think you’ve got the wrong number.</td></tr></table>',
      steps: [
        { s: 'Ortam gürültülüyse: [[Could you speak up, please?]]', on: '.s1' },
        { s: 'Ses kesik geliyorsa: [[You’re breaking up. I’ll call you back.]]', on: '.s2' },
        { s: 'Şarj azsa: [[My battery is low. Let me call you later.]]', on: '.s3' },
        { s: 'Yanlış numarayı arayan birine de: [[Sorry, I think you’ve got the wrong number.]]', on: '.s4' }
      ] },

    { t: 'Mesaj notunu okumak',
      base: '<svg class="an-svg" viewBox="0 0 340 222" role="img" aria-label="While You Were Out mesaj notu">' +
        '<rect x="4" y="4" width="216" height="214" rx="12" class="boxa"/>' +
        '<text x="112" y="26" font-size="13" font-weight="700" text-anchor="middle" class="acc">WHILE YOU WERE OUT</text>' +
        '<text x="14" y="50" font-size="12" class="rv w1">To: Ms. Er</text>' +
        '<text x="14" y="70" font-size="12" class="rv w1">From: Mr. Uslu</text>' +
        '<text x="14" y="90" font-size="12" class="rv w2">Time: Mon, 10:15 a.m.</text>' +
        '<text x="14" y="114" font-size="12" class="rv w3">☑ Please call back</text>' +
        '<text x="14" y="132" font-size="12" class="rv w3">☐ Will call again</text>' +
        '<text x="14" y="156" font-size="12" class="rv w4">Message: Your tickets</text>' +
        '<text x="14" y="172" font-size="12" class="rv w4">are ready.</text>' +
        '<text x="14" y="200" font-size="12" class="rv w5">Taken by: Can</text>' +
        '<text x="228" y="50" font-size="11.5" class="mut rv w1">← mesajın sahibi</text>' +
        '<text x="228" y="70" font-size="11.5" class="mut rv w1">← arayan kişi</text>' +
        '<text x="228" y="90" font-size="11.5" class="mut rv w2">← arama saati</text>' +
        '<text x="228" y="122" font-size="11.5" class="mut rv w3">← kim arayacak?</text>' +
        '<text x="228" y="164" font-size="11.5" class="mut rv w4">← asıl bilgi</text>' +
        '<text x="228" y="200" font-size="11.5" class="mut rv w5">← notu alan</text></svg>',
      steps: [
        { s: 'LGS bazen bir mesaj notu verir. Başlığı [[While You Were Out]], yani “sen yokken”.' },
        { s: 'Not Bayan Er için. Arayan Bay Uslu. Demek ki Bayan Er arayanla hiç konuşmadı.', on: '.w1' },
        { s: 'Saat de arama saatidir.', on: '.w2' },
        { s: 'En önemli yer burası. [[Please call back]] işaretliyse mesajın sahibi geri arayacak. [[Will call again]] işaretliyse arayan kişi yine arayacak.', on: '.w3', mk: '.w3' },
        { s: 'Asıl bilgi mesaj kısmında: biletler hazır. Soruların çoğu buradan gelir.', on: '.w4' },
        { s: 'En altta da notu alan kişi: Can. Can arayan değil, telefonu açan kişi.', on: '.w5' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p><b>WHILE YOU WERE OUT</b><br>To: Ms. Er · From: Mr. Uslu (Star Travel)<br>Time: Monday, 10:15 a.m.<br>☑ Please call back &nbsp; ☐ Will call again<br>Message: Your tickets are ready. Bring your passport.<br>Taken by: Can</p><p>Which of the following is <b>correct</b>?</p>',
        c: ['Ms. Er talked to Mr. Uslu on Monday.', 'Ms. Er should call Mr. Uslu back.', 'Mr. Uslu will call Ms. Er again.', 'Can called Star Travel at 10:15.'], a: 'B',
        hint: 'Başlık ne diyor: Bayan Er aramada orada mıydı? Hangi kutu işaretli?',
        why: '[[Please call back]] işaretli, yani Bayan Er, Bay Uslu’yu geri aramalı. Bayan Er arayanla konuşmadı, Bay Uslu tekrar aramayacak, Can da arayan değil, notu alan kişi.' },
      steps: [{ s: 'Notu dikkatle oku. İşaretli kutu çok önemli.' }] },

    { t: 'Rica kalıpları ve numara okuma',
      steps: [
        { s: 'İzin isterken [[Can I]] ya da daha resmî [[May I]]: [[May I speak to Doctor Aydın?]]',
          h: '<div class="an-rule"><b>Can / May I</b> …? izin · <b>Could / Would you</b> …? rica · <b>Shall I</b> …? teklif · <b>I’ll</b> … söz</div>' },
        { s: 'Karşıdakinden bir şey isterken [[Could you spell that, please?]] Teklif ederken [[Shall I take a message?]]' },
        { s: 'Çok kibar rica: [[Would you mind calling back later?]] Cevap [[No, not at all.]] Bu “sorun değil” demek, yani kabul!',
          h: '<div class="an-trap"><b>Would you mind</b> + V-ing …? → <b>No, not at all.</b> = Hiç sorun değil (KABUL)</div>' },
        { s: 'Numaralar tek tek okunur. Sıfır [[oh]] diye, yan yana iki aynı rakam [[double]] diye söylenir. Dinle: [[oh five three two, double four seven.]]',
          h: '<div class="an-big" style="font-size:22px">0532 447 → oh-five-three-two, double-four-seven</div>' }
      ] },

    { t: 'Müşteri hizmetleri ve arama amacı',
      steps: [
        { s: 'Kurum aramaları da çok soruluyor. Görevli önce karşılar: [[Thank you for calling Green Mobile. How may I help you?]]',
          h: '<div class="an-ex"><span class="an-l"><b>Bilgi:</b> Can I have your order number?</span><span class="an-l"><b>Anlayış:</b> I’m sorry to hear that.</span><span class="an-l"><b>Çözüm:</b> Our team will be there in an hour. · I’ll transfer you to our technical team.</span></div>' },
        { s: 'Sonra bilgi ister, anlayış gösterir ve çözüm sunar: [[I’m sorry to hear that. Our team will be there in an hour.]]' },
        { s: 'Görevlinin işi yardım etmek. Yardımı reddeden ya da konuyla ilgisiz cümle şıklarda çeldiricidir.' },
        { s: '“Neden aradı” sorusunda cevap genelde arayanın ilk cümlelerinde gizlidir: şikâyet, randevu, bilgi ya da rezervasyon.',
          h: '<div class="an-trap">Görüşme sırasında teşekkür etmek, adres vermek <b>arama amacı değildir</b>.</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p><b>Operator:</b> Thank you for calling Techno Shop. How can I help you?<br><b>Mr. Ak:</b> Hi. I bought a washing machine from your shop last week, but it makes a terrible noise and doesn’t work properly. Can you send someone to fix it?<br><b>Operator:</b> I’m sorry to hear that. Can I have your address, please?</p><p>Why is Mr. Ak calling?</p>',
        c: ['To order a new washing machine', 'To learn the address of the shop', 'To complain about a broken product', 'To thank the shop for fast delivery'], a: 'C',
        hint: 'Bay Ak’ın ilk cümlelerine bak. Makinede ne sorun var ve ne istiyor?',
        why: 'Bay Ak aldığı çamaşır makinesinin çalışmadığını söyleyip tamir istiyor; bu bir şikâyet. Adresi görevli istiyor, mağazanın adresi sorulmuyor.' },
      steps: [{ s: 'Arama amacını bul. İlk cümleler ipucu verir.' }] },

    { t: 'Akılda kalsın',
      steps: [
        { s: 'Toparlayalım. Önce açan konuşur. Arayan [[This is]] ile kendini tanıtır. [[Speaking]] “benim” demek.' },
        { s: '[[Hold on]] ve [[I’ll put you through]] kişi müsait demek. Mesaj teklifi geliyorsa müsait değil.' },
        { s: '[[Hang up]] kapat, [[hang on]] bekle. [[Please call back]] işaretliyse mesajın sahibi arar.' },
        { s: 'Ve [[Would you mind]] sorusuna [[Not at all]] kabul demek. Bu ünite de bitti, hatta kalma, devam!' }
      ] }
  ]
  };
  var en = function (t) { return typeof t === 'string' ? t.replace(/\[\[(.+?)\]\]/g, '<i lang="en">$1</i>') : t; };
  L.scenes.forEach(function (sc) {
    (sc.steps || []).forEach(function (st) { st.s = en(st.s); });
    if (sc.cp) { sc.cp.why = en(sc.cp.why); sc.cp.hint = en(sc.cp.hint); }
  });
  // son “Akılda kalsın” sahnesi: özet maddeleri adım adım belirir
  var last = L.scenes[L.scenes.length - 1];
  if (last && !last.base && !last.cp) {
    var ns = last.steps.length;
    last.base = '<div class="an-ex">' + L.ozet.map(function (o, i) { return '<span class="an-l rv oz' + Math.floor(i * ns / L.ozet.length) + '">' + o + '</span>'; }).join('') + '</div>';
    last.steps.forEach(function (st, k) { st.on = '.oz' + k; });
  }
  (window.LGS_AN = window.LGS_AN || {})['ing-phone'] = L;
})();
