'use srtict';

const ADMIN_LOGIN = 'admin';

const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';

const userCancel = 'Отменено пользователем!';

const accessErr = 'Доступ запрещен!';

const accessYes = 'Добро пожаловать!';

const userLog = prompt('Введите Логин');

if (userLog === ADMIN_LOGIN) {
  const userPass = prompt('Введите Пароль');

  if (userPass === ADMIN_PASSWORD) {
    alert(accessYes);
  } else if (userPass === null) {
    alert(userCancel);
  } else {
    alert(accessErr);
  }
} else if (userLog === null) {
  alert(userCancel);
} else {
  alert(accessErr);
}