let sliderWrapper = document.querySelector('.slider-wrapper'),
    sliderLinkImages = document.querySelectorAll('.slider__link img'),
    sliderItem = document.querySelectorAll('.slider__item');

sliderWrapper.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.parentElement.parentElement.getAttribute('class').split(' ')[1] === 'active') {
        e.target.parentElement.parentElement.setAttribute('class', 'slider__item');
        if (e.target.parentElement.parentElement.dataset.lastSlide === 'lastImage') {
            return e.currentTarget.firstElementChild.children[0].setAttribute('class', 'slider__item active');
        }
        e.target.parentElement.parentElement.nextElementSibling.setAttribute('class', 'slider__item active');
    }
});

let url = '../assets/data/json/products.json';

let productList = document.querySelector('.product__list');

fetch(url)
    .then(res => res.json())
    .then(({ products }) => {
        products.forEach(product => {

            productList.innerHTML +=
                `
                    <li class="product__item">
                        <a href="https://rog.asus.com/${product.title.replace(/_/g, '-').replace(/&/g, '').replace(/--+/g, '-')}-group" class="product__link" target="_blank">
                            <div class="product__image">
                                <img src="assets/media/products/${product.title}.png" alt="${product.image_name}">
                            </div>
                            <h3 class="product__title">${product.title.replace(/_/g, ' ')}</h3>
                        </a>
                    </li>
                `;
        });
    })