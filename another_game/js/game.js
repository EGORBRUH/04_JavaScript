'use strict';

let step = true,
  playerCountBalls = 10,
  compCountBalls = 10,
  playBtn = document.querySelector('.play'),
  playerBag = document.querySelector('.player-bag'),
  compImg = document.querySelector('.comp-img'),
  playerImg = document.querySelector('.player-img'),
  playerCount = document.querySelector('.player__count'),
  playerCountBtn = document.querySelector('.player__count-btn'),
  evenBtn = document.querySelector('.even'),
  oddBtn = document.querySelector('.odd'),
  playText = document.querySelector('.play__text'),
  results = document.querySelector('.game__results'),
  guessCompBalls,
  guessPlayerBalls,
  compEvenOdd,
  messages = {
    'wrong_bet': 'Неверная ставка',
    'step_456': 'Угадывает 456! <br>Сделай ставку и выбери Четное/Нечетное',
    'win_456': 'Игра окончена! Победил 456!',
    'res_456': '456 сделал ставку',
    'step_001': 'Угадывает 001! <br>Сделай ставку',
    'win_001': 'Игра окончена! Победил 001!',
    'res_001': '001 сделал ставку',
  };

let compTotal = document.querySelector('.comp__total');
let playerTotal = document.querySelector('.player__total');


//Запуск игры сначала
playBtn.addEventListener('click', play);
function play () {
  playBtn.classList.add('hide');
  playerCountBalls = 10;
  compCountBalls = 10;
  results.innerHTML = '';
  compImg.setAttribute('src', 'img/001-sad.jpg');
  playerImg.setAttribute('src', 'img/456-sad.jpg');
  playerCountBtn.removeAttribute('disabled');
  playerCount.removeAttribute('disabled');
  evenBtn.setAttribute('disabled', 'disabled');
  oddBtn.setAttribute('disabled', 'disabled');
  createBalls(playerCountBalls, compCountBalls);
  stepPlayers(step);
}


//Перерасчет шариков и смена картинки мешка
function createBalls (playerCount, compCount) {
  playerCount >= 20 || playerCount <= 0 ?
    playerBag.setAttribute('src', 'img/empty.png') :
    playerBag.setAttribute('src', `img/${playerCount}.png`);

  compTotal.innerHTML = compCount;
  playerTotal.innerHTML = playerCount;
}

// Ставка и выбор компьютера
function compGuess() {
  //Ставка компа случайным образом от 1 до его колл - ва шариков
  guessCompBalls = Math.round(Math.random() *(compCountBalls - 1) + 1);
  // Случайный выбор четное или нечетное
  compEvenOdd = Math.floor(Math.random());
  console.log('Ставка компа - ' + guessCompBalls);
  if(compEvenOdd) console.log('Комп выбрал нечетное');
  else console.log('Комп выбрал четное');
}

// Определение хода игроков
function stepPlayers(step) {
  compGuess(); // Загадывает комп
  if (step) { //ходит игрок
    playText.innerHTML = messages.step_456;
    playerCountBtn.addEventListener('click', function st_pl() {
      guessPlayerBalls = +playerCount.value;
      if (guessPlayerBalls === 0 || guessPlayerBalls > playerCountBalls || isNaN(guessPlayerBalls)) {
        playText.innerHTML = messages.wrong_bet;
        setTimeout(() => {
          playText.innerHTML = messages.step_456;
          playerCount.value = '';
        }, 2000);
      }
      else { // если прошли валидацию
        playerCountBtn.setAttribute('disabled', 'disabled');
        playerCount.setAttribute('disabled', 'disabled');
        evenBtn.removeAttribute('disabled');
        oddBtn.removeAttribute('disabled');
        playerCount.value = '';
        this.removeEventListener('click', st_pl);
      }
    });
  } else { // Если ходит комп
    playText.innerHTML = messages.step_001;
    evenBtn.setAttribute('disabled', 'disabled');
    oddBtn.setAttribute('disabled', 'disabled');
    playerCountBtn.removeAttribute('disabled');
    playerCount.removeAttribute('disabled');

    playerCountBtn.addEventListener('click', function st_cp() {
      guessPlayerBalls = +playerCount.value;
      if (guessPlayerBalls === 0 || guessPlayerBalls > playerCountBalls || isNaN(guessPlayerBalls)) {
        playText.innerHTML = messages.wrong_bet;
        setTimeout(() => {
          playText.innerHTML = messages.step_456;
          playerCount.value = '';
        }, 2000);
      }
      else { // если прошли валидацию
        writeBets(messages.res_001, guessCompBalls, compEvenOdd);
        checkWinner(guessCompBalls, guessPlayerBalls, compEvenOdd, step);
        playerCount.value = '';
        this.removeEventListener('click', st_cp);
      }
    });

  }
}
// Выбор игрока
  evenBtn.addEventListener('click', function () {
    checkWinner(guessCompBalls, guessPlayerBalls, 0, step);
    writeBets(messages.res_456, guessPlayerBalls, 0);
  });
  oddBtn.addEventListener('click', function () {
    checkWinner(guessCompBalls, guessPlayerBalls, 1, step);
    writeBets(messages.res_456, guessPlayerBalls, 1);
  });


