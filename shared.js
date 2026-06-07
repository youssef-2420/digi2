// Immediately mark body as js-loaded so reveals work
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  // Custom cursor
  const cursor = document.createElement('div');
  cursor.id = 'cursor';
  document.body.appendChild(cursor);
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, [role=button], summary, .tile, .tag, .toc-item, details').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });

  // Scroll-aware header shrink
  const hdr = document.querySelector('header');
  window.addEventListener('scroll', () => {
    hdr.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Mobile menu with animated hamburger
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-nav');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('open');
      btn.classList.toggle('open');
    });
  }

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
