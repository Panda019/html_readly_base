
function initBookHOver(containerClass){

    $(containerClass).each(function(cIndex, cElement){

        var $container = $(cElement);

        $('.book-list--item', $container).each(function(index, element){
            var $book = $(element),
                bookAlign = '_al';

            if (containerClass == '.profile-book-list') {
                bookAlign = (index%4 == 2 || index%4 == 3) ? '_ar' : '_al';
            }
            else if (containerClass == '.book-list') {
                bookAlign = (index%5 == 3 || index%5 == 4) ? '_ar' : '_al';
            }

            addHoverToBook($book, bookAlign);
        });
    });
}

function addHoverToBook($book, bookAlign){
    var $bookHover = $('.book-hover', $book),
        hoverTimeout = false;

    $bookHover.addClass(bookAlign);

    $book.hover(function(){
        hoverTimeout = setTimeout(function(){
            if (!$bookHover.hasClass('_opened')) {
                $bookHover.addClass('_opened');
            }
        },300);
    }, function(){
        if ($bookHover.hasClass('_opened')) {
            $bookHover.removeClass('_opened');
        }
        clearTimeout(hoverTimeout);
    });
}