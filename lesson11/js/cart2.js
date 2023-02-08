'use strict';

const cart3 = {
  items: [],
  totalPrice: 0,
  count: 0,
  discount: '',

  get getTotalPrice() {
    return this.totalPrice;

  },
  set setDiscount(promocode){
    if (promocode === 'METHED') {
      this.discount = 15;
    }if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
    console.log(this.discount);
  },

  increaseCount(num) {
    this.count += num;
  },

  add(title, price, amount) {
    const item = {
      title,
      price,
      amount,
    };

    this.items.push(item);
    this.increaseCount(amount);
    this.calculateItemPrice();
  },

  clear() {
    this.items.length = 0;
    this.totalPrice = 0;
    this.count = 0;
  },

  calculateItemPrice() {
    this.totalPrice = this.items.reduce((acc, current) =>
      acc + (current.price * current.amount), 0);


    if (this.discount) {
      return this.totalPrice * ((100 - this.discount) / 100);
    } else {
      return this.totalPrice;
    }
  },


  print() {
    this.items.forEach(item => console.log(`${item.title} :
    ${JSON.stringify(item)}`));
    console.log('Всего товаров на сумму:', this.getTotalPrice, 'рублей');
  },

};


cart3.add('console', 50000, 3);
cart3.add('coffeeMachine', 12000, 2);
cart3.add('refrigerator', 40000, 10);

cart3.setDiscount = 'NEWYEAR';

cart3.print();
