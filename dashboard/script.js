// ============================================================
//  TRANSLATIONS
// ============================================================
const LANG = {
  mn: {
    'greeting.morning': 'Өглөөний мэнд',
    'greeting.afternoon': 'Өдрийн мэнд',
    'greeting.evening': 'Оройн мэнд',
    'nav.habits': 'Зуршил',
    'nav.finance': 'Санхүү',
    'nav.notes': 'Тэмдэглэл',
    'bnav.home': 'Нүүр',
    'habits.add': '+ Зуршил нэмэх',
    'habits.empty': 'Зуршил байхгүй байна. Нэмж эхэл!',
    'habits.streak': '{n} өдрийн streak',
    'habits.done': 'Өнөөдөр хийсэн',
    'habits.mark': 'Хийсэн гэж тэмдэглэх',
    'habits.hm.label': 'Сүүлийн 35 өдөр',
    'habits.not.today': 'Өнөөдөр хуваарьгүй',
    'habits.time': 'Цаг',
    'habits.days': 'Өдөр сонгох',
    'day.0': 'Ня', 'day.1': 'Да', 'day.2': 'Мя',
    'day.3': 'Лх', 'day.4': 'Пү', 'day.5': 'Ба', 'day.6': 'Бя',
    'dash.habits.empty': 'Зуршил байхгүй байна',
    'dash.notes.empty': 'Тэмдэглэл байхгүй байна',
    'fin.add': '+ Нэмэх',
    'fin.title': 'Санхүүгийн төлөвлөгөө',
    'fin.balance': 'Нийт баланс',
    'fin.income': 'Нийт орлого',
    'fin.expense': 'Нийт зарлага',
    'fin.trans': 'Гүйлгээнүүд',
    'fin.chart': 'Зарлагын задаргаа',
    'fin.empty': 'Гүйлгээ байхгүй байна.',
    'fin.chart.empty': 'Зарлага байхгүй байна',
    'fin.monthly.title': 'Сарын тайлан',
    'fin.monthly.income': 'Сарын орлого',
    'fin.monthly.expense': 'Сарын зарлага',
    'fin.monthly.net': 'Цэвэр дүн',
    'fin.monthly.cats': 'Зарлагын ангилал',
    'fin.monthly.empty': 'Энэ сард гүйлгээ байхгүй',
    'notes.add': '+ Тэмдэглэл нэмэх',
    'notes.title': 'Тэмдэглэл',
    'notes.empty': 'Тэмдэглэл байхгүй байна.',
    'note.untitled': 'Гарчиггүй',
    'note.modal.edit': 'Тэмдэглэл засах',
    'dash.stat.habits': 'Өнөөдрийн зуршил',
    'dash.stat.balance': 'Нийт баланс',
    'dash.stat.notes': 'Тэмдэглэлүүд',
    'dash.card.habits': 'Өнөөдрийн зуршил',
    'dash.card.notes': 'Чухал тэмдэглэл',
    'feed.title': 'Өнөөдрийн тэмдэглэл',
    'feed.empty': 'Өнөөдөр ямар ч үйлдэл хийгдээгүй байна',
    'feed.habit': 'зуршил',
    'feed.note': 'тэмдэглэл',
    'feed.trans.in': 'орлого',
    'feed.trans.exp': 'зарлага',
    'modal.habit.h': 'Шинэ зуршил',
    'modal.habit.ph': 'Зуршлын нэр...',
    'modal.color': 'Өнгө сонгох',
    'modal.cancel': 'Болих',
    'modal.save': 'Хадгалах',
    'modal.trans.h': 'Шинэ гүйлгээ',
    'modal.income': 'Орлого',
    'modal.expense': 'Зарлага',
    'modal.amount.ph': 'Дүн (₮)...',
    'modal.desc.ph': 'Тайлбар...',
    'modal.note.h': 'Шинэ тэмдэглэл',
    'modal.note.title.ph': 'Гарчиг...',
    'modal.note.content.ph': 'Агуулга...',
    'modal.note.star': 'Чухал гэж тэмдэглэх ⭐',
    'pomo.reset': '↺ Дахиргаа',
    'pomo.start': '▶ Эхлэх',
    'pomo.pause': '⏸ Зогсоох',
    'pomo.skip': '⏭ Алгасах',
    'pomo.sessions': 'Дууссан сессийн тоо',
    'pomo.work.label': 'Ажил:',
    'pomo.break.label': 'Амралт:',
    'pomo.min': 'мин',
    'pomo.work.mode': 'Ажлын цаг',
    'pomo.break.mode': 'Амралтын цаг',
    'notify.rest.title': 'Амрах цаг боллоо!',
    'notify.rest.body': '5 минут амраарай',
    'notify.work.title': 'Ажлын цаг!',
    'notify.work.body': 'Дахин эхэл',
    'cat.salary': 'Цалин',   'cat.food': 'Хоол',
    'cat.transport': 'Тээвэр', 'cat.shopping': 'Худалдаа',
    'cat.bills': 'Нийтийн үйлчилгээ', 'cat.edu': 'Боловсрол',
    'cat.fun': 'Тоглоом',    'cat.other': 'Бусад',
    'fin.income.type': 'Орлого', 'fin.expense.type': 'Зарлага',
    'csv.date': 'Огноо', 'csv.type': 'Төрөл', 'csv.amount': 'Дүн',
    'csv.cat': 'Ангилал',    'csv.desc': 'Тайлбар',
    'locale': 'mn-MN',
  },
  en: {
    'greeting.morning': 'Good morning',
    'greeting.afternoon': 'Good afternoon',
    'greeting.evening': 'Good evening',
    'nav.habits': 'Habits',
    'nav.finance': 'Finance',
    'nav.notes': 'Notes',
    'bnav.home': 'Home',
    'habits.add': '+ Add Habit',
    'habits.empty': 'No habits yet. Start adding!',
    'habits.streak': '{n} day streak',
    'habits.done': 'Done today',
    'habits.mark': 'Mark as done',
    'habits.hm.label': 'Last 35 days',
    'habits.not.today': 'Not scheduled today',
    'habits.time': 'Time',
    'habits.days': 'Select days',
    'day.0': 'Su', 'day.1': 'Mo', 'day.2': 'Tu',
    'day.3': 'We', 'day.4': 'Th', 'day.5': 'Fr', 'day.6': 'Sa',
    'dash.habits.empty': 'No habits yet',
    'dash.notes.empty': 'No notes yet',
    'fin.add': '+ Add',
    'fin.title': 'Financial Planner',
    'fin.balance': 'Total Balance',
    'fin.income': 'Total Income',
    'fin.expense': 'Total Expenses',
    'fin.trans': 'Transactions',
    'fin.chart': 'Expense Breakdown',
    'fin.empty': 'No transactions yet.',
    'fin.chart.empty': 'No expenses yet',
    'fin.monthly.title': 'Monthly Report',
    'fin.monthly.income': 'Monthly Income',
    'fin.monthly.expense': 'Monthly Expenses',
    'fin.monthly.net': 'Net',
    'fin.monthly.cats': 'Expense Categories',
    'fin.monthly.empty': 'No transactions this month',
    'notes.add': '+ Add Note',
    'notes.title': 'Notes',
    'notes.empty': 'No notes yet.',
    'note.untitled': 'Untitled',
    'note.modal.edit': 'Edit Note',
    'dash.stat.habits': "Today's Habits",
    'dash.stat.balance': 'Total Balance',
    'dash.stat.notes': 'Notes',
    'dash.card.habits': "Today's Habits",
    'dash.card.notes': 'Pinned Notes',
    'feed.title': "Today's Activity",
    'feed.empty': 'No activity yet today',
    'feed.habit': 'habit',
    'feed.note': 'note',
    'feed.trans.in': 'income',
    'feed.trans.exp': 'expense',
    'modal.habit.h': 'New Habit',
    'modal.habit.ph': 'Habit name...',
    'modal.color': 'Choose color',
    'modal.cancel': 'Cancel',
    'modal.save': 'Save',
    'modal.trans.h': 'New Transaction',
    'modal.income': 'Income',
    'modal.expense': 'Expense',
    'modal.amount.ph': 'Amount (₮)...',
    'modal.desc.ph': 'Description...',
    'modal.note.h': 'New Note',
    'modal.note.title.ph': 'Title...',
    'modal.note.content.ph': 'Content...',
    'modal.note.star': 'Mark as important ⭐',
    'pomo.reset': '↺ Reset',
    'pomo.start': '▶ Start',
    'pomo.pause': '⏸ Pause',
    'pomo.skip': '⏭ Skip',
    'pomo.sessions': 'Completed sessions',
    'pomo.work.label': 'Work:',
    'pomo.break.label': 'Break:',
    'pomo.min': 'min',
    'pomo.work.mode': 'Work time',
    'pomo.break.mode': 'Break time',
    'notify.rest.title': 'Time to rest!',
    'notify.rest.body': 'Take a 5-minute break',
    'notify.work.title': 'Work time!',
    'notify.work.body': 'Start again',
    'cat.salary': 'Salary',    'cat.food': 'Food',
    'cat.transport': 'Transport', 'cat.shopping': 'Shopping',
    'cat.bills': 'Utilities',  'cat.edu': 'Education',
    'cat.fun': 'Entertainment', 'cat.other': 'Other',
    'fin.income.type': 'Income', 'fin.expense.type': 'Expense',
    'csv.date': 'Date', 'csv.type': 'Type', 'csv.amount': 'Amount',
    'csv.cat': 'Category', 'csv.desc': 'Description',
    'locale': 'en-US',
  }
};

