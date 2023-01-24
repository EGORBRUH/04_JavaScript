'use strict'

const generate02 = (length, n , m) => {
  const mainArr = [];
  const min = n;
  const max = m;
  const arrLength = length;

  for (let i = 0; i < arrLength; i+= 1) {
    const randomArr = Math.round(Math.random() * (max - min) + min);
    mainArr.push(randomArr);

  }
  return mainArr;
}

console.log(generate02(10, -10, 100));


