const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3658192&appid=7c099010b00877eda64f9e3426c2a561";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('temperaturePreston').textContent = jsObject.main.temp;
    document.getElementById('desPreston').textContent = jsObject.weather[0].description;
    document.getElementById('humidityPreston').textContent = jsObject.main.humidity;
    document.getElementById('windSpeedPreston').textContent = jsObject.wind.speed;
      //Windchill Calc
      //INPUT 
      let temperature = parseFloat(jsObject.main.temp);
      let windspeed = parseFloat(jsObject.wind.speed);
      //PROCESSING
      let windchill = "N/A";
      if (temperature <= 50 && windspeed > 3) {
          windchill = windChill(temperature, windspeed) + "&deg;F";
      }
      //OUTPUT
      document.getElementById("windChill").innerHTML = windchill;
      //windchill calculation function
      function windChill(tempF, speed) {
          windchill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, .16)) + (0.4275 * tempF * Math.pow(speed, .16));
          return windchill.toFixed(0);
      }

});
