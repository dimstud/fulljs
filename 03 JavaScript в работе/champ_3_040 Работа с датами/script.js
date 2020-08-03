'use strict';

// const now = new Date(2020, 8, 3, 20);
// const now = new Date(0);
// const now = new Date(-9999999999999);
const now = new Date('2020-08-03');
//  new Date.parse('2020-08-03'); // одинаковые как выше

console.log(now.setHours(18, 40)); // установка часов set с учетом UTC
console.log(now);

// console.log(now);
// console.log(now.getFullYear()); // год
// console.log(now.getMonth()); // месяц от 0-11
// console.log(now.getDate()); // день от 1-31
// console.log(now.getDay()); // номер дня недели воскресение=0 - суббота=6
// console.log(now.getHours()); // часы
// console.log(now.getUTCHours()); // часы по UTC гринвич

// console.log(now.getTimezoneOffset()); // получает разницу между поясом и UTC в минутах
// console.log(now.getTime()); // прошедшие милисекунды с 1970

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3; // возводит в степень
}

let end = new Date();

alert(`Цикл отработал за ${end - start} милисекунд`);