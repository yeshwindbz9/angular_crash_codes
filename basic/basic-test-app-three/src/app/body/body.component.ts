import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  styles: [`
        .white-text{
          @extend .list-group-item;
          color: white;
        }
    `]
})
export class BodyComponent implements OnInit {
  buttonClick: boolean = false;
  noOfClicks: number = 0;
  setBg: boolean = false;
  clickArray: number[] = []

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.buttonClick = !this.buttonClick;
    this.noOfClicks += 1;
    this.clickArray.push(this.noOfClicks);
    if(this.noOfClicks>=5){
      this.setBg = true;
    }
  }

}
