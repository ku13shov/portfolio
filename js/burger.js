const burgerFunc = () => {
    const burger = document.querySelector('.header__menu-burger');
    const menu = document.querySelector('.header__menu-list');
    const links = document.querySelectorAll('.header__menu-item a');

    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    });
}

burgerFunc();