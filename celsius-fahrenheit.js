function celsiusToFahrenheit(c) {
  return (c * 9 / 5) + 32;
}
function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}
const cTemp = 60;  
const fTemp = 45;  

console.log(`${cTemp}°C is ${celsiusToFahrenheit(cTemp)} °F`);
console.log(`${fTemp}°F is ${fahrenheitToCelsius(fTemp)}°C`);
