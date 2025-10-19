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


function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Highlight nav links while scrolling
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('.site-nav a');
  let current = '';

  sections.forEach(sec => {
    const top = sec.offsetTop - 150;
    if (window.scrollY >= top) current = sec.id;
  });

  links.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
});








//quiz stoof
