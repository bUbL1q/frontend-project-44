import readlineSync from 'readline-sync';
import logic from '../src';
import getRandomNumber from "../src/randomnumber";
const calc = () => {
    console.log('What is the result of the expression?')
    for (let i = 0; i < 3; i += 1) {
        const num1 = getRandomNumber(1, 101);
        const num2 = getRandomNumber(1, 101);
        const symfol = '+-*'
        const all = symfol[getRandomNumber(0, 2)];
        console.log (`Question: ${num1} ${all} ${num2}`);
        const answer = readlineSync.question('Your answer: ')
        let trueanswer;
        if (all === '+'){
            trueanswer = num1 + num2
        } 
        if (all === '-'){
            trueanswer = num1 - num2
        } 
        if (all === '*'){
            trueanswer = num1 * num2
        } 
        const ural = logic(trueanswer, answer, i);
        if (ural) {
          break
    }
    }
}
calc()