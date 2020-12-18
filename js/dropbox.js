
$(function(){

    $('.select-box').each(function(index, element){
        var $elem = $(element),
            $current = $('.select-box--current', $elem),
            $dropbox = $('.dropdown-box', $elem);

        $current.on('click', function(){
            if (!$elem.hasClass('_opened')) {
                $('.select-box').removeClass('_opened');
                $elem.addClass('_opened');
            }
            else {
                $elem.removeClass('_opened');
            }
        });

        $(document).on('click.dropoff', function(e){

            var $obj = $(e.target);
            var is_clickOnselect = $obj.parents('.select-box').size();

            if (!is_clickOnselect) {
                $('.select-box').removeClass('_opened');
            }

        });

    });

});