function isLoginValid(login) {
    return login.length >= 4 && login.length <= 16;
}
function isLoginUnique(allLogins, login) {
    return !allLogins.includes(login);
}
function addLogin(allLogins, login) {
    if (!isLoginValid(login)) {
      return 'Помилка! Логін повинен бути від 4 до 16 символів';
    }
  
    if (!isLoginUnique(allLogins, login)) {
      return 'Такий логін вже використовується!';
    }
  
    allLogins.push(login);
    return 'Логін успішно доданий!';
}
  
const existingLogins = ['john', 'Soda', 'admin', 'CzyToJestFreddyFazber'];
const newLogin = prompt('Введіть новий логін:');
const result = addLogin(existingLogins, newLogin);
  
console.log(result);
console.log('Поточні логіни:', existingLogins);