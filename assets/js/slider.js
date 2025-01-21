$(document).ready(function () {
  var owl = $('.owl-carousel').on('initialized.owl.carousel changed.owl.carousel', function (e) {
      if (!e.namespace) {
          return;
      }
      var carousel = e.relatedTarget;
      $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
  }).owlCarousel({
      items: 1,
      loop: 0,
      nav: 0,
      dots: 0,
      margin: 20,
      autoplay: 0,
      slideTransition: 'linear',
      autoplayTimeout: 5000,
      autoplaySpeed: 1000,

  });
  // Custom Button
  $('.btn-forward').click(function () {
      owl.trigger('next.owl.carousel');
  });
  $('.btn-prev').click(function () {
      owl.trigger('prev.owl.carousel');
  });
});