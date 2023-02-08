'use strict';


const task02 = (array) => {
  const arrNum = Math.floor(Math.random() * 11);
  array.push(arrNum);
    console.log(arrNum);
  if ((array.reduce((acc, curr) => acc + curr)) > 50) return array;

  return task02(array);
}

console.log(task02([1,2,3,4,5]));
