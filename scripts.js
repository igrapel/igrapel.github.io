var text = [
  "AP Computer Science Teacher",
  "AP Mathematics Teacher",
  "Java",
  "Python",
  "HTML/CSS/JS",
  "Hebrew / Arabic / Spanish", 
  "Attorney"
];
var counter = 0;
var elem = jQuery("#greeting");
setInterval(change, 2000);
function change() {
  elem.html(text[counter]);
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}
