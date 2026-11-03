/* Adım Adım Anlatım · Matematik · Veri Analizi (biçim: tools/ANLATIM.md) */
(window.LGS_AN = window.LGS_AN || {})['mat-veri'] = {
  title: 'Veri Analizi',
  desc: 'Sütun, çizgi ve daire grafiklerini okumak, gösterimler arasında dönüşüm ve LGS’nin son sorularına konan “iki grafik birlikte” kurgusu, sahne sahne.',
  ozet: [
    'Grafiği başlık → eksenler → birim → ölçek → açıklama sırasıyla oku. Hataların çoğu bir karenin değerini ya da renkleri karıştırmaktan gelir.',
    'Kareli zeminde değer = kare sayısı × bir karenin değeri. Ölçek yoksa metindeki bir değerden ya da farktan bulunur.',
    'Çizgi grafiği değişimi gösterir: en dik yükselen parça en çok artıştır; en yüksek nokta ile karıştırma. Kesişimde değerler eşittir.',
    'Daire grafiğinde 360° = toplam. Merkez açı = {{değer|toplam}} × 360°. Önce “1 kişi kaç derece?” sorusunu cevapla.',
    'Bir dilim ya da iki dilimin farkı biliniyorsa toplam bulunur: 60° = 24 kişi ise 360° = 144 kişi.',
    'Daire grafiği payları gösterir; toplamları farklı iki grafikte açılar doğrudan karşılaştırılamaz. Gelir dilimi adet değildir.',
    'Dönüşümde oran korunur: sütun boyları oranı = açıların oranı. Daire grafiği yalnızca bir bütünün parçaları için uygundur.',
    'İki grafikli sorular: köprüyü bul (ortak büyüklük), ölçeği hesapla, öteki grafiğe taşı, tam sayı mı diye kontrol et.',
    'Eksen 0’dan başlamıyorsa sütun boyları oranı değerlerin oranı değildir.'
  ],
  scenes: [
    { t: 'Bir grafiği okumaya nereden başlarız?',
      base: '<svg class="an-svg" viewBox="0 0 330 205" role="img" aria-label="İkili sütun grafiği: 8A ve 8B şubelerinin Eylül-Aralık aylarında topladığı atık kâğıt; her kare 5 kilogram"><text x="165" y="14" font-size="13" text-anchor="middle" font-weight="700" class="rv g1">Grafik: Toplanan atık kâğıt (kg)</text><path class="ln" d="M46 139H310M46 128H310M46 117H310M46 106H310M46 95H310M46 84H310M46 73H310M46 62H310M46 51H310M46 40H310M57 40V150M68 40V150M79 40V150M90 40V150M101 40V150M112 40V150M123 40V150M134 40V150M145 40V150M156 40V150M167 40V150M178 40V150M189 40V150M200 40V150M211 40V150M222 40V150M233 40V150M244 40V150M255 40V150M266 40V150M277 40V150M288 40V150M299 40V150M310 40V150" stroke-width=".6" opacity=".55"/><path class="ln" d="M46 34V150H314" stroke-width="1.6"/><text x="42" y="154" font-size="10.5" text-anchor="end" class="mut rv g3">0</text><text x="42" y="132" font-size="10.5" text-anchor="end" class="mut rv g3">10</text><text x="42" y="110" font-size="10.5" text-anchor="end" class="mut rv g3">20</text><text x="42" y="88" font-size="10.5" text-anchor="end" class="mut rv g3">30</text><text x="42" y="66" font-size="10.5" text-anchor="end" class="mut rv g3">40</text><text x="42" y="44" font-size="10.5" text-anchor="end" class="mut rv g3">50</text><text x="8" y="32" font-size="10.5" class="mut rv g3">kg</text><rect x="57" y="95" width="22" height="55" class="b0" style="fill:var(--c);fill-opacity:.85"/><rect x="79" y="73" width="22" height="77" class="b0" style="fill:var(--noteline);fill-opacity:.85"/><text x="79" y="166" font-size="12" text-anchor="middle" class="rv g2">Eyl</text><rect x="123" y="51" width="22" height="99" class="b1" style="fill:var(--c);fill-opacity:.85"/><rect x="145" y="84" width="22" height="66" class="b1" style="fill:var(--noteline);fill-opacity:.85"/><text x="145" y="166" font-size="12" text-anchor="middle" class="rv g2">Eki</text><rect x="189" y="84" width="22" height="66" class="b2" style="fill:var(--c);fill-opacity:.85"/><rect x="211" y="62" width="22" height="88" class="b2" style="fill:var(--noteline);fill-opacity:.85"/><text x="211" y="166" font-size="12" text-anchor="middle" class="rv g2">Kas</text><rect x="255" y="62" width="22" height="88" class="b3" style="fill:var(--c);fill-opacity:.85"/><rect x="277" y="51" width="22" height="99" class="b3" style="fill:var(--noteline);fill-opacity:.85"/><text x="277" y="166" font-size="12" text-anchor="middle" class="rv g2">Ara</text><text x="178" y="181" font-size="11" text-anchor="middle" class="mut rv g2">aylar</text><rect x="96" y="188" width="12" height="12" style="fill:var(--c)" class="rv g4"/><text x="112" y="199" font-size="12" class="rv g4">8A</text><rect x="156" y="188" width="12" height="12" style="fill:var(--noteline)" class="rv g4"/><text x="172" y="199" font-size="12" class="rv g4">8B</text><text x="320" y="199" font-size="11" text-anchor="end" class="acc rv g5">1 kare = 5 kg</text></svg>',
      steps: [
        { s: 'Merhaba! Bu konuda sana önce bir alışkanlık kazandırmak istiyorum: grafiğe bakınca hemen sayı toplamaya başlama.' },
        { s: 'İlk iş başlığı okumak. Bu grafik iki şubenin topladığı atık kâğıdı anlatıyor.', on: '.g1' },
        { s: 'Sonra eksenler: yatayda aylar, dikeyde kilogram.', on: '.g2,.g3' },
        { s: 'Açıklamaya bak: mavi sütunlar 8A, sarılar 8B. Renkleri karıştırmak LGS’de çok puan kaybettirir.', v: 'Açıklamaya bak: mavi sütunlar sekiz A, sarılar sekiz B. Renkleri karıştırmak, le ge se’de çok puan kaybettirir.', on: '.g4' },
        { s: 'Ve en önemlisi ölçek: burada bir kare 5 kg.', v: 'Ve en önemlisi ölçek: burada bir kare beş kilogram.', on: '.g5', mk: '.g5' },
        { s: 'Sıra hep aynı: başlık, eksenler, birim, ölçek, açıklama. Sonra soruya geç.',
          h: '<div class="an-rule"><b>Okuma sırası:</b> başlık → eksenler → birim → ölçek → açıklama</div>' }
      ] },

    { t: 'Sütun grafiği: kareleri say',
      base: '<svg class="an-svg" viewBox="0 0 330 205" role="img" aria-label="İkili sütun grafiği: 8A ve 8B şubelerinin Eylül-Aralık aylarında topladığı atık kâğıt; her kare 5 kilogram"><text x="165" y="14" font-size="13" text-anchor="middle" font-weight="700" class="rv g1">Grafik: Toplanan atık kâğıt (kg)</text><path class="ln" d="M46 139H310M46 128H310M46 117H310M46 106H310M46 95H310M46 84H310M46 73H310M46 62H310M46 51H310M46 40H310M57 40V150M68 40V150M79 40V150M90 40V150M101 40V150M112 40V150M123 40V150M134 40V150M145 40V150M156 40V150M167 40V150M178 40V150M189 40V150M200 40V150M211 40V150M222 40V150M233 40V150M244 40V150M255 40V150M266 40V150M277 40V150M288 40V150M299 40V150M310 40V150" stroke-width=".6" opacity=".55"/><path class="ln" d="M46 34V150H314" stroke-width="1.6"/><text x="42" y="154" font-size="10.5" text-anchor="end" class="mut rv g3">0</text><text x="42" y="132" font-size="10.5" text-anchor="end" class="mut rv g3">10</text><text x="42" y="110" font-size="10.5" text-anchor="end" class="mut rv g3">20</text><text x="42" y="88" font-size="10.5" text-anchor="end" class="mut rv g3">30</text><text x="42" y="66" font-size="10.5" text-anchor="end" class="mut rv g3">40</text><text x="42" y="44" font-size="10.5" text-anchor="end" class="mut rv g3">50</text><text x="8" y="32" font-size="10.5" class="mut rv g3">kg</text><rect x="57" y="95" width="22" height="55" class="b0" style="fill:var(--c);fill-opacity:.85"/><rect x="79" y="73" width="22" height="77" class="b0" style="fill:var(--noteline);fill-opacity:.85"/><text x="79" y="166" font-size="12" text-anchor="middle" class="rv g2">Eyl</text><rect x="123" y="51" width="22" height="99" class="b1" style="fill:var(--c);fill-opacity:.85"/><rect x="145" y="84" width="22" height="66" class="b1" style="fill:var(--noteline);fill-opacity:.85"/><text x="145" y="166" font-size="12" text-anchor="middle" class="rv g2">Eki</text><rect x="189" y="84" width="22" height="66" class="b2" style="fill:var(--c);fill-opacity:.85"/><rect x="211" y="62" width="22" height="88" class="b2" style="fill:var(--noteline);fill-opacity:.85"/><text x="211" y="166" font-size="12" text-anchor="middle" class="rv g2">Kas</text><rect x="255" y="62" width="22" height="88" class="b3" style="fill:var(--c);fill-opacity:.85"/><rect x="277" y="51" width="22" height="99" class="b3" style="fill:var(--noteline);fill-opacity:.85"/><text x="277" y="166" font-size="12" text-anchor="middle" class="rv g2">Ara</text><text x="178" y="181" font-size="11" text-anchor="middle" class="mut rv g2">aylar</text><rect x="96" y="188" width="12" height="12" style="fill:var(--c)" class="rv g4"/><text x="112" y="199" font-size="12" class="rv g4">8A</text><rect x="156" y="188" width="12" height="12" style="fill:var(--noteline)" class="rv g4"/><text x="172" y="199" font-size="12" class="rv g4">8B</text><text x="320" y="199" font-size="11" text-anchor="end" class="acc rv g5">1 kare = 5 kg</text></svg>',
      steps: [
        { s: 'Sütun grafiği karşılaştırmanın grafiğidir. Kareli zeminde değer, kare sayısı çarpı bir karenin değeridir.', on: '.g1,.g2,.g3,.g4,.g5' },
        { s: 'Ekim’deki mavi sütuna bakalım: 9 kare. 9 çarpı 5, yani 45 kg.', v: 'Ekim’deki mavi sütuna bakalım: dokuz kare. Dokuz çarpı beş, yani kırk beş kilogram.', mk: '.b1' },
        { s: 'Peki ölçek yazmasaydı? O zaman metin bir ipucu verir. Mesela “Kasım’da 8B, 8A’dan 10 kg fazla topladı.”', v: 'Peki ölçek yazmasaydı? O zaman metin bir ipucu verir. Mesela: Kasım’da sekiz B, sekiz A’dan on kilogram fazla topladı.', mk: '.b2' },
        { s: 'Kasım sütunları arasında 2 kare fark var. 2 kare 10 kg ise 1 kare 5 kg.', v: 'Kasım sütunları arasında iki kare fark var. İki kare on kilogram ise, bir kare beş kilogram.',
          h: '<div class="an-ex"><span class="an-l">2 kare ↔ 10 kg &nbsp;⇒&nbsp; 1 kare ↔ 5 kg</span></div>' }
      ] },

    { t: 'Dokun: grafikten iki sütun',
      steps: [{ s: 'Ölçeği okuyarak kare sayısını kitaba çevir. Toplamı 40 kitap olan iki şubeyi bul ve ikisine de dokun.' }],
      ia: { tip: 'gorselsec', q: '<p>Okudukları kitapların toplamı <b>40</b> olan <b>iki</b> şubeye dokun, sonra Kontrol et’e bas.</p>', svg: '<svg class="an-svg" viewBox="0 0 340 196" role="img" aria-label="Şubelerin okuduğu kitap sayıları sütun grafiği: 8A 5 kare, 8B 3 kare, 8C 4 kare, 8D 7 kare; bir kare 4 kitap"><path class="ln" d="M44 168 H330" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M44 151 H330" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M44 134 H330" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M44 117 H330" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M44 100 H330" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M44 83 H330" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M44 66 H330" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M44 49 H330" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M44 32 H330" style="stroke-width:.7;opacity:.6"/><path class="ln" d="M44 168 V20" style="stroke-width:1.4"/><path class="ln" d="M44 168 H330" style="stroke-width:1.4"/><text x="4" y="16" font-size="13" class="mut">kitap</text><text x="330" y="16" font-size="14" text-anchor="end" class="acc" font-weight="700">1 kare = 4 kitap</text><g data-b="8a" aria-label="8A sütunu"><rect x="64" y="83" width="44" height="85" rx="3" class="boxa"/><text x="86" y="188" text-anchor="middle" font-size="15" font-weight="700">8A</text></g><g data-b="8b" aria-label="8B sütunu"><rect x="132" y="117" width="44" height="51" rx="3" class="boxa"/><text x="154" y="188" text-anchor="middle" font-size="15" font-weight="700">8B</text></g><g data-b="8c" aria-label="8C sütunu"><rect x="200" y="100" width="44" height="68" rx="3" class="boxa"/><text x="222" y="188" text-anchor="middle" font-size="15" font-weight="700">8C</text></g><g data-b="8d" aria-label="8D sütunu"><rect x="268" y="49" width="44" height="119" rx="3" class="boxa"/><text x="290" y="188" text-anchor="middle" font-size="15" font-weight="700">8D</text></g></svg>', dogru: ['8b', '8d'], hint: '40 kitap kaç kare eder? Ölçeğe böl, sonra kare sayıları o toplamı veren iki sütunu ara.', why: '40 ÷ 4 = 10 kare. 8B 3 kare, 8D 7 kare: 3 + 7 = 10 kare, yani 12 + 28 = 40 kitap. 8A ile 8C 9 kare, yani 36 kitap eder.', whyV: '40 bölü 4, 10 kare eder. sekiz B 3 kare, sekiz D 7 kare; toplam 10 kare, yani 12 artı 28, 40 kitap. sekiz A ile sekiz C ise 9 kare, 36 kitap eder.' } },

    { t: 'Sütun grafiği soru kalıpları',
      base: '<table class="an-tbl"><tr><th>Soru</th><th>Ne yaparız?</th></tr>' +
        '<tr class="rv k1"><td>“kaç kg fazla?”</td><td>iki değeri bul, çıkar</td></tr>' +
        '<tr class="rv k2"><td>“kaç katı?”</td><td>büyüğü küçüğe böl</td></tr>' +
        '<tr class="rv k3"><td>“toplam gelir en çok?”</td><td>her grubu kendi fiyatıyla çarp, sonra topla</td></tr>' +
        '<tr class="rv k4"><td>“silinen sütun kaç kare?”</td><td>ortalama ya da toplamdan eksiği bul, ölçeğe böl</td></tr></table>',
      steps: [
        { s: 'Sütun grafiği sorularında hep aynı birkaç kalıp döner. Gel bunlara tek tek bakalım.' },
        { s: 'Fark soruluyorsa çıkarırsın, kat soruluyorsa bölersin. Kare sayılarının oranı da aynı katı verir.', on: '.k1,.k2' },
        { s: 'Burada çok dikkat et: iki ürünün fiyatı farklıysa en uzun sütun en çok geliri göstermeyebilir.', on: '.k3', mk: '.k3 td',
          h: '<div class="an-trap">20 tane 5 TL’lik ürün = 100 TL, ama 12 tane 10 TL’lik ürün = 120 TL. Kısa sütun daha çok kazandırdı!</div>' },
        { s: 'Ortalama verilmiş, bir sütun silinmişse: toplamı bul, bilinenleri çıkar, kalan değeri ölçeğe böl.', on: '.k4' },
        { s: 'Sıcaklık gibi verilerde sütun sıfırın altına inebilir. 6 ile −8 arasındaki fark 14 derecedir.', v: 'Sıcaklık gibi verilerde sütun sıfırın altına inebilir. Altı ile eksi sekiz arasındaki fark, on dört derecedir.' }
      ] },

    { t: 'Kaydır: silinen sütun',
      steps: [{ s: 'Ortalaması verilen bir grafikte bir sütun silinmiş. Eksik değeri hesapla ve kaydırıcıyla göster.' }],
      ia: { tip: 'kaydir', q: '<p>Bir sınıfın 4 haftada topladığı kâğıtların ortalaması <b>30 kg</b>. İlk üç hafta 24, 35 ve 28 kg toplandı. 4. haftada kaç kg toplandı?</p>', min: 0, max: 60, adim: 1, cevap: 33, birim: 'kg', etiket: [0, 10, 20, 30, 40, 50, 60], hint: 'Önce toplamı bul: ortalama çarpı hafta sayısı. Sonra bilinen haftaları çıkar.', why: 'Toplam 30 · 4 = 120 kg. Bilinenler 24 + 35 + 28 = 87 kg. Kalan 120 − 87 = 33 kg.', whyV: 'Toplam, 30 çarpı 4, yani 120 kilogram. Bilinen üç hafta 87 kilogram eder. Kalan 120 eksi 87, yani 33 kilogram.' } },

    { t: 'Çizgi grafiği: değişimi okumak',
      base: '<svg class="an-svg" viewBox="0 0 330 185" role="img" aria-label="İki çizgili grafik: K ve L barajlarının doluluk oranları; Nisan ayında çizgiler kesişiyor"><text x="165" y="12" font-size="13" text-anchor="middle" font-weight="700">Grafik: Baraj doluluk oranı (%)</text><path class="ln" d="M40 116H320M40 92H320M40 68H320M40 44H320M40 20H320" stroke-width=".6" opacity=".6"/><path class="ln" d="M40 14V140H324" stroke-width="1.6"/><text x="36" y="144" font-size="10.5" text-anchor="end" class="mut">0</text><text x="36" y="120" font-size="10.5" text-anchor="end" class="mut">20</text><text x="36" y="96" font-size="10.5" text-anchor="end" class="mut">40</text><text x="36" y="72" font-size="10.5" text-anchor="end" class="mut">60</text><text x="36" y="48" font-size="10.5" text-anchor="end" class="mut">80</text><text x="36" y="24" font-size="10.5" text-anchor="end" class="mut">100</text><text x="60" y="156" font-size="11.5" text-anchor="middle">Oca</text><text x="110" y="156" font-size="11.5" text-anchor="middle">Şub</text><text x="160" y="156" font-size="11.5" text-anchor="middle">Mar</text><text x="210" y="156" font-size="11.5" text-anchor="middle">Nis</text><text x="260" y="156" font-size="11.5" text-anchor="middle">May</text><text x="310" y="156" font-size="11.5" text-anchor="middle">Haz</text><path class="st dr l1" d="M60 98 L110 80 L160 68 L210 44 L260 38 L310 50"/><circle cx="60" cy="98" r="3.5" class="rv l1" style="fill:var(--c)"/><circle cx="110" cy="80" r="3.5" class="rv l1" style="fill:var(--c)"/><circle cx="160" cy="68" r="3.5" class="rv l1" style="fill:var(--c)"/><circle cx="210" cy="44" r="3.5" class="rv l1" style="fill:var(--c)"/><circle cx="260" cy="38" r="3.5" class="rv l1" style="fill:var(--c)"/><circle cx="310" cy="50" r="3.5" class="rv l1" style="fill:var(--c)"/><path class="st2 dr l2" d="M60 68 L110 68 L160 62 L210 44 L260 50 L310 56" stroke-dasharray="6 4"/><circle cx="60" cy="68" r="3.5" class="rv l2" style="fill:var(--noteline)"/><circle cx="110" cy="68" r="3.5" class="rv l2" style="fill:var(--noteline)"/><circle cx="160" cy="62" r="3.5" class="rv l2" style="fill:var(--noteline)"/><circle cx="210" cy="44" r="3.5" class="rv l2" style="fill:var(--noteline)"/><circle cx="260" cy="50" r="3.5" class="rv l2" style="fill:var(--noteline)"/><circle cx="310" cy="56" r="3.5" class="rv l2" style="fill:var(--noteline)"/><text x="46" y="102" font-size="12" font-weight="700" class="acc rv l1">K</text><text x="46" y="72" font-size="12" font-weight="700" class="rv l2" style="fill:var(--noteline)">L</text><circle cx="210" cy="44" r="9" class="st dr l3"/><path class="st dr l4" d="M160 68 L210 44" style="stroke-width:7;opacity:.45"/><text x="180" y="172" font-size="11" text-anchor="middle" class="mut">aylar</text></svg>',
      steps: [
        { s: 'Çizgi grafiği zamana göre değişimin grafiğidir. K barajının doluluk oranı bu düz çizgiyle gösterilmiş.', on: '.l1', w: 700 },
        { s: 'L barajı da kesikli çizgide. Çizgi yukarı gidiyorsa artış, aşağı gidiyorsa azalış, yataysa değişim yok.', on: '.l2', w: 700 },
        { s: 'İki çizgi Nisan’da kesişiyor. Kesişim noktasında iki barajın değeri eşittir: ikisi de %80.', v: 'İki çizgi Nisan’da kesişiyor. Kesişim noktasında iki barajın değeri eşittir: ikisi de yüzde seksen.', on: '.l3', w: 500 },
        { s: 'K’nin en çok arttığı ay hangisi? En dik çıkan parçaya bak: Mart’tan Nisan’a 20 puanlık artış.', v: 'K’nin en çok arttığı ay hangisi? En dik çıkan parçaya bak: Mart’tan Nisan’a, yirmi puanlık artış.', on: '.l4' },
        { s: 'Dikkat, K’nin en yüksek değeri Mayıs’ta. Ama en çok arttığı aralık Mart-Nisan. Değer başka, değişim başka!', v: 'Dikkat, K’nin en yüksek değeri Mayıs’ta. Ama en çok arttığı aralık, Mart ile Nisan arası. Değer başka, değişim başka!',
          h: '<div class="an-trap">En yüksek nokta ≠ en çok artış. Değişimi bulmak için ardışık iki değeri çıkar.</div>' }
      ] },

    { t: 'Birikimli grafik ve değişim',
      steps: [
        { s: 'Bir kumbaradaki para ay sonlarında ölçülmüş. Hangi ay en çok para eklenmiş, hangi ay para alınmış?',
          h: '<table class="an-tbl" style="text-align:center"><tr><th>Ay</th><th>Oca</th><th>Şub</th><th>Mar</th><th>Nis</th><th>May</th></tr><tr><td>TL</td><td>120</td><td>150</td><td>150</td><td>210</td><td>180</td></tr><tr class="rv u1"><td>Değişim</td><td></td><td class="an-ek">+30</td><td class="an-ek">0</td><td class="an-ek">+60</td><td class="an-ek">−30</td></tr></table>' },
        { s: 'Ardışık değerleri çıkaralım: Şubat +30, Mart 0, Nisan +60, Mayıs −30.', v: 'Ardışık değerleri çıkaralım: Şubat artı otuz, Mart sıfır, Nisan artı altmış, Mayıs eksi otuz.', on: '.u1' },
        { s: 'En çok Nisan’da eklenmiş, Mayıs’ta para alınmış. Mart’ta hiç değişim yok; çizgi grafiğinde bu yatay bir parça olurdu.' },
        { s: 'Bazı grafikler “o güne kadarki toplamı” gösterir. Bu birikimli grafikte çizgi hiç inmez. O günkü miktar, iki noktanın farkıdır.',
          h: '<div class="an-tip">Birikimli grafikte yatay parça “o gün hiç yapılmadı” demektir.</div>' }
      ] },

    { t: 'Doğru mu, yanlış mı?',
      steps: [{ s: 'Çizgi grafiklerinde en çok yapılan okuma hataları bunlar. Her ifade için Doğru ya da Yanlış’a dokun.' }],
      ia: { tip: 'dogruyanlis', q: '<p>Çizgi grafikleri için her ifadeye karar ver.</p>', ifadeler: [
            { m: 'Çizginin en yüksek olduğu ay, en çok artışın olduğu aydır.', d: false, a: 'Değer başka, değişim başka: en çok artış en dik çıkan parçadadır.' },
            { m: 'İki çizginin kesiştiği ayda iki değer birbirine eşittir.', d: true, a: 'Kesişim noktası iki çizgide de aynı değeri gösterir.' },
            { m: 'Yatay bir parça, o aralıkta hiç değişim olmadığını gösterir.', d: true, a: 'Değer aynı kaldıysa çizgi ne çıkar ne iner.' },
            { m: '“O güne kadarki toplam” grafiğinde çizgi aşağı inebilir.', d: false, a: 'Birikimli toplam azalmaz; çizgi ya çıkar ya yatay kalır.' }], hint: 'Bir noktanın yüksekliği değeri, iki nokta arasındaki diklik ise değişimi gösterir. Birikimli grafikte neler toplanıyor, düşün.', why: 'Çizgide yükseklik değeri, eğiklik değişimi anlatır. Kesişimde değerler eşit, yatay parçada değişim yoktur. Birikimli grafik toplamı gösterdiği için hiç inmez.' } },

    { t: 'Ara soru', cp: {
        q: '<p>Bir fidanın boyu her hafta sonunda ölçülmüştür:</p><table class="an-tbl" style="text-align:center"><tr><th>Hafta</th><th>1.</th><th>2.</th><th>3.</th><th>4.</th><th>5.</th></tr><tr><td>Boy (cm)</td><td>12</td><td>15</td><td>21</td><td>24</td><td>25</td></tr></table><p>Fidan en çok <b>hangi hafta</b> uzamıştır?</p>',
        c: ['5. hafta', '4. hafta', '3. hafta', '2. hafta'], a: 'C',
        hint: 'En uzun olduğu haftayı değil, ardışık iki ölçüm arasındaki en büyük farkı ara.',
        why: 'Haftalık uzama: 2. hafta 3 cm, 3. hafta 6 cm, 4. hafta 3 cm, 5. hafta 1 cm. En çok 3. haftada uzamıştır; 5. hafta en uzun olduğu haftadır.',
        whyV: 'Haftalık uzama: ikinci hafta üç, üçüncü hafta altı, dördüncü hafta üç, beşinci hafta bir santimetre. En çok üçüncü haftada uzamış. Beşinci hafta ise yalnızca en uzun olduğu hafta.' },
      steps: [{ s: 'Sıra sende! Değer mi soruluyor, değişim mi? Ona göre karar ver.' }] },

    { t: 'Daire grafiği: bütünün parçaları',
      steps: [
        { s: 'Daire grafiğinde dairenin tamamı, yani 360 derece, toplamın kendisidir. Her dilim bütünün bir payı.', v: 'Daire grafiğinde dairenin tamamı, yani üç yüz altmış derece, toplamın kendisidir. Her dilim, bütünün bir payı.',
          h: '<div class="an-big">açı = {{değer|toplam}} × 360°</div>' },
        { s: 'Şu açıları görür görmez tanımalısın: 180° yarım, 90° çeyrek, 120° üçte bir, 60° altıda bir.', v: 'Şu açıları görür görmez tanımalısın: yüz seksen derece yarım, doksan derece çeyrek, yüz yirmi derece üçte bir, altmış derece altıda bir.',
          h: '<table class="an-tbl" style="text-align:center"><tr><th>Açı</th><td>180°</td><td>120°</td><td>90°</td><td>72°</td><td>60°</td><td>45°</td><td>36°</td></tr><tr><th>Pay</th><td>{{1|2}}</td><td>{{1|3}}</td><td>{{1|4}}</td><td>{{1|5}}</td><td>{{1|6}}</td><td>{{1|8}}</td><td>{{1|10}}</td></tr></table>' },
        { s: 'Grafikte köşede küçük bir kare işareti görürsen o dilim 90°’dir. Açısı yazılmayan dilim de 360’tan kalandır.', v: 'Grafikte köşede küçük bir kare işareti görürsen, o dilim doksan derecedir. Açısı yazılmayan dilim de, üç yüz altmıştan kalandır.' }
      ] },

    { t: 'Açıdan sayıya, sayıdan açıya',
      base: '<svg class="an-svg" viewBox="0 0 330 200" role="img" aria-label="Daire grafiği: 120 öğrencinin sevdiği spor; futbol 120 derece, yüzme 90 derece, basketbol 60 derece, voleybol 90 derece"><text x="165" y="14" font-size="13" text-anchor="middle" font-weight="700">Grafik: 120 öğrencinin sevdiği spor</text><path d="M100 110 L100.0 30.0 A80 80 0 0 1 169.3 150.0 Z" style="fill:var(--c);fill-opacity:.8;stroke:var(--card2);stroke-width:2" class=""/><text x="143.0" y="81.7" font-size="12" text-anchor="middle" font-weight="700" style="fill:#fff" class="">Futbol</text><text x="143.0" y="96.7" font-size="12" text-anchor="middle" font-weight="700" style="fill:#fff" class="">120°</text><path d="M100 110 L169.3 150.0 A80 80 0 0 1 60.0 179.3 Z" style="fill:var(--noteline);fill-opacity:.8;stroke:var(--card2);stroke-width:2" class=""/><text x="112.8" y="154.4" font-size="12" text-anchor="middle" font-weight="700" style="fill:#fff" class="">Yüzme</text><text x="112.8" y="169.4" font-size="12" text-anchor="middle" font-weight="700" style="fill:#fff" class="">90°</text><path d="M100 110 L60.0 179.3 A80 80 0 0 1 20.0 110.0 Z" style="fill:var(--ok);fill-opacity:.8;stroke:var(--card2);stroke-width:2" class=""/><text x="57.0" y="131.3" font-size="12" text-anchor="middle" font-weight="700" style="fill:#fff" class="">Basket</text><text x="57.0" y="146.3" font-size="12" text-anchor="middle" font-weight="700" style="fill:#fff" class="">60°</text><path d="M100 110 L20.0 110.0 A80 80 0 0 1 100.0 30.0 Z" style="fill:var(--bad);fill-opacity:.8;stroke:var(--card2);stroke-width:2" class=""/><text x="64.9" y="71.4" font-size="12" text-anchor="middle" font-weight="700" style="fill:#fff" class="">Voleybol</text><text x="64.9" y="86.4" font-size="12" text-anchor="middle" font-weight="700" style="fill:#fff" class="">90°</text><text x="200" y="70" font-size="13" class="rv d1">360° ↔ 120 kişi</text><text x="200" y="92" font-size="13" font-weight="700" class="acc rv d1">3° ↔ 1 kişi</text><text x="200" y="122" font-size="12.5" class="rv d2">Futbol: 120 ÷ 3 = 40</text><text x="200" y="142" font-size="12.5" class="rv d2">Yüzme: 90 ÷ 3 = 30</text><text x="200" y="162" font-size="12.5" class="rv d2">Basket: 60 ÷ 3 = 20</text><text x="200" y="182" font-size="12.5" class="rv d2">Voleybol: 30</text></svg>',
      steps: [
        { s: '120 öğrencinin sevdiği spor bu grafikte. Altın soru şu: 1 kişi kaç derece?', v: 'Yüz yirmi öğrencinin sevdiği spor bu grafikte. Altın soru şu: bir kişi kaç derece?' },
        { s: '360 derece 120 kişiyse, 3 derece 1 kişi eder.', v: 'Üç yüz altmış derece yüz yirmi kişiyse, üç derece bir kişi eder.', on: '.d1' },
        { s: 'Artık her dilim kolay: futbol 120 bölü 3, 40 kişi. Yüzme 30, basketbol 20, voleybol 30.', v: 'Artık her dilim kolay: futbol, yüz yirmi bölü üç, kırk kişi. Yüzme otuz, basketbol yirmi, voleybol otuz.', on: '.d2' },
        { s: 'Tersine sayıdan açıya da geçebiliriz: 40 kişiden 15’i, {{15|40}} çarpı 360, yani 135 derece.', v: 'Tersine sayıdan açıya da geçebiliriz: kırk kişiden on beşi; kırkta on beş çarpı üç yüz altmış, yani yüz otuz beş derece.' },
        { s: 'Toplam verilmezse de bulunur. 150° ile 90° arasında 24 kişi fark varsa, 60° = 24 kişi, 360° = 144 kişi.', v: 'Toplam verilmezse de bulunur. Yüz elli derece ile doksan derece arasında yirmi dört kişi fark varsa; altmış derece yirmi dört kişi, üç yüz altmış derece de yüz kırk dört kişi.',
          h: '<div class="an-ex"><span class="an-l">150° − 90° = 60° ↔ 24 kişi</span><span class="an-l">360° = 6 · 60° ↔ 6 · 24 = <b>144 kişi</b></span></div>' }
      ] },

    { t: 'Eşleştir: açıdan kişiye',
      steps: [{ s: 'Önce bir kişinin kaç derece olduğunu bul. Sonra her dilimi kişi sayısıyla eşleştir.' }],
      ia: { tip: 'eslestir', q: '<p>90 kişilik bir anketin daire grafiğinde her dilimi kişi sayısıyla eşleştir.</p>', solBaslik: 'Dilim', sagBaslik: 'Kişi', sol: ['120°', '36°', '80°', '72°', '52°'], sag: ['30', '9', '20', '18', '13'], hint: '360 derece 90 kişiyse 1 kişi kaç derece? Her açıyı bu sayıya böl.', why: '360 ÷ 90 = 4, yani 1 kişi 4°. 120 ÷ 4 = 30, 36 ÷ 4 = 9, 80 ÷ 4 = 20, 72 ÷ 4 = 18, 52 ÷ 4 = 13. Toplam 90, kontrol tamam.', whyV: '360 bölü 90, 4 eder; yani 1 kişi 4 derece. 120 bölü 4, 30; 36 bölü 4, 9; 80 bölü 4, 20; 72 bölü 4, 18; 52 bölü 4, 13. Hepsinin toplamı 90, kontrol tamam.' } },

    { t: 'Çözümlü örnek: farktan toplama',
      steps: [
        { s: 'Bir sınıfın sevdiği renkler: kırmızı 150°, mavi 90°, yeşil 80°, sarı 40°. Kırmızıcılar maviden 6 kişi fazla. Yeşili kaç kişi seçmiş?', v: 'Bir sınıfın sevdiği renkler: kırmızı yüz elli, mavi doksan, yeşil seksen, sarı kırk derece. Kırmızıyı seçenler, maviden altı kişi fazla. Yeşili kaç kişi seçmiş?',
          h: '<div class="an-ex"><span class="an-l rv f1">150° − 90° = 60° ↔ 6 kişi</span><span class="an-l rv f2">10° ↔ 1 kişi, sınıf = 360 ÷ 10 = 36 kişi</span><span class="an-l rv f3">yeşil: 80° ÷ 10° = <b>8 kişi</b></span><span class="an-l rv f4">kontrol: 15 + 9 + 8 + 4 = 36 ✓</span></div>' },
        { s: 'Fark açısını bulalım: 150 eksi 90, 60 derece. Bu 6 kişiye karşılık geliyor.', v: 'Fark açısını bulalım: yüz elli eksi doksan, altmış derece. Bu da altı kişiye karşılık geliyor.', on: '.f1' },
        { s: 'Demek ki 10 derece 1 kişi. Sınıf 36 kişi.', v: 'Demek ki on derece bir kişi. Sınıf da otuz altı kişi.', on: '.f2' },
        { s: 'Yeşil 80 derece, yani 8 kişi. Hepsini toplayıp kontrol edelim: 36. Tamam!', v: 'Yeşil seksen derece, yani sekiz kişi. Hepsini toplayıp kontrol edelim: otuz altı. Tamam!', on: '.f3,.f4' },
        { s: 'Bulduğun sayıların tam sayı çıkmasına hep dikkat et. LGS’deki “en az kaç” sorularının anahtarı bu.', v: 'Bulduğun sayıların tam sayı çıkmasına hep dikkat et. Le ge se’deki en az kaç sorularının anahtarı bu.' }
      ] },

    { t: 'Daire grafiğinin tuzakları',
      steps: [
        { s: 'Daire grafiği gerçek sayıları değil, payları gösterir. Toplam bilinmeden “kaç kişi” sorusu cevaplanamaz.' },
        { s: 'Toplamları farklı iki grafikte açılar doğrudan karşılaştırılamaz. Büyük açı, büyük sayı demek değil!',
          h: '<div class="an-trap">300 kişinin 144°’si = 120 kişi &nbsp;·&nbsp; 200 kişinin 216°’si = 120 kişi → farklı açı, <b>aynı sayı</b></div>' },
        { s: 'Grafik geliri gösteriyorsa, adet için geliri birim fiyata bölmelisin. Büyük dilim her zaman çok satılan ürün değildir.' },
        { s: 'Bir de 24 saatlik daire grafikleri var: 360° = 24 saat, yani 15° = 1 saat.', v: 'Bir de yirmi dört saatlik daire grafikleri var: üç yüz altmış derece yirmi dört saat, yani on beş derece bir saat.',
          h: '<div class="an-tip">24 saatlik grafik: 15° = 1 saat, 1° = 4 dakika. 105° → 7 saat.</div>' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Bir anketin sonuçlarını gösteren daire grafiğinde 72°’lik dilim 18 kişiyi göstermektedir. Aynı grafikte 120°’lik dilim kaç kişiyi gösterir?</p>',
        c: ['24', '36', '45', '30'], a: 'D',
        hint: 'Önce 1 kişinin kaç derece olduğunu bul: 72’yi 18’e böl.',
        hintV: 'Önce bir kişinin kaç derece olduğunu bul: yetmiş ikiyi on sekize böl.',
        why: '72° ÷ 18 = 4°, yani 4° ↔ 1 kişi. 120° ÷ 4° = 30 kişi.',
        whyV: 'Yetmiş iki bölü on sekiz, dört. Yani dört derece bir kişi. Yüz yirmi bölü dört de, otuz kişi.' },
      steps: [{ s: 'Kısa bir soru. 1 kişi kaç derece, onu bul.', v: 'Kısa bir soru. Bir kişi kaç derece, onu bul.' }] },

    { t: 'Gösterimler arasında dönüşüm',
      base: '<svg class="an-svg" viewBox="0 0 330 150" role="img" aria-label="Aynı veri: elma 30, armut 20, ayva 10 kilogram; sütun boyları 3, 2, 1 ve daire dilimleri 180, 120, 60 derece"><rect x="30" y="30" width="30" height="90" class="rv c1" style="fill:var(--c);fill-opacity:.85"/><text x="45" y="135" font-size="11.5" text-anchor="middle" class="rv c1">Elma</text><text x="45" y="25" font-size="11.5" text-anchor="middle" class="mut rv c1">30</text><rect x="72" y="60" width="30" height="60" class="rv c1" style="fill:var(--noteline);fill-opacity:.85"/><text x="87" y="135" font-size="11.5" text-anchor="middle" class="rv c1">Armut</text><text x="87" y="55" font-size="11.5" text-anchor="middle" class="mut rv c1">20</text><rect x="114" y="90" width="30" height="30" class="rv c1" style="fill:var(--ok);fill-opacity:.85"/><text x="129" y="135" font-size="11.5" text-anchor="middle" class="rv c1">Ayva</text><text x="129" y="85" font-size="11.5" text-anchor="middle" class="mut rv c1">10</text><path class="ln" d="M20 120H160" stroke-width="1.6"/><path d="M245 72 L245.0 10.0 A62 62 0 0 1 245.0 134.0 Z" style="fill:var(--c);fill-opacity:.8;stroke:var(--card2);stroke-width:2" class="rv c2"/><text x="283.4" y="68.5" font-size="11.5" text-anchor="middle" font-weight="700" style="fill:#fff" class="rv c2">Elma</text><text x="283.4" y="83.5" font-size="11.5" text-anchor="middle" font-weight="700" style="fill:#fff" class="rv c2">180°</text><path d="M245 72 L245.0 134.0 A62 62 0 0 1 191.3 41.0 Z" style="fill:var(--noteline);fill-opacity:.8;stroke:var(--card2);stroke-width:2" class="rv c2"/><text x="211.7" y="87.7" font-size="11.5" text-anchor="middle" font-weight="700" style="fill:#fff" class="rv c2">Armut</text><text x="211.7" y="102.7" font-size="11.5" text-anchor="middle" font-weight="700" style="fill:#fff" class="rv c2">120°</text><path d="M245 72 L191.3 41.0 A62 62 0 0 1 245.0 10.0 Z" style="fill:var(--ok);fill-opacity:.8;stroke:var(--card2);stroke-width:2" class="rv c2"/><text x="225.8" y="35.2" font-size="11.5" text-anchor="middle" font-weight="700" style="fill:#fff" class="rv c2">Ayva</text><text x="225.8" y="50.2" font-size="11.5" text-anchor="middle" font-weight="700" style="fill:#fff" class="rv c2">60°</text><text x="245" y="148" font-size="12" text-anchor="middle" class="acc rv c3">3 : 2 : 1</text><text x="85" y="148" font-size="12" text-anchor="middle" class="acc rv c3">3 : 2 : 1</text></svg>',
      steps: [
        { s: 'Aynı veri tabloyla, sütun grafiğiyle ya da daire grafiğiyle gösterilebilir. Elma 30, armut 20, ayva 10 kg.', v: 'Aynı veri tabloyla, sütun grafiğiyle ya da daire grafiğiyle gösterilebilir. Elma otuz, armut yirmi, ayva on kilogram.', on: '.c1' },
        { s: 'Toplam 60 kg. Elma yarısı: 180°. Armut üçte biri: 120°. Ayva altıda biri: 60°.', v: 'Toplam altmış kilogram. Elma yarısı, yüz seksen derece. Armut üçte biri, yüz yirmi derece. Ayva altıda biri, altmış derece.', on: '.c2' },
        { s: 'Dönüşümün sırrı oranı korumak: sütun boyları da açılar da 3’e 2’ye 1.', v: 'Dönüşümün sırrı oranı korumak: sütun boyları da, açılar da, üçe ikiye bir.', on: '.c3' },
        { s: 'Ama her veri daire grafiğine dönüşmez. Daire için parçaların bir bütünü oluşturması gerekir.',
          h: '<div class="an-trap">Bir öğrencinin deneme netleri ya da aylık sıcaklıklar bir “bütün” değildir → daire grafiği <b>uygun değil</b>, çizgi grafiği kullan.</div>' },
        { s: 'Tersine, sırası olmayan anket seçeneklerini çizgiyle göstermek de yanlış bir artış-azalış izlenimi verir.' }
      ] },

    { t: 'Boşluk doldur: tablodan daireye',
      steps: [{ s: 'Tablodaki veriyi daire grafiğine çevir. Önce bir kişinin kaç derece ettiğini bul, sonra her dilimin açısını yerleştir.' }],
      ia: { tip: 'bosluk', q: '<p>30 öğrencinin sevdiği renk: <b>kırmızı 15, mavi 6, yeşil 9</b>. Daire grafiğindeki açıları bul.</p>', metin: 'Kırmızı: [_]°<br>Mavi: [_]°<br>Yeşil: [_]°', secenek: ['180', '72', '108', '150', '60', '90', '36'], cevap: ['180', '72', '108'], hint: '360 dereceyi 30 öğrenciye böl: bir öğrenci kaç derece? Sonra her rengin öğrenci sayısıyla çarp.', why: '360 ÷ 30 = 12, yani 1 öğrenci 12°. Kırmızı 15 · 12 = 180°, mavi 6 · 12 = 72°, yeşil 9 · 12 = 108°. Toplam 360°.', whyV: '360 bölü 30, 12 eder; bir öğrenci 12 derece. Kırmızı 15 çarpı 12, 180 derece; mavi 6 çarpı 12, 72 derece; yeşil 9 çarpı 12, 108 derece. Toplam 360.' } },

    { t: 'Güçlü yönler ve yanıltıcı grafikler',
      base: '<table class="an-tbl"><tr><th>Gösterim</th><th>En iyi yaptığı iş</th></tr>' +
        '<tr><td><b>Tablo</b></td><td>kesin değerler</td></tr><tr><td><b>Sütun</b></td><td>kategorileri karşılaştırmak</td></tr>' +
        '<tr><td><b>Çizgi</b></td><td>zamana göre değişim</td></tr><tr><td><b>Daire</b></td><td>bütün içindeki pay</td></tr></table>',
      steps: [
        { s: 'Her gösterimin bir uzmanlık alanı var. Soruda “hangisi daha uygun?” denirse bu tabloyu hatırla.', v: 'Her gösterimin bir uzmanlık alanı var. Soruda, hangisi daha uygun diye sorulursa, bu tabloyu hatırla.' },
        { s: 'Grafikler yanıltabilir de. Şimdi aynı veriyi iki farklı eksenle çizelim: K 52, L 56.', v: 'Grafikler yanıltabilir de. Şimdi aynı veriyi iki farklı eksenle çizelim: K elli iki, L elli altı.', h: '<svg class="an-svg" viewBox="0 0 330 150" role="img" aria-label="Aynı veri iki grafikte: eksen sıfırdan başlayınca K 52 ve L 56 neredeyse eşit; eksen 50 den başlayınca L, K nin üç katı gibi görünüyor"><text x="80" y="14" font-size="12" text-anchor="middle" font-weight="700">eksen 0’dan</text><text x="245" y="14" font-size="12" text-anchor="middle" font-weight="700" style="fill:var(--bad)">eksen 50’den</text><rect x="45" y="38.3" width="30" height="86.7" style="fill:var(--c);fill-opacity:.85"/><rect x="90" y="31.7" width="30" height="93.3" style="fill:var(--noteline);fill-opacity:.85"/><path class="ln" d="M35 20V125H135" stroke-width="1.6"/><text x="31" y="129" font-size="10" text-anchor="end" class="mut">0</text><text x="31" y="29.0" font-size="10" text-anchor="end" class="mut">60</text><rect x="210" y="96.4" width="30" height="28.6" style="fill:var(--c);fill-opacity:.85"/><rect x="255" y="39.3" width="30" height="85.7" style="fill:var(--noteline);fill-opacity:.85"/><path class="ln" d="M200 20V125H300" stroke-width="1.6"/><text x="196" y="129" font-size="10" text-anchor="end" class="mut">50</text><text x="196" y="29.0" font-size="10" text-anchor="end" class="mut">57</text><text x="60" y="142" font-size="12" text-anchor="middle">K</text><text x="105" y="142" font-size="12" text-anchor="middle">L</text><text x="225" y="142" font-size="12" text-anchor="middle">K</text><text x="270" y="142" font-size="12" text-anchor="middle">L</text></svg>' },
        { s: 'Eksen 50’den başlayınca L, K’nin üç katı gibi duruyor. Oysa fark sadece 4 birim.', v: 'Eksen elliden başlayınca L, K’nin üç katı gibi duruyor. Oysa fark sadece dört birim.',
          h: '<div class="an-trap">Eksen 0’dan başlamıyorsa sütun boylarının oranı, değerlerin oranı <b>değildir</b>. Farklı ölçekli iki grafiği de boyla karşılaştırma.</div>' }
      ] },

    { t: 'Grupla: hangi gösterim uygun?',
      steps: [{ s: 'Her veri için en uygun gösterimi seç. Karşılaştırma mı, zamanla değişim mi, yoksa bütünün parçaları mı, ona bak.' }],
      ia: { tip: 'grup', q: '<p>Her veriyi en uygun grafik türüne yerleştir.</p>', gruplar: ['Sütun', 'Çizgi', 'Daire'], ogeler: [
            { m: 'Bir fidanın 8 haftalık boyu', g: 1 },
            { m: 'Dört ilin nüfusu', g: 0 },
            { m: 'Aile bütçesinin harcama payları', g: 2 },
            { m: 'Gün boyunca saat saat sıcaklık', g: 1 },
            { m: 'Şubelerin topladığı atık kâğıt', g: 0 },
            { m: 'Bir günün 24 saatinin dağılımı', g: 2 },
            { m: 'Sınıftaki göz renklerinin yüzdesi', g: 2 },
            { m: 'Takımların attığı gol sayısı', g: 0 }], hint: 'Sütun karşılaştırır, çizgi zamanla değişimi gösterir, daire ise bir bütünün paylarını gösterir.', why: 'Ayrı grupları karşılaştırmak sütunun işi. Zaman içindeki değişim çizgiyle, bir bütünün payları da daire grafiğiyle gösterilir: bütçe, 24 saat ve yüzdeler bir bütün oluşturur.' } },

    { t: 'LGS’nin favorisi: iki grafik birlikte',
      steps: [
        { s: 'Son yıllarda bu konudan gelen soruların çoğu, iki grafiğin birlikte verildiği sorular. Genellikle sınavın son sorularında.',
          h: '<div class="an-rule"><b>1.</b> Köprüyü bul (ortak büyüklük) · <b>2.</b> Ölçeği hesapla · <b>3.</b> Öteki grafiğe taşı · <b>4.</b> Tam sayı mı, kontrol et</div>' },
        { s: 'Bir örnek: Ekim’de 240 fidan satılmış. Daire grafiğinde ıhlamur 135°. Ihlamurun haftalık satışı sütunlarda 2, 4, 3 kare. 2. hafta kaç ıhlamur?', v: 'Bir örnek: Ekim’de iki yüz kırk fidan satılmış. Daire grafiğinde ıhlamur yüz otuz beş derece. Ihlamurun haftalık satışı, sütunlarda iki, dört ve üç kare. İkinci hafta kaç ıhlamur satılmış?',
          h: '<div class="an-ex"><span class="an-l rv i1">Köprü: ıhlamur = {{135|360}} · 240 = {{3|8}} · 240 = 90</span><span class="an-l rv i2">2 + 4 + 3 = 9 kare → 1 kare = 90 ÷ 9 = 10</span><span class="an-l rv i3">2. hafta: 4 · 10 = <b>40 fidan</b></span></div>' },
        { s: 'Köprü ıhlamur. Daireden sayısını bulalım: {{135|360}} çarpı 240, 90 fidan.', v: 'Köprü, ıhlamur. Daireden sayısını bulalım: üç yüz altmışta yüz otuz beş, çarpı iki yüz kırk; doksan fidan.', on: '.i1' },
        { s: 'Sütunlarda toplam 9 kare var. 90 fidan 9 kareyse, 1 kare 10 fidan.', v: 'Sütunlarda toplam dokuz kare var. Doksan fidan dokuz kareyse, bir kare on fidan.', on: '.i2' },
        { s: 'İkinci hafta 4 kare, yani 40 fidan. Gördün mü, sırayı izleyince iş çok kolaylaşıyor.', v: 'İkinci hafta dört kare, yani kırk fidan. Gördün mü, sırayı izleyince iş çok kolaylaşıyor.', on: '.i3' }
      ] },

    { t: 'Ara soru', cp: {
        q: '<p>Kulüplere katılan 180 öğrencinin dağılımını gösteren daire grafiğinde satranç kulübünün dilimi 120°’dir. Satranç kulübündeki öğrencilerin sınıflara göre dağılımı aşağıdaki sütun grafiğinde verilmiştir (ölçek yazılmamıştır).</p><svg class="an-svg" viewBox="0 0 250 130" role="img" aria-label="Satranç kulübündeki öğrencilerin sınıflara göre dağılımı: 5. sınıf 5 kare, 6. sınıf 4 kare, 7. sınıf 3 kare"><path class="ln" d="M40 91H230M40 77H230M40 63H230M40 49H230M40 35H230M40 21H230M54 21V105M68 21V105M82 21V105M96 21V105M110 21V105M124 21V105M138 21V105M152 21V105M166 21V105M180 21V105M194 21V105M208 21V105M222 21V105" stroke-width=".6" opacity=".55"/><path class="ln" d="M40 17V105H232" stroke-width="1.6"/><rect x="54" y="35" width="28" height="70" style="fill:var(--c);fill-opacity:.85"/><text x="68" y="121" font-size="11.5" text-anchor="middle">5. sınıf</text><rect x="110" y="49" width="28" height="56" style="fill:var(--c);fill-opacity:.85"/><text x="124" y="121" font-size="11.5" text-anchor="middle">6. sınıf</text><rect x="166" y="63" width="28" height="42" style="fill:var(--c);fill-opacity:.85"/><text x="180" y="121" font-size="11.5" text-anchor="middle">7. sınıf</text><text x="8" y="14" font-size="10.5" class="mut">öğrenci</text></svg><p>Satranç kulübünde kaç tane <b>6. sınıf</b> öğrencisi vardır?</p>',
        c: ['15', '20', '24', '40'], a: 'B',
        hint: 'Köprü satranç kulübü: önce daire grafiğinden kulüpteki öğrenci sayısını bul, sonra toplam kare sayısına böl.',
        why: 'Satranç = {{120|360}} · 180 = 60 öğrenci. Sütunlarda 5 + 4 + 3 = 12 kare → 1 kare = 5 öğrenci. 6. sınıf: 4 · 5 = 20.',
        whyV: 'Satranç kulübü, üçte bir çarpı yüz seksen, altmış öğrenci. Sütunlarda beş artı dört artı üç, on iki kare var. Bir kare beş öğrenci. Altıncı sınıf dört kare, yani yirmi öğrenci.' },
      steps: [{ s: 'Son soru, tam LGS tarzı! Köprüyü bul ve ilerle.', v: 'Son soru, tam le ge se tarzı! Köprüyü bul ve ilerle.' }] }
  ]
};
