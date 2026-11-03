#!/usr/bin/env python3
"""Adım Adım Anlatım · seslendirme (tr-TR-AhmetNeural, edge-tts).

Her dersin (data/anlatim/<konuId>.js) her adım metni (ve ara soru ipucu/açıklaması) için
audio/anlatim/<konuId>/<sahne>-<adım>.mp3 üretir (sahne ve adım 0'dan sayılır; ara soru için
<sahne>-why.mp3 ve <sahne>-hint.mp3). Yanında meta.json: her parça için kaynak özeti (src),
süre (d, ms) ve sözcük başlangıçları (w, ms) — oynatıcı altyazıyı bununla eşler.

Kullanım (ağ vekili edge-tts'i bozar, ortamdan çıkar):
  env -u HTTPS_PROXY -u HTTP_PROXY -u https_proxy -u http_proxy python3 tools/anlatim_ses.py [konuId ...]
  --check   : yalnızca okunuş metinlerini yazdır (ses üretmez)
  --force   : değişmemiş parçaları da yeniden üret
Değişmeyen metin (aynı okunuş + ses ayarı) atlanır; yarıda kalırsa yeniden çalıştırmak kaldığı yerden sürer.
"""
import asyncio, hashlib, json, os, re, subprocess, sys, time, unicodedata

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VOICE = 'tr-TR-AhmetNeural'
RATE = '+5%'
PITCH = '+0Hz'
KBPS = 48            # edge-tts çıktısı: 24 kHz mono 48 kbps mp3
CONC = 6

# ---------------------------------------------------------------- ders verisini oku (node)
DUMP_JS = r"""
global.window={};
const R=process.argv[1];require(R+'/data/anlatim/index.js');
const ids=process.argv.slice(2).length?process.argv.slice(2):Object.keys(window.LGS_AN_INDEX);
const out={};
for(const id of ids){require(R+'/data/anlatim/'+id+'.js');const L=window.LGS_AN[id];const a=[];
 L.scenes.forEach((sc,i)=>{(sc.steps||[]).forEach((st,k)=>a.push({key:i+'-'+k,s:st.s||'',v:st.v||''}));
  if(sc.cp){ if(sc.cp.why) a.push({key:i+'-why',s:sc.cp.why,v:sc.cp.whyV||''});
             if(sc.cp.hint) a.push({key:i+'-hint',s:'İpucu: '+sc.cp.hint,v:sc.cp.hintV?'İpucu: '+sc.cp.hintV:''}); }});
 out[id]=a;}
process.stdout.write(JSON.stringify(out));
"""

def lessons(ids):
    r = subprocess.run(['node', '-e', DUMP_JS, ROOT] + ids, capture_output=True, text=True, check=True)
    return json.loads(r.stdout)

def fnv(s):
    """FNV-1a 32 bit, kod noktaları üzerinden (anlatim.js'teki srcHash ile aynı)."""
    h = 0x811c9dc5
    for ch in s:
        h ^= ord(ch)
        h = (h * 0x01000193) & 0xffffffff
    return format(h, '08x')

def src_hash(seg):
    return fnv(seg['s'] + '\u0001' + seg['v'])

# ---------------------------------------------------------------- Türkçe sayı okuma
BIR = ['sıfır', 'bir', 'iki', 'üç', 'dört', 'beş', 'altı', 'yedi', 'sekiz', 'dokuz']
ON = ['', 'on', 'yirmi', 'otuz', 'kırk', 'elli', 'altmış', 'yetmiş', 'seksen', 'doksan']
BUYUK = [(10 ** 12, 'trilyon'), (10 ** 9, 'milyar'), (10 ** 6, 'milyon'), (1000, 'bin')]

def say_int(n):
    n = int(n)
    if n == 0:
        return 'sıfır'
    out = []
    for val, name in BUYUK:
        if n >= val:
            q, n = divmod(n, val)
            out.append(name if (q == 1 and val == 1000) else say_int(q) + ' ' + name)
    if n >= 100:
        q, n = divmod(n, 100)
        out.append('yüz' if q == 1 else BIR[q] + ' yüz')
    if n >= 10:
        q, n = divmod(n, 10)
        out.append(ON[q])
    if n:
        out.append(BIR[n])
    return ' '.join(out)

