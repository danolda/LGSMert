#!/usr/bin/env python3
"""MEB soru görsellerini telefonda okunaklı olacak şekilde "yeniden akıtır" (reflow).

Fikir: metin satırları yatay izdüşümle bulunur; uzun satırlar kelime boşluklarından
bölünüp parçalar alt alta dizilir (okuma sırası korunur). Şık satırları büyük
boşluklardan ayrılır. Şekil/tablo/çerçeve gibi metin dışı bloklar bölünmez.
Güvensiz durumlarda görsel değiştirilmez ve sebebi raporlanır.

Kullanım:
  python3 tools/reflow.py img/meb/*.webp --out /tmp/out      # deneme (çıktı ayrı klasöre)
  python3 tools/reflow.py img/meb/*.webp --inplace           # üzerine yaz
Rapor: --report report.json
"""
import sys, os, json, argparse
import numpy as np
from PIL import Image

WHITE = 235      # bu değerin altı "boş değil" (kenar yumuşatma dahil)
INK = 160        # koyu mürekkep


def load(path):
    im = Image.open(path)
    if im.mode in ('RGBA', 'LA', 'P'):
        im = im.convert('RGBA')
        bg = Image.new('RGBA', im.size, (255, 255, 255, 255))
        bg.alpha_composite(im)
        im = bg
    return im.convert('RGB')


def runs(mask):
    """True olan ardışık aralıklar [s,e)"""
    m = np.concatenate([[False], mask, [False]]).astype(np.int8)
    d = np.diff(m)
    return list(zip(np.where(d == 1)[0], np.where(d == -1)[0]))


def longest_run(rowmask):
    best = 0
    for s, e in runs(rowmask):
        best = max(best, e - s)
    return best


class Skip(Exception):
    pass


