#!/usr/bin/env python3
"""Okunuş raporu: tüm anlatım derslerinin sesli metnini okunuş sözlüğüyle (tools/telaffuz.json) ve sözlüksüz üretir,
değişenleri ve olası yanlış okunuşları (kısaltma, kalan rakam, Romen rakamı, tek harf, işaretsiz İngilizce, vurgu belirsizliği)
ders ders listeler.

  python3 tools/telaffuz_rapor.py [konuId ...] [--out=rapor.md]
"""
import os, re, sys, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import anlatim_ses as A

# Sesin doğru okuduğu denetlenmiş kısaltmalar (süre ölçümüyle: DNA ≈ "de en a", ABD/TBMM açılımıyla okunuyor)
KNOWN_CAPS = {'DNA', 'RNA', 'ABD', 'NATO', 'LED', 'TBMM', 'MEB', 'TDK', 'LGS', 'EBOB', 'EKOK', 'BM', 'AB', 'ATP'}
EN_HINT = re.compile(r"\b(?:[A-Za-z]*(?:[qwx]|ck|tion)[A-Za-z]*|[A-Za-z]+(?:ing|ght)(?:e|i|de|ı)?)\b")


def scan(text):
    """Sözlük uygulanmış Türkçe okunuş metninde şüpheli kalıplar."""
    out = []
    for m in re.finditer(r"\b[A-ZÇĞİÖŞÜ]{2,}\b", text):
        if m.group(0) not in KNOWN_CAPS:
            out.append('kısaltma? ' + m.group(0))
    for m in re.finditer(r"\S*\d\S*", text):
        out.append('rakam kaldı: ' + m.group(0))
    for m in re.finditer(r"(?<![\w'])(?:[IVX]{2,})(?![\w])", text):
        out.append('Romen rakamı? ' + m.group(0))
    for m in EN_HINT.finditer(text):
        w = m.group(0)
        if len(w) > 2 and not re.search('[çğıöşüâîû]', w):
            out.append('İngilizce olabilir (<i lang="en"> yok): ' + w)
    return out


def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    outp = next((a.split('=', 1)[1] for a in sys.argv[1:] if a.startswith('--out=')), None)
    data = A.lessons(args)
    vurgu = [(re.compile(v['re']), v['not']) for v in A.TLF.get('vurgu_uyari', [])]
    lines = ['# Okunuş raporu (tools/telaffuz_rapor.py)', '',
             'Sözlük: tools/telaffuz.json. "Değişen" = okunuş sözlüğü bu parçanın sesli metnini değiştirdi (ses yeniden üretilir). '
             'Altyazılar değişmez.', '']
    tot_ch = tot_seg = 0; summary = []
    for lid, segs in data.items():
        ch = []; sus = []; vz = []
        for g in segs:
            A.LEX_ON = False; old = A.show(A.parts(g))
            A.LEX_ON = True; ps = A.parts(g); new = A.show(ps)
            if old != new:
                ow, nw = old.split(), new.split()
                diff = [(a, b) for a, b in zip(ow, nw) if a != b] if len(ow) == len(nw) else [(old, new)]
                ch.append((g['key'], diff))
            for lang, t in ps:
                if lang == 'tr':
                    for s in scan(t):
                        sus.append((g['key'], s))
                    for rx, note in vurgu:
                        for m in rx.finditer(t):
                            vz.append((g['key'], m.group(0), note))
        tot_ch += len(ch); tot_seg += len(segs)
        summary.append((lid, len(segs), len(ch), len(sus), len(vz)))
        if not (ch or sus or vz):
            continue
        lines.append('## %s · %d parça, %d değişen' % (lid, len(segs), len(ch)))
        for k, diff in ch:
            lines.append('- `%s` ' % k + '; '.join('%s → **%s**' % (a, b) for a, b in diff))
        if sus:
            lines.append('- Olası yanlış okunuş (elle bak):')
            seen = set()
            for k, s in sus:
                if (s) in seen:
                    continue
                seen.add(s); lines.append('  - `%s` %s' % (k, s))
        if vz:
            lines.append('- Vurgu belirsizliği (ses bağlamdan seçer, zorlanamaz):')
            for k, w, note in vz:
                lines.append('  - `%s` “%s”: %s' % (k, w, note))
        lines.append('')
    lines[3:3] = ['| ders | parça | değişen | şüpheli | vurgu |', '|---|---|---|---|---|'] + \
                 ['| %s | %d | %d | %d | %d |' % r for r in summary] + \
                 ['| **toplam** | **%d** | **%d** | | |' % (tot_seg, tot_ch), '']
    txt = '\n'.join(lines) + '\n'
    if outp:
        open(outp, 'w', encoding='utf-8').write(txt)
        print('yazıldı:', outp, '· değişen parça', tot_ch, '/', tot_seg)
    else:
        print(txt)


if __name__ == '__main__':
    main()
