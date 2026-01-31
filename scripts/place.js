// FOOTER DATES
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// STATIC WEATHER VALUES
const temperature = 10; // °C
const windSpeed = 10; // km/h

document.getElementById("temperature").textContent = temperature;
document.getElementById("windspeed").textContent = windSpeed;

// WIND CHILL FUNCTION (Metric)
function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

// APPLY CONDITIONS
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed) + " °C";
}

document.getElementById("windchill").textContent = windChill;
