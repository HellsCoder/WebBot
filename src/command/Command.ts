import { Invoker } from "./Invoker";
import { Process } from "../Process";

export abstract class Command {

    /*
        Стандартные переменные
    */
    invoker: Invoker;
    process: Process;

    /*
        Метод для получения названия команды
    */
    abstract getCommand() : string;

    /*
        Выполнение команды
    */
    abstract exec(args : string) : void;
}  