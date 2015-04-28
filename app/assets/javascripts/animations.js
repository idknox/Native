$(document).ready(function () {
  if (location.pathname == "/") {
    $('.nav-custom').addClass('slide-in');

    setTimeout(function () {
      $('#nav-logo').addClass('appear');
      $('#nav-logo').show();
    }, 2000);
  } else {
    $('#nav-logo').show();
  }


  $('#nav-logo').on('mouseenter', function () {
    $(this).removeClass('unrotate').addClass('rotate')
    setTimeout(function () {
      $('#nav-logo').addClass('rotated')
    }, 500)
  }).on('mouseleave', function () {
    $(this).removeClass('rotate').addClass('unrotate');
    setTimeout(function () {
      $('#nav-logo').removeClass('rotated')
    }, 500)
  });

  $('.social-icon').on('mouseenter', function () {
    var icon = $(this);
    icon.removeClass('shrink').addClass('grow');
    setTimeout(function () {
      icon.addClass('grown')
    }, 1000)
  }).on('mouseleave', function () {
    $(this).removeClass('grow').addClass('shrink').removeClass('grown');
  });
});