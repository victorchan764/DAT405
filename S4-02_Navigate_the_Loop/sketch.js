//DAT405 / GAD405
//04_Exercise01 - Loops and Random Color

let size = 100;
let backImg;
let xPlusOne = 0;
let yPlusOne = 0;

function setup() {
  createCanvas(500, 500);
  frameRate(3); //Drawing speed 3 fps
  backImg = loadImage("patternXY.png");
  backImg.resize(500,500);
}

function draw() {
  background(backImg);
  rects(xPlusOne, yPlusOne);

  //Run the nested loop for x, and y
  //for (let y = 0; y < 5; y++) {
    //for (let x = 0; x < 5; x++) {
      //rects (Math.round(random(4)), Math.round(random(4)));
    //}
  //}
}

function rects(x, y){
  //Background rect()
  fill(215, 200, 170);
  rect(size * x, size * y, size, size);

  //Draw the foreground shapes with a random RGB color
  fill(random(255), random(255), random(255));
  //Create a slight offeset for the x and y, to appear in the middle
  rect(25+size * x, 25+size * y, size/2, size/2);
}

function keyPressed() {
  if (key == 'd' || key == 'D') xPlusOne++;
  if (key == 'a' || key == 'A') xPlusOne--;
  if (key == 's' || key == 'S') yPlusOne++;
  if (key == 'w' || key == 'W') yPlusOne--;
  console.log("x: " +xPlusOne+ ", y: " +yPlusOne);
}
