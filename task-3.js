const userPassword = 'jqueryismyjam';

const ADMIN_PASSWORD = 'jqueryismyjam';

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message;

// Write code under this line
  if (userPassword === null) {
  	message  = CANCELED_BY_USER;
  } else if (userPassword === ADMIN_PASSWORD) {
  	message  = ACCESS_IS_ALLOWED;
  } else {
  	message  = ACCESS_DENIED;
  }

// console.log(message);

//если userPassword равно 'jqueryismyjam' 
// то значение message будет равно
// 'Добро пожаловать!'

if (userPassword) {
    if (userPassword === ADMIN_PASSWORD) {
        message  = ACCESS_IS_ALLOWED;
    } else {
        message  = ACCESS_DENIED;
    }
} else {
    message  = CANCELED_BY_USER;
}
 message = userPassword 
    ? userPassword === ADMIN_PASSWORD 
        ? ACCESS_IS_ALLOWED : ACCESS_DENIED
    : CANCELED_BY_USER
//если userPassword равно  null 
// то значение message будет равно  
// 'Отменено пользователем!'

//если userPassword равно '123' 
// то значение message будет равно
// 'Доступ запрещен, неверный пароль!'