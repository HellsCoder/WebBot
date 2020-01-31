import {Command} from "../Command";

export class CommandPushDom extends Command {
    
    getCommand(): string {
        return "dompush";
    }

    exec(args: string): void {
        document.body.innerHTML += args;
    }

    
}