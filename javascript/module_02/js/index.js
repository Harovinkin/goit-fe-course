'use strict';

let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt('Введите число', '');

  let userInputNum = Number(userInput);

  if (userInput !== null) {
    if (Number.isNaN(userInputNum) === false) {
      numbers.push(userInputNum);
    } else {
      alert('Было введено не число, попробуйте еще раз :)');
    }
  } else {
    break;
  }
} while (true);

for (const value of numbers) {
  if (numbers[0] !== 0) {
    total += value;
  }
}
alert(`Общая сумма чисел равна: ${total}`);