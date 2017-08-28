import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'


const routes: Routes = [
    { path: '',            component: LoginComponent },
    { path: 'home',        component: HomeComponent },
];

export const routing = RouterModule.forRoot(routes);