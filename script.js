document.getElementById("userSearchCityForm").addEventListener('submit', (e) => {
  e.preventDefault();
  let userInputedCity = document.getElementById("userInputedCity");
  let cityName;

  cityName = userInputedCity.value;
// console.log(cityName);
let fetchData = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5f33b88743fe279e49ac0f14ec53b8ce`);

fetchData.then(res => 
      res.json()).then(storeData => {
        // console.log(storeData)

        let arealatitude = storeData.coord.lat;
        let arealongtitude = storeData.coord.lon;

        let fetchedCity = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${arealatitude}&lon=${arealongtitude}&appid=5f33b88743fe279e49ac0f14ec53b8ce`)

        fetchedCity.then(res => 
          res.json()).then(storeCity => {
             console.log(storeCity)
             let tempetureValue = storeCity.main.temp;
             let humidityValue = storeCity.main.humidity;
             let windSpeedValue = storeCity.wind.speed;

            document.getElementById("displayCityName").textContent = `Weather for ${cityName}`;

            document.getElementById("tempetureValue").textContent = tempetureValue;

            document.getElementById("displayCityName").textContent = `Weather for ${cityName}`;

            document.getElementById("humidityValue").textContent = humidityValue;

            document.getElementById("windSpeedValue").textContent = windSpeedValue;







          })

          // return displayNeededData = 
      })

      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
      });



})


cityName = userInputedCity.value;
console.log(cityName);
let fetchData = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5f33b88743fe279e49ac0f14ec53b8ce`);

fetchData.then(res => 
      res.json()).then(storeData => {
        console.log(storeData)

        let arealatitude = storeData.coord.lat;
        let arealongtitude = storeData.coord.lon;

        let fetchedCity = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${arealatitude}&lon=${arealongtitude}&appid=5f33b88743fe279e49ac0f14ec53b8ce`)

        fetchedCity.then(res => 
          res.json()).then(storeCity => {
            // console.log(storeCity)
          })

          // return displayNeededData = 
      })

      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
      });








































//       const url = 
// 	'https://api.openweathermap.org/data/2.5/weather'; 
// const apiKey = 'f00c38e0279b7bc85480c3fe775d518c'; 
// $(document).ready(function () { 
// 	getWeather('Noida'); 
// }); 
// function getWeather() { 
// 	const cityName = $('#city-input').val() || 'Noida'; 
// 	const fullUrl = `${url}?q=${cityName}&appid=${apiKey}&units=metric`; 
// 	fetch(fullUrl) 
// 		.then(response => response.json()) 
// 		.then(data => { 
// 			if (data.cod === 200) { 
// 				displayWeather(data); 
// 			} else { 
// 				alert('City not found. Please try again.'); 
// 			} 
// 		}) 
// 		.catch(error => console.error('Error fetching weather data:', error)); 
// } 
// function displayWeather(data) { 
// 	$('#city-name').text(`Weather in ${data.name}`); 
// 	$('#date').text(moment().format('MMMM Do YYYY, h:mm:ss a')); 
// 	$('#temperature').html(`${data.main.temp}°C`); 
// 	$('#description').text(data.weather[0].description); 
// 	$('#wind-speed').html(`Wind Speed: ${data.wind.speed} m/s`); 
// 	$('#weather-icon').attr('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`); 
// 	$('#weather-info').removeClass('d-none'); 
// 	$('#extra-info').html(` 
// 		<p style="font-weight: bold; font-size: 18px; color: white;">Humidity: ${data.main.humidity}%</p> 
// 		<p style="font-weight: bold; font-size: 18px; color: white;">Pressure: ${data.main.pressure} hPa</p> 
// 	`); 
// 	addWeatherEffects(data.weather[0].main); 
// } 
// function addWeatherEffects(weatherMain) { 
// 	const extraInfo = $('#extra-info'); 
// 	switch (weatherMain.toLowerCase()) { 
// 		case 'rain': 
// 			extraInfo.append('<p class="text-info fw-bold"> 
// 				<i class="fas fa-umbrella"></i> 
// 				Rainy day, bring an umbrella!</p>'); 
// 			break; 
// 		case 'clear': 
// 			extraInfo.append('<p class="text-success fw-bold"> 
// 				<i class="fas fa-sun"></i> Cle 
// 				ar skies, enjoy the sunshine!</p>'); 
// 			break; 
// 		case 'clouds': 
// 			extraInfo.append('<p class="text-warning fw-bold"> 
// 				<i class="fas fa-cloud"></i> Part 
// 				ly cloudy, a comfortable day.</p>'); 
// 			break; 
// 		default: 
// 			extraInfo.append('<p class="text-warning fw-bold"> 
// 				<i class="fas fa-question"></i> 
// 				Weather conditions may vary.</p>'); 
// 	} 
// } 

      