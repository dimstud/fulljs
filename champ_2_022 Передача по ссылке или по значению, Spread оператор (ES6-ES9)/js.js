"use strict";

const arr = [1, 2, 3, 6, 8, 10];

console.log(arr.length); // Количество элементов

arr.pop(); // удаляет последний
arr.push(10); // добавляет в конец массива
arr.sort(compareNum);
// Для сортировки чисел
function compareNum(a, b) {
    return a - b;
}

console.log(arr);

// Цикл перебора массива
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};

// Цикл перебора только для массива
for (let value of arr) {
    console.log(value);
}

// Цикл перебора массива главный item-каждый элем. массива, i-номер по порядку, arr-сам массив
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`)
});

const str = prompt("", "");
const products = str.split(", "); // разделитель ввода в массив
products.sort();// сортировка
console.log(products.join("; ")); // разделитель вывода на строничку