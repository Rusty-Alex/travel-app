import { Component } from '@angular/core';

@Component({
  selector: 'app-currently-weather',
  imports: [],
  templateUrl: './currently-weather.component.html',
  styleUrl: './currently-weather.component.scss'
})
export class CurrentlyWeatherComponent {

iconUrl(iconCode: string) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }
}
