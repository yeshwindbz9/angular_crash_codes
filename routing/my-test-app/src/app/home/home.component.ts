import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authFlag: boolean;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authFlag = this.authService.loggedIn;
  }

  onLoadServers(){
    //load the servers component
    this.router.navigate(['/servers']);
  }

  onLoadUsers(){
    this.router.navigate(['/users']);
  }

  onLoad404(){
    this.router.navigate(['/not-found']);
  }

  onLogin(){
    this.authService.login();
    this.authFlag = true;
  }

  onLogout(){
    this.authService.logout();
    this.authFlag = false;
  }
}
