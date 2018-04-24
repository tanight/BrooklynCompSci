$(window).on("load", function() {
  $(".main").fadeIn(1000);
});

$(window).on("load", function() {
  $(".load-screen")
    .delay(2500)
    .fadeOut(500)
    .queue(function() {
      $(this).dequeue();
      $(".main").fadeIn(400);
      $(".intro-img").addClass("slideup-animation");
      $(".intro-heading").addClass("slideup-animation");
      $(".intro-p").addClass("slideup-animation");
      $(".intro-link").addClass("slideup-animation");
    });
});
