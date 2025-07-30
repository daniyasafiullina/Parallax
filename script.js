$(window).on('scroll', function () {
  let scrollTop = $(window).scrollTop();
  $('.layer-eiffel').css('top', -(scrollTop * 0.3) + 'px');
  $('.layer-arc').css('top', -(scrollTop * 0.5) + 'px');
  $('.layer-louvre').css('top', -(scrollTop * 0.7) + 'px');
});
