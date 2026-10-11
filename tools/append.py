# Kullanım: python3 tools/append.py <konu.js> <eklenecek_sorular.js-parçası>
# Parça dosyası, virgülle ayrılmış { q: ..., c: [...], a: 'X', s: ... } nesneleri içerir.
import sys,re
f, part = sys.argv[1], open(sys.argv[2]).read().strip().rstrip(',')
s = open(f).read()
i = s.rstrip().rfind(']')
head = s[:i].rstrip()
if not head.endswith('['): head += ','
s = head + '\n' + part + '\n' + s[i:]
open(f, 'w').write(s)
print('eklendi')
