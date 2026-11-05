#!/usr/bin/env python3
"""MEBİ LGS Denemeleri 2025-26 → site verisi.
kullanım: python3 tools/mebid.py [--img] [--q 55]
  Kaynak: /workspace/work/mebid/out/questions.json (img: akıtılmış rf/ varsa o), topic/final.json, out/denemeler.json
  Çıktı : data/meb/mebid-<ders>.js  (LGS.addMeb: t konu, a resmî cevap, o sıra 200000+deneme*100+no, lb etiket; çözüm yok)
          data/meb/mebid.js         (LGS.mebid: deneme → {soz:[[id,konu]…50], say:[[id,konu]…40]})
          --img: img/meb/<id>.webp  (WebP q55, renksiz görseller gri; ort. ~32 KB)
  Sonra data/index.js'te mebidSubj ve xpMax (soru başı 80) elle/otomatik: bu betik xpMax'ı farka göre günceller."""
import json, os, sys, re
from multiprocessing import Pool
SRC = '/workspace/work/mebid'
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
Q = int(sys.argv[sys.argv.index('--q') + 1]) if '--q' in sys.argv else 55


def enc(x):
    from PIL import Image, ImageChops
    im = Image.open(x['img']).convert('RGB')
    r, g, b = im.split()
    col = ImageChops.difference(r, b).point(lambda v: 255 if v > 24 else 0).histogram()[255]
    if col < im.width * im.height * 0.002:
        im = im.convert('L').convert('RGB')
    p = os.path.join(ROOT, 'img/meb', x['id'] + '.webp')
    im.save(p, 'WEBP', quality=Q, method=6)
    return os.path.getsize(p)


def main():
    qs = json.load(open(SRC + '/out/questions.json'))
    tp = json.load(open(SRC + '/topic/final.json'))
    dn = json.load(open(SRC + '/out/denemeler.json'))
    byid = {q['id']: q for q in qs}
    subs = {}
    for q in qs:
        t = tp[q['id']]
        assert q['a'] in 'ABCD', q
        subs.setdefault(q['ders'], {})[q['id']] = {'t': t, 'a': q['a'], 'o': 200000 + q['deneme'] * 100 + q['no'], 'lb': q['lb']}
    prev = 0
    for d, o in sorted(subs.items()):
        f = os.path.join(ROOT, 'data/meb/mebid-%s.js' % d)
        if os.path.exists(f):
            prev += len(re.findall(r'"mebi-[a-z]+-d\d+-\d+":', open(f, encoding='utf8').read()))
        open(f, 'w', encoding='utf8').write('/* MEBİ LGS Denemeleri 2025-26 (resmî cevap anahtarı; çözüm yayımlanmadı) — tools/mebid.py üretir */\nLGS.addMeb(' + json.dumps(o, ensure_ascii=False, separators=(',', ':')).replace('},"', '},\n"') + ');\n')
        print(d, len(o))
    idx = {}
    for k, v in sorted(dn.items(), key=lambda kv: int(kv[0])):
        assert len(v['soz']) == 50 and len(v['say']) == 40, k
        idx[k] = {s: [[i, tp[i]] for i in v[s]] for s in ('soz', 'say')}
    open(os.path.join(ROOT, 'data/meb/mebid.js'), 'w', encoding='utf8').write(
        '/* MEBİ LGS Denemeleri 2025-26: deneme → oturum → [soru id, konu] (LGS sırası) — tools/mebid.py */\nLGS.mebid=' +
        json.dumps(idx, ensure_ascii=False, separators=(',', ':')).replace('],"', '],\n"') + ';\n')
    n = len(qs)
    ix = os.path.join(ROOT, 'data/index.js'); s = open(ix, encoding='utf8').read()
    d = (n - prev) * 80
    if d:
        s = re.sub(r'xpMax: (\d+),', lambda m: 'xpMax: %d,' % (int(m.group(1)) + d), s, 1)
        open(ix, 'w', encoding='utf8').write(s)
    print('soru', n, 'önceki', prev, 'xpMax +', d)
    if '--img' in sys.argv:
        with Pool(2) as P:
            sz = P.map(enc, qs, chunksize=8)
        print('görsel', len(sz), 'ort KB %.1f' % (sum(sz) / len(sz) / 1024), 'toplam MB %.1f' % (sum(sz) / 1048576))


if __name__ == '__main__':
    main()
