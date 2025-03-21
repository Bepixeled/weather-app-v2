import React from 'react'

const CurrentConditions = ({weatherData}) => {
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