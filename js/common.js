var swiper = new Swiper('.swiper-container');




$('.hamburger').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('.hamburger_menu').slideToggle();
});

// $('.footer__dropdown-menu-row').find('a').click(function () {
//     $(this).toggleClass('footer__angle-up');
// });