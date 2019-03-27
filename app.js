
var long, lat;
const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

const d = new Date();

function showPosition(position) {
  lat = position.coords.latitude;
  long = position.coords.longitude;
}
getLocation()
let url = `http://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${long}&method=2&month=${d.getMonth}&year=${d.getFullYear}`
// API fetch 

var XHR = new XMLHttpRequest();

XHR.onstatereadychange = function(){
	console.log(responseText);
}
XHR.open('GET', url, true);
XHR.send();











