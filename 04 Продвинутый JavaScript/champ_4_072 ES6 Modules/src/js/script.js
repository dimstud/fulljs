//  Именованый способ
// import {one, two} from './main';

// console.log(`${one} and ${two}`);


// переименовал one в first
// import {one as first} from './main';

// console.log(first);

//  Экспортировать всё
// import * as data from './main';

// console.log(`${data.one} and ${data.two}`);
// data.sayHi();


// Экспорт по умолчанию
// import {one, two} from './main';
// import sayHi from './main';


// console.log(`${one} and ${two}`);
// sayHi();


// Раболтает без сборщиков
import {one, two} from './main.js';
import sayHi from './main.js';


console.log(`${one} and ${two}`);
sayHi();