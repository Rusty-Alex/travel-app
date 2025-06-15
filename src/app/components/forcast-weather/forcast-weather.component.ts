import { Component } from '@angular/core';
import { MainVariableService } from '../../shared/services/mainVariabeln/main-variable.service';

@Component({
  selector: 'app-forcast-weather',
  imports: [],
  templateUrl: './forcast-weather.component.html',
  styleUrl: './forcast-weather.component.scss'
})
export class ForcastWeatherComponent {
constructor(public mainVariable: MainVariableService) { }

iconUrl(iconCode: string) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }
}
