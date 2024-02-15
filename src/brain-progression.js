import readlineSync from 'readline-sync';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (length) => {
  const start = generateRandomNumber(1, 10);
  const diff = generateRandomNumber(2, 5);
  const hiddenIndex = generateRandomNumber(0, length - 1);

  const progression = [];
  let hiddenElement;

  for (let i = 0; i < length; i += 1) {
    const num = start + diff * i;
    if (i === hiddenIndex) {
      progression.push('..');
      hiddenElement = num;
    } else {
      progression.push(num);
    }
  }

  return { progression, hiddenElement };
};

const playProgressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const { progression, hiddenElement } = generateProgression(10);

    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) === hiddenElement) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenElement}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playProgressionGame;