def analyse(rgb):
    g = np.asarray(rgb.convert('L')).astype(np.int16)
    a = np.asarray(rgb).astype(np.int16)
    H, W = g.shape
    nw = g < WHITE
    ink = g < INK
    light = (a.min(2) < 242) & (g > 190)          # açık renkli dolgu (arka plan kutusu vb.)

    rows = runs(nw.any(1))
    # çok yakın bantları birleştir (İ noktası, ğ şapkası, alt çizgi)
    merged = []
    for s, e in rows:
        if merged and s - merged[-1][1] <= 2:
            merged[-1] = (merged[-1][0], e)
        else:
            merged.append((s, e))
    rows = merged
    hs = [e - s for s, e in rows if 10 <= e - s <= 60]
    if len(hs) < 2:
        raise Skip('metin satırı tespit edilemedi')
    hmed = float(np.median(hs))
    if not 12 <= hmed <= 40:
        raise Skip('satır yüksekliği olağandışı (%.0f)' % hmed)
    # küçük bantları (nokta, şapka, alt çizgi) yakın komşuya ekle
    changed = True
    while changed:
        changed = False
        for i, (s, e) in enumerate(rows):
            if e - s < 0.45 * hmed and len(rows) > 1:
                gp = s - rows[i - 1][1] if i > 0 else 1e9
                gn = rows[i + 1][0] - e if i + 1 < len(rows) else 1e9
                if min(gp, gn) <= 0.45 * hmed:
                    if gp <= gn:
                        rows[i - 1] = (rows[i - 1][0], e)
                    else:
                        rows[i + 1] = (s, rows[i + 1][1])
                    del rows[i]
                    changed = True
                    break

    # birbirine değen iki satırı vadiden ayır
    def split_tall(s, e):
        h = e - s
        if 1.7 * hmed <= h <= 2.6 * hmed:
            prof = nw[s:e].sum(1)
            lo, hi = int(h * 0.3), int(h * 0.7)
            k = lo + int(np.argmin(prof[lo:hi]))
            if prof[k] <= max(3, 0.01 * W) and prof.max() > 0:
                a1, a2 = (s, s + k), (s + k, e)
                if min(a1[1] - a1[0], a2[1] - a2[0]) >= 0.6 * hmed:
                    return [a1, a2]
        return [(s, e)]
    rr = []
    for s, e in rows:
        rr += split_tall(s, e)
    rows = rr

    bands = []
    for s, e in rows:
        sub = nw[s:e]
        cols = np.where(sub.any(0))[0]
        x0, x1 = int(cols[0]), int(cols[-1]) + 1
        h = e - s
        area = h * (x1 - x0)
        fill = light[s:e, x0:x1].sum() / max(1, area)
        dens = sub[:, x0:x1].sum() / max(1, area)
        hline = max(longest_run(ink[y]) for y in range(s, e))
        kind = 'text'
        why = ''
        if h > 1.45 * hmed:
            kind, why = 'block', 'yüksek'
            if h <= 2.8 * hmed and fill < 0.1 and dens < 0.35 and hline < 6 * hmed:
                col = sub[:, x0:x1].any(0)
                nseg = sum(1 for a_, c_ in runs(~col) if c_ - a_ >= max(4, 0.22 * hmed))
                if nseg >= 4:
                    kind, why = 'formula', 'formül'
        elif fill > 0.25:
            kind, why = 'block', 'dolgu'
        elif hline > max(12 * hmed, 0.3 * W):
            kind, why = 'block', 'çizgi'
        elif dens > 0.6:
            kind, why = 'block', 'yoğun'
        elif h < 0.45 * hmed and (x1 - x0) > 4 * hmed:
            kind, why = 'block', 'ince'
        bands.append(dict(y0=s, y1=e, x0=x0, x1=x1, kind=kind, why=why))
    Xmin0 = min(b['x0'] for b in bands)
    # şeklin hemen üstündeki/altındaki etiket satırlarını (A  B, 3 mm ...) şekle kat
    changed = True
    while changed:
        changed = False
        for i in range(len(bands) - 1):
            a, c = bands[i], bands[i + 1]
            if a['kind'] == 'block' and c['kind'] == 'block' and c['y0'] - a['y1'] <= 1.0 * hmed:
                bands[i] = dict(y0=a['y0'], y1=c['y1'], x0=min(a['x0'], c['x0']), x1=max(a['x1'], c['x1']),
                                kind='block', why=a['why'] + '+' + c['why'])
                del bands[i + 1]
                changed = True
                break
            if (a['kind'] == 'text') == (c['kind'] == 'text'):
                continue
            t, k = (a, c) if a['kind'] == 'text' else (c, a)
            if k['kind'] == 'formula':
                continue
            gap = c['y0'] - a['y1']
            inside = t['x0'] >= k['x0'] - 2 * hmed and t['x1'] <= k['x1'] + 2 * hmed
            caption = t['x0'] > Xmin0 + 5 * hmed and gap <= 2.2 * hmed   # şekil altı/üstü ortalı başlık
            # yan yana şekillerin başlık satırı: metindeki büyük boşluk şeklin koridoruyla hizalı
            colcap = False
            if not (inside and (gap <= 0.6 * hmed or caption)) and gap <= 1.6 * hmed and (t is a or t['x0'] > Xmin0 + 2 * hmed):
                kg = [(x, y) for x, y in runs(~nw[k['y0']:k['y1'], k['x0']:k['x1']].any(0)) if y - x >= max(20, 1.2 * hmed)]
                kg = [(x + k['x0'], y + k['x0']) for x, y in kg if x > 0 and y < k['x1'] - k['x0']]
                tg = [(x + t['x0'], y + t['x0']) for x, y in runs(~nw[t['y0']:t['y1'], t['x0']:t['x1']].any(0)) if y - x >= 1.5 * hmed]
                colcap = any(min(p_[1], q[1]) - max(p_[0], q[0]) >= 10 for p_ in kg for q in tg)
            if (inside and (gap <= 0.6 * hmed or caption)) or colcap:
                bands[i] = dict(y0=a['y0'], y1=c['y1'], x0=min(a['x0'], c['x0']), x1=max(a['x1'], c['x1']),
                                kind='block', why=k['why'] + '+etiket')
                del bands[i + 1]
                changed = True
                break
    return g, nw, hmed, bands


def segments(nw, b, thr):
    """bant içindeki boşluklarla ayrılmış kümeler: [(x0,x1)], boşluk eşiği thr"""
    col = nw[b['y0']:b['y1'], b['x0']:b['x1']].any(0)
    segs = [(s + b['x0'], e + b['x0']) for s, e in runs(col)]
    out = []
    for s, e in segs:
        if out and s - out[-1][1] < thr:
            out[-1] = (out[-1][0], e)
        else:
            out.append((s, e))
    return out


