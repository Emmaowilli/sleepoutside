import { getLocalStorage, setLocalStorage } from ".utils.mjs"

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    this.renderProductDetails();

    document.getElementById('addToCart')
      .addEventListener('click', this.addProductToCart.bind(this));
  }

  // renderProductDetails() {
  //  document.querySelector('.product-detail').innerHTML = `
  //    <h2>${this.product.Name}</h2>
  //    <img src="${this.product.Image}" alt="Tent image for ${this.product.Name}" />
  //    <p>${this.product.Description}</p>
  //    <p>Price: $${this.product.FinalPrice}</p>
  //    <button id="addToCart">Add to Cart</button>
  //  `;
  //}

  //addProductToCart() {
  //  const cart = JSON.parse(localStorage.getItem("so-cart")) || [];
  //  cart.push(this.product);
  //  localStorage.setItem("so-cart", JSON.stringify(cart));//
  //}
//}

addProductToCart() {
    const cartItems = getLocalStorage("so-cart") || [];
    cartItems.push(this.product);
    setLocalStorage("so-cart", cartItems);
  }

  renderProductDetails() {
    productDetailsTemplate(this.product);
  }
}

function productDetailsTemplate(product) {
  document.querySelector('h2').textContent = product.Brand.Name;
  document.querySelector('h3').textContent = product.NameWithoutBrand;

  const productImage = document.getElementById('productImage');
  productImage.src = product.Image;
  productImage.alt = product.NameWithoutBrand;

  document.getElementById('productPrice').textContent = product.FinalPrice;
  document.getElementById('productColor').textContent = product.Colors[0].ColorName;
  document.getElementById('productDesc').innerHTML = product.DescriptionHtmlSimple;

  document.getElementById('addToCart').dataset.id = product.Id;
}

