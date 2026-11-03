/* Adım Adım Anlatım · Türkçe · Sözel Mantık ve Görsel Okuma (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['tr-sozelmantik'] = {
  title: 'Sözel Mantık, Grafik ve Tablo',
  desc: 'Koşulları listeleme, sıralama ve eşleştirme tabloları, “kesinlikle” ile “olabilir” farkı, grafik türleri, oran ve “başına düşen” hesapları, tablo seçme, kuralı görsele uygulama ve son kontrol listesi.',
  ozet: [
    'Dört adım: oku ve koşulları listele, kesin bilgiden başla, tablo ya da şema kur, şıkları ele. Bir şıkkı elemek için tek bir koşulu bozduğunu göstermek yeter.',
    '“Hemen ardından” bitişik demektir; “önce, sonra” bitişik olmak zorunda değildir. “Kurulduğunda yalnızca bir tane vardı” 2. sıra demektir; “önce ve sonra … vardı” yalnızca uçları eler.',
    'Kesin doğru = her yerleşimde doğru; kesin yanlış = hiçbir yerleşimde doğru değil; arası = olabilir. Yargının bir parçasının doğru olması tamamının kesin olduğunu göstermez.',
    'Sütun miktarı, çizgi zaman içindeki değişimi, daire bir bütünün yüzdelerini, değişim grafiği yalnızca artış ya da azalışı gösterir. Değişim grafiğinden miktar, tek zamanlı oran grafiğinden zaman içi değişim okunmaz.',
    'Yüzdeyi sayıya çevir: 160’ın %45’i ile 240’ın %30’u ikisi de 72’dir. “Başına düşen” bölmedir. Genellemeyi tek bir ters örnek çürütür.',
    'Tablo seçmede her yanlış şık genellikle yalnızca bir koşulu bozar; bütün koşulları denetlemeden işaretleme. “Değişmedi” ne artış ne azalıştır.',
    'Kuralı görsele uygularken değeri doğru aralığa yerleştir ve görselin her parçasını ayrı denetle. “-mak için” amaç, “-dığı için” sebeptir.'
  ],
  scenes: [
    { t: 'Bu konu neyi ölçer?',
      steps: [
        { s: 'Merhaba! Bu konu dil bilgisi değil. Verilen bilgiyi eksiksiz okuyup yalnızca ona dayanarak karar verebiliyor musun, onu ölçer.' },
        { s: 'Her yıl birkaç soru bu türden gelir ve son yıllarda neredeyse hepsinde bir tablo, grafik ya da görsel var.',
          h: '<div class="an-grid"><div><b>Tablo / grafik seçme</b>hangisi olabilir?</div><div><b>Grafikten yargı</b>ulaşılabilir mi?</div><div><b>Kural → görsel</b>uygulama doğru mu?</div><div><b>Sıralama</b>zincir kur</div><div><b>Eşleştirme</b>✓ / ✗ tablosu</div><div><b>Şifre, hareket</b>adım adım uygula</div></div>' },
        { s: 'Soru tipleri farklı görünse de hepsinin çözüm mantığı aynı. Şimdi o mantığı öğrenelim.' }
      ] },

    { t: 'Dört adımlı çözüm',
      base: '<svg class="an-svg" viewBox="0 0 340 120" role="img" aria-label="Oku ve listele, kesinden başla, tablo kur, şıkları ele">' +
        '<rect x="2" y="20" width="76" height="60" rx="10" class="box rv d1"/><text x="40" y="45" font-size="12" text-anchor="middle" font-weight="700" class="rv d1">1. Oku</text><text x="40" y="63" font-size="11" text-anchor="middle" class="mut rv d1">listele</text>' +
        '<path class="st dr d2" d="M78 50 H88"/>' +
        '<rect x="88" y="20" width="76" height="60" rx="10" class="box rv d2"/><text x="126" y="45" font-size="12" text-anchor="middle" font-weight="700" class="rv d2">2. Kesin</text><text x="126" y="63" font-size="11" text-anchor="middle" class="mut rv d2">bilgi önce</text>' +
        '<path class="st dr d3" d="M164 50 H174"/>' +
        '<rect x="174" y="20" width="76" height="60" rx="10" class="box rv d3"/><text x="212" y="45" font-size="12" text-anchor="middle" font-weight="700" class="rv d3">3. Tablo</text><text x="212" y="63" font-size="11" text-anchor="middle" class="mut rv d3">şema kur</text>' +
        '<path class="st dr d4" d="M250 50 H260"/>' +
        '<rect x="260" y="20" width="76" height="60" rx="10" class="boxa rv d4"/><text x="298" y="45" font-size="12" text-anchor="middle" font-weight="700" class="rv d4">4. Ele</text><text x="298" y="63" font-size="11" text-anchor="middle" class="mut rv d4">şıkları</text>' +
        '<text x="170" y="108" font-size="12" text-anchor="middle" class="acc rv d5">Yanlış için tek bozulan koşul yeter.</text></svg>',
      steps: [
        { s: 'İlk adım: Oku ve listele. Metindeki her bilgi bir koşuldur. Cümlenin içine gizlenmiş koşulları da listeye ekle.', on: '.d1' },
        { s: 'İkinci adım: Kesin bilgiden başla. Tek anlamlı bilgileri önce yerleştir. Olumsuz bilgiler de olasılıkları daraltır.', on: '.d2' },
        { s: 'Üçüncü adım: Bir tablo ya da şema kur. Eşleştirmede satır-sütun tablosu, sıralamada bir zincir işini görür.', on: '.d3' },
        { s: 'Dördüncü adım: Şıkları ele.', on: '.d4' },
        { s: 'Şunu unutma: Bir şıkkın yanlış olduğunu göstermek için tek bir koşulu bozması yeter. Doğru olması içinse bütün koşulları sağlamalı.', on: '.d5' }
      ] },

    { t: 'Koşul ifadelerini doğru oku',
      steps: [
        { s: 'Bu sorularda her sözcük önemlidir. Küçük bir fark bütün sıralamayı değiştirir.',
          h: '<table class="an-tbl"><tr class="rv k1"><td>X’i <b>hemen ardından</b> Y izler</td><td>Y, X’in hemen yanında (bitişik)</td></tr>' +
             '<tr class="rv k2"><td>X, Y’den <b>öndedir</b></td><td>aralarında başkaları olabilir</td></tr>' +
             '<tr class="rv k3"><td>X ve Y <b>yan yanadır</b></td><td>bitişik ama sıra belli değil: XY ya da YX</td></tr>' +
             '<tr class="rv k4"><td>Önceki güne göre <b>artmıştır</b></td><td>ilk gün karşılaştırmaya girmez</td></tr></table>' },
        { s: '“Hemen ardından” varsa iki öğe bitişiktir. “Hemen” sözcüğü yoksa aralarında başkaları da olabilir.', on: '.k1,.k2' },
        { s: '“Yan yana” dendiğinde hangisinin önce geldiği belli değildir. İki durumu da denemelisin.', on: '.k3' },
        { s: '“Önceki güne göre artmış” deniyorsa, tablodaki ilk günün önceki günü olmadığı için o gün sayılmaz.', on: '.k4' },
        { s: 'Ve en meşhur tuzak şu. Burada çok dikkat et, LGS sınavında öğrencilerin çoğu burada düştü.',
          h: '<div class="an-trap">“X açıldığında <b>yalnızca bir</b> hat vardı.” → X <b>2. sırada</b>. · “X’ten önce ve sonra açılan hatlar vardı.” → X yalnızca <b>ilk ya da son</b> olamaz.</div>' },
        { s: 'Bir hat açıldığında yalnızca bir hat varsa, o hat ikinci sıradadır. Birinci değil! “Önce ve sonra hat vardı” sözü ise sadece uçları eler.' }
      ] },

    { t: 'Koşul sözlerini doğru oku',
      steps: [{ s: 'Koşul ifadeleriyle ilgili dört yorum var. Her biri için Doğru ya da Yanlış seç.' }],
      ia: {
        tip: 'dogruyanlis',
        q: '<p>Her yorum için karar ver.</p>',
        ifadeler: [{ m: '“Ece, Fatih’ten öndedir.” bilgisi, Ece ile Fatih’in yan yana olduğunu gösterir.', d: false, a: '“Hemen” yok; araya başkaları girebilir.' }, { m: '“Gül ile Can yan yanadır.” bilgisinde iki sıra da denenmelidir: Gül-Can ya da Can-Gül.', d: true, a: 'Yan yana olmak sırayı belirlemez.' }, { m: '“Bu hat açıldığında yalnızca bir hat vardı.” bilgisi, hattın ikinci sırada açıldığını gösterir.', d: true, a: 'Önceden bir hat varmış: bu hat ikinci.' }, { m: '“Öncesinde ve sonrasında açılan hatlar vardı.” bilgisi, hattın tam ortada olduğunu gösterir.', d: false, a: 'Yalnızca ilk ve son sırayı eler.' }],
        hint: 'Her sözcüğü tart: “hemen” var mı, “yan yana” sırayı söylüyor mu, “yalnızca bir hat vardı” sözü kendisini de sayıyor mu?',
        whyV: 'Önündedir sözü bitişiklik bildirmez, yan yana sözü de sırayı belirlemez. Açıldığında bir hat bulunan hat ikincidir; önce ve sonra hat bulunması ise yalnızca iki ucu eler.',
        why: '“Önündedir” bitişiklik bildirmez, “yan yana” sırayı belirlemez. Açıldığında bir hat bulunan hat ikincidir; önce ve sonra hat bulunması ise yalnızca iki ucu eler.'
      } },

    { t: 'Sıralama: zinciri kur',
      base: '<svg class="an-svg" viewBox="0 0 340 130" role="img" aria-label="Dört kişilik sıralama: Ali, Defne, Can, Banu">' +
        '<text x="50" y="18" font-size="12" text-anchor="middle" class="mut">1.</text><text x="130" y="18" font-size="12" text-anchor="middle" class="mut">2.</text><text x="210" y="18" font-size="12" text-anchor="middle" class="mut">3.</text><text x="290" y="18" font-size="12" text-anchor="middle" class="mut">4.</text>' +
        '<rect x="15" y="26" width="70" height="44" rx="9" class="box"/><rect x="95" y="26" width="70" height="44" rx="9" class="box"/><rect x="175" y="26" width="70" height="44" rx="9" class="box"/><rect x="255" y="26" width="70" height="44" rx="9" class="box"/>' +
        '<text x="290" y="54" font-size="15" text-anchor="middle" font-weight="700" class="acc rv q1">Banu</text>' +
        '<text x="50" y="54" font-size="15" text-anchor="middle" font-weight="700" class="rv q3">Ali</text>' +
        '<text x="130" y="54" font-size="15" text-anchor="middle" font-weight="700" class="rv q3">Defne</text>' +
        '<text x="210" y="54" font-size="15" text-anchor="middle" font-weight="700" class="rv q4">Can</text>' +
        '<path class="st2 dr q2" d="M50 76 Q90 100 130 76"/><text x="90" y="112" font-size="11" text-anchor="middle" class="mut rv q2">hemen ardından</text></svg>',
      steps: [
        { s: 'Bir örnekle deneyelim. Ali, Banu, Can ve Defne sıraya giriyor. Koşullar şöyle.',
          h: '<div class="an-ex"><span class="an-l">1. Can, Ali’den sonradır.</span><span class="an-l">2. Banu en sondadır.</span><span class="an-l">3. Defne, Ali’nin hemen ardındadır.</span></div>' },
        { s: 'Önce kesin bilgiden başlıyoruz: Banu en sonda. Onu dördüncü kutuya koyalım.', on: '.q1' },
        { s: 'Defne, Ali’nin hemen ardında. Yani bu ikisi bitişik bir çift.', on: '.q2' },
        { s: 'Ali ikinci olsaydı Defne üçüncü olurdu ve Can’a, Ali’den sonra yer kalmazdı. O hâlde Ali birinci, Defne ikinci.', on: '.q3' },
        { s: 'Geriye üçüncü sıra kalıyor, orası da Can’ın. Bütün koşulları bir kez daha denetle: hepsi sağlanıyor.', on: '.q4' }
      ] },

    { t: 'Zinciri kur ve sırala',
      steps: [{ s: 'Koşullara göre beş kişiyi baştan sona sırala. Kesin bilgiden başla.' }],
      ia: {
        tip: 'sirala',
        q: '<p>Ayşe, Burak, Cansu, Deniz ve Emre bir sırada bekliyor.<br>· Emre en öndedir.<br>· Cansu, Burak’ın hemen ardındadır.<br>· Deniz, Ayşe’den sonradır ama en sonda değildir.<br>· Burak, Deniz’den sonradır.</p>',
        ust: 'en önde',
        alt: 'en sonda',
        ogeler: ['Emre', 'Ayşe', 'Deniz', 'Burak', 'Cansu'],
        hint: 'Önce Emre’yi yerleştir. Sonra “hemen ardında” olan çifti tek bir blok gibi düşün ve “sonradır” bilgileriyle bir zincir kur.',
        why: 'Ayşe, Deniz’den; Deniz de Burak’tan önce geliyor. Cansu, Burak’ın hemen ardında. Zincir Ayşe, Deniz, Burak, Cansu; başa Emre gelince sıra tamamlanır. Deniz sonda olmadığı için bu koşul da sağlanıyor.'
      } },

    { t: 'Ara soru', cp: {
        q: '<p>Ece, Fatih, Gül ve Halil bir sırada bekliyor.</p><p>· Gül, Fatih’in hemen önündedir.<br>· Halil ilk sırada değildir.<br>· Ece, Halil’den sonradır.</p><p>Bu bilgilere göre aşağıdakilerden hangisi <b>kesinlikle doğrudur</b>?</p>',
        c: ['Ece ilk sıradadır.', 'Fatih ikinci sıradadır.', 'Halil son sıradadır.', 'Gül, Ece’nin hemen önündedir.'], a: 'B',
        hint: 'Halil ikinci sırada olursa Gül ile Fatih’e bitişik iki boş yer kalıyor mu? Dene ve gör.',
        why: 'Halil ilk olamaz, Ece de ondan sonra gelmeli. Halil ikinci olursa Gül-Fatih çiftine bitişik yer kalmaz. O hâlde sıra Gül, Fatih, Halil, Ece; Fatih ikinci sıradadır.' },
      steps: [{ s: 'Şimdi sıra sende. Kutuları kafanda kur, sonra İşaretle’ye bas.' }] },

    { t: 'Eşleştirme: kesin mi, olabilir mi?',
      base: '<svg class="an-svg" viewBox="0 0 340 130" role="img" aria-label="Kesin doğru, olabilir, kesin yanlış">' +
        '<rect x="4" y="20" width="104" height="70" rx="10" class="boxa rv m1"/><text x="56" y="48" font-size="13" text-anchor="middle" font-weight="700" class="rv m1">Kesin doğru</text><text x="56" y="68" font-size="11" text-anchor="middle" class="mut rv m1">her durumda</text>' +
        '<rect x="118" y="20" width="104" height="70" rx="10" class="box rv m2"/><text x="170" y="48" font-size="13" text-anchor="middle" font-weight="700" class="rv m2">Olabilir</text><text x="170" y="68" font-size="11" text-anchor="middle" class="mut rv m2">bazı durumda</text>' +
        '<rect x="232" y="20" width="104" height="70" rx="10" class="box rv m3"/><text x="284" y="48" font-size="13" text-anchor="middle" font-weight="700" class="rv m3">Kesin yanlış</text><text x="284" y="68" font-size="11" text-anchor="middle" class="mut rv m3">hiçbir durumda</text>' +
        '<text x="170" y="118" font-size="12" text-anchor="middle" class="acc rv m4">Olabilir olan şık, kesin sorusunda elenir.</text></svg>',
      steps: [
        { s: 'Eşleştirme sorularında kişileri satırlara, özellikleri sütunlara yaz. Bir hücreye tik koyunca aynı satır ve sütundakilere çarpı koy.' },
        { s: 'Bazen bütün bilgileri kullansan bile birden çok yerleşim mümkün kalır. İşte o zaman bu üç kavram çok önemli.' },
        { s: 'Kesinlikle doğru olan, her yerleşimde değişmeyen bilgidir.', on: '.m1' },
        { s: 'Bazı yerleşimlerde doğru, bazılarında yanlış olan bilgi ise “olabilir” durumundadır.', on: '.m2' },
        { s: 'Kesinlikle yanlış olan da hiçbir yerleşimde doğru olamayan yargıdır.', on: '.m3' },
        { s: 'Kesin soruluyorsa olabilir olan şık elenir. Ve dikkat: Yargının bir parçası doğru diye tamamı kesin olmaz.', on: '.m4',
          h: '<div class="an-trap">Puan tablosu tuzağı: Tablo maç sonuçlarını tek tek vermez. Berabere biten maç sayısı = toplam beraberlik ÷ 2.</div>' }
      ] },

    { t: 'Tablosuz eşleştirme',
      steps: [{ s: 'Bilgileri kullanarak her kişiyi uğraştığı etkinlikle eşleştir. Tek seçeneği kalan kişiden başla.' }],
      ia: {
        tip: 'eslestir',
        q: '<p>Kerem, Lale, Mert ve Nil’in her biri resim, müzik, dans ve tiyatrodan farklı birine katılıyor.<br>· Lale; resim, müzik ve dansa katılmıyor.<br>· Mert ne dansa ne de resme katılıyor.<br>· Nil dansa katılmıyor.</p>',
        solBaslik: 'Kişi',
        sagBaslik: 'Etkinlik',
        sol: ['Kerem', 'Lale', 'Mert', 'Nil'],
        sag: ['dans', 'tiyatro', 'müzik', 'resim'],
        hint: 'Lale’nin tek seçeneği kalıyor. Onu yerleştirince Mert’e kaç seçenek kalır? Sonra Nil’e geç.',
        why: 'Lale yalnızca tiyatroya katılabilir. Mert dans ve resme katılmıyor, tiyatro da dolu: Mert müzik. Nil dansa katılmıyor, geriye resim kalıyor. Kerem’e de dans düşüyor.'
      } },

    { t: 'Ara soru', cp: {
        q: '<p>Ada, Barış ve Cem’in her biri yüzme, tenis ve satrançtan farklı birini yapıyor.</p><p>· Ada yüzme yapmıyor.<br>· Barış tenis oynamıyor.<br>· Cem satranç oynamıyor.</p><p>Bu bilgilere göre aşağıdakilerden hangisi <b>kesinlikle yanlıştır</b>?</p>',
        c: ['Ada tenis oynar.', 'Cem yüzme yapar.', 'Barış satranç oynar.', 'Ada tenis oynar, Barış yüzme yapar.'], a: 'D',
        hint: 'Bir tablo kur: Kaç farklı yerleşim mümkün? Her şıkkı bu yerleşimlerde dene; “olabilir” olanlar kesin yanlış değildir.',
        why: 'İki yerleşim mümkün: Ada tenis, Barış satranç, Cem yüzme ya da Ada satranç, Barış yüzme, Cem tenis. A, B, C birinde doğru, yani olabilir. D’de Ada tenis, Barış yüzme olursa Cem’e satranç kalır; bu yasak. D hiçbir yerleşimde doğru değildir.' },
      steps: [{ s: 'Tablonu kur, olası bütün yerleşimleri bul.' }] },

    { t: 'Grafik türleri',
      base: '<table class="an-tbl"><tr><th>Grafik</th><th>Ne gösterir?</th><th>Dikkat</th></tr>' +
        '<tr class="rv f1"><td><b>Sütun</b></td><td>miktarları karşılaştırır</td><td>birim ve eksen başlangıcı</td></tr>' +
        '<tr class="rv f2"><td><b>Çizgi</b></td><td>zaman içindeki değişimi</td><td>“düzenli arttı” için her adım artmalı</td></tr>' +
        '<tr class="rv f3"><td><b>Daire</b></td><td>bütünün yüzde olarak parçaları</td><td>toplamlar farklıysa yüzde yetmez</td></tr>' +
        '<tr class="rv f4"><td><b>Değişim (+/−)</b></td><td>önceki döneme göre artış, azalış</td><td>miktarın kendisini göstermez!</td></tr></table>',
      steps: [
        { s: 'Grafik sorularında ilk iş, grafiğin ne gösterdiğini anlamaktır: miktar mı, oran mı, değişim mi?' },
        { s: 'Sütun grafiği miktarları karşılaştırır. Eksen biriminin bin mi, ton mu, yüzde mi olduğuna bak.', on: '.f1' },
        { s: 'Çizgi grafiği zaman içindeki değişimi gösterir. “Düzenli arttı” diyebilmek için her ara adımın artması gerekir.', on: '.f2' },
        { s: 'Daire grafiği bir bütünün parçalarını yüzde olarak verir. İki daire grafiğinin toplamları farklıysa yüzdelerle sayıları karşılaştıramazsın.', on: '.f3' },
        { s: 'Değişim grafiği ise sadece artışı ya da azalışı gösterir. Miktarın kendisini göstermez. Bunu sakın unutma.', on: '.f4' }
      ] },

    { t: 'Değişim grafiği tuzağı',
      base: '<svg class="an-svg" viewBox="0 0 340 180" role="img" aria-label="Kıtaların orman alanındaki değişim: K artı 4, L eksi 3, M artı 1">' +
        '<path class="st" d="M30 90 H320"/><text x="22" y="94" font-size="11" text-anchor="end" class="mut">0</text>' +
        '<rect x="60" y="42" width="50" height="48" class="boxa rv g1"/><text x="85" y="36" font-size="13" text-anchor="middle" font-weight="700" class="rv g1">+4</text><text x="85" y="170" font-size="13" text-anchor="middle" class="rv g1">K</text>' +
        '<rect x="145" y="90" width="50" height="36" class="box rv g1"/><text x="170" y="142" font-size="13" text-anchor="middle" font-weight="700" class="rv g1">−3</text><text x="170" y="170" font-size="13" text-anchor="middle" class="rv g1">L</text>' +
        '<rect x="230" y="78" width="50" height="12" class="boxa rv g1"/><text x="255" y="72" font-size="13" text-anchor="middle" font-weight="700" class="rv g1">+1</text><text x="255" y="170" font-size="13" text-anchor="middle" class="rv g1">M</text>' +
        '<text x="170" y="16" font-size="12" text-anchor="middle" class="mut">Orman alanındaki değişim (milyon hektar)</text></svg>',
      steps: [
        { s: 'Bir değişim grafiğine bakalım. Üç kıtanın orman alanındaki değişim verilmiş.', on: '.g1' },
        { s: 'Bu grafikten ne okuyabiliriz? K ve M’de orman alanı artmış, L’de azalmış. Bu kadar.' },
        { s: 'Ama “K’nin orman alanı L’ninkinden fazladır” diyebilir miyiz? Hayır! Grafik alanın kendisini göstermiyor ki.',
          h: '<div class="an-trap">Değişim grafiğinden <b>miktar</b> bulunamaz. “K’deki orman alanı L’dekinden fazladır.” → <b>ulaşılamaz</b>.</div>' },
        { s: 'Benzer bir tuzak daha var. Tek bir yıla ait daire grafiği, zaman içindeki değişimi göstermez. “Yıldan yıla düşmektedir” şıkkına ulaşılamaz.',
          h: '<div class="an-trap">Tek zamanlı oran grafiği → “yıldan yıla azalıyor” denemez.</div>' }
      ] },

    { t: 'Değişim grafiğini oku',
      steps: [{ s: 'Grafik, ağaç sayısının geçen yıla göre değişimini gösteriyor. Ağaç sayısı artan ilçelerin hepsine dokun, sonra Kontrol et’e bas.' }],
      ia: {
        tip: 'gorselsec',
        q: '<p>Grafik, dört ilçedeki ağaç sayısının <b>geçen yıla göre değişimini</b> gösteriyor. Ağaç sayısı <b>artan</b> ilçelere dokun.</p>',
        svg: '<svg class="an-svg" viewBox="0 0 340 214" role="group" aria-label="Dört ilçede ağaç sayısının geçen yıla göre değişimi"><text x="10" y="16" font-size="13" class="mut">değişim (bin ağaç)</text><path class="ln" d="M28 30 H332"/><text x="24" y="34" font-size="12" text-anchor="end" class="mut">+40</text><path class="ln" d="M28 70 H332"/><text x="24" y="74" font-size="12" text-anchor="end" class="mut">+20</text><path class="ln" d="M28 150 H332"/><text x="24" y="154" font-size="12" text-anchor="end" class="mut">−20</text><path class="ln" d="M28 190 H332"/><text x="24" y="194" font-size="12" text-anchor="end" class="mut">−40</text><text x="24" y="114" font-size="12" text-anchor="end" class="mut">0</text><path class="st2" d="M28 110 H332" pointer-events="none"/><g data-b="ova" aria-label="Ova ilçesi, değişim +30"><rect x="34" y="26" width="64" height="168" rx="9" class="box" fill-opacity="0.55"/><rect x="46" y="50" width="40" height="60" rx="3" class="acc"/><text x="66" y="44" font-size="14" text-anchor="middle">+30</text><text x="66" y="186" font-size="15" text-anchor="middle" font-weight="700">Ova</text></g><g data-b="dere" aria-label="Dere ilçesi, değişim −20"><rect x="110" y="26" width="64" height="168" rx="9" class="box" fill-opacity="0.55"/><rect x="122" y="110" width="40" height="40" rx="3" class="acc"/><text x="142" y="167" font-size="14" text-anchor="middle">−20</text><text x="142" y="186" font-size="15" text-anchor="middle" font-weight="700">Dere</text></g><g data-b="tepe" aria-label="Tepe ilçesi, değişim +10"><rect x="186" y="26" width="64" height="168" rx="9" class="box" fill-opacity="0.55"/><rect x="198" y="90" width="40" height="20" rx="3" class="acc"/><text x="218" y="84" font-size="14" text-anchor="middle">+10</text><text x="218" y="186" font-size="15" text-anchor="middle" font-weight="700">Tepe</text></g><g data-b="kaya" aria-label="Kaya ilçesi, değişim 0"><rect x="262" y="26" width="64" height="168" rx="9" class="box" fill-opacity="0.55"/><rect x="274" y="108" width="40" height="4" rx="2" class="acc"/><text x="294" y="102" font-size="14" text-anchor="middle">0</text><text x="294" y="186" font-size="15" text-anchor="middle" font-weight="700">Kaya</text></g><path class="st2" d="M28 110 H332" pointer-events="none"/></svg>',
        dogru: ['ova', 'tepe'],
        hint: 'Sıfır çizgisinin üstü artış, altı azalış demek. Değişmeyen bir değer ne artıştır ne azalış.',
        why: 'Ova ve Tepe’de çubuk sıfırın üstünde: artış. Dere’de azalış var, Kaya’da ise değişim yok. Grafik değişimi gösterir; hangi ilçede daha çok ağaç olduğunu buradan söyleyemeyiz.'
      } },

    { t: 'Oran, yüzde, başına düşen',
      steps: [
        { s: 'Yüzde gördüğünde onu sayıya çevir. Çünkü yüzdeler farklı olsa da sayılar eşit çıkabilir.', v: 'Yüzde gördüğünde onu sayıya çevir. Çünkü yüzdeler farklı olsa da sayılar eşit çıkabilir.',
          h: '<div class="an-ex"><span class="an-l rv y1">160 öğrencinin %45’i = 72</span><span class="an-l rv y1">240 öğrencinin %30’u = 72</span></div>' },
        { s: '160 öğrencinin yüzde 45’i 72 eder. 240 öğrencinin yüzde 30’u da 72. Yüzdeler farklı, sayılar aynı.', v: 'Yüz altmış öğrencinin yüzde kırk beşi yetmiş iki eder. İki yüz kırk öğrencinin yüzde otuzu da yetmiş iki. Yüzdeler farklı, sayılar aynı.', on: '.y1' },
        { s: '“Başına düşen” dendiğinde de bölme yaparsın. Dekar başına ürün, ürünün alana bölümüdür.',
          h: '<div class="an-rule"><b>Başına düşen = bölme.</b> Üretici başına alan = alan ÷ üretici sayısı · Dekar başına ürün = ürün ÷ alan</div>' },
        { s: 'Toplamı büyük olanın oranı da büyük olmak zorunda değil. “Alan büyüdükçe ürün artar” gibi bir genellemeyi tablodaki tek bir ters örnek çürütür.' },
        { s: 'Bir de şuna dikkat: İki tabloda aynı sayının görünmesi, bunların aynı kişiler olduğunu göstermez.' }
      ] },

    { t: 'Dekar başına farkı bul',
      steps: [{ s: 'İki köyde dekar başına alınan ürünü hesapla ve farkı sayı doğrusunda işaretle.' }],
      ia: {
        tip: 'kaydir',
        q: '<p>Çamlı köyünde 40 dekar seradan 200 ton, Pınarlı köyünde 30 dekar seradan 210 ton ürün alındı. Pınarlı’da dekar başına alınan ürün, Çamlı’dakinden <b>kaç ton fazladır</b>?</p>',
        min: 0,
        max: 5,
        adim: 0.5,
        cevap: 2,
        tol: 0,
        birim: 'ton',
        etiket: [0, 1, 2, 3, 4, 5],
        hint: 'Başına düşen bölme demektir: Önce her köyde ürünü alana böl, sonra iki sonucu karşılaştır.',
        why: 'Çamlı’da 200 bölü 40, dekar başına 5 ton. Pınarlı’da 210 bölü 30, dekar başına 7 ton. Fark 2 ton. Toplam ürün yakın görünse de dekar başına düşen ürün çok farklı.'
      } },

    { t: 'Ara soru', cp: {
        q: '<table class="an-tbl"><tr><th>Köy</th><th>Sera alanı (dekar)</th><th>Ürün (ton)</th></tr><tr><td>K</td><td>40</td><td>200</td></tr><tr><td>L</td><td>50</td><td>150</td></tr><tr><td>M</td><td>20</td><td>120</td></tr></table><p>Bu tabloya göre aşağıdaki yargılardan hangisine <b>ulaşılabilir</b>?</p>',
        c: ['Sera alanı en büyük olan köyde ürün de en fazladır.', 'Dekar başına en çok ürün M köyünde alınmıştır.', 'Sera alanı büyüdükçe ürün miktarı artmaktadır.', 'K köyünde dekar başına alınan ürün, L köyündekinin üç katıdır.'], a: 'B',
        hint: 'Dekar başına ürün için her satırda ürünü alana böl. Genellemeleri tek bir ters örnekle dene.',
        hintV: 'Dekar başına ürün için her satırda ürünü alana böl. Genellemeleri tek bir ters örnekle dene.',
        why: 'Dekar başına ürün: K’de 200 ÷ 40 = 5, L’de 150 ÷ 50 = 3, M’de 120 ÷ 20 = 6 ton. En fazla M’dedir. Alanı en büyük L’nin ürünü K’den az olduğu için A ve C çürür; 5, 3’ün üç katı değildir.',
        whyV: 'Dekar başına ürün: K’de iki yüzün kırka bölümü beş, L’de yüz ellinin elliye bölümü üç, M’de yüz yirminin yirmiye bölümü altı ton. En fazla M’dedir. Alanı en büyük olan L’nin ürünü K’den az olduğu için A ve C çürür; beş de üçün üç katı değildir.' },
      steps: [{ s: 'Hesap yapma zamanı. Başına düşeni bul, genellemeleri dene.' }] },

    { t: '“Hangisi olabilir?” tablo seçme',
      steps: [
        { s: 'Bilgilere uyan tabloyu ya da grafiği seçme soruları artık her yıl geliyor. Burada şıkları koşullarla bir matris gibi düşün.',
          h: '<table class="an-tbl"><tr><th>Şık</th><th>Koşul 1</th><th>Koşul 2</th><th>Koşul 3</th></tr>' +
             '<tr class="rv t1"><td>A</td><td>✓</td><td>✓</td><td>✓</td></tr>' +
             '<tr class="rv t2"><td>B</td><td class="an-bad-t">✗</td><td>✓</td><td>✓</td></tr>' +
             '<tr class="rv t2"><td>C</td><td>✓</td><td class="an-bad-t">✗</td><td>✓</td></tr>' +
             '<tr class="rv t2"><td>D</td><td>✓</td><td>✓</td><td class="an-bad-t">✗</td></tr></table>' },
        { s: 'Koşulları önce bir sıralamaya ya da sayılara çevir. Sonra en hızlı denetlenen koşuldan başla.' },
        { s: 'Gördün mü? Her yanlış şık yalnızca bir koşulu bozuyor. İlk iki koşula bakıp duran öğrenci, yanlış şıkkı işaretler.', on: '.t2' },
        { s: 'Bu yüzden kalan şıkta bütün koşulları sonuna kadar denetle.', on: '.t1', mk: '.t1 td' },
        { s: 'Bir de “değişmedi” tuzağı var. Bir değer değişmediyse, o yıl ne artış ne azalış cümlesine girer.',
          h: '<div class="an-trap">“Değişmedi” ne artıştır ne azalıştır. · Her koşulun hangi günleri kapsadığını ayrıca belirle.</div>' }
      ] },

    { t: 'Kuralı görsele uygulama',
      steps: [
        { s: 'Bu sorularda bir kural tablosu ve bir veri tablosu verilir. Şıklarda da uygulamanın çizimi vardır.',
          h: '<table class="an-tbl"><tr><th>Rüzgâr (knot)</th><th>Uygulama</th></tr><tr><td>21–25</td><td>ana yelken yarım</td></tr><tr class="rv w1"><td>26–30</td><td>ana yelken tam kapalı</td></tr></table>' },
        { s: 'İlk iş her değeri doğru aralığa yerleştirmek. 25 değeri 21 ile 25 aralığındadır, 26 ile 30 aralığında değil.', v: 'İlk iş her değeri doğru aralığa yerleştirmek. Yirmi beş değeri, yirmi bir ile yirmi beş aralığındadır, yirmi altı ile otuz aralığında değil.' },
        { s: 'Farklı değerler aynı aralığa düşebilir. 29 ve 26 knot ikisi de aynı aralıkta, yani iki saatteki çizim aynı olmalı.', v: 'Farklı değerler aynı aralığa düşebilir. Yirmi dokuz ve yirmi altı knot ikisi de aynı aralıkta, yani iki saatteki çizim aynı olmalı.', on: '.w1' },
        { s: 'Görselde birden çok parça varsa her parçayı ayrı denetle. Bir parçası doğru çizilmiş şık doğru şık değildir.',
          h: '<div class="an-trap">Flok doğru, ana yelken yanlış → şık <b>yanlış</b>. Görselin her parçasını ayrı denetle.</div>' },
        { s: 'Afiş ve kural soruları da böyle çözülür. Ölçütleri tek tek işaretle. “Korumak için” amaç, “kolaylaştırdığı için” sebep bildirir; ikisini karıştırma.' }
      ] },

    { t: 'Değeri aralığına yerleştir',
      steps: [{ s: 'Kurala göre her saatteki rüzgâr değerini doğru uygulamanın kutusuna yerleştir. Sınır değerlere dikkat!' }],
      ia: {
        tip: 'grup',
        q: '<p>Kural: <b>0–20 knot</b> yelken tam açık · <b>21–25 knot</b> ana yelken yarım · <b>26–30 knot</b> ana yelken tam kapalı. Her ölçümü uygun kutuya yerleştir.</p>',
        gruplar: ['Tam açık', 'Yarım', 'Tam kapalı'],
        ogeler: [{ m: '09.00 · 18 knot', g: 0 }, { m: '10.00 · 25 knot', g: 1 }, { m: '11.00 · 26 knot', g: 2 }, { m: '12.00 · 21 knot', g: 1 }, { m: '13.00 · 30 knot', g: 2 }, { m: '14.00 · 20 knot', g: 0 }, { m: '15.00 · 29 knot', g: 2 }],
        hint: 'Her değeri tek tek aralığına yerleştir: 25 hangi aralığın içinde, 26 hangisinin? 20 ile 21’i de karıştırma.',
        why: '18 ve 20 tam açık; 21 ve 25 yarım; 26, 29 ve 30 tam kapalı. Farklı değerler aynı aralığa düşebilir; sınırdaki 25 ile 26 ise farklı uygulamalara gider.'
      } },

    { t: 'Şifre, hareket ve son kontrol',
      steps: [
        { s: 'Şifre sorularında kuralı önce verilen örnekte dene. Sonra harf harf uygula. I ile İ, O ile Ö gibi harfleri karıştırma.', v: 'Şifre sorularında kuralı önce verilen örnekte dene. Sonra harf harf uygula. Noktasız ı ile noktalı i, o ile ö gibi harfleri karıştırma.' },
        { s: 'Hareket sorularında her komuttan sonra konumu ve yönü bir kenara yaz. Tur sorularında çeyrek tur dörtte bir, yarım tur ikide birdir.' },
        { s: 'Ve son olarak, işaretlemeden önce şu kontrol listesinden geç.',
          h: '<div class="an-ex"><span class="an-l rv s1">✓ Soru kökü: olabilir mi, kesinlikle mi, söylenemez mi?</span>' +
             '<span class="an-l rv s2">✓ Grafik miktar mı, oran mı, değişim mi? Birim ne?</span>' +
             '<span class="an-l rv s3">✓ Şıktaki yargının her parçası veriyle destekleniyor mu?</span>' +
             '<span class="an-l rv s4">✓ Veride olmayan neden, zaman ya da kişi bilgisi var mı?</span>' +
             '<span class="an-l rv s5">✓ Seçtiğin şık bütün koşulları sağlıyor mu?</span></div>' },
        { s: 'Soru kökünü kontrol et, grafiğin neyi gösterdiğine bak.', on: '.s1,.s2' },
        { s: 'Şıktaki yargının her parçasını veriyle karşılaştır. Veride olmayan bir neden ya da değişim varsa o yargıya ulaşılamaz.', on: '.s3,.s4' },
        { s: 'Son olarak seçtiğin şıkta bütün koşulları bir kez daha tara.', on: '.s5' },
        { s: 'Süper! Bu sorular sabır ister ama yöntemi bilen için çok güvenli puandır. Hadi pratik zamanı!' }
      ] }
  ]
};
