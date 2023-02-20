'use strict';

(() => {
  const randomBot = () => { // Рандомное число
    const randomNum = Math.floor(1 + Math.random() * 2);
    if (randomNum === 1) {
      alert('Бот ввел нечетное число!');
    } if (randomNum === 2) {
      alert('Бот ввел четное число!');
    }
    return randomNum;
  };
  const gameObject = {
    ballPlayer: 5,
    ballBot: 5,
  };

  const game = () => { // Функция игры
    const result = {
      ballPlayer: 5,
      ballBot: 5,

      get finalScore() {
        alert(`РЕЗУЛЬТАТ ИГРЫ: \n Игрок: ${this.ballPlayer} \n Компьютер: ${this.ballBot}`);
        return;
      },
    };

    console.log(result);
    return function play() {
      const userInput = prompt(`Сколько шариков из ${result.ballPlayer} вы хотите разыграть?`);
      const playObject = gameObject;
      if (Number.isNaN(+userInput) || userInput == 0) {
       alert('Введите число!!!');
       return play();
      } if (userInput === null || 0) {
        console.log(userInput);
        const question = confirm('Уже уходите?');
        if (question === true) {
          result.finalScore;
          return;
        } else {
          return play();
        }
      } if (userInput > result.ballPlayer && userInput != result.ballPlayer) {  // Как запретить вводить строку?
        console.log(typeof userInput)
        alert('Введите корректное значение!');
        return play();
      }
      const computerPlayer = randomBot();
      console.log(userInput);
      console.log(computerPlayer);

      if (userInput % 2 === 0 && computerPlayer === 2 ||
        userInput % 2 === 0 && computerPlayer === 1) {
        alert('Бот угадал! Вы проиграли!');
        result.ballPlayer -= +userInput;
        result.ballBot += +userInput;
      }
      else {
        alert('Вы выйграли ');
        result.ballBot -= +userInput;
        result.ballPlayer += +userInput;
      }
      if (result.ballPlayer <= 0 === 0 || result.ballPlayer >= 10 === 10 &&
        result.ballBot <= 0 === 0 || result.ballBot >= 10 === 10) {

      } if (result.ballPlayer <= 0 || result.ballBot <= 0 ||
        result.ballPlayer >= 10 || result.ballBot >= 10) {
        alert('Игра окончена!');
        result.finalScore;
        return
      }
      return play();
    };

  };

  window.RPS = game;
})();
