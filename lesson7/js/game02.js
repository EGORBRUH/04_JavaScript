'use strict'

// const randomNum1 = parseInt(Math.round(Math.random() * 10 + 1));
let arrNum = [];
let attempts = 3;

const game = () => {
  let numOne = +prompt('Введите первое число!');
  let numTwo = +prompt('Введите второе число!');
  const randNum = Math.random() === numOne || numTwo && numOne || numTwo * 10 + 1;
  const length = 0;

  const randomArray = arrNum.push(randNum);

  console.log(arrNum);

  for (let i = 0; i < length; i++) {

  }

  if (attempts === 1) {
    alert('Попытки кончились, попробуйте сначала!');
    return;
  }
    attempts--;

    if(isNaN(numOne || numTwo)) {
    alert('Введите число!')
    game();
    }
    else if (numOne && numTwo == null) {
    alert('До встречи!');
    return game();
  } else if (alert === false) {
    alert('Всего хорошего!');
    return game();
  } else if (randomArray === randNum){
    alert('Вы угадали!');
    return game();
  } else if (randomArray > randNum){
    alert('Меньше! ' + attempts + ' попытки');
    let question = confirm('Продолжаем?');
    if (question === true) {
      game();
    } else if (question === false) {
      return game();
    } else if ( attempts === 0) {
      alert('Попытки кончились, попробуйте сначала!');
      return;
    }
  } else if (randomArray < randNum) {
    alert('Больше! ' + attempts + ' Попытки');
    let question = confirm('Продолжаем?');
    if (question === true) {
    game();
    } else if ( question === false)
    return game();
  } else if ( attempts === 0) {
      alert('Попытки кончилмсь, попробуйте сначала!');
      return;
    }

};

game();

