const mainContent = document.querySelector(".mainContent");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const APIUrl =
  "https://nikosdigalakis.com/rainydays/wp-json/wc/store/products/" + id;

// if (!id) {
//   document.location.href = "/jackets.html";
// }
// const item = productList.find(function (item) {
//   if (item.id === id) {
//     return true;
//   } else {
//     return false;
//   }
// });
// if (!item) {
//   document.location.href = "/jackets.html";
// }
mainContent.innerHTML = `
                          <div class="loader"><h3>Loading...</h3></div>
`;

async function getProducts(url) {
  const response = await fetch(url);
  const listOfProducts = await response.json();
  document.title = `${listOfProducts.name}` + " || Details";
  mainContent.innerHTML = `
        <section class="breadcrumb">
        <a href="../index.html" title="Home" class="breadcrumb_item">Home /</a>
        <a href="../jackets.html" title="Mens jackets" class="breadcrumb_item"
        >Men's jackets /</a
        >
        <p class="breadcrumb_item">${listOfProducts.name}</p>
        </section>
        <section class="main-product-container">
        <div class="card jacket float_left">
          <img src="${listOfProducts.images[0].src}" alt="${listOfProducts.name}" />
        </div>
        <section>
          <div class="product-spesific-item border-fix">
            <h1>${listOfProducts.name}</h1>
            <a href="../sign.html" title="like this jacket"
              ><i class="far fa-heart"></i
            ></a>
          </div>
          <div class="product-spesific-item">
            <p class="border-fix">${listOfProducts.prices.price} kr</p>
            <p>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <a href="../sign.html">3</a>
            </p>
          </div>
          <div>
            <p>
              ${listOfProducts.description}
            </p>
            <div class="product-spesific-item border-fix">
              <a href="#" class="yellow"></a>
              <a href="#" class="black"></a>
              <a href="#" class="blue"></a>
              <a href="#" class="red"></a>
              <button class="cta cart" data-item="${listOfProducts.id}">ADD TO BAG</button>
            </div>
          </div>
          <form action="POST" class="product-spesific-item border-fix size">
            <p>SIZE</p>
            <input type="radio" name="size" id="xs" checked />
            <label for="xs">XS</label>
            <input type="radio" name="size" id="s" />
            <label for="s">S</label>
            <input type="radio" name="size" id="m" />
            <label for="m">M</label>
            <input type="radio" name="size" id="l" />
            <label for="l">L</label>
            <input type="radio" name="size" id="xl" />
            <label for="xl">XL</label>
          </form>
        </section>
      </section>

      <section class="main-product-container">
      <div>
        <h2 class="border-fix">Features</h2>
        <ul>
          <li>
            Shoulders and pockets are reinforced with added fabric for
            durability
          </li>
          <li>Articulated sleeves enhance fit</li>
          <li>2 interior pockets</li>
          <li>Hem is longer in the back for added coverage and protection</li>
        </ul>
      </div>
      <div class="card jacket float_left">
        <img src="${listOfProducts.images[0].src}" alt="${listOfProducts.name}" />
      </div>
    </section>
`;

  //was here
  const button = document.querySelector(".cta");

  button.addEventListener("click", () => {
    setProductOnMemory(listOfProducts);
  });

  function setProductOnMemory(item) {
    let cartItems = localStorage.getItem("products");
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
      if (cartItems[item.name] == undefined) {
        cartItems = {
          ...cartItems,
          [item.name]: item,
        };
      }
      cartItems[item.name].inCart += 1;
    } else {
      item.inCart = 1;
      cartItems = {
        [item.name]: item,
      };
    }

    localStorage.setItem("products", JSON.stringify(cartItems));

    totalPrice(item);
  }

  function totalPrice(item) {
    let priceInMemory = localStorage.getItem("price");
    console.log(typeof priceInMemory);
    if (priceInMemory) {
      priceInMemory = parseInt(priceInMemory);
      localStorage.setItem(
        "price",
        (priceInMemory += parseInt(item.prices.price))
      );
    } else {
      localStorage.setItem("price", parseInt(item.prices.price));
    }
    console.log("my total price is ", item.prices.price);
  }
}
getProducts(APIUrl);

// const button = document.querySelector(".cta");

// button.addEventListener("click", () => {
//   setProductOnMemory(item);
// });

// function setProductOnMemory(item) {
//   let cartItems = localStorage.getItem("products");
//   cartItems = JSON.parse(cartItems);

//   if (cartItems != null) {
//     if (cartItems[item.name] == undefined) {
//       cartItems = {
//         ...cartItems,
//         [item.name]: item,
//       };
//     }
//     cartItems[item.name].inCart += 1;
//   } else {
//     item.inCart = 1;
//     cartItems = {
//       [item.name]: item,
//     };
//   }

//   localStorage.setItem("products", JSON.stringify(cartItems));

//   totalPrice(item);
// }

// function totalPrice(item) {
//   console.log("my total price is ", item.price);
//   let priceInMemory = localStorage.getItem("price");
//   console.log(typeof priceInMemory);
//   if (priceInMemory) {
//     priceInMemory = parseInt(priceInMemory);
//     localStorage.setItem("price", (priceInMemory += item.price));
//   } else {
//     localStorage.setItem("price", item.price);
//   }
// }
// here ends the old working code
