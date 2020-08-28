export let one = 1;

let two = 2;

export {two};

// export function sayHi() {
//     console.log('Hello');
// }


// Экспорт по умолчанию
export default function sayHi() {
    console.log('Hello');
}