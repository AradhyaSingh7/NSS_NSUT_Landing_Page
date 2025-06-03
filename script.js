new Swiper('.swiper', {
  loop: true,
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 20,
  loopedSlides: 12,  
  loopFillGroupWithBlank: false,
   dynamicBullets: true,
  watchOverflow: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 20 },
    768: { slidesPerView: 3, slidesPerGroup: 2, spaceBetween: 15 },
    480: { slidesPerView: 3, slidesPerGroup: 2, spaceBetween: 10 },
  },
});
