'use strict';

(() => {
 // const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const result = {
    player: 0,
    computer: 0,
  }
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === 'камень' || userInput === 'ножницы' || userInput === 'бумага') {
    console.log(userInput);
    return userInput;
  } else if (userInput === false) {
   alert('До встречи!')
  }
}
const getComputerChoice = () => {
  const randomNumber = Math. floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'камень';
    case 1:
      return 'бумага';
    case 2:
      return 'ножницы';
  }
};


const determineWinner = (userChoice, computerChoice) => {

  if (userChoice === computerChoice) {
     return 'Ничья!'
  }

  if ( userChoice === 'камень') {
      if(computerChoice === 'paper') {
        return alert('Сорян! Комп сегодня в ударе!');
      }  else {
        return alert('Поздравляю! Вы выйграли!');
      }

  }
  if ( userChoice === 'бумага') {
    if (computerChoice === 'ножницы') {
      return alert('Сорян! Комп сегодня в ударе!');
    } else {
      return alert('Поздравляю! Вы выйграли!');
    }

  }
  if (userChoice === 'ножницы') {
    if (computerChoice === 'камень') {
      return alert('Сорян! Комп сегодня в ударе!');
    } else {
      return alert('Поздравляю! Вы выйграли!');
    }
  }

};

const game = () => {

  const userChoice = prompt('Введите значение');
  const computerChoice = getComputerChoice();
  if (computerChoice === computerChoice) {
    alert('Компьютер выбрал: ' + computerChoice)
  }
  if (userChoice == null) {
    let question = confirm('Вы точно хотите выйти?')
  } if (confirm === true){
    return this.result;
  } else if(confirm === false) {
    return determineWinner();
  }

  console.log(determineWinner(userChoice, computerChoice));
  return  game();
};
game();

})();
