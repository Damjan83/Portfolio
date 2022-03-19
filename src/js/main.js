 $(document).ready(() => {
     $('#switchCheckbox').on('change', () => {
         $('body').toggleClass('dark');
     })

     $('.main-nav__burger').on('click', () => {
        $('.main-nav__menu').toggleClass('is-active');
        $('.main-nav__burger').toggleClass('is-active');
        $('.main-nav__menu-item').toggleClass('is-active');
     })

     if($(window).width() < 768) {
        $('.main-nav__menu-link').on('click', () => {
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

    $("#contactForm").submit(function(event) {
        event.preventDefault();

        // Pokrenes loader
        
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
            console.log('hoce')
            console.log(data);
            // Pokrenes loader
        }).fail(function(data) {
            console.log('nece')
            // Pokrenes loader
        });
      });
 });




 
    // Validirati polja za formu
/*------Form email validation------*/
const form = document.querySelector('form');
const btnGetInTouch = form.querySelector('[type="submit"]');
const errorMsg = 'Please provide a valid email adrress';
const error = document.createElement('p');
error.classList.add('error-text');
error.textContent = errorMsg;

function checkEmail (e) {
    e.preventDefault();
    const email = e.target.querySelector('[type="submit"]').value;
    const errorImg = document.createElement('img');
    errorImg.classList.add('error-img');
    errorImg.src = './dist/assets/images/error_icon.png';
    form.appendChild(errorImg)
    
    if(!validateEmail(email)) {
        form.classList.add('error');
        form.insertBefore(error, btnGetInTouch);
    }else {
        form.classList.remove('error');
        form.removeChild(error);
    }
}

function validateEmail(email) {
    const characters = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return characters.test(String(email).toLowerCase());
}

form.addEventListener('submit', checkEmail);

    
   // Staviti u xampp/htdoc folder i promeniti index.html u index.php_check_syntax
// https://meetanshi.com/blog/send-mail-from-localhost-xampp-using-gmail/