// ── Load profile image ──
const profileImg = document.getElementById("profile-img");
const fallback = document.getElementById("photo-fallback");

// List all possible filenames and extensions to try
const imageOptions = [
  "assets/images/profile.jpg",
  "assets/images/profile.jpeg",
  "assets/images/profile.png",
  "assets/images/profile.webp",
  "assets/images/Profile.jpg",
  "assets/images/Profile.jpeg",
  "assets/images/Profile.png",
];

let loaded = false;

function tryLoadImage(index) {
  if (index >= imageOptions.length) {
    // All options exhausted — show fallback
    fallback.style.display = "flex";
    profileImg.style.display = "none";
    console.warn("Profile image not found. Tried:", imageOptions);
    return;
  }

  const testImg = new Image();
  testImg.onload = () => {
    // Image found — apply it
    profileImg.src = imageOptions[index];
    profileImg.style.display = "block";
    fallback.style.display = "none";
    loaded = true;
    console.log("Profile image loaded from:", imageOptions[index]);
  };
  testImg.onerror = () => {
    // Try next option
    tryLoadImage(index + 1);
  };
  testImg.src = imageOptions[index];
}

tryLoadImage(0);

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
