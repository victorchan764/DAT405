let size = 50;
let img = [];
let names = ["Alexander Jones", "Antony Pye", "Arthur Verrept", "Bacson Dias Graca",
"Becky Giffen", "Bronwyn Turner","Charlie Whitehair", "Claire Stranack",
"Daniel Smith", "Kieran Palmer", "Kira Dannan", "Luke Boatfield",
"Matthew Gammage", "Melissa Junttila", "Mike Austin", "Natalie Chan",
"Oliver Jeffery", "Ronan Harbutt", "Rosie Dine", "Ryan Ede",
"Sean Thoburn Sword", "Summer Ashbury", "Arianna Fox-Armstrong"];

let randomValue = 0;

function setup() {
  createCanvas(550, 600);
  imageMode(CENTER);
  textAlign(CENTER, BOTTOM);
  textSize(16);

  img[0] = loadImage("images/AlexanderJones.png");
  img[1] = loadImage("images/AntonyPye.png");
  img[2] = loadImage("images/ArthurVerrept.png");
  img[3] = loadImage("images/BacksonDiasGraca.png");
  img[4] = loadImage("images/BeckyGiffen.png");
  img[5] = loadImage("images/BronwynTurner.png");
  img[6] = loadImage("images/CharlieWhitehair.png");
  img[7] = loadImage("images/ClaireStranack.png");
  img[8] = loadImage("images/DanielSmith.png");
  img[9] = loadImage("images/KieranPalmer.png");
  img[10] = loadImage("images/KiraDannan.png");
  img[11] = loadImage("images/LukeBoatfield.png");
  img[12] = loadImage("images/MatthewGammage.png");
  img[13] = loadImage("images/MelissaJunttila.png");
  img[14] = loadImage("images/MikeAustin.png");
  img[15] = loadImage("images/NatalieChan.png");
  img[16] = loadImage("images/OliverJeffery.png");
  img[17] = loadImage("images/RonanHarbutt.png");
  img[18] = loadImage("images/RosieDine.png");
  img[19] = loadImage("images/RyanEde.png");
  img[20] = loadImage("images/SeanThoburnSword.png");
  img[21] = loadImage("images/SummerAshbury.png");
  img[22] = loadImage("images/AriannaFox-Armstrong.png");
}

function draw() {
  background(80);
  image(img[randomValue], width/2, height/2);
  fill(200);
  text(names[randomValue], width/2, height-15)
}

function mouseReleased() {
  randomValue = Math.round(random(img.length-1));
  console.log(randomValue);
}
