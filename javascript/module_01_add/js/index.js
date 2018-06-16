'use strict';

const sharm = 15;

const hurgada = 25;

const taba = 6;

const userReq = prompt('Введите колличество необходимых мест');

const userReqNum = Number.parseFloat(userReq);

if (
  Number.isNaN(userReqNum) === false &&
  userReqNum % 1 === 0 &&
  userReqNum > 0
) {
  let isDecision;

  if (userReqNum <= taba) {
    isDecision = confirm(
      'Вы можете присоединится к группе "Taba". Согласны ли Вы?',
    );

    if (isDecision) {
      alert('Приятного путешествия в группе "Taba"');
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  } else if (userReqNum <= sharm) {
    isDecision = confirm(
      'Вы можете присоединится к группе "Sharm". Согласны ли Вы?',
    );

    if (isDecision) {
      alert('Приятного путешествия в группе "Sharm"');
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  } else if (userReqNum <= hurgada) {
    isDecision = confirm(
      'Вы можете присоединится к группе "Hurgada". Согласны ли Вы?',
    );

    if (isDecision) {
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
