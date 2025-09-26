jQuery(".owl-servicos").owlCarousel({
  loop: false,
  margin: 10,
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
      items:3,
    },
  },
});

const toggle = document.getElementById('menu-toggle');
  const navWrapper = document.querySelector('.nav-wrapper');

  toggle.addEventListener('click', () => {
    navWrapper.classList.toggle('active');
  });
