import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainVariableService } from '../../shared/services/mainVariabeln/main-variable.service';


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

  constructor(public mainVariable: MainVariableService) { }

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

plzSelect(item:string) {
  this.eingabe = item;
  this.select = false;
}

ortSelect(item:string) { 
this.eingabe = item;
this.select = false;
}

active() {
  return this.eingabe && this.eingabe.length > 4;

}

search() {
  const input = this.eingabe;

  
}  
}
