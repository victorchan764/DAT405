//http://api.openweathermap.org

//Use a text/string object to assign the city we would like to know the weather of
let getLocation1 = "London";
let getLocation2 = "Athens";
let getLocation3 = "Shanghai";
//The API key has to be given by the openweathermap.org website (for free / per account)
let apiKey = "6b4a465ac9894c63172283b3f271c20c";
//This variable will store the JSON weather data
let weather1, weather2, weather3;
let size1, size2, size3;


//The preload function is executed before initializing the code in setup
//Loads any related data or media files
function preload() {
  //The URL is formatted according to the documentation provided by the developers in:
  //http://api.openweathermap.org
  //The text/string object is formatted with the location we want to use, and our own API key
  let url1 = "http://api.openweathermap.org/data/2.5/weather?q="+getLocation1+"&units=metric&appid="+apiKey;
  let url2 = "http://api.openweathermap.org/data/2.5/weather?q="+getLocation2+"&units=metric&appid="+apiKey;
  let url3 = "http://api.openweathermap.org/data/2.5/weather?q="+getLocation3+"&units=metric&appid="+apiKey;

  //The URL is sent to the loadJSON that returns the data to the weather variable
  weather1 = loadJSON(url1);
  weather2 = loadJSON(url2);
  weather3 = loadJSON(url3);
}

function setup() {
  console.log(weather1, weather2, weather3); //Return all JSON data'
  //console.log("Location: " + getLocation) //Show the location we are searching
  //console.log("Temperature: " + weather.main.temp + "°C"); //Show location's conditions (temperature)
  //console.log("Temperature (min): " + weather.main.temp_min + "°C"); //Minimum temperature
  //console.log("Temperature (max): " + weather.main.temp_max + "°C"); //Maximum temperature
  //console.log("Humidity: " + weather.main.humidity); //Humidity
  //console.log("Pressure: " + weather.main.pressure); //Pressure

  //Display temperature information on the screen
  createCanvas(1000, 1000);
  background(160);
  textAlign(CENTER);
  textSize(18);
  //text("Currrent temperature in London:" + weather1.main.temp + "°C", width/2, height/4);
  //text("Currrent Humidity in Athens:" + weather2.main.humidity + "%", width/2, height/2);
  //text("Currrent Wind speed in Shanghai:" + weather3.wind.speed + "MPH", width/2, height/2+height/4);
  noLoop();
}

function draw(){
  //let tempLondon = weather1.main.temp
    //let tempAthens = weather2.main.temp
      //let tempShanghai = weather3.main.temp

    //ellipse(200, 200, tempLondon, tempLondon);
    //text("London:" + weather1.main.temp + "°C",200, 200);
    //ellipse(400, 400, tempAthens, tempAthens);
    //text("Athens:" + weather2.main.temp + "°C",400, 400);
    //ellipse(600, 600, tempShanghai, tempShanghai);
    //text("Shanghai:" + weather3.main.temp + "°C",600, 600);

    size1 = map(weather1.main.temp, -5, 40, 10, 100);
    fill(map(weather1.main.temp,0, 20, 0, 255), 0, 0);
    ellipse(100, 100, size1, size1)
    fill(255);
    text(getLocation1, 100, 100);

    size2 = map(weather2.main.temp, -5, 40, 10, 100);
    fill(map(weather2.main.temp,0, 20, 0, 255), 0, 0);
    ellipse(200, 200, size2, size2)
    fill(255);
    text(getLocation2, 200, 200);

    size3 = map(weather3.main.temp, -5, 40, 10, 100);
    fill(map(weather3.main.temp,0, 20, 0, 255), 0, 0);
    ellipse(300, 300, size3, size3);
    fill(255);
    text(getLocation3, 300, 300);
  }
