import readlineSync from 'readline-sync';

const findGCD = (num1, num2) => {
    if (!num2) {
        return num1;
    }
    return findGCD(num2, num1 % num2);
};

const playGCDGame = () => {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Find the greatest common divisor of given numbers.');

    for (let i = 0; i < 3; i++) {
        const number1 = Math.floor(Math.random() * 100) + 1;
        const number2 = Math.floor(Math.random() * 100) + 1;
        const question = `Question: ${number1} ${number2}`;
        console.log(question);
        const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);
        const correctAnswer = findGCD(number1, number2);

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};

export default playGCDGame;
