'use strict'

const cart01 = {
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
    console.log('Всего товаров на сумму:', cart01.getTotalPrice(), 'рублей');
  },

};


cart01.add ('console', 50000 , 3);
cart01.add ('coffeeMachine', 12000, 2);
cart01.add ('refrigerator', 40000, 10);

cart01.print();
