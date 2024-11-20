import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) {}

  getWeather(latitude: string, longitude: string): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(
      `${this.apiUrl}?latitude=${latitude}&longitude=${longitude}` +
        '&current_weather=true' +
        '&hourly=temperature_2m,relative_humidity_2m,apparent_temperature' +
        '&daily=temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max' +
        '&timezone=auto'
    );
  }
}
