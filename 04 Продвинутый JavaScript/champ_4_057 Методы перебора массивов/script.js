'use strict';

// Filter

//const names = ['ivan', 'anna', 'ksenia', 'voldemart'];

//const shortnames = names.filter(function (name) {
//    return name.length < 5;
//});

//console.log(shortnames);



// Map - трансформирует элемент массива ввнутри

//let answers = ['IvAn', 'AnnA', 'Hello'];

//answers = answers.map(item => item.toLowerCase());

//console.log(answers);



//Every/Some

//const some = [4, 'qwq', 'sfasds'];


////если хотябы один
////console.log(some.some(item => typeof(item) === 'number'));


////если все
//console.log(some.every(item => typeof (item) === 'number'));



//Reduce

//const arr = [4, 5, 1, 3, 2, 6];

//const res = arr.reduce((sum, current) => sum + current, 3);
//console.log(res);

//const arr = ['apple', 'pear', 'plum'];

//const res = arr.reduce((sum, current) => `${sum}, ${current}`);
//console.log(res);




const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
    .filter(item => item[1] === 'persone')
    .map(item => item[0]);

console.log(newArr);



const setes = setTimeout(() => {
    console.log('Stop');
}, 5000); 