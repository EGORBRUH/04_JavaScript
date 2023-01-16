'use strict'

{
  // Задача 2


  (Math.random(0 , 1));

  const rain = Math.random(1 , 0);

  if (Math.round(rain) === 1) {
    alert('Пошёл дождь. Возьмите зонт!');
  } else {
    alert('Дождя нет!');

  }


}

{
  // Задача 3

  const math = + prompt('Введите колличество баллов по математике');
  const russ = + prompt('Введите колличество баллов по русскому языку');
  const inf = + prompt('Введите колличество баллов по информатике');
  const total = 265;

  if (math + russ + inf === total) {
      alert('Поздравляю, вы поступили на бюджет!');
    } else {
    alert('Вы не поступили');
  }

}



// Задача 4

{
  const many = +prompt('Сколько денег Вы хотите снять?');

  const cash = 100;

  if (many % cash === 0) {
    alert('Успешно');
  } else {
    alert('Ошибка');

  }

}




