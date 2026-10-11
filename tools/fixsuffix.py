# Şık harflerinden sonra gelen eklerin ünlü uyumunu düzeltir: A’da, B’de, C’den, D’ye ...
import re, sys, glob
NB = 'A-Za-zÇĞİÖŞÜçğıöşüâîû0-9'
back = {'da':'a','daki':'a','dan':'a','ya':'a','nın':'a','yı':'a','de':'e','deki':'e','den':'e','ye':'e','nin':'e','yi':'e'}
to_a = {'de':'da','deki':'daki','den':'dan','ye':'ya','nin':'nın','yi':'yı'}
to_e = {v:k for k,v in to_a.items()}
pat = re.compile(r"(?<![" + NB + r"])([ABCD])([’'])(daki|deki|dan|den|nın|nin|da|de|ya|ye|yı|yi)(?![" + NB + r"])")
def fix(m):
    L, ap, suf = m.group(1), m.group(2), m.group(3)
    if L == 'A' and suf in to_a: suf = to_a[suf]
    elif L != 'A' and suf in to_e: suf = to_e[suf]
    return L + ap + suf
total = 0
for f in sys.argv[1:]:
    s = open(f, encoding='utf-8').read()
    n = pat.sub(fix, s)
    c = sum(1 for a, b in zip(pat.findall(s), pat.findall(n)) if a != b)
    if n != s:
        open(f, 'w', encoding='utf-8').write(n); total += c; print(f, c)
print('toplam düzeltme:', total)
