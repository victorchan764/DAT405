//Define Variables
let sizeRandom = 50;
let xRandom;
let yRandom;
let x1Random;
let y1random;
let state;

//Setting up Canvas
function setup() {
  createCanvas(500,500);
//Frame rate is set to 5fps
  frameRate(5);
  noStroke();
  background(0);
}
//Setting the values of variables
function draw() {
  //Randomise the variables for the position and size
  sizeRandom = random(50, 300);
  xRandom = random(width);
  yRandom = random(height);
  x1Random = random(width);
  y1Random = random(height);
  //call the function. Pass the arguments for position and size
  customShape(xRandom, yRandom, sizeRandom);
}
//Conditions
function customShape(x, y, size) {
if (state == 1) {
  fill(random(255), random(255), random(255), random(255));
  //Generates random circles with random colours and sizes
  ellipse(x, y, size, size);
}
  else if (state == 2) {
    fill(random(255), random(255), random(255), random(255));
    //Generates random squares with random colours and sizes
    rect(x, y, size, size);
  }
  else if (state == 3) {
    fill(random(255), random(255), random(255), random(255));
    //Generates random triangles with random colours and sizes
    triangle(x, y, x1Random, y1Random, size, size);
  }
}
//If any of the 3 keys are pressed, it will generate a shape with a random colour and size
function keyPressed() {
    if (key == '1') state = 1;
    if (key == '2') state = 2;
    if (key == '3') state = 3;
}
