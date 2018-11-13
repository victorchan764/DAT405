//DAT405 / GAD405
//S3-02_For-Loop-Multiple

//Define the variable for the size
let size = 50;

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(200);
  fill(215, 0, 170);
  //For-loop that will create 10 shapes on the window
  for (let x = 0; x < 10; x++) {
    //x position is adjusted by the variable x (+1 on each loop)
    //Thus, x goes from 0 to 10. Multiplying by 50 it will create this sequence:
    //0, 50, 100, 150, 200, 250, 300, 350, 400, 450
    rect(x*size, 0, size, size);
    rect(x*size, height/2-size/2, size, size);
    rect(x*size, height-size, size, size);
  }
}
