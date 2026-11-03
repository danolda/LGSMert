#!/usr/bin/env python3
"""MEB/MEBİ "Yazılıya Hazırlanıyorum" PDF'ini siteye hazırlar (tek komut).

  python3 tools/yazili.py <pdf> <id>          # ör. tools/yazili.py ~/mat1.pdf mat-1-1
  python3 tools/yazili.py --build             # yalnızca data/yazili/*.js dosyalarını yeniden üret

Ne yapar:
  1) Sayfaları 200 dpi işler (çalışma klasörü: ../yz-cache/<id>, /tmp kullanılmaz).
  2) Soru numaralarını (pdftotext -bbox, sol kenardaki "N.") bulur; her soruyu ve
     ÇÖZÜMLER bölümündeki her çözümü ayrı kırpar. Soluk filigran (TEMEL EĞİTİM GENEL
     MÜDÜRLÜĞÜ, ders adı), üst bilgi ve alt bilgi temizlenir, boş cevap alanı kırpılır.
  3) Görseller tools/reflow.py ile telefon puntosuna akıtılır (güvenli değilse yalnız kırpılır)
     → img/yazili/<id>/qN.webp ve sN.webp
  4) Taslak tools/yazili-src/<id>.draft.json yazılır: soru metni, alt maddeler (a, b, c, ç…),
     çözüm metni ve "Cevap:" satırları. Elle doğrulanmış kayıt tools/yazili-src/<id>.json'dır
     (taslaktan kopyalanıp görsellere bakılarak düzeltilir; varsa taslak onun üstüne yazmaz).
  5) data/yazili/<id>.js ve data/yazili/index.js üretilir (yalnız doğrulanmış .json'lardan).
"""
import sys, os, re, json, subprocess, html, shutil
import numpy as np
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(os.path.dirname(ROOT), 'yz-cache')
SRC = os.path.join(ROOT, 'tools', 'yazili-src')
DPI = 200
S = DPI / 72.0
TOP, BOT = 36, 742          # pt: üst bilgi altı / alt bilgi üstü
LEFT, RIGHT = 26, 528       # pt
SUBJ = [('İNKILAP', 'ink'), ('DİN KÜLTÜRÜ', 'din'), ('İNGİLİZCE', 'ing'), ('FEN BİLİMLERİ', 'fen'),
        ('MATEMATİK', 'mat'), ('TÜRKÇE', 'tr')]
LABELS = ['a', 'b', 'c', 'ç', 'd', 'e', 'f', 'g', 'ğ', 'h']


def sh(*a):
    return subprocess.run(a, check=True, capture_output=True, text=True).stdout


def words(pdf):
    h = sh('pdftotext', '-bbox', pdf, '-')
    out = []
    for p in h.split('<page ')[1:]:
        ws = re.findall(r'<word xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">([^<]*)</word>', p)
        out.append([(float(a), float(b), float(c), float(d), html.unescape(t)) for a, b, c, d, t in ws])
    return out


def meta(pdf, pw):
    t = ' '.join(w[4] for w in pw[0])
    sid = None
    for k, v in SUBJ:
        if k in t:
            sid = v
            break
    m = re.search(r'(\d)\.\s*DÖNEM\s*-\s*(\d)\.\s*YAZILI', t)
    return sid, (int(m.group(1)) if m else 1), (int(m.group(2)) if m else 1)


def clean(im):
    """soluk filigran ve gri zemin lekelerini beyaza çek"""
    a = np.asarray(im.convert('RGB')).astype(np.int16)
    g = a.mean(2)
    sat = a.max(2) - a.min(2)
    m = (g >= 228) & (sat < 22)
    a[m] = 255
    return Image.fromarray(a.astype(np.uint8))


def ink_rows(a):
    g = a.mean(2)
    return (g < 200).sum(1) > 1


def cut_top(rows, y_num, y_lo, inkc=None):
    r = _cut(rows, y_num, y_lo, 8)
    if r is None:
        r = _cut(rows, y_num, y_lo, 3.5)
    if r is None and inkc is not None:   # boşluk yok: en az mürekkepli satırdan kes
        hi = int(y_num * S)
        if hi - y_lo > 4:
            r = y_lo + int(np.argmin(inkc[y_lo:hi]))
    return r if r is not None else y_lo


