import { HttpClient} from '@angular/common/http';
import { Component,} from '@angular/core';
import { MainVariableService } from '../../shared/services/mainVariabeln/main-variable.service';
import { FirestoreService } from '../../shared/services/firestore/firestore.service';
import { Router } from '@angular/router';
import { HeaderWetterComponent } from '../../components/header-wetter/header-wetter.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { WeatherService } from '../../shared/services/weather/weather.service';
import { CurrentlyWeatherComponent } from "../../components/currently-weather/currently-weather.component";
import { ForcastWeatherComponent } from "../../components/forcast-weather/forcast-weather.component";


@Component({
  selector: 'app-dashboard-self',
  imports: [HeaderWetterComponent, SearchbarComponent, CurrentlyWeatherComponent, ForcastWeatherComponent],
  templateUrl: './dashboard-self.component.html',
  styleUrl: './dashboard-self.component.scss'
})
export class DashboardSelfComponent {

  constructor(private http: HttpClient, public mainVariable: MainVariableService, public firestoreService: FirestoreService, public router: Router,
  public  wetter: WeatherService
  ) { }

  ngOnInit(): void {
    this.http.get('assets/text/DE.txt', { responseType: 'text' }).subscribe(text => {
      const lines = text.split('\n');
      const plzList = lines.map(line => line.split('\t')[1]);
      this.mainVariable.plz = plzList;
    });
    this.http.get('assets/text/DE.txt', { responseType: 'text' }).subscribe(text => {
      const lines = text.split('\n');
      const städte = lines
        .map(line => line.split('\t')[2])
        .filter(Boolean);     
      const einzigartigeStädte = [...new Set(städte)];
      this.mainVariable.ort = einzigartigeStädte;      
    });        
  }



}
