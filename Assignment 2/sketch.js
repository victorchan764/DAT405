//Specify Town or city
let city = "Yeovil";
//The API key is given by the openweathermap.org website
let apiKey = "6b4a465ac9894c63172283b3f271c20c";
//Declare and call variables for API response
let weather,
  cityName,
  country,
  weatherId,
  weatherDescription,
  Cloudiness,
  humidity,
  windSpeed,
  windDegrees,
  temp,
  visibility,
  windRatio;

let r = 0;

let epochUpdate, update, updateText;
let xDir, yDir, unit, countX, countY, size;
let c;


function preload() {
  //The text/string object is formatted with the location we want to use, and our own API key
  let url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+apiKey;
  //The URL is sent to the loadJSON that returns the data to the weather variable
  weather = loadJSON(url);
}

function setup() {
  createCanvas(1280, 720);
  background(0);
  frameRate(30);

  weatherVar();

  /* Orientation vent */
  angleMode(DEGREES);
  if (windDegrees === undefined || !windDegrees) windDegrees = 0;
  xDir = sin(windDegrees);
  yDir = -cos(windDegrees);

  unit = round(map(Cloudiness, 0, 100, 80, 20));
  countX = round(windowWidth / unit);
  countY = round(windowHeight / unit);
  size = round(windowWidth / countX);

  //Display Humidity and visibility
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
  for (let x = 0; x < countX + 1; x++) {
    for (let y = 0; y < countY + 1; y++) {
      push();
      fixed(x,y);
      animate(x, y);
      sketch(x,y);
      pop();
    }
  }

//Position, font type and display of Text
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

  let ep = 5;
  frame(0,0,width,ep);
  frame(0,0,ep,height);
  frame(width-ep, 0, ep, height);
  frame(0, height-ep, width, ep);
}

function fixed(x,y) {
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

function frame(posx, posy, widthSize, heightSize){
  push();
  fill(0);
  noStroke();
  rect(posx,posy,widthSize,heightSize);
  pop();
}

//
function windowResized() {
  resizeCanvas(1280, 720);
  countX = round(1280 / unit);
  countY = round(720/ unit);
}
//Using the weather variable,
function weatherVar(){
  //City Name
  cityName = weather.name;
  //Country Code
  country = weather.sys.country;
  //Weather ID
  weatherId = weather.weather[0].id;
  weatherDescription = weather.weather[0].description;
  //Temperature
  temp = round(weather.main.temp);
  //
  epochUpdate = weather.dt;
  //Type of clouds
  Cloudiness = weather.clouds.all;
  //Wind Speed
  windSpeed = weather.wind.speed;
  windRatio = windSpeed / 200;
  windDeg = weather.wind.deg;
  //Visibility & Humidity
  visibility = map(weather.visibility, 0, 10000, 0, 255);
  humidity = weather.main.humidity;
}
