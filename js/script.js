import { productList } from "./productsList.js";
const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const main = document.querySelector("main");
const addToCartButton = document.querySelector(".cart");
const numberOfItemsInWallet = document.querySelector(".numberOfItemsInWallet");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});

main.addEventListener("click", () => {
  hamburger.classList.remove("active");
  hamburgerMenu.classList.remove("active");
});

//  cart functionality
//
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function checkIfButtonExists() {
  if (addToCartButton) {
    addToCartButton.addEventListener("click", (event) => {
      cartNumbers();
      walletNumberOnMemory();
      console.log(event.target.dataset.item);
    });
  }
}

function walletNumberOnMemory() {
  let productsTotal = localStorage.getItem("cartNumbers");
  if (productsTotal) {
    numberOfItemsInWallet.textContent = productsTotal;
    numberOfItemsInWallet.style.display = "inline-block";
  }
}

function cartNumbers(event) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    numberOfItemsInWallet.textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    numberOfItemsInWallet.textContent = 1;
  }
}

checkIfButtonExists();
walletNumberOnMemory();
