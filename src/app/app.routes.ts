import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardSelfComponent } from './pages/dashboard-self/dashboard-self.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'welcome', pathMatch: 'full'

    },

    {
        path: 'welcome', component: WelcomeComponent
    },

    {
        path: 'dashboard',
        component: DashboardComponent,

    },

    {
        path: 'dashboard-self',
        component: DashboardSelfComponent,

    },
];
