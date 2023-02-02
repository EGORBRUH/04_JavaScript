'use strict';

const numOne = +prompt('Ведите первое число');
const numTwo = +prompt('Введите второе число');

const minNum = (x, y) => {
  const totalNum = numOne < numTwo ? numOne : numTwo;
  return totalNum;
};

console.log(minNum());
