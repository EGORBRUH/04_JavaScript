'use strict';
{
  const min = 15000;
  const med = 15000 || 50000;
  const max = 50000;

  const total = +prompt('Ваш доход:');

  if (total <= min) {
    console.log(Math.round(total / 13));
  } if (total > med) {
    console.log(Math.round(total / 20));
  } if (total > max) {
    console.log(Math.round(total / 30));
  }
}

