const cityInput = document.getElementById("citySearch");
const searchBtn = document.getElementById("searchBtn");
const apiKey = "55a126a1f25b56bfd7a324f409c7d7b4";
let lat;
let lon;

function getLatLon() {
  console.log("buttonClicked");
  const city = cityInput.value;
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
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
      console.log("Here are your coordinates:", lat, lon);
      getWeather();
    });
}

function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);
      const weather = data.current.weather[0].description;
      console.log("weather", weather);
      const temperature = data.current.temp;
      console.log("temperature", temperature);
      const wind = data.current.wind_speed;
      console.log("wind", wind);
      const humidity = data.current.humidity;
      console.log("humidity", humidity);

      const dailyTemp = data.daily[1].temp.day;
      const dailyWind = data.daily[1].wind_speed;
      const dailyHumid = data.daily[1].humidity;

      const dailyTemp2 = data.daily[2].temp.day;
      const dailyWind2 = data.daily[2].wind_speed;
      const dailyHumid2 = data.daily[2].humidity;

      const dailyTemp3 = data.daily[3].temp.day;
      const dailyWind3 = data.daily[3].wind_speed;
      const dailyHumid3 = data.daily[3].humidity;

      const dailyTemp4 = data.daily[4].temp.day;
      const dailyWind4 = data.daily[4].wind_speed;
      const dailyHumid4 = data.daily[4].humidity;

      const dailyTemp5 = data.daily[5].temp.day;
      const dailyWind5 = data.daily[5].wind_speed;
      const dailyHumid5 = data.daily[5].humidity;

      document.getElementById("temperature").textContent = temperature + " °C";
      document.getElementById("wind").textContent = wind + " km/h";
      document.getElementById("humidity").textContent = humidity + " %";

      document.getElementById("dailyTemp").textContent = dailyTemp + " °C";
      document.getElementById("dailyHumid").textContent = dailyHumid + " %";
      document.getElementById("dailyWind").textContent = dailyWind + " km/h";

      document.getElementById("dailyTemp2").textContent = dailyTemp2 + " °C";
      document.getElementById("dailyHumid2").textContent = dailyHumid2 + " %";
      document.getElementById("dailyWind2").textContent = dailyWind2 + " km/h";

      document.getElementById("dailyTemp3").textContent = dailyTemp3 + " °C";
      document.getElementById("dailyHumid3").textContent = dailyHumid3 + " %";
      document.getElementById("dailyWind3").textContent = dailyWind3 + " km/h";

      document.getElementById("dailyTemp4").textContent = dailyTemp4 + " °C";
      document.getElementById("dailyHumid4").textContent = dailyHumid4 + " %";
      document.getElementById("dailyWind4").textContent = dailyWind4 + " km/h";

      document.getElementById("dailyTemp5").textContent = dailyTemp5 + " °C";
      document.getElementById("dailyHumid5").textContent = dailyHumid5 + " %";
      document.getElementById("dailyWind5").textContent = dailyWind5 + " km/h";
      
      const iconToday = "http://openweathermap.org/img/wn/" + data.daily[0].weather[0].icon + ".png";
      $('#iconToday').attr('src', iconToday);
      const iconTomorrow = "http://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + ".png";
      $('#icon-tomorrow').attr('src', iconTomorrow);
      const iconDay3 = "http://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + ".png";
      $('#icon-day3').attr('src', iconDay3);
      const iconDay4 = "http://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + ".png";
      $('#icon-day4').attr('src', iconDay4);
      const iconDay5 = "http://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + ".png";
      $('#icon-day5').attr('src', iconDay5);
      const iconDay6 = "http://openweathermap.org/img/wn/" + data.daily[5].weather[0].icon + ".png";
      $('#icon-day6').attr('src', iconDay6);
    });
}

searchBtn.addEventListener("click", getLatLon);




// Save and display search results to local

function saveSearch() {
  var searchResults = document.getElementById("citySearch").value;
  var previousSearches = JSON.parse(localStorage.getItem("searchHistory")) || [];
  previousSearches.push(searchResults);
  localStorage.setItem("searchHistory", JSON.stringify(previousSearches));
  var searchDiv = document.createElement("div");
  searchDiv.textContent = searchResults;
  document.getElementById("search-history").appendChild(searchDiv);
}

// Display past search results on page load

function loadSearchHistory() {
  var previousSearches = JSON.parse(localStorage.getItem("searchHistory"));
  if (previousSearches) {
    previousSearches.forEach(function(search) {
      var searchDiv = document.createElement("div");
      searchDiv.textContent = search;
      searchDiv.classList.add("search-history-item"); 
      document.getElementById("search-history").appendChild(searchDiv);
      searchDiv.addEventListener("click", function() { 
        document.getElementById("citySearch").value = search; 
        getLatLon();
      });
    });
  }
}


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("searchBtn").addEventListener("click", saveSearch);
  loadSearchHistory();
});


// Display current date and each subsequent date

$(document).ready(function() {
  var todayDate = dayjs().format('MMMM D, YYYY');
  $('#todayDate').text(todayDate);
  var tomorrow = dayjs().add(1, 'day').format('MMMM D, YYYY');
  $('#tomorrow').text(tomorrow);
  var dayThree = dayjs().add(2, 'day').format('MMMM D, YYYY');
  $('#dayThree').text(dayThree);
  var dayFour = dayjs().add(3, 'day').format('MMMM D, YYYY');
  $('#dayFour').text(dayFour);
  var dayFive = dayjs().add(4, 'day').format('MMMM D, YYYY');
  $('#dayFive').text(dayFive);
  var daySix = dayjs().add(5, 'day').format('MMMM D, YYYY');
  $('#daySix').text(daySix);

});
