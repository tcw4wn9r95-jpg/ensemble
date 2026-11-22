/* Vivre Ensemble Prep — single-page app (no build step, GitHub Pages friendly) */
(() => {
  'use strict';

  const MODS = VE.modules;
  const modById = Object.fromEntries(MODS.map(m => [m.id, m]));
  const lessonIndex = {};
  MODS.forEach(m => m.lessons.forEach((l, i) => { lessonIndex[l.id] = { lesson: l, mod: m, idx: i }; }));
  const ALLQ = MODS.flatMap(m => m.questions);
  const qById = Object.fromEntries(ALLQ.map(q => [q.id, q]));
  const view = document.getElementById('view');
  const sheetRoot = document.getElementById('sheet-root');
  const LETTERS = 'ABCD';

  /* ---------- Storage ---------- */
  const KEY = 've-prep-v1';
  const RUN_KEY = 've-prep-exam-run';
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* private mode */ } },
    del(k) { try { localStorage.removeItem(k); } catch { } }
  };
  let S = Object.assign({ done: {}, q: {}, exams: [], days: [] }, store.get(KEY, {}));
  const save = () => store.set(KEY, S);

  function recordAnswer(qid, correct) {
    const r = S.q[qid] || { s: 0, c: 0, last: null };
    r.s++; if (correct) r.c++; r.last = correct ? 1 : 0;
    S.q[qid] = r;
    const today = new Date().toISOString().slice(0, 10);
    if (!S.days.includes(today)) { S.days.push(today); S.days = S.days.slice(-60); }
    save();
  }

  /* ---------- Helpers ---------- */
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const icon = (n, cls = '') => `<svg class="${cls}"><use href="#i-${n}"/></svg>`;
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
  const fmtTime = s => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  const fmtDate = t => new Date(t).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
  const haptic = (ms = 10) => { try { navigator.vibrate && navigator.vibrate(ms); } catch { } };

  function toast(msg) {
    const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg;
    document.body.appendChild(t); setTimeout(() => t.remove(), 2500);
  }

  function modStats(m) {
    const qs = m.questions;
    const mastered = qs.filter(q => S.q[q.id] && S.q[q.id].last === 1).length;
    const seen = qs.filter(q => S.q[q.id]).length;
    const lessonsDone = m.lessons.filter(l => S.done[l.id]).length;
    return { total: qs.length, mastered, seen, lessonsDone, lessons: m.lessons.length, mastery: pct(mastered, qs.length) };
  }
  function readiness() {
    // weighted by exam distribution: mastery 75%, lessons 25%
    let score = 0;
    MODS.forEach(m => {
      const st = modStats(m);
      const w = m.examQuestions / VE.exam.total;
      score += w * (0.75 * st.mastered / st.total + 0.25 * st.lessonsDone / st.lessons);
    });
    return Math.round(score * 100);
  }
  const mistakes = () => ALLQ.filter(q => S.q[q.id] && S.q[q.id].last === 0);

  /* Build a renderable question: shuffled options with correct index */
  function prep(q) {
    if (q.tf) return { q, opts: ['True', 'False'], correct: q.a ? 0 : 1, tf: true };
    const order = shuffle(q.o.map((t, i) => ({ t, i })));
    return { q, opts: order.map(o => o.t), correct: order.findIndex(o => o.i === 0), tf: false };
  }

  function ring(p, { size = 86, w = 9, c = '#fff', t = 'rgba(255,255,255,.25)', label = '', sub = '' } = {}) {
    return `<div class="ring-wrap" style="--size:${size}px"><div class="ring" style="--p:${p};--size:${size}px;--w:${w}px;--c:${c};--t:${t}"></div>
      <div class="ring-label" style="font-size:${size > 90 ? 24 : 19}px"><div>${label}${sub ? `<small>${sub}</small>` : ''}</div></div></div>`;
  }

  function navbar(title, back = '#/', right = '') {
    return `<div class="navbar"><div class="nb-left"><a class="nb-btn" href="${back}">${icon('back')}<span>Back</span></a></div>
      <div class="nb-title">${esc(title)}</div><div class="nb-right">${right}</div></div>`;
  }

  /* ---------- Router ---------- */
  let cleanup = null;
  const routes = [
    [/^\/?$/, home, 'home'],
    [/^\/learn$/, learn, 'learn'],
    [/^\/m\/(\w+)$/, moduleView, 'learn'],
    [/^\/l\/(\w+)$/, lessonView, 'learn'],
    [/^\/cards\/(\w+)$/, cardsView, 'learn', true],
    [/^\/practice$/, practiceHub, 'practice'],
    [/^\/quiz\/([\w-]+)$/, quizView, 'practice', true],
    [/^\/exam$/, examIntro, 'exam'],
    [/^\/exam\/run$/, examRun, 'exam', true],
    [/^\/exam\/result\/(\d+)$/, examResult, 'exam'],
    [/^\/progress$/, progressView, 'progress'],
    [/^\/info$/, infoView, 'home']
  ];
  function router() {
    if (cleanup) { cleanup(); cleanup = null; }
    closeSheet();
    const path = location.hash.replace(/^#/, '') || '/';
    for (const [re, fn, tab, hideTabs] of routes) {
      const m = path.match(re);
      if (m) {
        document.querySelectorAll('#tabbar a').forEach(a => a.classList.toggle('active', a.dataset.tab === tab));
        document.body.classList.toggle('no-tabs', !!hideTabs);
        view.style.animation = 'none'; void view.offsetWidth; view.style.animation = '';
        const out = fn(...m.slice(1));
        if (typeof out === 'string') view.innerHTML = out;
        window.scrollTo(0, 0);
        return;
      }
    }
    location.hash = '#/';
  }
  window.addEventListener('hashchange', router);

  /* ---------- Home ---------- */
  function home() {
    const r = readiness();
    const next = nextLesson();
    const hr = new Date().getHours();
    const greet = hr < 12 ? 'Moien! Good morning' : hr < 18 ? 'Moien! Good afternoon' : 'Moien! Good evening';
    const lastExam = S.exams[S.exams.length - 1];
    const mc = mistakes().length;
    return `
      <div class="hero">
        <div class="hi">${greet} 👋</div>
        <h1>Vivre ensemble<br>exam prep</h1>
        <div class="hero-body">
          ${ring(r, { label: r + '%', sub: 'READY' })}
          <div class="meta">${r < 30 ? 'Start with the lessons, then practise each module.' : r < 70 ? 'Good progress. Keep practising and try a mock exam.' : 'You look ready. Confirm it with a full mock exam!'}
            ${lastExam ? `<div style="margin-top:8px">Last mock: <b>${lastExam.score}/${lastExam.total}</b> ${lastExam.passed ? '✅' : '❌'}</div>` : ''}</div>
        </div>
        <a class="btn" href="#/exam">${icon('exam')} Take a full mock exam</a>
      </div>

      ${next ? `<a class="mod-card acc-${next.mod.accent}" href="#/l/${next.lesson.id}">
        <div class="badge grad">${icon('book')}</div>
        <div class="body"><div class="k">Continue learning · Module ${next.mod.num}</div><h3 style="margin-bottom:0">${esc(next.lesson.title)}</h3>
        <div class="sub"><span>${next.lesson.minutes} min read</span></div></div>${icon('chev', 'chev')}</a>` : ''}

      <div class="tiles">
        <a class="tile" href="#/quiz/daily"><div class="ti grad acc-gold">${icon('bolt')}</div><b>Daily 10</b><span>Mixed questions from all modules</span></a>
        <a class="tile" href="${mc ? '#/quiz/mistakes' : '#/practice'}"><div class="ti" style="background:linear-gradient(140deg,#ff9f45,#ff6a00)">${icon('redo')}</div><b>Review mistakes</b><span>${mc ? mc + ' question' + (mc > 1 ? 's' : '') + ' to fix' : 'Nothing to fix yet 🎉'}</span></a>
      </div>

      <div class="section-h"><h2>Exam modules</h2><a href="#/learn">See all</a></div>
      ${MODS.map(modCard).join('')}

      <div class="section-h"><h2>The exam at a glance</h2><a href="#/info">Details</a></div>
      <div class="card">
        <div class="facts-strip">
          <div><b>40</b><span>questions</span></div>
          <div><b>60′</b><span>minutes</span></div>
          <div><b>28</b><span>to pass</span></div>
          <div><b>3</b><span>modules</span></div>
        </div>
        <p class="small muted mb0" style="margin-top:12px">Multiple-choice on computer: 10 questions on fundamental rights, 20 on institutions and 10 on history & European integration.</p>
      </div>
      <a class="list row" href="#/info" style="display:flex"><div class="ic" style="background:#8e8e93">${icon('info')}</div><div class="txt"><div class="t">About the exam & sources</div><div class="s">Registration, format, official links</div></div>${icon('chev', 'chev')}</a>
      <p class="disclaimer">Unofficial study aid built from official public sources (Ministry of Education, Guichet.lu, gouvernement.lu, the Constitution). Always check the official portal for current rules.</p>`;
  }

  function nextLesson() {
    for (const m of MODS) for (const l of m.lessons) if (!S.done[l.id]) return { mod: m, lesson: l };
    return null;
  }

  function modCard(m) {
    const st = modStats(m);
    return `<a class="mod-card acc-${m.accent}" href="#/m/${m.id}">
      <div class="badge grad">${icon(m.icon)}</div>
      <div class="body"><div class="k">Module ${m.num} · ${m.examQuestions} exam questions</div>
        <h3>${esc(m.title)}</h3>
        <div class="bar"><i style="width:${st.mastery}%"></i></div>
        <div class="sub"><span>${st.lessonsDone}/${st.lessons} lessons</span><span>${st.mastery}% mastered</span></div>
      </div></a>`;
  }

  /* ---------- Learn ---------- */
  function learn() {
    return `<div class="large-title"><div class="eyebrow">Theory</div><h1>Learn</h1><p>Three modules that match the official exam syllabus. Read the lessons, then test yourself.</p></div>
      ${MODS.map(modCard).join('')}
      <div class="card"><h3 style="font-size:17px;margin-bottom:8px">How to study</h3>
        <ol class="steps-mini">
          <li>Read a lesson (5–8 min) and review its key facts.</li>
          <li>Answer the lesson's "Check yourself" questions.</li>
          <li>Drill the module with flashcards and practice quizzes.</li>
          <li>Fix your mistakes, then take the full mock exam.</li>
        </ol></div>`;
  }

  function moduleView(id) {
    const m = modById[id]; if (!m) return home();
    const st = modStats(m);
    return `${navbar('Module ' + m.num, '#/learn')}
      <div class="lesson-head grad acc-${m.accent}">
        <div class="k">Module ${m.num} · ${m.hours} h course · ${m.examQuestions}/40 exam questions</div>
        <h1>${esc(m.title)}</h1>
        <div class="small" style="opacity:.9;margin-top:4px"><i>${esc(m.fr)}</i></div>
        <div style="display:flex;gap:16px;align-items:center;margin-top:16px">
          ${ring(st.mastery, { size: 70, w: 7, label: st.mastery + '%', sub: 'MASTERED' })}
          <div class="small" style="opacity:.95">${st.lessonsDone}/${st.lessons} lessons read<br>${st.seen}/${st.total} questions tried<br>${st.mastered} answered correctly</div>
        </div>
      </div>
      <div class="btn-row acc-${m.accent}" style="margin-bottom:14px">
        <a class="btn grad" href="#/quiz/m-${m.id}">${icon('target')} Practice</a>
        <a class="btn ghost" href="#/cards/${m.id}">${icon('cards')} Flashcards</a>
      </div>
      <div class="section-h" style="margin-top:8px"><h2>Lessons</h2></div>
      <div class="list acc-${m.accent}">
        ${m.lessons.map((l, i) => `<a class="row" href="#/l/${l.id}">
          <div class="ic grad" style="font-weight:800;font-size:15px">${S.done[l.id] ? icon('check') : i + 1}</div>
          <div class="txt"><div class="t">${esc(l.title)}</div><div class="s">${l.minutes} min · ${m.questions.filter(q => q.l === l.id).length} questions</div></div>
          ${icon('chev', 'chev')}</a>`).join('')}
      </div>
      <a class="btn plain" href="#/quiz/all-${m.id}">Practise all ${m.questions.length} questions of this module</a>`;
  }

  function lessonView(id) {
    const ref = lessonIndex[id]; if (!ref) return home();
    const { lesson: l, mod: m, idx } = ref;
    const nextL = m.lessons[idx + 1];
    const nq = m.questions.filter(q => q.l === l.id).length;
    const html = `${navbar(m.title, '#/m/' + m.id)}
      <div class="acc-${m.accent}">
        <div class="lesson-head grad"><div class="k">Module ${m.num} · Lesson ${idx + 1} of ${m.lessons.length}</div><h1>${esc(l.title)}</h1>
          <span class="pill">${icon('clock')} ${l.minutes} min read</span></div>
        <article class="prose">${l.html}</article>
        <div class="keyfacts"><h3>${icon('bolt')} Key facts to remember</h3>
          ${l.facts.map(f => `<div class="kf"><span>${esc(f[0])}</span><b>${esc(f[1])}</b></div>`).join('')}</div>
        <a class="btn grad" href="#/quiz/l-${l.id}" data-complete="${l.id}">${icon('target')} Check yourself (${nq} questions)</a>
        <div class="btn-row mt">
          <button class="btn ghost" data-mark="${l.id}">${S.done[l.id] ? icon('check') + ' Completed' : 'Mark as read'}</button>
          ${nextL ? `<a class="btn ghost" href="#/l/${nextL.id}" data-complete="${l.id}">Next lesson ${icon('chev')}</a>` : `<a class="btn ghost" href="#/m/${m.id}" data-complete="${l.id}">Module overview</a>`}
        </div>
      </div>`;
    view.innerHTML = html;
    view.querySelectorAll('[data-complete]').forEach(a => a.addEventListener('click', () => { S.done[l.id] = true; save(); }));
    const mark = view.querySelector('[data-mark]');
    mark.addEventListener('click', () => {
      S.done[l.id] = !S.done[l.id]; save();
      mark.innerHTML = S.done[l.id] ? icon('check') + ' Completed' : 'Mark as read';
      if (S.done[l.id]) { haptic(); toast('Lesson completed ✓'); }
    });
  }

  /* ---------- Flashcards ---------- */
  function cardsView(id) {
    const m = modById[id]; if (!m) return home();
    let deck = shuffle(m.lessons.flatMap(l => l.facts.map(f => ({ f, l }))));
    let i = 0, known = 0, again = [];
    function render() {
      if (i >= deck.length) {
        view.innerHTML = `${navbar('Flashcards', '#/m/' + m.id)}
          <div class="card center acc-${m.accent}" style="padding:30px 20px">
            ${ring(pct(known, deck.length), { size: 110, w: 10, c: 'var(--c)', t: 'var(--fill)', label: known + '/' + deck.length, sub: 'KNOWN' })}
            <h2 style="margin:16px 0 6px">Deck finished!</h2>
            <p class="muted">${again.length ? `${again.length} card${again.length > 1 ? 's' : ''} to review again.` : 'You knew every card. Excellent!'}</p>
            ${again.length ? `<button class="btn grad" id="again">${icon('redo')} Review the ${again.length} missed</button>` : ''}
            <a class="btn ghost mt" href="#/quiz/m-${m.id}">${icon('target')} Practice quiz</a>
          </div>`;
        const b = document.getElementById('again');
        if (b) b.onclick = () => { deck = shuffle(again); again = []; i = 0; known = 0; render(); };
        return;
      }
      const c = deck[i];
      view.innerHTML = `${navbar('Flashcards · ' + (i + 1) + '/' + deck.length, '#/m/' + m.id)}
        <div class="acc-${m.accent}">
          <div class="quiz-top"><div class="bar"><i style="width:${pct(i, deck.length)}%"></i></div></div>
          <div class="fc-stage"><div class="fc" id="fc">
            <div class="fc-face fc-front"><div class="fk">${esc(c.l.title)}</div><div class="ft">${esc(c.f[0])}</div><div class="fh">Tap to reveal</div></div>
            <div class="fc-face fc-back"><div class="fk">Answer</div><div class="ft">${esc(c.f[1])}</div><div class="fh">Did you know it?</div></div>
          </div></div>
          <div class="btn-row">
            <button class="btn ghost" id="no" style="color:var(--bad)">${icon('x')} Again</button>
            <button class="btn grad" id="yes">${icon('check')} Got it</button>
          </div>
          <a class="btn plain" href="#/l/${c.l.id}">Open lesson</a>
        </div>`;
      const fc = document.getElementById('fc');
      fc.onclick = () => { fc.classList.toggle('flipped'); haptic(5); };
      document.getElementById('yes').onclick = () => { known++; i++; render(); };
      document.getElementById('no').onclick = () => { again.push(c); i++; render(); };
    }
    render();
  }

  /* ---------- Practice hub ---------- */
  function practiceHub() {
    const mc = mistakes().length;
    const answered = Object.keys(S.q).length;
    return `<div class="large-title"><div class="eyebrow">Train</div><h1>Practice</h1><p>Instant feedback with an explanation after every answer.</p></div>
      <div class="tiles">
        <a class="tile" href="#/quiz/daily"><div class="ti grad acc-gold">${icon('bolt')}</div><b>Quick 10</b><span>Random mix</span></a>
        <a class="tile" href="${mc ? '#/quiz/mistakes' : '#/practice'}" ${mc ? '' : 'data-nomistakes'}><div class="ti" style="background:linear-gradient(140deg,#ff9f45,#ff6a00)">${icon('redo')}</div><b>My mistakes</b><span>${mc} to review</span></a>
        <a class="tile" href="#/quiz/new"><div class="ti" style="background:linear-gradient(140deg,#8e7bff,#5b45e0)">${icon('target')}</div><b>Unseen questions</b><span>${ALLQ.length - answered} left</span></a>
        <a class="tile" href="#/quiz/tf"><div class="ti" style="background:linear-gradient(140deg,#4cd57a,#1fa651)">${icon('check')}</div><b>True or false</b><span>Rapid-fire statements</span></a>
      </div>
      <div class="section-h"><h2>By module</h2></div>
      <div class="list">
        ${MODS.map(m => { const st = modStats(m); return `<a class="row acc-${m.accent}" href="#/quiz/m-${m.id}">
          <div class="ic grad">${icon(m.icon)}</div><div class="txt"><div class="t">${esc(m.title)}</div><div class="s">${st.mastered}/${st.total} mastered · 10 questions per round</div></div>${icon('chev', 'chev')}</a>`; }).join('')}
      </div>
      <div class="section-h"><h2>By lesson</h2></div>
      ${MODS.map(m => `<div class="list acc-${m.accent}">${m.lessons.map(l => {
        const qs = m.questions.filter(q => q.l === l.id); const ok = qs.filter(q => S.q[q.id] && S.q[q.id].last === 1).length;
        return `<a class="row" href="#/quiz/l-${l.id}"><div class="txt"><div class="t" style="font-size:15px">${esc(l.title)}</div><div class="s">${ok}/${qs.length} correct</div></div>
          <div class="bar" style="width:60px"><i style="width:${pct(ok, qs.length)}%"></i></div>${icon('chev', 'chev')}</a>`; }).join('')}</div>`).join('')}`;
  }
  document.addEventListener('click', e => { if (e.target.closest('[data-nomistakes]')) { e.preventDefault(); toast('No mistakes to review yet 🎉'); } });

  /* ---------- Practice quiz ---------- */
  function buildSet(src) {
    let pool, title, back = '#/practice', n = 10;
    if (src === 'daily') { pool = ALLQ; title = 'Quick 10'; }
    else if (src === 'mistakes') { pool = mistakes(); title = 'My mistakes'; n = 20; }
    else if (src === 'new') { pool = ALLQ.filter(q => !S.q[q.id]); title = 'Unseen questions'; if (!pool.length) pool = ALLQ; }
    else if (src === 'tf') { pool = ALLQ.filter(q => q.tf); title = 'True or false'; n = 15; }
    else if (src.startsWith('m-')) { const m = modById[src.slice(2)]; pool = m.questions; title = m.title; back = '#/m/' + m.id;
      // prioritise unseen and wrong
      pool = shuffle(pool).sort((a, b) => score(a) - score(b)); return { qs: pool.slice(0, n).map(prep), title, back, accent: m.accent }; }
    else if (src.startsWith('all-')) { const m = modById[src.slice(4)]; pool = m.questions; title = m.title; back = '#/m/' + m.id; n = 999; return { qs: shuffle(pool).map(prep), title, back, accent: m.accent }; }
    else if (src.startsWith('l-')) { const r = lessonIndex[src.slice(2)]; pool = r.mod.questions.filter(q => q.l === r.lesson.id); title = r.lesson.title; back = '#/l/' + r.lesson.id; n = 999; return { qs: shuffle(pool).map(prep), title, back, accent: r.mod.accent }; }
    else pool = ALLQ;
    return { qs: shuffle(pool).slice(0, n).map(prep), title, back, accent: null };
  }
  const score = q => { const r = S.q[q.id]; if (!r) return 0; return r.last === 0 ? -1 : 1 + r.c / r.s; };

  function quizView(src) {
    const set = buildSet(src);
    if (!set.qs.length) { view.innerHTML = `${navbar('Practice', '#/practice')}<div class="empty">${icon('check')}<p>Nothing here yet.</p></div>`; return; }
    let i = 0, right = 0; const missed = [];
    function render() {
      if (i >= set.qs.length) return summary();
      const p = set.qs[i]; const m = modById[p.q.m]; const l = lessonIndex[p.q.l].lesson;
      view.innerHTML = `${navbar(set.title, set.back)}
        <div class="acc-${m.accent}">
          <div class="quiz-top"><div class="bar"><i style="width:${pct(i, set.qs.length)}%"></i></div><div class="count">${i + 1}/${set.qs.length}</div></div>
          <div class="q-card">
            <div class="q-meta"><span class="pill">Module ${m.num}</span>${p.tf ? '<span class="pill">True / False</span>' : ''}</div>
            <div class="q-text">${esc(p.q.q)}</div>
            <div class="opts ${p.tf ? 'tf-opts' : ''}" id="opts">
              ${p.opts.map((o, k) => `<button class="opt" data-k="${k}"><span class="letter">${LETTERS[k]}</span><span class="lbl">${esc(o)}</span>${icon('check', 'mark')}</button>`).join('')}
            </div>
          </div>
          <div id="fb"></div>
        </div>`;
      const opts = document.getElementById('opts');
      opts.addEventListener('click', e => {
        const b = e.target.closest('.opt'); if (!b || opts.classList.contains('locked')) return;
        const k = +b.dataset.k; const ok = k === p.correct;
        opts.classList.add('locked');
        opts.querySelectorAll('.opt').forEach((el, j) => {
          if (j === p.correct) el.classList.add('correct');
          else if (j === k) { el.classList.add('wrong'); el.querySelector('.mark use').setAttribute('href', '#i-x'); }
          else el.classList.add('dim');
        });
        recordAnswer(p.q.id, ok); haptic(ok ? 10 : [20, 40, 20]);
        if (ok) right++; else missed.push({ p, k });
        document.getElementById('fb').innerHTML = `
          <div class="explain ${ok ? 'ok' : 'bad'}"><div class="eh">${icon(ok ? 'check' : 'x')} ${ok ? pick(['Correct!', 'Well done!', 'Exactly!', 'Perfect!']) : 'Not quite'}</div>
            <p>${esc(p.q.e)}</p><a href="#/l/${l.id}">Lesson: ${esc(l.title)} ${icon('chev')}</a></div>
          <div class="sticky-actions"><button class="btn ${m.accent === 'red' ? 'red' : m.accent === 'blue' ? 'blue' : 'dark'}" id="next">${i + 1 < set.qs.length ? 'Next question' : 'See results'} ${icon('chev')}</button></div>`;
        document.getElementById('next').onclick = () => { i++; render(); };
        document.getElementById('next').scrollIntoView({ behavior: 'smooth', block: 'end' });
      });
    }
    function summary() {
      const p = pct(right, set.qs.length);
      view.innerHTML = `${navbar('Results', set.back)}
        <div class="card center" style="padding:28px 18px">
          ${ring(p, { size: 120, w: 11, c: p >= 70 ? 'var(--ok)' : p >= 50 ? 'var(--orange)' : 'var(--bad)', t: 'var(--fill)', label: right + '/' + set.qs.length, sub: p + '%' })}
          <h2 style="margin:16px 0 4px">${p >= 90 ? 'Outstanding! 🏆' : p >= 70 ? 'Great job! 🎉' : p >= 50 ? 'Getting there 💪' : 'Keep going 📚'}</h2>
          <p class="muted" style="margin:0">${p >= 70 ? 'That is above the 70% pass mark.' : 'The pass mark is 70%. Review the lessons and try again.'}</p>
        </div>
        <div class="btn-row"><a class="btn dark" href="#/quiz/${src}" id="retry">${icon('redo')} New round</a><a class="btn ghost" href="${set.back}">Done</a></div>
        ${missed.length ? `<div class="section-h"><h2>Review your mistakes</h2></div>${missed.map(x => reviewItem(x.p, x.k)).join('')}` : ''}`;
      document.getElementById('retry').onclick = e => { e.preventDefault(); quizView(src); window.scrollTo(0, 0); };
    }
    render();
  }
  const pick = a => a[Math.floor(Math.random() * a.length)];

  // chosen: option index, or undefined when the question was not answered
  function reviewItem(p, chosen) {
    const m = modById[p.q.m]; const l = lessonIndex[p.q.l].lesson;
    const ok = chosen === p.correct;
    const wrong = chosen === undefined ? 'Not answered' : ok ? '' : 'Your answer: ' + esc(p.opts[chosen]);
    return `<div class="review-item">
      <span class="pill">Module ${m.num} · ${esc(l.title)}</span>
      <div class="rq">${esc(p.q.q)}</div>
      ${wrong ? `<div class="ra bad">${icon('x')}<span>${wrong}</span></div>` : ''}
      <div class="ra ok">${icon('check')}<span>${ok ? 'Your answer: ' : 'Correct answer: '}${esc(p.opts[p.correct])}</span></div>
      <div class="re">💡 ${esc(p.q.e)}</div></div>`;
  }

  /* ---------- Mock exam ---------- */
  function examIntro() {
    const run = store.get(RUN_KEY, null);
    const best = S.exams.length ? Math.max(...S.exams.map(e => e.score)) : null;
    return `<div class="large-title"><div class="eyebrow">Simulation</div><h1>Mock Exam</h1><p>A full simulation under real exam conditions.</p></div>
      ${run ? `<div class="card" style="border:2px solid var(--orange)"><b>You have an exam in progress</b><p class="small muted" style="margin:4px 0 12px">${Object.keys(run.answers).length}/${run.qs.length} answered · ${fmtTime(Math.max(0, Math.round((run.end - Date.now()) / 1000)))} left</p>
        <div class="btn-row"><a class="btn dark" href="#/exam/run">Resume</a><button class="btn ghost" id="discard" style="color:var(--bad)">Discard</button></div></div>` : ''}
      <div class="card">
        <div class="facts-strip">
          <div><b>40</b><span>questions</span></div><div><b>60′</b><span>time limit</span></div>
          <div><b>28</b><span>to pass</span></div><div><b>${best === null ? '–' : best}</b><span>best score</span></div>
        </div>
        <div style="margin-top:16px">
          ${MODS.map(m => `<div class="mod-score acc-${m.accent}"><div class="nm">${esc(m.title)}</div><div class="sc" style="color:var(--c)">${VE.exam.distribution[m.id]} q</div></div>`).join('')}
        </div>
      </div>
      <div class="card"><h3 style="font-size:17px;margin-bottom:6px">Rules of this simulation</h3>
        <ol class="steps-mini">
          <li>Questions are drawn at random from the bank, in the same proportions as the real exam.</li>
          <li>One correct answer per question. No feedback until you submit.</li>
          <li>You can flag questions, jump between them and change answers.</li>
          <li>When time runs out, the exam is submitted automatically.</li>
          <li>Afterwards you get a detailed review with explanations.</li>
        </ol></div>
      <button class="btn red" id="start">${icon('exam')} Start the exam</button>
      ${S.exams.length ? `<div class="section-h"><h2>Past attempts</h2></div><div class="list">${S.exams.slice().reverse().slice(0, 8).map((e, k) => {
        const idx = S.exams.length - 1 - k;
        return `<a class="hist-row" href="#/exam/result/${idx}"><div class="sc" style="color:${e.passed ? 'var(--ok)' : 'var(--bad)'}">${e.score}/${e.total}</div>
          <div style="flex:1"><div class="${e.passed ? 'tag-ok' : 'tag-bad'}">${e.passed ? 'PASSED' : 'NOT PASSED'}</div><div class="small muted">${fmtDate(e.date)} · ${fmtTime(e.dur)}</div></div>${icon('chev', 'chev')}</a>`; }).join('')}</div>` : ''}
      ${scriptHook(() => {
        document.getElementById('start').onclick = () => {
          if (store.get(RUN_KEY, null) && !confirm('Discard the exam in progress and start a new one?')) return;
          startExam();
        };
        const d = document.getElementById('discard'); if (d) d.onclick = () => { store.del(RUN_KEY); router(); };
      })}`;
  }
  // allow string views to attach handlers after render
  function scriptHook(fn) { setTimeout(fn, 0); return ''; }

  function startExam() {
    const qs = [];
    MODS.forEach(m => {
      const n = VE.exam.distribution[m.id];
      // stratify by lesson for good coverage
      const byL = {}; m.questions.forEach(q => (byL[q.l] = byL[q.l] || []).push(q));
      const buckets = Object.values(byL).map(shuffle);
      const picked = [];
      while (picked.length < n && buckets.some(b => b.length)) {
        for (const b of shuffle(buckets)) { if (b.length && picked.length < n) picked.push(b.pop()); }
      }
      qs.push(...shuffle(picked));
    });
    // Real exam presents modules in order; keep module grouping
    const run = {
      qs: qs.map(q => { const p = prep(q); return { id: q.id, opts: p.opts, correct: p.correct, tf: p.tf }; }),
      answers: {}, flags: {}, cur: 0, start: Date.now(), end: Date.now() + VE.exam.minutes * 60000
    };
    store.set(RUN_KEY, run);
    location.hash = '#/exam/run';
  }

  function examRun() {
    let run = store.get(RUN_KEY, null);
    if (!run) { location.hash = '#/exam'; return; }
    const persist = () => store.set(RUN_KEY, run);
    let timerId;
    const rp = r => ({ q: qById[r.id], opts: r.opts, correct: r.correct, tf: r.tf });

    function render() {
      const r = run.qs[run.cur]; const p = rp(r); const m = modById[p.q.m];
      const answered = Object.keys(run.answers).length;
      view.innerHTML = `
        <div class="exam-bar">
          <div class="row1">
            <button class="icon-btn" id="quit">${icon('x')}</button>
            <span class="timer" id="timer">${icon('clock')}<span>--:--</span></span>
            <button class="icon-btn" id="grid">${icon('grid')} ${answered}/${run.qs.length}</button>
          </div>
          <div class="bar"><i style="width:${pct(answered, run.qs.length)}%;--c:var(--red)"></i></div>
        </div>
        <div class="q-card acc-${m.accent}">
          <div class="q-meta" style="justify-content:space-between;align-items:center">
            <span class="pill">Question ${run.cur + 1} of ${run.qs.length} · Module ${m.num}</span>
            <button class="icon-btn ${run.flags[r.id] ? 'on' : ''}" id="flag">${icon('flag')} ${run.flags[r.id] ? 'Flagged' : 'Flag'}</button>
          </div>
          <div class="q-text">${esc(p.q.q)}</div>
          <div class="opts ${p.tf ? 'tf-opts' : ''}" id="opts">
            ${p.opts.map((o, k) => `<button class="opt ${run.answers[r.id] === k ? 'selected' : ''}" data-k="${k}"><span class="letter">${LETTERS[k]}</span><span class="lbl">${esc(o)}</span></button>`).join('')}
          </div>
        </div>
        <div class="btn-row">
          <button class="btn ghost" id="prev" ${run.cur === 0 ? 'disabled' : ''}>${icon('back')} Previous</button>
          ${run.cur < run.qs.length - 1 ? `<button class="btn dark" id="nextq">Next ${icon('chev')}</button>` : `<button class="btn red" id="finish">Submit ${icon('check')}</button>`}
        </div>
        <p class="center small muted mt">Tip: flag questions you're unsure about and come back to them using the grid.</p>`;
      document.getElementById('opts').addEventListener('click', e => {
        const b = e.target.closest('.opt'); if (!b) return;
        run.answers[r.id] = +b.dataset.k; persist(); haptic(6);
        document.querySelectorAll('#opts .opt').forEach(el => el.classList.toggle('selected', el === b));
        document.getElementById('grid').innerHTML = `${icon('grid')} ${Object.keys(run.answers).length}/${run.qs.length}`;
        view.querySelector('.exam-bar .bar i').style.width = pct(Object.keys(run.answers).length, run.qs.length) + '%';
      });
      document.getElementById('flag').onclick = () => { run.flags[r.id] = !run.flags[r.id]; persist(); render(); };
      document.getElementById('prev').onclick = () => { run.cur--; persist(); render(); window.scrollTo(0, 0); };
      const nx = document.getElementById('nextq'); if (nx) nx.onclick = () => { run.cur++; persist(); render(); window.scrollTo(0, 0); };
      const fin = document.getElementById('finish'); if (fin) fin.onclick = confirmSubmit;
      document.getElementById('grid').onclick = openGrid;
      document.getElementById('quit').onclick = () => openSheet(`<h3>Leave the exam?</h3><p>Your progress is saved. You can resume from the Mock Exam tab while time remains. The timer keeps running.</p>
        <button class="btn dark" data-act="leave">Leave and resume later</button><button class="btn plain" data-act="close">Continue the exam</button>`, {
        leave: () => { location.hash = '#/exam'; }
      });
      tick();
    }
    function tick() {
      const left = Math.max(0, Math.round((run.end - Date.now()) / 1000));
      const t = document.getElementById('timer');
      if (t) { t.querySelector('span').textContent = fmtTime(left); t.classList.toggle('warn', left <= 300); }
      if (left <= 0) { clearInterval(timerId); submit(true); }
    }
    function openGrid() {
      const cells = run.qs.map((r, k) => `<button data-go="${k}" class="${run.answers[r.id] !== undefined ? 'ans' : ''} ${run.flags[r.id] ? 'flag' : ''} ${k === run.cur ? 'cur' : ''}">${k + 1}</button>`).join('');
      openSheet(`<h3>All questions</h3><p>${Object.keys(run.answers).length} answered · ${Object.values(run.flags).filter(Boolean).length} flagged</p>
        <div class="navgrid">${cells}</div>
        <div class="legend"><span><i style="background:color-mix(in srgb,var(--tint) 25%,var(--bg3))"></i>Answered</span><span><i style="background:var(--bg3)"></i>Not answered</span><span><i style="background:var(--orange);border-radius:50%"></i>Flagged</span></div>
        <button class="btn red mt" data-act="submit">Submit exam</button>`, { submit: () => { closeSheet(); confirmSubmit(); } });
      sheetRoot.querySelectorAll('[data-go]').forEach(b => b.onclick = () => { run.cur = +b.dataset.go; persist(); closeSheet(); render(); window.scrollTo(0, 0); });
    }
    function confirmSubmit() {
      const un = run.qs.length - Object.keys(run.answers).length;
      const fl = Object.values(run.flags).filter(Boolean).length;
      openSheet(`<h3>Submit your exam?</h3><p>${un ? `<b style="color:var(--bad)">${un} question${un > 1 ? 's' : ''} not answered.</b> ` : 'All questions answered. '}${fl ? `${fl} flagged.` : ''} You cannot change your answers after submitting.</p>
        <button class="btn red" data-act="go">Submit now</button><button class="btn plain" data-act="close">Keep working</button>`, { go: () => submit(false) });
    }
    function submit(auto) {
      clearInterval(timerId); closeSheet();
      const perMod = {}; MODS.forEach(m => perMod[m.id] = { c: 0, t: 0 });
      let sc = 0;
      run.qs.forEach(r => {
        const q = qById[r.id]; const a = run.answers[r.id]; const ok = a === r.correct;
        perMod[q.m].t++; if (ok) { perMod[q.m].c++; sc++; }
        if (a !== undefined) recordAnswer(r.id, ok); else recordAnswer(r.id, false);
      });
      const res = { date: Date.now(), score: sc, total: run.qs.length, passed: sc >= VE.exam.pass, perMod,
        dur: Math.min(VE.exam.minutes * 60, Math.round((Date.now() - run.start) / 1000)), qs: run.qs, answers: run.answers, flags: run.flags, auto };
      S.exams.push(res); S.exams = S.exams.slice(-20); save();
      store.del(RUN_KEY);
      location.hash = '#/exam/result/' + (S.exams.length - 1);
      if (auto) setTimeout(() => toast('⏰ Time is up! Exam submitted.'), 300);
    }
    render();
    timerId = setInterval(tick, 1000);
    const onVis = () => { if (!document.hidden) tick(); };
    document.addEventListener('visibilitychange', onVis);
    cleanup = () => { clearInterval(timerId); document.removeEventListener('visibilitychange', onVis); };
  }

  function examResult(idx) {
    const e = S.exams[+idx]; if (!e) { location.hash = '#/exam'; return; }
    let filter = 'wrong';
    const items = e.qs.map((r, k) => ({ k, p: { q: qById[r.id], opts: r.opts, correct: r.correct, tf: r.tf }, a: e.answers[r.id], f: e.flags && e.flags[r.id] })).filter(x => x.p.q);
    function render() {
      const list = items.filter(x => filter === 'all' ? true : filter === 'wrong' ? x.a !== x.p.correct : x.f);
      view.innerHTML = `${navbar('Exam result', '#/exam')}
        <div class="result-hero ${e.passed ? 'pass' : 'fail'}">
          ${e.passed ? '<div class="confetti" id="conf"></div>' : ''}
          <div style="position:relative">
            <div class="big">${e.score}<small>/${e.total}</small></div>
            <h2>${e.passed ? 'Passed! Félicitatiounen 🎉' : 'Not passed this time'}</h2>
            <p>${pct(e.score, e.total)}% · pass mark ${VE.exam.pass}/40 · time ${fmtTime(e.dur)}${e.auto ? ' (time up)' : ''}</p>
          </div>
        </div>
        <div class="card"><h3 style="font-size:17px;margin-bottom:6px">Score by module</h3>
          ${MODS.map(m => { const s = e.perMod[m.id]; const p = pct(s.c, s.t); return `<div class="mod-score acc-${m.accent}"><div class="nm">${esc(m.title)}</div><div class="bar"><i style="width:${p}%"></i></div><div class="sc">${s.c}/${s.t}</div></div>`; }).join('')}
          <p class="small muted mb0" style="margin-top:10px">${weakAdvice(e)}</p>
        </div>
        <div class="btn-row" style="margin-bottom:8px"><button class="btn red" id="again">${icon('redo')} New exam</button><a class="btn ghost" href="#/quiz/mistakes">Drill mistakes</a></div>
        <div class="section-h"><h2>Review</h2></div>
        <div class="seg" id="seg">
          <button data-f="wrong" class="${filter === 'wrong' ? 'on' : ''}">Incorrect (${items.filter(x => x.a !== x.p.correct).length})</button>
          <button data-f="flag" class="${filter === 'flag' ? 'on' : ''}">Flagged (${items.filter(x => x.f).length})</button>
          <button data-f="all" class="${filter === 'all' ? 'on' : ''}">All (${items.length})</button>
        </div>
        ${list.length ? list.map(x => `<div class="small muted" style="margin:0 6px 4px;font-weight:600">Question ${x.k + 1}${x.f ? ' · 🚩 flagged' : ''}</div>` + reviewItem(x.p, x.a)).join('') : `<div class="empty">${icon('trophy')}<p>Nothing to show here.</p></div>`}`;
      document.getElementById('seg').onclick = ev => { const b = ev.target.closest('button'); if (!b) return; filter = b.dataset.f; const y = window.scrollY; render(); window.scrollTo(0, y); };
      document.getElementById('again').onclick = startExam;
      const conf = document.getElementById('conf');
      if (conf && !render.done) {
        render.done = true;
        const cols = ['#fff', '#ffe066', '#ff6b6b', '#4dabf7', '#69db7c'];
        conf.innerHTML = Array.from({ length: 40 }, () => `<i style="left:${Math.random() * 100}%;background:${pick(cols)};animation-duration:${1.6 + Math.random() * 1.6}s;animation-delay:${Math.random() * .6}s"></i>`).join('');
      }
    }
    render();
  }
  function weakAdvice(e) {
    const scored = MODS.map(m => ({ m, p: e.perMod[m.id].t ? e.perMod[m.id].c / e.perMod[m.id].t : 1 })).sort((a, b) => a.p - b.p);
    const w = scored[0];
    if (w.p >= .85) return 'Strong across all modules. Keep your knowledge fresh with the Daily 10.';
    return `Focus next on <b>${esc(w.m.title)}</b> (${Math.round(w.p * 100)}%). Re-read its lessons and practise that module.`;
  }

  /* ---------- Progress ---------- */
  function progressView() {
    const r = readiness();
    const answered = Object.values(S.q);
    const totalAns = answered.reduce((a, x) => a + x.s, 0);
    const totalOk = answered.reduce((a, x) => a + x.c, 0);
    const lessonsDone = Object.values(S.done).filter(Boolean).length;
    const totalLessons = MODS.reduce((a, m) => a + m.lessons.length, 0);
    return `<div class="large-title"><div class="eyebrow">Your journey</div><h1>Progress</h1></div>
      <div class="card" style="display:flex;gap:18px;align-items:center">
        ${ring(r, { size: 104, w: 11, c: 'var(--red)', t: 'var(--fill)', label: r + '%', sub: 'READY' })}
        <div><b style="font-size:18px">Exam readiness</b><p class="small muted" style="margin:4px 0 0">Based on how many questions you answer correctly (weighted like the exam) and the lessons you've read.</p></div>
      </div>
      <div class="stat-grid">
        <div><b>${lessonsDone}/${totalLessons}</b><span>lessons</span></div>
        <div><b>${pct(totalOk, totalAns)}%</b><span>accuracy</span></div>
        <div><b>${S.days.length}</b><span>study days</span></div>
      </div>
      <div class="section-h"><h2>Mastery by module</h2></div>
      <div class="card">
        ${MODS.map(m => { const st = modStats(m); return `<div class="mod-score acc-${m.accent}"><div class="nm">${esc(m.title)}</div><div class="bar"><i style="width:${st.mastery}%"></i></div><div class="sc">${st.mastered}/${st.total}</div></div>`; }).join('')}
      </div>
      <div class="section-h"><h2>Mock exams</h2></div>
      ${S.exams.length ? `<div class="card">${examChart()}</div><div class="list">${S.exams.slice().reverse().map((e, k) => {
        const idx = S.exams.length - 1 - k;
        return `<a class="hist-row" href="#/exam/result/${idx}"><div class="sc" style="color:${e.passed ? 'var(--ok)' : 'var(--bad)'}">${e.score}/${e.total}</div>
        <div style="flex:1"><div class="${e.passed ? 'tag-ok' : 'tag-bad'}">${e.passed ? 'PASSED' : 'NOT PASSED'}</div><div class="small muted">${fmtDate(e.date)}</div></div>${icon('chev', 'chev')}</a>`; }).join('')}</div>`
        : `<div class="card empty">${icon('exam')}<p>No mock exam yet.</p><a class="btn red" href="#/exam">Take your first mock exam</a></div>`}
      <div class="list mt"><button class="row" id="reset" style="width:100%;color:var(--bad)"><div class="txt t" style="color:var(--bad)">Reset all progress</div></button></div>
      ${scriptHook(() => {
        document.getElementById('reset').onclick = () => openSheet(`<h3>Reset all progress?</h3><p>This deletes your lesson progress, answers and exam history on this device.</p>
          <button class="btn red" data-act="go">Reset everything</button><button class="btn plain" data-act="close">Cancel</button>`, {
          go: () => { S = { done: {}, q: {}, exams: [], days: [] }; save(); store.del(RUN_KEY); closeSheet(); router(); toast('Progress reset'); }
        });
      })}`;
  }
  function examChart() {
    const ex = S.exams.slice(-10); const W = 320, H = 130, pad = 22;
    const x = i => pad + (ex.length === 1 ? (W - 2 * pad) / 2 : i * (W - 2 * pad) / (ex.length - 1));
    const y = v => H - pad - (v / 40) * (H - 2 * pad);
    const pts = ex.map((e, i) => `${x(i)},${y(e.score)}`).join(' ');
    return `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto" role="img" aria-label="Mock exam scores">
      <line x1="${pad}" x2="${W - pad}" y1="${y(28)}" y2="${y(28)}" stroke="var(--ok)" stroke-dasharray="4 4" stroke-width="1.5"/>
      <text x="${W - pad}" y="${y(28) - 5}" text-anchor="end" font-size="10" fill="var(--ok)" font-weight="700">pass 28</text>
      <polyline points="${pts}" fill="none" stroke="var(--red)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
      ${ex.map((e, i) => `<circle cx="${x(i)}" cy="${y(e.score)}" r="4.5" fill="${e.passed ? 'var(--ok)' : 'var(--bad)'}" stroke="var(--bg2)" stroke-width="2"/><text x="${x(i)}" y="${y(e.score) - 9}" text-anchor="middle" font-size="10" fill="var(--label2)" font-weight="700">${e.score}</text>`).join('')}
    </svg>`;
  }

  /* ---------- Info ---------- */
  function infoView() {
    return `${navbar('About the exam', '#/')}
      <div class="large-title" style="padding-top:4px"><h1>The exam</h1><p>"Vivre ensemble au Grand-Duché de Luxembourg": the civics requirement for Luxembourg nationality.</p></div>
      <div class="card"><h3 style="font-size:17px;margin-bottom:6px">What it is</h3>
        <p class="small" style="margin:0">To acquire Luxembourg nationality by naturalisation, you need (among other things) the <b>Luxembourgish language test</b> and the <b>"Vivre ensemble au Grand-Duché de Luxembourg"</b> certificate. You get the certificate either by attending the <b>24-hour course</b> or by <b>passing the exam</b> without attending the course.</p></div>
      <div class="list">${VE.info.format.map(([k, v]) => `<div class="row" style="align-items:flex-start"><div class="txt"><div class="s" style="font-weight:600;text-transform:uppercase;font-size:11.5px;letter-spacing:.05em">${esc(k)}</div><div style="font-size:15px;margin-top:2px">${esc(v)}</div></div></div>`).join('')}</div>
      <div class="card"><h3 style="font-size:17px;margin-bottom:6px">Exemptions & special cases</h3>
        <ul class="small" style="padding-left:18px;margin:0">
          <li>People who already hold the civic-training certificate of the Welcome and Integration Contract (CAI) or of the Citizens' Pact are exempt from the <b>history</b> module.</li>
          <li>People legally resident for <b>20+ years</b> (option procedure, art. 28) are exempt from the language test and from Vivre ensemble, but must follow a 24-hour Luxembourgish course.</li>
          <li>A medical exemption can be requested from the Minister of Justice with a specialist's certificate.</li>
        </ul></div>
      <a class="btn red" href="https://ssl.education.lu/ve-portal/#/home" target="_blank" rel="noopener">Official registration portal ↗</a>
      <div class="section-h"><h2>Sources</h2></div>
      <div class="card src">${VE.info.sources.map(([t, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(t)} ↗</a>`).join('')}</div>
      <div class="card small muted">
        <b style="color:var(--label)">About this app.</b> This is an independent, unofficial study aid. The lessons follow the official syllabus ("examination content and documentation") topic by topic, and were checked against every document it recommends: the 2023 Constitution, the government's "About…" brochures on history, institutions and the EU, the fact sheets, and the ZpB civic-education material. Current facts (Head of State, Government, election results, number of communes) are as of late 2026. The exam's question bank is not public: questions here are original practice questions on the same syllabus. The official pass mark and duration should be confirmed on the portal.
      </div>
      <p class="disclaimer">Made for learners · Works offline once loaded · Add to Home Screen from Safari's share menu</p>`;
  }

  /* ---------- Sheet ---------- */
  function openSheet(html, actions = {}) {
    sheetRoot.innerHTML = `<div class="sheet-backdrop" data-act="close"></div><div class="sheet" role="dialog" aria-modal="true"><div class="grab"></div>${html}</div>`;
    sheetRoot.onclick = e => {
      const a = e.target.closest('[data-act]'); if (!a) return;
      const act = a.dataset.act;
      if (act === 'close') closeSheet(); else if (actions[act]) actions[act]();
    };
  }
  function closeSheet() { sheetRoot.innerHTML = ''; }

  /* ---------- Boot ---------- */
  router();
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    navigator.serviceWorker.register('sw.js').catch(() => { });
  }
})();
