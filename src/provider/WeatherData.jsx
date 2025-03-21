import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const useWeatherData = create(
  persist(
    (set) => ({
      weatherData: null,
      error: null,
      loading: false,

      fetchWeatherData: async (city, unit) => {
        set({ loading: true });
        try {
          const response = await axios.get(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&include=days%2Chours%2Ccurrent&key=YJQU5PM3S52D3PMBWCBX5VTB4&contentType=json`
          );
          set({ weatherData: response.data });
        } catch (error) {
          set({ error: error.message });
        }
        set({ loading: false });
      },

    }),
    {
      name: "weather-data",
    }
  )
);

export default useWeatherData;
