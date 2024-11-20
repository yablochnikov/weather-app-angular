import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherResponse } from '../../models/weather.model';
import { WeatherService } from './weather-card.service';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  providers: [WeatherService],
})
export class WeatherCardComponent {
  @Input() weather?: WeatherResponse;
  isCelsius = true;

  constructor(private weatherService: WeatherService) {}

  toggleUnit() {
    this.isCelsius = !this.isCelsius;
  }

  formatTemperature(temp: number): string {
    return this.isCelsius
      ? `${temp}°C`
      : `${Math.round((temp * 9) / 5 + 32)}°F`;
  }

  getCurrentFeelsLike(): number {
    return this.weatherService.getCurrentFeelsLike(this.weather);
  }

  getDailyHigh(): number {
    return this.weatherService.getDailyHigh(this.weather);
  }

  getDailyLow(): number {
    return this.weatherService.getDailyLow(this.weather);
  }

  getUVIndex(): number {
    return this.weatherService.getUVIndex(this.weather);
  }

  getPrecipitationProbability(): number {
    return this.weatherService.getPrecipitationProbability(this.weather);
  }

  getUVDescription(uvIndex: number): string {
    return this.weatherService.getUVDescription(uvIndex);
  }

  getWeatherDescription(code: number): string {
    return this.weatherService.getWeatherDescription(code);
  }

  getWeatherImage(code: number): string {
    return this.weatherService.getWeatherImage(code);
  }
}
