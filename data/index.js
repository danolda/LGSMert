window.LGS = {
  version: 88,
  xpMax: 600540,          // tüm sorular 4 kez doğru çözülünce toplanan EXP (100. seviye)
  examDate: '2027-06-13', // LGS 2027 tahmini tarih; MEB açıklayınca güncelle
  topics: {},
  past: {},
  pastLoaded: {},
  meb: {},
  mebLoaded: {},
  mebSubj: { fen: 1, mat: 1, tr: 1, ink: 1, din: 1, ing: 1 }, // MEB LGS Çalışma Kitabı soruları yüklenen dersler
  add: function (t) { this.topics[t.id] = t; },
  addMeb: function (obj) { for (var k in obj) if (obj.hasOwnProperty(k)) this.meb[k] = obj[k]; },
  addPast: function (obj) { for (var k in obj) if (obj.hasOwnProperty(k)) this.past[k] = obj[k]; },
  subjects: [
    {
      id: 'tr', name: 'Türkçe', icon: '📖', color: 'var(--c-tr)',
      desc: 'Sözcükten paragrafa anlam bilgisi, dil bilgisi, yazım-noktalama ve sözel mantık.',
      topics: [
        { id: 'tr-sozcuk', title: 'Sözcükte Anlam' },
        { id: 'tr-cumle', title: 'Cümlede Anlam' },
        { id: 'tr-paragraf', title: 'Paragrafta Anlam' },
        { id: 'tr-paryapi', title: 'Paragrafın Yapısı ve Anlatım Teknikleri' },
        { id: 'tr-sozelmantik', title: 'Sözel Mantık, Grafik ve Tablo Okuma' },
        { id: 'tr-sanat', title: 'Söz Sanatları' },
        { id: 'tr-metin', title: 'Metin Türleri' },
        { id: 'tr-fiilimsi', title: 'Fiilimsiler' },
        { id: 'tr-ogeler', title: 'Cümlenin Ögeleri' },
        { id: 'tr-cati', title: 'Fiilde Çatı' },
        { id: 'tr-cumleturu', title: 'Cümle Türleri' },
        { id: 'tr-yazim', title: 'Yazım Kuralları' },
        { id: 'tr-noktalama', title: 'Noktalama İşaretleri' },
        { id: 'tr-bozukluk', title: 'Anlatım Bozuklukları' }
      ]
    },
    {
      id: 'mat', name: 'Matematik', icon: '📐', color: 'var(--c-mat)',
      desc: '8. sınıf matematik müfredatının tüm üniteleri.',
      topics: [
        { id: 'mat-carpan', title: 'Çarpanlar ve Katlar' },
        { id: 'mat-uslu', title: 'Üslü İfadeler' },
        { id: 'mat-karekok', title: 'Kareköklü İfadeler' },
        { id: 'mat-veri', title: 'Veri Analizi' },
        { id: 'mat-olasilik', title: 'Basit Olayların Olma Olasılığı' },
        { id: 'mat-cebir', title: 'Cebirsel İfadeler ve Özdeşlikler' },
        { id: 'mat-denklem', title: 'Doğrusal Denklemler' },
        { id: 'mat-esitsizlik', title: 'Eşitsizlikler' },
        { id: 'mat-ucgen', title: 'Üçgenler' },
        { id: 'mat-benzerlik', title: 'Eşlik ve Benzerlik' },
        { id: 'mat-donusum', title: 'Dönüşüm Geometrisi' },
        { id: 'mat-cisim', title: 'Geometrik Cisimler' }
      ]
    },
    {
      id: 'fen', name: 'Fen Bilimleri', icon: '🔬', color: 'var(--c-fen)',
      desc: '8. sınıf fen bilimleri: 7 ünite.',
      topics: [
        { id: 'fen-mevsim', title: 'Mevsimler ve İklim' },
        { id: 'fen-dna', title: 'DNA ve Genetik Kod' },
        { id: 'fen-basinc', title: 'Basınç' },
        { id: 'fen-madde', title: 'Madde ve Endüstri' },
        { id: 'fen-makine', title: 'Basit Makineler' },
        { id: 'fen-enerji', title: 'Enerji Dönüşümleri ve Çevre Bilimi' },
        { id: 'fen-elektrik', title: 'Elektrik Yükleri ve Elektrik Enerjisi' }
      ]
    },
    {
      id: 'ink', name: 'T.C. İnkılap Tarihi ve Atatürkçülük', icon: '🇹🇷', color: 'var(--c-ink)',
      desc: 'Mustafa Kemal’in hayatından Atatürk’ün ölümü sonrasına 7 ünite.',
      topics: [
        { id: 'ink-kahraman', title: 'Bir Kahraman Doğuyor' },
        { id: 'ink-uyanis', title: 'Millî Uyanış: Bağımsızlık Yolunda Atılan Adımlar' },
        { id: 'ink-destan', title: 'Millî Bir Destan: Ya İstiklal Ya Ölüm!' },
        { id: 'ink-ataturkculuk', title: 'Atatürkçülük ve Çağdaşlaşan Türkiye' },
        { id: 'ink-demokrasi', title: 'Demokratikleşme Çabaları' },
        { id: 'ink-dispolitika', title: 'Atatürk Dönemi Türk Dış Politikası' },
        { id: 'ink-olum', title: 'Atatürk’ün Ölümü ve Sonrası' }
      ]
    },
    {
      id: 'din', name: 'Din Kültürü ve Ahlak Bilgisi', icon: '🕌', color: 'var(--c-din)',
      desc: '8. sınıf din kültürü ve ahlak bilgisi: 5 ünite.',
      topics: [
        { id: 'din-kader', title: 'Kader İnancı' },
        { id: 'din-zekat', title: 'Zekât ve Sadaka' },
        { id: 'din-hayat', title: 'Din ve Hayat' },
        { id: 'din-ornek', title: 'Hz. Muhammed’in Örnekliği' },
        { id: 'din-kuran', title: 'Kur’an-ı Kerim ve Özellikleri' }
      ]
    },
    {
      id: 'ing', name: 'İngilizce', icon: '🇬🇧', color: 'var(--c-ing)',
      desc: '8. sınıf İngilizce: 10 ünite (kelime, kalıp ve okuma).',
      topics: [
        { id: 'ing-friendship', title: '1. Friendship' },
        { id: 'ing-teen', title: '2. Teen Life' },
        { id: 'ing-kitchen', title: '3. In the Kitchen' },
        { id: 'ing-phone', title: '4. On the Phone' },
        { id: 'ing-internet', title: '5. The Internet' },
        { id: 'ing-adventures', title: '6. Adventures' },
        { id: 'ing-tourism', title: '7. Tourism' },
        { id: 'ing-chores', title: '8. Chores' },
        { id: 'ing-science', title: '9. Science' },
        { id: 'ing-natural', title: '10. Natural Forces' }
      ]
    }
  ]
};
