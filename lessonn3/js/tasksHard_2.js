'use strict';


const salary = +prompt('Ваш налог');

if (salary <= 15000) {
  console.log(Math.round((salary / 15000) * 13));
} if (salary >= 15000 && salary < 50000) {
  console.log(Math.round((salary / 15000) * 20));
} if (salary > 50000) {
  console.log((Math.round(salary / 50000) * 30));
}
