function initMap() {
  let n = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: { lat: -33, lng: 151 },
    }),
    a = {
      url: "assets/img/marker.svg",
      scaledSize: new google.maps.Size(25, 25),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0),
    };
  new google.maps.Marker({
    position: { lat: -33.89, lng: 151.274 },
    map: n,
    icon: a,
    width: "20px",
  });
}
$(document).ready(function () {
  function n() {
    $(window).scrollTop() > 10
      ? $(".normal-nav").addClass("change-bg")
      : $(".normal-nav").removeClass("change-bg");
  }
  $(window).on("scroll", function () {
    n();
  }),
    n(),
    $("nav .toggle").on("click", function () {
      $(".overlay").css({ transform: "scaleX(1)" }),
        $(".menu").addClass("ul-dir");
    }),
    $("nav .overlay").on("click", function () {
      $(this).removeAttr("style"), $(".menu").removeClass("ul-dir");
    }),
    $(".like").on("click", function () {
      $(this).toggleClass("active");
    }),
    AOS.init({ delay: 500, duration: 900, easing: "ease-out-back" }),
    560 > $(window).width() && AOS.init({ once: !0 }),
    $("#scroll-top").on("click", function () {
      $("html,body").animate({ scrollTop: 0 }, 600);
    });
}),
  (window.initMap = initMap);
