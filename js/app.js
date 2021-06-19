$(document).ready(function () {
  $(".header__slider").slick({
    arrows: false,
    accessibility: true,
    dots: true,
  });
});

$(document).ready(function () {
  $(".news__slider").slick({
    accessibility: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><div class='news__scroll'><div class='news__arrow'></div></div></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><div class='news__scroll'><div class='news__arrow'></div></div></button>",
  });
});
