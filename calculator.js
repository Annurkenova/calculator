const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        throw new Error('На ноль делить нельзя!');  
        // Хотя в JS вроде при делении на ноль получается беспконечность, но это все-таки калькулятор, значит правила математики))
      }
    default:
      throw new Error('Неверные входные данные');
  }
}

rl.question('Пожалуйста, введите первое число: ', (num1) => {
  rl.question('Введите один из операторов (+, -, *, /): ', (operator) => {
    rl.question('Введите второе число: ', (num2) => {
      try {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        const result = calculate(operator, num1, num2);
        console.log(`Результат: ${result}`);
      } catch (error) {
        console.error('Ошибка:', error.message);
      } finally {
        rl.close();
      }
    });
  });
});