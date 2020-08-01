"use strict";

function first() {
    // задержка
    setTimeout(function() {
        console.log(1);
    }, 500);
}

// Чтобы соблюдалась последовательность
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошёл этот урок');
}

learnJS('JavaScript', done);