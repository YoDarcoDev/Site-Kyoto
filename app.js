const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');

// NAVBAR BOUTON HAMBURGER
btnMenu.addEventListener('click', function() {
    
    menu.classList.toggle('active');
});


