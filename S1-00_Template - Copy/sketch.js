//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
function setup() {

  createCanvas(500,500);
}

function draw() {
  background(0);
  var x1 = map(mouseX, 0, width, 0, 255);
  var x2 = map(mouseY, 0, width, 0, 255);
  var x3 = map(mouseX, 0, width, 255, 0);
  var x4 = map(mouseY, 0, width, 255, 0);

  fill(255, 0, 0, x1);
  rect(0, 0, 250, 250);

  fill(0, 255, 0, x2);
  rect(250, 0, 250, 250);

  fill(0, 0, 255, x3);
  rect(0, 250, 250, 250);

  fill(0, 255, 255, x4);
  rect(250, 250, 250, 250);

}
