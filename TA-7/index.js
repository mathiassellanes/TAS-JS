function convertToCelsius(temp) {
  let celsius = (temp - 32) * 5 / 9;

  console.log(celsius.toFixed(1));
}

function convertToFahrenheit(temp) {
  let fahrenheit = temp * 9 / 5 + 32;

  console.log(fahrenheit.toFixed(1));
}

convertToCelsius(100);
convertToFahrenheit(37.8);
