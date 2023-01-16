'use strict'


const calculate = (sum , basket , promo) => {
  if (basket > 10){
   sum = sum - sum * 0.03;
  }

  if (sum > 30000) {
    sum = sum - (sum - 30000) * .15;
  }

  if ( promo === 'METHED'){
    sum = sum - sum * 0.10;

  } else if (promo === 'G3H2Z1' ) {
    sum -= 500 === basket > 2000;
  }

  return sum;
}


const results  = calculate(30000, 12,'METHED');
console.log('result: ' , results);







