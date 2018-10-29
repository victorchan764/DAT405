//DAT405 / GAD405
//02_Coordinates 

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(700, 400);

  //Set the size of all text
  textSize(18);

  //No stroke for shapes
  noStroke();
}

//Rendering function
function draw() {
  //Erase all canvas. Set the color to white
  background(100);

  //Center shape position and color
  fill(255);
  rectMode(CENTER);
  rect(350, 200, 200, 100);
  //Set text preferences for circle0
  textAlign(CENTER);
  fill(100);
  text("Rect Center Position:", 350, 200);
  text("X=350, Y=200", width/2, height/2+20);

  //Top left corner shape position and color
  fill(0, 0, 255);
  ellipse(0, 0, 100, 100);
  //Set text preferences for circle1
  textAlign(LEFT);
  fill(255);
  text("Circle1 Center Position:", 0, 70);
  text("X=0, Y=0", 0, 90);

  //Top right corner shape position and color
  fill(255, 0, 0);
  ellipse(width, 0, 100, 100);
  //Set text preferences for circle2
  textAlign(RIGHT);
  fill(255);
  text("Circle2 Center Position:", width, 70);
  text("X=700, Y=0", width, 90);

  //Bottom right corner shape position and color
  fill(0, 255, 0);
  ellipse(0, height, 100, 100);
  //Set text preferences for circle3
  textAlign(LEFT);
  fill(255);
  text("Circle3 Center Position:", 0, height-80);
  text("X=0, Y=700", 0, height-60);

  //Top right corner shape position and color
  fill(255, 255, 0);
  ellipse(width, height, 100, 100);
  //Set text preferences for circle4
  textAlign(RIGHT);
  fill(255);
  text("Circle4 Center Position:", width, height-80);
  text("X=700, Y=700", width, height-60);
}
