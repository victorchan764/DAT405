function setup() {
  createCanvas(400, 400); //Use this function to define the size of the output window
}

function draw() {
  background(0); //Set your background color to black (0)

  //Create four variable that will store four different numbers
  //that are coming from the mouse activity - X, Y, reversed X, reversed Y
  //To achieve this we use the map function that takes the values from the
  //XY motion of the mouse on the window size, and creates another number
  //from 0 to 255 to control the color of each of the four rectangles
  var mouse1 = map(mouseX, 0, width, 0,   255);
  var mouse2 = map(mouseY, 0, width, 0,   255);
  var mouse3 = map(mouseX, 0, width, 255, 0);
  var mouse4 = map(mouseY, 0, width, 255, 0);

  //Four different values are created. The alpha channel is controlled
  //by the mouse variables we created before
  var color1 = color(255, 0,   0,   mouse1);
  var color2 = color(0,   255, 0,   mouse2);
  var color3 = color(255, 255, 0,   mouse3);
  var color4 = color(0,   255, 255, mouse4);

  //Each color variable is set to a different fill function
  //that colors each rectangle
  fill(color1);
  rect(0, 0, width/2, height/2);

  fill(color2);
  rect(width/2, 0, width/2, height/2);

  fill(color3);
  rect(0, height/2, width/2, height/2);

  fill(color4);
  rect(width/2, height/2, width/2, height/2);
}
