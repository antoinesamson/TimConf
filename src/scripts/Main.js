import Icons from './utils/Icons';
import Swiper from 'swiper/bundle';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    const openbutton = document.querySelector('.js-toggle');
    openbutton.addEventListener('click', this.onOpenNav);
    const closebutton = document.querySelector('.js-remove');
    closebutton.addEventListener('click', this.onCloseNav);

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
      autoplay: {
        delay: 2000,
      }
    });
  }

initSwiperEvenements() {
  const target = document.querySelector('.js-swiper-evenements');
  const swiper = new Swiper(document.querySelector('.js-swiper-evenements'),{
    loop: true,
    pagination: {
      
        el: target.querySelector('.pagination-evenements'),
      },

      autoplay: {
        delay: 10000,
      },
  });

}

initSwiperAutresConferenciers() {
  const target = document.querySelector('.js-swiper-conferenciers');
  const swiper = new Swiper(
    document.querySelector('.js-swiper-conferenciers'),
    {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: target.querySelector('.pagination-conferenciers'),
      },

      autoplay: {
        delay: 5000,
      },
        breakpoints: {
          768: {
          slidesPerView: 2,
          spaceBetween: 30,
          
        }
        
      }
    }
  );

}

onOpenNav() {
var html = document.documentElement;
 html.classList.add('nav-is-active');

}

onCloseNav() {
  var html = document.documentElement;
  html.classList.remove('nav-is-active');
 
 }
}


 
 




new Main();
