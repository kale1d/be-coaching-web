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
});

$(document).ready(function(){

  // hide our element on page load
  $('#info--section').css('opacity', 0);
  $('#coaching-title').css('opacity', 0);
 
  $('#info--section').waypoint(function() {
      $('#info--section').addClass('fadeInUp');
  }, { offset: '70%' });

 
  $('#coaching-title').waypoint(function() {
      $('#coaching-title').addClass('fadeInUp');
  }, { offset: '70%' });

  $('#left-item').css('opacity', 0);
 
  $('#left-item').waypoint(function() {
      $('#left-item').addClass('fadeInLeft');
  }, { offset: '70%' });

  $('#center-item').css('opacity', 0);
 
  $('#center-item').waypoint(function() {
      $('#center-item').addClass('fadeInUp');
  }, { offset: '70%' });

  $('#right-item').css('opacity', 0);
 
  $('#right-item').waypoint(function() {
      $('#right-item').addClass('fadeInRight');
  }, { offset: '70%' });


  $('#note-section').css('opacity', 0);
 
  $('#note-section').waypoint(function() {
      $('#note-section').addClass('fadeInUp');
  }, { offset: '70%' });

  $('#img-section').css('opacity', 0);
 
  $('#img-section').waypoint(function() {
      $('#img-section').addClass('fadeIn');
  }, { offset: '70%' });

});
