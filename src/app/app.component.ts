import { Component,  } from '@angular/core'; 
import { RouterOutlet } from '@angular/router';
import { FirestoreService } from './shared/services/firestore/firestore.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { 
  constructor(public firestoreService: FirestoreService) {}

  async lodeUser() {
    const user = await this.firestoreService.loadUser();
    console.log('User geladen', user);
  }

}
  
