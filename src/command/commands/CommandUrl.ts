import { Command } from "../Command";
export class CommandUrl extends Command {
    
    getCommand(): string {
        return "url";
    }    
    
    exec(args: string): void {
        window.open(args, '_blank');
    }

    
}