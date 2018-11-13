//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  createCanvas(500,500);
  background (0);
}

//Rendering function
function draw() {
stroke(random(255),random(255),random(255));
fill(random(255),random(255),random(255));
ellipse(mouseX,mouseY,50,50);
}
