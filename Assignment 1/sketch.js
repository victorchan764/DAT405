//Define Variables
//tileCountX is the number of tiles on the X axis
//tileCountY is the number of tiles on the X axis
let tileCountX = 25;
let tileCountY = 10;

let hueValues = [];
let saturationValues = [];
let brightnessValues = [];

//Set canvas size and Color mode
function setup() {
  createCanvas(594, 841);
  colorMode(HSB, 360, 100, 100, 100);
  strokeWeight(5);

  // init with random values
  for (let i = 0; i < tileCountX; i++) {
    hueValues[i] = random(360);
    saturationValues[i] = random(100);
    brightnessValues[i] = random(100);
  }
}

function draw() {
  // Set the background to Black
  background(0, 0, 0);

  // The mouse coordinates is limited to the canvas size
  let mX = constrain(mouseX, 0, width);
  let mY = constrain(mouseY, 0, height);

  // tile counter
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

      // Get the component color values in the index
      fill(hueValues[index], saturationValues[index], brightnessValues[index]);
      rect(posX, posY, tileWidth, tileHeight);
      counter++;
    }
  }
}
//If key is pressed different colours will appear
function keyPressed() {

    let colors = [];
    for (let i = 0; i < hueValues.length; i++) {
      colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
    }

  if (key == '1') {
    for (let i = 0; i < tileCountX; i++) {
      hueValues[i] = random(100);
      saturationValues[i] = random(100);
      brightnessValues[i] = random(100);
    }
  }

  if (key == '2') {
    for (let i = 0; i < tileCountX; i++) {
      hueValues[i] = random(150);
      saturationValues[i] = random(110);
      brightnessValues[i] = 110;
    }
  }

  if (key == '3') {
    for (let i = 0; i < tileCountX; i++) {
      hueValues[i] = random(200);
      saturationValues[i] = random(120);
      brightnessValues[i] = random(120);
    }
  }

  if (key == '4') {
    for (let i = 0; i < tileCountX; i++) {
      hueValues[i] = random(250);
      saturationValues[i] = random(130);
      brightnessValues[i] = random(130);
    }
  }

  if (key == '5') {
    for (let i = 0; i < tileCountX; i++) {
      hueValues[i] = random(300);
      saturationValues[i] = random(140);
      brightnessValues[i] = random(140);
    }
  }

  if (key == '6') {
    for (let i = 0; i < tileCountX; i++) {
      hueValues[i] = random(360);
      saturationValues[i] = random(150);
      brightnessValues[i] = random(150);
    }
  }
}
