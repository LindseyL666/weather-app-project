let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let currentDay = days[now.getDay()];

let currentDate = [now.getDate()];
let currentMonth = [now.getMonth()];

let h2 = document.querySelector("h2");
h2.innerHTML = `${currentMonth} / ${currentDate} / ${currentDay}, ${hours}:${minutes}`;

function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = input.value;
}
let form = document.querySelector("form");
form.addEventListener("submit", searchCity);

function showTemp(response) {
  console.log(response.data.name);

  document.querySelector("#city-input").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#Humidity").innerHTML = response.data.main.humidity;
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}
function search(city) {
  let apiKey = `2e12a711f2f831da62ed252aca53a6a5`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

let searchForm = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
