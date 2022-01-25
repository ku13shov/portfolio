const scrollFunc = () => {
    const links = document.querySelectorAll('.header__menu-item a');
    //const detailsLink = document.querySelector('.card-details__link-characteristics');

    links.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            const id = item.getAttribute('href').substring(1);
            const section = document.getElementById(id);
            
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
        });
    });
}

scrollFunc();