
const buttonClose = document.querySelector('#header-menu-button-close');
const buttonOpen = document.querySelector('#header-menu-button-open');
const menu = document.querySelector('#header-menu');

buttonClose.addEventListener('click', (e) => {
    e.preventDefault();
    buttonClose.classList.add('hidden');
    menu.classList.add('header-menu__mobile--active');
})

buttonOpen.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.remove('header-menu__mobile--active');
    buttonClose.classList.remove('hidden');
})

