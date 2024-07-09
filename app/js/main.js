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

//DOMContentLoaded означает, когда наш документ будет готов к работе, тогда начнут работать наши скрипты

//Mobile Menu
const burger = document.querySelector('.burger'); //находим наш бургер по селектору класса

burger.addEventListener('click', () => {
  //Добавляем событие "клик" на бургер

  burger.classList.toggle('burger--active'); //при клике на бургер у нас будет либо добавлятся класс, либо удаляется.
  //ВАЖНО! Мы уже работаем с данным классом, поэтому тут "." не ставим, иначе в атрибут class значение добавится с "." и работать не будет.
});

// eslint-disable-next-line no-undef
mixitup('.popular-categories__list');
