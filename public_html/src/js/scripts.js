jQuery(document).ready(function () {

  // jQuery('.st-best-cnt').each(function(){
  //   var height = jQuery(this).parent().parent().height();
  //   console.log(height);
  //   $(this).css('width', height);
  // });

  // Toogle
  jQuery(".toggle").click(function(e) {
    e.preventDefault();
    jQuery(this).toggleClass("on");
  });

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.shop-button-next',
      prevEl: '.shop-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 0,
      }
    },
  });

});