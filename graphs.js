// graphs.js — all SVG diagrams built with DOM, zero string injection

var NS = 'http://www.w3.org/2000/svg';

function svgEl(tag, attrs) {
  var e = document.createElementNS(NS, tag);
  for (var k in attrs) e.setAttribute(k, attrs[k]);
  return e;
}

function makeSVG() {
  var s = document.createElementNS(NS, 'svg');
  s.setAttribute('viewBox', '0 0 280 195');
  s.setAttribute('xmlns', NS);
  return s;
}

function addArrowMarker(svg, id) {
  var defs = svgEl('defs', {});
  var m = svgEl('marker', { id: id, markerWidth: '6', markerHeight: '6', refX: '6', refY: '3', orient: 'auto' });
  m.appendChild(svgEl('path', { d: 'M0,0 L6,3 L0,6 Z', fill: '#444' }));
  defs.appendChild(m);
  svg.appendChild(defs);
}

function addAxes(svg, mid, labelY, labelX) {
  svg.appendChild(svgEl('line', { x1: '30', y1: '5', x2: '30', y2: '180', stroke: '#444', 'stroke-width': '1.5', 'marker-end': 'url(#' + mid + ')' }));
  svg.appendChild(svgEl('line', { x1: '22', y1: '172', x2: '272', y2: '172', stroke: '#444', 'stroke-width': '1.5', 'marker-end': 'url(#' + mid + ')' }));
  var ty = svgEl('text', { x: '12', y: '8', fill: '#777', 'font-size': '10', 'font-family': 'system-ui,sans-serif' });
  ty.textContent = labelY;
  svg.appendChild(ty);
  var tx = svgEl('text', { x: '258', y: '186', fill: '#777', 'font-size': '10', 'font-family': 'system-ui,sans-serif' });
  tx.textContent = labelX;
  svg.appendChild(tx);
}

function label(svg, x, y, txt, color, size) {
  var t = svgEl('text', { x: String(x), y: String(y), fill: color || '#aaa', 'font-size': String(size || 9), 'font-family': 'system-ui,sans-serif' });
  t.textContent = txt;
  svg.appendChild(t);
}

function dot(svg, x, y, color) {
  svg.appendChild(svgEl('circle', { cx: String(x), cy: String(y), r: '4.5', fill: color }));
}

// ── 1. AD-AS SHOCK ────────────────────────────────────────
function buildADAS() {
  var s = makeSVG();
  addArrowMarker(s, 'adas');
  addAxes(s, 'adas', 'π', 'y');

  // LRAS
  s.appendChild(svgEl('line', { x1: '158', y1: '10', x2: '158', y2: '168', stroke: '#c8f55a', 'stroke-width': '2' }));
  label(s, 161, 12, 'LRAS', '#c8f55a', 8);

  // SRAS
  s.appendChild(svgEl('line', { x1: '48', y1: '168', x2: '238', y2: '56', stroke: '#f5a623', 'stroke-width': '1.8' }));
  label(s, 218, 53, 'SRAS', '#f5a623', 8);

  // AD1
  s.appendChild(svgEl('line', { x1: '44', y1: '54', x2: '232', y2: '166', stroke: '#7b9fff', 'stroke-width': '1.8' }));
  label(s, 210, 163, 'AD₁', '#7b9fff', 9);

  // AD2 dashed
  s.appendChild(svgEl('line', { x1: '18', y1: '54', x2: '206', y2: '166', stroke: '#7b9fff', 'stroke-width': '1.8', 'stroke-dasharray': '5,4' }));
  label(s, 184, 163, 'AD₂', '#7b9fff', 9);

  // Points
  dot(s, 158, 111, '#c8f55a');
  label(s, 163, 109, 'A', '#c8f55a', 11);
  dot(s, 132, 122, '#ff6b6b');
  label(s, 119, 120, 'B', '#ff6b6b', 11);

  // Arrow A→B
  s.appendChild(svgEl('line', { x1: '152', y1: '114', x2: '138', y2: '120', stroke: '#888', 'stroke-width': '1.2', 'marker-end': 'url(#adas)' }));

  return s;
}

// ── 2. PHILLIPS CURVE ─────────────────────────────────────
function buildPhillips() {
  var s = makeSVG();
  addArrowMarker(s, 'phil');
  addAxes(s, 'phil', 'π', 'u');

  // LR vertical
  s.appendChild(svgEl('line', { x1: '158', y1: '10', x2: '158', y2: '168', stroke: '#c8f55a', 'stroke-width': '2' }));
  label(s, 161, 12, 'LR', '#c8f55a', 8);
  label(s, 149, 183, 'u*', '#888', 8);

  // SRPC1
  var p1 = svgEl('path', { d: 'M 48,50 Q 110,88 238,158', stroke: '#f5a623', 'stroke-width': '1.8', fill: 'none' });
  s.appendChild(p1);
  label(s, 196, 148, 'SRPC₁', '#f5a623', 8);

  // SRPC2 dashed
  var p2 = svgEl('path', { d: 'M 48,86 Q 110,124 238,172', stroke: '#f5a623', 'stroke-width': '1.8', fill: 'none', 'stroke-dasharray': '5,4' });
  s.appendChild(p2);
  label(s, 196, 170, 'SRPC₂', '#f5a623', 8);

  dot(s, 158, 92, '#c8f55a');
  label(s, 163, 90, 'A', '#c8f55a', 11);
  dot(s, 158, 128, '#ff6b6b');
  label(s, 163, 126, 'B', '#ff6b6b', 11);

  s.appendChild(svgEl('line', { x1: '158', y1: '97', x2: '158', y2: '123', stroke: '#888', 'stroke-width': '1.2', 'stroke-dasharray': '2,2', 'marker-end': 'url(#phil)' }));

  return s;
}

