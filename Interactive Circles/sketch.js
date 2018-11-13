
function setup() {
  createCanvas(500,500);
  background (0);
}

function draw() {
stroke(random(255),random(255),random(255));
fill(random(255),random(255),random(255));
ellipse(mouseX,mouseY,50,50);
}
