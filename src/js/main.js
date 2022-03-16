/*const checkbox = document.getElementById('switchCheckbox');
const burger = document.querySelector('.main-nav__burger');
const nav = document.querySelector('.main-nav__menu');
const menuItem = document.querySelector('.main-nav__menu-item');
const menuLink = document.querySelectorAll('.main-nav__menu-link');*/

/*------Theme switcher------*/ 
//checkbox.addEventListener('change', () => {
//    document.body.classList.toggle('dark');
//});
 $(document).ready(() => {
     $('#switchCheckbox').on('change', () => {
         $('body').toggleClass('dark');
     })

     $('.main-nav__burger').on('click', () => {
        $('.main-nav__menu').toggleClass('is-active');
        $('.main-nav__burger').toggleClass('is-active');
        $('.main-nav__menu-item').toggleClass('is-active');
     })

     $('.main-nav__menu-link').on('click', function(e){     
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$(this.hash).offset().top
        }, 2000);
    });
 })




 




/*------Burger and mobile menu------*/
/*burger.addEventListener('click' , () => {
    nav.classList.toggle('is-active');
    burger.classList.toggle('is-active');
    menuItem.classList.toggle('is-active');
    menuLink.forEach( (el) => {
        el.classList.toggle('is-active');
    });
});*/

    
   