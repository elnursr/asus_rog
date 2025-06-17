export function productToUI(products, productListElement) {
    products.forEach(({ title }) => {
        productListElement.innerHTML +=
            `
            <li class="product__item">
                <a href="https://rog.asus.com/${title.replace(/_/g, '-').replace(/&/g, '').replace(/--+/g, '-')}-group" class="product__link" target="_blank">
                    <div class="product__image">
                        <img src="assets/media/products/${title}.png" alt="${title}">
                    </div>
                    <h3 class="product__title">${title.replace(/_/g, ' ')}</h3>
                </a>
            </li>
        `;
    });
}