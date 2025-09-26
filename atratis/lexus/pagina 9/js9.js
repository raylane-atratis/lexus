 const toggle = document.getElementById('menu-toggle');
  const navWrapper = document.querySelector('.nav-wrapper');

  toggle.addEventListener('click', () => {
    navWrapper.classList.toggle('active');
  });