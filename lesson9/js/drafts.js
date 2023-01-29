'use strict';

const car = {
  car: 'mini',
  model: 'cooper',
  price: 30000,
};

Object.defineProperties(car, 'model', {                             // Первым параметром мы передаем объект,
  configurable: true,   //   false - запрещает удалять(То что нам и нужно)  // вторым передает либо новое свойство.
  enumerable: true, //key, values fot-in отменяются при trye    //   Дескрипторы флаги  // третьим параметро м мы передаем объект с дескрипторами
  writable: true, // Запрещает перезаписывать значение как оно перезаписано ниже  //   т.е (Простые) Пфффф... А какие тогда сложные?
});

car.model = 'electric'; //Переопределение параметра
delete car.model;  // Удаление объекта

console.log(car);
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));


Object.defineProperties(car, 'fullName', {
  get() {  // Что то возвращает!!
    return `${this.car} ${this.model}`
  },
  set(val) {    // Записывает значение  //Геттеры и Сеттеры это функции
    this.comment = val;
  }
});
// Получаем геттер и записываем value
console.log(car.fullName);// Не вызывая функции, просто записали свойство fullName,
// которое вывело результат значение которое возвращает геттер в консоль.

car.fullName = 'Тачка огонь' // Появляется новое значение в объекте комментатий

console.log(car);
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));
