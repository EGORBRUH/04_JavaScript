'use strict'
{

  const product = '"Приставка денди"' + prompt('"Приставка Денди"');
  const number = 5 + prompt('Едениц товара');
  const category = 'Категория товара' + prompt('Категория товара');
  const price = 200 + prompt('деревянных');

  let num = prompt('Введите число', '0');

  if (num >= 0) {
    console.log(typeof + num)
    alert("Вы правы!");
  } else {
    alert("Вы ввели некорректные данные")
  }

}
