$(function(){

    var $asideNav = $('.aside-active-nav');

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

    $('.rc-review--text').each(function(index,element){
        var $element = $(element),
            $hiddentText = $('.rc-review--text-hidden', $element),
            elEHeight = $element.outerHeight(),
            elSHeight = 0;

        $hiddentText.hide();
        elSHeight = $element.outerHeight();
        $element.css({height:elSHeight + 'px'});

        $('.expand-link._show', $element).on('click', function(){
            $element.addClass('_shorted _expanded');
            $hiddentText.show();
            $element.css({height:elEHeight + 'px'});

            return false;
        });

        $('.expand-link._hide', $element).on('click', function(){
            //$hiddentText.show();
            $element.removeClass('_expanded');
            $element.css({height:elSHeight + 'px'});

            return false;
        });
    });


});