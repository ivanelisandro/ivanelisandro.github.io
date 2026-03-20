const hamburgerButton = document.querySelector('.hamburger');
const menu = document.querySelector('nav ul');

hamburgerButton.addEventListener('click', () => {
    menu.classList.toggle('open');
});
