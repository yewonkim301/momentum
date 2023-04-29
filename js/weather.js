
const API_KEY = "7cbc9a1c0c46ee940fbf5355a96765b9";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather__city");
        const icon = document.querySelector("#weather__icon img");        
        const weather = document.querySelector("#weather__info");
        const temperature = document.querySelector("#weather__temp");
        city.innerText = data.name;
        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        weather.innerText = `${data.main.temp}°   ${data.weather[0].description}`;
        temperature.innerText = `최고: ${data.main.temp_max}° / 최저: ${data.main.temp_min}°`;
    });
}
function onGeoError() {
    alert("Can't find you😢");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);