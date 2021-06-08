var text = [
  "AP Computer Science Teacher",
  "AP Mathematics Teacher",
  "Java",
  "Python",
  "HTML/CSS/JS",
  "Attorney",
  "Hebrew",
  "Arabic",
  "Spanish"
];
var counter = 0;
var elem = jQuery("#greeting");
setInterval(change, 3000);
function change() {
  elem.html(text[counter]);
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}
