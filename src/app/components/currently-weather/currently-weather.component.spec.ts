import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyWeatherComponent } from './currently-weather.component';

describe('CurrentlyWeatherComponent', () => {
  let component: CurrentlyWeatherComponent;
  let fixture: ComponentFixture<CurrentlyWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentlyWeatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentlyWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
