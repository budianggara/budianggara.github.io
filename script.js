// Tahun Otomatis di Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle Menu Mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Dark / Light Mode Toggle Logic
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Cek memori/preferensi sebelumnya di browser
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
  htmlElement.setAttribute('data-theme', 'light');
  themeToggle.textContent = '☀️';
} else {
  htmlElement.removeAttribute('data-theme');
  themeToggle.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
  if (htmlElement.getAttribute('data-theme') === 'light') {
    htmlElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '🌙';
  } else {
    htmlElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '☀️';
  }
});

// Scroll Reveal Animation
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 100;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger saat pertama kali dibuka