let currentLang = localStorage.getItem('ms_lang') || 'mn';
function t(key) { return (LANG[currentLang] || LANG.mn)[key] || key; }

// ============================================================
//  THREE.JS 3D BACKGROUND — sky + clouds
// ============================================================
(function initBg() {
  const canvas = document.getElementById('bg');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x8dc8e8);
  scene.fog = new THREE.Fog(0xc5e8f8, 40, 90);

  const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 200);
  camera.position.set(0, 1, 22);

  // ── LIGHTING ──
  scene.add(new THREE.AmbientLight(0xffffff, 1.4));
  const sun = new THREE.DirectionalLight(0xfff8f0, 2.4);
  sun.position.set(6, 12, 8); scene.add(sun);
  const fill = new THREE.DirectionalLight(0xe8f4ff, 0.9);
  fill.position.set(-8, 4, 5); scene.add(fill);

  // ── CLOUD BUILDER ──
  function makeCloud(defs, color, emissiveColor) {
    const mat = new THREE.MeshStandardMaterial({
      color: color || 0xffffff,
      roughness: 1.0, metalness: 0,
      emissive: emissiveColor || 0xfff0f8,
      emissiveIntensity: 0.07,
    });
    const g = new THREE.Group();
    defs.forEach(([x, y, z, r]) => {
      const m = new THREE.Mesh(new THREE.SphereGeometry(r, 11, 9), mat);
      m.position.set(x, y, z); g.add(m);
    });
    return g;
  }

  // Main bottom cloud — large, light pink-white
  const mainCloud = makeCloud([
    [0,   0,    0,    5.0],
    [6.5, 0.7,  0.5,  4.2],
    [-6,  0.5,  0.3,  4.0],
    [13,  -0.2, 0.8,  3.5],
    [-13, -0.1, 0.6,  3.3],
    [3,   2.2,  0.2,  3.4],
    [-3,  2.0,  0.3,  3.2],
    [9,   1.5,  0.6,  2.9],
    [-9,  1.3,  0.5,  2.7],
    [18,  -0.8, 1.0,  2.6],
    [-18, -0.6, 0.8,  2.4],
    [0,   -1.5, 0.6,  4.0],
    [5.5, -2.0, 0.8,  3.4],
    [-5,  -1.8, 0.7,  3.2],
    [22,  -1.2, 1.2,  2.0],
    [-22, -1.0, 1.0,  1.8],
  ], 0xfce6f0, 0xffd8ec);
  mainCloud.position.set(0, -11.5, -3);
  scene.add(mainCloud);

  // Side cloud left
  const cloud2 = makeCloud([
    [0,  0,   0,   2.2], [3.2, 0.4, 0,   1.8],
    [-3, 0.3, 0,   1.7], [1.2, 1.1, 0,   1.5],
    [5.5, -0.2, 0.2, 1.3], [-5, 0.1, 0.2, 1.2],
  ], 0xfdfbff, 0xf4f0ff);
  cloud2.position.set(-17, -7, -12);
  scene.add(cloud2);

  // Side cloud right
  const cloud3 = makeCloud([
    [0,  0,   0,   2.4], [3.5, 0.4, 0,   2.0],
    [-3, 0.3, 0,   1.9], [1.5, 1.2, 0,   1.7],
    [6,  -0.2, 0.2, 1.4], [-5.5, 0, 0.2, 1.3],
  ], 0xfff8fd, 0xfff0f8);
  cloud3.position.set(15, -7.5, -11);
  scene.add(cloud3);

  // Upper wispy clouds
  const cloud4 = makeCloud([
    [0,  0, 0,  1.5], [2.8, 0.2, 0, 1.2],
    [-2.5, 0.1, 0, 1.1], [5, -0.1, 0.2, 0.9],
  ], 0xffffff, 0xf0f8ff);
  cloud4.position.set(-15, 5, -20);
  scene.add(cloud4);

  const cloud5 = makeCloud([
    [0,  0, 0,  1.3], [2.4, 0.2, 0, 1.0],
    [-2.2, 0.1, 0, 0.95], [4.2, -0.1, 0.2, 0.8],
  ], 0xfafcff, 0xf0f8ff);
  cloud5.position.set(13, 7, -24);
  scene.add(cloud5);

  // Small background clouds
  const cloud6 = makeCloud([
    [0, 0, 0, 1.0], [1.8, 0.2, 0, 0.8], [-1.6, 0.1, 0, 0.75],
  ], 0xffffff, 0xf5f8ff);
  cloud6.position.set(0, 8, -28);
  scene.add(cloud6);

  // Subtle sky sparkles
  const pCount = 400;
  const pPts = new Float32Array(pCount * 3);
  for (let i = 0; i < pCount; i++) {
    pPts[i*3]   = (Math.random() - 0.5) * 60;
    pPts[i*3+1] = Math.random() * 18 + 1;
    pPts[i*3+2] = (Math.random() - 0.5) * 50 - 8;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPts, 3));
  scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({
    color: 0xffffff, size: 0.06, transparent: true, opacity: 0.55,
  })));

  // ── N LETTER (pink, floating above clouds) ──
  const BW = 1.5, NH = 8.5, NW = 5.2, DEP = 1.5;
  const diagSpan = NW - 2 * BW;
  const diagLen  = Math.sqrt(diagSpan * diagSpan + NH * NH);
  const diagAngle = Math.atan2(diagSpan, NH);

  const nMat = new THREE.MeshPhysicalMaterial({
    color: 0xf06098, emissive: 0xcc2060, emissiveIntensity: 0.22,
    metalness: 0.68, roughness: 0.16, clearcoat: 1.0, clearcoatRoughness: 0.08,
    transparent: true, opacity: 0.32,
  });
  const bgN = new THREE.Group();
  const nBarL = new THREE.Mesh(new THREE.BoxGeometry(BW, NH, DEP), nMat);
  nBarL.position.x = -NW / 2 + BW / 2;
  const nBarR = new THREE.Mesh(new THREE.BoxGeometry(BW, NH, DEP), nMat);
  nBarR.position.x = NW / 2 - BW / 2;
  const nDiag = new THREE.Mesh(new THREE.BoxGeometry(BW * 0.88, diagLen, DEP), nMat);
  nDiag.rotation.z = -diagAngle;
  bgN.add(nBarL, nBarR, nDiag);

  const wireMat = new THREE.MeshBasicMaterial({ color: 0xff80c8, wireframe: true, transparent: true, opacity: 0.22 });
  [nBarL, nBarR, nDiag].forEach(m => {
    const wm = new THREE.Mesh(m.geometry.clone(), wireMat);
    wm.position.copy(m.position); wm.rotation.copy(m.rotation); bgN.add(wm);
  });

  // Star cloud orbiting N
  const nStarPts = new Float32Array(60 * 3);
  for (let i = 0; i < 60; i++) {
    const r = 3.8 + Math.random() * 5;
    const th = Math.random() * Math.PI * 2;
    const ph = (Math.random() - 0.5) * Math.PI;
    nStarPts[i*3]   = r * Math.cos(ph) * Math.cos(th);
    nStarPts[i*3+1] = r * 0.6 * Math.sin(ph);
    nStarPts[i*3+2] = r * 0.3 * Math.cos(ph) * Math.sin(th);
  }
  const nStarGeo = new THREE.BufferGeometry();
  nStarGeo.setAttribute('position', new THREE.BufferAttribute(nStarPts, 3));
  bgN.add(new THREE.Points(nStarGeo, new THREE.PointsMaterial({
    color: 0xffd4ee, size: 0.12, transparent: true, opacity: 0.9,
  })));

  bgN.position.set(2, 2, -10);
  scene.add(bgN);

  // Lights for N
  const nL1 = new THREE.PointLight(0xff69b4, 20, 26); scene.add(nL1);
  const nL2 = new THREE.PointLight(0xffd700, 14, 22); scene.add(nL2);

  let mx = 0, my = 0;
  addEventListener('mousemove', e => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; });

  let bgT = 0;
  (function tick() {
    requestAnimationFrame(tick);
    bgT += 0.005;
    // Float clouds gently
    mainCloud.position.y = -11.5 + Math.sin(bgT * 0.35) * 0.45;
    cloud2.position.y    = -7    + Math.sin(bgT * 0.40 + 1.2) * 0.32;
    cloud3.position.y    = -7.5  + Math.sin(bgT * 0.38 + 2.1) * 0.38;
    cloud4.position.y    = 5     + Math.sin(bgT * 0.30 + 0.8) * 0.22;
    cloud5.position.y    = 7     + Math.sin(bgT * 0.28 + 1.6) * 0.18;
    cloud6.position.y    = 8     + Math.sin(bgT * 0.25 + 3.0) * 0.15;
    // N rotation
    bgN.rotation.y += 0.004;
    bgN.rotation.x = Math.sin(bgT * 0.55) * 0.09;
    nL1.position.set(2 + Math.sin(bgT * 0.9) * 6, 2 + Math.cos(bgT * 0.6) * 4, -7);
    nL2.position.set(2 + Math.cos(bgT * 0.7) * 5, 2 + Math.sin(bgT * 0.8) * 3, -13);
    // Camera parallax
    camera.position.x += (mx * 4 - camera.position.x) * 0.03;
    camera.position.y += (1 - my * 3 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  })();

  addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });
})();

