/* eslint-disable no-undef */
$('.menu__link').on('click', function (event) {
  event.preventDefault();

  $('.menu__link').removeClass('menu__link--active');
  $(this).addClass('menu__link--active');
});

// mobile Menu
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  mobileMenu.classList.toggle('mobile--active');
  $('body').toggleClass('lock');
});

/* eslint-disable no-undef */
$('.mobile__link').on('click', function (event) {
  event.preventDefault();

  $(this).removeClass('mebile__link--active');
  mobileMenu.classList.remove('mobile--active');
  $('body').removeClass('lock');
});

// window scroll
$(window).on('load scroll', function () {
  if ($(window).scrollTop() > 0) {
    $('.header__wrapper').addClass('header--active');
  } else {
    // if going back to init position
    $('.header__wrapper').removeClass('header--active');
  }
});

// testimonials slider
$('.testimonials__content').slick({
  dots: true,
  arrows: true,
  appendDots: $('.testimonials__dots'),
  appendArrows: $('.testimonials__nav'),
  infinite: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        dots: false,
        appendArrows: $('.testimonials__content'),
      },
    },
  ],
});

// mobile slider for popular-categories
if (window.matchMedia('(max-width: 576px)').matches) {
  $('.restaurants__list').slick({
    dots: true,
    arrows: false,
  });
}

// eslint-disable-next-line no-undef
mixitup('.popular-categories__list');
