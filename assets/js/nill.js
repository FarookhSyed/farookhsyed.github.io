// repeated variables
var $window = $(window);
var $root = $('html, body');

$(document).ready(function() {

    "use strict";

    pagePilling();
    colorScheme();
    menuToggler();
    sliderOwlCarousel();
    swiperSlider();
    typedJS();
    skills();
    countup();
    portfolioPopup();
    mapInit();
    validateEmail();
    sendEmail();
    $('.owl-item.active .hero-slide').addClass('zoom');


});

$window.on("load", (function() {
    $("#overlayer").delay(200).fadeOut('slow');
    $(".loader").delay(500).fadeOut('slow');
    portfolioIsotop();
}));


/*-------------------------
       Page Pilling
-------------------------*/
function pagePilling() {

    "use strict";

    var ids = [];
    var tooltips = [];
    var colors = [];
    $('.section').each(function() {
        ids.push(this.id);
        tooltips.push($(this).data("navigation-tooltip"));
        colors.push($(this).data("navigation-color"));
    });
    $('#pagepiling').pagepiling({
        sectionsColor: colors,
        anchors: ids,
        menu: '#myMenu',
        direction: 'vertical',
        verticalCentered: true,
        navigation: {
            'position': 'right',
            'tooltips': tooltips
        },
        loopBottom: true,
        loopTop: true,
        scrollingSpeed: 700,
        easing: 'swing',
        css3: true,
        normalScrollElements: '.owl-stage-outer',
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: true,
        //events
        onLeave: function(index, nextIndex, direction) {},
        afterLoad: function(anchorLink, index) {},
        afterRender: function() {},
    });
}

/*-------------------------
        Color Scheme
-------------------------*/
function colorScheme() {

    "use strict";

    $('.color-scheme').click(function() {
        $("body").toggleClass('nill-dark');
        $('.section').toggleClass('bg-dark');
        $(this).children().toggleClass('lni-night lni-sun');
    });
}

/*-------------------------
    MENU TOGGLER
-------------------------*/
function menuToggler() {

    "use strict";

    $(".header-info-area").click(function() {
        $('.overlay-menu').toggleClass("show");
    });
}

/*--------------------------
    HERO BACKGROUND IMAGE
---------------------------*/
var hero01 = $('.hero-01');
var backgrounImage = hero01.data("background-image");
hero01.css('background', 'url(' + backgrounImage + ') no-repeat');


/*-----------------------------
      SLIDER OWL CAROUSEL
------------------------------*/
function sliderOwlCarousel() {
    "use strict";

    $('.hero .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: false,
        autoplay: true,
        touchDrag: true,
        smartSpeed: 5000,
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
    });
    $('#hero-slider').on("translate.owl.carousel", function() {
        setTimeout(function() {
            $('.hero-slide').removeClass("zoom");
        }, 1000)
    });
    $('#hero-slider').on("translated.owl.carousel", function() {
        $('.owl-item.active .hero-slide').addClass("zoom");
    });
}

/*-----------------------------
     HERO SWIPER SLIDER
------------------------------*/
function swiperSlider() {

    "use strict";

    if ($(".swiper-container").length) {
        var swiper = new Swiper('.swiper-container', {
            effect: "slide",
            allowTouchMove: 'false',
            touchRatio: 0,
            threshold: 992,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        var textSwiper = new Swiper('.text-swiper', {
            effect: "fade",
            allowTouchMove: 'false',
            touchRatio: 0,
            threshold: 992,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        $(".hero-item-image").css('background', function() {
            var bg = ('url(' + $(this).data("image-src") + ') no-repeat center');
            return bg;
        });
        var $fullscreen = $(".hero-04, .hero-swiper, .hero-text, .hero-images");
        $fullscreen.css("height", $window.height());
    }
}

/*-------------------------
        TYPED JS
-------------------------*/
function typedJS() {

    "use strict";

    var $element = $(".element");
    if ($element.length) {
        var options = {
            strings: $element.attr('data-elements').split(','),
            typeSpeed: 100,
            backDelay: 3000,
            backSpeed: 50,
            loop: true
        };
        var typed = new Typed(".element", options);
    }
}

