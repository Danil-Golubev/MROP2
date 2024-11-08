
const generateProgressionGameRound = () => {
    const length = 10;
    const step = Math.floor(Math.random() * 10) + 1;
    const start = Math.floor(Math.random() * 20) + 1;
    const hiddenIndex = Math.floor(Math.random() * length);
  
    const progression = Array.from({ length }, (_, i) => start + i * step);
    const correctAnswer = String(progression[hiddenIndex]);
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');
  
    return { question, correctAnswer };
  };
  
  export const progressionGame = {
    description: 'Угадайте пропущенное число в прогрессии.',
    generateRound: generateProgressionGameRound,
  };
  