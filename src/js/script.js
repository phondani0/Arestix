const slides = document.querySelectorAll('.slide');

const length = slides.length;

let counter = 1;

setInterval(() => {
    const slideWidth = slides[0].clientWidth;
    if (counter !== 1) {
        slides[counter - 2].style.transition = "none";
        slides[counter - 2].style.transform = `translateX(${slideWidth * (counter-1)}px)`;
    } else {
        slides[length - 1].style.transition = "none";
        slides[length - 1].style.transform = `translateX(${slideWidth}px)`;
    }
    if (counter === length) {
        slides[counter - 1].style.transform = `translateX(-${slideWidth * counter}px)`;
        counter = 0;
        slides[0].style.transition = "transform .4s ease-in-out";
        slides[0].style.transform = `translateX(0px)`;
    } else {
        slides[counter - 1].style.transform = `translateX(-${slideWidth * counter}px)`;
        slides[counter].style.transition = "transform .4s ease-in-out";
        slides[counter].style.transform = `translateX(-${slideWidth * counter}px)`;
    }
    counter++;
}, 3000);