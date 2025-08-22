import {modalQuote} from "./components/modalQuote.js";
import {setupMobileMenu} from "./components/mobileMenu.js";

modalQuote();
setupMobileMenu();

new Swiper('.info__swiper', {
  loop: false,
  navigation: {
    nextEl: '.slider-plans__btn--next',
    prevEl: '.slider-plans__btn--prev',
  },
  breakpoints: {
    660: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    468: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 12
    }
  }
});

new Swiper('.slider-plans', {
  loop: false,
  navigation: {
    nextEl: '.slider-plans__btn--next',
    prevEl: '.slider-plans__btn--prev',
  },
  breakpoints: {
    1260: {
      slidesPerView: 3,
      spaceBetween: 7.5
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 7.5
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    425: {
      slidesPerView: 'auto',
      spaceBetween: 16,
      freeMode: {
        enabled: true
      },
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 16,
      freeMode: {
        enabled: false
      },
    }
  },
});