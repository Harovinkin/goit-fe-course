'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const login = prompt('Ввелите логин', '');

function checkLoginValidity(login) {
  return login.length >= 4 && login.length <= 16 ? true : false;
}

function checkIfLoginExists(logins, login) {
  for (const val of logins) {
    if (login === val) {
      return true;
    }
  }

  return false;
}

function addLogin(logins, login) {
  if (login !== null) {
    const isLoginValidity = checkLoginValidity(login);

    if (isLoginValidity) {
      const isLoginExists = checkIfLoginExists(logins, login);
      if (!isLoginExists) {
        logins.push(login);
        return 'Логин успешно добавлен!';
      } else {
        return 'Такой логин уже используется!';
      }
    } else {
      return 'Ошибка! Логин должен быть от 4 до 16 символов';
    }
  }

  return 'Отменено пользователем';
}

const result = addLogin(logins, login);

alert(result);
