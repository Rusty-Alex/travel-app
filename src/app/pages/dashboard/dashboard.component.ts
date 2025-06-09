
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
  
  constructor( public mainVariable: MainVariableService, public firestoreService: FirestoreService, public router: Router) { }
  
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
