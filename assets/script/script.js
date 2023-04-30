function getWeather() {
    const apiKey = "55a126a1f25b56bfd7a324f409c7d7b4"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&units=metric&appid=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const wind = data.wind.speed;
        const icon = data.weather[0].icon;
        const humidity = data.main.humidity;
  
        document.getElementById("temperature").textContent = temperature + " °C";
        document.getElementById("description").textContent = description;
        document.getElementById("wind").textContent = wind + " mph";
        document.getElementById("icon").setAttribute("src", `http://openweathermap.org/img/w/${icon}.png`);
        document.getElementById("humidity").textContent = humidity + " %";

      })

  }
  
  getWeather();
