async function getWeather() {
  let city = document.getElementById("city").value;

  let apiKey = "d41c39385e6bbe3e389b573aa29bb20e";  // replace this
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    let response = await fetch(url);
    let data = await response.json();

    if (data.cod === "404") {
      document.getElementById("result").innerHTML = "City not found!";
      return;
    }

    let temp = data.main.temp;
    let weather = data.weather[0].description;

    document.getElementById("result").innerHTML =
      `Temperature: ${temp}°C <br> Condition: ${weather}`;
  } catch (error) {
    document.getElementById("result").innerHTML = "Error fetching data!";
  }
}