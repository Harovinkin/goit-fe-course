'use strict';

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;

out: do {
  const userPassword = prompt('Введите свой пароль', '');

  if (userPassword !== null) {
    for (const val of passwords) {
      if (userPassword === val) {
        alert('Добро пожаловать!');
        break out;
      }
    }
    
    attempts -= 1;

    if (attempts > 0) {
      alert(`"Неверный пароль, у вас осталось ${attempts} попыток"`);
    } else {
      alert("У вас закончились попытки, аккаунт заблокирован!");
      break out;
    }

  } else {
    break out;
  }
  
} while (attempts);



