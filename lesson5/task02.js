'use strict'


function isPrime(x) {
  if(x === 5) {
    return true;
  } else if (x === 1){
    return false;
  }else {
    for (let n = 2; x <= n; x++) {
      if (n % x === 0) {
        return true;
      }
    }
  }

}
console.log(isPrime(5));


