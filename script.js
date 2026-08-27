/* =====================================================
   FOOTER YEAR
===================================================== */

const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {

  menuToggle.addEventListener('click', () => {

    const isOpen = navLinks.classList.toggle('open');

    menuToggle.setAttribute(
      'aria-expanded',
      isOpen ? 'true' : 'false'
    );

    menuToggle.textContent =
      isOpen ? '✕' : '☰';

  });


  /* Close mobile menu after clicking link */

  navLinks.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

      navLinks.classList.remove('open');

      menuToggle.setAttribute(
        'aria-expanded',
        'false'
      );

      menuToggle.textContent = '☰';

    });

  });

}


/* =====================================================
   LIGHT / DARK MODE
===================================================== */

const themeToggle =
  document.getElementById('themeToggle');

const htmlElement =
  document.documentElement;


/*
  DEFAULT THEME = LIGHT

  Kalau sebelumnya user sudah memilih tema,
  gunakan pilihan tersebut.

  Kalau belum pernah memilih,
  gunakan LIGHT.
*/

const savedTheme =
  localStorage.getItem('theme') || 'light';


/* Apply initial theme */

if (savedTheme === 'dark') {

  htmlElement.setAttribute(
    'data-theme',
    'dark'
  );

} else {

  htmlElement.setAttribute(
    'data-theme',
    'light'
  );

}


/* Update theme button */

function updateThemeButton() {

  if (!themeToggle) {
    return;
  }

  const currentTheme =
    htmlElement.getAttribute('data-theme');


  if (currentTheme === 'dark') {

    /*
      Website sedang DARK.
      Icon ☀️ berarti user bisa kembali
      ke LIGHT MODE.
    */

    themeToggle.textContent = '☀️';

    themeToggle.setAttribute(
      'aria-label',
      'Gunakan Light Mode'
    );

    themeToggle.setAttribute(
      'title',
      'Gunakan Light Mode'
    );

  } else {

    /*
      Website sedang LIGHT.
      Icon 🌙 berarti user bisa berpindah
      ke DARK MODE.
    */

    themeToggle.textContent = '🌙';

    themeToggle.setAttribute(
      'aria-label',
      'Gunakan Dark Mode'
    );

    themeToggle.setAttribute(
      'title',
      'Gunakan Dark Mode'
    );

  }

}


/* Initial button */

updateThemeButton();


/* Toggle */

if (themeToggle) {

  themeToggle.addEventListener(
    'click',
    () => {

      const currentTheme =
        htmlElement.getAttribute(
          'data-theme'
        );


      if (currentTheme === 'dark') {

        /* DARK → LIGHT */

        htmlElement.setAttribute(
          'data-theme',
          'light'
        );

        localStorage.setItem(
          'theme',
          'light'
        );

      } else {

        /* LIGHT → DARK */

        htmlElement.setAttribute(
          'data-theme',
          'dark'
        );

        localStorage.setItem(
          'theme',
          'dark'
        );

      }


      updateThemeButton();

    }
  );

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

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

      element.classList.add(
        'visible'
      );

    }

  });

}


window.addEventListener(
  'scroll',
  revealOnScroll
);


/* Trigger on initial load */

revealOnScroll();
