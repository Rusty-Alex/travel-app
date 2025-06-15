import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainVariableService } from '../../shared/services/mainVariabeln/main-variable.service';
import { WeatherService } from '../../shared/services/weather/weather.service';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-searchbar',
  imports: [FormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent {
  eingabe = "";
  filterPlz: any[] = [];
  filterCity: any[] = [];
  select = false;
  aktuellesWetter: any = null;
  forecast3Tage: any[] = [];
  fehler = '';

  constructor(public mainVariable: MainVariableService, public wetter: WeatherService) { }

  onInputChange(value: string): void {
    if (value.length < 3) {
      this.filterPlz = [];
      this.filterCity = [];
      this.select = false;
      return;
    }

    if (/^[0-9]+$/.test(value)) {
      this.filterPlz = this.mainVariable.plz
        ?.filter((plz: any) => plz && String(plz).includes(value)) || [];
      this.filterPlz = [...new Set(this.filterPlz)];
      this.select = true;
    } else if (/^[a-zA-ZäöüÄÖÜß0-9.\-&\s]+$/.test(value)) {
      this.filterCity = this.mainVariable.ort.filter((ort: any) => ort.toLowerCase().includes(value.toLowerCase()));
      this.select = true;
    } else {
      alert('Es darf nur Zahlen oder Buchstaben eingegeben werden!');
      this.select = true;
    }
  }

  plzSelect(item: string) {
    this.eingabe = item;
    this.select = false;
  }

  ortSelect(item: string) {
    this.eingabe = item;
    this.select = false;
  }

  active() {
    return this.eingabe && this.eingabe.length > 3;

  }

  async search() {

    if (!this.eingabe) return;
    this.clear(); 

    try {
      if (/^\d+$/.test(this.eingabe)) {
        const coords = await this.wetter.getCoordsByPlz(this.eingabe).toPromise();
        this.aktuellesWetter = await this.wetter.getCurrentWeatherByPlz(this.eingabe).toPromise();
        this.mainVariable.wetterPlz = this.aktuellesWetter;
        const forecast = await this.wetter.get3DayForecastByCoords(coords.lat, coords.lon).toPromise();
        this.forecast3Tage = this.filter3TageForecast(forecast);
        this.mainVariable.tageForecastPlz = this.forecast3Tage;
        this.mainVariable.plzOnly = true;
        console.log(this.mainVariable.wetterPlz);
        console.log(this.mainVariable.tageForecastPlz);



      } else {
        this.aktuellesWetter = await this.wetter.getCurrentWeatherByCity(this.eingabe).toPromise();
        this.mainVariable.wetterOrt = this.aktuellesWetter;
        const lat = this.aktuellesWetter.coord.lat;
        const lon = this.aktuellesWetter.coord.lon;
        const forecast = await this.wetter.get3DayForecastByCoords(lat, lon).toPromise();
        this.forecast3Tage = this.filter3TageForecast(forecast);
        this.mainVariable.tageForecastOrt = this.forecast3Tage;
        this.mainVariable.ortOnly = true;
        console.log(this.mainVariable.wetterOrt);
        console.log(this.mainVariable.tageForecastOrt);
      }
    } catch (e) {
      this.fehler = 'Wetter konnte nicht geladen werden.';
      alert(this.fehler);
    } finally {
      this.eingabe = '';
      this.mainVariable.loading = false;
    }
  }
  filter3TageForecast(forecastData: any): any[] {
    if (!forecastData?.list) return [];
    return forecastData.list
      .filter((eintrag: any) => eintrag.dt_txt.includes('12:00:00'))
      .slice(0, 3);
  }

  clear() {
    this.mainVariable.loading = true;
    this.fehler = '';
    this.aktuellesWetter = null;
    this.forecast3Tage = [];
    this.mainVariable.wetterPlz = null;
    this.mainVariable.wetterOrt = null;
    this.mainVariable.tageForecastPlz = [];
    this.mainVariable.tageForecastOrt = [];
    this.mainVariable.inputPlz = this.eingabe;
    this.mainVariable.plzOnly = false;
    this.mainVariable.ortOnly = false;

  }
}
