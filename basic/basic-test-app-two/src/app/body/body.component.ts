import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  userName: string = "";
  buttonClicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  onReset(){
    this.userName = "";
  }

}
