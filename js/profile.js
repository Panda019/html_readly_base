$(function(){

    /**
     * Дропдаун для профайла в хедере
     */
    $('.header-profile--toggler').on('click', function(){	
		var parent = $('.header-notifications--toggler').parents('.header--notifications');
		if (parent.hasClass('_opened')) {
			 parent.removeClass('_opened');
		}
		
		var $toggler = $(this),
		$parent = $toggler.parents('.header--profile'),
		$dropdown = $('.header-profile--dropdown', $parent);
	
		if (!$parent.hasClass('_opened')) {
			$parent.addClass('_opened');
		}
        else {
            $parent.removeClass('_opened');
        }
        return false;
    });

    $(document).on('click.profileoff', function(e){

        var $obj = $(e.target);
        var is_clickOnselect = $obj.parents('.header-profile--dropdown').size();

        if (!is_clickOnselect) {
            $('.header--profile').removeClass('_opened');
        }
    });


    /**
     * Дропдаун для информера в хедере
     */
    $('.header-notifications--toggler').on('click', function(){
		var parent = $('.header-profile--toggler').parents('.header--profile');
		if (parent.hasClass('_opened')) {
			 parent.removeClass('_opened');
		}
		
       	var $toggler = $(this),
            $parent = $toggler.parents('.header--notifications'),
            $dropdown = $('.header-notifications--dropdown', $parent);
		

        if (!$parent.hasClass('_opened')) {
            $parent.addClass('_opened');
            $toggler.addClass('toggler-active');
        }
        else {
            $parent.removeClass('_opened');
            $toggler.removeClass('toggler-active');
			$toggler.addClass('toggler-default');
			
		}	
        return false;
    });

    $(document).on('click.profileoff', function(e){

        var $obj = $(e.target);
        var is_clickOnselect = $obj.parents('.header-notifications--dropdown').size();
        if (!is_clickOnselect) {
            $('.header--notifications').removeClass('_opened');
        }

    });

    $('.my-library--shelf').each(function(index, element){
        var $shelf = $(element),
            $showMore = $('.my-library--shelf-show-more', $shelf),
            $list = $('.profile-book-list', $shelf);

        $list.data('fullHeight', $list.height());
        $list.data('hidden', true);
        $list.css({height: '302px'});

        $('.book-list--item', $list).each(function(item_indx, item_elemnt){
            if (item_indx >= 4) $(item_elemnt).addClass('_cut').hide();
        });

        $showMore.on('click', function(){
            if ($list.data('hidden') == true) {
                $('.book-list--item._cut', $list).show();

                $list.css({overflow: 'hidden'})
                    .animate({height: $list.data('fullHeight') + 'px'}, 400, function(){
                        $list.css({overflow: 'visible'});
                        $list.removeAttr('style');
                        $list.data('hidden', false);
                    });
                $showMore.addClass('_hide');
            }
            else {
                $list.css({overflow: 'hidden'})
                    .animate({height: '302px'}, 300, function(){
                    $('.book-list--item._cut', $list).hide();
                    $list.css({overflow: 'visible'});
                    $list.data('hidden', true);
                });
                $showMore.removeClass('_hide');
            }

            return false;
        });
    });

});