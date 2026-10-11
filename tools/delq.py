# Kullanım: python3 tools/delq.py data/topics/<id>.js "sorudaki benzersiz metin" [...]
# Verilen metni içeren soru nesnelerini dosyadan siler.
import sys, re
p = sys.argv[1]
s = open(p, encoding='utf-8').read()
head, rest = s.split('\nqs: [\n', 1)
body, tail = rest.rsplit('\n]\n', 1)
parts = re.split(r'\n(?=\{ q: `)', body)
keep = []
for part in parts:
    if any(k in part for k in sys.argv[2:]):
        print('silindi:', re.sub(r'<[^>]+>', '', part)[:90].replace('\n', ' '))
        continue
    keep.append(part.rstrip().rstrip(','))
open(p, 'w', encoding='utf-8').write(head + '\nqs: [\n' + ',\n'.join(keep) + '\n]\n' + tail)
