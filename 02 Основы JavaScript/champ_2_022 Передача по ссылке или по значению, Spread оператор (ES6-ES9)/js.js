"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; // Ссылка

copy.a = 10; // это полуается ссылка на obj 



// Полное копирование объекта поверхностное
function copyr(manObj) {
    let objCopyr = {};

    let key;
    for (key in manObj) {
        objCopyr[key] = manObj[key];
    }
    return objCopyr;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};
// Клонирование объекта поверхностное
const newNumbers = copyr(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);



const add = {
    d: 17,
    e: 20
};



// помешение в объект numbers - куда помещать, add - что помещать
// console.log(Object.assign(numbers, add));

// Клонировать в пусстой объект
const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);




// Клонирование массива поверхностная
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asasasa';

console.log(newArray);
console.log(oldArray);


// Новый способ клонирования
const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejounal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];// спрет оператор

    console.log(internet);


    // Передача из массива в объект
    function log(a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
    }

    const num = [2, 5, 7];

    log(...num);




    const array = ['a', 'b'];

    const newAarray = [...array];


    const q = {
        one: 1,
        two: 2
    };

    const newObj = {...q};