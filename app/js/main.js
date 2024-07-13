/* eslint-disable no-undef */
$('.menu__link').on('click', function (event) {
  event.preventDefault();

  $('.menu__link').removeClass('menu__link--active');
  $(this).addClass('menu__link--active');
});

$('.filter__categories-link').on('click', function (event) {
  event.preventDefault();

  $('.filter__categories-link').removeClass('filter__categories-link--active');
  $(this).addClass('filter__categories-link--active');
});

// mobile Menu
const burgerInactive = document.querySelector('.burger--inactive');
const burgerActive = document.querySelector('.burger--active');
const mobileMenu = document.querySelector('.mobile');
const overlay = document.querySelector('.overlay');

burgerInactive.addEventListener('click', () => {
  mobileMenu.classList.add('mobile--active');
  overlay.classList.add('overlay--active');
  $('body').addClass('lock');
});

burgerActive.addEventListener('click', () => {
  mobileMenu.classList.remove('mobile--active');
  overlay.classList.remove('overlay--active');
  $('body').removeClass('lock');
});

overlay.addEventListener('click', () => {
  mobileMenu.classList.remove('mobile--active');
  overlay.classList.remove('overlay--active');
  $('body').removeClass('lock');
});

/* eslint-disable no-undef */
$('.mobile__link').on('click', function (event) {
  event.preventDefault();

  $(this).removeClass('mebile__link--active');
  mobileMenu.classList.remove('mobile--active');
  overlay.classList.remove('overlay--active');
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

$('.menu__link, .mobile__link, .logo').on('click', function (event) {
  event.preventDefault();

  const id = $(this).attr('href');
  const top = $(id).offset().top;

  $('body, html').animate(
    {
      scrollTop: top,
    },
    1000,
  );
});

$("#filter__price-slider").ionRangeSlider({
  min: 0,
  max: 1200,
  type: 'double',
});

// eslint-disable-next-line no-undef
mixitup('.popular-categories__list');
