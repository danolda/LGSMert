(function () {
  'use strict';
  var app = document.getElementById('app');
  var crumbs = document.getElementById('crumbs');
  var KEY = 'lgs2027:';
  var LETTERS = ['A', 'B', 'C', 'D'];
  var filter = 'all';

  /* ---------- tema ---------- */
  var themeBtn = document.getElementById('themeBtn');
  function applyTheme(t) {
    if (t) document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
  }
  try { applyTheme(localStorage.getItem(KEY + 'theme')); } catch (e) {}
  themeBtn.addEventListener('click', function () {
    var cur = document.documentElement.getAttribute('data-theme');
    var dark = cur !== 'light';
    var next = dark ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem(KEY + 'theme', next); } catch (e) {}
  });

  /* ---------- en üste çık ---------- */
  var toTop = document.getElementById('toTop');
  if (toTop) {
    var onScroll = function () { toTop.classList.toggle('show', window.scrollY > 500); };
    window.addEventListener('scroll', onScroll, { passive: true });
    toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    onScroll();
  }

  /* ---------- kayıt ---------- */
  function load(tid) {
    try { return JSON.parse(localStorage.getItem(KEY + tid)) || {}; } catch (e) { return {}; }
  }
  function save(tid, obj) {
    try { localStorage.setItem(KEY + tid, JSON.stringify(obj)); } catch (e) {}
  }
  function clearTopic(tid) {
    try { localStorage.removeItem(KEY + tid); } catch (e) {}
  }

  /* ---------- yardımcılar ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  // {{pay|payda}} -> kesir gösterimi
  function fmt(html) {
    return String(html == null ? '' : html).replace(/\{\{([^{}|]+)\|([^{}]+)\}\}/g, '<span class="fr"><span>$1</span><span>$2</span></span>')
      .replace(/<table\b/g, '<div class="tbl"><table').replace(/<\/table>/g, '</table></div>');
  }

  // SVG içeriği viewBox dışına taşıyorsa viewBox'ı içeriğe göre genişlet (kırpılmayı önler)
  function fitSvgs(root) {
    var svgs = (root || document).querySelectorAll('main svg:not([data-fit])');
    for (var i = 0; i < svgs.length; i++) {
      var sv = svgs[i];
      if (sv.ownerSVGElement) continue;
      var vb = sv.viewBox && sv.viewBox.baseVal;
      if (!vb || !vb.width) { sv.setAttribute('data-fit', '1'); continue; }
      var bb;
      try { bb = sv.getBBox(); } catch (e) { continue; }
      if (!bb || (!bb.width && !bb.height)) continue; // görünmüyor; sonra tekrar denenecek
      sv.setAttribute('data-fit', '1');
      var pad = 3, x0 = Math.min(vb.x, bb.x - pad), y0 = Math.min(vb.y, bb.y - pad);
      var x1 = Math.max(vb.x + vb.width, bb.x + bb.width + pad), y1 = Math.max(vb.y + vb.height, bb.y + bb.height + pad);
      if (x0 < vb.x - 0.5 || y0 < vb.y - 0.5 || x1 > vb.x + vb.width + 0.5 || y1 > vb.y + vb.height + 0.5) {
        sv.setAttribute('viewBox', [x0, y0, x1 - x0, y1 - y0].map(function (n) { return Math.round(n * 10) / 10; }).join(' '));
        var w = parseFloat(sv.getAttribute('width')), h = parseFloat(sv.getAttribute('height'));
        if (w && h) sv.setAttribute('height', Math.round(w * (y1 - y0) / (x1 - x0)));
      }
    }
  }
  var fitPending = false;
  function scheduleFit() {
    if (fitPending) return; fitPending = true;
    (window.requestAnimationFrame || setTimeout)(function () { fitPending = false; fitSvgs(document); });
  }
  if (window.MutationObserver) {
    new MutationObserver(scheduleFit).observe(document.getElementById('app') || document.body,
      { childList: true, subtree: true, attributes: true, attributeFilter: ['hidden', 'open', 'style', 'class'] });
  }
  document.addEventListener('toggle', scheduleFit, true);

  function subjOf(tid) {
    for (var i = 0; i < LGS.subjects.length; i++) {
      var s = LGS.subjects[i];
      for (var j = 0; j < s.topics.length; j++) if (s.topics[j].id === tid) return { s: s, t: s.topics[j], i: j };
    }
    return null;
  }
  function subj(id) {
    for (var i = 0; i < LGS.subjects.length; i++) if (LGS.subjects[i].id === id) return LGS.subjects[i];
    return null;
  }
  function loadScript(src, cb) {
    var sc = document.createElement('script');
    sc.src = src + '?v=' + (LGS.version || 1);
    sc.onload = function () { cb(true); };
    sc.onerror = function () { cb(false); };
    document.head.appendChild(sc);
  }
  function loadTopic(sid, tid, cb) {
    var pastDone = function () {
      if (LGS.topics[tid]) return cb(LGS.topics[tid]);
      loadScript('data/topics/' + tid + '.js', function () { cb(LGS.topics[tid] || null); });
    };
    var mebDone = function () {
      if (!LGS.mebSubj[sid] || LGS.mebLoaded[sid]) return pastDone();
      loadScript('data/meb/' + sid + '.js', function () { LGS.mebLoaded[sid] = true; pastDone(); });
    };
    if (LGS.pastLoaded[sid]) mebDone();
    else loadScript('data/past/' + sid + '.js', function () { LGS.pastLoaded[sid] = true; mebDone(); });
  }
  function stats(tid, total) {
    var a = load(tid), n = 0, ok = 0;
    for (var k in a) if (a.hasOwnProperty(k) && k.charAt(0) !== '_') { n++; if (a[k].ok) ok++; }
    return { n: n, ok: ok, bad: n - ok, total: total || (a._total || 30) };
  }
  function setCrumbs(parts) {
    crumbs.innerHTML = parts.map(function (p) {
      return p.href ? '<a href="' + p.href + '">' + esc(p.text) + '</a>' : '<span>' + esc(p.text) + '</span>';
    }).join(' › ');
  }

  /* ---------- MEBİ LGS deneme takvimi 2026-2027 ---------- */
  var MEBI = [
    ['2026-11-02', '2026-11-08'], ['2026-12-02', '2026-12-08'], ['2027-01-02', '2027-01-08'],
    ['2027-02-02', '2027-02-08'], ['2027-03-02', '2027-03-08'], ['2027-04-02', '2027-04-08'],
    ['2027-04-19', '2027-04-25'], ['2027-05-02', '2027-05-08'], ['2027-05-24', '2027-05-30'],
    ['2027-06-02', '2027-06-08']
  ];
  var AYLAR = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
  function dt(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function aralik(r) {
    var a = dt(r[0]), b = dt(r[1]);
    return a.getDate() + (a.getMonth() === b.getMonth() ? '' : ' ' + AYLAR[a.getMonth()]) + '–' + b.getDate() + ' ' + AYLAR[b.getMonth()] + ' ' + b.getFullYear();
  }
  function mebiHtml() {
    var now = new Date(), today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var cur = -1, nxt = -1;
    MEBI.forEach(function (r, i) {
      if (cur < 0 && today >= dt(r[0]) && today <= dt(r[1])) cur = i;
      if (nxt < 0 && dt(r[0]) > today) nxt = i;
    });
    var head;
    if (cur >= 0) {
      var kalan = Math.round((dt(MEBI[cur][1]) - today) / 864e5);
      head = '<b>' + (cur + 1) + '. deneme şu an açık!</b> ' + (kalan === 0 ? 'Bugün son gün.' : 'Son güne ' + kalan + ' gün var (' + aralik(MEBI[cur]) + ').');
    } else if (nxt >= 0) {
      var gun = Math.round((dt(MEBI[nxt][0]) - today) / 864e5);
      head = 'Sıradaki: <b>' + (nxt + 1) + '. deneme</b> · ' + aralik(MEBI[nxt]) + ' · <b>' + gun + ' gün</b> kaldı';
    } else head = '2026-2027 MEBİ denemeleri tamamlandı.';
    var rows = MEBI.map(function (r, i) {
      var past = dt(r[1]) < today, on = i === cur || (cur < 0 && i === nxt);
      return '<li class="' + (past ? 'done' : '') + (on ? ' on' : '') + '"><span>' + (i + 1) + '. deneme</span><span>' + aralik(r) + '</span></li>';
    }).join('');
    return '<details class="mebi"><summary><span class="mebi-t">📅 MEBİ LGS Deneme Takvimi</span><span class="mebi-c">' + head + '</span></summary>' +
      '<ol>' + rows + '</ol>' +
      '<p class="small">10 ücretsiz Türkiye geneli deneme; her biri sözel ve sayısal oturumdan oluşur. ' +
      '<a href="https://mebi.eba.gov.tr" target="_blank" rel="noopener">mebi.eba.gov.tr</a> → Denemeler/Taramalar · ' +
      '<a href="https://www.meb.gov.tr/mebi-2026-2027-yks-ve-lgs-deneme-takvimi-belli-oldu/haber/41943/tr" target="_blank" rel="noopener">Kaynak: MEB</a></p></details>';
  }

  /* ---------- ana sayfa ---------- */
  function home() {
    setCrumbs([]);
    document.title = 'LGS Kışlası';
    var tTopics = 0, tQ = 0, tDone = 0, tOk = 0;
    var cards = LGS.subjects.map(function (s) {
      var done = 0, ok = 0, tot = 0;
      s.topics.forEach(function (t) {
        var st = stats(t.id); done += st.n; ok += st.ok; tot += st.total;
      });
      tTopics += s.topics.length; tQ += tot; tDone += done; tOk += ok;
      var pct = tot ? Math.round(done * 100 / tot) : 0;
      return '<a class="subj" style="--c:' + s.color + '" href="#/d/' + s.id + '">' +
        '<div class="ic">' + s.icon + '</div><h3>' + esc(s.name) + '</h3>' +
        '<p>' + s.topics.length + ' konu · ' + tot + ' soru</p>' +
        '<div class="bar"><i style="width:' + pct + '%"></i></div>' +
        '<p class="small">' + done + ' çözüldü · ' + ok + ' doğru</p></a>';
    }).join('');
    app.innerHTML =
      '<section class="hero"><h1>LGS 2027 Hazırlık</h1>' +
      '<p>Konu özetleri, çıkmış LGS soruları ve kolaydan zora yeni nesil sorular. Her sorunun adım adım çözümü var.</p>' +
      '<div class="count"><div><b>' + LGS.subjects.length + '</b>ders</div><div><b>' + tTopics + '</b>konu</div><div><b>' + tQ + '</b>soru</div><div><b>' + tDone + '</b>çözdüğün</div></div></section>' +
      mebiHtml() +
      '<div class="grid">' + cards + '</div>' +
      '<p class="small" style="margin-top:18px">İpucu: Bir şıkka dokunduğunda cevabın kaydedilir ve çözüm açılır. Konu sayfasındaki <b>Temizle</b> düğmesi o konudaki tüm işaretlemeleri siler.</p>';
  }

  /* ---------- ders sayfası ---------- */
  function subjectPage(id) {
    var s = subj(id);
    if (!s) return notFound();
    document.title = s.name + ' · LGS Kışlası';
    setCrumbs([{ text: s.name }]);
    var items = s.topics.map(function (t, i) {
      var st = stats(t.id);
      return '<li><a style="--c:' + s.color + '" href="#/k/' + t.id + '"><span class="no">' + (i + 1) + '</span>' +
        '<span class="tt">' + esc(t.title) + (t.past ? '<span class="pill">' + t.past + ' çıkmış soru</span>' : '') + '</span>' +
        '<span class="pr">' + st.n + '/' + st.total + ' çözüldü<br>' + st.ok + ' doğru</span></a></li>';
    }).join('');
    app.innerHTML = '<a class="back" href="#/">← Tüm dersler</a><h1>' + s.icon + ' ' + esc(s.name) + '</h1>' +
      '<p class="lead">' + esc(s.desc || '') + '</p><ul class="tlist">' + items + '</ul>';
  }

  /* ---------- konu sayfası ---------- */
  function topicPage(tid) {
    var info = subjOf(tid);
    if (!info) return notFound();
    var s = info.s, meta = info.t;
    setCrumbs([{ text: s.name, href: '#/d/' + s.id }, { text: meta.title }]);
    document.title = meta.title + ' · LGS Kışlası';
    app.innerHTML = '<p class="loading">Konu yükleniyor…</p>';
    loadTopic(s.id, tid, function (t) {
      if (!t) { app.innerHTML = '<p class="empty">Bu konu yüklenemedi.</p>'; return; }
      renderTopic(s, meta, t, info.i);
    });
  }

  var LV = [['kolay', 'Kolay', 'ko'], ['orta', 'Orta', 'or'], ['zor', 'Zor', 'zr']];
  function hasLevels(t) { return (t.qs || []).some(function (q) { return !!q.lv; }); }
  function buildList(t) {
    var list = [];
    var past = [];
    for (var pid in LGS.past) if (LGS.past.hasOwnProperty(pid) && LGS.past[pid].t === t.id) past.push(pid);
    past.sort();
    past.map(function (pid) { var o = LGS.past[pid]; return { id: pid, a: o.a, s: o.s }; }).forEach(function (p, n) {
      var pr = p.id.split('-');
      list.push({ key: 'p:' + p.id, past: true, grp: 'past', n: n + 1, year: pr[0], no: pr[2], img: 'img/past/' + p.id + '.webp', a: p.a, s: p.s });
    });
    var mb = [];
    for (var mid in LGS.meb) if (LGS.meb.hasOwnProperty(mid) && LGS.meb[mid].t === t.id) mb.push(mid);
    mb.sort(function (x, y) { var a = LGS.meb[x], b = LGS.meb[y]; return (a.o || 0) - (b.o || 0) || (x < y ? -1 : 1); });
    mb.forEach(function (mid, n) {
      var o = LGS.meb[mid];
      list.push({ key: 'm:' + mid, past: true, meb: true, grp: 'meb', n: n + 1, no: n + 1, img: 'img/meb/' + mid + '.webp', a: o.a, s: o.s });
    });
    if (hasLevels(t)) {
      LV.forEach(function (lv) {
        var n = 0;
        (t.qs || []).forEach(function (q) {
          if (q.lv !== lv[0]) return;
          list.push({ key: lv[2] + ':' + n, past: false, grp: lv[0], lvName: lv[1], n: ++n, q: q.q, c: q.c, a: q.a, s: q.s });
        });
      });
    } else {
      (t.qs || []).forEach(function (q, i) {
        list.push({ key: 'o:' + i, past: false, grp: 'new', n: i + 1, q: q.q, c: q.c, a: q.a, s: q.s });
      });
    }
    return list;
  }
  var GRP_TITLE = { past: 'Çıkmış LGS Soruları', meb: 'MEB Örnek Soruları', kolay: 'Yeni Nesil · Kolay', orta: 'Yeni Nesil · Orta', zor: 'Yeni Nesil · Zor' };

  function renderTopic(s, meta, t, idx) {
    var list = buildList(t);
    var ans = load(t.id), keys = {}, dirty = false;
    list.forEach(function (q) { keys[q.key] = 1; });
    for (var k in ans) if (ans.hasOwnProperty(k) && k.charAt(0) !== '_' && !keys[k]) { delete ans[k]; dirty = true; }
    if (dirty || ans._total !== list.length) { ans._total = list.length; save(t.id, ans); }
    var lvl = hasLevels(t);
    if (!lvl && (filter === 'kolay' || filter === 'orta' || filter === 'zor')) filter = 'all';
    if (lvl && filter === 'new') filter = 'all';
    var fl = lvl ? [['all', 'Tümü'], ['past', 'Çıkmış sorular'], ['meb', 'MEB'], ['kolay', 'Kolay'], ['orta', 'Orta'], ['zor', 'Zor'], ['empty', 'Boş'], ['wrong', 'Yanlışlarım']]
                 : [['all', 'Tümü'], ['past', 'Çıkmış sorular'], ['meb', 'MEB'], ['new', 'Yeni nesil'], ['empty', 'Boş'], ['wrong', 'Yanlışlarım']];
    var prev = s.topics[idx - 1], next = s.topics[idx + 1];
    var nav = '<p class="small" style="display:flex;justify-content:space-between;gap:10px;margin-top:20px">' +
      (prev ? '<a href="#/k/' + prev.id + '">← ' + esc(prev.title) + '</a>' : '<span></span>') +
      (next ? '<a href="#/k/' + next.id + '">' + esc(next.title) + ' →</a>' : '<span></span>') + '</p>';
    var html = '<div style="--c:' + s.color + '">' +
      '<a class="back" href="#/d/' + s.id + '">← ' + esc(s.name) + '</a>' +
      '<h1>' + esc(meta.title) + '</h1>' +
      '<details class="sumbox" open><summary>Konu Özeti</summary><div class="sum">' + (t.summary ? fmt(t.summary) : '<p class="empty">Özet hazırlanıyor.</p>') + '</div></details>' +
      '<div class="qhead"><h2>Sorular</h2><span class="score" id="score"></span>' +
      '<button class="btn red" id="clearBtn" title="Bu konudaki tüm işaretlemeleri sil">Temizle</button></div>' +
      '<div class="filters" id="filters">' +
      fl.map(function (f) {
        return '<button data-f="' + f[0] + '"' + (filter === f[0] ? ' class="on"' : '') + '>' + f[1] + '</button>';
      }).join('') + '</div>' +
      '<div id="qs"></div>' + nav + '</div>';
    app.innerHTML = html;

    var qsBox = document.getElementById('qs');
    var lastG = null;
    qsBox.innerHTML = list.map(function (q, i) {
      var h = '';
      if (lvl && q.grp !== lastG) {
        var cnt = list.filter(function (x) { return x.grp === q.grp; }).length;
        h = '<h3 class="grp grp-' + q.grp + '" data-grp="' + q.grp + '">' + GRP_TITLE[q.grp] + ' <small>(' + cnt + ' soru)</small></h3>';
      }
      lastG = q.grp;
      return h + qHtml(q, i);
    }).join('');
    list.forEach(function (q, i) { paint(t.id, q, i); });
    applyFilter(list, t.id);
    updateScore(t.id, list);

    qsBox.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-ch]');
      if (b) {
        var i = +b.getAttribute('data-q'), q = list[i];
        var a = load(t.id);
        if (a[q.key]) return;
        var pick = b.getAttribute('data-ch');
        a[q.key] = { c: pick, ok: pick === q.a };
        a._total = list.length;
        save(t.id, a);
        logAnswer(t.id, pick === q.a);
        if (pick !== q.a) remAdd(t.id, q.key);
        else onCorrect(t.id, q.key, b, true);
        paint(t.id, q, i);
        updateScore(t.id, list);
        return;
      }
      var sb = e.target.closest('button[data-show]');
      if (sb) {
        var el = document.getElementById('sol' + sb.getAttribute('data-show'));
        el.hidden = !el.hidden;
        sb.textContent = el.hidden ? 'Çözümü göster' : 'Çözümü gizle';
      }
    });
    document.getElementById('filters').addEventListener('click', function (e) {
      var b = e.target.closest('button[data-f]');
      if (!b) return;
      filter = b.getAttribute('data-f');
      [].forEach.call(this.children, function (x) { x.classList.toggle('on', x === b); });
      applyFilter(list, t.id);
    });
    document.getElementById('clearBtn').addEventListener('click', function () {
      if (!confirm('"' + meta.title + '" konusundaki işaretlemeler silinsin mi?\n\nProfildeki istatistiklerin ve Hatırlatıcı’daki yanlışların silinmez.')) return;
      clearTopic(t.id);
      renderTopic(s, meta, t, idx);
    });
  }

  function qHtml(q, i) {
    var head = '<div class="meta"><span class="num">' + (i + 1) + '.</span>' +
      (q.meb ? '<span class="tag meb">MEB Örnek · ' + q.no + '. soru</span>' : q.past ? '<span class="tag past">LGS ' + q.year + ' · ' + q.no + '. soru</span>' : '<span class="tag new">Yeni nesil</span>') + '</div>';
    var body, choices;
    if (q.past) {
      body = '<img class="past" loading="lazy" src="' + q.img + '" alt="' + (q.meb ? 'MEB örnek sorusu' : 'LGS ' + q.year + ' sorusu') + '" onload="this.style.width=Math.round(this.naturalWidth*0.82)+\'px\'">';
      choices = '<ul class="ch compact">' + LETTERS.map(function (L) {
        return '<li><button data-q="' + i + '" data-ch="' + L + '"><b>' + L + ')</b></button></li>';
      }).join('') + '</ul>';
    } else {
      body = '<div class="stem">' + fmt(q.q) + '</div>';
      choices = '<ul class="ch">' + q.c.map(function (c, k) {
        return '<li><button data-q="' + i + '" data-ch="' + LETTERS[k] + '"><b>' + LETTERS[k] + ')</b><span>' + fmt(c) + '</span></button></li>';
      }).join('') + '</ul>';
    }
    return '<article class="q" id="q' + i + '">' + head + body + choices +
      '<div class="res" id="res' + i + '"></div>' +
      '<button class="btn ghost" style="margin-top:8px" data-show="' + i + '">Çözümü göster</button>' +
      '<div class="sol" id="sol' + i + '" hidden><span class="st">Çözüm — Doğru cevap: ' + q.a + '</span>' + fmt(q.s) + '</div></article>';
  }

  function paint(tid, q, i) {
    var a = load(tid)[q.key];
    var art = document.getElementById('q' + i);
    var btns = art.querySelectorAll('button[data-ch]');
    var res = document.getElementById('res' + i);
    var sol = document.getElementById('sol' + i);
    var sb = art.querySelector('button[data-show]');
    [].forEach.call(btns, function (b) {
      var L = b.getAttribute('data-ch');
      b.classList.remove('ok', 'bad');
      b.disabled = !!a;
      if (a) {
        if (L === q.a) b.classList.add('ok');
        else if (L === a.c) b.classList.add('bad');
      }
    });
    if (a) {
      res.className = 'res ' + (a.ok ? 'ok' : 'bad');
      res.textContent = a.ok ? '✓ Doğru!' : '✗ Yanlış. Senin cevabın: ' + a.c + ' · Doğru cevap: ' + q.a;
      sol.hidden = false; sb.textContent = 'Çözümü gizle';
    } else {
      res.className = 'res'; res.textContent = '';
      sol.hidden = true; sb.textContent = 'Çözümü göster';
    }
  }

  function applyFilter(list, tid) {
    var a = load(tid), vis = {};
    list.forEach(function (q, i) {
      var st = a[q.key], show = true;
      if (filter === 'past') show = q.past && !q.meb;
      else if (filter === 'meb') show = !!q.meb;
      else if (filter === 'new') show = !q.past;
      else if (filter === 'kolay' || filter === 'orta' || filter === 'zor') show = q.grp === filter;
      else if (filter === 'empty') show = !st;
      else if (filter === 'wrong') show = st && !st.ok;
      document.getElementById('q' + i).style.display = show ? '' : 'none';
      if (show) vis[q.grp] = 1;
    });
    [].forEach.call(document.querySelectorAll('#qs h3.grp'), function (h) {
      h.style.display = vis[h.getAttribute('data-grp')] ? '' : 'none';
    });
  }

  function updateScore(tid, list) {
    var st = stats(tid, list.length);
    document.getElementById('score').textContent =
      st.n + '/' + list.length + ' çözüldü · ' + st.ok + ' doğru · ' + st.bad + ' yanlış';
  }


  /* =========================================================
     KALICI İSTATİSTİK (Temizle ile silinmez)
     ========================================================= */
  var SKEY = KEY + 'stats', RKEY = KEY + 'rem', RDKEY = KEY + 'remDays', PKEY = KEY + 'profile';
  function jget(k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
  function jset(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }
  function ymd(d) { d = d || new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function addDays(n) { var d = new Date(); d.setDate(d.getDate() + n); return ymd(d); }
  function getStats() {
    var s = jget(SKEY, null);
    if (!s || !s.t) {
      // ilk açılış: daha önce işaretlenmiş cevapları kalıcı kayda aktar
      s = { v: 1, t: {}, days: {} };
      LGS.subjects.forEach(function (sb) {
        sb.topics.forEach(function (tp) {
          var a = load(tp.id), ok = 0, bad = 0;
          for (var k in a) if (a.hasOwnProperty(k) && k.charAt(0) !== '_') { if (a[k].ok) ok++; else bad++; }
          if (ok || bad) s.t[tp.id] = { ok: ok, bad: bad };
        });
      });
      jset(SKEY, s);
    }
    return s;
  }
  function logAnswer(tid, ok) {
    var s = getStats(), d = ymd();
    var e = s.t[tid] || (s.t[tid] = { ok: 0, bad: 0 });
    var g = s.days[d] || (s.days[d] = { ok: 0, bad: 0 });
    if (ok) { e.ok++; g.ok++; } else { e.bad++; g.bad++; }
    jset(SKEY, s);
    if (g.ok + g.bad === DAILY_N) setTimeout(function () { toast('🎯 Günün 100 sorusu tamam! Görevler’den ' + BONUS + ' EXP ödülünü al.'); updateBadge(); }, 900);
    if (g.ok + g.bad === 1) setTimeout(updateBadge, 300);
    if (window.LGSCloud) window.LGSCloud.push();
  }
  function subjectStats(s) {
    var st = getStats(), ok = 0, bad = 0, topics = [];
    s.topics.forEach(function (tp) {
      var e = st.t[tp.id] || { ok: 0, bad: 0 };
      ok += e.ok; bad += e.bad; topics.push({ id: tp.id, title: tp.title, ok: e.ok, bad: e.bad });
    });
    return { ok: ok, bad: bad, topics: topics };
  }
  function pct(ok, bad) { return ok + bad ? Math.round(ok * 100 / (ok + bad)) : 0; }
  function summaryFor(statsObj) {
    // sunucuya gönderilecek/karşılaştırılacak özet: ders ve konu bazında
    var out = {};
    LGS.subjects.forEach(function (s) {
      var ok = 0, bad = 0, tp = {};
      s.topics.forEach(function (t) { var e = statsObj.t[t.id]; if (e) { ok += e.ok; bad += e.bad; tp[t.id] = [e.ok, e.bad]; } });
      out[s.id] = { ok: ok, bad: bad, t: tp };
    });
    return out;
  }

  /* =========================================================
     HATIRLATICI (aralıklı tekrar kuyruğu)
     ========================================================= */
  function remDays() { var n = +jget(RDKEY, 3); return n >= 1 && n <= 60 ? n : 3; }
  function remList() { return jget(RKEY, []); }
  function remAdd(tid, key) {
    var l = remList();
    for (var i = 0; i < l.length; i++) if (l[i].tid === tid && l[i].key === key) return;
    l.push({ tid: tid, key: key, due: addDays(remDays()), n: 0, added: ymd() });
    jset(RKEY, l);
    updateBadge();
  }
  function remDue() { var t = ymd(); return remList().filter(function (x) { return x.due <= t; }); }
  function updateBadge() {
    var b = document.getElementById('remBadge'), n = remDue().length;
    if (b) { b.textContent = n; b.hidden = !n; }
    var h = document.getElementById('navBadge');
    var qn = 0; try { qn = questReady(); } catch (e) {}
    var qb = document.getElementById('qsBadge'); if (qb) { qb.textContent = qn; qb.hidden = !qn; }
    if (h) { h.hidden = !(n || qn); }
  }
  function topicMeta(tid) { var i = subjOf(tid); return i ? { s: i.s, t: i.t } : null; }
  function fmtDate(s) { var p = s.split('-'); return +p[2] + ' ' + AYLAR[+p[1] - 1]; }

  function reminderPage() {
    setCrumbs([{ text: 'Hatırlatıcı' }]);
    document.title = 'Hatırlatıcı · LGS Kışlası';
    var days = remDays(), all = remList(), today = ymd();
    var due = all.filter(function (x) { return x.due <= today; });
    var wait = all.filter(function (x) { return x.due > today; }).sort(function (a, b) { return a.due < b.due ? -1 : 1; });
    var byDay = {};
    wait.forEach(function (x) { byDay[x.due] = (byDay[x.due] || 0) + 1; });
    var waitHtml = Object.keys(byDay).sort().map(function (d) {
      return '<li><span>' + fmtDate(d) + '</span><b>' + byDay[d] + ' soru</b></li>';
    }).join('');
    app.innerHTML = '<div class="page-rem">' +
      '<h1>🔁 Hatırlatıcı</h1>' +
      '<p class="lead">Yanlış yaptığın sorular, seçtiğin gün sayısı kadar sonra burada tekrar karşına çıkar. Doğru çözersen listeden silinir; yine yanlış yaparsan aynı süre sonra tekrar gelir.</p>' +
      '<div class="card rem-set"><label for="remDays">Yanlışlar kaç gün sonra tekrar gelsin?</label>' +
      '<div class="rem-ctl"><button class="btn ghost" data-d="-1" aria-label="Azalt">−</button>' +
      '<input id="remDays" type="number" min="1" max="60" inputmode="numeric" value="' + days + '"><span>gün</span>' +
      '<button class="btn ghost" data-d="1" aria-label="Artır">+</button></div>' +
      '<p class="small">Yeni yanlışlar bu süreye göre sıraya girer.</p></div>' +
      '<div class="rem-sum"><div><b>' + due.length + '</b>bugün çözülecek</div><div><b>' + wait.length + '</b>bekleme kuyruğunda</div></div>' +
      (wait.length ? '<details class="card rem-wait"><summary>Bekleme kuyruğu</summary><ul>' + waitHtml + '</ul></details>' : '') +
      '<h2 class="rem-h">Bugün tekrar et</h2><div id="remQs">' +
      (due.length ? '<p class="loading">Sorular yükleniyor…</p>' : '<p class="empty">Bugün tekrar edilecek soru yok. ' + (all.length ? 'Sıradaki sorular yukarıdaki kuyrukta.' : 'Bir konuda yanlış yaptığında soru buraya düşer.') + '</p>') +
      '</div></div>';
    var inp = document.getElementById('remDays');
    function setDays(n) { n = Math.max(1, Math.min(60, Math.round(+n || 3))); inp.value = n; jset(RDKEY, n); }
    inp.addEventListener('change', function () { setDays(inp.value); });
    [].forEach.call(document.querySelectorAll('.rem-ctl button'), function (b) {
      b.addEventListener('click', function () { setDays(+inp.value + +b.getAttribute('data-d')); });
    });
    if (due.length) renderDue(due);
  }

  function renderDue(due) {
    var box = document.getElementById('remQs');
    var tids = [];
    due.forEach(function (x) { if (tids.indexOf(x.tid) < 0) tids.push(x.tid); });
    var left = tids.length;
    tids.forEach(function (tid) {
      var m = topicMeta(tid);
      if (!m) { if (!--left) draw(); return; }
      loadTopic(m.s.id, tid, function () { if (!--left) draw(); });
    });
    function draw() {
      var items = [];
      due.forEach(function (x) {
        var t = LGS.topics[x.tid], m = topicMeta(x.tid);
        if (!t || !m) return;
        var q = buildList(t).filter(function (y) { return y.key === x.key; })[0];
        if (q) items.push({ r: x, q: q, m: m });
      });
      if (!items.length) { box.innerHTML = '<p class="empty">Bugün tekrar edilecek soru yok.</p>'; return; }
      box.innerHTML = items.map(function (it, i) {
        var h = qHtml(it.q, 9000 + i);
        h = h.replace('<span class="num">' + (9001 + i) + '.</span>', '<span class="num">' + (i + 1) + '.</span>');
        var tag = '<a class="tag topic" style="--c:' + it.m.s.color + '" href="#/k/' + it.r.tid + '">' + it.m.s.icon + ' ' + esc(it.m.t.title) + '</a>' +
          (it.r.n ? '<span class="tag again">' + (it.r.n + 1) + '. tekrar</span>' : '');
        return '<div style="--c:' + it.m.s.color + '">' + h.replace('</div>', tag + '</div>') + '</div>';
      }).join('');
      box.addEventListener('click', function (e) {
        var b = e.target.closest('button[data-ch]');
        if (b) {
          var i = +b.getAttribute('data-q') - 9000, it = items[i];
          if (!it || it.done) return;
          it.done = true;
          var pick = b.getAttribute('data-ch'), ok = pick === it.q.a;
          var art = document.getElementById('q' + (9000 + i));
          [].forEach.call(art.querySelectorAll('button[data-ch]'), function (x) {
            var L = x.getAttribute('data-ch'); x.disabled = true;
            if (L === it.q.a) x.classList.add('ok'); else if (L === pick) x.classList.add('bad');
          });
          var res = document.getElementById('res' + (9000 + i));
          var l = remList().filter(function (y) { return !(y.tid === it.r.tid && y.key === it.r.key); });
          if (ok) {
            res.className = 'res ok'; res.textContent = '✓ Doğru! Soru hatırlatıcıdan silindi.';
            onCorrect(it.r.tid, it.r.key, b);
          } else {
            var nd = addDays(remDays());
            l.push({ tid: it.r.tid, key: it.r.key, due: nd, n: (it.r.n || 0) + 1, added: it.r.added });
            res.className = 'res bad'; res.textContent = '✗ Yanlış. Doğru cevap: ' + it.q.a + ' · ' + fmtDate(nd) + ' tarihinde tekrar gelecek.';
          }
          jset(RKEY, l);
          logAnswer(it.r.tid, ok);
          updateBadge();
          var sol = document.getElementById('sol' + (9000 + i)); sol.hidden = false;
          var sb = art.querySelector('button[data-show]'); if (sb) sb.textContent = 'Çözümü gizle';
          return;
        }
        var sb2 = e.target.closest('button[data-show]');
        if (sb2) {
          var el = document.getElementById('sol' + sb2.getAttribute('data-show'));
          el.hidden = !el.hidden; sb2.textContent = el.hidden ? 'Çözümü göster' : 'Çözümü gizle';
        }
      });
    }
  }

  /* =========================================================
     PROFİL VE İSTATİSTİK
     ========================================================= */
  function getProfile() { return jget(PKEY, { name: '', photo: '' }); }
  function setProfile(p) { var ok = jset(PKEY, p); drawNavUser(); if (window.LGSCloud) window.LGSCloud.push(); return ok; }
  function avatarHtml(p, cls) {
    var n = (p && p.name) || '';
    if (p && p.photo) return '<img class="' + cls + '" src="' + esc(p.photo) + '" alt="">';
    return '<span class="' + cls + ' ph">' + esc(n ? n.charAt(0).toLocaleUpperCase('tr') : '👤') + '</span>';
  }
  function short(n) { return { tr: 'TÜR', mat: 'MAT', fen: 'FEN', ink: 'İNK', din: 'DİN', ing: 'İNG' }[n] || n; }
  var HEX = { tr: '#f43f5e', mat: '#38bdf8', fen: '#22c55e', ink: '#f59e0b', din: '#14b8a6', ing: '#a78bfa' };

  // 6 ders için oyun tarzı yetenek (radar) dairesi
  function radarSvg(vals) {
    var W = 320, H = 300, cx = 160, cy = 152, R = 108, n = vals.length, out = '';
    function pt(i, r) { var a = -Math.PI / 2 + i * 2 * Math.PI / n; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; }
    [0.25, 0.5, 0.75, 1].forEach(function (f) {
      out += '<polygon points="' + vals.map(function (v, i) { return pt(i, R * f).join(','); }).join(' ') + '" class="rd-grid"/>';
    });
    vals.forEach(function (v, i) { var p = pt(i, R); out += '<line x1="' + cx + '" y1="' + cy + '" x2="' + p[0] + '" y2="' + p[1] + '" class="rd-axis"/>'; });
    var poly = vals.map(function (v, i) { return pt(i, R * Math.max(0.03, v.p / 100)).join(','); }).join(' ');
    out += '<polygon points="' + poly + '" class="rd-val"/>';
    vals.forEach(function (v, i) {
      var p = pt(i, R * Math.max(0.03, v.p / 100)); out += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4.5" fill="' + v.c + '" stroke="#fff" stroke-width="1.5"/>';
      var l = pt(i, R + 26);
      out += '<text x="' + l[0] + '" y="' + (l[1] - 3) + '" text-anchor="middle" class="rd-l">' + v.l + '</text>' +
        '<text x="' + l[0] + '" y="' + (l[1] + 12) + '" text-anchor="middle" class="rd-p" fill="' + v.c + '">%' + v.p + '</text>';
    });
    return '<svg class="radar" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Ders başarı dairesi">' +
      '<defs><linearGradient id="rdg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#22d3ee" stop-opacity=".55"/><stop offset="1" stop-color="#6366f1" stop-opacity=".45"/></linearGradient></defs>' + out + '</svg>';
  }
  function ringSvg(p, c) {
    var r = 26, C = 2 * Math.PI * r, d = C * p / 100;
    return '<svg class="ring" viewBox="0 0 64 64"><circle cx="32" cy="32" r="' + r + '" class="ring-bg"/>' +
      (p ? '<circle cx="32" cy="32" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="7" stroke-linecap="round" stroke-dasharray="' + d.toFixed(1) + ' ' + C.toFixed(1) + '" transform="rotate(-90 32 32)"/>' : '') +
      '<text x="32" y="37" text-anchor="middle" class="ring-t">%' + p + '</text></svg>';
  }
  // sum: summaryFor() biçimi
  function statsBlock(sum) {
    var tOk = 0, tBad = 0, vals = [];
    LGS.subjects.forEach(function (s) { var e = sum[s.id] || { ok: 0, bad: 0 }; tOk += e.ok; tBad += e.bad; vals.push({ l: short(s.id), p: pct(e.ok, e.bad), c: HEX[s.id] }); });
    var cards = LGS.subjects.map(function (s) {
      var e = sum[s.id] || { ok: 0, bad: 0, t: {} };
      var rows = s.topics.map(function (tp) {
        var x = (e.t || {})[tp.id] || [0, 0], p = pct(x[0], x[1]);
        return '<li><span class="tt">' + esc(tp.title) + '</span><span class="tbar"><i style="width:' + p + '%;background:' + HEX[s.id] + '"></i></span>' +
          '<span class="tn">' + (x[0] + x[1] ? '%' + p + ' <small>' + x[0] + 'D ' + x[1] + 'Y</small>' : '<small>—</small>') + '</span></li>';
      }).join('');
      return '<details class="card subj-st" style="--c:' + HEX[s.id] + '"><summary>' + ringSvg(pct(e.ok, e.bad), HEX[s.id]) +
        '<span class="nm">' + s.icon + ' ' + esc(s.name) + '<small>' + e.ok + ' doğru · ' + e.bad + ' yanlış</small></span></summary>' +
        '<ul class="tlist">' + rows + '</ul></details>';
    }).join('');
    return '<div class="card st-top"><div class="st-radar">' + radarSvg(vals) + '</div>' +
      '<div class="st-nums"><div><b>' + (tOk + tBad) + '</b>çözülen</div><div class="g"><b>' + tOk + '</b>doğru</div><div class="r"><b>' + tBad + '</b>yanlış</div><div><b>%' + pct(tOk, tBad) + '</b>başarı</div></div></div>' +
      '<h2 class="rem-h">Ders ve konu başarısı</h2><p class="small">Bir derse dokun, konu konu başarı oranını gör.</p>' + cards;
  }

  function resizePhoto(file, cb) {
    var rd = new FileReader();
    rd.onload = function () {
      var img = new Image();
      img.onload = function () {
        var S = 256, c = document.createElement('canvas'); c.width = c.height = S;
        var k = Math.min(img.width, img.height), sx = (img.width - k) / 2, sy = (img.height - k) / 2;
        c.getContext('2d').drawImage(img, sx, sy, k, k, 0, 0, S, S);
        var t = document.createElement('canvas'); t.width = t.height = 72;
        t.getContext('2d').drawImage(c, 0, 0, 72, 72);
        cb(c.toDataURL('image/jpeg', 0.82), t.toDataURL('image/jpeg', 0.8));
      };
      img.onerror = function () { cb(null); };
      img.src = rd.result;
    };
    rd.readAsDataURL(file);
  }

  function lvCard(x) {
    var L = levelOf(x), r = rankOf(L), lo = needFor(L), hi = needFor(L + 1), p = L >= 100 ? 100 : (x - lo) * 100 / (hi - lo);
    var nx = RANKS[Math.min(9, Math.floor(L / 10) + 1)], nxL = Math.min(100, (Math.floor(L / 10) + 1) * 10);
    var road = RANKS.map(function (k, j) {
      var from = j === 0 ? 1 : j * 10, to = j === 9 ? 100 : j * 10 + 9, st = L >= from ? (rankOf(L) === k ? 'cur' : 'ok') : 'lock';
      return '<li class="rr ' + st + '" style="--rc:' + k.c + '"><span class="rr-i">' + k.i + '</span><span class="rr-n"><b>' + k.n + '</b><small>Seviye ' + from + '–' + to + (j === 9 ? '+' : '') + '</small></span><span class="rr-s">' + (st === 'cur' ? 'ŞU AN' : st === 'ok' ? '✓' : '🔒 ' + nf(Math.max(0, needFor(from) - x)) + ' EXP') + '</span></li>';
    }).join('');
    return '<div class="card lvcard" role="button" tabindex="0" onclick="this.classList.toggle(\'open\')" style="--rc:' + r.c + '"><div class="lvc-emb">' + r.i + '</div>' +
      '<div class="lvc-b"><div class="lvc-t"><b>' + r.n + '</b><span>Seviye ' + L + '</span></div>' +
      '<div class="lvc-bar"><i style="width:' + p.toFixed(1) + '%"></i></div>' +
      '<div class="small">' + nf(x) + ' toplam EXP' + (L < 100 ? ' · sonraki seviyeye ' + nf(hi - x) : '') +
      (L < 90 ? ' · ' + nxL + '. seviyede ' + nx.i + ' ' + nx.n : '') + '</div><div class="lvc-hint">Tüm rütbeleri görmek için dokun ▾</div></div><ol class="rk-road">' + road + '</ol></div>';
  }
  function profilePage() {
    setCrumbs([{ text: 'Profil ve İstatistik' }]);
    document.title = 'Profil ve İstatistik · LGS Kışlası';
    var p = getProfile();
    app.innerHTML = '<div class="page-prof">' +
      '<div class="card prof-head">' +
      '<label class="av-wrap" title="Profil fotoğrafı yükle">' + avatarHtml(p, 'av-big') + '<span class="av-cam">📷</span>' +
      '<input id="photoIn" type="file" accept="image/*" hidden></label>' +
      '<div class="prof-name"><label for="nameIn" class="small">Kullanıcı adı</label>' +
      '<div class="name-row"><input id="nameIn" maxlength="24" autocomplete="nickname" placeholder="Adını yaz" value="' + esc(p.name || '') + '">' +
      '<button class="btn" id="nameSave">Kaydet</button></div><p class="small" id="nameMsg"></p>' +
      '<p class="small">Adın, fotoğrafın ve istatistiklerin diğer kullanıcılara görünür. Gerçek soyadını yazmamanı öneririz.</p></div></div>' +
      '<div class="card find"><label for="findIn"><b>🔎 Diğer kullanıcılar</b></label>' +
      '<input id="findIn" placeholder="Kullanıcı adı ara" autocomplete="off"><ul id="findList" class="find-list"></ul>' +
      '<p class="small" id="findMsg"></p></div>' +
      lvCard(xpGet().total) +
      '<h1 class="st-h">📊 İstatistiklerim</h1>' +
      statsBlock(summaryFor(getStats())) +
      '<p class="small">Bu kayıt konu sayfalarındaki “Temizle” düğmesiyle silinmez; çözdüğün her soru buraya eklenir.</p></div>';
    var nameIn = document.getElementById('nameIn'), msg = document.getElementById('nameMsg');
    document.getElementById('nameSave').addEventListener('click', function () {
      var n = nameIn.value.trim().replace(/\s+/g, ' ');
      if (n.length < 2) { msg.textContent = 'En az 2 karakter yaz.'; return; }
      var done = function (err) {
        if (err) { msg.textContent = err; return; }
        var q = getProfile(); q.name = n; setProfile(q); msg.textContent = '✓ Kaydedildi.';
        var a = document.querySelector('.av-big.ph'); if (a) a.textContent = n.charAt(0).toLocaleUpperCase('tr');
      };
      if (window.LGSCloud && window.LGSCloud.claim) { msg.textContent = 'Kontrol ediliyor…'; window.LGSCloud.claim(n, done); }
      else done();
    });
    document.getElementById('photoIn').addEventListener('change', function () {
      var f = this.files && this.files[0]; if (!f) return;
      resizePhoto(f, function (url, th) {
        if (!url) { msg.textContent = 'Fotoğraf okunamadı.'; return; }
        var q = getProfile(); q.photo = url; q.thumb = th;
        if (!setProfile(q)) { msg.textContent = 'Fotoğraf kaydedilemedi.'; return; }
        var w = document.querySelector('.av-wrap'); var old = w.querySelector('.av-big');
        var tmp = document.createElement('div'); tmp.innerHTML = avatarHtml(q, 'av-big'); w.replaceChild(tmp.firstChild, old);
        msg.textContent = '✓ Profil fotoğrafı güncellendi.';
      });
    });
    var findIn = document.getElementById('findIn'), list = document.getElementById('findList'), fmsg = document.getElementById('findMsg');
    var tmr;
    function search() {
      if (!window.LGSCloud || !window.LGSCloud.search) { fmsg.textContent = 'Kullanıcı sunucusu hazırlanıyor; çok yakında burada diğer kullanıcıları görebileceksin.'; return; }
      window.LGSCloud.search(findIn.value.trim(), function (rows) {
        list.innerHTML = (rows || []).map(function (r) {
          return '<li><a href="#/u/' + encodeURIComponent(r.username) + '">' + avatarHtml({ name: r.username, photo: r.thumb || r.photo }, 'av-sm') + '<span>' + esc(r.username) + '</span></a></li>';
        }).join('');
        fmsg.textContent = rows && rows.length ? '' : (findIn.value.trim() ? 'Bu adla kullanıcı bulunamadı.' : 'Henüz kayıtlı kullanıcı yok.');
      });
    }
    findIn.addEventListener('focus', search);
    findIn.addEventListener('input', function () { clearTimeout(tmr); tmr = setTimeout(search, 250); });
  }

  function userPage(name) {
    name = decodeURIComponent(name || '');
    setCrumbs([{ text: 'Profil ve İstatistik', href: '#/profil' }, { text: name }]);
    document.title = name + ' · LGS Kışlası';
    app.innerHTML = '<p class="loading">Yükleniyor…</p>';
    if (!window.LGSCloud || !window.LGSCloud.get) { app.innerHTML = '<p class="empty">Kullanıcı sunucusu henüz hazır değil.</p>'; return; }
    window.LGSCloud.get(name, function (r) {
      if (!r) { app.innerHTML = '<p class="empty">“' + esc(name) + '” adlı kullanıcı bulunamadı. <a href="#/profil">Geri dön</a></p>'; return; }
      app.innerHTML = '<div class="page-prof"><a class="back" href="#/profil">← Profilim</a>' +
        '<div class="card prof-head">' + avatarHtml({ name: r.username, photo: r.photo }, 'av-big') +
        '<div class="prof-name"><h1 style="margin:0">' + esc(r.username) + '</h1>' +
        (r.updated_at ? '<p class="small">Son etkinlik: ' + new Date(r.updated_at).toLocaleDateString('tr-TR') + '</p>' : '') + '</div></div>' +
        lvCard(r.xp_total || 0) + statsBlock(r.stats || {}) + '</div>';
    });
  }

  /* =========================================================
     ÜÇ ÇİZGİLİ MENÜ
     ========================================================= */
  var drawer = document.getElementById('drawer'), navBtn = document.getElementById('navBtn'), shade = document.getElementById('shade');
  function openNav(o) {
    document.body.classList.toggle('nav-open', o);
    if (navBtn) navBtn.setAttribute('aria-expanded', o ? 'true' : 'false');
    if (drawer) drawer.setAttribute('aria-hidden', o ? 'false' : 'true');
  }
  if (navBtn) navBtn.addEventListener('click', function () { openNav(!document.body.classList.contains('nav-open')); });
  if (shade) shade.addEventListener('click', function () { openNav(false); });
  if (drawer) drawer.addEventListener('click', function (e) { if (e.target.closest('a')) openNav(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') openNav(false); });
  function drawNavUser() {
    var u = document.getElementById('navUser'); if (!u) return;
    var p = getProfile();
    var L = levelOf(xpGet().total);
    u.innerHTML = avatarHtml({ name: p.name, photo: p.thumb || p.photo }, 'av-sm') + '<span class="nu-t">' + rankTag(L) + '<b>' + esc(p.name || 'Profilini oluştur') + '</b><small>Seviye ' + L + '</small></span>';
  }
  function markNav(r) {
    [].forEach.call(document.querySelectorAll('#drawer a[data-r]'), function (a) { a.classList.toggle('on', a.getAttribute('data-r') === r); });
  }
  window.LGSApp = { xpGet: function () { return xpGet(); }, istDay: function (d) { return istDay(d); }, getStats: getStats, getProfile: getProfile, setProfile: setProfile, summaryFor: summaryFor, jget: jget, jset: jset, KEY: KEY };


  /* =========================================================
     EXP · SEVİYE · RÜTBE
     ========================================================= */
  var XKEY = KEY + 'xp';
  var XPMAX = LGS.xpMax || 600540;            // tüm sorular 4 kez doğru = 100. seviye (sonrası EXP birikmeye devam eder)
  var XP_BASE = { kolay: 10, orta: 15, zor: 20, past: 20, meb: 20, 'new': 15 };
  var COOL = 7 * 864e5;
  var RANKS = [
    { n: 'Çaylak', i: '🔰', c: '#9aa4b8' }, { n: 'Akıncı', i: '🗡️', c: '#c08457' },
    { n: 'Savaşçı', i: '⚔️', c: '#d1d5db' }, { n: 'Bahadır', i: '🛡️', c: '#60a5fa' },
    { n: 'Alp', i: '🏹', c: '#34d399' }, { n: 'Kartal', i: '🦅', c: '#fbbf24' },
    { n: 'Bozkurt', i: '🐺', c: '#94a3b8' }, { n: 'Komutan', i: '🎖️', c: '#f97316' },
    { n: 'Efsane', i: '🔥', c: '#ef4444' }, { n: 'Fatih', i: '👑', c: '#facc15' }
  ];
  function istDay(d) {
    try { return (d || new Date()).toLocaleDateString('en-CA', { timeZone: 'Europe/Istanbul' }); } catch (e) { return ymd(d); }
  }
  function grpOfKey(k) { return { p: 'past', m: 'meb', ko: 'kolay', or: 'orta', zr: 'zor', o: 'new' }[String(k).split(':')[0]] || 'new'; }
  function needFor(L) { return L <= 1 ? 0 : Math.round(XPMAX * Math.pow((Math.min(L, 100) - 1) / 99, 1.8)); }
  function levelOf(x) { var L = 1; while (L < 100 && needFor(L + 1) <= x) L++; return L; }
  function rankOf(L) { return RANKS[Math.min(9, Math.floor(L / 10))]; }
  function rankTag(L) { var r = rankOf(L); return '<span class="rtag" style="--rc:' + r.c + '">' + r.i + ' ' + r.n + '</span>'; }
  function xpGet() {
    var x = jget(XKEY, null);
    if (!x || !x.q) {
      // ilk açılış: daha önce doğru yapılmış sorular bir kez EXP kazandırır
      x = { v: 1, total: 0, q: {}, days: {} };
      var now = Date.now(), d = istDay();
      LGS.subjects.forEach(function (sb) {
        sb.topics.forEach(function (tp) {
          var a = load(tp.id);
          for (var k in a) if (a.hasOwnProperty(k) && k.charAt(0) !== '_' && a[k].ok) {
            var amt = XP_BASE[grpOfKey(k)]; x.q[tp.id + '|' + k] = [1, now]; x.total += amt;
          }
        });
      });
      x.days[d] = 0;
      jset(XKEY, x);
    }
    return x;
  }
  // x.f: konu sayfasında ilk kez doğru çözülüp EXP almış sorular.
  // Konu sayfasındaki ilk doğru çözüm, soru daha önce denemede/hatırlatıcıda EXP vermiş olsa bile anında EXP verir;
  // işaretlemeler silinip tekrar çözülürse 7 gün kuralı geçerli olur.
  function topicFirstMap(x, skip) {
    if (x.f) return x.f;
    x.f = {};
    LGS.subjects.forEach(function (sb) {
      sb.topics.forEach(function (tp) {
        var a = load(tp.id);
        for (var k in a) if (a.hasOwnProperty(k) && k.charAt(0) !== '_' && a[k].ok && tp.id + '|' + k !== skip) x.f[tp.id + '|' + k] = 1;
      });
    });
    return x.f;
  }
  function awardXP(tid, key, fromTopic) {
    var x = xpGet(), id = tid + '|' + key, r = x.q[id] || [0, 0], now = Date.now();
    var first = false;
    if (fromTopic) { var f = topicFirstMap(x, id); first = !f[id]; f[id] = 1; }
    if (!first && r[1] && now - r[1] < COOL) { if (fromTopic) jset(XKEY, x); return { xp: 0, why: 'cool', wait: Math.ceil((r[1] + COOL - now) / 864e5) }; }
    var amt = XP_BASE[grpOfKey(key)];
    var before = x.total, d = istDay();
    x.q[id] = [r[0] + 1, now]; x.total += amt; x.days[d] = (x.days[d] || 0) + amt;
    jset(XKEY, x);
    if (window.LGSCloud) window.LGSCloud.push();
    return { xp: amt, before: before, after: x.total, rep: r[0] + 1 };
  }
  /* ---------- görevler: günlük 100 soru + 7 günlük seri ---------- */
  var DAILY_N = 100, BONUS = 5 * XP_BASE.zor, STREAK_N = 7;
  function dayCount(d) { var g = getStats().days[d]; return g ? g.ok + g.bad : 0; }
  function streakInfo() {
    var days = getStats().days, d = new Date(), n = 0, today = dayCount(ymd(d)) > 0;
    if (!today) d.setDate(d.getDate() - 1);
    while (true) { var k = ymd(d), g = days[k]; if (!g || g.ok + g.bad < 1) break; n++; d.setDate(d.getDate() - 1); }
    return { n: n, today: today };
  }
  function claimed(tag) { var x = xpGet(); return !!(x.cl && x.cl[tag]); }
  function questState() {
    var d = ymd(), cnt = dayCount(d), sk = streakInfo();
    return {
      d: d, cnt: cnt, sk: sk,
      dailyOk: cnt >= DAILY_N, dailyCl: claimed('d100:' + d),
      skOk: sk.today && sk.n >= STREAK_N, skCl: claimed('sk:' + d)
    };
  }
  function questReady() { var q = questState(); return (q.dailyOk && !q.dailyCl ? 1 : 0) + (q.skOk && !q.skCl ? 1 : 0); }
  function claimBonus(tag, el) {
    var x = xpGet(); x.cl = x.cl || {};
    if (x.cl[tag]) return;
    var before = x.total, d = istDay();
    x.cl[tag] = Date.now(); x.total += BONUS; x.days[d] = (x.days[d] || 0) + BONUS;
    // eski ödül kayıtlarını temizle (30 günden eski)
    var lim = ymd(new Date(Date.now() - 30 * 864e5));
    for (var k in x.cl) if (k.split(':')[1] < lim) delete x.cl[k];
    jset(XKEY, x);
    if (window.LGSCloud) window.LGSCloud.push();
    gainFx({ xp: BONUS, before: before, after: x.total }, el);
  }
  function questPage() {
    setCrumbs([{ text: 'Görevler' }]);
    document.title = 'Görevler · LGS Kışlası';
    var q = questState(), p = Math.min(100, q.cnt * 100 / DAILY_N), sp = Math.min(100, q.sk.n * 100 / STREAK_N);
    var flames = ''; for (var i = 0; i < STREAK_N; i++) flames += '<i class="' + (i < Math.min(q.sk.n, STREAK_N) ? 'on' : '') + '">🔥</i>';
    function btn(ok, cl, tag) {
      return cl ? '<button class="btn qs-btn done" disabled>✓ Alındı</button>' : ok ? '<button class="btn primary qs-btn" data-tag="' + tag + '">🎁 ' + BONUS + ' EXP al</button>' : '<button class="btn qs-btn" disabled>🔒 ' + BONUS + ' EXP</button>';
    }
    app.innerHTML = '<div class="page-quest"><h1>🎯 Görevler</h1><p class="small">Her ödül 5 zor soru kadar, yani ' + BONUS + ' EXP. Görevler her gün gece yarısı yenilenir.</p>' +
      '<div class="card qs' + (q.dailyOk ? ' ok' : '') + '"><div class="qs-ic">📚</div><div class="qs-b"><b>Günün 100 sorusu</b><small>Bugün ' + Math.min(q.cnt, DAILY_N) + ' / ' + DAILY_N + ' soru çözdün' + (q.cnt > DAILY_N ? ' (toplam ' + q.cnt + ')' : '') + '</small>' +
      '<div class="qs-bar"><i style="width:' + p.toFixed(1) + '%"></i></div></div>' + btn(q.dailyOk, q.dailyCl, 'd100:' + q.d) + '</div>' +
      '<div class="card qs' + (q.skOk ? ' ok' : '') + '"><div class="qs-ic">🔥</div><div class="qs-b"><b>' + q.sk.n + ' günlük seri</b><small>' +
      (q.sk.n >= STREAK_N ? (q.sk.today ? 'Seri sürüyor! Her gün en az 1 soru çöz, ödülü her gün al.' : 'Seriyi korumak ve ödülü almak için bugün en az 1 soru çöz.') : 'Her gün en az 1 soru çöz. ' + STREAK_N + '. günden itibaren her gün ödül alırsın.' + (q.sk.today ? '' : ' Bugün henüz soru çözmedin.')) + '</small>' +
      '<div class="qs-fl">' + flames + '</div><div class="qs-bar"><i style="width:' + sp.toFixed(1) + '%"></i></div></div>' + btn(q.skOk, q.skCl, 'sk:' + q.d) + '</div></div>';
    app.querySelector('.page-quest').addEventListener('click', function (e) {
      var b = e.target.closest('[data-tag]'); if (!b) return;
      claimBonus(b.getAttribute('data-tag'), b);
      b.outerHTML = '<button class="btn qs-btn done" disabled>✓ Alındı</button>';
      updateBadge();
    });
  }
  function nf(n) { return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }

  /* ---------- alttaki EXP barı ---------- */
  var shownXP = null;
  function xpBarSet(x, animate) {
    var bar = document.getElementById('xpbar'); if (!bar) return;
    var L = levelOf(x), lo = needFor(L), hi = needFor(L + 1), r = rankOf(L);
    var p = L >= 100 ? 100 : Math.max(0, Math.min(100, (x - lo) * 100 / (hi - lo)));
    bar.style.setProperty('--rc', r.c);
    document.getElementById('xpRank').textContent = r.i;
    document.getElementById('xpLv').textContent = L;
    document.getElementById('xpName').textContent = r.n;
    document.getElementById('xpFill').style.width = p + '%';
    document.getElementById('xpTxt').textContent = L >= 100 ? nf(x) + ' EXP · Zirvedesin!' : nf(x - lo) + ' / ' + nf(hi - lo) + ' EXP';
    document.getElementById('xpLeft').textContent = L >= 100 ? 'MAX' : nf(hi - x) + ' kaldı';
    shownXP = x;
  }
  function countUp(from, to, ms) {
    var t0 = performance.now();
    (function step(t) {
      var k = Math.min(1, (t - t0) / ms), e = 1 - Math.pow(1 - k, 3);
      xpBarSet(from + (to - from) * e);
      if (k < 1) requestAnimationFrame(step);
      else xpBarSet(to);
    })(t0);
  }
  function gainFx(res, srcEl) {
    var bar = document.getElementById('xpbar'); if (!bar) return;
    var L0 = levelOf(res.before), L1 = levelOf(res.after);
    // uçan +EXP
    var f = document.createElement('div'); f.className = 'xpfly'; f.textContent = '+' + res.xp + ' EXP';
    var r = srcEl && srcEl.getBoundingClientRect ? srcEl.getBoundingClientRect() : null;
    f.style.left = (r ? Math.min(window.innerWidth - 90, Math.max(10, r.left + r.width / 2 - 40)) : window.innerWidth / 2 - 40) + 'px';
    f.style.top = (r ? r.top : window.innerHeight - 140) + 'px';
    document.body.appendChild(f);
    setTimeout(function () { f.remove(); }, 1300);
    bar.classList.remove('gain'); void bar.offsetWidth; bar.classList.add('gain');
    var chip = document.getElementById('xpChip'); chip.textContent = '+' + res.xp; chip.classList.remove('on'); void chip.offsetWidth; chip.classList.add('on');
    if (navigator.vibrate) try { navigator.vibrate(18); } catch (e) {}
    countUp(shownXP == null ? res.before : shownXP, res.after, 900);
    if (L1 > L0) setTimeout(function () { levelUpFx(L1, Math.floor(L1 / 10) > Math.floor(L0 / 10)); }, 750);
  }
  function levelUpFx(L, rankUp) {
    var r = rankOf(L), o = document.createElement('div');
    o.className = 'lvup' + (rankUp ? ' rank' : ''); o.style.setProperty('--rc', r.c);
    var sparks = '';
    for (var i = 0; i < 26; i++) {
      var a = Math.random() * 360, d = 120 + Math.random() * 160;
      sparks += '<i style="--a:' + a.toFixed(0) + 'deg;--d:' + d.toFixed(0) + 'px;--t:' + (0.5 + Math.random() * 0.6).toFixed(2) + 's;--s:' + (0.6 + Math.random()).toFixed(2) + '"></i>';
    }
    o.innerHTML = '<div class="lv-rays"></div><div class="lv-ring r1"></div><div class="lv-ring r2"></div><div class="lv-ring r3"></div>' +
      '<div class="lv-sparks">' + sparks + '</div>' +
      '<div class="lv-core"><div class="lv-kick">' + (rankUp ? 'YENİ RÜTBE' : 'SEVİYE ATLADIN') + '</div>' +
      '<div class="lv-emb"><span>' + r.i + '</span></div>' +
      '<div class="lv-num">' + L + '</div><div class="lv-rk">' + r.n.toLocaleUpperCase('tr') + '</div>' +
      '<div class="lv-sub">' + (L >= 100 ? 'Zirveye ulaştın. Efsanesin.' : 'Sonraki seviyeye ' + nf(needFor(L + 1) - xpGet().total) + ' EXP') + '</div>' +
      '<div class="lv-tap">devam etmek için dokun</div></div>';
    document.body.appendChild(o);
    if (navigator.vibrate) try { navigator.vibrate(rankUp ? [60, 40, 60, 40, 140] : [40, 30, 90]); } catch (e) {}
    var close = function () { o.classList.add('out'); setTimeout(function () { o.remove(); }, 350); };
    o.addEventListener('click', close);
    setTimeout(close, rankUp ? 5200 : 3800);
  }
  function toast(msg) {
    var t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; document.body.appendChild(t);
    setTimeout(function () { t.classList.add('out'); setTimeout(function () { t.remove(); }, 400); }, 2600);
  }
  function onCorrect(tid, key, el, fromTopic) {
    var res = awardXP(tid, key, fromTopic);
    if (res.xp) gainFx(res, el);
    else if (res.why === 'cool') toast('Bu soru ' + res.wait + ' gün sonra tekrar EXP verir.');
  }

  /* =========================================================
     LİDER TABLOSU
     ========================================================= */
  var EXAM = LGS.examDate || '2027-06-13';
  var lbTab = 'day';
  function lbRow(r, me) {
    var L = levelOf(r.xp_total || 0), md = r.rank === 1 ? '🥇' : r.rank === 2 ? '🥈' : r.rank === 3 ? '🥉' : '#' + r.rank;
    return '<li class="' + (me ? 'me' : '') + (r.rank <= 3 ? ' top' + r.rank : '') + '"><span class="lb-rk">' + md + '</span>' +
      '<a href="#/u/' + encodeURIComponent(r.username) + '" class="lb-u">' + avatarHtml({ name: r.username, photo: r.thumb }, 'av-sm') +
      '<span class="lb-n">' + rankTag(L) + '<b>' + esc(r.username) + '</b><small>Seviye ' + L + '</small></span></a>' +
      '<span class="lb-xp">' + nf(r.xp) + '<small>EXP</small></span></li>';
  }
  function perLabel(p, tab) {
    var d = dt(p);
    if (tab === 'week') { var e = new Date(d); e.setDate(e.getDate() + 6); return d.getDate() + ' ' + AYLAR[d.getMonth()].slice(0, 3) + ' – ' + e.getDate() + ' ' + AYLAR[e.getMonth()].slice(0, 3); }
    return d.getDate() + ' ' + AYLAR[d.getMonth()];
  }
  function leaderPage() {
    setCrumbs([{ text: 'Lider Tablosu' }]);
    document.title = 'Lider Tablosu · LGS Kışlası';
    var tabs = [['day', 'Günlük'], ['week', 'Haftalık'], ['all', 'Genel']];
    app.innerHTML = '<div class="page-lb"><h1>🏆 Lider Tablosu</h1>' +
      '<div class="lb-tabs" id="lbTabs">' + tabs.map(function (t) { return '<button data-t="' + t[0] + '"' + (t[0] === lbTab ? ' class="on"' : '') + '>' + t[1] + '</button>'; }).join('') + '</div>' +
      '<div id="lbBody"><p class="loading">Sıralama yükleniyor…</p></div></div>';
    document.getElementById('lbTabs').addEventListener('click', function (e) {
      var b = e.target.closest('button[data-t]'); if (!b) return;
      lbTab = b.getAttribute('data-t');
      [].forEach.call(this.children, function (x) { x.classList.toggle('on', x === b); });
      drawLb();
    });
    drawLb();
  }
  function drawLb() {
    var box = document.getElementById('lbBody'), tab = lbTab;
    if (!window.LGSCloud || !window.LGSCloud.leaderboard) { box.innerHTML = '<p class="empty">Sunucuya bağlanılamadı.</p>'; return; }
    box.innerHTML = '<p class="loading">Sıralama yükleniyor…</p>';
    var info = { day: 'Bugün kazanılan EXP · her gece 00.00’da sıfırlanır', week: 'Bu hafta (Pazartesi–Pazar) kazanılan EXP', all: 'Toplam EXP · genel şampiyon LGS gününde belirlenir' }[tab];
    window.LGSCloud.leaderboard(tab, function (d) {
      if (tab !== lbTab) return;
      if (!d) { box.innerHTML = '<p class="empty">Sıralama alınamadı. İnternet bağlantını kontrol et.</p>'; return; }
      var top = d.top || [], me = d.me, inTop = me && top.some(function (r) { return r.username === me.username; });
      var html = '<p class="small lb-info">' + info + '</p><ol class="lb">' +
        (top.length ? top.map(function (r) { return lbRow(r, me && r.username === me.username); }).join('') : '<li class="lb-empty">Henüz puan alan yok. İlk sen ol!</li>') + '</ol>';
      if (me) {
        html += '<div class="lb-me"><span class="small">Senin sıran</span><ol class="lb">' +
          lbRow({ rank: me.rank || '–', username: me.username, thumb: getProfile().thumb, xp: me.xp, xp_total: me.xp_total }, true) + '</ol>' +
          '<p class="small">' + (me.rank ? (me.of + ' kişi arasında ' + me.rank + '. sıradasın' + (inTop ? '. İlk 10’dasın!' : '.')) : 'Bu dönemde henüz EXP kazanmadın.') + '</p></div>';
      } else {
        html += '<div class="lb-me"><p class="small">Sıralamada görünmek için <a href="#/profil">profilinde bir kullanıcı adı belirle</a>.</p></div>';
      }
      html += '<div id="lbChamp"></div>';
      box.innerHTML = html;
      drawChamp(tab);
    });
  }
  function drawChamp(tab) {
    var box = document.getElementById('lbChamp'); if (!box) return;
    if (tab === 'all') {
      var now = new Date(), ex = dt(EXAM), days = Math.max(0, Math.ceil((ex - new Date(now.getFullYear(), now.getMonth(), now.getDate())) / 864e5));
      box.innerHTML = '<div class="card champ"><div class="champ-h">👑 Sezon Şampiyonluğu</div>' +
        '<p>Genel sıralamanın birincisi <b>LGS günü</b> sezon şampiyonu ilan edilecek.</p>' +
        '<div class="cd"><b>' + days + '</b><span>gün kaldı · ' + perLabel(EXAM) + ' ' + ex.getFullYear() + ' (tahmini)</span></div></div>';
      return;
    }
    window.LGSCloud.champions(tab, function (c) {
      if (!c || tab !== lbTab) return;
      var nm = tab === 'day' ? 'Günün Şampiyonu' : 'Haftanın Şampiyonu';
      var rec = c.recent || [], cnt = c.counts || [];
      var last = rec[0];
      box.innerHTML = '<div class="card champ"><div class="champ-h">🏅 ' + nm + '</div>' +
        (last ? '<a class="champ-last" href="#/u/' + encodeURIComponent(last.username) + '">' + avatarHtml({ name: last.username, photo: last.thumb }, 'av-big') +
          '<span>' + rankTag(levelOf(last.xp_total || 0)) + '<b>' + esc(last.username) + '</b><small>' + perLabel(last.per, tab) + ' · ' + nf(last.xp) + ' EXP</small></span></a>'
          : '<p class="small">İlk şampiyon ' + (tab === 'day' ? 'bu gece yarısı' : 'bu Pazar gece yarısı') + ' belli olacak.</p>') +
        (cnt.length ? '<div class="champ-sub">En çok şampiyon olanlar</div><ol class="champ-list">' + cnt.map(function (r) {
          return '<li><a href="#/u/' + encodeURIComponent(r.username) + '">' + avatarHtml({ name: r.username, photo: r.thumb }, 'av-sm') + '<span>' + esc(r.username) + '</span></a><b>' + r.wins + '×</b></li>';
        }).join('') + '</ol>' : '') +
        (rec.length > 1 ? '<div class="champ-sub">Son şampiyonlar</div><ul class="champ-rec">' + rec.map(function (r) {
          return '<li><span>' + perLabel(r.per, tab) + '</span><span>' + esc(r.username) + '</span><b>' + nf(r.xp) + '</b></li>';
        }).join('') + '</ul>' : '') + '</div>';
    });
  }

  /* ---------- ana ekrana ekleme (PWA) ---------- */
  var deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferredPrompt = e; var b = document.getElementById('instBtn'); if (b) b.hidden = false; });
  window.addEventListener('appinstalled', function () { deferredPrompt = null; toast('LGS Kışlası ana ekrana eklendi!'); });
  if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(function () {});
  function installPage() {
    setCrumbs([{ text: 'Uygulamayı İndir' }]);
    document.title = 'Uygulamayı İndir · LGS Kışlası';
    var ua = navigator.userAgent, ios = /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/.test(ua) && 'ontouchend' in document);
    var standalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;
    var iosNotSafari = ios && /CriOS|FxiOS|EdgiOS|OPiOS/i.test(ua);
    app.innerHTML = '<div class="page-dl"><div class="dl-hero"><img src="img/icons/icon-512.png" alt="LGS Kışlası"><h1>LGS Kışlası</h1><p>Uygulama gibi ana ekranından aç, tam ekran çalış.</p></div>' +
      (standalone ? '<div class="card dl-ok">✓ Zaten uygulama olarak açtın. Kışlaya hoş geldin!</div>' :
      '<button class="btn primary dl-btn" id="instBtn"' + (deferredPrompt ? '' : ' hidden') + '>📲 Ana ekrana ekle</button>' +
      '<div class="card dl-step"><h2> iPhone / iPad</h2>' + (iosNotSafari ? '<p class="warn">Bu sayfayı <b>Safari</b>’de aç; Chrome’da da paylaş menüsünden ekleyebilirsin.</p>' : '') +
        '<ol><li>Alttaki <b>Paylaş</b> düğmesine dokun (kare ve yukarı ok).</li><li>Listeyi kaydır, <b>Ana Ekrana Ekle</b>’yi seç.</li><li>Adı <b>LGS Kışlası</b> olarak kalsın, <b>Ekle</b>’ye dokun.</li></ol></div>' +
      '<div class="card dl-step"><h2>🤖 Android</h2><ol><li>Chrome’da sağ üstteki <b>⋮</b> menüsüne dokun.</li><li><b>Uygulamayı yükle</b> ya da <b>Ana ekrana ekle</b>’yi seç.</li><li><b>Yükle</b>’ye dokun. Simge ana ekranına gelir.</li></ol>' +
        '<p class="small">Yukarıda “Ana ekrana ekle” düğmesi çıktıysa tek dokunuşla da yükleyebilirsin.</p></div>') +
      '<p class="small dl-note">iPhone’da ana ekran uygulaması Safari’den ayrı kayıt tutar; Safari’deki ilerlemen oraya taşınmaz. Bu yüzden ekledikten sonra hep uygulamadan gir.</p></div>';
    var b = document.getElementById('instBtn');
    if (b) b.addEventListener('click', function () {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(function () { deferredPrompt = null; b.hidden = true; });
    });
  }
  function notFound() {
    setCrumbs([]);
    app.innerHTML = '<p class="empty">Sayfa bulunamadı. <a href="#/">Ana sayfaya dön</a></p>';
  }

  function route() {
    var h = location.hash.replace(/^#\/?/, '').split('/');
    window.scrollTo({ top: 0, behavior: 'instant' });
    openNav(false);
    if (window.LGSVS) window.LGSVS.stop();
    if (window.LGSDeneme) window.LGSDeneme.stop();
    var r = h[0] === 'deneme' ? 'dn' : h[0] === 'vs' ? 'vs' : h[0] === 'indir' ? 'dl' : h[0] === 'lider' ? 'lb' : h[0] === 'hatirlatici' ? 'rem' : h[0] === 'gorevler' ? 'qs' : (h[0] === 'profil' || h[0] === 'u') ? 'prof' : 'home';
    markNav(r);
    if (h[0] === 'd' && h[1]) subjectPage(h[1]);
    else if (h[0] === 'k' && h[1]) topicPage(h[1]);
    else if (h[0] === 'hatirlatici') reminderPage();
    else if (h[0] === 'gorevler') questPage();
    else if (h[0] === 'profil') profilePage();
    else if (h[0] === 'lider') leaderPage();
    else if (h[0] === 'indir') installPage();
    else if (h[0] === 'deneme') { if (window.LGSDeneme) window.LGSDeneme.page(h[1], h[2]); }
    else if (h[0] === 'vs') { if (window.LGSVS) window.LGSVS.page(h[1]); else app.innerHTML = '<p class="empty">VS modu için internet bağlantısı gerekli.</p>'; }
    else if (h[0] === 'u' && h[1]) userPage(h.slice(1).join('/'));
    else home();
    updateBadge();
  }
  window.addEventListener('hashchange', route);
  getStats(); xpBarSet(xpGet().total); drawNavUser();
  window.LGSApp.route = route;
  var A_ = window.LGSApp;
  A_.buildList = buildList; A_.loadTopic = loadTopic; A_.subjOf = subjOf; A_.fmt = fmt; A_.esc = esc; A_.avatarHtml = avatarHtml;
  A_.levelOf = levelOf; A_.rankOf = rankOf; A_.rankTag = rankTag; A_.setCrumbs = setCrumbs; A_.fitSvgs = fitSvgs; A_.toast = toast; A_.nf = nf; A_.awardXP = awardXP; A_.gainFx = gainFx; A_.logAnswer = logAnswer;
  setTimeout(route, 0);
})();
