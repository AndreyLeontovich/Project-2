$(function() {
   
    
    
    
    /* Fixed Header */
    
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

        console.log(scrollPos);
    
    });



    /* Smooth Scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $([document.documentElement,document.body]).animate({
            scrollTop: $(elementOffset).offset().top
        }, 2000);
      
        
    });
});


















