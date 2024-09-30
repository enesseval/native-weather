export type RootStackParamList = {
   Welcome: undefined;
   Weather: undefined;
};

export type Location = {
   id: number;
   lat: number;
   lon: number;
   country: string;
   name: string;
   region: string;
};

type forecastDay = {
   date: string;
   day: {
      maxtemp_c: number;
      mintemp_c: number;
      condition: {
         text: string;
         icon: string;
      };
   };
};

export type Weather = {
   current: {
      condition: {
         text: string;
         icon: string;
      };
      humidity: number;
      temp_c: number;
      wind_kph: number;
   };
   forecast: {
      forecastday: forecastDay[];
   };
   location: {
      name: string;
      country: string;
   };
};
