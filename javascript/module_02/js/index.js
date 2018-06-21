'use strict';

let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt('Введите число', '');

  let userInputNum = Number(userInput);

  if (Number.isNaN(userInputNum) === false) {
    numbers.push(userInputNum);
  } else {
    alert('Было введено не число, попробуйте еще раз :)');
  }
} while (userInput !== null);

for (const value of numbers) {
  total += value;
}
alert(`Общая сумма чисел равна: ${total}`);
