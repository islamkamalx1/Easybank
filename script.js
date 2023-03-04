const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");

hamburgerMenu.addEventListener("click", () => {
  overlay.classList.add("show");
  mobileNav.classList.add("show");
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("overlay")) {
    overlay.classList.remove("show");
    mobileNav.classList.remove("show");
  }
});
