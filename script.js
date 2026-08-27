// =====================================================
// TAHUN OTOMATIS DI FOOTER
// =====================================================

const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// =====================================================
// TOGGLE MENU MOBILE
// =====================================================

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {

  menuToggle.addEventListener('click', () => {

    navLinks.classList.toggle('open');

  });

}


// =====================================================
// LIGHT / DARK MODE
// DEFAULT = LIGHT MODE
// =====================================================

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Ambil tema yang pernah dipilih user
const savedTheme = localStorage.getItem('theme');

// Jika belum pernah memilih tema → LIGHT
const initialTheme = savedTheme === 'dark'
  ? 'dark'
  : 'light';


// Terapkan tema awal
htmlElement.setAttribute(
  'data-theme',
  initialTheme
);


// Update icon tombol
function updateThemeIcon() {

  if (!themeToggle) return;

  const currentTheme =
    htmlElement.getAttribute('data-theme');

  if (currentTheme === 'dark') {

    // Sedang Dark Mode
    // Klik untuk kembali ke Light
    themeToggle.textContent = '☀️';

    themeToggle.setAttribute(
      'aria-label',
      'Aktifkan Light Mode'
    );

    themeToggle.setAttribute(
      'title',
      'Aktifkan Light Mode'
    );

  } else {

    // Sedang Light Mode
    // Klik untuk masuk Dark
    themeToggle.textContent = '🌙';

    themeToggle.setAttribute(
      'aria-label',
      'Aktifkan Dark Mode'
    );

    themeToggle.setAttribute(
      'title',
      'Aktifkan Dark Mode'
    );
  }
}


// Tampilkan icon yang sesuai
updateThemeIcon();


// Klik tombol theme
if (themeToggle) {

  themeToggle.addEventListener('click', () => {

    const currentTheme =
      htmlElement.getAttribute('data-theme');

    const newTheme =
      currentTheme === 'dark'
        ? 'light'
        : 'dark';


    // Terapkan tema baru
    htmlElement.setAttribute(
      'data-theme',
      newTheme
    );


    // Simpan pilihan user
    localStorage.setItem(
      'theme',
      newTheme
    );


    // Update icon
    updateThemeIcon();

  });

}


// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================

const reveals =
  document.querySelectorAll('.reveal');

function revealOnScroll() {

  reveals.forEach(element => {

    const windowHeight =
      window.innerHeight;

    const elementTop =
      element.getBoundingClientRect().top;

    const elementVisible = 100;

    if (
      elementTop <
      windowHeight - elementVisible
    ) {

      element.classList.add('visible');

    }

  });

}

window.addEventListener(
  'scroll',
  revealOnScroll
);

revealOnScroll();
