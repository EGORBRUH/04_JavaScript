'use strict'


const num = (x , y) => {
  if (y !== 0) {
    const z = x % y;
    return num(y, z);
  }
  return x;
};

let x = prompt('Введите первое число');
let y = prompt('Введите второе число');
alert('НОД чисел ' + x + ' и ' + y + ' будет: ' + num(x, y));
