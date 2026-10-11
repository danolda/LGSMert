LGS.add({
id: "tr-sanat",
summary: `
<h3>1. Benzetme (Teşbih)</h3>
<p>Aralarında ortak bir özellik bulunan iki varlıktan zayıf olanı, özelliği güçlü olana benzetmektir.</p>
<div class="fig"><svg viewBox="0 0 600 160" width="580" role="img" aria-label="Benzetmenin unsurları">
<text x="300" y="30" font-size="17" text-anchor="middle">“<tspan fill="#2563eb" font-weight="bold">Çocuğun yanakları</tspan> <tspan fill="#dc2626" font-weight="bold">elma</tspan> <tspan fill="#16a34a" font-weight="bold">gibi</tspan> <tspan fill="#a16207" font-weight="bold">kıpkırmızıydı</tspan>.”</text>
<g font-size="12" text-anchor="middle">
<rect x="20" y="60" width="130" height="50" rx="8" fill="#dbeafe" stroke="#2563eb"/><text x="85" y="82" font-weight="bold">Benzeyen</text><text x="85" y="98">yanaklar</text>
<rect x="165" y="60" width="130" height="50" rx="8" fill="#fee2e2" stroke="#dc2626"/><text x="230" y="82" font-weight="bold">Kendisine benzetilen</text><text x="230" y="98">elma</text>
<rect x="310" y="60" width="130" height="50" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="375" y="82" font-weight="bold">Benzetme edatı</text><text x="375" y="98">gibi</text>
<rect x="455" y="60" width="130" height="50" rx="8" fill="#fef3c7" stroke="#a16207"/><text x="520" y="82" font-weight="bold">Benzetme yönü</text><text x="520" y="98">kırmızılık</text>
<text x="300" y="140" fill="#475569">Edatlar: gibi, kadar, sanki, âdeta, -ce/-ca · Benzeyen ve kendisine benzetilen olmadan benzetme olmaz.</text></g>
</svg></div>
<ul>
<li>Edat ve benzetme yönü söylenmeyebilir: “<b>Aslan</b> askerler” (askerler aslana benzetilmiş), “<b>Bulut</b> saçların” gibi.</li>
<li><b>Dikkat:</b> “gibi” her zaman benzetme yapmaz. “Senin gibi öğrenciler…” (örnekleme), “Akşam gibi gelir.” (zaman, yaklaşık) cümlelerinde benzetme yoktur. Aynı türden iki varlığın kıyaslanması da benzetme değildir: “Ablası gibi uzun boylu.” (karşılaştırma)</li>
</ul>

<h3>2. Kişileştirme (Teşhis) ve Konuşturma (İntak)</h3>
<table class="rt"><tr><th>Sanat</th><th>Tanım</th><th>Örnek</th></tr>
<tr><td><b>Kişileştirme</b></td><td>İnsan dışındaki varlıklara insana ait özellikler (duygu, davranış) verme</td><td>“Rüzgâr pencereme vurup <b>ağladı</b>.” · “Çiçekler bahara <b>gülümsedi</b>.”</td></tr>
<tr><td><b>Konuşturma</b></td><td>İnsan dışındaki varlıkları konuşturma</td><td>“Dağ, ‘Ben bu toprağın bekçisiyim.’ <b>dedi</b>.”</td></tr></table>
<div class="note">Konuşturmanın olduğu her yerde kişileştirme de vardır (konuşmak insana ait bir özelliktir). Ancak her kişileştirmede konuşturma yoktur.</div>

<h3>3. Abartma (Mübalağa) ve Karşıtlık (Tezat)</h3>
<ul>
<li><b>Abartma:</b> Bir durumu olduğundan çok büyük ya da çok küçük gösterme. “Öyle güldük ki <b>karnımız yarıldı</b>.” · “<b>Bir deniz</b> gözyaşı döktü.”</li>
<li><b>Karşıtlık:</b> Zıt kavramları bir arada kullanarak anlatımı güçlendirme. “<b>Ağlarım</b> hatıra geldikçe <b>güldüğüm</b> demler.” · “Kimi <b>yokuş</b> kimi <b>iniş</b>…”</li>
</ul>
<div class="key"><b>Çözüm sırası:</b> 1) İnsan dışı bir varlık insan gibi mi davranıyor? → kişileştirme · 2) Konuşuyor mu? → konuşturma · 3) “gibi, sanki” ya da iki varlık arasında ortak özellik var mı? → benzetme · 4) Gerçek dışı büyütme var mı? → abartma</div>
`,
qs: [
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>benzetme</b> yapılmıştır?</p>`,
  c: [`Ablası gibi o da tıp fakültesini kazanmak istiyor.`, `Misafirler akşam gibi gelirler.`, `Senin gibi meraklı öğrencilerle çalışmak çok keyifli.`, `Bebeğin elleri pamuk gibi yumuşacıktı.`], a: "D",
  s: `<p>D’de bebeğin elleri (benzeyen), yumuşaklık yönünden (benzetme yönü) pamuğa (kendisine benzetilen) “gibi” edatıyla benzetilmiştir → <b>benzetme</b>.</p><p>A’da aynı türden iki varlık (abla ile kardeş) kıyaslanmış; C’de “gibi” örnekleme bildirir; B’de “akşam gibi” yaklaşık zaman anlamındadır. Bu cümlelerde benzetme yoktur. Cevap <b>D</b>.</p>` },
{ q: `<p>“Annemin sesi, yorgun akşamlarda bir ninni kadar huzur vericiydi.”</p><p>Bu cümledeki benzetmenin unsurları aşağıdakilerin hangisinde doğru verilmiştir?</p>`,
  c: [`Benzeyen: ninni — Kendisine benzetilen: annemin sesi — Benzetme yönü: yorgunluk`, `Benzeyen: annemin sesi — Kendisine benzetilen: akşamlar — Benzetme yönü: yorgunluk`, `Benzeyen: akşamlar — Kendisine benzetilen: ninni — Benzetme yönü: sessizlik`, `Benzeyen: annemin sesi — Kendisine benzetilen: ninni — Benzetme yönü: huzur vericilik`], a: "D",
  s: `<p>Cümlede “annemin sesi” (benzeyen), huzur verme yönüyle (benzetme yönü) “ninni”ye (kendisine benzetilen) benzetilmiştir. Benzetme edatı “kadar”dır.</p><p>Benzetmede özelliği daha zayıf olan benzeyen, özelliği daha güçlü olan kendisine benzetilendir; huzur verme özelliği ninnide daha belirgindir. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>kişileştirme</b> vardır?</p>`,
  c: [`Kar taneleri pencerenin önünde dans ediyordu.`, `Kar, bütün gece aralıksız yağdı.`, `Kardan adamın burnuna havuç taktık.`, `Bu yıl kar her zamankinden erken geldi.`], a: "A",
  s: `<p>A’da kar tanelerine insana ait bir davranış olan “dans etmek” özelliği verilmiştir → <b>kişileştirme</b>.</p><p>B ve D’de kar gerçek anlamıyla anlatılmıştır (“gelmek” burada “başlamak, görülmek” anlamındadır). C’de kardan adam yapma anlatılmış, insana özgü bir davranış yüklenmemiştir. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>konuşturma</b> sanatı vardır?</p>`,
  c: [`Yaşlı çınar, gölgesinde dinlenen yolculara yüzyılların hikâyesini fısıldıyordu.`, `Kuşlar sabah olunca neşeli şarkılar söylemeye başladı.`, `Dalgalar kıyıya öfkeyle vuruyordu.`, `Kalem kâğıda, “Beni sıkıca tut, birlikte güzel bir hikâye yazalım.” dedi.`], a: "D",
  s: `<p>D’de kalem tırnak içinde doğrudan konuşturulmuş ve “dedi” fiiliyle sözleri aktarılmıştır → <b>konuşturma</b> (ve dolayısıyla kişileştirme).</p><p>A’da “fısıldamak”, B’de “neşeli şarkılar söylemek”, C’de “öfkeyle vurmak” insana ait özelliklerdir; bunlar kişileştirmedir ancak varlıkların söylediği sözler aktarılmadığı için konuşturma yoktur. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>abartma</b> vardır?</p>`,
  c: [`Yarışmada üçüncü olduğu için çok sevindi.`, `Bu kitabı iki günde bitirdim.`, `Sabah erkenden kalkıp yürüyüşe çıktık.`, `Seni o kadar özledim ki gözlerim yollarda kurudu.`], a: "D",
  s: `<p>D’de özlemin büyüklüğü, “gözlerin yollarda kuruması” gibi gerçekte olamayacak bir ifadeyle olduğundan çok büyük gösterilmiştir → <b>abartma</b>.</p><p>A, C ve B’de gerçekçi, olağan durumlar anlatılmıştır. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki dizelerin hangisinde <b>karşıtlık (tezat)</b> vardır?</p>`,
  c: [`Yağmur yağar, toprak kokar`, `Kimi güler, kimi ağlar bu dünyada`, `Dağlar başı dumanlı`, `Gökyüzü bir mavi örtü`], a: "B",
  s: `<p>B’de “gülmek” ile “ağlamak” zıt kavramları bir arada kullanılarak dünyadaki farklı hâller anlatılmıştır → <b>karşıtlık</b>.</p><p>A’da doğa olayı anlatılmış; C’de dağların görünümü verilmiş; D’de gökyüzü bir örtüye benzetilmiştir (benzetme). Cevap <b>B</b>.</p>` },
{ q: `<p>“Güneş, sabahları dağların ardından utangaç bir çocuk gibi başını uzatır.”</p><p>Bu cümlede hangi söz sanatları birlikte kullanılmıştır?</p>`,
  c: [`Benzetme ve kişileştirme`, `Konuşturma ve abartma`, `Abartma ve karşıtlık`, `Konuşturma ve benzetme`], a: "A",
  s: `<p>Güneş “utangaç bir çocuğa” “gibi” edatıyla benzetilmiştir → <b>benzetme</b>. Ayrıca güneşe insana ait “utangaçlık” ve “başını uzatmak” özellikleri verilmiştir → <b>kişileştirme</b>.</p><p>Cümlede güneş konuşmadığı için konuşturma; gerçek dışı bir büyütme olmadığı için abartma; zıt kavram olmadığı için karşıtlık yoktur. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>benzetme yönü</b> belirtilmemiştir?</p>`,
  c: [`Kardeşim tilki gibi kurnazdır.`, `Dedemin sözleri bal kadar tatlıydı.`, `Onun yüreği bir aslan yüreğidir.`, `Göl, ayna gibi pırıl pırıldı.`], a: "C",
  s: `<p>A’da kurnazlık, B’de tatlılık, D’de parlaklık (pırıl pırıl) benzetme yönleri açıkça söylenmiştir.</p><p>C’de “onun yüreği” aslan yüreğine benzetilmiş, ancak hangi özellik yönünden (cesaret) benzetildiği söylenmemiştir. Cevap <b>C</b>.</p>` },
{ q: `<p><i>Çiçekler uyandı bir sabah erken,<br>Güneşe el salladı papatyalar;<br>Rüzgâr türkü söyledi geçerken,<br>Gülümsedi dallarda kayısılar.</i></p><p>Bu dörtlükte aşağıdaki söz sanatlarından hangisi <b>ağırlıklı olarak</b> kullanılmıştır?</p>`,
  c: [`Benzetme`, `Kişileştirme`, `Abartma`, `Karşıtlık`], a: "B",
  s: `<p>Dörtlükte çiçeklerin “uyanması”, papatyaların “el sallaması”, rüzgârın “türkü söylemesi” ve kayısıların “gülümsemesi” insana ait davranışlardır → <b>kişileştirme</b>.</p><p>Dörtlükte “gibi” vb. ile kurulmuş bir benzetme, gerçek dışı büyütme ya da zıt kavramların bir arada kullanımı belirgin değildir. Cevap <b>B</b>.</p>` },
{ q: `<p>(I) Ay, gece boyunca yolumuzu aydınlattı.<br>(II) Kapı gıcırdayarak sitem etti bize.<br>(III) Saatler, “Acele et, zaman tükeniyor!” diye bağırıyordu.<br>(IV) Deniz, sabaha karşı sakinleşti.</p><p>Numaralanmış cümlelerin hangisinde hem kişileştirme hem konuşturma vardır?</p>`,
  c: [`I.`, `II.`, `III.`, `IV.`], a: "C",
  s: `<p>III’te saatler tırnak içinde konuşturulmuş ve “bağırıyordu” denmiştir → <b>konuşturma</b>; konuşma insana ait bir özellik olduğu için aynı zamanda <b>kişileştirme</b> de vardır.</p><p>II’de kapıya “sitem etmek” özelliği verilmiştir; bu kişileştirmedir ama sözleri aktarılmadığı için konuşturma yoktur. I ve IV’te gerçek anlatım vardır. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde söz sanatı <b>yoktur</b>?</p>`,
  c: [`Sevincinden ayakları yere değmiyordu.`, `Ağaçlar sonbaharda sarı elbiselerini giydi.`, `Kütüphanede iki saat boyunca ders çalıştık.`, `Onun gülüşü bahar güneşi gibi içimizi ısıtırdı.`], a: "C",
  s: `<p>A’da sevincin büyüklüğü gerçek dışı bir ifadeyle anlatılmıştır → abartma. B’de ağaçlara “elbise giymek” özelliği verilmiştir → kişileştirme. D’de gülüş bahar güneşine benzetilmiştir → benzetme.</p><p>C’de gerçek bir durum, söz sanatı kullanılmadan anlatılmıştır. Cevap <b>C</b>.</p>` },
{ q: `<p>“Bu çanta o kadar ağır ki taşırken belim iki büklüm oldu.”</p><p>Bu cümlede kullanılan söz sanatı aşağıdakilerin hangisinde de vardır?</p>`,
  c: [`Öğretmenimizin anlattıklarını dikkatle dinledik.`, `Seni bekleye bekleye bu kapıda kök saldım.`, `Kedimiz güneşin altında mışıl mışıl uyuyordu.`, `Ormanın derinliklerinde bir kulübe vardı.`], a: "B",
  s: `<p>Verilen cümlede çantanın ağırlığı “belin iki büklüm olması” ile olduğundan çok büyük gösterilmiştir → <b>abartma</b>.</p><p>B’de beklemenin çok uzun sürdüğü, insanın “kök salması” gibi gerçekleşemeyecek bir ifadeyle anlatılmıştır → abartma. A, C ve D’de gerçekçi anlatım vardır. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde benzetme <b>edatı kullanılmadan</b> benzetme yapılmıştır?</p>`,
  c: [`Çocuğun gözleri yıldız gibi parlıyordu.`, `Bu odanın sessizliği âdeta bir mezar sessizliğiydi.`, `İnci dişleriyle gülümsedi.`, `Saçları sanki altın tellerdi.`], a: "C",
  s: `<p>C’de dişler, beyazlık ve parlaklık yönünden inciye benzetilmiştir; ancak “gibi, sanki, âdeta, kadar” gibi bir edat kullanılmamıştır. (“İnci dişler” → inci gibi dişler.)</p><p>A’da “gibi”, B’de “âdeta”, D’de “sanki” benzetme edatı olarak kullanılmıştır. Cevap <b>C</b>.</p>` },
{ q: `<p><i>Dağlar dedi: “Bekledim yıllarca seni,<br>Her bahar umutla, her kış sabırla.”<br>Ben dedim: “Döndüm işte, sar beni,<br>Yolum uzundu, geçti bin bir zorla.”</i></p><p>Bu dörtlükte aşağıdaki söz sanatlarından hangisi <b>kullanılmamıştır</b>?</p>`,
  c: [`Konuşturma`, `Kişileştirme`, `Karşıtlık`, `Benzetme`], a: "D",
  s: `<p>Dağlar tırnak içinde konuşturulmuştur → <b>konuşturma</b>; “beklemek”, “sarmak” gibi insana ait özellikler de verildiği için <b>kişileştirme</b> vardır. “Bahar” ile “kış” zıt kavramları bir arada kullanılmıştır → <b>karşıtlık</b>.</p><p>Dörtlükte herhangi bir varlık başka bir varlığa benzetilmemiştir. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>kişileştirme</b> yoktur?</p>`,
  c: [`Yorgun sokak lambaları sabaha kadar nöbet tuttu.`, `Sabırsız rüzgâr, kapıyı tekrar tekrar çaldı.`, `Bahçedeki ağaçlar meyveyle doldu.`, `Kırgın yapraklar dallarına veda etti.`], a: "C",
  s: `<p>A’da lambalara “yorgunluk” ve “nöbet tutmak”, B’de rüzgâra “sabırsızlık” ve “kapı çalmak”, D’de yapraklara “kırgınlık” ve “veda etmek” özellikleri verilmiştir → kişileştirme.</p><p>C’de ağaçların meyve vermesi gerçek bir durumdur; insana ait bir özellik yüklenmemiştir. Cevap <b>C</b>.</p>` },
{ q: `<p>“Kitaplar sessiz öğretmenlerdir.”</p><p>Bu cümleyle ilgili aşağıdakilerden hangisi <b>doğrudur</b>?</p>`,
  c: [`Kitaplar konuşturulmuştur.`, `Kitaplar öğretmenlere benzetilmiş, benzetme edatı kullanılmamıştır.`, `Kitapların önemi abartılarak anlatılmıştır.`, `Kitaplar ile öğretmenler arasında karşıtlık kurulmuştur.`], a: "B",
  s: `<p>Kitaplar, bilgi verme ve yol gösterme yönüyle “öğretmen”e benzetilmiştir; “gibi” vb. bir edat kullanılmamıştır → edatsız <b>benzetme</b>.</p><p>Kitaplar konuşturulmamıştır; aksine “sessiz” denmiştir. Gerçek dışı bir büyütme ya da zıtlık da yoktur. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde altı çizili sözle <b>karşıtlık</b> oluşturulmuştur?</p>`,
  c: [`Hayatın <u>acısını da tatlısını da</u> birlikte yaşadık.`, `Bu yemeğin <u>tadı tuzu</u> yerinde.`, `Sabahtan beri <u>koşturup duruyor</u>.`, `<u>Kitap okumayı</u> çok seviyor.`], a: "A",
  s: `<p>A’da “acı” ile “tatlı” zıt anlamlı sözcükleri bir arada kullanılarak hayatın iyi ve kötü yanları anlatılmıştır → <b>karşıtlık</b>.</p><p>B’deki “tadı tuzu” eş anlamlı kullanım (ikileme) olup zıtlık bildirmez; C ve D’de zıt kavram yoktur. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>benzetme</b> ve <b>abartma</b> birlikte kullanılmıştır?</p>`,
  c: [`Dağ gibi yığılan bulaşıklar bitmek bilmiyordu.`, `Arkadaşım koşarak yanıma geldi.`, `Rüzgâr kulağıma bir şarkı fısıldadı.`, `Akşam yemeğinden sonra çay içtik.`], a: "A",
  s: `<p>A’da bulaşıklar “dağ”a benzetilmiştir → <b>benzetme</b>. Bulaşık yığınının dağ kadar büyük olduğunu söylemek, miktarı olduğundan çok fazla göstermektir → <b>abartma</b>.</p><p>B ve D’de söz sanatı yoktur; C’de rüzgâra “fısıldamak” özelliği verilmiştir (kişileştirme). Cevap <b>A</b>.</p>` },
{ q: `<p>(I) Gece, şehrin üstüne siyah bir yorgan gibi serildi.<br>(II) Sokak lambaları uykulu gözlerini kırpıştırıyordu.<br>(III) Rüzgâr, “Uyuyun artık!” diye pencerelere sesleniyordu.<br>(IV) Sabaha kadar binlerce yıldız gökyüzünü süsledi.</p><p>Bu cümlelerle ilgili aşağıdakilerden hangisi <b>yanlıştır</b>?</p>`,
  c: [`I’de gece yorgana benzetilmiştir.`, `II’de sokak lambaları kişileştirilmiştir.`, `III’te konuşturma sanatı vardır.`, `IV’te kişileştirme ve konuşturma birlikte kullanılmıştır.`], a: "D",
  s: `<p>I’de gece, “gibi” ile siyah bir yorgana benzetilmiştir ✓. II’de lambalara “uykulu gözlerini kırpıştırmak” özelliği verilmiştir → kişileştirme ✓. III’te rüzgâr tırnak içinde konuşturulmuştur ✓.</p><p>IV’te yıldızların gökyüzünü süslemesi anlatılmıştır; yıldızlar konuşturulmamıştır. Bu nedenle D’deki ifade yanlıştır. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki dizelerin hangisinde <b>benzetme</b> yoktur?</p>`,
  c: [`Bir kuş gibi süzülür gönlüm bulutlara`, `Sarı başaklar savrulur rüzgârda`, `Gözlerin iki damla deniz mavisi`, `Kalbim bir kuş kafeste çırpınır`], a: "B",
  s: `<p>A’da gönül “kuş”a, C’de gözler “deniz mavisi”ne, D’de kalp kafesteki “kuş”a benzetilmiştir.</p><p>B’de başakların rüzgârda savrulması gerçekçi bir görüntüdür; “sarı” yalnızca rengi bildiren bir sıfattır, başaklar başka bir varlığa benzetilmemiştir. (Dikkat: “altın başaklar” denseydi başaklar rengi yönüyle altına benzetilmiş olurdu.) Cevap <b>B</b>.</p>` },
{ q: `<p>Bir öğrenci söz sanatlarına örnek olarak aşağıdaki cümleleri yazmıştır.</p>
<table class="rt"><tr><th>Cümle</th><th>Söz sanatı</th></tr>
<tr><td>Bulutlar gökyüzünde ağır ağır yürüyordu.</td><td>Kişileştirme</td></tr>
<tr><td>Ağlamaktan gözlerimde yaş kalmadı.</td><td>Abartma</td></tr>
<tr><td>Kardeşim babam gibi çok çalışkandır.</td><td>Benzetme</td></tr>
<tr><td>Çiçek, arıya “Bal mı istersin?” diye sordu.</td><td>Konuşturma</td></tr></table>
<p>Öğrencinin hangi söz sanatına verdiği örnek <b>yanlıştır</b>?</p>`,
  c: [`Kişileştirme`, `Abartma`, `Benzetme`, `Konuşturma`], a: "C",
  s: `<p>Bulutlara “yürümek” özelliği verilmiştir → kişileştirme ✓. Gözlerde hiç yaş kalmaması gerçek dışı bir büyütmedir → abartma ✓. Çiçek tırnak içinde konuşturulmuştur → konuşturma ✓.</p><p>“Kardeşim babam gibi çok çalışkandır.” cümlesinde aynı türden iki varlık (iki insan) karşılaştırılmıştır; bu bir benzetme değildir. Cevap <b>C</b>.</p>` },
{ q: `<p><i>Gözlerimde bir ırmak akar durmadan<br>Sensiz geçen her gün bir asır gibi<br>Yollar bile ağlar beni görünce<br>Bekleyişim dağları aşar bir sel gibi</i></p><p>Bu dörtlükte aşağıdaki söz sanatlarından hangisi <b>yoktur</b>?</p>`,
  c: [`Abartma`, `Benzetme`, `Kişileştirme`, `Konuşturma`], a: "D",
  s: `<p>“Gözlerimde bir ırmak akar” ve “bekleyişim dağları aşar” ifadeleri gerçek dışı büyütmedir → abartma. “Her gün bir asır gibi”, “bir sel gibi” → benzetme. “Yollar bile ağlar” → yollara insana ait ağlama özelliği verilmiştir → kişileştirme.</p><p>Dörtlükte hiçbir varlık konuşturulmamıştır. Cevap <b>D</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde altı çizili sözcük <b>kişileştirme</b> sanatı oluşturmuştur?</p>`,
  c: [`Çocuk, oyuncağını kaybedince <u>ağladı</u>.`, `Gökyüzü, kara bulutlarla birlikte <u>ağladı</u>.`, `Annem, kardeşimi uyutmak için <u>ninni söyledi</u>.`, `Öğretmen, sınav sonuçlarını açıklarken <u>gülümsedi</u>.`], a: "B",
  s: `<p>B’de “ağlamak” insana ait bir eylemdir ve insan dışındaki “gökyüzü”ne verilmiştir (yağmurun yağması anlatılıyor) → <b>kişileştirme</b>.</p><p>A, C ve D’de eylemler zaten insanlara (çocuk, anne, öğretmen) aittir; bu nedenle söz sanatı oluşmaz. Cevap <b>B</b>.</p>` },
{ q: `<p>“Gürültülü şehrin ortasında kitaplarımla baş başa kaldığım o sessiz oda, benim için bir adaydı.”</p><p>Bu cümlede odanın “ada”ya benzetilmesinin nedeni aşağıdakilerden hangisidir?</p>`,
  c: [`Odanın deniz kenarında olması`, `Odanın kalabalık ve gürültüden uzak, sığınılacak bir yer olması`, `Odanın çok geniş ve ferah olması`, `Odada çok sayıda kitabın bulunması`], a: "B",
  s: `<p>Ada, etrafı sularla çevrili, karadan ayrı bir yerdir. Yazar, gürültülü şehrin ortasında sessiz odasını, kalabalıktan <b>ayrı, korunaklı ve sığınılacak</b> bir yer olması yönüyle adaya benzetmiştir. Benzetme yönü budur.</p><p>A’daki gerçek bir deniz yoktur; C ve D benzetmenin dayanağı değildir. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>konuşturma</b> sanatı <b>yoktur</b>?</p>`,
  c: [`Karınca, ağustos böceğine “Yazın çalışsaydın kışın aç kalmazdın.” dedi.`, `Eski saat, “Benim de bir zamanlar gençliğim vardı.” diye iç geçirdi.`, `Çiçekler, sabah güneşine sevinçle başlarını kaldırdı.`, `Ay, yıldızlara “Bu gece en parlak siz olun.” diye seslendi.`], a: "C",
  s: `<p>A’da karınca, B’de eski saat, D’de ay tırnak içinde konuşturulmuştur → konuşturma.</p><p>C’de çiçeklere “sevinmek” ve “baş kaldırmak” gibi insana ait özellikler verilmiştir; bu kişileştirmedir ama çiçekler konuşmadığı için <b>konuşturma yoktur</b>. Cevap <b>C</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde aynı söz sanatı iki kez kullanılmıştır?</p>`,
  c: [`Onun sesi bülbül gibi, gülüşü güneş gibiydi.`, `Kar yağdı, her yer bembeyaz oldu.`, `Rüzgâr esti, kapı çarptı.`, `Kitabı okudum, çok beğendim.`], a: "A",
  s: `<p>A’da önce “ses” bülbüle, ardından “gülüş” güneşe “gibi” edatıyla benzetilmiştir; cümlede iki ayrı <b>benzetme</b> vardır.</p><p>B, C ve D’de söz sanatı bulunmayan, gerçekçi anlatımlar vardır. Cevap <b>A</b>.</p>` },
{ q: `<p>“Kalem kâğıda dertlerini anlatırken mürekkep gözyaşı gibi damlıyordu.”</p><p>Bu cümlede aşağıdaki söz sanatlarından hangileri vardır?</p>`,
  c: [`Kişileştirme ve benzetme`, `Konuşturma ve abartma`, `Karşıtlık ve benzetme`, `Abartma ve karşıtlık`], a: "A",
  s: `<p>Kaleme insana ait “dertlerini anlatmak” özelliği verilmiştir → <b>kişileştirme</b>. Mürekkep, “gibi” edatıyla gözyaşına benzetilmiştir → <b>benzetme</b>.</p><p>Kalemin ne dediği tırnak içinde aktarılmadığından konuşturma yoktur. Zıt kavram ve gerçek dışı büyütme de bulunmamaktadır. Cevap <b>A</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>abartma</b> yoktur?</p>`,
  c: [`Sınav sonucunu öğrenince sevinçten havalara uçtu.`, `Bu sıcakta beynim eridi.`, `Kardeşim ödevini bir saatte bitirdi.`, `Gülmekten yerlere yattık.`], a: "C",
  s: `<p>A’da “havalara uçmak”, B’de “beynin erimesi”, D’de “gülmekten yerlere yatmak” ifadeleri durumu olduğundan çok büyük gösterir → abartma.</p><p>C’de ödevin bir saatte bitirilmesi gerçekçi bir durumdur. Cevap <b>C</b>.</p>` },
{ q: `<p><i>Ey yüce dağlar, söyleyin bana<br>Hangi rüzgâr savurdu sevdiklerimi?<br>Bir cevap verin, susmayın öyle<br>Taş kesildi yüreğim, kurudu dilim</i></p><p>Bu dörtlükle ilgili aşağıdakilerden hangisi <b>söylenebilir</b>?</p>`,
  c: [`Dağlar konuşturulmuştur.`, `Dağlara insana ait özellikler yüklenerek seslenilmiştir.`, `Rüzgâr ile dağlar arasında karşıtlık kurulmuştur.`, `Şiirde hiç abartma yoktur.`], a: "B",
  s: `<p>Şair dağlara seslenmiş, onlardan cevap vermelerini, susmamalarını istemiştir. Dağlara insan gibi soru sorulması, “susmak” özelliğinin yüklenmesi <b>kişileştirmedir</b> (B ✓).</p><p>A ✗: Dağlar konuşmamaktadır; konuşan şairdir, dağların sözleri aktarılmamıştır. C ✗: Rüzgâr ile dağ zıt kavramlar değildir. D ✗: “Taş kesildi yüreğim” ifadesinde abartma vardır. Cevap <b>B</b>.</p>` },
{ q: `<p>Aşağıdaki cümlelerin hangisinde <b>benzetme</b> yapılırken benzeyen ile kendisine benzetilen arasındaki ortak özellik <b>“hız”</b>dır?</p>`,
  c: [`Atlet, rüzgâr gibi bitiş çizgisine koştu.`, `Dedemin elleri ağaç kabuğu gibi sertti.`, `Bebek, melek gibi uyuyordu.`, `Göl, ayna gibi dümdüzdü.`], a: "A",
  s: `<p>A’da atlet, koşusundaki <b>hız</b> yönünden rüzgâra benzetilmiştir.</p><p>B’de benzetme yönü sertlik, C’de masumiyet/huzur, D’de düzlük ve parlaklıktır. Cevap <b>A</b>.</p>` }
]
});
