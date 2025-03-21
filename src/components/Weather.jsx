import { useState } from "react";
import useWeatherData from "../provider/WeatherData";
import CurrentWeather from "./CurrentWeather";
import CurrentConditions from "./CurrentConditions";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";

const Weather = () => {
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("metric");
  const { weatherData, error, loading, fetchWeatherData } = useWeatherData();

  return (
    <>
      <div className="flex flex-col">
        {/* Searchbar */}
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-2 mt-2">
          <input className="input input-info" type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" />
          <label className="flex items-center space-x-2">
            <span>C°</span>
            <input
              type="checkbox"
              id="unit"
              className="toggle"
              checked={unit === "us"}
              onChange={() => setUnit(unit === "metric" ? "us" : "metric")}
            />
            <span>F°</span>
          </label>
          <button onClick={() => fetchWeatherData(city, unit)} className="btn btn-info btn-outline">Get Weather</button>
          </div>
          
        {/* Row 1 with current weather data and hourly forecast -- on mobile current weather and forecast below */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-2">
          {loading && <p>Loading...</p>}
          {weatherData && <CurrentWeather weatherData={weatherData} unit={unit} />}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 mt-2">
          {weatherData && <CurrentConditions weatherData={weatherData} unit={unit} />}
        </div>
        {/* Row 2 with conditions and daily forecast -- on mobile conditions and below daily forecast */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-2">
          {weatherData && <HourlyForecast weatherData={weatherData} unit={unit} />}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 mt-2">
          {weatherData && <DailyForecast weatherData={weatherData} unit={unit} />}
        </div>
      </div>
    </>
  )
}

export default Weather;