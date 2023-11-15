// <!-- Initialize Swiper -->

$(function(){

  var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    // centeredSlides: true,
    spaceBetween: 20,
    touchEnabled : (navigator.maxTouchPoints > 0), 
    pagination: {
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  $('.main1_button .t1').click(function(){
    $('.main1_right .b').hide()
    $('.main1_right .a').show()
  })
  $('.main1_button .t2').click(function(){
    $('.main1_right .a').hide()
    $('.main1_right .b').show()
  })

})

$(function(){
  $('.menu > li').mouseenter(function(){
      $('.headerbg').show()
      $('.menu2').show()
  })
  $('.menu2').mouseleave(function(){
      $('.headerbg').hide()
      $('.menu2').hide()
  })
})
