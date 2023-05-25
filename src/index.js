import welcome from './cli.js';

const name = welcome();

function logic(answer, trueanswer, i) {
  if (trueanswer === answer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueanswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return true;
  }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
    return false;
  }
  return null;
}
export default logic;
