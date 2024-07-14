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


  // Function to update button states
  function updateButtonStates() {
    const currentIndex = $('.pagination__page--active').index('.pagination__page');
    const lastIndex = $('.pagination__page').length - 1;
    
    // Disable prev button if on first page
    if (currentIndex === 0) {
      $('.pagination__button--prev').prop('disabled', true);
    } else {
      $('.pagination__button--prev').prop('disabled', false);
    }
    
    // Disable next button if on last page
    if (currentIndex === lastIndex) {
      $('.pagination__button--next').prop('disabled', true);
    } else {
      $('.pagination__button--next').prop('disabled', false);
    }
  }

  // Initial setup: activate the first page
  $('.pagination__page--first').addClass('pagination__page--active');
  updateButtonStates();

  // Handle page button clicks
  $('.pagination__page').on('click', function () {
    $('.pagination__page').removeClass('pagination__page--active');
    $(this).addClass('pagination__page--active');
    updateButtonStates();
  });

  // Handle prev button click
  $('.pagination__button--prev').on('click', function () {
    const currentIndex = $('.pagination__page--active').index('.pagination__page');
    if (currentIndex > 0) {
      $('.pagination__page').removeClass('pagination__page--active');
      $('.pagination__page').eq(currentIndex - 1).addClass('pagination__page--active');
      updateButtonStates();
    }
  });

  // Handle next button click
  $('.pagination__button--next').on('click', function () {
    const currentIndex = $('.pagination__page--active').index('.pagination__page');
    const lastIndex = $('.pagination__page').length - 1;
    if (currentIndex < lastIndex) {
      $('.pagination__page').removeClass('pagination__page--active');
      $('.pagination__page').eq(currentIndex + 1).addClass('pagination__page--active');
      updateButtonStates();
    }
  });
// eslint-disable-next-line no-undef
mixitup('.popular-categories__list');
