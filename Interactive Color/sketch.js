let size = 50;

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(0, 0, 0);
  fill(0,255,255);

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {

    rect(x*size, y*size, size, size);
    }
  }
}
