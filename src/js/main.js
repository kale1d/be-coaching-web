const mobile768 = window.matchMedia("(max-width: 800px)");
const mobile420 = window.matchMedia('(max-width: 420px)');
console.log(mobile420);
$('.hamburger--list .submenu--wrapper').hide();
$('.hamburger--list .list--item').mouseover(function(){
  const index = $(this).index();
  //we need to check for the media query to avoid overridin the hide for lower resolutions
  if ($(this).hasClass('coaching') && mobile768.matches != true) {
      $('.hamburger--list .submenu--wrapper').show();
  } else {
    $('.hamburger--list .submenu--wrapper').hide();
  }
  $.each($('.item--img'), function (i, value) {
    if (index == i && mobile768.matches != true) {
      $(this).removeClass('hidden').addClass('animated fadeIn');
    } 
    else {
      $(this).addClass('hidden').removeClass('animated fadeIn'); //fadeInDownBig
    }
  });
})
$('.hamburger-menu--wrapper .input').click(function(){
  if($(this).is(':checked')){
    $('.item--img').addClass('hidden');
  }
});

$(document).ready(function(){
  
  // home
  $('#info--section').css('opacity', 0);
  $('#values-list').css('opacity', 0);
  $('#coaching-title').css('opacity', 0);
  $('#left-item').css('opacity', 0);
  $('#center-item').css('opacity', 0);
  $('#right-item').css('opacity', 0);
  $('#note-section').css('opacity', 0);
  $('#img-section').css('opacity', 0);
 

  $('#info--section').waypoint(function() {
      $('#info--section').addClass('fadeInUp');
  }, { offset: '100%' });

  $('#values-list').waypoint(function() {
    $('#values-list').addClass('fadeInUp');
}, { offset: '100%' });

  $('#coaching-title').waypoint(function() {
      $('#coaching-title').addClass('fadeInUp');
  }, { offset: '70%' });

  $('#left-item').waypoint(function() {
      $('#left-item').addClass('fadeInLeft');
  }, { offset: '70%' });

  $('#center-item').waypoint(function() {
      $('#center-item').addClass('fadeInUp');
  }, { offset: '70%' });
 
  $('#right-item').waypoint(function() {
      $('#right-item').addClass('fadeInRight');
  }, { offset: '70%' });
 
  $('#note-section').waypoint(function() {
      $('#note-section').addClass('fadeInUp');
  }, { offset: '70%' });
 
  $('#img-section').waypoint(function() {
      $('#img-section').addClass('fadeIn');
  }, { offset: '70%' });

//coaching
// $('#info-text').css('opacity', 0);
 
// $('#info-text').waypoint(function() {
//     $('#info-text').addClass('fadeInUp');
// }, { offset: '70%' });

$('#organizacional').css('opacity', 0);
 
$('#organizacional').waypoint(function() {
    $('#organizacional').addClass('fadeIn');
}, { offset: '70%' });

 
$('#dot').waypoint(function() {
    $('#dot').addClass('fadeIn');
}, { offset: '70%' });

$('#logo').css('opacity', 0);
 
$('#logo').waypoint(function() {
    $('#logo').addClass('fadeInUp');
}, { offset: '40%' });
$('#text-org').css('opacity', 0);
$('#text-org').waypoint(function(){
  $('#text-org').addClass('fadeIn');
}, { offset: '80%' });
 
$('#executive').waypoint(function() {
    $('#executive').addClass('fadeIn');
}, { offset: '70%' });

$('#dot-ex').css('opacity', 0);
$('#dot-ex').waypoint(function() {
    $('#dot-ex').addClass('fadeIn');
}, { offset: '70%' });

$('#logo-ex').css('opacity', 0);
 
$('#logo-ex').waypoint(function() {
    $('#logo-ex').addClass('fadeInUp');
}, { offset: '40%' });

$('#text-ex').css('opacity', 0);
$('#text-ex').waypoint(function(){
  $('#text-ex').addClass('fadeIn');
}, { offset: '80%' });


//equipo
$('#item-1').css('opacity',0);
$('#item-1').waypoint(function(){
  $('#item-1').addClass('fadeInUp');
}, { offset: '80%'});

$('#item-2').css('opacity',0);
$('#item-2').waypoint(function(){
  $('#item-2').addClass('fadeInUp');
}, { offset: '70%'});

$('#item-3').css('opacity',0);
$('#item-3').waypoint(function(){
  $('#item-3').addClass('fadeInUp');
}, { offset: '70%'});

$('#item-4').css('opacity',0);
$('#item-4').waypoint(function(){
  $('#item-4').addClass('fadeInUp');
}, { offset: '70%'});

//workshop

});
if (mobile768.matches === true) {
  $('#item-3').removeClass('delay-2s');
  $('#item-4').removeClass('delay-3s');
  $('#item-4').addClass('delay-1s');
}
if (mobile420.matches === true) {
  $('#item-2').removeClass('delay-1s');
  $('#item-4').removeClass('delay-1s');
}
