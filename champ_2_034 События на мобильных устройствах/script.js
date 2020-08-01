// hammer.js - библиотека свайпов

//Обычный таб
//touchstart

//Когда прикоснулся к элементу и начал водить по нему
//touchmove

//Когда убираешь палец
//touchend

//Когда ведёшь палец и он папал область элемента
//touchenter

//Когда ведёшь палец и он покидает область элемента
//touchleave


//Когда точка соприкоснавения уходит за область браузера
//touchcencel

window.addEventListener('DOMContentLoaded', function () {
    const box = document.querySelector('.box');

    // box.addEventListener('touchstart', function(e) {
    //     e.preventDefault();
    //     console.log("Red box: touchstart");

    //     //все пальцы которые прикоснулись
    //     // console.log(e.touches);

    //     console.log(e.touches[0].target);
    //     console.log(e.target);

    //     //список пальцев которые взаймодействовали
    //     console.log(e.changedTouches);

    //     //Регестрируем те пальцы которые взаимодействуют с элементом
    //     console.log(e.targetTouches);
    // });

    box.addEventListener('touchmove', function (e) {
        e.preventDefault();
        console.log("Red box: " + e.touches[0].pageX);
    });

    //     box.addEventListener('touchend', function(e) {
    //         e.preventDefault();
    //         console.log("Red box: touchend");
    //     });




    //Регулярные выражения


    // 1 вариант записи
    // new RegExp('pattern', 'flags');

    // 2 вариант записи
    // /pattern/flags

    // let ans = prompt('Введите ваше имя');

    // let reg = /n/gi;
    // // Ищем в строке букву n
    // // console.log(ans.search(reg));

    // // Работает с флагом g
    // // console.log(ans.match(reg));
    //Булево
    // console.log(reg.test(ans));


    //Флаги

    // i - изкать независемо от регистра
    // g - глобально во всех вхождениях все
    // m - многострочность
    // . - ищет или заменять любые символы


    //Классы символов
    // \d - найти цифру
    // \D - найти не цифру
    // \w - найти буквы
    // \W - найти не букву
    // \s - найти пробелы
    // \S - найти не пробелы



    //Метод Реплейс
    // let pass = prompt("Введите пароль");

    // //Скрывает заменяя на *
    // console.log(pass.replace(/./g, "*"));
    // // Заменяеь - на :
    // alert('12-34-66'.replace(/-/g, ":"));

    //Ищем все цифры
    // let ans = prompt('Введите число');

    // let reg = /\d/g;

    // // Работает с флагом g
    // console.log(ans.match(reg));

    let str = 'My name is R2D2';

    console.log(str.match(/\w\d\w\d/i));
});
