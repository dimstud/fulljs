'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


// Цикл позволяет окрасить несколько элемментов
// for (let i = 0; i , hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});


// Добавление элементов на страницу
const div = document.createElement('div');
const text = document.createTextNode('Тут был я');

// Добавление класса новому элементу
div.classList.add('black');

// Добавление элемента в самый конец body 
document.body.append(div);
// Старая версия
// document.body.appendChild(div);

// Добавление элемента в самый конец wrapper
// document.querySelector('.wrapper').append(div);
wrapper.append(div);

// Добавление элемента в самый конец wrapper
wrapper.prepend(div);

// Добавление элемента перед hearts[0]
hearts[0].before(div);
// Старая версия
// wrapper.insertBefore(div, hearts[1]);

// Добавление элемента после hearts[0]
hearts[0].before(div);

// Удаляет элемента circles[0]
circles[0].remove();
// Старая версия
// wrapper.removeChild(hearts[1]);

// Заменить элемент hearts[0] на circles[0](будет вместо hearts[0])
hearts[0].replaceWith(circles[0]);
// Старая версия
wrapper.replaceChild(circles[0], hearts[0]);

// Добавление текста
div.innerHTML = "<h1>Hello World</h1>";

div.textContent = "Hello"; // безопаснее

// Вставить элемент кода HTML перед или после beforebegin - перед div, afterbegin - внутри в начале div, beforeend - внутри в конце div, afterend - после div
div.insertAdjacentHTML("afterend", "<h2>Hi</h2>")