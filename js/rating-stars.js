

    /*
     *  jQuery Boilerplate - v3.3.1
     *  A jump-start for jQuery plugins development.
     *  http://jqueryboilerplate.com
     *
     *  Made by Zeno Rocha
     *  Under MIT License
     */

;(function ( $, window, document, undefined ) {


    var pluginName = "ratingStar",
        defaults = {
            starsNum: 10,
        };

    // The actual plugin constructor
    function Plugin ( element, options ) {
        this.element = element;

        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;

        this.$CONTAINER = $(this.element);
        this.$INPUT = $('.book-rating--stars-input', this.$CONTAINER);
        this.$FRONT = $('.book-rating--stars-front', this.$CONTAINER);
        this.$BACK = $('.book-rating--stars-back', this.$CONTAINER);
        this.$LABELS = $('.book-rating--stars-num', this.$CONTAINER);

        this.setValue(this.$INPUT.val());

        this.init();
    }

    Plugin.prototype = {
        init: function () {

            var _this = this;

            var lastStar = false;
            var allStars = false;

            for (var i = 0; i<this.settings.starsNum; i++) {
                var i_item = '<i class="star_i"></i>',
                    value = (i+1);
                if (i == 0) {
                    lastStar = $(i_item);
                    allStars = lastStar;
                }
                else {
                    lastStar = $(i_item).appendTo(lastStar);
                }

                var label = $('<label data-value="'+value+'"></label>');
                    label.on('click', $.proxy( _this.onClick, _this ));
                lastStar.append(label);

                _this.$LABELS.append('<i>'+value+'</i>');
            }

            allStars.appendTo(_this.$BACK);

        },

        onClick: function (e) {

            var _this = this;

            var value = $(e.target).data('value');

            _this.setValue(value);

            console.log('Value: ' +  _this.value);
        },

        setValue: function(value){
            var _this = this;

            this.value = value;

            _this.$INPUT.val(this.value);
            _this.$FRONT.css({width: ((100/_this.settings.starsNum) * _this.value) + '%'});
        }
    };


    $.fn[ pluginName ] = function ( options ) {
        return this.each(function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            }
        });
    };

})( jQuery, window, document );