def _cut(rows, y_num, y_lo, gap):
    """soru numarasının üstündeki en yakın ≥8pt boşluğun ortası (soru numarasından yukarı taşan kesir vb. için)"""
    need = int(gap * S)
    y = int((y_num + 5) * S)          # numara satırının ortası; yukarı doğru önce kendi mürekkebini geç
    while y > y_lo and rows[y]:
        y -= 1
    run = 0
    while y > y_lo:
        if rows[y]:
            run = 0
        else:
            run += 1
            if run >= need:
                return y + need // 2
        y -= 1
    return None


def crop(page, y0, y1, out, squeeze=False):
    im = page.crop((int(LEFT * S), y0, int(RIGHT * S), y1))
    im = clean(im)
    a = np.asarray(im)
    nw = a.mean(2) < 235
    rr = np.where(nw.any(1))[0]
    cc = np.where(nw.any(0))[0]
    if not len(rr):
        return None
    pad = 14
    box = (max(0, cc[0] - pad), max(0, rr[0] - pad), min(im.width, cc[-1] + 1 + pad), min(im.height, rr[-1] + 1 + pad))
    im = im.crop(box)
    if squeeze:  # boş cevap alanlarını daralt (≥16pt boşluk → 9pt)
        a = np.asarray(im)
        blank = ~((a.mean(2) < 235).any(1))
        keep = np.ones(len(blank), bool)
        mx, lim = int(16 * S), int(9 * S)
        y = 0
        while y < len(blank):
            if blank[y]:
                e = y
                while e < len(blank) and blank[e]:
                    e += 1
                if e - y > mx:
                    keep[y + lim // 2: e - lim // 2] = False
                y = e
            else:
                y += 1
        im = Image.fromarray(a[keep])
    im.save(out)
    return im.size


def find_nums(pw, pages, start=None):
    """sırayla 1., 2., ... soru numaraları: [(no, page, y)]"""
    res = []
    nxt = 1
    for pi in pages:
        ys = start[1] if start and pi == start[0] else TOP
        cands = sorted([w for w in pw[pi] if w[0] < 60 and w[1] > ys - 1 and w[1] < BOT and re.fullmatch(r'\d{1,2}\.', w[4])], key=lambda w: w[1])
        for w in cands:
            if int(w[4][:-1]) == nxt:
                res.append((nxt, pi, w[1]))
                nxt += 1
    return res


def region_words(pw, pi, y0, y1):
    ws = [w for w in pw[pi] if y0 <= (w[1] + w[3]) / 2 < y1 and w[1] > TOP - 4 and w[3] < BOT]
    ws = [w for w in ws if w[4] not in ('TEMEL', 'EĞİTİM', 'GENEL', 'MÜDÜRLÜĞÜ')]
    # satırlara grupla
    ws.sort(key=lambda w: (round(w[1] / 3), w[0]))
    lines, cur, cy = [], [], None
    for w in sorted(ws, key=lambda w: w[1]):
        if cy is None or abs(w[1] - cy) > 3:
            if cur:
                lines.append(cur)
            cur, cy = [w], w[1]
        else:
            cur.append(w)
    if cur:
        lines.append(cur)
    return [' '.join(x[4] for x in sorted(l, key=lambda w: w[0])) for l in lines]


def process(pdf, yid):
    pw = words(pdf)
    sid, don, yaz = meta(pdf, pw)
    cdir = os.path.join(CACHE, yid)
    os.makedirs(cdir, exist_ok=True)
    shutil.rmtree(cdir)
    os.makedirs(cdir)
    sh('pdftoppm', '-r', str(DPI), '-png', pdf, os.path.join(cdir, 'p'))
    pngs = sorted([f for f in os.listdir(cdir) if f.startswith('p-')], key=lambda f: int(re.findall(r'\d+', f)[-1]))
    pages = [Image.open(os.path.join(cdir, f)).convert('RGB') for f in pngs]
    # bölümler
    sol = None
    tbl = None
    for i, ws in enumerate(pw):
        for w in ws:
            if w[4] == 'ÇÖZÜMLER' and sol is None:
                sol = (i, w[3])
            if w[4] == 'ÇIKTISI' and tbl is None:
                tbl = i
    if sol is None:
        raise SystemExit('ÇÖZÜMLER bulunamadı')
    # kapaktaki açıklama ("Bu içerik ... kapsamaktadır.") soruya karışmasın
    top0 = max([w[3] + 2 for w in pw[0] if w[4].startswith('kapsamaktad')] or [TOP])
    qpages = list(range(0, tbl if tbl is not None else sol[0]))
    spages = list(range(sol[0], len(pw)))
    Q = find_nums(pw, qpages)
    SL = find_nums(pw, spages, start=sol)
    print('%s: ders=%s %d. dönem %d. yazılı · %d soru, %d çözüm' % (yid, sid, don, yaz, len(Q), len(SL)))
    if len(Q) != len(SL):
        print('  UYARI: soru ve çözüm sayısı farklı')
    raw = os.path.join(cdir, 'raw')
    os.makedirs(raw, exist_ok=True)
    draft = {'id': yid, 'sid': sid, 'donem': don, 'yazili': yaz, 'q': []}

    def regions(nums, solsec):
        out = []
        for k, (no, pi, y) in enumerate(nums):
            a = np.asarray(clean(pages[pi]))
            rows = ink_rows(a)
            inkc = (a.mean(2) < 200).sum(1)
            lo = int(((sol[1] + 2) if solsec and pi == sol[0] else top0 if pi == 0 else TOP) * S)
            if k > 0 and nums[k - 1][1] == pi:
                lo = int(nums[k - 1][2] * S) + int(4 * S)
            # önceki çözümün "Cevap:" satırı bu çözüme geçmesin
            cv = [w[3] for w in pw[pi] if w[4].startswith('Cevap') and lo / S < w[1] < y - 1]
            if cv:
                lo = max(lo, int((max(cv) + 1.5) * S))
            y0 = cut_top(rows, y, lo, inkc)
            if k + 1 < len(nums) and nums[k + 1][1] == pi:
                ny = nums[k + 1][2]
                lo2 = int(y * S) + int(4 * S)
                cv = [w[3] for w in pw[pi] if w[4].startswith('Cevap') and y < w[1] < ny - 1]
                if cv:
                    lo2 = max(lo2, int((max(cv) + 1.5) * S))
                y1 = cut_top(rows, ny, lo2, inkc)
            else:
                y1 = int(BOT * S)
            out.append((no, pi, y0, y1))
        return out

    qreg = regions(Q, False)
    sreg = regions(SL, True)
    for (no, pi, y0, y1) in qreg:
        crop(pages[pi], y0, y1, os.path.join(raw, 'q%d.png' % no), True)
    for (no, pi, y0, y1) in sreg:
        crop(pages[pi], y0, y1, os.path.join(raw, 's%d.png' % no))
    sol_txt = {no: region_words(pw, pi, y0 / S, y1 / S) for (no, pi, y0, y1) in sreg}
    for (no, pi, y0, y1) in qreg:
        lines = region_words(pw, pi, y0 / S, y1 / S)
        txt = '\n'.join(lines)
        txt = re.sub(r'^\s*%d\.\s*' % no, '', txt)
        labs = []
        for l in lines:
            for m in re.finditer(r'(?:^|\s)([a-zçğ])[).](?=\s|$)', l):
                if m.group(1) in LABELS and m.group(1) not in labs:
                    labs.append(m.group(1))
        st = '\n'.join(sol_txt.get(no, []))
        st = re.sub(r'^\s*%d\.\s*' % no, '', st)
        keys = re.findall(r'Cevap\s*:\s*(.+)', st)
        parts = [{'label': L, 'key': ''} for L in labs] or [{'label': '', 'key': keys[0] if keys else ''}]
        draft['q'].append({'no': no, 'text': txt, 'parts': parts, 'sol_text': st})
    # telefon puntosuna akıt
    out = os.path.join(ROOT, 'img', 'yazili', yid)
    os.makedirs(out, exist_ok=True)
    rf = os.path.join(cdir, 'rf')
    os.makedirs(rf, exist_ok=True)
    files = sorted(os.path.join(raw, f) for f in os.listdir(raw) if f.startswith('q'))  # çözümler akıtılmaz (iki sütunlu çözümler bozulmasın)
    subprocess.run([sys.executable, os.path.join(ROOT, 'tools', 'reflow.py')] + files + ['--out', rf, '--report', os.path.join(cdir, 'reflow.json')], check=True)
    for f in os.listdir(out):
        os.remove(os.path.join(out, f))
    rep = {os.path.basename(r['file']): r for r in json.load(open(os.path.join(cdir, 'reflow.json')))}
    for f in sorted(os.listdir(raw)):
        src = os.path.join(rf, f) if os.path.exists(os.path.join(rf, f)) else os.path.join(raw, f)
        im = Image.open(src).convert('RGB')
        if src.startswith(raw):  # akıtılamadı: 200 dpi kırpım, puntoyu korumak için yarıya indir
            im = im.resize((round(im.width * 0.5), round(im.height * 0.5)), Image.LANCZOS)
            m = re.search(r'oran ([\d.]+)', rep.get(f, {}).get('reason', ''))
            if m and float(m.group(1)) > 1.15:  # dar görsel: telefonda punto büyümesin, sağa beyaz pay ekle
                W = round(im.width * float(m.group(1)) / 1.05)
                bg = Image.new('RGB', (W, im.height), (255, 255, 255))
                bg.paste(im, (0, 0))
                im = bg
        if im.width > 760:
            im = im.resize((760, round(im.height * 760 / im.width)), Image.LANCZOS)
        im.save(os.path.join(out, f.rsplit('.', 1)[0] + '.webp'), 'WEBP', quality=84, method=5)
    os.makedirs(SRC, exist_ok=True)
    json.dump(draft, open(os.path.join(SRC, yid + '.draft.json'), 'w'), ensure_ascii=False, indent=1)
    if not os.path.exists(os.path.join(SRC, yid + '.json')):
        print('  doğrulanmış kayıt yok: tools/yazili-src/%s.draft.json → %s.json olarak gözden geçir' % (yid, yid))
    build()


NAMES = {'mat': 'Matematik', 'fen': 'Fen Bilimleri', 'tr': 'Türkçe', 'ing': 'İngilizce', 'din': 'Din Kültürü ve Ahlak Bilgisi', 'ink': 'T.C. İnkılap Tarihi ve Atatürkçülük'}


def build():
    out = os.path.join(ROOT, 'data', 'yazili')
    os.makedirs(out, exist_ok=True)
    idx = []
    for f in sorted(os.listdir(SRC)):
        if not f.endswith('.json') or f.endswith('.draft.json'):
            continue
        d = json.load(open(os.path.join(SRC, f)))
        yid = d['id']
        imgdir = os.path.join(ROOT, 'img', 'yazili', yid)
        qs = []
        for q in d['q']:
            n = q['no']
            for k in ('q', 's'):
                if not os.path.exists(os.path.join(imgdir, '%s%d.webp' % (k, n))):
                    raise SystemExit('%s: %s%d.webp yok' % (yid, k, n))
            qs.append({'no': n, 'img': 'img/yazili/%s/q%d.webp' % (yid, n), 'sol': 'img/yazili/%s/s%d.webp' % (yid, n),
                       'text': q['text'], 'parts': [{'l': p['label'], 'k': p['key']} for p in q['parts']]})
        rec = {'id': yid, 'sid': d['sid'], 'donem': d['donem'], 'yazili': d['yazili'], 'title': '%s · %d. Dönem %d. Yazılı' % (NAMES.get(d['sid'], d['sid']), d['donem'], d['yazili']),
               'min': d.get('min', 40), 'q': qs}
        with open(os.path.join(out, yid + '.js'), 'w') as fh:
            fh.write('/* MEB "Yazılıya Hazırlanıyorum" · %s · tools/yazili.py ile üretildi, elle düzenleme yapma (kaynak tools/yazili-src/%s.json) */\n' % (rec['title'], yid))
            fh.write('window.LGS_YZ = window.LGS_YZ || {};\nwindow.LGS_YZ[%s] = %s;\n' % (json.dumps(yid), json.dumps(rec, ensure_ascii=False, indent=0)))
        idx.append({'id': yid, 'sid': d['sid'], 'donem': d['donem'], 'yazili': d['yazili'], 'title': rec['title'], 'n': len(qs),
                    'parts': sum(len(q['parts']) for q in qs), 'min': rec['min']})
    order = ['tr', 'ink', 'din', 'ing', 'mat', 'fen']
    idx.sort(key=lambda r: (order.index(r['sid']) if r['sid'] in order else 9, r['donem'], r['yazili']))
    with open(os.path.join(out, 'index.js'), 'w') as fh:
        fh.write('/* Yazılıya Hazırlanıyorum sınav listesi · tools/yazili.py --build ile üretilir */\nwindow.LGS_YZ_INDEX = %s;\n' % json.dumps(idx, ensure_ascii=False, indent=0))
    print('data/yazili: %d sınav' % len(idx))


if __name__ == '__main__':
    if len(sys.argv) == 2 and sys.argv[1] == '--build':
        build()
    elif len(sys.argv) == 3:
        process(sys.argv[1], sys.argv[2])
    else:
        print(__doc__)
