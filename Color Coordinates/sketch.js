//Setting up canvas
function setup() {
  createCanvas(500,500);
}

function draw() {
  //Set background to black
  background(0);

//Create the variables determining the X and Y values of the movement of the mouse
  var x1 = map(mouseX, 0, width, 0, 255);
  var x2 = map(mouseY, 0, width, 0, 255);
  var x3 = map(mouseX, 0, width, 255, 0);
  var x4 = map(mouseY, 0, width, 255, 0);

//Each rectangle is set to an RGB Value and 1 Cyan colour
//The rectangle are also in a set position on the top left of the screen
  rect(0, 0, 250, 250);

  fill(0, 255, 0, x2);
  rect(250, 0, 250, 250);

  fill(0, 0, 255, x3);
  rect(0, 250, 250, 250);

  fill(0, 255, 255, x4);
  rect(250, 250, 250, 250);

}
