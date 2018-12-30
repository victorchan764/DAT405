let getLocation = "Yeovil";

var weather,
cityName,
  country,
  weatherId,
  weatherDescription,
  Cloudiness,
  humidity,
  windSpeed,
  windDeg,
  temp,
  visibility,
  windRatio;
var city = "Yeovil";
var r = 0;

var epochUpdate, update, updateText;
var xDir, yDir, unit, countX, countY, size;
var c;


function preload() {
  var url =
    "http://api.openweathermap.org/data/2.5/weather?q="+getLocation+"&units=metric&appid="+apiKey;
  weather = loadJSON(url);
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("homeAnim");
  background(0);
  frameRate(30);

  weatherVar();

  /* Orientation vent */
  angleMode(DEGREES);
  if (windDeg === undefined || !windDeg) windDeg = 0;
  xDir = sin(windDeg);
  yDir = -cos(windDeg);

  unit = round(map(Cloudiness, 0, 100, 80, 20));
  countX = round(windowWidth / unit);
  countY = round(windowHeight / unit);
  size = round(windowWidth / countX);

  /*Humidity*/
  alpha = visibility;
  c = color(0, 0, 0, alpha);

  /* Convert Epoch to date */
  update = new Date(epochUpdate * 1000);
  updateText = update.getHours() + ":" + update.getMinutes();

}

function draw() {
  fill(c);
  rect(width/2, height/2, width, height);

  r = r + windRatio;
  if (r > 2) r = 0;
  speed = round(r * PI * 100) / 100;

  angleMode(RADIANS);
  rectMode(CENTER);
  ellipseMode(CENTER);
  for (var x = 0; x < countX + 1; x++) {
    for (var y = 0; y < countY + 1; y++) {
      push();
      fixe(x,y);
      animate(x, y);
      sketch(x,y);
      pop();
    }
  }

  push();
  fill(255);
  textFont("Lato");
  textAlign(LEFT);
  textSize(48);
  text(temp + "°", 20, 60);
  textSize(14);
  fill(127);
  //text(deviceOrientation, 20, 30);
  text(cityName + " / " + country + " / "+temp + "°", 20, height - 30);
  textAlign(CENTER);
  text(
    weatherDescription + " / " + weatherId + " / " + windSpeed + "m/s",
    width / 2,
    height - 30
  );
  textAlign(RIGHT);
  text(updateText, width - 20, height - 30);
  pop();

  var ep = 5;
  cadre(0,0,width,ep);
  cadre(0,0,ep,height);
  cadre(width-ep, 0, ep, height);
  cadre(0, height-ep, width, ep);
}

function fixe(x,y) {
  strokeWeight(1);
  stroke(255,255,255,30);
  noFill();
  //rect(x*size,y*size,size, size);
  //ellipse(x*size,y*size,size, size);
}

function sketch(x,y) {
  strokeWeight(3);
  stroke(255);
  point(0, size/2);
}
function animate(x, y) {
  translate(x * size, y * size);
  rotate(speed + x * xDir + y * yDir);
}

function cadre(posx, posy, widthSize, heightSize){
  push();
  fill(0);
  noStroke();
  rect(posx,posy,widthSize,heightSize);
  pop();
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  countX = round(windowWidth / unit);
  countY = round(windowHeight / unit);
}

function weatherVar(){
  cityName = weather.name;
  country = weather.sys.country;
  weatherId = weather.weather[0].id;
  weatherDescription = weather.weather[0].description;
  temp = round(weather.main.temp);
  epochUpdate = weather.dt;
  Cloudiness = weather.clouds.all;
  windSpeed = weather.wind.speed;
  windRatio = windSpeed / 200;
  windDeg = weather.wind.deg;
  visibility = map(weather.visibility, 0, 10000, 0, 255);
  humidity = weather.main.humidity;
}
