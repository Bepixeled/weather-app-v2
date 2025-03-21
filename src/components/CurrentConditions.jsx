import React from 'react'

const CurrentConditions = ({weatherData}) => {
  const iconMap = {
    clearDay: "/clear-day.svg",
    clearNight: "/clear-night.svg",
    partlyCloudyDay: "/partly-cloudy-day.svg",
    partlyCloudyNight: "/partly-cloudy-night.svg",
    cloudy: "/cloudy.svg",
    rain: "/rain.svg",
    mist: "/mist.svg",
    sunrise: "/sunrise.svg",
    sunset: "/sunset.svg",
    snow: "/snow.svg",
    wind: "/wind.svg",
    thunderstorm: "/thunderstorm.svg",
    humidity: "/humidity.svg",
    uvindex: "/uv-index.svg",
    pressure: "/barometer.svg",
  };

  let icon;
  return (
    <div className="w-[98%] md:w-full bg-gradient-to-br from-gray-700 to-base-300 p-4 rounded-lg flex flex-col">
      <div className="flex justify-between mt-4">
        <div className="flex flex-col items-center">
          <small>Humidity</small>
          <img src={iconMap.humidity} className="w-12" alt="humidity icon" />
          <p>{weatherData?.currentConditions?.humidity}%</p>
        </div>
        <div className="flex flex-col items-center">
          <small>Wind</small>
          <img src={iconMap.wind} className="w-12" alt="wind icon" />
          <p>{weatherData?.currentConditions?.windspeed} km/h</p>
        </div>
        <div className="flex flex-col items-center">
          <small>Pressure</small>
          <img src={iconMap.pressure} className="w-12" alt="pressure icon" />
          <p>{weatherData?.currentConditions?.pressure} hPa</p>
        </div>
        <div className="flex flex-col items-center">
          <small>UV Index</small>
          <img src={iconMap.uvindex} className="w-12" alt="uv index icon" />
          <p>{weatherData?.currentConditions?.uvindex}</p>
        </div>
      </div>
    </div>
  )
}

export default CurrentConditions