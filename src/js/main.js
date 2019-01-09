$('.hamburger--list .list--item').mouseover(function(i){
  $(this).eq(i).children('.item--img').toggleClass('hidden')
  console.log(  $(this).eq(i).children('.item--img').toggleClass('hidden')
  )
})