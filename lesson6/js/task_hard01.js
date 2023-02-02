'use strict';


const allCashbox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370]
];


const average = allCashbox => allCashbox.reduce((acc , curr) => acc + curr, 0) / allCashbox.length;



console.log(Math.round(average(allCashbox[1])));
