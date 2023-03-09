#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomNumber from '../src/randomnumber.js';
import logic from '../src/index.js';

const game = () => {
    console.log ('Answer "yes" if the number is even, otherwise answer "no".')
    for (let i = 0; i < 3; i += 1) {
    const num = getRandomNumber(1, 101);
    const trueanswer = num % 2 === 0 ? 'yes' : 'no'
    console.log (`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ')
    const ural = logic(trueanswer, answer, i);
    if (ural) {
        break
    }
}
}

game();