// Menangkap selector id
const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('main');

// Mengeksekusi kedua selektor id untuk membuka jendela menu
hamburgerButtonElement.addEventListener('click', event => {
    drawerElement.classList.toggle('open');
    event.stopPropagation();
});

// Mengeksekusi tag main untuk menutup jendela menu
mainElement.addEventListener('click', event => {
    drawerElement.classList.remove('open');
    event.stopPropagation();
});