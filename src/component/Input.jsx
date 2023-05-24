import React, { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";

function Input({ setquery, units, setUnits }) {
  const [city, setCity] = useState("");
  const temperaturechange = (e) => {
    const selectedunit = e.currentTarget.name;
    if (units !== selectedunit) {
      setUnits(selectedunit);
    }
  };
  const searchclick = () => {
    if (city !== "") {
      setquery({ q: city });
    }
  };
  const mylocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setquery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="search the city.. "
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        ></input>

        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={searchclick}
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={mylocation}
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-white font-light transition ease-out hover:scale-125"
          onClick={temperaturechange}
        >
          &deg;C
        </button>
        <p className="text-white mx-1">| </p>
        <button
          name="imperial"
          className="text-white font-light transition ease-out hover:scale-125"
          onClick={temperaturechange}
        >
          &deg;F
        </button>
      </div>
    </div>
  );
}

export default Input;
