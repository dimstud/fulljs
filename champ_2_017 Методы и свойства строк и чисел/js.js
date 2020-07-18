"use strict";

const str = "test";
const arr = [1, 2, 4];

// console.log(arr.length); // Количество элементов
console.log(str.toUpperCase()); // Заглавные буквы
console.log(str.toLowerCase()); // Строчные буквы

const fruit = 'Some fruit';

console.log(fruit.indexOf("fruit")); // количество символов перед словом

const logg = "Hello world";
console.log(logg.slice(6, 11));// с какой и по какую букву вырезать также и с конца только -11, -6
console.log(logg.substring(6, 11));// с какой и по какую букву вырезать
console.log(logg.substr(6, 5));// с какой и по какую букву вырезать, второй аргумент указывает сколько удалить букв

const num = 12.2;
console.log(Math.round(num));// Округляет до близжайшего целого числа

const test = '12.2px';
console.log(parseInt(test)); // переводит в другую систему счисления = 12
console.log(parseFloat(test)); // переводит в другую систему счисления = 12.2