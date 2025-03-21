import React from 'react'

const CurrentConditions = ({weatherData}) => {
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