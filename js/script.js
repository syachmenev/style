$('.slider').slick({
  dots: false,
	arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(document).ready(function() {
 
    $('.header__btn').click( function(event){
        event.preventDefault();
        $('.overlay').fadeIn(400, // анимируем показ обложки
            function(){ // далее показываем мод. окно
                $('.modal_form') 
                    .css('display', 'flex')
										
										
                    .animate({opacity: 1, top: '50%'});
        });
    });
 
    // закрытие модального окна
    $('.modal_close, .overlay').click( function(){
        $('.modal_form')
            .animate({opacity: 0, top: '45%'}, 200,  // уменьшаем прозрачность
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // скрываем окно
                    $('.overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    });
 
});