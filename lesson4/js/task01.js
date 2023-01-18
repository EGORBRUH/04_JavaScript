'use strict';

const money = + prompt('Где деньги Лебовски?')


const conversion = (eur, usd) => {
  const con1 = eur * usd;
  const con2 = money * con1;
  console.log(con2);

}

conversion(1.2, 73);
