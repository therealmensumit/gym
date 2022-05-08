$(window).load(function(){
    $('.load').addClass('active');
})
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('.top').addClass('affix');
        $("header").addClass("fixed");
    } else {
        $('.top').removeClass('affix');
        $("header").removeClass("fixed");
    }
    innernavscroll();
});

function innernavscroll() {
    if ($(document).scrollTop() > $('.banner-sec').offset().top - 100) {
        $('nav li a').removeClass('active');
        $('#home').addClass('active');
    }
    if ($(document).scrollTop() > $('.video-sec').offset().top - 100) {
        $('nav li a').removeClass('active');
        $('#classes').addClass('active');
    }
    if ($(document).scrollTop() > $('.trainer-sec').offset().top - 100) {
        $('nav li a').removeClass('active');
        $('#trainers').addClass('active');
    }
    if ($(document).scrollTop() > $('.counter-sec').offset().top - 100) {
        $('nav li a').removeClass('active');
        $('#services').addClass('active');
    }
    if ($(document).scrollTop() > $('.gallery').offset().top - 100) {
        $('nav li a').removeClass('active');
        $('#gallery').addClass('active');
    }
    if ($(document).scrollTop() > $('.get_in_touch').offset().top - 100) {
        $('nav li a').removeClass('active');
        $('#contact').addClass('active');
    }
}


/* youtube popup */
$(".fa-play-circle").grtyoutube({
    autoPlay: true
});

$('#home').click(function() {
    $('html, body').animate({
        scrollTop: $('body').offset().top
    }, 1000)
});
$('#classes').click(function() {
    $('html, body').animate({
        scrollTop: $('.video-sec').offset().top - 90
    }, 1000)
});
$('#trainers').click(function() {
    $('html, body').animate({
        scrollTop: $('.trainer-sec').offset().top - 90
    }, 1000)
});
$('#services').click(function() {
    $('html, body').animate({
        scrollTop: $('.counter-sec').offset().top - 90
    }, 1000)
});
$('#gallery').click(function() {
    $('html, body').animate({
        scrollTop: $('.gallery').offset().top - 90
    }, 1000)
});
$('#contact').click(function() {
    $('html, body').animate({
        scrollTop: $('.get_in_touch').offset().top - 90
    }, 1000)
});

$('.top').click(function() {
    $('html, body').animate({
        scrollTop: $('body').offset().top
    }, 2000)
});

$('.btn a').click(function() {
    $('.fix').fadeIn(1000);
});
$('.fix .cls i').click(function() {
    $('.fix').fadeOut(1000);
});


// hamburger
$('.hamburger').click(function() {
    $(this).toggleClass('toggle');
    $('nav ul').toggleClass('togglenav');
});


if (screen.width < 767) {
    $("nav ul li a").click(function() {
        $(".hamburger").toggleClass('toggle');
        $('nav ul').fadeOut();
    });
}


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