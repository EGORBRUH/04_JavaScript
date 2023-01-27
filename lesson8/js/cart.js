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

  getTotalPrice() {
    return this.totalPrice;
  },

  increaseCount (num) {
    this.count += num;
  },

  add(title, price, amount ) {

    const item = {
      title,
      price,
      amount,
    }

    this.items.push(item);
    this.increaseCount(amount);
    this.calculateItemPrice();
  },

  clear () {
    this.items.length = 0;
    this.totalPrice = 0;
    this.count = 0;
  },

  calculateItemPrice () {
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
