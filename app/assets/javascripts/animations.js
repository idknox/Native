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
    var icon = $(this);
    icon.removeClass('unrotate').addClass('rotate')
    setTimeout(function () {
      icon.addClass('rotated')
    }, 500)
  }).on('mouseleave', function () {
    var icon = $(this);
    icon.removeClass('rotate').addClass('unrotate');
    setTimeout(function () {
      icon.removeClass('rotated')
    }, 500)
  });

  $('.social-icon').on('mouseenter', function () {
    var icon = $(this);
    icon.removeClass('shrink').addClass('grow');
    icon.addClass('grown')
  }).on('mouseleave', function () {
    $(this).removeClass('grow grown').addClass('shrink');
  });
});