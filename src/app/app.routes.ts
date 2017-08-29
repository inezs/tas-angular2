import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './home/dashboard/dashboard.component'


const routes: Routes = [
    { path: '',            component: LoginComponent },
    { path: 'home',        component: HomeComponent, children: [
        {path: '',          component: DashboardComponent}
    ]},
];

export const routing = RouterModule.forRoot(routes);