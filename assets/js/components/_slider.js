let sliderWrapper = document.querySelector('.slider-wrapper'),
    sliderLinkImages = document.querySelectorAll('.slider__link img'),
    sliderItem = document.querySelectorAll('.slider__item');



export function slider() {
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
}