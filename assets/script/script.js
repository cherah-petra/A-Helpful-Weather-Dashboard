const cityInput = document.getElementById("city-search");
const searchBtn = document.getElementById("searchBtn");
const apiKey = "55a126a1f25b56bfd7a324f409c7d7b4";
let lat;
let lon;

function getLatLong() {
  console.log("buttonClicked");
  const city = cityInput.value;
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
  if (!city) {
    alert("Please enter a valid string");
    return null;
  }
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //console.log("dataIs", data);
      lat = data[0].lat;
      lon = data[0].lon;
      console.log("Hello, here are your coordinates", lat, lon);
      getWeather();
    });
}

function getWeather() {
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data)
      //const temperature = data.main.temp;
      //const description = data.weather[0].description;
      // const wind = data.wind.speed;
      // const icon = data.weather[0].icon;
      // const humidity = data.main.humidity;

      // document.getElementById("temperature").textContent = temperature + " °C";
      // document.getElementById("description").textContent = description;
      // document.getElementById("wind").textContent = wind + " mph";
      // document
      //   .getElementById("icon")
      //   .setAttribute("src", `http://openweathermap.org/img/w/${icon}.png`);
      // document.getElementById("humidity").textContent = humidity + " %";
    });
}

// getWeather();

searchBtn.addEventListener("click", getLatLong);
