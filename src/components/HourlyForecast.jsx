import React from "react";

const HourlyForecast = ({ weatherData, unit }) => {
  if (!weatherData || !weatherData.days || weatherData.days.length === 0) {
    return <p>Keine Daten verfügbar</p>;
  }

  const hours = weatherData.days[0].hours;

  const iconMap = {
    clearDay: "/icons/clear-day.svg",
    clearNight: "/icons/clear-night.svg",
    partlyCloudyDay: "/icons/partly-cloudy-day.svg",
    partlyCloudyNight: "/icons/partly-cloudy-night.svg",
    cloudy: "/icons/cloudy.svg",
    rain: "/icons/rain.svg",
    mist: "/icons/mist.svg",
    snow: "/icons/snow.svg",
    thunderstorm: "/icons/thunderstorm.svg",
  };

  // Actual time
  const now = new Date();
  const currentHour = now.getHours();

  // Only show the next 5 hours based on the current time
  const nextHours = hours.filter((hour) => {
    const hourTime = parseInt(hour.datetime.split(":")[0]); 
    return hourTime > currentHour;
  }).slice(0, 5); 

  return (
    <div className="max-w-[360px] md:max-w-full flex justify-center">
      <div className="w-full bg-gradient-to-br from-gray-700 to-base-300 p-4 rounded-lg flex flex-col max-w-[98%] md:max-w-full">
        <h2 className="text-2xl font-semibold">Hourly Forecast</h2>
        {/* Scrollbarer Bereich für die Stunden */}
        <div className="flex overflow-x-auto whitespace-nowrap scroll-smooth snap-x snap-mandatory gap-4 p-2">
          {nextHours.map((hour, index) => {
            const time = hour.datetime.split(":")[0];
            const temperature = hour.temp;
            const icon = iconMap[hour.icon] || iconMap.clearDay;
            const temperatureUnit = unit === "metric" ? "C°" : "F°";

            return (
              <div 
                key={index} 
                className="p-2 bg-base-300 rounded-lg flex flex-col items-center min-w-[70px] md:min-w-24 snap-center"
              >
                <p className="text-sm">{time}:00</p>
                <img src={icon} alt={hour.icon} className="w-12 h-12" />
                <p className="font-bold">{temperature} {temperatureUnit}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
