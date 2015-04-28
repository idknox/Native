$(document).ready(function () {

  if (localStorage.getItem('signedUp') === 'true') {
    $('.stuck').hide();
  }

  $('#signup-close').on('click', function () {
    $('.signup').slideUp();
  });

  function confirmSignup() {
    $('.signup').find('.row').empty().append(
      '<span class="col-sm-6 col-sm-offset-3 signup-confirm">Thanks for signing up!</span>'
    );
    setTimeout(function () {
      $('.signup').slideUp()
    }, 3000);
  }

  function handleResponse(response) {
    if (response.success) {
      confirmSignup();
      localStorage.setItem('signedUp', 'true')
    } else {
      var error = [response.error[0], response.error[1][0]].join(' ');
      $('.signup-email').addClass('field_with_errors').val('').attr('placeholder', error)
    }
  }

  $('.signup-submit').on('click', function () {
    var email = $(this).parents('.signup').find('.signup-email').val();
    $.post('/signup', {email: email}, handleResponse)
  });


  function animateSignup() {
    $('.stuck').animate({
      opacity: 0
    }, 2000, function () {
    });
  }

  $(window).on('scroll', function () {
    var trigger = $('.team').offset().top;

    if ($(window).scrollTop() > trigger && $(window).width() > 378) {
      animateSignup();
      $(window).off('scroll');
    }
  });

  $('#nav-signup').on('click', function () {
    $('html,body').animate({
      scrollTop: $('.footer').offset().top
    }, 500);
  })
});