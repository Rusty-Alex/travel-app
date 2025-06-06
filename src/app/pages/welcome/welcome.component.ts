import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { StatusComponent } from "../../components/status/status.component";
import { MainVariableService } from '../../shared/services/mainVariabeln/main-variable.service';

@Component({
  selector: 'app-welcome',
  imports: [HeaderComponent, StatusComponent, CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  constructor(private router: Router, public mainVariable: MainVariableService) { }

  routesDashboard(routes: string) {
    if (!this.mainVariable.ismobile) {
      if (routes == 'assent') {
        this.router.navigate(['/dashboard']);
      } else if (routes == 'dash') {
        this.router.navigate(['/dashboard-self']);
      }
    }
  }
}
