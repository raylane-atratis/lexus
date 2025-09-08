

jQuery(".owl-carros").owlCarousel({
  loop: false,
  margin: 0,
  dots: true,
  nav: false,
  autoplay: false,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items:4,
    },
  },
});

jQuery(".owl-banner-principal").owlCarousel({
  loop: false,
  margin: 0,
  dots: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items:1,
    },
  },
});