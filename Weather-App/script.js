let weather = {
  'apiKey': 'b8bbcf721ea6b425f8d56db3e6097e0b',
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeather(data));
    localStorage.setItem('key', storedData )
  },


  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector('.city').innerHTML = 'Weather in ' + name;
    document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector('.description').innerHTML = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector('.humidity').innerHTML = `Humidity ${humidity} %`;
    document.querySelector('.wind').innerHTML = ` Wind speed : ${speed} km/h`;
    document.querySelector('.weather').classList.remove('loading');
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/? " + name + "')";
    

  },

  search: function () {
    this.fetchWeather(document.querySelector('.search-bar').value);
  }
}

document.querySelector('.search button')
  .addEventListener('click', function () {
    weather.search();
  });

document.querySelector('.search-bar').addEventListener('keyup', function (event) {
  if (event.key == "Enter") {
    weather.search();
  }
})

weather.fetchWeather('lahore');
let storedData =
      JSON.parse(localStorage.getItem(city))[0].city.toLowerCase() == inputField.value.toLowerCase() ? JSON.parse(localStorage.getItem(city))[0]: false;
    if (storedData) {
      wrapper.querySelector(".temp").innerText = storedData.temp;
      wrapper.querySelector(".descriptioner").innerText = storedData.description;
      wrapper.querySelector("..city").innerText = storedData.city
      wrapper.querySelector(".wind").innerText = storedData.speed;
      wrapper.querySelector(".humidity").innerText = storedData.humidity;
    } else {
      requestApi(inputField.value);
    }