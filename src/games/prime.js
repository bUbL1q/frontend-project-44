import readlineSync from 'readline-sync';
import getRandomNumber from '../randomnumber.js';
import logic from '../index.js';
import isitPrime from '../genprime.js';

const gamePrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  for (let i = 0; i <= 2; i += 1) {
    const random = getRandomNumber();
    const TrueOrFalse = isitPrime(random);
    let TrueOtvet;
    console.log(`Question: ${random}`);
    const otvet = readlineSync.question('Your answer: ');
    if (TrueOrFalse === true) {
      TrueOtvet = 'yes';
    } else (TrueOtvet = 'no');
    const ural = logic(otvet, TrueOtvet, i);
    if (ural) {
      break;
    }
  }
};

export default gamePrime;
