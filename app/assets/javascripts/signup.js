$(document).ready(function () {

  if (localStorage.signedUp) {
    $('.signup').hide();
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
      confirmSignup()
    } else {
      var error = [response.error[0], response.error[1][0]].join(' ')
      console.log(error)
      $('.signup-email').addClass('field_with_errors').val('').attr('placeholder', error)
    }
  }

  $('.signup-submit').on('click', function () {
    var email = $('.signup-email').val();

    $.post('/signup', {email: email}, handleResponse)
  })

});