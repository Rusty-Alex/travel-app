import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MainVariableService } from '../../shared/services/mainVariabeln/main-variable.service';
import { FirestoreService } from '../../shared/services/firestore/firestore.service';
import { Router } from '@angular/router';
import { LandComponent } from '../../components/land/land.component';
import { FinalLandComponent } from '../../components/final-land/final-land.component';

@Component({
  selector: 'app-dashboard',
  imports: [LandComponent,FinalLandComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  welcome = true;
  firstCheck = false;
  
  constructor(private http: HttpClient, public mainVariable: MainVariableService, public firestoreService: FirestoreService, public router: Router) { }
  // ngOnInit(): void {
  //   this.http.get('assets/text/DE.txt', { responseType: 'text' }).subscribe(text => {
  //     const lines = text.split('\n');
  //     const plzList = lines.map(line => line.split('\t')[1]);
  //     this.mainVariable.plz = plzList;
  //   });
  //   this.http.get('assets/text/DE.txt', { responseType: 'text' }).subscribe(text => {
  //     const lines = text.split('\n');
  //     const städte = lines
  //       .map(line => line.split('\t')[2])
  //       .filter(Boolean);     
  //     const einzigartigeStädte = [...new Set(städte)];
  //     this.mainVariable.ort = einzigartigeStädte;      
  //   });
  // }
next(){    
    this.welcome = false; 
    this.firstCheck = true;   
  }

  closeApp(){
    this.welcome = false;
    this.firstCheck = false;
    this.mainVariable.choiceLand = false;
    this.mainVariable.choiceCity = false;
    this.mainVariable.finalLand = false;
    this.router.navigate(['/welcome']);
  }

  land(){
    this.welcome = false;
    this.firstCheck = false;
    this.mainVariable.choiceLand = true;
  }
  city(){
    this.welcome = false;
    this.firstCheck = false;
    this.mainVariable.choiceCity = true;
  }


}
