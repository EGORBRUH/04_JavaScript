'use strict';


const getLeapYear = (n, m) => {
  const yearArr = [];
  for(let i = n; i <= m; i++) {
    yearArr.push(i);
  }
  const res = [];

  yearArr.forEach(function (year) {
    if (getLeapYear(year))
      res.push(year);
  });
  return res;

  function getLeapYear(year) {
    if((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
      return year;
    } else {
      return false;
    }
  }
};

console.log(getLeapYear(1904, 3000));
