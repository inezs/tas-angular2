import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from "./app.routes"
import 'hammerjs';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { PeriodComponent, AddPeriodDialog } from './home/period/period.component';
import { UserComponent } from './home/user/user.component';
import { EnrollmentComponent } from './home/enrollment/enrollment.component';
import { AchievementComponent } from './home/achievement/achievement.component';
import { MaintenanceComponent } from './home/maintenance/maintenance.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    PeriodComponent,
    AddPeriodDialog,
    UserComponent,
    EnrollmentComponent,
    AchievementComponent,
    MaintenanceComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AddPeriodDialog
  ]
})
export class AppModule { }
