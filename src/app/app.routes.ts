import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './home/dashboard/dashboard.component'
import { PeriodComponent } from './home/period/period.component'


const routes: Routes = [
    { path: '',            component: LoginComponent },
    { path: 'home',        component: HomeComponent, children: [
        {path: '',          component: DashboardComponent},
        {path: 'period',    component: PeriodComponent}
    ]},
];

export const routing = RouterModule.forRoot(routes);