var feed = new Instafeed({
  get: 'user',
  userId: '303571919',
  accessToken: '303571919.1d02b8d.e35a0e70474c4902ad54cd6957560729',
  resolution: 'standard_resolution',
  limit: 15,
  template: '<a target="_blank" class="col-4 p-1 mt-2 instaCrop" href="{{link}}"><img class="instaImage" src="{{image}}"/><p class="likes" style="font-size:15px;"><i class="far fa-heart mr-1" style="font-size:10px;"></i>{{likes}}</p></a>'
});
feed.run();





window.onload = function(){
    var animation = anime({
    targets: '.st0',
    points: [
      { value: ['105,110 0,110 0,0 42.78,0 105,0 ']},
      { value: ['210,110 105,110 105,0 147.78,0 210,0 ']},
    ],
    easing: 'easeInOutSine',
    duration: 2000,
    loop: false
  });
  animation.finished.then(displayLogo);
};




function displayLogo(){
  document.querySelector("#logo").style.visibility = "visible";
  document.querySelector("#logo").classList.add('animated', 'fadeIn');
}

//add an event listener that looks for scroll event
window.addEventListener('scroll', function(e) {
  //load all id names of sections/divs into array
  var locA = ['landing', 'skills', 'portfolio', 'about'];
  //create another empty array to be filled
  var loc = [];
  //loop through all items in locA
  for (var i = 0; i < locA.length; i++) {
    //create div and set it to get element of current count
    var div = document.getElementById(locA[i]);
    //set temp to get properties of top, bottom, width, etc
    var temp = div.getBoundingClientRect();
    //add a new item in array with all that data to be called below when needed
    loc.push(temp);
  }
  //if landing.top (the top of the landing element) is greater than -2
  //i.e between 0 & -2 do the following
  if (loc[0].top > -2) {
    //set navbar background to transparent, logo to blue and set home nav-link to transparent background
    document.querySelector(".myNav").style.backgroundColor = "transparent";
    //document.querySelectorAll(".nav-link")[0].style.backgroundColor = "transparent";
    document.querySelector(".nav-link").style.backgroundColor = "transparent";
  }
  //once landing.top moves past -2
  if (loc[0].top < -2) {
    //clears all navbar-link backgrounds
    for (var i = 0; i < 5; i++) {
      document.querySelectorAll(".nav-link")[i].style.backgroundColor = "transparent";
    }
    //sets navbar background to blue and logo to white
    document.querySelector(".myNav").style.backgroundColor = "#0F3C87";
    //document.querySelector("#navLogo").style.mixBlendMode = "multiply";
    //sets 1st selection in querySelector to coloured background
    document.querySelectorAll(".nav-link")[0].style.backgroundColor = "#7D8D99";
  }
    //if skills.top goes under 70px from top of screen (about size of navbar)
  if (loc[1].top < 70) {
    //clears all navbar-link backgrounds
    for (var i = 0; i < 5; i++) {
      document.querySelectorAll(".nav-link")[i].style.backgroundColor = "transparent";
    }
    //sets 2nd selection in querySelector to coloured background
    document.querySelectorAll(".nav-link")[1].style.backgroundColor = "#7D8D99";
  }
  //if portfolio.top goes under 70px from top of screen (about size of navbar)
  if (loc[2].top < 70) {
    //clears all navbar-link backgrounds
    for (var i = 0; i < 5; i++) {
      document.querySelectorAll(".nav-link")[i].style.backgroundColor = "transparent";
    }
    //sets 3rd selection in querySelector to coloured background
    document.querySelectorAll(".nav-link")[2].style.backgroundColor = "#7D8D99";
  }
  //if aboutBar.top goes under 70px from top of screen (about size of navbar)
  if (loc[3].top < 70) {
    //clears all navbar-link backgrounds
    for (var i = 0; i < 5; i++) {
      document.querySelectorAll(".nav-link")[i].style.backgroundColor = "transparent";
    }
    //sets 4th selection in querySelector to coloured background
    document.querySelectorAll(".nav-link")[3].style.backgroundColor = "#7D8D99";
  }
  //if bottom of aboutBar goes under 170px from top of screen OR the screen is less than 70px from the bottom
  if (loc[3].bottom < 170 || (window.innerHeight + window.scrollY) > document.body.offsetHeight-70) {
    //clears all navbar-link backgrounds
    for (var i = 0; i < 5; i++) {
      document.querySelectorAll(".nav-link")[i].style.backgroundColor = "transparent";
    }
    //sets 4th selection in querySelector to coloured background
    document.querySelectorAll(".nav-link")[4].style.backgroundColor = "#7D8D99";
  }
});



/* Set the width of the side navigation to 250px */
function nav() {
  var nav = document.querySelector(".sideNav");
  nav.classList.toggle("navOpen");

  var menu = document.querySelector(".menu");
  menu.classList.toggle("menuO");
}
