//Получение элемента через id
let box = document.getElementById('box'),
    //Получение элемента через tag
    btn = document.getElementsByTagName('button'), 
    //Получение элемента через class (все)
    circle = document.getElementsByClassName('circle'),
    //Получение элемента через селектор с точкой (все class)
    heart = document.querySelectorAll('.heart'),
    //Получение элемента через селектор с точкой (первый или один селектор(class))
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

//Изменение элемента через JS изменив CSS значение
box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

//Изменение элемента через JS цикл изменив CSS значение
// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

//Изменение элемента через JS цикл изменив CSS значение

// heart.forEach(function(item, i, hearts) {
//     item.style.backgroundColor = 'blue';
// }); 
// для того чтобы добавить новый элемент
let div = document.createElement('div'),
    text = document.createTextNode('Тут был я');
//Добавить class к элементу
div.classList.add('black');

//Ставим элемент в разметку (в конец body)
// document.body.appendChild(div);


//Ставим элемент в разметку (в конец wrapper)
// wrapper.appendChild(div);


//Вставить HTML ког на страницу
// div.innerHTML = '<h1>Hello World</h1>';


//Вставить HTML ког на страницу(безопасный)
div.textContent = "Hello World";

//Ставим элемент перед имеющиемся (вначале body)
document.body.insertBefore(div, circle[0]);

//Удалить элемент со страницы
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);

//Замена одного элемента на другой
document.body.replaceChild(btn[1], circle[1]);


console.log(div);
console.log(text);