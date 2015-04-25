$(document).ready(function () {
  $('.bio').hide();
  $('#nile').show();

  var clicked;

  $('.profile-image').on('click', function () {
    clicked = true
  });

  $('.profile-image').on('click mouseenter', function () {
    var name = $(this).data('name');
    $(this).addClass('selected').siblings('.profile-image').removeClass('selected');
    $('.bio').hide();
    $('#' + name).show();
  }).on('mouseleave', function () {
    if (!clicked) {
      var name = $(this).data('name');
      $('#' + name).hide();
      $('#nile').show();
    }
  })
});