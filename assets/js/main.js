(function ($) {
    "use strict";
    var wind = $(window);

    var nav = $('nav');
    var navHeight = nav.outerHeight();
    $('.navbar-toggler').on('click', function () {
        if (!$('#mainNav').hasClass('navbar-reduce')) {
            $('#mainNav').addClass('navbar-reduce');
        }
    });

    // START PRELOADED
    $(window).on('load', function () {
        $('.preloader').fadeOut();
        $('.preloader').delay(550).fadeOut('slow');
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

    // Back to top button 
    $(function () {
        // Scroll Event
        $(window).on('scroll', function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 300) $('.back-to-top').addClass('active');
            if (scrolled < 300) $('.back-to-top').removeClass('active');
        });
        
        // Click Event
        $('.back-to-top').on('click', function () {
            $("html, body").animate({
                scrollTop: "0"
            }, 500);
        });
    });

    var titles = [
        "Get Your Mac Fixed Fast & Reliable",
        "Quality Mac Repair Solutions",
        "Trusted by Thousands of Satisfied Customers",
        "Fast & Efficient Mac Repairs",
        "Expert Mac Repair Services",
        "Reliable Mac Support for Your Needs",
        "Affordable Mac Repair Solutions",
        "Mac Troubleshooting and Fixes",
        "Quick and Professional Mac Repairs",
        "Mac Service You Can Rely On",
        "Mac Repair Experts at Your Service",
        "Fast Turnaround Mac Repairs",
        "Premium Mac Repair Services",
        "Comprehensive Mac Diagnosis and Fixes",
        "Top-notch Mac Repair Specialists",
        "Efficient Solutions for Mac Issues",
        "Your Trusted Mac Repair Partner",
        "Mac Repair Made Simple and Easy",
        "Mac Performance Optimization Services",
        "Quality Parts for Mac Repairs"
    ];

    // Select a random title from the array
    var randomIndex = Math.floor(Math.random() * titles.length);
    var dynamicH1 = document.getElementById("dynamic-h1");

    // Set the random title
    dynamicH1.innerHTML = titles[randomIndex];

    //  Star Scrolling nav
    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - navHeight + 30)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
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

    //  Star Counter
    $('.counter-number').counterUp({
        delay: 15,
        time: 2000
    });

    // Testimonials owl
    $('.testimonial-slide .owl-carousel').owlCarousel({
        margin: 16,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: false,
        smartSpeed: 800,
        dots: true,
        autoplayHoverPause: true,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    
    // HOME TYPED JS
    if ($('.element').length) {
        $('.element').each(function () {
            $(this).typed({
                strings: [$(this).data('text1'), $(this).data('text2'), $(this).data('text3'), $(this).data('text4')],
                loop: $(this).data('loop') ? $(this).data('loop') : false,
                backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 2000,
                typeSpeed: 15,
            });
        });
    }

})(jQuery);