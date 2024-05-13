(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
  $('#switchCheckbox').on('change', function () {
    $('body').toggleClass('dark');
  });
  $('.main-nav__burger').on('click', function () {
    $('.main-nav__menu').toggleClass('is-active');
    $('.main-nav__burger').toggleClass('is-active');
    $('.main-nav__menu-item').toggleClass('is-active');
  });

  if ($(window).width() < 768) {
    $('.main-nav__menu-link').on('click', function () {
      $('.main-nav__menu').removeClass('is-active');
      $('.main-nav__burger').removeClass('is-active');
      $('.main-nav__menu-item').removeClass('is-active');
    });
  }

  $('.main-nav__menu-link, .back-to-top__text, .arrow-bounce').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });
  $('.main-nav__menu-item').on('click', function () {
    $('.main-nav__menu').removeClass('is-active');
  });
  $("#contactForm").submit(function (event) {
    event.preventDefault();
    $('.loader').show();
    var formData = {
      name: $("#fname").val(),
      email: $("#email").val(),
      message: $("#subject").val()
    };
    $.ajax({
      type: "POST",
      url: "mailer.php",
      data: formData
    }).done(function (data) {
      setTimeout(function () {
        $('.loader').addClass('is-success');
        $('.loader__content').html('Your message has been sent!');
      }, 2000);
      setTimeout(function () {
        $('.loader').hide();
      }, 5000);
      $('#fname').val('');
      $("#email").val('');
      $("#subject").val('');
    }).fail(function (data) {
      setTimeout(function () {
        $('.loader').addClass('has-error');
        $('.loader__content').html('Something went wrong. Please try again later!');
      }, 2000);
      setTimeout(function () {
        $('.loader').hide();
      }, 5000);
      $('#fname').val('');
      $("#email").val('');
      $("#subject").val('');
    });
  });
  $('.form__input-name').on('input', function () {
    validateNameFild($(this).val());
  });

  function validateNameFild(valName) {
    var characters = /^[a-zA-Z]+$/;
    console.log($('.form__input-name').val().length);

    if (!characters.test(valName)) {
      $('.form__error-name').css('visibility', 'visible');
      $('.form__input-name').addClass('has-error');
    } else {
      $('.form__error-name').css('visibility', 'hidden');
      $('.form__input-name').removeClass('has-error');
    }

    if ($('.form__input-name').val().length == 0) {
      $('.form__error-name').css('visibility', 'hidden');
      $('.form__input-name').removeClass('has-error');
    }
  }

  $('.form__input-email').on('keyup', function () {
    validateEmailFild($(this).val());
  });

  function validateEmailFild(valEmail) {
    var charactersEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!charactersEmail.test(valEmail)) {
      $('.form__error-email').css('visibility', 'visible');
      $('.form__input-email').addClass('has-error');
    } else {
      $('.form__error-email').css('visibility', 'hidden');
      $('.form__input-email').removeClass('has-error');
    }

    if ($('.form__input-email').val().length == 0) {
      $('.form__error-email').css('visibility', 'hidden');
      $('.form__input-email').removeClass('has-error');
    }
  }
});

},{}]},{},[1]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJidW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAkKCcjc3dpdGNoQ2hlY2tib3gnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnZGFyaycpO1xuICB9KTtcbiAgJCgnLm1haW4tbmF2X19idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLm1haW4tbmF2X19tZW51JykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICQoJy5tYWluLW5hdl9fYnVyZ2VyJykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICQoJy5tYWluLW5hdl9fbWVudS1pdGVtJykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICB9KTtcblxuICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgICAkKCcubWFpbi1uYXZfX21lbnUtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJy5tYWluLW5hdl9fbWVudScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICQoJy5tYWluLW5hdl9fYnVyZ2VyJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgJCgnLm1haW4tbmF2X19tZW51LWl0ZW0nKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfSk7XG4gIH1cblxuICAkKCcubWFpbi1uYXZfX21lbnUtbGluaywgLmJhY2stdG8tdG9wX190ZXh0LCAuYXJyb3ctYm91bmNlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XG4gICAgICBzY3JvbGxUb3A6ICQodGhpcy5oYXNoKS5vZmZzZXQoKS50b3BcbiAgICB9LCAxMDAwKTtcbiAgfSk7XG4gICQoJy5tYWluLW5hdl9fbWVudS1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICQoJy5tYWluLW5hdl9fbWVudScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgfSk7XG4gICQoXCIjY29udGFjdEZvcm1cIikuc3VibWl0KGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnLmxvYWRlcicpLnNob3coKTtcbiAgICB2YXIgZm9ybURhdGEgPSB7XG4gICAgICBuYW1lOiAkKFwiI2ZuYW1lXCIpLnZhbCgpLFxuICAgICAgZW1haWw6ICQoXCIjZW1haWxcIikudmFsKCksXG4gICAgICBtZXNzYWdlOiAkKFwiI3N1YmplY3RcIikudmFsKClcbiAgICB9O1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgIHVybDogXCJtYWlsZXIucGhwXCIsXG4gICAgICBkYXRhOiBmb3JtRGF0YVxuICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcubG9hZGVyJykuYWRkQ2xhc3MoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgICAgJCgnLmxvYWRlcl9fY29udGVudCcpLmh0bWwoJ1lvdXIgbWVzc2FnZSBoYXMgYmVlbiBzZW50IScpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmxvYWRlcicpLmhpZGUoKTtcbiAgICAgIH0sIDUwMDApO1xuICAgICAgJCgnI2ZuYW1lJykudmFsKCcnKTtcbiAgICAgICQoXCIjZW1haWxcIikudmFsKCcnKTtcbiAgICAgICQoXCIjc3ViamVjdFwiKS52YWwoJycpO1xuICAgIH0pLmZhaWwoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcubG9hZGVyJykuYWRkQ2xhc3MoJ2hhcy1lcnJvcicpO1xuICAgICAgICAkKCcubG9hZGVyX19jb250ZW50JykuaHRtbCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIhJyk7XG4gICAgICB9LCAyMDAwKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcubG9hZGVyJykuaGlkZSgpO1xuICAgICAgfSwgNTAwMCk7XG4gICAgICAkKCcjZm5hbWUnKS52YWwoJycpO1xuICAgICAgJChcIiNlbWFpbFwiKS52YWwoJycpO1xuICAgICAgJChcIiNzdWJqZWN0XCIpLnZhbCgnJyk7XG4gICAgfSk7XG4gIH0pO1xuICAkKCcuZm9ybV9faW5wdXQtbmFtZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICB2YWxpZGF0ZU5hbWVGaWxkKCQodGhpcykudmFsKCkpO1xuICB9KTtcblxuICBmdW5jdGlvbiB2YWxpZGF0ZU5hbWVGaWxkKHZhbE5hbWUpIHtcbiAgICB2YXIgY2hhcmFjdGVycyA9IC9eW2EtekEtWl0rJC87XG4gICAgY29uc29sZS5sb2coJCgnLmZvcm1fX2lucHV0LW5hbWUnKS52YWwoKS5sZW5ndGgpO1xuXG4gICAgaWYgKCFjaGFyYWN0ZXJzLnRlc3QodmFsTmFtZSkpIHtcbiAgICAgICQoJy5mb3JtX19lcnJvci1uYW1lJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICAgICQoJy5mb3JtX19pbnB1dC1uYW1lJykuYWRkQ2xhc3MoJ2hhcy1lcnJvcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcuZm9ybV9fZXJyb3ItbmFtZScpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgICQoJy5mb3JtX19pbnB1dC1uYW1lJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvcicpO1xuICAgIH1cblxuICAgIGlmICgkKCcuZm9ybV9faW5wdXQtbmFtZScpLnZhbCgpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAkKCcuZm9ybV9fZXJyb3ItbmFtZScpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgICQoJy5mb3JtX19pbnB1dC1uYW1lJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvcicpO1xuICAgIH1cbiAgfVxuXG4gICQoJy5mb3JtX19pbnB1dC1lbWFpbCcpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcbiAgICB2YWxpZGF0ZUVtYWlsRmlsZCgkKHRoaXMpLnZhbCgpKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbEZpbGQodmFsRW1haWwpIHtcbiAgICB2YXIgY2hhcmFjdGVyc0VtYWlsID0gL14oW2EtekEtWjAtOV8uKy1dKStcXEAoKFthLXpBLVowLTktXSkrXFwuKSsoW2EtekEtWjAtOV17Miw0fSkrJC87XG5cbiAgICBpZiAoIWNoYXJhY3RlcnNFbWFpbC50ZXN0KHZhbEVtYWlsKSkge1xuICAgICAgJCgnLmZvcm1fX2Vycm9yLWVtYWlsJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICAgICQoJy5mb3JtX19pbnB1dC1lbWFpbCcpLmFkZENsYXNzKCdoYXMtZXJyb3InKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLmZvcm1fX2Vycm9yLWVtYWlsJykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgJCgnLmZvcm1fX2lucHV0LWVtYWlsJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvcicpO1xuICAgIH1cblxuICAgIGlmICgkKCcuZm9ybV9faW5wdXQtZW1haWwnKS52YWwoKS5sZW5ndGggPT0gMCkge1xuICAgICAgJCgnLmZvcm1fX2Vycm9yLWVtYWlsJykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgJCgnLmZvcm1fX2lucHV0LWVtYWlsJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvcicpO1xuICAgIH1cbiAgfVxufSk7XG5cbn0se31dfSx7fSxbMV0pO1xuIl0sImZpbGUiOiJidW5kbGUuanMifQ==
