'use strict';
/*
  Сеть фастфудов предлагает несколько видов гамбургеров.
  Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
	- маленькая (+30 денег, +50 калорий)
	- большая (+50 денег, +100 калорий)
  Гамбургер может быть с одной из нескольких видов начинок (обязательно):
	- сыром (+15 денег, +20 калорий)
	- салатом (+20 денег, +5 калорий)
	- мясом (+35 денег, +15 калорий)
  Дополнительно, гамбургер можно:
	- посыпать приправой (+10 денег, +0 калорий)
	- полить соусом (+15 денег, +5 калорий)
  Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход,
  создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин.
  Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать
  указанные методы, которые принимают и возвращают данные указанного типа.
*/

/**
 * Класс, объекты которого описывают параметры гамбургера.
 */
class Hamburger {
  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get stuffing() {
    return this._stuffing;
  }

  set stuffing(value) {
    this._stuffing = value;
  }

  get toppings() {
    return this._toppings;
  }

  set toppings(arr) {
    this._toppings = arr;
  }

  static get SIZE_SMALL() {
    return 'SIZE_SMALL';
  }
  static get SIZE_LARGE() {
    return 'SIZE_LARGE';
  }

  static get STUFFING_CHEESE() {
    return 'STUFFING_CHEESE';
  }
  static get STUFFING_SALAD() {
    return 'STUFFING_SALAD';
  }
  static get STUFFING_MEAT() {
    return 'STUFFING_MEAT';
  }

  static get TOPPING_SPICE() {
    return 'TOPPING_SPICE';
  }
  static get TOPPING_SAUCE() {
    return 'TOPPING_SAUCE';
  }

  /**
   * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
   * @param {String} topping - Тип добавки
   */
  addTopping(topping) {
    if (!this.toppings.includes(topping)) {
      this.toppings.push(topping);
    }
  }
  /**
   * Убрать topping, при условии, что она ранее была добавлена
   * @param {String} topping - Тип добавки
   */
  removeTopping(topping) {
    this.toppings = this.toppings.filter(item => topping !== item);
  }

  /**
   * Получить список toppings
   * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
   *
   * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
   */
  getToppings() {
    return this.toppings;
  }

  /**
   * Узнать размер гамбургера
   * @returns {String} - размер гамбургера
   *
   * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
   */
  getSize() {
    return this.size;
  }

  /**
   * Узнать начинку гамбургера
   * @returns {String} - начинка гамбургера
   *
   * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
   */
  getStuffing() {
    return this.stuffing;
  }

  get price() {
    const getToppingPrice = this.toppings.reduce(
      (acc, item) => (acc += Hamburger.TOPPINGS[item].price),
      0,
    );

    const getSizePrice = Hamburger.SIZES[this.size].price;
    const getStuffPrice = Hamburger.STUFFINGS[this.stuffing].price;

    return getToppingPrice + getSizePrice + getStuffPrice;
  }

  get calories() {
    const getToppingCal = this.toppings.reduce(
      (acc, item) => (acc += Hamburger.TOPPINGS[item].calories),
      0,
    );

    const getSizeCal = Hamburger.SIZES[this.size].calories;
    const getStuffCal = Hamburger.STUFFINGS[this.stuffing].calories;

    return getToppingCal + getSizeCal + getStuffCal;
  }

  /**
   * Узнать цену гамбургера
   * @returns {Number} - Цена в деньгах
   *
   * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
   */
  calculatePrice() {
    return this.price;
  }

  /**
   * Узнать калорийность
   * @returns {Number} - Калорийность в калориях
   *
   * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
   */
  calculateCalories() {
    return this.calories;
  }
}

/*
  Размеры, виды добавок и начинок объявите как статические поля класса.
  Добавьте отсутсвующие поля по аналогии с примером.
*/

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50,
  },
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100,
  },
};

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20,
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 5,
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    calories: 15,
  },
};

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0,
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5,
  },
};

/* Вот как может выглядеть использование этого класса */

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE,
);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log('Calories: ', hamburger.calculateCalories());

// Сколько стоит?
console.log('Price: ', hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log('Price with sauce: ', hamburger.calculatePrice());

// Проверить, большой ли гамбургер?
console.log(
  'Is hamburger large: ',
  hamburger.getSize() === Hamburger.SIZE_LARGE,
); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log('Hamburger has %d toppings', hamburger.getToppings().length); // 1

/*
  🔔 Обратите внимание на такие моменты:
    	✔️ класс не взаимодействует с внешним миром. Это не его дело, этим занимается
    		другой код, а класс живет в изоляции от мира
    	✔️ обязательные параметры (размер и начинка) мы передаем через конструктор,
		чтобы нельзя было создать объект, не указав их
    	✔️ необязательные (добавка) добавляем через методы
    	✔️ типы начинок обозначены "константами" с понятными именами (на самом деле просто
	    	свойствами, написанным заглавными буквами, которые мы договорились считать "константами")
    	✔️ объект создается через конструктор - функцию, которая задает начальные значения полей.
    	✔️ в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки),
      		а не вычисленные из них (цена, число калорий и т.д.). Рассчитывать цену и калории
		логично в тот момент, когда это потребуется, а не заранее.
*/
