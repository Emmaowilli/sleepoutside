export default function renderProductCard(product) {
  return `
    <li class="product-card">
      <a href="product_pages/index.html?product={product.Id} aria-label="View details for ${product.Name}"">
        <img src="${product.Image}" alt="Tent image for ${product.Name}" />
        <h2 class="product-name">${product.Name}</h2>
        <p class="product-price">$${product.FinalPrice}</p>
      </a>
    </li>
  `;
}

import renderProductCard from "./productCard.mjs";