import readlineSync from 'readline-sync';

const isPrime = (number) => {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

const playPrimeGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    const rounds = 3;
    let correctAnswers = 0;

    for (let i = 0; i < rounds; i++) {
        const number = Math.floor(Math.random() * 100) + 1;

        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question('Your answer: ');

        const isNumberPrime = isPrime(number);
        const correctAnswer = isNumberPrime ? 'yes' : 'no';

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            correctAnswers += 1;
        } else {
            console.log(`Wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
};

export default playPrimeGame;
