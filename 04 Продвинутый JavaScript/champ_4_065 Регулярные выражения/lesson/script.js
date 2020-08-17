'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('Введите вашн имя');



// const reg = /n/;

// Флаги
// i- независимо от регистра
// g- несколько вхождений


// Классы

// \d - цифр
// \w -слова
// \D - не цифр
// \W - не слова
// \s -пробелы


// const reg = /n/ig;

// Найдёт только первую
// console.log(ans.search(reg));

// Получаем массив
// console.log(ans.match(reg));


// const pass = prompt('Password');

// Все символы превротятся в звёздочку
// console.log(pass.replace(/./g, "*"));

// Превратиться только точка
// console.log(pass.replace(/\./g, "*"));


// Перепишет - на :
// console.log('12-34-56' .replace(/-/g, ':'));


// const ans = prompt('Введите вашн число');

// const reg = /\d/g;
// console.log(ans.match(reg));

const str = 'My name is R2D2';

console.log(str.match(/\D/ig));