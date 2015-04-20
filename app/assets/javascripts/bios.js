$(document).ready(function () {
  $('.bio').hide();
  $('#nile').show();

  $('.profile-image').on('click', function () {
    var name = $(this).data('name');
    $(this).addClass('selected').siblings('.profile-image').removeClass('selected');
    $('.bio').hide();
    $('#' + name).show();
  })


});