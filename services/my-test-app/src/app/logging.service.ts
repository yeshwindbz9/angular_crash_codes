export class LoggingService{
    logStatusChange(status: string){
        console.log("A server status changed!\nThe new Server status: "+status);
    }
}