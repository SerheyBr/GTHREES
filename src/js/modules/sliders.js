const swiper = new Swiper('.slider-main', {
   navigation: {
      nextEl: '.slider-main__button-next',
      prevEl: '.slider-main__button-prev',
   },
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   effect: 'fade',
})

const swiper1 = new Swiper('.slider-services', {
   scrollbar: {
      el: '.slider-services__scrollbar',
      dragClass: 'slider-services__drag',
   },

   slidesPerView: 4,
   spaceBetween: 20,
   breakpoints: {
      320: {
         slidesPerView: 2,
      },
      570: {
         slidesPerView: 3,
      },
      1024: {
         slidesPerView: 4,
      },
   },
})

const swiper3 = new Swiper('.slider-about-main', {
   navigation: {
      nextEl: '.slider-about-main__button-next',
      prevEl: '.slider-about-main__button-prev',
   },
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   effect: 'fade',
})

const swiper4 = new Swiper('.about-priorities-swiper', {
   slidesPerView: 2,
   loop: true,
   spaceBetween: 20,
   scrollbar: {
      el: '.about-priorities-swiper__scrollbar',
      dragClass: 'about-priorities-swiper__drag',
   },
   breakpoints: {
      570: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 3,
      },
   },
   // autoplay: {
   //    delay: 3000,
   //    disableOnInteraction: false,
   // },
   // effect: 'fade',
})
