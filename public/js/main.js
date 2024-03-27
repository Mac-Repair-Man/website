(function ($) {
    "use strict";

    var nav = $('nav');
    var navHeight = nav.outerHeight();
    $('.navbar-toggler').on('click', function () {
        if (!$('#mainNav').hasClass('navbar-reduce')) {
            $('#mainNav').addClass('navbar-reduce');
        }
    });

    // Navbar Menu Reduce 
    $(window).trigger('scroll');
    $(window).on('scroll', function () {
        var pixels = 50;
        var top = 1200;
        if ($(window).scrollTop() > pixels) {
            $('.navbar-expand-lg').addClass('navbar-reduce');
            $('.navbar-expand-lg').removeClass('navbar-trans');
        } else {
            $('.navbar-expand-lg').addClass('navbar-trans');
            $('.navbar-expand-lg').removeClass('navbar-reduce');
        }
        if ($(window).scrollTop() > top) {
            $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
        } else {
            $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
        }
    });

    // Cache the back-to-top button
    const backToTopButton = $('.back-to-top');

    // Scroll Event
    $(window).on('scroll', function () {
        const scrolled = $(window).scrollTop();
        backToTopButton.toggleClass('active', scrolled > 300);
    });

    // Click Event
    backToTopButton.on('click', function () {
        $("html, body").animate({ scrollTop: "0" }, 500);
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll').on("click", function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: navHeight
    });
})(jQuery);