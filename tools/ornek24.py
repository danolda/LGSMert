#!/usr/bin/env python3
"""MEB LGS Örnek Soru Kitapçıkları 2024-25 (Kasım 2024, Şubat 2025, Nisan 2025) → site verisi.
kullanım: python3 tools/ornek24.py [--img] [--q 55]
  Kaynak: /workspace/work/ornek24 (README.md: indirme, filigran temizleme, kırpma, akıtma, elle yerleşim, konu)
          meta/questions.json (id, ders, set, tur, no, a resmî cevap, lb), topic/final.json, görsel: fix/<id>.png varsa o, yoksa rf/<id>.png
  Çıktı : data/meb/ornek24-<ders>.js  (LGS.addMeb: t konu, a resmî cevap, o sıra 150000+set*100+no, lb etiket; çözüm yok)
          data/meb/ornek24.js         (LGS.ornek24: set → {soz:[[id,konu]…25], say:[[id,konu]…20]})
          --img: img/meb/<id>.webp    (WebP q55, renksiz görseller gri)
  data/index.js: ornek24Subj elle eklendi; xpMax farka göre (soru başı 80) bu betik günceller."""
import json, os, sys, re
SRC = '/workspace/work/ornek24'
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
Q = int(sys.argv[sys.argv.index('--q') + 1]) if '--q' in sys.argv else 55
ORD = {'soz': ['tr', 'ink', 'din', 'ing'], 'say': ['mat', 'fen']}


def src_img(i):
    f = SRC + '/fix/%s.png' % i
    return f if os.path.exists(f) else SRC + '/rf/%s.png' % i


def enc(i):
    from PIL import Image, ImageChops
    im = Image.open(src_img(i)).convert('RGB')
    r, g, b = im.split()
    col = ImageChops.difference(r, b).point(lambda v: 255 if v > 24 else 0).histogram()[255]
    if col < im.width * im.height * 0.002:
        im = im.convert('L').convert('RGB')
    p = os.path.join(ROOT, 'img/meb', i + '.webp')
    im.save(p, 'WEBP', quality=Q, method=6)
    return os.path.getsize(p)


def main():
    qs = json.load(open(SRC + '/meta/questions.json'))
    tp = json.load(open(SRC + '/topic/final.json'))
    subs, prev = {}, 0
    for q in qs:
        assert q['a'] in 'ABCD', q['id']
        subs.setdefault(q['ders'], {})[q['id']] = {'t': tp[q['id']], 'a': q['a'], 'o': 150000 + q['set'] * 100 + q['no'], 'lb': q['lb']}
    for d, o in sorted(subs.items()):
        f = os.path.join(ROOT, 'data/meb/ornek24-%s.js' % d)
        if os.path.exists(f):
            prev += len(re.findall(r'"ornek24-[a-z]+-s\d-\d+":', open(f, encoding='utf8').read()))
        open(f, 'w', encoding='utf8').write('/* MEB LGS Örnek Soru Kitapçıkları 2024-25 (resmî cevap anahtarı kitapçıkların son sayfasından; çözümler yalnız video) — tools/ornek24.py üretir */\nLGS.addMeb(' + json.dumps(o, ensure_ascii=False, separators=(',', ':')).replace('},"', '},\n"') + ');\n')
        print(d, len(o))
    idx = {}
    for s in (1, 2, 3):
        idx[str(s)] = {}
        for tur, ders in ORD.items():
            ids = [q for d in ders for q in sorted([q for q in qs if q['set'] == s and q['ders'] == d], key=lambda q: q['no'])]
            assert len(ids) == (25 if tur == 'soz' else 20), (s, tur)
            idx[str(s)][tur] = [[q['id'], tp[q['id']]] for q in ids]
    open(os.path.join(ROOT, 'data/meb/ornek24.js'), 'w', encoding='utf8').write(
        '/* MEB LGS Örnek Soru Kitapçıkları 2024-25: set (1 Kasım 2024, 2 Şubat 2025, 3 Nisan 2025) → oturum → [soru id, konu] — tools/ornek24.py */\nLGS.ornek24=' +
        json.dumps(idx, ensure_ascii=False, separators=(',', ':')).replace('],"', '],\n"') + ';\n')
    n = len(qs)
    ix = os.path.join(ROOT, 'data/index.js'); s = open(ix, encoding='utf8').read()
    d = (n - prev) * 80
    if d:
        s = re.sub(r'xpMax: (\d+),', lambda m: 'xpMax: %d,' % (int(m.group(1)) + d), s, 1)
        open(ix, 'w', encoding='utf8').write(s)
    print('soru', n, 'önceki', prev, 'xpMax +', d)
    if '--img' in sys.argv:
        from multiprocessing import Pool
        with Pool(2) as P:
            sz = P.map(enc, [q['id'] for q in qs], chunksize=8)
        print('görsel', len(sz), 'ort KB %.1f' % (sum(sz) / len(sz) / 1024), 'toplam MB %.1f' % (sum(sz) / 1048576))


if __name__ == '__main__':
    main()
