$(document).ready(() => {
    $('#switchCheckbox').on('change', function () {
        $('body').toggleClass('dark');
    })

    $('.main-nav__burger').on('click', function () {
       $('.main-nav__menu').toggleClass('is-active');
       $('.main-nav__burger').toggleClass('is-active');
       $('.main-nav__menu-item').toggleClass('is-active');
    })

    if($(window).width() < 768) {
       $('.main-nav__menu-link').on('click', function () {
           $('.main-nav__menu').removeClass('is-active');
           $('.main-nav__burger').removeClass('is-active');
           $('.main-nav__menu-item').removeClass('is-active');
       })
   }

    $('.main-nav__menu-link, .back-to-top__text, .arrow-bounce').on('click', function(e){     
       e.preventDefault();

       $('html,body').animate({
           scrollTop:$(this.hash).offset().top
       }, 1000);
   });

   $('.main-nav__menu-item').on('click', function() {
       $('.main-nav__menu').removeClass('is-active')
   })

   $("#contactForm").submit(function(event) {
       event.preventDefault();

       $('.loader').show();
       
       const formData = {
           name: $("#fname").val(),
           email: $("#email").val(),
           message: $("#subject").val(),
       };
   
       $.ajax({
           type: "POST",
           url: "mailer.php",
           data: formData,
       }).done(function(data) {

            setTimeout(function() { 
                $('.loader').addClass('is-success');
                $('.loader__content').html('Your message has been sent!')
            }, 2000);
                     
            setTimeout(function() { 
            $('.loader').hide();
            }, 5000);

            $('#fname').val('');
            $("#email").val('');
            $("#subject").val('');           

       }).fail(function(data) {

            setTimeout(function() { 
                $('.loader').addClass('has-error');
                $('.loader__content').html('Something went wrong. Please try again later!')
            }, 2000);

            setTimeout(function() { 
                $('.loader').hide();
            }, 5000);

            $('#fname').val('');
            $("#email").val('');
            $("#subject").val('');  
           
       });
     });

     

    $('.form__input-name').on('input', function() {
       validateNameFild($(this).val());
    })

    function validateNameFild (valName) {
       let characters = /^[a-zA-Z]+$/;
       console.log($('.form__input-name').val().length)
       if(!characters.test(valName)) {
           $('.form__error-name').css('visibility', 'visible')
           $('.form__input-name').addClass('has-error')

       }else {
           $('.form__error-name').css('visibility', 'hidden')
           $('.form__input-name').removeClass('has-error')
       }

       if($('.form__input-name').val().length == 0) {
           $('.form__error-name').css('visibility', 'hidden')
           $('.form__input-name').removeClass('has-error')
       }
     }

     $('.form__input-email').on('keyup', function() {
       validateEmailFild($(this).val())
     })
    
     function validateEmailFild (valEmail) {
         let charactersEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
         if(!charactersEmail.test(valEmail)) {
           $('.form__error-email').css('visibility', 'visible')
           $('.form__input-email').addClass('has-error')
       }else {
           $('.form__error-email').css('visibility', 'hidden')
           $('.form__input-email').removeClass('has-error')
       }

       if($('.form__input-email').val().length == 0) {
           $('.form__error-email').css('visibility', 'hidden')
           $('.form__input-email').removeClass('has-error')
       }
     } 


     
});





















