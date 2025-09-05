const textoHeader = document.getElementById('Texto-Header');
const headerH1 = document.querySelector('header h1');
const headerP = document.querySelector('header p');
const headerParag = document.getElementById('header-parag');

if (textoHeader && headerH1 && headerP && headerParag) {
    textoHeader.addEventListener('mouseenter', function() {
        textoHeader.classList.add('animar-cima');
        headerH1.classList.add('animar-cima');
        headerP.classList.add('animar-cima');
        headerParag.classList.add('animar-cima');
    });

    textoHeader.addEventListener('mouseleave', function() {
        headerH1.classList.remove('animar-cima');
        headerP.classList.remove('animar-cima');
        headerParag.classList.remove('animar-cima');
    });
}

const webpack = require('webpack');

//...
plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
]
//...

const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? 3 : currentIndex - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 3) ? 0 : currentIndex + 1;
  updateCarousel();
});

function updateCarousel() {
  const offset = currentIndex * -25; // 25% para cada imagem
  carousel.style.transform = `translateX(${offset}%)`;
}