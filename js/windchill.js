//INPUT 
let temperature = parseFloat(document.getElementById("temperature").textContent);
let windspeed = parseFloat(document.getElementById("windSpeed").textContent);
//PROCESSING
let windchill = "N/A";
if (temperature <= 50 && windspeed > 3) {
    windchill = windChill(temperature, windspeed) + "&deg;F";
}
//OUTPUT
document.getElementById("windchill").innerHTML = windchill;
//windchill calculation function
function windChill(tempF, speed) {
    windchill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, .16)) + (0.4275 * tempF * Math.pow(speed, .16));
    return windchill.toFixed(0);
}