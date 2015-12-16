(function($){
  $(function(){
    $("#navbar").navbar({
              position         : 'left',   // set left menu position
              scroll           : 'fixed'
          });
  });


$.fn.navbar = function(options){
        $('body').prepend( '<span id="navbar_icon" class="hidden" href="#"></span>');

        var $content = $('body'),
            $sided_menu = $('#navbar'),
            $menu_icon = $('#navbar_icon'),
            $menu_open = false;

        // Establishing settings
        var settings = $.extend({
            position         : 'right',
            scroll           : 'hidden'
        }, options);

        // This will enable the NAVIGATIONALBAR to close upon any click that may occur!
        $sided_menu.on('click', '.nav-icon', function() {
        if (options.position == 'right'){
               navbarRight();
           }
           if (options.position == 'left'){
               navbarLeft();
           }
        })

        // This will set the menu position.
        $sided_menu.addClass('visible');
        $sided_menu.addClass('hidden');

        //Setting up default setting if options isn't availble
        // if((typeof options==='undefined') || (typeof options.position==='undefined') || (!options) || (!options.position)){
        //     options = new Object();
        //     options.position=settings.position;
        // }

        // Icon position
        if (options.position == 'right'){
            $menu_icon.addClass('right').removeClass('hidden');
        }
        if (options.position == 'left'){
            $menu_icon.addClass('left').removeClass('hidden');
        }

        //We're listening for click
        $menu_icon.click(function(event) {
             if (options.position == 'right'){
               navbarRight();
            }
            if (options.position == 'left'){
                navbarLeft();
            }

        });//click

        //Adds and removes classes and adds transition(easeOut is a transition)
        function openLeft(){
            $sided_menu.addClass('right').removeClass('hidden').animate({
                right:"-=300",
            },300,'easeOutExpo');

            $content.animate({
                zIndex:"999",
                right:"-=150"
            },300,'easeOutExpo').css({
                position: 'relative' //this was messing with the body's position
            });
            $menu_icon.animate({
                left:"300",
                backgroundPosition: '-60px',
            },600,'easeOutExpo');
        }
        function closeLeft(){
            $sided_menu.animate({
                right:"+=300",
            },300,'easeOutExpo');

            $content.animate({
                right:"+=150",
            },300,'easeOutExpo');
            $menu_icon.animate({
                left:"10",
                backgroundPosition: '0px',
            },700,'easeOutExpo');
        }
        function navbarLeft(){ // checking if navbar is open or not
            if( $menu_open === false){
                openLeft();
                $menu_open = true;

            } else{
                closeLeft();
                $menu_open = false; //open and closes nav
            }
        }
        //navbarLeft


        // Position the menu onResize
        function positionNav(){
            var $containerWidth = $(window).width();

            if ($menu_open === false) {
                if (options.position == 'right'){
                    $sided_menu.css({
                        left: $containerWidth,
                    });
                }

            }
            else {

                if (options.position == 'left'){
                    $sided_menu.css({
                        right: ($containerWidth) - ('300'),
                    });
                }
            }
        }//positionNav

        $(window).resize(function () {
            positionNav();
        });//resize

    // Scrolling
    $(window).bind('scroll',function(e){
        if(($(window).scrollTop() >=500) && ($menu_open === true)){
            if(!options.scroll){
                // We could't grab options
                // Set options to settings & Run defaults
                options.scroll=settings.scroll;
            }

            if (options.scroll == 'fixed'){
                //doNoting
            }
            if (options.scroll == 'hidden'){

                if (options.position == 'right'){
                     closeRight();
                }
                if (options.position == 'left'){
                    closeLeft();
                }

                $menu_open = false;
            }
        }
    });

};//donezoooh
})(jQuery);
