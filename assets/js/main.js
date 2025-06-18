import { getDataAysnc, getDataFetch } from './services/_data_service.js';

import { slider } from './components/_slider.js';


import { bannerToUI } from './ui/_banners_to_ui.js';
import { socialToUI } from './ui/_social_to_ui.js';
import { regionToUI } from './ui/_regions_to_ui.js';
import { productToUI } from './ui/_products_to_ui.js';

import { bannersUrl, socialsUrl, regionsUrl, productsUrl } from './config/_urls.js';

import { bannerSlideshow, footerSocial, regionModalLanguage, productList } from './ui/_dom_selectors.js';

slider();

getDataAysnc(productsUrl)
    .then(({ products }) => {
        productToUI(products, productList);
    })

getDataAysnc(socialsUrl)
    .then(({ socials }) => {
        socialToUI(socials, footerSocial);
    })

getDataAysnc(regionsUrl)
    .then(({ regions }) => {
        regionToUI(regions, regionModalLanguage);
    })

getDataAysnc(bannersUrl)
    .then(({ banners }) => {
        bannerToUI(banners, bannerSlideshow);
    })