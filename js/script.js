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



(function () {
    var toggle = document.querySelector('.nav-toggle');
    
    toggle.addEventListener('click', function() {
      this.classList.toggle('opened');
    });
  })();
  