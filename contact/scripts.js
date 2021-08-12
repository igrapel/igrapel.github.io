var w;
var Move;
$(document).ready(function () {
  $(window).scroll(function () {
    var dist = $("#inputs").offset().left;
    w = $(window).width();
    w = w / 2;
    w = w - 235;
    move = "+=" + w;
    console.log(move);
    $("#inputs").animate(
      {
        marginLeft: w + "px"
      },
      1000
    );
  });
});
