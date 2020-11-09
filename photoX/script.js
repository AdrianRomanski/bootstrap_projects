// navigation button
$(document).ready(function() {
   $('.nav-button').click(function() {
       $('.nav-button').toggleClass('change');
   });


//navigation
$(window).scroll(function () {
    let position = $(this).scrollTop();
    if(position >= 200) {
        $('.nav-menu').addClass('custom-navbar');
    } else {
        $('.nav-menu').removeClass('custom-navbar');
    }
});


//mission section

$(window).scroll(function () {
    let position = $(this).scrollTop();
    if(position >= 750) {
        $('.camera-img').addClass('fromLeft');
        $('.mission-text').addClass('fromRight');
    } else {
        $('.camera-img').removeClass('fromLeft');
        $('.mission-text').removeClass('fromRight');
    }
})

});