import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.model';
import { WeatherCardComponent } from '../weather-card/weather-card.component';
import { WeatherResponse } from '../../models/weather.model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, WeatherCardComponent],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user!: User;
  @Input() weather?: WeatherResponse;
}
