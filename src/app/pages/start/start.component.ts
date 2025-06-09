import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FirestoreService } from '../../shared/services/firestore/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  imports: [CommonModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {
  start: boolean = false;
  constructor(public firestoreService: FirestoreService, public router: Router) { }
async next(){
  this.start = true;
  this.firestoreService.loadAssistent();
  this.firestoreService.loadSelf();
  this.start = false;  
  this.router.navigate(['/welcome']);
}
}
