import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { StatusComponent } from "../../components/status/status.component";
import { MainVariableService } from '../../shared/services/mainVariabeln/main-variable.service';
import { FirestoreService } from '../../shared/services/firestore/firestore.service';


@Component({
  selector: 'app-welcome',
  imports: [HeaderComponent, StatusComponent, CommonModule, ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  constructor(private router: Router, public mainVariable: MainVariableService, public firestoreService: FirestoreService, ) { } 


  routesDashboard(routes: string) {    
    
      if (routes == 'assent') {
        const acc = this.mainVariable.assistent;        
        this.firestoreService.updateCount('assistent', acc[0].id, );
        this.router.navigate(['/dashboard']);
      } else if (routes == 'dash') {
        const acc = this.mainVariable.selbst;  
        this.firestoreService.updateCount('selbst', acc[0].id,);
        this.router.navigate(['/dashboard-self']);
      }
    
  }
}
