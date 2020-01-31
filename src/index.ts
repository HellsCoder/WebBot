import {Process} from './Process';

window.onload = () => {
    /*
        Экземпляр процесса бота
    */
    let process : Process = new Process("http://127.0.0.1/panel", 10);

    /*
        Запускаем процесс
    */
    process.start();
}