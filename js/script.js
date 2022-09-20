const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburgerMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});
