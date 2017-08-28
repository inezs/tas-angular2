import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginComponent } from './login/login.component'


const routes: Routes = [
    { path: '',                 component: LoginComponent },
    { path: 'dashboard',        component: DashboardComponent },
];

export const routing = RouterModule.forRoot(routes);