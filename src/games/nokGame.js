
const NOD = (a, b) => (b === 0 ? a : NOD(b, a % b));

const NOK = (a, b) => (a * b) / NOD(a, b);

const generateNokGameRound = () => {
  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 20) + 1;

  const question = `${num1} и ${num2}`;
  const correctAnswer = String(NOK(num1, num2));

  return { question, correctAnswer };
};

export const nokGame = {
  description: 'Найдите наименьшее общее кратное двух чисел.',
  generateRound: generateNokGameRound,
};
