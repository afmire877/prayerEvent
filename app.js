let lat, long;
// const longitude = document.querySelector('#longitude'); 
// const latitude = document.querySelector('#latitude'); 
// const locationDisplay = document.querySelector('.locationDisplay'); 
// const loc = document.querySelector('#loc');

// const apiKey = 'AIzaSyBQF1bawnacI1cQKf4HVwK-1yqAJ8JTt9U'

// const Fajr = document.querySelector('.fajr-time');
// const Dhuhr = document.querySelector('.duhr-time');
// const Asr = document.querySelector('.asr-time');
// const Maghrib = document.querySelector('.magrib-time');
// const Isha = document.querySelector('.isha-time');




const d = new Date();


export function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    if(typeof lat === 'number') {
    	console.log(lat, long)
	    longitude.innerHTML = `${long}`;
	    latitude.innerHTML = `${lat}`;
	    locationDisplay.style.display = 'block'

	    let url = `http://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${long}&method=2&month=${d.getMonth() + 1}&year=${d.getFullYear()}`;
	    console.log(url)
	    loadData(url);
    }

  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }

}

export function showPosition(position) {
  lat = position.coords.latitude;
  long = position.coords.longitude;
}




export function loadData(url){


fetch(url)
.then((response) => {
	if(response.ok){
		return response.json()
	}
})
.then(data => {
	const index = d.getDate() - 1;
	let timings = data.data[index].timings
	for (let salah in timings) {
		console.log(salah +':' + timings[salah])


	}
	
	Fajr.innerHTML = timings['Fajr'].split(' ')[0];
	Dhuhr.innerHTML = timings['Dhuhr'].split(' ')[0];
	Asr.innerHTML = timings['Asr'].split(' ')[0];
	Maghrib.innerHTML = timings['Isha'].split(' ')[0];
	Isha.innerHTML = timings['Isha'].split(' ')[0];



})

}















