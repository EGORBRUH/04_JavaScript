'use strict';

const allCashbox1 = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];


const getAverageValue = (check) => {
    const sum = check.reduce((acc, check) => acc + check, 0);
    const length = check.length;
    return Math.floor(sum / length)
  }

console.log(getAverageValue(allCashbox1));