// ============================================================
//  STATE
// ============================================================
const S = {
  habits:   JSON.parse(localStorage.getItem('ms_habits')   || '[]'),
  finance:  JSON.parse(localStorage.getItem('ms_finance')  || '[]'),
  notes:    JSON.parse(localStorage.getItem('ms_notes')    || '[]'),
  activity: JSON.parse(localStorage.getItem('ms_activity') || '[]'),
  selColor:     '#7c3aed',
  transType:    'income',
  editingNoteId: null,
};

function persist() {
  localStorage.setItem('ms_habits',   JSON.stringify(S.habits));
  localStorage.setItem('ms_finance',  JSON.stringify(S.finance));
  localStorage.setItem('ms_notes',    JSON.stringify(S.notes));
  localStorage.setItem('ms_activity', JSON.stringify(S.activity));
}

function uid()   { return Date.now().toString(36) + Math.random().toString(36).slice(2, 5); }
function today() { return new Date().toISOString().split('T')[0]; }
function fmtDate(d) { return new Date(d).toLocaleDateString(t('locale'), { month: 'short', day: 'numeric' }); }
function fmtTime(iso) { return new Date(iso).toLocaleTimeString(t('locale'), { hour: '2-digit', minute: '2-digit' }); }
function fmtMoney(n) { return '₮' + Math.abs(n).toLocaleString(); }
function esc(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

function logActivity(entry) {
  S.activity.push({ ...entry, ts: new Date().toISOString() });
  // Keep only last 200 entries
  if (S.activity.length > 200) S.activity = S.activity.slice(-200);
}

function removeActivityLog(type, id) {
  S.activity = S.activity.filter(e => !(e.type === type && e.id === id && e.ts.startsWith(today())));
}

// ============================================================
//  NAVIGATION
// ============================================================
function switchTab(name) {
  document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-btn, .bnav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  document.querySelectorAll(`[data-tab="${name}"]`).forEach(b => b.classList.add('active'));
}

// ============================================================
//  HABITS
// ============================================================
function streak(habit) {
  let s = 0;
  const base = new Date();
  for (let i = 0; i < 365; i++) {
    const d = new Date(base); d.setDate(d.getDate() - i);
    const ds = d.toISOString().split('T')[0];
    if (habit.completedDates.includes(ds)) s++;
    else if (i > 0) break;
  }
  return s;
}

function doneToday(h) { return h.completedDates.includes(today()); }

function isScheduledToday(h) {
  if (!h.days || h.days.length === 0 || h.days.length === 7) return true;
  return h.days.includes(new Date().getDay());
}

function toggleHabit(id) {
  const h = S.habits.find(x => x.id === id);
  if (!h) return;
  const td = today();
  if (h.completedDates.includes(td)) {
    h.completedDates = h.completedDates.filter(d => d !== td);
    removeActivityLog('habit', id);
  } else {
    h.completedDates.push(td);
    logActivity({ type: 'habit', id, name: h.name, color: h.color });
  }
  persist(); renderHabits(); renderDashboard();
}

function addHabit(name, color, time, days) {
  if (!name.trim()) return;
  S.habits.push({ id: uid(), name: name.trim(), color, completedDates: [], time: time || '', days: days || [] });
  persist(); renderHabits(); renderDashboard();
}

function delHabit(id) {
  S.habits = S.habits.filter(h => h.id !== id);
  persist(); renderHabits(); renderDashboard();
}

function buildHeatmap(habit) {
  const squares = [];
  for (let i = 34; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const ds = d.toISOString().split('T')[0];
    const done = habit.completedDates.includes(ds);
    squares.push(`<div class="hm-sq ${done ? 'done' : ''}" title="${ds}"></div>`);
  }
  return `<div class="hm-label">${t('habits.hm.label')}</div><div class="heatmap">${squares.join('')}</div>`;
}

function renderHabits() {
  const el = document.getElementById('habits-list');
  if (!S.habits.length) {
    el.innerHTML = `<div class="empty">${t('habits.empty')}</div>`;
    return;
  }
  el.innerHTML = S.habits.map(h => {
    const done = doneToday(h);
    const s = streak(h);
    const scheduled = isScheduledToday(h);
    const streakStr = t('habits.streak').replace('{n}', s);
    const daysStr = (h.days && h.days.length > 0 && h.days.length < 7)
      ? h.days.map(d => t(`day.${d}`)).join(' ')
      : '';
    const timeStr = h.time || '';
    const metaStr = [timeStr, daysStr].filter(Boolean).join(' · ');
    return `
      <div class="card habit-card ${!scheduled ? 'not-today' : ''}" style="--hc:${h.color}">
        <div class="habit-head">
          <div>
            <span class="habit-nm">${esc(h.name)}</span>
            ${metaStr ? `<span class="habit-meta">${esc(metaStr)}</span>` : ''}
          </div>
          <button class="habit-del" onclick="delHabit('${h.id}')">✕</button>
        </div>
        <div class="habit-streak">${streakStr}</div>
        <div class="habit-toggle" onclick="toggleHabit('${h.id}')">
          <div class="h-circle ${done ? 'done' : ''}"></div>
          <span class="habit-status">${done ? t('habits.done') : (scheduled ? t('habits.mark') : t('habits.not.today'))}</span>
        </div>
        ${buildHeatmap(h)}
      </div>`;
  }).join('');
}

// ============================================================
//  FINANCE
// ============================================================
function balance()  { return S.finance.reduce((a, tx) => a + (tx.type === 'income' ? tx.amount : -tx.amount), 0); }
function income()   { return S.finance.filter(tx => tx.type === 'income').reduce((a, tx) => a + tx.amount, 0); }
function expense()  { return S.finance.filter(tx => tx.type === 'expense').reduce((a, tx) => a + tx.amount, 0); }

function addTrans(type, amount, cat, desc) {
  if (!amount || isNaN(amount)) return;
  const tx = { id: uid(), type, amount: parseFloat(amount), category: cat, description: desc.trim() || cat, date: today() };
  S.finance.push(tx);
  logActivity({ type: 'trans', id: tx.id, transType: type, amount: tx.amount, cat });
  persist(); renderFinance(); renderDashboard();
}

function delTrans(id) {
  S.finance = S.finance.filter(tx => tx.id !== id);
  persist(); renderFinance(); renderDashboard();
}

function renderFinanceChart() {
  const chart = document.getElementById('finance-chart');
  const cats = {};
  S.finance.filter(tx => tx.type === 'expense').forEach(tx => {
    cats[tx.category] = (cats[tx.category] || 0) + tx.amount;
  });
  const entries = Object.entries(cats).sort((a, b) => b[1] - a[1]);
  if (!entries.length) {
    chart.innerHTML = `<div class="empty" style="padding:20px">${t('fin.chart.empty')}</div>`;
    return;
  }
  const max = Math.max(...entries.map(e => e[1]));
  chart.innerHTML = entries.map(([cat, amt]) => `
    <div class="chart-row">
      <span class="chart-label" title="${esc(cat)}">${esc(cat)}</span>
      <div class="chart-bar-wrap"><div class="chart-bar" style="width:${(amt/max*100).toFixed(1)}%"></div></div>
      <span class="chart-val">${fmtMoney(amt)}</span>
    </div>`).join('');
}

function renderMonthlyReport() {
  const el = document.getElementById('monthly-report');
  const now = new Date();
  const ym = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`;
  const monthTx = S.finance.filter(tx => tx.date.startsWith(ym));

  if (!monthTx.length) {
    el.innerHTML = `<div class="empty" style="padding:16px">${t('fin.monthly.empty')}</div>`;
    return;
  }

  const mIncome  = monthTx.filter(tx => tx.type === 'income').reduce((a, tx) => a + tx.amount, 0);
  const mExpense = monthTx.filter(tx => tx.type === 'expense').reduce((a, tx) => a + tx.amount, 0);
  const mNet     = mIncome - mExpense;

  const cats = {};
  monthTx.filter(tx => tx.type === 'expense').forEach(tx => {
    cats[tx.category] = (cats[tx.category] || 0) + tx.amount;
  });
  const catEntries = Object.entries(cats).sort((a, b) => b[1] - a[1]);
  const catMax = catEntries.length ? Math.max(...catEntries.map(e => e[1])) : 1;

  const monthName = now.toLocaleDateString(t('locale'), { year: 'numeric', month: 'long' });

  el.innerHTML = `
    <div class="monthly-header">${monthName}</div>
    <div class="monthly-stats">
      <div class="monthly-stat">
        <span class="monthly-stat-lbl">${t('fin.monthly.income')}</span>
        <span class="monthly-stat-val green">${fmtMoney(mIncome)}</span>
      </div>
      <div class="monthly-stat">
        <span class="monthly-stat-lbl">${t('fin.monthly.expense')}</span>
        <span class="monthly-stat-val red">${fmtMoney(mExpense)}</span>
      </div>
      <div class="monthly-stat">
        <span class="monthly-stat-lbl">${t('fin.monthly.net')}</span>
        <span class="monthly-stat-val" style="color:${mNet>=0?'var(--green)':'var(--red)'}">${mNet>=0?'+':''}${fmtMoney(mNet)}</span>
      </div>
    </div>
    <div class="monthly-bar-bg">
      <div class="monthly-bar-income" style="width:${mIncome+mExpense>0?((mIncome/(mIncome+mExpense))*100).toFixed(1):0}%" title="${t('fin.monthly.income')}"></div>
      <div class="monthly-bar-expense" style="width:${mIncome+mExpense>0?((mExpense/(mIncome+mExpense))*100).toFixed(1):0}%" title="${t('fin.monthly.expense')}"></div>
    </div>
    ${catEntries.length ? `
    <div class="monthly-cats-title">${t('fin.monthly.cats')}</div>
    ${catEntries.map(([cat, amt]) => `
      <div class="chart-row">
        <span class="chart-label" title="${esc(cat)}">${esc(cat)}</span>
        <div class="chart-bar-wrap"><div class="chart-bar" style="width:${(amt/catMax*100).toFixed(1)}%"></div></div>
        <span class="chart-val">${fmtMoney(amt)}</span>
      </div>`).join('')}` : ''}`;
}

function renderFinance() {
  const bal = balance();
  document.getElementById('fin-balance').textContent = fmtMoney(bal);
  document.getElementById('fin-balance').style.color = bal >= 0 ? 'var(--green)' : 'var(--red)';
  document.getElementById('fin-income').textContent  = fmtMoney(income());
  document.getElementById('fin-expense').textContent = fmtMoney(expense());

  const list = document.getElementById('trans-list');
  if (!S.finance.length) {
    list.innerHTML = `<div class="empty">${t('fin.empty')}</div>`;
  } else {
    list.innerHTML = [...S.finance].reverse().map(tx => `
      <div class="trans-row">
        <div class="trans-left">
          <div class="trans-dot ${tx.type}"></div>
          <div class="trans-info">
            <span class="trans-nm">${esc(tx.description)}</span>
            <span class="trans-sub">${esc(tx.category)} · ${fmtDate(tx.date)}</span>
          </div>
        </div>
        <div class="trans-right">
          <span class="trans-amt ${tx.type}">${tx.type === 'income' ? '+' : '-'}${fmtMoney(tx.amount)}</span>
          <button class="trans-del" onclick="delTrans('${tx.id}')">✕</button>
        </div>
      </div>`).join('');
  }
  renderFinanceChart();
  renderMonthlyReport();
}

// ============================================================
//  NOTES
// ============================================================
function addNote(title, content, important) {
  if (!title.trim() && !content.trim()) return;
  if (S.editingNoteId) {
    const n = S.notes.find(x => x.id === S.editingNoteId);
    if (n) { n.title = title.trim() || t('note.untitled'); n.content = content.trim(); n.important = important; }
    S.editingNoteId = null;
  } else {
    const newNote = { id: uid(), title: title.trim() || t('note.untitled'), content: content.trim(), important, date: today() };
    S.notes.push(newNote);
    logActivity({ type: 'note', id: newNote.id, title: newNote.title });
  }
  persist(); renderNotes(); renderDashboard();
}

function delNote(id) {
  S.notes = S.notes.filter(n => n.id !== id);
  persist(); renderNotes(); renderDashboard();
}

function starNote(id) {
  const n = S.notes.find(x => x.id === id);
  if (n) { n.important = !n.important; persist(); renderNotes(); renderDashboard(); }
}

function openEditNote(id) {
  const n = S.notes.find(x => x.id === id);
  if (!n) return;
  S.editingNoteId = id;
  document.getElementById('note-modal-title').textContent = t('note.modal.edit');
  document.getElementById('note-title').value = n.title;
  document.getElementById('note-content').value = n.content;
  document.getElementById('note-star').checked = n.important;
  openModal('modal-note');
  setTimeout(() => document.getElementById('note-title').focus(), 80);
}

function renderNotes() {
  const grid = document.getElementById('notes-grid');
  if (!S.notes.length) {
    grid.innerHTML = `<div class="empty" style="grid-column:1/-1">${t('notes.empty')}</div>`;
    return;
  }
  const sorted = [...S.notes].sort((a, b) => b.important - a.important);
  grid.innerHTML = sorted.map(n => `
    <div class="card note-card" data-id="${n.id}" ${n.important ? 'style="border-color:rgba(245,158,11,.35)"' : ''}>
      ${n.important ? '<span class="note-star-badge">⭐</span>' : ''}
      <div class="note-ttl">${esc(n.title)}</div>
      <div class="note-body">${esc(n.content)}</div>
      <div class="note-foot">
        <span class="note-date">${fmtDate(n.date)}</span>
        <div class="note-actions">
          <button class="note-btn star-btn" onclick="event.stopPropagation();starNote('${n.id}')" title="Important">${n.important ? '⭐' : '☆'}</button>
          <button class="note-btn" onclick="event.stopPropagation();delNote('${n.id}')">✕</button>
        </div>
      </div>
    </div>`).join('');

  document.getElementById('notes-grid').querySelectorAll('.note-card').forEach(card => {
    card.addEventListener('click', () => openEditNote(card.dataset.id));
  });
}

// ============================================================
//  TODAY'S FEED
// ============================================================
function renderTodayFeed() {
  const feed = document.getElementById('today-feed');
  const todayEntries = S.activity
    .filter(e => e.ts && e.ts.startsWith(today()))
    .sort((a, b) => b.ts.localeCompare(a.ts));

  if (!todayEntries.length) {
    feed.innerHTML = `<div class="feed-empty">${t('feed.empty')}</div>`;
    return;
  }

  feed.innerHTML = todayEntries.map(e => {
    const time = fmtTime(e.ts);
    if (e.type === 'habit') {
      return `<div class="feed-item">
        <div class="feed-dot" style="background:${e.color||'var(--purple)'}"></div>
        <div class="feed-body">
          <span class="feed-name">${esc(e.name)}</span>
          <span class="feed-tag">${t('feed.habit')}</span>
        </div>
        <span class="feed-time">${time}</span>
      </div>`;
    }
    if (e.type === 'note') {
      return `<div class="feed-item">
        <div class="feed-dot" style="background:#c47800"></div>
        <div class="feed-body">
          <span class="feed-name">${esc(e.title || '')}</span>
          <span class="feed-tag">${t('feed.note')}</span>
        </div>
        <span class="feed-time">${time}</span>
      </div>`;
    }
    if (e.type === 'trans') {
      const isIn = e.transType === 'income';
      return `<div class="feed-item">
        <div class="feed-dot" style="background:${isIn ? 'var(--green)' : 'var(--red)'}"></div>
        <div class="feed-body">
          <span class="feed-name">${fmtMoney(e.amount)} · ${esc(e.cat || '')}</span>
          <span class="feed-tag">${isIn ? t('feed.trans.in') : t('feed.trans.exp')}</span>
        </div>
        <span class="feed-time">${time}</span>
      </div>`;
    }
    return '';
  }).join('');
}

// ============================================================
//  DASHBOARD
// ============================================================
function renderDashboard() {
  const doneCount = S.habits.filter(doneToday).length;
  document.getElementById('stat-habits').textContent = `${doneCount}/${S.habits.length}`;

  const bal = balance();
  const balEl = document.getElementById('stat-balance');
  balEl.textContent = fmtMoney(bal);
  balEl.style.color = bal >= 0 ? 'var(--green)' : 'var(--red)';
  document.getElementById('stat-notes').textContent = S.notes.length;

  const dh = document.getElementById('dash-habits');
  if (!S.habits.length) {
    dh.innerHTML = `<div style="color:var(--muted);font-size:13px;padding:8px 0">${t('dash.habits.empty')}</div>`;
  } else {
    dh.innerHTML = S.habits.slice(0, 6).map(h => {
      const done = doneToday(h);
      return `
        <div class="dash-habit" onclick="toggleHabit('${h.id}')">
          <div class="h-circle ${done ? 'done' : ''}" style="width:20px;height:20px;border-color:${h.color};${done?`background:${h.color}`:''}">
            ${done ? '<span style="color:#fff;font-size:11px;font-weight:700">✓</span>' : ''}
          </div>
          <span style="${done ? 'text-decoration:line-through;color:var(--muted)' : ''}">${esc(h.name)}</span>
        </div>`;
    }).join('');
  }

  const dn = document.getElementById('dash-notes');
  const imp = S.notes.filter(n => n.important).slice(0, 4);
  const preview = imp.length ? imp : [...S.notes].slice(-3).reverse();
  if (!preview.length) {
    dn.innerHTML = `<div style="color:var(--muted);font-size:13px;padding:8px 0">${t('dash.notes.empty')}</div>`;
  } else {
    dn.innerHTML = preview.map(n => `
      <div class="dash-note">
        <div class="dash-note-title">${n.important ? '⭐ ' : ''}${esc(n.title)}</div>
        <div class="dash-note-prev">${esc(n.content)}</div>
      </div>`).join('');
  }

  renderTodayFeed();
}

// ============================================================
//  POMODORO
// ============================================================
const POMO = {
  mode: 'work',
  running: false,
  interval: null,
  sessions: 0,
  remaining: 25 * 60,
  get workSec() { return parseInt(document.getElementById('pomo-work-min').value || 25) * 60; },
  get breakSec() { return parseInt(document.getElementById('pomo-break-min').value || 5) * 60; },
  get total()   { return this.mode === 'work' ? this.workSec : this.breakSec; },
};

function renderPomo() {
  const mins = String(Math.floor(POMO.remaining / 60)).padStart(2, '0');
  const secs = String(POMO.remaining % 60).padStart(2, '0');
  document.getElementById('pomo-time').textContent = `${mins}:${secs}`;

  const prog = document.getElementById('pomo-prog');
  const circ = 2 * Math.PI * 80;
  prog.style.strokeDashoffset = circ - circ * (1 - POMO.remaining / POMO.total);
  prog.style.stroke = POMO.mode === 'work' ? '#c2185b' : '#1b7a3e';

  document.getElementById('pomo-mode').textContent = POMO.mode === 'work' ? t('pomo.work.mode') : t('pomo.break.mode');
  document.getElementById('pomo-toggle').textContent = POMO.running ? t('pomo.pause') : t('pomo.start');
  document.getElementById('pomo-sessions').textContent = POMO.sessions;
}

function tickPomo() {
  POMO.remaining--;
  if (POMO.remaining <= 0) {
    clearInterval(POMO.interval); POMO.running = false;
    if (POMO.mode === 'work') {
      POMO.sessions++;
      POMO.mode = 'break'; POMO.remaining = POMO.breakSec;
      notify(t('notify.rest.title'), t('notify.rest.body'));
    } else {
      POMO.mode = 'work'; POMO.remaining = POMO.workSec;
      notify(t('notify.work.title'), t('notify.work.body'));
    }
  }
  renderPomo();
}

function notify(title, body) {
  if (Notification.permission === 'granted') new Notification(title, { body });
}

// ============================================================
//  EXPORT
// ============================================================
function download(name, content, type) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([content], { type }));
  a.download = name; a.click();
}

function exportJSON() {
  download('dashboard-export.json',
    JSON.stringify({ habits: S.habits, finance: S.finance, notes: S.notes, exported: new Date().toISOString() }, null, 2),
    'application/json');
}

function exportCSV() {
  const rows = [[t('csv.date'), t('csv.type'), t('csv.amount'), t('csv.cat'), t('csv.desc')]];
  S.finance.forEach(tx => rows.push([
    tx.date,
    tx.type === 'income' ? t('fin.income.type') : t('fin.expense.type'),
    tx.amount, tx.category, tx.description
  ]));
  download('finance-export.csv', rows.map(r => r.map(v => `"${v}"`).join(',')).join('\n'), 'text/csv');
}

// ============================================================
//  MODALS
// ============================================================
function openModal(id)  { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

// ============================================================
//  CLOCK
// ============================================================
function updateClock() {
  const now  = new Date();
  const h    = now.getHours();
  const loc  = t('locale');
  document.getElementById('greeting').textContent =
    h < 12 ? t('greeting.morning') : h < 17 ? t('greeting.afternoon') : t('greeting.evening');
  document.getElementById('date-full').textContent =
    now.toLocaleDateString(loc, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const clk = document.getElementById('sidebar-clock');
  if (clk) clk.innerHTML =
    `<b>${now.toLocaleTimeString(loc, { hour: '2-digit', minute: '2-digit' })}</b>
     ${now.toLocaleDateString(loc, { month: 'short', day: 'numeric' })}`;
}

// ============================================================
//  LANGUAGE
// ============================================================
function buildDayButtons(selectedDays) {
  const container = document.getElementById('habit-days');
  container.innerHTML = '';
  [0,1,2,3,4,5,6].forEach(d => {
    const btn = document.createElement('button');
    const allSelected = !selectedDays || selectedDays.length === 0 || selectedDays.length === 7;
    btn.className = 'day-btn' + (allSelected || (selectedDays && selectedDays.includes(d)) ? ' active' : '');
    btn.dataset.day = d;
    btn.type = 'button';
    btn.textContent = t(`day.${d}`);
    btn.addEventListener('click', () => btn.classList.toggle('active'));
    container.appendChild(btn);
  });
}

function getSelectedDays() {
  return [...document.querySelectorAll('#habit-days .day-btn.active')].map(b => parseInt(b.dataset.day));
}

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('ms_lang', lang);
  document.documentElement.setAttribute('lang', lang === 'mn' ? 'mn' : 'en');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key); if (val !== key) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    const val = t(key); if (val !== key) el.setAttribute('placeholder', val);
  });
  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    const key = el.getAttribute('data-i18n-opt');
    const val = t(key); if (val !== key) el.textContent = val;
  });

  const btn = document.getElementById('lang-btn');
  if (btn) btn.textContent = lang === 'mn' ? '🌐 EN' : '🌐 MN';

  buildDayButtons();
  renderDashboard();
  renderHabits();
  renderFinance();
  renderNotes();
  renderPomo();
  updateClock();
}

// ============================================================
//  INIT
// ============================================================
(function init() {
  updateClock();
  setInterval(updateClock, 1000);

  // Nav buttons
  document.querySelectorAll('.nav-btn, .bnav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Language toggle
  document.getElementById('lang-btn').addEventListener('click', () => {
    applyLang(currentLang === 'mn' ? 'en' : 'mn');
  });

  // Color swatches
  const COLORS = ['#7c3aed','#2563eb','#06b6d4','#10b981','#f59e0b','#ef4444','#ec4899','#8b5cf6'];
  const swatchBox = document.getElementById('habit-colors');
  COLORS.forEach(c => {
    const sw = document.createElement('div');
    sw.className = 'cswatch' + (c === S.selColor ? ' sel' : '');
    sw.style.background = c;
    sw.addEventListener('click', () => {
      S.selColor = c;
      document.querySelectorAll('.cswatch').forEach(s => s.classList.remove('sel'));
      sw.classList.add('sel');
    });
    swatchBox.appendChild(sw);
  });

  // Habit modal
  document.getElementById('btn-add-habit').addEventListener('click', () => {
    document.getElementById('habit-name').value = '';
    document.getElementById('habit-time').value = '';
    buildDayButtons();
    openModal('modal-habit');
    setTimeout(() => document.getElementById('habit-name').focus(), 80);
  });
  document.getElementById('save-habit').addEventListener('click', () => {
    addHabit(
      document.getElementById('habit-name').value,
      S.selColor,
      document.getElementById('habit-time').value,
      getSelectedDays()
    );
    closeModal('modal-habit');
  });
  document.getElementById('habit-name').addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      addHabit(e.target.value, S.selColor, document.getElementById('habit-time').value, getSelectedDays());
      closeModal('modal-habit');
    }
  });

  // Transaction modal
  document.getElementById('btn-add-trans').addEventListener('click', () => {
    document.getElementById('trans-amount').value = '';
    document.getElementById('trans-desc').value = '';
    openModal('modal-trans');
    setTimeout(() => document.getElementById('trans-amount').focus(), 80);
  });
  document.querySelectorAll('.type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      S.transType = btn.dataset.type;
      document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  document.getElementById('save-trans').addEventListener('click', () => {
    addTrans(S.transType,
      document.getElementById('trans-amount').value,
      document.getElementById('trans-cat').value,
      document.getElementById('trans-desc').value);
    closeModal('modal-trans');
  });

  // Note modal
  document.getElementById('btn-add-note').addEventListener('click', () => {
    S.editingNoteId = null;
    document.getElementById('note-modal-title').textContent = t('modal.note.h');
    document.getElementById('note-title').value = '';
    document.getElementById('note-content').value = '';
    document.getElementById('note-star').checked = false;
    openModal('modal-note');
    setTimeout(() => document.getElementById('note-title').focus(), 80);
  });
  document.getElementById('save-note').addEventListener('click', () => {
    addNote(
      document.getElementById('note-title').value,
      document.getElementById('note-content').value,
      document.getElementById('note-star').checked);
    closeModal('modal-note');
  });

  // Close modals
  document.querySelectorAll('.overlay').forEach(o => {
    o.addEventListener('click', e => { if (e.target === o) { S.editingNoteId = null; o.classList.remove('open'); } });
  });
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => { S.editingNoteId = null; closeModal(btn.dataset.close); });
  });

  // Pomodoro
  document.getElementById('pomo-toggle').addEventListener('click', () => {
    if (POMO.running) { clearInterval(POMO.interval); POMO.running = false; }
    else {
      POMO.running = true;
      POMO.interval = setInterval(tickPomo, 1000);
      if (Notification.permission === 'default') Notification.requestPermission();
    }
    renderPomo();
  });
  document.getElementById('pomo-reset').addEventListener('click', () => {
    clearInterval(POMO.interval); POMO.running = false;
    POMO.mode = 'work'; POMO.remaining = POMO.workSec; renderPomo();
  });
  document.getElementById('pomo-skip').addEventListener('click', () => {
    clearInterval(POMO.interval); POMO.running = false;
    if (POMO.mode === 'work') { POMO.sessions++; POMO.mode = 'break'; POMO.remaining = POMO.breakSec; }
    else { POMO.mode = 'work'; POMO.remaining = POMO.workSec; }
    renderPomo();
  });
  ['pomo-work-min','pomo-break-min'].forEach(id => {
    document.getElementById(id).addEventListener('change', () => {
      clearInterval(POMO.interval); POMO.running = false;
      POMO.remaining = POMO.mode === 'work' ? POMO.workSec : POMO.breakSec; renderPomo();
    });
  });

  // Apply saved language (renders everything)
  applyLang(currentLang);
})();
