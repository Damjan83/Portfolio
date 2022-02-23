const checkbox = document.getElementById('switchCheckbox');

const burger = document.querySelector('.main-nav__burger');
const nav = document.querySelector('.main-nav__menu');
const menuItem = document.querySelector('.main-nav__menu-item');
const menuLink = document.querySelectorAll('.main-nav__menu-link');

/*------Theme switcher------*/ 
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

/*------Burger and mobile menu------*/
burger.addEventListener('click' , () => {
    nav.classList.toggle('is-active');
    burger.classList.toggle('is-active');
    menuItem.classList.toggle('is-active');
    menuLink.forEach( (el) => {
        el.classList.toggle('is-active');
    });
});

    
   