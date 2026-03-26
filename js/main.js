// ── Mobile menu toggle ──
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// ── Active nav link on scroll ──
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active-link");
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.classList.add("active-link");
          }
        });
      }
    });
  },
  { threshold: 0.5 },
);

sections.forEach((section) => observer.observe(section));

// ── Close mobile menu when a link is clicked ──
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});
