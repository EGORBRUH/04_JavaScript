// 'use strict';
//
//
// const cart = {
//   items: [],
//   totalPrice: 0,
//   count: 0,
//
//   getTotalPrice (total) {
//     return this.totalPricerice;
//
//   },
//   add (name, price, amount) {
//     const item = {
//       name,
//       price,
//       amount,
//     }
//     this.item.push(item);
//     this.increaseCount(amount);
//     this.calculateItemPrice();
//   },
//
//   increaseCount () {
//     this.count += num;
//   },
//
//   calculateItemPrice() {
//     this.totalPrice = this.item.reduce((acc, current) => acc + (current.price * current.amount), 0)
//   },
//
//   clear() {
//     this.items.length = 0;
//     this.totalPrice = 0;
//     this.count = 0;
//   },
//
//   print() {
//     this.item.forEach(item => console.log(`${item.title} : ${JSON.stringify(item)}`));
//     console.log('Всего товаров на сумму:', cart.getTotalPrice(), 'рублей');
//   },
//
// }
//
// cart.add ('console', 1000 , 2);
// cart.add ('coffeeMachine', 15000, 2);
// cart.add ('refrigerator', 10000, 10);
// cart.clear();
// cart.print();


const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {         // метод получение всей стоимости товаров
    return this.totalPrice;
  },

  increaseCount (num) {      // метод увеличения товара;
    this.count += num;
  },

  add(title, price, amount ) {  // метод формирование объекта из полученных параметров

    const item = {
      title,
      price,
      amount,
    }

    this.items.push(item);
    this.increaseCount(amount);
    this.calculateItemPrice();
  },

  clear () {                    // метод возращение начальных значений
    this.items.length = 0;
    this.totalPrice = 0;
    this.count = 0;
  },

  calculateItemPrice () {                 //  метод подсчета всей стоимости товаров в корзине
    this.totalPrice = this.items.reduce((acc, current) =>
      acc + (current.price * current.amount), 0)

  },


  print() {
    this.items.forEach(item => console.log(`${item.title} : ${JSON.stringify(item)}`));
    console.log('Всего товаров на сумму:', cart.getTotalPrice(), 'рублей');
  },

};


cart.add ('console', 50000 , 3);
cart.add ('coffeeMachine', 12000, 2);
cart.add ('refrigerator', 40000, 10);

cart.print();
