$(document).ready(function () {
  $('.bio').hide();
  $('#nile').show();

  $('.hexagon').on('click', function () {
    var name = $(this).parents('.profile-image').data('name');
    $('.bio').hide();
    $('#' + name).show();
  })
});