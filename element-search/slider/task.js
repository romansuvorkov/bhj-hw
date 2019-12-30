const leftArrow = Array.from(document.getElementsByClassName('slider__arrow_prev'));
const rightArrow = Array.from(document.getElementsByClassName('slider__arrow_next'));
const sliderImages = document.querySelectorAll('.slider__item');
const sliderDots = document.querySelectorAll('.slider__dot');

var nowActiveImgNumber;
nowActiveImg(sliderImages);
var nowActiveDot = nowActiveImgNumber;
sliderDots[nowActiveDot].classList.add('slider__dot_active');

function nowActiveImg(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i].className.includes('slider__item_active')) {
        nowActiveImgNumber = i;
        }
    }
}

function nowActiveDotNumb(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i].className.includes('slider__dot_active')) {
            nowActiveDot = i;
        }
    }
}

function dotClick() {
    sliderDots[nowActiveDot].classList.remove('slider__dot_active');
    event.target.classList.add('slider__dot_active');
    nowActiveDotNumb(sliderDots);
    sliderImages[nowActiveImgNumber].classList.remove('slider__item_active');
    nowActiveImgNumber = nowActiveDot;
    sliderImages[nowActiveImgNumber].classList.add('slider__item_active');
}

sliderDots.forEach( element =>
    element.onclick = () => {
        dotClick();
});


rightArrow.forEach( element =>
    element.onclick = () => {
        nowActiveImg(sliderImages);
        sliderImages[nowActiveImgNumber].classList.remove('slider__item_active');
        sliderDots[nowActiveDot].classList.remove('slider__dot_active');
        if (nowActiveImgNumber === (sliderImages.length - 1)) {
            nowActiveImgNumber = 0;
            nowActiveDot = 0;
        } else {
            nowActiveImgNumber = nowActiveImgNumber + 1;
            nowActiveDot = nowActiveDot + 1;
        }
        sliderImages[nowActiveImgNumber].classList.add('slider__item_active');
        sliderDots[nowActiveDot].classList.add('slider__dot_active');
});


leftArrow.forEach( element =>
    element.onclick = () => {
        nowActiveImg(sliderImages);
        sliderImages[nowActiveImgNumber].classList.remove('slider__item_active');
        sliderDots[nowActiveDot].classList.remove('slider__dot_active');
        if (nowActiveImgNumber === 0) {
            nowActiveImgNumber = sliderImages.length - 1;
            nowActiveDot = nowActiveImgNumber;
        } else {
            nowActiveImgNumber = nowActiveImgNumber - 1;
            nowActiveDot = nowActiveDot - 1;
        }
        sliderImages[nowActiveImgNumber].classList.add('slider__item_active');
        sliderDots[nowActiveDot].classList.add('slider__dot_active');
});











