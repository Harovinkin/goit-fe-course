'use strict';

const sharm = 15;

const hurgada = 25;

const taba = 6;

const userReq = prompt('Введите колличество необходимых мест');

const userRegNum = Number(userReq);

if (Number.isNaN(userRegNum) === false && userRegNum > 0) {
  let result;

  if (userRegNum <= taba) {
    result = confirm(
      'Вы можете присоединится к группе "Taba". Согласны ли Вы?',
    );

    if (result === true) {
      alert('Приятного путешествия в группе "Taba"');
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  } else if (userRegNum <= sharm) {
    result = confirm(
      'Вы можете присоединится к группе "Sharm". Согласны ли Вы?',
    );

    if (result === true) {
      alert('Приятного путешествия в группе "Sharm"');
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  } else if (userRegNum <= hurgada) {
    result = confirm(
      'Вы можете присоединится к группе "Hurgada". Согласны ли Вы?',
    );

    if (result === true) {
      alert('Приятного путешествия в группе "Hurgada"');
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  } else {
    alert('Извините, столько мест нет ни в одной группе!');
  }
} else {
  alert('Ошибка ввода');
}
