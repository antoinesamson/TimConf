import Icons from './utils/Icons';
import Swiper from 'swiper/bundle';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();

    this.initSwiperSponsors();
  }

  initSwiperSponsors() {
    const target = document.querySelector('.js-swiper-sponsors');
    const swiper = new Swiper(document.querySelector('.js-swiper-sponsors'), {
      slidesPerView: 4,
      spaceBetween: 64,
    });
  }
}
new Main();
