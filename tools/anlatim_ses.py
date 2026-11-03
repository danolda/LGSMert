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
İngilizce bölümler: altyazıda <i lang="en">…</i> içine alınan metin en-US-AndrewNeural ile okunur,
geri kalanı AhmetNeural ile; parçalar aynı biçimde (24 kHz mono 48 kbps) olduğu için tek mp3'e art arda eklenir.
İngilizce işareti olmayan adımlar eskisiyle bire bir aynı üretilir (aynı okunuş, aynı ses özeti).
Değişmeyen metin (aynı okunuş + ses ayarı) atlanır; yarıda kalırsa yeniden çalıştırmak kaldığı yerden sürer.
"""
import asyncio, hashlib, json, os, re, subprocess, sys, time, unicodedata

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VOICE = 'tr-TR-AhmetNeural'
RATE = '+5%'
PITCH = '+0Hz'
KBPS = 48            # edge-tts çıktısı: 24 kHz mono 48 kbps mp3
CONC = 6
FRAME, FRAME_MS = 144, 24   # MPEG-2 L3 24 kHz 48 kbps: kare 144 bayt = 576 örnek = 24 ms
EN_VOICE = 'en-US-AndrewNeural'
EN_RATE = '+0%'
# İngilizce bölüm işareti: <i lang="en">…</i> (ya da lang="en" taşıyan herhangi bir etiket: <em lang="en">, <b lang="en">)
EN_RE = re.compile(r'<(i|em|b|u|strong)\s+lang=["\']en["\'][^>]*>(.*?)</\1>', re.S | re.I)

# ---------------------------------------------------------------- ders verisini oku (node)
DUMP_JS = r"""
global.window={};
const R=process.argv[1];require(R+'/data/anlatim/index.js');
const ids=process.argv.slice(2).length?process.argv.slice(2):Object.keys(window.LGS_AN_INDEX);
const out={};
for(const id of ids){require(R+'/data/anlatim/'+id+'.js');const L=window.LGS_AN[id];const a=[];
 L.scenes.forEach((sc,i)=>{(sc.steps||[]).forEach((st,k)=>a.push({key:i+'-'+k,s:st.s||'',v:st.v||''}));
  const X=sc.cp||sc.ia;   // ara soru ya da etkileşimli sahne: açıklama (why) ve ipucu (hint) seslendirilir
  if(X){ if(X.why) a.push({key:i+'-why',s:X.why,v:X.whyV||''});
         if(X.hint) a.push({key:i+'-hint',s:'İpucu: '+X.hint,v:X.hintV?'İpucu: '+X.hintV:''}); }});
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
ABBR = [(r"\bHz\.\s*", 'Hazreti '), (r'\s*\((?:a\.s|s\.a\.v|s\.a\.s|c\.c|r\.a|r\.anh)\.?\)', ''),
        # LGS/TDK + ek: ek ayrı hece kalsın (le ge se'de, le ge se'nin; "senin" gibi okunmasın)
        (r"(?:(?<=[.!?] )|^)LGS(?=[’'\s,.;:!?]|$)", 'Le ge se'), (r"(?:(?<=[.!?] )|^)TDK(?=[’'\s,.;:!?]|$)", 'Te de ke'),
        (r"\b([Ll]e ge se|[Tt]e de ke)[’']([a-zçğıöşü]+)", r"\1'\2"),
        (r"\bLGS[’']([a-zçğıöşü]+)", r"le ge se'\1"), (r'\bLGS\b', 'le ge se'),
        (r"\b[Ll]e ge se(?=[a-zçğıöşü])", lambda m: m.group(0) + "'"),
        (r"\bTDK[’']([a-zçğıöşü]+)", r"te de ke'\1"), (r'\bTDK\b', 'te de ke'),
        # cümle başındakini büyük harfle yaz: "72. ebob" sıra sayısı sanılmasın
        (r"(?:(?<=[.!?] )|^)EBOB[’']?", 'Ebob'), (r"(?:(?<=[.!?] )|^)EKOK[’']?", 'Ekok'),
        (r"\bEBOB[’']?", 'ebob'), (r"\bEKOK[’']?", 'ekok'),
        (r'\bMEB\b', 'meb'), (r'\bEXP\b', 'eksp'),
        (r'\bvb\.', 've benzeri'), (r'\bvs\.', 've saire'), (r'\börn\.', 'örneğin'), (r'\bsn\b', 'saniye'),
        (r'\bdk\b', 'dakika'), (r'\bkg\b', 'kilogram'), (r'\bcm\b', 'santimetre'), (r'\bkm\b', 'kilometre')]

def frac(a, b):
    a = a.strip(); b = b.strip()
    if re.fullmatch(r'\d+', b):
        w = say_int(b)
        return ' %s%s %s ' % (w, locative(w), a)          # {{1|8}} → sekizde 1
    return ' %s bölü %s ' % (a, b)

# ---------------------------------------------------------------- okunuş sözlüğü (tools/telaffuz.json)
# Yalnızca sesli metni değiştirir; altyazı TDK yazımıyla kalır. Kurallar ve deney sonuçları telaffuz.json › _aciklama.
TLF = json.load(open(os.path.join(ROOT, 'tools', 'telaffuz.json'), encoding='utf-8'))
LEX_ON = True                        # rapor için kapatılabilir (tools/telaffuz_rapor.py)
LET = 'a-zçğıöşüâîûA-ZÇĞİÖŞÜÂÎÛ'
_UP = {'i': 'İ', 'ı': 'I'}
_LO = {'İ': 'i', 'I': 'ı'}

def _tr_up(c):
    return _UP.get(c, c.upper())

def _tr_lo(c):
    return _LO.get(c, c.lower())

def _key_re(k, tam):
    first = re.escape(k[0])
    alt = '[%s%s]' % (re.escape(_tr_up(k[0])), re.escape(_tr_lo(k[0])))
    tail = r"(?![a-zçğıöşüâîû])" if tam else ''
    return re.compile(r"(?<![%s])%s%s%s" % (LET, alt, re.escape(k[1:]), tail))

LEX = [(_key_re(e['k'], e.get('tam')), e['v']) for e in TLF.get('yeniden_yaz', [])]
KORU = [w.lower() for w in TLF['sapka']['koru']]
KORU_TAM = set(w.lower() for w in TLF['sapka'].get('koru_tam', []))
HARF = {k: v for k, v in TLF.get('harf', {}).items() if not k.startswith('_')}
ROMA = {'I': 1, 'II': 2, 'III': 3, 'IV': 4, 'V': 5, 'VI': 6, 'VII': 7, 'VIII': 8, 'IX': 9, 'X': 10, 'XI': 11, 'XII': 12,
        'XIII': 13, 'XIV': 14, 'XV': 15, 'XVI': 16, 'XVII': 17, 'XVIII': 18, 'XIX': 19, 'XX': 20}
ROMA_RE = '(?:XX|XIX|XVIII|XVII|XVI|XV|XIV|XIII|XII|XI|X|IX|VIII|VII|VI|V|IV|III|II|I)'

def _sapka(word):
    """â/û okunuşu: koru listesi aynen; k/g'den sonraki â korunur (ince okunuş); kalan â→a, û→u; î korunur."""
    lw = ''.join(_tr_lo(c) for c in word)
    if lw in KORU_TAM or any(lw.startswith(k) for k in KORU if k not in KORU_TAM):
        return word
    out = []
    for j, ch in enumerate(word):
        prev = word[j - 1] if j else ''
        if ch in 'âÂ' and not (prev and prev in 'kgKG'):
            ch = 'a' if ch == 'â' else 'A'
        elif ch in 'ûÛ':
            ch = 'u' if ch == 'û' else 'U'
        out.append(ch)
    return ''.join(out)

def telaffuz(t):
    """Okunuş sözlüğünü uygula (sesli metin). Sözcük başı eşleşir, ekler korunur, ilk harfin büyüklüğü korunur."""
    if not LEX_ON:
        return t
    for rx, v in LEX:
        t = rx.sub(lambda m: (_tr_up(v[0]) if m.group(0)[0].isupper() else _tr_lo(v[0])) + v[1:], t)
    t = re.sub(r"[%s]*[âûÂÛ][%s]*" % (LET, LET), lambda m: _sapka(m.group(0)), t)
    for k, v in HARF.items():          # tek başına büyük harf: K → ke (K'nin → ke'nin)
        t = re.sub(r"(?<![%s’'])%s(?![%s])" % (LET, re.escape(k), LET), v, t)
    # Romen rakamı + nokta: "III. Selim" → üçüncü Selim, "I. ve II. öncül" → birinci ve ikinci öncül
    t = re.sub(r"(?<![%s])(%s)\.(?=\s+[%s])" % (LET, ROMA_RE, LET), lambda m: ordinal(say_int(ROMA[m.group(1)])), t)
    # noktasız Romen dizisi: "I, II ve III" → bir, iki ve üç (en az iki Romen rakamı yan yana)
    t = re.sub(r"(?<![%s])%s(?:(?:\s*,\s*|\s+(?:ve|ile|ya da|veya)\s+)%s)+(?![%s])" % (LET, ROMA_RE, ROMA_RE, LET),
               lambda m: re.sub(ROMA_RE, lambda r: say_int(ROMA[r.group(0)]), m.group(0)), t)
    return t

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
    t = telaffuz(t)
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
    # tırnak içi soru/ünlem: "…?” diye / dedi / sorusu" → ardından gelen sözcük büyütülmez (\u2063 = işaret, sonda silinir)
    t = re.sub(r"([?!])[”\"»']+", '\\1\u2063', t)
    t = re.sub(r"([?!])\s+(?=(?:diye|dedi|der|de|demek|diyen|sor)[a-zçğıöşü]*\b)", '\\1\u2063 ', t)
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
    return t.replace('\u2063', '')

# ---------------------------------------------------------------- İngilizce bölümler
def en_clean(t):
    t = re.sub(r'<br\s*/?>', ' ', t, flags=re.I)
    t = re.sub(r'<[^>]+>', '', t)
    t = t.replace('&nbsp;', ' ').replace('&lt;', '<').replace('&gt;', '>').replace('&amp;', '&')
    t = t.replace('’', "'").replace('‘', "'").replace('…', ', ').replace('...', ', ')
    t = re.sub(r'[“”"«»]', '', t)
    t = t.replace('/', ' or ').replace('_', ' ')
    t = re.sub(r'\s+', ' ', t).strip()
    return t

def parts(seg):
    """[(dil, metin), ...]. İngilizce işareti yoksa tek Türkçe parça: normalize(seg) (eski davranış)."""
    src = seg['v'] or seg['s']
    if not EN_RE.search(src):
        return [('tr', normalize(seg))]
    out = []; pos = 0
    for m in EN_RE.finditer(src):
        out.append(('tr', src[pos:m.start()])); out.append(('en', m.group(2))); pos = m.end()
    out.append(('tr', src[pos:]))
    res = []
    for lang, chunk in out:
        if lang == 'tr':
            # İngilizce bölümün hemen ardındaki noktalama (, . ? :) o bölüme eklenir: doğal duraklama
            raw = re.sub(r'<[^>]+>', '', chunk).replace('&nbsp;', ' ')
            lead = re.match(r"^[\s,.;:!?)]*", raw).group(0).strip()
            lead = re.sub(r'\s+', '', lead)[:1]
            txt = normalize({'s': chunk, 'v': ''})
            txt = re.sub(r"^[\s,.;:!?')]+", '', txt).strip()
            if lead and res and res[-1][0] == 'en' and not re.search(r'[.!?,;:]$', res[-1][1]):
                res[-1] = ('en', res[-1][1] + lead)
            if not re.search(r'[0-9A-Za-zÇĞİÖŞÜçğıöşüâîû]', txt):
                continue
            tail = re.search(r'([,.;:!?])[\s"”’)]*$', raw)
            if tail and not re.search(r'[,.;:!?]$', txt):
                txt += tail.group(1)                  # İngilizceden önceki virgül/nokta: duraklama kalsın
            rest = re.sub(r"^[\s,.;:!?')“”‘’\"«»]+", '', raw)
            if res and rest[:1].islower() and txt[:1].isupper():
                txt = ('i' if txt[0] == 'İ' else 'ı' if txt[0] == 'I' else txt[0].lower()) + txt[1:]   # cümle ortası
        else:
            txt = en_clean(chunk)
            if not re.search(r'[0-9A-Za-z]', txt):
                continue
        if res and res[-1][0] == lang:
            res[-1] = (lang, res[-1][1] + ' ' + txt)
        else:
            res.append((lang, txt))
    return res

def show(ps):
    if len(ps) == 1 and ps[0][0] == 'tr':
        return ps[0][1]
    return ' '.join(('[EN: %s]' % t) if l == 'en' else t for l, t in ps)

# ---------------------------------------------------------------- üretim
def audio_hash(text):
    return hashlib.sha1(('%s|%s|%s|%s' % (VOICE, RATE, PITCH, text)).encode()).hexdigest()[:12]

def parts_hash(ps):
    if len(ps) == 1 and ps[0][0] == 'tr':
        return audio_hash(ps[0][1])           # eski derslerle aynı özet
    key = '||'.join('%s|%s|%s|%s|%s' % (((VOICE, RATE) if l == 'tr' else (EN_VOICE, EN_RATE)) + (PITCH, l, t)) for l, t in ps)
    return hashlib.sha1(('mix|' + key).encode()).hexdigest()[:12]

async def synth1(text, voice, rate):
    import edge_tts
    c = edge_tts.Communicate(text, voice, rate=rate, pitch=PITCH, boundary='WordBoundary')
    buf = bytearray(); words = []
    async for ch in c.stream():
        if ch['type'] == 'audio':
            buf += ch['data']
        elif ch['type'] == 'WordBoundary':
            words.append((round(ch['offset'] / 1e4), round((ch['offset'] + ch['duration']) / 1e4), ch['text']))
    if not buf:
        raise RuntimeError('boş ses')
    return buf, words

async def synth(ps, path):
    if isinstance(ps, str):
        ps = [('tr', ps)]
    buf = bytearray(); words = []
    for j, (lang, text) in enumerate(ps):
        b, w = await synth1(text, VOICE if lang == 'tr' else EN_VOICE, RATE if lang == 'tr' else EN_RATE)
        if j < len(ps) - 1 and w and len(b) % FRAME == 0:
            # ara parçanın sondaki uzun sessizliğini kes (yalnız kuyruk; kare sınırında, kayıpsız)
            keep = w[-1][1] + (380 if re.search(r'[.!?:]\s*$', text) else 260 if re.search(r'[,;]\s*$', text) else 160)
            nf = -(-keep // FRAME_MS)
            b = b[:nf * FRAME]
        off = round(len(buf) * 8 / KBPS)    # ms (CBR, aynı biçim: kareler art arda eklenir)
        words += [(a + off, e + off, x) for a, e, x in w]
        buf += b
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
        # aynı ses özeti (a) başka anahtarda varsa yeniden üretme, kopyala (sahne eklenip anahtarlar kayınca)
        pool = {}
        for k0, o0 in old.items():
            f0 = os.path.join(out, k0 + '.mp3')
            if o0.get('a') and o0['a'] not in pool and os.path.exists(f0):
                with open(f0, 'rb') as fh0:
                    pool[o0['a']] = (fh0.read(), o0)

        async def one(seg):
            ps = parts(seg)
            text = show(ps)
            ah = parts_hash(ps)
            f = os.path.join(out, seg['key'] + '.mp3')
            o = old.get(seg['key'])
            if not force and o and o.get('a') == ah and os.path.exists(f):
                new[seg['key']] = dict(o, src=src_hash(seg)); total['skip'] += 1
                review.append((seg['key'], text, o.get('wt', ''))); return
            if not force and ah in pool:
                data0, o0 = pool[ah]
                with open(f + '.part', 'wb') as fh1:
                    fh1.write(data0)
                os.replace(f + '.part', f)
                new[seg['key']] = dict(o0, src=src_hash(seg)); total['copy'] = total.get('copy', 0) + 1
                review.append((seg['key'], text, o0.get('wt', ''))); return
            if time.time() > deadline:
                total['fail'] += 1; return
            async with sem:
                for att in range(5):
                    try:
                        size, words = await synth(ps, f); break
                    except Exception as e:
                        if att == 4 or time.time() > deadline:
                            print('HATA', lid, seg['key'], e, flush=True); total['fail'] += 1; return
                        await asyncio.sleep(1.5 * (att + 1))
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
    total.setdefault('copy', 0)
    print('üretilen %(made)d, kopyalanan %(copy)d, atlanan %(skip)d, eksik %(fail)d' % total, flush=True)
    return total['fail']

def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    if '--check' in sys.argv:
        for lid, segs in lessons(args).items():
            for s in segs:
                print(lid, s['key'], '|', show(parts(s)))
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
