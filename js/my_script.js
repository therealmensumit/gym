$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('.top').addClass('affix');
        $("header").addClass("fixed");
    } else {
        $('.top').removeClass('affix');
        $("header").removeClass("fixed");
    }
});

function innernavscroll() {
    if ($(document).scrollTop() > $('.banner-sec').offset().top - 50) {
        $('.nav li a').removeClass('active');
        $('.nav li a#home').addClass('active');
    }
    if ($(document).scrollTop() > $('.video-sec').offset().top - 50) {
        $('.nav li a').removeClass('active');
        $('.nav li a#classes').addClass('active');
    }
    if ($(document).scrollTop() > $('.trainer-sec').offset().top - 50) {
        $('.nav li a').removeClass('active');
        $('.nav li a#trainers').addClass('active');
    }
    if ($(document).scrollTop() > $('.counter-sec').offset().top - 50) {
        $('.nav li a').removeClass('active');
        $('.nav li a#services').addClass('active');
    }
    if ($(document).scrollTop() > $('.gallery').offset().top - 50) {
        $('.nav li a').removeClass('active');
        $('.nav li a#gallery').addClass('active');
    }
    if ($(document).scrollTop() > $('.get_in_touch').offset().top - 50) {
        $('.nav li a').removeClass('active');
        $('.nav li a#contact').addClass('active');
    }
    innernavscroll();
}

/* youtube popup */
$(".fa-play-circle").grtyoutube({
    autoPlay: true
});


// $("nav ul li a#home").click(function() {
//     $("nav ul li a").removeClass("active");
//     $(this).addClass("active");
// });
// $("nav ul li a#classes").click(function() {
//     $("nav ul li a").removeClass("active");
//     $(this).addClass("active");
// });
// $("nav ul li a#trainers").click(function() {
//     $("nav ul li a").removeClass("active");
//     $(this).addClass("active");
// });
// $("nav ul li a#timetable").click(function() {
//     $("nav ul li a").removeClass("active");
//     $(this).addClass("active");
// });
// $("nav ul li a#services").click(function() {
//     $("nav ul li a").removeClass("active");
//     $(this).addClass("active");
// });
// $("nav ul li a#gallery").click(function() {
//     $("nav ul li a").removeClass("active");
//     $(this).addClass("active");
// });
// $("nav ul li a#contact").click(function() {
//     $("nav ul li a").removeClass("active");
//     $(this).addClass("active");
// });

if (screen.width < 767) {
    $("nav ul li a").click(function() {
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
        $("ul").toggle();
        // $("hamburger").toggleClass('toggle');
    });
}


$('.btn a').click(function() {
    $('.fix').fadeIn(1000);
});
$('.fix .cls i').click(function() {
    $('.fix').fadeOut(1000);
});


// hamburger
$('.hamburger').click(function() {
    $(this).toggleClass('toggle');
    $('header nav ul').css('left', '0');
});
$('.hamburger.toggle').click(function() {
    $(this).toggleClass('toggle');
    $('header nav ul').css('left', '-400px');
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    freeMode: false,
    loop: true,
    speed: 1400,
    autoplay: true,
    delay: 4000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".testimonial", {
    slidesPerView: 1,
    freeMode: false,
    loop: true,
    speed: 1000,
    autoplay: true,
    delay: 4000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();