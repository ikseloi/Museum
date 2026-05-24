'use strict';

const track = document.querySelector('.slider__track');
const sliderItem = document.querySelector('.slider__item');
const dots = document.querySelectorAll('.slider__dot');

// const slideWidth = track.offsetWidth + 20;
// const slideWidth = sliderItem.offsetWidth + 20;
const slideWidth = sliderItem.offsetWidth === 280 ? 300 : 280;

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    track.style.transform = `translateX(-${index * slideWidth}px)`;

    dots.forEach((item) => {
      item.classList.remove('slider__dot--active');
    });

    dot.classList.add('slider__dot--active');
  });
});
