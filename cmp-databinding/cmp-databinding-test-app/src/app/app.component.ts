import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmp-databinding-test-app';
  oddNums: number[] = [];
  evenNums: number[] = [];

  onIntervalFired(num: number){
    if(num%2 === 0){
      this.evenNums.push(num);
    }else{
      this.oddNums.push(num);
    }
  }
}
