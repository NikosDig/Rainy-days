const APIUrl = "https://nikosdigalakis.com/rainydays/wp-json/wc/store/products";
const jacketContainer = document.querySelector(".jacket_list");

jacketContainer.innerHTML = `
                              <div>
                                 <h2> Loading . . . </h2>
                              </div>
`;

async function getProducts(url) {
  const response = await fetch(url);
  const listOfProducts = await response.json();
  jacketContainer.innerHTML = ``;
  listOfProducts.forEach(function (product) {
    jacketContainer.innerHTML += `
    <div class="jacket">
     <div class="card borderedAndShadow">
         <a href="/products/details.html?id=${product.id}" title="${product.name}"
         ><img src="${product.images[0].src}" alt="${product.name}"
         /></a>
     </div>
     <h2>${product.name}</h2>
     <p>${product.prices.price} kr</p>
     </div>
    `;
  });
}

getProducts(APIUrl);
