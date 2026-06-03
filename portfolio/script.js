/* ============================================================
   UUGANERDENE SPORTS PHOTOGRAPHY — SCRIPT
   ============================================================ */

/* ---- TRANSLATIONS ---- */
const i18n = {
  en: {
    'nav.work':      'Work',
    'nav.about':     'About',
    'nav.services':  'Services',
    'nav.contact':   'Contact',

    'hero.eyebrow':  'Mongolia',
    'hero.tagline':  'Sports Photographer • Mongolia',
    'hero.cta':      'View My Work',

    'gallery.label': 'Portfolio',
    'gallery.title': 'The Work',

    'sport.basketball':   'Basketball',
    'sport.volleyball':   'Volleyball',
    'sport.wrestling':    'Wrestling',
    'sport.swimming':     'Swimming',
    'sport.championship': 'Championship',
    'sport.behind':       'Behind the Lens',

    'about.photo.label': 'Sports Photographer',
    'about.label': 'About Me',
    'about.title': 'Capturing the Heartbeat of Sport',
    'about.p1':    "I'm <strong>Uuganerdene</strong>, a sports photographer based in Mongolia with years of experience shooting at the highest level — from national basketball finals to international volleyball championships across Asia.",
    'about.p2':    'Armed with a Sony telephoto lens and an eye for decisive moments, I cover basketball, volleyball, wrestling, swimming, and every sport in between. My work has been featured at official tournaments and published by national sports federations.',
    'about.p3':    'Available for events, athlete campaigns, and brand partnerships.',
    'about.meta1': 'Events Covered',
    'about.meta2': 'Sports Disciplines',
    'about.meta3': 'Years Experience',

    'services.label':  'What I Offer',
    'services.title':  'Services',
    'service1.title':  'Event Coverage',
    'service1.desc':   'Full-game or full-tournament coverage. Fast turnaround — fully edited galleries delivered within 24 hours.',
    'service2.title':  'Athlete Portraits',
    'service2.desc':   'Studio or on-location portraits capturing the intensity and personality of the athlete — perfect for social media and press kits.',
    'service3.title':  'Brand & Sponsorship',
    'service3.desc':   'Sport-driven visual content for brands, sponsors, and federations. Tell your story through authentic athletic imagery.',

    'contact.label':   'Get In Touch',
    'contact.title':   "Let's Work<br/>Together",
    'contact.desc':    'Available for events across Mongolia and internationally. Reach out via the form or find me on Instagram.',
    'form.name':       'Name',
    'form.email':      'Email',
    'form.message':    'Message',
    'form.name.ph':    'Your name',
    'form.email.ph':   'your@email.com',
    'form.msg.ph':     'Tell me about your event or project…',
    'form.submit':     'Send Message',
    'form.success':    "Message sent! I'll be in touch soon.",

    'footer.copy': '© 2025 Uuganerdene Photography. All rights reserved.',
  },

  mn: {
    'nav.work':      'Бүтээл',
    'nav.about':     'Миний тухай',
    'nav.services':  'Үйлчилгээ',
    'nav.contact':   'Холбоо',

    'hero.eyebrow':  'Монгол',
    'hero.tagline':  'Спортын Фотограф • Монгол',
    'hero.cta':      'Бүтээлийг үзэх',

    'gallery.label': 'Портфолио',
    'gallery.title': 'Бүтээлүүд',

    'sport.basketball':   'Баскетбол',
    'sport.volleyball':   'Волейбол',
    'sport.wrestling':    'Бөх',
    'sport.swimming':     'Сэлэлт',
    'sport.championship': 'Аварга',
    'sport.behind':       'Дуранд',

    'about.photo.label': 'Спортын Фотограф',
    'about.label': 'Миний тухай',
    'about.title': 'Спортын зүрхний цохилтыг тэмдэглэж',
    'about.p1':    'Би <strong>Уугандэрэнэ</strong> — Монгол дахь спортын фотограф. Үндэсний баскетболын аварга шалгаруулалтаас эхлээд Азийн волейболын олон улсын тэмцээн хүртэл өндөр түвшинд ажилладаг.',
    'about.p2':    'Sony-н телефото дуран болон шийдвэрлэх мөчийг барих нүдтэйгээр би баскетбол, волейбол, бөх, сэлэлт болон бусад спортын төрлүүдийг хамардаг. Миний бүтээлүүд албан ёсны тэмцээнүүдэд ашиглагдаж, үндэсний спортын холбоодуудад нийтлэгдсэн.',
    'about.p3':    'Арга хэмжээ, тамирчны кампайн, брэндийн хамтын ажиллагаанд бэлэн байна.',
    'about.meta1': 'Арга хэмжээ',
    'about.meta2': 'Спортын төрол',
    'about.meta3': 'Жилийн туршлага',

    'services.label':  'Санал болгох зүйл',
    'services.title':  'Үйлчилгээ',
    'service1.title':  'Арга хэмжээний бүрхэц',
    'service1.desc':   'Тоглолт буюу бүхэл тэмцээний бүрэн бүрхэц. Хурдан хугацаанд — 24 цагийн дотор бүрэн засварласан галерей хүргэнэ.',
    'service2.title':  'Тамирчны хөрөг',
    'service2.desc':   'Студи эсвэл байршилд хийсэн хөрөг — SNS болон хэвлэлийн материалд тохиромжтой.',
    'service3.title':  'Брэнд & Ивээн тэтгэлэг',
    'service3.desc':   'Брэнд, ивээн тэтгэгч, холбоодуудын зориулсан спорт дүрслэлийн контент. Жинхэнэ атлетик зургаар дамжуулан танай түүхийг ярина.',

    'contact.label':   'Холбоо барих',
    'contact.title':   'Хамтдаа<br/>ажиллая',
    'contact.desc':    'Монгол болон гадаадад болох арга хэмжээнд бэлэн байна. Маягтаар эсвэл Instagram-аар холбоо барина уу.',
    'form.name':       'Нэр',
    'form.email':      'И-мэйл',
    'form.message':    'Мэссэж',
    'form.name.ph':    'Таны нэр',
    'form.email.ph':   'tanii@email.com',
    'form.msg.ph':     'Арга хэмжээ эсвэл төслийн тухай хэлнэ үү…',
    'form.submit':     'Илгээх',
    'form.success':    'Мэссэж илгээгдлээ! Удахгүй холбоо барина.',

    'footer.copy': '© 2025 Уугандэрэнэ Фотограф. Бүх эрх хуулиар хамгаалагдсан.',
  }
};

