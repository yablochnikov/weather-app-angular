import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { UserService } from '../../services/user.service';
import { WeatherService } from '../../services/weather.service';
import { of } from 'rxjs';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: jasmine.SpyObj<UserService>;
  let weatherService: jasmine.SpyObj<WeatherService>;

  const mockUsers = {
    results: [
      {
        name: { first: 'John', last: 'Doe' },
        gender: 'male',
        email: 'john@example.com',
        picture: { large: 'https://example.com/photo.jpg' },
        location: {
          coordinates: { latitude: '40.7128', longitude: '-74.0060' },
          city: 'New York',
          country: 'USA',
        },
      },
    ],
  };

  const mockWeather = {
    current_weather: {
      temperature: 20,
      weathercode: 0,
      windspeed: 5,
      winddirection: 180,
      time: '2024-02-14T12:00',
    },
    daily: {
      temperature_2m_max: [25],
      temperature_2m_min: [15],
      uv_index_max: [5],
      precipitation_probability_max: [20],
      time: ['2024-02-14'],
    },
    hourly: {
      temperature_2m: Array(24).fill(20),
      relative_humidity_2m: Array(24).fill(50),
      apparent_temperature: Array(24).fill(19),
      time: Array(24).fill('2024-02-14T00:00'),
    },
  };

  beforeEach(async () => {
    const userServiceSpy = jasmine.createSpyObj('UserService', ['getUsers']);
    const weatherServiceSpy = jasmine.createSpyObj('WeatherService', [
      'getWeather',
    ]);

    userServiceSpy.getUsers.and.returnValue(of(mockUsers));
    weatherServiceSpy.getWeather.and.returnValue(of(mockWeather));

    await TestBed.configureTestingModule({
      imports: [UserListComponent],
      providers: [
        { provide: UserService, useValue: userServiceSpy },
        { provide: WeatherService, useValue: weatherServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    weatherService = TestBed.inject(
      WeatherService
    ) as jasmine.SpyObj<WeatherService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch users and weather data on init', () => {
    expect(userService.getUsers).toHaveBeenCalledWith(6);
    expect(weatherService.getWeather).toHaveBeenCalled();
    expect(component.usersWithWeather.length).toBe(1);
  });
});
