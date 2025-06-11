import { Component } from '@angular/core';

@Component({
  selector: 'app-forcast-weather',
  imports: [],
  templateUrl: './forcast-weather.component.html',
  styleUrl: './forcast-weather.component.scss'
})
export class ForcastWeatherComponent {

iconUrl(iconCode: string) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }
}
