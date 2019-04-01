let lat, long;
let constructed = false;
const d = new Date();

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  lat = position.coords.latitude;
  long = position.coords.longitude;
}



function constructUrl(){
	getLocation();
	let url = `http://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${long}&method=2&month=${d.getMonth()}&year=${d.getFullYear()}`;
	console.log(url)
	constructed = true;
	
}


function loadData(){
	if( constructed == true){
		var XHR = new XMLHttpRequest();

		XHR.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){

				 document.getElementById("demo").innerHTML = XHR.responseText;
			}

		}

		XHR.open('GET', url, true);
		XHR.send();
	}
}






window.addEventListener("load", constructUrl);
loadData();
// window.addEventListener("loadData", loadData);















