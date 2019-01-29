//Create three global scope variables for position and size
let xRandom;
let yRandom;
let sizeRandom = 100;

function setup() {
  createCanvas(500, 500);
  frameRate(10); //Drawing speed 10 fps
  noStroke();
}

function draw() {
  //Randomize the variables for the position and size
  xRandom = random (width);
  yRandom = random (height);
  sizeRandom = random(100, 300);

  //Call the function. Pass the arguments for position and size
  customShape(xRandom, yRandom, sizeRandom);
}

//Create a custom shape. Use input parameters for position and size
function customShape(x, y, size){
  //Outside circle - thin line, with a blue-ish fill
  stroke(134, 151, 178);
  strokeWeight(1);
  fill(239, 245, 255);
  ellipse(x, y, size, size);

  //Next circle is smaller, with thicker stroke with a pink-ish color
  strokeWeight(5);
  stroke(255, 207, 200);
  noFill();
  ellipse(x, y, size/1.2, size/1.2);

  //Next circle is smaller, with thin stroke and gray-ish color
  strokeWeight(1);
  stroke(177, 178, 174);
  ellipse(x, y, size/1.4, size/1.4);

  //Next circle is smaller, with thicker stroke with a blue-grey color
  stroke(101, 141, 166);
  strokeWeight(5);
  ellipse(x, y, size/2, size/2);

  //Next circle is smaller, with a green-ish fill, and no stroke
  noStroke();
  fill(196, 204, 171);
  ellipse(x, y, size/4, size/4);
}
