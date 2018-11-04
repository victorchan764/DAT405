//DAT405 / GAD405
//03_NestedForLoop - Visual

let size = 50;

function setup() {
  createCanvas(500, 500);
  frameRate(3);
}

function draw() {
  //Run the nested loop for x, and y
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      //Draw the shape at the corresponding position
      //This will generate a dynamic position for the x and y
      //The shape is redrawn as many times as the loop says (in this case 100)
      //Draw the background shapes
      fill(215, 200, 170);
      rect(size * x, size * y, size, size);
      //Draw the background shapes with a random RGB colour
      fill(random(255), random(255), random(255));
      rect(12.5+size * x, 12.5+size * y, size/2, size/2);
    }
  }
}
