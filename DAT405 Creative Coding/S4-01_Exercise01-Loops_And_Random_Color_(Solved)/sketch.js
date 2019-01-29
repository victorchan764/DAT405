//DAT405 / GAD405
//04_Exercise01 - Loops and Random Color

let size = 50;

function setup() {
  createCanvas(500, 500);
  frameRate(3); //Drawing speed 3 fps
}

function draw() {
  //Run the nested loop for x, and y
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      //Draw the background shapes
      fill(215, 200, 170);
      rect(size * x, size * y, size, size);

      //Draw the foreground shapes with a random RGB color
      fill(random(255), random(255), random(255));
      //Create a slight offeset for the x and y, to appear in the middle
      rect(12.5+size * x, 12.5+size * y, size/2, size/2);
    }
  }
}
