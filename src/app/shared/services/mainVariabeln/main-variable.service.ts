import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainVariableService {
  ismobile = false;
  public assistent!:any ;
  public selbst!:any ;
  public plz!:any ;
  public ort!:any ; 
  eingabe:string = "";
  finalLand = false;
  choiceLand = false;
  choiceCity = false;
  loading = false;
  wetterPlz: any| null;
  wetterOrt: any| null;
  tageForecastPlz: any[] = [];
  tageForecastOrt: any[] = [];
  constructor() { }
}
