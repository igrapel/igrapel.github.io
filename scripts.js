var text = [
  "AP Computer Science Teacher",
  "AP Mathematics Teacher",
  "Java Developer",
  "Python Developer",
  "HTML/CSS/JS Developer",
  "Hebrew / Arabic / Spanish Translator", 
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
