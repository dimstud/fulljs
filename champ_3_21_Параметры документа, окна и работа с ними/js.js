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

// Прокрутить вверх, единственное значение которое  можно изменять
btn.addEventListener('click', function() {
    console.log(box.scrollTop);
    box.scrollTop = 0;
});