var w;
var l;
var Move;
$(document).ready(function () {
  $(window).scroll(function () {
    var dist = $("#inputs").offset().left;
    w = $(window).width();
    console.log("initial w: " + w);
    l = $(letter).width();
    console.log("initial l: " + l);
    w = w / 2;
    w = w - l / 2 - w * 0.08;
    move = "+=" + w;
    console.log("move :" + move);
    $("#inputs").animate(
      {
        marginLeft: w + "px"
      },
      1000
    );
  });
});
