'use strict'
{



  const product = '"Приставка денди"' + prompt('"Приставка Денди"');
  const number = 5 + prompt('Едениц товара');
  const category = 'Категория товара' + prompt('Категория товара');
  const price = 200 + prompt('деревянных');



  console.log(typeof product);
  console.log(typeof number);
  console.log(typeof category);
  console.log(typeof price);

  console.log('На складе', number, 'едениц товара', product, 'на сумму', number * price, 'деревянных');

}
