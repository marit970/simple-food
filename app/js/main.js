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
    $('.header__wrapper').addClass('header__wrapper--active');
  } else {
    // if going back to init position
    $('.header__wrapper').removeClass('header__wrapper--active');
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
$(window).on('load resize', function () {
  if ($(window).width() < 576) {
    $('.restaurants__list:not(.slick-initialized)').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1
    });
  } else {
    $(".restaurants__list.slick-initialized").slick("unslick");
  }
});


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

$('.filter__price-input--from').on('change', function () {
  const from = $(this).val();
  const to = $('.filter__price-input--to').val();
  $('#filter__price-slider').data('ionRangeSlider').update({
    from,
    to,
  });
});

$('.filter__price-input--to').on('change', function () {
  const to = $(this).val();
  const from = $('.filter__price-input--from').val();
  $('#filter__price-slider').data('ionRangeSlider').update({
    from,
    to,
  });
});

$("#filter__price-slider").ionRangeSlider({
  min: 0,
  max: 1200,
  type: 'double',
  onStart: function (data) {
    const to = data.to;
    const from = data.from;
    $('.filter__price-input--from').attr('value', from);
    $('.filter__price-input--to').attr('value', to);
  },
  onChange: function (data) {
    const from = data.from;
    const to = data.to;
    $('.filter__price-input--from').attr('value', from);
    $('.filter__price-input--to').attr('value', to);
  }
});

$('select').styler();


$('.pagination__page').on('click', function (event) {
  event.preventDefault();

  $('.pagination__page').removeClass('pagination__page--active');
  $('.pagination__button--prev').removeClass('pagination__button--inactive').prop("disabled",false);
  $('.pagination__button--next').removeClass('pagination__button--inactive').prop("disabled",false);
  $(this).addClass('pagination__page--active');

  if ($(this).hasClass('pagination__page--first')) {
    $('.pagination__button--prev').addClass('pagination__button--inactive').prop("disabled",true);
  }

  if ($(this).hasClass('pagination__page--last')) {
    $('.pagination__button--next').addClass('pagination__button--inactive').prop("disabled",true);
  }
});

  $('.pagination__button--prev').on('click', function () {
    $('.pagination__button--next').removeClass('pagination__button--inactive').prop("disabled",false);

    const index = $('.pagination__page--active').index('.pagination__page');
    console.log('Current index:', index);
    
    // Check if there is a previous element
    if (index > 0) {
      $('.pagination__page').removeClass('pagination__page--active');
      $('.pagination__page').eq(index - 1).addClass('pagination__page--active');
    }
  });
  
  $('.pagination__button--next').on('click', function () {
    $('.pagination__button--prev').removeClass('pagination__button--inactive').prop("disabled",false);
    const index = $('.pagination__page--active').index('.pagination__page');
    console.log('Current index:', index);
    
    // Check if there is a previous element
    if (index < $('.pagination__page').length-1) {
      $('.pagination__page').removeClass('pagination__page--active');
      $('.pagination__page').eq(index + 1).addClass('pagination__page--active');
    }
  });
// eslint-disable-next-line no-undef
mixitup('.popular-categories__list');
