AOS.init();

$('.hamburger--list .list--item').mouseover(function(){
  const index = $(this).index()
  $.each($('.item--img'), function (i, value) {
    if (index == i) {
      $(this).removeClass('hidden')
    } else {
      $(this).addClass('hidden')
    }
  });
})