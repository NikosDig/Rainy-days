const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const main = document.querySelector("main");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});

main.addEventListener("click", () => {
  hamburger.classList.remove("active");
  hamburgerMenu.classList.remove("active");
});
