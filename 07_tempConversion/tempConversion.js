const convertToCelsius = function(F) {
  let num =(F-32)/1.8;
  return Math.round(num*10)/10;
};

const convertToFahrenheit = function(C) {
  let result = (C*1.8)+32;
  return Math.round(result*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

