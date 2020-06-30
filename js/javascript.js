$('.advice-btn').hover(
   function () {
      $('.advice__content').addClass('showme');
   }, function () {
      $('.advice__content').removeClass('showme');
   }
);

$(document).ready(function () {
   $('.parallax__list>li').addClass('layer');
   $('.parallax__list').parallax();
   $('.wrapper').addClass('active');
});

$('.maps__link').click(function () {
   $('.popup-map').toggleClass('showme');
   
})


