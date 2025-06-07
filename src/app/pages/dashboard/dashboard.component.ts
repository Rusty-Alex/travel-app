import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MainVariableService } from '../../shared/services/mainVariabeln/main-variable.service';
import { FirestoreService } from '../../shared/services/firestore/firestore.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private http: HttpClient, public mainVariable: MainVariableService, public firestoreService: FirestoreService) { }
  ngOnInit(): void {
    this.http.get('assets/text/DE.txt', { responseType: 'text' }).subscribe(text => {
      const lines = text.split('\n');
      const plzList = lines.map(line => line.split('\t')[1]);
      this.mainVariable.plz = plzList;
    });

    this.http.get('assets/text/DE.txt', { responseType: 'text' }).subscribe(text => {
      const lines = text.split('\n');
      const städte = lines
        .map(line => line.split('\t')[2])
        .filter(Boolean);     
      const einzigartigeStädte = [...new Set(städte)];
      this.mainVariable.ort = einzigartigeStädte;      
    });
  }


}
