$(function(){

    var $asideNav = $('.aside-active-nav'),
        $bookCommentsSection = $('.book-discussion-section');

    //Инициализация слайдера для "интересных" книг
    $('.interesting-books-slider').flexslider({
        selector: ".slides > .book-short-item",
        animation: "slide",
        animationLoop: false,
        itemWidth: 146,
        slideshow:false,
        move: 1
    });

    /**
     * Обработка скрытия/развертывания блока "поделится с друзьями"
     */
    $('.book--share').each(function(index,element){
        var $bookShare = $(element),
            $toggler = $('.book-share--toggle', $bookShare),
            $counters = $('.book-share--counters', $bookShare);

        $toggler.on('click', function(){
            $bookShare.toggleClass('_opened');
            return false;
        });
    });

    /**
     * Плагин подсказок
     * http://iamceege.github.io/tooltipster/
     */
    $('.js-btn-wasread').tooltipster({
        position: 'bottom',
        interactive: true,
        contentAsHTML:true,
        maxWidth:180,
        offsetY:-6
    });

    $('.custom-select').customSelect({customClass:'customSelect-small'});

    /**
     * Окно с периодом прочтения
     */
    $('#btnReadNow, #btnAlreadyRed, #btnWillRead').on('click', function(e){

        $('.read-period-overlay._opened').removeClass('_opened');

        var $btn = $(this);
        var $overlay = $('.read-period-overlay--hidden .read-period-overlay').clone();

        $overlay.addClass('_opened').css({left: $btn.position().left + 'px', top: $btn.position().top + 'px'});
        $overlay.appendTo('.book-article .bh--buttons');

        $('.read-period--form-link-more', $overlay).on('click', function(){
            $('.read-period--form', $overlay).toggleClass('_visible');

            return false;
        });

        return false;
    });

    $(document).on('click.readperiodoff', function(e){

        var $obj = $(e.target);
        var is_clickOnWin = $obj.parents('.read-period-overlay').size();

        if (!is_clickOnWin && !$obj.hasClass('read-period-overlay')) {
            $('.read-period-overlay').removeClass('_opened');
        }

    });

    /**
     * Вкладки для форм оставления комментария/рецензии
     */
    initBookpostTabs(0);

    /**
     * Фиксация меню
     */
    $(window).on('scroll', onScroll);

    function onScroll(e){

        if ($(window).scrollTop() > ($bookCommentsSection.offset().top - 90)) {
            $asideNav.addClass('fixed');
        }
        else {
            $asideNav.removeClass('fixed');
        }

        //console.log('offsetTop: ' + );
    }

    onScroll();



});

function initBookpostTabs(defaultActive){

    var $bookpostTabsContainer = $('.bookpost-tabs--container'),
        $bookpostTabsMenu = $('.bookpost-tabs--tabs'),
        $postContainer = $('.rtl--start-discussion.bookpost');
    var tabIdClasses = ['bookpost-review', 'bookpost-comment', 'bookpost-quote'];

    $('.bookpost-tabs--tab-content').hide().first().show();

    $('.bookpost-tabs--tab-item', $bookpostTabsMenu).on('click', function(){
        var $element = $(this),
            tabId = $('a', $element).attr('href'),
            tabIndex = $element.index();

        $('.bookpost-tabs--tab-item.active', $bookpostTabsMenu).removeClass('active');
        $element.addClass('active');

        $('.bookpost-tabs--tab-content', $bookpostTabsContainer).hide();
        $(tabId).show();

        $postContainer
            .removeClass('bookpost-review bookpost-comment bookpost-quote')
            .addClass(tabIdClasses[tabIndex]);

        return false;
    });

}