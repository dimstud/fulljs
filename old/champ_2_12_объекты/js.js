let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.color = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);



// Цикл перебора объекта

for (let key in options) {
    console.log('Свойства ' + key + ' имеет значение' + options[key]);
}


// Узнать что содержит объект

console.log(Object.keys(options).length);