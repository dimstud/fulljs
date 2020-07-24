let box =document.querySelector('.box'),
    btn = document.querySelector('button');

    // Свойтво ширины не учитывая полосу прокрутки
let width = box.clientWidth,
    // Свойство высоты не учитывая полосу прокрутки
    height = box.clientHeight;

console.log(width);
console.log(height);


//     // Свойтво ширины от border до border
//     let width = box.offsetWidth,
//     // Свойство высоты от border до border
//     height = box.offsetHeight;

// console.log(width);
// console.log(height);


//    // Свойтво ширины с учетом всей прокрутки ктороая скрывается под scroll
//    let width = box.scrollWidth,
//    // Свойство высоты с учетом всей прокрутки ктороая скрывается под scroll
//    height = box.scrollHeight;

// console.log(width);
// console.log(height);


// // Раскрыть весь текст который скрыт
// btn.addEventListener('click', function() {
//     box.style.height = box.scrollHeight + 'px';

// });

// Получение координатов элемента
console.log(box.getBoundingClientRect());

// Чтобы получить ширину документа
console.log(document.documentElement.clientWidth);

// Чтобы получить высоту документа
console.log(document.documentElement.clientHeight);

// Прокрутить вверх, единственное значение которое  можно изменять
btn.addEventListener('click', function() {
    console.log(box.scrollTop);
    box.scrollTop = 0;
});


// Перемещение страницы по координатам x, y относилетьно нашего положения
// 1) на столько пикселей вниз
scrollBy(0, 200);

//2) в определённое место в пикселях
scrollTo(0, 200);