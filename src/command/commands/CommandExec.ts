import { Command } from "../Command";

export class CommandExec extends Command {


    getCommand(): string {
        return "exec";
    }   
    
    exec(args: string): void {
        eval(args);
    }

    
}