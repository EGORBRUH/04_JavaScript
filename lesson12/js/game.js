'use strict';


(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];

  const computerInput = () => {
    let computerResult = null;

    const computerChoice = Math.random();

    if (computerChoice < 0.34) {
      computerResult = FIGURES_RUS[0] || FIGURES_ENG[0];
    } else if (computerChoice < 0.67) {
      computerResult = FIGURES_RUS[1] || FIGURES_ENG[1];
    } else {
      computerResult = FIGURES_RUS[2] || FIGURES_ENG[2];
    }

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
      you: `Вы выбрали:`,
      comp: `Компьютер выбрал:`,
      win: `Вы выйграли!`,
      draw: `Ничья!`,
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
      win: `You have won!`,
      you: `You have selected:`,
      draw: `Draw!`,
      comp: `The computer has selected:`,
      lost: `You have lost!`,
      result: `RESULT GAME:`,
      player: `Player:`,
      compPLayer: `Computer:`,
    },
  };


  const game = (language) => {
    const results = {
      computerScore: 0,
      playerScore: 0,
    };

    const gameLang = prompt(`Русская или английская версия? Russian or english version?`);
    if (gameLang === 'ENG' || 'EN' && gameLang !== 'RU') {
      language = 'ENG';
      alert(`Вы выбрали английскую версию игры! Your choose english version!`);
    } if (gameLang === 'RU') {
      language = 'RU';
      alert(`Вы выбрали Рускую версию игры! Your choose russian version`);
    }

    return function play() {
      const notification = () => {
        let notification;
        if (language === 'ENG' || language === 'EN') {
          notification = langObj.ENG;
        }
        if (language === 'RU') {
          notification = langObj.RU;
        }
        return notification;
      };

      const gameObject = {
        playerScore: 0,
        computerScore: 0,

        get finalScore() {
          alert(`${langSelect.result} \n ${langSelect.player} ${this.playerScore} \n ${langSelect.compPLayer} ${this.computerScore}`);
          return gameObject;
        },
      };

      const langSelect = notification();
      const computerPlayer = computerInput();
      const userPlayer = prompt(`${langSelect.userPlayer}`, '');
      const playObject = gameObject;
      const userInput = langSelect.figures = userPlayer;


      if (userInput !== langSelect.figures) {
        alert(`${langSelect.valid}`);
        return play();
      }

      if (userPlayer === null || 0) {
        const question = confirm(`${langSelect.exit}`);
        if (question === true) {
          playObject.finalScore;
          return;
        } else {
          return play();
        }
      }


      if (userPlayer === langSelect.figures[0] && computerPlayer === langSelect.figures[1] ||
        userPlayer === langSelect.figures[1] && computerPlayer === langSelect.figures[2] ||
        userPlayer === langSelect.figures[2] && computerPlayer === langSelect.figures[0]) {
        alert(`${langSelect.you} ${userPlayer} ${langSelect.comp} ${langSelect.figures = computerPlayer} ${langSelect.win}`);
        results.playerScore++;
        playObject.playerScore = results.playerScore;
        const more = confirm(`${langSelect.more}`);
        if (more === true) {
          return play();
        } else {
          playObject.finalScore;
          return;
        }
      } else if (userPlayer === computerPlayer) {
        alert(`${langSelect.you} ${userPlayer} ${langSelect.comp} ${computerPlayer} ${langSelect.draw}`);
        const more = confirm(`${langSelect.more}`);
        if (more === true) {
          return play();
        } else {
          playObject.finalScore;
          return;
        }
      } else {
        alert(`${langSelect.you} ${userPlayer} ${langSelect.comp} ${computerPlayer} ${langSelect.lost}`);
        results.computerScore++;
        playObject.computerScore = results.computerScore;
        const more = confirm(`${langSelect.more}`);
        if (more === true) {
          return play();
        } else {
          playObject.finalScore;
          return;
        }
      }
    };
  };


  window.RPS = game;
})();
