import { DateTime } from "luxon";

const API_KEY = "10201ff743875a037cfeeb4fccdcea69";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// https://api.openweathermap.org/data/3.0/onecall?
// lat={lat}&lon={lon}&exclude={part}&appid={API key}

const getWeatherData = (infoType, searchParmas) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParmas, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lon, lat },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;
  const { main: details, icon } = weather[0];
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    weather,
    speed,
  };
};

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  //
  return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedcurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);
  const { lat, lon } = formatCurrentWeather;

  const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);
  return { ...formattedcurrentWeather, ...formattedForecastWeather };
};

function formatToLocalTime(
  secs,
  timezone,
  format = "cccc,dd,LLL,yyyy'|Local time: 'hh:mm a"
) {
  return DateTime.fromSeconds(secs ? secs : 1684824232)
    .setZone(timezone)
    .toFormat(format);
}

// const iconUrlFromCode = (code) =>
//   `http://openweathermap.org/img/wn/${code}@2x.png`;
export default getFormattedWeatherData;
export { formatToLocalTime };
