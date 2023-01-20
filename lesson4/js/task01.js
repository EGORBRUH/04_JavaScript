'use strict';

const money = + prompt('Где деньги Лебовски?');

const conversion = (eur, usd) => {
  const con1 = eur * usd;
  console.log(money * con1);

}
conversion(1.2, 73);
