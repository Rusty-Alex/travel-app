import { Component } from '@angular/core';
import { ChartComponent } from "../chart/chart.component";
import { MainVariableService } from '../../shared/services/mainVariabeln/main-variable.service';
import { FirestoreService } from '../../shared/services/firestore/firestore.service';


@Component({
  selector: 'app-status',
  imports: [ChartComponent],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent {
 
  constructor(public mainVariable: MainVariableService, public firestoreService: FirestoreService) { }

  
}
