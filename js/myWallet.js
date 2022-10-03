const cartProducts = document.querySelector(".cart-products");
const welcomeHeader = document.querySelector("h1");

function displayItemsOnWallet() {
  let price = localStorage.getItem("price");
  let product = localStorage.getItem("products");
  product = JSON.parse(product);
  if (product) {
    cartProducts.innerHTML = ``;
    Object.values(product).map((item) => {
      cartProducts.innerHTML += `
            <div class="cart-item">
               <div class="nameTag">
                    <div class="removeItem" onClick="delete_row(this)">x</div>
                    <img src="${item.img}">
                    <div> ${item.name} </div>
               </div>
               <div> ${item.price} kr</div>
               <div> ${item.inCart}</div>
               <div> ${item.price * item.inCart} kr</div>
            </div>
        `;
    });
    cartProducts.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
                Basket Total
            </h4>
            <h4 class="basketTotal">
                ${price} kr
            </h4>
    `;
  }
}
displayItemsOnWallet();
const cartItem = document.querySelectorAll(".cart-item");
const removeItem = document.getElementsByClassName("removeItem");
function delete_row(e) {
  e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
}

function h1change() {
  const cartNumbers = localStorage.getItem("cartNumbers");
  if (cartNumbers) {
    welcomeHeader.innerText = "Your cart items";
  } else {
    welcomeHeader.innerText = "Please add some items on your cart";
  }
}
h1change();
