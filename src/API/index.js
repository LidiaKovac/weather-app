import countryCodes from "./countryCode.json";
const URL = "http://api.openweathermap.org/";
const { REACT_APP_WEATHER_API_KEY } = process.env;
export const fetchWeather = async (city, country) => {
  // city && country => type string
  let res = await fetch(URL + `geo/1.0/direct?q=${city},${country}&appid=${REACT_APP_WEATHER_API_KEY}`);
  let [{ lat, lon }] = await res.json();
  let resWeather = await fetch(URL + `data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${REACT_APP_WEATHER_API_KEY}&units=metric`);
  let weather = await resWeather.json();
  console.log("w", weather);
  weather.city.country = countryCodes.filter((country) => country.code === weather.city.country)[0].name;
  return weather;
};
