import readlineSync from 'readline-sync';
import getRandomNumber from '../randomnumber.js';
import logic from '../index.js';
import getDiv from '../funcgcd.js';

const gameGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i <= 2; i += 1) {
    const random1 = getRandomNumber();
    const random2 = getRandomNumber();
    console.log(`Question: ${random1} ${random2}`);
    const TrueOtvet = String(getDiv(random1, random2));
    const otvet = readlineSync.question('Your answer: ');
    const ural = logic(otvet, TrueOtvet, i);
    if (ural) {
      break;
    }
  }
};

export default gameGcd;
