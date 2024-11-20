export interface WeatherResponse {
  current_weather: {
    temperature: number;
    weathercode: number;
    windspeed: number;
    winddirection: number;
    time: string;
  };
  daily: {
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    uv_index_max: number[];
    precipitation_probability_max: number[];
    time: string[];
  };
  hourly: {
    temperature_2m: number[];
    relative_humidity_2m: number[];
    apparent_temperature: number[];
    time: string[];
  };
}
