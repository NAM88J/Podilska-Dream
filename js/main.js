// $('.planningnav_slider').slick({
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     customPaging: '13px',
//     autoplaySpeed: 2000,
//     prevArrow: '<div class="slider_prew slider_arrow icofont">',
//     nextArrow: '<div class="slider_next slider_arrow icofont">'
// });
// $('.othertype_slider').slick({
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     customPaging: '13px',
//     autoplaySpeed: 2000,
//     prevArrow: '<div class="slider_prew slider_arrow icofont">',
//     nextArrow: '<div class="slider_next slider_arrow icofont">'
// });
// $('.planningslider_main').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     fade: true,
//     asNavFor: '.planningslider_nav',
//     prevArrow: '<div class="slider_prew slider_arrow icofont">',
//     nextArrow: '<div class="slider_next slider_arrow icofont">'
// });
// $('.planningslider_nav').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     asNavFor: '.planningslider_main',
//     dots: false,
//     arrows: false,
//     focusOnSelect: true
// });
$(document).on('click', '.modal_link', function(e){
    e.preventDefault();
    let target_id = $(this).data('id'),
        target_window = $('.modal_windows[data-id="' + target_id + '"]'),
        custom_fon = $('.modal_fon');
    console.log(target_id)
    if (!custom_fon.hasClass('active')) {
        custom_fon.addClass('active').fadeIn('200');
        target_window.addClass('active').fadeIn('800');
    }
});
$(document).on('click', '.modal_close, .modal_fon', function(e){
    e.preventDefault();
    let target_window = $('.modal_windows.active'),
        custom_fon = $('.modal_fon');
    if (custom_fon.hasClass('active')) {
        custom_fon.removeClass('active').fadeOut('800');
        target_window.removeClass('active').fadeOut('200');
    }
});