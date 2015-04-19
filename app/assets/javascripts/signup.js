$(document).ready(function () {

  if (localStorage.getItem('signedUp') === 'true') {
//    $('.signup').hide();
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
    var email = $('.signup-email').val();

    $.post('/signup', {email: email}, handleResponse)
  });


  function animateSignup() {

    $('.stuck').css({
      position: 'absolute',
      top: $(window).scrollTop() + $(window).height() - $('.stuck').height(),
    });

    $('.stuck').animate({
      left: -335,
      top: 3473
    }, 2000, function () {
      $('.stuck').hide();
      $('.unstuck').find('.signup-email, .signup-submit').show();

      $('.unstuck').find('.text').animate({
        opacity: 100
      }, 2000);
    });

    $('.stuck').find('.signup-email').animate({
      width: 350
    }, 2000);

    $('.stuck').find('.signup-submit').animate({
      left: 53
    }, 2000);

    $('.stuck').find('#signup-close, .info').animate({
      opacity: 0
    }, 2000);
  }

  $(window).on('scroll', function () {
    var trigger = $('.footer').offset().top + 200;
    var bottom = $(window).scrollTop() + $(window).height();

    if (bottom > trigger) {
      animateSignup();
      $(window).off('scroll');
    }
  })
});