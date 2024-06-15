(function($) {
    'use strict';
    // Mean Menu
    $(".mean-menu").meanmenu({
        meanScreenWidth: "991"
    });
    // Header Sticky, Go To Top JS
    $(window).on("scroll", (function() {
        $(this).scrollTop() > 150 ? $(".navbar-area").addClass("is-sticky") : $(".navbar-area").removeClass("is-sticky");
        var a = $(window).scrollTop();
        a > 300 && $(".go-top").addClass("active"), a < 300 && $(".go-top").removeClass("active")
    }));

    // Partner Slider JS
    $(".partner-slider").owlCarousel({
        loop: !0,
        margin: 30,
        nav: !1,
        dots: !1,
        autoplay: !0,
        smartSpeed: 1e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 2
            },
            414: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            },
            1440: {
                items: 7
            }
        }
    });
    // ecom Slider JS
    $(".ecom-slider").owlCarousel({
        loop: !0,
        margin: 30,
        nav: !1,
        dots: !1,
        autoplay: !0,
        smartSpeed: 1e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 2
            },
            414: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            },
            1440: {
                items: 5
            }
        }
    });
    $(".review-slider").owlCarousel({
        loop: !1,
        margin: 30,
        nav: !1,
        dots: !1,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1,
                autoplay: !0
            },
            414: {
                items: 1,
                autoplay: !0
            },
            576: {
                items: 2,
                autoplay: !0
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });
    // work Slider JS
    // $(".editor-slider").owlCarousel({loop:!0,margin:30,nav:!1,dots:!0,autoplay:!0,smartSpeed:1e3,autoplayHoverPause:!0,navText:["<i class='ri-arrow-left-s-line'></i>","<i class='ri-arrow-right-s-line'></i>"],responsive:{0:{items:1},576:{items:1},992:{items:2},1200:{items:3}}});
    // Case Slider JS
    // 	$(".case-slider").owlCarousel({loop:!0,margin:30,nav:!0,dots:!1,autoplay:!1,smartSpeed:1e3,autoplayHoverPause:!0,center:!0,navText:["<i class='ri-arrow-left-s-line'></i>","<i class='ri-arrow-right-s-line'></i>"],responsive:{0:{items:1},576:{items:1},768:{items:2},992:{items:3},1200:{items:2}}});

    // Testimonials Slider JS
    $(".testimonials-slider").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !0,
        dots: !1,
        autoplay: !0,
        smartSpeed: 1e3,
        autoplayHoverPause: !0,
        navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    // Testimonials Slider JS
    $(".testimonials-slider-landing").owlCarousel({
        loop: !1,
        margin: 0,
        nav: !1,
        dots: !0,
        autoplay: !1,
        smartSpeed: 1e3,
        autoplayHoverPause: !0,
        navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            },
            1440: {
                items: 3
            }
        }
    });
    // faq Slider JS
    $(".faq-slider-landing").owlCarousel({
        loop: !1,
        margin: 0,
        nav: !0,
        dots: !1,
        autoplay: !1,
        smartSpeed: 1e3,
        autoplayHoverPause: !0,
        navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            },
            1440: {
                items: 1
            }
        }
    });
    // work Slider JS
    $(".work-slider").owlCarousel({
        loop: !0,
        margin: 30,
        nav: !1,
        dots: !0,
        autoplay: !0,
        smartSpeed: 1e3,
        autoplayHoverPause: !0,
        navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    // Hero Slider
    // 	$(".hero-slider").owlCarousel({loop:!0,margin:0,nav:!1,mouseDrag:!0,thumbs:!0,thumbsPrerendered:!0,items:1,dots:!1,autoHeight:!0,autoplay:!0,smartSpeed:1500,autoplayHoverPause:!0,navText:["<i class='ri-arrow-left-s-line'></i>","<i class='ri-arrow-right-s-line'></i>"]});

    // Click Event JS
    $(".go-top").on("click", (function() {
        $("html, body").animate({
            scrollTop: "0"
        }, 50)
    }));

    // FAQ Accordion JS
    $(".accordion").find(".accordion-title").on("click", (function() {
        $(this).toggleClass("active"), $(this).next().slideToggle("fast"), $(".accordion-content").not($(this).next()).slideUp("fast"), $(".accordion-title").not($(this)).removeClass("active")
    }));

    // Count Time JS
    // 	function makeTimer(){var a=new Date("november  30, 2021 17:00:00 PDT"),e=(a=Date.parse(a)/1e3,new Date),n=a-(e=Date.parse(e)/1e3),s=Math.floor(n/86400),t=Math.floor((n-86400*s)/3600),o=Math.floor((n-86400*s-3600*t)/60),r=Math.floor(n-86400*s-3600*t-60*o);t<"10"&&(t="0"+t),o<"10"&&(o="0"+o),r<"10"&&(r="0"+r),$("#days").html(s+"<span>Days</span>"),$("#hours").html(t+"<span>Hours</span>"),$("#minutes").html(o+"<span>Minutes</span>"),$("#seconds").html(r+"<span>Seconds</span>")}setInterval((function(){makeTimer()}),300);

    // WOW JS
    if ($(".wow").length) {
        var wow = new WOW({
            mobile: !1
        });
        wow.init()
    }

    // Odometer JS
    $(".odometer").appear((function(t) {
        $(".odometer").each((function() {
            var t = $(this).attr("data-count");
            $(this).html(t)
        }))
    }));

    // Tabs 
    $(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current"), $(".tab ul.tabs li").on("click", (function(t) {
        var i = $(this).closest(".tab"),
            s = $(this).closest("li").index();
        i.find("ul.tabs > li").removeClass("current"), $(this).closest("li").addClass("current"), i.find(".tab_content").find("div.tabs_item").not("div.tabs_item:eq(" + s + ")").slideUp(), i.find(".tab_content").find("div.tabs_item:eq(" + s + ")").slideDown(), t.preventDefault()
    }));

})(jQuery);
