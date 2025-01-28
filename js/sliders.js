const swiper = new Swiper(".mySwiper", {
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	 },
	 effect: "fade",
 });

 const swiper1 = new Swiper(".services-carusel", {
	scrollbar: {
		el: ".services-carusel__scrollbar",
		dragClass: 'rrr',
	 },
	
	 slidesPerView: 3,
	 spaceBetween: 20,

 });