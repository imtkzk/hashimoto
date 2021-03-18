/*  swiper
-------------------------------------------------------*/
if (window.matchMedia( '(max-width: 800px)' ).matches) {
  var swiper1 = new Swiper('#interview-slide', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1500,
    autoplay: {
      delay: 1500,
    },
    navigation: {
      prevEl: '#inter-slide-prev',
      nextEl: '#inter-slide-next',
    },
    pagination: {
      el: '#inter-slide-pagination',
      type: 'bullets',
      clickable: true
    },
  });
}
