'use strict';

const persone = {
    name: 'Alex',
    tel: '+74444444444',
    parents: {
        mom: 'Olga',
        dad: 'Mikle'
    }
};

// Для передачи данных на сервер stringify, принимает данные от сервера persone
// console.log( JSON.parse(JSON.stringify(persone)) );

//  Превратит в глубокий клон
const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);