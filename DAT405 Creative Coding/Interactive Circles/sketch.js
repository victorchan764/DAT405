//setting up canvas
function setup() {
  createCanvas(500,500);
  background (0);
}

function draw() {
//The circle colour is always changing to a random colour in the RGB scale
stroke(random(255),random(255),random(255));
fill(random(255),random(255),random(255));
//Creates a trail of circles based on the movement of the mouse
ellipse(mouseX,mouseY,50,50);
}
