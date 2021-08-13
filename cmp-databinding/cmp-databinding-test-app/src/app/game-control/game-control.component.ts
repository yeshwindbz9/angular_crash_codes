import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 0

  constructor() { }

  ngOnInit(): void {
  }

  onStart(){
    this.interval = setInterval(()=> {
      this.lastNumber += 1;
      this.intervalFired.emit(this.lastNumber);
    }, 1000);
  }

  onPause(){
    clearInterval(this.interval);
  }

}
