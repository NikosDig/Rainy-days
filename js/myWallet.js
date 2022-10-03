const cartProducts = document.querySelector(".cart-products");

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
                    <div class="removeItem">x</div>
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

const removeItem = document.getElementsByClassName("removeItem");
// for (let i = 0; i < removeItem.length; ) {
//   removeItem[i].addEventListener("click", () => {
//     console.log(removeItem[i]);
//   });
// }
