$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
    }
        

    );
  });

  const owl = $('.owl-carousel');
owl.owlCarousel(
    {
        items:3,
        loop: true,
        responsive: {
            1000: {
                items: 3,
            },
           }  
         }

);



$('.collection__arrow-btn').click(function() {
    owl.trigger('next.owl.carousel');
})