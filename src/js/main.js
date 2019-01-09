AOS.init();
$('.hamburger--list .submenu--wrapper').hide();


$('.hamburger--list .list--item').mouseover(function(){
  const index = $(this).index();
  if ($(this).hasClass('coaching')) {
    console.log('yaaay')
      $('.hamburger--list .submenu--wrapper').show();
  } else {
    $('.hamburger--list .submenu--wrapper').hide();
  }
  $.each($('.item--img'), function (i, value) {
    if (index == i) {
      $(this).removeClass('hidden');
    } 
    else {
      $(this).addClass('hidden');
    }
  });
})
$('.hamburger-menu--wrapper .input').click(function(){
  if($(this).is(':checked')){
    $('.item--img').addClass('hidden');
  }
})