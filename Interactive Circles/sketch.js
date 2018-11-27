//setting up canvas
function setup() {
  createCanvas(500,500);
  background (0);
}

function draw() {
stroke(random(255),random(255),random(255));
fill(random(255),random(255),random(255));
//Creates a trail of circles based on the movement of the mouse
ellipse(mouseX,mouseY,50,50);
}
