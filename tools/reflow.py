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

REF = 27.0 / 644   # referans img/past/2018-ink-2.webp: satır bandı yüksekliği / görsel genişliği
TOL = 0.15
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


def analyse(rgb, hmed_force=None):
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
    if hmed_force:
        hmed = float(hmed_force)
        if not rows:
            raise Skip('boş')
    else:
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
            if prof[k] <= 2 and prof.max() > 0:
                a1, a2 = (s, s + k), (s + k, e)
                if min(a1[1] - a1[0], a2[1] - a2[0]) >= 0.6 * hmed:
                    return [a1, a2]
        return [(s, e)]
    rr = []
    for s, e in rows:
        rr += split_tall(s, e)
    rows = rr

    bands = []
    ulrows = None
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
            # uzun kesir çizgisi (ince, bandın ortasında, bandın tamamını kaplamayan) formülü bozmaz
            fracbar = False
            if hline >= 6 * hmed and hline < min(16 * hmed, 0.7 * (x1 - x0)):
                lr = [y for y in range(s, e) if longest_run(ink[y]) >= 0.8 * hline]
                fracbar = len(lr) <= 3 and lr[-1] - lr[0] <= 3 and 0.3 * h <= lr[0] - s <= 0.7 * h
            sat = ((a[s:e, x0:x1].max(2) - a[s:e, x0:x1].min(2)) > 80).mean()     # renkli simge/şekil formül değildir
            if h <= 2.8 * hmed and fill < 0.1 and dens < 0.35 and (hline < 6 * hmed or fracbar) and sat < 0.02:
                col = sub[:, x0:x1].any(0)
                nseg = sum(1 for a_, c_ in runs(~col) if c_ - a_ >= max(4, 0.22 * hmed))
                if nseg >= 4:
                    kind, why = 'formula', 'formül'
        elif fill > 0.25:
            kind, why = 'block', 'dolgu'
        elif hline > max(12 * hmed, 0.3 * W):
            kind, why = 'block', 'çizgi'
            # altı çizili metin satırı: uzun çizgi yalnız bandın alt kısmında, üstünde kelimeler
            ulr = [y for y in range(s, e) if longest_run(ink[y]) > 6 * hmed]
            if 0.8 * hmed <= h and len(ulr) <= 4 and min(ulr) >= s + 0.6 * h:
                above = nw[s:min(ulr), x0:x1].any(0)
                ngap = sum(1 for a_, c_ in runs(~above) if c_ - a_ >= max(4, 0.22 * hmed))
                if ngap >= 3:
                    kind, why = 'text', ''
                    ulrows = (min(ulr), max(ulr) + 1)
        elif dens > 0.6:
            kind, why = 'block', 'yoğun'
        elif h < 0.45 * hmed and (x1 - x0) > 4 * hmed:
            kind, why = 'block', 'ince'
        bands.append(dict(y0=s, y1=e, x0=x0, x1=x1, kind=kind, why=why))
        if kind == 'text' and ulrows is not None:
            bands[-1]['ul'] = ulrows
        ulrows = None
    # bölünemeyecek kadar uzun "kelime" (renkli çizgi/çubuk + etiket) içeren metin bandı aslında şekildir
    for b in bands:
        if b['kind'] == 'text' and not b.get('ul'):
            ws_ = segments(nw, b, max(4, int(round(0.22 * hmed))))
            if any(c_ - a_ > 15 * hmed for a_, c_ in ws_):
                b['kind'], b['why'] = 'block', 'çizgi'
    Xmin0 = min(b['x0'] for b in bands)
    # şeklin hemen üstündeki/altındaki etiket satırlarını (A  B, 3 mm ...) şekle kat
    changed = True
    while changed:
        changed = False
        for i in range(len(bands) - 1):
            a, c = bands[i], bands[i + 1]
            aligned = ((a['x0'] - 0.5 * hmed <= c['x0'] and c['x1'] <= a['x1'] + 0.5 * hmed)
                       or (c['x0'] - 0.5 * hmed <= a['x0'] and a['x1'] <= c['x1'] + 0.5 * hmed))
            if a['kind'] == 'block' and c['kind'] == 'block' and (c['y0'] - a['y1'] <= 1.0 * hmed
                                                                  or (aligned and c['y0'] - a['y1'] <= 1.8 * hmed
                                                                      and min(a['y1'] - a['y0'], c['y1'] - c['y0']) <= 2.5 * hmed)):
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
            # şık harfi satırı (A)      B)) hemen altındaki geniş şekle aitse şekle kat
            optrow = False
            if not colcap and gap <= 1.6 * hmed and (k['x1'] - k['x0']) > 15 * hmed:
                cs = runs(nw[t['y0']:t['y1'], t['x0']:t['x1']].any(0))
                ws_ = []
                for x_, y_ in cs:
                    if ws_ and x_ - ws_[-1][1] < 0.35 * hmed:
                        ws_[-1] = (ws_[-1][0], y_)
                    else:
                        ws_.append((x_, y_))
                optrow = (2 <= len(ws_) <= 6 and all(y_ - x_ <= 2.2 * hmed for x_, y_ in ws_)
                          and all(ws_[i + 1][0] - ws_[i][1] >= 4 * hmed for i in range(len(ws_) - 1))
                          and t['x0'] >= k['x0'] - 3 * hmed and t['x1'] <= k['x1'] + 3 * hmed)
            if (inside and (gap <= 0.6 * hmed or caption)) or colcap or optrow:
                bands[i] = dict(y0=a['y0'], y1=c['y1'], x0=min(a['x0'], c['x0']), x1=max(a['x1'], c['x1']),
                                kind='block', why=k['why'] + '+etiket')
                del bands[i + 1]
                changed = True
                break
    return g, nw, hmed, bands


def segments(nw, b, thr):
    """bant içindeki boşluklarla ayrılmış kümeler: [(x0,x1)], boşluk eşiği thr"""
    m = nw[b['y0']:b['y1'], b['x0']:b['x1']]
    if b.get('ul'):          # alt çizgi satırlarını kelime aramasında yok say
        keep = np.ones(m.shape[0], bool)
        keep[max(0, b['ul'][0] - 1 - b['y0']):b['ul'][1] + 1 - b['y0']] = False
        m = m[keep]
    col = m.any(0)
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
    return plan_img(load(path))


