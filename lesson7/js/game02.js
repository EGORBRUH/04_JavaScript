'use strict'


let arrNum = [];
let attempts = 3;

const resFoo = (one, two) => {
  let randomResult = one + Math.random() * (one - two);
  return Math.floor(randomResult);
}
function makeRangeIterator (start = 50, end = 100, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step){
    iterationCount++;

  }
  return iterationCount;
}

const game = () => {
  let numOne = +prompt('Введите первое число!');
  let numTwo = +prompt('Введите второе число!');
  const length = 0;
  const result = resFoo(Math.min(numOne), Math.max(numTwo));
  const randomArray = arrNum.push(result);
  const range = makeRangeIterator(50, 100);

  console.log(arrNum);

  if (attempts === 1) {
    alert('Попытки кончились, попробуйте сначала!');
    return;
  }
  attempts--;

  if (isNaN(numOne || numTwo)) {
    alert('Введите число!')
    game();
  } if (numOne && numTwo == null) {
    alert('До встречи!');

  } else if (result === range) {
    let getAttempts = attempts + 15;
    alert('Вы получаете 15 попыток' + attempts + 15);
    return getAttempts;

  } else if (numOne === numTwo) {
    alert('Это число вы уже вводили попытка не засчитывается!')
    attempts++;
    game();
  } else {

  } if (alert === false) {
    alert('Всего хорошего!');

  } else if (randomArray === result){
    alert('Вы угадали!');

  } else if (randomArray > result){
    alert('Меньше! ' + attempts + ' попытки');
    let question = confirm('Продолжаем?');
    if (question === true) {
      game();
    } else if (question === false) {
        alert('До встречи');

    } else if ( attempts === 0) {
      alert('Попытки кончились, попробуйте сначала!');

    }
  } else if (randomArray < result) {
    alert('Больше! ' + attempts + ' Попытки');
    let question = confirm('Продолжаем?');
    if (question === true) {
    game();
    } else if ( question === false) {

    }
  } else if ( attempts === 0) {
      alert('Попытки кончились, попробуйте сначала!');

    }

    return;
};

console.log(resFoo(1,100))
game();


