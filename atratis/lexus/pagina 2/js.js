

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

jQuery(".owl-diferenciais").owlCarousel({
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
    800:  {
      items:3,
    },
    1000: {
      items:5,
    },
  },
});

jQuery(".owl-conheca-servicos").owlCarousel({
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
      items: 1,
    },
    1000: {
      items:3,
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

let allItemsHTML = [];

$(document).ready(function () {
  // Inicializa o carrossel
  $('.owl-carros').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true
  });

  // Salva os slides originais como HTML
  allItemsHTML = $('.owl-carros .item').map(function () {
    return this.outerHTML;
  }).get();
});

function filterCars(type, clickedBtn) {
  // Atualiza botões ativos
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  clickedBtn.classList.add('active');

  // Filtra os slides
  const filteredHTML = allItemsHTML.filter(html => {
    return type === 'all' || html.includes(`class="item ${type}"`) || html.includes(`class="item ${type} `);
  });

  // Substitui os slides no carrossel
  $('.owl-carros').trigger('replace.owl.carousel', [filteredHTML.join('')]).trigger('refresh.owl.carousel');
}

const toggle = document.getElementById('menu-toggle');
  const navWrapper = document.querySelector('.nav-wrapper');

  toggle.addEventListener('click', () => {
    navWrapper.classList.toggle('active');
  });

