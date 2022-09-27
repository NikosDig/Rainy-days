import { productList } from "./productsList.js";
const mainContent = document.querySelector(".mainContent");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const item = productList[id - 1];
console.log(item);
document.title = `${item.name}` + " || Details";
mainContent.innerHTML = `
        <section class="breadcrumb">
        <a href="../index.html" title="Home" class="breadcrumb_item">Home /</a>
        <a href="../jackets.html" title="Mens jackets" class="breadcrumb_item"
        >Men's jackets /</a
        >
        <p class="breadcrumb_item">${item.name}</p>
        </section>
        <section class="main-product-container">
        <div class="card jacket float_left">
          <img src="../${item.img}" alt="${item.name}" />
        </div>
        <section>
          <div class="product-spesific-item border-fix">
            <h1>${item.name}</h1>
            <a href="../sign.html" title="like this jacket"
              ><i class="far fa-heart"></i
            ></a>
          </div>
          <div class="product-spesific-item">
            <p class="border-fix">${item.price} kr</p>
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
              Lightweight and versatile, this jacket provides superior wind
              protection. The collar and hem can be adjusted to further block
              out cold winds while reflective details on the collar add
              visibility in low light.
            </p>
            <div class="product-spesific-item border-fix">
              <a href="#" class="yellow"></a>
              <a href="#" class="black"></a>
              <a href="#" class="blue"></a>
              <a href="#" class="red"></a>
              <button class="cta cart" data-item="${item.id}">ADD TO BAG</button>
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
        <img src="../${item.img}" alt="${item.name}" />
      </div>
    </section>
`;