/* ---- LANGUAGE SWITCH ---- */
let currentLang = localStorage.getItem('ue_lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('ue_lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang === 'mn' ? 'mn' : 'en');

  const t = i18n[lang];

  /* textContent keys */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* innerHTML keys (allows <br/>, <strong> etc.) */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* placeholder keys */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  /* Active state on toggle buttons */
  document.getElementById('langMN').classList.toggle('active', lang === 'mn');
  document.getElementById('langEN').classList.toggle('active', lang === 'en');
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'mn' : 'en');
});

/* Apply saved or default language on load */
applyLang(currentLang);

/* ---- NAVBAR SCROLL ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  highlightActiveLink();
}, { passive: true });

/* ---- ACTIVE NAV LINK ---- */
function highlightActiveLink() {
  const scrollY = window.scrollY + 120;
  document.querySelectorAll('section[id]').forEach(section => {
    const top  = section.offsetTop;
    const link = document.querySelector(`.nav-link[href="#${section.id}"]`);
    if (link) link.classList.toggle('active', scrollY >= top && scrollY < top + section.offsetHeight);
  });
}

/* ---- HAMBURGER ---- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ---- SCROLL REVEAL ---- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
    const delay    = siblings.indexOf(entry.target) * 90;
    setTimeout(() => entry.target.classList.add('visible'), delay);
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---- CONTACT FORM ---- */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const name    = contactForm.fname.value.trim();
  const email   = contactForm.femail.value.trim();
  const message = contactForm.fmessage.value.trim();
  if (!name || !email || !message) return;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

  /* TODO: connect a real form service here (Formspree, EmailJS, etc.) */
  const btn = contactForm.querySelector('.btn-primary');
  btn.disabled = true;
  setTimeout(() => {
    formSuccess.classList.add('show');
    contactForm.reset();
    btn.disabled = false;
    setTimeout(() => formSuccess.classList.remove('show'), 5000);
  }, 900);
});

/* ---- GALLERY ACCESSIBILITY ---- */
document.querySelectorAll('.gallery-card').forEach(card => {
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'img');
});
