import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainVariableService } from '../../shared/services/mainVariabeln/main-variable.service';
@Component({
  selector: 'app-land',
  imports: [FormsModule, CommonModule],
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.scss']
})
export class LandComponent implements OnInit {
  land: any;
  filterLand: any;
  eingabe = "";
  selectLand = false;
  selectCity = false;
  searchLand = true;
  isHovered = false;
  constructor( public mainVariable: MainVariableService) { }

  async ngOnInit(): Promise<void> {
    this.land = await this.loadData();    
  }
  async loadData(): Promise<string[]> {
    const response = await fetch('https://countriesnow.space/api/v0.1/countries/iso');
    const result = await response.json();
    if (result.error) {
      throw new Error('API-Fehler');
    }
    return result.data.map((c: any) => c.name);
  }
  onInputChange(value: string) {
    if (value.length > 2) {
      this.searchLand = false;
      this.selectLand = true;
      this.filterLand = this.land.filter((land: any) => land.toLowerCase().includes(value.toLowerCase()));    
    }
  }

  landSelect(item: string) {    
    this.selectLand = false;
    this.eingabe = item;
    this.searchLand = true;
  }

  onLeave() {
    this.isHovered = false;
    this.selectLand = false;
    this.searchLand = true;
  }

  onIdee() {
    this.isHovered = true;
    this.selectLand = false;
    this.searchLand = false;
  }

  closeSelect() {
    this.selectLand = false;
    this.searchLand = true;
  }

  active() {
  return this.eingabe && this.eingabe.length > 3;
}

next(){
  this.mainVariable.eingabe = this.eingabe;
  console.log(this.mainVariable.eingabe);
  this.mainVariable.choiceLand = false;
  this.mainVariable.finalLand = true;
  
  
}

}