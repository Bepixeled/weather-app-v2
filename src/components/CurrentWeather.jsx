import React from "react";

const CurrentWeather = ({ weatherData, unit }) => {
  const iconMap = {
    clearDay: `${import.meta.env.BASE_URL}clear-day.svg`,
    clearNight: `${import.meta.env.BASE_URL}clear-night.svg`,
    partlyCloudyDay: `${import.meta.env.BASE_URL}partly-cloudy-day.svg`,
    partlyCloudyNight: `${import.meta.env.BASE_URL}partly-cloudy-night.svg`,
    cloudy: `${import.meta.env.BASE_URL}cloudy.svg`,
    rain: `${import.meta.env.BASE_URL}rain.svg`,
    mist: `${import.meta.env.BASE_URL}mist.svg`,
    sunrise: `${import.meta.env.BASE_URL}sunrise.svg`,
    sunset: `${import.meta.env.BASE_URL}sunset.svg`,
    snow: `${import.meta.env.BASE_URL}snow.svg`,
    wind: `${import.meta.env.BASE_URL}wind.svg`,
    thunderstorm: `${import.meta.env.BASE_URL}thunderstorm.svg`,
    humidity: `${import.meta.env.BASE_URL}humidity.svg`,
    uvindex: `${import.meta.env.BASE_URL}uv-index.svg`,
    pressure: `${import.meta.env.BASE_URL}barometer.svg`,
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
