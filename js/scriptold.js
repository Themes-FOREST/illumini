/* custom javascript here */

$(document).ready(function() {

    // hide #back-top first
    $("#scrollbkToTop").hide();
    $("body").append("<p id=\"scrollbkToTop\" style=\"display: none;\"><a href=\"#top\"><span> <i class=\"fa fa-arrow-circle-o-up\"></i></span></a></p>");

    // fade in #back-top
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 150) {
                $('#scrollbkToTop').fadeIn();

            } else {
                $('#scrollbkToTop').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#scrollbkToTop a').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    });

    /*  =======smoothscroll===========*/

    $(function() {
        
    });

    // banner

    $('.banner').owlCarousel({
        animateOut: 'slideOutUp',
        // animateIn: 'flipInX',
        items: 1,
        loop: true,
        autoplay: true,

        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: true,
        navText: [
            "<span class='fa fa-chevron-left'></span>",
            "<span class='fa fa-chevron-right'></span>"
        ],

        dots: true,
        paginationNumbers: true

    });

    // ticker news

    $('.news-ticker').owlCarousel({
        //   animateOut: 'slideOutUp',
        // animateIn: 'flipInX',
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        pagination: false,
        dots: false,
        paginationNumbers: true


    });
    // Course offer slide wrap

    $('.offer-slide-wrap').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: false,
        responsive: {

            0: {
                items: 1,
                nav: false,
                dots: true
            },
            600: {
                items: 2,
                nav: false,
                dots: true
            },
            1000: {
                items: 3,
                nav: false,
                loop: false,
                pagination: false,
                dots: true,

            }
        }
    })

    // Team single

    $('.team-slide-wrap').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: false,

        responsive: {

            0: {
                items: 1,
                nav: false,
                dots: true
            },
            600: {
                items: 3,
                nav: false,
                dots: true
            },
            1000: {
                items: 4,
                nav: false,
                loop: false,

                dots: true,

            }
        }
    })

    // Client or alumini testimonial 

    $('.testi-slide-wrap').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        pagination: false,
        paginationNumbers: true

    });

    $('.indvidual-association').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: false,
        responsive: {

            0: {
                items: 2,
                nav: false,
                dots: true
            },
            600: {
                items: 4,
                nav: false,
                dots: true
            },
            1000: {
                items: 5,
                nav: false,
                loop: false,

                dots: true,

            }
        }
    })


    // counter up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // header sticky function 

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $(".header-menu-logo-info").addClass("fixed-header");
        } else {
            $(".header-menu-logo-info").removeClass("fixed-header");
        };

        $(".header-menu-logo-info").css({ transition: 'all 0.6s ease-in-out 0s', top: '0' });
    });

    // switcher   

    $('.switcherWrap h4 a').click(function(e) {
        e.preventDefault();

        if ($('.switcherWrap').hasClass("active")) {
            $('.switcherWrap').animate({
                left: "0px"
            }, 300).removeClass("active");

        } else {
            $('.switcherWrap').animate({
                left: "-270px"
            }, 300).addClass("active");
        }

    });

    // theme change js

    var panel = jQuery('.switcherWrap');
    jQuery('span', panel).click(function(e) {
        e.preventDefault();
        var color = jQuery(this).attr("data-color");
        // var data_logo = jQuery(this).attr("data-logo");
        setColor(color);
        jQuery('span', panel).removeClass("theme-active");
        jQuery(this).addClass("theme-active");
    });

    var setColor = function(color) {
        jQuery('#option_color').attr("href", "css/" + color + ".css");

    }


    // progress bar team single

    setTimeout(function() {

        $('.progress .progress-bar').each(function() {
            var me = $(this);
            var perc = me.attr("aria-valuenow");

            var current_perc = 0;

            var progress = setInterval(function() {
                if (current_perc >= perc) {
                    clearInterval(progress);
                } else {
                    current_perc += 1;
                    me.css('width', (current_perc) + '%');
                }

                me.text((current_perc) + '%');

            }, 20);

        });

    }, 1000);

    //  dropdown setting ..
    $(function() {
        var wid = $(window).width();
        if (wid < 768) {
            $(".dropdown").on('click', function() {
                $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
                $(this).toggleClass('open');
            });
        } else {
            $(".dropdown").hover(
                function() {
                    $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
                    $(this).toggleClass('open');
                },
                function() {
                    $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
                    $(this).toggleClass('open');
                });
        }


    });




    // initial loader...

    (function(jQuery) {
        "use strict";

        $(".loader").delay(150).fadeOut();
        $("#preloader").delay(200).fadeOut("slow");

    })(jQuery);

    // viewport checker

    $(function() {

        jQuery('.viewpoint').addClass("hiddens").viewportChecker({
            classToAdd: 'visibles animated slideInUp',
            offset: 100
        });
    });


});
