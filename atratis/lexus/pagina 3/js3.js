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
      items: 1,
    },
  },
});

$(document).ready(function () {
  $(".car-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
  });
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
    800: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// Função que inicia os contadores
function iniciarContadores() {
  // Contador 1 – Motorização híbrida
  const elemento1 = document.getElementById("contador");
  const valorFinal1 = 2.4;
  let valorAtual1 = 0;

  const intervalo1 = setInterval(() => {
    valorAtual1 += 0.1;
    elemento1.textContent = valorAtual1.toFixed(1);
    if (valorAtual1 >= valorFinal1) {
      elemento1.textContent = valorFinal1.toFixed(1);
      clearInterval(intervalo1);
    }
  }, 100);

  // Contador 2 – Potência combinada
  const elemento2 = document.getElementById("contador2");
  const valorFinal2 = 371;
  let valorAtual2 = 0;

  const intervalo2 = setInterval(() => {
    valorAtual2+= 1.5;
    elemento2.textContent = valorAtual2.toFixed(1);
    if (valorAtual2 >= valorFinal2) {
      elemento2.textContent = valorFinal2.toFixed(1);
      clearInterval(intervalo2);
    }
  }, 10);

  // Contador 3 – Torque máximo
  const elemento3 = document.getElementById("contador3");
  const valorFinal3 = 55;
  let valorAtual3 = 0;
  const intervalo3 = setInterval(() => {
    valorAtual3+= 0.5;
    elemento3.textContent = valorAtual3.toFixed(1);
    if (valorAtual3 >= valorFinal3) {
      elemento3.textContent = valorFinal3.toFixed(1);
      clearInterval(intervalo3);
    }
  }, 20);

 // Contador 4 
  const elemento4 = document.getElementById("contador4");
  const valorFinal4 = 210;
  let valorAtual4 = 0;
  const intervalo4 = setInterval(() => {
    valorAtual4+= 1.5;
    elemento4.textContent = valorAtual4.toFixed(1);
    if (valorAtual4 >= valorFinal4) {
      elemento4.textContent = valorFinal4.toFixed(1);
      clearInterval(intervalo4);
    }
  }, 20);

  // Contador 4 
  const elemento5 = document.getElementById("contador5");
  const valorFinal5 = 6.2;
  let valorAtual5 = 0;
  const intervalo5 = setInterval(() => {
    valorAtual5+= 0.02;
    elemento5.textContent = valorAtual5.toFixed(1);
    if (valorAtual5 >= valorFinal5) {
      elemento5.textContent = valorFinal5.toFixed(1);
      clearInterval(intervalo5);
    }
  }, 10);
}

// Observador para detectar quando a seção entra na tela
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        iniciarContadores(); // Inicia os contadores
        observer.unobserve(entry.target); // Para observar depois de iniciar
      }
    });
  },
  {
    threshold: 0.5, // 50% da seção visível
  }
);

// Aponta para a seção .potencia
const secaoPotencia = document.querySelector(".potencia");
if (secaoPotencia) {
  observer.observe(secaoPotencia);
}
