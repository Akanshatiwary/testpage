/*
  menuToggle: Function to Toggle Menu
*/
const menuToggle = () => {
  const header = document.querySelector('header');
  const hamburger = document.querySelector('header .hamburger-menu');
  if (hamburger.classList.contains('active')) {
    hamburger.classList.remove('active');
    header.classList.remove('mobile-nav');
  } else {
    hamburger.classList.add('active');
    header.classList.add('mobile-nav');
  }
};
