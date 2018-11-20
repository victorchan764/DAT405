//Define Variables
//tileCountX is the number of tiles on the X axis
//tileCountY is the number of tiles on the Y axis
let tileCountX = 25;
let tileCountY = 10;

//Setting the Arrays
let hueValues = [];
let saturationValues = [];
let brightnessValues = [];

//Set canvas size and Color mode
function setup() {
  createCanvas(594, 841);
  colorMode(HSB, 360, 100, 100, 100);
  //Stroke weight for individual tiles
  strokeWeight(5);

  // init with random values
  for (let i = 0; i < tileCountX; i++) {
    hueValues[i] = random(360);
    saturationValues[i] = random(255);
    brightnessValues[i] = random(255);
  }
}

function draw() {
  // Set the background to Black
  background(0, 0, 0);

  // The mouse coordinates is limited to the canvas size
  let mX = constrain(mouseX, 0, width);
  let mY = constrain(mouseY, 0, height);

  // tile counter is set to 0 at the start
  let counter = 0;

  // The movement of the Mouse is mapped to grid resolution
  let currentTileCountX = int(map(mX, 0, width, 1, tileCountX));
  let currentTileCountY = int(map(mY, 0, height, 1, tileCountY));
  let tileWidth = width / currentTileCountX;
  let tileHeight = height / currentTileCountY;

  for (let gridY = 0; gridY < tileCountY; gridY++) {
    for (let gridX = 0; gridX < tileCountX; gridX++) {
      //Wherever the mouse is positioned, the tile sizes increase or decrease
      let posX = tileWidth * gridX;
      let posY = tileHeight * gridY;
      let index = counter % currentTileCountX;

// Gets the component color values in the index and makes different colored tiles using the random function
      fill(hueValues[index], saturationValues[index], brightnessValues[index]);
//Creates tiles using rectangles based on the position of the mouse
      rect(posX, posY, tileWidth, tileHeight);
      counter++;
    }
  }
}
//If specific key is pressed, different colours will appear based on the random values set
function keyPressed() {
//define variable - colors
//colors is made up of the random colors combined using the HSB colour model
    let colors = [];
    for (let i = 0; i < hueValues.length; i++) {
      colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
    }

  if (key == '1') {
    for (let i = 0; i < tileCountX; i++) {
      hueValues[i] = random(100);
      saturationValues[i] = random(255);
      brightnessValues[i] = random(255);
    }
  }

  if (key == '2') {
    for (let i = 0; i < tileCountX; i++) {
      hueValues[i] = random(150);
      saturationValues[i] = random(255);
      brightnessValues[i] = random(255);
    }
  }

  if (key == '3') {
    for (let i = 0; i < tileCountX; i++) {
      hueValues[i] = random(200);
      saturationValues[i] = random(255);
      brightnessValues[i] = random(255);
    }
  }

  if (key == '4') {
    for (let i = 0; i < tileCountX; i++) {
      hueValues[i] = random(250);
      saturationValues[i] = random(255);
      brightnessValues[i] = random(255);
    }
  }

  if (key == '5') {
    for (let i = 0; i < tileCountX; i++) {
      hueValues[i] = random(300);
      saturationValues[i] = random(255);
      brightnessValues[i] = random(255);
    }
  }

  if (key == '6') {
    for (let i = 0; i < tileCountX; i++) {
      hueValues[i] = random(360);
      saturationValues[i] = random(255);
      brightnessValues[i] = random(255);
    }
  }
}
