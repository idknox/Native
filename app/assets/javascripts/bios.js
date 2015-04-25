$(document).ready(function () {
  $('#nile').show();

  $('.profile-image').on('mouseenter', function () {
    var name = $(this).data('name');
    $(this).addClass('active');
    $(this).siblings().find('.hexagon').removeClass('active');
    $('.bio').hide();
    $('#' + name).show();
  }).on('mouseleave', function () {
    var name = $(this).data('name');
    $('#' + name).hide();
    $('#nile').show();
    $(this).removeClass('active')
  })
});