def say_digits_after_comma(d):
    lead = len(d) - len(d.lstrip('0'))
    rest = d.lstrip('0')
    parts = ['sıfır'] * lead
    if rest:
        parts.append(say_int(rest))
    return ' '.join(parts)

VOW = 'aıoueiöü'
BACK = 'aıou'

def last_vowel(w):
    for ch in reversed(w):
        if ch in VOW:
            return ch
    return 'e'

def attach(word, suf):
    """Sayının okunuşuna eki bitiştir (kesme işaretini düşür): dört + e → dörde."""
    if not suf:
        return word
    if suf[0] in VOW and word.endswith('dört'):
        word = word[:-1] + 'd'
    return word + suf

def ordinal(word):
    lv = last_vowel(word)
    v = {'a': 'ı', 'ı': 'ı', 'o': 'u', 'u': 'u', 'e': 'i', 'i': 'i', 'ö': 'ü', 'ü': 'ü'}[lv]
    if word.endswith('dört'):
        word = word[:-1] + 'd'
    return word + ('nc' + v if word[-1] in VOW else v + 'nc' + v)

def locative(word):
    lv = last_vowel(word)
    a = 'a' if lv in BACK else 'e'
    d = 't' if word[-1] in 'fsthçkpş' else 'd'
    return d + a

SUP = {'⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁻': '−', '⁺': '+', 'ⁿ': 'n', 'ˣ': 'x'}
ABBR = [(r"\bLGS[’']?", 'le ge se'), (r'\bMEB\b', 'meb'), (r'\bTDK\b', 'te de ka'), (r'\bEXP\b', 'eksp'),
        (r'\bvb\.', 've benzeri'), (r'\bvs\.', 've saire'), (r'\börn\.', 'örneğin'), (r'\bsn\b', 'saniye'),
        (r'\bdk\b', 'dakika'), (r'\bkg\b', 'kilogram'), (r'\bcm\b', 'santimetre'), (r'\bkm\b', 'kilometre')]

def frac(a, b):
    a = a.strip(); b = b.strip()
    if re.fullmatch(r'\d+', b):
        w = say_int(b)
        return ' %s%s %s ' % (w, locative(w), a)          # {{1|8}} → sekizde 1
    return ' %s bölü %s ' % (a, b)