// Запись ставок в таблицу
  function writeBets(messBet, countBall, choices) {
    let item = document.createElement('div');
    item.innerHTML = `${messBet} <strong>${countBall}</strong> и выбрал ${choices ? 'нечетное' : 'четное'}`;
    results.append(item);
  }

// Запись результатов хода
  function writeResultStep(mess, countBalls) {
    let item = document.createElement('div');
    item.innerHTML = `${mess} <strong>${countBalls}</strong> шт.`;
    results.append(item);
  }

//Функция отключения кнопок игрока в случае окончания игры
  function disabledButtons() {
    playerCountBtn.setAttribute('disabled', 'disabled');
    playerCount.setAttribute('disabled', 'disabled');
    evenBtn.setAttribute('disabled', 'disabled');
    oddBtn.setAttribute('disabled', 'disabled');
  }

// Проверка победителя
  function checkWinner(valueComp, valuePlayer, check, step) {
    // если ходит игрок и он угадал ставку компа или ходит комп и он не угадал мою ставку
    if ((valueComp % 2 == check && step) || (valuePlayer % 2 != check && !step)) {
      playerCountBalls += valuePlayer; // прибавляю к своим шарам свою же ставку
      compCountBalls -= valuePlayer; // отнимаю у компа свою ставку
      createBalls(playerCountBalls, compCountBalls);
      playerImg.setAttribute('src', 'img/456-happy.jpg');
      compImg.setAttribute('src', 'img/001-sad.jpg');
      //условия окончания игры
      if (playerCountBalls >= 20) {
        playText.innerHTML = messages.win_456;
        playBtn.classList.remove('hide');
        disabledButtons();
        return;
      }
      if (compCountBalls >= 20) {
        playText.innerHTML = messages.win_001;
        playBtn.classList.remove('hide');
        disabledButtons();
        return;
      }
      // сообщение в таблицу о результате данного хода
      setTimeout(() => {
        writeResultStep('456 выйграл', valuePlayer);
      }, 500);
    } else {
      playerCountBalls -= valueComp; // тонимаю у себя ставку компа
      compCountBalls += valueComp; // прибавляю компу его ставку
      createBalls(playerCountBalls, compCountBalls);
      playerImg.setAttribute('src', 'img/456-sad.jpg');
      compImg.setAttribute('src', 'img/001-happy.jpg');
      //условия окончания игры
      if (playerCountBalls >= 20) {
        playText.innerHTML = messages.win_456;
        playBtn.classList.remove('hide');
        disabledButtons();
        return;
      }
      if (compCountBalls >= 20) {
        playText.innerHTML = messages.win_001;
        playBtn.classList.remove('hide');
        disabledButtons();
        return;
      }
      // сообщение в таблицу о результате данного хода
      setTimeout(() => {
        writeResultStep('001 выйграл', valuePlayer);
      }, 500);
    }
    step = !step;  //меняю ход
    stepPlayers(step); // Запуск нового хода
  }

