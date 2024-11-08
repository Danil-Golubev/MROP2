
import readlineSync from 'readline-sync';
import { playGame } from './enginge.js';
import { progressionGame } from './games/progressionGame.js';
import { nokGame } from './games/nokGame.js';

console.log('Выберите игру:');
console.log('1 - Геометрическая прогрессия');
console.log('2 - НОК');
const choice = readlineSync.question('Введите номер игры: ');

switch (choice) {
  case '1':
    playGame(progressionGame);
    break;
  case '2':
    playGame(nokGame);
    break;
  default:
    console.log('Неверный выбор');
    break;
}
