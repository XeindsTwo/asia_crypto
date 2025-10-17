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

const quoteBtn = document.querySelector('.banner__btn[data-btn-quote]');

if (quoteBtn) {
  const updateBtnText = () => {
    quoteBtn.textContent = window.innerWidth < 610
      ? 'GET FREE QUOTE'
      : 'GET YOUR FREE QUOTE TODAY';
  };

  updateBtnText();
  window.addEventListener('resize', updateBtnText);
}

const container = document.querySelector('.home');
const dragon = document.querySelector('.home__img:not(.money)');
const coins = document.querySelector('.home__img.money');

if (container && dragon && coins) {
  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) / 50;
    const moveY = (y - rect.height / 2) / 80;

    dragon.style.transform = `translateX(${moveX}px)`;
    coins.style.transform = `translate(${ -moveX }px, ${moveY}px)`;
  });

  container.addEventListener('mouseleave', () => {
    dragon.style.transform = 'translateX(0)';
    coins.style.transform = 'translate(0,0)';
  });
}

new Swiper('.pricing__swiper', {
  slidesPerView: 'auto',
  freeMode: true,
  speed: 800,
  breakpoints: {
    1200: {
      spaceBetween: 60
    },
    1000: {
      spaceBetween: 45
    },
    320: {
      spaceBetween: 28
    }
  }
});