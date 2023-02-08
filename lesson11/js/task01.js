'use strict'


const randomNum = parseInt(Math.round(Math.random() * 10 + 1));

const game2 = () => {
  const userNum =+ prompt(`Введите число!`);


  if (isNaN(userNum)) {
    alert('Введите число');
    game2();
    if (userNum === null) {
      alert(`До свидания!`);
      return;
    } else {
      return game2();
    }
  }

  if(userNum === randomNum) {
    alert(`Вы угадали!`)
    return;
  } else if (userNum < randomNum) {
    alert(`Меньше!`);
    let question = confirm(`Сыграем еще?`)
    if (question === true) {
      return game2();
    } else {
      alert(`До свидания!`);
      return;
    }

  } else if (userNum > randomNum) {
    alert(`Больше!`);
    let question = confirm(`Сыграем еще?`);
    if (question === true) {
      return game2();
    } else {
      alert(`До свидания!`);
      return;
    }

  }
  if (userNum === null) {
    alert(`До свидания!`);
    return;
  } else {
    return game2();
  }

};

game2();







