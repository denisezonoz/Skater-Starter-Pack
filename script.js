document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');

  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});

window.addEventListener('beforeunload', () => {
  document.body.classList.add('fade-out');
});

// Highlight active nav link while scrolling
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('main[id], section[id]');
  const links = document.querySelectorAll('.site-nav a');
  let current = '';

  sections.forEach(sec => {
    const top = sec.offsetTop - 140; // header offset
    if (window.scrollY >= top) current = sec.id;
  });

  links.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
});
