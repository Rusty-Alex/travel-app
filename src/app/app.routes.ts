import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardSelfComponent } from './pages/dashboard-self/dashboard-self.component';
import { StartComponent } from './pages/start/start.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'start', pathMatch: 'full'

    },

    {
        path: 'start', component: StartComponent
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