// ── 3. IS CURVE SHIFT ─────────────────────────────────────
function buildIS() {
  var s = makeSVG();
  addArrowMarker(s, 'isc');
  addAxes(s, 'isc', 'r', 'y');

  // IS1
  s.appendChild(svgEl('line', { x1: '44', y1: '44', x2: '238', y2: '164', stroke: '#7b9fff', 'stroke-width': '1.8' }));
  label(s, 218, 160, 'IS₁', '#7b9fff', 9);

  // IS2 dashed
  s.appendChild(svgEl('line', { x1: '78', y1: '44', x2: '265', y2: '161', stroke: '#7b9fff', 'stroke-width': '1.8', 'stroke-dasharray': '5,4' }));
  label(s, 248, 157, 'IS₂', '#7b9fff', 9);

  // r0 dashed horizontal
  s.appendChild(svgEl('line', { x1: '30', y1: '100', x2: '258', y2: '100', stroke: '#555', 'stroke-width': '1', 'stroke-dasharray': '3,3' }));
  label(s, 32, 96, 'r₀', '#888', 8);

  dot(s, 140, 100, '#c8f55a');
  dot(s, 172, 100, '#f5a623');

  s.appendChild(svgEl('line', { x1: '140', y1: '100', x2: '140', y2: '168', stroke: '#555', 'stroke-width': '1', 'stroke-dasharray': '2,2' }));
  s.appendChild(svgEl('line', { x1: '172', y1: '100', x2: '172', y2: '168', stroke: '#555', 'stroke-width': '1', 'stroke-dasharray': '2,2' }));
  label(s, 132, 182, 'y₁', '#888', 8);
  label(s, 165, 182, 'y₂', '#888', 8);

  s.appendChild(svgEl('line', { x1: '145', y1: '100', x2: '167', y2: '100', stroke: '#f5a623', 'stroke-width': '1.5', 'marker-end': 'url(#isc)' }));

  return s;
}

// ── 4. TOBIN'S Q ──────────────────────────────────────────
function buildTobinsQ() {
  var s = makeSVG();
  addArrowMarker(s, 'tobq');
  addAxes(s, 'tobq', 'V', 'K');

  // Market value line (steeper)
  s.appendChild(svgEl('line', { x1: '30', y1: '168', x2: '238', y2: '24', stroke: '#c8f55a', 'stroke-width': '1.8' }));
  label(s, 188, 22, 'Markedsværdi V', '#c8f55a', 8);

  // Replacement cost line (flatter)
  s.appendChild(svgEl('line', { x1: '30', y1: '168', x2: '238', y2: '74', stroke: '#f5a623', 'stroke-width': '1.8' }));
  label(s, 188, 71, 'Genanskaffelse pK', '#f5a623', 8);

  // q=1 line (dashed horizontal at intersection level)
  s.appendChild(svgEl('line', { x1: '30', y1: '124', x2: '260', y2: '124', stroke: '#7b9fff', 'stroke-width': '1', 'stroke-dasharray': '3,2' }));
  label(s, 32, 120, 'q = 1', '#7b9fff', 8);

  // Invest zone label
  label(s, 58, 82, 'q > 1', '#c8f55a', 9);
  label(s, 58, 94, 'Investér!', '#c8f55a', 8);

  // Stop zone label
  label(s, 128, 152, 'q < 1', '#ff6b6b', 9);
  label(s, 128, 164, 'Stop', '#ff6b6b', 8);

  return s;
}

// ── 5. ZERO LOWER BOUND ───────────────────────────────────
function buildZLB() {
  var s = makeSVG();
  addArrowMarker(s, 'zlb');
  addAxes(s, 'zlb', 'π', 'y');

  // ZLB line
  s.appendChild(svgEl('line', { x1: '30', y1: '136', x2: '266', y2: '136', stroke: '#ff6b6b', 'stroke-width': '1.2', 'stroke-dasharray': '4,3' }));
  label(s, 32, 131, 'i = 0 (ZLB)', '#ff6b6b', 8);

  // Normal AD
  s.appendChild(svgEl('line', { x1: '44', y1: '46', x2: '230', y2: '163', stroke: '#7b9fff', 'stroke-width': '1.8' }));
  label(s, 186, 161, 'AD (normal)', '#7b9fff', 8);

  // ZLB AD — flatter/curves
  var p = svgEl('path', { d: 'M 54,136 Q 100,145 148,152 Q 196,160 232,166', stroke: '#ff6b6b', 'stroke-width': '1.8', fill: 'none' });
  s.appendChild(p);
  label(s, 188, 181, 'AD (ZLB)', '#ff6b6b', 8);

  dot(s, 128, 104, '#c8f55a');
  label(s, 133, 102, 'A', '#c8f55a', 11);

  dot(s, 86, 146, '#ff6b6b');
  label(s, 91, 144, 'B', '#ff6b6b', 11);

  s.appendChild(svgEl('line', { x1: '124', y1: '107', x2: '92', y2: '142', stroke: '#888', 'stroke-width': '1.2', 'stroke-dasharray': '2,2', 'marker-end': 'url(#zlb)' }));

  return s;
}

// ── REGISTRY ──────────────────────────────────────────────
var GRAPHS = {
  'ad-as-shock': buildADAS,
  'phillips':    buildPhillips,
  'is-curve':    buildIS,
  'tobins-q':    buildTobinsQ,
  'zlb':         buildZLB
};

function renderGraph(containerId, key) {
  var div = document.getElementById(containerId);
  div.innerHTML = '';
  if (key && GRAPHS[key]) {
    div.appendChild(GRAPHS[key]());
    div.classList.remove('hidden');
  } else {
    div.classList.add('hidden');
  }
}
