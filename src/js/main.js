import /*{loadProductList} */ ProductDate from './ProductData.mjs';
import {renderProductList} from './utils.mjs';

async function init() {
    const dataSource = new ProductData('hammocks');
    const products = await dataSource.getData();
    const listElement = document.querySelector('#product-list');
    
    if (products && listElement) {
        renderProductList(products, listElement);
    } else {
        console.error('Failed to load products or find target element.');
    }
}

init();