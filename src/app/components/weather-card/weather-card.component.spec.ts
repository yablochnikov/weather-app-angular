import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherCardComponent } from './weather-card.component';
import { WeatherService } from './weather-card.service';

describe('WeatherCardComponent', () => {
  let component: WeatherCardComponent;
  let fixture: ComponentFixture<WeatherCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherCardComponent],
      providers: [WeatherService],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle temperature unit', () => {
    expect(component.isCelsius).toBe(true);
    component.toggleUnit();
    expect(component.isCelsius).toBe(false);
    component.toggleUnit();
    expect(component.isCelsius).toBe(true);
  });

  it('should format temperature correctly', () => {
    expect(component.formatTemperature(20)).toBe('20°C');
    component.toggleUnit();
    expect(component.formatTemperature(20)).toBe('68°F');
  });
});
