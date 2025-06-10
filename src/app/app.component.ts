import { Component,  } from '@angular/core'; 
import { Router, RouterOutlet } from '@angular/router';
import { FirestoreService } from './shared/services/firestore/firestore.service';
import { MainVariableService } from './shared/services/mainVariabeln/main-variable.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { 
  startAnimation: boolean = true;
  constructor(public firestoreService: FirestoreService, public mainVariable: MainVariableService, public router: Router) {}
ngOnInit(): void {
    
    setTimeout(() => {
      this.startAnimation = false;
      this.router.navigate(['/start']);
    }, 3000);
    
  }
}
  
