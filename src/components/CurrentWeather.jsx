import React from "react";

const CurrentWeather = ({ weatherData, unit }) => {
  const iconMap = {
    clearDay: "/icons/clear-day.svg",
    clearNight: "/icons/clear-night.svg",
    partlyCloudyDay: "/icons/partly-cloudy-day.svg",
    partlyCloudyNight: "/icons/partly-cloudy-night.svg",
    cloudy: "/icons/cloudy.svg",
    rain: "/icons/rain.svg",
    mist: "/icons/mist.svg",
    sunrise: "/icons/sunrise.svg",
    sunset: "/icons/sunset.svg",
    snow: "/icons/snow.svg",
    wind: "/icons/wind.svg",
    thunderstorm: "/icons/thunderstorm.svg",
    humidity: "/icons/humidity.svg",
    uvindex: "/icons/uv-index.svg",
    pressure: "/icons/barometer.svg",
  };

  let icon;

  switch (weatherData?.weatherData?.currentConditions?.icon) {
    case "clear-day":
      icon = iconMap.clearDay;
      break;
    case "clear-night":
      icon = iconMap.clearNight;
      break;
    case "partly-cloudy-day":
      icon = iconMap.partlyCloudyDay;
      break;
    case "partly-cloudy-night":
      icon = iconMap.partlyCloudyNight;
      break;
    case "cloudy":
      icon = iconMap.cloudy;
      break;
    case "rain":
      icon = iconMap.rain;
      break;
    case "mist":
      icon = iconMap.mist;
      break;
    default:
      icon = iconMap.clearDay;
  }

  console.log("Data", weatherData);

  const tempUnit = unit === "metric" ? "C°" : "F°";
  return (
    <div className="w-[98%] md:w-full bg-gradient-to-br from-gray-700 to-base-300 p-4 rounded-lg flex flex-col">
      <h2 className="text-2xl font-semibold">{weatherData?.address}</h2>

      <div className="flex items-center justify-between w-full">
        <img src={icon} className="max-w-28 md:max-w-40" alt="weather icon" />
        <div className="flex-col tex">
          {" "}
          <p className="font-bold text-5xl md:text-6xl text-white">
            {weatherData?.currentConditions?.temp} {tempUnit}
          </p>
          <small>
            Feels like: {weatherData?.currentConditions?.feelslike} {tempUnit}
          </small>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        {weatherData?.currentConditions?.sunrise && (
          <div className="flex flex-col items-center">
            <small>Sunrise</small>
            <img src={iconMap.sunrise} className="w-12" alt="sunrise icon" />
            <p>{weatherData?.currentConditions?.sunrise}</p>
          </div>
        )}
        {weatherData?.currentConditions?.sunset && (
          <div className="flex flex-col items-center">
            <small>Sunset</small>
            <img src={iconMap.sunset} className="w-12" alt="sunset icon" />
            <p>{weatherData?.currentConditions?.sunset}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentWeather;
