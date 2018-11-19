//Define Variables
//X value is the number of tiles on the X axis
//Y value is the number of tiles on the X axis
var tileCountX = 25;
var tileCountY = 10;

var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

//Set canvas size and Color mode
function setup() {
  createCanvas(594, 841);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();

  // init with random values
  for (var i = 0; i < tileCountX; i++) {
    hueValues[i] = random(360);
    saturationValues[i] = random(100);
    brightnessValues[i] = random(100);
  }
}

function draw() {
  // Set the background to Black
  background(0);

  // The mouse coordinates is limited to the canvas size
  var mX = constrain(mouseX, 0, width);
  var mY = constrain(mouseY, 0, height);

  // tile counter
  var counter = 0;

  // Mouse is mapped to grid resolution
  var currentTileCountX = int(map(mX, 0, width, 1, tileCountX));
  var currentTileCountY = int(map(mY, 0, height, 1, tileCountY));
  var tileWidth = width / currentTileCountX;
  var tileHeight = height / currentTileCountY;

  for (var gridY = 0; gridY < tileCountY; gridY++) {
    for (var gridX = 0; gridX < tileCountX; gridX++) {
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      var index = counter % currentTileCountX;

      // Get the component color values in the index
      fill(hueValues[index], saturationValues[index], brightnessValues[index]);
      rect(posX, posY, tileWidth, tileHeight);
      counter++;
    }
  }
}
//If key is pressed different colours will appear
function keyPressed() {

    var colors = [];
    for (var i = 0; i < hueValues.length; i++) {
      colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
    }

  if (key == '1') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(100);
      saturationValues[i] = random(100);
      brightnessValues[i] = random(100);
    }
  }

  if (key == '2') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(150);
      saturationValues[i] = random(110);
      brightnessValues[i] = 110;
    }
  }

  if (key == '3') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = random(200);
      saturationValues[i] = 120;
      brightnessValues[i] = random(120);
    }
  }

  if (key == '4') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = 250;
      saturationValues[i] = 130;
      brightnessValues[i] = random(130);
    }
  }

  if (key == '5') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = 300;
      saturationValues[i] = 140;
      brightnessValues[i] = random(140);
    }
  }

  if (key == '6') {
    for (var i = 0; i < tileCountX; i++) {
      hueValues[i] = 360;
      saturationValues[i] = random(150);
      brightnessValues[i] = 150;
    }
  }
}
