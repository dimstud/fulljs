// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello! ' + this.name);
//     };
// }

// User.prototype.exit = function(name) {
//     console.log('Пользователь ' + this.name + ' вышел');
// };

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.exit();
// 'use strict';
// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log('Hello! ${this.name}')
//     }
//     exit() {
//         console.log('Пользователь ${this.name} вышел')
//     }
// }

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.exit();
// alex.exit();

// 'use strict';
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log( sum() );
// }
// showThis(4, 5);
// showThis(5, 5);

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// let user = {
//     name: "John"
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + ' ' + surname);
// }
// // Для аргумента функии со строкой параметров
// console.log(sayName.call(user, 'Smith'));
// // Для нескольких аргументов функции с массивом параметров
// console.log(sayName.apply(user, ['Snow']));

// function count(number) {
//     return this * number;
// }

// // Метод bind() привязывает к thid 
// let double = count.bind(2);
// console.log(double(3));
// console.log(double(10));

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
	this.style.backgroundColor = 'red';	
	function showThis() {
		console.log(this);
	}
	showThis();
});

// 1) Просто вызов функции - window/undefind
// 2) Метод объекта -  this = объект 
// 3) Конструктор (new) - this = новый созданный объект  
// Указание конкнкретного контекста - call, appy, bind