def plan_img(rgb, hmed_force=None, T_force=None, depth=0):
    inner = T_force is not None
    g, nw, hmed, bands = analyse(rgb, hmed_force)
    H, W = g.shape
    word = max(4, int(round(0.22 * hmed)))
    big = 1.8 * hmed
    texts = [b for b in bands if b['kind'] == 'text']
    if len(texts) < 1:
        raise Skip('metin satırı yok')
    Xmin = min(b['x0'] for b in bands)
    # hedef: telefonda punto = referans (satır yüksekliği / görsel genişliği = REF)
    pad = 0 if inner else 10
    Wtot = hmed / REF                  # hedef toplam genişlik
    T = T_force if inner else Wtot - 2 * pad                 # hedef içerik genişliği
    if not inner and hmed / W >= REF * (1 - TOL):
        raise Skip('hedefi zaten tutuyor (oran %.2f)' % (hmed / W / REF))
    # altı çizili bölümlerin altına yazılmış numara satırları (I  II  III): akıtma eşlemeyi bozar
    for i_ in range(1, len(bands)):
        b, pv = bands[i_], bands[i_ - 1]
        if b['kind'] != 'text' or pv['kind'] != 'text' or b['y1'] - b['y0'] > 1.0 * hmed or b['y0'] - pv['y1'] > 1.2 * hmed:
            continue
        ws_ = segments(nw, b, int(0.3 * hmed))
        if not (1 <= len(ws_) <= 5 and all(c_ - a_ <= 1.5 * hmed for a_, c_ in ws_)
                and all(ws_[j + 1][0] - ws_[j][1] >= 3 * hmed for j in range(len(ws_) - 1))):
            continue
        hb = max(1, int(0.3 * (pv['y1'] - pv['y0'])))
        bot = g[pv['y1'] - hb:pv['y1']] < INK
        hits = 0
        for a_, c_ in ws_:
            cx = (a_ + c_) // 2
            for y_ in range(bot.shape[0]):
                rr = [(p, q) for p, q in runs(bot[y_]) if p <= cx < q and q - p >= 2 * hmed]
                if rr:
                    hits += 1
                    break
        if hits == len(ws_):
            raise Skip('numaralı altı çizili bölümler')
    # metin satırı gibi bölünebilir formül bantları (tam boy beyaz sütunlardan bölünür)
    for b in bands:
        if b['kind'] == 'formula' and ((b['x1'] - b['x0']) > T * 1.1 or (b['x1'] - Xmin) > T * 1.05):
            b['kind'] = 'text'
            b['ftext'] = True
    texts = [b for b in bands if b['kind'] == 'text']
    # şeklin yanındaki metin sütununun ilk satırı şekil etiketiyle ("Milyon Ton") aynı banda düşmüşse:
    # bandı koridordan böl, iki yarıyı alttaki bloğun sol/sağ bölümlerine kat
    if not inner:
        for i_ in range(1, len(bands)):
            b, pv = bands[i_], bands[i_ - 1]
            if b['kind'] != 'block' or pv['kind'] != 'text' or pv.get('ftext') or b['y0'] - pv['y1'] > 1.0 * hmed:
                continue
            col = nw[b['y0']:b['y1'], b['x0']:b['x1']].any(0)
            cor = [(s_ + b['x0'], e_ + b['x0']) for s_, e_ in runs(~col)
                   if e_ - s_ >= max(20, 1.2 * hmed) and s_ >= 0.25 * (b['x1'] - b['x0']) and e_ <= 0.85 * (b['x1'] - b['x0'])]
            if len(cor) != 1:
                continue
            cs, ce = cor[0]
            ws = segments(nw, pv, word)
            cut = [k_ for k_ in range(len(ws) - 1) if ws[k_][1] <= cs + 2 and ws[k_ + 1][0] >= cs
                   and ws[k_ + 1][0] - ws[k_][1] >= 0.5 * hmed]
            if not cut or pv['x1'] <= ce or pv['x0'] >= cs:
                continue
            k_ = cut[0]
            # sol yarı metin, sağ yarı kısa (etiket) olmalı
            if ws[-1][1] - ws[k_ + 1][0] > 0.6 * (ws[k_][1] - ws[0][0]):
                continue
            sub = nw[b['y0']:b['y1'], b['x0']:cs]; cc = np.where(sub.any(0))[0]; rr = np.where(sub.any(1))[0]
            Lp = (min(b['x0'] + int(cc[0]), pv['x0']), max(b['x0'] + int(cc[-1]) + 1, ws[k_][1]), pv['y0'], b['y0'] + int(rr[-1]) + 1)
            sub = nw[b['y0']:b['y1'], ce:b['x1']]; cc = np.where(sub.any(0))[0]; rr = np.where(sub.any(1))[0]
            Rp = (min(ce + int(cc[0]), ws[k_ + 1][0]), ce + int(cc[-1]) + 1, pv['y0'], b['y0'] + int(rr[-1]) + 1)
            b['forced_parts'] = [Lp, Rp]
            b['y0'] = pv['y0']; b['x0'] = min(b['x0'], pv['x0']); b['x1'] = max(b['x1'], pv['x1'])
            pv['kind'] = 'absorbed'
        bands = [b for b in bands if b['kind'] != 'absorbed']
        texts = [b for b in bands if b['kind'] == 'text']
        if not texts:
            raise Skip('metin satırı yok')
    widths = sorted(b['x1'] - b['x0'] for b in texts)
    Lmax = widths[-1]
    k = int(np.ceil(Lmax / T))
    P = min(Lmax, T) * 1.0

    # her metin bandını kelimelere ayır, etiket ve büyük boşlukları bul
    prevt = None
    for b in bands:
        if b['kind'] != 'text':
            prevt = None
            continue
        b['_prev'] = prevt
        prevt = b
    def _dk(b):
        # çizgi kalınlığı: ortalama yatay mürekkep koşusu (kalın yazı ~1.5x); yoğunluktan bağımsız
        if '_sw' not in b:
            m = g[b['y0']:b['y1'], b['x0']:b['x1']] < INK
            st = (m[:, 1:] & ~m[:, :-1]).sum() + m[:, 0].sum()
            b['_sw'] = m.sum() / max(1, st)
        return b['_sw']
    # sekmeyle hizalanmış konuşmacı/etiket sütunu ("Jack    : ...", "George  : ..."): >=3 satırda aynı x'te
    # başlayan gövde kelimesi, önündeki etiketler farklı genişlikte ve en az birinde geniş sekme boşluğu
    spk = {}
    pre = [(b, segments(nw, b, word)) for b in texts if not b.get('ftext')]
    cand_ = []
    for b, ws in pre:
        for k_ in (1, 2, 3):
            if k_ < len(ws) and ws[k_][0] - b['x0'] <= 6 * hmed and ws[k_][0] - ws[k_ - 1][1] >= 0.2 * hmed:
                cand_.append((ws[k_][0], b, ws, k_))
    for xc, b, ws, k_ in cand_:
        grp = [c for c in cand_ if abs(c[0] - xc) <= 3 and abs(c[1]['x0'] - b['x0']) <= 3]
        if len({id(c[1]) for c in grp}) < 3:
            continue
        lw = {c[2][c[3] - 1][1] - c[1]['x0'] for c in grp}
        tab = any(c[2][j][1] < c[2][j + 1][0] - 0.8 * hmed for c in grp for j in range(c[3]))
        if max(lw) - min(lw) >= 0.5 * hmed and tab:
            for c in grp:
                spk[id(c[1])] = max(spk.get(id(c[1]), 0), c[0])
    for b in texts:
        ws = segments(nw, b, max(word, int(round(0.35 * hmed))) if b.get('ftext') else word)
        if b.get('ftext') and any(c_ - a_ > 0.6 * T for a_, c_ in ws):
            ws = segments(nw, b, word)        # sıkışık yazı: normal kelime boşluğundan böl
        # boşluk çizgileri ("- - - -", "......") tek parça kalsın, satır sonunda bölünmesin
        def dashy(w):
            if w[1] - w[0] > 0.7 * hmed:
                return False
            rr_ = np.where(nw[b['y0']:b['y1'], w[0]:w[1]].any(1))[0]
            return len(rr_) > 0 and rr_[-1] - rr_[0] + 1 <= 0.25 * hmed
        if len(ws) >= 2:
            mw = [ws[0]]
            dprev = dashy(ws[0])
            for w in ws[1:]:
                dw = dashy(w)
                if dw and dprev and w[0] - mw[-1][1] <= 0.8 * hmed:
                    mw[-1] = (mw[-1][0], w[1])
                else:
                    mw.append(w)
                dprev = dw
            ws = mw
        b['words'] = ws
        b['label'] = None
        if id(b) in spk:
            b['label'] = (ws[0][0], spk[id(b)])
            b['body'] = spk[id(b)]
        # soru numarası etiketi: solda dar ilk küme + belirgin boşluk ("13.   Metin")
        if (not b["label"] and len(ws) >= 2 and ws[0][1] - ws[0][0] <= 1.6 * hmed and ws[0][0] - Xmin <= 0.5 * hmed
                and 0.9 * hmed <= ws[1][0] - ws[0][1] <= 3.5 * hmed):
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
        # hizalı etiket sütunu (A) B) C) D) / I. II. III.): aynı x'te başlayan, dar ilk kümeli ve gövdesi hizalı >=3 satır
        pv0 = b.get('_prev')
        cont_line = (pv0 is not None and pv0['kind'] == 'text' and not pv0.get('label')
                     and abs(pv0['x0'] - b['x0']) < 0.5 * hmed and pv0['x1'] >= max(o['x1'] for o in texts) - 2 * hmed
                     and b['y0'] - pv0['y1'] < 0.6 * hmed)      # tam dolu paragraf satırının devamı etiket değildir
        if not b['label'] and not cont_line and len(ws) >= 2 and ws[0][1] - ws[0][0] <= 1.6 * hmed and ws[1][0] - ws[0][1] >= 0.25 * hmed:
            same = 0
            for o in texts:
                if o is b or abs(o['x0'] - b['x0']) > 3:
                    continue
                ow = o.get('words') or segments(nw, o, word)
                if (len(ow) >= 2 and ow[0][1] - ow[0][0] <= 1.6 * hmed and abs(ow[1][0] - ws[1][0]) <= 0.3 * hmed
                        and ow[1][0] - ow[0][1] >= 0.25 * hmed
                        and abs((ow[0][1] - ow[0][0]) - (ws[0][1] - ws[0][0])) <= 0.35 * hmed
                        and 0.8 <= _dk(b) / max(1e-6, _dk(o)) <= 1.25):
                    same += 1
            if same >= 2:
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
        if b['kind'] != 'text' or not b['gaps'] or b.get('ftext'):
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
    dk = _dk
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
    for b in texts:
        if abs(b['cont'] - b['x0']) > 0.5 * hmed or len(b['words']) < 3 or b['label']:
            continue
        if True:
            # konuşmacı etiketi ("Ege :") gibi geniş asılı girinti: kardeş satırın devam girintisinde bir kelime başlıyorsa
            for o in sibs:
                if (abs(o['x0'] - b['x0']) <= 3 and o['cont'] - o['x0'] <= 4 * hmed
                        and any(abs(w[0] - o['cont']) <= 0.2 * hmed for w in b['words'][1:3])
                        and 0.8 <= dk(b) / max(1e-6, dk(o)) <= 1.25):
                    b['cont'] = o['cont']
                    break

    # paragraf birleştirme (satırlar arası yeniden akış) için yardımcılar
    def baseline(b):
        prof = (g[b['y0']:b['y1'], b['x0']:b['x1']] < INK).sum(1).astype(float)
        if b.get('ul'):          # alt çizgi satırları taban çizgisi sanılmasın
            prof[max(0, b['ul'][0] - 1 - b['y0']):b['ul'][1] + 1 - b['y0']] = 0
        # kısa alt çizgiler (tek kelime altı çizili): bandın alt kısmındaki uzun yatay koşu satırları
        hh = b['y1'] - b['y0']
        for r_ in range(int(0.6 * hh), hh):
            if longest_run(g[b['y0'] + r_, b['x0']:b['x1']] < INK) >= 1.5 * hmed:
                prof[r_] = 0
        if prof.max() <= 0:
            return b['y1']
        idx = np.where(prof >= 0.35 * prof.max())[0]
        return b['y0'] + int(idx[-1]) + 1

    def hyphen_end(b):
        x0_, x1_ = b['words'][-1]
        sub = g[b['y0']:b['y1'], x0_:x1_] < INK
        cr = runs(sub.any(0))
        if len(cr) < 2:
            return False
        a_, c_ = cr[-1]
        rr = np.where(sub[:, a_:c_].any(1))[0]
        bl = b['base'] - b['y0']
        hgt = rr[-1] - rr[0] + 1
        cy = (rr[0] + rr[-1]) / 2
        pr = np.where(sub[:, cr[-2][0]:cr[-2][1]].any(1))[0]      # tireden önceki harf gerçek harf olmalı (boşluk çizgisi değil)
        if (0.22 * hmed <= c_ - a_ <= 0.6 * hmed and hgt <= max(3, 0.18 * hmed)
                and 0.55 * bl <= cy <= 0.88 * bl and len(pr) and pr[-1] - pr[0] + 1 >= 0.4 * hmed):
            # (harflerin bittiği x, tire kutusu)
            return (x0_ + cr[-2][1], (x0_ + a_, b['y0'] + int(rr[0]), x0_ + c_, b['y0'] + int(rr[-1]) + 1))
        # harfe yapışık tire ("r-"): son kümenin sağ ucunda yalnız ince yatay çizgi olan sütunlar
        s_ = c_
        lo_, hi_ = 10 ** 6, -1
        while s_ > a_:
            col = np.where(sub[:, s_ - 1])[0]
            if not len(col):
                break
            nlo, nhi = min(lo_, col[0]), max(hi_, col[-1])
            if nhi - nlo + 1 > max(3, 0.18 * hmed) or not (0.55 * bl <= (nlo + nhi) / 2 <= 0.88 * bl):
                break
            lo_, hi_ = nlo, nhi
            s_ -= 1
        if hi_ >= 0 and 0.22 * hmed <= c_ - s_ <= 0.6 * hmed and s_ - a_ >= 0.2 * hmed:
            lr = np.where(sub[:, a_:s_].any(1))[0]
            if len(lr) and lr[-1] - lr[0] + 1 >= 0.4 * hmed:
                return (x0_ + s_, (x0_ + s_, b['y0'] + int(lo_), x0_ + c_, b['y0'] + int(hi_) + 1))
        return False

    def sw_of(y0_, y1_, x0_, x1_):
        m = g[y0_:y1_, x0_:x1_] < INK
        st = (m[:, 1:] & ~m[:, :-1]).sum() + m[:, 0].sum()
        return m.sum() / max(1, st)

    def bold_lead(b):
        # satır kalın bir başlık kelimesiyle başlıyorsa ("Hızlı sürüş: ...") yeni madde: birleştirme
        ws_ = b['words']
        if len(ws_) < 3:
            return False
        a_ = sw_of(b['y0'], b['y1'], ws_[0][0], ws_[0][1])
        r_ = sw_of(b['y0'], b['y1'], ws_[-2][0], ws_[-1][1])
        return a_ >= 1.3 * r_

    for b in texts:
        b['base'] = baseline(b)
    Xr = max(b['x1'] for b in texts)
    paras = []          # [[band, band, ...]]
    for i, b in enumerate(bands):
        if b['kind'] != 'text':
            continue
        ok_b = not b.get('ftext') and not b.get('ul') and len(b['groups']) == 1
        if paras and ok_b and paras[-1][-1] is bands[i - 1]:
            pv = paras[-1][-1]
            p0 = paras[-1][0]
            # etiketli tek satırdan sonra daha derin asılı girinti ("58. Arda: ..." / "     sanları ...")
            if (len(paras[-1]) == 1 and p0['label'] and pv.get('_rw') and not b['label']
                    and p0['cont'] + 0.5 * hmed < b['x0'] <= p0['cont'] + 4 * hmed
                    and any(abs(w[0] - b['x0']) <= 0.2 * hmed for w in p0['words'][1:4])):
                p0['cont'] = b['x0']
            if (pv.get('_rw') and not b['label'] and not bold_lead(b) and b['y0'] - pv['y1'] <= 0.9 * hmed
                    and abs(b['x0'] - p0['cont']) <= 0.5 * hmed and pv['x1'] >= Xr - 4 * hmed
                    and 0.8 <= _dk(b) / max(1e-6, _dk(pv)) <= 1.25):
                b['_rw'] = True
                paras[-1].append(b)
                continue
        b['_rw'] = ok_b
        paras.append([b])
    if os.environ.get('RFDBG'):
        for p in paras:
            print('PARA', [(int(b['y0']), round(float(_dk(b)), 2), b['x0'], b['x1'], b['label'], b.get('body'), b['cont'], len(b['groups']), b.get('ftext'), b.get('ul'), b.get('_rw')) for b in p], Xr, hmed, file=sys.stderr)
    for p in paras:
        for k_, b in enumerate(p):
            b['para'] = p
            b['inpara'] = k_ > 0
            b['hyph'] = hyphen_end(b) if k_ + 1 < len(p) else False

    def para_rows(p, Pw, lim):
        """paragrafın kelimelerini satırlara açgözlü doldur; satır = [(band, x0, x1, dx)]"""
        b0 = p[0]
        off0 = b0['words'][0][0] - Xmin
        offc = b0['cont'] - Xmin
        units = []      # (band, x0, x1, space_before, brk_after)
        for k_, b in enumerate(p):
            ws = b['words']
            gaps = [ws[i + 1][0] - ws[i][1] for i in range(len(ws) - 1)]
            sp = int(np.median(gaps)) if gaps else int(0.3 * hmed)
            st = 0
            if k_ == 0 and b['label'] and len(ws) >= 2:
                units.append((b, ws[0][0], ws[1][1], 0, False))      # etiket + ilk kelime ayrılmaz
                st = 2
            for i in range(st, len(ws)):
                spb = (ws[i][0] - ws[i - 1][1]) if i > 0 else sp
                if i == 0 and k_ > 0 and p[k_ - 1]['hyph']:
                    spb = -1                    # tireyle bölünmüş kelimenin devamı: bitişik
                x1w = ws[i][1]
                if b['hyph'] and i == len(ws) - 1:
                    x1w = b['hyph'][0]          # tireyi at
                units.append((b, ws[i][0], x1w, spb, False))
        # tireyle bölünmüş kelimeyi tek birim yap
        glued = []
        for u in units:
            if u[3] == -1 and glued:
                glued[-1] = glued[-1] + [u]
            else:
                glued.append([u])
        rows, cur, curw = [], [], 0
        LG = 2      # birleşen hecelerin arası (px)
        for grp_ in glued:
            gw = sum(u[2] - u[1] for u in grp_) + LG * (len(grp_) - 1)
            spb = grp_[0][3]
            limw = (min(Pw, lim - off0) if not rows else min(Pw, lim - offc)) if lim is not None else Pw
            if cur and curw + spb + gw > limw:
                rows.append(cur)
                cur, curw = [], 0
            for gi_, u in enumerate(grp_):
                b, x0_, x1_ = u[0], u[1], u[2]
                sp_ = (spb if cur else 0) if gi_ == 0 else LG
                if cur and gi_ == 0 and cur[-1][0] is b and cur[-1][2] == x0_ - spb:
                    cur[-1] = (b, cur[-1][1], x1_, cur[-1][3])
                else:
                    cur.append((b, x0_, x1_, curw + sp_))
                curw += sp_ + (x1_ - x0_)
        if cur:
            rows.append(cur)
        return [(r_, (off0 if j == 0 else offc) + Xmin) for j, r_ in enumerate(rows)]

    def _unused_old(units, Pw, lim, off0, offc):
        rows, cur, curw = [], [], 0
        for u in units:
            b, x0_, x1_, spb, brk = u
            limw = (min(Pw, lim - off0) if not rows else min(Pw, lim - offc)) if lim is not None else Pw
            add = (x1_ - x0_) + (spb if cur else 0)
            if cur and curw + add > limw:
                rows.append(cur)
                cur, curw = [], 0
                add = x1_ - x0_
            if cur and cur[-1][0] is b and cur[-1][2] == x0_ - spb:
                cur[-1] = (b, cur[-1][1], x1_, cur[-1][3])      # aynı banttan bitişik kelime: tek parça
            else:
                cur.append((b, x0_, x1_, curw + (spb if cur else 0)))
            curw += add
            if brk:
                rows.append(cur)
                cur, curw = [], 0
        if cur:
            rows.append(cur)
        return [(r_, (off0 if j == 0 else offc) + Xmin) for j, r_ in enumerate(rows)]

    # parçalar
    def make_pieces(P, lim=None):
        for p in paras:
            if len(p) > 1:
                rows = para_rows(p, P, lim)
                p[0]['rows'] = rows
                for b in p[1:]:
                    b['rows'] = []
        for b in texts:
            if b.get('para') is not None and len(b['para']) > 1:
                continue
            out = []
            off = max(b['x0'], b.get('cont', b['x0']), b.get('body', b['x0'])) - Xmin
            Pb = P
            flat = False
            if lim is not None:
                if off > 0.35 * lim and not b['label'] and b['x1'] - b['x0'] > lim - off:
                    flat = True            # ortalı/girintili uzun başlık: sola yasla
                    Pb = min(P, lim)
                else:
                    Pb = max(min(P, lim - off), 3 * hmed)
            for gi, grp in enumerate(b['groups']):
                for pi, p in enumerate(balanced(grp, Pb)):
                    if gi == 0 and pi == 0:
                        xpos = p[0][0]
                    elif pi == 0:          # şık / büyük boşluktan sonra
                        xpos = b.get('body', b['x0'])
                    else:
                        xpos = b['cont']
                    if flat:
                        xpos = Xmin
                    # sağa/ortaya yaslı kısa parça (kaynak, "(Hadis)", şekil etiketi) hedef genişliği aşmasın:
                    # hedefin sağ kenarına yasla
                    wpc = p[-1][1] - p[0][0]
                    if xpos - Xmin + wpc > T and xpos - Xmin > 0.35 * T:
                        xpos = Xmin + max(0, int(T) - wpc)
                    out.append((p[0][0], p[-1][1], xpos))
            if b.get('ul') and len(out) > 1:      # alt çizgi parçalar arası boşlukta kopmasın
                ulm = nw[b['ul'][0] - 1:b['ul'][1] + 1].any(0)
                cuts = []
                for i in range(len(out) - 1):
                    ge, gs = out[i][1], out[i + 1][0]
                    seg = ulm[ge:gs]
                    if not seg.any():
                        c = ge
                    elif not seg[0]:
                        c = ge + int(np.argmax(seg))          # çizgi sağdaki kelimeye ait
                    elif not seg.all():
                        c = ge + int(np.argmin(seg))          # çizgi soldaki kelimede bitiyor
                    else:
                        c = (ge + gs) // 2
                    cuts.append(c)
                out = [((out[i][0] if i == 0 else cuts[i - 1]), (cuts[i] if i < len(cuts) else out[i][1]),
                        out[i][2] - (0 if i == 0 else out[i][0] - cuts[i - 1])) for i in range(len(out))]
            b['pieces'] = out
            b['rows'] = [([(b, x0_, x1_, 0)], xp_) for x0_, x1_, xp_ in out]
        return max(xp - Xmin + r_[-1][3] + r_[-1][2] - r_[-1][1] for b in texts for r_, xp in b['rows'])

    # yerleşim: metin hedef genişliğe (T) sığana dek parça genişliğini daralt
    # P'yi azalt; ancak genişliği gerçekten düşürdüğü sürece (girinti/bölünemeyen parça tabanı)
    floor = make_pieces(1.0)           # her kelime ayrı: ulaşılabilecek en dar genişlik
    goal = max(T * (1.02 if inner else 1.04), floor * 1.03)
    LIM = goal
    sweep = []
    Pi = P
    for _ in range(30):
        sweep.append((Pi, make_pieces(Pi, LIM)))
        if sweep[-1][1] <= goal:
            break
        Pi *= 0.95
    P = max([p_ for p_, w in sweep if w <= goal] or [sweep[-1][0]])
    textW = make_pieces(P, LIM)
    blocks = [b for b in bands if b['kind'] != 'text']
    Wcap = int(max(textW, T * (1.0 if inner else 1.12)))

    def gutter_split(x0, x1, y0, y1, limit):
        """geniş şekli tam boy beyaz dikey koridordan böl (A) şekil  B) şekil -> alt alta)"""
        if x1 - x0 <= limit:
            return [(x0, x1, y0, y1)]
        col = nw[y0:y1, x0:x1].any(0)
        best = None
        for s_, e_ in runs(~col):
            if e_ - s_ >= max(20, 1.2 * hmed) and s_ >= 0.15 * (x1 - x0) and e_ <= 0.85 * (x1 - x0):
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
        # tablo satırı/hücre parçalanmasın: tek satır yüksekliğindeki parçalara bölme
        if any(p[3] - p[2] < 2.5 * hmed for p in out):
            return [(x0, x1, y0, y1)]
        return out

    for b in blocks:
        b['parts'] = ([(b['x0'], b['x1'], b['y0'], b['y1'])] if b['kind'] == 'formula'
                      else [(p[0], p[1], p[2], p[3]) for p in b['forced_parts']] if b.get('forced_parts')
                      else gutter_split(b['x0'], b['x1'], b['y0'], b['y1'], Wcap))
    if os.environ.get('RFDBG'):
        for b in blocks:
            print('BLOCK', b['kind'], b['x0'], b['x1'], b['y0'], b['y1'], b['parts'], file=sys.stderr)
    blockW = max([p[1] - p[0] for b in blocks if b['kind'] != 'formula' for p in b['parts']] or [0])
    fw = max([b['x1'] - b['x0'] for b in blocks if b['kind'] == 'formula'] or [0])
    Wout = max(textW, fw, min(blockW, Wcap))
    if Wout > textW * 1.08:      # şekil metinden genişse metni de o genişliğe yay
        t2 = make_pieces(P * Wout / textW, Wout)
        if t2 <= Wout * 1.02:
            textW = t2
            Wout = max(textW, Wout)
        else:
            textW = make_pieces(P, LIM)
    minscale = min([min(1.0, Wout / (p[1] - p[0])) for b in blocks if b['kind'] != 'formula' for p in b['parts']] or [1.0])
    if os.environ.get('RFDBG'):
        print('W', 'T', T, 'textW', textW, 'fw', fw, 'blockW', blockW, 'Wcap', Wcap, 'Wout', Wout, 'floor', floor, 'goal', goal, file=sys.stderr)
    def texty(p_, nmin=2):
        x0, x1, y0, y1 = p_
        ix, iy = int(0.06 * (x1 - x0)), 6
        sub = (g[y0 + iy:y1 - iy, x0 + ix:x1 - ix] < INK).any(1)
        rr = [(a_, c_) for a_, c_ in runs(sub) if 0.6 * hmed <= c_ - a_ <= 1.4 * hmed]
        return len(rr) >= nmin and sum(c_ - a_ for a_, c_ in rr) > 0.45 * (y1 - y0)
    # çerçeveli metin kutuları: küçültmek yerine içini yeniden akıt, çerçeveyi yeniden çiz
    framed = 0
    fscaled = 0
    for b in blocks:
        b['pre'] = {}
        if b['kind'] == 'formula' or depth > 0:
            continue
        for pi_, p_ in enumerate(b['parts']):
            if (p_[1] - p_[0]) > Wout * 1.02:
                im_ = framed_reflow(rgb, g, nw, hmed, p_, Wout)     # tek satırlık çerçeveli yönerge, şekilli kutu dizisi dahil
                if im_ is not None and im_.info.get('scaled_frames'):
                    fscaled += im_.info['scaled_frames']
                if im_ is None and texty(p_):
                    im_ = part_reflow(rgb, hmed, p_, Wout)
                if im_ is not None:
                    b['pre'][pi_] = im_
                    framed += 1
    minscale = min([min(1.0, Wout / (p[1] - p[0])) for b in blocks if b['kind'] != 'formula'
                    for pi_, p in enumerate(b['parts']) if pi_ not in b['pre']] or [1.0])
    boxscaled = sum(1 for b in blocks for pi_, p_ in enumerate(b['parts'])
                    if pi_ not in b['pre'] and (p_[1] - p_[0]) > Wout * 1.02 and b['kind'] != 'formula' and texty(p_, 1))
    if minscale < 0.3:
        raise Skip('şekil aşırı küçülürdü (x%.2f)' % minscale)
    if inner:
        Wfin = int(Wout)
    else:
        Wfin = int(max(Wout + 2 * pad, np.ceil(hmed / (REF * (1 + TOL)))))
        if hmed / Wfin < 1.1 * hmed / W:
            raise Skip('kazanç az (%d→%d)' % (W, Wfin))

    textgaps = [bands[i + 1]['y0'] - bands[i]['y1'] for i in range(len(bands) - 1)
                if bands[i]['kind'] == 'text' and bands[i + 1]['kind'] == 'text']
    small = [x for x in textgaps if x <= 0.9 * hmed]
    lead0 = int(np.clip(np.median(small) if small else 0.4 * hmed, 4, hmed))
    # satır aralığı: aynı paragraftaki ardışık satırların üst kenar farkı (taban çizgisi aralığına yakın)
    pitches = [bands[i + 1]['y0'] - bands[i]['y0'] for i in range(len(bands) - 1)
               if bands[i]['kind'] == 'text' and bands[i + 1]['kind'] == 'text'
               and bands[i + 1]['y0'] - bands[i]['y1'] <= 0.9 * hmed]
    pitch = float(np.median(pitches)) if pitches else hmed + lead0
    bps = [bands[i + 1]['base'] - bands[i]['base'] for i in range(len(bands) - 1)
           if bands[i]['kind'] == 'text' and bands[i + 1]['kind'] == 'text' and not bands[i].get('ftext')
           and not bands[i + 1].get('ftext') and bands[i + 1]['y0'] - bands[i]['y1'] <= 0.9 * hmed]
    bp = int(round(np.median(bps))) if bps else int(round(pitch))
    for i, b in enumerate(bands):
        h_ = b['y1'] - b['y0']
        b['lead'] = int(max(3, round(pitch - h_))) if h_ <= pitch - 3 else 3
        if b.get('ftext'):
            b['lead'] = max(b['lead'], int(0.4 * hmed))
    ops = []   # (src box, dst xy, dst size | None)
    y = pad + 0
    for i, b in enumerate(bands):
        if b.get('inpara'):
            continue
        if i > 0:
            y += b['y0'] - bands[i - 1]['y1']
        if b['kind'] == 'text':
            # her parça kendi mürekkebine sıkı kırpılır; satırlar sabit taban çizgisi aralığıyla (bp) dizilir,
            # yalnız uzun harf/kesir taşarsa aralık açılır (satır aralığı dalgalanmasın)
            lastb = b['para'][-1] if b.get('para') else b
            mingap = int(0.4 * hmed) if b.get('ftext') else 2
            prev_bl = prev_bot = None
            for j, (row, xp) in enumerate(b['rows']):
                tight = []
                for sb, x0, x1, dx in row:
                    rr = np.where(nw[sb['y0']:sb['y1'], x0:x1].any(1))[0]
                    ty0, ty1 = (sb['y0'] + int(rr[0]), sb['y0'] + int(rr[-1]) + 1) if len(rr) else (sb['y0'], sb['y1'])
                    tight.append((sb, x0, x1, dx, ty0, ty1))
                asc = max(sb['base'] - t0 for sb, _, _, _, t0, _ in tight)
                dsc = max(t1 - sb['base'] for sb, _, _, _, _, t1 in tight)
                if j == 0:
                    bl = y + max(b['base'] - b['y0'], asc)
                else:
                    bl = max(prev_bl + bp, prev_bot + mingap + asc)
                for sb, x0, x1, dx, t0, t1 in tight:
                    ops.append(((x0, t0, x1, t1), (pad + xp - Xmin + dx, bl - (sb['base'] - t0)), None))
                prev_bl, prev_bot = bl, bl + dsc
            y = max(prev_bot, prev_bl + (lastb['y1'] - lastb['base']))
        else:
            for j, (x0, x1, y0, y1) in enumerate(b['parts']):
                if j:
                    y += int(0.8 * hmed)
                w, h = x1 - x0, y1 - y0
                sz = None
                if j in b['pre']:
                    sz = {'img': b['pre'][j]}
                    w, h = b['pre'][j].size
                elif w > Wout:
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
    inkm = (g < INK).copy()
    for b in texts:                 # birleştirilen hecelerdeki tireler bilerek atıldı
        if b.get('hyph'):
            hx0, hy0, hx1, hy1 = b['hyph'][1]
            inkm[hy0:hy1, hx0:hx1] = False
    cov = np.zeros_like(inkm, dtype=np.int8)
    for (x0, y0, x1, y1), _, _ in ops:
        cov[y0:y1, x0:x1] += 1
    if (cov > 1).any() or (inkm & (cov == 0)).sum() > 3:
        raise Skip('kapsama kontrolü başarısız')
    return rgb, ops, (Wfin, Hout), dict(hmed=hmed, ratio=round(hmed / Wfin / REF, 3), boxscaled=boxscaled, framescaled=fscaled, ftext=sum(1 for b in texts if b.get('ftext')), framed=framed, k=k, P=int(P), lines=len(texts), blocks=len(blocks), scale=round(minscale, 2),
                                                 bigsplit=sum(len(b['groups']) - 1 for b in texts),
                                                 gutter=sum(len(b['parts']) - 1 for b in blocks),
                                                 formula=sum(b['kind'] == 'formula' for b in blocks),
                                                 rulerow=sum(1 for i, b in enumerate(bands) if b['kind'] == 'text' and len(b['groups']) > 1
                                                             and any(bands[j]['why'] in ('çizgi', 'ince') and abs(bands[j]['y0'] - b['y1']) + 0 < 2 * hmed
                                                                     or bands[j]['why'] in ('çizgi', 'ince') and abs(b['y0'] - bands[j]['y1']) < 2 * hmed
                                                                     for j in (i - 1, i + 1) if 0 <= j < len(bands))))


