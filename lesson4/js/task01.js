'use strict';


  const getTotalRub = (total) => {

    const getUSD = (cash) => {
      return 73;
    };

    const usd = getUSD();

    const getEUR = (cash) => {
      return 1.2;
    }

    const eur = getEUR;

    return (getEUR() * getUSD());

}

const result = getTotalRub();
console.log('result: ' , result);




