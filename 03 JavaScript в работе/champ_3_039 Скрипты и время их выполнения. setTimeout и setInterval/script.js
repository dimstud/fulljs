const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0)); // получает класс под определенным индексом
// console.log(btns[1].classList.add('red', 'fash')); // добавляет класс
// console.log(btns[0].classList.remove('blue')); // удаляет класс
// console.log(btns[0].classList.toggle('blue')); // услиесть класс, то уберётся, а если нет класса, то добавиться

// contains для условие 
// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }


// Для меню-гамбургер
btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }


    //  невсегда
    btns[1].classList.toggle('red');
});

//  older
console.log(btns[0].className);

// Делегирование событий
wrapper.addEventListener('click', (event) => {
    // console.dir(event.target);

    //  лучше
    // if (event.target && event.target.tagName == "BUTTON") {
    //     console.log('Hello!');
    // }

    // Обычный
    // if ( event.target && event.target.classList.contains('blue') ) {
    //     console.log('Hello!');
    // }

    // от Google matches-совпадает с чем то
    if (event.target && event.target.matches("button.red")) {
        console.log('Hello!');
    }
});

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello!');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);