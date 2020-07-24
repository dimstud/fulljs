"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

// Деструктуризация 
const {border, bg} = options.colors;
console.log(border);



// переводит в массив со всеми элем. количество элем.
console.log(Object.keys(options).length);

console.log(options["colors"]["border"]);
console.log(options.name);

delete options.name; // удалить элемент

console.log(options);

// Цикл перебора элементов в объекте, key каждый элемент (name, width и тд), options[key] значение элемента 
for (let key in options) {
    console.log(`Свойста ${key} имеет знаение ${options[key]}`);
}

// Цикл перебора вложенных объектов с счётчиком сколько свойств
let counter = 0;
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойста ${i} имеет знаение ${options[key] [i]}`);
            counter++;
        }
    } else {
        console.log(`Свойста ${key} имеет знаение ${options[key]}`);
        counter++;
    }
}

console.log(counter);