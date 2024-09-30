import axios from "axios";

const locationsEndPoint = (cityName: string) => `http://api.weatherapi.com/v1/search.json?key=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&q=${cityName}`;
const forecastEndPoint = (cityName: string) => `http://api.weatherapi.com/v1/forecast.json?key=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&q=${cityName}&days=7&aqi=yes&alerts=yes&lang=tr`;

const apiCall = async (endpoint: string) => {
   const options = {
      method: "GET",
      url: endpoint,
   };
   try {
      const response = await axios.request(options);
      return response.data;
   } catch (error) {
      console.error("Error: ", error);
      return null;
   }
};

export const fetchLocations = (cityName: string) => {
   return apiCall(locationsEndPoint(cityName));
};

export const fetchForecast = (cityName: string) => {
   return apiCall(forecastEndPoint(cityName));
};
