'use strict'

let numOne = +prompt('Введите первое число!');
let numTwo = +prompt('Введите второе число!');
let arrNum = [numOne, numTwo];
const num = Math.round(Math.abs((numTwo - numOne) * 0.3))

console.log(arrNum);
const resFoo = (one, two) => {
  let randomResult = one + Math.random() * (one - two);
  return Math.floor(randomResult);
}
const result = resFoo(numOne, numTwo);

let countAttempts = '';
if (result > 0 && result < 50) {
  countAttempts = num
}
if (result > 50 && result < 100) {
  countAttempts = 15;
}


console.log(countAttempts);
const game = () => {

    if (countAttempts > 0) {
      const userPlayer = +prompt('Ставки сделаны, начинаем игру!');
      console.log(userPlayer);

      if (userPlayer === 0) {
        alert('GameOver!')
      }

      if (userPlayer === result) {
        alert('Ты молодец!')
        return;
      }
      if (userPlayer > result) {
        alert('Меньше! Еще разок!')
      }
      if (userPlayer < result) {
        alert('Больше! Еще разок!')
      }
      countAttempts = countAttempts - 1;
    } else {
      alert('Ты проиграл!')
      return;
    }
    return game();

}


game();


