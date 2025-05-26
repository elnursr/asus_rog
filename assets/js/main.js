// import  Swiper  from '../vendors/swiper/js/swiper_min.js';
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';


const bannerSwiper = new Swiper('.bannerSwiper', {
    autoplay: {
        delay: 3555,
        disableOnInteraction: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
});

// const productSwiper = new Swiper('.productSwiper', {
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev"
//     },
//      autoplay: {
//         delay: 3555,
//         disableOnInteraction: true
//     },
//     direction: 'horizontal',
//     // loop: true,
//     slidesPerView: 5,
//     spaceBetween: 9,
// });