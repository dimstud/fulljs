let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100 
};

//Сказать что john потомок от solder
john.__proto__ = soldier;

console.log(john);
console.log(john.armor);