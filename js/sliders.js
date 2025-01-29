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
})
