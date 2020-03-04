$(function(){
    // Ibg adaptive img
    function ibg(){

        $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
        $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
        });
        }
        
        ibg();

    // Fixed header

    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrolloffset = $(window).scrollTop();
        CheckScroll(scrolloffset,introH);

    $(window).on("scroll resize", function(){
        scrolloffset = $(this).scrollTop();
        CheckScroll(scrolloffset,introH);
    })

    function CheckScroll(scrolloffset,introH){
        if(scrolloffset > introH){
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }
    }

    // Burger nav

    $("#burger").on("click",function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#header__nav").toggleClass("active");
    })

    // Smooth Scroll

    $("[data-scroll]").on("click" , function(event){
        event.preventDefault();

        let scrollId = $(this).data("scroll");
        let elementOffset = $(scrollId).offset().top;

        $("#burger").removeClass("active");
        $("#header__nav").removeClass("active");

        $("html,body").animate({
            scrollTop: elementOffset - 70
        },700);

    });

    // Slick slider
    $("#intro__slider").slick({
        arrows:true,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        easing:'ease',
        speed:1000,
        autoplay:true,
        infinite:true,
        autoplaySpeed:1500,
        draggable:false
    });

    $("#services-slider").slick({
        arrows:true,
        dots:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
          ]
    });

    $("#feedback-slider").slick({
        arrows:true,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});
