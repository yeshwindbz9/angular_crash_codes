import { Component, OnInit } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  activeCounter: number = 0;
  inActiveCounter: number = 0;
  
  incrementCounterActive(){
    this.activeCounter+=1;
  }

  incrementCounterInActive(){
    this.inActiveCounter+=1;
  }

  clearInActive(){
    this.inActiveCounter = 0;
  }

  clearActive(){
    this.activeCounter = 0;
  }
}
