wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $("header").addClass("fixed");
    } else {
        $("header").removeClass("fixed");
    }
});


$("nav ul li a#home").click(function() {
    $("nav ul li a").removeClass("active");
    $(this).addClass("active");
});
$("nav ul li a#classes").click(function() {
    $("nav ul li a").removeClass("active");
    $(this).addClass("active");
});
$("nav ul li a#trainers").click(function() {
    $("nav ul li a").removeClass("active");
    $(this).addClass("active");
});
$("nav ul li a#timetable").click(function() {
    $("nav ul li a").removeClass("active");
    $(this).addClass("active");
});
$("nav ul li a#services").click(function() {
    $("nav ul li a").removeClass("active");
    $(this).addClass("active");
});
$("nav ul li a#gallery").click(function() {
    $("nav ul li a").removeClass("active");
    $(this).addClass("active");
});
$("nav ul li a#contact").click(function() {
    $("nav ul li a").removeClass("active");
    $(this).addClass("active");
});

if (screen.width < 767) {
    $("nav ul li a").click(function() {
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
        $("ul").toggle();
        // $("hamburger").toggleClass('toggle');
    });
}


$('.btn a').click(function() {
    $('.fix').fadeIn(500);
});
$('.fix .cls i').click(function() {
    $('.fix').fadeOut(500);
});


// hamburger
$('.hamburger').click(function() {
    $(this).toggleClass('toggle');
    $('header nav ul').toggle();
    $('header nav ul').css('width', '100%');
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