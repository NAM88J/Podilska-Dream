$('.planningnav_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    customPaging: '13px',
    autoplaySpeed: 2000,
    prevArrow: '<div class="slider_prew slider_arrow icofont">',
    nextArrow: '<div class="slider_next slider_arrow icofont">'
});
$('.othertype_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    customPaging: '13px',
    autoplaySpeed: 2000,
    prevArrow: '<div class="slider_prew slider_arrow icofont">',
    nextArrow: '<div class="slider_next slider_arrow icofont">'
});
$('.planningslider_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.planningslider_nav',
    prevArrow: '<div class="slider_prew slider_arrow icofont">',
    nextArrow: '<div class="slider_next slider_arrow icofont">'
});
$('.planningslider_nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.planningslider_main',
    dots: false,
    arrows: false,
    focusOnSelect: true
});