'use strict'

const randomNum = parseInt(Math.round(Math.random() * 10 + 1));


const game = () => {
  const userNum =+ prompt(`Введите число!`);


  if (isNaN(userNum)) {
    alert('Введите число');
    game();
    if (userNum === null) {
      alert(`До свидания!`);
      return;
    } else {
      return game;
    }
  }

  if(userNum === randomNum) {
    alert(`Вы угадали!`)
    return;
  } else if (userNum < randomNum) {
    alert(`Меньше!`);
    let question = confirm(`Сыграем еще?`)
    if (question === true) {
      return game();
    } else {
      alert(`До свидания!`);
      return;
    }

  } else if (userNum > randomNum) {
    alert(`Больше!`);
    let question = confirm(`Сыграем еще?`);
    if (question === true) {
      return game();
    } else {
      alert(`До свидания!`);
      return;
    }

  }
  if (userNum === null) {
    alert(`До свидания!`);
    return;
  } else {
    return game();
  }

};

game();







