import readline  from 'readline';

// Функция для нахождения НОК
function findLCM(a, b) {
  return (a * b) / findGCD(a, b);
}

// Функция для нахождения НОД
function findGCD(a, b) {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
}

// Генерация случайного числа в диапазоне
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Настройка для чтения ввода
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Основная функция игры
function startGame() {
  let score = 0;
  let attempts = 3;

  // Функция для одного раунда игры
  function playRound() {
    const num1 = getRandomNumber(1, 20);
    const num2 = getRandomNumber(1, 20);
    const correctAnswer = findLCM(num1, num2);

    rl.question(`Найдите НОК для чисел ${num1} и ${num2}: `, (input) => {
      const userAnswer = parseInt(input, 10);

      if (userAnswer === correctAnswer) {
        console.log('Правильно!');
        score++;
      } else {
        console.log(`Неправильно! Правильный ответ: ${correctAnswer}`);
        attempts--;
      }

      if (attempts > 0) {
        playRound();
      } else {
        console.log(
          `Игра окончена! Ваш результат: ${score} правильных ответов.`
        );
        rl.close();
      }
    });
  }

  playRound();
}

// Запуск игры
startGame();
