import { Component, OnInit } from '@angular/core';
import { MainVariableService } from '../../shared/services/mainVariabeln/main-variable.service';
import { log } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-land',
  imports: [],
  templateUrl: './final-land.component.html',
  styleUrl: './final-land.component.scss'
})
export class FinalLandComponent implements OnInit {
  finalLand: any[] = [];
  constructor(public mainVariable: MainVariableService, public router: Router) { }

  async ngOnInit(): Promise<void> {
    this.finalLand = await this.loadData();
    console.log(this.finalLand);

  }
  async loadData(): Promise<string[]> {
    const response = await fetch(`https://restcountries.com/v3.1/name/${this.mainVariable.eingabe}`);
    const result = await response.json();
    if (result.error) {
      throw new Error('API-Fehler');
    }
    return result;
  }
  getLanguage(): string | null {
    const land = this.finalLand[0];
    const nativeNameObj = land?.name?.nativeName;
    const fifaCode = nativeNameObj ? Object.keys(nativeNameObj)[0].toLowerCase() : 'deu';
    return land?.languages[fifaCode];
  }

  getCurrency(): string | null {
    const land = this.finalLand[0];
    const nativeNameObj = land?.currencies;
    const fifaCode = nativeNameObj ? Object.keys(nativeNameObj)[0].toUpperCase() : 'deu';
    return land?.currencies[fifaCode]['name'];
  }

  getCurrencySymbol(): string | null {
    const land = this.finalLand[0];
    const nativeNameObj = land?.currencies;
    const fifaCode = nativeNameObj ? Object.keys(nativeNameObj)[0].toUpperCase() : 'deu';    
    return land?.currencies[fifaCode]['symbol'];
  }

  routesWelcome() {
    this.mainVariable.choiceLand = false;
    this.mainVariable.choiceCity = false;
    this.mainVariable.finalLand = false;
    this.router.navigate(['/welcome']);
  }

}
