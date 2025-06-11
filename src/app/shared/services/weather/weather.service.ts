import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'b18218290c746c6759b1a32fe2f57236';
  constructor(public http: HttpClient) { }
   getCurrentWeatherByCity(city: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},DE&units=metric&appid=${this.apiKey}`);
  }

  getCoordsByPlz(plz: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/geo/1.0/zip?zip=${plz},DE&appid=${this.apiKey}`);
  }

  getCurrentWeatherByPlz(plz: string): Observable<any> {
    return this.getCoordsByPlz(plz).pipe(
      switchMap(({ lat, lon }) => {
        return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${this.apiKey}`);
      })
    );
  }

  get3DayForecastByCoords(lat: number, lon: number): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${this.apiKey}`);
  }
}
