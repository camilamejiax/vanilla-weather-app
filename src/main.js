let apiKey = "7474fc14b19a5b425bb49dcabc42f77b";
let apiUrl =
  `api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

  function displayTemperature(response) {
      let temperatureElement = document.querySelector("#temperature");
      temperatureElement.innerHTML = Math.round(response.data.main.temp);

      let cityElement = document.querySelector("#city");
      cityElement.innerHTML = response.data.name;

      let descriptionElement = document.querySelector("#description");
      descriptionElement.innerHTML = response.data.weather[0].description;

      let humidityElement = document.querySelector("#humidity");
      humidityElement.innerHTML = response.data.main.humidity;

      let windElement = document.querySelector("#wind");
      windElement.innerHTML = Maath.round(response.data.main.wind.speed);
  }

  axios.get(url).then(displayTemperature);