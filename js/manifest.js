// Generated by CoffeeScript 1.6.3
jQuery(function() {
  var swiper;
  $('.close').each(function() {
    return $(this).click(function(e) {
      e.preventDefault();
      return $(this).parent().fadeOut();
    });
  });
  $("[data-toggle=tooltip]").tooltip();
  $("[data-datepicker]").each(function() {
    var input;
    input = $(this);
    return input.pickadate({
      selectYears: input.data('select-years') || false,
      selectMonths: input.data('select-months') || false
    });
  });
  swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    mode: 'horizontal',
    loop: true,
    calculateHeight: true,
    grabCursor: true,
    paginationClickable: true,
    speed: 600
  });
  $('.swiper-control.left').on('click', function(e) {
    e.preventDefault();
    return swiper.swipePrev();
  });
  $('.swiper-control.right').on('click', function(e) {
    e.preventDefault();
    return swiper.swipeNext();
  });
  return $('.navbar [data-furatto="search"]').each(function() {
    var current_width;
    current_width = $(this).width();
    $(this).focus(function() {
      return $(this).animate({
        width: current_width + 20
      }, 'slow');
    });
    return $(this).blur(function() {
      return $(this).animate({
        width: current_width
      }, 'slow');
    });
  });
});
