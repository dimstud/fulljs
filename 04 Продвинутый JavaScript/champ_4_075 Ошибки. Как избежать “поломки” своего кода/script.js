'use strict';

// try {
//     console.log('Normal');
//     console.log(a);
//     console.log('result');
// } catch(error) {
//     console.log(error.namr);
//     console.log(error.message);
//     console.log(error.stack);
// } finally {

// }

// console.log('Still naormal');


try {
    document.querySelector('.active').addEventListener('click', () => {
        console.log('click');
    });
} catch(e) {
    console.log(e);
}


console.log('normal');