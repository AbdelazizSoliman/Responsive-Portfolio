// Hamburger menu
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-items');
navLinks= document.querySelectorAll('.nav-link');

menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        navMenu.classList.toggle('active');
});

navLinks.forEach((navLink) => {
     navLink.addEventListener('click', () => {
        menuIcon.classList.remove('active');
        navMenu.classList.remove('active');
          });
        });

