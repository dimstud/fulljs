const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('Second click');
// };

// Действие после клика
// btns.addEventListener('click',() => {
//     alert('Click');
// });

// // Повторно появляется
// btns.addEventListener('click',() => {
//     alert('Second click');
// });



// Действие после наведения event = e
// btn.addEventListener('mouseenter',(e) => {
//     console.log(e.target);
//     e.target.remove();
//     console.log('Hover');
// });


// Чтобы можно было удалить обработчик собития

// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     i++;
//     if (i == 1) {
//         btn.removeEventListener('click', deleteElement);
//     }
// }; 

// btn.addEventListener('click', deleteElement);

// Всплытие событий, сначала внутренее и по иерархии

// let i = 0;
const deleteElement = (e) => {
    // console.log(e.currentTarget); показывает родителя
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
}; 

// btns.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);


// once - опция которая значит выполнит один раз
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});



// Отменяет стандартное поведения браузера
let link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});
