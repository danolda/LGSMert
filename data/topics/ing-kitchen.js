LGS.add({
id: "ing-kitchen",
summary: `
<h3>1. Describing a Process (Bir süreci anlatma)</h3>
<div class="fig"><svg viewBox="0 0 640 140" width="620" role="img" aria-label="Sıralama sözcükleri">
<defs><marker id="ik1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker></defs>
<g font-size="12" text-anchor="middle">
<g fill="#fef3c7" stroke="#d97706"><rect x="5" y="20" width="110" height="60" rx="10"/><rect x="135" y="20" width="110" height="60" rx="10"/><rect x="265" y="20" width="110" height="60" rx="10"/><rect x="395" y="20" width="110" height="60" rx="10"/><rect x="525" y="20" width="110" height="60" rx="10"/></g>
<text x="60" y="45" font-weight="bold">First,</text><text x="60" y="65">wash the tomatoes.</text>
<text x="190" y="45" font-weight="bold">Then,</text><text x="190" y="65">chop the onions.</text>
<text x="320" y="45" font-weight="bold">Next,</text><text x="320" y="65">fry them in oil.</text>
<text x="450" y="45" font-weight="bold">After that,</text><text x="450" y="65">add the eggs.</text>
<text x="580" y="45" font-weight="bold">Finally,</text><text x="580" y="65">serve it hot.</text>
<g stroke="#475569" stroke-width="2"><line x1="115" y1="50" x2="133" y2="50" marker-end="url(#ik1)"/><line x1="245" y1="50" x2="263" y2="50" marker-end="url(#ik1)"/><line x1="375" y1="50" x2="393" y2="50" marker-end="url(#ik1)"/><line x1="505" y1="50" x2="523" y2="50" marker-end="url(#ik1)"/></g>
<text x="320" y="115" fill="#475569">Tariflerde emir kipi kullanılır: Peel… Add… Mix… · Edilgen anlatım: The eggs <tspan font-weight="bold">are mixed</tspan>. The cake <tspan font-weight="bold">is baked</tspan>.</text>
</g></svg></div>

<h3>2. Cooking Verbs</h3>
<table class="rt"><tr><td><b>peel</b></td><td>soymak</td><td><b>chop</b></td><td>doğramak</td><td><b>slice</b></td><td>dilimlemek</td></tr>
<tr><td><b>grate</b></td><td>rendelemek</td><td><b>boil</b></td><td>kaynatmak/haşlamak</td><td><b>fry</b></td><td>kızartmak</td></tr>
<tr><td><b>bake</b></td><td>fırında pişirmek</td><td><b>stir</b></td><td>karıştırmak (kaşıkla)</td><td><b>beat / whisk</b></td><td>çırpmak</td></tr>
<tr><td><b>pour</b></td><td>dökmek</td><td><b>melt</b></td><td>eritmek</td><td><b>sprinkle</b></td><td>serpiştirmek</td></tr>
<tr><td><b>squeeze</b></td><td>sıkmak</td><td><b>preheat</b></td><td>önceden ısıtmak</td><td><b>serve</b></td><td>servis etmek</td></tr></table>

<h3>3. Utensils and Quantities</h3>
<ul>
<li><b>Utensils:</b> pot (tencere), pan (tava), oven (fırın), bowl (kâse), grater (rende), cutting board (kesme tahtası), whisk (çırpma teli), ladle (kepçe), oven tray (fırın tepsisi), strainer (süzgeç).</li>
<li><b>Quantities:</b> a cup of flour · a glass of milk · a tablespoon of oil · a teaspoon of salt · <b>a pinch of</b> salt (bir tutam) · a slice of bread · a kilo of tomatoes · two cloves of garlic.</li>
</ul>
`,
qs: [
{ q: `<p>Here are the steps for making <b>menemen</b>, a traditional Turkish breakfast dish.</p><p>(I) After that, add the eggs and stir slowly.<br>(II) First, chop the peppers and fry them in olive oil.<br>(III) Finally, serve it hot with fresh bread.<br>(IV) Then, add the chopped tomatoes and cook for five minutes.</p><p>What is the correct order of the steps?</p>`,
  c: [`I – II – IV – III`, `II – IV – I – III`, `II – I – IV – III`, `IV – II – I – III`], a: "B",
  s: `<p>Sıralama sözcüklerine göre: <b>First</b> (II) → <b>Then</b> (IV) → <b>After that</b> (I) → <b>Finally</b> (III).</p><p>Önce biberler doğranıp kızartılır, sonra domatesler eklenir, ardından yumurtalar eklenip karıştırılır, en sonunda sıcak servis edilir. Cevap <b>B</b>.</p>` },
{ q: `<p>“to cut food into thin, flat pieces”</p><p>Which cooking verb matches this definition?</p>`,
  c: [`boil`, `pour`, `slice`, `melt`], a: "C",
  s: `<p>Yiyeceği <b>ince, yassı parçalar</b> hâlinde kesmek “slice” (dilimlemek) demektir: slice the bread, slice the tomatoes.</p><p>Boil kaynatmak, pour dökmek, melt eritmek anlamındadır. Cevap <b>C</b>.</p>` },
{ q: `<p>“Fill a ---- with water and boil the pasta for ten minutes.”</p><p>Which kitchen item best completes the sentence?</p>`,
  c: [`pot`, `grater`, `cutting board`, `whisk`], a: "A",
  s: `<p>Su doldurulup içinde makarna haşlanan mutfak eşyası <b>pot</b>’tur (tencere).</p><p>Grater rende, cutting board kesme tahtası, whisk çırpma telidir; içinde su kaynatılmaz. Cevap <b>A</b>.</p>` },
{ q: `<p><b>Pancakes (for 4 people)</b></p><table class="rt"><tr><th>Ingredients</th></tr><tr><td>2 cups of flour</td></tr><tr><td>2 eggs</td></tr><tr><td>1 and a half cups of milk</td></tr><tr><td>2 tablespoons of sugar</td></tr><tr><td>a pinch of salt</td></tr></table><p>Elif wants to make pancakes for <b>8</b> people. How many eggs does she need?</p>`,
  c: [`1`, `2`, `3`, `4`], a: "D",
  s: `<p>Tarif 4 kişiliktir ve 2 yumurta gerektirir. 8 kişi için malzemeler iki katına çıkarılmalıdır: 2 × 2 = <b>4 yumurta</b>.</p><p>Cevap <b>D</b>.</p>` },
{ q: `<p><b>Fruit Salad</b><br><i>First, wash the strawberries and the grapes. Then, peel the bananas and the kiwis and slice them. Next, put all the fruit in a big bowl. After that, squeeze half a lemon over the fruit. Finally, add some honey and mix gently.</i></p><p>Which ingredient is <b>NOT</b> used in the recipe?</p>`,
  c: [`kiwis`, `apples`, `lemon`, `honey`], a: "B",
  s: `<p>Tarifte çilek, üzüm, muz, kivi, limon ve bal kullanılmaktadır.</p><p><b>Elma (apples)</b> tarifte geçmez. Cevap <b>B</b>.</p>` },
{ q: `<p><b>Ben:</b> How do you make lemonade?<br><b>Grandma:</b> It’s easy. ----. Then add water and some sugar. Mix well and put some ice in it.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`First, squeeze the lemons into a jug`, `Finally, drink it with your friends`, `Bake the lemons in the oven for an hour`, `I don’t like lemonade at all`], a: "A",
  s: `<p>Büyükanne limonata yapımını adım adım anlatıyor ve ikinci adım “Then…” ile başlıyor. Boşluğa ilk adım gelmelidir: “First, squeeze the lemons into a jug.” (Önce limonları bir sürahiye sık.)</p><p>B son adımdır; C limonata yapımıyla ilgili değildir; D bir beğenmeme ifadesidir. Cevap <b>A</b>.</p>` },
{ q: `<p>“Add <u>a pinch of</u> salt to the soup.”</p><p>What does the underlined phrase mean?</p>`,
  c: [`a large amount of`, `a cup of`, `a very small amount of`, `a kilo of`], a: "C",
  s: `<p>“A pinch of” iki parmak arasında alınabilecek kadar, yani <b>çok az miktarda</b> (bir tutam) anlamına gelir.</p><p>Diğer seçenekler daha büyük miktarlar bildirir. Cevap <b>C</b>.</p>` },
{ q: `<p>“First, the potatoes ---- and cut into small pieces.”</p><p>Which of the following best completes the sentence?</p>`,
  c: [`peel`, `are peeled`, `peeling`, `is peel`], a: "B",
  s: `<p>Cümlede patatesler işi yapan değil, işten etkilenendir; bu nedenle <b>edilgen</b> yapı kullanılmalıdır: “The potatoes <b>are peeled</b> and cut into small pieces.” (Patatesler soyulur ve küçük parçalara kesilir.) “Potatoes” çoğul olduğu için “are” kullanılır.</p><p>Cevap <b>B</b>.</p>` },
{ q: `<p>“Bake the cake for 40 minutes. Let it cool down. Finally, ---- the cake with chocolate and strawberries.”</p><p>Which verb best completes the recipe?</p>`,
  c: [`boil`, `peel`, `grate`, `decorate`], a: "D",
  s: `<p>Kek pişip soğuduktan sonra son adımda çikolata ve çileklerle <b>süslenir</b>: “decorate the cake”.</p><p>Kek kaynatılmaz (boil), soyulmaz (peel), rendelenmez (grate). Cevap <b>D</b>.</p>` },
{ q: `<p>Which of the following explains the difference between <b>boiling</b> and <b>frying</b> correctly?</p>`,
  c: [`We boil food in hot water, but we fry it in hot oil.`, `We boil food in an oven, but we fry it in a fridge.`, `We boil food with a grater, but we fry it with a knife.`, `We boil food in cold water, but we fry it in cold milk.`], a: "A",
  s: `<p><b>Boil</b>, yiyeceği kaynar suda pişirmek (haşlamak); <b>fry</b>, kızgın yağda pişirmek (kızartmak) demektir.</p><p>Diğer seçenekler mantıksızdır. Cevap <b>A</b>.</p>` },
{ q: `<p>Look at the cooking times.</p><table class="rt"><tr><th>Food</th><th>Cooking method</th><th>Time</th></tr><tr><td>Rice</td><td>boil</td><td>20 minutes</td></tr><tr><td>Chicken</td><td>bake</td><td>45 minutes</td></tr><tr><td>Eggs</td><td>boil</td><td>10 minutes</td></tr><tr><td>Fish</td><td>fry</td><td>15 minutes</td></tr></table><p>According to the table, which of the following is <b>TRUE</b>?</p>`,
  c: [`Fish takes longer to cook than chicken.`, `Rice is fried for 20 minutes.`, `Chicken is cooked in the oven.`, `Eggs take the longest time to cook.`], a: "C",
  s: `<p>Tabloda tavuğun pişirme yöntemi “bake” (fırında pişirmek) olarak verilmiştir; yani tavuk <b>fırında</b> pişirilir (C ✓).</p><p>Balık (15 dk) tavuktan (45 dk) kısa sürede pişer (A ✗); pirinç haşlanır (B ✗); en uzun süre pişen tavuktur (D ✗). Cevap <b>C</b>.</p>` },
{ q: `<p><b>Kitchen Safety Tips</b><br><i>Always wash your hands before cooking. Keep knives away from small children. Don’t leave the kitchen when something is on the stove. Use oven gloves when you take a hot tray out of the oven.</i></p><p>According to the text, which of the following is <b>NOT</b> a safety tip?</p>`,
  c: [`Wash your hands before you start cooking.`, `Keep knives out of children’s reach.`, `Use oven gloves for hot trays.`, `Leave the kitchen while the food is cooking on the stove.`], a: "D",
  s: `<p>Metinde ellerin yıkanması (A), bıçakların çocuklardan uzak tutulması (B) ve sıcak tepsiler için fırın eldiveni kullanılması (C) önerilmektedir.</p><p>Metne göre ocakta bir şey pişerken mutfaktan <b>ayrılmamak</b> gerekir (“Don’t leave the kitchen…”); D bunun tersidir. Cevap <b>D</b>.</p>` },
{ q: `<p><b>Turkish Coffee</b><br><i>Put one cup of cold water and one teaspoon of coffee into a coffee pot (cezve). Add sugar if you like. Stir well. Heat it slowly. When the foam rises, pour it into the cup.</i></p><p>When should you pour the coffee into the cup?</p>`,
  c: [`Before you add the water`, `When the foam rises`, `Before you stir it`, `When the water is still cold`], a: "B",
  s: `<p>Tarifte “When the foam rises, pour it into the cup.” denmektedir; kahve <b>köpük yükseldiğinde</b> fincana dökülür.</p><p>Diğer seçenekler tarifteki sırayla çelişir. Cevap <b>B</b>.</p>` },
{ q: `<p><i>To make mashed potatoes, first peel the potatoes. Then boil them for 20 minutes. After that, drain the water and mash the potatoes with some butter and milk.</i></p><p>What should you do <b>right after</b> you peel the potatoes?</p>`,
  c: [`Boil them for 20 minutes.`, `Mash them with butter.`, `Add some milk.`, `Drain the water.`], a: "A",
  s: `<p>Tarifte patatesler soyulduktan sonra gelen adım “Then boil them for 20 minutes.” (Sonra 20 dakika haşlayın.) şeklindedir.</p><p>Suyun süzülmesi ve tereyağı–sütle ezilmesi daha sonraki adımlardır. Cevap <b>A</b>.</p>` },
{ q: `<p>“Break the eggs into a bowl and <u>beat</u> them until they are light and fluffy.”</p><p>Which tool do you use to do the underlined action?</p>`,
  c: [`a grater`, `an oven tray`, `a whisk`, `a strainer`], a: "C",
  s: `<p>Yumurtaları “beat” etmek <b>çırpmak</b> demektir; bunun için çırpma teli (<b>whisk</b>) kullanılır.</p><p>Grater rende, oven tray fırın tepsisi, strainer süzgeçtir. Cevap <b>C</b>.</p>` },
{ q: `<p>“<u>Preheat</u> the oven to 180 °C before you put the cake in.”</p><p>What does the underlined word mean?</p>`,
  c: [`turn off the oven`, `clean the oven`, `open the oven door`, `make the oven hot before using it`], a: "D",
  s: `<p>“Preheat” <b>önceden ısıtmak</b> demektir: Keki koymadan önce fırını 180 °C’ye ısıtmak.</p><p>Diğer seçenekler bu anlamı karşılamaz. Cevap <b>D</b>.</p>` },
{ q: `<p><b>Mom:</b> We need some vegetables for the soup. Can you get them from the market?<br><b>Alp:</b> Sure. What do we need?<br><b>Mom:</b> ----<br><b>Alp:</b> OK. I’ll be back in ten minutes.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`I love cooking soup.`, `Two carrots, an onion and a kilo of potatoes, please.`, `The soup is too hot.`, `We don’t need anything.`], a: "B",
  s: `<p>Alp ne gerektiğini soruyor; annesi de <b>ihtiyaç listesini</b> söylemelidir: “Two carrots, an onion and a kilo of potatoes, please.”</p><p>A ve C soruyla ilgisizdir; D, Alp’in “OK, I’ll be back…” cevabıyla çelişir. Cevap <b>B</b>.</p>` },
{ q: `<p>Lara’s shopping list: <i>flour, eggs, milk, butter, chocolate</i><br>Lara’s recipe: <i>Mix the flour, eggs and sugar in a bowl. Add the melted butter and the milk. Pour the mixture into a tray and bake.</i></p><p>Which ingredient does Lara need for the recipe but <b>forgot</b> to write on her shopping list?</p>`,
  c: [`sugar`, `chocolate`, `butter`, `milk`], a: "A",
  s: `<p>Tarifte un, yumurta, <b>şeker</b>, tereyağı ve süt kullanılıyor. Alışveriş listesinde şeker yoktur; Lara şekeri yazmayı unutmuştur.</p><p>Çikolata listede var ama tarifte yok; tereyağı ve süt ise listede vardır. Cevap <b>A</b>.</p>` },
{ q: `<p>“I need to ---- some cheese for the pizza. Where is the grater?”</p><p>Which verb best completes the sentence?</p>`,
  c: [`boil`, `pour`, `grate`, `squeeze`], a: "C",
  s: `<p>Rende (grater) ile peyniri <b>rendelemek</b> “grate” fiiliyle ifade edilir: “I need to grate some cheese.”</p><p>Peynir kaynatılmaz, dökülmez ve sıkılmaz. Cevap <b>C</b>.</p>` },
{ q: `<p><i>Steaming is a healthy way of cooking. When you steam vegetables, they keep most of their vitamins and colour. However, when you fry them, they absorb a lot of oil and lose some of their vitamins.</i></p><p>According to the text, why is steaming healthier than frying?</p>`,
  c: [`Because it uses more oil.`, `Because it takes more time.`, `Because steamed vegetables lose their colour.`, `Because steamed vegetables keep most of their vitamins.`], a: "D",
  s: `<p>Metinde buharda pişirilen sebzelerin vitaminlerinin ve renklerinin çoğunu <b>koruduğu</b>, kızartılan sebzelerin ise yağ çektiği ve vitamin kaybettiği belirtilmektedir.</p><p>A ve C metinle çelişir; B metinde yoktur. Cevap <b>D</b>.</p>` },
{ q: `<p><b>Dad:</b> The soup tastes a bit bland. ----?<br><b>Ece:</b> Here you are.</p><p>Which of the following best completes the conversation?</p>`,
  c: [`Do you like soup`, `Can you pass me the salt, please`, `Who made this soup`, `Is the soup hot`], a: "B",
  s: `<p>Baba çorbanın biraz tatsız (bland) olduğunu söylüyor ve Ece “Here you are.” (Buyurun.) diyerek ona bir şey uzatıyor. Boşluğa bir <b>rica</b> gelmelidir: “Can you pass me the salt, please?”</p><p>Diğer seçenekler “Here you are.” cevabıyla uyuşmaz. Cevap <b>B</b>.</p>` },
{ q: `<p>“First, cut the bread into slices. ----, spread some butter on each slice. Finally, put cheese on top and toast them.”</p><p>Which word best completes the recipe?</p>`,
  c: [`Finally`, `Before`, `Next`, `Last`], a: "C",
  s: `<p>İlk adım “First”, son adım “Finally” ile verilmiştir. Aradaki adım için <b>“Next”</b> (Sonra) uygun bir sıralama sözcüğüdür.</p><p>“Finally” ve “Last” son adımı bildirir; “Before” tek başına cümle başında bu anlamı vermez. Cevap <b>C</b>.</p>` },
{ q: `<p>Look at the steps for making <b>sarma</b>.</p><table class="rt"><tr><th>Step</th><th>Instruction</th></tr><tr><td>1</td><td>Wash the vine leaves.</td></tr><tr><td>2</td><td>Mix rice, onions, spices and olive oil.</td></tr><tr><td>3</td><td>Put some of the mixture on each leaf and roll it.</td></tr><tr><td>4</td><td>Place them in a pot, add water and cook for 40 minutes.</td></tr></table><p>Which of the following is <b>TRUE</b> according to the steps?</p>`,
  c: [`The leaves are rolled after the mixture is put on them.`, `The rice is cooked before it is mixed with onions.`, `The sarma is baked in the oven.`, `The vine leaves are washed after cooking.`], a: "A",
  s: `<p>3. adımda harç yaprağın üzerine konduktan sonra yaprak sarılır; yani yapraklar <b>harç konduktan sonra</b> sarılır (A ✓).</p><p>Pirinç önceden pişirilmez, diğer malzemelerle karıştırılır (B ✗); sarma tencerede pişirilir (C ✗); yapraklar en başta yıkanır (D ✗). Cevap <b>A</b>.</p>` },
{ q: `<p>“The soup is ready. ---- it hot with some lemon juice and bread.”</p><p>Which verb best completes the sentence?</p>`,
  c: [`Peel`, `Grate`, `Chop`, `Serve`], a: "D",
  s: `<p>Çorba hazır olduğuna göre son adım <b>servis etmektir</b>: “Serve it hot with some lemon juice and bread.” (Limon suyu ve ekmekle sıcak servis edin.)</p><p>Peel, grate ve chop hazırlık aşamasına ait fiillerdir. Cevap <b>D</b>.</p>` },
{ q: `<p>Melis wrote the steps for making a cheese omelette, but <b>one step is in the wrong place</b>.</p><p>1. Break two eggs into a bowl.<br>2. Eat the omelette.<br>3. Beat the eggs and add some salt.<br>4. Pour the mixture into a hot pan and add grated cheese.</p><p>Which step should be the <b>last</b> one?</p>`,
  c: [`Step 1`, `Step 2`, `Step 3`, `Step 4`], a: "B",
  s: `<p>Omleti yemek, pişirme işlemi bittikten sonra yapılacak <b>son</b> şeydir. Bu nedenle 2. adım en sona alınmalıdır: Yumurtaları kır → çırp ve tuz ekle → tavaya dök ve peynir ekle → omleti ye.</p><p>Cevap <b>B</b>.</p>` }
]
});
