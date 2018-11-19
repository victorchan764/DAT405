let size = 100;
let backImg;
let xPlusOne = 0;
let yPlusOne = 0;

function setup() {
  createCanvas(500, 500);
  frameRate(30); //Drawing speed 3 fps
  backImg = loadImage("patternXY.png");
  backImg.resize(500,500);
}

function draw() {
  ellipses(xPlusOne, yPlusOne);

  //Run the nested loop for x, and y
  //for (let y = 0; y < 5; y++) {
    //for (let x = 0; x < 5; x++) {
      //rects (Math.round(random(4)), Math.round(random(4)));
    //}
  //}
//}

function ellipses(x, y){
  var x = random(500);
  var y = random(500);
  var size1 = random(200);
  Background ellipse()
  fill(random(255), random(255), random(255), random(255));
  ellipse(x, y, size1, size1);
}

function keyPressed() {
  if (key == 'd' || key == 'D') xPlusOne++;
  if (key == 'a' || key == 'A') xPlusOne--;
  if (key == 's' || key == 'S') yPlusOne++;
  if (key == 'w' || key == 'W') yPlusOne--;
  console.log("x: " +xPlusOne+ ", y: " +yPlusOne);
}
