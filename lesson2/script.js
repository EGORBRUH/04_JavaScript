'use strict'
{

  prompt('Денди');
  prompt('Едениц товара');
  prompt('Категория товара')
  prompt('Цена товара')

  const product = '"Приставка Денди"';
  const number = 5;
  const category = 'gameConsole';
  const price = 200;

  console.log(typeof product);

  console.log(typeof number);

  console.log(typeof category);

  console.log(typeof price);

  console.log('На складе', number, 'едениц товара', product, 'на сумму', number * price, 'деревянных');

}
