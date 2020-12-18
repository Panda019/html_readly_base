$(function(){

    var $scrollTopBtn = $('.scroll-top-btn');

    $(window).on('scroll', function(){
        if ($(window).scrollTop() >= 400){
            $scrollTopBtn.fadeIn(150);
        }
        else {
            $scrollTopBtn.fadeOut(150);
        }
    });

    $scrollTopBtn.on('click', function(){
        $('body,html').animate({scrollTop:0},400);
        return false;
    })

});