(function(){
'use strict';

var C = window.FBE;
var STATE_KEY = 'fbe.state.v1';
var SYNC_KEY = 'fbe.sync.v1';
var GIST_DESC = 'manionjohn.com exit planning progress';
var GIST_FILE = 'fbe-progress.json';
var DAY = 86400000;
var BOX_DAYS = {1:1, 2:3, 3:7, 4:16, 5:35};

/* ================= storage ================= */
function readJSON(k, d){ try{ var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; }catch(e){ return d; } }
function writeJSON(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }

function blankState(){ return {v:1, lessons:{}, quiz:{}, notes:{}, read:{}, clips:{}, cats:{}, diag:[]}; }
var S = readJSON(STATE_KEY, null) || blankState();
['lessons','quiz','notes','read','clips','cats'].forEach(function(k){ if(!S[k]) S[k] = {}; });
if(!Array.isArray(S.diag)) S.diag = [];

function save(){ writeJSON(STATE_KEY, S); Sync.schedule(); updateChrome(); }
function now(){ return Date.now(); }

/* merge two states: newest timestamp wins per entry */
function merge(a, b){
  var out = blankState();
  ['lessons','quiz','notes','read','clips','cats'].forEach(function(k){
    var x = a[k] || {}, y = b[k] || {};
    Object.keys(x).concat(Object.keys(y)).forEach(function(id){
      var p = x[id], q = y[id];
      out[k][id] = !p ? q : !q ? p : ((q.t || 0) > (p.t || 0) ? q : p);
    });
  });
  var seen = {};
  (a.diag || []).concat(b.diag || []).forEach(function(d){ if(d && !seen[d.t]){ seen[d.t] = 1; out.diag.push(d); } });
  out.diag.sort(function(p, q){ return p.t - q.t; });
  return out;
}

/* ================= sync (GitHub Gist) ================= */
var Sync = {
  cfg: readJSON(SYNC_KEY, {}),
  status: 'off', msg: 'Not connected. Progress is saved on this device only.',
  timer: null, busy: false, again: false,
  on: function(){ return !!this.cfg.token; },
  set: function(st, msg){
    this.status = st; this.msg = msg;
    var dot = document.getElementById('syncdot');
    if(dot) dot.className = 'syncdot' + (st === 'ok' ? ' ok' : st === 'busy' ? ' busy' : st === 'err' ? ' err' : '');
    var el = document.getElementById('syncmsg');
    if(el) el.textContent = msg;
  },
  api: function(method, path, body){
    return fetch('https://api.github.com' + path, {
      method: method, cache: 'no-store',
      headers: {
        'Authorization': 'Bearer ' + this.cfg.token,
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'Content-Type': 'application/json'
      },
      body: body ? JSON.stringify(body) : undefined
    }).then(function(r){
      if(!r.ok) return r.text().then(function(t){ var e = new Error('GitHub ' + r.status + ': ' + t.slice(0, 160)); e.status = r.status; throw e; });
      return r.status === 204 ? null : r.json();
    });
  },
  ensureGist: function(){
    var self = this;
    if(self.cfg.gistId) return Promise.resolve(self.cfg.gistId);
    return self.api('GET', '/gists?per_page=100').then(function(list){
      var hit = (list || []).filter(function(g){ return g.description === GIST_DESC && g.files && g.files[GIST_FILE]; })[0];
      if(hit){ self.cfg.gistId = hit.id; writeJSON(SYNC_KEY, self.cfg); return hit.id; }
      var files = {}; files[GIST_FILE] = {content: JSON.stringify(S)};
      return self.api('POST', '/gists', {description: GIST_DESC, public: false, files: files}).then(function(g){
        self.cfg.gistId = g.id; writeJSON(SYNC_KEY, self.cfg); return g.id;
      });
    });
  },
  pull: function(){
    var self = this;
    return self.api('GET', '/gists/' + self.cfg.gistId).then(function(g){
      var f = g.files && g.files[GIST_FILE];
      if(!f) return null;
      if(f.truncated) return fetch(f.raw_url, {cache: 'no-store'}).then(function(r){ return r.json(); });
      try{ return JSON.parse(f.content); }catch(e){ return null; }
    });
  },
  run: function(){
    var self = this;
    if(!self.on()) return Promise.resolve();
    if(self.busy){ self.again = true; return Promise.resolve(); }
    self.busy = true; self.set('busy', 'Syncing...');
    var before = JSON.stringify(S);
    return self.ensureGist()
      .then(function(){ return self.pull(); })
      .then(function(remote){
        if(remote) S = merge(S, remote);
        writeJSON(STATE_KEY, S);
        var files = {}; files[GIST_FILE] = {content: JSON.stringify(S)};
        return self.api('PATCH', '/gists/' + self.cfg.gistId, {files: files});
      })
      .then(function(){
        self.cfg.last = now(); writeJSON(SYNC_KEY, self.cfg);
        self.set('ok', 'Synced ' + new Date(self.cfg.last).toLocaleString() + '.');
        if(JSON.stringify(S) !== before) rerenderSoft();
      })
      .catch(function(e){
        if(e.status === 404 && self.cfg.gistId){ self.cfg.gistId = null; writeJSON(SYNC_KEY, self.cfg); }
        self.set('err', 'Sync failed: ' + e.message + ' Progress is still saved on this device.');
      })
      .then(function(){
        self.busy = false; updateChrome();
        if(self.again){ self.again = false; self.schedule(); }
      });
  },
  schedule: function(){
    var self = this;
    if(!self.on()) return;
    clearTimeout(self.timer);
    self.timer = setTimeout(function(){ self.run(); }, 1500);
  }
};

/* ================= helpers ================= */
function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
function $(sel, root){ return (root || document).querySelector(sel); }
function $all(sel, root){ return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
function shuffle(a){ a = a.slice(); for(var i = a.length - 1; i > 0; i--){ var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function pct(n, d){ return d ? Math.round(100 * n / d) : 0; }

function moduleById(id){ return C.modules.filter(function(m){ return m.id === id; })[0]; }
function phaseById(id){ return C.phases.filter(function(p){ return p.id === id; })[0]; }
function lessonStub(id){
  for(var i = 0; i < C.modules.length; i++){
    var m = C.modules[i];
    for(var j = 0; j < m.lessons.length; j++) if(m.lessons[j].id === id) return {m: m, i: j, stub: m.lessons[j]};
  }
  return null;
}
function lessonReady(id){ return !!C.lessons[id]; }
function isDone(id){ return !!(S.lessons[id] && S.lessons[id].done); }
function allStubs(){ var out = []; C.modules.forEach(function(m){ m.lessons.forEach(function(l){ out.push(l); }); }); return out; }
function readyStubs(){ return allStubs().filter(function(l){ return lessonReady(l.id); }); }
function modStats(m){
  var ready = m.lessons.filter(function(l){ return lessonReady(l.id); });
  var done = m.lessons.filter(function(l){ return isDone(l.id); });
  return {total: m.lessons.length, ready: ready.length, done: done.length};
}
function nextLesson(){
  var r = readyStubs();
  for(var i = 0; i < r.length; i++) if(!isDone(r[i].id)) return r[i];
  return null;
}
function qid(lessonId, i){ return lessonId + '-q' + (i + 1); }
function questionPool(filter){
  var out = [];
  Object.keys(C.lessons).forEach(function(lid){
    var L = C.lessons[lid];
    (L.quiz || []).forEach(function(q, i){
      var item = {id: qid(lid, i), lesson: lid, q: q};
      if(!filter || filter(item)) out.push(item);
    });
  });
  return out;
}
function dueQuestions(){
  var t = now();
  return questionPool(function(it){ var r = S.quiz[it.id]; return r && r.due <= t; });
}
function record(id, correct){
  var r = S.quiz[id] || {box: 0, n: 0, c: 0};
  r.box = correct ? Math.min((r.box || 0) + 1, 5) : 1;
  r.n = (r.n || 0) + 1; r.c = (r.c || 0) + (correct ? 1 : 0);
  r.due = now() + BOX_DAYS[r.box] * DAY;
  r.t = now();
  S.quiz[id] = r;
}

/* ================= chrome ================= */
function updateChrome(){
  var n = dueQuestions().length;
  var b = document.getElementById('dueBadge');
  if(b){ b.hidden = !n; b.textContent = n; }
}
function setNav(key){
  $all('#nav a').forEach(function(a){ a.classList.toggle('on', a.getAttribute('data-nav') === key); });
}

/* ================= quiz engine ================= */
/* items: [{id, q:{q, options, a, why}, tag?}]; opts: {track, title, onDone(score, results)} */
function mountQuiz(host, items, opts){
  opts = opts || {};
  var i = 0, right = 0, results = [];
  function draw(){
    if(i >= items.length){ return finish(); }
    var it = items[i], q = it.q;
    var order = shuffle(q.options.map(function(o, k){ return k; }));
    var h = '<div class="quiz"><div class="qmeta"><span>' + esc(opts.title || 'Quiz') + '</span><span>' + (i + 1) + ' / ' + items.length + '</span></div>';
    h += '<p class="qtext">' + q.q + '</p><div class="opts">';
    order.forEach(function(k, n){ h += '<button class="opt" data-k="' + k + '"><span class="l">' + 'ABCDE'[n] + '</span><span>' + q.options[k] + '</span></button>'; });
    h += '</div><div class="fb"></div></div>';
    host.innerHTML = h;
    $all('.opt', host).forEach(function(btn){
      btn.addEventListener('click', function(){
        var k = +btn.getAttribute('data-k'), ok = k === q.a;
        if(ok) right++;
        results.push({id: it.id, ok: ok, tag: it.tag});
        if(opts.track !== false) record(it.id, ok);
        $all('.opt', host).forEach(function(b){
          b.disabled = true;
          var kk = +b.getAttribute('data-k');
          if(kk === q.a) b.classList.add('right'); else if(kk === k) b.classList.add('wrong');
        });
        var fb = $('.fb', host);
        fb.innerHTML = '<div class="feedback"><b class="' + (ok ? 'ok' : 'no') + '">' + (ok ? 'Correct.' : 'Not quite.') + '</b> ' + (q.why || '') + '</div>' +
          '<div class="btnrow"><button class="btn nextq">' + (i + 1 < items.length ? 'Next question' : 'See results') + '</button></div>';
        $('.nextq', host).addEventListener('click', function(){ i++; draw(); });
        if(opts.track !== false) save();
      });
    });
  }
  function finish(){
    var p = pct(right, items.length);
    var h = '<div class="quiz"><div class="qmeta"><span>' + esc(opts.title || 'Quiz') + '</span><span>Complete</span></div>';
    h += '<div class="score">' + right + ' / ' + items.length + '</div><p class="muted" style="margin-top:8px">' + p + '% correct. ';
    h += p >= 80 ? 'These questions will return in Review on a spaced schedule.' : 'Review the sections covering missed questions. Missed questions return in Review tomorrow.';
    h += '</p><div class="btnrow"><button class="btn ghost again">Retake</button></div></div>';
    host.innerHTML = h;
    $('.again', host).addEventListener('click', function(){ i = 0; right = 0; results = []; items = shuffle(items); draw(); });
    if(opts.onDone) opts.onDone(right, results, host);
  }
  draw();
}

/* ================= views ================= */
var view = document.getElementById('view');

function vHome(){
  setNav('home');
  var ready = readyStubs(), all = allStubs();
  var done = all.filter(function(l){ return isDone(l.id); }).length;
  var due = dueQuestions().length;
  var nx = nextLesson();
  var diag = S.diag[S.diag.length - 1];
  var h = '<div class="wrap page">';
  h += '<p class="eyebrow">Exit Planning and Family Business Advisory</p>';
  h += '<h1 class="big">Exit Planning Program</h1>';
  h += '<p class="lede">81 lessons covering exit planning, succession, valuation, wealth transfer, family business, and advisory practice, organized around the Family Business &amp; Entrepreneurs Advisor role and CEPA preparation.</p>';
  if(!diag){
    h += '<a class="next" href="#/diagnostic"><span class="k">Start here</span><div class="t">Baseline diagnostic</div><p class="s">21 questions, about 15 minutes. Records a starting score in each subject area for comparison after each phase.</p></a>';
  }
  if(nx){
    var ls = lessonStub(nx.id);
    h += '<a class="next" href="#/l/' + nx.id + '"><span class="k">Next lesson // Module ' + ls.m.num + '</span><div class="t">' + esc(nx.title) + '</div><p class="s">' + esc(nx.summary) + '</p></a>';
  } else if(ready.length){
    h += '<div class="card"><h3>All lessons complete.</h3><p class="muted">Continue clearing the review queue, retake the diagnostic, and complete the Module 19 practice exams.</p></div>';
  }
  h += '<dl class="stats">';
  h += '<div><dt>Lessons done</dt><dd>' + done + ' / ' + ready.length + '<small>' + pct(done, ready.length) + '% complete</small></dd></div>';
  h += '<div><dt>Review due</dt><dd>' + due + '<small>' + (due ? '<a href="#/review">Clear the queue</a>' : 'Nothing due') + '</small></dd></div>';
  h += '<div><dt>Diagnostic</dt><dd>' + (diag ? diag.score + '%' : 'Not taken') + '<small>' + (diag ? '<a href="#/diagnostic">Retake</a> after each phase' : '<a href="#/diagnostic">Take it</a>') + '</small></dd></div>';
  h += '<div><dt>Sync</dt><dd style="font-size:1rem;padding-top:4px">' + (Sync.on() ? 'Connected' : 'This device') + '<small><a href="#/settings">' + (Sync.on() ? 'Details' : 'Set up sync') + '</a></small></dd></div>';
  h += '</dl>';
  h += '<h2>Progress by phase</h2>';
  C.phases.forEach(function(p){
    var mods = C.modules.filter(function(m){ return m.phase === p.id; });
    var tot = 0, dn = 0, rd = 0;
    mods.forEach(function(m){ var s = modStats(m); tot += s.total; dn += s.done; rd += s.ready; });
    h += '<div class="card"><div class="phase-head"><h3 style="margin:0">' + esc(p.title) + '</h3><span class="mono faint small">' + dn + ' / ' + tot + ' lessons' + (rd < tot ? ' // ' + (rd ? rd + ' published' : 'coming next') : '') + '</span></div>';
    h += '<p class="muted small" style="margin:6px 0 10px">' + esc(p.summary) + '</p><div class="bar"><i style="width:' + pct(dn, tot) + '%"></i></div></div>';
  });
  h += '<div class="btnrow"><a class="btn" href="#/roadmap">Open the full roadmap</a><a class="btn ghost" href="#/role">How this maps to the job</a></div>';
  h += '<h2>How to use this program</h2><div class="prose"><ul>';
  h += '<li><b>Complete modules in order.</b> Later modules use terms and concepts introduced in earlier ones.</li>';
  h += '<li><b>Take the quiz at the end of each lesson.</b> Answered questions enter the review queue. Missed questions return the next day; correct answers return after 3, 7, 16, and 35 days.</li>';
  h += '<li><b>Write out exercise answers.</b> Each exercise applies the lesson to a client situation. Answers are saved and synced.</li>';
  h += '<li><b>Save passages.</b> Select any text in a lesson and choose Save to file it under a category, with an optional note. Saved passages are collected on the Saved page.</li>';
  h += '<li><b>Questions and feedback.</b> Bring questions or exercise answers to chat for review.</li>';
  h += '</ul></div></div>';
  view.innerHTML = h;
}

function vRoadmap(){
  setNav('roadmap');
  var h = '<div class="wrap page"><p class="eyebrow">19 modules // 81 lessons</p><h1 class="big">Roadmap</h1>';
  h += '<p class="lede">Modules are sequenced so each one builds on the terms and concepts of the modules before it. Phase 1 covers foundations, Phase 2 core technical disciplines, Phase 3 advisory practice, and Phase 4 case studies and CEPA preparation.</p>';
  C.phases.forEach(function(p){
    h += '<section class="phase"><div class="phase-head"><span class="mono">' + esc(p.label) + '</span><h2>' + esc(p.title) + '</h2></div><p>' + esc(p.summary) + '</p>';
    C.modules.filter(function(m){ return m.phase === p.id; }).forEach(function(m){ h += modCard(m); });
    h += '</section>';
  });
  h += '</div>';
  view.innerHTML = h;
}
function modCard(m){
  var s = modStats(m);
  var status = !s.ready ? '<span class="pill">Coming next</span>' : s.done === s.total ? '<span class="pill ok">Complete</span>' : s.done ? '<span class="pill acc">In progress</span>' : '';
  return '<a class="mod' + (s.ready ? '' : ' soon') + '" href="#/m/' + m.id + '"><div class="row"><span class="num">' + String(m.num).padStart(2, '0') + '</span><div class="body"><div class="ttl">' + esc(m.title) + '</div><p class="sum">' + esc(m.summary) + '</p>' +
    '<div class="meta"><span>' + s.done + ' / ' + s.total + '</span><div class="bar"><i style="width:' + pct(s.done, s.total) + '%"></i></div>' + status + '</div></div></div></a>';
}

function vModule(id){
  setNav('roadmap');
  var m = moduleById(id);
  if(!m){ return vNotFound(); }
  var p = phaseById(m.phase), s = modStats(m);
  var h = '<div class="wrap page"><p class="crumbs"><a href="#/roadmap">Roadmap</a> / ' + esc(p.label) + '</p>';
  h += '<p class="eyebrow">Module ' + m.num + '</p><h1 class="big">' + esc(m.title) + '</h1><p class="lede">' + esc(m.summary) + '</p>';
  if(m.why) h += '<div class="call why"><span class="tag">Purpose</span><p>' + m.why + '</p></div>';
  if(m.job) h += '<div class="call hawaii"><span class="tag">Relevance to the Advisor role</span><p>' + m.job + '</p></div>';
  h += '<h2>Lessons</h2><ul class="lessons">';
  m.lessons.forEach(function(l, i){
    var ok = lessonReady(l.id), d = isDone(l.id);
    var inner = '<span class="check' + (d ? ' on' : '') + '">' + (d ? '&#10003;' : '') + '</span><span><span class="lt">' + m.num + '.' + (i + 1) + ' ' + esc(l.title) + '</span>' + (ok ? '' : ' <span class="pill">Coming next</span>') + '<p class="ls">' + esc(l.summary) + '</p></span>';
    h += '<li>' + (ok ? '<a href="#/l/' + l.id + '">' + inner + '</a>' : '<div class="stub">' + inner + '</div>') + '</li>';
  });
  h += '</ul>';
  if(s.ready){
    h += '<div class="btnrow"><a class="btn" href="#/quiz/' + m.id + '">Module quiz</a></div><p class="small faint">The module quiz mixes every question from this module\'s published lessons' + (m.quizExtra ? ' plus scenario questions written for the module' : '') + '.</p>';
  } else {
    h += '<div class="call"><span class="tag">Status</span><p>This module is outlined and will be published in a later batch. The lesson titles above show what it will cover.</p></div>';
  }
  h += '</div>';
  view.innerHTML = h;
}

function vLesson(id, clipId){
  setNav('roadmap');
  var ls = lessonStub(id), L = C.lessons[id];
  if(!ls || !L){ return vNotFound(); }
  var m = ls.m, p = phaseById(m.phase);
  var h = '<div class="wrap page" data-lesson="' + esc(id) + '"><p class="crumbs"><a href="#/roadmap">Roadmap</a> / <a href="#/m/' + m.id + '">Module ' + m.num + '. ' + esc(m.title) + '</a></p>';
  h += '<p class="eyebrow">Lesson ' + m.num + '.' + (ls.i + 1) + (L.minutes ? ' // about ' + L.minutes + ' min' : '') + '</p>';
  h += '<h1 class="big">' + esc(ls.stub.title) + '</h1><p class="lede">' + esc(ls.stub.summary) + '</p>';
  if(L.objectives){
    h += '<div class="objectives"><p class="k">Objectives</p><ul>' + L.objectives.map(function(o){ return '<li>' + o + '</li>'; }).join('') + '</ul></div>';
  }
  h += '<div class="prose">' + L.body + '</div>';
  if(L.terms && L.terms.length){
    h += '<p class="section-k"></p><h2>Key terms</h2><dl class="terms">' + L.terms.map(function(t){ return '<div><dt>' + esc(t[0]) + '</dt><dd>' + t[1] + '</dd></div>'; }).join('') + '</dl>';
  }
  if(L.quiz && L.quiz.length){
    h += '<p class="section-k"></p><h2>Quiz</h2><p class="muted small">' + L.quiz.length + ' questions. Each answer enters your review queue.</p><div id="lq"></div>';
  }
  if(L.exercise){
    h += '<p class="section-k"></p><h2>Exercise</h2><div class="prose">' + L.exercise + '</div>' + notesBox(id + ':ex', 'Write your answer here. It saves as you type.');
  }
  if(L.discussion){
    h += '<p class="section-k"></p><h2>Discussion</h2><div class="prose">' + L.discussion + '</div>' + notesBox(id + ':disc', 'Your thoughts. Bring these to your mentor in chat.');
  }
  if(L.resources && L.resources.length){
    h += '<p class="section-k"></p><h2>Further reading</h2><ul class="res">' + L.resources.map(function(r){
      return '<li><div class="rt">' + (r.url ? '<a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.title) + '</a>' : esc(r.title)) + (r.by ? ' <span class="faint">// ' + esc(r.by) + '</span>' : '') + '</div>' + (r.note ? '<p class="rn">' + r.note + '</p>' : '') + '</li>';
    }).join('') + '</ul>';
  }
  var d = isDone(id);
  h += '<div class="completebar"><button class="btn' + (d ? ' done' : '') + '" id="markdone">' + (d ? '&#10003; Completed' : 'Mark lesson complete') + '</button><span class="small faint">' + (d ? 'Completed ' + new Date(S.lessons[id].t).toLocaleDateString() + '. Click to undo.' : 'Mark it when you have read it and done the check.') + '</span></div>';
  // pager across all ready lessons
  var r = readyStubs(), k = r.map(function(x){ return x.id; }).indexOf(id);
  h += '<div class="pager">';
  if(k > 0) h += '<a href="#/l/' + r[k - 1].id + '"><span class="k">Previous</span><span class="t">' + esc(r[k - 1].title) + '</span></a>';
  if(k < r.length - 1) h += '<a class="r" href="#/l/' + r[k + 1].id + '"><span class="k">Next</span><span class="t">' + esc(r[k + 1].title) + '</span></a>';
  else h += '<a class="r" href="#/m/' + m.id + '"><span class="k">Back to</span><span class="t">Module ' + m.num + '</span></a>';
  h += '</div></div>';
  view.innerHTML = h;
  if(L.quiz && L.quiz.length){
    mountQuiz(document.getElementById('lq'), L.quiz.map(function(q, i){ return {id: qid(id, i), q: q}; }), {title: 'Lesson ' + m.num + '.' + (ls.i + 1)});
  }
  bindNotes();
  document.getElementById('markdone').addEventListener('click', function(){
    S.lessons[id] = {done: !isDone(id), t: now()};
    save(); vLesson(id);
  });
}

function notesBox(key, ph){
  var v = S.notes[key] ? S.notes[key].text : '';
  return '<textarea class="notes" data-key="' + esc(key) + '" placeholder="' + esc(ph) + '">' + esc(v) + '</textarea><div class="saved" data-for="' + esc(key) + '">' + (v ? 'Saved' : '') + '</div>';
}
function bindNotes(){
  $all('textarea.notes').forEach(function(ta){
    var key = ta.getAttribute('data-key'), t = null;
    ta.addEventListener('input', function(){
      clearTimeout(t);
      var lab = $('.saved[data-for="' + key + '"]');
      if(lab) lab.textContent = 'Saving...';
      t = setTimeout(function(){
        S.notes[key] = {text: ta.value, t: now()};
        save();
        if(lab) lab.textContent = 'Saved ' + new Date().toLocaleTimeString();
      }, 600);
    });
  });
}

function vModuleQuiz(id){
  setNav('roadmap');
  var m = moduleById(id);
  if(!m){ return vNotFound(); }
  var items = [];
  m.lessons.forEach(function(l){ var L = C.lessons[l.id]; if(L && L.quiz) L.quiz.forEach(function(q, i){ items.push({id: qid(l.id, i), q: q}); }); });
  (m.quizExtra || []).forEach(function(q, i){ items.push({id: m.id + '-x' + (i + 1), q: q}); });
  var h = '<div class="wrap page"><p class="crumbs"><a href="#/m/' + m.id + '">Module ' + m.num + '. ' + esc(m.title) + '</a></p><h1 class="big">Module ' + m.num + ' quiz</h1>';
  h += '<p class="lede">' + items.length + ' questions in random order. Results feed your review queue.</p><div id="mq"></div></div>';
  view.innerHTML = h;
  if(!items.length){ $('#mq').innerHTML = '<p class="muted">No published lessons in this module yet.</p>'; return; }
  mountQuiz($('#mq'), shuffle(items), {title: 'Module ' + m.num});
}

function vReview(){
  setNav('review');
  var due = dueQuestions();
  var seen = Object.keys(S.quiz).length;
  var h = '<div class="wrap page"><p class="eyebrow">Spaced repetition</p><h1 class="big">Review</h1>';
  h += '<p class="lede">Questions come back on a schedule: missed ones the next day, correct ones after 3, 7, 16 and 35 days.</p>';
  h += '<dl class="stats"><div><dt>Due now</dt><dd>' + due.length + '</dd></div><div><dt>In rotation</dt><dd>' + seen + '</dd></div><div><dt>Mastered</dt><dd>' + Object.keys(S.quiz).filter(function(k){ return S.quiz[k].box >= 4; }).length + '<small>box 4 or 5</small></dd></div></dl>';
  h += '<div id="rv"></div></div>';
  view.innerHTML = h;
  var host = $('#rv');
  if(due.length){
    mountQuiz(host, shuffle(due).slice(0, 15), {title: 'Review', onDone: function(){ updateChrome(); }});
  } else {
    var pool = questionPool(function(it){ return isDone(it.lesson) || S.quiz[it.id]; });
    host.innerHTML = '<div class="card"><h3>Nothing is due.</h3><p class="muted">' + (pool.length ? 'You can run a mixed practice set from lessons you have covered. Practice answers still update the schedule.' : 'Complete a lesson and its knowledge check to start your review queue.') + '</p>' + (pool.length ? '<div class="btnrow"><button class="btn" id="mix">Mixed practice (10)</button></div>' : '') + '</div>';
    var mx = $('#mix');
    if(mx) mx.addEventListener('click', function(){ mountQuiz(host, shuffle(pool).slice(0, 10), {title: 'Mixed practice', onDone: function(){ updateChrome(); }}); });
  }
}

function vDiagnostic(){
  setNav('home');
  var D = C.diagnostic;
  var h = '<div class="wrap page"><p class="eyebrow">Baseline</p><h1 class="big">Diagnostic</h1>';
  h += '<p class="lede">' + D.intro + '</p>';
  if(S.diag.length){
    h += '<h2>History</h2><div class="tablewrap"><table class="map"><tr><th>Date</th><th>Score</th>' + D.pillars.map(function(p){ return '<th>' + esc(p.short) + '</th>'; }).join('') + '</tr>';
    S.diag.slice().reverse().forEach(function(d){
      h += '<tr><td>' + new Date(d.t).toLocaleDateString() + '</td><td class="mono">' + d.score + '%</td>' + D.pillars.map(function(p){ var v = d.by[p.id]; return '<td class="mono">' + (v == null ? '-' : v + '%') + '</td>'; }).join('') + '</tr>';
    });
    h += '</table></div>';
  }
  h += '<div class="btnrow"><button class="btn" id="startdiag">' + (S.diag.length ? 'Retake the diagnostic' : 'Start') + '</button></div><div id="dg"></div></div>';
  view.innerHTML = h;
  $('#startdiag').addEventListener('click', function(){
    this.hidden = true;
    var items = shuffle(D.questions).map(function(q, i){ return {id: 'diag-' + i, q: q, tag: q.p}; });
    mountQuiz($('#dg'), items, {title: 'Diagnostic', track: false, onDone: function(score, results, host){
      var by = {}, tot = {};
      results.forEach(function(r){ tot[r.tag] = (tot[r.tag] || 0) + 1; by[r.tag] = (by[r.tag] || 0) + (r.ok ? 1 : 0); });
      var rec = {t: now(), score: pct(score, items.length), by: {}};
      D.pillars.forEach(function(p){ if(tot[p.id]) rec.by[p.id] = pct(by[p.id], tot[p.id]); });
      S.diag.push(rec); save();
      var h2 = '<div class="card"><h3>By pillar</h3><div class="pillars">';
      D.pillars.forEach(function(p){ var v = rec.by[p.id] || 0; h2 += '<div class="pr"><span>' + esc(p.name) + '</span><div class="bar"><i style="width:' + v + '%"></i></div><span class="mono">' + v + '%</span></div>'; });
      h2 += '</div><p class="muted small">' + D.after + '</p></div>';
      host.insertAdjacentHTML('beforeend', h2);
    }});
  });
}

function vGlossary(){
  setNav('glossary');
  var terms = [];
  Object.keys(C.lessons).forEach(function(lid){ (C.lessons[lid].terms || []).forEach(function(t){ terms.push({t: t[0], d: t[1], l: lid}); }); });
  terms.sort(function(a, b){ return a.t.toLowerCase().localeCompare(b.t.toLowerCase()); });
  var h = '<div class="wrap page"><p class="eyebrow">Reference</p><h1 class="big">Glossary</h1><p class="lede">' + terms.length + ' terms from all lessons, searchable.</p>';
  h += '<input class="search" id="gq" type="search" placeholder="Search terms and definitions"><dl id="gl"></dl></div>';
  view.innerHTML = h;
  function draw(q){
    q = (q || '').toLowerCase();
    $('#gl').innerHTML = terms.filter(function(x){ return !q || (x.t + ' ' + x.d).toLowerCase().indexOf(q) > -1; }).map(function(x){
      var ls = lessonStub(x.l);
      return '<div class="gl"><dt>' + esc(x.t) + '</dt><dd>' + x.d + ' <a class="src" href="#/l/' + x.l + '">' + ls.m.num + '.' + (ls.i + 1) + '</a></dd></div>';
    }).join('') || '<p class="muted">No matches.</p>';
  }
  draw('');
  $('#gq').addEventListener('input', function(){ draw(this.value); });
}

function vLibrary(){
  setNav('library');
  var h = '<div class="wrap page"><p class="eyebrow">Library</p><h1 class="big">Reading and resources</h1>';
  h += '<p class="lede">' + C.library.intro + '</p>';
  C.library.groups.forEach(function(g){
    h += '<h2>' + esc(g.title) + '</h2>' + (g.note ? '<p class="muted">' + g.note + '</p>' : '') + '<ul class="lessons">';
    g.items.forEach(function(r){
      var id = 'lib:' + r.title, on = !!(S.read[id] && S.read[id].done);
      h += '<li><div class="stub"><button class="check' + (on ? ' on' : '') + '" data-id="' + esc(id) + '" aria-label="Mark read" style="cursor:pointer;background:' + (on ? '' : 'transparent') + '">' + (on ? '&#10003;' : '') + '</button><span><span class="lt">' + (r.url ? '<a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.title) + '</a>' : esc(r.title)) + '</span>' + (r.by ? ' <span class="faint">// ' + esc(r.by) + '</span>' : '') + (r.when ? ' <span class="pill">' + esc(r.when) + '</span>' : '') + '<p class="ls">' + r.note + '</p></span></div></li>';
    });
    h += '</ul>';
  });
  h += '</div>';
  view.innerHTML = h;
  $all('button.check').forEach(function(b){
    b.addEventListener('click', function(){
      var id = b.getAttribute('data-id');
      S.read[id] = {done: !(S.read[id] && S.read[id].done), t: now()};
      save(); vLibrary();
    });
  });
}

function vRole(){
  setNav('role');
  view.innerHTML = '<div class="wrap page"><div class="prose" style="max-width:780px">' + C.role + '</div></div>';
}

function vSettings(){
  setNav('settings');
  var c = Sync.cfg;
  var h = '<div class="wrap page"><p class="eyebrow">Settings</p><h1 class="big">Sync across devices</h1>';
  h += '<p class="lede">This site is static, so progress lives in your browser. To follow you between phone and computer, it saves a copy to a private GitHub Gist in your account using a token that can only touch gists.</p>';
  h += '<div class="card"><h3>Status</h3><p id="syncmsg">' + esc(Sync.msg) + '</p>';
  if(Sync.on()){
    h += '<p class="kv">Gist: ' + esc(c.gistId || 'will be created on first sync') + '</p><div class="btnrow"><button class="btn" id="syncnow">Sync now</button><button class="btn danger" id="disconnect">Disconnect this device</button></div>';
  } else {
    h += '<div class="field"><label for="tok">GitHub token</label><input id="tok" type="password" autocomplete="off" placeholder="github_pat_... or ghp_..."></div><div class="btnrow"><button class="btn" id="connect">Connect</button></div>';
  }
  h += '</div>';
  h += '<h2>One-time setup</h2><div class="prose"><ol>';
  h += '<li>On GitHub, open <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener">Settings, Developer settings, Fine-grained tokens, Generate new token</a>.</li>';
  h += '<li>Name it "Exit planning sync". Set an expiration you are comfortable with (you can paste a new token later with no data loss).</li>';
  h += '<li>Repository access: <b>Public repositories</b> (the token needs no repository rights). Under <b>Account permissions</b>, set <b>Gists</b> to <b>Read and write</b>. Leave everything else at No access.</li>';
  h += '<li>Generate, copy the token, paste it above on each device, and press Connect. The first device creates a private gist; the others find it automatically.</li>';
  h += '</ol><p class="small muted">A classic token with only the <span class="mono">gist</span> scope also works. The token stays in this browser\'s local storage and is sent only to api.github.com. Anyone with that token could read or edit your gists, so only paste it on your own devices.</p></div>';
  h += '<h2>Backup</h2><p class="muted">Download a copy of your progress, or restore one. Restoring merges with what is here.</p><div class="btnrow"><button class="btn ghost" id="exp">Export progress</button><label class="btn ghost" style="cursor:pointer">Import progress<input type="file" id="imp" accept="application/json" hidden></label></div>';
  h += '<h2>Appearance</h2><div class="btnrow"><button class="btn ghost" data-theme-set="">Match system</button><button class="btn ghost" data-theme-set="light">Light</button><button class="btn ghost" data-theme-set="dark">Dark</button></div>';
  h += '<h2>Reset</h2><p class="muted">Clears progress on this device. If sync is connected, the gist copy remains and will merge back on the next sync; disconnect first for a true reset.</p><div class="btnrow"><button class="btn danger" id="reset">Reset this device</button></div></div>';
  view.innerHTML = h;
  Sync.set(Sync.status, Sync.msg);
  var cn = $('#connect');
  if(cn) cn.addEventListener('click', function(){
    var t = $('#tok').value.trim();
    if(!t){ return; }
    Sync.cfg = {token: t}; writeJSON(SYNC_KEY, Sync.cfg);
    Sync.run().then(vSettings);
  });
  var sn = $('#syncnow'); if(sn) sn.addEventListener('click', function(){ Sync.run(); });
  var dc = $('#disconnect'); if(dc) dc.addEventListener('click', function(){
    if(!confirm('Remove the token from this device? Your progress stays here and in the gist.')) return;
    Sync.cfg = {}; writeJSON(SYNC_KEY, {}); Sync.set('off', 'Not connected. Progress is saved on this device only.'); vSettings();
  });
  $('#exp').addEventListener('click', function(){
    var blob = new Blob([JSON.stringify(S, null, 1)], {type: 'application/json'});
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'exit-planning-progress.json'; a.click();
    setTimeout(function(){ URL.revokeObjectURL(a.href); }, 2000);
  });
  $('#imp').addEventListener('change', function(){
    var f = this.files[0]; if(!f) return;
    var rd = new FileReader();
    rd.onload = function(){ try{ S = merge(S, JSON.parse(rd.result)); save(); alert('Imported and merged.'); vSettings(); }catch(e){ alert('That file could not be read.'); } };
    rd.readAsText(f);
  });
  function markTheme(){
    var cur = document.documentElement.getAttribute('data-theme') || '';
    $all('[data-theme-set]').forEach(function(x){ x.setAttribute('aria-pressed', x.getAttribute('data-theme-set') === cur ? 'true' : 'false'); });
  }
  $all('[data-theme-set]').forEach(function(b){ b.addEventListener('click', function(){
    var v = b.getAttribute('data-theme-set');
    if(v) document.documentElement.setAttribute('data-theme', v); else document.documentElement.removeAttribute('data-theme');
    try{ localStorage.setItem('fbe.theme', v); }catch(e){}
    markTheme();
  }); });
  markTheme();
  $('#reset').addEventListener('click', function(){
    if(!confirm('Clear all progress, quiz history and notes on this device?')) return;
    S = blankState(); writeJSON(STATE_KEY, S); updateChrome(); vSettings();
  });
}

function vNotFound(){
  view.innerHTML = '<div class="wrap page"><h1 class="big">Not found</h1><p class="lede">That page is not published yet.</p><a class="btn" href="#/">Home</a></div>';
}


/* ================= saved passages ================= */
var UNCAT = '_none';
function uid(p){ return p + now().toString(36) + Math.random().toString(36).slice(2, 7); }
function squash(s){ return String(s || '').replace(/\s+/g, ''); }
function normText(s){ return String(s || '').replace(/\s+/g, ' ').trim(); }
function liveCats(){
  return Object.keys(S.cats).filter(function(id){ return S.cats[id] && !S.cats[id].deleted; })
    .map(function(id){ return {id: id, name: S.cats[id].name}; })
    .sort(function(a, b){ return a.name.toLowerCase().localeCompare(b.name.toLowerCase()); });
}
function liveClips(){
  return Object.keys(S.clips).map(function(id){ var c = S.clips[id]; if(!c || c.deleted) return null; var o = {id: id}; for(var k in c) o[k] = c[k]; return o; })
    .filter(Boolean).sort(function(a, b){ return (b.created || 0) - (a.created || 0); });
}
function catOf(c){ return (c.cat && S.cats[c.cat] && !S.cats[c.cat].deleted) ? c.cat : UNCAT; }
function catName(id){ return id === UNCAT ? 'Uncategorized' : (S.cats[id] ? S.cats[id].name : 'Uncategorized'); }
function lessonLabel(lid){ var ls = lessonStub(lid); return ls ? 'Lesson ' + ls.m.num + '.' + (ls.i + 1) + ': ' + ls.stub.title : lid; }
function lessonShort(lid){ var ls = lessonStub(lid); return ls ? 'Lesson ' + ls.m.num + '.' + (ls.i + 1) : lid; }
function fmtDate(t){ try{ return new Date(t).toLocaleDateString(undefined, {year: 'numeric', month: 'short', day: 'numeric'}); }catch(e){ return ''; } }
function findCatByName(name){ var n = name.trim().toLowerCase(); var hit = liveCats().filter(function(c){ return c.name.toLowerCase() === n; })[0]; return hit ? hit.id : null; }
function makeCat(name){
  name = normText(name).slice(0, 60);
  if(!name) return null;
  var ex = findCatByName(name); if(ex) return ex;
  var id = uid('k'); S.cats[id] = {name: name, created: now(), t: now()}; return id;
}

/* toast */
var toastTimer = null;
function toast(html){
  var el = document.getElementById('toast');
  if(!el){ el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
  el.innerHTML = html; el.hidden = false; el.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(function(){ el.classList.remove('show'); setTimeout(function(){ el.hidden = true; }, 250); }, 3200);
}

/* clipboard with fallbacks */
function copyText(t){
  var fallback = function(){
    var ta = document.createElement('textarea');
    ta.value = t; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.top = '0'; ta.style.left = '0'; ta.style.opacity = '0'; ta.style.fontSize = '16px';
    document.body.appendChild(ta); ta.focus(); ta.select(); try{ ta.setSelectionRange(0, t.length); }catch(e){}
    var ok = false; try{ ok = document.execCommand('copy'); }catch(e){}
    document.body.removeChild(ta);
    if(!ok) throw new Error('copy failed');
  };
  if(navigator.clipboard && window.isSecureContext){ return navigator.clipboard.writeText(t).catch(function(){ fallback(); }); }
  return new Promise(function(res){ fallback(); res(); });
}
function copyOrShow(t, label){
  copyText(t).then(function(){ toast(esc(label) + ' copied. Paste it into Claude or your AI chat.'); })
  .catch(function(){ openSheet('<h3>Copy for AI</h3><p class="small muted">Automatic copy was blocked by this browser. Select the text below and copy it.</p><textarea class="notes" style="min-height:260px" readonly>' + esc(t) + '</textarea><div class="btnrow"><button class="btn" data-close>Done</button></div>', function(sh){ var ta = $('textarea', sh); ta.focus(); ta.select(); }); });
}
var AI_INTRO = 'I am studying exit planning, succession planning, business valuation, and family business advisory. I am preparing for a Family Business & Entrepreneurs Advisor role at a bank and for the CEPA (Certified Exit Planning Advisor) credential. Below are passages I saved from my study program';
var AI_ASK = ['Please:', '1. Summarize the key concepts in plain language.', '2. Explain how the passages connect to each other and to exit planning practice, including the Exit Planning Institute\'s Value Acceleration Methodology where relevant.', '3. Point out anything that seems incomplete, outdated, or worth verifying.', '4. Write 5 review questions with answers based on these passages.'];
function clipLines(list){
  var out = [];
  list.forEach(function(c, i){ out.push((i + 1) + '. "' + c.text + '"'); out.push('   Source: ' + lessonLabel(c.lesson)); if(c.note) out.push('   My note: ' + c.note); out.push(''); });
  return out;
}
function aiTextForCat(name, list){
  return [AI_INTRO + ', in the category "' + name + '".', ''].concat(AI_ASK, ['', 'Saved passages:', ''], clipLines(list)).join('\n').trim();
}
function aiTextAll(groups){
  var out = [AI_INTRO + ', grouped by category.', ''].concat(AI_ASK.slice(0, 1), ['1. For each category, summarize the key concepts in plain language.'], AI_ASK.slice(2), ['']);
  groups.forEach(function(g){ out.push('## ' + g.name); out.push(''); out = out.concat(clipLines(g.clips)); });
  return out.join('\n').trim();
}

/* modal sheet */
function closeSheet(){
  var bd = document.querySelector('.sheet-backdrop'); if(bd) bd.parentNode.removeChild(bd);
  document.body.classList.remove('sheet-open');
  if(closeSheet.restore){ try{ closeSheet.restore.focus(); }catch(e){} closeSheet.restore = null; }
}
function openSheet(inner, onOpen){
  closeSheet();
  closeSheet.restore = document.activeElement;
  var bd = document.createElement('div'); bd.className = 'sheet-backdrop';
  bd.innerHTML = '<div class="sheet" role="dialog" aria-modal="true">' + inner + '</div>';
  document.body.appendChild(bd); document.body.classList.add('sheet-open');
  var sh = $('.sheet', bd);
  bd.addEventListener('mousedown', function(e){ if(e.target === bd) closeSheet(); });
  $all('[data-close]', sh).forEach(function(b){ b.addEventListener('click', closeSheet); });
  sh.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ e.preventDefault(); closeSheet(); } });
  if(onOpen) onOpen(sh);
  return sh;
}

/* save sheet */
function openSaveSheet(p){
  var cats = liveCats(), last = null;
  try{ last = localStorage.getItem('fbe.lastCat'); }catch(e){}
  if(!last || !S.cats[last] || S.cats[last].deleted) last = cats.length ? cats[0].id : '';
  var h = '<h3>Save passage</h3>';
  h += '<blockquote class="sheet-quote">' + esc(p.text) + '</blockquote>';
  h += '<p class="small faint" style="margin:-4px 0 14px">' + esc(lessonLabel(p.lesson)) + '</p>';
  h += '<p class="flabel">Category</p><div class="chips" role="radiogroup" aria-label="Category">';
  cats.forEach(function(c){ h += '<button type="button" class="chip" role="radio" data-cat="' + c.id + '" aria-checked="' + (c.id === last) + '">' + esc(c.name) + '</button>'; });
  h += '<button type="button" class="chip chip-new" role="radio" data-cat="__new" aria-checked="' + (!cats.length) + '">+ New category</button></div>';
  h += '<div class="field newcat"' + (cats.length ? ' hidden' : '') + '><input id="newcat" type="text" maxlength="60" placeholder="Category name, for example Valuation" autocomplete="off" enterkeyhint="done"></div>';
  h += '<div class="field"><label for="clipnote" class="flabel">Note <span class="faint">(optional)</span></label><input id="clipnote" type="text" maxlength="200" placeholder="Why this matters, or what to remember" autocomplete="off" enterkeyhint="done"></div>';
  h += '<p class="sheet-err" id="sheeterr" role="alert"></p>';
  h += '<div class="btnrow sheet-actions"><button type="button" class="btn ghost" data-close>Cancel</button><button type="button" class="btn" id="dosave">Save</button></div>';
  openSheet(h, function(sh){
    var chosen = cats.length ? last : '__new';
    var newWrap = $('.newcat', sh), newIn = $('#newcat', sh);
    $all('.chip', sh).forEach(function(ch){ ch.addEventListener('click', function(){
      chosen = ch.getAttribute('data-cat');
      $all('.chip', sh).forEach(function(x){ x.setAttribute('aria-checked', x === ch ? 'true' : 'false'); });
      newWrap.hidden = chosen !== '__new';
      if(chosen === '__new') newIn.focus();
    }); });
    var doSave = function(){
      var catId = chosen;
      if(chosen === '__new'){
        if(!normText(newIn.value)){ $('#sheeterr', sh).textContent = 'Enter a name for the new category.'; newIn.focus(); return; }
        catId = makeCat(newIn.value);
      }
      var id = uid('c');
      S.clips[id] = {text: p.text, lesson: p.lesson, cat: catId, note: normText($('#clipnote', sh).value).slice(0, 200), created: now(), t: now()};
      try{ localStorage.setItem('fbe.lastCat', catId); }catch(e){}
      save(); closeSheet();
      try{ window.getSelection().removeAllRanges(); }catch(e){}
      toast('Saved to <b>' + esc(catName(catId)) + '</b>. <a href="#/saved">View saved</a>');
    };
    $('#dosave', sh).addEventListener('click', doSave);
    [newIn, $('#clipnote', sh)].forEach(function(inp){ inp.addEventListener('keydown', function(e){ if(e.key === 'Enter'){ e.preventDefault(); doSave(); } }); });
    if(!cats.length) newIn.focus(); else $('#dosave', sh).focus();
  });
}

/* selection -> floating save button */
var selBtn = null, pending = null, selTimer = null, pressing = false, suppressSel = 0;
function hideSelBtn(){ if(selBtn) selBtn.hidden = true; }
function ensureSelBtn(){
  if(selBtn) return selBtn;
  selBtn = document.createElement('button');
  selBtn.type = 'button'; selBtn.className = 'selsave'; selBtn.hidden = true;
  selBtn.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4.5L5 21V4a1 1 0 0 1 1-1z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg><span>Save selection</span>';
  var press = function(){ pressing = true; setTimeout(function(){ pressing = false; }, 900); };
  selBtn.addEventListener('pointerdown', press);
  selBtn.addEventListener('touchstart', press, {passive: true});
  selBtn.addEventListener('mousedown', function(e){ e.preventDefault(); });
  selBtn.addEventListener('click', function(){ var p = pending; hideSelBtn(); if(p) openSaveSheet(p); });
  document.body.appendChild(selBtn);
  return selBtn;
}
function checkSelection(){
  if(now() < suppressSel || document.querySelector('.sheet')) return;
  var sel = window.getSelection ? window.getSelection() : null;
  if(!sel || sel.isCollapsed || !sel.rangeCount){ if(!pressing){ hideSelBtn(); pending = null; } return; }
  var text = normText(sel.toString());
  var range = sel.getRangeAt(0);
  var node = range.commonAncestorContainer; if(node && node.nodeType !== 1) node = node.parentNode;
  if(!node || !node.closest){ hideSelBtn(); return; }
  var page = node.closest('[data-lesson]');
  if(!page || text.length < 3 || node.closest('textarea, input, button, .quiz, .completebar, .pager')){ hideSelBtn(); return; }
  pending = {text: text.slice(0, 3000), lesson: page.getAttribute('data-lesson')};
  var rects = range.getClientRects();
  var r = rects.length ? rects[rects.length - 1] : range.getBoundingClientRect();
  var b = ensureSelBtn(); b.hidden = false;
  var bw = b.offsetWidth || 84, vw = document.documentElement.clientWidth;
  var coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  if(coarse){ b.classList.add('docked'); b.style.left = ''; b.style.top = ''; return; }
  b.classList.remove('docked');
  var left = Math.max(8, Math.min(r.left + r.width / 2 - bw / 2, vw - bw - 8)) + window.pageXOffset;
  var top = r.bottom + window.pageYOffset + 10;
  b.style.left = left + 'px'; b.style.top = top + 'px';
}
document.addEventListener('selectionchange', function(){ clearTimeout(selTimer); selTimer = setTimeout(checkSelection, 220); });
document.addEventListener('mouseup', function(){ clearTimeout(selTimer); selTimer = setTimeout(checkSelection, 20); });
document.addEventListener('keyup', function(e){ if(e.shiftKey){ clearTimeout(selTimer); selTimer = setTimeout(checkSelection, 60); } });
window.addEventListener('resize', function(){ if(selBtn && !selBtn.hidden) checkSelection(); });

/* jump to a saved passage in its lesson */
function findTextRange(root, text){
  var target = squash(text); if(!target) return null;
  var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  var full = '', map = [], n;
  while((n = walker.nextNode())){
    var v = n.nodeValue;
    for(var i = 0; i < v.length; i++){ if(!/\s/.test(v[i])){ full += v[i]; map.push([n, i]); } }
  }
  var idx = full.indexOf(target);
  if(idx < 0) idx = full.toLowerCase().indexOf(target.toLowerCase());
  if(idx < 0) return null;
  var a = map[idx], z = map[idx + target.length - 1];
  var rg = document.createRange(); rg.setStart(a[0], a[1]); rg.setEnd(z[0], z[1] + 1);
  return rg;
}
function jumpToClip(){
  var parts = location.hash.replace(/^#\/?/, '').split('/');
  if(parts[0] !== 'l' || !parts[2]) return;
  var c = S.clips[parts[2]]; if(!c || c.deleted) return;
  setTimeout(function(){
    var page = document.querySelector('[data-lesson]'); if(!page) return;
    var rg = findTextRange(page, c.text);
    if(!rg){ toast('That passage could not be found. The lesson text may have changed since you saved it.'); return; }
    var rect = rg.getBoundingClientRect();
    window.scrollTo(0, Math.max(0, rect.top + window.pageYOffset - 140));
    if(window.CSS && CSS.highlights && window.Highlight){
      CSS.highlights.set('savedflash', new Highlight(rg));
      setTimeout(function(){ try{ CSS.highlights.delete('savedflash'); }catch(e){} }, 6000);
    } else {
      suppressSel = now() + 1500;
      var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(rg);
    }
  }, 80);
}

/* saved page */
var savedQuery = '';
function vSaved(){
  setNav('saved');
  var clips = liveClips(), cats = liveCats();
  var open = readJSON('fbe.savedOpen', {}), more = vSaved.more || (vSaved.more = {});
  var q = savedQuery.toLowerCase();
  var groups = cats.map(function(c){ return {id: c.id, name: c.name, clips: []}; });
  var byId = {}; groups.forEach(function(g){ byId[g.id] = g; });
  var unc = {id: UNCAT, name: 'Uncategorized', clips: []};
  clips.forEach(function(c){ var g = byId[catOf(c)] || unc; g.clips.push(c); });
  if(unc.clips.length) groups.push(unc);
  var h = '<div class="wrap page"><p class="eyebrow">Saved passages</p><h1 class="big">Saved</h1>';
  h += '<p class="lede">' + (clips.length ? clips.length + ' passage' + (clips.length === 1 ? '' : 's') + ' in ' + groups.length + ' categor' + (groups.length === 1 ? 'y' : 'ies') + '.' : 'Nothing saved yet.') + ' Select any text in a lesson and choose Save to add it here.</p>';
  if(!clips.length && !cats.length){
    h += '<div class="card"><h3>How to save a passage</h3><ol class="muted"><li>Open any lesson.</li><li>Select text by dragging with a mouse, or by pressing and holding on a phone and adjusting the handles.</li><li>Tap the <b>Save</b> button that appears below the selection.</li><li>Choose or create a category, add a note if you like, and save.</li></ol></div></div>';
    view.innerHTML = h; return;
  }
  h += '<div class="savedbar"><input class="search" id="sq" type="search" placeholder="Search saved passages and notes" value="' + esc(savedQuery) + '">';
  h += '<div class="btnrow" style="margin:0"><button class="btn ghost" id="copyall"' + (clips.length ? '' : ' disabled') + '>Copy all for AI</button><button class="btn ghost" id="newcatbtn">New category</button><button class="btn ghost" id="toggleall">Expand all</button></div></div>';
  var anyShown = false;
  groups.forEach(function(g){
    var shown = g.clips.filter(function(c){ return !q || (c.text + ' ' + (c.note || '') + ' ' + lessonLabel(c.lesson) + ' ' + g.name).toLowerCase().indexOf(q) > -1; });
    if(q && !shown.length) return;
    anyShown = true;
    var isOpen = q ? true : !!open[g.id];
    h += '<section class="catgrp' + (isOpen ? ' open' : '') + '" data-g="' + g.id + '">';
    h += '<button class="cathead" aria-expanded="' + isOpen + '" data-toggle="' + g.id + '"><span class="chev" aria-hidden="true"></span><span class="catname">' + esc(g.name) + '</span><span class="count">' + (q ? shown.length + ' of ' : '') + g.clips.length + '</span></button>';
    h += '<div class="catbody"' + (isOpen ? '' : ' hidden') + '>';
    h += '<div class="catactions"><button class="linkbtn" data-copy="' + g.id + '"' + (g.clips.length ? '' : ' disabled') + '>Copy for AI</button>';
    if(g.id !== UNCAT) h += '<button class="linkbtn" data-rename="' + g.id + '">Rename</button><button class="linkbtn danger" data-delcat="' + g.id + '">Delete category</button>';
    h += '</div>';
    if(!shown.length) h += '<p class="small faint" style="padding:6px 0 10px">No passages in this category yet.</p>';
    h += '<ul class="cliplist">';
    shown.forEach(function(c){
      var m = !!more[c.id];
      h += '<li class="clip' + (m ? ' expanded' : '') + '" data-clip="' + c.id + '">';
      h += '<blockquote class="cliptext">' + esc(c.text) + '</blockquote>';
      h += '<div class="clipmeta"><span>' + esc(lessonShort(c.lesson)) + (c.note ? ' &middot; has note' : '') + '</span><button class="linkbtn" data-more="' + c.id + '" aria-expanded="' + m + '">' + (m ? 'Less' : 'More') + '</button></div>';
      if(m){
        h += '<div class="clipmore">';
        h += '<dl><div><dt>Note</dt><dd>' + (c.note ? esc(c.note) : '<span class="faint">No note</span>') + ' <button class="linkbtn" data-note="' + c.id + '">' + (c.note ? 'Edit' : 'Add') + '</button></dd></div>';
        h += '<div><dt>Saved</dt><dd>' + esc(fmtDate(c.created)) + '</dd></div>';
        h += '<div><dt>Source</dt><dd><a href="#/l/' + esc(c.lesson) + '/' + c.id + '">' + esc(lessonLabel(c.lesson)) + '</a></dd></div>';
        h += '<div><dt>Category</dt><dd><select class="movesel" data-move="' + c.id + '" aria-label="Move to category">';
        cats.forEach(function(k){ h += '<option value="' + k.id + '"' + (catOf(c) === k.id ? ' selected' : '') + '>' + esc(k.name) + '</option>'; });
        h += '<option value="' + UNCAT + '"' + (catOf(c) === UNCAT ? ' selected' : '') + '>Uncategorized</option></select></dd></div></dl>';
        h += '<div class="btnrow" style="margin:10px 0 0"><a class="btn ghost" href="#/l/' + esc(c.lesson) + '/' + c.id + '">Go to passage</a><button class="btn danger" data-delclip="' + c.id + '">Delete</button></div>';
        h += '</div>';
      }
      h += '</li>';
    });
    h += '</ul></div></section>';
  });
  if(!anyShown) h += '<p class="muted">No saved passages match "' + esc(savedQuery) + '".</p>';
  h += '</div>';
  var y = window.pageYOffset;
  view.innerHTML = h;
  if(vSaved.keepScroll){ window.scrollTo(0, y); vSaved.keepScroll = false; }
  var redraw = function(){ vSaved.keepScroll = true; vSaved(); };
  var sq = $('#sq');
  if(sq){ sq.addEventListener('input', function(){ savedQuery = sq.value; var pos = sq.selectionStart; redraw(); var n = $('#sq'); if(n){ n.focus(); try{ n.setSelectionRange(pos, pos); }catch(e){} } }); }
  $all('[data-toggle]').forEach(function(b){ b.addEventListener('click', function(){ var id = b.getAttribute('data-toggle'); var o = readJSON('fbe.savedOpen', {}); o[id] = !o[id]; writeJSON('fbe.savedOpen', o); redraw(); }); });
  var tg = $('#toggleall');
  if(tg){
    var allOpen = groups.length && groups.every(function(g){ return open[g.id]; });
    tg.textContent = allOpen ? 'Collapse all' : 'Expand all';
    tg.addEventListener('click', function(){ var o = {}; groups.forEach(function(g){ o[g.id] = !allOpen; }); writeJSON('fbe.savedOpen', o); redraw(); });
  }
  $all('[data-more]').forEach(function(b){ b.addEventListener('click', function(){ var id = b.getAttribute('data-more'); more[id] = !more[id]; redraw(); }); });
  $all('[data-copy]').forEach(function(b){ b.addEventListener('click', function(){ var g = groups.filter(function(x){ return x.id === b.getAttribute('data-copy'); })[0]; if(g && g.clips.length) copyOrShow(aiTextForCat(g.name, g.clips), '"' + g.name + '"'); }); });
  var ca = $('#copyall'); if(ca) ca.addEventListener('click', function(){ copyOrShow(aiTextAll(groups.filter(function(g){ return g.clips.length; })), 'All saved passages'); });
  var nc = $('#newcatbtn'); if(nc) nc.addEventListener('click', function(){ var n = window.prompt('New category name'); if(n && normText(n)){ var id = makeCat(n); var o = readJSON('fbe.savedOpen', {}); o[id] = true; writeJSON('fbe.savedOpen', o); save(); redraw(); } });
  $all('[data-rename]').forEach(function(b){ b.addEventListener('click', function(){
    var id = b.getAttribute('data-rename'); var n = window.prompt('Rename category', S.cats[id].name);
    if(!n || !normText(n)) return;
    var ex = findCatByName(n);
    if(ex && ex !== id){
      if(!window.confirm('A category named "' + S.cats[ex].name + '" already exists. Merge "' + S.cats[id].name + '" into it?')) return;
      liveClips().forEach(function(c){ if(catOf(c) === id){ S.clips[c.id].cat = ex; S.clips[c.id].t = now(); } });
      S.cats[id] = {name: S.cats[id].name, deleted: true, t: now()};
    } else { S.cats[id] = {name: normText(n).slice(0, 60), created: S.cats[id].created, t: now()}; }
    save(); redraw();
  }); });
  $all('[data-delcat]').forEach(function(b){ b.addEventListener('click', function(){
    var id = b.getAttribute('data-delcat'); var g = byId[id]; var cnt = g ? g.clips.length : 0;
    if(!window.confirm('Delete the category "' + S.cats[id].name + '"?' + (cnt ? ' Its ' + cnt + ' passage' + (cnt === 1 ? '' : 's') + ' will move to Uncategorized.' : ''))) return;
    liveClips().forEach(function(c){ if(catOf(c) === id){ S.clips[c.id].cat = null; S.clips[c.id].t = now(); } });
    S.cats[id] = {name: S.cats[id].name, deleted: true, t: now()};
    save(); redraw();
  }); });
  $all('[data-note]').forEach(function(b){ b.addEventListener('click', function(){
    var id = b.getAttribute('data-note'); var n = window.prompt('Note (leave blank to remove)', S.clips[id].note || '');
    if(n === null) return;
    S.clips[id].note = normText(n).slice(0, 200); S.clips[id].t = now(); save(); redraw();
  }); });
  $all('[data-move]').forEach(function(sel){ sel.addEventListener('change', function(){
    var id = sel.getAttribute('data-move'); var v = sel.value;
    S.clips[id].cat = v === UNCAT ? null : v; S.clips[id].t = now(); save();
    toast('Moved to <b>' + esc(catName(v)) + '</b>.'); redraw();
  }); });
  $all('[data-delclip]').forEach(function(b){ b.addEventListener('click', function(){
    var id = b.getAttribute('data-delclip');
    if(!window.confirm('Delete this saved passage?')) return;
    S.clips[id] = {deleted: true, t: now()}; save(); redraw();
  }); });
}

/* ================= router ================= */
function route(){
  var h = location.hash.replace(/^#\/?/, '');
  var parts = h.split('/');
  var r = parts[0], a = parts[1];
  if(!r) vHome();
  else if(r === 'roadmap') vRoadmap();
  else if(r === 'm') vModule(a);
  else if(r === 'l') vLesson(a, parts[2]);
  else if(r === 'quiz') vModuleQuiz(a);
  else if(r === 'review') vReview();
  else if(r === 'diagnostic') vDiagnostic();
  else if(r === 'glossary') vGlossary();
  else if(r === 'saved') vSaved();
  else if(r === 'library') vLibrary();
  else if(r === 'role') vRole();
  else if(r === 'settings') vSettings();
  else vNotFound();
  updateChrome();
}
function rerenderSoft(){
  // re-render after a sync merge unless the user is typing or mid-quiz
  var ae = document.activeElement;
  if(ae && (ae.tagName === 'TEXTAREA' || ae.tagName === 'INPUT')) return;
  if(document.querySelector('.quiz .opt:not(:disabled)') || document.querySelector('.quiz .nextq')) return;
  if(document.querySelector('.sheet')) return;
  route();
}
window.addEventListener('hashchange', function(){ hideSelBtn(); route(); window.scrollTo(0, 0); jumpToClip(); });

/* ================= boot ================= */
try{ var th = localStorage.getItem('fbe.theme'); if(th) document.documentElement.setAttribute('data-theme', th); }catch(e){}

var app = document.getElementById('app');
route();
jumpToClip();
if(Sync.on()) Sync.run(); else Sync.set('off', Sync.msg);
document.addEventListener('visibilitychange', function(){ if(!document.hidden && Sync.on()) Sync.run(); });
})();
