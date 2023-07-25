$(document).ready(function () {

    $('.icon_top').hide()
    
    // loder js
        $('main').hide()
        setTimeout(function () {
            $('.loder').fadeOut(750);
            $('main').show()
        },750)

   


    $('.icon_top').click(function () {
        // $(window).scrollTop(0)
        $('html, body').animate({scrollTop: 0}, 1000)
    })


    $("#banner").owlCarousel({
        items: 1,
        margin: 20,
        loop: true,
        center: true,
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 2000,
        // merge:true,
        dotsEach: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            700: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: false
            }
        }
    });

    $('.nav-button').on('click', function (e) {

        e.preventDefault();

        $('.mobile-menu-holder, .menu-mask').addClass('is-active');
        $('body').addClass('has-active-menu');

    });

    $('.exit-mobile, .menu-mask').on('click', function (e) {

        e.preventDefault();

        $('.mobile-menu-holder, .menu-mask').removeClass('is-active');
        $('body').removeClass('has-active-menu');

    });

    $('.menu-mobile > li.menu-item-has-children > a').on('click', function (e) {

        e.preventDefault();
        e.stopPropagation();

        if ($(this).parent().hasClass('menu-open'))

            $(this).parent().removeClass('menu-open');

        else {

            $(this).parent().addClass('menu-open');

        }

    });



    $(".menu-nav li").on('mouseenter mouseleave', function (e) {
        if ($('ul', this).length) {
            var elm = $('.sub-menu', this);
            var off = elm.offset();
            var l = off.left;
            var w = elm.width();
            var docW = $(window).width();

            var isEntirelyVisible = (l + w <= docW);

            if (!isEntirelyVisible) {
                $(this).addClass('edge');
            } else {
                $(this).removeClass('edge');
            }
        }
    });


    $('#testimonial-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut'
    });

    

    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function (event) {
        new WOW().init();
    })






    $('.home-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        dots: false,
        nav: false,
        navText: '',
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },

            1024: {
                items: 4
            }
        }
    });



    //  gallery isotope
    $("a.lightbox").fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        'overlayShow': false,
        'titlePosition': 'inside',
        'titleShow': true,
    });


    new WOW().init();

});

$(window).on('scroll', function () {
    if ($(document).scrollTop() > 10) {
        $('.headerHolder, .headerHolder5').addClass('nav-fixed-top');
    } else {
        $('.headerHolder, .headerHolder5').removeClass('nav-fixed-top');
    }

});