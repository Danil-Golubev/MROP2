
import readlineSync from 'readline-sync';

const MAX_ROUNDS = 3;

export const playGame = (game) => {
  console.log('Добро пожаловать в игру!');
  console.log(game.description);

  for (let round = 1; round <= MAX_ROUNDS; round++) {
    const { question, correctAnswer } = game.generateRound();
    console.log(`Вопрос: ${question}`);
    const userAnswer = readlineSync.question('Ваш ответ: ');

    if (userAnswer === correctAnswer) {
      console.log('Правильно!');
    } else {
      console.log(`Неправильно. Правильный ответ: ${correctAnswer}`);
      return;
    }
  }
  
  console.log('Поздравляем, вы выиграли!');
};
