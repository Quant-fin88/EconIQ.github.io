// app.js — application logic

var deck = [], idx = 0, flipped = false, mcAnswered = false;
var sessionGot = 0, sessionAlmost = 0, sessionHard = 0;
var totalXP    = parseInt(localStorage.getItem('eq_xp')    || '0');
var totalCards = parseInt(localStorage.getItem('eq_cards') || '0');
var totalGot   = parseInt(localStorage.getItem('eq_got')   || '0');
var streak     = parseInt(localStorage.getItem('eq_streak')|| '0');
var currentTopic = 'all';

var LABELS = {
  makro2:     'Makro II',
  mikro2:     'Mikro II',
  okonometri: '\u00d8konometri I',
  videnskab:  'Videnskabsteori'
};

function save() {
  localStorage.setItem('eq_xp',    totalXP);
  localStorage.setItem('eq_cards', totalCards);
  localStorage.setItem('eq_got',   totalGot);
}

function $(id) { return document.getElementById(id); }

function updateHomeStats() {
  $('total-xp').textContent    = totalXP;
  $('cards-done').textContent  = totalCards;
  $('mastery-pct').textContent = totalCards > 0 ? Math.round((totalGot / totalCards) * 100) + '%' : '0%';
  $('streak-num').textContent  = streak;
  $('xp-badge').textContent    = totalXP + ' XP';
  ['makro2','mikro2','okonometri','videnskab'].forEach(function(t) {
    $('count-' + t).textContent = CARDS.filter(function(c) { return c.topic === t; }).length + ' kort';
  });
  $('count-all').textContent = CARDS.length + ' kort';
}

function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });
  $(id).classList.add('active');
}

function goHome() { updateHomeStats(); showScreen('home'); }

function typeset(el) {
  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise([el]).catch(function() {});
  }
}

function startStudy(topic) {
  currentTopic = topic;
  idx = 0; flipped = false; mcAnswered = false;
  sessionGot = 0; sessionAlmost = 0; sessionHard = 0;
  var filtered = topic === 'all' ? CARDS : CARDS.filter(function(c) { return c.topic === topic; });
  deck = shuffle(filtered).slice(0, 12);
  showScreen('study');
  renderCard();
}

function renderCard() {
  if (idx >= deck.length) { showDone(); return; }
  var c = deck[idx];
  flipped = false; mcAnswered = false;

  $('card-inner').classList.remove('flipped');
  $('study-badge').textContent = LABELS[c.topic] || c.topic;

  // Question text
  var qEl = $('card-q');
  qEl.innerHTML = c.q;
  qEl.className = c.type === 'graph' ? 'card-q graph-q' : 'card-q';

  // Answer + hint
  $('card-a').innerHTML = c.a;
  $('card-hint').innerHTML = '\ud83d\udca1 ' + c.hint;

  // Graphs
  renderGraph('front-graph', c.type === 'graph' ? c.graph : null);
  renderGraph('back-graph',  c.type === 'graph' ? c.graph : null);

  // Typeset math
  typeset($('card-front'));
  typeset(document.querySelector('.card-back'));

  // Progress
  $('prog-fill').style.width = Math.round((idx / deck.length) * 100) + '%';
  $('card-counter').textContent = (idx + 1) + '/' + deck.length;

  // Show/hide controls
  var isMC = c.type === 'mc';
  $('mc-options').classList.toggle('hidden', !isMC);
  $('mc-next').classList.add('hidden');
  $('tap-cue').classList.toggle('hidden', isMC);
  $('rating-area').classList.toggle('hidden', isMC);
  $('rating-label').classList.add('hidden');
  $('rating-btns').classList.add('hidden');

  if (isMC) renderMCOptions(c);
}

function handleFrontClick() {
  if (deck[idx].type === 'mc') return;
  flipCard();
}

function flipCard() {
  if (flipped) return;
  flipped = true;
  $('card-inner').classList.add('flipped');
  $('tap-cue').classList.add('hidden');
  $('rating-label').classList.remove('hidden');
  $('rating-btns').classList.remove('hidden');
}

function renderMCOptions(c) {
  var container = $('mc-options');
  container.innerHTML = '';
  shuffle(c.options.map(function(text, i) { return { text: text, i: i }; }))
    .forEach(function(opt) {
      var btn = document.createElement('button');
      btn.className = 'mc-btn';
      btn.innerHTML = opt.text;
      btn.dataset.idx = opt.i;
      btn.onclick = function() { handleMCAnswer(opt.i, c.correct); };
      container.appendChild(btn);
    });
  typeset(container);
}

function handleMCAnswer(chosen, correct) {
  if (mcAnswered) return;
  mcAnswered = true;
  document.querySelectorAll('.mc-btn').forEach(function(btn) {
    btn.disabled = true;
    var i = parseInt(btn.dataset.idx);
    if (i === correct)                  btn.classList.add('reveal-correct');
    if (i === chosen && chosen !== correct) btn.classList.add('wrong');
    if (i === chosen && chosen === correct) btn.classList.add('correct');
  });
  if (chosen === correct) { sessionGot++; totalGot++; totalXP += 10; }
  else                    { sessionHard++;              totalXP += 2; }
  totalCards++;
  save();
  $('mc-next').classList.remove('hidden');
}

function nextCard() { idx++; renderCard(); }

function rate(level) {
  if      (level === 'easy')   { totalXP += 10; sessionGot++;   totalGot++; }
  else if (level === 'medium') { totalXP += 5;  sessionAlmost++; }
  else                         { totalXP += 2;  sessionHard++; }
  totalCards++;
  save();
  idx++;
  renderCard();
}

function showDone() {
  var total = sessionGot + sessionAlmost + sessionHard;
  var pct   = total > 0 ? Math.round((sessionGot / total) * 100) : 0;
  $('d-got').textContent    = sessionGot;
  $('d-almost').textContent = sessionAlmost;
  $('d-hard').textContent   = sessionHard;
  $('done-sub').textContent = pct + '% mestring denne session. ' +
    (pct >= 80 ? 'Fremragende.' : pct >= 50 ? 'Du er p\u00e5 rette vej.' : 'Bliv ved \u2013 det samler sig.');
  streak++;
  localStorage.setItem('eq_streak', streak);
  showScreen('done');
}

function restartSession() { startStudy(currentTopic); }

// Init
updateHomeStats();
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(function() {});
}
