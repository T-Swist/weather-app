document.getElementById("userSearchCityForm").addEventListener('submit', (e) => {
  e.preventDefault();
  let userInputedCity = document.getElementById("userInputedCity");
  let cityName;

  cityName = userInputedCity.value;
//  console.log(cityName);
let fetchData = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5f33b88743fe279e49ac0f14ec53b8ce`);

fetchData.then(res => 
      res.json()).then(storeData => {
        //  console.log(storeData)

        let arealatitude = storeData.coord.lat;
        let arealongtitude = storeData.coord.lon;

        let fetchedCity = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${arealatitude}&lon=${arealongtitude}&appid=5f33b88743fe279e49ac0f14ec53b8ce`)

        fetchedCity.then(res => 
          res.json()).then(storeCity => {
             console.log(storeCity)
             let tempetureValue = storeCity.main.temp;
             let tempInCelsious = Math.round(tempetureValue - 273.15); 
             let humidityValue = storeCity.main.humidity;
             let windSpeedValue = storeCity.wind.speed;
             let tempetureIcon = storeCity.weather[0].icon;
             let weatherDescription = storeCity.weather[0].description;

            document.getElementById("displayCityName").textContent = `Weather for ${cityName}`;

            document.getElementById("weatherDescription").textContent = weatherDescription;

            document.getElementById("tempetureValue").textContent = `${tempInCelsious}°C`;

            document.getElementById("tempetureIcon").src = `http://openweathermap.org/img/w/${tempetureIcon}.png`;

            document.getElementById("humidityValue").textContent = `${humidityValue}%`;

            document.getElementById("windSpeedValue").textContent = `${windSpeedValue}km/h`;

          })

          // return displayNeededData = 
      })

      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
      });

})


