'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    // request.open(method, url, async, login. pass);  собирает настройки
    request.open('GET', 'js/current.json');

    // чтобы сервер понимал что он принимает
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); 
    // отправляет запрос на сервер
    request.send();

    // отслеживает статус запроса в данный момент, по таблице readyState
    // request.addEventListener('readystatechange', () => {
    //     if (request.readyState === 4 && request.status === 200) {
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    //     } else {
    //         inputUsd.value = "Что-то пошло не так";
    //     }
    // });

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });

    // status - статус запроса прим. 404
    // status.text - тоже самое примю Ok, Not found
    // response - ответ от сервера, тот то задал разработчик
    // readyState - текущее состояние запроса, цифры
});