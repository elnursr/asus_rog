import { slider } from './components/_slider.js';
import { getData } from './services/_data_service.js';
import { productToUI } from './ui/_products_to_ui.js';
import { socialToUI } from './ui/_social_to_ui.js';
import { regionToUI } from './ui/_regions_to_ui.js';

slider();

let productsUrl = '../assets/data/json/products.json',
    bannersUrl = '../assets/data/json/banners.json',
    socialsUrl = '../assets/data/json/socials.json',
    regionsUrl = '../assets/data/json/regions.json';

let productList = document.querySelector('.product__list'),
    footerSocial = document.querySelector('.footer__social'),
    bannerSlideshow = document.querySelector('.banner-slideshow'),
    regionModalLanguage = document.querySelector('.region-modal__language');

getData(productsUrl)
    .then(({ products }) => {
        productToUI(products, productList);
    })

getData(socialsUrl)
    .then(({ socials }) => {
        socialToUI(socials, footerSocial);
    })

getData(regionsUrl)
    .then(({ regions }) => {
        regionToUI(regions, regionModalLanguage);
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