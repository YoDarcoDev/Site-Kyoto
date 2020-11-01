const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');

// NAVBAR BOUTON HAMBURGER
btnMenu.addEventListener('click', function() {
    
    menu.classList.toggle('active');
});




// MENU QUI SE FERME AU CLICK
const allLinks = document.querySelectorAll('.item-nav');

allLinks.forEach(function(item) {
    
    item.addEventListener('click', function() {
        menu.classList.toggle('active');
    })
});