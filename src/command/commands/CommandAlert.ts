import {Command} from "../Command";

export class CommandAlert extends Command {
    
    getCommand(): string {
        return "alert";
    }    
    
    exec(args: string): void {
        alert(args);
    }

    
}