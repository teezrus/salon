$('.slider').slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   dots: true,
});

$('.menu-btn,.menu__item-link').on('click', function () {
   $('.menu__list').toggleClass('menu__list--active');
   $('.menu-btn').toggleClass('active');
});

function toggle_visibility(id) {
   let $e = $("#" + id);

   if ($e.is(':visible')) {

      $e.slideUp("fast");

   } else {

      $('.alist').not($e).slideUp("fast");
      $e.slideDown("fast");

   }
}


$(".menu a , .footer a").on("click", function (event) {
   //отменяем стандартную обработку нажатия по ссылке
   event.preventDefault();

   //забираем идентификатор бока с атрибута href
   var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

   //анимируем переход на расстояние - top за 1500 мс
   $('body,html').animate({
      scrollTop: top
   }, 1500);
});

var mixer = mixitup(".services__items", {
   load: {
      filter: '.category-a'
   }
});
AOS.init();