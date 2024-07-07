/* eslint-disable no-undef */
$('.menu__link').on('click', function (event) {
  event.preventDefault();

  $('.menu__link').removeClass('menu__link--active');
  $(this).addClass('menu__link--active');
});

$(window).on('load scroll', function (e) {
  if ($(window).scrollTop() > 0) {
    $('.header').addClass('header--active');
  } else {
    // if going back to init position
    $('.header').removeClass('header--active');
  }
});

$('.testimonials__content').slick({
  dots: true,
  arrows: true,
  appendDots: $('.testimonials__dots'),
  appendArrows: $('.testimonials__nav'),
});

// eslint-disable-next-line no-undef
mixitup('.popular-categories__nav-list');
