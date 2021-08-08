import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
    <p>servers template works!</p>
    <app-server></app-server>`,
    styles: [`
    p {
      color: dodgerblue;
    }`]
  //styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
