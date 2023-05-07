const cityInput = document.getElementById("city-search");
const searchBtn = document.getElementById("searchBtn");
const apiKey = "55a126a1f25b56bfd7a324f409c7d7b4";
let lat;
let lon;

function getLatLon() {
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
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);
      const weather = data.current.weather.description;
      console.log("weather", weather);
      const icon = data.current.weather.icon;
      console.log("icon", icon);
      const temperature = data.current.temp;
      console.log("temperature", temperature);
      const wind = data.current.wind_speed;
      console.log("wind", wind);
      const humidity = data.current.humidity;
      console.log("humidity", humidity);
      const dailyTemp = data.daily.temp;
      console.log("dailyTemp", dailyTemp);
      document.getElementById("temperature").textContent = temperature + " °C";
      document.getElementById("wind").textContent = wind + " km/h";
      document.getElementById("humidity").textContent = humidity + " %";
      document.getElementById("icon").textContent = icon;
      document.getElementById("dailyTemp").textContent = dailyTemp;
    });
}

// function getForecast() {
// const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=${apiKey}`;
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("data", data);
//     const dailyTime = data.daily.dt;
//     console.log("dailyTime", dailyTime);
//     const dailyTemp = data.daily.temp;
//     console.log("dailyTemp", dailyTemp);
//     document.getElementById("dailyTime").textContent = dailyTime;
//     document.getElementById("dailyTemp").textContent = dailyTemp;

//   });
// }




searchBtn.addEventListener("click", getLatLon);

// function getCurrentWeather(getLatLon){
//   var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${getLatLon}&appid=${apiKey}&units=imperial`;
//   fetch(apiUrl)
//   .then(function (response) {
//     if (!response.ok) {
//       throw response.json();
//     }
//     return response.json();
//     })
//   .then (function (data) {
//     var Des = document.createElement("h5")
//     document.getElementById("Des").innerHTML = "";
//     Des.textContent = data.weather[0].description
//     document.getElementById("Des").append(Des)
  
//   }
