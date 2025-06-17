export function bannerToUI() {
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
}