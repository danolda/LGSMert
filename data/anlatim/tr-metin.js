/* Adım Adım Anlatım · Türkçe · Metin Türleri (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['tr-metin'] = {
  title: 'Metin Türleri',
  desc: 'Öyküleyici ve bilgilendirici metinler, hikâyenin dört unsuru ve anlatıcı, anı mı gezi yazısı mı, deneme mi makale mi: LGS’nin en çok karıştırdığı türler ve çözüm yolu.',
  ozet: [
    'İki büyük aile: olay anlatan öyküleyici metinler ve düşünce ya da bilgi aktaran bilgilendirici metinler. Şiir ayrı bir türdür.',
    'Hikâyenin dört unsuru: olay, kişi, yer, zaman. Zaman ve yer çoğu zaman sezdirilir; her seçeneği “Ne oldu? Kim? Nerede? Ne zaman?” diye tek tek tara. Bol ayrıntı her unsurun var olduğunu göstermez.',
    'Anlatıcıyı, konuşmalar dışındaki anlatma cümlelerinin fiil çekiminden bul: “-dım, -dık” 1. kişili; “-dı, -dılar” 3. kişili. Anı ve otobiyografi 1. kişili, biyografi 3. kişilidir.',
    'Masal olağanüstü, zamanı ve yeri belirsiz; fabl hayvanlarla ders verir; efsane bir yerin ya da adın ortaya çıkışını olağanüstü olaya bağlar; destan bir milletin büyük olaylarını anlatır.',
    'Anı: yazarın yaşadığı, üzerinden zaman geçmiş olay. Günlük: tarih atılarak, sıcağı sıcağına. Bir yer anlatılıyor diye metin gezi yazısı olmaz.',
    'Makale kanıt ve veriyle kanıtlar; deneme kanıtlamadan, samimi ve öznel konuşur; söyleşi okura doğrudan seslenir; fıkra güncel bir olayı yorumlar.',
    'Geçmişten söz etmek metni anı yapmaz; “sebebi” demek metni bilimsel yapmaz; kendi kendine soru sormak metni söyleşi yapmaz. Çıkmışlarda en çok cevap olan tür denemedir.'
  ],
  scenes: [
    { t: 'Metin türleri haritası',
      base: '<svg class="an-svg" viewBox="0 0 340 190" role="img" aria-label="Metinler öyküleyici, bilgilendirici ve şiir olarak üçe ayrılır">' +
        '<rect x="115" y="6" width="110" height="38" rx="10" class="boxa rv h1"/><text x="170" y="31" font-size="16" text-anchor="middle" font-weight="700" class="rv h1">METİN</text>' +
        '<path class="st dr h2" d="M170 44 V58 H60 V74"/><path class="st dr h2" d="M170 58 H280 V74"/><path class="st2 dr h4" d="M170 58 V140"/>' +
        '<rect x="4" y="74" width="112" height="54" rx="9" class="box rv h2"/><text x="60" y="97" font-size="13" text-anchor="middle" font-weight="700" class="rv h2">Öyküleyici</text><text x="60" y="116" font-size="11" text-anchor="middle" class="mut rv h2">olay anlatır</text>' +
        '<rect x="224" y="74" width="112" height="54" rx="9" class="box rv h3"/><text x="280" y="97" font-size="13" text-anchor="middle" font-weight="700" class="rv h3">Bilgilendirici</text><text x="280" y="116" font-size="11" text-anchor="middle" class="mut rv h3">düşünce, bilgi</text>' +
        '<text x="60" y="150" font-size="11" text-anchor="middle" class="acc rv h2">hikâye, masal, anı…</text>' +
        '<text x="280" y="150" font-size="11" text-anchor="middle" class="acc rv h3">deneme, makale…</text>' +
        '<rect x="125" y="140" width="90" height="40" rx="9" class="box rv h4"/><text x="170" y="165" font-size="13" text-anchor="middle" font-weight="700" class="rv h4">Şiir</text></svg>',
      steps: [
        { s: 'Merhaba! Bu derste metin türlerini birbirinden ayırmayı öğreneceğiz. Önce büyük haritaya bakalım.', on: '.h1' },
        { s: 'Birinci aile öyküleyici metinler. Bunlar bir olay anlatır: hikâye, masal, anı gibi.', on: '.h2' },
        { s: 'İkinci aile bilgilendirici metinler. Bunlar bir düşünce ya da bilgi aktarır: deneme, makale gibi.', on: '.h3' },
        { s: 'Şiir ise duygu ve hayallerin dizelerle anlatıldığı ayrı bir türdür.', on: '.h4' },
        { s: 'İlk sorun hep şu olacak: Bu metinde bir olay mı var, yoksa bir düşünce mi?' }
      ] },

    { t: 'Hikâyenin dört unsuru',
      base: '<div class="an-grid" style="grid-template-columns:repeat(2,1fr)"><div class="rv u1"><b>Olay</b>Ne oldu?</div><div class="rv u2"><b>Kişi</b>Kim yaşadı?</div><div class="rv u3"><b>Yer</b>Nerede?</div><div class="rv u4"><b>Zaman</b>Ne zaman?</div></div>',
      steps: [
        { s: 'Hikâye, yaşanmış ya da yaşanabilir olayları anlatan kısa bir yazıdır. Roman da aynı unsurlara sahiptir ama daha uzundur.' },
        { s: 'Her hikâyede dört temel unsur bulunur. Birincisi olay: Ne oldu?', on: '.u1' },
        { s: 'İkincisi kişi: Olayı kim yaşadı?', on: '.u2' },
        { s: 'Üçüncüsü yer: Olay nerede geçti?', on: '.u3' },
        { s: 'Dördüncüsü de zaman: Ne zaman oldu? Bu dört soru, hikâye unsuru sorularının anahtarı.', on: '.u4' }
      ] },

    { t: 'Tuzak: sezdirilen zaman ve yer',
      steps: [
        { s: 'Burada çok dikkat et, son yıllarda LGS sınavında tam olarak bu soruldu.',
          h: '<div class="an-trap">Zaman ve yer çoğu zaman <b>açıkça söylenmez, sezdirilir</b>. Ayrıntı bolluğu, her unsurun var olduğunu göstermez.</div>' },
        { s: '“Gün doğumunu seyrederken” sözü bir zaman bildirir, ama ortada saat ya da tarih yok. Zaman sezdirilmiş.',
          h: '<div class="an-ex"><span class="an-l">“<span class="an-w">Gün doğumunu seyrederken</span> içimi bir huzur kapladı.” → <b>zaman var</b> (sezdirilmiş)</span></div>' },
        { s: 'Tersi de olur. Bir yıl yalılar, kaldırım taşları, daldan düşen sincap gibi çok zengin betimlemeli bir seçenekte zaman hiç yoktu.',
          h: '<div class="an-ex"><span class="an-l">“Boğaz’ın simgesi yalılar, kaldırım taşları, daldan düşen sincap…” → yer var, kişi var, ama <b>ne zaman?</b> <span class="an-bad-t">yok</span></span></div>' },
        { s: 'Bol yer adı ve ayrıntı öğrenciyi “her şey var” sanmaya itti. O yüzden her seçeneği dört soruyla tek tek tara.',
          h: '<div class="an-rule">Her seçenekte sor: <b>Ne oldu? Kim? Nerede? Ne zaman?</b></div>' }
      ] },

    { t: 'Anlatıcı: ben mi, o mu?',
      steps: [
        { s: 'Hikâyeyi kim anlatıyor? Bunu anlatıcı belirler. İki tür anlatıcı var.',
          h: '<table class="an-tbl"><tr><th>1. kişili (ben)</th><th>3. kişili (o)</th></tr>' +
             '<tr><td>Kapıyı açınca herkesin bana baktığını <span class="an-ek">gördüm</span>.</td><td>Selim sınıfa girince herkesin baktığını fark <span class="an-ek">etti</span>, yüzü kızardı.</td></tr>' +
             '<tr><td>olayın içinde; yalnız kendi gördüğünü bilir</td><td>olayın dışında; kişilerin iç dünyasını da anlatabilir</td></tr></table>' },
        { s: '1. kişili anlatıcı olayın içindedir. Fiiller “gördüm, yaptık” diye çekimlenir. Yalnızca kendi gördüğünü ve hissettiğini bilir.', v: 'Birinci kişili anlatıcı olayın içindedir. Fiiller gördüm, yaptık diye çekimlenir. Yalnızca kendi gördüğünü ve hissettiğini bilir.' },
        { s: '3. kişili anlatıcı ise olayın dışındadır. Fiiller “gördü, yaptılar” diye gelir. Kişilerin içinden geçenleri de anlatabilir.', v: 'Üçüncü kişili anlatıcı ise olayın dışındadır. Fiiller gördü, yaptılar diye gelir. Kişilerin içinden geçenleri de anlatabilir.' },
        { s: 'Dikkat: Metindeki konuşmalar anlatıcıyı değiştirmez. Tırnak dışındaki anlatma cümlelerinin fiil çekimine bak.',
          h: '<div class="an-tip">Anı ve otobiyografi <b>1. kişili</b>, biyografi <b>3. kişili</b> anlatılır.</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdakilerin hangisinde hikâyenin <b>zaman</b> unsuru yoktur?</p>',
        c: ['Bayram sabahı Elif, dedesinin köydeki bahçesinde ağaçları suluyordu.', 'Akşam güneşi batarken Mehmet, iskelede oltasını denize salladı.', 'Kemal, Kapalıçarşı’nın taş döşeli dar sokaklarında, bakır tepsilerin parıltısı arasında dedesine hediye arıyordu.', 'Bir kış gecesi Zeynep, mutfakta annesiyle birlikte çorba pişirdi.'], a: 'C',
        hint: 'Her seçeneğe “Ne zaman?” diye sor. Bol ayrıntıya aldanma.', hintV: 'Her seçeneğe, ne zaman, diye sor. Bol ayrıntıya aldanma.',
        why: 'C’de yer (Kapalıçarşı), kişi (Kemal) ve olay (hediye aramak) ayrıntılı verilmiş ama ne zaman olduğu yok. A’da bayram sabahı, B’de akşam güneşi batarken, D’de bir kış gecesi zamanı bildiriyor.' },
      steps: [{ s: 'Şimdi sıra sende. Dört soruyla tara, sonra İşaretle’ye bas.' }] },

    { t: 'Olağanüstü olaylı türler',
      base: '<table class="an-tbl"><tr><th>Tür</th><th>Ayırt edici özellik</th></tr>' +
        '<tr class="rv o1"><td><b>Masal</b></td><td>dev, peri gibi olağanüstü varlıklar; zaman ve yer belirsiz; “Bir varmış bir yokmuş”</td></tr>' +
        '<tr class="rv o2"><td><b>Fabl</b></td><td>hayvanlar ve bitkiler insan gibi konuşur; sonunda bir ders verilir</td></tr>' +
        '<tr class="rv o3"><td><b>Efsane</b></td><td>bir yerin, adın nasıl ortaya çıktığını olağanüstü bir olaya bağlar</td></tr>' +
        '<tr class="rv o4"><td><b>Destan</b></td><td>bir milletin göç, savaş, kurtuluş gibi büyük olaylarını olağanüstü kahramanlarla anlatır</td></tr></table>',
      steps: [
        { s: 'Öyküleyici türlerin bir kısmında olağanüstü olaylar vardır. Önce onları ayıralım.' },
        { s: 'Masalda dev, peri, cadı gibi varlıklar olur. Zaman ve yer belirsizdir, sonunda genelde iyiler kazanır.', on: '.o1' },
        { s: 'Fablda hayvanlar ve bitkiler insan gibi konuşur. Tilki, karga, karınca… Sonunda da bir ders verilir.', v: 'Fablda hayvanlar ve bitkiler insan gibi konuşur. Tilki, karga, karınca. Sonunda da bir ders verilir.', on: '.o2' },
        { s: 'Efsane, bir yerin ya da adın nasıl ortaya çıktığını olağanüstü bir olaya bağlar. Gerçek bir yerle ilgilidir: “O günden beri bu göle… denir.”', v: 'Efsane, bir yerin ya da adın nasıl ortaya çıktığını olağanüstü bir olaya bağlar. Gerçek bir yerle ilgilidir: O günden beri bu göle şöyle denir, gibi.', on: '.o3' },
        { s: 'Destan ise bir milletin hayatını derinden etkileyen olayları anlatır. Oğuz Kağan, Ergenekon gibi.', on: '.o4' }
      ] },

    { t: 'Gerçek hayattan türler',
      base: '<table class="an-tbl"><tr><th>Tür</th><th>İpucu</th></tr>' +
        '<tr class="rv r1"><td><b>Anı</b></td><td>yazarın yaşadığı, üzerinden zaman geçmiş olay; “yıllar önce”</td></tr>' +
        '<tr class="rv r2"><td><b>Günlük</b></td><td>her gün, tarih atılarak, sıcağı sıcağına; “bugün”</td></tr>' +
        '<tr class="rv r3"><td><b>Gezi yazısı</b></td><td>gezilip görülen yer; tarihî, kültürel gözlemler</td></tr>' +
        '<tr class="rv r4"><td><b>Biyografi</b></td><td>bir kişinin hayatını <b>başkası</b> yazar; “doğdu, okudu”</td></tr>' +
        '<tr class="rv r5"><td><b>Otobiyografi</b></td><td>kişi kendi hayatını <b>kendisi</b> yazar; “doğdum, okudum”</td></tr>' +
        '<tr class="rv r6"><td><b>Mektup</b></td><td>hitap, tarih ve imza; “Sevgili…”</td></tr></table>',
      steps: [
        { s: 'Şimdi gerçek hayattan beslenen türlere geçelim.' },
        { s: 'Anı, yazarın bizzat yaşadığı olayları aradan zaman geçtikten sonra anlatmasıdır. Günlükte ise yaşananlar her gün, tarih atılarak yazılır.', on: '.r1,.r2' },
        { s: 'Gezi yazısında yazar gezip gördüğü bir yeri, oranın tarihini, kültürünü, insanlarını anlatır.', on: '.r3' },
        { s: 'Biyografide bir kişinin hayatını başkası yazar. Otobiyografide ise kişi kendi hayatını kendisi yazar.', on: '.r4,.r5' },
        { s: 'Mektupta da bir hitap, bir tarih ve bir imza bulunur.', on: '.r6' }
      ] },

    { t: 'Tuzak: yer var diye gezi yazısı olmaz',
      steps: [
        { s: 'Bir çıkmış soruda bir kasaba istasyonu çok ayrıntılı anlatılıyordu. Çeldirici olarak gezi yazısı ve biyografi verildi.' },
        { s: 'Ama metinde şöyle bir cümle vardı. Şimdi şuna bir bakalım.',
          h: '<div class="an-ex"><span class="an-l">“<span class="an-w">Ben de</span> tezkere alıp gelen ağabeyimi <span class="an-w">burada beklemiştim</span>.”</span><span class="an-l">→ yazarın kendi yaşadığı + üzerinden yıllar geçmiş olay = <b>anı</b></span></div>' },
        { s: 'Yazar kendi yaşadığı, üzerinden yıllar geçmiş bir olayı anlatıyor. Demek ki bu bir anı.' },
        { s: 'Kural şu: Bir yer anlatılıyor diye metin gezi yazısı olmaz. Gezi yazısında yazar o yeri gezip görür.',
          h: '<div class="an-trap">Yer betimlemesi ≠ gezi yazısı. Önce sor: Yazar burayı <b>gezmeye mi</b> gelmiş, yoksa <b>yaşadığı bir anıyı</b> mı anlatıyor?</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Yıllar önce, ilkokula başladığım ilk gün, babamın elini bir an bile bırakmamıştım. Okulun bahçesindeki o koca çınar ve öğretmenimin güler yüzü bugün hâlâ gözümün önünde.</p><p>Bu metin aşağıdaki türlerin hangisine örnektir?</p>',
        c: ['Gezi yazısı', 'Anı', 'Biyografi', 'Günlük'], a: 'B',
        hint: 'Anlatıcı kim, olay ne zaman yaşanmış? “Yıllar önce” ve “bırakmamıştım” sana ne söylüyor?',
        why: 'Yazar kendi yaşadığı bir olayı, aradan yıllar geçtikten sonra 1. kişi ağzından anlatıyor: Bu bir anıdır. Okul bahçesinin anlatılması onu gezi yazısı yapmaz; tarih atılmadığı için günlük, başkasının hayatı olmadığı için biyografi değildir.',
        whyV: 'Yazar kendi yaşadığı bir olayı, aradan yıllar geçtikten sonra birinci kişi ağzından anlatıyor: Bu bir anıdır. Okul bahçesinin anlatılması onu gezi yazısı yapmaz; tarih atılmadığı için günlük, başkasının hayatı olmadığı için de biyografi değildir.' },
      steps: [{ s: 'Metni dikkatle oku ve türünü seç.' }] },

    { t: 'Bilgilendirici türler',
      base: '<table class="an-tbl"><tr><th>Tür</th><th>Ayırt edici özellik</th></tr>' +
        '<tr class="rv b1"><td><b>Makale</b></td><td>düşünceyi kanıtlar; veri, araştırma, nesnel dil</td></tr>' +
        '<tr class="rv b2"><td><b>Deneme</b></td><td>kişisel düşünce; kanıtlamadan, kendi kendine konuşur gibi, samimi</td></tr>' +
        '<tr class="rv b3"><td><b>Söyleşi</b></td><td>deneme gibi samimi ama okura doğrudan seslenir</td></tr>' +
        '<tr class="rv b4"><td><b>Fıkra</b></td><td>gazetede güncel bir olayı kısa, çoğu zaman esprili yorumlar</td></tr>' +
        '<tr class="rv b5"><td><b>Haber</b></td><td>güncel olayı yorumsuz, 5N1K ile bildirir</td></tr>' +
        '<tr class="rv b6"><td><b>Röportaj / Mülakat</b></td><td>görüşme + gözlem / uzmanla soru-cevap</td></tr></table>',
      steps: [
        { s: 'Gelelim düşünce aktaran türlere. LGS’de asıl zorluk burada.', v: 'Gelelim düşünce aktaran türlere. Asıl zorluk burada.' },
        { s: 'Makale bir düşünceyi kanıtlamak için yazılır. Veriler, araştırmalar, nesnel ve ciddi bir dil kullanır.', on: '.b1' },
        { s: 'Deneme ise yazarın kişisel düşünceleridir. Kanıtlama amacı gütmez, kendi kendine konuşur gibi samimi bir dille yazılır.', on: '.b2' },
        { s: 'Söyleşi de deneme gibi samimidir. Farkı şu: Yazar okurla sohbet eder, ona doğrudan seslenir.', on: '.b3' },
        { s: 'Fıkra, gazetedeki köşe yazısıdır. Güncel bir olayı yorumlar. Nasreddin Hoca fıkralarıyla karıştırma, onlar ayrı bir şey.', on: '.b4' },
        { s: 'Haber yorum katmadan bilgi verir. Röportajda görüşme ve gözlem, mülakatta uzmanla soru-cevap vardır.', on: '.b5,.b6' }
      ] },

    { t: 'Denemeyi komşularından ayır',
      base: '<svg class="an-svg" viewBox="0 0 340 214" role="img" aria-label="Deneme ayırt etme akışı">' +
        '<rect x="10" y="4" width="262" height="30" rx="8" class="box rv a1"/><text x="141" y="24" font-size="12" text-anchor="middle" font-weight="700" class="rv a1">Kanıt, veri, araştırma var mı?</text>' +
        '<path class="st dr a1" d="M272 19 H300 V40"/><text x="306" y="56" font-size="12" text-anchor="middle" font-weight="700" class="acc rv a1">Makale</text>' +
        '<path class="st dr a2" d="M141 34 V54"/><text x="152" y="48" font-size="10" class="mut rv a2">hayır</text>' +
        '<rect x="10" y="54" width="262" height="30" rx="8" class="box rv a2"/><text x="141" y="74" font-size="12" text-anchor="middle" font-weight="700" class="rv a2">Güncel bir olay mı yorumlanıyor?</text>' +
        '<path class="st dr a2" d="M272 69 H300 V90"/><text x="306" y="106" font-size="12" text-anchor="middle" font-weight="700" class="acc rv a2">Fıkra</text>' +
        '<path class="st dr a3" d="M141 84 V104"/><text x="152" y="98" font-size="10" class="mut rv a3">hayır</text>' +
        '<rect x="10" y="104" width="262" height="30" rx="8" class="box rv a3"/><text x="141" y="124" font-size="12" text-anchor="middle" font-weight="700" class="rv a3">Okura doğrudan sesleniyor mu?</text>' +
        '<path class="st dr a3" d="M272 119 H300 V140"/><text x="306" y="156" font-size="12" text-anchor="middle" font-weight="700" class="acc rv a3">Söyleşi</text>' +
        '<path class="st dr a4" d="M141 134 V160"/><text x="152" y="150" font-size="10" class="mut rv a4">hayır</text>' +
        '<rect x="51" y="160" width="180" height="46" rx="10" class="boxa rv a4"/><text x="141" y="181" font-size="15" text-anchor="middle" font-weight="700" class="rv a4">Deneme</text><text x="141" y="198" font-size="11" text-anchor="middle" class="mut rv a4">samimi, öznel, kanıtsız</text></svg>',
      steps: [
        { s: 'Çıkmış yedi sorunun dördünün cevabı deneme oldu. O yüzden denemeyi komşularından ayırmak bu konunun anahtarı.' },
        { s: 'İlk soru: Metinde kanıt, veri, araştırma var mı? Varsa makale.', on: '.a1' },
        { s: 'Yoksa ikinci soru: Güncel bir olay mı yorumlanıyor? Öyleyse fıkra.', on: '.a2' },
        { s: 'Değilse üçüncü soru: Yazar okura doğrudan sesleniyor mu? “Siz de fark etmişsinizdir, değil mi?” gibi. Öyleyse söyleşi.', v: 'Değilse üçüncü soru: Yazar okura doğrudan sesleniyor mu? Siz de fark etmişsinizdir, değil mi, gibi. Öyleyse söyleşi.', on: '.a3' },
        { s: 'Hiçbiri yoksa ve dil samimi, öznelse, işte bu bir deneme.', on: '.a4' }
      ] },

    { t: 'Deneme tuzakları',
      steps: [
        { s: 'Şimdi denemeyle ilgili üç büyük tuzağa bakalım.',
          h: '<div class="an-trap"><b>1. Geçmişten söz eden deneme:</b> “Bizim zamanımızda şiir…” diye başlıyor diye <b>anı</b> değildir. Belli bir olay ve “ben şunu yaşadım” yoksa, yazar geçmişle bugünü karşılaştırıp düşüncesini söylüyordur.</div>' },
        { s: 'Birincisi: Metin geçmişten söz ediyor diye anı sanma. Yazar belli bir olayı anlatmıyor, geçmişle bugünü karşılaştırıp kendi düşüncesini söylüyorsa bu denemedir.' },
        { s: 'İkincisi: “Bunun sebebi” diye bir açıklama yapılıyor diye metin bilimsel olmaz. Veri ve kanıt yoksa, üstelik coşkulu öznel cümleler varsa bu yine denemedir.',
          h: '<div class="an-trap"><b>2. Neden-sonuç ≠ bilimsel:</b> Veri, araştırma yoksa “bilimsel gerçekliğe uygun” şıkkı yanlıştır.</div>' },
        { s: 'Üçüncüsü: Soru soran deneme. Yazar soruları kendi kendine soruyor, okura seslenmiyorsa bu söyleşi değil, denemedir.',
          h: '<div class="an-trap"><b>3. Soru soran deneme:</b> “Korku mu? Alışkanlık mı?” Yazar <b>kendine</b> soruyor, “kanımca” diyor → deneme. Söyleşi için okura hitap gerekir.</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Bana öyle geliyor ki insan, en çok yalnız kaldığında kendini tanır. Kalabalıklar içinde başkalarının sesine o kadar alışırız ki kendi sesimizi duymaz oluruz. Belki de bu yüzden yalnızlıktan korkarız; kim bilir?</p><p>Bu metnin türüyle ilgili aşağıdakilerden hangisi <b>doğrudur</b>?</p>',
        c: ['Bir düşünce, veriler ve araştırmalarla kanıtlanmaya çalışılmıştır.', 'Yazar, kişisel düşüncelerini kanıtlama amacı gütmeden samimi bir dille anlatmıştır.', 'Güncel bir olay esprili bir dille yorumlanmıştır.', 'Yazarın başından geçen bir olay, aradan zaman geçtikten sonra aktarılmıştır.'], a: 'B',
        hint: 'Metinde veri var mı, güncel bir olay var mı, yaşanmış bir olay var mı? Hiçbiri yoksa ve dil öznelse…',
        why: '“Bana öyle geliyor ki”, “belki de”, “kim bilir” sözleri kişisel, kesinlik taşımayan bir düşünceyi samimi bir dille anlatıyor: deneme. A makaleyi, C fıkrayı, D anıyı tarif ediyor.' },
      steps: [{ s: 'Deneme akışını hatırla ve seç.' }] },

    { t: 'Çözüm yolu',
      steps: [
        { s: 'Hepsini bir çözüm yoluna bağlayalım.',
          h: '<div class="an-ex"><span class="an-l rv y1"><b>1.</b> Olay mı, düşünce mi?</span>' +
             '<span class="an-l rv y2"><b>2. Olay varsa:</b> olağanüstülük var mı? anlatıcı “ben” mi? tarih atılmış mı? bütün hayat mı? gezilen yer mi?</span>' +
             '<span class="an-l rv y3"><b>3. Düşünce varsa:</b> kanıt var mı? güncel olay var mı? okura sesleniyor mu? Hiçbiri yoksa → deneme.</span>' +
             '<span class="an-l rv y4"><b>4.</b> Şıkta tür adı yoksa her şıkkın hangi türü tarif ettiğini kenara yaz.</span></div>' },
        { s: 'Önce sor: Metinde olay mı var, düşünce mi?', on: '.y1' },
        { s: 'Olay varsa olağanüstülüğe, anlatıcıya, tarihe ve anlatılan hayata bak.', on: '.y2' },
        { s: 'Düşünce varsa kanıt, güncel olay ve okura seslenme var mı diye bak. Hiçbiri yoksa deneme.', on: '.y3' },
        { s: 'Şıklarda tür adı yoksa her şıkkın hangi türü tarif ettiğini kenara yaz. “Bilimsel gerçeklik” makale, “başından geçen olay” anıdır.', on: '.y4' },
        { s: 'Bu kadar! Artık metinlerin kimliğini çok daha kolay tanıyacaksın. Hadi sorularla pekiştir!' }
      ] }
  ]
};
