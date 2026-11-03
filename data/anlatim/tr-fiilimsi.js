/* Adım Adım Anlatım · Türkçe · Fiilimsiler (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['tr-fiilimsi'] = {
  title: 'Fiilimsiler',
  desc: 'İsim-fiil, sıfat-fiil, zarf-fiil: ekleri, görevleri ve LGS’de çeldirici olan kalıcı isim, çekimli fiil ve isimden türeyen sözcük tuzakları.',
  ozet: [
    'Fiilimsi: fiil kök ya da gövdesine gelen eklerle türer; fiil anlamını korur ama cümlede isim, sıfat ya da zarf görevi yapar. Kip ve kişi eki almaz.',
    'En güvenilir test: kökü fiil mi, olumsuzu (-ma/-me) yapılabiliyor mu, eylem anlamı sürüyor mu?',
    'İsim-fiil: -ma/-me, -ış/-iş, -mak/-mek. Kalıcı isimler (dolma, dondurma, çakmak, giriş) fiilimsi değildir.',
    'Sıfat-fiil: -an, -ası, -mez, -ar, -dik, -ecek, -miş. İsmi niteler; ismi düşerse adlaşmış sıfat-fiil olur ve yine fiilimsidir.',
    'Cümle sonunda kip-kişi bildiren -acak, -mış, -ar, -maz çekimli fiildir, sıfat-fiil değildir.',
    'Zarf-fiil: -ıp, -arak, -madan, -maksızın, -ınca, -ken, -dıkça, -alı, -a…-a, -r…-maz, -casına, -dığında, -esiye. Fiilin nasıl ya da ne zaman yapıldığını söyler.',
    '-ken ve -casına isme gelirse fiilimsi olmaz: çocukken, evdeyken, delicesine.',
    '-ma olumsuzluk ekinden sonra kip-kişi eki gelir (gelmedin); isim-fiil ekinden sonra isim çekim ekleri gelir (gelmene).'
  ],
  scenes: [
    { t: 'Fiilimsi nedir?',
      base: '<svg class="an-svg" viewBox="0 0 340 190" role="img" aria-label="Fiil kökü fiilimsi ekiyle isim, sıfat ya da zarf görevine geçer">' +
        '<rect x="110" y="8" width="120" height="40" rx="10" class="boxa rv f1"/><text x="170" y="34" font-size="17" text-anchor="middle" font-weight="700" class="rv f1">oku- (fiil)</text>' +
        '<path class="st dr f2" d="M150 50 L60 108"/><path class="st dr f2" d="M170 50 L170 108"/><path class="st dr f2" d="M190 50 L280 108"/>' +
        '<rect x="8" y="110" width="104" height="40" rx="10" class="box rv f3"/><text x="60" y="136" font-size="16" text-anchor="middle" font-weight="700" class="rv f3">oku<tspan class="acc">mak</tspan></text>' +
        '<rect x="118" y="110" width="104" height="40" rx="10" class="box rv f4"/><text x="170" y="136" font-size="16" text-anchor="middle" font-weight="700" class="rv f4">oku<tspan class="acc">yan</tspan></text>' +
        '<rect x="228" y="110" width="104" height="40" rx="10" class="box rv f5"/><text x="280" y="136" font-size="16" text-anchor="middle" font-weight="700" class="rv f5">oku<tspan class="acc">yunca</tspan></text>' +
        '<text x="60" y="174" font-size="14" text-anchor="middle" class="mut rv f3">isim-fiil</text>' +
        '<text x="170" y="174" font-size="14" text-anchor="middle" class="mut rv f4">sıfat-fiil</text>' +
        '<text x="280" y="174" font-size="14" text-anchor="middle" class="mut rv f5">zarf-fiil</text></svg>',
      steps: [
        { s: 'Her fiilimsi bir <b>fiilden</b> doğar. Örneğin “oku-” fiili.', v: 'Her fiilimsi bir fiilden doğar. Örneğin oku fiili.', on: '.f1' },
        { s: 'Bu köke belirli ekler gelince sözcük fiil anlamını korur ama cümlede başka bir görev üstlenir.', on: '.f2' },
        { s: '“okumak” isim gibi kullanılır: <b>isim-fiil</b>.', v: 'Okumak, isim gibi kullanılır: isim fiil.', on: '.f3' },
        { s: '“okuyan” bir ismi niteler: <b>sıfat-fiil</b>.', v: 'Okuyan, bir ismi niteler: sıfat fiil.', on: '.f4' },
        { s: '“okuyunca” fiilin zamanını ya da durumunu bildirir: <b>zarf-fiil</b>.', v: 'Okuyunca, fiilin zamanını ya da durumunu bildirir: zarf fiil.', on: '.f5' },
        { s: 'Fiilimsiye <b>eylemsi</b> de denir.', v: 'Fiilimsiye eylemsi de denir.' }
      ] },

    { t: 'Fiilimsiyi tanımanın 4 testi',
      steps: [
        { s: '1. Kökü mutlaka fiildir. İsimden türeyen sözcük fiilimsi olamaz.', v: 'Bir: kökü mutlaka fiildir. İsimden türeyen sözcük fiilimsi olamaz.',
          h: '<div class="an-rule"><b>1. Kök fiil mi?</b> oku-mak ✓ &nbsp;·&nbsp; ev-de-yken ✗</div>' },
        { s: '2. Olumsuzu yapılabilir: okumamak, gelmeyen, dinlenmeden.', v: 'İki: olumsuzu yapılabilir. Okumamak, gelmeyen, dinlenmeden.',
          h: '<div class="an-rule"><b>2. Olumsuzu olur mu?</b> oku<span class="an-ek">ma</span>mak, gel<span class="an-ek">me</span>yen, dinlen<span class="an-ek">me</span>den</div>' },
        { s: '3. Kip ve kişi eki almaz; cümlede temel yargıyı değil, yan yargıyı kurar.', v: 'Üç: kip ve kişi eki almaz; cümlede temel yargıyı değil, yan yargıyı kurar.',
          h: '<div class="an-rule"><b>3. Kip-kişi eki yok.</b> “okudum” çekimli fiildir, fiilimsi değildir.</div>' },
        { s: '4. Ek-fiil alırsa yüklem olabilir: “En büyük tutkusu kitap okumaktı.”', v: 'Dört: ek fiil alırsa yüklem olabilir. En büyük tutkusu kitap okumaktı.',
          h: '<div class="an-tip">En büyük tutkusu kitap <span class="an-w">okumak</span>tı. → fiilimsi + ek-fiil = yüklem</div>' }
      ] },

    { t: 'İsim-fiil: -ma, -ış, -mak',
      base: '<div class="an-grid"><div class="rv g1"><b>-ma / -me</b>yüzme, gelme</div><div class="rv g2"><b>-ış / -iş</b>bakış, gidiş</div><div class="rv g3"><b>-mak / -mek</b>okumak, gülmek</div></div>',
      steps: [
        { s: 'İsim-fiil, fiile isim görevi kazandırır. Üç eki vardır.', v: 'İsim fiil, fiile isim görevi kazandırır. Üç eki vardır.' },
        { s: '-ma, -me: yüzme, gelme.', v: 'ma, me ekleri: yüzme, gelme.', on: '.g1' },
        { s: '-ış, -iş, -uş, -üş: bakış, gidiş, duruş.', v: 'ış, iş ekleri: bakış, gidiş, duruş.', on: '.g2' },
        { s: '-mak, -mek: okumak, gülmek.', v: 'mak, mek ekleri: okumak, gülmek.', on: '.g3' },
        { s: 'Cümlede isim gibi hâl eki ve iyelik eki alabilir.', h: '<div class="an-ex"><span class="an-l"><span class="an-w">Yüzmeyi</span> çok severim.</span><span class="an-l">Annemin <span class="an-w">bakışı</span> her şeyi anlattı.</span><span class="an-l">Erken <span class="an-w">kalkmak</span> zor geliyor.</span></div>' }
      ] },

    { t: 'Tuzak: kalıcı isim',
      steps: [
        { s: 'Bazı sözcükler isim-fiil eki taşır ama zamanla bir nesnenin adı olmuştur. Bunlara <b>kalıcı isim</b> denir.',
          h: '<div class="an-trap"><b>Kalıcı isim (fiilimsi değil):</b> dolma, sarma, dondurma, kıyma, çakmak, uçurtma, kazma, giriş, çıkış, yemek, ekmek</div>' },
        { s: 'Test: olumsuzunu yapmayı dene. “Dondurmama” diye bir yiyecek yoktur; demek ki kalıcı isim.', v: 'Test: olumsuzunu yapmayı dene. Dondurmama diye bir yiyecek yoktur; demek ki kalıcı isim.' },
        { s: 'Aynı sözcük üç farklı kılıkta gelebilir. “dolma” üzerinden görelim:', v: 'Aynı sözcük üç farklı kılıkta gelebilir. Dolma sözcüğü üzerinden görelim.',
          h: '<table class="an-tbl"><tr class="rv d1"><td>Annem <span class="an-w">dolma</span> pişirdi.</td><td><b>kalıcı isim</b> ✗</td></tr>' +
             '<tr class="rv d2"><td>Kavanozun <span class="an-w">dolmasını</span> bekledik.</td><td><b>isim-fiil</b> ✓</td></tr>' +
             '<tr class="rv d3"><td>Bu kaba su <span class="an-w">dolmasın</span>!</td><td><b>çekimli fiil</b> ✗</td></tr></table>' },
        { s: 'Yemek adı olarak “dolma” kalıcı isimdir.', v: 'Yemek adı olarak dolma, kalıcı isimdir.', on: '.d1' },
        { s: '“Kavanozun dolması” bir eylemdir; olumsuzu da olur: dolmaması. Bu isim-fiil.', v: 'Kavanozun dolması bir eylemdir; olumsuzu da olur: dolmaması. Bu isim fiil.', on: '.d2' },
        { s: '“dolmasın” emir kipinde çekimli fiildir. Buradaki -ma olumsuzluk ekidir.', v: 'Dolmasın, emir kipinde çekimli fiildir. Buradaki ma, olumsuzluk ekidir.', on: '.d3' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdaki cümlelerin hangisinde altı çizili sözcük <b>isim-fiildir</b>?</p>',
        c: ['Annem akşama <span class="an-w">sarma</span> hazırladı.', 'Kardeşimin <span class="an-w">gülmesi</span> hepimizi neşelendirdi.', 'Kapıyı bu kadar sert <span class="an-w">kapatma</span>!', 'Mahallede en sevdiğimiz tatlı <span class="an-w">dondurma</span>ydı.'], a: 'B',
        hint: 'Kalıcı isimleri (yiyecek adları) ve cümle sonundaki emir kipini ele. Hangisi hem eylem bildiriyor hem isim gibi ek almış?',
        why: '“gülmesi” = gül- + -me (isim-fiil) + -si. Olumsuzu da yapılır: gülmemesi. A ve D kalıcı isim; C olumsuz emir, yani çekimli fiil.',
        whyV: 'Gülmesi: gül kökü, me isim fiil eki ve iyelik eki. Olumsuzu da yapılır: gülmemesi. A ve D kalıcı isim; C ise olumsuz emir, yani çekimli fiil.' },
      steps: [{ s: 'Şimdi sen dene. Şıkkı seç, <b>İşaretle</b>’ye bas.' }] },

    { t: 'Sıfat-fiil: ismi niteleyen eylem',
      base: '<div class="an-grid" style="grid-template-columns:repeat(4,1fr)"><div class="rv s1"><b>-an</b>koşan</div><div class="rv s1"><b>-ası</b>görülesi</div><div class="rv s1"><b>-mez</b>bitmez</div><div class="rv s1"><b>-ar</b>akar</div><div class="rv s2"><b>-dik</b>bildik</div><div class="rv s2"><b>-ecek</b>okunacak</div><div class="rv s2"><b>-miş</b>pişmiş</div><div class="rv s2" style="font-size:12px"><b>kısaca</b>an, ası, mez, ar, dik, ecek, miş</div></div>',
      steps: [
        { s: 'Sıfat-fiil, fiile sıfat görevi kazandırır: bir ismin önüne gelip onu niteler.', v: 'Sıfat fiil, fiile sıfat görevi kazandırır: bir ismin önüne gelip onu niteler.' },
        { s: 'Ekleri: -an, -ası, -mez, -ar.', v: 'Ekleri: an, ası, mez, ar.', on: '.s1' },
        { s: 've -dik, -ecek, -miş.', v: 've dik, ecek, miş.', on: '.s2' },
        { s: 'Nasıl bulunur? Sözcükten sonra gelen isme “nasıl, hangi” diye sor.',
          h: '<div class="an-ex"><span class="an-l"><span class="an-w">Koşan</span> atlar tozu dumana kattı. <small>(hangi atlar?)</small></span><span class="an-l"><span class="an-w">Okunacak</span> kitapları masaya dizdi.</span><span class="an-l"><span class="an-w">Pişmiş</span> aş, <span class="an-w">akar</span> su, <span class="an-w">bitmez</span> tükenmez yol</span></div>' }
      ] },

    { t: 'Sıfat-fiil mi, çekimli fiil mi?',
      steps: [
        { s: 'Dikkat: -acak, -mış, -ar, -maz aynı zamanda zaman ekidir. Yerine bak!', v: 'Dikkat: acak, mış, ar, maz ekleri aynı zamanda zaman ekidir. Yerine bak!',
          h: '<table class="an-tbl"><tr><th>Sıfat-fiil (ismi niteler)</th><th>Çekimli fiil (yargı bildirir)</th></tr>' +
             '<tr class="rv p1"><td><span class="an-w">Gelecek</span> misafirler için hazırlık yaptık.</td><td>Misafirler yarın <span class="an-w">gelecek</span>.</td></tr>' +
             '<tr class="rv p2"><td><span class="an-w">Soğumuş</span> çayı içmedi.</td><td>Çay çoktan <span class="an-w">soğumuş</span>.</td></tr></table>' },
        { s: '“Gelecek misafirler”de sözcük ismin önünde: sıfat-fiil. “yarın gelecek”te cümle sonunda yargı bildiriyor: çekimli fiil.', v: 'Gelecek misafirler örneğinde sözcük ismin önünde: sıfat fiil. Yarın gelecek örneğinde ise cümle sonunda yargı bildiriyor: çekimli fiil.', on: '.p1' },
        { s: 'Aynısı “soğumuş” için geçerli.', v: 'Aynısı soğumuş için de geçerli.', on: '.p2' },
        { s: 'Devrik cümlede yüklem başa da gelebilir; ekin kip-kişi bildirip bildirmediğine bak.', v: 'Devrik cümlede yüklem başa da gelebilir; ekin kip ve kişi bildirip bildirmediğine bak.' }
      ] },

    { t: 'Adlaşmış sıfat-fiil',
      steps: [
        { s: 'Sıfat-fiilin nitelediği isim düşerse, ismin ekleri sıfat-fiile geçer.', h: '<div class="an-ex"><span class="an-l">Kitap okuyan <b>öğrenciler</b> başarılı olur.</span><span class="an-l">Kitap <span class="an-w">okuyanlar</span> başarılı olur.</span></div>' },
        { s: 'Buna <b>adlaşmış sıfat-fiil</b> denir ve yine bir fiilimsidir; sıfat-fiil olarak sayılır.', v: 'Buna adlaşmış sıfat fiil denir ve yine bir fiilimsidir; sıfat fiil olarak sayılır.',
          h: '<div class="an-rule"><b>okuyanlar</b> = okuyan (öğrenciler) → adlaşmış sıfat-fiil ✓</div>' },
        { s: 'Ama bazı sıfat-fiil ekli sözcükler kalıcı isim olmuştur: dolmuş, yakacak, giyecek, yiyecek, yazar, geçmiş.', v: 'Ama bazı sıfat fiil ekli sözcükler kalıcı isim olmuştur: dolmuş, yakacak, giyecek, yiyecek, yazar, geçmiş.',
          h: '<div class="an-trap">Durakta <span class="an-w">dolmuş</span> bekledik. → taşıt adı, kalıcı isim<br>Sepetteki <span class="an-w">dolmuş</span> şişeleri boşalttık. → sıfat-fiil</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdaki cümlelerin hangisinde <b>sıfat-fiil yoktur</b>?</p>',
        c: ['Bahçede koşan çocuklar bize el salladı.', 'Bu romanı tatilde mutlaka okuyacağım.', 'Okunmuş gazeteleri kapının önüne koydu.', 'Yarışmayı kazananlar sahneye çağrıldı.'], a: 'B',
        hint: 'Adlaşmış sıfat-fiil de sıfat-fiildir. Cümle sonunda kip ve kişi bildiren sözcüğe dikkat et.',
        why: '“okuyacağım” gelecek zaman ve 1. tekil kişi bildiren çekimli fiildir. A’da koşan, C’de okunmuş sıfat-fiil; D’deki kazananlar adlaşmış sıfat-fiildir.',
        whyV: 'Okuyacağım, gelecek zaman ve birinci tekil kişi bildiren çekimli fiildir. A’da koşan, C’de okunmuş sıfat fiildir; D’deki kazananlar da adlaşmış sıfat fiildir.' },
      steps: [{ s: 'Dikkatli oku: soru “yoktur” diyor.', v: 'Dikkatli oku: soru yoktur diyor.' }] },

    { t: 'Zarf-fiil: nasıl ve ne zaman?',
      base: '<table class="an-tbl"><tr><th>Anlam</th><th>Başlıca ekler</th></tr>' +
        '<tr class="rv z1"><td><b>Durum</b><br><small>Nasıl?</small></td><td>-arak, -ıp, -madan, -maksızın, -a…-a, -casına, -esiye</td></tr>' +
        '<tr class="rv z2"><td><b>Zaman</b><br><small>Ne zaman?</small></td><td>-ınca, -ken, -dığında, -alı, -dıkça, -r…-maz</td></tr></table>',
      steps: [
        { s: 'Zarf-fiil, fiilin <b>nasıl</b> ya da <b>ne zaman</b> yapıldığını bildirir.', v: 'Zarf fiil, fiilin nasıl ya da ne zaman yapıldığını bildirir.' },
        { s: 'Durum bildirenler “nasıl?” sorusuna cevap verir.', v: 'Durum bildirenler nasıl sorusuna cevap verir.', on: '.z1',
          h: '<div class="an-ex"><span class="an-l">Çocuklar <span class="an-w">gülerek</span> bahçeye çıktı. <small>(Nasıl?)</small></span><span class="an-l">Hiç <span class="an-w">dinlenmeden</span> yürüdük.</span><span class="an-l"><span class="an-w">Ağlaya ağlaya</span> derdini anlattı.</span></div>' },
        { s: 'Zaman bildirenler “ne zaman?” sorusuna cevap verir.', v: 'Zaman bildirenler ne zaman sorusuna cevap verir.', on: '.z2',
          h: '<div class="an-ex"><span class="an-l">Güneş <span class="an-w">batınca</span> hava serinledi. <small>(Ne zaman?)</small></span><span class="an-l">Ders <span class="an-w">çalışırken</span> müzik dinlemem.</span><span class="an-l">Eve <span class="an-w">gelir gelmez</span> ellerini yıkadı.</span></div>' },
        { s: '“-dıkça” zaman ve süreklilik yanında ölçü-koşul anlamı da katabilir: Okudukça öğrenirsin.', v: 'dıkça eki, zaman ve süreklilik yanında ölçü ve koşul anlamı da katabilir: Okudukça öğrenirsin.' },
        { s: 'Gözden kaçanlar: saatteki “kala, geçe” (kal-a, geç-e) ve “-esiye”: Ölesiye çalıştı.', v: 'Gözden kaçanlar: saat söylerken kullanılan kala ve geçe, yani kal a ve geç e; bir de esiye eki: Ölesiye çalıştı.',
          h: '<div class="an-tip">Ona beş <span class="an-w">kala</span> geldi. · Sekizi çeyrek <span class="an-w">geçe</span> çıktık. · <span class="an-w">Ölesiye</span> çalıştı.</div>' }
      ] },

    { t: 'Zarf-fiil tuzakları',
      steps: [
        { s: '-ken ve -casına isme gelirse fiilimsi olmaz!', v: 'ken ve casına ekleri isme gelirse fiilimsi olmaz!',
          h: '<div class="an-trap"><span class="an-w">Çocukken</span> · <span class="an-w">evdeyken</span> · <span class="an-w">delicesine</span> → isimden türedi, zarf-fiil değil</div>' },
        { s: 'Fiile gelirse zarf-fiildir: okurken, giderken, uçarcasına.', h: '<div class="an-rule"><b>oku-r-ken, gid-er-ken, uç-ar-casına</b> → kök fiil, zarf-fiil ✓</div>', v: 'Fiile gelirse zarf fiildir: okurken, giderken, uçarcasına.' },
        { s: '“-madan” iki kılıkta gelir. Soruya bak:', v: 'madan eki iki kılıkta gelir. Soruya bak.',
          h: '<table class="an-tbl"><tr class="rv m1"><td>Yüksek sesle <span class="an-w">konuşmadan</span> hoşlanmam.</td><td>Neyden? → <b>isim-fiil</b></td></tr><tr class="rv m2"><td>Kimseyle <span class="an-w">konuşmadan</span> dışarı çıktı.</td><td>Nasıl? → <b>zarf-fiil</b></td></tr></table>' },
        { s: 'Neyden hoşlanmam? Konuşmadan: isim-fiil, -dan burada ayrılma hâl ekidir.', v: 'Neyden hoşlanmam? Konuşmadan. Burada isim fiildir; dan, ayrılma hâl ekidir.', on: '.m1' },
        { s: 'Nasıl çıktı? Konuşmadan: zarf-fiil.', v: 'Nasıl çıktı? Konuşmadan. Bu zarf fiildir.', on: '.m2' }
      ] },

    { t: 'Olumsuzluk -ma mı, isim-fiil -ma mı?',
      steps: [
        { s: 'Olumsuzluk ekinden sonra kip ve kişi eki gelir: çekimli fiil.', v: 'Olumsuzluk ekinden sonra kip ve kişi eki gelir: çekimli fiil.',
          h: '<div class="an-ex"><span class="an-l">Dün bizimle gel<span class="an-ek">me</span>din. → gel + me (olumsuzluk) + di + n</span></div>' },
        { s: 'İsim-fiil ekinden sonra isim çekim ekleri gelir.', h: '<div class="an-ex"><span class="an-l">Gel<span class="an-ek">me</span>ne çok sevindim. → Neye sevindim? isim-fiil</span></div>' },
        { s: 'İkisi bir arada da olur: “yapmaması”nda ilk -ma olumsuzluk, ikinci -ma isim-fiil ekidir.', v: 'İkisi bir arada da olur: yapmaması sözcüğünde ilk ma olumsuzluk eki, ikinci ma isim fiil ekidir.',
          h: '<div class="an-rule">Ödevini yap-<span class="an-ek">ma</span>-<span class="an-ek">ma</span>-sı öğretmeni üzdü.<br><small>1. -ma: olumsuzluk · 2. -ma: isim-fiil</small></div>' },
        { s: 'LGS’de sorular genelde numaralı cümleler içinden bir türü seçtirir; çeldiriciler isimden türeyen sözcükler ve çekimli fiillerdir.', v: 'LGS’de sorular genelde numaralı cümleler içinden bir türü seçtirir; çeldiriciler, isimden türeyen sözcükler ve çekimli fiillerdir.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdaki cümlelerin hangisinde <b>zarf-fiil kullanılmamıştır</b>?</p>',
        c: ['Çocukken bu sokakta saatlerce top oynardık.', 'Kapıyı açınca içeriye serin bir rüzgâr doldu.', 'Ödevini bitirmeden televizyonun başına geçti.', 'Kardeşim ağlaya ağlaya odasına koştu.'], a: 'A',
        hint: '-ken ekinin geldiği sözcüğün kökü fiil mi, isim mi?',
        why: '“Çocukken” isimden (çocuk) türemiştir; zarf-fiil değildir. “saatlerce” de isimden türemiş bir zarftır. B’de açınca, C’de bitirmeden, D’de ağlaya ağlaya zarf-fiildir.',
        whyV: 'Çocukken, çocuk isminden türemiştir; zarf fiil değildir. Saatlerce de isimden türemiş bir zarftır. B’de açınca, C’de bitirmeden, D’de ağlaya ağlaya zarf fiildir.' },
      steps: [{ s: 'Son soru. Tuzaklara dikkat!' }] }
  ]
};
