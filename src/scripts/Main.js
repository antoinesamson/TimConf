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
      loop: true,
    });
  }


  initChangeClasse() {
    var width = document.body.clientWidth;
    if (width < 650){
      document.querySelector('swiper-sponsors').classList.remove('js-swiper-sponsors')
    }

    else if (width > 651){
      document.querySelector('swiper-sponsors').classList.add('js-swiper-sponsors')
    }
  }

}


new Main();
