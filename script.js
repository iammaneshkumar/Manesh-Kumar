/* =========================================================
   MANESH KUMAR PORTFOLIO
   JavaScript
   ========================================================= */


/* =========================
   ELEMENTS
   ========================= */

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");


/* =========================
   CREATE MOBILE OVERLAY
   ========================= */

const overlay = document.createElement("div");

overlay.classList.add("nav-overlay");

document.body.appendChild(overlay);


/* =========================
   OPEN / CLOSE MENU
   ========================= */

function openMenu() {

  navbar.classList.add("active");
  overlay.classList.add("active");

  document.body.classList.add("menu-open");

  menuToggle.setAttribute("aria-expanded", "true");

  menuToggle.innerHTML =
    '<i class="fas fa-xmark"></i>';
}


function closeMenu() {

  navbar.classList.remove("active");
  overlay.classList.remove("active");

  document.body.classList.remove("menu-open");

  menuToggle.setAttribute("aria-expanded", "false");

  menuToggle.innerHTML =
    '<i class="fas fa-bars"></i>';
}


function toggleMenu() {

  if (navbar.classList.contains("active")) {

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
   CLOSE WHEN CLICKING OVERLAY
   ========================= */

overlay.addEventListener(
  "click",
  closeMenu
);


/* =========================
   CLOSE AFTER NAVIGATION
   ========================= */

document
  .querySelectorAll("#navbar a")
  .forEach(link => {

    link.addEventListener(
      "click",
      closeMenu
    );

  });


/* =========================
   ESC KEY CLOSE
   ========================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      navbar.classList.contains("active")
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

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });


/* =========================
   CLOSE MOBILE MENU
   WHEN RESIZING TO DESKTOP
   ========================= */

window.addEventListener(
  "resize",
  () => {

    if (
      window.innerWidth > 768 &&
      navbar.classList.contains("active")
    ) {

      closeMenu();

    }

  }
);