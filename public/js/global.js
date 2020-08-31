jQuery(document).ready(function () {
  // Starts the front header animation.
  setTimeout(function () {
    jQuery(".front-header").addClass("animate");
  }, 300);

  // Function for scrolling to top.
  jQuery(".scroll-top").click(function () {
    window.scroll({ top: 0, behavior: "smooth" });
  });

  // Set copyright year...
  jQuery("#year").html(new Date().getFullYear());

  /*
	jQuery(window).scroll(function () {
		if ($(document).scrollTop() > 300) {
		}
		if ($(document).scrollTop() > 600) {
		}
		else {
		}
	});
	*/
});
