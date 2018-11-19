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
  frameRate(5);
  noStroke();
  background(0);
}
//Setting the values of variables
function draw() {
  sizeRandom = random(50, 300);
  xRandom = random(width);
  yRandom = random(height);
  x1Random = random(width);
  y1Random = random(height);
  customShape(xRandom, yRandom, sizeRandom);
}
//Conditions
function customShape(x, y, size) {
if (state == 1) {
  fill(random(255), random(255), random(255), random(255));
  ellipse(x, y, size, size);
}
  else if (state == 2) {
    fill(random(255), random(255), random(255), random(255));
    rect(x, y, size, size);
  }
  else if (state == 3) {
    fill(random(255), random(255), random(255), random(255));
    triangle(x, y, x1Random, y1Random, size, size);
  }
}

function keyPressed() {
    if (key == '1') state = 1;
    if (key == '2') state = 2;
    if (key == '3') state = 3;
}
