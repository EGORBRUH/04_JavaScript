'use strict';

(() => {

  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const computerInput = () => {
    let computerResult = null;

    const computerChoice = Math.random();

    if (computerChoice < 0.34) {
      computerResult = 'камень';
    } else if (computerChoice < 0.67) {
      computerResult = 'ножницы';
    } else ( computerResult = 'бумага');

    return computerResult;
  };

  const gameObject = {
    playerScore: 0,
    computerScore: 0,

    get finalScore() {
      alert (`РЕЗУЛЬТАТ ИГРЫ: \n игрок: ${this.playerScore} \n компьютер: ${this.computerScore}`);
      return;
    },
  };

  const game = () => {
    const results = {
      computerScore: 0,
      playerScore: 0,
    };

    return function play() {
      const userPlayer = prompt('камень, ножницы, бумага');
      const computerPlayer = computerInput();
      const playObject = gameObject;

      if(userPlayer !== FIGURES_RUS[0] && userPlayer !== FIGURES_RUS[1] && userPlayer !== FIGURES_RUS[2]){
        alert('Введите корректное значение!');
        return play();
      }

      if(userPlayer === null) {
        let question = confirm ('Уже уходите?');
        if(question === true){
          playObject.finalScore;
          return;
        } else {
          return play();
        }
      };

      if (userPlayer === FIGURES_RUS[0] && computerPlayer === FIGURES_RUS[1] ||
        userPlayer === FIGURES_RUS[1] && computerPlayer === FIGURES_RUS[2] ||
        userPlayer === FIGURES_RUS[2] && computerPlayer === FIGURES_RUS[0]) {
        alert(`Вы выбрали: ${userPlayer} \n Компьютер выбрал: ${computerPlayer} \n Вы выйграли!`);
        results.playerScore++;
        playObject.playerScore = results.playerScore;
        let more = confirm('Сыграем еще?');
        if(more === true) {
          return play();
        } else {
          playObject.finalScore;
          return;
        };

      } else if (userPlayer === computerPlayer) {
        alert(`Вы выбрали: ${userPlayer} \n Компьютер выбрал: ${computerPlayer} \n Ничья!`);
        let more = confirm('Сыграем еще?');
        if(more === true) {
          return play();
        } else {
          playObject.finalScore;
          return;
        };

      } else {
        alert(`Вы выбрали: ${userPlayer} \n Компьютер выбрал: ${computerPlayer} \n Вы проиграли!`);
        results.computerScore++;
        playObject.computerScore = results.computerScore;
        let more = confirm('Сыграем еще?');
        if(more === true) {
          return play();
        } else {
          playObject.finalScore;
          return;
        };
      }
    };

  };


  window.RPS = game;

})();

