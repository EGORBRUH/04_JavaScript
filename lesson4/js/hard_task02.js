'use strict';

const numOne = +prompt('Ведите первое число');
const numTwo = +prompt('Введите второе число');

const minNum = () => {
  const totalNum = numOne  > numTwo;
  return totalNum;
};



console.log(minNum());
