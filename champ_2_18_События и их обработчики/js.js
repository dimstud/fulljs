//Получаем элемент со страницы через querySelectorAll чтобы работал метода forEatch
let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    //Получение элемента для удаления стандартного поведения браузера
    link = document.querySelector('a');

//Взаимодействие при клике на элемент (одна функция на один элемент)
// btn[0].onclick = function() {
//     alert('Вы нажали на первую кпопку')
// };

// //Взаимодействие при клике на элемент(несколько функций на один элемент)
// btn[0].addEventListener('click', function() {
//     alert('Вы нажали на первую кпопку');
//     alert('Вы опять нажали на первую кпопку');
// });


// //Взаимодействие при навидение мыши на элемент(несколько функций на один элемент)
// btn[0].addEventListener('mouseenter', function() {
//     alert('Вы навели на первую кнопку');
// });

//Для того чтобы узнать какое событие произошло
// btn[0].addEventListener('click', function(event) {
    
    //Для того чтобы произвести другие дейстия с элементом
    // let target = event.target;
    //Удаляет элемент
    // target.style.display = 'none';

    // console.log('Произошло событие: ' + event.type + ' на элементе' + event.target);
// });

// wrap.addEventListener('click', function() {
//     console.log('Произошло событие: ' + event.type + ' на элементе' + event.target);
// });

//Удаление стандартного поедения браузера
link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Произошло событие: ' + event.type + ' на элементе' + event.target);
});

// Отменяем стандартное поведение ьраузера у всех элементов группы
btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log("Мы вышли");
    });
});
