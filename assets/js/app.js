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
    if (LGS.pastLoaded[sid]) pastDone();
    else loadScript('data/past/' + sid + '.js', function () { LGS.pastLoaded[sid] = true; pastDone(); });
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
    document.title = 'LGS 2027 Hazırlık';
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
    document.title = s.name + ' · LGS 2027';
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
    document.title = meta.title + ' · LGS 2027';
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
  var GRP_TITLE = { past: 'Çıkmış LGS Soruları', kolay: 'Yeni Nesil · Kolay', orta: 'Yeni Nesil · Orta', zor: 'Yeni Nesil · Zor' };

  function renderTopic(s, meta, t, idx) {
    var list = buildList(t);
    var ans = load(t.id), keys = {}, dirty = false;
    list.forEach(function (q) { keys[q.key] = 1; });
    for (var k in ans) if (ans.hasOwnProperty(k) && k.charAt(0) !== '_' && !keys[k]) { delete ans[k]; dirty = true; }
    if (dirty || ans._total !== list.length) { ans._total = list.length; save(t.id, ans); }
    var lvl = hasLevels(t);
    if (!lvl && (filter === 'kolay' || filter === 'orta' || filter === 'zor')) filter = 'all';
    if (lvl && filter === 'new') filter = 'all';
    var fl = lvl ? [['all', 'Tümü'], ['past', 'Çıkmış sorular'], ['kolay', 'Kolay'], ['orta', 'Orta'], ['zor', 'Zor'], ['empty', 'Boş'], ['wrong', 'Yanlışlarım']]
                 : [['all', 'Tümü'], ['past', 'Çıkmış sorular'], ['new', 'Yeni nesil'], ['empty', 'Boş'], ['wrong', 'Yanlışlarım']];
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
      if (!confirm('"' + meta.title + '" konusundaki tüm işaretlemeler silinsin mi?')) return;
      clearTopic(t.id);
      renderTopic(s, meta, t, idx);
    });
  }

  function qHtml(q, i) {
    var head = '<div class="meta"><span class="num">' + (i + 1) + '.</span>' +
      (q.past ? '<span class="tag past">LGS ' + q.year + ' · ' + q.no + '. soru</span>' : '<span class="tag new">Yeni nesil</span>') + '</div>';
    var body, choices;
    if (q.past) {
      body = '<img class="past" loading="lazy" src="' + q.img + '" alt="LGS ' + q.year + ' sorusu" onload="this.style.width=Math.round(this.naturalWidth*0.82)+\'px\'">';
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
      if (filter === 'past') show = q.past;
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
    if (h) { h.hidden = !n; }
  }
  function topicMeta(tid) { var i = subjOf(tid); return i ? { s: i.s, t: i.t } : null; }
  function fmtDate(s) { var p = s.split('-'); return +p[2] + ' ' + AYLAR[+p[1] - 1]; }

  function reminderPage() {
    setCrumbs([{ text: 'Hatırlatıcı' }]);
    document.title = 'Hatırlatıcı · LGS 2027';
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

  function profilePage() {
    setCrumbs([{ text: 'Profil ve İstatistik' }]);
    document.title = 'Profil ve İstatistik · LGS 2027';
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
    document.title = name + ' · LGS 2027';
    app.innerHTML = '<p class="loading">Yükleniyor…</p>';
    if (!window.LGSCloud || !window.LGSCloud.get) { app.innerHTML = '<p class="empty">Kullanıcı sunucusu henüz hazır değil.</p>'; return; }
    window.LGSCloud.get(name, function (r) {
      if (!r) { app.innerHTML = '<p class="empty">“' + esc(name) + '” adlı kullanıcı bulunamadı. <a href="#/profil">Geri dön</a></p>'; return; }
      app.innerHTML = '<div class="page-prof"><a class="back" href="#/profil">← Profilim</a>' +
        '<div class="card prof-head">' + avatarHtml({ name: r.username, photo: r.photo }, 'av-big') +
        '<div class="prof-name"><h1 style="margin:0">' + esc(r.username) + '</h1>' +
        (r.updated_at ? '<p class="small">Son etkinlik: ' + new Date(r.updated_at).toLocaleDateString('tr-TR') + '</p>' : '') + '</div></div>' +
        statsBlock(r.stats || {}) + '</div>';
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
    u.innerHTML = avatarHtml({ name: p.name, photo: p.thumb || p.photo }, 'av-sm') + '<span>' + esc(p.name || 'Profilini oluştur') + '</span>';
  }
  function markNav(r) {
    [].forEach.call(document.querySelectorAll('#drawer a[data-r]'), function (a) { a.classList.toggle('on', a.getAttribute('data-r') === r); });
  }
  window.LGSApp = { getStats: getStats, getProfile: getProfile, setProfile: setProfile, summaryFor: summaryFor, jget: jget, jset: jset, KEY: KEY };

  function notFound() {
    setCrumbs([]);
    app.innerHTML = '<p class="empty">Sayfa bulunamadı. <a href="#/">Ana sayfaya dön</a></p>';
  }

  function route() {
    var h = location.hash.replace(/^#\/?/, '').split('/');
    window.scrollTo({ top: 0, behavior: 'instant' });
    openNav(false);
    var r = h[0] === 'hatirlatici' ? 'rem' : (h[0] === 'profil' || h[0] === 'u') ? 'prof' : 'home';
    markNav(r);
    if (h[0] === 'd' && h[1]) subjectPage(h[1]);
    else if (h[0] === 'k' && h[1]) topicPage(h[1]);
    else if (h[0] === 'hatirlatici') reminderPage();
    else if (h[0] === 'profil') profilePage();
    else if (h[0] === 'u' && h[1]) userPage(h.slice(1).join('/'));
    else home();
    updateBadge();
  }
  window.addEventListener('hashchange', route);
  getStats(); drawNavUser();
  window.LGSApp.route = route;
  route();
})();
