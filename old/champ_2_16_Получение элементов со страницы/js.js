//Получение элемента через id
let box = document.getElementById('box'),
    //Получение элемента через tag
    btn = document.getElementsByTagName('button'), 
    //Получение элемента через class (все)
    circle = document.getElementsByClassName('circle'),
    //Получение элемента через селектор с точкой (все class)
    heart = document.querySelectorAll('.heart'),
    //Получение элемента через селектор с точкой (первый или один селектор(class))
    oneHeart = document.querySelector('.heart');

console.log(box);
console.log(btn);
console.log(btn[0]);
console.log(circle[2]);
console.log(heart);
console.log(heart[1]);
console.log(oneHeart);