/* Adım Adım Anlatım · Türkçe · Paragrafın Yapısı ve Anlatım (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['tr-paryapi'] = {
  title: 'Paragrafın Yapısı ve Anlatım',
  desc: 'Giriş cümlesi, akışı bozan cümle, cümle ekleme ve sıralama, mantıksal tutarlılık, anlatım biçimleri, düşünceyi geliştirme yolları ve anlatım özellikleri; LGS’nin “sözcük var, yapı yok” tuzaklarıyla.',
  ozet: [
    'Giriş cümlesi tek başına anlaşılır; “bu, şu, böyle, onlar” gibi gönderme sözcüğü, “çünkü, ama, üstelik” gibi bağlayıcı ya da önceki bir şeye işaret eden “de/da” taşımaz.',
    'Akışı bozan cümle çoğunlukla aynı sözcükleri taşır ama konunun başka bir yönüne kayar. Çıkarınca önceki ve sonraki cümle pürüzsüz bağlanmalıdır.',
    'Cümle eklerken gönderme sözcüğünün işaret ettiği şeyi bul; cümle onun hemen arkasına gelir ve sonraki cümleye de dayanak olmalıdır.',
    'Mantıksal tutarlılıkta önce metindeki kısıtı (karanlık, ışık arkadan vuruyor) bul, sonra onu çiğneyen şıkkı ara.',
    'Anlatım biçimleri: açıklayıcı (bilgi verir), tartışmacı (karşı görüşü çürütür), öyküleyici (olay, kişi, zaman), betimleyici (sözcüklerle resim çizer).',
    'Düşünceyi geliştirme yolları: tanımlama, örneklendirme, karşılaştırma (“daha, göre” olmadan da olur), benzetme, tanık gösterme, sayısal veri. Niteleme ve benzetme tanım değildir.',
    'Sözcük var, yapı yok: metinde “soru” sözcüğü geçmesi soru cümlesi olduğunu göstermez. Yaşanmış anı, ne kadar duygulu olsa da hayalî değildir.',
    'Yalınlık süs yok demektir, duruluk fazlalık yok demektir. “Geri iade etmek” duru değildir.'
  ],
  scenes: [
    { t: 'Paragrafın üç bölümü',
      base: '<svg class="an-svg" viewBox="0 0 340 196" role="img" aria-label="Paragraf giriş, gelişme ve sonuç bölümlerinden oluşur">' +
        '<rect x="20" y="8" width="300" height="46" rx="10" class="boxa rv g1"/><text x="170" y="29" font-size="15" text-anchor="middle" font-weight="700" class="rv g1">Giriş</text><text x="170" y="46" font-size="11" text-anchor="middle" class="mut rv g1">konuyu tanıtır, tek başına anlaşılır</text>' +
        '<path class="st dr g2" d="M170 54 V72"/>' +
        '<rect x="20" y="72" width="300" height="56" rx="10" class="box rv g2"/><text x="170" y="96" font-size="15" text-anchor="middle" font-weight="700" class="rv g2">Gelişme</text><text x="170" y="114" font-size="11" text-anchor="middle" class="mut rv g2">düşünce açıklanır, örneklenir, desteklenir</text>' +
        '<path class="st dr g3" d="M170 128 V146"/>' +
        '<rect x="20" y="146" width="300" height="44" rx="10" class="box rv g3"/><text x="170" y="166" font-size="15" text-anchor="middle" font-weight="700" class="rv g3">Sonuç</text><text x="170" y="182" font-size="11" text-anchor="middle" class="mut rv g3">varılan yargı, çoğu zaman ana düşünce</text></svg>',
      steps: [
        { s: 'Merhaba! Bu derste paragrafın nasıl kurulduğuna ve nasıl anlatıldığına bakacağız.' },
        { s: 'Paragraf, birbirine anlamca bağlı cümlelerden oluşur. Her cümle aynı ana düşünceye hizmet eder ve bir öncekine bağlanır.' },
        { s: 'İlk bölüm giriş. Burada konu tanıtılır.', on: '.g1' },
        { s: 'Gelişme bölümünde düşünce açıklanır, örneklerle desteklenir.', on: '.g2' },
        { s: 'Sonuç bölümünde de varılan yargı söylenir. Ana düşünce çoğu zaman buradadır.', on: '.g3' }
      ] },

    { t: 'Giriş cümlesini tanı',
      steps: [
        { s: 'Giriş cümlesinin en önemli özelliği şu: Kendinden önce bir cümle varmış izlenimi vermez. Tek başına anlaşılır.' },
        { s: 'Şimdi şu cümlelere bir bakalım.',
          h: '<table class="an-tbl"><tr class="rv i1"><td><span class="an-w">Bu yüzden</span> eski çarşılar korunmalıdır.</td><td class="an-bad-t">giriş olamaz</td></tr>' +
             '<tr class="rv i2"><td><span class="an-w">Onlar</span> da yönlerini yıldızlardan bulur.</td><td class="an-bad-t">giriş olamaz</td></tr>' +
             '<tr class="rv i3"><td>Kuşlar <span class="an-w">da</span> yıldızlardan yararlanır.</td><td class="an-bad-t">giriş olamaz</td></tr>' +
             '<tr class="rv i4"><td>Bir kentin hafızası en çok eski çarşılarında yaşar.</td><td class="an-ok-t">giriş ✓</td></tr></table>' },
        { s: '“Bu yüzden” bir bağlayıcıdır. Bir şeyin sonucunu söylüyor, demek ki öncesinde bir neden anlatılmış.', v: 'Bu yüzden sözü bir bağlayıcıdır. Bir şeyin sonucunu söylüyor, demek ki öncesinde bir neden anlatılmış.', on: '.i1' },
        { s: '“Onlar” kimler? Bilmiyoruz. Gönderme sözcüğü taşıyan cümle de giriş olamaz.', on: '.i2' },
        { s: 'Buradaki “de” bağlacı da önceden başka bir şeyin anlatıldığını gösterir.', on: '.i3' },
        { s: 'Son cümle ise tek başına anlaşılıyor ve konuyu geniş bir yargıyla tanıtıyor. İşte giriş cümlesi bu.', on: '.i4', mk: '.i4 td' }
      ] },

    { t: 'Düşüncenin akışını bozan cümle',
      steps: [
        { s: 'Akışı bozan cümle sorusunda önce paragrafın konusunu, sonra konunun hangi yönünün anlatıldığını bul.' },
        { s: 'Burada çok dikkat et, LGS sınavında en sık düşülen tuzak bu: Bozan cümle çoğu zaman aynı sözcükleri taşır.',
          h: '<div class="an-trap"><b>Aynı sözcükler, aynı yön değildir.</b> “Şairlerin ilk kitapları önemlidir.” diye başlayan metinde bir cümle “şiir kitapları” ve “önemlidir” sözcüklerini taşıyıp kitapların <b>sayısına</b> kayıyordu.</div>' },
        { s: 'O cümlede de “şiir kitapları” geçiyordu, ama konu ilk kitaptan kitapların sayısına kaymıştı.' },
        { s: 'Kontrol yöntemi çok basit: Şüphelendiğin cümleyi çıkar ve öncesiyle sonrasını birlikte oku.',
          h: '<div class="an-rule"><b>Çıkar ve oku:</b> Önceki ve sonraki cümle birbirine pürüzsüz bağlanıyorsa akışı bozan cümleyi bulmuşsundur.</div>' }
      ] },

    { t: 'Cümle ekleme ve sıralama',
      steps: [
        { s: 'Cümle ekleme sorularında anahtar, eklenecek cümledeki gönderme sözcüğüdür.',
          h: '<div class="an-ex"><span class="an-l">Eklenecek cümle: “<span class="an-w">Bu yolculuklar</span> onun eserlerine de yansıdı.”</span><span class="an-l rv c1">→ Önce yolculukların anıldığı cümleyi bul. Yeni cümle onun <b>hemen arkasına</b> gelir.</span><span class="an-l rv c2">→ Sonraki cümle de yeni cümleye bağlanmalı.</span></div>' },
        { s: '“Bu yolculuklar” diyorsa, metinde yolculuklardan önce söz edilmiş olmalı. Cümleyi o yerin hemen arkasına koyarsın.', on: '.c1' },
        { s: 'Ama iş bitmedi. Eklediğin cümleden sonra gelen cümle de ona bağlanmalı. Cümle iki yöne de bağlanmalıdır.', on: '.c2' },
        { s: 'Sıralama sorularında önce giriş cümlesini bul. Sonra her cümlenin başındaki halkayı, önceki cümlenin sonundaki kavrama bağla.',
          h: '<div class="an-tip">Halka sözcükleri: <b>Onlar</b>, <b>Bu ağırlık</b>, <b>Çünkü</b>… Olay metinlerinde zaman sırasını izle.</div>' },
        { s: 'Bir de dışarıda kalan cümle sorusu var. Dışarıda kalan cümle her zaman konu dışı değildir; olayın henüz gelinmemiş bir aşamasını anlatıyor olabilir.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>(I) Arılar, doğadaki dengenin en önemli bekçilerindendir. (II) Çiçekten çiçeğe dolaşırken bitkilerin tozlaşmasını sağlarlar. (III) Bal, eski çağlardan beri tatlandırıcı olarak kullanılan değerli bir besindir. (IV) Bu tozlaşma sayesinde pek çok meyve ve sebze ürün verir.</p><p>Bu metinde numaralanmış cümlelerden hangisi düşüncenin akışını <b>bozmaktadır</b>?</p>',
        c: ['I', 'II', 'III', 'IV'], a: 'C',
        hint: 'Konu arıların doğadaki görevi. Hangi cümle konunun başka bir yönüne kayıyor? Çıkar ve öncesiyle sonrasını birlikte oku.',
        why: 'III. cümle arılarla ilgili görünse de balın besin olarak kullanılmasına kayıyor. Çıkarınca II’deki tozlaşma ile IV’teki “Bu tozlaşma” pürüzsüz bağlanıyor.',
        whyV: 'Üçüncü cümle arılarla ilgili görünse de balın besin olarak kullanılmasına kayıyor. Çıkarınca ikinci cümledeki tozlaşma ile dördüncü cümledeki bu tozlaşma pürüzsüz bağlanıyor.' },
      steps: [{ s: 'Şimdi sıra sende. Çıkar ve oku yöntemini dene, sonra İşaretle’ye bas.' }] },

    { t: 'Mantıksal tutarlılık',
      steps: [
        { s: 'Bir metindeki bilgiler ve olaylar birbiriyle çelişmemelidir. Buna mantıksal tutarlılık diyoruz.' },
        { s: 'Metnin başında bir kısıt verilir. Mesela ışık arkadan vuruyor, elektrik kesik ya da kişi iyi göremiyor.',
          h: '<div class="an-ex"><span class="an-l">“Arkasından vuran ışık, yüz hatlarını seçmemi engelliyordu.”</span>' +
             '<span class="an-l rv t1"><span class="an-ok-t">Sesindeki titremeden heyecanlandığını anladım.</span> ✓ tutarlı</span>' +
             '<span class="an-l rv t2"><span class="an-ok-t">Ayağını sallamasından sabırsızlandığını sezdim.</span> ✓ tutarlı</span>' +
             '<span class="an-l rv t3"><span class="an-bad-t">Gözlerinden geçen sevinci hemen fark ettim.</span> ✗ kısıtı çiğniyor</span></div>' },
        { s: 'Yüzü göremiyorsa bile sesinden bir duygu çıkarabilir. Bu tutarlı.', on: '.t1' },
        { s: 'Ayak sallaması da görülebilecek bir hareket. Bu da tutarlı.', on: '.t2' },
        { s: 'Ama gözlerindeki sevinci göremez! Yüz hatlarını seçemiyordu, unuttun mu? İşte kısıtı çiğneyen cümle.', on: '.t3' },
        { s: 'Yöntem: Önce kısıtı bul, sonra o kısıtı çiğneyen şıkkı ara.',
          h: '<div class="an-rule"><b>1.</b> Metindeki kısıtı bul. <b>2.</b> Kısıtı çiğneyen şıkkı ara.</div>' }
      ] },

    { t: 'Anlatım biçimleri',
      base: '<div class="an-grid" style="grid-template-columns:repeat(2,1fr)"><div class="rv b1"><b>Açıklayıcı</b>bilgi verir, öğretir<br><small>Uyku, hücrelerin onarıldığı bir dinlenme sürecidir.</small></div>' +
        '<div class="rv b2"><b>Tartışmacı</b>karşı görüşü çürütür<br><small>Bazıları ödevi kaldırmak istiyor. Oysa…</small></div>' +
        '<div class="rv b3"><b>Öyküleyici</b>olay, kişi, zaman<br><small>Bir akşam donmuş ellerle eve döndüm.</small></div>' +
        '<div class="rv b4"><b>Betimleyici</b>sözcüklerle resim çizer<br><small>Kırmızı kiremitli çatılarda güneş parlıyordu.</small></div></div>',
      steps: [
        { s: 'Gelelim anlatım biçimlerine. Dört tane var.' },
        { s: 'Açıklayıcı anlatımda amaç bilgi vermek, bir şeyi öğretmektir.', on: '.b1' },
        { s: 'Tartışmacı anlatımda bir görüş savunulur ve karşı görüş çürütülür. “Oysa, ama” gibi sözler sık geçer.', on: '.b2' },
        { s: 'Öyküleyici anlatımda bir olay vardır. Olayı yaşayan kişiler, bir zaman ve bir yer olur.', on: '.b3' },
        { s: 'Betimleyici anlatımda da sözcüklerle resim çizilir. Renkler, sesler, kokular okurun gözünde canlanır.', on: '.b4' }
      ] },

    { t: 'Tuzak: anlatım biçimini değiştirmek',
      steps: [
        { s: 'Son yıllarda şöyle sorular geliyor: Metin hangi cümleyle devam ettirilirse öyküleyici olur? Ya da biçim değişmez?' },
        { s: 'Öyküleyici olması için şıkta bir olay akışı olmalı. Mesela “Yine bir gün” diye başlayan ve bir kişinin bir şey yaptığı cümle.',
          h: '<div class="an-ex"><span class="an-l"><span class="an-ok-t">Yine bir gün babam bana yeni bir tekerleme öğretti.</span> → olay + kişi ✓</span><span class="an-l"><span class="an-bad-t">Tekerlemeler çocukların dil gelişimini destekler.</span> → yorum</span></div>' },
        { s: 'Açıklayıcı bir metinde ise biçimi bozanlar şunlardır: soru cümlesi, okura “siz” diye seslenmek ve öğüt vermek.',
          h: '<div class="an-trap">Açıklayıcı metni bozanlar: soru cümlesiyle bitmek, “siz” diye seslenmek, “-malısınız” diye öğüt vermek. Doğru şık <b>aynı nesnel, bilgi veren tonu</b> sürdürür.</div>' },
        { s: 'Kısacası metnin biçimini belirle, aynı tonu sürdüren şıkkı seç.' }
      ] },

    { t: 'Düşünceyi geliştirme yolları',
      base: '<table class="an-tbl"><tr><th>Yol</th><th>Örnek</th></tr>' +
        '<tr class="rv d1"><td><b>Tanımlama</b></td><td>Mozaik, renkli taş parçalarıyla yapılan bir süsleme sanatıdır.</td></tr>' +
        '<tr class="rv d2"><td><b>Örneklendirme</b></td><td>Zeugma’daki Çingene Kızı, bu sanatın en bilinen örneklerindendir.</td></tr>' +
        '<tr class="rv d3"><td><b>Karşılaştırma</b></td><td>Basılı kitap, ekranın aksine gözü yormaz.</td></tr>' +
        '<tr class="rv d4"><td><b>Benzetme</b></td><td>Geçmişini bilmeyen toplum, kökleri kesilmiş bir çınar gibidir.</td></tr>' +
        '<tr class="rv d5"><td><b>Tanık gösterme</b></td><td>Yahya Kemal’in “Kökü mazide olan âtiyim.” dizesi de bunu anlatır.</td></tr>' +
        '<tr class="rv d6"><td><b>Sayısal veri</b></td><td>Gıda bitkilerinin dörtte üçü tozlaşmaya muhtaçtır.</td></tr></table>',
      steps: [
        { s: 'Yazar düşüncesini okura kabul ettirmek için bazı yollar kullanır. Tek tek görelim.' },
        { s: 'Tanımlama, bir kavramın ne olduğunu söyler. Genelde “-dır” ekiyle ya da “denir” sözüyle biter.', on: '.d1' },
        { s: 'Örneklendirme, genel bir yargıyı somut bir örnekle açıklar.', on: '.d2' },
        { s: 'Karşılaştırma, iki şeyin benzer ya da farklı yönlerini ortaya koyar.', on: '.d3' },
        { s: 'Benzetme, bir varlığı ortak bir özellik bakımından başka bir varlığa benzetir. Genelde “gibi” geçer.', on: '.d4' },
        { s: 'Tanık gösterme, adı belli birinin sözüne başvurmaktır. Sayısal veri ise oran, istatistik gibi bilgiler verir.', on: '.d5,.d6' }
      ] },

    { t: 'Gizli karşılaştırma ve sahte tanım',
      steps: [
        { s: 'Burada iki tuzak var. Birincisi: Karşılaştırmada her zaman “daha” ya da “göre” geçmez!',
          h: '<div class="an-trap"><b>Örtük karşılaştırma:</b> “Müzik, <span class="an-w">diğer sanatlardan farklı olarak</span>…” · “İçim buz gibi olsa da orası sıcak geldi.” → “daha, göre” yok ama <b>karşılaştırma var</b></div>' },
        { s: '“Diğer sanatlardan farklı olarak” diyorsa iki şeyi karşılaştırıyor demektir. “Daha” sözcüğünü aramakla kalma, anlama bak.' },
        { s: 'İkinci tuzak: Niteleme ve benzetme tanım değildir. “Kara bir bulut, susuz toprak” gibi sözlerle dolu bir metin betimleyicidir, ama tanım yapmaz.',
          h: '<div class="an-trap">Tanım = bir kavramın <b>ne olduğunu</b> açıklamak. Sıfatlarla süslemek ya da “gibi” ile benzetmek <b>tanım değildir</b>.</div>' },
        { s: 'Eksik yolu bulma sorularında da önce metinde zaten olan yolları işaretle. Eksik olan yol cevaptır.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Aşağıdakilerin hangisinde <b>karşılaştırmaya</b> başvurulmuştur?</p>',
        c: ['Mozaik, renkli taş ya da cam parçalarıyla yapılan bir süsleme sanatıdır.', 'Basılı kitap, ekranın aksine gözü yormaz.', 'Geçmişini bilmeyen toplum, kökleri kesilmiş bir çınar gibidir.', 'Gıda bitkilerinin dörtte üçü tozlaşmaya muhtaçtır.'], a: 'B',
        hint: 'Karşılaştırmada iki şey yan yana konur, ama “daha” ya da “göre” geçmeyebilir. Hangi cümle iki şeyin farkını ortaya koyuyor?',
        why: 'B’de basılı kitap ile ekran, gözü yorma bakımından karşılaştırılıyor; “daha” olmasa da karşılaştırma vardır. A tanımlama, C benzetme, D sayısal veri örneğidir.' },
      steps: [{ s: 'Gizli karşılaştırmayı hatırla ve seç.' }] },

    { t: 'Anlatım özellikleri: sözcük var, yapı yok',
      steps: [
        { s: 'Anlatım özellikleri en çok soru gelen alt başlık. Soru genelde “hangisi söylenemez” diye gelir.',
          h: '<table class="an-tbl"><tr><td><b>Nesnel / öznel</b></td><td>kanıtlanabilir / kişiden kişiye değişir</td></tr>' +
             '<tr><td><b>Seslenme</b></td><td>Ey oğul, değerli arkadaşlar, siz… <small>(“biz” seslenme değildir)</small></td></tr>' +
             '<tr><td><b>Gözlem / hayal</b></td><td>görüleni aktarma / gerçekte olmayan ögeler</td></tr>' +
             '<tr><td><b>Saptama / öğüt</b></td><td>bir durumu tespit etme / ne yapılması gerektiğini söyleme</td></tr></table>' },
        { s: 'Seslenme, okura ya da birine doğrudan hitap etmektir. “Biz, çoğumuz” demek seslenme sayılmaz.' },
        { s: 'Burada çok önemli bir tuzak var: Bir sözcüğün metinde geçmesi, o yapının metinde olduğunu göstermez.',
          h: '<div class="an-trap"><b>Sözcük var ≠ yapı var:</b> “Ey oğul, sorular en önemli yol göstericindir.” → “soru” sözcüğü var ama <b>soru cümlesi yok</b>.</div>' },
        { s: 'Bir de hayalî unsur tuzağı. Gerçekte yaşanmış bir anı, ne kadar duygulu anlatılırsa anlatılsın hayalî değildir.' },
        { s: 'Ve şunu da unutma: Bir metinde niteleyici sözcükler olması onu betimleyici yapmaz. “Sessizce” sözcüğü de ses betimlemesi değildir.' }
      ] },

    { t: 'Anlatımın nitelikleri',
      steps: [
        { s: 'İyi bir anlatımın nitelikleri de sorulabilir. Kısaca bakalım.',
          h: '<div class="an-grid"><div><b>Açıklık</b>tek anlama gelir</div><div><b>Duruluk</b>gereksiz sözcük yok</div><div><b>Yalınlık</b>süs yok, günlük dil</div><div><b>Özlülük</b>az sözle çok şey</div><div><b>Akıcılık</b>takılmadan okunur</div><div><b>Özgünlük</b>yazara özgü</div></div>' },
        { s: 'Açıklık, cümlenin tek bir biçimde anlaşılmasıdır. Özlülük ise az sözle çok şey anlatmaktır; atasözleri gibi.' },
        { s: 'En çok karıştırılan ikili yalınlık ve duruluk. Yalınlık süs yok demek, duruluk ise fazlalık yok demek.',
          h: '<div class="an-trap">“Aldığı ayakkabıyı <span class="an-w">geri iade</span> etti.” → hiç söz sanatı yok, yani <b>yalın</b>; ama “iade” zaten geri vermek demek, yani <b>duru değil</b>.</div>' },
        { s: 'Gördün mü? Bir cümle yalın olup yine de duru olmayabilir.' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>“Oda zifiri karanlıktı; elektrikler saatlerdir kesikti.”</p><p>Bu cümleyle başlayan bir metin aşağıdakilerin hangisiyle sürdürülürse <b>mantıksal tutarlılık bozulur</b>?</p>',
        c: ['Kardeşimin titreyen sesinden korktuğunu anladım.', 'Elimle duvarı yoklayarak kapıyı buldum.', 'Annemin yüzündeki gülümsemeyi görünce rahatladım.', 'Mutfaktan gelen çay kokusu içimi ısıttı.'], a: 'C',
        hint: 'Önce kısıtı bul: Karanlık bir odada hangi duyu çalışmaz?',
        why: 'Zifiri karanlıkta yüzdeki gülümseme görülemez; C kısıtı çiğniyor. Ses duymak, elle yoklamak ve koku almak karanlıkta da mümkündür, bunlar tutarlıdır.' },
      steps: [{ s: 'Kısıtı bul ve onu çiğneyen şıkkı ara.' }] },

    { t: 'Çözüm haritası',
      steps: [
        { s: 'Son olarak, soru köküne göre ilk ne yapacağını bir haritaya dökelim.',
          h: '<div class="an-ex"><span class="an-l rv h1"><b>“…söylenemez”:</b> Şıkları metinde ara, bulduklarına ✓ koy. ✓ almayan tek şık cevap.</span>' +
             '<span class="an-l rv h2"><b>Düşünceyi geliştirme yolları:</b> Her cümlenin yanına yolunu yaz.</span>' +
             '<span class="an-l rv h3"><b>“…biçimi değişmez”:</b> Aynı tonu sürdüren şıkkı seç.</span>' +
             '<span class="an-l rv h4"><b>Akış ve ekleme:</b> Gönderme sözcüğünü bul, çıkar ve oku.</span></div>' },
        { s: '“Söylenemez” sorularında şıkları metinde ara. Kelimenin geçmesine değil, yapının bulunmasına bak.', on: '.h1' },
        { s: 'Düşünceyi geliştirme yollarında her cümlenin yanına kullandığı yolu yaz. İkili şıklarda iki yolun ikisi de bulunmalı.', on: '.h2' },
        { s: 'Anlatım biçimi sorularında aynı tonu sürdüren şıkkı seç. Akış ve ekleme sorularında da gönderme sözcüğünü takip et.', on: '.h3,.h4' },
        { s: 'Çok güzel çalıştın! Artık paragrafın iskeletini görebiliyorsun. Hadi sorulara!' }
      ] }
  ]
};
