//DAT405 / GAD405
//S3-01_For-Loop

//Define the variable for the size
let size = 50;

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(255, 0, 255);
  fill(215, 0, 170);
  //For-loop that will create 10 shapes on the window
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
    //x position is adjusted by the variable x (+1 on each loop)
    //Thus, x goes from 0 to 10. Multiplying by 50 it will create this sequence:
    //0, 50, 100, 150, 200, 250, 300, 350, 400, 450
    rect(x*size, y*size, size, size);
    }
  }
}
