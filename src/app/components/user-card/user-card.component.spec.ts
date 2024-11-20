import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherCardComponent } from '../weather-card/weather-card.component';
import { UserCardComponent } from './user-card-component';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  const mockUser = {
    name: { first: 'John', last: 'Doe' },
    gender: 'male',
    email: 'john@example.com',
    picture: { large: 'https://example.com/photo.jpg' },
    location: {
      coordinates: { latitude: '40.7128', longitude: '-74.0060' },
      city: 'New York',
      country: 'USA',
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardComponent, WeatherCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    component.user = mockUser;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user information correctly', () => {
    const element = fixture.nativeElement;
    expect(element.querySelector('h2').textContent).toContain('John Doe');
    expect(element.querySelector('img').src).toBe(
      'https://example.com/photo.jpg'
    );
    expect(element.textContent).toContain('male');
    expect(element.textContent).toContain('john@example.com');
    expect(element.textContent).toContain('New York, USA');
  });
});
