import readline  from 'readline';

// Функция для генерации геометрической прогрессии
function generateGeometricProgression(start, ratio, length) {
  const progression = [];
  let currentTerm = start;
  
  for (let i = 0; i < length; i++) {
    progression.push(currentTerm);
    currentTerm *= ratio;
  }

  return progression;
}

// Настройка интерфейса для ввода
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Функция для запуска игры
function playGame() {
  // Настройки игры
  const progressionLength = Math.floor(Math.random() * (10 - 5 + 1)) + 5; // Случайная длина прогрессии от 5 до 10
  const start = Math.floor(Math.random() * 10) + 1; // Случайное начальное число
  const ratio = Math.floor(Math.random() * (5 - 2 + 1)) + 2; // Случайное соотношение от 2 до 5

  // Генерация геометрической прогрессии
  const progression = generateGeometricProgression(start, ratio, progressionLength);

  // Выбор случайного индекса для замены на две точки
  const hiddenIndex = Math.floor(Math.random() * progressionLength);
  const hiddenValue = progression[hiddenIndex];
  
  // Скрываем число, заменяя его на '..'
  progression[hiddenIndex] = '..';

  // Отображение прогрессии игроку
  console.log('Геометрическая прогрессия:');
  console.log(progression.join(' '));

  // Запрос на ввод ответа
  rl.question('Какое число скрыто в прогрессии? ', (userAnswer) => {
    const userNumber = parseFloat(userAnswer);

    // Проверка ответа
    if (userNumber === hiddenValue) {
      console.log('Правильно! Поздравляем!');
    } else {
      console.log(`Неправильно! Правильный ответ: ${hiddenValue}`);
    }

    // Закрытие интерфейса после игры
    rl.close();
  });
}

// Запуск игры
playGame();
