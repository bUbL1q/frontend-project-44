import readlineSync from 'readline-sync';
import getRandomNumber from '../randomnumber.js';
import logic from '../index.js';

const gameEven = () => {
    console.log ('Answer "yes" if the number is even, otherwise answer "no".')
    for (let i = 0; i < 3; i += 1) {
    const num = getRandomNumber();
    const trueanswer = num % 2 === 0 ? 'yes' : 'no'
    console.log (`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ')
    const ural = logic(trueanswer, answer, i);
    if (ural) {
        break
    }
}
}

export default gameEven;