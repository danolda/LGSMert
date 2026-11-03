/* Adım Adım Anlatım · İngilizce · 5. Ünite The Internet (biçim: tools/ANLATIM.md)
   Altyazıdaki [[...]] İngilizce bölümdür → <i lang="en">…</i>; tools/anlatim_ses.py İngilizce sesle okur. */
(function () {
  var L = {
  title: 'The Internet: Kelimeler, Anket Okuma ve Güvenlik',
  desc: 'İnternet sözcükleri, download ↔ upload ve addict ↔ addicted tuzakları, “What do you use it for?”, How often / How long, anket grafiği okuma, şifre kuralları, must / mustn’t / don’t have to ve görüş bildirme.',
  ozet: [
    '<b>download</b> = internetten cihaza indir · <b>upload</b> = cihazdan internete yükle. log in / log out · sign up (kaydol) · post · share · block · report.',
    '<b>an Internet addict</b> (isim) · <b>addicted to</b> the Internet (sıfat). “feels worried when offline / checks messages all the time” = bağımlı.',
    'Amaç: I use the Internet <b>to</b> + V1 / <b>for</b> + V-ing / isim. Soru: What do you use the Internet <b>for</b>?',
    'How often → once / twice a week, every day · How long → for two hours, about 30 minutes · What … for? → to…, for…',
    'Anket: all (100%) · most / the majority (yarıdan fazla) · half (50%) · a quarter (25%) · a few · none. Kişi sayısını önce yüzdeye çevir.',
    'Güçlü şifre: en az 8–10 karakter, büyük–küçük harf, rakam, simge; ad, doğum günü, evcil hayvan adı yok; herkese farklı ve gizli.',
    'must (zorunlu) · <b>mustn’t</b> (yasak) · should (tavsiye) · <b>don’t have to</b> (gerekli değil, yasak değil).',
    '<b>I see your point, but…</b> = anladım ama katılmıyorum.'
  ],
  scenes: [
    { t: 'İnternet ünitesinde neler var?',
      base: '<div class="an-grid"><div class="rv g1"><b>Kelimeler</b>download, upload, log in…</div><div class="rv g2"><b>Anket / grafik</b>most, half, a quarter</div><div class="rv g3"><b>Güvenlik</b>strong password, mustn’t</div></div>',
      steps: [
        { s: 'Beşinci ünite [[The Internet]]. Kelimeler burada çok önemli, çünkü sorular genelde tanım üzerinden geliyor.', on: '.g1' },
        { s: 'LGS’de neredeyse her yıl bir anket grafiği ya da profil kartı çıkıyor. Sayıları kelimelere çevirmeyi öğreneceğiz.', on: '.g2' },
        { s: 'Bir de internet güvenliği ve şifre kuralları var. Hadi başlayalım.', on: '.g3' }
      ] },

    { t: 'Temel internet sözcükleri',
      base: '<table class="an-tbl"><tr><th>Eylem</th><th>Anlamı</th></tr>' +
        '<tr class="rv k1"><td>log in · log out</td><td>giriş yapmak · çıkış yapmak</td></tr>' +
        '<tr class="rv k2"><td>sign up / create an account</td><td>kaydolmak, hesap açmak</td></tr>' +
        '<tr class="rv k3"><td>search · look up</td><td>aramak, bakmak</td></tr>' +
        '<tr class="rv k4"><td>post · share · comment · like</td><td>paylaşmak · yorum · beğeni</td></tr>' +
        '<tr class="rv k5"><td>block · report · delete</td><td>engellemek · şikâyet etmek · silmek</td></tr></table>',
      steps: [
        { s: 'Hesabına girmek [[log in]], çıkmak [[log out]].', on: '.k1' },
        { s: 'Yeni hesap açmak [[sign up]], ya da [[create an account]].', on: '.k2' },
        { s: 'Bir şey aramak [[search]] ya da [[look up]]. Arama motoru da [[search engine]].', on: '.k3' },
        { s: 'Sosyal medyada [[post]] paylaşmak, [[comment]] yorum, [[like]] beğeni, [[follower]] takipçi.', on: '.k4' },
        { s: 'Kötü biriyle karşılaşırsan [[block]] engelle, [[report]] şikâyet et.', on: '.k5' }
      ] },

    { t: 'Tuzak: download mı, upload mı?',
      base: '<svg class="an-svg" viewBox="0 0 340 150" role="img" aria-label="Download internetten cihaza, upload cihazdan internete">' +
        '<rect x="10" y="40" width="96" height="66" rx="12" class="boxa"/><text x="58" y="80" font-size="15" font-weight="700" text-anchor="middle">☁ Internet</text>' +
        '<rect x="234" y="40" width="96" height="66" rx="12" class="box"/><text x="282" y="80" font-size="15" font-weight="700" text-anchor="middle">💻 cihaz</text>' +
        '<path class="st dr u1" d="M112 56 L228 56"/><path class="st dr u1" d="M218 48 L228 56 L218 64"/><text x="170" y="44" font-size="14" font-weight="700" text-anchor="middle" class="acc rv u1">download</text>' +
        '<path class="st2 dr u2" d="M228 92 L112 92"/><path class="st2 dr u2" d="M122 84 L112 92 L122 100"/><text x="170" y="122" font-size="14" font-weight="700" text-anchor="middle" class="rv u2">upload</text></svg>',
      steps: [
        { s: 'Şimdi burada dikkat et. İnternetten kendi cihazına bir şey alıyorsan bu [[download]], yani indirmek.', on: '.u1' },
        { s: 'Kendi cihazından internete gönderiyorsan bu [[upload]], yani yüklemek.', on: '.u2' },
        { s: 'Örnek: [[I uploaded my photos to my blog. My cousin downloaded them.]] Ben yükledim, kuzenim indirdi.' },
        { s: 'Soruda ikisi birlikte geçerse yönü kontrol et: nereden, nereye?' }
      ] },

    { t: 'İnternet sözcüklerini eşleştir',
      steps: [{ s: 'Altı internet sözcüğünü Türkçe anlamlarıyla eşleştir. İndirmek ile yüklemenin yönüne dikkat!' }],
      ia: { tip: 'eslestir', q: '<p>Her sözcüğü anlamıyla eşleştir.</p>', solBaslik: 'Sözcük', sagBaslik: 'Anlam',
        sol: ['log in', 'sign up', 'look up', 'upload', 'download', 'block'],
        sag: ['hesaba girmek', 'yeni hesap açmak', 'bir şey aramak', 'internete yüklemek', 'internetten indirmek', 'engellemek'],
        hint: 'Yönü düşün: [[upload]] senin cihazından internete, [[download]] internetten senin cihazına. [[Sign up]] ilk kez kayıt olmaktır.',
        why: '[[Log in]] hesaba gir, [[sign up]] yeni hesap aç, [[look up]] ara, [[upload]] yükle, [[download]] indir, [[block]] engelle.' } },

    { t: 'Tuzak: addict mi, addicted mı?',
      steps: [
        { s: 'Bağımlılık kelimesinin iki hâli var. [[She is a real Internet addict.]] Burada [[addict]] bir isim: internet bağımlısı biri.',
          h: '<div class="an-rule"><b>an Internet addict</b> (isim) &nbsp;·&nbsp; <b>addicted to</b> the Internet (sıfat)</div>' },
        { s: '[[She is addicted to the Internet.]] Burada [[addicted]] bir sıfat, arkasından [[to]] gelir.' },
        { s: '2018 LGS’de tam bu soruldu. Birkaç saat çevrim dışı kalınca endişelenen kişi için cevap [[a real Internet addict]] idi.',
          h: '<div class="an-trap">feels worried when she is <b>offline</b> · can’t live without her phone · checks messages <b>all the time</b> → <b>addicted</b></div>' },
        { s: 'Yani metinde [[can’t live without her phone]] ya da [[checks messages all the time]] görürsen, bağımlılık anlatılıyor.' }
      ] },

    { t: 'İnterneti ne için kullanırsın?',
      steps: [
        { s: 'Amacı söylerken iki yol var. Birincisi [[to]] ve yalın fiil: [[I use the Internet to do research.]]',
          h: '<div class="an-ex"><span class="an-l">I use the Internet <b>to</b> <span class="an-w">do</span> research.</span><span class="an-l">I go online <b>for</b> <span class="an-w">shopping</span> / <b>for</b> my homework.</span></div>' },
        { s: 'İkincisi [[for]] ve ing takılı fiil ya da isim: [[I go online for shopping.]]' },
        { s: 'Amacı soran soru da şu: [[What do you use the Internet for?]] Cevap: [[To keep in touch with my relatives abroad.]]' }
      ] },

    { t: 'addict, addicted, to, for',
      steps: [{ s: 'Dört boşluğu doldur. Kelime isim mi olmalı, sıfat mı? Amaç bildirirken [[to]] mu gelir, [[for]] mu?' }],
      ia: { tip: 'bosluk', q: '<p>Cümleleri tamamla.</p>',
        metin: 'She can’t live without her phone. She is a real Internet [_].<br>He is [_] to online games.<br>I use the Internet [_] do research.<br>I go online [_] shopping.',
        secenek: ['addict', 'addicted', 'addiction', 'to', 'for', 'with', 'by'], cevap: ['addict', 'addicted', 'to', 'for'],
        hint: '“[[A real Internet]]” ifadesinden sonra bir kişi gelir. [[Is]] ile [[to]] arasına ise bir sıfat gelir. Yalın fiilden önce hangisi, isimden önce hangisi geliyordu?',
        why: '[[A real Internet addict]] bir kişi, yani isim. [[Addicted to]] ise sıfat. Yalın fiilden önce [[to]] gelir; [[shopping]] gibi bir isimden önce ise [[for]] gelir.' } },

    { t: 'How often, How long, What for?',
      base: '<table class="an-tbl"><tr><th>Soru</th><th>Cevapta ne var?</th></tr>' +
        '<tr class="rv h1"><td><b>How often</b> do you go online?</td><td>every day · twice a week · rarely</td></tr>' +
        '<tr class="rv h2"><td><b>How long</b> do you spend online?</td><td>for two hours · about 30 minutes</td></tr>' +
        '<tr class="rv h3"><td>What do you use it <b>for</b>?</td><td>to chat · for games</td></tr></table>',
      steps: [
        { s: 'Bu üç soru çok karıştırılır. Cevaba bakarak soruyu bulmayı öğrenelim.' },
        { s: 'Cevapta [[every day]], [[twice a week]] gibi bir sıklık varsa soru [[How often]].', on: '.h1' },
        { s: 'Cevapta [[for two hours]], [[about 30 minutes]] gibi bir süre varsa soru [[How long]].', on: '.h2' },
        { s: 'Cevapta bir amaç varsa, yani [[to]] ya da [[for]] ile başlıyorsa, soru [[What for]].', on: '.h3' }
      ] },

    { t: 'Cevaba göre soruyu bul',
      steps: [{ s: 'Sekiz cevabı sorusuna göre üç kutuya ayır. Dikkat: [[for]] ile başlayan her cevap aynı soruya gitmiyor!' }],
      ia: { tip: 'grup', q: '<p>Her cevabı sorusunun kutusuna yerleştir.</p>', gruplar: ['How often?', 'How long?', 'What for?'],
        ogeler: [{ m: 'Every day.', g: 0 }, { m: 'Twice a week.', g: 0 }, { m: 'Once a month.', g: 0 },
          { m: 'For two hours.', g: 1 }, { m: 'About 30 minutes.', g: 1 },
          { m: 'To do my homework.', g: 2 }, { m: 'For shopping.', g: 2 }, { m: 'To chat with friends.', g: 2 }],
        hint: '[[For]] ile başlayan iki cevap var. Birinin arkasında bir süre, ötekinin arkasında bir amaç var. Hangisi hangisi?',
        why: 'Sıklık [[How often]]: [[every day]], [[twice a week]], [[once a month]]. Süre [[How long]]: [[for two hours]], [[about 30 minutes]]. Amaç [[What for]]: [[to]] ya da [[for shopping]].' } },

    { t: 'Ara soru', cp: {
        q: '<p><b>Reporter:</b> ______?<br><b>Lena:</b> To keep in touch with my cousins in Germany. We video chat every weekend.</p><p>Which question completes the dialogue?</p>',
        c: ['How often do you go online', 'How long do you spend online', 'What do you use the Internet for', 'When do you go online'], a: 'C',
        hint: 'Lena’nın cevabı neyle başlıyor? Bir sıklık mı, bir süre mi, yoksa bir amaç mı?',
        why: 'Cevap [[To keep in touch]] ile başlıyor; bu bir amaç. Amacı soran soru [[What do you use the Internet for?]] Sıklık sonradan ek bilgi olarak geliyor.' },
      steps: [{ s: 'Cevabın ilk kelimelerine dikkat.' }] },

    { t: 'Anket ve grafik okuma',
      base: '<svg class="an-svg" viewBox="0 0 340 176" role="img" aria-label="Yüzde ifadeleri">' +
        '<rect x="110" y="8" width="220" height="18" rx="4" class="boxa rv m1"/><text x="6" y="22" font-size="13" font-weight="700" class="rv m1">all / everyone</text><text x="300" y="22" font-size="11" class="rv m1">100%</text>' +
        '<rect x="110" y="36" width="160" height="18" rx="4" class="box rv m2"/><text x="6" y="50" font-size="13" font-weight="700" class="rv m2">most</text><text x="276" y="50" font-size="11" class="mut rv m2">&gt; 50%</text>' +
        '<rect x="110" y="64" width="110" height="18" rx="4" class="box rv m3"/><text x="6" y="78" font-size="13" font-weight="700" class="rv m3">half</text><text x="226" y="78" font-size="11" class="mut rv m3">50%</text>' +
        '<rect x="110" y="92" width="55" height="18" rx="4" class="box rv m4"/><text x="6" y="106" font-size="13" font-weight="700" class="rv m4">a quarter</text><text x="171" y="106" font-size="11" class="mut rv m4">25%</text>' +
        '<rect x="110" y="120" width="18" height="18" rx="4" class="box rv m5"/><text x="6" y="134" font-size="13" font-weight="700" class="rv m5">a few</text>' +
        '<text x="6" y="162" font-size="13" font-weight="700" class="rv m5">none / nobody</text><text x="114" y="162" font-size="11" class="mut rv m5">0%</text></svg>',
      steps: [
        { s: 'Şimdi anket grafiklerine geldik. Sayıları şu kelimelere çevirmen gerekiyor. Herkes [[all]] ya da [[everyone]].', on: '.m1' },
        { s: '[[Most]] ya da [[the majority]]: yarıdan fazlası.', on: '.m2' },
        { s: '[[Half]], tam yarısı. [[A quarter]], dörtte biri.', on: '.m3,.m4' },
        { s: '[[A few]], birkaç kişi. [[None]] ya da [[nobody]], hiç kimse.', on: '.m5' },
        { s: 'Karşılaştırma için de [[more than]], [[fewer than]], [[as popular as]] yani eşit, ve [[the most popular]] yani en popüler.' }
      ] },

    { t: 'Tuzak: yüzde mi, kişi sayısı mı?',
      steps: [
        { s: 'Şimdi çok dikkat et, LGS’de en sık düşülen tuzak bu. Grafikte kişi sayısı verildiyse önce toplamı bul.',
          h: '<div class="an-ex"><span class="an-l">Toplam 200 öğrenci, 60’ı oyun için kullanıyor.</span><span class="an-l">60 ÷ 200 = %30 → <span class="an-bad-t">most</span> değil! → <b>less than half</b> ✓</span></div>' },
        { s: 'Mesela iki yüz kişiden altmışı yüzde otuz eder. Bu [[most]] değil, yarıdan az.' },
        { s: 'Bir de soru kökündeki [[NOT]], [[FALSE]] gibi kelimelerin altını çiz. Her şıkkı grafikle tek tek karşılaştır.',
          h: '<div class="an-trap">Kökte <b>NOT correct / FALSE</b> varsa doğru üç şıkkı ele, kalan cevaptır.</div>' }
      ] },

    { t: 'Kişi sayısından yüzdeye',
      steps: [{ s: 'Grafik sorularındaki en önemli adım: kişi sayısını yüzdeye çevirmek. Hesapla ve kaydırıcıyla işaretle.' }],
      ia: { tip: 'kaydir', q: '<p><b>80 students</b> answered a survey. <b>20 of them</b> mostly use the Internet for homework.</p><p>What percentage of the students is this?</p>',
        min: 0, max: 100, adim: 5, cevap: 25, tol: 0, birim: '%', etiket: [0, 25, 50, 75, 100],
        hint: 'Önce toplamı bul: seksen öğrenci. Yirmi, seksenin kaçta kaçı? Sonra bunu yüzdeye çevir.',
        why: 'Yirmi bölü seksen, dörtte bir eder; yani yüzde yirmi beş. İngilizcesi [[a quarter]]. Bu [[most]] değil, yarıdan çok az.' } },

    { t: 'Ara soru', cp: {
        q: '<p>40 students answered the question “What do you mostly use the Internet for?”</p>' +
           '<svg class="an-svg" viewBox="0 0 320 132" role="img" aria-label="Anket: oyun 16, sosyal medya 10, ödev 10, alışveriş 4">' +
           '<rect x="96" y="6" width="192" height="20" rx="4" class="boxa"/><text x="4" y="21" font-size="13">games</text><text x="294" y="21" font-size="13" font-weight="700">16</text>' +
           '<rect x="96" y="38" width="120" height="20" rx="4" class="box"/><text x="4" y="53" font-size="13">social media</text><text x="222" y="53" font-size="13" font-weight="700">10</text>' +
           '<rect x="96" y="70" width="120" height="20" rx="4" class="box"/><text x="4" y="85" font-size="13">homework</text><text x="222" y="85" font-size="13" font-weight="700">10</text>' +
           '<rect x="96" y="102" width="48" height="20" rx="4" class="box"/><text x="4" y="117" font-size="13">shopping</text><text x="150" y="117" font-size="13" font-weight="700">4</text></svg>' +
           '<p>Which of the following is <b>NOT</b> correct?</p>',
        c: ['Less than half of the students mostly use it for games.', 'A quarter of the students mostly use it for homework.', 'Social media is as popular as homework.', 'Games are twice as popular as social media.'], a: 'D',
        hint: 'Toplam kırk. Yarısı yirmi, dörtte biri on. On altı, onun iki katı mı?',
        why: 'On altı, yirmiden az; A doğru. On, kırkın dörtte biri; B doğru. Sosyal medya ile ödev onar; C doğru. Ama on altı, onun iki katı değil; iki katı yirmi olurdu. Cevap D.' },
      steps: [{ s: 'Hesap makinesi gerekmez, sadece dikkat. Her şıkkı grafikle kontrol et.' }] },

    { t: 'İnternet güvenliği ve güçlü şifre',
      base: '<table class="an-tbl"><tr><th>✅ Strong password</th><th>❌ Weak password</th></tr>' +
        '<tr class="rv p1"><td>at least 8–10 characters</td><td>short: 123456</td></tr>' +
        '<tr class="rv p2"><td>capital + small letters, numbers, symbols (! # @)</td><td>your name, pet’s name, birthday</td></tr>' +
        '<tr class="rv p3"><td>secret, different for each account</td><td>shared with friends</td></tr></table>',
      steps: [
        { s: 'Güçlü bir şifre en az sekiz, on karakterdir. Bir iki üç dört beş altı gibi kısa şifreler zayıftır.', on: '.p1' },
        { s: 'Büyük ve küçük harf, rakam ve simge karışık olmalı. Adın, evcil hayvanının adı ya da doğum günün içinde olmamalı.', on: '.p2' },
        { s: 'Ve gizli olmalı, her hesapta farklı olmalı.', on: '.p3' },
        { s: '2023 LGS’de şifre kuralı soruldu. Kurallardaki sayıları harf harf say. Mesela “[[Maxi]]” kelimesinin içinde “[[Max]]” adı gizli olabilir!',
          h: '<div class="an-trap">Kural: “Don’t use your pet’s name (Max).” → <b>Maxi#2012</b> ✗ çünkü içinde <b>Max</b> var.</div>' }
      ] },

    { t: 'Kurala uymayan şifreler',
      steps: [{ s: 'Şifre kurallarını oku. Kurallardan en az birine uymayan şifreleri ele. Harfleri ve rakamları tek tek say!' }],
      ia: { tip: 'eleme', q: '<p><b>Rules:</b> at least <b>10 characters</b> · at least one <b>number</b> · at least one <b>symbol</b> (! # @) · don’t use your pet’s name (<b>Max</b>).</p><p>Kurallara <b>uymayan</b> şifreleri ele.</p>',
        ogeler: ['Maxi#2024ab', 'Sun#flower7', 'sunflower2024', 'Tree!7', 'Blue@Sky99', 'Rock#Star!'], ele: [0, 2, 3, 5],
        hint: 'Her şifre için dört soru sor: on karakter var mı, rakam var mı, simge var mı, içinde [[Max]] geçiyor mu?',
        why: '[[Maxi]] ile başlayan şifrede [[Max]] adı gizli. [[Sunflower]] şifresinde simge yok, [[Tree]] şifresi çok kısa, [[Rock Star]] şifresinde rakam yok. Geriye iki güçlü şifre kalıyor.' } },

    { t: 'must, mustn’t, should, don’t have to',
      steps: [
        { s: 'Kural cümlelerinde dört yapı var. [[You must log out]]: zorunlu.',
          h: '<table class="an-tbl"><tr class="rv r1"><td><b>must</b></td><td>zorunlu</td><td>You must log out.</td></tr>' +
             '<tr class="rv r2"><td><b>mustn’t</b></td><td>yasak</td><td>You mustn’t share your password.</td></tr>' +
             '<tr class="rv r3"><td><b>should</b></td><td>tavsiye</td><td>You should tell an adult.</td></tr>' +
             '<tr class="rv r4"><td><b>don’t have to</b></td><td>gerekli değil</td><td>You don’t have to reply.</td></tr></table>', on: '.r1' },
        { s: '[[You mustn’t share your password]]: yasak.', on: '.r2' },
        { s: '[[You should tell an adult]]: tavsiye.', on: '.r3' },
        { s: 'Ve tuzak olan: [[You don’t have to reply]]. Bu “cevap verme” demek değil, “cevap vermek zorunda değilsin” demek.', on: '.r4', mk: '.r4 td' }
      ] },

    { t: 'Zorunlu mu, yasak mı, gerek yok mu?',
      steps: [{ s: 'Her açıklama doğru mu, yanlış mı? Özellikle [[don’t have to]] ile [[mustn’t]] farkına dikkat et.' }],
      ia: { tip: 'dogruyanlis', q: '<p>Her ifade için karar ver.</p>', ifadeler: [
          { m: '“You don’t have to reply.” = Cevap vermen yasak.', d: false, a: 'Gerek yok demek; istersen cevap verebilirsin.' },
          { m: '“You mustn’t share your password.” bir yasaktır.', d: true, a: 'mustn’t = yasak.' },
          { m: '“You should tell an adult.” bir tavsiyedir.', d: true, a: 'should = tavsiye.' },
          { m: '“You must log out.” = Çıkış yapman gerekmez.', d: false, a: 'must = zorunlu.' }],
        hint: '[[Must]] zorunlu, [[mustn’t]] yasak, [[should]] tavsiye. Peki [[don’t have to]] yasak mı, yoksa gerekli değil mi?',
        why: '[[Don’t have to]] “zorunda değilsin” demek, yasak değil. [[Mustn’t]] yasak, [[should]] tavsiye, [[must]] ise zorunluluk bildirir.' } },

    { t: 'Görüş bildirmek',
      steps: [
        { s: 'Görüş bildirmek için: [[I think]], [[In my opinion]], [[As far as I’m concerned]].',
          h: '<table class="an-tbl"><tr><th>Görüş</th><th>Katılma</th><th>Katılmama</th></tr><tr><td>I think… · In my opinion…</td><td>I agree. · Exactly! · Same here!</td><td>I don’t agree. · I’m not sure about that.</td></tr></table>' },
        { s: 'Katılırken [[I agree with you]], [[Exactly!]] Katılmazken [[I don’t agree]], [[I’m not sure about that]].' },
        { s: 'Ve burada çok dikkat: [[I see your point, but]] … Anladığını söylüyor ama [[but]] ile itiraz ediyor. Yani katılmıyor.',
          h: '<div class="an-trap"><b>I see your point, but…</b> = “Haklısın gibi” görünür ama <b>katılmıyor</b>.</div>' },
        { s: 'İnternetin artıları: hızlı araştırma, uzaktaki arkadaşlarla iletişim. Eksileri: bağımlılık, göz yorgunluğu, sahte haber, siber zorbalık.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p><b>Password rules:</b> at least 8 characters · at least one number · at least one symbol (!, #, @) · don’t use your name.</p><p>Mert wants to create a new password. Which one can he use?</p>',
        c: ['mert2024!', 'Sky#7', 'Blue#Sky7', 'BlueSky77'], a: 'C',
        hint: 'Her şifrede dört kuralı tek tek kontrol et: uzunluk, rakam, simge ve isim.',
        why: 'A’da Mert’in adı var. B sadece beş karakter. D’de simge yok. [[Blue#Sky7]] dokuz karakter; rakam da, simge de var, isim yok.' },
      steps: [{ s: 'Kuralları harf harf say.' }] },

    { t: 'Akılda kalsın',
      steps: [
        { s: 'Toparlayalım. [[Download]] internetten indir, [[upload]] internete yükle. [[An addict]] isim, [[addicted to]] sıfat.' },
        { s: 'Sıklık [[How often]], süre [[How long]], amaç [[What for]].' },
        { s: 'Grafikte kişi sayısını önce yüzdeye çevir. [[Most]] yarıdan fazlası demek.' },
        { s: '[[Mustn’t]] yasak, [[don’t have to]] gerekli değil. Ve [[I see your point, but]] katılmamaktır. Bir ünite daha bitti, süpersin!' }
      ] }
  ]
  };
  var en = function (t) { return typeof t === 'string' ? t.replace(/\[\[(.+?)\]\]/g, '<i lang="en">$1</i>') : t; };
  L.scenes.forEach(function (sc) {
    (sc.steps || []).forEach(function (st) { st.s = en(st.s); });
    if (sc.cp) { sc.cp.why = en(sc.cp.why); sc.cp.hint = en(sc.cp.hint); }
    if (sc.ia) { sc.ia.q = en(sc.ia.q); sc.ia.why = en(sc.ia.why); sc.ia.hint = en(sc.ia.hint); }
  });
  // son “Akılda kalsın” sahnesi: özet maddeleri adım adım belirir
  var last = L.scenes[L.scenes.length - 1];
  if (last && !last.base && !last.cp) {
    var ns = last.steps.length;
    last.base = '<div class="an-ex">' + L.ozet.map(function (o, i) { return '<span class="an-l rv oz' + Math.floor(i * ns / L.ozet.length) + '">' + o + '</span>'; }).join('') + '</div>';
    last.steps.forEach(function (st, k) { st.on = '.oz' + k; });
  }
  (window.LGS_AN = window.LGS_AN || {})['ing-internet'] = L;
})();
