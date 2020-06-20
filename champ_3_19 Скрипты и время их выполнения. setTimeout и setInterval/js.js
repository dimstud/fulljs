// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);

let timerId = setInterval(sayHello, 3000);
clearTimeout(timerId);

function sayHello() {
    console.log('Hello World');
}