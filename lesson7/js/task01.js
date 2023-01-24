'use strict'

const generate = (length) => {
  const mainArr = [];
  const arrLength = length;

  for (let i = 0; i < arrLength; i+= 1) {
    const randomArr = Math.round(Math.random() * 100);
    mainArr.push(randomArr);

  }
  return mainArr;
}

console.log(generate(10));
