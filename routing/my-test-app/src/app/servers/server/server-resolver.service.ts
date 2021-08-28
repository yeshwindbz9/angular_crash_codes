import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";

interface ServerObj{
    id: number,
    status: string,
    name: string
}

@Injectable()
export class ServerResolver implements Resolve<ServerObj>{
constructor(private serverService: ServersService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServerObj> | Promise<ServerObj> | ServerObj{
        return this.serverService.getServer(+route.params['id']);
    }
}