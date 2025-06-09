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

let productsUrl = '../assets/data/json/products.json',
    bannersUrl = '../assets/data/json/banners.json',
    socialsUrl = '../assets/data/json/socials.json',
    regionsUrl = '../assets/data/json/regions.json';

let productList = document.querySelector('.product__list'),
    footerSocial = document.querySelector('.footer__social'),
    bannerSlideshow = document.querySelector('.banner-slideshow'),
    languageModalRegions = document.querySelector('.language-modal__regions');

fetch(productsUrl)
    .then(res => res.json())
    .then(({ products }) => {
        products.forEach(({ title }) => {

            productList.innerHTML +=
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
    })

fetch(socialsUrl)
    .then(res => res.json())
    .then(({ socials }) => {
        socials.forEach(({ url, className }) => {

            footerSocial.innerHTML +=
                `
                    <li class="footer__social-item">
                        <a href="${url}" class="footer__social-link" target="_blank">
                            <i class="fa-brands ${className}"></i>
                        </a>
                    </li>
                `;
        });
    })

fetch(bannersUrl)
    .then(res => res.json())
    .then(({ banners }) => {

        for (let i = 0; i < banners.length; i++) {

            if (i === 0) {
                bannerSlideshow.innerHTML +=
                    `
                    <li class="slider__item active banner-slideshow__item">
                        <a href="${banners[i].url}" class="banner-slideshow__link">
                            <img src="assets/media/banner/${banners[i].image_name}.webp" alt="">
                        </a>
                    </li>
                `;
            }

            else if (i === (banners.length - 1)) {
                bannerSlideshow.innerHTML +=
                    `
                    <li class="slider__item banner-slideshow__item" data-last-slide="lastImage">
                        <a href="${banners[i].url}" class="banner-slideshow__link">
                            <img src="assets/media/banner/${banners[i].image_name}.webp" alt="">
                        </a>
                    </li>
                `;
            }
            else {
                bannerSlideshow.innerHTML +=
                    `
                    <li class="slider__item banner-slideshow__item">
                        <a href="${banners[i].url}" class="banner-slideshow__link">
                            <img src="assets/media/banner/${banners[i].image_name}.webp" alt="">
                        </a>
                    </li>
                `;
            }
        }
    })

fetch(regionsUrl)
    .then(res => res.json())
    .then(({ regions }) => {
        
        regions.forEach(({ title, languages }) => {

            languageModalRegions.innerHTML +=
                `
                    <li class="anguage-modal__regions-item">
                        <h1 class="language-modal__regions-title">${title} region</h1>
                    </li>
                    <li class="anguage-modal__regions-item">
                        <a href="" class="anguage-modal__regions-link">${languages}</a>
                    </li>
                `;
        });
    })