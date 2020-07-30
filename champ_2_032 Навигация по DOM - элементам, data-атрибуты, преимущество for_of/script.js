"use strict";

console.log(document.body);
console.log(document.documentElement); //оплный элемент

console.log(document.body.childNodes); //дочерние тэги перенос тоже является нодой

console.log(document.body.firstChild); // первый дочерний элемент

console.log(document.body.firstElementChild); // первый дочерний элемент

console.log(document.body.lastChild); // последний дочерний элемент

console.log(document.body.lastElementChild); // последний дочерний элемент

console.log(document.querySelector('#current').parentNode); //получает родителя элемента
console.log(document.querySelector('#current').parentNode.parentNode); //получает родителя, родителя элемента

console.log(document.querySelector('#current').parentElement); //получает родителя, родителя элемента

console.log(document.querySelector('[data-current="3"]')); //получает атрибут HTML data
console.log(document.querySelector('[data-current="3"]').nextSibling); //получает следующую ноду сосед
console.log(document.querySelector('[data-current="3"]').previousSibling); //получает предыдущую ноду сосед

console.log(document.querySelector('[data-current="3"]').previousElementSibling); //получает предыдущий элемент сосед

console.log(document.querySelector('[data-current="3"]').nextElementSibling); //получает следующий элемент сосед

for (const node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}