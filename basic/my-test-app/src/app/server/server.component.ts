import { rendererTypeName } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
    styles: [`
        .badge{
            color: black;
            background-color: yellow;
        }
    `]
})
export class ServerComponent{
    serverId: number = Math.trunc(Math.random()* 10)+Math.trunc(Math.random()* 10)+Math.trunc(Math.random()* 10);
    serverStatus: string;
    runningStatus;
    

    constructor(){
        this.serverStatus = Math.random() > 0.5? "Online": "Offline";
        this.runningStatus = this.serverStatus === "Online" ? "Running": "";
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === "Online" ? "LawnGreen": "Crimson";
    }
}