function formateDate(timestamp) {
  let date = newDate(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = day.getDay();
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data); // may be reomved later date.
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("icon");
  temperatureElement.inneHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHtml = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formateDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);

  getForecast(response.data.coord);
}
let apiKey = "5fd472b7acba333cd8a035ea85a0d4d4c";
let city = "London"; // may be removed at a laer date.
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?
g=London&appid=$(appKey)&units=metric`;

console.log(apiUrl); // can remove later
axios.get(url).then(displayTemperature);
