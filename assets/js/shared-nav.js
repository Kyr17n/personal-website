// shared-nav.js — inline this in each page or include via <script src>
(function () {
  // Theme
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const label = document.getElementById('theme-label');
  function setTheme(t) {
    root.setAttribute('data-theme', t);
    if (label) label.textContent = t === 'dark' ? 'Dark' : 'Light';
    localStorage.setItem('theme', t);
  }
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(saved || (prefersDark ? 'dark' : 'light'));
  if (btn) btn.addEventListener('click', () => {
    setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  // Mobile nav
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => mobileNav.classList.toggle('open'));
  }
  window.closeMobile = () => mobileNav && mobileNav.classList.remove('open');

  // Scroll reveal
  document.querySelectorAll('.reveal').forEach(el => {
    new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 }).observe(el);
  });

  // Back to top
  const backTop = document.getElementById('back-top');
  if (backTop) {
    window.addEventListener('scroll', () => {
      backTop.classList.toggle('visible', window.scrollY > 400);
    });
  }
})();