def normalize(seg):
    """Altyazı/okunuş metnini Türkçe seslendirmeye uygun düz metne çevirir."""
    t = seg['v'] or seg['s']
    t = unicodedata.normalize('NFC', t)
    # HTML ve site gösterimleri
    t = re.sub(r'\{\{([^{}|]+)\|([^{}]+)\}\}', lambda m: frac(re.sub('<[^>]+>', '', m.group(1)), re.sub('<[^>]+>', '', m.group(2))), t)
    t = re.sub(r'<sup>([^<]*)</sup>', lambda m: ' üssü ' + m.group(1).replace('−', 'eksi ').replace('-', 'eksi ') + ' ', t)
    t = re.sub(r'<sub>([^<]*)</sub>', r' \1 ', t)
    t = re.sub(r'<br\s*/?>|</(p|div|li|td|tr)>', ' ', t, flags=re.I)
    t = re.sub(r'<[^>]+>', '', t)
    t = t.replace('&nbsp;', ' ').replace('&lt;', '<').replace('&gt;', '>').replace('&amp;', ' ve ')
    # Unicode üsler: 2³ → 2 üssü 3, 10⁻² → 10 üssü eksi 2
    t = re.sub('[⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺ⁿˣ]+', lambda m: ' üssü ' + ''.join(SUP[c] for c in m.group(0)).replace('−', 'eksi ').replace('+', 'artı ') + ' ', t)
    # kısaltmalar
    for pat, rep in ABBR:
        t = re.sub(pat, rep, t)
    # kesme işareti biçimleri tek tip
    t = t.replace('’', "'").replace('‘', "'").replace('ʼ', "'")
    # sembol okunuşları
    t = re.sub(r'√\s*(\d+|\w)', r' karekök \1 ', t).replace('√', ' karekök ')
    t = re.sub(r'%\s*(\d+(?:,\d+)?)', r' yüzde \1 ', t)
    t = re.sub(r'(\d)\s*°', r'\1 derece', t)
    rep = [('·', ' çarpı '), ('×', ' çarpı '), ('÷', ' bölü '), ('≠', ' eşit değildir '), ('≤', ' küçük eşittir '),
           ('≥', ' büyük eşittir '), ('≈', ' yaklaşık '), ('⇒', ', o hâlde '), ('→', ', '), ('±', ' artı eksi '),
           ('=', ' eşittir '), ('<', ' küçüktür '), ('>', ' büyüktür '), ('+', ' artı '), ('−', ' eksi '), ('–', ', '), ('—', ', '),
           ('…', ', '), ('...', ', '), ('π', ' pi ')]
    for a, b in rep:
        t = t.replace(a, b)
    t = re.sub(r'[“”"«»]', '', t)
    # ek örnekleri: "-ınca", "-ken" → ek olarak okunur (kısa çizgi okunmaz)
    t = re.sub(r"(^|[\s(/,;:])-(?=[a-zçğıöşü])", r'\1', t, flags=re.I)
    # birleşik terimler: isim-fiil → isim fiil
    t = re.sub(r'(?<=[a-zçğıöşü])-(?=[a-zçğıöşü])', ' ', t, flags=re.I)
    # sayı arası kısa çizgi: çıkarma (3 - 2) ya da aralık
    t = re.sub(r'(?<=\d)\s+-\s+(?=\d)', ' eksi ', t)
    t = re.sub(r'(?<=[\s(])-(?=\d)', 'eksi ', t)
    t = t.replace('/', ' bölü ')
    t = re.sub(r'[()\[\]]', ' ', t)
    # binlik ayırıcı 1.000.000
    t = re.sub(r'\b\d{1,3}(?:\.\d{3})+\b', lambda m: m.group(0).replace('.', ''), t)
    # sıra sayısı: "4. kuvveti" → dördüncü
    t = re.sub(r'\b(\d+)\.(?=\s+[a-zçğıöşü])', lambda m: ordinal(say_int(m.group(1))), t)
    # ondalık + ek: 0,25'i → sıfır virgül yirmi beşi
    def num(m):
        w = say_int(m.group(1))
        if m.group(2):
            w += ' virgül ' + say_digits_after_comma(m.group(2))
        tail = m.group(4) or ''
        if tail:
            return attach(w, tail)
        var = m.group(5)
        if var:
            return w + ' ' + ('iks' if var == 'x' else var)
        return w
    t = re.sub(r"(?<![\w])(\d+)(?:,(\d+))?(?:(')([a-zçğıöşü]+)|([xyabnmk])(?![a-zçğıöşü]))?", num, t)
    # tek başına x değişkeni
    t = re.sub(r"(?<![\wçğıöşü])x(?![\wçğıöşü])", 'iks', t)
    t = re.sub(r"(?<![\wçğıöşü])x'(?=[a-zçğıöşü])", 'iks', t)
    # emoji ve kalan simgeler
    t = ''.join(ch for ch in t if unicodedata.category(ch)[0] != 'S' or ch in "'")
    t = re.sub(r'\s+([,.;:!?])', r'\1', t)
    t = re.sub(r'([,;:])(?=\S)', r'\1 ', t)
    t = re.sub(r',\s*,', ',', t)
    t = re.sub(r'\s+', ' ', t).strip(' ,')
    # cümle başını büyüt (Türkçe i → İ)
    up = lambda c: 'İ' if c == 'i' else ('I' if c == 'ı' else c.upper())
    t = re.sub(r'(^|[.!?]\s+)([a-zçğıöşü])', lambda m: m.group(1) + up(m.group(2)), t)
    return t

