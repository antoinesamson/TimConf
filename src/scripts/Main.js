import Icons from './utils/Icons';
import Swiper from 'swiper/bundle';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();

    this.initSwiperSponsors();
    this.initSwiperEvenements();
    this.initSwiperAutresConferenciers();
  }

  initSwiperSponsors() {
    const target = document.querySelector('.js-swiper-sponsors');
    const swiper = new Swiper(document.querySelector('.js-swiper-sponsors'), {
      slidesPerView: 4,
      spaceBetween: 64,
      loop: true,
    });
  }

initSwiperEvenements() {
  const target = document.querySelector('.js-swiper-evenements');
  const swiper = new Swiper(
    document.querySelector('.js-swiper-evenements'),
    {}
  );

  if (target) {
    const swiper = new Swiper(target, {
      pagination: {
        el: target.querySelector('.pagination-evenements'),
      },
    });
  }
}

initSwiperAutresConferenciers() {
  const target = document.querySelector('.js-swiper-conferenciers');
  const swiper = new Swiper(
    document.querySelector('.js-swiper-conferenciers'),
    {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      }
    }
  );

  if (target) {
    const swiper = new Swiper(target, {
      pagination: {
        el: target.querySelector('.pagination-conferenciers'),
      },
    });
  }
}


}


new Main();
