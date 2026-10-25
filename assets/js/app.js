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
    var dark = cur ? cur === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    var next = dark ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem(KEY + 'theme', next); } catch (e) {}
  });

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
    return String(html == null ? '' : html).replace(/\{\{([^{}|]+)\|([^{}]+)\}\}/g, '<span class="fr"><span>$1</span><span>$2</span></span>');
  }
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
      '<p>Konu özetleri, çıkmış LGS soruları ve yeni nesil sorular. Her konuda 30–45 soru, ayrıntılı çözümler.</p>' +
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

  function notFound() {
    setCrumbs([]);
    app.innerHTML = '<p class="empty">Sayfa bulunamadı. <a href="#/">Ana sayfaya dön</a></p>';
  }

  function route() {
    var h = location.hash.replace(/^#\/?/, '').split('/');
    window.scrollTo(0, 0);
    if (h[0] === 'd' && h[1]) subjectPage(h[1]);
    else if (h[0] === 'k' && h[1]) topicPage(h[1]);
    else home();
  }
  window.addEventListener('hashchange', route);
  route();
})();
