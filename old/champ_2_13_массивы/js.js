// let arr = ["first", 2, 3, "four", 5];


// // // Удалить элемент с конца
// // arr.pop();

// // //Добавить элемент в конец
// // arr.push('5');

// // //Удалить первый элемент
// // arr.shift();

// // //Добавить первый элемент 
// // arr.unshift('1');

// //Перебор массива
// // for (let i =0; i < arr.length; i++) {
// //     console.log(arr[1]);
// // }
// //Перебор массива
// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + " (массив: " + mass + ')');
// });

// console.log(arr);


// //Перебор массива (неработает с объектами)

// let mass = [1,3,4,6,7]

// for (let key of mass) {
//     console.log(key);
// }


//Преобразование в массив
// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);


//Преобразование в строку
// let arr = ["asasa", 'asasas', 'ssds', 'sasasa'],
//     i = arr.join(', ');

// console.log(i);


//Сортировка
// let arr = ["asasa", 'asasas', 'ssds', 'sasasa'],
let arr = [2,23,54,1,0,12],
    //Сортировка строк
    i = arr.sort(compareNum);
 
//Сортировка чисел
function compareNum(a,b) {
    return a-b;
}

console.log(arr);
