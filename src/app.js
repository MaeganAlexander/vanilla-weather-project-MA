function displayTemperature(response) {
  console.log(respinse.data);
}
let apiKey = "5fd472b7acba333cd8a035ea85a0d4d4c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?
g=London&appid=$(appKey)&units=metric`;

console.log(apiUrl); // can remove later
axios.get(url).then(displayTemperature);
