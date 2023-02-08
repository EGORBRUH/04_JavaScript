'use strict';


const recFoo = (array) => {
  const arrNum = Math.floor(Math.random() * 11);
  array.push(arrNum);
    console.log(arrNum);
  if ((array.reduce((acc, curr) => acc + curr)) > 50) return array;

  return recFoo(array);
}

console.log(recFoo([1,2,3,4,5]));