def balanced(grp, P):
    """kelime listesini dengeli parçalara böl: her parça <= ~P"""
    L = grp[-1][1] - grp[0][0]
    if L <= P or len(grp) == 1:
        return [grp]
    n = int(np.ceil(L / P))
    for n in range(n, n + 4):
        cuts, ok = [], True
        for i in range(1, n):
            t = grp[0][0] + L * i / n
            j = min(range(1, len(grp)), key=lambda j: abs((grp[j - 1][1] + grp[j][0]) / 2 - t))
            if cuts and j <= cuts[-1]:
                ok = False
                break
            cuts.append(j)
        if not ok:
            continue
        parts = [grp[a:c] for a, c in zip([0] + cuts, cuts + [len(grp)])]
        if all(p[-1][1] - p[0][0] <= P * 1.12 for p in parts):
            return parts
    # yedek: açgözlü
    parts, cur = [], [grp[0]]
    for w in grp[1:]:
        if w[1] - cur[0][0] > P:
            parts.append(cur)
            cur = [w]
        else:
            cur.append(w)
    return parts + [cur]


def plan(path, target=None):
    rgb = load(path)
    g, nw, hmed, bands = analyse(rgb)
    H, W = g.shape
    word = max(4, int(round(0.22 * hmed)))
    big = 1.8 * hmed
    texts = [b for b in bands if b['kind'] == 'text']
    if len(texts) < 1:
        raise Skip('metin satırı yok')
    Xmin = min(b['x0'] for b in bands)
    # hedef parça genişliği
    Wt = min(650, max(450, 25 * hmed))
    widths = sorted(b['x1'] - b['x0'] for b in texts)
    Lmax = widths[-1]
    k = int(np.ceil(Lmax / (Wt * 1.2)))
    if k <= 1:
        raise Skip('zaten dar (satır %dpx)' % Lmax)
    P = Lmax / k * 1.08

    # her metin bandını kelimelere ayır, etiket ve büyük boşlukları bul
    prevt = None
    for b in bands:
        if b['kind'] != 'text':
            prevt = None
            continue
        b['_prev'] = prevt
        prevt = b
    for b in texts:
        ws = segments(nw, b, word)
        b['words'] = ws
        b['label'] = None
        # soru numarası etiketi: solda dar ilk küme + belirgin boşluk ("13.   Metin")
        if (len(ws) >= 2 and ws[0][1] - ws[0][0] <= 1.6 * hmed
                and ws[1][0] - ws[0][1] >= (0.9 if ws[0][0] - Xmin <= 2 * hmed else 0.75) * hmed):
            b['label'] = ws[0]
            b['body'] = ws[1][0]
        # madde imi (•): ilk küme küçük bir nokta
        if not b['label'] and len(ws) >= 2 and ws[0][1] - ws[0][0] <= 0.5 * hmed:
            rows_ = np.where(nw[b['y0']:b['y1'], ws[0][0]:ws[0][1]].any(1))[0]
            if len(rows_) and rows_[-1] - rows_[0] + 1 <= 0.5 * hmed and rows_[0] > 0.15 * (b['y1'] - b['y0']):
                b['label'] = ws[0]
                b['body'] = ws[1][0]
        # soru numarası normal boşlukla: diğer satırlar gövde sütununda başlıyorsa
        if (not b['label'] and len(ws) >= 2 and ws[0][0] - Xmin <= 0.5 * hmed and ws[0][1] - ws[0][0] <= 1.6 * hmed
                and ws[1][0] - ws[0][1] >= 0.3 * hmed
                and any(o is not b and abs(o['x0'] - ws[1][0]) <= 0.5 * hmed and o['x0'] > b['x0'] + 0.5 * hmed
                        for o in texts)):
            b['label'] = ws[0]
            b['body'] = ws[1][0]
        # önceki satır etiketliyse (I. / II. / III. hizası) aynı gövde girintisini ara
        pv = b.get('_prev')
        if not b['label'] and pv is not None and pv.get('label') and abs(b['x0'] - pv['x0']) < 0.5 * hmed:
            for w in ws[1:3]:
                if abs(w[0] - pv['body']) < 0.5 * hmed and w[0] - ws[0][0] <= 2.2 * hmed:
                    b['label'] = (ws[0][0], w[0])
                    b['body'] = w[0]
                    break
        groups = [[ws[0]]]
        for i_, w in enumerate(ws[1:]):
            if w[0] - groups[-1][-1][1] >= big and not (i_ == 0 and b['label']) and ws[-1][1] - ws[0][0] > P:
                groups.append([w])
            else:
                groups[-1].append(w)
        b['groups'] = groups
        b['gaps'] = [(ws[i][1], ws[i + 1][0]) for i in range(len(ws) - 1)
                     if ws[i + 1][0] - ws[i][1] >= big and not (i == 0 and b['label'])]

    # iki sütunlu düzen: ardışık >=3 metin satırında hizalı büyük boşluk
    run_n, prev = 0, None
    for b in bands:
        if b['kind'] != 'text' or not b['gaps']:
            run_n, prev = 0, None
            continue
        if prev is not None and any(min(a[1], c[1]) - max(a[0], c[0]) >= 10 for a in b['gaps'] for c in prev):
            run_n += 1
        else:
            run_n = 1
        prev = b['gaps']
        if run_n >= 3:
            raise Skip('iki sütunlu/tablo düzeni')

    # paragrafın devam girintisi
    tl = [b for b in bands]
    for i, b in enumerate(tl):
        if b['kind'] != 'text':
            continue
        cont = b.get('body', b['x0'])
        pv = tl[i - 1] if i > 0 else None
        chained = (not b['label'] and pv is not None and pv['kind'] == 'text' and 'cont' in pv
                   and abs(pv['cont'] - b['x0']) <= 3 and b['x0'] > pv['x0'] + 0.5 * hmed
                   and b['y0'] - pv['y1'] < 2.0 * hmed)
        if chained:          # bu satır zaten bir önceki satırın devamı: kendi girintisinde kal
            pass
        elif not b['label'] and i + 1 < len(tl) and tl[i + 1]['kind'] == 'text':
            n = tl[i + 1]
            if abs(n['x0'] - cont) < 4 * hmed and n['y0'] - b['y1'] < 2.0 * hmed and not n.get('label'):
                cont = n['x0']
        b['cont'] = cont

    # tek satırlık şık (A) ...) için kardeş şıkların asılı girintisini kullan; kalın soru satırını karıştırma
    def dk(b):
        return (g[b['y0']:b['y1'], b['x0']:b['x1']] < INK).mean()
    sibs = [o for o in texts if o['cont'] > o['x0'] + 0.5 * hmed and len(o['words']) >= 2]
    for b in texts:
        if b['cont'] != b['x0'] or len(b['words']) < 2:
            continue
        w0 = b['words'][0][1] - b['words'][0][0]
        for o in sibs:
            ow0 = o['words'][0][1] - o['words'][0][0]
            if (abs(o['x0'] - b['x0']) <= 3 and abs(b['words'][1][0] - o['cont']) <= 0.3 * hmed
                    and abs(w0 - ow0) <= 0.3 * hmed and w0 <= 1.4 * hmed
                    and 0.8 <= dk(b) / max(1e-6, dk(o)) <= 1.25):
                b['cont'] = o['cont']
                break

    # parçalar
    def make_pieces(P):
        for b in texts:
            out = []
            for gi, grp in enumerate(b['groups']):
                for pi, p in enumerate(balanced(grp, P)):
                    if gi == 0 and pi == 0:
                        xpos = p[0][0]
                    elif pi == 0:          # şık / büyük boşluktan sonra
                        xpos = b.get('body', b['x0'])
                    else:
                        xpos = b['cont']
                    out.append((p[0][0], p[-1][1], xpos))
            b['pieces'] = out
        return max(xp - Xmin + (x1 - x0) for b in texts for x0, x1, xp in b['pieces'])

    # yerleşim
    pad = 10
    textW = make_pieces(P)
    blocks = [b for b in bands if b['kind'] != 'text']
    Wcap = int(1.3 * textW)

    def gutter_split(x0, x1, y0, y1, limit):
        """geniş şekli tam boy beyaz dikey koridordan böl (A) şekil  B) şekil -> alt alta)"""
        if x1 - x0 <= limit:
            return [(x0, x1, y0, y1)]
        col = nw[y0:y1, x0:x1].any(0)
        best = None
        for s_, e_ in runs(~col):
            if e_ - s_ >= max(20, 1.2 * hmed) and s_ >= 0.25 * (x1 - x0) and e_ <= 0.75 * (x1 - x0):
                d = abs((s_ + e_) / 2 - (x1 - x0) / 2)
                if best is None or d < best[0]:
                    best = (d, s_ + x0, e_ + x0)
        if best is None:
            return [(x0, x1, y0, y1)]
        out = []
        for a, c in ((x0, best[1]), (best[2], x1)):
            sub = nw[y0:y1, a:c]
            rr = np.where(sub.any(1))[0]
            cc = np.where(sub.any(0))[0]
            out += gutter_split(a + int(cc[0]), a + int(cc[-1]) + 1, y0 + int(rr[0]), y0 + int(rr[-1]) + 1, limit)
        return out

    for b in blocks:
        b['parts'] = ([(b['x0'], b['x1'], b['y0'], b['y1'])] if b['kind'] == 'formula'
                      else gutter_split(b['x0'], b['x1'], b['y0'], b['y1'], max(textW, Wcap)))
    blockW = max([p[1] - p[0] for b in blocks if b['kind'] != 'formula' for p in b['parts']] or [0])
    Wout = max(textW, min(blockW, Wcap))
    if Wout > textW * 1.08:      # şekil metinden genişse metni de o genişliğe yay
        t2 = make_pieces(P * Wout / textW)
        if t2 <= Wout * 1.02:
            textW = t2
            Wout = max(textW, Wout)
        else:
            textW = make_pieces(P)
    minscale = min([min(1.0, Wout / (p[1] - p[0])) for b in blocks if b['kind'] != 'formula' for p in b['parts']] or [1.0])
    fw = max([b['x1'] - b['x0'] for b in blocks if b['kind'] == 'formula'] or [0])
    if fw > Wout * 1.02:
        raise Skip('satır içi formül (%dpx)' % fw)
    def texty(p_):
        x0, x1, y0, y1 = p_
        ix, iy = int(0.06 * (x1 - x0)), 6
        sub = (g[y0 + iy:y1 - iy, x0 + ix:x1 - ix] < INK).any(1)
        rr = [(a_, c_) for a_, c_ in runs(sub) if 0.6 * hmed <= c_ - a_ <= 1.4 * hmed]
        return len(rr) >= 2 and sum(c_ - a_ for a_, c_ in rr) > 0.45 * (y1 - y0)
    for b in blocks:
        for p_ in b['parts']:
            if (p_[1] - p_[0]) > Wout / 0.85 and b['kind'] != 'formula' and texty(p_):
                raise Skip('geniş metin kutusu/tablo küçülürdü (%dpx)' % (p_[1] - p_[0]))
    content_h = bands[-1]['y1'] - bands[0]['y0']
    for b in blocks:
        for p_ in b['parts']:
            if (p_[1] - p_[0]) > Wout / 0.7 and (p_[3] - p_[2]) > 0.3 * content_h:
                raise Skip('büyük şekil baskın, küçültme gerekir (%dpx)' % (p_[1] - p_[0]))
    if minscale < 0.5:
        raise Skip('geniş şekil/tablo (%dpx)' % blockW)
    if Wout + 2 * pad > 0.8 * W:
        raise Skip('kazanç az (%d→%d)' % (W, Wout + 2 * pad))

    textgaps = [bands[i + 1]['y0'] - bands[i]['y1'] for i in range(len(bands) - 1)
                if bands[i]['kind'] == 'text' and bands[i + 1]['kind'] == 'text']
    small = [x for x in textgaps if x <= 0.9 * hmed]
    lead0 = int(np.clip(np.median(small) if small else 0.4 * hmed, 4, hmed))
    # satır aralığı: aynı paragraftaki ardışık satırların üst kenar farkı (taban çizgisi aralığına yakın)
    pitches = [bands[i + 1]['y0'] - bands[i]['y0'] for i in range(len(bands) - 1)
               if bands[i]['kind'] == 'text' and bands[i + 1]['kind'] == 'text'
               and bands[i + 1]['y0'] - bands[i]['y1'] <= 0.9 * hmed]
    pitch = float(np.median(pitches)) if pitches else hmed + lead0
    for i, b in enumerate(bands):
        h_ = b['y1'] - b['y0']
        b['lead'] = int(max(3, round(pitch - h_))) if h_ <= pitch - 3 else 3
    ops = []   # (src box, dst xy, dst size | None)
    y = pad + 0
    for i, b in enumerate(bands):
        if i > 0:
            y += b['y0'] - bands[i - 1]['y1']
        if b['kind'] == 'text':
            for j, (x0, x1, xp) in enumerate(b['pieces']):
                if j:
                    y += b['lead']
                ops.append(((x0, b['y0'], x1, b['y1']), (pad + xp - Xmin, y), None))
                y += b['y1'] - b['y0']
        else:
            for j, (x0, x1, y0, y1) in enumerate(b['parts']):
                if j:
                    y += int(0.8 * hmed)
                w, h = x1 - x0, y1 - y0
                sz = None
                if w > Wout:
                    sz = (Wout, max(1, int(round(h * Wout / w))))
                    w, h = sz
                xp = max(0, min(x0 - Xmin, Wout - w)) if len(b['parts']) == 1 else 0
                cx = (Xmin + max(t['x1'] for t in texts)) / 2
                if len(b['parts']) == 1 and abs((x0 + x1) / 2 - cx) < 0.06 * W and x0 - Xmin > 2 * hmed:
                    xp = max(0, (Wout - w) // 2)     # ortalı şekli ortalı tut
                ops.append(((x0, y0, x1, y1), (pad + xp, y), sz))
                y += h
    Hout = y + pad
        # kapsama kontrolü: kaynak kutuları tüm mürekkebi bir kez kapsamalı
    inkm = g < INK
    cov = np.zeros_like(inkm, dtype=np.int8)
    for (x0, y0, x1, y1), _, _ in ops:
        cov[y0:y1, x0:x1] += 1
    if (cov > 1).any() or (inkm & (cov == 0)).sum() > 3:
        raise Skip('kapsama kontrolü başarısız')
    return rgb, ops, (Wout + 2 * pad, Hout), dict(hmed=hmed, k=k, P=int(P), lines=len(texts), blocks=len(blocks), scale=round(minscale, 2),
                                                 bigsplit=sum(len(b['groups']) - 1 for b in texts),
                                                 gutter=sum(len(b['parts']) - 1 for b in blocks),
                                                 formula=sum(b['kind'] == 'formula' for b in blocks),
                                                 rulerow=sum(1 for i, b in enumerate(bands) if b['kind'] == 'text' and len(b['groups']) > 1
                                                             and any(bands[j]['why'] in ('çizgi', 'ince') and abs(bands[j]['y0'] - b['y1']) + 0 < 2 * hmed
                                                                     or bands[j]['why'] in ('çizgi', 'ince') and abs(b['y0'] - bands[j]['y1']) < 2 * hmed
                                                                     for j in (i - 1, i + 1) if 0 <= j < len(bands))))


def render(rgb, ops, size):
    out = Image.new('RGB', size, (255, 255, 255))
    for box, xy, sz in ops:
        im = rgb.crop(box)
        if sz:
            im = im.resize(sz, Image.LANCZOS)
        out.paste(im, xy)
    return out


def check(rgb, out):
    a = (np.asarray(rgb.convert('L')) < INK).sum()
    b = (np.asarray(out.convert('L')) < INK).sum()
    return abs(a - b) <= max(5, 0.002 * a)


def process(args):
    path, dst = args
    try:
        rgb, ops, size, info = plan(path)
        out = render(rgb, ops, size)
        if info['scale'] >= 1 and not check(rgb, out):
            raise Skip('piksel kontrolü başarısız')
        out.save(dst, 'WEBP', quality=85, method=4)
        return dict(file=path, ok=True, before=list(rgb.size), after=[int(v) for v in size], **{k: float(v) for k, v in info.items()})
    except Skip as e:
        return dict(file=path, ok=False, reason=str(e))
    except Exception as e:  # beklenmeyen: dokunma
        return dict(file=path, ok=False, reason='hata: %r' % e)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('files', nargs='+')
    ap.add_argument('--out')
    ap.add_argument('--inplace', action='store_true')
    ap.add_argument('--report')
    ap.add_argument('-j', type=int, default=os.cpu_count())
    o = ap.parse_args()
    if not o.inplace and not o.out:
        ap.error('--out veya --inplace')
    if o.out:
        os.makedirs(o.out, exist_ok=True)
    jobs = [(f, f if o.inplace else os.path.join(o.out, os.path.basename(f))) for f in o.files]
    from multiprocessing import Pool
    with Pool(o.j) as p:
        res = p.map(process, jobs, chunksize=8)
    ok = sum(r['ok'] for r in res)
    from collections import Counter
    c = Counter(r['reason'].split(' (')[0] for r in res if not r['ok'])
    print('dönüştü: %d / %d' % (ok, len(res)))
    for k, v in c.most_common():
        print('  atlandı: %-30s %d' % (k, v))
    if o.report:
        json.dump(res, open(o.report, 'w'), ensure_ascii=False, indent=1, default=int)


if __name__ == '__main__':
    main()
