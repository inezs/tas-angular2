import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms'
import { routing } from "./app.routes"
=======
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from "./app.routes";

>>>>>>> e7167e77aa7f5e3fce132da8975ff67ea4c17b7a
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
import { AlertComponent } from './alert.component';

import { AuthGuard } from './authguard.service';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { AlertService } from './alert.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

// used to create fake backend
import { fakeBackendProvider } from './fakebackend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

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
    AlertComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
<<<<<<< HEAD
    MdDatepickerModule,
    MdNativeDateModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AddPeriodDialog
  ]
=======
    HttpModule,
    routing
  ],
  providers: [AuthGuard,
    AuthenticationService,
    UserService,
    AlertService,
    CookieService,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
>>>>>>> e7167e77aa7f5e3fce132da8975ff67ea4c17b7a
})
export class AppModule { }
