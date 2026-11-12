#!/usr/bin/env python3
"""MEB LGS Örnek Soru Kitapçıkları 2025-26 (Kasım 2025, Mart 2026, Nisan 2026) → site verisi.
kullanım: python3 tools/ornek25.py [--img] [--q 55]
  Kaynak: /workspace/work/ornek25 (README.md). 135 sorunun 134'ü sitede zaten MEB çalışma kitabı sorusu olarak var
          (meta/dupmap.json: kitapçık sorusu → meb-<ders>-… id, metin + şık + resmî anahtar eşleşmesi doğrulandı);
          kitapçık bu mevcut soruları kullanır, konulara kopya eklenmez.
          Sitede olmayan sorular (çalışma kitabında 'skip': geçmiş LGS ile aynı metin) yeni eklenir: görsel rf/<id>.png, çözüm sol.json.
  Çıktı : data/meb/ornek25-<ders>.js  (yalnız yeni sorular; LGS.addMeb: t, a resmî, o 160000+set*100+no, lb, s çözüm)
          data/meb/ornek25.js         (LGS.ornek25: set → {soz:[[id,konu]…25], say:[[id,konu]…20]})
          --img: img/meb/<id>.webp (yeni sorular)
  data/index.js: ornek25Subj elle; xpMax farka göre (soru başı 80) bu betik günceller."""
import json, os, sys, re
SRC = '/workspace/work/ornek25'
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
Q = int(sys.argv[sys.argv.index('--q') + 1]) if '--q' in sys.argv else 55
ORD = {'soz': ['tr', 'ink', 'din', 'ing'], 'say': ['mat', 'fen']}


def enc(i):
    from PIL import Image, ImageChops
    im = Image.open(SRC + '/rf/%s.png' % i).convert('RGB')
    r, g, b = im.split()
    col = ImageChops.difference(r, b).point(lambda v: 255 if v > 24 else 0).histogram()[255]
    if col < im.width * im.height * 0.002:
        im = im.convert('L').convert('RGB')
    p = os.path.join(ROOT, 'img/meb', i + '.webp')
    im.save(p, 'WEBP', quality=Q, method=6)
    return os.path.getsize(p)


def main():
    qs = json.load(open(SRC + '/meta/questions.json'))
    dm = json.load(open(SRC + '/meta/dupmap.json'))
    sol = json.load(open(SRC + '/sol.json'))
    site = {}
    for d in ORD['soz'] + ORD['say']:
        s = open(os.path.join(ROOT, 'data/meb/%s.js' % d), encoding='utf8').read()
        for m in re.finditer(r'"(meb-[^"]+)":\s*\{\s*"t":\s*"([^"]+)",\s*"a":\s*"([A-D])"', s):
            site[m.group(1)] = (m.group(2), m.group(3))
    TOP = {'ornek25-ink-s3-3': 'ink-destan'}
    ref, new = {}, {}
    for q in qs:
        assert q['a'] in 'ABCD', q['id']
        m = dm[q['id']]['meb']
        if m in site:
            t, a = site[m]
            assert a == q['a'], (q['id'], m, a, q['a'])
            ref[q['id']] = (m, t)
        else:
            t = TOP[q['id']]
            new.setdefault(q['ders'], {})[q['id']] = {'t': t, 'a': q['a'], 'o': 160000 + q['set'] * 100 + q['no'], 'lb': q['lb'], 's': sol[q['id']]}
            ref[q['id']] = (q['id'], t)
    prev = 0
    for f in os.listdir(os.path.join(ROOT, 'data/meb')):
        if f.startswith('ornek25-'):
            prev += len(re.findall(r'"ornek25-[a-z]+-s\d-\d+":', open(os.path.join(ROOT, 'data/meb', f), encoding='utf8').read()))
    for d, o in sorted(new.items()):
        open(os.path.join(ROOT, 'data/meb/ornek25-%s.js' % d), 'w', encoding='utf8').write(
            '/* MEB LGS Örnek Soru Kitapçıkları 2025-26: sitede olmayan sorular (diğerleri MEB çalışma kitabı sorularıyla aynı) — tools/ornek25.py üretir */\nLGS.addMeb(' +
            json.dumps(o, ensure_ascii=False, separators=(',', ':')).replace('},"', '},\n"') + ');\n')
        print('yeni', d, len(o))
    idx = {}
    for s in (1, 2, 3):
        idx[str(s)] = {}
        for tur, ders in ORD.items():
            ids = [q for d in ders for q in sorted([q for q in qs if q['set'] == s and q['ders'] == d], key=lambda q: q['no'])]
            assert len(ids) == (25 if tur == 'soz' else 20), (s, tur)
            idx[str(s)][tur] = [list(ref[q['id']]) for q in ids]
    open(os.path.join(ROOT, 'data/meb/ornek25.js'), 'w', encoding='utf8').write(
        '/* MEB LGS Örnek Soru Kitapçıkları 2025-26: set (1 Kasım 2025, 2 Mart 2026, 3 Nisan 2026) → oturum → [soru id, konu]; çoğu mevcut MEB çalışma kitabı sorusu — tools/ornek25.py */\nLGS.ornek25=' +
        json.dumps(idx, ensure_ascii=False, separators=(',', ':')).replace('],"', '],\n"') + ';\n')
    n = sum(len(o) for o in new.values())
    ix = os.path.join(ROOT, 'data/index.js'); s = open(ix, encoding='utf8').read()
    d = (n - prev) * 80
    if d:
        s = re.sub(r'xpMax: (\d+),', lambda m: 'xpMax: %d,' % (int(m.group(1)) + d), s, 1)
        open(ix, 'w', encoding='utf8').write(s)
    print('kitapçık sorusu', len(qs), 'mevcut', len(qs) - n, 'yeni', n, 'önceki', prev, 'xpMax +', d)
    if '--img' in sys.argv:
        for o in new.values():
            for i in o: print('görsel', i, enc(i))


if __name__ == '__main__':
    main()
