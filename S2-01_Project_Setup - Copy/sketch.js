//DAT405 / GAD405
//01_ProjectSetup
//In this example we see how to create a canvas, set and display
//the frame rate of the rendering system, and use text to
//display the frame count and rate on screen

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(400, 400);

  //Set up the frame rate (frames per second)
  //Default is 60 fps
  frameRate(30);

  //Preferences for the text (size, and alignment)
  textSize(20);
  textAlign(CENTER);

  fill(255, 0, 0);
  rect(width/2, height/2, 50, 50);
}

//Rendering function
function draw() {
  //Erase all canvas. Set the color to dark grey
  background(60);

  //Set the color of the text
  fill(255);
  //Set the text message as the frame count
  //Position text in the middle of the screen
  text("Frame Count:  " + frameCount, width/2, height/2-20);
  //Set the text message as the frame rate (round it to an integer)
  //Position text in the middle of the screen
  text("Frame Rate:  " + Math.round(frameRate()), width/2, height/2+20);

  //noLoop();
}
