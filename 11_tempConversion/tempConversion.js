const convertToCelsius = function(temp) {
  let celsiusTemp = 5 / 9 * (temp - 32);
  celsiusTemp = Math.round(celsiusTemp * 10) / 10;
  return celsiusTemp;
};

const convertToFahrenheit = function(temp) {
  let fahrenheitTemp = 9 / 5 * temp + 32;
  fahrenheitTemp = Math.round(fahrenheitTemp * 10) / 10;
  return fahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
