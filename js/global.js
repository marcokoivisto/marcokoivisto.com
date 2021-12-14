(function () {
  setTimeout(function () {
    document.getElementById("header").classList.add("animate");
  }, 300);

  var headlines = [
    document.getElementById("first-h2"),
    document.getElementById("second-h2"),
    document.getElementById("third-h2"),
  ];

  setTimeout(function () {
    headlines[0].classList.toggle("show");
  }, 2700);

  setTimeout(function () {
    headlines[0].classList.toggle("show");
  }, 10100);

  setTimeout(function () {
    headlines[1].classList.toggle("show");
  }, 10700);

  setTimeout(function () {
    headlines[1].classList.toggle("show");
  }, 18100);

  setTimeout(function () {
    headlines[2].classList.toggle("show");
  }, 18700);

  setTimeout(function () {
    window.location = "https://www.inly.se";
  }, 26700);
})();