# ---------------------------------------------------------------- üretim
def audio_hash(text):
    return hashlib.sha1(('%s|%s|%s|%s' % (VOICE, RATE, PITCH, text)).encode()).hexdigest()[:12]

async def synth(text, path):
    import edge_tts
    c = edge_tts.Communicate(text, VOICE, rate=RATE, pitch=PITCH, boundary='WordBoundary')
    buf = bytearray(); words = []
    async for ch in c.stream():
        if ch['type'] == 'audio':
            buf += ch['data']
        elif ch['type'] == 'WordBoundary':
            words.append((round(ch['offset'] / 1e4), round((ch['offset'] + ch['duration']) / 1e4), ch['text']))
    if not buf:
        raise RuntimeError('boş ses')
    tmp = path + '.part'
    with open(tmp, 'wb') as f:
        f.write(buf)
    os.replace(tmp, path)
    return len(buf), words

async def run(ids, force, deadline):
    data = lessons(ids)
    sem = asyncio.Semaphore(CONC)
    total = {'made': 0, 'skip': 0, 'fail': 0}
    for lid, segs in data.items():
        out = os.path.join(ROOT, 'audio', 'anlatim', lid)
        os.makedirs(out, exist_ok=True)
        mpath = os.path.join(out, 'meta.json')
        old = {}
        if os.path.exists(mpath):
            try:
                old = json.load(open(mpath, encoding='utf-8')).get('seg', {})
            except Exception:
                old = {}
        new = {}; review = []

        async def one(seg):
            text = normalize(seg)
            ah = audio_hash(text)
            f = os.path.join(out, seg['key'] + '.mp3')
            o = old.get(seg['key'])
            if not force and o and o.get('a') == ah and os.path.exists(f):
                new[seg['key']] = dict(o, src=src_hash(seg)); total['skip'] += 1
                review.append((seg['key'], text, o.get('wt', ''))); return
            if time.time() > deadline:
                total['fail'] += 1; return
            async with sem:
                for att in range(3):
                    try:
                        size, words = await synth(text, f); break
                    except Exception as e:
                        if att == 2:
                            print('HATA', lid, seg['key'], e, flush=True); total['fail'] += 1; return
                        await asyncio.sleep(1.5)
            d = round(size * 8 / KBPS)          # ms (CBR)
            wt = ' '.join(w[2] for w in words)
            new[seg['key']] = {'src': src_hash(seg), 'a': ah, 'd': max(d, words[-1][1] if words else 0),
                               'w': [w[0] for w in words], 'wt': wt}
            total['made'] += 1
            review.append((seg['key'], text, wt))

        await asyncio.gather(*[one(s) for s in segs])
        keys = [s['key'] for s in segs]
        meta = {'voice': VOICE, 'rate': RATE, 'seg': {k: new[k] for k in keys if k in new}}
        with open(mpath, 'w', encoding='utf-8') as fh:
            json.dump(meta, fh, ensure_ascii=False, separators=(',', ':'))
        # artık kullanılmayan mp3'leri sil
        for fn in os.listdir(out):
            if fn.endswith('.mp3') and fn[:-4] not in meta['seg']:
                os.remove(os.path.join(out, fn))
        size = sum(os.path.getsize(os.path.join(out, x)) for x in os.listdir(out))
        print('%s: %d parça, %.1f KB' % (lid, len(meta['seg']), size / 1024), flush=True)
    print('üretilen %(made)d, atlanan %(skip)d, eksik %(fail)d' % total, flush=True)
    return total['fail']

def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    if '--check' in sys.argv:
        for lid, segs in lessons(args).items():
            for s in segs:
                print(lid, s['key'], '|', normalize(s))
        return
    budget = 100
    for a in sys.argv:
        if a.startswith('--budget='):
            budget = int(a.split('=')[1])
    left = asyncio.run(run(args, '--force' in sys.argv, time.time() + budget))
    if left:
        print('Süre doldu ya da hata: aynı komutu yeniden çalıştır, kaldığı yerden sürer.')
        sys.exit(2)

if __name__ == '__main__':
    main()
