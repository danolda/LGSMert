# LGS 2027 Hazırlık

Tarayıcıda çalışan, kurulum gerektirmeyen bir LGS hazırlık sitesi.

- **6 ders:** Türkçe, Matematik, Fen Bilimleri, T.C. İnkılap Tarihi ve Atatürkçülük, Din Kültürü ve Ahlak Bilgisi, İngilizce
- **Her konu için:** görsellerle desteklenmiş konu özeti + 30 soru
  - MEB'in yayımladığı 2022, 2023, 2024 ve 2026 LGS sorularından ilgili olanlar (orijinal kitapçıktan görsel olarak)
  - Kalanı LGS tarzında, orta zorlukta yeni nesil sorular
- Her sorunun ayrıntılı çözümü
- Seçtiğin şıklar tarayıcıda (localStorage) saklanır; **Temizle** düğmesi o konudaki işaretlemeleri siler
- Açık/koyu tema, mobil uyumlu
- Toplam **55 konu, 1650 soru** (360'ı çıkmış LGS sorusu)

## Çalıştırma

`index.html` dosyasını bir web sunucusuyla açman yeterli (konu dosyaları sonradan yüklendiği için sunucu önerilir):

```bash
python3 -m http.server 8000
# tarayıcıda http://localhost:8000
```

GitHub Pages ile de yayınlanabilir (Settings → Pages → Branch).

## Dosya yapısı

```
index.html
assets/css/style.css     # tasarım
assets/js/app.js         # uygulama (yönlendirme, soru işaretleme, kayıt)
data/index.js            # ders ve konu listesi
data/topics/<konu>.js    # konu özeti + yeni nesil sorular
data/past/<ders>.js      # çıkmış soruların konu eşleşmesi, cevabı ve çözümü
img/past/*.webp          # çıkmış soruların görüntüleri (MEB kitapçıklarından)
```

Çıkmış sorular MEB/ÖDSGM tarafından kamuya açık olarak yayımlanan soru kitapçıklarından alınmıştır.

## Geliştirme araçları

```bash
node tools/validate.js            # her konuda 30 soru, cevap anahtarı ↔ çözüm uyumu, tekrar eden şık kontrolü
node tools/show.js data/topics/ing-phone.js 3 7   # soruları düz metin olarak göster
node tools/rebalance.js data/topics/<konu>.js   # doğru cevap harflerini şıklara dengeli dağıt
```

Yeni çıkmış sorular eklendiğinde `data/past/<ders>.js` dosyasına eşleşme/çözüm yazılır ve konudaki özgün soru sayısı azaltılarak toplam 30'da tutulur.
