import { Component } from '@angular/core';
import { MainVariableService } from '../../shared/services/mainVariabeln/main-variable.service';

@Component({
  selector: 'app-currently-weather',
  imports: [],
  templateUrl: './currently-weather.component.html',
  styleUrl: './currently-weather.component.scss'
})
export class CurrentlyWeatherComponent {

  constructor(public mainVariable: MainVariableService) { }
 

iconUrl(iconCode: string) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }
}
