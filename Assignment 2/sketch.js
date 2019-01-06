//Specify Town or city; Must be written correctly
let city = "Yeovil";
//The API key is given by the openweathermap.org website (using the one already provided to us)
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

//This variable is for updating the unix timestamp into an Epoch date
let epochUpdate, update, updateText;
//These variables dictate the size of the circles and the direction of where they move around
let xDir, yDir, unit, countX, countY, size;
let c;


function preload() {
  //The text/string object is formatted with the location we want to use, and our unique API key
  let url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+apiKey;
  //The URL is sent to the loadJSON that returns the data to the weather variable
  weather = loadJSON(url);
}

//Setting up canvas
function setup() {
  background(0);
  frameRate(30);
  cnv = createCanvas(1280, 720);
  centerCanvas();

  //Define canvas variable so that canvas can be centered
  var cnv;

//Function for centering canvas
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

  //Extract data from weather variable
  weatherVar();

  // Default anglemode is RADIANS but is now set to DEGREES
  angleMode(DEGREES);
  if (windDegrees === undefined || !windDegrees) windDegrees = 0;
  xDirection = sin(windDegrees);
  yDirection = -cos(windDegrees);

  unit = round(map(Cloudiness, 0, 100, 80, 20));
  countX = round(windowWidth / unit);
  countY = round(windowHeight / unit);
  size = round(windowWidth / countX);

  //Display Humidity and visibility
  alpha = visibility;
  c = color(0, 0, 0, alpha);

  // Converts the unix timestamp into the most recent time the weather in the specifc location has last been updated */
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

  //Colour of font, font type and position of Text
  push();
  fill(255);
  textFont("Lato");
  textAlign(LEFT);
  textSize(48);
  //Temperature is displayed in the top left of the canvas
  text(temp + "°", 20, 60);
  textSize(14);
  fill(125);
  //text(deviceOrientation, 20, 30);
  //the location is displayed at the bottom left of the canvas
  text(cityName + " / " + country, 20, height - 30);
  textAlign(CENTER);
  text(
  //The weather information is displayed in the bottom middle of the canvas
    weatherDescription + " / " + weatherId + " / " + windSpeed + "m/s",
    width / 2,
    height - 30
  );
  textAlign(RIGHT);
  text(updateText, width - 20, height - 30);
  pop();

//Frame starts in top left corner of canvas
  let ep = 5;
  frame(0,0,width,ep);
  frame(0,0,ep,height);
  frame(width-ep, 0, ep, height);
  frame(0, height-ep, width, ep);
}

function fixed(x,y) {
  strokeWeight(0);
  stroke(255,255,255,30);
  noFill();
}

//Determines the size of the circles
function sketch(x,y) {
  strokeWeight(3);
  stroke(255);
  point(0, size/2);
}
//Animates the motion of the circles in a pattern based on the temperature and cloudiness of the location
function animate(x, y) {
  translate(x * size, y * size);
  rotate(speed + x * xDirection + y * yDirection);
}

//Size and position of the canvas frame
function frame(posx, posy, widthSize, heightSize){
  push();
  fill(0);
  noStroke();
  rect(posx,posy,widthSize,heightSize);
  pop();
}

//Using the weather variable, we can load the data from the JSON file and use that set of data
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
  //Get data based on last weather update
  epochUpdate = weather.dt;
  //Type of clouds
  Cloudiness = weather.clouds.all;
  //Wind Speed
  windSpeed = weather.wind.speed;
  windRatio = windSpeed / 200;
  windDegrees = weather.wind.deg;
  //Visibility & Humidity
  visibility = map(weather.visibility, 0, 10000, 0, 255);
  humidity = weather.main.humidity;
}
