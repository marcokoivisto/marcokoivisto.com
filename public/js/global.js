jQuery(document).ready(function () {
  setTimeout(function () {
    jQuery(".front-header").addClass("animate");
  }, 300);

  setTimeout(function () {
    jQuery(".front-header h2.first").toggleClass("show");
  }, 2700);

  setTimeout(function () {
    jQuery(".front-header h2.first").toggleClass("show");
    jQuery(".front-header h2.second").toggleClass("show");
  }, 10700);

  setTimeout(function () {
    jQuery(".front-header h2.second").toggleClass("show");
    jQuery(".front-header h2.third").toggleClass("show");
  }, 18700);

  setTimeout(function () {
    window.location = "https://www.inly.se";
  }, 26700);
});
