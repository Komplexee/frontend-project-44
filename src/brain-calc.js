import readlineSync from 'readline-sync';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateExpression = () => {
    const num1 = generateRandomNumber(1, 50);
    const num2 = generateRandomNumber(1, 50);
    const operators = ['+', '-', '*'];
    const operator = operators[generateRandomNumber(0, 2)];

    return `${num1} ${operator} ${num2}`;
};

const calculateExpression = (expression) => {
    const [num1, operator, num2] = expression.split(' ');
    switch (operator) {
        case '+':
            return parseInt(num1, 10) + parseInt(num2, 10);
        case '-':
            return parseInt(num1, 10) - parseInt(num2, 10);
        case '*':
            return parseInt(num1, 10) * parseInt(num2, 10);
        default:
            return NaN;
    }
};

const playCalcGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('What is the result of the expression?');

    const rounds = 3;
    let correctAnswers = 0;

    for (let i = 0; i < rounds; i++) {
        const expression = generateExpression();
        const correctAnswer = calculateExpression(expression);

        console.log(`Question: ${expression}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (parseInt(userAnswer, 10) === correctAnswer) {
            console.log('Correct!');
            correctAnswers += 1;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
};

export default playCalcGame;
