//Обычный таб
//touchstart

//Когда прикоснулся к элементу и начал водить по нему
//touchmove

//Когда убираешь палец
//touchend

//Когда ведёшь палец и он папал область элемента
//touchenter

//Когда ведёшь палец и он покидает область элемента
//touchleave


//Когда точка соприкоснавения уходит за область браузера
//touchcencel

window.addEventListener('DOMContentLoaded', function() {
    let box = document.querySelector('.box');

    // box.addEventListener('touchstart', function(e) {
    //     e.preventDefault();
    //     console.log("Red box: touchstart");

    //     //все пальцы которые прикоснулись
    //     // console.log(e.touches);

    //     console.log(e.touches[0].target);
    //     console.log(e.target);

    //     //список пальцев которые взаймодействовали
    //     console.log(e.changedTouches);

    //     //Регестрируем те пальцы которые взаимодействуют с элементом
    //     console.log(e.targetTouches);
    // });

    box.addEventListener('touchmove', function(e) {
        e.preventDefault();
        console.log("Red box: " + e.touches[0].pageX);
    });

//     box.addEventListener('touchend', function(e) {
//         e.preventDefault();
//         console.log("Red box: touchend");
//     });
});