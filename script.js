let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 200;
    if (offset > 400) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 200;
    if (offset < 0) {
        offset = 400;
    }
    sliderLine.style.left = -offset + 'px';
});

let offset2 = 0;
const sliderLine2 = document.querySelector('.slider-line2');

document.querySelector('.slider-next2').addEventListener('click', function(){
    offset = offset + 200;
    if (offset > 400) {
        offset = 0;
    }
    sliderLine2.style.left = -offset + 'px';
});

document.querySelector('.slider-prev2').addEventListener('click', function () {
    offset = offset - 200;
    if (offset < 0) {
        offset = 400;
    }
    sliderLine2.style.left = -offset + 'px';
});

let offset3 = 0;
const sliderLine3 = document.querySelector('.slider-line3');

document.querySelector('.slider-next3').addEventListener('click', function(){
    offset = offset + 200;
    if (offset > 400) {
        offset = 0;
    }
    sliderLine3.style.left = -offset + 'px';
});

document.querySelector('.slider-prev3').addEventListener('click', function () {
    offset = offset - 200;
    if (offset < 0) {
        offset = 400;
    }
    sliderLine3.style.left = -offset + 'px';
});