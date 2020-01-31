/*
    Follow me:
    @vk: vk.com/bytecode
*/

export class Network {

    /*
        Обычный GET запрос
        
        error - функция, вызываемая в случае ошибки, необязательна
        cache - кэширование запроса
    */
    public static request(url :string, callback : Function, error? : Function, cache? : boolean) {
        let req = new XMLHttpRequest();
        /*
            Кэширование
        */
        if(!cache){
            req.open("GET", url + "&" + new Date().getTime(), true);
        }else{
            req.open("GET", url, true);
        }

        /*
            Функция, вызываемая при получаении ответа от сверера
        */
        req.addEventListener("load", () => {
            /*
                Если код ответа от сервера ниже 400-х, то вызываем успешный каллбек
            */
            if (req.status < 400){
                callback(JSON.parse(req.responseText));
            }
            else if (error){
                error()
            }
        });
        /*
            В случае ошибки на стадии отправки(ошибка на стороне клиента) - кидаем ошибку и троу
        */
        req.addEventListener("error", () => {
            if(error){
                error();
            }
            throw "HttpError: Network not available"
        });
        req.send(null);        
    }    

}