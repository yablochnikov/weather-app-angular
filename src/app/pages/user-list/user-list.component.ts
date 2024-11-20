import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { WeatherService } from '../../services/weather.service';
import { User } from '../../models/user.model';
import { WeatherResponse } from '../../models/weather.model';
import { forkJoin, map, switchMap } from 'rxjs';
import { UserCardComponent } from 'src/app/components/user-card/user-card-component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  usersWithWeather: Array<{ user: User; weather?: WeatherResponse }> = [];

  constructor(
    private userService: UserService,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.userService
      .getUsers(6)
      .pipe(
        switchMap((response) => {
          const users = response.results;
          const weatherRequests = users.map((user) =>
            this.weatherService.getWeather(
              user.location.coordinates.latitude,
              user.location.coordinates.longitude
            )
          );

          return forkJoin(weatherRequests).pipe(
            map((weatherResponses) => {
              return users.map((user, index) => ({
                user,
                weather: weatherResponses[index],
              }));
            })
          );
        })
      )
      .subscribe((data) => {
        this.usersWithWeather = data;
      });
  }
}
