// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

$(document).ready(function () {
  $(".header__slider").slick({
    arrows: false,
    accessibility: true,
    dots: true,
  });
});

$(document).ready(function () {
  $(".news__slider").slick({
    autoplay: true,
    autoplaySpeed: 4000,
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
  zoom: 13, // зум
  mapId: "dd9215a291db65b9",
});
new google.maps.Marker({
  position: { lat: 40.70425692213143, lng: -73.90120936090999 }, // координати
  map: map, // об'єкт карти
  icon: "../img/Pin.png", // шлях до картинки
});
