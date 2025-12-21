// Mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
});

// Auto year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
