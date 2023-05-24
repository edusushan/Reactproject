import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime } from "../services/weatherService";
function TemperatureDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-cyan-300">
        <p></p>
        {details}
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          className="w-20"
        />
        <p className="text-4xl">{`${parseFloat(temp).toFixed(0)}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} />
            Humidity:
            <span className="font-medium ml-1">{`${humidity}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} />
            Wind speed:
            <span className="font-medium ml-1">{`${speed}km/h`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-2">
        <UilSun />
        Rise:
        <span className="font-medium">
          {formatToLocalTime(sunrise, timezone, "hh:mm a")}
        </span>
        <p className="font-light">|</p>
        <UilSunset />
        Set:
        <span className="font-medium">
          {formatToLocalTime(sunset, timezone, "hh:mm a")}
        </span>
        <p className="font-light">|</p>
        <UilArrowUp />
        Set:
        <span className="font-medium">{`${parseFloat(temp_max).toFixed(
          0
        )}° `}</span>
        <p className="font-light">|</p>
        <UilArrowDown />
        Set:
        <span className="font-medium">{`${parseFloat(
          temp_min
        ).toFixed()}°`}</span>
        <p className="font-light">|</p>
      </div>
    </div>
  );
}

export default TemperatureDetails;
