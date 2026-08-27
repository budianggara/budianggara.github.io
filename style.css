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

    const isOpen =
      navLinks.classList.contains('open');

    menuToggle.setAttribute(
      'aria-expanded',
      isOpen
    );

    menuToggle.setAttribute(
      'aria-label',
      isOpen
        ? 'Tutup menu'
        : 'Buka menu'
    );

  });


  // Tutup menu setelah memilih navigasi

  navLinks.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

      navLinks.classList.remove('open');

      menuToggle.setAttribute(
        'aria-expanded',
        'false'
      );

      menuToggle.setAttribute(
        'aria-label',
        'Buka menu'
      );

    });

  });

}


// =====================================================
// LIGHT / DARK MODE
// DEFAULT = LIGHT
// =====================================================

const themeToggle =
  document.getElementById('themeToggle');

const htmlElement =
  document.documentElement;


// Ambil tema yang pernah disimpan

const savedTheme =
  localStorage.getItem('theme');


// Jika user sebelumnya memilih Dark,
// gunakan Dark.
//
// Selain itu selalu gunakan Light.

const initialTheme =
  savedTheme === 'dark'
    ? 'dark'
    : 'light';


// Terapkan tema awal

htmlElement.setAttribute(
  'data-theme',
  initialTheme
);


// =====================================================
// UPDATE ICON
// =====================================================

function updateThemeIcon() {

  if (!themeToggle) return;

  const currentTheme =
    htmlElement.getAttribute('data-theme');


  if (currentTheme === 'dark') {

    // Saat Dark Mode aktif,
    // icon menjadi matahari.

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

    // Saat Light Mode aktif,
    // icon menjadi bulan.

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


// Jalankan pertama kali

updateThemeIcon();


// =====================================================
// THEME BUTTON CLICK
// =====================================================

if (themeToggle) {

  themeToggle.addEventListener('click', () => {

    const currentTheme =
      htmlElement.getAttribute('data-theme');


    const newTheme =
      currentTheme === 'dark'
        ? 'light'
        : 'dark';


    // Terapkan tema

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
