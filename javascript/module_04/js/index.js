'use strict'

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

const Cashier = function(name, productsDatabase) {
  this.name = name;
  this.productsDatabase = productsDatabase;
  this.totalPrice = 0;
  this.customerMoney = 0;
  this.changeAmount = 0;

  this.greet = function() {
    console.log( `Здравствуйте, вас обслуживает ${this.name}` );
  };

  this.onSuccess = function() {
    if (this.changeAmount > 0) {
      console.log( `Спасибо за покупку, ваша сдача ${this.changeAmount}` );
    } else {
      console.log( `Спасибо за покупку` );
    }
  };

  this.onError = function() {
    console.log( 'Очень жаль, вам не хватает денег на покупки' );
  };

  this.countTotalPrice = function(order) {
    for (const valOrder in order) {
      
      for (const valProduct in this.productsDatabase) {
        
        if (valOrder === valProduct) {
          this.totalPrice += order[valProduct] * this.productsDatabase[valProduct];
        }
      }
    }
  };

  this.getCustomerMoney = function(value) {
    this.customerMoney = value;
  };

  this.countChange = function() {
    this.changeAmount = this.customerMoney - this.totalPrice;
    
      if (this.changeAmount >= 0) {
        return this.changeAmount;
      } else {
       return this.changeAmount = null;
     };
  };

  this.reset = function() {
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
  };
}


const dim = new Cashier('Dmitriy', products);
console.log(dim.name); // Dmitriy
console.log(dim.productsDatabase); // ссылка на базу данных продуктов (объект products)
console.log(dim.totalPrice); // 0
console.log(dim.customerMoney); // 0
console.log(dim.changeAmount); // 0

dim.greet(); // Здравствуйте, вас обслуживает Dmitriy

dim.countTotalPrice(order);
console.log( `Cумма цен покупаемых продуктов: ${dim.totalPrice}` );  // 110

dim.getCustomerMoney(300);
console.log( `Колличество денег, переданная покупателем: ${dim.customerMoney}` ); // 300

const result = dim.countChange();
console.log(`Сдача: ${result}`);

if (result !== null) {
   // При успешном обслуживании вызываем метод onSuccess
  dim.onSuccess(); // Спасибо за покупку, ваша сдача 190
} else {
  // При неудачном обслуживании вызываем метод onError   
  dim.onError(); // Очень жаль, вам не хватает денег на покупки
};

// Вызываем reset при любом исходе обслуживания
dim.reset();
console.log(dim.totalPrice);
console.log(dim.customerMoney);
console.log(dim.changeAmount);