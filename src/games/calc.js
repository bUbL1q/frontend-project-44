import readlineSync from 'readline-sync';
import logic from '../index.js';
import getRandomNumber from '../randomnumber.js';

const gameCalc = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const symfol = '+-*';
    const all = symfol[getRandomNumber(0, 2)];
    console.log(`Question: ${num1} ${all} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    let trueanswer;
    if (all === '+') {
      trueanswer = String(num1 + num2);
    }
    if (all === '-') {
      trueanswer = String(num1 - num2);
    }
    if (all === '*') {
      trueanswer = String(num1 * num2);
    }
    const ural = logic(trueanswer, answer, i);
    if (ural) {
      break;
    }
  }
};

export default gameCalc;
