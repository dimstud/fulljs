'use strict';

const app = '123';

const number = 1;

// Анонимная самовызывающая функция
(function(){
    let number = 2;
    console.log(number);
    console.log(number +3);
}());

console.log(number);

const user = (function(){
    const privat = function() {
        console.log('! am privat!');
    };

    return {
        sayHallo: privat
    };
}());

user.sayHallo();