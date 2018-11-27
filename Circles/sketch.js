//Define a variable called size
let size;

//Setting up canvas
function setup() {
  createCanvas(500,500);
//Frame rate is set to 3fps
  frameRate(3);
  noStroke();
}

function draw() {
  sizeRandom = random(200);
  xRandom = random (width);
  yRandom = random (height);
  customShape(xRandom, yRandom, sizeRandom);
}

function customShape(x, y, size){
  stroke(0);
  strokeWeight(1);
  fill(255);
  ellipse(x, y, size, size);

  strokeWeight(5);
  ellipse(x, y, size/2, size/2);

  strokeWeight(1);
  ellipse(x, y, size/4, size/4);

  stroke(0, 0, 255);
  strokeWeight(5);
  ellipse(x, y, size/6, size/6);

  noStroke();
  fill(255, 0, 0)
  ellipse(x, y, size/8, size/8);
}
