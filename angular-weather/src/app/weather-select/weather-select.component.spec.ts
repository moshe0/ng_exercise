import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSelectComponent } from './weather-select.component';

describe('WeatherSelectComponent', () => {
  let component: WeatherSelectComponent;
  let fixture: ComponentFixture<WeatherSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
