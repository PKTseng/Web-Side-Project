const galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  loop: true,
  freeMode: true,
  loopedSlides: 10, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  speed: 1000,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: true,
  // },
})
const galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  loop: true,
  loopedSlides: 10, //looped slides should be the same
  speed: 1000,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: true,
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
})
