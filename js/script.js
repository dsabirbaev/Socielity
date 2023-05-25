
// main slides

$('.trusted-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,  // бесконечный цикл
    slidesToShow: 6,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 800,
    
});

$('.customer__cards').slick({
    dots: false,
    arrows: true,
    infinite: true,  // бесконечный цикл
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 800,
    
});

$('.award-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,  // бесконечный цикл
    slidesToShow: 7,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 800,
    
});