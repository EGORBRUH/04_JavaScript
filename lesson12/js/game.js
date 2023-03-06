'use strict';


(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];

  const computerInput = () => {
    let computerResult = null;

    const computerChoice = Math.random();

    if (computerChoice < 0.34) {
      computerResult = langObj.RU === 'камень' ? langObj.ENG : 'rock';
    } else if (computerChoice < 0.67) {
      computerResult = langObj.RU === 'ножницы' ? langObj.ENG : 'scissors';
    } else ( computerResult = langObj.RU === 'бумага' ? langObj.ENG : 'paper');

    return computerResult;
  };



  const langObj = {
    'RU': {
      figures: ['камень', 'ножницы', 'бумага'],
      userPlayer: 'камень, ножницы, бумага?',
      valid: 'Введите корректое значение!',
      exit: 'Вы уверены что хотите выйти?',
      total: 'СЧЕТ:',
      more: 'Сыграем еще?',
      you:  `Вы выбрали:`,
      comp: `Компьютер выбрал:`,
      win: `Вы выйграли!`,
      draw:  `Ничья!`,
      lost: `Вы проиграли!`,
      result: `РЕЗУЛЬТАТ ИГРЫ:`,
      player: `Игрок`,
      compPLayer: `Компьютер`,
    },
    'ENG': {
      figures: ['rock', 'scissors', 'paper'],
      userPlayer: 'rock, scissors, paper?',
      valid: 'Please enter a valid value',
      exit: 'Are you sure you want to exit?',
      total: 'TOTAL:',
      more: 'Will we play again?',
      win:  `You have won!`,
      you:  `You have selected:`,
      draw: `Draw!`,
      comp: `The computer has selected:`,
      lost: `You have lost!`,
      result: `RESULT GAME:`,
      player: `Player:`,
      compPLayer:`Computer:`,
    },
  };


  const game = (language) => {
    const results = {
      computerScore: 0,
      playerScore: 0,
    };
    const gameObject = {
      playerScore: 0,
      computerScore: 0,

      get finalScore() {
        alert (`РЕЗУЛЬТАТ ИГРЫ: \n игрок: ${this.playerScore} \n компьютер: ${this.computerScore}`);
        return;
      },
    };
    const lang = language === 'EN' || language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;

    return function play() {
      const notification = () => {
        let notification;
        if (language === 'ENG' || language === 'EN') {
          notification = langObj.ENG;
        } else {
          notification = langObj.RU;
        }
        return notification;
      };
      const gameObject = {
        playerScore: 0,
        computerScore: 0,

        get finalScore() {
          alert (`${langSelect.result} \n ${langSelect.player} ${this.playerScore} \n ${langSelect.compPLayer} ${this.computerScore}`);
          return;
        },
      };
      const langSelect = notification();
      const computerPlayer = computerInput();
      const userPlayer = prompt(`${langSelect.userPlayer}`, '');

      const playObject = gameObject;
      console.log(userPlayer)
      console.log(computerPlayer)
      const inputValue = langSelect.figures === userPlayer

      if(inputValue === langSelect.figures[0] || inputValue === langSelect.figures[1] || inputValue === langSelect.figures[3]){
        alert(`${langSelect.valid}`);
        return play();
      }

      if(userPlayer === null) {
        let question = confirm (`${langSelect.exit}`);
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
        alert(`${langSelect.you} ${userPlayer} ${langSelect.comp} ${langSelect.figures = computerPlayer} ${langSelect.win}`);
        results.playerScore++;
        playObject.playerScore = results.playerScore;
        let more = confirm(`${langSelect.more}`);
        if(more === true) {
          return play();
        } else {
          playObject.finalScore;
          return;
        };

      } else if (userPlayer === computerPlayer) {
        alert(`${langSelect.you} ${userPlayer} ${langSelect.comp} ${computerPlayer} ${langSelect.draw}`);
        let more = confirm(`${langSelect.more}`);
        if(more === true) {
          return play();
        } else {
          playObject.finalScore;
          return;
        };

      } else {
        alert(`${langSelect.you} ${userPlayer} ${langSelect.comp} ${computerPlayer} ${langSelect.lost}`);
        results.computerScore++;
        playObject.computerScore = results.computerScore;
        let more = confirm(`${langSelect.more}`);
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
