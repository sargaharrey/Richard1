


$(function() {


    var wind = $(window);
    
    "use strict";

    

  //Navbar scroll -------------------------------------------------

    wind.on('scroll', function () {
        if ($(window).scrollTop() > 70) {
            $('.navbar').addClass('nav-scroll')

            $('.nav-link').css('color', '#000')
        }
        else {
            $('.navbar').removeClass('nav-scroll')
            $('.nav-link').css('color', '')
        }

    })




   


    // Wow aniamtion
    new WOW().init(); 

    // scrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: 0            // offste (in px) for fixed top navigation
    });
       


    wind.on('scroll', function() {
        $(".skill-progress .progres").each(function () {
            var bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
            var bottom_of_window =
                $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                $(this).css({
                    width: myVal,
                    transition: 2 + 's'
                 
                });
            }
           
        });
    });
    





});


// === window When Loading === //

$(window).on("load",function (){


    // Preloader
    $("#loading").fadeOut(4000);


    


});



$(document).ready(function() {

   

    // isotope filter ---------------------------------------------------


    $('.gallery').isotope({
        // options
        itemSelector: '.items'
    });

    var $gallery = $('.gallery-items').isotope({
        // options
    });

    // filter items on button click
    $('.filtering').on('click', 'li', function () {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on('click', 'li', function () {

        $(this).addClass('active').siblings().removeClass('active');

    });

 
  
    //  owl-carousel ----------------------------------------------------------


    // Testimonials owlCarousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        margin: 30,
        autoplay: true,
        dots: true,
        
        smartSpeed: 320,
    
    });


    // gallery popup ---------------------------------------------------------------


    // Example with multiple objects
    $('.item-img').magnificPopup({
        items: [
            {
                src: './img/portfolio1.jpg'
            },
            {
                src: './img/portfolio2.jpg'
                
            },
            {
                src: './img/portfolio3.jpg'
                
            },
            {
                src: './img/portfolio4.jpg'
            },
            {
                src: './img/portfolio5.jpg'
            },
            {
                src: './img/portfolio6.jpg'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is default type
    });




    // contact form validator
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });
    // --------------------------------------------------options


    $('.options-button').on('click',function(){
        $('.options').toggleClass('state')
        $(this).toggleClass('BtnState')


    })


   
  });
