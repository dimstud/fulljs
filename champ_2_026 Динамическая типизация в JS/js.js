"use strict";

// Превратить в String
// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)
console.log(typeof(null + ''));

const num = 5;

console.log('https://vk.com/catalog/' + num);

const font = 26 + 'px';

// Превратить в Number
// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+('4')));

// 3) 10 - система счисления
console.log(typeof(parseInt("15px", 10)));



let answ = +prompt('Hello', "");

// Превратить в Boolean

// 0, '', null, undefined, NaN; - ложь 

// 1)
let switcher = null;

if (switcher) {
    console.log('Working ...');
}

switcher = 1;

if (switcher) {
    console.log('Working ...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'4'));