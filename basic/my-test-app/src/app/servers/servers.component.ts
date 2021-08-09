import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //   <p>Servers Initialized</p>
  //   <app-server></app-server>`,
  templateUrl: "./servers.component.html",
    styles: [`
    p {
      color: gray;
    }`]
  //styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  buttonClicked = false;
  serverCreationStatus = "No Server is created";
  serverName = "test-server-1";

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    } ,1000)
  }

  ngOnInit(): void {}

  onCreateServer(){
    if(this.buttonClicked == true){
      this.serverCreationStatus = "Are you gonna pay for these servers?"
    }else{
      this.serverCreationStatus = "A new Server "+this.serverName+" has been created!"
    }
    this.buttonClicked = true
  }

  onUpdateServerName(event: any){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
