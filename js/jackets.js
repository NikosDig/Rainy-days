import { productList } from "./productsList.js";
const jacketContainer = document.querySelector(".jacket_list");

jacketContainer.innerHTML = ``;

for (let i = 0; i < productList.length; i++) {
  let product = productList[i];
  jacketContainer.innerHTML += `
  <div class="jacket">
    <div class="card borderedAndShadow">
        <a href="/products/details.html?id=${product.id}" title="${product.name}"
        ><img src="${product.img}" alt="${product.name}"
        /></a>
        <a href="/products/details.html?id=${product.id}" title="${product.name}"
        ><img
            src="${product.imgHover}"
            alt="${product.name}"
            class="cardhover"
        /></a>
    </div>
    <h2>${product.name}</h2>
    <p>${product.price} kr</p>
    </div>
    `;
}
