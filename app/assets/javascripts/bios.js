$(document).ready(function () {

  $('.profile-image').on('click', function () {
    var name = $(this).data('name');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.bio').hide();
    $('#' + name).show();
  })
});