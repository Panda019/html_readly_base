
var $window = $(window),
    flexslider;


$window.load(function() {

    $('.flexslider').flexslider({
        selector: ".review--slider > .review--item",
        animation: "slide",
        animationLoop: false,
        itemWidth: 313,
        itemMargin: 20,
        slideshow:false,
        move: 1
    });
});


$(document).ready(function() {

    $('.fancybox').fancybox();
    $(".dial").knob({
        angleOffset: 180,
        font: "PT Sans",
        inputColor: "#4c4c4c",
        min: 0,
        max: 10,
        readOnly: true
    });

    $(".dialOverlay").knob({
        thickness: 0.1,
        angleOffset: 180,
        font: "PT Sans",
        inputColor: "#fff",
        fontWeight:'normal',
        min: 0,
        max: 10,
        readOnly: true
    });

    $(".spot-dial").knob({
        angleOffset: 180,
        font: "PT Sans",
        inputColor: "#fff",
        bgColor: 'rgba(0,0,0,0)',
        fontWeight: 'normal',
        inputColor: '#fff',
        width: 52,
        height: 52,
        min: 0,
        max: 10,
        readOnly: true
    });

    if (jQuery().ratingStar) $(".book--rating").ratingStar();

    $(".search-dropdown").mCustomScrollbar({
        scrollInertia:300
    });

    $('.search-form').each(function(index,element){

        var $obj = $(element),
            $searchInput = $('.search-block--text-input input', $obj),
            $searchDropdown = $('.search-dropdown', $obj);

        $searchInput.on('keyup', function(){
            if ($searchInput.val().length >= 2) {
                $searchDropdown.addClass('_visible');
            }
            else {
                $searchDropdown.removeClass('_visible');
            }
        });
    });

    /**
     * Form
     */

    var $formSwitcherA = $('.login-form .switcher a'),
        $form = $('#login-form');

    $formSwitcherA.on('click', function(){
        var $obj = $(this),
            tab = $obj.data('tab');

        $formSwitcherA.removeClass('active');
        $obj.addClass('active');

        $('.form-inputs', $form).removeClass('active');
        $(tab).addClass('active');

        return false;
    });

    $('.rtl--start-discussion').each(function(index, element){
        var $startDescussion = $(element);

        $('.sd--input', $startDescussion).on('focusin', function(){
            $startDescussion.addClass('expanded');
        });

        $(document).on('click.discussionOut', function(e){
            var isOut = !$(e.target).parents('.rtl--start-discussion').size();
            if (isOut) $startDescussion.removeClass('expanded');
        });
    });

});




























