import welcome from '../src/cli.js';

const name = welcome();

const logic = (answer, trueanswer, i) => {
if (String(trueanswer) === answer) {
  console.log ('Correct!')
} else {
  console.log (`'${answer}' is wrong answer ;(. Correct answer was '${trueanswer}'.`)
  console.log(`Let's try again, ${name}!`)
  return true
}
if (i === 2) {
  console.log(`Congratulations, ${name}!`)
  return false
}
}
export default logic;