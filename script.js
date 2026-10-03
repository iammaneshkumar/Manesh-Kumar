/* =========================================================
   MANESH KUMAR PORTFOLIO
   JavaScript
   ========================================================= */


/* =========================
   ELEMENTS
   ========================= */

const menuToggle =
  document.getElementById("menu-toggle");

const mobileNav =
  document.getElementById("mobile-nav");

const mobileClose =
  document.getElementById("mobile-close");

const navOverlay =
  document.getElementById("nav-overlay");

const mobileNavLinks =
  document.querySelectorAll(".mobile-nav-links a");


/* =========================
   OPEN MENU
   ========================= */

function openMenu() {

  mobileNav.classList.add("active");

  navOverlay.classList.add("active");

  document.body.classList.add("menu-open");

  menuToggle.setAttribute(
    "aria-expanded",
    "true"
  );

  mobileNav.setAttribute(
    "aria-hidden",
    "false"
  );

  navOverlay.setAttribute(
    "aria-hidden",
    "false"
  );

  menuToggle.innerHTML =
    '<i class="fas fa-xmark"></i>';

  menuToggle.setAttribute(
    "aria-label",
    "Close navigation menu"
  );

}


/* =========================
   CLOSE MENU
   ========================= */

function closeMenu() {

  mobileNav.classList.remove("active");

  navOverlay.classList.remove("active");

  document.body.classList.remove("menu-open");

  menuToggle.setAttribute(
    "aria-expanded",
    "false"
  );

  mobileNav.setAttribute(
    "aria-hidden",
    "true"
  );

  navOverlay.setAttribute(
    "aria-hidden",
    "true"
  );

  menuToggle.innerHTML =
    '<i class="fas fa-bars"></i>';

  menuToggle.setAttribute(
    "aria-label",
    "Open navigation menu"
  );

}


/* =========================
   TOGGLE MENU
   ========================= */

function toggleMenu() {

  if (
    mobileNav.classList.contains("active")
  ) {

    closeMenu();

  } else {

    openMenu();

  }

}


/* =========================
   MENU BUTTON
   ========================= */

menuToggle.addEventListener(
  "click",
  toggleMenu
);


/* =========================
   CLOSE BUTTON
   ========================= */

mobileClose.addEventListener(
  "click",
  closeMenu
);


/* =========================
   CLOSE ON OVERLAY
   ========================= */

navOverlay.addEventListener(
  "click",
  closeMenu
);


/* =========================
   CLOSE AFTER NAVIGATION
   ========================= */

mobileNavLinks.forEach(link => {

  link.addEventListener(
    "click",
    closeMenu
  );

});


/* =========================
   ESCAPE KEY
   ========================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      mobileNav.classList.contains("active")
    ) {

      closeMenu();

    }

  }
);


/* =========================
   FOOTER YEAR
   ========================= */

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =========================
   SMOOTH SCROLL
   ========================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {

    link.addEventListener(
      "click",
      event => {

        const targetId =
          link.getAttribute("href");

        const target =
          document.querySelector(targetId);

        if (!target) {
          return;
        }

        /*
          Only prevent the browser's default jump.
          The menu is closed separately.
        */

        event.preventDefault();

        closeMenu();

        /*
          Small delay allows the drawer to
          begin closing before scrolling.
        */

        setTimeout(() => {

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }, 50);

      }
    );

  });


/* =========================
   CLOSE MENU ON DESKTOP
   ========================= */

window.addEventListener(
  "resize",
  () => {

    if (
      window.innerWidth > 768 &&
      mobileNav.classList.contains("active")
    ) {

      closeMenu();

    }

  }
);


/* =========================
   PREVENT BACKGROUND SCROLL
   ========================= */

window.addEventListener(
  "wheel",
  event => {

    if (
      mobileNav.classList.contains("active") &&
      !mobileNav.contains(event.target)
    ) {

      event.preventDefault();

    }

  },
  {
    passive: false
  }
);


/* =========================
   PREVENT BACKGROUND TOUCH
   ========================= */

document.addEventListener(
  "touchmove",
  event => {

    if (
      mobileNav.classList.contains("active") &&
      !mobileNav.contains(event.target)
    ) {

      event.preventDefault();

    }

  },
  {
    passive: false
  }
);