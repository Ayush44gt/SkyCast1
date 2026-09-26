console.log("Hello");
// API_KEY is supplied by config.js (gitignored) — see config.example.js

function renderWeatherInfo(data) {
  let newPara = document.createElement("p");
  newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
  document.body.appendChild(newPara);
}

async function showWeather() {
  try {
    let city = "mandsaur";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    console.log("Weather -> ", data);

    renderWeatherInfo(data);
  } catch (err) {
    console.warn(err);
  }
}



function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("No geolocation Support available");
  }
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let longi = position.coords.longitude;

  console.log(lat);
  console.log(longi);
}
