// Theme Toggle
const btn = document.getElementById('themeToggle');
function applyTheme(theme){
  if(theme==='dark') document.body.classList.add('dark');
  else document.body.classList.remove('dark');
}

const saved = localStorage.getItem('site-theme') || 'light';
applyTheme(saved);

btn.addEventListener('click', ()=>{
  const current = document.body.classList.contains('dark') ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('site-theme', next);
});

// Form Submit
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  msg.textContent = 'Ուղարկվում է...';
  setTimeout(()=>{
    msg.textContent = 'Հաջողությամբ ուղարկվեց!';
    form.reset();
  }, 700);
});

// Smooth Scroll
const links = document.querySelectorAll('nav a');
links.forEach(link =>{
  link.addEventListener('click', (e)=>{
    e.preventDefault();
    const id = link.getAttribute('href').substring(1);
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
  });
});


// Scroll-trigger animations
const animated = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

animated.forEach(el => observer.observe(el));

