import {Command} from "../Command";

export class CommandInject extends Command {
    
    
    getCommand(): string {
        return "inject"
    }    
    
    exec(args: string): void {
        let script = document.createElement("script");
        script.src = args;
        document.body.append(script);
    }

    
}