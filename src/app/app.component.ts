import { Component,  } from '@angular/core'; 
import { RouterOutlet } from '@angular/router';
import { FirestoreService } from './shared/services/firestore/firestore.service';
import { MainVariableService } from './shared/services/mainVariabeln/main-variable.service';
import { log } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { 
  constructor(public firestoreService: FirestoreService, public mainVariable: MainVariableService) {}
  ngOnInit(): void {    
    this.firestoreService.loadAssistent();
    this.firestoreService.loadSelf();   
    
  }

}
  
