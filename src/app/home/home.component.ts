import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

import { User } from '../user';

import { UserService } from '../user.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  
  private router: Router;
  private currentUser: User;
  private user: User;
  private users: User[];
  
  constructor( private userService: UserService,
    private authenticationService: AuthenticationService,
    
  ){
    this.currentUser= JSON.parse(localStorage.getItem('currentUser'));
  }
  logout(){
    this.authenticationService.logout();
  }
}
