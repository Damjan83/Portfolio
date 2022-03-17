 $(document).ready(() => {
     $('#switchCheckbox').on('change', () => {
         $('body').toggleClass('dark');
     })

     $('.main-nav__burger').on('click', () => {
        $('.main-nav__menu').toggleClass('is-active');
        $('.main-nav__burger').toggleClass('is-active');
        $('.main-nav__menu-item').toggleClass('is-active');
     })

     $('.main-nav__menu-link, .back-to-top__text, .arrow-bounce').on('click', function(e){     
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$(this.hash).offset().top
        }, 1000);
    });
    
 })



    
   