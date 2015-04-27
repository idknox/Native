$(document).ready(function () {
  if (location.pathname == "/") {
    $('.nav-custom').addClass('slide-in');
  }

  $('#nav-logo').on('mouseenter', function () {
    setTimeout(function () {
      $('#nav-logo').addClass('rotated')
    }, 500)
  }).on('mouseleave', function () {
    $(this).addClass('unrotate');
    setTimeout(function () {
      $('#nav-logo').removeClass('rotated')
    }, 500)

  })
});