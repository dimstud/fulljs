"use strict";

let str = 'sone';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

const soldier = {
    health: 400,
    armor: 100,
    saeHello: function() {
        console.log('hello');
    }
};
// Самый простой способ заимствования прототипа
// const jonh = Object.create(soldier);


const jonh = {
    health: 100
};
// устарелый вариант
jonh.__proto__ = soldier;
console.log(jonh);
jonh.saeHello();

// Новый вариант jonh - кому присвоить, soldier - откуда брать
Object.setPrototypeOf(jonh, soldier);
jonh.saeHello();