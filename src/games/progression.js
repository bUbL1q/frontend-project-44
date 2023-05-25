import readlineSync from 'readline-sync';
import getRandomNumber from '../randomnumber.js';
import logic from '../index.js';
import getres from '../genProgression.js';

const brainProgression = () => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i <= 2; i += 1) {
    const random1 = getRandomNumber();
    const random2 = getRandomNumber();
    const progress = getres(random1, random2);
    const TrueOtvet = String(progress[1]);
    console.log(`Question: ${progress[0]}`);
    const otvet = readlineSync.question('Your answer: ');
    const ural = logic(otvet, TrueOtvet, i);
    if (ural) {
      break;
    }
  }
};

export default brainProgression;
