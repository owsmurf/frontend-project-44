#!/usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

function playGcdGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 25) + 1;
    const randomNum2 = Math.floor(Math.random() * 25) + 1;
    console.log(`Question: ${randomNum} ${randomNum2}`);
    let correctAnswer;
    for (let j = 0; j <= randomNum && randomNum2; j += 1) {
      if (randomNum % j === 0 && randomNum2 % j === 0) {
        correctAnswer = j;
      }
    }
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}! You won!`);
}

playGcdGame();