def part_reflow(rgb, hmed, part, Wt):
    """çerçevesiz metin bölümü (şeklin yanındaki metin sütunu vb.): kendi içinde yeniden akıt"""
    x0, x1, y0, y1 = part
    crop = rgb.crop((x0, y0, x1, y1))
    # düz renkli açık zemin (doku değil): analizi beyaza eşlenmiş kopyada yap, zemin rengiyle çiz
    a = np.asarray(crop).reshape(-1, 3)
    q = (a // 8).astype(np.int32)
    key = q[:, 0] * 1024 + q[:, 1] * 32 + q[:, 2]
    vals, cnt = np.unique(key, return_counts=True)
    C = None
    top = vals[np.argmax(cnt)]
    sel_ = key == top
    Cc = tuple(int(v) for v in np.median(a[sel_], 0))
    if cnt.max() / len(key) >= 0.45 and min(Cc) >= 200 and min(Cc) < 250:
        C = Cc
    ncrop = normbg(crop, C) if C is not None else crop
    try:
        _, ops_i, size_i, info_i = plan_img(ncrop, hmed_force=hmed, T_force=int(Wt), depth=1)
    except Skip:
        return None
    if info_i.get('scale', 1) < 1 or size_i[0] > Wt * 1.03:
        return None
    im = render(ncrop, ops_i, size_i)
    if not check(ncrop, im, ops_i):
        return None
    if C is not None:
        im = render(crop, ops_i, size_i, bg=C)
    return im


def framed_reflow(rgb, g, nw, hmed, part, Wt):
    """bölüm içindeki dikdörtgen çerçeve(ler)i bul; içini Wt'ye göre yeniden akıt; çerçeveyi yeniden çiz.
    Güvenli değilse None (bölüm ölçeklenir)."""
    x0, x1, y0, y1 = part
    nscaled = [0]
    dark = nw[y0:y1, x0:x1]
    Hh, Ww = dark.shape
    # yatay kapama (≤3 px boşluk): sıkıştırma halkalanması dolgu satırlarını bölmesin
    dk_ = dark.copy()
    for k_ in (1, 2):
        sh_l = np.zeros_like(dark); sh_l[:, k_:] = dark[:, :-k_]
        sh_r = np.zeros_like(dark); sh_r[:, :-k_] = dark[:, k_:]
        dk_ |= sh_l & sh_r
    cand = []
    for r in range(Hh):
        best = (0, 0, 0)
        for a_, c_ in runs(dk_[r]):
            if c_ - a_ > best[0]:
                best = (c_ - a_, a_, c_)
        if best[0] >= max(0.5 * Ww, 12 * hmed):
            cand.append((r, best[1], best[2]))
    # yakın satırları (çift çizgili çerçeve dahil, ≤8 px) tek çizgi grubunda topla
    lines = []
    for r, a_, c_ in cand:
        if lines and r - lines[-1][1] <= 8 and abs(a_ - lines[-1][2]) <= 0.6 * hmed and abs(c_ - lines[-1][3]) <= 0.6 * hmed:
            L = lines[-1]
            lines[-1] = (L[0], r + 1, min(L[2], a_), max(L[3], c_))
        else:
            lines.append((r, r + 1, a_, c_))
    if not lines:
        return None
    frames = []
    A = np.asarray(rgb).astype(np.int16)
    seq_lines = []
    i = 0
    while i < len(lines):
        Lg = lines[i]
        if Lg[1] - Lg[0] > 14:
            seq_lines.append(('fill', Lg))
            i += 1
        elif i + 1 < len(lines) and lines[i + 1][1] - lines[i + 1][0] <= 14:
            seq_lines.append(('pair', Lg, lines[i + 1]))
            i += 2
        else:
            return None
    for item in seq_lines:
        if item[0] == 'fill':
            f = fill_box(A, g, x0, y0, item[1], hmed)
            if f is None:
                return None
            frames.append(f)
            continue
        T_, B_ = item[1], item[2]
        if abs(T_[2] - B_[2]) > 0.6 * hmed or abs(T_[3] - B_[3]) > 0.6 * hmed or B_[0] - T_[1] < 1.1 * hmed:
            return None
        if T_[1] - T_[0] > 14 or B_[1] - B_[0] > 14:
            return None
        ys, ye = T_[1], B_[0]
        cov = dark[ys:ye].mean(0)
        def vgroup(lo, hi, from_left):
            cs = [c for c in range(max(0, lo), min(Ww, hi)) if cov[c] >= 0.92]
            if not cs:
                return None
            if not from_left:
                cs = cs[::-1]
            grp = [cs[0]]
            for c in cs[1:]:
                if abs(c - grp[-1]) <= 8:
                    grp.append(c)
                else:
                    break
            return min(grp), max(grp) + 1
        rr_ = int(0.7 * hmed)
        lx, rx = min(T_[2], B_[2]), max(T_[3], B_[3])
        L = vgroup(lx - rr_, lx + rr_, True)
        R = vgroup(rx - rr_, rx + rr_, False)
        # görsel kenarında kesilmiş çerçeve: o kenarda dikey çizgi yok, açık kenar olarak kabul et
        if R is None and rx >= Ww - 2:
            R = (Ww, Ww)
        if L is None and lx <= 1:
            L = (0, 0)
        if L is None or R is None or R[1] - R[0] > 14 or L[1] - L[0] > 14:
            return None
        # iç: tablo çizgisi (iç dikey/yatay çizgi) olmamalı; zemin beyaz olmalı
        openL, openR = L[1] == 0, R[0] == Ww
        inkp = g[y0:y1, x0:x1] < INK
        ib = inkp[T_[1]:B_[0], L[1]:R[0]]
        # çerçeve çizgisine bitişik iç pay: 3 px; yazı (alt uzantı vb.) daha yakınsa, çizgi kalıntısı
        # olmayan (seyrek) şeritlerle 1 px'e dek daralt
        def margin(strips):
            for m in (3, 2, 1):
                if not strips[:m].any():
                    return m
            return None
        mT = margin(ib[:3]) if ib.shape[0] > 6 else None
        mB = margin(ib[::-1][:3]) if ib.shape[0] > 6 else None
        mL = 0 if openL else margin(ib[:, :3].T)
        mR = 0 if openR else margin(ib[:, ::-1][:, :3].T)
        if None in (mT, mB, mL, mR):
            return None
        ix0, ix1, iy0, iy1 = L[1] + mL, R[0] - mR, T_[1] + mT, B_[0] - mB
        inside = dark[iy0:iy1, ix0:ix1]
        ring = np.zeros(1, bool)
        if ring.any():
            return None
        if inside.size == 0 or (inside.mean(0) >= 0.85).any() or inside.mean() > 0.35:
            return None
        frames.append(dict(fx0=L[0], fx1=R[1], fy0=T_[0], fy1=B_[1], ix0=ix0, ix1=ix1, iy0=iy0, iy1=iy1, openL=openL, openR=openR,
                           bt=T_[1] - T_[0], bb=B_[1] - B_[0], bl=L[1] - L[0], br=R[1] - R[0],
                           rad=max(0, lx - L[0], R[1] - rx), bg=None))
    nwp = nw[y0:y1, x0:x1]
    fx0min = min(f['fx0'] for f in frames)
    # çerçeve dışındaki içerik: yalnız soldaki etiket (1.) ya da çerçeveler arası tam genişlikte olmayan şeritler
    outside = nwp.copy()
    for f in frames:      # kenar yumuşatması için 2 px pay
        f['fx0'] = max(0, f['fx0'] - 2); f['fy0'] = max(0, f['fy0'] - 2)
        f['fx1'] = min(Ww, f['fx1'] + 2); f['fy1'] = min(Hh, f['fy1'] + 2)
        outside[f['fy0']:f['fy1'], f['fx0']:f['fx1']] = False
    pieces = []   # (y_start, kind, data)
    # çerçevenin solundaki etiket (28.) çerçeve üstünden başlayabilir: bütün olarak al
    for f in frames:
        ya = max(0, int(f['fy0'] - hmed))
        sub = outside[ya:f['fy1'], :max(0, f['fx0'] - 1)]
        f['label'] = None
        if sub.any():
            rr = np.where(sub.any(1))[0]; cc = np.where(sub.any(0))[0]
            # etiket kendi içinde bitişik olmalı ve üst şeritten aşağı taşmıyorsa
            lab_rows = runs(sub.any(1))
            if len(lab_rows) > 1 and lab_rows[0][1] < f['fy0'] - ya - 1 and any(s_ >= f['fy0'] - ya for s_, _ in lab_rows):
                pass
            f['label'] = (int(cc[0]), ya + int(rr[0]), int(cc[-1]) + 1, ya + int(rr[-1]) + 1)
            outside[ya:f['fy1'], :max(0, f['fx0'] - 1)] = False
    ycur = 0
    seq = []
    for f in frames:
        seq.append(('strip', ycur, f['fy0']))
        seq.append(('frame', f))
        ycur = f['fy1']
    seq.append(('strip', ycur, Hh))
    out_parts = []
    label = None
    for it in seq:
        if it[0] == 'strip':
            a_, c_ = it[1], it[2]
            sub = outside[a_:c_]
            if not sub.any():
                continue
            rr = np.where(sub.any(1))[0]; cc = np.where(sub.any(0))[0]
            box = (x0 + int(cc[0]), y0 + a_ + int(rr[0]), x0 + int(cc[-1]) + 1, y0 + a_ + int(rr[-1]) + 1)
            if box[2] - box[0] > Wt:
                return None
            out_parts.append(('copy', box, int(cc[0])))
        else:
            f = it[1]
            sub = outside[f['fy0']:f['fy1']]
            if sub[:, f['fx0']:].any():
                return None
            if sub.any():
                return None
            if f['label']:
                l_ = f['label']
                label = (x0 + l_[0], y0 + l_[1], x0 + l_[2], y0 + l_[3])
            out_parts.append(('frame', f, label))
            label = None
    imgs = []
    xoff_all = fx0min
    for op in out_parts:
        if op[0] == 'copy':
            box = op[1]
            imgs.append((rgb.crop(box), max(0, min(op[2], Wt - (box[2] - box[0]))), 0))
            continue
        f, lab = op[1], op[2]
        off = f['fx0']           # çerçevenin bölüm içindeki sol konumu (etiket sütunu korunur)
        if off > 0.5 * Wt:
            return None
        C = f['bg']
        if C is not None:
            reg = normbg(rgb.crop((x0 + f['ix0'], y0 + f['iy0'], x0 + f['ix1'], y0 + f['iy1'])), C)
            ins = np.asarray(reg.convert('L')) < WHITE
        else:
            ins = nwp[f['iy0']:f['iy1'], f['ix0']:f['ix1']]
        if not ins.any():
            return None
        rr = np.where(ins.any(1))[0]; cc = np.where(ins.any(0))[0]
        mx = int(np.clip(cc[0], 0.4 * hmed, 1.2 * hmed))
        mt = int(np.clip(rr[0], 0.3 * hmed, 1.2 * hmed))
        mb = int(np.clip(ins.shape[0] - rr[-1] - 1, 0.3 * hmed, 1.2 * hmed))
        cbox = (x0 + f['ix0'] + int(cc[0]), y0 + f['iy0'] + int(rr[0]), x0 + f['ix0'] + int(cc[-1]) + 1, y0 + f['iy0'] + int(rr[-1]) + 1)
        crop = rgb.crop(cbox)
        tl_, tt_ = f['bl'] + 1, f['bt'] + 1
        tr_, tb_ = f['br'] + 1, f['bb'] + 1
        Ti = int(Wt - off - tl_ - tr_ - 2 * mx)
        if Ti < 10 * hmed:
            return None
        ncrop = normbg(crop, C) if C is not None else crop
        if crop.size[0] <= Ti:
            inner_im = crop
        else:
            # iç yalnız metin mi? (uzun şekil satırı yoksa akıt; şekil/simge içeren kutunun içi yalnız ölçeklenir)
            gi_ = np.asarray(ncrop.convert('L')) < INK
            rws = runs(gi_.any(1))
            tall = sum(e_ - s_ for s_, e_ in rws if e_ - s_ > 1.8 * hmed)
            inner_im = None
            if tall <= 0.15 * gi_.shape[0]:
                try:
                    _, ops_i, size_i, info_i = plan_img(ncrop, hmed_force=hmed, T_force=Ti, depth=1)
                    if info_i.get('scale', 1) >= 1 and size_i[0] <= Ti * 1.03:
                        chk = render(ncrop, ops_i, size_i)
                        if check(ncrop, chk, ops_i):
                            inner_im = render(crop, ops_i, size_i, bg=C if C is not None else (255, 255, 255))
                except Skip:
                    pass
            if inner_im is None:
                if len(frames) == 1 and not any(o[0] == 'copy' for o in out_parts):
                    return None          # tek kutu: üst düzey ölçekleme ile aynı sonuç
                inner_im = crop.resize((Ti, max(1, int(round(crop.size[1] * Ti / crop.size[0])))), Image.LANCZOS)
                nscaled[0] += 1
        fw = max(inner_im.size[0] + 2 * mx + tl_ + tr_, int(Wt - off) if crop.size[0] > Ti else 0)
        fh = inner_im.size[1] + mt + mb + tt_ + tb_
        # çerçeveyi kaynaktan 9 dilimle yeniden kur (renk, çift çizgi, yuvarlak köşe korunur)
        src = rgb.crop((x0 + f['fx0'], y0 + f['fy0'], x0 + f['fx1'], y0 + f['fy1']))
        sw, sh = src.size
        # iç içeriğin kaynak çerçeve içindeki kutusu
        cx0_, cy0_ = f['ix0'] + int(cc[0]) - f['fx0'], f['iy0'] + int(rr[0]) - f['fy0']
        cx1_, cy1_ = f['ix0'] + int(cc[-1]) + 1 - f['fx0'], f['iy0'] + int(rr[-1]) + 1 - f['fy0']
        # kenar dilim genişlikleri (kenar başına): çizgi + köşe yarıçapı + 2, içeriğe değmeyecek kadar;
        # görsel kenarında açık kalan tarafta dilim yok
        rad = f['rad']
        oL, oR = f.get('openL'), f.get('openR')
        cL = 0 if oL else min(int(tl_ + rad + 2), cx0_)
        cR = 0 if oR else min(int(tr_ + rad + 2), sw - cx1_)
        cT = min(int(tt_ + rad + 2), cy0_)
        cB = min(int(tb_ + rad + 2), sh - cy1_)
        if ((not oL and cL < tl_ + 1) or (not oR and cR < tr_ + 1) or cT < tt_ + 1 or cB < tb_ + 1
                or cL + cR >= min(sw, fw) or cT + cB >= min(sh, fh)):
            return None
        fr_im = Image.new('RGB', (fw, fh), C if C is not None else (255, 255, 255))
        mxs, mys = sw // 2, sh // 2
        def P(box, size, at):
            if size[0] > 0 and size[1] > 0 and box[2] > box[0] and box[3] > box[1]:
                fr_im.paste(src.crop(box).resize(size), at)
        P((0, 0, cL, cT), (cL, cT), (0, 0))
        P((sw - cR, 0, sw, cT), (cR, cT), (fw - cR, 0))
        P((0, sh - cB, cL, sh), (cL, cB), (0, fh - cB))
        P((sw - cR, sh - cB, sw, sh), (cR, cB), (fw - cR, fh - cB))
        P((mxs, 0, mxs + 1, cT), (fw - cL - cR, cT), (cL, 0))
        P((mxs, sh - cB, mxs + 1, sh), (fw - cL - cR, cB), (cL, fh - cB))
        P((0, mys, cL, mys + 1), (cL, fh - cT - cB), (0, cT))
        P((sw - cR, mys, sw, mys + 1), (cR, fh - cT - cB), (fw - cR, cT))
        if C is not None:
            fr_im.paste(inner_im, (tl_ + mx, tt_ + mt))
        else:
            lay = Image.new('RGB', (fw, fh), (255, 255, 255))
            lay.paste(inner_im, (tl_ + mx, tt_ + mt))
            from PIL import ImageChops
            fr_im = ImageChops.darker(fr_im, lay)
        if lab is not None:
            lab_im = rgb.crop(lab)
            dy_ = lab[1] - (y0 + f['fy0'])          # etiketin çerçeve üstüne göre konumu (negatif olabilir)
            top_ = min(0, dy_)
            canvas = Image.new('RGB', (off + fw, max(fh, lab_im.size[1] + dy_) - top_), (255, 255, 255))
            canvas.paste(lab_im, (lab[0] - x0, dy_ - top_))
            canvas.paste(fr_im, (off, -top_))
            imgs.append((canvas, 0, 0))
        else:
            imgs.append((fr_im, off, 0))
    if not imgs:
        return None
    if nscaled[0] >= len(frames):
        return None          # hiçbir çerçevenin içi akıtılmadı (dekoratif köşe çizgisi vb.): çerçeve sayma
    gap = int(0.8 * hmed)
    Wc = max(x + im.size[0] for im, x, _ in imgs)
    if Wc > Wt * 1.03:
        return None
    Hc = sum(im.size[1] for im, _, _ in imgs) + gap * (len(imgs) - 1)
    out = Image.new('RGB', (Wc, Hc), (255, 255, 255))
    yy = 0
    for im, x, _ in imgs:
        out.paste(im, (x, yy))
        yy += im.size[1] + gap
    out.info['scaled_frames'] = nscaled[0]
    return out


def normbg(img, C):
    """renkli zemini beyaza eşle (analiz için): zeminden koyu olan kısım mürekkep sayılır"""
    a = np.asarray(img).astype(np.int16)
    d = np.clip(np.array(C, np.int16)[None, None, :] - a, 0, 255)
    return Image.fromarray((255 - d).astype(np.uint8), 'RGB')


def fill_box(A, g, x0, y0, Lg, hmed):
    """tek renk dolgulu (isteğe bağlı kenar çizgili) dikdörtgen kutu"""
    r0, r1, a, c = Lg
    if r1 - r0 < 1.5 * hmed:
        return None
    reg = A[y0 + r0:y0 + r1, x0 + a:x0 + c]
    h, w = reg.shape[:2]
    core = reg[int(h * 0.15):int(h * 0.85), int(w * 0.05):int(w * 0.95)].reshape(-1, 3)
    C = np.median(core, 0).astype(np.int16)
    if C.min() > 240 or C.mean() < 150:
        return None
    near = (np.abs(core - C).max(1) <= 20).mean()
    if near < 0.55:
        return None
    def thick(prof):
        n = 0
        for v in prof:
            if np.abs(v - C).max() > 25:
                n += 1
            else:
                break
        return n
    mid_c = slice(int(w * 0.2), int(w * 0.8)); mid_r = slice(int(h * 0.2), int(h * 0.8))
    bt = thick(np.median(reg[:, mid_c], 1)); bb = thick(np.median(reg[::-1, mid_c], 1))
    bl = thick(np.median(reg[mid_r, :], 0)); br = thick(np.median(reg[mid_r, ::-1], 0))
    if max(bt, bb, bl, br) > 14:
        return None
    # köşe yuvarlaklığı: ilk satırdaki dolgu başlangıcı
    row0 = np.abs(reg[0] - (reg[0][w // 2])).max(1) <= 25
    rr_ = int(np.argmax(row0)) if row0.any() else 0
    rad = int(min(0.8 * hmed, rr_))
    ix0, ix1, iy0, iy1 = a + bl + 3, c - br - 3, r0 + bt + 3, r1 - bb - 3
    # kenara bitişik 3 px şeritte mürekkep olmamalı
    nb = normbg(Image.fromarray(A[y0 + r0 + bt:y0 + r1 - bb, x0 + a + bl:x0 + c - br].astype(np.uint8)), tuple(int(v) for v in C))
    ring = np.asarray(nb.convert('L')) < INK
    ring[3:-3, 3:-3] = False
    if ring.any():
        return None
    # iç bölgede iç çizgi (tablo) olmamalı
    n = normbg(Image.fromarray(A[y0 + iy0:y0 + iy1, x0 + ix0:x0 + ix1].astype(np.uint8)), tuple(int(v) for v in C))
    m = np.asarray(n.convert('L')) < WHITE
    if m.size == 0 or (m.mean(0) >= 0.85).any() or (m.mean(1) >= 0.85).any() or m.mean() > 0.35:
        return None
    return dict(fx0=a, fx1=c, fy0=r0, fy1=r1, ix0=ix0, ix1=ix1, iy0=iy0, iy1=iy1, bt=bt, bb=bb, bl=bl, br=br,
                rad=rad, bg=tuple(int(v) for v in C))


def render(rgb, ops, size, bg=(255, 255, 255)):
    out = Image.new('RGB', size, bg)
    for box, xy, sz in ops:
        if isinstance(sz, dict):
            out.paste(sz['img'], xy)
            continue
        im = rgb.crop(box)
        if sz:
            im = im.resize(sz, Image.LANCZOS)
        out.paste(im, xy)
    return out


def check(rgb, out, ops):
    """ölçeklenmeyen her parça çıktıda birebir (aynı mürekkep) olmalı; parçalar çakışmamalı/taşmamalı"""
    gs = np.asarray(rgb.convert('L')) < INK
    go = np.asarray(out.convert('L')) < INK
    Wo, Ho = out.size
    occ = np.zeros((Ho, Wo), dtype=np.int8)
    for (x0, y0, x1, y1), (dx, dy), sz in ops:
        w, h = (sz['img'].size if isinstance(sz, dict) else sz) if sz else (x1 - x0, y1 - y0)
        if dx < 0 or dy < 0 or dx + w > Wo or dy + h > Ho:
            return False
        occ[dy:dy + h, dx:dx + w] += 1
        if not sz and not np.array_equal(gs[y0:y1, x0:x1], go[dy:dy + h, dx:dx + w]):
            return False
    return not (occ > 1).any()


def trim(rgb):
    """yalnızca boş kenarları kırp (içerik aynen kalır)"""
    g = np.asarray(rgb.convert('L'))
    nw = g < WHITE
    H, W = g.shape
    rr = np.where(nw.any(1))[0]
    cc = np.where(nw.any(0))[0]
    if not len(rr):
        raise Skip('boş görsel')
    pad = 10
    box = (max(0, int(cc[0]) - pad), max(0, int(rr[0]) - pad), min(W, int(cc[-1]) + 1 + pad), min(H, int(rr[-1]) + 1 + pad))
    if box[2] - box[0] > 0.93 * W:
        raise Skip('kenar boşluğu yok')
    return rgb.crop(box)


def process(args):
    path, dst = args
    try:
        rgb, ops, size, info = plan(path)
        out = render(rgb, ops, size)
        if not check(rgb, out, ops):
            raise Skip('piksel kontrolü başarısız')
        out.save(dst, 'WEBP', quality=85, method=4)
        return dict(file=path, ok=True, mode='reflow', before=list(rgb.size), after=[int(v) for v in size], **{k: float(v) for k, v in info.items()})
    except Skip as e:
        reason = str(e)
        if reason.startswith('hedefi zaten'):
            return dict(file=path, ok=False, reason=reason)
    except Exception as e:  # beklenmeyen: dokunma
        reason = 'hata: %r' % e
    # yedek: yalnızca kenar kırpma
    try:
        rgb = load(path)
        out = trim(rgb)
        try:
            hm = analyse(rgb)[2]
        except Exception:
            hm = None
        out.save(dst, 'WEBP', quality=85, method=4)
        return dict(file=path, ok=True, mode='trim', reason=reason, before=list(rgb.size), after=list(out.size),
                    hmed=hm, ratio=round(hm / out.size[0] / REF, 3) if hm else None)
    except Skip as e2:
        return dict(file=path, ok=False, reason=reason + '; kırpma: ' + str(e2))
    except Exception as e2:
        return dict(file=path, ok=False, reason=reason + '; kırpma hata: %r' % e2)


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
