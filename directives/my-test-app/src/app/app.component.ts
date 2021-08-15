import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-test-app';
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];
  numbers: number[] = [1, 2, 3, 4, 5, 6];
  onlyOdd = false;
  value = 9;

  constructor(){
    this.numbers.forEach((num) => {
      if(num%2===0){
        this.evenNumbers.push(num);
      } else{
        this.oddNumbers.push(num);
      }
    });
  }
}
