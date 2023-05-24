import "./App.css";
// import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButton from "./component/TopButton";
import Input from "./component/Input";
import TimeandLocation from "./component/TimeandLocation";
import TemperatureDetails from "./component/TemperatureDetails";
// import Forecast from "./component/Forecast";
// import getWeatherData from "./services/weatherService";
import getFormattedWeatherData from "./services/weatherService";
import { useState, useEffect } from "react";
function App() {
  const [query, setquery] = useState({ q: "pokhara" });
  const [units, setUnits] = useState("metric");
  const [Weather, setWeather] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButton setquery={setquery} />
      <Input setquery={setquery} setUnits={setUnits} units={units} />
      <TimeandLocation weather={Weather} />
      <TemperatureDetails weather={Weather} />
      {/* <Forecast title="Hourly Forecast" />
      <Forecast title="Daily Forecast" /> */}
    </div>
  );
}

export default App;
