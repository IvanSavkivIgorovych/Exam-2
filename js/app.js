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

const mapWrapper = document.getElementById("map");
const map = new google.maps.Map(mapWrapper, {
  center: { lat: 40.705773493742925, lng: -73.97549621811903 }, // координати центру
  zoom: 8, // зум
  mapId: "dd9215a291db65b9",
});
