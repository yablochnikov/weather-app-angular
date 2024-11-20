import { Injectable } from '@angular/core';
import { WeatherResponse } from '../../models/weather.model';

@Injectable()
export class WeatherService {
  getCurrentFeelsLike(weather?: WeatherResponse): number {
    if (!weather) return 0;
    const currentHour = new Date().getHours();
    return Math.round(weather.hourly.apparent_temperature[currentHour]);
  }

  getDailyHigh(weather?: WeatherResponse): number {
    if (!weather) return 0;
    return Math.round(weather.daily.temperature_2m_max[0]);
  }

  getDailyLow(weather?: WeatherResponse): number {
    if (!weather) return 0;
    return Math.round(weather.daily.temperature_2m_min[0]);
  }

  getUVIndex(weather?: WeatherResponse): number {
    if (!weather) return 0;
    return Math.round(weather.daily.uv_index_max[0]);
  }

  getPrecipitationProbability(weather?: WeatherResponse): number {
    if (!weather) return 0;
    return weather.daily.precipitation_probability_max[0];
  }

  getUVDescription(uvIndex: number): string {
    if (uvIndex <= 2) return 'Low';
    if (uvIndex <= 5) return 'Moderate';
    if (uvIndex <= 7) return 'High';
    if (uvIndex <= 10) return 'Very High';
    return 'Extreme';
  }

  getWeatherDescription(code: number): string {
    const weatherCodes: { [key: number]: string } = {
      0: 'Clear sky',
      1: 'Mainly clear',
      2: 'Partly cloudy',
      3: 'Overcast',
      45: 'Foggy',
      48: 'Depositing rime fog',
      51: 'Light drizzle',
      53: 'Moderate drizzle',
      55: 'Dense drizzle',
      61: 'Slight rain',
      63: 'Moderate rain',
      65: 'Heavy rain',
      71: 'Slight snow',
      73: 'Moderate snow',
      75: 'Heavy snow',
      77: 'Snow grains',
      80: 'Slight rain showers',
      81: 'Moderate rain showers',
      82: 'Violent rain showers',
      95: 'Thunderstorm',
      96: 'Thunderstorm with slight hail',
      99: 'Thunderstorm with heavy hail',
    };
    return weatherCodes[code] || 'Unknown';
  }

  getWeatherImage(code: number): string {
    const weatherImages: { [key: number]: string } = {
      0: 'sunny',
      1: 'sunny',
      2: 'partlyCloud',
      3: 'cloudy',
      45: 'fog',
      48: 'fog',
      51: 'drizzle',
      53: 'drizzle',
      55: 'drizzle',
      61: 'lightrain',
      63: 'rain',
      65: 'rain',
      71: 'snow',
      73: 'snow',
      75: 'snow',
      77: 'snow',
      80: 'rain',
      81: 'rain',
      82: 'rain',
      95: 'lightning',
      96: 'storm',
      99: 'storm',
    };

    return `assets/${weatherImages[code] || 'unknown'}.png`;
  }
}
