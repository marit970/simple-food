/* eslint-disable no-undef */
$('.menu__link').on('click', function (event) {
  event.preventDefault();

  $('.menu__link').removeClass('menu__link--active');
  $(this).addClass('menu__link--active');
});

$(window).on('load scroll', function (e) {
  if ($(window).scrollTop() > 0) {
    $('.header__wrapper').addClass('header--active');
  } else {
    // if going back to init position
    $('.header__wrapper').removeClass('header--active');
  }
});

$('.testimonials__content').slick({
  dots: true,
  arrows: true,
  appendDots: $('.testimonials__dots'),
  appendArrows: $('.testimonials__nav'),
  infinite: false,
});

// eslint-disable-next-line no-undef
mixitup('.popular-categories__list');
