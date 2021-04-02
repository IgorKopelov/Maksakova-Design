$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 700,
        fade: true,
        zIndex: 1,
        autoplay: true,
        centerMode:true,
        appendArrows:$('.slick-arrow_block'),
        cssEase: 'linear'
      });
  });

