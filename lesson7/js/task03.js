'use strict';

const strFoo = (array, str) => {
  const changeArr = str;

  const resultFn = array.filter((num) => {
    if (changeArr === 'odd') {
      return !(num % 2);
    } else if (changeArr === 'even') {
      return num % 2;
    }
  });
  return resultFn;
}


const generate2 = (length, n, m, str) => {
  const mainArr = [];
  const arrLength = length;
  const minNum = n;
  const maxNum = m;
  const changeArr = str;


  for ( let i = 0; i < arrLength; i += 1) {
    const workArr = Math.round(Math.random() * (maxNum - minNum) + minNum);
    mainArr.push(workArr);
  }
  return strFoo(mainArr, changeArr);
}

console.log(generate2(5, -5, 5, 'even'));
